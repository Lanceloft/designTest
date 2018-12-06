<template>
  <div class="store-msg">
    <div
      class="store-msg-content-style1"
      :class="{ active: isActive }"
      v-show="storeMsgStyle === '1'">
      <div class="store-msg-content">
        <img
          class="store-logo"
          src="https://img.yzcdn.cn/public_files/2016/05/13/8f9c442de8666f82abaf7dd71574e997.png?imageView2/2/w/145/h/145/q/75/format/webp" />
        <div class="store-details">
          <p class="title">店铺名称</p>
          <div class="store-info">
            <span>满减</span>
            <span>在线支付满150减30, 满10dasdasdasdasdasdasda0减20</span>
          </div>
        </div>
      </div>
    </div>

    <div
      class="store-msg-content-style2"
      v-show="storeMsgStyle === '2'">
      <div class="store-msg-bg"></div>
      <div class="store-msg-content">
        <img
          class="store-logo"
          src="https://img.yzcdn.cn/public_files/2016/05/13/8f9c442de8666f82abaf7dd71574e997.png?imageView2/2/w/145/h/145/q/75/format/webp" />
        <div class="store-details">
          <p class="title">店铺名称</p>
          <div class="store-info">
            <span>全部商品999999</span>
            <span>|</span>
            <span>上新30</span>
          </div>
        </div>
      </div>
    </div>

    <div
      class="store-msg-content-style1"
      v-show="storeMsgStyle === '3'">
      <div class="store-msg-content">
        <img
          class="store-logo"
          src="https://img.yzcdn.cn/public_files/2016/05/13/8f9c442de8666f82abaf7dd71574e997.png?imageView2/2/w/145/h/145/q/75/format/webp" />
        <div class="store-details">
          <p class="title">店铺名称</p>
          <div class="store-info">
            <span>全部商品999999</span>
            <span>|</span>
            <span>上新30</span>
          </div>
        </div>
      </div>
    </div>

    <div
      class="store-msg-content-style4"
      v-show="storeMsgStyle === '4'">
      <div class="store-msg-bg"></div>
      <div class="store-msg-content">
        <img
          class="store-logo"
          src="https://img.yzcdn.cn/public_files/2016/05/13/8f9c442de8666f82abaf7dd71574e997.png?imageView2/2/w/145/h/145/q/75/format/webp" />
        <div class="store-details">
          <p class="title">店铺名称</p>
          <div class="store-info">
            <span>全部商品999999</span>
            <span class="split">|</span>
            <span>上新30</span>
          </div>
        </div>
      </div>
    </div>


    <div
      class="store-msg-content-style5"
      v-if="storeMsgStyle === '5'">
      <div class="store-msg-content">
        <img
          class="store-logo"
          src="https://img.yzcdn.cn/public_files/2016/05/13/8f9c442de8666f82abaf7dd71574e997.png?imageView2/2/w/145/h/145/q/75/format/webp" />
        <div class="store-details">
          <p class="title">店铺名称</p>
          <div class="store-info">
            <span>全部商品999999</span>
            <span class="split">|</span>
            <span>上新30</span>
          </div>
        </div>
      </div>
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
    storeMsgStyle: String
  },

  data() {
    return {
    }
  },

  computed: {
    ...mapGetters({
      // storeMsgStyle: 'getStoreMsgStyle'
    })
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
.store-msg {
  border: 1px solid white;
  &:hover {
    border: 1px solid #38f;
  }
  .store-msg-content-style1 {
    height: 185px;
    background: url(https://img.yzcdn.cn/public_files/2017/07/11/f2a0a05d5a801cb51ecbc0710e6947fb.png);
    background-size: 100% 100%;
    .store-msg-content {
      margin-left: 15px;
      position: absolute;
      bottom: 10px;
      display: flex;
      .store-logo {
        width: 58px;
        height: 58px;
      }

      .store-details {
        max-width: 280px;
        margin-left: 10px;
        color: #fff;

        .title {
          margin-top: 10px;
          max-width: 220px;
          line-height: 22px;
          font-size: 18px;
          font-weight: 700;
        }

        .store-info {
          margin-top: 10px;
          margin-right: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }

  .store-msg-content-style2 {
    height: 238px;
    .store-msg-bg {
      height: 185px;
      background: url(https://img.yzcdn.cn/public_files/2017/07/11/f2a0a05d5a801cb51ecbc0710e6947fb.png);
      background-size: 100% 100%;
    }
    .store-msg-content {
      position: absolute;
      bottom: 20px;
      margin-left: 15px;
      display: flex;
      .store-logo {
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }

      .store-details {
        max-width: 280px;
        margin-left: 10px;
        color: #fff;

        .title {
          margin-top: 10px;
          max-width: 220px;
          line-height: 22px;
          font-size: 18px;
          font-weight: 700;
        }

        .store-info {
          margin-top: 10px;
          margin-right: 10px;
          color: #999;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }

  .store-msg-content-style4 {
    height: 258px;
    .store-msg-bg {
      height: 150px;
      background: url(https://img.yzcdn.cn/public_files/2017/07/11/f2a0a05d5a801cb51ecbc0710e6947fb.png);
      background-size: 100% 100%;
    }

    .store-msg-content {
      display: flex;
      .store-logo {
        position: absolute;
        left: 50%;
        margin-left: -35px;
        top: 150px;
        margin-top: -35px;
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }

      .store-details {
        width: 100%;
        text-align: center;

        .title {
          margin-top: 40px;
          line-height: 22px;
          font-size: 18px;
          font-weight: 700;
        }

        .store-info {
          margin-top: 10px;
          margin-right: 10px;
          color: #999;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          .split {
            margin: 0 4px;
          }
        }
      }
    }
  }

  .store-msg-content-style5 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    background: url(https://img.yzcdn.cn/public_files/2017/07/11/f2a0a05d5a801cb51ecbc0710e6947fb.png);
    background-size: 100% 100%;

    .store-msg-content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .store-logo {
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }

      .store-details {
        text-align: center;
        color: #fff;

        .title {
          padding-bottom: 10px;
          margin-top: 10px;
          // line-height: 24px;
          font-size: 18px;
          font-weight: 700;
          border-bottom: 1px solid #fff;
        }

        .store-info {
          margin-top: 10px;
          margin-right: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          .split {
            margin: 0 4px;
          }
        }
      }
    }
  }
}
.active {
  border: 1px dashed #38f;
}

</style>
