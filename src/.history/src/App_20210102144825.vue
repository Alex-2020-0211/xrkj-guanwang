<template>
  <div id="app" v-cloak>
    <router-view />
  </div>
</template>

<style lang="scss">
[v-cloak] {
  display: none !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
