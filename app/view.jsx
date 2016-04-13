/** @jsx hJSX */
import _ from "lodash";
import Cycle from '@cycle/core';
import {makeDOMDriver, hJSX} from '@cycle/dom';

export default function(x, child) {
  const menu = (path) => (
    <li>
        <a href={`#${path}`} className={x.history.pathname == `/${path}` ? 'active' : ''}>
            {path}
        </a>
    </li>
  );
  return (
    <div id="dummy">    

        {/*Sidebar*/}
			  <section id="sidebar">
				    <div className="inner">
					      <nav>
						        <ul>
							          {['welcome', 'product', 'contact', 'news'].map(menu)}
						        </ul>
					      </nav>
				    </div>
			  </section>
        
		    {/* Content */}
        <div id="wrapper">
            {child}
        </div>

        {/* Footer */}
			  <footer id="footer" className="wrapper style1-alt">
				    <div className="inner">
					      <ul className="menu">
						        <li>&copy; Pig Brewing. All rights reserved.</li>
                    <li><a href="https://github.com/nakaji-dayo/pig-brewing.com">view on Github</a></li>
					      </ul>
				    </div>
			  </footer>
    </div>
  );
}
