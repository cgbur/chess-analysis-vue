<template>
  <div>
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
