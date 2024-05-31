<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-container class="custom-container">
      <div class="custom-header">
        <h1>Gestión de Productos</h1>
      </div>
      <v-data-table :headers="headers" :items="productos">
        <!-- Add buttons for CRUD operations here -->
      </v-data-table>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        productos: [],
        headers: [
          { text: 'Nombre', value: 'nombre' },
          { text: 'Precio', value: 'precio' },
          { text: 'Descripción', value: 'descripcion' },
          { text: 'Stock', value: 'stock' },
          { text: 'Acciones', value: 'actions', sortable: false },
        ],
      };
    },
    mounted() {
      this.fetchProductos();
    },
    methods: {
      fetchProductos() {
        axios.get('http://localhost:3000/productos').then(response => {
          this.productos = response.data;
        });
      },
    },
  };
  </script>
  