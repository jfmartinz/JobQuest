<template>
  <div class="h-16 w-full border-b border-solid border-brand-gray-1">
    <div class="flex h-full items-center px-8">
      <div v-if="onJobResultPage">
        <font-awesome-icon
          :icon="['fas', 'search']"
          class="mr-3"
        />
        <span>
          <span class="text-brand-green-1">{{ FILTERED_JOBS.length }}</span>
          jobs matched
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { useJobsStore, FILTERED_JOBS } from '@/stores/jobs';

export default {
  name: 'SubNav',
  computed: {
    ...mapState(useJobsStore, [FILTERED_JOBS]),
    onJobResultPage() {
      return this.$route.name === 'JobResults';
    }
  }
};
</script>

<style scoped></style>
