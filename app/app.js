import Cycle from '@cycle/core';
import {makeDOMDriver, div, input, p} from '@cycle/dom';
import rx from 'rx';
import unsafe from './unsafe.js';
import { makeHistoryDriver } from '@cycle/history';
import { createHistory, createHashHistory, useQueries } from 'history';
import switchPath from 'switch-path';
import view from './view.jsx';

import mainComponent from './main';
import releases from './releases';
import release from './release';

Rx.Observable.prototype.log = function (label = "rxjs", path){
  let label_ = "[" + label + "]";
  return this.map(x => {
    console.log(label_, path ? _.get(x, path) : x);
    return x;
  });
};

function main(sources) {
  const components = [mainComponent, releases, release];
  const routes = {
    '/': {handler: mainComponent},
    '/news/:date': x => ({handler: release, date: x}),
    '/news': {handler: releases}
  };

  const routing$ = sources.History.map(x => ({
    route: switchPath(x.pathname, routes),
    history: x
  }));
  var componentsOutput = [];
  for (let k in components) {
    let component = components[k];
    let mount$ = routing$.filter(x => x.route.value.handler == component).log('route');
    componentsOutput.push(component(sources, mount$));
  }
  let childDOM$ = rx.Observable.merge.apply(this, componentsOutput.map(x => x.DOM$));

  const sectionIds = ['home', 'product', 'contact', 'news'];
  var domCache = {};
  let navItems = rx.Observable.fromEvent(window, 'scroll')
        .withLatestFrom(sources.History, (x,y) => { // view内に対する操作でないので、明示的にルートで動作を制限する必要がある。
          return {event: x, path: y.pathname};
        })
        .filter(({path}) => path == "/" | path == '/home' ||
                path == "/product" || path == '/contact')
        .throttle(100)
        .map(x => {      
          let wsY = window.scrollY;
          var activeElmAppeared = false;
          return _.chain(sectionIds)
            .clone()
            .reverse()
            .map(id => {
              let elm = domCache[id] || (document.getElementById(id));
              if (!elm) return {id: id};
              var isActive = !activeElmAppeared && wsY >= elm.offsetTop;
              if (isActive) {
                activeElmAppeared = true;
              }
              return {id: id, active: isActive};
            })
            .reverse()
            .value();
        });

  const DOM$ = routing$
          .map(x => (_.assign(x, {navItems:
                                  sectionIds.map(id => ({
                                    id: id,
                                    active: x.history.pathname == `/${id}`
                                  }))
                                 })))
          .merge(navItems.map(x => _.assign(x, {navItems: x})))
          .combineLatest(childDOM$, view);

  
  return {
    DOM: DOM$
  };
}

const drivers = {
  DOM: makeDOMDriver('#app'),
  History: makeHistoryDriver(useQueries(createHashHistory)())
};

Cycle.run(main, drivers);
