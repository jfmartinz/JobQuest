<template>
  <img
    :src="imageLink"
    alt="User Profile"
    class="bg-co bg- h-8 w-8 rounded-3xl object-contain"
  />
</template>

<script>
export default {
  name: 'ProfileImage',

  data() {
    return {
      imageLink: 'https://yourimageshare.com/ib/VzoTnxGxVK.webp'
    }
  }
}
</script>
