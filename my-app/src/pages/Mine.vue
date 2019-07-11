<template>
    <div>
       <div class="person">
       	<div class="flex-container">
       		<div class="flex-item">{{ title }}</div>
       	</div>
       	<div class="personal">
       		<div class="personalInfo">
       			<img class="per_img" src="../assets/img/image_photo.png" alt="">
       			<div class="per_rig">
       				<div class="per_rig_top">
       					<div class="per_rig_top_l">
       						<span class="chenghao_name">用户称号</span>
       						<span class="nickName">沉睡的种子</span>
       					</div>
       					<a><i class="el-icon-arrow-right"></i></a>
       				</div>
       				<div class="per_rig_bt">
       					<div class="glod_num">
       						<img src="../assets/img/gold.png" alt="">
       						<span>0</span>
       					</div>
       					<div class="grow_num">
       						<img src="../assets/img/study_image.png" alt="">
       						<span>0</span>
       					</div>
       				</div>
       			</div>
       		</div>
       		<div class="tab">
       			<a><img src="../assets/img/dingdan.png" alt="">我的订单</a>
       			<a><img src="../assets/img/image_youhui.png" alt="">优惠券</a>
       			<a><img src="../assets/img/image_money.png" alt="">我的余额</a>
       			<a><img src="../assets/img/image_favorite.png" alt="">收藏中心</a>
       		</div>
       	<div class="nav">
       		<div class="navlist">
       			<a href="">
       				<p>
       					<i class="el-icon-shopping-cart-2"></i>
       					<span>购物车</span>
       				</p>
       				<i class="el-icon-arrow-right"></i>
       			</a>
       			<a href="">
       				<p>
       					<i class="el-icon-location-information"></i>
       					<span>地址管理</span>
       				</p>
       				<i class="el-icon-arrow-right"></i>
       			</a>
       			<a class="about" href="">
       				<p>
       					<i class="el-icon-question"></i>
       					<span>关于</span>
       				</p>
       				<i class="el-icon-arrow-right"></i>
       			</a>
       		</div>
       		<div class="logOut">
       			退出登录
       		</div>
       	</div>
       	</div>
       </div>
	   <!-- <template>
		   <div>
			   我的
		   </div>
	   </template> -->
    </div>
</template>

<script>
export default {
	name: 'Personal',
	data() {
		return {
			title: '个人中心'
		};
	}

}
</script>

<style>
	
	*{
		box-sizing: border-box;
		margin:0;
		padding:0;
	}
	/* html, body{height: 100%; } */
	a{
		text-decoration: none;
		color: #666;
	}
	.person{
		display:flex;
		flex-direction: column;
		height: 100%;
		width:100%;
	}
	.flex-container {
		display: flex;
		width: 100%;
		height: 44px;
	}
	.flex-item {
		margin: auto;
		font-weight: 600;
	}
	.personal{
		display: flex;
		flex-direction: column;
		margin-top:20px;
	}
	.personalInfo{
			display: flex;
		    height:60px;
		    padding: 0 10px 0 30px;
			margin-top: .16rem;
	}
	.per_img{
		display:inline-block;
		width: 60px;
		height: 60px;
		margin-right:5px;
	}
	.per_rig{
		flex-direction: column;
		justify-content: center;
		flex:1;
		display: flex;
	}
	.per_rig_top{
		display: flex;
	}
	.per_rig_top_l{
		display: flex;
		flex:1
	}
	.chenghao_name{
		display:flex;
		width: 64px;
		height: 20px;
		align-items: center;
		margin-right: 2px;
		justify-content: center;
		font-weight:700 ;
	}
	.nickName{
		display: flex;
		width: 76px;
		height: 20px;
		border-radius: 10px;
		font-size: 12px;
		align-items: center;
		align-items: center;
		justify-content: center;
		background:limegreen;
		color: #fff;
	}
	.per_rig_bt{
		display: flex;
		height: 17px;
		margin-top: 5px;
	}
	.glod_num{
		margin-right: 10px;
	}
	.per_rig_bt img{
		display:inline-block;
		width: 16px;
		height: 16px;
		vertical-align: middle
	}
	.per_rig_bt span{
		display:inline-block;
		width:16px;
		height:17px;
		text-align:center;
		line-height:17px;
		font-size:12px;
		vertical-align: middle
	}
	.tab{
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin-top:10px;
	}
	.tab a{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		font-size: 14px;
	}
	.tab a img{
		display: inline-block;
		border:0 none;
		width: 25px;
		height: 25px;
	}
	.nav{
		/* display: flex; */
		background:#ccc;
		padding:10px;
	}
	.navlist{
		display: flex;
		flex-direction:column;
		margin-bottom:10px;
	}
	.navlist>a{
		display: flex;
		cursor: pointer;
		text-decoration:none;
		justify-content:space-between;
		align-items: center;
		padding: 0 0 0 10px;
		height: 55px;
		background: #fff;
		border-radius: 10px;
	}
	.about{
		margin-top: 10px;
	}
	.logOut{
		width: 94%;
	  height: 55px;
	  line-height: 55px;
	  text-align: center;
	  margin: 0 auto;
	  color: #75c82bff;
	  font-size: 20px;
	  position: absolute;
	  bottom:65px;
		border-radius: 10px;
		background:#ccc;
	}

</style>
