export default defineNuxtPlugin(() => {
  if (process.client) {
    document.addEventListener('DOMContentLoaded', () => {
      const scrollContainers = document.querySelectorAll('[class*="overflow-x-scroll"]')
      scrollContainers.forEach(container => {
        container.addEventListener('wheel', (event) => {
          event.preventDefault()
          container.scrollBy({
            left: event.deltaY * 2, // Adjust for inertia speed
            behavior: 'smooth'
          })
        })
      })
    })
  }
})
