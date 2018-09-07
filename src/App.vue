<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
};
</script>
<style>
@font-face {
  font-family: "Super Mario 256";
  src: url("./assets/SuperMario256-nor.ttf");
}

#app{
  font-family: "Super Mario 256";
}

body {
    background-image: url("./assets/background.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
}

.extra-margins {
  margin-top: 25px;
  margin-left: 25px;
}
</style>
