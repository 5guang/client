<template>
  <section >
    <div class="box_wrap">
      <h3>商品详情</h3>
      <div >
        <label v-if="listInfo.promoStatus === 1" class="colorBlue">秒杀开始时间</label>
        <div>
          <label class="colorRed" >{{promoStatus}}</label>
        </div>
      </div>
      <section class="display">
        <div>
          <label>商品名</label>
          <div>
            <label>{{listInfo.title}}</label>
          </div>
        </div>
        <div>
          <label>商品描述</label>
          <div>
            <label >{{listInfo.description}}</label>
          </div>
        </div>
        <div v-if="listInfo.promoStatus !== 2">
          <label>价格</label>
          <div>
            <label >{{listInfo.price}}</label>
          </div>
        </div>
        <div v-if="listInfo.promoStatus === 2">
          <label class="colorRed">秒杀价格</label>
          <div>
            <label class="colorRed" >{{listInfo.promoPrice}}</label>
          </div>
        </div>
        <div>
          <label>图片</label>
          <div>
            <label ><img style="width: 80px;height: auto" :src="listInfo.imgUrl" alt=""></label>
          </div>
        </div>
        <div>
          <label>库存</label>
          <div>
            <label >{{listInfo.stock}}</label>
          </div>
        </div>
        <div>
          <label>销量</label>
          <div>
            <label >{{listInfo.sales}}</label>
          </div>
        </div>
      </section>
    </div>
    <div>
      <button :disabled="listInfo.promoStatus === 1" type="button" @click="createOrder">下单</button>
    </div>
  </section>
</template>

<script>


  export default {
    name: 'item',
    data() {
      return {
        listInfo: {
          title: '',
          description: '',
          price: '',
          imgUrl: '',
          stock: '',
          sales: '',
          promoPrice: '',
          promoStatus: 0,
          startDate: '',
        },
        id: Number(this.$route.query.id),
        delta: 0,
        timer: '',
      };
    },
    computed: {
      promoStatus() {
        let str = '';
        if (this.listInfo.promoStatus === 1) {
          str = `秒杀活动将于： ${this.listInfo.startDate} 开始售卖 倒计时：${this.delta}秒`;
        } else if (this.listInfo.promoStatus === 2) {
          str = '秒杀活动正在进行中';
        }
        return str;
      }
    },
    created() {
      this.getSingleItem();
    },
    methods: {
      getSingleItem() {
        const param = {
          id: this.id,
        };
        this.$http.getItemApi(param).then((res) => {
          console.log(res);
          if (res.status === 'success') {
            this.listInfo = res.data;
            this.listInfo.startDate = (res.data.startDate || '').replace(new RegExp('-','gm'), '/');
            this.timer = setInterval(this.downTime, 1000)

          } else {
            alert(res.errMsg);
          }
        }).catch(err => {
          alert(err);
        })
      },
      createOrder() {
        if (this.listInfo.promoStatus === 1) {

        }
        const body = {
          itemId: this.id,
          amount: 1,
          promoId: this.listInfo.promoId,
        };
        this.$http.createorderApi(body).then((res) => {
          if (res.status === 'success') {
            this.getSingleItem();
          } else {
            alert(res.data.errMsg);
            if (res.data.errCode === 20003) {
              this.$router.push({
                name: 'login',
              })
            }

          }
          console.log(res);
        }).catch(err => {
          alert(err);
        })
      },
      downTime() {
        const now = Date.parse(new Date());
        const startTime = new Date(this.listInfo.startDate).getTime();
        this.delta = (startTime - now) / 1000;
        if (this.delta <= 0) {
          this.listInfo.promoStatus = 2;
          clearInterval(this.timer);
        }
      },
    },

  }
</script>

<style>
  .display{
    display: flex;
    justify-content: space-around;
  }
  .colorRed{
    color: red;
  }
  .colorBlue{
    color: blue;
  }
</style>
