<template>
	<div>
		<div class="box">
		<div class="left">
			<search class="sear"></search>
			<LeftTee :text="text"></LeftTee>
		</div>
		<div class="rigth">
			<TopButton ></TopButton>
			<rigthList :list="list" @del="del"></rigthList>
		</div>
		</div>

	</div>
</template>

<script setup lang="ts">
import TopButton from '@/layout/components/TopButton/Button.vue'
import LeftTee from './components/LeftTee.vue'
import rigthList from './components/rigthList.vue'
import search from './components/search.vue'
import * as api from '@/api/api'
import { ref } from 'vue'
const text=ref([])
const list=ref([])
const inof=ref({
	page:0,
	size:10,
	blurry:'',
})



const getsortAPI=async()=>{
	let res=await api.sortAPI()
	console.log(res);
	text.value=res.data.content
}
getsortAPI()

const getusersAPI=async()=>{
	let res=await api.usersAPI(inof.value)
	console.log(res);
	list.value=res.data.content
}
getusersAPI()

const del=async(id:number)=>{
	let res=await api.usersdelAP([id])
	getusersAPI()
}

</script>

<style lang="scss" scoped>
.box{
display: flex;
justify-content: space-between;
	.left{
		width: 21%;
	}
	.rigth{
		width: 78%;
	}
}
.sear{
	margin-bottom: 25px;
}
</style>