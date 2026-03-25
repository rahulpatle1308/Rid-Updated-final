QuizData.questions.push(
{
  id: 'py_dsa_1',
  topicId: 'py_dsa',
  question: 'Given an array of integers nums and an integer target, return indices of the two numbers that add up to target.',
  mathSolution: 'Use a hash map to store complement indices while iterating.',
  codeSolution: 'def two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []',
  hint: 'Store each number’s index in a dictionary; for each element check if target - element exists.'
},
{
  id: 'py_dsa_2',
  topicId: 'py_dsa',
  question: 'Reverse a singly linked list and return the new head.',
  mathSolution: 'Iteratively reverse pointers or recursively.',
  codeSolution: 'def reverse_list(head):\n    prev = None\n    curr = head\n    while curr:\n        next_temp = curr.next\n        curr.next = prev\n        prev = curr\n        curr = next_temp\n    return prev',
  hint: 'Use three pointers: prev, curr, next.'
},
{
  id: 'py_dsa_3',
  topicId: 'py_dsa',
  question: 'Given a string containing just parentheses, determine if the input string is valid.',
  mathSolution: 'Use a stack: push opening brackets, pop for closing; check match and empty at end.',
  codeSolution: 'def is_valid(s):\n    stack = []\n    mapping = {")":"(", "}":"{", "]":"["}\n    for ch in s:\n        if ch in mapping:\n            if not stack or stack.pop() != mapping[ch]:\n                return False\n        else:\n            stack.append(ch)\n    return not stack',
  hint: 'Push open brackets; when encountering close bracket, top must match.'
},
{
  id: 'py_dsa_4',
  topicId: 'py_dsa',
  question: 'Merge two sorted arrays into one sorted array.',
  mathSolution: 'Use two pointers to compare elements and build result.',
  codeSolution: 'def merge_sorted(arr1, arr2):\n    i=j=0\n    merged = []\n    while i < len(arr1) and j < len(arr2):\n        if arr1[i] < arr2[j]:\n            merged.append(arr1[i]); i+=1\n        else:\n            merged.append(arr2[j]); j+=1\n    merged.extend(arr1[i:])\n    merged.extend(arr2[j:])\n    return merged',
  hint: 'Append smaller element first, then add remaining.'
},
{
  id: 'py_dsa_5',
  topicId: 'py_dsa',
  question: 'Find the contiguous subarray with the largest sum (Kadane’s algorithm).',
  mathSolution: 'Track current sum and max sum; reset current if negative.',
  codeSolution: 'def max_subarray_sum(nums):\n    max_sum = current = nums[0]\n    for num in nums[1:]:\n        current = max(num, current + num)\n        max_sum = max(max_sum, current)\n    return max_sum',
  hint: 'At each step, decide whether to start new subarray or extend existing.'
},
{
  id: 'py_dsa_6',
  topicId: 'py_dsa',
  question: 'Implement binary search on a sorted array to find a target value. Return index or -1.',
  mathSolution: 'Repeatedly divide the search interval in half.',
  codeSolution: 'def binary_search(arr, target):\n    left, right = 0, len(arr)-1\n    while left <= right:\n        mid = (left+right)//2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid+1\n        else:\n            right = mid-1\n    return -1',
  hint: 'Compare middle element; adjust bounds accordingly.'
},
{
  id: 'py_dsa_7',
  topicId: 'py_dsa',
  question: 'Detect if a linked list has a cycle. Return True if cycle exists.',
  mathSolution: 'Use Floyd’s cycle detection (tortoise and hare).',
  codeSolution: 'def has_cycle(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast:\n            return True\n    return False',
  hint: 'Two pointers moving at different speeds will meet if cycle.'
},
{
  id: 'py_dsa_8',
  topicId: 'py_dsa',
  question: 'Implement a queue using two stacks.',
  mathSolution: 'Use one stack for enqueue, another for dequeue; transfer when needed.',
  codeSolution: 'class MyQueue:\n    def __init__(self):\n        self.s1 = []\n        self.s2 = []\n    def push(self, x):\n        self.s1.append(x)\n    def pop(self):\n        if not self.s2:\n            while self.s1:\n                self.s2.append(self.s1.pop())\n        return self.s2.pop()\n    def peek(self):\n        if not self.s2:\n            while self.s1:\n                self.s2.append(self.s1.pop())\n        return self.s2[-1]\n    def empty(self):\n        return not self.s1 and not self.s2',
  hint: 'Stack s1 for enqueue; for dequeue, if s2 empty, dump s1 into s2.'
},
{
  id: 'py_dsa_9',
  topicId: 'py_dsa',
  question: 'Find the missing number in an array containing n distinct numbers taken from 0,1,...,n.',
  mathSolution: 'Compute expected sum minus actual sum, or use XOR.',
  codeSolution: 'def missing_number(nums):\n    n = len(nums)\n    expected = n * (n+1) // 2\n    actual = sum(nums)\n    return expected - actual',
  hint: 'Sum of 0..n is n(n+1)/2.'
},
{
  id: 'py_dsa_10',
  topicId: 'py_dsa',
  question: 'Perform inorder traversal of a binary tree. Return list of values.',
  mathSolution: 'Recursively traverse left, root, right.',
  codeSolution: 'def inorder(root):\n    if not root:\n        return []\n    return inorder(root.left) + [root.val] + inorder(root.right)',
  hint: 'Base case: empty tree returns [].'
},
{
  id: 'py_dsa_11',
  topicId: 'py_dsa',
  question: 'Return the level order traversal of a binary tree (list of lists per level).',
  mathSolution: 'Use BFS with a queue; process nodes level by level.',
  codeSolution: 'from collections import deque\ndef level_order(root):\n    if not root:\n        return []\n    result = []\n    queue = deque([root])\n    while queue:\n        level = []\n        for _ in range(len(queue)):\n            node = queue.popleft()\n            level.append(node.val)\n            if node.left:\n                queue.append(node.left)\n            if node.right:\n                queue.append(node.right)\n        result.append(level)\n    return result',
  hint: 'Use a queue; for each level, pop all current nodes.'
},
{
  id: 'py_dsa_12',
  topicId: 'py_dsa',
  question: 'Validate if a binary tree is a binary search tree (BST).',
  mathSolution: 'Recursively check with min/max bounds.',
  codeSolution: 'def is_valid_bst(root, low=float("-inf"), high=float("inf")):\n    if not root:\n        return True\n    if not (low < root.val < high):\n        return False\n    return (is_valid_bst(root.left, low, root.val) and\n            is_valid_bst(root.right, root.val, high))',
  hint: 'Pass allowed range for each subtree.'
},
{
  id: 'py_dsa_13',
  topicId: 'py_dsa',
  question: 'Find the maximum depth of a binary tree (number of nodes along longest root‑to‑leaf path).',
  mathSolution: 'Depth = 1 + max(depth(left), depth(right)).',
  codeSolution: 'def max_depth(root):\n    if not root:\n        return 0\n    return 1 + max(max_depth(root.left), max_depth(root.right))',
  hint: 'Base: empty tree depth 0.'
},
{
  id: 'py_dsa_14',
  topicId: 'py_dsa',
  question: 'Given a binary search tree, find the lowest common ancestor of two nodes.',
  mathSolution: 'Traverse from root: if both less, go left; both greater, go right; else current is LCA.',
  codeSolution: 'def lowest_common_ancestor(root, p, q):\n    while root:\n        if p.val < root.val > q.val:\n            root = root.left\n        elif p.val > root.val < q.val:\n            root = root.right\n        else:\n            return root',
  hint: 'In BST, LCA is the node where p and q diverge.'
},
{
  id: 'py_dsa_15',
  topicId: 'py_dsa',
  question: 'Implement BFS traversal of a graph (return nodes in order visited).',
  mathSolution: 'Use queue; start from given node, mark visited.',
  codeSolution: 'from collections import deque\ndef bfs(graph, start):\n    visited = set()\n    queue = deque([start])\n    order = []\n    visited.add(start)\n    while queue:\n        node = queue.popleft()\n        order.append(node)\n        for neighbor in graph[node]:\n            if neighbor not in visited:\n                visited.add(neighbor)\n                queue.append(neighbor)\n    return order',
  hint: 'Mark visited when enqueuing to avoid duplicates.'
},
{
  id: 'py_dsa_16',
  topicId: 'py_dsa',
  question: 'Implement DFS traversal of a graph (recursive).',
  mathSolution: 'Recursively visit neighbors; use a set to track visited.',
  codeSolution: 'def dfs_recursive(graph, node, visited=None):\n    if visited is None:\n        visited = set()\n    visited.add(node)\n    print(node)  # or collect\n    for neighbor in graph[node]:\n        if neighbor not in visited:\n            dfs_recursive(graph, neighbor, visited)\n    return visited',
  hint: 'Mark node visited before exploring neighbors.'
},
{
  id: 'py_dsa_17',
  topicId: 'py_dsa',
  question: 'Perform topological sort on a directed acyclic graph (DAG) using Kahn’s algorithm.',
  mathSolution: 'Compute in‑degrees, repeatedly remove nodes with zero in‑degree.',
  codeSolution: 'from collections import deque, defaultdict\ndef topological_sort(vertices, edges):\n    graph = defaultdict(list)\n    in_degree = {v:0 for v in vertices}\n    for u, v in edges:\n        graph[u].append(v)\n        in_degree[v] += 1\n    q = deque([v for v in vertices if in_degree[v]==0])\n    top_order = []\n    while q:\n        u = q.popleft()\n        top_order.append(u)\n        for v in graph[u]:\n            in_degree[v] -= 1\n            if in_degree[v]==0:\n                q.append(v)\n    if len(top_order) != len(vertices):\n        return []  # cycle\n    return top_order',
  hint: 'Queue nodes with in‑degree 0, process and decrease neighbors.'
},
{
  id: 'py_dsa_18',
  topicId: 'py_dsa',
  question: 'Detect if a directed graph has a cycle using DFS.',
  mathSolution: 'Use three states: unvisited, visiting, visited; if visiting found, cycle.',
  codeSolution: 'def has_cycle(graph):\n    state = {node:0 for node in graph}  # 0=unvisited,1=visiting,2=visited\n    def dfs(node):\n        if state[node]==1:\n            return True\n        if state[node]==2:\n            return False\n        state[node]=1\n        for nei in graph[node]:\n            if dfs(nei):\n                return True\n        state[node]=2\n        return False\n    for node in graph:\n        if state[node]==0:\n            if dfs(node):\n                return True\n    return False',
  hint: 'Detect back edge to node in current recursion stack.'
},
{
  id: 'py_dsa_19',
  topicId: 'py_dsa',
  question: 'Implement Dijkstra’s algorithm to find shortest paths from source to all nodes.',
  mathSolution: 'Use a priority queue; relax edges.',
  codeSolution: 'import heapq\ndef dijkstra(graph, start):\n    dist = {node: float("inf") for node in graph}\n    dist[start] = 0\n    pq = [(0, start)]\n    while pq:\n        d, u = heapq.heappop(pq)\n        if d > dist[u]:\n            continue\n        for v, weight in graph[u]:\n            nd = d + weight\n            if nd < dist[v]:\n                dist[v] = nd\n                heapq.heappush(pq, (nd, v))\n    return dist',
  hint: 'Always expand the node with smallest known distance.'
},
{
  id: 'py_dsa_20',
  topicId: 'py_dsa',
  question: 'Solve 0/1 knapsack: given weights and values, max value with capacity W.',
  mathSolution: 'DP: dp[i][w] = max(dp[i-1][w], dp[i-1][w-wt[i]] + val[i]).',
  codeSolution: 'def knapsack(weights, values, W):\n    n = len(weights)\n    dp = [[0]*(W+1) for _ in range(n+1)]\n    for i in range(1, n+1):\n        for w in range(W+1):\n            if weights[i-1] <= w:\n                dp[i][w] = max(dp[i-1][w], dp[i-1][w-weights[i-1]] + values[i-1])\n            else:\n                dp[i][w] = dp[i-1][w]\n    return dp[n][W]',
  hint: 'Build DP table; for each item, decide to include or skip.'
},
{
  id: 'py_dsa_21',
  topicId: 'py_dsa',
  question: 'Find length of longest common subsequence (LCS) of two strings.',
  mathSolution: 'DP: if chars match, 1 + dp[i-1][j-1]; else max(dp[i-1][j], dp[i][j-1]).',
  codeSolution: 'def lcs(text1, text2):\n    m, n = len(text1), len(text2)\n    dp = [[0]*(n+1) for _ in range(m+1)]\n    for i in range(1, m+1):\n        for j in range(1, n+1):\n            if text1[i-1]==text2[j-1]:\n                dp[i][j] = 1 + dp[i-1][j-1]\n            else:\n                dp[i][j] = max(dp[i-1][j], dp[i][j-1])\n    return dp[m][n]',
  hint: 'Classic DP; build table from top‑left.'
},
{
  id: 'py_dsa_22',
  topicId: 'py_dsa',
  question: 'Compute the edit distance (Levenshtein distance) between two strings.',
  mathSolution: 'DP: dp[i][j] = min(insert, delete, replace).',
  codeSolution: 'def edit_distance(word1, word2):\n    m, n = len(word1), len(word2)\n    dp = [[0]*(n+1) for _ in range(m+1)]\n    for i in range(m+1):\n        dp[i][0] = i\n    for j in range(n+1):\n        dp[0][j] = j\n    for i in range(1, m+1):\n        for j in range(1, n+1):\n            if word1[i-1]==word2[j-1]:\n                dp[i][j] = dp[i-1][j-1]\n            else:\n                dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])\n    return dp[m][n]',
  hint: 'Base cases: empty strings; cost 1 for insert/delete/replace.'
},
{
  id: 'py_dsa_23',
  topicId: 'py_dsa',
  question: 'Find the minimum number of coins to make a given amount (unlimited supply).',
  mathSolution: 'DP: dp[amt] = min(dp[amt-coin]) + 1.',
  codeSolution: 'def coin_change(coins, amount):\n    dp = [float("inf")] * (amount+1)\n    dp[0] = 0\n    for coin in coins:\n        for x in range(coin, amount+1):\n            dp[x] = min(dp[x], dp[x-coin] + 1)\n    return dp[amount] if dp[amount] != float("inf") else -1',
  hint: 'Classic unbounded knapsack style.'
},
{
  id: 'py_dsa_24',
  topicId: 'py_dsa',
  question: 'Find the length of longest increasing subsequence (LIS).',
  mathSolution: 'DP O(n²) or patience sorting O(n log n).',
  codeSolution: 'def length_of_lis(nums):\n    import bisect\n    tails = []\n    for x in nums:\n        i = bisect.bisect_left(tails, x)\n        if i == len(tails):\n            tails.append(x)\n        else:\n            tails[i] = x\n    return len(tails)',
  hint: 'Maintain tails array of smallest possible tails.'
},
{
  id: 'py_dsa_25',
  topicId: 'py_dsa',
  question: 'Subset sum: given a set of positive integers, determine if there is a subset summing to target.',
  mathSolution: 'DP boolean table.',
  codeSolution: 'def subset_sum(nums, target):\n    dp = [False]*(target+1)\n    dp[0] = True\n    for num in nums:\n        for x in range(target, num-1, -1):\n            if dp[x-num]:\n                dp[x] = True\n    return dp[target]',
  hint: 'Iterate backwards to avoid reusing same element.'
},
{
  id: 'py_dsa_26',
  topicId: 'py_dsa',
  question: 'Implement merge sort on an array.',
  mathSolution: 'Divide array into halves, sort recursively, merge.',
  codeSolution: 'def merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr)//2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(left, right):\n    i=j=0\n    merged = []\n    while i<len(left) and j<len(right):\n        if left[i] <= right[j]:\n            merged.append(left[i]); i+=1\n        else:\n            merged.append(right[j]); j+=1\n    merged.extend(left[i:])\n    merged.extend(right[j:])\n    return merged',
  hint: 'Recursive divide, then linear merge.'
},
{
  id: 'py_dsa_27',
  topicId: 'py_dsa',
  question: 'Implement quick sort.',
  mathSolution: 'Choose pivot, partition, recursively sort partitions.',
  codeSolution: 'def quick_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[0]\n    less = [x for x in arr[1:] if x <= pivot]\n    greater = [x for x in arr[1:] if x > pivot]\n    return quick_sort(less) + [pivot] + quick_sort(greater)',
  hint: 'Simple version using list comprehensions (not in‑place).'
},
{
  id: 'py_dsa_28',
  topicId: 'py_dsa',
  question: 'Implement heap sort.',
  mathSolution: 'Build max‑heap, then repeatedly extract max.',
  codeSolution: 'def heapify(arr, n, i):\n    largest = i\n    l = 2*i+1\n    r = 2*i+2\n    if l < n and arr[l] > arr[largest]:\n        largest = l\n    if r < n and arr[r] > arr[largest]:\n        largest = r\n    if largest != i:\n        arr[i], arr[largest] = arr[largest], arr[i]\n        heapify(arr, n, largest)\n\ndef heap_sort(arr):\n    n = len(arr)\n    for i in range(n//2-1, -1, -1):\n        heapify(arr, n, i)\n    for i in range(n-1, 0, -1):\n        arr[i], arr[0] = arr[0], arr[i]\n        heapify(arr, i, 0)\n    return arr',
  hint: 'First build heap, then swap root with last and heapify.'
},
{
  id: 'py_dsa_29',
  topicId: 'py_dsa',
  question: 'Find the kth largest element in an unsorted array.',
  mathSolution: 'Use a min‑heap of size k, or quickselect.',
  codeSolution: 'import heapq\ndef find_kth_largest(nums, k):\n    return heapq.nlargest(k, nums)[-1]',
  hint: '`heapq.nlargest(k, nums)` returns list of k largest.'
},
{
  id: 'py_dsa_30',
  topicId: 'py_dsa',
  question: 'Design and implement an LRU (Least Recently Used) cache.',
  mathSolution: 'Use OrderedDict or dict + doubly linked list.',
  codeSolution: 'from collections import OrderedDict\nclass LRUCache:\n    def __init__(self, capacity):\n        self.cache = OrderedDict()\n        self.cap = capacity\n    def get(self, key):\n        if key not in self.cache:\n            return -1\n        self.cache.move_to_end(key)\n        return self.cache[key]\n    def put(self, key, value):\n        if key in self.cache:\n            self.cache.move_to_end(key)\n        self.cache[key] = value\n        if len(self.cache) > self.cap:\n            self.cache.popitem(last=False)',
  hint: 'OrderedDict maintains insertion order; move_to_end marks recent.'
},
{
  id: 'py_dsa_31',
  topicId: 'py_dsa',
  question: 'Rotate an array to the right by k steps.',
  mathSolution: 'Reverse whole, then reverse first k, then reverse rest.',
  codeSolution: 'def rotate(nums, k):\n    k %= len(nums)\n    def reverse(l, r):\n        while l < r:\n            nums[l], nums[r] = nums[r], nums[l]\n            l+=1; r-=1\n    reverse(0, len(nums)-1)\n    reverse(0, k-1)\n    reverse(k, len(nums)-1)',
  hint: 'Three reversals achieve rotation.'
},
{
  id: 'py_dsa_32',
  topicId: 'py_dsa',
  question: 'Given an array nums, return an array output such that output[i] is product of all elements except nums[i] (without division).',
  mathSolution: 'Compute prefix and suffix products.',
  codeSolution: 'def product_except_self(nums):\n    n = len(nums)\n    output = [1]*n\n    left = 1\n    for i in range(n):\n        output[i] = left\n        left *= nums[i]\n    right = 1\n    for i in range(n-1,-1,-1):\n        output[i] *= right\n        right *= nums[i]\n    return output',
  hint: 'First pass: left products; second pass: multiply by right products.'
},
{
  id: 'py_dsa_33',
  topicId: 'py_dsa',
  question: 'Given n non‑negative integers representing heights of vertical lines, find two lines that together with x‑axis form a container that holds the most water.',
  mathSolution: 'Two pointers: move the shorter line inward.',
  codeSolution: 'def max_area(height):\n    left, right = 0, len(height)-1\n    max_water = 0\n    while left < right:\n        area = (right-left) * min(height[left], height[right])\n        max_water = max(max_water, area)\n        if height[left] < height[right]:\n            left += 1\n        else:\n            right -= 1\n    return max_water',
  hint: 'Start with widest container; move pointer at shorter line.'
},
{
  id: 'py_dsa_34',
  topicId: 'py_dsa',
  question: 'Find all unique triplets in the array that sum to zero.',
  mathSolution: 'Sort array, then use two‑sum for each element.',
  codeSolution: 'def three_sum(nums):\n    nums.sort()\n    res = []\n    for i in range(len(nums)-2):\n        if i>0 and nums[i]==nums[i-1]:\n            continue\n        l, r = i+1, len(nums)-1\n        while l < r:\n            s = nums[i]+nums[l]+nums[r]\n            if s<0:\n                l+=1\n            elif s>0:\n                r-=1\n            else:\n                res.append([nums[i],nums[l],nums[r]])\n                while l<r and nums[l]==nums[l+1]: l+=1\n                while l<r and nums[r]==nums[r-1]: r-=1\n                l+=1; r-=1\n    return res',
  hint: 'Sort, then for each i, use two‑sum on the right part.'
},
{
  id: 'py_dsa_35',
  topicId: 'py_dsa',
  question: 'Group anagrams from a list of strings.',
  mathSolution: 'Use a dictionary keyed by sorted string.',
  codeSolution: 'from collections import defaultdict\ndef group_anagrams(strs):\n    groups = defaultdict(list)\n    for s in strs:\n        key = "".join(sorted(s))\n        groups[key].append(s)\n    return list(groups.values())',
  hint: 'Anagrams have same sorted string.'
},
{
  id: 'py_dsa_36',
  topicId: 'py_dsa',
  question: 'Check if a singly linked list is a palindrome.',
  mathSolution: 'Find middle, reverse second half, compare.',
  codeSolution: 'def is_palindrome(head):\n    if not head or not head.next:\n        return True\n    # find middle\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    # reverse second half\n    prev = None\n    while slow:\n        nxt = slow.next\n        slow.next = prev\n        prev = slow\n        slow = nxt\n    # compare\n    left, right = head, prev\n    while right:\n        if left.val != right.val:\n            return False\n        left = left.next\n        right = right.next\n    return True',
  hint: 'Reverse second half and compare with first half.'
},
{
  id: 'py_dsa_37',
  topicId: 'py_dsa',
  question: 'Find the intersection node of two singly linked lists.',
  mathSolution: 'Get lengths, advance longer list, then step together.',
  codeSolution: 'def get_intersection_node(headA, headB):\n    lenA = lenB = 0\n    curA, curB = headA, headB\n    while curA:\n        lenA+=1; curA=curA.next\n    while curB:\n        lenB+=1; curB=curB.next\n    curA, curB = headA, headB\n    if lenA > lenB:\n        for _ in range(lenA-lenB): curA = curA.next\n    else:\n        for _ in range(lenB-lenA): curB = curB.next\n    while curA and curB:\n        if curA == curB:\n            return curA\n        curA=curA.next\n        curB=curB.next\n    return None',
  hint: 'Make both lists same length from the end, then step together.'
},
{
  id: 'py_dsa_38',
  topicId: 'py_dsa',
  question: 'Reverse a string in‑place (list of characters).',
  mathSolution: 'Two pointers swapping.',
  codeSolution: 'def reverse_string(s):\n    left, right = 0, len(s)-1\n    while left < right:\n        s[left], s[right] = s[right], s[left]\n        left+=1; right-=1',
  hint: 'Swap characters from both ends.'
},
{
  id: 'py_dsa_39',
  topicId: 'py_dsa',
  question: 'Find the first non‑repeating character in a string and return its index. If none, return -1.',
  mathSolution: 'Count frequencies, then scan for first with count 1.',
  codeSolution: 'from collections import Counter\ndef first_unique_char(s):\n    counts = Counter(s)\n    for i, ch in enumerate(s):\n        if counts[ch]==1:\n            return i\n    return -1',
  hint: 'Counter counts occurrences, then find first with count 1.'
},
{
  id: 'py_dsa_40',
  topicId: 'py_dsa',
  question: 'Implement strStr(): return index of first occurrence of needle in haystack, or -1.',
  mathSolution: 'Use built‑in find or KMP.',
  codeSolution: 'def str_str(haystack, needle):\n    return haystack.find(needle)',
  hint: '`find` returns the first index or -1.'
},
{
  id: 'py_dsa_41',
  topicId: 'py_dsa',
  question: 'Find the length of the longest substring without repeating characters.',
  mathSolution: 'Sliding window with a set.',
  codeSolution: 'def length_of_longest_substring(s):\n    seen = set()\n    left = max_len = 0\n    for right in range(len(s)):\n        while s[right] in seen:\n            seen.remove(s[left])\n            left += 1\n        seen.add(s[right])\n        max_len = max(max_len, right-left+1)\n    return max_len',
  hint: 'Expand right, shrink left when duplicate.'
},
{
  id: 'py_dsa_42',
  topicId: 'py_dsa',
  question: 'Given two strings s and t, return the minimum window substring of s that contains all characters of t.',
  mathSolution: 'Sliding window with character counts.',
  codeSolution: 'from collections import Counter\ndef min_window(s, t):\n    need = Counter(t)\n    have = {}\n    left = formed = 0\n    required = len(need)\n    ans = float("inf"), None, None\n    for right, ch in enumerate(s):\n        have[ch] = have.get(ch,0)+1\n        if ch in need and have[ch]==need[ch]:\n            formed+=1\n        while left<=right and formed==required:\n            if right-left+1 < ans[0]:\n                ans = (right-left+1, left, right)\n            # shrink\n            have[s[left]]-=1\n            if s[left] in need and have[s[left]] < need[s[left]]:\n                formed-=1\n            left+=1\n    return "" if ans[0]==float("inf") else s[ans[1]:ans[2]+1]',
  hint: 'Expand right until valid, then shrink left while still valid.'
},
{
  id: 'py_dsa_43',
  topicId: 'py_dsa',
  question: 'Word break: given a string and a dictionary, determine if the string can be segmented into dictionary words.',
  mathSolution: 'DP: dp[i] = true if s[0:i] can be segmented.',
  codeSolution: 'def word_break(s, wordDict):\n    word_set = set(wordDict)\n    dp = [False]*(len(s)+1)\n    dp[0] = True\n    for i in range(1, len(s)+1):\n        for j in range(i):\n            if dp[j] and s[j:i] in word_set:\n                dp[i] = True\n                break\n    return dp[-1]',
  hint: 'Check all possible splits; dp[j] means prefix up to j can be segmented.'
},
{
  id: 'py_dsa_44',
  topicId: 'py_dsa',
  question: 'Combination sum: find all unique combinations of candidates (positive integers) that sum to target (each number can be used unlimited times).',
  mathSolution: 'Backtracking; at each step, choose current or skip duplicates.',
  codeSolution: 'def combination_sum(candidates, target):\n    res = []\n    def backtrack(start, path, remaining):\n        if remaining == 0:\n            res.append(path[:])\n            return\n        for i in range(start, len(candidates)):\n            if candidates[i] > remaining:\n                continue\n            path.append(candidates[i])\n            backtrack(i, path, remaining-candidates[i])\n            path.pop()\n    backtrack(0, [], target)\n    return res',
  hint: 'Backtrack with index to reuse same element.'
},
{
  id: 'py_dsa_45',
  topicId: 'py_dsa',
  question: 'Generate all permutations of a list of distinct integers.',
  mathSolution: 'Backtracking: swap or use used array.',
  codeSolution: 'def permute(nums):\n    res = []\n    def backtrack(path):\n        if len(path)==len(nums):\n            res.append(path[:])\n            return\n        for x in nums:\n            if x in path:\n                continue\n            path.append(x)\n            backtrack(path)\n            path.pop()\n    backtrack([])\n    return res',
  hint: 'Use path to track current permutation.'
},
{
  id: 'py_dsa_46',
  topicId: 'py_dsa',
  question: 'Generate all subsets of a set of distinct integers.',
  mathSolution: 'Backtracking: at each element, choose include or exclude.',
  codeSolution: 'def subsets(nums):\n    res = []\n    def backtrack(start, path):\n        res.append(path[:])\n        for i in range(start, len(nums)):\n            path.append(nums[i])\n            backtrack(i+1, path)\n            path.pop()\n    backtrack(0, [])\n    return res',
  hint: 'Add current path, then recursively choose next.'
},
{
  id: 'py_dsa_47',
  topicId: 'py_dsa',
  question: 'Generate all valid combinations of n pairs of parentheses.',
  mathSolution: 'Backtracking with counts of open/close.',
  codeSolution: 'def generate_parenthesis(n):\n    res = []\n    def backtrack(s, open, close):\n        if len(s)==2*n:\n            res.append(s)\n            return\n        if open < n:\n            backtrack(s+"(", open+1, close)\n        if close < open:\n            backtrack(s+")", open, close+1)\n    backtrack("", 0, 0)\n    return res',
  hint: 'Add "(" if open count less than n; add ")" if close less than open.'
},
{
  id: 'py_dsa_48',
  topicId: 'py_dsa',
  question: 'Solve N‑Queens: place N queens on N×N chessboard so no two attack each other. Return all distinct solutions.',
  mathSolution: 'Backtracking row by row; check column and diagonals.',
  codeSolution: 'def solve_n_queens(n):\n    def is_safe(board, row, col):\n        for r in range(row):\n            if board[r]==col or abs(board[r]-col)==abs(r-row):\n                return False\n        return True\n    def backtrack(row):\n        if row==n:\n            solutions.append(board[:])\n            return\n        for col in range(n):\n            if is_safe(board, row, col):\n                board[row]=col\n                backtrack(row+1)\n    board=[-1]*n\n    solutions=[]\n    backtrack(0)\n    # convert to board strings\n    result=[]\n    for sol in solutions:\n        board_str=[]\n        for col in sol:\n            row_str=["."]*n\n            row_str[col]="Q"\n            board_str.append("".join(row_str))\n        result.append(board_str)\n    return result',
  hint: 'Store queen positions per row; check column and diagonals.'
},
{
  id: 'py_dsa_49',
  topicId: 'py_dsa',
  question: 'Write a Sudoku solver that fills a 9×9 board (with some cells filled).',
  mathSolution: 'Backtracking with constraints.',
  codeSolution: 'def solve_sudoku(board):\n    def is_valid(r,c,num):\n        # check row, col, 3x3\n        for i in range(9):\n            if board[r][i]==num or board[i][c]==num:\n                return False\n        sr, sc = (r//3)*3, (c//3)*3\n        for i in range(sr, sr+3):\n            for j in range(sc, sc+3):\n                if board[i][j]==num:\n                    return False\n        return True\n    def backtrack():\n        for i in range(9):\n            for j in range(9):\n                if board[i][j]==".":\n                    for num in "123456789":\n                        if is_valid(i,j,num):\n                            board[i][j]=num\n                            if backtrack():\n                                return True\n                            board[i][j]="."\n                    return False\n        return True\n    backtrack()',
  hint: 'Try numbers from 1‑9 in empty cells; backtrack if invalid.'
},
{
  id: 'py_dsa_50',
  topicId: 'py_dsa',
  question: 'Find the median of two sorted arrays of size m and n in O(log(min(m,n))) time.',
  mathSolution: 'Binary search on smaller array to partition both.',
  codeSolution: 'def find_median_sorted_arrays(nums1, nums2):\n    if len(nums1)>len(nums2):\n        nums1, nums2 = nums2, nums1\n    m, n = len(nums1), len(nums2)\n    low, high = 0, m\n    while low <= high:\n        partition1 = (low+high)//2\n        partition2 = (m+n+1)//2 - partition1\n        maxLeft1 = float("-inf") if partition1==0 else nums1[partition1-1]\n        minRight1 = float("inf") if partition1==m else nums1[partition1]\n        maxLeft2 = float("-inf") if partition2==0 else nums2[partition2-1]\n        minRight2 = float("inf") if partition2==n else nums2[partition2]\n        if maxLeft1 <= minRight2 and maxLeft2 <= minRight1:\n            if (m+n)%2==0:\n                return (max(maxLeft1,maxLeft2)+min(minRight1,minRight2))/2\n            else:\n                return max(maxLeft1,maxLeft2)\n        elif maxLeft1 > minRight2:\n            high = partition1-1\n        else:\n            low = partition1+1',
  hint: 'Partition both arrays such that all left elements ≤ all right.'
}
);