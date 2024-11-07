<template>
    <div class="service-section bg-dark p-8 text-center flex items-center justify-between">
      <div>
        <button class="get-started-btn bg-gray-700 text-white py-2 px-4 rounded-md mb-4">
          Get Started with RubyHost
        </button>
        <h1 class="text-white text-5xl font-bold mb-2">Services</h1>
        <p class="text-gray-400">
          Please check below for our additional services that RubyHost provides.
        </p>
      </div>
      <img src="@/assets/logo.svg" alt="RubyHost Logo" class="service-logo w-48" />
      <button class="shop-now-btn bg-gray-700 text-white py-2 px-4 rounded-md flex items-center">
        Shop Now
        <span class="ml-2 text-red-500">&#10148;</span>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServiceSection',
  };
  </script>
  
  <style scoped>
  .service-section {
    background-color: #1A1A1A; /* Dark background */
   
  }
  .get-started-btn:hover, .shop-now-btn:hover {
    background-color: #333;
  }
  .service-logo {
    max-width: 12rem;
  }
  </style>