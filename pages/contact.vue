<template>
  <div class="w-full flex flex-col items-center justify-center font-roboto">
    <div
      class="w-[90%] h-fit lg:h-[90vh] gap-3 pb-5 flex flex-col-reverse lg:flex-row justify-center items-center font-roboto"
    >
      <div class="w-full">
        <h2 class="fs-2 font-semibold">
          Say hello and let's work <br />
          together!
        </h2>
        <form class="flex flex-col gap-4 sm:gap-5 pt-8">
          <div class="relative">
            <label
              for="email"
              class="absolute left-2 bg-white top-[-14px] font-semibold"
              >Email</label
            >
            <input
              type="text"
              id="email"
              class="w-full py-2 border border-gray-400 rounded-md px-5 outline-none"
              placeholder="Your email address"
            />
          </div>
          <div class="relative top-2">
            <label
              for="message"
              class="absolute left-2 top-[-14px] bg-white font-semibold"
              >Input your message</label
            >
            <textarea
              id="message"
              class="w-full h-[15vh] border border-gray-400 rounded-md px-5 py-2 outline-none"
              placeholder="Describe your project"
            ></textarea>
          </div>

          <button class="btn-bg fs_p flex gap-4 text-white font-medium w-fit">
            Submit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#ffffff"
            >
              <path
                d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"
              />
            </svg>
          </button>
        </form>
      </div>
      <div
        class="w-full h-full flex justify-center lg:justify-end items-center mt-6 lg:mt-0"
      >
        <div
          class="relative md:w-[300px] lg:w-[400px] h-full flex justify-center"
        >
          <img
            src="/assets/images/contact.jfif"
            alt=""
            class="rounded-t-full w-full h-full object-cover"
          />
          <div
            class="absolute top-1/3 lg:left-0 left-1/2 transform -translate-x-1/2"
          >
            <img
              src="/assets/images/contact1.png"
              alt=""
              class="animate-rotate w-[220px] lg:w-[198px]"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="w-full h-fit py-4 lg:h-[40vh] bg-[#1D2128] flex flex-col justify-center items-center"
    >
      <div
        class="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] pb-6 flex flex-col items-center lg:flex-row"
      >
        <div class="w-full">
          <div class="w-full flex gap-6 sm:gap-10 md:gap-20 pb-8">
            <NuxtLink
              v-for="(media, index) in oddMedia"
              :key="index"
              :href="media.link"
              target="_blank"
              class="hover:scale-90 transition-all flex items-center gap-2"
            >
              <img
                class="w-[20px] sm:w-[25px] md:w-[30px] hover:filter hover:brightness-50 hover:invert"
                :src="media.imgMedia"
                alt=""
              />
              <span class="fs_sm text-white">{{ media.name }}</span>
            </NuxtLink>
          </div>
          <div class="w-full lg:mt-5 flex gap-7 sm:gap-11 md:gap-[88px]">
            <NuxtLink
              v-for="(media, index) in evenMedia"
              :key="index"
              :href="media.link"
              target="_blank"
              class="hover:scale-90 transition-all flex items-center gap-2"
            >
              <img
                class="w-[20px] sm:w-[25px] md:w-[30px] hover:filter hover:brightness-50 hover:invert"
                :src="media.imgMedia"
                alt=""
              />
              <span class="fs_sm text-white">{{ media.name }}</span>
            </NuxtLink>
          </div>
        </div>
        <div
          class="w-full border-l border-gray-400 pl-4 sm:pl-8 md:pl-16 lg:pl-24 mt-6 lg:mt-0"
        >
          <div class="text-white">
            <span class="fs_sm">Email</span>
            <p class="fs_s text-gray-500">yourmail@email.com</p>
          </div>
          <div class="text-white mt-5">
            <span class="fs_sm">Skype</span>
            <p class="fs_s text-gray-500">live:yourname.com</p>
          </div>
        </div>
      </div>
      <div class="flex gap-2 sm:gap-3 md:gap-4 mt-2">
        <ul v-for="(copy, index) in copyRight" :key="index">
          <li class="fs-sm text-white">{{ copy.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { mediaIcon } from "~/content/mediaData";
import { copyRight } from "~/content/mediaData";
const oddMedia = mediaIcon.filter((_, index) => index % 2 === 0);
const evenMedia = mediaIcon.filter((_, index) => index % 2 !== 0);
</script>
