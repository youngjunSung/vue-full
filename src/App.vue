<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
	import Header from './components/layout/Header'
	import Footer from './components/layout/Footer'

	export default {
		name: 'App',
		components: {
			Header,
			Footer
		}
	}
</script>

<style lang="scss">

</style>