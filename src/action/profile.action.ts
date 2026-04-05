'use server'

import { profileService } from "@/services/profileService";

export const updateProfile = async (updateData: any) => {
  const res = await profileService.updateProfile(updateData);
  return res
};