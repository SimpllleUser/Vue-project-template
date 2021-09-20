<template>
  <div class="layout-changer">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout.vue';
import EmptyLayout from '@/layout/EmptyLayout.vue';

export default {
  name: 'LayoutChanger',
  components: {
    DefaultLayout,
    EmptyLayout,
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout || 'empty'}-layout`;
    },
  },
};
</script>

<style scoped>

</style>
