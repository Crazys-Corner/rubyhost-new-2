<template>
  <div class="space-y-6 bg-black text-white py-8">
      <div
          ref="headerRef"
          class="text-left mb-12 flex flex-col items-center sm:flex-row sm:justify-between sm:items-center sm:ml-4 sm:mr-4 sm:mb-16 px-4 md:px-10 lg:px-36"
      >
          <div class="text-center sm:text-left">
              <div
                  class="inline-block bg-gray-900 text-gray-300 px-4 py-1 rounded-full text-sm mb-4"
              >
                  Services
              </div>
              <h2 class="text-2xl md:text-3xl lg:text-5xl font-light">
                  Choose Your <span class="text-red-500">Server Type</span>
              </h2>
          </div>
          <button
              class="mt-4 sm:mt-0 bg-gray-950 text-gray-300 border border-gray-800 px-4 py-2 text-xs md:text-sm flex items-center space-x-2 hover:bg-gray-900 transition-all duration-300 group"
          >
              <span>View All Services</span>
              <Icon 
                  name="lineicons:arrow-angular-top-right" 
                  class="text-red-500 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
              />
          </button>
      </div>
      <hr class="border-1 border-gray-700 mb-8 transform-origin-left mx-4" />

      <div
  v-for="(server, index) in servers"
  :key="index"
  class="bg-black p-4 md:p-6 mx-2 sm:mx-4 md:mx-8 lg:mx-24 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-800 space-y-4 md:space-y-0"
>
  <div class="w-full md:w-auto mb-4 md:mb-0 text-center md:text-left">
    <div class="text-sm mb-1">
      <span class="bg-gray-700 px-2 py-1 rounded-md">{{ server.location }}</span>
    </div>
    <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tight font-bold mt-2 break-words">
      {{ server.model }}
    </h2>
    <p class="text-xs md:text-sm text-gray-400">Instant Dedicated</p>
  </div>
  <div class="flex flex-wrap space-x-4 md:space-x-8 text-center w-full md:w-auto">
    <div
      v-for="(spec, label) in server.specs"
      :key="label"
      class="flex-1 min-w-[80px] mb-2 md:mb-0"
    >
      <p class="text-lg sm:text-xl md:text-2xl font-semibold">{{ spec }}</p>
      <p class="text-xs text-gray-400 uppercase">{{ label }}</p>
    </div>
  </div>
  <button
    class="hover:underline flex items-center bg-gray-950 border-2 border-gray-800 p-2 text-gray-400 text-xs md:text-sm mx-auto md:mx-0"
  >
    Order Now
    <Icon
      name="lineicons:arrow-angular-top-right"
      class="text-red-500 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </button>
</div>

  </div>
  <Services />
  <DedicatedServerInsights />
</template>

<script>
export default {
  data() {
      return {
          servers: [
              {
                  location: 'Dallas, New York',
                  model: 'E-2276G 3.8GHz Coffee Lake',
                  specs: {
                      Cores: '5',
                      Memory: '5 GB',
                      Storage: '5 GB SDD',
                      Bandwidth: '20TB / 1GBPS',
                  },
              },
              {
                  location: 'Dallas, New York',
                  model: 'E-2276G 3.8GHz Latte Cake',
                  specs: {
                      Cores: '5',
                      Memory: '5 GB',
                      Storage: '5 GB SDD',
                      Bandwidth: '20TB / 1GBPS',
                  },
              },
              {
                  location: 'Dallas, New York',
                  model: 'E-2276G 3.8GHz Coffee Lake',
                  specs: {
                      Cores: '5',
                      Memory: '5 GB',
                      Storage: '5 GB SDD',
                      Bandwidth: '20TB / 1GBPS',
                  },
              },
              {
                  location: 'Dallas, New York',
                  model: 'E-2276G 3.8GHz Coffee Lake',
                  specs: {
                      Cores: '5',
                      Memory: '5 GB',
                      Storage: '5 GB SDD',
                      Bandwidth: '20TB / 1GBPS',
                  },
              },
          ],
      };
  },
};
</script>

<style scoped>
button {
  transition: color 0.3s;
}
</style>
