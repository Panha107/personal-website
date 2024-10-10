<template>
  <div>
    <div>
      <div><img :src="img" alt="" /></div>
      <div>
        <span>{{ title }}</span>
        <p>{{ description }}</p>
        <span>{{ name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    Required: true,
  },
  name: {
    type: String,
    Required: true,
  },
  img: {
    type: String,
    Required: true,
  },
  description: {
    type: String,
    Required: true,
  },
});
</script>

<style lang="scss" scoped></style>
