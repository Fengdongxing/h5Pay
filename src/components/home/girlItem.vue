<template>
  <div
      @click="detailHandle"
      class="item">
    <img class="header" :src="itemData.user_head" alt="">
    <div class="name">{{itemData.user_name}}<van-icon class="icon-el" name="link-o" color="#FF69B4FF"></van-icon></div>
    <div class="detail-info">
      <span>{{itemData.user_age}}岁</span>.
      <span>{{itemData.user_sex}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "girlItem",
  props: {
    itemData: {
      // type: Object,
      default(){
        return {
          id: 1,
        }
      }
    },
  },
  data() {
    return {
      canJump: true,
    }
  },
  methods: {
    detailHandle() {
      if(this.canJump){
        this.$dialog.confirm({
          title: '查看详情需要消耗10金币',
          message: '金币不足,请充值金币',
        })
            .then(() => {
              // on confirm  跳去金币页面,
              this.$router.push({name: 'goldBi'});
            })
            .catch(() => {
              // on cancel
            });
      }else {
        //跳到详情页面
        localStorage.setItem('peopleItem',JSON.stringify(this.itemData));
        this.$router.push({name: 'detail',params:{id: this.itemData.id}});
      }
    }
  },
}
</script>

<style lang="less" scoped>
.item {
  cursor: pointer;
  padding: 10px;
  .header {
    width: 100%;
    border-radius: 20px;
  }
  .name {
    padding: 10px 0;
    font-size: 20px;
    font-weight: bold;
  }
  .detail-info {
    color: #999999;
    font-size: 16px;
  }
  .icon-el {
    margin-left: 10px;
  }
}
</style>