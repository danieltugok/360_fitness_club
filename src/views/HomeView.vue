<script setup lang="ts">
  import { ref } from 'vue';

  const maximizedToggle = ref(true);
  const dialog = ref(false);
  const choseMeal: null | Object = ref(null);

  const clickMeal = (meal: object) => {
    dialog.value = true;
    choseMeal.value = meal;
  }

  const getCardColorTheme = (macroId: number, reference: string) => {
    let bgColor: string = '',
      icon: string = '';

    switch (macroId) {
      case 1:
        bgColor = 'orange';
        icon = 'noodles';
        break;
      case 2:
        bgColor = 'red';
        icon = 'food-drumstick';
        break;
      case 3:
        bgColor = 'blue';
        icon = 'peanut-outline';
        break;
      case 4:
        bgColor = 'green';
        icon = 'food-apple-outline';
        break;
      default:
        bgColor = 'white';
        icon = 'noodles';
        break;
    }

    if (reference === 'bg') return `${bgColor}`;
    else if (reference === 'icon') return `mdi-${icon}`;
    else return '';
  }

  const meals = [
    {
      "time": "6am",
      "alimentos": [
        {
          "id": 2,
          "name": "Claras",
          "macro": {
            "id": 2,
            "name": "Proteina 1",
          },
          "porcao": .5,
          "unidade": "un",
          "quantidade": 3
        },
        {
          "id": 2,
          "name": "Queijo Cotagge",
          "macro": {
            "id": 2,
            "name": "Proteina 1",
          },
          "porcao": .5,
          "unidade": "gr",
          "quantidade": 50
        },
        {
          "id": 1,
          "name": "Gema",
          "macro": {
            "id": 3,
            "name": "Gorduras",
          },
          "porcao": 1,
          "unidade": "un",
          "quantidade": 1
        },
        {
          "id": 1,
          "name": "Amendoas",
          "macro": {
            "id": 3,
            "name": "Gorduras",
          },
          "porcao": .5,
          "unidade": "gr",
          "quantidade": 6
        },
        {
          "id": 1,
          "name": "pao de forma",
          "macro": {
            "id": 1,
            "name": "Carboidratos 2",
          },
          "porcao": 1,
          "unidade": "un",
          "quantidade": 2
        },
        {
          "id": 1,
          "name": "Morango",
          "macro": {
            "id": 4,
            "name": "Frutas",
          },
          "porcao": .5,
          "unidade": "gr",
          "quantidade": 125
        },
      ]
    },
    {
      "time": "8:30am",
      "alimentos": [
        {
          "id": 2,
          "name": "frango desfiado",
          "macro": {
            "id": 2,
            "name": "Proteina 1",
          },
          "porcao": .5,
          "unidade": "un",
          "quantidade": 3
        },
        {
          "id": 2,
          "name": "Queijo Cotagge",
          "macro": {
            "id": 2,
            "name": "Proteina 1",
          },
          "porcao": .5,
          "unidade": "gr",
          "quantidade": 50
        },
        {
          "id": 1,
          "name": "Gema",
          "macro": {
            "id": 3,
            "name": "Gorduras",
          },
          "porcao": 1,
          "unidade": "un",
          "quantidade": 1
        },
        {
          "id": 1,
          "name": "Amendoas",
          "macro": {
            "id": 3,
            "name": "Gorduras",
          },
          "porcao": .5,
          "unidade": "gr",
          "quantidade": 6
        },
        {
          "id": 1,
          "name": "pao de forma",
          "macro": {
            "id": 1,
            "name": "Carboidratos 2",
          },
          "porcao": 1,
          "unidade": "un",
          "quantidade": 2
        },
        {
          "id": 1,
          "name": "Morango",
          "macro": {
            "id": 4,
            "name": "Frutas",
          },
          "porcao": .5,
          "unidade": "gr",
          "quantidade": 125
        },
      ]
    },
  ];

</script>

<template>

<q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card :class="`bg-${getCardColorTheme(choseMeal.macro.id, 'bg')}-1 text-black`">
        <q-bar>
          <span class="text-h6">{{ choseMeal.macro.name }}</span>
          <span class="text-subtitle1">Porcao {{ choseMeal.porcao }}</span>          
          <q-space />
          <!-- <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" class="bg-white text-primary">Minimize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary">Maximize</q-tooltip>
          </q-btn> -->
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>
        <q-card-section>
          <div class="row">
            <div class="text-h6">{{ choseMeal.name }}</div>
            <q-space />
            <div class="text-subtitle1">Quantidade: {{ choseMeal.quantidade }} {{ choseMeal.unidade }}</div>
          </div>
          {{ choseMeal }}
        </q-card-section>
        <q-card-section class="q-pt-none">
          
        </q-card-section>
      </q-card>
    </q-dialog>

  <main> 
    <div class="q-px-lg q-py-md bg-grey-2 text-dark">
      <q-timeline color="secondary">
        <q-timeline-entry heading>{{ $t("cardapio") }}</q-timeline-entry>

        <!-- <q-timeline-entry title="Refeicao 1" subtitle="6am" icon="mdi-clock-outline"> -->
        <q-timeline-entry
          :title="`Refeicao ${index + 1}`" 
          :subtitle="meal.time" 
          v-for="(meal, index) in meals"
          :key="meal.time"
        >
          <q-card
            flat
            bordered 
            class="my-card q-mb-sm" 
            v-for="item in meal.alimentos" 
            :key="item.id"
            :class="`bg-${getCardColorTheme(item.macro.id, 'bg')}-1`"            
            @click="clickMeal(item)"
          >
            <q-card-section>
              <div class="row items-center no-wrap">
                <div class="col-2 q-mr-xs">
                  <q-icon :name="getCardColorTheme(item.macro.id, 'icon')" size="xl" :color="getCardColorTheme(item.macro.id, 'bg')" />
                </div>
                <div class="row col-10">
                  <div class="full-width row justify-between items-center content-center">
                    <div class="text-caption text-grey-7 col-auto">{{item.macro.name}}</div>
                    <div class="text-caption text-grey-7 col-auto">Porcao {{item.porcao}}</div>
                  </div>
                  <div class="full-width row justify-between items-center content-center">
                    <div class="col-auto text-h6" tabindex="0">{{ item.name }}</div>
                    <div class="col-auto text-h4" tabindex="0">
                      <q-chip size="md" class="q-mx-none">
                        <q-avatar color="red" text-color="white" size="md">{{item.quantidade}}</q-avatar>
                        <span>{{item.unidade}}</span>
                      </q-chip>
                    </div>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </main>
</template>
