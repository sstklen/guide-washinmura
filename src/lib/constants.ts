// 和心村 — 全站共用常數（所有頁面的 JSON-LD、meta 都從這裡取值）

export const SITE = {
  name: '和心村ガイド',
  nameEn: 'Washin Village Guide',
  url: 'https://guide.washinmura.jp',
  locale: 'ja_JP',
} as const;

export const BUSINESS = {
  name: '和心村',
  nameReading: 'わしんむら',
  nameEn: 'Washin Village',
  nameZhTw: '和心村',
  legalName: '株式会社和心村',
  description: '千葉県房総半島の里山に佇む、築約200年の古民家を中心とした体験型グランピング施設。16匹の保護猫と暮らす「人と動物と自然が共生する村」。',
  descriptionEn: 'A satoyama glamping retreat on the Boso Peninsula, Chiba. Stay in a 200-year-old farmhouse with 16 rescue cats, a Finnish wood-fired sauna, and Kengo Kuma × Snow Peak "Jyubako" units. 80 min from Tokyo.',
  descriptionZhTw: '位於日本千葉縣房總半島的里山，以築200年古民家為核心的體驗型露營設施。16隻保護貓、北歐薪柴桑拿、隈研吾×Snow Peak「住箱」。東京出發80分鐘。',
  url: 'https://washinmura.jp',
  guideUrl: 'https://guide.washinmura.jp',
  apiUrl: 'https://api.washinmura.jp',
  bookingUrl: 'https://d-reserve.jp/GSEA001F01300/GSEA001A01?hotelCode=0000000873',
  // TODO: tkman 提供正確電話號碼後再填入
  tel: '',
  telIntl: '',
  email: 'info@washinmura.jp',
  address: {
    postalCode: '299-1733',
    prefecture: '千葉県',
    city: '富津市',
    street: '高溝14',
    full: '〒299-1733 千葉県富津市高溝14',
    fullEn: '14 Takamizo, Futtsu City, Chiba 299-1733, Japan',
  },
  geo: {
    latitude: 35.2341,
    longitude: 139.8765,
  },
  checkinTime: '15:00',
  checkoutTime: '11:00',
  priceRange: '¥¥',
  numberOfRooms: 4,
  foundedYear: 2020,
  buildingAge: '約200年',
  animalCount: {
    cats: 16,
    dogs: 2,
    goats: 2,
    total: 28,
  },
  social: {
    instagram: 'https://www.instagram.com/washinmura_nature_glamping/',
    line: 'https://lin.ee/washinmura',
  },
  lastUpdated: '2026-02-23',
  // OG 圖片（從官網 Strikingly CDN 取得）
  ogImage: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_630,w_1200,f_auto,q_auto/4291621/715028_418679.png',
  heroImages: [
    'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/4291621/933562_657667.png',
    'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/4291621/824972_147156.png',
    'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/4291621/642924_283061.png',
    'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/4291621/559247_39529.png',
    'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1500,w_2000,f_auto,q_auto/4291621/541983_757925.png',
  ],
} as const;

// 客室資料（Quick Facts 用）
export const ROOMS = [
  {
    id: 'kominka',
    nameJa: '古民家母屋',
    nameEn: 'Kominka Main House',
    nameZhTw: '古民家主屋',
    type: '一棟貸し',
    typeEn: 'Whole house',
    maxOccupancy: 4,
    area: 80,
    priceFrom: 25000,
    bedType: '和室布団ベッド',
    bedCount: 2,
    highlights: [
      '築約200年の本物の古民家',
      '囲炉裏・ハンモック付き',
      '保護猫が自由に出入り',
    ],
    highlightsEn: [
      'Authentic 200-year-old traditional farmhouse',
      'Irori (sunken hearth) and hammock included',
      'Rescue cats freely roam in and out',
    ],
    amenities: ['冷暖房', 'WiFi', 'シャワー', 'トイレ', '囲炉裏', 'ハンモック'],
    notSuitableFor: ['大人数グループ（5名以上）', '完全な静寂を求める方（猫が出入りします）'],
    sortOrder: 1,
  },
  {
    id: 'jyubako',
    nameJa: '住箱 -JYUBAKO-',
    nameEn: 'Jyubako (Kengo Kuma × Snow Peak)',
    nameZhTw: '住箱（隈研吾×Snow Peak）',
    type: 'モバイルハウス',
    typeEn: 'Mobile house',
    maxOccupancy: 2,
    area: 15,
    priceFrom: 20000,
    bedType: 'シングルベッド',
    bedCount: 2,
    highlights: [
      '世界的建築家・隈研吾デザイン',
      'Snow Peakとのコラボレーション',
      'ミニマルな木の空間',
    ],
    highlightsEn: [
      'Designed by world-renowned architect Kengo Kuma',
      'Collaboration with Snow Peak',
      'Minimalist wooden space',
    ],
    amenities: ['冷暖房', 'WiFi', 'ベッド', '電源'],
    notSuitableFor: ['3名以上', '広い部屋を求める方'],
    sortOrder: 2,
  },
  {
    id: 'nagayamon',
    nameJa: '長屋門',
    nameEn: 'Nagayamon Gate House',
    nameZhTw: '長屋門',
    type: '一棟貸し',
    typeEn: 'Whole house',
    maxOccupancy: 6,
    area: 60,
    priceFrom: 30000,
    bedType: '布団',
    bedCount: 3,
    highlights: [
      '和心村で最も広い客室',
      'グループ・家族向け',
      '伝統的な長屋門建築',
    ],
    highlightsEn: [
      'Largest room at Washin Village',
      'Perfect for groups and families',
      'Traditional nagayamon architecture',
    ],
    amenities: ['冷暖房', 'WiFi', 'シャワー', 'トイレ', '広縁'],
    notSuitableFor: ['1名利用（広すぎます）'],
    sortOrder: 3,
  },
  {
    id: 'nordisk',
    nameJa: 'Nordisk テント',
    nameEn: 'Nordisk Glamping Tent',
    nameZhTw: 'Nordisk 露營帳篷',
    type: 'グランピングテント',
    typeEn: 'Glamping tent',
    maxOccupancy: 4,
    area: 30,
    priceFrom: 18000,
    bedType: 'エアベッド',
    bedCount: 2,
    highlights: [
      '北欧ブランドNordiskの高級テント',
      '本格アウトドア体験',
      '星空が見える',
    ],
    highlightsEn: [
      'Premium Nordisk tent from Scandinavia',
      'Authentic outdoor experience',
      'Stargazing from your bed',
    ],
    amenities: ['電源', 'LEDランタン', 'エアベッド', 'ブランケット'],
    notSuitableFor: ['悪天候時（風雨が強い日）', '虫が苦手な方'],
    sortOrder: 4,
  },
  // ツリーハウスは coming soon（公開後に追加）
] as const;

// FAQ 資料
export const FAQ_JA = [
  {
    category: 'access',
    question: '東京からのアクセス方法は？',
    answer: '車で約70〜80分。東京湾アクアラインを経由し、館山自動車道の富津中央ICから約15分です。電車の場合はJR内房線の上総湊駅から車で約15分（送迎あり・要予約）。',
  },
  {
    category: 'access',
    question: '駐車場はありますか？',
    answer: 'はい、各客室ごとに無料駐車スペースをご用意しています。大型車も駐車可能です。',
  },
  {
    category: 'animals',
    question: '保護猫とはどう触れ合えますか？',
    answer: '16匹の保護猫が村内を自由に行き来しています。猫カフェのような施設ではなく、猫たちの「家」にゲストが滞在する形です。24時間いつでも自然な形で触れ合えます。',
  },
  {
    category: 'animals',
    question: '猫アレルギーでも宿泊できますか？',
    answer: '16匹の保護猫が施設内で暮らしているため、猫アレルギーの方は事前にご相談ください。症状の軽い方は、住箱やテントなど猫が入りにくい客室をおすすめします。',
  },
  {
    category: 'facilities',
    question: 'サウナはどんな種類ですか？',
    answer: '本格フィンランド式の薪サウナです。自分で薪をくべ、ロウリュ（蒸気浴）を楽しめます。水風呂とととのいスペース（外気浴）も完備。宿泊者は追加料金なしで利用できます。',
  },
  {
    category: 'facilities',
    question: 'BBQはできますか？',
    answer: 'はい、宿泊プランにBBQセットが含まれています。日帰りBBQプランもございます。食材は地元の新鮮な素材を中心にご用意します。',
  },
  {
    category: 'booking',
    question: '予約方法を教えてください',
    answer: 'お電話での受付は行っておりません。公式予約サイト（d-reserve.jp）からのオンライン予約、またはLINE・メールでお問い合わせください。',
  },
  {
    category: 'booking',
    question: 'チェックイン・チェックアウトの時間は？',
    answer: 'チェックインは15:00、チェックアウトは11:00です。アーリーチェックイン・レイトチェックアウトについてはご相談ください。',
  },
  {
    category: 'booking',
    question: 'キャンセルポリシーは？',
    answer: '7日前まで無料、3日前まで50%、前日・当日は100%のキャンセル料が発生します。詳しくは予約時の規約をご確認ください。',
  },
  {
    category: 'general',
    question: '子連れ家族でも楽しめますか？',
    answer: 'はい、お子様連れ大歓迎です。子供特典付きの家族向けプランもあります。自然の中で動物と触れ合う体験は、お子様にとって貴重な原体験になります。',
  },
  {
    category: 'general',
    question: '周辺にコンビニはありますか？',
    answer: '最寄りのコンビニまで車で約10分です。必要なものは事前にご購入いただくことをおすすめします。里山の静かな環境をお楽しみください。',
  },
  {
    category: 'general',
    question: '携帯電話の電波は入りますか？',
    answer: 'docomo・au・SoftBankの電波は入りますが、山間部のため場所によって電波が弱いことがあります。WiFiは各客室で利用可能です。',
  },
] as const;

export type Room = typeof ROOMS[number];
export type FaqItem = typeof FAQ_JA[number];
