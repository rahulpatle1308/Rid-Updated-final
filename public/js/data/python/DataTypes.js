QuizData.questions.push(
  {
    Id: "py_dt_1",
    topicId: "py_datatypes",
    question: "Create variables of different basic data types: int, float, str, bool and print their types.",
    mathSolution: "Use type() function to verify data types",
    codeSolution: "num_int = 10\nnum_float = 3.14\ntext_str = 'Hello'\nflag_bool = True\n\nprint(f'Type of {num_int}: {type(num_int)}')\nprint(f'Type of {num_float}: {type(num_float)}')\nprint(f'Type of {text_str}: {type(text_str)}')\nprint(f'Type of {flag_bool}: {type(flag_bool)}')",
    hint: "Use `type()` function to check data types"
  },
  {
    Id: "py_dt_2",
    topicId: "py_datatypes",
    question: "Convert a string '123' to integer and float, then perform addition.",
    mathSolution: "String to int: int('123'), to float: float('123')",
    codeSolution: "str_num = '123'\nint_num = int(str_num)\nfloat_num = float(str_num)\n\nprint(f'Integer: {int_num}, type: {type(int_num)}')\nprint(f'Float: {float_num}, type: {type(float_num)}')\nprint(f'Sum: {int_num + float_num}')",
    hint: "Use `int()` and `float()` constructors"
  },
  {
    Id: "py_dt_3",
    topicId: "py_datatypes",
    question: "Create a list of 5 numbers and perform operations: append, insert, remove.",
    mathSolution: "List operations modify the list",
    codeSolution: "numbers = [1, 2, 3, 4, 5]\nprint('Original:', numbers)\n\nnumbers.append(6)\nprint('After append:', numbers)\n\nnumbers.insert(0, 0)\nprint('After insert:', numbers)\n\nnumbers.remove(3)\nprint('After remove:', numbers)",
    hint: "Use `append()`, `insert()`, `remove()` methods"
  },
  {
    Id: "py_dt_4",
    topicId: "py_datatypes",
    question: "Create a tuple with 3 elements and try to modify it (observe the error).",
    mathSolution: "Tuples are immutable - cannot be modified",
    codeSolution: "my_tuple = (10, 20, 30)\nprint(f'Tuple: {my_tuple}, type: {type(my_tuple)}')\n\n# This will cause an error\n# my_tuple[0] = 100  # Uncomment to see TypeError\n\nprint('Tuples are immutable - cannot be modified')",
    hint: "Tuples use parentheses and cannot be changed after creation"
  },
  {
    Id: "py_dt_5",
    topicId: "py_datatypes",
    question: "Create a dictionary with 3 key-value pairs and access values by keys.",
    mathSolution: "Dictionary maps keys to values",
    codeSolution: "student = {\n    'name': 'John',\n    'age': 20,\n    'grade': 'A'\n}\n\nprint(f'Name: {student[\"name\"]}')\nprint(f'Age: {student[\"age\"]}')\nprint(f'Grade: {student[\"grade\"]}')\n\n# Using get() method\nprint(f'City: {student.get(\"city\", \"Not found\")}')",
    hint: "Access values using keys in square brackets or `get()` method"
  },
  {
    Id: "py_dt_6",
    topicId: "py_datatypes",
    question: "Create a set of numbers and perform union and intersection operations.",
    mathSolution: "Set operations combine or find common elements",
    codeSolution: "set1 = {1, 2, 3, 4, 5}\nset2 = {4, 5, 6, 7, 8}\n\nprint(f'Set1: {set1}')\nprint(f'Set2: {set2}')\n\nunion = set1 | set2  # or set1.union(set2)\nprint(f'Union: {union}')\n\nintersection = set1 & set2  # or set1.intersection(set2)\nprint(f'Intersection: {intersection}')",
    hint: "Use `|` for union, `&` for intersection"
  },
  {
    Id: "py_dt_7",
    topicId: "py_datatypes",
    question: "Check if a variable is of a specific type using isinstance().",
    mathSolution: "isinstance() checks type inheritance",
    codeSolution: "data = [1, 2, 3]\n\nif isinstance(data, list):\n    print('data is a list')\nif isinstance(data, (list, tuple)):\n    print('data is either list or tuple')\nif isinstance(data, (int, float)):\n    print('data is number')\nelse:\n    print('data is not a number')",
    hint: "`isinstance()` accepts a tuple of types"
  },
  {
    Id: "py_dt_8",
    topicId: "py_datatypes",
    question: "Create a list with mixed data types and access elements by index.",
    mathSolution: "Lists can hold any data type",
    codeSolution: "mixed_list = [10, 'Hello', 3.14, True, [1, 2]]\n\nfor i, item in enumerate(mixed_list):\n    print(f'Index {i}: {item} (type: {type(item)})')\n\nprint(f'First element: {mixed_list[0]}')\nprint(f'Last element: {mixed_list[-1]}')",
    hint: "Lists can contain any Python objects"
  },
  {
    Id: "py_dt_9",
    topicId: "py_datatypes",
    question: "Convert between different number systems: binary, octal, hexadecimal.",
    mathSolution: "bin(), oct(), hex() convert to different bases",
    codeSolution: "num = 42\n\nbinary = bin(num)\noctal = oct(num)\nhexadecimal = hex(num)\n\nprint(f'Decimal {num}:')\nprint(f'Binary: {binary}')\nprint(f'Octal: {octal}')\nprint(f'Hexadecimal: {hexadecimal}')\n\n# Convert back\nprint(f'Back to decimal: {int(binary, 2)}')",
    hint: "Use `bin()`, `oct()`, `hex()` for conversion"
  },
  {
    Id: "py_dt_10",
    topicId: "py_datatypes",
    question: "Create a string and perform various operations: upper, lower, split, join.",
    mathSolution: "String methods return new strings",
    codeSolution: "text = 'Hello, World!'\n\nprint(f'Original: {text}')\nprint(f'Upper: {text.upper()}')\nprint(f'Lower: {text.lower()}')\nprint(f'Title: {text.title()}')\n\nwords = text.split(',')\nprint(f'Split: {words}')\n\njoined = ' - '.join(words)\nprint(f'Joined: {joined}')",
    hint: "Strings are immutable - methods return new strings"
  },
  {
    Id: "py_dt_11",
    topicId: "py_datatypes",
    question: "Create a list using list comprehension to generate squares of numbers 1-10.",
    mathSolution: "[x² for x in range(1, 11)]",
    codeSolution: "squares = [x**2 for x in range(1, 11)]\nprint(f'Squares: {squares}')\n\n# Even squares only\neven_squares = [x**2 for x in range(1, 11) if x**2 % 2 == 0]\nprint(f'Even squares: {even_squares}')",
    hint: "Syntax: [expression for item in iterable if condition]"
  },
  {
    Id: "py_dt_12",
    topicId: "py_datatypes",
    question: "Create a dictionary using dict comprehension for number: square pairs.",
    mathSolution: "{x: x² for x in range(1, 6)}",
    codeSolution: "square_dict = {x: x**2 for x in range(1, 6)}\nprint(f'Square dictionary: {square_dict}')\n\n# Filtered dictionary\nodd_squares = {x: x**2 for x in range(1, 6) if x % 2 == 1}\nprint(f'Odd squares: {odd_squares}')",
    hint: "Syntax: {key: value for item in iterable if condition}"
  },
  {
    Id: "py_dt_13",
    topicId: "py_datatypes",
    question: "Work with complex numbers: create, access real/imag parts, perform operations.",
    mathSolution: "Complex numbers: a + bj",
    codeSolution: "c1 = 3 + 4j\nc2 = complex(2, -3)\n\nprint(f'c1: {c1}, real: {c1.real}, imag: {c1.imag}')\nprint(f'c2: {c2}, real: {c2.real}, imag: {c2.imag}')\n\nprint(f'Addition: {c1 + c2}')\nprint(f'Multiplication: {c1 * c2}')\nprint(f'Conjugate of c1: {c1.conjugate()}')",
    hint: "Use `.real` and `.imag` to access parts"
  },
  {
    Id: "py_dt_14",
    topicId: "py_datatypes",
    question: "Create a frozenset and demonstrate its immutability.",
    mathSolution: "Frozenset is immutable version of set",
    codeSolution: "normal_set = {1, 2, 3}\nfrozen = frozenset(normal_set)\n\nprint(f'Frozenset: {frozen}, type: {type(frozen)}')\n\n# These operations work\nprint(f'Union: {frozen | {4, 5}}')\nprint(f'Intersection: {frozen & {2, 3, 4}}')\n\n# These will cause errors\n# frozen.add(4)  # AttributeError\n# frozen.remove(1)  # AttributeError",
    hint: "Use `frozenset()` to create immutable set"
  },
  {
    Id: "py_dt_15",
    topicId: "py_datatypes",
    question: "Use range() to generate sequences and convert to list.",
    mathSolution: "range(start, stop, step) generates arithmetic progression",
    codeSolution: "r1 = range(5)  # 0 to 4\nr2 = range(2, 8)  # 2 to 7\nr3 = range(1, 10, 2)  # odd numbers 1 to 9\n\nprint(f'range(5): {list(r1)}')\nprint(f'range(2,8): {list(r2)}')\nprint(f'range(1,10,2): {list(r3)}')\n\n# Sum of even numbers 1-10\neven_sum = sum(range(2, 11, 2))\nprint(f'Sum of evens 1-10: {even_sum}')",
    hint: "Convert range to list with `list()` to see values"
  },
  {
    Id: "py_dt_16",
    topicId: "py_datatypes",
    question: "Create a bytearray and modify its elements.",
    mathSolution: "Bytearray is mutable sequence of bytes",
    codeSolution: "ba = bytearray([65, 66, 67, 68])\nprint(f'Original bytearray: {ba}')\nprint(f'As string: {ba.decode()}')\n\nba[0] = 97  # 'a'\nba.append(69)  # 'E'\nprint(f'Modified: {ba}')\nprint(f'As string: {ba.decode()}')",
    hint: "Bytes values must be in range 0-255"
  },
  {
    Id: "py_dt_17",
    topicId: "py_datatypes",
    question: "Use memoryview to access buffer protocol of bytes object.",
    mathSolution: "Memoryview allows zero-copy slicing",
    codeSolution: "data = bytearray(b'Hello World')\nview = memoryview(data)\n\nprint(f'Original: {data}')\nprint(f'View: {view}')\nprint(f'First 5 bytes: {view[:5].tobytes()}')\n\n# Modify through view\nview[6:11] = b'Python'\nprint(f'Modified: {data}')",
    hint: "Memoryview shares memory with original object"
  },
  {
    Id: "py_dt_18",
    topicId: "py_datatypes",
    question: "Create a namedtuple from collections module.",
    mathSolution: "Namedtuple creates tuple with named fields",
    codeSolution: "from collections import namedtuple\n\nPoint = namedtuple('Point', ['x', 'y'])\np1 = Point(10, 20)\np2 = Point(x=30, y=40)\n\nprint(f'Point1: {p1}')\nprint(f'Point2: {p2}')\nprint(f'p1.x: {p1.x}, p1.y: {p1.y}')\nprint(f'Access by index: {p1[0]}, {p1[1]}')\n\n# Convert to dictionary\nprint(f'As dict: {p1._asdict()}')",
    hint: "Import from `collections` module"
  },
  {
    Id: "py_dt_19",
    topicId: "py_datatypes",
    question: "Use defaultdict to handle missing keys automatically.",
    mathSolution: "Defaultdict provides default value for missing keys",
    codeSolution: "from collections import defaultdict\n\n# Default value for missing keys is int() which is 0\nword_count = defaultdict(int)\nwords = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']\n\nfor word in words:\n    word_count[word] += 1\n\nprint(dict(word_count))\n\n# With list as default\nlist_dict = defaultdict(list)\nlist_dict['fruits'].append('apple')\nlist_dict['fruits'].append('banana')\nprint(dict(list_dict))",
    hint: "Provide default factory function (int, list, set, etc.)"
  },
  {
    Id: "py_dt_20",
    topicId: "py_datatypes",
    question: "Use Counter to count elements in a sequence.",
    mathSolution: "Counter creates dictionary of element frequencies",
    codeSolution: "from collections import Counter\n\ndata = ['a', 'b', 'c', 'a', 'b', 'a', 'd']\ncounter = Counter(data)\n\nprint(f'Counter: {counter}')\nprint(f\"Count of 'a': {counter['a']}\")\nprint(f'Most common: {counter.most_common(2)}')\n\n# Update counter\ncounter.update(['a', 'b', 'e'])\nprint(f'After update: {counter}')",
    hint: "Use `most_common()` to get frequent elements"
  },
  {
    Id: "py_dt_21",
    topicId: "py_datatypes",
    question: "Use deque for efficient append/pop from both ends.",
    mathSolution: "Deque (double-ended queue) O(1) for both ends",
    codeSolution: "from collections import deque\n\ndq = deque([1, 2, 3])\nprint(f'Original: {dq}')\n\ndq.append(4)  # Add to right\ndq.appendleft(0)  # Add to left\nprint(f'After appends: {dq}')\n\nright = dq.pop()  # Remove from right\nleft = dq.popleft()  # Remove from left\nprint(f'Popped: right={right}, left={left}')\nprint(f'Remaining: {dq}')",
    hint: "Use `appendleft()` and `popleft()` for left side operations"
  },
  {
    Id: "py_dt_22",
    topicId: "py_datatypes",
    question: "Create an OrderedDict and demonstrate order preservation.",
    mathSolution: "OrderedDict remembers insertion order",
    codeSolution: "from collections import OrderedDict\n\nod = OrderedDict()\nod['banana'] = 3\nod['apple'] = 5\nod['orange'] = 2\n\nprint('OrderedDict maintains insertion order:')\nfor key, value in od.items():\n    print(f'{key}: {value}')\n\n# Move to end\nod.move_to_end('apple')\nprint('\\nAfter moving apple to end:')\nfor key, value in od.items():\n    print(f'{key}: {value}')",
    hint: "Python 3.7+ dicts also preserve order, OrderedDict has extra methods"
  },
  {
    Id: "py_dt_23",
    topicId: "py_datatypes",
    question: "Use ChainMap to combine multiple dictionaries.",
    mathSolution: "ChainMap searches through multiple dicts",
    codeSolution: "from collections import ChainMap\n\ndict1 = {'a': 1, 'b': 2}\ndict2 = {'b': 3, 'c': 4}\ndict3 = {'d': 5}\n\ncombined = ChainMap(dict1, dict2, dict3)\n\nprint(f'Combined: {dict(combined)}')\nprint(f'Value of \"b\": {combined[\"b\"]}')  # From dict1\nprint(f'Value of \"c\": {combined[\"c\"]}')  # From dict2\nprint(f'Value of \"d\": {combined[\"d\"]}')  # From dict3\n\n# Add new mapping\ncombined = combined.new_child({'e': 6})\nprint(f'After new_child: {dict(combined)}')",
    hint: "First dictionary has priority when keys overlap"
  },
  {
    Id: "py_dt_24",
    topicId: "py_datatypes",
    question: "Work with Enum for symbolic constants.",
    mathSolution: "Enum creates enumerated constants",
    codeSolution: "from enum import Enum\n\nclass Color(Enum):\n    RED = 1\n    GREEN = 2\n    BLUE = 3\n    \nprint(f'Color.RED: {Color.RED}')\nprint(f'Name: {Color.RED.name}')\nprint(f'Value: {Color.RED.value}')\n\n# Iteration\nfor color in Color:\n    print(f'{color.name} = {color.value}')\n\n# Comparison\nif Color.RED == Color.RED:\n    print('Same color')\n\n# Access by value\nprint(f'Color(2): {Color(2)}')",
    hint: "Enums have name and value attributes"
  },
  {
    Id: "py_dt_25",
    topicId: "py_datatypes",
    question: "Use typing module for type hints in functions.",
    mathSolution: "Type hints document expected types",
    codeSolution: "from typing import List, Tuple, Dict, Optional\n\ndef process_items(items: List[str]) -> Dict[str, int]:\n    result: Dict[str, int] = {}\n    for item in items:\n        result[item] = len(item)\n    return result\n\ndef get_item(index: int, default: Optional[str] = None) -> str:\n    items = ['a', 'b', 'c']\n    if 0 <= index < len(items):\n        return items[index]\n    return default if default else 'Not found'\n\nprint(process_items(['apple', 'banana', 'cherry']))\nprint(get_item(1))\nprint(get_item(5, 'missing'))",
    hint: "Type hints are optional but improve code clarity"
  },
  {
    Id: "py_dt_26",
    topicId: "py_datatypes",
    question: "Use Union and Optional type hints.",
    mathSolution: "Union = multiple possible types, Optional = type or None",
    codeSolution: "from typing import Union, Optional\n\ndef process_value(value: Union[int, float, str]) -> str:\n    if isinstance(value, (int, float)):\n        return f'Number: {value * 2}'\n    else:\n        return f'String: {value.upper()}'\n\ndef find_element(lst: list, index: int) -> Optional[str]:\n    if 0 <= index < len(lst):\n        return str(lst[index])\n    return None\n\nprint(process_value(10))\nprint(process_value(3.14))\nprint(process_value('hello'))\n\nresult = find_element([1, 2, 3], 1)\nprint(f'Found: {result}')\nresult = find_element([1, 2, 3], 5)\nprint(f'Found: {result}')",
    hint: "Optional[X] is equivalent to Union[X, None]"
  },
  {
    Id: "py_dt_27",
    topicId: "py_datatypes",
    question: "Create and manipulate date objects using datetime module.",
    mathSolution: "datetime module handles dates and times",
    codeSolution: "from datetime import date, timedelta\n\ntoday = date.today()\nprint(f'Today: {today}')\n\n# Create specific date\nindependence = date(1947, 8, 15)\nprint(f'Independence day: {independence}')\n\n# Date arithmetic\ntomorrow = today + timedelta(days=1)\nprint(f'Tomorrow: {tomorrow}')\n\n# Difference between dates\ndelta = today - independence\nprint(f'Days since independence: {delta.days}')",
    hint: "Import date, datetime, timedelta from datetime module"
  },
  {
    Id: "py_dt_28",
    topicId: "py_datatypes",
    question: "Work with time and datetime objects.",
    mathSolution: "datetime combines date and time",
    codeSolution: "from datetime import datetime, time\n\nnow = datetime.now()\nprint(f'Current datetime: {now}')\nprint(f'Date: {now.date()}')\nprint(f'Time: {now.time()}')\n\n# Create specific datetime\ndt = datetime(2024, 1, 15, 14, 30, 0)\nprint(f'Custom datetime: {dt}')\n\n# Format datetime\nformatted = dt.strftime('%Y-%m-%d %H:%M:%S')\nprint(f'Formatted: {formatted}')\n\n# Parse string\nparsed = datetime.strptime('2024-01-15 14:30:00', '%Y-%m-%d %H:%M:%S')\nprint(f'Parsed: {parsed}')",
    hint: "Use `strftime()` for formatting, `strptime()` for parsing"
  },
  {
    Id: "py_dt_29",
    topicId: "py_datatypes",
    question: "Use timedelta for date/time arithmetic.",
    mathSolution: "timedelta represents duration",
    codeSolution: "from datetime import datetime, timedelta\n\nnow = datetime.now()\n\n# Add time intervals\none_week = now + timedelta(weeks=1)\nthree_days = now + timedelta(days=3)\ntwo_hours = now + timedelta(hours=2)\n\nprint(f'Now: {now}')\nprint(f'One week later: {one_week}')\nprint(f'Three days later: {three_days}')\nprint(f'Two hours later: {two_hours}')\n\n# Difference between datetimes\ndiff = one_week - now\nprint(f'Difference in seconds: {diff.total_seconds()}')",
    hint: "timedelta accepts weeks, days, hours, minutes, seconds, etc."
  },
  {
    Id: "py_dt_30",
    topicId: "py_datatypes",
    question: "Work with timezone-aware datetime objects.",
    mathSolution: "Use pytz or zoneinfo for timezone handling",
    codeSolution: "from datetime import datetime\nfrom zoneinfo import ZoneInfo  # Python 3.9+\n\n# Create timezone-aware datetime\nny_time = datetime.now(ZoneInfo('America/New_York'))\nlondon_time = datetime.now(ZoneInfo('Europe/London'))\ntokyo_time = datetime.now(ZoneInfo('Asia/Tokyo'))\n\nprint(f'New York: {ny_time}')\nprint(f'London: {london_time}')\nprint(f'Tokyo: {tokyo_time}')\n\n# Convert between timezones\nutc_time = ny_time.astimezone(ZoneInfo('UTC'))\nprint(f'NY in UTC: {utc_time}')",
    hint: "Use `zoneinfo.ZoneInfo` (Python 3.9+) or `pytz` for older versions"
  },
  {
    Id: "py_dt_31",
    topicId: "py_datatypes",
    question: "Use Decimal for precise financial calculations.",
    mathSolution: "Decimal avoids floating-point precision issues",
    codeSolution: "from decimal import Decimal, getcontext\n\n# Set precision\ngetcontext().prec = 6\n\n# Float has precision issues\nfloat_sum = 0.1 + 0.2\nprint(f'Float 0.1 + 0.2 = {float_sum}')\n\n# Decimal is precise\ndecimal_sum = Decimal('0.1') + Decimal('0.2')\nprint(f'Decimal 0.1 + 0.2 = {decimal_sum}')\n\n# Financial calculation\nprice = Decimal('19.99')\ntax = Decimal('0.08')\ntotal = price * (Decimal('1') + tax)\nprint(f'Price: {price}, Tax: {tax}, Total: {total}')",
    hint: "Create Decimals from strings for exact representation"
  },
  {
    Id: "py_dt_32",
    topicId: "py_datatypes",
    question: "Use Fraction for rational number arithmetic.",
    mathSolution: "Fraction represents numbers as numerator/denominator",
    codeSolution: "from fractions import Fraction\n\nf1 = Fraction(1, 3)  # 1/3\nf2 = Fraction(2, 5)  # 2/5\n\nprint(f'f1 = {f1}')\nprint(f'f2 = {f2}')\nprint(f'Addition: {f1 + f2}')\nprint(f'Multiplication: {f1 * f2}')\nprint(f'Division: {f1 / f2}')\n\n# From string\nf3 = Fraction('3/7')\nprint(f'From string: {f3}')\n\n# Automatically reduced\nf4 = Fraction(4, 8)  # Becomes 1/2\nprint(f'4/8 reduced: {f4}')",
    hint: "Fractions are automatically reduced to lowest terms"
  },
  {
    Id: "py_dt_33",
    topicId: "py_datatypes",
    question: "Use array module for typed arrays.",
    mathSolution: "Array stores elements of same type efficiently",
    codeSolution: "from array import array\n\n# 'i' for signed integer, 'd' for double\nint_array = array('i', [1, 2, 3, 4, 5])\nfloat_array = array('d', [1.1, 2.2, 3.3])\n\nprint(f'Integer array: {int_array}')\nprint(f'Float array: {float_array}')\n\n# Array operations\nint_array.append(6)\nint_array.extend([7, 8])\nprint(f'After append/extend: {int_array}')\n\n# Type checking\nprint(f'Array typecode: {int_array.typecode}')\nprint(f'Itemsize: {int_array.itemsize} bytes')",
    hint: "Array typecodes: 'i' (int), 'f' (float), 'd' (double), 'b' (byte)"
  },
  {
    Id: "py_dt_34",
    topicId: "py_datatypes",
    question: "Use struct module to pack/unpack binary data.",
    mathSolution: "struct converts between Python and binary data",
    codeSolution: "import struct\n\n# Pack values into binary\n# Format: 'i' = int, 'f' = float, 's' = bytes\npacked = struct.pack('i f 4s', 42, 3.14, b'data')\nprint(f'Packed: {packed}')\n\n# Unpack binary data\nunpacked = struct.unpack('i f 4s', packed)\nprint(f'Unpacked: {unpacked}')\n\n# Named unpack\nimport collections\nPoint = collections.namedtuple('Point', 'x y')\npacked = struct.pack('ii', 10, 20)\npoint = Point._make(struct.unpack('ii', packed))\nprint(f'Point: {point}')",
    hint: "Format strings specify data types and byte order"
  },
  {
    Id: "py_dt_35",
    topicId: "py_datatypes",
    question: "Use sys.getsizeof() to check memory usage of different data types.",
    mathSolution: "Different types use different amounts of memory",
    codeSolution: "import sys\n\nint_obj = 42\nfloat_obj = 3.14\nstr_obj = 'Hello'\nlist_obj = [1, 2, 3, 4, 5]\ndict_obj = {'a': 1, 'b': 2, 'c': 3}\n\nprint(f'Integer size: {sys.getsizeof(int_obj)} bytes')\nprint(f'Float size: {sys.getsizeof(float_obj)} bytes')\nprint(f'String size: {sys.getsizeof(str_obj)} bytes')\nprint(f'List size: {sys.getsizeof(list_obj)} bytes')\nprint(f'Dict size: {sys.getsizeof(dict_obj)} bytes')\n\n# Compare list vs tuple memory\ntuple_obj = (1, 2, 3, 4, 5)\nprint(f'List vs Tuple: {sys.getsizeof(list_obj)} vs {sys.getsizeof(tuple_obj)} bytes')",
    hint: "Memory usage varies by Python implementation"
  },
  {
    Id: "py_dt_36",
    topicId: "py_datatypes",
    question: "Use copy module for shallow and deep copy operations.",
    mathSolution: "Shallow copy copies references, deep copy copies nested objects",
    codeSolution: "import copy\n\noriginal = {\n    'numbers': [1, 2, 3],\n    'text': 'hello',\n    'nested': {'a': 1, 'b': 2}\n}\n\nshallow = copy.copy(original)\ndeep = copy.deepcopy(original)\n\n# Modify nested object in shallow\nshallow['numbers'].append(4)\nshallow['nested']['c'] = 3\n\nprint(f'Original: {original}')\nprint(f'Shallow: {shallow}')\nprint(f'Deep: {deep}')\n\n# Deep copy remains unchanged\nprint(f'\\nDeep copy unaffected: {deep}')",
    hint: "Use `copy.copy()` for shallow, `copy.deepcopy()` for deep"
  },
  {
    Id: "py_dt_37",
    topicId: "py_datatypes",
    question: "Use itertools for advanced iteration operations.",
    mathSolution: "itertools provides efficient iteration tools",
    codeSolution: "import itertools\n\n# Count - infinite counter\ncounter = itertools.count(start=1, step=2)\nfirst_five = [next(counter) for _ in range(5)]\nprint(f'Count (1,3,5,...): {first_five}')\n\n# Cycle - infinite cycle\ncolors = itertools.cycle(['red', 'green', 'blue'])\nfirst_six = [next(colors) for _ in range(6)]\nprint(f'Cycle: {first_six}')\n\n# Permutations\nperms = list(itertools.permutations([1, 2, 3], 2))\nprint(f'Permutations: {perms}')\n\n# Combinations\ncombs = list(itertools.combinations([1, 2, 3, 4], 3))\nprint(f'Combinations: {combs}')\n\n# Chain\nchained = list(itertools.chain([1, 2], [3, 4], [5, 6]))\nprint(f'Chain: {chained}')",
    hint: "itertools functions return iterators, not lists"
  },
  {
    Id: "py_dt_38",
    topicId: "py_datatypes",
    question: "Use functools for higher-order functions and operations.",
    mathSolution: "functools provides function tools",
    codeSolution: "import functools\n\n# Reduce - cumulative operation\nnumbers = [1, 2, 3, 4, 5]\nsum_all = functools.reduce(lambda x, y: x + y, numbers)\nprint(f'Sum using reduce: {sum_all}')\n\n# Partial - fix arguments\ndef power(base, exponent):\n    return base ** exponent\n\nsquare = functools.partial(power, exponent=2)\ncube = functools.partial(power, exponent=3)\n\nprint(f'Square of 5: {square(5)}')\nprint(f'Cube of 3: {cube(3)}')\n\n# Cache - memoization\n@functools.lru_cache(maxsize=32)\ndef fibonacci(n):\n    if n < 2:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(f'fibonacci(10): {fibonacci(10)}')\nprint(f'Cache info: {fibonacci.cache_info()}')",
    hint: "lru_cache caches function results for performance"
  },
  {
    Id: "py_dt_39",
    topicId: "py_datatypes",
    question: "Use operator module for functional programming.",
    mathSolution: "operator provides function equivalents of operators",
    codeSolution: "import operator\n\n# Mathematical operations\nprint(f'Add: {operator.add(10, 5)}')\nprint(f'Multiply: {operator.mul(10, 5)}')\nprint(f'Power: {operator.pow(2, 3)}')\n\n# Comparison\nprint(f'Greater than: {operator.gt(10, 5)}')\nprint(f'Equal: {operator.eq(10, 10)}')\n\n# Sequence operations\ndata = [1, 2, 3, 4, 5]\nprint(f'Getitem: {operator.getitem(data, 2)}')\n\n# Sorting with operator\nstudents = [\n    {'name': 'John', 'grade': 85},\n    {'name': 'Jane', 'grade': 92},\n    {'name': 'Bob', 'grade': 78}\n]\nsorted_students = sorted(students, key=operator.itemgetter('grade'), reverse=True)\nprint(f'Sorted by grade: {sorted_students}')",
    hint: "operator functions are often faster than lambdas"
  },
  {
    Id: "py_dt_40",
    topicId: "py_datatypes",
    question: "Create and use a simple class with __slots__ for memory efficiency.",
    mathSolution: "__slots__ prevents __dict__ creation, saving memory",
    codeSolution: "class PointWithoutSlots:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\nclass PointWithSlots:\n    __slots__ = ['x', 'y']\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\nimport sys\n\np1 = PointWithoutSlots(10, 20)\np2 = PointWithSlots(10, 20)\n\nprint(f'Without slots size: {sys.getsizeof(p1)} + {sys.getsizeof(p1.__dict__)} bytes')\nprint(f'With slots size: {sys.getsizeof(p2)} bytes')\n\n# Can't add new attributes to slots object\ntry:\n    p2.z = 30\nexcept AttributeError as e:\n    print(f'Error: {e}')",
    hint: "__slots__ is useful when creating many instances"
  },
  {
    Id: "py_dt_41",
    topicId: "py_datatypes",
    question: "Use property decorator to create computed attributes.",
    mathSolution: "Properties allow method calls as attribute access",
    codeSolution: "class Circle:\n    def __init__(self, radius):\n        self._radius = radius\n    \n    @property\n    def radius(self):\n        return self._radius\n    \n    @radius.setter\n    def radius(self, value):\n        if value <= 0:\n            raise ValueError('Radius must be positive')\n        self._radius = value\n    \n    @property\n    def area(self):\n        return 3.14159 * self._radius ** 2\n    \n    @property\n    def circumference(self):\n        return 2 * 3.14159 * self._radius\n\nc = Circle(5)\nprint(f'Radius: {c.radius}')\nprint(f'Area: {c.area:.2f}')\nprint(f'Circumference: {c.circumference:.2f}')\n\nc.radius = 10\nprint(f'\\nAfter radius change:')\nprint(f'New area: {c.area:.2f}')",
    hint: "Use @property for getter, @attr.setter for setter"
  },
  {
    Id: "py_dt_42",
    topicId: "py_datatypes",
    question: "Use dataclasses for simple data containers.",
    mathSolution: "dataclasses auto-generate __init__, __repr__, etc.",
    codeSolution: "from dataclasses import dataclass\nfrom typing import List\n\n@dataclass\nclass Student:\n    name: str\n    age: int\n    grades: List[float]\n    \n    @property\n    def average(self):\n        return sum(self.grades) / len(self.grades) if self.grades else 0\n\n@dataclass(order=True)\nclass Point:\n    x: int\n    y: int\n\n# Create instances\ns1 = Student('Alice', 20, [85.5, 90.0, 88.5])\ns2 = Student('Bob', 22, [75.0, 82.5, 79.0])\n\nprint(f'Student 1: {s1}')\nprint(f'Average: {s1.average:.2f}')\n\np1 = Point(1, 2)\np2 = Point(1, 3)\nprint(f'p1 < p2: {p1 < p2}')  # Because order=True",
    hint: "Use @dataclass decorator for automatic method generation"
  },
  {
    Id: "py_dt_43",
    topicId: "py_datatypes",
    question: "Create and use a custom context manager with __enter__ and __exit__.",
    mathSolution: "Context managers handle setup and cleanup",
    codeSolution: "class FileManager:\n    def __init__(self, filename, mode):\n        self.filename = filename\n        self.mode = mode\n        self.file = None\n    \n    def __enter__(self):\n        self.file = open(self.filename, self.mode)\n        return self.file\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        if self.file:\n            self.file.close()\n        if exc_type:\n            print(f'An error occurred: {exc_val}')\n        return True  # Suppress exception\n\n# Using the context manager\nwith FileManager('test.txt', 'w') as f:\n    f.write('Hello, World!')\n\nwith FileManager('test.txt', 'r') as f:\n    content = f.read()\n    print(f'File content: {content}')\n\n# Error handling\nwith FileManager('nonexistent.txt', 'r') as f:\n    content = f.read()  # This would normally raise FileNotFoundError",
    hint: "__exit__ can handle exceptions and return True to suppress"
  },
  {
    Id: "py_dt_44",
    topicId: "py_datatypes",
    question: "Use contextlib for simpler context managers.",
    mathSolution: "contextlib provides utilities for context managers",
    codeSolution: "from contextlib import contextmanager\n\n@contextmanager\ndef managed_file(filename, mode):\n    print(f'Opening {filename}')\n    file = open(filename, mode)\n    try:\n        yield file\n    finally:\n        print(f'Closing {filename}')\n        file.close()\n\n@contextmanager\ndef timer():\n    import time\n    start = time.time()\n    try:\n        yield\n    finally:\n        end = time.time()\n        print(f'Time taken: {end - start:.2f} seconds')\n\n# Using the context managers\nwith managed_file('test.txt', 'w') as f:\n    f.write('Using contextlib')\n\nwith timer():\n    total = sum(range(1000000))\n    print(f'Sum calculated')",
    hint: "Use @contextmanager decorator with yield"
  },
  {
    Id: "py_dt_45",
    topicId: "py_datatypes",
    question: "Create a generator function and use yield.",
    mathSolution: "Generators produce values lazily",
    codeSolution: "def fibonacci_generator(n):\n    a, b = 0, 1\n    count = 0\n    while count < n:\n        yield a\n        a, b = b, a + b\n        count += 1\n\ndef read_large_file_line_by_line(filename):\n    with open(filename, 'r') as file:\n        for line in file:\n            yield line.strip()\n\n# Using generators\nfib = fibonacci_generator(10)\nprint('Fibonacci sequence:')\nfor num in fib:\n    print(num, end=' ')\nprint()\n\n# Generator expression\nsquares = (x**2 for x in range(10))\nprint('First 5 squares:')\nfor i, sq in enumerate(squares):\n    if i >= 5:\n        break\n    print(sq, end=' ')",
    hint: "Generators remember state between yields"
  },
  {
    Id: "py_dt_46",
    topicId: "py_datatypes",
    question: "Use pickle to serialize and deserialize Python objects.",
    mathSolution: "pickle converts objects to bytes and back",
    codeSolution: "import pickle\n\ndata = {\n    'name': 'John',\n    'age': 30,\n    'scores': [85, 90, 78],\n    'active': True\n}\n\n# Serialize to bytes\npickled_data = pickle.dumps(data)\nprint(f'Pickled data size: {len(pickled_data)} bytes')\n\n# Deserialize\nunpickled = pickle.loads(pickled_data)\nprint(f'Unpickled: {unpickled}')\n\n# Save to file\nwith open('data.pkl', 'wb') as f:\n    pickle.dump(data, f)\n\n# Load from file\nwith open('data.pkl', 'rb') as f:\n    loaded = pickle.load(f)\nprint(f'Loaded from file: {loaded}')",
    hint: "Use 'wb'/'rb' modes for binary file operations"
  },
  {
    Id: "py_dt_47",
    topicId: "py_datatypes",
    question: "Use json module for JSON serialization.",
    mathSolution: "JSON is text-based data interchange format",
    codeSolution: "import json\n\ndata = {\n    'name': 'John',\n    'age': 30,\n    'scores': [85, 90, 78],\n    'active': True,\n    'address': None\n}\n\n# Convert to JSON string\njson_str = json.dumps(data, indent=2)\nprint(f'JSON string:\\n{json_str}')\n\n# Parse JSON string\nparsed = json.loads(json_str)\nprint(f'\\nParsed: {parsed}')\n\n# Save to file\nwith open('data.json', 'w') as f:\n    json.dump(data, f, indent=2)\n\n# Load from file\nwith open('data.json', 'r') as f:\n    loaded = json.load(f)\nprint(f'\\nLoaded from file: {loaded}')",
    hint: "JSON supports dicts, lists, strings, numbers, booleans, null"
  },
  {
    Id: "py_dt_48",
    topicId: "py_datatypes",
    question: "Handle custom objects with JSON using default and object_hook.",
    mathSolution: "Custom encoders/decoders handle non-JSON types",
    codeSolution: "import json\nfrom datetime import datetime\n\nclass Person:\n    def __init__(self, name, birth_date):\n        self.name = name\n        self.birth_date = birth_date\n\ndef custom_encoder(obj):\n    if isinstance(obj, datetime):\n        return obj.isoformat()\n    if isinstance(obj, Person):\n        return {'__person__': True, 'name': obj.name, 'birth_date': obj.birth_date}\n    raise TypeError(f'Object of type {type(obj)} is not JSON serializable')\n\ndef custom_decoder(dct):\n    if '__person__' in dct:\n        return Person(dct['name'], dct['birth_date'])\n    return dct\n\n# Create object with datetime\nperson = Person('Alice', datetime(1990, 5, 15))\ndata = {'person': person, 'timestamp': datetime.now()}\n\n# Serialize with custom encoder\njson_str = json.dumps(data, default=custom_encoder, indent=2)\nprint(f'Serialized:\\n{json_str}')\n\n# Deserialize with custom decoder\nloaded = json.loads(json_str, object_hook=custom_decoder)\nprint(f'\\nDeserialized: {type(loaded[\"person\"])}')",
    hint: "Use default parameter for encoding, object_hook for decoding"
  },
  {
    Id: "py_dt_49",
    topicId: "py_datatypes",
    question: "Use typing module with Protocol for structural subtyping.",
    mathSolution: "Protocol defines interface without inheritance",
    codeSolution: "from typing import Protocol, List\n\nclass Drawable(Protocol):\n    def draw(self) -> str: ...\n\nclass Circle:\n    def __init__(self, radius):\n        self.radius = radius\n    \n    def draw(self) -> str:\n        return f'Drawing circle with radius {self.radius}'\n\nclass Square:\n    def __init__(self, side):\n        self.side = side\n    \n    def draw(self) -> str:\n        return f'Drawing square with side {self.side}'\n\nclass Triangle:\n    def __init__(self, base, height):\n        self.base = base\n        self.height = height\n    # No draw method\n\ndef render_shapes(shapes: List[Drawable]):\n    for shape in shapes:\n        print(shape.draw())\n\n# These work\nshapes = [Circle(5), Square(10)]\nrender_shapes(shapes)\n\n# This would type check if using mypy\n# shapes_with_triangle = [Circle(5), Triangle(3, 4)]\n# render_shapes(shapes_with_triangle)  # Triangle has no draw()",
    hint: "Protocol defines expected methods/attributes"
  },
  {
    Id: "py_dt_50",
    topicId: "py_datatypes",
    question: "Create a generic class using TypeVar from typing.",
    mathSolution: "Generics allow type-parameterized classes",
    codeSolution: "from typing import TypeVar, Generic, List\n\nT = TypeVar('T')\n\nclass Stack(Generic[T]):\n    def __init__(self):\n        self._items: List[T] = []\n    \n    def push(self, item: T) -> None:\n        self._items.append(item)\n    \n    def pop(self) -> T:\n        if not self._items:\n            raise IndexError('Stack is empty')\n        return self._items.pop()\n    \n    def peek(self) -> T:\n        if not self._items:\n            raise IndexError('Stack is empty')\n        return self._items[-1]\n    \n    def is_empty(self) -> bool:\n        return len(self._items) == 0\n\n# Stack of integers\nint_stack = Stack[int]()\nint_stack.push(10)\nint_stack.push(20)\nprint(f'Int stack pop: {int_stack.pop()}')\n\n# Stack of strings\nstr_stack = Stack[str]()\nstr_stack.push('hello')\nstr_stack.push('world')\nprint(f'String stack pop: {str_stack.pop()}')\n\n# This would be caught by type checker\n# int_stack.push('not an int')  # Type error",
    hint: "Use TypeVar to define type parameters for generic classes"
  }
);