<template>
  <div
    class="border-brand border-solid-gray-1 flex w-96 flex-col border-r bg-white p-4"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button
            text="Clear Filters"
            type="secondary"
          ></action-button>
        </div>
      </div>
      <collapsible-accordion header="Organizations">
        <div class="mt-5">
          <fieldset>
            <ul class="flex flex-row flex-wrap">
              <li
                v-for="organization in UNIQUE_ORGANIZATION"
                :key="organization"
                class="h-8 w-1/2"
              >
                <input
                  :id="organization"
                  type="checkbox"
                  class="mr-3"
                />
                <label :for="organization">{{ organization }}</label>
              </li>
            </ul>
          </fieldset>
        </div>
      </collapsible-accordion>
    </section>
  </div>
</template>

<script>
import ActionButton from '@/components/Navigation/ActionButton.vue';
import CollapsibleAccordion from '@/components/CollapsibleAccordion.vue';

import { mapState } from 'pinia';
import { useJobsStore, UNIQUE_ORGANIZATION } from '@/stores/jobs';
export default {
  name: 'JobFiltersSidebar',
  components: {
    ActionButton,
    CollapsibleAccordion
  },
  computed: {
    ...mapState(useJobsStore, [UNIQUE_ORGANIZATION])
  }
};
</script>
<style scoped></style>
