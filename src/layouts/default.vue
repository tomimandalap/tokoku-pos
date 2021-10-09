<template>
  <div class="LayoutDefault">
    <!-- navbar -->
    <b-navbar fixed="top" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand href="#" class="font-weight-bold">
          {{ title }}
        </b-navbar-brand>

        <!-- <b-navbar-toggle target="nav-collapse">
          <template #default="{ expanded }">
            <b-icon
              v-if="expanded"
              icon="chevron-bar-up"
              variant="light"
            ></b-icon>
            <b-icon v-else icon="chevron-bar-down" variant="light"></b-icon>
          </template>
        </b-navbar-toggle> -->

        <b-collapse is-nav>
          <b-navbar-nav class="ml-auto d-flex align-items-center">
            <div class="text-center">
              <b-button variant="link" @click="hanleCart">
                <b-icon icon="cart" style="color: #fff" class="mr-2"></b-icon>
                <b-badge
                  variant="light"
                  :class="{ 'text-danger': countCart >= 99 }"
                >
                  {{ countCart }}
                  <sup v-show="countCart >= 99">+</sup>
                </b-badge>
              </b-button>
            </div>

            <b-dropdown
              size="sm"
              variant="link"
              right
              toggle-class="text-decoration-none"
              no-caret
            >
              <template #button-content>
                <b-avatar variant="light" text="TM"></b-avatar>
                <span class="sr-only">Avatar</span>
              </template>
              <b-dropdown-item to="/admin">Profile</b-dropdown-item>
              <b-dropdown-item to="/logout">
                <b-icon icon="box-arrow-left" />
                Keluar
              </b-dropdown-item>
            </b-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <!-- end -->
    <main class="LayoutDefault__main container">
      <slot />
    </main>
    <!-- footer -->
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: 'TOKOKU' },
    countCart: { type: Number, default: 0 },
  },
  data: () => ({}),
  methods: {
    hanleCart() {
      this.$emit('show', true)
    },
  },
}
</script>
<style scoped src="@/assets/css/cashier.css"></style>
