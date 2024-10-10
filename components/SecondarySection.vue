<template>
  <div
    class="w-full flex flex-col-reverse lg:flex-row lg:justify-between lg:my-3"
  >
    <div class="w-full lg:w-[60%] flex gap-2 flex-col justify-center">
      <h2 class="fs-2 font-semibold max-sm:text-center">{{ title }}</h2>
      <p class="fs_s text-justify">{{ text }}</p>
    </div>
    <div class="flex justify-center items-center">
      <img
        src="../assets/images/imgsection2.png"
        alt=""
        class="animate-rotate w-[250px]"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    Required: false,
    default: "",
  },
  text: {
    type: String,
    Required: false,
    default: "",
  },
});
</script>

<style scoped>
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.animate-rotate {
  animation: rotate 30s linear infinite;
}
</style>
