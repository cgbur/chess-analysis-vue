

  import {Line, mixins} from "vue-chartjs";
  // import the plugin core
  import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes';

  // import a particular color scheme
  import { Paired7 } from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.brewer';

  const { reactiveProp } = mixins;

  export default {
    extends: Line,
    mixins: [reactiveProp],
    props: [],
    data() {
      return {
        options: {
          plugins: {
            colorschemes: {
              scheme: Paired7
            }
          }
        }
      }
    },
    mounted () {
      // this.chartData is created in the mixin.
      // If you want to pass options please create a local options object
      this.renderChart(this.chartData, this.options)
    }
  }
