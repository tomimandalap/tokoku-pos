<template>
  <layout-default title="TITLE" :countCart="mapData.length" @show="hanldeShow">
    <b-row style="margin: 100px 0 20px 0">
      <b-col cols="12">
        <b-input-group>
          <b-input-group-prepend>
            <b-dropdown text="Sortby" variant="outline-secondary">
              <b-dropdown-item>Default</b-dropdown-item>
              <b-dropdown-item>Nama</b-dropdown-item>
              <b-dropdown-item>Kategori</b-dropdown-item>
            </b-dropdown>
          </b-input-group-prepend>

          <b-form-input
            type="text"
            placeholder="Cari nama produk"
          ></b-form-input>

          <b-input-group-append>
            <b-input-group-text><b-icon icon="search" /></b-input-group-text>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>

    <b-row v-if="loading">
      <b-col cols="12">
        <div class="d-flex justify-content-center mb-3">
          <b-spinner variant="primary" label="Loading..."></b-spinner>
        </div>
      </b-col>
    </b-row>

    <b-row v-else class="mb-5">
      <b-col
        v-for="(items, i) in mapData"
        :key="i"
        lg="3"
        md="4"
        sm="6"
        cols="12"
      >
        <b-card
          title="IDR 30000"
          img-top
          :img-src="items.url"
          img-alt="Image"
          img-height="200px"
          border-variant="secondary"
          class="my-3 rounded-lg"
        >
          <b-card-text class="d-block text-truncate">
            {{ items.title }}
          </b-card-text>
          <b-button
            size="md"
            block
            variant="primary"
            @click="handleCart(items.id)"
          >
            <b-icon icon="cart" />
            Add to cart
          </b-button>
        </b-card>
      </b-col>
    </b-row>

    <!-- list cart -->
    <b-sidebar
      v-model="idShow"
      no-header
      right
      shadow
      bg-variant="white"
      text-variant="dark"
      :width="width <= 576 ? '100%' : '25rem'"
    >
      <template #default="{ hide }">
        <div class="text-center p-3">
          <div
            id="sidebar-no-header-title"
            class="d-flex justify-content-between align-items-center"
          >
            <b-icon
              icon="x"
              variant="black"
              font-scale="1.7"
              class="rounded-circle cursor"
              @click="hide"
            ></b-icon>

            <h4>List Pesanan Customer</h4>
          </div>
          <img
            :src="require('@/assets/images/cartempty.svg')"
            alt="cartempty.svg"
            width="100px"
            style="margin: 50px 0 25px 0"
          />
          <h5>Produk saat ini kosong</h5>
          <em>Silahkan pilih produk terbaik kami.</em>
        </div>
      </template>
    </b-sidebar>
  </layout-default>
</template>
<script>
import LayoutDefault from '@/layouts/default.vue'
export default {
  name: 'Menu',
  components: {
    LayoutDefault,
  },
  data: () => ({
    idShow: null,
    width: 0,
  }),
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    loading() {
      return this.$store.state.mPhotos.loading
    },
    mapData() {
      return this.$store.getters.mapData
    },
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      this.$store.commit('setLoading', true)
      this.$store.dispatch('getPhotos')
    },
    hanldeShow(params) {
      this.idShow = params
    },
    handleResize() {
      this.width = window.innerWidth
    },
    handleCart(id) {
      alert(id)
    },
  },
}
</script>
