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
          <profile-image v-if="isLogin" />
          <action-button
            v-else
            text="Sign In"
            type="primary"
            @click="userLogin"
          />
        </div>
      </div>
      <sub-nav v-if="isLogin" />
    </div>
  </header>
</template>

<script>
import ActionButton from '@/components/navigation/ActionButton.vue';
import ProfileImage from '@/components/navigation/ProfileImage.vue';
import SubNav from '@/components/navigation/SubNav.vue';

export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
    SubNav
  },
  data() {
    return {
      menuItems: [
        { text: 'Teams', url: '/' },
        { text: 'Locations', url: '/' },
        { text: 'Benefits', url: '/' },
        { text: 'Jobs', url: '/jobs/results' },
        { text: 'Students', url: '/' }
      ],
      isLogin: false
    };
  },
  computed: {
    headerHeightClass() {
      return {
        'h-16': !this.isLogin,
        'h-32': this.isLogin
      };
    }
  },
  methods: {
    userLogin() {
      this.isLogin = true;
    }
  }
};
</script>
