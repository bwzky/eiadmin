<template>
  <div class="par">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      class="demo-ruleForm"
      status-icon
    >
      <h3>ELADMIN 后台管理系统</h3>
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username" placeholder="用户名" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" placeholder="密码" type="password" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input
          v-model="ruleForm.code"
          style="width: 150px"
          placeholder="验证码"
        />
        <el-image :src="ruleForm.url"></el-image>
      </el-form-item>
      <el-form-item prop="type">
        <el-checkbox v-model="ruleForm.remberMe" label="记住我" name="type" />
      </el-form-item>
      <el-form-item>
        <el-button style="width: 100%" type="primary" @click="submitForm(ruleFormRef)"> 登录 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import * as API from '@/api/api'
import * as TS from '@/utils/defind'
import { ref, reactive } from 'vue'
import {encrypt} from '@/utils/rsaRncrypt'
import type { FormInstance, FormRules } from 'element-plus'
import {setToken} from '@/utils/auth'
import { ElNotification } from 'element-plus'
import { useRouter } from 'vue-router'
const router=useRouter()
const ruleForm = reactive<TS.ReuleForm>({
  username: 'admin',
  password: '123456',
  code: '',
  uuid: '',
  url: '',
  remberMe: false
})
const ruleFormRef = ref<FormInstance>()
const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
  remberMe: [{ required: true, message: '请勾选协议', trigger: 'blur' }]
})

const getCode = async () => {
  let res = await API.codeApi()
  console.log(res, 'res')
  ruleForm.url = res.data.img
  ruleForm.uuid = res.data.uuid
}
getCode()

const submitForm=async (formEl: FormInstance | undefined)=>{
	ruleForm.password=encrypt(ruleForm.password)
	if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
			const {username,password,code,uuid}=ruleForm
			API.loginAPI({username,password,code,uuid}).then(res=>{
				console.log(res);
				setToken(res.data.token)
				ElNotification({
  				  title: '登录成功',
  				  message: '你登录成功了栓Q',
  				  type: 'success',
  				})
					router.push('/')
			})
    } else {
      console.log('error submit!', fields)
    }
  })
}

</script>
<style lang="scss" scoped>
.par {
  width: 100%;
  height: 100vh;
  background-image: url(@/assets/晚霞.png);
	background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    text-align: center;
    padding-bottom: 20px;
  }
  .el-form {
    width: 400px;
    padding: 30px;
    border-radius: 7px;
    background-color: #fff;
  }
}
</style>
