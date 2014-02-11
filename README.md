UI使用文档  
===================================  
  ###未提供reset.css，但生产环境中须有reset.css

  ###根据产品的不同，只需使用对应的css，图片文件即可

  ###暂定
  		###聚效广告平台 -> mv-ui-ei.css  -> mv-ui-ei.scss 
  		###聚合数据平台 -> mv-ui-eo.css  -> mv-ui-eo.scss
  		###聚品广告平台 -> mv-ui-ep.css  -> mv-ui-ep.scss 
  
  ###修改源码需修改源sass文件
  		###sass文件有2种类型:
  			###1. 组件类sass文件位于文件目录sass_common下，不用作产生css文件
  			###2. 生产类sass文件位于sass文件下，用于生产css文件

  ###对应demo文件可以查看效果
    
Button类的使用
-----------------------------------  
### 聚效广告平台 
	
	<input type="button" class="mv-input-btn-small" value="保存" />
    <input type="button" class="mv-input-btn-large" value="人群显微" />
    <input type="button" class="mv-input-btn-fun" value="涨跌榜" />
    <input type="button" class="mv-input-btn-add-group" value="添加新分组" />
    <input type="button" class="mv-input-btn-common-small" value="确定" />
    <input type="button" class="mv-input-btn-common-middle" value="取消" />	
    
### 聚合数据平台

	<input type="button" class="mv-input-btn-large" value="自定义报表" />
    <input type="button" class="mv-input-btn-small" value="保存" />
    <input type="button" class="mv-input-btn-middle" value="上传" />
    <input type="button" class="mv-input-btn-fun" value="新增推广组" />
    <input type="button" class="mv-input-btn-set-group" value="设置推广组" />
    <input type="button" class="mv-input-btn-common-small" value="确定" />
    <input type="button" class="mv-input-btn-common-middle" value="取消" />

### 聚品广告平台

	<input type="button" class="mv-input-btn-small" value="保存" />
    <input type="button" class="mv-input-btn-large" value="人群显微" />
    <input type="button" class="mv-input-btn-common-small" value="确定" />
    <input type="button" class="mv-input-btn-common-middle" value="取消" />
    <input type="button" class="mv-input-btn-large-middle" value="修改匹配模式" />
    <input type="button" class="mv-input-btn-large-max" value="关键词模板下载" />
    <input type="button" class="mv-input-btn-fun" value="计算器" />
    <input type="button" class="mv-input-btn-large-middle" value="修改匹配模式" />
    <input type="button" class="mv-input-btn-large-max" value="关键词模板下载" />