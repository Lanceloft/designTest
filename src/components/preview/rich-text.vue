<template>
  <div
    class="rich-text"
    :class="{ active: isActive }"
    :style="{
      background: richText.bgColor.hex
    }">
    <div :class="richTextContent">
      <div
        class="text-content"
        v-if="richText.content !== ''"
        v-html="richText.content"></div>
      <div
        v-else
        class="empty-text">
        点此编辑[富文本]内容 --->
        <br/>
        你可以对文字进行
        <strong>加粗</strong>
        <span class="oblique">斜体</span>
        <span class="undeline">下划线</span>
        <span class="delete-line">删除线</span>
        文字<span class="color-blue">颜色</span>
        <span class="bg-color">背景色</span>
        以及字号<span class="fs20">大</span>
        <span class="fs14">小</span>等简单排版操作
      </div>
    </div>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  components: {
    'quill-editor': quillEditor
  },

  props: {
    richText: Object,
    isActive: Boolean
  },

  data() {
    return {
    }
  },

  computed: {
    richTextContent() {
      return {
        'rich-text-content': this.richText.fullScreen === false
      }
    }
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
.rich-text {
  position: relative;
  background: #f8f8f8;
  border: 1px solid white;

  &:hover {
    border: 1px solid #38f;
  }

  .empty-text {
    font-size: 18px;
  }

  .rich-text-content {
    padding: 10px;

    .text-content /deep/ img {
      width: auto !important;
      height: auto !important;
    }
  }

  .oblique {
    font-style: oblique;
  }

  .undeline {
    text-decoration: underline;
  }

  .delete-line {
    text-decoration: line-through;
  }

  .color-blue {
    color: rgb(0, 176, 240);
  }

  .bg-color {
    color: white;
    background: rgb(255, 192, 0);
  }
}

.active {
  border: 1px dashed #38f;
}

</style>
