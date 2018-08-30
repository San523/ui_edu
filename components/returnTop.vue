<template>
  <div class="btnBox">
    <div class="returnTop box" v-show="scrollTop >= 60" @click="returnTop"><i class="el-icon-arrow-up"></i></div>
    <div class="box"></div>
    <div class="weChat box" @click="postWeChatCenterDialogVisibleTrue"><span class="wechat-icon"></span></div>
    <div class="qq box" @click="qqIM"><span class="qq-icon"></span></div>
    <div class="email box" @click="sendEmail"><i class="el-icon-message"></i></div>
  </div>
</template>
<script>
import Lodash from 'lodash';
export default {
  data() {
    return {
       scrollTop: 0,
    }
  },
  computed: {

  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll) //监听滚动条
  },
  wacth: {
    // scrollTop(){
    //   document.body.scrollTop, //获取滚动条位置高度
    // }
  },
  methods: {
    returnTop() {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      //console.log(this.scrollTop);
    },
    handleScroll() { //将滚动条值赋值
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.scrollTop = scrollTop
    },
    destroyed() { //离开页面移除事件。
      window.removeEventListener('scroll', this.handleScroll)
    },
    //打开微信模态框
    //存储到Vuex中模态框的状态为true
    postWeChatCenterDialogVisibleTrue() {
      // this.$store.commit('updateCenterDialogVisible', true)
      // this.$store.commit('updatemodalStatus', "wechat")
    },
    qqIM() {
      window.open('http://wpa.qq.com/msgrd?v=3&uin=197299278&site=qq&menu=yes', '_blank', 'height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
    },
    sendEmail() {
      window.open('mailto:197299278@qq.com', '_blank', 'height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
    },
  }
}

</script>
<style scoped>
.btnBox {
  display: flex;
  flex-flow: column;
  position: fixed;
  right: 10px;
  bottom: 40px;
  z-index: 6;
}

.box {
  color: #fff;
  text-align: center;
  width: 30px;
  height: 30px;
  opacity: 0.3;
  margin: 0.5px;
  line-height: 30px;
  transition: all 0.3s ease-out 0s;
}

.email {
  background-color: #000;
  transition: all 0.3s ease-out 0s;
}

.email:hover {
  background-color: #4788FC;
  opacity: 1;
  transition: all 0.3s ease-out 0s;
}

.qq {
  background-color: #000;
}

.qq-icon {
  background-image: url(~/assets/img/icons/qq.svg);
  background-size: cover;
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-top: 5px;
}

.wechat-icon {
  background-image: url(~/assets/img/icons/wechat.svg);
  background-size: cover;
  width: 24px;
  height: 24px;
  display: inline-block;
  margin-top: 3px;
}

.qq:hover {
  background-color: #4788FC;
  opacity: 1;
  transition: all 0.3s ease-out 0s;
}

.weChat {

  background-color: #00A60A;
}

.weChat:hover {
  opacity: 1;
  transition: all 0.3s ease-out 0s;
  background-color: #00A60A;
}

.returnTop {

  background-color: #000;
}

.returnTop:hover {
  opacity: 0.5;
  transition: all 0.3s ease-out 0s;
  background-color: #000;
}

</style>
