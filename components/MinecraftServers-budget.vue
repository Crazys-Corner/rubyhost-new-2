<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
const headerRef = ref(null);
const cards = ref([]); // Single array to hold card refs
const serverPlans = ref([]);

// Fetch budget products from the API
onMounted(async () => {
  try {
    const response = await fetch('/api/minecraft-server-hosting');
    const data = await response.json();
    serverPlans.value = data.budget.map(product => ({
      name: product.name,
      features: product.description.split('\r\n'),
      price: `$${product.pricing.USD.monthly} / month`,
      description: 'High-performance servers optimized for Minecraft.', // Placeholder, can be enhanced with more details
      isMostPopular: product.name.includes('Diamond'), // Example condition for highlighting popular plans
      product_url: product.product_url
    }));
  } catch (error) {
    console.error('Failed to fetch server plans:', error);
  }

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
  const cardElements = cards.value;

  cardElements.forEach((card, index) => {
    if (!card) return; // Ensure the card element exists

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

    // Hover animations for cards
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
      class=" mb-12 ml-10 px-4"
    >
      <div
        class="inline-block bg-gray-900 text-gray-300 px-4 py-1 rounded-full text-sm mb-4"
      >
        Minecraft Servers
      </div>
      <h2 class="text-4xl md:text-5xl font-light">
        Choose Your <span class="text-red-500">Server Type</span>
      </h2>
    </div>
    <hr class="border-1 border-gray-700 mb-8 transform-origin-left mx-4" />

    <!-- Cards Section -->
    <div
      ref="cardsContainer"
      class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
    >
      <div 
        v-for="(plan, index) in serverPlans" 
        :key="index" 
        ref="cards" 
        :class="[
          'bg-gray-950 p-6 rounded-lg shadow-md transition-all duration-300 flex flex-col relative group border',
          plan.isMostPopular ? 'border-red-500' : 'border-gray-700'
        ]"
      >
        <h3 class="text-xl font-semibold mb-2">{{ plan.name }}</h3>
        <ul class="text-gray-400 mb-6 space-y-2">
          <li v-for="(feature, i) in plan.features" :key="i">{{ feature }}</li>
        </ul>
        <div class="text-center text-2xl font-bold mb-4">{{ plan.price }}</div>
        <p class="text-gray-400 mb-6">
          {{ plan.description }}
        </p>
        <div class="flex justify-center mt-auto">
          <a :href="plan.product_url" target="_blank"
            class="border border-gray-800 text-gray-300 py-2 px-4 w-full text-center rounded-md hover:bg-gray-800 transition-all duration-300"
          >
            Add to Cart
        </a>
        </div>
        <div v-if="plan.isMostPopular" class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
          Most Popular
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.group:hover {
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
}
</style>
