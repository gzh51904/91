<template>
  <div class="box">
    <div class="box1">
      <img :src="img.img1" @click="tattss" />
      <h2>我的作业</h2>
    </div>
    <ul class="ul1">
      <li @click="resss1(1)">
        <span>未提交</span>
        <i v-show="a1"></i>
      </li>
      <li @click="resss1(2)">
        <span>待批改</span>
        <i v-show="a2"></i>
      </li>
      <li @click="resss1(3)">
        <span>已批改</span>
        <i v-show="a3"></i>
      </li>
    </ul>
    <div class="box2">
      <img :src="img.img2" />
      <span>暂无作业</span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
// import{Tabs,TabPane,Tab} from "element-ui";
// Vue.use(Tabs);
// Vue.use(TabPane);
// Vue.use(Tab);
export default {
  data() {
    return {
      img: {
        img1: require("../assets/img/jaintouzuo.png"),
        img2: require("../assets/img/tj.png")
      },
      a1: true,
      a2: false,
      a3: false
    };
  },
  methods: {
    tattss() {
      this.$router.push("/discover");
      console.log(this.$refs);
    },
    resss1(r) {
      // console.log(r);
      if (r == 1) {
        this.a1 = true;
        this.a2 = false;
        this.a3 = false;
      } else if (r == 2) {
        this.a1 = false;
        this.a2 = true;
        this.a3 = false;
      } else {
        this.a1 = false;
        this.a2 = false;
        this.a3 = true;
      }
    },
    // mounted(){
    //     this.a1=true;
    // }
    //      handleClick(tab, event) {
    //     console.log(tab, event);
    //   }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.box {
  width: 100%;
  height: 100%;
}
.box1 {
  width: 100%;
  height: 50px;
  background: rgb(250, 248, 248);
}
.box1 > img {
   width: 15px;height: 24px;float: left;margin-top:13px;margin-left: 10px;
}
.box1 > h2 {
     display: inline-block;width: calc(100% - 50px);
height: 100%;line-height: 50px;
    font-size: 18px;float: left;text-align: center;
}
.ul1 {
  width: 100%;
  height: 45px;
  background: rgb(250, 248, 248);
  list-style: none;
  display: flex;
  justify-content: space-around;
}
.ul1 > li {
  float: left;
  text-align: center;
  box-sizing: border-box;
}
.ul1 > li > span {
  display: block;
  margin-top: 10px;
}
.ul1 > li > i {
  display: block;
  width: 14px;
  height: 3px;
  background: #75c82b;
  /* display: none; */
  margin-left: calc(100% - 30px);
  border-radius: 3px;
}
/* // */
.box2 {
  width: 100%;
  background: #ffffff;
  height: 257px;
  margin-top: 100px;
}
.box2 > img {
  width: 177px;
  height: 177px;
  margin-left: calc(100% - 270px);
}
.box2 > span {
  display: block;
  width: 100%;
  font-size: 16px;
  text-align: center;
}
</style>
