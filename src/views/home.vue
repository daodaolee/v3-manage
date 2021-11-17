<template>
  <a-layout style="min-height: 100vh">
    <LeftNav />
    <a-layout>
      <LayoutHeader />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>

        <div :style="{ padding: '24px', background: '#fff', height: '100%' }">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import LeftNav from "@/components/pub/LeftNav";
import LayoutHeader from '@/components/pub/LayoutHeader.vue';
export default defineComponent({
  components: {
    LeftNav,
    LayoutHeader
  },
  setup() {

  }
})
</script>
<style lang="scss">
.logo {
  height: 50px;
  color: white;
  text-align: center;
  line-height: 50px;
  font-size: 25px;
  color: $color-font-milk;
  font-weight: bold;
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
