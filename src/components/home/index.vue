<template>
	<div class="home">
		<div class="head">
			<div class="mask"></div>
			<div class="logo-item1">
				Microlnfinity
			</div>
			<div class="logo-item2">
				费而隐
			</div>
			<div class="logo-item3">
				“君子之道费而隐”出自《中庸》，全文主要讲述的是:道也者，不可须曳高也，可莴非道也”进行阐发，正因为道不可须臾离开，所以，道就应该有普遍的可适应性应该“放乏四海而皆准"的原理，发人深省。
			</div>
			<div class="logo-item4">
				software
			</div>
		</div>
		<div class="mid">
			<div class="mid-head">
				<div class="mid-head-item" v-for="x in midHead">{{x}}</div>
			</div>
			<div class="mid-title">
				<p>我们的合作伙伴</p>
				<p>信赖，让我们的业务遍布全球</p>
			</div>
			<div class="img-wrap">
				<div class="img" v-for="x in imgs">
					<img :src="x">
				</div>
			</div>
			<div class="img-wrap">
				<div class="big-img" v-for="x in bigImgs">
					<img :src="x">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		components:{
			// Menu
		},
		data(){
			return{
				
				midHead:['预算绩效管理系统','国库账户管理系统','银企互联管理系统','大数据分析','管理系统定向开发'],
				imgs:[require('../../assets/images/logo.jpg'),require('../../assets/images/b7.png'),require('../../assets/images/b2.png'),
				require('../../assets/images/a3.png'),require('../../assets/images/b1.png'),require('../../assets/images/b3.png'),
				require('../../assets/images/a4.jpg'),require('../../assets/images/a5.png'),require('../../assets/images/a2.png')],
				bigImgs:[require('../../assets/images/a6.png'),require('../../assets/images/b6.jpg'),require('../../assets/images/b8.png'),require('../../assets/images/b5.png'),require('../../assets/images/b9.png'),require('../../assets/images/b4.png')],
			}
		}
	}
</script>
<style>
	.home .head{
		height:1000px;
		background-image: url(../../assets/images/head1.jpg);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.logo-item1{
		position: absolute;
		right:15%;
		top:50px;
		font-size: 130px;
		color:rgba(255,255,255,.5);
		z-index: 99;
	}
	.logo-item2{
		position: absolute;
		right: 15%;
		top:230px;
		color:#fff;
		font-size: 110px;
		font-weight: bold;
		z-index: 99;
	}
	.logo-item3{
		position: absolute;
		right: 15%;
		top:410px;
		width: 730px;
		font-size: 18px;
		color:#FFFFFF;
		z-index: 99;
	}
	.logo-item4{
		position: absolute;
		top:500px;
		right:28%;
		font-size: 130px;
		color: rgba(255,255,255,.5);
		z-index: 99;
	}
	.mid{
		margin-top: -300px;
		background: #ececec;
	}
	.mid-head{
		width: 54%;
		margin:auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.mid-head-item{
		width: 99px;
		text-align: center;
		font-size: 20px;
		background: #e2e2e2;
		padding: 20px;
		font-weight: bold;
		cursor:pointer;
	}
	.mid-head-item:hover{
		background:#FFEB3B
	}
	.mid-title{
		margin-top: 80px;
		text-align: right;
		margin-right: 20%;
	}
	.mid-title>p:nth-child(1){
		font-size: 20px;
		font-weight: bold;
	}
	.mid-title>p:nth-child(2){
		font-size: 18px;;
	}
	.img-wrap{
		width: 54%;
		margin: auto;
		margin-top: 80px;
		display:flex;
		justify-content: space-between;
		align-items: center;
		flex-flow:wrap row;
	}
	.img{
		width: 300px;
		height: 100px;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 10px 0;
		
	}
	.img-wrap>.img:nth-child(1)>img{
		width: 80%;
		height: 70%;
	}
	.img-wrap>.img:nth-child(2)>img{
		width: 80%;
		height: 54%;
	}
	.img-wrap>.img:nth-child(3)>img{
		width: 80%;
		height: 50%;
	}
	.img-wrap>.img:nth-child(4)>img{
		width: 80%;
		height: 52%;
	}
	.img-wrap>.img:nth-child(5)>img{
		width: 80%;
		height: 64%;
	}
	.img-wrap>.img:nth-child(6)>img{
		width: 80%;
		height: 90%;
	}
	.img-wrap>.img:nth-child(7)>img{
		width: 60%;
		height: 100%;
	}
	.img-wrap>.img:nth-child(8)>img{
		width: 70%;
		height: 70%;
	}
	.img-wrap>.img:nth-child(9)>img{
		width: 70%;
		height: 70%;
	}
	.img-wrap:last-of-type{
		margin-top:20px;
		padding-bottom: 80px;
	}
	.big-img{
		width: 480px;
		height:100px;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 10px 0;
		overflow: hidden;
	}
	.dev-mid-tit{
		width: 26%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 40px 0;
	}
	.tit-text{
		text-align: center;
		font-size: 20px;
		font-weight: bold;
	}
</style>