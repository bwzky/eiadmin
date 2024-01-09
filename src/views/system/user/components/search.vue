<template>
  <div>
    <el-input
      v-model="input2"
      class="w-50 m-2"
      placeholder="请输入部门名称搜索"
      :prefix-icon="Search"
    />
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
const input2 = ref('')
</script>

<style lang="scss" scoped></style>
