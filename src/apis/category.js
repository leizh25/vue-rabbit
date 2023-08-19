import httpInstance from "@/utils/http";

// 获取-二级分类列表 GET   /category
export const getCategoryAPI = (id) => httpInstance({ url: "/category", params: { id } })


/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id 
 * @return {*}
 */

export const getCategoryFilterAPI = (id) => httpInstance({ url: '/category/sub/filter', params: { id } })
