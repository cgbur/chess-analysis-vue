<!--App entry point-->
<template>
  <div id="app">
    <div id="nav">
      <md-button class="md-raised" to="/">Home</md-button>
      <md-button class="md-raised" to="/about">About</md-button>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>

  @import "styles/colors";

  #nav {
    padding: 30px;
    position: fixed;
    bottom: 0;
    z-index: 3000;
    opacity: .8;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: $primary;
      }
    }
  }
</style>
