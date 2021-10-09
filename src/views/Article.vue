<template>
  <v-container>
    <div class="text-h3" align="center">
      {{ getByIndex({ articles, index: $route.params.id }).name }}
    </div>
    <v-img
      width="400"
      class="mx-auto my-5"
      :src="
        returnSource(
          getByIndex({ articles, index: $route.params.id }).full_image
        )
      "
    ></v-img>
    <p>
      {{ getByIndex({ articles, index: $route.params.id }).desc }}
    </p>
    <i>{{ getByIndex({ articles, index: $route.params.id }).date }}</i>
    <Comments />
  </v-container>
</template>

<script>
import Comments from "../components/Comments.vue";
export default {
  components: { Comments },
  name: "Article",
  data() {
    return {
      articles: [],
    };
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
      return articles[index - 1] || {};
    },
    returnSource: function (src) {
      return `/images/${src}`;
    },
  },
};
</script>
<style lang="scss">
.news {
  margin-block-end: 20px;
}
</style>
