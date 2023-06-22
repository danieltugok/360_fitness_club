<script setup lang="ts">

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%'
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%'
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%'
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%'
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%'
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%'
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%'
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%'
  }
]
</script>

<template>
  <main>
    <!-- <h1>{{ $t("message") }}</h1> -->

    <div class="q-px-lg q-py-md bg-grey-9 text-white">
      <q-timeline dark color="secondary">
        <q-timeline-entry heading>Cardapio</q-timeline-entry>

        <q-timeline-entry title="Refeicao 1" subtitle="6am" avatar="https://cdn.quasar.dev/img/avatar5.jpg">
          <!-- <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div> -->
          <q-card flat bordered class="my-card bg-blue q-mb-sm">
            <q-card-section>
              <div class="row items-center no-wrap">
                <div class="col-3 q-mr-md">
                  <q-img class="rounded-borders" src="https://cdn.quasar.dev/img/parallax2.jpg" />
                </div>
                <div class="col-7">
                  <div class="text-h6">Carboidratos 01</div>
                  <div class="text-subtitle2">Porcao 1</div>
                </div>

                <div class="col-auto">
                  <q-btn color="white" round flat icon="mdi-autorenew">
                    <q-menu cover auto-close>
                      <q-list>
                        <q-item clickable>
                          <q-item-section>Remove Card</q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section>Send Feedback</q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section>Share</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-btn>
                </div>
              </div>
            </q-card-section>

            <q-card-section>
              <div class="row items-start example-container">
                <div class="example-cell col-10" tabindex="0">Cereal 0 Sugar</div>
                <div class="example-cell col-2" tabindex="0">35g</div>
              </div>
            </q-card-section>
          </q-card>

          <q-card flat bordered class="my-card bg-blue q-mb-sm">
            <q-card-section>
              <div class="row items-center no-wrap">
                <!-- <div class="col-3 q-mr-md">
                  <q-img class="rounded-borders" src="https://cdn.quasar.dev/img/parallax2.jpg" />
                </div> -->
                <div class="col-7">
                  <div class="text-h6">Carboidratos 01</div>
                  <div class="text-subtitle2">Porcao 1</div>
                </div>

                <div class="col-auto">
                  <q-btn color="white" round flat icon="mdi-autorenew">
                    <q-menu cover auto-close>
                      <q-list>
                        <q-item clickable>
                          <q-item-section>Remove Card</q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section>Send Feedback</q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section>Share</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-btn>
                </div>
              </div>
            </q-card-section>

            <q-card-section>
              <div class="row">
                <div class="col-10 text-h4" tabindex="0">Cereal 0 Sugar</div>

                <div class="col-2 text-h4" tabindex="0">
                  <q-chip outline color="white" text-color="white">
                    35g
                  </q-chip>
                </div>
              </div>
            </q-card-section>
          </q-card>



        </q-timeline-entry>

        <q-timeline-entry title="Event Title" subtitle="February 21, 1986" icon="delete">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry heading>November, 2017</q-timeline-entry>

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986" color="orange" icon="done_all">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </div>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </main>
</template>
