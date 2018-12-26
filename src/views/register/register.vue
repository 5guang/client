<template>
  <section >
    <div class="box_wrap">
      <h3>获取otp信息</h3>
      <div>
        <label>手机号</label>
        <div>
          <input type="tel" maxlength="11" placeholder="手机号" v-model="telphone">
        </div>
      </div>
      <div>
        <label>验证码</label>
        <div>
          <input type="text" placeholder="验证码" v-model="code">
        </div>
      </div>
      <div>
        <label>用户昵称</label>
        <div>
          <input type="text" placeholder="用户昵称" v-model="username">
        </div>
      </div>
      <div>
        <label>年龄</label>
        <div>
          <input type="text" placeholder="年龄" v-model="age">
        </div>
      </div>
      <div>
        <label>性别</label>
        <div>
          <input type="text" placeholder="性别" v-model="sex">
        </div>
      </div>
      <div>
        <label>密码</label>
        <div>
          <input type="text" placeholder="密码" v-model="pwd">
        </div>
      </div>
      <div>
        <button @click="register" type="button">
          提交
        </button>
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    name: 'register',
    data() {
      return {
        telphone: '',
        code: '',
        username: '',
        age: '',
        sex: '',
        pwd: '',
      }
    },
    methods: {
      register() {
        const body = {
          telphone: this.telphone,
          optCode: this.code,
          name: this.username,
          gender: this.sex,
          age: this.age,
          password: this.pwd,
        };
        this.$http.registerApi(body).then((res) => {
          if (res.status === 'success') {
            alert('注册成功');
            this.$router.push({
              name: 'list-item',
            });
          } else {
            alert(res.errMsg);
          }
          console.log(res);
        }).catch(err => {
          alert(err);
        })
      }
    },
  }
</script>
