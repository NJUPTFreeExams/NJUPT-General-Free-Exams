# 数据结构（混合式）2023 秋

本资料由 [@BlockLune](https://github.com/BlockLune) 整理，课本为《数据结构（C 语言）第 2 版 慕课版》2020 年 2 月第 2 版，2022 年 12 月第 11 次印刷。

**注意：**

- 本资料知识点来自于对应的复习 PPT，但具体实现更多参考自 [Princeton Algs4](https://algs4.cs.princeton.edu/)、[GeeksforGeeks](https://www.geeksforgeeks.org/) 的内容。这导致文中的实现并不一定与课本实现完全一致。
- **本资料免费分享于 [NJUPTFreeExams](https://github.com/NJUPTFreeExams)，请勿商业使用！如有错别字等错误，请在 Issues 中提出，感谢！**

## 题型

- 填空（2% \* 10）
- 选择（2% \* 10）
- 简答（8% \* 6）
- 算法填空（2% \* 3）
- 算法设计（6%）

## 重点

### 基础知识

基本概念和术语：

- 数据：可被计算机识别并加工处理的对象。
- 数据元素：**由数据组成**的具有一定意义的**基本**单位，在计算机中通常作为一个整体来处理，又称元素、记录。
- 数据项：**组成数据元素**的不可分割的**最小**单位。

基础逻辑结构：

- 线性结构：一前驱，一后继
- 树形结构：根零前驱，多后继；非根一前驱和多后继
- 图形结构：多前驱，多后继
- 集合结构：无前驱，无后继

时间复杂度：$O(...)$ ，复杂度中的 $\log$ 默认以 2 为底。

### 线性表

#### 顺序表

顺序表的插入、移动元素的个数

#### 链表

单链表的插入算法、时间复杂度

### 栈

栈：后进先出 (Last In First Out, LIFO)

后缀表达式（逆波兰表达式）求值：

1. 从左往右顺序扫描后缀表达式。

   遇到操作数就入栈；

   遇到操作符则连续出栈两个元素，进行 `第二个出栈的元素 操作符 第一个出栈的元素` 的运算（即先出栈的是右操作数，后出栈的是左操作数），并将结果入栈；

2. 重复上述步骤，直至遍历完整个表达式，此时栈中剩下的唯一的元素即为表达式的结果。

TODO: 中缀转后缀：课本 P40

### 队列

队列：先进先出（FIFO）

#### 循环队列

两个索引值：`front` 和 `rear`

注意：`front` 的空间不可用（在队列满时，其背后的数组实际上仍有一个空间未使用）

初始化：`front = rear = 0`

前进：

- `front = (front + 1) % maxSize;`
- `rear = (rear + 1) % maxSize;`

循环队列空的判断条件：`rear == front`
循环队列满的判断条件：`(rear + 1) % maxSize == front`

向循环队列中插入元素 `x`：

```python
def enqueue(x):
    if is_full():
        ... # throws exception
    self.rear = (self.rear + 1) % len(self.array)
    self.array[self.rear] = x
```

### 数组和字符串

TODO: 特殊矩阵

#### 稀疏矩阵

- 数组 `num` 的初始元素 `num[j]` 是稀疏矩阵中列号为 `j` 的非零元个数；
- 数组 `k` 的初始元素 `k[j]` 统计稀疏矩阵中列号从 `0` 到 `j - 1` 的非零元个数总和，该值也表示第 `j` 列第一个非零元在转置后的稀疏矩阵的行三元表中的位置。
- 执行快速转置的过程中，`k[j]` 每被访问一次，都需要执行一次加 `1` 操作。

### 树

TODO: 树的基本概念

#### 二叉树

TODO: 二叉树基本概念和特性，遍历方法，森林和二叉树相互转换

##### Perfect, Complete and Full Binary Trees

特殊二叉树：Perfect Binary Tree, Complete Binary Tree, Full Binary Tree

根据以下三个来源的解释：

- [Types of Binary Tree - GeeksforGeeks](https://www.geeksforgeeks.org/types-of-binary-tree/)
- [data structures - Difference between "Complete binary tree", "strict binary tree","full binary Tree"? - Stack Overflow](https://stackoverflow.com/questions/12359660/difference-between-complete-binary-tree-strict-binary-tree-full-binary-tre)
- [Binary tree - Wikipedia](https://en.wikipedia.org/wiki/Binary_tree#Types_of_binary_trees)

Perfect Binary Tree 是一棵每一个非叶子节点都有两个子节点并且所有叶子节点都在同一层的二叉树，形如：

```txt
       x
     /   \
    /     \
   x       x
  / \     / \
 x   x   x   x
/ \ / \ / \ / \
x x x x x x x x
```

Complete Binary Tree 是一棵类似于把一棵 Perfect binary tree 的叶子节点从右往左依次去掉了几个后形成的二叉树，形如：

```txt
       x
     /   \
    /     \
   x       x
  / \     / \
 x   x   x   x
/ \ /
x x x
```

Full Binary Tree 则是一棵所有节点的度不是 0 就是 2 的二叉树，又叫 Strict (或者 Strictly) binary tree，形如：

```txt
       x
     /   \
    /     \
   x       x
  / \
 x   x
    / \
    x x
```

根据课本（《数据结构（C 语言）第 2 版 慕课版》）的定义，英文所对应的中文名字如下：

- Perfect Binary Tree: 满二叉树
- Complete Binary Tree: 完全二叉树
- Full Binary Tree: 扩充二叉树（2-树）

~~不知道是错误还是就是这样，至少对我而言"full"更像是"满"。~~

##### 堆、优先队列

堆是一个完全二叉树，它的两个典型用法是用于**优先队列**和**堆排序**，具体请见 [heap.md](heap.md)。

##### Huffman 树

约定左小右大，约定左为 0 右为 1

##### 二叉搜索树

二叉搜索树（Binary Search Tree，BST）是一种二叉树，其中每个节点都有一个满足以下属性的关键字：

1. 任何节点的关键字都**大于其左子树**中的所有关键字。
2. 任何节点的关键字都**小于其右子树**中的所有关键字。
3. 左子树和右子树也是二叉搜索树。

若以**中序（左根右）遍历**一棵二叉搜索树，将得到一个以关键字值**递增**排列的有序序列。

根据课本（《数据结构（C 语言）第 2 版 慕课版》），二叉搜索树（Binary Search Tree）也称二叉排序树（Binary Sort Tree），但我没有在网上找到 Binary Sort Tree 的相关定义，询问 ChatGPT 的结果如下：

```txt
二叉搜索树（Binary Search Tree，BST）和二叉排序树（Binary Sort Tree）并不是同一回事，尽管它们有密切的关联。

二叉搜索树是一种二叉树，其中每个节点都有一个满足以下属性的关键字：
...
二叉搜索树的关键属性在于它能够基于关键字高效地进行搜索、插入和删除元素。二叉搜索树中的关键字通常用于按照排序顺序组织元素。

另一方面，二叉排序树是一个更一般的术语，指的是任何二叉树，其中的元素以排序顺序组织，但不一定满足二叉搜索树的严格属性。在二叉排序树中，元素可以以任何方式排序，不一定遵循二叉搜索树的规则。

因此，虽然所有的二叉搜索树都是二叉排序树，但并非所有的二叉排序树都是二叉搜索树。二叉搜索树具有特定的属性，使其在搜索方面高效，而二叉排序树可以以任何方式对元素进行排序。
```

##### 平衡二叉树

如果二叉树的高度为 $O(\log n)$，其中 n 是节点数，那么这就是一棵平衡二叉树。平衡二叉树中任何一个节点的左右子树的高度差最大为 1。（一般并不称之为“二叉平衡树”，课本《数据结构（C 语言）第 2 版 慕课版》的定义有误，书上介绍的所谓 “二叉平衡树” 实际上专指的是 AVL 树。）

常见的平衡二叉树：AVL 树、红黑树（准确地说，AVL 树是严格平衡的，而红黑树并不是严格平衡的（红黑树允许在某些情况下出现不完全平衡的情况），也许书上的那样写的原因就来自于此？）

**平衡二叉树不一定是二叉搜索树**（课本“二叉平衡树是带有平衡条件的二叉搜索树”这段话是错的。）事实上，是否平衡和是否是二叉搜索树（BST）两者没有关联关系，只要满足各自的定义就可以。两者的定义并不冲突，例如 AVL 树和红黑树都既是平衡二叉树，又是二叉搜索树。

##### AVL 树

AVL 树是一种自平衡的二叉搜索树。相关内容请见 [avl_tree.md](avl_tree.md)。

#### m 叉搜索树

失败节点（Failure Node）指的是在搜索过程中，无法继续向下搜索的节点（如果课本的“失败节点就是指空树”的解释不那么好理解的话）。

#### B-树

一棵 m-阶 B-树是一棵 m 叉搜索树。2-3 树就是一棵 3 阶 B-树（B 树就是 B-树，B+树是对 B-树的改进版本）。满足：

- 根节点**至少**有两个子节点
- 除了根节点和失败节点外的所有节点**至少**有 $\lceil \frac{m}{2} \rceil$ 个子节点，$\lceil \frac{m}{2} \rceil-1$ 个元素
- 所有节点**至多**有 $m$ 个子节点，$m-1$ 个元素
- 对于每个节点，$元素数量=子节点数量-1$
- 所有失败节点均在同一层上，失败节点的父节点，即叶子节点，也在同一层上
- 根节点可以只有一个元素，但其他节点**可能不允许**只有一个元素
- **设失败节点总数为 $s$，元素总数为 $N$，则 $N=s-1$**
- 对于 $N$ 个元素的 B-树，其高度 $h$ 满足：$h\leq1+\log_{\lceil m/2 \rceil}(\frac{N+1}{2})$

分裂：$\lceil \frac{m}{2} \rceil$ 处的元素向上成为父节点的元素，左右两边的元素成为左右节点的元素

参考：

- _[Insert Operation in B-Tree - GeeksforGeeks](https://www.geeksforgeeks.org/insert-operation-in-b-tree/)_
- _[Delete Operation in B-Tree - GeeksforGeeks](https://www.geeksforgeeks.org/delete-operation-in-b-tree/)_

### 集合和搜索

#### _顺序搜索_

- _顺序搜索成功的情况下的平均搜索长度：$\frac{n+1}{2}$_

- _顺序搜索失败的情况下平均搜索长度：$n$（必须搜索完整个表才能确定搜索失败了）_

#### 对半搜索

对半搜索更常见的名字应该是“二分查找”。

- 对半搜索成功的情况下的平均搜索长度：$\lfloor \log_2n\rfloor+1$，平均时间复杂度：$O(\log n)$

- 对半搜索失败的情况下的比较次数：$\lfloor \log_2n\rfloor$ 或 $\lfloor \log_2n\rfloor+1$，平均时间复杂度：$O(\log n)$

### 散列表

散列冲突的解决方法：

- 拉链法 Separate Chaining（开散列法 Open Hashing）
- 开地址法 Open Addressing（闭散列法 Closed Hashing）

散列表长度为 $M$，地址范围为 $0$ ~ $M-1$。

线性探查：-> 线性聚集

- $i = 0, 1, 2, ... , M - 1$
- $h_i = (h(key) + i) \bmod M$

二次探查（课本实现）：-> 二次聚集

- $j = 0, 1, 2, ...$
- $h_{2j} = (h(key) - j^2) \bmod M$
- $h_{2j+1} = (h(key) + j^2) \bmod M$

双散列（课本实现）：

- $i = 0, 1, 2, ... , M - 1$
- $H_i = (h_1(key)+i\times h_2(key)) \bmod M$

### 图

TODO：图的基本概念、存储方式、DFS 和 BFS、Prim 和 Kruskal

### 拓扑排序

使用 DFS 和栈，注意先往深处遍历，后将当前节点压入栈中，遍历完所有节点后，将栈的内容全部出栈，所得即为拓扑排序的结果。

具体步骤：

1. 从图中选择一个未访问的节点开始，将其标记为已访问。
2. 对于当前节点，递归地访问其所有未访问的邻接节点，即先往深处遍历。
3. 当没有未访问的邻居节点时，将当前节点压入栈中。
4. 重复步骤 1 至 3，直到所有节点都被访问。
5. 将栈中的节点依次出栈，得到的顺序即为拓扑排序的结果。

特别注意：优先往深处遍历，在回溯时才将当前节点压入栈中。

参考：_[https://www.geeksforgeeks.org/topological-sorting](https://www.geeksforgeeks.org/topological-sorting)_

### Dijkstra 算法

其原理是生成一棵以给定起点为根的 SPT（Shortest Path Tree，最短路径树），方法是维护一个邻接矩阵和两个集合：

- 第一个集合包含已经在最短路径树中的顶点
- 第二个集合包含尚未在最短路径树中的顶点

在算法的每一步中，都要找到一个在第二个集合中且该顶点与起点的距离最小的顶点。

具体步骤：

- 创建一个 `sptSet` (Shortest Path Tree Set，最短路径树集) 用于追踪最短路径树中的顶点，也就是上边的第一个集合。最初该集合为空。
- 为给定图的所有顶点设定距离，起点设置为 `0`，其余顶点设置为 `INF`
- 在 `sptSet` 没有包含所有顶点的情况下，循环执行：
  - 选择一个距离最小但不在 `sptSet` 中的顶点 `u`
  - 把 `u` 添加进 `sptSet`
  - 更新 `u` 的所有邻接顶点的距离值
    - 为了更新距离值，遍历所有邻接顶点
    - 对每一个邻接顶点 `v`，如果从起点到 `u` 的距离加上边 `u-v` 的权重小于 `v` 的距离值，则更新 `v` 的距离值。

表示方法：

- `boolean sptSet[v]`: `true` if vertex `v` is included in SPT, otherwise not
- `double dist[v]`: shortest distance value from source to vertex `v`

参见：_[Find Shortest Paths from Source to all Vertices using Dijkstra’s Algorithm (geeksforgeeks.org)](https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/?ref=gcse)_

课本变量与此处的对应关系：

| 此处变量名 | 课本变量名 | 含义                                  | 初始值                                                                                       |
| ---------- | ---------- | ------------------------------------- | -------------------------------------------------------------------------------------------- |
| sptSet[v]  | s[v]       | 顶点 `v` 是否在 SPT 中                | 起点为`true`，其余顶点为`false`                                                              |
| dist[v]    | d[v]       | 从起点到顶点 `v` 的最短距离值         | 起点为 `0`，其余顶点为 `INF`（书上给出的初值实际上相当于已经进行了第一轮寻找最短路径的过程） |
|            | path[v]    | 在最短路径中，到顶点 `v` 的前一个顶点 |                                                                                              |

### 排序

| 算法名称 | 平均 / 最坏 / 最好时间复杂度             | 平均 / 最坏 / 最好空间复杂度       | 是否稳定 |
| -------- | ---------------------------------------- | ---------------------------------- | -------- |
| 快速排序 | $O(n \log n)$ / $O(n^2)$ / $O(n \log n)$ | $O(\log n)$ / $O(n)$ / $O(\log n)$ | 不稳定   |
| 归并排序 | $O(n \log n)$                            | $O(n)$                             | 稳定     |
| 堆排序   | $O(n \log n)$                            | $O(1)$                             | 不稳定   |
| 插入排序 | $O(n^2)$ / $O(n^2)$ / $O(n)$             | $O(1)$                             | 稳定     |
| 选择排序 | $O(n^2)$                                 | $O(1)$                             | 不稳定   |
| 冒泡排序 | $O(n^2)$ / $O(n^2)$ / $O(n)$             | $O(n)$                             | 稳定     |
