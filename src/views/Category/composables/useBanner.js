//封装Banner轮播图业务代码

import { ref, onMounted } from "vue"
import { getBannerAPI } from "@/apis/home";

export function useBanner() {
    const bannerList = ref([])
    const getBanner = async () => {
        let res = await getBannerAPI({ distributionSite: "2" })
        // console.log('res: ', res);
        bannerList.value = res.result
    }
    onMounted(() => getBanner())

    return { bannerList }
}