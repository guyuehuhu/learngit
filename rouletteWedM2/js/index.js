function roulette() {
       
        this._startbox = 0;         //上次结果，此次的起点
        this._endbox = 1;          //这是这次的结果
        this._jumpnum = 24;        //路径中所经历的格子数
        this._self = this;
       
}

roulette.prototype.showbox = function(index) {
	    var myIndex = ( (this._startbox + index) %  $('.blockContainer').length ) ;
	    $('.blockContainer').removeClass('selected');
        $('#'+myIndex).addClass('selected');
}

    //每次改变需要显示的box，返回速度
    roulette.prototype.changeshowlist = function(jumpindex) {
        var i,
            jumpmax = this._jumpnum;
        switch (jumpindex) {
            case 0:
                
                return 400;
            case 1:
                
                return 350;
            case 2:
                
                return 300;
            case 3:
                
                return 200;
            case jumpmax - 1:
                
                return 800;
            case jumpmax - 2:
                
                return 700;
            case jumpmax - 3:
               
                return 600;
            case jumpmax - 4:
                
                return 400;
            case jumpmax - 5:
               
                return 300;
            case jumpmax - 6:
                
                return 200;
            case jumpmax - 7:
                
                return 100;
            case jumpmax - 8:
                
                return 50;
            default:
               
                return 50;
        }
    }

    roulette.prototype.run = function( func ) {
        var self = this._self,
            time = 500,
            jumpmax = this._jumpnum,
            jumpindex = 0,
            timer = null;
        function timerdo() {
            time = self.changeshowlist(jumpindex);
            self.showbox(jumpindex);
            jumpindex++;
            if (jumpindex >= jumpmax) {
                clearTimeout(timer);
                self._startbox = self._endbox;
                setTimeout(function() { func() }, 200);
            }
            else {
                timer = setTimeout(timerdo, time);
            }
        }
        timerdo();
    }
	
	
	