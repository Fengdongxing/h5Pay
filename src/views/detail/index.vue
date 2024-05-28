<template>
<div class="detail-info">
  <div class="top-box">
    <van-icon class="go-back" @click="goBack" name="arrow-left" />
    <img class="people-img" :src="detail.user_head" alt="">
  </div>
  <div class="info">
    <h6 class="title">{{detail.user_name}}的个人资料</h6>
    <div class="bar"></div>
    <div
        class="left-right-line">
      <span class="text">个性签名</span>
      <span class="data">{{detail.self_slogan}}</span>
    </div>
    <div class="left-right-line">
      <span class="text">城市</span>
      <span class="data">{{'深圳'}}</span>
    </div>
    <div class="left-right-line">
      <span class="text">年龄</span>
      <span class="data">{{detail.user_age}}</span>
    </div>
    <div class="left-right-line">
      <span class="text">身高</span>
      <span class="data">{{'176'}}cm</span>
    </div>
    <div class="left-right-line">
      <span class="text">学历</span>
      <span class="data">{{'本科'}}</span>
    </div>
    <div class="left-right-line">
      <span class="text">情感</span>
      <span class="data">{{'未婚'}}</span>
    </div>
    <div class="left-right-line">
      <span class="text">职业</span>
      <span class="data">{{detail.occupation}}</span>
    </div>
    <div class="left-right-line">
      <span class="text">年收入</span>
      <span class="data">{{detail.monthly_salary}}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      detail: {
        city: '深圳',
        name: '肩海那快烧删',
        age: '29',
        height: '176',
        education: '本科',
        emotion: '未婚',
        phoneNum: '18819179013',
        wechat: 'f076323',
      }
    }
  },
  created(){
    this.detail = JSON.parse(localStorage.getItem('peopleItem'));
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
}
</script>

<style lang="less" scoped>
.detail-info {
  .top-box {
    position: relative;
    margin-bottom: 30px;
    .people-img {
      width: 100%;
      height: auto;
    }
    .go-back {
      cursor: pointer;
      position: absolute;
      top: 30px;
      left: 30px;
    }
  }
  .info {
    .title {
      font-size: 40px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
    }
    .bar {
      height: 20px;
      background-color: lightgray;
    }
    .left-right-line {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #999999;
      padding-bottom: 20px;
      padding-top: 20px;
      padding-left: 20px;
      padding-right: 20px;
      font-size: 32px;
      .text {
        color: #C8C8C8;
      }
    }
  }
}
</style>