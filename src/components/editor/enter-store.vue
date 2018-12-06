<template>
  <div class="enter-store">
    <div class="editor-item">
      <div class="item-name">文案:</div>
      <div class="item-content">
        <Input
          v-model="enterTitle"
          :maxlength="7" />
      </div>
    </div>
  </div>
</template>

<script>
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
    enterTitle: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].enterStoreTitle
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetEnterStoreTitle',
          param: value
        })
      }
    }
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
