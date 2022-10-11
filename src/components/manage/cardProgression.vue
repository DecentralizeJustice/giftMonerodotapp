<template>
  <div class="col col-md-4 q-pa-sm">
    {{refundAddressCompleted}}
    {{singleCardInfo}}
    {{isFunded}}
  </div>
</template>

<script setup>
import { defineProps, toRef, computed } from 'vue'
const props = defineProps({
  singleCardInfo: { type: Object, required: true }
})
const singleCardInfo = toRef(props, 'singleCardInfo')
const refundAddressCompleted = computed(() => { return singleCardInfo.value.refundAddress !== '' })
const isFunded = computed(() => { return singleCardInfo.value.funded })
</script>
