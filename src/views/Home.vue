<template>
  <div class="home">
    <Header title="Temporal Analysis of Chess" page="home"/>

    <div class="body-container">

      <Legend/>
      <LineChartFederation/>
      <LineChartFederationNormalized/>
      <LineChartFederationTop/>
      <div class="center">
        <div>
          <md-button class="md-primary md-raised r-button" href="r_results.html">View R results</md-button>
          <md-button class="md-accent md-raised r-button" href="r_writeup.html">View R writeup</md-button>
        </div>
        <br/>
        <a href="https://github.com/cgburgess/chess-analysis-vue/tree/master/data">View all of the data used</a><br/>
        <a href="https://github.com/cgburgess/chess-analysis-vue/">View this website's source code</a>
      </div>
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
    text-align: center;
  }

  .r-button {
    margin-top: 5em;
    font-weight: bold;
    z-index: 4000;
    .md-ripple {
      padding: 5em !important;
    }
  }
</style>
