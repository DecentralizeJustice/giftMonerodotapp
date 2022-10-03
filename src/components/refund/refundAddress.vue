<template>
  <div class="q-pa-md">
    <div
      class="q-gutter-md"
      style="max-width: 300px"
    >
      <q-input
        v-model="text"
        label="Refund Address"
      />
    </div>
    <q-card
      class="text-white q-ma-sm flat"
      style="border-radius: 10px;"
    >
      <q-card-section
        class="bg-grey-8"
      >
        <div class="text-subtitle2">
          Secret Password: Don't Share!!!
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      refundAddress: ref('')
    }
  }
}
</script>
