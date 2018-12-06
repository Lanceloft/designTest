<template>
  <div class="store-msg">
    <div class="editor-item">
      <div class="item-name">显示样式:</div>
      <div class="item-content">
        <RadioGroup
          v-model="storeStyle">
          <Radio label="1">样式1</Radio>
          <Radio label="2">样式2</Radio>
          <Radio label="3">样式3</Radio>
          <Radio label="4">样式4</Radio>
          <Radio label="5">样式5</Radio>
        </RadioGroup>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
  },

  props: {
  },

  data() {
    return {
    }
  },

  computed: {
    ...mapGetters({
    }),

    storeStyle: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].storeMsgStyle
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetStoreMsgStyle',
          param: value
        })
      }
    }
  },

  methods: {
    styleOnChange() {
      console.log(this.storeStyle);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
