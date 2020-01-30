<template>
  <div>
    <h1 class="md-display-3">Line Graphs (1-3) and Website</h1>
    <p class="md-body-2">
      The website was built using <a href="https://vuejs.org/">Vue.js</a>. Vue is a web framework that makes building
      large websites easier and automatically handles things like two-way binding and routing. This was chosen because
      it is easy to integrate with things like <a href="https://www.chartjs.org/">chartjs</a>. I have gone through and
      commented the major files so they should be easier to understand. You should start
      in the <a href="https://github.com/cgburgess/chess-analysis-vue/tree/master/src"><code>/src/</code></a>.
      directory.
    </p>
    <p class="md-body-2">
      The source code is heavily commented to explain what is described below. If you have any questions feel free to
      ask. I (Chris) would be happy to answer.
    </p>
    <h2 class="md-display-1">Chess Population</h2>
    <p class="md-body-2">
      Chartjs expects a series of labels and then data points that correspond to those labels. The best way to
      achieve this is to start with your list of labels and use the <code>map()</code> function to replace the label
      with the associated data point. The data was formatted in the JSON format so it could easy be used in the website
      by simply <code>require()</code>ing it. Once the data was loaded it is important to understand how to access the
      elements you are interested in. For example, if you wanted to look at the number of players in India in 1990, you
      would write <code>combined['IND']['1990']</code>.
    </p>
    <h2 class="md-display-1">Chess Population Normalized</h2>
    <p class="md-body-2">
      For the second chart, the exact same approach was used. This time however, extra data was gathered. This extra
      data was the population of each country that we were interested in. This data was not easy to gather and had to
      be collected by hand from wikipedia. This is the reason why this visualization (and the previous) only focus on a
      select few countries. The key line for this chart was
      <code>this.populations[fed][Math.floor((year - 1975) / 5)] * 10</code>. This gets the population of the country
      of interest at the correct year. This number was used to divide the number of chess players.
    </p>

    <h2 class="md-display-1">Top "x" Chess Countries as of "y"</h2>
    <p class="md-body-2">
      The main part of this graph is its interactivity. Since Vue handles all of the data-binding, this was a simple
      graph to construct. There are few key steps to reproduce this result.
    </p>
    <ol>
      <li>Given a year, sort the federation labels based on their count in that given year.</li>
      <pre><code>
        let federations = Object.keys(combined);
        federations.sort((afed, bfed) => {
          let a = combined[afed][this.year];
          let b = combined[bfed][this.year];
          a = a ? a.count : 0;
          b = b ? b.count : 0;
          return b - a;
        });
      </code></pre>
      <li>Given the number of countries to show x, only render the slice from 0 -> x.</li>
      <pre><code>
        federations = federations.splice(0, this.number);
      </code></pre>
      <li>Then, instead of just grabbing the data, we have defined a simple helper function to get the attribute we
        are interested in.
      </li>
      <pre><code>
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
      </code></pre>
    </ol>

  </div>
</template>

<script>
  export default {
    name: "AboutLineGraphs"
  }
</script>
