<template>
  <div
    class="row justify-center align-center"
    :class="{'q-my-lg': $q.screen.gt.sm}"
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
        >
          <q-card-section class="col col-3 justify-center text-center row" style='max-height:40vh;overflow: scroll;overflow-x: hidden;'>
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
            {{ incompleteCards[model] }}
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useCardStore } from '@/store/stagenetGiftCards.js'
const model = ref(0)
const store = useCardStore()
const incompleteCards = store.incompleteCards
function getButtonColor (index) {
  if (index === model.value) { return 'primary' }
  return 'secondary'
}
</script>

<style lang="sass" scoped>
</style>
