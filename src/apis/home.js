import httpInstance from "@/utils/http";


// 获取-轮播图数据  GET/home/banner
export const getBannerAPI = (params = {}) => {
    const {distributionSite = "1"} = params
    return httpInstance({
         url: "/home/banner",
         params:{
            distributionSite
        } 
        })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => httpInstance({ url: '/home/new' })

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => httpInstance({ url: 'home/hot' })

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => httpInstance({ url: '/home/goods' })


