<template>
  <div
    class="w-full p-4 grid grid-cols-1 lg:grid-cols-2 content-center gap-8 rounded-lg odd:bg-[#DFEAD2] even:bg-[#EEDFB8] odd:text-[#81B72F] even:text-[#E34D73]"
  >
    <div class="w-full flex flex-col justify-center gap-3">
      <span class="">{{ title }}</span>
      <div>
        <h3 class="text-[#323842] font-bold">{{ lg_title }}</h3>
        <p class="text-black text-justify">{{ description }}</p>
      </div>
      <div class="flex gap-2 items-center px-5 w-fit *:hover:text-gray-100">
        <NuxtLink class="text-[#424955] transition">View project </NuxtLink>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
          class="hover:translate-x-[-4px] transition"
        >
          <path
            d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"
          />
        </svg>
      </div>
    </div>
    <div
      class="w-full px-2 flex flex-wrap md:flex-nowrap gap-4 items-center justify-center"
    >
      <img
        v-for="(imageObj, index) in images"
        :key="index"
        :src="imageObj.img"
        alt="Project Image"
        class="lg:odd:mt-6 h-[400px] lg:h-[340px] rounded-md"
        :class="{
          'w-full sm:w-[80%] lg:w-1/3': images.length === 3,
          'w-full md:w-1/2': images.length === 2,
          'w-full': images.length < 2,
        }"
      />
    </div>
    <!-- <div class="h-[300px]">
      <div class="w-full flex gap-6 items-center justify-center px-2 h-full">
        <img
          v-for="(imgObj, index) in images"
          :key="index"
          :src="imgObj.img"
          alt="Project Image"
          class="h-full w-full"
          :class="{
            'w-full sm:w-[80%] lg:w-1/3': images.length === 3,
            'w-full md:w-1/2': images.length === 2,
            'w-full': images.length < 2,
          }"
        />
      </div> -->

    <!-- :class="['rounded-md', index % 2 === 1 ? '' : '']" -->
    <!-- class="h-[300px] rounded-md even:mb-[50px]" -->
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    Required: true,
  },
  lg_title: {
    type: String,
    Required: true,
  },
  description: {
    type: String,
    Required: true,
  },
  images: {
    type: Array,
    Required: true,
  },
});
</script>

<style lang="scss" scoped></style>
