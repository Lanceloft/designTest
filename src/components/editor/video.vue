<template>
  <div class="video">
    <div class="editor-item">
      <div class="item-name">视频:</div>
      <div class="item-content">
        <RadioGroup
          v-model="videoType">
          <Radio label="1">选择视频</Radio>
          <Radio label="2">粘贴视频地址</Radio>
        </RadioGroup>
        <div>
          <Input v-if="videoType === '2'" placeholder="此处粘贴视频播放地址" />
        </div>
      </div>
    </div>

    <div class="editor-item">
      <div class="item-name">封面图:</div>
      <div class="item-content">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },

  data() {
    return {
    }
  },

  props: {
  },

  computed: {
    videoType: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].video.type
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetVideoType',
          param: value
        })
      }
    }

  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>
.video {
  .editor-item {
    .item-name {
      vertical-align: top;
      line-height: 30px;
    }
  }
}
</style>
