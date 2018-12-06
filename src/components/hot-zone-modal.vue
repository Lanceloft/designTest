<template >
  <div class="hot-zone-modal">
    <Modal
      width="650"
      :value="hotZoneModalVisible"
      title="自定义模块"
      @on-ok="confirmHotzone"
      @on-cancel="closeHotZoneModal">
      <div>
        <Steps :current="-1" size="small">
          <Step title="添加热区"></Step>
          <Step title="调整热区大小和位置"></Step>
          <Step title="设置关联链接"></Step>
          <Step title="保存生效"></Step>
        </Steps>
      </div>
      <div class="hot-zone-modal-content">
        <div>
          <img
            @click="closeAllSelect"
            class="hot-zone-image"
            :src="hotZoneParam.imgSrc" />
            <template
              v-for="(item, index) in hotZoneParam.hotZone">
              <vue-draggable-resizable
                :parent="true"
                v-on:resizing="onResize"
                @dragstop="onDragstop"
                :x="item.x"
                :y="item.y"
                :w="item.width"
                :h="item.height">
                <div
                  class="hot-area"
                  @dblclick="openAssociatedLink(index)">
                  <Icon
                    class="icon-delete"
                    type="md-close-circle"
                    @click="deleteHotZone(index)" />
                  <div class="add-hot-zone">
                    <p v-show="item.target === ''">双击设置</p>
                    <p v-show="item.target === ''">关联链接</p>
                    <p v-show="item.target !== ''">{{ item.target }}</p>
                  </div>
                  <ul
                    v-show="item.show"
                    class="hot-zone-select">
                    <li @click="openCouponModal">微页面及分类</li>
                    <li @click="openCouponModal">商品及分组</li>
                    <li @click="openCouponModal">优惠券</li>
                    <li @click="openCouponModal">秒杀活动</li>
                    <li @click="openCouponModal">营销活动</li>
                    <li @click="openCouponModal">投票调查</li>
                    <li>历史消息</li>
                    <li>店铺主页</li>
                    <li>会员主页</li>
                    <li>购物车</li>
                  </ul>
                </div>
              </vue-draggable-resizable>
            </template>
        </div>
      </div>
      <coupon-modal
        :couponModalVisible="couponModalVisible"
        :confirm="confirm"
        :cancel="cancel" />
      <div slot="footer">
        <Button
          type="primary"
          @click="addHotZone">添加热区</Button>
        <Button @click="closeHotZoneModal">保存</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Modal, Button, Input, Steps, Step } from 'iview'
import CouponModal from './coupon-modal.vue'

export default {
  props: {
  },

  components: {
    'coupon-modal': CouponModal,
  },

  data() {
    return {
      couponModalVisible: false
    }
  },

  computed: {
    ...mapGetters({
      hotZoneModalVisible: 'getHotZoneModalVisible',
      hotZoneParam: 'getHotZoneParam'
    })
  },

  methods: {
    ...mapActions({
      closeHotZoneModal: 'toCloseHotZoneModal',
      addHotZone: 'toAddHotZone'
    }),
    confirmHotzone() {

    },
    onResize(x, y, width, height) {
      console.log(this.hotZoneParam);
      console.log(x, y, width, height);
    },
    onDragstop(x, y) {
      console.log();
    },
    openAssociatedLink(index) {
      this.$store.dispatch({
        type: 'toOpenHotZoneAssociatedLink',
        param: index
      })
    },
    deleteHotZone(index) {
      this.$store.dispatch({
        type: 'toDeleteHotZone',
        param: index
      })
    },
    confirm() {
      this.$store.dispatch({
        type: 'toConfirmHotZoneCoupon'
      })
      this.couponModalVisible = false;
    },
    cancel() {
      this.couponModalVisible = false
    },
    openCouponModal() {
      this.couponModalVisible = true
    },
    closeAllSelect() {
      this.$store.dispatch({
        type: 'toHotZoneCloseAll'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.hot-zone-modal-content {
  position: relative;
  margin-top: 10px;
  width: 100%;
  height: 420px;
  overflow-y: scroll;

  .hot-zone-image {
    display: inherit;
    height: auto;
  }

  .add-hot-zone {
  }

  .hot-zone-select {
    position: absolute;
    width: 150px;
    height: 150px;
    overflow: scroll;
    background: #f8f8f8;

    li {
      height: 30px;
      line-height: 30px;
      text-align: left;
      padding-left: 10px;
      cursor: pointer;
      color: #666;

      &:hover {
        color: white;
        background: #38f;
      }
    }
    // bottom: 0px;

  }

  .draggable {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 60px;
    min-height: 60px;
    cursor: move;
    color: #fff;
    background: rgba(51,136,255,.5);

    &:hover .icon-delete {
      display: block;
    }

    .icon-delete {
      display: none;
      position: absolute;
      top: -4px;
      right: -10px;
      font-size: 20px;
      cursor: pointer;
      z-index: 999;
    }
  }
}
</style>
