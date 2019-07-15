import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  // state
  state: {
    goodslist: [
    //   {
    //   class: "共15讲",
    //   courseDesc: "(秋)新概念英语一册入门级(Lesson1-40)(中外教)",
    //   deadlineStr: "2019/12/17 23:59:00",
    //   id: "55",
    //   imgtupian: "../assets/img/kkk1.png",
    //   jibie: "主讲",
    //   language: "英语",
    //   oldPrice: "2275",
    //   payable: "99",
    //   plan: "特价课",
    //   surplus: "1",
    //   teacherNames: "陈彦静",
    //   timeremark: "2019-09-07至2019-12-21 每周六09:00-11:30",
    //   vacation: "秋季",
    //   qty:1
    // },
    
  ]
  },

  // getters
  // 一般用于对state进行处理
  getters: {
    saleGoodslist(state) {
      return state.goodslist.map(item => {
        item.price *= 0.8;
        return item;
      })
    }
  },

  // mutations
  // 修改state的唯一方式
  // 触发方式：store.commit('add',{name:'显示器'})
  mutations: {
    // 添加商品
    add(state, goods) {
      // state:就是state
      // payload:触发add方法时传入的参数
      // console.log(goods)
      state.goodslist.unshift(goods);
    },

    // 删除商品
    remove(state, id) {
      state.goodslist = state.goodslist.filter(item => item.id != id);
    },

    // 修改数量
    changeQty(state, {
      id,
      qty
    }) {
      state.goodslist.forEach(item => {
        if (item.id == id) {
          item.qty = qty
        }
      })
    }
  }
});

export default store;