<template>
    <DoctorNavbar />
    <div class="min-h-screen bg-gray-100 p-8 dark:bg-slate-700">
      <!-- Page Header -->
      <h2 class="text-2xl font-bold text-gray-700 mb-6 dark:text-white">Upload Lab Test Results</h2>
      
      <div class="bg-white shadow-lg p-6 rounded-lg dark:bg-slate-600">
        <!-- Select Patient -->
        <div class="mb-4">
          <label for="patient" class="block text-gray-700 font-medium mb-2 dark:text-white">Select Patient</label>
          <select
            v-model="selectedPatient"
            id="patient"
            class="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option disabled value="">Choose a patient</option>
            <option v-for="patient in patients" :key="patient.id" :value="patient.name">
              {{ patient.name }}
            </option>
          </select>
        </div>
  
        <!-- Lab Test Results Input Fields -->
        <div class="mb-4">
          <label for="testDate" class="block text-gray-700 font-medium mb-2 dark:text-white">Test Date</label>
          <input
            type="date"
            v-model="testResults.date"
            id="testDate"
            class="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
  
        <div class="mb-4">
          <label for="testType" class="block text-gray-700 font-medium mb-2 dark:text-white">Test Type</label>
          <input
            type="text"
            v-model="testResults.type"
            id="testType"
            class="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="e.g., Blood Test, X-ray"
          />
        </div>
  
        <div class="mb-4">
          <label for="resultDetails" class="block text-gray-700 font-medium mb-2 dark:text-white">Result Details</label>
          <textarea
            v-model="testResults.details"
            id="resultDetails"
            rows="4"
            class="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Describe the test results"
          ></textarea>
        </div>
  
        <!-- PDF Report Upload -->
        <div class="mb-6">
          <label class="block text-gray-700 font-medium mb-2 dark:text-white">Upload PDF Lab Report</label>
          <input
            type="file"
            @change="handleFileUpload"
            accept="application/pdf"
            class="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
  
        <!-- Submit Button -->
        <button
          @click="submitResults"
          class="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
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
        selectedPatient: '',
        patients: [
          { id: 1, name: 'John Doe' },
          { id: 2, name: 'Jane Smith' },
          // Add more patients as needed
        ],
        testResults: {
          date: '',
          type: '',
          details: '',
        },
        reportFile: null,
      };
    },
    methods: {
      handleFileUpload(event) {
        this.reportFile = event.target.files[0];
      },
      submitResults() {
        if (!this.selectedPatient || !this.testResults.date || !this.testResults.type || !this.testResults.details) {
          alert('Please fill in all fields before submitting.');
          return;
        }
  
        const submissionData = {
          patient: this.selectedPatient,
          testResults: { ...this.testResults },
          reportFile: this.reportFile,
        };
  
        console.log('Submitting Test Results:', submissionData);
  
        // Notify the patient (example code)
        alert(`Notification sent to ${this.selectedPatient}`);
  
        // Reset form
        this.selectedPatient = '';
        this.testResults = { date: '', type: '', details: '' };
        this.reportFile = null;
      },
    },
  };
  </script>
  
  <style scoped>
  body {
    background-color: #f3f4f6;
  }
  </style>
  