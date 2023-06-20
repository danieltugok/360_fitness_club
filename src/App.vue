<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { useQuasar } from 'quasar'

  const $q = useQuasar()

  console.log('>> ', $q) // true, false
  // get status
  console.log($q.dark.isActive) // true, false

  // get configured status
  console.log($q.dark.mode) // "auto", true, false

  // set status
  // $q.dark.set(true) // or false or "auto"

  // toggle
  // $q.dark.toggle()


</script>

<template>
  <RouterView />
</template>
