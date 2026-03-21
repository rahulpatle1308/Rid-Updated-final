QuizData.questions.push(
  // ==================== ARRAYS (15 questions) ====================
  {
    id: "dsa_1",
    topicId: "java_dsa",
    question: "Find the largest element in an array.",
    mathSolution: "Traverse array keeping track of maximum",
    codeSolution:
      'int[] arr = {3, 7, 2, 9, 5};\nint max = arr[0];\nfor(int i=1; i<arr.length; i++) {\n    if(arr[i] > max) max = arr[i];\n}\nSystem.out.println("Largest: " + max);',
    hint: "Initialize max with first element",
  },
  {
    id: "dsa_2",
    topicId: "java_dsa",
    question: "Find the smallest element in an array.",
    mathSolution: "Traverse array keeping track of minimum",
    codeSolution:
      'int[] arr = {3, 7, 2, 9, 5};\nint min = arr[0];\nfor(int i=1; i<arr.length; i++) {\n    if(arr[i] < min) min = arr[i];\n}\nSystem.out.println("Smallest: " + min);',
    hint: "Initialize min with first element",
  },
  {
    id: "dsa_3",
    topicId: "java_dsa",
    question: "Calculate sum of all elements in array.",
    mathSolution: "Add each element to running total",
    codeSolution:
      'int[] arr = {1, 2, 3, 4, 5};\nint sum = 0;\nfor(int num : arr) {\n    sum += num;\n}\nSystem.out.println("Sum: " + sum);',
    hint: "Use enhanced for loop",
  },
  {
    id: "dsa_4",
    topicId: "java_dsa",
    question: "Calculate average of array elements.",
    mathSolution: "Sum divided by length",
    codeSolution:
      'int[] arr = {10, 20, 30, 40, 50};\nint sum = 0;\nfor(int num : arr) sum += num;\ndouble avg = (double)sum / arr.length;\nSystem.out.println("Average: " + avg);',
    hint: "Cast to double for decimal result",
  },
  {
    id: "dsa_5",
    topicId: "java_dsa",
    question: "Reverse an array in-place.",
    mathSolution: "Swap first with last, second with second-last, etc.",
    codeSolution:
      'int[] arr = {1, 2, 3, 4, 5};\nint left = 0, right = arr.length-1;\nwhile(left < right) {\n    int temp = arr[left];\n    arr[left] = arr[right];\n    arr[right] = temp;\n    left++; right--;\n}\nSystem.out.println("Reversed: " + Arrays.toString(arr));',
    hint: "Two-pointer approach",
  },
  {
    id: "dsa_6",
    topicId: "java_dsa",
    question: "Check if array is sorted in ascending order.",
    mathSolution: "Compare each element with next",
    codeSolution:
      'int[] arr = {1, 2, 3, 4, 5};\nboolean sorted = true;\nfor(int i=0; i<arr.length-1; i++) {\n    if(arr[i] > arr[i+1]) {\n        sorted = false;\n        break;\n    }\n}\nSystem.out.println("Is sorted: " + sorted);',
    hint: "If any element > next, not sorted",
  },
  {
    id: "dsa_7",
    topicId: "java_dsa",
    question: "Find second largest element in array.",
    mathSolution: "Track largest and second largest",
    codeSolution:
      'int[] arr = {12, 35, 1, 10, 34, 1};\nint first = Integer.MIN_VALUE;\nint second = Integer.MIN_VALUE;\nfor(int num : arr) {\n    if(num > first) {\n        second = first;\n        first = num;\n    } else if(num > second && num != first) {\n        second = num;\n    }\n}\nSystem.out.println("Second largest: " + second);',
    hint: "Initialize with minimum values",
  },
  {
    id: "dsa_8",
    topicId: "java_dsa",
    question: "Remove duplicates from sorted array.",
    mathSolution: "Use two-pointer technique",
    codeSolution:
      'int[] arr = {1, 1, 2, 2, 2, 3, 4, 4, 5};\nint j = 0;\nfor(int i=0; i<arr.length; i++) {\n    if(i==0 || arr[i] != arr[i-1]) {\n        arr[j++] = arr[i];\n    }\n}\nSystem.out.println("Unique count: " + j);\nSystem.out.println("Array: " + Arrays.toString(Arrays.copyOf(arr, j)));',
    hint: "j tracks position for unique elements",
  },
  {
    id: "dsa_9",
    topicId: "java_dsa",
    question: "Rotate array left by one position.",
    mathSolution: "Store first, shift left, place first at end",
    codeSolution:
      'int[] arr = {1, 2, 3, 4, 5};\nint first = arr[0];\nfor(int i=0; i<arr.length-1; i++) {\n    arr[i] = arr[i+1];\n}\narr[arr.length-1] = first;\nSystem.out.println("Left rotated: " + Arrays.toString(arr));',
    hint: "Shift elements left",
  },
  {
    id: "dsa_10",
    topicId: "java_dsa",
    question: "Rotate array right by one position.",
    mathSolution: "Store last, shift right, place last at front",
    codeSolution:
      'int[] arr = {1, 2, 3, 4, 5};\nint last = arr[arr.length-1];\nfor(int i=arr.length-1; i>0; i--) {\n    arr[i] = arr[i-1];\n}\narr[0] = last;\nSystem.out.println("Right rotated: " + Arrays.toString(arr));',
    hint: "Shift from end",
  },
  {
    id: "dsa_11",
    topicId: "java_dsa",
    question: "Find missing number in array of 1 to n.",
    mathSolution: "Sum of n numbers minus array sum",
    codeSolution:
      'int[] arr = {1, 2, 4, 5, 6};\nint n = arr.length + 1;\nint expectedSum = n * (n + 1) / 2;\nint actualSum = 0;\nfor(int num : arr) actualSum += num;\nint missing = expectedSum - actualSum;\nSystem.out.println("Missing number: " + missing);',
    hint: "Use formula n*(n+1)/2",
  },
  {
    id: "dsa_12",
    topicId: "java_dsa",
    question: "Find duplicate in array (one duplicate).",
    mathSolution: "XOR all elements with 1..n",
    codeSolution:
      'int[] arr = {1, 3, 4, 2, 2};\nint xor = 0;\nfor(int num : arr) xor ^= num;\nfor(int i=1; i<=arr.length-1; i++) xor ^= i;\nSystem.out.println("Duplicate: " + xor);',
    hint: "a ^ a = 0, a ^ 0 = a",
  },
  {
    id: "dsa_13",
    topicId: "java_dsa",
    question: "Move all zeros to end of array.",
    mathSolution: "Shift non-zero elements left, fill remaining with zeros",
    codeSolution:
      'int[] arr = {0, 1, 0, 3, 12};\nint index = 0;\nfor(int num : arr) {\n    if(num != 0) arr[index++] = num;\n}\nwhile(index < arr.length) arr[index++] = 0;\nSystem.out.println("After moving zeros: " + Arrays.toString(arr));',
    hint: "First move non-zeros, then fill zeros",
  },
  {
    id: "dsa_14",
    topicId: "java_dsa",
    question: "Find intersection of two sorted arrays.",
    mathSolution: "Use two pointers to find common elements",
    codeSolution:
      'int[] arr1 = {1, 2, 4, 5, 6};\nint[] arr2 = {2, 3, 5, 7};\nList<Integer> result = new ArrayList<>();\nint i=0, j=0;\nwhile(i<arr1.length && j<arr2.length) {\n    if(arr1[i] == arr2[j]) {\n        result.add(arr1[i]);\n        i++; j++;\n    } else if(arr1[i] < arr2[j]) i++;\n    else j++;\n}\nSystem.out.println("Intersection: " + result);',
    hint: "Advance pointer of smaller element",
  },
  {
    id: "dsa_15",
    topicId: "java_dsa",
    question: "Find union of two sorted arrays.",
    mathSolution: "Merge arrays without duplicates",
    codeSolution:
      'int[] arr1 = {1, 2, 4, 5, 6};\nint[] arr2 = {2, 3, 5, 7};\nList<Integer> result = new ArrayList<>();\nint i=0, j=0;\nwhile(i<arr1.length && j<arr2.length) {\n    if(arr1[i] < arr2[j]) result.add(arr1[i++]);\n    else if(arr1[i] > arr2[j]) result.add(arr2[j++]);\n    else { result.add(arr1[i]); i++; j++; }\n}\nwhile(i<arr1.length) result.add(arr1[i++]);\nwhile(j<arr2.length) result.add(arr2[j++]);\nSystem.out.println("Union: " + result);',
    hint: "Merge like in merge sort",
  },

  // ==================== STRINGS (15 questions) ====================
  {
    id: "dsa_16",
    topicId: "java_dsa",
    question: "Reverse a string.",
    mathSolution: "Swap characters from both ends",
    codeSolution:
      'String str = "hello";\nchar[] chars = str.toCharArray();\nint left = 0, right = chars.length-1;\nwhile(left < right) {\n    char temp = chars[left];\n    chars[left] = chars[right];\n    chars[right] = temp;\n    left++; right--;\n}\nString reversed = new String(chars);\nSystem.out.println("Reversed: " + reversed);',
    hint: "Convert to char array for manipulation",
  },
  {
    id: "dsa_17",
    topicId: "java_dsa",
    question: "Check if string is palindrome.",
    mathSolution: "Compare characters from start and end",
    codeSolution:
      'String str = "madam";\nboolean isPalindrome = true;\nfor(int i=0; i<str.length()/2; i++) {\n    if(str.charAt(i) != str.charAt(str.length()-1-i)) {\n        isPalindrome = false;\n        break;\n    }\n}\nSystem.out.println("Is palindrome: " + isPalindrome);',
    hint: "Compare i with length-1-i",
  },
  {
    id: "dsa_18",
    topicId: "java_dsa",
    question: "Count vowels and consonants in a string.",
    mathSolution: "Check each character for vowel/consonant",
    codeSolution:
      "String str = \"Hello World\";\nint vowels = 0, consonants = 0;\nstr = str.toLowerCase();\nfor(char c : str.toCharArray()) {\n    if(c >= 'a' && c <= 'z') {\n        if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u') vowels++;\n        else consonants++;\n    }\n}\nSystem.out.println(\"Vowels: \" + vowels + \", Consonants: \" + consonants);",
    hint: "Ignore non-alphabets",
  },
  {
    id: "dsa_19",
    topicId: "java_dsa",
    question: "Find frequency of each character in string.",
    mathSolution: "Use array of size 256 for ASCII",
    codeSolution:
      'String str = "hello world";\nint[] freq = new int[256];\nfor(char c : str.toCharArray()) {\n    freq[c]++;\n}\nfor(int i=0; i<256; i++) {\n    if(freq[i] > 0) {\n        System.out.println((char)i + ": " + freq[i]);\n    }\n}',
    hint: "Character as index",
  },
  {
    id: "dsa_20",
    topicId: "java_dsa",
    question: "Remove duplicates from string.",
    mathSolution: "Use boolean array to track seen characters",
    codeSolution:
      'String str = "programming";\nboolean[] seen = new boolean[256];\nStringBuilder sb = new StringBuilder();\nfor(char c : str.toCharArray()) {\n    if(!seen[c]) {\n        seen[c] = true;\n        sb.append(c);\n    }\n}\nSystem.out.println("After removing duplicates: " + sb);',
    hint: "Track seen characters",
  },
  {
    id: "dsa_21",
    topicId: "java_dsa",
    question: "Check if two strings are anagrams.",
    mathSolution: "Sort and compare or count characters",
    codeSolution:
      'String s1 = "listen";\nString s2 = "silent";\nchar[] arr1 = s1.toCharArray();\nchar[] arr2 = s2.toCharArray();\nArrays.sort(arr1);\nArrays.sort(arr2);\nboolean isAnagram = Arrays.equals(arr1, arr2);\nSystem.out.println("Are anagrams: " + isAnagram);',
    hint: "Sorted strings should be equal",
  },
  {
    id: "dsa_22",
    topicId: "java_dsa",
    question: "Find first non-repeating character in string.",
    mathSolution: "Count frequencies, then find first with count 1",
    codeSolution:
      'String str = "swiss";\nint[] freq = new int[256];\nfor(char c : str.toCharArray()) freq[c]++;\nchar result = 0;\nfor(char c : str.toCharArray()) {\n    if(freq[c] == 1) {\n        result = c;\n        break;\n    }\n}\nSystem.out.println("First non-repeating: " + result);',
    hint: "Two traversals",
  },
  {
    id: "dsa_23",
    topicId: "java_dsa",
    question: "Convert string to integer (atoi).",
    mathSolution: "Parse digit by digit",
    codeSolution:
      "String str = \"123\";\nint num = 0;\nfor(char c : str.toCharArray()) {\n    if(c < '0' || c > '9') break;\n    num = num * 10 + (c - '0');\n}\nSystem.out.println(\"Integer: \" + num);",
    hint: "c - '0' gives digit value",
  },
  {
    id: "dsa_24",
    topicId: "java_dsa",
    question: "Check if string contains only digits.",
    mathSolution: "Check each character between '0' and '9'",
    codeSolution:
      "String str = \"12345\";\nboolean isDigits = true;\nfor(char c : str.toCharArray()) {\n    if(c < '0' || c > '9') {\n        isDigits = false;\n        break;\n    }\n}\nSystem.out.println(\"Contains only digits: \" + isDigits);",
    hint: "ASCII range for digits",
  },
  {
    id: "dsa_25",
    topicId: "java_dsa",
    question: "Count words in a string.",
    mathSolution: "Split by spaces or count transitions",
    codeSolution:
      'String str = "Hello world from Java";\nString[] words = str.trim().split("\\\\s+");\nint count = words.length;\nSystem.out.println("Word count: " + count);',
    hint: "Use split with regex",
  },
  {
    id: "dsa_26",
    topicId: "java_dsa",
    question: "Capitalize first letter of each word.",
    mathSolution: "Split, capitalize first char, join",
    codeSolution:
      'String str = "hello world from java";\nString[] words = str.split(" ");\nStringBuilder result = new StringBuilder();\nfor(String word : words) {\n    if(word.length() > 0) {\n        result.append(Character.toUpperCase(word.charAt(0)))\n              .append(word.substring(1)).append(" ");\n    }\n}\nSystem.out.println("Capitalized: " + result.toString().trim());',
    hint: "Use Character.toUpperCase()",
  },
  {
    id: "dsa_27",
    topicId: "java_dsa",
    question: "Find longest word in a sentence.",
    mathSolution: "Split and track max length",
    codeSolution:
      'String str = "The quick brown fox jumps";\nString[] words = str.split(" ");\nString longest = "";\nfor(String word : words) {\n    if(word.length() > longest.length()) longest = word;\n}\nSystem.out.println("Longest word: " + longest);',
    hint: "Compare lengths",
  },
  {
    id: "dsa_28",
    topicId: "java_dsa",
    question: "Check if strings are rotations of each other.",
    mathSolution: "Concatenate one with itself and check contains",
    codeSolution:
      'String s1 = "waterbottle";\nString s2 = "erbottlewat";\nboolean isRotation = (s1.length() == s2.length()) && \n                     (s1 + s1).contains(s2);\nSystem.out.println("Is rotation: " + isRotation);',
    hint: "s1+s1 contains all rotations",
  },
  {
    id: "dsa_29",
    topicId: "java_dsa",
    question: "Remove all whitespaces from string.",
    mathSolution: "Replace or use StringBuilder",
    codeSolution:
      'String str = "Hello World Java";\nString result = str.replaceAll("\\\\s", "");\nSystem.out.println("Without spaces: " + result);\n\n// Without regex\nStringBuilder sb = new StringBuilder();\nfor(char c : str.toCharArray()) {\n    if(!Character.isWhitespace(c)) sb.append(c);\n}\nSystem.out.println("Without spaces: " + sb);',
    hint: "\\\\s matches whitespace",
  },
  {
    id: "dsa_30",
    topicId: "java_dsa",
    question: "Find all substrings of a string.",
    mathSolution: "Nested loops for start and end",
    codeSolution:
      'String str = "abc";\nList<String> substrings = new ArrayList<>();\nfor(int i=0; i<str.length(); i++) {\n    for(int j=i+1; j<=str.length(); j++) {\n        substrings.add(str.substring(i, j));\n    }\n}\nSystem.out.println("Substrings: " + substrings);',
    hint: "substring(i,j) includes i, excludes j",
  },

  // ==================== LINKED LISTS (10 questions) ====================
  {
    id: "dsa_31",
    topicId: "java_dsa",
    question: "Implement a singly linked list node.",
    mathSolution: "Node with data and next pointer",
    codeSolution:
      "class Node {\n    int data;\n    Node next;\n    Node(int data) { this.data = data; this.next = null; }\n}\n\nNode head = new Node(10);\nhead.next = new Node(20);\nhead.next.next = new Node(30);",
    hint: "Each node points to next node",
  },
  {
    id: "dsa_32",
    topicId: "java_dsa",
    question: "Traverse and print linked list.",
    mathSolution: "Start from head, move until null",
    codeSolution:
      'Node current = head;\nwhile(current != null) {\n    System.out.print(current.data + " -> ");\n    current = current.next;\n}\nSystem.out.println("null");',
    hint: "Stop when current becomes null",
  },
  {
    id: "dsa_33",
    topicId: "java_dsa",
    question: "Insert node at beginning of linked list.",
    mathSolution: "New node points to head, update head",
    codeSolution:
      "Node newNode = new Node(5);\nnewNode.next = head;\nhead = newNode;",
    hint: "Update head to new node",
  },
  {
    id: "dsa_34",
    topicId: "java_dsa",
    question: "Insert node at end of linked list.",
    mathSolution: "Traverse to last, update last's next",
    codeSolution:
      "Node newNode = new Node(40);\nif(head == null) head = newNode;\nelse {\n    Node temp = head;\n    while(temp.next != null) temp = temp.next;\n    temp.next = newNode;\n}",
    hint: "Find last node with temp.next == null",
  },
  {
    id: "dsa_35",
    topicId: "java_dsa",
    question: "Delete node from beginning.",
    mathSolution: "Move head to next node",
    codeSolution: "if(head != null) head = head.next;",
    hint: "head = head.next",
  },
  {
    id: "dsa_36",
    topicId: "java_dsa",
    question: "Delete node from end.",
    mathSolution: "Traverse to second last, set next to null",
    codeSolution:
      "if(head == null || head.next == null) head = null;\nelse {\n    Node temp = head;\n    while(temp.next.next != null) temp = temp.next;\n    temp.next = null;\n}",
    hint: "Stop at second last node",
  },
  {
    id: "dsa_37",
    topicId: "java_dsa",
    question: "Find length of linked list.",
    mathSolution: "Count nodes while traversing",
    codeSolution:
      'int count = 0;\nNode temp = head;\nwhile(temp != null) {\n    count++;\n    temp = temp.next;\n}\nSystem.out.println("Length: " + count);',
    hint: "Increment counter for each node",
  },
  {
    id: "dsa_38",
    topicId: "java_dsa",
    question: "Search for element in linked list.",
    mathSolution: "Traverse and compare data",
    codeSolution:
      'int key = 20;\nNode temp = head;\nboolean found = false;\nwhile(temp != null) {\n    if(temp.data == key) {\n        found = true;\n        break;\n    }\n    temp = temp.next;\n}\nSystem.out.println("Found: " + found);',
    hint: "Linear search",
  },
  {
    id: "dsa_39",
    topicId: "java_dsa",
    question: "Reverse a linked list.",
    mathSolution: "Change next pointers to reverse direction",
    codeSolution:
      "Node prev = null;\nNode current = head;\nNode next = null;\nwhile(current != null) {\n    next = current.next;\n    current.next = prev;\n    prev = current;\n    current = next;\n}\nhead = prev;",
    hint: "Three-pointer technique",
  },
  {
    id: "dsa_40",
    topicId: "java_dsa",
    question: "Find middle node of linked list.",
    mathSolution: "Slow and fast pointer technique",
    codeSolution:
      'Node slow = head;\nNode fast = head;\nwhile(fast != null && fast.next != null) {\n    slow = slow.next;\n    fast = fast.next.next;\n}\nSystem.out.println("Middle: " + slow.data);',
    hint: "Fast moves twice as fast as slow",
  },

  // ==================== STACKS (8 questions) ====================
  {
    id: "dsa_41",
    topicId: "java_dsa",
    question: "Implement stack using array.",
    mathSolution: "Array with top pointer",
    codeSolution:
      'class Stack {\n    int[] arr;\n    int top;\n    int capacity;\n    \n    Stack(int size) { \n        arr = new int[size]; \n        capacity = size; \n        top = -1; \n    }\n    \n    void push(int x) { \n        if(top < capacity-1) arr[++top] = x; \n        else System.out.println("Stack overflow");\n    }\n    \n    int pop() { \n        if(top >= 0) return arr[top--];\n        System.out.println("Stack underflow");\n        return -1;\n    }\n    \n    int peek() { \n        return top >= 0 ? arr[top] : -1; \n    }\n    \n    boolean isEmpty() { return top == -1; }\n}',
    hint: "top starts at -1",
  },
  {
    id: "dsa_42",
    topicId: "java_dsa",
    question: "Check balanced parentheses using stack.",
    mathSolution: "Push opening, pop on closing, check match",
    codeSolution:
      "String s = \"{[()]}\";\nStack<Character> stack = new Stack<>();\nboolean balanced = true;\nfor(char c : s.toCharArray()) {\n    if(c == '(' || c == '{' || c == '[') stack.push(c);\n    else {\n        if(stack.isEmpty()) { balanced = false; break; }\n        char top = stack.pop();\n        if((c == ')' && top != '(') ||\n           (c == '}' && top != '{') ||\n           (c == ']' && top != '[')) {\n            balanced = false;\n            break;\n        }\n    }\n}\nbalanced = balanced && stack.isEmpty();\nSystem.out.println(\"Balanced: \" + balanced);",
    hint: "Match closing with correct opening",
  },
  {
    id: "dsa_43",
    topicId: "java_dsa",
    question: "Implement stack using LinkedList.",
    mathSolution: "Linked list with head as top",
    codeSolution:
      "class StackNode {\n    int data;\n    StackNode next;\n    StackNode(int data) { this.data = data; }\n}\n\nclass LinkedListStack {\n    StackNode top;\n    \n    void push(int x) {\n        StackNode node = new StackNode(x);\n        node.next = top;\n        top = node;\n    }\n    \n    int pop() {\n        if(top == null) return -1;\n        int data = top.data;\n        top = top.next;\n        return data;\n    }\n    \n    int peek() { return top != null ? top.data : -1; }\n    \n    boolean isEmpty() { return top == null; }\n}",
    hint: "Push and pop at head",
  },
  {
    id: "dsa_44",
    topicId: "java_dsa",
    question: "Evaluate postfix expression using stack.",
    mathSolution: "Push operands, pop two for operator",
    codeSolution:
      "String expr = \"23*54*+9-\"; // (2*3 + 5*4 - 9)\nStack<Integer> stack = new Stack<>();\nfor(char c : expr.toCharArray()) {\n    if(Character.isDigit(c)) stack.push(c - '0');\n    else {\n        int b = stack.pop();\n        int a = stack.pop();\n        switch(c) {\n            case '+': stack.push(a + b); break;\n            case '-': stack.push(a - b); break;\n            case '*': stack.push(a * b); break;\n            case '/': stack.push(a / b); break;\n        }\n    }\n}\nSystem.out.println(\"Result: \" + stack.pop());",
    hint: "Operand order matters for - and /",
  },
  {
    id: "dsa_45",
    topicId: "java_dsa",
    question: "Convert infix to postfix expression.",
    mathSolution: "Use operator precedence and stack",
    codeSolution:
      "String infix = \"a+b*c-d/e\";\nStringBuilder postfix = new StringBuilder();\nStack<Character> stack = new Stack<>();\nMap<Character, Integer> precedence = new HashMap<>();\nprecedence.put('+', 1); precedence.put('-', 1);\nprecedence.put('*', 2); precedence.put('/', 2);\n\nfor(char c : infix.toCharArray()) {\n    if(Character.isLetterOrDigit(c)) postfix.append(c);\n    else if(c == '(') stack.push(c);\n    else if(c == ')') {\n        while(!stack.isEmpty() && stack.peek() != '(')\n            postfix.append(stack.pop());\n        stack.pop(); // remove '('\n    } else { // operator\n        while(!stack.isEmpty() && stack.peek() != '(' && \n              precedence.getOrDefault(stack.peek(), 0) >= precedence.get(c))\n            postfix.append(stack.pop());\n        stack.push(c);\n    }\n}\nwhile(!stack.isEmpty()) postfix.append(stack.pop());\nSystem.out.println(\"Postfix: \" + postfix);",
    hint: "Higher precedence operators come first",
  },
  {
    id: "dsa_46",
    topicId: "java_dsa",
    question: "Find next greater element using stack.",
    mathSolution: "Monotonic decreasing stack",
    codeSolution:
      'int[] arr = {4, 5, 2, 25};\nint[] result = new int[arr.length];\nStack<Integer> stack = new Stack<>();\nfor(int i=arr.length-1; i>=0; i--) {\n    while(!stack.isEmpty() && stack.peek() <= arr[i]) stack.pop();\n    result[i] = stack.isEmpty() ? -1 : stack.peek();\n    stack.push(arr[i]);\n}\nSystem.out.println("Next greater: " + Arrays.toString(result));',
    hint: "Traverse from right",
  },
  {
    id: "dsa_47",
    topicId: "java_dsa",
    question: "Sort a stack using recursion.",
    mathSolution: "Use recursion and temporary stack",
    codeSolution:
      'void sortStack(Stack<Integer> stack) {\n    if(!stack.isEmpty()) {\n        int temp = stack.pop();\n        sortStack(stack);\n        insertSorted(stack, temp);\n    }\n}\n\nvoid insertSorted(Stack<Integer> stack, int x) {\n    if(stack.isEmpty() || x > stack.peek()) stack.push(x);\n    else {\n        int temp = stack.pop();\n        insertSorted(stack, x);\n        stack.push(temp);\n    }\n}\n\nStack<Integer> stack = new Stack<>();\nstack.push(30); stack.push(10); stack.push(50); stack.push(20);\nsortStack(stack);\nSystem.out.println("Sorted: " + stack);',
    hint: "Insert in sorted order",
  },
  {
    id: "dsa_48",
    topicId: "java_dsa",
    question: "Implement two stacks in one array.",
    mathSolution: "One from left, one from right",
    codeSolution:
      "class TwoStacks {\n    int[] arr;\n    int top1, top2;\n    int size;\n    \n    TwoStacks(int n) {\n        size = n;\n        arr = new int[n];\n        top1 = -1;\n        top2 = size;\n    }\n    \n    void push1(int x) {\n        if(top1 < top2 - 1) arr[++top1] = x;\n    }\n    \n    void push2(int x) {\n        if(top1 < top2 - 1) arr[--top2] = x;\n    }\n    \n    int pop1() { return top1 >= 0 ? arr[top1--] : -1; }\n    int pop2() { return top2 < size ? arr[top2++] : -1; }\n}",
    hint: "Stacks grow towards each other",
  },

  // ==================== QUEUES (7 questions) ====================
  {
    id: "dsa_49",
    topicId: "java_dsa",
    question: "Implement queue using array.",
    mathSolution: "Circular array with front and rear",
    codeSolution:
      "class Queue {\n    int[] arr;\n    int front, rear, size, capacity;\n    \n    Queue(int cap) {\n        capacity = cap;\n        arr = new int[capacity];\n        front = 0;\n        size = 0;\n        rear = capacity - 1;\n    }\n    \n    void enqueue(int x) {\n        if(size == capacity) return;\n        rear = (rear + 1) % capacity;\n        arr[rear] = x;\n        size++;\n    }\n    \n    int dequeue() {\n        if(size == 0) return -1;\n        int item = arr[front];\n        front = (front + 1) % capacity;\n        size--;\n        return item;\n    }\n    \n    int front() { return size == 0 ? -1 : arr[front]; }\n    int rear() { return size == 0 ? -1 : arr[rear]; }\n    boolean isEmpty() { return size == 0; }\n}",
    hint: "Use modulo for circular",
  },
  {
    id: "dsa_50",
    topicId: "java_dsa",
    question: "Implement queue using LinkedList.",
    mathSolution: "Linked list with front and rear pointers",
    codeSolution:
      "class QueueNode {\n    int data;\n    QueueNode next;\n    QueueNode(int data) { this.data = data; }\n}\n\nclass LinkedListQueue {\n    QueueNode front, rear;\n    \n    void enqueue(int x) {\n        QueueNode node = new QueueNode(x);\n        if(rear == null) front = rear = node;\n        else {\n            rear.next = node;\n            rear = node;\n        }\n    }\n    \n    int dequeue() {\n        if(front == null) return -1;\n        int data = front.data;\n        front = front.next;\n        if(front == null) rear = null;\n        return data;\n    }\n    \n    int peek() { return front != null ? front.data : -1; }\n    boolean isEmpty() { return front == null; }\n}",
    hint: "front for dequeue, rear for enqueue",
  },
  {
    id: "dsa_51",
    topicId: "java_dsa",
    question: "Implement circular queue.",
    mathSolution: "Queue that reuses empty spaces",
    codeSolution:
      "class CircularQueue {\n    int[] arr;\n    int front, rear, size, capacity;\n    \n    CircularQueue(int cap) {\n        capacity = cap;\n        arr = new int[capacity];\n        front = 0;\n        rear = -1;\n        size = 0;\n    }\n    \n    void enqueue(int x) {\n        if(size == capacity) return;\n        rear = (rear + 1) % capacity;\n        arr[rear] = x;\n        size++;\n    }\n    \n    int dequeue() {\n        if(size == 0) return -1;\n        int item = arr[front];\n        front = (front + 1) % capacity;\n        size--;\n        return item;\n    }\n}",
    hint: "Wrap around using modulo",
  },
  {
    id: "dsa_52",
    topicId: "java_dsa",
    question: "Implement deque (double-ended queue).",
    mathSolution: "Insert/delete from both ends",
    codeSolution:
      "class Deque {\n    int[] arr;\n    int front, rear, size, capacity;\n    \n    Deque(int cap) {\n        capacity = cap;\n        arr = new int[capacity];\n        front = 0;\n        rear = 0;\n        size = 0;\n    }\n    \n    void insertFront(int x) {\n        if(size == capacity) return;\n        front = (front - 1 + capacity) % capacity;\n        arr[front] = x;\n        size++;\n    }\n    \n    void insertRear(int x) {\n        if(size == capacity) return;\n        arr[rear] = x;\n        rear = (rear + 1) % capacity;\n        size++;\n    }\n    \n    int deleteFront() {\n        if(size == 0) return -1;\n        int item = arr[front];\n        front = (front + 1) % capacity;\n        size--;\n        return item;\n    }\n    \n    int deleteRear() {\n        if(size == 0) return -1;\n        rear = (rear - 1 + capacity) % capacity;\n        size--;\n        return arr[rear];\n    }\n}",
    hint: "Manage both ends carefully",
  },
  {
    id: "dsa_53",
    topicId: "java_dsa",
    question: "Generate binary numbers from 1 to n using queue.",
    mathSolution: "Use queue to generate binary numbers",
    codeSolution:
      'int n = 5;\nQueue<String> queue = new LinkedList<>();\nqueue.add("1");\nList<String> result = new ArrayList<>();\nfor(int i=0; i<n; i++) {\n    String current = queue.poll();\n    result.add(current);\n    queue.add(current + "0");\n    queue.add(current + "1");\n}\nSystem.out.println("Binary numbers: " + result);',
    hint: "Append 0 and 1 to each",
  },
  {
    id: "dsa_54",
    topicId: "java_dsa",
    question: "Implement stack using queues.",
    mathSolution: "Use two queues for stack operations",
    codeSolution:
      "class StackUsingQueues {\n    Queue<Integer> q1 = new LinkedList<>();\n    Queue<Integer> q2 = new LinkedList<>();\n    \n    void push(int x) {\n        q2.add(x);\n        while(!q1.isEmpty()) q2.add(q1.poll());\n        Queue<Integer> temp = q1;\n        q1 = q2;\n        q2 = temp;\n    }\n    \n    int pop() { return q1.isEmpty() ? -1 : q1.poll(); }\n    int top() { return q1.isEmpty() ? -1 : q1.peek(); }\n    boolean isEmpty() { return q1.isEmpty(); }\n}",
    hint: "Keep elements in reverse order",
  },
  {
    id: "dsa_55",
    topicId: "java_dsa",
    question: "Implement queue using stacks.",
    mathSolution: "Use two stacks for queue operations",
    codeSolution:
      "class QueueUsingStacks {\n    Stack<Integer> s1 = new Stack<>();\n    Stack<Integer> s2 = new Stack<>();\n    \n    void enqueue(int x) { s1.push(x); }\n    \n    int dequeue() {\n        if(s2.isEmpty()) {\n            while(!s1.isEmpty()) s2.push(s1.pop());\n        }\n        return s2.isEmpty() ? -1 : s2.pop();\n    }\n    \n    int front() {\n        if(s2.isEmpty()) {\n            while(!s1.isEmpty()) s2.push(s1.pop());\n        }\n        return s2.isEmpty() ? -1 : s2.peek();\n    }\n    \n    boolean isEmpty() { return s1.isEmpty() && s2.isEmpty(); }\n}",
    hint: "s2 holds elements in queue order",
  },

  // ==================== RECURSION (8 questions) ====================
  {
    id: "dsa_56",
    topicId: "java_dsa",
    question: "Calculate factorial using recursion.",
    mathSolution: "n! = n * (n-1)! with base case 0! = 1",
    codeSolution:
      'int factorial(int n) {\n    if(n <= 1) return 1;\n    return n * factorial(n-1);\n}\nSystem.out.println("Factorial of 5: " + factorial(5));',
    hint: "Base case n <= 1",
  },
  {
    id: "dsa_57",
    topicId: "java_dsa",
    question: "Calculate Fibonacci number using recursion.",
    mathSolution: "fib(n) = fib(n-1) + fib(n-2) with base cases",
    codeSolution:
      'int fibonacci(int n) {\n    if(n <= 1) return n;\n    return fibonacci(n-1) + fibonacci(n-2);\n}\nSystem.out.println("Fibonacci(6): " + fibonacci(6));',
    hint: "Base cases: fib(0)=0, fib(1)=1",
  },
  {
    id: "dsa_58",
    topicId: "java_dsa",
    question: "Calculate sum of digits using recursion.",
    mathSolution: "n%10 + sum(n/10)",
    codeSolution:
      'int sumOfDigits(int n) {\n    if(n == 0) return 0;\n    return (n % 10) + sumOfDigits(n / 10);\n}\nSystem.out.println("Sum of digits 12345: " + sumOfDigits(12345));',
    hint: "Add last digit and recurse",
  },
  {
    id: "dsa_59",
    topicId: "java_dsa",
    question: "Reverse a string using recursion.",
    mathSolution: "Reverse substring + first char",
    codeSolution:
      'String reverseString(String s) {\n    if(s.isEmpty()) return s;\n    return reverseString(s.substring(1)) + s.charAt(0);\n}\nSystem.out.println("Reverse of \'hello\': " + reverseString("hello"));',
    hint: "Move first char to end",
  },
  {
    id: "dsa_60",
    topicId: "java_dsa",
    question: "Check if string is palindrome using recursion.",
    mathSolution: "Check first and last, recurse on middle",
    codeSolution:
      'boolean isPalindrome(String s, int left, int right) {\n    if(left >= right) return true;\n    if(s.charAt(left) != s.charAt(right)) return false;\n    return isPalindrome(s, left+1, right-1);\n}\nString s = "madam";\nSystem.out.println("Is palindrome: " + isPalindrome(s, 0, s.length()-1));',
    hint: "Compare ends and move inward",
  },
  {
    id: "dsa_61",
    topicId: "java_dsa",
    question: "Calculate power using recursion.",
    mathSolution: "x^n = x * x^(n-1) with base case",
    codeSolution:
      'int power(int x, int n) {\n    if(n == 0) return 1;\n    return x * power(x, n-1);\n}\nSystem.out.println("2^5 = " + power(2, 5));',
    hint: "Base case n=0 returns 1",
  },
  {
    id: "dsa_62",
    topicId: "java_dsa",
    question: "Find GCD using Euclidean algorithm recursively.",
    mathSolution: "gcd(a,b) = gcd(b, a%b) with base case",
    codeSolution:
      'int gcd(int a, int b) {\n    if(b == 0) return a;\n    return gcd(b, a % b);\n}\nSystem.out.println("GCD of 48 and 18: " + gcd(48, 18));',
    hint: "Base case when b=0",
  },
  {
    id: "dsa_63",
    topicId: "java_dsa",
    question: "Tower of Hanoi problem.",
    mathSolution: "Move n-1 disks, then largest, then n-1 disks",
    codeSolution:
      'void towerOfHanoi(int n, char from, char to, char aux) {\n    if(n == 1) {\n        System.out.println("Move disk 1 from " + from + " to " + to);\n        return;\n    }\n    towerOfHanoi(n-1, from, aux, to);\n    System.out.println("Move disk " + n + " from " + from + " to " + to);\n    towerOfHanoi(n-1, aux, to, from);\n}\ntowerOfHanoi(3, \'A\', \'C\', \'B\');',
    hint: "Classic recursion problem",
  },

  // ==================== SORTING (8 questions) ====================
  {
    id: "dsa_64",
    topicId: "java_dsa",
    question: "Implement Bubble Sort.",
    mathSolution: "Repeatedly swap adjacent elements if out of order",
    codeSolution:
      'int[] arr = {64, 34, 25, 12, 22, 11, 90};\nfor(int i=0; i<arr.length-1; i++) {\n    for(int j=0; j<arr.length-1-i; j++) {\n        if(arr[j] > arr[j+1]) {\n            int temp = arr[j];\n            arr[j] = arr[j+1];\n            arr[j+1] = temp;\n        }\n    }\n}\nSystem.out.println("Sorted: " + Arrays.toString(arr));',
    hint: "Largest bubbles to end",
  },
  {
    id: "dsa_65",
    topicId: "java_dsa",
    question: "Implement Selection Sort.",
    mathSolution: "Find minimum and swap with current position",
    codeSolution:
      'int[] arr = {64, 25, 12, 22, 11};\nfor(int i=0; i<arr.length-1; i++) {\n    int minIdx = i;\n    for(int j=i+1; j<arr.length; j++) {\n        if(arr[j] < arr[minIdx]) minIdx = j;\n    }\n    int temp = arr[i];\n    arr[i] = arr[minIdx];\n    arr[minIdx] = temp;\n}\nSystem.out.println("Sorted: " + Arrays.toString(arr));',
    hint: "Select minimum and swap",
  },
  {
    id: "dsa_66",
    topicId: "java_dsa",
    question: "Implement Insertion Sort.",
    mathSolution: "Insert each element into sorted portion",
    codeSolution:
      'int[] arr = {12, 11, 13, 5, 6};\nfor(int i=1; i<arr.length; i++) {\n    int key = arr[i];\n    int j = i-1;\n    while(j >= 0 && arr[j] > key) {\n        arr[j+1] = arr[j];\n        j--;\n    }\n    arr[j+1] = key;\n}\nSystem.out.println("Sorted: " + Arrays.toString(arr));',
    hint: "Shift elements to insert key",
  },
  {
    id: "dsa_67",
    topicId: "java_dsa",
    question: "Implement Merge Sort.",
    mathSolution: "Divide array, sort halves, merge",
    codeSolution:
      'void mergeSort(int[] arr, int l, int r) {\n    if(l < r) {\n        int m = (l + r) / 2;\n        mergeSort(arr, l, m);\n        mergeSort(arr, m+1, r);\n        merge(arr, l, m, r);\n    }\n}\n\nvoid merge(int[] arr, int l, int m, int r) {\n    int[] left = Arrays.copyOfRange(arr, l, m+1);\n    int[] right = Arrays.copyOfRange(arr, m+1, r+1);\n    int i=0, j=0, k=l;\n    while(i < left.length && j < right.length) {\n        if(left[i] <= right[j]) arr[k++] = left[i++];\n        else arr[k++] = right[j++];\n    }\n    while(i < left.length) arr[k++] = left[i++];\n    while(j < right.length) arr[k++] = right[j++];\n}\n\nint[] arr = {38, 27, 43, 3, 9, 82, 10};\nmergeSort(arr, 0, arr.length-1);\nSystem.out.println("Sorted: " + Arrays.toString(arr));',
    hint: "Divide and conquer",
  },
  {
    id: "dsa_68",
    topicId: "java_dsa",
    question: "Implement Quick Sort.",
    mathSolution: "Choose pivot, partition, recursively sort",
    codeSolution:
      'void quickSort(int[] arr, int low, int high) {\n    if(low < high) {\n        int pi = partition(arr, low, high);\n        quickSort(arr, low, pi-1);\n        quickSort(arr, pi+1, high);\n    }\n}\n\nint partition(int[] arr, int low, int high) {\n    int pivot = arr[high];\n    int i = low - 1;\n    for(int j=low; j<high; j++) {\n        if(arr[j] <= pivot) {\n            i++;\n            int temp = arr[i];\n            arr[i] = arr[j];\n            arr[j] = temp;\n        }\n    }\n    int temp = arr[i+1];\n    arr[i+1] = arr[high];\n    arr[high] = temp;\n    return i+1;\n}\n\nint[] arr = {10, 7, 8, 9, 1, 5};\nquickSort(arr, 0, arr.length-1);\nSystem.out.println("Sorted: " + Arrays.toString(arr));',
    hint: "Last element as pivot",
  },
  {
    id: "dsa_69",
    topicId: "java_dsa",
    question: "Implement Counting Sort (for small range).",
    mathSolution: "Count frequencies, then reconstruct",
    codeSolution:
      'int[] arr = {4, 2, 2, 8, 3, 3, 1};\nint max = Arrays.stream(arr).max().getAsInt();\nint[] count = new int[max+1];\nfor(int num : arr) count[num]++;\nint index = 0;\nfor(int i=0; i<=max; i++) {\n    while(count[i] > 0) {\n        arr[index++] = i;\n        count[i]--;\n    }\n}\nSystem.out.println("Sorted: " + Arrays.toString(arr));',
    hint: "Works for small range of integers",
  },
  {
    id: "dsa_70",
    topicId: "java_dsa",
    question: "Sort array of 0s, 1s, and 2s (Dutch flag).",
    mathSolution: "Three-pointer technique",
    codeSolution:
      'int[] arr = {0, 1, 2, 0, 1, 2, 1, 0};\nint low = 0, mid = 0, high = arr.length-1;\nwhile(mid <= high) {\n    switch(arr[mid]) {\n        case 0:\n            int temp = arr[low];\n            arr[low] = arr[mid];\n            arr[mid] = temp;\n            low++; mid++;\n            break;\n        case 1:\n            mid++;\n            break;\n        case 2:\n            temp = arr[mid];\n            arr[mid] = arr[high];\n            arr[high] = temp;\n            high--;\n            break;\n    }\n}\nSystem.out.println("Sorted: " + Arrays.toString(arr));',
    hint: "low for 0, high for 2",
  },
  {
    id: "dsa_71",
    topicId: "java_dsa",
    question: "Check if array is sorted and rotated.",
    mathSolution: "Count inversions, should be at most 1",
    codeSolution:
      'int[] arr = {3, 4, 5, 1, 2};\nint count = 0;\nfor(int i=0; i<arr.length; i++) {\n    if(arr[i] > arr[(i+1)%arr.length]) count++;\n}\nboolean isSortedRotated = count <= 1;\nSystem.out.println("Is sorted and rotated: " + isSortedRotated);',
    hint: "At most one break in sorted order",
  },

  // ==================== SEARCHING (6 questions) ====================
  {
    id: "dsa_72",
    topicId: "java_dsa",
    question: "Implement Linear Search.",
    mathSolution: "Traverse array until element found",
    codeSolution:
      'int[] arr = {2, 5, 8, 12, 16, 23, 38};\nint key = 16;\nint index = -1;\nfor(int i=0; i<arr.length; i++) {\n    if(arr[i] == key) {\n        index = i;\n        break;\n    }\n}\nSystem.out.println("Element found at index: " + index);',
    hint: "Simple loop",
  },
  {
    id: "dsa_73",
    topicId: "java_dsa",
    question: "Implement Binary Search (iterative).",
    mathSolution: "Divide search space in half",
    codeSolution:
      'int[] arr = {2, 5, 8, 12, 16, 23, 38};\nint key = 23;\nint left = 0, right = arr.length-1;\nint index = -1;\nwhile(left <= right) {\n    int mid = left + (right - left) / 2;\n    if(arr[mid] == key) { index = mid; break; }\n    else if(arr[mid] < key) left = mid + 1;\n    else right = mid - 1;\n}\nSystem.out.println("Element found at index: " + index);',
    hint: "Array must be sorted",
  },
  {
    id: "dsa_74",
    topicId: "java_dsa",
    question: "Implement Binary Search (recursive).",
    mathSolution: "Recursive divide and conquer",
    codeSolution:
      'int binarySearch(int[] arr, int left, int right, int key) {\n    if(left > right) return -1;\n    int mid = left + (right - left) / 2;\n    if(arr[mid] == key) return mid;\n    if(arr[mid] < key) return binarySearch(arr, mid+1, right, key);\n    return binarySearch(arr, left, mid-1, key);\n}\n\nint[] arr = {2, 5, 8, 12, 16, 23, 38};\nint index = binarySearch(arr, 0, arr.length-1, 16);\nSystem.out.println("Element found at index: " + index);',
    hint: "Recursive version",
  },
  {
    id: "dsa_75",
    topicId: "java_dsa",
    question: "Find first and last occurrence in sorted array.",
    mathSolution: "Binary search with left and right bias",
    codeSolution:
      'int[] arr = {1, 2, 2, 2, 3, 4, 4, 5};\nint key = 2;\nint first = -1, last = -1;\n\n// First occurrence\nint left = 0, right = arr.length-1;\nwhile(left <= right) {\n    int mid = left + (right - left) / 2;\n    if(arr[mid] == key) { first = mid; right = mid-1; }\n    else if(arr[mid] < key) left = mid+1;\n    else right = mid-1;\n}\n\n// Last occurrence\nleft = 0; right = arr.length-1;\nwhile(left <= right) {\n    int mid = left + (right - left) / 2;\n    if(arr[mid] == key) { last = mid; left = mid+1; }\n    else if(arr[mid] < key) left = mid+1;\n    else right = mid-1;\n}\n\nSystem.out.println("First: " + first + ", Last: " + last);',
    hint: "Move left after finding for first, right for last",
  },
  {
    id: "dsa_76",
    topicId: "java_dsa",
    question: "Search in rotated sorted array.",
    mathSolution: "Find which half is sorted and search accordingly",
    codeSolution:
      'int[] arr = {4, 5, 6, 7, 0, 1, 2};\nint key = 0;\nint left = 0, right = arr.length-1;\nint index = -1;\nwhile(left <= right) {\n    int mid = left + (right - left) / 2;\n    if(arr[mid] == key) { index = mid; break; }\n    \n    if(arr[left] <= arr[mid]) { // left half sorted\n        if(key >= arr[left] && key < arr[mid]) right = mid-1;\n        else left = mid+1;\n    } else { // right half sorted\n        if(key > arr[mid] && key <= arr[right]) left = mid+1;\n        else right = mid-1;\n    }\n}\nSystem.out.println("Element found at: " + index);',
    hint: "Check which half is sorted",
  },
  {
    id: "dsa_77",
    topicId: "java_dsa",
    question: "Find peak element in mountain array.",
    mathSolution: "Binary search to find peak",
    codeSolution:
      'int[] arr = {1, 3, 5, 7, 6, 4, 2};\nint left = 0, right = arr.length-1;\nwhile(left < right) {\n    int mid = left + (right - left) / 2;\n    if(arr[mid] < arr[mid+1]) left = mid+1;\n    else right = mid;\n}\nSystem.out.println("Peak element: " + arr[left] + " at index " + left);',
    hint: "Compare mid with mid+1",
  },

  // ==================== MATRIX (6 questions) ====================
  {
    id: "dsa_78",
    topicId: "java_dsa",
    question: "Print matrix in spiral order.",
    mathSolution: "Traverse boundaries and shrink",
    codeSolution:
      'int[][] matrix = {\n    {1, 2, 3, 4},\n    {5, 6, 7, 8},\n    {9, 10, 11, 12}\n};\nint top = 0, bottom = matrix.length-1;\nint left = 0, right = matrix[0].length-1;\nList<Integer> result = new ArrayList<>();\n\nwhile(top <= bottom && left <= right) {\n    for(int i=left; i<=right; i++) result.add(matrix[top][i]);\n    top++;\n    \n    for(int i=top; i<=bottom; i++) result.add(matrix[i][right]);\n    right--;\n    \n    if(top <= bottom) {\n        for(int i=right; i>=left; i--) result.add(matrix[bottom][i]);\n        bottom--;\n    }\n    \n    if(left <= right) {\n        for(int i=bottom; i>=top; i--) result.add(matrix[i][left]);\n        left++;\n    }\n}\nSystem.out.println("Spiral order: " + result);',
    hint: "Shrink boundaries after each traversal",
  },
  {
    id: "dsa_79",
    topicId: "java_dsa",
    question: "Transpose of a matrix.",
    mathSolution: "Swap rows and columns",
    codeSolution:
      'int[][] matrix = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\nint[][] transpose = new int[matrix[0].length][matrix.length];\nfor(int i=0; i<matrix.length; i++) {\n    for(int j=0; j<matrix[0].length; j++) {\n        transpose[j][i] = matrix[i][j];\n    }\n}\nSystem.out.println("Transpose: " + Arrays.deepToString(transpose));',
    hint: "Result[i][j] = original[j][i]",
  },
  {
    id: "dsa_80",
    topicId: "java_dsa",
    question: "Rotate matrix 90 degrees clockwise.",
    mathSolution: "Transpose then reverse each row",
    codeSolution:
      'int[][] matrix = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\nint n = matrix.length;\n// Transpose\nfor(int i=0; i<n; i++) {\n    for(int j=i+1; j<n; j++) {\n        int temp = matrix[i][j];\n        matrix[i][j] = matrix[j][i];\n        matrix[j][i] = temp;\n    }\n}\n// Reverse each row\nfor(int i=0; i<n; i++) {\n    for(int j=0; j<n/2; j++) {\n        int temp = matrix[i][j];\n        matrix[i][j] = matrix[i][n-1-j];\n        matrix[i][n-1-j] = temp;\n    }\n}\nSystem.out.println("Rotated: " + Arrays.deepToString(matrix));',
    hint: "Transpose + reverse rows",
  },
  {
    id: "dsa_81",
    topicId: "java_dsa",
    question: "Search in row-wise and column-wise sorted matrix.",
    mathSolution: "Start from top-right or bottom-left",
    codeSolution:
      'int[][] matrix = {\n    {10, 20, 30, 40},\n    {15, 25, 35, 45},\n    {27, 29, 37, 48},\n    {32, 33, 39, 50}\n};\nint target = 29;\nint i = 0, j = matrix[0].length-1;\nboolean found = false;\nwhile(i < matrix.length && j >= 0) {\n    if(matrix[i][j] == target) { found = true; break; }\n    else if(matrix[i][j] > target) j--;\n    else i++;\n}\nSystem.out.println("Found: " + found);',
    hint: "Move left if greater, down if smaller",
  },
  {
    id: "dsa_82",
    topicId: "java_dsa",
    question:
      "Set matrix zeros (if element is 0, set entire row and column to 0).",
    mathSolution: "Mark rows and columns to be zeroed",
    codeSolution:
      'int[][] matrix = {\n    {1, 1, 1},\n    {1, 0, 1},\n    {1, 1, 1}\n};\nboolean[] rows = new boolean[matrix.length];\nboolean[] cols = new boolean[matrix[0].length];\n\nfor(int i=0; i<matrix.length; i++) {\n    for(int j=0; j<matrix[0].length; j++) {\n        if(matrix[i][j] == 0) {\n            rows[i] = true;\n            cols[j] = true;\n        }\n    }\n}\n\nfor(int i=0; i<matrix.length; i++) {\n    for(int j=0; j<matrix[0].length; j++) {\n        if(rows[i] || cols[j]) matrix[i][j] = 0;\n    }\n}\n\nSystem.out.println("After setting zeros: " + Arrays.deepToString(matrix));',
    hint: "Mark rows/cols to zero, then update",
  },
  {
    id: "dsa_83",
    topicId: "java_dsa",
    question: "Find row with maximum number of 1s in binary matrix.",
    mathSolution: "Start from top-right, move left for 1s",
    codeSolution:
      'int[][] matrix = {\n    {0, 0, 1, 1},\n    {0, 1, 1, 1},\n    {1, 1, 1, 1},\n    {0, 0, 0, 1}\n};\nint maxRow = -1, maxCount = -1;\nint j = matrix[0].length-1;\nfor(int i=0; i<matrix.length; i++) {\n    while(j >= 0 && matrix[i][j] == 1) j--;\n    int count = matrix[0].length-1 - j;\n    if(count > maxCount) {\n        maxCount = count;\n        maxRow = i;\n    }\n}\nSystem.out.println("Row with max 1s: " + maxRow);',
    hint: "Start from top-right, move left",
  },

  // ==================== HASHING (6 questions) ====================
  {
    id: "dsa_84",
    topicId: "java_dsa",
    question: "Find frequency of each element in array.",
    mathSolution: "Use HashMap to count occurrences",
    codeSolution:
      'int[] arr = {1, 2, 3, 2, 1, 3, 3, 4};\nMap<Integer, Integer> freq = new HashMap<>();\nfor(int num : arr) {\n    freq.put(num, freq.getOrDefault(num, 0) + 1);\n}\nSystem.out.println("Frequencies: " + freq);',
    hint: "Use getOrDefault",
  },
  {
    id: "dsa_85",
    topicId: "java_dsa",
    question: "Find first repeating element in array.",
    mathSolution: "Use HashSet to track seen elements",
    codeSolution:
      'int[] arr = {1, 2, 3, 2, 1};\nSet<Integer> seen = new HashSet<>();\nint firstRepeat = -1;\nfor(int num : arr) {\n    if(seen.contains(num)) {\n        firstRepeat = num;\n        break;\n    }\n    seen.add(num);\n}\nSystem.out.println("First repeating: " + firstRepeat);',
    hint: "Check before adding",
  },
  {
    id: "dsa_86",
    topicId: "java_dsa",
    question: "Find two numbers that sum to target (Two Sum).",
    mathSolution: "Use HashMap to store complements",
    codeSolution:
      'int[] arr = {2, 7, 11, 15};\nint target = 9;\nMap<Integer, Integer> map = new HashMap<>();\nint[] result = new int[2];\nfor(int i=0; i<arr.length; i++) {\n    int complement = target - arr[i];\n    if(map.containsKey(complement)) {\n        result[0] = map.get(complement);\n        result[1] = i;\n        break;\n    }\n    map.put(arr[i], i);\n}\nSystem.out.println("Indices: " + Arrays.toString(result));',
    hint: "Store value -> index",
  },
  {
    id: "dsa_87",
    topicId: "java_dsa",
    question: "Find subarray with sum zero.",
    mathSolution: "Use HashSet of prefix sums",
    codeSolution:
      'int[] arr = {4, 2, -3, 1, 6};\nSet<Integer> set = new HashSet<>();\nint sum = 0;\nboolean found = false;\nfor(int num : arr) {\n    sum += num;\n    if(sum == 0 || set.contains(sum)) {\n        found = true;\n        break;\n    }\n    set.add(sum);\n}\nSystem.out.println("Subarray with sum zero: " + found);',
    hint: "Same prefix sum means zero subarray",
  },
  {
    id: "dsa_88",
    topicId: "java_dsa",
    question: "Find majority element (appears more than n/2 times).",
    mathSolution: "Boyer-Moore voting algorithm",
    codeSolution:
      'int[] arr = {2, 2, 1, 1, 1, 2, 2};\nint candidate = arr[0];\nint count = 1;\nfor(int i=1; i<arr.length; i++) {\n    if(arr[i] == candidate) count++;\n    else count--;\n    if(count == 0) {\n        candidate = arr[i];\n        count = 1;\n    }\n}\ncount = 0;\nfor(int num : arr) if(num == candidate) count++;\nif(count > arr.length/2) System.out.println("Majority: " + candidate);',
    hint: "Cancel pairs, candidate remains",
  },
  {
    id: "dsa_89",
    topicId: "java_dsa",
    question: "Find longest consecutive subsequence.",
    mathSolution: "Use HashSet for O(1) lookup",
    codeSolution:
      'int[] arr = {100, 4, 200, 1, 3, 2};\nSet<Integer> set = new HashSet<>();\nfor(int num : arr) set.add(num);\nint longest = 0;\nfor(int num : arr) {\n    if(!set.contains(num-1)) {\n        int current = num;\n        int count = 1;\n        while(set.contains(current+1)) {\n            current++;\n            count++;\n        }\n        longest = Math.max(longest, count);\n    }\n}\nSystem.out.println("Longest consecutive: " + longest);',
    hint: "Start from smallest in sequence",
  },

  // ==================== TWO POINTERS (6 questions) ====================
  {
    id: "dsa_90",
    topicId: "java_dsa",
    question: "Find pair with given sum in sorted array.",
    mathSolution: "Two pointers from both ends",
    codeSolution:
      'int[] arr = {2, 5, 8, 12, 16, 23, 38};\nint target = 28;\nint left = 0, right = arr.length-1;\nboolean found = false;\nwhile(left < right) {\n    int sum = arr[left] + arr[right];\n    if(sum == target) { found = true; break; }\n    else if(sum < target) left++;\n    else right--;\n}\nSystem.out.println("Pair found: " + found);',
    hint: "Move left if sum too small, right if too large",
  },
  {
    id: "dsa_91",
    topicId: "java_dsa",
    question: "Find triplets with sum zero.",
    mathSolution: "Sort and use two pointers for each i",
    codeSolution:
      'int[] arr = {-1, 0, 1, 2, -1, -4};\nArrays.sort(arr);\nList<List<Integer>> result = new ArrayList<>();\nfor(int i=0; i<arr.length-2; i++) {\n    if(i>0 && arr[i] == arr[i-1]) continue;\n    int left = i+1, right = arr.length-1;\n    while(left < right) {\n        int sum = arr[i] + arr[left] + arr[right];\n        if(sum == 0) {\n            result.add(Arrays.asList(arr[i], arr[left], arr[right]));\n            while(left < right && arr[left] == arr[left+1]) left++;\n            while(left < right && arr[right] == arr[right-1]) right--;\n            left++; right--;\n        } else if(sum < 0) left++;\n        else right--;\n    }\n}\nSystem.out.println("Triplets: " + result);',
    hint: "Skip duplicates",
  },
  {
    id: "dsa_92",
    topicId: "java_dsa",
    question: "Container with most water.",
    mathSolution: "Two pointers, move shorter line",
    codeSolution:
      'int[] height = {1, 8, 6, 2, 5, 4, 8, 3, 7};\nint left = 0, right = height.length-1;\nint maxArea = 0;\nwhile(left < right) {\n    int area = Math.min(height[left], height[right]) * (right - left);\n    maxArea = Math.max(maxArea, area);\n    if(height[left] < height[right]) left++;\n    else right--;\n}\nSystem.out.println("Max area: " + maxArea);',
    hint: "Move the smaller height",
  },
  {
    id: "dsa_93",
    topicId: "java_dsa",
    question: "Trapping rain water problem.",
    mathSolution: "Two pointers with leftMax and rightMax",
    codeSolution:
      'int[] height = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};\nint left = 0, right = height.length-1;\nint leftMax = 0, rightMax = 0;\nint water = 0;\nwhile(left < right) {\n    if(height[left] < height[right]) {\n        if(height[left] >= leftMax) leftMax = height[left];\n        else water += leftMax - height[left];\n        left++;\n    } else {\n        if(height[right] >= rightMax) rightMax = height[right];\n        else water += rightMax - height[right];\n        right--;\n    }\n}\nSystem.out.println("Trapped water: " + water);',
    hint: "Water trapped = min(leftMax,rightMax) - height",
  },
  {
    id: "dsa_94",
    topicId: "java_dsa",
    question: "Remove duplicates from sorted array in-place.",
    mathSolution: "Two pointers, one for unique position",
    codeSolution:
      'int[] arr = {1, 1, 2, 2, 3, 3, 4};\nint j = 0;\nfor(int i=1; i<arr.length; i++) {\n    if(arr[i] != arr[j]) {\n        j++;\n        arr[j] = arr[i];\n    }\n}\nSystem.out.println("Unique count: " + (j+1));\nSystem.out.println("Array: " + Arrays.toString(Arrays.copyOf(arr, j+1)));',
    hint: "j tracks last unique position",
  },
  {
    id: "dsa_95",
    topicId: "java_dsa",
    question: "Find subarray with given sum (positive numbers).",
    mathSolution: "Sliding window",
    codeSolution:
      'int[] arr = {1, 4, 20, 3, 10, 5};\nint target = 33;\nint left = 0, sum = 0;\nboolean found = false;\nfor(int right=0; right<arr.length; right++) {\n    sum += arr[right];\n    while(sum > target && left <= right) {\n        sum -= arr[left];\n        left++;\n    }\n    if(sum == target) {\n        found = true;\n        System.out.println("Subarray from " + left + " to " + right);\n        break;\n    }\n}\nif(!found) System.out.println("No subarray found");',
    hint: "Expand right, shrink left when sum too large",
  },

  // ==================== SLIDING WINDOW (4 questions) ====================
  {
    id: "dsa_96",
    topicId: "java_dsa",
    question: "Maximum sum subarray of size k.",
    mathSolution: "Sliding window to maintain window sum",
    codeSolution:
      'int[] arr = {2, 1, 5, 1, 3, 2};\nint k = 3;\nint windowSum = 0;\nfor(int i=0; i<k; i++) windowSum += arr[i];\nint maxSum = windowSum;\nfor(int i=k; i<arr.length; i++) {\n    windowSum += arr[i] - arr[i-k];\n    maxSum = Math.max(maxSum, windowSum);\n}\nSystem.out.println("Max sum of size " + k + ": " + maxSum);',
    hint: "Add new, remove old",
  },
  {
    id: "dsa_97",
    topicId: "java_dsa",
    question: "Longest substring without repeating characters.",
    mathSolution: "Sliding window with HashSet",
    codeSolution:
      'String s = "abcabcbb";\nSet<Character> set = new HashSet<>();\nint left = 0, maxLength = 0;\nfor(int right=0; right<s.length(); right++) {\n    while(set.contains(s.charAt(right))) {\n        set.remove(s.charAt(left));\n        left++;\n    }\n    set.add(s.charAt(right));\n    maxLength = Math.max(maxLength, right - left + 1);\n}\nSystem.out.println("Longest substring length: " + maxLength);',
    hint: "Remove from left when duplicate found",
  },
  {
    id: "dsa_98",
    topicId: "java_dsa",
    question: "Minimum window substring containing all characters of pattern.",
    mathSolution: "Sliding window with character counts",
    codeSolution:
      'String s = "ADOBECODEBANC";\nString t = "ABC";\nMap<Character, Integer> need = new HashMap<>();\nfor(char c : t.toCharArray()) need.put(c, need.getOrDefault(c,0)+1);\nint left = 0, matched = 0, minLen = s.length()+1, start = 0;\nMap<Character, Integer> window = new HashMap<>();\n\nfor(int right=0; right<s.length(); right++) {\n    char c = s.charAt(right);\n    window.put(c, window.getOrDefault(c,0)+1);\n    if(need.containsKey(c) && window.get(c).equals(need.get(c))) matched++;\n    \n    while(matched == need.size()) {\n        if(right-left+1 < minLen) {\n            minLen = right-left+1;\n            start = left;\n        }\n        char leftChar = s.charAt(left);\n        window.put(leftChar, window.get(leftChar)-1);\n        if(need.containsKey(leftChar) && window.get(leftChar) < need.get(leftChar)) matched--;\n        left++;\n    }\n}\nString result = minLen <= s.length() ? s.substring(start, start+minLen) : "";\nSystem.out.println("Min window: " + result);',
    hint: "Expand right, shrink left when valid",
  },
  {
    id: "dsa_99",
    topicId: "java_dsa",
    question: "Find all anagrams of pattern in string.",
    mathSolution: "Sliding window with character frequency",
    codeSolution:
      "String s = \"cbaebabacd\";\nString p = \"abc\";\nList<Integer> result = new ArrayList<>();\nint[] need = new int[26];\nint[] window = new int[26];\nfor(char c : p.toCharArray()) need[c-'a']++;\n\nint left = 0;\nfor(int right=0; right<s.length(); right++) {\n    window[s.charAt(right)-'a']++;\n    \n    if(right - left + 1 == p.length()) {\n        if(Arrays.equals(need, window)) result.add(left);\n        window[s.charAt(left)-'a']--;\n        left++;\n    }\n}\nSystem.out.println(\"Anagram start indices: \" + result);",
    hint: "Compare frequency arrays",
  },

  // ==================== BIT MANIPULATION (1 question) ====================
  {
    id: "dsa_100",
    topicId: "java_dsa",
    question: "Find single number in array where others appear twice.",
    mathSolution: "XOR all elements",
    codeSolution:
      'int[] arr = {4, 1, 2, 1, 2};\nint result = 0;\nfor(int num : arr) result ^= num;\nSystem.out.println("Single number: " + result);',
    hint: "a ^ a = 0, a ^ 0 = a",
  },
);
