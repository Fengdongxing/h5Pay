<template>
<div
    class="gold-item"
    :class="{active: dataIndex == curIndex}"
>
  <div
      v-if="activeFlag"
      class="active-text">首冲特惠</div>
  <div class="top">
    <span class="gold-count">{{dataItem.goldBiCount}}</span>
    <img class="bi-icon" src="../../assets/img/bi_icon.png" alt="">
  </div>
  <div class="coupon">
    送{{dataItem.coupon}}金币
  </div>
  <div class="price">
    ￥ {{dataItem.price}}
  </div>
  <img
      v-if="activeFlag"
      class="choosed"
      src="../../assets/img/icon_choosed@2x.png"
      alt=""
  >
</div>
</template>

<script>
export default {
  name: "goldIem",
  props: {
    dataItem: {
      type: Object,
      default(){
        return {
          /*goldBiCount: 980,
          coupon: 5,
          price: 98,*/
        }
      }
    },
    dataIndex:{

    },
    curIndex: {}
  },
  computed: {
    activeFlag() {
      return this.dataIndex == this.curIndex;
    }
  },
}
</script>

<style lang="less" scoped>
.gold-item {
  position: relative;
  background-color: #ffffff;
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;

  .active-text {
    position: absolute;
    top: -20px;
    left: 0;
    font-size: 20px;
    padding: 10px 10px;
    border-radius: 20px;
    border-bottom-left-radius: 0px;
    color: #ffffff;
    background-color: orangered;

  }
  .bi-icon {
    width: 18px;
    height: 18px;
    //position: absolute;
  }
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    .gold-count {
      font-size: 30px;
      font-weight: bold;
    }
    .bi-icon {
      width: 50px;
      height: auto;
    }
  }
  .coupon {
    font-size: 20px;
    color: orangered;
    text-align: center;
  }
  .price {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }
  .choosed {
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: 0;
    right: 0;
  }
  &.active {
    border-color: orangered;
  }
}
</style>