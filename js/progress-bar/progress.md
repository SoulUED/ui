##progress-bar使用文档
--引入三个产品不同的ui的css，会产生不同的样式    
    
--  1.开始
   
    <html>
        <head>
             <title>进度条</title>
             <link rel="stylesheet" href="mv-reset.css" />
             <link rel="stylesheet" href="mv-ui-atd.css" /> 
             <script type="text/javascript" src="progress-bar.js"></script>
        </head>
        <body>
            <input type="button" value="请求" class="request" />
            <div id="demo"></div>
            <script>
                    jQuery(".request").on("click",function () {
                        $("#demo").mvLoadStart();
                        setTimeout(function () {
                            $("#demo").mvLoadEnd();
                        },2000);
                     })
            </script>
        </body>
    </html>

--  2.说明
    
    $("#demo").mvLoadStart();  请求开始调用;
    $("#demo").mvLoadEnd();   请求结束调用;
    
-- 3.参数说明
    支持传入时间参数(毫秒)，淡入淡出的时间
    
    $("#demo").mvLoadStart(1000);  请求开始调用; 1秒淡入
    $("#demo").mvLoadEnd(1000);   请求结束调用; 1秒淡出
    
    