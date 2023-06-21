<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'

  import { useQuasar } from 'quasar'

  const $q = useQuasar()

  console.log('>> ', $q) 
  console.log($q.dark.isActive)
  console.log($q.dark.mode) // "auto", true, false
  // set status
  // $q.dark.set(true) // or false or "auto"
  // toggle
  // $q.dark.toggle()
</script>

<template>
  <RouterView />
</template>
