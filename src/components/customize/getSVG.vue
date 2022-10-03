<template>
  <div class="no-margin no-padding">
    <img
      v-for="(item, index) in svgArray"
      :key="index"
      :src="svgArray[index]"
      class="no-margin no-padding"
      :class="{'theIcon': isThisTheIcon(index), 'notTheIcon': isNotTheIcon(index)}"
    >
  </div>
</template>
<script setup>
import halloweenSVGList from '@/assets/svgs/halloweenSVGList.js'
import funnyPeopleSVGList from '@/assets/svgs/funnyPeopleSVGList.js'
import animalsSVGList from '@/assets/svgs/animalsSVGList.js'
import { toRef, computed } from 'vue'
const props = defineProps({
  theme: { type: String, required: true }
})
const theme = toRef(props, 'theme')
const themeDict = { People: funnyPeopleSVGList, Animals: animalsSVGList, Halloween: halloweenSVGList }
const svgArray = computed(() => themeDict[theme.value])
function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}
const chosen = getRandomInt(0, 20)
function isThisTheIcon (index) {
  if (chosen === index) {
    return true
  }
  return false
}
function isNotTheIcon (index) {
  if (chosen === index) {
    return false
  }
  return true
}
</script>

<style lang="sass" scoped>
.theIcon
  height: 70%
  width: 70%
.notTheIcon
  height: .001%
  width: .001%
</style>
