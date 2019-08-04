<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" width="256px">
      <div class="logo">
        <h1>新微云后台管理</h1>
      </div>
      <SiderMenu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="collapsed = !collapsed"
        ></a-icon>
        <Header />
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        <Footer />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";

export default {
  components: {
    Header,
    Footer,
    SiderMenu
  },
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style scoped lang="less">
.logo {
  position: relative;
  height: 64px;
  padding-left: 24px;
  background: #002140;
  line-height: 64px;

  svg {
    width: 32px;
    height: 32px;
    display: inline-block;
    vertical-align: middle;
  }

  h1 {
    display: inline-block;
    margin: 0 0 0 12px;
    font-size: 20px;
    font-family: Avenir, "Helvetica Neue", Arial, Helvetica, sans-serif;
    font-weight: 600;
    vertical-align: middle;
  }
}

.trigger {
  padding: 0 20px;
  line-height: 64px;
  font-size: 20px;
}

.trigger:hover {
  background: #eeeeee;
}
</style>
