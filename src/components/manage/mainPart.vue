<template>
  <div
    class="row justify-center align-center q-mt-xl"
  >
    <q-tabs
      v-model="tab"
      class="q-mt-sm col-md-11 tabs"
      style="border-radius: 0px; border-top-right-radius: 10px; border-top-left-radius: 10px;"
    >
      <q-tab
        name="incomplete"
        icon="unpublished"
        label="Incomplete"
      />
      <q-tab
        name="funded"
        icon="done_all"
        label="Funded"
      />
    </q-tabs>
    <q-tab-panels
      v-model="tab"
      class="backgroundPanel no-margin no-padding"
    >
      <q-tab-panel
        name="funded"
        class="backgroundPanel no-margin no-padding"
      >
        <fundedCards />
      </q-tab-panel>
      <q-tab-panel
        name="incomplete"
        class="backgroundPanel no-margin no-padding"
      >
        <unfundedCards />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import unfundedCards from '@/components/manage/unfundedCards.vue'
import fundedCards from '@/components/manage/fundedCards.vue'
const tab = ref('incomplete')
</script>

<style lang="sass" scoped>
.backgroundPanel
  background: none
.tabs
  color: white
  background: $secondary
</style>
