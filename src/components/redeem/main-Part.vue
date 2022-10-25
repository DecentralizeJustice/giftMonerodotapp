<!-- eslint-disable vue/v-on-event-hyphenation -->
<template>
  <enterCardInfo
    v-if="theme === ''"
    @cardCompleted="caredEntered"
  />
  <suspenseHolder
    v-if="theme !== ''"
    :entropy="entropy"
    :theme="theme"
    @gotCardData="gotCardData"
  />
  <redeemActionPanel
    v-if="cardData !== {} && theme !== ''"
    :cardData1="cardData"
  />
</template>
<script setup>
import enterCardInfo from '@/components/redeem/enterCardInfo.vue'
import suspenseHolder from '@/components/redeem/suspenseHolder.vue'
import redeemActionPanel from '@/components/redeem/redeemActionPanel.vue'
import { ref } from 'vue'
const entropy = ref({})
const theme = ref('')
const cardData = ref({})
function caredEntered (entropyParam, themeParam) {
  entropy.value = entropyParam
  theme.value = themeParam
}
function gotCardData (params) {
  cardData.value = params
}
</script>

<style lang="sass" scoped>
</style>
