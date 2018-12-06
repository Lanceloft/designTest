<template>
  <div class="text">
    <div class="editor-item">
      <div class="item-name">文本:</div>
      <div class="item-content">
        <Input
          v-model="text"
          type="textarea"
          :rows="4"
          placeholder="请输入要说明的文字, 最多100字" />
      </div>
    </div>

    <div class="editor-item flex-item">
      <div class="item-name">字体大小:</div>
      <div class="item-content">
        <RadioGroup
          v-model="fontSize">
          <Radio :label="18">大</Radio>
          <Radio :label="16">中</Radio>
          <Radio :label="14">小</Radio>
        </RadioGroup>
      </div>
    </div>

    <div class="editor-item flex-item">
      <div class="item-name">文本颜色:</div>
      <div class="item-content">
        <div
          class="color-pick"
          @click="textColorPickerChange">
          <div
            class="color-pick-preview"
            :style="{ background: textColor.hex }">
          </div>
          <sketch-picker
            v-model="textColor"
            v-show="openTextColorPicker"
            class="sketch-picker"/>
        </div>
      </div>
      <span
        class="color-reset"
        @click="textColorReset">重置</span>
    </div>

    <div class="editor-item flex-item">
      <div class="item-name">背景颜色:</div>
      <div class="item-content">
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
      </div>
      <span
        class="color-reset"
        @click="bgColorReset">重置</span>
    </div>

    <div class="editor-item flex-item">
      <div class="item-name">显示位置:</div>
      <div class="item-content">
        <RadioGroup
          v-model="textAlign">
          <Radio label="left">居左</Radio>
          <Radio label="center">居中</Radio>
          <Radio label="right">居右</Radio>
        </RadioGroup>
      </div>
    </div>

    <div class="editor-item flex-item">
      <div class="item-name">链接:</div>
      <div class="item-content">
        <span class="jump-to">选择跳转的页面</span>
      </div>
    </div>

    <div class="editor-item flex-item">
      <div class="item-name">更多设置:</div>
      <div class="item-content">
        <Checkbox v-model="showDividingLine">显示底部分割线</Checkbox>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Sketch } from 'vue-color'
export default {
  components: {
    'sketch-picker': Sketch,
  },

  data() {
    return {
      openTextColorPicker: false,
      openBgColorPicker: false
    }
  },

  computed: {
    text: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].text.text
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetTextText',
          param: value
        })
      }
    },

    fontSize: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].text.fontSize
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetTextFontSize',
          param: value
        })
      }
    },

    textColor: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].text.textColor
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetTextTextColor',
          param: value
        })
      }
    },

    bgColor: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].text.bgColor
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetTextBgColor',
          param: value
        })
      }
    },

    textAlign: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].text.textAlign
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetTextTextAlign',
          param: value
        })
      }
    },

    showDividingLine: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].text.showDividingLine
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetTextShowDividingLine',
          param: value
        })
      }
    }
  },

  methods: {
    ...mapActions({
      textColorReset: 'toSetTextTextColorReset',
      bgColorReset: 'toSetTextBgColorReset'
    }),
    textColorPickerChange() {
      if (this.openTextColorPicker) {
        this.openTextColorPicker = false;
      } else {
        this.openTextColorPicker = true;
      }
    },

    bgColorPickerChange() {
      if (this.openBgColorPicker) {
        this.openBgColorPicker = false;
      } else {
        this.openBgColorPicker = true;
      }
    }

  },
}
</script>

<style lang="scss" scoped>
.text {
  .flex-item {
    display: flex;
    align-items: center;
  }

  .item-name {
    vertical-align: top;
  }

  .color-pick {
    border: 1px solid #bbb;
    border-radius: 2px;
    width: 50px;
    height: 30px;
    padding: 5px;
    cursor: pointer;

    .color-pick-preview {
      height: 100%;
      background: red;
    }

    .sketch-picker {
      z-index: 999;
      // margin-top: 10px;
    }
  }

  .color-reset {
    margin-left: 10px;
    color: #38f;
    cursor: pointer;
  }

  .jump-to {
    color: #38f;
    cursor: pointer;
  }

}
</style>
