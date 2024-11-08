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
            <p class="text-gray-400 text-sm sm:text-base">RubyHost has started demoing services to it's clients.</p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center mb-8 opacity-0 transform translate-y-8 transition-all duration-700" ref="step3">
          <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-red-500 text-white rounded-full">3</div>
          <div class="mt-4 sm:mt-0 sm:ml-6 bg-gray-950 border-2 border-gray-800 p-4 sm:p-6 rounded-md w-full">
            <h4 class="text-lg sm:text-xl font-semibold">October 2024</h4>
            <p class="text-gray-400 text-sm sm:text-base">Public beta of RubyHost's game hosting released.</p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row-reverse items-center opacity-0 transform translate-y-8 transition-all duration-700" ref="step4">
          <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-red-500 text-white rounded-full">4</div>
          <div class="mt-4 sm:mt-0 sm:mr-6 bg-gray-950 border-2 border-gray-800 p-4 sm:p-6 rounded-md w-full">
            <h4 class="text-lg sm:text-xl font-semibold">December 2024</h4>
            <p class="text-gray-400 text-sm sm:text-base">ASN (AS401477) was given to RubyHost by the ARIN and RubyHost moves into it's first datacenter.</p>
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
          name: 'Cameron Khouri',
          position: 'Chief Technology Officer',
          description: 'Cam oversees everything on the technical side. He is the person behind our infrastructure, hardware deployments and more.',
          tags: ['Executive', 'Technology'],
          team: 'Executive Team',
        },
        {
          image: daniel,
          name: 'Xander DeAngelo',
          position: 'Chief Operating Officer',
          description: 'Xander oversees everything related to day to day operations. From hiring new support staff, to advertisement and marketing, Xander is the go to for first point of contact.',
          tags: ['Executive', 'Operations'],
          team: 'Executive Team',
        },
        {
          image: daniel,
          name: 'Xander DeAngelo',
          position: 'Chief Operating Officer',
          description: 'Xander oversees everything related to day to day operations. From hiring new support staff, to advertisement and marketing, Xander is the go to for first point of contact.',
          tags: ['Executive', 'Operations'],
          team: 'Media Team',
        },
        {
          image: daniel,
          name: 'Xander DeAngelo',
          position: 'Chief Operating Officer',
          description: 'Xander oversees everything related to day to day operations. From hiring new support staff, to advertisement and marketing, Xander is the go to for first point of contact.',
          tags: ['Executive', 'Operations'],
          team: 'Design Team',
        },
        {
          image: daniel,
          name: 'Xander DeAngelo',
          position: 'Chief Operating Officer',
          description: 'Xander oversees everything related to day to day operations. From hiring new support staff, to advertisement and marketing, Xander is the go to for first point of contact.',
          tags: ['Executive', 'Operations'],
          team: 'Marketing Team',
        },
        {
          image: daniel,
          name: '\'Kiter\'',
          position: 'Discord Management',
          description: 'Kiter oversees and manages our discord server. He maintains a professional outlook and helps direct customers in the directions they need to go for their inquiries.',
          tags: ['Management', 'Social Media'],
          team: 'Media Team',
        },
        {
          image: daniel,
          name: 'Sakariye M',
          position: 'P3 Support',
          description: 'Sakariye assists users with day to day issues and inqueries.',
          tags: ['Support'],
          team: 'Support Team',
        },
        {
          image: daniel,
          name: '\'Iron\'',
          position: 'P3 Support',
          description: 'Iron assists users with day to day issues and inqueries.',
          tags: ['Support'],
          team: 'Support Team',
        },
        {
          image: daniel,
          name: 'Jokūbas P',
          position: 'P3 Support',
          description: 'Jokūbas assists users with day to day issues and inqueries.',
          tags: ['Support'],
          team: 'Support Team',
        },
        {
          image: daniel,
          name: 'Zephyr M',
          position: 'P3 Support',
          description: 'Zephyr assists users with day to day issues and inqueries.',
          tags: ['Support'],
          team: 'Support Team',
        },
        {
          image: daniel,
          name: 'Parker S',
          position: 'DevOps Engineer',
          description: 'Parker is behind majority of the deployments and updates to our systems, as well as development behind most RubyHost additive websites and content.',
          tags: ['DevOps'],
          team: 'DevOps Team',
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