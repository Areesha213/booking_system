<template>
     <DoctorNavbar />
    <div class="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">Patients</h1>
  
      <!-- Search and Filter -->
      <div class="mt-4 flex justify-between items-center">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search patients..."
          class="p-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
        />
        <select
          v-model="filter"
          class="p-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
        >
          <option value="">All</option>
          <option value="frequent">Frequent</option>
          <option value="recent">Recent</option>
        </select>
      </div>
  
      <!-- Patients Table -->
      <div class="mt-6 overflow-x-auto">
        <table class="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <thead>
            <tr>
              <th class="py-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Name</th>
              <th class="py-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Last Visit</th>
              <th class="py-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Contact</th>
              <th class="py-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="patient in filteredPatients"
              :key="patient.id"
              class="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <td class="py-3 px-4">{{ patient.name }}</td>
              <td class="py-3 px-4">{{ patient.lastVisit }}</td>
              <td class="py-3 px-4">{{ patient.contact }}</td>
              <td class="py-3 px-4">
                <button
                  @click="viewProfile(patient)"
                  class="px-3 py-1 text-sm bg-blue-500 text-white rounded-md"
                >
                  View Profile
                </button>
                <button
                  @click="reschedule(patient)"
                  class="ml-2 px-3 py-1 text-sm bg-green-500 text-white rounded-md"
                >
                  Reschedule
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Patient Profile Modal -->
      <div v-if="selectedPatient" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 w-3/4 max-w-lg">
          <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">{{ selectedPatient.name }}</h2>
          <p class="mt-2 text-gray-600 dark:text-gray-400">Contact: {{ selectedPatient.contact }}</p>
          <p class="mt-2 text-gray-600 dark:text-gray-400">Last Visit: {{ selectedPatient.lastVisit }}</p>
          <p class="mt-2 text-gray-600 dark:text-gray-400">Appointment History:</p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-400">
            <li v-for="appointment in selectedPatient.appointments" :key="appointment.id">
              {{ appointment.date }} - {{ appointment.purpose }}
            </li>
          </ul>
          <button
            @click="selectedPatient = null"
            class="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Close
          </button>
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
        searchQuery: "",
        filter: "",
        patients: [
          {
            id: 1,
            name: "John Doe",
            lastVisit: "2024-11-15",
            contact: "john.doe@example.com",
            appointments: [
              { id: 1, date: "2024-10-01", purpose: "Consultation" },
              { id: 2, date: "2024-11-01", purpose: "Follow-up" },
            ],
          },
          {
            id: 2,
            name: "Jane Smith",
            lastVisit: "2024-11-10",
            contact: "jane.smith@example.com",
            appointments: [
              { id: 1, date: "2024-09-15", purpose: "Test Results Review" },
            ],
          },
        ],
        selectedPatient: null,
      };
    },
    computed: {
      filteredPatients() {
        return this.patients.filter((patient) => {
          const matchesSearch = patient.name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
          const matchesFilter =
            !this.filter ||
            (this.filter === "frequent" && patient.appointments.length > 1) ||
            (this.filter === "recent" && new Date(patient.lastVisit) >= new Date("2024-11-01"));
          return matchesSearch && matchesFilter;
        });
      },
    },
    methods: {
      viewProfile(patient) {
        this.selectedPatient = patient;
      },
      reschedule(patient) {
        alert(`Reschedule feature for ${patient.name} is not implemented yet!`);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  