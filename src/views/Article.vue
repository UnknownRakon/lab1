<template>
  <v-container>
    <div class="text-h3" align="center">
      {{ this.article.name }}
    </div>
    <v-img
      width="400"
      class="mx-auto my-5"
      :src="returnSource(this.article.full_image)"
    ></v-img>
    <p>
      {{ this.article.desc }}
    </p>
    <i>{{ this.article.date }}</i>
    <Comments v-bind:id="this.$route.params.id" />
  </v-container>
</template>

<script>
import Comments from "../components/Comments.vue";
export default {
  components: { Comments },
  name: "Article",
  data() {
    return {
      // articleId: $route.params.id,
      article: {},
    };
  },
  mounted() {
    fetch(`http://demo-api.vsdev.space/api/articles/${this.$route.params.id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          this.article = result;
        },
        (error) => {
          console.log(error);
        }
      );
  },
  methods: {
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
