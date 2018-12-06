<template>
  <div class="customize">
    <div class="editor-item">
      <div class="item-name">自定义页面模块:</div>
      <div class="item-content">
        <span
          v-if="customizeName === 'customize-preview'"
          @click="openCustomizeModal"
          class="add-template">+ 添加</span>
        <span
          v-else
          @click="openCustomizeModal"
          class="add-template">+ 修改</span>
        </span>
      </div>
    </div>
    <customize-modal
      title="自定义模块"
      btnName="新增"
      :customizeModalVisible="customizeModalVisible"
      :closeModal="closeCustomizeModal"
      :confirmCustomize="confirmCustomize" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CustomizeModal from '../customize-modal.vue'
export default {
  components: {
    'customize-modal': CustomizeModal
  },

  data() {
    return {
    }
  },

  computed: {
    ...mapGetters({
      customizeModalVisible: 'getCustomizeModalVisible'
    }),
    customizeName() {
      const designStore = this.$store.state.design;
      return designStore.previewItems[designStore.chooseIndex].customize[0].name
    }
  },

  methods: {
    ...mapActions({
      openCustomizeModal: 'toOpenCustomizeModal',
      closeCustomizeModal: 'toCloseCustomizeModal'
    }),

    confirmCustomize () {
      this.$store.dispatch({
        type: 'toConfirmCustomize'
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.customize {
  .add-template {
    color: #38f;
    cursor: pointer;
  }
}
</style>
