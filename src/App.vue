<!-- <template>
  <router-view />
</template>

<script>
import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from './components/LandingPage.vue';
import PatientRegistration from './components/PatientRegistration.vue';
import PatientLogin from './components/PatientLogin.vue';
import DoctorRegistration from './components/DoctorRegistration.vue';
import DoctorLogin from './components/DoctorLogin.vue';
// import HomePage from './views/PatientDashboard/HomePage.vue';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/signup', component: PatientRegistration },
  { path: '/login', component: PatientLogin },
  { path: '/doctor-signup', component: DoctorRegistration },
  { path: '/doctor-login', component: DoctorLogin },
  // { path: '/patient-dashboard', component: HomePage },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default {
  setup() {
    return {
      router,
    };
  },
};
</script> -->



<!-- <template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script> -->


<template>
  <div :class="{ 'dark': darkMode }">
    <router-view />
  </div>
</template>

<script>
import { ref, provide } from 'vue';

export default {
  setup() {
    const darkMode = ref(false);
    provide('darkMode', darkMode);
    return { darkMode };
  }
};
</script>

<style>
.dark {
  background-color: #121212  ;
  color: white;
}
</style>
