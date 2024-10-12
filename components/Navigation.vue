<template>
  <div class="w-full flex items-center justify-center font-roboto">
    <div class="w-[90%] h-[10vh] flex items-center justify-between">
      <h1 class="fs-1 font-semibold whitespace-nowrap">Pech Panha</h1>
      <div class="hidden md:block">
        <ul class="flex lg:gap-8 md:gap-5 cursor-pointer">
          <li v-for="(list, index) in navList" :key="index">
            <NuxtLink :to="list.navLink" class="fs_p hover:text-orange-400">
              {{ list.navName }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <button
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
      </button>
    </div>

    <transition name="dropdown">
      <div
        v-if="isMenuOpen"
        class="w-full md:hidden bg-white absolute overflow-hidden top-[7vh] z-10 transition opacity-90 p-3 mt-2"
      >
        <ul class="w-full  flex flex-col gap-3">
          <li v-for="(list, index) in navList" :key="index">
            <NuxtLink :to="list.navLink" class="fs_p hover:text-orange-400 ">
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

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #ff9900;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.3s ease;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
}
</style>
