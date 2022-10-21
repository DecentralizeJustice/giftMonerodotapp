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
        <q-card-section>
          <q-linear-progress
            size="30px"
            stripe
            rounded
            :value="progress"
            color="$primary"
          >
            <div class="absolute-full flex flex-center">
              <q-badge
                color="white"
                text-color="black"
                :label="progressLabel"
              />
            </div>
          </q-linear-progress>
        </q-card-section>
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
              <getSVG
                :cardinfoobject="reactive({ theme: index })"
                :chosenavatarindex="0"
              />
            </div>
          </div>
        </q-card-section>
        <q-card-section
          v-if="selectedTheme !== '' && avatarOrWordSelector === 'words'"
          class="q-pt-sm text-black text-h6"
        >
          Fill In Your {{ panelIteration }} Panel Words
          <div class="row q-col-gutter-sm justify-center align-center q-mt-md">
            <q-card
              class="text-white text-center q-pb-sm col-4"
              style="background: #ff6600"
            >
              <div
                style="margin-bottom: -5%;"
                class="text-left text-h5 q-pt-sm q-pl-sm"
              >
                {{ currentIncompleteCardIndex + 1 }}.
              </div>
              <q-card-section class="no-margin no-padding">
                <div class="no-margin no-padding">
                  <getSVG
                    :cardinfoobject="reactive({ theme: selectedTheme })"
                    :chosenavatarindex="avatars[currentIncompleteCardIndex]"
                  />
                </div>
              </q-card-section>
              <q-card-section
                class="text-subtitle1 text-weight-regular text-center text-black"
                style=""
              >
                <q-chip
                  v-if="!text1Valid"
                  icon="search"
                  :ripple="false"
                  color="red-10"
                  dark
                >
                  Not Valid Word, Check Again
                </q-chip>
                <q-input
                  v-model="text1"
                  outlined
                  color="black"
                  bg-color="grey-3"
                  label="First Word"
                  :error="!text1Valid"
                /> <br>
                <q-chip
                  v-if="!text2Valid"
                  icon="search"
                  :ripple="false"
                  color="red-10"
                  dark
                >
                  Not Valid Word, Check Again
                </q-chip>
                <q-input
                  v-model="text2"
                  outlined
                  color="black"
                  bg-color="grey-3"
                  label="Second Word"
                  :error="!text2Valid"
                  hide-bottom-space
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
        <q-card-section
          v-if="selectedTheme !== '' && avatarOrWordSelector === 'avatar'"
          class="q-pt-sm text-black text-h6"
        >
          Select Your {{ panelIteration }} Panel Avatar
          <div class="row q-col-gutter-sm justify-center align-center q-mt-md">
            <div
              v-for="(svg, index) in themeDict[selectedTheme]"
              :key="svg"
              class="col-1"
              @click="selectAvatar(index)"
            >
              <img
                :src="svg"
                class="no-margin no-padding iconGrid"
              >
            </div>
          </div>
        </q-card-section>
        <q-card-section
          v-if="words[0] !== null"
          class="row q-col-gutter-sm justify-center align-center q-pb-md"
        >
        <div class="col-8">
          <div class="row">
          <div
            v-for=" (element, index) in completedCardsInfo"
            :key="index"
            class="text-white text-center q-pb-sm q-ma-sm col col-5 col-md-5"
            style="background: #ff6600;  border-radius: 25px;"
          >
            <div
              style="margin-bottom: -5%;"
              class="text-left text-h5 q-pt-sm q-pl-sm"
            >
              {{ index + 1 }}.
            </div>
            <div class="no-margin no-padding">
              <getSVG
                :cardinfoobject="reactive({ theme: selectedTheme })"
                :chosenavatarindex="element.avatar"
              />
            </div>
            <div
              class="text-subtitle1 text-weight-regular text-center no-padding"
              style="line-height: 115%;"
            >
              {{ wordList[element.words[0]] }} <br>
              {{ wordList[element.words[1]] }}
            </div>
          </div>
        </div>
        </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, computed, reactive, toRaw } from 'vue'
import halloweenSVGList from '@/assets/svgs/halloweenSVGList.js'
import funnyPeopleSVGList from '@/assets/svgs/funnyPeopleSVGList.js'
import christmasSVGList from '@/assets/svgs/christmasSVGList.js'
import text from '@/assets/word-list-65555.txt'
import getSVG from '@/components/create/customize/getSVG.vue'
import { getWordListArray } from '@/assets/misc.js'
const emit = defineEmits(['cardCompleted'])
const progressLabel = computed(() => (progress.value * 100).toFixed(0) + '%')
const selectedTheme = ref('')
const text1 = ref('')
const text2 = ref('')
const words = ref([null, null, null, null, null, null, null, null])
const avatars = ref([0, null, null, null])
const text1Valid = ref(true)
const text2Valid = ref(true)
watch(text1, () => {
  text1Valid.value = true
})
watch(text2, () => {
  text2Valid.value = true
})
function selectTheme (theme) {
  selectedTheme.value = theme
}
function selectAvatar (avatarIndex) {
  avatars.value[currentIncompleteCardIndex.value] = avatarIndex
}
const themeDict = { People: funnyPeopleSVGList, Halloween: halloweenSVGList, Christmas: christmasSVGList }
const wordList = getWordListArray(text)
const progress = computed(() => {
  const firstStageProgress = 0
  if (completedCardsInfo.value.length === 0) {
    if (selectedTheme.value === '') { return firstStageProgress } // start with zero
    if (text1.value === '') { return (firstStageProgress + 0.08) } // credit for selecting theme
    if (text2.value === '') { return (firstStageProgress + 0.08 + 0.085) } // add textInput1
    if (text2.value !== '') { return (firstStageProgress + 0.08 + 0.085 + 0.085) } // add textInput2
    return
  }
  let percentDone = (completedCardsInfo.value.length * 0.25) // setback to normal operation
  if (avatars.value[currentIncompleteCardIndex.value] !== null) { percentDone += 0.08 } // add theme
  if (text1.value !== '') { percentDone += 0.085 } // add textInput1
  if (text2.value !== '') { percentDone += 0.085 } // add textInput2
  if (percentDone >= 0.98) { return 0.95 }
  return percentDone
})
function checkInputs () {
  const firstIndex = findWordListIndex(text1.value.replace(/\s/g, ''))
  const secondIndex = findWordListIndex(text2.value.replace(/\s/g, ''))
  text1Valid.value = firstIndex
  text2Valid.value = secondIndex
  if (firstIndex && secondIndex) {
    const value = currentIncompleteWordsIndex.value
    words.value[value] = firstIndex
    words.value[value + 1] = secondIndex
    text1.value = ''
    text2.value = ''
  }
}
const currentIncompleteCardIndex = computed(() => {
  for (let index = 0; index < words.value.length; index += 2) {
    const element = words.value[index + 1]
    if (element === null) { return index / 2 }
  }
  return 3
})
const completedCardsInfo = computed(() => {
  const completedCards = []
  for (let index = 0; index < words.value.length; index += 2) {
    const element = avatars.value[index / 2]
    if (words.value[index + 1] !== null) { completedCards.push({ avatar: element, words: [words.value[index], words.value[index + 1]] }) }
  }
  return completedCards
})
watch(completedCardsInfo, () => {
  if (completedCardsInfo.value.length === 4) { emit('cardCompleted', toRaw(completedCardsInfo.value), toRaw(selectedTheme.value)) }
})
const currentIncompleteWordsIndex = computed(() => {
  for (let index = 0; index < words.value.length; index += 2) {
    const element = words.value[index + 1]
    if (element === null) { return index }
  }
  return 6
})
const panelIteration = computed(() => {
  if (currentIncompleteCardIndex.value === 0) { return 'First' }
  if (currentIncompleteCardIndex.value === 1) { return 'Second' }
  if (currentIncompleteCardIndex.value === 2) { return 'Third' }
  return 'Fourth'
})
const avatarOrWordSelector = computed(() => {
  for (let index = 0; index < words.value.length; index += 2) {
    const currentAvatar = avatars.value[index / 2]
    const currentWords = words.value[index]
    if (currentAvatar === null) { return 'avatar' }
    if (currentWords === null) { return 'words' }
  }
  return 'done'
})
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
.localCardHeader
  background-color: $secondary
.themeCard
  background-color: $primary
  border-radius: 25px
.iconGrid
  height: 100%
  width: 100%
</style>
