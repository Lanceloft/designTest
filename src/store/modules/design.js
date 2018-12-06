import {
  SET_EDITOR_CHANGE,
  SET_RICH_TEXT_COMPONENT,
  SET_RICH_TEXT_COMPONENT_CHANGE,
  TO_SET_RICH_TEXT_VALUE,
  TO_DELETE_COMPONENT,
  TO_SET_STORE_MSG_STYLE,
  TO_SET_ENTER_STORE_TITLE,
  TO_ADD_HOT_WORD,
  TO_DELETE_HOT_WORD,
  TO_SET_COMMODITY_SEARCH_BOX_STYLE,
  TO_SET_COMMODITY_SEARCH_BOX_HEIGHT,
  TO_SET_COMMODITY_SEARCH_BG_COLOR,
  TO_SET_COMMODITY_SEARCH_BOX_COLOR,
  TO_SET_COMMODITY_SEARCH_TEXT_COLOR,
  TO_SET_COMMODITY_SEARCH_TEXT_ALIGN,
  TO_BG_COLOR_RESET,
  TO_BOX_COLOR_RESET,
  TO_TEXT_COLOR_RESET,
  TO_SET_ANNOUNCEMENT_TEXT,
  TO_SET_ANNOUNCEMENT_BG_COLOR,
  TO_SET_ANNOUNCEMENT_TEXT_COLOR,
  TO_ANNOUNCEMENT_BG_COLOR_RESET,
  TO_ANNOUNCEMENT_TEXT_COLOR_RESET,
  TO_SET_VIDEO_TYPE,
  TO_BORDER_COLOR_RESET,
  TO_SET_AUXILIARY_LINE_BORDER_COLOR,
  TO_SET_AUXILIARY_LINE_BORDER_PADDING,
  TO_SET_AUXILIARY_LINE_BORDER_STYLE,
  TO_SET_AUXILIARY_BLANK_HEIGHT,
  TO_CLOSE_CUSTOMIZE_MODAL,
  TO_OPEN_CUSTOMIZE_MODAL,
  TO_CONFIRM_CUSTOMIZE,
  TO_CHANGE_IMGS_ADS_TEMPLATE,
  TO_SET_IMGS_ADS_FILL_WAY,
  TO_ADD_IMAGES_ADS_BACKGROUND_IMGS,
  TO_SET_IMGS_ADS_MARGIN,
  TO_OPEN_HOT_ZONE_MODAL,
  TO_CLOSE_HOT_ZONE_MODAL,
  TO_SET_IMAGES_TEXT_NAV_BG_COLOR,
  TO_SET_IMAGES_TEXT_NAV_SLIDER_SETTING,
  TO_SET_IMAGES_TEXT_NAV_BG_RESET,
  TO_SET_IMAGES_TEXT_NAV_TEXT_COLOR,
  TO_SET_IMAGES_TEXT_NAV_TEXT_RESET,
  TO_ADD_IMAGES_TEXT_NAV,
  TO_CHANGE_IMAGES_TEXT_NAV_TEMPLATE,
  TO_SET_IMAGES_TEXT_NAV_SCREEN_NUMBER,
  TO_SET_TEXT_TEXT_COLOR,
  TO_SET_TEXT_BG_COLOR,
  TO_SET_TEXT_TEXT_COLOR_RESET,
  TO_SET_TEXT_BG_COLOR_RESET,
  TO_SET_TEXT_FONT_SIZE,
  TO_SET_TEXT_TEXT,
  TO_SET_TEXT_TEXT_ALIGN,
  TO_SET_TEXT_SHOW_DIVIDING_LINE,
  TO_OPEN_DESIGN_MODAL,
  TO_CLOSE_DESIGN_MODAL,
  TO_CONFIRM_DESIGN,
  TO_ADD_NEW_ASSOCIATED,
  TO_SET_TITLE_TITLE,
  TO_SET_TITLE_TEMPLATE,
  TO_SET_TITLE_TEXT_ALIGN,
  TO_SET_TITLE_SUB_TITLE,
  TO_SET_TITLE_BG_COLOR,
  TO_SET_TITLE_BG_COLOR_RESET,
  TO_ADD_TITLE_TEXT_NAV,
  TO_DELETE_TITLE_TEXT_NAV,
  TO_SET_TITLE_NAV_NAME,
  TO_SET_TITLE_DATE,
  TO_SET_TITLE_AUTHOR,
  TO_SET_TITLE_LINK_SUB_TITLE,
  TO_SET_TITLE_LINK_URL_TYPE,
  TO_SET_COMMODITY_SOURCE,
  TO_OPEN_COMMODITY_MODAL,
  TO_CLOSE_COMMODITY_MODAL,
  TO_CONFIRM_COMMODITY_MODAL,
  TO_COMMODITY_DELETE_COMMODITY,
  TO_SET_COMMODITY_LIST_STYLE,
  TO_SET_COMMODITY_PAGE_MARIGIN,
  TO_SET_COMMODITY_COMMODITY_MARIGIN,
  TO_SET_COMMODITY_COMMODITY_STYLE,
  TO_SET_COMMODITY_COMMODITY_BORDER_RADIUS,
  TO_SET_COMMODITY_PICTURE_RATIO,
  TO_SET_COMMODITY_PICTURE_FILL,
  TO_SET_COMMODITY_TEXT_STYLE,
  TO_SET_COMMODITY_TEXT_ALIGN,
  TO_SET_COMMODITY_SHOW_CONTENT,
  TO_SET_COMMODITY_BUY_STYLE,
  TO_SET_COMMODITY_BUY_NAME,
  TO_SET_COMMODITY_BADGE,
  TO_ADD_BADGE_IMG,
  TO_SET_COMMODITY_GROUP_SHOW_ALL,
  TO_SET_COMMODITY_GROUP_TEMPLATE,
  TO_SET_COMMODITY_GROUP_MENU_STYLE,
  TO_SET_COMMODITY_GROUP_MENU_POSITION,
  TO_SET_COMMODITY_GROUP_LIST_STYLE,
  TO_SET_COMMODITY_GROUP_PAGE_MARIGIN,
  TO_SET_COMMODITY_GROUP_COMMODITY_MARIGIN,
  TO_SET_COMMODITY_GROUP_COMMODITY_STYLE,
  TO_SET_COMMODITY_GROUP_COMMODITY_BORDER_RADIUS,
  TO_SET_COMMODITY_GROUP_PICTURE_RATIO,
  TO_SET_COMMODITY_GROUP_PICTURE_FILL,
  TO_SET_COMMODITY_GROUP_TEXT_STYLE,
  TO_SET_COMMODITY_GROUP_TEXT_ALIGN,
  TO_SET_COMMODITY_GROUP_SHOW_CONTENT,
  TO_SET_COMMODITY_GROUP_BUY_STYLE,
  TO_SET_COMMODITY_GROUP_BUY_NAME,
  TO_SET_COMMODITY_GROUP_BADGE,
  TO_OPEN_COMMODITY_GROUP_MODAL,
  TO_CLOSE_COMMODITY_GROUP_MODAL,
  TO_COMMODITY_DELETE_COMMODITY_GROUP,
  TO_CONFIRM_COMMODITY_GROUP_MODAL,
  TO_SET_COUPON_ADD_WAY,
  TO_SET_COUPON_NUMBER_TYPE,
  TO_SET_COUPON_NUMBER,
  TO_SET_COUPON_HIDE_CANNOT_SHARE,
  TO_SET_COUPON_STYLE,
  TO_SET_COUPON_COLOR,
  TO_SET_COUPON_HIDE_FINISHED,
  TO_OPEN_COUPON_MODAL,
  TO_CLOSE_COUPON_MODAL,
  TO_CONFIRM_COUPON_MODAL,
  TO_DELETE_COUPON,
  TO_SET_RICH_TEXT_BG_COLOR,
  TO_RICH_TEXT_BG_COLOR_RESET,
  TO_SET_RICH_TEXT_FULL_SCREEN,
  TO_SET_COMMODITY_GROUP_SHOW,
  TO_ADD_HOT_ZONE,
  TO_DELETE_HOT_ZONE,
  TO_OPEN_HOT_ZONE_ASSOCIATED_LINK,
  TO_CONFIRM_HOT_ZONE_COUPON,
  TO_SET_DESIGN_TITLE_TITLE,
  TO_SET_DESIGN_TITLE_DESC,
  TO_SET_DESIGN_TITLE_BG_COLOR,
  TO_SET_DESIGN_TITLE_BG_COLOR_RESET,
  TO_HOT_ZONE_CLOSE_ALL,
  TO_SET_IMGS_ADS_BACKGROUND_IMG,
  TO_SET_TEMPLATE_TITLE_TITLE,
  TO_SET_TEMPLATE_TITLE_STYLE,
 } from '../type.js'

const state = {
  // 微页面
  chooseIndex: 0,
  designTitle: {
    title: '微页面标题',
    desc: '',
    bgColor: {
      hex: '#fff'
    },
  },
  templateTitle: {
    title: '',
    style: '0'
  },
  previewItems: [
    {
      component: "rich-text-preview",
      name: "rich-text",
      richText: {
        content: '',
        bgColor: {
          hex: '#f8f8f8'
        },
        fullScreen: false
      }
    }
  ],
  editorItems: {},
  editorOffset: 164,
  showEditor: false,
  customizeModalVisible: false,
  designModalVisible: false,
  hotZoneModalVisible: false,
  hotZoneParam: {},
  associatedLinkIndex: 0,
  commodityModalVisible: false,
  commodityGroupModalVisible: false,
  couponModalVisible: false,
  hotZoneIndex: 0,
}

const mutations = {
  [SET_EDITOR_CHANGE](state, { param }) {
    state.previewItems[state.chooseIndex].richText.content = param;
    state.editorItems.richText.content = state.previewItems[state.chooseIndex].richText.content
  },

  [SET_RICH_TEXT_COMPONENT](state, { param }) {
    state.previewItems.push({
      'component': param.component + '-preview',
      'name': param.component,
      'richText': {
        content: '',
        bgColor: {
          hex: '#f8f8f8'
        },
        fullScreen: false
      },
      'enterStoreTitle': '进入店铺',
      'storeMsgStyle': '1',
      'announcement': {
        text: '公告',
        bgColor: {
          hex: 'rgb(255, 248, 233)'
        },
        textColor: {
          hex: '#666'
        }
      },
      'commoditySearch': {
        hotword: [
          { text: '' },
        ],
        boxStyle: '0',
        boxHeight: 40,
        bgColor: {
          hex: 'rgb(249, 249, 249)'
        },
        boxColor: {
          hex: '#fff'
        },
        textAlign: 'left',
        textColor: {
          hex: '#999999'
        }
      },
      'video': {
        type: '1',
        image: ''
      },
      'auxiliaryLine': {
        borderColor: {
          hex: '#E5E5E5'
        },
        borderPadding: '0',
        borderStyle: 'solid'
      },
      'auxiliaryBlankHeight': 30,
      'customize': [
        {
          component: "rich-text-preview",
          name: "customize-preview",
          content: "<h2>点此编辑[自定义模块]</h2>"
        }
      ],
      'imagesAds': {
        template: '0',
        fillWay: '0',
        margin: 0,
        background: []
      },
      'imagesTextNav': {
        template: '0',
        sliderSetting: '0',
        screenNumber: '4',
        bgColor: {
          hex: '#fff'
        },
        textColor: {
          hex: '#000'
        },
        nav: [
          {
            imgSrc: 'https://img.yzcdn.cn/upload_files/2018/11/20/FsUqzyNPn3zJsI3l-RsofBRJg_iL.gif?imageView2/2/w/200/h/200/q/75/format/gif',
            title: '1',
            target: ''
          },
          {
            imgSrc: 'https://img.yzcdn.cn/public_files/2018/03/08/837f3d12e14b299778ae5fea5c05a3a3.png',
            title: '2',
            target: ''
          }
        ]
      },
      'text': {
        text: '',
        fontSize: 18,
        textColor: {
          hex: '#000'
        },
        bgColor: {
          hex: '#fff'
        },
        textAlign: 'left',
        target: '',
        showDividingLine: false
      },
      'associatedLink': {
        linkItem: [
          {
            name: 'design',
            chainName: '最热分类',
            chainUrl: '222',
            showNumber: 3
          }, {
            name: 'group',
            chainName: '其他',
            chainUrl: '222',
            showNumber: 3
          }, {
            name: 'outerChain',
            chainName: '2122',
            chainUrl: '222',
            showNumber: 1
          }, {
            name: '',
            chainName: '',
            chainUrl: '',
            showNumber: 1
          }
        ]
      },
      'title': {
        title: '',
        template: '0',
        textAlign: 'left',
        subTitle: '',
        bgColor: {
          hex: '#F9F9F9'
        },
        openNav: false,
        nav: {
          name: '',
          target: ''
        },
        date: '',
        author: '',
        linkSubTitle: '',
        linkUrlType: '0',
        linkUrlTarget: ''
      },
      'commodity': {
        source: '0',
        commodity: [
          {
            name: '名字',
            imgSrc: 'https://img.yzcdn.cn/upload_files/2018/11/20/FsUqzyNPn3zJsI3l-RsofBRJg_iL.gif?imageView2/2/w/200/h/200/q/75/format/gif'
          }
        ],
        groupShow: '',
        listStyle: '0',
        pageMargin: 15,
        commodityMargin: 15,
        commodityStyle: '0',
        commodityBorderRadius: '0',
        pictureRatio: '0',
        pictureFill: '0',
        textStyle: '0',
        textAlign: 'left',
        showContent: ['0', '1', '2', '3'],
        buyStyle: '0',
        buyName: '马上抢',
        badge: '0',
        badgeUrl: ''
      },
      'commodityGroup': {
        group: [],
        showAll: '1',
        template: '0',
        menuStyle: '0',
        menuPosition: '0',
        listStyle: '0',
        pageMargin: 15,
        commodityMargin: 15,
        commodityStyle: '0',
        commodityBorderRadius: '0',
        pictureRatio: '0',
        pictureFill: '0',
        textStyle: '0',
        textAlign: 'left',
        showContent: ['0', '1', '2', '3'],
        buyStyle: '0',
        buyName: '马上抢',
        badge: '0',
        badgeUrl: ''
      },
      'coupon': {
        addWay: '1',
        couponList: [],
        couponNumberType: '0',
        couponNumber: 0,
        hideCannotShare: false,
        couponStyle: '0',
        couponColor: '0',
        hideFinished: false
      }
    })
  },

  [SET_RICH_TEXT_COMPONENT_CHANGE](state, { param }) {
    if (typeof param.index === 'number') {
      state.showEditor = true;
      state.chooseIndex = param.index;
      state.editorOffset = param.offset;
      state.editorItems = {
        component: state.previewItems[param.index].name + '-editor',
        name: state.previewItems[param.index].name,
        richText: state.previewItems[param.index].richText,
        enterStoreTitle: state.previewItems[param.index].enterStoreTitle,
        storeMsgStyle: state.previewItems[param.index].storeMsgStyle,
        commoditySearch: state.previewItems[param.index].commoditySearch,
        video: state.previewItems[param.index].video,
        auxiliaryLine: state.previewItems[param.index].auxiliaryLine,
        auxiliaryBlankHeight: state.previewItems[param.index].auxiliaryBlankHeight,
        customize: state.previewItems[param.index].customize,
        imagesAds: state.previewItems[param.index].imagesAds,
        imagesTextNav: state.previewItems[param.index].imagesTextNav,
        text: state.previewItems[param.index].text,
        associatedLink: state.previewItems[param.index].associatedLink,
        title: state.previewItems[param.index].title,
        commodity: state.previewItems[param.index].commodity,
        commodityGroup: state.previewItems[param.index].commodityGroup,
        coupon: state.previewItems[param.index].coupon,
      }
    } else {
      state.showEditor = true;
      state.editorOffset = param.offset;
      if (param.index === 'design-title') {
        state.editorItems = {
          component: `${param.index}-editor`,
          designTitle: state.designTitle
        }
      } else if (param.index === 'template-title') {
        state.editorItems = {
          component: `${param.index}-editor`,
          templateTitle: state.templateTitle
        }
      }
    }
  },

  [TO_SET_RICH_TEXT_BG_COLOR](state, { param }) {
    state.previewItems[state.chooseIndex].richText.bgColor = param;
    state.editorItems.richText.bgColor = state.previewItems[state.chooseIndex].richText.bgColor;
  },

  [TO_RICH_TEXT_BG_COLOR_RESET](state) {
    state.previewItems[state.chooseIndex].richText.bgColor.hex = '#f8f8f8';
  },

  [TO_SET_RICH_TEXT_FULL_SCREEN](state, { param }) {
    state.previewItems[state.chooseIndex].richText.fullScreen = param;
    state.editorItems.richText.fullScreen = state.previewItems[state.chooseIndex].richText.fullScreen;
  },

  [TO_SET_RICH_TEXT_VALUE](state, { param }) {
    state.previewItems = param
  },

  [TO_DELETE_COMPONENT](state, { param }) {
    state.previewItems.splice(param.index, 1);
    state.editorOffset = param.offset

    if (param.index !== 0) {
      state.chooseIndex = param.index - 1;
      state.editorItems.component = state.previewItems[param.index - 1].name + '-editor';
      state.editorItems.name = state.previewItems[param.index - 1].name;
      state.editorItems.content = state.previewItems[param.index - 1].content
    } else {
      state.showEditor = false
    }
  },

  [TO_SET_STORE_MSG_STYLE](state, { param }) {
    state.previewItems[state.chooseIndex].storeMsgStyle = param;
    state.editorItems.storeMsgStyle = state.previewItems[state.chooseIndex].storeMsgStyle;
  },

  [TO_SET_ENTER_STORE_TITLE](state, { param }) {
    state.previewItems[state.chooseIndex].enterStoreTitle = param;
    state.editorItems.enterStoreTitle = state.previewItems[state.chooseIndex].enterStoreTitle;
  },

  [TO_ADD_HOT_WORD](state) {
    state.previewItems[state.chooseIndex].commoditySearch.hotword.push({ text: '' });
  },

  [TO_DELETE_HOT_WORD](state, { param }) {
    state.previewItems[state.chooseIndex].commoditySearch.hotword.splice(param, 1);
  },

  [TO_SET_COMMODITY_SEARCH_BOX_STYLE](state, { param }) {
    state.previewItems[state.chooseIndex].commoditySearch.boxStyle = param;
    state.editorItems.commoditySearch.boxStyle = state.previewItems[state.chooseIndex].commoditySearch.boxStyle;
  },

  [TO_SET_COMMODITY_SEARCH_BOX_HEIGHT](state, { param }) {
    state.previewItems[state.chooseIndex].commoditySearch.boxHeight = param;
    state.editorItems.commoditySearch.boxHeight = state.previewItems[state.chooseIndex].commoditySearch.boxHeight;
  },

  [TO_SET_COMMODITY_SEARCH_BG_COLOR](state, { param }) {
    state.previewItems[state.chooseIndex].commoditySearch.bgColor = param;
    state.editorItems.commoditySearch.bgColor = state.previewItems[state.chooseIndex].commoditySearch.bgColor;
  },

  [TO_SET_COMMODITY_SEARCH_BOX_COLOR](state, { param }) {
    state.previewItems[state.chooseIndex].commoditySearch.boxColor = param;
    state.editorItems.commoditySearch.boxColor = state.previewItems[state.chooseIndex].commoditySearch.boxColor;
  },

  [TO_SET_COMMODITY_SEARCH_TEXT_COLOR](state, { param }) {
    state.previewItems[state.chooseIndex].commoditySearch.textColor = param;
    state.editorItems.commoditySearch.textColor = state.previewItems[state.chooseIndex].commoditySearch.textColor;
  },

  [TO_SET_COMMODITY_SEARCH_TEXT_ALIGN](state, { param }) {
    state.previewItems[state.chooseIndex].commoditySearch.textAlign = param;
    state.editorItems.commoditySearch.textAlign = state.previewItems[state.chooseIndex].commoditySearch.textAlign;
  },

  [TO_BG_COLOR_RESET](state) {
    state.previewItems[state.chooseIndex].commoditySearch.bgColor.hex = 'rgb(249, 249, 249)';
  },

  [TO_BOX_COLOR_RESET](state) {
    state.previewItems[state.chooseIndex].commoditySearch.boxColor.hex = '#fff';
  },

  [TO_TEXT_COLOR_RESET](state) {
    state.previewItems[state.chooseIndex].commoditySearch.textColor.hex = '#999999';
  },

  [TO_SET_ANNOUNCEMENT_TEXT](state, { param }) {
    state.previewItems[state.chooseIndex].announcement.text = param;
    state.editorItems.announcement.text = state.previewItems[state.chooseIndex].announcement.text;
  },

  [TO_SET_ANNOUNCEMENT_BG_COLOR](state, { param }) {
    state.previewItems[state.chooseIndex].announcement.bgColor = param;
    state.editorItems.announcement.bgColor = state.previewItems[state.chooseIndex].announcement.bgColor;
  },

  [TO_SET_ANNOUNCEMENT_TEXT_COLOR](state, { param }) {
    state.previewItems[state.chooseIndex].announcement.textColor = param;
    state.editorItems.announcement.textColor = state.previewItems[state.chooseIndex].announcement.textColor;
  },

  [TO_ANNOUNCEMENT_BG_COLOR_RESET](state) {
    state.previewItems[state.chooseIndex].announcement.bgColor.hex = 'rgb(255, 248, 233)';
  },

  [TO_ANNOUNCEMENT_TEXT_COLOR_RESET](state) {
    state.previewItems[state.chooseIndex].announcement.textColor.hex = '#666';
  },

  [TO_SET_VIDEO_TYPE](state, { param }) {
    state.previewItems[state.chooseIndex].video.type = param;
    state.editorItems.video.type = state.previewItems[state.chooseIndex].video.type;
  },

  [TO_BORDER_COLOR_RESET](state) {
    state.previewItems[state.chooseIndex].auxiliaryLine.borderColor.hex = '#E5E5E5';
  },

  [TO_SET_AUXILIARY_LINE_BORDER_COLOR](state, { param }) {
    state.previewItems[state.chooseIndex].auxiliaryLine.borderColor = param;
    state.editorItems.auxiliaryLine.borderColor = state.previewItems[state.chooseIndex].auxiliaryLine.borderColor;
  },

  [TO_SET_AUXILIARY_LINE_BORDER_PADDING](state, { param }) {
    state.previewItems[state.chooseIndex].auxiliaryLine.borderPadding = param;
    state.editorItems.auxiliaryLine.borderPadding = state.previewItems[state.chooseIndex].auxiliaryLine.borderPadding;
  },

  [TO_SET_AUXILIARY_LINE_BORDER_STYLE](state, { param }) {
    state.previewItems[state.chooseIndex].auxiliaryLine.borderStyle = param;
    state.editorItems.auxiliaryLine.borderStyle = state.previewItems[state.chooseIndex].auxiliaryLine.borderStyle;
  },

  [TO_SET_AUXILIARY_BLANK_HEIGHT](state, { param }) {
    state.previewItems[state.chooseIndex].auxiliaryBlankHeight = param;
    state.editorItems.auxiliaryBlankHeight = state.previewItems[state.chooseIndex].auxiliaryBlankHeight;
  },

  [TO_CLOSE_CUSTOMIZE_MODAL](state) {
    state.customizeModalVisible = false;
  },

  [TO_OPEN_CUSTOMIZE_MODAL](state) {
    state.customizeModalVisible = true;
  },

  [TO_CONFIRM_CUSTOMIZE](state) {
    state.customizeModalVisible = false;
    const newArray = [
      {
        component: "rich-text-preview",
        name: "rich-text",
        content: "<h2>I am Example2</h2>"
      }, {
        component: "announcement-preview",
        name: "announcement",
        announcement: {
          text: '公告',
          bgColor: {
            hex: 'rgb(255, 248, 233)'
          },
          textColor: {
            hex: '#666'
          }
        },
      }
    ]
    state.previewItems[state.chooseIndex].customize = newArray
  },

  [TO_CHANGE_IMGS_ADS_TEMPLATE](state, { param }) {
    state.previewItems[state.chooseIndex].imagesAds.template = param.toString();
    state.editorItems.template = state.previewItems[state.chooseIndex].imagesAds.template;

    if (param.toString() === '5') {
      state.previewItems[state.chooseIndex].imagesAds.background = [];
      state.editorItems.background = state.previewItems[state.chooseIndex].imagesAds.background;
    }
  },

  [TO_SET_IMGS_ADS_FILL_WAY](state, { param }) {
    state.previewItems[state.chooseIndex].imagesAds.fillWay = param;
    state.editorItems.fillWay = state.previewItems[state.chooseIndex].imagesAds.fillWay;
  },

  [TO_ADD_IMAGES_ADS_BACKGROUND_IMGS](state) {
    const imgs = [
      {
        imgSrc: 'https://img.yzcdn.cn/upload_files/2018/11/20/FsUqzyNPn3zJsI3l-RsofBRJg_iL.gif?imageView2/2/w/200/h/200/q/75/format/gif',
        title: '',
        url: '',
        hotZone: [
          {
            target: '',
            width: 100,
            height: 100,
            y: 100,
            x: 10,
            show: false,
          },
          {
            target: '',
            width: 50,
            height: 50,
            y: 200,
            x: 30,
            show: false,
          }
        ]
      }, {
        imgSrc: 'https://img.yzcdn.cn/upload_files/2018/11/20/Ft-InQi69LKMdqk9b9rScECX68DU.gif?imageView2/2/w/200/h/200/q/75/format/gif',
        title: '',
        url: '',
        hotZone: [
          {
            target: '',
            width: 500,
            height: 500,
            y: 300,
            x: 30,
            show: false,
          }
        ]
      }
    ]

    state.previewItems[state.chooseIndex].imagesAds.background = imgs;
    state.editorItems.background = state.previewItems[state.chooseIndex].imagesAds.background;
  },

  [TO_SET_IMGS_ADS_BACKGROUND_IMG](state, { param }) {
    state.previewItems[state.chooseIndex].imagesAds.background = param;
  },

  [TO_SET_IMGS_ADS_MARGIN](state, { param }) {
    state.previewItems[state.chooseIndex].imagesAds.margin = param;
    state.editorItems.margin = state.previewItems[state.chooseIndex].imagesAds.margin;
  },

  [TO_OPEN_HOT_ZONE_MODAL](state, { param }) {
    state.hotZoneParam = param;
    state.hotZoneModalVisible = true;
  },

  [TO_CLOSE_HOT_ZONE_MODAL](state) {
    state.hotZoneModalVisible = false;
  },

  [TO_ADD_HOT_ZONE](state) {
    const param = {
      height: 100,
      width: 100,
      target: '',
      x: 0,
      y: 0,
      show: false,
    }
    state.hotZoneParam.hotZone.push(param);
  },

  [TO_DELETE_HOT_ZONE](state, { param }) {
    state.hotZoneParam.hotZone.splice(param, 1);
  },

  [TO_OPEN_HOT_ZONE_ASSOCIATED_LINK](state, { param }) {
    state.hotZoneIndex = param;
    state.hotZoneParam.hotZone[param].show = true;
  },

  [TO_CONFIRM_HOT_ZONE_COUPON](state) {
    state.hotZoneParam.hotZone[state.hotZoneIndex].target = '微页面';
    state.hotZoneParam.hotZone[state.hotZoneIndex].show = false;
  },

  [TO_HOT_ZONE_CLOSE_ALL](state) {
    state.hotZoneParam.hotZone.map((item) => {
      item.show = false;
    })
  },

  [TO_SET_IMAGES_TEXT_NAV_BG_COLOR](state, { param }) {
    state.previewItems[state.chooseIndex].imagesTextNav.bgColor = param;
    state.editorItems.imagesTextNav.bgColor = state.previewItems[state.chooseIndex].imagesTextNav.bgColor;
  },

  [TO_SET_IMAGES_TEXT_NAV_SLIDER_SETTING](state, { param }) {
    state.previewItems[state.chooseIndex].imagesTextNav.sliderSetting = param;
    state.editorItems.imagesTextNav.sliderSetting = state.previewItems[state.chooseIndex].imagesTextNav.sliderSetting;
  },

  [TO_SET_IMAGES_TEXT_NAV_BG_RESET](state) {
    state.previewItems[state.chooseIndex].imagesTextNav.bgColor.hex = '#fff';
  },

  [TO_SET_IMAGES_TEXT_NAV_TEXT_COLOR](state, { param }) {
    state.previewItems[state.chooseIndex].imagesTextNav.textColor = param;
    state.editorItems.imagesTextNav.textColor = state.previewItems[state.chooseIndex].imagesTextNav.textColor;
  },

  [TO_SET_IMAGES_TEXT_NAV_TEXT_RESET](state) {
    state.previewItems[state.chooseIndex].imagesTextNav.textColor.hex = '#000';
  },

  [TO_ADD_IMAGES_TEXT_NAV](state) {
    const newItem = {
        imgSrc: 'https://img.yzcdn.cn/public_files/2018/03/08/837f3d12e14b299778ae5fea5c05a3a3.png',
        title: '3',
        target: ''
      }
    state.previewItems[state.chooseIndex].imagesTextNav.nav.push(newItem);
  },

  [TO_CHANGE_IMAGES_TEXT_NAV_TEMPLATE](state, { param }) {
    state.previewItems[state.chooseIndex].imagesTextNav.template = param.toString();
    state.editorItems.template = state.previewItems[state.chooseIndex].imagesTextNav.template;
  },

  [TO_SET_IMAGES_TEXT_NAV_SCREEN_NUMBER](state, { param }) {
    state.previewItems[state.chooseIndex].imagesTextNav.screenNumber = param;
    state.editorItems.screenNumber = state.previewItems[state.chooseIndex].imagesTextNav.screenNumber;
  },

  [TO_SET_TEXT_TEXT_COLOR](state, { param }) {
    state.previewItems[state.chooseIndex].text.textColor = param;
    state.editorItems.text.textColor = state.previewItems[state.chooseIndex].text.textColor;
  },

  [TO_SET_TEXT_BG_COLOR](state, { param }) {
    state.previewItems[state.chooseIndex].text.bgColor = param;
    state.editorItems.text.bgColor = state.previewItems[state.chooseIndex].text.bgColor;
  },

  [TO_SET_TEXT_TEXT_COLOR_RESET](state) {
    state.previewItems[state.chooseIndex].text.textColor.hex = '#000';
  },

  [TO_SET_TEXT_BG_COLOR_RESET](state) {
    state.previewItems[state.chooseIndex].text.bgColor.hex = '#fff';
  },

  [TO_SET_TEXT_FONT_SIZE](state, { param }) {
    state.previewItems[state.chooseIndex].text.fontSize = param;
    state.editorItems.text.fontSize = state.previewItems[state.chooseIndex].text.fontSize;
  },

  [TO_SET_TEXT_TEXT](state, { param }) {
    state.previewItems[state.chooseIndex].text.text = param;
    state.editorItems.text.text = state.previewItems[state.chooseIndex].text.text;
  },

  [TO_SET_TEXT_TEXT_ALIGN](state, { param }) {
    state.previewItems[state.chooseIndex].text.textAlign = param;
    state.editorItems.text.textAlign = state.previewItems[state.chooseIndex].text.textAlign;
  },

  [TO_SET_TEXT_SHOW_DIVIDING_LINE](state, { param }) {
    state.previewItems[state.chooseIndex].text.showDividingLine = param;
    state.editorItems.text.showDividingLine = state.previewItems[state.chooseIndex].text.showDividingLine;
  },

  [TO_OPEN_DESIGN_MODAL](state, { param }) {
    state.associatedLinkIndex = param;
    state.designModalVisible = true;
  },

  [TO_CLOSE_DESIGN_MODAL](state) {
    state.designModalVisible = false;
  },

  [TO_CONFIRM_DESIGN](state) {
    state.designModalVisible = false;
    state.previewItems[state.chooseIndex].associatedLink.linkItem[state.associatedLinkIndex].name = 'design';
    state.previewItems[state.chooseIndex].associatedLink.linkItem[state.associatedLinkIndex].chainName = '最热分类';
    state.previewItems[state.chooseIndex].associatedLink.linkItem[state.associatedLinkIndex].showNumber = 3;
  },

  [TO_ADD_NEW_ASSOCIATED](state) {
    const newLinkItem = {
      name: '',
      chainName: '',
      showNumber: 0
    }
    state.previewItems[state.chooseIndex].associatedLink.linkItem.push(newLinkItem)
  },

  [TO_SET_TITLE_TITLE](state, { param }) {
    state.previewItems[state.chooseIndex].title.title = param;
    state.editorItems.title.title = state.previewItems[state.chooseIndex].title.title;
  },

  [TO_SET_TITLE_TEMPLATE](state, { param }) {
    state.previewItems[state.chooseIndex].title.template = param;
    state.editorItems.title.template = state.previewItems[state.chooseIndex].title.template;
  },

  [TO_SET_TITLE_TEXT_ALIGN](state, { param }) {
    state.previewItems[state.chooseIndex].title.textAlign = param;
    state.editorItems.title.textAlign = state.previewItems[state.chooseIndex].title.textAlign;
  },

  [TO_SET_TITLE_SUB_TITLE](state, { param }) {
    state.previewItems[state.chooseIndex].title.subTitle = param;
    state.editorItems.title.subTitle = state.previewItems[state.chooseIndex].title.subTitle;
  },

  [TO_SET_TITLE_BG_COLOR](state, { param }) {
    state.previewItems[state.chooseIndex].title.bgColor = param;
    state.editorItems.title.bgColor = state.previewItems[state.chooseIndex].title.bgColor;
  },

  [TO_SET_TITLE_BG_COLOR_RESET](state) {
    state.previewItems[state.chooseIndex].title.bgColor.hex = '#F9F9F9';
  },

  [TO_ADD_TITLE_TEXT_NAV](state) {
    state.previewItems[state.chooseIndex].title.openNav = true;
  },

  [TO_DELETE_TITLE_TEXT_NAV](state) {
    state.previewItems[state.chooseIndex].title.openNav = false;
    state.previewItems[state.chooseIndex].title.nav.name = '';
    state.previewItems[state.chooseIndex].title.nav.target = '';
  },

  [TO_SET_TITLE_NAV_NAME](state, { param }) {
    state.previewItems[state.chooseIndex].title.nav.name = param;
    state.editorItems.title.nav.name = state.previewItems[state.chooseIndex].title.nav.name;
  },

  [TO_SET_TITLE_DATE](state, { param }) {
    state.previewItems[state.chooseIndex].title.date = param;
    state.editorItems.title.date = state.previewItems[state.chooseIndex].title.date;
  },

  [TO_SET_TITLE_AUTHOR](state, { param }) {
    state.previewItems[state.chooseIndex].title.author = param;
    state.editorItems.title.author = state.previewItems[state.chooseIndex].title.author;
  },

  [TO_SET_TITLE_LINK_SUB_TITLE](state, { param }) {
    state.previewItems[state.chooseIndex].title.linkSubTitle = param;
    state.editorItems.title.linkSubTitle = state.previewItems[state.chooseIndex].title.linkSubTitle;
  },

  [TO_SET_TITLE_LINK_URL_TYPE](state, { param }) {
    state.previewItems[state.chooseIndex].title.linkUrlType = param;
    state.editorItems.title.linkUrlType = state.previewItems[state.chooseIndex].title.linkUrlType;
  },

  [TO_SET_COMMODITY_SOURCE](state, { param }) {
    state.previewItems[state.chooseIndex].commodity.source = param;
    state.editorItems.commodity.source = state.previewItems[state.chooseIndex].commodity.source;
  },

  [TO_OPEN_COMMODITY_MODAL](state) {
    state.commodityModalVisible = true;
  },

  [TO_CLOSE_COMMODITY_MODAL](state) {
    state.commodityModalVisible = false;
  },

  [TO_CONFIRM_COMMODITY_MODAL](state) {
    const param = {
      name: 'test',
      imgSrc: 'https://img.yzcdn.cn/upload_files/2018/11/20/FsUqzyNPn3zJsI3l-RsofBRJg_iL.gif?imageView2/2/w/200/h/200/q/75/format/gif'
    }
    state.commodityModalVisible = false;
    state.previewItems[state.chooseIndex].commodity.commodity.push(param);
  },

  [TO_COMMODITY_DELETE_COMMODITY](state, { param }) {
    state.previewItems[state.chooseIndex].commodity.commodity.splice(param, 1);
  },

  [TO_SET_COMMODITY_GROUP_SHOW](state, { param }) {
    state.previewItems[state.chooseIndex].commodity.groupShow = param;
    state.editorItems.commodity.groupShow = state.previewItems[state.chooseIndex].commodity.groupShow;
  },

  [TO_SET_COMMODITY_LIST_STYLE](state, { param }) {
    state.previewItems[state.chooseIndex].commodity.listStyle = param;
    state.editorItems.commodity.listStyle = state.previewItems[state.chooseIndex].commodity.listStyle;
  },

  [TO_SET_COMMODITY_PAGE_MARIGIN](state, { param }) {
    state.previewItems[state.chooseIndex].commodity.pageMargin = param;
    state.editorItems.commodity.pageMargin = state.previewItems[state.chooseIndex].commodity.pageMargin;
  },

  [TO_SET_COMMODITY_COMMODITY_MARIGIN](state, { param }) {
    state.previewItems[state.chooseIndex].commodity.commodityMargin = param;
    state.editorItems.commodity.commodityMargin = state.previewItems[state.chooseIndex].commodity.commodityMargin;
  },

  [TO_SET_COMMODITY_COMMODITY_STYLE](state, { param }) {
    state.previewItems[state.chooseIndex].commodity.commodityStyle = param;
    state.editorItems.commodity.commodityStyle = state.previewItems[state.chooseIndex].commodity.commodityStyle;
  },

  [TO_SET_COMMODITY_COMMODITY_BORDER_RADIUS](state, { param }) {
    state.previewItems[state.chooseIndex].commodity.commodityBorderRadius = param;
    state.editorItems.commodity.commodityBorderRadius = state.previewItems[state.chooseIndex].commodity.commodityBorderRadius;
  },

  [TO_SET_COMMODITY_PICTURE_RATIO](state, { param }) {
    state.previewItems[state.chooseIndex].commodity.pictureRatio = param;
    state.editorItems.commodity.pictureRatio = state.previewItems[state.chooseIndex].commodity.pictureRatio;
  },

  [TO_SET_COMMODITY_PICTURE_FILL](state, { param }) {
    state.previewItems[state.chooseIndex].commodity.pictureFill = param;
    state.editorItems.commodity.pictureFill = state.previewItems[state.chooseIndex].commodity.pictureFill;
  },

  [TO_SET_COMMODITY_TEXT_STYLE](state, { param }) {
    state.previewItems[state.chooseIndex].commodity.textStyle = param;
    state.editorItems.commodity.textStyle = state.previewItems[state.chooseIndex].commodity.textStyle;
  },

  [TO_SET_COMMODITY_TEXT_ALIGN](state, { param }) {
    state.previewItems[state.chooseIndex].commodity.textAlign = param;
    state.editorItems.commodity.textAlign = state.previewItems[state.chooseIndex].commodity.textAlign;
  },

  [TO_SET_COMMODITY_SHOW_CONTENT](state, { param }) {
    state.previewItems[state.chooseIndex].commodity.showContent = param;
    state.editorItems.commodity.showContent = state.previewItems[state.chooseIndex].commodity.showContent;
  },

  [TO_SET_COMMODITY_BUY_STYLE](state, { param }) {
    state.previewItems[state.chooseIndex].commodity.buyStyle = param;
    state.editorItems.commodity.buyStyle = state.previewItems[state.chooseIndex].commodity.buyStyle;
  },

  [TO_SET_COMMODITY_BUY_NAME](state, { param }) {
    state.previewItems[state.chooseIndex].commodity.buyName = param;
    state.editorItems.commodity.buyName = state.previewItems[state.chooseIndex].commodity.buyName;
  },

  [TO_SET_COMMODITY_BADGE](state, { param }) {
    state.previewItems[state.chooseIndex].commodity.badge = param;
    state.editorItems.commodity.badge = state.previewItems[state.chooseIndex].commodity.badge;
  },

  [TO_ADD_BADGE_IMG](state) {
    state.previewItems[state.chooseIndex].commodity.badgeUrl = 'https://img.yzcdn.cn/upload_files/2018/11/20/FsUqzyNPn3zJsI3l-RsofBRJg_iL.gif?imageView2/2/w/200/h/200/q/75/format/gif';
  },

  [TO_SET_COMMODITY_GROUP_SHOW_ALL](state, { param }) {
    state.previewItems[state.chooseIndex].commodityGroup.showAll = param;
    state.editorItems.commodityGroup.showAll = state.previewItems[state.chooseIndex].commodityGroup.showAll;
  },

  [TO_SET_COMMODITY_GROUP_TEMPLATE](state, { param }) {
    state.previewItems[state.chooseIndex].commodityGroup.template = param;
    state.editorItems.commodityGroup.template = state.previewItems[state.chooseIndex].commodityGroup.template;
  },

  [TO_SET_COMMODITY_GROUP_MENU_STYLE](state, { param }) {
    state.previewItems[state.chooseIndex].commodityGroup.menuStyle = param;
    state.editorItems.commodityGroup.menuStyle = state.previewItems[state.chooseIndex].commodityGroup.menuStyle;
  },

  [TO_SET_COMMODITY_GROUP_MENU_POSITION](state, { param }) {
    state.previewItems[state.chooseIndex].commodityGroup.menuPostion = param;
    state.editorItems.commodityGroup.menuPostion = state.previewItems[state.chooseIndex].commodityGroup.menuPostion;
  },

  [TO_SET_COMMODITY_GROUP_LIST_STYLE](state, { param }) {
    state.previewItems[state.chooseIndex].commodityGroup.listStyle = param;
    state.editorItems.commodityGroup.listStyle = state.previewItems[state.chooseIndex].commodityGroup.listStyle;
  },

  [TO_SET_COMMODITY_GROUP_PAGE_MARIGIN](state, { param }) {
    state.previewItems[state.chooseIndex].commodityGroup.pageMargin = param;
    state.editorItems.commodityGroup.pageMargin = state.previewItems[state.chooseIndex].commodityGroup.pageMargin;
  },

  [TO_SET_COMMODITY_GROUP_COMMODITY_MARIGIN](state, { param }) {
    state.previewItems[state.chooseIndex].commodityGroup.commodityMargin = param;
    state.editorItems.commodityGroup.commodityMargin = state.previewItems[state.chooseIndex].commodityGroup.commodityMargin;
  },

  [TO_SET_COMMODITY_GROUP_COMMODITY_STYLE](state, { param }) {
    state.previewItems[state.chooseIndex].commodityGroup.commodityStyle = param;
    state.editorItems.commodityGroup.commodityStyle = state.previewItems[state.chooseIndex].commodityGroup.commodityStyle;
  },

  [TO_SET_COMMODITY_GROUP_COMMODITY_BORDER_RADIUS](state, { param }) {
    state.previewItems[state.chooseIndex].commodityGroup.commodityBorderRadius = param;
    state.editorItems.commodityGroup.commodityBorderRadius = state.previewItems[state.chooseIndex].commodityGroup.commodityBorderRadius;
  },

  [TO_SET_COMMODITY_GROUP_PICTURE_RATIO](state, { param }) {
    state.previewItems[state.chooseIndex].commodityGroup.pictureRatio = param;
    state.editorItems.commodityGroup.pictureRatio = state.previewItems[state.chooseIndex].commodityGroup.pictureRatio;
  },

  [TO_SET_COMMODITY_GROUP_PICTURE_FILL](state, { param }) {
    state.previewItems[state.chooseIndex].commodityGroup.pictureFill = param;
    state.editorItems.commodityGroup.pictureFill = state.previewItems[state.chooseIndex].commodityGroup.pictureFill;
  },

  [TO_SET_COMMODITY_GROUP_TEXT_STYLE](state, { param }) {
    state.previewItems[state.chooseIndex].commodityGroup.textStyle = param;
    state.editorItems.commodityGroup.textStyle = state.previewItems[state.chooseIndex].commodityGroup.textStyle;
  },

  [TO_SET_COMMODITY_GROUP_TEXT_ALIGN](state, { param }) {
    state.previewItems[state.chooseIndex].commodityGroup.textAlign = param;
    state.editorItems.commodityGroup.textAlign = state.previewItems[state.chooseIndex].commodityGroup.textAlign;
  },

  [TO_SET_COMMODITY_GROUP_SHOW_CONTENT](state, { param }) {
    state.previewItems[state.chooseIndex].commodityGroup.showContent = param;
    state.editorItems.commodityGroup.showContent = state.previewItems[state.chooseIndex].commodityGroup.showContent;
  },

  [TO_SET_COMMODITY_GROUP_BUY_STYLE](state, { param }) {
    state.previewItems[state.chooseIndex].commodityGroup.buyStyle = param;
    state.editorItems.commodityGroup.buyStyle = state.previewItems[state.chooseIndex].commodityGroup.buyStyle;
  },

  [TO_SET_COMMODITY_GROUP_BUY_NAME](state, { param }) {
    state.previewItems[state.chooseIndex].commodityGroup.buyName = param;
    state.editorItems.commodityGroup.buyName = state.previewItems[state.chooseIndex].commodityGroup.buyName;
  },

  [TO_SET_COMMODITY_GROUP_BADGE](state, { param }) {
    state.previewItems[state.chooseIndex].commodityGroup.badge = param;
    state.editorItems.commodityGroup.badge = state.previewItems[state.chooseIndex].commodityGroup.badge;
  },

  [TO_OPEN_COMMODITY_GROUP_MODAL](state) {
    state.commodityGroupModalVisible = true;
  },

  [TO_CLOSE_COMMODITY_GROUP_MODAL](state) {
    state.commodityGroupModalVisible = true;
  },

  [TO_COMMODITY_DELETE_COMMODITY_GROUP](state, { param }) {
    state.previewItems[state.chooseIndex].commodityGroup.group.splice(param, 1);
  },

  [TO_CONFIRM_COMMODITY_GROUP_MODAL](state) {
    const param = {
      source: '其他',
      name: '其他',
      showType: '0',
      showNumber: 6,
    }
    state.previewItems[state.chooseIndex].commodityGroup.group.push(param);
    state.commodityGroupModalVisible = false;
  },

  [TO_SET_COUPON_ADD_WAY](state, { param }) {
    state.previewItems[state.chooseIndex].coupon.addWay = param;
    state.editorItems.coupon.addWay = state.previewItems[state.chooseIndex].coupon.addWay;
  },

  [TO_SET_COUPON_NUMBER_TYPE](state, { param }) {
    state.previewItems[state.chooseIndex].coupon.couponNumberType = param;
    state.editorItems.coupon.couponNumberType = state.previewItems[state.chooseIndex].coupon.couponNumberType;
  },

  [TO_SET_COUPON_NUMBER](state, { param }) {
    state.previewItems[state.chooseIndex].coupon.couponNumber = param;
    state.editorItems.coupon.couponNumber = state.previewItems[state.chooseIndex].coupon.couponNumber;
  },

  [TO_SET_COUPON_HIDE_CANNOT_SHARE](state, { param }) {
    state.previewItems[state.chooseIndex].coupon.hideCannotShare = param;
    state.editorItems.coupon.hideCannotShare = state.previewItems[state.chooseIndex].coupon.hideCannotShare;
  },

  [TO_SET_COUPON_STYLE](state, { param }) {
    state.previewItems[state.chooseIndex].coupon.couponStyle = param;
    state.editorItems.coupon.couponStyle = state.previewItems[state.chooseIndex].coupon.couponStyle;
  },

  [TO_SET_COUPON_COLOR](state, { param }) {
    state.previewItems[state.chooseIndex].coupon.couponColor = param;
    state.editorItems.coupon.couponColor = state.previewItems[state.chooseIndex].coupon.couponColor;
  },

  [TO_SET_COUPON_HIDE_FINISHED](state, { param }) {
    state.previewItems[state.chooseIndex].coupon.hideFinished = param;
    state.editorItems.coupon.hideFinished = state.previewItems[state.chooseIndex].coupon.hideFinished;
  },

  [TO_OPEN_COUPON_MODAL](state) {
    state.couponModalVisible = true;
  },

  [TO_CLOSE_COUPON_MODAL](state) {
    state.couponModalVisible = false;
  },

  [TO_CONFIRM_COUPON_MODAL](state) {
    const param = {
      name: '优惠券名字',
      discount: '2',
      discountType: '无门槛使用'
    }
    state.previewItems[state.chooseIndex].coupon.couponList.push(param);
    state.couponModalVisible = false;
  },

  [TO_DELETE_COUPON](state, { param }) {
    state.previewItems[state.chooseIndex].coupon.couponList.splice(param, 1);
  },

  [TO_SET_DESIGN_TITLE_TITLE](state, { param }) {
    state.designTitle.title = param;
  },

  [TO_SET_DESIGN_TITLE_DESC](state, { param }) {
    state.designTitle.desc = param;
  },

  [TO_SET_DESIGN_TITLE_BG_COLOR](state, { param }) {
    state.designTitle.bgColor = param;
    state.editorItems.designTitle.bgColor = state.designTitle.bgColor
  },

  [TO_SET_DESIGN_TITLE_BG_COLOR_RESET](state) {
    state.designTitle.bgColor.hex = '#fff';
  },

  [TO_SET_TEMPLATE_TITLE_TITLE](state, { param }) {
    state.templateTitle.title = param;
  },

  [TO_SET_TEMPLATE_TITLE_STYLE](state, { param }) {
    state.templateTitle.style = param
  }

 }

const getters = {
  getRichTextContent() {
    return state.richText;
  },

  getRichTextPreviewItems() {
    return state.previewItems;
  },

  getRichTextEditorItems() {
    return state.editorItems;
  },

  getEditorOffsetTop() {
    return state.editorOffsetTop;
  },

  getEditorOffset() {
    return state.editorOffset;
  },

  getShowEditor() {
    return state.showEditor;
  },

  getActiveIndex() {
    return state.chooseIndex;
  },

  getStoreMsgStyle() {
    return state.storeMsgStyle;
  },

  getEnterStore() {
    return state.enterStore;
  },

  getCommoditySearch() {
    return state.commoditySearch;
  },

  getCustomizeModalVisible() {
    return state.customizeModalVisible;
  },

  getHotZoneModalVisible() {
    return state.hotZoneModalVisible;
  },

  getHotZoneParam() {
    return state.hotZoneParam
  },

  getDesignModalVisible() {
    return state.designModalVisible;
  },

  getCommodityModalVisible() {
    return state.commodityModalVisible
  },

  getCommoditGroupyModalVisible() {
    return state.commodityGroupModalVisible
  },

  getCouponModalVisible() {
    return state.couponModalVisible
  },

  getDesignTitle() {
    return state.designTitle
  },

}

const actions = {
  setEditorChange: ({ commit }, { param }) => {
    commit(SET_EDITOR_CHANGE, { param });
  },

  toSetRichTextBgColor: ({ commit }, { param }) => {
    commit(TO_SET_RICH_TEXT_BG_COLOR, { param });
  },

  toRichTextBgColorReset: ({ commit }) => {
    commit(TO_RICH_TEXT_BG_COLOR_RESET);
  },

  toSetRichTextFullScreen: ({ commit }, { param }) => {
    commit(TO_SET_RICH_TEXT_FULL_SCREEN, { param });
  },

  setComponent: ({ commit, dispatch }, { param }) => {
    commit(SET_RICH_TEXT_COMPONENT, { param });
    dispatch({
      type: 'setRichTextComponentChange',
      param: {
        index: param.index,
        offset: param.offset
      }
    })
  },

  setRichTextComponentChange: ({ commit }, { param }) => {
    commit(SET_RICH_TEXT_COMPONENT_CHANGE, { param });
  },

  toSetRichTextValue: ({ commit }, { param }) => {
    commit(TO_SET_RICH_TEXT_VALUE, { param });
  },

  toDeleteComponent: ({ commit }, { param }) => {
    commit(TO_DELETE_COMPONENT, { param });
  },

  toSetStoreMsgStyle: ({ commit }, { param }) => {
    commit(TO_SET_STORE_MSG_STYLE, { param });
  },

  toSetEnterStoreTitle: ({ commit }, { param }) => {
    commit(TO_SET_ENTER_STORE_TITLE, { param });
  },

  toAddHotWord: ({ commit }) => {
    commit(TO_ADD_HOT_WORD)
  },

  toDeleteHotWord: ({ commit }, { param }) => {
    commit(TO_DELETE_HOT_WORD, { param })
  },

  toSetCommoditySearchBoxStyle: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_SEARCH_BOX_STYLE, { param })
  },

  toSetCommoditySearchBoxHeight: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_SEARCH_BOX_HEIGHT, { param })
  },

  toSetCommoditySearchBgColor: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_SEARCH_BG_COLOR, { param })
  },

  toSetCommoditySearchBoxColor: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_SEARCH_BOX_COLOR, { param })
  },

  toSetCommoditySearchTextColor: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_SEARCH_TEXT_COLOR, { param })
  },

  toSetCommoditySearchTextAlign: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_SEARCH_TEXT_ALIGN, { param })
  },

  toBgColorReset: ({ commit }) => {
    commit(TO_BG_COLOR_RESET)
  },

  toBoxColorReset: ({ commit }) => {
    commit(TO_BOX_COLOR_RESET)
  },

  toTextColorReset: ({ commit }) => {
    commit(TO_TEXT_COLOR_RESET)
  },

  toSetAnnouncementText: ({ commit }, { param }) => {
    commit(TO_SET_ANNOUNCEMENT_TEXT, { param })
  },

  toSetAnnouncementBgColor: ({ commit }, { param }) => {
    commit(TO_SET_ANNOUNCEMENT_BG_COLOR, { param })
  },

  toSetAnnouncementTextColor: ({ commit }, { param }) => {
    commit(TO_SET_ANNOUNCEMENT_TEXT_COLOR, { param })
  },

  toAnnouncementBgColorReset: ({ commit }) => {
    commit(TO_ANNOUNCEMENT_BG_COLOR_RESET)
  },

  toAnnouncementTextColorReset: ({ commit }) => {
    commit(TO_ANNOUNCEMENT_TEXT_COLOR_RESET)
  },

  toSetVideoType: ({ commit }, { param }) => {
    commit(TO_SET_VIDEO_TYPE, { param })
  },

  toBorderColorReset: ({ commit }) => {
    commit(TO_BORDER_COLOR_RESET)
  },

  toSetAuxiliaryLineBorderColor: ({ commit }, { param }) => {
    commit(TO_SET_AUXILIARY_LINE_BORDER_COLOR, { param })
  },

  toSetAuxiliaryLineBorderPadding: ({ commit }, { param }) => {
    commit(TO_SET_AUXILIARY_LINE_BORDER_PADDING, { param })
  },

  toSetAuxiliaryLineBorderStyle: ({ commit }, { param }) => {
    commit(TO_SET_AUXILIARY_LINE_BORDER_STYLE, { param })
  },

  toSetAuxiliaryBlankHeight: ({ commit }, { param }) => {
    commit(TO_SET_AUXILIARY_BLANK_HEIGHT, { param })
  },

  toCloseCustomizeModal: ({ commit }) => {
    commit(TO_CLOSE_CUSTOMIZE_MODAL)
  },

  toOpenCustomizeModal: ({ commit }) => {
    commit(TO_OPEN_CUSTOMIZE_MODAL)
  },

  toConfirmCustomize: ({ commit }) => {
    commit(TO_CONFIRM_CUSTOMIZE)
  },

  toChangeImgsAdsTemplate: ({ commit }, { param }) => {
    commit(TO_CHANGE_IMGS_ADS_TEMPLATE, { param })
  },

  toSetImgsAdsFillWay: ({ commit }, { param }) => {
    commit(TO_SET_IMGS_ADS_FILL_WAY, { param })
  },

  toAddImagesAdsBackgroudImgs: ({ commit }) => {
    commit(TO_ADD_IMAGES_ADS_BACKGROUND_IMGS)
  },

  toSetImgsAdsMargin: ({ commit }, { param }) => {
    commit(TO_SET_IMGS_ADS_MARGIN, { param })
  },

  toCloseHotZoneModal: ({ commit }) => {
    commit(TO_CLOSE_HOT_ZONE_MODAL)
  },

  toOpenHotZoneModal: ({ commit }, { param }) => {
    commit(TO_OPEN_HOT_ZONE_MODAL, { param })
  },

  toAddHotZone: ({ commit }) => {
    commit(TO_ADD_HOT_ZONE)
  },

  toDeleteHotZone: ({ commit }, { param }) => {
    commit(TO_DELETE_HOT_ZONE, { param })
  },

  toConfirmHotZoneCoupon: ({ commit }) => {
    commit(TO_CONFIRM_HOT_ZONE_COUPON)
  },

  toOpenHotZoneAssociatedLink: ({ commit }, { param }) => {
    commit(TO_OPEN_HOT_ZONE_ASSOCIATED_LINK, { param })
  },

  toSetImagesTextNavBgColor: ({ commit }, { param }) => {
    commit(TO_SET_IMAGES_TEXT_NAV_BG_COLOR, { param })
  },

  toSetImagesTextNavBgReset: ({ commit }) => {
    commit(TO_SET_IMAGES_TEXT_NAV_BG_RESET)
  },

  toSetImagesTextNavSliderSetting: ({ commit }, { param }) => {
    commit(TO_SET_IMAGES_TEXT_NAV_SLIDER_SETTING, { param })
  },

  toSetImagesTextNavTextColor: ({ commit }, { param }) => {
    commit(TO_SET_IMAGES_TEXT_NAV_TEXT_COLOR, { param })
  },

  toSetImagesTextNavTextReset: ({ commit }) => {
    commit(TO_SET_IMAGES_TEXT_NAV_TEXT_RESET)
  },

  toAddImagesTextNav: ({ commit }) => {
    commit(TO_ADD_IMAGES_TEXT_NAV)
  },

  toChangeImagesTextNavTemplate: ({ commit }, { param }) => {
    commit(TO_CHANGE_IMAGES_TEXT_NAV_TEMPLATE, { param })
  },

  toSetImagesTextNavScreenNumber: ({ commit }, { param }) => {
    commit(TO_SET_IMAGES_TEXT_NAV_SCREEN_NUMBER, { param })
  },

  toSetTextTextColor: ({ commit }, { param }) => {
    commit(TO_SET_TEXT_TEXT_COLOR, { param })
  },

  toSetTextBgColor: ({ commit }, { param }) => {
    commit(TO_SET_TEXT_BG_COLOR, { param })
  },

  toSetTextTextColorReset: ({ commit }) => {
    commit(TO_SET_TEXT_TEXT_COLOR_RESET)
  },

  toSetTextBgColorReset: ({ commit }) => {
    commit(TO_SET_TEXT_BG_COLOR_RESET)
  },

  toSetTextFontSize: ({ commit }, { param }) => {
    commit(TO_SET_TEXT_FONT_SIZE, { param })
  },

  toSetTextText: ({ commit }, { param }) => {
    commit(TO_SET_TEXT_TEXT, { param })
  },

  toSetTextTextAlign: ({ commit }, { param }) => {
    commit(TO_SET_TEXT_TEXT_ALIGN, { param })
  },

  toSetTextShowDividingLine: ({ commit }, { param }) => {
    commit(TO_SET_TEXT_SHOW_DIVIDING_LINE, { param })
  },

  toOpenDesignModal: ({ commit }, { param }) => {
    commit(TO_OPEN_DESIGN_MODAL, { param })
  },

  toCloseDesignModal: ({ commit }) => {
    commit(TO_CLOSE_DESIGN_MODAL)
  },

  toConfirmDesign: ({ commit }) => {
    commit(TO_CONFIRM_DESIGN)
  },

  toAddNewAssociated: ({ commit }) => {
    commit(TO_ADD_NEW_ASSOCIATED)
  },

  toSetTitleTitle: ({ commit }, { param }) => {
    commit(TO_SET_TITLE_TITLE, { param })
  },

  toSetTitleTemplate: ({ commit }, { param }) => {
    commit(TO_SET_TITLE_TEMPLATE, { param })
  },

  toSetTitleTextAlign: ({ commit }, { param }) => {
    commit(TO_SET_TITLE_TEXT_ALIGN, { param })
  },

  toSetTitleSubTitle: ({ commit }, { param }) => {
    commit(TO_SET_TITLE_SUB_TITLE, { param })
  },

  toSetTitleBgColor: ({ commit }, { param }) => {
    commit(TO_SET_TITLE_BG_COLOR, { param })
  },

  toSetTitleBgColorReset: ({ commit }) => {
    commit(TO_SET_TITLE_BG_COLOR_RESET)
  },

  toAddTitleTextNav: ({ commit }) => {
    commit(TO_ADD_TITLE_TEXT_NAV)
  },

  toDeleteTitleTextNav: ({ commit }) => {
    commit(TO_DELETE_TITLE_TEXT_NAV)
  },

  toSetTitleNavName: ({ commit }, { param }) => {
    commit(TO_SET_TITLE_NAV_NAME, { param })
  },

  toSetTitleDate: ({ commit }, { param }) => {
    commit(TO_SET_TITLE_DATE, { param })
  },

  toSetTitleAuthor: ({ commit }, { param }) => {
    commit(TO_SET_TITLE_AUTHOR, { param })
  },

  toSetTitleLinkSubTitle: ({ commit }, { param }) => {
    commit(TO_SET_TITLE_LINK_SUB_TITLE, { param })
  },

  toSetTitleLinkUrlType: ({ commit }, { param }) => {
    commit(TO_SET_TITLE_LINK_URL_TYPE, { param })
  },

  toSetCommoditySource: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_SOURCE, { param })
  },

  toSetCommodityGroupShow: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_GROUP_SHOW, { param })
  },

  toOpenCommodityModal: ({ commit }) => {
    commit(TO_OPEN_COMMODITY_MODAL)
  },

  toCloseCommodityModal: ({ commit }) => {
    commit(TO_CLOSE_COMMODITY_MODAL)
  },

  toConfirmCommodity: ({ commit }) => {
    commit(TO_CONFIRM_COMMODITY_MODAL)
  },

  toCommodityDeleteCommodity: ({ commit }, { param }) => {
    commit(TO_COMMODITY_DELETE_COMMODITY, { param })
  },

  toSetCommodityListStyle: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_LIST_STYLE, { param })
  },

  toSetCommodityPageMarigin: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_PAGE_MARIGIN, { param })
  },

  toSetCommodityCommodityMarigin: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_COMMODITY_MARIGIN, { param })
  },

  toSetCommodityCommodityStyle: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_COMMODITY_STYLE, { param })
  },

  toSetCommodityCommodityBorderRadius: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_COMMODITY_BORDER_RADIUS, { param })
  },

  toSetCommodityPictureRatio: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_PICTURE_RATIO, { param })
  },

  toSetCommodityPictureFill: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_PICTURE_FILL, { param })
  },

  toSetCommodityTextStyle: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_TEXT_STYLE, { param })
  },

  toSetCommodityTextAlign: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_TEXT_ALIGN, { param })
  },

  toSetCommodityShowContent: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_SHOW_CONTENT, { param })
  },

  toSetCommodityBuyStyle: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_BUY_STYLE, { param })
  },

  toSetCommodityBuyName: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_BUY_NAME, { param })
  },

  toSetCommodityBadge: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_BADGE, { param })
  },

  toAddBadgeImg: ({ commit }) => {
    commit(TO_ADD_BADGE_IMG)
  },

  toOpenCommodityGroupModal: ({ commit }) => {
    commit(TO_OPEN_COMMODITY_GROUP_MODAL)
  },

  toCloseCommodityGroupModal: ({ commit }) => {
    commit(TO_CLOSE_COMMODITY_GROUP_MODAL)
  },

  toCommodityDeleteCommodityGroup: ({ commit }, { param }) => {
    commit(TO_COMMODITY_DELETE_COMMODITY_GROUP, { param })
  },

  toConfirmCommodityGroup: ({ commit }) => {
    commit(TO_CONFIRM_COMMODITY_GROUP_MODAL)
  },

  toSetCommodityGroupShowAll: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_GROUP_SHOW_ALL, { param })
  },

  toSetCommodityGroupTemplate: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_GROUP_TEMPLATE, { param })
  },

  toSetCommodityGroupMenuStyle: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_GROUP_MENU_STYLE, { param })
  },

  toSetCommodityGroupMenuPosition: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_GROUP_MENU_POSITION, { param })
  },

  toSetCommodityGroupListStyle: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_GROUP_LIST_STYLE, { param })
  },

  toSetCommodityGroupPageMarigin: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_GROUP_PAGE_MARIGIN, { param })
  },

  toSetCommodityGroupCommodityMarigin: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_GROUP_COMMODITY_MARIGIN, { param })
  },

  toSetCommodityGroupCommodityStyle: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_GROUP_COMMODITY_STYLE, { param })
  },

  toSetCommodityGroupCommodityBorderRadius: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_GROUP_COMMODITY_BORDER_RADIUS, { param })
  },

  toSetCommodityGroupPictureRatio: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_GROUP_PICTURE_RATIO, { param })
  },

  toSetCommodityGroupPictureFill: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_GROUP_PICTURE_FILL, { param })
  },

  toSetCommodityGroupTextStyle: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_GROUP_TEXT_STYLE, { param })
  },

  toSetCommodityGroupTextAlign: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_GROUP_TEXT_ALIGN, { param })
  },

  toSetCommodityGroupShowContent: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_GROUP_SHOW_CONTENT, { param })
  },

  toSetCommodityGroupBuyStyle: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_GROUP_BUY_STYLE, { param })
  },

  toSetCommodityGroupBuyName: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_GROUP_BUY_NAME, { param })
  },

  toSetCommodityGroupBadge: ({ commit }, { param }) => {
    commit(TO_SET_COMMODITY_GROUP_BADGE, { param })
  },

  toSetCouponAddWay: ({ commit }, { param }) => {
    commit(TO_SET_COUPON_ADD_WAY, { param })
  },

  toSetCouponNumberType: ({ commit }, { param }) => {
    commit(TO_SET_COUPON_NUMBER_TYPE, { param })
  },

  toSetCouponNumber: ({ commit }, { param }) => {
    commit(TO_SET_COUPON_NUMBER, { param })
  },

  toSetCouponHideCannotShare: ({ commit }, { param }) => {
    commit(TO_SET_COUPON_HIDE_CANNOT_SHARE, { param })
  },

  toSetCouponStyle: ({ commit }, { param }) => {
    commit(TO_SET_COUPON_STYLE, { param })
  },

  toSetCouponColor: ({ commit }, { param }) => {
    commit(TO_SET_COUPON_COLOR, { param })
  },

  toSetCouponHideFinished: ({ commit }, { param }) => {
    commit(TO_SET_COUPON_HIDE_FINISHED, { param })
  },

  toOpenCouponModal: ({ commit }) => {
    commit(TO_OPEN_COUPON_MODAL)
  },

  toCloseCouponModal: ({ commit }) => {
    commit(TO_CLOSE_COUPON_MODAL)
  },

  toConfirmCoupon: ({ commit }) => {
    commit(TO_CONFIRM_COUPON_MODAL)
  },

  toDeleteCoupon: ({ commit }, { param }) => {
    commit(TO_DELETE_COUPON, { param })
  },

  toSaveDesign: () => {
    // console.log(state.previewItems);
  },

  toSetDesignTitleTitle: ({ commit }, { param }) => {
    commit(TO_SET_DESIGN_TITLE_TITLE, { param })
  },

  toSetDesignTitleDesc: ({ commit }, { param }) => {
    commit(TO_SET_DESIGN_TITLE_DESC, { param })
  },

  toSetDesignTitleBgColor: ({ commit }, { param }) => {
    commit(TO_SET_DESIGN_TITLE_BG_COLOR, { param })
  },

  toSetDesignTitleBgColorReset: ({ commit }) => {
    commit(TO_SET_DESIGN_TITLE_BG_COLOR_RESET)
  },

  toHotZoneCloseAll: ({ commit }) => {
    commit(TO_HOT_ZONE_CLOSE_ALL)
  },

  toSetImgsAdsBackgroundImg: ({ commit }, { param }) => {
    commit(TO_SET_IMGS_ADS_BACKGROUND_IMG, { param })
  },

  toSetTemplateTitleTitle: ({ commit }, { param }) => {
    commit(TO_SET_TEMPLATE_TITLE_TITLE, { param })
  },

  toSetTemplateTitleStyle: ({ commit }, { param }) => {
    commit(TO_SET_TEMPLATE_TITLE_STYLE, { param })
  }
}

export default {
  state, mutations, getters, actions
}
