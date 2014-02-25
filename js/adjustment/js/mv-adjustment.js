/**
 * Created by Administrator on 14-1-27.
 */
(function (jQuery,exports) {
    jQuery.fn.mvAdjustment = function (origin,adjustNumber,option) {
        origin = origin||[];
        var self = $(this),
            adjustInput = $("<input />").addClass("adjust-value"),
            adjustDiv = $("<div></div>").addClass("adjustment-button"),
            adjustButtonUp = $("<span></span>").addClass("button-up"),
            adjustButtonDown = $("<span></span>").addClass("button-down"),
            figures,
            valueRex,
            adjustLength,
            beforePlaceholder,
            afterPlaceholder;

        if(origin === "getData"){
            return checkValue(self.find(".adjust-value")[0].value);
        }
        valueRex = self[0].valueRex = "(\\" + (option[1]?option[1]:"s*") + ")" + "(\\-*\\d*\\.{0,1}\\d*)"
            + "(\\" + (option[2]?option[2]:"s*") + ")";
        adjustLength = (option[0]?option[0]:option).toString().length;
        beforePlaceholder = option[1]?option[1]:"";
        afterPlaceholder= option[2]?option[2]:"";
        figures = (function (option){
            var  figuresNumber;
            if (typeof option !== "number"){
                figuresNumber = option[0].toString();
            }else{
                figuresNumber = option.toString();
            }
            figuresNumber = figuresNumber.length - figuresNumber.indexOf(".") - 2;
            return figuresNumber;
        })(option) + 1;
            adjustInput.attr("realValue",origin);
            adjustDiv.append(adjustButtonUp,adjustButtonDown);
            self.append(adjustInput,adjustDiv);

        adjustInput[0].value = beforePlaceholder + placeholderZero(origin) + afterPlaceholder;


        function checkValue (Value) {

            var valueRule = new RegExp(self[0].valueRex),
                valueArr;

            valueArr = Value.match(valueRule);

            return valueArr?Number(valueArr[2]):""
        }

        function createZero(number){
            var zero = "";
            for (var i = 0;i < number;i++){
                zero = zero + "0"
            }
            return zero;
        }

        function placeholderZero(Value){
            Value = Number(Value).toFixed(figures);

            var numberString = Value.toString(),
                isNeed = numberString.indexOf(".");

            if (isNeed !== -1){

                if (adjustLength === numberString.length || numberString.indexOf("-") === 0) {
                    return Value;
                }
                Value = Value + createZero(adjustLength - numberString);
                return Value;
            }
            Value = Value + "." +createZero(figures);

            return Value;
        }

        adjustButtonUp.on("click",function () {
            var inputValue = checkValue(adjustInput[0].value);
            adjustInput[0].value =  beforePlaceholder + placeholderZero(inputValue + adjustNumber) + afterPlaceholder;
        });
        adjustButtonDown.on("click",function () {
            var inputValue = checkValue(adjustInput[0].value);
            adjustInput[0].value =  beforePlaceholder + placeholderZero(inputValue - adjustNumber) + afterPlaceholder;
        });


    } 
})($,window);
