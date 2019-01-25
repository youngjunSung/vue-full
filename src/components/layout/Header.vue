<template>
  <!--헤더-->
  <header class="hd">
    <button class="hd-btn hd-menu">
      <img src="../../assets/images/localmenu.png" class="menu" alt="btn-img">
    </button>
    <h1 class="logo">
      <a href="index.html">
        <img src="../../assets/images/logo.png" alt="logo-img">
      </a>
    </h1>
    <a href="contents_box.html" class="my-contents">
      <img src="../../assets/images/contents-box.png" alt="logo-img">
    </a>
    <nav class="left-menu">
      <select class="ui dropdown lang">
        <option value="">ENG</option>
        <option value="1">KOR</option>
      </select>
      <button class="close-btn"><img src="../../assets/images/close.png" alt=""></button>
      <ul class="user-info">
        <li class="user-img">
          <!--로그인 유저 이미지-->
          <img class="login-user" src="../../assets/images/ic-person.png" alt="">
          <!--로그아웃 유저 이미지-->
          <!--<img class="logout-user" src="../../assets/images/ic-person.png" alt="">-->
        </li>
        <li class="login-state">
          <p class="user-mail">condealemail@gmail.com</p>
          <p class="user-log-history">last login Time : 2018-11-05 15:38:28</p>
        </li>
        <li class="logout-state">
          <p class="advice">Login or Register</p>
          <p class="forgot">FORGOT YOUR PASSWORD ?</p>
        </li>
        <li class="user-menu">
          <button class="ui button square">
            Log out
          </button>
          <a class="ui button square">
            change password
          </a>
        </li>
      </ul>
      <div class="bottom-area">
        <ul class="left-menu-list">
          <li><a href="mypage_verification.html">Verification</a></li>
          <li><a href="cs.html">MY Asset</a></li>
          <li><a href="mypage_purchase_history.html">Purchase History</a></li>
          <li><a href="transaction_history.html">Transaction History</a></li>
          <li><a href="contents_box.html">Content Box</a></li>
        </ul>
        <ul class="nav-footer">
          <li class="ft-logo"><img src="../../assets/images/img-condeal-g.png" alt=""></li>
          <li><p class="copy-txt">© 2018 Kstarmusic Co., Ltd. All rights reserved.</p></li>
          <li><p class="info-txt">15 Beach Road, #02-01 Singapore 189677<br>Commercial number : 201835338W</p></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  @mixin clearfix {
    &::after {
      content: '';
      display: table;
      clear: both;
    }
  }
  //헤더
  .hd {
    position: fixed;
    z-index: 100;
    width: 100%;
    top: 0;
    left: 0;
    height: 6rem;
    text-align: center;
    background-color: white;
    border-bottom: 1px solid #c2c2c2;
    .hd-btn {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      .menu {
        width: 3.7rem;
      }
      .back {
        width: 3.2rem;
      }
      // 환전소 헤더
      &.back-btn {
        margin-left: 0.8333rem;
        .back {
          width: 3.3rem;
        }
      }
    }
    .my-contents {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      img {
        width: 3.66666rem;
        vertical-align: middle;
        margin-right: 0.86666666rem;
      }
      &:after {
        display: inline-block;
        content: '';
        width: 0;
        height: 100%;
        vertical-align: middle;
      }
    }
    .logo {
      display: inline-block;
      vertical-align: middle;
      margin: 0;
      img {
        width: 12.8rem;
      }
    }
    .header-tit {
      font-size: 2rem;
      font-weight: 600;
      line-height: 1;
      letter-spacing: -.025em;
      text-align: left;
      color: #4c4c4c;
      &.member {
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 1;
        color: #292929;
      }
    }
    &:after {
      display: inline-block;
      content: '';
      width: 0;
      height: 100%;
      vertical-align: middle;
    }
  }
  .left-menu {
    transition: all .5s;
    position: fixed;
    left: -100%;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    &.active {
      left: 0;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    .ui.dropdown.lang {
      position: absolute;
      top: 1.8rem;
      left: 1.2666rem;
      $dropdown-height: 2.3rem;
      min-width: auto;
      min-height: auto;
      width: 5.5666rem;
      height: $dropdown-height;
      padding: 0 0 0 1rem;
      border-radius: 6px;
      border: .2rem solid #d7d7d7;
      background: {
        image: url("../../assets/images/down-ico.png");
        position: calc(100% - 0.4rem) center;
        repeat: no-repeat;
        size: 1rem;
      };
      .text {
        vertical-align: middle;
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: -0.025em;
        color: #202224;
      }
      &:after {
        display: inline-block;
        content: '';
        width: 0;
        height: 100%;
        vertical-align: middle;
      }
      .dropdown.icon {
        padding: 0;
        margin: 0;
        height: 100%;
        top: 0;
        right: 0;
        &:before {
          display: block;
          position: absolute;
          top: 50%;
          right: 1rem;
          transform: translateY(-50%);
          content: '';
          width: 0;
          height: 0;
          //border-top: 6px solid #303030;
          //border-left: 4px solid transparent;
          //border-right: 4px solid transparent;
          background: {
            image: url("../../assets/images/down-ico.png");
            position: 0.56666rem center;
            repeat: no-repeat;
            size: 1rem;
          };
        }
      }
      .menu {
        max-height: $dropdown-height*4;
        border: .2rem solid #d7d7d7;
        border-bottom-right-radius: 6px;
        border-bottom-left-radius: 6px;
        margin: 0px -.1895rem;
        width: calc(100% + .4rem );
        .item {
          padding: 0 0 0 1rem!important;
          height: $dropdown-height;
          line-height: $dropdown-height;
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: -0.025em;
          color: #202224;
        }
      }
    }
    .close-btn {
      position: absolute;
      top: 1.4rem;
      right: 0.866rem;
      img {
        width: 3.6666rem;
      }
    }
    .bottom-area {
      background-color: black;
      padding-top: 5.5666667rem;
      padding-bottom: 3.9rem;
    }
    .user-info {
      background-color: #3c4146;
      padding: 4.4rem 0 3.8333rem;
      .user-img {
        margin-bottom: 1.26666rem;
        .login-user, .logout-user {
          width: 6rem;
        }
        .logout-user {
          opacity: .3;
        }
      }
      .login-state {
        .user-mail {
          font-size: 1.4rem;
          font-weight: 300;
          line-height: 1;
          color: #ffffff;
          margin-bottom: 0.666667rem;
        }
        .user-log-history {
          font-size: .8rem;
          font-weight: 300;
          line-height: 1;
          color: #ffffff;
          margin-bottom: 1.4333333rem;
        }
      }
      .logout-state {
        .advice {
          font-size: 0.866rem;
          font-weight: 300;
          line-height: 1;
          color: #8f9194;
          margin-bottom: 1.26666rem;
          text-transform: uppercase;
        }
        .forgot{
          font-size: 1.2rem;
          font-weight: 600;
          line-height: 1;
          color: #00a2ff;
          margin-bottom: 2.266rem;
        }
      }
      .user-menu {
        font-size: 0;
        .ui.button {
          width: 11.53333333rem;
          padding: 0.9rem 0;
          margin: 0;
          background-color: transparent;
          border: 1px white solid;
          font-size: 1rem;
          font-weight: 600;
          line-height: 1;
          color: #ffffff;
          text-transform: uppercase;
          &:nth-child(n+2) {
            margin-left: 1.33333333rem;
          }
        }
      }
    }
    .left-menu-list {
      li {
        text-align: left;
        padding-left: 2.7rem;
        @for $i from 1 through 5 {
          &:nth-of-type(#{$i}) {
            background: {
              image: url("../../assets/images/ic-#{$i}.png");
              position: 2.7rem center;
              repeat: no-repeat;
              size: 2.6rem;
            };
          }
        }
        a {
          display: inline-block;
          float: right;
          border-top: 1px solid #454545;
          width: calc(100% - 5rem);
          padding: 1.56666rem 0 1.56666rem;
          font-size: 1.3rem;
          font-weight: 300;
          line-height: 1;
          color: #ffffff;
          &:hover {
            color: #a201ff;
          }
          &:focus {
            outline: none;
          }
        }
        &:last-child {
          a {
            border-bottom: 1px solid #454545;
          }
        }
        @include clearfix;
      }
    }
    .nav-footer {
      margin-top: 15rem;
      .ft-logo {
        margin-bottom: 1.733333rem;
        img {
          width: 10.4rem;
        }
      }
      li {
        text-align: left;
        padding-left: 2.7rem;
        p {
          font-size: .8rem;
          font-weight: 300;
          line-height: 1.2;
          color: #565656;
          &.copy-txt {
            font-weight: 600;
            margin-bottom: 1.2rem;
          }
        }
      }
    }
  }
</style>
