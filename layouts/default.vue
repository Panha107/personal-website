<script setup>
import { onMounted } from 'vue';
import Footer from "~/components/Footer.vue";
import Navigation from "~/components/Navigation.vue";
import { fetchData } from '~/services/fetchData';

// Function to fetch all data and log it to the console
const fetchAllData = async () => {
  await fetchData('projectCard');
  await fetchData('blogsCard');
  await fetchData('skills');
  await fetchData('Testimonial');
  await fetchData('otherProjectsCard');
};

// Call the fetchAllData function when the component is mounted
onMounted(() => {
  fetchAllData();
});
</script>

<template>
  <div>
    <Navigation />
    <slot />
    <Footer />
  </div>
</template>
