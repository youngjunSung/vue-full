<template>
  <div class="contents">
    <section class="structure-main__wrap">
      <article class="structure-main layout mo-pdd">
        <img class="structure-main__img" src="../../assets/images/structure/structure_main.png" alt=""/>
        <ul class="structure-intro">
          <li>
            <img src="../../assets/images/structure/structure_1.png" alt=""/>
            <h5>{{ $t('structure.intro1') }}</h5>
            <p>DEAL</p>
          </li>
          <li>
            <img src="../../assets/images/structure/structure_2.png" alt=""/>
            <h5>{{ $t('structure.intro2') }}</h5>
            <p>Digital Contents</p>
          </li>
          <li>
            <img src="../../assets/images/structure/structure_3.png" alt=""/>
            <h5>{{ $t('structure.intro3') }}</h5>
            <p>Profit Share</p>
          </li>
        </ul>
        <img :src="require('../../assets/images/structure/structure_role_' + this.$i18n.locale + '.png')" alt="">
      </article>
    </section>

    <section class="structure-platform__wrap structure-sub">
      <article class="structure-platform layout mo-pdd">
        <img class="title-bar" src="../../assets/images/common/title_line.png" alt=""/>
        <h3>{{ $t('structure.subTitle1') }}</h3>
        <div class="structure-sub__img-wrap">
          <img class="structure-sub__img" :src="require('../../assets/images/structure/structure_platform_' + this.$i18n.locale + '.png')" alt="">
        </div>
      </article>
    </section>

    <section class="structure-exchange__wrap structure-sub">
      <article class="structure-exchange layout mo-pdd">
        <img class="title-bar" src="../../assets/images/common/title_line.png" alt=""/>
        <h3>{{ $t('structure.subTitle2') }}</h3>
        <div class="structure-sub__img-wrap platform">
          <img class="structure-sub__img" :src="require('../../assets/images/structure/structure_path_' + this.$i18n.locale + '.png')" alt="">
        </div>
      </article>
    </section>

    <section class="structure-bottom__wrap">
      <article class=" structure-bottom layout mo-pdd">
        <img :src="require('../../assets/images/structure/structure_bottom.png')" alt="">
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Structure',
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>
  .structure-main__wrap {
    width: 100%;
    background-image: url('../../assets/images/structure/structure_bg_1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 0;
    padding-top: 100px;
    padding-bottom: 12rem;
    text-align: center;
    @media screen and (max-width: 1080px) {
      padding-top: 0;
      padding-bottom: 6rem;
    }

    .structure-main {
      .structure-main__img {
        margin:115px 0 3.3rem 0;
        @media screen and (max-width: 1080px) {
          margin-bottom: 1.65rem;
        }
      }
      .structure-intro {
        width: 805px;
        margin: 0 auto;
        margin-bottom: 8.5rem;
        @include clearfix;
        @media screen and (max-width: 870px) {
          width: 100%;
          margin-bottom: 5rem;
        }
        li {
          width: 33.333%;
          width: calc(100% / 3);
          float: left;
          h5 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            @media screen and (max-width: 600px) {
              font-size: 1rem;
            }
            @media screen and (max-width: 320px) {
              font-size: 0.95rem;
            }
          }
          p {
            color: #7b7d7e;
            font-size: 1.12rem;
            @media screen and (max-width: 600px) {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
  .structure-sub {
    padding: 3.6rem 0 8.3rem 0;
    height: 860px;
    position: relative;
    @media screen and (max-width: 1080px) {
      height: auto;
      padding: 2.5rem 0 4rem 0;
    }
    .title-bar {
      margin-bottom: 13px;
    }
    .structure-sub__img-wrap {
      &.platform {
        position: absolute;
        top: 50%;
        margin-top: -82.5px;
        left: 50%;
        margin-left: -455.5px;
        @media screen and (max-width: 1080px) {
          position: static;
          margin-top: 0;
          margin-left: 0;
        }
      }
    }
    .structure-sub__img {
      margin: 0 auto;
      display: block;
    }
    h3 {
      margin-bottom: 5.25rem;
      font-size: 1.4rem;
      letter-spacing: normal;
      @media screen and (max-width: 1080px) {
        margin-bottom: 2.7rem;
      }
      @media screen and (max-width: 600px) {
        font-size: 1.3rem;
      }
    }
  }
  .structure-exchange__wrap {
    background-image: url('../../assets/images/structure/structure_bg_2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .structure-bottom__wrap {
    padding: 8.8rem 0 11rem 0;
    text-align: center;
    @media screen and (max-width: 1080px) {
      padding: 4.4rem 0 5.5rem 0;
    }
  }
</style>
