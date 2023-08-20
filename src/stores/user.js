//管理用户数据相关

import { loginAPI } from "@/apis/user";
import { defineStore } from "pinia";
import { reactive } from "vue"

export const useUserStore = defineStore("user", () => {
    //1.定义管理用户数据的state
    const userInfo = reactive({})
    //2.定义获取接口数据的接口函数
    const getUserInfo = async ({ account, password }) => {
        let res = await loginAPI({ account, password })
        // console.log('res: ', res);
        userInfo = res.result
    }
    //3.以对象格式把state和 action return
    return {
        userInfo,
        getUserInfo
    }
})
