<template>
  <div>
    <img
      v-for="(item, index) in svgArray"
      :key="index"
      :src="svgArray[index]"
      :class="{'theIcon': isThisTheIcon(index), 'notTheIcon': isNotTheIcon(index)}"
    >
  </div>
</template>
<script>
// import { ref } from 'vue'
export default {
  setup () {
    const basket = require('../assets/svgs/halloween/basket.svg')
    const bat = require('../assets/svgs/halloween/bat.svg')
    const cat = require('../assets/svgs/halloween/cat.svg')
    const devil = require('../assets/svgs/halloween/devil.svg')
    const eye = require('../assets/svgs/halloween/eye.svg')
    const frankbride = require('../assets/svgs/halloween/frankbride.svg')
    const frankenstein = require('../assets/svgs/halloween/frankenstein.svg')
    const ghost = require('../assets/svgs/halloween/ghost.svg')
    const invisible = require('../assets/svgs/halloween/invisible.svg')
    const lollipop = require('../assets/svgs/halloween/lollipop.svg')
    const mask = require('../assets/svgs/halloween/mask.svg')
    const mummy = require('../assets/svgs/halloween/mummy.svg')
    const scarecrow = require('../assets/svgs/halloween/scarecrow.svg')
    const spider = require('../assets/svgs/halloween/spider.svg')
    const tombstone = require('../assets/svgs/halloween/tombstone.svg')
    const trident = require('../assets/svgs/halloween/trident.svg')
    const vampire = require('../assets/svgs/halloween/vampire.svg')
    const voodoo = require('../assets/svgs/halloween/voodoo.svg')
    const witch = require('../assets/svgs/halloween/witch.svg')
    const zombie = require('../assets/svgs/halloween/zombie.svg')
    const svgArray =
      [
        basket, bat, cat, devil, eye, frankbride, frankenstein, ghost,
        invisible, lollipop, mask, mummy, scarecrow, spider, tombstone,
        trident, vampire, voodoo, witch, zombie
      ]
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
  height: 70%
  width: 70%
.notTheIcon
  height: .001%
  width: .001%
</style>
