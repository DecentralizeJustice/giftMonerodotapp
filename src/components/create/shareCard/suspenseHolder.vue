<template>
  <Suspense>
    <template #default>
      <shareCard :cardinfoobject="desiredValue" />
    </template>
    <template #fallback>
      <loadAnimation />
    </template>
  </Suspense>
</template>

<script setup>
import shareCard from '@/components/create/shareCard/shareCard.vue'
import loadAnimation from '@/components/create/shareCard/loadAnimation.vue'
import { defineProps, toRef } from 'vue'
const props = defineProps({
  cardinfoobject: { type: Object, required: true }
})
const desiredValue = toRef(props, 'cardinfoobject')
</script>
