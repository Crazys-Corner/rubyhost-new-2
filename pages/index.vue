<script setup>
import { onMounted } from 'vue';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';

onMounted(() => {
  // This code runs only on the client side
  function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }

  if (!isMobileDevice()) {
    const lenis = new Lenis({
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: true,
      touchMultiplier: 0,
    });

    lenis.on('scroll', (e) => {
      // Custom GSAP animations can be triggered here
      gsap.to('.animate-class', {
        y: -100,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.animate-class',
          start: 'top center',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  } else {
    console.log('Lenis is disabled on mobile devices');
  }
});
</script>
<template>
  <div data-scroll-container>
    <Navbar />

    <div>
      <HeroSection />
    </div>

    <div data-scroll-section>
      <HostingServices data-scroll />
    </div>

    <div data-scroll-section>
      <OurHardware data-scroll />
    </div>

    <div data-scroll-section>
      <Reviews data-scroll />
    </div>

    <div data-scroll-section>
      <FAQ data-scroll />
    </div>

    <div data-scroll-section>
      <WhyChooseUs data-scroll />
    </div>

    <div data-scroll-section>
      <CTA data-scroll />
    </div>

    <Footer />
  </div>
</template>
