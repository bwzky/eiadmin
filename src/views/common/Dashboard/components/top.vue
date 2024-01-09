<template>
	<div>
		<div class="top">
			<ul>
				<li>
					<div class="left">
						<span class="icon-yonghuming iconfont iconone"></span>
					</div>
					<div class="right">
						<span>New Visits</span>
						<h3>102，400</h3>
					</div>
				</li>
				<li>
					<div class="left">
						<span class="icon-xinxi iconfont icontow"></span>
					</div>
					<div class="right">
						<span>Messages</span>
						<h3>81,212</h3>
					</div>
				</li>
				<li>
					<div class="left">
						<span class="icon-qianqian- iconfont iconthree"></span>
					</div>
					<div class="right">
						<span>New Visits</span>
						<h3>102，400</h3>
					</div>
				</li>
				<li>
					<div class="left">
						<span class="icon-gouwuchefill iconfont iconfour"></span>
					</div>
					<div class="right">
						<span>Shoppings</span>
						<h3>13,600</h3>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.top {
	width: 100%;

	ul {
		display: flex;
		justify-content: space-between;

		li:hover .iconone {
			background-color: #40c9c6;
			border-radius: 5px;
			color: #fff !important;
		}

		li:hover .icontow {
			border-radius: 5px;
			background-color: #36a3f7;
			color: #fff !important;
		}

		li:hover .iconthree {
			border-radius: 5px;
			background-color: #f4516c;
			color: #fff !important;
		}

		li:hover .iconfour {
			border-radius: 5px;
			background-color: #34bfa3;
			color: #fff !important;
		}

		li {
			display: flex;
			justify-content: space-between;
			width: 23%;
			background-color: #fff;
			height: 100px;
			cursor: pointer;
			box-shadow: 0 0 5px #ccc;
			.left {
				// padding-left: 20px;
				width: 100px;
				line-height: 100px;
				text-align: center;

				.iconone {
					padding: 10px 10px;
					margin-top: 10px;
					font-size: 60px;
					color: #40c9c6;
				}

				.icontow {
					padding: 10px 10px;
					margin-top: 10px;
					font-size: 60px;
					color: #36a3f7;
				}

				.iconthree {
					padding: 10px 10px;
					margin-top: 10px;
					font-size: 60px;
					color: #f4516c;


				}

				.iconfour {
					padding: 10px 10px;
					margin-top: 10px;
					font-size: 60px;
					color: #53c9b1;
				}
			}

			.right {
				padding-right: 20px;
				margin-top: 20px;

				span {
					color: #8c8c8c;

				}

				h3 {
					margin-top: 5px;
					color: #666666;
				}
			}
		}
	}
}
</style>