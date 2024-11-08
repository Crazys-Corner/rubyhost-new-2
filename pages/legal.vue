<script setup>
import { onMounted } from 'vue';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

onMounted(() => {


  
    const lenis = new Lenis({
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: true,
      touchMultiplier: 0,
    });
    if (!ScrollTrigger.isTouch) {
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
    <div class="min-h-screen bg-black text-gray-100 pt-48">
    <div class="container mx-auto px-4 py-8">
      <!-- Main content layout -->
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Main content area -->
        <div class="lg:w-3/4">
          <h1 class="text-4xl font-semibold mb-48 text-center">{{ title }}</h1>
          
          <!-- Document metadata -->
          <div class="grid grid-cols-2 gap-4 mb-8">
            <div>
              <h2 class="text-xl mb-2">About {{ company }}</h2>
              <p class="text-gray-400">{{ about }}</p>
            </div>
           
          </div>

          <!-- Document sections -->
          <div class="space-y-12">
            <section v-for="(section, index) in sections" :key="index" :id="section.id">
              <h2 class="text-2xl font-semibold mb-4">{{ section.title }}</h2>
              <div class="text-gray-400" v-html="section.content"></div>
            </section>
          </div>
        </div>

        <!-- Sidebar navigation -->
<!-- Right sidebar -->
<div class="lg:w-1/4">
  <div class="sticky top-48"> <!-- Adjusted 'top' value from 'top-8' to 'top-4' -->
    <!-- Contents navigation -->
    <div class="mb-8">
      <h3 class="text-white text-xl mb-4">Contents</h3>
      <nav class="space-y-3">
        <a
          v-for="(section, index) in sections"
          :key="index"
          :href="'#' + section.id"
          class="block text-gray-400 hover:text-white transition-colors duration-200"
          :class="{ 
            'text-white border-l-2 border-red-500 pl-3': activeSection === section.id,
            'pl-3': activeSection !== section.id
          }"
          @click="setActiveSection(section.id)"
        >
          {{ section.title }}
        </a>
      </nav>
    </div>

    <!-- Metadata -->
    <div>
      <div class="flex justify-between mb-4">
        <div>
          <div class="text-gray-400 text-sm">Publication Date</div>
          <div class="text-white">{{ publicationDate }}</div>
        </div>
        <div>
          <div class="text-gray-400 text-sm">Last Update</div>
          <div class="text-white">{{ lastUpdate }}</div>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
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
<script>
export default {
  name: 'LegalDocsLayout',
  data() {
    return {
      title: 'RubyHost Legal Documentation',
      company: 'RubyHost',
      publicationDate: 'October 15, 2024',
      lastUpdate: 'October 15, 2023',
      activeSection: 'introduction',
      about: 'Your company description here',
      sections: [
        {
          id: 'introduction',
          title: 'Introduction',
          content: 'Your introduction content here'
        },
        {
          id: 'sla-coverage',
          title: 'SLA Coverage',
          content: 'Your SLA coverage content here'
        },
        {
          id: 'privacy-policy',
          title: 'Privacy Policy',
          content: 'Your privacy policy content here'
        },
        {
          id: 'terms-of-condition',
          title: 'Terms of Condition',
          content: 'Your terms and conditions here'
        },
        {
          id: 'sla-limitations',
          title: 'SLA Limitations',
          content: 'Your SLA limitations content here'
        },
        {
          id: 'contact-us',
          title: 'Contact Us',
          content: 'Your contact information here'
        }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    setActiveSection(sectionId) {
      this.activeSection = sectionId
    },
    handleScroll() {
      const sections = this.sections.map(section => ({
        id: section.id,
        offset: document.getElementById(section.id).offsetTop
      }))
      
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset) {
          this.setActiveSection(sections[i].id)
          break
        }
      }
    }
  }
}
</script>