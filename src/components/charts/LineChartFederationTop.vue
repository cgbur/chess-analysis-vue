<template>
  <div>
    <h1 class="md-display-1">Top {{number}} Chess Countries as of {{year}}</h1>

    <p class="md-body-2">This section is for taking a general look at the top chess countries. Change the year to see
      the top countries in that given year. In doing so you will be able to see where they are today (or even if
      they still exist in some cases!). In particular, take a look at the USSR in the 80-91 and Yugoslavia up until
      2003.
    </p>

    <div class="options-container">
      <md-field>
        <md-icon>bar_chart</md-icon>
        <label>
          Number of countries
        </label>
        <md-input type="number" min="1" max="80" v-model="number"/>
      </md-field>


      <md-field>
        <md-icon>event</md-icon>
        <label>
          Year
        </label>
        <md-input type="number" min="1975" max="2020" v-model="year"/>
      </md-field>

      <md-field>
        <md-icon>visibility</md-icon>

        <label>Attribute</label>
        <md-select style="padding-left: 12px" v-model="dataViewOption">
          <md-option value="count">Player Count</md-option>
          <md-option value="average">Average Rating</md-option>
          <md-option value="best">Best Player Rating</md-option>
        </md-select>
      </md-field>
    </div>

    <LineChartMoreColors :chart-data="chartData" :height="200"/>

  </div>
</template>

<script>
  import LineChartMoreColors from "../vue-chartjs/LineChartMoreColors";

  const combined = require('../../data/combined.json');

  export default {
    name: "LineChartFederationTop",
    components: {LineChartMoreColors},
    data: function () {
      return {
        number: 5,
        year: 2020,
        labels: this.getLabelRange(),
        chartData: {},
        dataViewOption: 'count'
      }
    },
    props: {},
    methods: {
      // used to dynamically fetch the desired data data
      getData(type) {
        switch (this.dataViewOption) {
          case 'count':
            return type.count;
          case 'average':
            return type.average;
          case 'best':
            return type.best.rating;
        }
        return type['count']
      },
      // helper function to get labels
      getLabelRange() {
        let labels = [];
        for (let i = 1975; i <= 2020; i++) {
          labels.push(i);
        }
        return labels;
      },
      // updates the chart data when a change happens
      updateChartData: function () {
        let federations = Object.keys(combined);

        federations.sort((afed, bfed) => {
          let a = combined[afed][this.year];
          let b = combined[bfed][this.year];
          a = a ? a.count : 0;
          b = b ? b.count : 0;
          return b - a;
        });

        federations = federations.splice(0, this.number);

        const datasets = federations.map(federations => {
          return {
            label: federations,
            fill: false,
            data: this.labels.map(year => {
              if (!combined[federations][year]) return 0;
              return this.getData(combined[federations][year]);
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
      number: function () {
        this.updateChartData();
      },
      year: function () {
        this.updateChartData();
      },
      dataViewOption: function () {
        this.updateChartData();
      }
    }
  }
</script>

<style scoped lang="scss">
  .md-field {
    width: 200px;
  }

  .options-container {
    display: flex;
  }

</style>
