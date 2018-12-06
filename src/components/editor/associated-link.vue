<template>
  <div class="associated-link">
    <div class="editor-item">
      <div
        class="link-associated"
        v-for="(item, index) in linkItem"
        :key="index">
        <div v-if="item.name !== ''">
          <div class="associated-item">
            <label class="label-name">内容来源:</label>
            <span class="source">{{ item.chainName }}</span>
            <Poptip trigger="hover" title="Title">
              <span class="set-link-to">
                修改<Icon type="ios-arrow-down" />
              </span>
              <div slot="content">
                <ul class="choose-link-list">
                  <li class="choose-link" @click="openDesignModal">微页面分类</li>
                  <li class="choose-link">商品分组</li>
                  <li class="choose-link">自定义链接</li>
                </ul>
              </div>
            </Poptip>
          </div>
          <div class="associated-item">
            <label class="label-name">显示条数:</label>
            <Select v-model="item.showNumber" style="width:200px">
              <Option :value="1">1条</Option>
              <Option :value="2">2条</Option>
              <Option :value="3">3条</Option>
              <Option :value="4">4条</Option>
              <Option :value="5">5条</Option>
            </Select>
          </div>
        </div>
        <div v-else>
          <label class="label-name">内容来源:</label>
          <Poptip trigger="hover" title="Title">
            <span class="set-link-to">选择跳转到的页面<Icon type="ios-arrow-down" /></span>
            <div slot="content">
              <ul class="choose-link-list">
                <li
                  class="choose-link"
                  @click="openDesignModal(index)">微页面分类</li>
                <li class="choose-link">商品分组</li>
                <li class="choose-link">自定义链接</li>
              </ul>
            </div>
          </Poptip>
        </div>
      </div>
    </div>
    <div class="editor-item">
      <div
        class="add-associated"
        @click="addNewAssociated">+ 添加一个关联链接</div>
    </div>
    <design-modal
      title="微页面分类"
      btnName="分类管理"
      :customizeModalVisible="designModalVisible"
      :closeModal="closeDesignModal"
      :confirmCustomize="confirmDesign"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import DesignModal from '../customize-modal.vue'
export default {
  components: {
    'design-modal': DesignModal
  },

  computed: {
    ...mapGetters({
      designModalVisible: 'getDesignModalVisible'
    }),

    linkItem() {
      const designStore = this.$store.state.design;
      return designStore.previewItems[designStore.chooseIndex].associatedLink.linkItem
    }
  },

  methods: {
    ...mapActions({
      // openDesignModal: 'toOpenDesignModal',
      closeDesignModal: 'toCloseDesignModal',
      addNewAssociated: 'toAddNewAssociated'
    }),

    openDesignModal(index) {
      this.$store.dispatch({
        type: 'toOpenDesignModal',
        param: index
      })
    },

    confirmDesign() {
      this.$store.dispatch({
        type: 'toConfirmDesign'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.associated-link {
  .link-associated {
    margin-bottom: 10px;
    padding: 15px;
    background: #fff;

    .associated-item {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
    }

    .label-name {
      margin-right: 10px;
    }

    .set-link-to {
      color: #38f;
      cursor: pointer;
    }

    .source {
      flex: 1;
      padding: 4px;
      border: rgba(51, 136, 255, 0.3);
      color: rgb(102, 102, 102);
      background: rgb(226, 243, 255);
    }
  }
  .add-associated {
    padding: 10px;
    color: #38f;
    cursor: pointer;
    border: 1px dashed #e5e5e5;
    background: #fff;
  }



  .choose-link-list {
    .choose-link {
      height: 30px;
      line-height: 30px;
      cursor: pointer;

      &:hover {
        color: #fff;
        background: #38f;
      }
    }
  }
}
</style>
