<template>
  <div>Hello Word</div>
</template>
<script>
export default {
  name: 'Home',
  created() {
    this.$router.push('/cashier/menu')
  },
}
</script>
