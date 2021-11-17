<template>
  <div class="w100 h100 login">
    <div class="form-container">
      <p>DaoDaoLee</p>
      <a-form :model="formState">
        <a-form-item class="w100">
          <a-input v-model:value="formState.username" placeholder="请输入用户名">
            <template #prefix>
              <user-outlined />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item class="w100">
          <a-input v-model:value="formState.password" placeholder="请输入密码">
            <template #prefix>
              <lock-outlined />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item class="w100" style="padding-top:20px">
          <a-button class="w100" type="primary" @click="onSubmit">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script lang="ts">
import { UserOutlined, LockOutlined, AntDesignOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, toRaw } from "vue";
import { IUser, IUserResp } from '@/types';
import type { UnwrapRef } from "vue";
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import { message } from "ant-design-vue"
import { login } from '@/api';
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
    AntDesignOutlined
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const formState: UnwrapRef<IUser> = reactive({
      username: "",
      password: ""
    })
    // 提交按钮
    const onSubmit = async () => {
      // const result: IUserResp = await login(toRaw(formState))
      // if (result.code === 200) {
      //   store.commit("SETUSERINFO", result.data)
      //   router.push("/home")
      // } else {
      //   message.error(result.msg || "请求失败")
      // }
      router.push("/home")
    }
    return {
      formState,
      onSubmit
    }
  }
})
</script>
<style lang="scss" scoped>
.login {
  background: #506a93;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
  @include flex;
  @include flex-primary-axis-center;
  @include flex-secondary-axis-center;
  p {
    font-size: 40px;
    color: #f1ebe5;
    text-shadow: 0 5px 9px #c4b59d, 0px -2px 1px #fff;
    font-weight: bold;
    letter-spacing: 5px;
    text-align: center;
  }
  .form-container {
    width: 450px;
    padding: 50px 70px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;

    form {
      @include flex;
      @include flex-column;
      @include flex-primary-axis-center;
      @include flex-secondary-axis-center;
    }
  }
}
</style>