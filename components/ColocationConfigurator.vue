<template>
    <div class="bg-black text-white rounded-lg shadow-lg">
      <div class="rounded-t-lg p-4">
        <h2 class="text-2xl font-bold">Get a quick quote</h2>
        <small class="text-sm text-gray-400">Large colocation shipments are expected to supply a switch.</small>
        <small class="text-sm text-gray-400"> This only applies to our Boca Raton / Miami Facility</small>
      </div>
      <div class="p-6 space-y-6">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h3 class="text-lg font-medium mb-2">Space</h3>
            <div class="flex items-center">
              <button
                class="bg-gray-700 text-gray-400 px-4 py-2 rounded-l-md"
                @click="decrementSpace"
              >
                -
              </button>
              <input
                v-model.number="space"
                type="number"
                min="1"
                max="50"
                step="1"
                class="bg-gray-700 text-white px-4 py-2 w-full"
              />
              <button
                class="bg-gray-700 text-gray-400 px-4 py-2 rounded-r-md"
                @click="incrementSpace"
              >
                +
              </button>
            </div>
            <p class="mt-2">
              {{ space }} U - ${{ spacePrice }}
            </p>
          </div>
          <div>
            <h3 class="text-lg font-medium mb-2">Power</h3>
            <div class="flex items-center">
              <button
                class="bg-gray-700 text-gray-400 px-4 py-2 rounded-l-md"
                @click="decrementPower"
              >
                -
              </button>
              <input
                v-model.number="power"
                type="number"
                min="1"
                max="80"
                step="1"
                class="bg-gray-700 text-white px-4 py-2 w-full"
              />
              <button
                class="bg-gray-700 text-gray-400 px-4 py-2 rounded-r-md"
                @click="incrementPower"
              >
                +
              </button>
            </div>
            <p class="mt-2">
              {{ power }}A@110V - ${{ powerPrice }}
            </p>
          </div>
          <div>
            <h3 class="text-lg font-medium mb-2">Network Speed</h3>
            <div class="flex items-center gap-2">
              <button
                v-for="option in networkSpeedOptions"
                :key="option.value"
                :class="[
                  'px-4 py-2 rounded-md',
                  networkSpeed === option.value
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-700 text-gray-400'
                ]"
                @click="setNetworkSpeed(option.value)"
              >
                {{ option.label }}
              </button>
            </div>
            <p class="mt-2">
              ${{ networkPrice }}
            </p>
          </div>
          <div>
            <h3 class="text-lg font-medium mb-2">Traffic</h3>
            <div class="flex items-center">
              <button
                class="bg-gray-700 text-gray-400 px-4 py-2 rounded-l-md"
                @click="decrementTraffic"
                :disabled="networkSpeed === 1"
              >
                -
              </button>
              <input
                v-model.number="traffic"
                type="number"
                min="10"
                max="1000"
                step="10"
                class="bg-gray-700 text-white px-4 py-2 w-full"
                :disabled="networkSpeed === 1"
              />
              <button
                class="bg-gray-700 text-gray-400 px-4 py-2 rounded-r-md"
                @click="incrementTraffic"
                :disabled="networkSpeed === 1"
              >
                +
              </button>
            </div>
            <p class="mt-2">
              {{ networkSpeed === 1 ? 'Fair Use, Unmetered @ 1gbps' : traffic + ' TB' }} - ${{ trafficPrice }}
            </p>
          </div>
        </div>
        <div class="text-center mt-4">
          <p class="text-4xl font-bold">Total: <span class="text-red-500">${{ total }}</span></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        space: 1,
        power: 10,
        networkSpeed: 1,
        traffic: 10,
        networkSpeedOptions: [
          { label: '1 Gbps', value: 1 },
          { label: '10 Gbps', value: 10 }
        ]
      }
    },
    computed: {
      spacePrice() {
        return (11.5 * this.space * 1.2).toFixed(2)
      },
      powerPrice() {
        return (15 * this.power * 1.2).toFixed(2)
      },
      networkPrice() {
        const basePrices = {
          1: 30,   // Base price for 1 Gbps
          10: 300  // Base price for 10 Gbps
        }
        return (basePrices[this.networkSpeed] * 1.2).toFixed(2)
      },
      trafficPrice() {
        return this.networkSpeed === 1
          ? '0.00'
          : (this.traffic * 3).toFixed(2)
      },
      total() {
        return (
          parseFloat(this.spacePrice) +
          parseFloat(this.powerPrice) +
          parseFloat(this.networkPrice) +
          parseFloat(this.trafficPrice)
        ).toFixed(2)
      }
    },
    methods: {
      setNetworkSpeed(value) {
        this.networkSpeed = value
        if (value === 1) {
          this.traffic = 'Fair Use, Unmetered'
        } else if (this.traffic === 'Fair Use, Unmetered') {
          this.traffic = 10
        }
      },
      incrementSpace() {
        this.space = Math.min(this.space + 1, 50)
      },
      decrementSpace() {
        this.space = Math.max(this.space - 1, 1)
      },
      incrementPower() {
        this.power = Math.min(this.power + 1, 100)
      },
      decrementPower() {
        this.power = Math.max(this.power - 1, 1)
      },
      incrementTraffic() {
        this.traffic = Math.min(this.traffic + 10, 1000)
      },
      decrementTraffic() {
        this.traffic = Math.max(this.traffic - 10, 10)
      }
    }
  }
  </script>
  