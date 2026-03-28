"use server";

import { userService } from "@/services/user.service";

export const banUser = async (id: string) => {
  const res = await userService.banUserById(id);
  return res;
};
