<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-dropdown>
      <span class="ant-dropdown-link" @click.prevent>
        <img
          class="avatar"
          src="https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20211029145922.jpg"
        />
        {{ username }}
        <DownOutlined />
      </span>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <span @click="logout">
              <UserOutlined />&nbsp; 个人中心
            </span>
          </a-menu-item>
          <a-menu-item>
            <span @click="accountCenter">
              <LogoutOutlined />&nbsp; 退出登录
            </span>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </a-layout-header>
</template>
<script lang="ts">
import { ExclamationCircleOutlined, LogoutOutlined, UserOutlined, DownOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref, onMounted, createVNode } from "vue";
import { message, Modal } from 'ant-design-vue';
import { useRouter } from "vue-router"
export default defineComponent({
  components: {
    LogoutOutlined,
    UserOutlined,
    DownOutlined
  },
  setup() {
    const router = useRouter()
    let username = ref<string>('未知');
    // 退出
    const logout = () => {
      Modal.confirm({
        title: '提示',
        icon: createVNode(ExclamationCircleOutlined),
        content: '确定要退出系统么？',
        okText: '确认',
        cancelText: '取消',
        onOk() {
          message.success("退出成功！")
          localStorage.removeItem("userInfo")
          router.replace("/login")

        }
      });
    }
    // 个人中心
    const accountCenter = () => {
      router.push('/accountCenter')
    }
    onMounted(() => {
      const userInfo = localStorage.getItem("userInfo")
      if (userInfo) {
        const obj = JSON.parse(userInfo)
        username.value = obj.username
      }
    })
    return {
      username,
      logout,
      accountCenter
    }
  }

})
</script>
<style lang="scss">
.ant-layout-header {
  @include flex;
  @include flex-primary-axis-end;
  @include flex-secondary-axis-center;
}
.ant-dropdown-link {
  cursor: pointer;
  margin-right: 30px;
}
.avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 5px;
}
</style>