<template>
  <div id="staff">
    <ul>
      <li v-for="(character, i) in characters" :key="character" @click="displaycharacter(i)" >
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
  import axios from 'axios'

   export default{
    data: function(){
      return {
        characters: [],
        characterpicked: null,
        is_character: false
      }
    },
    mounted() {
      axios.get('https://hp-api.herokuapp.com/api/characters/staff').then(response => this.characters = response['data'])
    },
    methods: {
      displaycharacter: function(i){
        this.characterpicked = this.characters[i];
        this.is_character = true
      }
    }
  }
</script>

<style>
  #staff {
    margin: 80px;
    text-align: center;
    justify-content: center;
    background: #191919;
    color: white;
    padding: 30px;
  }

  #staff>ul {
    columns: 2;
    list-style-type:none;
    -webkit-columns: 2;
    -moz-columns: 2;
  }

  #staff>ul>li {
    margin: 40px;
    font-size: 30px;
  }

  #staff>ul>li:hover {
    color : darkgreen;
  }

  #staff>hr {
    margin: 60px;
  }

  #staff>div>h2 {
    color : darkgreen;
    margin : 40px;
  }

  #staff>div>p {
    margin : 20px;
  }
</style>
