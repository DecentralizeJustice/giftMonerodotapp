<template>
  <div class="q-pa-md row justify-center align-center full-height full-width text-center back">
    <q-card class="my-card text-white">
      <q-card-section class="cardsection">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
      <q-separator dark class='relative-bottom'/>
      <q-card-actions class='vertical-bottom'>
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
  background: #4c4c4c !important
  width: 50vw
.back
  background-color: #f9530c
</style>
