<template>
  <v-container>
    <h5 class="mt-0">Это лабораторная работа номер 1-2</h5>
    <p>Меня бесит вью, можно реакт?</p>
    <slider />
  </v-container>
</template>

<script>
import Slider from "../components/Slider.vue";
export default {
  name: "Home",
  components: { Slider },
};
</script>
