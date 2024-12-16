<!-- <template>
             <MainNavbar />

    <div class="max-w-md mx-auto p-6 m-4 bg-white rounded shadow-md">
      <h2 class="text-2xl font-bold mb-4 text-center">Patient Login</h2>
      <form @submit.prevent="login">
        <input type="text" placeholder="Email/Username" v-model="email" class="w-full p-2 border rounded mb-4" required />
        <input type="password" placeholder="Password" v-model="password" class="w-full p-2 border rounded mb-4" required />
        <div class="flex justify-between items-center mb-4">
        <label class="flex items-center">
          <input type="checkbox" v-model="rememberMe" class="mr-2" /> Remember me
        </label>
        
        <a href="#" class="text-blue-500">Forgot password?</a>
      </div>
       
        <button type="submit" class="w-full bg-blue-500 text-white p-2 mb-2 rounded">Login</button>
        
        <button type="submit" class="w-full bg-blue-500 text-white p-2 mb-2 rounded">Login with Google</button>
        <button type="submit" class="w-full bg-blue-500 text-white p-2 mb-2 rounded">Login with facebook</button>
      </form>
      <p class="text-center">Don't have an account? <router-link to="/signup" class="text-blue-500">Sign Up</router-link> </p>
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
   -->




   <template>
    <MainNavbar />
  
    <div class="max-w-md mx-auto p-6 m-4 bg-white rounded shadow-md dark:bg-slate-700">
      <h2 class="text-2xl font-bold mb-4 text-center dark:text-white">Patient Login</h2>
      <form @submit.prevent="login">
        <input
          type="text"
          placeholder="Email/Username"
          v-model="email"
          class="w-full p-2 border rounded mb-4"
          required
        />
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          class="w-full p-2 border rounded mb-4"
          required
        />
        <div class="flex justify-between items-center mb-4">
          <label class="flex items-center">
            <input type="checkbox" v-model="rememberMe" class="mr-2" /> Remember me
          </label>
          <a href="#" class="text-blue-500">Forgot password?</a>
        </div>
  
        <button type="submit" class="w-full bg-blue-500 text-white p-2 mb-2 rounded">
          Login
        </button>
        <button type="button" class="w-full bg-blue-500 text-white p-2 mb-2 rounded">
          Login with Google
        </button>
        <button type="button" class="w-full bg-blue-500 text-white p-2 mb-2 rounded">
          Login with Facebook
        </button>
      </form>
      <p class="text-center">
        Don't have an account?
        <router-link to="/signup" class="text-blue-500">Sign Up</router-link>
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
      MainFooter,
    },
    data() {
      return {
        email: '',
        password: '',
        rememberMe: false,
        // Dummy users data for testing login
        users: [
          { id: 1, email: 'testuser@example.com', password: 'password123' },
          { id: 2, email: 'patient@example.com', password: 'patientpass' },
        ],
      };
    },
    methods: {
      login() {
        // Check if the entered credentials match any user in the dummy data
        const user = this.users.find(
          (user) => user.email === this.email && user.password === this.password
        );
        
        if (user) {
          // Redirect to PatientDashboard if login is successful
          this.$router.push('/patient-dashboard');
        } else {
          // Show an error if login fails
          alert('Invalid email or password');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any specific styles if needed */
  </style>
  