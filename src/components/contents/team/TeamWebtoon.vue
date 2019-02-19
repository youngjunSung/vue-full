<template>
  <div>
    <div class="section-bar" style="height: 3rem; background-color: black"></div>
    <section class="comica-partners" :class="this.$i18n.locale">
      <div class="comica-tit">
        <p class="tit-area layout"><img :src="require('../../../assets/images/partner/comica_tit.png')" alt=""></p>
      </div>
      <div class="layout">
        <div class="comica-desc">
          <h3>{{ $t('partners.webToon.comicaTitle') }}</h3>
          <p>{{ $t('partners.webToon.comicaTxt') }}</p>
        </div>
        <div class="comica-wrap">
          <p class="hist-tit">HISTORY</p>
          <div class="comica-inner">
            <p class="year-txt">2017</p>
            <div class="comica-txt">
              <p>
                {{ $t('partners.webToon.2017History1') }}
              </p>
              <p>
                {{ $t('partners.webToon.2017History2') }}<br>{{ $t('partners.webToon.2017History3') }}
              </p>
            </div>
          </div>
          <div class="comica-inner">
            <p class="year-txt">2016</p>
            <div class="comica-txt">
              <p>
                {{ $t('partners.webToon.2016History1') }}<br>{{ $t('partners.webToon.2016History2') }}
              </p>
              <p>
                {{ $t('partners.webToon.2016History3') }}
              </p>
            </div>
          </div>
          <div class="comica-inner">
            <p class="year-txt">2015</p>
            <div class="comica-txt">
              <p>
                {{ $t('partners.webToon.2015History1') }}<br>
                {{ $t('partners.webToon.2015History2') }}<br>
                {{ $t('partners.webToon.2015History3') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="section-bar" style="height: 3rem; background-color: black"></div>
  </div>
</template>

<script>
export default {
  name: 'PartnerWebtoon'
}
</script>

<style lang="scss" scoped>
  .comica-partners {
    background: {
      image: url("../../../assets/images/partner/partners_bg_3.png");
      position: center top;
      repeat: no-repeat;
      size: cover;
    };
    .layout {
      @media all and (max-width: 1100px) {
        width: 100%;
      }
    }
    .comica-tit {
      background-color: rgba(255, 255, 255, 0.18);
      margin-bottom: 6rem;
      font-weight: 700;
      .tit-area {
        position: relative;
        padding: 1rem 0;
        text-indent: calc(((100% - 1080px) / 2) + 7rem);
        img {
          padding: .8rem;
          vertical-align: middle;
        }
      }
      @media all and (max-width: 990px) {
        .tit-area {
          padding: 2rem 3rem;
          text-indent: 0;
          img {
            padding: 0;
            width: 40%;
          }
        }
      }
    }
    .comica-desc {
      padding: 14rem 0 13rem;
      text-align: center;
      h3, p {
        color: white;
      }
      h3 {
        font-size: 1.944rem;
        font-weight: 400;
      }
      p {
        font-size: 1.556rem;
        text-transform: uppercase;
      }
      @media all and (max-width: 990px) {
        padding: 8rem 0 5rem;
        h3 {
          font-size: 1.5rem;
        }
        p {
          font-size: 1.2rem;
          padding: 0 1.5rem;
        }
      }
    }
    .comica-wrap {
      position: relative;
      width: 78%;
      margin: 0 auto;
      padding-bottom: 5rem;
      .hist-tit {
        color: white;
        font-size: 1.111rem;
        font-weight: 500;
        margin-bottom: 3.5rem;
      }
      .comica-inner {
        margin-bottom: 5rem;
        .year-txt {
          color: white;
          font-size: 1.778rem;
          padding-left: 5rem;
          background: {
            image: url("../../../assets/images/partner/icon_double_circle_2.png");
            position: 1.15rem center;
            repeat: no-repeat;
            size: auto;
          };
          @media all and (max-width: 600px) {
            background-position: .9rem center;
          }
        }
        .comica-txt {
          p {
            color: white;
            font-size: 1.11rem;
            font-weight: 400;
            margin: 2rem 0 2rem;
            padding-left: 15%;
            @media all and (max-width: 990px) {
              padding-left: 10%;
              margin: 2rem 0 2rem 1rem;
              br {
                display: none;
              }
            }
          }
        }
      }
      &:before {
        display: block;
        content: '';
        width: 3px;
        height: 86%;
        background-color: rgba(255,255,255,0.18);
        position: absolute;
        top: 2.7rem;
        left: 2rem;
      }
      @media all and (max-width: 990px) {
        width: 90%;
      }
    }
  }
</style>
