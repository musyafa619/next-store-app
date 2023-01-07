import { ProductDto } from './products';

export interface CartItemDto extends ProductDto {
  quantity: number;
}
