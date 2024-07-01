<template>
  <h1 class="text-6xl font-bold">Job Results Page</h1>
  <p @click="goHome">go to homepage</p>
</template>

<script>
export default {
  name: 'JobResultsView',
  methods: {
    goHome() {
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>
