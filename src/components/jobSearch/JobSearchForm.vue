<template>
  <form
    class="flex h-12 w-full items-center rounded-3xl border-2 border-brand-gray-1"
  >
    <font-awesome-icon
      :icon="['fas', 'search']"
      class="ml-4 mr-3"
    />

    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label class="absolute -top-10 left-0"> Role </label>
        <text-input
          v-model="role"
          placeholder="Software Engineer"
        />
      </div>

      <span
        class="flex h-full items-center border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3"
      >
        in
      </span>

      <div class="relative flex h-full flex-1 items-center pl-3">
        <label class="absolute -top-10 left-0"> Where?</label>
        <text-input
          v-model="location"
          placeholder="Los Angeles"
        />
      </div>
    </div>

    <action-button
      text="Search"
      type="secondary"
      class="rounded-r-3xl"
    />
  </form>
</template>

<script>
import ActionButton from '@/components/navigation/ActionButton.vue';
import TextInput from '@/components/TextInput.vue';
export default {
  name: 'JobSearchForm',
  components: {
    ActionButton,
    TextInput
  },
  data() {
    return {
      role: '',
      location: ''
    };
  }
};
</script>

<style scoped></style>
