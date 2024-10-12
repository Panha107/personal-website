<template>
  <div>
    <Navigation />
    <slot />
    <Footer v-if="currentRoute.path !== '/contact'" />
  </div>
</template>

<script setup>
import Footer from "~/components/Footer.vue";
import Navigation from "~/components/Navigation.vue";
import { useRoute } from "vue-router";

const currentRoute = useRoute();
</script>
