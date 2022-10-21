<template>
  <div
    class="row justify-center align-center text-center"
    :class="{'q-my-lg': $q.screen.gt.sm}"
  >
    <div
      class=" justify-center col-12 col-md-8 text-center"
    >
      Get Data!!!!!!!
    </div>
  </div>
</template>
<script setup>
import { toRef } from 'vue'
const props = defineProps({
  theme: { type: String, required: true },
  entropy: { type: Object, required: true }
})
const theme = toRef(props, 'theme')
const entropy = toRef(props, 'entropy')
function timeout (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
await timeout(1000)
console.log(theme.value)
console.log(entropy.value)
</script>

<style lang="sass" scoped>
</style>
