<template>
  <div
    class="text"
    :class="{ active: isActive }"
    :style="{ background: text.bgColor.hex }">
    <p
      class="text-title"
      :style="{
        fontSize: text.fontSize + 'px',
        color: text.textColor.hex,
        textAlign: text.textAlign
      }">{{ text.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: Object,
    isActive: Boolean
  }
}
</script>

<style lang="scss" scoped>
.text {
  border: 1px solid white;
  &:hover {
    border: 1px solid #38f;
  }

  .text-title {
    margin: 0 10px;
    height: 44px;
    line-height: 44px;
    overflow: hidden;
  }
}

.active {
  border: 1px dashed #38f;
}
</style>
