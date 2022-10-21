<template>
  <enterCardInfo
    v-if="theme === ''"
    @cardCompleted="caredEntered"
  />
  <suspenseHolder v-if="theme !== ''" />
</template>
<script setup>
import enterCardInfo from '@/components/redeem/enterCardInfo.vue'
import suspenseHolder from '@/components/redeem/suspenseHolder.vue'
import { ref } from 'vue'
const entropy = ref({})
const theme = ref('')
function caredEntered (entropyParam, themeParam) {
  entropy.value = entropyParam
  theme.value = themeParam
  console.log(entropy, theme)
}
</script>

<style lang="sass" scoped>
</style>
