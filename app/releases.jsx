/** @jsx hJSX */
import _ from "lodash";
import Cycle from '@cycle/core';
import {makeDOMDriver, hJSX} from '@cycle/dom';
import db from './releaseDB.jsx';

export default function(x) {
  return (
		<section id="main" className="wrapper">
				<div className="inner">
						<h2 className="major">ニュースリリース一覧</h2>
            {db.map(x => item(x.title, x.date, x.abstruct))}
				</div>
		</section>
  );
};

let item = (title, date, abstruct) => {
  return (
    <div>
        <p>{date}</p>
        <h3><a href={`#/news/${date}`}>{title}</a></h3>
        <p>{abstruct}</p>
        <a href={`#/news/${date}`} className="button">続きを読む</a>
        <hr/>
    </div>
  );
};
