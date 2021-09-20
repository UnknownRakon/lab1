<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="nav">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
    <b-navbar-brand>Lab1</b-navbar-brand>
    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class="nav__item">
          <router-link to="/" class="nav__link"> Главная </router-link>
        </b-nav-item>
        <b-nav-item class="nav__item">
          <router-link to="/news" class="nav__link"> Новости </router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  padding: 10px 20px;
  margin-bottom: 20px;
}
.nav__link {
  text-decoration: none;
  color: inherit;
}
.nav__item {
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.2);
  }
}
</style>
