/*
引用地址https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/amap.js
*/
// 2024-06-11 20:25

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
try{
  if (url.includes("/boss/car/order/content_info")) {
    // 打车页面
    if (obj?.data?.lubanData?.skin?.dataList?.length > 0) {
      // oss营销皮肤
      obj.data.lubanData.skin.dataList = [];
    }
  } else if (url.includes("/boss/order_web/friendly_information")) {
    // 打车页面
    const items = ["banners", "carouselTips", "integratedBanners", "integratedTips", "skins", "skinAndTips", "tips"];
    if (obj?.data?.["105"]) {
      for (let i of items) {
        delete obj.data["105"][i];
      }
    }
  } else if (url.includes("/boss/order/car/feedback/get_card_questions")) {
    // 订单反馈页面
    if (obj?.data?.questionInfo?.length>0) {
      obj.data.questionInfo = []
    }
  }else if (url.includes("/faas/amap-navigation/card-service-plan-home")) {
    // 路线规划页
    if (obj?.data?.children?.length > 0) {
      // 有schema参数的为推广
      obj.data.children = obj.data.children.filter((i) => !i.hasOwnProperty("schema"));
    }
  } else if (url.includes("/faas/amap-navigation/main-page")) {
    // 首页底部卡片
    if (obj?.data?.cardList?.length > 0) {
      obj.data.cardList = obj.data.cardList.filter(
        (i) =>
          i?.dataKey === "ContinueNavigationCard" || // 继续导航
          i?.dataKey === "FrequentLocation" || // 常去地点
          i?.dataKey === "LoginCard" // 登陆卡片
      );
    }
    if (obj?.data?.mapBizList?.length > 0) {
      obj.data.mapBizList = obj.data.mapBizList.filter(
        (i) => i?.dataKey === "FindCarVirtualCard" // 显示关联车辆位置
      );
    }
  } else if (url.includes("/perception/drive/routeInfo")) {
    // 导航详情页
    if (obj?.data?.tbt?.event?.length > 0) {
      obj.data.tbt.event = obj.data.tbt.event.filter((i) => !/ads-\d+/.test(i?.dynamic_id_s));
    }
    if (obj?.data?.front_end) {
      if (obj?.data?.front_end?.guide_tips?.length > 0) {
        // 音乐底栏
        obj.data.front_end.guide_tips = obj.data.front_end.guide_tips.filter((i) => i?.biz_type !== "music");
      }
      if (obj?.data?.front_end?.assistant) {
        // 助手皮肤
        delete obj.data.front_end.assistant;
      }
      if (obj?.data?.front_end?.download?.length > 0) {
        // 导航插播语音广告
        obj.data.front_end.download = obj.data.front_end.download.filter((i) => !/ads-\d+/.test(i?.dynamic_id_s));
      }
    }
  } else if (url.includes("/perception/drive/routePlan")) {
    // 路线规划页
    const items = [
      "assistant", // 左上角悬浮动图
      "global_guide_data",
      "route_search",
      "start_button_tips" // 开始导航 悬浮提示 全国车道级
    ];
    if (obj?.data?.front_end) {
      for (let i of items) {
        delete obj.data.front_end[i];
      }
    }
    if (obj?.data?.tbt?.event?.length > 0) {
      // 导航插播语音广告
      obj.data.tbt.event = obj.data.tbt.event.filter((i) => !/ads-\d+/.test(i?.dynamic_id_s));
    }
    if (obj?.data?.front_end?.download?.length > 0) {
      // 导航插播语音广告
      obj.data.front_end.download = obj.data.front_end.download.filter((i) => !/ads-\d+/.test(i?.dynamic_id_s));
    }
  } else if (url.includes("/promotion-web/resource")) {
    // 打车页面
    const items = [
      "alpha", // 出行优惠套餐
      "banner",
      "bravo", // 第三方推广 喜马拉雅月卡
      "bubble",
      "charlie", // 横版推广 单单立减 领专属优惠 体验问卷
      "icon",
      "other",
      "popup",
      "push", // 顶部通知 发单立享优惠
      "tips"
    ];
    if (obj?.data) {
      for (let i of items) {
        delete obj.data[i];
      }
    }
  } else if (url.includes("/sharedtrip/taxi/order_detail_car_tips")) {
    // 打车页
    if (obj.data?.carTips?.data?.popupInfo) {
      delete obj.data.carTips.data.popupInfo;
    }
  } else if (url.includes("/shield/dsp/profile/index/nodefaasv3")) {
    // 我的页面
    if (obj?.data?.cardList?.length > 0) {
      let dataKeys = ["MyOrderCard","GdRecommendCard","MapMiniProgramCard2","SceneVehicleCard_recommend"]
      obj.data.cardList = obj.data.cardList.filter((i) => dataKeys.includes(i?.dataKey));
    }
    if (obj?.data?.tipData) {
      delete obj.data.tipData;
    }
    // 足迹
    // if (obj.data.footPrintV2) {
    //   delete obj.data.footPrintV2;
    // }
    // 成就勋章 lv1见习达人
    if (obj?.data?.memberInfo) {
      delete obj.data.memberInfo;
    }
  } else if (url.includes("/shield/frogserver/aocs")) {
    // 整体图层
    const items = [
      // "ARWalkNavi", // AR导航
      // "Clipboard", // 剪贴板
      // "DIYMap", // DIY地图
      // "GuiJi", // 轨迹
      "Naviendpage_Searchwords",
      "SplashScreenControl",
      "TipsTaxiButton",
      // "TrainOrderBanner", // 火车票订单
      // "_testmark_info",
      // "_user_profile_",
      // "air_card",
      // "amap_basemap_config", // 基本库
      "amapCoin",
      // "aos_feedback",
      // "app_improve", // app改进
      // "apple_location_log_collect",
      // "collect",
      // "comment_info",
      // "deviceml_force_recommend",
      // "deviceml_update_apk_conf",
      "feedback_banner", // 店主专属通道
      "footprint", // 足迹
      // "gd_code_cover",
      // "gd_notch_logo",
      "his_input_tip",
      "home_business_position_config", // 首页右上角动图
      // "homepage_resource_config",
      // "hotcity", // 热门城市
      "hotel_activity",
      "hotel_fillin_opt",
      "hotel_loop",
      // "hotel_portal",
      "hotel_tipsicon",
      "hotsaleConfig", // 酒店限时抢购
      // "icon_show",
      // "info_env_setting",
      // "ip_square",
      // "ip_square_share",
      // "isNewSearchMapCard", // 可能是足迹
      // "isPoiBubbleDisplay",
      // "lab_beta",
      // "lab_screenrecording",
      "landing_page_info", // 发现吃喝玩乐好去处
      // "list_action_drawer",
      // "listguide",
      // "map_environment_air",
      // "map_weather_switch", // 天气
      // "maplayers", // 赏花地图
      // "message_tab",
      "navi_end", // 导航结束 领油滴
      // "nearby",
      "nearby_business_popup",
      "nearby_map_entry_guide",
      "nearby_map_pull_down_guide",
      // "newcommentreply",
      // "nore_rec",
      "operation_layer", // 首页右上角图层
      // "photo_with_location",
      // "poi_rec",
      // "preword",
      // "profileHeaderPic",
      // "profiletTopBtn",
      // "recommend_api",
      // "recommend_key",
      // "redesign_user",
      // "renovate_control", // 今夜特价
      "route_banner", // 搜索路线 免费抽机票
      "routeresult_banner",
      "search_homepage",
      "search_keyword",
      "search_moni",
      "search_perf",
      "search_poi_recommend",
      "search_service_adcode",
      "search_word",
      "small_biz_b2b_kb", // 入驻高德
      "small_biz_case", // 推广
      "small_biz_fun",
      "small_biz_index",
      "small_biz_news",
      "splashscreen",
      "splashview_config",
      "sur_bar", // 十一特惠
      "taxi_activity", // 打车活动
      // "tel_retention_popup",
      "testflight_adiu",
      "tf_remind", // tf测试版
      // "third_party_places",
      "tips_bar_black_list",
      // "tips_hook",
      // "trackupload",
      // "user_insight", // 您对本次导航满意吗
      "vip"
      // "weather_restrict_config",
    ];
    if (obj?.data) {
      for (let i of items) {
        if (obj?.data?.[i]) {
          obj.data[i] = { status: 1, version: "", value: "" };
        }
      }
    }
    if(obj?.data?.favorites_info?.value){
      // banner
      let favorites_info = JSON.parse(obj?.data?.favorites_info?.value);
      favorites_info.guide_banner_info = {data:{}};
      
      if(favorites_info?.create_desc?.other){
        favorites_info.create_desc.other.recommend_examples.public = [];
        favorites_info.create_desc.other.private = "私密";
        favorites_info.create_desc.other.public = "公开";
        favorites_info.create_desc.other.input_placeholder.private = "请输入地点标题";
        favorites_info.create_desc.other.input_placeholder.public = "请输入地点标题";
        favorites_info.create_desc.other.activity = {};
      }
      if(favorites_info?.create_desc?.route){
        favorites_info.create_desc.route.recommend_examples.public = [];
        favorites_info.create_desc.route.private = "私密";
        favorites_info.create_desc.route.public = "公开";
        favorites_info.create_desc.route.input_placeholder.private = "请输入路线标题";
        favorites_info.create_desc.route.input_placeholder.public = "请输入路线标题";
        favorites_info.create_desc.route.activity = {};
      }
      if(favorites_info?.create_desc?.poi_detail){
        favorites_info.create_desc.poi_detail.private = "私密";
        favorites_info.create_desc.poi_detail.public = "公开";
      }

      obj.data.favorites_info.value = JSON.stringify(favorites_info);
    }

  } else if (url.includes("/shield/search/common/coupon/info")) {
    if (obj?.data) {
      obj.data = {};
    }
  } else if (url.includes("/shield/search/nearbyrec_smart")) {
    // 附近页面
    const items = ["head", "search_hot_words", "feed_rec"];
    if (obj?.data?.modules?.length > 0) {
        obj.data.modules = obj.data.modules.filter((i) => items?.includes(i));
    }
  } else if (url.includes("/shield/search/poi/detail")) {
    // 搜索结果 模块详情
    const items = [
      "CouponBanner", // 高德红包
      // "anchor",
      "adv_compliance_info", // 服务提供方
      "adv_gift",
      // "base_info",
      "bigListBizRec", // 周边景点推荐 三张景点大图
      "bottomDescription", // 底部描述 高德酒店 全网比价
      // "brand_introduction",
      "brand_shop_bar",
      // "brand_story",
      "checkIn",
      "check_in", // 足迹打卡
      "cityCardFeed", // 景点卡片
      // "cityPhoto", // 城市照片
      "city_discount", // 专业老师在线答疑
      "claim", // 立即认领 管理店铺
      "co_branded_card",
      "collector_guide", // 游玩的图文指南
      "common_coupon_bar", // 领券条幅 新客专享 省钱卡
      "common_coupon_card", // 优惠券卡片
      // "companyInfo", // 简介
      "comprehensiveEditEntrance", // 编辑地点信息
      // "consultancy",
      "contributor", // 地点贡献
      // "coupon_allowance",
      // "coupon_entrance",
      "cpt_service_shop", //买卖二手房
      // "craftsman_entry",
      // "crowd_index", // 人流量情况
      "dayTripList", // 热门一日游
      // "detailFeedCommodity",
      // "detail_bottom_shop_service",
      "discount_commodity", // 优惠团购
      "divergentRecommendModule", // 你可能还喜欢
      // "evaluate", // 高德出行评分
      // "events",
      "everyOneToSee", // 大家还在看
      "feedback", // 问题反馈
      "first_surround_estate_tab", // 周边小区
      // "floor_guide_second", // 楼层导览
      // "footer_logo",
      // "foreclosurehouse",
      // "gallery_info", // 现场照片
      // "ggc_entry",
      "horizontalGoodsShelf",
      "hotPlay", // 热门玩法
      "hot_new_house_estate",
      "hot_shop",
      "hotelCoupon",
      "hotelList", // 热门酒店
      "hotelMustRead", // 订房必读
      // "hotelRooms", // 酒店所有房间
      // "hourHotelRooms", // 钟点房
      "houseList",
      "houseOfficeBrandIntroduction",
      "houseOfficeInfo",
      "houseOfficeNotice",
      "houseOfficeService",
      "house_apart_info",
      "house_buying_agent",
      "house_coupon",
      "house_cp_clues",
      "house_cpt_coupon",
      "house_cpt_grab",
      "house_price",
      "house_rent_sale_agency",
      // "human_traffic", // 人流量情况 有统计图
      "image_banner",
      "legSameIndustryRecEntrance", // 全城最热景点推荐
      "legal_document", // 房源法律信息
      "listBizRec_1",
      "listBizRec_2", // 周边餐饮
      "matrix_banner", // 高德车服
      "merchantSettlement", // 商家店铺管理
      "membership", // 高德菲住卡 会员项目
      "mini_hook_shelf", // 购票迷你模块
      "movie_info", // 优惠购票 景点宣传片
      "multi_page_anchor", // 二级导航菜单 门票 评论 推荐
      // "navbarMore", // 右上角三点
      // "nearbyRecommendModule", // 周边推荐
      "nearby_house",
      "nearby_new_house_estate",
      "nearby_office_estate",
      "nearby_old_sell_estate",
      "nearby_play_rec", // 附近玩乐项目
      "newGuest", // 新客专享
      "newRelatedRecommends", // 探索周边
      "new_operation_banner", // 精选活动 高德的推广
      "newsellhouse",
      // "normal_nav_bar", // 右上角图标 客服 反馈
      // "notification",
      "officerenthouse",
      "officesellhouse",
      "official_account", // 其他平台官方账号
      "oldsellhouse",
      // "opentime", // 营业时间
      "operation_banner", // 横版图片推广
      "operator_card",
      "packageShelf", // 附近酒景推荐
      "parentBizRec",
      "parentPoiRecEntrance", // 所在商圈
      "poster_banner",
      // "poi_intercept",
      "portal_entrance", // 高德旅游版块 引流到旅游频道
      // "question_answer_card", // 问问 地点附近的热门问题
      "quickLink", // 地点详情页图标 酒店 景点 热榜
      "relatedRecommends", // 附近同类型酒店
      // "realtorRealStep",
      "renthouse",
      "rentsaleagencyv2",
      "rentsaleagencyv3",
      "rentsalehouse",
      "residentialOwners", // 小区业主
      // "reviews", // 用户评价
      // "roomSelect", // 选择订房日期 悬浮菜单
      "sameIndustryRecommendModule",
      "sameIndustry2RecommendModule",
      // "same_price_new_estate",
      "scenic_coupon", // 优惠券过期提示
      "scenic_filter", // 购票悬浮菜单 可定明日 随时退
      // "scenic_guide",
      // "scenic_helper", // 景区助手 开放时间 旺季 淡季
      // "scenic_knowledge",
      "scenic_lifeservices", // 吃住购娱 餐厅 购物
      "scenic_mustplay", // 必游景点 四张景点大图
      // "scenic_parking",
      "scenic_play_guide", // 景区攻略 游玩攻略 交通攻略
      "scenic_recommend", // 景点建议
      // "scenic_route",
      // "scenic_route_intelligent", // 推荐游玩线路
      // "scenic_service",
      // "scenic_ski", // 滑雪攻略 雪道数量 设施及服务
      // "scenic_story",
      // "scenic_ticket", // 购票
      // "scenic_ticket_activity", // 购票活动
      "scenic_voice", // 语音讲解 付费的项目
      "searchPlaMap", // 周边推荐
      "second_surround_estate_tab", // 周边房产
      "service_shop", // 中介门店
      // "shop_news",
      "smallListBizRec", // 周边热门酒店
      "smallOrListBizRec",
      "surroundOldSellHouse", // 同城二手房
      "surroundRentHouse", // 附近租房
      "surround_facility",
      "surround_facility_new",
      "surround_house_tab",
      "surround_oldsellhouse",
      "surround_renthouse",
      "surround_rentoffice",
      "surround_selloffice",
      // "traffic", // 交通出行 地铁站 公交站 停车场
      "travelGuideRec", // 人气景点 路线 购票
      "uploadBar",
      "upload_bar", // 上传照片
      "verification", // 商家已入驻
      // "video",
      "waistRecEntrance", // 更多人气好去处
      "waterFallFeed", // 附近景点瀑布流
      "waterFallFeedTitle", // 更多好去处标题
      "poiDetailWaterFeed", // 更多好去处
      "poiDetailWaterFeedTitle", // 地址详情最下面更多好去处标题
      "platformCustomerCommonModule", // 医疗添加的模块【可能需要的其他医疗服务】
      "platformCustomerComplianceInfo", // 本服务由高德精选商家提供 提示文字
      "similarShopRecommend", // 同类店铺推荐
      "yellowPageAdRecommendModule", // 好物推荐
      "similarShelfRecommend", // 附近相似好店
      "poiDetailNewBeltV2", // 景点标头高德红包行
      "rentSaleHouse", // 小区买房卖房，出租租房电话行
      "cpt_service_simple", // 出租租房在线问行
      "detail_bottom_shop_service", // 出租租房在线底部固定行
      "hkfCalendarRecommend", // 春节火车票优惠订
      // "hkfMiniPortal", // 订火车票 订票页面 飞机 火车 汽车
      "societyPublicExperience", // 地图共建
      "hkfTicketShelf", // 火车站详情页，自动查询的火车票列表
      // "evaluateVO", // 菜品
      // "travelGuideAndQa", // 问大家
      "kaMarketingCampaign", // 竞争营销，比如小米详情是apple店活动
      // "commonGoodsShelf", // 商品列表，第三方链接，比如海底捞有抖音券的列表
    ];
    if (obj?.data?.modules) {
      for (let i of items) {
        delete obj.data.modules[i];
      }
    }

    // 调整用户评价模块
    if(obj?.data?.modules && obj.data.modules?.reviews){
      if(obj.data.modules?.reviews?.data?.write_comment){
        // 评价按钮修改文案
        
        obj.data.modules?.reviews?.data.write_comment.title = `<font color='#000000DE' size='32'>${obj.data.modules?.reviews?.data.write_comment.display_tips[0]}</font>`
        obj.data.modules?.reviews?.data.write_comment.display_tips = []
      }
    }

  } else if (url.includes("/shield/search_business/process/marketingOperationStructured")) {
    // 详情页 顶部优惠横幅
    if (obj?.data?.tipsOperationLocation) {
      delete obj.data.tipsOperationLocation;
    }
    if (obj?.data?.resourcePlacement) {
      delete obj.data.resourcePlacement;
    }
  } else if (url.includes("/shield/search_poi/homepage")) {
    // 首页 搜索框历史记录 推广标签
    if (obj?.history_tags) {
      delete obj.history_tags;
    }
  } else if (url.includes("/shield/search_poi/search/sp") || url.includes("/shield/search_poi/mps")) {
    if (obj?.data?.list_data) {
      let list = obj.data.list_data.content[0];
      // 详情页 底部 房产推广
      if (list?.hookInfo) {
        let hookData = list.hookInfo.data;
        if (hookData?.header) {
          delete hookData.header;
        }
        if (hookData?.house_info) {
          delete hookData.house_info;
        }
      }
      // 详情页 底部 订酒店
      if (list?.map_bottom_bar?.hotel) {
        delete list.map_bottom_bar.hotel;
      }
      if (list?.poi?.item_info?.tips_bottombar_button?.hotel) {
        delete list.poi.item_info.tips_bottombar_button.hotel;
      }
      // 地图优惠推广
      if (list?.map?.main_point) {
        delete list.map.main_point;
      }
      if (list?.tips_operation_info) {
        delete list.tips_operation_info;
      }
      if (list?.bottom?.bottombar_button?.hotel) {
        delete list.bottom.bottombar_button.hotel;
      }
      // 搜索页 顶部卡片
      if (list?.card?.card_id === "SearchCardBrand" && list?.item_type === "brandAdCard") {
        delete list.card;
      }
      if (list?.card?.card_id === "NearbyGroupBuy" && list?.item_type === "toplist") {
        delete list.card;
      }
      if (list?.card?.card_id === "ImageBanner" && list?.item_type === "ImageBanner") {
        delete list.card;
      }
    } else if (obj?.data?.district?.poi_list) {
      // 搜索列表详情页
      let poi = obj.data.district.poi_list[0];
      // 订票横幅
      if (poi?.transportation) {
        delete poi.transportation;
      }
      // 景点门票 酒店特惠 特色美食 休闲玩乐
      if (poi?.feed_rec_tab) {
        delete poi.feed_rec_tab;
      }
    } else if (obj?.data?.modules) {
      if (obj?.data?.modules?.not_parse_result?.data?.list_data) {
        let list = obj.data.modules.not_parse_result.data.list_data.content[0];
        // 详情页 底部 房产推广
        if (list?.hookInfo) {
          let hookData = list.hookInfo.data;
          if (hookData?.header) {
            delete hookData.header;
          }
          if (hookData?.house_info) {
            delete hookData.house_info;
          }
        }
        // 详情页 底部 订酒店
        if (list?.map_bottom_bar?.hotel) {
          delete list.map_bottom_bar.hotel;
        }
        if (list?.poi?.item_info?.tips_bottombar_button?.hotel) {
          delete list.poi.item_info.tips_bottombar_button.hotel;
        }
        // 地图优惠推广
        if (list?.map?.main_point) {
          delete list.map.main_point;
        }
        // 左上角动图推广
        if (list?.tips_operation_info) {
          delete list.tips_operation_info;
        }
        if (list?.bottom?.bottombar_button?.hotel) {
          delete list.bottom.bottombar_button.hotel;
        }
      }
      if (obj?.data?.modules?.list_data?.data) {
        // 搜索列表
        let list = obj.data.modules.list_data.data;
        if (list?.content?.length > 0) {
          // brandAdCard广告卡片 toplist_al人气榜单 高德指南
          list.content = list.content.filter((i) => !["brandAdCard", "toplist_al"]?.includes(i?.item_type));
        }
      }
    }
  } else if (url.includes("/shield/search_poi/sug")) {
    if (obj?.tip_list) {
      let newLists = [];
      if (obj?.tip_list?.length > 0) {
        for (let item of obj.tip_list) {
          if (
            ["12"]?.includes(item?.tip?.datatype_spec) ||
            ["ad", "poi_ad", "toplist"]?.includes(item?.tip?.result_type) ||
            ["ad", "exct_query_sug_merge_theme", "query_sug_merge_theme", "sp"]?.includes(item?.tip?.task_tag)
          ) {
            continue;
          } else {
            newLists.push(item);
          }
        }
        obj.tip_list = newLists;
      }
    } else if (obj?.city_list) {
      let newLists = [];
      if (obj?.city_list?.length > 0) {
        for (let item of obj.city_list) {
          let newTips = [];
          if (item?.tip_list?.length > 0) {
            for (let ii of item.tip_list) {
              if (["12"]?.includes(ii?.tip?.datatype_spec)) {
                continue;
              } else if (["ad", "poi_ad"]?.includes(ii?.tip?.result_type)) {
                continue;
              } else {
                newTips.push(ii);
              }
            }
            item.tip_list = newTips;
          }
          newLists.push(item);
        }
        obj.city_list = newLists;
      }
    }
  } else if (url.includes("/shield/search_poi/tips_operation_location")) {
    // 搜索页面 底部结果上方窄横幅
    if (obj?.data?.coupon) {
      delete obj.data.coupon;
    }
    const items = [
      "belt",
      "common_float_bar",
      "common_image_banner",
      "coupon_discount_float_bar",
      "coupon_float_bar",
      "discount_coupon",
      "image_cover_bar",
      "mood_coupon_banner",
      "operation_brand",
      "promotion_wrap_card",
      "tips_top_banner"
    ];
    if (obj?.data?.modules) {
      for (let i of items) {
        delete obj.data.modules[i];
      }
    }
  } else if (url.includes("/valueadded/alimama/splash_screen")) {
    // 开屏广告
    if (obj?.data?.ad?.length > 0) {
      for (let item of obj.data.ad) {
        item.set.setting.display_time = 0;
        item.creative[0].start_time = 3818332800; // Unix 时间戳 2090-12-31 00:00:00
        item.creative[0].end_time = 3818419199; // Unix 时间戳 2090-12-31 23:59:59
      }
    }
  } else if (url.includes("/ws/c3frontend/af-nearby/nearby")) {
    // 写笔记悬浮按钮
    if(obj?.data?.regions?.widget?.length > 0){
      obj.data.regions.widget = [];
    }
    // 头部banner
    if(obj?.data?.regions?.content?.length > 0){
      obj.data.regions.content = obj.data.regions.content.filter(item => item !== 'banner');
    }

    // 附近页，去除广告卡片
    if(obj?.data?.modules?.feedRec?.data?.list?.length > 0){
      obj.data.modules.feedRec.data.list = obj.data.modules.feedRec.data.list.filter(item => item?.data?.log_param?.is_ad !== '1');
      obj.data.modules.feedRec.data.list = obj.data.modules.feedRec.data.list.map(item=>{
        item.data.recommend_info = {};
        item.data.urgency_info = '';
        item.data.hot_info = '';
        item.data.hot_info_recommend = [];
        item.data.liveness = '';
        if(item?.img_info){
          item.img_info.icon_text = '';
          item.img_info.video_src = '';
          item.img_info.ad_text_loc = 0;
        }
        if(item?.price_info){
          delete item.price_info.orignal_price;
          delete item.price_info.discount_num;
          delete item.price_info.discount_num_suffix;
          item.price_info.discount_tags = '';
        }
        if(item?.product_info?.length > 0){
          item.product_info.map(i=>{
            delete i.orignal_price;
            delete i.discount_num;
            delete i.discount_num_suffix;
            i.discount_tag = {};
            i.price_off = '';
            i.icon_text = '';
            return i;
          });
        }
        if(item?.rank_info){
          item.rank_info.rank_no = '';
          item.rank_info.customRankNo = '';
          item.rank_info.customRankName = '';
          item.rank_info.rank_name_new = '';
          item.rank_info.poi_list_icon = '';
        }
        return item;
      });
    }
  } else if (url.includes("/ws/activity/user_asset/overview")) {
    // 去除角标、描述
    if(obj?.data?.big_tab_info?.list?.length > 0){
      for (let item of obj.data.big_tab_info.list) {
        item.hot = "";
        if (item.name === '钱包') {
          item.desc = "";
        }
      }
    }
    // 去除banner
    if(obj?.data?.aggregation_banners?.length > 0){
      obj.data.aggregation_banners = [];
    }
  } else if (url.includes("/ws/user/theme/v3/feeds")) {
    // 主题页面
    // 去除收费语音
    if(obj?.data?.length > 0){
      obj.data = obj.data.filter((i) => {
        if(i.cardData?.expData?.isPaid === true){
          return false;
        }
        return true;
      });
    }
  } else if (url.includes("/ws/shield/search_business/process/home")) {
    // 车主中心
    // 顶部按钮
    if(obj?.data?.materials?.data?.configs){
      obj.data.materials.data.configs.carcenter_HeaderIconList.showItemNumber = "1";
      obj.data.materials.data.configs.carcenter_HeaderIconList.list = obj.data.materials.data.configs.carcenter_HeaderIconList.list.filter((item)=>item.text!=='优惠券' && item.text!=='黑卡会员');
    }
    // 商品列表
    obj.data.operation.data.activity = {};
    obj.data.resourcePlacement.data.materialList = [];
  } else if (url.includes("/ws/shield/search_business/process/product_detail")) {
    // 订票详情页
    // 顶部按钮
    if(obj?.data?.structShelf?.data[0]?.shelf?.list[0]?.list[0].list.length > 0 && obj?.data?.structShelf?.data[0]?.shelfType == 'trainSecPage'){
      obj.data.structShelf.data[0].shelf.list[0].list[0].list = obj.data.structShelf.data[0].shelf.list[0].list[0].list.filter(item=>{
        return item.productInfo.description.includes('需登录');
      });
    }
  } else if (url.includes("/ws/shield/search_business/process/poiDetail")) {
    // 商场楼层导航列表
    if(obj?.data?.floor_guide?.data?.items?.length > 0){
      // 去除评论、商品
      for(var item of obj?.data?.floor_guide?.data?.items){
        delete item.productsInfo
        item.recReason = {}
      }
    }
  } else if (url.includes("/ws/shield/search_business/process/fill_order")) {
    // 订票详情页
    // 下面保险购买
    if(obj?.data?.productTying?.data?.complexProduct?.length > 0){
      obj.data.productTying = {}
      // obj.data.productTying.data.complexProduct = []
    }
  } else if (url.includes("/ws/shield/search/scenic_portal")) {
    // 景区门票
    // 头部
    if(obj?.data?.gbf_result?.data?.operation?.data?.operationActivityEnter?.length > 0){
      obj.data.gbf_result.data.operation.data.operationActivityEnter = [];
    }
    // 四个按钮
    if(obj?.data?.modules?.navigation_entry?.data?.list?.length > 0){
      obj.data.modules.navigation_entry.data.list = [];
    }
  } else if (url.includes("/ws/shield/search_bff/portal/hkf")) {
    // 火车飞机
    
    // 推荐线路
    if(obj?.data?.modules?.hkf_mini_list?.data?.searchList?.routeBlocks?.length > 0){
      obj.data.modules.hkf_mini_list.data.searchList.routeBlocks = [];
    }
    // 查询下面的三个按钮
    if(obj?.data?.modules?.navigationEntry?.data?.list?.length > 0){
      obj.data.modules.navigationEntry.data.list = [];
    }
    // 头部
    if(obj?.data?.modules?.BannerList?.data?.bannerList?.length > 0){
      obj.data.modules.BannerList.data.bannerList = [];
    }
    // 去除推荐航班
    if(obj?.data?.regions?.content?.length > 0){
      let dispCard = ['hkfScheduleRecommend']
      obj.data.regions.content = obj.data.regions.content.filter((i)=> !dispCard.includes(i));
    }
    // 去除推荐航班
    if(obj?.data?.modules?.hkfScheduleRecommend?.data?.modules?.contentList?.items?.length > 0){
      obj.data.modules.hkfScheduleRecommend.data.modules.contentList.items = [];
    }
    // 去除推荐机票卡
    if(obj?.data?.modules?.airTicketPassRecommend?.data?.list?.length > 0){
      obj.data.modules.airTicketPassRecommend.data.list = [];
    }
    // 去除查询按钮气泡
    if(obj?.data?.modules?.hkf_route?.data?.bubble?.text){
      obj.data.modules.hkf_route.data.bubble.text = '';
    }
  } else if (url.includes("/ws/shield/search_bff/portal/hotel")) {
    // 酒店民宿
    
    // 去除页面无用元素
    if(obj?.data?.content?.length > 0){
      let dispCard = ['portal_resume','coupon_card','navigation_entry','operation_entry','operation_entry_without_rank']
      obj.data.content = obj.data.content.filter((i)=> !dispCard.includes(i));
    }
    // 搜索词下面的推荐词
    if(obj?.data?.modules?.user_filter_card?.data?.landmark_data?.recommend_words?.data?.length > 0){
      obj.data.modules.user_filter_card.data.landmark_data.recommend_words.data = [];
    }
    // 上方卡片的下面四个词
    if(obj?.data?.modules?.user_filter_card?.data?.service_data?.length > 0){
      obj.data.modules.user_filter_card.data.service_data = [];
    }
    // 去除酒店卡片无用图标
    if(obj?.data?.modules?.hotel_list?.data?.poi_list?.length > 0){
      for (let item of obj.data.modules.hotel_list.data.poi_list) {
        // 推荐评价
        if(item?.card?.data?.recommend_info){
          item.card.data.recommend_info = {};
        }
        // 卡片无用图标
        if(item?.card?.data?.img_info){
          item.card.data.img_info.pic_src = "";
          item.card.data.img_info.video_src = "";
          item.card.data.img_info.ad_text_loc = 0;
        }
        // 卡片价格
        if(item?.card?.data?.basic_info?.price_info){
          item.card.data.basic_info.price_info.discount_tags = [];
          delete item.card.data.basic_info.price_info.old_price;
        }
        //酒店排名信息
        if(item?.card?.data?.rank_info){
          item.card.data.rank_info.rank_no = "";
          item.card.data.rank_info.poi_list_icon = "";
        }
      }
    }
    // 四个小卡片
    if(obj?.data?.modules?.navigation_entry?.data?.list?.length > 0){
      obj.data.modules.navigation_entry.data.list = [];
    }
  } else if (url.includes("/ws/c3frontend/af-hotel/page/main")) {
    // 酒店民宿
    
    // 去除页面无用元素
    if(obj?.data?.regions?.content?.length > 0){
      let dispCard = ['hotWordsRecommend','portal_resume','CouponPortalCard','navigation_entry','operation_entry','operation_entry_without_rank']
      obj.data.regions.content = obj.data.regions.content.filter((i)=> !dispCard.includes(i));

      let dispWidget = ['CouponWidget'];
      obj.data.regions.widget = obj.data.regions.widget.filter((i)=> !dispWidget.includes(i));
    }
    // 去除酒店推荐搜索词
    if(obj?.data?.modules?.user_filter_card?.data?.sug_items_data?.data?.length > 0){
      obj.data.modules.user_filter_card.data.sug_items_data.data = [];
    }
    
    // 去除搜索卡片下方小字
    if(obj?.data?.modules?.user_filter_card?.data?.service_data?.length > 0){
      obj.data.modules.user_filter_card.data.service_data = [];
    }
    
    // 去除酒店页面banner
    if(obj?.data?.modules?.user_filter_card?.data?.bannerList?.length > 0){
      obj.data.modules.user_filter_card.data.bannerList = [];
    }
    // 
    if(obj?.data?.modules?.CouponPortalCard){
      delete obj.data.modules.CouponPortalCard;
    }
    
    if(obj?.data?.modules?.CouponPopup){
      delete obj.data.modules.CouponPopup;
    }
    
    // 去除酒店卡片无用图标
    if(obj?.data?.modules?.hotel_list?.data?.poi_list?.length > 0){
      obj.data.modules.hotel_list.data.poi_list = obj.data.modules.hotel_list.data.poi_list.filter(item => item?.card?.data?.poi?.is_ad !== '1');

      for (let item of obj.data.modules.hotel_list.data.poi_list) {
        // 推荐评价
        if(item?.card?.data?.recommend_info){
          item.card.data.recommend_info = {};
        }
        // 卡片无用图标
        if(item?.card?.data?.img_info){
          item.card.data.img_info.pic_src = "";
          item.card.data.img_info.video_src = "";
          item.card.data.img_info.ad_text_loc = 0;
          item.card.data.img_info.icon_text = '';
        }
        // 卡片描述
        if(item?.card?.data?.basic_info?.urgency_info){
          item.card.data.basic_info.urgency_info = [];
        }
        // 卡片价格
        if(item?.card?.data?.basic_info?.price_info){
          item.card.data.basic_info.price_info.discount_tags = [];
          item.card.data.basic_info.price_info.is_sale = false;
          delete item.card.data.basic_info.price_info.old_price;
        }
        //酒店排名信息
        if(item?.card?.data?.rank_info){
          item.card.data.rank_info.rank_no = "";
          item.card.data.rank_info.poi_list_icon = "";
        }
      }
    }
  } else if(url.includes("/ws/aos/perception/publicTravel/beforeNavi")){
    // 路线左上角圆形
    if(obj?.data?.front_end?.assistant?.length > 0){
      obj.data.front_end.assistant = [];
    }
    
    // 地图上的赚钱小图标
    var makeMoneyKey=['RouteBubble_MakeMoneyTask','RouteBubble_MakeMoneyTaskTiny'];
    if(obj?.data?.horus?.bubble_plan_template_datas?.length>0 && obj?.data?.horus?.bubble_plan_template_datas[0]?.params?.some(v=> makeMoneyKey.includes(v?.key))){
      obj.data.horus.bubble_plan_template_datas[0].params = obj.data.horus.bubble_plan_template_datas[0].params.filter(v => !makeMoneyKey.includes(v?.key));
    }
  } else if(url.includes("/ws/shield/search_business/process/query/poi/info")){
    // 收藏夹-酒店收藏
    if(obj?.data?.poi_list?.length > 0){
      for (let item of obj.data.poi_list) {
        // 几分钟前有人想去文字，改为评价数、收藏数
        if(item?.hotInfo){
          var orderCnt = item.hotInfo?.orderCnt || 0; // 总销量
          var orderCnt6mon = item.hotInfo?.orderCnt6mon || 0; // 近半年销量
          var favoriteNum = item.hotInfo?.favoriteNum || 0; // 收藏人数
          var reviewCount = item.evaluation?.reviewCount || 0; // 评价人数
          item.hotInfo.urgencyList = []
          item.hotInfo.urgencyInfo = `${reviewCount}评价，${favoriteNum}收藏`

          // 大家都在说 改为销量
          if(item?.recReason){
            item.recReason.userProfiles = []
            item.recReason.content = `近半年销量${orderCnt6mon},总销量${orderCnt}`
          }
        }
        
        // 去除活动标签
        if(item?.tags){
          item.tags = item.tags.filter(v => v?.type !== 'activity' && v?.type !== 'deal');
        }
        // 去除活动标签
        if(item?.activityInfo){
          item.activityInfo = {}
        }
        // 简化价格标签
        if(item?.priceInfo){
          delete item.priceInfo.priceOff
          delete item.priceInfo.discountRate
          delete item.priceInfo.totalDiscountAmount
          delete item.priceInfo.selfDiscountInfos
          delete item.priceInfo.tags
          delete item.priceInfo.activeInfo
          delete item.priceInfo.mallDetailDTO.priceOff
          delete item.priceInfo.mallDetailDTO.discountRate
          delete item.priceInfo.mallDetailDTO.activeInfo
          item.priceInfo.priceOri = item.priceInfo.priceSale
          item.priceInfo.mallDetailDTO.priceOri = item.priceInfo.mallDetailDTO.priceSale
          
        }
      }
    }
    
  }
} catch (error) {
  console.log("An error occurred:", error.name); // 错误名称
  console.log("Error message:", error.message); // 错误消息
  console.log("Stack trace:", error.stack); // 调用栈信息
  throw error; // 重新抛出错误，以便外部可以进一步处理
}

$done({ body: JSON.stringify(obj) });
