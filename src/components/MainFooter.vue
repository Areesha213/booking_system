<template>
  <fwb-footer footer-type="logo" class="dark:bg-gray-800">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <router-link to="/" class="ml-4">logo</router-link>
        <fwb-footer-link-group
          class="flex flex-wrap gap-5 items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
        >
        <router-link to="/about" class="ml-4">About Us</router-link>
          <fwb-footer-link href="/"> Features </fwb-footer-link>
          <fwb-footer-link href="/"> FAQs </fwb-footer-link>
          <fwb-footer-link href="/"> Help center </fwb-footer-link>
          <fwb-footer-link href="/"> Pricing </fwb-footer-link>
          <router-link to="/contact" class="ml-4">Contact</router-link>
          <fwb-footer-link href="/"> Careers </fwb-footer-link>

        </fwb-footer-link-group>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div class="sm:flex sm:items-center sm:justify-between">
        <!-- New Dropdown section starts here -->
        <fwb-dropdown placement="right" text="English" class="text-blue-700 border-black bg-slate-500"> 
    <div class="w-52">
      <p class="p-2">
        Dropdown content line one
      </p>
      <p class="p-2">
        Dropdown content line two
      </p>
      <p class="p-2">
        Dropdown content line three
      </p>
      <p class="p-2">
        Dropdown content line four
      </p>
    </div>
  </fwb-dropdown>
      <!-- New Dropdown section ends here -->
        <fwb-footer-copyright by="#" href="/" />
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <fwb-footer-icon href="https://twitter.com/">
            <svg
              aria-hidden="true"
              class="w-4 h-4 text-blue-500 dark:text-blue-600 hover:text-gray-900 dark:hover:text-blue-700"
              fill="currentColor"
              viewBox="0 0 20 17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                fill-rule="evenodd"
              />
            </svg>
          </fwb-footer-icon>

          <fwb-footer-icon href="https://facebook.com/">
            <svg
              aria-hidden="true"
              class="w-4 h-4 text-blue-500 dark:text-blue-600 hover:text-gray-900 dark:hover:text-blue-700"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                clip-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                fill-rule="evenodd"
              />
            </svg>
          </fwb-footer-icon>

          <fwb-footer-icon href="https://www.linkedin.com/">
            <svg
              aria-hidden="true"
              class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                fill-rule="evenodd"
              />
            </svg>
          </fwb-footer-icon>

          <fwb-footer-icon href="https://youtube.com/">
            <svg
              aria-hidden="true"
              class="w-4 h-4 text-red-500 dark:text-red-500 hover:text-red-800 dark:hover:text-red-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                clip-rule="evenodd"
                d="M21.6 8.2c-.4-1.4-1.5-2.4-2.9-2.8C16.4 5 12 5 12 5s-4.4 0-6.7.4c-1.4.3-2.5 1.4-2.9 2.8C2 10.5 2 12 2 12s0 1.5.4 3.8c.4 1.4 1.5 2.4 2.9 2.8 2.3.4 6.7.4 6.7.4s4.4 0 6.7-.4c1.4-.3 2.5-1.4 2.9-2.8.4-2.3.4-3.8.4-3.8s0-1.5-.4-3.8zM9.8 15.3V8.7l5.9 3.3-5.9 3.3z"
              />
            </svg>
          </fwb-footer-icon>
        </div>
      </div>
    </div>
  </fwb-footer>
</template>

<script setup>
import {
  FwbFooter,
  FwbFooterCopyright,
  FwbFooterLink,
  FwbFooterLinkGroup,
  FwbDropdown,
} from "flowbite-vue";
</script>
