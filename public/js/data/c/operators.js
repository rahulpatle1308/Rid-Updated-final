QuizData.questions.push(
  // ============ LEVEL 1: ARITHMETIC OPERATORS (1-10) ============
  {
    id: 'c_operators_001',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate arithmetic operators: +, -, *, /, %.',
    mathSolution: 'Basic arithmetic operations',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 15, b = 4;\n    \n    printf("a = %d, b = %d\\n", a, b);\n    printf("Addition (a + b) = %d\\n", a + b);\n    printf("Subtraction (a - b) = %d\\n", a - b);\n    printf("Multiplication (a * b) = %d\\n", a * b);\n    printf("Division (a / b) = %d (integer division)\\n", a / b);\n    printf("Modulus (a %% b) = %d (remainder)\\n", a % b);\n    \n    return 0;\n}',
    hint: 'Arithmetic operators: + (addition), - (subtraction), * (multiplication), / (division), % (modulus/remainder)'
  },
  {
    id: 'c_operators_002',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate integer division vs float division.',
    mathSolution: 'Integer vs float division',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 3;\n    float x = 10.0f, y = 3.0f;\n    \n    printf("Integer division: %d / %d = %d\\n", a, b, a / b);\n    printf("Float division: %.1f / %.1f = %.2f\\n", x, y, x / y);\n    \n    // Mixed type division\n    printf("Mixed division (int/float): %d / %.1f = %.2f\\n", a, y, a / y);\n    printf("Mixed division (float/int): %.1f / %d = %.2f\\n", x, b, x / b);\n    \n    return 0;\n}',
    hint: 'Integer division truncates toward zero; float division gives decimal results'
  },
  {
    id: 'c_operators_003',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate modulus operator with positive and negative numbers.',
    mathSolution: 'Modulus with negative numbers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("10 %% 3 = %d\\n", 10 % 3);\n    printf("10 %% -3 = %d\\n", 10 % -3);\n    printf("-10 %% 3 = %d\\n", -10 % 3);\n    printf("-10 %% -3 = %d\\n", -10 % -3);\n    \n    printf("\\nNote: Modulus result has same sign as dividend\\n");\n    \n    return 0;\n}',
    hint: 'In C, modulus result has the same sign as the dividend (left operand)'
  },
  {
    id: 'c_operators_004',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate operator precedence in arithmetic expressions.',
    mathSolution: 'Operator precedence',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5, b = 3, c = 2;\n    \n    printf("a = %d, b = %d, c = %d\\n", a, b, c);\n    printf("a + b * c = %d (multiplication first)\\n", a + b * c);\n    printf("(a + b) * c = %d (parentheses change order)\\n", (a + b) * c);\n    printf("a * b / c = %d (left to right for same precedence)\\n", a * b / c);\n    printf("a / b * c = %d (left to right)\\n", a / b * c);\n    \n    return 0;\n}',
    hint: 'Operator precedence: * / % have higher precedence than + -. Use parentheses for clarity'
  },
  {
    id: 'c_operators_005',
    topicId: 'c_operators',
    question: 'Write a program to calculate area and perimeter of rectangle using arithmetic operators.',
    mathSolution: 'Rectangle area and perimeter',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float length, width, area, perimeter;\n    \n    printf("Enter length of rectangle: ");\n    scanf("%f", &length);\n    printf("Enter width of rectangle: ");\n    scanf("%f", &width);\n    \n    area = length * width;\n    perimeter = 2 * (length + width);\n    \n    printf("\\nLength = %.2f, Width = %.2f\\n", length, width);\n    printf("Area = %.2f square units\\n", area);\n    printf("Perimeter = %.2f units\\n", perimeter);\n    \n    return 0;\n}',
    hint: 'Area = length × width, Perimeter = 2 × (length + width)'
  },
  {
    id: 'c_operators_006',
    topicId: 'c_operators',
    question: 'Write a program to calculate simple interest using arithmetic operators.',
    mathSolution: 'Simple interest calculation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float principal, rate, time, interest, amount;\n    \n    printf("Enter principal amount: ");\n    scanf("%f", &principal);\n    printf("Enter rate of interest (%%): ");\n    scanf("%f", &rate);\n    printf("Enter time (years): ");\n    scanf("%f", &time);\n    \n    interest = (principal * rate * time) / 100;\n    amount = principal + interest;\n    \n    printf("\\nPrincipal = %.2f\\n", principal);\n    printf("Rate = %.2f%%\\n", rate);\n    printf("Time = %.2f years\\n", time);\n    printf("Simple Interest = %.2f\\n", interest);\n    printf("Total Amount = %.2f\\n", amount);\n    \n    return 0;\n}',
    hint: 'Simple Interest = (P × R × T) / 100'
  },
  {
    id: 'c_operators_007',
    topicId: 'c_operators',
    question: 'Write a program to swap two numbers using arithmetic operators without third variable.',
    mathSolution: 'Swap using arithmetic',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    \n    printf("Before swap: a = %d, b = %d\\n", a, b);\n    \n    a = a + b;  // a becomes 30\n    b = a - b;  // b becomes 10\n    a = a - b;  // a becomes 20\n    \n    printf("After swap: a = %d, b = %d\\n", a, b);\n    \n    return 0;\n}',
    hint: 'Swap using addition and subtraction: a = a + b; b = a - b; a = a - b;'
  },
  {
    id: 'c_operators_008',
    topicId: 'c_operators',
    question: 'Write a program to check if a number is even or odd using modulus operator.',
    mathSolution: 'Even/odd check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    \n    printf("Enter a number: ");\n    scanf("%d", &num);\n    \n    if(num % 2 == 0) {\n        printf("%d is even\\n", num);\n    } else {\n        printf("%d is odd\\n", num);\n    }\n    \n    return 0;\n}',
    hint: 'A number is even if num % 2 == 0, odd if num % 2 == 1'
  },
  {
    id: 'c_operators_009',
    topicId: 'c_operators',
    question: 'Write a program to find the last digit of a number using modulus operator.',
    mathSolution: 'Last digit extraction',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num, lastDigit;\n    \n    printf("Enter a number: ");\n    scanf("%d", &num);\n    \n    lastDigit = num % 10;\n    \n    printf("Number: %d\\n", num);\n    printf("Last digit: %d\\n", lastDigit);\n    \n    // For negative numbers\n    printf("\\nFor negative numbers:\\n");\n    printf("-123 %% 10 = %d\\n", -123 % 10);\n    \n    return 0;\n}',
    hint: 'num % 10 gives the last digit of a number'
  },
  {
    id: 'c_operators_010',
    topicId: 'c_operators',
    question: 'Write a program to extract digits from a number using division and modulus.',
    mathSolution: 'Extract digits',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 12345;\n    int d1, d2, d3, d4, d5;\n    \n    d5 = num % 10;        // last digit\n    num = num / 10;        // remove last digit\n    d4 = num % 10;\n    num = num / 10;\n    d3 = num % 10;\n    num = num / 10;\n    d2 = num % 10;\n    num = num / 10;\n    d1 = num % 10;\n    \n    printf("Original number: 12345\\n");\n    printf("Digits: %d %d %d %d %d\\n", d1, d2, d3, d4, d5);\n    \n    return 0;\n}',
    hint: 'Use num % 10 to get last digit, num / 10 to remove last digit'
  },

  // ============ LEVEL 2: RELATIONAL OPERATORS (11-15) ============
  {
    id: 'c_operators_011',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate relational operators: <, >, <=, >=, ==, !=.',
    mathSolution: 'Relational operators',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    \n    printf("a = %d, b = %d\\n", a, b);\n    printf("a < b  = %d\\n", a < b);\n    printf("a > b  = %d\\n", a > b);\n    printf("a <= b = %d\\n", a <= b);\n    printf("a >= b = %d\\n", a >= b);\n    printf("a == b = %d\\n", a == b);\n    printf("a != b = %d\\n", a != b);\n    \n    return 0;\n}',
    hint: 'Relational operators return 1 (true) or 0 (false)'
  },
  {
    id: 'c_operators_012',
    topicId: 'c_operators',
    question: 'Write a program to find the largest of two numbers using relational operators.',
    mathSolution: 'Largest of two numbers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    \n    printf("Enter first number: ");\n    scanf("%d", &a);\n    printf("Enter second number: ");\n    scanf("%d", &b);\n    \n    if(a > b) {\n        printf("%d is larger than %d\\n", a, b);\n    } else if(b > a) {\n        printf("%d is larger than %d\\n", b, a);\n    } else {\n        printf("Both numbers are equal\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Use > and < operators to compare numbers'
  },
  {
    id: 'c_operators_013',
    topicId: 'c_operators',
    question: 'Write a program to check if a number is positive, negative, or zero using relational operators.',
    mathSolution: 'Positive/negative check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    \n    printf("Enter a number: ");\n    scanf("%d", &num);\n    \n    if(num > 0) {\n        printf("%d is positive\\n", num);\n    } else if(num < 0) {\n        printf("%d is negative\\n", num);\n    } else {\n        printf("Number is zero\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Check num > 0 for positive, num < 0 for negative'
  },
  {
    id: 'c_operators_014',
    topicId: 'c_operators',
    question: 'Write a program to check if a person is eligible to vote using relational operators.',
    mathSolution: 'Voting eligibility',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int age;\n    const int VOTING_AGE = 18;\n    \n    printf("Enter your age: ");\n    scanf("%d", &age);\n    \n    if(age >= VOTING_AGE) {\n        printf("You are eligible to vote\\n");\n        printf("Age %d is >= %d\\n", age, VOTING_AGE);\n    } else {\n        printf("You are not eligible to vote\\n");\n        printf("You need %d more years\\n", VOTING_AGE - age);\n    }\n    \n    return 0;\n}',
    hint: 'Voting eligibility: age >= 18'
  },
  {
    id: 'c_operators_015',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate common mistake: using = instead of ==.',
    mathSolution: 'Assignment vs equality',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5;\n    \n    // Common mistake: using = instead of ==\n    if(a = 10) {  // Assignment, not comparison!\n        printf("This always executes because a = 10 is true\\n");\n        printf("Value of a is now %d\\n", a);\n    }\n    \n    // Correct way\n    a = 5;\n    if(a == 10) {\n        printf("This won\'t execute\\n");\n    } else {\n        printf("Correct: a == 10 is false\\n");\n    }\n    \n    return 0;\n}',
    hint: '= is assignment, == is equality comparison. Never use = in conditions'
  },

  // ============ LEVEL 3: LOGICAL OPERATORS (16-20) ============
  {
    id: 'c_operators_016',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate logical operators: && (AND), || (OR), ! (NOT).',
    mathSolution: 'Logical operators',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20, c = 5;\n    \n    printf("a = %d, b = %d, c = %d\\n", a, b, c);\n    \n    // AND operator\n    printf("(a > c) && (b > a) = %d\\n", (a > c) && (b > a));\n    printf("(a > b) && (b > c) = %d\\n", (a > b) && (b > c));\n    \n    // OR operator\n    printf("(a > b) || (b > c) = %d\\n", (a > b) || (b > c));\n    printf("(a > b) || (a < c) = %d\\n", (a > b) || (a < c));\n    \n    // NOT operator\n    printf("!(a > b) = %d\\n", !(a > b));\n    printf("!(a < b) = %d\\n", !(a < b));\n    \n    return 0;\n}',
    hint: '&& returns true if both true, || returns true if at least one true, ! reverses the result'
  },
  {
    id: 'c_operators_017',
    topicId: 'c_operators',
    question: 'Write a program to check if a year is leap year using logical operators.',
    mathSolution: 'Leap year check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int year;\n    \n    printf("Enter a year: ");\n    scanf("%d", &year);\n    \n    // Leap year: divisible by 4 AND (not divisible by 100 OR divisible by 400)\n    if((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) {\n        printf("%d is a leap year\\n", year);\n    } else {\n        printf("%d is not a leap year\\n", year);\n    }\n    \n    return 0;\n}',
    hint: 'Leap year: divisible by 4 AND (not divisible by 100 OR divisible by 400)'
  },
  {
    id: 'c_operators_018',
    topicId: 'c_operators',
    question: 'Write a program to check if a character is vowel using logical operators.',
    mathSolution: 'Vowel check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch;\n    \n    printf("Enter a character: ");\n    scanf("%c", &ch);\n    \n    // Check for both uppercase and lowercase vowels\n    if(ch == \'a\' || ch == \'e\' || ch == \'i\' || ch == \'o\' || ch == \'u\' ||\n       ch == \'A\' || ch == \'E\' || ch == \'I\' || ch == \'O\' || ch == \'U\') {\n        printf("%c is a vowel\\n", ch);\n    } else {\n        printf("%c is a consonant\\n", ch);\n    }\n    \n    return 0;\n}',
    hint: 'Use logical OR (||) to check multiple conditions'
  },
  {
    id: 'c_operators_019',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate short-circuit evaluation in logical operators.',
    mathSolution: 'Short-circuit evaluation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 0, b = 10;\n    \n    // In &&, if first is false, second is not evaluated\n    if(a != 0 && (b / a) > 5) {\n        printf("This won\'t execute\\n");\n    } else {\n        printf("Short-circuit: division by zero avoided\\n");\n    }\n    \n    // In ||, if first is true, second is not evaluated\n    a = 5;\n    if(a > 0 || (b / 0)) {\n        printf("Short-circuit: second expression not evaluated\\n");\n    }\n    \n    return 0;\n}',
    hint: 'In &&, if left is false, right is not evaluated. In ||, if left is true, right is not evaluated'
  },
  {
    id: 'c_operators_020',
    topicId: 'c_operators',
    question: 'Write a program to check if a number is in a specific range using logical operators.',
    mathSolution: 'Range check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    int lower = 10, upper = 50;\n    \n    printf("Enter a number between %d and %d: ", lower, upper);\n    scanf("%d", &num);\n    \n    if(num >= lower && num <= upper) {\n        printf("%d is within the range [%d, %d]\\n", num, lower, upper);\n    } else {\n        printf("%d is outside the range\\n", num);\n    }\n    \n    return 0;\n}',
    hint: 'Use && to check if a number is within range: num >= lower && num <= upper'
  },

  // ============ LEVEL 4: ASSIGNMENT OPERATORS (21-25) ============
  {
    id: 'c_operators_021',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate assignment operators: =, +=, -=, *=, /=, %=.',
    mathSolution: 'Assignment operators',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10;\n    \n    printf("Initial a = %d\\n", a);\n    \n    a += 5;  // a = a + 5\n    printf("After a += 5: %d\\n", a);\n    \n    a -= 3;  // a = a - 3\n    printf("After a -= 3: %d\\n", a);\n    \n    a *= 2;  // a = a * 2\n    printf("After a *= 2: %d\\n", a);\n    \n    a /= 4;  // a = a / 4\n    printf("After a /= 4: %d\\n", a);\n    \n    a %= 3;  // a = a % 3\n    printf("After a %%= 3: %d\\n", a);\n    \n    return 0;\n}',
    hint: 'Assignment operators combine arithmetic with assignment: +=, -=, *=, /=, %='
  },
  {
    id: 'c_operators_022',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate bitwise assignment operators: &=, |=, ^=, <<=, >>=.',
    mathSolution: 'Bitwise assignment operators',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int a = 12;  // 1100 in binary\n    \n    printf("Initial a = %u (binary: 1100)\\n", a);\n    \n    a &= 10;  // a = a & 10 (1100 & 1010 = 1000 = 8)\n    printf("After a &= 10: %u (binary: 1000)\\n", a);\n    \n    a |= 5;   // a = a | 5 (1000 | 0101 = 1101 = 13)\n    printf("After a |= 5: %u (binary: 1101)\\n", a);\n    \n    a ^= 6;   // a = a ^ 6 (1101 ^ 0110 = 1011 = 11)\n    printf("After a ^= 6: %u (binary: 1011)\\n", a);\n    \n    a <<= 2;  // a = a << 2 (1011 << 2 = 101100 = 44)\n    printf("After a <<= 2: %u\\n", a);\n    \n    a >>= 1;  // a = a >> 1 (101100 >> 1 = 10110 = 22)\n    printf("After a >>= 1: %u\\n", a);\n    \n    return 0;\n}',
    hint: 'Bitwise assignment operators: &= (AND), |= (OR), ^= (XOR), <<= (left shift), >>= (right shift)'
  },
  {
    id: 'c_operators_023',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate chained assignment.',
    mathSolution: 'Chained assignment',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, c;\n    \n    a = b = c = 10;  // Chained assignment (right to left)\n    \n    printf("a = %d\\n", a);\n    printf("b = %d\\n", b);\n    printf("c = %d\\n", c);\n    \n    // Assignment in expression\n    int x = (y = 5) + 3;\n    printf("\\nx = (y = 5) + 3 => x = %d, y = %d\\n", x, y);\n    \n    return 0;\n}',
    hint: 'Assignment operators associate right-to-left: a = b = c = 10 means c = 10, b = c, a = b'
  },
  {
    id: 'c_operators_024',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate compound assignment for calculations.',
    mathSolution: 'Compound assignment in loops',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int sum = 0, product = 1;\n    int numbers[] = {2, 3, 4, 5};\n    \n    printf("Numbers: ");\n    for(int i = 0; i < 4; i++) {\n        printf("%d ", numbers[i]);\n        sum += numbers[i];      // sum = sum + numbers[i]\n        product *= numbers[i];   // product = product * numbers[i]\n    }\n    \n    printf("\\nSum = %d\\n", sum);\n    printf("Product = %d\\n", product);\n    \n    return 0;\n}',
    hint: 'Compound assignment operators are commonly used in loops for accumulation'
  },
  {
    id: 'c_operators_025',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate difference between assignment and equality.',
    mathSolution: 'Assignment vs equality',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5;\n    int b = 10;\n    \n    // Assignment (=) assigns a value\n    printf("Assignment: a = b sets a to %d\\n", a = b);\n    printf("Now a = %d, b = %d\\n", a, b);\n    \n    // Reset values\n    a = 5, b = 10;\n    \n    // Equality (==) compares values\n    printf("\\nEquality: a == b is %d\\n", a == b);\n    printf("a = %d, b = %d unchanged\\n", a, b);\n    \n    return 0;\n}',
    hint: '= assigns a value, == compares values. Never confuse them!'
  },

  // ============ LEVEL 5: INCREMENT/DECREMENT OPERATORS (26-30) ============
  {
    id: 'c_operators_026',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate prefix and postfix increment operators.',
    mathSolution: 'Prefix vs postfix increment',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5, b = 5;\n    int x, y;\n    \n    printf("Initial: a = %d, b = %d\\n", a, b);\n    \n    x = ++a;  // Prefix increment: first increment, then use\n    y = b++;  // Postfix increment: first use, then increment\n    \n    printf("After ++a: a = %d, x = %d\\n", a, x);\n    printf("After b++: b = %d, y = %d\\n", b, y);\n    \n    // Demonstrate in expression\n    a = 5, b = 5;\n    printf("\\nWith a = %d, b = %d:\\n", a, b);\n    printf("++a + b++ = %d\\n", ++a + b++);\n    printf("Now a = %d, b = %d\\n", a, b);\n    \n    return 0;\n}',
    hint: '++a increments then returns value, a++ returns value then increments'
  },
  {
    id: 'c_operators_027',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate prefix and postfix decrement operators.',
    mathSolution: 'Prefix vs postfix decrement',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5, b = 5;\n    int x, y;\n    \n    printf("Initial: a = %d, b = %d\\n", a, b);\n    \n    x = --a;  // Prefix decrement: first decrement, then use\n    y = b--;  // Postfix decrement: first use, then decrement\n    \n    printf("After --a: a = %d, x = %d\\n", a, x);\n    printf("After b--: b = %d, y = %d\\n", b, y);\n    \n    // Demonstrate in expression\n    a = 5, b = 5;\n    printf("\\nWith a = %d, b = %d:\\n", a, b);\n    printf("--a + b-- = %d\\n", --a + b--);\n    printf("Now a = %d, b = %d\\n", a, b);\n    \n    return 0;\n}',
    hint: '--a decrements then returns value, a-- returns value then decrements'
  },
  {
    id: 'c_operators_028',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate increment operators in loops.',
    mathSolution: 'Increment in loops',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Using i++ in for loop:\\n");\n    for(int i = 1; i <= 5; i++) {\n        printf("%d ", i);\n    }\n    \n    printf("\\n\\nUsing ++i in for loop:\\n");\n    for(int i = 1; i <= 5; ++i) {\n        printf("%d ", i);\n    }\n    \n    printf("\\n\\nUsing i-- in while loop:\\n");\n    int i = 5;\n    while(i > 0) {\n        printf("%d ", i--);\n    }\n    \n    printf("\\n\\nUsing --i in while loop:\\n");\n    i = 5;\n    while(i > 0) {\n        printf("%d ", --i);\n    }\n    \n    return 0;\n}',
    hint: 'In for loops, i++ and ++i behave the same when used alone'
  },
  {
    id: 'c_operators_029',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate multiple increment/decrement in one expression.',
    mathSolution: 'Multiple increments',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5, b = 5;\n    \n    printf("Initial: a = %d, b = %d\\n", a, b);\n    \n    int result = ++a + a++ + --b + b--;\n    \n    printf("++a + a++ + --b + b-- = %d\\n", result);\n    printf("Final: a = %d, b = %d\\n", a, b);\n    \n    printf("\\nNote: Behavior can be compiler-dependent!\\n");\n    \n    return 0;\n}',
    hint: 'Avoid multiple increments in one expression - behavior may be undefined or compiler-dependent'
  },
  {
    id: 'c_operators_030',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate increment/decrement with pointers.',
    mathSolution: 'Increment with pointers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *ptr = arr;\n    \n    printf("Array: 10, 20, 30, 40, 50\\n");\n    printf("Initial *ptr = %d\\n", *ptr);\n    \n    printf("\\nPointer arithmetic:\\n");\n    printf("*ptr++ = %d (first %d, then ptr moves)\\n", *ptr++, *ptr);\n    printf("*ptr = %d\\n", *ptr);\n    \n    printf("\\n*++ptr = %d (first ptr moves, then dereference)\\n", *++ptr);\n    printf("*ptr = %d\\n", *ptr);\n    \n    return 0;\n}',
    hint: '*ptr++ dereferences then increments pointer, *++ptr increments pointer then dereferences'
  },

  // ============ LEVEL 6: BITWISE OPERATORS (31-40) ============
  {
    id: 'c_operators_031',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate bitwise AND (&) operator.',
    mathSolution: 'Bitwise AND',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int a = 12;  // 1100 in binary\n    unsigned int b = 10;  // 1010 in binary\n    \n    printf("a = %u (binary: 1100)\\n", a);\n    printf("b = %u (binary: 1010)\\n", b);\n    printf("a & b = %u (binary: 1000 = 8)\\n", a & b);\n    \n    // Common use: checking if a bit is set\n    unsigned int flag = 8;  // 1000 binary\n    if(a & flag) {\n        printf("\\nBit 3 is set in a\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Bitwise AND (&) sets each bit to 1 if both bits are 1'
  },
  {
    id: 'c_operators_032',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate bitwise OR (|) operator.',
    mathSolution: 'Bitwise OR',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int a = 12;  // 1100 in binary\n    unsigned int b = 10;  // 1010 in binary\n    \n    printf("a = %u (binary: 1100)\\n", a);\n    printf("b = %u (binary: 1010)\\n", b);\n    printf("a | b = %u (binary: 1110 = 14)\\n", a | b);\n    \n    // Common use: setting bits\n    unsigned int flags = 0;\n    flags = flags | 4;  // set bit 2\n    printf("\\nflags after setting bit 2: %u\\n", flags);\n    \n    return 0;\n}',
    hint: 'Bitwise OR (|) sets each bit to 1 if at least one bit is 1'
  },
  {
    id: 'c_operators_033',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate bitwise XOR (^) operator.',
    mathSolution: 'Bitwise XOR',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int a = 12;  // 1100 in binary\n    unsigned int b = 10;  // 1010 in binary\n    \n    printf("a = %u (binary: 1100)\\n", a);\n    printf("b = %u (binary: 1010)\\n", b);\n    printf("a ^ b = %u (binary: 0110 = 6)\\n", a ^ b);\n    \n    // XOR properties\n    unsigned int c = 7;\n    printf("\\nXOR properties:\\n");\n    printf("c ^ c = %u\\n", c ^ c);  // Always 0\n    printf("c ^ 0 = %u\\n", c ^ 0);  // Always c\n    \n    return 0;\n}',
    hint: 'Bitwise XOR (^) sets each bit to 1 if bits are different'
  },
  {
    id: 'c_operators_034',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate bitwise NOT (~) operator.',
    mathSolution: 'Bitwise NOT (ones complement)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int a = 12;  // 00000000 00000000 00000000 00001100\n    \n    printf("a = %u\\n", a);\n    printf("~a = %u (all bits flipped)\\n", ~a);\n    \n    // For smaller types\n    unsigned char b = 12;  // 00001100\n    printf("\\nunsigned char b = %u\\n", b);\n    printf("~b = %u (as int: %d)\\n", ~b, ~b);\n    \n    return 0;\n}',
    hint: 'Bitwise NOT (~) flips all bits (ones complement)'
  },
  {
    id: 'c_operators_035',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate left shift (<<) operator.',
    mathSolution: 'Left shift',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int a = 5;  // 0101 in binary\n    \n    printf("a = %u (binary: 0101)\\n", a);\n    printf("a << 1 = %u (binary: 1010 = %d, multiply by 2)\\n", a << 1, a << 1);\n    printf("a << 2 = %u (binary: 10100 = %d, multiply by 4)\\n", a << 2, a << 2);\n    printf("a << 3 = %u (binary: 101000 = %d, multiply by 8)\\n", a << 3, a << 3);\n    \n    return 0;\n}',
    hint: 'Left shift (<<) shifts bits left, equivalent to multiplying by 2^n'
  },
  {
    id: 'c_operators_036',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate right shift (>>) operator.',
    mathSolution: 'Right shift',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int a = 40;  // 101000 in binary\n    \n    printf("a = %u (binary: 101000)\\n", a);\n    printf("a >> 1 = %u (binary: 10100 = %d, divide by 2)\\n", a >> 1, a >> 1);\n    printf("a >> 2 = %u (binary: 1010 = %d, divide by 4)\\n", a >> 2, a >> 2);\n    printf("a >> 3 = %u (binary: 101 = %d, divide by 8)\\n", a >> 3, a >> 3);\n    \n    // Right shift on signed numbers\n    signed int b = -40;\n    printf("\\nSigned right shift: -40 >> 2 = %d\\n", b >> 2);\n    \n    return 0;\n}',
    hint: 'Right shift (>>) shifts bits right, equivalent to dividing by 2^n (implementation-defined for signed)'
  },
  {
    id: 'c_operators_037',
    topicId: 'c_operators',
    question: 'Write a program to check if a number is power of 2 using bitwise operators.',
    mathSolution: 'Power of 2 check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    \n    printf("Enter a number: ");\n    scanf("%d", &num);\n    \n    // Power of 2 if num > 0 and (num & (num-1)) == 0\n    if(num > 0 && (num & (num - 1)) == 0) {\n        printf("%d is a power of 2\\n", num);\n    } else {\n        printf("%d is not a power of 2\\n", num);\n    }\n    \n    return 0;\n}',
    hint: 'A number is power of 2 if it has exactly one bit set: (num & (num-1)) == 0'
  },
  {
    id: 'c_operators_038',
    topicId: 'c_operators',
    question: 'Write a program to count number of set bits using bitwise operators.',
    mathSolution: 'Count set bits',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int num, count = 0;\n    \n    printf("Enter a number: ");\n    scanf("%u", &num);\n    \n    unsigned int original = num;\n    while(num) {\n        count += num & 1;  // Check if LSB is set\n        num >>= 1;         // Right shift\n    }\n    \n    printf("Number of set bits in %u = %d\\n", original, count);\n    \n    return 0;\n}',
    hint: 'Use num & 1 to check LSB, then shift right until number becomes 0'
  },
  {
    id: 'c_operators_039',
    topicId: 'c_operators',
    question: 'Write a program to swap two numbers using XOR operator.',
    mathSolution: 'Swap using XOR',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    \n    printf("Before swap: a = %d, b = %d\\n", a, b);\n    \n    a = a ^ b;\n    b = a ^ b;\n    a = a ^ b;\n    \n    printf("After swap: a = %d, b = %d\\n", a, b);\n    \n    return 0;\n}',
    hint: 'XOR swap: a = a ^ b; b = a ^ b; a = a ^ b; Works without temporary variable'
  },
  {
    id: 'c_operators_040',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate bit masking using bitwise operators.',
    mathSolution: 'Bit masking',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int flags = 0b11011010;  // Example flag register\n    unsigned int mask;\n    \n    printf("Original flags: 0x%X (binary: 11011010)\\n", flags);\n    \n    // Check if bit 3 is set (using mask)\n    mask = 0b00001000;  // Bit 3 mask\n    if(flags & mask) {\n        printf("Bit 3 is set\\n");\n    }\n    \n    // Set bit 2\n    mask = 0b00000100;\n    flags = flags | mask;\n    printf("After setting bit 2: 0x%X\\n", flags);\n    \n    // Clear bit 5\n    mask = 0b00100000;\n    flags = flags & ~mask;\n    printf("After clearing bit 5: 0x%X\\n", flags);\n    \n    // Toggle bit 4\n    mask = 0b00010000;\n    flags = flags ^ mask;\n    printf("After toggling bit 4: 0x%X\\n", flags);\n    \n    return 0;\n}',
    hint: 'Bit masking: & (check/clear), | (set), ^ (toggle), ~ (invert mask for clearing)'
  },

  // ============ LEVEL 7: TERNARY/CONDITIONAL OPERATOR (41-45) ============
  {
    id: 'c_operators_041',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate ternary operator (?:) for conditional expressions.',
    mathSolution: 'Ternary operator basics',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    int max;\n    \n    // Ternary operator: condition ? value_if_true : value_if_false\n    max = (a > b) ? a : b;\n    \n    printf("a = %d, b = %d\\n", a, b);\n    printf("Maximum = %d\\n", max);\n    \n    // Using ternary directly in printf\n    printf("The numbers are %s\\n", (a == b) ? "equal" : "not equal");\n    \n    return 0;\n}',
    hint: 'Ternary operator: condition ? expr1 : expr2 returns expr1 if condition true, else expr2'
  },
  {
    id: 'c_operators_042',
    topicId: 'c_operators',
    question: 'Write a program to find the largest of three numbers using ternary operator.',
    mathSolution: 'Largest of three using ternary',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, c, max;\n    \n    printf("Enter three numbers: ");\n    scanf("%d %d %d", &a, &b, &c);\n    \n    // Nested ternary operators\n    max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);\n    \n    printf("Numbers: %d, %d, %d\\n", a, b, c);\n    printf("Largest: %d\\n", max);\n    \n    return 0;\n}',
    hint: 'Nested ternary operators: condition1 ? (condition2 ? expr1 : expr2) : (condition3 ? expr3 : expr4)'
  },
  {
    id: 'c_operators_043',
    topicId: 'c_operators',
    question: 'Write a program to check even/odd using ternary operator.',
    mathSolution: 'Even/odd with ternary',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    \n    printf("Enter a number: ");\n    scanf("%d", &num);\n    \n    printf("%d is %s\\n", num, (num % 2 == 0) ? "even" : "odd");\n    \n    return 0;\n}',
    hint: 'Ternary operator can be used directly in printf for conditional output'
  },
  {
    id: 'c_operators_044',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate nested ternary operators for grade calculation.',
    mathSolution: 'Grade calculation with ternary',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int marks;\n    char grade;\n    \n    printf("Enter marks (0-100): ");\n    scanf("%d", &marks);\n    \n    grade = (marks >= 90) ? \'A\' :\n            (marks >= 80) ? \'B\' :\n            (marks >= 70) ? \'C\' :\n            (marks >= 60) ? \'D\' : \'F\';\n    \n    printf("Marks: %d\\n", marks);\n    printf("Grade: %c\\n", grade);\n    \n    return 0;\n}',
    hint: 'Nested ternaries can replace if-else chains but can become hard to read'
  },
  {
    id: 'c_operators_045',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate ternary operator for absolute value.',
    mathSolution: 'Absolute value with ternary',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num, abs;\n    \n    printf("Enter a number: ");\n    scanf("%d", &num);\n    \n    abs = (num < 0) ? -num : num;\n    \n    printf("Original number: %d\\n", num);\n    printf("Absolute value: %d\\n", abs);\n    \n    return 0;\n}',
    hint: 'Absolute value: (num < 0) ? -num : num'
  },

  // ============ LEVEL 8: SIZEOF AND OTHER OPERATORS (46-50) ============
  {
    id: 'c_operators_046',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate sizeof operator with different data types.',
    mathSolution: 'sizeof operator',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("sizeof fundamental types:\\n");\n    printf("sizeof(char) = %lu byte\\n", sizeof(char));\n    printf("sizeof(short) = %lu bytes\\n", sizeof(short));\n    printf("sizeof(int) = %lu bytes\\n", sizeof(int));\n    printf("sizeof(long) = %lu bytes\\n", sizeof(long));\n    printf("sizeof(float) = %lu bytes\\n", sizeof(float));\n    printf("sizeof(double) = %lu bytes\\n", sizeof(double));\n    \n    printf("\\nsizeof with variables:\\n");\n    int arr[10];\n    struct { int x; int y; } point;\n    \n    printf("sizeof(arr) = %lu bytes\\n", sizeof(arr));\n    printf("sizeof(point) = %lu bytes\\n", sizeof(point));\n    \n    return 0;\n}',
    hint: 'sizeof operator returns size in bytes of a type or variable'
  },
  {
    id: 'c_operators_047',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate comma operator (,) and its use.',
    mathSolution: 'Comma operator',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, c;\n    \n    // Comma operator in for loop\n    printf("Using comma operator in for loop:\\n");\n    for(a = 1, b = 10; a <= b; a++, b--) {\n        printf("a = %d, b = %d\\n", a, b);\n    }\n    \n    // Comma operator in expressions\n    int x = (5, 10, 15);  // Evaluates all, returns last\n    printf("\\nint x = (5, 10, 15); x = %d\\n", x);\n    \n    // Multiple statements in one line\n    int i = 1, j = 2, k = 3;\n    printf("i = %d, j = %d, k = %d\\n", i, j, k);\n    \n    return 0;\n}',
    hint: 'Comma operator evaluates expressions left to right and returns value of the rightmost expression'
  },
  {
    id: 'c_operators_048',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate pointer operators: & (address-of) and * (dereference).',
    mathSolution: 'Pointer operators',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 42;\n    int *ptr;\n    \n    // & operator (address-of)\n    ptr = &num;\n    \n    printf("Value of num: %d\\n", num);\n    printf("Address of num: %p\\n", &num);\n    printf("Value of ptr: %p\\n", ptr);\n    \n    // * operator (dereference)\n    printf("Value pointed by ptr: %d\\n", *ptr);\n    \n    // Modify through pointer\n    *ptr = 100;\n    printf("After *ptr = 100, num = %d\\n", num);\n    \n    return 0;\n}',
    hint: '& gives address of variable, * gives value at address (dereference)'
  },
  {
    id: 'c_operators_049',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate operator precedence table with examples.',
    mathSolution: 'Operator precedence',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5, b = 3, c = 2;\n    \n    printf("a = %d, b = %d, c = %d\\n", a, b, c);\n    \n    // Precedence examples\n    printf("\\nPrecedence examples:\\n");\n    printf("a + b * c = %d (multiplication first)\\n", a + b * c);\n    printf("(a + b) * c = %d\\n", (a + b) * c);\n    \n    printf("a > b && b > c = %d (relational before logical)\\n", a > b && b > c);\n    printf("a > b || b < c = %d\\n", a > b || b < c);\n    \n    printf("++a * b-- = %d\\n", ++a * b--);\n    \n    // Precedence table summary\n    printf("\\nPrecedence (highest to lowest):\\n");\n    printf("1. Postfix: (), [], ., ->, ++, --\\n");\n    printf("2. Unary: +, -, !, ~, ++, --, *, &, sizeof\\n");\n    printf("3. Multiplicative: *, /, %%\\n");\n    printf("4. Additive: +, -\\n");\n    printf("5. Shift: <<, >>\\n");\n    printf("6. Relational: <, >, <=, >=\\n");\n    printf("7. Equality: ==, !=\\n");\n    printf("8. Bitwise AND: &\\n");\n    printf("9. Bitwise XOR: ^\\n");\n    printf("10. Bitwise OR: |\\n");\n    printf("11. Logical AND: &&\\n");\n    printf("12. Logical OR: ||\\n");\n    printf("13. Conditional: ?:\\n");\n    printf("14. Assignment: =, +=, -=, etc.\\n");\n    printf("15. Comma: ,\\n");\n    \n    return 0;\n}',
    hint: 'Use parentheses to make precedence clear instead of relying on memorization'
  },
  {
    id: 'c_operators_050',
    topicId: 'c_operators',
    question: 'Write a comprehensive program demonstrating all operator types.',
    mathSolution: 'All operators',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 15, b = 4, result;\n    unsigned int x = 12, y = 10;\n    \n    printf("=== ARITHMETIC OPERATORS ===\\n");\n    printf("a = %d, b = %d\\n", a, b);\n    printf("a + b = %d\\n", a + b);\n    printf("a - b = %d\\n", a - b);\n    printf("a * b = %d\\n", a * b);\n    printf("a / b = %d\\n", a / b);\n    printf("a %% b = %d\\n\\n", a % b);\n    \n    printf("=== RELATIONAL OPERATORS ===\\n");\n    printf("a > b = %d\\n", a > b);\n    printf("a < b = %d\\n", a < b);\n    printf("a == b = %d\\n\\n", a == b);\n    \n    printf("=== LOGICAL OPERATORS ===\\n");\n    printf("(a > b) && (a > 10) = %d\\n", (a > b) && (a > 10));\n    printf("(a < b) || (a > 10) = %d\\n", (a < b) || (a > 10));\n    printf("!(a == b) = %d\\n\\n", !(a == b));\n    \n    printf("=== BITWISE OPERATORS ===\\n");\n    printf("x = %u (1100), y = %u (1010)\\n", x, y);\n    printf("x & y = %u (1000)\\n", x & y);\n    printf("x | y = %u (1110)\\n", x | y);\n    printf("x ^ y = %u (0110)\\n\\n", x ^ y);\n    \n    printf("=== SHIFT OPERATORS ===\\n");\n    printf("x << 1 = %u\\n", x << 1);\n    printf("x >> 1 = %u\\n\\n", x >> 1);\n    \n    printf("=== ASSIGNMENT OPERATORS ===\\n");\n    result = 10;\n    printf("result = %d\\n", result);\n    result += 5;\n    printf("result += 5 = %d\\n", result);\n    result *= 2;\n    printf("result *= 2 = %d\\n\\n", result);\n    \n    printf("=== INCREMENT/DECREMENT ===\\n");\n    a = 5;\n    printf("a = %d\\n", a);\n    printf("++a = %d, a = %d\\n", ++a, a);\n    printf("a++ = %d, a = %d\\n\\n", a++, a);\n    \n    printf("=== TERNARY OPERATOR ===\\n");\n    int max = (a > b) ? a : b;\n    printf("Max of %d and %d = %d\\n\\n", a, b, max);\n    \n    printf("=== SIZEOF OPERATOR ===\\n");\n    printf("sizeof(int) = %lu bytes\\n\\n", sizeof(int));\n    \n    printf("=== POINTER OPERATORS ===\\n");\n    int num = 42;\n    int *ptr = #\n    printf("num = %d, &num = %p, ptr = %p, *ptr = %d\\n", num, &num, ptr, *ptr);\n    \n    return 0;\n}',
    hint: 'This program demonstrates all operator categories in C: arithmetic, relational, logical, bitwise, shift, assignment, increment/decrement, ternary, sizeof, and pointer operators'
  },

  // ============ LEVEL 9: ADVANCED ARITHMETIC OPERATORS (51-55) ============
  {
    id: 'c_operators_051',
    topicId: 'c_operators',
    question: 'Write a program to calculate compound interest using arithmetic operators.',
    mathSolution: 'Compound interest calculation',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    float principal, rate, time, amount, compoundInterest;\n    int n; // number of times interest applied per year\n    \n    printf("Enter principal amount: ");\n    scanf("%f", &principal);\n    printf("Enter annual interest rate (%%): ");\n    scanf("%f", &rate);\n    printf("Enter time (years): ");\n    scanf("%f", &time);\n    printf("Enter number of times interest applied per year: ");\n    scanf("%d", &n);\n    \n    // Compound Interest formula: A = P(1 + r/n)^(nt)\n    amount = principal * pow((1 + rate/(100 * n)), n * time);\n    compoundInterest = amount - principal;\n    \n    printf("\\nPrincipal: %.2f\\n", principal);\n    printf("Rate: %.2f%%\\n", rate);\n    printf("Time: %.2f years\\n", time);\n    printf("Compounding frequency: %d times per year\\n", n);\n    printf("Final Amount: %.2f\\n", amount);\n    printf("Compound Interest: %.2f\\n", compoundInterest);\n    \n    return 0;\n}',
    hint: 'Compound Interest: A = P(1 + r/n)^(nt) where r is rate in decimal'
  },
  {
    id: 'c_operators_052',
    topicId: 'c_operators',
    question: 'Write a program to calculate roots of quadratic equation using arithmetic operators.',
    mathSolution: 'Quadratic equation roots',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    float a, b, c, discriminant, root1, root2, realPart, imagPart;\n    \n    printf("Enter coefficients a, b, c: ");\n    scanf("%f %f %f", &a, &b, &c);\n    \n    discriminant = b * b - 4 * a * c;\n    \n    printf("\\nEquation: %.2fx^2 + %.2fx + %.2f = 0\\n", a, b, c);\n    \n    if(discriminant > 0) {\n        root1 = (-b + sqrt(discriminant)) / (2 * a);\n        root2 = (-b - sqrt(discriminant)) / (2 * a);\n        printf("Roots are real and different:\\n");\n        printf("Root1 = %.2f\\n", root1);\n        printf("Root2 = %.2f\\n", root2);\n    } else if(discriminant == 0) {\n        root1 = root2 = -b / (2 * a);\n        printf("Roots are real and equal:\\n");\n        printf("Root1 = Root2 = %.2f\\n", root1);\n    } else {\n        realPart = -b / (2 * a);\n        imagPart = sqrt(-discriminant) / (2 * a);\n        printf("Roots are complex and different:\\n");\n        printf("Root1 = %.2f + %.2fi\\n", realPart, imagPart);\n        printf("Root2 = %.2f - %.2fi\\n", realPart, imagPart);\n    }\n    \n    return 0;\n}',
    hint: 'Quadratic formula: x = [-b ± √(b² - 4ac)] / 2a'
  },
  {
    id: 'c_operators_053',
    topicId: 'c_operators',
    question: 'Write a program to calculate sum of digits of a number using arithmetic operators.',
    mathSolution: 'Sum of digits',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num, original, sum = 0, digit;\n    \n    printf("Enter a number: ");\n    scanf("%d", &num);\n    \n    original = num;\n    \n    while(num > 0) {\n        digit = num % 10;   // Get last digit\n        sum += digit;        // Add to sum\n        num /= 10;           // Remove last digit\n    }\n    \n    printf("Number: %d\\n", original);\n    printf("Sum of digits: %d\\n", sum);\n    \n    return 0;\n}',
    hint: 'Use num % 10 to get last digit, num / 10 to remove last digit'
  },
  {
    id: 'c_operators_054',
    topicId: 'c_operators',
    question: 'Write a program to reverse a number using arithmetic operators.',
    mathSolution: 'Reverse a number',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num, original, reversed = 0, digit;\n    \n    printf("Enter a number: ");\n    scanf("%d", &num);\n    \n    original = num;\n    \n    while(num > 0) {\n        digit = num % 10;           // Get last digit\n        reversed = reversed * 10 + digit;  // Build reversed number\n        num /= 10;                  // Remove last digit\n    }\n    \n    printf("Original number: %d\\n", original);\n    printf("Reversed number: %d\\n", reversed);\n    \n    return 0;\n}',
    hint: 'reversed = reversed * 10 + last_digit builds the reversed number'
  },
  {
    id: 'c_operators_055',
    topicId: 'c_operators',
    question: 'Write a program to check if a number is palindrome using arithmetic operators.',
    mathSolution: 'Palindrome number',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num, original, reversed = 0, digit;\n    \n    printf("Enter a number: ");\n    scanf("%d", &num);\n    \n    original = num;\n    \n    while(num > 0) {\n        digit = num % 10;\n        reversed = reversed * 10 + digit;\n        num /= 10;\n    }\n    \n    if(original == reversed) {\n        printf("%d is a palindrome\\n", original);\n    } else {\n        printf("%d is not a palindrome\\n", original);\n    }\n    \n    return 0;\n}',
    hint: 'A palindrome reads the same forwards and backwards (e.g., 121, 12321)'
  },

  // ============ LEVEL 10: ADVANCED RELATIONAL OPERATORS (56-60) ============
  {
    id: 'c_operators_056',
    topicId: 'c_operators',
    question: 'Write a program to compare three numbers and find the middle number using relational operators.',
    mathSolution: 'Find middle number',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, c, middle;\n    \n    printf("Enter three numbers: ");\n    scanf("%d %d %d", &a, &b, &c);\n    \n    // Find middle number\n    if((a > b && a < c) || (a < b && a > c)) {\n        middle = a;\n    } else if((b > a && b < c) || (b < a && b > c)) {\n        middle = b;\n    } else {\n        middle = c;\n    }\n    \n    printf("Numbers: %d, %d, %d\\n", a, b, c);\n    printf("Middle number: %d\\n", middle);\n    \n    return 0;\n}',
    hint: 'Middle number is greater than one and less than the other'
  },
  {
    id: 'c_operators_057',
    topicId: 'c_operators',
    question: 'Write a program to sort three numbers using relational operators.',
    mathSolution: 'Sort three numbers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, c, temp;\n    \n    printf("Enter three numbers: ");\n    scanf("%d %d %d", &a, &b, &c);\n    \n    printf("Before sorting: %d, %d, %d\\n", a, b, c);\n    \n    // Sort using comparisons\n    if(a > b) { temp = a; a = b; b = temp; }\n    if(a > c) { temp = a; a = c; c = temp; }\n    if(b > c) { temp = b; b = c; c = temp; }\n    \n    printf("After sorting (ascending): %d, %d, %d\\n", a, b, c);\n    \n    return 0;\n}',
    hint: 'Compare and swap using temporary variable to sort numbers'
  },
  {
    id: 'c_operators_058',
    topicId: 'c_operators',
    question: 'Write a program to check if three sides form a valid triangle using relational operators.',
    mathSolution: 'Triangle validity',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int s1, s2, s3;\n    \n    printf("Enter three sides of triangle: ");\n    scanf("%d %d %d", &s1, &s2, &s3);\n    \n    // Triangle inequality theorem\n    if((s1 + s2 > s3) && (s1 + s3 > s2) && (s2 + s3 > s1)) {\n        printf("Sides %d, %d, %d form a valid triangle\\n", s1, s2, s3);\n        \n        // Check triangle type\n        if(s1 == s2 && s2 == s3) {\n            printf("It is an equilateral triangle\\n");\n        } else if(s1 == s2 || s2 == s3 || s1 == s3) {\n            printf("It is an isosceles triangle\\n");\n        } else {\n            printf("It is a scalene triangle\\n");\n        }\n    } else {\n        printf("Sides %d, %d, %d do NOT form a valid triangle\\n", s1, s2, s3);\n    }\n    \n    return 0;\n}',
    hint: 'Triangle inequality: sum of any two sides must be greater than the third'
  },
  {
    id: 'c_operators_059',
    topicId: 'c_operators',
    question: 'Write a program to determine the type of triangle using relational operators.',
    mathSolution: 'Triangle type',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    float a, b, c;\n    \n    printf("Enter three sides of triangle: ");\n    scanf("%f %f %f", &a, &b, &c);\n    \n    // Check if valid triangle\n    if(a + b > c && a + c > b && b + c > a) {\n        printf("Sides: %.2f, %.2f, %.2f\\n", a, b, c);\n        \n        // Check triangle type by angles using Pythagoras\n        float a2 = a * a, b2 = b * b, c2 = c * c;\n        \n        if(fabs(a2 + b2 - c2) < 0.001 || \n           fabs(a2 + c2 - b2) < 0.001 || \n           fabs(b2 + c2 - a2) < 0.001) {\n            printf("It is a right-angled triangle\\n");\n        } else if(a2 + b2 > c2 && a2 + c2 > b2 && b2 + c2 > a2) {\n            printf("It is an acute-angled triangle\\n");\n        } else {\n            printf("It is an obtuse-angled triangle\\n");\n        }\n    } else {\n        printf("Invalid triangle\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Use Pythagorean theorem to check triangle type: a² + b² = c² for right angle'
  },
  {
    id: 'c_operators_060',
    topicId: 'c_operators',
    question: 'Write a program to find the quadrant of a point using relational operators.',
    mathSolution: 'Quadrant of a point',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x, y;\n    \n    printf("Enter coordinates (x, y): ");\n    scanf("%d %d", &x, &y);\n    \n    printf("Point (%d, %d) lies in ", x, y);\n    \n    if(x > 0 && y > 0) {\n        printf("Quadrant I\\n");\n    } else if(x < 0 && y > 0) {\n        printf("Quadrant II\\n");\n    } else if(x < 0 && y < 0) {\n        printf("Quadrant III\\n");\n    } else if(x > 0 && y < 0) {\n        printf("Quadrant IV\\n");\n    } else if(x == 0 && y == 0) {\n        printf("Origin\\n");\n    } else if(x == 0) {\n        printf("Y-axis\\n");\n    } else if(y == 0) {\n        printf("X-axis\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Quadrants: I(+,+), II(-,+), III(-,-), IV(+,-)'
  },

  // ============ LEVEL 11: ADVANCED LOGICAL OPERATORS (61-65) ============
  {
    id: 'c_operators_061',
    topicId: 'c_operators',
    question: 'Write a program to check if a character is alphabet, digit, or special character using logical operators.',
    mathSolution: 'Character classification',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch;\n    \n    printf("Enter a character: ");\n    scanf("%c", &ch);\n    \n    if((ch >= \'a\' && ch <= \'z\') || (ch >= \'A\' && ch <= \'Z\')) {\n        printf("%c is an alphabet\\n", ch);\n    } else if(ch >= \'0\' && ch <= \'9\') {\n        printf("%c is a digit\\n", ch);\n    } else {\n        printf("%c is a special character\\n", ch);\n    }\n    \n    return 0;\n}',
    hint: 'Check ranges: a-z or A-Z for alphabet, 0-9 for digit'
  },
  {
    id: 'c_operators_062',
    topicId: 'c_operators',
    question: 'Write a program to validate date (day, month) using logical operators.',
    mathSolution: 'Date validation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int day, month;\n    \n    printf("Enter day and month: ");\n    scanf("%d %d", &day, &month);\n    \n    int valid = 0;\n    \n    if(month >= 1 && month <= 12) {\n        if(month == 2) { // February\n            if(day >= 1 && day <= 28) {\n                valid = 1;\n            }\n        } else if(month == 4 || month == 6 || month == 9 || month == 11) {\n            // April, June, September, November have 30 days\n            if(day >= 1 && day <= 30) {\n                valid = 1;\n            }\n        } else { // Months with 31 days\n            if(day >= 1 && day <= 31) {\n                valid = 1;\n            }\n        }\n    }\n    \n    if(valid) {\n        printf("%d/%d is a valid date\\n", day, month);\n    } else {\n        printf("%d/%d is NOT a valid date\\n", day, month);\n    }\n    \n    return 0;\n}',
    hint: 'Check month range, then day range based on month (considering leap year separately)'
  },
  {
    id: 'c_operators_063',
    topicId: 'c_operators',
    question: 'Write a program to check if a number is divisible by both 3 and 5, or by either using logical operators.',
    mathSolution: 'Divisibility check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    \n    printf("Enter a number: ");\n    scanf("%d", &num);\n    \n    if(num % 3 == 0 && num % 5 == 0) {\n        printf("%d is divisible by both 3 and 5\\n", num);\n    } else if(num % 3 == 0) {\n        printf("%d is divisible by 3 only\\n", num);\n    } else if(num % 5 == 0) {\n        printf("%d is divisible by 5 only\\n", num);\n    } else {\n        printf("%d is divisible by neither 3 nor 5\\n", num);\n    }\n    \n    return 0;\n}',
    hint: 'Use && for "both", || for "either"'
  },
  {
    id: 'c_operators_064',
    topicId: 'c_operators',
    question: 'Write a program to implement a simple login system using logical operators.',
    mathSolution: 'Login validation',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char username[20];\n    int password;\n    \n    // Predefined credentials\n    const char *VALID_USER = "admin";\n    const int VALID_PASS = 12345;\n    \n    printf("Enter username: ");\n    scanf("%s", username);\n    printf("Enter password: ");\n    scanf("%d", &password);\n    \n    if(strcmp(username, VALID_USER) == 0 && password == VALID_PASS) {\n        printf("Login successful! Welcome %s\\n", username);\n    } else {\n        printf("Login failed! Invalid credentials\\n");\n        if(strcmp(username, VALID_USER) != 0) {\n            printf("  - Username is incorrect\\n");\n        }\n        if(password != VALID_PASS) {\n            printf("  - Password is incorrect\\n");\n        }\n    }\n    \n    return 0;\n}',
    hint: 'Use && to check both conditions must be true for successful login'
  },
  {
    id: 'c_operators_065',
    topicId: 'c_operators',
    question: 'Write a program to determine the season based on month using logical operators.',
    mathSolution: 'Season determination',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int month;\n    \n    printf("Enter month number (1-12): ");\n    scanf("%d", &month);\n    \n    printf("Month %d is ", month);\n    \n    if(month == 12 || month == 1 || month == 2) {\n        printf("Winter\\n");\n    } else if(month >= 3 && month <= 5) {\n        printf("Spring\\n");\n    } else if(month >= 6 && month <= 8) {\n        printf("Summer\\n");\n    } else if(month >= 9 && month <= 11) {\n        printf("Autumn/Fall\\n");\n    } else {\n        printf("Invalid month\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Use logical operators to group months into seasons'
  },

  // ============ LEVEL 12: ADVANCED ASSIGNMENT OPERATORS (66-70) ============
  {
    id: 'c_operators_066',
    topicId: 'c_operators',
    question: 'Write a program to calculate factorial using assignment operators.',
    mathSolution: 'Factorial with assignment operators',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num, i;\n    unsigned long long factorial = 1;\n    \n    printf("Enter a positive integer: ");\n    scanf("%d", &num);\n    \n    for(i = 1; i <= num; i++) {\n        factorial *= i;  // Using *= assignment operator\n    }\n    \n    printf("%d! = %llu\\n", num, factorial);\n    \n    return 0;\n}',
    hint: 'factorial *= i is equivalent to factorial = factorial * i'
  },
  {
    id: 'c_operators_067',
    topicId: 'c_operators',
    question: 'Write a program to calculate power of a number using assignment operators.',
    mathSolution: 'Power calculation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int base, exponent, i;\n    unsigned long long result = 1;\n    \n    printf("Enter base: ");\n    scanf("%d", &base);\n    printf("Enter exponent: ");\n    scanf("%d", &exponent);\n    \n    for(i = 1; i <= exponent; i++) {\n        result *= base;  // Using *= assignment operator\n    }\n    \n    printf("%d^%d = %llu\\n", base, exponent, result);\n    \n    return 0;\n}',
    hint: 'Multiply result by base repeatedly using *= operator'
  },
  {
    id: 'c_operators_068',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate multiple compound assignments in one expression.',
    mathSolution: 'Multiple compound assignments',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5, b = 10, c = 15;\n    \n    printf("Initial: a = %d, b = %d, c = %d\\n", a, b, c);\n    \n    a += b *= c /= 2;  // Multiple compound assignments\n    \n    printf("After a += b *= c /= 2:\\n");\n    printf("a = %d, b = %d, c = %d\\n", a, b, c);\n    \n    // Step by step evaluation\n    a = 5, b = 10, c = 15;\n    printf("\\nStep by step:\\n");\n    c /= 2;  // c = 7\n    printf("c /= 2 = %d\\n", c);\n    b *= c;  // b = 10 * 7 = 70\n    printf("b *= c = %d\\n", b);\n    a += b;  // a = 5 + 70 = 75\n    printf("a += b = %d\\n", a);\n    \n    return 0;\n}',
    hint: 'Compound assignments evaluate right to left: a += (b *= (c /= 2))'
  },
  {
    id: 'c_operators_069',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate bitwise compound assignments for RGB color manipulation.',
    mathSolution: 'RGB color manipulation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int color = 0x336699;  // RGB color (hex)\n    unsigned int red, green, blue;\n    \n    printf("Original color: #%06X\\n", color);\n    \n    // Extract RGB components\n    red = (color >> 16) & 0xFF;      // Bits 16-23\n    green = (color >> 8) & 0xFF;      // Bits 8-15\n    blue = color & 0xFF;              // Bits 0-7\n    \n    printf("Red: %d, Green: %d, Blue: %d\\n", red, green, blue);\n    \n    // Modify using compound assignments\n    red >>= 1;        // Reduce red by half\n    green |= 0x20;     // Set a bit in green\n    blue <<= 2;        // Increase blue\n    blue &= 0xFC;      // Clear lower 2 bits\n    \n    printf("\\nAfter modifications:\\n");\n    printf("Red: %d, Green: %d, Blue: %d\\n", red, green, blue);\n    \n    // Reconstruct color\n    color = (red << 16) | (green << 8) | blue;\n    printf("Modified color: #%06X\\n", color);\n    \n    return 0;\n}',
    hint: 'Use bitwise compound assignments (>>=, |=, <<=, &=) for color manipulation'
  },
  {
    id: 'c_operators_070',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate assignment operators in array processing.',
    mathSolution: 'Array processing with assignment operators',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {2, 4, 6, 8, 10};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int sum = 0, product = 1;\n    \n    printf("Original array: ");\n    for(int i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    \n    // Process array using assignment operators\n    for(int i = 0; i < n; i++) {\n        sum += arr[i];           // Accumulate sum\n        product *= arr[i];       // Accumulate product\n        arr[i] += 5;             // Add 5 to each element\n        arr[i] *= 2;             // Double each element\n    }\n    \n    printf("\\n\\nSum of original elements: %d\\n", sum);\n    printf("Product of original elements: %d\\n", product);\n    \n    printf("Modified array (+5 then *2): ");\n    for(int i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    \n    return 0;\n}',
    hint: 'Assignment operators are efficient for array processing and accumulation'
  },

  // ============ LEVEL 13: ADVANCED INCREMENT/DECREMENT (71-75) ============
  {
    id: 'c_operators_071',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate increment/decrement in function calls.',
    mathSolution: 'Increment in function calls',
    codeSolution: '#include <stdio.h>\n\nint square(int x) {\n    return x * x;\n}\n\nint main() {\n    int a = 5;\n    \n    printf("a = %d\\n", a);\n    \n    // Postfix increment in function argument\n    int result1 = square(a++);\n    printf("square(a++) = %d, after call a = %d\\n", result1, a);\n    \n    a = 5;  // Reset\n    \n    // Prefix increment in function argument\n    int result2 = square(++a);\n    printf("square(++a) = %d, after call a = %d\\n", result2, a);\n    \n    a = 5;\n    \n    // Multiple increments in same expression (avoid in practice)\n    printf("\\nWarning: Avoid this:\\n");\n    printf("a = %d\\n", a);\n    int result3 = square(a++) + square(++a);\n    printf("square(a++) + square(++a) = %d, a = %d\\n", result3, a);\n    printf("Result may be compiler-dependent!\\n");\n    \n    return 0;\n}',
    hint: 'Increment/decrement in function calls can lead to unexpected behavior. Best to avoid.'
  },
  {
    id: 'c_operators_072',
    topicId: 'c_operators',
    question: 'Write a program to implement a simple stack using increment/decrement operators.',
    mathSolution: 'Stack with increment/decrement',
    codeSolution: '#include <stdio.h>\n\n#define MAX_SIZE 5\n\nint stack[MAX_SIZE];\nint top = -1;\n\nvoid push(int value) {\n    if(top < MAX_SIZE - 1) {\n        stack[++top] = value;  // Prefix increment\n        printf("Pushed %d, top = %d\\n", value, top);\n    } else {\n        printf("Stack overflow!\\n");\n    }\n}\n\nint pop() {\n    if(top >= 0) {\n        int value = stack[top--];  // Postfix decrement\n        printf("Popped %d, top = %d\\n", value, top);\n        return value;\n    } else {\n        printf("Stack underflow!\\n");\n        return -1;\n    }\n}\n\nint main() {\n    push(10);\n    push(20);\n    push(30);\n    \n    printf("\\nPopping elements:\\n");\n    pop();\n    pop();\n    pop();\n    pop();  // Underflow\n    \n    return 0;\n}',
    hint: '++top for push (increment then use), top-- for pop (use then decrement)'
  },
  {
    id: 'c_operators_073',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate prefix/postfix in array indexing.',
    mathSolution: 'Increment in array indexing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int i = 0;\n    \n    printf("Array: 10, 20, 30, 40, 50\\n\\n");\n    \n    printf("Using arr[i++] (postfix):\\n");\n    i = 0;\n    while(i < 5) {\n        printf("arr[%d] = %d\\n", i, arr[i++]);\n    }\n    \n    printf("\\nUsing arr[++i] (prefix):\\n");\n    i = -1;\n    while(i < 4) {\n        printf("arr[%d] = %d\\n", i+1, arr[++i]);\n    }\n    \n    printf("\\nCopying array using increment:\\n");\n    int source[] = {1, 2, 3, 4, 5};\n    int dest[5];\n    int j = 0, k = 0;\n    \n    while(j < 5) {\n        dest[k++] = source[j++];  // Copy with postfix increments\n    }\n    \n    printf("Source: ");\n    for(j = 0; j < 5; j++) printf("%d ", source[j]);\n    printf("\\nDest:   ");\n    for(j = 0; j < 5; j++) printf("%d ", dest[j]);\n    \n    return 0;\n}',
    hint: 'arr[i++] uses current index then increments, useful for sequential access'
  },
  {
    id: 'c_operators_074',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate pre/post increment in string processing.',
    mathSolution: 'String processing with increment',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello World";\n    char *ptr = str;\n    int length = 0;\n    \n    printf("String: %s\\n", str);\n    \n    // Find string length using pointer increment\n    while(*ptr++) {\n        length++;\n    }\n    printf("Length (using *ptr++): %d\\n", length);\n    \n    // Reset pointer\n    ptr = str;\n    length = 0;\n    \n    // Alternative method\n    while(*ptr) {\n        length++;\n        ptr++;\n    }\n    printf("Length (separate increment): %d\\n", length);\n    \n    // Copy string using increment\n    char dest[50];\n    char *src = str;\n    char *dst = dest;\n    \n    while(*src) {\n        *dst++ = *src++;  // Copy with postfix increments\n    }\n    *dst = \'\\0\';\n    \n    printf("Copied string: %s\\n", dest);\n    \n    return 0;\n}',
    hint: '*ptr++ is common idiom: dereference then increment pointer for string processing'
  },
  {
    id: 'c_operators_075',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate undefined behavior with multiple increments.',
    mathSolution: 'Undefined behavior with increments',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 5;\n    \n    printf("WARNING: These examples show undefined behavior!\\n\\n");\n    \n    printf("Example 1: i = %d\\n", i);\n    printf("i = i++ + ++i; // Undefined\\n");\n    // int result = i++ + ++i;  // Undefined - don\'t use!\n    \n    i = 5;\n    printf("\\nExample 2: i = %d\\n", i);\n    printf("printf(\\"%%d %%d\\", ++i, i++); // Undefined\\n");\n    // printf("%d %d", ++i, i++);  // Undefined\n    \n    i = 5;\n    printf("\\nExample 3: i = %d\\n", i);\n    printf("arr[i] = i++; // Undefined\\n");\n    // int arr[10];\n    // arr[i] = i++;  // Undefined\n    \n    printf("\\nSafe version:\\n");\n    i = 5;\n    int a = i++;\n    int b = ++i;\n    printf("Use separate statements: a = i++ = %d, then b = ++i = %d\\n", a, b);\n    \n    return 0;\n}',
    hint: 'Never use multiple increments on same variable in one expression - it\'s undefined behavior'
  },

  // ============ LEVEL 14: ADVANCED BITWISE OPERATORS (76-85) ============
  {
    id: 'c_operators_076',
    topicId: 'c_operators',
    question: 'Write a program to implement bitwise multiplication and division by powers of 2.',
    mathSolution: 'Multiplication/division using shift',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 15;\n    \n    printf("Original number: %d\\n", num);\n    \n    printf("\\nMultiplication by powers of 2:\\n");\n    printf("%d * 2 = %d (<< 1)\\n", num, num << 1);\n    printf("%d * 4 = %d (<< 2)\\n", num, num << 2);\n    printf("%d * 8 = %d (<< 3)\\n\\n", num, num << 3);\n    \n    printf("Division by powers of 2:\\n");\n    printf("%d / 2 = %d (>> 1)\\n", num, num >> 1);\n    printf("%d / 4 = %d (>> 2)\\n", num, num >> 2);\n    printf("%d / 8 = %d (>> 3)\\n\\n", num, num >> 3);\n    \n    printf("Note: Left shift multiplies, right shift divides\\n");\n    \n    return 0;\n}',
    hint: 'Left shift (<< n) multiplies by 2ⁿ, right shift (>> n) divides by 2ⁿ (for positive numbers)'
  },
  {
    id: 'c_operators_077',
    topicId: 'c_operators',
    question: 'Write a program to find the only non-repeating element in an array using XOR.',
    mathSolution: 'Find non-repeating element using XOR',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 3, 2, 1};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int result = 0;\n    \n    printf("Array: ");\n    for(int i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    \n    // XOR all elements (a ^ a = 0, a ^ 0 = a)\n    for(int i = 0; i < n; i++) {\n        result ^= arr[i];\n    }\n    \n    printf("\\nNon-repeating element: %d\\n", result);\n    \n    // Property demonstration\n    printf("\\nXOR properties:\\n");\n    printf("5 ^ 5 = %d\\n", 5 ^ 5);\n    printf("5 ^ 0 = %d\\n", 5 ^ 0);\n    printf("5 ^ 3 ^ 5 = %d\\n", 5 ^ 3 ^ 5);\n    \n    return 0;\n}',
    hint: 'XOR properties: a ^ a = 0, a ^ 0 = a, XOR is commutative and associative'
  },
  {
    id: 'c_operators_078',
    topicId: 'c_operators',
    question: 'Write a program to find the two non-repeating elements in an array using XOR.',
    mathSolution: 'Find two non-repeating elements',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {2, 4, 6, 8, 4, 2, 7, 6};\n    int n = sizeof(arr) / sizeof(arr[0]);\n    int xor_result = 0, x = 0, y = 0;\n    \n    printf("Array: ");\n    for(int i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    \n    // XOR all elements\n    for(int i = 0; i < n; i++) {\n        xor_result ^= arr[i];\n    }\n    \n    // Find rightmost set bit\n    int set_bit = xor_result & ~(xor_result - 1);\n    \n    // Divide elements into two groups based on the set bit\n    for(int i = 0; i < n; i++) {\n        if(arr[i] & set_bit) {\n            x ^= arr[i];\n        } else {\n            y ^= arr[i];\n        }\n    }\n    \n    printf("\\nTwo non-repeating elements: %d and %d\\n", x, y);\n    \n    return 0;\n}',
    hint: 'XOR all elements, then separate based on any set bit in the result'
  },
  {
    id: 'c_operators_079',
    topicId: 'c_operators',
    question: 'Write a program to implement a simple encryption/decryption using XOR.',
    mathSolution: 'XOR encryption',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char message[] = "Hello World";\n    char key = \'K\';\n    int len = strlen(message);\n    \n    printf("Original message: %s\\n", message);\n    printf("Key: %c (ASCII %d)\\n", key, key);\n    \n    // Encryption\n    printf("\\nEncrypting...\\n");\n    for(int i = 0; i < len; i++) {\n        message[i] = message[i] ^ key;\n    }\n    printf("Encrypted message: ");\n    for(int i = 0; i < len; i++) {\n        printf("%02X ", (unsigned char)message[i]);\n    }\n    \n    // Decryption (XOR with same key)\n    printf("\\n\\nDecrypting...\\n");\n    for(int i = 0; i < len; i++) {\n        message[i] = message[i] ^ key;\n    }\n    printf("Decrypted message: %s\\n", message);\n    \n    return 0;\n}',
    hint: 'XOR encryption: data ^ key = encrypted, encrypted ^ key = original'
  },
  {
    id: 'c_operators_080',
    topicId: 'c_operators',
    question: 'Write a program to check if a number has alternating bits using bitwise operators.',
    mathSolution: 'Check alternating bits',
    codeSolution: '#include <stdio.h>\n#include <stdbool.h>\n\nbool hasAlternatingBits(int n) {\n    int prev = n & 1;  // Get LSB\n    n >>= 1;\n    \n    while(n > 0) {\n        int current = n & 1;\n        if(current == prev) {\n            return false;\n        }\n        prev = current;\n        n >>= 1;\n    }\n    return true;\n}\n\nint main() {\n    int numbers[] = {5, 7, 10, 21, 42};\n    int n = sizeof(numbers) / sizeof(numbers[0]);\n    \n    printf("Checking numbers with alternating bits:\\n\\n");\n    \n    for(int i = 0; i < n; i++) {\n        printf("%d (binary: ", numbers[i]);\n        \n        // Print binary (simplified)\n        for(int bit = 31; bit >= 0; bit--) {\n            if(numbers[i] & (1 << bit)) {\n                printf("1");\n            } else {\n                printf("0");\n            }\n        }\n        printf(") - ");\n        \n        if(hasAlternatingBits(numbers[i])) {\n            printf("Has alternating bits\\n");\n        } else {\n            printf("Does NOT have alternating bits\\n");\n        }\n    }\n    \n    return 0;\n}',
    hint: 'Compare each bit with previous bit to check if they alternate'
  },
  {
    id: 'c_operators_081',
    topicId: 'c_operators',
    question: 'Write a program to generate all subsets of a set using bitwise operators.',
    mathSolution: 'Generate subsets using bitmask',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int set[] = {1, 2, 3};\n    int n = sizeof(set) / sizeof(set[0]);\n    int totalSubsets = 1 << n;  // 2^n subsets\n    \n    printf("Set: {1, 2, 3}\\n");\n    printf("All subsets:\\n\\n");\n    \n    for(int mask = 0; mask < totalSubsets; mask++) {\n        printf("{ ");\n        for(int i = 0; i < n; i++) {\n            if(mask & (1 << i)) {  // Check if ith bit is set\n                printf("%d ", set[i]);\n            }\n        }\n        printf("}\\n");\n    }\n    \n    printf("\\nTotal subsets: %d\\n", totalSubsets);\n    \n    return 0;\n}',
    hint: 'Use bitmask: each bit represents whether an element is included in subset'
  },
  {
    id: 'c_operators_082',
    topicId: 'c_operators',
    question: 'Write a program to find the position of the only set bit using bitwise operators.',
    mathSolution: 'Find position of set bit',
    codeSolution: '#include <stdio.h>\n\nint findSetBitPosition(int n) {\n    if(n == 0) return -1;\n    if((n & (n - 1)) != 0) return -1;  // More than one set bit\n    \n    int position = 0;\n    while(n > 0) {\n        position++;\n        n >>= 1;\n    }\n    return position;\n}\n\nint main() {\n    int numbers[] = {0, 1, 2, 4, 8, 16, 3, 5};\n    int n = sizeof(numbers) / sizeof(numbers[0]);\n    \n    printf("Finding position of the only set bit:\\n\\n");\n    \n    for(int i = 0; i < n; i++) {\n        int pos = findSetBitPosition(numbers[i]);\n        printf("Number: %4d (binary: ", numbers[i]);\n        \n        // Print binary (simplified)\n        for(int bit = 8; bit >= 0; bit--) {\n            if(numbers[i] & (1 << bit)) {\n                printf("1");\n            } else {\n                printf("0");\n            }\n        }\n        printf(") - ");\n        \n        if(pos == -1) {\n            if(numbers[i] == 0) {\n                printf("No set bits\\n");\n            } else {\n                printf("Multiple set bits\\n");\n            }\n        } else {\n            printf("Set bit at position %d\\n", pos);\n        }\n    }\n    \n    return 0;\n}',
    hint: 'n & (n-1) clears the lowest set bit; if result is 0, n had exactly one set bit'
  },
  {
    id: 'c_operators_083',
    topicId: 'c_operators',
    question: 'Write a program to implement a simple bit array using bitwise operators.',
    mathSolution: 'Bit array implementation',
    codeSolution: '#include <stdio.h>\n#include <stdbool.h>\n\n#define BIT_ARRAY_SIZE 1000\n#define INT_SIZE 32\n\nunsigned int bitArray[BIT_ARRAY_SIZE / INT_SIZE + 1];\n\nvoid setBit(int position) {\n    bitArray[position / INT_SIZE] |= 1 << (position % INT_SIZE);\n}\n\nvoid clearBit(int position) {\n    bitArray[position / INT_SIZE] &= ~(1 << (position % INT_SIZE));\n}\n\nbool getBit(int position) {\n    return (bitArray[position / INT_SIZE] >> (position % INT_SIZE)) & 1;\n}\n\nvoid toggleBit(int position) {\n    bitArray[position / INT_SIZE] ^= 1 << (position % INT_SIZE);\n}\n\nint main() {\n    printf("Bit Array Demonstration\\n");\n    printf("Setting bits at positions 5, 10, 15, 20, 25\\n\\n");\n    \n    setBit(5);\n    setBit(10);\n    setBit(15);\n    setBit(20);\n    setBit(25);\n    \n    printf("Checking bits:\\n");\n    for(int i = 0; i <= 30; i++) {\n        if(getBit(i)) {\n            printf("Bit %d is SET\\n", i);\n        }\n    }\n    \n    printf("\\nClearing bit 15 and toggling bit 20:\\n");\n    clearBit(15);\n    toggleBit(20);\n    \n    printf("After operations:\\n");\n    for(int i = 0; i <= 30; i++) {\n        if(getBit(i)) {\n            printf("Bit %d is SET\\n", i);\n        }\n    }\n    \n    return 0;\n}',
    hint: 'Bit array stores 8/16/32 bits per array element, uses bitwise ops for access'
  },
  {
    id: 'c_operators_084',
    topicId: 'c_operators',
    question: 'Write a program to implement CRC (Cyclic Redundancy Check) using bitwise XOR.',
    mathSolution: 'Simple CRC implementation',
    codeSolution: '#include <stdio.h>\n\n// Simple CRC-8 implementation\nunsigned char crc8(unsigned char *data, int len) {\n    unsigned char crc = 0x00;\n    unsigned char poly = 0x07;  // x^8 + x^2 + x + 1\n    \n    for(int i = 0; i < len; i++) {\n        crc ^= data[i];\n        for(int j = 0; j < 8; j++) {\n            if(crc & 0x80) {\n                crc = (crc << 1) ^ poly;\n            } else {\n                crc <<= 1;\n            }\n        }\n    }\n    return crc;\n}\n\nint main() {\n    unsigned char data1[] = "Hello";\n    unsigned char data2[] = "World";\n    \n    printf("Data: %s\\n", data1);\n    unsigned char crc1 = crc8(data1, 5);\n    printf("CRC-8: 0x%02X\\n\\n", crc1);\n    \n    printf("Data: %s\\n", data2);\n    unsigned char crc2 = crc8(data2, 5);\n    printf("CRC-8: 0x%02X\\n", crc2);\n    \n    return 0;\n}',
    hint: 'CRC uses XOR and shift operations to detect errors in data transmission'
  },
  {
    id: 'c_operators_085',
    topicId: 'c_operators',
    question: 'Write a program to implement a simple random number generator using bitwise XOR and shift.',
    mathSolution: 'XOR shift random generator',
    codeSolution: '#include <stdio.h>\n#include <time.h>\n\n// XOR shift random number generator\nunsigned int xorshift32(unsigned int *state) {\n    unsigned int x = *state;\n    x ^= x << 13;\n    x ^= x >> 17;\n    x ^= x << 5;\n    *state = x;\n    return x;\n}\n\nint main() {\n    unsigned int state = time(NULL);  // Seed\n    \n    printf("XOR Shift Random Number Generator\\n");\n    printf("Generating 10 random numbers:\\n\\n");\n    \n    for(int i = 0; i < 10; i++) {\n        printf("%u ", xorshift32(&state));\n        if((i + 1) % 5 == 0) printf("\\n");\n    }\n    \n    return 0;\n}',
    hint: 'XOR shift generators use bitwise XOR and shift operations for fast random numbers'
  },

  // ============ LEVEL 15: ADVANCED TERNARY OPERATOR (86-90) ============
  {
    id: 'c_operators_086',
    topicId: 'c_operators',
    question: 'Write a program to implement FizzBuzz using ternary operator.',
    mathSolution: 'FizzBuzz with ternary',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n = 20;\n    \n    printf("FizzBuzz for numbers 1 to %d:\\n\\n", n);\n    \n    for(int i = 1; i <= n; i++) {\n        // Nested ternary operators for FizzBuzz\n        printf("%s\\n", \n               (i % 3 == 0 && i % 5 == 0) ? "FizzBuzz" :\n               (i % 3 == 0) ? "Fizz" :\n               (i % 5 == 0) ? "Buzz" :\n               (char[10]){i/10 + \'0\', i%10 + \'0\', \'\\0\'});\n    }\n    \n    return 0;\n}',
    hint: 'Ternary operator can replace if-else chains but can become hard to read'
  },
  {
    id: 'c_operators_087',
    topicId: 'c_operators',
    question: 'Write a program to implement a simple calculator using ternary operator.',
    mathSolution: 'Calculator with ternary',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char op;\n    int a, b, result;\n    \n    printf("Enter operator (+, -, *, /): ");\n    scanf("%c", &op);\n    printf("Enter two numbers: ");\n    scanf("%d %d", &a, &b);\n    \n    result = (op == \'+\') ? a + b :\n             (op == \'-\') ? a - b :\n             (op == \'*\') ? a * b :\n             (op == \'/\') ? (b != 0 ? a / b : 0) : 0;\n    \n    printf("\\n%d %c %d = %d\\n", a, op, b, result);\n    \n    if(op == \'/\' && b == 0) {\n        printf("Note: Division by zero is undefined\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Nested ternary operators can handle multiple conditions like a switch'
  },
  {
    id: 'c_operators_088',
    topicId: 'c_operators',
    question: 'Write a program to implement clamp function using ternary operator.',
    mathSolution: 'Clamp function with ternary',
    codeSolution: '#include <stdio.h>\n\nint clamp(int value, int min, int max) {\n    return (value < min) ? min : (value > max) ? max : value;\n}\n\nint main() {\n    int values[] = {5, 15, 25, 35, 45};\n    int min = 10, max = 30;\n    int n = sizeof(values) / sizeof(values[0]);\n    \n    printf("Original values: ");\n    for(int i = 0; i < n; i++) {\n        printf("%d ", values[i]);\n    }\n    \n    printf("\\nClamping to range [%d, %d]\\n", min, max);\n    printf("Clamped values:   ");\n    for(int i = 0; i < n; i++) {\n        printf("%d ", clamp(values[i], min, max));\n    }\n    \n    return 0;\n}',
    hint: 'Clamp restricts a value to a range: if value < min, return min; if value > max, return max; else return value'
  },
  {
    id: 'c_operators_089',
    topicId: 'c_operators',
    question: 'Write a program to implement sign function using ternary operator.',
    mathSolution: 'Sign function with ternary',
    codeSolution: '#include <stdio.h>\n\nint sign(int x) {\n    return (x > 0) ? 1 : (x < 0) ? -1 : 0;\n}\n\nint main() {\n    int numbers[] = {-5, -3, 0, 2, 7, -1, 4};\n    int n = sizeof(numbers) / sizeof(numbers[0]);\n    \n    printf("Number : Sign\\n");\n    printf("---------------\\n");\n    \n    for(int i = 0; i < n; i++) {\n        int s = sign(numbers[i]);\n        printf("%4d   : ", numbers[i]);\n        if(s == 1) printf("+1 (positive)\\n");\n        else if(s == -1) printf("-1 (negative)\\n");\n        else printf(" 0 (zero)\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Sign function: returns 1 for positive, -1 for negative, 0 for zero'
  },
  {
    id: 'c_operators_090',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate ternary operator for conditional initialization.',
    mathSolution: 'Conditional initialization',
    codeSolution: '#include <stdio.h>\n#include <time.h>\n#include <stdlib.h>\n\nint main() {\n    srand(time(NULL));\n    int condition = rand() % 2;  // Random 0 or 1\n    \n    // Conditional initialization using ternary\n    int value = (condition) ? 100 : 200;\n    \n    printf("Condition = %d\\n", condition);\n    printf("Value = %d (initialized based on condition)\\n\\n", value);\n    \n    // Conditional array initialization\n    int size = (condition) ? 5 : 10;\n    int arr[size];\n    \n    printf("Array size = %d (based on condition)\\n", size);\n    for(int i = 0; i < size; i++) {\n        arr[i] = i * i;\n        printf("arr[%d] = %d\\n", i, arr[i]);\n    }\n    \n    // Conditional string\n    const char *message = (condition) ? "Condition was true" : "Condition was false";\n    printf("\\nMessage: %s\\n", message);\n    \n    return 0;\n}',
    hint: 'Ternary operator can be used for conditional initialization of variables, arrays, and pointers'
  },

  // ============ LEVEL 16: ADVANCED OPERATOR COMBINATIONS (91-95) ============
  {
    id: 'c_operators_091',
    topicId: 'c_operators',
    question: 'Write a program to evaluate infix expressions using operator precedence.',
    mathSolution: 'Expression evaluation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5, b = 3, c = 2, d = 4;\n    \n    printf("a = %d, b = %d, c = %d, d = %d\\n\\n", a, b, c, d);\n    \n    // Complex expressions with multiple operators\n    printf("Expression 1: a + b * c = %d\\n", a + b * c);\n    printf("Explanation: multiplication before addition\\n\\n");\n    \n    printf("Expression 2: (a + b) * c = %d\\n", (a + b) * c);\n    printf("Explanation: parentheses change precedence\\n\\n");\n    \n    printf("Expression 3: a > b && b > c || d < a = %d\\n", a > b && b > c || d < a);\n    printf("Explanation: > before && before ||\\n\\n");\n    \n    printf("Expression 4: a = b += c = d = 10 = %d\\n", a = b += c = d = 10);\n    printf("Explanation: assignment right to left\\n\\n");\n    \n    printf("Expression 5: a++ + ++b * c-- = %d\\n", a++ + ++b * c--);\n    printf("Explanation: postfix before prefix before * before +\\n");\n    \n    return 0;\n}',
    hint: 'Operator precedence: postfix > unary > multiplicative > additive > shift > relational > equality > bitwise > logical > ternary > assignment > comma'
  },
  {
    id: 'c_operators_092',
    topicId: 'c_operators',
    question: 'Write a program to implement a simple expression parser using operator precedence.',
    mathSolution: 'Expression parser simulation',
    codeSolution: '#include <stdio.h>\n\nint evaluate(int a, int b, int c, char op1, char op2) {\n    // Simulate parsing of expression a op1 b op2 c\n    int result;\n    \n    // Simple precedence: * and / before + and -\n    if((op1 == \'*\' || op1 == \'/\') && (op2 == \'+\' || op2 == \'-\')) {\n        // op1 has higher precedence\n        int temp;\n        if(op1 == \'*\') temp = a * b;\n        else temp = a / b;\n        \n        if(op2 == \'+\') result = temp + c;\n        else result = temp - c;\n    } \n    else if((op2 == \'*\' || op2 == \'/\') && (op1 == \'+\' || op1 == \'-\')) {\n        // op2 has higher precedence\n        int temp;\n        if(op2 == \'*\') temp = b * c;\n        else temp = b / c;\n        \n        if(op1 == \'+\') result = a + temp;\n        else result = a - temp;\n    }\n    else {\n        // Same precedence, left to right\n        int temp;\n        if(op1 == \'+\') temp = a + b;\n        else if(op1 == \'-\') temp = a - b;\n        else if(op1 == \'*\') temp = a * b;\n        else temp = a / b;\n        \n        if(op2 == \'+\') result = temp + c;\n        else if(op2 == \'-\') result = temp - c;\n        else if(op2 == \'*\') result = temp * c;\n        else result = temp / c;\n    }\n    \n    return result;\n}\n\nint main() {\n    int a = 10, b = 5, c = 2;\n    \n    printf("a = %d, b = %d, c = %d\\n\\n", a, b, c);\n    \n    printf("a + b * c = %d\\n", evaluate(a, b, c, \'+\', \'*\'));\n    printf("a * b + c = %d\\n", evaluate(a, b, c, \'*\', \'+\'));\n    printf("a + b - c = %d\\n", evaluate(a, b, c, \'+\', \'-\'));\n    printf("a / b * c = %d\\n", evaluate(a, b, c, \'/\', \'*\'));\n    \n    return 0;\n}',
    hint: 'Expression parsing considers operator precedence and associativity rules'
  },
  {
    id: 'c_operators_093',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate short-circuit evaluation in complex conditions.',
    mathSolution: 'Short-circuit evaluation',
    codeSolution: '#include <stdio.h>\n\nint func1() {\n    printf("func1 called\\n");\n    return 0;\n}\n\nint func2() {\n    printf("func2 called\\n");\n    return 1;\n}\n\nint func3() {\n    printf("func3 called\\n");\n    return 0;\n}\n\nint main() {\n    int a = 5, b = 0, c = 10;\n    \n    printf("Example 1: (a > 0) && (b > 0) && (c > 0)\\n");\n    if((a > 0) && (b > 0) && (c > 0)) {\n        printf("Condition true\\n");\n    } else {\n        printf("Condition false\\n");\n    }\n    printf("Note: Stops evaluating after b > 0 is false\\n\\n");\n    \n    printf("Example 2: (a < 0) || (b == 0) || (c < 0)\\n");\n    if((a < 0) || (b == 0) || (c < 0)) {\n        printf("Condition true\\n");\n    }\n    printf("Note: Stops evaluating after b == 0 is true\\n\\n");\n    \n    printf("Example 3: Using functions\\n");\n    if(func1() && func2() && func3()) {\n        printf("All true\\n");\n    }\n    printf("Note: func2 and func3 not called because func1 returned false\\n\\n");\n    \n    printf("Example 4: Safe division with short-circuit\\n");\n    int x = 10, y = 0;\n    if(y != 0 && (x / y) > 5) {\n        printf("x/y > 5\\n");\n    } else {\n        printf("Division by zero avoided\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Short-circuit evaluation: && stops at first false, || stops at first true'
  },
  {
    id: 'c_operators_094',
    topicId: 'c_operators',
    question: 'Write a program to implement a simple state machine using operators.',
    mathSolution: 'State machine with operators',
    codeSolution: '#include <stdio.h>\n\nenum State { IDLE, RUNNING, PAUSED, STOPPED };\n\nconst char* getStateName(enum State s) {\n    return (s == IDLE) ? "IDLE" :\n           (s == RUNNING) ? "RUNNING" :\n           (s == PAUSED) ? "PAUSED" :\n           (s == STOPPED) ? "STOPPED" : "UNKNOWN";\n}\n\nint main() {\n    enum State currentState = IDLE;\n    int command;\n    \n    printf("Simple State Machine\\n");\n    printf("Commands: 1=Start, 2=Pause, 3=Resume, 4=Stop, 5=Exit\\n\\n");\n    \n    while(1) {\n        printf("Current state: %s\\n", getStateName(currentState));\n        printf("Enter command: ");\n        scanf("%d", &command);\n        \n        // State transitions using operators\n        int valid = 1;\n        enum State nextState = currentState;\n        \n        if(currentState == IDLE && command == 1) {\n            nextState = RUNNING;\n        } else if(currentState == RUNNING && command == 2) {\n            nextState = PAUSED;\n        } else if(currentState == PAUSED && command == 3) {\n            nextState = RUNNING;\n        } else if(command == 4) {\n            nextState = STOPPED;\n        } else if(command == 5) {\n            printf("Exiting...\\n");\n            break;\n        } else {\n            valid = 0;\n        }\n        \n        if(valid && nextState != currentState) {\n            printf("Transition: %s -> %s\\n\\n", \n                   getStateName(currentState), getStateName(nextState));\n            currentState = nextState;\n        } else if(!valid) {\n            printf("Invalid command for current state\\n\\n");\n        } else {\n            printf("No state change\\n\\n");\n        }\n    }\n    \n    return 0;\n}',
    hint: 'State machines use relational and logical operators to determine valid transitions'
  },
  {
    id: 'c_operators_095',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate operator overloading (not possible in C) and alternatives.',
    mathSolution: 'Operator overloading alternatives',
    codeSolution: '#include <stdio.h>\n\n// C doesn\'t support operator overloading\n// But we can create functions that simulate operations\n\ntypedef struct {\n    int x;\n    int y;\n} Point;\n\n// Function to add two points\nPoint addPoints(Point p1, Point p2) {\n    Point result = {p1.x + p2.x, p1.y + p2.y};\n    return result;\n}\n\n// Function to multiply point by scalar\nPoint scalePoint(Point p, int scalar) {\n    Point result = {p.x * scalar, p.y * scalar};\n    return result;\n}\n\n// Function to check if points are equal\nint pointsEqual(Point p1, Point p2) {\n    return (p1.x == p2.x && p1.y == p2.y);\n}\n\nint main() {\n    Point p1 = {3, 4};\n    Point p2 = {1, 2};\n    \n    printf("Point p1: (%d, %d)\\n", p1.x, p1.y);\n    printf("Point p2: (%d, %d)\\n\\n", p2.x, p2.y);\n    \n    Point sum = addPoints(p1, p2);\n    printf("p1 + p2 = (%d, %d) [using addPoints]\\n", sum.x, sum.y);\n    \n    Point scaled = scalePoint(p1, 3);\n    printf("p1 * 3 = (%d, %d) [using scalePoint]\\n", scaled.x, scaled.y);\n    \n    printf("p1 == p2? %s [using pointsEqual]\\n", pointsEqual(p1, p2) ? "Yes" : "No");\n    \n    printf("\\nNote: C doesn\'t support operator overloading like C++\\n");\n    printf("We use functions instead of operators for custom types\\n");\n    \n    return 0;\n}',
    hint: 'C doesn\'t support operator overloading - use functions to operate on custom types'
  },

  // ============ LEVEL 17: OPERATOR BEST PRACTICES (96-100) ============
  {
    id: 'c_operators_096',
    topicId: 'c_operators',
    question: 'Write a program demonstrating common operator pitfalls and how to avoid them.',
    mathSolution: 'Common operator pitfalls',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("=== COMMON OPERATOR PITFALLS ===\\n\\n");\n    \n    // Pitfall 1: = vs ==\n    int a = 5;\n    printf("Pitfall 1: Using = instead of ==\\n");\n    if(a = 10) {  // Assignment, not comparison!\n        printf("  This always executes! a = %d\\n", a);\n    }\n    printf("  Correct: if(a == 10)\\n\\n");\n    \n    // Pitfall 2: Precedence with bitwise vs logical\n    printf("Pitfall 2: Precedence of & and | vs && and ||\\n");\n    int x = 1, y = 2;\n    if(x & y == 0) {  // Actually x & (y == 0)\n        printf("  Unexpected result due to precedence\\n");\n    }\n    printf("  Correct: (x & y) == 0\\n\\n");\n    \n    // Pitfall 3: Division with integers\n    printf("Pitfall 3: Integer division\\n");\n    int num1 = 5, num2 = 2;\n    float result = num1 / num2;\n    printf("  5 / 2 = %f (integer division before assignment)\\n", result);\n    printf("  Correct: (float)num1 / num2 = %f\\n\\n", (float)num1 / num2);\n    \n    // Pitfall 4: Semicolon after if\n    printf("Pitfall 4: Semicolon after if\\n");\n    int condition = 0;\n    if(condition == 0); {  // Extra semicolon!\n        printf("  This always executes due to extra semicolon\\n");\n    }\n    printf("  Correct: if(condition == 0) without semicolon\\n\\n");\n    \n    // Pitfall 5: Modulus with negative numbers\n    printf("Pitfall 5: Modulus with negative numbers\\n");\n    printf("  -5 %% 2 = %d (sign follows dividend)\\n", -5 % 2);\n    printf("  Be careful when using %% with negatives\\n\\n");\n    \n    // Pitfall 6: Floating point comparisons\n    printf("Pitfall 6: Floating point equality\\n");\n    float f1 = 0.1f + 0.2f;\n    printf("  0.1 + 0.2 = %.20f\\n", f1);\n    printf("  if(f1 == 0.3) is rarely true\\n");\n    printf("  Correct: Use epsilon: if(fabs(f1 - 0.3) < 0.000001)\\n\\n");\n    \n    return 0;\n}',
    hint: 'Common pitfalls: = vs ==, precedence, integer division, extra semicolons, negative modulus, float comparisons'
  },
  {
    id: 'c_operators_097',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate operator precedence table with all operators.',
    mathSolution: 'Complete operator precedence',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5, b = 3, c = 2;\n    int result;\n    \n    printf("Operator Precedence Demonstration\\n");\n    printf("a = %d, b = %d, c = %d\\n\\n", a, b, c);\n    \n    printf("Level 1: Postfix\\n");\n    printf("  arr[a++] = %d (postfix increment)\\n", ((int[]){0,0,0,0,0,10})[a++]);\n    a = 5;\n    \n    printf("\\nLevel 2: Unary\\n");\n    printf("  -a = %d\\n", -a);\n    printf("  ++a = %d (prefix increment)\\n", ++a);\n    a = 5;\n    \n    printf("\\nLevel 3: Multiplicative\\n");\n    printf("  a * b / c = %d\\n", a * b / c);\n    printf("  a * b %% c = %d\\n", a * b % c);\n    \n    printf("\\nLevel 4: Additive\\n");\n    printf("  a + b - c = %d\\n", a + b - c);\n    \n    printf("\\nLevel 5: Shift\\n");\n    printf("  a << 1 = %d\\n", a << 1);\n    \n    printf("\\nLevel 6: Relational\\n");\n    printf("  a > b = %d\\n", a > b);\n    \n    printf("\\nLevel 7: Equality\\n");\n    printf("  a == b = %d\\n", a == b);\n    \n    printf("\\nLevel 8: Bitwise AND\\n");\n    printf("  a & b = %d\\n", a & b);\n    \n    printf("\\nLevel 9: Bitwise XOR\\n");\n    printf("  a ^ b = %d\\n", a ^ b);\n    \n    printf("\\nLevel 10: Bitwise OR\\n");\n    printf("  a | b = %d\\n", a | b);\n    \n    printf("\\nLevel 11: Logical AND\\n");\n    printf("  (a > b) && (b > c) = %d\\n", (a > b) && (b > c));\n    \n    printf("\\nLevel 12: Logical OR\\n");\n    printf("  (a > b) || (b < c) = %d\\n", (a > b) || (b < c));\n    \n    printf("\\nLevel 13: Ternary\\n");\n    result = a > b ? a : b;\n    printf("  a > b ? a : b = %d\\n", result);\n    \n    printf("\\nLevel 14: Assignment\\n");\n    int x, y, z;\n    x = y = z = 10;\n    printf("  x = y = z = 10 => x = %d, y = %d, z = %d\\n", x, y, z);\n    \n    printf("\\nLevel 15: Comma\\n");\n    result = (a + b, b + c, a + c);\n    printf("  (a+b, b+c, a+c) = %d (last expression)\\n", result);\n    \n    return 0;\n}',
    hint: 'Precedence table (highest to lowest): postfix, unary, multiplicative, additive, shift, relational, equality, bitwise, logical, ternary, assignment, comma'
  },
  {
    id: 'c_operators_098',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate associativity rules for operators.',
    mathSolution: 'Operator associativity',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5, b = 3, c = 2;\n    \n    printf("Operator Associativity Demonstration\\n");\n    printf("a = %d, b = %d, c = %d\\n\\n", a, b, c);\n    \n    printf("Left-to-right associativity:\\n");\n    printf("  a - b - c = %d (as (a - b) - c)\\n", a - b - c);\n    printf("  (a - b) - c = %d\\n", (a - b) - c);\n    printf("  a - (b - c) = %d (different!)\\n\\n", a - (b - c));\n    \n    printf("  a / b / c = %d (as (a / b) / c)\\n", a / b / c);\n    printf("  (a / b) / c = %d\\n", (a / b) / c);\n    printf("  a / (b / c) = %d (different!)\\n\\n", a / (b / c));\n    \n    printf("Right-to-left associativity:\\n");\n    int x, y, z;\n    x = y = z = 10;\n    printf("  x = y = z = 10 (evaluated right to left)\\n");\n    printf("  x = %d, y = %d, z = %d\\n\\n", x, y, z);\n    \n    printf("Ternary operator (right to left):\\n");\n    int result = a > b ? a : b > c ? b : c;\n    printf("  a > b ? a : b > c ? b : c = %d\\n", result);\n    printf("  Equivalent to: a > b ? a : (b > c ? b : c)\\n\\n");\n    \n    printf("Unary operators (right to left):\\n");\n    a = 5;\n    printf("  -++a = %d (as -(++a))\\n", -++a);\n    a = 5;\n    printf("  ++a = %d, then - = %d\\n", ++a, -a);\n    \n    return 0;\n}',
    hint: 'Most operators associate left-to-right. Assignment and unary operators associate right-to-left'
  },
  {
    id: 'c_operators_099',
    topicId: 'c_operators',
    question: 'Write a program to demonstrate side effects of operators and sequence points.',
    mathSolution: 'Side effects and sequence points',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("=== SIDE EFFECTS AND SEQUENCE POINTS ===\\n\\n");\n    \n    int i = 5;\n    printf("Example 1: i = %d\\n", i);\n    printf("  i++ + i++ = UNDEFINED (no sequence point)\\n");\n    // printf("%d", i++ + i++);  // Undefined - don\'t use!\n    \n    i = 5;\n    printf("\\nExample 2: i = %d\\n", i);\n    printf("  (i++) + (i++) = UNDEFINED\\n");\n    \n    i = 5;\n    printf("\\nExample 3: i = %d\\n", i);\n    printf("  i = i++ + ++i = UNDEFINED\\n");\n    \n    printf("\\nSAFE VERSIONS:\\n");\n    \n    i = 5;\n    printf("\\nSafe way 1: Use separate statements\\n");\n    int a = i++;\n    int b = i++;\n    printf("  a = i++ = %d, b = i++ = %d, i = %d\\n", a, b, i);\n    \n    i = 5;\n    printf("\\nSafe way 2: Use sequence points\\n");\n    int arr[3] = {0};\n    arr[i] = i++;  // OK? Actually still undefined! Don\'t use!\n    printf("  arr[i] = i++ is also undefined\\n");\n    \n    i = 5;\n    printf("\\nSafe way 3: Use function calls (function call is a sequence point)\\n");\n    printf("  printf(\\"%%d\\", i++) = ");\n    printf("%d", i++);\n    printf(", now i = %d\\n", i);\n    \n    printf("\\nSequence points: ; (end of statement), &&, ||, ?:, function calls\\n");\n    \n    return 0;\n}',
    hint: 'Never modify a variable more than once between sequence points - it\'s undefined behavior'
  },
  {
    id: 'c_operators_100',
    topicId: 'c_operators',
    question: 'Write a comprehensive program demonstrating all operators with best practices.',
    mathSolution: 'Complete operators demonstration with best practices',
    codeSolution: '#include <stdio.h>\n#include <stdbool.h>\n#include <math.h>\n\nint main() {\n    printf("=== COMPREHENSIVE OPERATORS DEMONSTRATION ===\\n\\n");\n    \n    // 1. Arithmetic operators (use parentheses for clarity)\n    printf("1. ARITHMETIC OPERATORS\\n");\n    int a = 15, b = 4;\n    printf("  a = %d, b = %d\\n", a, b);\n    printf("  a + b = %d\\n", a + b);\n    printf("  a - b = %d\\n", a - b);\n    printf("  a * b = %d\\n", a * b);\n    printf("  a / b = %d (integer division)\\n", a / b);\n    printf("  (float)a / b = %.2f (correct division)\\n", (float)a / b);\n    printf("  a %% b = %d (remainder)\\n\\n", a % b);\n    \n    // 2. Relational operators\n    printf("2. RELATIONAL OPERATORS\\n");\n    printf("  a > b = %d\\n", a > b);\n    printf("  a < b = %d\\n", a < b);\n    printf("  a >= b = %d\\n", a >= b);\n    printf("  a <= b = %d\\n", a <= b);\n    printf("  a == b = %d\\n", a == b);\n    printf("  a != b = %d\\n\\n", a != b);\n    \n    // 3. Logical operators (short-circuit evaluation)\n    printf("3. LOGICAL OPERATORS\\n");\n    int x = 5, y = 0;\n    printf("  x = %d, y = %d\\n", x, y);\n    printf("  (x > 0) && (y > 0) = %d (short-circuit avoids division by zero)\\n", \n           (x > 0) && (y > 0));\n    printf("  (x > 0) || (y > 0) = %d\\n", (x > 0) || (y > 0));\n    printf("  !(x == y) = %d\\n\\n", !(x == y));\n    \n    // 4. Bitwise operators (for low-level programming)\n    printf("4. BITWISE OPERATORS\\n");\n    unsigned int flags = 0b1100;\n    unsigned int mask = 0b1010;\n    printf("  flags = %u (binary: 1100)\\n", flags);\n    printf("  mask  = %u (binary: 1010)\\n", mask);\n    printf("  flags & mask = %u (AND)\\n", flags & mask);\n    printf("  flags | mask = %u (OR)\\n", flags | mask);\n    printf("  flags ^ mask = %u (XOR)\\n", flags ^ mask);\n    printf("  ~flags = %u (NOT)\\n", ~flags);\n    printf("  flags << 1 = %u (left shift)\\n", flags << 1);\n    printf("  flags >> 1 = %u (right shift)\\n\\n", flags >> 1);\n    \n    // 5. Assignment operators\n    printf("5. ASSIGNMENT OPERATORS\\n");\n    int val = 10;\n    printf("  val = %d\\n", val);\n    val += 5;  printf("  val += 5 = %d\\n", val);\n    val *= 2;  printf("  val *= 2 = %d\\n", val);\n    val -= 3;  printf("  val -= 3 = %d\\n", val);\n    val /= 4;  printf("  val /= 4 = %d\\n", val);\n    val %= 3;  printf("  val %%= 3 = %d\\n\\n", val);\n    \n    // 6. Increment/Decrement (use alone, not in complex expressions)\n    printf("6. INCREMENT/DECREMENT\\n");\n    int count = 5;\n    printf("  count = %d\\n", count);\n    printf("  ++count = %d (prefix, count=%d)\\n", ++count, count);\n    count = 5;\n    printf("  count++ = %d (postfix, count=%d)\\n", count++, count);\n    \n    // 7. Ternary operator (for simple conditions)\n    printf("\\n7. TERNARY OPERATOR\\n");\n    int max = (a > b) ? a : b;\n    printf("  max(%d, %d) = %d\\n", a, b, max);\n    \n    // 8. sizeof operator\n    printf("\\n8. SIZEOF OPERATOR\\n");\n    printf("  sizeof(int) = %lu bytes\\n", sizeof(int));\n    printf("  sizeof(float) = %lu bytes\\n", sizeof(float));\n    \n    // 9. Pointer operators\n    printf("\\n9. POINTER OPERATORS\\n");\n    int num = 42;\n    int *ptr = #\n    printf("  num = %d, &num = %p\\n", num, &num);\n    printf("  ptr = %p, *ptr = %d\\n", ptr, *ptr);\n    \n    // 10. Comma operator (use sparingly)\n    printf("\\n10. COMMA OPERATOR\\n");\n    int i, j;\n    for(i = 0, j = 10; i < j; i++, j--) {\n        // Comma in for loops is acceptable\n    }\n    printf("  Used in for loops: for(i=0, j=10; i<j; i++, j--)\\n");\n    \n    printf("\\n=== BEST PRACTICES ===\\n");\n    printf("✓ Use parentheses for clarity\\n");\n    printf("✓ Avoid multiple increments in one expression\\n");\n    printf("✓ Use separate statements for complex operations\\n");\n    printf("✓ Be careful with integer division\\n");\n    printf("✓ Use epsilon for float comparisons\\n");\n    printf("✓ Understand precedence and associativity\\n");\n    \n    return 0;\n}',
    hint: 'This program demonstrates all operator types with best practices: use parentheses, avoid undefined behavior, understand precedence'
  }
);