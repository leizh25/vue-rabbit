//管理用户数据相关

import { loginAPI } from "@/apis/user";
import { defineStore } from "pinia";
import { ref } from "vue"

export const useUserStore = defineStore("user", () => {
    //1.定义管理用户数据的state
    const userInfo = ref({})
    //2.定义获取接口数据的接口函数
    const getUserInfo = async (data) => {
        let res = await loginAPI(data)
        // console.log('res: ', res);
        userInfo.value = res.result
    }

    //退出时清除用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
    }
    //3.以对象格式把state和 action return
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {
    //持久化配置 存入localStorage
    persist: true,
})
