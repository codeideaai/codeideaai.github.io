---
layout: ../../layouts/SeriesPage.astro
title: 边刷 LeetCode，边学 Python 语法
description: 用 LeetCode 题目练习 Python，从列表、循环和字典开始。每篇附有解法、可运行示例和练习。
---

# 边刷 LeetCode，边学 Python 语法

每篇先用小例子讲清楚解题会用到的 Python 写法，再把它们用到一道 LeetCode 题里。最后用本地断言检查解法，再做一道练习。

如果你刚开始学 Python，或者已经会用其他语言写程序，想熟悉 Python 里常见的表达方式，可以从第一篇开始。示例使用 Python 3.9+，只依赖标准库。

## 章节目录

| 篇目 | Python 写法 | 刷完可以验证什么 |
| --- | --- | --- |
| [01 · 两数之和](./01-two-sum/) | 列表下标、`range()`、`enumerate()`、字典 | 找到两数的下标，处理重复数字和下标 0 |
| [02 · 存在重复元素](./02-contains-duplicate/) | 集合、`set()`、`in`、`add()` | 扫描时发现第一个重复值 |
| [03 · 有效的字母异位词](./03-valid-anagram/) | 字典计数、`dict.get()`、`Counter` | 比较两个字符串的字符频次 |
| [04 · 有效的括号](./04-valid-parentheses/) | 列表作栈、`append()`、`pop()`、短路求值 | 判断括号是否按正确顺序闭合 |
| 05 · 移动零（计划） | 列表元素赋值、双指针 | 原地移动零并保持其余元素的相对顺序 |

## 每篇怎么练

1. 先运行文章开头的 Python 小例子，改一组输入看看输出怎么变。
2. 读题后手算一组输入的预期结果，再用刚练过的写法实现解法。
3. 在本地跑断言，再加一组容易写错的输入。提交到 LeetCode 时，按题目的 Python3 模板保留 `Solution` 和指定的方法签名。
