<template>
  <img
    :src="imageLink"
    alt="User Profile"
    class="bg-co bg- h-8 w-8 rounded-3xl object-contain"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const imageLink = ref('https://yourimageshare.com/ib/VzoTnxGxVK.webp');
</script>
