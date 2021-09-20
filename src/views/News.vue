<template>
  <b-container fluid>
    <b-card v-for="article in articles" :key="article.id" class="news">
      <b-media>
        <h5 class="mt-0">{{ article.name }}</h5>
        <p>{{ article.date }}</p>
        <router-link :to="{ name: 'article', params: { id: article.id } }">
          Подробнее
        </router-link>
      </b-media>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "News",
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
};
</script>
<style lang="scss">
.news {
  margin-block-end: 20px;
}
</style>
