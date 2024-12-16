



<!-- 
<template>
  <fwb-navbar>
    <template #logo>
      <fwb-navbar-logo alt="Flowbite logo" image-url="/images/logo.svg" link="#">
        Flowbite
      </fwb-navbar-logo>
    </template>

    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link is-active link="#">
          <router-link to="/" class="text-lg font-semibold">Home</router-link>
        </fwb-navbar-link>

        <fwb-navbar-link link="#">
          <div class="relative ml-4">
            <a @click="toggleLoginDropdown" class="cursor-pointer">Login</a>
            <div v-if="showLoginDropdown" class="absolute bg-white shadow-lg rounded mt-2 py-2 w-40 z-10">
              <a @click="redirectTo('patient', 'login')" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Login as Patient</a>
              <a @click="redirectTo('doctor', 'login')" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Login as Doctor</a>
            </div>
          </div>
        </fwb-navbar-link>

        <fwb-navbar-link link="#">
          <div class="relative ml-4">
            <a @click="toggleSignupDropdown" class="cursor-pointer">Sign Up</a>
            <div v-if="showSignupDropdown" class="absolute bg-white shadow-lg rounded mt-2 py-2 w-40 z-10">
              <a @click="redirectTo('patient', 'signup')" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Sign Up as Patient</a>
              <a @click="redirectTo('doctor', 'signup')" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Sign Up as Doctor</a>
            </div>
          </div>
        </fwb-navbar-link>

        <fwb-navbar-link link="#">
          <router-link to="/about" class="ml-4">About Us</router-link>
        </fwb-navbar-link>
        
        <fwb-navbar-link link="#">
          <router-link to="/contact" class="ml-4">Contact</router-link>
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>

    <template #right-side>
      <fwb-button>
        Get started
      </fwb-button>
    </template>
  </fwb-navbar>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  FwbButton,
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from 'flowbite-vue'; // Keep these imports for future use

const router = useRouter();
const showLoginDropdown = ref(false);
const showSignupDropdown = ref(false);

const toggleLoginDropdown = () => {
  showLoginDropdown.value = !showLoginDropdown.value;
  showSignupDropdown.value = false; // Close signup if it's open
};

const toggleSignupDropdown = () => {
  showSignupDropdown.value = !showSignupDropdown.value;
  showLoginDropdown.value = false; // Close login if it's open
};

const redirectTo = (role, action) => {
  if (role === 'patient' && action === 'login') {
    router.push('/login');
  } else if (role === 'doctor' && action === 'login') {
    router.push('/doctor-login');
  } else if (role === 'patient' && action === 'signup') {
    router.push('/signup');
  } else if (role === 'doctor' && action === 'signup') {
    router.push('/doctor-signup');
  }
  closeDropdowns();
};

const closeDropdowns = () => {
  showLoginDropdown.value = false;
  showSignupDropdown.value = false;
};
</script>

<style scoped>
</style> -->





<!-- <template>
    <nav class="flex justify-between p-6 bg-white shadow">
      <router-link to="/" class="ml-32">logo</router-link>

      <div class="flex items-center">
        <router-link to="/" class="text-lg font-semibold">Home</router-link>
  
        
        <div class="relative ml-4">
          <a @click="toggleLoginDropdown" class="cursor-pointer">Login</a>
          <div v-if="showLoginDropdown" class="absolute bg-white shadow-lg rounded mt-2 py-2 w-40 z-10">
            <a @click="redirectTo('patient', 'login')" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Login as Patient</a>
            <a @click="redirectTo('doctor', 'login')" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Login as Doctor</a>
          </div>
        </div>
  
        
        <div class="relative ml-4">
          <a @click="toggleSignupDropdown" class="cursor-pointer">Sign Up</a>
          <div v-if="showSignupDropdown" class="absolute bg-white shadow-lg rounded mt-2 py-2 w-40 z-10">
            <a @click="redirectTo('patient', 'signup')" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Sign Up as Patient</a>
            <a @click="redirectTo('doctor', 'signup')" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Sign Up as Doctor</a>
          </div>
        </div>
  
        <router-link to="/about" class="ml-4">About Us</router-link>
        <router-link to="/contact" class="ml-4">Contact</router-link>
        <router-link to="/doctor-profile" class="ml-4"> Meet Doctors</router-link>
        <router-link to="/patient-dashboard" class="ml-4"> PatientDashboard</router-link>
        <router-link to="/Doctor-Home" class="ml-4"> DoctorDashboard</router-link>


      </div>
      
      <button class="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition" @click="toggleDarkMode">
      Toggle Dark Mode
    </button>
    </nav>
  </template>
  
  <script>
  import { inject } from 'vue';
  export default {
    setup() {
    const darkMode = inject('darkMode');
    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value;
    };

    return { toggleDarkMode };
  },
    data() {
      return {
        showLoginDropdown: false,
        showSignupDropdown: false,
      };
    },
    
    methods: {
      toggleLoginDropdown() {
        this.showLoginDropdown = !this.showLoginDropdown;
        this.showSignupDropdown = false; // Close signup if it's open
      },
      toggleSignupDropdown() {
        this.showSignupDropdown = !this.showSignupDropdown;
        this.showLoginDropdown = false; // Close login if it's open
      },
      redirectTo(role, action) {
        if (role === 'patient' && action === 'login') {
          this.$router.push('/login');
        } else if (role === 'doctor' && action === 'login') {
          this.$router.push('/doctor-login');
        } else if (role === 'patient' && action === 'signup') {
          this.$router.push('/signup');
        } else if (role === 'doctor' && action === 'signup') {
          this.$router.push('/doctor-signup');
        }
        this.closeDropdowns();
      },
      closeDropdowns() {
        this.showLoginDropdown = false;
        this.showSignupDropdown = false;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles if needed */
  </style>
    -->



    <template>
      <nav :class="['flex justify-between p-6 shadow', darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black']">
        <router-link to="/" class="ml-32">logo</router-link>
    
        <div class="flex items-center">
          <router-link to="/" class="text-lg font-semibold">Home</router-link>
    
          <div class="relative ml-4">
            <a @click="toggleLoginDropdown" class="cursor-pointer">Login</a>
            <div v-if="showLoginDropdown" :class="['absolute shadow-lg rounded mt-2 py-2 w-40 z-10', darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-700']">
              <a @click="redirectTo('patient', 'login')" class="block px-4 py-2 hover:bg-gray-200">Login as Patient</a>
              <a @click="redirectTo('doctor', 'login')" class="block px-4 py-2 hover:bg-gray-200">Login as Doctor</a>
            </div>
          </div>
    
          <div class="relative ml-4">
            <a @click="toggleSignupDropdown" class="cursor-pointer">Sign Up</a>
            <div v-if="showSignupDropdown" :class="['absolute shadow-lg rounded mt-2 py-2 w-40 z-10', darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-700']">
              <a @click="redirectTo('patient', 'signup')" class="block px-4 py-2 hover:bg-gray-200">Sign Up as Patient</a>
              <a @click="redirectTo('doctor', 'signup')" class="block px-4 py-2 hover:bg-gray-200">Sign Up as Doctor</a>
            </div>
          </div>
    
          <router-link to="/about" class="ml-4">About Us</router-link>
          <router-link to="/contact" class="ml-4">Contact</router-link>
          <router-link to="/doctor-profile" class="ml-4">Meet Doctors</router-link>
          <router-link to="/patient-dashboard" class="ml-4">Patient Dashboard</router-link>
          <router-link to="/Doctor-home" class="ml-4">Doctor Dashboard</router-link>
        </div>
        
        <button @click="toggleDarkMode" :class="['px-6 py-2 rounded-full transition', darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white']">
          Toggle Dark Mode
        </button>
      </nav>
    </template>
    
    <script>
    import { inject } from 'vue';
    export default {
      setup() {
        const darkMode = inject('darkMode');
        const toggleDarkMode = () => {
          darkMode.value = !darkMode.value;
        };
    
        return { toggleDarkMode, darkMode };
      },
      data() {
        return {
          showLoginDropdown: false,
          showSignupDropdown: false,
        };
      },
      methods: {
        toggleLoginDropdown() {
          this.showLoginDropdown = !this.showLoginDropdown;
          this.showSignupDropdown = false;
        },
        toggleSignupDropdown() {
          this.showSignupDropdown = !this.showSignupDropdown;
          this.showLoginDropdown = false;
        },
        redirectTo(role, action) {
          this.$router.push(role === 'patient' ? `/${action}` : `/doctor-${action}`);
          this.closeDropdowns();
        },
        closeDropdowns() {
          this.showLoginDropdown = false;
          this.showSignupDropdown = false;
        },
      },
    };
    </script>
    
    <style scoped>
    /* Optional: Additional styles for dark mode */
    </style>
    