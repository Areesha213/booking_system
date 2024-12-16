<template>
   <MainNavbar />
  <div class="bg-gray-100 min-h-screen p-6 dark:bg-slate-700">
    <!-- Main Navbar -->
   

    <!-- About Us Content -->
    <div class="container mx-auto dark:bg-slate-700">
      <h1 class="text-4xl font-bold mb-4 mt-4 text-center">About Us</h1>
      <p class="mb-4 text-center">
        We are dedicated to providing a seamless experience for patients to book appointments with trusted doctors. Our platform connects patients with healthcare professionals, ensuring they receive the care they need when they need it.
      </p>

      <!-- Our Mission Section with Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white p-6 rounded shadow-md mb-10 dark:bg-slate-400">
        <div>
          <h2 class="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>
            Our mission is to simplify the healthcare experience, making it easy for patients to find and book appointments with qualified medical professionals.
          </p>
        </div>
        <div>
          <img src="path-to-your-mission-image.jpg" alt="Our Mission" class="w-full h-auto rounded shadow-md" />
        </div>
      </div>

      <!-- Our Team Section with Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white p-6 rounded shadow-md mb-10 dark:bg-slate-400">
        <div>
          <img src="path-to-your-team-image.jpg" alt="Our Team" class="w-full h-auto rounded shadow-md" />
        </div>
        <div>
          <h2 class="text-2xl text-left font-semibold mb-2">Our Team</h2>
          <p>
            Our team consists of experienced healthcare professionals and tech enthusiasts who are passionate about improving healthcare accessibility.
          </p>
        </div>
       
      </div>

      <!-- Our Values Section with Grid -->
      <div class="bg-white p-6 rounded shadow-md mb-10 dark:bg-slate-400">
        <h2 class="text-3xl font-bold mb-4 text-center">Our Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <img src="path-to-your-compassion-image.jpg" alt="Compassion" class="w-full h-auto mb-4 rounded shadow-md" />
            <h3 class="text-xl font-semibold">Compassion</h3>
            <p>We prioritize patient well-being and approach healthcare with compassion and empathy.</p>
          </div>
          <div class="text-center">
            <img src="path-to-your-innovation-image.jpg" alt="Innovation" class="w-full h-auto mb-4 rounded shadow-md" />
            <h3 class="text-xl font-semibold">Innovation</h3>
            <p>We continuously innovate to improve healthcare delivery and make patient-doctor interactions as smooth as possible.</p>
          </div>
          <div class="text-center">
            <img src="path-to-your-trust-image.jpg" alt="Trust" class="w-full h-auto mb-4 rounded shadow-md" />
            <h3 class="text-xl font-semibold">Trust</h3>
            <p>We connect patients with trustworthy healthcare professionals to ensure they receive the best care possible.</p>
          </div>
        </div>
      </div>

      <!-- Why Choose Us Section -->
      <div class="bg-white p-6 rounded shadow-md mb-10 dark:bg-slate-400">
        <h2 class="text-3xl font-bold mb-4 text-center">Why Choose Us?</h2>
        <p class="mb-4">
          Our platform offers a convenient and secure way for patients to find the right doctor and book appointments. We are committed to making healthcare accessible to everyone, providing a seamless experience from booking to receiving care.
        </p>
        <ul>
          <li class="mb-4">✔ Easy online appointment booking.</li>
          <li class="mb-4">✔ Access to qualified healthcare professionals.</li>
          <li class="mb-4">✔ Secure handling of personal information.</li>
        </ul>
      </div>

      <!-- Testimonials Section -->
      <div class="bg-white p-6 mb-5 rounded shadow-md dark:bg-slate-400">
        <h2 class="text-3xl font-bold mb-4 text-center">Testimonials</h2>
        <div>
          <blockquote class="border-l-4 border-blue-500 pl-4 mb-4">
            <p class="italic">"This platform made it so easy to find a doctor and book my appointment in minutes!"</p>
            <footer class="text-right">— Patient A</footer>
          </blockquote>
          <blockquote class="border-l-4 border-blue-500 pl-4 mb-4">
            <p class="italic">"I love how simple and user-friendly the booking process is."</p>
            <footer class="text-right">— Patient B</footer>
          </blockquote>
        </div>
      </div>
    </div>

  </div>
  
    <!-- Main Footer -->
    <MainFooter />
</template>

<script>
import MainNavbar from './MainNavbar.vue';
import MainFooter from './MainFooter.vue';

export default {
  name: 'AboutPage',
  components: {
    MainNavbar,
    MainFooter,
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  text-align: center;
}

ul {
  list-style-type: none;
}

ul li {
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 10px;
}

ul li:last-child {
  border-bottom: none;
}

blockquote {
  font-size: 1rem;
  color: #374151;
}

blockquote footer {
  font-size: 0.875rem;
  color: #6b7280;
}

img {
  object-fit: cover;
}
</style>
