QuizData.questions.push(
{
  id: 'py_listcomp_1',
  topicId: 'py_list_comprehension',
  question: 'Create a list of squares of numbers from 1 to 10 using list comprehension.',
  mathSolution: 'Use [x**2 for x in range(1, 11)] to generate squares.',
  codeSolution: 'squares = [x**2 for x in range(1, 11)]\nprint(squares)  # Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]',
  hint: 'List comprehension syntax: [expression for item in iterable]'
},
{
  id: 'py_listcomp_2',
  topicId: 'py_list_comprehension',
  question: 'Create a list of even numbers from 1 to 20 using list comprehension.',
  mathSolution: 'Add if condition to filter numbers divisible by 2.',
  codeSolution: 'evens = [x for x in range(1, 21) if x % 2 == 0]\nprint(evens)  # Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]',
  hint: 'Use if clause for filtering: [x for x in range if condition]'
},
{
  id: 'py_listcomp_3',
  topicId: 'py_list_comprehension',
  question: 'Convert all strings in a list to uppercase using list comprehension.',
  mathSolution: 'Apply upper() method to each string in the list.',
  codeSolution: 'fruits = ["apple", "banana", "cherry"]\nupper_fruits = [fruit.upper() for fruit in fruits]\nprint(upper_fruits)  # Output: ["APPLE", "BANANA", "CHERRY"]',
  hint: 'Expression can be any valid Python expression.'
},
{
  id: 'py_listcomp_4',
  topicId: 'py_list_comprehension',
  question: 'Create a list of lengths of each word in a sentence.',
  mathSolution: 'Split sentence and use len() function.',
  codeSolution: 'sentence = "The quick brown fox jumps"\nword_lengths = [len(word) for word in sentence.split()]\nprint(word_lengths)  # Output: [3, 5, 5, 3, 5]',
  hint: 'split() divides sentence into words.'
},
{
  id: 'py_listcomp_5',
  topicId: 'py_list_comprehension',
  question: 'Generate a list of tuples (number, square) for numbers 1-5.',
  mathSolution: 'Create tuple (x, x**2) for each x.',
  codeSolution: 'pairs = [(x, x**2) for x in range(1, 6)]\nprint(pairs)  # Output: [(1,1), (2,4), (3,9), (4,16), (5,25)]',
  hint: 'Expression can be a tuple literal.'
},
{
  id: 'py_listcomp_6',
  topicId: 'py_list_comprehension',
  question: 'Flatten a 2D list (matrix) into a 1D list.',
  mathSolution: 'Use nested loops in list comprehension.',
  codeSolution: 'matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nflattened = [num for row in matrix for num in row]\nprint(flattened)  # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]',
  hint: 'Order: outer loop first, then inner loop.'
},
{
  id: 'py_listcomp_7',
  topicId: 'py_list_comprehension',
  question: 'Get all vowels from a string using list comprehension.',
  mathSolution: 'Check if character is in vowel string.',
  codeSolution: 'text = "hello world"\nvowels = [char for char in text if char in "aeiou"]\nprint(vowels)  # Output: ["e", "o", "o"]',
  hint: 'Use membership operator "in" to check vowels.'
},
{
  id: 'py_listcomp_8',
  topicId: 'py_list_comprehension',
  question: 'Create a list of numbers divisible by both 3 and 5 from 1 to 50.',
  mathSolution: 'Use and operator in condition.',
  codeSolution: 'divisible = [x for x in range(1, 51) if x % 3 == 0 and x % 5 == 0]\nprint(divisible)  # Output: [15, 30, 45]',
  hint: 'Combine conditions with logical operators.'
},
{
  id: 'py_listcomp_9',
  topicId: 'py_list_comprehension',
  question: 'Replace negative numbers with 0 in a list.',
  mathSolution: 'Use conditional expression (ternary operator).',
  codeSolution: 'numbers = [1, -2, 3, -4, 5, -6]\npositive_only = [x if x > 0 else 0 for x in numbers]\nprint(positive_only)  # Output: [1, 0, 3, 0, 5, 0]',
  hint: 'Ternary: value_if_true if condition else value_if_false'
},
{
  id: 'py_listcomp_10',
  topicId: 'py_list_comprehension',
  question: 'Create a list of all possible pairs from two lists.',
  mathSolution: 'Use nested loops in list comprehension.',
  codeSolution: 'list1 = [1, 2, 3]\nlist2 = ["a", "b"]\npairs = [(x, y) for x in list1 for y in list2]\nprint(pairs)  # Output: [(1,"a"), (1,"b"), (2,"a"), (2,"b"), (3,"a"), (3,"b")]',
  hint: 'Cartesian product using nested comprehension.'
},
{
  id: 'py_listcomp_11',
  topicId: 'py_list_comprehension',
  question: 'Extract all numbers from a mixed list of strings and numbers.',
  mathSolution: 'Check type of each element using isinstance().',
  codeSolution: 'mixed = [1, "hello", 2, "world", 3, 4, "python"]\nnumbers = [x for x in mixed if isinstance(x, (int, float))]\nprint(numbers)  # Output: [1, 2, 3, 4]',
  hint: 'isinstance(x, (int, float)) checks if x is number.'
},
{
  id: 'py_listcomp_12',
  topicId: 'py_list_comprehension',
  question: 'Create a list of the first letters of each word in a sentence.',
  mathSolution: 'Index into each word with [0].',
  codeSolution: 'sentence = "Python list comprehension is powerful"\nfirst_letters = [word[0] for word in sentence.split()]\nprint(first_letters)  # Output: ["P", "l", "c", "i", "p"]',
  hint: 'word[0] gets first character of each word.'
},
{
  id: 'py_listcomp_13',
  topicId: 'py_list_comprehension',
  question: 'Generate a list of factorials for numbers 1-5.',
  mathSolution: 'Use math.factorial or calculate manually.',
  codeSolution: 'import math\nfactorials = [math.factorial(x) for x in range(1, 6)]\nprint(factorials)  # Output: [1, 2, 6, 24, 120]',
  hint: 'math.factorial(n) returns n!'
},
{
  id: 'py_listcomp_14',
  topicId: 'py_list_comprehension',
  question: 'Create a list of strings where each string is repeated n times.',
  mathSolution: 'Use multiplication operator on strings.',
  codeSolution: 'words = ["hello", "world"]\nrepeated = [word * 3 for word in words]\nprint(repeated)  # Output: ["hellohellohello", "worldworldworld"]',
  hint: 'String * n repeats the string n times.'
},
{
  id: 'py_listcomp_15',
  topicId: 'py_list_comprehension',
  question: 'Get all prime numbers up to 50 using list comprehension with helper function.',
  mathSolution: 'Use is_prime function in condition.',
  codeSolution: 'def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n**0.5)+1):\n        if n % i == 0:\n            return False\n    return True\n\nprimes = [x for x in range(2, 51) if is_prime(x)]\nprint(primes)  # Output: [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]',
  hint: 'Helper functions can be used in conditions.'
},
{
  id: 'py_listcomp_16',
  topicId: 'py_list_comprehension',
  question: 'Create a list of the sum of corresponding elements from two lists.',
  mathSolution: 'Use zip to pair elements, then sum each pair.',
  codeSolution: 'a = [1, 2, 3]\nb = [4, 5, 6]\nsums = [x + y for x, y in zip(a, b)]\nprint(sums)  # Output: [5, 7, 9]',
  hint: 'zip() combines lists element-wise.'
},
{
  id: 'py_listcomp_17',
  topicId: 'py_list_comprehension',
  question: 'Extract all email addresses (strings containing @) from a list.',
  mathSolution: 'Use in operator to check for @ symbol.',
  codeSolution: 'contacts = ["john@email.com", "jane.doe", "bob@work.com", "charlie"]\nemails = [contact for contact in contacts if "@" in contact]\nprint(emails)  # Output: ["john@email.com", "bob@work.com"]',
  hint: '"@" in string checks if string contains @.'
},
{
  id: 'py_listcomp_18',
  topicId: 'py_list_comprehension',
  question: 'Create a list of (number, parity) tuples for numbers 1-5.',
  mathSolution: 'Use conditional expression to determine parity.',
  codeSolution: 'parity = [(x, "even" if x % 2 == 0 else "odd") for x in range(1, 6)]\nprint(parity)  # Output: [(1,"odd"), (2,"even"), (3,"odd"), (4,"even"), (5,"odd")]',
  hint: 'Expression can be a tuple with conditional.'
},
{
  id: 'py_listcomp_19',
  topicId: 'py_list_comprehension',
  question: 'Flatten a list of lists of different lengths.',
  mathSolution: 'Nested comprehension handles variable lengths.',
  codeSolution: 'nested = [[1, 2], [3, 4, 5], [6, 7, 8, 9]]\nflat = [num for sublist in nested for num in sublist]\nprint(flat)  # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]',
  hint: 'Works for any nested list regardless of sublist lengths.'
},
{
  id: 'py_listcomp_20',
  topicId: 'py_list_comprehension',
  question: 'Create a list of all factors of numbers from 1 to 10.',
  mathSolution: 'Find factors for each number using nested comprehension.',
  codeSolution: 'def get_factors(n):\n    return [i for i in range(1, n+1) if n % i == 0]\n\nfactors = [get_factors(x) for x in range(1, 11)]\nprint(factors)  # List of factors for 1-10',
  hint: 'Use list comprehension inside list comprehension.'
},
{
  id: 'py_listcomp_21',
  topicId: 'py_list_comprehension',
  question: 'Convert a list of Celsius temperatures to Fahrenheit.',
  mathSolution: 'Apply conversion formula F = C * 9/5 + 32.',
  codeSolution: 'celsius = [0, 10, 20, 30, 40]\nfahrenheit = [(c * 9/5) + 32 for c in celsius]\nprint(fahrenheit)  # Output: [32.0, 50.0, 68.0, 86.0, 104.0]',
  hint: 'Formula: (c * 9/5) + 32'
},
{
  id: 'py_listcomp_22',
  topicId: 'py_list_comprehension',
  question: 'Get all palindromic numbers between 10 and 200.',
  mathSolution: 'Convert to string and check reverse equality.',
  codeSolution: 'palindromes = [x for x in range(10, 201) if str(x) == str(x)[::-1]]\nprint(palindromes)  # Output: [11,22,33,44,55,66,77,88,99,101,111,121,131,141,151,161,171,181,191]',
  hint: 'str(x)[::-1] reverses the string.'
},
{
  id: 'py_listcomp_23',
  topicId: 'py_list_comprehension',
  question: 'Create a list of the first 10 Fibonacci numbers.',
  mathSolution: 'Use Fibonacci sequence generation.',
  codeSolution: 'fib = [0, 1]\n[fib.append(fib[-1] + fib[-2]) for _ in range(8)]  # Not recommended - side effects\n# Better approach:\ndef fib_list(n):\n    result = [0, 1]\n    for i in range(2, n):\n        result.append(result[-1] + result[-2])\n    return result[:n]\n\nprint(fib_list(10))  # Output: [0,1,1,2,3,5,8,13,21,34]',
  hint: 'List comprehension with side effects is generally avoided.'
},
{
  id: 'py_listcomp_24',
  topicId: 'py_list_comprehension',
  question: 'Extract all words longer than 5 characters from a sentence.',
  mathSolution: 'Split sentence and filter by length.',
  codeSolution: 'sentence = "Python list comprehension is very useful for data processing"\nlong_words = [word for word in sentence.split() if len(word) > 5]\nprint(long_words)  # Output: ["Python", "comprehension", "useful", "processing"]',
  hint: 'len(word) > 5 checks word length.'
},
{
  id: 'py_listcomp_25',
  topicId: 'py_list_comprehension',
  question: 'Create a list of the ASCII values of characters in a string.',
  mathSolution: 'Use ord() function to get ASCII value.',
  codeSolution: 'text = "hello"\nascii_values = [ord(char) for char in text]\nprint(ascii_values)  # Output: [104, 101, 108, 108, 111]',
  hint: 'ord() returns Unicode code point.'
},
{
  id: 'py_listcomp_26',
  topicId: 'py_list_comprehension',
  question: 'Remove all vowels from a string using list comprehension.',
  mathSolution: 'Keep characters that are not vowels.',
  codeSolution: 'text = "hello world"\nvowels = "aeiou"\nno_vowels = "".join([char for char in text if char.lower() not in vowels])\nprint(no_vowels)  # Output: "hll wrld"',
  hint: 'Use join() to convert list back to string.'
},
{
  id: 'py_listcomp_27',
  topicId: 'py_list_comprehension',
  question: 'Create a list of common elements between two lists.',
  mathSolution: 'Use condition to check membership in other list.',
  codeSolution: 'list1 = [1, 2, 3, 4, 5]\nlist2 = [3, 4, 5, 6, 7]\ncommon = [x for x in list1 if x in list2]\nprint(common)  # Output: [3, 4, 5]',
  hint: 'Set intersection is more efficient for large lists.'
},
{
  id: 'py_listcomp_28',
  topicId: 'py_list_comprehension',
  question: 'Generate a multiplication table (1-5) as a 2D list.',
  mathSolution: 'Nested comprehension for rows and columns.',
  codeSolution: 'table = [[i * j for j in range(1, 6)] for i in range(1, 6)]\nfor row in table:\n    print(row)  # Output: [1,2,3,4,5], [2,4,6,8,10], [3,6,9,12,15], [4,8,12,16,20], [5,10,15,20,25]',
  hint: 'Outer loop for rows, inner for columns.'
},
{
  id: 'py_listcomp_29',
  topicId: 'py_list_comprehension',
  question: 'Create a list of numbers with their sign (positive/negative/zero).',
  mathSolution: 'Use nested conditionals to determine sign.',
  codeSolution: 'numbers = [-3, -1, 0, 2, 5, -8]\nsigns = ["positive" if x > 0 else "negative" if x < 0 else "zero" for x in numbers]\nprint(signs)  # Output: ["negative", "negative", "zero", "positive", "positive", "negative"]',
  hint: 'Chain ternary operators for multiple conditions.'
},
{
  id: 'py_listcomp_30',
  topicId: 'py_list_comprehension',
  question: 'Extract all keys from a list of dictionaries.',
  mathSolution: 'Get keys from first dictionary, assuming all have same keys.',
  codeSolution: 'dict_list = [{"name": "Alice", "age": 25}, {"name": "Bob", "age": 30}]\nkeys = list(dict_list[0].keys()) if dict_list else []\nprint(keys)  # Output: ["name", "age"]',
  hint: 'For variable keys, use set union of all keys.'
},
{
  id: 'py_listcomp_31',
  topicId: 'py_list_comprehension',
  question: 'Create a list of all possible subsets of a set (power set) using list comprehension.',
  mathSolution: 'Use binary representation to generate subsets.',
  codeSolution: 'items = ["a", "b", "c"]\npower_set = [[items[i] for i in range(len(items)) if mask & (1 << i)] for mask in range(1 << len(items))]\nprint(power_set)  # All subsets: [], ["a"], ["b"], ["a","b"], ["c"], ["a","c"], ["b","c"], ["a","b","c"]',
  hint: 'Each mask from 0 to 2^n-1 represents a subset.'
},
{
  id: 'py_listcomp_32',
  topicId: 'py_list_comprehension',
  question: 'Transpose a matrix (2D list) using list comprehension.',
  mathSolution: 'Use nested comprehension with row and column swapped.',
  codeSolution: 'matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\ntranspose = [[row[i] for row in matrix] for i in range(len(matrix[0]))]\nprint(transpose)  # Output: [[1,4,7], [2,5,8], [3,6,9]]',
  hint: 'transpose[i][j] = original[j][i]'
},
{
  id: 'py_listcomp_33',
  topicId: 'py_list_comprehension',
  question: 'Create a list of all perfect squares up to 100.',
  mathSolution: 'Generate squares until they exceed 100.',
  codeSolution: 'squares = [x**2 for x in range(1, 11) if x**2 <= 100]\nprint(squares)  # Output: [1,4,9,16,25,36,49,64,81,100]',
  hint: 'Range up to 10 since 11² = 121 > 100.'
},
{
  id: 'py_listcomp_34',
  topicId: 'py_list_comprehension',
  question: 'Extract all numeric values from a string (digits only).',
  mathSolution: 'Check if character is digit using isdigit().',
  codeSolution: 'text = "abc123def456ghi789"\ndigits = [char for char in text if char.isdigit()]\nprint(digits)  # Output: ["1","2","3","4","5","6","7","8","9"]',
  hint: 'isdigit() returns True for digit characters.'
},
{
  id: 'py_listcomp_35',
  topicId: 'py_list_comprehension',
  question: 'Create a list of running totals (cumulative sum) of a list.',
  mathSolution: 'Use sum of slice or accumulate in comprehension (requires external variable).',
  codeSolution: 'numbers = [1, 2, 3, 4, 5]\ncumulative = [sum(numbers[:i+1]) for i in range(len(numbers))]\nprint(cumulative)  # Output: [1, 3, 6, 10, 15]',
  hint: 'sum(numbers[:i+1]) sums up to current index.'
},
{
  id: 'py_listcomp_36',
  topicId: 'py_list_comprehension',
  question: 'Generate all possible passwords from given character set of length n.',
  mathSolution: 'Use product from itertools in list comprehension.',
  codeSolution: 'import itertools\nchars = ["a", "b", "c"]\npasswords = ["".join(p) for p in itertools.product(chars, repeat=2)]\nprint(passwords)  # Output: ["aa","ab","ac","ba","bb","bc","ca","cb","cc"]',
  hint: 'itertools.product generates Cartesian product.'
},
{
  id: 'py_listcomp_37',
  topicId: 'py_list_comprehension',
  question: 'Extract all elements at even indices from a list.',
  mathSolution: 'Use enumerate to get index and element.',
  codeSolution: 'items = ["a", "b", "c", "d", "e", "f"]\neven_indices = [item for i, item in enumerate(items) if i % 2 == 0]\nprint(even_indices)  # Output: ["a", "c", "e"]',
  hint: 'enumerate() gives (index, value) pairs.'
},
{
  id: 'py_listcomp_38',
  topicId: 'py_list_comprehension',
  question: 'Create a list of the differences between consecutive elements.',
  mathSolution: 'Zip list with itself offset by 1.',
  codeSolution: 'numbers = [10, 15, 12, 18, 20]\ndiffs = [numbers[i+1] - numbers[i] for i in range(len(numbers)-1)]\nprint(diffs)  # Output: [5, -3, 6, 2]',
  hint: 'Alternative: [y-x for x,y in zip(numbers, numbers[1:])]'
},
{
  id: 'py_listcomp_39',
  topicId: 'py_list_comprehension',
  question: 'Get all words that start with a vowel from a sentence.',
  mathSolution: 'Check first character against vowels.',
  codeSolution: 'sentence = "apple banana orange grape umbrella"\nvowel_start = [word for word in sentence.split() if word[0].lower() in "aeiou"]\nprint(vowel_start)  # Output: ["apple", "orange", "umbrella"]',
  hint: 'word[0] gets first character.'
},
{
  id: 'py_listcomp_40',
  topicId: 'py_list_comprehension',
  question: 'Create a list of numbers with their squares only if square is even.',
  mathSolution: 'Add condition on the result of expression.',
  codeSolution: 'numbers = [1, 2, 3, 4, 5, 6]\neven_squares = [(x, x**2) for x in numbers if (x**2) % 2 == 0]\nprint(even_squares)  # Output: [(2,4), (4,16), (6,36)]',
  hint: 'Condition can be on the expression result.'
},
{
  id: 'py_listcomp_41',
  topicId: 'py_list_comprehension',
  question: 'Extract all unique characters from a string (preserving order).',
  mathSolution: 'Use set to track seen, but maintain order with list.',
  codeSolution: 'text = "hello world"\nunique = []\n[unique.append(char) for char in text if char not in unique]  # Not recommended\n# Better:\nseen = set()\nunique = [char for char in text if not (char in seen or seen.add(char))]\nprint(unique)  # Output: ["h","e","l","o"," ","w","r","d"]',
  hint: 'Complex condition with side effects - avoid in production.'
},
{
  id: 'py_listcomp_42',
  topicId: 'py_list_comprehension',
  question: 'Create a list of all possible combinations of two lists (without duplicates).',
  mathSolution: 'Ensure i < j for combinations without order.',
  codeSolution: 'items = [1, 2, 3]\ncombinations = [(items[i], items[j]) for i in range(len(items)) for j in range(i+1, len(items))]\nprint(combinations)  # Output: [(1,2), (1,3), (2,3)]',
  hint: 'Use indices to control combinations.'
},
{
  id: 'py_listcomp_43',
  topicId: 'py_list_comprehension',
  question: 'Convert a list of strings to integers, ignoring non-numeric strings.',
  mathSolution: 'Try conversion in condition, handle exceptions? Better to check isdigit.',
  codeSolution: 'strings = ["123", "abc", "456", "def", "789"]\nnumbers = [int(s) for s in strings if s.isdigit()]\nprint(numbers)  # Output: [123, 456, 789]',
  hint: 'isdigit() checks if string consists only of digits.'
},
{
  id: 'py_listcomp_44',
  topicId: 'py_list_comprehension',
  question: 'Generate a list of all substrings of a given string.',
  mathSolution: 'Use nested loops with start and end indices.',
  codeSolution: 's = "abc"\nsubstrings = [s[i:j+1] for i in range(len(s)) for j in range(i, len(s))]\nprint(substrings)  # Output: ["a","ab","abc","b","bc","c"]',
  hint: 's[i:j+1] gives substring from i to j inclusive.'
},
{
  id: 'py_listcomp_45',
  topicId: 'py_list_comprehension',
  question: 'Create a list of dictionaries from two parallel lists (keys and values).',
  mathSolution: 'Zip keys and values, create dict for each pair? Actually create one dict.',
  codeSolution: 'keys = ["name", "age", "city"]\nvalues = ["Alice", 25, "New York"]\ndictionary = {k: v for k, v in zip(keys, values)}\nprint(dictionary)  # Output: {"name": "Alice", "age": 25, "city": "New York"}',
  hint: 'Dict comprehension uses {} instead of [].'
},
{
  id: 'py_listcomp_46',
  topicId: 'py_list_comprehension',
  question: 'Extract all elements that appear more than once in a list.',
  mathSolution: 'Count occurrences and filter those with count > 1.',
  codeSolution: 'items = [1, 2, 2, 3, 4, 4, 4, 5]\nduplicates = list(set([x for x in items if items.count(x) > 1]))\nprint(duplicates)  # Output: [2, 4]',
  hint: 'Use set to remove duplicates from result.'
},
{
  id: 'py_listcomp_47',
  topicId: 'py_list_comprehension',
  question: 'Create a list of numbers that are powers of 2 (up to 256).',
  mathSolution: 'Generate powers until they exceed limit.',
  codeSolution: 'powers = [2**x for x in range(9) if 2**x <= 256]\nprint(powers)  # Output: [1,2,4,8,16,32,64,128,256]',
  hint: '2**8 = 256, range up to 9 includes 0..8.'
},
{
  id: 'py_listcomp_48',
  topicId: 'py_list_comprehension',
  question: 'Convert a list of tuples into a list of lists.',
  mathSolution: 'Use list() constructor on each tuple.',
  codeSolution: 'tuple_list = [(1, 2), (3, 4), (5, 6)]\nlist_of_lists = [list(t) for t in tuple_list]\nprint(list_of_lists)  # Output: [[1,2], [3,4], [5,6]]',
  hint: 'list(tuple) converts tuple to list.'
},
{
  id: 'py_listcomp_49',
  topicId: 'py_list_comprehension',
  question: 'Create a list of numbers that are both prime and palindrome.',
  mathSolution: 'Combine prime check and palindrome check.',
  codeSolution: 'def is_prime(n):\n    return n > 1 and all(n % i != 0 for i in range(2, int(n**0.5)+1))\n\nprime_palindromes = [x for x in range(2, 1000) if is_prime(x) and str(x) == str(x)[::-1]]\nprint(prime_palindromes)  # Output: [2,3,5,7,11,101,131,151,181,191,313,353,373,383,727,757,787,797,919,929]',
  hint: 'Combine conditions with and operator.'
},
{
  id: 'py_listcomp_50',
  topicId: 'py_list_comprehension',
  question: 'Generate a list of all possible binary strings of length n.',
  mathSolution: 'Use format with binary conversion.',
  codeSolution: 'n = 3\nbinary_strings = [format(i, f"0{n}b") for i in range(2**n)]\nprint(binary_strings)  # Output: ["000", "001", "010", "011", "100", "101", "110", "111"]',
  hint: 'format(i, f"0{n}b") formats as binary with leading zeros.'
});