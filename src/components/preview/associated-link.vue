<template>
  <div
    class="associated-link"
    :class="{ active: isActive }">
    <ul class="link-list">
      <ul
        v-for="(item, index) in associatedLink.linkItem"
        :key="index">
        <li
          class="link-item"
          v-for="(zItem, zIndex) in Array.from(new Array(item.showNumber),(val,index)=>index+1)"
          :key="zIndex">
          <span v-if="item.name !== 'outerChain'">第{{ zItem }}条 {{ item.chainName}} 的<关联链接></span>
          <span v-else>{{ item.chainName }}</span>
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    associatedLink: Object,
    isActive: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.associated-link {
  border: 1px solid white;
  &:hover {
    border: 1px solid #38f;
  }
  .link-list {
    padding: 0 10px;
    .link-item {
      height: 44px;
      line-height: 44px;
      font-size: 14px;
      color: #333;
      border-bottom: 1px solid #e5e5e5;

      &:last-child {
        // border-bottom: 0;
      }
    }
  }
}
.active {
  border: 1px dashed #38f;
}
</style>
