<template>
  <div
    class="announcement"
    :class="{ active: isActive }">
    <div
      v-if="announcement"
      class="announcement-content"
      :style="{
        background: announcement.bgColor.hex,
        color: announcement.textColor.hex
      }">
      <Icon class="icon" type="ios-megaphone-outline" />
      <span>{{ announcement.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },

  props: {
    isActive: Boolean,
    announcement: Object,
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
.announcement {
  border: 1px solid white;
  &:hover {
    border: 1px solid #38f;
  }

  .announcement-content {
    padding: 9px 15px;
    background: rgb(255, 248, 233);
    overflow: hidden;
    white-space: nowrap;


    .icon {
      font-size: 18px;
    }
  }
}

.active {
  border: 1px dashed #38f;
}
</style>
