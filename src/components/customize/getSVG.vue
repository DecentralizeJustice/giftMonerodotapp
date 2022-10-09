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
import { reactive, computed, toRef } from 'vue'
const props = defineProps({
  cardinfoobject: { type: Object, required: true },
  chosenavatarindex: { type: Number, required: true }
})
const cardInfo = reactive(props).cardinfoobject
const avatarIndex = toRef(props, 'chosenavatarindex').value

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
const themeDict = { People: funnyPeopleSVGList, Animals: animalsSVGList, Halloween: halloweenSVGList }
const svgArray = computed(() => themeDict[cardInfo.theme])
</script>

<style lang="sass" scoped>
.theIcon
  height: 70%
  width: 70%
.notTheIcon
  height: .001%
  width: .001%
</style>
