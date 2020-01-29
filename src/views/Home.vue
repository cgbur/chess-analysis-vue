<template>
  <div class="home">
    <HelloWorld title="Temporal Analysis of Chess"/>

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
  import HelloWorld from '@/components/HelloWorld.vue'
  import LineChartFederation from "../components/LineChartFederation";
  import LineChartFederationNormalized from "../components/LineChartFederationNormalized";
  import Legend from "../components/text/Legend";
  import LineChartFederationTop from "../components/LineChartFederationTop";

  export default {
    name: 'home',
    data: function () {
      return {

      }
    },
    components: {
      LineChartFederationTop,
      Legend,
      LineChartFederationNormalized,
      LineChartFederation,
      HelloWorld
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
