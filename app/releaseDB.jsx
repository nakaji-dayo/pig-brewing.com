/** @jsx hJSX */
import {makeDOMDriver, hJSX} from '@cycle/dom';

const data = [
  {
    title: 'ビールレビューサービスBeerUp、写真を撮るだけでビールの評価を検索できる機能を公開(iOSアプリ)',
    date: '2016-03-09',
    abstruct: 'ビールレビューサービスのBeerUpは、写真を取るだけでビールを検索し評価・味を調べることができる「検索カメラ」機能を公開いたしました。',
    body: (<div>
           <p>ビールレビューサービスのBeerUpは、写真を取るだけでビールを検索し評価・味を調べることができる「検索カメラ」機能を公開いたしました。</p>
           <p>「BeerUp 検索カメラ」はビールの瓶・缶のラベルが含まれる写真を撮ることでビールの銘柄を推定し、検索できる機能です。<br/>
           本機能により、ビール購入時により手軽に楽しくビールのレビューを調べられる状態を目指しています。</p>
           <h4>【今後の予定】</h4>
           <ul>
           <li>精度・速度を徐々に向上させていきます。</li>
           <li>飲食店にてビールのメニューの写真を取ることで一括検索する機能を追加予定です。</li>
           </ul>
           <h4>【サービス情報】</h4>
           <h5>■概要</h5>
           <p>BeerUpは国内外2,000種以上のビールの評価や味を調べることができるビールレビューアプリです。</p>
           <p>ビールを飲んだ記録を感想や味、香り、写真とともに残せます。</p>
           <p>特に「苦味・酸味・甘味、香り」と言った詳細を付けてレビューすることができ、多くのユーザーがそれを利用していることで、単純にスコアが高いかだけでなく「自分の好みに合うビールか？」を判断できます。</p>
           <h5>■新機能のイメージ</h5>
           <a href="/images/release/2016-03-09-1.png" target="_blank"><img src="/images/release/2016-03-09-1.png" height="256" /></a>
           <a href="/images/release/2016-03-09-2.png" target="_blank"><img src="/images/release/2016-03-09-2.png" height="256" /></a>
           <a href="/images/release/2016-03-09-3.png" target="_blank"><img src="/images/release/2016-03-09-3.png" height="256" /></a>
           <h5>■デモ動画</h5>
           <p><a href="https://www.youtube.com/watch?v=Iy-6sq1wTFE">https://www.youtube.com/watch?v=Iy-6sq1wTFE</a></p>
           <h5>■iOSアプリ</h5>
           <p><a href="https://itunes.apple.com/jp/app/beer-app-birurogu-rebyu-tou/id672754462?mt=8">https://itunes.apple.com/jp/app/beer-app-birurogu-rebyu-tou/id672754462?mt=8</a></p>
           <h5>■ BeerUp(WEB)</h5>
           <p><a href="https://beerup.jp">https://beerup.jp</a></p>
           <hr />
           <p>Pig Brewing合同会社　中嶋大嗣</p>
           <p>E-Mail: dnakajim@pig-brewing.com</p>
           </div>)
  },
  
  {
    title: '味の傾向や評価から好みのビールを探せるWEBサービス「BeerUp」を公開',
    date: '2015-05-19',
    abstruct: '味の傾向や評価から好みのビールを探せるWEBサービス「BeerUp（WEB版）」の提供を開始しました。本サービスはビールのレビュー投稿サービスBeerUp（iPhoneアプリ版）から投稿されるレビューの閲覧に特化したサービスです。',
    body: (
      <div>
          <p>味の傾向や評価から好みのビールを探せるWEBサービス「BeerUp（WEB版）」の提供を開始しました。本サービスはビールのレビュー投稿サービスBeerUp（iPhoneアプリ版）から投稿されるレビューの閲覧に特化したサービスです。<br />
              <a href= "https://beerup.jp" target="_blank">https://beerup.jp</a></p>
          <hr />
          <p>　BeerUp iPhone版にはすでに1000銘柄以上のビールに関するレビューが投稿されています。WEB版はそれらの情報をアクセスしやすい形で提供することで、利用者が新たに好みのビールを探す際や、ビールを注文する際の下調べに役立つサービスとなるように開発しました。</p>
          <h3>【本サービスの特徴】</h3>
          <h4>■「味から検索」で味の傾向から好みのビールを見つける</h4>
          <p>　BeerUpでは多くのレビューで「苦味・酸味・甘味」の強さが記録されているので、単にスコアだけではなく、自分の好みに合うビールを探すことができます。</p>
          <p>　WEB版では大雑把に味の傾向を選択することで、それに近いビールを検索する機能を公開しました。これにより「かなり苦いが、わずかに甘みのあるビール」や「とにかく味の濃いビール」などを検索することができます。</p>
          <h4>■様々な方法で 新しい銘柄を発見し、ビールに対する興味を高める</h4>
          <p>　名前による検索や、原産国やスタイルから銘柄を探す機能のほか、独自の仕組みで興味深いレビューや話題性のあるビールをピックアップしています。これにより話題のビール・珍しいビールを手軽に見つけることができます。</p>
          <p>　また、本サービスは特に日本の地ビールや新商品の情報に強く、国内で今話題のビールの情報を得ることができます。</p>
          <h4>■ 「ロングレビュー」</h4>
          <p>　WEB版での新機能としてロングレビューの投稿を追加しました。アプリ版の投稿は１つの銘柄に対するレビューであったのに対して、ロングレビューでは「新発売ビールの飲み比べ」や「イベントやお店、ブルワリー見学のレポート」といったビールに関係するあらゆる記事を投稿できます。</p>
          <p>　現在、ブルワリーやビアバー等の事業者様による自身の製品や店舗等の紹介記事も募集しています。</p>
          <h3>【サービス情報】</h3>
          <h4>■ BeerUp(WEBサービス)</h4>
          <p><a href="https://beerup.jp" target="_blank">https://beerup.jp</a></p>
          <p>スクリーンショット1: <a href="http://pig-brewing.com/releases/images/2015-05-19-1.png" target="_blank">http://pig-brewing.com/releases/images/2015-05-19-1.png</a></p>
          <p>スクリーンショット2: <a href="http://pig-brewing.com/releases/images/2015-05-19-2.png" target="_blank">http://pig-brewing.com/releases/images/2015-05-19-2.png</a></p>
          <h4>■ ビールのレビュー投稿・記録サービス「BeerUp」iPhone版</h4>
          <p><a href="https://itunes.apple.com/jp/app/beer-app-birurogu-rebyu-tou/id672754462?mt=8" target="_blank">https://itunes.apple.com/jp/app/beer-app-birurogu-rebyu-tou/id672754462?mt=8</a></p>
          <p>※旧サービス名: Beer app</p>
          <h3>【今後の予定】</h3>
          <p>・Android端末等でもレビューの投稿ができる機能を準備中です。</p>
          <p>・「最もビールが飲みたくなるサービス」を目指して開発を進めていきます。</p>
          <h3>【本リリースに関するお問い合わせ】</h3>
          <p>E-Mail: dnakajim@pig-brewing.com</p>
      </div>
    )
  }
];


export default data;
