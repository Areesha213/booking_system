<template>
    <DoctorNavbar />
    <div class="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">Settings</h1>
  
      <!-- Profile Settings -->
      <section class="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 class="text-lg font-medium text-gray-700 dark:text-gray-300">Profile Settings</h2>
        <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-600 dark:text-gray-400">Name</label>
            <input
              type="text"
              v-model="profile.name"
              class="w-full p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>
          <div>
            <label class="block text-gray-600 dark:text-gray-400">Email</label>
            <input
              type="email"
              v-model="profile.email"
              class="w-full p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>
          <div>
            <label class="block text-gray-600 dark:text-gray-400">Contact</label>
            <input
              type="text"
              v-model="profile.contact"
              class="w-full p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>
          <div>
            <label class="block text-gray-600 dark:text-gray-400">Specialization</label>
            <input
              type="text"
              v-model="profile.specialization"
              class="w-full p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>
        </div>
        <button
          @click="updateProfile"
          class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Save Changes
        </button>
      </section>
  
      <!-- Notification Preferences -->
      <section class="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 class="text-lg font-medium text-gray-700 dark:text-gray-300">Notification Preferences</h2>
        <div class="mt-4 flex items-center">
          <input type="checkbox" v-model="notifications.email" id="email-notif" />
          <label for="email-notif" class="ml-2 text-gray-600 dark:text-gray-400">Email Notifications</label>
        </div>
        <div class="mt-4 flex items-center">
          <input type="checkbox" v-model="notifications.sms" id="sms-notif" />
          <label for="sms-notif" class="ml-2 text-gray-600 dark:text-gray-400">SMS Notifications</label>
        </div>
        <button
          @click="saveNotificationPreferences"
          class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Save Preferences
        </button>
      </section>
  
      <!-- Dashboard Customization -->
      <section class="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 class="text-lg font-medium text-gray-700 dark:text-gray-300">Dashboard Customization</h2>
        <div class="mt-4">
          <label class="block text-gray-600 dark:text-gray-400">Default View</label>
          <select
            v-model="dashboardSettings.defaultView"
            class="w-full p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
          >
            <option value="patients">Patient List</option>
            <option value="appointments">Upcoming Appointments</option>
          </select>
        </div>
        <div class="mt-4 flex items-center">
          <input type="checkbox" v-model="dashboardSettings.showStats" id="show-stats" />
          <label for="show-stats" class="ml-2 text-gray-600 dark:text-gray-400">Show Stats</label>
        </div>
        <button
          @click="saveDashboardSettings"
          class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Save Customizations
        </button>
      </section>
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
        profile: {
          name: "Dr. John Doe",
          email: "john.doe@example.com",
          contact: "123-456-7890",
          specialization: "Cardiology",
        },
        notifications: {
          email: true,
          sms: false,
        },
        dashboardSettings: {
          defaultView: "patients",
          showStats: true,
        },
      };
    },
    methods: {
      updateProfile() {
        alert("Profile updated successfully!");
      },
      saveNotificationPreferences() {
        alert("Notification preferences saved!");
      },
      saveDashboardSettings() {
        alert("Dashboard customizations saved!");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  