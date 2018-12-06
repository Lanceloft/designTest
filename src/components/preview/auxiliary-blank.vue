<template>
  <div
    class="auxiliary-blank"
    :class="{ active: isActive }"
    :style="{ height: auxiliaryBlankHeight + 'px' }">
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
    auxiliaryBlankHeight: Number
  },

  computed: {
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
.auxiliary-blank {
  border: 1px solid white;

  &:hover {
    border: 1px solid #38f;
  }

}

.active {
  border: 1px dashed #38f;
}
</style>
