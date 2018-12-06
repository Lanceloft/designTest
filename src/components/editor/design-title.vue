<template>
  <div class="design-title">
    <div class="editor-item">
      <div class="item-name">标题名:</div>
      <div class="item-content">
        <Input
          class="title-input"
          v-model="title"
          placeholder="请输入标题" />
      </div>
    </div>

    <div class="editor-item">
      <div class="item-name">页面描述:</div>
      <div class="item-content">
        <Input
          class="title-input"
          v-model="desc"
          placeholder="请输入标题" />
      </div>
    </div>

    <div class="editor-item">
      <div class="item-name">分类:</div>
      <div class="item-content">
        <Select class="title-input">
        </Select>
        <span
          class="config"
          @click="refresh">刷新</span>
        <span
          class="config"
          @click="toCreate">新建</span>
      </div>
    </div>

    <div class="editor-item">
      <div class="item-name">背景色:</div>
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
      openBgColorPicker: false,
    }
  },

  computed: {
    title: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.designTitle.title
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetDesignTitleTitle',
          param: value
        })
      }
    },

    desc: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.designTitle.desc
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetDesignTitleDesc',
          param: value
        })
      }
    },

    bgColor: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.designTitle.bgColor
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetDesignTitleBgColor',
          param: value
        })
      }
    },
  },

  methods: {
    ...mapActions({
      bgColorReset: 'toSetDesignTitleBgColorReset',
    }),

    bgColorPickerChange() {
      if (this.openBgColorPicker) {
        this.openBgColorPicker = false;
      } else {
        this.openBgColorPicker = true;
      }
    },

    toCreate() {
      // window.location.href="storedesigncategory.html";
      window.open('storedesigncategory.html')
    },

    refresh() {
      location.reload();
    }
  }


}
</script>

<style lang="scss" scoped>
.design-title {
  .title-input {
    width: 180px;
  }

  .config {
    color: #38f;
    cursor: pointer;
    margin-left: 10px;
  }

  .imgs-text-nav {
    padding: 10px 0;
    background: #fff;
  }

  .top-item {
    .item-name {
      vertical-align: top;
      line-height: 30px;
    }
  }

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
      }
    }

    .add-associated {
      padding: 10px;
      width: 100%;
      color: #38f;
      cursor: pointer;
      border: 1px dashed #e5e5e5;
      background: #fff;
    }

    .link-to {
      cursor: pointer;
      color: #38f;
    }
  }

}
</style>
