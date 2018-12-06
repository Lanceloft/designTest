<template>
  <div class="auxiliary-line">
    <div class="editor-item">
      <div class="item-name">颜色:</div>
      <div class="item-content">
        <div
          class="color-pick"
          @click="borderColorPickerChange">
          <div
            class="color-pick-preview"
            :style="{ background: borderColor.hex }">
          </div>
          <sketch-picker
            v-model="borderColor"
            v-show="openBorderColorPicker"
            class="sketch-picker"/>
        </div>
      </div>
      <span
        class="color-reset"
        @click="borderColorReset">重置</span>
    </div>
    <div class="editor-item">
      <div class="item-name">边距:</div>
      <div class="item-content">
        <RadioGroup
          v-model="borderPadding">
          <Radio label="0">无边距</Radio>
          <Radio label="1">左右留边</Radio>
        </RadioGroup>
      </div>
    </div>
    <div class="editor-item">
      <div class="item-name">边距:</div>
      <div class="item-content">
        <RadioGroup
          v-model="borderStyle">
          <Radio label="solid">实线</Radio>
          <Radio label="dashed">虚线</Radio>
          <Radio label="dotted">点线</Radio>
        </RadioGroup>
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
      openBorderColorPicker: false
    }
  },

  props: {
  },

  computed: {
    borderColor: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].auxiliaryLine.borderColor
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetAuxiliaryLineBorderColor',
          param: value
        })
      }
    },

    borderPadding: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].auxiliaryLine.borderPadding
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetAuxiliaryLineBorderPadding',
          param: value
        })
      }
    },

    borderStyle: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].auxiliaryLine.borderStyle
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetAuxiliaryLineBorderStyle',
          param: value
        })
      }
    }
  },

  methods: {
    ...mapActions({
      borderColorReset: 'toBorderColorReset'
    }),
    borderColorPickerChange() {
      if (this.openBorderColorPicker) {
        this.openBorderColorPicker = false;
      } else {
        this.openBorderColorPicker = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.auxiliary-line {
  .editor-item {
    display: flex;
    align-items: center;

    .item-content {
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
        }
      }
    }

    .color-reset {
      margin-left: 10px;
      color: #38f;
      cursor: pointer;
    }
  }
}
</style>
