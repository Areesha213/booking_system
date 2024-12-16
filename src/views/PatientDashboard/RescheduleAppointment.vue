<!-- <template>
        <PatientNavbar />

    <div class="p-8">

      <h1 class="text-2xl font-bold mb-4">Reschedule Appointment</h1>
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2">
          <h2 class="text-xl font-bold mb-2">October 2023</h2>
          <div class="flex justify-between mb-4">
            <button class="border px-2 py-1">&lt;</button>
            <button class="border px-2 py-1">&gt;</button>
          </div>
  
          <table class="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th class="border border-gray-300 p-2">Mon</th>
                <th class="border border-gray-300 p-2">Tue</th>
                <th class="border border-gray-300 p-2">Wed</th>
                <th class="border border-gray-300 p-2">Thu</th>
                <th class="border border-gray-300 p-2">Fri</th>
                <th class="border border-gray-300 p-2">Sat</th>
                <th class="border border-gray-300 p-2">Sun</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 p-2">1</td>
                <td class="border border-gray-300 p-2">2</td>
                <td class="border border-gray-300 p-2">3</td>
                <td class="border border-gray-300 p-2">4</td>
                <td class="border border-gray-300 p-2">5</td>
                <td class="border border-gray-300 p-2">6</td>
                <td class="border border-gray-300 p-2">7</td>
              </tr>
              <tr>
                <td class="border border-gray-300 p-2">8</td>
                <td class="border border-gray-300 p-2">9</td>
                <td class="border border-gray-300 p-2">10</td>
                <td class="border border-gray-300 p-2">11</td>
                <td class="border border-gray-300 p-2">12</td>
                <td class="border border-gray-300 p-2">13</td>
                <td class="border border-gray-300 p-2">14</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <div>
          <h3 class="text-lg font-semibold mb-2">Manage Appointments</h3>
          <button class="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition">
            Reschedule
          </button>
          <button class="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition mt-2">
            Cancel
          </button>
        </div>
      </div>
    </div>
    <MainFooter />

  </template>
  
  <script>
  import PatientNavbar from "./PatientNavbar.vue";
  import MainFooter from "../../components/MainFooter.vue";
  export default {
    name: 'RescheduleAppointment',
    components: {
    PatientNavbar,
    MainFooter,
  },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style> -->




  <template>
    <PatientNavbar />
    <div class="p-8">
      <h1 class="text-2xl font-bold mb-4">Reschedule Appointment</h1>
  
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2">
          <h2 class="text-xl font-bold mb-2">{{ monthNames[currentMonth] }} {{ currentYear }}</h2>
  
          <!-- Navigation buttons for changing months -->
          <div class="flex justify-between mb-4">
            <button @click="previousMonth" class="border px-2 py-1">&lt;</button>
            <button @click="nextMonth" class="border px-2 py-1">&gt;</button>
          </div>
  
          <!-- Calendar grid -->
          <table class="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th v-for="day in daysOfWeek" :key="day" class="border border-gray-300 p-2">{{ day }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="week in calendarDays" :key="week[0].date">
                <td
                  v-for="date in week"
                  :key="date.date"
                  :class="['border border-gray-300 p-2', { 'bg-blue-100': date.isCurrentMonth }]"
                  @click="selectDate(date)"
                >
                  {{ date.day }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Appointment Management -->
        <div>
          <h3 class="text-lg font-semibold mb-2">Manage Appointments</h3>
          <button class="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition">
            Reschedule
          </button>
          <button class="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition mt-2">
            Cancel
          </button>
        </div>
      </div>
    </div>
    <MainFooter />
  </template>
  
  <script>
  import PatientNavbar from "./PatientNavbar.vue";
  import MainFooter from "../../components/MainFooter.vue";
  
  export default {
    name: 'RescheduleAppointment',
    components: {
      PatientNavbar,
      MainFooter,
    },
    data() {
      return {
        currentMonth: new Date().getMonth(),
        currentYear: new Date().getFullYear(),
        selectedDate: null,
        daysOfWeek: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        monthNames: [
          "January", "February", "March", "April", "May", "June", 
          "July", "August", "September", "October", "November", "December"
        ],
      };
    },
    computed: {
  calendarDays() {
    const startOfMonth = new Date(this.currentYear, this.currentMonth, 1);
    const startDay = startOfMonth.getDay() === 0 ? 7 : startOfMonth.getDay(); // Start day adjustment

    let days = [];
    let week = [];
    let dayCount = 1 - (startDay - 1);

    for (let i = 0; i < 6; i++) { // Calendar row loop (up to 6 weeks)
      for (let j = 1; j <= 7; j++) { // Calendar day (columns)
        const date = new Date(this.currentYear, this.currentMonth, dayCount);
        week.push({
          day: date.getDate(),
          date: date.toISOString().split("T")[0],
          isCurrentMonth: date.getMonth() === this.currentMonth,
        });
        dayCount++;
      }
      days.push(week);
      week = [];
    }
    return days;
  }
},

    methods: {
      previousMonth() {
        if (this.currentMonth === 0) {
          this.currentMonth = 11;
          this.currentYear--;
        } else {
          this.currentMonth--;
        }
      },
      nextMonth() {
        if (this.currentMonth === 11) {
          this.currentMonth = 0;
          this.currentYear++;
        } else {
          this.currentMonth++;
        }
      },
      selectDate(date) {
        this.selectedDate = date.date;
        console.log("Selected Date:", this.selectedDate); // Placeholder action for selected date
      }
    }
  };
  </script>
  
  <style scoped>
  /* Optional: Add styles for selected dates or other calendar styling */
  .bg-blue-100 {
    background-color: #cce4ff;
  }
  </style>
  