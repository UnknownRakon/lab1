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
    <div class="text-h4" align="center">Комментарии</div>
    <v-row v-for="(com, i) in comments" :key="i">
      <i>{{ com.text }}</i>
    </v-row>
    <v-text-field label="комментарий" v-model="comment"></v-text-field>
    <v-btn elevation="2" small v-on:click="addComment()">Добавить</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "Article",
  data() {
    return { articles: [], comments: [], comment: "" };
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
    addComment: function () {
      this.comments.push({ text: this.comment });
      this.comment = "";
    },
  },
};
</script>
<style lang="scss">
.news {
  margin-block-end: 20px;
}
</style>
