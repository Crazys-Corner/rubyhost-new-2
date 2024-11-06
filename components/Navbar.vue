<template>
  <nav class="fixed top-12 left-4 right-4 md:left-48 md:right-auto w-auto md:w-3/4 bg-transparent text-white py-2 px-4 md:px-6 z-50 flex items-center justify-between rounded-full border border-gray-800">
    <!-- Logo Section -->
    <div class="flex items-center space-x-2">
      <img src="/assets/logo.svg" alt="Logo" class="h-12 w-12" />
    </div>

    <!-- Mobile Menu Toggle Button -->
    <button @click="isOpen = !isOpen" class="md:hidden text-gray-400 focus:outline-none">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>

    <!-- Links Section for Desktop -->
    <ul class="hidden md:flex space-x-6 text-gray-400 font-medium">
      <li><NuxtLink to="/" class="hover:text-white">Home</NuxtLink></li>
      <li><NuxtLink to="/about" class="hover:text-white">About</NuxtLink></li>
      <li><NuxtLink to="/products" class="hover:text-white">Products</NuxtLink></li>
      <li><NuxtLink to="/dedicated-servers" class="hover:text-white">Dedicated Servers</NuxtLink></li>
      <li><NuxtLink to="/network" class="hover:text-white">Our Network</NuxtLink></li>
      <li><NuxtLink to="/legal" class="hover:text-white">Legal</NuxtLink></li>
      <li><NuxtLink to="/blog" class="hover:text-white">Blog</NuxtLink></li>
    </ul>

    <!-- Buttons Section for Desktop -->
    <div class="hidden md:flex space-x-3">
      <NuxtLink to="/billing" class="bg-red-600 hover:bg-red-700 text-white font-semibold py-1.5 px-4 rounded-lg">Billing</NuxtLink>
      <NuxtLink to="/panel" class="bg-red-800 hover:bg-red-900 text-white font-semibold py-1.5 px-4 rounded-lg">Panel</NuxtLink>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden absolute top-full left-0 right-0 bg-gray-900 border-t border-gray-800 text-center py-4 space-y-4">
      <ul class="space-y-4 text-gray-400 font-medium">
        <li><NuxtLink to="/" @click="isOpen = false" class="hover:text-white">Home</NuxtLink></li>
        <li><NuxtLink to="/about" @click="isOpen = false" class="hover:text-white">About</NuxtLink></li>
        <li><NuxtLink to="/products" @click="isOpen = false" class="hover:text-white">Products</NuxtLink></li>
        <li><NuxtLink to="/dedicated-servers" @click="isOpen = false" class="hover:text-white">Dedicated Servers</NuxtLink></li>
        <li><NuxtLink to="/network" @click="isOpen = false" class="hover:text-white">Our Network</NuxtLink></li>
        <li><NuxtLink to="/legal" @click="isOpen = false" class="hover:text-white">Legal</NuxtLink></li>
        <li><NuxtLink to="/blog" @click="isOpen = false" class="hover:text-white">Blog</NuxtLink></li>
      </ul>
      <div class="space-y-2 mt-4">
        <NuxtLink to="/billing" @click="isOpen = false" class="block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg">Billing</NuxtLink>
        <NuxtLink to="/panel" @click="isOpen = false" class="block bg-red-800 hover:bg-red-900 text-white font-semibold py-2 rounded-lg">Panel</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const isOpen = ref(false);
</script>

<style scoped>
nav {
  backdrop-filter: blur(5px); /* Optional: Add a subtle blur effect for a modern look */
}
</style>
