<template>
  <div class="w-full font-roboto flex flex-col gap-3">
    <div class="w-[90%] mx-auto">
      <SecondarySection
        title="My blogs"
        text="A project is a planned undertaking with a defined beginning and end, conducted by 
        people to meet specific goals and objectives within certain constraints like time, budget, 
        and quality. It is a temporary endeavor designed to produce a unique product, service, or result."
      />
    </div>
    <div
      v-if="blogsCard[3]"
      class="w-[90%] lg:my-6 sm:my-4 mx-auto overflow-hidden rounded-lg flex flex-col md:flex-row"
    >
      <img
        :src="blogsCard[3].img"
        alt="Blog Image"
        class="w-full h-[250px] sm:h-[300px] md:h-auto md:w-[50%] lg:w-[85%] lg:h-[450px] object-cover"
      />
      <div
        class="flex flex-col justify-center gap-2 pl-3 py-4 md:py-0 md:pl-5 w-full md:w-[50%]"
      >
        <p class="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
          {{ blogsCard[3].text }}
        </p>
        <span class="text-sm sm:text-base md:text-lg lg:text-xl">
          {{ blogsCard[3].date }}
        </span>
      </div>
    </div>
    <div
      class="w-[90%] pb-10 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 first:flex"
    >
      <BlogCard
        v-for="(blog, index) in blogsCard.slice(4)"
        :key="index"
        :img="blog.img"
        :text="blog.text"
        :date="blog.date"
      />
    </div>
    <div class="w-[90%] flex justify-center pt-2 pb-7">
      <NuxtLink
        class="w-fit px-6 py-1 rounded text-[#FF003D] text-sm md:text-base lg:text-lg flex items-center gap-2 border border-[#FF003D]"
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
import BlogCard from "~/components/card/BlogCard.vue";
import { ref, onMounted } from "vue";
import { fetchData } from "~/services/fetchData";

const blogsCard = ref([]); // Initialize as an empty array

onMounted(async () => {
  const data = await fetchData("blogsCard");
  blogsCard.value = data || [];
});
</script>

<style lang="scss" scoped></style>
