<template>
    <q-layout view="lHh lpR lFf">
  
      <q-header class="bg-primary text-white" height-hint="98">
        <q-toolbar>
          <q-toolbar-title>
            <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" v-if="!$q.screen.lt.sm" />
            <RouterLink to="/signin" class="text-white">
              <!-- <q-avatar>
                <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
              </q-avatar> -->
              360 Fitness Club
            </RouterLink>
          </q-toolbar-title>  
          <!-- <q-btn dense flat round icon="menu" @click="toggleRightDrawer" /> -->
          <tool-bar/>
        </q-toolbar>  
        <!-- <q-tabs align="left">
          <q-route-tab to="/page1" label="Page One" />
          <q-route-tab to="/page2" label="Page Two" />
          <q-route-tab to="/page3" label="Page Three" />
        </q-tabs> -->
      </q-header>  
      <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered v-if="!$q.screen.lt.sm">
        <!-- drawer content -->
      </q-drawer>  
      <!-- <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
        <pre>{{ $q.screen }}</pre>
      </q-drawer> -->  
      <q-page-container>
        <router-view />
      </q-page-container>
  
      <q-footer class="bg-grey-8 text-white" v-if="$q.screen.lt.sm">
        <MobileMenu />
      </q-footer>
  
    </q-layout>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import MobileMenu from '../components/MobileMenu.vue'
  import ToolBar from '../components/ToolBar.vue';

  const leftDrawerOpen = ref(false);
  const rightDrawerOpen = ref(false);

  const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value
  };

  const toggleRightDrawer = () =>{
    rightDrawerOpen.value = !rightDrawerOpen.value
  };
  </script>