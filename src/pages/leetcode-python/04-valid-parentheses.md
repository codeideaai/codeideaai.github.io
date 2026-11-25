---
layout: ../../layouts/SeriesPage.astro
title: 04 · 有效的括号
description: 用有效的括号练习 Python 列表作栈、append、pop、空列表判断和 or 的短路求值。
---

[返回专栏目录](../)

# 04 · 有效的括号

## 本篇会用到的 Python 写法

### 用 `append()` 和 `pop()` 把列表当栈用

栈遵循后进先出。把列表末尾当作栈顶，`append(value)` 把值加到末尾，`pop()` 移除并返回末尾的值。连续压入两个值后，先取出后压入的那个。[Python 文档 · 用列表实现栈](https://docs.python.org/3/tutorial/datastructures.html#using-lists-as-stacks)

```python
stack = []
stack.append("先放")
stack.append("后放")
print(stack.pop())  # 后放
print(stack.pop())  # 先放
```

### 用 `not stack` 判断栈是否为空

空列表在布尔判断中为假，所以 `not stack` 在栈为空时为 `True`。从空列表调用 `pop()` 会抛出 `IndexError`，因此先判断栈里有没有元素。

```python
stack = []
print(not stack)  # True
stack.append("待处理")
print(not stack)  # False
```

### 用 `or` 的短路求值保护 `pop()`

Python 从左到右求值。`or` 左侧为真时，右侧会跳过。下面的栈是空的，`not stack` 已经为真，因此 `stack.pop()` 不会执行。

```python
stack = []
if not stack or stack.pop() != "]":
    print("没有匹配的元素")
```

## 题意

给定一个只含圆括号、方括号和花括号的字符串，判断它是否正确闭合。每个右括号都要匹配同类的左括号，嵌套时最里面的一对要先闭合。例如 `"{[()]}"` 合法，`"{[}]"` 虽然每种括号的数量都配得上，顺序却交叉了。[LeetCode 第 20 题](https://leetcode.com/problems/valid-parentheses/)

## 用栈记录接下来期待的右括号

从左到右扫描。读到左括号时，把对应的右括号压入栈。读到右括号时，它必须等于栈顶期待的字符。栈为空意味着没有左括号等着与它配对。扫完后，栈里如果还有元素，就还有左括号没闭合。

用 `"{[}]"` 走一遍。下表中列表右端是栈顶。

| 当前字符 | 处理前的栈 | 本轮动作 |
| --- | --- | --- |
| `{` | `[]` | 压入 `}` |
| `[` | `["}"]` | 压入 `]` |
| `}` | `["}", "]"]` | 弹出 `]`，和当前字符不匹配，返回 `False` |

字典 `closing_for` 保存左括号到右括号的对应关系。`char in closing_for` 检查字符是不是字典里的左括号，再用 `closing_for[char]` 取出对应的右括号。

## 可提交的 Python3 解法

```python
class Solution:
    def isValid(self, s: str) -> bool:
        closing_for = {"(": ")", "[": "]", "{": "}"}
        stack = []

        for char in s:
            if char in closing_for:
                stack.append(closing_for[char])
            elif not stack or stack.pop() != char:
                return False

        return not stack
```

按照题目的输入范围，字符要么是字典里的左括号，要么是右括号。每个字符只读一次，每个入栈元素最多弹出一次，时间复杂度为 `O(n)`。如果输入全是左括号，栈会保存 `n` 个元素，最坏额外空间为 `O(n)`。

## 在本地运行

把 `Solution` 类和下面的断言依次复制到 `valid_parentheses.py`，运行 `python3 valid_parentheses.py`。预期输出为 `全部断言通过`。

```python
solution = Solution()
assert solution.isValid("{[()]}") is True
assert solution.isValid("{}([])") is True
assert solution.isValid("{[}]") is False
assert solution.isValid("}") is False
assert solution.isValid("{{}") is False

print("全部断言通过")
```

## 动手练习

把最后一行 `return not stack` 临时改成 `return True`，再运行断言。找出失败的输入，写下循环结束时栈里还剩什么。

[回读 · 存在重复元素](../02-contains-duplicate/)
