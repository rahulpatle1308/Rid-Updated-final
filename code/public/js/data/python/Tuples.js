QuizData.questions.push({
    Id: "py_tuple_1",
    topicId: "py_tuple",
    question: "Create a tuple with 5 different elements (integer, float, string, boolean, list) and print it.",
    mathSolution: "Tuples can contain mixed data types",
    codeSolution: "my_tuple = (10, 3.14, 'Hello', True, [1, 2, 3])\nprint(f'Tuple: {my_tuple}')\nprint(f'Type: {type(my_tuple)}')\nprint(f'Length: {len(my_tuple)}')\n\n# Access elements\nfor i, item in enumerate(my_tuple):\n    print(f'Index {i}: {item} ({type(item)})')",
    hint: "Use parentheses () to create a tuple, elements separated by commas"
  },
  {
    Id: "py_tuple_2",
    topicId: "py_tuple",
    question: "Create a tuple with a single element and verify its type.",
    mathSolution: "Single-element tuple requires a trailing comma",
    codeSolution: "single_element = (42)  # This is an int, not a tuple\nprint(f'(42) is: {single_element}, type: {type(single_element)}')\n\nproper_tuple = (42,)  # Trailing comma makes it a tuple\nprint(f'(42,) is: {proper_tuple}, type: {type(proper_tuple)}')\n\n# Another way\nanother_tuple = 42,\nprint(f'42, is: {another_tuple}, type: {type(another_tuple)}')",
    hint: "Always add a comma after the element for single-element tuples"
  },
  {
    Id: "py_tuple_3",
    topicId: "py_tuple",
    question: "Access elements of a tuple using positive and negative indexing.",
    mathSolution: "Indexing: 0 for first, -1 for last",
    codeSolution: "colors = ('red', 'green', 'blue', 'yellow', 'purple')\n\nprint(f'Tuple: {colors}')\nprint(f'First element (index 0): {colors[0]}')\nprint(f'Third element (index 2): {colors[2]}')\nprint(f'Last element (index -1): {colors[-1]}')\nprint(f'Second last (index -2): {colors[-2]}')\n\n# Slicing\nprint(f'First three: {colors[:3]}')\nprint(f'From index 2 to end: {colors[2:]}')\nprint(f'Middle two: {colors[1:3]}')\nprint(f'Reverse: {colors[::-1]}')",
    hint: "Use [index] for single element, [start:stop] for slicing"
  },
  {
    Id: "py_tuple_4",
    topicId: "py_tuple",
    question: "Try to modify an element of a tuple and handle the error.",
    mathSolution: "Tuples are immutable - cannot be modified after creation",
    codeSolution: "my_tuple = (10, 20, 30, 40, 50)\nprint(f'Original tuple: {my_tuple}')\n\ntry:\n    my_tuple[2] = 100  # Try to modify\nexcept TypeError as e:\n    print(f'Error: {e}')\n    print('Tuples are immutable - cannot change elements')\n\n# But you can reassign the entire tuple\nmy_tuple = (1, 2, 3)\nprint(f'New tuple: {my_tuple}')",
    hint: "Tuples are immutable, so they don't support item assignment"
  },
  {
    Id: "py_tuple_5",
    topicId: "py_tuple",
    question: "Perform tuple unpacking to assign values to multiple variables.",
    mathSolution: "Unpack tuple elements into variables",
    codeSolution: "point = (10, 20, 30)\nx, y, z = point\nprint(f'Point: {point}')\nprint(f'x = {x}, y = {y}, z = {z}')\n\n# Unpack with *_ for remaining elements\nnumbers = (1, 2, 3, 4, 5)\nfirst, *middle, last = numbers\nprint(f'\\nNumbers: {numbers}')\nprint(f'First: {first}')\nprint(f'Middle: {middle}')\nprint(f'Last: {last}')\n\n# Swap variables using tuple unpacking\na, b = 5, 10\nprint(f'\\nBefore swap: a = {a}, b = {b}')\na, b = b, a\nprint(f'After swap: a = {a}, b = {b}')",
    hint: "Use comma-separated variables on left side of ="
  },
  {
    Id: "py_tuple_6",
    topicId: "py_tuple",
    question: "Convert a list to a tuple and vice versa.",
    mathSolution: "tuple() converts to tuple, list() converts to list",
    codeSolution: "my_list = [1, 2, 3, 4, 5]\nprint(f'List: {my_list}, type: {type(my_list)}')\n\n# List to tuple\nmy_tuple = tuple(my_list)\nprint(f'Tuple from list: {my_tuple}, type: {type(my_tuple)}')\n\n# Tuple to list\nnew_list = list(my_tuple)\nprint(f'List from tuple: {new_list}, type: {type(new_list)}')\n\n# Modify the new list\nnew_list.append(6)\nprint(f'Modified list: {new_list}')\nprint(f'Original tuple unchanged: {my_tuple}')",
    hint: "Use tuple() and list() constructors for conversion"
  },
  {
    Id: "py_tuple_7",
    topicId: "py_tuple",
    question: "Count occurrences of an element in a tuple using count() method.",
    mathSolution: "tuple.count(element) returns number of occurrences",
    codeSolution: "numbers = (1, 2, 3, 2, 4, 2, 5, 2, 6)\nprint(f'Tuple: {numbers}')\n\ncount_2 = numbers.count(2)\nprint(f'Number of 2s: {count_2}')\n\ncount_7 = numbers.count(7)\nprint(f'Number of 7s: {count_7}')\n\n# Count different elements\nelements = set(numbers)\nprint('\\nElement frequencies:')\nfor elem in sorted(elements):\n    print(f'  {elem}: {numbers.count(elem)}')",
    hint: "count() returns the number of times a value appears"
  },
  {
    Id: "py_tuple_8",
    topicId: "py_tuple",
    question: "Find the index of an element in a tuple using index() method.",
    mathSolution: "tuple.index(element) returns first occurrence position",
    codeSolution: "colors = ('red', 'green', 'blue', 'green', 'yellow')\nprint(f'Tuple: {colors}')\n\nindex_green = colors.index('green')\nprint( First 'green' at index: {index_green})\n\n# Find with start and end parameters\nindex_green_after = colors.index('green', 2)\nprint('green' after index 2: {index_green_after})\n\n# Handle element not found\ntry:\n    index_purple = colors.index('purple')\nexcept ValueError as e:\n    print(f  error: {e} - 'purple' not found )\n\n# Safe way to find index\nif 'blue' in colors:\n    print(f 'blue' at index: {colors.index('blue')})",
    hint: "index() raises ValueError if element not found, use 'in' operator to check first"
  },
  {
    Id: "py_tuple_9",
    topicId: "py_tuple",
    question: "Check if an element exists in a tuple using 'in' operator.",
    mathSolution: "'in' operator returns True if element exists",
    codeSolution: "fruits = ('apple', 'banana', 'cherry', 'date')\nprint(f'Tuple: {fruits}')\n\n# Check for existence\nprint(f 'banana' in tuple: {'banana' in fruits})\nprint(f 'grape' in tuple: {'grape' in fruits}')\n\n# Check for non-existence\nprint(f 'kiwi' not in tuple: {'kiwi' not in fruits})\n\n# Use in conditionals\nsearch = input('Enter a fruit to search: ')\nif search in fruits:\n    print(f {search} found at index {fruits.index(search)})\nelse:\n    print(f{search} not found)",
    hint: "Use 'in' operator for membership testing"
  },
  {
    Id: "py_tuple_10",
    topicId: "py_tuple",
    question: "Find the length, minimum, maximum, and sum of a numeric tuple.",
    mathSolution: "len(), min(), max(), sum() functions work on tuples",
    codeSolution: "numbers = (45, 12, 78, 34, 90, 23, 56)\nprint(f'Tuple: {numbers}')\n\nlength = len(numbers)\nprint(f'Length: {length}')\n\nminimum = min(numbers)\nprint(f'Minimum: {minimum}')\n\nmaximum = max(numbers)\nprint(f'Maximum: {maximum}')\n\ntotal = sum(numbers)\nprint(f'Sum: {total}')\n\naverage = total / length\nprint(f'Average: {average:.2f}')\n\n# For mixed types, min/max may not work\nmixed = (1, 'hello', 3.14)\ntry:\n    print(min(mixed))\nexcept TypeError as e:\n    print(f'Error with mixed types: {e}')",
    hint: "min(), max(), sum() work only on tuples with comparable types"
  },
  {
    Id: "py_tuple_11",
    topicId: "py_tuple",
    question: "Sort a tuple and return a sorted list.",
    mathSolution: "sorted() returns a sorted list from any iterable",
    codeSolution: "numbers = (45, 12, 78, 34, 90, 23, 56)\nprint(f'Original tuple: {numbers}')\n\n# Sort ascending\nsorted_asc = sorted(numbers)\nprint(f'Sorted ascending (list): {sorted_asc}')\n\n# Sort descending\nsorted_desc = sorted(numbers, reverse=True)\nprint(f'Sorted descending (list): {sorted_desc}')\n\n# Original tuple remains unchanged\nprint(f'Original tuple after sorting: {numbers}')\n\n# Sort strings\ncolors = ('red', 'green', 'blue', 'yellow')\nprint(f'\\nColors: {colors}')\nprint(f Sorted colors: {sorted(colors)} )\nprint(f Sorted by length: {sorted(colors, key=len)})",
    hint: "sorted() returns a list, tuple remains unchanged"
  },
  {
    Id: "py_tuple_12",
    topicId: "py_tuple",
    question: "Concatenate two tuples using + operator.",
    mathSolution: "+ operator joins tuples to create a new tuple",
    codeSolution: "tuple1 = (1, 2, 3)\ntuple2 = (4, 5, 6)\nprint(f'Tuple1: {tuple1}')\nprint(f'Tuple2: {tuple2}')\n\n# Concatenation\ncombined = tuple1 + tuple2\nprint(f'Combined: {combined}')\n\n# Multiple concatenations\ntuple3 = (7, 8, 9)\nresult = tuple1 + tuple2 + tuple3\nprint(f'Three tuples: {result}')\n\n# Original tuples unchanged\nprint(f'Original tuple1: {tuple1}')\nprint(f'Original tuple2: {tuple2}')\n\n# Can't concatenate with different types\n# tuple1 + [4,5,6]  # This would raise TypeError",
    hint: "+ creates a new tuple, doesn't modify originals"
  },
  {
    Id: "py_tuple_13",
    topicId: "py_tuple",
    question: "Repeat a tuple using * operator.",
    mathSolution: "* operator repeats tuple elements",
    codeSolution: "tuple1 = (1, 2, 3)\ntuple2 = (4, 5, 6)\nprint(f'Tuple1: {tuple1}')\nprint(f'Tuple2: {tuple2}')\n\n# Concatenation\ncombined = tuple1 + tuple2\nprint(f'Combined: {combined}')\n\n# Multiple concatenations\ntuple3 = (7, 8, 9)\nresult = tuple1 + tuple2 + tuple3\nprint(f'Three tuples: {result}')\n\n# Original tuples unchanged\nprint(f'Original tuple1: {tuple1}')\nprint(f'Original tuple2: {tuple2}')\n\n# Can't concatenate with different types\n# tuple1 + [4,5,6]  # This would raise TypeError",
    hint: "* operator creates a new tuple with repeated elements"
  },
  {
    Id: "py_tuple_14",
    topicId: "py_tuple",
    question: "Compare two tuples element-wise using comparison operators.",
    mathSolution: "Tuples are compared lexicographically",
    codeSolution: "tuple1 = (1, 2, 3)\ntuple2 = (1, 2, 4)\ntuple3 = (1, 2, 3)\n\nprint(f'tuple1: {tuple1}')\nprint(f'tuple2: {tuple2}')\nprint(f'tuple3: {tuple3}')\n\nprint(f'tuple1 == tuple2: {tuple1 == tuple2}')\nprint(f'tuple1 == tuple3: {tuple1 == tuple3}')\nprint(f'tuple1 < tuple2: {tuple1 < tuple2}')  # Compares last element\nprint(f'tuple1 > tuple2: {tuple1 > tuple2}')\n\n# Different lengths\ntuple4 = (1, 2, 3, 4)\nprint(f'\\ntuple4: {tuple4}')\nprint(f'tuple1 < tuple4: {tuple1 < tuple4}')  # Shorter is less\n\n# Mixed types\nmixed1 = (1, 'a')\nmixed2 = (1, 'b')\nprint(f'\\nmixed1 < mixed2: {mixed1 < mixed2}')  # Compares strings",
    hint: "Comparison stops at first differing element"
  },
  {
    Id: "py_tuple_15",
    topicId: "py_tuple",
    question: "Create a tuple of tuples (nested tuple) and access nested elements.",
    mathSolution: "Access nested elements using multiple indices",
    codeSolution: "nested = ((1, 2, 3), ('a', 'b', 'c'), (True, False))\nprint(f'Nested tuple: {nested}')\n\n# Access outer elements\nprint(f'First inner tuple: {nested[0]}')\nprint(f'Second inner tuple: {nested[1]}')\n\n# Access inner elements\nprint(f'First element of first inner: {nested[0][0]}')\nprint(f'Second element of second inner: {nested[1][1]}')\nprint(f'Last element of third inner: {nested[2][-1]}')\n\n# Iterate through nested tuple\nprint('\\nAll elements:')\nfor i, inner in enumerate(nested):\n    for j, value in enumerate(inner):\n        print(f'  nested[{i}][{j}] = {value}')",
    hint: "Use multiple indices like tuple1[index1][index2]"
  },
  {
    Id: "py_tuple_16",
    topicId: "py_tuple",
    question: "Use tuple as keys in a dictionary (demonstrate hashable requirement).",
    mathSolution: "Tuples are hashable if all elements are hashable",
    codeSolution: "# Valid - tuple with hashable elements\nlocations = {\n    (40.7128, -74.0060): 'New York',\n    (34.0522, -118.2437): 'Los Angeles',\n    (41.8781, -87.6298): 'Chicago'\n}\n\nprint('Dictionary with tuple keys:')\nfor coords, city in locations.items():\n    print(f'  {coords}: {city}')\n\n# Access using tuple\nny_coords = (40.7128, -74.0060)\nprint(f'\\nCity at {ny_coords}: {locations[ny_coords]}')\n\n# Invalid - tuple with unhashable elements (list)\ntry:\n    invalid_dict = {([1,2], 'key'): 'value'}\nexcept TypeError as e:\n    print(f'\\nError with unhashable tuple: {e}')\n\n# Valid if all elements are hashable\nvalid_tuple = (1, 2, 'three', (4, 5))\nd = {valid_tuple: 'works'}\nprint(f'\\nDictionary with complex tuple key: {d}')",
    hint: "Tuples can be dict keys only if all elements are hashable"
  },
  {
    Id: "py_tuple_17",
    topicId: "py_tuple",
    question: "Return multiple values from a function using tuples.",
    mathSolution: "Functions can return tuples for multiple values",
    codeSolution: "def get_min_max_average(numbers):\n    return (min(numbers), max(numbers), sum(numbers)/len(numbers))\n\ndef get_stats(numbers):\n    \"\"\"Return multiple statistics as a tuple\"\"\"\n    return (\n        len(numbers),\n        min(numbers),\n        max(numbers),\n        sum(numbers),\n        sum(numbers)/len(numbers)\n    )\n\n# Use the function\nvalues = [15, 22, 8, 31, 17, 42, 9]\n\nresult = get_min_max_average(values)\nprint(f'Numbers: {values}')\nprint(f'Result tuple: {result}')\nprint(f'Min: {result[0]}, Max: {result[1]}, Avg: {result[2]:.2f}')\n\n# Unpack the result\nminimum, maximum, average = get_min_max_average(values)\nprint(f'\\nUnpacked: min={minimum}, max={maximum}, avg={average:.2f}')\n\n# Multiple return values\ncount, mn, mx, total, avg = get_stats(values)\nprint(f'\\nStats: count={count}, min={mn}, max={mx}, total={total}, avg={avg:.2f}')",
    hint: "Return comma-separated values which automatically become a tuple"
  },
  {
    Id: "py_tuple_18",
    topicId: "py_tuple",
    question: "Create a namedtuple from collections module for readable code.",
    mathSolution: "namedtuple creates tuple with named fields",
    codeSolution: "from collections import namedtuple\n\n# Define a namedtuple type\nPoint = namedtuple('Point', ['x', 'y', 'z'])\nPerson = namedtuple('Person', 'name age email')\n\n# Create instances\np1 = Point(10, 20, 30)\np2 = Point(x=5, y=15, z=25)\nperson = Person('Alice', 30, 'alice@example.com')\n\nprint(f'Point1: {p1}')\nprint(f'Point2: {p2}')\nprint(f'Person: {person}')\n\n# Access by name\nprint(f'\\np1.x = {p1.x}, p1.y = {p1.y}, p1.z = {p1.z}')\nprint(f'Person name: {person.name}, age: {person.age}')\n\n# Still works as tuple\nprint(f'p1[0] = {p1[0]}, p1[1] = {p1[1]}')\n\n# Convert to dictionary\nprint(f'\\nAs dict: {p1._asdict()}')\n\n# Create new instance with changed values\np3 = p1._replace(x=100)\nprint(f'p1 with x=100: {p3}')",
    hint: "Import from collections module, provide field names as list or string"
  },
  {
    Id: "py_tuple_19",
    topicId: "py_tuple",
    question: "Use tuple comprehension (generator expression) to create a tuple.",
    mathSolution: "Tuple comprehension uses generator expression with tuple()",
    codeSolution: "# Generator expression (not tuple comprehension)\ngen = (x**2 for x in range(10))\nprint(f'Generator: {gen}')\nprint(f'As list: {list(gen)}')  # Generator consumed\n\n# Create tuple from generator\nsquares = tuple(x**2 for x in range(10))\nprint(f'\\nSquares tuple: {squares}')\n\n# Even squares\neven_squares = tuple(x**2 for x in range(10) if x % 2 == 0)\nprint(f'Even squares: {even_squares}')\n\n# Nested generator\npairs = tuple((x, y) for x in range(3) for y in range(3))\nprint(f'\\nPairs: {pairs}')\n\n# Compare with list comprehension\nlist_squares = [x**2 for x in range(10)]\nprint(f'List comprehension: {list_squares}')",
    hint: "Use tuple(generator_expression) to create tuple from generator"
  },
  {
    Id: "py_tuple_20",
    topicId: "py_tuple",
    question: "Zip two lists into a list of tuples using zip().",
    mathSolution: "zip() pairs elements from multiple iterables",
    codeSolution: "names = ['Alice', 'Bob', 'Charlie', 'Diana']\nages = [25, 30, 35, 28]\nscores = [85, 92, 78, 95]\n\nprint(f'Names: {names}')\nprint(f'Ages: {ages}')\n\n# Zip into list of tuples\npaired = list(zip(names, ages))\nprint(f'\\nZipped names & ages: {paired}')\n\n# Access zipped data\nfor name, age in paired:\n    print(f'  {name} is {age} years old')\n\n# Zip three lists\nall_data = list(zip(names, ages, scores))\nprint(f'\\nNames, ages, scores: {all_data}')\n\n# Unzip using zip with *\nunzipped_names, unzipped_ages, unzipped_scores = zip(*all_data)\nprint(f'\\nUnzipped names: {unzipped_names}')\nprint(f'Unzipped ages: {unzipped_ages}')\nprint(f'Unzipped scores: {unzipped_scores}')\n\n# Handle uneven lengths\nshort = list(zip(names[:2], ages))\nprint(f'\\nUneven lengths (truncated): {short}')",
    hint: "zip() stops at shortest iterable, use itertools.zip_longest for padding"
  },
  {
    Id: "py_tuple_21",
    topicId: "py_tuple",
    question: "Use enumerate() to get index and value from a tuple.",
    mathSolution: "enumerate() returns index-value pairs",
    codeSolution: "fruits = ('apple', 'banana', 'cherry', 'date', 'elderberry')\nprint(f'Fruits: {fruits}')\n\n# Basic enumerate\nprint('\\nEnumerate:')\nfor index, fruit in enumerate(fruits):\n    print(f'  Index {index}: {fruit}')\n\n# Start from custom index\nprint('\\nStart from index 1:')\nfor index, fruit in enumerate(fruits, start=1):\n    print(f'  {index}. {fruit}')\n\n# Create list of tuples\nenumerated = list(enumerate(fruits))\nprint(f'\\nList of tuples: {enumerated}')\n\n# Dictionary from enumerate\nfruit_dict = {i: fruit for i, fruit in enumerate(fruits)}\nprint(f'Dictionary: {fruit_dict}')",
    hint: "enumerate() returns (index, value) tuples"
  },
  {
    Id: "py_tuple_22",
    topicId: "py_tuple",
    question: "Find common elements between two tuples using set operations.",
    mathSolution: "Convert to sets, use intersection, then convert back",
    codeSolution: "tuple1 = (1, 2, 3, 4, 5, 2, 3)\ntuple2 = (4, 5, 6, 7, 8, 4, 5)\n\nprint(f'Tuple1: {tuple1}')\nprint(f'Tuple2: {tuple2}')\n\n# Common elements (unique)\ncommon = tuple(set(tuple1) & set(tuple2))\nprint(f'Common elements (unique): {common}')\n\n# All common elements (including duplicates)\ncommon_all = tuple(x for x in tuple1 if x in tuple2)\nprint(f'Common elements from tuple1 (with duplicates): {common_all}')\n\n# Elements in tuple1 but not in tuple2\ndiff1 = tuple(set(tuple1) - set(tuple2))\nprint(f'In tuple1 only: {diff1}')\n\n# Union\nunion = tuple(set(tuple1) | set(tuple2))\nprint(f'Union (unique): {union}')\n\n# Check if all elements of tuple1 are in tuple2\nall_in = all(x in tuple2 for x in tuple1)\nprint(f'All tuple1 in tuple2: {all_in}')",
    hint: "Use set operations for unique elements, list comprehension for duplicates"
  },
  {
    Id: "py_tuple_23",
    topicId: "py_tuple",
    question: "Remove duplicates from a tuple while preserving order.",
    mathSolution: "Use loop with seen set to track unique elements",
    codeSolution: "original = (1, 2, 3, 2, 4, 1, 5, 3, 6, 4)\nprint(f'Original with duplicates: {original}')\n\n# Method 1: Using loop and seen set\nseen = set()\nresult = []\nfor item in original:\n    if item not in seen:\n        seen.add(item)\n        result.append(item)\nunique_tuple = tuple(result)\nprint(f'Unique (preserving order): {unique_tuple}')\n\n# Method 2: Using dict.fromkeys (Python 3.7+ preserves order)\nunique_tuple2 = tuple(dict.fromkeys(original))\nprint(f'Unique using dict: {unique_tuple2}')\n\n# Method 3: Using sorted set (doesn't preserve original order)\nunique_tuple3 = tuple(sorted(set(original)))\nprint(f'Unique sorted: {unique_tuple3}')\n\n# Count duplicates\nfrom collections import Counter\ncounts = Counter(original)\nprint(f'\\nElement counts: {dict(counts)}')",
    hint: "Use set to track seen elements, list to build result preserving order"
  },
  {
    Id: "py_tuple_24",
    topicId: "py_tuple",
    question: "Flatten a nested tuple into a single tuple.",
    mathSolution: "Recursively flatten nested structures",
    codeSolution: "nested = (1, (2, 3), (4, (5, 6), 7), 8, (9, 10))\nprint(f'Nested tuple: {nested}')\n\ndef flatten(tup):\n    result = []\n    for item in tup:\n        if isinstance(item, tuple):\n            result.extend(flatten(item))\n        else:\n            result.append(item)\n    return tuple(result)\n\nflattened = flatten(nested)\nprint(f'Flattened: {flattened}')\n\n# Another example\ndeep_nested = (1, (2, (3, (4, 5), 6), 7), 8)\nprint(f'\\nDeep nested: {deep_nested}')\nprint(f'Flattened: {flatten(deep_nested)}')\n\n# Using recursion with generator\ndef flatten_gen(tup):\n    for item in tup:\n        if isinstance(item, tuple):\n            yield from flatten_gen(item)\n        else:\n            yield item\n\nflat_gen = tuple(flatten_gen(nested))\nprint(f'Using generator: {flat_gen}')",
    hint: "Use recursion to handle arbitrary nesting depth"
  },
  {
    Id: "py_tuple_25",
    topicId: "py_tuple",
    question: "Create a tuple of prime numbers up to 50 using sieve of Eratosthenes.",
    mathSolution: "Sieve algorithm to find primes",
    codeSolution: "def sieve_of_eratosthenes(limit):\n    is_prime = [True] * (limit + 1)\n    is_prime[0] = is_prime[1] = False\n    \n    for i in range(2, int(limit**0.5) + 1):\n        if is_prime[i]:\n            for j in range(i*i, limit + 1, i):\n                is_prime[j] = False\n    \n    return tuple(i for i in range(limit + 1) if is_prime[i])\n\nprimes = sieve_of_eratosthenes(50)\nprint(f'Prime numbers up to 50: {primes}')\nprint(f'Number of primes: {len(primes)}')\n\n# Check if a number is prime\ndef is_prime(n):\n    return n in primes if n <= 50 else False\n\ntest_numbers = [17, 21, 29, 35, 47]\nfor num in test_numbers:\n    print(f'{num} is prime: {is_prime(num)}')",
    hint: "Use boolean array to mark non-primes, collect primes into tuple"
  },
  {
    Id: "py_tuple_26",
    topicId: "py_tuple",
    question: "Implement a simple cache using tuples as keys.",
    mathSolution: "Use dictionary with tuple keys for memoization",
    codeSolution: "# Fibonacci with memoization using tuple keys\ndef fibonacci(n, memo={}):\n    if n < 2:\n        return n\n    \n    # Use tuple as key\n    key = (n,)\n    if key in memo:\n        return memo[key]\n    \n    memo[key] = fibonacci(n-1, memo) + fibonacci(n-2, memo)\n    return memo[key]\n\n# Function with multiple parameters\ndef add_with_cache(a, b, cache={}):\n    key = (a, b)\n    if key in cache:\n        print(f'Cache hit for {key}')\n        return cache[key]\n    \n    print(f'Cache miss for {key} - calculating')\n    result = a + b\n    cache[key] = result\n    return result\n\n# Test fibonacci\nprint('Fibonacci:')\nfor i in range(10):\n    print(f'fib({i}) = {fibonacci(i)}')\n\n# Test cached add\nprint('\\nCached addition:')\nprint(f'add(5,3) = {add_with_cache(5,3)}')\nprint(f'add(5,3) = {add_with_cache(5,3)}')\nprint(f'add(2,7) = {add_with_cache(2,7)}')\nprint(f'add(2,7) = {add_with_cache(2,7)}')",
    hint: "Use tuples to represent multiple parameter combinations as dictionary keys"
  },
  {
    Id: "py_tuple_27",
    topicId: "py_tuple",
    question: "Find the most frequent element in a tuple.",
    mathSolution: "Use Counter or manual counting",
    codeSolution: "from collections import Counter\n\ndata = (3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 5)\nprint(f'Data: {data}')\n\n# Using Counter\ncounter = Counter(data)\nmost_common = counter.most_common(1)[0]\nprint(f'Most frequent: {most_common[0]} appears {most_common[1]} times')\n\n# Manual method\nfreq = {}\nfor item in data:\n    freq[item] = freq.get(item, 0) + 1\n\nmax_count = 0\nmax_item = None\nfor item, count in freq.items():\n    if count > max_count:\n        max_count = count\n        max_item = item\n\nprint(f'Manual: {max_item} appears {max_count} times')\n\n# All most frequent (if tie)\nmax_freq = max(freq.values())\nmost_freq_items = [item for item, count in freq.items() if count == max_freq]\nprint(f'All most frequent items (count={max_freq}): {most_freq_items}')",
    hint: "Use collections.Counter for easy frequency counting"
  },
  {
    Id: "py_tuple_28",
    topicId: "py_tuple",
    question: "Create a tuple of Fibonacci numbers up to n.",
    mathSolution: "Generate Fibonacci sequence, store in tuple",
    codeSolution: "def fibonacci_tuple(n):\n    if n <= 0:\n        return ()\n    if n == 1:\n        return (0,)\n    \n    fib = [0, 1]\n    for i in range(2, n):\n        fib.append(fib[i-1] + fib[i-2])\n    return tuple(fib)\n\ndef fibonacci_up_to_value(limit):\n    fib = [0, 1]\n    while fib[-1] + fib[-2] <= limit:\n        fib.append(fib[-1] + fib[-2])\n    return tuple(fib)\n\n# First 15 Fibonacci numbers\nfib15 = fibonacci_tuple(15)\nprint(f'First 15 Fibonacci numbers: {fib15}')\n\n# Fibonacci numbers up to 1000\nfib_limit = fibonacci_up_to_value(1000)\nprint(f'Fibonacci numbers up to 1000: {fib_limit}')\n\n# Ratios (golden ratio approximation)\nprint('\\nRatios (approaching golden ratio):')\nfor i in range(2, len(fib15)):\n    ratio = fib15[i] / fib15[i-1]\n    print(f'  {fib15[i-1]}, {fib15[i]} -> {ratio:.6f}')",
    hint: "Generate list first, then convert to tuple"
  },
  {
    Id: "py_tuple_29",
    topicId: "py_tuple",
    question: "Check if a tuple is a palindrome (reads same forwards and backwards).",
    mathSolution: "Compare tuple with its reverse",
    codeSolution: "def is_palindrome_tuple(tup):\n    return tup == tup[::-1]\n\n# Test cases\ntest_tuples = [\n    (1, 2, 3, 2, 1),\n    (1, 2, 3, 3, 2, 1),\n    (1, 2, 3, 4, 5),\n    ('a', 'b', 'c', 'b', 'a'),\n    (1,),\n    (),\n    (1, 2, 1)\n]\n\nfor tup in test_tuples:\n    result = is_palindrome_tuple(tup)\n    print(f'{tup} -> palindrome: {result}')\n\n# Manual check without slicing\ndef is_palindrome_manual(tup):\n    for i in range(len(tup) // 2):\n        if tup[i] != tup[-(i+1)]:\n            return False\n    return True\n\nprint('\\nManual check:')\nfor tup in test_tuples:\n    print(f'{tup} -> {is_palindrome_manual(tup)}')",
    hint: "Compare with reversed tuple using slicing [::-1]"
  },
  {
    Id: "py_tuple_30",
    topicId: "py_tuple",
    question: "Find all pairs in a tuple that sum to a target value.",
    mathSolution: "Use two-pointer or hash set approach",
    codeSolution: "def find_pairs(tup, target):\n    seen = set()\n    pairs = []\n    \n    for num in tup:\n        complement = target - num\n        if complement in seen:\n            pairs.append((complement, num))\n        seen.add(num)\n    \n    return tuple(pairs)\n\ndef find_pairs_two_pointer(sorted_tup, target):\n    # Works only on sorted tuple\n    pairs = []\n    left, right = 0, len(sorted_tup) - 1\n    \n    while left < right:\n        current_sum = sorted_tup[left] + sorted_tup[right]\n        if current_sum == target:\n            pairs.append((sorted_tup[left], sorted_tup[right]))\n            left += 1\n            right -= 1\n        elif current_sum < target:\n            left += 1\n        else:\n            right -= 1\n    \n    return tuple(pairs)\n\nnumbers = (2, 7, 11, 15, 3, 6, 8, 4, 5)\ntarget = 10\n\nprint(f'Numbers: {numbers}')\nprint(f'Target sum: {target}')\n\npairs = find_pairs(numbers, target)\nprint(f'Pairs summing to {target}: {pairs}')\n\n# With sorted tuple\nsorted_numbers = tuple(sorted(numbers))\nprint(f'\\nSorted numbers: {sorted_numbers}')\npairs_sorted = find_pairs_two_pointer(sorted_numbers, target)\nprint(f'Pairs using two-pointer: {pairs_sorted}')",
    hint: "Use set to track seen numbers for O(n) solution"
  },
  {
    Id: "py_tuple_31",
    topicId: "py_tuple",
    question: "Rotate a tuple by k positions to the left or right.",
    mathSolution: "Slice and concatenate for rotation",
    codeSolution: "def rotate_left(tup, k):\n    if not tup:\n        return tup\n    k = k % len(tup)\n    return tup[k:] + tup[:k]\n\ndef rotate_right(tup, k):\n    if not tup:\n        return tup\n    k = k % len(tup)\n    return tup[-k:] + tup[:-k]\n\noriginal = (1, 2, 3, 4, 5, 6, 7)\nprint(f'Original: {original}')\n\n# Left rotations\nfor k in [2, 4, 7, 9]:\n    rotated = rotate_left(original, k)\n    print(f'Left rotate by {k}: {rotated}')\n\n# Right rotations\nprint('\\nRight rotations:')\nfor k in [2, 3, 5]:\n    rotated = rotate_right(original, k)\n    print(f'Right rotate by {k}: {rotated}')\n\n# Multiple rotations\nprint('\\nSequence of rotations:')\ntemp = original\nfor k in [2, 3, 1]:\n    temp = rotate_left(temp, k)\n    print(f'After rotate left {k}: {temp}')",
    hint: "Use modulo to handle k > length, slice and concatenate"
  },
  {
    Id: "py_tuple_32",
    topicId: "py_tuple",
    question: "Find the longest increasing subsequence in a tuple.",
    mathSolution: "Dynamic programming for LIS",
    codeSolution: "def longest_increasing_subsequence(tup):\n    if not tup:\n        return ()\n    \n    n = len(tup)\n    # dp[i] = length of LIS ending at i\n    dp = [1] * n\n    # prev[i] = previous index in LIS\n    prev = [-1] * n\n    \n    for i in range(n):\n        for j in range(i):\n            if tup[j] < tup[i] and dp[j] + 1 > dp[i]:\n                dp[i] = dp[j] + 1\n                prev[i] = j\n    \n    # Find maximum length ending index\n    max_len = max(dp)\n    end_idx = dp.index(max_len)\n    \n    # Reconstruct subsequence\n    result = []\n    while end_idx != -1:\n        result.append(tup[end_idx])\n        end_idx = prev[end_idx]\n    \n    return tuple(reversed(result))\n\n# Test cases\nsequences = [\n    (3, 10, 2, 1, 20),\n    (50, 3, 10, 7, 40, 80),\n    (10, 22, 9, 33, 21, 50, 41, 60, 80),\n    (1, 2, 3, 4, 5),\n    (5, 4, 3, 2, 1)\n]\n\nfor seq in sequences:\n    lis = longest_increasing_subsequence(seq)\n    print(f'Sequence: {seq}')\n    print(f'LIS: {lis}, length: {len(lis)}\\n')",
    hint: "Use dynamic programming O(n²) or binary search O(n log n)"
  },
  {
    Id: "py_tuple_33",
    topicId: "py_tuple",
    question: "Implement matrix operations using tuple of tuples.",
    mathSolution: "Represent matrix as tuple of tuples, implement operations",
    codeSolution: "def create_matrix(rows, cols, default=0):\n    return tuple(tuple(default for _ in range(cols)) for _ in range(rows))\n\ndef matrix_add(m1, m2):\n    if len(m1) != len(m2) or len(m1[0]) != len(m2[0]):\n        raise ValueError('Matrices must have same dimensions')\n    \n    result = []\n    for i in range(len(m1)):\n        row = []\n        for j in range(len(m1[0])):\n            row.append(m1[i][j] + m2[i][j])\n        result.append(tuple(row))\n    return tuple(result)\n\ndef matrix_multiply(m1, m2):\n    if len(m1[0]) != len(m2):\n        raise ValueError('Invalid dimensions for multiplication')\n    \n    result = []\n    for i in range(len(m1)):\n        row = []\n        for j in range(len(m2[0])):\n            sum_val = 0\n            for k in range(len(m2)):\n                sum_val += m1[i][k] * m2[k][j]\n            row.append(sum_val)\n        result.append(tuple(row))\n    return tuple(result)\n\ndef display_matrix(matrix, name='Matrix'):\n    print(f'{name}:')\n    for row in matrix:\n        print('  ' + ' '.join(f'{x:4}' for x in row))\n\n# Create matrices\nm1 = ((1, 2, 3), (4, 5, 6))\nm2 = ((7, 8, 9), (10, 11, 12))\nm3 = ((1, 2), (3, 4), (5, 6))\n\ndisplay_matrix(m1, 'Matrix A')\ndisplay_matrix(m2, 'Matrix B')\n\n# Addition\nresult = matrix_add(m1, m2)\ndisplay_matrix(result, 'A + B')\n\n# Multiplication\nresult2 = matrix_multiply(m1, m3)\ndisplay_matrix(result2, 'A × C')\n\n# Identity matrix\nidentity = ((1, 0, 0), (0, 1, 0), (0, 0, 1))\ndisplay_matrix(identity, 'Identity')",
    hint: "Tuples are immutable, so operations return new tuples"
  },
  {
    Id: "py_tuple_34",
    topicId: "py_tuple",
    question: "Find the kth largest element in a tuple.",
    mathSolution: "Sort and index, or use selection algorithm",
    codeSolution: "def kth_largest_sort(tup, k):\n    if k < 1 or k > len(tup):\n        raise ValueError('k out of range')\n    sorted_tup = tuple(sorted(tup, reverse=True))\n    return sorted_tup[k-1]\n\ndef kth_largest_manual(tup, k):\n    if k < 1 or k > len(tup):\n        raise ValueError('k out of range')\n    \n    # Convert to list for manipulation\n    lst = list(tup)\n    for _ in range(k):\n        max_val = max(lst)\n        max_idx = lst.index(max_val)\n        lst.pop(max_idx)\n    return max_val\n\nnumbers = (3, 7, 1, 9, 4, 8, 2, 5, 6)\nprint(f'Numbers: {numbers}')\n\nfor k in range(1, 6):\n    kth = kth_largest_sort(numbers, k)\n    print(f'{k}th largest (sorted): {kth}')\n\nprint('\\nUsing manual method:')\nfor k in range(1, 6):\n    kth = kth_largest_manual(numbers, k)\n    print(f'{k}th largest (manual): {kth}')\n\n# Top k largest\ndef top_k_largest(tup, k):\n    return tuple(sorted(tup, reverse=True)[:k])\n\nprint(f'\\nTop 3 largest: {top_k_largest(numbers, 3)}')",
    hint: "Sorting gives O(n log n), selection algorithms can be O(n)"
  },
  {
    Id: "py_tuple_35",
    topicId: "py_tuple",
    question: "Find the median of a tuple.",
    mathSolution: "Sort and find middle element(s)",
    codeSolution: "def median(tup):\n    if not tup:\n        return None\n    \n    sorted_tup = sorted(tup)\n    n = len(sorted_tup)\n    mid = n // 2\n    \n    if n % 2 == 1:\n        return sorted_tup[mid]\n    else:\n        return (sorted_tup[mid-1] + sorted_tup[mid]) / 2\n\n# Test cases\ntest_tuples = [\n    (1, 2, 3, 4, 5),\n    (1, 2, 3, 4, 5, 6),\n    (5, 2, 8, 1, 9),\n    (10, 20, 30, 40),\n    (7,),\n    ()\n]\n\nfor tup in test_tuples:\n    med = median(tup)\n    print(f'{tup} -> median: {med}')\n\n# With custom key (for strings)\nwords = ('apple', 'banana', 'kiwi', 'orange', 'grape')\nprint(f'\\nWords: {words}')\nprint(f'Median by length: {median(tuple(sorted(words, key=len)))}')\nprint(f'Median alphabetically: {median(tuple(sorted(words)))}')",
    hint: "For even length, average of two middle elements"
  },
  {
    Id: "py_tuple_36",
    topicId: "py_tuple",
    question: "Find all permutations of a tuple.",
    mathSolution: "Use itertools.permutations",
    codeSolution: "from itertools import permutations\n\ndef all_permutations(tup):\n    return tuple(permutations(tup))\n\n# Small tuple\nsmall = (1, 2, 3)\nperms = all_permutations(small)\nprint(f'All permutations of {small}:')\nfor i, perm in enumerate(perms, 1):\n    print(f'  {i}. {perm}')\nprint(f'Total: {len(perms)}')\n\n# With repeated elements (permutations treats as distinct by position)\nrepeated = (1, 1, 2)\nperms2 = tuple(set(permutations(repeated)))  # Use set to remove duplicates\nprint(f'\\nUnique permutations of {repeated}:')\nfor perm in sorted(perms2):\n    print(f'  {perm}')\nprint(f'Total unique: {len(perms2)}')\n\n# Permutations of different lengths\nfor r in range(1, 4):\n    perms_r = tuple(permutations((1, 2, 3, 4), r))\n    print(f'\\nPermutations of length {r}: {len(perms_r)}')",
    hint: "Use itertools.permutations, use set for unique if elements repeat"
  },
  {
    Id: "py_tuple_37",
    topicId: "py_tuple",
    question: "Find all combinations of a tuple of a given length.",
    mathSolution: "Use itertools.combinations",
    codeSolution: "from itertools import combinations\n\ndef all_combinations(tup, r):\n    return tuple(combinations(tup, r))\n\nitems = ('A', 'B', 'C', 'D')\nprint(f'Items: {items}')\n\n# Combinations of different lengths\nfor r in range(1, len(items) + 1):\n    combs = all_combinations(items, r)\n    print(f'\\nCombinations of length {r} ({len(combs)} total):')\n    for i, comb in enumerate(combs, 1):\n        print(f'  {i}. {comb}')\n\n# With numbers\nnumbers = (1, 2, 3, 4, 5)\ncombs_3 = all_combinations(numbers, 3)\nprint(f'\\nAll 3-element combinations of {numbers}:')\nfor comb in combs_3[:10]:  # Show first 10\n    print(f'  {comb}')\nprint(f'  ... and {len(combs_3) - 10} more' if len(combs_3) > 10 else '')",
    hint: "combinations returns tuples in lexicographic order"
  },
  {
    Id: "py_tuple_38",
    topicId: "py_tuple",
    question: "Find the Cartesian product of two tuples.",
    mathSolution: "Use itertools.product",
    codeSolution: "from itertools import product\n\ndef cartesian_product(tup1, tup2):\n    return tuple(product(tup1, tup2))\n\ntuple1 = (1, 2, 3)\ntuple2 = ('a', 'b')\n\nprint(f'Tuple1: {tuple1}')\nprint(f'Tuple2: {tuple2}')\n\nproduct_result = cartesian_product(tuple1, tuple2)\nprint(f'Cartesian product:')\nfor pair in product_result:\n    print(f'  {pair}')\nprint(f'Total: {len(product_result)}')\n\n# Multiple tuples\ncolors = ('red', 'green')\nsizes = ('S', 'M', 'L')\nstyles = ('casual', 'formal')\n\nall_products = tuple(product(colors, sizes, styles))\nprint(f'\\nColors, sizes, styles combinations:')\nfor i, item in enumerate(all_products[:10], 1):\n    print(f'  {i}. {item}')\nprint(f'  ... total: {len(all_products)}')\n\n# With repeat parameter\ndice_rolls = tuple(product(range(1, 7), repeat=2))\nprint(f'\\nAll dice roll combinations: {len(dice_rolls)}')",
    hint: "product returns all ordered pairs (i,j) from both tuples"
  },
  {
    Id: "py_tuple_39",
    topicId: "py_tuple",
    question: "Implement a priority queue using tuples (priority, item).",
    mathSolution: "Use tuple with priority as first element for automatic sorting",
    codeSolution: "import heapq\n\nclass PriorityQueue:\n    def __init__(self):\n        self._queue = []\n        self._index = 0\n    \n    def push(self, item, priority):\n        # Negative priority for max-heap behavior (higher priority first)\n        # Index ensures stable sorting for same priority\n        heapq.heappush(self._queue, (-priority, self._index, item))\n        self._index += 1\n    \n    def pop(self):\n        if self._queue:\n            return heapq.heappop(self._queue)[-1]\n        return None\n    \n    def is_empty(self):\n        return len(self._queue) == 0\n\n# Test priority queue\npq = PriorityQueue()\n\n# Add items with different priorities\npq.push('Task 1', 3)\npq.push('Task 2', 1)\npq.push('Task 3', 5)\npq.push('Task 4', 2)\npq.push('Task 5', 3)\n\nprint('Processing items by priority:')\nwhile not pq.is_empty():\n    item = pq.pop()\n    print(f'  Processing: {item}')\n\n# Manual tuple list for sorting\ntasks = [\n    (3, 'Write code'),\n    (1, 'Check email'),\n    (5, 'Emergency fix'),\n    (2, 'Meeting'),\n    (4, 'Review PR')\n]\n\n# Sort by priority\nsorted_tasks = sorted(tasks)\nprint('\\nTasks sorted by priority:')\nfor priority, task in sorted_tasks:\n    print(f'  Priority {priority}: {task}')",
    hint: "Use heap for priority queue, tuples sort by first element then second"
  },
  {
    Id: "py_tuple_40",
    topicId: "py_tuple",
    question: "Create a sparse vector representation using tuples (index, value).",
    mathSolution: "Store only non-zero elements as (index, value) tuples",
    codeSolution: "class SparseVector:\n    def __init__(self, size, elements=None):\n        self.size = size\n        if elements:\n            # Store as sorted tuple of (index, value) tuples\n            self.elements = tuple(sorted((i, v) for i, v in elements if v != 0))\n        else:\n            self.elements = ()\n    \n    def __getitem__(self, idx):\n        if idx < 0 or idx >= self.size:\n            raise IndexError('Index out of range')\n        \n        # Binary search for index\n        for i, val in self.elements:\n            if i == idx:\n                return val\n            if i > idx:\n                break\n        return 0\n    \n    def __add__(self, other):\n        if self.size != other.size:\n            raise ValueError('Vectors must have same size')\n        \n        # Merge two sparse representations\n        result = []\n        i = j = 0\n        \n        while i < len(self.elements) and j < len(other.elements):\n            idx1, val1 = self.elements[i]\n            idx2, val2 = other.elements[j]\n            \n            if idx1 < idx2:\n                result.append((idx1, val1))\n                i += 1\n            elif idx2 < idx1:\n                result.append((idx2, val2))\n                j += 1\n            else:\n                if val1 + val2 != 0:\n                    result.append((idx1, val1 + val2))\n                i += 1\n                j += 1\n        \n        # Add remaining elements\n        result.extend(self.elements[i:])\n        result.extend(other.elements[j:])\n        \n        return SparseVector(self.size, result)\n    \n    def dot_product(self, other):\n        if self.size != other.size:\n            raise ValueError('Vectors must have same size')\n        \n        result = 0\n        i = j = 0\n        \n        while i < len(self.elements) and j < len(other.elements):\n            idx1, val1 = self.elements[i]\n            idx2, val2 = other.elements[j]\n            \n            if idx1 < idx2:\n                i += 1\n            elif idx2 < idx1:\n                j += 1\n            else:\n                result += val1 * val2\n                i += 1\n                j += 1\n        \n        return result\n    \n    def __str__(self):\n        return f'SparseVector(size={self.size}, elements={self.elements})'\n\n# Create sparse vectors\nv1 = SparseVector(10, [(2, 3.5), (5, 2.0), (7, 1.5)])\nv2 = SparseVector(10, [(2, 1.5), (5, 1.0), (8, 4.0)])\n\nprint(f'v1: {v1}')\nprint(f'v2: {v2}')\nprint(f'v1[2] = {v1[2]}')\nprint(f'v1[3] = {v1[3]}')\n\nv3 = v1 + v2\nprint(f'\\nv1 + v2 = {v3}')\n\ndot = v1.dot_product(v2)\nprint(f'v1 · v2 = {dot}')",
    hint: "Store only non-zero indices with values, keep sorted for efficiency"
  },
  {
    Id: "py_tuple_41",
    topicId: "py_tuple",
    question: "Implement a simple database record using namedtuple.",
    mathSolution: "Use namedtuple for structured data with named fields",
    codeSolution: "from collections import namedtuple\nfrom datetime import date\n\n# Define record types\nEmployee = namedtuple('Employee', ['id', 'name', 'department', 'salary', 'hire_date'])\nProduct = namedtuple('Product', ['sku', 'name', 'price', 'in_stock'])\n\n# Create records\nemp1 = Employee(101, 'John Doe', 'Engineering', 75000, date(2020, 5, 15))\nemp2 = Employee(102, 'Jane Smith', 'Marketing', 65000, date(2021, 3, 10))\nemp3 = Employee(103, 'Bob Johnson', 'Engineering', 82000, date(2019, 11, 1))\n\nproduct1 = Product('SKU123', 'Laptop', 999.99, True)\nproduct2 = Product('SKU456', 'Mouse', 29.99, True)\nproduct3 = Product('SKU789', 'Keyboard', 79.99, False)\n\n# Database as tuple of records\nemployees = (emp1, emp2, emp3)\nproducts = (product1, product2, product3)\n\n# Query functions\ndef get_employees_by_dept(employees, dept):\n    return tuple(e for e in employees if e.department == dept)\n\ndef get_employees_hired_after(employees, cutoff_date):\n    return tuple(e for e in employees if e.hire_date > cutoff_date)\n\ndef get_products_in_stock(products):\n    return tuple(p for p in products if p.in_stock)\n\nprint('All employees:')\nfor emp in employees:\n    print(f'  {emp.id}: {emp.name}, {emp.department}, ${emp.salary}, hired {emp.hire_date}')\n\nprint('\\nEngineering department:')\neng_emps = get_employees_by_dept(employees, 'Engineering')\nfor emp in eng_emps:\n    print(f'  {emp.name}')\n\nprint('\\nHired after 2020:')\nrecent = get_employees_hired_after(employees, date(2020, 1, 1))\nfor emp in recent:\n    print(f'  {emp.name} - {emp.hire_date}')\n\nprint('\\nProducts in stock:')\nin_stock = get_products_in_stock(products)\nfor prod in in_stock:\n    print(f'  {prod.name} (${prod.price})')",
    hint: "Namedtuple provides attribute access like classes but immutable like tuples"
  },
  {
    Id: "py_tuple_42",
    topicId: "py_tuple",
    question: "Find the longest common prefix among strings in a tuple.",
    mathSolution: "Compare characters at each position across all strings",
    codeSolution: "def longest_common_prefix(words):\n    if not words:\n        return ''\n    \n    prefix = ''\n    # Take first word as reference\n    for i, char in enumerate(words[0]):\n        # Check if all other words have same character at position i\n        for word in words[1:]:\n            if i >= len(word) or word[i] != char:\n                return prefix\n        prefix += char\n    \n    return prefix\n\n# Test cases\ntest_tuples = [\n    ('flower', 'flow', 'flight'),\n    ('dog', 'racecar', 'car'),\n    ('interspecies', 'interstellar', 'interstate'),\n    ('throne', 'throne'),\n    ('', 'test'),\n    ('python', 'pythonic', 'pyth'),\n    ('apple', 'apricot', 'april')\n]\n\nfor words in test_tuples:\n    prefix = longest_common_prefix(words)\n    print(f'Words: {words}')\n    print(f'Longest common prefix: \"{prefix}\"\\n')\n\n# Using zip for a more Pythonic approach\ndef lcp_zip(words):\n    if not words:\n        return ''\n    \n    result = []\n    for chars in zip(*words):\n        if len(set(chars)) == 1:\n            result.append(chars[0])\n        else:\n            break\n    return ''.join(result)\n\nprint('Using zip approach:')\nfor words in test_tuples:\n    prefix = lcp_zip(words)\n    print(f'  {words} -> \"{prefix}\"')",
    hint: "Compare character by character, stop when mismatch or end reached"
  },
  {
    Id: "py_tuple_43",
    topicId: "py_tuple",
    question: "Find the longest increasing subsequence length (not the subsequence itself).",
    mathSolution: "Dynamic programming O(n²) or patience sorting O(n log n)",
    codeSolution: "def lis_length(tup):\n    if not tup:\n        return 0\n    \n    n = len(tup)\n    dp = [1] * n\n    \n    for i in range(n):\n        for j in range(i):\n            if tup[j] < tup[i]:\n                dp[i] = max(dp[i], dp[j] + 1)\n    \n    return max(dp)\n\ndef lis_length_patience(tup):\n    # Patience sorting method - O(n log n)\n    import bisect\n    \n    piles = []\n    for num in tup:\n        pos = bisect.bisect_left(piles, num)\n        if pos == len(piles):\n            piles.append(num)\n        else:\n            piles[pos] = num\n    \n    return len(piles)\n\n# Test cases\nsequences = [\n    (10, 9, 2, 5, 3, 7, 101, 18),\n    (0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15),\n    (3, 10, 2, 1, 20),\n    (1, 2, 3, 4, 5),\n    (5, 4, 3, 2, 1),\n    ()\n]\n\nfor seq in sequences:\n    length1 = lis_length(seq)\n    length2 = lis_length_patience(seq) if seq else 0\n    print(f'Sequence: {seq}')\n    print(f'  LIS length (DP): {length1}')\n    print(f'  LIS length (Patience): {length2}\\n')",
    hint: "DP: dp[i] = max length ending at i; Patience: binary search on piles"
  },
  {
    Id: "py_tuple_44",
    topicId: "py_tuple",
    question: "Find the maximum product subarray in a tuple of integers.",
    mathSolution: "Track max and min products due to negative numbers",
    codeSolution: "def max_product_subarray(tup):\n    if not tup:\n        return 0\n    \n    max_ending_here = min_ending_here = tup[0]\n    max_so_far = tup[0]\n    \n    for num in tup[1:]:\n        # If current number is negative, max and min swap\n        if num < 0:\n            max_ending_here, min_ending_here = min_ending_here, max_ending_here\n        \n        max_ending_here = max(num, max_ending_here * num)\n        min_ending_here = min(num, min_ending_here * num)\n        \n        max_so_far = max(max_so_far, max_ending_here)\n    \n    return max_so_far\n\n# Test cases\ntest_tuples = [\n    (2, 3, -2, 4),\n    (-2, 0, -1),\n    (-2, -3, 4, -1, -2),\n    (0, 2, -3, 4, -1, 0, 2, -2, 3),\n    (-2, -3, -4),\n    (1, 2, 3, 4, 5),\n    ()\n]\n\nfor tup in test_tuples:\n    result = max_product_subarray(tup)\n    print(f'Tuple: {tup}')\n    print(f'Maximum product subarray: {result}\\n')",
    hint: "Track both max and min products because negatives can become positive"
  },
  {
    Id: "py_tuple_45",
    topicId: "py_tuple",
    question: "Find the missing number in a tuple containing numbers from 1 to n with one missing.",
    mathSolution: "Sum formula: n(n+1)/2 - actual sum",
    codeSolution: "def find_missing_number(tup, n):\n    expected_sum = n * (n + 1) // 2\n    actual_sum = sum(tup)\n    return expected_sum - actual_sum\n\ndef find_missing_xor(tup, n):\n    xor_all = 0\n    xor_tup = 0\n    \n    # XOR all numbers from 1 to n\n    for i in range(1, n + 1):\n        xor_all ^= i\n    \n    # XOR all numbers in tuple\n    for num in tup:\n        xor_tup ^= num\n    \n    return xor_all ^ xor_tup\n\n# Test cases\ntest_cases = [\n    ((1, 2, 4, 5, 6), 6),\n    ((1, 2, 3, 4, 6, 7, 8), 8),\n    ((2, 3, 4, 5, 6, 7, 8, 9, 10), 10),\n    ((1, 2, 3, 4, 5, 6, 7, 8, 10), 10),\n    ((), 1)  # Missing 1\n]\n\nfor tup, n in test_cases:\n    missing1 = find_missing_number(tup, n)\n    missing2 = find_missing_xor(tup, n) if tup else 1\n    print(f'Tuple: {tup}, n={n}')\n    print(f'  Missing (sum method): {missing1}')\n    print(f'  Missing (XOR method): {missing2}\\n')",
    hint: "Use sum formula or XOR (a⊕a=0, a⊕0=a)"
  },
  {
    Id: "py_tuple_46",
    topicId: "py_tuple",
    question: "Find the duplicate number in a tuple containing numbers from 1 to n with one duplicate.",
    mathSolution: "Sum difference or Floyd's cycle detection",
    codeSolution: "def find_duplicate_sum(tup, n):\n    expected_sum = n * (n + 1) // 2\n    actual_sum = sum(tup)\n    # Duplicate = actual_sum - (expected_sum - missing)\n    # But we don't know missing, so this doesn't work directly\n    # This method requires knowing which number is missing\n    return None\n\ndef find_duplicate_set(tup):\n    seen = set()\n    for num in tup:\n        if num in seen:\n            return num\n        seen.add(num)\n    return None\n\ndef find_duplicate_xor(tup, n):\n    xor_all = 0\n    xor_tup = 0\n    \n    # XOR all numbers from 1 to n\n    for i in range(1, n + 1):\n        xor_all ^= i\n    \n    # XOR all numbers in tuple\n    for num in tup:\n        xor_tup ^= num\n    \n    # xor_all ^ xor_tup gives missing ^ duplicate\n    # But we need another method to separate\n    return None\n\n# Test cases\ntest_cases = [\n    ((1, 2, 3, 4, 5, 3), 5),\n    ((1, 2, 3, 4, 5, 5, 6, 7, 8), 8),\n    ((1, 1, 2, 3, 4), 4),\n    ((1, 2, 3, 4, 5, 6, 7, 8, 9, 5), 9)\n]\n\nfor tup, n in test_cases:\n    duplicate = find_duplicate_set(tup)\n    print(f'Tuple: {tup}, n={n}')\n    print(f'  Duplicate: {duplicate}\\n')",
    hint: "Use set to track seen numbers, or Floyd's cycle detection for O(1) space"
  },
  {
    Id: "py_tuple_47",
    topicId: "py_tuple",
    question: "Find all pairs in a tuple that have a given difference.",
    mathSolution: "Use set for O(n) solution",
    codeSolution: "def find_pairs_with_difference(tup, diff):\n    seen = set()\n    pairs = set()  # Use set to avoid duplicates\n    \n    for num in tup:\n        # Check for num + diff\n        if num + diff in seen:\n            pairs.add((num, num + diff))\n        # Check for num - diff\n        if num - diff in seen:\n            pairs.add((num - diff, num))\n        seen.add(num)\n    \n    return tuple(sorted(pairs))\n\nnumbers = (1, 5, 3, 4, 2, 7, 9, 6, 8, 10)\ndifferences = [1, 2, 3, 4, 5]\n\nprint(f'Numbers: {numbers}\\n')\n\nfor diff in differences:\n    pairs = find_pairs_with_difference(numbers, diff)\n    print(f'Pairs with difference {diff}:')\n    if pairs:\n        for a, b in pairs:\n            print(f'  ({a}, {b})')\n    else:\n        print('  None')\n    print()\n\n# With negative differences (absolute difference)\ndef find_pairs_absolute_difference(tup, diff):\n    seen = set()\n    pairs = set()\n    \n    for num in tup:\n        if num + diff in seen:\n            pairs.add((num, num + diff))\n        if num - diff in seen:\n            pairs.add((num - diff, num))\n        seen.add(num)\n    \n    return tuple(sorted(pairs))\n\nprint('Absolute difference:')\nfor diff in differences:\n    pairs = find_pairs_absolute_difference(numbers, diff)\n    print(f'  Diff {diff}: {len(pairs)} pairs')",
    hint: "Use set for O(1) lookup, store pairs in set to avoid duplicates"
  },
  {
    Id: "py_tuple_48",
    topicId: "py_tuple",
    question: "Find the longest consecutive sequence in a tuple.",
    mathSolution: "Use set for O(n) solution",
    codeSolution: "def longest_consecutive_sequence(tup):\n    if not tup:\n        return ()\n    \n    num_set = set(tup)\n    longest = []\n    \n    for num in num_set:\n        # Check if num is start of a sequence\n        if num - 1 not in num_set:\n            current_num = num\n            current_seq = [current_num]\n            \n            while current_num + 1 in num_set:\n                current_num += 1\n                current_seq.append(current_num)\n            \n            if len(current_seq) > len(longest):\n                longest = current_seq\n    \n    return tuple(longest)\n\n# Test cases\ntest_tuples = [\n    (100, 4, 200, 1, 3, 2),\n    (0, 3, 7, 2, 5, 8, 4, 6, 0, 1),\n    (1, 9, 3, 10, 4, 20, 2),\n    (1, 2, 3, 4, 5),\n    (5, 4, 3, 2, 1),\n    (),\n    (1, 3, 5, 7, 9)\n]\n\nfor tup in test_tuples:\n    sequence = longest_consecutive_sequence(tup)\n    print(f'Tuple: {tup}')\n    print(f'Longest consecutive sequence: {sequence}, length: {len(sequence)}\\n')",
    hint: "Check if num-1 exists to find sequence starts, then expand"
  },
  {
    Id: "py_tuple_49",
    topicId: "py_tuple",
    question: "Implement a simple memoization decorator using tuple keys.",
    mathSolution: "Use dictionary with tuple of arguments as key",
    codeSolution: "def memoize(func):\n    cache = {}\n    \n    def wrapper(*args):\n        # Use tuple of args as key\n        key = args\n        if key in cache:\n            print(f'Cache hit for {key}')\n            return cache[key]\n        \n        print(f'Cache miss for {key} - calculating')\n        result = func(*args)\n        cache[key] = result\n        return result\n    \n    return wrapper\n\n@memoize\ndef fibonacci(n):\n    if n < 2:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\n@memoize\ndef add(a, b):\n    return a + b\n\n@memoize\ndef power(base, exp):\n    return base ** exp\n\n# Test fibonacci\nprint('Fibonacci:')\nfor i in range(10):\n    print(f'fib({i}) = {fibonacci(i)}')\n\nprint('\\n' + '='*40)\n\n# Test add\nprint('Addition:')\nprint(f'add(5,3) = {add(5,3)}')\nprint(f'add(5,3) = {add(5,3)} (cached)')\nprint(f'add(2,7) = {add(2,7)}')\n\nprint('\\n' + '='*40)\n\n# Test power\nprint('Power:')\nprint(f'power(2,8) = {power(2,8)}')\nprint(f'power(2,8) = {power(2,8)} (cached)')\nprint(f'power(3,4) = {power(3,4)}')\n\n# Show cache contents (if we could access it)\n# This would require storing cache on the function object",
    hint: "Use *args to capture all arguments, convert to tuple for dictionary key"
  },
  {
    Id: "py_tuple_50",
    topicId: "py_tuple",
    question: "Find the k closest elements to a target value in a sorted tuple.",
    mathSolution: "Use binary search to find insertion point, then expand outward",
    codeSolution: "import bisect\n\ndef find_closest_elements(tup, k, target):\n    if not tup or k <= 0:\n        return ()\n    \n    n = len(tup)\n    # Find insertion point\n    pos = bisect.bisect_left(tup, target)\n    \n    # Initialize two pointers\n    left = pos - 1\n    right = pos\n    result = []\n    \n    # Collect k closest elements\n    while len(result) < k and (left >= 0 or right < n):\n        if left < 0:\n            result.append(tup[right])\n            right += 1\n        elif right >= n:\n            result.append(tup[left])\n            left -= 1\n        else:\n            # Compare distances\n            if target - tup[left] <= tup[right] - target:\n                result.append(tup[left])\n                left -= 1\n            else:\n                result.append(tup[right])\n                right += 1\n    \n    return tuple(sorted(result))  # Return in sorted order\n\n# Test cases\nsorted_tuples = [\n    (1, 2, 3, 4, 5),\n    (10, 20, 30, 40, 50),\n    (1, 3, 5, 7, 9, 11, 13),\n    (1, 2, 4, 8, 16, 32, 64),\n    (1, 1, 2, 3, 3, 4, 5, 5, 6)\n]\n\ntargets = [3, 25, 6, 10, 3]\nk_values = [3, 2, 4, 3, 5]\n\nfor tup, target, k in zip(sorted_tuples, targets, k_values):\n    closest = find_closest_elements(tup, k, target)\n    print(f'Tuple: {tup}')\n    print(f'Target: {target}, k={k}')\n    print(f'Closest {k} elements: {closest}\\n')\n\n# Edge cases\nprint('Edge cases:')\nprint(find_closest_elements((), 3, 5))\nprint(find_closest_elements((1,), 5, 1))\nprint(find_closest_elements((1, 2, 3), 2, 2))",
    hint: "Binary search for insertion point, then two pointers outward"
  }
);