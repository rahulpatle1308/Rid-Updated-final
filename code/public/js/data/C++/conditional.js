QuizData.questions.push(
  {
    id: "cpp_conditional_1",
    topicId: "cpp_conditionals",
    question: "What are conditional statements in C++? Why are they used?",
    mathSolution: "Conditional statements concept",
    codeSolution:
      "Conditional statements control program flow based on conditions. They allow executing different code blocks depending on whether a condition is true or false.",
    hint: "They help make decisions in code - like choosing different paths based on conditions.",
  },
  {
    id: "cpp_conditional_2",
    topicId: "cpp_conditionals",
    question: "What are the different types of conditional statements in C++?",
    mathSolution: "Types of conditionals",
    codeSolution:
      "1. if statement\n2. if-else statement\n3. if-else if ladder\n4. switch statement\n5. nested if statements\n6. ternary operator (conditional operator)",
    hint: "There are 6 main types including if, if-else, switch, and ternary operator.",
  },
  {
    id: "cpp_conditional_3",
    topicId: "cpp_conditionals",
    question:
      "Write a program using if statement to check if a number is positive.",
    mathSolution: "Positive number check",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int num = 10;\n    if(num > 0) {\n        cout << num << " is positive" << endl;\n    }\n    return 0;\n}',
    hint: "Use condition num > 0 inside if statement.",
  },
  {
    id: "cpp_conditional_4",
    topicId: "cpp_conditionals",
    question:
      "Write a program using if-else to check if a number is even or odd.",
    mathSolution: "Even/odd check",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int num = 7;\n    if(num % 2 == 0) {\n        cout << num << " is even" << endl;\n    } else {\n        cout << num << " is odd" << endl;\n    }\n    return 0;\n}',
    hint: "Use modulo operator % to check divisibility by 2.",
  },
  {
    id: "cpp_conditional_5",
    topicId: "cpp_conditionals",
    question:
      "Write a program to find the largest of two numbers using if-else.",
    mathSolution: "Max of two",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a = 15, b = 20;\n    if(a > b) {\n        cout << a << " is larger" << endl;\n    } else {\n        cout << b << " is larger" << endl;\n    }\n    return 0;\n}',
    hint: "Compare a and b using > operator.",
  },
  {
    id: "cpp_conditional_6",
    topicId: "cpp_conditionals",
    question:
      "Write a program using if-else if ladder to check if a number is positive, negative, or zero.",
    mathSolution: "Number sign check",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int num = -5;\n    if(num > 0) {\n        cout << "Positive" << endl;\n    } else if(num < 0) {\n        cout << "Negative" << endl;\n    } else {\n        cout << "Zero" << endl;\n    }\n    return 0;\n}',
    hint: "Check three conditions: >0, <0, and else for zero.",
  },
  {
    id: "cpp_conditional_7",
    topicId: "cpp_conditionals",
    question:
      "Write a program to find the largest of three numbers using nested if.",
    mathSolution: "Max of three",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a = 10, b = 25, c = 15;\n    if(a > b) {\n        if(a > c) {\n            cout << a << " is largest" << endl;\n        } else {\n            cout << c << " is largest" << endl;\n        }\n    } else {\n        if(b > c) {\n            cout << b << " is largest" << endl;\n        } else {\n            cout << c << " is largest" << endl;\n        }\n    }\n    return 0;\n}',
    hint: "Compare a with b first, then compare the larger with c.",
  },
  {
    id: "cpp_conditional_8",
    topicId: "cpp_conditionals",
    question:
      "Write a program to find the largest of three numbers using if-else if ladder.",
    mathSolution: "Max of three (ladder)",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a = 10, b = 25, c = 15;\n    if(a >= b && a >= c) {\n        cout << a << " is largest" << endl;\n    } else if(b >= a && b >= c) {\n        cout << b << " is largest" << endl;\n    } else {\n        cout << c << " is largest" << endl;\n    }\n    return 0;\n}',
    hint: "Use logical operators && to combine conditions.",
  },
  {
    id: "cpp_conditional_9",
    topicId: "cpp_conditionals",
    question: "What is the switch statement in C++? Give syntax.",
    mathSolution: "Switch syntax",
    codeSolution:
      "switch(expression) {\n    case constant1:\n        // code\n        break;\n    case constant2:\n        // code\n        break;\n    default:\n        // code\n}",
    hint: "Switch tests expression against multiple case constants.",
  },
  {
    id: "cpp_conditional_10",
    topicId: "cpp_conditionals",
    question: "Write a program using switch to display day of week (1-7).",
    mathSolution: "Day of week",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int day = 3;\n    switch(day) {\n        case 1: cout << "Monday"; break;\n        case 2: cout << "Tuesday"; break;\n        case 3: cout << "Wednesday"; break;\n        case 4: cout << "Thursday"; break;\n        case 5: cout << "Friday"; break;\n        case 6: cout << "Saturday"; break;\n        case 7: cout << "Sunday"; break;\n        default: cout << "Invalid day";\n    }\n    cout << endl;\n    return 0;\n}',
    hint: "Use case labels 1 through 7 with break after each.",
  },
  {
    id: "cpp_conditional_11",
    topicId: "cpp_conditionals",
    question: "What is the purpose of break statement in switch?",
    mathSolution: "Break in switch",
    codeSolution:
      'break terminates the switch case. Without break, execution "falls through" to next case.\n\nswitch(x) {\n    case 1: cout << "One"; // No break - falls through\n    case 2: cout << "Two"; break;  // Stops here\n}',
    hint: "break prevents fall-through to next case.",
  },
  {
    id: "cpp_conditional_12",
    topicId: "cpp_conditionals",
    question: "Write a program to create a simple calculator using switch.",
    mathSolution: "Switch calculator",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    char op;\n    double a, b;\n    cout << "Enter operator (+, -, *, /): ";\n    cin >> op;\n    cout << "Enter two numbers: ";\n    cin >> a >> b;\n    \n    switch(op) {\n        case \'+\': cout << a << " + " << b << " = " << a + b; break;\n        case \'-\': cout << a << " - " << b << " = " << a - b; break;\n        case \'*\': cout << a << " * " << b << " = " << a * b; break;\n        case \'/\': \n            if(b != 0)\n                cout << a << " / " << b << " = " << a / b;\n            else\n                cout << "Division by zero!";\n            break;\n        default: cout << "Invalid operator!";\n    }\n    cout << endl;\n    return 0;\n}',
    hint: "Use switch on operator character, handle division by zero.",
  },
  {
    id: "cpp_conditional_13",
    topicId: "cpp_conditionals",
    question:
      "Write a program to check if a character is vowel or consonant using if-else.",
    mathSolution: "Vowel/consonant",
    codeSolution:
      "#include <iostream>\nusing namespace std;\nint main() {\n    char ch = 'e';\n    if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||\n       ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {\n        cout << ch << \" is a vowel\" << endl;\n    } else {\n        cout << ch << \" is a consonant\" << endl;\n    }\n    return 0;\n}",
    hint: "Check for both uppercase and lowercase vowels.",
  },
  {
    id: "cpp_conditional_14",
    topicId: "cpp_conditionals",
    question:
      "Write a program to check if a year is leap year using nested if.",
    mathSolution: "Leap year condition",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int year = 2024;\n    if(year % 4 == 0) {\n        if(year % 100 == 0) {\n            if(year % 400 == 0) {\n                cout << year << " is a leap year" << endl;\n            } else {\n                cout << year << " is not a leap year" << endl;\n            }\n        } else {\n            cout << year << " is a leap year" << endl;\n        }\n    } else {\n        cout << year << " is not a leap year" << endl;\n    }\n    return 0;\n}',
    hint: "Leap year: divisible by 4, but if divisible by 100 must also be divisible by 400.",
  },
  {
    id: "cpp_conditional_15",
    topicId: "cpp_conditionals",
    question:
      "Write a program to check if a year is leap year using logical operators.",
    mathSolution: "Leap year (compact)",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int year = 2024;\n    if((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {\n        cout << year << " is a leap year" << endl;\n    } else {\n        cout << year << " is not a leap year" << endl;\n    }\n    return 0;\n}',
    hint: "Combine conditions with logical operators: (divisible by 400) OR (divisible by 4 AND not divisible by 100).",
  },
  {
    id: "cpp_conditional_16",
    topicId: "cpp_conditionals",
    question:
      "Write a program to assign grades based on marks using if-else if.",
    mathSolution: "Grading system",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int marks = 85;\n    if(marks >= 90) {\n        cout << "Grade A" << endl;\n    } else if(marks >= 80) {\n        cout << "Grade B" << endl;\n    } else if(marks >= 70) {\n        cout << "Grade C" << endl;\n    } else if(marks >= 60) {\n        cout << "Grade D" << endl;\n    } else if(marks >= 50) {\n        cout << "Grade E" << endl;\n    } else {\n        cout << "Grade F" << endl;\n    }\n    return 0;\n}',
    hint: "Check from highest to lowest grade ranges.",
  },
  {
    id: "cpp_conditional_17",
    topicId: "cpp_conditionals",
    question: "What is the ternary operator? Write its syntax and example.",
    mathSolution: "Ternary operator",
    codeSolution:
      'Syntax: condition ? expression1 : expression2\n\nint a = 10, b = 20;\nint max = (a > b) ? a : b;\ncout << "Max = " << max;  // 20',
    hint: "It's a shorthand for if-else: condition ? value_if_true : value_if_false.",
  },
  {
    id: "cpp_conditional_18",
    topicId: "cpp_conditionals",
    question: "Write a program to find even/odd using ternary operator.",
    mathSolution: "Even/odd ternary",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int num = 7;\n    string result = (num % 2 == 0) ? "Even" : "Odd";\n    cout << num << " is " << result << endl;\n    return 0;\n}',
    hint: 'Use (num % 2 == 0) ? "Even" : "Odd"',
  },
  {
    id: "cpp_conditional_19",
    topicId: "cpp_conditionals",
    question:
      "Write a program to check if a person is eligible to vote (age >= 18).",
    mathSolution: "Voting eligibility",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int age = 20;\n    if(age >= 18) {\n        cout << "Eligible to vote" << endl;\n    } else {\n        cout << "Not eligible to vote" << endl;\n    }\n    return 0;\n}',
    hint: "Check condition age >= 18.",
  },
  {
    id: "cpp_conditional_20",
    topicId: "cpp_conditionals",
    question:
      "Write a program to check if a number is divisible by both 3 and 5.",
    mathSolution: "Divisibility check",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int num = 15;\n    if(num % 3 == 0 && num % 5 == 0) {\n        cout << num << " is divisible by both 3 and 5" << endl;\n    } else {\n        cout << num << " is not divisible by both" << endl;\n    }\n    return 0;\n}',
    hint: "Use && operator to combine conditions.",
  },
  {
    id: "cpp_conditional_21",
    topicId: "cpp_conditionals",
    question:
      "Write a program using switch to print number of days in a month.",
    mathSolution: "Days in month",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int month = 2;\n    int year = 2024;\n    \n    switch(month) {\n        case 1: case 3: case 5: case 7: case 8: case 10: case 12:\n            cout << "31 days" << endl; break;\n        case 4: case 6: case 9: case 11:\n            cout << "30 days" << endl; break;\n        case 2:\n            if((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0))\n                cout << "29 days" << endl;\n            else\n                cout << "28 days" << endl;\n            break;\n        default:\n            cout << "Invalid month" << endl;\n    }\n    return 0;\n}',
    hint: "Group months with same days using multiple case labels.",
  },
  {
    id: "cpp_conditional_22",
    topicId: "cpp_conditionals",
    question:
      "Write a program to check if a character is alphabet, digit, or special character.",
    mathSolution: "Character type",
    codeSolution:
      "#include <iostream>\nusing namespace std;\nint main() {\n    char ch = '7';\n    if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {\n        cout << ch << \" is an alphabet\" << endl;\n    } else if(ch >= '0' && ch <= '9') {\n        cout << ch << \" is a digit\" << endl;\n    } else {\n        cout << ch << \" is a special character\" << endl;\n    }\n    return 0;\n}",
    hint: "Check ASCII ranges: A-Z, a-z for alphabets, 0-9 for digits.",
  },
  {
    id: "cpp_conditional_23",
    topicId: "cpp_conditionals",
    question:
      "Write a program to check if a triangle is valid based on angles sum = 180.",
    mathSolution: "Triangle validity",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a = 60, b = 60, c = 60;\n    if(a + b + c == 180 && a > 0 && b > 0 && c > 0) {\n        cout << "Valid triangle" << endl;\n    } else {\n        cout << "Invalid triangle" << endl;\n    }\n    return 0;\n}',
    hint: "Sum of angles must be 180 and each angle > 0.",
  },
  {
    id: "cpp_conditional_24",
    topicId: "cpp_conditionals",
    question:
      "Write a program to check triangle type (equilateral, isosceles, scalene).",
    mathSolution: "Triangle classification",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5, b = 5, c = 8;\n    if(a == b && b == c) {\n        cout << "Equilateral triangle" << endl;\n    } else if(a == b || b == c || a == c) {\n        cout << "Isosceles triangle" << endl;\n    } else {\n        cout << "Scalene triangle" << endl;\n    }\n    return 0;\n}',
    hint: "Check sides equality: all equal, two equal, or none equal.",
  },
  {
    id: "cpp_conditional_25",
    topicId: "cpp_conditionals",
    question:
      "Write a program to find the roots of a quadratic equation using conditional statements.",
    mathSolution: "Quadratic roots",
    codeSolution:
      '#include <iostream>\n#include <cmath>\nusing namespace std;\nint main() {\n    double a = 1, b = -5, c = 6;\n    double discriminant = b*b - 4*a*c;\n    \n    if(discriminant > 0) {\n        double root1 = (-b + sqrt(discriminant)) / (2*a);\n        double root2 = (-b - sqrt(discriminant)) / (2*a);\n        cout << "Roots are real and different: " << root1 << ", " << root2 << endl;\n    } else if(discriminant == 0) {\n        double root = -b / (2*a);\n        cout << "Roots are real and equal: " << root << endl;\n    } else {\n        double realPart = -b / (2*a);\n        double imagPart = sqrt(-discriminant) / (2*a);\n        cout << "Roots are complex: " << realPart << " ± " << imagPart << "i" << endl;\n    }\n    return 0;\n}',
    hint: "Check discriminant: >0 (real & distinct), =0 (real & equal), <0 (complex).",
  },
  {
    id: "cpp_conditional_26",
    topicId: "cpp_conditionals",
    question:
      "Write a program to check if a number is in a specific range (10-50).",
    mathSolution: "Range check",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int num = 25;\n    if(num >= 10 && num <= 50) {\n        cout << num << " is between 10 and 50" << endl;\n    } else {\n        cout << num << " is outside range" << endl;\n    }\n    return 0;\n}',
    hint: "Use && to combine lower and upper bound checks.",
  },
  {
    id: "cpp_conditional_27",
    topicId: "cpp_conditionals",
    question:
      "Write a program using nested switch to perform different operations.",
    mathSolution: "Nested switch",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int category = 1, option = 2;\n    \n    switch(category) {\n        case 1:  // Math operations\n            cout << "Math: ";\n            switch(option) {\n                case 1: cout << "Addition"; break;\n                case 2: cout << "Subtraction"; break;\n                default: cout << "Unknown";\n            }\n            break;\n        case 2:  // String operations\n            cout << "String: ";\n            switch(option) {\n                case 1: cout << "Concatenate"; break;\n                case 2: cout << "Length"; break;\n                default: cout << "Unknown";\n            }\n            break;\n        default:\n            cout << "Invalid category";\n    }\n    cout << endl;\n    return 0;\n}',
    hint: "Place one switch statement inside another switch case.",
  },
  {
    id: "cpp_conditional_28",
    topicId: "cpp_conditionals",
    question:
      "Write a program to check if three numbers can form a Pythagorean triplet.",
    mathSolution: "Pythagorean triplet",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a = 3, b = 4, c = 5;\n    int max = (a > b) ? (a > c ? a : c) : (b > c ? b : c);\n    \n    if(max == a) {\n        if(a*a == b*b + c*c)\n            cout << "Pythagorean triplet" << endl;\n        else\n            cout << "Not a triplet" << endl;\n    } else if(max == b) {\n        if(b*b == a*a + c*c)\n            cout << "Pythagorean triplet" << endl;\n        else\n            cout << "Not a triplet" << endl;\n    } else {\n        if(c*c == a*a + b*b)\n            cout << "Pythagorean triplet" << endl;\n        else\n            cout << "Not a triplet" << endl;\n    }\n    return 0;\n}',
    hint: "Find largest number, check if square of largest equals sum of squares of other two.",
  },
  {
    id: "cpp_conditional_29",
    topicId: "cpp_conditionals",
    question:
      "Write a program to calculate electricity bill based on units consumed.",
    mathSolution: "Electricity bill",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int units = 250;\n    double bill = 0;\n    \n    if(units <= 100) {\n        bill = units * 1.50;\n    } else if(units <= 200) {\n        bill = 100 * 1.50 + (units - 100) * 2.50;\n    } else if(units <= 300) {\n        bill = 100 * 1.50 + 100 * 2.50 + (units - 200) * 3.50;\n    } else {\n        bill = 100 * 1.50 + 100 * 2.50 + 100 * 3.50 + (units - 300) * 5.00;\n    }\n    \n    cout << "Bill amount: Rs. " << bill << endl;\n    return 0;\n}',
    hint: "Use slab rates: first 100 units at ₹1.50, next 100 at ₹2.50, etc.",
  },
  {
    id: "cpp_conditional_30",
    topicId: "cpp_conditionals",
    question:
      "Write a program to determine the type of website based on domain (.com, .org, .edu, etc).",
    mathSolution: "Domain type",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string domain = "google.com";\n    string ext = domain.substr(domain.find_last_of(".") + 1);\n    \n    if(ext == "com") {\n        cout << "Commercial website" << endl;\n    } else if(ext == "org") {\n        cout << "Organization website" << endl;\n    } else if(ext == "edu") {\n        cout << "Educational website" << endl;\n    } else if(ext == "gov") {\n        cout << "Government website" << endl;\n    } else if(ext == "net") {\n        cout << "Network website" << endl;\n    } else {\n        cout << "Other type of website" << endl;\n    }\n    return 0;\n}',
    hint: "Extract extension after last dot and compare with known types.",
  },
  {
    id: "cpp_conditional_31",
    topicId: "cpp_conditionals",
    question:
      "Write a program to find the minimum of three numbers using conditional statements.",
    mathSolution: "Minimum of three",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a = 25, b = 10, c = 15;\n    int min;\n    \n    if(a < b) {\n        if(a < c) min = a;\n        else min = c;\n    } else {\n        if(b < c) min = b;\n        else min = c;\n    }\n    \n    cout << "Minimum = " << min << endl;\n    return 0;\n}',
    hint: "Compare a with b, then compare the smaller with c.",
  },
  {
    id: "cpp_conditional_32",
    topicId: "cpp_conditionals",
    question:
      "Write a program to check if a number is a multiple of both 5 and 7.",
    mathSolution: "Multiple check",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int num = 35;\n    if(num % 5 == 0 && num % 7 == 0) {\n        cout << num << " is multiple of both 5 and 7" << endl;\n    } else {\n        cout << num << " is not multiple of both" << endl;\n    }\n    return 0;\n}',
    hint: "Use modulo operator with && condition.",
  },
  {
    id: "cpp_conditional_33",
    topicId: "cpp_conditionals",
    question:
      "Write a program using switch to display the season based on month number.",
    mathSolution: "Seasons",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int month = 8;\n    \n    switch(month) {\n        case 12: case 1: case 2:\n            cout << "Winter" << endl; break;\n        case 3: case 4: case 5:\n            cout << "Spring" << endl; break;\n        case 6: case 7: case 8:\n            cout << "Summer" << endl; break;\n        case 9: case 10: case 11:\n            cout << "Autumn" << endl; break;\n        default:\n            cout << "Invalid month" << endl;\n    }\n    return 0;\n}',
    hint: "Group months by season using multiple case labels.",
  },
  {
    id: "cpp_conditional_34",
    topicId: "cpp_conditionals",
    question:
      "Write a program to check if a number is palindrome or not (using conditional statements only, not loops).",
    mathSolution: "Palindrome check (limited)",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int num = 121;\n    // Without loops, we can only check fixed-digit numbers\n    // For 3-digit number:\n    int first = num / 100;\n    int last = num % 10;\n    \n    if(first == last) {\n        cout << num << " is palindrome (3-digit)" << endl;\n    } else {\n        cout << num << " is not palindrome" << endl;\n    }\n    return 0;\n}',
    hint: "For 3-digit numbers, compare first and last digit only.",
  },
  {
    id: "cpp_conditional_35",
    topicId: "cpp_conditionals",
    question: "Write a program to calculate income tax based on salary slabs.",
    mathSolution: "Income tax",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    double salary = 850000;\n    double tax = 0;\n    \n    if(salary <= 500000) {\n        tax = 0;\n    } else if(salary <= 800000) {\n        tax = (salary - 500000) * 0.10;\n    } else if(salary <= 1000000) {\n        tax = 300000 * 0.10 + (salary - 800000) * 0.15;\n    } else {\n        tax = 300000 * 0.10 + 200000 * 0.15 + (salary - 1000000) * 0.20;\n    }\n    \n    cout << "Income tax: Rs. " << tax << endl;\n    return 0;\n}',
    hint: "Apply different tax rates for different salary slabs.",
  },
  {
    id: "cpp_conditional_36",
    topicId: "cpp_conditionals",
    question:
      "Write a program to check if a character is uppercase, lowercase, or not an alphabet.",
    mathSolution: "Case check",
    codeSolution:
      "#include <iostream>\nusing namespace std;\nint main() {\n    char ch = 'M';\n    \n    if(ch >= 'A' && ch <= 'Z') {\n        cout << ch << \" is uppercase\" << endl;\n    } else if(ch >= 'a' && ch <= 'z') {\n        cout << ch << \" is lowercase\" << endl;\n    } else {\n        cout << ch << \" is not an alphabet\" << endl;\n    }\n    return 0;\n}",
    hint: "Check ASCII ranges: 'A'-'Z' for uppercase, 'a'-'z' for lowercase.",
  },
  {
    id: "cpp_conditional_37",
    topicId: "cpp_conditionals",
    question:
      "Write a program using switch to perform arithmetic operations based on user choice.",
    mathSolution: "Menu-driven calculator",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int choice;\n    double a, b;\n    \n    cout << "1. Add\\n2. Subtract\\n3. Multiply\\n4. Divide\\nEnter choice: ";\n    cin >> choice;\n    cout << "Enter two numbers: ";\n    cin >> a >> b;\n    \n    switch(choice) {\n        case 1: cout << "Result: " << a + b; break;\n        case 2: cout << "Result: " << a - b; break;\n        case 3: cout << "Result: " << a * b; break;\n        case 4: \n            if(b != 0)\n                cout << "Result: " << a / b;\n            else\n                cout << "Cannot divide by zero";\n            break;\n        default: cout << "Invalid choice";\n    }\n    cout << endl;\n    return 0;\n}',
    hint: "Use switch on menu choice, handle division by zero separately.",
  },
  {
    id: "cpp_conditional_38",
    topicId: "cpp_conditionals",
    question:
      "Write a program to check if a point (x,y) lies in which quadrant.",
    mathSolution: "Quadrant determination",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int x = 5, y = -3;\n    \n    if(x > 0 && y > 0) {\n        cout << "First quadrant" << endl;\n    } else if(x < 0 && y > 0) {\n        cout << "Second quadrant" << endl;\n    } else if(x < 0 && y < 0) {\n        cout << "Third quadrant" << endl;\n    } else if(x > 0 && y < 0) {\n        cout << "Fourth quadrant" << endl;\n    } else if(x == 0 && y == 0) {\n        cout << "Origin" << endl;\n    } else if(x == 0) {\n        cout << "On Y-axis" << endl;\n    } else if(y == 0) {\n        cout << "On X-axis" << endl;\n    }\n    return 0;\n}',
    hint: "Check signs of x and y coordinates.",
  },
  {
    id: "cpp_conditional_39",
    topicId: "cpp_conditionals",
    question:
      "Write a program to find the maximum of four numbers using nested if.",
    mathSolution: "Max of four",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a=10, b=25, c=15, d=30;\n    int max1, max2;\n    \n    if(a > b) max1 = a;\n    else max1 = b;\n    \n    if(c > d) max2 = c;\n    else max2 = d;\n    \n    if(max1 > max2) \n        cout << "Maximum = " << max1 << endl;\n    else \n        cout << "Maximum = " << max2 << endl;\n    \n    return 0;\n}',
    hint: "Find max of first pair, max of second pair, then compare.",
  },
  {
    id: "cpp_conditional_40",
    topicId: "cpp_conditionals",
    question:
      "Write a program using conditional statements to validate a date (dd/mm/yyyy).",
    mathSolution: "Date validation",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int day = 29, month = 2, year = 2024;\n    bool valid = true;\n    \n    if(month < 1 || month > 12) valid = false;\n    else if(day < 1) valid = false;\n    else if(month == 2) {\n        bool leap = (year%400==0) || (year%4==0 && year%100!=0);\n        if(leap && day > 29) valid = false;\n        else if(!leap && day > 28) valid = false;\n    }\n    else if(month == 4 || month == 6 || month == 9 || month == 11) {\n        if(day > 30) valid = false;\n    }\n    else if(day > 31) valid = false;\n    \n    if(valid) cout << "Valid date" << endl;\n    else cout << "Invalid date" << endl;\n    return 0;\n}',
    hint: "Check month range, then day range based on month and leap year.",
  },
  {
    id: "cpp_conditional_41",
    topicId: "cpp_conditionals",
    question:
      "Write a program to check if a number is a perfect square using conditional statements.",
    mathSolution: "Perfect square",
    codeSolution:
      '#include <iostream>\n#include <cmath>\nusing namespace std;\nint main() {\n    int num = 25;\n    int root = sqrt(num);\n    \n    if(root * root == num) {\n        cout << num << " is a perfect square" << endl;\n    } else {\n        cout << num << " is not a perfect square" << endl;\n    }\n    return 0;\n}',
    hint: "Take square root, multiply by itself and compare with original.",
  },
  {
    id: "cpp_conditional_42",
    topicId: "cpp_conditionals",
    question:
      "Write a program to compare two strings lexicographically using conditional statements.",
    mathSolution: "String comparison",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s1 = "apple", s2 = "banana";\n    \n    if(s1 == s2) {\n        cout << "Strings are equal" << endl;\n    } else if(s1 < s2) {\n        cout << "\"" << s1 << "\" comes before \"" << s2 << "\"" << endl;\n    } else {\n        cout << "\"" << s1 << "\" comes after \"" << s2 << "\"" << endl;\n    }\n    return 0;\n}',
    hint: "Use comparison operators <, >, == with strings directly.",
  },
  {
    id: "cpp_conditional_43",
    topicId: "cpp_conditionals",
    question:
      "Write a program to determine the type of triangle based on angles (acute, right, obtuse).",
    mathSolution: "Triangle by angles",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a = 90, b = 45, c = 45;\n    \n    if(a == 90 || b == 90 || c == 90) {\n        cout << "Right-angled triangle" << endl;\n    } else if(a < 90 && b < 90 && c < 90) {\n        cout << "Acute-angled triangle" << endl;\n    } else {\n        cout << "Obtuse-angled triangle" << endl;\n    }\n    return 0;\n}',
    hint: "Check for 90° (right), all <90° (acute), otherwise obtuse.",
  },
  {
    id: "cpp_conditional_44",
    topicId: "cpp_conditionals",
    question:
      "Write a program to check if a number is divisible by 3 or 5, but not both.",
    mathSolution: "Divisible by either",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int num = 9;\n    \n    if((num % 3 == 0 || num % 5 == 0) && !(num % 3 == 0 && num % 5 == 0)) {\n        cout << num << " is divisible by 3 or 5, but not both" << endl;\n    } else {\n        cout << num << " does not satisfy condition" << endl;\n    }\n    return 0;\n}',
    hint: "Use OR for either condition, AND with NOT for excluding both.",
  },
  {
    id: "cpp_conditional_45",
    topicId: "cpp_conditionals",
    question:
      "Write a program using switch to display the number of days in a month (without leap year check).",
    mathSolution: "Days in month simplified",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int month = 7;\n    \n    switch(month) {\n        case 1: case 3: case 5: case 7: case 8: case 10: case 12:\n            cout << "31 days" << endl; break;\n        case 4: case 6: case 9: case 11:\n            cout << "30 days" << endl; break;\n        case 2:\n            cout << "28 or 29 days (depending on year)" << endl; break;\n        default:\n            cout << "Invalid month" << endl;\n    }\n    return 0;\n}',
    hint: "Group months with 31 days, 30 days, and February separately.",
  },
  {
    id: "cpp_conditional_46",
    topicId: "cpp_conditionals",
    question:
      "Write a program to calculate the discount based on purchase amount.",
    mathSolution: "Discount calculation",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    double amount = 2500;\n    double discount = 0;\n    \n    if(amount >= 5000) {\n        discount = amount * 0.20;\n        cout << "20% discount" << endl;\n    } else if(amount >= 3000) {\n        discount = amount * 0.15;\n        cout << "15% discount" << endl;\n    } else if(amount >= 1000) {\n        discount = amount * 0.10;\n        cout << "10% discount" << endl;\n    } else {\n        discount = amount * 0.05;\n        cout << "5% discount" << endl;\n    }\n    \n    cout << "Discount: Rs. " << discount << endl;\n    cout << "Final amount: Rs. " << amount - discount << endl;\n    return 0;\n}',
    hint: "Apply different discount percentages for different purchase slabs.",
  },
  {
    id: "cpp_conditional_47",
    topicId: "cpp_conditionals",
    question:
      "Write a program to check if three numbers are in increasing order.",
    mathSolution: "Increasing order",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5, b = 10, c = 15;\n    \n    if(a < b && b < c) {\n        cout << "Numbers are in increasing order" << endl;\n    } else if(a > b && b > c) {\n        cout << "Numbers are in decreasing order" << endl;\n    } else {\n        cout << "Numbers are neither increasing nor decreasing" << endl;\n    }\n    return 0;\n}',
    hint: "Check if a < b < c for increasing, a > b > c for decreasing.",
  },
  {
    id: "cpp_conditional_48",
    topicId: "cpp_conditionals",
    question:
      "Write a program using conditional statements to implement a simple ATM menu.",
    mathSolution: "ATM simulation",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int choice;\n    double balance = 5000, amount;\n    \n    cout << "ATM Menu:\\n1. Check Balance\\n2. Withdraw\\n3. Deposit\\n4. Exit\\nEnter choice: ";\n    cin >> choice;\n    \n    switch(choice) {\n        case 1:\n            cout << "Balance: Rs. " << balance << endl;\n            break;\n        case 2:\n            cout << "Enter amount to withdraw: ";\n            cin >> amount;\n            if(amount > balance) {\n                cout << "Insufficient balance!" << endl;\n            } else if(amount <= 0) {\n                cout << "Invalid amount!" << endl;\n            } else {\n                balance -= amount;\n                cout << "Withdrawal successful. New balance: Rs. " << balance << endl;\n            }\n            break;\n        case 3:\n            cout << "Enter amount to deposit: ";\n            cin >> amount;\n            if(amount > 0) {\n                balance += amount;\n                cout << "Deposit successful. New balance: Rs. " << balance << endl;\n            } else {\n                cout << "Invalid amount!" << endl;\n            }\n            break;\n        case 4:\n            cout << "Thank you for using ATM" << endl;\n            break;\n        default:\n            cout << "Invalid choice!" << endl;\n    }\n    return 0;\n}',
    hint: "Use switch for menu, if-else for transaction validation.",
  },
  {
    id: "cpp_conditional_49",
    topicId: "cpp_conditionals",
    question:
      "Write a program to check if a character is a vowel using switch statement.",
    mathSolution: "Vowel check with switch",
    codeSolution:
      "#include <iostream>\nusing namespace std;\nint main() {\n    char ch = 'E';\n    \n    switch(tolower(ch)) {\n        case 'a': case 'e': case 'i': case 'o': case 'u':\n            cout << ch << \" is a vowel\" << endl;\n            break;\n        default:\n            if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))\n                cout << ch << \" is a consonant\" << endl;\n            else\n                cout << ch << \" is not an alphabet\" << endl;\n    }\n    return 0;\n}",
    hint: "Convert to lowercase first, then check vowel cases.",
  },
  {
    id: "cpp_conditional_50",
    topicId: "cpp_conditionals",
    question:
      "Write a program to solve a quadratic equation using conditional statements and display appropriate messages for different cases.",
    mathSolution: "Complete quadratic solver",
    codeSolution:
      '#include <iostream>\n#include <cmath>\n#include <iomanip>\nusing namespace std;\nint main() {\n    double a = 1, b = 2, c = 5;\n    \n    if(a == 0) {\n        if(b == 0) {\n            if(c == 0)\n                cout << "Infinite solutions" << endl;\n            else\n                cout << "No solution" << endl;\n        } else {\n            double root = -c / b;\n            cout << "Linear equation, root = " << root << endl;\n        }\n    } else {\n        double discriminant = b*b - 4*a*c;\n        \n        if(discriminant > 0) {\n            double root1 = (-b + sqrt(discriminant)) / (2*a);\n            double root2 = (-b - sqrt(discriminant)) / (2*a);\n            cout << "Two distinct real roots:" << endl;\n            cout << "Root 1 = " << fixed << setprecision(2) << root1 << endl;\n            cout << "Root 2 = " << root2 << endl;\n        } else if(discriminant == 0) {\n            double root = -b / (2*a);\n            cout << "One real root (double root): " << root << endl;\n        } else {\n            double realPart = -b / (2*a);\n            double imagPart = sqrt(-discriminant) / (2*a);\n            cout << "Complex roots:" << endl;\n            cout << "Root 1 = " << realPart << " + " << imagPart << "i" << endl;\n            cout << "Root 2 = " << realPart << " - " << imagPart << "i" << endl;\n        }\n    }\n    return 0;\n}',
    hint: "First check if a==0 (linear), then check discriminant for quadratic.",
  },
);
