<template>
  <div>
    <!-- Top Navbar -->
    <nav class="bg-blue-600 p-4 flex items-center justify-between dark:text-black">
      <div class="flex items-center ">
        <img src="@/assets/logo.png" alt="Logo" class="h-10 mr-4" />
        <!-- <ul class="flex space-x-4 text-white">
          <li><router-link to="/patient/home" class="hover:underline">Home</router-link></li>
          <li><router-link to="/patient/appointments" class="hover:underline">Appointments</router-link></li>
          <li><router-link to="/patient/profile" class="hover:underline">Profile</router-link></li>
        </ul> -->
      </div>
      <div class="flex items-center space-x-8">
        <button class="bg-white text-blue-600 text-sm px-2 py-1 rounded-md hover:bg-gray-200">
          <router-link to="/Medical-records"> View Medical Records</router-link></button>
        <button
         @click="openModal"
         class="bg-blue-500 text-white text-sm px-2 py-1 rounded-md hover:bg-blue-700">Book Appointment</button>
         <button class="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition" @click="toggleDarkMode">
      Toggle Dark Mode
    </button>
        <button @click="toggleSidebar" class="text-white material-icons"></button>
      </div>
    </nav>

    <!-- Sidebar -->
    <div :class="['sidebar', { open: isSidebarOpen }]">
      <ul class="mt-6 space-y-4 text-white">
        <li><router-link to="/Patient-dashboard" class="hover:underline">Home</router-link></li>
        <li><router-link to="/doctor-profile" class="hover:underline">Find Doctors</router-link></li>
        <li><router-link to="/Patient-appointments" class="hover:underline">Appointments</router-link></li>
        <li><router-link to="/Payment-section" class="hover:underline">Payments</router-link></li>
        <li><router-link to="/Medical-records" class="hover:underline">Medical Records</router-link></li>
        <li><router-link to="/Patient-setting" class="hover:underline">Settings</router-link></li>
      </ul>
    </div>

    <!-- Overlay to close sidebar -->
    <div v-if="isSidebarOpen" class="overlay" @click="toggleSidebar"></div>
     
    <div
      v-if="isModalOpen"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white p-6 rounded-lg max-w-lg w-full relative shadow-lg dark:bg-slate-600">
        <h2 class="text-2xl font-bold">Book Appointment</h2>
        <form @submit.prevent="submitAppointment">
          <div class="">
            <label class="block text-sm font-medium">Doctor's Name</label>
            <input
              type="text"
              v-model="appointmentData.doctor"
              class="w-full p-2 border rounded"
              required
            />
          </div>
          <div class="">
            <label class="block text-sm font-medium">Date</label>
            <input
              type="date"
              v-model="appointmentData.date"
              class="w-full p-2 border rounded"
              required
            />
          </div>
          <div class="">
            <label class="block text-sm font-medium">Time</label>
            <input
              type="time"
              v-model="appointmentData.time"
              class="w-full p-2 border rounded"
              required
            />
          </div>
          <div class="">
            <label class="block text-sm font-medium">Symptoms</label>
            <textarea
              v-model="appointmentData.symptoms"
              class="w-full p-2 border rounded"
              rows="3"
              placeholder="Describe symptoms"
            ></textarea>
          </div>
          <div class="">
            <label class="block text-sm font-medium">Upload Test Files</label>
            <input
              type="file"
              @change="handleFileUpload"
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="">
            <label class="block text-sm font-medium">Department</label>
            <select
              v-model="appointmentData.department"
              class="w-full p-2 border rounded"
            >
              <option value="General">General</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Pediatrics">Pediatrics</option>
            </select>
          </div>
          <div class="">
            <label class="block text-sm font-medium">Consultation Mode</label>
            <select
              v-model="appointmentData.consultationMode"
              class="w-full p-2 border rounded"
            >
              <option value="In-Person">In-Person</option>
              <option value="Online">Online</option>
            </select>
          </div>
          <div class="flex justify-end space-x-4 mt-2">
            <button
              type="button"
              @click="closeModal"
              class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
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
  name: 'PatientNavbar',
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
    appointmentData: {
      doctor: "",
      date: "",
      time: "",
      symptoms: "",
      department: "",
      consultationMode: "",
      testFiles: null,
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
    handleFileUpload(event) {
      this.appointmentData.testFiles = event.target.files[0];
    },
    submitAppointment() {
      // Logic for handling form submission, e.g., send data to server.
      console.log("Appointment Data:", this.appointmentData);

      // Adding new appointment to the list as a demonstration
      this.appointments.push({ ...this.appointmentData });

      this.closeModal(); // Close modal after submission
    },
  },
 
};
</script>

<style scoped>
nav {
  background-color: #007bff;
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
  background-color: #007bff;
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
