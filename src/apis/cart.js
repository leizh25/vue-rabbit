
//封装购物车相关接口

import httpInstance from "@/utils/http"

// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
    return httpInstance({
      url: '/member/cart',
      method: 'POST',
      data: {
        skuId,
        count
      }
    })
  }
  
//获取最新的购物车列表
export const findNewCartListAPI = () => httpInstance({url:"/member/cart"})

//删除购物车 DELETE/member/cart
export const deleteCart = (ids) => httpInstance({url:"/member/cart",method:"delete",data:{ids}})

//合并购物车 POST/member/cart/merge
export const mergeCartAPI = (data) => httpInstance({url:"/member/cart/merge",method:"post",data})
