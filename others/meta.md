## meta实用标签 [移动前端不得不了解的html5 head 头标签](http://www.css88.com/archives/5480/comment-page-1)


### 浏览器渲染
```js
// 优先使用 IE 最新版本和 Chrome
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
// 360 使用Google Chrome Frame
<meta name="renderer" content="webkit" />
```

### 转码
```js
// 百度禁止转码
<meta http-equiv="Cache-Control" content="no-siteapp" />
```

### SEO
```js
// 页面关键词 keywords
<meta name="keywords" content="your keywords" />
// 页面描述内容 description
<meta name="description" content="your description" />
// 定义网页作者 author
<meta name="author" content="author,email address" />
// 定义网页搜索引擎索引方式，robotterms 是一组使用英文逗号「,」分割的值，通常有如下几种取值：none，noindex，nofollow，all，index和follow。
<meta name="robots" content="index,follow">
```

### viewport
> viewport 可以让布局在移动浏览器上显示的更好

> width=device-width 会导致 iPhone 5 添加到主屏后以 WebApp 全屏模式打开页面时出现黑边
```js
// content 参数：width viewport 宽度(数值/device-width); height viewport 高度(数值/device-height); initial-scale 初始缩放比例; maximum-scale 最大缩放比例; minimum-scale 最小缩放比例; user-scalable 是否允许用户缩放(yes/no)
// 移动端
<meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
// pc
<meta name="viewport" content="width=device-width, initial-scale=1">
```