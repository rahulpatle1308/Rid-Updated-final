QuizData.questions.push(
  {
    id: "cpp_operator_1",
    topicId: "cpp_operators",
    question: "What are operators in C++? Explain with example.",
    mathSolution: "Operators concept",
    codeSolution:
      "Operators are symbols that perform operations on operands.\nExample:\nint sum = 10 + 20;  // + is operator, 10 and 20 are operands",
    hint: "Operators are symbols like +, -, *, / that perform operations on data.",
  },
  {
    id: "cpp_operator_2",
    topicId: "cpp_operators",
    question: "What are the different types of operators in C++?",
    mathSolution: "Operator types",
    codeSolution:
      "1. Arithmetic operators\n2. Relational operators\n3. Logical operators\n4. Assignment operators\n5. Increment/Decrement\n6. Bitwise operators\n7. Ternary operator\n8. sizeof operator",
    hint: "There are 8 main categories: arithmetic, relational, logical, assignment, inc/dec, bitwise, ternary, sizeof.",
  },
  {
    id: "cpp_operator_3",
    topicId: "cpp_operators",
    question: "List all arithmetic operators in C++ with examples.",
    mathSolution: "Arithmetic operators",
    codeSolution:
      "+  Addition       a + b\n-  Subtraction    a - b\n*  Multiplication a * b\n/  Division       a / b\n%  Modulus        a % b (remainder)",
    hint: "5 arithmetic operators: + - * / %",
  },
  {
    id: "cpp_operator_4",
    topicId: "cpp_operators",
    question: "Write a program to demonstrate all arithmetic operators.",
    mathSolution: "Arithmetic demo",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a = 15, b = 4;\n    cout << "a + b = " << a + b << endl;\n    cout << "a - b = " << a - b << endl;\n    cout << "a * b = " << a * b << endl;\n    cout << "a / b = " << a / b << endl;\n    cout << "a % b = " << a % b << endl;\n    return 0;\n}',
    hint: "Use two integers to show all arithmetic operations.",
  },
  {
    id: "cpp_operator_5",
    topicId: "cpp_operators",
    question: "What is the difference between / and % operators?",
    mathSolution: "Division vs Modulus",
    codeSolution:
      "/ gives quotient, % gives remainder.\n\nint a = 17, b = 5;\nint quotient = a / b;   // 3\nint remainder = a % b;  // 2",
    hint: "/ gives how many times, % gives what's left over.",
  },
  {
    id: "cpp_operator_6",
    topicId: "cpp_operators",
    question: "List all relational operators in C++ with examples.",
    mathSolution: "Relational operators",
    codeSolution:
      "==  Equal to          (5 == 5) true\n!=  Not equal to      (5 != 3) true\n>   Greater than      (5 > 3) true\n<   Less than         (3 < 5) true\n>=  Greater than/equal (5 >= 5) true\n<=  Less than/equal   (3 <= 5) true",
    hint: "6 relational operators: ==, !=, >, <, >=, <= - return boolean.",
  },
  {
    id: "cpp_operator_7",
    topicId: "cpp_operators",
    question: "Write a program to demonstrate relational operators.",
    mathSolution: "Relational demo",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a = 10, b = 20;\n    cout << "a == b: " << (a == b) << endl;\n    cout << "a != b: " << (a != b) << endl;\n    cout << "a > b: " << (a > b) << endl;\n    cout << "a < b: " << (a < b) << endl;\n    cout << "a >= b: " << (a >= b) << endl;\n    cout << "a <= b: " << (a <= b) << endl;\n    return 0;\n}',
    hint: "Compare two variables using all relational operators.",
  },
  {
    id: "cpp_operator_8",
    topicId: "cpp_operators",
    question: "What are logical operators? List them with examples.",
    mathSolution: "Logical operators",
    codeSolution:
      "&&  Logical AND  (a>b && b>c) both true then true\n||  Logical OR   (a>b || b>c) at least one true then true\n!   Logical NOT  !(a>b) reverses result",
    hint: "3 logical operators: && (AND), || (OR), ! (NOT)",
  },
  {
    id: "cpp_operator_9",
    topicId: "cpp_operators",
    question: "Write a program to demonstrate logical operators.",
    mathSolution: "Logical demo",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a = 10, b = 20, c = 30;\n    cout << "(a<b && b<c): " << (a<b && b<c) << endl;\n    cout << "(a>b || b<c): " << (a>b || b<c) << endl;\n    cout << "!(a>b): " << !(a>b) << endl;\n    return 0;\n}',
    hint: "Combine conditions using && (both true), || (at least one true), ! (negation).",
  },
  {
    id: "cpp_operator_10",
    topicId: "cpp_operators",
    question: "What are assignment operators? List them.",
    mathSolution: "Assignment operators",
    codeSolution:
      "=   a = b\n+=  a += b  (a = a + b)\n-=  a -= b  (a = a - b)\n*=  a *= b  (a = a * b)\n/=  a /= b  (a = a / b)\n%=  a %= b  (a = a % b)",
    hint: "Assignment operators combine assignment with arithmetic: +=, -=, *=, /=, %=",
  },
  {
    id: "cpp_operator_11",
    topicId: "cpp_operators",
    question: "Write a program to demonstrate assignment operators.",
    mathSolution: "Assignment demo",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a = 10;\n    cout << "a = " << a << endl;\n    a += 5;  cout << "a += 5: " << a << endl;\n    a -= 3;  cout << "a -= 3: " << a << endl;\n    a *= 2;  cout << "a *= 2: " << a << endl;\n    a /= 4;  cout << "a /= 4: " << a << endl;\n    a %= 3;  cout << "a %= 3: " << a << endl;\n    return 0;\n}',
    hint: "Start with a value and apply each compound operator sequentially.",
  },
  {
    id: "cpp_operator_12",
    topicId: "cpp_operators",
    question: "What is the difference between = and == operators?",
    mathSolution: "Assignment vs Equality",
    codeSolution:
      '= is assignment operator (assigns value)\n== is equality operator (compares values)\n\nint x = 5;     // Assignment\nif(x == 5)     // Equality check\n    cout << "Equal";',
    hint: "= assigns value, == checks if values are equal.",
  },
  {
    id: "cpp_operator_13",
    topicId: "cpp_operators",
    question: "Explain increment and decrement operators with examples.",
    mathSolution: "++ and --",
    codeSolution:
      "++ increments by 1, -- decrements by 1\n\nPrefix:  ++x (increment then use)\nPostfix: x++ (use then increment)\n\nint x = 5;\ncout << ++x;  // 6\ncout << x++;  // 6 then x becomes 7",
    hint: "Prefix (++x): change then use, Postfix (x++): use then change.",
  },
  {
    id: "cpp_operator_14",
    topicId: "cpp_operators",
    question: "Write a program to demonstrate prefix and postfix increment.",
    mathSolution: "Prefix vs Postfix",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5, b = 5;\n    cout << "Prefix ++a: " << ++a << endl;  // 6\n    cout << "Postfix b++: " << b++ << endl; // 5\n    cout << "Now b is: " << b << endl;      // 6\n    return 0;\n}',
    hint: "Prefix increments before using value, postfix increments after.",
  },
  {
    id: "cpp_operator_15",
    topicId: "cpp_operators",
    question: "What is the ternary operator? Give example.",
    mathSolution: "Conditional operator",
    codeSolution:
      "Ternary operator ?: is shorthand for if-else.\nSyntax: condition ? expression1 : expression2\n\nint max = (a > b) ? a : b;  // Returns larger of a,b",
    hint: "condition ? value_if_true : value_if_false",
  },
  {
    id: "cpp_operator_16",
    topicId: "cpp_operators",
    question: "Write a program using ternary operator to find even/odd.",
    mathSolution: "Ternary example",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int num = 7;\n    string result = (num % 2 == 0) ? "Even" : "Odd";\n    cout << num << " is " << result << endl;\n    return 0;\n}',
    hint: "Use (num % 2 == 0) as condition for even/odd.",
  },
  {
    id: "cpp_operator_17",
    topicId: "cpp_operators",
    question: "What are bitwise operators? List them.",
    mathSolution: "Bitwise operators",
    codeSolution:
      "&  AND    (bitwise AND)\n|  OR     (bitwise OR)\n^  XOR    (bitwise XOR)\n~  NOT    (bitwise complement)\n<< Left shift\n>> Right shift",
    hint: "6 bitwise operators: & (AND), | (OR), ^ (XOR), ~ (NOT), << (left shift), >> (right shift)",
  },
  {
    id: "cpp_operator_18",
    topicId: "cpp_operators",
    question: "Explain bitwise AND (&) operator with example.",
    mathSolution: "Bitwise AND",
    codeSolution:
      'AND compares each bit: 1&1=1, else 0\n\nint a = 5;  // 0101\nint b = 3;  // 0011\nint c = a & b;  // 0001 = 1\ncout << "5 & 3 = " << c;',
    hint: "Both bits must be 1 to get 1, otherwise 0.",
  },
  {
    id: "cpp_operator_19",
    topicId: "cpp_operators",
    question: "Explain bitwise OR (|) operator with example.",
    mathSolution: "Bitwise OR",
    codeSolution:
      'OR compares each bit: 0|0=0, else 1\n\nint a = 5;  // 0101\nint b = 3;  // 0011\nint c = a | b;  // 0111 = 7\ncout << "5 | 3 = " << c;',
    hint: "At least one bit must be 1 to get 1.",
  },
  {
    id: "cpp_operator_20",
    topicId: "cpp_operators",
    question: "Explain bitwise XOR (^) operator with example.",
    mathSolution: "Bitwise XOR",
    codeSolution:
      'XOR: 1 if bits different, 0 if same\n\nint a = 5;  // 0101\nint b = 3;  // 0011\nint c = a ^ b;  // 0110 = 6\ncout << "5 ^ 3 = " << c;',
    hint: "XOR gives 1 when bits are different, 0 when same.",
  },
  {
    id: "cpp_operator_21",
    topicId: "cpp_operators",
    question: "Explain left shift (<<) operator with example.",
    mathSolution: "Left shift",
    codeSolution:
      'Shifts bits left, multiplies by 2^n\n\nint a = 5;  // 0101 (5)\nint b = a << 1;  // 1010 (10)\nint c = a << 2;  // 10100 (20)\ncout << "5<<1 = " << b << ", 5<<2 = " << c;',
    hint: "Left shift by n multiplies by 2^n.",
  },
  {
    id: "cpp_operator_22",
    topicId: "cpp_operators",
    question: "Explain right shift (>>) operator with example.",
    mathSolution: "Right shift",
    codeSolution:
      'Shifts bits right, divides by 2^n\n\nint a = 20;  // 10100 (20)\nint b = a >> 1;  // 01010 (10)\nint c = a >> 2;  // 00101 (5)\ncout << "20>>1 = " << b << ", 20>>2 = " << c;',
    hint: "Right shift by n divides by 2^n.",
  },
  {
    id: "cpp_operator_23",
    topicId: "cpp_operators",
    question: "What is the sizeof operator? Give example.",
    mathSolution: "sizeof operator",
    codeSolution:
      "sizeof returns size in bytes of a data type or variable.\n\ncout << sizeof(int) << endl;     // 4\ncout << sizeof(double) << endl;  // 8\nint arr[10];\ncout << sizeof(arr);  // 40 (10*4)",
    hint: "sizeof tells how many bytes a type or variable uses in memory.",
  },
  {
    id: "cpp_operator_24",
    topicId: "cpp_operators",
    question: "What is operator precedence? Give example.",
    mathSolution: "Precedence",
    codeSolution:
      "Precedence determines which operator executes first.\n\nint result = 5 + 3 * 2;  // 11 (not 16)\n// * has higher precedence than +\n// Use parentheses to override: (5+3)*2 = 16",
    hint: "Operators with higher precedence are evaluated first, like * before +.",
  },
  {
    id: "cpp_operator_25",
    topicId: "cpp_operators",
    question: "What is operator associativity? Give example.",
    mathSolution: "Associativity",
    codeSolution:
      "Associativity determines order when operators have same precedence.\n\nint a = b = c = 10;  // Right to left associativity\n// c=10, then b=c, then a=b",
    hint: "When precedence is same, associativity (left-to-right or right-to-left) decides order.",
  },
  {
    id: "cpp_operator_26",
    topicId: "cpp_operators",
    question: "Write a program to swap two numbers using XOR operator.",
    mathSolution: "XOR swap",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5, b = 10;\n    cout << "Before: a=" << a << ", b=" << b << endl;\n    a = a ^ b;\n    b = a ^ b;\n    a = a ^ b;\n    cout << "After: a=" << a << ", b=" << b << endl;\n    return 0;\n}',
    hint: "XOR swap: a = a^b; b = a^b; a = a^b; (no temporary variable needed)",
  },
  {
    id: "cpp_operator_27",
    topicId: "cpp_operators",
    question: "What is the comma operator? Give example.",
    mathSolution: "Comma operator",
    codeSolution:
      'Comma evaluates multiple expressions, returns last value.\n\nint x = (5, 10, 15);  // x = 15\n\nfor(int i=0, j=10; i<5; i++, j--) {\n    cout << i << "-" << j << endl;\n}',
    hint: "Comma separates expressions, returns value of the last one.",
  },
  {
    id: "cpp_operator_28",
    topicId: "cpp_operators",
    question: "What is the difference between & and && operators?",
    mathSolution: "Bitwise AND vs Logical AND",
    codeSolution:
      "& is bitwise AND (operates on bits)\n&& is logical AND (operates on boolean)\n\nint a = 5 & 3;    // 1 (bitwise)\nbool b = (5>3) && (10>5);  // true (logical)",
    hint: "& works on bits, && works on boolean conditions.",
  },
  {
    id: "cpp_operator_29",
    topicId: "cpp_operators",
    question: "What is the difference between | and || operators?",
    mathSolution: "Bitwise OR vs Logical OR",
    codeSolution:
      "| is bitwise OR\n|| is logical OR\n\nint a = 5 | 3;     // 7 (bitwise)\nbool b = (5>3) || (3>10);  // true (logical)",
    hint: "| works on bits, || works on boolean conditions.",
  },
  {
    id: "cpp_operator_30",
    topicId: "cpp_operators",
    question:
      "Write a program to check if a number is power of 2 using bitwise operator.",
    mathSolution: "Power of 2 check",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int n = 16;\n    if(n > 0 && (n & (n-1)) == 0)\n        cout << n << " is power of 2";\n    else\n        cout << n << " is not power of 2";\n    return 0;\n}',
    hint: "Powers of 2 have only one bit set: n & (n-1) equals 0.",
  },
  {
    id: "cpp_operator_31",
    topicId: "cpp_operators",
    question:
      "Write a program to count set bits (1s) in a number using bitwise operator.",
    mathSolution: "Count set bits",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int n = 29;  // 11101 (4 set bits)\n    int count = 0;\n    while(n) {\n        count += n & 1;\n        n >>= 1;\n    }\n    cout << "Set bits: " << count << endl;\n    return 0;\n}',
    hint: "Check last bit using &1, then right shift until number becomes 0.",
  },
  {
    id: "cpp_operator_32",
    topicId: "cpp_operators",
    question: "What is the NOT (!) operator? Give example.",
    mathSolution: "Logical NOT",
    codeSolution:
      '! reverses boolean value.\n\nbool flag = true;\ncout << !flag;  // 0 (false)\n\nint x = 0;\nif(!x)  // true (0 is false, !0 is true)\n    cout << "Zero";',
    hint: "! converts true to false, false to true, and non-zero to 0.",
  },
  {
    id: "cpp_operator_33",
    topicId: "cpp_operators",
    question: "What is the bitwise NOT (~) operator? Give example.",
    mathSolution: "Bitwise complement",
    codeSolution:
      '~ inverts all bits (1s complement).\n\nint a = 5;      // 00000101\nint b = ~a;     // 11111010 (-6 in 2s complement)\ncout << "~5 = " << b;  // -6',
    hint: "~ flips all bits: 0 to 1, 1 to 0 (ones complement).",
  },
  {
    id: "cpp_operator_34",
    topicId: "cpp_operators",
    question:
      "Write a program to find largest of three numbers using ternary operator.",
    mathSolution: "Max of three",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a=10, b=25, c=15;\n    int max = (a>b) ? ((a>c)?a:c) : ((b>c)?b:c);\n    cout << "Largest: " << max << endl;\n    return 0;\n}',
    hint: "Nested ternary: compare a with b, then compare winner with c.",
  },
  {
    id: "cpp_operator_35",
    topicId: "cpp_operators",
    question: "What is the address-of operator (&)? Give example.",
    mathSolution: "Address operator",
    codeSolution:
      '& returns memory address of a variable.\n\nint x = 10;\ncout << "Value: " << x << endl;\ncout << "Address: " << &x << endl;',
    hint: "& gives the memory location where variable is stored.",
  },
  {
    id: "cpp_operator_36",
    topicId: "cpp_operators",
    question: "What is the dereference operator (*)? Give example.",
    mathSolution: "Dereference operator",
    codeSolution:
      "* accesses value at a pointer address.\n\nint x = 10;\nint* ptr = &x;\ncout << *ptr;  // 10 (value at address)",
    hint: "* on a pointer gives the value stored at that address.",
  },
  {
    id: "cpp_operator_37",
    topicId: "cpp_operators",
    question: "Write a program to demonstrate pointer operators (& and *).",
    mathSolution: "Pointer demo",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int x = 42;\n    int* ptr = &x;\n    \n    cout << "x = " << x << endl;\n    cout << "&x = " << &x << endl;\n    cout << "ptr = " << ptr << endl;\n    cout << "*ptr = " << *ptr << endl;\n    \n    *ptr = 100;  // Change x via pointer\n    cout << "New x = " << x << endl;\n    return 0;\n}',
    hint: "& gets address, * gets value at address, *ptr = value changes original.",
  },
  {
    id: "cpp_operator_38",
    topicId: "cpp_operators",
    question: "What is the scope resolution operator (::)? Give example.",
    mathSolution: "Scope resolution",
    codeSolution:
      ':: accesses global variable when local exists, or class members.\n\nint x = 100;  // Global\nint main() {\n    int x = 50;  // Local\n    cout << "Local: " << x << endl;\n    cout << "Global: " << ::x << endl;\n    return 0;\n}',
    hint: ":: accesses global variable when shadowed by local variable.",
  },
  {
    id: "cpp_operator_39",
    topicId: "cpp_operators",
    question: "What is the member access operator (.)? Give example.",
    mathSolution: "Dot operator",
    codeSolution:
      ". accesses members of structure/class.\n\nstruct Point {\n    int x, y;\n};\n\nPoint p;\np.x = 10;  // Dot operator\np.y = 20;",
    hint: "Use . to access members of a struct/class object.",
  },
  {
    id: "cpp_operator_40",
    topicId: "cpp_operators",
    question: "What is the arrow operator (->)? Give example.",
    mathSolution: "Arrow operator",
    codeSolution:
      "-> accesses members through pointer to structure/class.\n\nstruct Point { int x, y; };\nPoint p;\nPoint* ptr = &p;\nptr->x = 10;  // Arrow operator\nptr->y = 20;",
    hint: "Use -> to access members through a pointer, equivalent to (*ptr).member.",
  },
  {
    id: "cpp_operator_41",
    topicId: "cpp_operators",
    question: "Write a program to demonstrate new and delete operators.",
    mathSolution: "Dynamic memory",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int* p = new int;      // Allocate memory\n    *p = 25;\n    cout << "Value: " << *p << endl;\n    delete p;               // Free memory\n    \n    int* arr = new int[5];  // Array allocation\n    delete[] arr;           // Free array\n    return 0;\n}',
    hint: "new allocates, delete frees memory. Use delete[] for arrays.",
  },
  {
    id: "cpp_operator_42",
    topicId: "cpp_operators",
    question: "What is typeid operator? Give example.",
    mathSolution: "Type identification",
    codeSolution:
      'typeid returns type information of expression (need <typeinfo>).\n\n#include <typeinfo>\nint a = 10;\ncout << typeid(a).name();  // "int" (implementation dependent)',
    hint: "typeid tells you the type of an expression, need #include <typeinfo>.",
  },
  {
    id: "cpp_operator_43",
    topicId: "cpp_operators",
    question:
      "Write a program to evaluate expression with operator precedence.",
    mathSolution: "Precedence example",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int result = 5 + 3 * 4 - 8 / 2;\n    // 5 + 12 - 4 = 13\n    cout << "5 + 3 * 4 - 8 / 2 = " << result << endl;\n    \n    result = (5 + 3) * 4 - 8 / 2;\n    // 8 * 4 - 4 = 28\n    cout << "(5 + 3) * 4 - 8 / 2 = " << result << endl;\n    return 0;\n}',
    hint: "* and / have higher precedence than + and -. Parentheses override precedence.",
  },
  {
    id: "cpp_operator_44",
    topicId: "cpp_operators",
    question: "What is the cast operator? Give example.",
    mathSolution: "Type casting",
    codeSolution:
      'Casts convert one type to another.\n\nfloat x = 10.7;\nint y = static_cast<int>(x);  // C++ cast\nint z = (int)x;                // C-style cast\ncout << y << " " << z;  // 10 10',
    hint: "Casts convert between types: (type)value or static_cast<type>(value).",
  },
  {
    id: "cpp_operator_45",
    topicId: "cpp_operators",
    question: "Write a program to check odd/even using bitwise operator.",
    mathSolution: "Bitwise parity check",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int n = 7;\n    if(n & 1)\n        cout << n << " is odd";\n    else\n        cout << n << " is even";\n    return 0;\n}',
    hint: "Check least significant bit: if n&1 is 1, number is odd.",
  },
  {
    id: "cpp_operator_46",
    topicId: "cpp_operators",
    question:
      "Write a program to multiply and divide by 2 using shift operators.",
    mathSolution: "Shift for multiplication",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int n = 8;\n    cout << n << " * 2 = " << (n << 1) << endl;\n    cout << n << " * 4 = " << (n << 2) << endl;\n    cout << n << " / 2 = " << (n >> 1) << endl;\n    cout << n << " / 4 = " << (n >> 2) << endl;\n    return 0;\n}',
    hint: "Left shift (<<) multiplies by 2^n, right shift (>>) divides by 2^n.",
  },
  {
    id: "cpp_operator_47",
    topicId: "cpp_operators",
    question: "What is the throw operator? Give example.",
    mathSolution: "Exception throwing",
    codeSolution:
      'throw signals an exception.\n\nint divide(int a, int b) {\n    if(b == 0)\n        throw "Division by zero!";\n    return a / b;\n}',
    hint: "throw is used to signal exceptions that can be caught by catch blocks.",
  },
  {
    id: "cpp_operator_48",
    topicId: "cpp_operators",
    question: "Write a program using compound assignment operators.",
    mathSolution: "Compound assignment",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a = 10;\n    a += 5;   cout << "a+=5: " << a << endl;  // 15\n    a -= 3;   cout << "a-=3: " << a << endl;  // 12\n    a *= 2;   cout << "a*=2: " << a << endl;  // 24\n    a /= 4;   cout << "a/=4: " << a << endl;  // 6\n    a %= 4;   cout << "a%=4: " << a << endl;  // 2\n    a <<= 1;  cout << "a<<=1: " << a << endl; // 4\n    a >>= 1;  cout << "a>>=1: " << a << endl; // 2\n    a &= 3;   cout << "a&=3: " << a << endl;  // 2 & 3 = 2\n    a |= 1;   cout << "a|=1: " << a << endl;  // 2 | 1 = 3\n    return 0;\n}',
    hint: "Compound operators combine operation with assignment: +=, -=, *=, /=, %=, <<=, >>=, &=, |=",
  },
  {
    id: "cpp_operator_49",
    topicId: "cpp_operators",
    question: "What is the difference between prefix and postfix decrement?",
    mathSolution: "Prefix vs Postfix --",
    codeSolution:
      "Prefix --x: decrement then use\nPostfix x--: use then decrement\n\nint x = 5, y = 5;\ncout << --x;  // 4 (x becomes 4)\ncout << y--;  // 5 (then y becomes 4)\ncout << x << y;  // 4 4",
    hint: "--x decrements first then returns value, x-- returns value then decrements.",
  },
  {
    id: "cpp_operator_50",
    topicId: "cpp_operators",
    question: "Write a program to demonstrate all bitwise operators.",
    mathSolution: "Complete bitwise demo",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5, b = 3;  // a=0101, b=0011\n    cout << "a & b = " << (a & b) << endl;  // 0001 = 1\n    cout << "a | b = " << (a | b) << endl;  // 0111 = 7\n    cout << "a ^ b = " << (a ^ b) << endl;  // 0110 = 6\n    cout << "~a = " << (~a) << endl;         // 11111010 = -6\n    cout << "a << 1 = " << (a << 1) << endl; // 1010 = 10\n    cout << "a >> 1 = " << (a >> 1) << endl; // 0010 = 2\n    return 0;\n}',
    hint: "Try all bitwise operators: &, |, ^, ~, <<, >> on same numbers.",
  },
);
