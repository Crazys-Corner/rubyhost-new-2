<template>
    <div class="flex justify-center bg-black space-x-4 py-8">
      <div
        v-for="tier in tiers"
        :key="tier.name"
        @click="redirectTo(tier.route)"
        class="w-1/4 p-6 bg-black hover:bg-gray-900 border-2 border-gray-800 text-white shadow-lg rounded-lg hover:shadow-2xl transition duration-300 cursor-pointer"
      >
        <h2 class="text-2xl font-semibold mb-4">{{ tier.name }}</h2>
        <p class="text-gray-300 mb-2">{{ tier.description }}</p>
        <ul class="text-gray-400">
          <li v-for="spec in tier.specs" :key="spec">- {{ spec }}</li>
        </ul>
        <p class="text-red-500 mt-4">Includes 2.7+ Tbit DDoS Protection</p>
        <button class="bg-gray-950 border-2 border-gray-800 p-2 text-gray-400 hover:bg-gray-900 mt-4">See Plans</button>
      </div>
    </div>
    <!-- Section to see all hardware -->
    <div class="flex justify-center bg-black pt-8">
      <NuxtLink to="/network" class="bg-gray-950 border-2 border-gray-800 p-2 hover:bg-gray-800 text-gray-400">View Our Network</NuxtLink>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Tiers',
    props: {
      productLine: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        tiers: [
          { 
            name: 'Budget', 
            description: 'Affordable and reliable options.', 
            specs: ['Xeon E5 2690v3', 'DDR4 2133', 'SATA SSD'],
            route: `/products/${this.productLine}/budget` 
          },
          { 
            name: 'Premium', 
            description: 'Enhanced performance and features.', 
            specs: ['Ryzen 9 5950x', 'DDR4 3200', 'NVMe SSD'],
            route: `/products/${this.productLine}/premium` 
          },
          { 
            name: 'Pro', 
            description: 'Top-tier performance for professionals.', 
            specs: ['Ryzen 9 9950x', 'DDR5 5600', 'NVMe SSD'],
            route: `/products/${this.productLine}/pro` 
          }
        ]
      };
    },
    methods: {
      redirectTo(route) {
        this.$router.push(route);
      }
    }
  };
  </script>
  
  <style scoped>
  .hover\:shadow-2xl:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
  </style>