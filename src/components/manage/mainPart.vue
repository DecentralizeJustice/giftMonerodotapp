<template>
  <q-tabs
    v-model="tab"
    class="text-teal"
  >
    <q-tab
      name="incomplete"
      icon="mail"
      label="Incomplete"
    />
    <q-tab
      name="funded"
      icon="alarm"
      label="Funded"
    />
  </q-tabs>
  <q-tab-panels
    v-model="tab"
    animated
    swipeable
    transition-prev="jump-up"
    transition-next="jump-up"
  >
    <q-tab-panel name="funded">
      Have Bank
    </q-tab-panel>
    <q-tab-panel name="incomplete">
      <unfundedCards />
    </q-tab-panel>
  </q-tab-panels>
</template>
<script setup>
import { ref } from 'vue'
import unfundedCards from '@/components/manage/unfundedCards.vue'
const tab = ref('incomplete')
</script>

<style lang="sass" scoped></style>
