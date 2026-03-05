export interface Product {
  id: number;
  name: string;
  description: string;
  price: number; // kzt
  rating: number; // 1..5 (can be decimal)
  image: string; // main image(local path or URL)
  images: string[]; // gallery images(min 3)
  link: string; // kaspi product page
}