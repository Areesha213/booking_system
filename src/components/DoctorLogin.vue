<template>
      <MainNavbar />

    <div class="max-w-md mx-auto p-6 m-4 bg-white rounded shadow-md dark:bg-slate-700">
      <h2 class="text-2xl font-bold mb-4 text-center dark:text-white">Doctor Login</h2>
      <form @submit.prevent="login">
        <input type="text" placeholder="Email/Username" v-model="email" class="w-full p-2 border rounded mb-4" required />
        <input type="password" placeholder="Password" v-model="password" class="w-full p-2 border rounded mb-4" required />
        <div class="flex justify-between items-center mb-4">
        <!-- Remember me checkbox -->
        <label class="flex items-center">
          <input type="checkbox" v-model="rememberMe" class="mr-2" /> Remember me
        </label>
        
        <!-- Forgot password link -->
        <a href="#" class="text-blue-500">Forgot password?</a>
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white p-2 mb-2 rounded">Login</button>
        
        <button type="submit" class="w-full bg-blue-500 text-white p-2 mb-2 rounded">Login with Google</button>
        <button type="submit" class="w-full bg-blue-500 text-white p-2 mb-2 rounded">Login with facebook</button>      </form>
\      <p class="text-center">New doctor?<router-link to="/doctor-signup" class="text-blue-500">Sign up</router-link></p>
    </div>
    <MainFooter />
  </template>
  
  <script>
  import MainNavbar from './MainNavbar.vue';
  import MainFooter from './MainFooter.vue';


  export default {
    components: {
    MainNavbar,
    MainFooter,  // Make sure to declare it here
  },
    data() {
      return {
        email: '',
        password: '',
        rememberMe: false,
      };
    },
    methods: {
      login() {
        // Login logic here
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any specific styles if needed */
  </style>
  