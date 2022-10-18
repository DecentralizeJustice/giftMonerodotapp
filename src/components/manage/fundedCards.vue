<template>
  <div
    class="row justify-center align-center no-margin"
    :class="{'q-my-lg': $q.screen.gt.sm, 'q-mt-xl': $q.screen.gt.sm}"
  >
    <div
      class=" justify-center col-12 col-md-11 "
    >
      <q-card
        flat
        style="border-radius: 0px; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px;"
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
                v-if="$q.screen.gt.sm"
                no-caps
                size="20px"
                class="q-my-sm col-12"
                :color="getButtonColor(index)"
                :label="`Funded Card ${index + 1}`"
                @click="model = index"
              />
              <q-btn
                v-if="$q.screen.lt.md"
                no-caps
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
              <div
                v-if="$q.screen.gt.sm"
                class="col col-md-6 q-pa-sm"
              >
                <displayCardInfo :cardinfoobject="properProp" />
              </div>
              <div
                class="col col-md-6 text-center"
                :class="{ 'q-pa-sm': $q.screen.gt.sm }"
              >
                <q-btn
                  v-if="$q.screen.lt.md"
                  label="Preview Card"
                  color="primary"
                  class="q-mt-sm"
                  @click="previewCard = true"
                />
              </div>
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
    <q-dialog
      v-model="previewCard"
      class="text-center"
    >
      <displayCardInfo :cardinfoobject="properProp" />
      <q-btn
        v-close-popup
        label="Close"
        color="red"
        class="q-mt-sm"
      />
    </q-dialog>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useCardStore } from '@/store/stagenetGiftCards.js'
import displayCardInfo from '@/components/create/customize/displayCardInfo.vue'
const previewCard = ref(false)
const model = ref(0)
const store = useCardStore()
const incompleteCards = store.fundedCards
function getButtonColor (index) {
  if (index === model.value) { return 'primary' }
  return 'secondary'
}
let properProp = ''
if (incompleteCards[model.value] !== undefined) { properProp = ref(incompleteCards[model.value]) }
watch(model, () => {
  properProp.value = incompleteCards[model.value]
})
</script>

<style lang="sass" scoped>
</style>
