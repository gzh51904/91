<template>
	<div class="box">
		<div class="box1">
			<img :src="img.img1" @click="goof" />
			<h2>新建收货人</h2>
		</div>
		<div class="main">
			<div class="Consignee">
				<div class="Consignee_text">收货人:</div>
				<div class="Consignee_input">
					<input type="text" placeholder="姓名最多为25字符">
				</div>
			</div>
			<div class="tel_phone">
				<div class="tel_phone_text">联系电话:</div>
				<div class="tel_phone_input">
					<input type="text" placeholder="请填写手机号码">
				</div>
			</div>
			<div class="locats">
				<div class="locats_text">所在地区:</div>
				<div class="locats_input">
					<input type="text" placeholder="请选择省市区">
				</div>
			</div>
			<div class="Detailed_address">
				<div class="Detailed_address_text">详细地址:</div>
				<div class="Detailed_address_input">
					<textarea class="Detailed_address_textarea" name="" id="" cols="30" rows="10" placeholder="建议如实填写街道名称、门牌号、楼层和房间"></textarea>
				</div>
			</div>
			
		</div>
		<div class="footer">
			<span class="add_addressInfo">保存</span>
		</div>
	</div>
</template>

<script>
export default {
	name:'addsuwei',
	data() {
		return {
			img: {
				img1: require('../assets/img/jaintouzuo.png')
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
	flex-direction: column;
}
input{
	border:none;
	outline:none;
}
.Consignee,.tel_phone,.locats,.Detailed_address{
	display: flex;
	justify-content: space-between;
	padding: 15px;
	border-bottom: 1px solid #EAEAEA;
}
.Consignee_text,.tel_phone_text,.locats_text,.Detailed_address_text{
	flex:1;
}
.Consignee_input,.tel_phone_input,.locats_input,.Detailed_address_input{
	display: flex;
	flex:3;
}
.Detailed_address_textarea{
	width: 100%;
	height: 50px;
	resize: none;
    outline: none;
	border: 0;
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
