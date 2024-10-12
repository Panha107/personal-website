<template>
  <div class="font-roboto">
    <div class="w-full items-center flex-col justify-center flex">
      <PrimarySection class="" />

      <div v-if="projectCard.length" class="w-[90%] space-y-5 py-10">
        <ProjectCard
          v-for="(project, index) in projectCard.slice(0, 2)"
          :key="index"
          :title="project.title"
          :lg_title="project.lg_title"
          :description="project.description"
          :images="project.images"
        />
      </div>
      <div class="w-[90%] flex justify-center pt-2 pb-7">
        <NuxtLink
          to="/project"
          class="w-fit px-6 py-1 rounded text-[#FF003D] text-sm md:text-base lg:text-lg flex items-center gap-2 border border-[#FF003D]"
        >
          Browse all projects
        </NuxtLink>
      </div>
      <Skill />
      <div class="w-[90%] py-10">
        <TestimonialCard
          v-for="(timonial, index) in Testimonial.slice(0, 1)"
          :key="index"
          :img="timonial.img"
          :title="timonial.title"
          :description="timonial.description"
          :name="timonial.name"
          :isShow="true"
          class=""
        />
      </div>
    </div>
    <div class="w-[90%] pb-10 mx-auto flex flex-col gap-4">
      <!-- <div class="w-[90%] pb-10 flex flex-col gap-4"> -->
      <h2 class="fs-2 font-semibold">Blogs</h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 first:flex"
      >
        <BlogCard
          v-for="(blog, index) in blogsCard.slice(0, 3)"
          :key="index"
          :img="blog.img"
          :text="blog.text"
          :date="blog.date"
          class="h-full"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import PrimarySection from "~/components/PrimarySection.vue";
import ProjectCard from "~/components/card/ProjectCard.vue";
import TestimonialCard from "~/components/card/TestimonialCard.vue";
import BlogCard from "~/components/card/BlogCard.vue";

import { ref, onMounted } from "vue";
import { fetchData } from "~/services/fetchData";

const Testimonial = ref([]);
const blogsCard = ref([]);
const projectCard = ref([]);
onMounted(async () => {
  try {
    const data = await fetchData("Testimonial");
    const data2 = await fetchData("blogsCard");
    const data3 = await fetchData("projectCard");
    Testimonial.value = data;
    blogsCard.value = data2;
    projectCard.value = data3;
  } catch (error) {
    console.error("Error fetching project data:", error);
  }
});
</script>
