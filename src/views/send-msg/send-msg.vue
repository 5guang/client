<template>
  <section >
    <div class="box_wrap">
      <h3>获取otp信息</h3>
      <div>
        <label>手机号</label>
        <div>
          <input type="tel" maxlength="11" placeholder="手机号" v-model="mobile">
        </div>
        <div>
          <button @click="getOtpMsg" type="button">获取otp短信</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'send-msg',
    data () {
      return {
        mobile: '',
        title: '请选择',
      }
    },
    methods: {
      getOtpMsg() {
        const data = {
          telphone: this.mobile,
        };
        if (this.mobile) {
          this.$http.sendMsgApi(data).then((res) => {
            if (res.status === 'success') {
              alert('短信已发送至您的手机请注意查收');
              this.$router.push({
                name: 'register',
              })
            }
          }).catch(err => {
            alert(err);
          })
        }
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .box_wrap{
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0);
    background-color: #fff;
    width: 60%;
    border-radius: 3px;
    font-size: 16px;
    -webkit-user-select: none;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition: .2s;
    border: 1px solid #000;
  }
  .box_wrap-ul{
    /* width: 50%; */
    /* height: 100px; */

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
