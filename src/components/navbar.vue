<!-- 导航栏 -->
<template>
  <div>
    <div class="nav_bar">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: {
    text: "测试",
  },
  //   data() {
  //     return {
  //       text: "测试",
  //     };
  //   },
};
</script>

<style lang="less">
.nav_bar {
  height: 80px;
  width: 100%;
  background-color: pink;
}
</style>