<template>
  <div class="registerWrap">
    <div class="login-warp">
      <header class="mint-header headNav" style="height:43.98px;line-height:43.98px">
        <div class="mint-header-button is-left">
          <button class="mint-button mint-button-normal">
            <span class="mint-buton-icon">
              <i class="iconfont icon-arrowleft">
                <img src="../assets/img/zjt.png" alt />
              </i>
            </span>
          </button>
        </div>
        <h1 class="mint-header-title"></h1>
        <div class="mint-header-button is-right">
          <a href style="color:inherit;font-size:14px">
            <button class="mint-button mint-botton-normal">登录</button>
          </a>
        </div>
      </header>
      <div class="reisterLogo">
        <img src="../assets/img/logo.png" alt />
      </div>
      <!-- <div class="formWrap">
        <form class="registerForm">
          <div>
            <div class="registerRow">
              <input type="text" maxlength="11" placeholder="请输入手机号" />
              <i class="icon iconfont icon-cancle" style="display: none;"></i>
            </div>
            <div class="registerRow">
              <input placeholder="请输入密码" type="password" class="pwd" />
              <i class="icon iconfont icon-unvisible" style="display: none;"></i>
              <i class="icon iconfont icon-cancle" style="display: none;"></i>
            </div>
            <div class="registerRow">
              <input placeholder="请输入确认密码" type="password" class="pwd" />
              <i class="icon iconfont icon-unvisible" style="display: none;"></i>
              <i class="icon iconfont icon-cancle" style="display: none;"></i>
            </div>
            <input type="hidden" name="captchaId" value="1db66234513447018cd6313cb9121f4c" />
            <div id="captcha">
              <input type="hidden" name="NECaptchaValidate" value class="yidun_input" />
            </div>
            <input type="button" value="注册" class="subbtn subbtnL" />
          </div>
        </form>
      </div>-->
      <div class="formWrap">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        
        
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input type="text" placeholder="请输入手机号" maxlength="11" v-model="ruleForm.username" autocomplete="on"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" placeholder="请输入确认密码" v-model="ruleForm.checkPass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="submitForm('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
      
      </div>
    </div>
  </div>
</template>
<script>

export default {
    data(){
        let validatePass = (rule,value,callback)=>{
            callback();
        }
        let checkPass = (rule,value,callback)=>{
          if(value != this.ruleForm.password){
            callback(new Error('两次输入密码不一致'))
          }else{
             callback();
          }
           
        }
        let validateUsername = (rule,value,callback)=>{
          this.$axios.get('http://localhost:1904/reg/check',{
            params:{
              username:value
            }
          }).then(({data})=>{
            if(data.code ==250){
               callback(new Error('该手机已注册'));
            }else{
              callback()
            }
          })
           
        };
        return{
            ruleForm:{
                username:"",
                password:"",
                checkPass:""
            },
            rules: {
            password: [{ validator: validatePass, trigger: "blur" }],
            checkPass: [{ validator: checkPass, trigger: "blur" }],
            username: [{ validator: validateUsername, trigger: "blur" }]
          }
        };  
    },
     methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //验证通过，发请求到后端
            let {username,password} = this.ruleForm;
            this.$axios.post("/reg",{
              username,
              password
            }).then(({data})=>{
              if(data.code == 1000){
                this.$router.push('/login')
                
              }
              
            })
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    } 
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  cursor: pointer;
}
input {
  border: none;
  outline: none;
}

.registerWrap {
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #ffffff;
  height: 100vh;
}
.login-warp {
  flex: 1;
}
.mint-header .headNav {
  display: flex;
  height: 43.98px;
  align-items: center;
  justify-content: space-between;
  padding: 0 15.996px;
  color: #181818;
  background: #fff;
}
.mint-header {
  line-height: 1;
  padding: 0 10px;
  position: relative;
  text-align: center;
  word-spacing: normal;
}
.mint-header-button.is-left {
  text-align: left;
  float: left;
}
.mint-header-button {
  flex: 0.5;
}
.mint-header .mint-button {
  background-color: transparent;
  border: 0;
  box-shadow: none;
  color: inherit;
  display: inline-block;
  padding: 0;
  font-size: inherit;
}
.mint-button-icon {
  vertical-align: middle;
  display: inline-block;
}
.icon-arrowleft {
  font-size: 21px;
  color: #363636;
}
.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
}
.mint-header-title {
  flex: 1;
}
.mint-header > .mint-header-title {
  color: #181818;
  font-weight: 700;
  overflow: hidden;
  word-spacing: normal;
  text-overflow: ellipsis;
}
.mint-header-button.is-right {
  text-align: right;
}
.reisterLogo {
  display: flex;
  height: 105.97px;
  align-items: flex-end;
  justify-content: center;
}
.reisterLogo img {
  width: 154.95px;
  height: 73.97px;
  border: 0 none;
  display: inline-block;
}
.formWrap {
  display: flex;
  padding: 17.995px 23.994px 0;
}
.registerForm {
  width: 100%;
}
.registerRow {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-top: 29.992px;
}
.formWrap input {
  flex: 1;
  font-size: 14px;
  border-bottom: 1px solid #e9e9e9;
  line-height: 33.98px;
  padding-bottom: 7.998px;
}
.formWrap .subbtnL {
  margin-top: 65.984px;
  width: 100%;
  height: 47.98px;
  border-radius: 8px;
  font-size: 30px;
  padding-top: 0;
  background: #eaeaea;
  color: #666;
  line-height: 47.98px;
}
.fogetPwdRow {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  padding-bottom: 49.987px;
  padding-top: 49.987px;
}
</style>

