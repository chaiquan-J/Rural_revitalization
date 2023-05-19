<template>
  <div>
    <div class="body_img"></div>
    <div class="conent">
      <div class="page_title">登 录</div>
      <div class="input_box">
        <el-input placeholder="请输入用户名/账号" class="input_user"></el-input>
        <el-input show-password placeholder="请输入密码"></el-input>
        <p style="margin-top: 20px; color: #00ab25">忘记密码?</p>
      </div>
      <div class="button_box">
        <el-button type="success" plain style="height: 50px; width: 165px"
          >登录</el-button
        >
        <el-button
          type="danger"
          plain
          style="height: 50px; width: 165px"
          @click="goEnrll"
        >
          注册
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goEnrll() {
      this.$router.push("/Enroll");
    },
  },
};
</script>

<style src="../assets/style/Login.css" scoped></style>
<style>
.el-input .el-input__inner {
  height: 50px !important;
}
</style>