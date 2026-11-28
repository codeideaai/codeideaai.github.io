---
layout: ../../layouts/SeriesPage.astro
title: 02 · 存在重复元素
description: 用存在重复元素练习 Python 集合、set()、in 和 add()，理解查重时为什么要先查再加。
---

[返回专栏目录](../)

# 02 · 存在重复元素

## 本篇会用到的 Python 写法

### 花括号可以写字典，也可以写集合

字典用 `键: 值` 保存对应关系，集合直接保存元素。读到花括号时，可以对照下面三种写法。

| 写法 | 类型 | 含义 |
| --- | --- | --- |
| `{"苹果": 3}` | 字典 `dict` | 键是 `"苹果"`，对应的值是 `3` |
| `{"苹果", "梨"}` | 集合 `set` | 包含两个元素 `"苹果"` 和 `"梨"` |
| `{}` | 空字典 `dict` | 创建空集合要写 `set()` |

用 `type(对象).__name__` 可以查看类型的名字。

```python
print(type({"苹果": 3}).__name__)  # dict
print(type({"苹果", "梨"}).__name__)  # set
print(type({}).__name__)  # dict
print(type(set()).__name__)  # set
```

### 用 `set()` 创建集合

集合只保留互不相同的元素。把列表传给 `set()`，就能创建一个去重后的集合。[Python 文档 · 集合](https://docs.python.org/3/tutorial/datastructures.html#sets)

```python
numbers = [7, 2, 7]
unique = set(numbers)
print(len(numbers))  # 3
print(len(unique))  # 2
```

### 用 `in` 查询，用 `add()` 加入元素

`value in seen` 返回一个布尔值，表示 `value` 是否已经在集合里。`seen.add(value)` 会修改集合。重复加入同一个值，集合的大小不会增加。

```python
seen = set()
print(7 in seen)  # False
seen.add(7)
print(7 in seen)  # True
seen.add(7)
print(len(seen))  # 1
```

## 题意

给定一个整数列表，有任意一个值出现至少两次就返回 `True`，所有值都只出现一次就返回 `False`。例如 `[8, -2, 5, -2]` 返回 `True`，因为 `-2` 出现了两次。[LeetCode 第 217 题](https://leetcode.com/problems/contains-duplicate/)

## 扫描时先查集合，再加入当前值

从左到右读列表，让 `seen` 保存当前位置之前出现过的值。每次先问当前值是否在集合里。查到就可以立即返回 `True`，否则把它加入集合，继续处理下一个值。

| 当前值 | 查询前的 `seen` | 本轮动作 |
| --- | --- | --- |
| `8` | `set()` | 加入 `8` |
| `-2` | `{8}` | 加入 `-2` |
| `5` | `{8, -2}` | 加入 `5` |
| `-2` | `{8, -2, 5}` | 找到重复，返回 `True` |

表里的集合仅列出成员，元素的显示顺序可能不同。只有循环扫完，才确认所有值都不同并返回 `False`。

## 可提交的 Python3 解法

```python
class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        seen = set()
        for value in nums:
            if value in seen:
                return True
            seen.add(value)
        return False
```

按集合查询和添加的平均耗时为常数估算，扫描最多处理 `n` 个元素，平均时间复杂度为 `O(n)`。列表没有重复值时，集合会保存全部 `n` 个值，最坏额外空间为 `O(n)`。

也可以比较 `len(set(nums)) < len(nums)`。集合的长度变小，说明有重复值。这种写法简短，会先处理完整个列表。逐个查询的版本在发现重复时就能结束。

## 在本地运行

把 `Solution` 类和下面的断言依次复制到 `contains_duplicate.py`，运行 `python3 contains_duplicate.py`。预期输出为 `全部断言通过`。

```python
solution = Solution()
assert solution.containsDuplicate([8, -2, 5, -2]) is True
assert solution.containsDuplicate([8, -2, 5]) is False
assert solution.containsDuplicate([0, 0]) is True
assert solution.containsDuplicate([42]) is False

print("全部断言通过")
```

## 动手练习

把 `seen.add(value)` 移到 `if value in seen` 前面，再跑一次断言。找出第一个失败的用例，手算这一轮查询前的 `seen` 里已经有什么。

[回读 · 两数之和](../01-two-sum/) · [继续阅读 · 有效的字母异位词](../03-valid-anagram/)
