<template>
  <div
    class="commodity"
    :class="{ active: isActive }">
    <ul
      v-show="commodity.listStyle === '0'"
      class="commodity-list-style0"
      :style="{
        paddingLeft: commodity.pageMargin + 'px',
        paddingRight: commodity.pageMargin + 'px',
        }">
      <li
        class="commodity-item"
        :class="commodityStyleObject"
        v-for="(item, index) in commodity.commodity"
        :key="index"
        :style="{
          margin: commodity.commodityMargin + 'px',
          }">
          <div
            class="commodity-image"
            :class="pictureFill"
            :style="{
              backgroundImage: 'url(' + item.imgSrc + ')'
            }">
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '0'"
              class="badge-new">新品</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '1'"
              class="badge-hot">热卖</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '2'"
              class="badge-new-en">NEW</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '3'"
              class="badge-hot-en">HOT</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '4'"
              class="badge-hot-customer">
              <img :src="commodity.badgeUrl" />
            </div>
          </div>
          <div class="commodity-info">
            <p
              class="title zan-ellipsis"
              v-if="commodity.showContent.indexOf('0') !== -1">这里显示商品名称,最多显示1行</p>
            <p
              class="desc zan-ellipsis"
              v-show="commodity.showContent.indexOf('1') !== -1">这里显示商品描述,最多显示1行</p>
            <div
              class="config"
              :class="flexEnd">
              <div
                class="price"
                v-show="commodity.showContent.indexOf('2') !== -1">
                ¥<span class="price-number">99</span>
              </div>
              <div
                v-if="commodity.buyStyle === '0'"
                class="buy"
                v-show="commodity.showContent.indexOf('3') !== -1">
                <Icon type="ios-cart-outline" />
              </div>
              <div
                v-if="commodity.buyStyle === '1'"
                class="buy"
                v-show="commodity.showContent.indexOf('3') !== -1">
                <Icon type="ios-add" />
              </div>
              <div
                v-if="commodity.buyStyle === '2'"
                class="buy2"
                v-show="commodity.showContent.indexOf('3') !== -1">
                <Button type="error" shape="circle">{{ commodity.buyName }}</Button>
              </div>
              <div
                v-if="commodity.buyStyle === '3'"
                class="buy3"
                v-show="commodity.showContent.indexOf('3') !== -1">
                {{ commodity.buyName }}
              </div>
              <div
                v-if="commodity.buyStyle === '4'"
                class="buy4"
                v-show="commodity.showContent.indexOf('3') !== -1">
                <Icon type="ios-add-circle" />
              </div>
              <div
                v-if="commodity.buyStyle === '5'"
                class="buy4"
                v-show="commodity.showContent.indexOf('3') !== -1">
                <Icon type="ios-cart-outline" />
              </div>
              <div
                v-if="commodity.buyStyle === '6'"
                class="buy2"
                v-show="commodity.showContent.indexOf('3') !== -1">
                <Button type="error">{{ commodity.buyName }}</Button>
              </div>
              <div
                v-if="commodity.buyStyle === '7'"
                class="buy7"
                v-show="commodity.showContent.indexOf('3') !== -1">
                {{ commodity.buyName }}
              </div>
            </div>
          </div>
      </li>
    </ul>
    <ul
      v-show="commodity.listStyle === '1'"
      class="commodity-list-style1"
      :style="{
        paddingLeft: commodity.pageMargin + 'px',
        paddingRight: commodity.pageMargin + 'px',
        }">
      <li
        class="commodity-item"
        v-for="(item, index) in commodity.commodity"
        :key="index"
        :style="{
          padding: commodity.commodityMargin + 'px',
          }">
        <div
          :class="commodityStyleObject">
          <div
            :class="commodityBorder"
            class="commodity-image"
            :style="{
              backgroundImage: 'url(' + item.imgSrc + ')'
            }">
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '0'"
              class="badge-new">新品</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '1'"
              class="badge-hot">热卖</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '2'"
              class="badge-new-en">NEW</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '3'"
              class="badge-hot-en">HOT</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '4'"
              class="badge-hot-customer">
              <img :src="commodity.badgeUrl" />
            </div>
          </div>
          <div
            class="commodity-info">
            <p
              class="title zan-ellipsis--l2"
              v-if="commodity.showContent.indexOf('0') !== -1">这里显示商品名称,最多显示2行,最多显示2,最多显示2,最多显示2</p>
            <p
              class="desc zan-ellipsis"
              v-show="commodity.showContent.indexOf('1') !== -1">这里显示商品描述,最多显示1行</p>
            <div
              class="config"
              :class="flexEnd">
              <div
                class="price"
                v-show="commodity.showContent.indexOf('2') !== -1">¥<span class="price-number">99</span></div>
                <div
                  v-if="commodity.buyStyle === '0'"
                  class="buy"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Icon type="ios-cart-outline" />
                </div>
                <div
                  v-if="commodity.buyStyle === '1'"
                  class="buy"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Icon type="ios-add" />
                </div>
                <div
                  v-if="commodity.buyStyle === '2'"
                  class="buy2"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Button type="error" shape="circle">{{ commodity.buyName }}</Button>
                </div>
                <div
                  v-if="commodity.buyStyle === '3'"
                  class="buy3"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  {{ commodity.buyName }}
                </div>
                <div
                  v-if="commodity.buyStyle === '4'"
                  class="buy4"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Icon type="ios-add-circle" />
                </div>
                <div
                  v-if="commodity.buyStyle === '5'"
                  class="buy4"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Icon type="ios-cart-outline" />
                </div>
                <div
                  v-if="commodity.buyStyle === '6'"
                  class="buy2"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Button type="error">{{ commodity.buyName }}</Button>
                </div>
                <div
                  v-if="commodity.buyStyle === '7'"
                  class="buy7"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  {{ commodity.buyName }}
                </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <ul
      v-show="commodity.listStyle === '2'"
      class="commodity-list-style2"
      :style="{
        paddingLeft: commodity.pageMargin + 'px',
        paddingRight: commodity.pageMargin + 'px',
        }">
      <li
        class="commodity-item"
        v-for="(item, index) in commodity.commodity"
        :key="index"
        :style="{
          padding: commodity.commodityMargin + 'px',
          }">
        <div :class="commodityStyleObject">
          <div
            :class="commodityBorder"
            class="commodity-image"
            :style="{
              backgroundImage: 'url(' + item.imgSrc + ')'
            }">
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '0'"
              class="badge-new">新品</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '1'"
              class="badge-hot">热卖</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '2'"
              class="badge-new-en">NEW</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '3'"
              class="badge-hot-en">HOT</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '4'"
              class="badge-hot-customer">
              <img :src="commodity.badgeUrl" />
            </div>
          </div>
          <div
            class="commodity-info">
            <p
              class="title zan-ellipsis--l2"
              v-if="commodity.showContent.indexOf('0') !== -1">这里显示商品名称,最多显示2行,最多显示2,最多显示2,最多显示2</p>
            <p
              class="desc zan-ellipsis"
              v-show="commodity.showContent.indexOf('1') !== -1">这里显示商品描述,最多显示1行</p>
            <div
              class="config"
              :class="justifyCenter">
              <div
                class="price"
                v-if="listyStyle2Show">
                ¥<span class="price-number">99</span>
              </div>
              <div
                class="price"
                v-else>
                <span class="price-number">...</span>
              </div>
                <div
                  v-if="commodity.buyStyle === '0'"
                  class="buy"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Icon type="ios-cart-outline" />
                </div>
                <div
                  v-if="commodity.buyStyle === '1'"
                  class="buy"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Icon type="ios-add" />
                </div>
                <div
                  v-if="commodity.buyStyle === '2'"
                  class="buy2"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Button type="error" shape="circle">{{ commodity.buyName }}</Button>
                </div>
                <div
                  v-if="commodity.buyStyle === '3'"
                  class="buy3"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  {{ commodity.buyName }}
                </div>
                <div
                  v-if="commodity.buyStyle === '4'"
                  class="buy4"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Icon type="ios-add-circle" />
                </div>
                <div
                  v-if="commodity.buyStyle === '5'"
                  class="buy4"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Icon type="ios-cart-outline" />
                </div>
                <div
                  v-if="commodity.buyStyle === '6'"
                  class="buy2"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Button type="error">{{ commodity.buyName }}</Button>
                </div>
                <div
                  v-if="commodity.buyStyle === '7'"
                  class="buy7"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  {{ commodity.buyName }}
                </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <ul
      v-show="commodity.listStyle === '3'"
      class="commodity-list-style3">
      <li
        class="commodity-item"
        v-for="(item, index) in commodity.commodity"
        :key="index"
        :style="{
          paddingTop: commodity.commodityMargin + 'px',
          paddingBottom: commodity.commodityMargin + 'px',
          paddingLeft: commodity.pageMargin + 'px',
          paddingRight: commodity.pageMargin + 'px',
          }">
        <div
          class="commodity-item-content"
          :class="commodityStyleObject">
          <div
            class="commodity-image"
            :class="commodityBorderLeft"
            :style="{
              backgroundImage: 'url(' + item.imgSrc + ')'
            }">
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '0'"
              class="badge-new">新品</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '1'"
              class="badge-hot">热卖</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '2'"
              class="badge-new-en">NEW</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '3'"
              class="badge-hot-en">HOT</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '4'"
              class="badge-hot-customer">
              <img :src="commodity.badgeUrl" />
            </div>
          </div>
          <div class="commodity-info">
            <p
              class="title zan-ellipsis--l2"
              v-if="commodity.showContent.indexOf('0') !== -1">这里显示商品名称,最多显示2行,最多显示2,最多显示2,最多显示2dds</p>
            <p
              class="desc zan-ellipsis"
              v-show="commodity.showContent.indexOf('1') !== -1">这里显示商品描述,最多显示1行</p>
            <div
              class="config"
              :class="flexEnd">
              <div
                class="price"
                v-show="commodity.showContent.indexOf('2') !== -1">¥<span class="price-number">99</span></div>
                <div
                  v-if="commodity.buyStyle === '0'"
                  class="buy"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Icon type="ios-cart-outline" />
                </div>
                <div
                  v-if="commodity.buyStyle === '1'"
                  class="buy"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Icon type="ios-add" />
                </div>
                <div
                  v-if="commodity.buyStyle === '2'"
                  class="buy2"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Button type="error" shape="circle">{{ commodity.buyName }}</Button>
                </div>
                <div
                  v-if="commodity.buyStyle === '3'"
                  class="buy3"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  {{ commodity.buyName }}
                </div>
                <div
                  v-if="commodity.buyStyle === '4'"
                  class="buy4"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Icon type="ios-add-circle" />
                </div>
                <div
                  v-if="commodity.buyStyle === '5'"
                  class="buy4"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Icon type="ios-cart-outline" />
                </div>
                <div
                  v-if="commodity.buyStyle === '6'"
                  class="buy2"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Button type="error">{{ commodity.buyName }}</Button>
                </div>
                <div
                  v-if="commodity.buyStyle === '7'"
                  class="buy7"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  {{ commodity.buyName }}
                </div>
            </div>
          </div>
        </div>

      </li>
    </ul>
    <ul
      v-show="commodity.listStyle === '4'"
      class="commodity-list-style4"
      :style="{
        paddingLeft: commodity.pageMargin + 'px',
        paddingRight: commodity.pageMargin + 'px',
      }">
      <li
        class="commodity-item"
        v-for="(item, index) in commodity.commodity"
        :key="index"
        :style="{
          padding: commodity.commodityMargin + 'px',
          }">
        <div :class="commodityStyleObject">
          <div
            :class="commodityBorder"
            class="commodity-image"
            :style="{
              backgroundImage: 'url(' + item.imgSrc + ')'
            }">
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '0'"
              class="badge-new">新品</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '1'"
              class="badge-hot">热卖</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '2'"
              class="badge-new-en">NEW</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '3'"
              class="badge-hot-en">HOT</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '4'"
              class="badge-hot-customer">
              <img :src="commodity.badgeUrl" />
            </div>
          </div>
          <div class="commodity-info">
            <p
              class="title zan-ellipsis--l1"
              v-if="commodity.showContent.indexOf('0') !== -1">这里显示商品名称,最多显示2行,最多显示2,最多显示2,最多显示2</p>
            <p
              class="desc zan-ellipsis"
              v-show="commodity.showContent.indexOf('1') !== -1">这里显示商品描述,最多显示1行</p>
            <div
              class="config"
              :class="flexEnd">
              <div
                class="price"
                v-show="commodity.showContent.indexOf('2') !== -1">¥<span class="price-number">99</span></div>
                <div
                  v-if="commodity.buyStyle === '0'"
                  class="buy"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Icon type="ios-cart-outline" />
                </div>
                <div
                  v-if="commodity.buyStyle === '1'"
                  class="buy"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Icon type="ios-add" />
                </div>
                <div
                  v-if="commodity.buyStyle === '2'"
                  class="buy2"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Button type="error" shape="circle">{{ commodity.buyName }}</Button>
                </div>
                <div
                  v-if="commodity.buyStyle === '3'"
                  class="buy3"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  {{ commodity.buyName }}
                </div>
                <div
                  v-if="commodity.buyStyle === '4'"
                  class="buy4"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Icon type="ios-add-circle" />
                </div>
                <div
                  v-if="commodity.buyStyle === '5'"
                  class="buy4"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Icon type="ios-cart-outline" />
                </div>
                <div
                  v-if="commodity.buyStyle === '6'"
                  class="buy2"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Button type="error">{{ commodity.buyName }}</Button>
                </div>
                <div
                  v-if="commodity.buyStyle === '7'"
                  class="buy7"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  {{ commodity.buyName }}
                </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <ul
      v-show="commodity.listStyle === '5'"
      class="commodity-list-style5"
      :style="{
        paddingLeft: commodity.pageMargin + 'px',
        paddingRight: commodity.pageMargin + 'px',
      }">
      <li
        class="commodity-item"
        v-for="(item, index) in commodity.commodity"
        :key="index"
        :style="{
          padding: commodity.commodityMargin + 'px',
          }">
        <div :class="commodityStyleObject">
          <div
            :class="commodityBorder"
            class="commodity-image"
            :style="{
              backgroundImage: 'url(' + item.imgSrc + ')'
            }">
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '0'"
              class="badge-new">新品</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '1'"
              class="badge-hot">热卖</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '2'"
              class="badge-new-en">NEW</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '3'"
              class="badge-hot-en">HOT</div>
            <div
              v-show="commodity.showContent.indexOf('4') !== -1 && commodity.badge === '4'"
              class="badge-hot-customer">
              <img :src="commodity.badgeUrl" />
            </div>
          </div>
          <div class="commodity-info">
            <p
              class="title zan-ellipsis--l2"
              v-if="commodity.showContent.indexOf('0') !== -1">这里显示商品名称,最多显示2行,最多显示2,最多显示2,最多显示2</p>
            <p
              class="desc zan-ellipsis"
              v-show="commodity.showContent.indexOf('1') !== -1">这里显示商品描述,最多显示1行</p>
            <div
              class="config"
              :class="justifyCenter">
              <div
                class="price"
                v-if="listyStyle5Show">
                ¥<span class="price-number">99</span>
              </div>
              <div
                class="price"
                v-else>
                <span class="price-number">...</span>
              </div>
                <div
                  v-if="commodity.buyStyle === '0'"
                  class="buy"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Icon type="ios-cart-outline" />
                </div>
                <div
                  v-if="commodity.buyStyle === '1'"
                  class="buy"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Icon type="ios-add" />
                </div>
                <div
                  v-if="commodity.buyStyle === '2'"
                  class="buy2"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Button type="error" shape="circle">{{ commodity.buyName }}</Button>
                </div>
                <div
                  v-if="commodity.buyStyle === '3'"
                  class="buy3"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  {{ commodity.buyName }}
                </div>
                <div
                  v-if="commodity.buyStyle === '4'"
                  class="buy4"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Icon type="ios-add-circle" />
                </div>
                <div
                  v-if="commodity.buyStyle === '5'"
                  class="buy4"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Icon type="ios-cart-outline" />
                </div>
                <div
                  v-if="commodity.buyStyle === '6'"
                  class="buy2"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  <Button type="error">{{ commodity.buyName }}</Button>
                </div>
                <div
                  v-if="commodity.buyStyle === '7'"
                  class="buy7"
                  v-show="commodity.showContent.indexOf('3') !== -1">
                  {{ commodity.buyName }}
                </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import '../../style/commodity.scss'

export default {
  props: {
    commodity: Object,
    isActive: Boolean,
  },

  components: {
  },

  computed: {
    listyStyle2Show() {
      if (this.commodity.showContent.indexOf('2') !== -1) {
        if (this.commodity.pageMargin <= 22  || this.commodity.commodityMargin <= 11) {
          return true
        } else return false
      } else return false;
    },

    listyStyle5Show() {
      if (this.commodity.showContent.indexOf('2') !== -1) {
        if (this.commodity.commodityMargin <= 7) {
          return true
        } else return false
      } else return false;
    },

    commodityStyleObject() {
      return {
        'commodity-shadow': this.commodity.commodityStyle === '1',
        'commodity-border': this.commodity.commodityStyle === '2',
        'commodity-border-radius': this.commodity.commodityBorderRadius === '1',
        'commodity-font-bold': this.commodity.textStyle === '1',
        'commodity-text-center': this.commodity.textAlign === 'center',
      }
    },

    commodityBorder() {
      return {
        'commodity-border-radius-top': this.commodity.commodityBorderRadius === '1',
        'commodity-picture-cover': this.commodity.pictureFill === '0',
        'commodity-picture-contain': this.commodity.pictureFill === '1',
        'picture1-ratio0': this.commodity.listStyle === '1' && this.commodity.pictureRatio === '0',
        'picture1-ratio1': this.commodity.listStyle === '1' && this.commodity.pictureRatio === '1',
        'picture1-ratio2': this.commodity.listStyle === '1' && this.commodity.pictureRatio === '2',
        'picture1-ratio3': this.commodity.listStyle === '1' && this.commodity.pictureRatio === '3',
        'picture2-ratio0': this.commodity.listStyle === '2' && this.commodity.pictureRatio === '0',
        'picture2-ratio1': this.commodity.listStyle === '2' && this.commodity.pictureRatio === '1',
        'picture2-ratio2': this.commodity.listStyle === '2' && this.commodity.pictureRatio === '2',
        'picture2-ratio3': this.commodity.listStyle === '2' && this.commodity.pictureRatio === '3',
        'picture4-ratio0': this.commodity.listStyle === '4' && this.commodity.pictureRatio === '0',
        'picture4-ratio1': this.commodity.listStyle === '4' && this.commodity.pictureRatio === '1',
        'picture4-ratio2': this.commodity.listStyle === '4' && this.commodity.pictureRatio === '2',
        'picture4-ratio3': this.commodity.listStyle === '4' && this.commodity.pictureRatio === '3',
        'picture5-ratio0': this.commodity.listStyle === '5' && this.commodity.pictureRatio === '0',
        'picture5-ratio1': this.commodity.listStyle === '5' && this.commodity.pictureRatio === '1',
        'picture5-ratio2': this.commodity.listStyle === '5' && this.commodity.pictureRatio === '2',
        'picture5-ratio3': this.commodity.listStyle === '5' && this.commodity.pictureRatio === '3',
      }
    },

    commodityBorderLeft() {
      return {
        'commodity-border-radius-left': this.commodity.commodityBorderRadius === '1',
        'commodity-picture-cover': this.commodity.pictureFill === '0',
        'commodity-picture-contain': this.commodity.pictureFill === '1'
      }
    },

    pictureFill() {
      return {
        'commodity-picture-cover': this.commodity.pictureFill === '0',
        'commodity-picture-contain': this.commodity.pictureFill === '1',
        'picture-ratio0': this.commodity.pictureRatio === '0',
        'picture-ratio1': this.commodity.pictureRatio === '1',
        'picture-ratio2': this.commodity.pictureRatio === '2',
        'picture-ratio3': this.commodity.pictureRatio === '3',
      }
    },

    justifyCenter() {
      return {
        'commodity-justify-center': this.commodity.textAlign === 'center',
        'commodity-justify-between': this.commodity.textAlign === 'left',
        'flex-end': this.commodity.showContent.indexOf('2') === -1
      }
    },

    flexEnd() {
      return {
        'flex-end': this.commodity.showContent.indexOf('2') === -1
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
