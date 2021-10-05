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
        <v-tab>
          <router-link to="/" tag="div" class="nav-link">
            Главная</router-link
          ></v-tab
        >
        <v-tab>
          <router-link to="/news" tag="div" class="nav-link">
            Новости</router-link
          ></v-tab
        >
        <v-tab>
          <router-link to="/gallery" tag="div" class="nav-link">
            Галлерея</router-link
          ></v-tab
        >
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
  height: 100%;
  color: inherit;
}
.nav-link:hover {
  color: inherit;
}
</style>
