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
    >
      <el-table-column prop="title" label="菜单标题" />
      <el-table-column prop="name" label="图标" />
      <el-table-column prop="menuSort" label="排序" />
      <el-table-column prop="" label="权限标识" />
      <el-table-column prop="path" label="组件路径" />
      <el-table-column  label="外链" >
				<template #default="scope">

      </template>
			</el-table-column>
      <el-table-column  label="缓存" >
				<template #default="scope">

				</template>
			</el-table-column>
      <el-table-column label="可见" >
				<template #default="scope">

			</template>
			</el-table-column>
      <el-table-column prop="createTime" label="创建日期" />
      <el-table-column  label="操作" >
				<template #default="scope">
            <el-button type="primary" :icon="ElementPlusIconsVue.Edit" />
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

<script lang="ts" setup>
import {menu} from '@/hooks/menu.ts';
import { ref } from 'vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const { menusAPI,tableData1,del,load }=menu()
menusAPI()
</script>

<style lang="scss" scoped>

</style>