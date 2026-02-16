# ORBIS Brand Strategy Integration Report
**LUMIÈRE PEAU Project Strategy Document**

> **To Hiring Manager & Brand Director**
> 本ドキュメントは、私が本プロジェクトにおいて、オルビスのブランド戦略（Smart Aging）をどのように解釈し、LPのUI/UXに落とし込んだかを体系化した「戦略実装報告書」です。

---

## 1. Brand Strategy Alignment (ブランド戦略との整合性)

オルビスが掲げる **「Smart Aging（スマートエイジング）」** と **「Comfort（ここちよさ）」** というコアバリューを、単なる雰囲気ではなく、**「機能的価値」** として再解釈・実装しました。

### 1-1. "Comfort" as Science (科学としての心地よさ)
*   **Brand Context**: オルビスの「心地よさ」は、単なるリラクゼーションではなく、「肌本来の力が引き出されることで生まれる、精神的な余裕」であると定義しました。
*   **Implementation**:
    *   **Hero Visual (Hydro-Prism)**: 水が循環し、呼吸するかのようなアニメーションにより、「塗り固める」のではなく「肌が生き生きとする」世界観を表現。
    *   **Micro-interactions**: ホバー時の滑らかな挙動（Spring Animation）により、ユーザーが触れるたびに「摩擦レスな心地よさ」を感じるUXを設計。

### 1-2. "Honesty" in Communication (誠実なコミュニケーション)
*   **Brand Context**: 誇張をせず、事実を伝える姿勢。
*   **Implementation**:
    *   **Evidence-First UI**: イメージ画像よりも先に「86% 美容液成分」という数値を提示。
    *   **Comparison w/o Dis**: 競合比較（Comparison Section）において、他社を下げる表現を避け、客観的なスペック比較（成分・持続性）に徹することで、ブランドの品格を担保。

---

## 2. Targeted Persona & Insight (ターゲット分析)

### Persona: "The Rational Improver" (理性的な改善者)
*   **Profile**: 30代後半。「アンチエイジング」という言葉に疲れを感じつつも、諦めたくはない層。
*   **Deep Insight**:
    *   「もう、魔法のような広告にはうんざりしている」
    *   「でも、科学的な根拠があるなら試してみたい」
*   **Strategic Response**:
    *   彼女たちの「疑い（Skepticism）」を晴らすため、**AISASモデルの「Search」プロセスをLP内で完結させる**戦略を採用。
    *   外部サイトで成分を調べる手間を省くため、`Scientific Features` セクションで詳細な処方を開示。

---

## 3. Structural Logic (構成のロジック)

### 3-1. Strategic Pivot: Why PASONA over AIDABABA?
既存の多くの化粧品LPでは、**AIDABABAの法則**（ActionとBeliefを繰り返し、衝動買いを誘うダイレクトレスポンス型）が採用されています。
しかし、本プロジェクトのターゲット「**理性派（Rational Early-Aging）**」において、AIDABABAは以下の理由で逆効果となります。

*   **Risk**: 「売り込みがしつこい」と感じさせ、ブランド毀損（Brand Damage）を招く。
*   **Pivot**: 彼女たちに必要なのは「説得」ではなく「納得」です。そのため、問題解決型のフレームワークである **PASONAの法則** を採用しました。

### 3-2. Detailed PASONA Mapping (PASONAの実装詳細)
各セクションがPASONAのどの役割を担っているか、その意図を解説します。

| Phasa | Role | Section | Rationale (狙い) |
| :--- | :--- | :--- | :--- |
| **P** | **Problem**<br>(問題提起) | **Problem Section**<br>("なんとなく不調...") | 理想状態（キラキラした肌）を見せるのではなく、現在の**「負（悩み）」にフォーカス**し、「これは私のことだ」と認識させる。 |
| **A** | **Affinity**<br>(親近感・共感) | **Brand Story**<br>(Design Process) | 「嘘をつかない」「誠実である」という姿勢をデザインプロセスとして開示。企業対消費者ではなく、**人対人の信頼関係**を築く。 |
| **S** | **Solution**<br>(解決策) | **Scientific Features**<br>**Comparison** | 感情論ではなく、**「86%の成分」「競合優位性（Comparison）」**という客観的事実提示により、論理的な解決策として提示。 |
| **O** | **Offer**<br>(提案) | **Shade Selector**<br>(Free Sample) | いきなりの購入（Buy）ではなく、**「無料で試す権利」**をオファー。理性派が最も恐れる「失敗」のリスクをゼロにする。 |
| **N** | **Narrowing**<br>(絞り込み) | **Micro-Copy**<br>("一人一回限り") | 「誰でも良い」わけではなく、「本気で肌を変えたいあなただけ」という限定性で、**今すぐ申し込む理由（緊急性）**を作る。 |
| **A** | **Action**<br>(行動) | **Sticky CTA** | 思考を中断させない追従ボタンで、決断の瞬間にアクションできる導線を確保。 |

---

## 4. Technical Performance & DX (技術的品質)

「ここちよさ」をWeb体験としても提供するため、技術選定にも妥協していません。

*   **Speed**: Vite + Reactによる超高速なレンダリング。First Contentful Paint (FCP) を最適化し、待ち時間のストレスを排除。
*   **Accessibility**: コントラスト比への配慮（Hero文字の視認性向上）など、ユニバーサルな使いやすさを追求。
*   **Maintenance**: コンポーネント指向（Atomic Design的な分割）により、マーケティング施策に応じたABテストが容易な設計。

---

## 5. Conclusion (結び)

私は、単に美しいWebサイトを作るデザイナー/エンジニアではありません。
**オルビスのブランド哲学を理解し、それをロジカルな戦略と高度な技術で「売れる仕組み」へと変換できるパートナー**です。

本ポートフォリオサイトが、貴社の掲げる「スマートエイジング」の実現に貢献できることを確信しています。

**Akira Koshimizu**
*Strategic Web Architect*
