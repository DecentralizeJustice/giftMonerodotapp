<template>
  <div
    class="row justify-center align-center text-center"
    :class="{'q-my-lg': $q.screen.gt.sm}"
  >
    <div
      class=" justify-center col-12 col-md-8 text-center"
    >
      Got Data!!!!!!!
    </div>
  </div>
</template>
<script setup>
function timeout (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
await timeout(1000)
</script>

<style lang="sass" scoped>
</style>
