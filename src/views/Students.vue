<template>
  <div id="students">
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
      axios.get('https://hp-api.herokuapp.com/api/characters/students').then(response => this.characters = response['data'])
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
  #students {
    margin: 80px;
    text-align: center;
    justify-content: center;
    background: #191919;
    color: white;
    padding: 30px;
  }

  #students>ul {
    columns: 2;
    list-style-type:none;
    -webkit-columns: 2;
    -moz-columns: 2;
  }

  #students>ul>li {
    margin: 40px;
    font-size: 30px;
  }

  #students>ul>li:hover {
    color : darkgreen;
  }

  #students>hr {
    margin: 60px;
  }

  #students>div>h2 {
    color : darkgreen;
    margin : 40px;
  }

  #students>div>p {
    margin : 20px;
  }
</style>
