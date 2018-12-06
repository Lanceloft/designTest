<template>
  <div
    id="app"
    class="store-design-category-add">
    <div class="design-category-add-preview">
      <div
        class="homepage-header"
        @click="richTextClick('design-title')">
        <div class="header-name">{{ designTitle.title }}</div>
      </div>
      <div
        class="homepage-content"
        :style="{background: designTitle.bgColor.hex}">
        <draggable
          v-model="richTextPreviewItems"
          @end="richTextEnd">
          <transition-group
            ref="transition">
            <div
              class="add-item"
              v-for="(item, index) in richTextPreviewItems"
              :key="index">
              <Poptip
                width="200"
                confirm
                title="确定删除?"
                @on-ok="itemDelete(index)"
                @on-cancel="cancel">
                <Icon
                  class="icon-delete"
                  type="md-close-circle" />
              </Poptip>
              <li
                :isActive="activeIndex === index"
                @click.native="richTextClick(index)"
                :is="item.component"
                :richText="item.richText"
                :enterStoreTitle="item.enterStoreTitle"
                :storeMsgStyle="item.storeMsgStyle"
                :announcement="item.announcement"
                :commoditySearch="item.commoditySearch"
                :auxiliaryLine="item.auxiliaryLine"
                :auxiliaryBlankHeight="item.auxiliaryBlankHeight"
                :customizeList="item.customize"
                :imagesAds="item.imagesAds"
                :imagesTextNav="item.imagesTextNav"
                :text="item.text"
                :associatedLink="item.associatedLink"
                :title="item.title"
                :commodity="item.commodity"
                :commodityGroup="item.commodityGroup"
                :coupon="item.coupon">
              </li>
            </div>
          </transition-group>
        </draggable>
      </div>
      <div class="homepage-add-content">
        <h5>基础组件</h5>
        <div class="add-btn-group">
          <div
            class="add-btn"
            @click="addComponent('rich-text')">富文本
          </div>
          <div
            class="add-btn"
            @click="addComponent('commodity')">商品</div>
          <div
            class="add-btn"
            @click="addComponent('commodity-group')">商品分组</div>
          <div
            class="add-btn"
            @click="addComponent('images-ads')">图片广告</div>
          <div
            class="add-btn"
            @click="addComponent('images-text-nav')">图文导航</div>
          <div
            class="add-btn"
            @click="addComponent('text')">文本</div>
          <div
            class="add-btn"
            @click="addComponent('associated-link')">关联链接</div>
          <div
            class="add-btn"
            @click="addComponent('title')">标题</div>
        </div>
        <h5>营销组件</h5>
        <div class="add-btn-group">
          <div
            class="add-btn"
            @click="addComponent('coupon')">优惠券
          </div>
        </div>
        <h5>其他</h5>
        <div class="add-btn-group">
          <div
            class="add-btn"
            @click="addComponent('store-msg')">店铺信息
          </div>
          <div
            class="add-btn"
            @click="addComponent('enter-store')">进入店铺</div>
          <div
            class="add-btn"
            @click="addComponent('commodity-search')">商品搜索</div>
          <div
            class="add-btn"
            @click="addComponent('announcement')">公告</div>
          <div
            class="add-btn"
            @click="addComponent('video')">视频</div>
          <div
            class="add-btn"
            @click="addComponent('auxiliary-line')">辅助线</div>
          <div
            class="add-btn"
            @click="addComponent('auxiliary-blank')">辅助空白</div>
          <div
            class="add-btn"
            @click="addComponent('customize')">自定义模块</div>
        </div>
      </div>
    </div>
    <div
      v-show="showEditor"
      class="design-category-add-editor"
      :style="{'marginTop': editorOffset - 20 + 'px'}">
      <div
        class="editor-item">
        <li
          :is="editorItems.component">
        </li>
      </div>
    </div>
    <div class="config-btn">
      <Button
        class="save"
        type="primary"
        @click="saveDesign">保存</Button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import draggable from 'vuedraggable'
// 富文本
import RichTextPreview from './components/preview/rich-text.vue'
import RichTextEditor from './components/editor/rich-text.vue'
// 店铺信息
import StoreMsgPreview from './components/preview/store-msg.vue'
import StoreMsgEditor from './components/editor/store-msg.vue'
// 进入店铺
import EnterStorePreview from './components/preview/enter-store.vue'
import EnterStoreEditor from './components/editor/enter-store.vue'
// 商品搜索
import CommoditySearchPreview from './components/preview/commodity-search.vue'
import CommoditySearchEditor from './components/editor/commodity-search.vue'
// 公告
import AnnouncementPreview from './components/preview/announcement.vue'
import AnnouncementEditor from './components/editor/announcement.vue'
// 视频
import VideoPreview from './components/preview/video.vue'
import VideoEditor from './components/editor/video.vue'
// 辅助线
import AuxiliaryLinePreview from './components/preview/auxiliary-line.vue'
import AuxiliaryLineEditor from './components/editor/auxiliary-line.vue'
// 辅助空白
import AuxiliaryBlankPreview from './components/preview/auxiliary-blank.vue'
import AuxiliaryBlankEditor from './components/editor/auxiliary-blank.vue'
// 自定义模块
import CustomizePreview from './components/preview/customize.vue'
import CustomizeEditor from './components/editor/customize.vue'
// 图片广告
import ImagesAdsPreview from './components/preview/images-ads.vue'
import ImagesAdsEditor from './components/editor/images-ads.vue'
// 图文导航
import ImagesTextNavPreview from './components/preview/images-text-nav.vue'
import ImagesTextNavEditor from './components/editor/images-text-nav.vue'
// 文本
import TextPreview from './components/preview/text.vue'
import TextEditor from './components/editor/text.vue'
// 关联链接
import AssociatedLinkPreview from './components/preview/associated-link.vue'
import AssociatedLinkEditor from './components/editor/associated-link.vue'
// 标题
import TitlePreview from './components/preview/title.vue'
import TitleEditor from './components/editor/title.vue'
// 商品
import CommodityPreview from './components/preview/commodity.vue'
import CommodityEditor from './components/editor/commodity.vue'
// 商品分组
import CommodityGroupPreview from './components/preview/commodity-group.vue'
import CommodityGroupEditor from './components/editor/commodity-group.vue'
// 优惠券
import CouponPreview from './components/preview/coupon.vue'
import CouponEditor from './components/editor/coupon.vue'
// 微页面标题
import DesignTitleEditor from './components/editor/design-title.vue'

import './style/app.scss'

export default {
  name: 'app',
  components: {
    draggable,
    'rich-text-preview': RichTextPreview,
    'rich-text-editor': RichTextEditor,
    'store-msg-preview': StoreMsgPreview,
    'store-msg-editor': StoreMsgEditor,
    'enter-store-preview': EnterStorePreview,
    'enter-store-editor': EnterStoreEditor,
    'commodity-search-preview': CommoditySearchPreview,
    'commodity-search-editor': CommoditySearchEditor,
    'announcement-preview': AnnouncementPreview,
    'announcement-editor': AnnouncementEditor,
    'video-preview': VideoPreview,
    'video-editor': VideoEditor,
    'auxiliary-line-preview': AuxiliaryLinePreview,
    'auxiliary-line-editor': AuxiliaryLineEditor,
    'auxiliary-blank-preview': AuxiliaryBlankPreview,
    'auxiliary-blank-editor': AuxiliaryBlankEditor,
    'customize-preview': CustomizePreview,
    'customize-editor': CustomizeEditor,
    'images-ads-preview': ImagesAdsPreview,
    'images-ads-editor': ImagesAdsEditor,
    'images-text-nav-preview': ImagesTextNavPreview,
    'images-text-nav-editor': ImagesTextNavEditor,
    'text-preview': TextPreview,
    'text-editor': TextEditor,
    'associated-link-preview': AssociatedLinkPreview,
    'associated-link-editor': AssociatedLinkEditor,
    'title-preview': TitlePreview,
    'title-editor': TitleEditor,
    'commodity-preview': CommodityPreview,
    'commodity-editor': CommodityEditor,
    'commodity-group-preview': CommodityGroupPreview,
    'commodity-group-editor': CommodityGroupEditor,
    'coupon-editor': CouponEditor,
    'coupon-preview': CouponPreview,
    'design-title-editor': DesignTitleEditor
  },

  created() {
    this.richTextClick('design-title')
  },

  data() {
    return  {
    }
  },
  computed: {
    ...mapGetters({
      editorItems: 'getRichTextEditorItems',
      editorOffset: 'getEditorOffset',
      showEditor: 'getShowEditor',
      activeIndex: 'getActiveIndex',
      designTitle: 'getDesignTitle'
    }),

    richTextPreviewItems: {
      get() {
        return this.$store.state.design.previewItems
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetRichTextValue',
          param: value
        })
      }
    }
  },
  methods: {
    ...mapActions({
      saveDesign: 'toSaveDesign'
    }),
    addComponent(component) {
      const nowIndex = this.$store.state.design.previewItems.length - 1;
      const offset = this.$refs.transition.children[nowIndex].elm.offsetHeight + this.$refs.transition.children[nowIndex].elm.offsetTop
      const param = {
        component: component,
        index: nowIndex + 1,
        offset: offset
      }

      this.$store.dispatch({
        type: 'setComponent',
        param: param
      })
    },

    richTextClick(index) {
      if (typeof index === 'number') {
        const param = {
          index: index,
          offset: this.$refs.transition.children[index].elm.offsetTop
        }

        this.$store.dispatch({
          type: 'setRichTextComponentChange',
          param: param
        })
      } else {
        const param = {
          index: index,
          offset: 20
        }

        this.$store.dispatch({
          type: 'setRichTextComponentChange',
          param: param
        })
      }
    },

    richTextEnd(event) {
      const param = {
        index: event.newIndex,
        offset: this.$refs.transition.children[event.newIndex].elm.offsetTop
      }

      this.$store.dispatch({
        type: 'setRichTextComponentChange',
        param: param,
      })
    },

    itemDelete(index) {
      if (index !== 0) {
        const offset = this.$refs.transition.children[index].elm.offsetTop - this.$refs.transition.children[index - 1].elm.offsetHeight
        const param = {
          index: index,
          offset: offset,
        }
        this.$store.dispatch({
          type: 'toDeleteComponent',
          param: param
        })
      } else {
        const offset = this.$refs.transition.children[index].elm.offsetTop - this.$refs.transition.children[index].elm.offsetHeight
        const param = {
          index: index,
          offset: offset,
        }
        this.$store.dispatch({
          type: 'toDeleteComponent',
          param: param
        })
      }
    },

    cancel() {

    }
  }
}
</script>

<style>
</style>
