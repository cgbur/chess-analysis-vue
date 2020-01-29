<template>
  <div class="home">
    <HelloWorld/>

    <div class="body">
      <h1 class="md-display-1" style="margin-bottom: 0">Legend</h1>

      <ul>
        <li>
          USA = United States
        </li>
        <li>
          FRA = France
        </li>
        <li>
          NOR = Norway
        </li>
        <li>
          RUS = Russia
        </li>
        <li>
          IND = India
        </li>
        <li>
          CHN = China
        </li>
        <li>
          PUR = Puerto Rico
        </li>
      </ul>
      <h1 class="md-display-1">Total Number of Players</h1>
      <LineChartFederation/>
      <h1 class="md-display-1">Total Number of Players / Population of Country (thousands)</h1>
      <LineChartFederationNormalized/>
      <h1 class="md-display-1">Top Chess Playing Countries</h1>
      <BarChartFederationNormalized/>
      <h1>sefsef</h1>
      <h1>sefsef</h1>
      <h1>sefsef</h1>
      <h1>sefsef</h1>
      <h1>sefsef</h1>
      <h1>sefsef</h1>
      <h1>sefsef</h1>
      <h1>sefsef</h1>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import LineChartFederation from "../components/LineChartFederation";
  import LineChartFederationNormalized from "../components/LineChartFederationNormalized";
  import BarChartFederationNormalized from "../components/BarChartFederationNormalized";

  export default {
    name: 'home',
    data: function () {
      return {

      }
    },
    components: {
      BarChartFederationNormalized,
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
  .body {
    margin: auto;
    width: 900px;
    padding-left: 1em;
    padding-right: 1em;
  }
</style>
