<template>
  <div class="h-16 w-full border-b border-solid border-brand-gray-1">
    <div class="flex h-full items-center px-8">
      <div v-if="onJobResultPage">
        <font-awesome-icon
          :icon="['fas', 'search']"
          class="mr-3"
        />
        <span>
          <span class="text-brand-green-1">20</span>
          jobs matched
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubNav',
  computed: {
    onJobResultPage() {
      return this.$route.name === 'JobResults';
    }
  }
};
</script>

<style scoped></style>
