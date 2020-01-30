<template>
  <div>
    <Header title="Methods and Process" page="about"/>
    <div class="body-container">
      <DataCollection/>
      <AboutLineGraphs/>
    </div>
  </div>
</template>

<script>

  import Header from "../components/Header";
  import DataCollection from "../components/text/DataCollection";
  import AboutLineGraphs from "../components/text/AboutLineGraphs";

  export default {
    name: 'About',
    components: {
      AboutLineGraphs,
      DataCollection,
      Header
    }
  }
</script>

<style lang="scss" scoped>

</style>
