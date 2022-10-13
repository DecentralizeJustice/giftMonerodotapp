<template>
  <div
    class="row justify-center align-center"
    :class="{'q-my-lg': $q.screen.gt.sm, 'q-mt-xl': $q.screen.gt.sm}"
  >
    <div
      class=" justify-center col-12 col-md-11 "
    >
      <q-card
        class="my-card"
        flat
        bordered
      >
        <q-card-section
          v-if="incompleteCards.length !== 0"
          horizontal
          class="row jusitfy-center"
          style=""
        >
          <q-card-section
            class="col col-3 text-center row content-start"
            style="overflow: scroll;overflow-x: hidden;"
          >
            <div
              v-for="(item, index) in incompleteCards"
              :key="item"
              class="col col-12"
            >
              <q-btn
                no-caps
                v-if='$q.screen.gt.sm'
                size="20px"
                class="q-my-sm col-12"
                :color="getButtonColor(index)"
                :label="`Draft Card ${index + 1}`"
                @click="model = index"
              />
              <q-btn
                no-caps
                v-if='$q.screen.lt.md'
                size="20px"
                class="q-my-sm col-12"
                :color="getButtonColor(index)"
                :label="`Card ${index + 1}`"
                @click="model = index"
              />
            </div>
          </q-card-section>
          <q-separator vertical />
          <q-card-section class="col col-9">
            <div class="row">
              <div class="col col-md-6 q-pa-sm" v-if='$q.screen.gt.sm'>
                <displayCardInfo :cardinfoobject="properProp" />
              </div>
              <div class="col col-md-6 text-center" :class="{ 'q-pa-sm': $q.screen.gt.sm }">
                <cardProgression
                  :single-card-info="incompleteCards[model].card"
                  @update-refund-address="updateRefund"
                />
                <q-btn label="Preview Card" color="primary" @click="previewCard = true" class='q-mt-sm'
                v-if='$q.screen.lt.md'/>
              </div>
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>
  <q-dialog v-model="previewCard" class='text-center'>
        <displayCardInfo :cardinfoobject="properProp" />
        <q-btn label="Close" color="red" v-close-popup />
  </q-dialog>
</template>
<script setup>
import cardProgression from '@/components/manage/cardProgression.vue'
import { ref, watch } from 'vue'
import { useCardStore } from '@/store/stagenetGiftCards.js'
import displayCardInfo from '@/components/create/customize/displayCardInfo.vue'
const previewCard = ref(false)
const model = ref(0)
const store = useCardStore()
const incompleteCards = store.incompleteCards
function getButtonColor (index) {
  if (index === model.value) { return 'primary' }
  return 'secondary'
}
let properProp = ''
if (incompleteCards[model.value] !== undefined) { properProp = ref(incompleteCards[model.value].card) }
watch(model, () => {
  properProp.value = incompleteCards[model.value].card
})
function updateRefund (address) {
  store.addrefundToCard(model.value, address)
}
</script>

<style lang="sass" scoped>
</style>
