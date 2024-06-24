<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: ['text', 'type'],
  computed: {
    buttonClass() {
      return {
        [this.type]: true
      };
    }
  }
};
</script>

<style scoped>
button {
  @apply px-7 py-3;
}

.primary {
  @apply rounded-sm border-0 border-none bg-blue-500 text-white hover:shadow-blue;
}

.secondary {
  @apply rounded-sm rounded-r-3xl bg-transparent text-brand-blue-2 hover:bg-brand-blue-2 hover:text-white hover:shadow-blue;
}
</style>
