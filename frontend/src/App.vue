<template>
  <div>
    <nav>
      <!-- <router-link to="/">Strona głowna</router-link>
      <router-link to="/users">Lista uzytkownikow</router-link>
      <router-link to="/about">O nas</router-link> -->
      <router-view></router-view>
    </nav>
  </div>
</template>

<script>
  import Navbar from '.components/Navbar.vue';
  export default {
    components: {Navbar}
  };
</script>