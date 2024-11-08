<template>
  <div class="min-h-screen bg-black text-white flex justify-center items-center py-16 px-6">
    <!-- Container with Left and Right Sections -->
    <div class="w-full max-w-5xl flex flex-col md:flex-row">
      <!-- Left Section: Header and Contact Button -->
      <div
        class="w-full md:w-1/3 flex flex-col items-start mb-8 md:mb-0 opacity-0 transition-opacity duration-700 transform translate-y-8"
        v-observe
      >
        <h2 class="text-3xl font-semibold mb-4">Have more questions?</h2>
        <NuxtLink to="/contact"
          class="mt-2 bg-transparent border border-gray-700 hover:border-gray-500 text-white py-2 px-4 rounded-md flex items-center space-x-2 focus:outline-none transition-transform transform hover:scale-105 duration-300"
        >
          <span>Contact Us</span>
          <Icon name="lineicons:arrow-angular-top-right" class="text-red-500" />
        </NuxtLink>
      </div>

      <!-- Vertical Divider (visible on larger screens) -->
      <div class="hidden md:block border-l border-gray-700 mx-8"></div>

      <!-- Right Section: FAQ Accordion -->
      <div class="w-full md:w-2/3 space-y-4">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="bg-gray-950 rounded-lg overflow-hidden border-2 border-gray-800 opacity-0 transition-opacity duration-700 transform translate-y-8"
          v-observe
        >
          <button
            @click="toggleFaq(index)"
            class="w-full flex justify-between items-center py-4 px-6 text-left focus:outline-none"
          >
            <span class="text-lg font-medium">{{ item.question }}</span>
            <span>
              <svg
                v-if="openFaq === index"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-5 h-5 text-red-500"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14" />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-5 h-5 text-red-500"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m7-7H5" />
              </svg>
            </span>
          </button>
          <div v-if="openFaq === index" class="px-6 pb-4 text-gray-400">
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="border-1 border-gray-700" />
</template>

<script>
import { onMounted, nextTick } from "vue";

export default {
  data() {
    return {
      openFaq: null,
      faqs: [
        {
          question: "What is included in the Budget Plan?",
          answer: "The Budget Tier features a Xeon E5 2690v3 processor and DDR4 Memory. It's perfect for those who need a lightweight solution for their hosting needs, offering a balance of performance and cost-effectiveness.",
        },
        {
          question: "Can I upgrade my plan later?",
          answer: "Yes, you can upgrade your plan at any time by contacting support.",
        },
        {
          question: "Do you offer a money-back guarantee?",
          answer: "Yes, we offer a 30-day money-back guarantee on all plans.",
        },
        {
          question: "How secure is my data?",
          answer: "We use top-notch security measures to ensure the safety of your data.",
        },
        {
          question: "Do you provide support?",
          answer: "Yes, we provide 24/7 support for all hosting plans.",
        },
      ],
    };
  },
  directives: {
    observe: {
      mounted(el) {
        const options = {
          threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add("opacity-100", "translate-y-0");
              observer.unobserve(el);
            }
          });
        }, options);

        el.classList.add("opacity-0", "translate-y-8");
        observer.observe(el);
      },
    },
  },
  setup() {
    onMounted(() => {
      nextTick(() => {
     locomotiveScroll.update();
      });
    });
  },
  methods: {
    toggleFaq(index) {
      this.openFaq = this.openFaq === index ? null : index;
    },
  },
};
</script>

<style scoped>
/* Keyframes for optional additional effects */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
