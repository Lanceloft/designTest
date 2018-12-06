<template>
  <div
    class="commodity-search"
    :class="{ active: isActive }"
    :style="{ background: commoditySearch.bgColor.hex }">
    <input
      :value="commoditySearch.hotword[0].text"
      disabled
      class="search"
      :class="[commoditySearch.boxStyle === '0' ? 'no-border': 'circle-border', commoditySearch.textAlign === 'left' ? 'text-left': 'text-center']"
      :style="{
        height: commoditySearch.boxHeight + 'px',
        background: commoditySearch.boxColor.hex,
        color: commoditySearch.textColor.hex }"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
  },

  props: {
    isActive: Boolean,
    commoditySearch: Object
  },

  data() {
    return {
    }
  },

  computed: {
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
.commodity-search {
  padding: 5px 15px;
  border: 1px solid white;
  background: rgb(249, 249, 249);

  &:hover {
    border: 1px solid #38f;
  }

  .search {
    padding-left: 20px;
    width: 100%;
    height: 40px;
  }

  .circle-border {
    border-radius: 20px;
  }

  .text-left {
    text-align: left;
  }

  .text-center {
    text-align: center;
  }
}

.active {
  border: 1px dashed #38f;
}
</style>
