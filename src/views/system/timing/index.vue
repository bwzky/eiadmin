<template>
	<div>
		<div class="top">
			<top></top>
		</div>
		<div class="list">
			<el-table
    ref="multipleTableRef"
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column property="id" label="任务ID" width="120"></el-table-column>
    <el-table-column property="jobName" label="任务名称" width="120" />
    <el-table-column property="beanName" label="Bean名称" />
    <el-table-column property="methodName" label="执行方法" />
    <el-table-column property="params" label="参数" />
    <el-table-column property="cronExpression" label="cron表达式" />
    <el-table-column label="状态" >
			<template #default="scope">

			</template>
		</el-table-column>
    <el-table-column property="description" label="描述" />
    <el-table-column property="createTime" label="创建如期" />
    <el-table-column label="操作">
			<template #default="scope">

			</template>
		</el-table-column>
  </el-table>
		</div>

	</div>
</template>

<script setup lang="ts">
import top from '@/layout/components/TopButton/Button.vue'
import { ref } from 'vue';
import * as api from '@/api/api'
const tableData=ref([])
const inof=({
	page:1,
	size:10,
})
const handleSelectionChange=()=>{

}

const getjobsAPI=async()=>{
 	let res= await api.jobsAPI({page:inof.page,size:inof.size})
	console.log(res,'jbds');
	tableData.value=res.data.content

}
getjobsAPI()

</script>

<style lang="scss" scoped>

</style>