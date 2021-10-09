<template>
  <div class="LayoutDefault">
    <div class="wrapper">
      <!-- sidebar -->
      <nav v-show="!state" id="sidebar" class="sideactive">
        <div
          class="
            sidebar-header
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <router-link to="/admin">
            <h4 class="text-white">TOKOKU</h4>
          </router-link>
          <b-button variant="outline-dark" @click="state = true">
            <b-icon
              icon="chevron-left"
              animation="cylon"
              variant="light"
            ></b-icon>
          </b-button>
        </div>

        <div class="list_menu">
          <b-card
            v-for="(items, i) in dataMenu"
            :key="i"
            no-body
            bg-variant="dark"
            text-variant="light"
            class="mb-1 border-0 shadow-none"
          >
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-link
                v-b-toggle="`produk-${i}`"
                class="
                  d-flex
                  justify-content-between
                  align-items-center
                  text-white
                  cursor
                  my-2
                "
                :to="items.url"
              >
                <div class="d-flex align-items-center">
                  <b-icon :icon="items.icon"></b-icon>
                  <span class="ml-3">{{ items.name }}</span>
                </div>
                <div v-show="items.url === '#'">
                  <span class="when-open">
                    <b-icon
                      icon="chevron-up"
                      animation="cylon-vertical"
                    ></b-icon>
                  </span>
                  <span class="when-closed">
                    <b-icon icon="chevron-down"></b-icon>
                  </span>
                </div>
              </b-link>
            </b-card-header>
            <b-collapse :id="`produk-${i}`" visible :accordion="'accordion'">
              <b-card-body v-if="items.children">
                <b-link
                  v-for="(child, j) in items.children"
                  id="active_link"
                  :key="j"
                  :to="child.url"
                  :class="[
                    'd-block',
                    { active_link: $route.path === child.url },
                  ]"
                  @click="handleData(items, i, j)"
                >
                  {{ child.name }}
                </b-link>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </nav>

      <!-- end sidebar -->
      <div id="content">
        <b-navbar type="dark" variant="dark">
          <b-container fluid>
            <b-button
              variant="outline-dark"
              class="mr-4"
              @click="state = false"
            >
              <b-icon icon="list" variant="light" />
            </b-button>

            <b-collapse id="nav-text-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
                <b-dropdown
                  size="sm"
                  variant="link"
                  right
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template #button-content>
                    <b-avatar variant="light" text="A"></b-avatar>
                    <span class="sr-only">Avatar</span>
                  </template>
                  <b-dropdown-item to="/logout">
                    <b-icon icon="box-arrow-left" />
                    Keluar
                  </b-dropdown-item>
                </b-dropdown>
              </b-navbar-nav>
            </b-collapse>
          </b-container>
        </b-navbar>

        <main class="LayoutDefault__main container-fluid">
          <slot />
        </main>
        <!--  -->
      </div>
    </div>
  </div>
</template>
<script>
import Menu from '@/helpers/menu'
export default {
  mixins: [Menu],
  data: () => ({
    state: false,
    pathUrl: '',
    idx: null,
  }),
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      if (window.innerWidth <= 575.98) {
        this.state = true
      } else {
        this.state = false
      }
    },
    handleData(data, id, index) {
      let path = data.children.find((element, idx) => {
        return idx === index
      })
      this.idx = id
      this.pathUrl = path.url
    },
  },
}
</script>
<style scoped src="@/assets/css/dasbord.css"></style>
