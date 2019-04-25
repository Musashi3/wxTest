//index.js
//获取应用实例
const app = getApp()

Page({
  onLoad:function(options){
    this.setData({
      navH:App.globalData.navHeight
    })
  },
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list:[{title:"点唱周榜"},{title:"猜你喜欢"},{title:"已点伴奏"},{title:"飙升榜"}],
    songList:[
      {title:"站着等你三千年",songer:"王琪",num:"109.5",img_url:"../../img/fengmian.jpg"},
      {title:"绿色",songer:"陈雪凝",num:"102.5",img_url:"../../img/fengmian.jpg"},
      {title:"万爱千思",songer:"王琪",num:"101.5",img_url:"../../img/fengmian.jpg"},
      {title:"一曲相思",songer:"半阳",num:"99.5",img_url:"../../img/fengmian.jpg"},
      {title:"望爱却步",songer:"于洋",num:"88.5",img_url:"../../img/fengmian.jpg"},
      {title:"站着等你三千年",songer:"王琪",num:"109.5",img_url:"../../img/fengmian.jpg"},
      {title:"绿色",songer:"陈雪凝",num:"102.5",img_url:"../../img/fengmian.jpg"},
      {title:"万爱千思",songer:"王琪",num:"101.5",img_url:"../../img/fengmian.jpg"},
      {title:"一曲相思",songer:"半阳",num:"99.5",img_url:"../../img/fengmian.jpg"},
      {title:"望爱却步",songer:"于洋",num:"88.5",img_url:"../../img/fengmian.jpg"},
      ],

    num:0,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //切换选中
  changeCheck:function(e){
    var index=e.currentTarget.dataset.index;
    this.setData({
      num:index
    })
  },
  //滑动切换
  changeCheck2:function(e){
    var index=e.detail.current;
    this.setData({
      num:index
    })
  },
  //跳转歌曲页面
  jump:function(e){
    var index=e.currentTarget.dataset.idx;
    var _this=this.data.songList[index]
    var img_url=_this.img_url;
    var songer=_this.songer;
    var title=_this.title;
    wx.navigateTo({
      url: '../song/song?img_url='+img_url+'&songer='+songer+'&title='+title,
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
