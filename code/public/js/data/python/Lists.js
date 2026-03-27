QuizData.questions.push(
{
  id: 'py_list_1',
  topicId: 'py_list',
  question: 'Create a list of 5 numbers and print the sum of all elements.',
  mathSolution: 'Initialize a list and use sum() function to add all elements.',
  codeSolution: 'numbers = [10, 20, 30, 40, 50]\ntotal = sum(numbers)\nprint(f"Sum: {total}")  # Output: Sum: 150',
  hint: 'sum() adds all elements in a list.'
},
{
  id: 'py_list_2',
  topicId: 'py_list',
  question: 'Find the largest and smallest element in a list of integers.',
  mathSolution: 'Use max() and min() functions to find extremes.',
  codeSolution: 'numbers = [45, 23, 67, 12, 89, 34]\nlargest = max(numbers)\nsmallest = min(numbers)\nprint(f"Largest: {largest}, Smallest: {smallest}")  # Output: Largest: 89, Smallest: 12',
  hint: 'max() and min() return largest and smallest elements.'
},
{
  id: 'py_list_3',
  topicId: 'py_list',
  question: 'Reverse a list without using reverse() method.',
  mathSolution: 'Use slicing [::-1] to reverse the list.',
  codeSolution: 'original = [1, 2, 3, 4, 5]\nreversed_list = original[::-1]\nprint(f"Original: {original}")\nprint(f"Reversed: {reversed_list}")  # Output: [5,4,3,2,1]',
  hint: 'Slicing with step -1 reverses the list.'
},
{
  id: 'py_list_4',
  topicId: 'py_list',
  question: 'Remove duplicates from a list while preserving order.',
  mathSolution: 'Use a set to track seen elements and build new list.',
  codeSolution: 'items = [1, 2, 2, 3, 4, 4, 5, 1]\nunique = []\nseen = set()\nfor item in items:\n    if item not in seen:\n        seen.add(item)\n        unique.append(item)\nprint(unique)  # Output: [1, 2, 3, 4, 5]',
  hint: 'Set provides O(1) lookup for duplicates.'
},
{
  id: 'py_list_5',
  topicId: 'py_list',
  question: 'Count the frequency of each element in a list.',
  mathSolution: 'Use dictionary to store counts of each element.',
  codeSolution: 'items = ["apple", "banana", "apple", "orange", "banana", "apple"]\nfreq = {}\nfor item in items:\n    freq[item] = freq.get(item, 0) + 1\nprint(freq)  # Output: {"apple": 3, "banana": 2, "orange": 1}',
  hint: 'dict.get(key, default) returns default if key not present.'
},
{
  id: 'py_list_6',
  topicId: 'py_list',
  question: 'Check if a list is empty.',
  mathSolution: 'Empty list evaluates to False in boolean context.',
  codeSolution: 'my_list = []\nif not my_list:\n    print("List is empty")\nelse:\n    print("List has elements")',
  hint: 'An empty list is falsy in Python.'
},
{
  id: 'py_list_7',
  topicId: 'py_list',
  question: 'Add elements of one list to another list.',
  mathSolution: 'Use extend() method or + operator.',
  codeSolution: 'list1 = [1, 2, 3]\nlist2 = [4, 5, 6]\nlist1.extend(list2)\nprint(list1)  # Output: [1, 2, 3, 4, 5, 6]\n\n# Alternative using + operator\nlist3 = list1 + list2',
  hint: 'extend() modifies original list, + creates new list.'
},
{
  id: 'py_list_8',
  topicId: 'py_list',
  question: 'Find the index of a specific element in a list.',
  mathSolution: 'Use index() method to find first occurrence.',
  codeSolution: 'fruits = ["apple", "banana", "cherry", "banana"]\nindex = fruits.index("banana")\nprint(f"Index of banana: {index}")  # Output: 1',
  hint: 'index() raises ValueError if element not found.'
},
{
  id: 'py_list_9',
  topicId: 'py_list',
  question: 'Sort a list in descending order.',
  mathSolution: 'Use sort() with reverse=True parameter.',
  codeSolution: 'numbers = [5, 2, 8, 1, 9]\nnumbers.sort(reverse=True)\nprint(numbers)  # Output: [9, 8, 5, 2, 1]',
  hint: 'sort() modifies the list in-place.'
},
{
  id: 'py_list_10',
  topicId: 'py_list',
  question: 'Get the first and last element of a list.',
  mathSolution: 'Index 0 for first, index -1 for last.',
  codeSolution: 'my_list = [10, 20, 30, 40, 50]\nfirst = my_list[0]\nlast = my_list[-1]\nprint(f"First: {first}, Last: {last}")  # Output: First: 10, Last: 50',
  hint: 'Negative indices count from the end.'
},
{
  id: 'py_list_11',
  topicId: 'py_list',
  question: 'Split a list into two halves.',
  mathSolution: 'Use slicing with middle index.',
  codeSolution: 'my_list = [1, 2, 3, 4, 5, 6]\nmid = len(my_list) // 2\nfirst_half = my_list[:mid]\nsecond_half = my_list[mid:]\nprint(f"First: {first_half}, Second: {second_half}")',
  hint: 'For odd length, second half will have one extra element.'
},
{
  id: 'py_list_12',
  topicId: 'py_list',
  question: 'Check if all elements in a list satisfy a condition.',
  mathSolution: 'Use all() function with generator expression.',
  codeSolution: 'numbers = [2, 4, 6, 8, 10]\nall_even = all(x % 2 == 0 for x in numbers)\nprint(f"All even: {all_even}")  # Output: True',
  hint: 'all() returns True if all elements are truthy.'
},
{
  id: 'py_list_13',
  topicId: 'py_list',
  question: 'Check if any element in a list satisfies a condition.',
  mathSolution: 'Use any() function with generator expression.',
  codeSolution: 'numbers = [1, 3, 5, 7, 8, 9]\nhas_even = any(x % 2 == 0 for x in numbers)\nprint(f"Has even: {has_even}")  # Output: True',
  hint: 'any() returns True if at least one element is truthy.'
},
{
  id: 'py_list_14',
  topicId: 'py_list',
  question: 'Find the second largest element in a list.',
  mathSolution: 'Sort and get second last, or find manually.',
  codeSolution: 'numbers = [10, 5, 8, 12, 3, 7]\nunique_nums = list(set(numbers))\nunique_nums.sort()\nif len(unique_nums) >= 2:\n    second_largest = unique_nums[-2]\n    print(f"Second largest: {second_largest}")',
  hint: 'Use set to remove duplicates first.'
},
{
  id: 'py_list_15',
  topicId: 'py_list',
  question: 'Rotate a list to the left by k positions.',
  mathSolution: 'Use slicing to rearrange elements.',
  codeSolution: 'def rotate_left(lst, k):\n    k = k % len(lst)\n    return lst[k:] + lst[:k]\n\nmy_list = [1, 2, 3, 4, 5]\nrotated = rotate_left(my_list, 2)\nprint(rotated)  # Output: [3, 4, 5, 1, 2]',
  hint: 'Modulo handles k larger than list length.'
},
{
  id: 'py_list_16',
  topicId: 'py_list',
  question: 'Find the common elements between two lists.',
  mathSolution: 'Use set intersection or list comprehension.',
  codeSolution: 'list1 = [1, 2, 3, 4, 5]\nlist2 = [4, 5, 6, 7, 8]\ncommon = [x for x in list1 if x in list2]\nprint(common)  # Output: [4, 5]',
  hint: 'Set intersection is more efficient: set(list1) & set(list2)'
},
{
  id: 'py_list_17',
  topicId: 'py_list',
  question: 'Remove all occurrences of a specific value from a list.',
  mathSolution: 'Use list comprehension to filter out the value.',
  codeSolution: 'my_list = [1, 2, 3, 2, 4, 2, 5]\nvalue_to_remove = 2\nfiltered = [x for x in my_list if x != value_to_remove]\nprint(filtered)  # Output: [1, 3, 4, 5]',
  hint: 'List comprehension creates new list without the value.'
},
{
  id: 'py_list_18',
  topicId: 'py_list',
  question: 'Insert an element at a specific position in a list.',
  mathSolution: 'Use insert() method to add element at index.',
  codeSolution: 'fruits = ["apple", "banana", "cherry"]\nfruits.insert(1, "orange")\nprint(fruits)  # Output: ["apple", "orange", "banana", "cherry"]',
  hint: 'insert(index, element) adds at specified position.'
},
{
  id: 'py_list_19',
  topicId: 'py_list',
  question: 'Remove element at a specific index from a list.',
  mathSolution: 'Use pop() with index or del statement.',
  codeSolution: 'my_list = [10, 20, 30, 40, 50]\nremoved = my_list.pop(2)  # Remove at index 2\nprint(f"Removed: {removed}, List: {my_list}")  # Removed: 30, List: [10,20,40,50]',
  hint: 'pop() returns removed element, del doesn\'t.'
},
{
  id: 'py_list_20',
  topicId: 'py_list',
  question: 'Flatten a list of lists into a single list.',
  mathSolution: 'Use nested loops or list comprehension.',
  codeSolution: 'nested = [[1, 2], [3, 4], [5, 6]]\nflat = [item for sublist in nested for item in sublist]\nprint(flat)  # Output: [1, 2, 3, 4, 5, 6]',
  hint: 'Nested comprehension: outer loop first, inner second.'
},
{
  id: 'py_list_21',
  topicId: 'py_list',
  question: 'Get the last n elements of a list.',
  mathSolution: 'Use negative indexing in slice.',
  codeSolution: 'my_list = [1, 2, 3, 4, 5, 6, 7, 8]\nn = 3\nlast_n = my_list[-n:]\nprint(last_n)  # Output: [6, 7, 8]',
  hint: 'Negative start index counts from end.'
},
{
  id: 'py_list_22',
  topicId: 'py_list',
  question: 'Check if a list is sorted in ascending order.',
  mathSolution: 'Compare each element with next element.',
  codeSolution: 'def is_sorted(lst):\n    return all(lst[i] <= lst[i+1] for i in range(len(lst)-1))\n\nprint(is_sorted([1, 2, 3, 4]))  # True\nprint(is_sorted([1, 3, 2, 4]))  # False',
  hint: 'Use all() with generator comparing consecutive elements.'
},
{
  id: 'py_list_23',
  topicId: 'py_list',
  question: 'Find the average of elements in a list.',
  mathSolution: 'Sum all elements divided by length.',
  codeSolution: 'numbers = [10, 20, 30, 40, 50]\naverage = sum(numbers) / len(numbers)\nprint(f"Average: {average}")  # Output: 30.0',
  hint: 'Handle empty list case to avoid division by zero.'
},
{
  id: 'py_list_24',
  topicId: 'py_list',
  question: 'Merge two sorted lists into a single sorted list.',
  mathSolution: 'Use two-pointer technique for efficient merge.',
  codeSolution: 'def merge_sorted(list1, list2):\n    merged = []\n    i = j = 0\n    while i < len(list1) and j < len(list2):\n        if list1[i] < list2[j]:\n            merged.append(list1[i])\n            i += 1\n        else:\n            merged.append(list2[j])\n            j += 1\n    merged.extend(list1[i:])\n    merged.extend(list2[j:])\n    return merged\n\nprint(merge_sorted([1,3,5], [2,4,6]))  # Output: [1,2,3,4,5,6]',
  hint: 'After one list is exhausted, add remaining from other.'
},
{
  id: 'py_list_25',
  topicId: 'py_list',
  question: 'Find the number of occurrences of each element in a list.',
  mathSolution: 'Use collections.Counter for easy counting.',
  codeSolution: 'from collections import Counter\nitems = ["a", "b", "a", "c", "b", "a"]\ncounts = Counter(items)\nprint(counts)  # Output: Counter({"a": 3, "b": 2, "c": 1})',
  hint: 'Counter is a specialized dictionary for counting.'
},
{
  id: 'py_list_26',
  topicId: 'py_list',
  question: 'Create a list from 1 to 100 using range().',
  mathSolution: 'Convert range object to list.',
  codeSolution: 'numbers = list(range(1, 101))\nprint(numbers[:10])  # First 10: [1,2,3,4,5,6,7,8,9,10]',
  hint: 'range(start, stop) generates numbers up to stop-1.'
},
{
  id: 'py_list_27',
  topicId: 'py_list',
  question: 'Shuffle a list randomly.',
  mathSolution: 'Use random.shuffle() to randomize order.',
  codeSolution: 'import random\ncards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]\nrandom.shuffle(cards)\nprint(cards)  # Random order each time',
  hint: 'shuffle() modifies list in-place.'
},
{
  id: 'py_list_28',
  topicId: 'py_list',
  question: 'Get all possible pairs from a list.',
  mathSolution: 'Use nested loops to generate pairs.',
  codeSolution: 'items = [1, 2, 3]\npairs = [(items[i], items[j]) for i in range(len(items)) for j in range(i+1, len(items))]\nprint(pairs)  # Output: [(1,2), (1,3), (2,3)]',
  hint: 'j starts from i+1 to avoid duplicates and same element.'
},
{
  id: 'py_list_29',
  topicId: 'py_list',
  question: 'Find the difference between two lists (elements in first but not second).',
  mathSolution: 'Use list comprehension with membership check.',
  codeSolution: 'list1 = [1, 2, 3, 4, 5]\nlist2 = [4, 5, 6, 7, 8]\ndifference = [x for x in list1 if x not in list2]\nprint(difference)  # Output: [1, 2, 3]',
  hint: 'Set difference is more efficient: set(list1) - set(list2)'
},
{
  id: 'py_list_30',
  topicId: 'py_list',
  question: 'Replace all occurrences of a value in a list.',
  mathSolution: 'Use list comprehension with conditional.',
  codeSolution: 'my_list = [1, 2, 3, 2, 4, 2, 5]\nold = 2\nnew = 99\nreplaced = [new if x == old else x for x in my_list]\nprint(replaced)  # Output: [1, 99, 3, 99, 4, 99, 5]',
  hint: 'Ternary expression in list comprehension.'
},
{
  id: 'py_list_31',
  topicId: 'py_list',
  question: 'Create a 2D list (matrix) with given dimensions.',
  mathSolution: 'Use nested list comprehension.',
  codeSolution: 'rows, cols = 3, 4\nmatrix = [[0 for _ in range(cols)] for _ in range(rows)]\nprint(matrix)  # Output: [[0,0,0,0], [0,0,0,0], [0,0,0,0]]',
  hint: 'Each inner list is a row.'
},
{
  id: 'py_list_32',
  topicId: 'py_list',
  question: 'Get the diagonal elements of a square matrix.',
  mathSolution: 'Elements where row index equals column index.',
  codeSolution: 'matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\ndiagonal = [matrix[i][i] for i in range(len(matrix))]\nprint(diagonal)  # Output: [1, 5, 9]',
  hint: 'For anti-diagonal, use matrix[i][n-1-i].'
},
{
  id: 'py_list_33',
  topicId: 'py_list',
  question: 'Find the most frequent element in a list.',
  mathSolution: 'Use Counter and most_common() method.',
  codeSolution: 'from collections import Counter\nnumbers = [1, 3, 2, 3, 4, 3, 5, 3]\ncounter = Counter(numbers)\nmost_common = counter.most_common(1)[0]\nprint(f"Most frequent: {most_common[0]} appears {most_common[1]} times")',
  hint: 'most_common(1) returns list of (element, count) tuples.'
},
{
  id: 'py_list_34',
  topicId: 'py_list',
  question: 'Move all zeros to the end of a list while preserving order.',
  mathSolution: 'Count zeros and filter them out.',
  codeSolution: 'def move_zeros(nums):\n    result = [x for x in nums if x != 0]\n    result.extend([0] * (len(nums) - len(result)))\n    return result\n\nprint(move_zeros([0, 1, 0, 3, 12]))  # Output: [1, 3, 12, 0, 0]',
  hint: 'Collect non-zeros first, then append zeros.'
},
{
  id: 'py_list_35',
  topicId: 'py_list',
  question: 'Find the length of the longest increasing subsequence (not necessarily contiguous).',
  mathSolution: 'This is a classic DP problem.',
  codeSolution: 'def longest_increasing_subsequence(nums):\n    if not nums:\n        return 0\n    dp = [1] * len(nums)\n    for i in range(len(nums)):\n        for j in range(i):\n            if nums[j] < nums[i]:\n                dp[i] = max(dp[i], dp[j] + 1)\n    return max(dp)\n\nprint(longest_increasing_subsequence([10, 9, 2, 5, 3, 7, 101, 18]))  # Output: 4',
  hint: 'dp[i] stores length of LIS ending at i.'
},
{
  id: 'py_list_36',
  topicId: 'py_list',
  question: 'Create a list of cumulative products (running product).',
  mathSolution: 'Multiply each element with previous product.',
  codeSolution: 'numbers = [1, 2, 3, 4, 5]\ncumulative = []\nproduct = 1\nfor num in numbers:\n    product *= num\n    cumulative.append(product)\nprint(cumulative)  # Output: [1, 2, 6, 24, 120]',
  hint: 'Similar to cumulative sum but with multiplication.'
},
{
  id: 'py_list_37',
  topicId: 'py_list',
  question: 'Find the longest consecutive sequence in a list of numbers.',
  mathSolution: 'Use set for O(1) lookup and check consecutive streaks.',
  codeSolution: 'def longest_consecutive(nums):\n    num_set = set(nums)\n    longest = 0\n    for num in num_set:\n        if num - 1 not in num_set:  # Start of sequence\n            length = 1\n            while num + length in num_set:\n                length += 1\n            longest = max(longest, length)\n    return longest\n\nprint(longest_consecutive([100, 4, 200, 1, 3, 2]))  # Output: 4 (1,2,3,4)',
  hint: 'Only check numbers that are start of a sequence.'
},
{
  id: 'py_list_38',
  topicId: 'py_list',
  question: 'Interleave two lists (take elements alternately).',
  mathSolution: 'Use zip to pair elements, then flatten.',
  codeSolution: 'list1 = [1, 3, 5]\nlist2 = [2, 4, 6]\ninterleaved = [item for pair in zip(list1, list2) for item in pair]\nprint(interleaved)  # Output: [1, 2, 3, 4, 5, 6]',
  hint: 'zip pairs elements, flatten with comprehension.'
},
{
  id: 'py_list_39',
  topicId: 'py_list',
  question: 'Split a list into chunks of specified size.',
  mathSolution: 'Use list comprehension with step indexing.',
  codeSolution: 'def chunk_list(lst, chunk_size):\n    return [lst[i:i+chunk_size] for i in range(0, len(lst), chunk_size)]\n\nmy_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]\nchunks = chunk_list(my_list, 3)\nprint(chunks)  # Output: [[1,2,3], [4,5,6], [7,8,9]]',
  hint: 'range(start, stop, step) jumps by chunk size.'
},
{
  id: 'py_list_40',
  topicId: 'py_list',
  question: 'Find the index of the maximum element in a list.',
  mathSolution: 'Use enumerate to track index and value.',
  codeSolution: 'numbers = [45, 23, 67, 12, 89, 34]\nmax_index = max(range(len(numbers)), key=lambda i: numbers[i])\nprint(f"Max value {numbers[max_index]} at index {max_index}")',
  hint: 'max() with key finds index with maximum value.'
},
{
  id: 'py_list_41',
  topicId: 'py_list',
  question: 'Create a list of prime numbers up to n using Sieve of Eratosthenes.',
  mathSolution: 'Implement sieve algorithm to find primes.',
  codeSolution: 'def sieve_of_eratosthenes(n):\n    if n < 2:\n        return []\n    is_prime = [True] * (n + 1)\n    is_prime[0] = is_prime[1] = False\n    for i in range(2, int(n**0.5) + 1):\n        if is_prime[i]:\n            for j in range(i*i, n+1, i):\n                is_prime[j] = False\n    return [i for i in range(2, n+1) if is_prime[i]]\n\nprint(sieve_of_eratosthenes(30))',
  hint: 'Mark multiples of each prime starting from p².'
},
{
  id: 'py_list_42',
  topicId: 'py_list',
  question: 'Find all pairs in a list that sum to a target value.',
  mathSolution: 'Use set for O(n) solution.',
  codeSolution: 'def find_pairs(nums, target):\n    seen = set()\n    pairs = []\n    for num in nums:\n        complement = target - num\n        if complement in seen:\n            pairs.append((complement, num))\n        seen.add(num)\n    return pairs\n\nprint(find_pairs([2, 4, 3, 5, 7, 8, 1], 9))  # Output: [(2,7), (4,5), (1,8)]',
  hint: 'Store seen numbers and check for complement.'
},
{
  id: 'py_list_43',
  topicId: 'py_list',
  question: 'Create a list of all permutations of a list (recursive).',
  mathSolution: 'Use backtracking to generate permutations.',
  codeSolution: 'def permutations(lst):\n    if len(lst) <= 1:\n        return [lst]\n    result = []\n    for i in range(len(lst)):\n        rest = lst[:i] + lst[i+1:]\n        for perm in permutations(rest):\n            result.append([lst[i]] + perm)\n    return result\n\nprint(permutations([1, 2, 3]))',
  hint: 'Fix each element and permute the rest.'
},
{
  id: 'py_list_44',
  topicId: 'py_list',
  question: 'Implement binary search on a sorted list.',
  mathSolution: 'Repeatedly divide search interval in half.',
  codeSolution: 'def binary_search(sorted_list, target):\n    left, right = 0, len(sorted_list) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if sorted_list[mid] == target:\n            return mid\n        elif sorted_list[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1\n\nprint(binary_search([1, 3, 5, 7, 9, 11], 7))  # Output: 3',
  hint: 'List must be sorted for binary search to work.'
},
{
  id: 'py_list_45',
  topicId: 'py_list',
  question: 'Find the majority element (element appearing more than n/2 times).',
  mathSolution: 'Use Boyer-Moore voting algorithm.',
  codeSolution: 'def majority_element(nums):\n    candidate = None\n    count = 0\n    for num in nums:\n        if count == 0:\n            candidate = num\n            count = 1\n        elif num == candidate:\n            count += 1\n        else:\n            count -= 1\n    # Verify candidate appears more than n/2 times\n    if nums.count(candidate) > len(nums) // 2:\n        return candidate\n    return None\n\nprint(majority_element([2,2,1,1,1,2,2]))  # Output: 2',
  hint: 'Candidate will be majority element if it exists.'
},
{
  id: 'py_list_46',
  topicId: 'py_list',
  question: 'Create a list of all possible subsets (power set) of a list.',
  mathSolution: 'Use bit manipulation or recursion.',
  codeSolution: 'def power_set(lst):\n    result = []\n    n = len(lst)\n    for i in range(1 << n):  # 2^n subsets\n        subset = []\n        for j in range(n):\n            if i & (1 << j):\n                subset.append(lst[j])\n        result.append(subset)\n    return result\n\nprint(power_set([1, 2, 3]))',
  hint: 'Each bit in i represents whether to include element j.'
},
{
  id: 'py_list_47',
  topicId: 'py_list',
  question: 'Find the kth smallest element in a list.',
  mathSolution: 'Use sorting or quickselect algorithm.',
  codeSolution: 'def kth_smallest(nums, k):\n    return sorted(nums)[k-1]\n\nprint(kth_smallest([7, 10, 4, 3, 20, 15], 3))  # Output: 7',
  hint: 'Sorting is O(n log n), quickselect is O(n) average.'
},
{
  id: 'py_list_48',
  topicId: 'py_list',
  question: 'Implement a stack using list with push, pop, peek operations.',
  mathSolution: 'Use append() for push, pop() for pop, [-1] for peek.',
  codeSolution: 'class Stack:\n    def __init__(self):\n        self.items = []\n    \n    def push(self, item):\n        self.items.append(item)\n    \n    def pop(self):\n        if not self.is_empty():\n            return self.items.pop()\n        return None\n    \n    def peek(self):\n        if not self.is_empty():\n            return self.items[-1]\n        return None\n    \n    def is_empty(self):\n        return len(self.items) == 0\n    \n    def size(self):\n        return len(self.items)',
  hint: 'List provides O(1) append and pop from end.'
},
{
  id: 'py_list_49',
  topicId: 'py_list',
  question: 'Implement a queue using list with enqueue and dequeue operations.',
  mathSolution: 'Use append() for enqueue, pop(0) for dequeue (inefficient).',
  codeSolution: 'class Queue:\n    def __init__(self):\n        self.items = []\n    \n    def enqueue(self, item):\n        self.items.append(item)\n    \n    def dequeue(self):\n        if not self.is_empty():\n            return self.items.pop(0)\n        return None\n    \n    def front(self):\n        if not self.is_empty():\n            return self.items[0]\n        return None\n    \n    def is_empty(self):\n        return len(self.items) == 0\n    \n    def size(self):\n        return len(self.items)\n\n# Note: pop(0) is O(n). For efficient queue, use collections.deque',
  hint: 'deque from collections module provides O(1) operations at both ends.'
},
{
  id: 'py_list_50',
  topicId: 'py_list',
  question: 'Find the maximum product subarray (contiguous).',
  mathSolution: 'Track max and min products (due to negative numbers).',
  codeSolution: 'def max_product_subarray(nums):\n    if not nums:\n        return 0\n    max_prod = min_prod = result = nums[0]\n    for i in range(1, len(nums)):\n        if nums[i] < 0:\n            max_prod, min_prod = min_prod, max_prod  # Swap when negative\n        max_prod = max(nums[i], max_prod * nums[i])\n        min_prod = min(nums[i], min_prod * nums[i])\n        result = max(result, max_prod)\n    return result\n\nprint(max_product_subarray([2, 3, -2, 4]))  # Output: 6 (2*3)\nprint(max_product_subarray([-2, 0, -1]))    # Output: 0',
  hint: 'Negative numbers can flip max and min.'
}
);