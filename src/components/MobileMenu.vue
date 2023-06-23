<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
const route = useRouter();
const menuList = [
  {
    icon: "mdi-food-variant",
    to: "/",
    label: "Daily Meal", 
  },
  {
    icon: "mdi-dumbbell",
    to: "/weekly-workout",
    exact: true,
    label: "Weekly Workout", 
  },
  {
    icon: "mdi-food-fork-drink",
    to: "/week-meal-plan",
    exact: true,
    label: "Week Meal Plan", 
  },
  {
    icon: "mdi-radar",
    to: "/sucess-tracker",
    exact: true,
    label: "Sucess Tracker", 
  },
]

</script>

<template>
  <q-tabs
    dense
    class="tabs bg-grey-2 q-border text-dark"
    no-caps
    :breakpoint="8"
    active-color="primary"
    align="justify"
  >
    <div class="full-width row justify-between items-center content-center">
      <q-route-tab 
        v-for="menu in menuList"
        :key="menu.label"
        :icon="menu.icon"
        :to="menu.to"
        exact
        :label="menu.label"
        class="col-3"
        :class="{
          'item-menu-main': true,
        }"
      />

    </div>
  </q-tabs>
  
</template>

<style lang="scss">
.tabs{
  border-top: 1px solid $grey-5;
}

.q-router-link--active {
  .q-tab__label {
    display: none;
  }
  .q-tab__icon {
    width: 32px;
    height: 32px;
    font-size: 32px;
  }  
}

.q-tab__label {
  font-size: 12px;
  line-height: 1.5em;
  font-weight: 500;
}

</style>
