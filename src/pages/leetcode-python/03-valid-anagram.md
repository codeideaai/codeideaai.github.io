---
layout: ../../layouts/SeriesPage.astro
title: 03 · 有效的字母异位词
description: 用有效的字母异位词练习 Python 字典计数、dict.get() 和标准库 Counter。
---

[返回专栏目录](../)

# 03 · 有效的字母异位词

## 本篇会用到的 Python 写法

### 用 `dict.get()` 给第一次出现的字符计数

`for char in text` 会按顺序取出字符串里的每个字符。用字符当字典的键，用出现次数当值。`counts.get(char, 0)` 在键存在时返回已有次数，键缺失时返回 `0`。这个查询不会写入字典，左边的赋值才会把加一后的次数存进去。[Python 文档 · 字典方法](https://docs.python.org/3/library/stdtypes.html#dict.get)

```python
counts = {}
for char in "cocoa":
    counts[char] = counts.get(char, 0) + 1

print(counts["c"])  # 2
print(counts.get("z", 0))  # 0
print("z" in counts)  # False
```

### 用 `==` 比较两份计数

两个字典只要包含相同的键，且每个键对应的值都相同，就会比较为相等。键的插入顺序可以不同。

```python
print({"a": 2, "b": 1} == {"b": 1, "a": 2})  # True
print({"a": 2, "b": 1} == {"a": 1, "b": 2})  # False
```

### 用标准库 `Counter` 自动计数

`from collections import Counter` 从标准库导入计数器。把一个字符串传给 `Counter()`，它就会统计每个字符出现的次数。下面直接比较两份计数。[Python 文档 · Counter](https://docs.python.org/3/library/collections.html#collections.Counter)

```python
from collections import Counter

counts = Counter("cocoa")
print(counts["o"])  # 2
print(counts == Counter("ocaco"))  # True
```

## 题意

给定两个只含小写英文字母的字符串 `s` 和 `t`，判断能否把 `s` 的字母重新排列成 `t`。例如 `"aabc"` 和 `"caba"` 可以互相重排，`"aabc"` 和 `"abbc"` 则不行。[LeetCode 第 242 题](https://leetcode.com/problems/valid-anagram/)

## 解法一 · 手动统计字符频次

重排只会改变字母的位置，每个字母的次数都保持原样。先检查长度，长度不一样就直接返回 `False`。长度相同时，分别统计两个字符串并比较。

| 字母 | `"aabc"` 的次数 | `"abbc"` 的次数 |
| --- | --- | --- |
| `a` | 2 | 1 |
| `b` | 1 | 2 |
| `c` | 1 | 1 |

两边都有 `a`、`b`、`c`，但 `a` 和 `b` 的次数不同，字典比较会返回 `False`。

```python
def count_chars(text: str) -> dict[str, int]:
    counts = {}
    for char in text:
        counts[char] = counts.get(char, 0) + 1
    return counts


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        return count_chars(s) == count_chars(t)
```

## 解法二 · 用 `Counter` 比较字符频次

计数循环可以交给标准库。下面也是完整的 Python3 提交代码，提交时任选一种解法即可。

```python
from collections import Counter


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        return Counter(s) == Counter(t)
```

长度相同时，设每个字符串的长度为 `n`，两种写法都要各扫描一遍。按字典操作平均为常数时间估算，平均时间复杂度为 `O(n)`。题目只允许 26 个小写英文字母，每份计数最多保存 26 个键，额外空间为 `O(1)`。如果字符种类不固定，额外空间为 `O(k)`，其中 `k` 是两个字符串中不同字符的总数。

## 在本地运行

任选一种解法，把它和下面的断言依次复制到 `valid_anagram.py`，再运行 `python3 valid_anagram.py`。预期输出为 `全部断言通过`。

```python
solution = Solution()
assert solution.isAnagram("aabc", "caba") is True
assert solution.isAnagram("aabc", "abbc") is False
assert solution.isAnagram("a", "b") is False
assert solution.isAnagram("ab", "abb") is False

print("全部断言通过")
```

## 动手练习

保留长度检查，把最后一行暂时改成 `return set(s) == set(t)`，再跑一次断言。找出第一个失败的用例，分别写出两个集合和对应的字符计数。

[回读 · 存在重复元素](../02-contains-duplicate/) · [继续阅读 · 有效的括号](../04-valid-parentheses/)
