<template>
  <div>
    <nav-bar></nav-bar>
    <nuxt></nuxt>
    <footer-bar/>
    <return-top/>
  </div>
</template>

<script>
import { mapState } from 'vuex'; //vuex
import Lodash from 'lodash';
import $ from 'jquery';
import navBar from '~/components/navBar'; //顶部栏
import footerBar from '~/components/footer'; //底部页脚
import returnTop from '~/components/returnTop'; //侧下边联系方式以及返回顶部


export default {
  name: 'App',
  data() {
    return {
      bodyWidth: '',
    }
  },
  created() {
    // try {
    //   document.body.removeChild(document.getElementById('appLoading'))
    //   setTimeout(function() {
    //     document.getElementById('app').style.display = 'block';
    //   }, 500)
    // } catch (e) {

    // }
  },
  wacth: {

  },
  mounted() {

    //监听页面宽度
    this.bodyWidth = document.body.clientWidth;
    this.$store.commit('updateBodyWidth', this.bodyWidth);
    const that = this;
    // _.debounce 是一个通过 lodash 限制操作频率的函数。
    window.onresize = _.debounce(() => {
      //console.log("onresize:" + that.bodyWidth)
      that.bodyWidth = document.body.clientWidth;
      that.$store.commit('updateBodyWidth', that.bodyWidth);
    }, 100);
  },
  computed: {
    centerDialogVisible() {
      return this.$store.getters.getCenterDialogVisible;
    },
    // modalStatus() {
    //   return this.$store.getters.getModalStatus;
    // },
  },
  components: {
    navBar,
    footerBar,
    returnTop,
  }
}

</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

ul li {
  list-style-type: none;
  padding: 0;
  margin:0;
}

a:hover, a:visited, a:link, a:active {
  text-decoration: none;
  color: #1F2D3D;
}

a, h1, h2, h3, p, kbd, code, dt, dd, li, div, button {
    font-family: 'Hiragino Sans GB', 'Helvetica Neue', 'Microsoft Yahei';
    -webkit-font-smoothing: antialiased;
}
</style>
