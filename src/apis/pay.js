import httpInstance from "@/utils/http";

export const getOrderAPI = (id) => httpInstance({url:`/member/order/${id}`})