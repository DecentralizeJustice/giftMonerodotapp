<template>
  <div
    class="row justify-center align-center text-center"
    :class="{'q-my-lg': $q.screen.gt.sm}"
  >
    <div
      class=" justify-center col-12 col-md-8 text-center"
    >
      <q-card
        class="my-card text-white"
        style=""
      >
        <q-card-section class="localCardHeader">
          <div class="text-h4 ">
            🥳 Your Gift Awaits! 🎉
          </div>
        </q-card-section>
        <q-separator dark />

        <q-card-section class="q-pt-sm text-black text-h6">
          Click The First Avatar From Your Gift Card
          <div class="row">
            <div
              v-for="(theme, parent_node_index) in themeDict"
              :key="theme"
              class="col themeCard q-ma-sm q-pa-sm"
              @click="selectTheme(parent_node_index)"
            >
              <div class="no-margin no-padding">
                <img
                  v-for="(item, index) in theme"
                  :key="index"
                  :src="theme[index]"
                  class="no-margin no-padding"
                  :class="{'theIcon': isThisTheIcon(index), 'notTheIcon': isNotTheIcon(index)}"
                >
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup>
import halloweenSVGList from '@/assets/svgs/halloweenSVGList.js'
import funnyPeopleSVGList from '@/assets/svgs/funnyPeopleSVGList.js'
import animalsSVGList from '@/assets/svgs/animalsSVGList.js'
import christmasSVGList from '@/assets/svgs/christmasSVGList.js'
const avatarIndex = 0
function isThisTheIcon (index) {
  if (avatarIndex === index) {
    return true
  }
  return false
}
function isNotTheIcon (index) {
  if (avatarIndex === index) {
    return false
  }
  return true
}
function selectTheme (params) {
  console.log(params)
}
const themeDict = { People: funnyPeopleSVGList, Animals: animalsSVGList, Halloween: halloweenSVGList, Christmas: christmasSVGList }
</script>

<style lang="sass" scoped>

.theIcon
  height: 70%
  width: 70%
.notTheIcon
  height: .001%
  width: .001%
.localCardHeader
  background-color: $secondary
.themeCard
  background-color: $primary
  border-radius: 25px
</style>
