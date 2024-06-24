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
  </main>
</template>

<script>
import HeadLine from '@/components/jobSearch/HeadLine.vue';
import JobSearchForm from '@/components/jobSearch/JobSearchForm.vue';

export default {
  name: 'HeroPage',
  components: {
    HeadLine,
    JobSearchForm
  },
  data() {
    return {};
  }
};
</script>
