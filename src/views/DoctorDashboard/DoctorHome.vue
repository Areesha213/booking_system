<template>
    <DoctorNavbar />
    <div class="doctor-dashboard p-6 dark:bg-slate-700">
      <!-- Page Title -->
      <h1 class="text-2xl font-semibold mb-6">Doctor Dashboard</h1>
  
      <!-- Overview Section -->
      <section class="overview-section mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Total Appointments -->
        <div class="card p-4 bg-blue-100 rounded-lg shadow dark:text-black dark:bg-blue-400">
          <h2 class="text-lg font-semibold">Total Appointments</h2>
          <p class="text-2xl font-bold">{{ stats.totalAppointments }}</p>
        </div>
        <!-- Upcoming Appointments -->
        <div class="card p-4 bg-green-100 rounded-lg shadow dark:text-black dark:bg-green-400">
          <h2 class="text-lg font-semibold">Upcoming Appointments</h2>
          <p class="text-2xl font-bold">{{ stats.upcomingAppointments }}</p>
        </div>
        <!-- Messages -->
        <div class="card p-4 bg-yellow-100 rounded-lg shadow dark:text-black dark:bg-yellow-300">
          <h2 class="text-lg font-semibold">New Messages</h2>
          <p class="text-2xl font-bold">{{ stats.newMessages }}</p>
        </div>
      </section>
  
      <!-- Today's Appointments Section -->
      <section class="appointments-section mb-8">
        <h2 class="text-xl font-semibold mb-4">Today's Appointments</h2>
        <ul v-if="todaysAppointments.length">
          <li v-for="appointment in todaysAppointments" :key="appointment.id" class="appointment-item p-4 border rounded mb-4">
            <p><strong>Patient:</strong> {{ appointment.patientName }}</p>
            <p><strong>Time:</strong> {{ appointment.time }}</p>
            <p><strong>Reason:</strong> {{ appointment.reason }}</p>
            <button @click="viewDetails(appointment.id)" class="view-details-btn text-blue-500 underline mt-2">
              View Details
            </button>
          </li>
        </ul>
        <p v-else>No appointments scheduled for today.</p>
      </section>
  
      <!-- Quick Patient List Section -->
      <section class="patient-list-section mb-8">
        <h2 class="text-xl font-semibold mb-4">Quick Patient List</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="patient in patients" :key="patient.id" class="patient-card p-4 border rounded">
            <p><strong>{{ patient.name }}</strong></p>
            <p>Age: {{ patient.age }}</p>
            <p>Last Visit: {{ patient.lastVisit }}</p>
            <button @click="viewPatient(patient.id)" class="view-patient-btn text-blue-500 underline mt-2">
              View Profile
            </button>
          </div>
        </div>
      </section>
  
      <!-- Recent Messages Section -->
      <section class="messages-section mb-8">
        <h2 class="text-xl font-semibold mb-4">Recent Messages</h2>
        <ul v-if="messages.length">
          <li v-for="message in messages" :key="message.id" class="message-item p-4 border rounded mb-4">
            <p><strong>From:</strong> {{ message.from }}</p>
            <p>{{ message.content }}</p>
            <button @click="replyToMessage(message.id)" class="reply-btn text-blue-500 underline mt-2">
              Reply
            </button>
          </li>
        </ul>
        <p v-else>No new messages.</p>
      </section>
  
      <!-- Notifications Section -->
      <section class="notifications-section mb-8">
        <h2 class="text-xl font-semibold mb-4">Notifications</h2>
        <ul v-if="notifications.length">
          <li v-for="notification in notifications" :key="notification.id" class="notification-item p-4 border rounded mb-4">
            <p>{{ notification.message }}</p>
          </li>
        </ul>
        <p v-else>No new notifications.</p>
      </section>
    </div>
    <MainFooter />
  </template>
  
  <script>
  import DoctorNavbar from "./DoctorNavbar.vue";
  import MainFooter from "../../components/MainFooter.vue";
  export default {
    name: "DoctorHome",
    components: {
    DoctorNavbar,
    MainFooter,
  },
    data() {
      return {
        stats: {
          totalAppointments: 45,
          upcomingAppointments: 3,
          newMessages: 5,
        },
        todaysAppointments: [
          { id: 1, patientName: "John Doe", time: "10:00 AM", reason: "Follow-up" },
          { id: 2, patientName: "Jane Smith", time: "1:00 PM", reason: "Consultation" },
        ],
        patients: [
          { id: 1, name: "John Doe", age: 35, lastVisit: "Sep 15, 2023" },
          { id: 2, name: "Jane Smith", age: 29, lastVisit: "Oct 10, 2023" },
        ],
        messages: [
          { id: 1, from: "Patient Support", content: "Reminder: Update your schedule." },
          { id: 2, from: "Jane Smith", content: "Can I reschedule my appointment?" },
        ],
        notifications: [
          { id: 1, message: "New patient has registered: Mark Wilson" },
          { id: 2, message: "System update scheduled for 11:00 PM tonight." },
        ],
      };
    },
    methods: {
      viewDetails(appointmentId) {
        alert(`Viewing details for appointment ${appointmentId}`);
      },
      viewPatient(patientId) {
        alert(`Viewing profile for patient ${patientId}`);
      },
      replyToMessage(messageId) {
        alert(`Replying to message ${messageId}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .doctor-dashboard {
    max-width: 800px;
    margin: 0 auto;
  }
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>
  