<!-- 首页 -->
<template>
  <div>
    <div class="body_box">
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
.body_box {
  width: 100%;
  height: 500%;
  position: absolute;
  top: 0;
  transition: all 0.3s ease;
  /**
   * 轮播
   */
  .swiper_box {
    /**
    height: 1297px;
    width: 100%;
    background-color: #ae1414;
    width: 100%;
     * 
     */
    height: 20%;
    width: 100%;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-color: #ae1414;
  }
  /**
   * 乡村发展
   */
  .develop_box {
    /**
    height: 1297px;
    width: 1650px;
    margin: 0 auto;
     * 
     */
    height: 20%;
    width: 100%;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-color: #24db73;
  }
  /**
   * 乡村文化
   */
  .culture_box {
    height: 20%;
    width: 100%;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-color: #24cfdb;
  }
  /**
   * 振兴政策
   */
  .policy_box {
    height: 20%;
    width: 100%;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-color: #00622e;
  }
  /**
   * 人才引进
   */
  .talent_box {
    height: 20%;
    width: 100%;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-color: #ffb52b;
  }

  footer {
    height: 200px;
    width: 100%;
    background-color: #000;
  }
}
/**
 * 页脚
 */
</style>