<template>
  <v-app>
    <v-main>
        <Menu/>
        <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Menu from './components/Menu.vue';

export default {
  components: { Menu },
  name: 'App',

  data: () => ({
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');
body, .theme--light.v-application{
    height: 100%;
    background-image: linear-gradient(#081221, #03080f) !important;    
    color: #c1d1e8  !important;
    font-family: "Mulish", Helvetica, Arial;  
}
</style>
