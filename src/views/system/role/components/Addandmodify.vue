<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      title="新增角色"
      width="30%"
      :before-close="handleClose"
    >
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm"
        status-icon
      >
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <div class="top">
          <el-form-item label="角色级别" prop="num">
            <el-input-number
              v-model="ruleForm.level"
              class="mx-4"
              :min="1"
              :max="10"
              controls-position="right"
            />
          </el-form-item>
          <el-form-item label="数据范围" prop="region">
            <el-select v-model="ruleForm.dataScope" placeholder="全部">
              <el-option label="全部" value="全部" />
              <el-option label="本级" value="本级" />
              <el-option label="自定义" value="自定义" @click="custom" />
            </el-select>
          </el-form-item>
        </div>
        <div class="box" v-show="full">
          <el-form-item label="数据权限" prop="multiple">
            <!-- <el-tree-select v-model="ruleForm.value" :data="list"  multiple  :render-after-expand="false"
            show-checkbox
          /> -->
            <!-- <el-tree-select
              v-model="ruleForm"
              :data="list"
              multiple
              :render-after-expand="false"
              :props="props"
              :load="loadNode"
              lazy
              show-checkbox
              @selection-change="handleSelectionChange"
            /> -->

          </el-form-item>
        </div>

        <el-form-item label="描述信息" prop="desc">
          <el-input v-model="ruleForm.description" type="textarea" />
        </el-form-item>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancel">取消</el-button>
          <el-button type="primary" @click="confirm"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, reactive, defineProps } from 'vue'
import { ElMessageBox } from 'element-plus'
import * as api from '@/api/api'
import type Node from 'element-plus/es/components/tree/src/model/node'
import * as TS from '@/utils/defind'
const emits = defineEmits()
const full = ref<boolean>(false)
const list = ref([])
const ruleForm = ref({
  name: '',
  level: '',
  dataScope: '',
  description: '',
})
const rules = reactive({
  name: [{ required: true, message: '请输入角色名称', trigger: 'blur' }]
})
const dialogVisible = ref(true)

const props = {
  label: 'label',
  children: 'zones',
  isLeaf: 'leaf'
}
const handleClose = (done: () => void) => {

}

const handleSelectionChange = () => {
  // console.log(value)
}

const cancel = () => {
  emits('cancel')
}

const confirm = async () => {
	let res= await api.rolesaddAPI(ruleForm.value)
  emits('confirm')
}
//数据范围接口
const custom = async () => {
  full.value = true

  let res = await api.deptAPI()
  console.log(res, 'sssss')
  list.value = res.data.content
}

const loadNode = async (node: Node, resolve: (data: TS.Tree[]) => void) => {
  if (node.data.id !== undefined) {
    console.log(node.data.id, 'idididi')

    let res = await api.deptidAPI({ pid: node.data.id })
    console.log(res, 'lazyAPI')
    const data: TS.Tree[] = res.data.content
    resolve(data)
  }
}
</script>

<style lang="scss" scoped>
.top {
  display: flex;
}
</style>
