<template>
  <div class="bannerBox">
    <div class="banner-main">      
      <el-carousel :interval="8000" arrow="auto" :height="banner_height" indicator-position="none">
        <el-carousel-item v-for="item in 4" :key="item">
          <!-- <h3>{{ item }}</h3> -->
        </el-carousel-item>
      </el-carousel>
      <div class="banner-box"></div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'
export default {
  //该页面的控制数据
  data() {
    return {

    }
  },
  //父控件传过来的参数
  props: {

  },
  computed: {
    bodyWidth() {
      return this.$store.getters.getBodyWidth;
    },
    banner_height(){
      if (this.bodyWidth < 675){
        return "15rem";
      }else{
        return "30rem";
      }
    }
  },
  //监听函数
  wacth: {

  },
  //进入页面执行的函数
  mounted() {

  },
  //定义函数
  methods: {

  },
  //增加控件
  components: {

  }
}

</script>
<style scoped lang="css">
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 30rem;
    margin: 0;
  }
  .el-carousel{
  	border-radius: 8px;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
     border-radius: 8px;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #20A0FF;
     border-radius: 8px;
  }

.bannerBox {
  display: flex;
  justify-content: center;
}

.banner-main {
  width: 80rem;
  background: #20A0FF;
  margin: 20px 10px;
  
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.text-list {
  width: 12.5rem;
  height: 30rem;
  background: #fff;
  border-radius: 8px 0 0 8px;
}

</style>}
