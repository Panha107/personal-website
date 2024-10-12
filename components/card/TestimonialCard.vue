<!-- <template>
  <div class="w-full flex h-[350px] bg-[#EDFFD8] rounded-xl">
    <div class="w-full flex justify-center items-end">
      <img :src="img" alt="" class="h-[290px] object-cover" />
    </div>
    <div class="w-full flex gap-4 flex-col justify-center">
      <div class="flex flex-col gap-2">
        <span class="text-[#FF003D] fs_s">{{ title }}</span>
        <p class="text-[#000000] fs_s">{{ description }}</p>
        <span class="text-[#000000C7] fs_sm">{{ name }}</span>
      </div>
      <NuxtLink
        class="w-fit px-3 py-1 rounded text-[#FF003D] fs_s flex items-center gap-2 border border-[#FF003D]"
        >Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="29px"
          fill="#FF003D"
        >
          <path
            d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template> -->
<template>
  <div
    class="w-full flex flex-col md:flex-row md:h-[350px] lg:h-[370px] bg-[#EDFFD8] rounded-xl"
  >
    <div class="w-full md:w-1/2 flex justify-center items-end">
      <img
        :src="img"
        alt=""
        class="h-[200px] md:h-[290px] lg:h-[340px] object-cover"
      />
    </div>
    <div class="w-full md:w-1/2 flex gap-4 flex-col justify-center p-4">
      <div class="flex flex-col gap-2">
        <span
          class="text-[#FF003D] text-sm md:text-base lg:text-lg xl:text-xl"
          >{{ title }}</span
        >
        <p class="text-[#000000] text-sm md:text-base lg:text-lg">
          {{ description }}
        </p>
        <span class="text-[#000000C7] text-xs md:text-sm lg:text-base">{{
          name
        }}</span>
      </div>
      <NuxtLink
        v-if="isShow"
        class="w-fit px-3 py-1 rounded text-[#FF003D] text-sm md:text-base lg:text-lg flex items-center gap-2 border border-[#FF003D]"
      >
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="29px"
          fill="#FF003D"
        >
          <path
            d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    Required: true,
  },
  name: {
    type: String,
    Required: true,
  },
  img: {
    type: String,
    Required: true,
  },
  description: {
    type: String,
    Required: true,
  },
  isShow: {
    type: Boolean,
    Required: true,
  },
});
</script>

<style lang="scss" scoped></style>
