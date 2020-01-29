<template>
  <div>
    <h1 class="md-display-1">Total Number of Players</h1>

    <p class="md-body-2">In this section we look at the total number of chess players registered with
    FIDE. For this chart, we are only displaying a few countries. This is because in a later section we will normalize
    by the population of countries, and we needed to choose a few to work with. Our initial hypothesis was that we would
    see initially that chess was dominated by Russian and other European countries. This appears to be correct. As Russia,
    and France (Spain will be shown later) have a large amount of players.</p>

    <p class="md-body-2">One thing to note from this chart is the sharp rise in the population of Indian chess players.
    We suspect this is mostly due to the success of <a href="https://en.wikipedia.org/wiki/Viswanathan_Anand">Viswanathan Anand</a>.
      He became the first Indian chess world champion in 2000. When we normalize by country
      population in the next chart however, chess popularity seems to be on par with the United States.

    </p>
    <LineChart :chart-data="chartData" :height="200"/>

  </div>
</template>

<script>
  import LineChart from "./LineChart.js";


  const combined = require('../data/combined.json');

  export default {
    name: "LineChartFederation",
    components: {LineChart},
    data: function () {
      return {
        federations: ['USA', 'FRA', 'NOR', 'RUS', 'IND', 'CHN', 'PUR'],
        combined,
        labels: this.getLabelRange(),
        chartData: {}
    }
    },
    props: {},
    methods: {
      getLabelRange() {
        let labels = [];
        for (let i = 1975; i <= 2020; i++) {
          labels.push(i);
        }
        return labels;
      },
      updateChartData: function () {
        const datasets = this.federations.map(fed => {
          // fed = USA
          return {
            label: fed,
            backgroundColor: "#333",
            fill: false,
            data: this.labels.map(year => {
              if (!this.combined[fed][year]) return 0;
              return this.combined[fed][year].count
            })
          }
        });
        this.chartData = {
          labels: this.labels,
          datasets
        }
      }
    },
    mounted() {
      this.updateChartData();
    }
  }
</script>

<style scoped>

</style>
