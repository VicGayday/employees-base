<template>
  <Header />
  <MainPage />
</template>

<script>
import Header from "./components/Header.vue";
import MainPage from "./pages/MainPage.vue"

export default {
  name: 'App',
  components: {
    Header,
    MainPage,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: "Montserrat";
  src: url('./assets/fonts//Montserrat-VariableFont_wght.ttf') format('truetype');
}

#app {
  font-family: Montserrat;
  color: #76787d;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.container {
  max-width: 1366px;
  margin: 0 auto;
  padding: 0 25px;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
