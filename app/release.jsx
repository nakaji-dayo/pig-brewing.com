/** @jsx hJSX */
import _ from "lodash";
import Cycle from '@cycle/core';
import {makeDOMDriver, hJSX} from '@cycle/dom';

export default function(x) {
  return (
		<section id="main" className="wrapper">
				<div className="inner">
						<h2 className="major">{x.data.title}</h2>
            {x.data.body}
				</div>
		</section>
  );
};
