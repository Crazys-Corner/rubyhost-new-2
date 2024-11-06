<template>
  <section ref="reviewsSection" class="bg-[#0b0b0b] text-white py-20 px-6">
    <!-- Header Section -->
    <div
      class="text-center md:text-left md:ml-10 mb-16 flex flex-col md:flex-row items-center justify-between"
    >
      <Transition name="fade-slide">
        <div v-if="headerVisible" class="flex flex-col md:flex-row items-center justify-between w-full">
          <div>
            <div
              class="inline-block bg-gray-900 text-gray-300 px-4 py-1 rounded-full text-sm mb-4"
            >
              Reviews
            </div>
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-light">
              What Our <span class="text-red-500">Clients Say</span>
            </h2>
          </div>
          <button
            class="bg-gray-950 text-gray-300 border border-gray-800 px-6 py-2 mt-4 md:mt-0 text-sm flex items-center space-x-2 hover:bg-gray-900 transition-colors duration-300"
          >
            <span>TrustPilot</span>
            <Icon name="lineicons:arrow-angular-top-right" class="text-red-500" />
          </button>
        </div>
      </Transition>
    </div>
    <hr class="border-1 border-gray-700" />

    <!-- Reviews Section -->
    <div
      ref="reviewsContainer"
      class="bg-black text-white py-10 px-5 md:mx-20"
    >
      <TransitionGroup name="fade-slide" tag="div" class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(review, index) in reviews"
          :key="review.name"
          class="bg-gray-950 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
        >
          <img
            :src="review.image"
            alt="User avatar"
            class="w-12 h-12 rounded-full mb-2"
          />
          <h3 class="text-lg font-semibold mb-1">{{ review.name }}</h3>
          <p class="text-sm text-gray-400 mb-3">{{ review.location }}</p>
          <div class="flex mb-4">
            <span v-for="star in 5" :key="star" class="text-yellow-500">★</span>
          </div>
          <p class="text-sm text-gray-300">{{ review.comment }}</p>
        </div>

        <!-- TrustPilot Review Box -->
        <div
          :key="'trustpilot-box'"
          class="bg-gray-950 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
        >
          <img src="@/assets/logo.svg" alt="TrustPilot Logo" class="w-12 h-12 rounded-full mb-2" />
          <h3 class="text-lg font-semibold mb-3">Rate us on TrustPilot!</h3>
          <p class="text-sm text-gray-400 mb-3">RubyHost.net</p>
          <div class="flex mb-4">
            <span v-for="star in 5" :key="star" class="text-yellow-500">★</span>
          </div>
          <p class="text-sm text-gray-300 mb-4">
            Have you had a shareable experience with us? Review us now to share it
            with others! Every review matters—good or bad. We value your honest
            opinion to improve our services.
          </p>
          <a
            href="https://trustpilot.com/review/rubyhost.net"
            target="_blank"
            class="bg-gray-950 text-white px-4 py-2 flex items-center space-x-2 border border-gray-800 rounded-md hover:bg-gray-900 transition"
          >
            <span>TrustPilot</span>
            <Icon name="lineicons:arrow-angular-top-right" class="text-red-500" />
          </a>
        </div>
      </TransitionGroup>
    </div>
  </section>
  <hr class="border-1 border-gray-700" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import lunar from '@/assets/lunar.png';
import daniel from '@/assets/daniel.png';
import kurage from '@/assets/kurage.png';
import beserk from '@/assets/beserk.png';
import kalei from '@/assets/kalei.png';
// Reactive visibility properties
const headerVisible = ref(false);
const reviewsVisible = ref(false);

// References to sections
const reviewsSection = ref(null);
const reviewsContainer = ref(null);

// Reviews data
const reviews = [
  {
    image: lunar,
    name: 'LunarH_',
    location: 'United States',
    comment:
      'I’ve been using RubyHost for my Minecraft server, and honestly, it’s been such a great experience. The performance has been super reliable, and the uptime is solid—haven\'t had any major issues at all.',
  },
  {
    image: daniel,
    name: 'Daniel Bickerdike',
    location: 'New Zealand',
    comment:
      'As a freelancing manager for major servers, I can comfortably say that this hosting is no doubt one of the most reliable and easy to use hosting services out there.',
  },
  {
    image: kurage,
    name: 'Kurage Jellyfish',
    location: 'Australia',
    comment:
      'I am Kurage, I live in Atlantis but this is amazing. 5 stars, it helps with all my needs. Me and my jellyfish say RubyHost is the best—humans, get it now!',
  },
  {
    image: beserk,
    name: 'Beserk Gaming',
    location: 'United States',
    comment:
      'Very cool, very good and helpful staff team. Completely 10/10 service. ඞඞඞ',
  },
  {
    image: kalei,
    name: 'Kalei Short',
    location: 'Boston, USA',
    comment:
      'I have a janky laptop, and I’ve been trying to find a server host that I can run on without lagging so much that I can see five seconds into the past while being hit from 10 seconds from the future. But I was actually able to play with RubyHost, so I could dog on my buddies in Minecraft.',
  },
];

onMounted(() => {
  // Function to observe visibility
  const createObserver = (elementRef, visibilityRef, delay = 0) => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            visibilityRef.value = true;
          }, delay);
          observer.unobserve(entries[0].target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    if (elementRef.value) {
      observer.observe(elementRef.value);
    }
  };

  // Observe the header and reviews sections
  createObserver(reviewsSection, headerVisible);
  createObserver(reviewsContainer, reviewsVisible, 200);
});
</script>
<script> 
import { onMounted, nextTick } from 'vue';

export default {
  setup() {
    onMounted(() => {
      nextTick(() => {
        locomotiveScroll.update();
      });
    });
  }
}

</script>
<style scoped>
/* Fade and slide animation */
.fade-slide-enter-active {
  transition: all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* For TransitionGroup */
.fade-slide-item {
  transition: all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
}
.fade-slide-item-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-item-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Hover Effect for Buttons */
button:hover,
a:hover {
  background-color: #1a1a1a;
}

/* Transition for the Header Button */
button,
a {
  transition: background-color 0.3s ease, transform 0.3s ease;
}
button:hover,
a:hover {
  transform: translateY(-2px);
}
</style>
