<template>
  <div>
    <h1 class="md-display-1">Top {{number}} Chess Countries as of {{year}}</h1>

    <p class="md-body-2">This section is for taking a general look at the top chess countries. Change the year to see
    the top countries in that given year. In doing so you will be able to see where they are today (or even if they still
    exist in some cases!). In particular, take a look at the USSR in the 80-91 and Yugoslavia up until 2003.</p>

    <md-field>
      <md-icon>bar_chart</md-icon>

      <label>
        Number of countries
      </label>
      <md-input type="number" min="1" max="60" v-model="number"/>

    </md-field>


    <md-field>
      <md-icon>event</md-icon>
      <label>
        Year
      </label>
      <md-input type="number" min="1975" max="2020" v-model="year"/>


    </md-field>

    <LineChartMoreColors :chart-data="chartData" :height="200"/>

  </div>
</template>

<script>
  import LineChartMoreColors from "./LineChartMoreColors";


  const combined = require('../data/combined.json');

  export default {
    name: "LineChartFederationTop",
    components: {LineChartMoreColors},
    data: function () {
      return {
        combined,
        number: 5,
        year: 2020,
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

        let federations = Object.keys(this.combined);
        federations.sort((afed, bfed) => {
          let a = this.combined[afed][this.year];
          let b = this.combined[bfed][this.year];
          a = a ? a.count : 0;
          b = b ? b.count : 0;

          return b - a;
        });
        federations = federations.splice(0, this.number);
        const datasets = federations.map(fed => {
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
    },
    watch: {
      number: function() {
        this.updateChartData();
      },
      year: function () {
        this.updateChartData();
      }
    }
  }
</script>

<style scoped lang="scss">
  .md-field {
    width: 200px;
  }

</style>
