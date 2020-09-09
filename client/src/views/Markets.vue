<template>
  <div class="market-view">
    <header-componet />
    <section class="strips">
      <article class="strips__strip" @click="openTab(0)">
        <div class="strip__content">
          <h1 class="strip__title" data-name="Lorem">
            Shirt
          </h1>
          <div class="strip__inner-text">
            <el-row>
              <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                  <img
                    src="https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/travel-100-men-s-trekking-shirt-maroon.jpg"
                    class="image"
                    @click="dialogTableVisible = true"
                  />
                  <div class="bottom-card">
                    <p>Shirt</p>
                    <h5>100$</h5>
                    <div class="bottom clearfix">
                      <el-input-number
                        controls-position="right"
                        :value="0"
                        :min="0"
                      ></el-input-number>
                      <el-button type="primary" class="btn-buy"
                        ><i class="fa fa-cart-plus" aria-hidden="true"></i
                      ></el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </article>
      <article class="strips__strip" @click="openTab(1)">
        <div class="strip__content">
          <h1 class="strip__title" data-name="Ipsum">T-shirt</h1>
          <div class="strip__inner-text">
            <el-row>
              <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                  <img
                    src="https://cf.shopee.vn/file/80196bdbee4665d42649feb9e66bf169"
                    class="image"
                  />
                  <div style="padding: 14px;">
                    <p>T-Shirt</p>
                    <div class="bottom clearfix">
                      <el-input-number
                        controls-position="right"
                        :value="0"
                        :min="0"
                      ></el-input-number>
                      <el-button type="primary" class="btn-buy"
                        ><i class="fa fa-cart-plus" aria-hidden="true"></i
                      ></el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </article>
      <article class="strips__strip" @click="openTab(2)">
        <div class="strip__content">
          <h1 class="strip__title" data-name="Dolor">Jeans</h1>
          <div class="strip__inner-text">
            <el-row>
              <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                  <img
                    src="https://anninc.scene7.com/is/image/LO/538256_9435?$pdp2x$"
                    class="image"
                  />
                  <div style="padding: 14px;">
                    <p>Jeans</p>
                    <div class="bottom clearfix">
                      <el-input-number
                        controls-position="right"
                        :value="0"
                        :min="0"
                      ></el-input-number>
                      <el-button type="primary" class="btn-buy"
                        ><i class="fa fa-cart-plus" aria-hidden="true"></i
                      ></el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </article>
      <article class="strips__strip" @click="openTab(3)">
        <div class="strip__content">
          <h1 class="strip__title" data-name="Sit">Shoes</h1>
          <div class="strip__inner-text">
            <el-row>
              <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                  <img
                    src="https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg"
                    class="image"
                  />
                  <div style="padding: 14px;">
                    <p>Shoes</p>
                    <div class="bottom clearfix">
                      <el-input-number
                        controls-position="right"
                        :value="0"
                        :min="0"
                      ></el-input-number>
                      <el-button type="primary" class="btn-buy"
                        ><i class="fa fa-cart-plus" aria-hidden="true"></i
                      ></el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </article>
      <article class="strips__strip" @click="openTab(4)">
        <div class="strip__content">
          <h1 class="strip__title" data-name="Amet">Hat</h1>
          <div class="strip__inner-text">
            <el-row>
              <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                  <img
                    src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f92c44fe-7fed-4f00-8123-8b8dd3cbe413/sportswear-heritage86-futura-washed-hat-9zdC2m.jpg"
                    class="image"
                  />
                  <div style="padding: 14px;">
                    <p>Shoes</p>
                    <div class="bottom clearfix">
                      <el-input-number
                        controls-position="right"
                        :value="0"
                        :min="0"
                      ></el-input-number>
                      <el-button type="primary" class="btn-buy"
                        ><i class="fa fa-cart-plus" aria-hidden="true"></i
                      ></el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </article>
      <i class="fa fa-close strip__close" @click="closeTab"></i>
    </section>
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
        <el-input-number
          v-model="num"
          controls-position="right"
          :value="0"
          :min="0"
        ></el-input-number>
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
import vZoom from 'vue-zoom';

export default {
  components: { FooterComponet, HeaderComponet, vZoom, loginModal },
  data() {
    return {
      tabOpening: null,
      outerVisible: false,
      titleProduct: 'Product 01',
      dialogTableVisible: false,
      num: 0,
      img:
        'https://contents.mediadecathlon.com/p1484240/k$ab565f3675dbdd7e3c486175e2c16583/travel-100-men-s-trekking-shirt-maroon.jpg',
      isLoginModalVisible: false
    };
  },
  methods: {
    openTab(index) {
      this.tabOpening = index;
      var tile = document.querySelectorAll('.strips__strip')[index];
      var tileLink = document.querySelectorAll('.strips__strip > .strip__content')[index];
      var tileText = tileLink.getElementsByClassName('strip__inner-text');
      var stripClose = document.querySelectorAll('.strip__close');
      tile.classList.add('strips__strip--expanded');
      tileText[0].style.transition = 'all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)';
      stripClose[0].classList.add('strip__close--show');
      stripClose[0].style.transition = 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)';
    },
    closeTab() {
      var index = this.tabOpening;
      var tileLink = document.querySelectorAll('.strips__strip > .strip__content')[index];
      var tile = document.querySelectorAll('.strips__strip')[index];
      tile.classList.remove('strips__strip--expanded');
      var tileText = tileLink.getElementsByClassName('strip__inner-text');
      tileText[0].style.transition = 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)';
      var stripClose = document.querySelectorAll('.strip__close');
      stripClose[0].classList.remove('strip__close--show');
      stripClose[0].style.transition = 'all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)';
    },
    closeLoginModal() {
      this.isLoginModalVisible = false;
    },
    signIn() {}
  },
  created() {}
};
</script>
<style lang="scss" scoped>
@import '../assets/css/vuetify.css';
@import '../assets/css/markets-style.scss';
.width-100 {
  width: 100%;
}

.content-detail {
  width: 100%;
  color: black;
}

.content-detail > h3 {
  color: black;
}

.btn {
  background: #2879fe;
  font-family: 'Hind', sans-serif;
  border: none;
  color: #ffffff;
  font-size: 14px;
  line-height: 1;
  font-weight: 400;
  letter-spacing: 0.03em;
  position: relative;
  outline: none;
  padding: 6px 31px 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 40px;
  cursor: pointer;
  transition: all 0.2s linear;
  -ms-transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
}

.btn-lg {
  height: 50px;
}

.btn {
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}

.btn-buy-modal {
  width: 200px;
  margin-left: 10px;
}

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
