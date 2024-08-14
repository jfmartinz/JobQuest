<template>
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
              v-model="selectedOrganizations"
              type="checkbox"
              :value="organization"
              class="mr-3"
            />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script>
import { mapState } from 'pinia';
import { useJobsStore, UNIQUE_ORGANIZATION } from '@/stores/jobs';
import CollapsibleAccordion from '@/components/CollapsibleAccordion.vue';
export default {
  name: 'JobFiltersSidebarOrganizations',
  components: {
    CollapsibleAccordion
  },
  data() {
    return {
      selectedOrganizations: []
    };
  },
  computed: {
    ...mapState(useJobsStore, [UNIQUE_ORGANIZATION])
  }
};
</script>
