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
  let childDOM$ = Rx.Observable.merge.apply(this, componentsOutput.map(x => x.DOM$));
  const DOM$ = 
          routing$.combineLatest(childDOM$, view);
  
  return {
    DOM: DOM$
  };
}

const drivers = {
  DOM: makeDOMDriver('#app'),
  History: makeHistoryDriver(useQueries(createHashHistory)())
};

Cycle.run(main, drivers);
