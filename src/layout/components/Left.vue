<template>
	<div>

		<el-menu
				active-text-color="#409eff"
        background-color="#304156"
        class="el-menu-vertical-demo"
        default-active="2"
				:unique-opened="true"
        text-color="#fff"
				router>
				<el-menu-item index="/dashboard">
          <el-icon><setting /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-sub-menu :index="item.path" v-for="item,index in list">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ item.name }}</span>
          </template>
					<el-menu-item :index="item.path+'/'+i.path" v-for="i,o in item.children">
          <el-icon><setting /></el-icon>
          <span>{{ i.meta.title }}</span>
        </el-menu-item>
        </el-sub-menu>
      </el-menu>
	</div>
</template>

<script setup lang="ts">
import * as api from '@/api/api'
import {ref} from 'vue'
const list =ref ([])
const buildapi= async ()=>{
	 let res= await api.buildAPI()
	 // @ts-ignore
	 list.value=res.data
}
buildapi()

</script>

<style lang="scss" scoped>
.el-menu{
	height: 100%;

}
</style>