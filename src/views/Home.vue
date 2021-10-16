<template>
  <v-container>
    <div class="text-h3 text-center mt-0">
      Это лабораторная работа номер 1-2
    </div>
    <p class="text-h4 text-center">Меня бесит вью, можно реакт?</p>
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
