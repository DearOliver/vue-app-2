<template>
  <div id="housecard" class="HouseCharacters">
    <h1>House : {{ housepicked }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HouseCharacters',
  props: {
    housepicked: String
  }
}
</script>

<style scoped>

</style>
