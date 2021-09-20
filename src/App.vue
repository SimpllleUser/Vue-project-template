<template>
  <div id="app">
    <layout-changer></layout-changer>
  </div>
</template>
<script>
import LayoutChanger from '@/components/LayoutChanger.vue';

export default {
  name: 'App',
  components: { LayoutChanger },

};
</script>
<style lang="scss">
  @import "assets/scss/app";
</style>
