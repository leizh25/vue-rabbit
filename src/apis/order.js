import httpInstance from "@/utils/http";

/*
params: {    
    orderState:0,  
    page:1,  
    pageSize:2
}
    
*/
export const getUserOrder = (params) => httpInstance({ url: '/member/order', method: 'GET', params })