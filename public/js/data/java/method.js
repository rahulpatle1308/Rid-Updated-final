QuizData.questions.push(
  // METHODS - EASY TO MEDIUM (50 Questions)
  {
    id: "method_1",
    topicId: "java_method",
    question: "How do you define a simple method that prints Hello?",
    mathSolution: "Method with no parameters and no return value",
    codeSolution: 'void sayHello() {\n    System.out.println("Hello");\n}',
    hint: "Use void return type",
  },
  {
    id: "method_2",
    topicId: "java_method",
    question: "Write a method that returns sum of two integers.",
    mathSolution: "Add two numbers and return result",
    codeSolution: "int add(int a, int b) {\n    return a + b;\n}",
    hint: "Use return keyword with int type",
  },
  {
    id: "method_3",
    topicId: "java_method",
    question: "How do you call a method named display()?",
    mathSolution: "Invoke method using object or directly if static",
    codeSolution:
      "// If instance method\nobj.display();\n// If static method\nClassName.display();",
    hint: "Use dot operator to call",
  },
  {
    id: "method_4",
    topicId: "java_method",
    question: "Write a method that takes String parameter and prints it.",
    mathSolution: "Method with one parameter",
    codeSolution:
      "void printMessage(String msg) {\n    System.out.println(msg);\n}",
    hint: "Parameters go inside parentheses",
  },
  {
    id: "method_5",
    topicId: "java_method",
    question: "Create a method that returns the square of a number.",
    mathSolution: "Multiply number by itself",
    codeSolution: "int square(int num) {\n    return num * num;\n}",
    hint: "Return num * num",
  },
  {
    id: "method_6",
    topicId: "java_method",
    question: "Write a method to check if a number is even.",
    mathSolution: "Return true if number % 2 == 0",
    codeSolution: "boolean isEven(int num) {\n    return num % 2 == 0;\n}",
    hint: "Return boolean value",
  },
  {
    id: "method_7",
    topicId: "java_method",
    question: "How do you create a static method?",
    mathSolution: "Method that belongs to class, not object",
    codeSolution:
      'static void staticMethod() {\n    System.out.println("Static method");\n}',
    hint: "Use static keyword",
  },
  {
    id: "method_8",
    topicId: "java_method",
    question: "Write a method that returns the maximum of two numbers.",
    mathSolution: "Compare two numbers and return larger",
    codeSolution: "int max(int a, int b) {\n    return (a > b) ? a : b;\n}",
    hint: "Use ternary operator or if-else",
  },
  {
    id: "method_9",
    topicId: "java_method",
    question: "Create a method with multiple parameters.",
    mathSolution: "Method accepting three parameters",
    codeSolution:
      "double calculateAverage(int a, int b, int c) {\n    return (a + b + c) / 3.0;\n}",
    hint: "Separate parameters with commas",
  },
  {
    id: "method_10",
    topicId: "java_method",
    question: "Write a method that returns nothing (void).",
    mathSolution: "Method with no return value",
    codeSolution:
      'void showMessage() {\n    System.out.println("Hello World");\n}',
    hint: "void means no return",
  },
  {
    id: "method_11",
    topicId: "java_method",
    question: "What is method overloading? Show example.",
    mathSolution: "Multiple methods with same name, different parameters",
    codeSolution:
      "int add(int a, int b) { return a+b; }\nint add(int a, int b, int c) { return a+b+c; }\ndouble add(double a, double b) { return a+b; }",
    hint: "Same name, different parameter list",
  },
  {
    id: "method_12",
    topicId: "java_method",
    question: "Write a recursive method for factorial.",
    mathSolution: "n! = n * (n-1)!",
    codeSolution:
      "int factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}",
    hint: "Method calls itself",
  },
  {
    id: "method_13",
    topicId: "java_method",
    question: "Create a method that returns a String.",
    mathSolution: "Method with String return type",
    codeSolution:
      'String greet(String name) {\n    return "Hello, " + name;\n}',
    hint: "Return concatenated string",
  },
  {
    id: "method_14",
    topicId: "java_method",
    question: "Write a method that takes an array and returns sum.",
    mathSolution: "Add all elements of array",
    codeSolution:
      "int arraySum(int[] arr) {\n    int sum = 0;\n    for(int num : arr) sum += num;\n    return sum;\n}",
    hint: "Use enhanced for loop",
  },
  {
    id: "method_15",
    topicId: "java_method",
    question: "How do you pass command line arguments to main method?",
    mathSolution: "args parameter in main method",
    codeSolution:
      'public static void main(String[] args) {\n    System.out.println("First arg: " + args[0]);\n}',
    hint: "args array contains command line arguments",
  },
  {
    id: "method_16",
    topicId: "java_method",
    question: "Write a method that returns the length of a string.",
    mathSolution: "Count characters in string",
    codeSolution: "int getLength(String str) {\n    return str.length();\n}",
    hint: "Use length() method",
  },
  {
    id: "method_17",
    topicId: "java_method",
    question: "Create a method to reverse a string.",
    mathSolution: "Reverse character order",
    codeSolution:
      "String reverse(String str) {\n    return new StringBuilder(str).reverse().toString();\n}",
    hint: "Use StringBuilder.reverse()",
  },
  {
    id: "method_18",
    topicId: "java_method",
    question: "Write a method that checks if a character is vowel.",
    mathSolution: "Check if char is a, e, i, o, u",
    codeSolution:
      "boolean isVowel(char c) {\n    c = Character.toLowerCase(c);\n    return c=='a'||c=='e'||c=='i'||c=='o'||c=='u';\n}",
    hint: "Convert to lowercase first",
  },
  {
    id: "method_19",
    topicId: "java_method",
    question: "How do you create a method that throws an exception?",
    mathSolution: "Use throws keyword",
    codeSolution:
      'void validateAge(int age) throws IllegalArgumentException {\n    if(age < 0) throw new IllegalArgumentException("Invalid age");\n}',
    hint: "throws in declaration, throw to throw",
  },
  {
    id: "method_20",
    topicId: "java_method",
    question: "Write a method with varargs (variable arguments).",
    mathSolution: "Method that accepts variable number of arguments",
    codeSolution:
      "int sum(int... numbers) {\n    int total = 0;\n    for(int n : numbers) total += n;\n    return total;\n}",
    hint: "Use ... after type",
  },
  {
    id: "method_21",
    topicId: "java_method",
    question: "Create a method that returns the smallest element in array.",
    mathSolution: "Find minimum value in array",
    codeSolution:
      "int findMin(int[] arr) {\n    int min = arr[0];\n    for(int n : arr) if(n < min) min = n;\n    return min;\n}",
    hint: "Initialize min with first element",
  },
  {
    id: "method_22",
    topicId: "java_method",
    question: "Write a method to calculate power of a number.",
    mathSolution: "base^exponent",
    codeSolution:
      "double power(double base, int exp) {\n    return Math.pow(base, exp);\n}",
    hint: "Use Math.pow() or loop",
  },
  {
    id: "method_23",
    topicId: "java_method",
    question: "How do you create a private method?",
    mathSolution: "Method accessible only within same class",
    codeSolution:
      'private void helperMethod() {\n    System.out.println("Private method");\n}',
    hint: "Use private access modifier",
  },
  {
    id: "method_24",
    topicId: "java_method",
    question: "Write a method that returns a boolean array of even status.",
    mathSolution: "Check each number if even",
    codeSolution:
      "boolean[] checkEven(int[] arr) {\n    boolean[] result = new boolean[arr.length];\n    for(int i=0; i<arr.length; i++) {\n        result[i] = arr[i] % 2 == 0;\n    }\n    return result;\n}",
    hint: "Return array of boolean",
  },
  {
    id: "method_25",
    topicId: "java_method",
    question: "Create a method to check if a string is palindrome.",
    mathSolution: "String equals its reverse",
    codeSolution:
      "boolean isPalindrome(String str) {\n    String rev = new StringBuilder(str).reverse().toString();\n    return str.equals(rev);\n}",
    hint: "Compare with reverse",
  },
  {
    id: "method_26",
    topicId: "java_method",
    question: "Write a method that uses default parameters?",
    mathSolution: "Method overloading simulates default parameters",
    codeSolution:
      'void greet() { greet("Guest"); }\nvoid greet(String name) {\n    System.out.println("Hello, " + name);\n}',
    hint: "Overload to provide defaults",
  },
  {
    id: "method_27",
    topicId: "java_method",
    question: "How do you create a synchronized method?",
    mathSolution: "Method that can be accessed by one thread at a time",
    codeSolution: "synchronized void increment() {\n    count++;\n}",
    hint: "Use synchronized keyword",
  },
  {
    id: "method_28",
    topicId: "java_method",
    question: "Write a method that returns the GCD of two numbers.",
    mathSolution: "Greatest Common Divisor",
    codeSolution:
      "int gcd(int a, int b) {\n    while(b != 0) {\n        int temp = b;\n        b = a % b;\n        a = temp;\n    }\n    return a;\n}",
    hint: "Use Euclidean algorithm",
  },
  {
    id: "method_29",
    topicId: "java_method",
    question: "Create a method to count words in a sentence.",
    mathSolution: "Split by spaces and count",
    codeSolution:
      'int countWords(String sentence) {\n    if(sentence == null || sentence.isEmpty()) return 0;\n    return sentence.trim().split("\\\\s+").length;\n}',
    hint: "Use split() with regex",
  },
  {
    id: "method_30",
    topicId: "java_method",
    question: "Write a method that returns Fibonacci number.",
    mathSolution: "F(n) = F(n-1) + F(n-2)",
    codeSolution:
      "int fibonacci(int n) {\n    if(n <= 1) return n;\n    return fibonacci(n-1) + fibonacci(n-2);\n}",
    hint: "Base cases: 0,1",
  },
  {
    id: "method_31",
    topicId: "java_method",
    question: "How do you create a generic method?",
    mathSolution: "Method that works with any type",
    codeSolution:
      "<T> void printArray(T[] arr) {\n    for(T item : arr) {\n        System.out.println(item);\n    }\n}",
    hint: "Use type parameter before return type",
  },
  {
    id: "method_32",
    topicId: "java_method",
    question: "Write a method that swaps two integers using array.",
    mathSolution: "Swap values in array",
    codeSolution:
      "void swap(int[] arr, int i, int j) {\n    int temp = arr[i];\n    arr[i] = arr[j];\n    arr[j] = temp;\n}",
    hint: "Java passes by value - use array",
  },
  {
    id: "method_33",
    topicId: "java_method",
    question: "Create a method to check if a number is prime.",
    mathSolution: "Check divisibility up to sqrt(n)",
    codeSolution:
      "boolean isPrime(int n) {\n    if(n <= 1) return false;\n    for(int i=2; i<=Math.sqrt(n); i++) {\n        if(n % i == 0) return false;\n    }\n    return true;\n}",
    hint: "Check only up to square root",
  },
  {
    id: "method_34",
    topicId: "java_method",
    question: "Write a method that returns the average of array.",
    mathSolution: "Sum divided by count",
    codeSolution:
      "double average(int[] arr) {\n    if(arr.length == 0) return 0;\n    int sum = 0;\n    for(int n : arr) sum += n;\n    return (double)sum / arr.length;\n}",
    hint: "Cast to double for decimal result",
  },
  {
    id: "method_35",
    topicId: "java_method",
    question: "How do you create a final method?",
    mathSolution: "Method that cannot be overridden",
    codeSolution:
      'final void cannotOverride() {\n    System.out.println("Final method");\n}',
    hint: "Use final keyword",
  },
  {
    id: "method_36",
    topicId: "java_method",
    question: "Write a method that returns the second largest number.",
    mathSolution: "Find first and second largest",
    codeSolution:
      "int secondLargest(int[] arr) {\n    int first = Integer.MIN_VALUE;\n    int second = Integer.MIN_VALUE;\n    for(int n : arr) {\n        if(n > first) {\n            second = first;\n            first = n;\n        } else if(n > second && n != first) {\n            second = n;\n        }\n    }\n    return second;\n}",
    hint: "Track two largest values",
  },
  {
    id: "method_37",
    topicId: "java_method",
    question: "Create a method to merge two arrays.",
    mathSolution: "Combine two arrays into one",
    codeSolution:
      "int[] mergeArrays(int[] a, int[] b) {\n    int[] result = new int[a.length + b.length];\n    System.arraycopy(a, 0, result, 0, a.length);\n    System.arraycopy(b, 0, result, a.length, b.length);\n    return result;\n}",
    hint: "Use arraycopy or loops",
  },
  {
    id: "method_38",
    topicId: "java_method",
    question: "Write a method that returns the frequency of a character.",
    mathSolution: "Count occurrences of char in string",
    codeSolution:
      "int charFrequency(String str, char ch) {\n    int count = 0;\n    for(char c : str.toCharArray()) {\n        if(c == ch) count++;\n    }\n    return count;\n}",
    hint: "Loop through characters",
  },
  {
    id: "method_39",
    topicId: "java_method",
    question: "How do you create a native method?",
    mathSolution: "Method implemented in another language (like C)",
    codeSolution:
      'public native void nativeMethod();\n// Load library: static { System.loadLibrary("mylib"); }',
    hint: "Use native keyword",
  },
  {
    id: "method_40",
    topicId: "java_method",
    question: "Write a method that returns the factorial using iteration.",
    mathSolution: "Multiply numbers from 1 to n",
    codeSolution:
      "int factorialIterative(int n) {\n    int result = 1;\n    for(int i=2; i<=n; i++) {\n        result *= i;\n    }\n    return result;\n}",
    hint: "Loop from 2 to n",
  },
  {
    id: "method_41",
    topicId: "java_method",
    question: "Create a method to remove duplicates from array.",
    mathSolution: "Return array with unique elements",
    codeSolution:
      "int[] removeDuplicates(int[] arr) {\n    return Arrays.stream(arr).distinct().toArray();\n}",
    hint: "Use stream distinct()",
  },
  {
    id: "method_42",
    topicId: "java_method",
    question: "Write a method that returns the sum of digits.",
    mathSolution: "Add each digit of number",
    codeSolution:
      "int sumOfDigits(int n) {\n    n = Math.abs(n);\n    int sum = 0;\n    while(n > 0) {\n        sum += n % 10;\n        n /= 10;\n    }\n    return sum;\n}",
    hint: "Use modulus and division",
  },
  {
    id: "method_43",
    topicId: "java_method",
    question: "How do you create a method with strictfp keyword?",
    mathSolution: "Ensures consistent floating point behavior",
    codeSolution:
      "strictfp void calculate() {\n    double result = 1.0 / 3.0;\n}",
    hint: "Use strictfp for platform independence",
  },
  {
    id: "method_44",
    topicId: "java_method",
    question: "Write a method that checks if arrays are equal.",
    mathSolution: "Compare each element",
    codeSolution:
      "boolean arraysEqual(int[] a, int[] b) {\n    return Arrays.equals(a, b);\n}",
    hint: "Use Arrays.equals()",
  },
  {
    id: "method_45",
    topicId: "java_method",
    question: "Create a method to capitalize first letter of each word.",
    mathSolution: "Split, capitalize first, join",
    codeSolution:
      'String capitalizeWords(String sentence) {\n    return Arrays.stream(sentence.split("\\\\s+"))\n        .map(word -> word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase())\n        .collect(Collectors.joining(" "));\n}',
    hint: "Use streams or StringBuilder",
  },
  {
    id: "method_46",
    topicId: "java_method",
    question: "Write a method that returns the LCM of two numbers.",
    mathSolution: "LCM = a * b / GCD(a,b)",
    codeSolution:
      "int lcm(int a, int b) {\n    return (a * b) / gcd(a, b);\n}\nint gcd(int a, int b) {\n    while(b != 0) {\n        int temp = b;\n        b = a % b;\n        a = temp;\n    }\n    return a;\n}",
    hint: "Use GCD to calculate LCM",
  },
  {
    id: "method_47",
    topicId: "java_method",
    question: "How do you create a method that returns multiple values?",
    mathSolution: "Return array or custom object",
    codeSolution:
      "int[] getMinMax(int[] arr) {\n    int min = arr[0], max = arr[0];\n    for(int n : arr) {\n        min = Math.min(min, n);\n        max = Math.max(max, n);\n    }\n    return new int[]{min, max};\n}",
    hint: "Return array or collection",
  },
  {
    id: "method_48",
    topicId: "java_method",
    question: "Write a method to check if a string contains only digits.",
    mathSolution: "Check each character if digit",
    codeSolution:
      'boolean isNumeric(String str) {\n    return str.matches("\\\\d+");\n}',
    hint: "Use regex \\d+",
  },
  {
    id: "method_49",
    topicId: "java_method",
    question: "Create a method to rotate array left by k positions.",
    mathSolution: "Move elements left by k positions",
    codeSolution:
      "void rotateLeft(int[] arr, int k) {\n    k = k % arr.length;\n    reverse(arr, 0, k-1);\n    reverse(arr, k, arr.length-1);\n    reverse(arr, 0, arr.length-1);\n}\nvoid reverse(int[] arr, int start, int end) {\n    while(start < end) {\n        int temp = arr[start];\n        arr[start] = arr[end];\n        arr[end] = temp;\n        start++; end--;\n    }\n}",
    hint: "Use reversal algorithm",
  },
  {
    id: "method_50",
    topicId: "java_method",
    question: "Write a method that returns the most frequent element.",
    mathSolution: "Find element with highest frequency",
    codeSolution:
      "int mostFrequent(int[] arr) {\n    Map<Integer, Long> freq = Arrays.stream(arr)\n        .boxed()\n        .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));\n    return Collections.max(freq.entrySet(), Map.Entry.comparingByValue()).getKey();\n}",
    hint: "Use frequency map",
  },
);
