<template>
  <div class="images-ads">
    <div class="editor-item tempalte-item">
      <div class="item-name">选择模板:</div>
      <div class="item-content">
        <div class="ads-template-list">
          <div
            class="template"
            v-for="(item, index) in template"
            :key="index"
            @click="changeTemplate(index)">
            <template-box
              :src="item.src"
              :title="item.name"
              :activeClass="[chooseTemplate === index.toString() ? 'template-active': '']"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="editor-item tempalte-item" v-show="chooseTemplate === '0'">
      <div class="item-name fill-way">填充方式:</div>
      <div class="item-content">
        <RadioGroup v-model="fillWay">
          <Radio label="0">填充</Radio>
          <Radio label="1">留白</Radio>
        </RadioGroup>
      </div>
    </div>
    <div
      class="editor-item tempalte-item"
      v-show="chooseTemplate !== '0' && chooseTemplate !== '5'">
      <div class="item-name slider-way">图片间隙:</div>
      <div class="item-content">
        <Slider
          v-model="imgsMargin"
          :min="0"
          :max="30"
          show-input></Slider>
      </div>
    </div>
    <div class="editor-item" v-if="chooseTemplate !== '5'">
      <draggable
        v-model="backgroundImgs">
        <div
          class="imgs-text-nav"
          v-for="(item, index) in backgroundImgs"
          :key="index">
          <Icon
            class="icon-delete"
            type="md-close-circle" />
          <imgs-text-content
            :itemList="item" />
        </div>
      </draggable>
    </div>
    <div class="editor-item" v-else>
      <ul class="hot-area">
        <li
          class="hot-imgs-list"
          v-for="(item, index) in backgroundImgs"
          :key="index">
          <img
            class="hot-img"
            :src="item.imgSrc"
            @click="openHotZoneModal(item)" />
          <span class="modify-image">更换图片</span>
        </li>
      </ul>
    </div>

    <div class="editor-item tempalte-item">
      <div
        class="add-images"
        @click="addBackgroudImgs">
        <p class="add">+ 添加一个背景图</p>
        <p class="tips">建议尺寸 750×350</p>
      </div>
    </div>
    <hot-zone-modal />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import draggable from 'vuedraggable'
import HotZoneModal from '../hot-zone-modal.vue'
import ImgsTextContent from '../imgs-text-content.vue'
import TemplateBox from '../template-box.vue';
export default {
  components: {
    draggable,
    'hot-zone-modal': HotZoneModal,
    'template-box': TemplateBox,
    'imgs-text-content': ImgsTextContent
  },

  data() {
    return {
      template: [
        {
          src: 'https://img.yzcdn.cn/public_files/2017/10/27/a462e5df701af10c878d05f15a3a6358.png',
          name: '轮播海报'
        }, {
          src: 'https://img.yzcdn.cn/public_files/2017/10/27/a68aa06cc15acc863170199d5d26162d.png',
          name: '1行1个'
        }, {
          src: 'https://img.yzcdn.cn/public_files/2017/10/27/be0b9959343658fc64dfe860103cdcc1.png',
          name: '横向滑动(大)'
        }, {
          src: 'https://img.yzcdn.cn/public_files/2017/10/27/33eee7d74f4a8b7925dbffd2ee0eb4ea.png',
          name: '横向滑动(小)'
        }, {
          src: 'https://img.yzcdn.cn/public_files/2017/11/24/f9d56401159a3d407eca2f1c1c56f680.png',
          name: '横向滑动(导航)'
        }, {
          src: 'https://img.yzcdn.cn/public_files/2017/10/27/4f1e56865ea3df0463cff5ede5356777.png',
          name: '绘制热区'
        }
      ]
    }
  },

  computed: {
    chooseTemplate() {
      const designStore = this.$store.state.design;
      return designStore.previewItems[designStore.chooseIndex].imagesAds.template
    },

    fillWay: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].imagesAds.fillWay
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetImgsAdsFillWay',
          param: value
        })
      }
    },

    backgroundImgs: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].imagesAds.background
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetImgsAdsBackgroundImg',
          param: value
        })
      }
    },

    imgsMargin: {
      get() {
        const designStore = this.$store.state.design;
        return designStore.previewItems[designStore.chooseIndex].imagesAds.margin
      },

      set(value) {
        this.$store.dispatch({
          type: 'toSetImgsAdsMargin',
          param: value
        })
      }
    }
  },

  methods: {
    ...mapActions({
      addBackgroudImgs: 'toAddImagesAdsBackgroudImgs'
    }),
    changeTemplate(template) {
      this.$store.dispatch({
        type: 'toChangeImgsAdsTemplate',
        param: template
      })
    },

    openHotZoneModal(item) {
      this.$store.dispatch({
        type: 'toOpenHotZoneModal',
        param: item
      })
    },

    addHotZone() {

    }
  }
}
</script>

<style lang="scss" scoped>
.images-ads {
  .editor-item {
    .item-name {
      vertical-align: top;
    }
    .item-content {
      .ads-template-list {
        display: flex;
        flex-wrap: wrap;

        .template {
          margin: 0 4px 15px 0;
        }

        .template-active {
          border: 1px solid #38f;
        }
      }
    }

    .add-images {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 80px;
      cursor: pointer;
      background: #fff;

      .add {
        color: #38f;
      }

      .tips {
        color: #999;
      }
    }

    .hot-area {
      .hot-imgs-list {
        position: relative;
        .hot-img {
          cursor: pointer;
          display: inherit;
        }

        .modify-image {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 28px;
          line-height: 28px;
          text-align: center;
          color: #fff;
          cursor: pointer;
          background: rgba(0,0,0,.5);
        }
      }
    }
  }

  .tempalte-item {
    display: flex;

    .item-name {
      flex: 1;
    }

    .fill-way {
      line-height: 30px;
    }

    .slider-way {
      line-height: 36px;
    }

    .item-content {
      flex: 4;
    }
  }
}
</style>
