<template>
	<div>
		<Top></Top>
		<List :tableData1="tableData1"></List>
	</div>
</template>

<script setup lang="ts">
import Top from '@/layout/components/TopButton/Button.vue'
import List from './components/List.vue'
import * as api from '@/api/api'
import { ref } from 'vue';
const inof=ref({
	page:0,
	size:0
})
const tableData1=ref([])
const getdeptsAPI=async()=>{
	let res=await api.deptsAPI({page:inof.value.page,size:inof.value.size})
	console.log(res,'getdeptsAPI');
	tableData1.value=res.data.content
}
getdeptsAPI()

</script>

<style lang="scss" scoped>

</style>