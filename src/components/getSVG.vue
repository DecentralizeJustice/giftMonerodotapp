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
<script>
// import halloweenSVGList from '@/assets/svgs/halloweenSVGList.js'
// import funnyPeopleSVGList from '@/assets/svgs/funnyPeopleSVGList.js'
import animalsSVGList from '@/assets/svgs/animalsSVGList.js'
export default {
  setup () {
    const svgArray = animalsSVGList
    function getRandomInt (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
    }
    const chosen = getRandomInt(0, 20)
    function isThisTheIcon (index) {
      if (this.chosen === index) {
        return true
      }
      return false
    }
    function isNotTheIcon (index) {
      if (this.chosen === index) {
        return false
      }
      return true
    }
    return {
      svgArray, chosen, isThisTheIcon, isNotTheIcon
    }
  }
}
</script>

<style lang="sass" scoped>
.theIcon
  height: 50%
  width: 50%
.notTheIcon
  height: .001%
  width: .001%
</style>
