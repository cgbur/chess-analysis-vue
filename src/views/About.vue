<template>
  <div>
    <HelloWorld title="Methods and Process"/>
    <div class="body">
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
      <img src="../assets/data_images/a1.jpg" alt="Image"/>
      <p>
        We knew that we needed to consolidate all the data we would eventually collect, so we decided to use JSON as
        our preferred data format. From this format, a script could easily be written that would convert it to any
        other format. The script used to parse this data can be found <a href="">here</a>.
      </p>
    </div>
  </div>
</template>

<script>

  import HelloWorld from "../components/HelloWorld";

  export default {
    name: 'About',
    data() {
      return {}
    },
    components: {
      HelloWorld
    }
  }
</script>

<style lang="scss" scoped>

</style>
