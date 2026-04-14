# NOI HP 修正・ブラッシュアップ タスク
> 最終更新: 2026-04-14

---

## コンテンツ修正

| # | ページ | 問題 | 修正内容 | 優先度 |
|---|--------|------|---------|--------|
| 1 | service.html | 「ブランデキングサイト」誤字 | → 「ブランディングサイト」 | 🔴 高 |
| 2 | about.html | `<- POSTリクエスト…` 壊れたHTMLコメントが2箇所 | 削除 | 🔴 高 |
| 3 | works.html | 同じ壊れたHTMLコメントが2箇所 | 削除 | 🔴 高 |
| 4 | index.html | Contactフォームにaction未設定 | WP移行後にContact Form 7連携。暫定でGoogleフォーム | 🟡 中 |
| 5 | 全ページ | OGP/SEOメタタグ未設定 | description, og:image, og:title等を追加 | 🟡 中 |
| 6 | 全ページ | favicon未設定 | NOIロゴのfaviconを追加 | 🟡 中 |
| 7 | about.html, works.html | SNSリンクが`#`のまま | 実際のInstagram/Xアカウントに差し替え | 🟡 中 |
| 8 | 全体 | Weddingの記載がゼロ | About or 新セクションに「Wedding Produce」追加 | 🟠 Phase2 |

## 構造修正

| # | ページ | 問題 | 修正内容 | 優先度 |
|---|--------|------|---------|--------|
| 9 | works.html | デジタルアート②〜⑥が全て`work-16.html`にリンク | 個別のwork-17〜21ページを作成、またはリンク修正 | 🔴 高 |
| 10 | service.html | AI SUPPORTの訴求が弱い | Before/After事例を追加（「月20h事務→3hに」等） | 🟡 中 |
| 11 | 全ページ | CTA（行動喚起）が弱い | 各セクション末に「まずは無料相談」ボタン配置 | 🟡 中 |

## 技術修正

| # | 対象 | 問題 | 修正内容 | 優先度 |
|---|------|------|---------|--------|
| 12 | assets/works/ | 画像が重い（PNG多数） | WebP変換で表示速度向上 | 🟡 中 |
| 13 | 全ページ | 構造化データ未設定 | JSON-LD（Organization, LocalBusiness）追加 | 🟢 低 |
| 14 | 全ページ | レスポンシブ最終チェック | 各ページのスマホ表示を実機確認 | 🟡 中 |

---

## ドメイン取得

### 候補

| ドメイン | 理由 |
|---------|------|
| `noi-create.com` | NOI＋「つくる」。.comは信頼度が高い |
| `noi-design.jp` | 日本向け。「デザイン」を前面に |
| `noi-studio.com` | スタジオ感。Wedding＋Web両方に合う |
| `weare-noi.com` | ブランド感あり |

### 手順
1. お名前.com / ムームードメイン / Xserverドメインで検索
2. `.com` 推奨（年額 ¥1,500前後）
3. Whois代理公開を有効に

---

## WordPress移行

### 推奨サーバー
**Xserver スタンダード（¥990/月〜）**
- 理由: WordPress運用実績が圧倒的。トラブル時の情報豊富。ドメインセット契約で永久無料キャンペーンあり

### 推奨テーマ
**SWELL（¥17,600 買い切り）**
- 理由: NOIのデザイン性を維持しやすい。ブロックエディタ対応で更新が楽

### 移行ステップ
```
Step 1: Xserver契約 + ドメイン紐付け + SSL設定
Step 2: WordPress簡単インストール
Step 3: SWELLテーマインストール
Step 4: 現HTMLの内容をWPの固定ページ/カスタムブロックに移植
Step 5: 核心的アニメーション（ローディング動画、Works横スクロール）だけカスタムJSで再現
Step 6: Contact Form 7 or WPForms でフォーム構築
Step 7: GA / Search Console 連携
Step 8: 旧GitHub Pagesからのリダイレクト or URL告知
```

### 方針
> テーマベースで作り直し（選択肢A）を推奨
> 運用しやすさ＞演出の派手さ。ブログ・SEO対応を重視
