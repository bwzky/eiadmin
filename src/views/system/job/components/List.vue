<template>
	<div>
		<el-table
    ref="multipleTableRef"
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
		<el-table-column type="selection" width="55" />
    <el-table-column property="name" label="名称" width="320"></el-table-column>
    <el-table-column property="jobSort" label="排序" width="220" />
    <el-table-column label="状态">
			<template #default="scope">
				<el-switch
  			  v-model="scope.row.enabled"
  			  class="ml-2"
  			  style="--el-switch-off-color: #ff4949"
  			/>
			</template>
		</el-table-column>
    <el-table-column property="createTime" label="创建日期" width="120" />
		<el-table-column label="操作">
			<template #default="scope">
				<el-button type="primary" :icon="EditPen"></el-button>
						<el-button type="danger" :icon="Delete"></el-button>
			</template>
		</el-table-column>
  </el-table>
	</div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import {  Delete, EditPen } from "@element-plus/icons-vue"
const props=defineProps({
	tableData:{
		type:Array
	}
})
const handleSelectionChange=()=>{

}
</script>

<style lang="scss" scoped>

</style>