<template>
  <div class="container">
    <h1 class="header">{{title}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      title: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/colors";

  .header {
    color: white !important;
    width: 350px;
    margin-top: -70px;
    margin-left: 50px;
    font-weight: bold;
    font-size: 6em;
    line-height: 1em;
    text-shadow: 2px 2px 12px #363636;
    clip-path: content-box;
  }

  .container {

    padding-top: 100px;
    background-image: url("../assets/jeshoots-com-fzOITuS1DIQ-unsplash-crop.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 350px;
    clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
  }

</style>
