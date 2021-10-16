<template>
  <div class="text-center flex-grow-1 flex-shrink-1 p-5">
    <v-progress-circular
      :size="70"
      :width="7"
      indeterminate
      color="primary"
    ></v-progress-circular>
    <v-progress-circular
      :size="70"
      :width="7"
      indeterminate
      color="red"
    ></v-progress-circular>
    <v-progress-circular
      :size="70"
      :width="7"
      indeterminate
      color="purple"
    ></v-progress-circular>
    <v-progress-circular
      :size="70"
      :width="7"
      indeterminate
      color="green"
    ></v-progress-circular>
    <v-progress-circular
      :size="70"
      :width="7"
      indeterminate
      color="amber"
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>
<style lang="scss"></style>
