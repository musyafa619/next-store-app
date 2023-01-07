export interface GetAllProductsResponseDto {
  products: ProductDto[];
  total: number;
  skip: number;
  limit: number;
}

export interface GetSingleProductResponseDto extends ProductDto {}

export interface ProductDto {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
