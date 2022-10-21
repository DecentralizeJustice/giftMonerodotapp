<template>
  <Suspense>
    <template #default>
      <encryptionData :cardinfoobject="desiredValue" />
    </template>
    <template #fallback>
      <loadingServerData />
    </template>
  </Suspense>
</template>

<script setup>
import encryptionData from '@/components/redeem/getEncryptionData.vue'
import loadingServerData from '@/components/redeem/loadingServerData.vue'
/* import { defineProps, toRef } from 'vue'
const props = defineProps({
  cardinfoobject: { type: Object, required: true }
})
const desiredValue = toRef(props, 'cardinfoobject') */
</script>
