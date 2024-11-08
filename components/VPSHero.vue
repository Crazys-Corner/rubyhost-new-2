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
        <h2 class="text-gray-500 text-base sm:text-lg tracking-wider uppercase font-medium mb-2">Ship your product, deploy your app, host your server. Our VPS Hosting gives you full control to run whatever you please.</h2>
        <h1 class="text-4xl sm:text-5xl md:text-6xl leading-tight">
          Virtual Private <span class="text-red-500 font-semibold">Servers</span>
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