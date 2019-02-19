<template>
  <div>
    <section class="partners-kmf">
      <h3 class="section-tit layout">
        <img :src="require('../../../assets/images/common/icon_symbol.png')" alt="">
        <p>Partner</p>
      </h3>
      <div class="kmf-bar">
        <div class="kmf-bar__wrap">
          <img src="../../../assets/images/partner/kmf_logo.png" alt=""/>
        </div>
      </div>
      <article class="partner-kmf layout">
        <h3>{{ $t('partners.kmf.mainTxtPartner') }}</h3>
        <ul class="partner__list">
          <li><img src="../../../assets/images/partner/partner_1.png" alt=""/></li>
          <li><img src="../../../assets/images/partner/partner_none.png" alt=""/></li>
          <li><img src="../../../assets/images/partner/partner_2.png" alt=""/></li>
          <li><img src="../../../assets/images/partner/partner_none.png" alt=""/></li>
          <li><img src="../../../assets/images/partner/partner_3.png" alt=""/></li>
          <li><img src="../../../assets/images/partner/partner_4.png" alt=""/></li>
          <li><img src="../../../assets/images/partner/partner_5.png" alt=""/></li>
          <li><img src="../../../assets/images/partner/partner_none.png" alt=""/></li>
          <li><img src="../../../assets/images/partner/partner_6.png" alt=""/></li>
          <li><img src="../../../assets/images/partner/partner_7.png" alt=""/></li>
          <li><img src="../../../assets/images/partner/partner_8.png" alt=""/></li>
          <li><img src="../../../assets/images/partner/partner_none.png" alt=""/></li>
          <li><img src="../../../assets/images/partner/partner_9.png" alt=""/></li>
          <li><img src="../../../assets/images/partner/partner_none.png" alt=""/></li>
        </ul>
        <p class="partner-kmf__title">{{ $t('partners.kmf.mainTxt') }}<br>{{ $t('partners.kmf.mainTxt2') }}</p>
        <p>{{ $t('partners.kmf.subTxt1') }}<br/>
          {{ $t('partners.kmf.subTxt2') }}<br/>
          {{ $t('partners.kmf.subTxt3') }}<br/>
          {{ $t('partners.kmf.subTxt4') }}</p>
      </article>
    </section>
    <div class="section-bar" style="height: 3rem; background-color: black"></div>
  </div>
</template>

<script>
export default {
  name: 'PartnerKmf'
}
</script>

<style lang="scss" scoped>
  .partners-kmf {
    width: 100%;
    background-image: url('../../../assets/images/partner/partner_kmf_bg.jpg');
    background-size: cover;
    background-position: center 1px;
    background-repeat: no-repeat;
    padding-top: 100px;
    .section-tit {
      padding: 4.5rem 1rem 2rem;
      text-indent: 1.2rem;
      @media all and (max-width: 450px) {
        padding: 2rem 1rem 1rem;
        text-indent: 0;
        img {
          width: 1.5rem;
        }
      }
      p {
        color: white;
        font-size: 2.778rem;
        font-weight: 700;
        line-height: 3rem;
        @media all and (max-width: 380px) {
          font-size: 2.2rem;
        }
      }
    }
    .partner-kmf {
      padding-bottom: 6.1rem;
      .partner__list {
        padding: 0 10px 0 20px;
        width: 100%;
        margin-top: 1.5rem;
        @include clearfix;
        li {
          width: calc((100% / 7) - 10px);
          margin-right: 10px;
          margin-bottom: 10px;
          float: left;
          img {
            vertical-align: middle;
          }
          &:nth-of-type(7n) {
            margin-right: 0;
          }
        }
        @media all and (max-width: 990px) {
          padding: 0 .3em 0 1em;
          li {
            width: calc((100% / 4) - 10px);
            &:nth-of-type(7n) {
              margin-right: 10px;
            }
            &:nth-of-type(4n) {
              margin-right: 0;
            }
            &:nth-of-type(8),
            &:nth-of-type(12) {
              display: none;
            }
            img {
              width: 100%;
            }
          }
        }
      }
      h3 {
        color: #fff;
        font-size: 1.444rem;
        padding-left: 35px;
        margin-top: 35px;
        font-weight: 400;
        line-height: 1.5em;
        @media all and (max-width: 600px) {
          letter-spacing: -0.075em;
          margin-top: 15px;
        }
      }
      p {
        color: #fff;
        font-size: 1rem;
        padding-left: 35px;
        line-height: 1.5em;
        margin-top: 1.8rem;
        @media all and (max-width: 600px) {
          br {
            display: none;
          }
        }
      }
      @media all and (max-width: 990px) {
        h3 {
          padding-left: 1rem;
          font-size: 1.1rem;
        }
        p {
          padding-left: 1.1rem;
          margin-top: 1.8rem;
        }
      }
    }
    .kmf-bar__wrap {
      padding-left: 48px;
      width: 1080px;
      margin-left: auto;
      margin-right: auto;
      img {
        vertical-align: middle;
      }
      @media all and (max-width: 1150px) {
        width: 100%;
      }
    }
    .kmf-bar {
      background-color: rgba(0, 0, 0, 0.25);
      padding: 3rem 48px;
    }
    @media all and (max-width: 990px) {
      padding-top: 80px;
      .partner-kmf-top {
        padding-top: 1rem;
        margin-bottom: 1rem;
        padding-left: 1rem;
        width: 90%;
      }
      .kmf-bar {
        padding: 1.5rem 4rem;
        @media all and (max-width: 450px) {
          padding: 1.5rem 3rem;
        }
        .kmf-bar__wrap {
          padding-left: 0;
          width: 65%;
          margin: 0;
        }
      }
    }
  }
</style>
