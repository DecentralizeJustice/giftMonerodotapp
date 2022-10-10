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
import { computed, toRefs } from 'vue'
const props = defineProps({
  cardinfoobject: { type: Object, required: true },
  chosenavatarindex: { type: Number, required: true }
})
const cardInfo = toRefs(props).cardinfoobject
const avatarIndex = toRefs(props).chosenavatarindex

function isThisTheIcon (index) {
  if (avatarIndex.value === index) {
    return true
  }
  return false
}
function isNotTheIcon (index) {
  if (avatarIndex.value === index) {
    return false
  }
  return true
}
const themeDict = { People: funnyPeopleSVGList, Animals: animalsSVGList, Halloween: halloweenSVGList }
const svgArray = computed(() => { return themeDict[cardInfo.value.theme] })
</script>

<style lang="sass" scoped>
.theIcon
  height: 70%
  width: 70%
.notTheIcon
  height: .001%
  width: .001%
</style>
