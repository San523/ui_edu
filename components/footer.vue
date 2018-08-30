<template>
  <div class="footer">
    <div class="linkBox">
      <!-- <div class="link">
        <div class="linkTitle">框架教程网站</div>
        <div class="linkText">
          <a href="http://element-cn.eleme.io/#/zh-CN" target="view_window">element-ui 饿了么UI框架</a>
          <a href="https://cn.vuejs.org/" target="view_window">vue-vue.js中国官网</a>
          <a href="http://www.imooc.com/" target="view_window">imooc-慕课网学习网站</a>
        </div>
      </div>
 -->
      <div class="link">
        <div class="linkTitle">友情链接</div>
        <div class="linkText">
          <a href="http://5windy.com/" target="view_window">有爱设计</a>
        </div>
        <div class="line"></div>
      </div>
      <div class="copyright">
        <p>Copyright © 2018 ~ 2023 有爱设计 By Windy.</p>
        <!-- <a href="/admin" style="color:#C0CCDA;">后台管理</a> -->
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  //该页面的控制数据
  data() {
    return {

    }
  },
  //父控件传过来的参数
  props: {

  },
  //监听函数
  wacth: {

  },
  //进入页面执行的函数
  mounted() {

  },
  //定义函数
  methods: {},
  //增加控件
  components: {

  }
}

</script>
<style scoped lang="css">
.footer {
  width: 100%;
  background: #F9FAFC;
  overflow: hidden;
  position: relative;
}

.link {
  margin: 20px 0;
}

.linkBox {
  width: 1280px;
  margin: 20px auto;
  overflow: hidden;
  padding-left: 10px;
}

.linkTitle {
  color: #475669;

}

.linkText a {
  color: #5E6D82;
  margin: 20px 20px 0 0;
  display: inline-block;
  margin-bottom: 20px;
}

.linkText a:link {
  color: #C0CCDA;
}

.linkText a:hover {
  color: #00C58C;
}

.line {
  height: 1px;
  width: 1280px;
  background: #EFF2F7;

}

.copyright {
  width: 1280px;
  color: #C0CCDA;
  display: flex;
  justify-content: space-between;
}

.cooyright a {}

@media screen and (max-width: 769px) {
  .link{
    display: none;
  }
  .copyright{
    width: 100%;
    font-size: 14px;
  }
}

</style>
