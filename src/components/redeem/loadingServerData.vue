<template>
  <div class="text-center">
    <q-card class="bg-secondary text-white text-h6 mobile-only">
      <q-card-section>
        <div>Loading Wallet Info...</div>
      </q-card-section>

      <div class="q-pb-lg">
        <q-spinner-ball
          color="primary"
          size="8em"
        />
      </div>
    </q-card>
  </div>
  <div class="row desktop-only justify-center q-mt-xl text-center">
    <q-card class="text-h6 col text-white col-4 bg-secondary">
      <q-card-section class="col col-8">
        <div>Loading Wallet Info...</div>
      </q-card-section>

      <div class="q-pb-lg col col-6">
        <q-spinner-ball
          color="primary"
          size="8em"
        />
      </div>
    </q-card>
  </div>
</template>
<script setup>
</script>

<style lang="sass" scoped>
</style>
