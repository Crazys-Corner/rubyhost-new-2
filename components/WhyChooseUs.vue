<template>
  <div class="bg-black text-white py-16 px-6">
    <!-- Section Title -->
    <div class="mx-auto max-w-3xl text-center opacity-0 transition-opacity duration-700 transform translate-y-8" v-observe>
      <div class="mb-8 bg-neutral-900 px-8 py-10 rounded-lg">
        <span class="text-sm bg-gray-700 text-gray-200 px-3 py-1 rounded">Service Features</span>
        <h2 class="text-3xl sm:text-4xl font-light mt-4">
          Why <span class="text-red-600">Choose Us</span>
        </h2>
      </div>
    </div>

    <!-- Features Grid -->
    <div class="max-w-5xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        <div
          v-for="(item, index) in features"
          :key="index"
          class="bg-gray-950 border-2 border-gray-800 p-6 rounded-lg shadow-md opacity-0 transition-opacity duration-700 transform translate-y-8"
          v-observe
        >
          <h3 class="font-semibold text-lg">{{ item.title }}</h3>
          <p class="text-gray-400 text-sm mt-2">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhyChooseUs",
  data() {
    return {
      features: [
        {
          title: "Performance with cost-effectivity in mind",
          description:
            "We have 3 tiers for our users to choose from in relation to their performance requirements. Those who need a lot of RAM and CPU that doesn't need to be blazing fast can use our budget, whilst those who need high speed and the latest hardware can choose our Pro line.",
        },
        {
          title: "Security Comes First",
          description:
            "Our backend servers are in a secure datacenter, always up to date and core services are restricted from public access entirely. The last thing we are worried about is a data leak, we spend hours making sure your services are secure.",
        },
        {
          title: "Support That Outclasses Everyone Else",
          description:
            "Our support team is here for you every step of the way. Whether you have a connection issue, simple inquiry or more, we're here for you, always.",
        },
        {
          title: "Scalability",
          description:
            "Need more resources? Our services are scalable, migrating between nodes is seamless (with little to no downtime) with help from our support team.",
        },
        {
          title: "Custom Solutions",
          description:
            "Need something specific? Contact us, we're here to make something to fit your needs.",
        },
        {
          title: "99% Amazing SLA",
          description:
            "This Service Level Agreement (SLA) outlines the expected levels of service provided by RubyHost to its customers. It also defines the responsibilities of both parties in maintaining the agreed level of service.",
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
};
</script>

<style scoped>
/* Animation for optional additional effects */
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
