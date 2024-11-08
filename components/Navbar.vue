<template>
  <!-- Mobile Top Bar -->
  <div @click="isOpen = true" class="md:hidden fixed top-0 left-0 right-0 flex justify-center items-center h-6 z-50">
    <div class="w-24 h-1 bg-white rounded-full mt-2"></div>
  </div>

  <!-- Mobile Menu -->
  <transition name="slide-down">
    <div v-if="isOpen" class="md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 text-center py-6 space-y-6 overflow-y-auto z-50">
      <!-- Close button -->
      <button @click="isOpen = false" class="absolute top-4 right-4 text-white focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Logo Section -->
      <div class="flex justify-center mt-4">
        <img src="/assets/logo.svg" alt="Logo" class="h-16 w-16" />
      </div>

      <!-- Menu items -->
      <ul class="space-y-6 text-white text-lg font-medium mt-8">
        <li><NuxtLink to="/" @click="isOpen = false" class="hover:text-red-500">Home</NuxtLink></li>
        <li><NuxtLink to="/about" @click="isOpen = false" class="hover:text-red-500">About</NuxtLink></li>
        <li><NuxtLink to="/products" @click="isOpen = false" class="hover:text-red-500">Products</NuxtLink></li>
        <li><NuxtLink to="/dedicated-servers" @click="isOpen = false" class="hover:text-red-500">Dedicated Servers</NuxtLink></li>
        <li><NuxtLink to="/network" @click="isOpen = false" class="hover:text-red-500">Our Network</NuxtLink></li>
        <li><NuxtLink to="/contact" @click="isOpen = false" class="hover:text-red-500">Contact</NuxtLink></li>
        <li><NuxtLink to="/legal" @click="isOpen = false" class="hover:text-red-500">Legal</NuxtLink></li>
        <li><NuxtLink to="/blog" @click="isOpen = false" class="hover:text-red-500">Blog</NuxtLink></li>
      </ul>

      <!-- Buttons -->
      <div class="space-y-4 mt-8">
        <NuxtLink to="/billing" @click="isOpen = false" class="block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg mx-8">Billing</NuxtLink>
        <NuxtLink to="/panel" @click="isOpen = false" class="block bg-red-800 hover:bg-red-900 text-white font-semibold py-2 rounded-lg mx-8">Panel</NuxtLink>
      </div>
    </div>
  </transition>

  <!-- Desktop Navbar -->
  <nav class="hidden md:flex fixed top-12 left-48 w-3/4 bg-transparent text-white py-2 px-6 z-50 items-center justify-between rounded-full border border-gray-800">
    <!-- Logo Section -->
    <div class="flex items-center space-x-2">
      <img src="/assets/logo.svg" alt="Logo" class="h-12 w-12" />
    </div>

    <!-- Links Section for Desktop -->
    <ul class="flex space-x-6 text-gray-400 font-medium">
      <li><NuxtLink to="/" class="hover:text-white">Home</NuxtLink></li>
      <li><NuxtLink to="/about" class="hover:text-white">About</NuxtLink></li>
      <li><NuxtLink to="/products" class="hover:text-white">Products</NuxtLink></li>
      <li><NuxtLink to="/dedicated-servers" class="hover:text-white">Dedicated Servers</NuxtLink></li>
      <li><NuxtLink to="/network" class="hover:text-white">Our Network</NuxtLink></li>
      <li><NuxtLink to="/contact" class="hover:text-white">Contact</NuxtLink></li>
      <li><NuxtLink to="/legal" class="hover:text-white">Legal</NuxtLink></li>
      <li><NuxtLink to="/blog" class="hover:text-white">Blog</NuxtLink></li>
    </ul>

    <!-- Buttons Section for Desktop -->
    <div class="flex space-x-3">
      <NuxtLink to="/billing" class="bg-red-600 hover:bg-red-700 text-white font-semibold py-1.5 px-4 rounded-lg">Billing</NuxtLink>
      <NuxtLink to="/panel" class="bg-red-800 hover:bg-red-900 text-white font-semibold py-1.5 px-4 rounded-lg">Panel</NuxtLink>
    </div>
  </nav>
</template>
<script setup>
import { ref } from 'vue';
const isOpen = ref(false);
</script>
<style scoped>
nav {
  backdrop-filter: blur(5px);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
}
.slide-down-enter-to,
.slide-down-leave-from {
  transform: translateY(0%);
}
</style>
