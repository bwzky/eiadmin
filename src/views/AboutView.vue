<template>
	<div>
		{{ useinfo.name }}--{{ useinfo.age }}
		<p>{{ useinfo.newName }}</p>

		<button @click="bian">变变变</button>
		<button @click="reot">$reset</button>
	</div>
</template>

<script setup lang="ts">
import {useInfoStore} from '../store/index'
import {storeToRefs} from 'pinia'
const useinfo=useInfoStore()

// let {name,age}=storeToRefs(useinfo())
const reot=()=>{
	useinfo.$reset()
}
const bian=()=>{
	useinfo.$patch({
		name:'1111',
		age:222
	})
}
</script>

<style lang="scss" scoped>

</style>