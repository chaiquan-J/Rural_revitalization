<!-- 导航栏 -->
<template>
  <div>
    <div class="nav_bar">
      <!-- logo -->
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  methods: {},
};
</script>

<style lang="less">
/**
 * 主体box
 */
.nav_bar {
  height: 75px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /**
  background-color: #6d0f0f;
   * 
   */
  background-color: #444444;
  font-weight: bold;
  font-size: 20px;
  position: relative;
  z-index: 999;
  /**
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
   * 
   */

  /**
 * logo
 */
  .logo_box {
    display: flex;
    flex-direction: row;
    font-size: 40px;
    font-weight: 100;
    font-family: sjkt;

    .link_btn {
      text-decoration: none;
      height: 100%;
      display: block;
      color: #ffde00ff;
      transition: all 0.5s;

      :nth-child(2) {
        color: #00ab25;
      }
    }
  }

  /**
   * 路由盒子
   */
  .router_box {
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    flex-direction: row;

    .router_item {
      height: 100%;
      width: 130px;
      line-height: 75px;
      text-align: center;

      .link_btn {
        text-decoration: none;
        height: 100%;
        display: block;
        color: #00ab25;
        transition: all 0.5s;
      }

      .active {
        color: #fff;
      }

      :hover {
        color: #ffde00ff;
      }
    }
  }
}
</style>