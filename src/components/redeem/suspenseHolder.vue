<template>
  <Suspense>
    <template #default>
      <encryptionData
        :entropy="entropy"
        :theme="theme"
        @gotCardData="gotCardData"
      />
    </template>
    <template #fallback>
      <loadingServerData />
    </template>
  </Suspense>
</template>

<script setup>
import encryptionData from '@/components/redeem/getEncryptionData.vue'
import loadingServerData from '@/components/redeem/loadingServerData.vue'
import { toRef } from 'vue'
const emit = defineEmits(['gotCardData'])
const props = defineProps({
  theme: { type: String, required: true },
  entropy: { type: Object, required: true }
})
const theme = toRef(props, 'theme')
const entropy = toRef(props, 'entropy')
function gotCardData (params) {
  emit('gotCardData', params)
}
</script>
