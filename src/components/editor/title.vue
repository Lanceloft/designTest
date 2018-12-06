<template>
  <div class="title">
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
      <div class="item-name">标题模板:</div>
      <div class="item-content">
        <RadioGroup
          v-model="template">
          <Radio label="0">传统样式</Radio>
          <Radio label="1">模仿微信图文页样式</Radio>
        </RadioGroup>
      </div>
    </div>

    <div class="editor-item">
      <div class="item-name">显示位置:</div>
      <div class="item-content">
        <RadioGroup
          v-model="textAlign">
          <Radio label="left">居左显示</Radio>
          <Radio label="center">居中显示</Radio>
          <Radio label="right">居右显示</Radio>
        </RadioGroup>
      </div>
    </div>

    <div class="editor-item" v-show="template === '0'">
      <div class="item-name">副标题:</div>
      <div class="item-content">
        <Input
          class="title-input"
          v-model="subTitle"
          placeholder="请输入副标题" />
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

    <div
      class="editor-item"
      v-if="openNav === false"
      v-show="template === '0'">
      <div
        class="add-associated"
        @click="addTextNav">+ 添加一个文本导航</div>
    </div>

    <div class="imgs-text-nav" v-else>
      <Icon
        class="icon-delete"
        type="md-close-circle"
        @click="deleteTextNav" />
      <div class="editor-item">
        <div class="item-name">导航名称:</div>
        <div class="item-content">
          <Input
            v-model="navName"
            placeholder="请输入副标题" />
        </div>
      </div>

      <div class="editor-item">
        <div class="item-name">链接到:</div>
        <div class="item-content">
          <span class="link-to">选择跳转到的页面</span>
        </div>
      </div>
    </div>

    <div class="editor-item" v-show="template === '1'">
      <div class="item-name">日期:</div>
      <div class="item-content">
        <DatePicker
          :value="date"
          class="title-input"
          type="date"
          placeholder="请选择日期"
          @on-change="dateOnChange">
        </DatePicker>
      </div>
    </div>

    <div class="editor-item" v-show="template === '1'">
      <div class="item-name">作者:</div>
      <div class="item-content">
        <Input
          class="title-input"
          v-model="author"
          placeholder="请输入作者" />
      </div>
    </div>

    <div class="editor-item" v-show="template === '1'">
      <div class="item-name">链接标题:</div>
      <div class="item-content">
        <Input
          class="title-input"
          v-model="linkSubTitle"
          placeholder="请输入链接标题" />
      </div>
    </div>

    <div class="top-item" v-show="template === '1'">
      <div class="item-name">链接地址:</div>
      <div class="item-content">
        <RadioGroup v-model="linkUrlType" vertical>
          <Radio label="0">引导关注</Radio>
          <Radio label="1">关联链接</Radio>
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
      openBgColorPicker: false,
    }
  },

  computed: {
    title: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].title.title
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetTitleTitle',
          param: value
        })
      }
    },

    template: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].title.template
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetTitleTemplate',
          param: value
        })
      }
    },

    textAlign: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].title.textAlign
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetTitleTextAlign',
          param: value
        })
      }
    },

    subTitle: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].title.subTitle
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetTitleSubTitle',
          param: value
        })
      }
    },

    bgColor: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].title.bgColor
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetTitleBgColor',
          param: value
        })
      }
    },

    openNav: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].title.openNav
      }
    },

    navName: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].title.nav.name
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetTitleNavName',
          param: value
        })
      }
    },

    date: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].title.date
      }
    },

    author: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].title.author
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetTitleAuthor',
          param: value
        })
      }
    },

    linkSubTitle: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].title.linkSubTitle
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetTitleLinkSubTitle',
          param: value
        })
      }
    },

    linkUrlType: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].title.linkUrlType
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetTitleLinkUrlType',
          param: value
        })
      }
    }
  },

  methods: {
    ...mapActions({
      bgColorReset: 'toSetTitleBgColorReset',
      addTextNav: 'toAddTitleTextNav',
      deleteTextNav: 'toDeleteTitleTextNav'
    }),

    bgColorPickerChange() {
      if (this.openBgColorPicker) {
        this.openBgColorPicker = false;
      } else {
        this.openBgColorPicker = true;
      }
    },

    dateOnChange(date) {
      this.$store.dispatch({
        type: 'toSetTitleDate',
        param: date
      })
    }
  }


}
</script>

<style lang="scss" scoped>
.title {
  .title-input {
    width: 180px;
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
