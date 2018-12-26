<template>
  <section>
    <div>
      <h3>用户登录</h3>
      <div>
        <label>手机号</label>
        <div>
          <input type="tel" maxlength="11" placeholder="手机号" v-model="telphone">
        </div>
      </div>
      <div>
        <label>密码</label>
        <div>
          <input @keyup.enter="login" type="text" placeholder="密码" v-model="password">
        </div>
      </div>
      <div>
        <button @click="login" type="button">
          登录
        </button>
        <button @click="goRegister" type="button">
          注册
        </button>
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    name: 'login',
    data() {
      return {
        telphone: '',
        password: '',
      };
    },
    created() {
      console.log('uuid', this.telphone);
    },
    methods: {
      login() {
        const body = {
          telphone: this.telphone,
          password: this.password,
        };

        if (this.telphone && this.password) {
          this.$http.loginApi(body).then((res) => {
            if (res.status === 'success') {
              alert('登录成功');
              this.$router.push({
                path: '/list-item'
              })
            } else {
              alert(res.data.errMsg);
            }
            console.log(res);
          }).catch(err => {
            alert(err);
          })
        } else {
          alert('请将信息填写完整');
        }
      },
      goRegister() {
        this.$router.push({
          name: 'send-msg'
        })
      }
    },
  }
</script>
