<template>
  <div class="commodity-modal">
    <Modal
      width="750"
      :value="commodityModalVisible"
      title="已上架商品"
      @on-ok="confirm"
      @on-cancel="cancel">
      <div class="commodity-container">
        <div class="btn-group">
          <Button class="btn">新建</Button>
          <Button class="btn">草稿管理</Button>
          <Button class="btn">刷新</Button>
          <Input
            search
            class="commodity-search" />
        </div>
        <Table
          border
          ref="selection"
          :columns="columns4"
          :data="data1"></Table>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  props: {
    commodityModalVisible: Boolean,
    confirm: Function,
    cancel: Function
  },

  data() {
    return {
      columns4: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        }, {
          title: 'Name',
          key: 'name'
        }, {
          title: 'Age',
          key: 'age'
        },
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        }, {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        }
      ]
    }
  },

  methods: {
    handleSelectAll(status) {
      this.$refs.selection.selectAll(status);
    }
  }
}
</script>

<style lang="scss" scoped>
.commodity-container {
  .btn-group {
    margin-bottom: 10px;
    .btn {
      margin-right: 10px;
    }

    .commodity-search {
      width: 100px;
      float: right;
    }
  }
}
</style>
