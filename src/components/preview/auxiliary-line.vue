<template>
  <div
    class="auxiliary-line"
    :class="[auxiliaryLine.borderPadding === '0' ? 'no-padding' : 'have-padding', { active: isActive }]">
    <hr
      class="border"
      :style="{ borderColor: auxiliaryLine.borderColor.hex, borderStyle: auxiliaryLine.borderStyle }" />
  </div>
</template>

<script>
export default {
  components: {
  },

  data() {
    return {
    }
  },

  props: {
    isActive: Boolean,
    auxiliaryLine: Object
  },

  computed: {
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
.no-padding {
  padding: 0;
}

.have-padding {
  padding: 0 10px;
}

.auxiliary-line {
  display: flex;
  align-items: center;
  height: 30px;
  border: 1px solid white;

  &:hover {
    border: 1px solid #38f;
  }

  .border {
    width: 100%;
    border-top: 1px solid #E5E5E5;
  }
}

.active {
  border: 1px dashed #38f !important;
}

</style>
