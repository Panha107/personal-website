<template>
  <div
    class="w-full h-fit overflow-hidden rounded-md shadow-[3px_3px_4px_0px_#00000040]"
  >
    <img
      :src="img"
      alt=""
      class="w-full h-64 lg:h-[400px] object-cover mx-auto"
    />
    <div class="p-3 flex flex-col gap-[5px]">
      <p class="fs_s">{{ text }}</p>
      <p class="fs_s">{{ date }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: {
    type: String,
    Required: true,
  },
  text: {
    type: String,
    Required: true,
  },
  date: {
    type: String,
    Required: true,
  },
});
</script>

<style lang="scss" scoped></style>
