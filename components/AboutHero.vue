<template>
    <div class="relative bg-black text-white pt-48">
      <div class="absolute inset-0">
        <img
          src="/assets/background.png" 
          alt="Server Room Background" 
          class="w-full h-full object-cover opacity-70"
        />
      </div>
      <div class="relative container mx-auto py-16 px-6 flex flex-col items-start">
        <h2 class="text-gray-500 text-base sm:text-lg tracking-wider uppercase font-medium mb-2">Learn more about who we are, our mission, and the people behind RubyHost.</h2>
        <h1 class="text-4xl sm:text-5xl md:text-6xl leading-tight">
          About <span class="text-red-500 font-semibold">RubyHost</span>
        </h1>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutRubyHostSection'
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>