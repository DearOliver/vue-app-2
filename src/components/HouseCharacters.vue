<template>
  <div id="housecard" class="HouseCharacters">
    <ul>
      <li v-for="(character, i) in housedata" :key="character" @click="displaycharacter(i)" >
        {{ character['name'] }}
      </li>
    </ul>
    <hr>
    <div v-if="is_character">
      <h2><b>🧍 {{ characterpicked['name'] }} 🧍</b></h2>
      <img :src="characterpicked['image']" :alt="characterpicked['name']">
      <p><b>🏠 House 🏠 : </b>{{ characterpicked['house'] }}</p>
      <p><b>🗓️ Date Of Birth 🗓️ : </b>{{ characterpicked['dateOfBirth'] }}</p>
      <p><b>🍭 Wand 🍭 : </b>{{ characterpicked['wand']['wood'] }} wood, {{ characterpicked['wand']['core'] }} core, {{ characterpicked['wand']['length'] }} inches</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HouseCharacters',
  props:{
    housedata : String
  },
  data: function(){
    return{
      characterpicked: null,
      is_character: false
    }
  },
  methods: {
    displaycharacter: function(i){
      this.characterpicked = this.housedata[i];
      this.is_character = true;
    }
  }
}
</script>

<style>
  #housecard {
    margin: 80px;
    text-align: center;
    justify-content: center;
    background: #191919;
    color: white;
    padding: 30px;
  }

  #housecard>ul {
    list-style-type:none;
  }

  #housecard>ul>li {
    margin: 20px;
    font-size: 30px;
  }

  #housecard>ul>li:hover {
    color : darkgreen;
  }

  #housecard>hr {
    margin: 100px;
  }

  #housecard>div>h2 {
    color : darkgreen;
    margin : 40px;
  }

  #housecard>div>p {
    margin : 20px;
  }
</style>
