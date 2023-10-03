<script>
import BlocoCabecalho from "./components/BlocoCabecalho.vue";
import BlocoMenu from "./components/BlocoMenu.vue";
import { RouterView } from "vue-router";
import BlocoRodape from "./components/BlocoRodape.vue";

export default {
  components: { BlocoCabecalho, BlocoMenu, RouterView, BlocoRodape },
};
</script>
<template>
  <BlocoMenu />
  <BlocoCabecalho />
  <main id="content"><RouterView /></main>
  <BlocoRodape />
</template>
<style>
@import "@/assets/base.css";

#app {
  height: 100%;
  display: grid;
  grid-template-columns: 15% 1fr;
  grid-template-rows: 10% auto 10%;
  grid-template-areas:
    "header header"
    "menu content"
    "footer footer";
}
#header {
  grid-area: header;
}
#content {
  grid-area: content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
#footer {
  grid-area: footer;
}
#sidenav {
  grid-area: sidenav;
}

main {
  margin-bottom: 10px;
  margin-top: 10px;
  max-height: 100%;
  min-height: 608px;
  max-width: 100%;
}
</style>
