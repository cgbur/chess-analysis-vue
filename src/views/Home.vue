<template>
  <div class="home">
    <Header title="Temporal Analysis of Chess" page="home"/>

    <div class="body">
      <Legend/>
      <LineChartFederation/>
      <LineChartFederationNormalized/>
      <LineChartFederationTop/>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '../components/Header.vue'
  import Legend from "../components/text/Legend";
  import LineChartFederationTop from "../components/charts/LineChartFederationTop";
  import LineChartFederationNormalized from "../components/charts/LineChartFederationNormalized";
  import LineChartFederation from "../components/charts/LineChartFederation";

  export default {
    name: 'home',
    components: {
      LineChartFederationTop,
      Legend,
      LineChartFederationNormalized,
      LineChartFederation,
      Header
    }
  }
</script>

<style lang="scss" scoped>
  .chart-1 {
    height: 300px;
  }

  .center {
    display: flex;
    justify-content: center;
  }
</style>
