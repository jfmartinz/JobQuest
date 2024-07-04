<template>
  <li class="mb-7">
    <router-link
      :to="JobPageLink"
      class="mx-auto block rounded border border-solid border-brand-gray-2 bg-white hover:shadow-gray"
    >
      <div class="mx-8 border-solid border-brand-gray-2 pb-2 pt-5">
        <h2 class="mb-2 text-2xl">
          Technical Program Manager, Perception, Augmented Reality
        </h2>

        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>JobQuest</span>
          </div>

          <div>San Francisco, CA, USA</div>
        </div>
      </div>

      <div class="px-8 py-4">
        <div>
          <h3 class="m-1 mb-2">Qualifications:</h3>
          <div>
            <ul class="list-disc pl-8">
              <li>Bachelor's Degree or equivalent practical experience.</li>
              <li>5 years of experience in program management</li>
              <li>
                Experience analyzing data through querying database (e.g., SQL)
                using spreadsheet software, and creating statistical models.
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-2 text-center">
          <router-link
            :to="JobPageLink"
            class="text-brand-blue-1"
            >Expand</router-link
          >
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'JobListing',
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  computed: {
    JobPageLink() {
      return `/jobs/results/${this.job.id}`;
    }
  }
};
</script>

<style></style>
