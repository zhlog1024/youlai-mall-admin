<template>
  <div class="components-container">
    <el-steps :active="active" process-status="finish" finish-status="success" simple>
      <el-step title="选择商品分类"></el-step>
      <el-step title="填写商品信息"></el-step>
      <el-step title="设置商品属性"></el-step>
      <el-step title="设置商品库存"></el-step>
    </el-steps>
    <goods-category
      v-show="active==0"
      v-model="goods"
      v-if="loaded==true"
      @prev="prev"
      @next="next">
    </goods-category>
    <goods-info
      v-show="active==1"
      v-model="goods"
      v-if="loaded==true"
      @prev="prev"
      @next="next">
    </goods-info>

    <goods-attribute
      v-show="active==2"
      v-model="goods"
      v-if="loaded==true"
      @prev="prev"
      @next="next">
    </goods-attribute>

    <goods-stock
      v-show="active==3"
      v-model="goods"
      v-if="loaded==true"
      @prev="prev"
      @next="next">
    </goods-stock>
  </div>
</template>

<script>
import GoodsCategory from "@/views/pms/goods/components/GoodsCategory";
import GoodsInfo from "@/views/pms/goods/components/GoodsInfo";
import GoodsAttribute from "@/views/pms/goods/components/GoodsAttribute";
import {detail} from "@/api/pms/goods";
import GoodsStock from "@/views/pms/goods/components/GoodsStock";

export default {
  name: "goods-detail",
  components: {GoodsStock, GoodsCategory, GoodsInfo, GoodsAttribute},
  props: ['goodsId'],
  data() {
    return {
      loaded: false,
      active: 0,
      goods: {
        id: undefined,
        name: undefined,
        categoryId: undefined,
        brandId: undefined,
        originPrice: undefined,
        price: undefined,
        picUrl: undefined,
        album: undefined,
        description: undefined,
        detail: undefined,
        attrList: [],
        specList: [],
        skuList: []
      }
    };
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      const goodsId = this.$route.query.goodsId
      if (goodsId) {
        detail(goodsId).then(response => {
          this.goods = response.data
          this.goods.originPrice = this.goods.originPrice / 100
          this.goods.price = this.goods.price / 100
          this.loaded = true
        })
      } else {
        this.loaded = true
      }
    },
    prev() {
      if (this.active-- <= 0) {
        this.active = 0;
      }
    },
    next() {
      if (this.active++ >= 3) {
        this.active = 0;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form-container {
  width: 80%;
  margin: 30px auto;
}
</style>
