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
                  />
                  <div style="padding: 14px;">
                    <p>Shirt</p>
                    <div class="bottom clearfix">
                      <el-button type="text" class="button"
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
                      <el-button type="text" class="button"
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
                      <el-button type="text" class="button"
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
                      <el-button type="text" class="button"
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
                      <el-button type="text" class="button"
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
  </div>
</template>
<script>
import FooterComponet from '@/components/FooterComponet';
import HeaderComponet from '@/components/HeaderComponent';
export default {
  components: { FooterComponet, HeaderComponet },
  data() {
    return {
      tabOpening: null
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
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
@import '../assets/css/vuetify.css';
@import '../assets/css/markets-style.scss';
</style>
