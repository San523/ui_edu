<template>
  <div class="detail-block">
    <!-- 顶部LOGO栏 -->
    <div class="class-top">
      <div class="class-top-block" style="">
        <div class="class-top-logo"><img src="/data_img/shop1_logo.png"></div>
        <p>绘与慧艺术中心</p>
      </div>
    </div>
    <!-- 顶部LOGO栏 -->
    <!-- tab菜单栏 -->
    <div class="class-tab">
      <ul class="tab-bar-pc">
        <a href="javascript:;">
          <li class="active">首页</li>
        </a>
        <a href="javascript:;" @click="goAnchor('#anchor0')">
          <li>机构简介</li>
        </a>
        <a href="javascript:; " @click="goAnchor('#anchor1')">
          <li>机构课程</li>
        </a>
        <a href="javascript:;" @click="goAnchor('#anchor2')">
          <li>师资力量</li>
        </a>
        <a href="javascript:;" @click="goAnchor('#anchor3')">
          <li>学员风采</li>
        </a>
        <a href="javascript:;" @click="goAnchor('#anchor4')">
          <li>环境展示</li>
        </a>
        <a href="javascript:;" @click="goAnchor('#anchor5')">
          <li>学校地址</li>
        </a>
      </ul>
      <ul class="tab-bar-mobile">
        <li class="active">首页</li>
        <li @click="goAnchor('#anchor0')">机构简介</li>
        <li @click="goAnchor('#anchor1')">机构课程</li>
        <li @click="goAnchor('#anchor2')">师资力量</li>
        <li @click="goAnchor('#anchor3')">学员风采</li>
        <li @click="goAnchor('#anchor4')">环境展示</li>
        <li @click="goAnchor('#anchor5')">学校地址</li>
      </ul>
    </div>
    <!-- tab菜单栏 -->
    <!-- 培训班首页广告 -->
    <el-carousel :interval="5000" arrow="hover" height="400px">
      <el-carousel-item v-for="item in 4" :key="item">
        <!-- <h3>{{ item }}</h3> -->
      </el-carousel-item>
    </el-carousel>
    <!-- 培训班首页广告 -->
    <!-- 正文 -->
    <div class="main">
      <div class="text-main">
        <!-- 正文左边 -->
        <div class="main-left">
          <!-- 机构简介模块 -->
          <div class="block-title" id="anchor0">
            <div class="point"></div>
            <div class="point-title">机构简介</div>
          </div>
          <div class="class-synopsis-block">
            <p style="color: #475669;font-size: 14px;"> &nbsp &nbsp &nbsp &nbsp杨梅红艺术教育国际集团创立于2005年，是专业的早期艺术教育全球连锁机构。旗下有杨梅红国际私立美校、杨梅红私立儿童美术馆、杨梅红艺术教育研究所、杨梅红艺术预科学院等分支机构。课程研发中心分别设在美国华盛顿和中国深圳，校区分布在华盛顿、多伦多、巴黎、北京、上海、深圳、台湾等地区。
            </p>
            <br>
            <p style="color: #475669;font-size: 14px;"> &nbsp &nbsp &nbsp &nbsp艾儿思国际教育集团（The EYAS Education Group）起步于2008年，是依托霍顿路米夫林路哈考特（HMHG）集团的全球优质教育资源，引入美国K12原版课程体系，专注为0-18岁的中国孩子提供一站式纯正美式素质教育，并将创造力、想象力、领导力等跨文化综合素养贯彻始终。旗下美国早教美吉姆、美国幼稚园艾儿思，美国小学瑞思学科英语、美国艺术杨梅红私立美校，已成为知名美式教育品牌。</p>
            <br>
            <p style="color: #00C58C;font-size: 14px;"> &nbsp &nbsp &nbsp &nbsp 教育理念： 用艺术启迪智慧。</p>
            <br>
            <p style="color: #475669;font-size: 14px;"> &nbsp &nbsp &nbsp &nbsp 杨梅红艺术教育的核心理念与价值。通过美学规律训练提升判断美的能力；通过创意习惯的训练提高想象与创造的能力；通过审美和创意能力的培养，获得智慧的人生。</p>
            <br>
            <p style="color: #00C58C;font-size: 14px;"> &nbsp &nbsp &nbsp &nbsp 教育目标： 给孩子一个智慧而有品位的人生。</p>
            <br>
            <p style="color: #475669;font-size: 14px;"> &nbsp &nbsp &nbsp &nbsp每个孩子在成长期都应该接受系统的美学教育，无论孩子未来是否将艺术家作为自己的职业。美学教育可以带给孩子审美能力和高品位个人素养，而高品位正是进入成功人生的必经之门。同时，没有什么比艺术教育更能培养孩子的创意思维能力了，有创意思维能力的孩子无论将来在哪个领域都更容易取得成功。用艺术的力量让人类的未来更美好。</p>
            <br>
            <p style="color: #00C58C;font-size: 14px;"> &nbsp &nbsp &nbsp &nbsp 工作理念： 先做艺术家，再做美术老师。</p>
            <br>
            <p style="color: #475669;font-size: 14px;"> &nbsp &nbsp &nbsp &nbsp杨梅红目前拥有全职教师超过1000位，他们都是毕业于世界各个艺术大学的艺术家、动漫画家、时装设计师、艺术教育工作者，共同组成一个活跃的教育团队。各种文化的不断交流和融合，让杨梅红的教学方法始终与世界同步，让杨梅红的团队始终保持无限活力。</p>
            <br>
            <p style="color: #00C58C;font-size: 14px;"> &nbsp &nbsp &nbsp &nbsp 教学理念： 先锋的、快乐的、智慧的。</p>
            <br>
            <p style="color: #475669;font-size: 14px;">&nbsp &nbsp &nbsp &nbsp先锋、实验、探索、新锐；快乐、自由、关爱、愉悦；智慧，启迪、创想、超越。</p>
          </div>
          <!-- 机构简介模块 -->
          <!-- 机构课程模块 -->
          <div class="block-title" id="anchor1">
            <div class="point"></div>
            <div class="point-title">机构课程</div>
          </div>
          <div class="class-curriculum-block">
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column fixed prop="date" label="课程" min-width="120">
              </el-table-column>
              <el-table-column prop="name" label="班级" min-width="120">
              </el-table-column>
              <el-table-column prop="province" label="班型" min-width="120">
              </el-table-column>
              <el-table-column prop="city" label="开课时间" min-width="120">
              </el-table-column>
              <el-table-column prop="address" label="上课老师" min-width="120">
              </el-table-column>
              <el-table-column prop="zip" label="上课地址" min-width="300">
              </el-table-column>
            </el-table>
          </div>
          <!-- 机构课程模块 -->
          <!-- 师资力量模块 -->
          <div class="block-title" id="anchor2">
            <div class="point"></div>
            <div class="point-title">师资力量</div>
          </div>
          <div class="class-teacher-block">
            <div class="class-teacher-list" v-for="teacher in teacherData">
              <div class="class-teacher-img"><img :src="'/data_img/'+teacher.teacher_img"></div>
              <div class="class-teacher-text">
                <p class="class-teacher-name">{{teacher.teacher_name}}</p>
                <p class="class-teacher-education">师资学历：{{teacher.teacher_education}}</p>
                <p class="class-teacher-major">授课专业：{{(teacher.teacher_major).join("、")}}</p>
                <p class="class-teacher-msg">{{teacher.teacher_msg}}</p>
              </div>
            </div>
          </div>
          <!-- 师资力量模块 -->
          <!-- 学员风采展示模块 最多9张-->
          <div class="block-title" id="anchor3">
            <div class="point"></div>
            <div class="point-title">学员风采</div>
          </div>
          <div class="student-img-block">
            <img v-for="img in student_img" :src="'/data_img/'+ img">
          </div>
          <!-- 学员风采展示模块 最多9张-->
          <!-- 环境展示模块 -->
          <div class="block-title" id="anchor4">
            <div class="point"></div>
            <div class="point-title">教学环境</div>
          </div>
          <div class="student-img-block">
            <img v-for="img in room_img" :src="'/data_img/'+ img">
          </div>
          <!-- 环境展示模块 -->
          <!-- 学校地址 -->
          <div class="block-title" id="anchor5">
            <div class="point"></div>
            <div class="point-title">学校地址</div>
          </div>
          <div class="add-map">
            <div class="add-text">
              <p class="text-title">校区名称：</p>
              <p>绘与慧艺术中心</p>
              <p class="text-title">报名电话：</p>
              <p>15041255521</p>
              <p class="text-title">报名地址：</p>
              <p>湖北省武汉市蔡甸区恒大绿洲26栋三单元1001</p>
            </div>
            <div id="container"></div>
          </div>
          <!-- 学校地址 -->
        </div>
        <!-- 正文左边 -->
        <!-- 正文右边 -->
        <div class="main-right">
          <!-- 联系方式 -->
          <div class="contact-way">
            <div class="contact-way-top">
              联系方式
            </div>
            <div class="contact-way-main">
              <p class="text-title">报名电话:</p>
              <p>15041255521</p>
              <p class="text-title">地址:</p>
              <p>湖北省武汉市蔡甸区恒大绿洲26栋三单元1001</p>
            </div>
          </div>
          <!-- 联系方式 -->
          <!-- 广告 -->
          <div class="ad">
            <a href="javascript:;"><img src="/data_img/ad_demo.png"></a>
          </div>
          <!-- 广告 -->
        </div>
        <!-- 正文右边 -->
      </div>
    </div>
    <!-- 正文 -->
  </div>
</template>
<script>
export default {
  //该页面的控制数据
  data() {
    return {
      //table数据
      tableData: [{
        date: '少儿素描',
        name: '小班',
        province: '暑期班',
        city: '8:30-12:00',
        address: '王小虎',
        zip: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '少儿素描',
        name: '小班',
        province: '暑期班',
        city: '8:30-12:00',
        address: '王小虎',
        zip: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '少儿素描',
        name: '小班',
        province: '暑期班',
        city: '8:30-12:00',
        address: '王小虎',
        zip: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '少儿素描',
        name: '小班',
        province: '暑期班',
        city: '8:30-12:00',
        address: '王小虎',
        zip: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '少儿素描',
        name: '小班',
        province: '暑期班',
        city: '8:30-12:00',
        address: '王小虎',
        zip: '上海市普陀区金沙江路 1518 弄'
      }, ],
      //老师数据
      teacherData: [{
        teacher_img: 'teacher1.png',
        teacher_name: 'TIMI老师',
        teacher_education: '湖北美术学院油画系研究生',
        teacher_major: ['少儿美术', '手工制作'],
        teacher_msg: '希望所有孩子们能有一个快乐的童年，快乐学习，快乐绘画。让孩子在快乐的氛围中自由的发挥想象，真正能做到以我手画我心。'
      }, {
        teacher_img: 'teacher2.png',
        teacher_name: '王小虎',
        teacher_education: '湖北美术学院油画系研究生',
        teacher_major: ['少儿美术', '手工制作'],
        teacher_msg: '希望所有孩子们能有一个快乐的童年，快乐学习，快乐绘画。让孩子在快乐的氛围中自由的发挥想象，真正能做到以我手画我心。'
      }, {
        teacher_img: 'teacher3.png',
        teacher_name: 'mango老师',
        teacher_education: '湖北美术学院油画系研究生',
        teacher_major: ['少儿美术', '手工制作'],
        teacher_msg: '希望所有孩子们能有一个快乐的童年，快乐学习，快乐绘画。让孩子在快乐的氛围中自由的发挥想象，真正能做到以我手画我心。'
      }, ],
      //学员风采照片
      student_img: ['student1.png', 'student2.png', 'student3.png', 'student4.png', 'student5.png', 'student6.png', 'student1.png', 'student2.png', 'student3.png'],
      //教学环境照片
      room_img: ['room1.png', 'room2.png', 'room3.png', ],
    }
  },
  //路由参数校验
  validate({ params, query }) {
    // Must be a number
    //return /^\d+$/.test(params.id)
    //console.log(params.class)
    //console.log(decodeURI(query.name))
    return true
  },
  //父控件传过来的参数
  props: {

  },
  computed: {

  },
  //监听函数
  wacth: {

  },
  //进入页面执行的函数
  mounted() {
    this.coderAdd();
  },
  //定义函数
  methods: {
    //锚点定位
    goAnchor(selector) {
      var anchor = this.$el.querySelector(selector);
      // console.log(anchor.offsetTop);
      document.documentElement.scrollTop = anchor.offsetTop - 80;
      document.body.scrollTop = anchor.offsetTop - 80;
    },
    //加载地图
    init(X, Y) {
      //定义地图打开坐标
      let center = new qq.maps.LatLng(X, Y);
      let map = new qq.maps.Map(document.getElementById('container'), {
        center: center,
        zoom: 16
      });
    },

    //当前地址解析
    coderAdd() {
      let geocoder = new qq.maps.Geocoder();
      let address = "湖北省武汉市蔡甸区恒大绿洲26栋三单元1001"
      let self = this;
      geocoder.getLocation(address);

      //设置服务请求成功的回调函数
      geocoder.setComplete(function(result) {
        //map.setCenter(result.detail.location);  
        //console.log("服务请求成功" + result.detail.location.lat)
        self.coordinateX = result.detail.location.lat
        self.coordinateY = result.detail.location.lng

        self.init(result.detail.location.lat, result.detail.location.lng);

      });
      //若服务请求失败，则运行以下函数
      geocoder.setError(function() {
        alert("出错了，请输入正确的地址！！！");
      });
    },
  },
  //增加控件
  components: {

  }
}

</script>
<style scoped>
.detail-block {
  padding-top: 80px;
  background: #F5F7FA;
  overflow: hidden;
}










/*顶部LOGO栏*/

.class-top {
  height: 100px;
  background: #fff;
  display: flex;
  justify-content: center;
}

.class-top-block {
  width: 1280px;
  background-image: url(~/assets/img/class_detail_top.jpg);
  background-size: auto 100%;
  display: flex;
  align-items: center;
  background-position: right;
}

.class-top-logo {
  width: 80px;
  height: 80px;
  background: red;
}

.class-top-logo img {
  width: 100%;
}

.class-top-block p {
  color: #475669;
  font-size: 32px;
  font-weight: 500;
  margin-left: 20px;
}




/*顶部LOGO栏*/


/*菜单栏*/

.class-tab {
  /*height: 44px;*/
  background: #00C58C;
  display: flex;
  justify-content: center;
}

.tab-bar-pc {
  width: 1280px;
  height: 100%;
  -webkit-padding-start: 0;
}



.tab-bar-pc li {
  /*padding: 0 10px;*/
  width: 120px;
  text-align: center;
  color: #fff;
  height: 44px;
  line-height: 44px;
  /*margin-right: 10px;*/
  display: inline-block;
  transition: all 0.3s ease-out 0s;
}

.tab-bar-pc li:hover {
  background: #11A57A;
  transition: all 0.3s ease-out 0s;
}

.tab-bar-mobile {
  display: none;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
}

.active {
  /*color: #fff;*/
  /*border-bottom: 2px solid #F8E71C;*/
}




/*菜单栏*/


/*培训班广告*/

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #20A0FF;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}












/*培训班广告*/


/*正文*/

.main {
  /*  display: flex;
  justify-content: center;*/
  background: #F5F7FA;
}

.text-main {
  width: 1280px;
  padding: 0 10px;
  display: block;
  margin: 20px auto 0;
  background: #F5F7FA;
  overflow: hidden;
}












/*正文左边*/

.main-left {
  width: 960px;
  float: left;
  border-radius: 4px;
  background: #fff;
  padding: 20px;
  margin-bottom: 40px;
}












/*模块标题*/

.block-title {
  display: flex;
  align-items: center;
  margin: 40px 0;
}

.point {
  width: 4px;
  height: 16px;
  background: #00C58C;
  border-radius: 4px;
}

.point-title {
  color: #475669;
  margin-left: 10px;
  font-size: 18px;
  font-weight: 400;
}












/*机构简介*/

.class-synopsis-block {}







/*机构课程*/

.class-curriculum-block {}







/*师资力量*/

.class-teacher-list {
  display: flex;
  margin: 20px 0;
}

.class-teacher-img {}

.class-teacher-img img {
  width: 120px;
  height: 120px;
  border-radius: 80px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.class-teacher-text {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin-left: 20px;
}

.class-teacher-name {
  font-size: 18px;
  color: #475669;
}

.class-teacher-education {
  font-size: 14px;
  color: #475669;
}

.class-teacher-major {
  font-size: 14px;
  color: #475669;
}

.class-teacher-msg {
  font-size: 14px;
  color: #475669;
}

.class-teacher-text p {
  margin: 0;
}










/*学员风采模块*/

.student-img-block {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.student-img-block img {
  width: 300px;
  height: 200px;
  margin-right: 5px;
  margin-bottom: 5px;
}









/*学校地址模块*/

.add-text {
  color: #475669;
  font-size: 14px;
}

.add-text p {
  margin: 10px 0;
}

#container {
  width: 100%;
  height: 400px;
}







/*正文右边*/

.main-right {
  float: right;
  padding-right: 10px;
}









/*联系方式模块*/

.contact-way {
  width: 280px;
  background: #fff;
  border-radius: 4px;
}

.contact-way-top {
  height: 44px;
  background: #00C58C;
  color: #fff;
  line-height: 44px;
  font-size: 18px;
  padding-left: 20px;
  border-radius: 4px 4px 0 0;
}

.contact-way-main {
  padding: 10px 20px;
  font-size: 14px;
  color: #475669;
}

.contact-way-main p {
  margin: 10px 0;
}

.text-title {
  color: #8492A6;
}








/*右浮动广告模块*/

.ad {
  width: 280px;
  margin-top: 20px;
}

.ad img {
  width: 100%;
  border-radius: 4px;
}









/*当屏幕尺寸小于1024px时，应用下面的CSS样式*/

@media screen and (max-width: 1024px) {

  .tab-bar-pc {
    display: none;
  }
  .tab-bar-mobile {
    -webkit-padding-start: 0;
    width: 100%;
    display: -webkit-box;

    padding-left: 10px;
  }
  .tab-bar-mobile li {
    width: 120px;
    text-align: center;
    color: #fff;
    height: 44px;
    line-height: 44px;
    transition: all 0.3s ease-out 0s;
  }
  /*正文*/
  .text-main {
    width: 100%;
  }
  /*正文左边*/
  .main-left {
    width: 100%;
  }
  /*学员风采*/
  .student-img-block img {}
  /*正文右边*/
  .main-right {
    display: none;
  }
}








/*当屏幕尺寸小于769px时，应用下面的CSS样式*/

@media screen and (max-width: 769px) {
   ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  .class-top-block {
    width: 100%;
    padding-left: 10px;
  }
  .tab-bar-pc {
    display: none;
  }
  .tab-bar-mobile {
    -webkit-padding-start: 0;
    width: 100%;
    display: -webkit-box;

    padding-left: 10px;
  }
  .tab-bar-mobile li {
    width: 120px;
    text-align: center;
    color: #fff;
    height: 44px;
    line-height: 44px;
    transition: all 0.3s ease-out 0s;
  }
  /*正文*/
  .text-main {
    width: 100%;
  }
  /*正文左边*/
  .main-left {
    width: 100%;
  }
  /*学员风采*/
  .student-img-block img {
    width: 100%;
    height: 100%;
  }
  /*正文右边*/
  .main-right {
    display: none;
  }
}

</style>
