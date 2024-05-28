<template>
  <div class="login-outer">
    <div
        @click="goBack"
        class="go-back">
      <van-icon
          class="back-icon"
          name="arrow-left"
      />
      <span class="back-text">返回</span>
    </div>

    <van-form
        class="form-el"
        @submit="onSubmit">
<!--      <h5 class="h5">登录</h5>-->
      <van-field
          v-model="phone"
          name="手机号"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <div class="code-outer">
        <van-field
            v-model="code"
            name="验证码"
            label="验证码"
            placeholder="验证码"
            :rules="[{ required: true, message: '请输入验证码' }]"
        />
        <van-button
            native-type="button"
            type="danger"
            @click="sendPhoneCodeHandle"
            class="btn-send-code"
        >
          {{btnText}}
        </van-button>
      </div>

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
        <p class="tips">未注册手机号登录</p>
      </div>
    </van-form>
  </div>
</template>

<script>
import {isMobile} from "@/utils/validate";
import {getSendCode,LoginPost} from "@/api/user";
export default {
  name: 'login',
  components: {
  },
  data() {
    return {
      phone: '',
      code: '',

      countDown: 60,
      isCountDownStart: false,
    };
  },
  computed: {
    btnText() {
      if(!this.isCountDownStart){
        return "发送验证码"
      }else {
        return `${this.countDown}s`;
      }
    }
  },
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    sendPhoneCodeHandle(){

      if (!isMobile(this.phone)) {
        this.$toast('请填写正确的手机号');
        return;
      }
      getSendCode({
        phone: this.phone,
        device_id: '123456',
      }).then(() => {
        if (this.isCountDownStart) return;
        //联调接口 todo
        this.isCountDownStart = true;
        this.countDown = 60;
        let countDownId = setInterval(() => {
          if (this.countDown <= 0) {
            clearInterval(countDownId);
            this.isCountDownStart = false;
            this.countDown = 60;
            return;
          }
          this.countDown -= 1;
        }, 1000);
        //调式 todo
      });

    },
    onSubmit(value) {
      if(this.phone)
      LoginPost({
        phone: this.phone,
        device_id: '123456',
        code: this.code,
      }).then((res) => {
        console.log(res);
        localStorage.setItem('token',res.result.token);
        localStorage.setItem('id',res.result.id);
        this.$router.push({name: 'home'});
      })
    },
  }
};
</script>

<style scoped lang="less">
.login-outer {
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  .go-back {
    position: fixed;
    top: 30px;
    left: 30px;
    .back-text {
      padding-left: 20px;
    }
  }
  .h5 {
    font-size: 60px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
  .tips {
    font-size: 28px;
    padding-top: 20px;
    text-align: center;
    color: #999999;
  }

  .form-el {
    width: 100%;
  }
  .code-outer {
    position: relative;
    .btn-send-code {
      width: 220px;
      text-align: center;
      position: absolute;
      top: 10px;
      right: 20px;
    }
  }
}
@media screen and (min-width: 768px) {
  .login-outer {
    width: 460px;
    margin: 0 auto;
  }
}
</style>
