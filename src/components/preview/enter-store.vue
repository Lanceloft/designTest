<template>
  <div
    class="enter-store"
    :class="{ active: isActive }">
    <Icon class="enter-icon" type="ios-archive" />
    <div class="store-msg">
      <div>{{ enterStoreTitle }}</div>
      <div>进入店铺 ></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
  },

  props: {
    isActive: Boolean,
    enterStoreTitle: String
  },

  data() {
    return {
    }
  },

  computed: {
    ...mapGetters({
    })
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>


.enter-store {
  padding: 12px 15px;
  display: flex;
  align-items: center;
  border: 1px solid white;

  &:hover {
    border: 1px solid #38f;
  }


  .enter-icon {
    font-size: 20px;
  }

  .store-msg {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
}
.active {
  border: 1px dashed #38f;
}
</style>
