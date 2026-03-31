
"use server";

import { orderData, orderService } from "@/services/orderService";


export const createOrder = async (data: orderData) => {
  const res = await orderService.createOrder(data);
  return res;
};

export const updateOrder = async (id: string, updateData: any) => {
  const res = await orderService.updateOrderStatus(id, updateData);
  return res
};