<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
const headerRef = ref(null);
const cardsContainer = ref(null);
const cards = ref([]);

// Register cards refs
const card1 = ref(null);
const card2 = ref(null);
const card3 = ref(null);

onMounted(() => {
  // Create main timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse"
    }
  });

  // Header animations
  tl.from(headerRef.value.querySelector('.bg-gray-900'), {
    opacity: 0,
    y: -20,
    duration: 0.6
  })
  .from(headerRef.value.querySelector('h2'), {
    opacity: 0,
    y: 30,
    duration: 0.8
  }, "-=0.3")
  .from(headerRef.value.querySelector('button'), {
    opacity: 0,
    x: -30,
    duration: 0.6
  }, "-=0.5")
  .from(headerRef.value.nextElementSibling, {
    scaleX: 0,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.3");

  // Cards animation
  const cardElements = [card1.value, card2.value, card3.value];
  
  cardElements.forEach((card, index) => {
    gsap.set(card, {
      opacity: 0,
      y: 50,
    });

    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        end: "top 65%",
        toggleActions: "play none none reverse"
      },
      delay: index * 0.2
    });
  });

  // Hover animations for cards
  cardElements.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });
});
</script>

<template>
  <section 
    ref="sectionRef"
    class="bg-[#0b0b0b] text-white py-16 px-4 sm:px-6 overflow-hidden"
  >
    <!-- Header Section -->
    <div
      ref="headerRef"
      class="text-left mb-12 flex flex-col items-center sm:flex-row sm:justify-between sm:items-center sm:ml-10 sm:mb-16"
    >
      <div class="text-center sm:text-left">
        <div
          class="inline-block bg-gray-900 text-gray-300 px-4 py-1 rounded-full text-sm mb-4"
        >
          Services
        </div>
        <h2 class="text-3xl md:text-5xl font-light">
          Our <span class="text-red-500">Hosting</span> Solutions
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

    <!-- Cards Section -->
    <div
      ref="cardsContainer"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
    >
      <!-- Minecraft Hosting Card -->
      <div 
        ref="card1" 
        class="bg-gray-950 p-6 rounded-lg shadow-md transition-all duration-300 flex flex-col relative group"
      >
        <img
          src="/assets/minecraft.png"
          alt="Minecraft Hosting"
          class="rounded-lg w-full h-48 object-cover mb-4 transition-transform duration-300 group-hover:scale-105"
        />
        <div class="flex-grow">
          <h3 class="text-xl font-semibold mb-2">Minecraft Hosting</h3>
          <p class="text-gray-400 mb-6">
            High-Performance intuitive hosting for Minecraft. With our extensive Pterodactyl Panel and numerous other features. Easy installation for Mods, Plugins, and more.
          </p>
        </div>
        <div class="flex justify-center">
          <NuxtLink
            to="/products/minecraft-server-hosting"
            class="border border-gray-800 text-gray-300 py-2 px-4 w-full text-center rounded-md hover:bg-gray-800 transition-all duration-300 group-hover:border-red-500"
          >
            Learn More
          </NuxtLink>
        </div>
        <div class="hidden md:block h-full w-px bg-gray-700 absolute right-0 top-0"></div>
      </div>

      <!-- VPS Hosting Card -->
      <div 
        ref="card2" 
        class="bg-gray-950 p-6 rounded-lg shadow-md transition-all duration-300 flex flex-col relative group"
      >
        <img
          src="/assets/racks.png"
          alt="VPS Hosting"
          class="rounded-lg w-full h-48 object-cover mb-4 transition-transform duration-300 group-hover:scale-105"
        />
        <div class="flex-grow">
          <h3 class="text-xl font-semibold mb-2">VPS Hosting</h3>
          <p class="text-gray-400 mb-6">
            Virtual Machines made for all needs, from games to applications and more. Protected by our network and DDoS protection. Root access and an intuitive panel included.
          </p>
        </div>
        <div class="flex justify-center">
          <NuxtLink
            to="/products/virtual-private-server-hosting"
            class="border border-gray-800 text-gray-300 py-2 px-4 w-full text-center rounded-md hover:bg-gray-800 transition-all duration-300 group-hover:border-red-500"
          >
            Learn More
          </NuxtLink>
        </div>
        <div class="hidden md:block h-full w-px bg-gray-700 absolute right-0 top-0"></div>
      </div>

      <!-- Game Hosting Card -->
      <div 
        ref="card3" 
        class="bg-gray-950 p-6 rounded-lg shadow-md transition-all duration-300 flex flex-col group"
      >
        <img
          src="/assets/gamehosting.png"
          alt="Game Hosting"
          class="rounded-lg w-full h-48 object-cover mb-4 transition-transform duration-300 group-hover:scale-105"
        />
        <div class="flex-grow">
          <h3 class="text-xl font-semibold mb-2">Game Hosting</h3>
          <p class="text-gray-400 mb-6">
            Game Hosting for numerous mainstream games. Low latency, high uptime, DDoS protection, professional support and performance guaranteed.
          </p>
        </div>
        <div class="flex justify-center">
          <NuxtLink
            to="/products/game-hosting"
            class="border border-gray-800 text-gray-300 py-2 px-4 w-full text-center rounded-md hover:bg-gray-800 transition-all duration-300 group-hover:border-red-500"
          >
            Learn More
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Additional hover effects handled by GSAP */
.group:hover {
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
}
</style>