<template>
       <MainNavbar />

    <div class="max-w-md mx-auto p-6 m-4 bg-white rounded shadow-md dark:bg-slate-700">
      <h2 class="text-2xl font-bold mb-4 text-center dark:text-white">Doctor Registration</h2>
      <form>
        <input type="text" placeholder="Name" v-model="name" class="w-full p-2 border rounded mb-4" required />
        <input type="email" placeholder="Email" v-model="email" class="w-full p-2 border rounded mb-4" required />
        <input type="tel" placeholder="Phone number" v-model="phone" class="w-full p-2 border rounded mb-4" required />
        <input type="text" placeholder="Specialty" v-model="specialty" class="w-full p-2 border rounded mb-4" required />
        <input type="file"  class="w-full mb-4" />
        <input type="password" placeholder="Password" v-model="password" class="w-full p-2 border rounded mb-4" required />
        <input type="password" placeholder="Confirm Password" v-model="confirmPassword" class="w-full p-2 border rounded mb-4" required />
          <!-- Checkbox for Terms of Service -->
      <label class="flex items-center mb-2">
        <input type="checkbox" v-model="agreedTOS" required class="mr-2" />
        I agree to <a href="#" class="text-blue-500 ml-2"> Terms of Service</a>
      </label>
      
      <!-- Checkbox for Privacy Policy -->
      <label class="flex items-center mb-4">
        <input type="checkbox" v-model="agreedPrivacy" required class="mr-2" />
        I agree to <a href="#" class="text-blue-500 ml-2"> Privacy Policy</a>
      </label>
      <button type="submit" class="w-full bg-blue-500 text-white p-2 mb-2 rounded">Submit</button>
        <button type="submit" class="w-full bg-blue-500 text-white p-2 mb-2 rounded">sign with Google</button>
        <button type="submit" class="w-full bg-blue-500 text-white p-2 mb-2 rounded">sign with facebook</button>      </form>
      <p class="text-center">Already a doctor?<router-link to="/doctor-login" class="text-blue-500">Login</router-link></p>

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
        name: '',
        email: '',
        phone: '',
        specialty: '',
        password: '',
        confirmPassword: '',
        agreed: false,
      };
    },
//     methods: {
//   register() {
//     // Registration logic here
//   },
//   onFileChange(event) {
//     const file = event.target.files[0]; // Use the 'event' variable
//     // Handle file upload logic here
//   },
// },

  };
  </script>
  
  <style scoped>
  /* Add any specific styles if needed */
  </style>
  