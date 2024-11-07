<template>
    <div class="p-4 bg-gray-800 rounded shadow-lg text-center">
      <img :src="image" alt="Profile picture of {{ name }}" class="w-24 h-24 mx-auto rounded-full mb-4" />
      <h3 class="text-xl font-semibold">{{ name }}</h3>
      <p class="text-sm text-gray-400">{{ position }}</p>
      <p class="mt-2 text-gray-300">{{ bio }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TeamMemberCard',
    props: {
      name: {
        type: String,
        required: true,
      },
      position: {
        type: String,
        required: true,
      },
      bio: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .shadow-lg {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>