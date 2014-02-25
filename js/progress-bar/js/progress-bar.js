/**
 * Created by Administrator on 14-1-27.
 */
(function (jQuery,exports) {

    jQuery.fn.mvLoadIng = function (start,callback) {
        var loadState = 0 + start,
            stateSave,
            self = this;
        (function loading (){
            stateSave = (100 - loadState)/2
            loadState = loadState + stateSave;
            callback (loadState);
            self[0].loadIng = setTimeout(function () {
                loading();
            },500)
        })();
    }

    jQuery.fn.mvLoadStart = function mvLoadStart (start) {
        var self = $(this),
            loadStateBox = $("<div></div>").addClass("mv-load-state"),
            loadIng = $("<div></div>").addClass("mv-load-ing"),
            loadP = $("<p></p>").html("数据加载中"),
            load = $("<div></div>").addClass("mv-load"),
            loadStyle = $("<div></div>").addClass("mv-load-style"),
            loadCenter = $("<div></div>").addClass("mv-progress-bar-center"),
            state = start || 20;

        self.addClass("mv-center-progress");
        load.append(loadStyle);
        loadIng.append(loadP,load);
        loadStateBox.append(loadIng);
        loadCenter.append(loadStateBox);

        self.append(loadCenter);


        loadStateBox.mvLoadIng(state,function (loadState) {
            var self = jQuery(loadStateBox),
                selfLoad = self.find(".mv-load-style");
            self.fadeIn();
            selfLoad.animate({
                "width": (loadState * 2.1) + "px" 
            });
        });
    };
    jQuery.fn.mvLoadEnd = function mvLoadEnd (speed) {
        var self = $(this),
            loadStateBox = self.find(".mv-progress-bar-center"),
            selfLoad = self.find(".mv-load-style"),
            speed = speed || 1000;

        selfLoad.stop();    
       
        clearTimeout(loadStateBox[0].loadIng);

        loadStateBox.fadeOut(speed,function () {
            loadStateBox.remove();
        });

    };

}) ($,window);
