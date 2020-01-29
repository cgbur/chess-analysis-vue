<template>
  <div>
    <h1 class="md-display-1">Players / Population of Country (ten thousands)</h1>

    <p class="md-body-2">Now we have a chart that shows the number of chess players but we are normalizing the data
    by account for the population of the country in a given year. This should give us a better understanding of how chess popularity
    varies in a given country. The Y axis of this chart is the number of players per 10,000 people.</p>

    <p class="md-body-2">What may seem shocking at first is the population of chess in Norway. Why would such a small country have so many chess players?
    Well we didn't choose Norway at random. It is home to the current world champion <a href="https://en.wikipedia.org/wiki/Magnus_Carlsen">Magnus Carlsen</a>
    who is arguably the best chess player in history.</p>

    <p class="md-body-2">The other thing to note now is that the enormous rise in chess players in India may have just
    been correlated to the population of the country. Although many of the top youth in India cite V. Anand as their inspiration,
    there is no real way to tie his success to the success of chess in India.</p>
    <LineChart :chart-data="chartData" :height="200"/>
  </div>
</template>

<script>
  import LineChart from "./LineChart.js";


  const combined = require('../data/combined.json');

  export default {
    name: "LineChartFederationNormalized",
    components: {LineChart},
    data: function () {
      return {
        federations: ['USA', 'FRA', 'NOR', 'RUS', 'IND', 'CHN', 'PUR'],
        combined,
        labels: this.getLabelRange(),
        chartData: {},
        populations: {
          USA: [215466, 227225, 237924, 249623, 266279, 282163, 295517, 309348, 321369],
          FRA: [53998, 55164, 56561, 58256, 59824, 61256, 63060, 64941, 66554],
          NOR: [4008, 4086, 4153, 4243, 4360, 4493, 4625, 4892, 5208],
          RUS: [134294, 139039, 143938, 147973, 148759, 147054, 143320, 142527, 142424],
          IND: [618923, 684888, 759613, 838159, 920585, 1006301, 1090974, 1173109, 1251696],
          CHN: [920295, 987822, 1061876, 1153164, 1221056, 1268302, 1302285, 1336681, 1367486],
          PUR: [2936, 3210, 3383, 3537, 3684, 3811, 3822, 3722, 3599],
        }
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
              return this.combined[fed][year].count / this.populations[fed][Math.floor((year - 1975) / 5)] * 10
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
