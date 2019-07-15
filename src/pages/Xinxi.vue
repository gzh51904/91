<template>
	<div class="box">
		<div class="box1">
			<img :src="img.img1" @click="goof" />
			<h2>个人信息</h2>
			<span>保存</span>
		</div>
		<div class="preson_form">
			<div class="touxiang">
				<div class="touxiang_text">头像</div>
				<img :src="img.img2" alt="">
			</div>
			<div class="nicheng">
				<div class="nicheng_text">昵称</div>
				<div class="nicheng_input">
					<input type="text" placeholder="点击输入">
				</div>
			</div>
			<div class="xingming">
				<div class="xingming_text">姓名</div>
				<div class="xingming_input">
					<input type="text" placeholder="点击输入">
				</div>
			</div>
			<div class="xingbie">
				<div>性别</div>
				<div class="xingbie_right">
					<p>男</p>
					<i class="el-icon-arrow-right"></i>
				</div>
			</div>
			<div class="shengri">
				<div>生日</div>
				<div class="shengri_right">
					<p>去选择</p>
					<i class="el-icon-arrow-right"></i>
				</div>
			</div>
			<div class="nianji">
				<div>年级</div>
				<div class="nianji_right">
					<p>高三</p>
					<i class="el-icon-arrow-right"></i>
				</div>
			</div>
			<div class="diqu">
				<div>地区</div>
				<div class="diqu_right">
					<p>去选择</p>
					<i class="el-icon-arrow-right"></i>
				</div>
			</div>
			<div class="xuexiao">
				<div class="xuexiao_text">学校</div>
				<div class="xuexiao_input">
					<input type="text" placeholder="点击输入">
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			img: {
				img1: require('../assets/img/jaintouzuo.png'),
				img2: require('../assets/img/image_photo.png')
			}
		};
	},
	methods: {
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
	/* float: left; */
	margin-top: 13px;
	margin-left: 10px;
}
.box1 > h2 {
	display: inline-block;
	width: calc(100% - 65px);
	height: 100%;
	line-height: 50px;
	font-size: 18px;text-align: center;
	/* float: left; */
}
.box1 > span {
	font-size: 16px;
	display: inline-block;
	line-height: 50px;
	height: 50px;
	color: #32cd32;
}
input{
	text-align:right;
	border:none;
	outline:none;
}
.touxiang{
	display: flex;
	justify-content: space-between;
	padding: 15px;
}
.touxiang .touxiang_text{
	display: flex;
	align-items: center;
	justify-content: center;
}
.touxiang>img{
	width: 44px;
	height: 44px;
}
.nicheng,.xingming,.xuexiao{
	display: flex;
	justify-content: space-between;
	padding: 15px;
}
.nicheng_text,.xingming_text,.xuexiao_text{
	flex: 1;
}
.nicheng_input,.xingming_input,.xingming_input{
	display: flex;
	flex:6;
	justify-content: flex-end;
}
:-ms-input-placeholder
{
   text-align: right;
}
::-webkit-input-placeholder
{
    text-align: right;
}
:-ms-input-placeholder
{
   text-align: right;
}
::-webkit-input-placeholder
{
    text-align: right;
}
.xingbie,.shengri,.nianji,.diqu{
	display:flex;
	justify-content: space-between;
	padding: 15px;
}
.xingbie_right,.shengri_right,.nianji_right,.diqu_right{
	display: flex;
	align-items: center;
}
.touxiang,.nicheng,.xingming,.xingbie,.shengri,.nianji,.diqu,.xuexiao{
	border-bottom: 1px solid #eaeaea;
}


</style>
