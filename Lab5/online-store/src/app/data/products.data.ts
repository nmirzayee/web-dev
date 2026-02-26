import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  // =========================
  // 1) Smartphones (categoryId: 1)
  // =========================
  {
    id: 101,
    categoryId: 1,
    name: 'Apple iPhone 15 Pro 256GB (Black)',
    description:
      'Titanium iPhone with pro cameras and very fast performance. Great for photos, video, and long-term use.',
    price: 649990,
    rating: 4.8,
    likes: 0,
    image: 'assets/products/iphone15pro/1.jpg',
    images: [
      'assets/products/iphone15pro/1.jpg',
      'assets/products/iphone15pro/2.jpg',
      'assets/products/iphone15pro/3.jpg',
      'assets/products/iphone15pro/5.jpg',
      'assets/products/iphone15pro/4.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-chernyi-113138191/',
  },
  {
    id: 102,
    categoryId: 1,
    name: 'Apple iPhone 15 256GB Dual (Black)',
    description:
      'Modern iPhone with strong battery life and excellent camera quality. Smooth performance for daily tasks and social media.',
    price: 499990,
    rating: 4.7,
    likes: 0,
    image: 'assets/products/iphone15/1.jpg',
    images: [
      'assets/products/iphone15/1.jpg',
      'assets/products/iphone15/2.jpg',
      'assets/products/iphone15/3.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-dual-esim-chernyi-121692148/',
  },
  {
    id: 103,
    categoryId: 1,
    name: 'Samsung Galaxy S24 Ultra 5G 12/256GB (Gray)',
    description:
      'Flagship Android with a big display and powerful camera system. Designed for productivity and premium experience.',
    price: 699990,
    rating: 4.7,
    likes: 0,
    image: 'assets/products/s24ultra/1.jpg',
    images: [
      'assets/products/s24ultra/1.jpg',
      'assets/products/s24ultra/2.jpg',
      'assets/products/s24ultra/3.jpg',
      'assets/products/s24ultra/4.jpg',
      'assets/products/s24ultra/5.jpg',
      'assets/products/s24ultra/6.jpg',
      'assets/products/s24ultra/7.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/',
  },
  {
    id: 104,
    categoryId: 1,
    name: 'Xiaomi Redmi Note 13 Pro 5G 12/512GB (Black)',
    description:
      'Great value phone with smooth AMOLED screen and strong camera. Good for daily use, games, and photos.',
    price: 189990,
    rating: 4.6,
    likes: 0,
    image: 'assets/products/redminote13pro/1.jpg',
    images: [
      'assets/products/redminote13pro/1.jpg',
      'assets/products/redminote13pro/2.jpg',
      'assets/products/redminote13pro/3.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-12-gb-512-gb-chernyi-115939564/',
  },
  {
    id: 105,
    categoryId: 1,
    name: 'Google Pixel 8 8/128GB (Black)',
    description:
      'Clean Android experience with great camera processing. Smooth performance and a bright OLED display.',
    price: 329990,
    rating: 4.6,
    likes: 0,
    image: 'assets/products/pixel8/1.jpg',
    images: [
      'assets/products/pixel8/1.jpg',
      'assets/products/pixel8/2.jpg',
      'assets/products/pixel8/3.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/google-pixel-8-8-gb-128-gb-chernyi-113692654/',
  },

  // =========================
  // 2) Laptops (categoryId: 2)
  // =========================
  {
    id: 201,
    categoryId: 2,
    name: 'Apple MacBook Air 13 (2024) 8GB/256GB (MRXN3RU/A)',
    description:
      'Lightweight laptop for study and work. Fast everyday performance and excellent battery life.',
    price: 649990,
    rating: 4.8,
    likes: 0,
    image: 'assets/products/macbookair8/1.jpg',
    images: [
      'assets/products/macbookair8/1.jpg',
      'assets/products/macbookair8/2.jpg',
      'assets/products/macbookair8/3.jpg',
      'assets/products/macbookair8/4.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-8-gb-ssd-256-gb-macos-mrxn3ru-a-118170954/',
  },
  {
    id: 202,
    categoryId: 2,
    name: 'Apple MacBook Air 13 (2024) 16GB/256GB (MC8G4)',
    description:
      'More RAM for multitasking and coding. Great screen and premium build quality.',
    price: 699990,
    rating: 4.8,
    likes: 0,
    image: 'assets/products/macbookair16/1.jpg',
    images: [
      'assets/products/macbookair16/1.jpeg',
      'assets/products/macbookair16/2.png',
      'assets/products/macbookair16/3.png',
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-16-gb-ssd-256-gb-macos-mc8g4-131761862/',
  },
  {
    id: 203,
    categoryId: 2,
    name: 'Lenovo IdeaPad 1 15.6" 8GB/512GB (15IAU7)',
    description:
      'Budget-friendly laptop for study and office work. SSD makes it feel fast for everyday tasks.',
    price: 199990,
    rating: 4.5,
    likes: 0,
    image: 'assets/products/ideapad1/1.jpg',
    images: [
      'assets/products/ideapad1/1.jpg',
      'assets/products/ideapad1/2.jpg',
      'assets/products/ideapad1/3.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-1-15-6-8-gb-ssd-512-gb-bez-os-15iau7-82qd00etrk-116995419/',
  },
  {
    id: 204,
    categoryId: 2,
    name: 'Lenovo IdeaPad Slim 3 15.3" 16GB/512GB Win11 (15IRH10)',
    description:
      'Solid performance laptop with enough RAM for multitasking. Good for work, study, and light editing.',
    price: 329990,
    rating: 4.6,
    likes: 0,
    image: 'assets/products/slim3/1.jpg',
    images: [
      'assets/products/slim3/1.jpg',
      'assets/products/slim3/2.jpg',
      'assets/products/slim3/3.jpg',
      'assets/products/slim3/4.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-3-15irh10-15-3-16-gb-ssd-512-gb-win-11-83k1002xrk-135203809/',
  },
  {
    id: 205,
    categoryId: 2,
    name: 'HP Pavilion 15.6" 16GB/512GB Win11 (15-eh3060ci)',
    description:
      'Comfortable laptop for work and study with a Full HD display. Great for productivity and browsing.',
    price: 349990,
    rating: 4.6,
    likes: 0,
    image: 'assets/products/hppavilion/1.jpg',
    images: [
      'assets/products/hppavilion/1.jpg',
      'assets/products/hppavilion/2.jpg',
      'assets/products/hppavilion/3.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/hp-pavilion-15-6-16-gb-ssd-512-gb-win-11-15-eh3060ci-a14wkea-119706941/',
  },

  // =========================
  // 3) Headphones (categoryId: 3)
  // =========================
  {
    id: 301,
    categoryId: 3,
    name: 'Sony WH-1000XM5 (Black)',
    description:
      'Top-tier noise cancelling and premium sound. Comfortable for long sessions and travel.',
    price: 139990,
    rating: 4.9,
    likes: 0,
    image: 'assets/products/xm5black/1.jpg',
    images: [
      'assets/products/xm5black/1.jpg',
      'assets/products/xm5black/2.jpg',
      'assets/products/xm5black/3.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/',
  },
  {
    id: 302,
    categoryId: 3,
    name: 'Sony WH-1000XM5 (Silver)',
    description:
      'Legendary Sony noise cancelling with clean detailed sound. Great for flights and office.',
    price: 139990,
    rating: 4.9,
    likes: 0,
    image: 'assets/products/xm5silver/1.jpg',
    images: [
      'assets/products/xm5silver/1.jpg',
      'assets/products/xm5silver/2.jpg',
      'assets/products/xm5silver/3.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-serebristyi-105577599/',
  },
  {
    id: 303,
    categoryId: 3,
    name: 'Sony WH-1000XM5 (Blue)',
    description:
      'Premium wireless headphones with ANC and long battery. Excellent for study and commuting.',
    price: 139990,
    rating: 4.8,
    likes: 0,
    image: 'assets/products/xm5blue/1.jpg',
    images: [
      'assets/products/xm5blue/1.jpg',
      'assets/products/xm5blue/2.jpg',
      'assets/products/xm5blue/3.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-sinii-110881373/',
  },
  {
    id: 304,
    categoryId: 3,
    name: 'Apple AirPods Pro (2nd gen) with MagSafe Case',
    description:
      'Strong noise cancellation and great sound in a compact design. Best for iPhone users.',
    price: 109990,
    rating: 4.9,
    likes: 0,
    image: 'assets/products/airpodspro2/1.jpg',
    images: [
      'assets/products/airpodspro2/1.jpg',
      'assets/products/airpodspro2/2.jpg',
      'assets/products/airpodspro2/3.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/',
  },
  {
    id: 305,
    categoryId: 3,
    name: 'Samsung Galaxy Buds2 Pro (White)',
    description:
      'Comfortable earbuds with high-quality sound and good noise cancelling. Great match for Samsung phones.',
    price: 79990,
    rating: 4.7,
    likes: 0,
    image: 'assets/products/buds2pro/1.jpg',
    images: [
      'assets/products/buds2pro/1.jpg',
      'assets/products/buds2pro/2.jpg',
      'assets/products/buds2pro/3.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds2-pro-belyi-106128764/',
  },

  // =========================
  // 4) Tablets (categoryId: 4)
  // =========================
  {
    id: 401,
    categoryId: 4,
    name: 'Apple iPad 10.9 (2022) Wi-Fi 64GB (Blue)',
    description:
      'Great all-round tablet for study, videos, and notes. Big bright screen and good performance.',
    price: 229990,
    rating: 4.7,
    likes: 0,
    image: 'assets/products/ipad2022blue/1.jpg',
    images: [
      'assets/products/ipad2022blue/1.jpg',
      'assets/products/ipad2022blue/2.jpg',
      'assets/products/ipad2022blue/3.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-10-9-2022-wi-fi-10-9-djuim-4-gb-64-gb-sinii-107266637/',
  },
  {
    id: 402,
    categoryId: 4,
    name: 'Apple iPad 10.9 (2022) Wi-Fi 64GB (Silver)',
    description:
      'Smooth iPad experience for daily apps and entertainment. Good for reading, browsing, and online lessons.',
    price: 229990,
    rating: 4.7,
    likes: 0,
    image: 'assets/products/ipad2022silver/1.jpg',
    images: [
      'assets/products/ipad2022silver/1.jpg',
      'assets/products/ipad2022silver/2.jpg',
      'assets/products/ipad2022silver/3.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-10-9-2022-wi-fi-10-9-djuim-4-gb-64-gb-serebristyi-107264764/',
  },
  {
    id: 403,
    categoryId: 4,
    name: 'Apple iPad 10th gen (2024) 10.9" 64GB (Blue)',
    description:
      'Updated iPad for apps, video, and notes. Great display size and smooth performance for study.',
    price: 239990,
    rating: 4.7,
    likes: 0,
    image: 'assets/products/ipad2024/1.jpg',
    images: [
      'assets/products/ipad2024/1.jpg',
      'assets/products/ipad2024/2.jpg',
      'assets/products/ipad2024/3.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-10th-gen-2024-10-9-djuim-4-gb-64-gb-sinii-132992660/',
  },
  {
    id: 404,
    categoryId: 4,
    name: 'Samsung Galaxy Tab S9 11" 8/128GB (Graphite)',
    description:
      'Premium Samsung tablet with strong performance and a great screen. Good for multitasking and media.',
    price: 319990,
    rating: 4.6,
    likes: 0,
    image: 'assets/products/tabs9/1.jpg',
    images: [
      'assets/products/tabs9/1.jpg',
      'assets/products/tabs9/2.jpg',
      'assets/products/tabs9/3.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/',
  },
  {
    id: 405,
    categoryId: 4,
    name: 'Samsung Galaxy Tab S9 FE Wi-Fi 10.9" 6/128GB (Gray)',
    description:
      'Good value tablet for study and entertainment. Big display and solid battery for daily use.',
    price: 199990,
    rating: 4.5,
    likes: 0,
    image: 'assets/products/tabs9fe/1.jpg',
    images: [
      'assets/products/tabs9fe/1.jpg',
      'assets/products/tabs9fe/2.jpg',
      'assets/products/tabs9fe/3.jpg',
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-fe-wi-fi-10-9-djuim-6-gb-128-gb-seryi-132526020/',
  },
];