<template>
  <div>
    <BarChart :chart-data="chartData" :height="200"/>
    <label>
      {{year}}
      <input type="range" min="1975" max="2020" v-model="year"/>
    </label>
  </div>
</template>

<script>
  import BarChart from "./BarChart";


  const combined = require('../data/combined.json');

  export default {
    name: "BarChartFederationNormalized",
    components: {BarChart},
    data: function () {
      return {
        year: 2010,
        combined,
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
      updateChartData: function () {
        let labels = Object.keys(this.combined);
        labels.sort((afed, bfed) => {
          let a = this.combined[afed][this.year];
          let b = this.combined[bfed][this.year];
          a = a ? a.count : 0;
          b = b ? b.count : 0;

          return b - a;
        });
        labels = labels.splice(0, 20);
        const data = labels.map(fed => {
          let count = this.combined[fed][this.year];
          return count ? count.count : 0;
        });

        this.chartData = {
          labels,
          datasets: [{
            label: 'set',
            backgroundColor: '#1F78B4',
            data: data
          }]
        }
      }
    },
    watch: {
      year: function () {
        this.updateChartData();
      }
    },
    mounted() {
      this.updateChartData();
    }
  }
</script>

<style scoped>

</style>
