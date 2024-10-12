<template>
  <div class="w-full items-center flex-col justify-center flex font-roboto">
    <PrimarySection />
    <div class="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2">
      <div class="w-full py-4 flex flex-col gap-3">
        <h2 class="fs-2 font-bold">My Work</h2>
        <p class="fs_s">
          Duis nisi do exercitation in irure aliqua commodo nisi eu id
          reprehenderit dolore fugiat consectetur irure
        </p>
      </div>
      <div class="w-full flex flex-col gap-3">
        <div
          v-for="(work, index) in myWorkData"
          :key="index"
          class="w-full flex gap-3 border-b-[2px] border-[#BCC1CA] py-5"
        >
          <div class="flex items-start">
            <img
              :src="workImages[work.job]"
              alt=""
              class="w-[70px] object-cover"
            />
          </div>
          <div class="space-y-1">
            <span class="fs_sm text-[#323842]">{{ work.date }}</span>
            <h3 class="fs_s font-medium">{{ work.job }}</h3>
            <p class="fs_sm text-[rgb(50,56,66)]">{{ work.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="w-[90%] my-6">
      <div
        v-for="(habit, index) in hobbyData"
        :key="index"
        class="w-full h-auto"
      >
        <div class="w-full flex flex-col py-2 md:items-center justify-between md:flex-row">
          <h2 class="fs-2 font-semibold">{{ habit.title }}</h2>
          <div class="w-full md:w-1/2 md:p-2">
            <p class="fs_s">{{ habit.text }}</p>
          </div>
        </div>
        <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6">
          <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6">
            <div
              v-for="(imgs, imgIndex) in habit.images"
              :key="imgIndex"
              class="w-full md:h-[60vh] lg:h-[80vh] rounded-lg overflow-hidden"
            >
              <img :src="imgs.img" alt="" class="h-full w-full object-cover" />
            </div>
          </div>
          <div class="w-full md:h-[65vh] lg:h-[80vh] grid grid-rows-2 gap-3 lg:gap-6">
            <div
              v-for="(imgs, imgIndex) in habit.images2"
              :key="imgIndex"
              class="w-full h-full rounded-lg overflow-hidden"
            >
              <img :src="imgs.img" alt="" class="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { workImages } from "~/content";
import { ref, onMounted } from "vue";
import { fetchData } from "~/services/fetchData";

const myWorkData = ref([]);
const hobbyData = ref([]);
onMounted(async () => {
  try {
    const workdata = await fetchData("myWorkData");
    const hobby = await fetchData("hobbyData");
    myWorkData.value = workdata;
    hobbyData.value = hobby;
  } catch (error) {
    console.error("Error fetching project data:", error);
  }
});
</script>

<style lang="scss" scoped></style>
