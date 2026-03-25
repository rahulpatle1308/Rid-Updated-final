QuizData.questions.push(
  {
    id: "stl_001",
    topicId: "cpp_stl_algorithms",
    question: "Sort a vector in ascending and descending order using STL.",
    mathSolution: "Use sort() with greater for descending",
    codeSolution:
      "vector<int> vec = {5, 2, 8, 1, 9};\n// Ascending\nsort(vec.begin(), vec.end());\n// Descending\nsort(vec.begin(), vec.end(), greater<int>());",
    hint: "sort() uses introsort (hybrid of quicksort, heapsort)",
  },
  {
    id: "stl_002",
    topicId: "cpp_stl_algorithms",
    question: "Find minimum and maximum element in a vector.",
    mathSolution: "Use min_element and max_element algorithms",
    codeSolution:
      'vector<int> vec = {3, 7, 2, 9, 5};\nauto minIt = min_element(vec.begin(), vec.end());\nauto maxIt = max_element(vec.begin(), vec.end());\ncout << "Min: " << *minIt << " at index " << minIt - vec.begin();\ncout << "\\nMax: " << *maxIt << " at index " << maxIt - vec.begin();',
    hint: "Returns iterator to the element",
  },
  {
    id: "stl_003",
    topicId: "cpp_stl_algorithms",
    question: "Find the sum of all elements in a vector.",
    mathSolution: "Use accumulate from numeric header",
    codeSolution:
      "vector<int> vec = {1, 2, 3, 4, 5};\nint sum = accumulate(vec.begin(), vec.end(), 0);\n// With initial value 10\nint sumWithInit = accumulate(vec.begin(), vec.end(), 10);",
    hint: "Third parameter is initial value",
  },
  {
    id: "stl_004",
    topicId: "cpp_stl_algorithms",
    question: "Count occurrences of a specific element in a vector.",
    mathSolution: "Use count algorithm",
    codeSolution:
      'vector<int> vec = {1, 2, 3, 2, 4, 2, 5};\nint target = 2;\nint cnt = count(vec.begin(), vec.end(), target);\ncout << target << " appears " << cnt << " times";',
    hint: "Linear time complexity O(n)",
  },
  {
    id: "stl_005",
    topicId: "cpp_stl_algorithms",
    question: "Find the first occurrence of an element in a vector.",
    mathSolution: "Use find algorithm",
    codeSolution:
      'vector<int> vec = {10, 20, 30, 40, 50};\nint target = 30;\nauto it = find(vec.begin(), vec.end(), target);\nif(it != vec.end()) {\n    cout << "Found at index: " << it - vec.begin();\n} else {\n    cout << "Not found";\n}',
    hint: "Returns iterator to first occurrence or end()",
  },
  {
    id: "stl_006",
    topicId: "cpp_stl_algorithms",
    question: "Binary search in a sorted vector.",
    mathSolution: "Use binary_search algorithm",
    codeSolution:
      'vector<int> vec = {1, 3, 5, 7, 9, 11};\nint target = 7;\nbool found = binary_search(vec.begin(), vec.end(), target);\ncout << target << (found ? " found" : " not found");',
    hint: "Container must be sorted, O(log n) complexity",
  },
  {
    id: "stl_007",
    topicId: "cpp_stl_algorithms",
    question: "Find lower_bound and upper_bound in sorted array.",
    mathSolution: "Use lower_bound and upper_bound for binary search range",
    codeSolution:
      'vector<int> vec = {1, 2, 2, 2, 3, 4, 5};\nint target = 2;\nauto lower = lower_bound(vec.begin(), vec.end(), target);\nauto upper = upper_bound(vec.begin(), vec.end(), target);\ncout << "First occurrence: " << lower - vec.begin();\ncout << "\\nLast occurrence: " << upper - vec.begin() - 1;\ncout << "\\nCount: " << upper - lower;',
    hint: "lower_bound = first >= target, upper_bound = first > target",
  },
  {
    id: "stl_008",
    topicId: "cpp_stl_algorithms",
    question: "Reverse a vector or string using STL.",
    mathSolution: "Use reverse algorithm",
    codeSolution:
      'vector<int> vec = {1, 2, 3, 4, 5};\nreverse(vec.begin(), vec.end());\n// For string\nstring str = "hello";\nreverse(str.begin(), str.end());',
    hint: "Works on any bidirectional iterator",
  },
  {
    id: "stl_009",
    topicId: "cpp_stl_algorithms",
    question: "Rotate elements in a vector left or right.",
    mathSolution: "Use rotate algorithm",
    codeSolution:
      "vector<int> vec = {1, 2, 3, 4, 5, 6, 7};\n// Left rotate by 2\nrotate(vec.begin(), vec.begin() + 2, vec.end());\n// Right rotate by 2\nrotate(vec.begin(), vec.end() - 2, vec.end());",
    hint: "Middle parameter becomes new first element",
  },
  {
    id: "stl_010",
    topicId: "cpp_stl_algorithms",
    question: "Remove duplicates from sorted array using STL.",
    mathSolution: "Use unique followed by erase",
    codeSolution:
      "vector<int> vec = {1, 1, 2, 2, 2, 3, 4, 4, 5};\nauto last = unique(vec.begin(), vec.end());\nvec.erase(last, vec.end());\n// Now vec = {1, 2, 3, 4, 5}",
    hint: "unique only works on sorted ranges, returns new end",
  },
  {
    id: "stl_011",
    topicId: "cpp_stl_algorithms",
    question: "Merge two sorted vectors into one sorted vector.",
    mathSolution: "Use merge algorithm",
    codeSolution:
      "vector<int> v1 = {1, 3, 5, 7};\nvector<int> v2 = {2, 4, 6, 8};\nvector<int> result(v1.size() + v2.size());\nmerge(v1.begin(), v1.end(), v2.begin(), v2.end(), result.begin());",
    hint: "Both input ranges must be sorted",
  },
  {
    id: "stl_012",
    topicId: "cpp_stl_algorithms",
    question: "Find set union of two sorted vectors.",
    mathSolution: "Use set_union algorithm",
    codeSolution:
      "vector<int> v1 = {1, 2, 3, 4, 5};\nvector<int> v2 = {3, 4, 5, 6, 7};\nvector<int> result(v1.size() + v2.size());\nauto it = set_union(v1.begin(), v1.end(), v2.begin(), v2.end(), result.begin());\nresult.resize(it - result.begin());",
    hint: "Both ranges must be sorted, result also sorted",
  },
  {
    id: "stl_013",
    topicId: "cpp_stl_algorithms",
    question: "Find set intersection of two sorted vectors.",
    mathSolution: "Use set_intersection algorithm",
    codeSolution:
      "vector<int> v1 = {1, 2, 3, 4, 5};\nvector<int> v2 = {3, 4, 5, 6, 7};\nvector<int> result(min(v1.size(), v2.size()));\nauto it = set_intersection(v1.begin(), v1.end(), v2.begin(), v2.end(), result.begin());\nresult.resize(it - result.begin());",
    hint: "Returns elements common to both ranges",
  },
  {
    id: "stl_014",
    topicId: "cpp_stl_algorithms",
    question: "Find set difference of two sorted vectors.",
    mathSolution: "Use set_difference algorithm",
    codeSolution:
      "vector<int> v1 = {1, 2, 3, 4, 5};\nvector<int> v2 = {3, 4, 5, 6, 7};\nvector<int> result(v1.size());\nauto it = set_difference(v1.begin(), v1.end(), v2.begin(), v2.end(), result.begin());\nresult.resize(it - result.begin());\n// result = {1, 2} (elements in v1 but not in v2)",
    hint: "Elements from first range not in second",
  },
  {
    id: "stl_015",
    topicId: "cpp_stl_algorithms",
    question: "Generate next permutation of a sequence.",
    mathSolution: "Use next_permutation algorithm",
    codeSolution:
      'vector<int> vec = {1, 2, 3};\nnext_permutation(vec.begin(), vec.end());\n// vec becomes {1, 3, 2}\n\n// Generate all permutations\nsort(vec.begin(), vec.end());\ndo {\n    for(int num : vec) cout << num << " ";\n    cout << "\\n";\n} while(next_permutation(vec.begin(), vec.end()));',
    hint: "Returns false when last permutation reached",
  },
  {
    id: "stl_016",
    topicId: "cpp_stl_algorithms",
    question: "Generate previous permutation of a sequence.",
    mathSolution: "Use prev_permutation algorithm",
    codeSolution:
      'vector<int> vec = {3, 2, 1};\nprev_permutation(vec.begin(), vec.end());\n// vec becomes {3, 1, 2}\n\n// Generate all permutations in descending order\nsort(vec.begin(), vec.end(), greater<int>());\ndo {\n    for(int num : vec) cout << num << " ";\n    cout << "\\n";\n} while(prev_permutation(vec.begin(), vec.end()));',
    hint: "Opposite of next_permutation",
  },
  {
    id: "stl_017",
    topicId: "cpp_stl_algorithms",
    question: "Shuffle elements randomly in a vector.",
    mathSolution: "Use shuffle or random_shuffle with random generator",
    codeSolution:
      "vector<int> vec = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n// Modern C++\nrandom_device rd;\nmt19937 g(rd());\nshuffle(vec.begin(), vec.end(), g);\n\n// Older version (deprecated in C++14)\n// random_shuffle(vec.begin(), vec.end());",
    hint: "shuffle requires uniform random number generator",
  },
  {
    id: "stl_018",
    topicId: "cpp_stl_algorithms",
    question: "Partition vector based on a condition.",
    mathSolution: "Use partition or stable_partition",
    codeSolution:
      "vector<int> vec = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n// Partition: even numbers first\nauto it = partition(vec.begin(), vec.end(), [](int x) { return x % 2 == 0; });\n// it points to first odd number\n\n// stable_partition maintains relative order\n// stable_partition(vec.begin(), vec.end(), [](int x) { return x % 2 == 0; });",
    hint: "Returns partition point",
  },
  {
    id: "stl_019",
    topicId: "cpp_stl_algorithms",
    question: "Find if any, all, or none elements satisfy a condition.",
    mathSolution: "Use any_of, all_of, none_of algorithms",
    codeSolution:
      'vector<int> vec = {2, 4, 6, 8, 10};\nbool allEven = all_of(vec.begin(), vec.end(), [](int x) { return x % 2 == 0; });\nbool hasOdd = any_of(vec.begin(), vec.end(), [](int x) { return x % 2 == 1; });\nbool noneNegative = none_of(vec.begin(), vec.end(), [](int x) { return x < 0; });\n\ncout << "All even: " << allEven;\ncout << "\\nHas odd: " << hasOdd;\ncout << "\\nNone negative: " << noneNegative;',
    hint: "All return boolean values",
  },
  {
    id: "stl_020",
    topicId: "cpp_stl_algorithms",
    question: "Copy elements from one container to another.",
    mathSolution: "Use copy, copy_if, copy_n algorithms",
    codeSolution:
      "vector<int> source = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\nvector<int> dest1(source.size());\nvector<int> dest2;\nvector<int> dest3(5);\n\n// Copy all\ncopy(source.begin(), source.end(), dest1.begin());\n\n// Copy only even numbers\ncopy_if(source.begin(), source.end(), back_inserter(dest2), \n        [](int x) { return x % 2 == 0; });\n\n// Copy first 5 elements\ncopy_n(source.begin(), 5, dest3.begin());",
    hint: "back_inserter grows container automatically",
  },
  {
    id: "stl_021",
    topicId: "cpp_stl_algorithms",
    question: "Transform elements using a function.",
    mathSolution: "Use transform algorithm",
    codeSolution:
      "vector<int> source = {1, 2, 3, 4, 5};\nvector<int> dest(source.size());\n\n// Square each element\ntransform(source.begin(), source.end(), dest.begin(), \n          [](int x) { return x * x; });\n\n// Two input ranges\nvector<int> v1 = {1, 2, 3};\nvector<int> v2 = {4, 5, 6};\nvector<int> sum(3);\ntransform(v1.begin(), v1.end(), v2.begin(), sum.begin(), plus<int>());",
    hint: "Can work with one or two input ranges",
  },
  {
    id: "stl_022",
    topicId: "cpp_stl_algorithms",
    question: "Replace elements in a vector based on condition.",
    mathSolution: "Use replace, replace_if, replace_copy",
    codeSolution:
      "vector<int> vec = {1, 2, 3, 2, 4, 2, 5};\n\n// Replace all 2 with 99\nreplace(vec.begin(), vec.end(), 2, 99);\n\n// Replace all odd numbers with 0\nreplace_if(vec.begin(), vec.end(), [](int x) { return x % 2 == 1; }, 0);\n\n// Replace and copy to new vector\nvector<int> result;\nreplace_copy(vec.begin(), vec.end(), back_inserter(result), 2, 99);",
    hint: "replace_copy leaves original unchanged",
  },
  {
    id: "stl_023",
    topicId: "cpp_stl_algorithms",
    question: "Fill a vector with specific values.",
    mathSolution: "Use fill, fill_n, generate, generate_n",
    codeSolution:
      "vector<int> vec(10);\n\n// Fill all with 5\nfill(vec.begin(), vec.end(), 5);\n\n// Fill first 5 with 10\nfill_n(vec.begin(), 5, 10);\n\n// Generate with increasing numbers\nint n = 0;\ngenerate(vec.begin(), vec.end(), [&n]() { return n++; });\n\n// Generate first 5 random numbers\nrandom_device rd;\nmt19937 gen(rd());\nuniform_int_distribution<> dist(1, 100);\ngenerate_n(vec.begin(), 5, [&]() { return dist(gen); });",
    hint: "generate calls function for each element",
  },
  {
    id: "stl_024",
    topicId: "cpp_stl_algorithms",
    question: "Find adjacent duplicates in a vector.",
    mathSolution: "Use adjacent_find algorithm",
    codeSolution:
      'vector<int> vec = {1, 2, 2, 3, 4, 4, 4, 5, 6, 6};\n\n// Find first adjacent duplicate\nauto it = adjacent_find(vec.begin(), vec.end());\nif(it != vec.end()) {\n    cout << "First adjacent duplicate: " << *it << " at index " << it - vec.begin();\n}\n\n// Find all adjacent duplicates\nit = vec.begin();\nwhile((it = adjacent_find(it, vec.end())) != vec.end()) {\n    cout << "Duplicate: " << *it << " at " << it - vec.begin() << "\\n";\n    ++it;\n}',
    hint: "Returns iterator to first of the equal elements",
  },
  {
    id: "stl_025",
    topicId: "cpp_stl_algorithms",
    question: "Find lexicographical comparison of two ranges.",
    mathSolution: "Use lexicographical_compare algorithm",
    codeSolution:
      'vector<int> v1 = {1, 2, 3, 4};\nvector<int> v2 = {1, 2, 3, 5};\nvector<int> v3 = {1, 2, 3};\n\nbool v1_less_v2 = lexicographical_compare(v1.begin(), v1.end(), \n                                          v2.begin(), v2.end());\nbool v1_less_v3 = lexicographical_compare(v1.begin(), v1.end(), \n                                          v3.begin(), v3.end());\n\ncout << "v1 < v2: " << v1_less_v2;  // true (4 < 5)\ncout << "\\nv1 < v3: " << v1_less_v3;  // false (v3 is prefix of v1)\n\n// Case-insensitive string comparison\nstring s1 = "Hello";\nstring s2 = "HELLO";\nbool caseInsensitiveLess = lexicographical_compare(\n    s1.begin(), s1.end(),\n    s2.begin(), s2.end(),\n    [](char c1, char c2) { return tolower(c1) < tolower(c2); }\n);',
    hint: "Similar to dictionary ordering",
  },
);