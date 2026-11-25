---
layout: ../../layouts/SeriesPage.astro
title: 01 · 两数之和
description: 从两层循环到一次遍历，用两数之和练习 Python 列表下标、range、enumerate 和字典。
---

[返回专栏目录](../)

# 01 · 两数之和

## 本篇会用到的 Python 写法

### 用下标和 `range()` 遍历列表

列表下标从 0 开始。`len()` 返回元素个数，`range(start, stop)` 从 `start` 开始，到 `stop` 前结束。省略起点时默认从 0 开始，因此 `range(len(numbers))` 会依次给出所有有效下标。

```python
numbers = [8, 3, 5]
print(numbers[0])  # 8
print(list(range(len(numbers))))  # [0, 1, 2]
print(list(range(1, len(numbers))))  # [1, 2]
```

### 用 `enumerate()` 同时取下标和值

当循环里同时需要位置和元素值时，可以用 `enumerate()`。它每轮给出一对 `(下标, 值)`，用 `for index, value` 分别接收这两项，这种写法叫解包。下标默认从 0 开始。

```python
for index, value in enumerate([8, 3, 5]):
    print(index, value)
# 0 8
# 1 3
# 2 5
```

### 用字典保存和查询下标

`{}` 创建空字典，`positions[数字] = 下标` 保存一组键值对。用 `in` 检查键是否存在，确认存在后再用方括号取值。即使存进去的下标是 0，`in` 也会返回 `True`。

```python
positions = {}
positions[8] = 0
print(8 in positions)  # True
print(positions[8])  # 0
print(3 in positions)  # False
```

### 读懂函数和 LeetCode 的方法签名

`def` 定义函数，`return` 返回结果并结束当前函数。`def`、`for` 和 `if` 等语句用冒号引出代码块，每层通常缩进四个空格。`raise ValueError(...)` 用来报告无法处理的输入，本篇用它处理本地测试里的无解情况。

LeetCode 的 Python3 模板把 `twoSum` 放在 `Solution` 类里。方法的第一个参数 `self` 表示当前实例，调用 `Solution().twoSum(nums, target)` 时由 Python 自动传入。`nums: list[int]`、`target: int` 和 `-> list[int]` 分别标注参数和返回值的预期类型，Python 运行时不会据此自动检查类型。

[Python 的字典与遍历写法](https://docs.python.org/3/tutorial/datastructures.html#dictionaries) · [`enumerate()` 文档](https://docs.python.org/3/library/functions.html#enumerate)

## 题意

给定整数列表 `nums` 和目标值 `target`，找出两个不同位置，使这两个位置上的数相加等于 `target`。返回两个下标，顺序任意。题目保证恰好有一组答案。比如 `[4, 1, 8, 3]` 的目标为 `11`，可以返回 `[2, 3]`。[LeetCode 原题](https://leetcode.com/problems/two-sum/)

## 解法一 · 用两层循环枚举数对

外层选定第一个下标 `i`，内层从 `i + 1` 开始选第二个下标 `j`。这样始终有 `i < j`，每对下标只检查一次，也不会把同一个位置用两遍。

```python
def two_sum_brute_force(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    raise ValueError("没有找到两数之和")
```

列表有 `n` 个元素时，最多检查 `n(n - 1) / 2` 对，所以最坏时间复杂度为 `O(n²)`，额外空间为 `O(1)`。

## 解法二 · 用字典记住已经扫过的数字

如果当前值是 `value`，需要找的另一个值就是 `target - value`。把之前扫过的数存入字典 `seen`，键是数字，值是它的下标。这样处理当前值时，只需要查一次字典。

拿最容易写错的一组输入 `nums = [5, 5]`、`target = 10` 走一遍。

| 当前下标 | 当前值 | 需要找的值 | 查找时的 `seen` | 本轮动作 |
| --- | --- | --- | --- | --- |
| 0 | 5 | 5 | `{}` | 写入 `seen[5] = 0` |
| 1 | 5 | 5 | `{5: 0}` | 返回 `[0, 1]` |

查找放在写入之前，字典里就只会有较早位置的下标。这样第二个 5 可以找到第一个 5，而第一个 5 不会把自己配成一对。

## 可提交的 Python3 解法

```python
class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        seen = {}
        for index, value in enumerate(nums):
            needed = target - value
            if needed in seen:
                return [seen[needed], index]
            seen[value] = index
        raise ValueError("没有找到两数之和")
```

把整个 `Solution` 类粘贴到 LeetCode 的 Python3 编辑器即可。

通常按字典查找和写入为常数时间估算，遍历一轮的平均时间复杂度为 `O(n)`。字典最多保存 `n` 个键，额外空间为 `O(n)`。

## 在本地运行

把上面的 `Solution` 和下面的验证代码依次复制到同一个 `two_sum.py` 文件，然后运行 `python3 two_sum.py`。预期输出为 `全部断言通过`。

```python
solution = Solution()
assert solution.twoSum([4, 1, 8, 3], 11) == [2, 3]
assert solution.twoSum([5, 5], 10) == [0, 1]
assert solution.twoSum([0, -2, 4], -2) == [0, 1]

try:
    solution.twoSum([1, 2, 3], 99)
except ValueError:
    pass
else:
    raise AssertionError("无解输入应抛出 ValueError")

print("全部断言通过")
```

## 动手练习

把字典查询临时改成 `if seen.get(needed):`，再跑一遍。看看哪条断言先失败，并想想为什么。提示是 `seen.get(needed)` 返回存储的下标，而 `0` 在布尔判断中为假。

[继续阅读 · 存在重复元素](../02-contains-duplicate/)
