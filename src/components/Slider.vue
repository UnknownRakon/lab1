<template>
  <v-carousel hide-delimiterss>
    <v-carousel-item
      v-for="article in articles"
      :key="article.id"
      :src="returnSource(article.full_image)"
    >
      <div class="text-h2 slider">
        {{ article.name }}
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return { articles: [] };
  },
  methods: {
    returnSource: function (src) {
      return `/images/${src}`;
    },
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

<style scoped lang="scss">
.slider {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
