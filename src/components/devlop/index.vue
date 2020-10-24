<template>
	<div class="devlop">
		<div class="head">
			<div class="logo-item1">
				Microlnfinity
			</div>
			<div class="dev-logo2">
				<p>定制开发价值共享</p>
				<p>专业团队Saas模式开发，软件、硬件、系统集成一站式研发.</p>
			</div>
			<div class="dev-logo3">
				<img src="../../assets/images/a1.png">
			</div>
			<div class="logo-item4">
				software
			</div>
		</div>
		<div class="dev-mid">
			<div class="dev-mid-tit">
				<div>————</div>
				<div class="tit-text">智能软件定制开发</div>
				<div>————</div>
			</div>
			<p class="dev-mid-p">有完备的开发团队，超过10年的研发经验，可根据客户需求对系统随时快速的新增功能，修改需求，使软件产品最大限度的贴合当地的地方管理特色及地方管理要求。</p>
			<div class="dev-txtBox">
				<div class="box1" v-for="x in arr1">{{x}}</div>
			</div>
			<div class="dev-mid-tit">
				<div>————</div>
				<div class="tit-text">解决方案</div>
				<div>————</div>
			</div>
			<div class="dev-txtBox box2-wrap">
				<div class="box2" v-for="x in arr2">{{x}}</div>
			</div>
			<div class="dev-mid-tit">
				<div>————</div>
				<div class="tit-text">案例客户</div>
				<div>————</div>
			</div>
			<swiper :options="option" ref="swiper">
				<swiper-slide v-for="x in arr3" :key="x.path"><a :href="x.path"><img :src="x.name"></a></swiper-slide>
			</swiper>
		</div>
	</div>
</template>
<script>
	import Swiper from 'vue-awesome-swiper'
	import 'swiper/swiper-bundle.css'
	export default {
		data(){
			return{
				arr1:['专业架构','云部署','硬件定制','安全保障','万向接口'],
				arr2:['财务管理','财政管理','系统集成','教务管理','供热管理','集团管理'],
				arr3:[
					{name:require('../../assets/images/login2.jpg'),path:'https://by.mizfnk.com'},
					{name:require('../../assets/images/login1.jpg'),path:'https://mizfnk.com'},
					{name:require('../../assets/images/login3.jpg'),path:'https://lx.mizfnk.com'}
				],
				option:{
					// clickable:true,
					loop:false,
					direction:'horizontal',
					slidesPerView:3,
					centeredSlides: true, // 设定为true时，active slide会居中，而不是默认状态下的居左。
					spaceBetween: 20, // 在slide之间设置距离（单位px）。
					initialSlide:1,//默认第二张
				}
			}
		},
	}
</script>
<style scoped>
	.devlop .head{
		height:700px;
		background:#FFEB3B;
	}
	.dev-logo2{
		position: absolute;
		right: 15%;
		top:250px;
		text-align: right;
		font-weight: bold;
	}
	.dev-logo2>p:nth-child(1){
		font-size: 60px;
	}
	.dev-logo2>p:nth-child(2){
		font-size: 20px;
	}
	.dev-logo3{
		width:350px;
		height:350px;
		position: absolute;
		top: 260px;
		left: 370px;
	}
	.dev-logo3>img{
		width: 100%;
		height:100%;
	}
	.dev-mid{
		background: #ececec;
	}
	.dev-mid-p{
		width: 54%;
		margin: auto;
		margin-bottom: 70px;
	}
	.dev-txtBox{
		width: 54%;
		margin: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.box1{
		width: 120px;
		height: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 20px;
		border: 1px solid #dcdcdc;
		border-radius: 3px;
		cursor: pointer;
	}
	.box1:hover{
		color: #FFEB3B;
		border: 1px solid #FFEB3B;
	}
	.box2-wrap{
		flex-flow: wrap row;
	}
	.box2{
		/* width: 200px; */
		height: 90px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 20px;
		background: #dddddd;
		margin: 20px 0;
		flex: 0 0 26%;
	}
	.box2:hover{
		background: #FFEB3B;
		cursor: pointer;
	}
	.swiper-container{
		width: 54%;
		height:173px;
		padding: 40px 0;
	}
	.swiper-slide{
		width: 30% !important;
		height: 100%;
	}
	.swiper-wrapper {
		margin-top: 30px;
	}
	.swiper-slide img{
		width: 100%;
		height: 100%;
	}
	.swiper-slide-active{
		width: 356px !important;
		height: 200px;
		margin-top: -15px;
	}
</style>