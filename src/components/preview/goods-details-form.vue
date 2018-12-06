<template>
  <div class="base-form">
    <p class="title">基本信息区</p>
    <p class="desc">固定样式, 显示商品主图, 价格等信息</p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.base-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-bottom: 1px dashed #ccc;
  cursor: pointer;

  .title {

  }

  .desc {
    color: #999;
  }
}
</style>
