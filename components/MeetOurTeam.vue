<template>
    <section class="bg-black text-white py-12">
      <div class="container mx-auto px-4">
        <div class="mb-8">
          <h2 class="text-4xl font-bold">About RubyHost</h2>
          <h3 class="text-6xl font-bold mt-4 text-red-500">Meet <span class="text-white">our team</span></h3>
        </div>
        
        <div class="flex justify-center mb-8 space-x-4">
          <button v-for="(tab, index) in tabs" :key="index" @click="activeTab = index"
                  class="px-4 py-2 border border-gray-700 rounded-md hover:bg-gray-800"
                  :class="{ 'bg-gray-800': activeTab === index }">
            {{ tab }}
          </button>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(member, index) in teamMembers" :key="index" class="bg-gray-900 p-6 rounded-lg">
            <div class="flex items-center mb-4">
              <img :src="member.image" alt="Profile image" class="w-16 h-16 rounded-full mr-4" />
              <div>
                <div class="flex space-x-2 mb-2">
                  <span v-for="(tag, tagIndex) in member.tags" :key="tagIndex" class="text-xs bg-gray-700 px-2 py-1 rounded">
                    {{ tag }}
                  </span>
                </div>
                <h4 class="text-xl font-semibold">{{ member.name }}</h4>
                <p class="text-sm text-gray-400">{{ member.position }}</p>
              </div>
            </div>
            <p class="text-gray-400">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeTab: 0,
        tabs: [
          'Executive Team',
          'Support Team',
          'Design Team',
          'DevOps Team',
          'Media Team',
          'Marketing Team'
        ],
        teamMembers: [
          {
            image: '/assets/rubyhost/team-member.jpg', // Replace with actual image path
            name: 'Logan Byers',
            position: 'Chief Financial Officer',
            description: 'Logan oversees billing and management of RubyHost.',
            tags: ['Executive', 'Finance']
          },
          // Duplicate or modify as needed for other team members
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>