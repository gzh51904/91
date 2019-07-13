<template>
  <div class="registerWrap">
    <div class="login-warp">
      <header class="mint-header headNav" style="height:43.98px;line-height:43.98px">
        <div class="mint-header-button is-left" v-for="item in tupian">
          <button class="mint-button mint-button-normal">
            <span class="mint-buton-icon">
              <i class="iconfont icon-arrowleft">
                <img :src="item.imgurl1" alt />
              </i>
            </span>
          </button>
        </div>
        <h1 class="mint-header-title"></h1>
        <div class="mint-header-button is-right">
          <a href style="color:inherit;font-size:14px">
            <button class="mint-button mint-botton-normal">注册</button>
          </a>
        </div>
      </header>
      <div class="reisterLogo">
        <img :src="tupian[1].imgurl2" />
      </div>
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
        
        <el-form-item>
          <el-button type="success" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
      </div>
    </div>
    <div  class="fogetPwdRow">
      <a  href="#" class="fogetPwd" style="color:#979797;">忘记密码</a>
    </div>
  </div>
</template>
<script>
export default {
  data(){
        let validatePass = (rule,value,callback)=>{
            callback();
        }
        
        let validateUsername = (rule,value,callback)=>{
          console.log('rule:',rule);
          
          if(value.length<3){
            callback(new Error('手机号格式错误'))
          }else{
            callback();
          }
           
        };
        return{
            tupian:[
              {
                imgurl1:require("../assets/img/zjt.png")
              },
              {
                imgurl2:require("../assets/img/logo.png")
              }
            ],
            // imgo:{ imgurl2:require("../assets/img/logo.png")}
            ruleForm:{
                username:"",
                password:"",
             
            },
            rules: {
            password: [{ validator: validatePass, trigger: "blur" }],
            username: [{ validator: validateUsername, trigger: "blur" }]
          }
        };  
    },
    methods:{
      submitForm(){
        this.$refs['ruleForm'].validate(valid=>{
          if(valid){
            let {username,password} = this.ruleForm;
            this.$axios.get('/login',{
              params:{
                username,
                password
              }
            }).then((res)=>{
              let {data,headers} = res
                console.log(res);
                if(data.code == 250){
                    alert('用户名或密码错误！')
                }else if(data.code === 1000){
                    // 保存登录信息
                    localStorage.setItem('Authorization',data.data);

                    // 获取目标路径
                    let targetPath = this.$route.query.redirectTo;
                    
                    this.$router.replace(targetPath?targetPath:'/home')
                }
            })
          }
        });   
        }
    },
    created(){
      console.log('Login:',this.$route);
      
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
  font-size: 15.996px;
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
.fogetPwdRow{
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    padding-bottom: 49.987px;
    padding-top: 49.987px;
}
</style>

