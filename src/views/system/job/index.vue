<template>
	<div>
		<top></top>
		<List :tableData="tableData"></List>
	</div>
</template>

<script lang="ts" setup>
import top from '@/layout/components/TopButton/Button.vue'
import List from './components/List.vue'
import * as api from '@/api/api'
import {ref} from 'vue'

const tableData=ref([])

const inof=ref({
	page:0,
	size:10,
})

const getjobAPI=async()=>{
 	let res= await api.jobAPI({page:inof.value.page,size:inof.value.size})
	console.log(res,'jbds');
	tableData.value=res.data.content

}
getjobAPI()
</script>

<style lang="scss" scoped>

</style>