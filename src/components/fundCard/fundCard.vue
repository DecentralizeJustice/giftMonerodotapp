<template>
  <Suspense>
    <template #default>
      <loadWalletInfo />
    </template>
    <template #fallback>
      <loadAnimation />
    </template>
  </Suspense>
</template>

<script setup>
import loadWalletInfo from '@/components/fundCard/loadWalletInfo.vue'
import loadAnimation from '@/components/fundCard/loadAnimation.vue'

</script>
