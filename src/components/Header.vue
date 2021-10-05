<template>
  <v-app-bar
    app
    dense
    flat
    absolute
    color="#fcb69f"
    dark
    shrink-on-scroll
    src="https://picsum.photos/1920/1080?random"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      ></v-img>
    </template>
    <Logo :style="{ width: 120, marginTop: 20 }" />
    <v-spacer></v-spacer>
    <div :style="{ width: 80 }">
      <v-text-field label="search"></v-text-field>
    </div>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <template v-slot:extension>
      <v-tabs align-with-title>
        <router-link to="/" tag="div"> <v-tab> Главная</v-tab></router-link>
        <router-link to="/news" tag="div"><v-tab> Новости</v-tab></router-link>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import Logo from "./Logo.vue";
export default {
  components: { Logo },
  name: "Header",
};
</script>

<style scoped lang="scss">
.nav-link {
  color: inherit;
  text-decoration: inherit;
}
</style>
