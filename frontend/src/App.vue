<template>
  <div>
    <nav>
      <NavbarComponent />
      <router-view></router-view>
    </nav>
  </div>
</template>

<script>
  import NavbarComponent from './components/NavbarComponent.vue';
  export default {
    components: {NavbarComponent}
  };
</script>