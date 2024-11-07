<template>
    
    <div class="space-y-6 bg-black text-white py-8">
        <div
      ref="headerRef"
      class="text-left mb-12 flex flex-col items-center sm:flex-row sm:justify-between sm:items-center sm:ml-10 sm:mb-16 px-36"
    >
      <div class="text-center sm:text-left">
        <div
          class="inline-block bg-gray-900 text-gray-300 px-4 py-1 rounded-full text-sm mb-4"
        >
          Services
        </div>
        <h2 class="text-3xl md:text-5xl font-light">
          Choose Your <span class="text-red-500">Server Type</span>
        </h2>
      </div>
      <button
        class="mt-4 sm:mt-0 bg-gray-950 text-gray-300 border border-gray-800 px-6 py-2 text-sm flex items-center space-x-2 hover:bg-gray-900 transition-all duration-300 group"
      >
        <span>View All Services</span>
        <Icon 
          name="lineicons:arrow-angular-top-right" 
          class="text-red-500 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
        />
      </button>
    </div>
    <hr class="border-1 border-gray-700 mb-8 transform-origin-left" />

      <div v-for="(server, index) in servers" :key="index" class=" bg-black p-6 mx-24 flex justify-between items-center border-b border-gray-800">
        <div class="">
          <div class="text-sm mb-1">
            <span class="bg-gray-700 px-2 py-1 rounded-md">{{ server.location }}</span>
          </div>
          <h2 class="text-3xl tracking-tight font-bold mt-2">{{ server.model }}</h2>
          <p class="text-sm text-gray-400">Instant Dedicated</p>
        </div>
        <div class="flex space-x-12">
          <div v-for="(spec, label) in server.specs" :key="label" class="text-center">
            <p class="text-2xl font-semibold">{{ spec }}</p>
            <p class="text-xs text-gray-400 uppercase">{{ label }}</p>
          </div>
        </div>
        <button class="hover:underline flex items-center bg-gray-950 border-2 border-gray-800 p-2 text-gray-400">
          Order Now <Icon 
          name="lineicons:arrow-angular-top-right" 
          class="text-red-500 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
        />
        </button>
      </div>
    </div>
    <Services />
    <DedicatedServerInsights />
  </template>
  
  <script>
  export default {
    data() {
      return {
        servers: [
          {
            location: 'Dallas, New York',
            model: 'E-2276G 3.8GHz Coffee Lake',
            specs: {
              Cores: '5',
              Memory: '5 GB',
              Storage: '5 GB SDD',
              Bandwidth: '20TB / 1GBPS',
            },
          },
          {
            location: 'Dallas, New York',
            model: 'E-2276G 3.8GHz Latte Cake',
            specs: {
              Cores: '5',
              Memory: '5 GB',
              Storage: '5 GB SDD',
              Bandwidth: '20TB / 1GBPS',
            },
          },
          {
            location: 'Dallas, New York',
            model: 'E-2276G 3.8GHz Coffee Lake',
            specs: {
              Cores: '5',
              Memory: '5 GB',
              Storage: '5 GB SDD',
              Bandwidth: '20TB / 1GBPS',
            },
          },
          {
            location: 'Dallas, New York',
            model: 'E-2276G 3.8GHz Coffee Lake',
            specs: {
              Cores: '5',
              Memory: '5 GB',
              Storage: '5 GB SDD',
              Bandwidth: '20TB / 1GBPS',
            },
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  button {
    transition: color 0.3s;
  }
  </style>
  