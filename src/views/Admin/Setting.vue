<template>
  <layout-default>
    <div>Setting {{ $route.path }}</div>
  </layout-default>
</template>
<script>
import LayoutDefault from '@/layouts/dasboard.vue'
export default {
  name: 'Setting',
  components: {
    LayoutDefault,
  },
}
</script>
