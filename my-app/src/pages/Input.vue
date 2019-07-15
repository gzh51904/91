<template>
  <div>
    <div class="pageSearch">
      <div class="searchBox">
        <i class="icon iconfont icon-search"  v-for="item in imgs">
          <img :src="item.image1" alt />
        </i>
        <input type="text" placeholder="搜索课程或老师" maxlength="50" />
      </div>

      <div class="classBox" @click="fanhui">
        <span>取消</span>
      </div>
    </div>
    <div class="searchBoard">
      <div data-v-79a958e6 class="hot">
        <div data-v-79a958e6 class="searchTitle">
          <span data-v-79a958e6>热门搜索</span>
          <i data-v-79a958e6></i>
        </div>
        <div data-v-79a958e6>
          <div data-v-79a958e6 class="searchItems">初中语文</div>
          <div data-v-79a958e6 class="searchItems">完美生学课</div>
        </div>
      </div>
      <div data-v-79a958e6 class="history">
        <div class="searchTitle">
          <span data-v-79a958e6>历史搜索</span>
          <i data-v-79a958e6 class="icon iconfont icon-delet"  v-for="item in imgs">
            <img :src="item.image2" alt />
          </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            imgs:[
                {
                    image1:require("../assets/img/ss.png")
                },{
                    image2:require("../assets/img/lajitong.png")
                }
            ]
        }
    },
    methods:{
        fanhui(){
            this.$router.replace('/home')
        }
    }

};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  color: #181818;
}
a {
  text-decoration: none;
  cursor: pointer;
}
input {
  border: none;
  outline: none;
}
.box {
  width: 100%;
  height: 100%;
}
.pageSearch,
.searchBox {
  display: flex;
  align-items: center;
}
.pageSearch {
  height: 43.98px;
  width: 100%;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  padding: 0 15.996px;
  z-index: 555;
}
.searchBox {
  height: 31.98px;
  width: 100%;
  border-radius: 20px;
  background: #f5f5f5;
  flex: 1;
}
.searchBox > i {
  color: #c4c4c4;
  padding: 0 3.999px 0 7.998px;
}
.searchBox > input {
  background: none;
  height: 100%;
  flex: 1;
  font-size: 12px;
}
span {
  font-size: 12px;
}
.classBox {
  width: 39.98px;
  height: 39.98px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 0 0 0 1.995px;
}
.searchBoard {
  position: fixed;
  background: #fff;
  z-index: 100;
  top: 43.989px;
  left: 0;
  right: 0;
  bottom: 0;
}
.searchBoard > div {
  padding: 11.997px 15.996px;
}
.searchBoard > div > .searchTitle {
  justify-content: space-between;
}
.searchBoard > div > div > span {
  font-size: 12px;
  color: #979797;
}
.searchBoard > div > div {
  display: flex;
  flex-wrap: wrap;
}
.searchBoard > div > div > .searchItems {
  height: 23.98px;
  padding: 0 7.998px;
  font-size: 12px;
  background: #f8f8f8;
  border-radius: 20px;
  line-height: 23.98px;
  margin: 7.998px 7.998px 0 0;
}
</style>
