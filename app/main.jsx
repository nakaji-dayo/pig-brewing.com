/** @jsx hJSX */
import _ from "lodash";
import Cycle from '@cycle/core';
import {makeDOMDriver, hJSX} from '@cycle/dom';

export default function(x) {
  return (
    <div>
		    {/* Intro */}
			  <section id="welcome" className="wrapper style1 fullscreen fade-up">
			      <div className="inner">
			          <h1>Pig Brewing, llc <img src="/images/beerbuta.png" width="64"/></h1>
			          {/* <p>Just another fine responsive site template designed by <a href="http://html5up.net">HTML5 UP</a><br /> */}
		                {/*     and released for free under the <a href="http://html5up.net/license">Creative Commons</a>.</p> */}
			          <ul className="actions">
			              <li><a href="#product" className="button scrolly">Details</a></li>
			          </ul>
			      </div>
			  </section>

			  {/* Product */}
			  <section id="product" className="wrapper style2 spotlights">
			      <section>
			          <span className="image"><img src="images/beerup-pic.jpg" width="438 "alt="BeerUp Screen Shot" data-position="center center" /></span>
			          <div className="content">
			              <div className="inner">
			                  <h2>BeerUp</h2>
                        <p>BeerUpは国内外3,000種以上のビールの評価や味を調べることができるビールレビューアプリです。<br />
                            ビールを飲んだ記録を写真、味・香りと共に残せます。</p>
                        {/* <p>銘柄とスコアのみの手軽なレビューと「味・香り」と言った詳細なレビューの両方ができ、単にスコアが高いかだけでなく「自分の好みに合うビールか？」を判断できます。</p> */}
			                  <ul className="actions">
			                      <li><a href="https://beerup.jp" className="button" target="_blank">Web</a></li>
			                      <li><a href="https://itunes.apple.com/jp/app/beerup-birunorebyu-tou-gao/id672754462?mt=8" className="button" target="_blank">App Store</a></li>
			                  </ul>
			              </div>
			          </div>
			      </section>
			      {/* <section> */}
		            {/*     <a href="#" className="image"><img src="images/pic02.jpg" alt="" data-position="top center" /></a> */}
		            {/*     <div className="content"> */}
		                {/*         <div className="inner"> */}
		                    {/* 	          <h2>Feugiat consequat</h2> */}
		                    {/* 	          <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p> */}
		                    {/* 	          <ul className="actions"> */}
		                        {/* 		            <li><a href="#" className="button">Learn more</a></li> */}
		                        {/* 	          </ul> */}
		                    {/*         </div> */}
		                {/*     </div> */}
		            {/* </section> */}
		        {/* <section> */}
		            {/*     <a href="#" className="image"><img src="images/pic03.jpg" alt="" data-position="25% 25%" /></a> */}
		            {/*     <div className="content"> */}
		                {/*         <div className="inner"> */}
		                    {/* 	          <h2>Ultricies aliquam</h2> */}
		                    {/* 	          <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p> */}
		                    {/* 	          <ul className="actions"> */}
		                        {/* 		            <li><a href="#" className="button">Learn more</a></li> */}
		                        {/* 	          </ul> */}
		                    {/*         </div> */}
		                {/*     </div> */}
		            {/* </section> */}
		    </section>

			  {/* Two */}
        {/*
			    <section id="two" className="wrapper style3 fade-up">
			          <div className="inner">
			                <h2>What we do</h2>
			                  <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
			                    <div className="features">
			                          <section>
			                                <span className="icon major fa-code"></span>
			                                  <h3>Lorem ipsum amet</h3>
			                                    <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
			                            </section>
			                            <section>
			                                  <span className="icon major fa-lock"></span>
			                                    <h3>Aliquam sed nullam</h3>
			                                      <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
			                              </section>
			                              <section>
			                                    <span className="icon major fa-cog"></span>
			                                      <h3>Sed erat ullam corper</h3>
			                                        <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
			                                </section>
			                                <section>
			                                      <span className="icon major fa-desktop"></span>
			                                        <h3>Veroeros quis lorem</h3>
			                                          <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
			                                  </section>
			                                  <section>
			                                        <span className="icon major fa-chain"></span>
			                                          <h3>Urna quis bibendum</h3>
			                                            <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
			                                    </section>
			                                    <section>
			                                          <span className="icon major fa-diamond"></span>
			                                            <h3>Aliquam urna dapibus</h3>
			                                              <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
			                                      </section>
			                      </div>
			                      <ul className="actions">
			                            <li><a href="#" className="button">Learn more</a></li>
			                        </ul>
			            </div>
			      </section>
          */}
          
		      {/* お問い合わせ・会社情報 */}
			    <section id="contact" className="wrapper style1 fade-up">
			        <div className="inner">
			            <h2>Contact</h2>
                  {/*							    <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
                  */}
			            <div className="split style1">
			                <section>
                          {/*
				                    <form method="post" action="#">
				                          <div className="field half first">
				                                <label for="name">Name</label>
				                                  <input type="text" name="name" id="name" />
				                            </div>
				                            <div className="field half">
				                                  <label for="email">Email</label>
				                                    <input type="text" name="email" id="email" />
				                              </div>
				                              <div className="field">
				                                    <label for="message">Message</label>
				                                      <textarea name="message" id="message" rows="5"></textarea>
				                                </div>
				                                <ul className="actions">
				                                      <li><a href="" className="button submit">Send Message</a></li>
				                                  </ul>
				                      </form>
                            */}
                            
                            <iframe src="https://docs.google.com/forms/d/1YEU9BdznmfQKqFFDCmrrmAtpt3Ms6mUuiGm9eQZvo5o/viewform?embedded=true" width="100%" height="550" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます...</iframe>
			                </section>
                      
			                <section>
			                    <ul className="contact">
                              <li><h3>社名</h3>
                                  <span>Pig Brewing合同会社</span></li>
                              <li><h3>代表</h3>
                                  <span>中嶋大嗣</span></li>
                              <li><h3>設立</h3>
                                  <span>2015-5-15</span></li>
                              <li><h3>事業内容</h3>
                                  <span>
                                      <ul>
	                                        <li>ソフトウェアの開発</li>
	                                        <li>インターネットを利用した各種情報提供サービス</li>
	                                        <li>他</li>
                                      </ul>
                                  </span>
                              </li>
                              {/*
                                <li><h3>本店の所在地</h3>
                                      <span>神奈川県川崎市</span></li>
                                */}
                                <li><h3>資本金</h3>
                                    <span>100万円</span></li>
                                <li><h3>E-mail</h3>
                                    <span>dnakajim@pig-brewing.com</span></li>
                                <li><h3>TEL</h3>
                                    <span>050-5587-7538</span>
                                </li>
                                {/*
                                  <li>
		                                    <h3>Social</h3>
		                                      <ul className="icons">
				                                        <li><a href="#" className="fa-twitter"><span className="label">Twitter</span></a></li>
				                                          <li><a href="#" className="fa-facebook"><span className="label">Facebook</span></a></li>
				                                            <li><a href="#" className="fa-github"><span className="label">GitHub</span></a></li>
				                                              <li><a href="#" className="fa-instagram"><span className="label">Instagram</span></a></li>
				                                                <li><a href="#" className="fa-linkedin"><span className="label">LinkedIn</span></a></li>
		                                        </ul>
                                    </li>
                                  */}
                          </ul>
                      </section>
                  </div>
              </div>
          </section>
    </div>
  );
};
