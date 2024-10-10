<template>
  <div class="w-full flex items-center justify-center font-roboto">
    <div class="w-[90%] h-[10vh] flex items-center justify-between">
      <h1 class="fs-1 font-semibold whitespace-nowrap">Pech Panha</h1>

      <!-- Desktop Menu -->
      <div class="hidden md:block">
        <ul class="flex lg:gap-8 cursor-pointer md:gap-5">
          <li v-for="(list, index) in navList" :key="index">
            <NuxtLink :to="list.navLink" class="fs_p hover:text-orange-400">
              {{ list.navName }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Mobile Menu Icon -->
      <div
        class="md:hidden flex items-center cursor-pointer"
        @click="toggleMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path
            d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
          />
        </svg>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="w-full md:hidden bg-white shadow-lg p-3 mt-2"
      >
        <ul class="flex flex-col gap-3">
          <li v-for="(list, index) in navList" :key="index">
            <NuxtLink :to="list.navLink" class="fs_p hover:text-orange-400">
              {{ list.navName }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const navList = [
  {
    navName: "Home",
    navLink: "/",
  },
  {
    navName: "Project",
    navLink: "/project",
  },
  {
    navName: "Work",
    navLink: "/work",
  },
  {
    navName: "About me",
    navLink: "/about",
  },
  {
    navName: "Blog",
    navLink: "/blog",
  },
  {
    navName: "Contact",
    navLink: "/contact",
  },
];

// State to manage dropdown visibility
const isMenuOpen = ref(false);

// Function to toggle the menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #ff9900;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
