<template>
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Wallet Connected: {{walletConnected}}
        </q-card-section>
        <q-card-section class="q-pt-none">
          Percent Done: {{percentSynced}}
        </q-card-section>
        <q-card-section class="q-pt-none">
          Current Blockheight: {{blockHeight}}
        </q-card-section>
        <q-card-section class="q-pt-none">
          Balance: {{balance}}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>

</template>

<script setup>
import { onMounted, toRef, ref } from 'vue'
const monerojs = require('monero-javascript')
const node = 'https://stagenet.xmr.ditatompel.com:443'
const props = defineProps({
  singleCardInfo: { type: Object, required: true }
})
const card = toRef(props, 'singleCardInfo')
const mnemonic = card.value.mnemonic
const restoreHeight = card.value.startSearchHeight
const walletConnected = ref(false)
const percentSynced = ref(0)
const blockHeight = ref(0)
const balance = ref(0)
async function confirmDeposit () {
  const walletFull = await monerojs.createWalletFull({
    networkType: 'stagenet',
    password: '0',
    serverUri: node,
    restoreHeight,
    mnemonic
  })
  const isConnected = await walletFull.isConnectedToDaemon()
  walletConnected.value = isConnected
  console.log('wallet connection status: ' + isConnected)
  await walletFull.sync(new class extends monerojs.MoneroWalletListener {
    onSyncProgress (height, startHeight, endHeight, percentDone, message) {
      percentSynced.value = percentDone
      blockHeight.value = height
    }
  }())
  await walletFull.startSyncing(10000000)
  console.log(' ')
  const unlockedBalance = await walletFull.getUnlockedBalance()
  const blockTillFundsUnlock = await walletFull.getNumBlocksToUnlock()
  const totalBalance = await walletFull.getBalance()
  balance.value = totalBalance
  console.log('unlockedBalance: ' + unlockedBalance.toString())
  // console.log('total balance:  ' + totalBalance)
  console.log('blocks for funds to unlock: ' + blockTillFundsUnlock[1])
}
onMounted(() => {
  confirmDeposit()
})
</script>
<style lang="sass" scoped>
.q-dialog__backdrop
  backdrop-filter: blur(7px)
</style>
