<template>
    <PatientNavbar />
  <div class="settings-page p-6 dark:bg-slate-700">
    <!-- Page Title -->
    <h1 class="text-2xl font-semibold mb-6">Settings</h1>

    <!-- Profile Section -->
    <section class="profile-section mb-8">
      <h2 class="text-xl font-semibold mb-4">Edit Profile</h2>
      <form @submit.prevent="saveProfile">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block font-medium mb-1">Full Name</label>
            <input type="text" v-model="profile.fullName" class="w-full p-2 border rounded" />
          </div>
          <div>
            <label class="block font-medium mb-1">Email</label>
            <input type="email" v-model="profile.email" class="w-full p-2 border rounded" />
          </div>
          <div>
            <label class="block font-medium mb-1">Phone Number</label>
            <input type="text" v-model="profile.phone" class="w-full p-2 border rounded" />
          </div>
          <div>
            <label class="block font-medium mb-1">Address</label>
            <input type="text" v-model="profile.address" class="w-full p-2 border rounded" />
          </div>
        </div>
        <button type="submit" class="save-profile-btn bg-blue-600 text-white px-4 py-2 mt-4 rounded">
          Save Changes
        </button>
      </form>
    </section>

    <!-- Payment Options Section -->
    <section class="payment-options-section mb-8">
      <h2 class="text-xl font-semibold mb-4">Manage Payment Options</h2>
      <div>
        <p class="font-medium mb-2">Saved Cards</p>
        <div v-for="(card, index) in paymentOptions.cards" :key="index" class="card-info p-4 border rounded mb-4">
          <p>Card Number: **** **** **** {{ card.last4 }}</p>
          <p>Expiry Date: {{ card.expiry }}</p>
          <button @click="removeCard(index)" class="remove-card-btn text-red-600 underline mt-2">
            Remove Card
          </button>
        </div>
        <button @click="addNewCard" class="add-card-btn bg-blue-500 text-white px-4 py-2 rounded">
          Add New Card
        </button>
      </div>
    </section>

    <!-- Change Password Section -->
    <section class="change-password-section mb-8">
      <h2 class="text-xl font-semibold mb-4">Change Password</h2>
      <form @submit.prevent="changePassword">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block font-medium mb-1">Current Password</label>
            <input type="password" v-model="password.current" class="w-full p-2 border rounded" />
          </div>
          <div>
            <label class="block font-medium mb-1">New Password</label>
            <input type="password" v-model="password.new" class="w-full p-2 border rounded" />
          </div>
          <div>
            <label class="block font-medium mb-1">Confirm New Password</label>
            <input type="password" v-model="password.confirm" class="w-full p-2 border rounded" />
          </div>
        </div>
        <button type="submit" class="change-password-btn bg-blue-600 text-white px-4 py-2 mt-4 rounded">
          Change Password
        </button>
      </form>
    </section>

    <!-- Notifications Section -->
    <section class="notifications-section mb-8">
      <h2 class="text-xl font-semibold mb-4">Notification Settings</h2>
      <div class="notification-option flex items-center mb-4">
        <input type="checkbox" v-model="notifications.email" class="mr-2" />
        <label>Email Notifications</label>
      </div>
      <div class="notification-option flex items-center mb-4">
        <input type="checkbox" v-model="notifications.sms" class="mr-2" />
        <label>SMS Notifications</label>
      </div>
      <div class="notification-option flex items-center mb-4">
        <input type="checkbox" v-model="notifications.push" class="mr-2" />
        <label>Push Notifications</label>
      </div>
      <button @click="saveNotifications" class="save-notifications-btn bg-blue-600 text-white px-4 py-2 mt-4 rounded">
        Save Notification Preferences
      </button>
    </section>
  </div>
  <MainFooter />
</template>

<script>
import PatientNavbar from "./PatientNavbar.vue";
import MainFooter from "../../components/MainFooter.vue";

export default {
  name: "Patient-setting",
  components: {
    PatientNavbar,
    MainFooter,
  },
  data() {
    return {
      profile: {
        fullName: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        address: "123 Main St, City, Country",
      },
      paymentOptions: {
        cards: [
          { last4: "1234", expiry: "12/24" },
          { last4: "5678", expiry: "09/23" },
        ],
      },
      password: {
        current: "",
        new: "",
        confirm: "",
      },
      notifications: {
        email: true,
        sms: false,
        push: true,
      },
    };
  },
  methods: {
    saveProfile() {
      // Logic for saving profile changes
      alert("Profile changes saved.");
    },
    addNewCard() {
      // Logic for adding a new card
      alert("Add new card functionality coming soon.");
    },
    removeCard(index) {
      // Logic for removing a card
      this.paymentOptions.cards.splice(index, 1);
      alert("Card removed.");
    },
    changePassword() {
      // Logic for changing password
      if (this.password.new === this.password.confirm) {
        alert("Password changed successfully.");
      } else {
        alert("New passwords do not match.");
      }
    },
    saveNotifications() {
      // Logic for saving notification preferences
      alert("Notification preferences saved.");
    },
  },
};
</script>

<style scoped>
.settings-page {
  max-width: 800px;
  margin: 0 auto;
}
</style>
