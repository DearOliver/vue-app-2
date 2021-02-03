<template>
  <div id="housesdiv" class="Houses">
    <ul>
      <li @click="displayhouse('gryffindor')">
        🦁 Gryffindor 🦁
      </li>
      <li @click="displayhouse('ravenclaw')">
        🦅 Ravenclaw 🦅
      </li>
      <li @click="displayhouse('hufflepuff')">
        🦡 Hufflepuff 🦡
      </li>
      <li @click="displayhouse('slytherin')">
        🐍 Slytherin 🐍
      </li>
    </ul>
    <hr>
    <HouseCharacters v-if="is_house" :house="housepicked"/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HouseCharacters from '@/components/HouseCharacters.vue'

  export default {
    name: 'Houses',
    data: function(){
      return{
        housepicked: null,
        is_house: false
      }
    },
    methods:{
      displayhouse: function(house){
        this.housepicked = house;
        this.is_house = true
      }
    },
    components: {
      HouseCharacters
    }
  }
</script>

<style>
  #housesdiv {
    margin: 80px;
    text-align: center;
    justify-content: center;
    background: #191919;
    color: white;
    padding: 30px;
  }

  #housesdiv>ul {
    list-style-type:none;
  }

  #housesdiv>ul>li {
    margin: 40px;
    font-size: 30px;
  }

  #housesdiv>ul>li:hover {
    color : darkgreen;
  }

  #housesdiv>hr {
    margin: 60px;
  }

  #housesdiv>div>h2 {
    color : darkgreen;
    margin : 40px;
  }

  #housesdiv>div>p {
    margin : 20px;
  }
</style>
