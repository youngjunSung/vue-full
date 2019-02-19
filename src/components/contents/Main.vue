<template>
  <div class="hello">
    {{ $t('message.title') }},,,,,
    locale: {{this.$i18n.locale}},,
    <img :src="require('../../assets/images/main_phone_' + this.$i18n.locale + '.png')" alt="">
  </div>
</template>

<script>
export default {
  name: 'Main',
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
