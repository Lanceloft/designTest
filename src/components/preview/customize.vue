<template>
  <div
    class="customize"
    :class="{ active: isActive }">
    <div
      v-for="(item, index) in customizeList"
      :key="index">
      <li
        :is="item.component"
        :content="item.content"
        :enterStoreTitle="item.enterStoreTitle"
        :storeMsgStyle="item.storeMsgStyle"
        :announcement="item.announcement"
        :commoditySearch="item.commoditySearch"
        :auxiliaryLine="item.auxiliaryLine"
        :auxiliaryBlankHeight="item.auxiliaryBlankHeight">
      </li>
    </div>
  </div>
</template>

<script>
// 富文本
import RichTextPreview from './rich-text.vue'
// 店铺信息
import StoreMsgPreview from './store-msg.vue'
// 进入店铺
import EnterStorePreview from './enter-store.vue'
// 商品搜索
import CommoditySearchPreview from './commodity-search.vue'
// 公告
import AnnouncementPreview from './announcement.vue'
// 视频
import VideoPreview from './video.vue'
// 辅助线
import AuxiliaryLinePreview from './auxiliary-line.vue'
// 辅助空白
import AuxiliaryBlankPreview from './auxiliary-blank.vue'
export default {
  components: {
    'rich-text-preview': RichTextPreview,
    'store-msg-preview': StoreMsgPreview,
    'enter-store-preview': EnterStorePreview,
    'commodity-search-preview': CommoditySearchPreview,
    'announcement-preview': AnnouncementPreview,
    'video-preview': VideoPreview,
    'auxiliary-line-preview': AuxiliaryLinePreview,
    'auxiliary-blank-preview': AuxiliaryBlankPreview,
  },

  props: {
    isActive: Boolean,
    customizeList: Array
  },

  data() {
    return {
    }
  },

  computed: {
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>


.customize {
  border: 1px solid white;
  &:hover {
    border: 1px solid #38f;
  }

  .rich-text, .announcement, .associated-link,
  .auxiliary-blank, .auxiliary-line, .commodity,
  .commodity-search, .coupon, .enter-store,
  .images-ads, .images-text-nav, .store-msg, .text,
  .title, .video {
    border: 0 !important;
  }
}

.active {
  border: 1px dashed #38f;
}
</style>
