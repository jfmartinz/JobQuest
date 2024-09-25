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
              @change="selectOrganizations"
            />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useJobsStore, UNIQUE_ORGANIZATION } from '@/stores/jobs';
import CollapsibleAccordion from '@/components/CollapsibleAccordion.vue';
import { useUserStore, ADD_SELECTED_ORGANIZATIONS } from '@/stores/user';

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
  },
  methods: {
    ...mapActions(useUserStore, [ADD_SELECTED_ORGANIZATIONS]),
    selectOrganizations() {
      this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);
      this.$router.push({ name: 'JobResults' });
    }
  }
};
</script>
