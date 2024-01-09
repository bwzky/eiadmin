<template>
	<div>
		<el-table
      :data="tableData1"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
			@selection-change="handleSelectionChange"
    >
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="deptSort" label="排序" />
      <el-table-column label="状态">
				<template #default="scope">
					<el-switch v-model="scope.row.leaf" />
      </template>
			</el-table-column>
			<el-table-column label="操作">
				<template #default="scope">

      </template>
			</el-table-column>
    </el-table>
	</div>
</template>

<script setup lang="ts">
import {ref,defineProps} from 'vue'
const props=defineProps({
	tableData1:{
		type:Array
	}
})
const handleSelectionChange=()=>{

}
</script>

<style lang="scss" scoped>

</style>