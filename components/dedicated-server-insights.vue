<template>
    <div class="py-8 px-4 lg:px-16 bg-black text-white">
      <div class="ml-10 mb-8">
        <div class="inline-block bg-gray-900 text-gray-300 px-4 py-1 rounded-full text-sm mb-4">
          Customize your Server
        </div>
        <h2 class="text-3xl md:text-5xl font-light">Dedicated Server Insights</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div v-for="(feature, index) in features" :key="index" class="rounded-md overflow-hidden shadow-lg border-2 border-gray-900">
          <img :src="feature.image" alt="Server Feature" class="w-full h-40 object-cover" />
          <div class="p-4">
            <h3 class="text-xl font-bold mb-2">{{ feature.title }}</h3>
            <p class="text-sm text-gray-400">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import image from '~/assets/9950x.webp';
  export default {
    data() {
      return {
        features: [
          {
            image: image,
            title: 'Server Feature 1',
            description: 'High-performance servers optimized for Minecraft. Easy mod installation and 24/7 support.',
          },
          {
            image: image,
            title: 'Server Feature 2',
            description: 'Top-tier security features with DDoS protection and instant server deployment.',
          },
          {
            image: image,
            title: 'Server Feature 3',
            description: 'Custom server configurations to meet your business needs with scalable resources.',
          },
          {
            image: image,
            title: 'Server Feature 4',
            description: 'Redundant network connections ensuring uptime and optimal performance.',
          },
          {
            image: image,
            title: 'Server Feature 5',
            description: 'Affordable pricing plans for dedicated hosting with no hidden fees.',
          },
          {
            image: image,
            title: 'Server Feature 6',
            description: '24/7 customer support to help you manage and troubleshoot any issues.',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  img {
    transition: transform 0.3s;
  }
  img:hover {
    transform: scale(1.05);
  }
  </style>