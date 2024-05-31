<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-container>
      <v-card>
        <v-card-title>Lista de Facturas</v-card-title>
        <v-card-text>
          <v-data-table :headers="headers" :items="facturas">
            <template v-slot:items="props">
              <td>{{ props.item.numero }}</td>
              <td>{{ props.item.fecha }}</td>
              <td>{{ props.item.cliente }}</td>
              <td>{{ props.item.total }}</td>
              <td>
                
              </td>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ListaFacturas',
    data() {
      return {
        facturas: [],
        headers: [
          { text: 'Número', value: 'numero' },
          { text: 'Fecha', value: 'fecha' },
          { text: 'Cliente', value: 'cliente' },
          { text: 'Total', value: 'total' },
          { text: 'Acciones', value: 'acciones', sortable: false },
        ],
      };
    },
    mounted() {
      this.cargarFacturas();
    },
    methods: {
      cargarFacturas() {
        axios.get('http://localhost:3000/facturas')
          .then(response => {
            this.facturas = response.data;
          })
          .catch(error => {
            console.error('Error al cargar facturas:', error);
          });
      },
      verDetalles() {
        // Lógica para mostrar detalles de la factura
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente */
  </style>
  