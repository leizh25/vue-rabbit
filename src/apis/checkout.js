import httpInstance from "@/utils/http"

//生成-订单(结算页)
export const getCheckInfoAPI = () => httpInstance({ url: "/member/order/pre" })

