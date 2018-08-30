<template>
  <section class="container">
    <div class="index-mian">
      <scroll-bar></scroll-bar>
      <banner/>
      <!-- 培优分类 -->
      <div class="block_title">
        <div style="display:flex;align-items:center;">
          <img src="img/triangle_icon.svg" alt="">
          <span class="title_text">培</span>
          <span class="title_cut">/</span>
          <span class="title_text">优</span>
          <span class="title_cut">/</span>
          <span class="title_text">分</span>
          <span class="title_cut">/</span>
          <span class="title_text">类</span>
          <img src="img/triangle_icon.svg" alt="" style="transform:scaleX(-1);">
        </div>
      </div>
      <div class="block">
        <div class="block_body">
          <a class="block-child" href="javascript:;" @click="openMapList('音乐')"><img data-original="~/assets/img/music_train.png" src="~/assets/img/music_train.png" alt=""></a>
          <a class="block-child" href="javascript:;" @click="openMapList('美术')"><img data-original="~/assets/img/art_train.png" src="~/assets/img/art_train.png" alt=""></a>
          <a class="block-child" href="javascript:;" @click="openMapList('舞蹈')"><img data-original="~/assets/img/dance_train.png" src="~/assets/img/dance_train.png" alt=""></a>
          <a class="block-child" href="javascript:;" @click="openMapList('文化')"><img data-original="~/assets/img/study_train.png" src="~/assets/img/study_train.png" alt=""></a>
          <a class="block-child" href="javascript:;" @click="openMapList('主持')"><img data-original="~/assets/img/host_train.png" src="~/assets/img/host_train.png" alt=""></a>
          <a class="block-child" href="javascript:;" @click="openMapList('书法')"><img data-original="~/assets/img/calligraphy_train.png" src="~/assets/img/calligraphy_train.png" alt=""></a>
          <a class="block-child" href="javascript:;" @click="openMapList('体育')"><img data-original="~/assets/img/sports_train.png" src="~/assets/img/sports_train.png" alt=""></a>
          <a class="block-child" href="javascript:;" @click="openMapList('外语')"><img data-original="~/assets/img/foreignLanguage_train.png" src="~/assets/img/foreignLanguage_train.png" alt=""></a>
        </div>
      </div>
      <!-- 培优分类 -->
      <!-- 附近好班 -->
      <div class="block_title">
        <div style="display:flex;align-items:center;">
          <img src="~/assets/img/square_icon.svg" alt="">
          <span class="title_text">推</span>
          <span class="title_cut">/</span>
          <span class="title_text">荐</span>
          <span class="title_cut">/</span>
          <span class="title_text">好</span>
          <span class="title_cut">/</span>
          <span class="title_text">班</span>
          <img src="~/assets/img/square_icon.svg" alt="" style="transform:scaleX(-1);">
        </div>
      </div>
      <!-- 附近培优推荐 -->
      <div class="nearby" @click="openMapList('全部')">
        <div class="nearby_left">
          <img class="nearby_icon" src="~/assets/img/nearby_icon.svg" alt="">
          <p class="nearby_community">{{location.city}}{{location.district}}</p>
          <p class="nearby_text">推荐<a href="javascript:;">{{train_list.length}}2</a>家培优班</p>
        </div>
        <div class="nearby_right">
          <a href="javascript:;">
          <img class="nearby_shop shop1" data-original="~/assets/data_img/shop1.png" src="~/assets/data_img/shop1.png" alt="">
          <img class="nearby_shop shop2" data-original="~/assets/data_img/shop2.png" src="~/assets/data_img/shop2.png" alt="">
          <img class="nearby_shop shop3" data-original="~/assets/data_img/shop3.png" src="~/assets/data_img/shop3.png" alt="">
          </a>
        </div>
      </div>
      <!-- 附近培优推荐 -->
      <div class="recommend">
        <div class="recommend_list" v-for="item in showTrain_list" @click="openDetail(item)">
          <div class="list_img">
            <div>
              <img :data-original="'data_img/'+item.train_img" :src="'data_img/' + item.train_img" alt="">
            </div>
            <div class="list_text">
              <p class="recommend_name"><a href="javascript:;">{{item.train_name}}</a></p>
              <p class="recommend_main recommend_text">主营：<span>{{(item.train_main).join("、")}}</span></p>
              <p class="recommend_course recommend_text secondary">课程：<span>{{(item.train_course).join("、")}}</span></p>
              <p class="recommend_tel recommend_text">电话：<span>{{item.train_tel}}</span></p>
              <p class="recommend_add recommend_text">地址：<span>{{item.train_add}}</span></p>
              <!-- <p class="recommend_nearby_text main_none">100m以内</p> -->
            </div>
          </div>
          <div class="recommend_right">
            <p class="recommend_nearby_text"></p>
            <a href="javascript:;">
              <div class="recommend_btn">查看详情</div>
            </a>
          </div>
        </div>
      </div>
      <!-- 附近好班 -->
      <!-- 翻页控件 -->
      <div class="pagination">
        <div class="pc-page">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[count]" layout="total, sizes, prev, pager, next, jumper" :total="train_list.length">
          </el-pagination>
        </div>
        <div class="mobile-page">
          <div class="pageing-btn" :class="{pageactive:(currentPage - 1 > 0)}" @click="pageingTop">上一页</div>
          <div class="pageing-btn" :class="{pageactive:(count * (currentPage + 1) <= train_list.length)}" @click="pageingBottom">下一页</div>
        </div>
      </div>
      <!-- 翻页控件 -->
    </div>
  </section>
</template>
<script>
import ScrollBar from '~/components/Scroll_bar.vue'
import banner from '~/components/banner.vue'

export default {
  head() {
    return {
      title: '有爱培优--【蔡甸培优平台】，找培训，上有爱。蔡甸培训。',

    }
  },
  data() {
    return {
      //用户当前地址
      location: "",
      //翻页控件，默认选择页
      currentPage: 1,
      //每页条数
      count: 3,
      //展示培训班列表
      showTrain_list: [],
      //培训班列表数据
      train_list: [{
          train_img: "shop1.png",
          train_name: "杨梅红国际私立美术学校",
          train_tel: "027-88888881",
          train_add: "湖北省武汉市蔡甸区中法生态城恒大绿洲16栋三单元1001",
          train_main: ["美术", "音乐"],
          train_course: ["少儿素描", "少儿色彩", "手工艺制作", "国画", "工笔画", "白描"],
          train_co: {
            lat: 30.58353,
            lng: 114.18830
          },
        },
        {
          train_img: "shop2.png",
          train_name: "杨梅红国际私立美术学校",
          train_tel: "027-88888882",
          train_add: "湖北省武汉市蔡甸区中法生态城恒大绿洲11栋",
          train_main: ["美术", "音乐"],
          train_course: ["少儿素描", "少儿色彩", "手工艺制作", "国画", "工笔画", "白描"],
          train_co: {
            lat: 30.58323,
            lng: 114.08830
          },
        },
        {
          train_img: "shop3.png",
          train_name: "杨梅红国际私立美术学校",
          train_tel: "027-88888883",
          train_add: "湖北省武汉市蔡甸区中法生态城恒大绿洲10栋三单元1001",
          train_main: ["美术", "音乐"],
          train_course: ["少儿素描", "少儿色彩", "手工艺制作", "国画", "工笔画", "白描"],
          train_co: {
            lat: 30.58315,
            lng: 114.08936
          },
        },
        {
          train_img: "shop1.png",
          train_name: "杨梅红国际私立美术学校",
          train_tel: "027-88888884",
          train_add: "湖北省武汉市蔡甸区中法生态城恒大绿洲5栋三单元1001",
          train_main: ["美术", "音乐"],
          train_course: ["少儿素描", "少儿色彩", "手工艺制作", "国画", "工笔画", "白描"],
          train_co: {
            lat: 30.58423,
            lng: 114.08930
          },
        },
        {
          train_img: "shop2.png",
          train_name: "杨梅红国际私立美术学校",
          train_tel: "027-88888885",
          train_add: "湖北省武汉市蔡甸区中法生态城恒大绿洲20栋",
          train_main: ["美术", "音乐"],
          train_course: ["少儿素描", "少儿色彩", "手工艺制作", "国画", "工笔画", "白描"],
          train_co: {
            lat: 30.58314,
            lng: 114.08933
          },
        },
        {
          train_img: "shop2.png",
          train_name: "杨梅红国际私立美术学校",
          train_tel: "027-88888886",
          train_add: "湖北省武汉市蔡甸区中法生态城恒大绿洲20栋",
          train_main: ["美术", "音乐"],
          train_course: ["少儿素描", "少儿色彩", "手工艺制作", "国画", "工笔画", "白描"],
          train_co: "",
        }
      ],
    }
  },
  //父控件传过来的参数
  props: {
    bodyWidth: {
      type: Number,
      default: 1440
    },
  },

  created() {
    //判断显示的列表
    this.gettrianList()
  },
  mounted() {
    //给顶部栏选项赋值1，选择首页
    this.$store.commit('updateNavBarActive', '1');
    //IP定位
    this.getLocation();
  },
  methods: {
    //获取培训班详情列表
    gettrianList() {
      let params = new URLSearchParams();
      params.append('from', '');
      this.$store.dispatch('trainlingList', params).then((response) => {
        let res = response.data;
        if (response.statusText === "OK" && response.status === 200) {
          console.log(res);
        } else {
          alert("网络错误")
        }
      }).catch((err) => {
        alert("网络连接错误")
      });
    },
    //ip定位
    getLocation() {
      //this.params.touser = this.$store.state.userNameList;
      let params = "";
      this.$store.dispatch('getLocation', params).then((response) => {
        let res = response.data;
        if (response.statusText === "OK" && response.status === 200) {
          //console.log(res);
          this.location = res.result.ad_info;

        } else {
          alert("网络错误")
        }
      }).catch((err) => {
        console.error(err);
      });
    },

    //进入详情
    openDetail(item) {
      let self = this;
      self.$store.commit('updateNavBarActive', '2');
      let id = encodeURI(item.id)
      let name = encodeURI("你好")
      self.$router.push({ path: '/mapList/' + id, query: { name: name } });
    },

    //判断要展示的培训班列表
    judgeshowTrain_list() {
      this.showTrain_list = []
      for (var i = this.count * this.currentPage - 1; i >= (this.currentPage - 1) * this.count; i--) {
        this.showTrain_list.unshift(this.train_list[i])
      }
      //console.log(this.showTrain_list);
    },
    //进入地图列表页
    openMapList(title) {
      let self = this;
      this.showMenu = false;
      self.$store.commit('updateNavBarActive', '2');
      //let ptitle = encodeURI(title)
      self.$router.push({ path: '/mapList', query: { title: title } });
    },
    //翻页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val
      this.judgeshowTrain_list()
    },

    //移动端翻页
    pageingTop() {
      //当前在第几页 this.currentPage
      if (this.currentPage - 1 > 0) {
        this.handleCurrentChange(this.currentPage - 1)
      }
    },

    pageingBottom() {
      if (this.count * (this.currentPage + 1) <= this.train_list.length) {
        this.handleCurrentChange(this.currentPage + 1)
      }

    },
  },
  components: {
    ScrollBar,
    banner,
  }
}

</script>
<style>
/*引入样式*/

@import '~/assets/css/index.css';

</style>
