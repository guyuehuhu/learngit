var strEndTime = '2016/04/06 20:00:00';
var wsCache = new WebStorageCache();
var myNumber ;
function saveStorage(itemName , itemValue) {
     // localStorage.setItem(itemName, itemValue);
	 wsCache.set(itemName, itemValue,  {exp : 3600*4});
}

function loadStorage(itemName) {
 // msg.innerHTML = localStorage.getItem(itemName);
		 return wsCache.get(itemName);
}
	  
function deleteInStorage(itemName){
		  wsCache.delete(itemName);
}
	  
	 
function addDate(date,days){ 
       var d=new Date(date); 
       d.setDate(d.getDate()+days); 
       var m=d.getMonth()+1; 
       return d.getFullYear()+'/'+m+'/'+d.getDate()+' 20:00:00'; 
} 
  var currentDate = new Date();
  var currentDay = currentDate.getDay();
  var hours = currentDate.getHours();
  if( currentDay <= 1 ){
	   if( currentDay == 1 && hours >= 20 ){
		    _hmt.push(['_trackEvent', "rouletteWed", "rouletteWedInWed"]);
		   console.log('in activity');
		   $('#count').css('display', 'none');
		  
		   myNumber = loadStorage('WedNumber');
		   if( myNumber ){
			    console.log('saved number already');
		   }
		   else{
			    $('#phone').css('display', 'block');
		   }
	   }
	   else
		strEndTime = (addDate(currentDate , 1-currentDay ));
  }
	 
  else
	strEndTime = ( addDate(currentDate , 7-currentDay + 1 ) );
  
  var EndTime=new Date(strEndTime);
  
  var days= EndTime - currentDate; 
  EndTimeMsg = parseInt(days / 1000);//精确到秒
  console.log(EndTimeMsg);
  function show() {
    h = Math.floor(EndTimeMsg / 60 / 60);
    m = Math.floor((EndTimeMsg - h * 60 * 60) / 60);
    s = Math.floor((EndTimeMsg - h * 60 * 60 - m * 60));
    if( s < 10 )
		s= "0"+s;
	
	if( m < 10 )
		m = '0'+ m ;
	h1 = h%24;
	if( h1 < 10 )
		h1 = '0'+ h1 ;
	 document.getElementById("day").innerHTML = parseInt(h/24);
	 document.getElementById("time").innerHTML = h1+':'+m+':'+s;
    EndTimeMsg--;
    if (EndTimeMsg < 0)
    {
         document.getElementById("day").innerHTML = '0'
	 document.getElementById("time").innerHTML = '00:00:00';
    }
  }
  show();
  setInterval("show()", 1000)