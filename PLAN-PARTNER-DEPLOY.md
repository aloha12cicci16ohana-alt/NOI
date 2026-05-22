# NOI_WEB 改修プラン（確定版）

> **最終更新: 2026-05-22**
> **ステータス: ユーザー承認済み → 実装開始**

---

## ⚠️ 絶対ルール

> [!CAUTION]
> **既存のデザインは一切変更しない。**
> - CSS（style.css）のレイアウト・配色・アニメーションに手を加えない
> - 既存ページ（index.html / about.html / works/ / contact.html / privacy.html）の見た目を変えない
> - 新規追加するCSS・HTMLは既存スタイルに合わせて統一する
> - 新規ページ（partner.html）は既存サブページ（about.html等）と同じ構造・テンプレートを踏襲する

---

## 背景と目的

- Web制作会社の下請けパートナー登録に応募するため、HPを「ポートフォリオ兼パートナー窓口」として最適化する
- 現在のHPは自分の事業用に作ったもので、価格表示があるためポートフォリオとしてそのまま出すのは微妙
- Cloudflareでドメイン（noi-design.jp 等）を取得して本格運用する
- GitHub Pages版（aloha12cicci16ohana-alt.github.io/NOI/）は使わない → **NOI_WEB一択**

---

## サイト構成（改修後）

```
noi-design.jp（Cloudflare）
├─ TOP（index.html）         ← 変更なし
├─ ABOUT（about.html）       ← 変更なし
├─ SERVICE（service.html）   ← 価格セクションをURLパラメータ切替式に + 制作会社向け導線追加
├─ WORKS（works/）           ← 変更なし
├─ PARTNER（partner.html）   ← 🆕 新規作成（制作会社・代理店向け窓口）
├─ CONTACT（contact.html）   ← フォーム送信先設定（noi.web1111@gmail.com）
├─ Privacy（privacy.html）   ← 変更なし
└─ sitemap.xml               ← partner.html追加分を反映
```

---

## Phase 1：SERVICEページ改修（今日やる）

### 1-1. 価格セクションのURLパラメータ切替

**仕組み：**
- `service.html` → 価格セクション非表示（パートナー向け・ポートフォリオ用）
- `service.html?price=show` → 価格セクション表示（個人のお客様向け）

**技術的な実装：**
- Price セクション（`.service-price-section`）にデフォルトで `display: none` を設定
- JSで `URLSearchParams` をチェックし、`?price=show` の場合のみ表示に切替
- 表示時はフェードインアニメーション付き

**ファイル変更：**
- [service.html](file:///Users/chiikoba/Desktop/NOI_WEB/service.html) — Price セクションに非表示クラス追加
- [main.js](file:///Users/chiikoba/Desktop/NOI_WEB/js/main.js) — URLパラメータ検出 & 表示切替ロジック追加
- [style.css](file:///Users/chiikoba/Desktop/NOI_WEB/css/style.css) — 非表示/表示用のクラス追加（既存スタイルは変更しない）

### 1-2. SERVICEページ下部に制作会社向け導線追加

**内容：**
- Price セクションの下（または代わりの位置）に「制作会社・代理店の方へ」バナーを追加
- PARTNERページへのリンクボタン
- 既存の `.view-all-btn` スタイルを活用

**ファイル変更：**
- [service.html](file:///Users/chiikoba/Desktop/NOI_WEB/service.html) — パートナー導線セクション追加

---

## Phase 2：PARTNERページ新規作成（今日やる）

### 2-1. partner.html 作成

**テンプレート：** about.html と同じ構造を踏襲（サブページ共通テンプレート）
- ホログラム動画背景
- topbar--sub ヘッダー
- left-rail / right-note / cross 装飾
- scroll-indicator
- liquid-glass-column レイアウト
- glass-footer フッター

**コンテンツ構成：**

```
PARTNER ページ
├─ タイトル：「Partner」
├─ リード文：「あなたのチームの、もうひとりのクリエイティブ。」
│
├─ NOIの強み（3点）
│   ├─ ① ワンストップ対応 — デザイン × コーディング × AI
│   ├─ ② 傾聴力 — ウェディングプランナー20年で培った「聴く力」
│   └─ ③ 柔軟なスケール — バナー1枚からサイト丸ごとまで
│
├─ 対応可能な領域
│   ├─ WEBデザイン（トップ/下層/LP）
│   ├─ コーディング（HTML/CSS/JS/WordPress/STUDIO）
│   ├─ バナー・SNSクリエイティブ
│   └─ AI活用支援（業務自動化・エージェント構築）
│
├─ 協業スタンス
│   ├─ ① Flexible — 貴社の進行ルールに合わせます
│   ├─ ② Communication — 指定の連絡方法に対応します
│   ├─ ③ Credit / NDA — 下請け案件にも配慮します
│   └─ ④ Small Start — 小さな案件からご相談ください
│
└─ CTA：「まずはお気軽にご相談ください」→ contact.html
```

### 2-2. ナビゲーション更新

**全ページのナビに PARTNER を追加：**

```
PC:     TOP / ABOUT / WORKS / SERVICE / PARTNER / CONTACT
Mobile: 同上
```

**変更対象ファイル：**
- [index.html](file:///Users/chiikoba/Desktop/NOI_WEB/index.html) — nav / mobile-menu に追加
- [about.html](file:///Users/chiikoba/Desktop/NOI_WEB/about.html) — 同上
- [service.html](file:///Users/chiikoba/Desktop/NOI_WEB/service.html) — 同上
- [contact.html](file:///Users/chiikoba/Desktop/NOI_WEB/contact.html) — 同上
- [privacy.html](file:///Users/chiikoba/Desktop/NOI_WEB/privacy.html) — 同上
- [works/index.html](file:///Users/chiikoba/Desktop/NOI_WEB/works/index.html) — 同上（パス注意: ../partner.html）
- works/works01.html ~ works16.html — 同上

### 2-3. sitemap.xml 更新
- partner.html のエントリを追加

---

## Phase 3：デプロイ・ドメイン取得

### 3-1. Cloudflare Pages デプロイ

**手順：**
1. Cloudflareアカウントでドメイン取得（noi-design.jp 等）
2. Cloudflare Pagesにプロジェクト作成
3. GitHubリポジトリ連携 or 直接アップロード
4. カスタムドメイン設定
5. SSL/HTTPS 自動設定

### 3-2. Contact フォーム送信設定

**送信先：** noi.web1111@gmail.com

**選択肢：**
- Cloudflare Workers で送信処理
- Formspree / Getform 等の外部サービス連携
- Google Forms埋め込み

> [!NOTE]
> ドメイン取得後にちゃんとしたメールアドレスを作る予定。とりあえずは Gmail で。

---

## 比較判断メモ

### GitHub Pages版 vs NOI_WEB — **NOI_WEB一択**

| 項目 | GitHub Pages版 | NOI_WEB |
|------|---------------|---------|
| デザインの独自性 | GSAPのblob背景（チュートリアル感） | ホログラム映像 + グラスモーフィズム（唯一無二） |
| Works | 弱い | 16作品 + 個別詳細ページ |
| SERVICE | なし | Flow + Price + AI Support |
| コード品質 | インラインstyle混在 | aria属性、セマンティックHTML |
| URL | aloha12cicci16ohana-alt.github.io/NOI/ | noi-design.jp（予定） |
| 信頼感 | 学習者に見える | プロに見える |

---

## 作業時間見積もり

| Phase | 内容 | 見積もり |
|-------|------|----------|
| Phase 1 | SERVICE価格切替 + 導線追加 | 1〜2時間 |
| Phase 2 | PARTNERページ + ナビ更新 | 2〜3時間 |
| Phase 3 | Cloudflareデプロイ | 30分〜1時間 |
| **合計** | | **3.5〜6時間** |

---

## Verification Plan

### ローカル確認
- `service.html` — 価格非表示を確認
- `service.html?price=show` — 価格表示を確認
- `partner.html` — 全セクション表示・レスポンシブ確認
- 全ページのナビゲーション — PARTNERリンクの動作確認
- モバイル表示 — 全ページ確認

### デプロイ後確認
- カスタムドメインでアクセス可能か
- HTTPS有効か
- 全ページのリンク切れチェック
- Contact フォーム送信テスト
