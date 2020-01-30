<template>
  <div class="container" :class="pageClass">
    <h1 class="header">{{title}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      title: String,
      page: String
    },
    computed: {
      // returns the correct class corresponding to page
      // used to render different header images
      pageClass: function () {
        switch (this.page) {
          case 'home':
            return 'home';
          case 'about':
            return 'about';
          default:
            return '';
        }
      }
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

  .home {
    background-image: url("../assets/jeshoots-com-fzOITuS1DIQ-unsplash-crop.jpg");
  }

  .about {
    background-image: url("../assets/w6Q5CUU-chess-board-wallpaper.jpg");
  }

  .container {
    padding-top: 100px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 350px;
    clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
  }

</style>
