<template>
	<div>
		<Top @add="add" @sear="sear" @outExcel="outExcel" :list="list"></Top>
		<div class="centre">
			<ListRol class="Listleft" :list="list" @del="del"></ListRol>
			<Rigth class="Rigth" :text="text"></Rigth>

		</div>
		<Addandmodify v-if="dialogVisible" @confirm="confirm" @cancel="cancel" ></Addandmodify>


	</div>
</template>

<script setup lang="ts">
import Rigth from './components/Rigth.vue'
import Top from '@/layout/components/TopButton/Button.vue'
import * as api from '@/api/api'
import ListRol from './components/ListRol.vue'
import { ref } from 'vue'
import * as TS from '@/utils/defind'
import Addandmodify from './components/Addandmodify.vue'
import {xlsx} from '@/utils/xlsx'
const inof=ref({
	page:0,
	size:10,
	sort:'level%2Casc',
	blurry:''
})
const dialogVisible=ref<boolean>(false)
const pida=ref({
  pid:0
})
const text=ref([])
const list=ref([])

const sear=(formInline:{user:string})=>{
	console.log(formInline);
	inof.value.blurry=formInline.user

	getrolesAPI()
}

const listHander = {
		name:'名称',
		dataScope:'数据权限',
		level:'角色级别',
		description:'描述',
		updateTime:'日期'
}
// 导出
const outExcel = () => {

  xlsx(list.value,listHander, '角色管理')
	getrolesAPI()
}



const getrolesAPI=async()=>{
	let res=await api.rolesAPI({page:inof.value.page,size:inof.value.size,sort:inof.value.sort,blurry:inof.value.blurry})
	list.value=res.data.content
}
getrolesAPI()

const getlazyAPI=async()=>{
	let res=await api.lazyAPI(pida.value)
	// console.log(res,'lazyAPI');
	text.value=res.data
}
getlazyAPI()

const add=()=>{
	dialogVisible.value=true
}
const del= async (id:number)=>{
	console.log(id);
	let res=api.roledelAP([id])
	getrolesAPI()
}

const confirm=()=>{
	dialogVisible.value=false
	getrolesAPI()
}
const cancel=()=>{

	dialogVisible.value=false

}
</script>

<style lang="scss" scoped>
.centre{
	margin-top: 30px;
	display: flex;
	justify-content: space-between;
	.Listleft{
		width: 69%;
	}
	.Rigth{
		width: 30%;
	}
}
.box{
	height: 30px;
	width: 100%;
	background-color: red;
}
</style>