<template>
  <div class="LayoutDefault">
    <b-navbar type="light" variant="light">
      <b-container>
        <b-navbar-brand class="font-weight-bold">TOKOKU</b-navbar-brand>
        <!-- <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle> -->

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
                <b-avatar variant="dark" text="TM"></b-avatar>
                <span class="sr-only">Avatar</span>
              </template>
              <b-dropdown-item to="/cashier/menu">Profile</b-dropdown-item>
              <b-dropdown-item to="/logout">Keluar</b-dropdown-item>
            </b-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <main class="LayoutDefault__main container">
      <slot />
    </main>
  </div>
</template>
