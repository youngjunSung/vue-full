<template>
  <div class="contents">
    <PartnerKmf></PartnerKmf>
    <PartnerCompany></PartnerCompany>
  </div>
</template>

<script>
import PartnerKmf from './partner/PartnerKmf'
import PartnerCompany from './partner/PartnerCompany'

export default {
  name: 'partners',
  components: {
    PartnerKmf,
    PartnerCompany
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style  scoped>

</style>
