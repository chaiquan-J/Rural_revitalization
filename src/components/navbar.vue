<!-- 导航栏 -->
<template>
  <div>
    <div class="nav_bar">
      <!-- logo -->
      <div class="logo_box">
        <h1>崇左</h1>
        <h1>之窗</h1>
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
  height: 90px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #6d0f0f;
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
    color: #f1ff56;

    :nth-child(2) {
      color: #00ab25;
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
      line-height: 90px;
      text-align: center;

      .link_btn {
        text-decoration: none;
        height: 100%;
        display: block;
        color: #00ab25;
        transition: all 0.5s;
      }

      .active {
        color: #f1ff56;
      }

      :hover {
        color: #f1ff56;
      }
    }
  }
}
</style>