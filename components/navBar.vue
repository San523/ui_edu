<template>
  <div class="navbox">
    <header class="nav" :class="{'navBarShadow':scrollType}" ref="nav">
      <div class="container_nav" :class="{'containerLitter':scrollType}">
        <div class="nav-left-box">
          <a><img src="~/assets/img/pc_logo.png" class="logo"></a>
          <ul class="text-link" v-if="bodyWidth > 675">
            <a href="javascript:;" @click="openIndex">
              <li :style="active==1?'color:#00C58C;':''">有爱首页</li>
            </a>
            <a href="javascript:;" @click="openProject">
              <li :style="active==2?'color:#00C58C;':''">附近培优</li>
            </a>
            <!-- <a href="javascript:;">
            <li :style="active==3?'color:#00C58C;':''">素材</li>
          </a> -->
          </ul>
        </div>
        <div class="nav-right-box" v-if="bodyWidth > 675">
          <a href="javascript:;"><span class="text-span"></span></a>
          <a href="javascript:;" @click="postWeChatCenterDialogVisibleTrue">
            <div class="wechat chat"></div>
          </a>
          <a href="javascript:;" @click="qqIM">
            <div class="qq chat"></div>
          </a>
          <a href="javascript:;" @click="sendEmail">
            <div class="email chat"></div>
          </a>
        </div>
        <div class="menu" v-if="bodyWidth <= 675" @click="showMenu = !showMenu"><img src="~/assets/img/menu.svg" alt=""></div>
      </div>
    </header>
    <div class="menu-list" v-if="showMenu">
      <ul>
        <a href="javascript:;">
          <li :style="active==1?'color:#00C58C;':''" @click="openIndex">有爱首页</li>
        </a>
        <a href="javascript:;">
          <li :style="active==2?'color:#00C58C;':''" @click="openProject">附近培优</li>
        </a>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'
export default {
  //该页面的控制数据
  data() {
    return {
      scrollType: false,
      showMenu: false,
    }
  },
  //父控件传过来的参数
  props: {

  },
  computed: {
    active() {
      return this.$store.getters.getNavBarActive;
    },
    bodyWidth() {
      return this.$store.getters.getBodyWidth;
    }
  },
  //监听函数
  wacth: {

  },
  //进入页面执行的函数
  mounted() {
    let self = this;
    self.$store.commit('updateNavBarActive', '1');
    self.$nextTick(() => {
      window.addEventListener('scroll', self.onScroll)
    });
  },
  //定义函数
  methods: {

    //进入首页
    openIndex() {
      let self = this;
      this.showMenu = false;
      self.$store.commit('updateNavBarActive', '1');
      self.$router.push({ path: '/' });
    },
    //进入列表页
    openProject() {
      let self = this;
      this.showMenu = false;
      self.$store.commit('updateNavBarActive', '2');
      self.$router.push({ path: '/mapList' });
    },
    //滚轮缩小事件
    onScroll() {
      let self = this;
      let scrolled = document.documentElement.scrollTop || document.body.scrollTop
      if (scrolled >= 80) {
        self.scrollType = true;
      } else {
        self.scrollType = false;
      }
    },
    //打开微信二维码
    postWeChatCenterDialogVisibleTrue() {
      let self = this;
      self.$store.commit('updateCenterDialogVisible', true)
      self.$store.commit('updatemodalStatus', "wechat")
    },
    //QQ聊天
    qqIM() {
      window.open('http://wpa.qq.com/msgrd?v=3&uin=197299278&site=qq&menu=yes', '_blank', 'height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
    },
    //发送邮件
    sendEmail() {
      window.open('mailto:197299278@qq.com', '_blank', 'height=502, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
    },

  },
  //增加控件
  components: {

  }
}

</script>
<style scoped lang="css">
.menu {
  width: 2rem;
  height: 2rem;
  text-align: center;
}

.menu img {
  margin-top: 0.6rem;
}

.menu-list {
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  height: 96px;
}

.menu-list li {
  height: 44px;
  line-height: 44px;
  color: #1F2D3D;
}

.navbox {
  position: fixed;
  width: 100%;
  z-index: 10;
}

.nav {
  background: #fff;
  height: 80px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  justify-content: center;
  display: flex;
}

.navBarShadow {
  transition: all 0.3s ease-out 0s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  height: 60px;
}

.container_nav {
  width: 80rem;
  overflow: hidden;
  margin: 0 10px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.containerLitter {
  height: 60px;
  transition: all 0.3s ease-out 0s;
}

.nav-left-box {
  display: flex;
  align-items: center;
}

.logo {
  float: left;

  height: 40px;
  background-size: 100%;
}

.text-span {
  color: #475669;
  list-style-type: none;
  font-size: 18px;
  font-weight: 350;
  transition: all 0.3s ease-out 0s;
  display: inline-block;
}

.text-span:hover {
  color: #8492A6;
  transition: all 0.3s ease-out 0s;
}

.text-link {
  margin: 0;
  float: left;
  margin-left: 40px;
}

.text-link li {
  color: #475669;
  list-style-type: none;
  float: left;
  font-size: 18px;
  margin-right: 40px;
  font-weight: 350;
  transition: all 0.3s ease-out 0s;
}

.text-link li:hover {
  color: #8492A6;
  transition: all 0.3s ease-out 0s;
}

.nav-right-box {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.chat {
  width: 40px;
  height: 40px;
  margin-left: 20px;
  border-radius: 20px;
  border: 1px solid #fff;
  transition: all 0.3s ease-out 0s;
  box-sizing: border-box;
}

.chat:hover {
  transition: all 0.3s ease-out 0s;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.wechat {
  background-image: url('~assets/img/wechat.png');
  background-size: 100%;
}

.qq {
  background-image: url('~assets/img/qq.png');
  background-size: 100%;
}

.email {
  background-image: url('~assets/img/email.png');
  background-size: 100%;
}



/*当屏幕尺寸大于675px时，应用下面的CSS样式*/

@media screen and (min-width: 675px) {
  .menu-list {
    display: none;
  }
}

</style>
