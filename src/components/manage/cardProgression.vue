<template>
  <div class="col col-md-4 q-pa-sm text-center">
    <q-circular-progress
      show-value
      font-size="12px"
      :value="value"
      size="100px"
      :thickness="0.22"
      color="primary"
      track-color="grey-3"
      class="q-ma-md"
    >
      {{ value }}%
    </q-circular-progress>
    <div class="text-h6">
      {{ value }}% Complete
    </div>
    <div v-if="value === 75">
      <div
        class="col-md-8 col-12"
        :class="{'q-pa-sm q-mt-lg': $q.screen.lt.md,
                 'q-pa-sm q-mt-md': $q.screen.gt.sm}"
      >
        <q-input
          v-model="refundAddress"
          label="Refund Address"
          filled
          type="textarea"
        />
      </div>
      <q-card
        class="text-white q-ma-sm col-12 col-md-8"
        style="border-radius: 10px;"
      >
        <q-card-section
          class="bg-black"
        >
          <div class="text-subtitle1 text-left">
            Enter the address you would like to have the monero refunded to in case the gift recipeint does not access it in time.
          </div>
        </q-card-section>
      </q-card>
      <q-card
        class="text-white q-ma-sm flat col col-md-5 col-10"
        style="border-radius: 10px;"
      >
        <q-card-section
          class="bg-grey-8"
        >
          <div class="text-subtitle2 text-center">
            Here are some donation options:
          </div>
          <div class="q-pa-sm q-gutter-sm">
            <q-btn
              color="primary"
              label="Rhino Fuacet"
              @click="donateToRhinoStagenet()"
            />
          </div>
        </q-card-section>
      </q-card>
      <div
        v-if="refundAddress.length !== 0"
        class="q-pa-sm q-gutter-sm"
      >
        <q-btn
          color="accent"
          label="Confirm"
          @click="updaterefundAddress()"
        />
      </div>
    </div>
    <div v-if="value === 90">
      <div class="row justify-center q-mt-sm">
        <q-card
          class="text-white col col-md-6 col-12 text-left"
          style="border-radius: 10px;"
        >
          <q-card-section
            class="bg-secondary  q-pa-md row justify-center "
            style="white-space: normal"
          >
            <div class="text-center text-h6 text-white q-mb-md col-12">
              Send Stagenet Monero Here to Load Gift Card:
            </div>
            <!-- <div class="text-weight-medium text-white col-12 my-card">
               {{ depositAddress }}
             </div> -->
            <div class="col col-12 text-center q-mt-md">
              <canvas
                id="canvas"
                style=""
              />
            </div>
            <div class="col col-12 q-mt-md text-center">
              <q-btn
                no-caps
                color="primary"
                icon="file_copy"
                label="Copy Address"
                @click="copy"
              />
            </div>
            <div class="col col-12 q-mt-md text-center">
              <q-btn
                no-caps
                color="accent"
                label="Confirm Deposit"
                @click="confirmDeposit()"
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <q-dialog v-model="alert">
      <checkDeposit
        :single-card-info="singleCardInfo"
        @wallet-funded="walletFunded()"
      />
    </q-dialog>
  </div>
</template>

<script setup>
import checkDeposit from '@/components/misc/checkDeposit.vue'
import { defineProps, defineEmits, toRef, computed, ref, onUpdated, onMounted } from 'vue'
import { copyToClipboard } from 'quasar'
import QRCode from 'qrcode'
const alert = ref(false)
const emit = defineEmits(['update-refund-address', 'wallet-funded'])
const props = defineProps({
  singleCardInfo: { type: Object, required: true }
})
const singleCardInfo = toRef(props, 'singleCardInfo')
const refundAddress = ref('')
function donateToRhinoStagenet () {
  refundAddress.value = '73a4nWuvkYoYoksGurDjKZQcZkmaxLaKbbeiKzHnMmqKivrCzq5Q2JtJG1UZNZFqLPbQ3MiXCk2Q5bdwdUNSr7X9QrPubkn'
}
function updaterefundAddress () {
  emit('update-refund-address', refundAddress.value)
}
function walletFunded () {
  alert.value = false
  emit('wallet-funded')
}
const depositAddress = computed(() => { return singleCardInfo.value.depositAddress })
const refundAddressCompleted = computed(() => { return singleCardInfo.value.refundAddress !== '' })
const isFunded = computed(() => { return singleCardInfo.value.funded })
const value = computed(() => {
  if (!refundAddressCompleted.value) { return 75 }
  if (!isFunded.value) { return 90 }
  return 100
})
function confirmDeposit () {
  alert.value = true
}
function createQRCode () {
  const canvas = document.getElementById('canvas')
  if (canvas === null) { return }
  QRCode.toCanvas(canvas, depositAddress.value, { errorCorrectionLevel: 'L' }, function (error) {
    if (error) console.error(error)
  })
}
onUpdated(() => {
  createQRCode()
})
onMounted(() => {
  createQRCode()
})
function copy () {
  copyToClipboard(depositAddress.value)
    .then(() => {
    // success!
    })
    .catch(() => {
    // fail
    })
}
</script>
