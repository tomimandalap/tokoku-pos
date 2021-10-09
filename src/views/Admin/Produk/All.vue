<template>
  <layout-default>
    <b-row style="margin: 30px 0 20px 0">
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
          <b-button size="sm" block variant="primary">
            <b-icon icon="pencil" />
            Update
          </b-button>
          <b-button
            size="sm"
            block
            variant="outline-primary"
            @click="handleDetail(items.id)"
          >
            <b-icon icon="eye" />
            Detail
          </b-button>
        </b-card>
      </b-col>
    </b-row>
  </layout-default>
</template>
<script>
import LayoutDefault from '@/layouts/dasboard.vue'
export default {
  name: 'ProdukAll',
  components: {
    LayoutDefault,
  },
  data() {
    return {}
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
    handleDetail(params) {
      console.log(params)
    },
  },
}
</script>
