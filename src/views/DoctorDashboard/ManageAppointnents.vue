<template>
    <DoctorNavbar />
    <div class="min-h-screen bg-gray-100 p-8 dark:bg-slate-700">
      <!-- Page Header -->
      <h2 class="text-2xl font-bold text-gray-700 mb-6 dark:text-white">Appointment Management</h2>
      
      <!-- Calendar View Section -->
      <div class="bg-white shadow-lg p-6 rounded-lg dark:bg-slate-600">
        <h3 class="text-xl font-semibold text-gray-600 mb-4 dark:text-white">Appointments Calendar</h3>
        
        <!-- Calendar Toggle (Daily, Weekly, Monthly) -->
        <div class="flex space-x-4 mb-4">
          <button @click="viewMode = 'daily'" :class="viewMode === 'daily' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'" class="px-4 py-2 rounded-md">Daily</button>
          <button @click="viewMode = 'weekly'" :class="viewMode === 'weekly' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'" class="px-4 py-2 rounded-md">Weekly</button>
          <button @click="viewMode = 'monthly'" :class="viewMode === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'" class="px-4 py-2 rounded-md">Monthly</button>
        </div>
  
        <!-- Display Calendar Based on View Mode -->
        <div v-if="viewMode === 'daily'">
          <p>Daily View - Coming Soon</p>
          <!-- Insert daily appointments display -->
        </div>
        <div v-if="viewMode === 'weekly'">
          <p>Weekly View - Coming Soon</p>
          <!-- Insert weekly appointments display -->
        </div>
        <div v-if="viewMode === 'monthly'">
          <p>Monthly View - Coming Soon</p>
          <!-- Insert monthly appointments display -->
        </div>
      </div>
  
      <!-- Appointments List with Actions -->
      <div class="bg-white shadow-lg p-6 rounded-lg mt-6 dark:bg-slate-600 ">
        <h3 class="text-xl font-semibold text-gray-600 mb-4 dark:text-white">Manage Appointments</h3>
        <div v-for="appointment in appointments" :key="appointment.id" class="border-b border-gray-200 py-4">
          <div class="flex justify-between items-center">
            <div>
              <p class="text-gray-700 font-medium dark:text-white">{{ appointment.patientName }}</p>
              <p class="text-sm text-gray-500 dark:text-white">{{ appointment.date }} at {{ appointment.time }}</p>
            </div>
            <div class="flex space-x-2">
              <button @click="rescheduleAppointment(appointment.id)" class="px-4 py-2 bg-yellow-400 text-white rounded-lg">Reschedule</button>
              <button @click="cancelAppointment(appointment.id)" class="px-4 py-2 bg-red-500 text-white rounded-lg">Cancel</button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Notifications for New Booking Requests -->
      <div class="bg-white shadow-lg p-6 rounded-lg mt-6 dark:bg-slate-600">
        <h3 class="text-xl font-semibold text-gray-600 mb-4 dark:text-white">New Booking Requests</h3>
        <div v-for="request in newRequests" :key="request.id" class="border-b border-gray-200 py-4">
          <div class="flex justify-between items-center">
            <div>
              <p class="text-gray-700 font-medium dark:text-white">{{ request.patientName }}</p>
              <p class="text-sm text-gray-500 dark:text-white">{{ request.requestDate }} at {{ request.requestTime }}</p>
            </div>
            <div class="flex space-x-2">
              <button @click="approveRequest(request.id)" class="px-4 py-2 bg-green-500 text-white rounded-lg">Approve</button>
              <button @click="denyRequest(request.id)" class="px-4 py-2 bg-gray-400 text-white rounded-lg">Deny</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MainFooter />
  </template>
  
  <script>
  import DoctorNavbar from "./DoctorNavbar.vue";
  import MainFooter from "../../components/MainFooter.vue";
  
  export default {
    components: {
    DoctorNavbar,
    MainFooter,
  },
    data() {
      return {
        viewMode: 'monthly',
        appointments: [
          { id: 1, patientName: 'John Doe', date: '2024-10-22', time: '10:00 AM' },
          { id: 2, patientName: 'Jane Smith', date: '2024-10-23', time: '1:00 PM' },
          // Add more appointments as needed
        ],
        newRequests: [
          { id: 1, patientName: 'Alex Johnson', requestDate: '2024-10-25', requestTime: '3:00 PM' },
          // Add more new booking requests as needed
        ],
      };
    },
    methods: {
      rescheduleAppointment(id) {
        console.log(`Rescheduling appointment with ID: ${id}`);
        // Handle rescheduling logic here
      },
      cancelAppointment(id) {
        console.log(`Cancelling appointment with ID: ${id}`);
        // Handle cancellation logic here
      },
      approveRequest(id) {
        console.log(`Approving request with ID: ${id}`);
        // Handle request approval logic here
      },
      denyRequest(id) {
        console.log(`Denying request with ID: ${id}`);
        // Handle request denial logic here
      },
    },
  };
  </script>
  
  <style scoped>
  body {
    background-color: #f3f4f6;
  }
  </style>
  