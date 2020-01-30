<template>
  <div>
    <h1 class="md-display-3">Data Collection</h1>
    <p class="md-body-2">
      Although we initially thought we would have an easy time collecting all the data we would need for this project,
      we soon realized this was not the case. Although there is plently of data out there, none of it is standardized,
      and most (even the official sources) use outdated white-space tables.
    </p>
    <h2 class="md-display-1">1975-2000</h2>
    <p class="md-body-2">This group of data was all found from
      <a href="https://www.mark-weeks.com/chess/ratings/">https://www.mark-weeks.com/chess/ratings/</a>. The real
      problems with this data was the lack of an identifying column. The only way to identify a player was by their
      name. The
      problem was that different years had different spellings and abbreviates of the names. An example of this data
      can be
      seen below.</p>
    <img src="../../assets/data_images/a1.jpg" alt="Image"/>
    <p class="md-body-2">
      We knew that we needed to consolidate all the data we would eventually collect, so we decided to use JSON as
      our preferred data format. From this format, a script could easily be written that would convert it to any
      other format. The script used to parse this data can be found <a
        href="https://github.com/cgburgess/chess-analysis-vue/blob/master/scripts/parse_old.js">parse_old.js</a>.
      The major decision that was made at this point was to use regular expression to parse the file. This would later
      turn out to be a mistake and we should have probably just done the conversion to CSV's by hand using Excel.
      This was was preferred at the time because it could be automated to do all the data at once. The downfall was
      in order to accommodate the larger datasets, regular expressions were not enough.
    </p>
    <p class="md-body-2">
      It should be noted that we attempted to use a white-space table parsing library but it would never finish
      executing on the larger datasets.
    </p>

    <h2 class="md-display-1">2001-2020</h2>
    For these years we stopped trying to parse them using javascript alone. The data was made into .csv's by hand and
    then a script was written to parse them into the same JSON format as above. The script for parsing was
    <a href="https://github.com/cgburgess/chess-analysis-vue/blob/master/scripts/parse_csvs.js">parse_csvs.js</a>.

    <h2 class="md-display-1">Bringing It All Together</h2>
    <p class="md-body-2">
      Finally at this point we had all the JSON files formatted. Each year had its own JSON file that looked like the
      following:
    </p>
    <pre><code>
   FILE: 1975-01.json
   {
    "IND": {
        "count": 3,
        "best": {
            "name": "Hassan,M. ",
            "federation": "IND",
            "rating": 2380
        },
        "average": 2310
    },
    "USA": {
        "count": 52,
        "best": {
            "name": "Fischer,R. ",
            "federation": "USA",
            "rating": 2780
        },
        "average": 2382.596153846154
    }...}


      </code></pre>
    <p class="md-body-2">
      In order to combine all of these separate files into one big JSON file, <a
        href="https://github.com/cgburgess/chess-analysis-vue/blob/master/scripts/combine.js">combine.js</a> was
      written.
      <a href="https://github.com/cgburgess/chess-analysis-vue/blob/master/scripts/make_big_csv.js">make_big_csv.js</a>
      was written to convert this file into a CSV for use in R and QGIS.
      The final format for the json file was a large object where the first level keys are the federations and the
      second level keys are the years in which data was present for that federation.
    </p>
  </div>
</template>

<script>
  export default {
    name: "DataCollection"
  }
</script>

<style scoped>

</style>
