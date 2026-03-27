QuizData.questions.push(
{
  id: 'py_set_1',
  topicId: 'py_sets',
  question: 'Create a set from a list with duplicate elements: [1,2,2,3,4,4,5]. Print the set.',
  mathSolution: 'Sets automatically eliminate duplicates.',
  codeSolution: 'my_list = [1,2,2,3,4,4,5]\nmy_set = set(my_list)\nprint(my_set)',
  hint: 'Use `set(list)` to remove duplicates.'
},
{
  id: 'py_set_2',
  topicId: 'py_sets',
  question: 'Add the element 6 to the set {1,2,3}.',
  mathSolution: 'Sets are mutable; use add().',
  codeSolution: 's = {1,2,3}\ns.add(6)\nprint(s)',
  hint: '`set.add(element)` inserts an element.'
},
{
  id: 'py_set_3',
  topicId: 'py_sets',
  question: 'Remove element 2 from set {1,2,3} using discard() and remove(). Show the difference when element is absent.',
  mathSolution: 'discard() does nothing if element missing; remove() raises KeyError.',
  codeSolution: 's = {1,2,3}\ns.discard(2)\nprint(s)  # {1,3}\ns.discard(5)  # No error\ns.remove(1)\nprint(s)  # {3}\n# s.remove(5) would raise KeyError',
  hint: 'Use `discard` for safe removal, `remove` when you want error.'
},
{
  id: 'py_set_4',
  topicId: 'py_sets',
  question: 'Check if 5 is present in the set {1,3,5,7}.',
  mathSolution: 'Membership testing with `in` operator.',
  codeSolution: 's = {1,3,5,7}\nprint(5 in s)  # True\nprint(6 in s)  # False',
  hint: 'Use `element in set`.'
},
{
  id: 'py_set_5',
  topicId: 'py_sets',
  question: 'Compute the union of sets A = {1,2,3} and B = {3,4,5}.',
  mathSolution: 'Union combines all elements from both sets.',
  codeSolution: 'A = {1,2,3}\nB = {3,4,5}\nC = A.union(B)\n# or C = A | B\nprint(C)',
  hint: 'Use `A.union(B)` or `A | B`.'
},
{
  id: 'py_set_6',
  topicId: 'py_sets',
  question: 'Compute the intersection of sets A = {1,2,3} and B = {3,4,5}.',
  mathSolution: 'Intersection contains elements common to both.',
  codeSolution: 'A = {1,2,3}\nB = {3,4,5}\nC = A.intersection(B)\n# or C = A & B\nprint(C)',
  hint: 'Use `A.intersection(B)` or `A & B`.'
},
{
  id: 'py_set_7',
  topicId: 'py_sets',
  question: 'Compute the difference A - B where A = {1,2,3,4} and B = {3,4,5}.',
  mathSolution: 'Difference contains elements in A but not in B.',
  codeSolution: 'A = {1,2,3,4}\nB = {3,4,5}\nC = A.difference(B)\n# or C = A - B\nprint(C)  # {1,2}',
  hint: 'Use `A.difference(B)` or `A - B`.'
},
{
  id: 'py_set_8',
  topicId: 'py_sets',
  question: 'Compute the symmetric difference of A = {1,2,3,4} and B = {3,4,5,6}.',
  mathSolution: 'Symmetric difference contains elements in either set but not both.',
  codeSolution: 'A = {1,2,3,4}\nB = {3,4,5,6}\nC = A.symmetric_difference(B)\n# or C = A ^ B\nprint(C)  # {1,2,5,6}',
  hint: 'Use `A.symmetric_difference(B)` or `A ^ B`.'
},
{
  id: 'py_set_9',
  topicId: 'py_sets',
  question: 'Check if {1,2} is a subset of {1,2,3}.',
  mathSolution: 'A is subset of B if all elements of A are in B.',
  codeSolution: 'A = {1,2}\nB = {1,2,3}\nprint(A.issubset(B))  # True\nprint(A <= B)  # True',
  hint: 'Use `A.issubset(B)` or `A <= B`.'
},
{
  id: 'py_set_10',
  topicId: 'py_sets',
  question: 'Check if {1,2,3} is a superset of {1,2}.',
  mathSolution: 'A is superset of B if it contains all elements of B.',
  codeSolution: 'A = {1,2,3}\nB = {1,2}\nprint(A.issuperset(B))  # True\nprint(A >= B)  # True',
  hint: 'Use `A.issuperset(B)` or `A >= B`.'
},
{
  id: 'py_set_11',
  topicId: 'py_sets',
  question: 'Check if sets {1,2} and {3,4} are disjoint (no common elements).',
  mathSolution: 'Disjoint if intersection is empty.',
  codeSolution: 'A = {1,2}\nB = {3,4}\nprint(A.isdisjoint(B))  # True\nC = {2,3}\nprint(A.isdisjoint(C)) # False',
  hint: 'Use `A.isdisjoint(B)`.'
},
{
  id: 'py_set_12',
  topicId: 'py_sets',
  question: 'Use a set comprehension to create a set of squares of numbers from 1 to 5.',
  mathSolution: 'Set comprehension: {expression for item in iterable}.',
  codeSolution: 'squares = {x**2 for x in range(1,6)}\nprint(squares)  # {1,4,9,16,25}',
  hint: 'Use `{x**2 for x in range(1,6)}`.'
},
{
  id: 'py_set_13',
  topicId: 'py_sets',
  question: 'Given a list [1,2,2,3,3,3,4], remove duplicates using a set and convert back to a list.',
  mathSolution: 'set() eliminates duplicates; list() converts back.',
  codeSolution: 'original = [1,2,2,3,3,3,4]\nunique = list(set(original))\nprint(unique)',
  hint: 'Use `set(original)` then `list()`.'
},
{
  id: 'py_set_14',
  topicId: 'py_sets',
  question: 'Find the common elements between two lists: [1,2,3,4] and [3,4,5,6].',
  mathSolution: 'Convert to sets and use intersection.',
  codeSolution: 'list1 = [1,2,3,4]\nlist2 = [3,4,5,6]\ncommon = set(list1) & set(list2)\nprint(common)  # {3,4}',
  hint: 'Use `set(list1) & set(list2)`.'
},
{
  id: 'py_set_15',
  topicId: 'py_sets',
  question: 'Find elements in list A = [1,2,3,4] that are not in list B = [3,4,5,6].',
  mathSolution: 'Use set difference.',
  codeSolution: 'A = [1,2,3,4]\nB = [3,4,5,6]\nresult = set(A) - set(B)\nprint(result)  # {1,2}',
  hint: 'Use `set(A) - set(B)`.'
},
{
  id: 'py_set_16',
  topicId: 'py_sets',
  question: 'Find elements that are in either list A or list B but not in both (symmetric difference). A = [1,2,3,4], B = [3,4,5,6].',
  mathSolution: 'Symmetric difference of two sets.',
  codeSolution: 'A = [1,2,3,4]\nB = [3,4,5,6]\nresult = set(A) ^ set(B)\nprint(result)  # {1,2,5,6}',
  hint: 'Use `set(A) ^ set(B)`.'
},
{
  id: 'py_set_17',
  topicId: 'py_sets',
  question: 'Count the number of unique elements in the list [1,2,2,3,3,3,4,5,5].',
  mathSolution: 'Convert to set and take length.',
  codeSolution: 'lst = [1,2,2,3,3,3,4,5,5]\nunique_count = len(set(lst))\nprint(unique_count)  # 5',
  hint: 'Use `len(set(lst))`.'
},
{
  id: 'py_set_18',
  topicId: 'py_sets',
  question: 'Convert the set {1,2,3} into a list.',
  mathSolution: 'list(set) returns a list of elements.',
  codeSolution: 's = {1,2,3}\nlst = list(s)\nprint(lst)',
  hint: 'Use `list(s)`.'
},
{
  id: 'py_set_19',
  topicId: 'py_sets',
  question: 'Iterate over the set {10,20,30} and print each element.',
  mathSolution: 'Use a for loop; order is arbitrary.',
  codeSolution: 's = {10,20,30}\nfor elem in s:\n    print(elem)',
  hint: 'Sets are iterable but unordered.'
},
{
  id: 'py_set_20',
  topicId: 'py_sets',
  question: 'Get the number of elements in the set {1,2,3,4}.',
  mathSolution: 'Use len().',
  codeSolution: 's = {1,2,3,4}\nprint(len(s))  # 4',
  hint: '`len(set)` returns cardinality.'
},
{
  id: 'py_set_21',
  topicId: 'py_sets',
  question: 'Clear all elements from a set {1,2,3}.',
  mathSolution: 'set.clear() removes all elements.',
  codeSolution: 's = {1,2,3}\ns.clear()\nprint(s)  # set()',
  hint: 'Use `set.clear()`.'
},
{
  id: 'py_set_22',
  topicId: 'py_sets',
  question: 'Create a shallow copy of set {1,2,3}.',
  mathSolution: 'Use copy() method.',
  codeSolution: 'original = {1,2,3}\ncopy_set = original.copy()\nprint(copy_set)',
  hint: '`set.copy()` returns a new set with same elements.'
},
{
  id: 'py_set_23',
  topicId: 'py_sets',
  question: 'Create a frozenset from a list [1,2,3] and show it is immutable.',
  mathSolution: 'frozenset is immutable; cannot add/remove.',
  codeSolution: 'fs = frozenset([1,2,3])\nprint(fs)\n# fs.add(4) would raise AttributeError',
  hint: 'Use `frozenset(iterable)`.'
},
{
  id: 'py_set_24',
  topicId: 'py_sets',
  question: 'Update set A = {1,2,3} with the union of B = {3,4,5} (in-place).',
  mathSolution: 'update() adds all elements from another set.',
  codeSolution: 'A = {1,2,3}\nB = {3,4,5}\nA.update(B)\nprint(A)  # {1,2,3,4,5}',
  hint: 'Use `A.update(B)` or `A |= B`.'
},
{
  id: 'py_set_25',
  topicId: 'py_sets',
  question: 'Update set A = {1,2,3,4} to keep only elements also in B = {3,4,5} (in-place intersection).',
  mathSolution: 'intersection_update() modifies set to intersection.',
  codeSolution: 'A = {1,2,3,4}\nB = {3,4,5}\nA.intersection_update(B)\nprint(A)  # {3,4}',
  hint: 'Use `A.intersection_update(B)` or `A &= B`.'
},
{
  id: 'py_set_26',
  topicId: 'py_sets',
  question: 'Update set A = {1,2,3,4} to remove elements present in B = {3,4,5} (in-place difference).',
  mathSolution: 'difference_update() removes common elements.',
  codeSolution: 'A = {1,2,3,4}\nB = {3,4,5}\nA.difference_update(B)\nprint(A)  # {1,2}',
  hint: 'Use `A.difference_update(B)` or `A -= B`.'
},
{
  id: 'py_set_27',
  topicId: 'py_sets',
  question: 'Update set A = {1,2,3,4} to contain symmetric difference with B = {3,4,5,6} (in-place).',
  mathSolution: 'symmetric_difference_update() keeps elements in either but not both.',
  codeSolution: 'A = {1,2,3,4}\nB = {3,4,5,6}\nA.symmetric_difference_update(B)\nprint(A)  # {1,2,5,6}',
  hint: 'Use `A.symmetric_difference_update(B)` or `A ^= B`.'
},
{
  id: 'py_set_28',
  topicId: 'py_sets',
  question: 'Remove and return an arbitrary element from set {10,20,30} using pop().',
  mathSolution: 'pop() removes and returns an arbitrary element; raises KeyError if empty.',
  codeSolution: 's = {10,20,30}\nelem = s.pop()\nprint(elem)\nprint(s)',
  hint: '`set.pop()` removes and returns an arbitrary element.'
},
{
  id: 'py_set_29',
  topicId: 'py_sets',
  question: 'Create a set of unique characters from the string "hello world".',
  mathSolution: 'set(string) gives all distinct characters.',
  codeSolution: 'text = "hello world"\nchar_set = set(text)\nprint(char_set)  # includes letters and space',
  hint: 'Use `set(string)` to get unique characters.'
},
{
  id: 'py_set_30',
  topicId: 'py_sets',
  question: 'Check if two strings "abc" and "cde" have any common characters.',
  mathSolution: 'Convert to sets and check intersection.',
  codeSolution: 's1 = "abc"\ns2 = "cde"\ncommon = set(s1) & set(s2)\nif common:\n    print("Common characters:", common)\nelse:\n    print("No common characters")',
  hint: 'Use intersection of character sets.'
},
{
  id: 'py_set_31',
  topicId: 'py_sets',
  question: 'Find the set of vowels present in the string "hello world".',
  mathSolution: 'Intersection of set of characters with set of vowels.',
  codeSolution: 'text = "hello world"\nvowels = set("aeiou")\npresent = set(text) & vowels\nprint(present)',
  hint: 'Define vowel set and intersect with character set.'
},
{
  id: 'py_set_32',
  topicId: 'py_sets',
  question: 'Find the set of consonants in the string "hello world".',
  mathSolution: 'Consonants = letters minus vowels.',
  codeSolution: 'text = "hello world"\nletters = set(c for c in text if c.isalpha())\nvowels = set("aeiou")\nconsonants = letters - vowels\nprint(consonants)',
  hint: 'Filter letters, then subtract vowels.'
},
{
  id: 'py_set_33',
  topicId: 'py_sets',
  question: 'Create a set of unique words from the sentence "the cat in the hat".',
  mathSolution: 'Split sentence into words, then set.',
  codeSolution: 'sentence = "the cat in the hat"\nwords = sentence.split()\nunique_words = set(words)\nprint(unique_words)',
  hint: 'Use `split()` to get words, then `set()`.'
},
{
  id: 'py_set_34',
  topicId: 'py_sets',
  question: 'Check if a string has all unique characters (no duplicates).',
  mathSolution: 'If len(set(s)) == len(s), all unique.',
  codeSolution: 'def all_unique(s):\n    return len(set(s)) == len(s)\nprint(all_unique("abcde"))  # True\nprint(all_unique("hello"))   # False',
  hint: 'Compare length of string and length of set.'
},
{
  id: 'py_set_35',
  topicId: 'py_sets',
  question: 'Find the first repeating character in a string using a set.',
  mathSolution: 'Iterate, add to set; if already seen, return that character.',
  codeSolution: 'def first_repeat(s):\n    seen = set()\n    for ch in s:\n        if ch in seen:\n            return ch\n        seen.add(ch)\n    return None\nprint(first_repeat("hello"))  # "l"',
  hint: 'Maintain a set of seen characters.'
},
{
  id: 'py_set_36',
  topicId: 'py_sets',
  question: 'Given three sets A={1,2}, B={2,3}, C={3,4}, compute the union of all three.',
  mathSolution: 'Union can be chained.',
  codeSolution: 'A={1,2}; B={2,3}; C={3,4}\nresult = A.union(B, C)\nprint(result)  # {1,2,3,4}',
  hint: '`A.union(B, C)` accepts multiple arguments.'
},
{
  id: 'py_set_37',
  topicId: 'py_sets',
  question: 'Use a set to find the missing number in the list [1,2,3,4,5,6,7,8,10] (should be 9).',
  mathSolution: 'Set of full range minus set of given numbers.',
  codeSolution: 'lst = [1,2,3,4,5,6,7,8,10]\nfull = set(range(1,11))\nmissing = full - set(lst)\nprint(missing.pop())  # 9',
  hint: 'Create set of expected numbers and subtract.'
},
{
  id: 'py_set_38',
  topicId: 'py_sets',
  question: 'Compute the symmetric difference of three sets A={1,2}, B={2,3}, C={3,4}.',
  mathSolution: 'Symmetric difference of multiple sets = elements appearing odd number of times.',
  codeSolution: 'A={1,2}; B={2,3}; C={3,4}\nresult = A ^ B ^ C\nprint(result)  # {1,4} because 1 appears once, 4 once, 2 appears twice, 3 twice',
  hint: 'XOR operator works on multiple sets.'
},
{
  id: 'py_set_39',
  topicId: 'py_sets',
  question: 'Generate a set of prime numbers up to 20 using set comprehension.',
  mathSolution: 'Prime detection inside comprehension.',
  codeSolution: 'def is_prime(n):\n    if n<2: return False\n    for i in range(2,int(n**0.5)+1):\n        if n%i==0: return False\n    return True\n\nprimes = {x for x in range(2,21) if is_prime(x)}\nprint(primes)  # {2,3,5,7,11,13,17,19}',
  hint: 'Define prime check and use set comprehension.'
},
{
  id: 'py_set_40',
  topicId: 'py_sets',
  question: 'Create a set of even numbers from 1 to 10.',
  mathSolution: 'Use condition x%2==0.',
  codeSolution: 'evens = {x for x in range(1,11) if x%2==0}\nprint(evens)',
  hint: 'Set comprehension with filter.'
},
{
  id: 'py_set_41',
  topicId: 'py_sets',
  question: 'Create a set of odd numbers from 1 to 10.',
  mathSolution: 'Use condition x%2!=0.',
  codeSolution: 'odds = {x for x in range(1,11) if x%2!=0}\nprint(odds)',
  hint: 'Set comprehension with filter.'
},
{
  id: 'py_set_42',
  topicId: 'py_sets',
  question: 'Check if a set is empty.',
  mathSolution: 'Compare with empty set or use len().',
  codeSolution: 's = set()\nif not s:\n    print("Empty")\n# or\nif len(s)==0:\n    print("Empty")',
  hint: 'Empty set is falsy.'
},
{
  id: 'py_set_43',
  topicId: 'py_sets',
  question: 'Can you create a set containing other sets? If not, how to achieve similar behavior?',
  mathSolution: 'Sets are unhashable; use frozenset instead.',
  codeSolution: '# This raises TypeError: unhashable type: set\n# s = { {1,2}, {3,4} }\n# Instead use frozenset:\ns = { frozenset({1,2}), frozenset({3,4}) }\nprint(s)',
  hint: 'Use `frozenset` as elements.'
},
{
  id: 'py_set_44',
  topicId: 'py_sets',
  question: 'Create a set of tuples representing coordinates: (1,1), (1,2), (2,1).',
  mathSolution: 'Tuples are hashable.',
  codeSolution: 'coordinates = {(1,1), (1,2), (2,1)}\nprint(coordinates)',
  hint: 'Tuples can be stored in sets.'
},
{
  id: 'py_set_45',
  topicId: 'py_sets',
  question: 'Safely remove elements from a set while iterating over it.',
  mathSolution: 'Iterate over a copy of the set.',
  codeSolution: 's = {1,2,3,4,5}\nfor elem in s.copy():\n    if elem % 2 == 0:\n        s.remove(elem)\nprint(s)  # {1,3,5}',
  hint: 'Iterate over `s.copy()` to avoid modification during iteration.'
},
{
  id: 'py_set_46',
  topicId: 'py_sets',
  question: 'Compare the performance of membership testing between list and set. Create a list and a set of 10000 elements, and time checking if an element exists.',
  mathSolution: 'Set membership is O(1) average, list is O(n).',
  codeSolution: 'import time\nlst = list(range(10000))\nst = set(range(10000))\n\nstart = time.time()\nprint(9999 in lst)\nprint("List time:", time.time()-start)\n\nstart = time.time()\nprint(9999 in st)\nprint("Set time:", time.time()-start)',
  hint: 'Use `time` module to measure.'
},
{
  id: 'py_set_47',
  topicId: 'py_sets',
  question: 'Find the intersection of multiple lists: list1=[1,2,3], list2=[2,3,4], list3=[3,4,5].',
  mathSolution: 'Use set intersection on all.',
  codeSolution: 'list1=[1,2,3]; list2=[2,3,4]; list3=[3,4,5]\ncommon = set(list1).intersection(list2, list3)\nprint(common)  # {3}',
  hint: '`set(list1).intersection(list2, list3)` works.'
},
{
  id: 'py_set_48',
  topicId: 'py_sets',
  question: 'Find the union of multiple lists: list1=[1,2], list2=[2,3], list3=[3,4].',
  mathSolution: 'Use set union.',
  codeSolution: 'list1=[1,2]; list2=[2,3]; list3=[3,4]\nunion_set = set().union(list1, list2, list3)\nprint(union_set)  # {1,2,3,4}',
  hint: 'Use `set().union(list1, list2, ...)` or chain unions.'
},
{
  id: 'py_set_49',
  topicId: 'py_sets',
  question: 'Given three sets A={1,2,3}, B={2,3,4}, C={3,4,5}, find elements that appear in exactly one of them.',
  mathSolution: 'Symmetric difference of all three gives elements appearing odd number of times.',
  codeSolution: 'A={1,2,3}; B={2,3,4}; C={3,4,5}\nresult = A ^ B ^ C\nprint(result)  # {1,5}',
  hint: 'Use XOR operator multiple times.'
},
{
  id: 'py_set_50',
  topicId: 'py_sets',
  question: 'Use a set to solve the two‑sum problem: given a list of integers and a target, return True if any two numbers sum to target. (Assume each element used once)',
  mathSolution: 'Iterate, check if target - current in set; add current to set.',
  codeSolution: 'def two_sum(nums, target):\n    seen = set()\n    for x in nums:\n        if target - x in seen:\n            return True\n        seen.add(x)\n    return False\nprint(two_sum([1,2,3,4], 6))  # True (2+4)\nprint(two_sum([1,2,3,4], 9))  # False',
  hint: 'Maintain a set of seen numbers.'
}
);