<template>
  <div>
    <PatientNavbar />
    <div class="container mx-auto p-8  dark:bg-slate-700">
      <!-- Appointment Section -->
      <section
        class="mb-10 bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl cursor-pointer dark:bg-slate-600"
      >
        <h2 class="text-2xl font-bold mb-4">Appointment Section</h2>
        <p class="text-lg">Next checkup</p>
        <p>Your appointment with Dr. Smith on Nov 20 at 10:00 AM</p>
        <button
          @click="openModal"
          class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Book a new appointment
        </button>
        <router-link to="/Reschedule-appointment">
              <button
                class="mt-4 bg-blue-500 ml-6 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
              RescheduleAppointment
              </button>
            </router-link>
      </section>

      <!-- Notifications -->
      <section class="mb-10 ml-6">
        <h2 class="text-2xl font-bold mb-4">Notifications</h2>
        <ul>
          <li class="mb-4">
            <strong>Dr. Smith</strong> - 2 hours ago <br />
            Your blood test results are available in the portal.
          </li>
          <li class="mb-4">
            <strong>Dr. Lee</strong> - 1 day ago <br />
            Please review the updated treatment plan.
          </li>
          <li class="mb-4">
            <strong>Dr. Patel</strong> - 3 days ago <br />
            Your prescription has been sent to your pharmacy.
          </li>
        </ul>
      </section>

      <!-- Quick Links -->
      <section>
        <h2 class="text-2xl font-bold mb-4">Quick Links</h2>
        <div class="grid grid-cols-3 gap-4">
          <div class="border p-4 text-center">
            <h3 class="text-xl">My Profile</h3>
            <p class="mt-2">
              View and edit your personal information to keep your profile
              up-to-date.
            </p>
            <button
              class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Edit Profile
            </button>
          </div>
          <div class="border p-4 text-center">
            <h3 class="text-xl">My Payments</h3>
            <p class="mt-2">
              Manage and update your payment methods for smooth transactions.
            </p>
            <router-link to="/Payment-section">
              <button
                class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Manage Payments
              </button>
            </router-link>
          </div>
          <div class="border p-4 text-center">
            <h3 class="text-xl">View Invoices</h3>
            <p class="mt-2">
              Check and download your medical invoices at your convenience.
            </p>
            <button
              class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              View Invoices
            </button>
          </div>
        </div>
      </section>
    </div>

    <!-- Book Appointment Modal -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 "
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
      // Logic for handling form submission (e.g., send data to server or display it)
      console.log("Appointment Data:", this.appointmentData);
      this.closeModal(); // Close modal after submission
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}
.grid {
  display: grid;
}
.grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}
button {
  background-color: #007bff;
}
button:hover {
  background-color: #0056b3;
}
</style>
