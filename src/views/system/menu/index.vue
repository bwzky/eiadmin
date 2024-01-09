<template>
	<div>
		<Top></Top>
		<List></List>

	</div>
</template>

<script lang="ts" setup>
import {menu} from '@/hooks/menu.ts'
import Top from '@/layout/components/TopButton/Button.vue'
import List from './components/List.vue'
  const { }=menu()
</script>

<style lang="scss" scoped>

</style>