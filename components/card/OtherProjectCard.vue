<template>
  <div
    class="w-full h-fit overflow-hidden rounded-md shadow-[3px_3px_4px_0px_#00000040]"
  >
    <img
      :src="img"
      alt=""
      class="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[300px] 2xl:h-[500px] object-cover mx-auto"
    />
    <div class="p-3 flex flex-col gap-[5px]">
      <p class="fs_s font-semibold">{{ title }}</p>
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    Required: true,
  },
  img: {
    type: String,
    Required: true,
  },
});
</script>

<style lang="scss" scoped></style>
