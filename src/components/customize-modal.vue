<template>
<div class="customize-modal">
  <Modal
    :value="customizeModalVisible"
    :title="title"
    @on-ok="confirmCustomize"
    @on-cancel="closeModal">
    <div class="customize-modal-content">
      <div class="customize-filter">
        <div class="filter-btn-group">
          <Button>{{ btnName }}</Button>
          <Button>刷新</Button>
        </div>
        <Input
          class="filter-search"
          prefix="ios-search"
          placeholder="搜索" />
      </div>
      <div class="customize-content">
        <ul class="content-header">
          <li class="title">标题</li>
          <li class="create-time">创建时间</li>
        </ul>
        <ul class="content-main">
          <RadioGroup v-model="vertical" vertical>
            <Radio label="apple">
              <span class="radio-item">
                <span class="title">
                  <span @click="open">Android</span>
                </span>
                <span class="create-time">2018-110-9</span>
              </span>
            </Radio>
            <Radio label="android">
              <span>Android</span>
            </Radio>
            <Radio label="windows">
              <span>Windows</span>
            </Radio>
          </RadioGroup>
        </ul>
      </div>
    </div>
  </Modal>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    title: String,
    btnName: String,
    customizeModalVisible: Boolean,
    closeModal: Function,
    confirmCustomize: Function
  },

  data() {
    return {
      vertical: ''
    }
  },
  computed: {
    // ...mapGetters({
    //   customizeModalVisible: 'getCustomizeModalVisible'
    // })
  },
  methods: {
    ...mapActions({
      // closeCustomizeModal: 'toCloseCustomizeModal'
    }),
    // confirmCustomize () {
    //   this.$store.dispatch({
    //     type: 'toConfirmCustomize'
    //   })
    // },
    open() {
      console.log('33');
    }
  }
}
</script>

<style lang="scss" scoped="">
.customize-modal-content {
  .customize-filter {
    display: flex;
    justify-content: space-between;
    .filter-btn-group {
      display: flex;

      .ivu-btn {
        margin-right: 10px;
      }
    }

    .filter-search {
      width: 180px;
    }
  }

  .customize-content {
    .content-header {
      display: flex;
      margin-top: 10px;
      background: #f2f2f2;

      .title {
        display: flex;
        align-items: center;
        flex: 3;
        height: 60px;
        padding: 10px 10px 10px 34px;
      }

      .create-time {
        flex: 1;
        display: flex;
        align-items: center;
        padding: 10px;
      }
    }

    .content-main {
      .ivu-radio-group {
        width: 100%;
      }
      .ivu-radio-wrapper {
        display: flex;
        align-items: center;
        height: 60px;
        border-bottom: 1px solid #e5e5e5;
      }
      .radio-item {
        flex: 1;
        display: flex;

        .title {
          flex: 3;
          color: #38f;
        }

        .create-time {
          flex: 1;
        }
      }
    }
  }
}
</style>
