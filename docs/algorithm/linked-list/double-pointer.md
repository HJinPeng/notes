# 双指针

## [合并两个有序链表](https://leetcode.cn/problems/merge-two-sorted-lists/description/)

题目：

```
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
链表A：1 -> 2 -> 4
链表B：1 -> 3 -> 4
合并： 1 -> 2 -> 3 -> 4 -> 4
```

答案：

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // 生成一个新的头结点，返回头结点的next，可以不用处理空节点的情况
    const dummy = new ListNode(-1);
    let p = dummy;
    let p1 = list1;
    let p2 = list2;
    // 直到有一条链表为空
    while(p1 !== null && p2 !== null) {
        if(p1.val < p2.val) {
            p.next = p1;
            p1 = p1.next;
        }else {
            p.next = p2;
            p2 = p2.next;
        }
        p = p.next;
    }
    // 将剩余的链表拼接
    if(p1 !== null) {
        p.next = p1;
    }else if(p2 !== null){
        p.next = p2;
    }
    return dummy.next;
};
```

::: tip
如果需要创建一条新链表，可以生成一个虚拟头结点
:::


## [分割链表](https://leetcode.cn/problems/partition-list/)

题目

```
给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
你应当 保留 两个分区中每个节点的初始相对位置。

示例 1： 
输入：head = [1,4,3,2,5,2], x = 3  
输出：[1,2,2,4,3,5]  

示例 2：  
输入：head = [2,1], x = 2  
输出：[1,2] 

提示：  
链表中节点的数目在范围 [0, 200] 内  
-100 <= Node.val <= 100  
-200 <= x <= 200  
```

答案

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const dummy1 = new ListNode(-1);
    const dummy2 = new ListNode(-1);
    let p1 = dummy1;
    let p2 = dummy2;
    let p = head;
    while(p !== null) {
        if(p.val < x) {
            p1.next = p;
            p1 = p1.next;
        }else {
            p2.next = p;
            p2 = p2.next;
        }
        // 核心：把p节点的next指向空
        const temp = p.next;
        p.next = null;
        p = temp;
    }
    p1.next = dummy2.next;
    return dummy1.next;
};
```

## 如何K个一组反转链表

## 如何判断回文链表