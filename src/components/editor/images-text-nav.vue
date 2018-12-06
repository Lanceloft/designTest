<template>
  <div class="images-text-nav">
    <div class="editor-item">
      <div class="item-name">选择模板:</div>
      <div class="item-content">
        <div class="template-list">
          <div
            class="template"
            v-for="(item, index) in template"
            :key="index"
            @click="changeTemplate(index)">
            <template-box
              :src="item.src"
              :title="item.name"
              :activeClass="[chooseTemplate === index.toString() ? 'template-active': '']" />
          </div>
        </div>
      </div>
    </div>
    <div class="editor-item flex-item">
      <div class="item-name">滑动设置:</div>
      <div class="item-content">
        <RadioGroup
          v-model="sliderSetting">
          <Radio label="0">固定</Radio>
          <Radio label="1">横向滑动</Radio>
        </RadioGroup>
      </div>
    </div>

    <div class="editor-item flex-item" v-show="sliderSetting === '1'">
      <div class="item-name">一屏显示:</div>
      <div class="item-content">
        <Select
          v-model="screenNumber"
          class="flex-select">
          <Option
            v-for="item in screenNumberList"
            :value="item.value"
            :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
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
      <div class="item-name">文字颜色:</div>
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

    <div class="editor-item">
      <div
        class="imgs-text-nav"
        v-for="(item, index) in navList"
        :key="index">
        <Icon
          class="icon-delete"
          type="md-close-circle" />
        <imgs-text-content
          :itemList="item" />
      </div>
    </div>

    <div class="editor-item tempalte-item">
      <div class="add-images" @click="addNav">
        <p class="add">+ 添加一个图文导航</p>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TemplateBox from '../template-box.vue'
import ImgsTextContent from '../imgs-text-content.vue'
import { Sketch } from 'vue-color'

export default {
  components: {
    'template-box': TemplateBox,
    'sketch-picker': Sketch,
    'imgs-text-content': ImgsTextContent
  },

  data() {
    return {
      template: [
        {
          src: 'https://img.yzcdn.cn/public_files/2018/03/05/529cce58887e92027398cae070cb1a09.png',
          name: '图片导航'
        }, {
          src: 'https://img.yzcdn.cn/public_files/2018/03/05/570bc12622847a5a100e4697c88065ef.png',
          name: '文字导航'
        }
      ],
      screenNumberList: [
        {
          value: '4',
          label: '4个导航'
        }, {
          value: '5',
          label: '5个导航'
        }, {
          value: '6',
          label: '6个导航'
        }, {
          value: '7',
          label: '7个导航'
        }, {
          value: '8',
          label: '8个导航'
        }, {
          value: '9',
          label: '9个导航'
        }, {
          value: '10',
          label: '10个导航'
        }
      ],
      openBgColorPicker: false,
      openTextColorPicker: false,
    }
  },

  computed: {
    chooseTemplate() {
      const designStore = this.$store.state.design;
      return designStore.previewItems[designStore.chooseIndex].imagesTextNav.template
    },

    sliderSetting: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].imagesTextNav.sliderSetting
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetImagesTextNavSliderSetting',
          param: value
        })
      }
    },

    bgColor: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].imagesTextNav.bgColor
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetImagesTextNavBgColor',
          param: value
        })
      }
    },

    screenNumber: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].imagesTextNav.screenNumber
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetImagesTextNavScreenNumber',
          param: value
        })
      }
    },

    textColor: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].imagesTextNav.textColor
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetImagesTextNavTextColor',
          param: value
        })
      }
    },

    navList() {
      const designStore = this.$store.state.design;
      return designStore.previewItems[designStore.chooseIndex].imagesTextNav.nav
    }

  },

  methods: {
    ...mapActions({
      bgColorReset: 'toSetImagesTextNavBgReset',
      textColorReset: 'toSetImagesTextNavTextReset',
      addNav: 'toAddImagesTextNav'
    }),

    changeTemplate(template) {
      this.$store.dispatch({
        type: 'toChangeImagesTextNavTemplate',
        param: template
      })
    },

    bgColorPickerChange() {
      if (this.openBgColorPicker) {
        this.openBgColorPicker = false;
      } else {
        this.openBgColorPicker = true;
      }
    },

    textColorPickerChange() {
      if (this.openTextColorPicker) {
        this.openTextColorPicker = false;
      } else {
        this.openTextColorPicker = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.images-text-nav {
  .flex-item {
    display: flex;
    align-items: center;

    .flex-select {
      width: 150px;
    }
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

  .template-list {
    display: flex;
    flex-wrap: wrap;
    .template {
      margin: 0 4px 15px 0;
    }

    .template-active {
      border: 1px solid #38f;
    }
  }

  .add-images {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;
    cursor: pointer;
    background: #fff;

    .add {
      color: #38f;
    }

    .tips {
      color: #999;
    }
  }
}
</style>
