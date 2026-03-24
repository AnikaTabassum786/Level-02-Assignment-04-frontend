
"use server";

import { orderData, orderService } from "@/services/orderService";


export const createOrder = async (data: orderData) => {
  const res = await orderService.createOrder(data);
  return res;
};

