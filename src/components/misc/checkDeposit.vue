<template>
  <q-card class="q-pa-md">
    <q-card-section class="text-h6">
      <div
        v-if="!walletConnected"
        class="text-center"
      >
        <div class="text-center">
          <q-spinner-rings
            color="primary"
            size="6em"
          />
          <q-tooltip :offset="[0, 8]">
            QSpinnerRings
          </q-tooltip>
        </div>
        Connecting To Nodes...
      </div>
      <div
        v-if="walletConnected"
        class="text-center"
      >
        <q-icon
          name="done"
          color="green"
          size="32px"
        />
        <br>Wallet Connected
      </div>
    </q-card-section>

    <q-card-section
      v-if="walletConnected"
      class="text-h6"
    >
      <div
        v-if="percentSynced !== 1"
        class="text-center"
      >
        <div class="text-center">
          <q-spinner-rings
            color="primary"
            size="6em"
          />
          <q-tooltip :offset="[0, 8]">
            QSpinnerRings
          </q-tooltip>
        </div>
        Syncing Wallet
      </div>
      <div
        v-if="percentSynced === 1"
        class="text-center"
      >
        <q-icon
          name="done"
          color="green"
          size="32px"
        />
        <br>Wallet Synced
      </div>
    </q-card-section>

    <q-card-section
      v-if="percentSynced === 1"
      class="text-h6"
    >
      <div
        v-if="balance.toString() === '0'"
        class="text-center"
      >
        <q-icon
          name="close"
          color="red"
          size="32px"
        />
        <br>
        Wallet Empty
      </div>
      <div
        v-if="balance.toString() !== '0'"
        class="text-center"
      >
        <q-icon
          name="done"
          color="green"
          size="32px"
        />
        <br>
        Wallet Funded!
      </div>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn
        v-if="walletConnected && percentSynced === 1 && balance.toString() === '0'"
        label="Check Again"
        color="green"
        @click="confirmDeposit()"
      />
      <q-btn
        v-close-popup
        label="Cancel"
        color="red"
      />
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
const balance = ref(0)
async function confirmDeposit () {
  walletConnected.value = false
  percentSynced.value = 0
  balance.value = 0
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
      // blockHeight.value = height
    }
  }())
  await walletFull.startSyncing(10000000)
  console.log(' ')
  const unlockedBalance = await walletFull.getUnlockedBalance()
  const blockTillFundsUnlock = await walletFull.getNumBlocksToUnlock()
  const totalBalance = await walletFull.getBalance()
  balance.value = totalBalance
  console.log('unlockedBalance: ' + unlockedBalance.toString())
  console.log('total balance:  ' + totalBalance)
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
