<template>
  <div class="w-full bg-[#1D2128] flex justify-center font-roboto">
    <div class="w-[90%] h-fit py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-12 md:gap-x-8 lg:gap-x-12">
      <!-- Left Section -->
      <div class="flex flex-col gap-6 sm:gap-8 lg:gap-12">
        <h3 class="fs-1 font-bold text-white leading-tight">
          Say hello and let's
          <br />
          work together!
        </h3>

        <div>
          <!-- Social Media Links -->
          <div class="flex gap-4 sm:gap-6 md:gap-8">
            <NuxtLink
              v-for="(media, index) in mediaIcon"
              :key="index"
              :href="media.link"
              target="_blank"
              class="hover:scale-90 transition-all"
            >
              <img
                class="w-[20px] sm:w-[25px] md:w-[30px] hover:filter hover:brightness-50 hover:invert"
                :src="media.imgMedia"
                alt=""
              />
            </NuxtLink>
          </div>

          <!-- Copyright Information -->
          <div class="flex gap-2 sm:gap-3 md:gap-4 mt-2">
            <ul v-for="(copy, index) in copyRight" :key="index" class="">
              <li class="fs-sm text-white">{{ copy.name }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Right Section (Form) -->
      <form class="ml-0 md:ml-[4rem] lg:ml-[6.5rem] flex flex-col gap-4 sm:gap-5">
        <!-- Email Field -->
        <div class="text-white relative">
          <label
            for="email"
            class="absolute left-2 top-[-14px] bg-[#1D2128] font-semibold"
            >Email</label
          >
          <input
            type="text"
            id="email"
            class="bg-[#1D2128] w-full py-2 border border-gray-400 rounded-md px-5 outline-none"
            placeholder="Your email address"
          />
        </div>

        <!-- Message Field -->
        <div class="text-white relative top-2">
          <label
            for="message"
            class="absolute left-2 top-[-14px] bg-[#1D2128] font-semibold"
            >Input your message</label
          >
          <textarea
            id="message"
            class="w-full h-[15vh] bg-[#1D2128] border border-gray-400 rounded-md px-5 py-2 outline-none"
            placeholder="Describe your project"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button class="btn-bg fs_p text-white font-medium w-fit">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const mediaIcon = [
  {
    imgMedia: "/icons/instagram.png",
    link: "https://www.instagram.com/",
  },
  {
    imgMedia: "/icons/Dribbble.png",
    link: "https://www.dribbble.com/",
  },
  {
    imgMedia: "/icons/LinkedIn.png",
    link: "https://www.linkedin.com/",
  },
  {
    imgMedia: "/icons/Envelope.png",
    link: "https://www.envelope.com/",
  },
];

const copyRight = [
  {
    name: "© 2022 Brand, Inc.",
  },
  {
    name: "• Privacy",
  },
  {
    name: "• Terms",
  },
  {
    name: "• Sitemap",
  },
];
</script>

<style lang="scss" scoped></style>
