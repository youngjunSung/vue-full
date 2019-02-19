<template>
  <div class="contents">
    <section class="deal-main__wrap">
      <article class="deal-main layout">
        <img :src="require('../../assets/images/deal_main_' + this.$i18n.locale + '.png')" alt="">
      </article>
    </section>
    <div class="paper-label">
      <div class="paper-inner layout">
        <p class="paper-txt">
          <img class="paper-img" :src="require('../../assets/images/condeal/icon_book.png')" alt="">
          <span class="paper-desc">
            <i>DEAL</i>
            WHITEPAPER
          </span>
          <a href="https://s3.ap-northeast-2.amazonaws.com/condeal.net/deal_whitepaper_ko.pdf" target="_blank"  class="each-down">KOREAN<img :src="require('../../assets/images/icon_download.png')" alt=""></a>
          <a href="javascript:void(0)" class="disable each-down">ENGLISH<img :src="require('../../assets/images/icon_download.png')" alt=""></a>
          <a href="javascript:void(0)" class="disable each-down">CHINESE<img :src="require('../../assets/images/icon_download.png')" alt=""></a>
        </p>
      </div>
    </div>
    <section class="deal-sub-1__wrap">
      <article class="deal-sub-1 layout">
        <img :src="require('../../assets/images/deal_sub_1_' + this.$i18n.locale + '.png')" alt="">
      </article>
    </section>
    <section class="deal-sub-2__wrap">
      <article class="deal-sub-2 layout">
        <div class="graph-wrap graph-1">
          <img class="deal-graph__txt" src="../../assets/images/graph_1_txt.png" alt=""/>
          <img class="deal-graph" :src="require('../../assets/images/graph_1_' + this.$i18n.locale + '.png')" alt="">
        </div>
        <div class="deal-sub-2-box-wrap">
        <div class="deal-sub__box" :class="this.$i18n.locale">
          <h5>Issuance</h5>
          <ul class="issuance__box" :class="this.$i18n.locale">
            <li><p>{{ $t('deal.issuance.list1') }}</p><em>Condeal ( Singapore )</em></li>
            <li><p>{{ $t('deal.issuance.list2') }}</p><em>ERC20</em></li>
            <li><p>{{ $t('deal.issuance.list3') }}</p><em>300 million DEAL</em></li>
            <li><p>{{ $t('deal.issuance.list4') }}</p><em>{{ $t('deal.issuance.list4Txt') }}</em></li>
            <li><p>{{ $t('deal.issuance.list5') }}</p><em>PoC (Proof of Copyright) <br/>PoW + PoS</em></li>
          </ul>
        </div>
        <div class="deal-sub__box" :class="this.$i18n.locale">
          <h5 class="team__box-title">{{ $t('deal.team.title') }}</h5>
          <ul class="team__box">
            <li>6 month<em>-10,000,000</em></li>
            <li>12 month<em>-10,000,000</em></li>
            <li>18 month<em>-10,000,000</em></li>
            <li>24 month<em>-10,000,000</em></li>
          </ul>
          <p class="right__txt" :class="this.$i18n.locale">
            {{ $t('deal.team.rightTxt1') }}<br/>
            {{ $t('deal.team.rightTxt2') }}<br/>
            {{ $t('deal.team.rightTxt3') }}<br/>
            {{ $t('deal.team.rightTxt4') }}
          </p>
        </div>
        <br/>
        <p class="deal-feature__description" :class="this.$i18n.locale">
          {{ $t('deal.condeal.feature1') }}<br>
          {{ $t('deal.condeal.feature2') }}
        </p>
        </div>
        <div class="graph-wrap graph-2">
          <img class="deal-graph__txt" src="../../assets/images/graph_2_txt.png" alt=""/>
          <img class="deal-graph" :src="require('../../assets/images/graph_2.png')" alt="">
        </div>
        <div class="deal-sub__box condeal-sub__box">
          <h5>{{ $t('deal.condeal.title') }}</h5>
          <ul class="condeal__box" :class="this.$i18n.locale">
            <li>{{ $t('deal.condeal.list1') }}<em>40,000,000</em></li>
            <li>{{ $t('deal.condeal.list2') }}<em>30,000,000</em></li>
            <li>{{ $t('deal.condeal.list3') }}<em>30,000,000</em></li>
          </ul>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Deal',
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>
  .deal-main__wrap {
    width: 100%;
    background-image: url('../../assets/images/deal_main_bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding-top: 100px;
    text-align: center;
    .deal-main {
      padding: 3.4rem 0 3.2rem 0;
    }
  }
  .deal-sub-1__wrap {
    background-color: #fff;
    padding: 8rem 0 10rem 0;
    text-align: center;
  }
  .deal-sub-2__wrap {
    background-color: #212223;
    padding: 10rem 0 10rem 0;
    @media screen and (max-width: 990px) {
      padding-bottom: 5rem;
    }
    .graph-wrap {
      position: relative;
      width: 100%;
      clear: both;
      text-align: center;
      &.graph-1 {
        .deal-graph__txt {
          top: -50px;
          left: 50px;
          @media screen and (max-width: 990px) {
            left: 0;
            top: -25px;
          }
        }
        .deal-graph {
          margin-left: 35px;
          @media screen and (max-width: 990px) {
            margin-left: 0;
          }
        }
      }
      .deal-graph {
        margin-left: 65px;
        margin-bottom: 3.5rem;
        @media screen and (max-width: 990px) {
          margin-left: 65px;
          margin-bottom: 1.5rem;
        }
        @media screen and (max-width: 600px) {
          margin-left: 0;
        }
      }
      .deal-graph__txt {
        position: absolute;
        top: -50px;
        left: 70px;
        @media screen and (max-width: 990px) {
          left: 0;
          top: -25px;
        }
      }
    }
    .deal-sub-2-box-wrap {
      position: relative;
      display: inline-block;
      width: 100%;
      margin-bottom: 11em;
      @media all and (max-width: 990px) {
        margin-bottom: 3em;
      }
      .deal-feature__description {
        color: $white;
        position: absolute;
        bottom: 40px;
        width: 100%;
        text-align: center;
        font-size: .95rem;
        @media all and (max-width: 990px) {
          position: relative;
          padding: 0 5%;
          font-size: 1rem;
        }
        @media all and (max-width: 600px) {
          br {
            display: none;
          }
        }
        &.en {
          @media all and (max-width: 600px) {
            margin-top: -5rem;
          }
        }
      }
    }
    .deal-sub__box {
      float: left;
      width: 43.5%;
      margin: 0 3.25% 0 3.25%;
      /*background: linear-gradient(180deg, #787878 50%, rgba(120, 120, 120, 0.5) 70%, rgba(120, 120, 120, 0) 90%);*/
      background: {
        image: url("../../assets/images/desc_bg.png");
        position: center top;
        repeat: repeat-x;
        size: auto;
      };
      padding: 1.8rem 40px;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      min-height: 532.5px;
      @media screen and (max-width: 990px) {
        float: none;
        width: 100%;
        margin: 0 auto;
        min-height: 350px;
        background-size: contain;
        padding: 1.8rem 20px;
      }
      &.en {
        @media screen and (max-width: 990px) {
          min-height: 380px;
        }
      }
      ul {
        li, p, em {
          font-weight: 500;
          @media screen and (max-width: 320px) {
            font-size: 0.85rem !important;
          }
        }
      }
      h5 {
        margin-bottom: 2.2rem;
        font-size: 1rem;
        @media screen and (max-width: 990px) {
          font-size: 1.2rem;
        }
        &.team__box-title {
          @media screen and (max-width: 320px) {
            font-size: 1.1rem;
          }
        }
      }
      .issuance__box {
        @include clearfix;
        li {
          width: 100%;
          clear: both;
          p {
            color: #fff;
            font-size: .8rem;
            float: left;
            width: 40%;
            margin-bottom: .55rem;
            @media screen and (max-width: 990px) {
              font-size: 1rem;
            }
          }
          em {
            display: block;
            width: 60%;
            color: #000;
            font-style: normal;
            font-size: .8rem;
            float: left;
            margin-bottom: 10px;
            @media screen and (max-width: 990px) {
              font-size: 1rem;
            }
          }
        }
        &.ko {
          @media screen and (max-width: 990px) {
            em {
              letter-spacing: -0.032em;
            }
          }
        }
        &.en {
          @media screen and (max-width: 990px) {
            em {
              padding-left: 1rem;
              word-break: break-all;
            }
          }
        }
      }
      .team__box {
        float: left;
        width: 55%;
        @include clearfix;
        @media screen and (max-width: 990px) {
          float: none;
          width: 100%;
        }
        li {
          width: 100%;
          clear: both;
          color: #fff;
          font-size: .8rem;
          font-weight: 500;
          position: relative;
          margin-bottom: .55rem;
          @media screen and (max-width: 990px) {
            font-size: 1rem;
          }
          em {
            position: absolute;
            left: 35%;
            display: inline-block;
            color: #000;
            font-style: normal;
            font-size: .8rem;
            font-weight: 500;
            margin-bottom: 10px;
            margin-left: 20px;
            @media screen and (max-width: 990px) {
              font-size: 1rem;
            }
          }
        }
      }
      .right__txt {
        width: 45%;
        float: left;
        font-size: .889rem;
        color: #000;
        line-height: 1.4;
        font-weight: 500;
        margin-top: .3rem;
        @media screen and (max-width: 990px) {
          float: none;
          text-align: left;
          font-size: 1.089rem;
          width: 100%;
          br {
            display: none;
          }
        }
        &.en {
          margin-top: 0;
        }
      }
      &.condeal-sub__box {
        width: 400px;
        min-height: 400px;
        margin: 0 auto;
        float: none;
        padding: 1.8rem 4.5rem;
        background: {
          image: url("../../assets/images/desc_bg_2.png");
          position: center top;
          repeat: repeat-x;
          size: auto;
        };
        @media screen and (max-width: 990px) {
          float: none;
          width: 100%;
          margin: 0 auto;
          padding: 1.8rem 20px;
          min-height: 300px;
          max-height: 250px;
        }
        .condeal__box {
          @include clearfix;
          li {
            width: 100%;
            clear: both;
            color: #fff;
            font-size: .8rem;
            margin-bottom: .55rem;
            position: relative;
            @media screen and (max-width: 990px) {
              font-size: 1rem;
            }
            em {
              display: inline-block;
              color: #000;
              font-style: normal;
              font-size: .8rem;
              margin-bottom: 10px;
              margin-left: 20px;
              float: right;
              @media screen and (max-width: 990px) {
                font-size: 1rem;
                position: absolute;
                left: 35%;
              }
            }
          }
          &.en {
            @media screen and (max-width: 990px) {
              em {
                padding-left: 1rem;
              }
            }
          }
        }
      }
    }
  }
  .paper-label {
    background-color: #373737;
    .paper-inner {
      position: relative;
      padding: 2rem 0 2rem 0;
      text-align: center;
      @media all and (max-width: 990px) {
        width: 100%;
        padding: 1.5rem 0;
        background: none;
        @media all and (max-width: 500px) {
          padding: 1.3rem 0;
        }
      }
      .paper-txt {
        color: white;
        font-size: 1rem;
        font-weight: 400;
        @media all and (max-width: 990px) {
          text-align: center;
        }
        .paper-img {
          vertical-align: middle;
          width: 3rem;
          margin-right: 1rem;
          @media all and (max-width: 990px) {
            display: none;
          }
        }
        .emphasis {
          color: white;
          font-size: 1rem;
          font-weight: 400;
        }
        .paper-desc {
          i {
            color: #b761f3;
            font-style: normal;
            font-size: 1.3rem;
            font-weight: 400;
          }
          text-transform: none;
          color: white;
          font-style: normal;
          font-size: 1.3rem;
          font-weight: 400;
          display: inline-block;
          margin-right: .8rem;
          @media all and (max-width: 990px) {
            display: block;
            margin: 0 auto 1rem;
          }
        }
        .each-down {
          color: #2c2b2b;
          font-weight: 400;
          display: inline-block;
          background-color: #b761f3;
          margin: 0 .3rem;
          padding: .18rem .5rem .18rem 1.2rem;
          border-radius: 1.5rem;
          &.disable {
            cursor: default;
            background-color: #424242;
            color: #2b2b2b;
          }
          @media all and (max-width: 600px) {
            font-size: .8rem;
          }
          img {
            margin-left: 1rem;
            vertical-align: sub;
            @media all and (max-width: 990px) {
              width: 1.3rem;
              @media all and (max-width: 600px) {
                width: 1.1rem;
                margin-left: .5rem;
              }
            }
          }
        }
      }
    }
  }
</style>
