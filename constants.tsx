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
    title: "24時間 濃密保湿",
    description: "野生のパンジーエキスが水分循環をサポート。落とした後も、もちもちの肌へ。",
    icon: <Droplets className="w-6 h-6" />
  },
  {
    title: "素肌のような軽さ",
    description: "独自のマイクロメッシュ構造が肌の呼吸を妨げず、つけていることを忘れる解放感。",
    icon: <Feather className="w-6 h-6" />
  },
  {
    title: "発光するオーラ",
    description: "光を乱反射するピグメントが、毛穴や色ムラを瞬時に飛ばし、透明感を演出。",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "都市型プロテクション",
    description: "ブルーライトや排気ガスなどの環境ストレスから、日中の肌を徹底ガード。",
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