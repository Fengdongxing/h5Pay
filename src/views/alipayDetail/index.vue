<template>
<div class="alipay-detail">
  <div class="nav">
    <van-icon @click="goBack" name="arrow-left" />
    <span class="title">下单详情</span>
    <span></span>
  </div>
  <div class="detail">
    <img class="bi-img-big" src="../../assets/img/bi_icon.png" alt="">
    <div class="desc">
      <span class="count">金币: {{details.goldBiCount}}</span>
      <span class="coupon">送{{details.coupon}}</span>
      <p class="total">合计: {{details.goldBiCount + details.coupon}}</p>
    </div>
  </div>
  <h4 class="type-title">支付方式</h4>
  <div class="alipay">
    <img class="alipay-icon" src="../../assets/img/alipay.png" alt="">
    <div class="bottom-text">
      <span class="alipay-text">支付宝</span>
      <img
          class="choosed"
          src="../../assets/img/gou.png"
          alt=""
      >
    </div>
  </div>
  <div class="total-box">
    <span class="total-price">合计: {{details.price}}元</span>
    <van-button
        class="btn"
        type="warning"
        @click="payHandle"
    >提交订单</van-button>
  </div>
</div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      details: {
        goldBiCount: 980,
        coupon: 5,
        price: 98,
      }
    }
  },
  created(){
    this.assigen();
  },
  methods: {
    assigen(){
      this.details = JSON.parse(localStorage.getItem('biItem'));
    },
    goBack(){
      this.$router.go(-1);
    },
    payHandle() {
      
    }
  },
}
</script>

<style lang="less" scoped>
.alipay-detail {
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
    .title {
      font-size: 40px;
      font-weight: bold;
    }
  }
  .detail {
    display: flex;
    justify-content: center;
    align-items: center;
    .bi-img-big {
      width: 300px;
      height: 300px;
    }
  }
  .type-title {
    padding-bottom: 20px;
    padding-top: 100px;
    padding-left: 40px;
  }
  .alipay {
    text-align: center;
    padding-top: 50px;
    .alipay-icon {
      width: 200px;
      height: auto;
      margin-right: 20px;
    }
    .bottom-text {
      padding-left: 70px;
      padding-top: 30px;
      .alipay-text {
        font-size: 60px;
      }
      .choosed {
        width: 80px;
        height: auto;
        margin-left: 20px;
      }
    }

  }
  .total-box {
    position: fixed;
    bottom: 60px;
    padding: 0 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .total-price {
      font-size: 38px;
      font-weight: bold;
    }
    .btn {
      width: 180px;
      background-color: orangered;
      border-radius: 24px;
    }
  }
}
</style>