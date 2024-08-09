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

      <collapsible-accordion>
        <div class="mt-5">
          <fieldset>
            <ul class="flex flex-row flex-wrap">
              <li class="h-8 w-1/2">
                <input
                  id="VueTube"
                  type="checkbox"
                  class="mr-3"
                />
                <label for="VueTube">VueTube</label>
              </li>
              <li class="h-8 w-1/2">
                <input
                  id="Between Vue"
                  type="checkbox"
                  class="mr-3"
                />
                <label for="BetweenVue">Between Vue</label>
              </li>
              <li class="h-8 w-1/2">
                <input
                  id="Et"
                  type="checkbox"
                  class="mr-3"
                />
                <label for="Et Vue Brute">Et Vue Brute</label>
              </li>
              <li class="h-8 w-1/2">
                <input
                  id="Vue and a Half Men"
                  type="checkbox"
                  class="mr-3"
                />
                <label for="Vue and a Half Men">Vue and a Half Men</label>
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

export default {
  name: 'JobFiltersSidebar',
  components: {
    ActionButton,
    CollapsibleAccordion
  }
};
</script>
<style scoped></style>
