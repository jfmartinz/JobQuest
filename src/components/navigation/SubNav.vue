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

<script setup>
import { useJobsStore } from '@/stores/jobs';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const onJobResultPage = computed(() => {
  return route.name === 'JobResults';
});

const jobStore = useJobsStore();
const FILTERED_JOBS = computed(() => jobStore.FILTERED_JOBS);
</script>

<style scoped></style>
