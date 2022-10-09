<template>
  <div
    class="justify-center full-height full-width text-center row"
    :class="{'justify-around': $q.screen.gt.sm}"
  >
    <div class="col col-12 col-md-6">
      <displayCardInfo :cardinfoobject="desiredValue" />
    </div>
    <div class="col col-12 q-mt-md">
      <q-btn
        icon="download"
        color="black"
        text-color="white"
        label="Download"
        @click="down"
      />
    </div>
  </div>
</template>
<script setup>
import displayCardInfo from '@/components/customize/displayCardInfo.vue'
import * as htmlToImage from 'html-to-image'
import download from 'downloadjs'
import { defineProps, reactive } from 'vue'
const props = defineProps({
  cardinfoobject: { type: Object, required: true }
})
const desiredValue = reactive(props).cardinfoobject
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
.moneroLogo
  width: 100%
</style>
