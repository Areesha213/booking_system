<template>
  <div class="dark:bg-slate-800">
    <PatientNavbar />

    <!-- Page Header -->
    <h2 class="text-3xl font-bold text-center mb-4 mt-4 ">My Appointments</h2>

    <!-- Previous Appointments List -->
    <section class="bg-white rounded-lg shadow-lg p-6 m-4 dark:bg-slate-600">
      <h3 class="text-2xl font-bold mb-4">Previous Appointments</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(appointment, index) in appointments"
          :key="index"
          class="p-4 border rounded-lg shadow-md dark:bg-slate-500"
        >
          <p><strong>Doctor:</strong> {{ appointment.doctor }}</p>
          <p><strong>Date:</strong> {{ appointment.date }}</p>
          <p><strong>Time:</strong> {{ appointment.time }}</p>
          <p><strong>Symptoms:</strong> {{ appointment.symptoms }}</p>
        </div>
      </div>
    </section>

    <!-- Book New Appointment Button -->
     <div class="flex justify-center items-center">
      <button
      @click="openModal"
      class="bg-blue-500 text-white px-4 py-2 mt-4  rounded-md hover:bg-blue-700"
    >
      Book New Appointment
    </button>
     </div>
    

    <div
      v-if="isModalOpen"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white p-6 rounded-lg max-w-lg w-full relative shadow-lg dark:bg-slate-700">
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

    <MainFooter />
  </div>
</template>

<script>
import PatientNavbar from "./PatientNavbar.vue";
import MainFooter from "../../components/MainFooter.vue";

export default {
  components: {
    PatientNavbar,
    MainFooter,
  },
  data() {
    return {
      isModalOpen: false,
      appointments: [
        {
          doctor: "Dr. Smith",
          date: "2024-11-20",
          time: "10:00 AM",
          symptoms: "Headache, fever",
        },
        {
          doctor: "Dr. Smith",
          date: "2024-11-20",
          time: "10:00 AM",
          symptoms: "Headache, fever",
        },
        {
          doctor: "Dr. Smith",
          date: "2024-11-20",
          time: "10:00 AM",
          symptoms: "Headache, fever",
        },
        {
          doctor: "Dr. Smith",
          date: "2024-11-20",
          time: "10:00 AM",
          symptoms: "Headache, fever",
        },
        {
          doctor: "Dr. Smith",
          date: "2024-11-20",
          time: "10:00 AM",
          symptoms: "Headache, fever",
        },
        // Add more appointments here or fetch them from the backend.
      ],
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
.container {
  padding: 20px;
}
ul {
  list-style-type: none;
}
button {
  background-color: #007bff;
}
button:hover {
  background-color: #0056b3;
}
</style>
