import httpInstance from "@/utils/http"

export const getDetail = id => httpInstance({ url: '/goods', params: { id } })
