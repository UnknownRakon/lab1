<template>
  <b-container fluid>
    <b-card class="news">
      <b-media>
        <h5 class="mt-0">
          {{ getByIndex({ articles, index: $route.params.id }).name }}
        </h5>
        <p>
          {{ getByIndex({ articles, index: $route.params.id }).desc }}
        </p>
        <i>{{ getByIndex({ articles, index: $route.params.id }).date }}</i>
      </b-media>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "Article",
  data() {
    return { articles: [] };
  },
  beforeMount() {
    fetch("/articles.json", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          this.articles = result;
        },
        (error) => {
          console.log(error);
        }
      );
  },
  methods: {
    getByIndex({ articles = [], index = 0 }) {
      return articles[index] || {};
    },
  },
};
</script>
<style lang="scss">
.news {
  margin-block-end: 20px;
}
</style>
