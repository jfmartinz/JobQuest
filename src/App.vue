<template>
  <main-nav />
  <hero-page />
</template>

<script>
import MainNav from '@/components/navigation/MainNav.vue';
import HeroPage from '@/components/jobSearch/HeroPage.vue';
export default {
  name: 'App',
  components: {
    MainNav,
    HeroPage
  }
};
</script>

<style></style>
