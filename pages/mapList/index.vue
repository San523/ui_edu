<!-- 附近培优 -->
<template>
  <div class="map-list">
    <!-- <scroll-bar/> -->
    <!-- 地图控件 -->
    <div class="map-box">
      <!--   定义地图显示容器   -->
      <div id="container">
        <div class="locationIcon" v-if="isLoction">
        </div>
        <!--         <div class="PositionIcon" id="PositionIcon" v-if="false" @click="getLocation">
          <img src="data_img/mypos.svg">
        </div> -->
      </div>
      <div class="location_add">
        <div class="location_box">
          <p class="location_name">{{add_input}}</p>
          <p class="location_text">附近有 <span>{{train_Colist.length}}</span> 家培训班 |
            <a href="javascript:;" @click="show_input=!show_input"><span>点击修改</span></a>
            <br>
          </p>
          <div class="input" v-if="show_input">
            <input type="text" v-model="add_input" name="" @keyup.enter="re_location">
            <div class="ok_btn" @click="re_location()"><a href="javascript:;">确定</a></div>
            <div class="miss_btn" @click="show_input=!show_input"><a href="javascript:;">取消</a></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 地图控件 -->
    <!-- 分类标题列表 -->
    <div class="classify-block">
      <!-- PC端分类列表标题控件 -->
      <div class="classify-box">
        <a href="javascript:;">
          <div v-for="(title,index) in classify_title" @click="classifyList(title)" :class="{'active':classify_title_active==title}" class="classify-btn">{{title}}</div>
        </a>
      </div>
      <!-- PC端分类列表标题控件 -->
      <!-- 移动端分类列表标题控件 -->
      <div class="slide-box">
        <div class="slide-item" :id="title+index" v-for="(title,index) in classify_title" @click="classifyList(title)" :class="{'active':classify_title_active==title}">{{title}}</div>
      </div>
      <!-- 移动端分类列表标题控件 -->
    </div>
    <!-- 分类标题列表 -->
    <!-- 培训班列表 -->
    <div class="recommend">
      <div class="recommend_list" v-for="item in showTrain_list" @click="openDetail(item)">
        <div class="list_img">
          <div>
            <img :data-original="'data_img/'+item.t_logo" :src="'data_img/' + item.t_logo" alt="">
          </div>
          <div class="list_text">
            <p class="recommend_name"><a href="javascript:;">{{item.t_name}}</a></p>
            <p class="recommend_main recommend_text">主营：<span>{{(item.train_main).join("、")}}</span></p>
            <p class="recommend_course recommend_text secondary">课程：<span>{{(item.train_course).join("、")}}</span></p>
            <p class="recommend_tel recommend_text">电话：<span>{{item.t_phone}}</span></p>
            <p class="recommend_add recommend_text">地址：<span>{{item.t_address}}</span></p>
            <p class="recommend_nearby_text main_none distance">{{item.fujinDis}}m</p>
          </div>
        </div>
        <div class="recommend_right">
          <span v-if="item.isfujin" class="fujin">在你附近</span>
          <p class="recommend_nearby_text"></p>
          <a href="javascript:;">
            <div class="recommend_btn">查看详情</div>
          </a>
        </div>
      </div>
    </div>
    <!-- 培训班列表 -->
    <!-- 翻页控件 -->
    <div class="pagination">
      <div class="pc-page">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[count]" layout="total, sizes, prev, pager, next, jumper" :total="showAllTrain_list.length">
        </el-pagination>
      </div>
      <div class="mobile-page">
        <div class=" pageing-btn " :class="{pageactive:(currentPage - 1 > 0&&showAllfujiTrain_list.length!=0)}" @click="pageingTop">上一页</div>
        <div class="pageing-btn" :class="{pageactive:(count * (currentPage + 1) <= showAllfujiTrain_list.length)}" @click="pageingBottom">下一页</div>
      </div>
    </div>
    <!-- 翻页控件 -->
  </div>
</template>
<script type="text/javascript">
import ScrollBar from '~/components/Scroll_bar.vue'
export default {
  head() {
    return {
      title: '有爱培优--【蔡甸培训平台】，查找附近培训班。'
    }
  },
  //该页面的控制数据
  data() {
    return {
      //显示输入框
      show_input: false,
      add_input: "",
      //用户当前地址
      location: "",
      //是否显示定位
      isLoction: false,
      isPosition: false,
      //用户当前坐标
      co: "",
      //当前横纵坐标
      coordinateX: 0,
      coordinateY: 0,
      //翻页控件，默认选择页
      currentPage: 1,
      //每页条数
      count: 3,
      //筛选分类标题列表
      classify_title: ["全部", "音乐", "美术", "舞蹈", "文化", "主持", "书法", "体育", "外语"],
      //筛选分类标题选中
      classify_title_active: typeof(this.$route.query.title) == "undefined" ? "全部" : this.$route.query.title,
      //当前展示的所有列表
      showAllTrain_list: [],
      //当前展示培训班列表
      showTrain_list: [],
      //附近培训班列表
      train_Colist: [],
      //所有要显示的非附近列表
      showAllfujiTrain_list: [],
      //当前展示的附近培训班列表
      showfujinTrain_list: [],
      //所有要展示的列表中除去附近培训班列表
      showAllExfujinTrain_list: [],
      //当前展示的列表中除去附近培训班列表
      showExfujinTrain_list: [],
      //培训班列表数据
      train_list: [{
          t_logo: "shop1.png",
          id: "GKfwe000001",
          t_name: "美术学校1",
          t_phone: "027-88888881",
          t_address: "湖北省武汉市街道口",
          train_main: ["美术", "音乐"],
          train_course: ["少儿素描", "少儿色彩", "手工艺制作", "国画", "工笔画", "白描"],
          t_latlng: {
            lat: 30.527540,
            lng: 114.346430
          },
        },
        {
          t_logo: "shop2.png",
          id: "0000002",
          t_name: "东风设计研究院2",
          t_phone: "027-88888882",
          t_address: "湖北省武汉市蔡甸区中法生态城恒大绿洲11栋",
          train_main: ["美术", "舞蹈"],
          train_course: ["少儿素描", "少儿色彩", "手工艺制作", "国画", "工笔画", "白描"],
          t_latlng: {
            lat: 30.505530,
            lng: 114.163440
          },
        },
        {
          t_logo: "shop3.png",
          id: "0000003",
          t_name: "江汉大学3",
          t_phone: "027-88888883",
          t_address: "湖北省武汉市蔡甸区中法生态城恒大绿洲10栋三单元1001",
          train_main: ["舞蹈", "文化"],
          train_course: ["少儿素描", "少儿色彩", "手工艺制作", "国画", "工笔画", "白描"],
          t_latlng: {
            lat: 30.510020,
            lng: 114.160400
          },
        },
        {
          t_logo: "shop1.png",
          id: "0000004",
          t_name: "经开万达4",
          t_phone: "027-88888884",
          t_address: "湖北省武汉市蔡甸区中法生态城恒大绿洲5栋三单元1001",
          train_main: ["文化", "主持"],
          train_course: ["少儿素描", "少儿色彩", "手工艺制作", "国画", "工笔画", "白描"],
          t_latlng: {
            lat: 30.506768,
            lng: 114.173852
          },
        },
        {
          t_logo: "shop2.png",
          id: "0000005",
          t_name: "杨梅红国际私立美术学校5",
          t_phone: "027-88888885",
          t_address: "湖北省武汉市蔡甸区中法生态城恒大绿洲20栋",
          train_main: ["主持", "书法"],
          train_course: ["少儿素描", "少儿色彩", "手工艺制作", "国画", "工笔画", "白描"],
          t_latlng: {
            lat: 30.583231,
            lng: 114.088305
          },
        },
        {
          t_logo: "shop2.png",
          id: "0000006",
          t_name: "杨梅红国际私立美术学校6",
          t_phone: "027-88888886",
          t_address: "湖北省武汉市蔡甸区中法生态城恒大绿洲20栋",
          train_main: ["美术", "音乐"],
          train_course: ["少儿素描", "少儿色彩", "手工艺制作", "国画", "工笔画", "白描"],
          t_latlng: {
            lat: "",
            lng: ""
          },
        }
      ],
    }
  },
  //父控件传过来的参数
  props: {

  },
  //监听函数
  watch: {

  },
  created() {
    
  },
  //进入页面执行的函数
  mounted() {
    //给顶部栏选项赋值2，选择列表页
    this.$store.commit('updateNavBarActive', '2');
    this.ifhasRepeat(); //判断位置是否重复
    this.getLocation(); //定位到当前位置
  },
  //定义函数
  methods: {



    //判断列表坐标过近时判断差值
    ifhasRepeat() {
      for (var i = this.train_list.length - 1; i >= 0; i--) {
        //console.log(i)
        var targetNode = this.train_list[i];
        for (var j = 0; j < i; j++) {
          let dis = this.getFlatternDistance(targetNode.t_latlng.lat, targetNode.t_latlng.lng, this.train_list[j].t_latlng.lat, this.train_list[j].t_latlng.lng)
          if (isNaN(dis) || dis < 100) {
            //console.log(dis)
            this.train_list[j].t_latlng.lat = parseFloat(this.train_list[j].t_latlng.lat) + 0.0001
            this.train_list[j].t_latlng.lng = parseFloat(this.train_list[j].t_latlng.lng) + 0.0001
          }
        }
      }
    },
    //定位到当前位置
    getLocation() {
      this.isLoction = false
      //判断是否为移动设备
      if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|ios)/i)) {
        let self = this
        var geolocation = new qq.maps.Geolocation("NQVBZ-V6MK5-DA5IP-QQEZW-KD26V-QLB2Z", "myapp");
        geolocation.getLocation(function(position) {
          //alert(JSON.stringify(position))
          self.location = position
          self.add_input = position.city + position.addr
          self.coordinateX = position.lat
          self.coordinateY = position.lng
          //self.init(position.lat, position.lng);
          self.judgeAroudClass(position.lat, position.lng) //判断附近的班级
          //self.judgeAroudClass() //判断要展示的班级
        }, null)
      } else {
        let params = "";
        this.$store.dispatch('getLocation', params).then((response) => {
          let res = response.data;
          if (response.statusText === "OK" && response.status === 200) {
            //console.log(res);
            this.location = res.result.ad_info;
            this.add_input = this.location.city + this.location.district
            this.coordinateX = res.result.location.lat
            this.coordinateY = res.result.location.lng
            //this.init(res.result.location.lat, res.result.location.lng);
            this.judgeAroudClass(res.result.location.lat, res.result.location.lng) //判断附近的班级
          } else {
            alert("网络错误")
          }
        }).catch((err) => {
          console.error(err);
        });
      }


    },

    //判断附近的班级
    judgeAroudClass(X, Y) {
      this.train_Colist = []
      for (var i = this.train_list.length - 1; i >= 0; i--) {
        let fujinDis = this.getFlatternDistance(this.train_list[i].t_latlng.lat, this.train_list[i].t_latlng.lng, this.coordinateX, this.coordinateY)
        this.train_list[i].fujinDis = parseInt(fujinDis)
        if (fujinDis < 10000) {
          this.train_list[i].isfujin = true
          this.train_Colist.unshift(this.train_list[i])
          //self.train_Colist.splice(i,1)
        } else {
          this.train_list[i].isfujin = false
        }
      }

      this.judgeshowTrain_list()
      this.init(X, Y)
    },
    //判断要展示的培训班列表
    judgeshowTrain_list() {
      this.showAllExfujinTrain_list = []
      this.showAllTrain_list = []
      this.showTrain_list = []

      if (this.classify_title_active == "全部") {
        this.showAllfujiTrain_list = this.train_list
        this.showExfujinTrain_list = this.train_Colist
      } else {
        this.showAllfujiTrain_list = []
        this.showExfujinTrain_list = []
        for (var k = this.train_list.length - 1; k >= 0; k--) {
          for (var n = this.train_list[k].train_main.length - 1; n >= 0; n--) {
            if (this.train_list[k].train_main[n] == this.classify_title_active) {
              this.showAllfujiTrain_list.unshift(this.train_list[k])
            }
          }
        }
        for (var k2 = this.train_Colist.length - 1; k2 >= 0; k2--) {
          for (var n2 = this.train_Colist[k2].train_main.length - 1; n2 >= 0; n2--) {
            if (this.train_Colist[k2].train_main[n2] == this.classify_title_active) {
              this.showExfujinTrain_list.unshift(this.train_Colist[k2])
            }
          }
        }
      }

      //console.log(this.showExfujinTrain_list)

      for (var c = this.showAllfujiTrain_list.length - 1; c >= 0; c--) {
        let isIn = false
        for (var m = this.train_Colist.length - 1; m >= 0; m--) {
          if (this.train_Colist[m].id == this.showAllfujiTrain_list[c].id) {
            //this.showAllfujiTrain_list.splice(c,1)
            isIn = true
          }
        }
        if (!isIn) {
          this.showAllExfujinTrain_list.unshift(this.showAllfujiTrain_list[c])
        }
      }

      //console.log(this.showAllExfujinTrain_list)
      //合并排序后的附近与非附近
      if (this.showExfujinTrain_list.length == 0) {
        this.showAllTrain_list = this.showAllExfujinTrain_list
      } else if (this.showAllExfujinTrain_list.length == 0) {
        this.showAllTrain_list = this.showExfujinTrain_list
      } else {
        this.showAllTrain_list = this.showExfujinTrain_list.concat(this.showAllExfujinTrain_list)
      }

      let allnum = 0 //本页展示的条数
      if (this.showAllTrain_list.length < this.count * this.currentPage) {
        allnum = this.showAllTrain_list.length
      } else {
        allnum = this.count * this.currentPage
      }

      for (var i = allnum - 1; i >= (this.currentPage - 1) * this.count; i--) {
        if (this.classify_title_active != "全部") {
          for (var j = this.showAllTrain_list[i].train_main.length - 1; j >= 0; j--) {
            if (this.showAllTrain_list[i].train_main[j] == this.classify_title_active) {
              this.showTrain_list.unshift(this.showAllTrain_list[i])
            }
          }
        } else {
          this.showTrain_list.unshift(this.showAllTrain_list[i])
        }
      }

      // console.log(this.showAllTrain_list)
    },


    //加载地图
    init(X, Y) {
      this.coordinateX = X
      this.coordinateY = Y
      //定义地图打开坐标
      let center = new qq.maps.LatLng(X, Y);
      let map = new qq.maps.Map(document.getElementById('container'), {
        center: center,
        zoom: 14
      });

      this.isLoction = true
      this.isPosition = true


      //创建自定义定位图标
      var middleControl = document.createElement("div");

      middleControl.style.width = "40px";
      middleControl.style.height = "40px";
      middleControl.style.zIndex = "100000";
      middleControl.style.background = "rgba(255, 255, 255, 1)";
      middleControl.style.boxShadow = "0px 0px 8px  rgba(0, 0, 0, 0.5)";
      middleControl.style.borderRadius = "4px";
      middleControl.style.display = "flex";
      middleControl.style.justifyContent = "center";
      middleControl.style.alignItems = "center";
      middleControl.style.margin = "10px 10px";
      middleControl.innerHTML = '<img src="data_img/mypos.svg" />';
      middleControl.onclick = this.getLocation;

      //添加返回当位置图标
      let PositionIcon = document.getElementById("PositionIcon")
      if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|ios)/i)) {
        map.controls[qq.maps.ControlPosition.BOTTOM_LEFT].push(middleControl);
      } else {
        map.controls[qq.maps.ControlPosition.BOTTOM_RIGHT].push(middleControl);
      }
      // this.judgeshowTrain_list(); //判断显示的列表
      let self = this;
      //添加监听事件
      qq.maps.event.addListener(map, 'click', function() {
        //alert('您点击了地图.');
      });

      //添加开始拖动地图事件
      // qq.maps.event.addListener(map, 'dragstart', function() {
      //   self.isLoction = false
      // });

      //添加停止拖动地图事件
      qq.maps.event.addListener(map, 'dragend', function() {
        self.isLoction = false

        setTimeout(() => {
          self.isLoction = true
        }, 50)
      });


      //添加到提示窗
      let info = new qq.maps.InfoWindow({
        map: map
      });

      //经纬度一致时改变经纬度以防图标重叠

      //循环获取培训班列表地址，并加载到地图中去
      for (let i = 0; i < this.train_Colist.length; i++) {
        let trainMeg = []

        trainMeg.push({
          t_name: this.train_Colist[i].t_name,
          train_main: this.train_Colist[i].train_main.join("、")
        })
        //获取培训班地址
        let address = this.train_Colist[i].t_address;
        //获取培训班坐标
        let latLng = this.train_Colist[i].t_latlng;
        //将坐标转换为腾讯坐标latLng
        let location = new qq.maps.LatLng(latLng.lat, latLng.lng);
        //获取培训班图片
        let img = this.train_Colist[i].t_logo;

        if (latLng.lat == "" || latLng.lng == "") {
          //alert(i)
          //调用地址解析类
          let geocoder = new qq.maps.Geocoder();
          geocoder.getLocation(address);
          //设置服务请求成功的回调函数
          geocoder.setComplete(function(result) {
            location = result.detail.location;
            //console.log(i)
            self.train_Colist[i].t_latlng.lat = location.lat
            self.train_Colist[i].t_latlng.lng = location.lng
            self.create_train(map, location, img, trainMeg[0], self.train_Colist[i])
            //创建培训班地点;
          });
        } else {
          this.create_train(map, location, img, trainMeg[0], this.train_Colist[i])
        }

      };
    },

    //创建培训班地点
    create_train(map, location, img, trainMeg, item) {
      //创建覆盖物
      //console.log(trainMeg.t_name);
      let marker = new qq.maps.Marker({
        map: map,
        position: location,
        //设置可拖动
        //draggable: true,
      });
      //添加到提示窗
      var info = new qq.maps.InfoWindow({
        map: map
      });
      let self = this;
      //获取标记的点击事件
      qq.maps.event.addListener(marker, 'click', function() {
        //alert("跳到详情页面");
        self.openDetail(item)
      });
      //监听鼠标hover到覆盖物事件
      qq.maps.event.addListener(marker, "mouseover", function() {
        //alert("您执行了mouseover事件");
        info.open();
        info.setContent('<div style="white-space:nowrap;margin:10px;">' + '<p>' + trainMeg.t_name + '</p>' + '<span>主营：' + trainMeg.train_main + '</span>' + '</div>');
        info.setPosition(location);
      });
      //监听鼠标hover到覆盖物事件
      qq.maps.event.addListener(marker, "mouseout", function() {
        //alert("您执行了mouseover事件");
        info.close();
      });
      //自定义覆盖物图像
      let anchor = new qq.maps.Point(30, 30),
        size = new qq.maps.Size(60, 60),
        origin = new qq.maps.Point(0, 0),
        scaleSize = new qq.maps.Size(60, 60);

      let markerIcon = new qq.maps.MarkerImage(
        "data_img/" + img,
        size,
        origin,
        anchor,
        scaleSize
      );
      marker.setIcon(markerIcon);
    },
    //用户输入定位
    re_location() {
      this.isLoction = false
      this.coderAdd(this.location.city + this.add_input);
      document.body.scrollTop = 0;
      this.show_input = !this.show_input;
    },

    //当前地址解析
    coderAdd(user_add) {
      let geocoder = new qq.maps.Geocoder();
      let address = address = this.location.city + this.location.district;
      if (user_add != "") {
        address = user_add;
      }
      let self = this;
      geocoder.getLocation(address);

      //设置服务请求成功的回调函数
      geocoder.setComplete(function(result) {
        //map.setCenter(result.detail.location);  
        //console.log("服务请求成功" + result.detail.location.lat)
        self.coordinateX = result.detail.location.lat
        self.coordinateY = result.detail.location.lng

        //self.init(result.detail.location.lat, result.detail.location.lng);
        self.judgeAroudClass(result.detail.location.lat, result.detail.location.lng)
        //self.judgeAroudClass() //判断附近的班级

      });
      //若服务请求失败，则运行以下函数
      geocoder.setError(function() {
        alert("出错了，请输入正确的地址！！！");
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

    //经纬度距离辅助函数
    getRad(d) {
      return d * Math.PI / 180.0;
    },

    //根据经纬度知道两点距离
    getFlatternDistance(lat1, lng1, lat2, lng2) {
      var EARTH_RADIUS = 6378137.0; //单位M
      var dis
      var f = this.getRad((lat1 + lat2) / 2);
      var g = this.getRad((lat1 - lat2) / 2);
      var l = this.getRad((lng1 - lng2) / 2);

      var sg = Math.sin(g);
      var sl = Math.sin(l);
      var sf = Math.sin(f);

      var s, c, w, r, d, h1, h2;
      var a = EARTH_RADIUS;
      var fl = 1 / 298.257;

      sg = sg * sg;
      sl = sl * sl;
      sf = sf * sf;

      s = sg * (1 - sl) + (1 - sf) * sl;
      c = (1 - sg) * (1 - sl) + sf * sl;

      w = Math.atan(Math.sqrt(s / c));
      r = Math.sqrt(s * c) / w;
      d = 2 * w * a;
      h1 = (3 * r - 1) / 2 / c;
      h2 = (3 * r + 1) / 2 / s;

      dis = d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));


      return dis
    },

    //根据腾讯地图接口获取两点距离
    getDistance(train_co1, train_co2, i, j) {
      let params = new URLSearchParams();
      params.append('from', train_co1.lat + "," + train_co1.lng);
      params.append('to', train_co2.lat + "," + train_co2.lng);
      this.$store.dispatch('getDistance', params).then((response) => {
        let res = response.data;
        if (response.statusText === "OK" && response.status === 200) {
          if (res.status == 0) {
            //console.log(i+"|"+j)
            //console.log(res.result.elements[0].distance + "|" + (i + 1) + "|" + (j + 1));
            if (res.result.elements[0].distance < 100) {

              this.train_list[j].t_latlng.lat = this.train_list[j].t_latlng.lat + 0.0005
              this.train_list[j].t_latlng.lng = this.train_list[j].t_latlng.lng + 0.0005
            }
          } else {
            console.log(res.message)
          }
        } else {
          alert("网络错误")
        }
      }).catch((err) => {
        console.error(err);
      });
    },
    //分类筛选
    classifyList(title) {
      //let ptitle = encodeURI(title)
      this.$router.push({ path: '/mapList', query: { title: title } });
      this.classify_title_active = title;
      this.judgeshowTrain_list()
    },
    //选择每页多少条
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    //翻页
    handleCurrentChange(val) {
      //console.log(`当前页: ${val}`);
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
      if (this.count * (this.currentPage + 1) <= this.showAllfujiTrain_list.length) {
        this.handleCurrentChange(this.currentPage + 1)
      }
    },

  },
  //增加控件
  components: {
    ScrollBar,
  }
}

</script>
<style scoped>
@import '~/assets/css/mapList_index.css';

#container {
  width: 100%;
  height: 400px;
}

</style>
