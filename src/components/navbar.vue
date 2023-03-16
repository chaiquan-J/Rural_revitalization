<!-- 导航栏 -->
<template>
  <div>
    <div class="nav_bar">
      <!-- logo -->
      <div class="logo_box">
        <h1>这是logo</h1>
      </div>
      <!-- 导航 -->
      <div class="router_box">
        <nav class="router_item">
          <router-link class="link_btn" to="/">首页</router-link>
        </nav>
        <nav class="router_item">
          <router-link class="link_btn" to="/Industrial">乡村发展</router-link>
        </nav>
        <nav class="router_item">
          <router-link class="link_btn" to="/">乡村文化</router-link>
        </nav>
        <nav class="router_item">
          <router-link class="link_btn" to="/">振兴政策</router-link>
        </nav>
        <nav class="router_item">
          <router-link class="link_btn" to="/">人才引进</router-link>
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
  height: 70px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(255, 192, 203, 0.487);
  font-weight: bold;
  font-size: 20px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  /**
 * logo
 */
  .left_box {
    display: flex;
    align-items: center;
    background-color: #b54006;
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
    background-color: #0675b5;

    .router_item {
      height: 100%;
      width: 100px;
      background-color: #06b54f;
      line-height: 70px;
      text-align: center;

      .link_btn {
        text-decoration: none;
        height: 100%;
        display: block;
      }
    }
  }
}
</style>