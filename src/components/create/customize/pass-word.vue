<template>
  <div class="col-12">
    <q-card
      class="text-white text-center q-ma-sm q-pa-md"
      style="background: black"
    >
      <div class="q-mb-md desktop-only">
        <q-chip
          icon="lock"
          :ripple="false"
          color="red-5"
          dark
        >
          Secret Password: Don't Share!!!
        </q-chip>
      </div>
      <q-card class="bg-black text-white mobile-only q-mb-sm">
        <q-card-section
          class="bg-red-5"
          style="border-radius: 10px;"
        >
          <div class="text-subtitle1">
            Secret Password: Don't Share!!!
          </div>
        </q-card-section>
      </q-card>
      <div class="row q-col-gutter-sm justify-center align-center">
        <div
          v-for="(item, index) in wordArrayIterate"
          :key="`none-${item}`"
          class="col col-6 col-md-3"
        >
          <q-card
            class="text-white text-center q-pb-sm"
            style="background: #ff6600"
          >
            <div
              style="margin-bottom: -5%;"
              class="text-left text-h5 q-pt-sm q-pl-sm"
            >
              {{ index + 1 }}.
            </div>
            <q-card-section class="no-margin no-padding">
              <getSVG
                :cardinfoobject="cardInfo"
                :chosenavatarindex="cardInfo.entropyData.avatars[index]"
              />
            </q-card-section>
            <q-card-section
              class="text-subtitle1 text-weight-regular text-center no-padding"
              style="line-height: 115%;"
            >
              {{ newList[cardInfo.entropyData.words[item]] }} <br>
              {{ newList[cardInfo.entropyData.words[item + 1]] }}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-card>
  </div>
</template>
<script setup>
import { toRef } from 'vue'
import getSVG from '@/components/create/customize/getSVG.vue'
import text from '@/assets/word-list-65555.txt'
const props = defineProps({
  cardinfoobject: { type: Object, required: true }
})
const cardInfo = toRef(props, 'cardinfoobject')
const wordArrayIterate = [0, 2, 4, 6]
const totalWordList = (text.split('\n'))
totalWordList.pop()
totalWordList.pop()
const newList = []
for (let i = 0; i < totalWordList.length; i++) {
  const tempString = totalWordList[i]
  newList[i] = tempString.split(' ')[2]
}
</script>

<style lang="sass" scoped>
.moneroLogo
  height: auto
  width: 100%
</style>
