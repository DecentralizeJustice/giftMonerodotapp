<template>
  <div class="q-pa-md row items-center back">
    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat @click="testr">Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import test from '../assets/test.js'
export default {
  setup () {
  },
  methods: {
    async testr() {
      console.log('hip')
      const yes = await test()
      console.log(yes)
    }
  },
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  height: 50vh
.back
  background-color: coral
  height: 90vh
</style>
