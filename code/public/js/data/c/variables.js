QuizData.questions.push(
  // ========== BASIC VARIABLE DECLARATION (QUESTIONS 1-10) ==========
  {
    id: 'c_var_001',
    topicId: 'c_variables',
    question: 'Write a program to declare an integer variable and print its value.',
    mathSolution: 'Integer variable declaration and initialization',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 10;\n    printf("Value of num: %d", num);\n    return 0;\n}',
    hint: 'Use int keyword to declare integer variables'
  },
  {
    id: 'c_var_002',
    topicId: 'c_variables',
    question: 'Write a program to declare a float variable and print its value.',
    mathSolution: 'Float variable declaration',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float price = 99.99;\n    printf("Price: %.2f", price);\n    return 0;\n}',
    hint: 'Use float for decimal numbers, %.2f prints 2 decimal places'
  },
  {
    id: 'c_var_003',
    topicId: 'c_variables',
    question: 'Write a program to declare a character variable and print it.',
    mathSolution: 'Character variable declaration',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char grade = \'A\';\n    printf("Grade: %c", grade);\n    return 0;\n}',
    hint: 'Character variables use single quotes and %c format specifier'
  },
  {
    id: 'c_var_004',
    topicId: 'c_variables',
    question: 'Write a program to declare a double variable and print it.',
    mathSolution: 'Double variable declaration',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    double pi = 3.14159265359;\n    printf("Value of pi: %.10lf", pi);\n    return 0;\n}',
    hint: 'double has more precision than float, use %lf format specifier'
  },
  {
    id: 'c_var_005',
    topicId: 'c_variables',
    question: 'Write a program to declare multiple variables of different types in one line.',
    mathSolution: 'Multiple variable declaration',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20, c = 30;\n    float x = 1.5, y = 2.5;\n    char ch1 = \'X\', ch2 = \'Y\';\n    \n    printf("Integers: %d, %d, %d\\n", a, b, c);\n    printf("Floats: %.1f, %.1f\\n", x, y);\n    printf("Chars: %c, %c\\n", ch1, ch2);\n    \n    return 0;\n}',
    hint: 'You can declare multiple variables of same type separated by commas'
  },
  {
    id: 'c_var_006',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate variable initialization at declaration vs later.',
    mathSolution: 'Variable initialization timing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5;        // Initialized at declaration\n    int b;            // Declared but not initialized\n    b = 10;           // Initialized later\n    \n    printf("a = %d\\n", a);\n    printf("b = %d\\n", b);\n    \n    return 0;\n}',
    hint: 'Variables can be initialized at declaration or later in the code'
  },
  {
    id: 'c_var_007',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate uninitialized variable (shows garbage value).',
    mathSolution: 'Uninitialized variables contain garbage',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x;  // Uninitialized - contains garbage value\n    float y;  // Uninitialized - contains garbage\n    char z;  // Uninitialized - contains garbage\n    \n    printf("x (uninitialized): %d\\n", x);\n    printf("y (uninitialized): %f\\n", y);\n    printf("z (uninitialized): %c\\n", z);\n    \n    return 0;\n}',
    hint: 'Local variables contain garbage values if not initialized'
  },
  {
    id: 'c_var_008',
    topicId: 'c_variables',
    question: 'Write a program to find the size of different variable types using sizeof operator.',
    mathSolution: 'Size of variables',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a;\n    float b;\n    double c;\n    char d;\n    \n    printf("Size of int: %lu bytes\\n", sizeof(a));\n    printf("Size of float: %lu bytes\\n", sizeof(b));\n    printf("Size of double: %lu bytes\\n", sizeof(c));\n    printf("Size of char: %lu byte\\n", sizeof(d));\n    \n    return 0;\n}',
    hint: 'sizeof operator returns size in bytes'
  },
  {
    id: 'c_var_009',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate variable naming conventions (valid and invalid).',
    mathSolution: 'Variable naming rules',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    // Valid variable names\n    int age = 25;\n    int _salary = 50000;\n    int num1 = 10;\n    int student_age = 20;\n    \n    // Invalid names (commented out - would cause errors)\n    // int 1num = 10;     // Cannot start with digit\n    // int my-name = 5;    // Hyphen not allowed\n    // int float = 3.14;   // Keywords not allowed\n    // int my name = 10;    // Spaces not allowed\n    \n    printf("age: %d\\n", age);\n    printf("_salary: %d\\n", _salary);\n    printf("num1: %d\\n", num1);\n    printf("student_age: %d\\n", student_age);\n    \n    return 0;\n}',
    hint: 'Variable names can have letters, digits, underscore; cannot start with digit'
  },
  {
    id: 'c_var_010',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate case sensitivity in variable names.',
    mathSolution: 'C is case sensitive',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int age = 20;\n    int Age = 30;\n    int AGE = 40;\n    int aGe = 50;\n    \n    printf("age = %d\\n", age);\n    printf("Age = %d\\n", Age);\n    printf("AGE = %d\\n", AGE);\n    printf("aGe = %d\\n", aGe);\n    \n    return 0;\n}',
    hint: 'age, Age, AGE are all different variables in C'
  },

  // ========== INTEGER VARIABLES (QUESTIONS 11-20) ==========
  {
    id: 'c_var_011',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate different integer types: int, short, long.',
    mathSolution: 'Integer type modifiers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    short int si = 32000;\n    int i = 100000;\n    long int li = 5000000;\n    long long int lli = 9000000000;\n    \n    printf("short int: %d\\n", si);\n    printf("int: %d\\n", i);\n    printf("long int: %ld\\n", li);\n    printf("long long int: %lld\\n", lli);\n    \n    printf("\\nSizes:\\n");\n    printf("short: %lu bytes\\n", sizeof(si));\n    printf("int: %lu bytes\\n", sizeof(i));\n    printf("long: %lu bytes\\n", sizeof(li));\n    printf("long long: %lu bytes\\n", sizeof(lli));\n    \n    return 0;\n}',
    hint: 'Use %ld for long, %lld for long long'
  },
  {
    id: 'c_var_012',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate unsigned integer variables.',
    mathSolution: 'Unsigned integers (only positive)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    unsigned int positive = 4294967295;\n    unsigned short small = 65535;\n    \n    printf("unsigned int max: %u\\n", positive);\n    printf("unsigned short max: %hu\\n", small);\n    \n    // This would give warning or error\n    // unsigned int neg = -10;  // Cannot store negative\n    \n    return 0;\n}',
    hint: 'unsigned variables store only non-negative values, use %u format specifier'
  },
  {
    id: 'c_var_013',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate integer overflow.',
    mathSolution: 'Integer overflow concept',
    codeSolution: '#include <stdio.h>\n#include <limits.h>\n\nint main() {\n    int max = INT_MAX;\n    printf("Maximum int: %d\\n", max);\n    \n    max = max + 1;  // Overflow\n    printf("After adding 1: %d (overflow)\\n", max);\n    \n    unsigned int umax = UINT_MAX;\n    printf("\\nUnsigned max: %u\\n", umax);\n    umax = umax + 1;\n    printf("After adding 1: %u (wraps to 0)\\n", umax);\n    \n    return 0;\n}',
    hint: 'Integers wrap around when they exceed their maximum value'
  },
  {
    id: 'c_var_014',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate different ways to initialize integers.',
    mathSolution: 'Integer initialization methods',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10;        // Decimal\n    int b = 0b1010;    // Binary (C23) - may not work in older compilers\n    int c = 012;        // Octal\n    int d = 0xA;        // Hexadecimal\n    int e;              // Uninitialized\n    e = 10;             // Assignment later\n    \n    printf("Decimal 10: %d\\n", a);\n    printf("Binary 1010: %d\\n", b);\n    printf("Octal 12: %d\\n", c);\n    printf("Hex A: %d\\n", d);\n    printf("Assigned later: %d\\n", e);\n    \n    return 0;\n}',
    hint: 'Integers can be initialized in decimal, octal (prefix 0), or hex (prefix 0x)'
  },
  {
    id: 'c_var_015',
    topicId: 'c_variables',
    question: 'Write a program to swap two integer variables using a temporary variable.',
    mathSolution: 'Swapping with temporary variable',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    int temp;\n    \n    printf("Before swap: a = %d, b = %d\\n", a, b);\n    \n    temp = a;\n    a = b;\n    b = temp;\n    \n    printf("After swap: a = %d, b = %d\\n", a, b);\n    \n    return 0;\n}',
    hint: 'Use a temporary variable to hold one value during swap'
  },
  {
    id: 'c_var_016',
    topicId: 'c_variables',
    question: 'Write a program to swap two integer variables without using a temporary variable.',
    mathSolution: 'Swapping without temporary variable',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    \n    printf("Before swap: a = %d, b = %d\\n", a, b);\n    \n    a = a + b;\n    b = a - b;\n    a = a - b;\n    \n    printf("After swap: a = %d, b = %d\\n", a, b);\n    \n    return 0;\n}',
    hint: 'Use addition and subtraction to swap without temp variable'
  },
  {
    id: 'c_var_017',
    topicId: 'c_variables',
    question: 'Write a program to swap two integers using XOR operator.',
    mathSolution: 'Swapping using XOR',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10, b = 20;\n    \n    printf("Before swap: a = %d, b = %d\\n", a, b);\n    \n    a = a ^ b;\n    b = a ^ b;\n    a = a ^ b;\n    \n    printf("After swap: a = %d, b = %d\\n", a, b);\n    \n    return 0;\n}',
    hint: 'XOR (^) can be used to swap values without overflow risk'
  },
  {
    id: 'c_var_018',
    topicId: 'c_variables',
    question: 'Write a program to find the maximum and minimum of two integers.',
    mathSolution: 'Max and min of two numbers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 25, b = 40;\n    int max, min;\n    \n    if(a > b) {\n        max = a;\n        min = b;\n    } else {\n        max = b;\n        min = a;\n    }\n    \n    printf("a = %d, b = %d\\n", a, b);\n    printf("Maximum = %d\\n", max);\n    printf("Minimum = %d\\n", min);\n    \n    return 0;\n}',
    hint: 'Use if-else or ternary operator to find max/min'
  },
  {
    id: 'c_var_019',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate integer variable scope inside blocks.',
    mathSolution: 'Variable scope',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 10;  // Outer scope\n    printf("Outer x = %d\\n", x);\n    \n    {\n        int y = 20;  // Inner scope\n        printf("Inner y = %d\\n", y);\n        printf("Inner can access outer x = %d\\n", x);\n        \n        x = 30;  // Modifying outer variable\n    }\n    \n    // printf("y = %d", y);  // Error: y not accessible here\n    printf("Outer x after modification = %d\\n", x);\n    \n    return 0;\n}',
    hint: 'Variables declared in inner blocks are not accessible outside'
  },
  {
    id: 'c_var_020',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate integer variable shadowing.',
    mathSolution: 'Variable shadowing',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 10;\n    printf("Outer x = %d\\n", x);\n    \n    {\n        int x = 20;  // Shadows outer x\n        printf("Inner x (shadows outer) = %d\\n", x);\n        \n        {\n            int x = 30;  // Shadows both\n            printf("Innermost x = %d\\n", x);\n        }\n        \n        printf("Back to inner x = %d\\n", x);\n    }\n    \n    printf("Back to outer x = %d\\n", x);\n    \n    return 0;\n}',
    hint: 'Inner variables can have same name and hide outer variables'
  },

  // ========== FLOAT AND DOUBLE VARIABLES (QUESTIONS 21-30) ==========
  {
    id: 'c_var_021',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate float and double precision differences.',
    mathSolution: 'Precision of float vs double',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float f = 1.0 / 3.0;\n    double d = 1.0 / 3.0;\n    \n    printf("float (6 decimal): %.6f\\n", f);\n    printf("float (12 decimal): %.12f\\n", f);\n    printf("double (6 decimal): %.6lf\\n", d);\n    printf("double (12 decimal): %.12lf\\n", d);\n    printf("double (15 decimal): %.15lf\\n", d);\n    \n    return 0;\n}',
    hint: 'double has more precision than float'
  },
  {
    id: 'c_var_022',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate scientific notation for float variables.',
    mathSolution: 'Scientific notation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float avogadro = 6.022e23;      // 6.022 × 10^23\n    float planck = 6.626e-34;       // 6.626 × 10^-34\n    double speed = 3.0e8;           // 3.0 × 10^8\n    \n    printf("Avogadro number: %e\\n", avogadro);\n    printf("Planck constant: %e\\n", planck);\n    printf("Speed of light: %.2e m/s\\n", speed);\n    \n    return 0;\n}',
    hint: 'Use e or E for scientific notation, %e format specifier'
  },
  {
    id: 'c_var_023',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate floating point precision issues.',
    mathSolution: 'Floating point precision problems',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    float a = 0.1;\n    float b = 0.2;\n    float sum = a + b;\n    \n    printf("0.1 + 0.2 = %.20f\\n", sum);\n    printf("Expected: 0.3\\n");\n    \n    if(sum == 0.3) {\n        printf("Equal\\n");\n    } else {\n        printf("Not equal due to precision issues\\n");\n    }\n    \n    float tolerance = 0.000001;\n    if(fabs(sum - 0.3) < tolerance) {\n        printf("Approximately equal within tolerance\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Never compare floats directly with ==, use tolerance'
  },
  {
    id: 'c_var_024',
    topicId: 'c_variables',
    question: 'Write a program to convert Celsius to Fahrenheit using float variables.',
    mathSolution: 'Temperature conversion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float celsius, fahrenheit;\n    \n    printf("Enter temperature in Celsius: ");\n    scanf("%f", &celsius);\n    \n    fahrenheit = (celsius * 9.0 / 5.0) + 32.0;\n    \n    printf("%.2f°C = %.2f°F\\n", celsius, fahrenheit);\n    \n    return 0;\n}',
    hint: 'Formula: F = (C × 9/5) + 32'
  },
  {
    id: 'c_var_025',
    topicId: 'c_variables',
    question: 'Write a program to calculate area of circle using float variables.',
    mathSolution: 'Area of circle',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float radius, area;\n    const float PI = 3.14159;\n    \n    printf("Enter radius: ");\n    scanf("%f", &radius);\n    \n    area = PI * radius * radius;\n    \n    printf("Radius = %.2f\\n", radius);\n    printf("Area = %.2f square units\\n", area);\n    \n    return 0;\n}',
    hint: 'Area = πr²'
  },
  {
    id: 'c_var_026',
    topicId: 'c_variables',
    question: 'Write a program to calculate simple interest using float variables.',
    mathSolution: 'Simple Interest = (P × R × T)/100',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float principal, rate, time, interest;\n    \n    printf("Enter principal amount: ");\n    scanf("%f", &principal);\n    printf("Enter rate of interest: ");\n    scanf("%f", &rate);\n    printf("Enter time period (years): ");\n    scanf("%f", &time);\n    \n    interest = (principal * rate * time) / 100;\n    \n    printf("\\nPrincipal: %.2f\\n", principal);\n    printf("Rate: %.2f%%\\n", rate);\n    printf("Time: %.2f years\\n", time);\n    printf("Simple Interest: %.2f\\n", interest);\n    printf("Total Amount: %.2f\\n", principal + interest);\n    \n    return 0;\n}',
    hint: 'Simple interest formula: (P × R × T)/100'
  },
  {
    id: 'c_var_027',
    topicId: 'c_variables',
    question: 'Write a program to calculate compound interest using double variables.',
    mathSolution: 'A = P(1 + r/n)^(nt)',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double principal, rate, time, amount, interest;\n    int n;\n    \n    printf("Enter principal amount: ");\n    scanf("%lf", &principal);\n    printf("Enter annual rate (as decimal, e.g., 0.05 for 5%%): ");\n    scanf("%lf", &rate);\n    printf("Enter time (years): ");\n    scanf("%lf", &time);\n    printf("Enter number of times compounded per year: ");\n    scanf("%d", &n);\n    \n    amount = principal * pow(1 + rate/n, n * time);\n    interest = amount - principal;\n    \n    printf("\\nPrincipal: %.2lf\\n", principal);\n    printf("Rate: %.2lf%%\\n", rate * 100);\n    printf("Time: %.2lf years\\n", time);\n    printf("Compounded %d times per year\\n", n);\n    printf("Compound Interest: %.2lf\\n", interest);\n    printf("Total Amount: %.2lf\\n", amount);\n    \n    return 0;\n}',
    hint: 'Use pow() function from math.h for exponentiation'
  },
  {
    id: 'c_var_028',
    topicId: 'c_variables',
    question: 'Write a program to find the roots of a quadratic equation using double variables.',
    mathSolution: 'ax² + bx + c = 0, roots = [-b ± √(b² - 4ac)] / 2a',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double a, b, c, discriminant, root1, root2, realPart, imagPart;\n    \n    printf("Enter coefficients a, b, c: ");\n    scanf("%lf %lf %lf", &a, &b, &c);\n    \n    discriminant = b * b - 4 * a * c;\n    \n    if(discriminant > 0) {\n        root1 = (-b + sqrt(discriminant)) / (2 * a);\n        root2 = (-b - sqrt(discriminant)) / (2 * a);\n        printf("Roots are real and different: %.2lf and %.2lf\\n", root1, root2);\n    } else if(discriminant == 0) {\n        root1 = root2 = -b / (2 * a);\n        printf("Roots are real and equal: %.2lf and %.2lf\\n", root1, root2);\n    } else {\n        realPart = -b / (2 * a);\n        imagPart = sqrt(-discriminant) / (2 * a);\n        printf("Roots are complex: %.2lf + %.2lfi and %.2lf - %.2lfi\\n", realPart, imagPart, realPart, imagPart);\n    }\n    \n    return 0;\n}',
    hint: 'Use discriminant to determine nature of roots'
  },
  {
    id: 'c_var_029',
    topicId: 'c_variables',
    question: 'Write a program to calculate the distance between two points using double variables.',
    mathSolution: 'Distance = √[(x₂-x₁)² + (y₂-y₁)²]',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double x1, y1, x2, y2, distance;\n    \n    printf("Enter coordinates of first point (x1 y1): ");\n    scanf("%lf %lf", &x1, &y1);\n    printf("Enter coordinates of second point (x2 y2): ");\n    scanf("%lf %lf", &x2, &y2);\n    \n    distance = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));\n    \n    printf("\\nFirst point: (%.2lf, %.2lf)\\n", x1, y1);\n    printf("Second point: (%.2lf, %.2lf)\\n", x2, y2);\n    printf("Distance between points: %.2lf\\n", distance);\n    \n    return 0;\n}',
    hint: 'Use sqrt() and pow() from math.h'
  },
  {
    id: 'c_var_030',
    topicId: 'c_variables',
    question: 'Write a program to calculate the area of a triangle using Herons formula with double variables.',
    mathSolution: 'Area = √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double a, b, c, s, area;\n    \n    printf("Enter three sides of triangle: ");\n    scanf("%lf %lf %lf", &a, &b, &c);\n    \n    if(a + b > c && a + c > b && b + c > a) {\n        s = (a + b + c) / 2;\n        area = sqrt(s * (s - a) * (s - b) * (s - c));\n        \n        printf("\\nTriangle sides: %.2lf, %.2lf, %.2lf\\n", a, b, c);\n        printf("Semi-perimeter: %.2lf\\n", s);\n        printf("Area of triangle: %.2lf square units\\n", area);\n    } else {\n        printf("Invalid triangle! Sides do not satisfy triangle inequality.\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Check triangle inequality before calculating area'
  },

  // ========== CHARACTER VARIABLES (QUESTIONS 31-40) ==========
  {
    id: 'c_var_031',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate character variables and their ASCII values.',
    mathSolution: 'Characters and ASCII',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch1 = \'A\';\n    char ch2 = \'a\';\n    char ch3 = \'0\';\n    char ch4 = \'$\';\n    \n    printf("Character: %c, ASCII: %d\\n", ch1, ch1);\n    printf("Character: %c, ASCII: %d\\n", ch2, ch2);\n    printf("Character: %c, ASCII: %d\\n", ch3, ch3);\n    printf("Character: %c, ASCII: %d\\n", ch4, ch4);\n    \n    return 0;\n}',
    hint: 'Characters are stored as integers (ASCII values)'
  },
  {
    id: 'c_var_032',
    topicId: 'c_variables',
    question: 'Write a program to convert uppercase to lowercase using character variables.',
    mathSolution: 'Case conversion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char upper = \'M\';\n    char lower;\n    \n    lower = upper + 32;\n    \n    printf("Uppercase: %c\\n", upper);\n    printf("Lowercase: %c\\n", lower);\n    \n    char ch = \'z\';\n    printf("\\n\'%c\' in uppercase: %c\\n", ch, ch - 32);\n    \n    return 0;\n}',
    hint: 'ASCII difference between uppercase and lowercase is 32'
  },
  {
    id: 'c_var_033',
    topicId: 'c_variables',
    question: 'Write a program to check if a character is vowel or consonant.',
    mathSolution: 'Vowel/consonant check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch;\n    \n    printf("Enter a character: ");\n    scanf("%c", &ch);\n    \n    if(ch == \'a\' || ch == \'e\' || ch == \'i\' || ch == \'o\' || ch == \'u\' ||\n       ch == \'A\' || ch == \'E\' || ch == \'I\' || ch == \'O\' || ch == \'U\') {\n        printf("%c is a vowel\\n", ch);\n    } else {\n        printf("%c is a consonant\\n", ch);\n    }\n    \n    return 0;\n}',
    hint: 'Check for both uppercase and lowercase vowels'
  },
  {
    id: 'c_var_034',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate escape sequences in character variables.',
    mathSolution: 'Escape sequences',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char newline = \'\\n\';\n    char tab = \'\\t\';\n    char backslash = \'\\\\\';\n    char singlequote = \'\\\'\';\n    char doublequote = \'\"\';\n    \n    printf("Newline character: First line%cSecond line\\n", newline);\n    printf("Tab character: Before%cAfter\\n", tab);\n    printf("Backslash: %c\\n", backslash);\n    printf("Single quote: %c\\n", singlequote);\n    printf("Double quote: %c\\n", doublequote);\n    \n    return 0;\n}',
    hint: 'Escape sequences start with backslash'
  },
  {
    id: 'c_var_035',
    topicId: 'c_variables',
    question: 'Write a program to read a character and print its next character.',
    mathSolution: 'Character arithmetic',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch;\n    \n    printf("Enter a character: ");\n    scanf("%c", &ch);\n    \n    printf("You entered: %c\\n", ch);\n    printf("Next character: %c\\n", ch + 1);\n    printf("ASCII of next: %d\\n", ch + 1);\n    \n    return 0;\n}',
    hint: 'Characters can be used in arithmetic operations'
  },
  {
    id: 'c_var_036',
    topicId: 'c_variables',
    question: 'Write a program to print all ASCII characters from 32 to 126.',
    mathSolution: 'ASCII table printable characters',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i;\n    \n    printf("ASCII Table (32 to 126):\\n");\n    printf("----------------------\\n");\n    \n    for(i = 32; i <= 126; i++) {\n        printf("ASCII %3d: %c", i, i);\n        if((i - 31) % 5 == 0) printf("\\n");\n        else printf("\\t");\n    }\n    \n    return 0;\n}',
    hint: 'Characters are stored as integers, can be used in loops'
  },
  {
    id: 'c_var_037',
    topicId: 'c_variables',
    question: 'Write a program to count vowels and consonants in a string using character variables.',
    mathSolution: 'Count vowels and consonants',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char str[100];\n    int vowels = 0, consonants = 0, i;\n    \n    printf("Enter a string: ");\n    fgets(str, sizeof(str), stdin);\n    \n    for(i = 0; str[i] != \'\\0\'; i++) {\n        char ch = tolower(str[i]);\n        if(isalpha(ch)) {\n            if(ch == \'a\' || ch == \'e\' || ch == \'i\' || ch == \'o\' || ch == \'u\') {\n                vowels++;\n            } else {\n                consonants++;\n            }\n        }\n    }\n    \n    printf("String: %s", str);\n    printf("Vowels: %d\\n", vowels);\n    printf("Consonants: %d\\n", consonants);\n    \n    return 0;\n}',
    hint: 'Use tolower() from ctype.h to handle both cases'
  },
  {
    id: 'c_var_038',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate digit character to integer conversion.',
    mathSolution: 'char digit to int conversion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char digit1 = \'5\';\n    char digit2 = \'9\';\n    \n    int num1 = digit1 - \'0\';\n    int num2 = digit2 - \'0\';\n    \n    printf("Character digit: %c -> Integer: %d\\n", digit1, num1);\n    printf("Character digit: %c -> Integer: %d\\n", digit2, num2);\n    \n    int sum = num1 + num2;\n    printf("Sum of digits: %d + %d = %d\\n", num1, num2, sum);\n    \n    return 0;\n}',
    hint: 'Subtract \'0\' from digit character to get integer value'
  },
  {
    id: 'c_var_039',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate character classification using ctype.h functions.',
    mathSolution: 'Character classification',
    codeSolution: '#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char test_chars[] = {\'A\', \'a\', \'5\', \'$\', \' \', \'\\n\', \'Z\', \'z\', \'0\', \'\\t\'};\n    int n = sizeof(test_chars) / sizeof(test_chars[0]);\n    \n    printf("Character Classification\\n\\n");\n    printf("Char  isdigit isalpha isalnum islower isupper isspace ispunct\\n");\n    printf("----  ------- ------- ------- ------- ------- ------- -------\\n");\n    \n    for(int i = 0; i < n; i++) {\n        char c = test_chars[i];\n        printf("  %c   %7d %7d %7d %7d %7d %7d %7d\\n",\n               c,\n               isdigit(c) ? 1 : 0,\n               isalpha(c) ? 1 : 0,\n               isalnum(c) ? 1 : 0,\n               islower(c) ? 1 : 0,\n               isupper(c) ? 1 : 0,\n               isspace(c) ? 1 : 0,\n               ispunct(c) ? 1 : 0);\n    }\n    \n    return 0;\n}',
    hint: 'ctype.h functions test character properties'
  },
  {
    id: 'c_var_040',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate octal and hexadecimal escape sequences in characters.',
    mathSolution: 'Escape sequences',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char octal_A = \'\\101\';\n    char octal_B = \'\\102\';\n    char hex_A = \'\\x41\';\n    char hex_Z = \'\\x5A\';\n    char hex_a = \'\\x61\';\n    \n    printf("Octal \\\\101: %c\\n", octal_A);\n    printf("Octal \\\\102: %c\\n", octal_B);\n    printf("Hex \\\\x41: %c\\n", hex_A);\n    printf("Hex \\\\x5A: %c\\n", hex_Z);\n    printf("Hex \\\\x61: %c\\n", hex_a);\n    \n    return 0;\n}',
    hint: 'Use \\ooo for octal and \\xhh for hexadecimal escape sequences'
  },

  // ========== TYPE CONVERSION (QUESTIONS 41-50) ==========
  {
    id: 'c_var_041',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate implicit type conversion.',
    mathSolution: 'Implicit type conversion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5, b = 2;\n    float result1, result2;\n    \n    result1 = a / b;\n    result2 = (float)a / b;\n    \n    printf("int a = %d, int b = %d\\n", a, b);\n    printf("a / b (integer division): %f\\n", result1);\n    printf("(float)a / b (float division): %f\\n", result2);\n    \n    float x = 5.5;\n    int y = 2;\n    float z = x + y;\n    printf("\\n5.5 + 2 = %f (int promoted to float)\\n", z);\n    \n    return 0;\n}',
    hint: 'In mixed expressions, lower type is promoted to higher type'
  },
  {
    id: 'c_var_042',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate explicit type casting.',
    mathSolution: 'Explicit type casting',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float f = 10.75;\n    int i;\n    char c;\n    \n    i = (int)f;\n    c = (char)i;\n    \n    printf("float f = %f\\n", f);\n    printf("int i = (int)f = %d (fraction lost)\\n", i);\n    printf("char c = (char)i = %c\\n", c);\n    \n    int a = 5, b = 2;\n    float result = (float)a / b;\n    printf("\\n(float)%d / %d = %f\\n", a, b, result);\n    \n    return 0;\n}',
    hint: 'Use (type)variable for explicit casting'
  },
  {
    id: 'c_var_043',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate integer to character conversion.',
    mathSolution: 'Int to char conversion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int ascii;\n    \n    for(ascii = 65; ascii <= 70; ascii++) {\n        printf("ASCII %d = Character %c\\n", ascii, (char)ascii);\n    }\n    \n    int num = 97;\n    char ch = (char)num;\n    printf("\\nInteger %d as character: %c\\n", num, ch);\n    \n    return 0;\n}',
    hint: 'Integers can be cast to characters to get ASCII representation'
  },
  {
    id: 'c_var_044',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate char to int conversion.',
    mathSolution: 'Char to int conversion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch = \'Z\';\n    int ascii = (int)ch;\n    \n    printf("Character: %c\\n", ch);\n    printf("ASCII value: %d\\n", ascii);\n    \n    char digit = \'7\';\n    int num = digit - \'0\';\n    \n    printf("\\nDigit character: %c\\n", digit);\n    printf("As integer: %d\\n", num);\n    \n    return 0;\n}',
    hint: 'Subtracting \'0\' converts digit character to integer'
  },
  {
    id: 'c_var_045',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate potential data loss in type conversion.',
    mathSolution: 'Data loss in conversion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int large = 1000;\n    char small;\n    float f = 1234.5678;\n    int truncated;\n    \n    small = (char)large;\n    truncated = (int)f;\n    \n    printf("int large = %d\\n", large);\n    printf("char small = (char)large = %d (data lost)\\n", small);\n    \n    printf("\\nfloat f = %f\\n", f);\n    printf("int truncated = (int)f = %d (fraction lost)\\n", truncated);\n    \n    return 0;\n}',
    hint: 'Converting to smaller types may lose data'
  },
  {
    id: 'c_var_046',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate automatic promotion in expressions.',
    mathSolution: 'Type promotion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char c = \'A\';\n    short s = 1000;\n    int i = 50000;\n    float f = 3.14;\n    double d = 2.71828;\n    \n    printf("Type promotion in expressions:\\n");\n    printf("char + int: %d (result type: int)\\n", c + i);\n    printf("short + int: %d (result type: int)\\n", s + i);\n    printf("int + float: %f (result type: float)\\n", i + f);\n    printf("float + double: %lf (result type: double)\\n", f + d);\n    \n    printf("\\nSize of results:\\n");\n    printf("sizeof(c + i): %zu bytes\\n", sizeof(c + i));\n    printf("sizeof(i + f): %zu bytes\\n", sizeof(i + f));\n    \n    return 0;\n}',
    hint: 'Types are promoted to the highest type in expression'
  },
  {
    id: 'c_var_047',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate overflow in type conversion.',
    mathSolution: 'Conversion overflow',
    codeSolution: '#include <stdio.h>\n#include <limits.h>\n\nint main() {\n    long long big = LLONG_MAX;\n    int normal;\n    \n    printf("long long max: %lld\\n", big);\n    normal = (int)big;\n    printf("After casting to int: %d (overflow)\\n\\n", normal);\n    \n    double large_double = 1.8e308;\n    float small_float;\n    \n    printf("double large: %e\\n", large_double);\n    small_float = (float)large_double;\n    printf("After casting to float: %e (overflow to infinity)\\n", small_float);\n    \n    return 0;\n}',
    hint: 'Casting from larger to smaller type can cause overflow'
  },
  {
    id: 'c_var_048',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate signed to unsigned conversion.',
    mathSolution: 'Signed to unsigned conversion',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int signed_num = -50;\n    unsigned int unsigned_num;\n    \n    unsigned_num = (unsigned int)signed_num;\n    \n    printf("Signed int: %d\\n", signed_num);\n    printf("After casting to unsigned: %u\\n", unsigned_num);\n    \n    int a = -10;\n    unsigned int b = 5;\n    \n    printf("\\nSigned + unsigned:\\n");\n    printf("%d + %u = %u\\n", a, b, a + b);\n    \n    if(a < b) {\n        printf("%d < %u is true\\n", a, b);\n    } else {\n        printf("%d < %u is false (due to conversion)\\n", a, b);\n    }\n    \n    return 0;\n}',
    hint: 'Negative signed values become large positive when cast to unsigned'
  },
  {
    id: 'c_var_049',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate truncation in floating point to integer conversion.',
    mathSolution: 'Truncation in conversion',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double values[] = {5.7, 5.2, -5.7, -5.2, 5.0};\n    int n = sizeof(values) / sizeof(values[0]);\n    \n    printf("Floating point to integer truncation:\\n");\n    printf("Original  (int)cast  floor  ceil  round\\n");\n    printf("--------  ---------  -----  ----  -----\\n");\n    \n    for(int i = 0; i < n; i++) {\n        double val = values[i];\n        printf("%8.2f  %8d  %5.0f  %5.0f  %5.0f\\n",\n               val,\n               (int)val,\n               floor(val),\n               ceil(val),\n               round(val));\n    }\n    \n    return 0;\n}',
    hint: 'Casting truncates toward zero; floor/ceil/round provide other behaviors'
  },
  {
    id: 'c_var_050',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate safe type conversion practices.',
    mathSolution: 'Safe type conversion',
    codeSolution: '#include <stdio.h>\n#include <limits.h>\n#include <math.h>\n\nint safe_int_to_short(int value) {\n    if(value > SHRT_MAX || value < SHRT_MIN) {\n        printf("Warning: value %d out of short range\\n", value);\n        return 0;\n    }\n    return (short)value;\n}\n\ndouble safe_float_to_int(double value) {\n    if(value > INT_MAX || value < INT_MIN) {\n        printf("Warning: value %f out of int range\\n", value);\n        return 0;\n    }\n    if(fabs(value - round(value)) > 1e-10) {\n        printf("Warning: precision loss, rounding %f to %f\\n", value, round(value));\n    }\n    return (int)round(value);\n}\n\nint main() {\n    int large = 100000;\n    short result1 = safe_int_to_short(large);\n    \n    double pi = 3.14159;\n    int result2 = safe_float_to_int(pi);\n    \n    return 0;\n}',
    hint: 'Always check ranges and precision before conversion'
  },

  // ========== CONSTANT VARIABLES (QUESTIONS 51-60) ==========
  {
    id: 'c_var_051',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate const variables.',
    mathSolution: 'Constant variables',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    const int MAX = 100;\n    const float PI = 3.14159;\n    const char GRADE = \'A\';\n    \n    printf("MAX = %d\\n", MAX);\n    printf("PI = %.5f\\n", PI);\n    printf("GRADE = %c\\n", GRADE);\n    \n    return 0;\n}',
    hint: 'const variables cannot be modified after initialization'
  },
  {
    id: 'c_var_052',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate const pointer variables.',
    mathSolution: 'Const pointers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 10, y = 20;\n    \n    const int *ptr1 = &x;\n    printf("*ptr1 = %d\\n", *ptr1);\n    ptr1 = &y;\n    \n    int *const ptr2 = &x;\n    *ptr2 = 30;\n    \n    const int *const ptr3 = &x;\n    \n    printf("\\nAfter modifications:\\n");\n    printf("x = %d, y = %d\\n", x, y);\n    \n    return 0;\n}',
    hint: 'const can apply to pointer or data or both'
  },
  {
    id: 'c_var_053',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate #define vs const variables.',
    mathSolution: '#define vs const',
    codeSolution: '#include <stdio.h>\n\n#define MAX 100\n\nint main() {\n    const int MIN = 0;\n    \n    printf("MAX (macro): %d\\n", MAX);\n    printf("MIN (const): %d\\n", MIN);\n    \n    printf("Sizes: const int = %lu bytes\\n", sizeof(MIN));\n    \n    return 0;\n}',
    hint: '#define is preprocessor, const is a variable with type'
  },
  {
    id: 'c_var_054',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate const function parameters.',
    mathSolution: 'Const parameters',
    codeSolution: '#include <stdio.h>\n\nvoid display(const int arr[], int size) {\n    for(int i = 0; i < size; i++) {\n        printf("%d ", arr[i]);\n    }\n}\n\nvoid printValue(const int *num) {\n    printf("Value: %d\\n", *num);\n}\n\nint main() {\n    int numbers[] = {1, 2, 3, 4, 5};\n    int value = 42;\n    \n    printf("Array: ");\n    display(numbers, 5);\n    printf("\\n");\n    \n    printValue(&value);\n    \n    return 0;\n}',
    hint: 'const parameters prevent accidental modification in functions'
  },
  {
    id: 'c_var_055',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate enum constants as variables.',
    mathSolution: 'Enum constants',
    codeSolution: '#include <stdio.h>\n\nenum Weekday { MON = 1, TUE, WED, THU, FRI, SAT, SUN };\n\nint main() {\n    enum Weekday today = WED;\n    \n    printf("Today (enum value): %d\\n", today);\n    printf("MON = %d\\n", MON);\n    printf("TUE = %d\\n", TUE);\n    printf("SUN = %d\\n", SUN);\n    \n    return 0;\n}',
    hint: 'Enum constants are integer constants'
  },
  {
    id: 'c_var_056',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate const array variables.',
    mathSolution: 'Const arrays',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    const int days_in_month[] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};\n    const char *months[] = {"Jan", "Feb", "Mar", "Apr", "May", "Jun",\n                             "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"};\n    \n    printf("Days in each month:\\n");\n    for(int i = 0; i < 12; i++) {\n        printf("  %s: %d days\\n", months[i], days_in_month[i]);\n    }\n    \n    return 0;\n}',
    hint: 'const arrays cannot be modified after initialization'
  },
  {
    id: 'c_var_057',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate string literal vs const char array.',
    mathSolution: 'String literals and const',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char *str1 = "Hello";\n    const char *str2 = "World";\n    char str3[] = "C Programming";\n    \n    printf("str1: %s\\n", str1);\n    printf("str2: %s\\n", str2);\n    printf("str3: %s\\n", str3);\n    \n    str3[0] = \'c\';\n    printf("Modified str3: %s\\n", str3);\n    \n    return 0;\n}',
    hint: 'String literals may be stored in read-only memory'
  },
  {
    id: 'c_var_058',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate const correctness in functions.',
    mathSolution: 'Const correctness',
    codeSolution: '#include <stdio.h>\n\nvoid print_array(const int *arr, int n) {\n    for(int i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n");\n}\n\nint sum_array(const int *arr, int n) {\n    int sum = 0;\n    for(int i = 0; i < n; i++) {\n        sum += arr[i];\n    }\n    return sum;\n}\n\nint main() {\n    int numbers[] = {10, 20, 30, 40, 50};\n    \n    printf("Array: ");\n    print_array(numbers, 5);\n    \n    int total = sum_array(numbers, 5);\n    printf("Sum: %d\\n", total);\n    \n    return 0;\n}',
    hint: 'Use const in function parameters to promise not to modify data'
  },
  {
    id: 'c_var_059',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate const vs #define for mathematical constants.',
    mathSolution: 'Mathematical constants',
    codeSolution: '#include <stdio.h>\n\n#define PI 3.14159\n#define E 2.71828\n\nint main() {\n    const double GOLDEN_RATIO = 1.61803;\n    const double SPEED_OF_LIGHT = 2.99792458e8;\n    \n    printf("Mathematical Constants:\\n");\n    printf("  PI (macro): %.5f\\n", PI);\n    printf("  E (macro): %.5f\\n", E);\n    printf("  Golden Ratio (const): %.5f\\n", GOLDEN_RATIO);\n    printf("  Speed of Light (const): %.2e m/s\\n", SPEED_OF_LIGHT);\n    \n    return 0;\n}',
    hint: 'Both #define and const can be used for constants'
  },
  {
    id: 'c_var_060',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate const structure members.',
    mathSolution: 'Const in structures',
    codeSolution: '#include <stdio.h>\n\nstruct Point {\n    const int x;\n    const int y;\n};\n\nstruct ImmutableData {\n    const int id;\n    const char *name;\n    double value;\n};\n\nint main() {\n    struct Point p = {10, 20};\n    struct ImmutableData data = {1001, "Sensor", 3.14};\n    \n    printf("Point: (%d, %d)\\n", p.x, p.y);\n    printf("Data ID: %d, Name: %s\\n", data.id, data.name);\n    \n    data.value = 6.28;\n    printf("Modified value: %f\\n", data.value);\n    \n    return 0;\n}',
    hint: 'Structure members can be declared const'
  },

  // ========== STATIC AND GLOBAL VARIABLES (QUESTIONS 61-70) ==========
  {
    id: 'c_var_061',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate static variable inside a function.',
    mathSolution: 'Static local variables',
    codeSolution: '#include <stdio.h>\n\nvoid counter() {\n    static int count = 0;\n    int normal = 0;\n    \n    count++;\n    normal++;\n    \n    printf("Static: %d, Normal: %d\\n", count, normal);\n}\n\nint main() {\n    printf("Calling function 3 times:\\n");\n    counter();\n    counter();\n    counter();\n    \n    return 0;\n}',
    hint: 'Static variables retain value between function calls'
  },
  {
    id: 'c_var_062',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate global variable.',
    mathSolution: 'Global variables',
    codeSolution: '#include <stdio.h>\n\nint globalVar = 100;\n\nvoid display() {\n    printf("In function: %d\\n", globalVar);\n}\n\nint main() {\n    printf("In main: %d\\n", globalVar);\n    \n    globalVar = 200;\n    display();\n    \n    return 0;\n}',
    hint: 'Global variables are accessible to all functions'
  },
  {
    id: 'c_var_063',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate local vs global variable with same name.',
    mathSolution: 'Local vs Global',
    codeSolution: '#include <stdio.h>\n\nint x = 100;\n\nint main() {\n    int x = 200;\n    \n    printf("Local x = %d\\n", x);\n    \n    {\n        extern int x;\n        printf("Global x = %d\\n", x);\n    }\n    \n    return 0;\n}',
    hint: 'Local variable takes precedence over global'
  },
  {
    id: 'c_var_064',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate register variable suggestion.',
    mathSolution: 'Register variables',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    register int counter;\n    \n    for(counter = 1; counter <= 10; counter++) {\n        printf("%d ", counter);\n    }\n    \n    return 0;\n}',
    hint: 'register suggests fast access, & operator cannot be used'
  },
  {
    id: 'c_var_065',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate static global variables (file scope).',
    mathSolution: 'Static global variables',
    codeSolution: '#include <stdio.h>\n\nstatic int file_scope_var = 100;\n\nvoid display() {\n    printf("file_scope_var = %d\\n", file_scope_var);\n}\n\nint main() {\n    printf("Accessing static global:\\n");\n    display();\n    \n    file_scope_var = 200;\n    printf("After modification:\\n");\n    display();\n    \n    return 0;\n}',
    hint: 'static global variables have file scope - only visible within the file they are declared'
  },
  {
    id: 'c_var_066',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate static variables for caching.',
    mathSolution: 'Static variables for caching',
    codeSolution: '#include <stdio.h>\n\nint fibonacci(int n) {\n    static int cache[100] = {0};\n    \n    if(n <= 1) return n;\n    \n    if(cache[n] != 0) {\n        printf("Using cached value for fib(%d)\\n", n);\n        return cache[n];\n    }\n    \n    printf("Calculating fib(%d)\\n", n);\n    cache[n] = fibonacci(n-1) + fibonacci(n-2);\n    return cache[n];\n}\n\nint main() {\n    printf("fib(10) = %d\\n\\n", fibonacci(10));\n    printf("fib(10) again = %d\\n", fibonacci(10));\n    \n    return 0;\n}',
    hint: 'Static variables can be used for caching results'
  },
  {
    id: 'c_var_067',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate static variables for ID generation.',
    mathSolution: 'Static ID generator',
    codeSolution: '#include <stdio.h>\n\nint generate_id() {\n    static int next_id = 1000;\n    return next_id++;\n}\n\nint main() {\n    printf("Generated IDs:\\n");\n    for(int i = 0; i < 10; i++) {\n        printf("  ID %d: %d\\n", i+1, generate_id());\n    }\n    \n    return 0;\n}',
    hint: 'Static variables are perfect for counters and ID generators'
  },
  {
    id: 'c_var_068',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate static variables for random number seed.',
    mathSolution: 'Static seed',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <time.h>\n\nint better_rand() {\n    static int seeded = 0;\n    if(!seeded) {\n        srand(time(NULL));\n        seeded = 1;\n        printf("Random number generator seeded\\n");\n    }\n    return rand();\n}\n\nint main() {\n    printf("Random numbers (seeded once):\\n");\n    for(int i = 0; i < 5; i++) {\n        printf("  %d\\n", better_rand());\n    }\n    \n    return 0;\n}',
    hint: 'Static variables ensure initialization happens only once'
  },
  {
    id: 'c_var_069',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate extern storage class variables.',
    mathSolution: 'extern variables',
    codeSolution: '#include <stdio.h>\n\nint global_counter = 0;\n\nvoid increment() {\n    global_counter++;\n}\n\nvoid display() {\n    printf("global_counter = %d\\n", global_counter);\n}\n\nint main() {\n    printf("Initial: ");\n    display();\n    \n    increment();\n    increment();\n    \n    printf("After increment: ");\n    display();\n    \n    return 0;\n}',
    hint: 'extern tells compiler the variable is defined in another file'
  },
  {
    id: 'c_var_070',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate multiple static variables in different functions.',
    mathSolution: 'Multiple static variables',
    codeSolution: '#include <stdio.h>\n\nvoid func1() {\n    static int count = 0;\n    count++;\n    printf("func1 count: %d\\n", count);\n}\n\nvoid func2() {\n    static int count = 0;\n    count++;\n    printf("func2 count: %d\\n", count);\n}\n\nint main() {\n    for(int i = 0; i < 3; i++) {\n        func1();\n        func2();\n    }\n    \n    return 0;\n}',
    hint: 'Each function has its own independent static variables'
  },

  // ========== POINTER VARIABLES (QUESTIONS 71-80) ==========
  {
    id: 'c_var_071',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate pointer variables and their sizes.',
    mathSolution: 'Pointer variables',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 42;\n    int *ptr = &num;\n    \n    printf("Value of num: %d\\n", num);\n    printf("Address of num: %p\\n", &num);\n    printf("Value of ptr: %p\\n", ptr);\n    printf("Value pointed by ptr: %d\\n\\n", *ptr);\n    \n    char *char_ptr;\n    int *int_ptr;\n    float *float_ptr;\n    double *double_ptr;\n    void *void_ptr;\n    \n    printf("Pointer sizes:\\n");\n    printf("  char*:   %lu bytes\\n", sizeof(char_ptr));\n    printf("  int*:    %lu bytes\\n", sizeof(int_ptr));\n    printf("  float*:  %lu bytes\\n", sizeof(float_ptr));\n    printf("  double*: %lu bytes\\n", sizeof(double_ptr));\n    printf("  void*:   %lu bytes\\n", sizeof(void_ptr));\n    \n    return 0;\n}',
    hint: 'Pointer variables store memory addresses'
  },
  {
    id: 'c_var_072',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate pointer to pointer variables.',
    mathSolution: 'Pointer to pointer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 100;\n    int *ptr = &num;\n    int **pptr = &ptr;\n    int ***ppptr = &pptr;\n    \n    printf("num = %d\\n", num);\n    printf("&num = %p\\n\\n", &num);\n    \n    printf("ptr = %p\\n", ptr);\n    printf("*ptr = %d\\n\\n", *ptr);\n    \n    printf("pptr = %p\\n", pptr);\n    printf("*pptr = %p\\n", *pptr);\n    printf("**pptr = %d\\n\\n", **pptr);\n    \n    printf("ppptr = %p\\n", ppptr);\n    printf("*ppptr = %p\\n", *ppptr);\n    printf("**ppptr = %p\\n", **ppptr);\n    printf("***ppptr = %d\\n", ***ppptr);\n    \n    return 0;\n}',
    hint: 'Pointer variables can have multiple levels of indirection'
  },
  {
    id: 'c_var_073',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate void pointer variables.',
    mathSolution: 'void pointers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 42;\n    float f = 3.14f;\n    char c = \'X\';\n    \n    void *vp;\n    \n    vp = &i;\n    printf("void* pointing to int: %d\\n", *(int*)vp);\n    \n    vp = &f;\n    printf("void* pointing to float: %f\\n", *(float*)vp);\n    \n    vp = &c;\n    printf("void* pointing to char: %c\\n", *(char*)vp);\n    \n    return 0;\n}',
    hint: 'void* can point to any data type but must be cast before dereferencing'
  },
  {
    id: 'c_var_074',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate NULL pointer variables.',
    mathSolution: 'NULL pointers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int *ptr = NULL;\n    \n    printf("ptr = %p\\n", ptr);\n    \n    if(ptr == NULL) {\n        printf("Pointer is NULL - points to nothing\\n\\n");\n    }\n    \n    int num = 100;\n    ptr = &num;\n    \n    if(ptr != NULL) {\n        printf("ptr now points to: %d\\n", *ptr);\n    }\n    \n    return 0;\n}',
    hint: 'NULL pointer points to nothing, always check for NULL before dereferencing'
  },
  {
    id: 'c_var_075',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate function pointer variables.',
    mathSolution: 'Function pointers',
    codeSolution: '#include <stdio.h>\n\nint add(int a, int b) { return a + b; }\nint subtract(int a, int b) { return a - b; }\nint multiply(int a, int b) { return a * b; }\nint divide(int a, int b) { return b ? a / b : 0; }\n\nint main() {\n    int (*operation)(int, int);\n    \n    operation = add;\n    printf("add(10, 5) = %d\\n", operation(10, 5));\n    \n    operation = subtract;\n    printf("subtract(10, 5) = %d\\n", operation(10, 5));\n    \n    operation = multiply;\n    printf("multiply(10, 5) = %d\\n", operation(10, 5));\n    \n    int (*ops[])(int, int) = {add, subtract, multiply, divide};\n    const char *names[] = {"Add", "Subtract", "Multiply", "Divide"};\n    \n    printf("\\nUsing array of function pointers:\\n");\n    for(int i = 0; i < 4; i++) {\n        printf("  %s(20, 4) = %d\\n", names[i], ops[i](20, 4));\n    }\n    \n    return 0;\n}',
    hint: 'Function pointer variables store addresses of functions'
  },
  {
    id: 'c_var_076',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate pointer arithmetic.',
    mathSolution: 'Pointer arithmetic',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *ptr = arr;\n    \n    printf("Array: ");\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    printf("\\n\\nPointer arithmetic:\\n");\n    \n    for(int i = 0; i < 5; i++) {\n        printf("*(ptr + %d) = %d\\n", i, *(ptr + i));\n    }\n    \n    printf("\\nptr++: %d\\n", *ptr++);\n    printf("After ptr++: %d\\n", *ptr);\n    printf("++ptr: %d\\n", *++ptr);\n    \n    return 0;\n}',
    hint: 'Pointer arithmetic advances by the size of the pointed-to type'
  },
  {
    id: 'c_var_077',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate array of pointers.',
    mathSolution: 'Array of pointers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num1 = 10, num2 = 20, num3 = 30;\n    int *arr[] = {&num1, &num2, &num3};\n    \n    printf("Array of pointers:\\n");\n    for(int i = 0; i < 3; i++) {\n        printf("arr[%d] = %p, *arr[%d] = %d\\n", i, arr[i], i, *arr[i]);\n    }\n    \n    char *fruits[] = {"Apple", "Banana", "Cherry", "Date"};\n    \n    printf("\\nArray of string pointers:\\n");\n    for(int i = 0; i < 4; i++) {\n        printf("fruits[%d] = %s\\n", i, fruits[i]);\n    }\n    \n    return 0;\n}',
    hint: 'Arrays can store pointers, commonly used for string arrays'
  },
  {
    id: 'c_var_078',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate pointer to array.',
    mathSolution: 'Pointer to array',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    int (*ptr)[5] = &arr;\n    \n    printf("Array elements using pointer to array:\\n");\n    for(int i = 0; i < 5; i++) {\n        printf("(*ptr)[%d] = %d\\n", i, (*ptr)[i]);\n    }\n    \n    int matrix[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};\n    int (*row_ptr)[3] = matrix;\n    \n    printf("\\nMatrix using pointer to row:\\n");\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3; j++) {\n            printf("%d ", row_ptr[i][j]);\n        }\n        printf("\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Pointer to array points to entire array, not just first element'
  },
  {
    id: 'c_var_079',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate const pointer variables.',
    mathSolution: 'const pointers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 10, y = 20;\n    \n    const int *p1 = &x;\n    printf("p1 points to: %d\\n", *p1);\n    p1 = &y;\n    \n    int *const p2 = &x;\n    *p2 = 30;\n    \n    const int *const p3 = &x;\n    \n    printf("\\nAfter modifications:\\n");\n    printf("x = %d, y = %d\\n", x, y);\n    \n    return 0;\n}',
    hint: 'const can apply to the pointer itself, the data it points to, or both'
  },
  {
    id: 'c_var_080',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate restrict pointer variables.',
    mathSolution: 'restrict pointers',
    codeSolution: '#include <stdio.h>\n\nvoid copy_array(int *restrict dest, const int *restrict src, int n) {\n    for(int i = 0; i < n; i++) {\n        dest[i] = src[i];\n    }\n}\n\nint main() {\n    int src[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n    int dest[10];\n    \n    copy_array(dest, src, 10);\n    \n    printf("Source: ");\n    for(int i = 0; i < 10; i++) printf("%d ", src[i]);\n    printf("\\nDest:   ");\n    for(int i = 0; i < 10; i++) printf("%d ", dest[i]);\n    \n    return 0;\n}',
    hint: 'restrict tells compiler that only this pointer accesses the data'
  },

  // ========== VARIABLE SCOPE AND LIFETIME (QUESTIONS 81-90) ==========
  {
    id: 'c_var_081',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate block scope variables.',
    mathSolution: 'Block scope',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10;\n    printf("Outer block: a = %d\\n", a);\n    \n    {\n        int b = 20;\n        printf("Inner block 1: a = %d, b = %d\\n", a, b);\n        \n        {\n            int c = 30;\n            printf("Inner block 2: a = %d, b = %d, c = %d\\n", a, b, c);\n        }\n    }\n    \n    printf("Back to outer block: a = %d\\n", a);\n    \n    return 0;\n}',
    hint: 'Variables declared in inner blocks are not accessible in outer blocks'
  },
  {
    id: 'c_var_082',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate function scope variables.',
    mathSolution: 'Function scope',
    codeSolution: '#include <stdio.h>\n\nvoid func1() {\n    int x = 10;\n    printf("func1: x = %d\\n", x);\n}\n\nvoid func2() {\n    int x = 20;\n    printf("func2: x = %d\\n", x);\n}\n\nint main() {\n    int x = 30;\n    \n    printf("main: x = %d\\n", x);\n    func1();\n    func2();\n    \n    return 0;\n}',
    hint: 'Each function has its own scope'
  },
  {
    id: 'c_var_083',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate file scope (global) variables.',
    mathSolution: 'File scope',
    codeSolution: '#include <stdio.h>\n\nint global = 100;\n\nvoid func1() {\n    printf("func1: global = %d\\n", global);\n    global += 50;\n}\n\nvoid func2() {\n    printf("func2: global = %d\\n", global);\n}\n\nint main() {\n    printf("main: global = %d\\n", global);\n    func1();\n    func2();\n    \n    return 0;\n}',
    hint: 'Global variables are visible throughout the file'
  },
  {
    id: 'c_var_084',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate variable shadowing.',
    mathSolution: 'Variable shadowing',
    codeSolution: '#include <stdio.h>\n\nint x = 100;\n\nint main() {\n    int x = 200;\n    printf("Local x = %d\\n", x);\n    \n    {\n        int x = 300;\n        printf("Inner block x = %d\\n", x);\n        \n        {\n            extern int x;\n            printf("Global x = %d\\n", x);\n        }\n    }\n    \n    printf("Local x again = %d\\n", x);\n    \n    return 0;\n}',
    hint: 'Inner variables can hide outer variables with same name'
  },
  {
    id: 'c_var_085',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate variable lifetime.',
    mathSolution: 'Variable lifetime',
    codeSolution: '#include <stdio.h>\n\nint global = 1;\nstatic int file_static = 2;\n\nint* create_static() {\n    static int static_local = 4;\n    printf("Inside create_static: static_local = %d\\n", static_local);\n    static_local++;\n    return &static_local;\n}\n\nint main() {\n    printf("global: %d\\n", global);\n    printf("file_static: %d\\n", file_static);\n    \n    int *p1 = create_static();\n    int *p2 = create_static();\n    printf("Static value persists: %d, %d\\n", *p1, *p2);\n    \n    return 0;\n}',
    hint: 'Lifetime: global/static (program execution), local/auto (function execution)'
  },
  {
    id: 'c_var_086',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate thread-local variables (C11).',
    mathSolution: 'Thread-local variables',
    codeSolution: '#include <stdio.h>\n#include <threads.h>\n\nthread_local int tls_counter = 0;\n\nint thread_func(void *arg) {\n    int thread_id = *(int*)arg;\n    \n    for(int i = 0; i < 5; i++) {\n        tls_counter++;\n        printf("Thread %d: tls_counter = %d\\n", thread_id, tls_counter);\n    }\n    \n    return 0;\n}\n\nint main() {\n    thrd_t t1, t2;\n    int id1 = 1, id2 = 2;\n    \n    tls_counter = 100;\n    printf("Main thread: tls_counter = %d\\n", tls_counter);\n    \n    thrd_create(&t1, thread_func, &id1);\n    thrd_create(&t2, thread_func, &id2);\n    \n    thrd_join(t1, NULL);\n    thrd_join(t2, NULL);\n    \n    printf("\\nMain thread after: tls_counter = %d (unchanged)\\n", tls_counter);\n    \n    return 0;\n}',
    hint: 'thread_local variables have a separate instance for each thread'
  },
  {
    id: 'c_var_087',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate volatile variables.',
    mathSolution: 'volatile variables',
    codeSolution: '#include <stdio.h>\n#include <signal.h>\n\nvolatile int flag = 0;\n\nvoid signal_handler(int sig) {\n    flag = 1;\n}\n\nint main() {\n    signal(SIGINT, signal_handler);\n    \n    printf("Flag initial value: %d\\n", flag);\n    printf("Press Ctrl+C to change flag...\\n");\n    \n    int count = 0;\n    while(flag == 0) {\n        if(count % 10000000 == 0) {\n            printf("Waiting... flag = %d\\n", flag);\n        }\n        count++;\n    }\n    \n    printf("\\nFlag changed to %d! Exiting.\\n", flag);\n    \n    return 0;\n}',
    hint: 'volatile tells compiler variable may change unexpectedly'
  },
  {
    id: 'c_var_088',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate const volatile variables.',
    mathSolution: 'const volatile variables',
    codeSolution: '#include <stdio.h>\n\nconst volatile int hardware_register = 0x1234;\n\nvoid simulate_hardware_change() {\n    *(int*)&hardware_register = 0x5678;\n}\n\nint main() {\n    printf("Initial hardware register: 0x%X\\n", hardware_register);\n    \n    simulate_hardware_change();\n    \n    printf("After external change: 0x%X\\n", hardware_register);\n    \n    return 0;\n}',
    hint: 'const volatile variables cannot be modified by program but may change externally'
  },
  {
    id: 'c_var_089',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate _Atomic variables (C11).',
    mathSolution: 'Atomic variables',
    codeSolution: '#include <stdio.h>\n#include <stdatomic.h>\n#include <threads.h>\n\natomic_int counter = 0;\n\nint thread_func(void *arg) {\n    for(int i = 0; i < 10000; i++) {\n        atomic_fetch_add(&counter, 1);\n    }\n    return 0;\n}\n\nint main() {\n    thrd_t t1, t2;\n    \n    printf("Initial counter: %d\\n", counter);\n    \n    thrd_create(&t1, thread_func, NULL);\n    thrd_create(&t2, thread_func, NULL);\n    \n    thrd_join(t1, NULL);\n    thrd_join(t2, NULL);\n    \n    printf("Final counter: %d (expected 20000)\\n", counter);\n    \n    return 0;\n}',
    hint: 'Atomic variables ensure thread-safe operations without explicit locking'
  },
  {
    id: 'c_var_090',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate different storage class specifiers together.',
    mathSolution: 'Storage classes combined',
    codeSolution: '#include <stdio.h>\n\nint global = 10;\nstatic int file_static = 20;\n\nvoid demonstrate_storage() {\n    auto int a = 30;\n    static int func_static = 40;\n    register int r = 50;\n    \n    printf("Inside function:\\n");\n    printf("  auto: %d\\n", a);\n    printf("  static (function): %d\\n", func_static);\n    printf("  register: %d\\n", r);\n    \n    func_static++;\n}\n\nint main() {\n    printf("Global: %d\\n", global);\n    printf("File static: %d\\n", file_static);\n    \n    demonstrate_storage();\n    demonstrate_storage();\n    \n    return 0;\n}',
    hint: 'C has auto, register, static, extern, and thread_local storage classes'
  },

  // ========== ADVANCED VARIABLE CONCEPTS (QUESTIONS 91-100) ==========
  {
    id: 'c_var_091',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate variable-length array (VLA) variables.',
    mathSolution: 'VLA variables',
    codeSolution: '#include <stdio.h>\n\nvoid print_matrix(int n, int m, int matrix[n][m]) {\n    for(int i = 0; i < n; i++) {\n        for(int j = 0; j < m; j++) {\n            printf("%3d ", matrix[i][j]);\n        }\n        printf("\\n");\n    }\n}\n\nint main() {\n    int rows, cols;\n    \n    printf("Enter number of rows: ");\n    scanf("%d", &rows);\n    printf("Enter number of columns: ");\n    scanf("%d", &cols);\n    \n    int matrix[rows][cols];\n    \n    for(int i = 0; i < rows; i++) {\n        for(int j = 0; j < cols; j++) {\n            matrix[i][j] = i * cols + j + 1;\n        }\n    }\n    \n    printf("\\n%d x %d matrix:\\n", rows, cols);\n    print_matrix(rows, cols, matrix);\n    \n    return 0;\n}',
    hint: 'VLA size can be determined at runtime (C99 feature)'
  },
  {
    id: 'c_var_092',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate flexible array member variables.',
    mathSolution: 'Flexible array members',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct FlexArray {\n    int length;\n    int data[];\n};\n\nint main() {\n    struct FlexArray *arr = malloc(sizeof(struct FlexArray) + 5 * sizeof(int));\n    arr->length = 5;\n    for(int i = 0; i < 5; i++) {\n        arr->data[i] = i * 10;\n    }\n    \n    printf("Array of %d integers:\\n", arr->length);\n    for(int i = 0; i < arr->length; i++) {\n        printf("  arr[%d] = %d\\n", i, arr->data[i]);\n    }\n    \n    free(arr);\n    \n    return 0;\n}',
    hint: 'Flexible array members allow structures with variable size at the end (C99)'
  },
  {
    id: 'c_var_093',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate designated initializers (C99).',
    mathSolution: 'Designated initializers',
    codeSolution: '#include <stdio.h>\n\nstruct Point {\n    int x;\n    int y;\n    int z;\n};\n\nint main() {\n    int arr[10] = {[0] = 10, [5] = 50, [9] = 90};\n    \n    printf("Array with designated initializers:\\n");\n    for(int i = 0; i < 10; i++) {\n        printf("arr[%d] = %d\\n", i, arr[i]);\n    }\n    \n    struct Point p1 = {.x = 100, .z = 300};\n    struct Point p2 = {.y = 200};\n    \n    printf("\\nStructure with designated initializers:\\n");\n    printf("  p1: (%d, %d, %d)\\n", p1.x, p1.y, p1.z);\n    printf("  p2: (%d, %d, %d)\\n", p2.x, p2.y, p2.z);\n    \n    return 0;\n}',
    hint: 'Designated initializers allow initializing specific array elements or structure members'
  },
  {
    id: 'c_var_094',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate compound literal variables (C99).',
    mathSolution: 'Compound literals',
    codeSolution: '#include <stdio.h>\n\nstruct Point {\n    int x;\n    int y;\n};\n\nvoid print_point(struct Point p) {\n    printf("(%d, %d)\\n", p.x, p.y);\n}\n\nint main() {\n    int *p = &(int){100};\n    printf("Scalar compound literal: %d\\n", *p);\n    \n    int *arr = (int[]){1, 2, 3, 4, 5};\n    printf("Array compound literal: ");\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", arr[i]);\n    }\n    \n    struct Point *pt = &(struct Point){10, 20};\n    printf("\\nStructure compound literal: (%d, %d)\\n", pt->x, pt->y);\n    \n    print_point((struct Point){30, 40});\n    \n    return 0;\n}',
    hint: 'Compound literals create unnamed objects with specified values'
  },
  {
    id: 'c_var_095',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate bit-field variables in structures.',
    mathSolution: 'Bit-field variables',
    codeSolution: '#include <stdio.h>\n\nstruct Flags {\n    unsigned int read : 1;\n    unsigned int write : 1;\n    unsigned int execute : 1;\n    unsigned int reserved : 5;\n};\n\nstruct Date {\n    unsigned int day : 5;\n    unsigned int month : 4;\n    unsigned int year : 11;\n};\n\nint main() {\n    struct Flags perm = {1, 1, 0, 0};\n    \n    printf("Flags structure size: %zu bytes\\n", sizeof(perm));\n    printf("  read: %d\\n", perm.read);\n    printf("  write: %d\\n", perm.write);\n    printf("  execute: %d\\n\\n", perm.execute);\n    \n    struct Date today = {15, 3, 2024};\n    \n    printf("Date structure size: %zu bytes\\n", sizeof(today));\n    printf("  Day: %d\\n", today.day);\n    printf("  Month: %d\\n", today.month);\n    printf("  Year: %d\\n", today.year);\n    \n    return 0;\n}',
    hint: 'Bit-fields pack multiple variables into fewer bytes'
  },
  {
    id: 'c_var_096',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate anonymous union variables.',
    mathSolution: 'Anonymous union variables',
    codeSolution: '#include <stdio.h>\n\nstruct Vector3 {\n    union {\n        struct {\n            float x, y, z;\n        };\n        float coords[3];\n    };\n};\n\nint main() {\n    struct Vector3 v = {.x = 1.5f, .y = 2.5f, .z = 3.5f};\n    \n    printf("Vector access via members: (%f, %f, %f)\\n", v.x, v.y, v.z);\n    printf("Vector access via array: [%f, %f, %f]\\n\\n", v.coords[0], v.coords[1], v.coords[2]);\n    \n    return 0;\n}',
    hint: 'Anonymous union members allow direct access without extra nesting'
  },
  {
    id: 'c_var_097',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate typeof operator with variables (C23).',
    mathSolution: 'typeof operator',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 42;\n    float y = 3.14f;\n    double z = 2.71828;\n    \n    typeof(x) a = 100;\n    typeof(y) b = 1.5f;\n    typeof(z) c = 1.618;\n    typeof(x + y) d = x + y;\n    \n    printf("typeof(x) a = %d\\n", a);\n    printf("typeof(y) b = %f\\n", b);\n    printf("typeof(z) c = %f\\n", c);\n    printf("typeof(x + y) d = %f\\n\\n", d);\n    \n    #define SWAP(a, b) do { \\\n        typeof(a) temp = (a); \\\n        (a) = (b); \\\n        (b) = temp; \\\n    } while(0)\n    \n    int p = 10, q = 20;\n    float r = 1.5f, s = 2.5f;\n    \n    SWAP(p, q);\n    SWAP(r, s);\n    \n    printf("After SWAP macro:\\n");\n    printf("  p = %d, q = %d\\n", p, q);\n    printf("  r = %f, s = %f\\n", r, s);\n    \n    return 0;\n}',
    hint: 'typeof deduces the type of a variable, useful for generic macros (C23)'
  },
  {
    id: 'c_var_098',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate _Generic with variables (C11).',
    mathSolution: 'Generic selection',
    codeSolution: '#include <stdio.h>\n\n#define type_name(x) _Generic((x), \\\n    int: "int", \\\n    float: "float", \\\n    double: "double", \\\n    char: "char", \\\n    default: "other")\n\nint main() {\n    int i = 42;\n    float f = 3.14f;\n    double d = 2.71828;\n    char c = \'A\';\n    \n    printf("Type names using _Generic:\\n");\n    printf("  i (int): %s\\n", type_name(i));\n    printf("  f (float): %s\\n", type_name(f));\n    printf("  d (double): %s\\n", type_name(d));\n    printf("  c (char): %s\\n\\n", type_name(c));\n    \n    return 0;\n}',
    hint: '_Generic provides compile-time type selection based on variable type (C11)'
  },
  {
    id: 'c_var_099',
    topicId: 'c_variables',
    question: 'Write a program to demonstrate errno variable for error handling.',
    mathSolution: 'errno variable',
    codeSolution: '#include <stdio.h>\n#include <errno.h>\n#include <string.h>\n\nint main() {\n    FILE *file = fopen("nonexistent.txt", "r");\n    \n    if(file == NULL) {\n        printf("Error opening file\\n");\n        printf("  errno = %d\\n", errno);\n        printf("  Error message: %s\\n", strerror(errno));\n        perror("  perror output");\n    }\n    \n    return 0;\n}',
    hint: 'errno is set by system calls to indicate error conditions'
  },
  {
    id: 'c_var_100',
    topicId: 'c_variables',
    question: 'Write a comprehensive program demonstrating all variable types in C.',
    mathSolution: 'Complete variable demonstration',
    codeSolution: '#include <stdio.h>\n#include <stdint.h>\n#include <stdbool.h>\n#include <stddef.h>\n\nint global_int = 100;\nstatic int static_global = 200;\nconst int const_global = 300;\n\nint main() {\n    printf("========================================\\n");\n    printf("   COMPLETE VARIABLE TYPES DEMO        \\n");\n    printf("========================================\\n\\n");\n    \n    printf("1. BASIC TYPES:\\n");\n    int i = 42;\n    float f = 3.14f;\n    double d = 2.71828;\n    char c = \'Z\';\n    bool b = true;\n    \n    printf("  int: %d\\n", i);\n    printf("  float: %f\\n", f);\n    printf("  double: %lf\\n", d);\n    printf("  char: %c\\n", c);\n    printf("  bool: %d\\n\\n", b);\n    \n    printf("2. INTEGER VARIANTS:\\n");\n    short s = 32767;\n    long l = 100000L;\n    long long ll = 10000000000LL;\n    unsigned u = 4000000000U;\n    \n    printf("  short: %d\\n", s);\n    printf("  long: %ld\\n", l);\n    printf("  long long: %lld\\n", ll);\n    printf("  unsigned: %u\\n\\n", u);\n    \n    printf("3. STORAGE CLASS VARIABLES:\\n");\n    auto int auto_var = 10;\n    register int reg_var = 20;\n    static int static_var = 30;\n    extern int global_int;\n    \n    printf("  auto: %d\\n", auto_var);\n    printf("  register: %d\\n", reg_var);\n    printf("  static: %d\\n", static_var);\n    printf("  extern (global): %d\\n\\n", global_int);\n    \n    printf("4. POINTER VARIABLES:\\n");\n    int *ptr = &i;\n    int **pptr = &ptr;\n    void *vptr = &i;\n    \n    printf("  int*: %p -> %d\\n", ptr, *ptr);\n    printf("  int**: %p -> %p\\n", pptr, *pptr);\n    printf("  void*: %p\\n\\n", vptr);\n    \n    printf("5. CONST VARIABLES:\\n");\n    const int ci = 100;\n    const float cf = 3.14159f;\n    \n    printf("  const int: %d\\n", ci);\n    printf("  const float: %f\\n\\n", cf);\n    \n    printf("6. SIZE_T AND PTRDIFF_T:\\n");\n    size_t sz = sizeof(int);\n    int arr[10];\n    ptrdiff_t diff = &arr[9] - &arr[0];\n    \n    printf("  size_t: %zu\\n", sz);\n    printf("  ptrdiff_t: %td\\n\\n", diff);\n    \n    printf("========================================\\n");\n    \n    return 0;\n}',
    hint: 'This comprehensive program demonstrates all major variable types in C'
  }
);