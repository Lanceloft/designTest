<template>
  <div
    class="images-template"
    :class="activeClass">
    <div
      class="img-content">
      <img
        class="template-images"
        :src="src" />
    </div>
    <p class="template-name">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    title: String,
    isActive: Boolean,
    activeClass: Array
  }
}
</script>

<style lang="scss" scoped>
.images-template {
  display: inline-block;
  width: 100px;
  height: 100px;
  text-align: center;
  border: 1px solid #e5e5e5;
  cursor: pointer;
  background: #fff;

  .img-content {
    width: 100%;
    height: 64px;
    padding: 4px;

    .template-images {
      width: 100%;
    }
  }
}

.template-active {
  border: 1px solid #38f;
}
</style>
