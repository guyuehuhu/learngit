var strEndTime = '2016/04/06 20:00:00';
var wsCache = new WebStorageCache();
var myNumber, timesAlready ;
function saveStorage(itemName , itemValue) {
     // localStorage.setItem(itemName, itemValue);
	 wsCache.set(itemName, itemValue,  {exp : 3600*24});
}

function loadStorage(itemName) {
 // msg.innerHTML = localStorage.getItem(itemName);
		 return wsCache.get(itemName);
}
	  
function deleteInStorage(itemName){
		  wsCache.delete(itemName);
}
	  
	 
var currentDate = new Date();
var currentDay = currentDate.getDay();

var savedDay = loadStorage('day');
console.log(savedDay);
if( currentDay == savedDay ){
     timesAlready = loadStorage('times');
     if( timesAlready == null ){
     	saveStorage('times', 3);
     	timesAlready = 3 ;
     }
}

else{
	saveStorage('day' , currentDay);

	saveStorage('times', 3);
    timesAlready = 3 ;

}