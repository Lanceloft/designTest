<template>
  <div class="auxiliary-blank">
    <div class="editor-item slider-item">
      <div class="item-name">空白高度:</div>
      <div class="slider-content">
        <Slider
          v-model="boxHeight"
          :min="10"
          :max="100"
          show-input></Slider>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  components: {
  },

  data() {
    return {
    }
  },

  props: {
  },

  computed: {
    boxHeight: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].auxiliaryBlankHeight
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetAuxiliaryBlankHeight',
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
.auxiliary-blank {
  .slider-item {
    display: flex;
    align-items: center;

    .slider-content {
      margin-left: 10px;
      flex: 1;
    }
  }
}
</style>
