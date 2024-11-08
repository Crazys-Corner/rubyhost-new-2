<template>
  <div class="bg-black flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Contact Form -->
      <div class="bg-black p-6 shadow-md ">
        <h2 class="text-3xl font-extrabold text-white text-center">Contact Us</h2>
        <p class="mt-2 text-center text-sm text-gray-400">
          We'd love to hear from you! Please fill out the form below.
        </p>
        <form @submit.prevent="handleSubmit" class="mt-6 space-y-6">
          <div class="-md shadow-sm -space-y-px">
            <div>
              <label for="name" class="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autocomplete="name"
                required
                v-model="form.name"
                class="appearance-none -none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-black -t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <label for="email" class="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                v-model="form.email"
                class="appearance-none -none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-black focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label for="message" class="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                v-model="form.message"
                class="appearance-none -none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-black -b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Your message..."
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 text-sm font-medium -md text-white bg-black border-2 border-gray-800 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      
      <!-- Contact Information -->
      <div class="flex flex-col justify-center bg-black border-2 border-gray-800 p-6 shadow-md text-white">
        <h2 class="text-3xl font-extrabold mb-4">Get in Touch</h2>
        <p class="mb-4 text-gray-400">Feel free to contact us using the form or reach out directly:</p>
        <ul class="space-y-2">
          <li><strong>Phone:</strong> <a href="tel:+1234567890" class="text-red-500 hover:underline">+1 234 567 890</a></li>
          <li><strong>Email:</strong> <a href="mailto:contact@example.com" class="text-red-500 hover:underline">support@rubyhost.net</a></li>
          <li><strong>Main Datacenter Address:</strong> 5050 Conference Way North, Suite 100, Boca Raton, FL, 33431</li>
        </ul>
        <div class="mt-2">
          <h3 class="text-lg font-semibold ">Typical Working Hours</h3>
          <small class="text-xs tracking-normal text-gray-400">Support is available outside these times, but is typically slower</small>
          <p class="mt-0.5">Monday - Friday: 8:00 AM - 11:00 PM</p>
          <p>Saturday & Sunday: 10:00 AM - 10:00 PM</p>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      alert(`Thank you, ${this.form.name}, for reaching out! We will get back to you soon.`);
      // You can integrate a backend API here to send the form data
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
/* Add any additional custom styling if needed */
</style>