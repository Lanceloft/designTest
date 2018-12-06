<template>
  <div
    class="images-ads"
    :class="{ active: isActive }">
    <Carousel
      v-if="imagesAds.template === '0'"
      autoplay
      v-model="value2"
      loop>
      <CarouselItem
        v-for="(item, index) in imagesAds.background"
        :key="index">
        <div
          class="carousel-imgs-item">
          <img
            class="carousel-imgs"
            :src="item.imgSrc" />
        </div>
      </CarouselItem>
      <!-- <CarouselItem
        v-for="(item, index) in imagesAds.background"
        :key="index">
        <div
          class="commodity-image"
          :class="[imagesAds.fillWay === '0' ? 'fill-contain' : 'fill-cover']"
          :style="{
            backgroundImage: 'url(' + item.imgSrc + ')'
          }">
        </div>
      </CarouselItem> -->
    </Carousel>
    <div v-if="imagesAds.template === '1'">
      <ul>
        <li
          v-for="(item, index) in imagesAds.background"
          :key="index"
          :style="{ marginTop: imagesAds.margin + 'px' }">
          <img class="one-line" :src="item.imgSrc" />
        </li>
      </ul>
    </div>
    <div
      v-if="imagesAds.template === '2'"
      class="big-slider">
      <ul class="big-slider-list">
        <li
          v-for="(item, index) in imagesAds.background"
          :key="index"
          :style="{ marginRight: imagesAds.margin + 'px' }">
          <img class="big-slider-img" :src="item.imgSrc" />
        </li>
      </ul>
    </div>
    <div
      v-if="imagesAds.template === '3'"
      class="small-slider">
      <ul class="small-slider-list">
        <li
          v-for="(item, index) in imagesAds.background"
          :key="index"
          :style="{ marginRight: imagesAds.margin + 'px' }">
          <img class="small-slider-img" :src="item.imgSrc" />
        </li>
      </ul>
    </div>
    <div
      v-if="imagesAds.template === '4'"
      class="nav-slider">
      <ul class="nav-slider-list">
        <li
          v-for="(item, index) in imagesAds.background"
          :key="index"
          :style="{ marginRight: imagesAds.margin + 'px' }">
          <img class="nav-slider-img" :src="item.imgSrc" />
        </li>
      </ul>
    </div>
    <div v-if="imagesAds.template === '5'">
      <ul>
        <li
          v-for="(item, index) in imagesAds.background"
          :key="index">
          <img :src="item.imgSrc" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imagesAds: Object,
    isActive: Boolean,
  },

  data() {
    return {
      value2: 0,
    }
  }

}
</script>

<style lang="scss" scoped>
.images-ads {
  border: 1px solid white;
  &:hover {
    border: 1px solid #38f;
  }

  .commodity-image {
    width: 100%;
    padding-top: 100%;
    position: relative;
    background-repeat: no-repeat;
    background-position:center center;
  }

  .fill-contain {
    background-size: contain;
  }

  .fill-cover {
    background-size: cover;
  }

  .ivu-carousel {
    height: 366px;
    .ivu-carousel-list {
      .carousel-imgs-item {
        text-align: center;

        .carousel-imgs {
          height: 366px;
        }

        .fill-imgs {
        }

        .blank-imgs {
          width: auto;
        }
      }
    }
  }

  .one-line {
    width: 100%;
    height: 100%;
    display: inherit;
  }

  .big-slider {
    width: 100%;
    overflow-x: scroll;

    .big-slider-list {
      display: flex;
      .big-slider-img {
        width: 282px;
        height: 100%;
      }
    }
  }

  .small-slider {
    width: 100%;
    overflow-x: scroll;

    .small-slider-list {
      display: flex;
      height: 182px;
      .small-slider-img {

      }
    }
  }

  .nav-slider {
    .nav-slider-list {
      width: 100%;
      overflow-x: scroll;
      height: 46px;
      li {
        display: inline-block;
        width: unset;
      }
      .nav-slider-img {
        height: 46px;
        width: auto;
      }
    }
  }
}
.active {
  border: 1px dashed #38f;
}
</style>
