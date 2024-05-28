<template>
  <div class="home">
    <girl-item
        class="girl-item"
      v-for="(item,index) in userList"
      :key="index"
      :item-data="item"
    ></girl-item>
    <div class="clear"></div>
  </div>
</template>

<script>
import { queryUserList } from "@/api/user";
// @ is an alias to /src
import girlItem from "@/components/home/girlItem";

export default {
  name: 'HomeView',
  components: {
    girlItem
  },
  data() {
    return {
      userList: []
    }
  },
  created(){
    this.getUserList();
  },
  methods: {
    getUserList(){
      let params = {
        user_id: localStorage.getItem('id'),
        page: 0,
        pagesize: 10,
        longitude: '0.0',
        latitude: '0.0',
      }
      queryUserList(params).then((res) => {
        console.log(res);
        if(res.code == 400){
          this.$router.push({name: 'login'});
        }else {
          this.userList = res.result;
        }
      }).catch(() => {
        this.$router.push({name: 'login'});
      })
    }
  },
}
</script>
<style lang="less" scoped>
.home {
  .girl-item {
    float: right;
    width: 50%;
    margin-bottom: 20px;
  }
  .clear {
    clear: both;
  }
}
</style>
