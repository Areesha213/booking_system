<!-- <template>
            <MainNavbar />

    <div class="max-w-md mx-auto p-6 m-5 bg-white rounded shadow-md">
      <h2 class="text-2xl font-bold mb-4 text-center">Patient Registration</h2>
      <form @submit.prevent="register">
        <input type="text" placeholder="Name" v-model="name" class="w-full p-2 border rounded mb-4" required />
        <input type="email" placeholder="Email" v-model="email" class="w-full p-2 border rounded mb-4" required />
        <input type="tel" placeholder="Phone number" v-model="phone" class="w-full p-2 border rounded mb-4" required />
        <input type="password" placeholder="Password" v-model="password" class="w-full p-2 border rounded mb-4" required />
        <input type="password" placeholder="Confirm Password" v-model="confirmPassword" class="w-full p-2 border rounded mb-4" required />
      <label class="flex items-center mb-2">
        <input type="checkbox" v-model="agreedTOS" required class="mr-2" />
        I agree to <a href="#" class="text-blue-500 ml-2"> Terms of Service</a>
      </label>
      
      <label class="flex items-center mb-4">
        <input type="checkbox" v-model="agreedPrivacy" required class="mr-2" />
        I agree to <a href="#" class="text-blue-500 ml-2"> Privacy Policy</a>
      </label>
        <button type="submit" class="w-full bg-blue-500 text-white p-2 mb-2 rounded">Submit</button>
        <button type="submit" class="w-full bg-blue-500 text-white p-2 mb-2 rounded">sign with Google</button>
        <button type="submit" class="w-full bg-blue-500 text-white p-2 mb-2 rounded">sign with facebook</button>

      </form>
      <p class="mt-4 text-center">Already have an account? <router-link to="/login" class="text-blue-500"> Login</router-link>
      </p>
    </div>
    <MainFooter />
  </template>
  
  <script>
        import MainNavbar from './MainNavbar.vue';
        import MainFooter from './MainFooter.vue';


  export default {
    components: {
    MainNavbar, 
    MainFooter // Make sure to declare it here
  },
    data() {
      return {
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        agreed: false,
      };
    },
    methods: {
      register() {
        // Registration logic here
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any specific styles if needed */
  </style>
   -->





   <template>
    <div>
      <MainNavbar />
  
      <div class="max-w-md mx-auto p-6 m-5 bg-white rounded shadow-md dark:bg-slate-700">
        <h2 class="text-2xl font-bold mb-4 text-center dark:text-white">Patient Registration</h2>
        <form @submit.prevent="register">
          <input type="text" placeholder="Name" v-model="name" class="w-full p-2 border rounded mb-4" required />
          <input type="email" placeholder="Email" v-model="email" class="w-full p-2 border rounded mb-4" required />
          <input type="tel" placeholder="Phone number" v-model="phone" class="w-full p-2 border rounded mb-4" required />
          <input type="password" placeholder="Password" v-model="password" class="w-full p-2 border rounded mb-4" required />
          <input type="password" placeholder="Confirm Password" v-model="confirmPassword" class="w-full p-2 border rounded mb-4" required />
  
          <label class="flex items-center mb-2">
            <input type="checkbox" v-model="agreedTOS" required class="mr-2" />
            I agree to <a href="#" class="text-blue-500 ml-2">Terms of Service</a>
          </label>
  
          <label class="flex items-center mb-4">
            <input type="checkbox" v-model="agreedPrivacy" required class="mr-2" />
            I agree to <a href="#" class="text-blue-500 ml-2">Privacy Policy</a>
          </label>
  
          <button type="submit" class="w-full bg-blue-500 text-white p-2 mb-2 rounded">Submit</button>
        </form>
        <p class="mt-4 text-center">
          Already have an account? <router-link to="/login" class="text-blue-500">Login</router-link>
        </p>
      </div>
  
      <MainFooter />
    </div>
  </template>
  
  <script>
  import MainNavbar from './MainNavbar.vue';
  import MainFooter from './MainFooter.vue';
  import dummyData from '../data/dummyData.json';
  
  export default {
    components: {
      MainNavbar,
      MainFooter,
    },
    data() {
      return {
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        agreedTOS: false,
        agreedPrivacy: false,
      };
    },
    methods: {
      register() {
        // Example usage of dummy data for validation
        const existingPatient = dummyData.patients.find(patient => patient.email === this.email);
  
        if (existingPatient) {
          alert('Email is already registered.');
        } else if (this.password !== this.confirmPassword) {
          alert('Passwords do not match.');
        } else {
          // Registration successful - Redirect to Patient Dashboard
          alert('Registration successful!');
          this.$router.push('/patient-dashboard'); // Route to PatientDashboard
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any specific styles if needed */
  </style>
  