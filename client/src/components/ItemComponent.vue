<template>
  <el-card :body-style="{ padding: '0px' }">
    <img :src="itemImg" class="image" @click="openTableVisible" />
    <div class="bottom-card">
      <p>{{ name }}</p>
      <h5>{{ price }} ONE</h5>
      <div class="bottom clearfix">
        <el-button type="primary" class="btn-buy"
          ><i class="fa fa-cart-plus" aria-hidden="true"></i
        ></el-button>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  name: 'Item',
  props: {
    itemImg: {
      type: String,
      default: '@/assets/img/not_found.jpg'
    },
    name: {
      type: String
    },
    price: {
      type: Number
    }
  },
  methods: {
    openTableVisible() {
      this.$emit('openTableVisible', this.itemImg);
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../assets/css/vuetify.css';
.btn-buy {
  margin-left: 10px;
}

.fa.fa-close.strip__close {
  font-size: 30px;
}

.bottom-card {
  padding: 14px;
}

.bottom-card > h5 {
  color: black;
}
</style>
