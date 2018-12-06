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
      <div class="item-name">模板样式:</div>
      <div class="item-content">
        <RadioGroup
          v-model="templateStyle">
          <Radio label="0">普通版</Radio>
          <Radio label="1">简洁流畅版</Radio>
        </RadioGroup>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { RadioGroup, DatePicker, Select } from 'iview'
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
        return designStore.templateTitle.title
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetTemplateTitleTitle',
          param: value
        })
      }
    },

    templateStyle: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.templateTitle.style
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetTemplateTitleStyle',
          param: value
        })
      }
    }

  },

  methods: {
    ...mapActions({
    }),
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
