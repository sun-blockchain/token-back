<template>
  <div class="content-account">
    <header-componet />

    <div class="balance-and-points">
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="12">
          <div class="center-content">
            <h3 class="text-balance">Balance</h3>
            <p class="balance-amount"><b>100</b> <span>ONE</span></p>
          </div>
        </el-col>
        <el-col :span="12"
          ><div class="center-content">
            <h3 class="text-points">Sun Coins</h3>
            <p class="points-amount"><b>1000</b> <span>SUN</span></p>
          </div></el-col
        >
      </el-row>
    </div>
    <div class="cashback">
      <div class="box-cashback">
        <h3>Interest</h3>
        <div class="arrow-top">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
        </div>
        <div class="cashback-amount">
          <b>50</b>&nbsp;&nbsp;&nbsp;&nbsp;
          <span>ONE</span>
          <strong class="interest-rate">
            + ( 8% / day )
          </strong>
        </div>

        <el-button type="primary" round class="btn-witdraw"
          ><i class="el-icon-download"></i> Withdraw</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponet from '@/components/HeaderComponent';
import { mapState, mapActions } from 'vuex';
import loginModal from '@/components/LoginModal.vue';

export default {
  components: { HeaderComponet, loginModal },
  name: 'account',
  data() {
    return {
      isLoginModalVisible: false
    };
  },
  computed: {
    ...mapState(['mathWallet'])
  },
  methods: {
    ...mapActions(['signInWallet', 'signOutWallet'])
  },
  async created() {
    let wallet = JSON.parse(localStorage.getItem('harmony_session'));
    // await this.signOutWallet();
    if (!wallet || !wallet.account) {
      this.signInWallet();
    }
  }
};
</script>

<style lang="scss">
.content-account {
  background: #eef2f7;
  min-height: 100vh;
  .balance-and-points {
    background: #34495e;
    padding-top: 100px;
  }
  .center-content {
    text-align: center;
  }
  .cashback {
    margin-top: 30px;
    text-align: center;
    background: #eef2f7;
    h3 {
      color: #34495e;
    }
  }
  h3.text-balance {
    color: cyan;
  }
  p.balance-amount {
    color: #ffffff;
  }
  h3.text-points {
    color: gold;
  }
  p.points-amount {
    color: #ffffff;
  }
  .balance-amount {
    b {
      font-size: 1.5em;
    }
    span {
      color: cadetblue;
    }
  }
  .cashback-amount {
    b {
      color: #09babf;
      font-size: 1.5em;
    }
    span {
      color: cadetblue;
    }
    strong {
      font-size: 1.3em;
    }
  }
  .points-amount {
    b {
      font-size: 1.5em;
    }
    span {
      color: #bfa519;
    }
  }

  .btn-witdraw {
    margin-top: 30px;
  }

  .interest-rate {
    position: relative;
  }
  .box-cashback {
    padding-top: 30px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
      0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
      0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);

    min-height: 200px;
    width: 300px;
    height: 300px;
    margin: 0 auto;
    background: white;
    border-radius: 50%;
    position: relative;
    h3 {
      margin-top: 0;
      margin-bottom: 60px;
    }
  }

  $base: 0.6rem;

  .arrow-top {
    display: flex;
    justify-content: center;
    align-items: center;
    // width: 100%;
    position: relative;
  }

  .chevron {
    position: absolute;
    top: 15px;
    width: $base * 3.5;
    height: $base * 0.8;
    opacity: 0;
    transform: scale(0.3);
    animation: move-chevron 3s ease-out infinite;
  }

  .chevron:first-child {
    animation: move-chevron 3s ease-out 1s infinite;
  }

  .chevron:nth-child(2) {
    animation: move-chevron 3s ease-out 2s infinite;
  }

  .chevron:before,
  .chevron:after {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
    background: #2c3e50;
  }

  .chevron:before {
    left: 0;
    transform: skewY(-30deg);
  }

  .chevron:after {
    right: 0;
    width: 50%;
    transform: skewY(30deg);
  }

  @keyframes move-chevron {
    25% {
      opacity: 1;
    }
    33.3% {
      opacity: 1;
      transform: translateY(-$base * 3.8);
    }
    66.6% {
      opacity: 1;
      transform: translateY(-$base * 5.2);
    }
    100% {
      opacity: 0;
      transform: translateY(-$base * 8) scale(0.5);
    }
  }
}
</style>
