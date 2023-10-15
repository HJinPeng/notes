# `<script>` 标签的 `async`、`defer`

## 正常

html解析遇到 `<script>`，会**暂停html解析，阻塞页面**的呈现，下载script, 执行script，再继续html解析

## async

html解析遇到 `<script async>`，会 **异步下载** 脚本，**不会暂停html解析**，当脚本**下载完成会暂停html解析**并立即执行脚本，**不保证脚本的执行顺序**，看哪个先下载完成哪个先执行，然后继续html解析

## defer

html解析遇到 `<script defer>`，不会阻塞页面呈现，**异步下载**脚本，**等页面解析完成**且在DOMContentLoaded事件触发之前**按顺序完成执行**