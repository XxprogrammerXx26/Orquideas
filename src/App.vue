<template>
  <div id="app">
    <router-view></router-view>  <!-- Aquí se renderizan las vistas -->
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
/* Estilos globales si los tienes */
</style>
