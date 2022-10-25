<template>
  <div class="q-pa-md row justify center q-gutter-md">
    <q-card class="my-card col c-6">
      <q-card-section>
        Checking Wallet Balance
      </q-card-section>
    </q-card>
  </div>
  <q-dialog v-model="checkingForBalance">
    <checkBalance :single-card-info="cardData" />
  </q-dialog>
</template>

<script setup>
import { toRef, ref } from 'vue'
import checkBalance from '@/components/misc/checkBalance.vue'
const props = defineProps({
  // theme: { type: String, required: true },
  cardData1: { type: Object, required: true }
})
const checkingForBalance = ref(true)
const cardData = toRef(props, 'cardData1')
console.log(cardData)
</script>
