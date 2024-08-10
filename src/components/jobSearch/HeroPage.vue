<template>
  <main>
    <section class="mt-10 flex h-screen flex-col">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>
        <div class="col-span-5 col-start-2">
          <head-line />
          <job-search-form />
        </div>
        <div class="col-span-5 col-start-7 self-center justify-self-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            alt="Hero Img"
            class="h-80 w-80 object-contain"
          />
        </div>
        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>
    <spot-light class="flex flex-row justify-center pb-16">
      <template #default="slotProps">
        <router-link
          to="/jobs/results"
          class="mx-5 flex h-96 w-72 flex-col rounded-lg border bg-brand-gray-2"
        >
          <img
            :src="slotProps.img"
            alt=""
            class="object-contain"
          />

          <div class="mt-3 h-48 px-6 py-4">
            <h3 class="text-lg font-medium">{{ slotProps.title }}</h3>
            <p class="mt-3 text-sm">
              {{ slotProps.description }}
            </p>
          </div>
          <router-link
            to="/jobs/results"
            class="px-6 pb-4 text-sm text-brand-blue-1"
            >See jobs</router-link
          >
        </router-link>
      </template>
    </spot-light>
  </main>
</template>

<script>
import HeadLine from '@/components/JobSearch/HeadLine.vue';
import JobSearchForm from '@/components/JobSearch/JobSearchForm.vue';
import SpotLight from '@/components/JobSearch/SpotLight.vue';

export default {
  name: 'HeroPage',
  components: {
    HeadLine,
    JobSearchForm,
    SpotLight
  },
  data() {
    return {};
  }
};
</script>
