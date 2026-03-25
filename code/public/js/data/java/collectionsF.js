QuizData.questions.push(
  // ARRAYLIST (8)
  {
    id: "collection_1",
    topicId: "collection",
    question: "Create ArrayList and add elements.",
    mathSolution: "ArrayList implements List interface",
    codeSolution:
      'import java.util.*;\nArrayList<String> list = new ArrayList<>();\nlist.add("Apple");\nlist.add("Banana");\nlist.add("Orange");\nSystem.out.println("ArrayList: " + list);',
    hint: "add() method appends elements",
  },
  {
    id: "collection_2",
    topicId: "collection",
    question: "Access elements by index in ArrayList.",
    mathSolution: "get() method with index",
    codeSolution:
      'ArrayList<Integer> numbers = new ArrayList<>();\nnumbers.add(10);\nnumbers.add(20);\nnumbers.add(30);\nSystem.out.println("First element: " + numbers.get(0));\nSystem.out.println("Last element: " + numbers.get(numbers.size()-1));',
    hint: "Index starts from 0",
  },
  {
    id: "collection_3",
    topicId: "collection",
    question: "Remove element from ArrayList.",
    mathSolution: "remove() by index or object",
    codeSolution:
      'ArrayList<String> colors = new ArrayList<>();\ncolors.add("Red");\ncolors.add("Green");\ncolors.add("Blue");\nSystem.out.println("Before: " + colors);\ncolors.remove(1); // remove by index\ncolors.remove("Blue"); // remove by object\nSystem.out.println("After: " + colors);',
    hint: "remove() returns removed element",
  },
  {
    id: "collection_4",
    topicId: "collection",
    question: "Iterate through ArrayList using different methods.",
    mathSolution: "Multiple iteration techniques",
    codeSolution:
      'ArrayList<Integer> nums = new ArrayList<>(Arrays.asList(1,2,3,4,5));\n\n// For loop\nfor(int i=0; i<nums.size(); i++) {\n    System.out.print(nums.get(i) + " ");\n}\n\n// For-each loop\nfor(int n : nums) {\n    System.out.print(n + " ");\n}\n\n// Iterator\nIterator<Integer> it = nums.iterator();\nwhile(it.hasNext()) {\n    System.out.print(it.next() + " ");\n}\n\n// Java 8 forEach\nnums.forEach(n -> System.out.print(n + " "));',
    hint: "Choose based on need",
  },
  {
    id: "collection_5",
    topicId: "collection",
    question: "Sort ArrayList in ascending and descending order.",
    mathSolution: "Collections.sort() and Comparator",
    codeSolution:
      'ArrayList<Integer> nums = new ArrayList<>(Arrays.asList(5,2,8,1,9));\nSystem.out.println("Original: " + nums);\n\nCollections.sort(nums); // ascending\nSystem.out.println("Ascending: " + nums);\n\nCollections.sort(nums, Collections.reverseOrder()); // descending\nSystem.out.println("Descending: " + nums);\n\n// Sort strings\nArrayList<String> names = new ArrayList<>(Arrays.asList("John", "Alice", "Bob"));\nCollections.sort(names);\nSystem.out.println("Sorted names: " + names);',
    hint: "Collections.sort() for natural order",
  },
  {
    id: "collection_6",
    topicId: "collection",
    question: "Convert ArrayList to Array and vice versa.",
    mathSolution: "toArray() and Arrays.asList()",
    codeSolution:
      '// ArrayList to Array\nArrayList<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));\nString[] array = list.toArray(new String[0]);\nSystem.out.println("Array: " + Arrays.toString(array));\n\n// Array to ArrayList\nString[] arr = {"X", "Y", "Z"};\nArrayList<String> newList = new ArrayList<>(Arrays.asList(arr));\nSystem.out.println("ArrayList: " + newList);',
    hint: "toArray() converts to array",
  },
  {
    id: "collection_7",
    topicId: "collection",
    question: "Find min and max in ArrayList.",
    mathSolution: "Collections.min() and Collections.max()",
    codeSolution:
      'ArrayList<Integer> numbers = new ArrayList<>(Arrays.asList(45, 12, 78, 34, 89, 23));\nint min = Collections.min(numbers);\nint max = Collections.max(numbers);\nSystem.out.println("Minimum: " + min);\nSystem.out.println("Maximum: " + max);',
    hint: "Collections utility class",
  },
  {
    id: "collection_8",
    topicId: "collection",
    question: "Create ArrayList of custom objects.",
    mathSolution: "Store user-defined class objects",
    codeSolution:
      'class Student {\n    String name; int marks;\n    Student(String n, int m) { name = n; marks = m; }\n    public String toString() { return name + "(" + marks + ")"; }\n}\n\nArrayList<Student> students = new ArrayList<>();\nstudents.add(new Student("Alice", 85));\nstudents.add(new Student("Bob", 92));\nstudents.add(new Student("Charlie", 78));\nSystem.out.println("Students: " + students);',
    hint: "Override toString() for printing",
  },

  // LINKEDLIST (5)
  {
    id: "collection_9",
    topicId: "collection",
    question: "Create LinkedList and add elements at first and last.",
    mathSolution: "LinkedList implements Deque",
    codeSolution:
      'LinkedList<String> list = new LinkedList<>();\nlist.add("Middle");\nlist.addFirst("First");\nlist.addLast("Last");\nSystem.out.println("LinkedList: " + list);\nSystem.out.println("First: " + list.getFirst());\nSystem.out.println("Last: " + list.getLast());',
    hint: "addFirst() and addLast() methods",
  },
  {
    id: "collection_10",
    topicId: "collection",
    question: "Use LinkedList as Queue.",
    mathSolution: "Queue operations with LinkedList",
    codeSolution:
      'LinkedList<String> queue = new LinkedList<>();\n// Add elements\nqueue.offer("First");\nqueue.offer("Second");\nqueue.offer("Third");\nSystem.out.println("Queue: " + queue);\n\n// Remove from front\nSystem.out.println("Removed: " + queue.poll());\nSystem.out.println("After poll: " + queue);\n\n// Peek at front\nSystem.out.println("Front: " + queue.peek());',
    hint: "offer(), poll(), peek()",
  },
  {
    id: "collection_11",
    topicId: "collection",
    question: "Use LinkedList as Stack.",
    mathSolution: "Stack operations with LinkedList",
    codeSolution:
      'LinkedList<String> stack = new LinkedList<>();\n// Push elements\nstack.push("Bottom");\nstack.push("Middle");\nstack.push("Top");\nSystem.out.println("Stack: " + stack);\n\n// Pop from top\nSystem.out.println("Popped: " + stack.pop());\nSystem.out.println("After pop: " + stack);\n\n// Peek at top\nSystem.out.println("Top: " + stack.peek());',
    hint: "push(), pop(), peek()",
  },
  {
    id: "collection_12",
    topicId: "collection",
    question: "Remove first and last occurrence of element.",
    mathSolution: "removeFirstOccurrence() and removeLastOccurrence()",
    codeSolution:
      'LinkedList<Integer> list = new LinkedList<>(Arrays.asList(1,2,3,2,4,2,5));\nSystem.out.println("Original: " + list);\n\nlist.removeFirstOccurrence(2);\nSystem.out.println("After removing first 2: " + list);\n\nlist.removeLastOccurrence(2);\nSystem.out.println("After removing last 2: " + list);',
    hint: "Removes specific occurrences",
  },
  {
    id: "collection_13",
    topicId: "collection",
    question: "Iterate LinkedList in reverse order.",
    mathSolution: "descendingIterator() method",
    codeSolution:
      'LinkedList<String> list = new LinkedList<>(Arrays.asList("A", "B", "C", "D"));\nSystem.out.println("Forward: " + list);\n\nSystem.out.print("Reverse: ");\nIterator<String> it = list.descendingIterator();\nwhile(it.hasNext()) {\n    System.out.print(it.next() + " ");\n}',
    hint: "descendingIterator() for reverse",
  },

  // HASHSET (5)
  {
    id: "collection_14",
    topicId: "collection",
    question: "Create HashSet and add elements (no duplicates).",
    mathSolution: "HashSet doesn't allow duplicates",
    codeSolution:
      'HashSet<String> set = new HashSet<>();\nset.add("Apple");\nset.add("Banana");\nset.add("Apple"); // duplicate ignored\nset.add("Orange");\nSystem.out.println("HashSet: " + set);\nSystem.out.println("Size: " + set.size());',
    hint: "Duplicates are automatically ignored",
  },
  {
    id: "collection_15",
    topicId: "collection",
    question: "Check if element exists in HashSet.",
    mathSolution: "contains() method",
    codeSolution:
      'HashSet<Integer> numbers = new HashSet<>(Arrays.asList(10,20,30,40,50));\nint search = 30;\nif(numbers.contains(search)) {\n    System.out.println(search + " found in set");\n} else {\n    System.out.println(search + " not found");\n}\n\nsearch = 35;\nSystem.out.println("Contains 35? " + numbers.contains(search));',
    hint: "contains() returns boolean",
  },
  {
    id: "collection_16",
    topicId: "collection",
    question: "Remove element from HashSet.",
    mathSolution: "remove() method",
    codeSolution:
      'HashSet<String> set = new HashSet<>(Arrays.asList("Red", "Green", "Blue", "Yellow"));\nSystem.out.println("Before removal: " + set);\n\nboolean removed = set.remove("Green");\nSystem.out.println("Removed Green? " + removed);\nSystem.out.println("After removal: " + set);\n\nremoved = set.remove("Purple");\nSystem.out.println("Removed Purple? " + removed);',
    hint: "remove() returns true if element existed",
  },
  {
    id: "collection_17",
    topicId: "collection",
    question: "Perform set operations (union, intersection, difference).",
    mathSolution: "Using addAll(), retainAll(), removeAll()",
    codeSolution:
      'HashSet<Integer> set1 = new HashSet<>(Arrays.asList(1,2,3,4,5));\nHashSet<Integer> set2 = new HashSet<>(Arrays.asList(4,5,6,7,8));\n\n// Union\nHashSet<Integer> union = new HashSet<>(set1);\nunion.addAll(set2);\nSystem.out.println("Union: " + union);\n\n// Intersection\nHashSet<Integer> intersection = new HashSet<>(set1);\nintersection.retainAll(set2);\nSystem.out.println("Intersection: " + intersection);\n\n// Difference (set1 - set2)\nHashSet<Integer> difference = new HashSet<>(set1);\ndifference.removeAll(set2);\nSystem.out.println("Difference (set1-set2): " + difference);',
    hint: "addAll, retainAll, removeAll",
  },
  {
    id: "collection_18",
    topicId: "collection",
    question: "Convert HashSet to ArrayList.",
    mathSolution: "Pass HashSet to ArrayList constructor",
    codeSolution:
      'HashSet<String> set = new HashSet<>(Arrays.asList("Dog", "Cat", "Bird", "Fish"));\nSystem.out.println("HashSet: " + set);\n\nArrayList<String> list = new ArrayList<>(set);\nSystem.out.println("ArrayList: " + list);\n\n// Access by index now possible\nSystem.out.println("Element at index 2: " + list.get(2));',
    hint: "ArrayList constructor accepts Collection",
  },

  // TREESET (4)
  {
    id: "collection_19",
    topicId: "collection",
    question: "Create TreeSet (sorted automatically).",
    mathSolution: "TreeSet maintains sorted order",
    codeSolution:
      'TreeSet<Integer> numbers = new TreeSet<>();\nnumbers.add(50);\nnumbers.add(10);\nnumbers.add(40);\nnumbers.add(20);\nnumbers.add(30);\nSystem.out.println("TreeSet (sorted): " + numbers);\n\nTreeSet<String> words = new TreeSet<>(Arrays.asList("Banana", "Apple", "Date", "Cherry"));\nSystem.out.println("Sorted strings: " + words);',
    hint: "Elements are stored in sorted order",
  },
  {
    id: "collection_20",
    topicId: "collection",
    question: "Get first and last elements from TreeSet.",
    mathSolution: "first() and last() methods",
    codeSolution:
      'TreeSet<Integer> set = new TreeSet<>(Arrays.asList(15, 8, 23, 4, 42, 16));\nSystem.out.println("TreeSet: " + set);\nSystem.out.println("First (smallest): " + set.first());\nSystem.out.println("Last (largest): " + set.last());',
    hint: "first() returns smallest, last() largest",
  },
  {
    id: "collection_21",
    topicId: "collection",
    question: "Get elements less than or greater than given value.",
    mathSolution: "headSet(), tailSet(), subSet()",
    codeSolution:
      'TreeSet<Integer> set = new TreeSet<>(Arrays.asList(10,20,30,40,50,60,70));\nSystem.out.println("Original: " + set);\n\n// Elements less than 40\nSortedSet<Integer> head = set.headSet(40);\nSystem.out.println("Less than 40: " + head);\n\n// Elements greater than or equal to 40\nSortedSet<Integer> tail = set.tailSet(40);\nSystem.out.println("Greater/equal 40: " + tail);\n\n// Elements between 20 and 50 (exclusive of 50)\nSortedSet<Integer> sub = set.subSet(20, 50);\nSystem.out.println("Between 20 and 50: " + sub);',
    hint: "headSet, tailSet, subSet methods",
  },
  {
    id: "collection_22",
    topicId: "collection",
    question: "Get ceiling, floor, higher, lower elements.",
    mathSolution: "Navigation methods in TreeSet",
    codeSolution:
      'TreeSet<Integer> set = new TreeSet<>(Arrays.asList(10,20,30,40,50));\nSystem.out.println("Set: " + set);\n\nSystem.out.println("Ceiling of 25 (>=): " + set.ceiling(25)); // 30\nSystem.out.println("Floor of 25 (<=): " + set.floor(25));     // 20\nSystem.out.println("Higher than 30 (>): " + set.higher(30));   // 40\nSystem.out.println("Lower than 30 (<): " + set.lower(30));     // 20\n\nSystem.out.println("Ceiling of 55: " + set.ceiling(55)); // null\nSystem.out.println("Floor of 5: " + set.floor(5));       // null',
    hint: "Useful for navigation",
  },

  // HASHMAP (7)
  {
    id: "collection_23",
    topicId: "collection",
    question: "Create HashMap and put key-value pairs.",
    mathSolution: "HashMap stores key-value mappings",
    codeSolution:
      'HashMap<String, Integer> map = new HashMap<>();\nmap.put("Alice", 25);\nmap.put("Bob", 30);\nmap.put("Charlie", 28);\nmap.put("Alice", 26); // updates value\nSystem.out.println("HashMap: " + map);\nSystem.out.println("Size: " + map.size());',
    hint: "put() adds or updates entry",
  },
  {
    id: "collection_24",
    topicId: "collection",
    question: "Get value by key from HashMap.",
    mathSolution: "get() method",
    codeSolution:
      'HashMap<String, Double> salaries = new HashMap<>();\nsalaries.put("John", 50000.0);\nsalaries.put("Jane", 60000.0);\nsalaries.put("Jim", 55000.0);\n\nDouble janeSalary = salaries.get("Jane");\nSystem.out.println("Jane\'s salary: $" + janeSalary);\n\nDouble unknown = salaries.get("Unknown");\nSystem.out.println("Unknown: " + unknown); // null',
    hint: "get() returns null if key not found",
  },
  {
    id: "collection_25",
    topicId: "collection",
    question: "Check if key or value exists in HashMap.",
    mathSolution: "containsKey() and containsValue()",
    codeSolution:
      'HashMap<String, String> capitals = new HashMap<>();\ncapitals.put("USA", "Washington DC");\ncapitals.put("India", "New Delhi");\ncapitals.put("UK", "London");\ncapitals.put("France", "Paris");\n\nSystem.out.println("Contains key \'India\'? " + capitals.containsKey("India"));\nSystem.out.println("Contains key \'Germany\'? " + capitals.containsKey("Germany"));\n\nSystem.out.println("Contains value \'London\'? " + capitals.containsValue("London"));\nSystem.out.println("Contains value \'Berlin\'? " + capitals.containsValue("Berlin"));',
    hint: "containsKey and containsValue methods",
  },
  {
    id: "collection_26",
    topicId: "collection",
    question: "Remove entry from HashMap.",
    mathSolution: "remove() by key",
    codeSolution:
      'HashMap<Integer, String> students = new HashMap<>();\nstudents.put(101, "Alice");\nstudents.put(102, "Bob");\nstudents.put(103, "Charlie");\nSystem.out.println("Before: " + students);\n\nString removed = students.remove(102);\nSystem.out.println("Removed: " + removed);\nSystem.out.println("After: " + students);\n\n// Remove only if key maps to specific value\nboolean removedPair = students.remove(103, "Charlie");\nSystem.out.println("Removed pair? " + removedPair);\nSystem.out.println("Final: " + students);',
    hint: "remove returns previous value",
  },
  {
    id: "collection_27",
    topicId: "collection",
    question: "Iterate through HashMap (keys, values, entries).",
    mathSolution: "Different iteration methods",
    codeSolution:
      'HashMap<String, Integer> ages = new HashMap<>();\nages.put("Alice", 25);\nages.put("Bob", 30);\nages.put("Charlie", 28);\n\n// Iterate through keys\nSystem.out.println("Keys: ");\nfor(String key : ages.keySet()) {\n    System.out.print(key + " ");\n}\n\n// Iterate through values\nSystem.out.println("\\nValues: ");\nfor(int value : ages.values()) {\n    System.out.print(value + " ");\n}\n\n// Iterate through entries\nSystem.out.println("\\nEntries: ");\nfor(Map.Entry<String, Integer> entry : ages.entrySet()) {\n    System.out.println(entry.getKey() + " -> " + entry.getValue());\n}\n\n// Java 8 forEach\nages.forEach((k,v) -> System.out.println(k + " is " + v));',
    hint: "keySet(), values(), entrySet()",
  },
  {
    id: "collection_28",
    topicId: "collection",
    question: "Get default value if key not present.",
    mathSolution: "getOrDefault() method",
    codeSolution:
      'HashMap<String, Integer> scores = new HashMap<>();\nscores.put("Alice", 95);\nscores.put("Bob", 87);\n\nint aliceScore = scores.getOrDefault("Alice", 0);\nSystem.out.println("Alice: " + aliceScore);\n\nint charlieScore = scores.getOrDefault("Charlie", 0);\nSystem.out.println("Charlie: " + charlieScore);\n\n// Without getOrDefault would get null and may cause issues',
    hint: "getOrDefault avoids null checks",
  },
  {
    id: "collection_29",
    topicId: "collection",
    question: "Merge two HashMaps.",
    mathSolution: "putAll() or merge()",
    codeSolution:
      'HashMap<String, Integer> map1 = new HashMap<>();\nmap1.put("A", 1);\nmap1.put("B", 2);\n\nHashMap<String, Integer> map2 = new HashMap<>();\nmap2.put("B", 3);\nmap2.put("C", 4);\n\n// Using putAll (overwrites)\nHashMap<String, Integer> merged = new HashMap<>(map1);\nmerged.putAll(map2);\nSystem.out.println("Merged with putAll: " + merged);\n\n// Using merge with custom logic\nHashMap<String, Integer> merged2 = new HashMap<>(map1);\nmap2.forEach((k, v) -> merged2.merge(k, v, (v1, v2) -> v1 + v2));\nSystem.out.println("Merged with addition: " + merged2);',
    hint: "merge with remapping function",
  },

  // TREEMAP (4)
  {
    id: "collection_30",
    topicId: "collection",
    question: "Create TreeMap (sorted by keys).",
    mathSolution: "TreeMap maintains key sorted order",
    codeSolution:
      'TreeMap<String, Integer> treeMap = new TreeMap<>();\ntreeMap.put("Banana", 2);\ntreeMap.put("Apple", 5);\ntreeMap.put("Date", 3);\ntreeMap.put("Cherry", 7);\nSystem.out.println("TreeMap (sorted by keys): " + treeMap);\n\nTreeMap<Integer, String> numbers = new TreeMap<>();\nnumbers.put(50, "Fifty");\nnumbers.put(10, "Ten");\nnumbers.put(30, "Thirty");\nnumbers.put(20, "Twenty");\nSystem.out.println("Integer keys sorted: " + numbers);',
    hint: "Keys are automatically sorted",
  },
  {
    id: "collection_31",
    topicId: "collection",
    question: "Get first and last entries in TreeMap.",
    mathSolution: "firstEntry() and lastEntry()",
    codeSolution:
      'TreeMap<String, Integer> map = new TreeMap<>();\nmap.put("John", 25);\nmap.put("Alice", 30);\nmap.put("Bob", 28);\nmap.put("Zack", 22);\nmap.put("Charlie", 35);\nSystem.out.println("TreeMap: " + map);\n\nSystem.out.println("First entry: " + map.firstEntry());\nSystem.out.println("Last entry: " + map.lastEntry());\nSystem.out.println("First key: " + map.firstKey());\nSystem.out.println("Last key: " + map.lastKey());',
    hint: "firstEntry gets smallest key",
  },
  {
    id: "collection_32",
    topicId: "collection",
    question: "Get submap from TreeMap.",
    mathSolution: "subMap() method",
    codeSolution:
      'TreeMap<Integer, String> map = new TreeMap<>();\nmap.put(10, "Ten");\nmap.put(20, "Twenty");\nmap.put(30, "Thirty");\nmap.put(40, "Forty");\nmap.put(50, "Fifty");\nmap.put(60, "Sixty");\n\n// From key 20 (inclusive) to 50 (exclusive)\nSortedMap<Integer, String> sub = map.subMap(20, 50);\nSystem.out.println("Submap (20 to 49): " + sub);\n\n// From start to 40\nSortedMap<Integer, String> head = map.headMap(40);\nSystem.out.println("HeadMap ( <40): " + head);\n\n// From 40 to end\nSortedMap<Integer, String> tail = map.tailMap(40);\nSystem.out.println("TailMap (>=40): " + tail);',
    hint: "subMap, headMap, tailMap",
  },
  {
    id: "collection_33",
    topicId: "collection",
    question: "Get ceiling and floor entries in TreeMap.",
    mathSolution: "ceilingEntry(), floorEntry(), higherEntry(), lowerEntry()",
    codeSolution:
      'TreeMap<Integer, String> map = new TreeMap<>();\nmap.put(10, "A");\nmap.put(20, "B");\nmap.put(30, "C");\nmap.put(40, "D");\nmap.put(50, "E");\n\nSystem.out.println("Ceiling entry for 25: " + map.ceilingEntry(25)); // 30\nSystem.out.println("Floor entry for 25: " + map.floorEntry(25));     // 20\nSystem.out.println("Higher entry than 30: " + map.higherEntry(30));   // 40\nSystem.out.println("Lower entry than 30: " + map.lowerEntry(30));     // 20\n\nSystem.out.println("Ceiling key for 55: " + map.ceilingKey(55)); // null',
    hint: "Navigation methods in TreeMap",
  },

  // LINKEDHASHMAP (2)
  {
    id: "collection_34",
    topicId: "collection",
    question: "Create LinkedHashMap (maintains insertion order).",
    mathSolution: "LinkedHashMap preserves insertion order",
    codeSolution:
      'LinkedHashMap<String, Integer> map = new LinkedHashMap<>();\nmap.put("First", 1);\nmap.put("Second", 2);\nmap.put("Third", 3);\nmap.put("Fourth", 4);\n\nSystem.out.println("LinkedHashMap (insertion order): " + map);\n\n// Compare with HashMap\nHashMap<String, Integer> hashMap = new HashMap<>();\nhashMap.put("First", 1);\nhashMap.put("Second", 2);\nhashMap.put("Third", 3);\nhashMap.put("Fourth", 4);\nSystem.out.println("HashMap (no order): " + hashMap);',
    hint: "Maintains order of insertion",
  },
  {
    id: "collection_35",
    topicId: "collection",
    question: "Create LRU Cache using LinkedHashMap.",
    mathSolution: "LinkedHashMap with access order",
    codeSolution:
      'class LRUCache<K, V> extends LinkedHashMap<K, V> {\n    private int capacity;\n    \n    public LRUCache(int capacity) {\n        super(capacity, 0.75f, true); // access order = true\n        this.capacity = capacity;\n    }\n    \n    @Override\n    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {\n        return size() > capacity;\n    }\n}\n\nLRUCache<String, Integer> cache = new LRUCache<>(3);\ncache.put("A", 1);\ncache.put("B", 2);\ncache.put("C", 3);\nSystem.out.println("Cache: " + cache);\n\ncache.get("A"); // Access A, making it most recent\ncache.put("D", 4); // This will remove eldest (B)\nSystem.out.println("After adding D: " + cache);',
    hint: "accessOrder true for LRU behavior",
  },

  // LINKEDHASHSET (2)
  {
    id: "collection_36",
    topicId: "collection",
    question: "Create LinkedHashSet (maintains insertion order).",
    mathSolution: "LinkedHashSet preserves insertion order",
    codeSolution:
      'LinkedHashSet<String> set = new LinkedHashSet<>();\nset.add("Apple");\nset.add("Banana");\nset.add("Orange");\nset.add("Mango");\n\nSystem.out.println("LinkedHashSet (insertion order): " + set);\n\n// Compare with HashSet\nHashSet<String> hashSet = new HashSet<>();\nhashSet.add("Apple");\nhashSet.add("Banana");\nhashSet.add("Orange");\nhashSet.add("Mango");\nSystem.out.println("HashSet (no order): " + hashSet);',
    hint: "Maintains insertion order like List but no duplicates",
  },
  {
    id: "collection_37",
    topicId: "collection",
    question: "Remove duplicates while preserving order.",
    mathSolution: "Use LinkedHashSet to remove duplicates",
    codeSolution:
      'ArrayList<String> listWithDuplicates = new ArrayList<>(\n    Arrays.asList("A", "B", "A", "C", "D", "B", "E"));\nSystem.out.println("With duplicates: " + listWithDuplicates);\n\n// Remove duplicates but preserve first occurrence order\nLinkedHashSet<String> set = new LinkedHashSet<>(listWithDuplicates);\nArrayList<String> uniqueList = new ArrayList<>(set);\nSystem.out.println("Without duplicates: " + uniqueList);\n\n// HashSet would lose order\nHashSet<String> hashSet = new HashSet<>(listWithDuplicates);\nSystem.out.println("HashSet (order lost): " + hashSet);',
    hint: "Perfect for removing duplicates while keeping order",
  },

  // PRIORITYQUEUE (4)
  {
    id: "collection_38",
    topicId: "collection",
    question: "Create PriorityQueue (min heap by default).",
    mathSolution: "PriorityQueue implements min heap",
    codeSolution:
      'PriorityQueue<Integer> pq = new PriorityQueue<>();\npq.add(30);\npq.add(10);\npq.add(50);\npq.add(20);\npq.add(40);\n\nSystem.out.println("PriorityQueue (min heap): " + pq);\nSystem.out.println("Peek (smallest): " + pq.peek());\n\n// Removing elements (always smallest first)\nwhile(!pq.isEmpty()) {\n    System.out.print(pq.poll() + " ");\n}',
    hint: "peek() gets smallest, poll() removes smallest",
  },
  {
    id: "collection_39",
    topicId: "collection",
    question: "Create PriorityQueue as max heap.",
    mathSolution: "Use Comparator.reverseOrder()",
    codeSolution:
      'PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());\nmaxHeap.add(30);\nmaxHeap.add(10);\nmaxHeap.add(50);\nmaxHeap.add(20);\nmaxHeap.add(40);\n\nSystem.out.println("Max Heap: " + maxHeap);\nSystem.out.println("Peek (largest): " + maxHeap.peek());\n\n// Removing elements (always largest first)\nwhile(!maxHeap.isEmpty()) {\n    System.out.print(maxHeap.poll() + " ");\n}',
    hint: "Comparator.reverseOrder() for max heap",
  },
  {
    id: "collection_40",
    topicId: "collection",
    question: "PriorityQueue with custom objects.",
    mathSolution: "Implement Comparator for custom ordering",
    codeSolution:
      'class Task {\n    String name; int priority;\n    Task(String n, int p) { name = n; priority = p; }\n    public String toString() { return name + "(" + priority + ")"; }\n}\n\n// Higher priority first (higher number)\nPriorityQueue<Task> taskQueue = new PriorityQueue<>(\n    (t1, t2) -> t2.priority - t1.priority\n);\n\ntaskQueue.add(new Task("Low", 1));\ntaskQueue.add(new Task("High", 5));\ntaskQueue.add(new Task("Medium", 3));\ntaskQueue.add(new Task("Critical", 10));\n\nSystem.out.println("Tasks by priority:");\nwhile(!taskQueue.isEmpty()) {\n    System.out.println(taskQueue.poll());\n}',
    hint: "Custom comparator for sorting",
  },
  {
    id: "collection_41",
    topicId: "collection",
    question: "Use PriorityQueue as min heap for k largest elements.",
    mathSolution: "Maintain heap of size k",
    codeSolution:
      'int[] nums = {3, 5, 1, 7, 8, 2, 9, 4, 6};\nint k = 3;\n\n// Find k largest elements\nPriorityQueue<Integer> minHeap = new PriorityQueue<>();\nfor(int num : nums) {\n    minHeap.add(num);\n    if(minHeap.size() > k) {\n        minHeap.poll(); // remove smallest\n    }\n}\n\nSystem.out.println(k + " largest elements: " + minHeap);\n\n// Find k smallest elements\nPriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());\nfor(int num : nums) {\n    maxHeap.add(num);\n    if(maxHeap.size() > k) {\n        maxHeap.poll(); // remove largest\n    }\n}\nSystem.out.println(k + " smallest elements: " + maxHeap);',
    hint: "Min heap for largest, max heap for smallest",
  },

  // ARRAYDEQUE (3)
  {
    id: "collection_42",
    topicId: "collection",
    question: "Create ArrayDeque and use as double-ended queue.",
    mathSolution: "ArrayDeque for efficient queue/stack",
    codeSolution:
      'ArrayDeque<String> deque = new ArrayDeque<>();\n// Add at both ends\ndeque.addFirst("First");\ndeque.addLast("Last");\ndeque.addFirst("New First");\ndeque.addLast("New Last");\n\nSystem.out.println("Deque: " + deque);\nSystem.out.println("First: " + deque.getFirst());\nSystem.out.println("Last: " + deque.getLast());\n\n// Remove from both ends\nSystem.out.println("Removed first: " + deque.removeFirst());\nSystem.out.println("Removed last: " + deque.removeLast());\nSystem.out.println("After removal: " + deque);',
    hint: "addFirst/Last, removeFirst/Last",
  },
  {
    id: "collection_43",
    topicId: "collection",
    question: "Use ArrayDeque as Stack.",
    mathSolution: "ArrayDeque faster than Stack class",
    codeSolution:
      'ArrayDeque<String> stack = new ArrayDeque<>();\n// Push elements\nstack.push("Bottom");\nstack.push("Middle");\nstack.push("Top");\n\nSystem.out.println("Stack: " + stack);\nSystem.out.println("Peek: " + stack.peek());\n\n// Pop elements\nwhile(!stack.isEmpty()) {\n    System.out.println("Popped: " + stack.pop());\n}',
    hint: "push(), pop(), peek() methods",
  },
  {
    id: "collection_44",
    topicId: "collection",
    question: "Use ArrayDeque as Queue.",
    mathSolution: "ArrayDeque as queue (FIFO)",
    codeSolution:
      'ArrayDeque<String> queue = new ArrayDeque<>();\n// Offer elements (add to end)\nqueue.offer("First");\nqueue.offer("Second");\nqueue.offer("Third");\n\nSystem.out.println("Queue: " + queue);\nSystem.out.println("Peek front: " + queue.peek());\n\n// Poll elements (remove from front)\nwhile(!queue.isEmpty()) {\n    System.out.println("Processed: " + queue.poll());\n}',
    hint: "offer(), poll(), peek() methods",
  },

  // COLLECTIONS UTILITY CLASS (5)
  {
    id: "collection_45",
    topicId: "collection",
    question: "Sort List in reverse order using Collections.",
    mathSolution: "Collections.sort() with reverseOrder()",
    codeSolution:
      'List<Integer> numbers = new ArrayList<>(Arrays.asList(5, 2, 8, 1, 9, 3));\nSystem.out.println("Original: " + numbers);\n\nCollections.sort(numbers);\nSystem.out.println("Ascending: " + numbers);\n\nCollections.sort(numbers, Collections.reverseOrder());\nSystem.out.println("Descending: " + numbers);\n\n// Sort strings\nList<String> names = Arrays.asList("John", "Alice", "Bob", "Charlie");\nCollections.sort(names);\nSystem.out.println("Sorted names: " + names);',
    hint: "Collections.sort() with Comparator",
  },
  {
    id: "collection_46",
    topicId: "collection",
    question: "Shuffle elements in List.",
    mathSolution: "Collections.shuffle()",
    codeSolution:
      'List<Integer> list = new ArrayList<>();\nfor(int i=1; i<=10; i++) list.add(i);\nSystem.out.println("Ordered: " + list);\n\nCollections.shuffle(list);\nSystem.out.println("Shuffled: " + list);\n\nCollections.shuffle(list);\nSystem.out.println("Shuffled again: " + list);\n\n// Works with any List\nList<String> cards = Arrays.asList("Ace", "King", "Queen", "Jack", "10");\nCollections.shuffle(cards);\nSystem.out.println("Shuffled cards: " + cards);',
    hint: "Randomly permutes the list",
  },
  {
    id: "collection_47",
    topicId: "collection",
    question: "Find frequency and disjoint using Collections.",
    mathSolution: "frequency() and disjoint() methods",
    codeSolution:
      'List<Integer> list = Arrays.asList(1,2,3,4,2,5,2,6,7,2);\nint freq = Collections.frequency(list, 2);\nSystem.out.println("Frequency of 2: " + freq);\n\nList<Integer> list1 = Arrays.asList(1,2,3,4,5);\nList<Integer> list2 = Arrays.asList(6,7,8,9,10);\nList<Integer> list3 = Arrays.asList(4,5,6,7,8);\n\nboolean disjoint1 = Collections.disjoint(list1, list2);\nSystem.out.println("list1 and list2 disjoint? " + disjoint1);\n\nboolean disjoint2 = Collections.disjoint(list1, list3);\nSystem.out.println("list1 and list3 disjoint? " + disjoint2);',
    hint: "disjoint() checks if no common elements",
  },
  {
    id: "collection_48",
    topicId: "collection",
    question: "Create synchronized and unmodifiable collections.",
    mathSolution: "Collections utility methods",
    codeSolution:
      'List<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));\n\n// Make thread-safe\nList<String> syncList = Collections.synchronizedList(list);\nSystem.out.println("Synchronized list: " + syncList);\n\n// Make unmodifiable (read-only)\nList<String> unmodList = Collections.unmodifiableList(list);\nSystem.out.println("Unmodifiable list: " + unmodList);\n\n// This would throw UnsupportedOperationException\n// unmodList.add("D");\n\n// Same for Set and Map\nSet<Integer> set = new HashSet<>(Arrays.asList(1,2,3));\nSet<Integer> unmodSet = Collections.unmodifiableSet(set);\nSystem.out.println("Unmodifiable set: " + unmodSet);',
    hint: "synchronized and unmodifiable wrappers",
  },
  {
    id: "collection_49",
    topicId: "collection",
    question: "Fill, copy, and reverse using Collections.",
    mathSolution: "fill(), copy(), reverse() methods",
    codeSolution:
      'List<String> list = new ArrayList<>(Arrays.asList("A", "B", "C", "D"));\nSystem.out.println("Original: " + list);\n\n// Reverse\nCollections.reverse(list);\nSystem.out.println("Reversed: " + list);\n\n// Fill\nCollections.fill(list, "X");\nSystem.out.println("After fill: " + list);\n\n// Copy\nList<String> dest = new ArrayList<>(Arrays.asList("", "", "", ""));\nList<String> src = Arrays.asList("1", "2", "3", "4");\nCollections.copy(dest, src);\nSystem.out.println("Destination after copy: " + dest);\n\n// Replace all\nCollections.replaceAll(list, "X", "Z");\nSystem.out.println("After replaceAll: " + list);',
    hint: "Utility methods for common operations",
  },

  // COMPARATOR AND COMPARABLE (1)
  {
    id: "collection_50",
    topicId: "collection",
    question: "Sort custom objects using Comparable and Comparator.",
    mathSolution: "Implement Comparable or use Comparator",
    codeSolution:
      'class Person implements Comparable<Person> {\n    String name; int age;\n    Person(String n, int a) { name = n; age = a; }\n    public String toString() { return name + "(" + age + ")"; }\n    \n    // Natural ordering by age\n    public int compareTo(Person p) { return this.age - p.age; }\n}\n\nList<Person> people = new ArrayList<>();\npeople.add(new Person("Alice", 30));\npeople.add(new Person("Bob", 25));\npeople.add(new Person("Charlie", 35));\npeople.add(new Person("David", 28));\n\n// Sort using Comparable (by age)\nCollections.sort(people);\nSystem.out.println("By age (natural): " + people);\n\n// Sort using Comparator (by name)\nCollections.sort(people, Comparator.comparing(p -> p.name));\nSystem.out.println("By name: " + people);\n\n// Sort using Comparator (by age descending)\nCollections.sort(people, (p1, p2) -> p2.age - p1.age);\nSystem.out.println("By age desc: " + people);\n\n// Multiple comparators\nCollections.sort(people, Comparator.comparing(Person::getName).thenComparing(Person::getAge));',
    hint: "Comparable for natural order, Comparator for custom",
  },
);
