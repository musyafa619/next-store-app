import { AxiosResponse } from 'axios';
import { axiosInstance } from 'config/axios';
import {
  GetAllProductsResponseDto,
  GetSingleProductResponseDto,
} from 'libs/dto/products';

export const getAllProducts = async () => {
  const response: GetAllProductsResponseDto = await axiosInstance.get(
    `/products`,
    {
      params: {
        limit: 10,
      },
    }
  );

  return response;
};

export const getSingleProduct = async (id: string) => {
  const response: GetSingleProductResponseDto = await axiosInstance.get(
    `/products/${id}`
  );

  return response;
};
