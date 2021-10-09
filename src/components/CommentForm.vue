<template>
  <div>
    <v-text-field label="Имя" v-model="name"></v-text-field>
    <v-text-field label="Комментарий" v-model="comment"></v-text-field>
    <v-btn elevation="2" small @click="add()">Добавить</v-btn>
  </div>
</template>

<script>
export default {
  name: "commentForm",
  data() {
    return {
      name: "",
      comment: "",
    };
  },
  methods: {
    add: function () {
      this.$emit("add", {
        name: this.name,
        comment: this.comment,
      });
      this.clear();
    },
    clear: function () {
      (this.comment = ""), (this.name = "");
    },
  },
};
</script>
<style lang="scss">
.news {
  margin-block-end: 20px;
}
</style>
