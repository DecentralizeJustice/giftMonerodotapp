<template>
  <div
    class="q-pa-md"
    style="max-width: 350px"
  >
    <q-list
      bordered
      class="rounded-borders"
      style="background: #282828;color:white;"
    >
      <q-expansion-item
        expand-separator
        icon="perm_identity"
        label="Technical Questions"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item
        :content-inset-level="0.5"
        expand-separator
        icon="schedule"
        label="Postponed"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        :content-inset-level="0.5"
        expand-separator
        icon="mail"
        label="Inbox"
        caption="5 unread emails"
        default-opened
      >
        <q-expansion-item
          expand-separator
          :content-inset-level="0.5"
          icon="receipt"
          label="Receipts"
        >
          <q-expansion-item
            label="Today"
            :content-inset-level="0.5"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            label="Yesterday"
            :content-inset-level="0.5"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-expansion-item>

        <q-expansion-item
          :content-inset-level="0.5"
          expand-separator
          icon="schedule"
          label="Postponed"
        >
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup>
</script>
