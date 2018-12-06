<template>
  <div class="commodity">

    <div class="top-item">
      <div class="item-name">商品分组:</div>
      <div class="item-content list-style">
        <p class="color-grey">最多添加15个商品分组</p>
      </div>
    </div>
    <div
      class="commodity-group-item"
      v-for="(item, index) in group"
      :key="index">
      <Icon
        class="icon-delete"
        type="md-close-circle"
        @click="deleteCommodityGroup(index)" />
      <div class="editor-item">
        <div class="item-name">商品来源:</div>
        <div class="item-content">{{ item.source }}</div>
      </div>
      <div class="editor-item">
        <div class="item-name">菜单名称:</div>
        <div class="item-content">
          <Input v-model="item.name" />
        </div>
      </div>
      <div class="editor-item">
        <div class="item-name">显示个数:</div>
        <div class="item-content">
          <RadioGroup
            v-model="item.showType">
            <Radio label="0">
              <Input
                class="number-input"
                v-model="item.showNumber" />
            </Radio>
            <Radio label="1">全部</Radio>
          </RadioGroup>
        </div>
      </div>
    </div>

    <div class="editor-item">
      <div
        class="add-commodity-group"
        @click="openCommodityGroupModal">+ 添加商品分组</div>
    </div>

    <div
      class="top-item"
      v-show="template === '0'">
      <div class="item-name">全部分组:</div>
      <div class="item-content list-style">
        <p class="color-grey">全部分组为商品的集合分组，增加消费者逛的体验</p>
        <RadioGroup
          v-model="showAll">
          <Radio label="0">不展示</Radio>
          <Radio label="1">展示</Radio>
        </RadioGroup>
      </div>
    </div>

    <div class="editor-item">
      <div class="item-name">展示模板:</div>
      <div class="item-content">
        <RadioGroup
          v-model="template">
          <Radio label="0">顶部菜单</Radio>
          <Radio label="1">左侧菜单</Radio>
        </RadioGroup>
      </div>
    </div>

    <div
      class="editor-item"
      v-show="template === '0'">
      <div class="item-name">菜单样式:</div>
      <div class="item-content">
        <RadioGroup
          v-model="menuStyle">
          <Radio label="0">样式1</Radio>
          <Radio label="1">样式2</Radio>
          <Radio label="2">样式3</Radio>
        </RadioGroup>
      </div>
    </div>

    <div
      class="editor-item"
      v-show="template === '0'">
      <div class="item-name">菜单位置:</div>
      <div class="item-content">
        <RadioGroup
          v-model="menuPosition">
          <Radio label="0">正常模式</Radio>
          <Radio label="1">滚动至顶部固定</Radio>
        </RadioGroup>
      </div>
    </div>


    <div
      class="top-item"
      v-show="template === '0'">
      <div class="item-name">列表样式:</div>
      <div class="item-content list-style">
        <RadioGroup
          v-model="listStyle">
          <Radio label="0">大图模式</Radio>
          <Radio label="1">一行两个</Radio>
          <Radio label="2">一行三个</Radio>
          <Radio label="3">详细列表</Radio>
          <Radio label="4">一大两小</Radio>
          <Radio label="5">横向滑动</Radio>
        </RadioGroup>
      </div>
    </div>

    <div
      class="top-item"
      v-show="template === '1'">
      <div class="item-name">列表样式:</div>
      <div class="item-content list-style">
        <RadioGroup
          v-model="details">
          <Radio label="0">详细列表</Radio>
        </RadioGroup>
      </div>
    </div>

    <div class="list-details">
      <div class="editor-item tempalte-item">
        <div class="item-name">页面边距:</div>
        <div class="item-content slider-way">
          <Slider
            v-model="pageMargin"
            :min="0"
            :max="30"
            show-input></Slider>
        </div>
      </div>

      <div class="editor-item tempalte-item">
        <div class="item-name">商品间距:</div>
        <div class="item-content slider-way">
          <Slider
            v-model="commodityMargin"
            :min="0"
            :max="15"
            show-input></Slider>
        </div>
      </div>

      <div
        class="top-item"
        v-show="template === '0'">
        <div class="item-name">商品样式:</div>
        <div class="item-content list-style">
          <RadioGroup
            v-model="commodityStyle">
            <Radio label="0">无边白底</Radio>
            <Radio label="1">卡片投影</Radio>
            <Radio label="2">描边白底</Radio>
            <Radio label="3">无边透明底</Radio>
            <Radio label="4" v-show="listStyle === '1'">促销</Radio>
            <Radio label="5" v-show="listStyle === '1'">瀑布流</Radio>
          </RadioGroup>
        </div>
      </div>

      <div class="editor-item">
        <div class="item-name">商品倒角:</div>
        <div class="item-content list-style">
          <RadioGroup
            v-model="commodityBorderRadius">
            <Radio label="0">直角</Radio>
            <Radio label="1">圆角</Radio>
          </RadioGroup>
        </div>
      </div>

      <div
        class="editor-item"
        v-show="template === '0'">
        <div class="item-name">图片比例:</div>
        <div class="item-content list-style">
          <RadioGroup
            v-model="pictureRatio">
            <Radio label="0" :disabled="listStyle === '3'">3:2</Radio>
            <Radio label="1">1:1</Radio>
            <Radio label="2" :disabled="listStyle === '3'">3:4</Radio>
            <Radio label="3" :disabled="listStyle === '3'">16:9</Radio>
          </RadioGroup>
        </div>
      </div>

      <div class="editor-item">
        <div class="item-name">图片填充:</div>
        <div class="item-content list-style">
          <RadioGroup
            v-model="pictureFill">
            <Radio label="0">填充</Radio>
            <Radio label="1">周边留白</Radio>
          </RadioGroup>
        </div>
      </div>

      <div class="editor-item">
        <div class="item-name">文本样式:</div>
        <div class="item-content list-style">
          <RadioGroup
            v-model="textStyle">
            <Radio label="0">常规体</Radio>
            <Radio label="1">加粗体</Radio>
          </RadioGroup>
        </div>
      </div>

      <div class="editor-item">
        <div class="item-name">文本对齐:</div>
        <div class="item-content list-style">
          <RadioGroup
            v-model="textAlign">
            <Radio label="left">左对齐</Radio>
            <Radio
              label="center"
              :disabled="listStyle === '3'">居中对齐</Radio>
          </RadioGroup>
        </div>
      </div>

      <div class="top-item">
        <div class="item-name">显示内容:</div>
        <div class="item-content list-style">
          <CheckboxGroup
             class="vertical-radio"
             v-model="showContent">
            <Checkbox
              label="0"
              :disabled="listStyle === '3' || template === '1'"
              >商品名称</Checkbox>
            <Checkbox label="1">商品描述</Checkbox>
            <Checkbox label="2">商品价格</Checkbox>
            <Checkbox
              label="3">购买按钮</Checkbox>
            <RadioGroup
              v-show="showContent.indexOf('3') !== -1"
              v-model="buyStyle">
              <Radio label="0" :disabled="textAlign === 'center'">样式1</Radio>
              <Radio label="1" :disabled="textAlign === 'center'">样式2</Radio>
              <Radio label="2" :disabled="listStyle === '2' || listStyle === '5'">样式3</Radio>
              <Radio label="3" :disabled="listStyle === '2' || listStyle === '5'">样式4</Radio>
              <Radio label="4" :disabled="textAlign === 'center'">样式5</Radio>
              <Radio label="5" :disabled="textAlign === 'center'">样式6</Radio>
              <Radio label="6" :disabled="listStyle === '2' || listStyle === '5'">样式7</Radio>
              <Radio label="7" :disabled="listStyle === '2' || listStyle === '5'">样式8</Radio>
            </RadioGroup>
            <div
              v-show="
              buyStyle === '2' ||
              buyStyle === '3' ||
              buyStyle === '6' ||
              buyStyle === '7'">
              <Input
                v-model="buyName"
                class="buy-input-name"
                :maxlength="4" />
              <Tooltip content="自定义购买按钮文案，最多输入四个字">
                <Icon class="buy-icon-help" type="ios-help-circle" />
              </Tooltip>
            </div>
            <Checkbox label="4" v-show="template === '0'">商品角标</Checkbox>
            <RadioGroup
              v-show="showContent.indexOf('4') !== -1"
              v-model="badge">
              <Radio label="0">新品</Radio>
              <Radio label="1">热卖</Radio>
              <Radio label="2">NEW</Radio>
              <Radio label="3">HOT</Radio>
              <Radio label="4">自定义</Radio>
            </RadioGroup>
            <div
              v-show="badge === '4'"
              class="add-badge-img">
              <Icon
                v-if="badgeUrl === ''"
                class="add"
                type="md-add"
                @click="addBadgeImg" />
              <img
                v-else
                :src="badgeUrl" />
            </div>
          </CheckboxGroup>
        </div>
      </div>
      <commodity-group-modal
        :commodityGroupModalVisible="commodityGroupModalVisible"
        :confirm="confirmCommodityGroup"
        :cancel="cancelCommodityGroup"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CommodityGroupModal from '../commodity-group-modal.vue'
export default {
  components: {
    'commodity-group-modal': CommodityGroupModal
  },

  data() {
    return {
      details: '0'
    }
  },

  computed: {
    ...mapGetters({
      commodityGroupModalVisible: 'getCommoditGroupyModalVisible'
    }),

    group() {
      const designStore = this.$store.state.design;
      return designStore.previewItems[designStore.chooseIndex].commodityGroup.group
    },

    showAll: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commodityGroup.showAll
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCommodityGroupShowAll',
          param: value
        })
      }
    },

    template: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commodityGroup.template
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCommodityGroupTemplate',
          param: value
        })
      }
    },

    menuStyle: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commodityGroup.menuStyle
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCommodityGroupMenuStyle',
          param: value
        })
      }
    },

    menuPosition: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commodityGroup.menuPosition
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCommodityGroupMenuPosition',
          param: value
        })
      }
    },

    listStyle: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commodityGroup.listStyle
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCommodityGroupListStyle',
          param: value
        })
      }
    },

    pageMargin: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commodityGroup.pageMargin
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCommodityGroupPageMarigin',
          param: value
        })
      }
    },

    commodityMargin: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commodityGroup.commodityMargin
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCommodityGroupCommodityMarigin',
          param: value
        })
      }
    },

    commodityStyle: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commodityGroup.commodityStyle
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCommodityGroupCommodityStyle',
          param: value
        })
      }
    },

    commodityBorderRadius: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commodityGroup.commodityBorderRadius
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCommodityGroupCommodityBorderRadius',
          param: value
        })
      }
    },

    pictureRatio: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commodityGroup.pictureRatio
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCommodityGroupPictureRatio',
          param: value
        })
      }
    },

    pictureFill: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commodityGroup.pictureFill
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCommodityGroupPictureFill',
          param: value
        })
      }
    },

    textStyle: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commodityGroup.textStyle
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCommodityGroupTextStyle',
          param: value
        })
      }
    },

    textAlign: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commodityGroup.textAlign
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCommodityGroupTextAlign',
          param: value
        })
      }
    },

    showContent: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commodityGroup.showContent
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCommodityGroupShowContent',
          param: value
        })
      }
    },

    buyStyle: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commodityGroup.buyStyle
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCommodityGroupBuyStyle',
          param: value
        })
      }
    },

    buyName: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commodityGroup.buyName
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCommodityGroupBuyName',
          param: value
        })
      }
    },

    badge: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commodityGroup.badge
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCommodityGroupBadge',
          param: value
        })
      }
    },

    badgeUrl() {
      const designStore = this.$store.state.design;
      return designStore.previewItems[designStore.chooseIndex].commodityGroup.badgeUrl
    }
  },

  methods: {
    ...mapActions({
      openCommodityGroupModal: 'toOpenCommodityGroupModal',
      cancelCommodityGroup: 'toCloseCommodityGroupModal'
    }),
    confirmCommodityGroup() {
      this.$store.dispatch({
        type: 'toConfirmCommodityGroup'
      })
    },

    deleteCommodityGroup(index) {
      this.$store.dispatch({
        type: 'toCommodityDeleteCommodityGroup',
        param: index
      })
    },

    addBadgeImg() {
      this.$store.dispatch({
        type: 'toAddBadgeImg'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.commodity {
  border: 0 !important;
  .list-details {
    padding: 10px 0;
    background: #fff;
  }

  .editor-item  {
    display: flex;
    align-items: center;

    .add-commodity-group {
      width: 100%;
      padding: 10px;
      color: #38f;
      cursor: pointer;
      border: 1px dashed #e5e5e5;
      background: #fff;
    }
  }

  .number-input {
    width: 100px;
  }

  .buy-input-name {
    width: 100px;
  }

  .buy-icon-help {
    font-size: 20px;
    color: #999;
  }

  .commodity-group-item {
    position: relative;
    margin-bottom: 10px;
    padding: 10px 0;
    background: #fff;

    &:hover .icon-delete {
      display: block;
    }

    .icon-delete {
      display: none;
      position: absolute;
      top: -10px;
      right: -10px;
      font-size: 20px;
      cursor: pointer;
      z-index: 999;
    }
  }

  .add-badge-img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: 1px solid #ddd;
    cursor: pointer;
    color: #38f;
  }

  .commodity-choose {
    padding: 10px 0;
    background: #fff;

    .item-content {
      width: 250px;
    }

    .commodity-list {
      display: flex;
      flex-wrap: wrap;

      .commodity-item {
        position: relative;
        margin: 0 10px 10px 0;
        width: 50px;
        height: 50px;
        border: 1px dashed #ddd;
        background: #fff;

        &:hover .icon-delete {
          display: block;
        }

        .icon-delete {
          display: none;
          position: absolute;
          top: -10px;
          right: -10px;
          font-size: 20px;
          cursor: pointer;
          z-index: 999;
        }

        img {
          display: inherit;
        }
      }

      .add-item {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        .add {
          font-size: 18px;
          color: #38f;
        }
      }
    }
  }

  .top-item {
    .item-name {
      vertical-align: top;
      line-height: 30px;
    }

    .list-style {
      width: 270px;

      .color-grey {
        color: #999;
      }
    }
  }

  .vertical-radio {
    .ivu-checkbox-wrapper {
      display: block;
    }
  }

  .tempalte-item {
    display: flex;

    .item-name {
    }

    .fill-way {
      line-height: 30px;
    }

    .slider-way {
      line-height: 36px;
    }

    .item-content {
      flex: 4;
    }
  }
}
</style>
