
<template>
<div id="app">

  <div class="header">
  <div nav-bar="navbar">
  <b-navbar>
    <b-navbar-nav>
      <b-nav-item href="/">Home</b-nav-item>
      <b-nav-item href="/review">Submit a Review</b-nav-item>
      <b-nav-item><router-link to="/Edit">Edit</router-link></b-nav-item>
    </b-navbar-nav>
  </b-navbar>
  </div>



    <div class="title">
      <h1>Barbershop Review</h1>
    </div>


  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer">
    <router-link to="/review">Submit a review</router-link>   <router-link to="/edit">Edit a review</router-link>
  </div>
</div>
</template>

<style>
html {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}

a{
  color: rgba(0, 0, 0, 0.55) !important;
  text-decoration: auto !important;
}
/* Header */
.header {
  display: flex;
  padding: 10px 100px 0px 100px;
  background-color: coral;
  color: #1C454F;
  justify-content: space-between;
}

.title {
  margin-top: 5px;
}

.title h1 {
  font-size: 30px;
  font-style: italic;

}

.content {
  padding: 20px 100px;
  min-height: 100vh;
}

/* Footer */
.footer {
  height: 50px;
  background: #e3e3e3;
  font-size: 15px;
}

.footer a {
  color: #000;
  display: inline-block;
  padding: 10px;
}


h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
</style>
