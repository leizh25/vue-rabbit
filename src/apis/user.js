import httpInstance from "@/utils/http";

//封装所有和用户相关的接口函数

//登录
export const loginAPI = (data) => httpInstance({url:"/login",method:"post",data})