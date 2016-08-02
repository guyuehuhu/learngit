    
  function initWX(){
	var myUrl = encodeURIComponent(location.href.split('#')[0]);  
	//if(ua.weixin){	
    $.getJSON('//wx.chubao.cn/getwxconf?url='+myUrl+'&callback=?', function(remoteData){
	   //向服务器发送请求，获得signature
	   console.log('wx init over');
	 wx.config({
	    debug: false, // 开启或关闭调试模式,调用的所有api的返回值会在客户端alert出来
	    appId: remoteData.appId, // 必填，公众号的唯一标识
	    timestamp: remoteData.timestamp, // 必填，生成签名的时间戳
	    nonceStr: remoteData.nonceStr, // 必填，生成签名的随机串
	    signature: remoteData.signature,// 必填，签名，见附录1
	    jsApiList: ['hideOptionMenu'] // 必填，需要使用的JS接口列表
     });
	 wx.ready(function(){
	     wx.hideOptionMenu();
		  $('.mainContainer').css('display', 'block');
     });
   wx.error(function(res){
      
	
   });
	 
   });
	//}
  }
  initWX();
  