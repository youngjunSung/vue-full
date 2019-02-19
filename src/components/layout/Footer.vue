<template>
  <footer class="ft">
    <div class="layout">
      <div class="ft-info">
        <img class="ft-logo" :src="require('../../assets/images/ft_logo.png')" alt="">
        <ul class="ft-list">
          <li>CONTENTS DEAL PTE. LTD.</li>
          <li>16 COLLYER QUAY #17-00 INCOME AT RAFFLES SINGAPORE (049318)</li>
          <li>Commercial number : 201835338W</li>
          <li><a href="mailto:info@condeal.net" class="ft-mail"><img :src="require('../../assets/images/icon_mail.png')" alt="CONDEAL">info@condeal.net</a></li>
        </ul>
      </div>
      <div class="ft-sns">
        <!--<a href="" target="_blank"><img :src="require('../../assets/images/sns_face.png')" alt="facebook"></a>-->
        <!--<a href="" target="_blank"><img :src="require('../../assets/images/sns_insta.png')" alt="instagram"></a>-->
        <a href="https://twitter.com/Condeal_Team" target="_blank"><img :src="require('../../assets/images/sns_twiter.png')" alt=""></a>
        <a href="https://medium.com/@condeal_team" target="_blank"><img :src="require('../../assets/images/sns_medium.png')" alt=""></a>
      </div>
    </div>
  </footer>
</template>
<script>
	export default {

  }
</script>
<style lang="scss">
  .ft {
    padding: 2.4rem 0 8.5rem 0;
    background: #fff;
    border-top: 1px solid #c7c7c7;
    @media all and (max-width: 990px) {
      padding: 2.8em 0;
    }
    .layout {
      position: relative;
      @include clearfix;
      @media all and (max-width: 1100px) {
        width: 100%;
        padding: 0 8px;
      }
      @media all and (max-width: 990px) {
        text-align: center;
      }
      .ft-info {
        @media all and (max-width: 990px) {
          position: relative;
          top: 0;
          left: 0;
          transform: translateY(0);
          text-align: center;
          margin-bottom: 2rem;
        }
        .ft-logo {
          margin-right: 1.85rem;
          margin-top: 7px;
          vertical-align: middle;
          float: left;
          @media all and (max-width: 990px) {
            float: none;
            margin-right: 0;
            margin-bottom: 1rem;
          }
          @media all and (max-width: 380px) {
            width: 9rem;
          }
        }
        .ft-list {
          float: left;
          @media all and (max-width: 990px) {
            float: none;
          }
          li {
            color: #4e4e4e;
            font-size: 0.9rem;
            letter-spacing: -0.035em;
            line-height: 1.6;
            &:last-of-type {
              margin-top: 1rem;
            }
            .ft-mail {
              color: #4e4e4e;
              font-size: 0.95rem;
              img {
                vertical-align: middle;
                margin-right: .5rem;
                margin-bottom: 0.2rem;
                @media all and (max-width: 600px) {
                  width: 17px;
                }
              }
            }
          }
        }
      }
      .ft-sns {
        display: inline-block;
        float: right;
        margin-top: 7px;
        @media all and (max-width: 990px) {
          position: relative;
          top: 0;
          right: 0;
          transform: translateY(0);
          text-align: center;
          float: none;
        }
        a {
          &:nth-of-type(n+2) {
            margin-left: .8rem;
          }
        }
      }
    }
  }
</style>
