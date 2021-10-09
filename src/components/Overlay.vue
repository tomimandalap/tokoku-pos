<template>
  <b-overlay :show="show" rounded="sm" variant="dark">
    <b-card title="Card with overlay" :aria-hidden="show ? 'true' : null">
      <b-card-text>
        Laborum consequat non elit enim exercitation cillum.
      </b-card-text>
      <b-card-text>Click the button to toggle the overlay:</b-card-text>
      <b-button :disabled="show" variant="primary" @click="show = true">
        Show overlay
      </b-button>
    </b-card>
  </b-overlay>
</template>
<script>
export default {
  props: {
    show: { type: Boolean, default: false },
  },
}
</script>
