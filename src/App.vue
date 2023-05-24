<template>
  <div id="app">
    <!-- 导航栏 -->
    <navbar></navbar>
    <!-- 路由渲染 -->
    <router-view></router-view>
    <!-- 返回顶部 -->
    <el-backtop>
      <!-- 把默认图标换成组件库提供的图标，改变图标颜色 -->
      <i class="el-icon-caret-top up_box"></i>
    </el-backtop>
    <!-- 底部 -->
    <footer>
      <div class="foot_box">
        <p>Address/地址:崇左市政务服务中心四楼</p>
        <p>TEL/联系电话:(0771)7969257</p>
        <p>MAL/邮箱:czdsjwgk@gxi.gov.cn</p>
        <p>
          官方地址:<a href="http://www.chongzuo.gov.cn/"
            >http://www.chongzuo.gov.cn/</a
          >
        </p>
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
    return {};
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

.up_box {
  color: #20b702;
}

footer {
  height: 170px;
  width: 100%;
  background-color: #444444;

  .foot_box {
    height: 100%;
    width: 1500px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    color: #fff;

    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>