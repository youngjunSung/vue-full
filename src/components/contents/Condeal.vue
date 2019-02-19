<template>
  <div class="contents">
    <section class="main-visual" :class="this.$i18n.locale">
      <video class="intro-video" muted poster="../../assets/images/condeal/condeal_main_poster.png" preload="auto" autoplay="" loop="" autobuffer="autobuffer" v-if="size > 990">
        <source src="../../../static/condeal_main_video_en.mp4" type="video/mp4" >
      </video>
      <div class="main-bottom">
        <div class="bottom-copy">
          <h1 class="main-tit comm-tit">Blockchain CONTENTS Deal System</h1>
          <h3 class="sub-tit comm-tit" :class="this.$i18n.locale">{{ $t('conDeal.mainBottom') }}</h3>
        </div>
        <div class="paper-label">
          <div class="paper-inner layout">
            <p class="paper-txt">
              <img class="paper-img" :src="require('../../assets/images/condeal/icon_book.png')" alt="">
          <span class="paper-desc">
            <i>CONDEAL</i>
            WHITEPAPER
          </span>
              <a href="https://s3.ap-northeast-2.amazonaws.com/condeal.net/condeal_whitepaper_ko.pdf" target="_blank" class="each-down">KOREAN<img :src="require('../../assets/images/icon_download.png')" alt=""></a>
              <a href="javascript:void(0)" class="each-down disable">ENGLISH<img :src="require('../../assets/images/icon_download.png')" alt=""></a>
              <a href="javascript:void(0)" class="each-down disable">CHINESE<img :src="require('../../assets/images/icon_download.png')" alt=""></a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="sub-visual">
      <div class="sub-inner layout cp-area">
        <h3 class="cp-tit">Condeal Project</h3>
        <ul class="cp-list" :class="this.$i18n.locale">
          <li>
            <div class="bg-area comm-area">
            </div>
            <div class="txt-area comm-area">
              <p class="main-txt">MUSIC APP</p>
              <p class="sub-txt">{{ $t('conDeal.projectMusic') }}</p>
            </div>
          </li>
          <li>
            <div class="bg-area comm-area">
            </div>
            <div class="txt-area comm-area">
              <p class="main-txt">WEBTOON APP</p>
              <p class="sub-txt">{{ $t('conDeal.projectWebtoon') }}</p>
            </div>
          </li>
          <li>
            <div class="bg-area comm-area">
            </div>
            <div class="txt-area comm-area">
              <p class="main-txt">VIDEO CLIP</p>
              <p class="sub-txt">{{ $t('conDeal.projectVideo') }}</p>
            </div>
          </li>
          <li>
            <div class="bg-area comm-area">
            </div>
            <div class="txt-area comm-area">
              <p class="main-txt">PICTORIAL COLLECTION</p>
              <p class="sub-txt">{{ $t('conDeal.projectPic') }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="sub-inner layout earth-area">
        <img :src="require('../../assets/images/condeal/earth_img.png')" alt="">
        <h3 class="earth-txt">in condeal, you can become creator, investor, user</h3>
      </div>
    </section>

    <!-- 4 Good reason ... -->
    <section class="condeal-reason">
      <article class="condeal-reason__wrap">
        <h1 class="condeal-reason__title"><b>4 Good</b> benefits to Users with Condeal</h1>
        <ul class="condeal-reason__list">
          <li>
            <img src="../../assets/images/condeal/reason_1.png" alt=""/>
            <h3 class="reasons-title">Killer Contents</h3>
            <p class="reasons-txt">{{ $t('conDeal.reasons.reason1-1') }}<br/>
              {{ $t('conDeal.reasons.reason1-2') }}</p>
          </li>
          <li>
            <img src="../../assets/images/condeal/reason_2.png" alt=""/>
            <h3 class="reasons-title">Improve Distribution Structure</h3>
            <p class="reasons-txt">{{ $t('conDeal.reasons.reason2-1') }}<br/>
              {{ $t('conDeal.reasons.reason2-2') }}</p>
          </li>
          <li>
            <img src="../../assets/images/condeal/reason_3.png" alt=""/>
            <h3 class="reasons-title">Based on Blockchain</h3>
            <p class="reasons-txt">{{ $t('conDeal.reasons.reason3-1') }}<br/>
              {{ $t('conDeal.reasons.reason3-2') }}<br/>
              {{ $t('conDeal.reasons.reason3-3') }}</p>
          </li>
          <li>
            <img src="../../assets/images/condeal/reason_4.png" alt=""/>
            <h3 class="reasons-title">Value Investment</h3>
            <p class="reasons-txt">{{ $t('conDeal.reasons.reason4-1') }}<br/>
              {{ $t('conDeal.reasons.reason4-2') }}</p>
          </li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Condeal',
  data () {
    return {
      'wpshow': false,
      'size': window.innerWidth
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.size = window.innerWidth
      })
    })
  },
  methods: {
    dropdown: function () {
      this.wpshow = !this.wpshow
    }
  }
}
</script>

<style lang="scss" scoped>
  .intro-video {
    width: 100%;
    margin-top: -32px;
    @media screen and (max-width: 1200px) {
      margin-top: 8px;
    }
  }
  .main-visual {
    position: relative;
    padding-bottom: 120px;
    @media screen and (min-width: 1900px) {
      min-height: 1152px;
    }
    @media screen and (max-width: 1500px) {
      padding-bottom: 150px;
    }
    @media screen and (max-width: 1200px) {
      padding-bottom: 170px;
    }
    @media screen and (max-width: 990px) {
      height: 100vh;
      background: {
        image: url("../../assets/images/condeal/main-visual-tit.png"), url("../../assets/images/condeal/main-visual-mo.png");
        position: center 20%, center bottom;
        repeat: no-repeat;
        size: 40rem, cover;
      };
    }
    .main-bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
    .bottom-copy {
      background-color: rgba(0, 0, 0, 1);
      padding: 2rem 0;
      .comm-tit {
        text-align: center;
        font-weight: 300;
        letter-spacing: normal;
      }
      .main-tit {
        line-height: 2rem;
        font-size: 2rem;
        font-weight: 400;
        color: #fff;
        text-transform: uppercase;
      }
      .sub-tit {
        color: $green;
        font-size: 1.2rem;
        font-weight: 400;
      }
      @media screen and (max-width: 990px) {
        background-color: rgba(0, 0, 0, 0.8);
        padding: 2rem 0;
        .main-tit {
          font-size: 1.5rem;
        }
        .sub-tit {
          font-size: 1rem;
        }
        @media screen and (max-width: 450px) {
          .main-tit {
            font-size: 1.35rem;
            margin-bottom: 0;
          }
          .sub-tit {
            font-size: 1rem;
            font-weight: 500;
          }
          @media screen and (max-width: 410px) {
            .main-tit {
              font-size: 1.2rem;
              margin-bottom: 0;
            }
            .sub-tit {
              font-size: .9rem;
              font-weight: 500;
              &.en {
                @media screen and (max-width: 370px) {
                  font-size: .8rem;
                }
              }
            }
          }
        }
      }
    }
    .paper-label {
      background-color: #202020;
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
              color: #09a7b4;
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
            background-color: $green;
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
  }
  .sub-visual {
    background: {
      image: url("../../assets/images/condeal/sub-visual.png");
      position: center calc(100% + 1rem);
      repeat: repeat-x;
      size: auto;
    };
    @media all and (min-width: 1930px) {
      background-size: 100%;
      background-position: center 33rem;
    }
    .sub-inner {
      .cp-tit {
        font-size: 3rem;
        font-weight: 700;
        padding: 1.5rem 1rem;
        margin: 4.5rem 0;
        background: {
          image: url("../../assets/images/common/icon_symbol.png");
          position: 1rem 0;
          repeat: no-repeat;
          size: auto;
        };
        @media screen and (max-width: 990px) {
          font-size: 2rem;
          margin: 3rem 0;
        }
      }
      .cp-list {
        @media screen and (max-width: 990px) {
          width: 95%;
          margin: 0 auto;
        }
        &.en {
          li {
            @media screen and (max-width: 440px) {
              height: 30rem;
            }
            @media screen and (max-width: 340px) {
              height: 31rem;
            }
          }
        }
        &.zh {
          li {
            @media screen and (max-width: 400px) {
              height: 27rem;
            }
          }
        }
        li {
          float: left;
          width: calc((100% - 6.6rem) / 4);
          margin-right: 2.2rem;
          height: 27rem;
          box-shadow: 0 0 30px 12px rgba(0, 0, 0, 0.12);
          border-radius: .6rem;
          &:last-child {
            margin-right: 0;
          }
          @media screen and (max-width: 990px) {
            width: 48.75%;
            margin-right: 2.5%;
            margin-bottom: 2rem;
            &:nth-of-type(2n) {
              margin-right: 0;
            }
          }
          @media screen and (max-width: 400px) {
            height: 28.5rem;
          }
          @for $i from 1 through 4 {
            &:nth-of-type(#{$i}) {
              background: {
                image: url("../../assets/images/condeal/cp_label_#{$i}.png");
                position: calc(100% - 1rem) 11.5rem;
                repeat: no-repeat;
                size: auto;
              };
              .bg-area {
                border-top-left-radius: .6rem;
                border-top-right-radius: .6rem;
                background: {
                  image: url("../../assets/images/condeal/cp_#{$i}.png");
                  position: center bottom;
                  repeat: no-repeat;
                  size: cover;
                };
              }
              @media screen and (max-width: 990px) {
                background-size: 4rem;
              }
            }
          }
          .comm-area {
            position: relative;
            z-index: -1;
            height: 50%;
            @media screen and (max-width: 400px) {
              height: 45.5%;
            }
          }
          .bg-area {
          }
          .txt-area {
            background-color: white;
            padding: 2.5rem 1.3rem;
            border-bottom-left-radius: .6rem;
            border-bottom-right-radius: .6rem;
            @media screen and (max-width: 400px) {
              height: 55%;
            }
            .main-txt {
              font-size: 1rem;
              font-weight: 700;
              margin-bottom: .8rem;
              line-height: 1.2em;
            }
            .sub-txt {
              font-size: .8rem;
              font-weight: 500;
            }
            @media screen and (max-width: 990px) {
              .main-txt {
                font-size: 1.1rem;
              }
              .sub-txt {
                font-size: .95rem;
              }
            }
          }
        }
        &:after {
          display: block;
          content: '';
          clear: both;
        }
      }
      &.cp-area {
        position: relative;
        z-index: 1;
        @media screen and (max-width: 990px) {
          width: 100%;
        }
      }
      &.earth-area {
        padding: 9rem 1.5rem;
        text-align: center;
        .earth-txt {
          color: white;
          font-size: 1.5rem;
          font-weight: 500;
          text-transform: uppercase;
          margin-top: 3rem;
          letter-spacing: normal;
        }
      }
    }
  }
  .condeal-reason {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    padding: 13.8rem 0;
    text-align: center;
    @media all and (max-width: 700px) {
      padding: 9rem 0;
    }
    .condeal-reason__wrap {
      display: inline-block;
      .condeal-reason__title {
        font-size: 2.6rem;
        font-weight: 600;
        color: #000;
        margin-bottom: 7rem;
        letter-spacing: -0.04em;
        b {
          font-size: inherit;
          font-weight: inherit;
          color: #174b9a;
        }
        @media all and (max-width: 700px) {
          font-size: 1.85rem;
          margin-bottom: 3.5rem;
          width: 250px;
          margin-left: auto;
          margin-right: auto;
        }
      }
      .condeal-reason__list {
        li {
          text-align: left;
          margin-bottom: 2.75rem;
          margin-left: 2.3rem;
          @include clearfix;
          &:last-of-type {
            margin-bottom: 0;
          }
          img {
            float: left;
            margin-right: 3.1rem;
          }
          .reasons-title {
            font-size: 1.8rem;
            color: #000;
            font-weight: 500;
            margin-bottom: 0.75rem;
            letter-spacing: -0.02em;
            padding-top: 3.25rem;
            line-height: 1.25em;
          }
          .reasons-txt {
            font-size: 0.95rem;
            font-weight: 400;
            color: #646464;
            line-height: 1.4;
            letter-spacing: -0.02em;
          }
        }
        @media all and (max-width: 700px) {
          li {
            text-align: center;
            margin-bottom: 4rem;
            margin-left: 0;
            img {
              width: 120px;
              float: none;
              margin-right: 0;
              margin-left: 10px;
            }
            .reasons-title {
              padding-top: 0;
              font-size: 1.5rem;
            }
            .reasons-txt {
              width: 90%;
              margin: 0 auto;
              br {
                display: none;
              }
            }
          }
        }
      }
    }
  }
</style>
