<template>
	<div class="about">
		<div class="header">
			<div class="mask mask-two"></div>
			<div class="form">
				<p>联系我们</p>
				<p>相信我们一直是您想要的伙伴</p>
				<div class="form-wrap">
					<div class="form-item">
						<div class="tit">姓名</div>
						<input type="text" v-model="name" />
					</div>
					<div class="form-item">
						<div class="tit">邮箱</div>
						<input type="text" v-model="email" />
					</div>
					<div class="form-item">
						<div class="tit">电话</div>
						<input type="text" v-model="phone" />
					</div>
					<div class="form-item big-inp-wrap">
						<div class="tit">内容</div>
						<textarea rows="10" class="big-inp" v-model="content" />
					</div>
					<div class="btn-wrap">
						<div class="btn">提交</div>
					</div>
				</div>
			</div>
		</div>
		<div class="about-mid">
			<div class="ab-mid-tit">
				<div>————</div>
				<div class="tit-text">企业概况</div>
				<div>————</div>
			</div>
			<div class="ab-box">
				<div class="img-wrap">
					<img src="../../assets/images/b.jpg">
				</div>
				<p>甘肃费而隐软件有限公司成立于2000年，是甘肃新中大软件有限公司的全资子公司，公司以软件产品研发为主，自成立以来完成了白银公司银企互联系统、庆阳市非税收入管理系统银行及银联互通对接项目、集中供热管理系统、政府内控综合管理系统及预算绩效评价子系统、部门预算管理系统、国库账户管理系统等相关财政一体化管理系统。</p>
			</div>
			<div class="ab-mid-tit">
				<div>————</div>
				<div class="tit-text">ISO认证</div>
				<div>————</div>
			</div>
			<div class="ab-box box1">
				<div class="img-ios-wrap">
					<img src="../../assets/images/c2.png">
				</div>
				<div class="img-ios-wrap">
					<img src="../../assets/images/c1.png">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				name:'',
				email:'',
				phone:'',
				content:''
			}
		}
	}
</script>
<style scoped>
	.header{
		height: 820px;
		background-image: url('../../assets/images/head2.jpg');
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	.mask-two{
		background: rgba(68,138,202,.65);
	}
	.form{
		position: absolute;
		top: 200px;
		right: 15%;
		color: #fff;
		font-weight: bold;
		z-index: 99;
	}
	.form>p{
		text-align: right;
		font-size: 18px;
	}
	.form>p:nth-child(1){
		font-size: 36px;
	}
	.form-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 20px 0;
		width: 350px;
	}
	.tit{
		font-size: 18px;
		font-weight: bold;
	}
	input{
		width: 270px;
		height: 30px;
		border: 1px solid #FFFFFF;
		border-radius: 3px;
		background: rgba(255,255,255,0);
		-webkit-text-fill-color:#fff;
		caret-color:cyan;
	}
	.big-inp-wrap{
		align-items: flex-start;
	}
	.big-inp{
		width: 270px;
		/* height: 100px; */
		border: 1px solid #FFFFFF;
		border-radius: 3px;
		background: rgba(255,255,255,0);
		-webkit-text-fill-color:#fff;
		caret-color:cyan;
		resize: none;
	}
	.big-inp:focus{
		outline: medium;
		border-color:#AFECAB;
	}
	input:focus{
		outline: medium;
		border-color:#AFECAB;
	}
	.btn-wrap{
		text-align: right;
	}
	.btn{
		padding: 10px 20px;
		display: inline-block;
		background: #FFEB3C;
		color: #333;
		border-radius: 3px;
		cursor: pointer;
		font-size: 16px;
		font-weight: 400;
	}
	.about-mid{
		margin-top: -120px;
		background: #FFF;
	}
	.ab-mid-tit{
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
	.ab-box{
		width: 60%;
		margin: auto;
		display: flex;
		justify-content: space-between;
	}
	.img-wrap{
		width: 300px;
		height: 200px;
	}
	.ab-box>p{
		width: 43%;
		position: relative;
		top: 15px;
		left: -100px;
	}
	img{
		width: 100%;
		height: 100%;
	}
	.img-ios-wrap{
		width: 350px;
		height: 500px;
	}
	.box1{
		width: 40%;
		justify-content: space-around;
		padding-bottom: 80px;
	}
</style>