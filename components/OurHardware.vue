<template>
  <div ref="appContainer">
    <section
      ref="headerSection"
      class="flex flex-col md:flex-row items-center justify-between bg-gray-950 p-6 md:p-10"
    >
      <!-- Heading Section -->
      <div ref="headerContent" class="text-center md:text-left md:ml-10 mb-6 md:mb-0 opacity-0">
        <span
          class="inline-block px-3 py-1 mb-2 text-sm font-light text-gray-300 bg-gray-900 rounded-full"
        >
          Putting the Serve in Server
        </span>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-light text-white">
          Our <span class="text-red-500">Hardware</span>
        </h2>
      </div>

      <!-- Buttons Section -->
      <div
        ref="buttonContainer"
        class="flex flex-wrap justify-center md:justify-end space-x-0 md:space-x-4 mr-0 md:mr-10 space-y-2 md:space-y-0 opacity-0"
      >
        <button
          v-for="(tier, index) in tiers"
          :key="index"
          :class="[
            'px-4 py-2 text-sm font-medium rounded-lg transition w-full md:w-auto',
            activeTier === tier
              ? 'bg-gray-800 text-white'
              : 'bg-gray-950 border-2 border-gray-800 text-gray-400',
          ]"
          @click="setActiveTier(tier)"
        >
          {{ tier }}
        </button>
      </div>
    </section>

    <hr class="border-1 border-gray-800" />

    <!-- Plan Section -->
    <section
      ref="planSection"
      class="flex flex-col md:flex-row items-center justify-between bg-gray-950 p-6 md:p-24"
    >
      <!-- Left Content -->
      <div
        ref="planContent"
        class="w-full md:w-2/5 p-4 md:p-6 text-center md:text-left opacity-0"
      >
        <img
          :src="displayedPlan.logo"
          alt="Logo"
          class="h-8 mx-auto md:mx-0 mb-4"
        />
        <h3 class="text-2xl sm:text-3xl font-semibold text-white mb-2">
          {{ displayedPlan.name }}
        </h3>
        <p class="text-gray-400 mb-4">
          {{ displayedPlan.description }}
        </p>
        <div class="text-white text-3xl md:text-4xl font-semibold mb-2">
          From <span class="text-4xl md:text-5xl">{{ displayedPlan.price }}</span> /GB
        </div>
      </div>

      <!-- Right Content -->
      <div
        ref="planDetails"
        class="w-full md:w-3/5 p-4 md:p-6 md:border-l-2 border-gray-800 opacity-0"
      >
        <img
          :src="displayedPlan.image"
          alt="Server Image"
          class="w-full md:w-3/4 rounded-lg mb-6 mx-auto md:mx-0"
        />
        <div
          class="flex flex-col md:flex-row justify-between items-center mb-6 p-4 md:p-6 bg-gray-950 rounded-lg shadow-md text-center md:text-left"
        >
          <div>
            <h2 class="text-white font-semibold text-lg">
              {{ displayedPlan.promoTitle }}
            </h2>
            <p class="text-gray-400 mt-2">
              {{ displayedPlan.promoDescription }}
            </p>
          </div>
          <NuxtLink
            class="flex items-center justify-center px-3 ml-0 md:ml-4 mt-4 md:mt-0 text-sm py-3 bg-gray-950 border-2 border-gray-800 text-white font-medium hover:text-red-500"
            to="/products"
            >
            Get Started
            <span class="ml-1 text-red-400">
              <Icon name="lineicons:arrow-angular-top-right" class="text-red-500" />
            </span>
          </NuxtLink>
        </div>

        <!-- Specifications -->
        <div ref="specContainer" class="grid grid-cols-2 md:flex md:gap-3 mb-4 text-left">
          <div
            v-for="(spec, index) in displayedPlan.specifications"
            :key="index"
            class="spec-item bg-gray-950 border border-gray-800 px-3 py-2 text-xs text-gray-100 flex-1 flex flex-col items-center md:items-start justify-center shadow mb-2 md:mb-0 opacity-0"
          >
            <span class="font-semibold text-xs text-gray-400">{{ spec.label }}</span>
            <span class="mt-1 font-medium text-sm">{{ spec.value }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
// Import statements
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

// Import your assets (ensure these paths are correct)
import amd from '~/assets/AMD.svg';
import intel from '~/assets/Intel.svg';
import propic from '~/assets/9950x.webp';
import premiumpic from '~/assets/5950x.jpg';
import budgetpic from '~/assets/serverimage.png';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Refs
const appContainer = ref(null);
const headerContent = ref(null);
const buttonContainer = ref(null);
const planContent = ref(null);
const planDetails = ref(null);
const specContainer = ref(null);

// State
const tiers = ['Budget', 'Premium', 'Pro'];
const activeTier = ref('Budget');

// Plan data
const plans = {
  Budget: {
    logo: intel, // Replace with your actual asset paths
    name: 'Budget Plan (Intel)',
    description: 'Start Strong, Stay Steady',
    price: '$0.75',
    image: budgetpic,
    promoTitle: "Power that doesn't break the bank",
    promoDescription:
      'Get the essentials, finely tuned. With Budget, performance meets value—perfect for projects that demand reliability without compromise.',
    specifications: [
      { label: 'CPU Specs', value: 'Intel Xeon 2690v3' },
      { label: 'Memory', value: 'DDR4 2133MT/s' },
      { label: 'Storage', value: 'SATA SSDs' },
      { label: 'Protection', value: 'NeoProtect: 2.4+Tbit/s' },
    ],
  },
  Premium: {
    logo: amd,
    name: 'Premium Plan (AMD)',
    description: 'Seamless performance, perfected for you.',
    price: '$1.50',
    image: premiumpic,
    promoTitle: 'Power and Price: Perfectly Balanced',
    promoDescription:
      'With our Premium Line, every machine is meticulously crafted to bring you the performance you want, at a price you need.',
    specifications: [
      { label: 'CPU Specs', value: 'AMD Ryzen 9 5950x' },
      { label: 'Memory', value: 'DDR4 3200MT/s' },
      { label: 'Storage', value: 'NVMe SSDs' },
      { label: 'Protection', value: 'NeoProtect: 2.4+Tbit/s' },
    ],
  },
  Pro: {
    logo: amd,
    name: 'Pro Plan (AMD)',
    description: 'Where power meets precision.',
    price: '$2.50',
    image: propic,
    promoTitle: "Built to handle anything, so you can do everything.",
    promoDescription:
      "The bleeding edge of performance. Pro isn't just a tier—it's the ultimate environment that you'll wish you had sooner.",
    specifications: [
      { label: 'CPU Specs', value: 'Ryzen 9 9950x' },
      { label: 'Memory', value: 'DDR5 5600MT/s' },
      { label: 'Storage', value: 'NVMe SSDs (7+Gbps)' },
      { label: 'Protection', value: 'NeoProtect: 2.4+Tbit/s' },
    ],
  },
};

// Define currentPlan before using it
const currentPlan = computed(() => plans[activeTier.value]);

// Initialize displayedPlan using currentPlan
const displayedPlan = ref(currentPlan.value);

let lenis = null;

// Animation Functions
function initializeAnimations() {
  // Initial animations for header
  gsap.to(headerContent.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
  });

  gsap.to(buttonContainer.value, {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out',
  });

  // Animate plan sections
  gsap.to(planContent.value, {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: planContent.value,
      start: 'top 80%',
    },
  });

  gsap.to(planDetails.value, {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: planDetails.value,
      start: 'top 80%',
    },
  });

  // Animate specification items
  gsap.to('.spec-item', {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
      trigger: specContainer.value,
      start: 'top 80%',
    },
  });
}

function animatePlanTransition() {
  const timeline = gsap.timeline();

  // Fade out current content
  timeline
    .to([planContent.value, planDetails.value], {
      opacity: 0,
      x: -20,
      duration: 0.3,
      ease: 'power2.inOut',
      onComplete: () => {
        // Update displayedPlan after fade-out completes
        displayedPlan.value = currentPlan.value;
      },
    })
    // Fade in new content
    .fromTo(
      [planContent.value, planDetails.value],
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: 'power2.out',
      }
    )
    // Animate specification items
    .fromTo(
      '.spec-item',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power2.out',
      },
      '-=0.2'
    );
}

// Lifecycle hooks
onMounted(() => {
  // Initialize displayedPlan on mount
  displayedPlan.value = currentPlan.value;

  // Initialize Lenis
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Initialize animations after next tick to ensure DOM is ready
  nextTick(() => {
    initializeAnimations();
  });
});

onBeforeUnmount(() => {
  if (lenis) {
    lenis.destroy();
  }
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});

// Watch for plan changes
watch(activeTier, () => {
  animatePlanTransition();
});

// Methods
function setActiveTier(tier) {
  if (activeTier.value !== tier) {
    activeTier.value = tier;
  }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Set initial states for animated elements */
.spec-item {
  transform: translateY(20px);
}
</style>
  