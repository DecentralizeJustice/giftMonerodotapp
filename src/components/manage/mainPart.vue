<template>
  <div
    class="row justify-center align-center"
    :class="{'q-my-lg': $q.screen.gt.sm, 'q-mt-xl': $q.screen.gt.sm}"
  >
    <div
      class=" justify-center col-12 col-md-8 "
    >
      <q-card
        class="my-card"
        flat
        bordered
      >
        <q-card-section
          horizontal
          class="row jusitfy-center"
          style=''
          v-if="incompleteCards.length !== 0"
        >
          <q-card-section class="col col-3 text-center row content-start" style='overflow: scroll;overflow-x: hidden;'>
            <div
              v-for="(item, index) in incompleteCards"
              :key="item"
              class="col col-12"
            >
              <q-btn
                no-caps
                size="20px"
                class="q-my-sm col-12"
                :color="getButtonColor(index)"
                :label="`Draft Card ${index + 1}`"
                @click="model = index"
              />
            </div>
          </q-card-section>
          <q-separator vertical />
          <q-card-section class="col col-9">
            <div class='row'>
            <div class="col col-md-6 q-pa-sm">
              <displayCardInfo :cardinfoobject="properProp" />
            </div>
            <div class="col col-md-6 q-pa-sm">
              <cardProgression :singleCardInfo='incompleteCards[model].card' @update-refund-address='updateRefund'/>
            </div>
          </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup>
import cardProgression from '@/components/manage/cardProgression.vue'
import { ref, watch } from 'vue'
import { useCardStore } from '@/store/stagenetGiftCards.js'
import displayCardInfo from '@/components/create/customize/displayCardInfo.vue'
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
