<template>
  <div class="rich-text">
    <div class="editor-item">
      <div class="item-col">
        <div class="item-name">背景颜色:</div>
        <div class="item-content rich-content">
          <div
            class="color-pick"
            @click="bgColorPickerChange">
            <div
              class="color-pick-preview"
              :style="{ background: bgColor.hex }">
            </div>
            <sketch-picker
              v-model="bgColor"
              v-show="openBgColorPicker"
              class="sketch-picker"/>
          </div>
          <span
            class="color-reset"
            @click="bgColorReset">重置</span>
        </div>
      </div>
      <div class="item-col">
        <div class="item-name">是否全屏:</div>
        <div class="item-content">
          <Checkbox v-model="fullScreen">全屏显示</Checkbox>
        </div>
      </div>
    </div>

    <quill-editor
      class="quill-editor"
      :content="content"
      @change="setEditorChange($event)" />
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import { mapActions } from 'vuex';
import { Sketch } from 'vue-color'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  components: {
    'quill-editor': quillEditor,
    'sketch-picker': Sketch,
  },

  data() {
    return {
      openBgColorPicker: false,
    }
  },

  props: {
  },

  computed: {
    content() {
      const designStore = this.$store.state.design;
      return designStore.previewItems[designStore.chooseIndex].richText.content
    },

    bgColor: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].richText.bgColor
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetRichTextBgColor',
          param: value
        })
      }
    },

    fullScreen: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].richText.fullScreen
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetRichTextFullScreen',
          param: value
        })
      }
    }
  },

  methods: {
    ...mapActions({
      bgColorReset: 'toRichTextBgColorReset',
    }),
    setEditorChange({ quill, html, text }) {
      this.$store.dispatch({
        type: 'setEditorChange',
        param: html
      })
    },

    bgColorPickerChange() {
      if (this.openBgColorPicker) {
        this.openBgColorPicker = false;
      } else {
        this.openBgColorPicker = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.rich-text {
  margin-bottom: 10px;

  .editor-item {
    display: flex;
    align-items: center;

    .item-col {
      flex: 1;
      display: flex;
      align-items: center;
    }

    .rich-content {
      display: flex !important;
    }

    .color-reset {
      margin-left: 10px;
      color: #38f;
      cursor: pointer;
    }

    .color-pick {
      border: 1px solid #bbb;
      border-radius: 2px;
      width: 50px;
      height: 30px;
      padding: 5px;
      cursor: pointer;
      background: #fff;

      .color-pick-preview {
        height: 100%;
        background: red;
      }

      .sketch-picker {
        z-index: 999;
      }
    }
  }

  .quill-editor /deep/ .ql-container {
    .ql-editor {
      min-height: 200px;

      /deep/ img {
        width: auto !important;
        height: auto !important;
      }
    }
  }
}



</style>
