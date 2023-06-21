<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
const route = useRouter();
const menuList = [
  {
    icon: "dashboard",
    to: "/",
    label: "Daily Meal", 
  },
  {
    icon: "dashboard",
    to: "/about",
    exact: true,
    label: "Daily Workout", 
  },
  {
    icon: "dashboard",
    to: "/",
    exact: true,
    label: "Home", 
  },
  {
    icon: "dashboard",
    to: "/",
    exact: true,
    label: "Home", 
  },
]

</script>

<template>
  <q-tabs
    dense
    class="text-dark"
    no-caps
    :breakpoint="8"
    active-color="primary"
    align="justify"
  >
   <q-route-tab 
    v-for="menu in menuList"
    :key="menu.label"
    :icon="menu.icon"
    :to="menu.to"
    exact
    :label="menu.label"
    :class="{
      'item-menu-main': true,
    }"
  />
  </q-tabs>
  
</template>
