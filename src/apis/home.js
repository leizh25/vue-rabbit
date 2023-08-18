import httpInstance from "@/utils/http";


// 获取-轮播图数据  GET/home/banner
export const getBannerAPI = () => httpInstance({url:"/home/banner"})