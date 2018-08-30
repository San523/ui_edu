// import Vue from 'vue';
import axios from 'axios';

// 全局的 axios 默认值
//axios.defaults.baseURL = 'https://apis.map.qq.com/';
//axios.defaults.timeout = 10000;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//腾讯地图开发者秘钥
let key = "NQVBZ-V6MK5-DA5IP-QQEZW-KD26V-QLB2Z";


export default {
 //IP定位
  getLocation({ commit, state }, params) {
    return axios({
      url: '/ws/location/v1/ip?key='+ key,
      method: 'get',
      params,
    });
  },

  //距离计算
  getDistance({ commit, state }, params) {
    return axios({
      url: '/ws/distance/v1/?key='+ key+'&'+params,
      method: 'get',
      params,
    });
  },

  //地图选点
  getSearch({ commit, state }, params) {
    return axios({
      url: '/ws//place/v1/search/?key='+ key+'&'+params,
      method: 'get',
      params,
    });
  },

  //获取培训班测试机构列表
  trainlingList({ commit, state }, params) {
    return axios({
      url: '/django/training/trainlingList',
      method: 'get',
      params,
    });
  },
}