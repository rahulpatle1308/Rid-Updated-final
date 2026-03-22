QuizData.questions.push(
  {
    id: 'py_loop_1',
    topicId: 'py_loop',
    question: 'Write a for loop that prints numbers 0 to 4.',
    mathSolution: 'Loop runs 5 times with range(5)',
    codeSolution: 'for i in range(5):\n    print(i)',
    hint: 'Use `range(5)` to generate numbers 0 through 4.'
  },
  {
    id: 'py_loop_2',
    topicId: 'py_loop',
    question: 'Write a for loop to print each character of the string "Python".',
    mathSolution: 'Prints each character on a new line: P, y, t, h, o, n',
    codeSolution: 'for ch in "Python":\n    print(ch)',
    hint: 'Strings are iterable; you can loop directly over them.'
  },
  {
    id: 'py_loop_3',
    topicId: 'py_loop',
    question: 'Write a while loop that prints numbers 1 to 5.',
    mathSolution: 'Starts at 1, increments until 5',
    codeSolution: 'i = 1\nwhile i <= 5:\n    print(i)\n    i += 1',
    hint: 'Initialize a counter before the loop and increment it inside.'
  },
  {
    id: 'py_loop_4',
    topicId: 'py_loop',
    question: 'Write a for loop to compute the sum of all elements in the list [2, 4, 6, 8, 10].',
    mathSolution: 'Sum = 30',
    codeSolution: 'numbers = [2, 4, 6, 8, 10]\ntotal = 0\nfor num in numbers:\n    total += num\nprint(total)',
    hint: 'Use an accumulator variable to keep a running total.'
  },
  {
    id: 'py_loop_5',
    topicId: 'py_loop',
    question: 'Write a while loop to calculate the factorial of a number n (assume n = 5).',
    mathSolution: 'Factorial of 5 = 120',
    codeSolution: 'n = 5\nfactorial = 1\ni = 1\nwhile i <= n:\n    factorial *= i\n    i += 1\nprint(factorial)',
    hint: 'Multiply the accumulator by the counter each iteration.'
  },
  {
    id: 'py_loop_6',
    topicId: 'py_loop',
    question: 'Write nested for loops to print a multiplication table for numbers 1 to 3.',
    mathSolution: 'Prints: 1x1=1, 1x2=2, ..., 3x3=9',
    codeSolution: 'for i in range(1, 4):\n    for j in range(1, 4):\n        print(f"{i} x {j} = {i*j}")',
    hint: 'The outer loop chooses the first factor, the inner loop the second.'
  },
  {
    id: 'py_loop_7',
    topicId: 'py_loop',
    question: 'Use a for loop with enumerate to print the index and value of each item in the list ["a", "b", "c"].',
    mathSolution: 'Prints: 0 a, 1 b, 2 c',
    codeSolution: 'items = ["a", "b", "c"]\nfor idx, val in enumerate(items):\n    print(idx, val)',
    hint: '`enumerate()` gives you both the index and the element.'
  },
  {
    id: 'py_loop_8',
    topicId: 'py_loop',
    question: 'Write a for loop that iterates over numbers 0 to 9 and breaks when it reaches 5.',
    mathSolution: 'Prints 0,1,2,3,4 then stops',
    codeSolution: 'for i in range(10):\n    if i == 5:\n        break\n    print(i)',
    hint: 'Use `break` to exit the loop prematurely.'
  },
  {
    id: 'py_loop_9',
    topicId: 'py_loop',
    question: 'Write a for loop that prints only the odd numbers from 1 to 10 using continue.',
    mathSolution: 'Prints 1,3,5,7,9',
    codeSolution: 'for i in range(1, 11):\n    if i % 2 == 0:\n        continue\n    print(i)',
    hint: '`continue` skips the rest of the current iteration and moves to the next.'
  },
  {
    id: 'py_loop_10',
    topicId: 'py_loop',
    question: 'Write a for loop with an else clause that executes after normal completion. Loop over 1..3 and print "Done" after.',
    mathSolution: 'Prints 1,2,3 then "Done"',
    codeSolution: 'for i in range(1, 4):\n    print(i)\nelse:\n    print("Done")',
    hint: 'The `else` after a loop runs only if the loop wasn\'t stopped by `break`.'
  },
  {
    id: 'py_loop_11',
    topicId: 'py_loop',
    question: 'Write an infinite while loop that breaks when the user types "quit". Assume input() is used.',
    mathSolution: 'Continues asking until user enters "quit"',
    codeSolution: 'while True:\n    user_input = input("Enter something: ")\n    if user_input == "quit":\n        break',
    hint: 'Use `while True` and check a condition to `break`.'
  },
  {
    id: 'py_loop_12',
    topicId: 'py_loop',
    question: 'Write a for loop to print all keys of the dictionary {"name": "Alice", "age": 25}.',
    mathSolution: 'Prints name, age',
    codeSolution: 'person = {"name": "Alice", "age": 25}\nfor key in person:\n    print(key)',
    hint: 'Iterating over a dictionary gives its keys by default.'
  },
  {
    id: 'py_loop_13',
    topicId: 'py_loop',
    question: 'Write a for loop to print all values of the dictionary {"x": 10, "y": 20}.',
    mathSolution: 'Prints 10, 20',
    codeSolution: 'd = {"x": 10, "y": 20}\nfor val in d.values():\n    print(val)',
    hint: 'Use the `.values()` method to iterate over dictionary values.'
  },
  {
    id: 'py_loop_14',
    topicId: 'py_loop',
    question: 'Write a for loop to print key-value pairs of the dictionary {"a": 1, "b": 2} as "key: value".',
    mathSolution: 'Prints a: 1, b: 2',
    codeSolution: 'd = {"a": 1, "b": 2}\nfor key, val in d.items():\n    print(f"{key}: {val}")',
    hint: 'The `.items()` method yields (key, value) tuples.'
  },
  {
    id: 'py_loop_15',
    topicId: 'py_loop',
    question: 'Write a for loop using range(2, 10, 2) to print even numbers from 2 to 8.',
    mathSolution: 'Prints 2,4,6,8',
    codeSolution: 'for i in range(2, 10, 2):\n    print(i)',
    hint: '`range(start, stop, step)` allows you to skip numbers.'
  },
  {
    id: 'py_loop_16',
    topicId: 'py_loop',
    question: 'Write a for loop that prints numbers from 5 down to 1 using range with a negative step.',
    mathSolution: 'Prints 5,4,3,2,1',
    codeSolution: 'for i in range(5, 0, -1):\n    print(i)',
    hint: 'Use a negative step to count downwards.'
  },
  {
    id: 'py_loop_17',
    topicId: 'py_loop',
    question: 'Write a for loop that doubles each element in the list [1, 2, 3] by modifying it via index.',
    mathSolution: 'Resulting list: [2, 4, 6]',
    codeSolution: 'nums = [1, 2, 3]\nfor i in range(len(nums)):\n    nums[i] *= 2\nprint(nums)',
    hint: 'Loop over indices with `range(len(list))` to modify elements in place.'
  },
  {
    id: 'py_loop_18',
    topicId: 'py_loop',
    question: 'Rewrite the following for loop as a list comprehension: result = [] for i in range(5): result.append(i**2).',
    mathSolution: 'List comprehension: [i**2 for i in range(5)] produces [0,1,4,9,16]',
    codeSolution: 'result = [i**2 for i in range(5)]',
    hint: 'List comprehension syntax: `[expression for variable in iterable]`.'
  },
  {
    id: 'py_loop_19',
    topicId: 'py_loop',
    question: 'Write a loop that does nothing for 3 iterations using the pass statement.',
    mathSolution: 'Loop runs 3 times, no output',
    codeSolution: 'for i in range(3):\n    pass',
    hint: '`pass` is a placeholder that does nothing.'
  },
  {
    id: 'py_loop_20',
    topicId: 'py_loop',
    question: 'Use zip in a for loop to iterate over two lists [1,2] and ["a","b"] simultaneously.',
    mathSolution: 'Prints (1,"a") then (2,"b")',
    codeSolution: 'nums = [1, 2]\nletters = ["a", "b"]\nfor n, l in zip(nums, letters):\n    print(n, l)',
    hint: '`zip()` pairs elements from multiple iterables.'
  },
  {
    id: 'py_loop_21',
    topicId: 'py_loop',
    question: 'Write a while loop that repeatedly asks the user for a number and stops when they enter 0.',
    mathSolution: 'Keeps asking until 0 is entered',
    codeSolution: 'num = int(input("Enter a number (0 to stop): "))\nwhile num != 0:\n    num = int(input("Enter another: "))',
    hint: 'Get input first, then loop while the condition holds.'
  },
  {
    id: 'py_loop_22',
    topicId: 'py_loop',
    question: 'Write a for loop to find the maximum value in the list [4, 7, 1, 9, 3] without using max().',
    mathSolution: 'Maximum is 9',
    codeSolution: 'numbers = [4, 7, 1, 9, 3]\nmax_val = numbers[0]\nfor num in numbers:\n    if num > max_val:\n        max_val = num\nprint(max_val)',
    hint: 'Initialize a variable with the first element, then update if a larger one is found.'
  },
  {
    id: 'py_loop_23',
    topicId: 'py_loop',
    question: 'Write a for loop to check if all numbers in [2, 4, 6, 8] are even.',
    mathSolution: 'Returns True (all even)',
    codeSolution: 'nums = [2, 4, 6, 8]\nall_even = True\nfor n in nums:\n    if n % 2 != 0:\n        all_even = False\n        break\nprint(all_even)',
    hint: 'Assume true until you find a counterexample.'
  },
  {
    id: 'py_loop_24',
    topicId: 'py_loop',
    question: 'Use nested loops to print a right-angled triangle of stars with 4 rows.',
    mathSolution: 'Row1: *, Row2: **, Row3: ***, Row4: ****',
    codeSolution: 'for i in range(1, 5):\n    print("*" * i)',
    hint: 'You can use string multiplication instead of an inner loop.'
  },
  {
    id: 'py_loop_25',
    topicId: 'py_loop',
    question: 'Write a loop that removes all even numbers from the list [1,2,3,4,5] while iterating (be careful).',
    mathSolution: 'Result: [1,3,5] (iterate over a copy)',
    codeSolution: 'nums = [1,2,3,4,5]\nfor n in nums[:]:\n    if n % 2 == 0:\n        nums.remove(n)\nprint(nums)',
    hint: 'Iterate over a copy of the list to avoid skipping items when removing.'
  },
  {
    id: 'py_loop_26',
    topicId: 'py_loop',
    question: 'Write a while loop with an else clause that executes when the condition becomes false. Loop from i=3 down to 1 and print "Blast off!" after.',
    mathSolution: 'Prints 3,2,1 then "Blast off!"',
    codeSolution: 'i = 3\nwhile i > 0:\n    print(i)\n    i -= 1\nelse:\n    print("Blast off!")',
    hint: 'The `else` runs after the condition becomes false (unless broken).'
  },
  {
    id: 'py_loop_27',
    topicId: 'py_loop',
    question: 'Write nested loops where the inner loop breaks when i == j, for i in 1..3, j in 1..3.',
    mathSolution: 'Prints pairs where i <= j? Actually breaks inner when i==j, so for i=1 prints (1,1) stops; i=2 prints (2,1),(2,2) stops; i=3 prints (3,1),(3,2),(3,3) stops.',
    codeSolution: 'for i in range(1,4):\n    for j in range(1,4):\n        print(i,j)\n        if i == j:\n            break',
    hint: '`break` only exits the innermost loop it is in.'
  },
  {
    id: 'py_loop_28',
    topicId: 'py_loop',
    question: 'Write a for loop to print each character of the string "Hello" in reverse order using slicing.',
    mathSolution: 'Prints o,l,l,e,H',
    codeSolution: 's = "Hello"\nfor ch in s[::-1]:\n    print(ch)',
    hint: 'Use slicing `[::-1]` to reverse the string before looping.'
  },
  {
    id: 'py_loop_29',
    topicId: 'py_loop',
    question: 'Write a for loop to count the number of vowels in the string "Beautiful".',
    mathSolution: 'Vowels: B e a u i f u l -> e,a,u,i,u = 5',
    codeSolution: 's = "Beautiful"\nvowels = "aeiouAEIOU"\ncount = 0\nfor ch in s:\n    if ch in vowels:\n        count += 1\nprint(count)',
    hint: 'Define a string of vowels and check membership.'
  },
  {
    id: 'py_loop_30',
    topicId: 'py_loop',
    question: 'Write a while loop to reverse the digits of a number n = 12345.',
    mathSolution: 'Reversed number = 54321',
    codeSolution: 'n = 12345\nrev = 0\nwhile n > 0:\n    rev = rev * 10 + n % 10\n    n //= 10\nprint(rev)',
    hint: 'Repeatedly take the last digit and build the reversed number.'
  },
  {
    id: 'py_loop_31',
    topicId: 'py_loop',
    question: 'Write a for loop to generate the first 5 Fibonacci numbers (starting 0,1).',
    mathSolution: 'Sequence: 0,1,1,2,3',
    codeSolution: 'a, b = 0, 1\nfor _ in range(5):\n    print(a)\n    a, b = b, a + b',
    hint: 'Use simultaneous assignment to update two variables.'
  },
  {
    id: 'py_loop_32',
    topicId: 'py_loop',
    question: 'Use range to generate even numbers from 10 down to 2 (inclusive) and print them.',
    mathSolution: '10,8,6,4,2',
    codeSolution: 'for i in range(10, 1, -2):\n    print(i)',
    hint: 'Start at 10, stop before 1, step -2.'
  },
  {
    id: 'py_loop_33',
    topicId: 'py_loop',
    question: 'Write a for loop that unpacks tuples from a list of pairs: [(1,"one"), (2,"two")].',
    mathSolution: 'Prints 1 one, 2 two',
    codeSolution: 'pairs = [(1, "one"), (2, "two")]\nfor num, word in pairs:\n    print(num, word)',
    hint: 'You can directly unpack the tuple in the loop variable.'
  },
  {
    id: 'py_loop_34',
    topicId: 'py_loop',
    question: 'Write a for loop to iterate over a set {3, 1, 4, 2} and print each element.',
    mathSolution: 'Order not guaranteed, but prints each value once',
    codeSolution: 's = {3, 1, 4, 2}\nfor val in s:\n    print(val)',
    hint: 'Sets are iterable, but order is arbitrary.'
  },
  {
    id: 'py_loop_35',
    topicId: 'py_loop',
    question: 'Write a for loop to create a new string containing only the uppercase letters from "Hello World!".',
    mathSolution: 'Result: "HW"',
    codeSolution: 's = "Hello World!"\nresult = ""\nfor ch in s:\n    if ch.isupper():\n        result += ch\nprint(result)',
    hint: 'Use the string method `.isupper()` to check uppercase letters.'
  },
  {
    id: 'py_loop_36',
    topicId: 'py_loop',
    question: 'Use nested loops to compute the sum of all elements in a 2x3 matrix [[1,2,3],[4,5,6]].',
    mathSolution: 'Sum = 21',
    codeSolution: 'matrix = [[1,2,3],[4,5,6]]\ntotal = 0\nfor row in matrix:\n    for val in row:\n        total += val\nprint(total)',
    hint: 'The outer loop iterates over rows, the inner over each element.'
  },
  {
    id: 'py_loop_37',
    topicId: 'py_loop',
    question: 'Write a for loop to flatten a list of lists: [[1,2],[3,4,5],[6]] into a single list.',
    mathSolution: 'Result: [1,2,3,4,5,6]',
    codeSolution: 'nested = [[1,2],[3,4,5],[6]]\nflat = []\nfor sublist in nested:\n    for item in sublist:\n        flat.append(item)\nprint(flat)',
    hint: 'Use nested loops to append each inner element to a new list.'
  },
  {
    id: 'py_loop_38',
    topicId: 'py_loop',
    question: 'Write a while loop that simulates a countdown from 5 to 1 and then prints "Go!".',
    mathSolution: 'Prints 5,4,3,2,1,Go!',
    codeSolution: 'count = 5\nwhile count > 0:\n    print(count)\n    count -= 1\nprint("Go!")',
    hint: 'Decrement the counter inside the loop.'
  },
  {
    id: 'py_loop_39',
    topicId: 'py_loop',
    question: 'Write a for loop with else that prints "Prime" if a number is prime, else "Not prime". Use number = 7.',
    mathSolution: '7 is prime, so prints "Prime" after loop',
    codeSolution: 'num = 7\nfor i in range(2, num):\n    if num % i == 0:\n        print("Not prime")\n        break\nelse:\n    print("Prime")',
    hint: 'The else runs only if no divisor was found (no break).'
  },
  {
    id: 'py_loop_40',
    topicId: 'py_loop',
    question: 'Write a loop to find common elements between two lists [1,2,3,4] and [3,4,5,6].',
    mathSolution: 'Common: [3,4]',
    codeSolution: 'list1 = [1,2,3,4]\nlist2 = [3,4,5,6]\ncommon = []\nfor x in list1:\n    if x in list2:\n        common.append(x)\nprint(common)',
    hint: 'Check membership of each element of the first list in the second.'
  },
  {
    id: 'py_loop_41',
    topicId: 'py_loop',
    question: 'Write a for loop to check if the string "radar" is a palindrome.',
    mathSolution: 'It is a palindrome (reads same forwards and backwards)',
    codeSolution: 's = "radar"\nis_pal = True\nfor i in range(len(s)//2):\n    if s[i] != s[-(i+1)]:\n        is_pal = False\n        break\nprint(is_pal)',
    hint: 'Compare characters from the start and end moving inward.'
  },
  {
    id: 'py_loop_42',
    topicId: 'py_loop',
    question: 'Write a for loop to implement linear search for value 5 in list [2,4,5,8] and print its index.',
    mathSolution: 'Found at index 2',
    codeSolution: 'nums = [2,4,5,8]\ntarget = 5\nindex = -1\nfor i in range(len(nums)):\n    if nums[i] == target:\n        index = i\n        break\nprint(index)',
    hint: 'Loop over indices and break when found.'
  },
  {
    id: 'py_loop_43',
    topicId: 'py_loop',
    question: 'Write a loop to calculate the average of numbers in a list [10,20,30,40].',
    mathSolution: 'Average = 25.0',
    codeSolution: 'nums = [10,20,30,40]\ntotal = 0\nfor n in nums:\n    total += n\naverage = total / len(nums)\nprint(average)',
    hint: 'Sum first, then divide by the number of elements.'
  },
  {
    id: 'py_loop_44',
    topicId: 'py_loop',
    question: 'Write a for loop to print the ASCII value (ord) of each character in "ABC".',
    mathSolution: '65,66,67',
    codeSolution: 's = "ABC"\nfor ch in s:\n    print(ord(ch))',
    hint: 'Use the built-in `ord()` function.'
  },
  {
    id: 'py_loop_45',
    topicId: 'py_loop',
    question: 'Write a while loop that keeps asking for a positive number until one is given.',
    mathSolution: 'Repeats until input > 0',
    codeSolution: 'num = int(input("Enter a positive number: "))\nwhile num <= 0:\n    num = int(input("Must be positive. Try again: "))',
    hint: 'Get input, then loop until the condition is satisfied.'
  },
  {
    id: 'py_loop_46',
    topicId: 'py_loop',
    question: 'Write a for loop using reversed() to print items of list [1,2,3] in reverse order.',
    mathSolution: '3,2,1',
    codeSolution: 'items = [1,2,3]\nfor x in reversed(items):\n    print(x)',
    hint: '`reversed(seq)` returns an iterator that goes backwards.'
  },
  {
    id: 'py_loop_47',
    topicId: 'py_loop',
    question: 'Write a for loop using sorted() to print the keys of dictionary {"b":2, "a":1, "c":3} in alphabetical order.',
    mathSolution: 'a,b,c',
    codeSolution: 'd = {"b":2, "a":1, "c":3}\nfor k in sorted(d):\n    print(k)',
    hint: '`sorted()` returns a sorted list of the dictionary\'s keys.'
  },
  {
    id: 'py_loop_48',
    topicId: 'py_loop',
    question: 'Write a loop to find the second largest number in [5, 1, 9, 3, 7] without using sort.',
    mathSolution: 'Second largest = 7',
    codeSolution: 'nums = [5, 1, 9, 3, 7]\nlargest = second = float("-inf")\nfor n in nums:\n    if n > largest:\n        second = largest\n        largest = n\n    elif n > second and n != largest:\n        second = n\nprint(second)',
    hint: 'Keep track of the largest and second largest as you iterate.'
  },
  {
    id: 'py_loop_49',
    topicId: 'py_loop',
    question: 'Write a for loop to create a dictionary from two lists: keys = ["name","age"], values = ["Bob",30].',
    mathSolution: 'Result: {"name":"Bob", "age":30}',
    codeSolution: 'keys = ["name","age"]\nvalues = ["Bob",30]\nd = {}\nfor i in range(len(keys)):\n    d[keys[i]] = values[i]\nprint(d)',
    hint: 'Loop over indices and assign key-value pairs.'
  },
  {
    id: 'py_loop_50',
    topicId: 'py_loop',
    question: 'Write nested loops to implement a simple bubble sort on the list [4,2,1,3] and print sorted result.',
    mathSolution: 'Sorted: [1,2,3,4]',
    codeSolution: 'arr = [4,2,1,3]\nn = len(arr)\nfor i in range(n-1):\n    for j in range(n-i-1):\n        if arr[j] > arr[j+1]:\n            arr[j], arr[j+1] = arr[j+1], arr[j]\nprint(arr)',
    hint: 'The outer loop controls passes, the inner loop does adjacent comparisons.'
  }
);