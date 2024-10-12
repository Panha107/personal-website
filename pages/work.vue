<template>
  <div class="w-full flex flex-col items-center font-roboto">
    <div class="w-[90%]">
      <div
        class="h-fit pb-10 lg:h-[40vh] w-full flex flex-col-reverse md:flex-row gap-4 lg:items-center lg:justify-between"
      >
        <div class="w-full lg:w-1/2 flex flex-col gap-1 lg:pl-10">
          <span class="fs_sm text-[#E34D73]">{{ client[0]?.type }}</span>
          <h2 class="fs-2 font-medium">{{ client[0]?.title }}</h2>
          <p class="text-justify fs_s">{{ client[0]?.text }}</p>
        </div>
        <div class="flex flex-col gap-2">
          <div class="flex flex-col">
            <span class="fs_s font-medium">Date</span>
            <span class="fs_sm text-[#7c7c7c]">{{ client[0]?.date }}</span>
          </div>
          <div class="flex flex-col">
            <span class="fs_s font-medium">Client Name</span>
            <span class="fs_sm text-[#7c7c7c]">{{
              client[0]?.clientName
            }}</span>
          </div>
        </div>
      </div>
      <div class="w-full pb-10 h-full flex gap-4 flex-col items-center">
        <div class="w-full rounded-lg overflow-hidden">
          <img
            :src="anyData[0]?.img"
            alt=""
            class="w-full lg:h-[100vh] object-cover"
          />
        </div>
        <div class="w-full lg:w-1/2 flex flex-col gap-2">
          <span class="fs-2 font-medium">{{ anyData[0]?.name }}</span>
          <p class="fs_s text-justify">
            {{ anyData[0]?.text }}
          </p>
        </div>
      </div>
      <div class="w-full flex flex-col items-center gap-6">
        <div
          class="w-full h-[400px] grid grid-cols-1 lg:grid-cols-[68%_30%] gap-2 lg:gap-8"
        >
          <div class="w-full h-full rounded-lg overflow-hidden">
            <img
              :src="anyData[1]?.img"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <div class="w-full h-full rounded-lg overflow-hidden">
            <img
              :src="anyData[1]?.img2"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <div class="w-full lg:w-1/2">
          <p class="fs_s text-justify">{{ anyData[1]?.text }}</p>
        </div>
      </div>
    </div>
    <div class="w-[90%] py-10">
      <TestimonialCard
        v-for="(timonial, index) in Testimonial.slice(1)"
        :key="index"
        :img="timonial.img"
        :title="timonial.title"
        :description="timonial.description"
        :name="timonial.name"
        :isShow="false"
        class="bg-[#E2FFBE]"
      />
    </div>
    <div class="w-[90%] pb-10 flex flex-col gap-4">
      <h2 class="fs-2 font-semibold">Other projects</h2>
      <div class="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-3 lg:gap-10">
        <OtherProjectCard
          v-for="(card, index) in otherProject"
          :key="index"
          :img="card.img"
          :title="card.title"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import OtherProjectCard from "~/components/card/OtherProjectCard.vue";
import TestimonialCard from "~/components/card/TestimonialCard.vue";
import { ref, onMounted } from "vue";
import { fetchData } from "~/services/fetchData";

const otherProject = ref([]);
const anyData = ref([]);
const client = ref([]);
const Testimonial = ref([]);
onMounted(async () => {
  try {
    const data = await fetchData("otherProjectsCard");
    const thData = await fetchData("anyData");
    const testData = await fetchData("Testimonial");
    const clientData = await fetchData("client");
    otherProject.value = data;
    anyData.value = thData;
    client.value = clientData;
    Testimonial.value = testData;
  } catch (error) {
    console.error("Error fetching project data:", error);
  }
});
</script>

<style lang="scss" scoped></style>
