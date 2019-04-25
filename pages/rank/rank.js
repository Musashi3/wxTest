// pages/rank/rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
     friendList:[
      {img_url:"../../img/touxiang/1.jpg",uname:"大锤",invite:"邀请"},
      {img_url:"../../img/touxiang/2.jpg",uname:"老李",invite:"邀请"},
      {img_url:"../../img/touxiang/3.jpg",uname:"阿张",invite:"邀请"},
      {img_url:"../../img/touxiang/4.jpg",uname:"老王",invite:"邀请"},
      {img_url:"../../img/touxiang/5.jpg",uname:"老杨",invite:"邀请"},
      {img_url:"../../img/touxiang/6.jpg",uname:"老林",invite:"邀请"},
      {img_url:"../../img/touxiang/7.jpg",uname:"老章",invite:"邀请"},
      {img_url:"../../img/touxiang/8.jpg",uname:"老轩",invite:"邀请"},
      {img_url:"../../img/touxiang/9.jpg",uname:"老秦",invite:"邀请"},
      {img_url:"../../img/touxiang/10.jpg",uname:"老陆"},
     ],
     btns:[{title:"好友排行"},{title:"全网排行"},{title:"好友新歌"},{title:"附近热歌"}],
  },
  //是否邀请
  isInvite:function(e){
    var index = e.currentTarget.dataset.index;
    var invite = 'friendList['+index+'].invite';
    this.setData({
      [invite]:"已邀请"
    })
    wx.showToast({
      title: '邀请成功',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
  },
  //切换选中
  changeCheck: function (e) {
    var index = e.currentTarget.dataset.index;
    this.setData({
      num:index
    })
  },
  //返回点歌台
  jump:function(){
    wx.switchTab({
      url: '../index/index',
    })
  },
  //滑动切换
  changeCheck2: function (e) {
    var index = e.detail.current;
    this.setData({
      num: index
    })
  },
  //分享
  share:function(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})