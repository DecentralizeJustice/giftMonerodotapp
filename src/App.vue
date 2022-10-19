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
        <q-space class="desktop-only" />
        <q-btn
          color="primary"
          icon="menu"
          class="mobile-only"
        >
          <q-menu>
            <q-list
              style="min-width: 100px"
              separator
            >
              <q-item
                v-for="(item, index) in options"
                :key="index"
                clickable
                @click="test(item.value)"
              >
                <q-item-section>{{ options[index].label }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-btn-toggle
          v-model="model"
          flat
          stretch
          color="white"
          toggle-color="white"
          :options="options"
          class="desktop-only"
          @update:model-value="test"
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
import { useRouter } from 'vue-router'
const router = useRouter()
const model = ref(window.location.pathname)

function test (newRoute) {
  router.push(newRoute)
}
const options = [
  { label: 'Home', value: '/' },
  { label: 'Create', value: '/create' },
  { label: 'Manage', value: '/manage' },
  { label: 'Redeem', value: '/redeem' }
  // { label: 'Faq', value: 'five' }
]
</script>
<style lang="sass" scoped>
.headerCustomStyle
  background: #4c4c4c !important
.ntp
  padding-top: 60px !important
</style>
