QuizData.questions.push(
  {
    id: "cpp_stl_1",
    topicId: "cpp_stl_containers",
    question: "What is STL in C++? What are its main components?",
    mathSolution: "STL overview",
    codeSolution:
      'STL (Standard Template Library) is a powerful set of C++ template classes to provide general-purpose classes and functions.\n\nMain components:\n1. Containers: Store data (vector, list, map, etc.)\n2. Algorithms: Sort, search, etc. (sort, find, etc.)\n3. Iterators: Used to traverse containers\n4. Functors: Function objects\n\n#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> v = {3, 1, 4, 1, 5};\n    sort(v.begin(), v.end());  // Algorithm\n    for(auto it = v.begin(); it != v.end(); ++it)  // Iterator\n        cout << *it << " ";\n    return 0;\n}',
    hint: "STL = Containers + Algorithms + Iterators + Functors. Like a toolbox for common data structures and algorithms.",
  },
  {
    id: "cpp_stl_2",
    topicId: "cpp_stl_containers",
    question: "What are the different types of containers in STL?",
    mathSolution: "Container types",
    codeSolution:
      "STL containers are classified into:\n\n1. Sequence Containers:\n   - vector, deque, list, forward_list, array\n\n2. Associative Containers:\n   - set, multiset, map, multimap\n\n3. Unordered Associative Containers:\n   - unordered_set, unordered_multiset, unordered_map, unordered_multimap\n\n4. Container Adapters:\n   - stack, queue, priority_queue",
    hint: "4 categories: Sequence (linear), Associative (sorted), Unordered (hash-based), Adapters (stack/queue).",
  },
  {
    id: "cpp_stl_3",
    topicId: "cpp_stl_containers",
    question: "What is std::vector? How do you create and use it?",
    mathSolution: "Vector basics",
    codeSolution:
      '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    // Different ways to create vectors\n    vector<int> v1;  // Empty vector\n    vector<int> v2(5);  // 5 elements, default 0\n    vector<int> v3(5, 10);  // 5 elements, all 10\n    vector<int> v4 = {1, 2, 3, 4, 5};  // Initializer list\n    \n    // Common operations\n    v4.push_back(6);  // Add element at end\n    v4.pop_back();    // Remove last element\n    \n    cout << "Size: " << v4.size() << endl;\n    cout << "Capacity: " << v4.capacity() << endl;\n    \n    // Accessing elements\n    cout << "First: " << v4[0] << " or " << v4.at(0) << endl;\n    cout << "First: " << v4.front() << ", Last: " << v4.back() << endl;\n    \n    // Iterating\n    for(int x : v4) cout << x << " ";\n    cout << endl;\n    \n    return 0;\n}',
    hint: "vector = dynamic array. Grows automatically, fast random access, slow insert/delete in middle.",
  },
  {
    id: "cpp_stl_4",
    topicId: "cpp_stl_containers",
    question: "What is the difference between vector and array?",
    mathSolution: "vector vs array",
    codeSolution:
      '#include <iostream>\n#include <vector>\n#include <array>\nusing namespace std;\n\nint main() {\n    // C-style array - fixed size, on stack\n    int arr1[5] = {1, 2, 3, 4, 5};\n    \n    // C++11 array - fixed size, on stack, STL interface\n    array<int, 5> arr2 = {1, 2, 3, 4, 5};\n    \n    // vector - dynamic size, on heap\n    vector<int> vec = {1, 2, 3, 4, 5};\n    \n    cout << "Array size: " << sizeof(arr1)/sizeof(arr1[0]) << endl;\n    cout << "std::array size: " << arr2.size() << endl;\n    cout << "Vector size: " << vec.size() << ", capacity: " << vec.capacity() << endl;\n    \n    vec.push_back(6);  // vector can grow\n    // arr2.push_back(6);  // Error: fixed size\n    \n    return 0;\n}',
    hint: "array = fixed size, stack. vector = dynamic size, heap. vector can grow/shrink.",
  },
  {
    id: "cpp_stl_5",
    topicId: "cpp_stl_containers",
    question: "What is std::list? When would you use it?",
    mathSolution: "List container",
    codeSolution:
      '#include <iostream>\n#include <list>\nusing namespace std;\n\nint main() {\n    list<int> lst = {1, 2, 3, 4, 5};\n    \n    // Adding elements\n    lst.push_back(6);    // Add at end\n    lst.push_front(0);   // Add at beginning\n    \n    // Insert at position\n    auto it = lst.begin();\n    advance(it, 3);      // Move iterator to 4th position\n    lst.insert(it, 99);\n    \n    // Removing elements\n    lst.pop_back();      // Remove last\n    lst.pop_front();     // Remove first\n    lst.remove(3);       // Remove all 3s\n    \n    // Traversing (no random access)\n    for(int x : lst) cout << x << " ";\n    cout << endl;\n    \n    // List-specific operations\n    list<int> lst2 = {10, 20, 30};\n    lst.splice(lst.end(), lst2);  // Move elements from lst2 to lst\n    lst.sort();                   // Sort the list\n    lst.unique();                  // Remove consecutive duplicates\n    lst.reverse();                 // Reverse the list\n    \n    return 0;\n}',
    hint: "list = doubly-linked list. Fast insert/delete anywhere, slow random access. Use when frequent insert/delete in middle.",
  },
  {
    id: "cpp_stl_6",
    topicId: "cpp_stl_containers",
    question: "What is std::deque? How is it different from vector?",
    mathSolution: "Deque container",
    codeSolution:
      '#include <iostream>\n#include <deque>\nusing namespace std;\n\nint main() {\n    deque<int> dq = {1, 2, 3, 4, 5};\n    \n    // Fast insert/delete at both ends\n    dq.push_back(6);    // Add at end\n    dq.push_front(0);   // Add at beginning\n    \n    dq.pop_back();      // Remove from end\n    dq.pop_front();     // Remove from beginning\n    \n    // Random access (like vector)\n    cout << "Element at index 2: " << dq[2] << endl;\n    \n    // Insert in middle (slower)\n    auto it = dq.begin() + 2;\n    dq.insert(it, 99);\n    \n    cout << "Deque: ";\n    for(int x : dq) cout << x << " ";\n    cout << endl;\n    \n    cout << "Size: " << dq.size() << endl;\n    \n    return 0;\n}',
    hint: "deque (double-ended queue) = fast insert/delete at both ends, random access. Vector only fast at end.",
  },
  {
    id: "cpp_stl_7",
    topicId: "cpp_stl_containers",
    question: "What is std::set? Give example.",
    mathSolution: "Set container",
    codeSolution:
      '#include <iostream>\n#include <set>\nusing namespace std;\n\nint main() {\n    set<int> s;\n    \n    // Insert elements (duplicates ignored)\n    s.insert(5);\n    s.insert(3);\n    s.insert(8);\n    s.insert(1);\n    s.insert(3);  // Duplicate - ignored\n    \n    // Elements are automatically sorted\n    cout << "Set elements: ";\n    for(int x : s) cout << x << " ";  // 1 3 5 8\n    cout << endl;\n    \n    // Searching\n    if(s.find(5) != s.end()) {\n        cout << "5 found in set" << endl;\n    }\n    \n    // Count occurrences (0 or 1 for set)\n    cout << "Count of 3: " << s.count(3) << endl;\n    \n    // Removing elements\n    s.erase(3);\n    \n    // Size and empty check\n    cout << "Size: " << s.size() << endl;\n    cout << "Is empty? " << (s.empty() ? "Yes" : "No") << endl;\n    \n    return 0;\n}',
    hint: "set = sorted unique elements. Fast search (O(log n)). No duplicates, automatically sorted.",
  },
  {
    id: "cpp_stl_8",
    topicId: "cpp_stl_containers",
    question: "What is std::multiset? How is it different from set?",
    mathSolution: "Multiset container",
    codeSolution:
      '#include <iostream>\n#include <set>\nusing namespace std;\n\nint main() {\n    multiset<int> ms;\n    \n    // Insert elements (allows duplicates)\n    ms.insert(5);\n    ms.insert(3);\n    ms.insert(8);\n    ms.insert(3);  // Duplicate allowed\n    ms.insert(1);\n    ms.insert(3);  // Another duplicate\n    \n    cout << "Multiset elements: ";\n    for(int x : ms) cout << x << " ";  // 1 3 3 3 5 8\n    cout << endl;\n    \n    // Count occurrences\n    cout << "Count of 3: " << ms.count(3) << endl;  // 3\n    \n    // Find returns first occurrence\n    auto it = ms.find(3);\n    if(it != ms.end()) {\n        cout << "Found: " << *it << endl;\n    }\n    \n    // Erase all occurrences\n    ms.erase(3);  // Removes all 3s\n    \n    // Erase single element using iterator\n    ms.insert(3);\n    ms.insert(3);\n    it = ms.find(3);\n    ms.erase(it);  // Removes only one 3\n    \n    return 0;\n}',
    hint: "multiset = sorted elements, allows duplicates. Use when you need multiple equal values in sorted order.",
  },
  {
    id: "cpp_stl_9",
    topicId: "cpp_stl_containers",
    question: "What is std::map? Give example.",
    mathSolution: "Map container",
    codeSolution:
      '#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    map<string, int> ages;\n    \n    // Insert key-value pairs\n    ages["Alice"] = 25;\n    ages["Bob"] = 30;\n    ages["Charlie"] = 35;\n    \n    // Another way to insert\n    ages.insert(make_pair("David", 40));\n    ages.insert({"Eve", 45});\n    \n    // Accessing values\n    cout << "Alice\'s age: " << ages["Alice"] << endl;\n    cout << "Bob\'s age: " << ages.at("Bob") << endl;\n    \n    // Checking if key exists\n    if(ages.find("Frank") == ages.end()) {\n        cout << "Frank not found" << endl;\n    }\n    \n    // Iterating (sorted by key)\n    cout << "\\nAll entries:" << endl;\n    for(const auto& pair : ages) {\n        cout << pair.first << ": " << pair.second << endl;\n    }\n    \n    // Size and empty check\n    cout << "Size: " << ages.size() << endl;\n    \n    // Removing entries\n    ages.erase("Bob");\n    \n    return 0;\n}',
    hint: "map = sorted key-value pairs. Unique keys, fast search by key (O(log n)). Like a dictionary.",
  },
  {
    id: "cpp_stl_10",
    topicId: "cpp_stl_containers",
    question: "What is std::multimap? How is it different from map?",
    mathSolution: "Multimap container",
    codeSolution:
      '#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nint main() {\n    multimap<string, int> scores;\n    \n    // Insert multiple values for same key\n    scores.insert({"Alice", 85});\n    scores.insert({"Bob", 90});\n    scores.insert({"Alice", 95});  // Another score for Alice\n    scores.insert({"Alice", 88});\n    scores.insert({"Charlie", 75});\n    \n    cout << "All entries:" << endl;\n    for(const auto& pair : scores) {\n        cout << pair.first << ": " << pair.second << endl;\n    }\n    \n    // Find all values for a key\n    cout << "\\nAlice\'s scores: ";\n    auto range = scores.equal_range("Alice");\n    for(auto it = range.first; it != range.second; ++it) {\n        cout << it->second << " ";\n    }\n    cout << endl;\n    \n    // Count occurrences of a key\n    cout << "Alice appears " << scores.count("Alice") << " times" << endl;\n    \n    // No [] operator! (would be ambiguous)\n    // scores["Alice"] = 100;  // Error!\n    \n    return 0;\n}',
    hint: "multimap = sorted key-value pairs, allows multiple values per key. No [] operator. Use equal_range() to get all values.",
  },
  {
    id: "cpp_stl_11",
    topicId: "cpp_stl_containers",
    question: "What are unordered containers? Give examples.",
    mathSolution: "Unordered containers",
    codeSolution:
      '#include <iostream>\n#include <unordered_set>\n#include <unordered_map>\n#include <string>\nusing namespace std;\n\nint main() {\n    // unordered_set - hash table, no duplicates\n    unordered_set<int> us = {5, 2, 8, 1, 9};\n    cout << "unordered_set: ";\n    for(int x : us) cout << x << " ";  // Order unpredictable\n    cout << endl;\n    \n    // unordered_map - hash table key-value\n    unordered_map<string, int> phonebook;\n    phonebook["Alice"] = 1234;\n    phonebook["Bob"] = 5678;\n    phonebook["Charlie"] = 9012;\n    \n    cout << "\\nunordered_map:" << endl;\n    for(const auto& p : phonebook) {\n        cout << p.first << ": " << p.second << endl;\n    }\n    \n    // unordered_multiset - allows duplicates\n    unordered_multiset<int> ums = {1, 2, 2, 3, 3, 3};\n    \n    // unordered_multimap - multiple values per key\n    unordered_multimap<string, int> umm;\n    umm.insert({"Alice", 100});\n    umm.insert({"Alice", 200});\n    \n    return 0;\n}',
    hint: "Unordered containers use hash tables. Fast O(1) average access, but no order. Types: unordered_set, unordered_map, etc.",
  },
  {
    id: "cpp_stl_12",
    topicId: "cpp_stl_containers",
    question: "What is the difference between set and unordered_set?",
    mathSolution: "set vs unordered_set",
    codeSolution:
      '#include <iostream>\n#include <set>\n#include <unordered_set>\nusing namespace std;\n\nint main() {\n    // set - sorted, tree-based (O(log n))\n    set<int> s = {5, 2, 8, 1, 9};\n    cout << "set (sorted): ";\n    for(int x : s) cout << x << " ";  // 1 2 5 8 9\n    cout << endl;\n    \n    // unordered_set - hash-based (O(1) average)\n    unordered_set<int> us = {5, 2, 8, 1, 9};\n    cout << "unordered_set (unsorted): ";\n    for(int x : us) cout << x << " ";  // Random order\n    cout << endl;\n    \n    cout << "\\nset vs unordered_set:" << endl;\n    cout << "- Order: set sorted, unordered_set unpredictable" << endl;\n    cout << "- Implementation: Red-Black tree vs Hash table" << endl;\n    cout << "- Time complexity: O(log n) vs O(1) average" << endl;\n    cout << "- Memory: Less vs More" << endl;\n    cout << "- Iterators: Stable vs May invalidate on rehash" << endl;\n    \n    return 0;\n}',
    hint: "set = sorted (tree), slower but ordered. unordered_set = hashed, faster but unordered. Choose based on need for order.",
  },
  {
    id: "cpp_stl_13",
    topicId: "cpp_stl_containers",
    question: "What is std::stack? Give example.",
    mathSolution: "Stack container adapter",
    codeSolution:
      '#include <iostream>\n#include <stack>\nusing namespace std;\n\nint main() {\n    stack<int> stk;\n    \n    // Push elements\n    stk.push(10);\n    stk.push(20);\n    stk.push(30);\n    \n    cout << "Stack size: " << stk.size() << endl;\n    cout << "Top element: " << stk.top() << endl;  // 30\n    \n    // Pop elements (LIFO)\n    while(!stk.empty()) {\n        cout << "Popping: " << stk.top() << endl;\n        stk.pop();\n    }\n    \n    // Cannot iterate directly - use underlying container\n    stack<int, vector<int>> vecStack;  // Stack using vector\n    stack<int, list<int>> listStack;   // Stack using list\n    \n    return 0;\n}',
    hint: "stack = LIFO (Last In First Out). Operations: push(), pop(), top(), empty(), size(). Based on deque by default.",
  },
  {
    id: "cpp_stl_14",
    topicId: "cpp_stl_containers",
    question: "What is std::queue? Give example.",
    mathSolution: "Queue container adapter",
    codeSolution:
      '#include <iostream>\n#include <queue>\nusing namespace std;\n\nint main() {\n    queue<int> q;\n    \n    // Enqueue elements\n    q.push(10);\n    q.push(20);\n    q.push(30);\n    \n    cout << "Queue size: " << q.size() << endl;\n    cout << "Front: " << q.front() << ", Back: " << q.back() << endl;\n    \n    // Dequeue elements (FIFO)\n    while(!q.empty()) {\n        cout << "Dequeuing: " << q.front() << endl;\n        q.pop();\n    }\n    \n    // Different underlying containers\n    queue<int, list<int>> listQueue;    // Queue using list\n    queue<int, deque<int>> dequeQueue;  // Queue using deque (default)\n    \n    return 0;\n}',
    hint: "queue = FIFO (First In First Out). Operations: push(), pop(), front(), back(), empty(), size().",
  },
  {
    id: "cpp_stl_15",
    topicId: "cpp_stl_containers",
    question: "What is std::priority_queue? Give example.",
    mathSolution: "Priority queue",
    codeSolution:
      '#include <iostream>\n#include <queue>\n#include <vector>\nusing namespace std;\n\nint main() {\n    // Max heap (default) - largest element on top\n    priority_queue<int> maxPQ;\n    \n    maxPQ.push(30);\n    maxPQ.push(10);\n    maxPQ.push(50);\n    maxPQ.push(20);\n    \n    cout << "Max priority queue (top is largest):" << endl;\n    while(!maxPQ.empty()) {\n        cout << maxPQ.top() << " ";  // 50 30 20 10\n        maxPQ.pop();\n    }\n    cout << endl;\n    \n    // Min heap - smallest element on top\n    priority_queue<int, vector<int>, greater<int>> minPQ;\n    \n    minPQ.push(30);\n    minPQ.push(10);\n    minPQ.push(50);\n    minPQ.push(20);\n    \n    cout << "Min priority queue (top is smallest):" << endl;\n    while(!minPQ.empty()) {\n        cout << minPQ.top() << " ";  // 10 20 30 50\n        minPQ.pop();\n    }\n    cout << endl;\n    \n    // Custom comparator\n    auto cmp = [](int a, int b) { return a > b; };  // Min heap\n    priority_queue<int, vector<int>, decltype(cmp)> customPQ(cmp);\n    \n    return 0;\n}',
    hint: "priority_queue = elements processed by priority. Default max heap (largest on top). Use greater<int> for min heap.",
  },
  {
    id: "cpp_stl_16",
    topicId: "cpp_stl_containers",
    question: "What are iterators? Why are they important in STL?",
    mathSolution: "Iterator concept",
    codeSolution:
      '#include <iostream>\n#include <vector>\n#include <list>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    vector<int> vec = {1, 2, 3, 4, 5};\n    list<int> lst = {10, 20, 30, 40, 50};\n    \n    // Different types of iterators\n    // 1. begin()/end() - forward iteration\n    cout << "Forward iteration: ";\n    for(auto it = vec.begin(); it != vec.end(); ++it) {\n        cout << *it << " ";\n    }\n    cout << endl;\n    \n    // 2. rbegin()/rend() - reverse iteration\n    cout << "Reverse iteration: ";\n    for(auto it = vec.rbegin(); it != vec.rend(); ++it) {\n        cout << *it << " ";\n    }\n    cout << endl;\n    \n    // 3. cbegin()/cend() - const iteration\n    // 4. Algorithms work with iterators\n    auto it = find(vec.begin(), vec.end(), 3);\n    if(it != vec.end()) {\n        cout << "Found 3 at position " << (it - vec.begin()) << endl;\n    }\n    \n    // Iterator categories\n    cout << "\\nIterator categories:" << endl;\n    cout << "- Input/Output: Read/write once" << endl;\n    cout << "- Forward: Multi-pass, forward only (forward_list)" << endl;\n    cout << "- Bidirectional: Forward/backward (list, set, map)" << endl;\n    cout << "- Random Access: Direct access (vector, deque, array)" << endl;\n    \n    return 0;\n}',
    hint: "Iterators = pointers to STL elements. Bridge between containers and algorithms. 5 categories: Input, Output, Forward, Bidirectional, Random Access.",
  },
  {
    id: "cpp_stl_17",
    topicId: "cpp_stl_containers",
    question: "How do you iterate over STL containers? Show different methods.",
    mathSolution: "Iteration methods",
    codeSolution:
      '#include <iostream>\n#include <vector>\n#include <map>\nusing namespace std;\n\nint main() {\n    vector<int> vec = {1, 2, 3, 4, 5};\n    \n    // Method 1: Range-based for loop (C++11)\n    cout << "Range-based for: ";\n    for(int x : vec) {\n        cout << x << " ";\n    }\n    cout << endl;\n    \n    // Method 2: Iterator with auto\n    cout << "Iterator with auto: ";\n    for(auto it = vec.begin(); it != vec.end(); ++it) {\n        cout << *it << " ";\n    }\n    cout << endl;\n    \n    // Method 3: Explicit iterator type\n    cout << "Explicit iterator: ";\n    for(vector<int>::iterator it = vec.begin(); it != vec.end(); ++it) {\n        cout << *it << " ";\n    }\n    cout << endl;\n    \n    // Method 4: Index-based (for random access containers)\n    cout << "Index-based: ";\n    for(size_t i = 0; i < vec.size(); ++i) {\n        cout << vec[i] << " ";\n    }\n    cout << endl;\n    \n    // Method 5: STL algorithms\n    cout << "for_each algorithm: ";\n    for_each(vec.begin(), vec.end(), [](int x) {\n        cout << x << " ";\n    });\n    cout << endl;\n    \n    // Iterating over map\n    map<string, int> ages = {{"Alice", 25}, {"Bob", 30}};\n    cout << "\\nMap iteration: ";\n    for(const auto& [name, age] : ages) {  // C++17 structured binding\n        cout << name << ":" << age << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}',
    hint: "5 ways: range-based for, iterators, index (vector), algorithms, structured bindings (map). Choose based on need.",
  },
  {
    id: "cpp_stl_18",
    topicId: "cpp_stl_containers",
    question: "What is the difference between emplace and insert?",
    mathSolution: "emplace vs insert",
    codeSolution:
      '#include <iostream>\n#include <vector>\n#include <map>\n#include <string>\nusing namespace std;\n\nclass Person {\npublic:\n    string name;\n    int age;\n    \n    Person(string n, int a) : name(n), age(a) {\n        cout << "Person created: " << name << endl;\n    }\n    \n    Person(const Person& other) {\n        name = other.name;\n        age = other.age;\n        cout << "Person copied: " << name << endl;\n    }\n};\n\nint main() {\n    vector<Person> people;\n    \n    cout << "Using push_back with temporary:" << endl;\n    people.push_back(Person("Alice", 25));  // Creates temporary, then copies\n    \n    cout << "\\nUsing emplace_back (C++11):" << endl;\n    people.emplace_back("Bob", 30);  // Constructs directly in-place\n    \n    // With map\n    map<int, Person> peopleMap;\n    \n    cout << "\\nMap insert:" << endl;\n    peopleMap.insert({1, Person("Charlie", 35)});  // Creates pair, then copies\n    \n    cout << "\\nMap emplace:" << endl;\n    peopleMap.emplace(2, Person("David", 40));  // Constructs in-place\n    \n    // emplace with multiple arguments\n    peopleMap.emplace(piecewise_construct,\n                      forward_as_tuple(3),\n                      forward_as_tuple("Eve", 45));\n    \n    return 0;\n}',
    hint: "emplace constructs object in-place, avoiding copy. insert copies existing object. emplace is more efficient for complex types.",
  },
  {
    id: "cpp_stl_19",
    topicId: "cpp_stl_containers",
    question: "What are container adapters? Give examples.",
    mathSolution: "Container adapters",
    codeSolution:
      '#include <iostream>\n#include <stack>\n#include <queue>\n#include <vector>\n#include <list>\nusing namespace std;\n\nint main() {\n    // Container adapters provide restricted interfaces\n    // They adapt existing containers\n    \n    // 1. stack - LIFO (default deque)\n    stack<int> stk;  // Uses deque by default\n    stack<int, vector<int>> vecStack;  // Adapt vector\n    stack<int, list<int>> listStack;   // Adapt list\n    \n    // 2. queue - FIFO (default deque)\n    queue<int> q;  // Uses deque by default\n    queue<int, list<int>> listQueue;   // Adapt list\n    \n    // 3. priority_queue - sorted (default vector)\n    priority_queue<int> pq;  // Uses vector by default\n    priority_queue<int, deque<int>> dequePQ;  // Adapt deque\n    \n    // Using stack with vector\n    vecStack.push(10);\n    vecStack.push(20);\n    cout << "Vector-based stack top: " << vecStack.top() << endl;\n    \n    // Using queue with list\n    listQueue.push(100);\n    listQueue.push(200);\n    cout << "List-based queue front: " << listQueue.front() << endl;\n    \n    // Cannot iterate directly - need underlying container\n    // But can access underlying container (if needed)\n    vector<int>& underlying = get_underlying_container(vecStack);\n    \n    return 0;\n}\n\n// Helper to get underlying container\ntemplate <typename T, typename Container>\nContainer& get_underlying_container(stack<T, Container>& s) {\n    struct Hack : private stack<T, Container> {\n        static Container& get(stack<T, Container>& s) {\n            return s.*&Hack::c;\n        }\n    };\n    return Hack::get(s);\n}',
    hint: "Container adapters = stack, queue, priority_queue. They provide specific interfaces by adapting other containers (deque, vector, list).",
  },
  {
    id: "cpp_stl_20",
    topicId: "cpp_stl_containers",
    question: "How do you choose the right STL container for your needs?",
    mathSolution: "Container selection guide",
    codeSolution:
      '#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <set>\n#include <map>\n#include <unordered_set>\n#include <unordered_map>\nusing namespace std;\n\nint main() {\n    cout << "=== Container Selection Guide ===\\n" << endl;\n    \n    cout << "SEQUENCE CONTAINERS:" << endl;\n    cout << "vector:   Fast random access, insert/delete only at end" << endl;\n    cout << "list:     Fast insert/delete anywhere, slow random access" << endl;\n    cout << "deque:    Fast insert/delete at both ends, random access" << endl;\n    cout << "array:    Fixed size, stack allocation, random access" << endl;\n    cout << "forward_list: Singly-linked list, forward only" << endl;\n    \n    cout << "\\nASSOCIATIVE CONTAINERS (sorted):" << endl;\n    cout << "set:      Unique keys, sorted, O(log n)" << endl;\n    cout << "multiset: Multiple keys allowed, sorted" << endl;\n    cout << "map:      Key-value pairs, unique keys, sorted" << endl;\n    cout << "multimap: Key-value pairs, multiple keys allowed" << endl;\n    \n    cout << "\\nUNORDERED ASSOCIATIVE CONTAINERS (hash):" << endl;\n    cout << "unordered_set:   Unique keys, O(1) average" << endl;\n    cout << "unordered_multiset: Multiple keys, O(1) average" << endl;\n    cout << "unordered_map:   Key-value, unique keys, O(1) average" << endl;\n    cout << "unordered_multimap: Key-value, multiple keys" << endl;\n    \n    cout << "\\nCONTAINER ADAPTERS:" << endl;\n    cout << "stack:           LIFO" << endl;\n    cout << "queue:           FIFO" << endl;\n    cout << "priority_queue:  Sorted by priority" << endl;\n    \n    cout << "\\n=== Decision Tree ===" << endl;\n    cout << "Need to store elements?" << endl;\n    cout << "├─ Need key-value association?" << endl;\n    cout << "│  ├─ Keys unique?" << endl;\n    cout << "│  │  ├─ Order matters? → map" << endl;\n    cout << "│  │  └─ Order doesn\'t matter? → unordered_map" << endl;\n    cout << "│  └─ Multiple keys allowed?" << endl;\n    cout << "│     ├─ Order matters? → multimap" << endl;\n    cout << "│     └─ Order doesn\'t matter? → unordered_multimap" << endl;\n    cout << "└─ Need just elements?" << endl;\n    cout << "   ├─ Need order?" << endl;\n    cout << "   │  ├─ Sorted? → set/multiset" << endl;\n    cout << "   │  └─ Insertion order? → vector/list/deque" << endl;\n    cout << "   └─ Order doesn\'t matter? → unordered_set" << endl;\n    \n    return 0;\n}',
    hint: "Choose based on: order needed? duplicates allowed? access pattern? key-value? performance requirements?",
  },
  {
    id: "cpp_stl_21",
    topicId: "cpp_stl_containers",
    question: "What is std::forward_list? How is it different from list?",
    mathSolution: "forward_list vs list",
    codeSolution:
      '#include <iostream>\n#include <forward_list>\n#include <list>\nusing namespace std;\n\nint main() {\n    // forward_list - singly-linked list\n    forward_list<int> flist = {1, 2, 3, 4, 5};\n    \n    // list - doubly-linked list\n    list<int> lst = {1, 2, 3, 4, 5};\n    \n    cout << "forward_list (singly-linked):" << endl;\n    cout << "- Less memory (one pointer per node)" << endl;\n    cout << "- Only forward iteration" << endl;\n    cout << "- No size() member (linear time)" << endl;\n    cout << "- Insert after (not before)" << endl;\n    \n    // forward_list specific operations\n    flist.push_front(0);  // Add at beginning\n    // flist.push_back(6);  // Error: no push_back\n    \n    auto it = flist.begin();\n    flist.insert_after(it, 99);  // Insert after first element\n    flist.erase_after(it);        // Erase after first element\n    \n    cout << "forward_list elements: ";\n    for(int x : flist) cout << x << " ";\n    cout << endl;\n    \n    cout << "\\nlist (doubly-linked):" << endl;\n    cout << "- More memory (two pointers per node)" << endl;\n    cout << "- Bidirectional iteration" << endl;\n    cout << "- Has size() (constant time)" << endl;\n    cout << "- Insert before and after" << endl;\n    \n    return 0;\n}',
    hint: "forward_list = singly-linked list (forward only), less memory. list = doubly-linked list (bidirectional), more features. Use forward_list when memory is critical.",
  },
  {
    id: "cpp_stl_22",
    topicId: "cpp_stl_containers",
    question: "What is std::array? How is it different from C-style arrays?",
    mathSolution: "array vs C-array",
    codeSolution:
      '#include <iostream>\n#include <array>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    // C-style array\n    int carr[5] = {1, 2, 3, 4, 5};\n    \n    // C++11 array\n    array<int, 5> arr = {1, 2, 3, 4, 5};\n    \n    cout << "C-style array vs std::array:" << endl;\n    \n    // Size\n    cout << "C-array size: " << sizeof(carr)/sizeof(carr[0]) << endl;\n    cout << "std::array size: " << arr.size() << endl;\n    \n    // Bounds checking\n    cout << "arr.at(2): " << arr.at(2) << endl;  // Throws if out of bounds\n    // carr.at(2) doesn\'t exist\n    \n    // STL algorithms work with std::array\n    sort(arr.begin(), arr.end());\n    \n    // Iterators\n    cout << "Elements: ";\n    for(auto it = arr.begin(); it != arr.end(); ++it) {\n        cout << *it << " ";\n    }\n    cout << endl;\n    \n    // Fill\n    arr.fill(10);  // Set all elements to 10\n    \n    // Get underlying C-array if needed\n    int* data = arr.data();\n    \n    // Comparison\n    array<int, 5> arr2 = {10, 10, 10, 10, 10};\n    if(arr == arr2) cout << "Arrays are equal" << endl;\n    \n    return 0;\n}',
    hint: "std::array = STL container wrapper for fixed-size arrays. Has size(), iterators, at() with bounds checking, works with algorithms.",
  },
  {
    id: "cpp_stl_23",
    topicId: "cpp_stl_containers",
    question: "How do you use custom objects in STL containers?",
    mathSolution: "Custom objects in containers",
    codeSolution:
      '#include <iostream>\n#include <vector>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\nusing namespace std;\n\nclass Person {\npublic:\n    string name;\n    int age;\n    \n    Person(string n, int a) : name(n), age(a) {}\n    \n    // For set/map (need comparison operator)\n    bool operator<(const Person& other) const {\n        return age < other.age;  // Sort by age\n    }\n    \n    // For unordered containers (need hash and equality)\n    bool operator==(const Person& other) const {\n        return name == other.name && age == other.age;\n    }\n};\n\n// Hash function for unordered_set/map\nnamespace std {\n    template<>\n    struct hash<Person> {\n        size_t operator()(const Person& p) const {\n            return hash<string>()(p.name) ^ hash<int>()(p.age);\n        }\n    };\n}\n\n// Custom comparator\nstruct CompareByName {\n    bool operator()(const Person& a, const Person& b) const {\n        return a.name < b.name;\n    }\n};\n\nint main() {\n    // vector - any type works\n    vector<Person> people;\n    people.emplace_back("Alice", 25);\n    people.emplace_back("Bob", 30);\n    \n    // set - requires operator< or custom comparator\n    set<Person> personSet;  // Uses operator<\n    personSet.insert(Person("Alice", 25));\n    personSet.insert(Person("Bob", 30));\n    \n    // set with custom comparator\n    set<Person, CompareByName> personSetByName;\n    personSetByName.insert(Person("Alice", 25));\n    \n    // map with custom key\n    map<Person, string> personMap;  // Person must have operator<\n    personMap[Person("Alice", 25)] = "Engineer";\n    \n    // unordered_set - requires hash and equality\n    unordered_set<Person> personUSet;\n    personUSet.insert(Person("Alice", 25));\n    \n    return 0;\n}',
    hint: "For ordered containers (set/map): need operator< or custom comparator. For unordered: need hash function and operator==.",
  },
  {
    id: "cpp_stl_24",
    topicId: "cpp_stl_containers",
    question: "What is iterator invalidation? Give examples.",
    mathSolution: "Iterator invalidation",
    codeSolution:
      '#include <iostream>\n#include <vector>\n#include <list>\nusing namespace std;\n\nint main() {\n    // Iterator invalidation examples\n    \n    cout << "=== Iterator Invalidation ===\\n" << endl;\n    \n    // vector - insertion/deletion can invalidate\n    vector<int> vec = {1, 2, 3, 4, 5};\n    auto it = vec.begin() + 2;  // Points to 3\n    cout << "Before push_back, *it = " << *it << endl;\n    \n    vec.push_back(6);  // May reallocate, invalidating all iterators\n    // cout << *it;  // Undefined behavior - iterator invalidated!\n    \n    // list - insertion/deletion doesn\'t invalidate other iterators\n    list<int> lst = {1, 2, 3, 4, 5};\n    auto lit = lst.begin();\n    advance(lit, 2);  // Points to 3\n    cout << "Before push_back, *lit = " << *lit << endl;\n    \n    lst.push_back(6);  // Doesn\'t invalidate existing iterators\n    cout << "After push_back, *lit = " << *lit << endl;  // Still valid\n    \n    // Rules summary\n    cout << "\\nInvalidation rules:" << endl;\n    cout << "vector/deque: insertion/deletion may invalidate all iterators" << endl;\n    cout << "list/forward_list: insertion/deletion doesn\'t invalidate others" << endl;\n    cout << "associative containers: insertion doesn\'t invalidate, deletion only that iterator" << endl;\n    cout << "unordered: rehash invalidates all" << endl;\n    \n    // Safe practice - get new iterator\n    it = vec.begin() + 2;  // Get fresh iterator after modifications\n    \n    return 0;\n}',
    hint: "Iterator invalidation = iterator becomes invalid after container modification. Different rules for different containers. Always get fresh iterators after modifications.",
  },
  {
    id: "cpp_stl_25",
    topicId: "cpp_stl_containers",
    question: "Write a complete program demonstrating various STL containers.",
    mathSolution: "Complete STL containers demo",
    codeSolution:
      '#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <set>\n#include <map>\n#include <unordered_set>\n#include <unordered_map>\n#include <stack>\n#include <queue>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    cout << "=== STL Containers Comprehensive Demo ===\\n" << endl;\n    \n    // 1. Sequence Containers\n    cout << "1. SEQUENCE CONTAINERS:" << endl;\n    \n    // vector\n    vector<int> vec = {1, 2, 3, 4, 5};\n    vec.push_back(6);\n    cout << "vector: ";\n    for(int x : vec) cout << x << " ";\n    cout << " (size: " << vec.size() << ", capacity: " << vec.capacity() << ")" << endl;\n    \n    // list\n    list<int> lst = {1, 2, 3, 4, 5};\n    lst.push_front(0);\n    lst.push_back(6);\n    cout << "list:   ";\n    for(int x : lst) cout << x << " ";\n    cout << endl;\n    \n    // deque\n    deque<int> dq = {1, 2, 3, 4, 5};\n    dq.push_front(0);\n    dq.push_back(6);\n    cout << "deque:  ";\n    for(int x : dq) cout << x << " ";\n    cout << endl;\n    \n    // 2. Associative Containers (sorted)\n    cout << "\\n2. ASSOCIATIVE CONTAINERS (sorted):" << endl;\n    \n    // set\n    set<int> s = {5, 2, 8, 1, 3, 5, 2};\n    cout << "set:    ";\n    for(int x : s) cout << x << " ";  // 1 2 3 5 8\n    cout << " (unique, sorted)" << endl;\n    \n    // multiset\n    multiset<int> ms = {5, 2, 8, 1, 3, 5, 2};\n    cout << "mset:   ";\n    for(int x : ms) cout << x << " ";  // 1 2 2 3 5 5 8\n    cout << " (duplicates allowed)" << endl;\n    \n    // map\n    map<string, int> ages;\n    ages["Alice"] = 25;\n    ages["Bob"] = 30;\n    ages["Charlie"] = 35;\n    cout << "map:    ";\n    for(const auto& [name, age] : ages) {\n        cout << name << ":" << age << " ";\n    }\n    cout << endl;\n    \n    // 3. Unordered Containers (hash-based)\n    cout << "\\n3. UNORDERED CONTAINERS (hash):" << endl;\n    \n    unordered_set<int> us = {5, 2, 8, 1, 3};\n    cout << "uset:   ";\n    for(int x : us) cout << x << " ";  // Order unpredictable\n    cout << " (O(1) average)" << endl;\n    \n    unordered_map<string, int> phonebook;\n    phonebook["Alice"] = 1234;\n    phonebook["Bob"] = 5678;\n    cout << "umap:   ";\n    for(const auto& [name, num] : phonebook) {\n        cout << name << ":" << num << " ";\n    }\n    cout << endl;\n    \n    // 4. Container Adapters\n    cout << "\\n4. CONTAINER ADAPTERS:" << endl;\n    \n    // stack\n    stack<int> stk;\n    stk.push(1); stk.push(2); stk.push(3);\n    cout << "stack:  top=" << stk.top() << ", size=" << stk.size() << endl;\n    \n    // queue\n    queue<int> q;\n    q.push(1); q.push(2); q.push(3);\n    cout << "queue:  front=" << q.front() << ", back=" << q.back() << endl;\n    \n    // priority_queue\n    priority_queue<int> pq;\n    pq.push(3); pq.push(1); pq.push(2);\n    cout << "pqueue: top=" << pq.top() << " (largest)" << endl;\n    \n    // 5. Container Operations\n    cout << "\\n5. COMMON OPERATIONS:" << endl;\n    \n    // Sorting\n    vector<int> unsorted = {5, 2, 8, 1, 3};\n    sort(unsorted.begin(), unsorted.end());\n    cout << "Sorted vector: ";\n    for(int x : unsorted) cout << x << " ";\n    cout << endl;\n    \n    // Finding\n    auto it = find(unsorted.begin(), unsorted.end(), 3);\n    if(it != unsorted.end()) {\n        cout << "Found 3 at position " << (it - unsorted.begin()) << endl;\n    }\n    \n    // Counting\n    vector<int> dup = {1, 2, 2, 3, 3, 3};\n    int cnt = count(dup.begin(), dup.end(), 2);\n    cout << "Count of 2: " << cnt << endl;\n    \n    // Min/Max\n    auto [minit, maxit] = minmax_element(dup.begin(), dup.end());\n    cout << "Min: " << *minit << ", Max: " << *maxit << endl;\n    \n    // 6. Container Performance Summary\n    cout << "\\n6. PERFORMANCE SUMMARY (typical operations):" << endl;\n    cout << "Container   | Insert  | Delete  | Search  | Random Access" << endl;\n    cout << "------------|---------|---------|---------|--------------" << endl;\n    cout << "vector      | O(1)end | O(1)end | O(n)    | O(1)" << endl;\n    cout << "list        | O(1)    | O(1)    | O(n)    | O(n)" << endl;\n    cout << "deque       | O(1)both| O(1)both| O(n)    | O(1)" << endl;\n    cout << "set/map     | O(log n)| O(log n)| O(log n)| -" << endl;\n    cout << "unordered_* | O(1)avg | O(1)avg | O(1)avg | -" << endl;\n    \n    cout << "\\n=== End of STL Containers Demo ===" << endl;\n    \n    return 0;\n}',
    hint: "This demonstrates all major STL containers: sequence (vector, list, deque), associative (set, map), unordered, adapters (stack, queue), and common algorithms.",
  },
);
