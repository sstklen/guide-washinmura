// 和心村 — JSON-LD 結構化資料生成器
// 每頁的 @graph 都從這裡組裝，確保 @id 全站統一

import { BUSINESS, SITE, ROOMS, FAQ_JA, type Room, type FaqItem } from './constants';

// ===== 全站共用：Organization =====
export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${BUSINESS.url}/#organization`,
    name: BUSINESS.legalName,
    alternateName: [BUSINESS.name, BUSINESS.nameEn, BUSINESS.nameReading, 'washinmura'],
    url: BUSINESS.url,
    // 使用官網 Strikingly CDN 上的 logo
    logo: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_300,w_300,f_auto,q_auto/4291621/715028_418679.png',
    sameAs: [
      BUSINESS.url,
      BUSINESS.guideUrl,
      BUSINESS.apiUrl,
      BUSINESS.social.instagram,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS.telIntl,
      email: BUSINESS.email,
      contactType: 'reservations',
      availableLanguage: ['ja', 'en', 'zh-Hant'],
    },
    address: addressSchema(),
  };
}

// ===== 全站共用：WebSite =====
export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: `${SITE.name} — ${SITE.nameEn}`,
    publisher: { '@id': `${BUSINESS.url}/#organization` },
    inLanguage: ['ja', 'en', 'zh-Hant'],
  };
}

// ===== 全站共用：PostalAddress =====
export function addressSchema() {
  return {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.prefecture,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: 'JP',
  };
}

// ===== 全站共用：BreadcrumbList =====
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${SITE.url}/#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ===== 首頁：LodgingBusiness + TouristAttraction =====
export function lodgingBusinessSchema() {
  return {
    '@type': ['LodgingBusiness', 'TouristAttraction'],
    '@id': `${BUSINESS.url}/#place`,
    name: `${BUSINESS.name}（${BUSINESS.nameEn}）`,
    alternateName: [BUSINESS.nameReading, BUSINESS.nameEn, BUSINESS.nameZhTw, 'washinmura'],
    description: BUSINESS.description,
    url: BUSINESS.url,
    // 使用官網 Strikingly CDN 圖片（不同比例）
    image: [
      'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_675,w_1200,f_auto,q_auto/4291621/715028_418679.png',
      'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_900,w_1200,f_auto,q_auto/4291621/715028_418679.png',
      'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_630,w_630,f_auto,q_auto/4291621/715028_418679.png',
    ],
    priceRange: BUSINESS.priceRange,
    address: addressSchema(),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    telephone: BUSINESS.telIntl,
    email: BUSINESS.email,
    checkinTime: BUSINESS.checkinTime,
    checkoutTime: BUSINESS.checkoutTime,
    numberOfRooms: BUSINESS.numberOfRooms,
    petsAllowed: '要相談',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Finnish Wood-Fired Sauna', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Free Parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'BBQ Area', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Rescue Cats (16)', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Treehouse', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Kengo Kuma Jyubako', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Station Pickup (Reservation Required)', value: true },
    ],
    hasMap: `https://maps.google.com/?q=${BUSINESS.geo.latitude},${BUSINESS.geo.longitude}`,
    isAccessibleForFree: false,
    publicAccess: true,
    tourBookingPage: BUSINESS.bookingUrl,
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: BUSINESS.bookingUrl,
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
      result: { '@type': 'LodgingReservation' },
    },
    containsPlace: ROOMS.map((r) => ({
      '@id': `${SITE.url}/rooms/${r.id}/#room`,
    })),
  };
}

// ===== 客室頁面：HotelRoom =====
export function roomSchema(room: Room) {
  return {
    '@type': 'HotelRoom',
    '@id': `${SITE.url}/rooms/${room.id}/#room`,
    name: room.nameJa,
    alternateName: [room.nameEn, room.nameZhTw],
    description: room.highlights.join('。') + '。',
    occupancy: {
      '@type': 'QuantitativeValue',
      maxValue: room.maxOccupancy,
    },
    bed: {
      '@type': 'BedDetails',
      typeOfBed: room.bedType,
      numberOfBeds: room.bedCount,
    },
    floorSize: room.area ? {
      '@type': 'QuantitativeValue',
      value: room.area,
      unitCode: 'MTK',
    } : undefined,
    amenityFeature: room.amenities.map((a) => ({
      '@type': 'LocationFeatureSpecification',
      name: a,
      value: true,
    })),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'JPY',
      price: room.priceFrom.toString(),
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      url: BUSINESS.bookingUrl,
    },
    containedInPlace: { '@id': `${BUSINESS.url}/#place` },
  };
}

// ===== FAQ 頁面：FAQPage =====
export function faqPageSchema(items?: FaqItem[]) {
  const faqItems = items || FAQ_JA;
  return {
    '@type': 'FAQPage',
    '@id': `${SITE.url}/faq/#faqpage`,
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ===== Blog 文章：Article =====
export function articleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  keywords: string[];
}) {
  return {
    '@type': 'Article',
    '@id': `${SITE.url}/blog/${article.slug}/#article`,
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: BUSINESS.lastUpdated,
    author: { '@id': `${BUSINESS.url}/#organization` },
    publisher: { '@id': `${BUSINESS.url}/#organization` },
    keywords: article.keywords.join(', '),
    inLanguage: 'ja',
    mainEntityOfPage: `${SITE.url}/blog/${article.slug}/`,
  };
}

// ===== @graph 組裝器（每頁呼叫一次）=====
export function buildGraph(...schemas: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema(),
      websiteSchema(),
      ...schemas,
    ],
  };
}
