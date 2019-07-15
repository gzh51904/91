<template>
	<div class="box">
		<div class="box1">
			<img :src="img.img1" @click="goof" />
			<h2>地址管理</h2>
		</div>
		<div class="main">
			<img class="shopimg" :src="img.img2" alt="">
			<p class="shopdizhi">暂无收货地址哦，快去添加吧～</p>
		</div>
		<div class="footer" @click="tttts">
			<span class="addressInfo">+新增收货地址</span>
		</div>
	</div>
</template>

<script>
export default {
	name:'suwei',
	data() {
		return {
			img: {
				img1: require('../assets/img/jaintouzuo.png'),
				img2: require('../assets/img/tj.png')
			}
		};
	},
	methods: {
		tttts(){ this.$router.push('/addsuwei');},
		goof() {
			this.$router.push('/mine');
		}
	}
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.box{
	/* position: relative; */
	display: flex;
	flex-direction: column;
}
.box1 {
	display: flex;
	width: 100%;
	height: 50px;
	z-index: 22;
	border-bottom: 1px solid #75c82b;
}
.box1 > img {
	width: 15px;
	height: 24px;
	margin-top: 13px;
	margin-left: 10px;
}
.box1 > h2 {
	display: inline-block;
	width: calc(100% - 65px);
	height: 100%;
	line-height: 50px;
	font-size: 18px;
	text-align: center;
}
.main{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.shopimg{
	width: 100px;
	height: 100px;
}
.shopdizhi{
	font-size:12px;
    color: #999;
    margin-top: 5px;
}
.footer{
	position: absolute;
	left: 0;
    right: 0;
    bottom: 0;
    padding: 20px 0 30px;
    background: #fff;
    z-index: 100;
	display: flex;
	justify-content: center;
}
.footer>span{
	display: flex;
	justify-content: center;
	align-items: center;
    width:250px;
    height:40px;
    border-radius:20px;
    background: rgba(117,200,43,.87);
    font-size:16px;
    color: #181818;
}
</style>
