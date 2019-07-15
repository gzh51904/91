<template>
	<div class="box">
		<div class="box1">
			<img :src="img.img1" @click="goof" />
			<h2>我的购物车</h2>
			<span  @click="whatshow">编辑</span>
		</div>
		<div class="box-btm"  v-for='item in tgh' :key="item.id">
			<div class="cell" >
				<div class="cell-info" :style="styleObject" @touchstart="handleTouchStart"
				 @touchmove="handleTouchMove" @touchend="handleTouchEnd"
				>
					<div class="cell-info-left">
						<input type="checkbox"
						 :checked="isSelectAll"
					 value="0" class="gouxuan" /></div>
					<div class="cell-info-right">
						<div class="title">
							<span class="season">{{item.vacation}}</span>
							<span class="course_subject">{{item.language}}</span>
							{{item.courseDesc}}
						</div>
						<p class="time">
							<img :src="img.img2" />
							{{item.timeremark}}
							</p>
						<div class="teacher-img">
							<div class="zhujiao">
								<img :src="item.imgtupian"  />
								<p class="teacher-name">{{item.teacherNames}}</p>
								<p class="zhutel">{{item.jibie}}</p>
							</div>
						</div>
						<div class="teach-money">
							<p class="teach-money-jiang">{{item.class}}</p>
							<p class="teach-money-mon">￥{{item.payable}}</p>
						</div>
					</div>
				</div>
				<div class="cell-delete"><span>删除</span></div>
			</div>
		</div>
		<div class="sum_money">
			<div class="sum_money_left">
				<div class="cart_checkout"  >
					<input type="checkbox" name="checkedAllDown" id="checkedAllDown"
					 @click="quanxuan=isSelectAll=!isSelectAll"/>
					<label for="checkedAllDown">全选</label>
				</div>
					<div class="price-sum">
						<div>
							<div v-if="toshow">
								<span class="txt">总计：</span>
								<span class="price sumPrice">
									<em>
										¥
										<i >{{zongjia}}</i>
									</em>
								</span>
							</div>
						
							<div v-else>
								
							</div>
						</div>
					</div>
			</div>
		   <div>
			    	<div class="sum_money_right"  v-if="toshow"><button 
					class="submit-btn" @click="settlement">结算</button></div>
				    <div class="sum_money_right"  v-else><button 
					class="submit-btn submit-delebtn" @click="delelement">删除</button></div>
		   </div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CellItem',
	data() {
		return {
			isSelectAll:false, 
			img: {
				img1: require('../assets/img/jaintouzuo.png'),
				img2: require('../assets/img/time.png.png'),
				img3: require('../assets/img/touxiang1.png')
			},
			startTx: 0, // 开始滑动的x值
			endTx: 0, // 滑动后的x值
			distanceX: 0, // 滑动距离，在touchmove中动态赋值为endTx - startTx
			startMarginLeft: 0, // 开始滑动时的margin-left值
			marginLeft: 0 ,// “信息详情”的margin-left
			tgh:[],
			zongjia:0,
			toshow:true,
			
		};
	},
	mounted(){
		 let {commit,state} = this.$store
			let {goodslist} = state;
			// console.log(goodslist[0]);
			this.tgh=goodslist;
			this.zongjia=0*1
			// console.log(this.tgh[0].payable);
			for(let i=0;i<goodslist.length;i++){
				// console.log(this.tgh[0].payable);
				this.zongjia+=goodslist[i].payable*1
				// console.log(this.zongjia);
				
// return this.zongjia;
			}


			
			
	},
	
	methods: {
		quanxuan(){
			// let res= this.isSelectAll
			// res=!res
		console.log(1);
		},
		goof() {
			this.$router.push('/mine');
		},
		handleTouchStart(e) {
			this.startTx = e.touches[0].clientX;
			this.startMarginLeft = this.marginLeft;
		},
		handleTouchMove(e) {
			this.endTx = e.changedTouches[0].clientX;
			this.distanceX = this.startTx - this.endTx; // 滑动距离
			this.marginLeft = this.startMarginLeft - this.distanceX; // “信息详情”的margin-left值
		},
		handleTouchEnd(e) {
			if (this.marginLeft > -30) {
				// margin-left大于-30px则收起
				this.marginLeft = 0;
			} else {
				this.marginLeft = -70; // 否则展开
			}
		},
		whatshow(){
			this.toshow=!this.toshow
		},
		settlement(){
			//结算
			//点击结算  先判断全选按钮是否选择   没有判断多选框是否选择 
			console.log('结算');
			
		},
		delelement(){
			//删除
			//点击删除  先判断全选按钮是否选择   没有判断多选框是否选择  
			// console.log('shangchu');
			
		}
	},
	computed: {
		// 用于实时更新“信息详情”的margin-left值
		styleObject: function() {
			return {
				marginLeft: this.marginLeft + 'px'
			};
		},
		resss(){
			return this.$store.state.goodslist.map((item,idx)=>{
				return {
					idx:dix+1,
					...item
				}
			})
			// this.tgh=this.$store.state.goodslist
			// console.log(this.tgh,'112');
			
		},
		to(){
			// console.log("00",this.resss);
			// 
		}
	},
	created(){
		// console.log( '250:',this.zongjia,);
		
	}
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	/* box-sizing: border-box; */
}
body,html{
	background: #ccc;
}
.box {
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
}
.box1 {
	display: flex;
	width: 100%;
	height: 50px;
	background: #faf5f5;
	z-index: 22;
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
	line-height: 50px;text-align: center;
	font-size: 18px;
	/* float: left; */
}
.box1 > img {
	width: 15px;
	height: 24px;
	/* float: left; */
	margin-top: 13px;
	margin-left: 10px;
}
.box1 > span {
	font-size: 16px;
	display: inline-block;
	line-height: 50px;
	height: 50px;
}
.box-btm {
	margin: 10px;
	border-radius: 20px;
	border: 1px solid #32cd32;
}
.cell {
	overflow: hidden;
	display: flex;
	width: 100%;
	height: 230px;
}
.cell-info {
	display: flex;
	width: 100%;
	flex-shrink: 0;
}
.cell-info-left {
	display: flex;
	flex: 1;
	/* border-right: 1px solid #32CD32; */
	justify-content: center;
	align-items: center;
}
.gouxuan {
	width: 20px;
	height: 20px;
	border:none;
}
.cell-info-right {
	flex: 6;
}
.title {
	font-weight: 600;
}
.season {
	line-height: 20px;
	margin-right: 4px;
	text-align: center;
	font-size: 16fpx;
	color: #fff;
	background: #32cd32;
	border-radius: 2px;
	padding: 3px;
	display: inline-block;
	vertical-align: middle;
}
.course_subject {
	line-height: 20px;
	margin-right: 4px;
	text-align: center;
	font-size: 16fpx;
	color: #32cd32;
	background: #fff;
	outline: none;
	border: 1px solid #32cd32;
	border-radius: 2px;
	padding: 3px;
	display: inline-block;
	vertical-align: middle;
}
.time {
	color: #999;
	height: 25px;
	font-size: 12px;
	line-height: 25px;
	background-size: 15px 15px;
	vertical-align:middle;
}
.time>img{
	display: inline-block;
	width:15px;
	height: 15px;
	vertical-align:middle;
}
.teacher-img {
	padding-top: 10px;
	width: 100%;
}
.zhujiao {
	width: 44px;
}
.zhujiao > img {
	display: block;
	width: 44px;
	height: 44px;
}
.zhujiao .teacher-name {
	margin-top: 2px;
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.zhujiao .zhutel {
	color: #979797;
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.teach-money {
	display: flex;
	justify-content: space-between;box-sizing: border-box;padding: 0px 10px 0 0;
	margin-top: 20px;
}
.teach-money-jiang {
	width: 50px;
	height: 20px;
	text-align: center;
	line-height: 20px;
	font-size: 12px;
	background: #f5f5f5;
	border-radius: 10px;
}
.teach-money-mon {
	color: red;
	font-size: 16px;
	font-weight: 700;
}
.cell-delete {
	display: flex;
	align-items: center;
	width: 70px;
	background-color: red;
}
.cell-delete > span {
	width: 0; /* 宽度为0 */
	font-size: 18px;
	white-space: nowrap;
	text-align: center;
	margin-left: 25%; /* 这里一定要用百分比，不然会撑出高度，无法完全缩放为0 */
}
.sum_money {
	background:#F5F5F5;
	position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
 	/* margin:5px; */
	display: flex;
	justify-content: space-between;
	
	/* cui 修改 */
	padding: 0 5px ;
	box-sizing: border-box;
	align-items: center;
	z-index: 999;
	height: 60px;
}
.sum_money_left{
	display: flex;
	flex: 2;
	padding:8px 0 0 5px;
}
.sum_money_right{
	flex: 1;

}
#checkedAllDown{
	width: 20px;
	height: 20px;
	margin-right:5px;
	margin-top:2px;
}
.price-sum{
	padding-top:5px;
}
.cart_checkout{
	margin-right:10px;
	box-sizing: border-box;
		display: flex;
	align-items: center;
	/* padding:5px 0 0 0; */
}
.submit-btn{
	width:80px;
	height:38px;
  text-align: center;
  line-height: 20px;
  padding: 10px;
	border:none;
  border-radius: 10px;
	background: linear-gradient(90deg,#ff8700,#ff4100);
}
.price {
	color: red;
}
.submit-delebtn{
	background:#fff;
}
</style>
