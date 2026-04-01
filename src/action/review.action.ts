"use server"

import { ReviewData, reviewService } from "@/services/reviewService"


export const createReview = async(data:ReviewData)=>{
    const res = await reviewService.createReview(data)
    return res
}