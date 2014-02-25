/**
 * Created by Administrator on 14-1-27.
 */
(function (jQuery,exports) {
    function hasPlaceholderSupport () {

        return "placeholder" in document.createElement("input");
    }
    function setInputText (ele,notifyText) {
        ele.value = notifyText;
    }
    function startSearch (ele,callback) {
        var inputText = ele.value;
            callback(inputText);
    }

    /**
     * @version 0.0.1
     * @param notifyText（提示文字）
     * @param callback
     *
     */
    jQuery.fn.mvSearch = function (notifyText,callback,simple) {
        var self = $(this),
            isSupportPlaceholder = hasPlaceholderSupport(),
            searchInputText,
            searchClearText,
            searchBtn,
            callback,
            simple,
            notifyText;

        if (typeof  notifyText === "function") {
            simple = callback;
            callback = notifyText;
            notifyText = "请输入搜索计划";
        }

        if (simple) {
            searchInputText = $("<input />").attr("type","text");
            searchBtn = $("<input />").attr("type","button").addClass("mv-search-icon");
            self.append(searchInputText,searchBtn);
        }else{
            searchInputText = $("<input />").attr("type","text").addClass("mv-search-input");
            searchClearText = $("<span></span>").addClass("mv-ui-search-cancel").html("x");
            searchBtn = $("<input />").attr("type","button").addClass("mv-input-btn-common-small").attr("value","搜索");
            self.append(searchInputText,searchClearText,searchBtn);
        }

        searchBtn.on("click", function () {
            startSearch (searchInputText[0],callback);
        });

        if (!isSupportPlaceholder) {
            setInputText(searchInputText[0],notifyText);
            if (searchClearText) {
                searchClearText.on("click",function () {
                    setInputText(searchInputText[0],notifyText);
                })
            }
        }else{
            searchInputText.attr("placeholder",notifyText);
            if (searchClearText) {
                searchClearText.on("click",function () {
                    setInputText(searchInputText[0],"");
                })
            }
        }

        searchInputText.on("focus",function () {
            var inputText = this.value;
            if (inputText === notifyText) {
                setInputText(this,"");
            }
            $(document).on("keydown",function (e) {
                if (e.keyCode === 13) {
                    startSearch (searchInputText[0],callback);
                }
                if (e.keyCode === 27) {
                    searchInputText.blur();
                }
            })
        }).on("blur",function () {
                var inputText = this.value;
                if (!inputText) {
                    setInputText(this,notifyText);
                    if (isSupportPlaceholder) {
                        setInputText(this,"");
                    }
                }
                $(document).off("keydown");
            });

        return this;
    };

})($,window);
