<template>
  <div
    class="w-[90%] h-fit lg:h-[90vh] flex flex-col-reverse lg:flex-row justify-center items-center font-roboto"
  >
    <div class="w-full flex flex-col items-start gap-3 justify-center">
      <h2 class="fs-2 font-bold">Hello! I’m Nelson, a photographer</h2>
      <p class="fs_s text-justify">
        A photographer is a person who captures and creates images using a
        camera. Photography is both a science and an art, requiring technical
        skill and artistic vision. Photographers use their knowledge of light,
        composition, and perspective to create images that convey emotions, tell
        stories, or simply capture moments in time.
      </p>
      <NuxtLink to="/about" class="flex items-center gap-2 fs_s text-[#FF9900]">
        More About Me
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FF9900"
        >
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </svg>
      </NuxtLink>
    </div>
    <div
      class="w-full h-full flex justify-center lg:justify-end items-center mt-6 lg:mt-0"
    >
      <div
        class="relative md:w-[390px] lg:w-[350px] h-full flex justify-center"
      >
        <img
          src="/assets/images/imgsection.png"
          alt=""
          class="rounded-b-full w-full h-full object-cover"
        />
        <div
          class="absolute top-1/3 lg:left-0 left-1/2 transform -translate-x-1/2"
        >
          <img
            src="/assets/images/imgsection2.png"
            alt=""
            class="animate-rotate w-[220px] lg:w-[198px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
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
