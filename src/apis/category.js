import httpInstance from "@/utils/http";

// 获取-二级分类列表 GET   /category
export const getCategoryAPI = (id) => httpInstance({url:"/category",params:{id}})