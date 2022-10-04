<template>
  <Suspense>
        <template #default>
          <loadWalletInfo/>
        </template>
        <template #fallback>
          <div>Loading Wallet Info</div>
        </template>
  </Suspense>
</template>

<script setup>
import loadWalletInfo from '@/components/fundCard/loadWalletInfo.vue'

</script>
