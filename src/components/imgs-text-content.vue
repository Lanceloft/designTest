<template>
  <div class="card-item">
    <div class="choose-image">
      <img
        class="thumb-images"
        :src="itemList.imgSrc" />
      <span class="modify-image">更换图片</span>
    </div>
    <div class="editor-form">
      <div class="form-item">
        <label class="title">标题:</label>
        <Input
          class="value"
          v-model="itemList.title" />
      </div>
      <div class="form-item">
        <label class="title">链接:</label>
        <p class="jump-to">选择跳转到的页面</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemList: Object
  }
}
</script>

<style lang="scss" scoped>
.card-item {
  position: relative;
  margin-bottom: 10px;
  padding: 15px;
  display: flex;
  width: 100%;
  background: #fff;

  .choose-image {
    position: relative;
    width: 80px;
    height: 80px;
    border: 1px solid #e5e5e5;
    text-align: center;

    img {
      width: 100%;
      height: 100%;
    }

    .thumb-images {
      width: auto;
      max-width: 100%;
    }

    .modify-image {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 80px;
      height: 20px;
      line-height: 20px;
      color: #fff;
      cursor: pointer;
      background: rgba(0,0,0,.5);
    }
  }

  .editor-form {
    flex: 1;
    margin-left: 10px;

    .form-item {
      display: flex;
      margin-bottom: 10px;

      .title {
        margin-right: 10px;
        width: 50px;
        text-align: right;
        line-height: 32px;
      }

      .value {
        flex: 1;
      }

      .jump-to {
        line-height: 32px;
        color: #38f;
        cursor: pointer;
      }
    }
  }
}
</style>
