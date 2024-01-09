<template>
<div>
	<el-container>
      <el-aside width="200px">
				<div class="top">
					<h4>ELADMIN-后台管理</h4>
				</div>
				<Left></Left>
			</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
					<router-view></router-view>
				</el-main>
      </el-container>
    </el-container>
</div>
</template>
<script setup lang='ts'>
import {useInfoStore} from '../store'
import Left from './components/Left.vue'
const useinfo=useInfoStore()
</script>
<style lang='scss' scoped>
.el-aside{
	height: 100vh;
	background-color: #304156;

}
.top{
	height: 50px;
	line-height: 50px;
	text-align: center;
}
.el-header{
	background-color: #52b0f7;
}

.el-main{
	height:calc(100vh - 60px) ;
}
</style>