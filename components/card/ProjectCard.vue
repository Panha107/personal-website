<template>
  <div
    class="w-full p-4 grid grid-cols-1 lg:grid-cols-2 content-center gap-8 rounded-lg odd:bg-[#DFEAD2] even:bg-[#EEDFB8] odd:text-[#81B72F] even:text-[#E34D73]"
  >
    <div class="w-full flex flex-col justify-center gap-3">
      <span class="fs_sm">{{ title }}</span>
      <div>
        <h3 class="text-[#323842] font-bold text-lg fs_s">
          {{ lg_title }}
        </h3>
        <p class="text-black text-justify fs_s">
          {{ description }}
        </p>
      </div>
      <div
        class="flex gap-2 items-center px-5 w-fit hover:text-gray-100 transition"
      >
        <NuxtLink class="text-[#424955] transition hover:text-gray-500 fs_s"
          >View project
        </NuxtLink>
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
        class="rounded-md h-[250px] sm:h-[300px] md:h-[350px] lg:h-[340px]"
        :class="{
          'w-full sm:w-[80%] lg:w-1/3': images.length === 3,
          'w-full md:w-1/2': images.length === 2,
          'w-full': images.length < 2,
        }"
      />
    </div>
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
