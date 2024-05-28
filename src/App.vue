<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  height: 100%;
}
@media screen and (min-width: 768px) {
  #app {
    width: 384px;
    margin: 0 auto;
  }
}
</style>
