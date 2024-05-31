<template>
  <v-app>
    <v-main>
      <RouterView />
    </v-main>
    <v-footer app>
      <span>© 2024 Tienda de Productos. Todos los derechos reservados.</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import '~vuetify/dist/vuetify.min.css';

/* Estilos globales */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background-color: #f5f5f5;
}
</style>

