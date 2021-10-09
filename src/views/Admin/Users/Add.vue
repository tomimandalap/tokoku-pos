<template>
  <layout-default>
    <div>Add User {{ $route.path }}</div>
  </layout-default>
</template>
<script>
import LayoutDefault from '@/layouts/dasboard.vue'
export default {
  name: 'UserAdd',
  components: {
    LayoutDefault,
  },
}
</script>
