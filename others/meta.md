## meta实用标签 [移动前端不得不了解的html5 head 头标签](http://www.css88.com/archives/5480/comment-page-1)


### 1.浏览器渲染
```js
// 优先使用 IE 最新版本和 Chrome
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
// 360 使用Google Chrome Frame
<meta name="renderer" content="webkit" />
```

### 2.转码
```js
// 百度禁止转码
<meta http-equiv="Cache-Control" content="no-siteapp" />
```

### 3.SEO
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

### 4.viewport
> viewport 可以让布局在移动浏览器上显示的更好

> width=device-width 会导致 iPhone 5 添加到主屏后以 WebApp 全屏模式打开页面时出现黑边
```js
// content 参数：width viewport 宽度(数值/device-width); height viewport 高度(数值/device-height); initial-scale 初始缩放比例; maximum-scale 最大缩放比例; minimum-scale 最小缩放比例; user-scalable 是否允许用户缩放(yes/no)
// 移动端
<meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
// pc
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### 5.iOS

#### 5.1.iOS设备
```js
// 添加到主屏后的标题
<meta name="apple-mobile-web-app-title" content="标题" />
// 是否启用 WebApp 全屏模式
<meta name="apple-mobile-web-app-capable" content="yes" />
// 设置状态栏的背景颜色 （只有在 “apple-mobile-web-app-capable” content=”yes” 时生效）
// content 参数：default 默认值；black 状态栏背景是黑色；black-translucent 状态栏背景是黑色半透明。 如果设置为 default 或 black ,网页内容从状态栏底部开始。 如果设置为 black-translucent ,网页内容充满整个屏幕，顶部会被状态栏遮挡。
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
// 禁止数字识自动别为电话号码
<meta name="format-detection" content="telephone=no" />
```

#### 5.2.iOS图标
```js
// rel 参数： apple-touch-icon 图片自动处理成圆角和高光等效果。 apple-touch-icon-precomposed 禁止系统自动添加效果，直接显示设计原图。
// iPhone 和 iTouch，默认 57×57 像素，必须有
<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57-precomposed.png" />
// iPad，72×72 像素，可以没有，但推荐有
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="/apple-touch-icon-72x72-precomposed.png" />
// Retina iPhone 和 Retina iTouch，114×114 像素，可以没有，但推荐有
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114x114-precomposed.png" />
// Retina iPad，144×144 像素，可以没有，但推荐有
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="/apple-touch-icon-144x144-precomposed.png" />
// IOS 图标大小在iPhone 6 plus上是180×180，iPhone 6 是120×120。 适配iPhone 6 plus，则需要在中加上这段
<link rel="apple-touch-icon-precomposed" sizes="180x180" href="retinahd_icon.png" />
```