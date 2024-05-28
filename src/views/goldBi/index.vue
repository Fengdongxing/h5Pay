<template>
<div class="gold-bi">
  <div class="top-box">
    <div class="nav">
      <van-icon @click="goBack" name="arrow-left" />
      <span class="title">充值中心</span>
      <span></span>
    </div>
    <div class="bi-count">
      <span class="text">金币余额</span>
      <span class="count">{{count}}</span>
      <img class="bi-icon" src="../../assets/img/bi_icon.png" alt="">
    </div>
  </div>
  <div class="gray-box">
    <van-row
        gutter="10"
        type="flex"
        justify="space-around"
        class="list"
    >
      <van-col
          span="8"
          v-for="(item,index) in goldBiList"
          :key="index"
      >
        <gold-item
            :data-item="item"
            :data-index="index"
            :cur-index="curIndex"
            class="gold-item"
            @click.native="itemHandle(index)"
        ></gold-item>
      </van-col>
    </van-row>
    <div class="pay-type">
      <h4 class="type-title">支付方式</h4>
      <div class="alipay">
        <img class="alipay-icon" src="../../assets/img/alipay.png" alt="">
        <span class="alipay-text">支付宝</span>
        <img
            class="choosed"
            src="../../assets/img/icon_choosed@2x.png"
            alt=""
        >
      </div>
    </div>
    <p class="tips">温馨提示: 如您已支付成功,金币余额没有增加,请重新进来当前页面,平台可能稍有延迟</p>
  </div>
  <div class="btn-outer">
    <van-button
        class="btn"
        type="warning"
        @click="payHandle"
    >立刻充值</van-button>
  </div>

</div>
</template>

<script>
import goldItem from "@/components/goldIBi/goldItem";
export default {
  name: "index",
  components: {
    goldItem,
  },
  data() {
    return {
      count: 0,
      curIndex: 0,
      goldBiList: [
        {
          goldBiCount: 980,
          coupon: 5,
          price: 98,
        },
        {
          goldBiCount: 1980,
          coupon: 5,
          price: 198,
        },
        {
          goldBiCount: 3980,
          coupon: 10,
          price: 398,
        },
        {
          goldBiCount: 9980,
          coupon: 10,
          price: 998,
        },
        {
          goldBiCount: 29980,
          coupon: 10,
          price: 2998,
        },
        {
          goldBiCount: 680,
          coupon: 5,
          price: 68,
        }
      ]
    }
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    itemHandle(index) {
      this.curIndex = index;
    },
    payHandle(){
      if(this.curIndex < 0) return;
      //缓冲,biItem数据,
      localStorage.setItem('biItem',JSON.stringify(this.goldBiList[this.curIndex]));
      this.$router.push({name: 'alipayDetail'});
    }
  },
}
</script>

<style lang="less" scoped>
.gold-bi {
  .top-box {
    padding: 15px 20px 30px 20px;
    background: linear-gradient(
        to bottom,
        white,
        rgba(255,199,200,.2) 35%,
    );
  }
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
  .bi-count {
    padding-bottom: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    .text {
      font-size: 34px;
      color: #666666;
    }
    .count {
      font-size: 50px;
      color: orangered;
      display: inline-block;
      padding: 0 20px;
    }
    .bi-icon {
      width: 50px;
    }
  }
  .gray-box {
    background-color: #f0f0f0;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    position: relative;
    top: -30px;
    padding: 0 20px;
    padding-bottom: 500px;
    .list {
      padding-top: 40px;
      .gold-item {
        height: 180px;
        margin-bottom: 30px;
      }
    }
  }

  .pay-type {
    .type-title {
      padding-bottom: 20px;
      padding-top: 40px;
    }
    .alipay {
      position: relative;
      border: 1px solid orangered;
      background-color: #ffffff;
      padding: 20px 100px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: end;
      .alipay-icon {
        width: 60px;
        height: 60px;
        margin-right: 20px;
      }
    }
    .choosed {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 40px;
      height: 40px;
    }
    .alipya-text {
      font-size: 50px;
      font-weight: bold;
    }
  }
  .tips {
    padding-top: 40px;
    font-size: 30px;
    line-height: 1.5;
  }
  .btn-outer {
    position: fixed;
    bottom: 60px;
    padding: 0 20px;
    width: 100%;
    .btn {
      width: 100%;
      background-color: orangered;
      border-radius: 30px;
    }
  }
}
</style>