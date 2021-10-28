<template>
  <v-row class="d-flex justify-space-around align-center filters"
    ><v-chip v-for="category in categories" :key="category.id">{{
      category.name
    }}</v-chip></v-row
  >
</template>

<script>
export default {
  name: "Filters",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("GET_CATEGORIES");
  },
  computed: {
    categories() {
      return this.$store.getters.CATEGORIES;
    },
  },
};
</script>
<style lang="scss">
.filters {
  padding-top: 30px;
  height: 50px;
  box-sizing: border-box;
}
</style>
