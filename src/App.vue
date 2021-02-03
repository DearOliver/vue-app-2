<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> -|-
      <router-link to="/students">Students</router-link> -|-
      <router-link to="/staff">Staff</router-link> -|-
      <router-link to="/houses">Houses</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

@import url(https://fonts.googleapis.com/css?family=Homemade+Apple);

#app {
  font:25px/1.3 'Homemade Apple', sans-serif;
  color: #191919;
  margin: 80px;
  text-align:center;
  background-image: url('https://i.pinimg.com/originals/24/01/ab/2401ab3e767a38150ff7871a6a0f9b32.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

#nav {
  padding: 60px;
}

#nav a {
  font-size: 40px;
  font-weight: bold;
  color: #191919;
}

#nav a.router-link-exact-active {
  color: darkgreen;
}

</style>
