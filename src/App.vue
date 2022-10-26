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
                class="text-center justify-center align-center items-center"
              >
                <router-link
                  :to="{ name: options[index].value}"
                  style="text-decoration: none;color: inherit;"
                  class="text-center justify-center align-center items-center"
                >
                  <q-item-section class="text-center justify-center align-center items-center">
                    {{ options[index].label }}
                  </q-item-section>
                </router-link>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <router-link
          v-for="(item, index) in options"
          :key="index"
          class="desktop-only"
          :to="{ name: options[index].value}"
          style="text-decoration: none; color: inherit;"
        >
          <q-btn
            flat
            :label="options[index].label"
            class="q-mx-xs"
            :class="{ 'highlightButton' : options[index].value === 'createCard'}"
          />
        </router-link>
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
<!--     <q-footer class="headerCustomStyle">
      <q-toolbar>
        <q-toolbar-title>@Copyright 2022</q-toolbar-title>
      </q-toolbar>
    </q-footer> -->
  </q-layout>
</template>
<script setup>
// import { ref } from 'vue'
/* import { useRouter } from 'vue-router'
const router = useRouter() */
// const model = ref(window.location.pathname)

/* function test (newRoute) {
  console.log(newRoute)
  router.push({ name: newRoute })
} */
const options = [
  { label: 'Home', value: 'landingPage' },
  { label: 'Create', value: 'createCard' },
  { label: 'Manage', value: 'manageCards' },
  { label: 'Redeem', value: 'redeem' },
  { label: 'Faq', value: 'questions' }
]
</script>
<style lang="sass" scoped>
.headerCustomStyle
  background: #4c4c4c !important
.ntp
  padding-top: 60px !important
.highlightButton
  color: $primary
</style>
