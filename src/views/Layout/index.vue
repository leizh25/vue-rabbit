<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue';
import { useCategoryStore } from '@/stores/categoryStore';
import { onMounted } from 'vue';

//触发获取导航列表的action
const categoryStore = useCategoryStore()
onMounted(() => categoryStore.getCategory())
</script>

<template>
    <LayoutFixed></LayoutFixed>
    <LayoutNav />
    <LayoutHeader />
    <!-- 第一种方案: 添加key  破坏复用机制,强制销毁重建  但是会导致某些不变的区域在重建时重新发起请求,导致资源浪费 -->
    <!-- <router-view :key="$route.fullPath"></router-view> -->
    <router-view></router-view>
    <LayoutFooter />
</template>