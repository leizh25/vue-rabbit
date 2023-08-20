import httpInstance from "@/utils/http"

//生成-订单(结算页)
export const getCheckInfoAPI = () => httpInstance({ url: "/member/order/pre" })

//创建订单  POST/member/order
export const createOrderAPI = (data) => httpInstance({url:"/member/order",method:"POST",data})

