//axios基础封装
import axios from "axios"
import nProgress from "nprogress"
import "nprogress/nprogress.css"
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'
import { useUserStore } from "@/stores/userStore"
import router from "@/router"
const httpInstance = axios.create({
    baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
    timeout: 5000
})

//拦截器
// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    nProgress.start()
    //1.从pinia获取token数据
    const userStore = useUserStore()
    //2.按照后端要求拼接token数据
    const token = userStore.userInfo.token
    if (token) config.headers.Authorization = "Bearer " + userStore.userInfo.token
    return config
}, e => {
    nProgress.done()
    return Promise.reject(e)
})

// axios响应式拦截器
httpInstance.interceptors.response.use(res => {
    nProgress.done()
    return res.data
}, e => {
    nProgress.done()
    //统一错误提示
    ElMessage.warning(e.response.data.message)
    //401token失效处理
    if (e.response.status == 401) {
        ///1.清除本地用户数据
        const userStore = useUserStore()
        userStore.clearUserInfo()
        //2.跳转到登录页
        router.push({ path: "/login" })
    }
    return Promise.reject(e)
})
export default httpInstance
