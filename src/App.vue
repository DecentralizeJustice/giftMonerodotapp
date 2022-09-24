<script>
// import { ref } from 'vue'
export default {
  setup () {
  }
}
</script>


<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="text-white headerCustomStyle">
      <q-toolbar>
        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar> -->
          Give Monero
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Page One" />
        <!-- <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" /> -->
      </q-tabs>
    </q-header>

    <q-page-container style='height:100vh;'>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<style lang="sass" scoped>
.headerCustomStyle
  background: #4c4c4c !important
</style>
