<template>
  <form
    class="flex h-12 w-full items-center rounded-3xl border-2 border-brand-gray-1"
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon
      :icon="['fas', 'search']"
      class="ml-4 mr-3"
    />

    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label
          for="role"
          class="absolute -top-10 left-0"
        >
          Role
        </label>
        <text-input
          id="role"
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
        <label
          for="location"
          class="absolute -top-10 left-0"
        >
          Where?</label
        >
        <text-input
          id="location"
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

<script setup>
import ActionButton from '@/components/Navigation/ActionButton.vue';
import TextInput from '@/components/TextInput.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const role = ref('');
const location = ref('');
const router = useRouter();

const searchForJobs = () => {
  router.push({
    name: 'JobResults',
    query: {
      role: role.value,
      location: location.value
    }
  });
};
</script>

<style scoped></style>
