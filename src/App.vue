<template>
  <div id="app">
    <!-- 导航栏 -->
    <!-- <div class="nav_bar">{{ text }}</div> -->
    <navbar></navbar>
    <!-- 路由渲染 -->
    <router-view></router-view>
    <!-- 底部 -->
    <footer>
      <div class="foot_box">
        <p>Address/地址:XXXXX省XXX市XXX县XXX路XXX号</p>
        <p>TEL/联系电话:000-000000</p>
        <p>MAL/邮箱:xxx@.com</p>
      </div>
    </footer>
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

footer {
  height: 200px;
  width: 100%;
  background-color: #4e4e4e;

  .foot_box {
    height: 100%;
    width: 1500px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    color: #fff;
  }
}
</style>