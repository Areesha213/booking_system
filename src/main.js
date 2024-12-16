// import { createApp } from 'vue';
// import App from './App.vue';
// import "./style.css"
// import { createRouter, createWebHistory } from 'vue-router';

// // Import your components
// import LandingPage from './components/LandingPage.vue';
// import PatientRegistration from './components/PatientRegistration.vue';
// import PatientLogin from './components/PatientLogin.vue';
// import DoctorRegistration from './components/DoctorRegistration.vue';
// import DoctorLogin from './components/DoctorLogin.vue';
// import AboutPage from './components/AboutPage.vue';
// import ContactPage from './components/ContactPage.vue';
// import DoctorProfile from './components/DoctorProfile.vue';
// import HomePage from './views/PatientDashboard/HomePage.vue';
// import PatientAppointments from './views/PatientDashboard/PatientAppointments.vue';
// import MedicalRecords from './views/PatientDashboard/MedicalRecords.vue';
// import PaymentSection from './views/PatientDashboard/PaymentSection.vue';
// import RescheduleAppointment from './views/PatientDashboard/RescheduleAppointment.vue';
// import PatientSetting from './views/PatientDashboard/PatientSetting.vue';
// import DoctorHome from './views/DoctorDashboard/DoctorHome.vue';
// import DoctorNavbar from './views/DoctorDashboard/DoctorNavbar.vue';

// // Define your routes
// const routes = [
//   { path: '/', component: LandingPage },
//   { path: '/signup', component: PatientRegistration },
//   { path: '/login', component: PatientLogin },
//   { path: '/doctor-signup', component: DoctorRegistration },
//   { path: '/doctor-login', component: DoctorLogin },
//   { path: '/about', component: AboutPage },
//   { path: '/contact', component: ContactPage },
//   { path: '/doctor-profile', component: DoctorProfile},
//   { path: '/Patient-dashboard', component: HomePage},
//   { path: '/Patient-appointments', component: PatientAppointments},
//   { path: '/Medical-records', component: MedicalRecords},
//   { path: '/Payment-section', component: PaymentSection},
//   { path: '/Reschedule-appointment', component: RescheduleAppointment},
//   { path: '/Patient-setting', component: PatientSetting},
//   { path: '/Doctor-Home', component: DoctorHome},
//   { path: '/Doctor-Navbar', component: DoctorNavbar},







// ];

// // Create the router instance
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// // Create and mount the app
// const app = createApp(App);
// app.use(router);
// app.mount('#app');




// main.js
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import { createRouter, createWebHistory } from 'vue-router';

// Import all your components
import LandingPage from './components/LandingPage.vue';
import PatientRegistration from './components/PatientRegistration.vue';
import PatientLogin from './components/PatientLogin.vue';
import DoctorRegistration from './components/DoctorRegistration.vue';
import DoctorLogin from './components/DoctorLogin.vue';
import AboutPage from './components/AboutPage.vue';
import ContactPage from './components/ContactPage.vue';
import DoctorProfile from './components/DoctorProfile.vue';
import HomePage from './views/PatientDashboard/HomePage.vue';
import PatientAppointments from './views/PatientDashboard/PatientAppointments.vue';
import MedicalRecords from './views/PatientDashboard/MedicalRecords.vue';
import PaymentSection from './views/PatientDashboard/PaymentSection.vue';
import RescheduleAppointment from './views/PatientDashboard/RescheduleAppointment.vue';
import PatientSetting from './views/PatientDashboard/PatientSetting.vue';
import DoctorHome from './views/DoctorDashboard/DoctorHome.vue';
import DoctorNavbar from './views/DoctorDashboard/DoctorNavbar.vue';
import ResultUpload from './views/DoctorDashboard/ResultUpload.vue';
import ManageAppointnents from './views/DoctorDashboard/ManageAppointnents.vue';
import PatientsProfiles from './views/DoctorDashboard/PatientsProfiles.vue';
import DoctorSettings from './views/DoctorDashboard/DoctorSettings.vue';

// Define routes for the application
const routes = [
  { path: '/', component: LandingPage },
  { path: '/signup', component: PatientRegistration },
  { path: '/login', component: PatientLogin },
  { path: '/doctor-signup', component: DoctorRegistration },
  { path: '/doctor-login', component: DoctorLogin },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/doctor-profile', component: DoctorProfile },
  { path: '/patient-dashboard', component: HomePage },
  { path: '/patient-appointments', component: PatientAppointments },
  { path: '/medical-records', component: MedicalRecords },
  { path: '/payment-section', component: PaymentSection },
  { path: '/reschedule-appointment', component: RescheduleAppointment },
  { path: '/patient-setting', component: PatientSetting },
  { path: '/doctor-home', component: DoctorHome },
  { path: '/doctor-navbar', component: DoctorNavbar },
  { path: '/result-upload', component: ResultUpload },
  { path: '/manage-appointments', component: ManageAppointnents },
  { path: '/patients-profiles', component: PatientsProfiles },
  { path: '/doctor-settings', component: DoctorSettings },





];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create and mount the Vue app
const app = createApp(App);
app.use(router);
app.mount('#app');
