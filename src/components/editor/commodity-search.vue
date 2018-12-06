<template>
  <div class="commodity-search">
    <div class="search-item">
      <div class="search-name">搜索热词:</div>
      <div class="search-content">
        <p>鼠标拖拽调整热词顺序，搜索框默认展示第一个热词，其他搜索词将以标签形式显示在搜索页中</p>
        <div
          v-for="(item, index) in hotword"
          :key="index"
          class="editor-card">
          <Icon
            class="icon-delete"
            type="md-close-circle"
            @click="deleteHotWord(index)" />
          <Input
            v-model="item.text"
            class="card-input" />
        </div>
        <div
          v-show="hotword.length <= 4"
          class="editor-card"
          @click="addHotWord">
          <Icon type="md-add" />
          添加热词
        </div>
      </div>
    </div>
    <div class="search-second-item">
      <div class="search-name">搜索样式:</div>
      <div class="search-second-content">
        <div class="editor-item">
          <div class="item-name">显示样式:</div>
          <div class="item-content">
            <RadioGroup
              v-model="boxStyle">
              <Radio label="0">方形</Radio>
              <Radio label="1">圆形</Radio>
            </RadioGroup>
          </div>
        </div>
        <div class="editor-item slider-item">
          <div class="item-name">框体高度:</div>
          <div class="slider-content">
            <Slider
              v-model="boxHeight"
              :min="28"
              :max="40"
              show-input></Slider>
          </div>
        </div>
        <div class="editor-item">
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
        <div class="editor-item">
          <div class="item-name">框体颜色:</div>
          <div class="item-content">
            <div class="color-pick" @click="boxColorPickerChange">
              <div
                class="color-pick-preview"
                :style="{ background: boxColor.hex }">
              </div>
              <sketch-picker
                v-model="boxColor"
                v-show="openBoxColorPicker"
                class="sketch-picker"/>
            </div>
          </div>
          <span
            class="color-reset"
            @click="boxColorReset">重置</span>
        </div>
        <div class="editor-item">
          <div class="item-name">文本位置:</div>
          <div class="item-content">
            <RadioGroup
              v-model="textAlign">
              <Radio label="center">居中</Radio>
              <Radio label="left">居左</Radio>
            </RadioGroup>
          </div>
        </div>
        <div class="editor-item">
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

  props: {
  },

  data() {
    return {
      openBgColorPicker: false,
      openBoxColorPicker: false,
      openTextColorPicker: false,
    }
  },

  computed: {
    hotword: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commoditySearch.hotword
      }
    },
    boxStyle: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commoditySearch.boxStyle
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCommoditySearchBoxStyle',
          param: value
        })
      }
    },
    boxHeight: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commoditySearch.boxHeight
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCommoditySearchBoxHeight',
          param: value
        })
      }
    },
    bgColor: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commoditySearch.bgColor
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCommoditySearchBgColor',
          param: value
        })
      }
    },
    boxColor: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commoditySearch.boxColor
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCommoditySearchBoxColor',
          param: value
        })
      }
    },
    textAlign: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commoditySearch.textAlign
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCommoditySearchTextAlign',
          param: value
        })
      }
    },
    textColor: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].commoditySearch.textColor
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetCommoditySearchTextColor',
          param: value
        })
      }
    }
  },

  methods: {
    ...mapActions({
      addHotWord: 'toAddHotWord',
      bgColorReset: 'toBgColorReset',
      boxColorReset: 'toBoxColorReset',
      textColorReset: 'toTextColorReset'
    }),

    deleteHotWord(index) {
      this.$store.dispatch({
        type: 'toDeleteHotWord',
        param: index
      })
    },

    bgColorPickerChange() {
      if (this.openBgColorPicker) {
        this.openBgColorPicker = false;
      } else {
        this.openBgColorPicker = true;
      }
    },

    boxColorPickerChange() {
      if (this.openBoxColorPicker) {
        this.openBoxColorPicker = false;
      } else {
        this.openBoxColorPicker = true;
      }
    },

    textColorPickerChange() {
      if (this.openTextColorPicker) {
        this.openTextColorPicker = false;
      } else {
        this.openTextColorPicker = true;
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.commodity-search {
  .search-item {
    margin-bottom: 10px;
    display: flex;

    .search-name {
      width: 88px;
    }

    .search-content {
      line-height: unset;

      .editor-card {
        position: relative;
        margin-top: 10px;
        padding: 10px;
        cursor: pointer;
        background: #fff;

        .icon-delete {
          position: absolute;
          top: 0px;
          right: 0;
          z-index: 999;
          font-size: 18px;
        }
      }
    }
  }

  .search-second-item {
    .search-second-content {
      padding: 20px 4px;
      background: #fff;
    }

    .slider-item {
      display: flex;
      align-items: center;

      .slider-content {
        margin-left: 10px;
        flex: 1;
      }
    }

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
            // margin-top: 10px;
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
}
</style>
