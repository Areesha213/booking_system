<template>
    <div>
      <!-- Top Navbar -->
      <nav class="bg-green-600 p-4 flex items-center justify-between">
        <div class="flex items-center">
          <img src="@/assets/logo.png" alt="Logo" class="h-10 mr-4" />
        </div>
        <div class="flex items-center space-x-8">
          <button class="bg-white text-green-600 text-sm px-2 py-1 rounded-md hover:bg-gray-200">
            <router-link to="manage-appointments"> View Appointments</router-link>
          </button>
          <button @click="openModal" class="bg-green-500 text-white text-sm px-2 py-1 rounded-md hover:bg-green-700">
            New Patient Record
          </button>
          <button class="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition" @click="toggleDarkMode">
      Toggle Dark Mode
    </button>
          <button @click="toggleSidebar" class="text-white material-icons"></button>
        </div>
      </nav>
  
      <!-- Sidebar -->
      <div :class="['sidebar', { open: isSidebarOpen }]">
        <ul class="mt-6 space-y-4 text-white">
          <li><router-link to="doctor-home" class="hover:underline">Dashboard</router-link></li>
          <li><router-link to="/patients-profiles" class="hover:underline">Patients</router-link></li>
          <li><router-link to="manage-appointments" class="hover:underline">Appointments</router-link></li>
          <li><router-link to="/result-upload" class="hover:underline">Results</router-link></li>
          <li><router-link to="/doctor-settings" class="hover:underline">Settings</router-link></li>
        </ul>
      </div>
  
      <!-- Overlay to close sidebar -->
      <div v-if="isSidebarOpen" class="overlay" @click="toggleSidebar"></div>
  
      <!-- Modal for New Patient Record -->
      <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
        <div class="bg-white p-6 rounded-lg max-w-lg w-full relative shadow-lg dark:bg-slate-700">
          <h2 class="text-2xl font-bold">New Patient Record</h2>
          <form @submit.prevent="submitPatientRecord">
            <div>
              <label class="block text-sm font-medium">Patient Name</label>
              <input type="text" v-model="patientData.name" class="w-full p-2 border rounded" required />
            </div>
            <div>
              <label class="block text-sm font-medium">Age</label>
              <input type="number" v-model="patientData.age" class="w-full p-2 border rounded" required />
            </div>
            <div>
              <label class="block text-sm font-medium">Medical History</label>
              <textarea v-model="patientData.medicalHistory" class="w-full p-2 border rounded" rows="3"></textarea>
            </div>
            <div class="flex justify-end space-x-4 mt-2">
              <button type="button" @click="closeModal" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700">
                Cancel
              </button>
              <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                Save Record
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import { inject } from 'vue';

  export default {
    name: 'DoctorNavbar',
    setup() {
    const darkMode = inject('darkMode');
    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value;
    };

    return { toggleDarkMode };
  },
    data() {
      return {
        isModalOpen: false,
        isSidebarOpen: false,
        patientData: {
          name: "",
          age: "",
          medicalHistory: ""
        },
      };
    },
    methods: {
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
      },
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      },
      submitPatientRecord() {
        console.log("New Patient Record:", this.patientData);
        this.closeModal();
      },
    }
  };
  </script>
  
  <style scoped>
  nav {
    background-color: #28a745; /* Green color for doctor dashboard */
  }
  .material-icons {
    background-color: white;
    width: 25px;
    height: 25px;
    border-radius: 100%;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    background-color: #28a745;
    padding: 1rem;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 20;
  }
  .sidebar.open {
    transform: translateX(0);
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
  </style>
  