<template >
        <PatientNavbar />

    <div class=" p-6 dark:bg-slate-600">
      <!-- Page Title -->
      <h1 class="text-2xl font-semibold mb-4">Payment Overview</h1>
  
      <!-- Tabs -->
      <div class="tabs flex space-x-8 mb-6 border-b-2 dark:bg-slate-700">
        <button
          class="tab-btn text-blue-600 border-b-4 border-blue-600 py-2 font-medium focus:outline-none "
          @click="selectTab('upcoming')"
        >
          Upcoming Appointments
        </button>
        <button
          class="tab-btn text-gray-600 hover:text-blue-600 py-2 font-medium focus:outline-none"
          @click="selectTab('recent')"
        >
          Recent Payments
        </button>
        <button
          class="tab-btn text-gray-600 hover:text-blue-600 py-2 font-medium focus:outline-none"
          @click="selectTab('methods')"
        >
          Payment Methods
        </button>
      </div>
  
      <!-- Content based on selected tab -->
      <div v-if="selectedTab === 'upcoming'">
        <!-- Search Bar -->
        <div class=" p-4 flex justify-center items-center ">
          <input
            type="text"
            placeholder="Search Appointments"
            class="w-full p-2 border rounded  mr-4"
          />
          <div class="flex space-x-2">
            <button class="filter-btn px-4 py-2 bg-gray-200 rounded">Date</button>
            <button class="filter-btn px-4 py-2 bg-gray-200 rounded">Dentist</button>
            <button class="filter-btn px-4 py-2 bg-gray-200 rounded">Others</button>
          </div>
        </div>
  
        <!-- Upcoming Appointments -->
        <div class="upcoming-appointments grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 ml-4 ">
          <div class="appointment-card p-4 border rounded bg-gray-50 dark:bg-slate-700">
            <h3 class="font-semibold">Dr. Sarah Lee</h3>
            <p>Date: March 15, 2024, 10:00 AM</p>
            <p>Location: 123 Dental St, Suite 101</p>
            <button class="verify-btn bg-blue-500 text-white px-3 py-1 mt-2 rounded">
              Verify Insurance
            </button>
          </div>
          <div class="appointment-card p-4 border rounded bg-gray-50 dark:bg-slate-700">
            <h3 class="font-semibold">Dr. Mike Brown</h3>
            <p>Date: March 20, 2024, 2:00 PM</p>
            <p>Location: 456 Smile Blvd, Room 5</p>
            <button class="verify-btn bg-blue-500 text-white px-3 py-1 mt-2 rounded">
              Verify Insurance
            </button>
          </div>
          <div class="appointment-card p-4 border rounded bg-gray-50 dark:bg-slate-600">
            <h3 class="font-semibold">Dr. Emily Zhang</h3>
            <p>Date: March 25, 2024, 9:30 AM</p>
            <p>Location: 789 Care Ave, Floor 2</p>
            <button class="verify-btn bg-blue-500 text-white px-3 py-1 mt-2 rounded">
              Verify Insurance
            </button>
          </div>
        </div>
      </div>
  
      <div v-if="selectedTab === 'recent'" class="recent-payments  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Recent Payments -->
        <div class="payment-record mb-4  dark:bg-slate-700">
          <p>Paid</p>
          <p>Appointment: Oct 5, 2023</p>
          <p>Dentist: Dr. John Doe</p>
          <button class="payment-link bg-blue-500 text-white px-3 py-1 rounded">
            Payment Link
          </button>
        </div>
        <div class="payment-record mb-4 dark:bg-slate-700">
          <p>Unpaid</p>
          <p>Appointment: Sep 28, 2023</p>
          <p>Dentist: Dr. Jane Smith</p>
          <button class="payment-link bg-blue-500 text-white px-3 py-1 rounded">
            Payment Link
          </button>
        </div>
        <div class="payment-record mb-4 dark:bg-slate-700">
          <p>Paid</p>
          <p>Appointment: Sep 15, 2023</p>
          <p>Dentist: Dr. Emily Brown</p>
          <button class="payment-link bg-blue-500 text-white px-3 py-1 rounded">
            Payment Link
          </button>
        </div>
      </div>
  
      <div v-if="selectedTab === 'methods'" class="payment-methods">
        <p>Payment Methods Content Here...</p>
      </div>
  
    </div>
    <MainFooter />

  </template>
  
  <script>
  import PatientNavbar from './PatientNavbar.vue';
  import MainFooter from '../../components/MainFooter.vue';

  export default {
    name: "PaymentSection",
    components: {
    PatientNavbar,
    MainFooter,
  },
    data() {
      return {
        selectedTab: "upcoming",
      };
    },
    methods: {
      selectTab(tab) {
        this.selectedTab = tab;

      },
    },
  };
  </script>

  
  <style scoped>
  
  .tabs button {
    padding: 1rem;
  }
  .appointment-card,
  .payment-record {
    padding: 1rem;
    border-radius: 8px;
  
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
 
  </style>
  