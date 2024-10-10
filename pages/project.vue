<template>
  <div class="w-full flex justify-center">
    <div class="w-[90%]">
      <SecondarySection
        title="My Projects"
        text="A project is a planned undertaking with a defined beginning and end, conducted by 
        people to meet specific goals and objectives within certain constraints like time, budget, 
        and quality. It is a temporary endeavor designed to produce a unique product, service, or result."
      />
      <div v-if="projectCard.length" class="space-y-5">
        <ProjectCard
          v-for="(project, index) in projectCard"
          :key="index"
          :title="project.title"
          :lg_title="project.lg_title"
          :description="project.description"
          :images="project.images"
        />
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProjectCard from "./components/card/ProjectCard.vue";
import SecondarySection from "~/components/SecondarySection.vue";
import { ref, onMounted } from "vue";
import { fetchData } from "~/services/fetchData";

const projectCard = ref([]);

onMounted(async () => {
  try {
    const data = await fetchData("projectCard");
    projectCard.value = data;
  } catch (error) {
    console.error("Error fetching project data:", error);
  }
});
</script>

<style lang="scss" scoped></style>
