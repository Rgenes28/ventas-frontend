<template>
    <div class="pagina-inicio">
      <header>
        <h1>Bienvenido a la Tienda de Productos</h1>
        <nav>
          <router-link to="/producto">Productos</router-link>
          <router-link to="/factura">Facturas</router-link>
        </nav>
      </header>
      <main>
        <!-- Aquí puedes agregar contenido adicional para la página de inicio -->
        <p>¡Explora nuestra selección de productos y administra tus facturas!</p>
      </main>
      <footer>
        <p>© 2024 Tienda de Productos. Todos los derechos reservados.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PaginaInicio',
  };
  </script>
  
  <style scoped>
  /* Estilos específicos de la página de inicio */
  .pagina-inicio {
    text-align: center;
  }
  
  header {
    background-color: #3f51b5;
    color: white;
    padding: 1rem;
  }
  
  nav {
    margin: 1rem 0;
  }
  
  nav a {
    margin: 0 1rem;
    color: white;
    text-decoration: none;
  }
  
  main {
    padding: 2rem;
  }
  
  footer {
    background-color: #f5f5f5;
    padding: 1rem;
    position: fixed;
    width: 100%;
    bottom: 0;
  }
  </style>
  