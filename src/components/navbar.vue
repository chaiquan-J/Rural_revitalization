<!-- 导航栏 -->
<template>
  <div>
    <div class="nav_bar">
      <!-- logo/网站名字 -->
      <div class="logo_box">
        <router-link class="link_btn" to="/Home">
          <span>崇左</span>
          <span>之窗</span>
        </router-link>
      </div>
      <!-- 导航 -->
      <div class="router_box">
        <nav class="router_item">
          <router-link class="link_btn" exact active-class="active" to="/Home"
            >首页</router-link
          >
        </nav>
        <nav class="router_item">
          <router-link class="link_btn" active-class="active" to="/Industrial"
            >乡村发展</router-link
          >
        </nav>
        <nav class="router_item">
          <router-link class="link_btn" active-class="active" to="/Rural"
            >乡村文化</router-link
          >
        </nav>
        <nav class="router_item">
          <router-link class="link_btn" active-class="active" to="/talent"
            >人才引进</router-link
          >
        </nav>
        <nav class="router_item">
          <router-link class="link_btn" active-class="active" to="/Information"
            >振兴资讯</router-link
          >
        </nav>
        <nav class="router_item">
          <router-link class="link_btn" active-class="active" to="/Login"
            >登录</router-link
          >
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
// 暴露接口
export default {
  // 配置组件名字
  name: "navbar",
  methods: {},
};
</script>

<style src="../assets/style/navbar.css" scoped></style>