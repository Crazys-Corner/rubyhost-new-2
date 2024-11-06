<template>
    <footer class="bg-black text-gray-400 py-8 px-4">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo and Description -->
        <div>
          <div class="flex items-center text-white font-semibold text-xl">
            <span class="text-red-600">Ruby</span>Host
          </div>
          <p class="mt-4">
            Providing high-performance hosting tailored to your needs. Experience
            RubyHost, the Gem of the Hosting Industry.
          </p>
          <p class="mt-2">
            <a href="#" class="text-gray-500 hover:underline">System Status</a>
          </p>
        </div>
  
        <!-- Company Links -->
        <div>
          <h4 class="text-white font-medium mb-4">Company</h4>
          <ul>
            <li>
              <a href="#" class="hover:underline text-gray-500">About</a>
            </li>
            <li>
              <a href="#" class="hover:underline text-gray-500">Products</a>
            </li>
          </ul>
        </div>
  
        <!-- Support Links -->
        <div>
          <h4 class="text-white font-medium mb-4">Support</h4>
          <ul>
            <li>
              <a href="#" class="hover:underline text-gray-500">Support</a>
            </li>
            <li class="flex items-center">
              <a href="#" class="hover:underline text-gray-500">Panel</a>
              <span class="bg-gray-950 border-2 border-gray-800 text-white text-xs px-2 py-0.5 ml-2">
                New
              </span>
            </li>
          </ul>
        </div>
  
        <!-- Legal Links -->
        <div>
          <h4 class="text-white font-medium mb-4">Legal</h4>
          <ul class="space-y-2">
            <li>
              <a href="#" class="hover:underline flex items-center space-x-2 text-gray-500">
                <div class="border-2 border-gray-800 px-2 py-1 rounded flex items-center">
                  <span>Terms of Service</span>
                  <Icon name="lineicons:arrow-angular-top-right" class="ml-1 text-red-500" />
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline flex items-center space-x-2 text-gray-500">
                <div class="border-2 border-gray-800 px-2 py-1 rounded flex items-center">
                  <span>Privacy Policy</span>
                  <Icon name="lineicons:arrow-angular-top-right" class="ml-1 text-red-500" />
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline flex items-center space-x-2 text-gray-500">
                <div class="border-2 border-gray-800 px-2 py-1 rounded flex items-center">
                  <span>Acceptable Use Policy</span>
                  <Icon name="lineicons:arrow-angular-top-right" class="ml-1 text-red-500" />
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline flex items-center space-x-2 text-gray-500">
                <div class="border-2 border-gray-800 px-2 py-1 rounded flex items-center">
                  <span>Service Level Agreement</span>
                  <Icon name="lineicons:arrow-angular-top-right" class="ml-1 text-red-500" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
  
      <!-- Bottom Section -->
      <div class="border-t border-gray-700 mt-8 pt-4 text-center md:text-left text-gray-500">
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div class="flex space-x-4">
            <a href="#" class="hover:underline">Sitemap</a>
            <a href="#" class="hover:underline">SLA</a>
            <a href="#" class="hover:underline">Contact</a>
          </div>
          <p class="mt-4 md:mt-0">
            © 2024 RubyHost. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  /* Additional styling if necessary */
  </style>
  