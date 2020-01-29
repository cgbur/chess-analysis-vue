<template>
  <div id="app">
    <div id="nav">
      <md-button to="/">Home</md-button>
      <md-button to="/about">About</md-button>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

  @import "styles/colors";

#nav {
  padding: 30px;
  position: fixed;
  bottom: 0;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: $primary;
    }
  }
}
</style>
