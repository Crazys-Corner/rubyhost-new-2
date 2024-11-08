<template>
  <div
    ref="ctaSection"
    class="flex flex-col md:flex-row items-center justify-between bg-black text-white px-8 md:px-24 py-16 md:py-24 space-y-8 md:space-y-0 opacity-0"
  >
    <!-- Left Section -->
    <div ref="leftContent" class="space-y-4 text-center md:text-left">
      <span 
        ref="startButton"
        class="self-start px-4 py-2 text-sm font-medium text-white bg-[#333540] rounded hover:bg-[#444650] transition-colors duration-300"
      >
        Get Started with RubyHost
    </span>
      <h1 
        ref="headline"
        class="text-3xl sm:text-4xl md:text-5xl font-extrabold"
      >
        Ready to get started?
      </h1>
      <p 
        ref="subheadline"
        class="text-base md:text-lg text-gray-400"
      >
        Be the first to know about our latest updates and features.
      </p>
    </div>

    <!-- Center Icon -->
    <div ref="logoContainer" class="relative">
      <div ref="logoGlow" class="absolute inset-0 bg-red-500 opacity-0 blur-xl"></div>
      <img 
        ref="logo"
        src="/assets/logo.svg" 
        alt="RubyHost Logo" 
        class="w-32 h-32 md:w-40 md:h-40 relative z-10"
      />
    </div>

    <!-- Right Button -->
    <div ref="rightContent" class="text-center md:text-right">
      <NuxtLink 
      to= "/products" 
        ref="servicesButton"
        class="group px-4 py-2 font-semibold text-gray-300 bg-gray-950 border-2 border-gray-800 flex items-center space-x-2 rounded hover:bg-gray-900 transition-colors duration-300"
        @mouseenter="animateArrow"
      >
        <span>View All Services</span>
        <Icon 
          ref="arrow"
          name="lineicons:arrow-angular-top-right" 
          class="text-red-500"
        />
    </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

// Refs for animation targets
const ctaSection = ref(null)
const leftContent = ref(null)
const startButton = ref(null)
const headline = ref(null)
const subheadline = ref(null)
const logoContainer = ref(null)
const logo = ref(null)
const logoGlow = ref(null)
const rightContent = ref(null)
const servicesButton = ref(null)
const arrow = ref(null)

// Initialize Lenis for smooth scrolling
let lenis = null

onMounted(() => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger)

  // Initialize Lenis
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    smooth: true
  })

  // Connect lenis to RAF
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  // Main entrance animation timeline
  const mainTl = gsap.timeline({
    scrollTrigger: {
      trigger: ctaSection.value,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(ctaSection.value, {
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out'
        })
      }
    }
  })

  mainTl
    .from(leftContent.value, {
      x: -100,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
    .from(startButton.value, {
      y: 20,
      opacity: 0,
      duration: 0.4,
      ease: 'back.out(1.7)'
    }, '-=0.4')
    .from(headline.value, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.2')
    .from(subheadline.value, {
      y: 20,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.out'
    }, '-=0.2')
    .from(logoContainer.value, {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, '-=0.4')
    .from(rightContent.value, {
      x: 100,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6')

  // Continuous logo animation
  gsap.to(logo.value, {
    y: -10,
    duration: 1.5,
    ease: 'power1.inOut',
    yoyo: true,
    repeat: -1
  })

  // Logo glow animation
  gsap.to(logoGlow.value, {
    opacity: 0.3,
    duration: 2,
    ease: 'power1.inOut',
    yoyo: true,
    repeat: -1
  })
})

// Arrow hover animation function
const animateArrow = () => {
  gsap.to(arrow.value, {
    x: 5,
    y: -5,
    duration: 0.3,
    ease: 'power2.out',
    yoyo: true,
    repeat: 1
  })
}

onBeforeUnmount(() => {
  if (lenis) {
    lenis.destroy()
  }
})
</script>