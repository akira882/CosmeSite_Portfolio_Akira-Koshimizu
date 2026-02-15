import React from 'react';
import { ProductShade, Testimonial } from './types';
import { Droplets, Shield, Sparkles, Feather } from 'lucide-react';

export const APP_NAME = "LUMIÈRE PEAU";
export const PRODUCT_NAME = "リュミエール エクラ ファンデーション";

export const SHADES: ProductShade[] = [
  { id: '1N', name: '1N ニュートラル フェア', hex: '#F3E2D6', description: '明るく透き通るような白肌へ', tone: 'Fair' },
  { id: '1C', name: '1C クール ポーセリン', hex: '#F0DFD1', description: 'ピンク味のある儚げな白肌へ', tone: 'Fair' },
  { id: '2N', name: '2N ニュートラル ライト', hex: '#EBD0C0', description: '自然な明るさと透明感のある肌へ', tone: 'Light' },
  { id: '2W', name: '2W ウォーム アイボリー', hex: '#E8CBB6', description: '健康的で温かみのある明るい肌へ', tone: 'Light' },
  { id: '3N', name: '3N ニュートラル ミディアム', hex: '#D9B49E', description: '標準的で均一な陶器肌へ', tone: 'Medium' },
  { id: '3W', name: '3W ウォーム ベージュ', hex: '#D4AD95', description: 'ヘルシーで洗練された印象の肌へ', tone: 'Medium' },
  { id: '4N', name: '4N ニュートラル タン', hex: '#C2967F', description: '日焼けした肌にも馴染む健康的な肌へ', tone: 'Deep' },
  { id: '4W', name: '4W ウォーム ハニー', hex: '#B88A70', description: 'リッチで深みのある小麦肌へ', tone: 'Deep' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "M. Satomi",
    age: 28,
    skinType: "混合肌",
    quote: "夕方のくすみが悩みでしたが、これは時間が経つほど肌に馴染んで綺麗に見えます。もっと早く出会いたかったです。",
    rating: 5
  },
  {
    id: 2,
    name: "K. Eri",
    age: 32,
    skinType: "乾燥肌",
    quote: "ファンデーションというより、色のついた美容液。オフィスで一日中エアコンの下にいても、肌がつっぱりません。",
    rating: 5
  },
  {
    id: 3,
    name: "T. Yumi",
    age: 26,
    skinType: "敏感肌",
    quote: "肌への負担感が全くないのに、粗はしっかりカバーしてくれる。休日の『きちんと感』を出したい時に重宝しています。",
    rating: 4
  }
];

export const FEATURES = [
  {
    title: "モイスチャーマグネット処方",
    description: "空気中の水分を引き寄せ、肌の潤いを逃さない。乾燥崩れを防ぎ、夕方まで瑞々しさをキープ。",
    icon: <Droplets className="w-6 h-6" />
  },
  {
    title: "エアリーフィット設計",
    description: "皮膚の呼吸を妨げないマイクロメッシュ構造。つけていることを忘れるほどの軽やかさ。",
    icon: <Feather className="w-6 h-6" />
  },
  {
    title: "光コントロール技術",
    description: "肌の凹凸を光で飛ばし、厚塗り感なく毛穴や色ムラをカバー。自然なツヤと透明感を演出。",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "バリア機能サポート",
    description: "乾燥や大気微粒子などの外的刺激から肌を守る。敏感に傾きがちな現代女性の肌を考えた設計。",
    icon: <Shield className="w-6 h-6" />
  }
];

export const RITUAL_STEPS = [
  {
    step: "01",
    title: "整える",
    description: "スキンケアで肌を満たした後、パール粒大を手に取ります。"
  },
  {
    step: "02",
    title: "広げる",
    description: "顔の中心から外側に向かって、指の腹で優しく滑らせるように馴染ませます。"
  },
  {
    step: "03",
    title: "高める",
    description: "カバーしたい部分にはトントンと重ね付けを。光を集め、立体的な顔立ちへ。"
  }
];