<template>
  <div class="text-center q-mt-xl">
    <div class="text-center">
      <router-link
        :to="{ name: 'createCard'}"
        style="text-decoration: none; color: inherit;"
      >
        <q-btn
          color="secondary"
          label="Create Card!"
          size="lg"
          style="color: white;"
          padding="md"
        />
      </router-link>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="sass" scoped>
</style>
