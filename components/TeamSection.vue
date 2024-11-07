<template>
    <div class="flex space-x-4 p-4 bg-gray-900">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="selectedTab = tab"
        :class="{
          'border-white text-white': selectedTab === tab,
          'border-gray-700 text-gray-400': selectedTab !== tab
        }"
        class="px-4 py-2 border rounded-md hover:bg-gray-800 focus:outline-none"
      >
        {{ tab }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tabs: ['Executive Team', 'Support Team', 'Design Team', 'DevOps Team', 'Media Team', 'Marketing Team'],
        selectedTab: 'Executive Team',
      };
    },
  };
  </script>
  
  <style scoped>
  button {
    transition: background-color 0.2s;
  }
  </style>