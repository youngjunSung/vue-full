<template>
  <div class="contents">
    <section class="scenario-main__wrap">
      <article class="scenario-main layout">
        <img class="title-bar" src="../../assets/images/common/title_line.png" alt=""/>
        <h3>{{ $t('scenario.title1') }}</h3>
        <img class="scenario__img" :src="require('../../assets/images/scenario_1_' + this.$i18n.locale + '.png')" alt=""/>
        <p class="scenario__txt" :class="this.$i18n.locale">
          {{ $t('scenario.txt1') }}
        </p>
      </article>
    </section>
    <section class="scenario-sub__wrap">
      <article class="scenario-sub layout">
        <img class="title-bar" src="../../assets/images/common/title_line.png" alt=""/>
        <h3>{{ $t('scenario.title2') }}</h3>
        <img class="scenario__img" :src="require('../../assets/images/scenario_2_' + this.$i18n.locale + '.png')" alt=""/>
        <div class="txt_wrap">
          <p class="scenario__txt" :class="this.$i18n.locale">
            {{ $t('scenario.txt2') }}
          </p>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Scenario',
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>
  .layout {
    width: 1080px;
    margin: 0 auto;
    @media screen and (max-width: 1080px) {
      width: 90%;
    }
  }

  .scenario-sub__wrap, .scenario-main__wrap {
    padding: 5rem 0 8.3rem 0;
    @media screen and (max-width: 1080px) {
      padding: 2.5rem 0 4.15rem 0;
    }
    .title-bar {
      margin-bottom: 13px;
    }
    .scenario__img {
      display: block;
      margin: 0 auto;
    }
    h3 {
      margin-bottom: 5.25rem;
      font-size: 1.3rem;
      @media screen and (max-width: 1080px) {
        margin-bottom: 2.7rem;
      }
    }
  }

  .scenario__txt {
    border-radius: 300rem;
    font-size: 0.95rem;
    color: #333;
    text-align: center;
    margin-top: 3.3rem;
    font-weight: 400;
    letter-spacing: -0.075em;
    &.en {
      letter-spacing: 0;
    }
    @media screen and (max-width: 900px) {
      margin-top: 1.65rem;
      font-size: 1rem;
    }
    @media screen and (max-width: 320px) {
      font-size: 0.85rem;
    }
  }

  .scenario-main__wrap {
    margin-top: 100px;
    background-image: url('../../assets/images/structure/structure_bg_2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    @media screen and (max-width: 1080px) {
      margin-top: 62px;
    }
    .scenario__txt {
      width: 100%;
      background-color: #fff;
      padding: 1.12rem;
      @media screen and (max-width: 1080px) {
        padding: 1.12rem 2.5rem;
      }
    }
  }

  .txt_wrap {
    width: 100%;
    text-align: center;
  }
  .scenario-sub__wrap {
    .scenario__img {
      margin-left: 60px;
      @media screen and (max-width: 1080px) {
        margin: 0 auto;
      }
    }
    .scenario__txt {
      background-color: #f3f3f3;
      padding: 1.12rem 2.5rem;
      width: auto;
      display: inline-block;
    }
  }
</style>
