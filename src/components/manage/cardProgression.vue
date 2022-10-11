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
     {{value}}%
   </q-circular-progress>
   <div class='text-h6'>{{value}}% Complete</div>
   <div v-if='value === 75'>
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
       <div class="q-pa-sm q-gutter-sm" v-if='refundAddress.length !== 0'>
         <q-btn
           color="accent"
           label="Confirm"
           @click="updaterefundAddress()"
         />
       </div>
     </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, toRef, computed, ref } from 'vue'
const emit = defineEmits(['update-refund-address'])
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
const refundAddressCompleted = computed(() => { return singleCardInfo.value.refundAddress !== '' })
const isFunded = computed(() => { return singleCardInfo.value.funded })
const value = computed(() => {
  if (!refundAddressCompleted.value) { return 75 }
  if (!isFunded.value) { return 90 }
  return 100
})
</script>
