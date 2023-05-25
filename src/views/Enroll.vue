<template>
  <div>
    <div class="body_img"></div>
    <div class="conent_Enroll">
      <div class="page_title">注 册</div>
      <div class="input_box">
        <el-input
          @blur="userempty"
          placeholder="请输入用户名"
          class="input_user"
          v-model="username"
        ></el-input>
        <p class="prompt" :class="{ opacit: useropa }">{{ usertext }}</p>
        <el-input
          placeholder="请输入邮箱"
          v-model="email"
          class="input_user"
          @blur="emailempty"
        ></el-input>
        <p class="prompt" :class="{ opacit: emailopa }">{{ emailtext }}</p>
        <el-input
          placeholder="请输入手机号"
          maxlength="11"
          show-word-limit
          class="input_user"
          @blur="phoneempty"
        ></el-input>
        <p class="prompt" :class="{ opacit: phonopa }">{{ phonetext }}</p>
        <el-input
          show-password
          placeholder="请输入密码"
          class="input_user"
          @blur="pwdempty"
        ></el-input>
        <p class="prompt" :class="{ opacit: pwdopa }">{{ pwdtext }}</p>
        <el-input
          show-password
          placeholder="请再次输入密码"
          @blur="pswdempty"
        ></el-input>
        <p class="prompt" :class="{ opacit: pswdopa }">{{ pswdtext }}</p>
      </div>
      <div class="button_box">
        <el-button
          @click="gologin"
          type="success"
          plain
          style="height: 50px; width: 120px"
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
      username: "",
      usertext: "用户名不能为空！",
      useropa: false,
      pwd: "",
      pswd: "",
      pwdtext: "密码不能为空！",
      pswdtext: "请再次输入密码！",
      pwdopa: false,
      pswdopa: false,
      email: "",
      emailtext: "请输入邮箱！",
      emailopa: false,
      phone: "",
      phonetext: "请输入手机号！",
      phonopa: false,
    };
  },
  methods: {
    userempty() {
      // 正则表达式，验证用户是否输入正确格式
      var userz = /^[\u4e00-\u9fa5a-zA-Z0-9]{0,12}$/;
      if (this.$data.username == "") {
        // 为空则显示提示文字
        this.$data.useropa = true;
        this.$data.usertext = "用户名不能为空！";
        // 返回判断值，在注册按钮调用事件时返回判断条件
        return false;
        // 通过空判断进入正则表达式判断
      } else if (userz.test(this.$data.username)) {
        // 通过正则表达式验证，隐藏提示文字
        this.$data.useropa = false;
        return true;
      } else {
        // 未通过正则表达式验证，显示对应的提示文字
        this.$data.useropa = true;
        this.$data.usertext =
          "用户名可包含中文、大小写字母和数字，6-12个字符。";
        return false;
      }
    },
    emailempty() {
      var emailz =
        /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      if (this.$data.email == "") {
        this.$data.emailopa = true;
        this.$data.emailtext = "请输入邮箱！";
        return false;
      } else if (emailz.test(this.$data.email)) {
        this.$data.emailopa = false;
        return true;
      } else {
        this.$data.emailopa = true;
        this.$data.emailtext = "请输入有效的邮箱格式！";
        return false;
      }
    },
    phoneempty() {
      var phonez =
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      if (this.$data.phone == "") {
        this.$data.phonopa = true;
        this.$data.phonetext = "请输入手机号！";
        return false;
      } else if (phonez.test(this.$data.phone)) {
        this.$data.phonopa = false;
        return true;
      } else {
        this.$data.phonopa = true;
        this.$data.phonetext = "请输入有效的手机号！";
        return false;
      }
    },
    pwdempty() {
      var pwdz = /^[a-zA-Z]\w{5,17}$/;
      if (this.$data.pwd == "") {
        this.$data.pwdopa = true;
        this.$data.pwdtext = "请输入密码！";
        return false;
      } else if (pwdz.test(this.$data.pwd)) {
        this.$data.pwdopa = false;
        return true;
      } else {
        this.$data.pwdopa = true;
        this.$data.pwdtext =
          "密码以字母开头，只能包含字母、数字和下划线，6-18字符。";
        return false;
      }
    },
    pswdempty() {
      if (this.$data.pswd == "") {
        this.$data.pswdopa = true;
        this.$data.pswdtext = "请再次输入密码！";
        return false;
      } else if (this.$data.pswd == this.$data.pwd) {
        this.$data.pswdopa = false;
        return true;
      } else {
        this.$data.pswdopa = true;
        this.$data.pswdtext = "两次输入密码不相同，请重新输入";
        return false;
      }
    },
    // 注册按钮点击事件
    gologin() {
      // 通过与或非的与判断，全部返回值为true才能跳转到登陆页
      // 如果有一个为flase就重复调用事件提示
      if (
        this.userempty() &&
        this.emailempty() &&
        this.phoneempty() &&
        this.pwdempty() &&
        this.pswdempty()
      ) {
        this.$router.push("/Login");
      } else {
        this.userempty();
        this.emailempty();
        this.phoneempty();
        this.pwdempty();
        this.pswdempty();
      }
    },
  },
};
</script>

<style src="../assets/style/Enroll.css" scoped></style>
<style>
.el-input .el-input__inner {
  height: 50px !important;
}
</style>