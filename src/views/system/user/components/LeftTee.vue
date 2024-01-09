<template>
  <div>
    <el-tree
      :props="props"
			:data="text"
      :load="loadNode"
      lazy
    />
  </div>
</template>

<script setup lang="ts">
import type Node from 'element-plus/es/components/tree/src/model/node'
import { ref,defineProps } from 'vue';
import * as api from '@/api/api'
import * as TS from '@/utils/defind'
const prop=defineProps({
	text:{
		type:Array
	}
})

const props = {
  label: 'name',
  children: 'zones',
}

const loadNode = async (node: Node, resolve: (data: TS.Tree[]) => void) => {
  if (node.data.id !== undefined) {
		console.log(node.data.id,'idididi');

		let res = await api.descAPI({pid:node.data.id})
			console.log(res,'lazyAPI');
			const data:TS.Tree[]=res.data.content
			resolve(data)
  }
}

</script>

<style lang="scss" scoped></style>
