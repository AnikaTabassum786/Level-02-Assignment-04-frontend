
"use server";

import { CartData, cartService } from "@/services/cartService";

export const createCart = async (data: CartData) => {
  const res = await cartService.createCart(data);
  return res;
};

export const deleteCart = async (id: string) => {
  const res = await cartService.deleteCartById(id);
  return res;
};

