#!name=墨鱼去广告模块
#!desc=融合版[由GithubAction自动更新]，包括墨鱼去开屏2.0、喜马拉雅、哔哩哔哩、微博、KEEP、知乎、百度网盘、高德地图、小红书、网易云、什么值得买、菜鸟、彩云天气、豆瓣网页
#!author=ddgksf2013
#!contributor=@blackmatrix7, @app2smile
#!logtime=2025-01-01 09:19:19
#!homepage=https://github.com/ddgksf2013
#!tgchannel=https://t.me/ddgksf2021
#!moduleurl=https://github.com/ddgksf2013/Modules/raw/main/Adblock.sgmodule




[General]



[Rule]



[URL Rewrite]

^https?:\/\/2024.12.23/c362/v2.0.561 - reject
^http:\/\/.*babytree\.com/(plough\.do|go_search\/api\/mobile_search_new\/get_multi_search_default_keywords) - reject
^http:\/\/ads.?s?ervice(retry)?\.(kugou|kglink).(com|cn)\/v\d\/ - reject
^http:\/\/app\.api\.d3yuiw4\.com\/api\/app\/ad - reject
^http:\/\/gateway2\.etnet\.com\.hk\/etnetApp\/theme\/seasonal\/v30\/theme.json - reject
^http:\/\/m\.meitun\.com\/newapi\/router\/topic\/hometptf\/feedRecommend - reject
^http:\/\/open\.fitdays\.cn\/uploads\/ad\/ - reject
^http:\/\/s3plus\.meituan\.net\/.*\/brandcpt-vedio\/.*\?time - reject
//^https://api.bilibili.com/pgc/season/player/cards - reject
^https://api.xiaoyi.com\/v5\/app\/config\?userid=.* - reject
^https://api.xiaoyi.com\/v5\/app\/mobile\/ads - reject
//^https://app.bilibili.com/x/v2/splash/show - reject
^https://mapi.mafengwo.cn\/ad\/get_launch_ad_list\/v2 - reject
^https://mapi.sfbest.com\/brokerservice-server\/cms\/getPositionById.* - reject
^https://otheve.beacon.qq.com\/analytics\/upload\?sid=.* - reject
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.fliggy\.crm\.screen\.allresource - reject
^https:\/\/api-ad-product\.huxiu\.com\/Api\/Product\/SDK\/Advert\/Query\/queryAdvertListInfo - reject
^https:\/\/api\.gameplus\.qq\.com\/community\.OnloadSrv\/GetPreloadScreenInfo - reject
^https:\/\/api\.sfacg\.com\/ioscfg - reject
^https:\/\/api\.xiachufang\.com\/v\d\/ad/ - reject
^https:\/\/app\.api\.versa-ai\.com\/launch\/ads\? - reject
^https:\/\/app\.dewu\.com\/api\/v1\/app\/advertisement\/ - reject
^https:\/\/app\.peopleapp\.com\/Api\/\d+/HomeApi\/(adv|getAdvertImage) - reject
^https:\/\/cn-app\.narwaltech\.com\/(operate\/(cactivity\/listByResourceIds|appPosition\/listSplash)|app-user-device-server\/v\d\/user-device\/getTips) - reject
^https:\/\/data-collector\.soulapp\.cn\/api\/data\/report$ - reject
^https:\/\/gab\.122\.gov\.cn\/eapp\/m\/sysquery - reject
^https:\/\/ma-adx\.ctrip\.com\/_ma\.gif - reject
^https:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/iosAdInfo\/report - reject
^https:\/\/mbd\.baidu\.com\/newspage\/api\/getmobads\?page\=landingshare - reject
^https:\/\/mi\.gdt\.qq\.com\/gdt_mview\.fcg - reject
^https:\/\/mxsa\.mxbc\.net\/api\/v1\/adinfo\/limitedAds$ - reject
^https:\/\/open\.e\.kuaishou\.com\/rest\/e\/v3\/open\/univ - reject
^https:\/\/pan\.baidu\.com\/coins\/center\/notice - reject
^https:\/\/pan\.baidu\.com\/feed\/hotlist - reject
^https:\/\/pan\.baidu\.com\/queryintent\/queryhint - reject
^https:\/\/router-app-api\.jdcloud\.com\/v\d\/board\/routerAppSplash - reject
^https:\/\/us\.l\.qq\.com\/exapp\?spsa=\d - reject
^https?://advertise\.bczeducation\.cn\/rpc\/advertise - reject
^https?://spclient.wg.spotify.com/(ad-logic|ads|.+ad_slot|.+banners|.+canvases|.+cards|.+crashlytics|.+doubleclick.net|.+enabled-tracks|.+promoted_offer) - reject
^https?://ssp\.dzh\.com\.cn/v2api/adgroupjson - reject
^https?:\/\/(adse\.wsa|adse|adbehavior|xdcs-collector)\.xima.*\.com\/.* - reject
//^https?:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.app\.interface\.v1\.Search\/Default - reject
^https?:\/\/(bdsp-x|dsp-x)\.jd\.com\/adx\/ - reject
^https?:\/\/(commontgw|comapi)\.reader\.qq\.com\/(common\/adV|com-ad\/config) - reject
^https?:\/\/(discardrp|startup)\.umetrip\.com\/gateway\/api\/umetrip\/native - reject
^https?:\/\/(mobile|shop)\.laichon\.com\/api\/(v1\/goods\/goodsList|exposureAdvStatistics|getWebAdvList) - reject
^https?:\/\/(preload-click|preload-impression)\.uve\.weibo\.com\/(interface\/wbpullad\/wbpullad_click\.php|wbapplua\/get_wbpullad_log\.lua) - reject
^https?:\/\/(s3plus|flowplus)\.meituan\.net\/v\d\/\w+\/linglong\/\w+\.(gif|jpg|mp4) - reject
^https?:\/\/.*1rtb\.net\/sdk\/req_ad\? - reject
^https?:\/\/.*5eplay\.com\/.*adv_slot - reject
^https?:\/\/.*\.amap\.com\/uploadimg\/\w+\.gif - reject
^https?:\/\/.*\.amap\.com\/ws\/asa\/ads_attribution - reject
^https?:\/\/.*\.amap\.com\/ws\/boss\/order_web\/\w{8}_information - reject
^https?:\/\/.*\.amap\.com\/ws\/faas\/amap-navigation\/card-service-route-plan\? - reject
^https?:\/\/.*\.amap\.com\/ws\/shield\/scene\/recommend - reject
^https?:\/\/.*\.amap\.com\/ws\/valueadded\/weather - reject
^https?:\/\/.*\.meituan\.com\/api\/v\d\/(openscreen\?ad|appstatus\?ad|loadInfo\?|startpicture) - reject
^https?:\/\/.*\.xima.*\.com/mobile-user/minorProtection/pop - reject
^https?:\/\/.*\.xima.*\.com\/(dog-portal\/checkOld|(child-mobile\/child|aged-mobile\/aged)\/mode\/query) - reject
^https?:\/\/.*\.xima.*\.com\/(hub)?guideWord - reject
^https?:\/\/.*\.xima.*\.com\/(hub\/)?hotWord - reject
^https?:\/\/.*\.xima.*\.com\/(hub\/)?hotWordBillboard - reject
^https?:\/\/.*\.xima.*\.com\/api\/v\d\/adRealTime - reject
^https?:\/\/.*\.xima.*\.com\/butler-portal\/versionCheck - reject
^https?:\/\/.*\.xima.*\.com\/chaos-notice-web\/v1\/message\/preview\/list - reject
^https?:\/\/.*\.xima.*\.com\/collector\/xl\/v\d - reject
^https?:\/\/.*\.xima.*\.com\/discovery-feed\/focus\/queryF - reject
^https?:\/\/.*\.xima.*\.com\/discovery-feed\/isShowUserGiftPendant - reject
^https?:\/\/.*\.xima.*\.com\/mobile-playpage\/view\/ - reject
^https?:\/\/.*\.xima.*\.com\/mobile-user\/unread - reject
^https?:\/\/.*\.xima.*\.com\/mobile\/discovery\/v\d\/location - reject
^https?:\/\/.*\.xima.*\.com\/social-web\/bottomTabs\/dynamicEntrance\/status - reject
^https?:\/\/.*\.xima.*\.com\/ting\/(loading|feed|home)? - reject
^https?:\/\/.*\.xmcdn\.com\/\w{8}\/\w{4}-\w{16}\/.+gif$ - reject
^https?:\/\/.*\.yuxueyuan\.cn\/yxy-api-gateway\/api\/json\/advert\/getsAdStartScreen - reject
^https?:\/\/.*\/yyting\/advertclient\/ClientAdvertList.action - reject
^https?:\/\/.*aastocks\.com\/ad\/ - reject
^https?:\/\/.*baidu\.com\/rest\/.*\/membership\/proxy\/guide - reject
^https?:\/\/.*dcloud\.net\.cn\/(app\/acs|uad) - reject
^https?:\/\/.*fenbi\.com\/(activity\/app\/launcher|app\/iphone\/nxs\/popup) - reject
^https?:\/\/.*flyert.*\/api\/mobile\/index\.php\?module=advis - reject
^https?:\/\/.*flyert.*\/source\/plugin\/mobile\/mobile\.php\?module=advis - reject
^https?:\/\/.*mangaapi\.manhuaren\.\w{2,4}\/v\d\/ad - reject
^https?:\/\/.*mangaapi\.manhuaren\.\w{2,4}\/v\d\/public\/(getStartUpMessage|getStartPageAds|getShelfActivity) - reject
^https?:\/\/.*mting\.info\/advert\/ClientAdvertList\.action - reject
^https?:\/\/.*tipatipa\.xyz\/announcements - reject
^https?:\/\/.*ubixioe\.com\/mob\/sdk\/v\d\/endpoint - reject
^https?:\/\/.*yuanfudao\.com\/iphone\/splashes - reject
^https?:\/\/.*yuanfudao\.com\/leo-mis\/iphone\/splashes - reject
^https?:\/\/.*zhangyuyidong\.cn\/api\/ - reject
^https?:\/\/.*zhangyuyidong\.cn\/api\/zysdk - reject
^https?:\/\/103\.41\.167\.237 - reject
^https?:\/\/103\.91\.210\.141\:2515\/xgapp\.php\/v2\/top_notice - reject
^https?:\/\/118\.89\.204\.198 - reject
^https?:\/\/1jietu\.com\/apiv\d\/ad - reject
^https?:\/\/2402:4e00:1200:ed00:0:9089:6dac:96b6 - reject
^https?:\/\/3g\.csair\.com\/CSMBP\/bookProcess\/homepopup\/queryAdvertisement - reject
^https?:\/\/[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+){1,3}(:\d+)?\/.*?\/v\d\/(version$|notice\?|top_notice\?|advert\?position=[^2]+) - reject
^https?:\/\/\w+\.kakamobi\.cn\/api\/open\/v\d\/advert-sdk\/ - reject
^https?:\/\/a\.qiumibao\.com\/activities\/config\.php$ - reject
^https?:\/\/a\.qiumibao\.com\/ios\/config\/\?version_code= - reject
^https?:\/\/acs-m\.freshippo\.com\/gw\/mtop\.wdk\.render\.querysinglepage - reject
^https?:\/\/acs4miniapp-inner\.m\.taobao\.com\/gw\/mtop\.alimama\.abyss\.unionpage\.get - reject
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alibaba\.advertisementservice\.getadv\/ - reject
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alibaba\.cbu\.app\.homepage\.startup - reject
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alibaba\.mos\.app\.homepage\.launch - reject
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alimama\.etao\.config\.query - reject
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.damai\.mec\.popup\.get - reject
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.damai\.wireless\.home\.welcome - reject
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.etao\.noah\.query.*etao_splash - reject
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.film\.mtopadvertiseapi\.queryadvertise\/ - reject
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.wdk\.render\.querysinglepage - reject
^https?:\/\/ad\.cj\.sina\.cn\/(osa\/adpreload|fax\/impress) - reject
^https?:\/\/ad\.cyapi\.cn\/v\d - reject
^https?:\/\/ad\.lofter\.com\/.*yitou\/madr - reject
^https?:\/\/ad\.mcloud\.139\.com\/advertapi - reject
^https?:\/\/ad\.mcloud\.139\.com\/advertapi\/adv-filter\/adv-filter\/AdInfoFilter\/getAdInfos$ - reject
^https?:\/\/adapi\.izuiyou\.com\/ - reject
^https?:\/\/adm\.10jqka\.com\.cn\/interface\/ad\/recommend - reject
^https?:\/\/adpai\.thepaper\.cn\/.+&ad= - reject
^https?:\/\/adproxy.autohome.com.cn\/AdvertiseService\/ - reject
^https?:\/\/ads\.closeli\.cn\/ - reject
^https?:\/\/adv\.ccb\.com\/ebda\/ctm_adv - reject
^https?:\/\/adx-cn\.anythinktech\.com\/bid - reject
^https?:\/\/adx.*anythinktech\.com\/bid - reject
^https?:\/\/aikanvod\.miguvideo\.com\/video\/p\/i_adverseInterface\.jsp - reject
^https?:\/\/api-access\.[0-9a-zA-Z_-]+\.com\/api\/ad - reject
^https?:\/\/api-new\.app\.acfun\.cn\/rest\/app\/flash\/screen\/ - reject
^https?:\/\/api-one-wscn\.awtmt\.com\/apiv\d\/advertising\/ads - reject
^https?:\/\/api-sams\.walmartmobile\.cn\/api\/v1\/sams\/sams-user\/(window\/getGoUpPlus|screen_promotion\/get) - reject
^https?:\/\/api.chelaile.net.cn\/adpub\/ - reject
^https?:\/\/api.chelaile.net.cn\/goocity\/advert\/ - reject
^https?:\/\/api.gotokeep.com/cauchy/growth/init - reject
^https?:\/\/api.kkmh.com\/v\d\/(ad|advertisement)\/ - reject
^https?:\/\/api.psy-1.com\/cosleep\/startup - reject
^https?:\/\/api1\.34580\.com\/wx\/Home\/AdvertisementPhotoshootRequest - reject
^https?:\/\/api2\.picooc\.com\/v\d\/api\/focus\/strategy\/execute - reject
^https?:\/\/api3\.cls\.cn\/v1\/boot\/ad - reject
^https?:\/\/api4\.bybutter\.com\/v\d\/app\/placements\/\d\/advertisements - reject
^https?:\/\/api\.(pinduoduo|yangkeduo)\.com\/api\/cappuccino\/splash - reject
^https?:\/\/api\.00bang\.cn\/llb\/baseinfo\/advertise\/getAdvertiseByPageCode - reject
^https?:\/\/api\.21ec74\.com\/v2\.5\/ad - reject
^https?:\/\/api\.369cx\.cn\/v\d\/Splash\/GetSplashAd - reject
^https?:\/\/api\.ahmobile\.cn:443\/eip\?eip_serv_id=app\.getAllNew - reject
//^https?:\/\/api\.bilibili\.com\/pgc\/activity\/deliver\/material\/receive - reject
//^https?:\/\/api\.bilibili\.com\/pgc\/season\/player\/ogv\/cards - reject
//^https?:\/\/api\.bilibili\.com\/x\/vip\/ads\/material\/report - reject
^https?:\/\/api\.caijingmobile\.com\/(ad|advert)\/ - reject
^https?:\/\/api\.cloud\.189\.cn\/guns\/getOpenscreenBanners - reject
^https?:\/\/api\.coolapk\.com\/v6\/search\?.*type=hotSearch - reject
^https?:\/\/api\.dangdang\.com\/mapi\d\/mobile\/init - reject
^https?:\/\/api\.douban\.com\/b.*\/common_ads\?.* - reject
^https?:\/\/api\.douban\.com\/v2\/app_ads\/splash - reject
^https?:\/\/api\.futunn\.com\/(v\d\/)?ad\/ - reject
^https?:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/v\d\/anime_get_question\.php - reject
^https?:\/\/api\.gaoqingdianshi\.com\/api\/v\d\/ad\/ - reject
^https?:\/\/api\.gotokeep\.com\/ads\/v\d\/ads\/preload - reject
^https?:\/\/api\.gotokeep\.com\/anno\/v\d\/upgrade\/check - reject
^https?:\/\/api\.gotokeep\.com\/guide-webapp\/v\d\/popup\/getPopUp - reject
^https?:\/\/api\.gotokeep\.com\/kprime\/v\d\/popups\/primeGuide - reject
^https?:\/\/api\.gotokeep\.com\/op-engine-webapp\/v\d\/ad - reject
^https?:\/\/api\.gotokeep\.com\/running\/v\d\/home\/dialog - reject
^https?:\/\/api\.gotokeep\.com\/search\/v\d\/default\/keyword\/list - reject
^https?:\/\/api\.gotokeep\.com\/search\/v\d\/hotCourse\/list - reject
^https?:\/\/api\.gotokeep\.com\/search\/v\d\/hotword\/list - reject
^https?:\/\/api\.gotokeep\.com\/training\/box\/config - reject
^https?:\/\/api\.haohaozhu\.cn\/index\.php\/home\/AppInit\/getStartPhoto - reject
^https?:\/\/api\.internetofcity\.cn\/api\/resource\/anon\/popups\/(getSplashList|getList) - reject
^https?:\/\/api\.ireader\.mobi\/activity\/ad\/openScreen - reject
^https?:\/\/api\.izuiyou\.com\/ad\/ - reject
^https?:\/\/api\.jxedt\.com\/ad\/ - reject
^https?:\/\/api\.kmovie\.gifshow\.com\/rest\/n\/kmovie\/app\/(resource|banner) - reject
^https?:\/\/api\.kurobbs\.com\/config\/getOpenScreen - reject
^https?:\/\/api\.livelab\.com\.cn\/pgc\/advert - reject
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=(start|queryMaterialAdverts) - reject
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=home_launchConfig - reject
^https?:\/\/api\.m\.mi\.com\/v1\/app\/start - reject
^https?:\/\/api\.mcd\.cn\/bff\/portal\/(richpop|home\/splash) - reject
^https?:\/\/api\.medlive\.cn\/promotion-api/adlist - reject
^https?:\/\/api\.merach\.com\/app\/AppAdvertisingController\/getAdvert - reject
^https?:\/\/api\.moomoo\.com(\/v\d)?\/ad - reject
^https?:\/\/api\.qbb6\.com\/ad\/ - reject
^https?:\/\/api\.qd-metro\.com\/ngstatic\/appScreenAds - reject
^https?:\/\/api\.smart\.jd\.com\/c\/service\/getLoadingLinks - reject
^https?:\/\/api\.taou\.com\/sdk\/global\/splash_ad - reject
^https?:\/\/api\.tipsoon\.com\/api\/v\d\/top\/ad - reject
^https?:\/\/api\.touker\.com\/v2\/IAdvertisementAPI\.queryStartAdvertisement - reject
^https?:\/\/api\.vistopia\.com\.cn\/api\/v\d\/home\/advertisement - reject
^https?:\/\/api\.weibo\.cn\/!\/was\/finder\/searchbarchange - reject
^https?:\/\/api\.weibo\.cn\/\d\/!\/huati\/discovery_home_bottom_getdotinfo - reject
^https?:\/\/api\.weibo\.cn\/\d\/ad\/preload - reject
^https?:\/\/api\.weibo\.cn\/\d\/cardlist\?v_f=.*Weibo_intl - reject
^https?:\/\/api\.weibo\.cn\/\d\/profile\/recommend_popuser - reject
^https?:\/\/api\.wfdata\.club\/v2\/yesfeng\/(infoCenterAd|yesList) - reject
^https?:\/\/api\.wmpvp\.com\/api\/v\d\/config\/promote - reject
^https?:\/\/api\.xiaoheihe\.cn\/.*get_ads_info - reject
^https?:\/\/api\.xueqiu\.com\/snowpard\/launch_strategy\/query\.json - reject
^https?:\/\/api\.yikaobang\.com\.cn\/client\/main\/homePageSmallAd - reject
^https?:\/\/api\.yikaobang\.com\.cn\/index\.php\/Client\/main\/startPage - reject
^https?:\/\/api\.yonghuivip\.com\/web\/shensuan\/ad\/getAd - reject
^https?:\/\/api\.ys7\.com.*\/getAdvertising - reject
^https?:\/\/api\.ys7\.com\/api\/ads - reject
^https?:\/\/api\.zcool\.com\.cn\/.*common\/open-screen - reject
^https?:\/\/api\.zhihu\.com\/(notifications\/v\d\/count) - reject
^https?:\/\/api\.zhihu\.com\/ab\/api\/v1\/products\/zhihu\/platforms\/ios\/config - reject
^https?:\/\/api\.zhihu\.com\/ad-style-service\/request - reject
^https?:\/\/api\.zhihu\.com\/api\/v4\/ecom_data\/config - reject
^https?:\/\/api\.zhihu\.com\/api\/v4\/profile\/cards - reject
^https?:\/\/api\.zhihu\.com\/brand\/question\/\d+/card\? - reject
^https?:\/\/api\.zhihu\.com\/commercial_api - reject
^https?:\/\/api\.zhihu\.com\/commercial_api\/app_float_layer - reject
^https?:\/\/api\.zhihu\.com\/content-distribution-core\/bubble\/common\/settings - reject
^https?:\/\/api\.zhihu\.com\/drama\/hot-drama-list - reject
^https?:\/\/api\.zhihu\.com\/feed\/render\/revisit\/current_reading - reject
^https?:\/\/api\.zhihu\.com\/feed\/render\/revisit\/tag_config - reject
^https?:\/\/api\.zhihu\.com\/me\/guides - reject
^https?:\/\/api\.zhihu\.com\/moments\/recent - reject
^https?:\/\/api\.zhihu\.com\/moments\/tab_v2 - reject
^https?:\/\/api\.zhihu\.com\/root\/window - reject
^https?:\/\/api\d?\.musical\.ly\/api\/ad\/ - reject
^https?:\/\/app-api\.medsci\.cn\/app-advertisement-space\/showAdList - reject
^https?:\/\/app-cdn\.2q10\.com\/app\/\w+\/honored - reject
^https?:\/\/app-gateway\.leisuapi\.com\/v\d\/app\/mobile\/(banners|ads) - reject
^https?:\/\/app-gw\.csdn\.net\/silkroad-api\/api\/v\d\/assemble\/list\/pub\/channel\/app_open_screen_ad - reject
^https?:\/\/app2.autoimg.cn\/appdfs\/ - reject
^https?:\/\/app3\.qdaily\.com\/app\d\/boot_advertisements\.json - reject
^https?:\/\/app\.10099\.com\.cn\/contact-web\/api\/version\/getFlashScreenPage - reject
^https?:\/\/app\.58\.com\/api\/home\/(advertising|appadv) - reject
^https?:\/\/app\.api\.qjjfin\.com\/publicize\/allList - reject
//^https?:\/\/app\.bilibili\.com\/x\/resource\/ip - reject
^https?:\/\/app\.c\.nf\.migu\.cn\/.*column\/start(-)?up-pic - reject
^https?:\/\/app\.duxiaoman\.com\/walletapp\/misc\/app_startup - reject
^https?:\/\/app\.flymodem\.com\.cn\/Appapi\/Public\/welecome - reject
^https?:\/\/app\.hbooker\.com\/setting\/get_startpage_url_list - reject
^https?:\/\/app\.homeinns\.com\/api\/landing - reject
^https?:\/\/app\.ibuscloud\.com\/v\d\/(app\/getSkipAdvert|notice\/getNoticeWithAdvByCity) - reject
^https?:\/\/app\.jiantou8\.com\/Home\/APP\/allAd - reject
^https?:\/\/app\.yinxiang\.com\/ads\/ - reject
^https?:\/\/app\.zhuanzhuan\.com\/zzx\/transfer\/getConfigInfo - reject
^https?:\/\/appactive\.1234567\.com\.cn\/AppoperationApi\/OperationService\/GetAppStartImg - reject
^https?:\/\/appapi\.huazhu\.com:\d{4}\/client\/app\/getAppStartPage\/ - reject
^https?:\/\/appconf\.mail\.163\.com\/mmad\/get\.do - reject
^https?:\/\/apps\.api\.ke\.com\/config\/config\/(bootpage|getactivityconfig) - reject
^https?:\/\/appwk\.baidu\.com\/xpage\/interface\/wknaad - reject
^https?:\/\/atrace.chelaile.net.cn\/adpub\/ - reject
^https?:\/\/atrace.chelaile.net.cn\/exhibit\?&adv_image - reject
^https?:\/\/axxd\.xmseeyouyima\.com\/v\d\/getad - reject
^https?:\/\/bbs-api\.miyoushe\.com\/apihub\/api\/getAppSplash - reject
^https?:\/\/bgw\.xinyue\.qq\.com\/xyapi\.PageService\/GetIndexPopFlash - reject
^https?:\/\/boot.*weibo\.com\/v\d\/ad\/realtime - reject
^https?:\/\/bp-api\.bestv\.com\.cn\/cms\/api\/free\/open\/advertisingV2 - reject
^https?:\/\/business\.msstatic\.com\/advertiser\/material - reject
^https?:\/\/capi.mwee.cn\/app-api\/V12\/app\/getstartad - reject
^https?:\/\/capi\.lkcoffee\.com\/resource\/m\/sys\/(homePage\/contactor\/modules|app\/adposNew) - reject
^https?:\/\/capis.*didapinche\.com\/ad\/cx\/startup - reject
^https?:\/\/carapp\.gtmc\.com\.cn\/api\/appgtmc\/homePage\/HomePageAction\/queryHomePageImg\.json - reject
^https?:\/\/careapi\.oclean\.com\/mall\/v\d\/Temporary\/SafetyGetStartAdvert - reject
^https?:\/\/ccsp-egmas\.sf-express\.com\/cx-app-base\/base\/app\/appVersion\/detectionUpgrade - reject
^https?:\/\/cdke\.youdao\.com\/course3\/recommend\/dict\/startup - reject
^https?:\/\/cdn-evone-ceph\.echargenet\.com\/gw-emas-cdn - reject
^https?:\/\/cdn-evone-ceph\.echargenet\.com\/gw-emas-cdn\/63c4e3b558bb610008969f89 - reject
^https?:\/\/cdn\.\w{3}\.chelaileapp\.cn\/(api\/)?adpub - reject
^https?:\/\/cdn\.cmgadx\.com\/sdk\/pool\/\w+\.json - reject
^https?:\/\/cdn\.dianshihome\.com\/static\/ad\/ - reject
^https?:\/\/cdns\.chinastock\.com\.cn\/cdn\/omc\/app\/app\/(index_pop_banner|startup_banner) - reject
^https?:\/\/client-api-v2\.oray\.com\/materials\/(SUNLOGIN_CLIENT_IOS_PROMOTION|SLCC_IOS_DEVICE|SLCC_IOS_STARTUP) - reject
^https?:\/\/client-api\.oray\.com\/materials\/SLCC_IOS_STARTUP\?lang=zh-Hans-CN - reject
^https?:\/\/client\.app\.coc\.10086\.cn\/biz-orange\/DN\/init\/startInit - reject
^https?:\/\/client\.mail\.163.com\/apptrack\/confinfo\/(searchMultiAds.do|showAds.do) - reject
^https?:\/\/client\.qunar\.com\/pitcher-proxy\?qrt=p_splashAd - reject
^https?:\/\/client\.tujia\.com\/bnbapp-node\/app\/portal\/getStartPictureAdvertising - reject
^https?:\/\/cmt\.comp\.360os\.com\/adv - reject
^https?:\/\/cn-acs\.m\.cainiao\.com\/gw\/mtop\.cainiao\.guoguo\.nbnetflow\.ads\.(show|mshow)\.cn\/ - reject
^https?:\/\/comicapi\.manhuashe\.com\/v\d\/(ads\/adstrategys|public\/startupactivity) - reject
^https?:\/\/compus\.xiaofubao\.com\/compus\/advertising - reject
^https?:\/\/cq11344-app-https-api-1\.ictun\.com:443\/api\/app\/v\d\/appad - reject
^https?:\/\/creditcardapp\.bankcomm\.cn\/mappweb_interface\/common\/(qryPopAds|qryLaunchAds)\.do - reject
^https?:\/\/creditcardapp\.bankcomm\.com\/mapp\/common\/(queryGuidePageAds|getPopAds)\.do$ - reject
^https?:\/\/daoyu\.sdo\.com\/api\/userCommon\/getAppStartAd - reject
^https?:\/\/device-box\.onethingpcs\.com\/.+\/adConf - reject
^https?:\/\/dili\.bdatu\.com\/jiekou\/ad - reject
^https?:\/\/dispatcher\.camera360\.com\/api\/v1\/list$ - reject
^https?:\/\/dj\.palmestore\.com\/zybk\/api\/ad - reject
^https?:\/\/djcapp\.game\.qq\.com\/daoju\/igw\/main\/\?_service=welink\.ad\.list - reject
^https?:\/\/dq\.dxy\.cn\/api\.php\?action=getpostbanners - reject
^https?:\/\/e.dangdang.com\/media\/api.+\?action=getDeviceStartPage - reject
^https?:\/\/e\.dangdang\.com\/.+?getDeviceStartPage - reject
^https?:\/\/easyreadfs\.nosdn\.127\.net\/ad-material\/ - reject
^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/guide\/home_guide - reject
^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/system_service\/splash - reject
^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/user\/teenager\/status - reject
^https?:\/\/elemecdn.com\/.+\/sitemap - reject
^https?:\/\/emdcadvertise\.eastmoney\.com\/infoService\/v2 - reject
^https?:\/\/emdcadvertise\.eastmoney\.com\/infoService\/v\d - reject
^https?:\/\/emdcadvise\.eastmoney\.com\/infoAdviseService$ - reject
^https?:\/\/entree-ws\.igetget\.com\/oms\/front\/start\/push - reject
^https?:\/\/entry\.ubixioe\.com\/mob\/sdk\/v\d\/endpoint - reject
^https?:\/\/evs\.500\.com\/esinfo\/loading\/loading - reject
^https?:\/\/explorer\.tratao\.com\/api\/client\/v4\/xtransfer\/ad\/ - reject
^https?:\/\/file\.mylyg\.net\/banner\/(fc[a-f0-9]{30})\.jpg - reject
^https?:\/\/ftapi\.10jqka\.com\.cn\/futgwapi\/api\/om\/v\d\/ad\/common\/transfer - reject
^https?:\/\/fuss10.elemecdn.com\/.+.mp4 - reject
^https?:\/\/fuss10.elemecdn.com\/.+\/w\/640\/h\/\d{3,4} - reject
^https?:\/\/fuss10.elemecdn.com\/.+\/w\/750\/h\/\d{3,4} - reject
^https?:\/\/fuwu\.nhsa\.gov\.cn\/ebus\/fuwu\/api\/base\/cms\/iep\/web\/cms\/hmpgcfg\/queryAppHmpgCfgByApp - reject
^https?:\/\/games\.mobileapi\.hupu\.com\/.+\/(search|interfaceAdMonitor|status|hupuBbsPm)/(hotkey|init|hupuBbsPm)\. - reject
^https?:\/\/games\.mobileapi\.hupu\.com\/interfaceAdMonitor - reject
^https?:\/\/gateway-api\.dushu365\.com\/chief-orch\/config\/config\/v100\/appConfig - reject
^https?:\/\/gateway\.36kr\.com\/api\/adx\/ad\/show - reject
^https?:\/\/gateway\.abite\.com\/cotti-capi\/customer\/position\/list\?code=cotti-launch-window - reject
^https?:\/\/gateway\.cotticoffee\.com\/cotti-capi\/customer\/position\/list\?code=cotti-launch-window - reject
^https?:\/\/gateway\.shouqiev\.com\/fsda\/app\/bootImage\.json - reject
^https?:\/\/gd\.10086\.cn\/gmccapp\/serv\/\?servicename=GMCCAPP_704_002_001_001 - reject
^https?:\/\/gha\.ghac\.cn\:8081\/base\/app\/api\/ad\/query\?adType - reject
^https?:\/\/goblin\.hupu\.com\/.+\/interfaceAd\/getOther - reject
^https?:\/\/god\.gameyw\.netease\.com\/v\d\/ad\/serving\/app-start - reject
^https?:\/\/gongdu\.youshu\.cc\/m\/open_screen\/list_by_udid - reject
^https?:\/\/gorgon\.youdao\.com\/gorgon - reject
^https?:\/\/gslb.*\.xima.*\.com\/ - reject
^https?:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.cainiao\.adx\.flyad\.getad - reject
^https?:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.cainiao\.guoguo\.nbnetflow\.ads\.show - reject
^https?:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.cainiao\.nbmensa\.research\.researchservice\.consultmerge - reject
^https?:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.fc\.resource\.tacdata\.get - reject
^https?:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.taobao\.wireless\.home\.splash\.awesome\.get - reject
^https?:\/\/gw.aihuishou.com\/app-portal\/home\/getadvertisement - reject
^https?:\/\/gw\.kaola\.com\/gw\/dgmobile\/newOpenAd - reject
^https?:\/\/gx\.10086\.cn\/zt-portal\/gxhzg\/portal\/app\/api\/v - reject
^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/other_modul - reject
^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/user_related_modul - reject
^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/wiki_related_modul - reject
^https?:\/\/hc-ssp\.sm\.cn - reject
^https?:\/\/hfapp-service\.qweather\.net\/.*\/ad\/ - reject
^https?:\/\/home\.mi\.com\/cgi-op\/api\/v\d\/recommendation - reject
^https?:\/\/hxqapi\.hiyun\.tv\/api\/notification\/plans - reject
^https?:\/\/i1\.hoopchina\.com\.cn\/blogfile\/.+_\d{3}x\d{4} - reject
^https?:\/\/i\.ys7\.com\/api\/ads\/ - reject
^https?:\/\/i\.zhaojinapp\.com\/APPAD - reject
^https?:\/\/i\d\.hoopchina\.com\.cn/blogfile\//d+\//d+\/BbsImg\.(?<=(big.(png|jpg)))$ - reject
^https?:\/\/igetcool-gateway\.igetcool\.com\/app-api-other-server\/white\/open\/ads.json - reject
^https?:\/\/ih2\.ireader\.com\/zyapi\/bookstore\/ad - reject
^https?:\/\/ih2\.ireader\.com\/zyapi\/self\/screen\/ad - reject
^https?:\/\/ih2\.ireader\.com\/zycl\/api\/ad - reject
^https?:\/\/img\.jiemian\.com\/ads\/ - reject
^https?:\/\/img\.meituan\.net\/(adunion|display|midas)\/\w+\.(gif|jpg|jpg\.webp)$ - reject
^https?:\/\/img\.meituan\.net\/(bizad|brandCpt)\/\w+\.(png|jpg) - reject
^https?:\/\/info\.mina\.mi\.com\/advertise\/splash - reject
^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/comment\/feed\/inserted\/resources - reject
^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/content\/activity\/music\/jar\/template\/list - reject
^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/resource-exposure\/config - reject
^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/sp\/flow\/popup\/query - reject
^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/vipmall\/couponcfg\/get - reject
^https?:\/\/interface(\d)?\.music\.163\.com\/w?eapi\/(resource-exposure\/)?activity - reject
^https?:\/\/iphone\.ac\.qq\.com\/.*\/Support\/(getSystemConf|bootScreen) - reject
^https?:\/\/iyes\.youku\.com\/uts/v\d\/start - reject
^https?:\/\/j1\.pupuapi\.com\/client\/marketing\/advertisement - reject
^https?:\/\/jad-api\.jin10\.com\/ad - reject
^https?:\/\/jdread-api\.jd\.com\/jdread\/api\/channel\/module\/opens - reject
^https?:\/\/jdread-api\.jd\.com\/jdread\/api\/popup - reject
^https?:\/\/js-ad\.ayximgs\.com\.ad-universe-cdn\.hzhcbkj\.cn\/xgapp\.php\/v2\/top_notice - reject
^https?:\/\/jz\.wacaijizhang\.com\/api\/banners\/newSplash - reject
^https?:\/\/kad\.gotokeep\.com\/op-engine-webapp\/v\d\/ad - reject
^https?:\/\/lban\.spdb\.com\.cn\/mspmk-web-component\/(getAdvList|prefetchAdvList)\.ah - reject
^https?:\/\/lchttpapi\.xczim\.com\/1\.1\/functions\/getLaunchImageForIOS - reject
^https?:\/\/learn\.chaoxing\.com\/apis\/service\/appConfig - reject
^https?:\/\/lens\.leoao\.com\/lens\/.+(getUserScheme|queryAppBanners|Advert|popup) - reject
^https?:\/\/list-app-m\.i4\.cn\/getopfstadinfo\.xhtml - reject
^https?:\/\/lop-proxy\.jd\.com\/queryAppHomePageMarketingRecommendRuleConfigInfo - reject
^https?:\/\/m-adphone\.wenhua\.com\.cn\/ - reject
^https?:\/\/m.ibuscloud.com\/v2\/app\/getStartPage - reject
^https?:\/\/m?api\.weibo\.c(n|om)\/\d/push/daily - reject
^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/ad\/weibointl\? - reject
^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/hot\/hours_spotlight - reject
^https?:\/\/m\.api\.shaoxing\.com\.cn\/v\d\/start - reject
^https?:\/\/m\.client\.10010\.com\/mobileService\/(activity|customer)\/(accountListData|get_client_adv|get_startadv) - reject
^https?:\/\/m\.client\.10010\.com\/uniAdmsInterface\/(getHomePageAd|getWelcomeAd) - reject
^https?:\/\/m\.ctrip\.com\/restapi\/soa2\/\d+\/scjson\/tripAds - reject
^https?:\/\/m\.msyc\.cc\/app\/getBootPage\/v\d - reject
^https?:\/\/m\.stock\.pingan\.com\/restapi\/rmd\/open\/O\/api\/openAd - reject
^https?:\/\/m\.tuniu\.com\/api\/operation\/splash\/ - reject
^https?:\/\/m\.you\.163\.com\/activity\/popWindow - reject
^https?:\/\/magev\d\.if\.qidian\.com\/argus\/api\/v\d\/client\/getsplashscreen - reject
^https?:\/\/maicai\.api\.ddxq\.mobi\/advert\/startUpScreen - reject
^https?:\/\/mama\.dxy\.com\/api\/cms\/client\/popup-window\/list - reject
//^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Comic\/(Flash|ListFlash|GetActivityTab) - reject
^https?:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/activity\/advertisement\/get - reject
^https?:\/\/mapi\.dangdang\.com\/index\.php\?action=init - reject
^https?:\/\/mime\.baidu\.com\/v\d\/IosStart\/getStartInfo - reject
^https?:\/\/mime\.baidu\.com\/v\d\/activity\/advertisement - reject
^https?:\/\/mix-api\.camera360\.com\/v\d\/operational-positions - reject
^https?:\/\/mlol\.qt\.qq\.com\/go\/recommend\/(?!v) - reject
^https?:\/\/mob\.mddcloud\.com\.cn\/adApi\/advert - reject
^https?:\/\/mobads\.baidu\.com\/cpro\/ui\/mads.php - reject
^https?:\/\/mobileapi\.xiamenair\.com\/mobile-starter\/.+\/getStartAD - reject
^https?:\/\/mp\.weixin\.qq\.com\/mp\/cps_product_info - reject
^https?:\/\/mpcs\.suning\.com\/mpcs\/dm\/getDmInfo - reject
^https?:\/\/mpos-pic\.helipay\.com\/upload\/images\/advertisment - reject
^https?:\/\/mrobot\.pconline\.com\.cn\/s-900\/onlineinfo\/cms\/launch - reject
^https?:\/\/ms\.jr\.jd\.com\/gw\/generic\/aladdin\/(new)?na\/m\/getLoadingPicture - reject
^https?:\/\/newapp2\.szsmk\.com\/app\/config\/queryMainAd - reject
^https?:\/\/notify\.baicizhan\.com\/rpc\/notify\/get_latest_notify - reject
^https?:\/\/open\.78dm\.net\/v\d\/site\/ad\/ - reject
^https?:\/\/open\.taou\.com\/maimai\/launch_ad - reject
^https?:\/\/overseas.weico.cc\/portal.php\?a=get_coopen_ads - reject
^https?:\/\/p0\.pipi\.cn\/adAdmin\/\w+.jpg\? - reject
^https?:\/\/p\d\.meituan\.net\/(bizad|wmbanner)\/\w+\.jpg - reject
^https?:\/\/p\d\.meituan\.net\/movie\/\w+\.jpg\?may_covertWebp - reject
^https?:\/\/pages\.xiaohongshu\.com\/data\/native\/matrix_switches - reject
^https?:\/\/pan-api\.bitqiu\.com\/activity\/getPromoteGuide - reject
^https?:\/\/pan\.baidu\.com\/act\/api\/activityentry - reject
^https?:\/\/pan\.baidu\.com\/act\/v\d\/(bchannel|welfare)\/list - reject
^https?:\/\/pan\.baidu\.com\/rest\/.*\/pcs\/ad - reject
^https?:\/\/pan\.baidu\.com\/rest\/2\.0\/pcs\/ad - reject
^https?:\/\/patientgate\.91160\.com\/advert-api\/v\d\/advert - reject
^https?:\/\/peisongapi\.meituan\.com\/client\/getInitiateImage - reject
^https?:\/\/pic1.chelaile.net.cn\/adv\/ - reject
^https?:\/\/pinggai.*caixin\.com\/s\?z=caixin - reject
^https?:\/\/pipi\.4kya\.com\/\/xgapp\.php\/v3\/advert\.position=[^2]+ - reject
^https?:\/\/promotion\.medlive\.cn\/getcover-v2\?app_name - reject
^https?:\/\/pss\.txffp\.com\/piaogen\/images\/launchScreen/ - reject
^https?:\/\/pzoap\.moedot\.net\/xgapp\.php\/v2\/top_notice - reject
^https?:\/\/qadx\.qinlinad\.com\/ad\/ - reject
^https?:\/\/qcwx\.medproad\.com:8080\/ad\/ - reject
^https?:\/\/quanguo\.mygolbs\.com:8081\/MyBusServer\/servlet\/MyGoServer\.HttpPool\.HttpHandlerServlet - reject
^https?:\/\/r\.inews\.qq\.com\/(adsBlacklist|getFullScreenPic|getQQNewsRemoteConfig) - reject
^https?:\/\/r\.inews\.qq\.com\/(getBannerAds|getNewsRemoteConfig|getSplash|searchHotCatList|upLoadLoc) - reject
^https?:\/\/referee\.xiaohongshu\.com\/v\d\/stateReport - reject
^https?:\/\/rengine-platform\.llsapp\.com\/auth\/api\/remoteResource\/darwin - reject
^https?:\/\/res.kfc.com.cn\/advertisement\/ - reject
^https?:\/\/res\.pizzahut\.com\.cn\/CRM\/phad\/apphome\/apphome - reject
^https?:\/\/restapi\.iyunmai\.com\/ad-api\/ - reject
^https?:\/\/rtbapi\.douyucdn\.cn\/japi\/sign\/app\/getinfo - reject
^https?:\/\/saad\.ms\.zhangyue\.net\/ad\/ - reject
^https?:\/\/sdk\.1rtb\.net\/sdk\/req_ad - reject
^https?:\/\/sdk\.alibaba\.com\.ailbaba\.me\/.*?\/v\d\/(version|top_notice\?|advert\?position=[^2]+) - reject
^https?:\/\/sdkapp\.uve\.weibo\.com\/interface\/sdk\/sdkconfig\.php - reject
^https?:\/\/service\.busi\.inke\.cn\/api\/flash\/screen - reject
^https?:\/\/shop-api\.retail\.mi\.com\/mtop\/navi\/skywheel\/mishop\/splash - reject
^https?:\/\/shopapi\.io\.mi\.com\/mtop\/mf\/resource\/homePage\/pageConfig - reject
^https?:\/\/shopic\.sf-express\.com\/crm\/mobile\/common\/flashscreen - reject
^https?:\/\/siteapi\.zaixs\.com\/.*\/start_ad - reject
^https?:\/\/slapi\.oray\.net\/adver - reject
^https?:\/\/slapi\.oray\.net\/client\/ad - reject
^https?:\/\/smsrebuild1\.mail\.10086\.cn\/together\/s - reject
^https?:\/\/sp\.kaola\.com\/api\/openad - reject
^https?:\/\/sso.ifanr.com\/jiong\/IOS\/appso\/splash\/ - reject
^https?:\/\/stat\.peopleapp\.com\/ - reject
^https?:\/\/superapp\.xgimi\.com\/api/v1\/app\/ad\/configs\?_sort=createdAt:Adesc - reject
^https?:\/\/support\.you\.163\.com\/xhr\/boot\/getBootMedia\.json - reject
^https?:\/\/switch\.jumpvg\.com\/jump\/(getlaunchad|recommend\/ad_conf) - reject
^https?:\/\/syh\.zybang\.com\/com\/adx\/ - reject
^https?:\/\/t1\.market\.xiaomi\.com\/thumbnail\/webp\/w1170q100\/ - reject
^https?:\/\/tcmobileapi\.17usoft\.com\/appindexnew\/index\/getappindexconfig - reject
^https?:\/\/td\.cgmcare\.cn\/api\/ad - reject
^https?:\/\/tk\.lanjiyin\.com\.cn\/ad\/getAdList - reject
^https?:\/\/track\.mm\.taou\.com/v\d\/track - reject
^https?:\/\/ump\.sz\.creditcard\.ecitic\.com\/citiccard\/cm-ump\/ump-gateway\/ump-net-app\/ump-net-app\/adv - reject
^https?:\/\/venus\.yhd\.com\/memhome\/launchConfig - reject
^https?:\/\/vidz\.3hxq\.cn\/api\/app\/(miscs\/mine\/extensions|announcements\/home) - reject
^https?:\/\/vip7\.fzwdyy\.cn:8083\/api\/(getAdvertInfo|getGOOGAdvert) - reject
^https?:\/\/wallpaper\.soutushenqi\.com\/v\d\/dateSignature\/random - reject
^https?:\/\/wallpaper\.soutushenqi\.com\/v\d\/home\/dialog - reject
^https?:\/\/wap\.js\.10086\.cn\/jsmccClient\/cd\/market_content\/api\/v\d\/market_content\.page\.query - reject
^https?:\/\/wap\.ngchina\.cn\/news\/adverts - reject
^https?:\/\/wcprd\.hilton\.com\.cn\/app-middleware\/graphql\?type=splashAd - reject
^https?:\/\/web\.chelaile\.net\.cn\/api\/adpub\/ad - reject
^https?:\/\/weibointl\.api\.weibo\.c(n|om)\/portal\.php\?a=hot_search_users - reject
^https?:\/\/www1.elecfans.com\/www\/delivery\/ - reject
^https?:\/\/www\.ahzs10000\.com\/palmhall\/client\/base\/newVerson_getStartUp\.action - reject
^https?:\/\/www\.kujiale\.com\/app\/queryOpenPage - reject
^https?:\/\/www\.pansearch\.me\/api\/adsite - reject
^https?:\/\/www\.xiaohongshu\.com\/api\/sns\/v\d\/(tag\/)?ads - reject
^https?:\/\/www\.xqpark\.cn\/xqParkApp\/resource\/getResource - reject
^https?:\/\/www\.zhihu\.com\/api\/v4\/search\/related_queries\/answer\/ - reject
^https?:\/\/www\.zhihu\.com\/api\/v4\/topics\/rank_list\/question\/\d+\/related - reject
^https?:\/\/www\.zhihu\.com\/api\/v\d+\/brand\/question/\d+/card\? - reject
^https?:\/\/www\.zhihu\.com\/api\/v\d\/answers\/\d+\/recommendations - reject
^https?:\/\/www\.zhihu\.com\/api\/v\d\/articles\/\d+\/recommendation - reject
^https?:\/\/www\.zhihu\.com\/appview\/v\d\/zhmore - reject
^https?:\/\/www\.zjyilin\.com\/hykweb\/\/index\/openImg - reject
^https?:\/\/xapi\.xinmanhua\.net\/splashgroups\?include=splashs - reject
^https?:\/\/yanxuan\.nosdn\.127\.net\/.*\.mp4 - reject
^https?:\/\/ytmsout\.radio\.cn\/publish\/recScreen\/getLoadPage - reject
^https?:\/\/yunbusiness\.ccb\.com\/clp_service\/txCtrl\?txcode=A3341A00(2|9) - reject
^https?:\/\/zconfig\.alibabausercontent\.com\/zconfig - reject
^https?:\/\/zjdr666\.com\/zjdr\.php\/v\d\/(version|top_notice\?|advert\?position=[^2]+) - reject
^https?:\/\/zjh5api\.ott4china\.com:8091\/cp-api\/view\/config\/pos - reject
^https?:\/\/zjmbank\.js96008\.com:8090\/gw\/advert\/oprAdvertQry - reject
^https?:\/\/ztoread\.ziroom\.com\/ymerApi\/v\d\/index\/open - reject
https://access.mypikpak.com/access_controller/v1/area_accessible - reject
https://api.feidee.net/v1/configs/client/configs - reject
https://apis.lifeweek.com.cn/api/baseConfig/getIosNewConfig - reject
https://b.appsimg.com/upload/momin/ - reject
https://ccsp-egmas.sf-express.com/cx-app-base/base/app/ad/queryAdImages - reject
https://community.feidee.com/api/v1/home/top - reject
https://dl-cu-hz.lechange.cn/oms-online/advertisementPush/* - reject
https://dynamicad.kfc.com.cn/api/app5/homepage/ai/popup - reject
https://fbchina.flipchina.cn/v2/ad/query/* - reject
https://guanyu.longfor.com/app-server/api/v1/main/start - reject
https://homefront.qunar.com/front/splash/ad - reject
https://ios.sspai.com/api/v3/recommend/page/get\?ad.*ios_home_modal - reject
https://mapi.appvipshop.com/vips-mobile/rest/activity/advertisement/get - reject
https://moneymarket.ssjlicai.com/finance-common-operation-ws/api/actShelve/v1/actShelveShowTipInfo - reject
https://new-app-api.ylyk.com/v1/user/myinfo/adviser - reject
https://open3.vistastory.com/v3/api.*get_popup - reject
https://open3.vistastory.com/v3/api/index/loading_ad - reject
https://support.you.163.com/appversync/check.do - reject
https://tagit.hyhuo.com/recover/list - reject
https://tg.feidee.com/online_ad/api/search.do - reject
https://tg.feidee.com/vis-ad-engine-ws/api/show - reject
https://top-widgets-api.xiaozujian.com/api/ad/config - reject
https://yun.feidee.net/cab-draw-activity-ws/terminal/v1/draw-record/user-draw-result - reject
https://yun.feidee.net/cab-query-ws/v1/comet/vtable/score-card - reject
https://yunmk.feidee.net/cab-market-ws/market/v2/contents - reject
https://zone.guiderank-app.com/guiderank-web/app/ad/listLaunchADByCity.do - reject
https?://res\.xiaojukeji\.com\/resapi\/activity\/mget - reject
https?:\/\/helper\.2bulu\.com\/(greenPea\/queryTasks|proSpecial\/allData|saveSplashFrequencyStatistics|getPopInfo|getAppEntranceConfig|promote\/list|getSplash|outing\/reqFoundNewList|outing\/reqIndex) - reject
https?:\/\/m\.sd\.10086\.cn\/zapi\/app_common\/homeWelcome\/welcome.do - reject
https?:\/\/res\.xiaojukeji\.com\/resapi\/activity\/get(Ruled|Preload|PasMultiNotices) - reject

[Map Local]

^https?:\/\/ap\.dongqiudi\.com\/plat\/v4 data="https://raw.githubusercontent.com/ddgksf2013/Scripts/master/dongqiudi.js" header="Content-Type: text/json"

[Script]

12306.js =type=http-request, pattern=^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList, script-path=https://github.com/ddgksf2013/Scripts/raw/master/12306.js, requires-body=true, max-size=-1, timeout=60
123pan.js =type=http-response, pattern=^https?:\/\/www\.123pan\.com\/s\/[0-9a-zA-Z=_/-]+\.html, script-path=https://github.com/ddgksf2013/Scripts/raw/master/123pan.js, requires-body=true, max-size=-1, timeout=60
555Ad.js =type=http-response, pattern=^https?:\/\/[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+){1,3}(:\d+)?\/api\/v\d\/movie\/index_recommend, script-path=https://github.com/ddgksf2013/Scripts/raw/master/555Ad.js, requires-body=true, max-size=-1, timeout=60
Zhihu.Adblock.js =type=http-response, pattern=^https?:\/\/api\.zhihu\.com\/(v4\/)?questions\/\d+\/feeds, script-path=https://gist.githubusercontent.com/ddgksf2013/d43179d848586d561dbb968dee93bae8/raw/Zhihu.Adblock.js, requires-body=true, max-size=-1, timeout=60
Zhihu.Adblock.js =type=http-response, pattern=^https?:\/\/api\.zhihu\.com\/bazaar\/vip_tab\/header, script-path=https://gist.githubusercontent.com/ddgksf2013/d43179d848586d561dbb968dee93bae8/raw/Zhihu.Adblock.js, requires-body=true, max-size=-1, timeout=60
Zhihu.Adblock.js =type=http-response, pattern=^https?:\/\/api\.zhihu\.com\/bazaar\/vip_tab\/modules, script-path=https://gist.githubusercontent.com/ddgksf2013/d43179d848586d561dbb968dee93bae8/raw/Zhihu.Adblock.js, requires-body=true, max-size=-1, timeout=60
Zhihu.Adblock.js =type=http-response, pattern=^https?:\/\/api\.zhihu\.com\/bazaar\/vip_tab\/tabs, script-path=https://gist.githubusercontent.com/ddgksf2013/d43179d848586d561dbb968dee93bae8/raw/Zhihu.Adblock.js, requires-body=true, max-size=-1, timeout=60
Zhihu.Adblock.js =type=http-response, pattern=^https?:\/\/api\.zhihu\.com\/commercial_api.*launch_v2, script-path=https://gist.githubusercontent.com/ddgksf2013/d43179d848586d561dbb968dee93bae8/raw/Zhihu.Adblock.js, requires-body=true, max-size=-1, timeout=60
Zhihu.Adblock.js =type=http-response, pattern=^https?:\/\/api\.zhihu\.com\/moments_v3, script-path=https://gist.githubusercontent.com/ddgksf2013/d43179d848586d561dbb968dee93bae8/raw/Zhihu.Adblock.js, requires-body=true, max-size=-1, timeout=60
Zhihu.Adblock.js =type=http-response, pattern=^https?:\/\/api\.zhihu\.com\/next-data, script-path=https://gist.githubusercontent.com/ddgksf2013/d43179d848586d561dbb968dee93bae8/raw/Zhihu.Adblock.js, requires-body=true, max-size=-1, timeout=60
Zhihu.Adblock.js =type=http-response, pattern=^https?:\/\/api\.zhihu\.com\/next-render, script-path=https://gist.githubusercontent.com/ddgksf2013/d43179d848586d561dbb968dee93bae8/raw/Zhihu.Adblock.js, requires-body=true, max-size=-1, timeout=60
Zhihu.Adblock.js =type=http-response, pattern=^https?:\/\/api\.zhihu\.com\/notifications\/v3\/(message|timeline\/entry\/system_message), script-path=https://gist.githubusercontent.com/ddgksf2013/d43179d848586d561dbb968dee93bae8/raw/Zhihu.Adblock.js, requires-body=true, max-size=-1, timeout=60
Zhihu.Adblock.js =type=http-response, pattern=^https?:\/\/api\.zhihu\.com\/people/self$, script-path=https://gist.githubusercontent.com/ddgksf2013/d43179d848586d561dbb968dee93bae8/raw/Zhihu.Adblock.js, requires-body=true, max-size=-1, timeout=60
Zhihu.Adblock.js =type=http-response, pattern=^https?:\/\/api\.zhihu\.com\/search\/preset_words, script-path=https://gist.githubusercontent.com/ddgksf2013/d43179d848586d561dbb968dee93bae8/raw/Zhihu.Adblock.js, requires-body=true, max-size=-1, timeout=60
Zhihu.Adblock.js =type=http-response, pattern=^https?:\/\/api\.zhihu\.com\/search\/recommend_query, script-path=https://gist.githubusercontent.com/ddgksf2013/d43179d848586d561dbb968dee93bae8/raw/Zhihu.Adblock.js, requires-body=true, max-size=-1, timeout=60
Zhihu.Adblock.js =type=http-response, pattern=^https?:\/\/api\.zhihu\.com\/topstory\/recommend, script-path=https://gist.githubusercontent.com/ddgksf2013/d43179d848586d561dbb968dee93bae8/raw/Zhihu.Adblock.js, requires-body=true, max-size=-1, timeout=60
Zhihu.Adblock.js =type=http-response, pattern=^https?:\/\/api\.zhihu\.com\/unlimited/go/my_card, script-path=https://gist.githubusercontent.com/ddgksf2013/d43179d848586d561dbb968dee93bae8/raw/Zhihu.Adblock.js, requires-body=true, max-size=-1, timeout=60
Zhihu.Adblock.js =type=http-response, pattern=^https?:\/\/api\.zhihu\.com\/user-credit\/basis, script-path=https://gist.githubusercontent.com/ddgksf2013/d43179d848586d561dbb968dee93bae8/raw/Zhihu.Adblock.js, requires-body=true, max-size=-1, timeout=60
Zhihu.Adblock.js =type=http-response, pattern=^https?:\/\/api\.zhihu\.com\/v2\/topstory\/hot-lists, script-path=https://gist.githubusercontent.com/ddgksf2013/d43179d848586d561dbb968dee93bae8/raw/Zhihu.Adblock.js, requires-body=true, max-size=-1, timeout=60
Zhihu.Adblock.js =type=http-response, pattern=^https?:\/\/www\.zhihu\.com\/appview\/v2\/answer\/, script-path=https://gist.githubusercontent.com/ddgksf2013/d43179d848586d561dbb968dee93bae8/raw/Zhihu.Adblock.js, requires-body=true, max-size=-1, timeout=60
Zhihu.Adblock.js =type=http-response, pattern=https://api.zhihu.com/search/hot_search, script-path=https://gist.githubusercontent.com/ddgksf2013/d43179d848586d561dbb968dee93bae8/raw/Zhihu.Adblock.js, requires-body=true, max-size=-1, timeout=60
abchina.js =type=http-response, pattern=^https?:\/\/mobilepaas\.abchina\.com\.cn:441\/mgw\.htm, script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/master/abchina.js, requires-body=true, max-size=-1, timeout=60
ahfs.js =type=http-response, pattern=^https?:\/\/.*(xbwpys|ahhhhfs)\.com\/($|[0-9a-zA-Z_/]+\/$), script-path=https://github.com/ddgksf2013/Scripts/raw/master/ahfs.js, requires-body=true, max-size=-1, timeout=60
amap.js =type=http-response, pattern=^https?:\/\/.*\.amap\.com\/ws\/faas\/amap-navigation\/main-page, script-path=https://github.com/ddgksf2013/Scripts/raw/master/amap.js, requires-body=true, max-size=-1, timeout=60
amap.js =type=http-response, pattern=^https?:\/\/.*\.amap\.com\/ws\/message\/notice\/list, script-path=https://github.com/ddgksf2013/Scripts/raw/master/amap.js, requires-body=true, max-size=-1, timeout=60
amap.js =type=http-response, pattern=^https?:\/\/.*\.amap\.com\/ws\/msgbox\/pull, script-path=https://github.com/ddgksf2013/Scripts/raw/master/amap.js, requires-body=true, max-size=-1, timeout=60
amap.js =type=http-response, pattern=^https?:\/\/.*\.amap\.com\/ws\/promotion-web\/resource, script-path=https://github.com/ddgksf2013/Scripts/raw/master/amap.js, requires-body=true, max-size=-1, timeout=60
amap.js =type=http-response, pattern=^https?:\/\/.*\.amap\.com\/ws\/shield\/dsp\/profile\/index\/nodefaas, script-path=https://github.com/ddgksf2013/Scripts/raw/master/amap.js, requires-body=true, max-size=-1, timeout=60
amap.js =type=http-response, pattern=^https?:\/\/.*\.amap\.com\/ws\/shield\/frogserver\/aocs\/updatable, script-path=https://github.com/ddgksf2013/Scripts/raw/master/amap.js, requires-body=true, max-size=-1, timeout=60
amap.js =type=http-response, pattern=^https?:\/\/.*\.amap\.com\/ws\/shield\/search\/nearbyrec_smart, script-path=https://github.com/ddgksf2013/Scripts/raw/master/amap.js, requires-body=true, max-size=-1, timeout=60
amap.js =type=http-response, pattern=^https?:\/\/.*\.amap\.com\/ws\/shield\/search\/new_hotword, script-path=https://github.com/ddgksf2013/Scripts/raw/master/amap.js, requires-body=true, max-size=-1, timeout=60
amap.js =type=http-response, pattern=^https?:\/\/.*\.amap\.com\/ws\/valueadded\/alimama\/splash_screen, script-path=https://github.com/ddgksf2013/Scripts/raw/master/amap.js, requires-body=true, max-size=-1, timeout=60
amdc.js =type=http-response, pattern=^http:\/\/amdc\.m\.taobao\.com, script-path=https://github.com/ddgksf2013/Scripts/raw/master/amdc.js, requires-body=true, max-size=-1, timeout=60
baiduCloud.adblock.js =type=http-response, pattern=^https:\/\/pan\.baidu\.com\/feed\/cardinfos, script-path=https://gist.githubusercontent.com/ddgksf2013/f43026707830c7818ee3ba624e383c8d/raw/baiduCloud.adblock.js, requires-body=true, max-size=-1, timeout=60
baiduCloud.adblock.js =type=http-response, pattern=^https:\/\/pan\.baidu\.com\/rest\/.*\/membership\/user\?method=gamecenter, script-path=https://gist.githubusercontent.com/ddgksf2013/f43026707830c7818ee3ba624e383c8d/raw/baiduCloud.adblock.js, requires-body=true, max-size=-1, timeout=60
baiduCloud.adblock.js =type=http-response, pattern=^https?:\/\/afd\.baidu\.com\/afd\/entry, script-path=https://gist.githubusercontent.com/ddgksf2013/f43026707830c7818ee3ba624e383c8d/raw/baiduCloud.adblock.js, requires-body=true, max-size=-1, timeout=60
baiduCloud.adblock.js =type=http-response, pattern=^https?:\/\/pan\.baidu\.com\/api\/getsyscfg, script-path=https://gist.githubusercontent.com/ddgksf2013/f43026707830c7818ee3ba624e383c8d/raw/baiduCloud.adblock.js, requires-body=true, max-size=-1, timeout=60
baidumap.js =type=http-response, pattern=^https:\/\/newclient\.map\.baidu\.com\/client\/phpui2\/\?qt=ads, script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/baidumap.js, requires-body=true, max-size=-1, timeout=60
baishitv.js =type=http-response, pattern=^https?:\/\/bp-api\.bestv\.com\.cn\/cms\/api\/audit\/home\/getCommonMixData, script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/master/baishitv.js, requires-body=true, max-size=-1, timeout=60
//bilibili_json.js =type=http-response, pattern=^https://app.bilibili.com/x/v2/search/square, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, requires-body=true, max-size=-1, timeout=60
//bilibili_json.js =type=http-response, pattern=^https:\/\/app\.bilibili\.com\/x\/v2\/splash\/list, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, requires-body=true, max-size=-1, timeout=60
//bilibili_json.js =type=http-response, pattern=^https?:\/\/api\.(bilibili|biliapi)\.(com|net)\/pgc\/page\/bangumi, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, requires-body=true, max-size=-1, timeout=60
//bilibili_json.js =type=http-response, pattern=^https?:\/\/api\.(bilibili|biliapi)\.(com|net)\/pgc\/page\/cinema\/tab\?, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, requires-body=true, max-size=-1, timeout=60
//bilibili_json.js =type=http-response, pattern=^https?:\/\/api\.bili(api|bili)\.(net|com)\/pgc\/season\/app\/related\/recommend\?, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, requires-body=true, max-size=-1, timeout=60
//bilibili_json.js =type=http-response, pattern=^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-interface\/v2\/index\/feed, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, requires-body=true, max-size=-1, timeout=60
//bilibili_json.js =type=http-response, pattern=^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, requires-body=true, max-size=-1, timeout=60
//bilibili_json.js =type=http-response, pattern=^https?:\/\/api\.live\.bilibili\.com\/xlive\/e-commerce-interface\/v\d\/ecommerce-user\/get_shopping_info\?, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, requires-body=true, max-size=-1, timeout=60
//bilibili_json.js =type=http-response, pattern=^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, requires-body=true, max-size=-1, timeout=60
//bilibili_json.js =type=http-response, pattern=^https?:\/\/app\.bilibili\.com\/x\/resource\/top\/activity, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, requires-body=true, max-size=-1, timeout=60
//bilibili_json.js =type=http-response, pattern=^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, requires-body=true, max-size=-1, timeout=60
//bilibili_json.js =type=http-response, pattern=^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\?, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, requires-body=true, max-size=-1, timeout=60
//bilibili_json.js =type=http-response, pattern=^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js, requires-body=true, max-size=-1, timeout=60
//bilibili_proto_beta.js =type=http-response, pattern=^https:\/\/(grpc\.biliapi\.net|app\.bilibili\.com)\/bilibili\.app\.interface\.v1\.Teenagers\/ModeStatus, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_proto_beta.js, requires-body=true, max-size=-1, timeout=60
//bilibili_proto_beta.js =type=http-response, pattern=^https?:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.app\.(view|viewunite)\.v1\.View\/(View|TFInfo)$, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_proto_beta.js, requires-body=true, max-size=-1, timeout=60
//bilibili_proto_beta.js =type=http-response, pattern=^https?:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.app\.dynamic\.v2\.Dynamic\/Dyn(All|Video)$, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_proto_beta.js, requires-body=true, max-size=-1, timeout=60
//bilibili_proto_beta.js =type=http-response, pattern=^https?:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.community\.service\.dm\.v1\.DM\/(DmView|DmSegMobile), script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_proto_beta.js, requires-body=true, max-size=-1, timeout=60
//bilibili_proto_beta.js =type=http-response, pattern=^https?:\/\/(grpc\.biliapi\.net|app\.bilibili\.com)\/bilibili\.polymer\.app\.search\.v1\.Search\/SearchAll$, script-path=https://github.com/ddgksf2013/Scripts/raw/master/bilibili_proto_beta.js, requires-body=true, max-size=-1, timeout=60
cainiao_json.js =type=http-response, pattern=^https?:\/\/cn-acs\.m\.cainiao\.com\/gw\/mtop\.cainiao\.adkeyword, script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/master/cainiao_json.js, requires-body=true, max-size=-1, timeout=60
cainiao_json.js =type=http-response, pattern=^https?:\/\/cn-acs\.m\.cainiao\.com\/gw\/mtop\.cainiao\.app\.mine\.main\.cn, script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/master/cainiao_json.js, requires-body=true, max-size=-1, timeout=60
cainiao_json.js =type=http-response, pattern=^https?:\/\/cn-acs\.m\.cainiao\.com\/gw\/mtop\.cainiao\.guoguo\.nbnetflow\.ads\.index\.cn, script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/master/cainiao_json.js, requires-body=true, max-size=-1, timeout=60
cainiao_json.js =type=http-response, pattern=^https?:\/\/cn-acs\.m\.cainiao\.com\/gw\/mtop\.cainiao\.nbpresentation\.homepage\.merge\.get\.cn, script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/master/cainiao_json.js, requires-body=true, max-size=-1, timeout=60
cainiao_json.js =type=http-response, pattern=^https?:\/\/cn-acs\.m\.cainiao\.com\/gw\/mtop\.cainiao\.nbpresentation\.protocol\.homepage\.get\.cn, script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/master/cainiao_json.js, requires-body=true, max-size=-1, timeout=60
cainiao_json.js =type=http-response, pattern=^https?:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.cainiao\.guoguo\.nbnetflow\.ads\.mshow, script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/master/cainiao_json.js, requires-body=true, max-size=-1, timeout=60
caixinads.js =type=http-response, pattern=^https?:\/\/gg\.caixin\.com\/s\?z=caixin&op=1&c=3362, script-path=https://github.com/ddgksf2013/Scripts/raw/master/caixinads.js, requires-body=true, max-size=-1, timeout=60
caiyun_json.js =type=http-response, pattern=^https?:\/\/api\.caiyunapp\.com\/v\d\/activity, script-path=https://github.com/ddgksf2013/Scripts/raw/master/caiyun_json.js, requires-body=true, max-size=-1, timeout=60
caiyun_json.js =type=http-response, pattern=^https?:\/\/biz\.cyapi\.cn\/api\/v\d\/user_detail, script-path=https://github.com/ddgksf2013/Scripts/raw/master/caiyun_json.js, requires-body=true, max-size=-1, timeout=60
caiyun_json.js =type=http-response, pattern=^https?:\/\/biz\.cyapi\.cn\/v\d\/user, script-path=https://github.com/ddgksf2013/Scripts/raw/master/caiyun_json.js, requires-body=true, max-size=-1, timeout=60
caiyun_json.js =type=http-response, pattern=^https?:\/\/starplucker\.cyapi\.cn\/v\d/campaigns, script-path=https://github.com/ddgksf2013/Scripts/raw/master/caiyun_json.js, requires-body=true, max-size=-1, timeout=60
caiyun_json.js =type=http-response, pattern=^https?:\/\/starplucker\.cyapi\.cn\/v\d/config/cypage, script-path=https://github.com/ddgksf2013/Scripts/raw/master/caiyun_json.js, requires-body=true, max-size=-1, timeout=60
caiyun_json.js =type=http-response, pattern=^https?:\/\/starplucker\.cyapi\.cn\/v\d/notification/message_center, script-path=https://github.com/ddgksf2013/Scripts/raw/master/caiyun_json.js, requires-body=true, max-size=-1, timeout=60
caiyun_json.js =type=http-response, pattern=^https?:\/\/starplucker\.cyapi\.cn\/v\d/operation/banners, script-path=https://github.com/ddgksf2013/Scripts/raw/master/caiyun_json.js, requires-body=true, max-size=-1, timeout=60
caiyun_json.js =type=http-response, pattern=^https?:\/\/starplucker\.cyapi\.cn\/v\d/operation/features, script-path=https://github.com/ddgksf2013/Scripts/raw/master/caiyun_json.js, requires-body=true, max-size=-1, timeout=60
caiyun_json.js =type=http-response, pattern=^https?:\/\/starplucker\.cyapi\.cn\/v\d/operation/feeds, script-path=https://github.com/ddgksf2013/Scripts/raw/master/caiyun_json.js, requires-body=true, max-size=-1, timeout=60
caiyun_json.js =type=http-response, pattern=^https?:\/\/starplucker\.cyapi\.cn\/v\d/operation/homefeatures, script-path=https://github.com/ddgksf2013/Scripts/raw/master/caiyun_json.js, requires-body=true, max-size=-1, timeout=60
caiyun_json.js =type=http-response, pattern=^https?:\/\/wrapper\.cyapi\.cn\/v\d\/activity, script-path=https://github.com/ddgksf2013/Scripts/raw/master/caiyun_json.js, requires-body=true, max-size=-1, timeout=60
coolapk.js =type=http-response, pattern=^https?:\/\/api.coolapk.com\/v6\/main\/init, script-path=https://github.com/ddgksf2013/Scripts/raw/master/coolapk.js, requires-body=true, max-size=-1, timeout=60
coolapk.js =type=http-response, pattern=^https?:\/\/api\.coolapk\.com\/v6\/(feed\/(replyList|detail)|main\/indexV8|dataList), script-path=https://github.com/ddgksf2013/Scripts/raw/master/coolapk.js, requires-body=true, max-size=-1, timeout=60
deleteAeapi.js =type=http-request, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/ad\/get, script-path=https://github.com/ddgksf2013/Scripts/raw/master/deleteAeapi.js, requires-body=false, max-size=-1, timeout=60
deleteAeapi.js =type=http-request, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/ad\/loading\/current, script-path=https://github.com/ddgksf2013/Scripts/raw/master/deleteAeapi.js, requires-body=false, max-size=-1, timeout=60
deleteAeapi.js =type=http-request, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/ad\/loading\/get, script-path=https://github.com/ddgksf2013/Scripts/raw/master/deleteAeapi.js, requires-body=false, max-size=-1, timeout=60
deleteAeapi.js =type=http-request, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/batch, script-path=https://github.com/ddgksf2013/Scripts/raw/master/deleteAeapi.js, requires-body=false, max-size=-1, timeout=60
deleteAeapi.js =type=http-request, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/creator\/musician\/reminder\/message\/get, script-path=https://github.com/ddgksf2013/Scripts/raw/master/deleteAeapi.js, requires-body=false, max-size=-1, timeout=60
deleteAeapi.js =type=http-request, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/delivery\/batch-deliver, script-path=https://github.com/ddgksf2013/Scripts/raw/master/deleteAeapi.js, requires-body=false, max-size=-1, timeout=60
deleteAeapi.js =type=http-request, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/delivery\/deliver, script-path=https://github.com/ddgksf2013/Scripts/raw/master/deleteAeapi.js, requires-body=false, max-size=-1, timeout=60
deleteAeapi.js =type=http-request, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/ios\/upgrade\/get, script-path=https://github.com/ddgksf2013/Scripts/raw/master/deleteAeapi.js, requires-body=false, max-size=-1, timeout=60
deleteAeapi.js =type=http-request, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/link\/home\/framework\/tab, script-path=https://github.com/ddgksf2013/Scripts/raw/master/deleteAeapi.js, requires-body=false, max-size=-1, timeout=60
deleteAeapi.js =type=http-request, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/link\/page\/discovery\/resource\/show, script-path=https://github.com/ddgksf2013/Scripts/raw/master/deleteAeapi.js, requires-body=false, max-size=-1, timeout=60
deleteAeapi.js =type=http-request, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/link\/page\/rcmd\/resource\/show, script-path=https://github.com/ddgksf2013/Scripts/raw/master/deleteAeapi.js, requires-body=false, max-size=-1, timeout=60
deleteAeapi.js =type=http-request, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/link\/position\/show\/resource, script-path=https://github.com/ddgksf2013/Scripts/raw/master/deleteAeapi.js, requires-body=false, max-size=-1, timeout=60
deleteAeapi.js =type=http-request, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/link\/scene\/show\/resource, script-path=https://github.com/ddgksf2013/Scripts/raw/master/deleteAeapi.js, requires-body=false, max-size=-1, timeout=60
deleteAeapi.js =type=http-request, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/search\/chart\/detail, script-path=https://github.com/ddgksf2013/Scripts/raw/master/deleteAeapi.js, requires-body=false, max-size=-1, timeout=60
deleteAeapi.js =type=http-request, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/search\/chart\/list, script-path=https://github.com/ddgksf2013/Scripts/raw/master/deleteAeapi.js, requires-body=false, max-size=-1, timeout=60
deleteAeapi.js =type=http-request, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/search\/default\/keyword\/list, script-path=https://github.com/ddgksf2013/Scripts/raw/master/deleteAeapi.js, requires-body=false, max-size=-1, timeout=60
deleteAeapi.js =type=http-request, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/search\/rcmd\/keyword\/get, script-path=https://github.com/ddgksf2013/Scripts/raw/master/deleteAeapi.js, requires-body=false, max-size=-1, timeout=60
deleteAeapi.js =type=http-request, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/search\/specialkeyword\/get, script-path=https://github.com/ddgksf2013/Scripts/raw/master/deleteAeapi.js, requires-body=false, max-size=-1, timeout=60
deleteAeapi.js =type=http-request, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/search\/suggest\/keyword\/get, script-path=https://github.com/ddgksf2013/Scripts/raw/master/deleteAeapi.js, requires-body=false, max-size=-1, timeout=60
deleteAeapi.js =type=http-request, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/side-bar\/mini-program\/music-service\/account, script-path=https://github.com/ddgksf2013/Scripts/raw/master/deleteAeapi.js, requires-body=false, max-size=-1, timeout=60
deleteAeapi.js =type=http-request, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/vip\/cashier\/tspopup\/get, script-path=https://github.com/ddgksf2013/Scripts/raw/master/deleteAeapi.js, requires-body=false, max-size=-1, timeout=60
deleteAeapi.js =type=http-request, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/vipnewcenter\/app\/resource\/newaccountpage, script-path=https://github.com/ddgksf2013/Scripts/raw/master/deleteAeapi.js, requires-body=false, max-size=-1, timeout=60
deleteAeapi.js =type=http-request, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/yunbei\/account\/entrance\/get, script-path=https://github.com/ddgksf2013/Scripts/raw/master/deleteAeapi.js, requires-body=false, max-size=-1, timeout=60
dict.js =type=http-response, pattern=^https?:\/\/apiproxy\.zuche\.com\/resource\/cardes\/toufang\/marketing, script-path=https://github.com/ddgksf2013/Scripts/raw/master/dict.js, requires-body=true, max-size=-1, timeout=60
douban.js =type=http-response, pattern=^https?:\/\/m\.douban\.com\/(home_guide|movie|tv|book|group|music), script-path=https://github.com/ddgksf2013/Scripts/raw/master/douban.js, requires-body=true, max-size=-1, timeout=60
fly.js =type=http-response, pattern=^https?:\/\/.*flyert.*\/source\/plugin\/mobile\/mobile\.php\?module=threadpost&.+?&page=1, script-path=https://github.com/ddgksf2013/Scripts/raw/master/fly.js, requires-body=true, max-size=-1, timeout=60
hanglvzongheng.js =type=http-response, pattern=^https?:\/\/.*umetrip\.com\.cn\/gateway\/api\/umetrip\/native$, script-path=https://github.com/ddgksf2013/Scripts/raw/master/hanglvzongheng.js, requires-body=true, max-size=-1, timeout=60
iqiyi_open_ads.js =type=http-response, pattern=^https?:\/\/.*cupid\.iqiyi\.com\/mixer\?, script-path=https://github.com/ddgksf2013/Scripts/raw/master/iqiyi_open_ads.js, requires-body=true, max-size=-1, timeout=60
ithome.js =type=http-response, pattern=^https?:\/\/napi\.ithome\.com\/api\/news\/indexv\d\/iphone, script-path=https://github.com/ddgksf2013/Scripts/raw/master/ithome.js, requires-body=true, max-size=-1, timeout=60
jd_json.js =type=http-response, pattern=^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=(hotWords|hotSearchTerms), script-path=https://github.com/ddgksf2013/Scripts/raw/master/jd_json.js, requires-body=true, max-size=-1, timeout=60
keepStyle.js =type=http-response, pattern=^https?:\/\/api\.gotokeep\.com\/athena\/v\d\/people\/my$, script-path=https://github.com/ddgksf2013/Scripts/raw/master/keepStyle.js, requires-body=true, max-size=-1, timeout=60
keepStyle.js =type=http-response, pattern=^https?:\/\/api\.gotokeep\.com\/config\/v\d\/basic, script-path=https://github.com/ddgksf2013/Scripts/raw/master/keepStyle.js, requires-body=true, max-size=-1, timeout=60
keepStyle.js =type=http-response, pattern=^https?:\/\/api\.gotokeep\.com\/twins\/v4\/feed\/course, script-path=https://github.com/ddgksf2013/Scripts/raw/master/keepStyle.js, requires-body=true, max-size=-1, timeout=60
netease.adblock.js =type=http-response, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/ad\/get, script-path=https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js, requires-body=true, max-size=-1, timeout=60
netease.adblock.js =type=http-response, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/ad\/loading\/current, script-path=https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js, requires-body=true, max-size=-1, timeout=60
netease.adblock.js =type=http-response, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/ad\/loading\/get, script-path=https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js, requires-body=true, max-size=-1, timeout=60
netease.adblock.js =type=http-response, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/batch, script-path=https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js, requires-body=true, max-size=-1, timeout=60
netease.adblock.js =type=http-response, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/creator\/musician\/reminder\/message\/get, script-path=https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js, requires-body=true, max-size=-1, timeout=60
netease.adblock.js =type=http-response, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/delivery\/batch-deliver, script-path=https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js, requires-body=true, max-size=-1, timeout=60
netease.adblock.js =type=http-response, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/delivery\/deliver, script-path=https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js, requires-body=true, max-size=-1, timeout=60
netease.adblock.js =type=http-response, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/ios\/upgrade\/get, script-path=https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js, requires-body=true, max-size=-1, timeout=60
netease.adblock.js =type=http-response, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/link\/home\/framework\/tab, script-path=https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js, requires-body=true, max-size=-1, timeout=60
netease.adblock.js =type=http-response, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/link\/page\/discovery\/resource\/show, script-path=https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js, requires-body=true, max-size=-1, timeout=60
netease.adblock.js =type=http-response, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/link\/page\/rcmd\/resource\/show, script-path=https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js, requires-body=true, max-size=-1, timeout=60
netease.adblock.js =type=http-response, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/link\/position\/show\/resource, script-path=https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js, requires-body=true, max-size=-1, timeout=60
netease.adblock.js =type=http-response, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/link\/scene\/show\/resource, script-path=https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js, requires-body=true, max-size=-1, timeout=60
netease.adblock.js =type=http-response, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/search\/chart\/detail, script-path=https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js, requires-body=true, max-size=-1, timeout=60
netease.adblock.js =type=http-response, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/search\/chart\/list, script-path=https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js, requires-body=true, max-size=-1, timeout=60
netease.adblock.js =type=http-response, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/search\/default\/keyword\/list, script-path=https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js, requires-body=true, max-size=-1, timeout=60
netease.adblock.js =type=http-response, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/search\/rcmd\/keyword\/get, script-path=https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js, requires-body=true, max-size=-1, timeout=60
netease.adblock.js =type=http-response, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/search\/specialkeyword\/get, script-path=https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js, requires-body=true, max-size=-1, timeout=60
netease.adblock.js =type=http-response, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/search\/suggest\/keyword\/get, script-path=https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js, requires-body=true, max-size=-1, timeout=60
netease.adblock.js =type=http-response, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/side-bar\/mini-program\/music-service\/account, script-path=https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js, requires-body=true, max-size=-1, timeout=60
netease.adblock.js =type=http-response, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/vip\/cashier\/tspopup\/get, script-path=https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js, requires-body=true, max-size=-1, timeout=60
netease.adblock.js =type=http-response, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/vipnewcenter\/app\/resource\/newaccountpage, script-path=https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js, requires-body=true, max-size=-1, timeout=60
netease.adblock.js =type=http-response, pattern=^https?:\/\/interface(\d)?\.music\.163\.com\/e?api\/yunbei\/account\/entrance\/get, script-path=https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js, requires-body=true, max-size=-1, timeout=60
pinganads.js =type=http-response, pattern=^https?:\/\/api\.jk\.cn\/m\.api, script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/master/pinganads.js, requires-body=true, max-size=-1, timeout=60
pipixia.adblock.js =type=http-response, pattern=^https?:\/\/.*\.pipix\.com\/bds\/(feed\/stream|comment\/cell_reply|cell\/cell_comment|cell\/detail|ward\/list|user\/favorite|user\/cell_coment|user\/cell_userfeed|user\/publish_list), script-path=https://gist.githubusercontent.com/ddgksf2013/bb1dadbd32f67c68772caebcc70b0a33/raw/pipixia.adblock.js, requires-body=true, max-size=-1, timeout=60
pupumarket.js =type=http-response, pattern=^https?:\/\/j1\.pupuapi\.com\/client\/marketing\/banner\/v\d\?position, script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/master/pupumarket.js, requires-body=true, max-size=-1, timeout=60
qidian.js =type=http-response, pattern=^https:\/\/magev6\.if\.qidian\.com\/argus\/api\/(v4\/client\/getsplashscreen|v2\/deeplink\/geturl|v1\/(client\/getconf$|bookshelf\/getHoverAdv|adv\/getadvlistbatch\?positions=iOS_tab|dailyrecommend\/getdailyrecommend)), script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/qidian.js, requires-body=true, max-size=-1, timeout=60
qidian.js =type=http-response, pattern=^https?:\/\/apps\.teamair\.cn\/app\/version, script-path=https://github.com/ddgksf2013/Scripts/raw/master/qidian.js, requires-body=true, max-size=-1, timeout=60
qq-news.js =type=http-response, pattern=^https:\/\/(news\.ssp\.qq\.com\/app|r\.inews\.qq\.com\/(get(QQNewsUnreadList|TagFeedList)|gw\/page\/(channel_feed|event_detail)|news_feed\/hot_module_list)), script-path=https://raw.githubusercontent.com/app2smile/rules/master/js/qq-news.js, requires-body=true, max-size=-1, timeout=60
quark.js =type=http-response, pattern=^https?:\/\/open-cms-api\.(uc|quark)\.cn\/open-cms, script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/master/quark.js, requires-body=true, max-size=-1, timeout=60
redbook_json.js =type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d+\/search\/notes\?, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, requires-body=true, max-size=-1, timeout=60
redbook_json.js =type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/homefeed\/categories, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, requires-body=true, max-size=-1, timeout=60
redbook_json.js =type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/homefeed\?, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, requires-body=true, max-size=-1, timeout=60
redbook_json.js =type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/note\/comment\/list, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, requires-body=true, max-size=-1, timeout=60
redbook_json.js =type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/note\/feed\?, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, requires-body=true, max-size=-1, timeout=60
redbook_json.js =type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/note\/imagefeed, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, requires-body=true, max-size=-1, timeout=60
redbook_json.js =type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/note\/live_photo\/save, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, requires-body=true, max-size=-1, timeout=60
redbook_json.js =type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/note\/redtube\?, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, requires-body=true, max-size=-1, timeout=60
redbook_json.js =type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/note\/videofeed\?, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, requires-body=true, max-size=-1, timeout=60
redbook_json.js =type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/note\/widgets, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, requires-body=true, max-size=-1, timeout=60
redbook_json.js =type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/search\/hint, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, requires-body=true, max-size=-1, timeout=60
redbook_json.js =type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/search\/hot_list, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, requires-body=true, max-size=-1, timeout=60
redbook_json.js =type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/search\/trending, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, requires-body=true, max-size=-1, timeout=60
redbook_json.js =type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/system_service\/config\?, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, requires-body=true, max-size=-1, timeout=60
redbook_json.js =type=http-response, pattern=^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v\d\/system_service\/splash_config, script-path=https://github.com/ddgksf2013/Scripts/raw/master/redbook_json.js, requires-body=true, max-size=-1, timeout=60
shunfeng_json.js =type=http-response, pattern=https://ccsp-egmas.sf-express.com/cx-app-base/base/app/ad/queryInfoFlow, script-path=https://github.com/ddgksf2013/Scripts/raw/master/shunfeng_json.js, requires-body=true, max-size=-1, timeout=60
smzdm_json.js =type=http-response, pattern=^https?:\/\/.*zdmimg\.com\/cpm\/api\/v\d\/advert_distribution\/get_all_advertise, script-path=https://github.com/ddgksf2013/Scripts/raw/master/smzdm_json.js, requires-body=true, max-size=-1, timeout=60
smzdm_json.js =type=http-response, pattern=^https?:\/\/app-api\.smzdm\.com\/util\/loading, script-path=https://github.com/ddgksf2013/Scripts/raw/master/smzdm_json.js, requires-body=true, max-size=-1, timeout=60
smzdm_json.js =type=http-response, pattern=^https?:\/\/baike-api\.smzdm\.com\/home_v3\/list, script-path=https://github.com/ddgksf2013/Scripts/raw/master/smzdm_json.js, requires-body=true, max-size=-1, timeout=60
smzdm_json.js =type=http-response, pattern=^https?:\/\/haojia-api\.smzdm\.com\/home\/list, script-path=https://github.com/ddgksf2013/Scripts/raw/master/smzdm_json.js, requires-body=true, max-size=-1, timeout=60
smzdm_json.js =type=http-response, pattern=^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/article_releated_modul, script-path=https://github.com/ddgksf2013/Scripts/raw/master/smzdm_json.js, requires-body=true, max-size=-1, timeout=60
smzdm_json.js =type=http-response, pattern=^https?:\/\/homepage-api\.smzdm\.com\/v3\/home, script-path=https://github.com/ddgksf2013/Scripts/raw/master/smzdm_json.js, requires-body=true, max-size=-1, timeout=60
smzdm_json.js =type=http-response, pattern=^https?:\/\/s-api.smzdm\.com\/sou\/search_default_keyword, script-path=https://github.com/ddgksf2013/Scripts/raw/master/smzdm_json.js, requires-body=true, max-size=-1, timeout=60
smzdm_json.js =type=http-response, pattern=^https?:\/\/s-api\.smzdm\.com\/sou\/filter\/tags\/hot_tags, script-path=https://github.com/ddgksf2013/Scripts/raw/master/smzdm_json.js, requires-body=true, max-size=-1, timeout=60
smzdm_json.js =type=http-response, pattern=^https?:\/\/s-api\.smzdm\.com\/sou\/list_v10, script-path=https://github.com/ddgksf2013/Scripts/raw/master/smzdm_json.js, requires-body=true, max-size=-1, timeout=60
smzdm_json.js =type=http-response, pattern=^https?:\/\/zhiyou\.m\.smzdm\.com\/user\/vip\/ajax_get_banner, script-path=https://github.com/ddgksf2013/Scripts/raw/master/smzdm_json.js, requires-body=true, max-size=-1, timeout=60
startup.js =type=http-response, pattern=^https?:\/\/api\.m\.jd\.com\/api\?functionId=delivery_show, script-path=https://github.com/ddgksf2013/Scripts/raw/master/startup.js, requires-body=true, max-size=-1, timeout=60
stay.js =type=http-response, pattern=^https?:\/\/api\.shenyin\.name\/stay-fork\/browse\/featured$, script-path=https://github.com/ddgksf2013/Scripts/raw/master/stay.js, requires-body=true, max-size=-1, timeout=60
suishouji.js =type=http-response, pattern=https://userapi.feidee.net/v1/profile/basic_info, script-path=https://raw.githubusercontent.com/ddgksf2013/MoYu/master/suishouji.js, requires-body=true, max-size=-1, timeout=60
suishouji.js =type=http-response, pattern=https://yun.feidee.net/cab-vip-ws/terminal/v1/vip-users/show-info, script-path=https://raw.githubusercontent.com/ddgksf2013/MoYu/master/suishouji.js, requires-body=true, max-size=-1, timeout=60
v2ex.js =type=http-response, pattern=^https?:\/\/.*v2ex\.com\/($|t\/\d+), script-path=https://github.com/ddgksf2013/Scripts/raw/master/v2ex.js, requires-body=true, max-size=-1, timeout=60
weibo_json.js =type=http-response, pattern=^https://api.weibo.cn/2/!/client/light_skin, script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js, requires-body=true, max-size=-1, timeout=60
weibo_json.js =type=http-response, pattern=^https://new.vip.weibo.cn/littleskin/preview, script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js, requires-body=true, max-size=-1, timeout=60
weibo_json.js =type=http-response, pattern=^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua), script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js, requires-body=true, max-size=-1, timeout=60
weibo_json.js =type=http-response, pattern=^https?:\/\/api\.weibo\.cn\/\d\/\w{5}\/(statuses_unread_hot_timeline|timeline), script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js, requires-body=true, max-size=-1, timeout=60
weibo_json.js =type=http-response, pattern=^https?:\/\/api\.weibo\.cn\/\d\/groups\/allgroups\/v\d, script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js, requires-body=true, max-size=-1, timeout=60
weibo_json.js =type=http-response, pattern=^https?:\/\/api\.weibo\.cn\/\d\/video\/tiny_stream_mid_detail, script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js, requires-body=true, max-size=-1, timeout=60
weibo_json.js =type=http-response, pattern=^https?:\/\/boot.*weibo\.com\/v\d\/ad\/preload, script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js, requires-body=true, max-size=-1, timeout=60
weibo_json.js =type=http-response, pattern=^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/(checkin/show|\!/live/media_homelist|comments/build_comments|container/get_item), script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js, requires-body=true, max-size=-1, timeout=60
weibo_json.js =type=http-response, pattern=^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/(searchall|page\?|messageflow), script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js, requires-body=true, max-size=-1, timeout=60
weibo_json.js =type=http-response, pattern=^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/\w{5}\/cardlist, script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js, requires-body=true, max-size=-1, timeout=60
weibo_json.js =type=http-response, pattern=^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/cardlist, script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js, requires-body=true, max-size=-1, timeout=60
weibo_json.js =type=http-response, pattern=^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/groups/timeline, script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js, requires-body=true, max-size=-1, timeout=60
weibo_json.js =type=http-response, pattern=^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/profile/(me|container_timeline), script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js, requires-body=true, max-size=-1, timeout=60
weibo_json.js =type=http-response, pattern=^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/search/(finder|container_timeline|container_discover), script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js, requires-body=true, max-size=-1, timeout=60
weibo_json.js =type=http-response, pattern=^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/statuses/(container_timeline|unread_hot_timeline|extend|video_mixtimeline|unread_topic_timeline), script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js, requires-body=true, max-size=-1, timeout=60
weibo_json.js =type=http-response, pattern=^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/statuses/(unread_)?friends(/|_)timeline, script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js, requires-body=true, max-size=-1, timeout=60
weibo_json.js =type=http-response, pattern=^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/video/(community_tab|remind_info|tiny_stream_video_list), script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js, requires-body=true, max-size=-1, timeout=60
weibo_json.js =type=http-response, pattern=^https?:\/\/weibointl\.api\.weibo\.c(n|om)\/portal\.php.*a=trends, script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js, requires-body=true, max-size=-1, timeout=60
weibo_json.js =type=http-response, pattern=^https?:\/\/weibointl\.api\.weibo\.c(n|om)\/portal\.php.*get_coopen_ads, script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js, requires-body=true, max-size=-1, timeout=60
weibo_json.js =type=http-response, pattern=^https?:\/\/weibointl\.api\.weibo\.cn\/portal\.php\?a=open_app, script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js, requires-body=true, max-size=-1, timeout=60
weibo_json.js =type=http-response, pattern=^https?:\/\/weibointl\.api\.weibo\.cn\/portal\.php\?a=search_topic, script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js, requires-body=true, max-size=-1, timeout=60
weibo_json.js =type=http-response, pattern=^https?:\/\/weibointl\.api\.weibo\.cn\/portal\.php\?a=user_center, script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js, requires-body=true, max-size=-1, timeout=60
weibo_search_info.json =type=http-response, pattern=^https?:\/\/weibointl\.api\.weibo\.c(n|om)\/portal\.php.*a=get_searching_info, script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_search_info.json, requires-body=true, max-size=-1, timeout=60
weibo_search_topic.json =type=http-response, pattern=^https?:\/\/weibointl\.api\.weibo\.c(n|om)\/portal\.php.*feed&a=search_topic, script-path=https://github.com/ddgksf2013/Scripts/raw/master/weibo_search_topic.json, requires-body=true, max-size=-1, timeout=60
weixin110.js =type=http-response, pattern=^https\:\/\/(weixin110\.qq|security.wechat)\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi\?, script-path=https://raw.githubusercontent.com/ddgksf2013/Scripts/master/weixin110.js, requires-body=true, max-size=-1, timeout=60
ximalaya_json.js =type=http-response, pattern=^https?:\/\/.*\.xima.*\.com\/discovery-category\/customCategories, script-path=https://github.com/ddgksf2013/Scripts/raw/master/ximalaya_json.js, requires-body=true, max-size=-1, timeout=60
ximalaya_json.js =type=http-response, pattern=^https?:\/\/.*\.xima.*\.com\/discovery-category\/v\d/category, script-path=https://github.com/ddgksf2013/Scripts/raw/master/ximalaya_json.js, requires-body=true, max-size=-1, timeout=60
ximalaya_json.js =type=http-response, pattern=^https?:\/\/.*\.xima.*\.com\/discovery-feed\/v\d\/mix, script-path=https://github.com/ddgksf2013/Scripts/raw/master/ximalaya_json.js, requires-body=true, max-size=-1, timeout=60
ximalaya_json.js =type=http-response, pattern=^https?:\/\/.*\.xima.*\.com\/focus-mobile\/focusPic, script-path=https://github.com/ddgksf2013/Scripts/raw/master/ximalaya_json.js, requires-body=true, max-size=-1, timeout=60
ximalaya_json.js =type=http-response, pattern=^https?:\/\/.*\.xima.*\.com\/mobile-user\/v\d\/homePage, script-path=https://github.com/ddgksf2013/Scripts/raw/master/ximalaya_json.js, requires-body=true, max-size=-1, timeout=60
zhihu_openads.js =type=http-response, pattern=^https?:\/\/api\.zhihu\.com\/commercial_api.*launch_v2, script-path=https://github.com/ddgksf2013/Scripts/raw/master/zhihu_openads.js, requires-body=true, max-size=-1, timeout=60replace-body.js =type=http-response, pattern=https://beta-api.crunchyroll.com/cms, script-path=https://raw.githubusercontent.com/mieqq/mieqq/master/replace-body.js, requires-body=true, argument=offset_ms":\d+->offset_ms":99999999999999,max-size=-1, timeout=60
replace-body.js =type=http-response, pattern=^https?:\/\/maicai\.api\.ddxq\.mobi\/advert\/getAd, script-path=https://raw.githubusercontent.com/mieqq/mieqq/master/replace-body.js, requires-body=true, argument=rt_time":\d{2}->rt_time":40,max-size=-1, timeout=60
replace-body.js =type=http-response, pattern=^https?:\/\/.*flyert.*\/api\/mobile\/index\.php\?version=\d&mobile=yes&module=basicdata&type=forumlist, script-path=https://raw.githubusercontent.com/mieqq/mieqq/master/replace-body.js, requires-body=true, argument=adv->ddgksf2013,max-size=-1, timeout=60
replace-body.js =type=http-response, pattern=^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=lite_advertising, script-path=https://raw.githubusercontent.com/mieqq/mieqq/master/replace-body.js, requires-body=true, argument=jdLiteAdvertisingVO->ddgksf2013,max-size=-1, timeout=60
replace-body.js =type=http-response, pattern=^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=lite_SmartPush, script-path=https://raw.githubusercontent.com/mieqq/mieqq/master/replace-body.js, requires-body=true, argument=pushData->ddgksf2013,max-size=-1, timeout=60
replace-body.js =type=http-response, pattern=^https?:\/\/res.kfc.com.cn\/CRM\/kfcad\/apphome6\/apphome.*json, script-path=https://raw.githubusercontent.com/mieqq/mieqq/master/replace-body.js, requires-body=true, argument=bootStrapAd->ddgksf2013,max-size=-1, timeout=60
replace-body.js =type=http-response, pattern=^https?:\/\/apapia-sqk\.manmanbuy\.com\/index_json\.ashx, script-path=https://raw.githubusercontent.com/mieqq/mieqq/master/replace-body.js, requires-body=true, argument=splashAD->ddgksf2013,max-size=-1, timeout=60
replace-body.js =type=http-response, pattern=^https?:\/\/careapi\.oclean\.com\/mall\/v\d\/User\/GetUserCenter, script-path=https://raw.githubusercontent.com/mieqq/mieqq/master/replace-body.js, requires-body=true, argument=banner"->ddgksf2013",max-size=-1, timeout=60
replace-body.js =type=http-response, pattern=^https?:\/\/sh-gateway\.shihuo\.cn\/v\d\/services\/sh-adapi\/home\/screen, script-path=https://raw.githubusercontent.com/mieqq/mieqq/master/replace-body.js, requires-body=true, argument=egin_time":"\d{4}->egin_time":"2099,max-size=-1, timeout=60
replace-body.js =type=http-response, pattern=^https?:\/\/tft-app\.cdtft\.cn\/gateway-customer\/tftapp\/tft-ams\/api\/appAd, script-path=https://raw.githubusercontent.com/mieqq/mieqq/master/replace-body.js, requires-body=true, argument=officialAdvertResultVo->ddgksf2013,max-size=-1, timeout=60
replace-body.js =type=http-response, pattern=^https?:\/\/lcen\.xiaote\.net\/api\/graphql, script-path=https://raw.githubusercontent.com/mieqq/mieqq/master/replace-body.js, requires-body=true, argument=screenSplashAd->ddgksf2013,max-size=-1, timeout=60
replace-body.js =type=http-response, pattern=^https?:\/\/apps\.workair\.cn\/app\/version, script-path=https://raw.githubusercontent.com/mieqq/mieqq/master/replace-body.js, requires-body=true, argument=ads"->ddgksf2013",max-size=-1, timeout=60


[MITM]

hostname = %APPEND%  *.1rtb.net, *.58cdn.com.cn, *.5eplay.com, *.ahhhhfs.com, *.anythinktech.com, *.api.weibo.*, *.bili*.*, *.bilibili.*, *.bilibili.com, *.chelaile.net.cn, *.didapinche.com, *.ecoliving168.com, *.fenbi.com, *.flyert.*, *.hoopchina.com, *.kakamobi.cn, *.laichon.com, *.mting.info, *.peopleapp.com, *.qyfxgd.cn, *.ssjlicai.*, *.tipatipa.xyz, *.ubixioe.com, *.umetrip.com, *.uve.weibo.com, *.v2ex.com, *.weilai555.com, *.xbwpys.com, *.xmcdn.*, *.yuanfudao.com, *.yuxueyuan.cn, *.zdmimg.com, *cupid.iqiyi.com, *gaoqingdianshi.com, *mangaapi.manhuaren.*, -*cdn*.biliapi.net, -*tracker*.biliapi.net, 101.201.175.228, 101.227.139.118, 103.91.210.141, 116.85.2.14, 116.85.2.15, 118.178.214.118, 120.241.*, 140.179.224.63, 182.92.251.113, 1jietu.com, 212.129.159.79, 3g.csair.com, 42.187.199.248, 47.100.65.202, a.qiumibao.com, access.mypikpak.com, acs-m.freshippo.com, acs.m.taobao.com, ad.12306.cn, ad.cj.sina.cn, ad.cyapi.cn, ad.lofter.com, ad.mcloud.139.com, adapi.izuiyou.com, adm.10jqka.com.cn, adpai.thepaper.cn, adproxy.autohome.com.cn, ads.closeli.cn, adv.ccb.com, advertise.bczeducation.cn, adx-cn.anythinktech.com, afd.baidu.com, ap.dongqiudi.com, apapia-sqk.manmanbuy.com, api-access.pangolin-sdk-toutiao.*com, api-ad-product.huxiu.com, api-new.app.acfun.cn, api-one-wscn.awtmt.com, api-sams.walmartmobile.cn, api.00bang.cn, api.21ec74.com, api.ahmobile.cn, api.caijingmobile.com, api.caiyunapp.com, api.cloud.189.cn, api.coolapk.com, api.dangdang.com, api.douban.com, api.futunn.com, api.gameplus.qq.com, api.gamer.com.tw, api.gotokeep.com, api.haohaozhu.cn, api.internetofcity.cn, api.ireader.mobi, api.izuiyou.com, api.jk.cn, api.jr.mi.com, api.jxedt.com, api.kkmh.com, api.kmovie.gifshow.com, api.kurobbs.com, api.live.bilibili.com, api.livelab.com.cn, api.m.jd.com, api.m.mi.com, api.mcd.cn, api.medlive.cn, api.merach.com, api.moomoo.com, api.mwee.cn, api.psy-1.com, api.qbb6.com, api.qd-metro.com, api.rr.tv, api.sfacg.com, api.shenyin.name, api.smart.jd.com, api.taou.com, api.tipsoon.com, api.touker.com, api.vistopia.com.cn, api.weibo.cn, api.wfdata.club, api.wmpvp.com, api.xiachufang.com, api.xiaoheihe.cn, api.xiaoyi.com, api.xueqiu.com, api.yangkeduo.com, api.yikaobang.com.cn, api.yonghuivip.com, api.ys7.com, api.zcool.com.cn, api.zhihu.com, api1.34580.com, api2.picooc.com, api3.cls.cn, apiproxy.zuche.com, apis.lifeweek.com.cn, app-api.medsci.cn, app-cdn.2q10.com, app-gateway.leisuapi.com, app-gw.csdn.net, app.10099.com.cn, app.58.com, app.ap.d3yuiw4.com, app.api.qjjfin.com, app.api.versa-ai.com, app.bilibili.com, app.c.nf.migu.cn, app.dewu.com, app.duxiaoman.com, app.flymodem.com.cn, app.hbooker.com, app.homeinns.com, app.ibuscloud.com, app.jiantou8.com, app.yinxiang.com, app.zhuanzhuan.com, app2.autoimg.cn, app3.qdaily.com, appactive.1234567.com.cn, appapi.huazhu.com, appconf.mail.163.com, apps.api.ke.com, apps.teamair.cn, apps.workair.cn, appwk.baidu.com, axxd.xmseeyouyima.com, b.appsimg.com, baike-api.smzdm.com, bbs-api.miyoushe.com, bdsp-x.jd.com, beta-api.crunchyroll.com, bgw.xinyue.qq.com, boot.biz.weibo.com, bp-api.bestv.com.cn, business.msstatic.com, capi.lkcoffee.com, careapi.oclean.com, ccsp-egmas.sf-express.com, cdke.youdao.com, cdn-evone-ceph.echargenet.com, cdn.*.chelaileapp.cn, cdn.cmgadx.com, cdns.chinastock.com.cn, client-api-v2.oray.com, client-api.oray.com, client.app.coc.10086.cn, client.mail.163.com, client.qunar.com, client.tujia.com, cn-acs.m.cainiao.com, cn-app.narwaltech.com, comapi.reader.qq.com, comicapi.manhuashe.com, commontgw.reader.qq.com, compus.xiaofubao.com, cq11344-app-https-api-1.ictun.com, creditcardapp.bankcomm.cn, creditcardapp.bankcomm.com, daoyu.sdo.com, dapis.mting.info, data-collector.soulapp.cn, device-box.onethingpcs.com, dili.bdatu.com, dispatcher.camera360.com, dj.palmestore.com, djcapp.game.qq.com, dl-cu-hz.lechange.cn, dq.dxy.cn, dsp-x.jd.com, dynamicad.kfc.com.cn, e.dangdang.com, easyreadfs.nosdn.127.net, elemecdn.com, emdcadvertise.eastmoney.com, emdcadvise.eastmoney.com, entree-ws.igetget.com, entry.ubixioe.com, evs.500.com, explorer.tratao.com, fbchina.flipchina.cn, file.mylyg.net, flowplus.meituan.net, ftapi.10jqka.com.cn, fuss10.elemecdn.com, fuwu.nhsa.gov.cn, gab.122.gov.cn, gateway-api.dushu365.com, gateway.36kr.com, gateway.abite.com, gateway.cotticoffee.com, gateway.shouqiev.com, gd.10086.cn, gg.caixin.com, gha.ghac.cn, goblin.hupu.com, god.gameyw.netease.com, gongdu.youshu.cc, gorgon.youdao.com, grpc.biliapi.net, guanyu.longfor.com, guide-acs.m.taobao.com, gw.aihuishou.com, gw.kaola.com, gx.10086.cn, haojia-api.smzdm.com, haojia.m.smzdm.com, hc-ssp.sm.cn, helper.2bulu.com, hfapp-service.qweather.net, home.mi.com, homefront.qunar.com, homepage-api.smzdm.com, hxqapi.hiyun.tv, i.ys7.com, i.zhaojinapp.com, igetcool-gateway.igetcool.com, ih2.ireader.com, img.jiemian.com, img.meituan.net, img.rr.tv, info.mina.mi.com, interface*.music.163.com, ios.sspai.com, iphone.ac.qq.com, iyes.youku.com, j1.pupuapi.com, jad-api.jin10.com, jdread-api.jd.com, js-ad.ayximgs.com, jz.wacaijizhang.com, kad.gotokeep.com, lban.spdb.com.cn, lcen.xiaote.net, lchttpapi.xczim.com, learn.chaoxing.com, lens.leoao.com, list-app-m.i4.cn, lop-proxy.jd.com, m-adphone.wenhua.com.cn, m.client.10010.com, m.ibuscloud.com, m.msyc.cc, m.sd.10086.cn, m.stock.pingan.com, m.tuniu.com, m.you.163.com, ma-adx.ctrip.com, mage*.if.qidian.com, maicai.api.ddxq.mobi, mama.dxy.com, mapi.appvipshop.com, mapi.dangdang.com, mapi.mafengwo.cn, mapi.sfbest.com, mapi.weibo.*, mapi.weibo.com, mbd.baidu.com, mgw.mpaas.cn-hangzhou.aliyuncs.com, mi.gdt.qq.com, mime.baidu.com, mix-api.camera360.com, mob.mddcloud.com.cn, mobads.baidu.com, mobileapi.xiamenair.com, mobilepaas.abchina.com.cn, mpcs.suning.com, mpos-pic.helipay.com, mrobot.pconline.com.cn, ms.jr.jd.com, mxsa.mxbc.net, napi.ithome.com, new-app-api.ylyk.com, new.vip.weibo.cn, newapp2.szsmk.com, newclient.map.baidu.com, notify.baicizhan.com, open-cms-api.quark.cn, open-cms-api.uc.cn, open.e.kuaishou.com, open.fitdays.cn, open.taou.com, open3.vistastory.com, otheve.beacon.qq.com, overseas.weico.cc, p*.meituan.net, p0.pipi.cn, pages.xiaohongshu.com, pan-api.bitqiu.com, pan.baidu.com, patientgate.91160.com, peisongapi.meituan.com, pinggai*.caixin.com, pipi.4kya.com, promotion.medlive.cn, pss.txffp.com, pzoap.moedot.com, qadx.qinlinad.com, r.inews.qq.com, referee.xiaohongshu.com, rengine-platform.llsapp.com, res.kfc.com.cn, res.pizzahut.com.cn, res.xiaojukeji.com, restapi.iyunmai.com, router-app-api.jdcloud.com, rtbapi.douyucdn.cn, s-api.smzdm.com, s3plus.meituan.net, saad.ms.zhangyue.net, sdk.alibaba.com.ailbaba.me, security.wechat.com, service.busi.inke.cn, sh-gateway.shihuo.cn, shop-api.retail.mi.com, shopapi.io.mi.com, slapi.oray.net, smsrebuild1.mail.10086.cn, sp.kaola.com, spclient.wg.spotify.com, sso.ifanr.com, ssp.dzh.com.cn, starplucker.cyapi.cn, superapp.xgimi.com, support.you.163.com, switch.jumpvg.com, syh.zybang.com, t1.market.xiaomi.com, tagit.hyhuo.com, tcmobileapi.17usoft.com, td.cgmcare.cn, testflight.apple.com, tft-app.cdtft.cn, tk.lanjiyin.com, top-widgets-api.xiaozujian.com, track.mm.taou.com, ump.sz.creditcard.ecitic.com, us.l.qq.com, venus.yhd.com, vidz.3hxq.cn, vip7.fzwdyy.cn, wallpaper.soutushenqi.com, wap.js.10086.cn, wap.ngchina.cn, wcprd.hilton.com, web.chelaile.net.cn, weixin110.qq.com, wmapi.meituan.com, www.123pan.com, www.ahzs10000.com, www.flyert.com, www.i3zh.com, www.kujiale.com, www.meituan.com, www.pansearch.me, www.xiaohongshu.com, www.xqpark.cn, www1.elecfans.com, wxa.wxs.qq.com, xapi.xinmanhua.net, yanxuan.nosdn.127.net, ytmsout.radio.cn, yunbusiness.ccb.com, zconfig.alibabausercontent.com, zhiyou.m.smzdm.com, zjdr666.com, zjh5api.ott4china.com, zjmbank.js96008.com, zone.guiderank-app.com, ztoread.ziroom.com,*.amap.com,*.feidee.*,*.pipix.com,*.xima*.*,*biliapi.net,-broadcast.chat.bilibili.com,103.41.167.226,103.41.167.234,103.41.167.235,103.41.167.236,103.41.167.237,118.89.204.198,2402:4e00:1200:ed00:0:9089:6dac:96b6,acs4miniapp-inner.m.taobao.com,api.369cx.cn,api.weibo.*,api.zhihu.com,app-api.smzdm.com,appcloud2.zhihu.com,cn-acs.m.cainiao.com,edith.xiaohongshu.com,hc-ssp.sm.cn,interface*.music.163.com,m-cloud.zhihu.com,m.douban.com,magev6.if.qidian.com,news.ssp.qq.com,pan.baidu.com,wrapper.cyapi.cn,www.zhihu.com,zhuanlan.zhihu.com
