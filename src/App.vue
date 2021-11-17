<template>
  <a-config-provider :csp="{ nonce: 'YourNonceCode' }" :locale="zhCN">
    <router-view></router-view>
  </a-config-provider>
</template>
<script lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { defineComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router';

dayjs.locale('en');
export default defineComponent({
  setup() {
    const router = useRouter()
    onMounted(() => {
      let token = localStorage.getItem("userInfo")
      if (!token) {
        router.replace('/login')
      }
    })
    return {
      zhCN
    }
  }

})
</script>
<style lang="scss">
</style>
