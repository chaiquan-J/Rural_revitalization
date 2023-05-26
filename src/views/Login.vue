<template>
  <div>
    <div class="body_img"></div>
    <div class="conent">
      <div class="page_title">登 录</div>
      <div class="input_box">
        <el-input
          placeholder="请输入用户名/账号"
          v-model="username"
          class="input_user"
          @blur="userempty"
        ></el-input>
        <p class="prompt" :class="{ opacit: nameopa }">请输入用户名/帐号！</p>
        <el-input
          show-password
          v-model="pwsd"
          placeholder="请输入密码"
          @blur="showpwsd"
        ></el-input>
        <p class="prompt" :class="{ opacit: pwdoopa }">请输入密码！</p>
        <p style="margin: 0 auto; margin-top: 10px; color: #00ab25">
          忘记密码?
        </p>
      </div>
      <div class="button_box">
        <el-button
          type="success"
          plain
          style="height: 50px; width: 165px"
          @click="login"
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
    return {
      // 动态绑定数据
      username: "",
      pwsd: "",
      // 控制提示文字显示
      nameopa: false,
      pwdoopa: false,
    };
  },
  methods: {
    // 跳转注册
    goEnrll() {
      this.$router.push("/Enroll");
    },
    // 判断用户输入框失去焦点时是否为空
    userempty() {
      if (this.$data.username == "") {
        // 为空则显示提示文字
        this.$data.nameopa = true;
        return false;
      } else {
        // 输入文字后通过判断，红字消失
        this.$data.nameopa = false;
        return true;
      }
    },
    // 密码输入框失去焦点时触发事件
    showpwsd() {
      // 判断密码是否为空
      if (this.$data.pwsd == "") {
        this.$data.pwdoopa = true;
        return false;
      } else {
        this.$data.pwdoopa = false;
        return true;
      }
    },
    // 登陆按钮事件
    login() {
      // 通过多重if和嵌套if判断，账号和密码输入框是否为空，全通过才可以跳转至首页，否则显示相应的提示文字
      if (this.userempty() && this.showpwsd()) {
        this.$router.push("/Home");
      } else {
        this.userempty();
        this.showpwsd();
      }
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