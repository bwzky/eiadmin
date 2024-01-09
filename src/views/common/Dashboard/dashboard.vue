<template>
	<div>
		<div class="tubiao">
      <span class="icon-icon_github iconfont dong"></span>
		</div>
		<Top></Top>
		<div class="middle">
			<middle></middle>
		</div>

		<div class="bottom">
			<div class="box">
				<hexagon></hexagon>
			</div>
			<div class="box">
				<sector></sector>
			</div>
			<div class="box">
				<columnar></columnar>
			</div>
		</div>
	</div>
</template>

<script setup>
import { UserFilled, ChatDotSquare } from '@element-plus/icons-vue'
import middle from "./components/middle";
import hexagon from "./components/hexagon";
import sector from "./components/sector";
import columnar from "./components/columnar";
import Top from './components/top'


</script>


<style lang="scss" scoped>
.tubiao {
	border-style: solid;
	border-width: 0px 0px 70px 70px;
	border-color: transparent transparent #40c9c6 transparent;
	width: 0px;
	height: 0px;
	transform: rotate(-91deg);
	position: absolute;
	right: 3px;
	top: 59px;
	.dong {
		position: absolute;
		font-size: 40px;
		top: 24px;
		right: 4px;
		color: #fff;
		transform: rotate(138deg);
	}
}

.bottom {
	width: 100%;
	height: 300px;
	// border: 1px solid #000;
	margin-top: 30px;
	display: flex;
	justify-content: space-between;

	.box {
		width: 32%;
		// border: 1px solid #000;
		background-color: #fff;
	}
}



.middle {
	background-color: #fff;
	width: 100%;
	height: 350px;
	margin-top: 30px;
}</style>
