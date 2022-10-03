<template>
  <div class="q-pa-md">
    <div
      class="q-gutter-md"
      style="max-width: 300px"
    >
      <q-input
        v-model="text"
        label="Standard"
      />

      <q-input
        v-model="text"
        filled
        label="Filled"
      />

      <q-input
        v-model="text"
        outlined
        label="Outlined"
      />

      <q-input
        v-model="text"
        standout
        label="Standout"
      />

      <q-input
        v-model="text"
        standout="bg-teal text-white"
        label="Custom standout"
      />

      <q-input
        v-model="text"
        borderless
        label="Borderless"
      />

      <q-input
        v-model="text"
        rounded
        filled
        label="Rounded filled"
      />

      <q-input
        v-model="text"
        rounded
        outlined
        label="Rounded outlined"
      />

      <q-input
        v-model="text"
        rounded
        standout
        label="Rounded standout"
      />

      <q-input
        v-model="text"
        square
        filled
        label="Square filled"
      />

      <q-input
        v-model="text"
        square
        outlined
        label="Square outlined"
      />

      <q-input
        v-model="text"
        square
        standout
        label="Square standout"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      text: ref('')
    }
  }
}
</script>
