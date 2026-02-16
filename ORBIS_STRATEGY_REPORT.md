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

## 2. Deep Persona Profiling (ペルソナ詳細分析)

本LPは、架空のターゲットではなく、実在性が高い**一人の顧客（N=1）**を徹底的に分析し、その心理に基づき設計されています。

### 👤 Target: "Mariko Sato" (仮名・38歳)
*   **Attributes**: 大手企業人事（リモート週3）/ 世帯年収1,100万円 / 夫・小1の子ども
*   **Psychographics (心理属性)**:
    *   **「ちゃんとしている人」でありたい**: 派手な若作りは痛いと感じるが、生活感が出てしまうのも怖い。
    *   **「失敗への恐怖」**: 忙しい日常の中で、合わない化粧品を買って後悔する時間も金銭的余裕も心理的にもない。
    *   **「広告への警戒心」**: SNSのPR投稿は見抜いており、鵜呑みにしない。「自分の目」で成分や根拠を確認したい。

### 🧠 Latent Desires & Brand Match (潜在欲求とブランド適合)
彼女の言葉にはならない欲求と、オルビス（本LP）のマッチングポイント。

| Latent Desire (本音) | Brand Solution (本LPの回答) | UI Implementation (実装) |
| :--- | :--- | :--- |
| **"若く見られたい" ではなく<br>"清潔感がある人" でいたい** | **Modest Honesty**<br>(派手じゃない誠実さ) | キラキラした装飾を排し、肌の質感を重視した**Heroビジュアル（Hydro-Prism）**で「清潔感」を表現。 |
| **"成分で納得したい"<br>(ミドルコスメの価格帯で)** | **Evidence-First**<br>(科学的根拠) | 彼女が普段行う「成分検索」の手間を省くため、**Scientific Features**で成分濃度（86%）を明示。 |
| **"失敗したくない"<br>(レビューは3件以上読む)** | **Risk Reversal**<br>(リスク排除) | 「私と同じような人」の声を求めているため、**Reviews**で同年代・同肌質の声を掲載し、**Final CTA**で「無料」を提示して全リスクを肩代わりする。 |

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

### 3-5. The Re-Closing: Final CTA (循環型クロージング)
Reviews（社会的証明）の直後に、ダメ押しの **Final CTA** を配置しました。

*   **Logic**: Sticky CTA（追従）は便利ですが、「背景」になりがちです。
*   **Effect**: 「みんな使っている（Reviews）」という高揚感の直後に、「今すぐ申し込む（Action）」という明確なドアを用意することで、**熱量が冷める前にコンバージョンへ転換**させます。これはユーザー視点の指摘から生まれた、アジャイルな戦略改善の一例です。

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
