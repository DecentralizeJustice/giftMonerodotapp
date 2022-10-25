<template>
  <div
    class="row justify-center align-center no-margin"
    :class="{'q-my-lg': $q.screen.gt.sm, 'q-mt-xl': $q.screen.gt.sm}"
  >
    <div
      class=" justify-center col-12 col-md-11 "
    >
      <q-card
        flat
        style="border-radius: 0px; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px;"
      >
        <q-card-section
          v-if="fundedCards.length !== 0"
          horizontal
          class="row jusitfy-center"
          style=""
        >
          <q-card-section
            class="col col-3 text-center row content-start"
            style="overflow: scroll;overflow-x: hidden;"
          >
            <div
              v-for="(item, index) in fundedCards"
              :key="item"
              class="col col-12"
            >
              <q-btn
                v-if="$q.screen.gt.sm"
                no-caps
                size="20px"
                class="q-my-sm col-12"
                :color="getButtonColor(index)"
                :label="`Funded Card ${index + 1}`"
                @click="model = index"
              />
              <q-btn
                v-if="$q.screen.lt.md"
                no-caps
                size="20px"
                class="q-my-sm col-12"
                :color="getButtonColor(index)"
                :label="`Card ${index + 1}`"
                @click="model = index"
              />
            </div>
          </q-card-section>
          <q-separator vertical />
          <q-card-section class="col col-9">
            <div class="row">
              <div
                v-if="$q.screen.gt.sm"
                class="col col-md-6 q-pa-sm"
              >
                <displayCardInfo :cardinfoobject="properProp" />
              </div>
              <div
                class="col col-md-6 text-center"
                :class="{ 'q-pa-sm': $q.screen.gt.sm }"
              >
                <fundedActions :single-card-info="fundedCards[model]" />
                <q-btn
                  v-if="$q.screen.lt.md"
                  label="Preview Card"
                  color="primary"
                  class="q-mt-sm"
                  @click="previewCard = true"
                />
                <q-btn
                  label="Download Card"
                  color="primary"
                  class="q-mt-sm"
                  @click="down()"
                />
              </div>
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
    <q-dialog
      v-model="previewCard"
      class="text-center"
    >
      <displayCardInfo :cardinfoobject="properProp" />
      <q-btn
        v-close-popup
        label="Close"
        color="red"
        class="q-mt-sm"
      />
    </q-dialog>
  </div>
</template>
<script setup>
import fundedActions from '@/components/manage/fundedActions.vue'
import { ref, watch } from 'vue'
import { useCardStore } from '@/store/stagenetGiftCards.js'
import displayCardInfo from '@/components/create/customize/displayCardInfo.vue'
import download from 'downloadjs'
import * as htmlToImage from 'html-to-image'
const previewCard = ref(false)
const model = ref(0)
const store = useCardStore()
const fundedCards = store.fundedCards
function getButtonColor (index) {
  if (index === model.value) { return 'primary' }
  return 'secondary'
}
let properProp = ''
if (fundedCards[model.value] !== undefined) { properProp = ref(fundedCards[model.value]) }
watch(model, () => {
  properProp.value = fundedCards[model.value]
})
async function down () {
  const element = document.getElementById('printableCard')
  const imageSettings = { quality: 1 }
  const url = await htmlToImage.toJpeg(element, imageSettings)
  const img = document.createElement('img')
  img.src = url
  const image = await new Promise((resolve) => {
    img.onload = () => {
      htmlToImage.toJpeg(element, imageSettings).then((dataUrl) => {
        resolve(dataUrl)
      })
    }
  })
  await download(image, 'giftMonero.png')
  return true
}
</script>

<style lang="sass" scoped>
</style>
