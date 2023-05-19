<template>
  <div>
    <div class="body_img"></div>
    <div class="conent_Enroll">
      <div class="page_title">注 册</div>
      <div class="input_box">
        <el-input placeholder="请输入用户名/账号" class="input_user"></el-input>
        <el-input placeholder="请输入邮箱" class="input_user"></el-input>
        <el-input
          placeholder="请输入手机号"
          maxlength="11"
          show-word-limit
          class="input_user"
        ></el-input>
        <el-input
          show-password
          placeholder="请输入密码"
          class="input_user"
        ></el-input>
        <el-input show-password placeholder="请再次输入密码"></el-input>
      </div>
      <div class="button_box">
        <el-button type="success" plain style="height: 50px; width: 120px">
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
};
</script>

<style src="../assets/style/Enroll.css" scoped></style>
<style>
.el-input .el-input__inner {
  height: 50px !important;
}
</style>