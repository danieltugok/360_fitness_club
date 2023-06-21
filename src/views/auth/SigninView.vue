<script lang="ts" setup>
  import { ref } from 'vue'
  import { version } from '../../../package.json'
  // import { signinService } from '@/services/auth.service';
  import { useRouter } from 'vue-router';

  const email = ref<string>('');
  const password = ref<string>('');
  const showPassword = ref<boolean>(false);

  const router = useRouter();


  const onSubmit = async () => {
    console.log('>> ', email.value, password.value);
    router.push({name: 'Main'});

    // try {
    //   const {data, status} = await signinService(email.value, password.value);
    //   if(status === 200 || status === 201) {
    //     localStorage.setItem('token', data.token);
    //     localStorage.setItem('user', JSON.stringify(data.user));
    //     // router.push({name: 'Home'});
    //   }
    // } catch (error) {
    //   console.log(error);
      
    // }
  }
</script>


<template>
  <q-page padding class="flex flex-center">
    <q-form @submit="onSubmit" class="full-width">      
      <q-card flat>
        <q-card-section>
          <h6 class="text-h6 flex flex-center">Login</h6>
        </q-card-section>
        <q-card-section>
          <q-input v-model="email" type="email" label="Email" outlined :rules="[(val:string) => !!val || 'Required Field']" />
          <q-input 
            v-model="password"
            :type="showPassword ? 'text' : 'password'" 
            label="Password" 
            outlined 
            :rules="[(val:string) => !!val || 'Required Field']" 
            @keyup.enter="onSubmit"
          >
            <template #append>
              <q-icon 
                :name="showPassword ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="showPassword = !showPassword"
              />
            </template>
          </q-input>
          <RouterLink to="home" class="text-right">Forget the password?</RouterLink>
          <div>
            <q-btn
              label="Submit"
              type="submit"
              color="primary"
              class="full-width"
              no-caps
              unelevated
              size="lg"
            />
          </div>
        </q-card-section>
      </q-card>
      <div class="text-center q-mt-md text-caption">
        Doesnt have an account? <RouterLink to="home">Register now</RouterLink>
        <br>
        @2023 - 360 Fitness Club v.{{ version }}
      </div>
    </q-form>
  </q-page>
</template>

