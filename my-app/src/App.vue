<template>
  <div class="app">
    <div class="main">
      <router-view />
    </div>
    <div class="footer">
      <div v-for="item in pages" :key="item.mame" :index="item.path" @click="ass(item)">
        <img :src="item.img1" style="width: 24px; height: 24px;" v-if="item.res" />
        <img :src="item.img2" style="width: 24px; height: 24px;" v-else />
        <span style="font-size: 12px;color: #ccc;  ">
          <router-link :to="item.path">{{item.title}}</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

// import {From,FormItem,Buttom,Input} from "element-ui";
// Vue.use(From);
// Vue.use(FormItem);
// Vue.use(Buttom);
// Vue.use(Input);

export default {
  name: "app",
  data() {
    return {
      pages: [
        {
          title: "选课",
          path: "/home",
          name: "Home",
          img1: require("./assets/img/a1.png"),
          img2: require("./assets/img/a11.png"),
          res: "true",
          clear: "#5cbc20"
        },
        {
          title: "学习",
          path: "/discover",
          name: "Discover",
          img1: require("./assets/img/a3.png"),
          img2: require("./assets/img/a33.png"),
          res: "true",
          clear: "#5cbc20"
        },
        {
          title: "我的",
          path: "/mine",
          name: "Mine",
          img1: require("./assets/img/a2.png"),
          img2: require("./assets/img/a22.png"),
          res: "true",
          clear: "#5cbc20"
        }
      ],
      active: "/home",
      activeName: "second"
    };
  },
  methods: {
    ass(item) {
      item.res = !item.res;
    },
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  },
  components: {}
};
</script>

<style ass>
* {
  padding: 0;
  margin: 0;
}
.app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  width: 100%;
  flex: 1;
  /* height: 600px; */
}
.footer {
  width: 100%;
  height: 55px;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
}
.footer > div {
  height: 100%;
  width: 100%;
  background: #ffffff;
  text-align: center;
}
.footer > div > span {
  width: 100%;
  display: block;
}
.footer > div > img {
  margin-top: 3px;
}
</style>
