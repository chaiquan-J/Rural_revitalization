<template>
  <div id="app">
    <!-- 导航栏 -->
    <!-- <div class="nav_bar">{{ text }}</div> -->
    <navbar></navbar>
    <!-- 路由渲染 -->
    <router-view></router-view>
  </div>
</template>

<script>
// 导航组件
import navbar from "./components/navbar";

export default {
  // 数据
  data() {
    return {
      text: "测试",
    };
  },
  // 组件
  components: {
    navbar,
  },
  // 函数
  methods: {},
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
</style>