<template>
  <header class="text-gray-200 bg-blue-800 body-font">
    <div
      class="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row"
    >
      <a
        class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          ></path>
        </svg>
        <span class="ml-3 text-xl text-gray-200">Tailblocks</span>
      </a>
      <nav
        class="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto"
      >
        <router-link class="mr-5 hover:text-gray-900" :to="{name:'home'}" exact>Home </router-link>
        <router-link class="mr-5 hover:text-gray-900" to="/about">About </router-link>
        <router-link class="mr-5 hover:text-gray-900" :to="{name:'page.contact'}">Contact </router-link>
      <t-dropdown text="Menu">
        <div class="py-1 rounded-md shadow-xs">
         <router-link class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100" :to="{name:'home'}" exact>Home </router-link>
          <router-link class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100" to="/about">About </router-link>
        <router-link class="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100" :to="{name:'page.contact'}">Contact </router-link>
        </div>
      </t-dropdown>
      </nav>
      <button
        class="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-600 md:mt-0"
      >
        Button
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
};
</script>
