<template>
  <div id="app">
    <div>      
      <header>
          <router-link class="title" to="/">Hebrew Calendar</router-link>
          <router-link to="/settings">Settings</router-link>
      </header>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
  body {
    font-family: 'Montserrat', sans-serif;
  }

  header {
    width: 100%;
    background-color: black;
    padding: .75rem;
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-size: 1.4rem;
  }

  header a {
    color: #f5f5f5;
    text-decoration: none;
  }

  header a:hover {
    text-decoration: underline;
  }
</style>
