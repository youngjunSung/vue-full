<template>
  <div>
    <section class="iconic-partners">
      <h3 class="section-tit layout">
        <img :src="require('../../../assets/images/common/icon_symbol.png')" alt="">
        <p>Team</p>
      </h3>
      <div class="iconic-tit">
        <p class="tit-area layout"><img :src="require('../../../assets/images/partner/iconic_tit.png')" alt=""></p>
      </div>
      <div class="layout">
        <div class="award-warp" >
          <ul class="award-list" :class="this.$i18n.locale">
            <li>
              <img :src="require('../../../assets/images/team/team_list_1.png')" alt="">
              <h3>{{ $t('partners.music.kts') }}</h3>
              <p>{{ $t('partners.music.ktsDesc') }}</p>
            </li>
            <li>
              <img :src="require('../../../assets/images/team/team_list_2.png')" alt="">
              <h3>Command Freaks</h3>
              <p>{{ $t('partners.music.freaksDesc') }}</p>
            </li>
            <li>
              <img :src="require('../../../assets/images/team/team_list_3.png')" alt="">
              <h3>Secret Weapon</h3>
              <p>{{ $t('partners.music.weaponDesc') }}</p>
            </li>
            <li>
              <img :src="require('../../../assets/images/team/team_list_4.png')" alt="">
              <h3>Stereo Typpes</h3>
              <p>{{ $t('partners.music.stereoDesc') }}</p>
            </li>
            <li>
              <img :src="require('../../../assets/images/team/team_list_5.png')" alt="">
              <h3>Rodnet Jerkins</h3>
              <p>{{ $t('partners.music.JerkinsDesc') }}</p>
            </li>
            <li>
              <img :src="require('../../../assets/images/team/team_list_6.png')" alt="">
              <h3>Under Dogs</h3>
              <p>{{ $t('partners.music.dogsDesc') }}</p>
            </li>
          </ul>
        </div>
        <div class="disco-wrap">
          <p class="disco-tit">DISCOGRAPHY</p>
          <div class="disco-inner" :class="this.$i18n.locale">
            <p class="year-txt">2016</p>
            <ul class="disco-list">
              <li>
                <span>{{ $t('partners.music.SHINee') }}</span>
                <span>1 of 1 – The 5th Album</span>
              </li>
              <li>
                <span>{{ $t('partners.music.EXO') }}</span>
                <span>LOTTO – The 3rd Album Repackage EX'ACT</span>
              </li>
              <li>
                <span>{{ $t('partners.music.girlsGeneration') }}</span>
                <span>Sailing 0805</span>
              </li>
              <li>
                <span>{{ $t('partners.music.taeYeon') }}</span>
                <span>Why – The 2nd Mini Album</span>
              </li>
              <li>
                <span>{{ $t('partners.music.redVelvet') }}</span>
                <span>The Velvet</span>
              </li>
              <li>
                <span>{{ $t('partners.music.GOT7') }}</span>
                <span>Flight Log: Departure</span>
              </li>
            </ul>
          </div>
          <div class="disco-inner" :class="this.$i18n.locale">
            <p class="year-txt">2015</p>
            <ul class="disco-list">
              <li>
                <span>BOA</span>
                <span>1 of 1 – The 5th Album</span>
              </li>
              <li>
                <span>{{ $t('partners.music.EXO') }}</span>
                <span>Exodus</span>
              </li>
              <li>
                <span>{{ $t('partners.music.redVelvet') }}</span>
                <span>IceCream Cake</span>
              </li>
              <li>
                <span>{{ $t('partners.music.superJunior') }}</span>
                <span>Present</span>
              </li>
              <li>
                <span>Miss A</span>
                <span>Colors</span>
              </li>
              <li>
                <span>{{ $t('partners.music.sistar') }}</span>
                <span>Shake it</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PartnerMusic'
}
</script>

<style lang="scss" scoped>
  .iconic-partners {
    margin-top: 5rem;
    background: {
      image: url("../../../assets/images/partner/partners_bg_2.png");
      position: center top;
      repeat: no-repeat;
      size: cover;
    };
    .section-tit {
      padding: 4.5rem 1rem 0;
      text-indent: 2.2rem;
      @media all and (max-width: 450px) {
        padding: 3rem 1rem 0;
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
    .iconic-tit {
      background-color: rgba(255, 255, 255, 0.18);
      position: relative;
      top: 2rem;
      margin-bottom: 6rem;
      .tit-area {
        position: relative;
        padding: 1rem 0 1rem 2.7rem;
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
            width: 10rem;
          }
          @media all and (max-width: 450px) {
            padding: 2rem 1rem;
            img {
              width: 8rem;
            }
          }
        }
      }
    }
    .award-warp {
      margin-top: 2rem;
      margin-bottom: 6rem;
      .award-list {
        width: 89%;
        margin: 0 auto;
        li {
          float: left;
          width: 33.33%;
          text-align: center;
          margin-bottom: 3.85rem;
          min-height: 18rem;
          h3, p {
            color: white;
          }
          h3 {
            margin-top: .5rem;
            font-size: 1.1rem;
          }
          p {
            font-size: .89rem;
            line-height: 1.2em;
            width: 80%;
            margin: .5rem auto 0;
            word-break: keep-all;
          }
        }
        &:after {
          display: block;
          content: '';
          clear: both;
        }
        &.zh {
          p {
            word-break: break-all;
          }
        }
      }
      .award-txt {
        width: 68%;
        margin: 3rem auto 0;
        padding: 3rem;
        background-color: rgba(255,255,255,0.12);
        h3, p {
          color: white;
          text-align: center;
        }
        h3 {
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }
        p {
          font-size: .9rem;
          line-height: 1.3em;
          width: 80%;
          margin: 0 auto;
        }
      }
      @media all and (max-width: 990px) {
        .award-list {
          width: 100%;
          li {
            width: 48%;
            &:nth-of-type(2n-1) {
              margin-right: 4%;
            }
            img {
              @media all and (max-width: 450px) {
                width: 70%;
              }
            }
            h3 {
              font-size: 1.3rem;
            }
            p {
              font-size: 1rem;
              line-height: 1.2em;
              @media all and (max-width: 340px) {
                width: 85%;
              }
            }
          }
        }
        .award-txt {
          width: 100%;
          padding: 2rem;
          h3 {
            font-size: 1.2rem;
          }
          p {
            width: 100%;
            font-size: 1rem;
          }
        }
      }
    }
    .disco-wrap {
      position: relative;
      width: 68%;
      margin: 0 auto;
      padding-bottom: 7rem;
      .disco-tit {
        font-size: 1.11rem;
        color: white;
        margin-bottom: 2.5rem;
        font-weight: 700;
      }
      .disco-inner {
        position: relative;
        margin-bottom: 6rem;
        .year-txt {
          color: white;
          font-size: 1.77rem;
          padding-left: 5rem;
          background: {
            image: url("../../../assets/images/partner/icon_double_circle.png");
            position: 1.15rem center;
            repeat: no-repeat;
            size: auto;
          };
          @media all and (max-width: 600px) {
            background-position: .9rem center;
          }
        }
        &.en {
          .disco-list {
            li {
              span {
                padding-left: 16%;
                @media screen and (max-width: 400px) {
                  &:nth-of-type(1) {
                    width: 60%;
                  }
                  &:nth-of-type(2) {
                    width: 40%;
                  }
                }
                @media screen and (max-width: 340px) {
                  &:nth-of-type(1) {
                    width: 65%;
                  }
                  &:nth-of-type(2) {
                    width: 35%;
                  }
                }
              }
            }
          }
        }
        .disco-list {
          li {
            margin: 2rem 0;
            @media screen and (max-width: 600px) {
              margin: 1rem 0;
            }
            span {
              display: block;
              float: left;
              color: white;
              padding-left: 19%;
              font-size: 1.1rem;
              &:nth-of-type(1) {
                width: 40%;
                font-weight: 500;
                font-size: 1.11rem;
              }
              &:nth-of-type(2) {
                width: 60%;
                font-weight: 400;
                font-size: 1rem;
                @media all and (max-width: 990px) {
                  padding-left: 5%;
                }
              }
              @media all and (max-width: 600px) {
                &:nth-of-type(1) {
                  width: 55%;
                }
                &:nth-of-type(2) {
                  width: 45%;
                }
              }
            }
            &:after {
              display: block;
              content: '';
              clear: both;
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
        top: 2.5rem;
        left: 2rem;
      }
      @media all and (max-width: 990px) {
        width: 90%;
      }
    }
  }
</style>
