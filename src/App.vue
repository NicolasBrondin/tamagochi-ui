<template>
  <div id="app">
    <Game/>
  </div>
</template>

<script>
import Game from "./components/Game";

export default {
  name: "App",
  components: {
    Game
  }
};
</script>

<style>
html,
body {
  background: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(39, 199, 171, 1) 0%,
    rgba(70, 143, 197, 1) 90%
  );
  background-attachment: fixed;
}
.title {
  color: white;
  font-size: 34px;
  margin-top: 5px;
  margin-bottom: 20px;
  font-weight: bold;
}

.is-white {
  color: white;
}
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>