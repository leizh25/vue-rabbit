<script setup>
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';
const userStore = useUserStore()
const router = useRouter()

//退出登录的回调
const confirm = () => {
    // console.log("退出登录");
    //清除用户信息
    userStore.clearUserInfo()
    //2.跳转到登录页
    router.push({path:"/login"})
    console.log('router: ', router);
}
</script>

<template>
    <nav class="app-topnav">
        <div class="container">
            <ul>
                <!-- 多模板渲染 区分的路状态和非登录状态 -->

                <!-- 适配思路:登录时显示第一块 非登录显示第二块   是否有token -->
                <template v-if="userStore.userInfo.token">
                    <li><a href="javascript:;"><i class="iconfont icon-user"></i>{{ userStore.userInfo.account }}</a></li>
                    <li>
                        <el-popconfirm title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消" @confirm="confirm">
                            <template #reference>
                                <a href="javascript:;">退出登录</a>
                            </template>
                        </el-popconfirm>
                    </li>
                    <li><router-link to="/member/order">我的订单</router-link></li>
                    <li><router-link to="/member/">会员中心</router-link></li>
                </template>
                <template v-else>
                    <li><router-link to="/login">请先登录</router-link></li>
                    <li><a href="javascript:;">帮助中心</a></li>
                    <li><a href="javascript:;">关于我们</a></li>
                </template>
            </ul>
        </div>
    </nav>
</template>


<style scoped lang="scss">
.app-topnav {
    background: #333;

    ul {
        display: flex;
        height: 53px;
        justify-content: flex-end;
        align-items: center;

        li {
            a {
                padding: 0 15px;
                color: #cdcdcd;
                line-height: 1;
                display: inline-block;

                i {
                    font-size: 14px;
                    margin-right: 2px;
                }

                &:hover {
                    color: $xtxColor;
                }
            }

            ~li {
                a {
                    border-left: 2px solid #666;
                }
            }
        }
    }
}
</style>