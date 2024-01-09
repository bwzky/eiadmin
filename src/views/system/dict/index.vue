<template>
<top></top>
  <div class="box">
    <section>
			<el-table ref="multipleTableRef" :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="55" />
        <el-table-column property="name" label="名称"  />
        <el-table-column property="description" label="描述"/>
        <el-table-column label="操作" width="200" fixed="right">
					<template #default="scope">
						<el-button type="primary" :icon="EditPen"></el-button>
						<el-button type="danger" disabled :icon="Delete"></el-button>
					</template>
				</el-table-column>
      </el-table>
			<br>
			<el-pagination
      v-model:current-page="from.page"
      v-model:page-size="from.size"
      :page-sizes="[10, 20, 30, 40]"
      layout="total, prev, pager, next,sizes"
      :total="totalElements"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    </section>

    <div class="dict-detail">
			<div class="top">
				字典详情
			</div>
			<div class="detail">
				<p>
					点击字典查看详情
				</p>
			</div>
		</div>
  </div>
</template>

<script setup lang="ts">
import top from '@/layout/components/TopButton/Button.vue'
import {ref,reactive} from 'vue'
import * as TS from '@/utils/defind'
import * as api from '@/api/api'
import { Search, RefreshLeft, Plus, Delete, EditPen, Download } from "@element-plus/icons-vue"
const from = reactive<TS.users>({
  page: 0,
  size: 10
})
const tableData=ref([])
let totalElements=ref(0)
const dictRender = async () => {
  let res = await api.dictAPI({page:from.page,size:from.size})
  console.log(res)
	tableData.value=res.data.content
	totalElements.value=res.data.totalElements
}
const handleSizeChange=()=>{

}
const handleCurrentChange=()=>{

}
dictRender()
</script>

<style lang="scss" scoped>
.box{
	display: flex;
	justify-content: space-between;
}
section {
  width: 48%;
  box-shadow: 0 0 10px #eee;
  padding: 20px;


  .btns {
    margin: 20px 0;
  }
}
.dict-detail{
	width: 48%;
  box-shadow: 0 0 10px #eee;
	>.top{
		border-bottom: 1px solid #eee;
		padding: 20px 0;
		text-indent: 20px;
		font-size: 20px;
	}
	.detail{
		padding: 20px;
		>p{
			display: inline-block;
			border-left: 5px solid #ccc;
			padding: 15px;
		}
	}
}
</style>