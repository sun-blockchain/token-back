<template>
  <div class="market-view" v-loading="loading">
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
            <div class="col-12 col-sm-6 col-md-4" :span="6" v-for="item in arr0" :key="item.id">
              <ItemComponent
                name="Shirt"
                :price="item.price"
                :itemImg="item.imageUrl"
                :id="item.id"
                @openTableVisible="openTableVisible"
                @buyProduct="buyProductMarket"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="strip-show" v-show="contentDisplay === 1">
        <i class="fa fa-close strip__close" @click="closeTab"></i>

        <div class="content-strip">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-4" :span="6" v-for="item in arr1" :key="item.id">
              <ItemComponent
                name="T-shirt"
                :price="item.price"
                :itemImg="item.imageUrl"
                :id="item.id"
                @openTableVisible="openTableVisible"
                @buyProduct="buyProductMarket"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="strip-show" v-show="contentDisplay === 2">
        <i class="fa fa-close strip__close" @click="closeTab"></i>
        <div class="content-strip">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-4" :span="6" v-for="item in arr2" :key="item.id">
              <ItemComponent
                name="Jeans"
                :price="item.price"
                :itemImg="item.imageUrl"
                :id="item.id"
                @openTableVisible="openTableVisible"
                @buyProduct="buyProductMarket"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="strip-show" v-show="contentDisplay === 3">
        <i class="fa fa-close strip__close" @click="closeTab"></i>
        <div class="content-strip">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-4" :span="6" v-for="item in arr3" :key="item.id">
              <ItemComponent
                name="Jeans"
                :price="item.price"
                :itemImg="item.imageUrl"
                :id="item.id"
                @openTableVisible="openTableVisible"
                @buyProduct="buyProductMarket"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="strip-show" v-show="contentDisplay === 4">
        <i class="fa fa-close strip__close" @click="closeTab"></i>
        <div class="content-strip">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-4" :span="6" v-for="item in arr4" :key="item.id">
              <ItemComponent
                name="Jeans"
                :price="item.price"
                :itemImg="item.imageUrl"
                :id="item.id"
                @openTableVisible="openTableVisible"
                @buyProduct="buyProductMarket"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-dialog :title="titleProduct" :visible.sync="dialogTableVisible">
      <v-zoom :img="img" width="100%"></v-zoom>
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
    <!-- <loginModal v-show="isLoginModalVisible" @close="closeLoginModal" @signIn="signInWallet" /> -->
    <el-dialog title="Warning" :visible.sync="isLoginModalVisible" width="30%" center>
      <p class="text-center">
        You need to connect with MathWallet. If you do not have MathWallet installed, you can access
        it here:
        <a
          class="link-redirect"
          target="_blank"
          href="https://chrome.google.com/webstore/detail/math-wallet/afbcbjpbpfadlkmhmclhkeeodmamcflc"
          >MathWallet</a
        >
      </p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isLoginModalVisible = false">Cancel</el-button>
        <el-button type="primary" @click="signIn">Sign In</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import FooterComponet from '@/components/FooterComponet';
import HeaderComponet from '@/components/HeaderComponent';
import ItemComponent from '@/components/ItemComponent.vue';
import { mapState, mapActions } from 'vuex';
import vZoom from 'vue-zoom';
import { Harmony } from '@harmony-js/core';
import { ChainID, ChainType } from '@harmony-js/utils';

const GAS_LIMIT = 6721900;
const GAS_PRICE = 1000000000;
const options = {
  gasPrice: GAS_PRICE,
  gasLimit: GAS_LIMIT
};

const hmy = new Harmony('https://api.s0.b.hmny.io', {
  chainID: ChainID.HmyTestnet,
  chainType: ChainType.Harmony
});

export default {
  components: { FooterComponet, HeaderComponet, vZoom, ItemComponent },
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
      arr4: [],
      loading: false
    };
  },
  computed: {
    ...mapState(['sellingItems', 'account', 'market'])
  },
  methods: {
    ...mapActions([
      'fetchSellingItems',
      'initMarket',
      'signInWallet',
      'loadWallet',
      'signOutWallet',
      'initMarket'
    ]),
    openTab(index) {
      this.contentDisplay = index;
    },
    closeTab() {
      this.contentDisplay = -1;
    },
    closeLoginModal() {
      this.isLoginModalVisible = false;
    },
    signIn() {
      this.isLoginModalVisible = false;
      this.signInWallet();
    },
    async buyProductMarket(id, price) {
      this.loading = true;
      await this.loadWallet();
      if (this.account) {
        let market = this.market;
        try {
          market.wallet.defaultSigner = hmy.crypto.getAddress(this.account.address).checksum;
          market.wallet.signTransaction = async tx => {
            try {
              tx.from = hmy.crypto.getAddress(this.account.address).checksum;
              const signTx = await window.harmony.signTransaction(tx);
              return signTx;
            } catch (e) {
              this.loading = false;
              this.$message({
                message: e.message,
                type: 'error'
              });
              return false;
            }
          };
          await market.methods
            .buy(id)
            .send({ ...options, value: price * 10 ** 18 })
            .then(e => {
              this.loading = false;
              this.$message({
                message: e.transaction.id,
                type: 'success'
              });
              this.$router.push({ name: 'MyProducts' });
              return true;
            });
        } catch (e) {
          this.$message({
            message: e.message,
            type: 'error'
          });
          this.loading = false;
          return false;
        }
      } else {
        this.isLoginModalVisible = true;
      }
      await this.fetchSellingItems();
      if (this.sellingItems && this.sellingItems.length > 0) {
        await this.classification();
      }
      this.loading = false;
    },
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
    // await this.signOutWallet();
  }
};
</script>
<style lang="scss" scoped>
@import '../assets/css/markets-style.scss';
.text-center {
  text-align: center;
}

.link-redirect {
  color: blue;
}
.link-redirect:hover {
  color: blue;
}
</style>
