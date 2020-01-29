<template>
  <div>
    <HelloWorld title="Methods and Process" page="about"/>
    <div class="body">
      <DataCollection/>

    </div>
  </div>
</template>

<script>

  import HelloWorld from "../components/HelloWorld";
  import DataCollection from "../components/text/DataCollection";

  export default {
    name: 'About',
    data() {
      return {}
    },
    components: {
      DataCollection,
      HelloWorld
    }
  }
</script>

<style lang="scss" scoped>

</style>
