<template> 
<MainNavbar />
    <div class="p-6  dark:bg-slate-700">
      <h1 class="text-2xl font-bold mb-6 text-center">Meet Doctors</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Loop through doctors data to display each profile in a card -->
        <div
          v-for="(doctor, index) in doctors"
          :key="index"
          class="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl cursor-pointer dark:bg-slate-400"
          @click="openModal(doctor)"
        >
          <img :src="doctor.picture" alt="Doctor's picture" class="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 class="text-lg font-semibold">{{ doctor.name }}</h2>
          <p class="text-gray-700">{{ doctor.specialties }}</p>
          <p class="text-gray-500">Fees: ${{ doctor.fees }}</p>
          <p class="text-yellow-500">Rating: {{ doctor.rating }} ⭐</p>
        </div>
      </div>
  
      <!-- Doctor Modal -->
      <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
        <div class="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative dark:bg-slate-700">
          <button @click="closeModal" class="absolute top-2 right-2 text-gray-500 text-lg-8 hover:text-gray-700">&times;</button>
  
          <div class="flex items-center mb-4">
            <img :src="selectedDoctor.picture" alt="Doctor's picture" class="w-24 h-24 object-cover rounded-lg mr-4" />
            <div>
              <h2 class="text-xl font-bold">{{ selectedDoctor.name }}</h2>
              <p class="text-gray-700">{{ selectedDoctor.specialties }}</p>
              <p class="text-gray-500">{{ selectedDoctor.qualifications }}</p>
            </div>
          </div>
  
          <div class="mb-4">
            <h3 class="font-semibold">Availability:</h3>
            <ul>
              <li v-for="(slot, index) in selectedDoctor.availability" :key="index">
                {{ slot.day }}: {{ slot.time }}
              </li>
            </ul>
          </div>
  
          <div class="mb-4">
            <h3 class="font-semibold">Ratings and Reviews:</h3>
            <p class="text-yellow-500">Rating: {{ selectedDoctor.rating }} ⭐</p>
            <p class="text-gray-700">{{ selectedDoctor.reviews }}</p>
          </div>
  
          <div class="mb-4">
            <h3 class="font-semibold">Consultation Fees:</h3>
            <p>${{ selectedDoctor.fees }}</p>
          </div>
  
          <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
    <MainFooter />
  </template>
  
  <script>
  import MainFooter from './MainFooter.vue';
  import MainNavbar from './MainNavbar.vue';

  export default {
    components: {
    MainNavbar,
    MainFooter,
  },
    data() {
      return {
        doctors: [
          {
            name: "Dr. Sarah Johnson",
            picture: "https://via.placeholder.com/150",
            specialties: "Cardiology",
            qualifications: "MBBS, MD (Cardiology)",
            availability: [
              { day: "Monday", time: "9 AM - 12 PM" },
              { day: "Wednesday", time: "2 PM - 6 PM" },
            ],
            rating: 4.8,
            reviews: "Dr. Sarah is very professional and caring.",
            fees: 200,
          },
          {
            name: "Dr. John Smith",
            picture: "https://via.placeholder.com/150",
            specialties: "Dermatology",
            qualifications: "MBBS, MD (Dermatology)",
            availability: [
              { day: "Tuesday", time: "10 AM - 1 PM" },
              { day: "Thursday", time: "1 PM - 4 PM" },
            ],
            rating: 4.7,
            reviews: "Dr. John provided excellent care for my skin condition.",
            fees: 150,
          },
          {
            name: "Dr. John Smith",
            picture: "https://via.placeholder.com/150",
            specialties: "Dermatology",
            qualifications: "MBBS, MD (Dermatology)",
            availability: [
              { day: "Tuesday", time: "10 AM - 1 PM" },
              { day: "Thursday", time: "1 PM - 4 PM" },
            ],
            rating: 4.7,
            reviews: "Dr. John provided excellent care for my skin condition.",
            fees: 150,
          },
          {
            name: "Dr. John Smith",
            picture: "https://via.placeholder.com/150",
            specialties: "Dermatology",
            qualifications: "MBBS, MD (Dermatology)",
            availability: [
              { day: "Tuesday", time: "10 AM - 1 PM" },
              { day: "Thursday", time: "1 PM - 4 PM" },
            ],
            rating: 4.7,
            reviews: "Dr. John provided excellent care for my skin condition.",
            fees: 150,
          },
          {
            name: "Dr. John Smith",
            picture: "https://via.placeholder.com/150",
            specialties: "Dermatology",
            qualifications: "MBBS, MD (Dermatology)",
            availability: [
              { day: "Tuesday", time: "10 AM - 1 PM" },
              { day: "Thursday", time: "1 PM - 4 PM" },
            ],
            rating: 4.7,
            reviews: "Dr. John provided excellent care for my skin condition.",
            fees: 150,
          },
          {
            name: "Dr. John Smith",
            picture: "https://via.placeholder.com/150",
            specialties: "Dermatology",
            qualifications: "MBBS, MD (Dermatology)",
            availability: [
              { day: "Tuesday", time: "10 AM - 1 PM" },
              { day: "Thursday", time: "1 PM - 4 PM" },
            ],
            rating: 4.7,
            reviews: "Dr. John provided excellent care for my skin condition.",
            fees: 150,
          },
          {
            name: "Dr. John Smith",
            picture: "https://via.placeholder.com/150",
            specialties: "Dermatology",
            qualifications: "MBBS, MD (Dermatology)",
            availability: [
              { day: "Tuesday", time: "10 AM - 1 PM" },
              { day: "Thursday", time: "1 PM - 4 PM" },
            ],
            rating: 4.7,
            reviews: "Dr. John provided excellent care for my skin condition.",
            fees: 150,
          },
          // Add more doctors here...
        ],
        showModal: false,
        selectedDoctor: null,
      };
    },
    methods: {
      openModal(doctor) {
        this.selectedDoctor = doctor;
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
        this.selectedDoctor = null;
      },
    },
  };
  </script>
  