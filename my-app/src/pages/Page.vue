<template>
  <div class="course_detail">
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
      <h1 class="mint-header-title">课程详情</h1>
      <div class="mint-header-button is-right">
        <div>
          <div class="course_-detail_box_m_header">
            <div class="course_detail_box_m_header-slot">
              <i class="iconfont icon-icon_collect_nor">
                <img src="../assets/img/sc.png" alt />
              </i>
              <span>收藏</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="course_detail_box_m_bg padding_16px" v-for="item in listpage" :key="item.vacation">
      <div class="detail_title_box">
        <div class="title_left">
          <div class="detail_title">
            <span class="season summer">{{item.vacation}}</span>
            <span class="course_subject">{{item.language}}</span>
            <p>{{item.courseDesc}}</p>
            <div class="course_total">{{item.class}}</div>
          </div>
        </div>
      </div>
      <div class="vspace"></div>
      <p class="detail_brief">
        课程安排：
        <span>{{item.timeremark}}</span>
      </p>
      <p class="detail_brief">{{item.plan}}</p>
      <div class="vspace"></div>
      <ul class="detail_qipao">
        <li>辅导老师</li>
        <li>作业批改</li>
        <li>纸质讲义</li>
        <li>直播</li>
        <li>试听</li>
      </ul>
      <div class="teacher_img">
        <div class="tli">
          <img :src="item.imgurl" alt />
          <p title="李妞妞" class="name">{{item.teacherNames}}</p>
          <p>主讲</p>
        </div>
        <div class="tli">
          <img :src="item.imgtupian" alt />
          <p title="廖美琦" class="name">{{item.zhujiaoNames}}</p>
          <p>助教</p>
        </div>
      </div>
    </div>
    <div class="vspace"></div>
    <div class="course_detail_box_m_bg padding_16px" style="padding:15.996px" v-for="item in listpage">
      <p class="detail_explain">
        <span>限时销售：</span>
        {{item.deadlineStr}}停售
      </p>
      <p class="detail_explain">
        <span>课程资料：</span>{{item.ziliao}}
      </p>
      <div class="detail_explain">
        <span class="detail_explain-shengming">声明：</span>
        <p class="detail_explain-p">本课程支持退课，若退课时资料已发货，需扣除资料服务费</p>
      </div>
      <p class="detail_explain light">
        <span>优惠信息</span>
        <i>{{item.youhui}}</i>
        <i>{{item.xilie}}</i>
        <i>{{item.more}}</i>
      </p>
    </div>
    <div class="vspace" style="background: #fbfbfb;"></div>
    <div class="mint-navbar">
      <span class="mint-tab-item">课程介绍</span>
      <span class="mint-tab-item">课程安排</span>
      <span class="mint-tab-item">教师简介</span>
    </div>
    <div class="fixed_wrap">
      <div class="cart_btn_bar">
        <span class="new">¥1389.5</span>
        <span class="old">¥1462.5</span>
        <div class="btn">
          <div class="row">
            <div class="origin">加入购物车</div>
            <div class="red">立即报名</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listpage: [
        {
          vacation: "暑期",
          language: "语文",
          courseDesc:"二升三读写高效学习班(暑假)",
          class:"共15讲",
          timeremark: "2019-07-13至2019-07-28  每日13:30-15:00，休7月21日",
          plan: "二升三年级学员",
          imgurl: require("../assets/img/teacher.png"),
          teacherNames:"李妞妞",
          imgtupian:require("../assets/img/zhujiao.png"),
          zhujiaoNames:"廖美琦",
          deadlineStr: "2019-08-31 23:59",
          ziliao:"精美纸质讲义",
          youhui:"9.5折优惠",
          xilie:"语文暑秋联报更优惠",
          more:"跨课多优惠",
        }
      ]
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
  cursor: pointer;
}
i {
  font-style: normal;
}
input {
  border: none;
  outline: none;
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
.mint-header-button {
  flex: 0.5;
}
.mint-header-button.is-left {
  text-align: left;
}
.mint-header > .mint-header-title {
  float: left;
  margin-left: 35%;
}
.course_detail_box_m_header {
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.course_detail_box_m_header-slot {
  display: inline-block;
}
.iconfont {
  font-size: 16px;
}
.padding_16px {
  padding: 0 15.996px;
}
.course_detail_box_m_bg {
  background: #fff;
}
.course_detail_box_m .detail_title_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.course_etail_box_m .detail_title_box .title_left {
  display: inline-flex;
  align-items: center;
}
.detail_title {
  margin-right: 4.999px;
  position: relative;
  font-size: 0;
  line-height: 0;
}
.summer {
  background: linear-gradient(315deg, #ff8b8b, #fe7e7e);
}
.season {
  line-height: 21px;
  margin-right: 4px;
  font-size: 12px;
  color: #fff;
  border-radius: 2px;
  padding: 1px;
  display: inline-block;
  vertical-align: middle;
}
.course_subject {
  font-size: 12px;
  line-height: 21px;
  padding: 1px;
  color: #75c82b;
  border: 1px solid #75c82b;
  border-radius: 2px;
  margin-right: 4px;
  display: inline-block;
  vertical-align: middle;
}
.detail_title p {
  color: #181818;
  font-size: 15.996px;
  line-height: 21px;
  display: inline;
  vertical-align: middle;
  font-weight: 700;
}
.course_total {
  background: #f8f8f8;
  border-radius: 2px;
  padding: 0 5.998px;
  font-size: 12px;
  line-height: 21px;
  color: #666;
  display: inline;
  vertical-align: middle;
}
.vspace {
  height: 10px;
  width: 99%;
  clear: both;
  font-size: 0;
  line-height: 0;
}
.detail_brief {
  color: #999;
  font-size: 12px;
  line-height: 20px;
  margin-top: 4.99px;
}
.detail_qipao {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.detail_qipao li {
  background: #f8f8f8;
  border-radius: 22px;
  padding: 0 7.998px;
  color: #999;
  font-size: 12px;
  line-height: 23.98px;
  height: 23.98px;
  margin-right: 7.998px;
  flex-shrink: 0;
  margin-bottom: 7.998px;
}
.teacher_img {
  width: 100%;
  overflow: hidden;
  position: relative;
  padding-top: 16.996px;
}
.teacher_img .tli {
  float: left;
  position: relative;
  margin-right: 15.996px;
  width: 59.98px;
}
.teacher_img .tli img {
  display: block;
  width: 59.98px;
  height: 59.98px;
  border-radius: 50%;
}
.teacher_img .tli p.name {
  color: #363636;
  margin-top: 3.99px;
}
.teacher_img .tli p {
  font-size: 12px;
  line-height: 19px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.teacher_img .tli p {
  color: #979797;
  font-size: 12px;
  line-height: 19px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vspace {
  height: 10px;
  width: 99%;
}
.detail_explain {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #363636;
  line-height: 23px;
  margin: 7.998px 0;
  flex-wrap: wrap;
}
.detail_explain span {
  background: #f8f8f8;
  border-radius: 20px;
  padding: 0 7.998px;
  line-height: 21px;
  color: #999;
  margin-right: 7.998px;
  flex-shrink: 0;
}
.detail_explain span {
  background: #f8f8f8;
  border-radius: 20px;
  padding: 0 7.998px;
  line-height: 21px;
  color: #999;
  margin-right: 7.998px;
  flex-shrink: 0;
}
.detail_explain-p {
  width: 80%;
}
.detail_explain span {
  border-radius: 20px;
  padding: 0 7.998px;
  line-height: 21px;
  margin-right: 7.998px;
  flex-shrink: 0;
}
.detail_explain.light span {
  background: #ffc400;
  background-size: contain;
  padding-right: 24.994px;
  color: #fff;
}
.detail_explain i {
  margin-right: 4.999px;
}
.mint-navbar {
  background-color: #fff;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
.mint-tab-item {
  width: 33.3%;
  padding: 17px 0;
  font-size: 12px;
  display: inline-block;
  flex: 1;
  text-decoration: none;
}

.fixed_wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 542px;
  margin: 0 auto;
  z-index: 1;
}
.fixed_wrap .cart_btn_bar {
  height: 54px;
  padding: 0 16.996px;
  background: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cart_btn_bar .new {
  color: #ff4f00;
  font-size: 20px;
  margin-right: 9.998px;
}
.cart_btn_bar .old {
  color: #9b9b9b;
  font-size: 12px;
  text-decoration: line-through;
  margin-right: 9.998px;
}
.cart_btn_bar .btn {
  flex: 1;
  display: block;
  width: 100%;
  margin: 10px 0;
  text-align: center;
}
.cart_btn_bar .btn .row {
  display: flex;
  justify-content: flex-end;
}
.cart_btn_bar .btn .origin,
.red {
  position: relative;
  z-index: 10px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  line-height: 34px;
  height: 34px;
  padding: 0 7.998px;
  flex-shrink: 0;
}
.fixed_wrap .cart_btn_bar .btn .origin {
  background: linear-gradient(270deg, #fac861, #ffb54d);
  border-radius: 20px 0 0 20px;
}

.cart_btn_bar .btn .red {
  background: linear-gradient(90deg, #ff8700, #ff4100);
  border-radius: 0 20px 20px 0;
}
</style>
