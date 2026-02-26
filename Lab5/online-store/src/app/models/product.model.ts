export interface Product {
  id: number;
  categoryId: number; // new
  name: string;
  description: string;
  price: number;  
  rating: number; 
  likes: number;  // new 
  image: string;     
  images: string[]; 
  link: string;      
}