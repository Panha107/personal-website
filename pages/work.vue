<template>
  <div class="w-full">
    <div class="w-[90%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-3 lg:gap-10">
      <OtherProjectCard
        v-for="(card, index) in otherProject"
        :key="index"
        :img="card.img"
        :title="card.title"
      />
    </div>
  </div>
</template>

<script setup>
import OtherProjectCard from "~/components/card/OtherProjectCard.vue";
import { ref, onMounted } from "vue";
import { fetchData } from "~/services/fetchData";

const otherProject = ref([]);

onMounted(async () => {
  try {
    const data = await fetchData("otherProjectsCard");
    otherProject.value = data;
  } catch (error) {
    console.error("Error fetching project data:", error);
  }
});
</script>

<style lang="scss" scoped></style>
