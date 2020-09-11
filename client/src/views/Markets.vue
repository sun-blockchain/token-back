<template>
  <div class="market-view">
    <header-componet />
    <section class="strips" v-if="contentDisplay === -1">
      <article class="strips__strip" @click="openTab(0)">
        <div class="strip__content">
          <h1 class="strip__title" data-name="Lorem">
            Shirt
          </h1>
          <div class="strip__inner-text"></div>
        </div>
      </article>
      <article class="strips__strip" @click="openTab(1)">
        <div class="strip__content">
          <h1 class="strip__title" data-name="Ipsum">T-shirt</h1>
          <div class="strip__inner-text"></div>
        </div>
      </article>
      <article class="strips__strip" @click="openTab(2)">
        <div class="strip__content">
          <h1 class="strip__title" data-name="Dolor">Jeans</h1>
          <div class="strip__inner-text"></div>
        </div>
      </article>
      <article class="strips__strip" @click="openTab(3)">
        <div class="strip__content">
          <h1 class="strip__title" data-name="Sit">Shoes</h1>
          <div class="strip__inner-text"></div>
        </div>
      </article>
      <article class="strips__strip" @click="openTab(4)">
        <div class="strip__content">
          <h1 class="strip__title" data-name="Amet">Hat</h1>
          <div class="strip__inner-text"></div>
        </div>
      </article>
    </section>

    <div class="div-show">
      <div class="strip-show" v-show="contentDisplay === 0">
        <i class="fa fa-close strip__close" @click="closeTab"></i>
        <div class="content-strip">
          <div class="row">
            <div
              class="col-4"
              :span="6"
              v-for="(item, index) in arr0"
              :key="item.id"
              :offset="index > 0 ? 2 : 0"
            >
              <ItemComponent
                name="Shirt"
                :price="item.price"
                :itemImg="item.imageUrl"
                @openTableVisible="openTableVisible"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="strip-show" v-show="contentDisplay === 1">
        <i class="fa fa-close strip__close" @click="closeTab"></i>
        <div class="content-strip">
          <el-row>
            <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
              <ItemComponent
                name="T-shirt"
                :price="120"
                itemImg="https://cf.shopee.vn/file/80196bdbee4665d42649feb9e66bf169"
                @openTableVisible="openTableVisible"
              />
            </el-col>
          </el-row>
        </div>
      </div>

      <div class="strip-show" v-show="contentDisplay === 2">
        <i class="fa fa-close strip__close" @click="closeTab"></i>
        <div class="content-strip">
          <el-row>
            <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
              <ItemComponent
                name="Jeans"
                :price="120"
                itemImg="https://anninc.scene7.com/is/image/LO/538256_9435?$pdp2x$"
                @openTableVisible="openTableVisible"
              />
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="strip-show" v-show="contentDisplay === 3">
        <i class="fa fa-close strip__close" @click="closeTab"></i>
        <div class="content-strip">
          <el-row>
            <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
              <ItemComponent
                name="Jeans"
                :price="120"
                itemImg="https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg"
                @openTableVisible="openTableVisible"
              />
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="strip-show" v-show="contentDisplay === 4">
        <i class="fa fa-close strip__close" @click="closeTab"></i>
        <div class="content-strip">
          <el-row>
            <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
              <ItemComponent
                name="Jeans"
                :price="120"
                itemImg="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f92c44fe-7fed-4f00-8123-8b8dd3cbe413/sportswear-heritage86-futura-washed-hat-9zdC2m.jpg"
                @openTableVisible="openTableVisible"
              />
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <el-dialog :title="titleProduct" :visible.sync="dialogTableVisible">
      <v-zoom :img="img"></v-zoom>
      <hr />
      <div class="content-detail">
        <h3>
          Description:
        </h3>
        <p>
          We are proud to present our best premium Shopify theme - Wokiee. This is multi-purpose
          software that can be used for any type of the store. Great variety of available options
          will make customization process very easy. Please, take a look at feature list and compare
          with our competitors. You can buy our theme and start your business online with minimal
          time investments. Wokiee support DropShipping app Oberlo. Wokiee Shopify theme is
          powerfool tool to create personal webshop.
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="btn-buy-modal" type="primary " @click="dialogTableVisible = false"
          ><i data-v-bfe2d226="" aria-hidden="true" class="fa fa-cart-plus"></i> Buy
        </el-button>
      </span>
    </el-dialog>
    <loginModal v-show="isLoginModalVisible" @close="closeLoginModal" @signIn="signIn" />
  </div>
</template>
<script>
import FooterComponet from '@/components/FooterComponet';
import HeaderComponet from '@/components/HeaderComponent';
import loginModal from '@/components/LoginModal.vue';
import ItemComponent from '@/components/ItemComponent.vue';
import { mapState, mapActions } from 'vuex';
import vZoom from 'vue-zoom';

export default {
  components: { FooterComponet, HeaderComponet, vZoom, loginModal, ItemComponent },
  data() {
    return {
      tabOpening: null,
      outerVisible: false,
      titleProduct: 'Product 01',
      dialogTableVisible: false,
      num: 0,
      img:
        'https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/travel-100-men-s-trekking-shirt-maroon.jpg',
      isLoginModalVisible: false,
      contentDisplay: -1,
      arr0: [],
      arr1: [],
      arr2: [],
      arr3: [],
      arr4: []
    };
  },
  computed: {
    ...mapState(['sellingItems'])
  },
  methods: {
    ...mapActions(['fetchSellingItems', 'initMarket']),
    openTab(index) {
      this.contentDisplay = index;
    },
    closeTab() {
      this.contentDisplay = -1;
    },
    closeLoginModal() {
      this.isLoginModalVisible = false;
    },
    signIn() {},
    openTableVisible(itemImg) {
      this.img = itemImg;
      this.dialogTableVisible = true;
    },
    classification() {
      let arr0 = [];
      let arr1 = [];
      let arr2 = [];
      let arr3 = [];
      let arr4 = [];
      this.sellingItems.forEach(item => {
        switch (item.itemType) {
          case 0:
            arr0.push(item);
            break;
          case 1:
            arr1.push(item);
            break;
          case 2:
            arr2.push(item);
            break;
          case 3:
            arr3.push(item);
            break;
          case 4:
            arr4.push(item);
            break;
          default:
            break;
        }
      });
      this.arr0 = arr0;
      this.arr1 = arr1;
      this.arr2 = arr2;
      this.arr3 = arr3;
      this.arr4 = arr4;
    }
  },
  async created() {
    await this.initMarket();
    await this.fetchSellingItems();
    if (this.sellingItems && this.sellingItems.length > 0) {
      this.classification();
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../assets/css/vuetify.css';
@import '../assets/css/markets-style.scss';
</style>
