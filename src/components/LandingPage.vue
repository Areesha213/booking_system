<template>
  <div class="bg-gray-100 min-h-screen dark:bg-slate-700">
    <!-- Navbar -->
    <MainNavbar />

    <!-- Hero Section -->
    <div class="bg-gray-200 text-center py-20 px-4 dark:bg-slate-600">
      <h1 class="text-4xl font-bold mb-2">Book Appointments with Trusted Doctors</h1>
      <p class="text-lg mb-6">Connect with top medical professionals for your health needs.</p>
      <button class="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">Get Started</button>
    </div>

    <!-- Search Filters Section -->
    <div class="bg-white  py-6 px-4 dark:bg-slate-500">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        <input type="text" placeholder="Specialty" class="border border-gray-300 p-2 ml-28 rounded dark:bg-slate-600" />
        <input type="text" placeholder="Location" class="border border-gray-300 p-2 rounded dark:bg-slate-600" />
        <input type="date" class="border border-gray-300 p-2 rounded dark:bg-slate-600" />
        <button class="bg-blue-500 text-white px-6 w-48 py-2 rounded hover:bg-blue-600 transition">Search</button>
      </div>
    </div>

    <!-- Featured Doctors Section -->
    <div class="py-10 px-4">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6">Featured Doctors</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <!-- Doctor 1 -->
          <div class="bg-white p-4 rounded shadow hover:shadow-lg transition dark:bg-slate-500">
            <div class="bg-gray-300 h-32 rounded mb-4"></div>
            <h3 class="text-xl font-semibold">Dr. Sarah Lee</h3>
            <p class="text-sm text-gray-500 dark:text-gray-100">Cardiology</p>
            <p class="text-yellow-500">★★★★★</p>
          </div>
          <!-- Doctor 2 -->
          <div class="bg-white p-4 rounded shadow hover:shadow-lg transition dark:bg-slate-500">
            <div class="bg-gray-300 h-32 rounded mb-4"></div>
            <h3 class="text-xl font-semibold">Dr. James Kim</h3>
            <p class="text-sm text-gray-500 dark:text-gray-100">Dermatology</p>
            <p class="text-yellow-500">★★★★★</p>
          </div>
          <!-- Doctor 3 -->
          <div class="bg-white p-4 rounded shadow hover:shadow-lg transition dark:bg-slate-500">
            <div class="bg-gray-300 h-32 rounded mb-4"></div>
            <h3 class="text-xl font-semibold">Dr. Emily Chen</h3>
            <p class="text-sm text-gray-500 dark:text-gray-100">Pediatrics</p>
            <p class="text-yellow-500">★★★★★</p>
          </div>
          <!-- Doctor 4 -->
          <div class="bg-white p-4 rounded shadow hover:shadow-lg transition dark:bg-slate-500">
            <div class="bg-gray-300 h-32 rounded mb-4"></div>
            <h3 class="text-xl font-semibold">Dr. Michael Brown</h3>
            <p class="text-sm text-gray-500 dark:text-gray-100">Neurology</p>
            <p class="text-yellow-500">★★★★★</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonial Section -->
    <div class="bg-gray-50 py-10 px-4 dark:bg-slate-600">
      <div class="container mx-auto text-center">
        <div class="bg-white p-6 rounded shadow-md inline-block max-w-lg dark:bg-slate-500">
          <div class="bg-gray-300 h-24 w-24 rounded-full mx-auto mb-4"></div>
          <p class="italic mb-2">"Dr. Smith was incredibly attentive and thorough. I felt at ease and well-cared for during my entire visit."</p>
          <p class="font-bold">Emily Johnson</p>
          <p class="text-gray-500 text-sm dark:text-gray-200">Patient</p>
        </div>
      </div>
    </div>

    <!-- Newsletter Signup Section -->
    <div class="bg-white py-10 px-4 dark:bg-slate-600">
      <div class="container mx-auto text-center">
        <h3 class="text-2xl font-bold mb-4">Subscribe to our newsletter</h3>
        <p class="text-gray-600 mb-6 dark:text-gray-300">Stay updated with the latest news and health tips from our platform.</p>
        <form action="#">
              <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div class="relative w-full">
                      <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </div>
                      <input class="block p-3 pl-10 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg " placeholder="Enter your email" type="email" id="email" required="">
                  </div>
                  <div>
                      <button type="submit" class="py-3 px-5 w-full text-sm font-medium text-center text-white bg-blue-500  rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg ">Subscribe</button>
                  </div>
              </div>
              <div class="mx-auto max-w-screen-sm text-sm text-left text-gray-900 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
          </form>

      
      </div>
    </div>

    <!-- Footer -->
    <MainFooter />
  </div>
</template>

<script>
import MainFooter from './MainFooter.vue';
import MainNavbar from './MainNavbar.vue';

export default {
  components: {
    MainNavbar,
    MainFooter,
  },
};
</script>

<style scoped>
/* Add specific styles if needed */
</style>
