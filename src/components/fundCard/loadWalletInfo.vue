<template>
  <div class="row justify-center">
    <q-card
      class="text-white q-ma-sm"
      style="border-radius: 10px;"
    >
      <q-card-section
        class="bg-black"
      >
        <div class="text-subtitle1 text-left">
          {{walletInfo}}
        </div>
      </q-card-section>
    </q-card>
    </div>
</template>

<script setup>
import getStagenetMnemonicAndAddress from '@/assets/monero-javascript/getStagenetMnemonicAndAddress.js'
async function getInfo () {
  const result = await getStagenetMnemonicAndAddress()
  return result
}
const walletInfo = await getInfo()
</script>
