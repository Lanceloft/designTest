<template>
  <div
    class="images-text-nav"
    :class="{ active: isActive }">
    <ul
      :class="fixImg"
      v-show="imagesTextNav.template === '0'">
      <li
        class="fix-style"
        v-for="(item, index) in imagesTextNav.nav"
        :key="index">
        <img
          class="fix-img"
          :src="item.imgSrc" />
        <p
          class="fix-title"
          :style="{ background: imagesTextNav.bgColor.hex, color: imagesTextNav.textColor.hex }">{{ item.title }}</p>
      </li>
    </ul>
    <ul
      class="slider-style-list"
      v-show="imagesTextNav.template === '1'"
      :style="{ background: imagesTextNav.bgColor.hex }">
      <li
        class="slider-style"
        v-for="(item, index) in imagesTextNav.nav"
        :key="index">
        <p
          class="slider-title"
          :style="{ color: imagesTextNav.textColor.hex }">{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    imagesTextNav: Object,
    isActive: Boolean
  },

  computed: {
    fixImg() {
      return {
        'slider-style4': this.imagesTextNav.sliderSetting === '1' && this.imagesTextNav.screenNumber === '4',
        'slider-style5': this.imagesTextNav.sliderSetting === '1' && this.imagesTextNav.screenNumber === '5',
        'slider-style6': this.imagesTextNav.sliderSetting === '1' && this.imagesTextNav.screenNumber === '6',
        'slider-style7': this.imagesTextNav.sliderSetting === '1' && this.imagesTextNav.screenNumber === '7',
        'slider-style8': this.imagesTextNav.sliderSetting === '1' && this.imagesTextNav.screenNumber === '8',
        'slider-style9': this.imagesTextNav.sliderSetting === '1' && this.imagesTextNav.screenNumber === '9',
        'slider-style10': this.imagesTextNav.sliderSetting === '1' && this.imagesTextNav.screenNumber === '10',
        'fix-style-list': this.imagesTextNav.sliderSetting === '0'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.images-text-nav {
  border: 1px solid white;
  &:hover {
    border: 1px solid #38f;
  }
  .fix-style-list {
    display: flex;
    .fix-style {
      flex: 1;

      .fix-img {
        display: inherit;
        height: 80%;
      }

      .fix-title {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20%;
      }
    }
  }

  .slider-style4 {
    width: 375px;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    .fix-style {
      display: inline-block;
      width: 100px;
      height: 170px;

      .fix-img {
        display: inherit;
        height: 80%;
      }

      .fix-title {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20%;
      }
    }
  }

  .slider-style5 {
    width: 375px;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    .fix-style {
      display: inline-block;
      width: 77px;
      height: 144px;

      .fix-img {
        display: inherit;
        height: 80%;
      }

      .fix-title {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20%;
      }
    }
  }

  .slider-style6 {
    width: 375px;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    .fix-style {
      display: inline-block;
      width: 62px;
      height: 123px;

      .fix-img {
        display: inherit;
        height: 80%;
      }

      .fix-title {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20%;
      }
    }
  }

  .slider-style7 {
    width: 375px;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    .fix-style {
      display: inline-block;
      width: 52px;
      height: 108px;

      .fix-img {
        display: inherit;
        height: 80%;
      }

      .fix-title {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20%;
      }
    }
  }

  .slider-style8 {
    width: 375px;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    .fix-style {
      display: inline-block;
      width: 45px;
      height: 98px;

      .fix-img {
        display: inherit;
        height: 80%;
      }

      .fix-title {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20%;
      }
    }
  }

  .slider-style9 {
    width: 375px;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    .fix-style {
      display: inline-block;
      width: 40px;
      height: 90px;

      .fix-img {
        display: inherit;
        height: 80%;
      }

      .fix-title {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20%;
      }
    }
  }

  .slider-style10 {
    width: 375px;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    .fix-style {
      display: inline-block;
      width: 35px;
      height: 84px;

      .fix-img {
        display: inherit;
        height: 80%;
      }

      .fix-title {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20%;
      }
    }
  }



  .slider-style-list {
    display: flex;
    .slider-style {
      flex: 1;

      &:last-child {
        .slider-title {
          border-right: 0;
        }
      }

      .slider-title {
        margin: 10px 0;
        border-right: 1px solid #eee;
        text-align: center;
      }
    }
  }
}
.active {
  border: 1px dashed #38f;
}
</style>
