<template>
    <div class="medical-records-page dark:bg-slate-500 ">
        <PatientNavbar />

      <!-- Personal Medical Records Section -->
      <section class="m-9 dark:bg-slate-500">
        <h2 class="text-2xl font-bold text-center mb-4">Personal Medical Records</h2>
        <div class="flex justify-center items-center mb-4">
          <button @click="uploadRecord" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Upload Record
          </button>
        </div>
        <table class="w-full border-collapse ">
          <thead>
            <tr class="bg-gray-200 dark:bg-slate-600">
              <th class="p-4 border">Record ID</th>
              <th class="p-4 border">Upload Date</th>
              <th class="p-4 border">File Name</th>
              <th class="p-4 border">Diagnosis</th>
              <th class="p-4 border">File Icon</th>
              <th class="p-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(record, index) in medicalRecords" :key="index" class="text-center ">
              <td class="p-4 border">{{ record.id }}</td>
              <td class="p-4 border">{{ record.uploadDate }}</td>
              <td class="p-4 border">{{ record.fileName }}</td>
              <td class="p-4 border">{{ record.diagnosis }}</td>
              <td class="p-4 border"><span class="material-icons">insert_drive_file</span></td>
              <td class="p-4 border">
                <button @click="downloadRecord(record.id)" class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700">Download</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
  
      <!-- Appointment History Section -->
      <section class="m-9">
        <h2 class="text-2xl font-bold mb-4">Appointment History</h2>
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-gray-200 dark:bg-slate-600">
              <th class="p-4 border">Appointment</th>
              <th class="p-4 border">Doctor</th>
              <th class="p-4 border">Status</th>
              <th class="p-4 border">Summary</th>
              <th class="p-4 border">Download</th>
              <th class="p-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(appointment, index) in appointmentHistory" :key="index" class="text-center">
              <td class="p-4 border">{{ appointment.id }}</td>
              <td class="p-4 border">{{ appointment.doctor }}</td>
              <td class="p-4 border">{{ appointment.status }}</td>
              <td class="p-4 border">{{ appointment.summary }}</td>
              <td class="p-4 border">
                <button @click="downloadPdf(appointment.id)" class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700">Download PDF</button>
              </td>
              <td class="p-4 border">
                <button @click="viewDetails(appointment.id)" class="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-700">View Details</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="mt-6 flex justify-center items-center">
          <button @click="downloadAllRecords" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Download All</button>
          <button @click="uploadNewRecord" class="bg-blue-500 text-white px-4 py-2 ml-2 rounded hover:bg-blue-700">Upload Records</button>
          <button @click="shareWithDoctor" class="bg-blue-500 text-white px-4 py-2 ml-2 rounded hover:bg-blue-700">Share with Doctor</button>
        </div>
      </section>
  
      <!-- Test Results Section -->
      <section class="mb-8 ml-9 text-center ">
        <h2 class="text-2xl font-bold mb-4">Test Results</h2>
        <div class="flex space-x-4 ">
          <div v-for="(test, index) in testResults" :key="index" class="bg-gray-100 p-4 rounded shadow-md w-1/4 text-center dark:bg-slate-600">
            <p>{{ test.name }} - {{ test.date }}</p>
            <p>Dr. {{ test.doctor }}</p>
            <button @click="downloadTestResult(test.id)" class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 mt-2">Download</button>
          </div>
        </div>
      </section>
  
      <!-- Secure Doctor Sharing Section -->
      <section class="text-center ml-9 mb-3 dark:bg-slate-00">
        <h2 class="text-2xl font-bold mb-4">Secure Doctor Sharing</h2>
        <div class="flex space-x-4">
          <div v-for="(doctor, index) in doctors" :key="index" class="bg-gray-100 p-4 rounded shadow-md w-1/4 text-center dark:bg-slate-600">
            <p>{{ doctor.name }}</p>
            <p>{{ doctor.specialization }}</p>
            <p>Available: {{ doctor.availableTimes }}</p>
            <button @click="shareWithDoctor(doctor.id)" class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 mt-2">Share</button>
          </div>
        </div>
      </section>
    </div>
    <MainFooter />

  </template>
  
  <script>
import PatientNavbar from './PatientNavbar.vue';
import MainFooter from '../../components/MainFooter.vue';

  export default {
    components: {
    PatientNavbar,
    MainFooter,
  },
    data() {
      return {
        medicalRecords: [
          { id: '001', uploadDate: '2023-05-15', fileName: 'Blood Test Results.pdf', diagnosis: 'Normal' },
          { id: '002', uploadDate: '2023-06-20', fileName: 'X-Ray Report.pdf', diagnosis: 'Fracture' },
          { id: '003', uploadDate: '2023-07-05', fileName: 'MRI Scan Report.pdf', diagnosis: 'No Issue' },
        ],
        appointmentHistory: [
          { id: 'A01', doctor: 'Dr. Smith', status: 'Completed', summary: 'Check-up completed. No issues found.' },
          { id: 'A02', doctor: 'Dr. Johnson', status: 'Pending', summary: 'Follow-up after initial diagnosis.' },
          { id: 'A03', doctor: 'Dr. Bryant', status: 'Cancelled', summary: 'Patient rescheduled appointment.' },
        ],
        testResults: [
          { id: 'T01', name: 'X-Ray', date: '2023-07-01', doctor: 'Emily Brown' },
          { id: 'T02', name: 'MRI Scan', date: '2023-07-12', doctor: 'Linda Johnson' },
        ],
        doctors: [
          { id: 'D01', name: 'Dr. Emily Clark', specialization: 'Cardiology Specialist', availableTimes: 'Mon-Fri, 9am-5pm' },
          { id: 'D02', name: 'Dr. Michael Lee', specialization: 'General Practitioner', availableTimes: 'Tue-Thurs, 10am-3pm' },
          { id: 'D03', name: 'Dr. Sarah Patel', specialization: 'Dermatology Expert', availableTimes: 'Wed-Fri, 1pm-4pm' },
        ],
      };
    },
    methods: {
      uploadRecord() {
        alert("Upload a new record functionality goes here.");
      },
      downloadRecord(id) {
        alert(`Download record with ID: ${id}`);
      },
      downloadPdf(id) {
        alert(`Download PDF for appointment ID: ${id}`);
      },
      viewDetails(id) {
        alert(`Viewing details for appointment ID: ${id}`);
      },
      downloadAllRecords() {
        alert("Downloading all medical records...");
      },
      uploadNewRecord() {
        alert("Uploading new records...");
      },
      shareWithDoctor(id) {
        alert(`Sharing data with Doctor ID: ${id}`);
      },
      downloadTestResult(id) {
        alert(`Download test result ID: ${id}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .medical-records-page {
    font-family: Arial, sans-serif;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
  }
  </style>
  