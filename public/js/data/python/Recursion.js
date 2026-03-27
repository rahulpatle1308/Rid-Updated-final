QuizData.questions.push(
{
  id: 'py_rec_1',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the factorial of a non-negative integer n.',
  mathSolution: 'factorial(n) = n * factorial(n-1) for n>0, with factorial(0)=1.',
  codeSolution: 'def factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n-1)',
  hint: 'Base case: n == 0. Recursive case: n * factorial(n-1).'
},
{
  id: 'py_rec_2',
  topicId: 'py_recursion',
  question: 'Write a recursive function to return the nth Fibonacci number (F(0)=0, F(1)=1).',
  mathSolution: 'F(n) = F(n-1) + F(n-2) for n>1, with F(0)=0, F(1)=1.',
  codeSolution: 'def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)',
  hint: 'Base cases: n=0 and n=1. Recursive: sum of two previous.'
},
{
  id: 'py_rec_3',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the sum of the first n natural numbers.',
  mathSolution: 'sum(n) = n + sum(n-1) for n>0, with sum(0)=0.',
  codeSolution: 'def sum_natural(n):\n    if n == 0:\n        return 0\n    return n + sum_natural(n-1)',
  hint: 'Add n to the sum of numbers from 1 to n-1.'
},
{
  id: 'py_rec_4',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute x raised to the power n (x^n) for non-negative integer n.',
  mathSolution: 'power(x, n) = x * power(x, n-1) for n>0, with power(x,0)=1.',
  codeSolution: 'def power(x, n):\n    if n == 0:\n        return 1\n    return x * power(x, n-1)',
  hint: 'Base: n==0 returns 1. Recursive: multiply x by x^(n-1).'
},
{
  id: 'py_rec_5',
  topicId: 'py_recursion',
  question: 'Write a recursive function to reverse a string.',
  mathSolution: 'Reverse of s is reverse(s[1:]) + s[0].',
  codeSolution: 'def reverse_string(s):\n    if len(s) <= 1:\n        return s\n    return reverse_string(s[1:]) + s[0]',
  hint: 'Take the first character and append it after reversing the rest.'
},
{
  id: 'py_rec_6',
  topicId: 'py_recursion',
  question: 'Write a recursive function to check if a string is a palindrome.',
  mathSolution: 'A string is palindrome if first and last characters match and the middle substring is palindrome.',
  codeSolution: 'def is_palindrome(s):\n    if len(s) <= 1:\n        return True\n    if s[0] != s[-1]:\n        return False\n    return is_palindrome(s[1:-1])',
  hint: 'Compare first and last; if equal, recurse on the substring excluding them.'
},
{
  id: 'py_rec_7',
  topicId: 'py_recursion',
  question: 'Write a recursive function to count the number of digits in a positive integer.',
  mathSolution: 'count_digits(n) = 1 + count_digits(n//10) for n>=10, base case n<10 returns 1.',
  codeSolution: 'def count_digits(n):\n    if n < 10:\n        return 1\n    return 1 + count_digits(n // 10)',
  hint: 'Remove last digit with integer division, count it.'
},
{
  id: 'py_rec_8',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the sum of digits of a positive integer.',
  mathSolution: 'sum_digits(n) = n%10 + sum_digits(n//10), base case n==0 returns 0.',
  codeSolution: 'def sum_digits(n):\n    if n == 0:\n        return 0\n    return n % 10 + sum_digits(n // 10)',
  hint: 'Add last digit to sum of remaining digits.'
},
{
  id: 'py_rec_9',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the greatest common divisor (GCD) of two numbers using Euclid\'s algorithm.',
  mathSolution: 'gcd(a,b) = gcd(b, a%b) for b!=0, base case gcd(a,0)=a.',
  codeSolution: 'def gcd(a, b):\n    if b == 0:\n        return a\n    return gcd(b, a % b)',
  hint: 'If b is zero, return a. Otherwise recurse with (b, a mod b).'
},
{
  id: 'py_rec_10',
  topicId: 'py_recursion',
  question: 'Write a recursive function to solve the Tower of Hanoi puzzle. Print the moves to move n disks from source to destination using auxiliary peg.',
  mathSolution: 'To move n disks from A to C using B: move n-1 from A to B, then move largest from A to C, then move n-1 from B to C.',
  codeSolution: 'def tower_of_hanoi(n, source, target, auxiliary):\n    if n == 1:\n        print(f"Move disk 1 from {source} to {target}")\n        return\n    tower_of_hanoi(n-1, source, auxiliary, target)\n    print(f"Move disk {n} from {source} to {target}")\n    tower_of_hanoi(n-1, auxiliary, target, source)',
  hint: 'Move n-1 disks to auxiliary, then move the largest, then move n-1 from auxiliary to target.'
},
{
  id: 'py_rec_11',
  topicId: 'py_recursion',
  question: 'Write a recursive function to perform binary search on a sorted list. Return index of target or -1 if not found.',
  mathSolution: 'Check middle element; if target equals middle, return index; if target < middle, search left half; else search right half.',
  codeSolution: 'def binary_search(arr, target, low, high):\n    if low > high:\n        return -1\n    mid = (low + high) // 2\n    if arr[mid] == target:\n        return mid\n    elif arr[mid] > target:\n        return binary_search(arr, target, low, mid-1)\n    else:\n        return binary_search(arr, target, mid+1, high)',
  hint: 'Base case: low > high means not found. Recurse on appropriate half.'
},
{
  id: 'py_rec_12',
  topicId: 'py_recursion',
  question: 'Write a recursive function that prints numbers from 1 to n.',
  mathSolution: 'Print 1, then recursively print from 2 to n.',
  codeSolution: 'def print_1_to_n(n):\n    if n <= 0:\n        return\n    print_1_to_n(n-1)\n    print(n)',
  hint: 'Recurse first (to print smaller numbers), then print current number.'
},
{
  id: 'py_rec_13',
  topicId: 'py_recursion',
  question: 'Write a recursive function that prints numbers from n down to 1.',
  mathSolution: 'Print n, then recursively print from n-1 down to 1.',
  codeSolution: 'def print_n_to_1(n):\n    if n <= 0:\n        return\n    print(n)\n    print_n_to_1(n-1)',
  hint: 'Print current, then recurse with n-1.'
},
{
  id: 'py_rec_14',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the product of all elements in a list.',
  mathSolution: 'product(arr) = arr[0] * product(arr[1:]) for non-empty list; base empty list returns 1.',
  codeSolution: 'def product_list(arr):\n    if not arr:\n        return 1\n    return arr[0] * product_list(arr[1:])',
  hint: 'Multiply first element by product of the rest.'
},
{
  id: 'py_rec_15',
  topicId: 'py_recursion',
  question: 'Write a recursive function to find the maximum element in a list.',
  mathSolution: 'max(arr) = max(arr[0], max(arr[1:])) for list length>1; base length 1 returns arr[0].',
  codeSolution: 'def max_list(arr):\n    if len(arr) == 1:\n        return arr[0]\n    sub_max = max_list(arr[1:])\n    return arr[0] if arr[0] > sub_max else sub_max',
  hint: 'Compare first element with maximum of the rest.'
},
{
  id: 'py_rec_16',
  topicId: 'py_recursion',
  question: 'Write a recursive linear search: return index of target in list, or -1 if not found.',
  mathSolution: 'If first element matches, return 0; else search the rest; if not found, return -1.',
  codeSolution: 'def linear_search(arr, target, index=0):\n    if index >= len(arr):\n        return -1\n    if arr[index] == target:\n        return index\n    return linear_search(arr, target, index+1)',
  hint: 'Check current index, if not match, recurse with index+1.'
},
{
  id: 'py_rec_17',
  topicId: 'py_recursion',
  question: 'Write a recursive binary search that returns True if target exists in sorted list, else False.',
  mathSolution: 'Same as index search, but returns boolean.',
  codeSolution: 'def binary_search_bool(arr, target, low, high):\n    if low > high:\n        return False\n    mid = (low + high)//2\n    if arr[mid] == target:\n        return True\n    elif arr[mid] > target:\n        return binary_search_bool(arr, target, low, mid-1)\n    else:\n        return binary_search_bool(arr, target, mid+1, high)',
  hint: 'Base case: low>high returns False.'
},
{
  id: 'py_rec_18',
  topicId: 'py_recursion',
  question: 'Write a recursive function to generate all subsets (the power set) of a given set represented as a list of unique elements.',
  mathSolution: 'For each element, include it in subsets of the rest, or exclude it.',
  codeSolution: 'def subsets(nums):\n    if not nums:\n        return [[]]\n    first = nums[0]\n    rest = nums[1:]\n    rest_subsets = subsets(rest)\n    return rest_subsets + [[first] + s for s in rest_subsets]',
  hint: 'Base: empty set has one subset (empty list). Recursive: subsets without first + subsets including first.'
},
{
  id: 'py_rec_19',
  topicId: 'py_recursion',
  question: 'Write a recursive function to generate all permutations of a string.',
  mathSolution: 'For each character, insert it into all permutations of the remaining characters.',
  codeSolution: 'def permutations(s):\n    if len(s) <= 1:\n        return [s]\n    perms = []\n    for i, char in enumerate(s):\n        for perm in permutations(s[:i] + s[i+1:]):\n            perms.append(char + perm)\n    return perms',
  hint: 'Pick a character, permute the rest, then prepend the character.'
},
{
  id: 'py_rec_20',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the number of ways to choose k elements from n (combination C(n, k)).',
  mathSolution: 'C(n,k) = C(n-1,k-1) + C(n-1,k) with base C(n,0)=C(n,n)=1.',
  codeSolution: 'def combination(n, k):\n    if k == 0 or k == n:\n        return 1\n    return combination(n-1, k-1) + combination(n-1, k)',
  hint: 'Pascal\'s triangle recurrence.'
},
{
  id: 'py_rec_21',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the length of a string without using len().',
  mathSolution: 'length(s) = 1 + length(s[1:]) if s non-empty, base empty string returns 0.',
  codeSolution: 'def str_length(s):\n    if s == "":\n        return 0\n    return 1 + str_length(s[1:])',
  hint: 'Add 1 for first character, recurse on the rest.'
},
{
  id: 'py_rec_22',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute x^n using fast exponentiation (divide and conquer).',
  mathSolution: 'power(x,n) = power(x,n//2)^2 if n even; x * power(x,n-1) if n odd; base n=0 returns 1.',
  codeSolution: 'def fast_power(x, n):\n    if n == 0:\n        return 1\n    if n % 2 == 0:\n        half = fast_power(x, n//2)\n        return half * half\n    else:\n        return x * fast_power(x, n-1)',
  hint: 'Use parity of n to reduce steps.'
},
{
  id: 'py_rec_23',
  topicId: 'py_recursion',
  question: 'Write a recursive function to check if a list is sorted in ascending order.',
  mathSolution: 'A list is sorted if first element <= second, and the rest (from index 1) is sorted.',
  codeSolution: 'def is_sorted(arr):\n    if len(arr) <= 1:\n        return True\n    return arr[0] <= arr[1] and is_sorted(arr[1:])',
  hint: 'Compare first two, then recurse on tail.'
},
{
  id: 'py_rec_24',
  topicId: 'py_recursion',
  question: 'Write a recursive function to implement merge sort on a list.',
  mathSolution: 'Split list into halves, sort each recursively, then merge the sorted halves.',
  codeSolution: 'def merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr)//2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(left, right):\n    result = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            result.append(left[i]); i+=1\n        else:\n            result.append(right[j]); j+=1\n    result.extend(left[i:])\n    result.extend(right[j:])\n    return result',
  hint: 'Divide, conquer, then merge.'
},
{
  id: 'py_rec_25',
  topicId: 'py_recursion',
  question: 'Write a recursive function to implement quick sort on a list.',
  mathSolution: 'Choose pivot, partition elements into less than pivot and greater than pivot, recursively sort each part.',
  codeSolution: 'def quick_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[0]\n    less = [x for x in arr[1:] if x <= pivot]\n    greater = [x for x in arr[1:] if x > pivot]\n    return quick_sort(less) + [pivot] + quick_sort(greater)',
  hint: 'Pick first element as pivot, recurse on less and greater.'
},
{
  id: 'py_rec_26',
  topicId: 'py_recursion',
  question: 'Given a binary tree node class (value, left, right), write a recursive function for inorder traversal that returns list of values.',
  mathSolution: 'Traverse left subtree, then root, then right subtree.',
  codeSolution: 'class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef inorder(root):\n    if not root:\n        return []\n    return inorder(root.left) + [root.val] + inorder(root.right)',
  hint: 'Recursively collect left, then current, then right.'
},
{
  id: 'py_rec_27',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the maximum depth (height) of a binary tree.',
  mathSolution: 'depth = 1 + max(depth(left), depth(right)); base empty tree depth 0.',
  codeSolution: 'def max_depth(root):\n    if not root:\n        return 0\n    return 1 + max(max_depth(root.left), max_depth(root.right))',
  hint: 'Height = 1 + max of heights of children.'
},
{
  id: 'py_rec_28',
  topicId: 'py_recursion',
  question: 'Write a recursive function to mirror a binary tree (swap left and right children).',
  mathSolution: 'Mirror tree: swap left and right subtrees recursively.',
  codeSolution: 'def mirror_tree(root):\n    if not root:\n        return None\n    root.left, root.right = mirror_tree(root.right), mirror_tree(root.left)\n    return root',
  hint: 'Recursively mirror children, then swap.'
},
{
  id: 'py_rec_29',
  topicId: 'py_recursion',
  question: 'Write a recursive function to count the number of leaf nodes in a binary tree.',
  mathSolution: 'Leaf if both children are None, count = 1; else sum leaves of left and right.',
  codeSolution: 'def count_leaves(root):\n    if not root:\n        return 0\n    if not root.left and not root.right:\n        return 1\n    return count_leaves(root.left) + count_leaves(root.right)',
  hint: 'If node is leaf, return 1; else recurse on children.'
},
{
  id: 'py_rec_30',
  topicId: 'py_recursion',
  question: 'Write a recursive function to check if two binary trees are identical.',
  mathSolution: 'Trees identical if both None, or both non‑None with same root value and identical left and right subtrees.',
  codeSolution: 'def is_same_tree(p, q):\n    if not p and not q:\n        return True\n    if not p or not q:\n        return False\n    return (p.val == q.val and\n            is_same_tree(p.left, q.left) and\n            is_same_tree(p.right, q.right))',
  hint: 'Compare values and recursively check children.'
},
{
  id: 'py_rec_31',
  topicId: 'py_recursion',
  question: 'Write a recursive function to search for a value in a singly linked list (node class: val, next).',
  mathSolution: 'If current node is None, return False; if val matches, return True; else search next.',
  codeSolution: 'class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef search_linked_list(head, target):\n    if not head:\n        return False\n    if head.val == target:\n        return True\n    return search_linked_list(head.next, target)',
  hint: 'Base: empty list returns False; if current matches, True; else recurse on next.'
},
{
  id: 'py_rec_32',
  topicId: 'py_recursion',
  question: 'Write a recursive function to reverse a singly linked list. Return the new head.',
  mathSolution: 'Reverse the rest, then make the next of the reversed tail point to current, and current next become None.',
  codeSolution: 'def reverse_linked_list(head):\n    if not head or not head.next:\n        return head\n    new_head = reverse_linked_list(head.next)\n    head.next.next = head\n    head.next = None\n    return new_head',
  hint: 'Recursively reverse the tail, then adjust pointers.'
},
{
  id: 'py_rec_33',
  topicId: 'py_recursion',
  question: 'Write a recursive function to flatten a nested list (list containing lists or integers) into a single list.',
  mathSolution: 'If element is list, flatten it and extend; if integer, append it.',
  codeSolution: 'def flatten(nested):\n    result = []\n    for item in nested:\n        if isinstance(item, list):\n            result.extend(flatten(item))\n        else:\n            result.append(item)\n    return result',
  hint: 'Iterate through items; for a list, recurse and extend; otherwise append.'
},
{
  id: 'py_rec_34',
  topicId: 'py_recursion',
  question: 'Write a recursive function to generate the first n Fibonacci numbers as a list.',
  mathSolution: 'Fibonacci sequence defined recursively; return list up to n.',
  codeSolution: 'def fib_list(n):\n    if n <= 0:\n        return []\n    if n == 1:\n        return [0]\n    if n == 2:\n        return [0, 1]\n    prev = fib_list(n-1)\n    prev.append(prev[-1] + prev[-2])\n    return prev',
  hint: 'Build list recursively by adding last two elements.'
},
{
  id: 'py_rec_35',
  topicId: 'py_recursion',
  question: 'Write a recursive function to convert a decimal number to binary (as string).',
  mathSolution: 'binary(n) = binary(n//2) + str(n%2), base n<=1 returns str(n).',
  codeSolution: 'def decimal_to_binary(n):\n    if n <= 1:\n        return str(n)\n    return decimal_to_binary(n // 2) + str(n % 2)',
  hint: 'Recursively convert quotient, then append remainder.'
},
{
  id: 'py_rec_36',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the sum of natural numbers from a to b inclusive.',
  mathSolution: 'sum_range(a,b) = a + sum_range(a+1,b) if a <= b, else 0.',
  codeSolution: 'def sum_range(a, b):\n    if a > b:\n        return 0\n    return a + sum_range(a+1, b)',
  hint: 'Add a to sum of a+1..b.'
},
{
  id: 'py_rec_37',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute a to the power b using repeated multiplication (a^b).',
  mathSolution: 'a^b = a * a^(b-1) for b>0; a^0=1.',
  codeSolution: 'def power_repeated(a, b):\n    if b == 0:\n        return 1\n    return a * power_repeated(a, b-1)',
  hint: 'Multiply a by a^(b-1).'
},
{
  id: 'py_rec_38',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the number of ways to climb a staircase of n steps if you can take 1 or 2 steps at a time.',
  mathSolution: 'ways(n) = ways(n-1) + ways(n-2) for n>2; base ways(1)=1, ways(2)=2.',
  codeSolution: 'def climb_stairs(n):\n    if n == 1:\n        return 1\n    if n == 2:\n        return 2\n    return climb_stairs(n-1) + climb_stairs(n-2)',
  hint: 'Reaches step n from n-1 or n-2.'
},
{
  id: 'py_rec_39',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the number of paths from top-left to bottom-right in an m x n grid, moving only right or down.',
  mathSolution: 'paths(m,n) = paths(m-1,n) + paths(m,n-1) for m>1 and n>1; base paths(1,n)=1, paths(m,1)=1.',
  codeSolution: 'def grid_paths(m, n):\n    if m == 1 or n == 1:\n        return 1\n    return grid_paths(m-1, n) + grid_paths(m, n-1)',
  hint: 'From (m,n) you can go up or left; base when only one row or column.'
},
{
  id: 'py_rec_40',
  topicId: 'py_recursion',
  question: 'Write a recursive function to check if a string has balanced parentheses (only \'(\' and \')\').',
  mathSolution: 'Use a counter; at each step increment for \'(\' decrement for \')\'; if negative, unbalanced; at end zero means balanced.',
  codeSolution: 'def balanced_parentheses(s, count=0):\\n    if count < 0:\\n        return False\\n    if not s:\\n        return count == 0\\n    if s[0] == \'(\':\\n        return balanced_parentheses(s[1:], count+1)\\n    else:\\n        return balanced_parentheses(s[1:], count-1)',
  hint: 'Maintain a running count; if count ever negative, return False; at end check zero.'
},
{
  id: 'py_rec_41',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the nth Catalan number.',
  mathSolution: 'C(0)=1, C(n+1) = sum_{i=0}^{n} C(i)*C(n-i).',
  codeSolution: 'def catalan(n):\n    if n <= 0:\n        return 1\n    res = 0\n    for i in range(n):\n        res += catalan(i) * catalan(n-1-i)\n    return res',
  hint: 'Recurrence: C(n) = sum of C(i)*C(n-1-i) for i from 0 to n-1.'
},
{
  id: 'py_rec_42',
  topicId: 'py_recursion',
  question: 'Write a recursive function to generate all binary strings of length n.',
  mathSolution: 'Generate strings of length n-1 and prepend "0" and "1".',
  codeSolution: 'def binary_strings(n):\n    if n == 0:\n        return [""]\n    smaller = binary_strings(n-1)\n    return ["0" + s for s in smaller] + ["1" + s for s in smaller]',
  hint: 'Base: empty string for n=0. Recursively build.'
},
{
  id: 'py_rec_43',
  topicId: 'py_recursion',
  question: 'Write a recursive function to generate all valid combinations of n pairs of parentheses.',
  mathSolution: 'If left < n, add "(" and recurse; if right < left, add ")" and recurse.',
  codeSolution: 'def generate_parentheses(n, left=0, right=0, s=""):\n    if len(s) == 2*n:\n        return [s]\n    res = []\n    if left < n:\n        res.extend(generate_parentheses(n, left+1, right, s+"("))\n    if right < left:\n        res.extend(generate_parentheses(n, left, right+1, s+")"))\n    return res',
  hint: 'Keep counts of left and right parentheses used; only add ")" if right < left.'
},
{
  id: 'py_rec_44',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the minimum number of coins needed to make a given amount, using given coin denominations (unlimited supply). Assume greedy doesn\'t always work.',
  mathSolution: 'min_coins(amount) = min(1 + min_coins(amount - coin)) for coin <= amount; base amount==0 returns 0.',
  codeSolution: 'def min_coins(coins, amount):\n    if amount == 0:\n        return 0\n    res = float("inf")\n    for coin in coins:\n        if coin <= amount:\n            res = min(res, 1 + min_coins(coins, amount - coin))\n    return res',
  hint: 'Try each coin and take minimum of 1 + min_coins(amount-coin).'
},
{
  id: 'py_rec_45',
  topicId: 'py_recursion',
  question: 'Write a recursive function to solve the N‑Queens problem: return all distinct solutions for placing N queens on an N×N chessboard so that no two queens attack each other.',
  mathSolution: 'Place queens row by row; in each row, try each column if safe; recurse.',
  codeSolution: 'def solve_n_queens(n):\n    def is_safe(board, row, col):\n        for r in range(row):\n            if board[r] == col or \\\n               board[r] - r == col - row or \\\n               board[r] + r == col + row:\n                return False\n        return True\n    def backtrack(row):\n        if row == n:\n            solutions.append(board[:])\n            return\n        for col in range(n):\n            if is_safe(board, row, col):\n                board[row] = col\n                backtrack(row+1)\n    board = [-1]*n\n    solutions = []\n    backtrack(0)\n    return solutions',
  hint: 'Use backtracking; place queens row by row, checking column and diagonals.'
},
{
  id: 'py_rec_46',
  topicId: 'py_recursion',
  question: 'Write a recursive function with memoization (using functools.lru_cache) to compute Fibonacci numbers efficiently.',
  mathSolution: 'Same recurrence but cached to avoid repeated computation.',
  codeSolution: 'from functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef fib_memo(n):\n    if n <= 1:\n        return n\n    return fib_memo(n-1) + fib_memo(n-2)',
  hint: 'Decorate with lru_cache to memoize results automatically.'
},
{
  id: 'py_rec_47',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the Ackermann function A(m,n), which grows very fast.',
  mathSolution: 'A(0,n)=n+1; A(m,0)=A(m-1,1); A(m,n)=A(m-1, A(m,n-1)).',
  codeSolution: 'def ackermann(m, n):\n    if m == 0:\n        return n + 1\n    if n == 0:\n        return ackermann(m-1, 1)\n    return ackermann(m-1, ackermann(m, n-1))',
  hint: 'Follow the recursive definition carefully; base cases as given.'
},
{
  id: 'py_rec_48',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the sum of elements in a nested list (list containing integers or lists).',
  mathSolution: 'For each element, if it is a list, recursively sum it; else add it.',
  codeSolution: 'def nested_sum(nested):\n    total = 0\n    for elem in nested:\n        if isinstance(elem, list):\n            total += nested_sum(elem)\n        else:\n            total += elem\n    return total',
  hint: 'Recursively handle nested lists.'
},
{
  id: 'py_rec_49',
  topicId: 'py_recursion',
  question: 'Write a recursive function to count the occurrences of a target value in a nested list.',
  mathSolution: 'If element is list, recurse; if element equals target, count 1; else 0.',
  codeSolution: 'def count_occurrences(nested, target):\n    count = 0\n    for elem in nested:\n        if isinstance(elem, list):\n            count += count_occurrences(elem, target)\n        elif elem == target:\n            count += 1\n    return count',
  hint: 'Traverse recursively, counting matches.'
},
{
  id: 'py_rec_50',
  topicId: 'py_recursion',
  question: 'Write a recursive function to compute the greatest common divisor (GCD) using subtraction method (Euclid’s original).',
  mathSolution: 'gcd(a,b) = gcd(a-b,b) if a>b; else gcd(a,b-a); base when a==b return a.',
  codeSolution: 'def gcd_subtraction(a, b):\n    if a == b:\n        return a\n    if a > b:\n        return gcd_subtraction(a-b, b)\n    else:\n        return gcd_subtraction(a, b-a)',
  hint: 'Subtract smaller from larger until equal.'
}
);