<template>
  <div>
    <h3>商品列表浏览</h3>
    <div>
      <table>
        <thead>
        <tr>
          <th>商品名</th>
          <th>商品图片</th>
          <th>商品描述</th>
          <th>商品价格</th>
          <th>商品库存</th>
          <th>商品销量</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in list" @click="getItem(item.id)">
          <td>{{item.title}}</td>
          <td><img style="width:100px; height:auto" :src="item.imgUrl" alt=""></td>
          <td>{{item.description}}</td>
          <td>{{item.price}}</td>
          <td>{{item.stock}}</td>
          <td>{{item.sales}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'list-item',
    data() {
      return {
        list: [],
      };
    },
    created() {
      this.getListItem();
    },
    methods: {
      getListItem() {
        this.$http.getListApi().then((res) => {
          if (res.status === 'success') {
            this.list = res.data;
            console.log(res);
          } else {
            alert('获取商品列表失败');
          }
          console.log(res);
        }).catch(err => {
          alert(err);
        })
      },
      getItem(id) {
        this.$router.push({
          name: 'item',
          query:{
            id,
          }
        })
      }
    },
  }
</script>
