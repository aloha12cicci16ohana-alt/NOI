# Codex 引き継ぎ書 — NOI hero-poster リニューアル

## 最新ログ：2026-05-22 Phase 1+2 仕上げ（Codex）

### 今日の到達点

- 作業フォルダーは `/Users/chiikoba/Desktop/NOI_WEB`。
- `PLAN-PARTNER-DEPLOY.md` の Phase 1+2 を仕上げ。
- SERVICEのPriceセクションは通常URLでは非表示、`service.html?price=show` で表示。
- SERVICE下部に制作会社・代理店向けのPartner導線を追加済み。
- `partner.html` をサブページテンプレート構造で作成済み。
- 全HTMLのPC/スマホナビに `PARTNER` を追加済み。
- `sitemap.xml` は `https://noi-design.jp/` ベースへ更新済み。
- CSS/JSキャッシュは全HTMLで `partner-phase12-31` に統一。
- スマホ幅でroot側の横スクロールが出ないよう、`html { overflow-x: hidden; }` を追加。
- 追加調整：SERVICEのPartner導線本文を中央揃え、SERVICE/Partner両方のCTAボタン下に72px余白を追加。
- 追加調整：Partner下部CTA文を3行固定改行に変更。
- 追加調整：Partnerページの対応可能領域から「動画制作」を削除。Service側の顧客向け表記は維持。
- 追加調整：Partnerページの「制作フロー」を、制作会社向けの「協業スタンス」に差し替え。
- 追加調整：TOPフッターの英語コピーとコピーライトを下層ページの文字サイズに統一。
- 追加調整：Works一覧カードに「実案件」「自主制作」「トレース」の種別バッジを追加。
- 追加調整：TOP FVの英語サービスライン下に「Webサイト制作 ・ LPデザイン ・ バナー ・ AI活用」を10px太字で追加し、字間と薄いシャドウで濃く見えるよう調整。
- 追加調整：スマホハンバーガーメニュー内リンクはhover / focus-visible時に文字色をライムへ変更し、左へ太めのライム線を表示。閉じるボタンもライム色へ変更。
- 追加調整：ServiceページのFlow下にPrice導線を追加し、`service.html?price=show#price-section` で価格表へ移動するように変更。
- 追加修正：Price導線クリック時にページ内アンカーJSが `?price=show` を消してしまう問題を修正。
- 追加調整：Price表示セクション右上に閉じる×ボタンを追加し、閉じるとPrice導線位置へ戻るように変更。
- 追加調整：ServiceページのFlow下Price導線の上余白を36pxに変更し、Flow内の続きとして見えるように調整。
- 追加調整：Serviceページ下部のFor Partners導線を白背景カード化し、白背景がガラス枠の横幅いっぱいに広がるよう調整。
- 追加調整：Serviceページ下部For Partners本文の改行を「制作会社・代理店のみなさまへ。／外部パートナーとしての協業／下請けのご相談を／承っております。」へ変更。
- 追加調整：Serviceページ下部For Partners見出しに既存のキラン効果を追加。
- 追加修正：PC下層ページのガラス角丸外に薄い四角い疑似レイヤーが見える問題を修正。
- 追加調整：レスポンシブ時のヘッダーNOIロゴの乗算は、ブランド色が変わって見えやすいため取りやめ。モバイル時も元の紫色を維持。
- 追加調整：Contactページのリード文下に公式LINE相談カードを実装。
- 追加調整：Contactページの公式LINEボタンを `https://lin.ee/SG3iUKx` へ接続。
- 追加調整：Contactフォーム前に「メールでのお問い合わせ」の説明文を追加。
- 追加調整：全ページフッターのInstagram / Xアイコンを外部リンクへ接続。
- 追加調整：全HTMLのheadに、ブラウザタブ表示用として `assets/images/favicon.png?v=favicon-01` のfavicon / shortcut icon / apple-touch-icon設定を追加。
- 追加調整：SEO/AI検索向けに、全公開HTMLへtitle / description / canonical / OGP / Twitter Card / 構造化データを追加。
- 追加調整：`robots.txt` と `llms.txt` を追加し、`sitemap.xml` のlastmodを `2026-05-22` に更新。
- 追加調整：`_headers` を追加し、作業メモ・プレビュー用ファイルに `X-Robots-Tag: noindex, nofollow` を設定。
- 追加調整：Works詳細16ページのdescription / OGP description / Twitter descriptionを案件別文言へ差し替え。
- 追加修正：Contactフォームの確認モーダルをNOIの白ガラス調に作り直し、フォームを隠さず前面に重ねる動作へ変更。BACK / 背景クリック / Escで戻れるよう調整し、モーダル表示中は背面スクロールを止めるように調整。
- 追加調整：Works詳細のWebsiteリンクに `CLICK` バッジを追加し、hover / focus-visible時にリンク文字と下線がライムになるよう調整。

### 今日の検証

- `node --check js/main.js` OK。
- `git diff --check` OK。
- 旧cache slug（`mobile-lightbox-align-02` / `partner-01` / `sub-header-mobile-34`）がHTMLに残っていないことを確認。
- `sitemap.xml` に旧GitHub Pages URLと `hero-poster` が残っていないことを確認。
- ブラウザ確認：
  - `service.html`：Price非表示。
  - `service.html?price=show`：Price表示。
  - `partner.html`：PC 1366px、スマホ390pxで表示。
  - `works/index.html`：スマホ430pxでPARTNERナビと横スクロールなし。
  - `contact.html`：スマホ390pxでPARTNERナビと横スクロールなし。
- 追加確認：
  - SERVICE Partner導線の本文中央揃え、ボタン下72px。
  - Partner下部CTAの3行改行、ボタン下72px。
  - Partnerページに「動画制作」が表示されないこと。
  - Partnerページに「制作フロー」「お見積りをご提示」「納品後の修正対応」が残っていないこと。
  - TOPフッターの英語コピーとコピーライトが下層ページと同じ14pxになること。
  - Works一覧の全カードに種別バッジが表示され、カテゴリーフィルターが維持されること。
  - TOP FVの日本語サービスラインが10px太字・中黒区切りで、濃く見えつつ390px / 430px / PC幅で重ならず表示されること。
  - スマホハンバーガーメニュー内リンクがhover / focus-visible時にライム文字＋左ライム線を表示し、閉じるボタンがライム色になること。
  - ServiceページのPrice導線から、価格表表示URLへ移動できること。
  - Price導線クリック時に `service.html?price=show#price-section` へ遷移し、価格表が表示されること。
  - Priceセクション右上の×ボタンで `service.html#price-link` へ戻り、価格表が閉じること。
  - FlowとPrice導線の間が36pxになっていること。
  - Serviceページ下部のFor Partners導線が白背景カードとして表示され、白背景がガラス枠の横幅いっぱいまで広がること。
  - PC下層ページのガラス開始位置で、角丸の外側に四角い薄い背景が残らないこと。
  - レスポンシブ時のヘッダーNOIロゴが元の紫色で表示されること。
  - Contactページに公式LINE相談カードが表示されること。
  - 公式LINE / Instagram / X の外部リンクが設定されていること。
  - Contactフォーム前に「メールでのお問い合わせ」説明が表示されること。
  - 全HTMLにfavicon設定が入っていること。
  - 公開対象ページにSEO/OGP/canonical/構造化データが入っていること。
  - `robots.txt` / `llms.txt` / `_headers` が存在すること。
  - Works詳細ページのdescriptionが案件ごとに固有化されていること。
  - Contactフォームの確認モーダルがNOIのデザインに合い、送信前確認として開閉できること。
  - Contactフォームの確認モーダルがbody直下に移動して前面表示され、BACK / 送信成功時の表示切り替えが動くこと。
  - Works詳細のWebsiteリンクに `CLICK` バッジが表示され、hoverでライムになること。

### 未対応・次にやること

- Phase 3：Cloudflare Pages公開、DNS、独自ドメイン設定。
- Contactフォームの正式な送信基盤は未確定。現状はHTMLにFormspree endpointが入っているため、公開前に最終採用する送信先（Formspree継続 / Cloudflare Workers等）を決める。
- 公開前に実機スマホでもPartnerページとWorks周りを最終確認すると安心。

### 主な変更ファイル

- `index.html` / `about.html` / `service.html` / `contact.html` / `privacy.html` / `404.html`
- `works/index.html` / `works/works01.html`〜`works/works16.html`
- `partner.html`
- `css/style.css`
- `js/main.js`
- `sitemap.xml`
- `HANDOFF-CODEX.md`

**日付：** 2026-05-08
**作成者：** Claude（Sonnet）
**読み手：** Codex（修正担当）
**指示者：** CHUM さん（NOI 代表）

---


## 最新ログ：2026-05-19 作業ログ（Codex / CHUM さん確認中）

### 今日の到達点

- 作業フォルダーは `/Users/chiikoba/Desktop/NOI_WEB`。
- Works一覧・Works詳細のスマホカテゴリーメニューを、Worksガラスの外へ分離。
- スマホ時のカテゴリーメニューは薄いガラスパネル、14px文字、横並び＋折り返し。
- `works/index.html` では `.works-sidebar--archive` を `.sub-glass-column` の外へ移動済み。
- Works詳細ページでは既存の `.works-sidebar--detail` を活かしてスマホでも表示。
- 以前追加した `initWorksFilterLock()` は削除済み。
- Chrome DevToolsスマホ検証で、`position: fixed` だけだと下スクロール時にメニューが上へ流れる問題が再発。
- 下層スマホヘッダーと同じ発想で、`js/main.js` に `initWorksMobileMenuLock()` を追加し、`visualViewport.pageTop + 固定位置` でカテゴリーメニュー位置を追従する方式へ変更。
- フィルター機能は既存HTML/JSのまま維持。`?filter=banner` で絞り込み動作確認済み。
- CSS/JSキャッシュは最終的に `mobile-lightbox-align-02`。

### 今日ハマった重要ポイント

- Chrome DevTools のスマホ検証では、実機より `fixed` / `absolute` / `visualViewport` / DevTools倍率の影響が強く出る。
- Worksカテゴリーメニューは、CSSの `position: sticky` や `fixed` だけでは安定しなかった。
- 実ブラウザでDevToolsを開いた状態だと、古いCSSクエリが残りやすい。確認時は強制リロード、またはURLに `?cache=...` を付ける。
- 今日の後半、ライトボックス表示で作品画像をクリックした時に、画像と閉じるマークがずれて見える問題が残った。
- ライトボックス処理は重複していた古い `DOMContentLoaded` ブロックを削除済み。現在は `initSubPageInteractions()` 側のライトボックス処理のみ。
- `.noi-lightbox` は `z-index: 2147483500`、閉じるボタンは `z-index: 2147483600` に上げて、カテゴリーメニューより前面に出すよう調整済み。
- スマホ時の `.noi-lightbox-img` は `display: block; margin: 0 auto; width: min(360px, calc(100vw - 44px));` に調整済み。
- スマホ時の閉じるボタンは `right: max(18px, calc((100vw - 430px) / 2 + 18px));` に調整済み。
- ただし、CHUMさん確認ではまだライトボックス画像・閉じるマークのズレが気になるため、明日再調整。

### 明日最初に見ること

- `file:///Users/chiikoba/Desktop/NOI_WEB/works/works01.html?cache=mobile-lightbox-align-02`
- Chrome DevTools iPhone 14 Pro Max / iPhone 12 Pro で確認。
- 作品詳細ページで下へスクロールし、`PCデザイン` の画像をクリック。
- ライトボックス内の縦長画像がスマホ幅の中央に来るか確認。
- 閉じるマークがスマホ画面の右上に自然に出るか確認。
- DevTools由来のズレか、CSS/JS側のズレか切り分ける。
- 可能なら実機Safari/Chromeでも同じページを開いて比較する。

### 明日の修正候補

- ライトボックスを `display: grid` に戻しつつ、スマホ時のみ中に `.noi-lightbox-frame` のようなラッパーを作る案。
- またはJSでライトボックス表示時に `visualViewport.width` と `offsetLeft` を見て、画像と閉じるボタン位置を直接ロックする案。
- 閉じるマークは画像基準ではなく、スマホビューポート基準の右上固定にするのが自然そう。
- 縦長画像は「全体を無理に1画面へ縮小」ではなく、「スマホ幅に収めてライトボックス内スクロール」で継続。
- もしDevTools検証だけズレるなら、実機確認後に許容判断。

### 今日の検証

- `node --check js/main.js` OK。
- `git diff --check` OK。
- Works一覧のPC幅は既存の左固定カテゴリーメニュー表示を確認済み。
- Works一覧のスマホ表示は、カテゴリーメニューがWorksガラス外・上部に残る状態を確認済み。
- Works詳細のスマホ表示も、カテゴリーメニューが上部に残る状態を確認済み。

### 主な変更ファイル

- `works/index.html`
- `works/works*.html`
- `css/style.css`
- `js/main.js`
- `HANDOFF-CODEX.md`

---

## 最新ログ：2026-05-18 作業ログ（Codex / CHUM さん確認済み）

### 今日の到達点

- スマホTOPのWorks写真表示を旧NOI版の見え方に寄せ直し、CHUMさん確認でOK。
- 下層ページ全体のスマホヘッダーをTOPに合わせる調整を進行。
- 下層ページのハンバーガーがChromeスマホ検証で消える問題を解決。
- Aboutページの本文余白・見出しサイズ・文章行間の調整も進行済み。
- 現在の下層ページCSS/JSキャッシュは `sub-header-mobile-34`。

### 今日ハマった重要ポイント

- Chrome DevTools のスマホ検証では、スクロール後に `visualViewport.offsetTop` / `pageTop` が絡み、`position: fixed` のヘッダーが見えているスマホ画面から上へ流れたように見えることがあった。
- DOM上は `.menu-toggle` が存在し、アクセシビリティツリーにも `メニューを開く` ボタンとして出ていた。
- Consoleに出ていた赤いエラーは主にChrome拡張・DevTools由来。
  - `favicon.ico 404` はアイコン未設置。
  - `SES Removing unpermitted intrinsics` や `Permissions policy violation` はNOI本体のJSエラーではない可能性が高い。
- 最終的に下層スマホヘッダーは、`visualViewport.pageTop + 24px` を使って見えている画面上部へ追従する方式に変更。
- `node --check js/main.js` は通過済み。

### 下層スマホヘッダーの現在仕様

- 対象は下層ページのみ。
- PC表示は触らない方針。
- `js/main.js` の `initSubPageHeaderLock()` でスマホ時の下層ヘッダー位置を補正。
- ハンバーガーはTOP同様、Deep Violetの3本線にライムの光が走る。
- スマホ検証時、PC幅表示だとハンバーガーは出ず、通常ナビが出る。これは正しい。

### 明日やること

- レスポンシブ最終チェック。
  - TOP / About / Service / Works一覧 / Works詳細 / Contact / Privacy / 404。
  - iPhone幅、430px付近、タブレット寄り、PC幅で確認。
  - PC版は大きく触らず、副作用チェック中心。
- ファクトチェック。
  - 料金表記、サービス内容、プロフィール文、導線文言、Contact導線、Privacy/Sitemap。
  - AIツール名や表記ゆれも確認。
- Cloudflareへアップする準備。
  - ドメイン取得後、Cloudflare Pages または Cloudflare側の公開設定へ進む予定。
  - 公開前に相対パス、404、sitemap、OGP、favicon、画像/動画パスを確認。
- 仕上げ前に、Chromeで強制リロードまたはキャッシュ番号更新を忘れない。

### 明日最初に開くURL

- `http://127.0.0.1:4173/about.html?cache=sub-header-mobile-34`
- `http://127.0.0.1:4173/service.html?cache=sub-header-mobile-34`
- `http://127.0.0.1:4173/works/index.html?cache=sub-header-mobile-34`
- `http://127.0.0.1:4173/`

### 主な変更ファイル

- `hero-poster/index.html`
- `hero-poster/about.html`
- `hero-poster/service.html`
- `hero-poster/contact.html`
- `hero-poster/privacy.html`
- `hero-poster/404.html`
- `hero-poster/works/*.html`
- `hero-poster/css/style.css`
- `hero-poster/js/main.js`
- `hero-poster/HANDOFF-CODEX.md`

## 最新ログ：2026-05-16 作業ログ（Codex / CHUM さん確認済み）

### 追加ログ：スマホTOPヒーロー調整（2026-05-16 夜 / Codex）

#### 対象

- `hero-poster/index.html`
- `hero-poster/css/style.css`
- `hero-poster/js/main.js` は構文チェックのみ
- PC版は触らず、基本的に `@media (max-width: 900px)` と `@media (max-width: 430px)` のスマホTOP指定で調整。

#### スマホヒーローの現在の方向性

- PC縮小版ではなく、スマホ専用の「モバイル雑誌ポスター」構図へ寄せた。
- `MAKE NOISE.` は上部、`MOVE HEARTS` は下部の巨大ライムタイポ。
- 中央コピー周りに白線・ライム線の大きなリングを重ねる。
- 下部 `MOVE HEARTS` 付近にも白線・ライム線の大リングを配置。
- 本文コピーの可読性を優先しつつ、リングや巨大文字で紙面感を出す。

#### ヘッダー / ハンバーガー

- スマホTOPでは通常ナビを非表示、ハンバーガーのみ表示。
- ハンバーガー三本線は Deep Violet、線の上をライムが流れるアニメーションあり。
- ハンバーガーが右端で見切れやすかったため、スマホ幅では右側に安全余白を多めに確保。
- iPhone幅の現在値：
  - `.topbar { left: 18px; right: 70px; }`
- NOIロゴは左へ寄せ済み。

#### 巨大タイポ

- `MAKE NOISE.` はスマホTOPで左ギリギリ寄せ。
  - 攻めすぎて文字が切れたため、現在は `left: -0.105em` に戻している。
- `MOVE HEARTS` は右端寄せ。
- `HEARTS.` のドットは、下揃え付近を左から右へ水平移動する演出に変更。
- 大リングは `line-group--bottom::before / ::after` で白線・ライム線を別々に描画。
  - `box-shadow` 表現は白い三日月に見えたため廃止。
  - リングは右下に配置し、右下が少し見切れてOK。

#### サブキャッチ / サービスライン

- サブキャッチ左余白は NOI と合わせる方向に変更。
  - iPhone幅では `.sub-block { left: 18px; }`
- スマホではサブキャッチをメインキャッチから下げた。
  - iPhone幅では `.sub-block { top: clamp(312px, 39svh, 340px); }`
- サブキャッチ下の余白：`16px`
- ライム線下の余白：`16px`
- サービスラインはスマホのみ `12px`。
- `CREATIVE DIRECTION` はスマホのみ改行。
  - HTMLに `<br class="mobile-service-break" />` を追加。
  - PCでは `.mobile-service-break { display: none; }`
  - スマホでは `.mobile-service-break { display: block; }`

#### 右側縦英語

- 既存の `.right-note .creating` はスマホTOPでは位置が紙面外に逃げやすかったため非表示。
- スマホTOPでは `.hero-poster::after` に `CREATING WHAT WORDS CAN'T SAY.` を縦書きで表示。
- その下のライム発光線は `.hero-poster::before` で追加。
- 現在の iPhone幅の値：
  - 英語：`top: clamp(196px, 24svh, 228px); right: 24px; font-size: 8px; letter-spacing: 0.24em;`
  - 線：`top: clamp(510px, 61svh, 544px); right: 27px; height: 58px;`
- 線は文字と重ならないよう下へ逃がし、文字との間を約10px空ける意図。
- 文字と線は中心軸を揃えるため、線だけ `right` を少し内側へずらしている。
- 直近のCHUMさん要望：
  - 縦英語の始まりは `NOISE.` の下の高さぐらい。
  - 縦英語と線は約10px空ける。
  - 文字と線は中央揃え。

#### 非表示にしたもの

- スマホTOPの左下 `SCROLL TO EXPLORE` は非表示。
- スマホTOPでは既存の左レール `.left-rail` は表示しない。

#### キャッシュ

- `index.html` のCSS/JSクエリは現在 `mobile-hero-menu-15`。
- スマホ確認時に古い表示が残る場合は、この番号を上げると反映されやすい。

#### 確認済み

- 最後に `node --check hero-poster/js/main.js` を実行済み。構文チェックOK。

#### 次に見るとよい箇所

- iPhone 14 Pro幅で、右縦英語と下の線が本当に10px程度空いて見えるか。
- 右縦英語がハンバーガーと近い右余白に見えるか。
- `CREATIVE DIRECTION` の改行後、サービスラインが強すぎないか。
- `MAKE NOISE.` 左端が切れず、かつ余白が広すぎないか。
- `MOVE HEARTS` と下部リング、`NOT ORDINARY IMAGINATION.` が窮屈に見えないか。

### 今日の到達点

`hero-poster/` 配下で、下層ページ・Service/Price・Greeting・Footer まわりを中心に調整済み。  
明日は **レスポンシブ調整** から入る予定。

### Service ページ

- TOP の `Skill` 内、AI項目を `AI & テクノロジースタック` に差し替え。
  - ChatGPT / Claude / Gemini
  - Codex / Claude Code
  - Manus / Genspark
  - Adobe Firefly / Lovart
  - HeyGen
  - 各項目はカテゴリ名・ツール名・用途が分かる小カード表示に変更。
  - 英語サブ表記と、各カード左側のライム線は削除済み。
- `service.html` の Service 見出し直下に導入文を追加。
  - 「これ、どう伝えればいい？」
  - その問いから始めてください。
  - うまく言えない、でも確かにある想いを
  - つかまえて、形にするのがNOIのServiceです。
- `Flow` 見出しは専用クラスで `30px` に調整。`Price` 見出しには影響させない。
- `Flow` は光らせない。
- `Flow` 上の余白は `54px`、`Flow` 見出し内の余分な `28px` マージンは削除。
- `Flow` と説明文の余白は `26px`。
- Flow 図は丸と線ではなく、シンプルな縦型カードの 6 ステップに再設計。
  - 01 Contact / お問い合わせ
  - 02 Share / 情報共有・お見積り
  - 03 Agreement / Deposit / ご契約・着手金のお支払い
  - 04 Planning / 企画立案
  - 05 Creative / デザイン制作
  - 06 Deliver / 納品完了・残金のお支払い
- Flow の 01〜06 カードには、Price と同系統のガラス感を追加。

### Price

- Price セクションは TOP の Works / Contact と同じ方向性で、白めのすりガラス背景に変更。
- 透明ガラスの中に白ガラスがある見え方を避け、Price の 500px 幅いっぱいに白ガラスが広がるように調整。
- Price の終わりで背景も終わるようにし、下に透明ガラスが残らない形にした。
- Price 内容を新プランへ差し替え。
  - LIGHT / ENTRY
    - LP（1ページ） `¥80,000〜`
    - 小規模HP（1〜3ページ） `¥100,000〜`
  - BRAND / MAIN
    - HPリニューアル `¥200,000〜`
    - 新規HP制作 `¥300,000〜`
  - AI SUPPORT / NEW
    - 初期構築 `¥30,000〜¥50,000`
    - 月額サポート `¥10,000〜¥20,000 / 月`
    - アプリ開発 `要相談`
- `AI SUPPORT` の帯色はオレンジからライムに変更。
- 各 Price カードの背面は、カード側の白を少し強くして読みやすさを優先。
- AI SUPPORT の下、カード外に以下の相談文を追加。
  - その他、ロゴ、バナー、動画、SNS運用、AIセキュリティ等、お困りごとございましたら、お気軽にご相談ください。

### About / Greeting

- `about.html` の `Greeting` も Price と同じような白めのすりガラス背景に変更。
- Greeting の終わりで背景も終わるようにし、下に透明ガラスが残らない形にした。

### 見出し・縦書き文字

- 下層ページの `About NOI` / `Greeting` / `Works` / `Service` / `Contact` などの見出しを、TOP / Flow / Price と同じ太さに合わせた。
- TOP 右側の縦書き英語 `MAKE NOISE. MOVE HEARTS.` は `11px` に変更。
- TOP サブキャッチ下の英語ラインは `12px` に変更。
- 下層ページ左右の縦書き英語は `11px` に統一。
- `.sub-page p { font-size: 14px; }` の影響で縦書きが 14px に戻っていたため、`.sub-page .left-rail p` と `.sub-page .right-vertical` を強めに指定して修正。
- 縦書き英語の文字間は右側の見え方に合わせて、TOP / 下層とも `letter-spacing: 0.28em` に寄せた。

### Footer

- `また、聞かせてください。` は削除。
- フッターコピーを以下に変更。
  - `揺れに、輪郭を。`
  - `伝わるWebとことばに。`
- `Web` のフォント感は TOP のサブキャッチと合うように調整。
- 英語コピーを以下に変更し、自然な位置で 2 行に分割。
  - `Let's have fun making things`
  - `with NOI！`
- `NOI` ロゴ下に `54px` の余白を追加。
- 日本語コピー下に `25px` の余白を追加。
- 英語コピー下に `54px` の余白を追加。
- Instagram / X アイコンを追加。
  - `assets/images/instagram.png`
  - `assets/images/x.png`
- SNS アイコンは CSS filter で Deep Violet 系の色に寄せた。
- フッターが出てきたら、左下の `SCROLL TO EXPLORE` と矢印が消えるように JS / CSS を追加。
- 下層ページのフッター停止位置を TOP に近づけたあと、さらに下で止まるよう調整。
  - 前のガラスページが見えにくく、画面中央にフッターカードが来るイメージ。

### Privacy / 404 / Sitemap

- `privacy.html` を追加。
- `404.html` を追加。
- `sitemap.xml` を追加。
- フッターのガラス外、画面中央下に小さく `Privacy Policy` / `sitemap` リンクを追加。
- リンク位置は少し下めに調整。

### 明日の申し送り

- 明日はレスポンシブ調整から開始。
- 特に確認したい箇所。
  - TOP / 下層の Footer 停止位置がスマホ幅でも自然か。
  - Price / Greeting の白ガラスがスマホ幅で重く見えすぎないか。
  - Flow 6 ステップのカード幅・余白・行間。
  - 下層ページ左右の縦書き英語がスマホで邪魔にならないか。
  - Footer の SNS アイコン・Legal links の位置。
  - 追加した Privacy / 404 ページのスマホ表示。

### 主な変更ファイル

- `hero-poster/index.html`
- `hero-poster/about.html`
- `hero-poster/service.html`
- `hero-poster/contact.html`
- `hero-poster/works.html`
- `hero-poster/privacy.html`
- `hero-poster/404.html`
- `hero-poster/sitemap.xml`
- `hero-poster/css/style.css`
- `hero-poster/js/main.js`
- `hero-poster/works/*.html`

---

## 0. 一行サマリー

Claude が Phase 1+2 を実装したが、**最初のデザイン意図からズレた**と CHUM さんが判断。  
Codex で**作り直し or 大幅修正**してほしい。CHUM さんと**対話しながら細部を詰める**スタイル推奨。

---

## 1. CHUM さんの当初指示（全文・原文ママ）

> NOI HP ホログラム調整から、HPをこのデザインで仕上げていきたい！
> hero-posterの中にindex.htmlがヒーローの部分までできてますが、あくまで仮定です。
>
> 計画立ててほしいのですが
> 基本文字の色はDeep Violet: #33234Fで。
> 良きところでInk Violet: #241936は使用してほしい。小さい部分で。
>
> 1.ホログラムの背景動画をbackground.mp4でhero-poster/assets/videoの中に入れました。
> これをスクロール背景として設定してほしい。
>
> 2.基本、NOIのスマホ特化のところの内容は一緒。
> （NOI/index.htmlのグレーのHPのことね！）
>
> 3.ヒーローの背景はい固定で、スクロールすると、Liquid Glassのスマホ特化の画面が出てきて
> Aboutの部分からそこが反映される。
>
> 4.Worksに入ったら同じ挙動にしてほしい
> 背景はLiquid Glassのところに少し白を強くした背景が流れ込んでくる感じが良い
>
> 5.Serviceは名前をSkillにして欲しくて
> https://aloha12cicci16ohana-alt.github.io/NOI/の中の
> Serviceの内容を入れて。
> （自分が何ができるのかのスキルを入れたい。）
> ボタンはそのままServiceに飛ぶ感じでOK
>
> 6.ContactもWorks同様
> 背景はLiquid Glassのところに少し白を強くした背景が流れ込んでくる感じが良い
>
> 7.基本内容はNOI/index.htmlの中のスマホ特化と同様
> そして、背景はホログラム
>
> 8.ヒーローセクションのところでループして欲しくないのは
> ・MAKE NOISE.MOVE HEARTS.
> ・サブキャッチの 揺れに、輪郭を。
> ・その直下にかいてある線と文字
>
>   絶対残してスクロールしてほしいもの
> ・ヘッダー
> ・ヒーロー両サイドの文字と線
> ・右側にある CREATING WGAT WORDS CAN'T SAY.
>   とその左よこにあるライムの線とNとNの下に引いてある線
> ・左端にあるスクロールの丸と矢印と、その上にある文字と ＋ みたいな模様
> こちらはスクロールで残してほしい
>
> 一旦TOPページの構想です、
>
> 仮装ページも基本は変わらないから、もしできたらお願いしたい。
>
> プランお願いします！
> そしてこれに必要なスキルやプラグインも使ってほしい！

## 2. その後の Q&A（CHUM さん回答）

| Q | A |
|---|---|
| トップURLの扱い | hero-poster/index.html を**別URL**で制作。両方完成後に比較運用、良い方を採用 |
| Skill コピーの取得手段 | Chrome MCP で `https://aloha12cicci16ohana-alt.github.io/NOI/` から取得OK |
| Wedding ページ | 今回は触らない。**別タスク** |
| Works の白強め背景の出方 | 既存の Works ウィンドウ（横スクロールバナー）が**全面に出てくる前**に「Works」と文字が出てくる、その背景が Liquid Glass の白強め |
| フッター案 | **B+C ハイブリッド**で確定（詳細は §4） |

---

## 3. 北極星（必ず守る世界観）

```
Noise    = 粒ではない / 感情の揺れ
Hologram = SFではない / 想いの屈折
Motion   = 演出ではない / 呼吸
```

- FV サブキャッチ：**「揺れに、輪郭を。」**（確定）
- 英語サブ：**「CREATING WHAT WORDS CAN'T SAY.」**
- メインタイトル：**MAKE NOISE. MOVE HEARTS.**

---

## 4. 確定済み仕様

### カラートークン
```css
--violet-deep: #33234F;   /* 基本テキスト色 */
--violet-ink:  #241936;   /* 小要素のアクセント。©︎、+、極小metaなど */
--lime:        #DDFF16;   /* 既存維持 */
--glass-white-soft:   rgba(255, 255, 255, 0.55);  /* About, Skill */
--glass-white-strong: rgba(255, 255, 255, 0.78);  /* Works, Contact */
```

### 3層アーキテクチャ（合意済み）
```
[fixed]  Layer A: ホログラム動画（assets/video/background.mp4）  ← 全編で生き続ける
[fixed]  Layer B: Liquid Glass シート（phone-column）           ← Aboutから登場、Skillで一時退場
[flow]   Layer C: コンテンツ                                    ← 通常の縦スクロール
```

### セクション別の背景

| セクション | 背景 |
|---|---|
| Hero (FV) | A のみ（ホログラム剥き出し） |
| About | A + B（標準 Liquid Glass） |
| Works | A + B（**白強め**）+ Worksウィンドウ（既存の横スクロールバナー） |
| Skill | A のみ（ホログラム） |
| Contact | A + B（**白強め**） |
| Footer | A + B のまま閉じない |

### ヒーローの fixed / flow ルール

**スクロールアウトする（流れる）：**
- 巨大ライム `MAKE / NOISE. / MOVE / HEARTS.`
- サブキャッチ `揺れに、輪郭を。`
- その直下の細線 + サービスライン

**全編で残る（fixed）：**
- ヘッダー
- 両サイドの文字と線（左 rail、右 note）
- 右側の `CREATING WHAT WORDS CAN'T SAY.` + 縦ライム線 + `N` + N下のライン
- 左端の SCROLL の丸と矢印 + その上の文字 + ＋マーク

> ⚠️ Claude の解釈で迷いが生じた箇所：「両サイドの文字と線」に bottom-meta（35°41' 等）を含むか／cross-top も fixed にすべきか／coordinates と imagination は流すべきか。**CHUM さんに確認すべき**。

### ナビゲーション
- `SERVICE` → **`SKILL`** にリネーム（表示変更）
- ボタンの遷移先 `service.html` は**維持**（中身のリンクだけ変更）
- 全体は SPA 的に `#fv` `#about` `#works` `#skill` `#contact` のアンカー遷移

### フッター（B+C ハイブリッド・確定）

Liquid Glass の中で完結。「閉じない締め」。

- **NOI ロゴが呼吸**（slow scale loop。Motion=呼吸 を体感）
- 締めコピー：**「また、聞かせてください。」**
- 二重サブコピー：`揺れに、輪郭を。` / `CREATING WHAT WORDS CAN'T SAY.`
- TOPへ戻る動線あり
- ©︎2026 NOI（Ink Violet・微小サイズ）

---

## 5. 既存資産

### 必読ファイル
- `NOI/hero-poster/HANDOFF.md` — 5/7 から引き継いだ動画選定の経緯
- `NOI/index.html` — Liquid Glass × phone-column のリファレンス実装（**触らない**）
- `NOI/assets/css/style.css` — phone-column の CSS（参考）
- `NOI/assets/js/main.js` — GSAP+ScrollTrigger 実装（参考）

### 動画素材
- `NOI/hero-poster/assets/video/background.mp4`（1.9MB / Lovart 出力）

### 既存の Skill 元コピー取得元
- https://aloha12cicci16ohana-alt.github.io/NOI/ の Service セクション

---

## 6. Claude が触ったファイル（修正対象）

```
NOI/hero-poster/index.html        ← 全面再構築済み（ズレている可能性大）
NOI/hero-poster/css/style.css     ← 1から書き直し済み（ズレている可能性大）
NOI/hero-poster/js/main.js        ← 動画再生制御に簡素化済み（必要なら拡張）
```

### Claude の実装内容（参考）
- `.hologram-video-layer`（fixed, z:-10）に `background.mp4` を配置
- 旧 `.aura-layer`（CSSホログラム）は削除
- ヘッダー / 左 rail / 右 note / 左下 SCROLL / cross 2つを `position: fixed`
- ヒーロー文字（`#fv.hero-flow`）は `height: 100svh` の section 内で absolute 配置
- bottom-meta（coordinates / imagination / globe）は flow 側に配置
- ナビ：`SERVICE` → `SKILL` に改名済み
- Phase 3 用プレースホルダー（200vh）を後ろに配置

### CHUM さんの違和感（推測ポイント）
- "全体的に、最初よりデザインがずれた"
- **具体的にどこがズレているかは Codex 側で対話して引き出してほしい**
- 候補：
  - ホログラム動画の見え方（強さ・透明度・blend mode）
  - 文字との重なり・読みづらさ
  - フレーム要素の固定範囲（cross-top や bottom-meta の解釈）
  - 配置の細部（vh/vw 指定の崩れ）

---

## 7. Codex への依頼事項

1. **CHUM さんと対話しながら**「どこが違和感か」を切り分ける
2. 必要なら**大胆に作り直して OK**
3. ただし以下は守る：
   - §3 の世界観
   - §4 の確定仕様（カラー、フッター案、3層アーキ、ナビ仕様）
   - §8 のスコープ
4. 進め方は**小刻みに確認**するスタイル推奨（Claude が「Phase 1+2 を一気に実装」してしまったのが今回の反省点）

---

## 8. スコープと禁止事項

### 触っていい範囲
```
NOI/hero-poster/  ← この配下だけ
```

### 触ってはいけない
- `NOI/index.html` — 比較運用するため**絶対に触らない**
- `NOI/about.html` `NOI/works.html` `NOI/service.html` 等の既存ページ
- `NOI-Wedding/` — Wedding ページは**今回スコープ外**

### 後続フェーズ
- Phase 3：Liquid Glass セクション（About / Works / Skill / Contact）
- Phase 4：コンテンツ移植（旧サイトから Skill コピー含む）
- Phase 5：フッター実装（B+C ハイブリッド）
- Phase 6：QA（PC 1600/1280, SP 375, prefers-reduced-motion）

---

## 9. 関連ドキュメント

- 当初プラン：`/Users/chiikoba/NOI-cc-company/.company/pm/projects/noi-hp-renewal.md`
- 意思決定ログ：`/Users/chiikoba/NOI-cc-company/.company/secretary/notes/2026-05-08-decisions.md`
- 5/7 ホログラム引き継ぎ：`/Users/chiikoba/NOI-cc-company/NOI/hero-poster/HANDOFF.md`
- 世界観詳細：`/Users/chiikoba/NOI-cc-company/.company/hp-design/ideas/2026-05-07-noi-worldview.md`

---

## 10. Codex 着手時のおすすめ順序

1. このファイル（HANDOFF-CODEX.md）と §9 の関連ドキュメントを全部読む
2. `NOI/hero-poster/index.html` を**プレビューで開いて CHUM さんと一緒に見る**
3. CHUM さんに「どの部分が一番ズレてる感じがしますか？」と聞く
4. 違和感の優先順位をつけて、上から順に対応
5. 小さく直して、都度 CHUM さんに見てもらう

---

**頑張って、Codex！🙌**

---

## 11. 2026-05-08 Codex 実装ログ

### 更新対象

- `NOI/hero-poster/index.html`
- `NOI/hero-poster/css/style.css`
- `NOI/hero-poster/js/main.js`

`NOI/index.html` と既存下層ページは未編集。コピー元・比較元として参照しただけ。

### 実装済み

- TOP全体を `hero-poster` 配下だけで再構築。
- ヒーロー背景に `assets/video/background.mp4` を fixed のホログラム背景として設定。
- ヒーローは添付ポスターの方向へ寄せて、巨大ライム文字、左右レール、右側ノート、固定ヘッダー、スクロール導線を配置。
- ヒーローのサブコピーを `揺れに、輪郭を。` に変更。
- `MAKE NOISE. / MOVE HEARTS.`、サブコピー、service line はスクロールアウトする通常ヒーロー要素として整理。
- ヘッダー、左右の縦装飾、右側ノート、スクロール導線、十字マークは固定装飾として残る設計。
- 下部メタはスクロール途中でフェードアウトするように `main.js` で制御。
- ヒーロー直後にはLiquid Glassを出さず、余白を挟んでAboutから中央カラムが出る構成に変更。
- PC時のLiquid Glassカラムは `max-width: 500px`。スマホ画面のように角丸化。
- Liquid Glassはかなり透明寄りに調整し、文字は薄くせずDeep Violetで前面に出るようにした。
- About / Works / Skill / Contact / Footer を500pxカラム内へ配置。
- `Service` 表示は `Skill` に変更。詳細ボタンは `../service.html` へ遷移。
- Worksは旧NOIの横スクロール・ウィンドウ演出を `hero-poster` 側へ移植。
- Works / Contact は「白ベタ」ではなく、光量が上がる透明ガラスとして調整。
- 左レールの `001` と下線を同幅にし、縦文字フォントを `11px` に調整。
- 右側の `CONTACT`、十字マーク、縦文字 `MAKE NOISE. MOVE HEARTS.` の軸を整理。
- 右縦文字の下に、ライムからDeep Violetへ流れる縦線アニメーションをCSS疑似要素で追加。
- `prefers-reduced-motion` では右縦線アニメーションを停止。

### 重要なCSSメモ

- 基本色:
  - Deep Violet: `#33234f`
  - Ink Violet: `#241936`
  - Lime: `#ddff16`
- Liquid Glassの主な調整箇所:
  - `.glass-stage`
  - `.liquid-glass-column`
  - `.glass-section`
  - `.section-glow`
- 右側装飾の主な調整箇所:
  - `.nav`
  - `.right-note`
  - `.right-vertical`
  - `.right-vertical::after`
  - `.cross-top`
  - `@keyframes right-rule-flow`
- 左側装飾の主な調整箇所:
  - `.left-rail`
  - `.rail-number`
  - `.rail-number i`
  - `.rail-services`

### 確認済み

- `node --check NOI/hero-poster/js/main.js` は通過。
- ブラウザ確認済みサイズ:
  - PC: `1440x900`
  - PC: `1280x800`
  - SP: `390x844`
  - SP: `375x667`
- SPでは右側ノートと十字マークは非表示のままなので、右側装飾のPC調整はSPに影響しない想定。

### 直近の未確認ポイント

最後に右側の縦線位置とアニメーションを調整したあと、JS構文チェックは済み。ただしブラウザでの最終目視確認は次回もう一度やると安心。

次回はまずPC幅で以下を見ること。

1. `CONTACT` の右端と右縦文字の軸が自然に揃っているか。
2. 左右の縦文字から画面端までの余白が同じ見え方か。
3. 十字マークの位置と中央の隙間が参照画像に近いか。
4. `HEARTS.` の下に出る縦線が、文字に近すぎず、下方向へ流れて見えるか。
5. Liquid Glassカラムの透明感が薄すぎないか、文字の可読性が落ちていないか。

---

## 12. 次回作業のおすすめ順序

1. `NOI/hero-poster/index.html` をブラウザで開き、PC幅で右側装飾を目視確認。
2. 必要なら `--edge`、`.right-note`、`.cross-top`、`.right-vertical::after` の位置だけ微調整。
3. Liquid Glassの透明度をCHUMさんの見え方に合わせて微調整。
   - 透明度: `--glass-soft` / `--glass-strong`
   - 光量: `--glass-brightness`
   - ぼかし: `backdrop-filter`
4. `390x844` と `375x667` で、ヒーローとカラム本文が重ならないか再確認。
5. 最後に `node --check NOI/hero-poster/js/main.js` を再実行。

### 注意

`file://` 表示ではブラウザキャッシュでCSS反映が遅れることがある。見た目が変わらない時はハードリロード、または簡易サーバーで確認する。

---

## 13. 2026-05-11 Codex作業ログ — スマホ特化ガラス面とスクロール方式

### CHUMさんとの方向性確認

- 500pxのスマホ特化画面は、`https://www.arluis.com/fair-cp/miyakojima/` のように、背景と色差が少ない高透明ガラスへ寄せたい。
- ただし、透明セクション同士を重ねると下の文字が透けて読めなくなることが判明。
- 最終的に「500pxのスマホ特化ガラス枠そのものを固定し、その中のコンテンツだけがスクロールする」方式へ切り替えた。

### 実装した構造変更

- `index.html`
  - `.liquid-glass-column` の中に `.liquid-glass-scroll` を追加。
  - `About / Works / Skill / Contact / Footer` を `.liquid-glass-scroll` の中へまとめた。
  - 目的は、500pxの外枠を固定の窓にして、内側コンテンツだけを動かすため。

- `css/style.css`
  - `.liquid-glass-column` を `position: sticky` に変更。
  - `.liquid-glass-column` に `height: calc(100svh - var(--phone-sticky-top))` を設定。
  - `.liquid-glass-column` に透明ガラスの枠線、背景、shadow、`backdrop-filter` を集約。
  - `.liquid-glass-scroll` を追加し、JSで `transform: translate3d(...)` して中身だけ動かす設計にした。
  - `About / Skill / Contact / Footer` の個別sticky重ね方式は廃止。
  - `Works / Contact` のすりガラス表現は維持。ただしセクション同士の重ねではなく、固定窓内で流れるコンテンツとして扱う。

- `js/main.js`
  - `glassStage`, `glassScroller` を取得。
  - `updateGlassColumn()` 内で、固定スマホ枠の高さと中身の高さからスクロール可能量を計算。
  - `glassStage.style.minHeight` を動的に設定し、ページスクロール量を確保。
  - ページスクロール量に応じて `.liquid-glass-scroll` を上方向へ移動。

### 透明度の現在値

- `.glass-section--soft` / `.liquid-glass-column` はかなり透明寄り。
- 主な値:
  - `--glass-soft: rgba(255, 255, 255, 0.004)`
  - `--glass-brightness: 1.01`
  - transparent系ガラスの `backdrop-filter: blur(3px) saturate(1.06)`
  - 枠線: `rgba(255, 255, 255, 0.76)`
- 背景との差を小さくし、輪郭だけでスマホ面がわかる方向。

### 一度試したがやめた方式

- `About / Skill / Contact / Footer` をそれぞれ `position: sticky` にして、同じ位置に重ねる方式。
- 問題:
  - `Skill` や `Footer` が透明なため、下のセクションの文字を拾ってぼける。
  - 背景色に近い遮蔽レイヤーを入れれば読めるが、透明感が落ちる。
- そのため、固定ガラス枠内で中身だけスクロールする方式へ変更。

### 確認済み

- `node --check NOI/hero-poster/js/main.js` は通過。
- CSSの括弧バランスチェックは通過。
- この環境ではBrowser/Playwright目視確認ができていないため、次回は必ずブラウザで確認する。

### 次回確認ポイント

1. 500pxのスマホ特化枠が、添付画像の位置で自然に固定されるか。
2. 枠内で `About -> Works -> Skill -> Contact -> Footer` が順にスクロールするか。
3. `Works` の既存全画面スライダー演出が壊れていないか。
4. `Skill` と `Footer` で前セクションの文字が透けて読みにくくならないか。
5. 透明ガラスが背景と馴染みすぎて、輪郭が消えすぎていないか。
6. PC幅とSP幅で、固定枠の高さ・角丸・下部ボタン位置が破綻していないか。

---

## 14. 2026-05-15 Codex作業ログ — ホログラム背景 / 下層ページ / Works詳細 / Contact安定化

### 作業対象

- 対象ディレクトリは `/Users/chiikoba/Desktop/NOI/hero-poster`
- 元の作業リポジトリ側ではなく、Desktopにコピーされた `NOI/hero-poster` を編集している。
- ローカル確認URLは主に `http://127.0.0.1:8123/hero-poster/...`

### 今日の大きな方針

- `hologram.mp4` を全ページ共通背景として使用。
- ホログラム背景は無音・自動再生・ループ。
- 下層ページもTOPと同じ世界観に統一。
- Works詳細とContactの動線を安定させた。
- 次回は **Serviceページ** から作業再開予定。

### 背景動画まわり

- `hero-poster/assets/video/hologram.mp4` を背景動画として使用。
- `index.html` と下層ページに `.hologram-video-layer` を配置。
- `video` は `autoplay loop muted playsinline preload="auto"`。
- JS側でも `muted/defaultMuted/volume = 0` を設定し、音が出ないようにしている。
- `prefers-reduced-motion` の場合は動画再生を止める。

### TOPページ

- TOPの背景は `hologram.mp4` 継続使用。
- Worksの拡大演出は残している。
- Worksスライダーは止めない方針。
- `#contact` へのアンカー遷移はガラス内スクロール構造と相性が悪く、最終的にContact専用ページへ逃がした。
- TOPナビの `CONTACT` は `contact.html` に変更済み。

### 下層ページ追加

以下を追加・移植済み。

- `about.html`
- `service.html`
- `contact.html`
- `works/index.html`
- `works/works01.html` から `works/works16.html`

共通仕様:

- 背景は全ページ `hologram.mp4`
- 文字色は基本 `#33234F`
- 下層ページのスマホ特化ガラス幅は `500px`
- サイド文字、スクロール文字、右側コピーもTOPに合わせて調整済み
- 下層ページ全体で黒文字は避ける方針

### Works一覧

- `works/index.html` を作成。
- `ALL / WEBデザイン / WEBサイト / バナー / デジタルアート` フィルターあり。
- PC表示では、左側に小さいガラスメニュー、中央に500pxの作品ガラス。
- スマホ表示では、メニューはガラス内に残る。
- URLパラメータ `?filter=banner` などに対応。
- 詳細ページ左メニューから一覧に戻ると該当カテゴリで絞り込みされる。

### Works詳細

- `works/works01.html` から `works16.html` を作成。
- PC表示では、左側にカテゴリメニューの小ガラス、中央に500pxの詳細ガラス。
- スマホ表示では、左メニューは非表示。
- 詳細ページのCONTACTボタンは `../contact.html` に変更済み。
- ヒーロー画像が原寸ではみ出して白く見えていた問題を修正。
  - `.sub-page .work-detail-hero img { width: 100%; height: auto; }`
- `works02.html` のスマホデザイン右側画像が縦に伸びる問題を修正。
  - `.gallery-row` を `align-items: flex-start`
  - `.gallery-row .gallery-img` を半幅かつ自然高さで表示。

### Works詳細タイトル行

CHUMさんの最新OK状態:

- 真ん中の細い横線と縦線は削除。
- `WEBサイト / WEBデザイン / バナー` などカテゴリ文字の下に、TOPのSkillと同じライム線を追加。
- カテゴリはPCでは右側に寄せ、現在は前より上に上げた状態。
- スマホではWorks下に縦配置。
- 直近のCSSキャッシュは `works-detail-category-raise`。

該当CSS:

- `.sub-page .work-detail-title-row`
- `.sub-page .work-detail-title-line-wrap`
- `.sub-page .work-detail-title-line`
- `.sub-page .work-detail-category-label`
- `.sub-page .work-detail-category-label::before`
- `.sub-page .work-detail-category-label::after`

### Aboutページ

- `Node / New / Noise` 図を、塗り丸からライム輪郭だけの重なりリングに変更。
- 丸は3つ、少し重なる配置。
- 文字は中央配置。
- `Node / New / Noise` の英字だけ18px。
- Greetingにもキランとする `holo-title-sweep` 効果を追加。

### Serviceページ

次回ここから開始予定。

現在のServiceページ:

- `service.html`
- 背景とガラスは下層ページ共通。
- タイトルや本文サイズは下層ページ基準。
- Flow図はライム丸3つ＋細い線の構成に調整済み。
- 次回、Serviceページのデザイン・レイアウト・内容調整から始める。

最初に見るとよい箇所:

- `/Users/chiikoba/Desktop/NOI/hero-poster/service.html`
- `/Users/chiikoba/Desktop/NOI/hero-poster/css/style.css`
  - `.sub-page .service-page-section`
  - `.sub-page .service-flow-section`
  - `.sub-page .service-flow-diagram`
  - `.sub-page .flow-node`
  - `.sub-page .service-price-section`
  - `.sub-page .price-card`

### Contactページ

- `contact.html` を新規作成。
- TOP内の `#contact` は残しているが、リンク先としては使わない。
- すべてのCONTACTリンクは専用ページへ変更済み。
  - TOP/About/Service: `contact.html`
  - Works配下: `../contact.html`
- Works詳細からCONTACT、ContactページからNOIロゴでTOPへ戻る流れは確認済み。
- Console error / warningなし。

### 重要な注意点

- TOPの `#contact` へ直接飛ばす方式は、固定ガラス内スクロールと相性が悪く、表示位置がズレる。
- Contactへの導線は今後も `contact.html` を使うのが安全。
- TOP Works演出は繊細なので、下層ページ用CSSを追加する時は必ず `.sub-page` でスコープする。
- `.works-window` や `.works-img-item` などTOP Works演出クラスを下層用に直接上書きしない。
- Desktop配下は通常権限で書き込みに失敗することがある。必要なら権限付きでキャッシュ更新する。
- CSS/JS変更後はHTML側の `?v=...` キャッシュ番号も更新する。

### 今日の確認済み

- `node --check /Users/chiikoba/Desktop/NOI/hero-poster/js/main.js` 通過。
- Works詳細からContact専用ページへの遷移確認。
- ContactページからNOIロゴでTOPへ戻る確認。
- Works詳細のヒーロー画像表示修正確認。
- `works02.html` のスマホ画像伸び修正確認。
- Works詳細タイトル行の中央線削除・ライム下線追加確認。
- Console error / warningなし。

### 次回の入り方

1. `http://127.0.0.1:8123/hero-poster/service.html` を開く。
2. Serviceページ全体の見た目を確認。
3. まずServiceのファーストビュー、Flow図、料金/サービスカードの順に調整する。
4. 調整後に `node --check /Users/chiikoba/Desktop/NOI/hero-poster/js/main.js` を実行。
5. TOP / About / Works / Contactに副作用がないか軽く確認する。
