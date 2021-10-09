<template>
  <layout-default>
    <div>All User {{ $route.path }}</div>
  </layout-default>
</template>
<script>
import LayoutDefault from '@/layouts/dasboard.vue'
export default {
  name: 'UserAll',
  components: {
    LayoutDefault,
  },
}
</script>
