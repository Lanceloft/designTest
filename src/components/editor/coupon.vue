<template>
  <div class="coupon">
    <div class="editor-item">
      <div class="item-name">添加方式:</div>
      <div class="item-content">
        <RadioGroup
          v-model="addWay">
          <Radio label="0">手动添加</Radio>
          <Radio label="1">自动获取</Radio>
        </RadioGroup>
      </div>
    </div>

    <div
      v-show="addWay === '1'"
      class="coupon-numbers">
      <div class="top-item">
        <div class="item-name">券活动数:</div>
        <div class="item-content">
          <RadioGroup
            v-model="couponNumberType">
            <Radio label="0">全部</Radio>
            <Radio label="1">
              <Input
                class="coupon-input"
                v-model="couponNumber"
                placeholder="请输入显示的券活动数" />
            </Radio>
          </RadioGroup>
          <Checkbox v-model="hideCannotShare">隐藏不可分享链接的优惠券</Checkbox>
        </div>
      </div>
    </div>

    <div
      class="editor-item imgs-text-nav"
      v-for="(item, index) in couponList"
      :key="index">
      <Icon
        class="icon-delete"
        type="md-close-circle"
        @click="deleteCoupon(index)" />
      <div
        class="coupon-list-item">优惠券: {{ item.name }}(下单立减{{ item.discount }}元)</div>
    </div>

    <div
      class="editor-item"
      v-show="addWay === '0'">
      <div
        class="add-coupon"
        @click="openCouponModal">+ 添加优惠券</div>
    </div>

    <div class="editor-item">
      <div class="item-name">样式:</div>
      <div class="item-content">
        <RadioGroup
          v-model="couponStyle">
          <Radio label="0">样式1</Radio>
          <Radio label="1">样式2</Radio>
          <Radio label="2">样式3</Radio>
          <Radio label="3">样式4</Radio>
        </RadioGroup>
      </div>
    </div>

    <div class="editor-item">
      <div class="item-name">颜色:</div>
      <div class="item-content flex-content">
        <div
          class="coupon-color-item"
          :class="[couponColor === '0' ? 'color-active' : '']"
          @click="setCouponColor('0')">
          <div class="coupon-color color-red"></div>
        </div>
        <div
          class="coupon-color-item"
          :class="[couponColor === '1' ? 'color-active' : '']"
          @click="setCouponColor('1')">
          <div class="coupon-color color-yellow"></div>
        </div>
        <div
          class="coupon-color-item"
          :class="[couponColor === '2' ? 'color-active' : '']"
          @click="setCouponColor('2')">
          <div class="coupon-color color-white"></div>
        </div>
        <div
          class="coupon-color-item"
          :class="[couponColor === '3' ? 'color-active' : '']"
          @click="setCouponColor('3')">
          <div class="coupon-color color-black"></div>
        </div>
        <div
          class="coupon-color-item"
          :class="[couponColor === '4' ? 'color-active' : '']"
          @click="setCouponColor('4')">
          <div class="coupon-color color-green"></div>
        </div>
      </div>
    </div>

    <div class="top-item">
      <div class="item-name">更多设置:</div>
      <div class="item-content">
        <Checkbox v-model="hideFinished">隐藏已抢完券</Checkbox>
        <p>当页面无可显示的优惠券时，优惠券区块将隐藏</p>
      </div>
    </div>

    <coupon-modal
      :couponModalVisible="couponModalVisible"
      :confirm="confirmCoupon"
      :cancel="cancelCoupon" />

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CouponModal from '../coupon-modal.vue'
export default {
  components: {
    'coupon-modal': CouponModal
  },

  computed: {
    ...mapGetters({
      couponModalVisible: 'getCouponModalVisible'
    }),

    couponList() {
      const designStore = this.$store.state.design;
      return designStore.previewItems[designStore.chooseIndex].coupon.couponList
    },

    addWay: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].coupon.addWay
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCouponAddWay',
          param: value
        })
      }
    },

    couponNumberType: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].coupon.couponNumberType
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCouponNumberType',
          param: value
        })
      }
    },

    couponNumber: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].coupon.couponNumber
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCouponNumber',
          param: value
        })
      }
    },

    hideCannotShare: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].coupon.hideCannotShare
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCouponHideCannotShare',
          param: value
        })
      }
    },

    couponStyle: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].coupon.couponStyle
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCouponStyle',
          param: value
        })
      }
    },

    couponColor() {
      const designStore = this.$store.state.design;
      return designStore.previewItems[designStore.chooseIndex].coupon.couponColor
    },

    hideFinished: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].coupon.hideFinished
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCouponHideFinished',
          param: value
        })
      }
    }
  },

  methods: {
    ...mapActions({
      openCouponModal: 'toOpenCouponModal',
      cancelCoupon: 'toCloseCouponModal'
    }),
    setCouponColor(color) {
      this.$store.dispatch({
        type: 'toSetCouponColor',
        param: color
      })
    },

    confirmCoupon() {
      this.$store.dispatch({
        type: 'toConfirmCoupon'
      })
    },

    deleteCoupon(index) {
      this.$store.dispatch({
        type: 'toDeleteCoupon',
        param: index
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.coupon {
  .coupon-numbers {
    padding: 10px 0;
    background: #fff;
  }

  .editor-item {
    display: flex;
    align-items: center;
  }

  .add-coupon {
    padding: 10px;
    width: 100%;
    color: #38f;
    cursor: pointer;
    border: 1px dashed #e5e5e5;
    background: #fff;
  }

  .coupon-list-item {
    padding: 10px;
    width: 100%;
    cursor: pointer;
    border: 1px dashed #e5e5e5;
    background: #fff;
  }

  .top-item {
    .item-name {
      vertical-align: top;
      line-height: 30px;
    }
  }

  .item-content {
    width: 280px;

    .coupon-color-item {
      margin-right: 6px;
      padding: 2px;
      width: 22px;
      height: 22px;
      border: 1px solid #e5e5e5;
      cursor: pointer;

      .coupon-color {
        width: 100%;
        height: 100%;
      }

      .color-red {
        background: rgb(231, 76, 44);
      }

      .color-yellow {
        background: rgb(255, 233, 183);
      }

      .color-white {
        background: rgb(255, 255, 255);
      }

      .color-black {
        background: rgb(56, 59, 62);
      }

      .color-green {
        background: rgb(224, 244, 228);
      }
    }

    .color-active {
      border: 1px solid #38f;
    }
  }

  .flex-content {
    display: flex !important;
  }
}
</style>
