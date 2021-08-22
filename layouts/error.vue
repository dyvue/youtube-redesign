<template>
  <div class="p-6 text-sm">
    <p v-if="error.statusCode === 404">404 page not found</p>
    <p v-else>An error occurred</p>
  </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>