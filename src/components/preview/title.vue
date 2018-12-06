<template>
  <div
    class="title"
    :class="{ active: isActive }">
    <div
      v-show="title.template === '0'"
      class="title-content"
      :style="{
        textAlign: title.textAlign,
        background: title.bgColor.hex
        }">
      <h2 class="title-title">{{ title.title }}
        <span
          class="title-nav"
          v-show="title.openNav && title.nav.name !== ''">
          <span class="split">-</span>
          {{ title.nav.name }}
        </span>
      </h2>
      <p class="sub-title">{{ title.subTitle }}</p>
    </div>
    <div
      v-show="title.template === '1'"
      class="wechat-content"
      :style="{
        textAlign: title.textAlign,
        background: title.bgColor.hex
        }">
      <h2 class="title-title">{{ title.title }}</h2>
      <div class="cap-title">
        <span class="date">{{ title.date }}</span>
        <span class="author">{{ title.author }}</span>
        <span class="link-sub-title">{{ title.linkSubTitle }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: Object,
    isActive: Boolean,
  }
}
</script>

<style lang="scss" scoped>

.title {
  border: 1px solid white;
  &:hover {
    border: 1px solid #38f;
  }
  .title-content {
    padding: 10px;

    .title-title {
      word-break: break-all;
    }

    .title-nav {
      color: #38f;
      font-size: 12px;

      .split {
        color: #999;
      }
    }

    .sub-title {
      margin-top: 5px;
      font-size: 12px;
      color: #8c8c8c;
    }
  }

  .wechat-content {
    padding: 10px;

    .title {
      word-break: break-all;
    }

    .cap-title {
      color: #8c8c8c;

      .date, .author {
        margin-right: 10px;
      }

      .link-sub-title {
        color: #38f;
      }
    }
  }
}
.active {
  border: 1px dashed #38f;
}
</style>
