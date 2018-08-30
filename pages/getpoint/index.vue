<template>
  <div class="contain">
    23424234455
    <div class="logo">
      <div class="upload-container">
        <div class="imgBox">
          <input type="file" class="inputstyle" name="file" @change="PreviewImage" />
          <img :src="imageUrl" alt="" class="fileImg">
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      qiniutoke: "",
      imageUrl:"",

    }
  },

  created() {

  },
  //进入页面执行的函数
  mounted() {
    //初始化token
    this.http.get('/qiniu-token')
      .then(res => {
        this.qiniutoke = res.data.token;
        console.log('------')
        console.log(res.data.token)
      })
      .catch(function(error) {
        console.log(error);
      });
    this.shuaxin();
  },
  //定义函数
  methods: {
    //          上传头像
    PreviewImage(event) {
      this.http.get('/qiniu-token')
        .then(res => {
          this.qiniutoke = res.data.token;
          console.log('------')
          console.log(res.data.token)
        })
        .catch(function(error) {
          console.log(error);
        });
      var addr = 'http://opf2ucy0n.bkt.clouddn.com/'
      var file = event.target.files[0];
      var formData = new FormData();
      formData.append('file', file);
      formData.append('token', this.qiniutoke);
      $.ajax({
        url: 'http://up-z1.qiniu.com/',
        type: 'POST',
        dataType: 'json',
        cache: false,
        data: formData,
        processData: false,
        contentType: false
      }).done((res) => {
        this.imageUrl = addr + res.key
      }).fail(function(err) {
        console.log('error');
      });

    },
  },
}

</script>
<style scoped>
.contain {
  padding-top: 120px;
  height: 600px
}

</style>
