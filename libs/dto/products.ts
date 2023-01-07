export interface ProductDto {
  id: number;
  active: boolean;
  name: string;
  description: string;
  default_price: string;
  metadata: {
    rating: string;
    stock: string;
  };
  images: string[];
  price?: number;
}
