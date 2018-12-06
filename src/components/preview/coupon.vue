<template>
  <div
    class="coupon"
    :class="{ active: isActive }">
    <div
      class="coupon-list"
      v-show="coupon.addWay === '0' &&  coupon.couponList.length !== 0">
      <div
        class="coupon-item"
        :class="couponItem"
        v-for="(item, index) in coupon.couponList"
        :key="index">
        <div
          v-show="coupon.couponStyle === '2'"
          class="style2-circle"></div>
        <div
          class="dot"
          :class="couponDot"></div>
        <div
          class="coupon-content"
          :class="couponContent">
          <div class="price">{{ item.discount }}<span class="yuan">元</span></div>
          <p class="use">{{ item.discountType }}</p>
        </div>
        <div
          class="dot after"
          :class="couponDot"></div>
      </div>
    </div>
    <div
      class="coupon-list"
      v-show="coupon.addWay === '1' || coupon.couponList.length === 0">
      <div
        class="coupon-item"
        :class="couponItem">
        <div
          v-show="coupon.couponStyle === '2'"
          class="style2-circle"></div>
        <div
          class="dot"
          :class="couponDot"></div>
        <div
          class="coupon-content"
          :class="couponContent">
          <div class="price">100.01<span class="yuan">元</span></div>
          <p class="use">无门槛使用</p>
        </div>
        <div
          class="dot after"
          :class="couponDot"></div>
      </div>
      <div class="coupon-item disabled-item">
        <div class="disabled-are">
          <div class="coupon-disabled-text">已领取</div>
        </div>
        <div
          v-show="coupon.couponStyle === '2'"
          class="style2-circle"></div>
        <div
          class="dot"
          :class="disabledDot"></div>
        <div
          class="coupon-content"
          :class="disabledContent">
          <div class="price">8.8<span class="yuan">折</span></div>
          <p class="use">满299.90元可用</p>
        </div>
        <div
          class="dot after"
          :class="disabledDot"></div>
      </div>
      <div class="coupon-item disabled-item">
        <div class="disabled-are">
          <div class="coupon-disabled-text">已领取</div>
        </div>
        <div
          v-show="coupon.couponStyle === '2'"
          class="style2-circle"></div>
        <div
          class="dot"
          :class="disabledDot"></div>
        <div
          class="coupon-content"
          :class="disabledContent">
          <div class="price">100.01<span class="yuan">元</span></div>
          <p class="use">无门槛使用</p>
        </div>
        <div class="dot after"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
    coupon: Object,
  },

  computed: {
    couponDot() {
      return {
        'dot-style0-red': this.coupon.couponStyle === '0' && this.coupon.couponColor === '0',
        'dot-style0-yellow': this.coupon.couponStyle === '0' && this.coupon.couponColor === '1',
        'dot-style0-white': this.coupon.couponStyle === '0' && this.coupon.couponColor === '2',
        'dot-style0-black': this.coupon.couponStyle === '0' && this.coupon.couponColor === '3',
        'dot-style0-green': this.coupon.couponStyle === '0' && this.coupon.couponColor === '4',
        'dot-style1-red': this.coupon.couponStyle === '1' && this.coupon.couponColor === '0',
        'dot-style1-yellow': this.coupon.couponStyle === '1' && this.coupon.couponColor === '1',
        'dot-style1-white': this.coupon.couponStyle === '1' && this.coupon.couponColor === '2',
        'dot-style1-black': this.coupon.couponStyle === '1' && this.coupon.couponColor === '3',
        'dot-style1-green': this.coupon.couponStyle === '1' && this.coupon.couponColor === '4',
        'dot-style2-red': this.coupon.couponStyle === '2' && this.coupon.couponColor === '0',
        'dot-style2-yellow': this.coupon.couponStyle === '2' && this.coupon.couponColor === '1',
        'dot-style2-white': this.coupon.couponStyle === '2' && this.coupon.couponColor === '2',
        'dot-style2-black': this.coupon.couponStyle === '2' && this.coupon.couponColor === '3',
        'dot-style2-green': this.coupon.couponStyle === '2' && this.coupon.couponColor === '4',
        'dot-style3-red': this.coupon.couponStyle === '3' && this.coupon.couponColor === '0',
        'dot-style3-yellow': this.coupon.couponStyle === '3' && this.coupon.couponColor === '1',
        'dot-style3-white': this.coupon.couponStyle === '3' && this.coupon.couponColor === '2',
        'dot-style3-black': this.coupon.couponStyle === '3' && this.coupon.couponColor === '3',
        'dot-style3-green': this.coupon.couponStyle === '3' && this.coupon.couponColor === '4',
      }
    },

    couponContent() {
      return {
        'content-style0-red': this.coupon.couponStyle === '0' && this.coupon.couponColor === '0',
        'content-style0-yellow': this.coupon.couponStyle === '0' && this.coupon.couponColor === '1',
        'content-style0-white': this.coupon.couponStyle === '0' && this.coupon.couponColor === '2',
        'content-style0-black': this.coupon.couponStyle === '0' && this.coupon.couponColor === '3',
        'content-style0-green': this.coupon.couponStyle === '0' && this.coupon.couponColor === '4',
        'content-style1-red': this.coupon.couponStyle === '1' && this.coupon.couponColor === '0',
        'content-style1-yellow': this.coupon.couponStyle === '1' && this.coupon.couponColor === '1',
        'content-style1-white': this.coupon.couponStyle === '1' && this.coupon.couponColor === '2',
        'content-style1-black': this.coupon.couponStyle === '1' && this.coupon.couponColor === '3',
        'content-style1-green': this.coupon.couponStyle === '1' && this.coupon.couponColor === '4',
        'content-style2-red': this.coupon.couponStyle === '2' && this.coupon.couponColor === '0',
        'content-style2-yellow': this.coupon.couponStyle === '2' && this.coupon.couponColor === '1',
        'content-style2-white': this.coupon.couponStyle === '2' && this.coupon.couponColor === '2',
        'content-style2-black': this.coupon.couponStyle === '2' && this.coupon.couponColor === '3',
        'content-style2-green': this.coupon.couponStyle === '2' && this.coupon.couponColor === '4',
        'content-style3-red': this.coupon.couponStyle === '3' && this.coupon.couponColor === '0',
        'content-style3-yellow': this.coupon.couponStyle === '3' && this.coupon.couponColor === '1',
        'content-style3-white': this.coupon.couponStyle === '3' && this.coupon.couponColor === '2',
        'content-style3-black': this.coupon.couponStyle === '3' && this.coupon.couponColor === '3',
        'content-style3-green': this.coupon.couponStyle === '3' && this.coupon.couponColor === '4',
      }
    },

    couponItem() {
      return {
        'coupon-two': this.coupon.couponList.length === 2 || this.coupon.couponList.length === 1
      }
    },

    disabledDot() {
      return {
        'style0-dot': this.coupon.couponStyle === '0',
        'style1-dot': this.coupon.couponStyle === '1',
        'style2-dot': this.coupon.couponStyle === '2',
        'style3-dot': this.coupon.couponStyle === '3',
      }
    },

    disabledContent() {
      return {
        'coupon-style0-content': this.coupon.couponStyle === '0',
        'coupon-style1-content': this.coupon.couponStyle === '1',
        'coupon-style2-content': this.coupon.couponStyle === '2',
        'coupon-style3-content': this.coupon.couponStyle === '3',
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.coupon {
  border: 1px solid white;
  &:hover {
    border: 1px solid #38f;
  }
  .coupon-list {
    display: flex;
    width: 100%;
    overflow: hidden;
    padding: 10px;
    background: #f8f8f8;

    .coupon-item {
      position: relative;
      display: flex;
      margin-right: 15px;
      height: 90px;

      .style2-circle {
        position: absolute;
        top: 50%;
        margin-top: -7px;
        right: 0;
        margin-right: -7px;
        width: 14px;
        height: 14px;
        border-radius: 7px;
        background: #f8f8f8;
        z-index: 3;
      }

      .dot-style0-red {
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAC0CAYAAACUlQzjAAAAAXNSR0IArs4c6QAAAdFJREFUaAXtmUFKA0EURH/PiCDEjbjQMyiuXYprXXoCvZW68wZuxUMInkEJ4saFIGTayWAM01N/+L+nN4HKJunf1UXyUkMxTHi7OI5S8FUV9OqsNsCw3tnfDXV1GiTcBpHJPFuP9ev98uRcpHmIUQ7XU9+nnuHyaGcam6f2qw72LNaDP+Xg8eW59bqzHEaagWEnqsM9Eltm0LDa3nu1HEYaaIiE1hk0bH4+j6wGqQ4ayiJep0LrehCNorH5D3ZmBpe/IsyvzmYds+5nxpvcQK+QbC2+P75WixLv+E+Z4EzDCfD+jm4AQ3aKsFPcSYfBZqe4OLJTXLigGOYQKo1DGhpBjcgqdgo7ZSQfyha89NgpCi08ZqdgLp4pzKHHINXSMCXiX7NThJ2SERt0hJ2CqKgzdoqKxrzBCjCjUoXlGfI+hZ2ixk3dgDlkp6i80AY7BVHxzWAOfRZ9NQ37PHJWvE/hfUpGbuClx05xkWSnuHBBMcwhVBqHNDSCGpGxU9gpI/HQtuClx07RcME5OwVicQ1hDl0OiZiGCZCMJTuFnZITG3SGnYKoqDN2iorGvMEKMKNSheUZ8nkKn6eocVM3YA7ZKSovtMFOQVR8M5hDn0Vf/QvYqJ3lQEIVBgAAAABJRU5ErkJggg==");
      }

      .dot-style0-yellow {
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAC0CAYAAACUlQzjAAAAAXNSR0IArs4c6QAAAdBJREFUaAXtWTFOw0AQ3HUQooCOhjfwAWoaHgK/Ajr+gJAQvIJHgOhoEFKy2JGjHL45Z/dsikiTJvbc7DgZz2mUWO390WTGVzOj1lpqHwT16EQWzYWI3orqZD819dA+ny5lZQ9idpbikeM/gt1gL/rcimZrHuHspujp1YuY3HmGEScTXJMWeo/IHgwLrg7fPMOIgwUR04lhwebn3Dmf0bDg0q4zphPIojFrbJJgZxdyfkBR+3g9ls6z7muq3NQGenPBA7HvL1n2p5N3sgi+KZvLVbxTsMK0wcg+eMhOYacMYrv7FAebnbLbuS2DnbL1ovYI57BWrZ2j4ATz+tFG2CnslHCO8NZjp0SMZKdE3MJcnEPMdaEUdNk0SmKntH/68b+v0YyARbz12CnAqiLETila417AOXSP50QK5p5EEXYKOyWamZaPtx47JWIlOyXiFubiHGKuC6Wgy6ZREjuFnTIaELyItx47BbuFUXYK9iWC4hxGFAZcCg4MqThlp7BTqmKDhtgpyJUSxk4pOePHWQF+r0rMf/CQz+j5PKUUtyKOc8hOKRoGFtgpwJQghHMYFEnpFEzdqDvm7xT+TqlIDt567JSIleyUiFuYi3OIuS70F1wX79Qz2wiaAAAAAElFTkSuQmCC");
      }

      .dot-style0-white {
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAC0CAYAAACUlQzjAAAAAXNSR0IArs4c6QAAAaZJREFUaAXtmMFtAyEURL05J5WkgOScVtKVo7TnBnxP8mFzwIj5fNZwsPSQWAF/GKFh1mN7+7V2mtieJnJlqscgfLGzvlv/sj5Vz5Pdz4f1S7qooy0LWT6MKJH+TCNM5EZ2Pkqobvm7PPXIeGuB7XTPtn5t1Xpr6oS9fbKuCF/ljk5BEX529sXLpt882/yT3WfsdKPW36wn7x02tO3NbUvPuCB9pLqU/k6BgFAIM7D8GBqSKWTKgKkTVBmbTNk/3iPP9D2GTBk0XgVXPqxg8SmEca0UMmlIppApyh9iXb16ZEokTXYMmSLMNbCsfDhAcQuF8FaPIzMyZVfNXnP++4obSL16ZAqZ4rhI2cbZ4pcg9PWJVJdoyO8UfqdEzFdglA/JFDKlsEk9VLapceE5hGGpJHCJhmQKmSId1y4oH5IpZErbMXlV2cbZ4pcg9PWJVJdoSKaQKRHzFRjlQzKFTClsUg+VbWpceA5hWCoJXKIhmUKmSMe1C8qHZAqZ0nZMXlW2cbb4JQh9fSLVJRqSKWRKxHwFRvmQTCFTCpvUQ2WbGheeTyf8A6Y4W3it5OVzAAAAAElFTkSuQmCC");
      }

      .dot-style0-black {
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAC0CAYAAACUlQzjAAAAAXNSR0IArs4c6QAAAdVJREFUaAXtWcFKw0AU3E0jeNAPEAW9e/RSFEror+hfiTc/w9/wXMRP8CIYs2aFQHczL31vk0theml33uwkmU4YQvz6YRPcgp9qQa1/qSMQPD2pzmu/Wjvvn/tznu2n3/fwfrPdhq59DcFd7OOW34lg3BhFu9/2rf85mmmEVznp82O3u7q+uezxu3ymWcN/uXbVi2Yz4mDBOrwjsgaDgpqNEgcKtq2/lTYcwrGg6x4PbZTmo2jMjU1yhkOw+6OPDiSdUY77pmnOomdtvMwQnuaIRfH6+6f7yo8yZ51c8hyhYS8FByfKv4/AQ3aKY6eYEw6DzU4x+chOMdkFyTCHkKkEKag0aoJWsVPYKRP5EEbw1mOnCG5hmJ2CfbGgMIcWgZxLwdwR+5qd4tgpBbFBW9gpyBURY6eI1qgHrAC1VSJxeQ/5nMJOEeMmDmAO2SmiX2jATkGu2DCYQ5tEyqZg6kfJis8pfE4pyA289dgpJifZKSa7IBnmEDKVIAWVRk3Q2CnslIl4SCN467FTJLsgzk6BtphAmEOTQkamYGZIwZKdwk4piQ3aw05BrogYO0W0Rj1gBaitEonLe8j3KXyfIsZNHMAcslNEv9CAnYJcsWEwhzaJlP0HRISbhy7A7SwAAAAASUVORK5CYII=");
      }

      .dot-style0-green {
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAC0CAYAAACUlQzjAAAAAXNSR0IArs4c6QAAAc9JREFUaAXtWctOwzAQjNMIVB53uHHnB3rmV+CvgBufgfgL7j1wQL0WqIpoTEOp5Niz1q6TS6WpVDXenZ2ok7FGVtz8481XI37qEbn+qA6A8OT06HxSNzPn3P32O1hPF2o4X73fuPbnyfvqMqxbrnuE3eCOdPPsvU96GuLkoVxNL162gw+aYYRJCDtQ7SaPCKypQcLjaf2qGUYYSIiA2hokXK/aay1BjIOErd/cxkDtOrHGUNs04Z0DYyc3CnG5a7fwi7NOs/+/eVdq6P1Nmq/P7+V+McYvfChDiEk4RL3d7AFoyEypmClmp0NjM1NMOjJTTHJBMPQhRCqLJFQKlYHVzBRmSsYfQgtuPWaKoBYuM1OwLpYq9KGFIMaSMFbEvmamVMyUAtugEWYKUkWsMVNEadQNRoBaKhE4voY8pzBTRLuJDehDZoqoF2owU5Aqthr0oY2ijyZhX4+SFc8pPKcU+AZuPWaKSUlmikkuCIY+hEhlkYRKoTIwZgozJWMPqQW3HjNFkgvWmSlQFlMR+tDEEIFJGAlSsGSmMFNKbINmmClIFbHGTBGlUTcYAWqpROD4GvJ9Ct+niHYTG9CHzBRRL9RgpiBVbDXoQxtFH/0LaCUp7PtuoaoAAAAASUVORK5CYII=");
      }

      .dot-style1-red {
        width: 18px !important;
        background: url("data:image/png;base64,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");
      }

      .dot-style1-yellow {
        width: 18px !important;
        background: url("data:image/png;base64,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");
      }

      .dot-style1-white {
        width: 18px !important;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAC0CAYAAAD8Zo7bAAAAAXNSR0IArs4c6QAABWRJREFUeAHtnb1u40YUhSlZlla2JFuAbQQG7HL9BOm3WmATBEja7fIGSbdFyn2PdNsmzSZAqvR5gk3lHzgObAPxvyxbtnIOYwI0weGZochAxR3AIMU75Bx+c+aSbK4bUY1tOp229/b2xiFDtEI6h/Y9PDzsN5vN0dbWVtf33KZvxzL9QGgIQZOQc2sVBCEvW63Ww9wIAqGdxcXFF3MjCEJev0CbC0EHBwddEHrV7Xr7OdZdp4fedDqdcaPRCAEU1Sbo8fHx6+Xl5UGQGnSuRdDx8XEPZL7BdIXhgaBaEuPt7e07iGkuLCw4AZ2dnTljlQZA57P9/f2ryWQCT+e3h4eH6cXFRW6w8ikDnff9fr9VRAf+ipDBc0HkH83tqg+CzOfo9XZlZaVT1BtoItfqq0wQpwoiPq6trXVdgyUiMWWRi2AlgnDHndFo9AvIrPokwvv7+wiPlETfs20lgpCVf4SQncFgkD9Kakj6h60WD5EMfPMBd/vV+vr6Umpc524RHZ4UnLiSkegZThPJ+IrhuVjuUa/XcxIqJehpNX2kZ3ymKbkJpISIU7a05IYZlKlJhXkGA7zlavIxcCKGS/3u7i5CjkoO5W69CEFID0Le4QrfMekxz6ilnR3t5uYmnib1euQUxPcZXPQNn9pPD8rmcDhccuWPrID0b04VHiWxd9LH8/ZbQNnm1wG2Q3R4ie0Otq8h5BXfZzDfA/w1ygjhgFxV/KORfVpjd3d3yk8Vfh3whZzvwGz0R+i0ZAekEKzEwlWVPSc2dch3U/YCrt+cpoSMKwnmnRu0yvIukD3G1UQqXN6cplDKlQoiFS7tdrtdmGuyN5H+PbMgkuDUjMfjCB6M80woldKCODj/OC18haAQNj65ix4H6QHVvjchvgNz6dOgJMB9fFU4n0lqYFfcWxAvoNK+a5CQ45W8D4UMqPqaICOkCKi4ecgIKQIqbh4yQoqAipuHjJAioOLmISOkCKi4ecgIKQIqbh4yQoqAipuHjJAioOLmISOkCKi4ecgIKQIqbh4yQoqAipuHjJAioOLmISOkCKi4ecgIKQIqbh4yQoqAipuHjJAioOLmISOkCKi4ecgIKQIqbh4yQoqAipuHjJAioOLmISOkCKi4ecgIKQIqbh4yQoqAipuHjJAioOLmISOkCKi4ecgIKQIqbh4yQoqAipuHjJAioOLmISOkCKh4UFWLy8vLZ2U2WO8jpC6MEsO4t6DV1dW4CEm6EMn19XU8BoWxPEsV4rwFcWQOmAxKEay2lJRqubq6iku1zFomaOZlT4EonBShuFYsltPKojZl28yC0gOTGKunkBqJscZMaKtUEAdnXRmWFWOlHYqiuJA2dyWjGsCaW1QLx+OiWqzLCaPOVFSLnvKt1jR3ZcecgtLzPheF2dKCkv1ZS9cxJXAVFpWU8iKUCEq2dRb3KyWIwkirjvKHyU2X2mIlxgUij46OLrHv1bDiprgRZ99SQrInsWoliF07R0kFimrCslslmRql777FXX9CNcr/6pBlFad+Jw9nVwavRBBWzRjJ84vz8/Mzlq1TjW8KSQ21bN9KBPGiGxsbf2Pz5enpKQ2SHefZb9ZQY2G3vFaZIF58e3v7D2w+gFRhKXrmIZfoSgVRFF5BfkACnLgIsA995PJQ6TzEC7saVt17eOp7FCJ1ljd1lYOuRdDJyUkf5v5rc3OzF1p6s/IpIzUUrmWi/IkJ0EXRdbwWQRwMPvkZXyUXroFdx2sThAF/RdHIjms1/e+CkL1HWN6/+yTKtLg6CXGc3/AwDfomqlUQCH3CI2J+BIHQnyjh665Nn56rp/26Cf2DjBz0uV5LYkxuHCss+F+s/As9kb4JQZ2gLwAAAABJRU5ErkJggg==");
      }

      .dot-style1-black {
        width: 18px !important;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAC0CAYAAAD8Zo7bAAAAAXNSR0IArs4c6QAAB39JREFUeAHtXFtvVUUUnn0utfcLTWmpFJAiTa2YqBS8cFGJRKPGBxESEx9948EnX4yP/gP/gUbDo/ECiKAWJDEo1yBpoEbb0pZya3t6g9Oe7Xzbrp1hOvusvU+PPK1JdtfMWmtmfeebtWdPX5anVtY8Yzr6NE6h39PTU1HX2JwzfNguJpa7ESgvk8k0JF28XIAIBOITU56fzTY9TEAmCBNI2M+mspseJiBXrJAdbfTSqXSXy6mYrtQtM9mhvinRT3mp1K5iwV22UgHZa9lgvM7OzuqUp162HblxKYAouL029OHT1Lx6j69Ule3EjZMCssGEAIxAgS6Vybxh6GJ3kwIyFzbBmcC89d3ddemUVxKgjBmB6ZsAyPUBIFqJH+i1NjV/6PuqkZxsmc1m1f5337HVwTgOoDhA4BOA6el5pk2/Xged0ZaUlZWVajo3rb7+5ttlbtyWRYGhhWyGvNqGmo+1sZocXLK6ukrNzM66TMGvchkokG0jgGSHDJiBfLq399lUKvW+PckeV1VVqbm5OVsdjO0to4C2M+lNSUACUNiqyoqqL33fT9uT7XHzqlVqcnLSVgdjc1EKZjuSHjIIriXNg0y1t7dX1TbWfqXPnXZ7smu8du1aNXx9xGVSNkPkRCAwpj4BIlAkUx0bOj/Tg600uZhsaGhQnnaemJhwupmAEMBsNIZ0PQEzARjPO2BOLNZf16HZGb4e6ULU28FJT5IABVukV0vrnFnT8dimw14CMPrCpjZvflxdG/grEhAYIjBwosCufggOb1OQwDFzBouhPdHdrUZHxyK3Cz60ZS4gpAsl3iScM3i147xNCEANh2GXZuf7I0dJ5ZQAhF+OFga2+/g24XOwdAJXazDBhCR/tvVuVVcHBtTMzEzRabRlNpgU7jO4QuCrjQ9lsW9T0Qja+NSWLQoMnfr1NOeqMvhXBf8d4EKOOzCunbjp4XJF95kSCAkDr1vXoTZu3KAOH/lBFQqFUB/VyUT935R8U5aHAJjtvb3q2PET6t69e8sdHBpKaodpZSpsE5gBmKhD0BWh7ICQK0hgSGxTXGYIXNkA4dDDOYNXG28TEjhOzhAQkisGhG8TPgc4gXHo4ZzhXm0K7pKxAYEB3GNwuYLEFQJfbXwo8W06fuLnRLniAgNdbEAH9u8Lrp246eFyNTU1pX7pO1kWECa42IAwyXUHNhcrR58+G+VYqyxrCCCORmFIGOIY4OySQ8IQxwBnlxwShjgGOLvkkDDEMcDZJYeEIY4Bzi45JAxxDHB2ySFhiGOAs0sOCUMcA5xdckgY4hjg7JJDwhDHAGeXHBKGOAY4u+SQMMQxwNklh4QhjgHOLjkkDHEMcHbJIWGIY4CzSw4JQxwDnF1ySBjiGODskkPCEMcAZ5ccEoY4Bji75JAwxDHA2SWHhCGOAc4uOSQMcQxwdskhYYhjgLNLDglDHAOcXXJIGOIY4OySQ8IQxwBnlxwShjgGOLvkkDDEMcDZJYc4hhJVtXj7rTeDgmoos4GyYajUlaQuDAcGdu+5F3fFKqSD+neoBxNViAR1qcoBLjagqF9nl2q5cPHSikq1rBgQAbWL2VzUwEopZlM2QATMLPeDUi5Jy/2U/bWfn59XfSdPqbGxG+r11/aqxsbIsoz0Gx6QZQdEq1+8dEmdPXdevbrnlUSgMrmJ23VcUS0KklQODg4FU17avTN2tSaUG6vQz/9edqytrVX9qOtZcYkOINngZywHFYK0C7Mt+ScSu3buUFO5nDp//kLReSjmiMDUnIfk5K1b968PDfY11Dd/UfFItl6XrtuiJyTKvxvj4+r57dvVP4ODKp/PU7xlEoBoYROM3Q/GN2+OTmtgh1taVx/LprN79dy6ZStGKBYWFhTOKtS7GhoejvD6DwyCmQ/KuWEMaT6LND535swfUxPTu7XT71oXu/155Ypas6at6FsHhqi5tg7AXM3XbM34i/lD9Y1N63VNxiddTrYOCZ1Jp9XqlhY1Mjpqm4MxbRcGJkv22GQqZHBkZGTut9MnP9DVBw8Fq8X4Mzg0rKuDPRrpaQIynUxwrv4DAIf+HjionWJtH64tKBYYdYKbWwZA5raZAE09AKKFulwut9hY33y0srJin9aziV5bU6PwjI/fDBYy/9gMERumD/qkNyVtHXSFy5fPjs3fn3tP5xOSv2i7feeOqq+vd/rYgMiJAtOYJPRoZA/ALI0LePt04n4eeBT5gxsnqs25WhQg8iUANIY0dSawoD89OfOp9nEXDl5aZXZ2TtVUu8sPh3mw5FtM2L4Y04Mfhn5w0G57Yccnuv7nR1GL4YBEKTxXs4O4fEyd6U99SAIEme7q6mpY1dJ6uZQ6oNyWmWDsfuTW9ff3Ty0W/O/sCXHGSQGZILC+mUMUL9AVFhYeCiACQcFNaYLz794eP6730l2E2pxl9ZMyZE0Ph8RcCGpgYGC24KufQo+YnVIBEQCEob4p0S/4hUJfTByhW6mAwgWsDoCEz2Jhsd+ys8OVACJGKAgBwTjo5wv5a2SMK1cCyIxhgiNgvpfP3zWd4vTLBciMReB8fW11V1Y3va3+v/1mHNBxKgGGAAAAAElFTkSuQmCC");
      }

      .dot-style1-green {
        width: 18px !important;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAC0CAYAAAATpOXlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MDhBRDhGOTU2OTMxMUU4OUFBRUUxQTE3ODE5NDQ2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MDhBRDhGQTU2OTMxMUU4OUFBRUUxQTE3ODE5NDQ2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkwOEFEOEY3NTY5MzExRTg5QUFFRTFBMTc4MTk0NDY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkwOEFEOEY4NTY5MzExRTg5QUFFRTFBMTc4MTk0NDY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0YBFhAAABHtJREFUeNrsnD2T01YUhs+V5fXXevlYHAY7s1BQ5AfA0CYFtIQeqkz+wBapyAwz+RVJJhX0SVoooAwDP4CCgt3BZhbjLHhXkmXZupwjsyyZxLIk6xrN5JULF75Xenzu+XjVvIoMXlrrtR2n66fdZ5mE6lK3mWWfUSjtr50qHBRNJhcLBxVa9FXxIqX1N4WC6ulenamuFgpq4tI1ralWKChN+nrWvUag+rrf5HzKDGWbgPLc4AdNNLdHKf5sNdqrg3rh9M9pGm/HrSmpEgVhQD3v9WqgFPl3OMHr8VAWTXW4mpzadXqXGOu7ReskUlM9NQ81O7bwD1YGpUVrK6UyjcOJWSgGqRL5v/OxdZKsr5Vq5E08s4m+63R/5a8rSdaW1eyRgTYUKYnQzuHLu1z+N5PuqdscpenITPOUHNpxu4/SAEl/atoNOgyc/KGkyrj0n/AsuZJm30Z5naPkxx5daqgoOs7Ln3mu/ZU0qY8fZFGz3KC3wTCfMSOzbDY6xtuzxqhTR3ezcpKPzY3tTwuhRA9F8oOnvev41+Nm2aLrRLlJFnfxJFGKoOQ1SN46IpHPmjqSsKwYAze8mlUP/aPauCet23V65fWTq4Tj97LxB2Gd39gRoNOVE7TnveHbJr+xEelydGQSIQFaVG3GoaTKJKklh+TIwgyhzw1KGqP0ISl7qbKkSW0ESmaZjA7p1NIYJTpJyj4XKImE6CARaPIt8kOmfSR/eZbtjdLnztJQoqlFwopilEgErIf6o0FuIJmPb56mzr9YCngBClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQ/3eoVG4l7doXHy1UxFJOHNw+q4XKrtP7l9lMq7oZ/SZmM+JTtnKzGc2fCT908sGky516tE/Dj7Y8Z6tnIlse8Qha1pZn6ZyS6LwLDqjr7UXQ52otOlneKEaiSyQFrue+prJlR5GzMt4+9+oTv6m+/zeN+CglakcOgoVoCRK1/fGQztbOpAZT84zWxAk3L6O1U2sbqVy71LwfPrWkE7/XZS3pqqVK5FG1FNSn17F5n97myNazgLUqpyPPqiS2YolyqqVaB1uN9o+a1i4qRb8opVI3ooH/ltbL9ajx5hKp/+jul2Yup+n8F+UYbU76wXg//+rjqD3VVLnMf+lxmn3D4JBqnFuLqjFzS7jQaL06X+98zaG+l6bBHkwcPsaGuT7FuTU6v/7lrTRgLiuLWqlqvnluNTrfJz3KIyURd4S5QEnEiCo3uDK7SdZ7rDBEWRgfM5Jjiqxvk7QLfxpEQ3sls0+qktP5t0XrRG/F9avcBzK3ijscLTceKowUbK7NM0Fz/SnU4e35D423IjcCNdCDjUPHe5F1iBvRU5tqc8gl+Wfh3vv4iIoHZdfpPvctr1BQbdXmClQPivfartTDwkFZIT0rXqRs+3nhoFRlgcT8HFAd6hxk2fdegAEAEqbgxIMkv38AAAAASUVORK5CYII=");
      }

      .dot-style2-red {
        width: 4px !important;
        background: #e74c2c;

        &:last-child {
          width: 14px !important;
        }
      }

      .dot-style2-yellow {
        width: 4px !important;
        background: #ffe9b7;

        &:last-child {
          width: 14px !important;
        }
      }

      .dot-style2-white {
        width: 4px !important;
        background: white;

        &:last-child {
          width: 14px !important;
        }
      }

      .dot-style2-black {
        width: 4px !important;
        background: #383b3e;

        &:last-child {
          width: 14px !important;
        }
      }

      .dot-style2-green {
        width: 4px !important;
        background: #e0f4e4;

        &:last-child {
          width: 14px !important;
        }
      }

      .dot-style3-red {
        background: #e74c2c;
      }

      .dot-style3-yellow {
        background: #ffe9b7;
      }

      .dot-style3-white {
        background: white;
      }

      .dot-style3-black {
        background: #383b3e;
      }

      .dot-style3-green {
        background: #e0f4e4;
      }

      .dot {
        width: 10px;
        height: 100%;
        background-size: 100% 100%;
      }

      .after {
        transform: rotateY(180deg);
      }

      .coupon-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 94px;
        // flex: 1;

        .price {
          font-size: 26px;
          font-weight: bold;
        }

        .yuan {
          font-size: 12px;
        }
      }

      .content-style0-red {
        color: white;
        background: #e74c2c;
      }

      .content-style0-yellow {
        color: #f39343;
        background: #ffe9b7;
      }

      .content-style0-white {
        color: #d45134;
        background: white;
      }

      .content-style0-black {
        color: white;
        background: #383b3e;
      }

      .content-style0-green {
        color: #63be72;
        background: #e0f4e4;
      }

      .content-style1-red {
        color: white;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAC0CAIAAADacNEYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3RkEzMEZFMDU3RTcxMUU4OUJBRDgzMzZFMjBGMjRFOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3RkEzMEZFMTU3RTcxMUU4OUJBRDgzMzZFMjBGMjRFOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVBNUU2REY1NTdFNzExRTg5QkFEODMzNkUyMEYyNEU5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVBNUU2REY2NTdFNzExRTg5QkFEODMzNkUyMEYyNEU5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+NcBlqwAAACNJREFUeNpieO6jw8TAwEAQswQmMhCrdhSPYmpiEtIeQIABAJ9OBuxBUvYUAAAAAElFTkSuQmCC");
        background-size: 100% 100%;
      }

      .content-style1-yellow {
        color: #f39343;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAC0CAIAAADacNEYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1QTVFNkRFRjU3RTcxMUU4OUJBRDgzMzZFMjBGMjRFOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1QTVFNkRGMDU3RTcxMUU4OUJBRDgzMzZFMjBGMjRFOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVBNUU2REVENTdFNzExRTg5QkFEODMzNkUyMEYyNEU5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVBNUU2REVFNTdFNzExRTg5QkFEODMzNkUyMEYyNEU5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+BVg4ewAAACdJREFUeNpi+P9yOxMDAwMhzPD//38mhlc7iFE7ikcxNTEpaQ8gwABAzA1AqZG25wAAAABJRU5ErkJggg==");
        background-size: 100% 100%;
      }

      .content-style1-white {
        color: #d45134;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAC0CAIAAADacNEYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNTg2OEZGOTVDREUxMUU4OUE5QTgwNDYxNTI0OTNEQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNTg2OEZGQTVDREUxMUU4OUE5QTgwNDYxNTI0OTNEQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA1ODY4RkY3NUNERTExRTg5QTlBODA0NjE1MjQ5M0RDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA1ODY4RkY4NUNERTExRTg5QTlBODA0NjE1MjQ5M0RDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6xvjLwAAACpJREFUeNpiePDgAcP///+ZGBgY8OIPHz4QpW4Uj2JqY2LT3sOHDwECDADhTxU7lGnIHAAAAABJRU5ErkJggg==");
        background-size: 100% 100%;
      }

      .content-style1-black {
        color: white;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAC0CAIAAADacNEYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBNUI1NEREOTU3RTcxMUU4OUJBRDgzMzZFMjBGMjRFOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBNUI1NEREQTU3RTcxMUU4OUJBRDgzMzZFMjBGMjRFOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdGQTMwRkVBNTdFNzExRTg5QkFEODMzNkUyMEYyNEU5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkE1QjU0REQ4NTdFNzExRTg5QkFEODMzNkUyMEYyNEU5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+UsYcyQAAACZJREFUeNpisLC2Y2JgYCCIo6MimN9//EyU2lE8iqmJSUh7AAEGAL2sCdrnO/kQAAAAAElFTkSuQmCC");
        background-size: 100% 100%;
      }

      .content-style1-green {
        color: #63be72;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAC0CAIAAADacNEYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MDhBRDhGRDU2OTMxMUU4OUFBRUUxQTE3ODE5NDQ2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MDhBRDhGRTU2OTMxMUU4OUFBRUUxQTE3ODE5NDQ2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkwOEFEOEZCNTY5MzExRTg5QUFFRTFBMTc4MTk0NDY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkwOEFEOEZDNTY5MzExRTg5QUFFRTFBMTc4MTk0NDY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+JQNXvAAAAChJREFUeNpiePDlCRMDAwMhzPD//3+mh1+fEqN2FI9iamJS0h5AgAEAlbsPi0Na+PYAAAAASUVORK5CYII=");
        background-size: 100% 100%;
      }

      .content-style2-red {
        color: #e74c2c;
        border-top: 4px solid #e74c2c;
        border-bottom: 4px solid #e74c2c;
        background: #fff;
      }

      .content-style2-yellow {
        color: #f39343;
        border-top: 4px solid #ffe9b7;
        border-bottom: 4px solid #ffe9b7;
        background: #fff;
      }

      .content-style2-white {
        color: #d45134;
        border-top: 4px solid white;
        border-bottom: 4px solid white;
        background: #fff;
      }

      .content-style2-black {
        color: #383b3e;
        border-top: 4px solid #383b3e;
        border-bottom: 4px solid #383b3e;
        background: #fff;
      }

      .content-style2-green {
        color: #63be72;
        border-top: 4px solid #e0f4e4;
        border-bottom: 4px solid #e0f4e4;
        background: #fff;
      }

      .content-style3-red {
        color: white;
        background: #e74c2c;
      }

      .content-style3-yellow {
        color: #f39343;
        background: #ffe9b7;
      }

      .content-style3-white {
        color: #d45134;
        background: white;
      }

      .content-style3-black {
        color: white;
        background: #383b3e;
      }

      .content-style3-green {
        color: #63be72;
        background: #e0f4e4;
      }
    }

    .coupon-two {
      flex: 1;

      .coupon-content {
        flex: 1;
      }
    }

    .coupon-box-shadow {
      // box-shadow: 0 0 8px rgba(0,0,0,.1);
    }

    .disabled-item {
      .disabled-are {
        width: 40px;
        height: 40px;
        position: absolute;
        right: 0;
        overflow: hidden;
      }

      .coupon-disabled-text {
        position: absolute;
        top: -10px;
        right: -5px;
        width: 44px;
        height: 44px;
        line-height: 40px;
        border: 1px solid #9e9e9e;
        border-radius: 22px;
        transform: rotate(40deg);
        color: #9e9e9e;
        text-align: center;
        font-size: 12px;
        z-index: 2;
      }

      .style0-dot {
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAC0CAYAAACUlQzjAAAAAXNSR0IArs4c6QAAAdRJREFUaAXtWMFKAzEUzFv3qFDBi3cPQn/As7+if6Xe/AzxJ2RFwS8oggXP7dN2bd3dTMJ72b0UppduJpMJnU4YNvLy+q5hwk81odZW6gAEq7PTk6qWK5HqTkRG+yldD5u3j2vV1aNqOO/inuee4GZhK7p+UtVoziIc/Snzy4vnEOTeshhxIsENSY70AZEtGBQMs1ljWYw4WBAxjRgWXC7nxvURDQrqSm4iphGIojE2NnV3406wo426vNyzNIvFcfj1rP2Zelsa6N0m9frz67sdjD7GWxn4p+x2K/mmYIlr/TUH4CE7JbBT+qk1jHCw2SkG6/YUdsreiuIHnMNiuRAoOMK8v6UVO4Wd4o8RPnrsFI+T7BSPW5iLc4i5JpSCJpuyJHZKYKdkEwIn8dFjp0CzEiA7JWGMA8Y5dAgMqRQcOuIfs1PYKf7UJK4I2CkeK9kpHrcwlxWAffGg03vIuy++p3gS2HJxDtkpHifZKR63MBfnEHNNKAVNNmVJfE/he0o2IHgSHz12CnYLo+wU7IsHxTn0KAy4FBwYUjBkp7BTSmID17BToC0JkJ2SMMYBswIcZiWo03vIuy/efSXCloFxDtkpGcuiKXZKZIkbwDl0y/wv+AG49D0V8iVliQAAAABJRU5ErkJggg==");
        background-size: 100% 100%;
      }

      .style1-dot {
        width: 18px !important;
        background: url("data:image/png;base64,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");
        background-size: 100% 100%;
      }

      .style2-dot {
        width: 4px !important;
        background: #d3d6d9;

        &:last-child {
          width: 14px !important;
        }
      }

      .style3-dot {
        background: #d3d6d9;
      }

      .coupon-style0-content {
        color: white;
        background: #d3d6d9;
      }

      .coupon-style1-content {
        color: white;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAC0CAIAAADacNEYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBNUI1NERERDU3RTcxMUU4OUJBRDgzMzZFMjBGMjRFOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBNUI1NERERTU3RTcxMUU4OUJBRDgzMzZFMjBGMjRFOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkE1QjU0RERCNTdFNzExRTg5QkFEODMzNkUyMEYyNEU5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkE1QjU0RERDNTdFNzExRTg5QkFEODMzNkUyMEYyNEU5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+1lkioAAAAChJREFUeNpiuHztJhMDAwMhzPD//3+mK9dvEaN2FI9iamJS0h5AgAEAaAIO6S+wePAAAAAASUVORK5CYII=");
        background-size: 100% 100%;
      }

      .coupon-style2-content {
        color: #d3d6d9;
        border-top: 4px solid #d3d6d9;
        border-bottom: 4px solid #d3d6d9;
        background: #fff;
      }

      .coupon-style3-content {
        color: white;
        background: #d3d6d9;
      }
    }
  }
}
.active {
  border: 1px dashed #38f;
}
</style>
