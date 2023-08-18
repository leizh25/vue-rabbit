//axios基础封装
import axios from "axios"
import nProgress from "nprogress"
import "nprogress/nprogress.css"
const httpInstance = axios.create({
    baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
    timeout: 5000
})

//拦截器
// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    nProgress.start()
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
    return Promise.reject(e)
})
export default httpInstance
