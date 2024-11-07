<template>
  <section class="bg-black text-white py-12 relative overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 md:px-12">
      <div class="mb-8 opacity-0 transform translate-y-8 transition-all duration-700" ref="aboutSection">
        <div
          class="inline-block bg-gray-900 text-gray-300 px-4 py-1 rounded-full text-sm mb-4"
        >
          About RubyHost
        </div>
        
        <h3 class="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 font-medium">Meet <span class="text-red-500">our team</span></h3>
      </div>
      
      <div class="flex flex-wrap justify-center mb-8 gap-2 opacity-0 transform translate-y-8 transition-all duration-700" ref="tabsSection">
        <button v-for="(tab, index) in tabs" :key="index" @click="activeTab = index"
                class="px-3 py-1 sm:px-4 sm:py-2 border border-gray-700 rounded-md hover:bg-gray-800"
                :class="{ 'bg-gray-800': activeTab === index }">
          {{ tab }}
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6" ref="teamContainer">
        <div
  v-for="(member, index) in filteredTeamMembers"
  :key="member.name + index"
  class="team-member"
>

          <div class="flex items-center mb-4">
            <img :src="member.image" alt="Profile image" class="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-3 sm:mr-4" />
            <div>
              <div class="flex flex-wrap space-x-2 mb-1 sm:mb-2">
                <span v-for="(tag, tagIndex) in member.tags" :key="tagIndex" class="text-xs bg-gray-700 px-2 py-1 rounded">
                  {{ tag }}
                </span>
              </div>
              <h4 class="text-lg sm:text-xl font-semibold">{{ member.name }}</h4>
              <p class="text-xs sm:text-sm text-gray-400">{{ member.position }}</p>
            </div>
          </div>
          <p class="text-gray-400 text-sm sm:text-base">{{ member.description }}</p>
        </div>
      </div>
    </div>
  </section>
  
  <section class="bg-black text-white py-12 relative overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 md:px-12">
      <div class="mb-8 opacity-0 transform translate-y-8 transition-all duration-700" ref="journeySection">
        <h3 class="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 font-medium">Meet <span class="text-red-500">our journey</span></h3>
      </div>

      <div class="md:space-y-16 md:px-8">
        <div class="flex flex-col sm:flex-row items-center mb-8 opacity-0 transform translate-y-8 transition-all duration-700" ref="step1">
          <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-red-500 text-white rounded-full">1</div>
          <div class="mt-4 sm:mt-0 sm:ml-6 bg-gray-950 border-2 border-gray-800 p-4 sm:p-6 rounded-md w-full">
            <h4 class="text-lg sm:text-xl font-semibold">July 2024</h4>
            <p class="text-gray-400 text-sm sm:text-base">RubyHost was conceptualized and development began.</p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row-reverse items-center mb-8 opacity-0 transform translate-y-8 transition-all duration-700" ref="step2">
          <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-red-500 text-white rounded-full">2</div>
          <div class="mt-4 sm:mt-0 sm:mr-6 bg-gray-950 border-2 border-gray-800 p-4 sm:p-6 rounded-md w-full">
            <h4 class="text-lg sm:text-xl font-semibold">August 2024</h4>
            <p class="text-gray-400 text-sm sm:text-base">RubyHost has started demoing services to clients.</p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center mb-8 opacity-0 transform translate-y-8 transition-all duration-700" ref="step3">
          <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-red-500 text-white rounded-full">3</div>
          <div class="mt-4 sm:mt-0 sm:ml-6 bg-gray-950 border-2 border-gray-800 p-4 sm:p-6 rounded-md w-full">
            <h4 class="text-lg sm:text-xl font-semibold">October 2024</h4>
            <p class="text-gray-400 text-sm sm:text-base">We have opened services publicly to all prospective clients.</p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row-reverse items-center opacity-0 transform translate-y-8 transition-all duration-700" ref="step4">
          <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-red-500 text-white rounded-full">4</div>
          <div class="mt-4 sm:mt-0 sm:mr-6 bg-gray-950 border-2 border-gray-800 p-4 sm:p-6 rounded-md w-full">
            <h4 class="text-lg sm:text-xl font-semibold">November 2024</h4>
            <p class="text-gray-400 text-sm sm:text-base">Introduced all our current machines and deployment systems.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import daniel from '@/assets/daniel.png';

export default {
  data() {
    return {
      teamRefs: [],
      activeTab: 0,
      tabs: [
        'Executive Team',
        'Support Team',
        'Design Team',
        'DevOps Team',
        'Media Team',
        'Marketing Team',
      ],
      teamMembers: [
        {
          image: daniel,
          name: 'Logan Byers',
          position: 'Chief Financial Officer',
          description: 'Logan oversees billing and management of RubyHost.',
          tags: ['Executive', 'Finance'],
          team: 'Executive Team',
        },
        {
          image: daniel,
          name: 'Logan Byers',
          position: 'Chief Financial Officer',
          description: 'Logan oversees billing and management of RubyHost.',
          tags: ['Executive', 'Finance'],
          team: 'Executive Team',
        },
        {
          image: daniel,
          name: 'Logan Byers',
          position: 'Chief Financial Officer',
          description: 'Logan oversees billing and management of RubyHost.',
          tags: ['Executive', 'Finance'],
          team: 'Marketing Team',
        },
        {
          image: daniel,
          name: 'Logan Byers',
          position: 'Chief Financial Officer',
          description: 'Logan oversees billing and management of RubyHost.',
          tags: ['Executive', 'Finance'],
          team: 'Media Team',
        },
        {
          image: daniel,
          name: 'Logan Byers',
          position: 'Chief Financial Officer',
          description: 'Logan oversees billing and management of RubyHost.',
          tags: ['Executive', 'Finance'],
          team: 'DevOps Team',
        },
        {
          image: daniel,
          name: 'Logan Byers',
          position: 'Chief Financial Officer',
          description: 'Logan oversees billing and management of RubyHost.',
          tags: ['Executive', 'Finance'],
          team: 'Design Team',
        },
        {
          image: daniel,
          name: 'Logan Byers',
          position: 'Chief Financial Officer',
          description: 'Logan oversees billing and management of RubyHost.',
          tags: ['Executive', 'Finance'],
          team: 'Support Team',
        },

        // ... other team members ...
      ],
      observedElements: [],
    };
  },
  computed: {
    filteredTeamMembers() {
      const filtered = this.teamMembers.filter(
        (member) => member.team === this.tabs[this.activeTab]
      );
      return filtered;
    },
  },
  mounted() {
    this.initializeObservers();
  },
  watch: {
    activeTab() {
      this.initializeObservers();
    },
  },
  methods: {
    initializeObservers() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };

      // Disconnect the previous observer if it exists
      if (this.observer) {
        this.observer.disconnect();
      }

      // Ensure that the DOM has updated
      this.$nextTick(() => {
        // Select elements using querySelectorAll on the teamContainer ref
        const teamMembers = this.$refs.teamContainer
          ? this.$refs.teamContainer.querySelectorAll('.team-member')
          : [];

        this.observedElements = [
          this.$refs.aboutSection,
          this.$refs.tabsSection,
          ...teamMembers,
          this.$refs.journeySection,
          this.$refs.step1,
          this.$refs.step2,
          this.$refs.step3,
          this.$refs.step4,
        ];

        this.observer = new IntersectionObserver(
          this.handleIntersection,
          options
        );
        this.observedElements.forEach((element) => {
          if (element) {
            this.observer.observe(element);
          }
        });
      });
    },
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    },
  },
};
</script>


<style scoped>
.container {
  max-width: 1200px;
}

.animate {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.team-member {
  @apply bg-black p-4 sm:p-6 border-t border-gray-800 opacity-0 transform translate-y-8 transition-all duration-700;
}
</style>