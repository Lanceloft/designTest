<template>
  <div class="announcement">
    <div class="editor-item">
      <div class="item-name">公告:</div>
      <div class="item-content">
        <Input v-model="text" />
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
      openTextColorPicker: false
    }
  },

  computed: {
    text: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].announcement.text
        // return this.$store.state.design.announcement.text
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetAnnouncementText',
          param: value
        })
      }
    },

    bgColor: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].announcement.bgColor
        // return this.$store.state.design.announcement.bgColor
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetAnnouncementBgColor',
          param: value
        })
      }
    },

    textColor: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].announcement.textColor
        // return this.$store.state.design.announcement.textColor
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetAnnouncementTextColor',
          param: value
        })
      }
    }
  },

  methods: {
    ...mapActions({
      bgColorReset: 'toAnnouncementBgColorReset',
      textColorReset: 'toAnnouncementTextColorReset'
    }),
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
.announcement {
  .editor-item {
    display: flex;
    align-items: center;

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

}
</style>
