<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full border-b border-gray-300">
      <div class="mx-auto flex h-full flex-nowrap border-brand-gray-1 px-8">
        <router-link
          to="/"
          class="flex items-center text-xl"
          >JobQuest</router-link
        >
        <nav class="ml-12 h-full">
          <ul class="flex h-full items-center">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="my-4 ml-5 flex h-full items-center first:ml-0"
            >
              <router-link :to="menuItem.url">{{ menuItem.text }}</router-link>
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button
            v-else
            text="Sign In"
            type="primary"
            @click="loginUser"
          />
        </div>
      </div>
      <sub-nav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/user';

import ActionButton from '@/components/Navigation/ActionButton.vue';
import ProfileImage from '@/components/Navigation/ProfileImage.vue';
import SubNav from '@/components/Navigation/SubNav.vue';

import { ref, computed } from 'vue';

const menuItems = ref([
  { text: 'Teams', url: '/teams' },
  { text: 'Locations', url: '/' },
  { text: 'Benefits', url: '/' },
  { text: 'Jobs', url: '/jobs/results' },
  { text: 'Students', url: '/' }
]);

const userStore = useUserStore();

const headerHeightClass = computed(() => {
  return {
    'h-16': !userStore.isLoggedIn,
    'h-32': userStore.isLoggedIn
  };
});

const loginUser = () => {
  userStore.loginUser();
};

const isLoggedIn = computed(() => userStore.isLoggedIn);
</script>
