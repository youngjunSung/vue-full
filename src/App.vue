<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Main from './components/body/Main'

export default {
  name: 'app',
  components: {
      Header,
      Footer,
      Main
  }
}
</script>

<style lang="scss">

</style>
