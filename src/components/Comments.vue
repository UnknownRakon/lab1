<template>
  <div>
    <div class="text-h4" align="center">Комментарии</div>
    <comments-list v-bind:array="this.comments" />
    <div v-if="validate" class="text" align="center">
      Эээээ, пустые коменты не отправляй!
    </div>
    <comment-form v-on:add="addComment" />
  </div>
</template>

<script>
import CommentForm from "./CommentForm.vue";
import CommentsList from "./CommentsList.vue";
export default {
  components: { CommentsList, CommentForm },
  name: "Comments",
  props: ["id"],
  data() {
    return {
      comments: [],
      validate: false,
    };
  },
  beforeMount() {
    this.getComments();
  },
  methods: {
    getComments: function () {
      fetch(`http://demo-api.vsdev.space/api/articles/${this.id}/comments`, {
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
    addComment: async function (data) {
      if (data.name !== "" && data.comment !== "") {
        this.validate = false;
        await fetch(
          `http://demo-api.vsdev.space/api/articles/${this.id}/comments`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_name: data.name,
              comment: data.comment,
            }),
          }
        );
        this.getComments();
      } else {
        this.validate = true;
      }
    },
  },
};
</script>
<style lang="scss">
.news {
  margin-block-end: 20px;
}
</style>
