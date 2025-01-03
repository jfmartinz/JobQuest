<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol v-if="displayedJobs.length > 0">
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
      />
    </ol>
    <span v-else>{{ FILTERED_JOBS.length }} </span>
    Jobs Matched
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p
          v-if="displayedJobs.length > 0"
          class="flex-grow text-sm"
        >
          Page {{ currentPage }}
        </p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            role="link"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
          >
            Previous
          </router-link>
          <router-link
            v-if="nextPage"
            role="link"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
          >
            Next Page
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import JobListing from '@/components/JobResults/JobListing.vue';
import { useJobsStore } from '@/stores/jobs';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const jobStore = useJobsStore();
onMounted(jobStore.FETCH_JOBS);

const route = useRoute();
const currentPage = computed(() => Number.parseInt(route.query.page || '1'));

const FILTERED_JOBS = computed(() => jobStore.FILTERED_JOBS);

const previousPage = computed(() => {
  const previousPage = currentPage.value - 1;
  const firstPage = 1;

  return previousPage >= firstPage ? previousPage : undefined;
});

const nextPage = computed(() => {
  const nextPage = currentPage.value + 1;
  const lastPage = Math.ceil(FILTERED_JOBS.value.length / 10);

  return nextPage <= lastPage ? nextPage : undefined;
});

const displayedJobs = computed(() => {
  const pageNum = currentPage.value;
  const firstJobIndex = (pageNum - 1) * 10;
  const lastJobIndex = pageNum * 10;
  return FILTERED_JOBS.value.slice(firstJobIndex, lastJobIndex);
});
</script>
