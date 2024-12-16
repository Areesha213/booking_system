<template>
   <!-- Header Section -->
   <MainNavbar />
  <div class="bg-gray-100 min-h-screen flex flex-col justify-between dark:bg-slate-700">
   

    <!-- Main Content Section -->
    <div class="container mx-auto p-6 flex-grow dark:bg-slate-700">
      <h1 class="text-4xl font-bold text-center mb-4">Contact Us</h1>
      <p class="mb-4 text-center">If you have any questions or inquiries, please fill out the form below, and we will get back to you as soon as possible.</p>

      <form @submit.prevent="submitForm" class="bg-white p-6 rounded shadow-md mb-10 dark:bg-slate-600">
        <div class="mb-4">
          <label for="name" class="block mb-2">Name</label>
          <input type="text" id="name" v-model="name" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label for="email" class="block mb-2">Email</label>
          <input type="email" id="email" v-model="email" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label for="message" class="block mb-2">Message</label>
          <textarea id="message" v-model="message" class="w-full p-2 border rounded" rows="4" required></textarea>
        </div>
        <button type="submit" class="bg-blue-500 w-full text-white px-4 py-2 rounded">Send Message</button>
      </form>

      <!-- FAQ Section -->
      <div class="bg-white p-6 m-4 rounded shadow-md mb-10 dark:bg-slate-600">
        <h2 class="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
        <ul>
          <li v-for="(faq, index) in faqs" :key="index" class="mb-4">
            <button @click="toggleAnswer(index)" class="w-full text-left font-bold focus:outline-none ">
              <span class="mr-2">+</span> <!-- Plus icon added here -->
              {{ faq.question }}
            </button>
            <p v-show="faq.showAnswer" class="mt-2 text-left pl-8 ">{{ faq.answer }}</p>
          </li>
        </ul>
      </div>

      <!-- Privacy Policy Section -->
      <div class="bg-white p-6 rounded shadow-md mb-10 dark:bg-slate-600">
        <h2 class="text-3xl font-bold mb-4">Privacy Policy</h2>
        <p class="mb-4">We take your privacy seriously. All personal data submitted through this website is handled in accordance with our Privacy Policy.</p>
        <p>Please review our <a href="#" class="text-blue-500 underline">full privacy policy</a> for more information on how we protect your data.</p>
      </div>
    </div>

    <!-- Footer Section -->
    <MainFooter />
  </div>
</template>

<script>
import MainNavbar from './MainNavbar.vue';
import MainFooter from './MainFooter.vue';

export default {
  name: 'ContactPage',
  components: {
    MainNavbar,
    MainFooter,
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      faqs: [
        {
          question: 'How do I book an appointment?',
          answer: 'Visit the booking page and select the doctor and time slot that suits you best.',
          showAnswer: false,
        },
        {
          question: 'Can I view my test results online?',
          answer: 'Yes, you can view your test results by logging into your account and navigating to the "Test Results" section.',
          showAnswer: false,
        },
        {
          question: 'What if I need to reschedule my appointment?',
          answer: 'You can reschedule your appointment from the "My Appointments" page within your account.',
          showAnswer: false,
        },
      ],
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted:", {
        name: this.name,
        email: this.email,
        message: this.message,
      });
      this.name = '';
      this.email = '';
      this.message = '';
      alert("Thank you for your message! We will get back to you soon.");
    },
    toggleAnswer(index) {
      this.faqs[index].showAnswer = !this.faqs[index].showAnswer;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

form {
  max-width: 600px;
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





span {
  font-size: 1.5rem;
  color: #2563eb;
}
</style>
