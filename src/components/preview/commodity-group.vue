<template>
  <div
    class="commodity commodity-group"
    :class="{ active: isActive }">
    <div v-show="commodityGroup.template === '0'">
      <ul
        class="commodity-group-menu"
        v-show="commodityGroup.group.length === 0">
        <li
          class="menu-item"
          :class="menuItem"
          v-if="commodityGroup.showAll === '1'">全部</li>
        <li class="menu-item">商品组一</li>
        <li class="menu-item">商品组二</li>
        <li class="menu-item">商品组三</li>
        <li class="menu-item">商品组四</li>
        <li class="menu-item">商品组四</li>
      </ul>
      <ul
        :class="commodityGroupMenu"
        v-show="commodityGroup.group.length !== 0">
        <li
          class="menu-item"
          v-if="commodityGroup.showAll === '1'">全部</li>
        <li
          class="menu-item"
          v-for="(item, index) in commodityGroup.group"
          :key="index">{{ item.name }}</li>
      </ul>
      <ul
        v-show="commodityGroup.listStyle === '0'"
        class="commodity-list-style0"
        :style="{
          paddingLeft: commodityGroup.pageMargin + 'px',
          paddingRight: commodityGroup.pageMargin + 'px',
          }">
        <li
          class="commodity-item"
          :class="commodityStyleObject"
          v-for="(item, index) in [1, 2, 3]"
          :key="index"
          :style="{
            margin: commodityGroup.commodityMargin + 'px',
            }">
            <div
              class="commodity-image"
              :class="pictureFill">
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '0'"
                class="badge-new">新品</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '1'"
                class="badge-hot">热卖</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '2'"
                class="badge-new-en">NEW</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '3'"
                class="badge-hot-en">HOT</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '4'"
                class="badge-hot-customer">
                <img :src="commodityGroup.badgeUrl" />
              </div>
            </div>
            <div class="commodity-info">
              <p
                class="title zan-ellipsis"
                v-if="commodityGroup.showContent.indexOf('0') !== -1">这里显示商品名称,最多显示1行</p>
              <p
                class="desc zan-ellipsis"
                v-show="commodityGroup.showContent.indexOf('1') !== -1">这里显示商品描述,最多显示1行</p>
              <div
                class="config"
                :class="flexEnd">
                <div
                  class="price"
                  v-show="commodityGroup.showContent.indexOf('2') !== -1">
                  ¥<span class="price-number">99</span>
                </div>
                <div
                  v-if="commodityGroup.buyStyle === '0'"
                  class="buy"
                  v-show="commodityGroup.showContent.indexOf('3') !== -1">
                  <Icon type="ios-cart-outline" />
                </div>
                <div
                  v-if="commodityGroup.buyStyle === '1'"
                  class="buy"
                  v-show="commodityGroup.showContent.indexOf('3') !== -1">
                  <Icon type="ios-add" />
                </div>
                <div
                  v-if="commodityGroup.buyStyle === '2'"
                  class="buy2"
                  v-show="commodityGroup.showContent.indexOf('3') !== -1">
                  <Button type="error" shape="circle">{{ commodityGroup.buyName }}</Button>
                </div>
                <div
                  v-if="commodityGroup.buyStyle === '3'"
                  class="buy3"
                  v-show="commodityGroup.showContent.indexOf('3') !== -1">
                  {{ commodityGroup.buyName }}
                </div>
                <div
                  v-if="commodityGroup.buyStyle === '4'"
                  class="buy4"
                  v-show="commodityGroup.showContent.indexOf('3') !== -1">
                  <Icon type="ios-add-circle" />
                </div>
                <div
                  v-if="commodityGroup.buyStyle === '5'"
                  class="buy4"
                  v-show="commodityGroup.showContent.indexOf('3') !== -1">
                  <Icon type="ios-cart-outline" />
                </div>
                <div
                  v-if="commodityGroup.buyStyle === '6'"
                  class="buy2"
                  v-show="commodityGroup.showContent.indexOf('3') !== -1">
                  <Button type="error">{{ commodityGroup.buyName }}</Button>
                </div>
                <div
                  v-if="commodityGroup.buyStyle === '7'"
                  class="buy7"
                  v-show="commodityGroup.showContent.indexOf('3') !== -1">
                  {{ commodityGroup.buyName }}
                </div>
              </div>
            </div>
        </li>
      </ul>
      <ul
        v-show="commodityGroup.listStyle === '1'"
        class="commodity-list-style1"
        :style="{
          paddingLeft: commodityGroup.pageMargin + 'px',
          paddingRight: commodityGroup.pageMargin + 'px',
          }">
        <li
          class="commodity-item"
          v-for="(item, index) in [1, 2, 3]"
          :key="index"
          :style="{
            padding: commodityGroup.commodityMargin + 'px',
            }">
          <div
            :class="commodityStyleObject">
            <div
              :class="commodityBorder"
              class="commodity-image">
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '0'"
                class="badge-new">新品</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '1'"
                class="badge-hot">热卖</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '2'"
                class="badge-new-en">NEW</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '3'"
                class="badge-hot-en">HOT</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '4'"
                class="badge-hot-customer">
                <img :src="commodityGroup.badgeUrl" />
              </div>
            </div>
            <div
              class="commodity-info">
              <p
                class="title zan-ellipsis--l2"
                v-if="commodityGroup.showContent.indexOf('0') !== -1">这里显示商品名称,最多显示2行,最多显示2,最多显示2,最多显示2</p>
              <p
                class="desc zan-ellipsis"
                v-show="commodityGroup.showContent.indexOf('1') !== -1">这里显示商品描述,最多显示1行</p>
              <div
                class="config"
                :class="flexEnd">
                <div
                  class="price"
                  v-show="commodityGroup.showContent.indexOf('2') !== -1">¥<span class="price-number">99</span></div>
                  <div
                    v-if="commodityGroup.buyStyle === '0'"
                    class="buy"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Icon type="ios-cart-outline" />
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '1'"
                    class="buy"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Icon type="ios-add" />
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '2'"
                    class="buy2"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Button type="error" shape="circle">{{ commodityGroup.buyName }}</Button>
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '3'"
                    class="buy3"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    {{ commodityGroup.buyName }}
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '4'"
                    class="buy4"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Icon type="ios-add-circle" />
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '5'"
                    class="buy4"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Icon type="ios-cart-outline" />
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '6'"
                    class="buy2"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Button type="error">{{ commodityGroup.buyName }}</Button>
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '7'"
                    class="buy7"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    {{ commodityGroup.buyName }}
                  </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul
        v-show="commodityGroup.listStyle === '2'"
        class="commodity-list-style2"
        :style="{
          paddingLeft: commodityGroup.pageMargin + 'px',
          paddingRight: commodityGroup.pageMargin + 'px',
          }">
        <li
          class="commodity-item"
          v-for="(item, index) in [1, 2, 3]"
          :key="index"
          :style="{
            padding: commodityGroup.commodityMargin + 'px',
            }">
          <div :class="commodityStyleObject">
            <div
              :class="commodityBorder"
              class="commodity-image">
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '0'"
                class="badge-new">新品</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '1'"
                class="badge-hot">热卖</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '2'"
                class="badge-new-en">NEW</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '3'"
                class="badge-hot-en">HOT</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '4'"
                class="badge-hot-customer">
                <img :src="commodityGroup.badgeUrl" />
              </div>
            </div>
            <div
              class="commodity-info">
              <p
                class="title zan-ellipsis--l2"
                v-if="commodityGroup.showContent.indexOf('0') !== -1">这里显示商品名称,最多显示2行,最多显示2,最多显示2,最多显示2</p>
              <p
                class="desc zan-ellipsis"
                v-show="commodityGroup.showContent.indexOf('1') !== -1">这里显示商品描述,最多显示1行</p>
              <div
                class="config"
                :class="justifyCenter">
                <div
                  class="price"
                  v-if="listyStyle2Show">¥<span class="price-number">99</span>
                </div>
                <div
                  class="price"
                  v-else><span class="price-number">...</span>
                </div>
                  <div
                    v-if="commodityGroup.buyStyle === '0'"
                    class="buy"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Icon type="ios-cart-outline" />
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '1'"
                    class="buy"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Icon type="ios-add" />
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '2'"
                    class="buy2"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Button type="error" shape="circle">{{ commodityGroup.buyName }}</Button>
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '3'"
                    class="buy3"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    {{ commodityGroup.buyName }}
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '4'"
                    class="buy4"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Icon type="ios-add-circle" />
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '5'"
                    class="buy4"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Icon type="ios-cart-outline" />
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '6'"
                    class="buy2"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Button type="error">{{ commodityGroup.buyName }}</Button>
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '7'"
                    class="buy7"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    {{ commodityGroup.buyName }}
                  </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul
        v-show="commodityGroup.listStyle === '3'"
        class="commodity-list-style3">
        <li
          class="commodity-item"
          v-for="(item, index) in [1, 2, 3]"
          :key="index"
          :style="{
            paddingTop: commodityGroup.commodityMargin + 'px',
            paddingBottom: commodityGroup.commodityMargin + 'px',
            paddingLeft: commodityGroup.pageMargin + 'px',
            paddingRight: commodityGroup.pageMargin + 'px',
            }">
          <div
            class="commodity-item-content"
            :class="commodityStyleObject">
            <div
              class="commodity-image"
              :class="commodityBorderLeft">
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '0'"
                class="badge-new">新品</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '1'"
                class="badge-hot">热卖</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '2'"
                class="badge-new-en">NEW</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '3'"
                class="badge-hot-en">HOT</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '4'"
                class="badge-hot-customer">
                <img :src="commodityGroup.badgeUrl" />
              </div>
            </div>
            <div class="commodity-info">
              <p
                class="title zan-ellipsis--l2"
                v-if="commodityGroup.showContent.indexOf('0') !== -1">这里显示商品名称,最多显示2行,最多显示2,最多显示2,最多显示2dds</p>
              <p
                class="desc zan-ellipsis"
                v-show="commodityGroup.showContent.indexOf('1') !== -1">这里显示商品描述,最多显示1行</p>
              <div
                class="config"
                :class="flexEnd">
                <div
                  class="price"
                  v-show="commodityGroup.showContent.indexOf('2') !== -1">¥<span class="price-number">99</span></div>
                  <div
                    v-if="commodityGroup.buyStyle === '0'"
                    class="buy"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Icon type="ios-cart-outline" />
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '1'"
                    class="buy"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Icon type="ios-add" />
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '2'"
                    class="buy2"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Button type="error" shape="circle">{{ commodityGroup.buyName }}</Button>
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '3'"
                    class="buy3"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    {{ commodityGroup.buyName }}
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '4'"
                    class="buy4"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Icon type="ios-add-circle" />
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '5'"
                    class="buy4"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Icon type="ios-cart-outline" />
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '6'"
                    class="buy2"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Button type="error">{{ commodityGroup.buyName }}</Button>
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '7'"
                    class="buy7"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    {{ commodityGroup.buyName }}
                  </div>
              </div>
            </div>
          </div>

        </li>
      </ul>
      <ul
        v-show="commodityGroup.listStyle === '4'"
        class="commodity-list-style4"
        :style="{
          paddingLeft: commodityGroup.pageMargin + 'px',
          paddingRight: commodityGroup.pageMargin + 'px',
        }">
        <li
          class="commodity-item"
          v-for="(item, index) in [1, 2, 3]"
          :key="index"
          :style="{
            padding: commodityGroup.commodityMargin + 'px',
            }">
          <div :class="commodityStyleObject">
            <div
              :class="commodityBorder"
              class="commodity-image">
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '0'"
                class="badge-new">新品</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '1'"
                class="badge-hot">热卖</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '2'"
                class="badge-new-en">NEW</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '3'"
                class="badge-hot-en">HOT</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '4'"
                class="badge-hot-customer">
                <img :src="commodityGroup.badgeUrl" />
              </div>
            </div>
            <div class="commodity-info">
              <p
                class="title zan-ellipsis--l1"
                v-if="commodityGroup.showContent.indexOf('0') !== -1">这里显示商品名称,最多显示2行,最多显示2,最多显示2,最多显示2</p>
              <p
                class="desc zan-ellipsis"
                v-show="commodityGroup.showContent.indexOf('1') !== -1">这里显示商品描述,最多显示1行</p>
              <div
                class="config"
                :class="flexEnd">
                <div
                  class="price"
                  v-show="commodityGroup.showContent.indexOf('2') !== -1">¥<span class="price-number">99</span></div>
                  <div
                    v-if="commodityGroup.buyStyle === '0'"
                    class="buy"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Icon type="ios-cart-outline" />
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '1'"
                    class="buy"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Icon type="ios-add" />
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '2'"
                    class="buy2"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Button type="error" shape="circle">{{ commodityGroup.buyName }}</Button>
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '3'"
                    class="buy3"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    {{ commodityGroup.buyName }}
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '4'"
                    class="buy4"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Icon type="ios-add-circle" />
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '5'"
                    class="buy4"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Icon type="ios-cart-outline" />
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '6'"
                    class="buy2"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Button type="error">{{ commodityGroup.buyName }}</Button>
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '7'"
                    class="buy7"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    {{ commodityGroup.buyName }}
                  </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul
        v-show="commodityGroup.listStyle === '5'"
        class="commodity-list-style5"
        :style="{
          paddingLeft: commodityGroup.pageMargin + 'px',
          paddingRight: commodityGroup.pageMargin + 'px',
        }">
        <li
          class="commodity-item"
          v-for="(item, index) in [1, 2, 3]"
          :key="index"
          :style="{
            padding: commodityGroup.commodityMargin + 'px',
            }">
          <div :class="commodityStyleObject">
            <div
              :class="commodityBorder"
              class="commodity-image">
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '0'"
                class="badge-new">新品</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '1'"
                class="badge-hot">热卖</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '2'"
                class="badge-new-en">NEW</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '3'"
                class="badge-hot-en">HOT</div>
              <div
                v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '4'"
                class="badge-hot-customer">
                <img :src="commodityGroup.badgeUrl" />
              </div>
            </div>
            <div class="commodity-info">
              <p
                class="title zan-ellipsis--l2"
                v-if="commodityGroup.showContent.indexOf('0') !== -1">这里显示商品名称,最多显示2行,最多显示2,最多显示2,最多显示2</p>
              <p
                class="desc zan-ellipsis"
                v-show="commodityGroup.showContent.indexOf('1') !== -1">这里显示商品描述,最多显示1行</p>
              <div
                class="config"
                :class="justifyCenter">
                <div
                  class="price"
                  v-if="listyStyle5Show">¥<span class="price-number">99</span>
                </div>
                <div
                  class="price"
                  v-else><span class="price-number">...</span>
                </div>
                  <div
                    v-if="commodityGroup.buyStyle === '0'"
                    class="buy"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Icon type="ios-cart-outline" />
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '1'"
                    class="buy"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Icon type="ios-add" />
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '2'"
                    class="buy2"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Button type="error" shape="circle">{{ commodityGroup.buyName }}</Button>
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '3'"
                    class="buy3"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    {{ commodityGroup.buyName }}
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '4'"
                    class="buy4"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Icon type="ios-add-circle" />
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '5'"
                    class="buy4"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Icon type="ios-cart-outline" />
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '6'"
                    class="buy2"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    <Button type="error">{{ commodityGroup.buyName }}</Button>
                  </div>
                  <div
                    v-if="commodityGroup.buyStyle === '7'"
                    class="buy7"
                    v-show="commodityGroup.showContent.indexOf('3') !== -1">
                    {{ commodityGroup.buyName }}
                  </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div
      class="detail-group"
      v-show="commodityGroup.template === '1'">
      <ul
        class="commodity-group-left-menu"
        v-show="commodityGroup.group.length === 0">
        <li class="menu-item">商品组一</li>
        <li class="menu-item">商品组二</li>
        <li class="menu-item">商品组三</li>
        <li class="menu-item">商品组四</li>
      </ul>
      <ul
       class="commodity-group-left-menu"
       v-show="commodityGroup.group.length !== 0">
        <li
          class="menu-item"
          v-for="(item, index) in commodityGroup.group"
          :key="index">{{ item.name }}</li>
      </ul>
      <div>
        <div
          class="group-content"
          v-for="(item, index) in [0, 1]"
          :key="index">
          <ul
            class="commodity-list-style-details"
            :style="{
              paddingLeft: commodityGroup.pageMargin + 'px',
              paddingRight: commodityGroup.pageMargin + 'px',
              }">
            <div
              class="group-name">商品组一</div>
            <li
              class="commodity-item"
              v-for="(item, index) in [1, 2, 3]"
              :key="index"
              :style="{
                paddingTop: commodityGroup.commodityMargin + 'px',
                paddingBottom: commodityGroup.commodityMargin + 'px',
                }">
              <div
                class="detail-item"
                :class="commodityStyleObject">
                <div
                  :class="commodityBorder"
                  class="commodity-image">
                  <div
                    v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '0'"
                    class="badge-new">新品</div>
                  <div
                    v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '1'"
                    class="badge-hot">热卖</div>
                  <div
                    v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '2'"
                    class="badge-new-en">NEW</div>
                  <div
                    v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '3'"
                    class="badge-hot-en">HOT</div>
                  <div
                    v-show="commodityGroup.showContent.indexOf('4') !== -1 && commodityGroup.badge === '4'"
                    class="badge-hot-customer">
                    <img :src="commodityGroup.badgeUrl" />
                  </div>
                </div>
                <div
                  class="commodity-info">
                  <p
                    class="title zan-ellipsis--l2"
                    v-if="commodityGroup.showContent.indexOf('0') !== -1">这里显示商品名称,最多显示2行,最多显示2,最多显示2,最多显示2</p>
                  <p
                    class="desc zan-ellipsis"
                    v-show="commodityGroup.showContent.indexOf('1') !== -1">这里显示商品描述,最多显示1行</p>
                  <div
                    class="config"
                    :class="flexEnd">
                    <div
                      class="price"
                      v-show="commodityGroup.showContent.indexOf('2') !== -1">¥<span class="price-number">99</span></div>
                      <div
                        v-if="commodityGroup.buyStyle === '0'"
                        class="buy"
                        v-show="commodityGroup.showContent.indexOf('3') !== -1">
                        <Icon type="ios-cart-outline" />
                      </div>
                      <div
                        v-if="commodityGroup.buyStyle === '1'"
                        class="buy"
                        v-show="commodityGroup.showContent.indexOf('3') !== -1">
                        <Icon type="ios-add" />
                      </div>
                      <div
                        v-if="commodityGroup.buyStyle === '2'"
                        class="buy2"
                        v-show="commodityGroup.showContent.indexOf('3') !== -1">
                        <Button type="error" shape="circle">{{ commodityGroup.buyName }}</Button>
                      </div>
                      <div
                        v-if="commodityGroup.buyStyle === '3'"
                        class="buy3"
                        v-show="commodityGroup.showContent.indexOf('3') !== -1">
                        {{ commodityGroup.buyName }}
                      </div>
                      <div
                        v-if="commodityGroup.buyStyle === '4'"
                        class="buy4"
                        v-show="commodityGroup.showContent.indexOf('3') !== -1">
                        <Icon type="ios-add-circle" />
                      </div>
                      <div
                        v-if="commodityGroup.buyStyle === '5'"
                        class="buy4"
                        v-show="commodityGroup.showContent.indexOf('3') !== -1">
                        <Icon type="ios-cart-outline" />
                      </div>
                      <div
                        v-if="commodityGroup.buyStyle === '6'"
                        class="buy2"
                        v-show="commodityGroup.showContent.indexOf('3') !== -1">
                        <Button type="error">{{ commodityGroup.buyName }}</Button>
                      </div>
                      <div
                        v-if="commodityGroup.buyStyle === '7'"
                        class="buy7"
                        v-show="commodityGroup.showContent.indexOf('3') !== -1">
                        {{ commodityGroup.buyName }}
                      </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../style/commodity.scss'

export default {
  props: {
    commodityGroup: Object,
    isActive: Boolean,
  },

  components: {
  },

  computed: {
    menuItem() {
      return {
        'style0': this.commodityGroup.menuStyle === '0',
        'style1': this.commodityGroup.menuStyle === '1',
        'style2': this.commodityGroup.menuStyle === '2',
      }
    },

    listyStyle2Show() {
      if (this.commodityGroup.showContent.indexOf('2') !== -1) {
        if (this.commodityGroup.pageMargin <= 22  || this.commodityGroup.commodityMargin <= 11) {
          return true
        } else return false
      } else return false;
    },

    listyStyle5Show() {
      if (this.commodityGroup.showContent.indexOf('2') !== -1) {
        if (this.commodityGroup.commodityMargin <= 7) {
          return true
        } else return false
      } else return false;
    },

    commodityGroupMenu() {
      return {
        'commodity-group-menu': this.commodityGroup.group.length >= 4,
        'commodity-group-menu-flex': this.commodityGroup.group.length < 4,
      }
    },

    commodityStyleObject() {
      return {
        'commodity-shadow': this.commodityGroup.commodityStyle === '1',
        'commodity-border': this.commodityGroup.commodityStyle === '2',
        'commodity-border-radius': this.commodityGroup.commodityBorderRadius === '1',
        'commodity-font-bold': this.commodityGroup.textStyle === '1',
        'commodity-text-center': this.commodityGroup.textAlign === 'center',
      }
    },

    commodityBorder() {
      return {
        'commodity-border-radius-top': this.commodityGroup.commodityBorderRadius === '1',
        'picture1-ratio0': this.commodityGroup.listStyle === '1' && this.commodityGroup.pictureRatio === '0',
        'picture1-ratio1': this.commodityGroup.listStyle === '1' && this.commodityGroup.pictureRatio === '1',
        'picture1-ratio2': this.commodityGroup.listStyle === '1' && this.commodityGroup.pictureRatio === '2',
        'picture1-ratio3': this.commodityGroup.listStyle === '1' && this.commodityGroup.pictureRatio === '3',
        'picture2-ratio0': this.commodityGroup.listStyle === '2' && this.commodityGroup.pictureRatio === '0',
        'picture2-ratio1': this.commodityGroup.listStyle === '2' && this.commodityGroup.pictureRatio === '1',
        'picture2-ratio2': this.commodityGroup.listStyle === '2' && this.commodityGroup.pictureRatio === '2',
        'picture2-ratio3': this.commodityGroup.listStyle === '2' && this.commodityGroup.pictureRatio === '3',
        'picture4-ratio0': this.commodityGroup.listStyle === '4' && this.commodityGroup.pictureRatio === '0',
        'picture4-ratio1': this.commodityGroup.listStyle === '4' && this.commodityGroup.pictureRatio === '1',
        'picture4-ratio2': this.commodityGroup.listStyle === '4' && this.commodityGroup.pictureRatio === '2',
        'picture4-ratio3': this.commodityGroup.listStyle === '4' && this.commodityGroup.pictureRatio === '3',
        'picture5-ratio0': this.commodityGroup.listStyle === '5' && this.commodityGroup.pictureRatio === '0',
        'picture5-ratio1': this.commodityGroup.listStyle === '5' && this.commodityGroup.pictureRatio === '1',
        'picture5-ratio2': this.commodityGroup.listStyle === '5' && this.commodityGroup.pictureRatio === '2',
        'picture5-ratio3': this.commodityGroup.listStyle === '5' && this.commodityGroup.pictureRatio === '3',
      }
    },

    commodityBorderLeft() {
      return {
        'commodity-border-radius-left': this.commodityGroup.commodityBorderRadius === '1',
      }
    },

    pictureFill() {
      return {
        'picture-ratio0': this.commodityGroup.pictureRatio === '0',
        'picture-ratio1': this.commodityGroup.pictureRatio === '1',
        'picture-ratio2': this.commodityGroup.pictureRatio === '2',
        'picture-ratio3': this.commodityGroup.pictureRatio === '3',
      }
    },

    justifyCenter() {
      return {
        'commodity-justify-center': this.commodityGroup.textAlign === 'center',
        'commodity-justify-between': this.commodityGroup.textAlign === 'left',
        'flex-end': this.commodityGroup.showContent.indexOf('2') === -1
      }
    },

    flexEnd() {
      return {
        'flex-end': this.commodityGroup.showContent.indexOf('2') === -1
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
