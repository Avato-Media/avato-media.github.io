<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.5.0/semantic.min.css);

</style>
<template>
  <NuxtLayout />
</template>

<script>
export default {
  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.5.0/semantic.min.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
  }
};
</script>