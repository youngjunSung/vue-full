<template>
  <section class="partners-kstar">
    <div class="kstar-tit">
      <img class="kstar-logo" src="../../../assets/images/partner/kstar_logo.png" alt=""/>
      <img class="kstar-slo" src="../../../assets/images/partner/kstar_slo.png" alt=""/>
    </div>
    <ul class="kstar-list">
      <li>
        <p class="logo-area"><img class="partner-title" src="../../../assets/images/partner/kstar_pay.png" alt=""/></p>
        <div class="desc-area">
          <p>{{ $t('partners.company.pay1') }}</p>
          <p>{{ $t('partners.company.pay2') }}</p>
          <p>{{ $t('partners.company.pay3') }}</p>
          <p>{{ $t('partners.company.pay4') }}</p>
        </div>
      </li>
      <li>
        <p class="logo-area"><img class="partner-title" src="../../../assets/images/partner/kstar_music.png" alt=""/></p>
        <div class="desc-area">
          <p>{{ $t('partners.company.music1') }}</p>
          <p>{{ $t('partners.company.music2') }}</p>
          <p>{{ $t('partners.company.music3') }}</p>
          <p>{{ $t('partners.company.music4') }}</p>
        </div>
      </li>
      <li>
        <p class="logo-area"><img class="partner-title" src="../../../assets/images/partner/kstar_ent.png" alt=""/></p>
        <div class="desc-area">
          <p>{{ $t('partners.company.ent1') }}</p>
          <p>{{ $t('partners.company.ent2') }}</p>
          <p>{{ $t('partners.company.ent3') }}</p>
          <p>{{ $t('partners.company.ent4') }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'PartnerCompany'
}
</script>

<style lang="scss" scoped>
  .partners-kstar {
    padding: 10rem 0;
    background: {
      image: url("../../../assets/images/partner/kstar_bg.png");
      position: center top;
      repeat: no-repeat;
      size: cover;
    };
    .kstar-tit {
      text-align: center;
      margin-bottom: 5rem;
      @media all and (max-width: 500px) {
        margin-bottom: 3rem;
      }
      .kstar-logo{
        display: block;
        margin: 0 auto 3rem;
        @media all and (max-width: 500px) {
          width: 33.33%;
          margin: 0 auto 1rem;
        }
      }
      .kstar-slo {
        @media all and (max-width: 500px) {
          width: 55%;
        }
      }
    }
    .kstar-list {
      width: 840px;
      margin: 0 auto;
      @media all and (max-width: 990px) {
        width: 90%;
      }
      li {
        margin-bottom: 2rem;
        .logo-area {
          background-color: white;
          padding: 3.5rem 2rem 1rem;
          border-top-left-radius: 7px;
          border-top-right-radius: 7px;
        }
        .desc-area {
          border-bottom-left-radius: 7px;
          border-bottom-right-radius: 7px;
          background: {
            image: url("../../../assets/images/partner/kstar_txt_bg.png");
            position: calc(100% + 2rem) center;
            repeat: no-repeat;
            size: auto;
            color: #f2f2f2;
          };
          padding: 2rem 2rem 3.5rem;
          @media all and (max-width: 600px) {
            background: {
              position: calc(100% + 2rem) bottom;
              size: 70%;
            };
          }
          p {
            font-size: 1rem;
            font-weight: 400;
            &:nth-of-type(n+2) {
              margin-top: 2rem;
            }
          }
        }
      }
    }
  }
</style>
