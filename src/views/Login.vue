<template>
  <div id="Login">
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
      style="height:100%"
    >
    </vue-particles>

    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="account">
        <el-input
          type="text"
          v-model="ruleForm.account"
          autocomplete="off"
          :required="true"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
          :required="true"
        ></el-input>
      </el-form-item>

      <el-form-item style="margin-left:-100px">
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from "../server/api";
import { mapActions, mapState } from "vuex";
import { root,user } from '@/router/routerList'

export default {
  name: "Home",
  components: {},
  computed: {
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        account: "admin",
        password: "admin@123",
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        account: [{ validator: validateAccount, trigger: "blur" }],
      },
    };
  },
  mounted() {
   
      console.log(this.$route.query.redirect)
  },
  methods: {
    ...mapActions("userInfo", ["setUserInfo",'getUserInfo']),
    async login() {
      try {
        let { data } = await login(this.ruleForm);
        this.setUserInfo({token:data.token,userName:data.account});
        this.$message({
          message: '登陆成功',
          type: 'success'
        });
        this.gohome()
      } catch (error) {
        console.log(error);
      }
    },
    gohome() {
      console.log("去首页");
      this.$router.push(this.$route.query.redirect||"/home");
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: "正在登陆，请稍后...",
            type: "warning",
          });
          this.login();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
#Login {
  background-image: linear-gradient(-180deg, #1a1454 0%, #0e81a5 100%);
  /*background-image: url("../images/bg_login.png");*/
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;

  .el-form {
    width: 500px;
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #eee;
    padding: 50px 30px;
    ::v-deep .el-form-item__label {
      color: #fff;
    }
  }
  .el-form-item--feedback {
    text-align: center;
  }
}
</style>
