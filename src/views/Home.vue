<!-- 首页 -->
<template>
  <div>
    <div class="swiper_box">
      <h1>轮播图</h1>
    </div>
    <!-- 乡村发展 -->
    <div class="develop_box">
      <h1>乡村发展</h1>
    </div>
    <!-- 乡村文化传承 -->
    <div class="culture_box">
      <h1>乡村文化</h1>
    </div>
    <!-- 乡村振兴政策 -->
    <div class="policy_box">
      <h1>政策</h1>
    </div>
    <!-- 乡村人才引进 -->
    <div class="talent_box">
      <h1>人才引进</h1>
    </div>
    <!-- 底部 -->
    <footer></footer>
  </div>
</template>

<script>
export default {
  // 数据
  data() {
    return {};
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
/**
 * 导航
 */
.nav_bar {
  height: 80px;
  width: 100%;
  background-color: pink;
}
/**
 * 轮播
 */
.swiper_box {
  height: 1000px;
  width: 100%;
  background-color: #ae1414;
}
/**
 * 乡村发展
 */
.develop_box {
  height: 700px;
  width: 1650px;
  margin: 0 auto;
  background-color: #24db73;
}
/**
 * 乡村文化
 */
.culture_box {
  height: 700px;
  width: 1650px;
  margin: 0 auto;
  background-color: #24cfdb;
}
/**
 * 振兴政策
 */
.policy_box {
  height: 700px;
  width: 1650px;
  margin: 0 auto;
  background-color: #00622e;
}
/**
 * 人才引进
 */
.talent_box {
  height: 700px;
  width: 1650px;
  margin: 0 auto;
  background-color: #ffb52b;
}
/**
 * 页脚
 */
footer {
  height: 200px;
  width: 100%;
  background-color: #000;
}
</style>