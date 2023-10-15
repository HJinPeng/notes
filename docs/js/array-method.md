# 数组方法

## 会改变原数组

- `push()`: 往数组后添加一个元素
- `pop()`: 将数组最后一个元素弹出，并返回值
- `unshift()`: 往数组前面添加一个元素
- `shift()`: 将数组的第一个元素弹出，并返回值
- `splice(start, deleteCount, item1, item2, itemN)`: 从start开始，删除deleteCount个元素，再将后续的元素插入到start这个位置
- `sort()`: 将数组排序
- `reverse()`: 将数组反转
- `fill()`: 填充数据
- `copyWithin(target, start, end)`: 浅复制数组的start到end部分（不包括end）到同数组的target位置

## 不会改变原数组

- `forEach()`: 遍历
- `map()`: 遍历并返回
- `filter()`: 过滤
- `find()`: 找一个
- `some()`: 查找数组中是否有，有就返回true
- `every()`: 查找数组是否都是
- `concat()`: 合并并返回一个新数组
- `slice(start, end)`: 浅拷贝start到end（不包括），返回一个新数组
- `join()`: 拼接成字符串