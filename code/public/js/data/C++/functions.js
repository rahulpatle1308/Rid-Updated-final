QuizData.questions.push(
  {
    id: "cpp_function_1",
    topicId: "cpp_functions",
    question: "What is a function in C++? Why are functions used?",
    mathSolution: "Function concept",
    codeSolution:
      "A function is a block of code that performs a specific task. Functions are used for:\n1. Code reusability\n2. Modular programming\n3. Easy debugging and maintenance\n4. Reducing code duplication",
    hint: "Functions are like reusable recipes - write once, use many times.",
  },
  {
    id: "cpp_function_2",
    topicId: "cpp_functions",
    question: "What is the syntax of a function in C++?",
    mathSolution: "Function syntax",
    codeSolution:
      "return_type function_name(parameter_list) {\n    // function body\n    return value;  // if return_type is not void\n}",
    hint: "Syntax: returnType functionName(parameters) { body }",
  },
  {
    id: "cpp_function_3",
    topicId: "cpp_functions",
    question: "Write a simple function that prints 'Hello World'.",
    mathSolution: "Basic function",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nvoid printHello() {\n    cout << "Hello World" << endl;\n}\n\nint main() {\n    printHello();  // Function call\n    return 0;\n}',
    hint: "Define function with void return type, then call it from main().",
  },
  {
    id: "cpp_function_4",
    topicId: "cpp_functions",
    question:
      "Write a function that takes two integers as parameters and returns their sum.",
    mathSolution: "Sum function",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nint sum(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    int result = sum(10, 20);\n    cout << "Sum = " << result << endl;\n    return 0;\n}',
    hint: "Function should have int return type and two int parameters.",
  },
  {
    id: "cpp_function_5",
    topicId: "cpp_functions",
    question:
      "What is the difference between function declaration and function definition?",
    mathSolution: "Declaration vs Definition",
    codeSolution:
      "Declaration (prototype): int sum(int a, int b);  // Tells compiler about function\nDefinition: int sum(int a, int b) { return a + b; }  // Actual implementation",
    hint: "Declaration gives signature, definition gives body.",
  },
  {
    id: "cpp_function_6",
    topicId: "cpp_functions",
    question:
      "Write a program with function declaration before main and definition after main.",
    mathSolution: "Function prototype",
    codeSolution:
      "#include <iostream>\nusing namespace std;\n\nint multiply(int x, int y);  // Declaration\n\nint main() {\n    cout << multiply(5, 3) << endl;\n    return 0;\n}\n\nint multiply(int x, int y) {  // Definition\n    return x * y;\n}",
    hint: "Declare function before main, define it after main.",
  },
  {
    id: "cpp_function_7",
    topicId: "cpp_functions",
    question: "Explain the concept of pass by value with example.",
    mathSolution: "Pass by value",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nvoid changeValue(int x) {\n    x = 100;  // Changes only local copy\n}\n\nint main() {\n    int num = 10;\n    changeValue(num);\n    cout << "num = " << num << endl;  // Still 10\n    return 0;\n}',
    hint: "In pass by value, function works on copy, original unchanged.",
  },
  {
    id: "cpp_function_8",
    topicId: "cpp_functions",
    question: "Explain the concept of pass by reference with example.",
    mathSolution: "Pass by reference",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nvoid changeValue(int &x) {\n    x = 100;  // Changes original variable\n}\n\nint main() {\n    int num = 10;\n    changeValue(num);\n    cout << "num = " << num << endl;  // Now 100\n    return 0;\n}',
    hint: "Use & in parameter to pass by reference - changes affect original.",
  },
  {
    id: "cpp_function_9",
    topicId: "cpp_functions",
    question:
      "What is the difference between pass by value and pass by reference?",
    mathSolution: "Value vs Reference",
    codeSolution:
      "Pass by value: Copy is passed, original unchanged\nPass by reference: Reference is passed, changes affect original\n\nvoid byValue(int a) { a = 10; }\nvoid byReference(int &a) { a = 10; }",
    hint: "Value = copy, Reference = alias (uses &).",
  },
  {
    id: "cpp_function_10",
    topicId: "cpp_functions",
    question: "Write a function to swap two numbers using pass by reference.",
    mathSolution: "Swap function",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nvoid swap(int &a, int &b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 5, y = 10;\n    cout << "Before: x=" << x << ", y=" << y << endl;\n    swap(x, y);\n    cout << "After: x=" << x << ", y=" << y << endl;\n    return 0;\n}',
    hint: "Use pass by reference (&) to modify original variables.",
  },
  {
    id: "cpp_function_11",
    topicId: "cpp_functions",
    question: "What is function overloading? Give example.",
    mathSolution: "Function overloading",
    codeSolution:
      "#include <iostream>\nusing namespace std;\n\nint add(int a, int b) { return a + b; }\ndouble add(double a, double b) { return a + b; }\nint add(int a, int b, int c) { return a + b + c; }\n\nint main() {\n    cout << add(5, 10) << endl;      // Calls int version\n    cout << add(3.5, 2.7) << endl;   // Calls double version\n    cout << add(1, 2, 3) << endl;    // Calls 3-param version\n    return 0;\n}",
    hint: "Multiple functions with same name but different parameters.",
  },
  {
    id: "cpp_function_12",
    topicId: "cpp_functions",
    question: "What are the rules for function overloading?",
    mathSolution: "Overloading rules",
    codeSolution:
      "Functions can be overloaded based on:\n1. Different number of parameters\n2. Different types of parameters\n3. Different order of parameters\n\nReturn type alone cannot be used for overloading.",
    hint: "Parameters must differ in number, type, or order. Return type doesn't matter.",
  },
  {
    id: "cpp_function_13",
    topicId: "cpp_functions",
    question: "What is a default argument? Give example.",
    mathSolution: "Default arguments",
    codeSolution:
      "#include <iostream>\nusing namespace std;\n\nint multiply(int a, int b = 1) {  // b has default value 1\n    return a * b;\n}\n\nint main() {\n    cout << multiply(5, 3) << endl;  // Uses both: 15\n    cout << multiply(5) << endl;     // Uses default b=1: 5\n    return 0;\n}",
    hint: "Default values are specified in function declaration/definition.",
  },
  {
    id: "cpp_function_14",
    topicId: "cpp_functions",
    question: "What are the rules for default arguments?",
    mathSolution: "Default argument rules",
    codeSolution:
      "1. Default arguments must be from rightmost parameter\n2. Once a parameter has default, all parameters to its right must also have defaults\n\nvoid func(int a, int b=10, int c=20);  // OK\nvoid func(int a=5, int b, int c);     // Error",
    hint: "Default arguments must be trailing parameters.",
  },
  {
    id: "cpp_function_15",
    topicId: "cpp_functions",
    question: "What is an inline function? Why is it used?",
    mathSolution: "Inline functions",
    codeSolution:
      "inline int square(int x) {\n    return x * x;\n}\n\nint main() {\n    cout << square(5) << endl;  // Compiler may replace with 5*5\n    return 0;\n}",
    hint: "inline suggests compiler to replace function call with its code to avoid overhead.",
  },
  {
    id: "cpp_function_16",
    topicId: "cpp_functions",
    question: "What is recursion? Give a simple example.",
    mathSolution: "Recursion concept",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nvoid countDown(int n) {\n    if(n == 0) {\n        cout << "Go!" << endl;\n        return;\n    }\n    cout << n << " ";\n    countDown(n - 1);  // Recursive call\n}\n\nint main() {\n    countDown(5);\n    return 0;\n}',
    hint: "Recursion is when a function calls itself.",
  },
  {
    id: "cpp_function_17",
    topicId: "cpp_functions",
    question: "Write a recursive function to calculate factorial.",
    mathSolution: "Recursive factorial",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nint factorial(int n) {\n    if(n <= 1) return 1;  // Base case\n    return n * factorial(n - 1);  // Recursive case\n}\n\nint main() {\n    cout << "5! = " << factorial(5) << endl;\n    return 0;\n}',
    hint: "Base case: n<=1 return 1, Recursive: n * factorial(n-1)",
  },
  {
    id: "cpp_function_18",
    topicId: "cpp_functions",
    question: "Write a recursive function to calculate Fibonacci numbers.",
    mathSolution: "Recursive Fibonacci",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nint fib(int n) {\n    if(n <= 1) return n;  // Base cases: fib(0)=0, fib(1)=1\n    return fib(n-1) + fib(n-2);  // Recursive case\n}\n\nint main() {\n    cout << "fib(6) = " << fib(6) << endl;\n    return 0;\n}',
    hint: "Base cases: n=0 return 0, n=1 return 1. Recursive: fib(n-1) + fib(n-2)",
  },
  {
    id: "cpp_function_19",
    topicId: "cpp_functions",
    question: "What is a static variable inside a function? Give example.",
    mathSolution: "Static local variable",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nvoid counter() {\n    static int count = 0;  // Initialized only once\n    count++;\n    cout << "Count = " << count << endl;\n}\n\nint main() {\n    counter();  // Count = 1\n    counter();  // Count = 2\n    counter();  // Count = 3\n    return 0;\n}',
    hint: "static local variables retain their value between function calls.",
  },
  {
    id: "cpp_function_20",
    topicId: "cpp_functions",
    question:
      "What is the difference between static local variable and global variable?",
    mathSolution: "Static local vs Global",
    codeSolution:
      "Static local: Visible only in function, retains value between calls\nGlobal: Visible everywhere in file\n\nint global = 10;  // Global\nvoid func() {\n    static int local = 5;  // Static local\n}",
    hint: "Both persist, but static local has function scope, global has file scope.",
  },
  {
    id: "cpp_function_21",
    topicId: "cpp_functions",
    question: "Write a function to check if a number is prime.",
    mathSolution: "Prime check function",
    codeSolution:
      '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nbool isPrime(int n) {\n    if(n <= 1) return false;\n    for(int i=2; i*i <= n; i++) {\n        if(n % i == 0) return false;\n    }\n    return true;\n}\n\nint main() {\n    int num = 17;\n    if(isPrime(num))\n        cout << num << " is prime" << endl;\n    else\n        cout << num << " is not prime" << endl;\n    return 0;\n}',
    hint: "Check divisibility from 2 to sqrt(n).",
  },
  {
    id: "cpp_function_22",
    topicId: "cpp_functions",
    question: "Write a function to find the maximum of three numbers.",
    mathSolution: "Max of three",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nint maxOfThree(int a, int b, int c) {\n    int max = a;\n    if(b > max) max = b;\n    if(c > max) max = c;\n    return max;\n}\n\nint main() {\n    cout << "Max = " << maxOfThree(10, 25, 15) << endl;\n    return 0;\n}',
    hint: "Compare each number with current max.",
  },
  {
    id: "cpp_function_23",
    topicId: "cpp_functions",
    question: "Write a function to calculate power (x^n).",
    mathSolution: "Power function",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nint power(int base, int exp) {\n    int result = 1;\n    for(int i=0; i<exp; i++) {\n        result *= base;\n    }\n    return result;\n}\n\nint main() {\n    cout << "2^5 = " << power(2, 5) << endl;\n    return 0;\n}',
    hint: "Multiply base by itself exp times.",
  },
  {
    id: "cpp_function_24",
    topicId: "cpp_functions",
    question: "Write a function to check if a number is palindrome.",
    mathSolution: "Palindrome function",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nbool isPalindrome(int num) {\n    int original = num;\n    int reversed = 0;\n    while(num > 0) {\n        reversed = reversed * 10 + num % 10;\n        num /= 10;\n    }\n    return original == reversed;\n}\n\nint main() {\n    int n = 121;\n    if(isPalindrome(n))\n        cout << n << " is palindrome" << endl;\n    else\n        cout << n << " is not palindrome" << endl;\n    return 0;\n}',
    hint: "Reverse the number and compare with original.",
  },
  {
    id: "cpp_function_25",
    topicId: "cpp_functions",
    question: "Write a function to find GCD of two numbers.",
    mathSolution: "GCD function",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nint gcd(int a, int b) {\n    while(b != 0) {\n        int temp = b;\n        b = a % b;\n        a = temp;\n    }\n    return a;\n}\n\nint main() {\n    cout << "GCD of 24 and 36 = " << gcd(24, 36) << endl;\n    return 0;\n}',
    hint: "Use Euclidean algorithm: gcd(a,b) = gcd(b, a%b)",
  },
  {
    id: "cpp_function_26",
    topicId: "cpp_functions",
    question: "Write a recursive function to find GCD.",
    mathSolution: "Recursive GCD",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nint gcd(int a, int b) {\n    if(b == 0) return a;\n    return gcd(b, a % b);\n}\n\nint main() {\n    cout << "GCD of 24 and 36 = " << gcd(24, 36) << endl;\n    return 0;\n}',
    hint: "Base case: if b==0 return a, else gcd(b, a%b)",
  },
  {
    id: "cpp_function_27",
    topicId: "cpp_functions",
    question: "Write a function to find LCM of two numbers.",
    mathSolution: "LCM function",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nint gcd(int a, int b) {\n    while(b != 0) {\n        int temp = b;\n        b = a % b;\n        a = temp;\n    }\n    return a;\n}\n\nint lcm(int a, int b) {\n    return (a * b) / gcd(a, b);\n}\n\nint main() {\n    cout << "LCM of 12 and 18 = " << lcm(12, 18) << endl;\n    return 0;\n}',
    hint: "LCM(a,b) = (a*b) / GCD(a,b)",
  },
  {
    id: "cpp_function_28",
    topicId: "cpp_functions",
    question: "What is a function pointer? Give example.",
    mathSolution: "Function pointer",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nint add(int a, int b) { return a + b; }\n\nint main() {\n    int (*funcPtr)(int, int) = &add;  // Function pointer\n    cout << "Sum = " << funcPtr(5, 3) << endl;\n    return 0;\n}',
    hint: "Function pointers store address of functions: returnType (*ptrName)(parameters)",
  },
  {
    id: "cpp_function_29",
    topicId: "cpp_functions",
    question: "Write a program to pass array to a function.",
    mathSolution: "Array as parameter",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nvoid printArray(int arr[], int size) {\n    for(int i=0; i<size; i++) {\n        cout << arr[i] << " ";\n    }\n    cout << endl;\n}\n\nint main() {\n    int numbers[] = {10, 20, 30, 40, 50};\n    int size = sizeof(numbers)/sizeof(numbers[0]);\n    printArray(numbers, size);\n    return 0;\n}',
    hint: "Pass array name and size to function.",
  },
  {
    id: "cpp_function_30",
    topicId: "cpp_functions",
    question: "Write a function to find sum of array elements.",
    mathSolution: "Array sum function",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nint sumArray(int arr[], int size) {\n    int sum = 0;\n    for(int i=0; i<size; i++) {\n        sum += arr[i];\n    }\n    return sum;\n}\n\nint main() {\n    int nums[] = {1, 2, 3, 4, 5};\n    int size = sizeof(nums)/sizeof(nums[0]);\n    cout << "Sum = " << sumArray(nums, size) << endl;\n    return 0;\n}',
    hint: "Iterate through array and accumulate sum.",
  },
  {
    id: "cpp_function_31",
    topicId: "cpp_functions",
    question: "Write a function to reverse an array.",
    mathSolution: "Reverse array function",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nvoid reverseArray(int arr[], int size) {\n    for(int i=0; i<size/2; i++) {\n        int temp = arr[i];\n        arr[i] = arr[size-1-i];\n        arr[size-1-i] = temp;\n    }\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    reverseArray(arr, size);\n    for(int i=0; i<size; i++) cout << arr[i] << " ";\n    return 0;\n}',
    hint: "Swap first with last, second with second-last, etc.",
  },
  {
    id: "cpp_function_32",
    topicId: "cpp_functions",
    question:
      "What is pass by pointer? How is it different from pass by reference?",
    mathSolution: "Pass by pointer",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nvoid byPointer(int *p) {\n    *p = 100;  // Changes original\n}\n\nvoid byReference(int &r) {\n    r = 200;   // Changes original\n}\n\nint main() {\n    int a = 10, b = 20;\n    byPointer(&a);\n    byReference(b);\n    cout << a << " " << b << endl;  // 100 200\n    return 0;\n}',
    hint: "Pointer passes address, reference is alias. Pointer can be NULL, reference cannot.",
  },
  {
    id: "cpp_function_33",
    topicId: "cpp_functions",
    question:
      "Write a function to return multiple values using pass by reference.",
    mathSolution: "Multiple returns",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nvoid calculate(int a, int b, int &sum, int &product) {\n    sum = a + b;\n    product = a * b;\n}\n\nint main() {\n    int s, p;\n    calculate(5, 3, s, p);\n    cout << "Sum = " << s << ", Product = " << p << endl;\n    return 0;\n}',
    hint: "Use reference parameters to return multiple values.",
  },
  {
    id: "cpp_function_34",
    topicId: "cpp_functions",
    question: "Write a function to check if a string is palindrome.",
    mathSolution: "String palindrome",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\n\nbool isPalindrome(string str) {\n    int left = 0, right = str.length() - 1;\n    while(left < right) {\n        if(str[left] != str[right])\n            return false;\n        left++;\n        right--;\n    }\n    return true;\n}\n\nint main() {\n    string s = "madam";\n    if(isPalindrome(s))\n        cout << s << " is palindrome" << endl;\n    else\n        cout << s << " is not palindrome" << endl;\n    return 0;\n}',
    hint: "Compare characters from both ends moving inward.",
  },
  {
    id: "cpp_function_35",
    topicId: "cpp_functions",
    question: "What is a lambda function in C++? Give example.",
    mathSolution: "Lambda function",
    codeSolution:
      '#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    // Lambda function\n    auto square = [](int x) { return x * x; };\n    cout << square(5) << endl;\n    \n    // Lambda in algorithm\n    vector<int> v = {1, 2, 3, 4, 5};\n    for_each(v.begin(), v.end(), [](int x) {\n        cout << x * 2 << " ";\n    });\n    return 0;\n}',
    hint: "Lambda: [capture](parameters){body} - anonymous function",
  },
  {
    id: "cpp_function_36",
    topicId: "cpp_functions",
    question: "Write a recursive function to calculate sum of digits.",
    mathSolution: "Sum of digits recursion",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nint sumOfDigits(int n) {\n    if(n == 0) return 0;\n    return (n % 10) + sumOfDigits(n / 10);\n}\n\nint main() {\n    cout << "Sum of digits of 12345 = " << sumOfDigits(12345) << endl;\n    return 0;\n}',
    hint: "Base case: n=0 return 0, Recursive: last digit + sum of rest",
  },
  {
    id: "cpp_function_37",
    topicId: "cpp_functions",
    question:
      "Write a function to find the nth Fibonacci number using recursion.",
    mathSolution: "Nth Fibonacci",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nint fib(int n) {\n    if(n <= 1) return n;\n    return fib(n-1) + fib(n-2);\n}\n\nint main() {\n    int n = 10;\n    cout << "Fibonacci number " << n << " = " << fib(n) << endl;\n    return 0;\n}',
    hint: "Base: n=0 return 0, n=1 return 1. Recursive: fib(n-1)+fib(n-2)",
  },
  {
    id: "cpp_function_38",
    topicId: "cpp_functions",
    question: "Write a function to check if a number is Armstrong number.",
    mathSolution: "Armstrong number",
    codeSolution:
      '#include <iostream>\n#include <cmath>\nusing namespace std;\n\nbool isArmstrong(int n) {\n    int original = n, sum = 0;\n    int digits = to_string(n).length();\n    while(n > 0) {\n        int digit = n % 10;\n        sum += pow(digit, digits);\n        n /= 10;\n    }\n    return original == sum;\n}\n\nint main() {\n    int num = 153;\n    if(isArmstrong(num))\n        cout << num << " is Armstrong number" << endl;\n    else\n        cout << num << " is not Armstrong" << endl;\n    return 0;\n}',
    hint: "Sum of each digit raised to power of number of digits equals original.",
  },
  {
    id: "cpp_function_39",
    topicId: "cpp_functions",
    question: "What is function template? Give example.",
    mathSolution: "Function template",
    codeSolution:
      "#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nT maximum(T a, T b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    cout << maximum(10, 20) << endl;        // int\n    cout << maximum(3.5, 2.7) << endl;      // double\n    cout << maximum('A', 'B') << endl;      // char\n    return 0;\n}",
    hint: "Templates allow writing generic functions that work with any data type.",
  },
  {
    id: "cpp_function_40",
    topicId: "cpp_functions",
    question: "Write a function template to swap two values.",
    mathSolution: "Swap template",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nvoid mySwap(T &a, T &b) {\n    T temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 5, y = 10;\n    mySwap(x, y);\n    cout << "x=" << x << ", y=" << y << endl;\n    \n    double p = 3.5, q = 7.2;\n    mySwap(p, q);\n    cout << "p=" << p << ", q=" << q << endl;\n    return 0;\n}',
    hint: "Template works for any type: int, double, string, etc.",
  },
  {
    id: "cpp_function_41",
    topicId: "cpp_functions",
    question: "What is a const parameter? Why use it?",
    mathSolution: "Const parameters",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nvoid display(const int &x) {\n    // x = 10;  // Error: cannot modify const\n    cout << "Value: " << x << endl;\n}\n\nint main() {\n    int a = 5;\n    display(a);\n    return 0;\n}',
    hint: "const parameters promise not to modify the argument, good for read-only access.",
  },
  {
    id: "cpp_function_42",
    topicId: "cpp_functions",
    question: "Write a function to count vowels in a string.",
    mathSolution: "Count vowels",
    codeSolution:
      "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\n\nint countVowels(string str) {\n    int count = 0;\n    for(char c : str) {\n        c = tolower(c);\n        if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')\n            count++;\n    }\n    return count;\n}\n\nint main() {\n    string s = \"Hello World\";\n    cout << \"Vowels: \" << countVowels(s) << endl;\n    return 0;\n}",
    hint: "Convert to lowercase and check each character.",
  },
  {
    id: "cpp_function_43",
    topicId: "cpp_functions",
    question: "Write a function to check if a number is perfect number.",
    mathSolution: "Perfect number",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nbool isPerfect(int n) {\n    if(n <= 1) return false;\n    int sum = 1;  // 1 is always divisor\n    for(int i=2; i*i <= n; i++) {\n        if(n % i == 0) {\n            sum += i;\n            if(i != n/i) sum += n/i;\n        }\n    }\n    return sum == n;\n}\n\nint main() {\n    int num = 28;\n    if(isPerfect(num))\n        cout << num << " is perfect number" << endl;\n    else\n        cout << num << " is not perfect" << endl;\n    return 0;\n}',
    hint: "Sum of proper divisors (excluding itself) equals the number.",
  },
  {
    id: "cpp_function_44",
    topicId: "cpp_functions",
    question: "Write a function to convert decimal to binary.",
    mathSolution: "Decimal to binary",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\n\nstring decimalToBinary(int n) {\n    if(n == 0) return "0";\n    string binary = "";\n    while(n > 0) {\n        binary = (char)((n % 2) + \'0\') + binary;\n        n /= 2;\n    }\n    return binary;\n}\n\nint main() {\n    int num = 42;\n    cout << "Binary of " << num << " = " << decimalToBinary(num) << endl;\n    return 0;\n}',
    hint: "Repeatedly divide by 2, collect remainders in reverse.",
  },
  {
    id: "cpp_function_45",
    topicId: "cpp_functions",
    question: "Write a recursive function to print numbers from n to 1.",
    mathSolution: "Print descending",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nvoid printDesc(int n) {\n    if(n == 0) return;\n    cout << n << " ";\n    printDesc(n - 1);\n}\n\nint main() {\n    printDesc(5);\n    return 0;\n}',
    hint: "Print n then recursively call with n-1.",
  },
  {
    id: "cpp_function_46",
    topicId: "cpp_functions",
    question: "Write a recursive function to print numbers from 1 to n.",
    mathSolution: "Print ascending",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nvoid printAsc(int n) {\n    if(n == 0) return;\n    printAsc(n - 1);\n    cout << n << " ";\n}\n\nint main() {\n    printAsc(5);\n    return 0;\n}',
    hint: "Recursively call first, then print after returning.",
  },
  {
    id: "cpp_function_47",
    topicId: "cpp_functions",
    question: "What is a friend function? Give example.",
    mathSolution: "Friend function",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass MyClass {\nprivate:\n    int secret;\npublic:\n    MyClass(int s) : secret(s) {}\n    friend void showSecret(MyClass &obj);  // Friend function\n};\n\nvoid showSecret(MyClass &obj) {\n    cout << "Secret: " << obj.secret << endl;  // Access private member\n}\n\nint main() {\n    MyClass obj(42);\n    showSecret(obj);\n    return 0;\n}',
    hint: "Friend function can access private members of class.",
  },
  {
    id: "cpp_function_48",
    topicId: "cpp_functions",
    question:
      "Write a function to find the first non-repeating character in a string.",
    mathSolution: "First non-repeating",
    codeSolution:
      '#include <iostream>\n#include <string>\n#include <unordered_map>\nusing namespace std;\n\nchar firstNonRepeating(string str) {\n    unordered_map<char, int> freq;\n    for(char c : str) freq[c]++;\n    for(char c : str) {\n        if(freq[c] == 1) return c;\n    }\n    return \'\\0\';\n}\n\nint main() {\n    string s = "swiss";\n    char result = firstNonRepeating(s);\n    if(result != \'\\0\')\n        cout << "First non-repeating: " << result << endl;\n    else\n        cout << "No non-repeating character" << endl;\n    return 0;\n}',
    hint: "Count frequencies, then find first character with count 1.",
  },
  {
    id: "cpp_function_49",
    topicId: "cpp_functions",
    question: "Write a function to find the longest word in a sentence.",
    mathSolution: "Longest word",
    codeSolution:
      '#include <iostream>\n#include <string>\n#include <sstream>\nusing namespace std;\n\nstring longestWord(string sentence) {\n    stringstream ss(sentence);\n    string word, longest;\n    while(ss >> word) {\n        if(word.length() > longest.length()) {\n            longest = word;\n        }\n    }\n    return longest;\n}\n\nint main() {\n    string s = "The quick brown fox jumps over the lazy dog";\n    cout << "Longest word: " << longestWord(s) << endl;\n    return 0;\n}',
    hint: "Split into words using stringstream, track longest.",
  },
  {
    id: "cpp_function_50",
    topicId: "cpp_functions",
    question:
      "Write a program with multiple functions to demonstrate a menu-driven calculator.",
    mathSolution: "Calculator with functions",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\ndouble add(double a, double b) { return a + b; }\ndouble subtract(double a, double b) { return a - b; }\ndouble multiply(double a, double b) { return a * b; }\ndouble divide(double a, double b) { \n    if(b != 0) return a / b;\n    else {\n        cout << "Cannot divide by zero! ";\n        return 0;\n    }\n}\n\nint main() {\n    int choice;\n    double x, y;\n    \n    do {\n        cout << "\\nCalculator Menu:" << endl;\n        cout << "1. Add" << endl;\n        cout << "2. Subtract" << endl;\n        cout << "3. Multiply" << endl;\n        cout << "4. Divide" << endl;\n        cout << "0. Exit" << endl;\n        cout << "Enter choice: ";\n        cin >> choice;\n        \n        if(choice >= 1 && choice <= 4) {\n            cout << "Enter two numbers: ";\n            cin >> x >> y;\n        }\n        \n        switch(choice) {\n            case 1: cout << "Result: " << add(x, y) << endl; break;\n            case 2: cout << "Result: " << subtract(x, y) << endl; break;\n            case 3: cout << "Result: " << multiply(x, y) << endl; break;\n            case 4: cout << "Result: " << divide(x, y) << endl; break;\n            case 0: cout << "Exiting..." << endl; break;\n            default: cout << "Invalid choice!" << endl;\n        }\n    } while(choice != 0);\n    \n    return 0;\n}',
    hint: "Create separate functions for each operation, call based on menu choice.",
  },
);
