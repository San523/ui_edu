<template>
  <!-- <div class="scrollBar" :style="'width:'+ bodyWidth+'px;'"> -->
    <div class="scrollBar" >
    <div class="main">
      <ul class="scrollText">
        <transition name="slide-fade" v-for="(item, index) in msgtext" :key="item.id">
          <li v-show="msgshow==index+1">{{item.text}}</li>
        </transition>
      </ul>
      <div class="scrollBtn">
        <a href="javascript:;" @click="upturn()">
          <div class="leftBtn"><img src="~/assets/img/arrow.svg"></div>
        </a>
        <a href="javascript:;" @click="downturn()">
          <div class="rightBtn"><img style="transform:scaleY(-1);" src="~/assets/img/arrow.svg"></div>
        </a>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'
export default {
  //该页面的控制数据
  data() {
    return {
      //显示第几条滚动消息；
      msgshow: 1,
      //获取的消息文本
      msgtext: [{
        icon: "",
        text: "欢迎大家使用有爱教育平台，在这里，我将统计蔡甸区所有的培训班，如果您的培训班没有加入我们的大平台，欢迎入驻哟~"
      }, {
        icon: "",
        text: "恭喜你加入到我们的平台中来~"
      }, {
        icon: "",
        text: "时间就是金钱我的朋友。"
      }],
    }
  },
  //父控件传过来的参数
  props: {

  },
  computed: {
    bodyWidth() {
      return this.$store.getters.getBodyWidth;
    }
  },
  //监听函数
  wacth: {

  },
  //进入页面执行的函数
  mounted() {
    setInterval(() =>
      this.clock(), 6000);
  },
  //定义函数
  methods: {
    upturn() {
      let len = this.msgtext.length;
      if (this.msgshow < len) {
        this.msgshow++;
      }

    },
    downturn() {
      if (this.msgshow > 1) {
        this.msgshow--;
      }
    },
    clock() {
      let len = this.msgtext.length;
      if (this.msgshow < len) {
        this.msgshow++;
      } else if (this.msgshow == len) {
        this.msgshow = 1;
      }
    },
  },
  //增加控件
  components: {

  }
}

</script>
<style scoped lang="css">
.scrollBar {
  /*margin-top: 80px;*/
  height: 50px;
  background: #EFF2F7;
  display: flex;
  justify-content: center;
  width: 100%;
}

.main {
  /*background: red;*/
  width: 80rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto 10px;
}

.scrollText {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0;
  font-size: 16px;
  color: #8492A6;
}

.scrollText li {

  line-height: 50px;
  height: 50px;
}

.scrollBtn {
  display: flex;
  text-align: center;
}

.leftBtn {
  width: 2rem;
  height: 28px;
  border: 1px solid #D3DCE6;
  border-radius: 4px 0 0 4px;
  transition: all 0.3s ease-out 0s;
}

.leftBtn:hover {
  background: #fff;
  transition: all 0.3s ease-out 0s;
}

.rightBtn {
  width: 2rem;
  height: 28px;
  border: 1px solid #D3DCE6;
  border-left: 0;
  border-radius: 0 4px 4px 0;
  transition: all 0.3s ease-out 0s;
}

.rightBtn:hover {
  background: #fff;
  transition: all 0.3s ease-out 0s;
}


.slide-fade-enter-active {
  transition: all .8s;
}

.slide-fade-leave-active {
  transition: all .8s reverse;
}

.slide-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */

{
  transform: translateY(-25px);
  opacity: 0;
}

</style>}
