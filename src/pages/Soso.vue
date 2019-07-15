<template>
  <div class="box">
    <div class="box1">
      <img :src="img.img1" @click="tor" />
      <h2>我的优惠券</h2>
    </div>
    <ul class="ul1">
      <li @click="resss1(1)">
        <span>未使用</span>
        <i v-show="a1"></i>
      </li>
      <li @click="resss1(2)">
        <span>已使用</span>
        <i v-show="a2"></i>
      </li>
      <li @click="resss1(3)">
        <span>已过期</span>
        <i v-show="a3"></i>
      </li>
    </ul>
    <div class="boxs">
      <div class="lo" v-for='item in resst1' :key="item.id">
        <div class="li1">
          <span>￥{{item.resume}}</span>
        </div>
        <div class="li2">
          <div class="li21">
            <span>{{item.name}}</span>
            <span>{{item.rangeName}}</span>
            <span>{{item.endTime}}</span>
          </div>
          <div class="li22">
            <span @click='popo'>去使用</span >
            <img :src="img.img2" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <input type="text" placeholder="获取优惠券，请输入优惠券码" />
      <button>领取</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: {
        img1: require("../assets/img/jaintouzuo.png"),
        img2: require("../assets/img/fanjian.png")
      },
      a1: true,
      a2: false,
      a3: false,
      resst: [
        {
          actOnOrder: false,
          choosable: false,
          courseId: 2626,
          endTime: "2019-09-24 23:59:59",
          exchangeFlag: false,
          executing: false,
          id: 2369,
          imminentOverTime: 0,
          name: "高三新生注册-50元优惠券(物理学科通用)",
          priority: 1,
          rangeName: "学科专用券",
          resume: "50.00",
          startTime: "2019-03-19 18:26:43",
          status: 1,
          subjectId: "4",
          type: 5,
          usableShow: false
        },
        {
          actOnOrder: false,
          choosable: false,
          courseId: 2490,
          endTime: "2019-09-24 23:59:59",
          exchangeFlag: false,
          executing: false,
          id: 2368,
          imminentOverTime: 0,
          name: "高三新生注册-50元优惠券(英语学科通用)",
          priority: 1,
          rangeName: "学科专用券",
          resume: "50.00",
          startTime: "2019-03-19 18:26:06",
          status: 1,
          subjectId: "3",
          type: 5,
          usableShow: false
        },
        {
          actOnOrder: false,
          choosable: false,
          courseId: 2434,
          endTime: "2019-09-24 23:59:59",
          exchangeFlag: false,
          executing: false,
          id: 2367,
          imminentOverTime: 0,
          name: "高三新生注册-50元优惠券(数学学科通用)",
          priority: 1,
          rangeName: "学科专用券",
          resume: "50.00",
          startTime: "2019-03-19 18:25:31",
          status: 1,
          subjectId: "2",
          type: 5,
          usableShow: false
        },
      ],
      resst1:[]
    };
  },
  methods: {
    tor() {
      this.$router.push("/mine");
    },
    resss1(r) {
      if(r!=1){
        // console.log(1);
        this.resst1=[];
      }else{
        this.resst1=this.resst
      }
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
    popo(){this.$router.push("/home");}
  },
  created(){
    this.resst1=this.resst;
    // console.log(this.resst1);
    
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
  width: 15px;
  height: 24px;
  float: left;
  margin-top: 13px;
  margin-left: 10px;
}
.box1 > h2 {
  display: inline-block;
  width: calc(100% - 50px);
  height: 100%;
  line-height: 50px;
  font-size: 18px;
  float: left;
  text-align: center;
}
.ul {
  width: 100%;
  list-style: none;
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
.boxs {
      padding: 10px 10px 0px -5px;
  width:calc(100% - 10px);
}
.lo {
  width: 100%;
  height: 133px;
  border-radius: 10px;
  border: 1px solid red;
  background: rgb(253, 247, 247);
  margin-top: 10px;
}
.li1 {
  width: 100px;
  height: 100%;box-sizing: border-box;
  float: left;
  border-right: 1px dashed rgb(235, 171, 171);
}
.li1 > span {
  display: block;
  color: #ff4f00;
  font-size: 18px;
  width: 100%;
  text-align: center;
  line-height: 133px;
}
.li2 {
  height: 100%;
  width: calc(100% - 100px);
  float: right;
}
.li21 {
  padding: 10px 10px 0px 10px;
  width: calc(100% - 70px);box-sizing: border-box;
  height: 100%;
  float: left;
  color: #ff4f00;
}
.li21 > span:nth-child(1) {
  display: block;
  width: 100%;font-size: 16px;
}
.li21 > span:nth-child(2) {
  font-size: 12px;
  margin-top: 10px;
  width: 100%;
  display: block;
}
.li21 > span:nth-child(3) {
  font-size: 12px;
  margin-top: 10px;
  width: 100%;
  display: block;
}

.li22 {
  display: block;
  width: 100%;
  width: 70px;
  height: 100%;
  float: right;
  color: #ff4f00;
  box-sizing: border-box;
  padding-top: calc(50% - 115px);
}
.li22 > span {
  font-size: 14px;
}
.li22 > img {
  width: 16px;
  height: 10px;
}
.footer {
  border-top: 1px solid rgb(241, 238, 238);
  width: calc(100% - 40px);
  background: #ffffff;
  height: 55px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 555;
  padding: 9px 20px;
}
.footer > button {
  width: 67px;
  height: 37px;
  background: #75c82b;
  border-radius: 20px;
  border: none;
}
.footer > input {
  height: 37px;
  border: none;
  width: calc(100% - 67px);
  border-radius: 20px;
  box-sizing: border-box;

  background: rgb(235, 232, 232);
  line-height: 37px;
  padding: 3px 0 0 15px;
}
</style>
