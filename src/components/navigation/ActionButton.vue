<template>
  <button :class="buttonClass">
    {{ props.text }}
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary'].includes(value)
  }
});

const { type } = props;

const buttonClass = computed(() => {
  return { [type]: true };
});
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
