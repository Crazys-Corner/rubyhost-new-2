<template>
  <div class="service-section bg-dark p-4 sm:p-8 flex flex-col sm:flex-row items-center sm:items-center justify-between text-center sm:text-left">
    <div class="mb-4 sm:ml-20">
      <button class="get-started-btn bg-gray-700 text-white py-2 px-4 rounded-md mb-4 w-full sm:w-auto">
        Get Started with RubyHost
      </button>
      <h1 class="text-white text-3xl sm:text-5xl font-bold mb-2">Services</h1>
      <p class="text-gray-400 text-sm sm:text-base">
        Please check below for our additional services that RubyHost provides.
      </p>
    </div>
    <img src="@/assets/logo.svg" alt="RubyHost Logo" class="service-logo w-32 sm:w-48 mb-4 sm:mb-0" />
    <div class="mt-4 sm:mt-0 sm:mr-20 flex sm:items-center">
      <NuxtLink to="/products" class="shop-now-btn bg-gray-700 text-white py-2 px-4 rounded-md flex items-center justify-center sm:justify-start w-full sm:w-auto">
        Shop Now
        <span class="ml-2 text-red-500">&#10148;</span>
      </NuxtLink>
    </div>
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
  max-width: 12rem; /* Default size for desktop */
}
@media (max-width: 640px) {
  .service-logo {
    max-width: 8rem; /* Smaller size for mobile */
  }
}
</style>
