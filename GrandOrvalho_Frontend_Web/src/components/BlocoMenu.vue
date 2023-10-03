<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <aside id="menu">
    <RouterLink to="/"><div class="link">Home</div></RouterLink>
    <RouterLink to="/clientes"><div class="link">Cliente</div></RouterLink>
    <div class="span-menu"></div>
    <RouterLink to="/consultas"><div class="link">Consultas</div></RouterLink>
  </aside>
</template>

<style>
#menu {
  max-height: 100%;
  max-width: 100%;
  min-height: 608px;
  background-color: #6d8c89;
  padding: 10px;
}
.link {
  width: 90%;
  height: 30px;
  margin-top: 10px;
  border-radius: 15px;
  border: 1px solid #f2eee9bf;
  text-align: center;
  padding: 10px;
  font-size: 20px;
  font-family: monospace;
  color: white;
}
.span-menu {
  margin-top: 10px;
  height: 3px;
  width: 100%;
  border-radius: 15px;
  background-color: #f2eee9bf;
}
</style>
