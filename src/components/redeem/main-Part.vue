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
        <q-card-section
          v-if="selectedTheme === ''"
          class="q-pt-sm text-black text-h6"
        >
          Click The First Avatar From Your Gift Card
          <div class="row">
            <div
              v-for="(theme, index) in themeDict"
              :key="theme"
              class="col themeCard q-ma-sm q-pa-sm"
              @click="selectTheme(index)"
            >
              <div class="no-margin no-padding">
                <img
                  :src="theme[0]"
                  class="no-margin no-padding theIcon"
                >
              </div>
            </div>
          </div>
        </q-card-section>
        <q-card-section
          v-if="selectedTheme !== ''"
          class="q-pt-sm text-black text-h6"
        >
          Fill In Your First Panel
          <div class="row q-col-gutter-sm justify-center align-center q-mt-md">
            <q-card
              class="text-white text-center q-pb-sm col-4"
              style="background: #ff6600"
            >
              <div
                style="margin-bottom: -5%;"
                class="text-left text-h5 q-pt-sm q-pl-sm"
              >
                {{ 1 }}.
              </div>
              <q-card-section class="no-margin no-padding">
                <div class="no-margin no-padding">
                  <img
                    v-for="(item, index) in themeDict[selectedTheme]"
                    :key="index"
                    :src="themeDict[selectedTheme][index]"
                    class="no-margin no-padding"
                    :class="{'theIcon': isThisTheIcon(index), 'notTheIcon': isNotTheIcon(index)}"
                  >
                </div>
              </q-card-section>
              <q-card-section
                class="text-subtitle1 text-weight-regular text-center text-black"
                style=""
              >
                <q-input
                  v-model="text1"
                  outlined
                  color="black"
                  bg-color="grey-3"
                  label="First Word"
                /> <br>
                <q-input
                  v-model="text2"
                  outlined
                  color="black"
                  bg-color="grey-3"
                  label="Second Word"
                />
                <q-btn
                  color="green"
                  label="Submit"
                  class="q-mt-sm"
                  @click="checkInputs"
                />
              </q-card-section>
            </q-card>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import halloweenSVGList from '@/assets/svgs/halloweenSVGList.js'
import funnyPeopleSVGList from '@/assets/svgs/funnyPeopleSVGList.js'
import animalsSVGList from '@/assets/svgs/animalsSVGList.js'
import christmasSVGList from '@/assets/svgs/christmasSVGList.js'
import text from '@/assets/word-list-65555.txt'
import { getWordListArray } from '@/assets/misc.js'
const avatarIndex = 0
const selectedTheme = ref('')
const text1 = ref('')
const text2 = ref('')
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
  selectedTheme.value = params
}
const themeDict = { People: funnyPeopleSVGList, Animals: animalsSVGList, Halloween: halloweenSVGList, Christmas: christmasSVGList }
const wordList = getWordListArray(text)
function checkInputs () {
  const firstIndex = findWordListIndex(text1.value)
  const secondIndex = findWordListIndex(text2.value)
  console.log(firstIndex, secondIndex)
}
function findWordListIndex (word) {
  for (let index = 0; index < wordList.length; index++) {
    const potentialWord = wordList[index]
    if (potentialWord === word) {
      return index
    }
  }
  return false
}
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
