<template>
  <q-layout
    view="hHh lpR fFf"
    class="back"
  >
    <q-header
      elevated
      class="text-white headerCustomStyle"
    >
      <q-toolbar>
        <img
          src="./assets/moneroGift.png"
          style="max-width: 50px;"
          class="q-my-sm"
        >
        <q-toolbar-title>
          Gift Monero
        </q-toolbar-title>
        <q-space />
        <q-btn
          flat
          round
          dense
          icon="menu"
          class="mobile-only"
        />
        <q-btn-toggle
          v-model="model"
          flat
          stretch
          toggle-color="yellow"
          :options="options"
          class="desktop-only"
        />
      </q-toolbar>

      <!-- <q-tabs align="left">
        <q-route-tab
          to="/"
          label="Page One"
        />
      </q-tabs> -->
    </q-header>

    <q-page-container
      :class="{'ntp': $q.screen.lt.md}"
    >
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { ref } from 'vue'
const model = ref('')
const options = [
  { label: 'Home', value: 'one' },
  { label: 'Create', value: 'two' },
  { label: 'Redeem', value: 'three' },
  { label: 'Manage', value: 'four' },
  { label: 'Faq', value: 'five' }
]
</script>
<style lang="sass" scoped>
.headerCustomStyle
  background: #4c4c4c !important
.ntp
  padding-top: 60px !important
</style>
