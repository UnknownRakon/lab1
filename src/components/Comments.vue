<template>
  <div>
    <div class="text-h4" align="center">Комментарии</div>
    <comments-list v-bind:array="this.comments" />
    <comment-form v-on:add="addComment" />
  </div>
</template>

<script>
import CommentForm from "./CommentForm.vue";
import CommentsList from "./CommentsList.vue";
export default {
  components: { CommentsList, CommentForm },
  name: "Comments",
  data() {
    return {
      comments: [],
    };
  },
  beforeMount() {
    fetch("/comments.json", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          this.comments = result;
        },
        (error) => {
          console.log(error);
        }
      );
  },
  methods: {
    addComment: function (data) {
      this.comments.push({ name: data.name, comment: data.comment });
    },
  },
};
</script>
<style lang="scss">
.news {
  margin-block-end: 20px;
}
</style>
