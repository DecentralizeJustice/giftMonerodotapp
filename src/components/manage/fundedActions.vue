<template>
  <div class="col col-md-4 q-pa-sm text-center">
    <div>
      <q-card
        class="text-white q-ma-sm flat col col-md-5 col-10"
        style="border-radius: 10px;"
      >
        <q-card-section
          class="bg-grey-8"
        >
          <div class="q-pa-sm q-gutter-sm">
            {{ moneyInfo }}
            <q-btn
              color="green"
              label="Check Balance"
              @click="alert = true"
            />
          </div>
        </q-card-section>
      </q-card>
    </div>
    <q-dialog v-model="alert">
      <checkBalance
        :single-card-info="singleCardInfo"
        @new-balance="updateBalanceInfo"
      />
    </q-dialog>
  </div>
</template>

<script setup>
import checkBalance from '@/components/misc/checkBalance.vue'
import { defineProps, ref, toRef } from 'vue'
const props = defineProps({
  singleCardInfo: { type: Object, required: true }
})
const alert = ref(false)
const singleCardInfo = toRef(props, 'singleCardInfo')
const moneyInfo = ref('')
function updateBalanceInfo (info) {
  alert.value = false
  moneyInfo.value = info
  // blocks [1] index
}

</script>
