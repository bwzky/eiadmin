<template>
	<div>
		<el-table
    ref="multipleTableRef"
    :data="list"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column property="username" label="用户名"  />
    <el-table-column property="nickName" label="昵称"/>
    <el-table-column property="gender" label="性别"/>
    <el-table-column property="phone" label="电话"/>
    <el-table-column property="email" label="邮箱"/>
    <el-table-column property="dept.name" label="部门"/>
		<el-table-column label="状态" >
			<template #default="scope">
				<el-switch v-model="scope.row.enabled" />
      </template>
		</el-table-column>
    <el-table-column property="createTime" label="创建时间"/>
		<el-table-column fixed="right" width="150" label="操作" >
			<template #default="scope">
				<el-button type="primary" :icon="ElementPlusIconsVue.Edit"  />
    	<el-popconfirm title="确定要删除嘛" confirm-button-text="确定" cancel-button-text="取消" @confirm="del(scope.row.id)">
              <template #reference>
                <el-button
                  type="danger"
                  :icon="ElementPlusIconsVue.Delete"
                />
              </template>
            </el-popconfirm>
      </template>

    </el-table-column>
  </el-table>
	</div>
</template>

<script setup lang="ts">
import { ref,defineProps,defineEmits } from 'vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const emits=defineEmits()
const props=defineProps({
	list:{
		type:Array
	}
})
const tableData=ref({

})
const handleSelectionChange=()=>{

}
const del=(id:number)=>{
	emits('del',id)
}
</script>

<style lang="scss" scoped>

</style>