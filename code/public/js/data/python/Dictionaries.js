QuizData.questions.push(
  {
    id: "py_dict_1",
    topicId: "py_dictionaries",
    question: "Create a dictionary with 3 key-value pairs and print it.",
    mathSolution: "Dictionary stores key-value pairs",
    codeSolution: "student = {\n    'name': 'John',\n    'age': 20,\n    'grade': 'A'\n}\nprint(student)\nprint(f'Name: {student[\"name\"]}')\nprint(f'Age: {student[\"age\"]}')\nprint(f'Grade: {student[\"grade\"]}')",
    hint: "Use curly braces {} with key: value pairs"
  },
  {
    id: "py_dict_2",
    topicId: "py_dictionaries",
    question: "Access dictionary values using keys and get() method.",
    mathSolution: "dict[key] vs dict.get(key) for safe access",
    codeSolution: "person = {'name': 'Alice', 'age': 30, 'city': 'New York'}\n\n# Direct access\nprint(person['name'])\n\n# Using get() - safe access\nprint(person.get('age'))\nprint(person.get('country', 'Not found'))  # Default value\n\n# This would raise KeyError\n# print(person['country'])\n\nprint(person.get('country'))  # Returns None",
    hint: "Use get() with default value to avoid KeyError"
  },
  {
    id: "py_dict_3",
    topicId: "py_dictionaries",
    question: "Add, update, and delete items in a dictionary.",
    mathSolution: "Dictionary is mutable - can be modified",
    codeSolution: "inventory = {'apples': 5, 'bananas': 3}\nprint('Original:', inventory)\n\n# Add new item\ninventory['oranges'] = 4\nprint('After add:', inventory)\n\n# Update existing item\ninventory['apples'] = 10\nprint('After update:', inventory)\n\n# Delete item\ndel inventory['bananas']\nprint('After delete:', inventory)\n\n# Using pop() - returns removed value\nremoved = inventory.pop('oranges', None)\nprint(f'Removed: {removed}')\nprint('After pop:', inventory)",
    hint: "Use assignment to add/update, del or pop() to remove"
  },
  {
    id: "py_dict_4",
    topicId: "py_dictionaries",
    question: "Iterate through dictionary keys, values, and items.",
    mathSolution: "Different ways to loop through dictionary",
    codeSolution: "scores = {'Math': 85, 'Science': 92, 'English': 78}\n\n# Iterate through keys\nprint('Keys:')\nfor subject in scores:\n    print(f'  {subject}')\n\n# Iterate through values\nprint('\\nValues:')\nfor score in scores.values():\n    print(f'  {score}')\n\n# Iterate through key-value pairs\nprint('\\nItems:')\nfor subject, score in scores.items():\n    print(f'  {subject}: {score}')\n\n# Using keys() method\nprint('\\nUsing keys():')\nfor subject in scores.keys():\n    print(f'  {subject}')",
    hint: "Use .items() for key-value pairs, .keys() for keys, .values() for values"
  },
  {
    id: "py_dict_5",
    topicId: "py_dictionaries",
    question: "Check if a key exists in a dictionary.",
    mathSolution: "Use 'in' operator to check key existence",
    codeSolution: "user = {'username': 'john_doe', 'email': 'john@example.com'}\n\n# Check if key exists\nif 'username' in user:\n    print(f'Username: {user[\"username\"]}')\n\nif 'age' in user:\n    print(f'Age: {user[\"age\"]}')\nelse:\n    print('Age not found')\n\n# Using get() with condition\nage = user.get('age')\nif age is not None:\n    print(f'Age: {age}')\nelse:\n    print('Age not set')",
    hint: "Use 'key in dict' to check existence"
  },
  {
    id: "py_dict_6",
    topicId: "py_dictionaries",
    question: "Get dictionary length (number of key-value pairs).",
    mathSolution: "len() returns number of items",
    codeSolution: "car = {\n    'brand': 'Toyota',\n    'model': 'Camry',\n    'year': 2022,\n    'color': 'blue'\n}\n\nprint(f'Dictionary: {car}')\nprint(f'Number of items: {len(car)}')\n\n# Empty dictionary\nempty_dict = {}\nprint(f'Empty dict length: {len(empty_dict)}')\n\n# With nested dictionaries\nnested = {\n    'person': {'name': 'Alice', 'age': 30},\n    'address': {'city': 'NYC', 'zip': '10001'}\n}\nprint(f'Nested dict length: {len(nested)}')  # Counts top-level keys only",
    hint: "len() counts top-level key-value pairs only"
  },
  {
    id: "py_dict_7",
    topicId: "py_dictionaries",
    question: "Merge two dictionaries using update() and | operator (Python 3.9+).",
    mathSolution: "Combine dictionaries with update() or | operator",
    codeSolution: "dict1 = {'a': 1, 'b': 2}\ndict2 = {'c': 3, 'd': 4}\ndict3 = {'b': 10, 'e': 5}  # Has overlapping key\n\n# Using update()\nmerged1 = dict1.copy()\nmerged1.update(dict2)\nprint('Update merge:', merged1)\n\n# Using | operator (Python 3.9+)\nmerged2 = dict1 | dict2\nprint('| operator:', merged2)\n\n# Handling overlaps (later dict overwrites)\nmerged3 = {**dict1, **dict3}\nprint('Overlap merge:', merged3)\n\n# Multiple dictionaries\nmerged4 = dict1 | dict2 | {'f': 6}\nprint('Multiple merge:', merged4)",
    hint: "Use update() to modify in place, | or {**d1, **d2} for new dict"
  },
  {
    id: "py_dict_8",
    topicId: "py_dictionaries",
    question: "Create a dictionary using dict() constructor.",
    mathSolution: "Multiple ways to create dictionaries",
    codeSolution: "# From keyword arguments\nperson1 = dict(name='Alice', age=30, city='NYC')\nprint('Keywords:', person1)\n\n# From list of tuples\nperson2 = dict([('name', 'Bob'), ('age', 25), ('city', 'LA')])\nprint('From tuples:', person2)\n\n# From zip of keys and values\nkeys = ['name', 'age', 'city']\nvalues = ['Charlie', 35, 'Chicago']\nperson3 = dict(zip(keys, values))\nprint('From zip:', person3)\n\n# Empty dictionary\nempty = dict()\nprint('Empty:', empty)\n\n# With comprehension\nsquares = dict((x, x**2) for x in range(1, 6))\nprint('Squares:', squares)",
    hint: "dict() accepts keyword args, list of tuples, or zip object"
  },
  {
    id: "py_dict_9",
    topicId: "py_dictionaries",
    question: "Create a nested dictionary and access nested values.",
    mathSolution: "Dictionaries can contain other dictionaries",
    codeSolution: "company = {\n    'name': 'Tech Corp',\n    'employees': {\n        'manager': {\n            'name': 'Alice',\n            'id': 101\n        },\n        'developer': {\n            'name': 'Bob',\n            'id': 102,\n            'skills': ['Python', 'JavaScript']\n        }\n    },\n    'location': 'San Francisco'\n}\n\n# Access nested values\nprint(f'Company: {company[\"name\"]}')\nprint(f'Manager: {company[\"employees\"][\"manager\"][\"name\"]}')\nprint(f'Developer skills: {company[\"employees\"][\"developer\"][\"skills\"]}')\n\n# Safe nested access\ndeveloper_name = company.get('employees', {}).get('developer', {}).get('name')\nprint(f'Developer name: {developer_name}')",
    hint: "Chain square brackets or use multiple get() calls for safe access"
  },
  {
    id: "py_dict_10",
    topicId: "py_dictionaries",
    question: "Use dictionary comprehension to create a dictionary of squares.",
    mathSolution: "{x: x**2 for x in range(n)}",
    codeSolution: "# Basic comprehension\nsquares = {x: x**2 for x in range(1, 6)}\nprint('Squares:', squares)\n\n# With condition - even numbers only\neven_squares = {x: x**2 for x in range(1, 11) if x % 2 == 0}\nprint('Even squares:', even_squares)\n\n# Transform keys and values\nwords = ['hello', 'world', 'python']\nword_lengths = {word: len(word) for word in words}\nprint('Word lengths:', word_lengths)\n\n# From two lists\nfruits = ['apple', 'banana', 'orange']\nprices = [0.5, 0.3, 0.8]\nfruit_prices = {fruits[i]: prices[i] for i in range(len(fruits))}\nprint('Fruit prices:', fruit_prices)\n\n# Using zip (more pythonic)\nfruit_prices2 = {fruit: price for fruit, price in zip(fruits, prices)}\nprint('Using zip:', fruit_prices2)",
    hint: "Syntax: {key_expression: value_expression for item in iterable if condition}"
  },
  {
    id: "py_dict_11",
    topicId: "py_dictionaries",
    question: "Count frequency of elements in a list using dictionary.",
    mathSolution: "Use dictionary to count occurrences",
    codeSolution: "items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'grape']\n\n# Method 1: Manual counting\ncounts = {}\nfor item in items:\n    if item in counts:\n        counts[item] += 1\n    else:\n        counts[item] = 1\nprint('Manual count:', counts)\n\n# Method 2: Using get()\ncounts2 = {}\nfor item in items:\n    counts2[item] = counts2.get(item, 0) + 1\nprint('Using get():', counts2)\n\n# Method 3: Using defaultdict\nfrom collections import defaultdict\ncounts3 = defaultdict(int)\nfor item in items:\n    counts3[item] += 1\nprint('Using defaultdict:', dict(counts3))\n\n# Method 4: Using Counter\nfrom collections import Counter\ncounts4 = Counter(items)\nprint('Using Counter:', dict(counts4))",
    hint: "Use get(key, 0) to handle missing keys gracefully"
  },
  {
    id: "py_dict_12",
    topicId: "py_dictionaries",
    question: "Sort a dictionary by keys and by values.",
    mathSolution: "Use sorted() with key parameter",
    codeSolution: "scores = {'Alice': 85, 'Bob': 92, 'Charlie': 78, 'Diana': 95}\n\n# Sort by keys\nsorted_by_keys = dict(sorted(scores.items()))\nprint('Sorted by keys:', sorted_by_keys)\n\n# Sort by values (ascending)\nsorted_by_values_asc = dict(sorted(scores.items(), key=lambda item: item[1]))\nprint('Sorted by values (asc):', sorted_by_values_asc)\n\n# Sort by values (descending)\nsorted_by_values_desc = dict(sorted(scores.items(), key=lambda item: item[1], reverse=True))\nprint('Sorted by values (desc):', sorted_by_values_desc)\n\n# Sort by length of key\nsorted_by_key_len = dict(sorted(scores.items(), key=lambda item: len(item[0])))\nprint('Sorted by key length:', sorted_by_key_len)\n\n# Get top 2 scores\ntop_two = dict(sorted(scores.items(), key=lambda item: item[1], reverse=True)[:2])\nprint('Top 2 scores:', top_two)",
    hint: "Use items() to get key-value pairs, then sort with custom key function"
  },
  {
    id: "py_dict_13",
    topicId: "py_dictionaries",
    question: "Find the key with maximum value in a dictionary.",
    mathSolution: "Use max() with key parameter or manual iteration",
    codeSolution: "scores = {'Alice': 85, 'Bob': 92, 'Charlie': 78, 'Diana': 95, 'Eve': 88}\n\n# Method 1: Using max() with key\nmax_key = max(scores, key=scores.get)\nprint(f'Max score: {max_key} = {scores[max_key]}')\n\n# Method 2: Get both key and value\nmax_item = max(scores.items(), key=lambda x: x[1])\nprint(f'Max item: {max_item[0]} = {max_item[1]}')\n\n# Method 3: Manual iteration\nmax_key_manual = None\nmax_value = float('-inf')\nfor key, value in scores.items():\n    if value > max_value:\n        max_value = value\n        max_key_manual = key\nprint(f'Manual: {max_key_manual} = {max_value}')\n\n# Find key with minimum value\nmin_key = min(scores, key=scores.get)\nprint(f'Min score: {min_key} = {scores[min_key]}')",
    hint: "max(dict, key=dict.get) returns key with maximum value"
  },
  {
    id: "py_dict_14",
    topicId: "py_dictionaries",
    question: "Remove duplicate values from a dictionary (keep first occurrence).",
    mathSolution: "Create new dict with unique values",
    codeSolution: "original = {'a': 1, 'b': 2, 'c': 1, 'd': 3, 'e': 2, 'f': 4}\nprint('Original:', original)\n\n# Remove duplicates (keep first occurrence)\nunique_dict = {}\nseen_values = set()\nfor key, value in original.items():\n    if value not in seen_values:\n        unique_dict[key] = value\n        seen_values.add(value)\n\nprint('Unique values:', unique_dict)\n\n# Alternative: invert and restore (keeps last occurrence)\ninverted = {}\nfor key, value in original.items():\n    inverted[value] = key  # Last key for each value\n\nrestored = {value: key for key, value in inverted.items()}\nprint('Last occurrence:', restored)\n\n# Count frequency of values\nfrom collections import Counter\nvalue_counts = Counter(original.values())\nprint('Value frequencies:', dict(value_counts))",
    hint: "Track seen values in a set while building new dict"
  },
  {
    id: "py_dict_15",
    topicId: "py_dictionaries",
    question: "Invert a dictionary (swap keys and values).",
    mathSolution: "Create new dict with values as keys and keys as values",
    codeSolution: "original = {'a': 1, 'b': 2, 'c': 3, 'd': 2}\nprint('Original:', original)\n\n# Simple inversion (loses duplicate values)\ninverted_simple = {value: key for key, value in original.items()}\nprint('Simple invert (last wins):', inverted_simple)\n\n# Handle duplicate values - store as list\nfrom collections import defaultdict\ninverted_list = defaultdict(list)\nfor key, value in original.items():\n    inverted_list[value].append(key)\nprint('Invert with lists:', dict(inverted_list))\n\n# One-to-one mapping check\nif len(set(original.values())) == len(original):\n    print('Can invert safely - all values unique')\nelse:\n    print('Duplicate values - simple invert will lose data')\n\n# Invert with counting\ninverted_count = {value: sum(1 for v in original.values() if v == value) \n                  for value in set(original.values())}\nprint('Value counts:', inverted_count)",
    hint: "Be careful with duplicate values - they will overwrite each other"
  },
  {
    id: "py_dict_16",
    topicId: "py_dictionaries",
    question: "Create a dictionary with default values using fromkeys().",
    mathSolution: "dict.fromkeys(keys, default_value) creates dict with same default",
    codeSolution: "# Create dict with same default value\nkeys = ['apple', 'banana', 'orange']\nfruit_count = dict.fromkeys(keys, 0)\nprint('Fruit count:', fruit_count)\n\n# Update values\nfruit_count['apple'] += 1\nfruit_count['banana'] += 3\nprint('After updates:', fruit_count)\n\n# Default value can be any object\nnew_users = dict.fromkeys(['john', 'jane', 'bob'], {'posts': 0, 'joined': '2024'})\nprint('New users:', new_users)\n\n# Warning: mutable default is shared\nlists_dict = dict.fromkeys(keys, [])  # Same list for all keys!\nlists_dict['apple'].append(1)\nprint('Shared list issue:', lists_dict)  # All keys get the list\n\n# Fix for mutable default\nfixed_dict = {key: [] for key in keys}\nfixed_dict['apple'].append(1)\nprint('Fixed dict:', fixed_dict)",
    hint: "Be careful with mutable default values - use comprehension instead"
  },
  {
    id: "py_dict_17",
    topicId: "py_dictionaries",
    question: "Filter dictionary items based on a condition.",
    mathSolution: "Use dictionary comprehension with condition",
    codeSolution: "scores = {'Alice': 85, 'Bob': 92, 'Charlie': 78, 'Diana': 95, 'Eve': 88}\n\n# Filter scores >= 90\nhigh_scores = {name: score for name, score in scores.items() if score >= 90}\nprint('High scores:', high_scores)\n\n# Filter names with length > 4\nlong_names = {name: score for name, score in scores.items() if len(name) > 4}\nprint('Long names:', long_names)\n\n# Filter with multiple conditions\npassed = {name: score for name, score in scores.items() \n          if score >= 60 and name.startswith('A')}\nprint('Passed and A names:', passed)\n\n# Filter by value range\nmid_range = {name: score for name, score in scores.items() if 80 <= score <= 90}\nprint('Mid range:', mid_range)\n\n# Using dict() with generator\nfiltered = dict((name, score) for name, score in scores.items() if score > 85)\nprint('Filtered >85:', filtered)",
    hint: "Use dictionary comprehension with if clause for filtering"
  },
  {
    id: "py_dict_18",
    topicId: "py_dictionaries",
    question: "Find common keys in two dictionaries.",
    mathSolution: "Use set intersection on dictionary keys",
    codeSolution: "dict1 = {'a': 1, 'b': 2, 'c': 3, 'd': 4}\ndict2 = {'b': 20, 'c': 30, 'e': 50, 'f': 60}\n\n# Common keys\ncommon_keys = set(dict1.keys()) & set(dict2.keys())\nprint('Common keys:', common_keys)\n\n# Keys in dict1 but not dict2\nonly_dict1 = set(dict1.keys()) - set(dict2.keys())\nprint('Only in dict1:', only_dict1)\n\n# Keys in dict2 but not dict1\nonly_dict2 = set(dict2.keys()) - set(dict1.keys())\nprint('Only in dict2:', only_dict2)\n\n# Common items (same key and value)\ncommon_items = {k: dict1[k] for k in common_keys if dict1[k] == dict2[k]}\nprint('Common items (same value):', common_items)\n\n# Dictionary with values from both for common keys\ncombined = {k: (dict1[k], dict2[k]) for k in common_keys}\nprint('Combined values:', combined)",
    hint: "Convert keys to sets for set operations"
  },
  {
    id: "py_dict_19",
    topicId: "py_dictionaries",
    question: "Create a dictionary grouping items by some property.",
    mathSolution: "Use defaultdict(list) to group items",
    codeSolution: "people = [\n    {'name': 'Alice', 'age': 25, 'city': 'NYC'},\n    {'name': 'Bob', 'age': 30, 'city': 'LA'},\n    {'name': 'Charlie', 'age': 25, 'city': 'NYC'},\n    {'name': 'Diana', 'age': 35, 'city': 'LA'},\n    {'name': 'Eve', 'age': 25, 'city': 'Chicago'}\n]\n\nfrom collections import defaultdict\n\n# Group by age\nby_age = defaultdict(list)\nfor person in people:\n    by_age[person['age']].append(person['name'])\nprint('Group by age:', dict(by_age))\n\n# Group by city\nby_city = defaultdict(list)\nfor person in people:\n    by_city[person['city']].append(person['name'])\nprint('Group by city:', dict(by_city))\n\n# Group with full data\nby_age_full = defaultdict(list)\nfor person in people:\n    by_age_full[person['age']].append(person)\nprint('Group by age (full):', dict(by_age_full))\n\n# Multiple levels of grouping\nfrom collections import defaultdict\nnested = defaultdict(lambda: defaultdict(list))\nfor person in people:\n    nested[person['city']][person['age']].append(person['name'])\nprint('Nested grouping:', dict(nested))",
    hint: "Use defaultdict(list) to automatically create lists for new keys"
  },
  {
    id: "py_dict_20",
    topicId: "py_dictionaries",
    question: "Implement a simple cache using dictionary.",
    mathSolution: "Store computed results in dictionary for reuse",
    codeSolution: "class SimpleCache:\n    def __init__(self):\n        self.cache = {}\n        self.hits = 0\n        self.misses = 0\n    \n    def get(self, key):\n        if key in self.cache:\n            self.hits += 1\n            return self.cache[key]\n        self.misses += 1\n        return None\n    \n    def set(self, key, value):\n        self.cache[key] = value\n    \n    def clear(self):\n        self.cache.clear()\n        self.hits = self.misses = 0\n    \n    def stats(self):\n        total = self.hits + self.misses\n        hit_rate = (self.hits / total * 100) if total > 0 else 0\n        return {'hits': self.hits, 'misses': self.misses, 'hit_rate': f'{hit_rate:.1f}%'}\n\ncache = SimpleCache()\n\ndef expensive_function(n):\n    result = cache.get(n)\n    if result:\n        print(f'Cache hit for {n}')\n        return result\n    \n    print(f'Computing {n}...')\n    result = n * n  # Simulate expensive computation\n    cache.set(n, result)\n    return result\n\nprint(expensive_function(5))\nprint(expensive_function(5))\nprint(expensive_function(10))\nprint(cache.stats())",
    hint: "Check cache before computing, store results after computing"
  },
  {
    id: "py_dict_21",
    topicId: "py_dictionaries",
    question: "Flatten a nested dictionary with dot notation.",
    mathSolution: "Recursively traverse nested dict and create flattened keys",
    codeSolution: "def flatten_dict(nested_dict, parent_key='', sep='.'):\n    items = []\n    for key, value in nested_dict.items():\n        new_key = f'{parent_key}{sep}{key}' if parent_key else key\n        if isinstance(value, dict):\n            items.extend(flatten_dict(value, new_key, sep=sep).items())\n        else:\n            items.append((new_key, value))\n    return dict(items)\n\ndef unflatten_dict(flat_dict, sep='.'):\n    result = {}\n    for key, value in flat_dict.items():\n        parts = key.split(sep)\n        d = result\n        for part in parts[:-1]:\n            if part not in d:\n                d[part] = {}\n            d = d[part]\n        d[parts[-1]] = value\n    return result\n\nnested = {\n    'a': 1,\n    'b': {\n        'c': 2,\n        'd': {\n            'e': 3,\n            'f': 4\n        }\n    },\n    'g': 5\n}\n\nprint('Original:', nested)\nflattened = flatten_dict(nested)\nprint('Flattened:', flattened)\n\nrestored = unflatten_dict(flattened)\nprint('Restored:', restored)\n\n# Access flattened values\nprint(f'Value at b.d.e: {flattened[\"b.d.e\"]}')",
    hint: "Recursively process nested dictionaries, building compound keys"
  },
  {
    id: "py_dict_22",
    topicId: "py_dictionaries",
    question: "Merge dictionaries with custom conflict resolution.",
    mathSolution: "Define how to handle duplicate keys during merge",
    codeSolution: "def merge_with_resolution(dict1, dict2, resolve_func):\n    \"\"\"Merge two dicts with custom resolution for conflicts\"\"\"\n    result = dict1.copy()\n    for key, value2 in dict2.items():\n        if key in result:\n            result[key] = resolve_func(key, result[key], value2)\n        else:\n            result[key] = value2\n    return result\n\n# Different resolution strategies\ndef sum_values(key, v1, v2):\n    return v1 + v2\n\ndef max_values(key, v1, v2):\n    return max(v1, v2)\n\ndef list_values(key, v1, v2):\n    return [v1, v2] if not isinstance(v1, list) else v1 + [v2]\n\ndef prefer_first(key, v1, v2):\n    return v1\n\ndef prefer_second(key, v1, v2):\n    return v2\n\n# Test data\nd1 = {'a': 1, 'b': 2, 'c': 3}\nd2 = {'b': 3, 'c': 4, 'd': 5}\n\nprint('Dict1:', d1)\nprint('Dict2:', d2)\nprint('Sum:', merge_with_resolution(d1, d2, sum_values))\nprint('Max:', merge_with_resolution(d1, d2, max_values))\nprint('List:', merge_with_resolution(d1, d2, list_values))\nprint('Prefer first:', merge_with_resolution(d1, d2, prefer_first))\nprint('Prefer second:', merge_with_resolution(d1, d2, prefer_second))",
    hint: "Pass a function that takes (key, value1, value2) and returns resolved value"
  },
  {
    id: "py_dict_23",
    topicId: "py_dictionaries",
    question: "Create a dictionary with tuple keys and access them.",
    mathSolution: "Use tuples as keys for multi-dimensional data",
    codeSolution: "# 2D grid using tuple keys\ngrid = {}\ngrid[(0, 0)] = 'A'\ngrid[(0, 1)] = 'B'\ngrid[(1, 0)] = 'C'\ngrid[(1, 1)] = 'D'\n\nprint('Grid:')\nfor i in range(2):\n    row = []\n    for j in range(2):\n        row.append(grid.get((i, j), '.'))\n    print(' '.join(row))\n\n# Distance matrix\ncities = ['NYC', 'LA', 'Chicago']\ndistances = {}\ndistances[('NYC', 'LA')] = 2800\ndistances[('NYC', 'Chicago')] = 800\ndistances[('LA', 'Chicago')] = 2000\n\nprint('\\nDistances:')\nfor (city1, city2), dist in distances.items():\n    print(f'{city1} to {city2}: {dist} miles')\n\n# Symmetric access\ndef get_distance(c1, c2):\n    return distances.get((c1, c2)) or distances.get((c2, c1))\n\nprint(f'LA to NYC: {get_distance(\"LA\", \"NYC\")} miles')\n\n# Sparse matrix\nsparse = {}\nsparse[(0, 5)] = 42\nsparse[(3, 7)] = 99\nsparse[(10, 2)] = 13\nprint('\\nSparse matrix entries:', sparse)",
    hint: "Tuples are hashable and can be used as dictionary keys"
  },
  {
    id: "py_dict_24",
    topicId: "py_dictionaries",
    question: "Implement a frequency counter for words in a text.",
    mathSolution: "Split text into words and count occurrences",
    codeSolution: "text = \"\"\"\nPython is great. Python is powerful. Python is easy to learn.\nI love Python programming. Python is amazing!\n\"\"\"\n\nimport re\nfrom collections import defaultdict\n\n# Clean and split text\nwords = re.findall(r'\\w+', text.lower())\nprint(f'Total words: {len(words)}')\n\n# Count frequencies\nfreq = defaultdict(int)\nfor word in words:\n    freq[word] += 1\n\n# Sort by frequency\nsorted_freq = sorted(freq.items(), key=lambda x: x[1], reverse=True)\n\nprint('\\nWord frequencies:')\nfor word, count in sorted_freq[:10]:  # Top 10\n    print(f'  {word}: {count}')\n\n# Find most common word\nmost_common = max(freq, key=freq.get)\nprint(f'\\nMost common word: \"{most_common}\" ({freq[most_common]} times)')\n\n# Words appearing only once\nsingletons = [word for word, count in freq.items() if count == 1]\nprint(f'Words appearing once: {len(singletons)}')\n\n# Percentage of unique words\nunique_ratio = len(freq) / len(words) * 100\nprint(f'Unique words: {unique_ratio:.1f}%')",
    hint: "Use regex to extract words, defaultdict(int) for counting"
  },
  {
    id: "py_dict_25",
    topicId: "py_dictionaries",
    question: "Create a dictionary that automatically creates missing keys (defaultdict).",
    mathSolution: "Use defaultdict with factory function for missing keys",
    codeSolution: "from collections import defaultdict\n\n# defaultdict with int (default 0)\nword_count = defaultdict(int)\nwords = ['apple', 'banana', 'apple', 'cherry']\nfor word in words:\n    word_count[word] += 1\nprint('Word count:', dict(word_count))\n\n# defaultdict with list\ncategories = defaultdict(list)\ncategories['fruits'].append('apple')\ncategories['fruits'].append('banana')\ncategories['vegetables'].append('carrot')\nprint('Categories:', dict(categories))\n\n# defaultdict with set\nunique_tags = defaultdict(set)\nunique_tags['python'].add('programming')\nunique_tags['python'].add('language')\nunique_tags['python'].add('programming')  # Duplicate ignored\nprint('Tags:', dict(unique_tags))\n\n# Custom default factory\ndef default_employee():\n    return {'name': 'Unknown', 'department': 'None'}\n\nemployees = defaultdict(default_employee)\nemployees[101]['name'] = 'Alice'\nprint('Employee 101:', employees[101])\nprint('Employee 102:', employees[102])  # Auto-created\n\n# Nested defaultdict\nnested = defaultdict(lambda: defaultdict(int))\nnested['sales']['Q1'] = 100\nnested['sales']['Q2'] = 150\nnested['marketing']['Q1'] = 80\nprint('Nested:', dict(nested))",
    hint: "defaultdict calls factory function for missing keys"
  },
  {
    id: "py_dict_26",
    topicId: "py_dictionaries",
    question: "Use OrderedDict to maintain insertion order (Python <3.7).",
    mathSolution: "OrderedDict remembers order of insertion",
    codeSolution: "from collections import OrderedDict\n\n# Regular dict (Python 3.7+ maintains order anyway)\nregular_dict = {}\nregular_dict['banana'] = 3\nregular_dict['apple'] = 5\nregular_dict['orange'] = 2\nprint('Regular dict:', regular_dict)\n\n# OrderedDict (explicit order guarantee)\nordered = OrderedDict()\nordered['banana'] = 3\nordered['apple'] = 5\nordered['orange'] = 2\nprint('OrderedDict:', ordered)\n\n# Move to end\nordered.move_to_end('apple')\nprint('After move_to_end:', ordered)\n\n# Move to beginning\nordered.move_to_end('banana', last=False)\nprint('After move_to_front:', ordered)\n\n# Pop item (LIFO by default)\nitem = ordered.popitem()\nprint('Popped (last):', item)\nprint('After pop:', ordered)\n\n# Pop item from beginning\nitem = ordered.popitem(last=False)\nprint('Popped (first):', item)\nprint('After pop:', ordered)\n\n# Sort OrderedDict\nordered = OrderedDict(sorted(ordered.items(), key=lambda x: x[0]))\nprint('Sorted by key:', ordered)",
    hint: "OrderedDict has extra methods like move_to_end() and popitem()"
  },
  {
    id: "py_dict_27",
    topicId: "py_dictionaries",
    question: "Create a ChainMap to combine multiple dictionaries.",
    mathSolution: "ChainMap searches through multiple dicts in order",
    codeSolution: "from collections import ChainMap\n\n# Default settings\ndefaults = {'theme': 'light', 'language': 'en', 'notifications': True}\n\n# User settings\nuser_settings = {'theme': 'dark', 'language': 'es'}\n\n# Session settings (temporary)\nsession = {'language': 'fr'}\n\n# ChainMap searches in order: session -> user_settings -> defaults\nconfig = ChainMap(session, user_settings, defaults)\n\nprint('Theme:', config['theme'])  # From user_settings\nprint('Language:', config['language'])  # From session\nprint('Notifications:', config['notifications'])  # From defaults\n\n# Update affects only first dictionary\nconfig['theme'] = 'custom'\nprint('After update - session:', dict(session))\nprint('After update - user_settings:', user_settings)\n\n# Add new mapping\nnew_config = config.new_child({'font_size': 12})\nprint('New config:', dict(new_config))\n\n# Access all keys\nprint('\\nAll settings:')\nfor key, value in config.items():\n    print(f'  {key}: {value}')\n\n# Get value from specific dict\nprint('\\nFrom defaults only:', config.maps[-1]['language'])",
    hint: "ChainMap searches mappings in order, updates affect first mapping"
  },
  {
    id: "py_dict_28",
    topicId: "py_dictionaries",
    question: "Create a Counter to count hashable objects.",
    mathSolution: "Counter is a dict subclass for counting",
    codeSolution: "from collections import Counter\n\n# Count elements in a list\nfruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']\ncounter = Counter(fruits)\nprint('Counter:', counter)\nprint('Most common:', counter.most_common(2))\n\n# Count characters in a string\nword = 'mississippi'\nchar_count = Counter(word)\nprint('\\nCharacter count:', char_count)\nprint('Most common chars:', char_count.most_common(3))\n\n# Counter operations\nc1 = Counter(a=3, b=2, c=1)\nc2 = Counter(a=1, b=2, d=4)\n\nprint('\\nCounter operations:')\nprint('c1:', c1)\nprint('c2:', c2)\nprint('c1 + c2:', c1 + c2)\nprint('c1 - c2:', c1 - c2)  # Only positive counts\nprint('c1 & c2 (intersection):', c1 & c2)  # Min\nprint('c1 | c2 (union):', c1 | c2)  # Max\n\n# Update and subtract\nc1.update(['a', 'b', 'b'])\nprint('\\nAfter update:', c1)\n\nc1.subtract(['a', 'a'])\nprint('After subtract:', c1)\n\n# Get elements\nprint('\\nElements:', list(c1.elements()))",
    hint: "Counter has methods like most_common(), update(), subtract()"
  },
  {
    id: "py_dict_29",
    topicId: "py_dictionaries",
    question: "Find the difference between two dictionaries.",
    mathSolution: "Compare keys and values to find differences",
    codeSolution: "def dict_difference(d1, d2):\n    \"\"\"Find keys that are different between two dicts\"\"\"\n    diff = {\n        'only_in_first': set(d1.keys()) - set(d2.keys()),\n        'only_in_second': set(d2.keys()) - set(d1.keys()),\n        'value_differences': {}\n    }\n    \n    # Find keys with different values\n    common_keys = set(d1.keys()) & set(d2.keys())\n    for key in common_keys:\n        if d1[key] != d2[key]:\n            diff['value_differences'][key] = (d1[key], d2[key])\n    \n    return diff\n\ndef dict_diff_percentage(d1, d2):\n    \"\"\"Calculate percentage of difference\"\"\"\n    total_keys = len(set(d1.keys()) | set(d2.keys()))\n    diff_keys = len(set(d1.keys()) ^ set(d2.keys()))  # Symmetric difference\n    \n    common_keys = set(d1.keys()) & set(d2.keys())\n    value_diff = sum(1 for k in common_keys if d1[k] != d2[k])\n    \n    total_diff = diff_keys + value_diff\n    return (total_diff / total_keys * 100) if total_keys > 0 else 0\n\n# Test data\nold_config = {'host': 'localhost', 'port': 8080, 'debug': True, 'workers': 4}\nnew_config = {'host': 'localhost', 'port': 9090, 'debug': False, 'cache': True}\n\ndiff = dict_difference(old_config, new_config)\nprint('Differences:')\nprint(f'Only in old: {diff[\"only_in_first\"]}')\nprint(f'Only in new: {diff[\"only_in_second\"]}')\nprint('Value differences:')\nfor key, (old_val, new_val) in diff['value_differences'].items():\n    print(f'  {key}: {old_val} -> {new_val}')\n\npercentage = dict_diff_percentage(old_config, new_config)\nprint(f'\\nDifference percentage: {percentage:.1f}%')",
    hint: "Use set operations on keys and compare values for common keys"
  },
  {
    id: "py_dict_30",
    topicId: "py_dictionaries",
    question: "Create a dictionary with default values using setdefault().",
    mathSolution: "setdefault() returns existing value or sets default if missing",
    codeSolution: "# Word grouping by first letter\nwords = ['apple', 'banana', 'apricot', 'blueberry', 'cherry']\ngroups = {}\n\nfor word in words:\n    first = word[0]\n    # Set default empty list if key missing, then append\n    groups.setdefault(first, []).append(word)\n\nprint('Groups:', groups)\n\n# Counter using setdefault\ncounts = {}\nitems = ['a', 'b', 'a', 'c', 'b', 'a']\nfor item in items:\n    counts[item] = counts.setdefault(item, 0) + 1\nprint('Counts:', counts)\n\n# Nested structures\nusers = {}\nusers.setdefault('active', []).append('alice')\nusers.setdefault('inactive', []).append('bob')\nusers.setdefault('active', []).append('charlie')\nprint('Users:', users)\n\n# Compare with defaultdict\nfrom collections import defaultdict\nprint('\\nSame using defaultdict:')\ngroups2 = defaultdict(list)\nfor word in words:\n    groups2[word[0]].append(word)\nprint(dict(groups2))",
    hint: "setdefault(key, default) returns value and sets default if needed"
  },
  {
    id: "py_dict_31",
    topicId: "py_dictionaries",
    question: "Implement a simple database using dictionaries.",
    mathSolution: "Use dict of dicts for simple in-memory database",
    codeSolution: "class SimpleDB:\n    def __init__(self):\n        self.tables = {}\n    \n    def create_table(self, table_name):\n        if table_name not in self.tables:\n            self.tables[table_name] = {}\n            return True\n        return False\n    \n    def insert(self, table_name, record_id, data):\n        if table_name not in self.tables:\n            self.create_table(table_name)\n        self.tables[table_name][record_id] = data\n    \n    def get(self, table_name, record_id):\n        return self.tables.get(table_name, {}).get(record_id)\n    \n    def update(self, table_name, record_id, **updates):\n        if table_name in self.tables and record_id in self.tables[table_name]:\n            self.tables[table_name][record_id].update(updates)\n            return True\n        return False\n    \n    def delete(self, table_name, record_id):\n        if table_name in self.tables and record_id in self.tables[table_name]:\n            del self.tables[table_name][record_id]\n            return True\n        return False\n    \n    def query(self, table_name, **conditions):\n        results = []\n        if table_name in self.tables:\n            for record_id, data in self.tables[table_name].items():\n                match = all(data.get(k) == v for k, v in conditions.items())\n                if match:\n                    results.append((record_id, data))\n        return results\n\ndb = SimpleDB()\n\n# Insert data\ndb.insert('users', 1, {'name': 'Alice', 'age': 30, 'city': 'NYC'})\ndb.insert('users', 2, {'name': 'Bob', 'age': 25, 'city': 'LA'})\ndb.insert('users', 3, {'name': 'Charlie', 'age': 35, 'city': 'NYC'})\n\n# Query\nprint('Users in NYC:')\nfor record_id, data in db.query('users', city='NYC'):\n    print(f'  {record_id}: {data}')\n\n# Update\ndb.update('users', 1, age=31)\nprint('\\nAfter update:', db.get('users', 1))\n\n# Delete\ndb.delete('users', 2)\nprint('\\nAfter delete:', db.get('users', 2))",
    hint: "Use nested dictionaries: table_name -> record_id -> data"
  },
  {
    id: "py_dict_32",
    topicId: "py_dictionaries",
    question: "Create a dictionary with sorted keys automatically.",
    mathSolution: "Use SortedDict from sortedcontainers or custom implementation",
    codeSolution: "# Using sortedcontainers library (pip install sortedcontainers)\n# from sortedcontainers import SortedDict\n\n# Custom simple sorted dict (maintains sorted order on access)\nclass SimpleSortedDict:\n    def __init__(self):\n        self._data = {}\n    \n    def __setitem__(self, key, value):\n        self._data[key] = value\n    \n    def __getitem__(self, key):\n        return self._data[key]\n    \n    def items(self):\n        return sorted(self._data.items())\n    \n    def keys(self):\n        return sorted(self._data.keys())\n    \n    def values(self):\n        return [v for k, v in sorted(self._data.items())]\n    \n    def __str__(self):\n        return str(dict(self.items()))\n\n# Using built-in sorted for display\nregular_dict = {'banana': 3, 'apple': 5, 'orange': 2, 'grape': 4}\nprint('Regular dict:', regular_dict)\nprint('Sorted by key:', dict(sorted(regular_dict.items())))\n\n# Using custom class\nsorted_dict = SimpleSortedDict()\nsorted_dict['banana'] = 3\nsorted_dict['apple'] = 5\nsorted_dict['orange'] = 2\nsorted_dict['grape'] = 4\n\nprint('\\nSorted dict:')\nfor key, value in sorted_dict.items():\n    print(f'  {key}: {value}')\n\n# Always sorted iteration\nprint('\\nKeys in order:', list(sorted_dict.keys()))\n\n# Binary search on sorted keys\ndef binary_search(sorted_dict, target):\n    keys = list(sorted_dict.keys())\n    left, right = 0, len(keys) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if keys[mid] == target:\n            return sorted_dict[target]\n        elif keys[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return None\n\nprint('\\nSearch for \"orange\":', binary_search(sorted_dict, 'orange'))",
    hint: "For true sorted dict, consider using sortedcontainers library"
  },
  {
    id: "py_dict_33",
    topicId: "py_dictionaries",
    question: "Implement a dictionary with expiration (TTL) for keys.",
    mathSolution: "Store timestamp with each value and check on access",
    codeSolution: "import time\n\nclass ExpiringDict:\n    def __init__(self):\n        self._data = {}  # key -> (value, expiry_time)\n    \n    def set(self, key, value, ttl_seconds):\n        \"\"\"Set key with time-to-live in seconds\"\"\"\n        expiry = time.time() + ttl_seconds\n        self._data[key] = (value, expiry)\n    \n    def get(self, key, default=None):\n        if key in self._data:\n            value, expiry = self._data[key]\n            if time.time() < expiry:\n                return value\n            else:\n                # Expired - remove\n                del self._data[key]\n        return default\n    \n    def __getitem__(self, key):\n        value = self.get(key)\n        if value is None:\n            raise KeyError(key)\n        return value\n    \n    def __setitem__(self, key, value):\n        # For direct assignment, use default TTL\n        self.set(key, value, 60)  # Default 60 seconds\n    \n    def cleanup(self):\n        \"\"\"Remove all expired keys\"\"\"\n        now = time.time()\n        expired = [k for k, (_, exp) in self._data.items() if now >= exp]\n        for k in expired:\n            del self._data[k]\n        return len(expired)\n    \n    def __len__(self):\n        self.cleanup()\n        return len(self._data)\n\ncache = ExpiringDict()\n\n# Set with TTL\ncache.set('user:1', {'name': 'Alice'}, 3)  # 3 seconds\ncache.set('user:2', {'name': 'Bob'}, 5)    # 5 seconds\n\nprint('Initial:')\nprint('user:1:', cache.get('user:1'))\nprint('user:2:', cache.get('user:2'))\n\ntime.sleep(4)\nprint('\\nAfter 4 seconds:')\nprint('user:1:', cache.get('user:1', 'expired'))\nprint('user:2:', cache.get('user:2'))\n\nprint(f'Active keys: {len(cache)}')",
    hint: "Store expiry timestamp and check on every access"
  },
  {
    id: "py_dict_34",
    topicId: "py_dictionaries",
    question: "Create a bidirectional dictionary (one-to-one mapping).",
    mathSolution: "Maintain two dictionaries: forward and reverse",
    codeSolution: "class BidirectionalDict:\n    def __init__(self):\n        self._forward = {}\n        self._reverse = {}\n    \n    def __setitem__(self, key, value):\n        # Remove old reverse mapping if key existed\n        if key in self._forward:\n            old_value = self._forward[key]\n            del self._reverse[old_value]\n        \n        # Remove old forward mapping if value existed\n        if value in self._reverse:\n            old_key = self._reverse[value]\n            del self._forward[old_key]\n        \n        self._forward[key] = value\n        self._reverse[value] = key\n    \n    def __getitem__(self, key):\n        return self._forward[key]\n    \n    def get_key(self, value):\n        \"\"\"Get key by value\"\"\"\n        return self._reverse.get(value)\n    \n    def __delitem__(self, key):\n        if key in self._forward:\n            value = self._forward[key]\n            del self._forward[key]\n            del self._reverse[value]\n    \n    def __len__(self):\n        return len(self._forward)\n    \n    def __str__(self):\n        return str(self._forward)\n    \n    def inverse(self):\n        \"\"\"Return the reverse dictionary\"\"\"\n        return self._reverse.copy()\n\n# Test bidirectional dict\nbd = BidirectionalDict()\nbd['a'] = 1\nbd['b'] = 2\nbd['c'] = 3\n\nprint('Forward:', bd)\nprint('Value of a:', bd['a'])\nprint('Key for 2:', bd.get_key(2))\n\n# Update with existing value\nbd['d'] = 2  # This will remove b->2\nprint('\\nAfter adding d->2:')\nprint('Forward:', bd)\nprint('Key for 2:', bd.get_key(2))\n\n# Delete\ndel bd['a']\nprint('\\nAfter deleting a:')\nprint('Forward:', bd)\nprint('Key for 1:', bd.get_key(1))",
    hint: "Maintain two dictionaries and update both on changes"
  },
  {
    id: "py_dict_35",
    topicId: "py_dictionaries",
    question: "Implement a dictionary with maximum size (LRU eviction).",
    mathSolution: "Track access order and evict least recently used when full",
    codeSolution: "from collections import OrderedDict\n\nclass LRUDict:\n    def __init__(self, maxsize=128):\n        self.maxsize = maxsize\n        self.cache = OrderedDict()\n        self.hits = 0\n        self.misses = 0\n    \n    def __getitem__(self, key):\n        if key in self.cache:\n            self.hits += 1\n            self.cache.move_to_end(key)\n            return self.cache[key]\n        self.misses += 1\n        raise KeyError(key)\n    \n    def get(self, key, default=None):\n        try:\n            return self[key]\n        except KeyError:\n            return default\n    \n    def __setitem__(self, key, value):\n        if key in self.cache:\n            self.cache.move_to_end(key)\n        elif len(self.cache) >= self.maxsize:\n            # Remove least recently used (first item)\n            self.cache.popitem(last=False)\n        self.cache[key] = value\n    \n    def __contains__(self, key):\n        return key in self.cache\n    \n    def __len__(self):\n        return len(self.cache)\n    \n    def clear(self):\n        self.cache.clear()\n        self.hits = self.misses = 0\n    \n    def stats(self):\n        total = self.hits + self.misses\n        hit_rate = (self.hits / total * 100) if total > 0 else 0\n        return {\n            'size': len(self.cache),\n            'hits': self.hits,\n            'misses': self.misses,\n            'hit_rate': f'{hit_rate:.1f}%'\n        }\n\n# Test LRU cache\nlru = LRUDict(maxsize=3)\n\n# Add items\nlru['a'] = 1\nlru['b'] = 2\nlru['c'] = 3\nprint('Initial:', dict(lru.cache))\n\n# Access 'a' (makes it most recent)\nprint('Get a:', lru['a'])\nprint('After access:', dict(lru.cache))\n\n# Add new item - should evict least recent (b)\nlru['d'] = 4\nprint('After adding d:', dict(lru.cache))\n\n# Access pattern\nfor key in ['a', 'b', 'c', 'd', 'a']:\n    lru.get(key)\n\nprint('\\nStats:', lru.stats())",
    hint: "Use OrderedDict and move_to_end() to track access order"
  },
  {
    id: "py_dict_36",
    topicId: "py_dictionaries",
    question: "Create a dictionary that supports dot notation access.",
    mathSolution: "Override __getattr__ and __setattr__ for dot access",
    codeSolution: "class DotDict(dict):\n    \"\"\"Dictionary that allows dot notation access\"\"\"\n    \n    def __getattr__(self, key):\n        try:\n            return self[key]\n        except KeyError:\n            raise AttributeError(f\"'{type(self).__name__}' object has no attribute '{key}'\")\n    \n    def __setattr__(self, key, value):\n        self[key] = value\n    \n    def __delattr__(self, key):\n        try:\n            del self[key]\n        except KeyError:\n            raise AttributeError(f\"'{type(self).__name__}' object has no attribute '{key}'\")\n    \n    def __getitem__(self, key):\n        val = super().__getitem__(key)\n        if isinstance(val, dict):\n            return DotDict(val)\n        return val\n\n# Test DotDict\nconfig = DotDict()\nconfig.debug = True\nconfig.database.host = 'localhost'  # Nested dot access\nconfig.database.port = 5432\nconfig.database.name = 'mydb'\n\nprint('Debug:', config.debug)\nprint('Database host:', config.database.host)\nprint('Full config:', config)\n\n# Access nested\nprint('\\nDatabase settings:')\nfor key, value in config.database.items():\n    print(f'  {key}: {value}')\n\n# Update nested\nconfig.database.port = 5433\nprint('Updated port:', config.database.port)\n\n# Regular dict access still works\nprint('Dict access:', config['database']['host'])\n\n# Convert regular dict\ndata = {'user': {'name': 'Alice', 'age': 30}}\ndot_data = DotDict(data)\nprint('\\nConverted dict:', dot_data.user.name)",
    hint: "Subclass dict and override attribute access methods"
  },
  {
    id: "py_dict_37",
    topicId: "py_dictionaries",
    question: "Validate dictionary keys and values against a schema.",
    mathSolution: "Define expected types and required keys",
    codeSolution: "class DictValidator:\n    def __init__(self, schema):\n        \"\"\"\n        schema: dict of {key: (required, type, validator_func)}\n        \"\"\"\n        self.schema = schema\n    \n    def validate(self, data):\n        errors = []\n        \n        # Check required keys\n        for key, (required, expected_type, validator) in self.schema.items():\n            if required and key not in data:\n                errors.append(f'Missing required key: {key}')\n            elif key in data:\n                value = data[key]\n                \n                # Type check\n                if expected_type and not isinstance(value, expected_type):\n                    errors.append(f'Key {key}: expected {expected_type.__name__}, got {type(value).__name__}')\n                \n                # Custom validation\n                if validator and not validator(value):\n                    errors.append(f'Key {key}: validation failed')\n        \n        # Check for extra keys\n        extra_keys = set(data.keys()) - set(self.schema.keys())\n        if extra_keys:\n            errors.append(f'Unexpected keys: {extra_keys}')\n        \n        return {\n            'valid': len(errors) == 0,\n            'errors': errors\n        }\n\n# Define schema\nschema = {\n    'name': (True, str, lambda x: len(x) > 0),\n    'age': (True, int, lambda x: 0 <= x <= 150),\n    'email': (True, str, lambda x: '@' in x),\n    'phone': (False, str, lambda x: len(x) == 10 if x else True),\n    'score': (False, float, lambda x: 0 <= x <= 100)\n}\n\nvalidator = DictValidator(schema)\n\n# Test valid data\nvalid_data = {\n    'name': 'Alice',\n    'age': 30,\n    'email': 'alice@example.com',\n    'phone': '1234567890',\n    'score': 95.5\n}\nresult = validator.validate(valid_data)\nprint('Valid data:', result)\n\n# Test invalid data\ninvalid_data = {\n    'name': '',\n    'age': 200,\n    'email': 'invalid-email',\n    'extra': 'field'\n}\nresult = validator.validate(invalid_data)\nprint('\\nInvalid data:', result)",
    hint: "Define schema with required flag, type, and custom validator"
  },
  {
    id: "py_dict_38",
    topicId: "py_dictionaries",
    question: "Implement deep merge for nested dictionaries.",
    mathSolution: "Recursively merge nested dictionaries",
    codeSolution: "def deep_merge(dict1, dict2, resolve_conflicts=None):\n    \"\"\"\n    Deep merge two dictionaries\n    resolve_conflicts: function(key, value1, value2) returning merged value\n    \"\"\"\n    result = dict1.copy()\n    \n    for key, value2 in dict2.items():\n        if key in result:\n            if isinstance(result[key], dict) and isinstance(value2, dict):\n                # Both are dicts - recursive merge\n                result[key] = deep_merge(result[key], value2, resolve_conflicts)\n            elif resolve_conflicts:\n                # Use custom resolution\n                result[key] = resolve_conflicts(key, result[key], value2)\n            else:\n                # Default: second overwrites first\n                result[key] = value2\n        else:\n            result[key] = value2\n    \n    return result\n\n# Test data\nd1 = {\n    'a': 1,\n    'b': {\n        'c': 2,\n        'd': 3,\n        'e': {\n            'f': 4\n        }\n    },\n    'g': [1, 2]\n}\n\nd2 = {\n    'a': 10,\n    'b': {\n        'c': 20,\n        'e': {\n            'g': 5\n        },\n        'h': 6\n    },\n    'g': [3, 4],\n    'i': 7\n}\n\n# Simple merge (second overwrites first)\nmerged = deep_merge(d1, d2)\nprint('Simple merge:')\nprint(merged)\n\n# Merge with custom conflict resolution\ndef sum_conflict(key, v1, v2):\n    if isinstance(v1, (int, float)) and isinstance(v2, (int, float)):\n        return v1 + v2\n    if isinstance(v1, list) and isinstance(v2, list):\n        return v1 + v2\n    return v2  # Default to second\n\nmerged_sum = deep_merge(d1, d2, sum_conflict)\nprint('\\nMerge with sum resolution:')\nprint(merged_sum)",
    hint: "Recursively process nested dictionaries and handle conflicts"
  },
  {
    id: "py_dict_39",
    topicId: "py_dictionaries",
    question: "Create a dictionary that can be indexed by multiple keys (multi-key).",
    mathSolution: "Store data under multiple key aliases",
    codeSolution: "class MultiKeyDict:\n    def __init__(self):\n        self._data = {}\n        self._aliases = {}  # Maps aliases to primary keys\n    \n    def __setitem__(self, keys, value):\n        \"\"\"keys can be single key or tuple of keys\"\"\"\n        if not isinstance(keys, tuple):\n            keys = (keys,)\n        \n        # Use first key as primary\n        primary = keys[0]\n        self._data[primary] = value\n        \n        # Store aliases\n        for key in keys[1:]:\n            self._aliases[key] = primary\n    \n    def __getitem__(self, key):\n        # Check if it's an alias\n        if key in self._aliases:\n            key = self._aliases[key]\n        return self._data[key]\n    \n    def __contains__(self, key):\n        return key in self._data or key in self._aliases\n    \n    def get(self, key, default=None):\n        try:\n            return self[key]\n        except KeyError:\n            return default\n    \n    def __delitem__(self, key):\n        if key in self._aliases:\n            key = self._aliases[key]\n        \n        if key in self._data:\n            # Remove all aliases pointing to this primary\n            aliases_to_remove = [k for k, v in self._aliases.items() if v == key]\n            for alias in aliases_to_remove:\n                del self._aliases[alias]\n            del self._data[key]\n\n# Test multi-key dict\nmk = MultiKeyDict()\n\n# Store with multiple keys\nmk[('user:1', 'alice', 'alice@email.com')] = {'name': 'Alice', 'age': 30}\nmk[('user:2', 'bob')] = {'name': 'Bob', 'age': 25}\n\n# Access by any key\nprint('By primary key:', mk['user:1'])\nprint('By alias alice:', mk['alice'])\nprint('By email:', mk['alice@email.com'])\n\n# Check existence\nprint('\\nalice in dict:', 'alice' in mk)\nprint('unknown in dict:', 'unknown' in mk)\n\n# Delete by alias\ndel mk['bob']\nprint('bob in dict:', 'bob' in mk)",
    hint: "Store aliases mapping to primary keys"
  },
  {
    id: "py_dict_40",
    topicId: "py_dictionaries",
    question: "Implement a dictionary with automatic key transformation.",
    mathSolution: "Apply function to keys on set/get",
    codeSolution: "class TransformKeyDict:\n    def __init__(self, key_transform=str.lower):\n        self._data = {}\n        self.transform = key_transform\n    \n    def __setitem__(self, key, value):\n        transformed = self.transform(key)\n        self._data[transformed] = value\n    \n    def __getitem__(self, key):\n        transformed = self.transform(key)\n        return self._data[transformed]\n    \n    def __contains__(self, key):\n        transformed = self.transform(key)\n        return transformed in self._data\n    \n    def get(self, key, default=None):\n        transformed = self.transform(key)\n        return self._data.get(transformed, default)\n    \n    def __str__(self):\n        return str(self._data)\n\n# Case-insensitive dictionary\ncase_insensitive = TransformKeyDict(str.lower)\n\ncase_insensitive['Name'] = 'Alice'\ncase_insensitive['AGE'] = 30\n\nprint('Access by \"name\":', case_insensitive['name'])\nprint('Access by \"Name\":', case_insensitive['Name'])\nprint('Access by \"AGE\":', case_insensitive['age'])\nprint('Contains \"Age\":', 'Age' in case_insensitive)\n\n# Strip whitespace\ndef strip_key(key):\n    return key.strip()\n\nstrip_dict = TransformKeyDict(strip_key)\nstrip_dict['  user  '] = 'alice'\nstrip_dict['email '] = 'alice@example.com'\n\nprint('\\nStrip dict:', strip_dict)\nprint('Access with spaces:', strip_dict['user'])\n\n# Custom transformation\nclass PathKeyDict(TransformKeyDict):\n    def __init__(self):\n        super().__init__(key_transform=self._normalize_path)\n    \n    def _normalize_path(self, key):\n        # Convert Windows paths to POSIX style\n        return key.replace('\\\\', '/').lower()\n\npath_dict = PathKeyDict()\npath_dict['C:\\\\Users\\\\Alice'] = 'home'\nprint('\\nPath dict:', path_dict['c:/users/alice'])",
    hint: "Apply transformation function to all keys before storage/access"
  },
  {
    id: "py_dict_41",
    topicId: "py_dictionaries",
    question: "Create a dictionary that tracks access statistics.",
    mathSolution: "Count how many times each key is accessed",
    codeSolution: "class TrackedDict:\n    def __init__(self, initial_data=None):\n        self._data = dict(initial_data or {})\n        self._access_count = {}\n        self._write_count = {}\n    \n    def __getitem__(self, key):\n        self._access_count[key] = self._access_count.get(key, 0) + 1\n        return self._data[key]\n    \n    def __setitem__(self, key, value):\n        self._write_count[key] = self._write_count.get(key, 0) + 1\n        self._data[key] = value\n    \n    def __contains__(self, key):\n        return key in self._data\n    \n    def get(self, key, default=None):\n        self._access_count[key] = self._access_count.get(key, 0) + 1\n        return self._data.get(key, default)\n    \n    def get_stats(self, key=None):\n        if key:\n            return {\n                'accesses': self._access_count.get(key, 0),\n                'writes': self._write_count.get(key, 0)\n            }\n        return {\n            'total_accesses': sum(self._access_count.values()),\n            'total_writes': sum(self._write_count.values()),\n            'most_accessed': max(self._access_count.items(), key=lambda x: x[1]) if self._access_count else None,\n            'most_written': max(self._write_count.items(), key=lambda x: x[1]) if self._write_count else None\n        }\n    \n    def reset_stats(self):\n        self._access_count.clear()\n        self._write_count.clear()\n\n# Test tracked dict\ntd = TrackedDict({'a': 1, 'b': 2, 'c': 3})\n\n# Access patterns\nfor i in range(5):\n    td['a']  # Access a 5 times\n    td.get('b')  # Access b 5 times\n    if i % 2 == 0:\n        td['c'] = i  # Write c 3 times\n\ntd['d'] = 4  # Write d once\n\n# Stats by key\nprint('Stats for a:', td.get_stats('a'))\nprint('Stats for c:', td.get_stats('c'))\n\n# Overall stats\noverall = td.get_stats()\nprint('\\nOverall stats:')\nprint(f'  Total accesses: {overall[\"total_accesses\"]}')\nprint(f'  Total writes: {overall[\"total_writes\"]}')\nprint(f'  Most accessed: {overall[\"most_accessed\"]}')\nprint(f'  Most written: {overall[\"most_written\"]}')",
    hint: "Separate counters for reads and writes, update on each operation"
  },
  {
    id: "py_dict_42",
    topicId: "py_dictionaries",
    question: "Implement a dictionary with version history (undo/redo).",
    mathSolution: "Store value history for each key",
    codeSolution: "class VersionedDict:\n    def __init__(self):\n        self._data = {}  # key -> [(version, value)]\n        self._current_version = 0\n        self._history = []  # List of (key, old_value, new_value) for undo\n    \n    def __setitem__(self, key, value):\n        if key not in self._data:\n            self._data[key] = []\n        \n        old_value = self._data[key][-1][1] if self._data[key] else None\n        self._data[key].append((self._current_version, value))\n        self._history.append(('set', key, old_value, value))\n        self._current_version += 1\n    \n    def __getitem__(self, key):\n        return self._data[key][-1][1]\n    \n    def get_at_version(self, key, version):\n        \"\"\"Get value at specific version\"\"\"\n        for v, val in reversed(self._data.get(key, [])):\n            if v <= version:\n                return val\n        raise KeyError(f'No version {version} for {key}')\n    \n    def undo(self):\n        if not self._history:\n            return False\n        \n        action, key, old_value, new_value = self._history.pop()\n        if old_value is None:\n            # Key was added - remove it\n            del self._data[key]\n        else:\n            # Restore old value\n            self._data[key].pop()  # Remove current\n            if not self._data[key] and old_value is not None:\n                # Add back if it was the first version\n                self._data[key] = [(self._current_version - 1, old_value)]\n        \n        self._current_version -= 1\n        return True\n    \n    def get_history(self, key):\n        \"\"\"Get all versions for a key\"\"\"\n        return [(v, val) for v, val in self._data.get(key, [])]\n\n# Test versioned dict\nvd = VersionedDict()\n\n# Make changes\nvd['name'] = 'Alice'\nvd['age'] = 30\nvd['name'] = 'Bob'\nvd['age'] = 31\nvd['name'] = 'Charlie'\n\nprint('Current values:')\nprint('name:', vd['name'])\nprint('age:', vd['age'])\n\n# History\nprint('\\nHistory for name:', vd.get_history('name'))\n\n# Get at specific versions\nprint('\\nName at version 0:', vd.get_at_version('name', 0))\nprint('Name at version 2:', vd.get_at_version('name', 2))\n\n# Undo\nprint('\\nUndo:')\nvd.undo()\nprint('After undo - name:', vd['name'])\nvd.undo()\nprint('After second undo - age:', vd['age'])",
    hint: "Store list of (version, value) for each key, maintain action history"
  },
  {
    id: "py_dict_43",
    topicId: "py_dictionaries",
    question: "Create a dictionary with automatic key generation (like auto-increment).",
    mathSolution: "Generate keys automatically when adding values without keys",
    codeSolution: "class AutoKeyDict:\n    def __init__(self, key_prefix='item', start=1):\n        self._data = {}\n        self.key_prefix = key_prefix\n        self.next_key = start\n    \n    def add(self, value):\n        \"\"\"Add value with auto-generated key\"\"\"\n        while True:\n            key = f'{self.key_prefix}_{self.next_key}'\n            self.next_key += 1\n            if key not in self._data:\n                self._data[key] = value\n                return key\n    \n    def __setitem__(self, key, value):\n        self._data[key] = value\n        # Update next_key if key is numeric\n        if key.startswith(self.key_prefix + '_'):\n            try:\n                num = int(key.split('_')[-1])\n                self.next_key = max(self.next_key, num + 1)\n            except ValueError:\n                pass\n    \n    def __getitem__(self, key):\n        return self._data[key]\n    \n    def __contains__(self, key):\n        return key in self._data\n    \n    def __str__(self):\n        return str(self._data)\n\n# Test auto-key dict\nakd = AutoKeyDict('user')\n\n# Add without keys\nid1 = akd.add({'name': 'Alice', 'age': 30})\nid2 = akd.add({'name': 'Bob', 'age': 25})\nid3 = akd.add({'name': 'Charlie', 'age': 35})\n\nprint(f'Added: {id1}, {id2}, {id3}')\nprint('All items:')\nfor key, value in akd._data.items():\n    print(f'  {key}: {value}')\n\n# Add with explicit key\nakd['admin_1'] = {'name': 'Admin', 'role': 'admin'}\n\n# Auto-gen continues from max\nid4 = akd.add({'name': 'Diana', 'age': 28})\nprint(f'\\nNext auto key: {id4}')\n\n# Custom prefix and start\nnumeric_dict = AutoKeyDict('task', start=100)\nt1 = numeric_dict.add('Task 1')\nt2 = numeric_dict.add('Task 2')\nprint('\\nNumeric keys:', t1, t2)",
    hint: "Track next available key and generate on add()"
  },
  {
    id: "py_dict_44",
    topicId: "py_dictionaries",
    question: "Implement a dictionary with key-dependent default values.",
    mathSolution: "Use function to generate default value based on key",
    codeSolution: "class DefaultFuncDict:\n    def __init__(self, default_factory):\n        \"\"\"\n        default_factory: function(key) -> default value\n        \"\"\"\n        self._data = {}\n        self.default_factory = default_factory\n    \n    def __getitem__(self, key):\n        if key not in self._data:\n            self._data[key] = self.default_factory(key)\n        return self._data[key]\n    \n    def __setitem__(self, key, value):\n        self._data[key] = value\n    \n    def __contains__(self, key):\n        return key in self._data\n    \n    def get(self, key, default=None):\n        if key in self._data:\n            return self._data[key]\n        if default is not None:\n            return default\n        return self.default_factory(key)\n    \n    def __str__(self):\n        return str(self._data)\n\n# Examples\ndef key_length_default(key):\n    return len(key)\n\ndef key_prefix_default(key):\n    return f'default_{key}'\n\ndef counter_default(key):\n    return {'visits': 0, 'key': key}\n\n# Test\nlen_dict = DefaultFuncDict(key_length_default)\nprint('Length dict:')\nprint('apple:', len_dict['apple'])\nprint('banana:', len_dict['banana'])\nprint('cherry:', len_dict['cherry'])\n\nprefix_dict = DefaultFuncDict(key_prefix_default)\nprint('\\nPrefix dict:')\nprint('user:', prefix_dict['user'])\nprint('product:', prefix_dict['product'])\n\ncounter_dict = DefaultFuncDict(counter_default)\ncounter_dict['page1']['visits'] += 1\ncounter_dict['page2']['visits'] += 1\ncounter_dict['page1']['visits'] += 1\nprint('\\nCounter dict:')\nfor key, value in counter_dict._data.items():\n    print(f'  {key}: {value}')",
    hint: "Call default_factory(key) when key not found"
  },
  {
    id: "py_dict_45",
    topicId: "py_dictionaries",
    question: "Create a dictionary that supports path-based access for nested structures.",
    mathSolution: "Access nested values using dot-separated paths",
    codeSolution: "class PathDict:\n    def __init__(self, data=None):\n        self._data = data or {}\n    \n    def _get_path_parts(self, path):\n        if isinstance(path, str):\n            return path.split('.')\n        return path\n    \n    def get(self, path, default=None):\n        parts = self._get_path_parts(path)\n        current = self._data\n        \n        for part in parts:\n            if isinstance(current, dict) and part in current:\n                current = current[part]\n            else:\n                return default\n        return current\n    \n    def set(self, path, value):\n        parts = self._get_path_parts(path)\n        current = self._data\n        \n        # Navigate to parent\n        for part in parts[:-1]:\n            if part not in current:\n                current[part] = {}\n            current = current[part]\n            if not isinstance(current, dict):\n                raise TypeError(f'Cannot set {path}: {part} is not a dict')\n        \n        current[parts[-1]] = value\n    \n    def exists(self, path):\n        return self.get(path) is not None\n    \n    def delete(self, path):\n        parts = self._get_path_parts(path)\n        current = self._data\n        \n        for part in parts[:-1]:\n            if part not in current:\n                return False\n            current = current[part]\n            if not isinstance(current, dict):\n                return False\n        \n        if parts[-1] in current:\n            del current[parts[-1]]\n            return True\n        return False\n    \n    def __str__(self):\n        return str(self._data)\n\n# Test path dict\npd = PathDict({\n    'user': {\n        'profile': {\n            'name': 'Alice',\n            'age': 30\n        },\n        'settings': {\n            'theme': 'dark',\n            'notifications': True\n        }\n    }\n})\n\n# Get by path\nprint('user.profile.name:', pd.get('user.profile.name'))\nprint('user.settings.theme:', pd.get('user.settings.theme'))\nprint('nonexistent.path:', pd.get('nonexistent.path', 'default'))\n\n# Set by path\npd.set('user.profile.email', 'alice@example.com')\npd.set('user.settings.language', 'en')\n\n# Check existence\nprint('\\nuser.profile.email exists:', pd.exists('user.profile.email'))\n\n# Delete\npd.delete('user.settings.notifications')\nprint('After delete:', pd.get('user.settings'))\n\n# Nested creation\npd.set('app.config.debug', True)\nprint('\\nAfter nested creation:')\nprint(pd)",
    hint: "Split path string and navigate nested dictionaries"
  },
  {
    id: "py_dict_46",
    topicId: "py_dictionaries",
    question: "Implement a dictionary with range-based key lookup.",
    mathSolution: "Find keys within a numeric range",
    codeSolution: "class RangeDict:\n    def __init__(self):\n        self._data = {}\n    \n    def __setitem__(self, key_range, value):\n        \"\"\"key_range can be (start, end) tuple or slice\"\"\"\n        if isinstance(key_range, slice):\n            start = key_range.start or float('-inf')\n            end = key_range.stop or float('inf')\n        else:\n            start, end = key_range\n        \n        self._data[(start, end)] = value\n    \n    def __getitem__(self, key):\n        if not isinstance(key, (int, float)):\n            raise TypeError('Key must be numeric')\n        \n        for (start, end), value in self._data.items():\n            if start <= key < end:\n                return value\n        \n        raise KeyError(f'No range contains {key}')\n    \n    def get(self, key, default=None):\n        try:\n            return self[key]\n        except KeyError:\n            return default\n    \n    def __contains__(self, key):\n        return any(start <= key < end for start, end in self._data)\n\n# Test range dict\nrd = RangeDict()\n\n# Define ranges\nrd[(0, 18)] = 'Child'\nrd[(18, 65)] = 'Adult'\nrd[(65, 120)] = 'Senior'\nrd[(-float('inf'), 0)] = 'Invalid age'\n\n# Lookup values\nages = [5, 25, 70, -5, 100]\nfor age in ages:\n    category = rd.get(age, 'Unknown')\n    print(f'Age {age}: {category}')\n\n# Using slice notation\nrd2 = RangeDict()\nrd2[0:18] = 'Minor'\nrd2[18:65] = 'Working age'\nrd2[65:] = 'Retired'\n\nprint('\\nWith slice notation:')\nfor age in [10, 30, 70]:\n    print(f'Age {age}: {rd2[age]}')\n\n# Multiple ranges for same value\npricing = RangeDict()\npricing[(0, 10)] = 5.0    # $5 for 0-9 items\npricing[(10, 50)] = 4.5   # $4.5 for 10-49 items\npricing[(50, 100)] = 4.0  # $4 for 50-99 items\npricing[(100, float('inf'))] = 3.5  # $3.5 for 100+ items\n\nquantities = [5, 25, 75, 200]\nprint('\\nBulk pricing:')\nfor qty in quantities:\n    print(f'{qty} items: ${pricing[qty]:.2f} each')",
    hint: "Store ranges as (start, end) tuples and iterate to find match"
  },
  {
    id: "py_dict_47",
    topicId: "py_dictionaries",
    question: "Create a dictionary with composite keys from multiple values.",
    mathSolution: "Use tuples as keys combining multiple values",
    codeSolution: "class CompositeKeyDict:\n    def __init__(self):\n        self._data = {}\n    \n    def _make_key(self, *args):\n        return tuple(args)\n    \n    def __setitem__(self, key_parts, value):\n        if not isinstance(key_parts, tuple):\n            key_parts = (key_parts,)\n        self._data[key_parts] = value\n    \n    def get(self, *key_parts):\n        key = self._make_key(*key_parts)\n        return self._data.get(key)\n    \n    def query(self, **criteria):\n        \"\"\"Find items matching partial criteria\"\"\"\n        results = []\n        for key, value in self._data.items():\n            match = True\n            for pos, (k, v) in enumerate(criteria.items()):\n                if pos >= len(key) or key[pos] != v:\n                    match = False\n                    break\n            if match:\n                results.append((key, value))\n        return results\n\n# Test composite key dict\nck = CompositeKeyDict()\n\n# Store with composite keys\nck[('user', 'alice', 'email')] = 'alice@example.com'\nck[('user', 'alice', 'age')] = 30\nck[('user', 'bob', 'email')] = 'bob@example.com'\nck[('user', 'bob', 'age')] = 25\nck[('product', 'laptop', 'price')] = 999.99\nck[('product', 'mouse', 'price')] = 29.99\n\n# Access\nprint('Alice email:', ck.get('user', 'alice', 'email'))\nprint('Bob age:', ck.get('user', 'bob', 'age'))\n\n# Query by partial keys\nprint('\\nAll user data:')\nfor key, value in ck.query(type='user'):\n    print(f'  {key}: {value}')\n\nprint('\\nAll prices:')\nfor key, value in ck.query(part2='price'):\n    print(f'  {key}: {value}')\n\n# 2D grid example\ngrid = CompositeKeyDict()\nfor x in range(3):\n    for y in range(3):\n        grid[(x, y)] = f'Cell({x},{y})'\n\nprint('\\nGrid row 1:')\nfor key, value in grid.query(x=1):\n    print(f'  {key}: {value}')",
    hint: "Use tuples as keys, provide query method for partial matches"
  },
  {
    id: "py_dict_48",
    topicId: "py_dictionaries",
    question: "Implement a dictionary with lazy loading of values.",
    mathSolution: "Store callables that compute values on first access",
    codeSolution: "class LazyDict:\n    def __init__(self):\n        self._data = {}\n        self._loaded = set()\n    \n    def add_lazy(self, key, loader_func):\n        \"\"\"Add a lazy-loaded value\"\"\"\n        self._data[key] = loader_func\n    \n    def __getitem__(self, key):\n        if key not in self._data:\n            raise KeyError(key)\n        \n        if key not in self._loaded:\n            # Load the value\n            print(f'Loading {key}...')\n            value = self._data[key]()  # Call the loader\n            self._data[key] = value\n            self._loaded.add(key)\n        \n        return self._data[key]\n    \n    def __contains__(self, key):\n        return key in self._data\n    \n    def get(self, key, default=None):\n        try:\n            return self[key]\n        except KeyError:\n            return default\n    \n    def is_loaded(self, key):\n        return key in self._loaded\n    \n    def loaded_keys(self):\n        return list(self._loaded)\n\n# Test lazy dict\nimport time\n\nld = LazyDict()\n\n# Add lazy loaders\nld.add_lazy('config', lambda: {'host': 'localhost', 'port': 8080})\nld.add_lazy('data', lambda: [i for i in range(1000000)])  # Large data\nld.add_lazy('timestamp', lambda: time.time())\n\n# First access - loads\nprint('First access to config:')\nprint(ld['config'])\nprint('Loaded keys:', ld.loaded_keys())\n\n# Second access - cached\nprint('\\nSecond access to config:')\nprint(ld['config'])\n\n# Access another\nprint('\\nAccessing timestamp:')\nprint(ld['timestamp'])\nprint('Loaded keys:', ld.loaded_keys())\n\n# Data not loaded yet\nprint('\\nData loaded?', ld.is_loaded('data'))\n\n# Force load\nprint('Loading data...')\ndata = ld['data']\nprint(f'Data length: {len(data)}')",
    hint: "Store loader functions, call them on first access and cache result"
  },
  {
    id: "py_dict_49",
    topicId: "py_dictionaries",
    question: "Create a dictionary that can be observed (observer pattern).",
    mathSolution: "Notify callbacks when dictionary changes",
    codeSolution: "class ObservableDict:\n    def __init__(self, initial_data=None):\n        self._data = dict(initial_data or {})\n        self._observers = []\n    \n    def add_observer(self, callback):\n        \"\"\"callback: function(event, key, value, old_value)\"\"\"\n        self._observers.append(callback)\n    \n    def remove_observer(self, callback):\n        if callback in self._observers:\n            self._observers.remove(callback)\n    \n    def _notify(self, event, key, value=None, old_value=None):\n        for callback in self._observers:\n            callback(event, key, value, old_value)\n    \n    def __setitem__(self, key, value):\n        old_value = self._data.get(key)\n        self._data[key] = value\n        if old_value is None:\n            self._notify('add', key, value)\n        else:\n            self._notify('update', key, value, old_value)\n    \n    def __delitem__(self, key):\n        if key in self._data:\n            old_value = self._data[key]\n            del self._data[key]\n            self._notify('delete', key, None, old_value)\n    \n    def __getitem__(self, key):\n        return self._data[key]\n    \n    def __contains__(self, key):\n        return key in self._data\n    \n    def clear(self):\n        keys = list(self._data.keys())\n        for key in keys:\n            del self[key]\n    \n    def __str__(self):\n        return str(self._data)\n\n# Observer callbacks\ndef log_observer(event, key, value, old_value):\n    if event == 'add':\n        print(f'➕ Added: {key} = {value}')\n    elif event == 'update':\n        print(f'✏️ Updated: {key} from {old_value} to {value}')\n    elif event == 'delete':\n        print(f'❌ Deleted: {key} (was {old_value})')\n\ndef audit_observer(event, key, value, old_value):\n    import time\n    print(f'[AUDIT] {time.ctime()}: {event} on {key}')\n\n# Test observable dict\nod = ObservableDict({'a': 1, 'b': 2})\nod.add_observer(log_observer)\nod.add_observer(audit_observer)\n\nprint('Initial:', od)\n\n# Make changes\nod['c'] = 3      # Add\nod['a'] = 10     # Update\ndel od['b']       # Delete\n\n# Remove observer\nod.remove_observer(log_observer)\nprint('\\nAfter removing log observer:')\nod['d'] = 4      # Only audit will show",
    hint: "Maintain list of callbacks and notify on changes"
  },
  {
    id: "py_dict_50",
    topicId: "py_dictionaries",
    question: "Implement a dictionary with automatic type conversion.",
    mathSolution: "Convert values to specified types on set/get",
    codeSolution: "class TypedDict:\n    def __init__(self, type_schema):\n        \"\"\"\n        type_schema: dict of {key: (type, converter)}\n        converter: optional function to convert values\n        \"\"\"\n        self._data = {}\n        self._schema = {}\n        for key, spec in type_schema.items():\n            if isinstance(spec, tuple):\n                self._schema[key] = spec\n            else:\n                self._schema[key] = (spec, spec)  # type and converter are same\n    \n    def __setitem__(self, key, value):\n        if key in self._schema:\n            expected_type, converter = self._schema[key]\n            try:\n                converted = converter(value)\n                if not isinstance(converted, expected_type):\n                    raise TypeError(f'Converter returned {type(converted).__name__}, expected {expected_type.__name__}')\n                self._data[key] = converted\n            except (ValueError, TypeError) as e:\n                raise TypeError(f'Cannot convert {value} to {expected_type.__name__}: {e}')\n        else:\n            # No type enforcement\n            self._data[key] = value\n    \n    def __getitem__(self, key):\n        return self._data[key]\n    \n    def get(self, key, default=None):\n        return self._data.get(key, default)\n    \n    def __str__(self):\n        return str(self._data)\n\n# Define type schema\nschema = {\n    'name': str,                    # Just type check\n    'age': (int, int),              # Convert to int\n    'score': (float, float),         # Convert to float\n    'active': (bool, lambda x: str(x).lower() in ('true', '1', 'yes')),\n    'tags': (list, lambda x: x if isinstance(x, list) else x.split(',')),\n    'count': (int, lambda x: int(x) if x else 0)\n}\n\ntd = TypedDict(schema)\n\n# Set with various types\ntd['name'] = 'Alice'           # String\ntd['age'] = '30'               # Converts to int\ntd['score'] = '95.5'           # Converts to float\ntd['active'] = 'yes'           # Converts to True\ntd['tags'] = 'python,code,test'  # Converts to list\ntd['count'] = ''               # Converts to 0\n\nprint('TypedDict contents:')\nfor key in ['name', 'age', 'score', 'active', 'tags', 'count']:\n    value = td[key]\n    print(f'  {key}: {value} ({type(value).__name__})')\n\n# Type errors\ntry:\n    td['age'] = 'invalid'       # Can't convert to int\nexcept TypeError as e:\n    print(f'\\nError: {e}')\n\n# Unrestricted key\ntd['extra'] = 'anything'\nprint('\\nExtra key:', td['extra'])",
    hint: "Store type and converter per key, apply on set"
  });