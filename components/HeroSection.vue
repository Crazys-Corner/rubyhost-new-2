<script setup>
import Lenis from '@studio-freight/lenis';
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const heroSection = ref(null);
const heroText = ref(null);
const heroImage = ref(null);
const serverImage = ref(null); // New ref for the image
const buttonsContainer = ref(null);

// Function to detect mobile devices
function isMobileDevice() {
  if (typeof navigator !== 'undefined') {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }
  return false;
}

onMounted(() => {
  // Initialize Lenis for smooth scrolling only on non-mobile devices
  if (!isMobileDevice()) {
    const lenis = new Lenis({
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: false, // Disable smooth touch to prevent interference with touch scrolling
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Integrate Lenis with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
  }

  // Create a timeline for better animation control
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    }
  });

  // Initial state setup for hero elements and buttons
  gsap.set([heroText.value, serverImage.value, buttonsContainer.value.querySelectorAll('a')], {
    opacity: 0,
    y: 50
  });

  // Hero section background fade in
  tl.fromTo(heroSection.value, 
    { backgroundColor: "rgba(11, 11, 11, 0)" },
    { 
      backgroundColor: "rgba(11, 11, 11, 1)", 
      duration: 1.5 
    }
  );

  // Animate hero text elements
  tl.to(heroText.value, {
    opacity: 1,
    y: 0,
    duration: 1.2
  }, "-=1");

  // Animate server image with scale effect, only on non-mobile devices
  if (!isMobileDevice()) {
    tl.to(serverImage.value, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
    }, "-=0.8");
  } else {
    // On mobile devices, show the image without animation
    gsap.set(serverImage.value, {
      opacity: 1,
      y: 0,
      scale: 1,
    });
  }

  // Animate buttons without any scroll trigger
  tl.to(buttonsContainer.value.querySelectorAll('a'), {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15
  }, "-=0.1");

  // Scroll-triggered animation for the server image only on non-mobile devices
  if (!isMobileDevice()) {
    gsap.to(serverImage.value, {
      y: 100,
      opacity: 0.5,
      scrollTrigger: {
        trigger: heroSection.value,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }
});
</script>
<template>
  <div data-scroll-container>
    <Navbar />
    <section 
      ref="heroSection"
      class="pt-24 bg-[#0b0b0b] text-gray-300 py-20 px-6 flex flex-col md:flex-row items-center justify-between relative space-y-8 md:space-y-0 overflow-hidden"
    >
      <!-- Text Section -->
      <div 
        ref="heroText"
        class="md:w-2/4 space-y-6 text-center md:text-left md:ml-10 relative z-10"
      >
        <h2 class="text-gray-500 text-base sm:text-lg tracking-wider uppercase font-medium">
          Scalable, Stable and Extremely fast hosting solutions for any needs.
        </h2>
        <h1 class="text-4xl sm:text-5xl md:text-6xl leading-tight">
          Supercharge your server <br />
          with <span class="text-red-500 font-semibold">RubyHost</span>
        </h1>
      </div>

      <!-- Image Section -->
      <div 
        ref="heroImage"
        class="md:w-1/2 md:relative md:flex justify-center md:justify-end"
      >
        <img
          src="/assets/logo.svg"
          alt="Server"
          class="rounded-lg shadow-xl w-full md:w-5/6 object-cover block sm:block opacity-25 transform"
        />
        <!-- Buttons Container -->
        <div 
          ref="buttonsContainer"
          class="mt-6 md:mt-0 md:absolute md:bottom-48 md:left-48 sm:left-20 md:left-32 flex flex-col space-y-4 w-full sm:w-auto items-center md:items-start"
        >
          <NuxtLink
            to="/products"
            class="bg-gray-950 font-light text-gray-300 font-semibold py-3 px-4 rounded-md hover:bg-gray-900 border-2 border-gray-800 flex items-center justify-center space-x-2 transition duration-200 ease-in-out group w-3/4 sm:w-auto"
          >
            <span>Get Started</span>
            <span aria-hidden="true" class="material-icons text-red-500 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              <Icon name="lineicons:arrow-angular-top-right" />
            </span>
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="bg-gray-950 font-semibold text-gray-300 py-3 px-4 rounded-md hover:bg-gray-900 border-2 border-gray-800 flex items-center justify-center space-x-2 transition duration-200 ease-in-out group w-3/4 sm:w-auto"
          >
            <span>Contact Us</span>
            <span aria-hidden="true" class="material-icons text-red-500 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              <Icon name="lineicons:arrow-angular-top-right" />
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
/* Remove the !important to allow GSAP animations */
a {
  /* opacity: 1 !important;
  transform: translateY(0) !important; */
}

/* Adjust styles for mobile devices */
@media (max-width: 767px) {
  /* Ensure the image is visible on mobile devices */
  img {
    opacity: 1 !important;
  }
}
</style>
