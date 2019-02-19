<template>
  <section class="sup-partners">
    <div class="sup-inner">
      <div class="business-box" >
        <img :src="require('../../../assets/images/buss_1.png')" alt="">
        <p>
          {{ $t('partners.soft.HOAsoft1') }}<br>
          {{ $t('partners.soft.HOAsoft2') }}<br>
          {{ $t('partners.soft.HOAsoft3') }}<br>
          {{ $t('partners.soft.HOAsoft4') }}<br>
          {{ $t('partners.soft.HOAsoft5') }}
        </p>
      </div>
      <div class="business-box">
        <img :src="require('../../../assets/images/buss_2.png')" alt="">
        <p>
          {{ $t('partners.soft.sunjeSoft1-1') }}<br>
          {{ $t('partners.soft.sunjeSoft1-2') }}
        </p>
        <p>
          {{ $t('partners.soft.sunjeSoft2-1') }}<br>
          {{ $t('partners.soft.sunjeSoft2-2') }}
        </p>
        <p>
          {{ $t('partners.soft.sunjeSoft3-1') }}<br>
          Citi Global Market Sec, BNP Paribas Securities,<br>
          {{ $t('partners.soft.sunjeSoft3-2') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PartnerSoft'
}
</script>

<style lang="scss" scoped>
.sup-partners {
  height: auto;
  background: {
    image: url("../../../assets/images/partner/partners_bg_4.png");
    position: center center;
    repeat: no-repeat;
    size: cover;
  }
  @include clearfix;
  .sup-inner {
    width: 50%;
    height: 100%;
    float: right;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 10rem 0;
    .business-box {
      margin-left: 2.5rem;
      @media all and (max-width: 990px) {
        margin-left: 3.5rem;
      }
      @media all and (max-width: 360px) {
        margin-left: 1rem;
      }
      img {
        margin-bottom: 1rem;
      }
      p {
        margin-bottom: 1rem;
        font-size: .889rem;
        line-height: 1.65em;
        @media all and (max-width: 990px) {
          font-size: 1rem;
        }
      }
      &:nth-of-type(1) {
        margin-bottom: 4rem;
      }
    }
    @media all and (max-width: 990px) {
      width: 100%;
    }
  }
}
</style>
