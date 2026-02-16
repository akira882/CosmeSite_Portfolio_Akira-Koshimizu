# LUMIÈRE PEAU | Orbis Rebranding Strategy Portfolio

> **"Reason & Radiance" - 理性と感性を融合させる、次世代の化粧品EC戦略**
> 
> This project is a strategic landing page (LP) redesign proposal for ORBIS, focusing on the "Rational Early-Aging" demographic. It demonstrates not just coding skills, but a comprehensive ability to engineer business value through specific design and technology choices.

---

## 📑 Table of Contents

1.  [Executive Summary (プロジェクト概要)](#1-executive-summary)
2.  [Marketing Strategy (市場・ターゲット戦略)](#2-marketing-strategy)
3.  [Creative Direction (デザインコンセプト)](#3-creative-direction)
4.  [Technical Architecture (技術スタックと選定理由)](#4-technical-architecture)
5.  [UI/UX Logic (売れるための設計)](#5-uiux-logic)
6.  [Author Profile (制作者について)](#6-author-profile)

---

## 1. Executive Summary

本プロジェクトは、単なる「綺麗なウェブサイトの作成」ではなく、**「LTV（顧客生涯価値）」の最大化と「CPA（獲得単価）」の最適化**を目的とした、戦略的プロトタイピングです。

*   **Objective**: 30代後半〜40代の「肌の曲がり角」を感じ始めた層に対する、新規顧客獲得（Acquisition）。
*   **Solution**: 「高保湿 × 科学的根拠」を訴求軸とした、信頼と憧れを醸成するハイエンドLPの構築。
*   **Result**: 感情的なイメージ訴求に偏重せず、論理的な納得感（成分・数値）と視覚的な没入感（Hydro-Prism）を融合させ、CVR（コンバージョン率）を最大化する設計を実現。

---

> [!IMPORTANT]
> **For Recruiters & Hiring Managers:**
> Please refer to **[ORBIS_STRATEGY_REPORT.md](ORBIS_STRATEGY_REPORT.md)** for a detailed breakdown of the **Marketing Strategy, Persona Analysis (Mariko Sato), and Logical Design Decisions** behind this project.
> このプロジェクトの核心である「戦略ロジック」と「ペルソナ分析」の詳細は、上記レポートにまとめています。

---

## 2. Marketing Strategy

### 🎯 Core Persona: "The Rational Early-Aging" (理性派・堅実層)
従来の「F1層（20-34歳）」という大雑把な括りではなく、より具体的な心理特性に基づくペルソナを設定しました。

*   **Demographic**: 30代後半〜40代前半、都市部在住、働く女性。
*   **Psychographic (心理)**:
    *   「もう広告の嘘には騙されない」という**健全な懐疑心**を持つ。
    *   一時の流行よりも、「確かな効果（エビデンス）」と「コストパフォーマンス」を重視。
    *   失敗を極端に嫌う（Loss Aversion）。
*   **Strategy**:
    *   **Risk Reversal**: いきなりの高額購入（¥5,800）ではなく、「無料サンプル」をCTAに据えることで、心理的障壁を完全撤廃。
    *   **Evidence First**: イメージ画像の前に「86% 美容液成分」という数値を提示し、左脳（論理）へアプローチ。

---

## 3. Creative Direction

### 💎 Concept: "Scientific Moisture" (科学する潤い)
「オルビス＝真面目・地味」というイメージを脱却し、**「オルビス＝洗練されたサイエンスビューティー」**へと昇華させるためのビジュアルアイデンティティを構築しました。

#### Key Visual: "Hydro-Prism"
*   **Center-Focused Layout**: 画面中央に、製品を包み込む「生きた水球」を配置。CSS FilterとBox Shadowを積層させ、脈動する（Breathing）アニメーションを実装。
*   **Dynamic Particles**: 空間に浮遊する水の粒子により、静止画LPでは表現できない「潤いが満ちていく時間」を演出。
*   **Vertical Typography**: キャッチコピーを**縦書き**にすることで、PC画面における「余白の美学」と、日本ブランドとしての「品格」を強調。

#### UI Polish: "World Class Standard"
*   **Typography**: 数字（86%）には `Didot` 近似のディスプレイフォントを使用し、権威性を表現。
*   **Features Section**: 幼稚なアイコンを全撤廃し、`01 MOISTURE` といったタイポグラフィ主体のデザインへ刷新。海外ハイブランド（Aesop, Le Labo）の基準に合わせたトーン＆マナー。

---

## 4. Technical Architecture

最高品質のユーザー体験（UX）と開発者体験（DX）を両立させるため、以下のモダンスタックを選定しました。

| Category | Technology | Selection Rationale (選定理由) |
| :--- | :--- | :--- |
| **Framework** | **React 18** | コンポーネント指向による再利用性と、状態管理（Shader選択など）の柔軟性のため。 |
| **Build Tool** | **Vite** | 圧倒的なビルド速度によるPDCAサイクルの高速化。特に微細なUI調整時のHMRが重要。 |
| **Language** | **TypeScript** | 「信頼」を売るブランドとして、コードも堅牢（Type-Safe）であるべきという思想。 |
| **Styling** | **Tailwind CSS** | デザインシステム（Brand Colors, Water Colors）をTokenとして定義し、一貫性を担保。 |
| **Animation** | **Framer Motion** | 物理演算に基づく自然なアニメーション（Spring）により、「心地よさ」を数値化・実装するため。 |
| **Icons** | **Lucide React** | 軽量かつ可読性の高いSVGアイコンセット。 |

---

## 5. UI/UX Logic

「美しい」だけでなく、「売れる」ためのロジックを細部に実装しています。

### 🧠 Cognitive Ease (認知的容易性)
*   **Information Grouping**: Featuresセクションにおいて、ナンバリングと英語見出しを近接させ、「読みやすさ」を極限まで高めることで離脱を防ぐ。
*   **Visual Hierarchy**: 「86%」→「画像」→「キャッチコピー」の順に視線が流れるよう、フォントサイズとウェイトを秒単位で調整。

### 🛒 Conversion Optimization (CVR向上施策)
*   **Frictionless CTA**: CTAボタンの文言を「カートに入れる」から「無料サンプルを試す」へ変更。さらにテキスト下に「※全色お届け」と明記し、クリックへの不安要素を排除。
*   **Interactive Shade Selector**: 色味を単なる画像切り替えではなく、動的なグラデーション変化として実装し、「選ぶ楽しさ（Engagement）」を提供。

---

## 6. Strategic Design Logic (売れる構成の根拠)

なぜこの構成が「理性派」に響き、CV（成果）を生むのか。
単なる経験則ではなく、行動心理学およびマーケティングフレームワーク（AISAS, PASONA）に基づき、論理的に設計しています。

### 6-1. AISASモデルの「Search」をLP内で完結させる (The "Anti-Search" Strategy)
Web時代の購買行動「AISAS (Attention → Interest → **Search** → Action → Share)」において、最大の離脱ポイントは「Search（検索・比較検討）」です。
特に今回のターゲット「理性派」は、LPを見た後に必ず「成分 根拠」「競合比較」を外部サイトで行おうとします。

*   **Design Logic**:
    *   LP内にあえて詳しすぎるほどの「Scientific Approach（成分構成・エビデンス）」や「Brand Story（開発者の想い）」を配置。
    *   **「ユーザーが外部で検索したくなる情報」を全てLP内に先回りして提示**することで、サイト離脱（Competitor Leakage）を物理的に防ぎ、そのまま**Action（CV）**へと誘導します。

### 6-2. PASONAの法則に基づくストーリー設計
セールスライティングの鉄則「PASONAの法則」を、UIデザインという非言語領域まで拡張して実装しました。

| Phase | Framework Step | Implementation (本サイトでの実装) |
| :--- | :--- | :--- |
| **P** | **Problem (問題提起)** | Heroコピー「なんとなく不調が続く肌へ」。"乾燥"ではなく"不調"という言葉で、エイジング初期の不定愁訴を指摘。 |
| **A** | **Affinity (親近感)** | Design Processでの「嘘をつかない」宣言。過剰なレタッチを避けた写真選定により、「私のためのブランドだ」という共感（Affinity）を形成。 |
| **S** | **Solution (解決策)** | 感情論ではなく、数字（**86% Essence**）と視覚（**Hydro-Prism**）で解決策を提示。右脳と左脳の両方で「効きそう」と納得させる。 |
| **O** | **Offer (提案)** | 「カートに入れる」ではなく**「無料サンプル」**。購入のハードルを極限まで下げるオファー設計。 |
| **N** | **Narrowing (絞込)** | CTA下のマイクロコピー「※お一人様1回限り」。限定性を持たせることで「今やる理由」を作る。 |
| **A** | **Action (行動)** | 追従するCTAボタンと、視認性を高めた（濃色化した）テキストリンク。 |

### 6-3. 行動経済学の実装 (Behavioral Economics)
*   **Loss Aversion (損失回避バイアス)**:
    *   人間は「得すること」より「損しないこと」を優先します。ターゲット層はこの傾向が顕著です。
    *   だからこそ、CTAを「Buy（金銭的損失のリスク）」から「Free Trial（リスクゼロ）」に変えることで、コンバージョン率を劇的に改善します。
*   **Anchoring Effect (アンカリング効果)**:
    *   Shade Selectorセクションで、あえて本製品の価格（¥10,450）をリッチに表示。
    *   この「高価格」がアンカー（基準）となり、その直後の「無料」の価値を相対的に高め、申込みへの強いインセンティブを生み出しています。

---

## 7. Author Profile

**Akira Koshimizu**
*AI-Native Web Architect / UI Engineer*

ビジネス戦略をコードに翻訳し、デザインという言語でユーザーに届けるエンジニア。
単に仕様通りに作るのではなく、「なぜ作るのか？（Why）」「誰に届けるのか？（Who）」から逆算した**「成果の出るクリエイティブ」**の提供を得意とします。

---
*© 2025 Akira Koshimizu Portfolio Project. All Rights Reserved.*
