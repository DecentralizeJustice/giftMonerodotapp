<template>
  <img
    v-for="(item, index) in svgArray"
    :key="index"
    :src="svgArray[index]"
    :class="{'theIcon': isThisTheIcon(index), 'notTheIcon': isNotTheIcon(index)}"
  >
</template>
<script>
// import { ref } from 'vue'
export default {
  setup () {
    let basket = require('../assets/svgs/halloween/basket.svg')
    let bat = require('../assets/svgs/halloween/bat.svg')
    let cat = require('../assets/svgs/halloween/cat.svg')
    let devil = require('../assets/svgs/halloween/devil.svg')
    let eye = require('../assets/svgs/halloween/eye.svg')
    let frankbride = require('../assets/svgs/halloween/frankbride.svg')
    let frankenstein = require('../assets/svgs/halloween/frankenstein.svg')
    let ghost = require('../assets/svgs/halloween/ghost.svg')
    let invisible = require('../assets/svgs/halloween/invisible.svg')
    let lollipop = require('../assets/svgs/halloween/lollipop.svg')
    let mask = require('../assets/svgs/halloween/mask.svg')
    let mummy = require('../assets/svgs/halloween/mummy.svg')
    let scarecrow = require('../assets/svgs/halloween/scarecrow.svg')
    let spider = require('../assets/svgs/halloween/spider.svg')
    let tombstone = require('../assets/svgs/halloween/tombstone.svg')
    let trident = require('../assets/svgs/halloween/trident.svg')
    let vampire = require('../assets/svgs/halloween/vampire.svg')
    let voodoo = require('../assets/svgs/halloween/voodoo.svg')
    let witch = require('../assets/svgs/halloween/witch.svg')
    let zombie = require('../assets/svgs/halloween/zombie.svg')
    let svgArray =
      [
        basket, bat, cat, devil, eye, frankbride, frankenstein, ghost,
        invisible, lollipop, mask, mummy, scarecrow,spider, tombstone,
        trident, vampire, voodoo, witch, zombie
      ]
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }
    let chosen = getRandomInt(0,20)
    function isThisTheIcon(index) {
      if (this.chosen === index) {
        return true
      }
      return false
    }
    function isNotTheIcon(index) {
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
