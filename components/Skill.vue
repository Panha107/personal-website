<template>
  <div class="w-[90%] flex flex-col gap-4 font-roboto">
    <h3 class="fs-1 font-bold">My Skills</h3>
    <div
      class="w-full grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 lg:gap-10 py-2"
    >
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="py-4 w-full border-b-[2px] border-gray-400 font-semibold"
      >
        {{ skill.job }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { fetchData } from "~/services/fetchData";
const skills = ref([]);
onMounted(async () => {
  try {
    const data = await fetchData("skills");
    skills.value = data;
  } catch (error) {
    console.error("Error fetching project data:", error);
  }
});
</script>

<style lang="scss" scoped></style>
