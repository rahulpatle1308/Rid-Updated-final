QuizData.questions.push(
  // ========== BASIC IF STATEMENT (QUESTIONS 1-8) ==========
  {
    id: 'c_conditional_001',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is positive using if statement.',
    mathSolution: 'Positive number check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    if(num > 0) {\n        printf("%d is positive\\n", num);\n    }\n    return 0;\n}',
    hint: 'Use if statement to execute code when condition is true'
  },
  {
    id: 'c_conditional_002',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is even using if statement.',
    mathSolution: 'Even number check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    if(num % 2 == 0) {\n        printf("%d is even\\n", num);\n    }\n    return 0;\n}',
    hint: 'Use modulus operator % to check divisibility by 2'
  },
  {
    id: 'c_conditional_003',
    topicId: 'c_conditional',
    question: 'Write a program to check if a character is uppercase using if statement.',
    mathSolution: 'Uppercase check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch;\n    printf("Enter a character: ");\n    scanf("%c", &ch);\n    if(ch >= \'A\' && ch <= \'Z\') {\n        printf("%c is uppercase\\n", ch);\n    }\n    return 0;\n}',
    hint: 'Check if character is between A and Z'
  },
  {
    id: 'c_conditional_004',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is multiple of 5 using if statement.',
    mathSolution: 'Multiple of 5 check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    if(num % 5 == 0) {\n        printf("%d is a multiple of 5\\n", num);\n    }\n    return 0;\n}',
    hint: 'Check num % 5 == 0'
  },
  {
    id: 'c_conditional_005',
    topicId: 'c_conditional',
    question: 'Write a program to check if a year is a century year using if statement.',
    mathSolution: 'Century year check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int year;\n    printf("Enter a year: ");\n    scanf("%d", &year);\n    if(year % 100 == 0) {\n        printf("%d is a century year\\n", year);\n    }\n    return 0;\n}',
    hint: 'Century years are divisible by 100'
  },
  {
    id: 'c_conditional_006',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is between 10 and 20 using if statement.',
    mathSolution: 'Range check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    if(num >= 10 && num <= 20) {\n        printf("%d is between 10 and 20\\n", num);\n    }\n    return 0;\n}',
    hint: 'Use logical AND (&&) to check both conditions'
  },
  {
    id: 'c_conditional_007',
    topicId: 'c_conditional',
    question: 'Write a program to check if a character is vowel using if statement.',
    mathSolution: 'Vowel check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch;\n    printf("Enter a character: ");\n    scanf("%c", &ch);\n    if(ch == \'a\' || ch == \'e\' || ch == \'i\' || ch == \'o\' || ch == \'u\') {\n        printf("%c is a vowel\\n", ch);\n    }\n    return 0;\n}',
    hint: 'Use logical OR (||) to check multiple conditions'
  },
  {
    id: 'c_conditional_008',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is divisible by both 3 and 4 using if statement.',
    mathSolution: 'Divisible by 3 and 4',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    if(num % 3 == 0 && num % 4 == 0) {\n        printf("%d is divisible by both 3 and 4\\n", num);\n    }\n    return 0;\n}',
    hint: 'Use logical AND to combine conditions'
  },

  // ========== IF-ELSE STATEMENT (QUESTIONS 9-20) ==========
  {
    id: 'c_conditional_009',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is even or odd using if-else.',
    mathSolution: 'Even or odd',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    if(num % 2 == 0) {\n        printf("%d is even\\n", num);\n    } else {\n        printf("%d is odd\\n", num);\n    }\n    return 0;\n}',
    hint: 'Use if-else for two-way decisions'
  },
  {
    id: 'c_conditional_010',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is positive or negative using if-else.',
    mathSolution: 'Positive or negative',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    if(num > 0) {\n        printf("%d is positive\\n", num);\n    } else {\n        printf("%d is negative\\n", num);\n    }\n    return 0;\n}',
    hint: 'Compare with zero for positive/negative'
  },
  {
    id: 'c_conditional_011',
    topicId: 'c_conditional',
    question: 'Write a program to find the larger of two numbers using if-else.',
    mathSolution: 'Maximum of two',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf("Enter two numbers: ");\n    scanf("%d %d", &a, &b);\n    if(a > b) {\n        printf("%d is larger\\n", a);\n    } else {\n        printf("%d is larger\\n", b);\n    }\n    return 0;\n}',
    hint: 'Compare a and b using > operator'
  },
  {
    id: 'c_conditional_012',
    topicId: 'c_conditional',
    question: 'Write a program to check if a character is alphabet or not using if-else.',
    mathSolution: 'Alphabet or not',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch;\n    printf("Enter a character: ");\n    scanf("%c", &ch);\n    if((ch >= \'a\' && ch <= \'z\') || (ch >= \'A\' && ch <= \'Z\')) {\n        printf("%c is an alphabet\\n", ch);\n    } else {\n        printf("%c is not an alphabet\\n", ch);\n    }\n    return 0;\n}',
    hint: 'Check if character is in lowercase or uppercase range'
  },
  {
    id: 'c_conditional_013',
    topicId: 'c_conditional',
    question: 'Write a program to check leap year using if-else.',
    mathSolution: 'Leap year check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int year;\n    printf("Enter a year: ");\n    scanf("%d", &year);\n    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {\n        printf("%d is a leap year\\n", year);\n    } else {\n        printf("%d is not a leap year\\n", year);\n    }\n    return 0;\n}',
    hint: 'Leap year: divisible by 4 but not by 100, or divisible by 400'
  },
  {
    id: 'c_conditional_014',
    topicId: 'c_conditional',
    question: 'Write a program to check voting eligibility using if-else.',
    mathSolution: 'Voting eligibility',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int age;\n    printf("Enter your age: ");\n    scanf("%d", &age);\n    if(age >= 18) {\n        printf("You are eligible to vote\\n");\n    } else {\n        printf("You are not eligible to vote\\n");\n        printf("Wait for %d more years\\n", 18 - age);\n    }\n    return 0;\n}',
    hint: 'Check if age is 18 or above'
  },
  {
    id: 'c_conditional_015',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is divisible by 7 or not using if-else.',
    mathSolution: 'Divisible by 7',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    if(num % 7 == 0) {\n        printf("%d is divisible by 7\\n", num);\n    } else {\n        printf("%d is not divisible by 7\\n", num);\n    }\n    return 0;\n}',
    hint: 'Check num % 7 == 0'
  },
  {
    id: 'c_conditional_016',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is a single digit number using if-else.',
    mathSolution: 'Single digit check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    if(num >= -9 && num <= 9) {\n        printf("%d is a single digit number\\n", num);\n    } else {\n        printf("%d is not a single digit number\\n", num);\n    }\n    return 0;\n}',
    hint: 'Single digit numbers are between -9 and 9'
  },
  {
    id: 'c_conditional_017',
    topicId: 'c_conditional',
    question: 'Write a program to check if a character is digit or not using if-else.',
    mathSolution: 'Digit or not',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch;\n    printf("Enter a character: ");\n    scanf("%c", &ch);\n    if(ch >= \'0\' && ch <= \'9\') {\n        printf("%c is a digit\\n", ch);\n    } else {\n        printf("%c is not a digit\\n", ch);\n    }\n    return 0;\n}',
    hint: 'Check if character is between 0 and 9'
  },
  {
    id: 'c_conditional_018',
    topicId: 'c_conditional',
    question: 'Write a program to find absolute value of a number using if-else.',
    mathSolution: 'Absolute value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num, abs;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    if(num < 0) {\n        abs = -num;\n    } else {\n        abs = num;\n    }\n    printf("Absolute value: %d\\n", abs);\n    return 0;\n}',
    hint: 'If negative, make positive; otherwise keep as is'
  },
  {
    id: 'c_conditional_019',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is positive, negative, or zero using if-else if.',
    mathSolution: 'Positive, negative, or zero',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    if(num > 0) {\n        printf("%d is positive\\n", num);\n    } else if(num < 0) {\n        printf("%d is negative\\n", num);\n    } else {\n        printf("Number is zero\\n");\n    }\n    return 0;\n}',
    hint: 'Use if-else if-else for multiple conditions'
  },
  {
    id: 'c_conditional_020',
    topicId: 'c_conditional',
    question: 'Write a program to find the largest of three numbers using if-else.',
    mathSolution: 'Maximum of three',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, c;\n    printf("Enter three numbers: ");\n    scanf("%d %d %d", &a, &b, &c);\n    if(a >= b && a >= c) {\n        printf("%d is largest\\n", a);\n    } else if(b >= a && b >= c) {\n        printf("%d is largest\\n", b);\n    } else {\n        printf("%d is largest\\n", c);\n    }\n    return 0;\n}',
    hint: 'Compare each number with the others'
  },

  // ========== NESTED IF-ELSE (QUESTIONS 21-30) ==========
  {
    id: 'c_conditional_021',
    topicId: 'c_conditional',
    question: 'Write a program to find the largest of three numbers using nested if-else.',
    mathSolution: 'Maximum using nested if',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, c;\n    printf("Enter three numbers: ");\n    scanf("%d %d %d", &a, &b, &c);\n    if(a > b) {\n        if(a > c) {\n            printf("%d is largest\\n", a);\n        } else {\n            printf("%d is largest\\n", c);\n        }\n    } else {\n        if(b > c) {\n            printf("%d is largest\\n", b);\n        } else {\n            printf("%d is largest\\n", c);\n        }\n    }\n    return 0;\n}',
    hint: 'Compare a and b, then compare winner with c'
  },
  {
    id: 'c_conditional_022',
    topicId: 'c_conditional',
    question: 'Write a program to determine grade based on marks using nested if-else.',
    mathSolution: 'Grade determination',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int marks;\n    printf("Enter marks: ");\n    scanf("%d", &marks);\n    if(marks >= 0 && marks <= 100) {\n        if(marks >= 90) {\n            printf("Grade A\\n");\n        } else if(marks >= 80) {\n            printf("Grade B\\n");\n        } else if(marks >= 70) {\n            printf("Grade C\\n");\n        } else if(marks >= 60) {\n            printf("Grade D\\n");\n        } else {\n            printf("Grade F\\n");\n        }\n    } else {\n        printf("Invalid marks\\n");\n    }\n    return 0;\n}',
    hint: 'First check validity, then assign grade'
  },
  {
    id: 'c_conditional_023',
    topicId: 'c_conditional',
    question: 'Write a program to determine the type of triangle based on sides using nested if-else.',
    mathSolution: 'Triangle type',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, c;\n    printf("Enter three sides: ");\n    scanf("%d %d %d", &a, &b, &c);\n    if(a + b > c && a + c > b && b + c > a) {\n        if(a == b && b == c) {\n            printf("Equilateral triangle\\n");\n        } else if(a == b || b == c || a == c) {\n            printf("Isosceles triangle\\n");\n        } else {\n            printf("Scalene triangle\\n");\n        }\n    } else {\n        printf("Not a valid triangle\\n");\n    }\n    return 0;\n}',
    hint: 'Check triangle inequality first, then classify by sides'
  },
  {
    id: 'c_conditional_024',
    topicId: 'c_conditional',
    question: 'Write a program to validate a date (dd mm yyyy) using nested if-else.',
    mathSolution: 'Date validation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int day, month, year;\n    int valid = 1;\n    printf("Enter date (dd mm yyyy): ");\n    scanf("%d %d %d", &day, &month, &year);\n    if(month < 1 || month > 12) valid = 0;\n    else {\n        if(month == 2) {\n            int leap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);\n            if(day < 1 || day > (leap ? 29 : 28)) valid = 0;\n        } else if(month == 4 || month == 6 || month == 9 || month == 11) {\n            if(day < 1 || day > 30) valid = 0;\n        } else {\n            if(day < 1 || day > 31) valid = 0;\n        }\n    }\n    if(valid) printf("Valid date\\n");\n    else printf("Invalid date\\n");\n    return 0;\n}',
    hint: 'Check month first, then day based on month'
  },
  {
    id: 'c_conditional_025',
    topicId: 'c_conditional',
    question: 'Write a program to determine the quadrant of a point using nested if-else.',
    mathSolution: 'Quadrant of point',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x, y;\n    printf("Enter coordinates (x y): ");\n    scanf("%d %d", &x, &y);\n    if(x == 0 && y == 0) {\n        printf("Origin\\n");\n    } else if(x == 0) {\n        printf("On Y-axis\\n");\n    } else if(y == 0) {\n        printf("On X-axis\\n");\n    } else {\n        if(x > 0 && y > 0) printf("Quadrant I\\n");\n        else if(x < 0 && y > 0) printf("Quadrant II\\n");\n        else if(x < 0 && y < 0) printf("Quadrant III\\n");\n        else printf("Quadrant IV\\n");\n    }\n    return 0;\n}',
    hint: 'Check axes first, then quadrants based on signs'
  },
  {
    id: 'c_conditional_026',
    topicId: 'c_conditional',
    question: 'Write a program to calculate income tax with different slabs using nested if-else.',
    mathSolution: 'Income tax calculation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float income, tax = 0;\n    printf("Enter annual income: ");\n    scanf("%f", &income);\n    if(income <= 250000) {\n        tax = 0;\n    } else {\n        if(income <= 500000) {\n            tax = (income - 250000) * 0.05;\n        } else if(income <= 1000000) {\n            tax = 12500 + (income - 500000) * 0.2;\n        } else {\n            tax = 112500 + (income - 1000000) * 0.3;\n        }\n    }\n    printf("Tax payable: Rs. %.2f\\n", tax);\n    return 0;\n}',
    hint: 'Progressive tax rates: 0%, 5%, 20%, 30% for different slabs'
  },
  {
    id: 'c_conditional_027',
    topicId: 'c_conditional',
    question: 'Write a program to determine the type of angle using nested if-else.',
    mathSolution: 'Angle type',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int angle;\n    printf("Enter an angle: ");\n    scanf("%d", &angle);\n    if(angle > 0 && angle < 360) {\n        if(angle < 90) printf("Acute angle\\n");\n        else if(angle == 90) printf("Right angle\\n");\n        else if(angle < 180) printf("Obtuse angle\\n");\n        else if(angle == 180) printf("Straight angle\\n");\n        else printf("Reflex angle\\n");\n    } else {\n        printf("Invalid angle\\n");\n    }\n    return 0;\n}',
    hint: 'Classify based on measure: acute(<90), right(90), obtuse(<180), straight(180), reflex(>180)'
  },
  {
    id: 'c_conditional_028',
    topicId: 'c_conditional',
    question: 'Write a program to calculate electricity bill with slab rates using nested if-else.',
    mathSolution: 'Electricity bill',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int units;\n    float bill;\n    printf("Enter units consumed: ");\n    scanf("%d", &units);\n    if(units <= 50) {\n        bill = units * 0.50;\n    } else {\n        if(units <= 150) {\n            bill = 50 * 0.50 + (units - 50) * 0.75;\n        } else if(units <= 250) {\n            bill = 50 * 0.50 + 100 * 0.75 + (units - 150) * 1.20;\n        } else {\n            bill = 50 * 0.50 + 100 * 0.75 + 100 * 1.20 + (units - 250) * 1.50;\n        }\n    }\n    printf("Total bill: Rs. %.2f\\n", bill);\n    return 0;\n}',
    hint: 'Different rates for different slabs: first 50 @0.50, next 100 @0.75, next 100 @1.20, beyond @1.50'
  },
  {
    id: 'c_conditional_029',
    topicId: 'c_conditional',
    question: 'Write a program to determine the nature of roots of quadratic equation using nested if-else.',
    mathSolution: 'Nature of roots',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    float a, b, c, d;\n    printf("Enter coefficients a, b, c: ");\n    scanf("%f %f %f", &a, &b, &c);\n    if(a == 0) {\n        printf("Not a quadratic equation\\n");\n    } else {\n        d = b*b - 4*a*c;\n        if(d > 0) {\n            printf("Roots are real and distinct\\n");\n            printf("Root1 = %.2f\\n", (-b + sqrt(d))/(2*a));\n            printf("Root2 = %.2f\\n", (-b - sqrt(d))/(2*a));\n        } else if(d == 0) {\n            printf("Roots are real and equal\\n");\n            printf("Root = %.2f\\n", -b/(2*a));\n        } else {\n            printf("Roots are complex\\n");\n            printf("Root1 = %.2f + %.2fi\\n", -b/(2*a), sqrt(-d)/(2*a));\n            printf("Root2 = %.2f - %.2fi\\n", -b/(2*a), sqrt(-d)/(2*a));\n        }\n    }\n    return 0;\n}',
    hint: 'Discriminant determines nature: >0 real distinct, =0 real equal, <0 complex'
  },
  {
    id: 'c_conditional_030',
    topicId: 'c_conditional',
    question: 'Write a program to determine scholarship based on marks and income using nested if-else.',
    mathSolution: 'Scholarship calculation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float marks, income, scholarship = 0;\n    printf("Enter marks: ");\n    scanf("%f", &marks);\n    printf("Enter family income: ");\n    scanf("%f", &income);\n    if(marks >= 90) {\n        if(income < 200000) scholarship = 50000;\n        else if(income < 500000) scholarship = 30000;\n        else scholarship = 15000;\n    } else if(marks >= 80) {\n        if(income < 200000) scholarship = 30000;\n        else if(income < 500000) scholarship = 20000;\n        else scholarship = 10000;\n    } else if(marks >= 70 && income < 200000) {\n        scholarship = 15000;\n    }\n    printf("Scholarship amount: Rs. %.2f\\n", scholarship);\n    return 0;\n}',
    hint: 'Scholarship depends on both merit and financial need'
  },

  // ========== SWITCH STATEMENT (QUESTIONS 31-40) ==========
  {
    id: 'c_conditional_031',
    topicId: 'c_conditional',
    question: 'Write a program to display day of week using switch statement.',
    mathSolution: 'Day of week',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int day;\n    printf("Enter day number (1-7): ");\n    scanf("%d", &day);\n    switch(day) {\n        case 1: printf("Monday\\n"); break;\n        case 2: printf("Tuesday\\n"); break;\n        case 3: printf("Wednesday\\n"); break;\n        case 4: printf("Thursday\\n"); break;\n        case 5: printf("Friday\\n"); break;\n        case 6: printf("Saturday\\n"); break;\n        case 7: printf("Sunday\\n"); break;\n        default: printf("Invalid day\\n");\n    }\n    return 0;\n}',
    hint: 'switch selects one of many code blocks based on value'
  },
  {
    id: 'c_conditional_032',
    topicId: 'c_conditional',
    question: 'Write a program to create a simple calculator using switch statement.',
    mathSolution: 'Simple calculator',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char op;\n    float a, b;\n    printf("Enter operator (+, -, *, /): ");\n    scanf(" %c", &op);\n    printf("Enter two numbers: ");\n    scanf("%f %f", &a, &b);\n    switch(op) {\n        case \'+\': printf("%.2f + %.2f = %.2f\\n", a, b, a+b); break;\n        case \'-\': printf("%.2f - %.2f = %.2f\\n", a, b, a-b); break;\n        case \'*\': printf("%.2f * %.2f = %.2f\\n", a, b, a*b); break;\n        case \'/\': \n            if(b != 0) printf("%.2f / %.2f = %.2f\\n", a, b, a/b);\n            else printf("Division by zero\\n");\n            break;\n        default: printf("Invalid operator\\n");\n    }\n    return 0;\n}',
    hint: 'switch works with character constants for operators'
  },
  {
    id: 'c_conditional_033',
    topicId: 'c_conditional',
    question: 'Write a program to display month name using switch statement.',
    mathSolution: 'Month name',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int month;\n    printf("Enter month number (1-12): ");\n    scanf("%d", &month);\n    switch(month) {\n        case 1: printf("January\\n"); break;\n        case 2: printf("February\\n"); break;\n        case 3: printf("March\\n"); break;\n        case 4: printf("April\\n"); break;\n        case 5: printf("May\\n"); break;\n        case 6: printf("June\\n"); break;\n        case 7: printf("July\\n"); break;\n        case 8: printf("August\\n"); break;\n        case 9: printf("September\\n"); break;\n        case 10: printf("October\\n"); break;\n        case 11: printf("November\\n"); break;\n        case 12: printf("December\\n"); break;\n        default: printf("Invalid month\\n");\n    }\n    return 0;\n}',
    hint: 'Each case corresponds to a month'
  },
  {
    id: 'c_conditional_034',
    topicId: 'c_conditional',
    question: 'Write a program to display number of days in a month using switch statement.',
    mathSolution: 'Days in month',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int month, days;\n    printf("Enter month number (1-12): ");\n    scanf("%d", &month);\n    switch(month) {\n        case 1: case 3: case 5: case 7: case 8: case 10: case 12:\n            days = 31; break;\n        case 4: case 6: case 9: case 11:\n            days = 30; break;\n        case 2:\n            days = 28; break;\n        default:\n            printf("Invalid month\\n");\n            return 1;\n    }\n    printf("Days: %d\\n", days);\n    return 0;\n}',
    hint: 'Multiple case labels can share same code block'
  },
  {
    id: 'c_conditional_035',
    topicId: 'c_conditional',
    question: 'Write a program to implement a simple menu using switch statement.',
    mathSolution: 'Menu-driven program',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int choice;\n    do {\n        printf("\\n=== MENU ===\\n");\n        printf("1. Say Hello\\n");\n        printf("2. Say Goodbye\\n");\n        printf("3. Exit\\n");\n        printf("Choice: ");\n        scanf("%d", &choice);\n        switch(choice) {\n            case 1: printf("Hello!\\n"); break;\n            case 2: printf("Goodbye!\\n"); break;\n            case 3: printf("Exiting...\\n"); break;\n            default: printf("Invalid choice\\n");\n        }\n    } while(choice != 3);\n    return 0;\n}',
    hint: 'switch with do-while creates interactive menu'
  },
  {
    id: 'c_conditional_036',
    topicId: 'c_conditional',
    question: 'Write a program to convert digit to word using switch statement.',
    mathSolution: 'Digit to word',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int digit;\n    printf("Enter a digit (0-9): ");\n    scanf("%d", &digit);\n    switch(digit) {\n        case 0: printf("Zero\\n"); break;\n        case 1: printf("One\\n"); break;\n        case 2: printf("Two\\n"); break;\n        case 3: printf("Three\\n"); break;\n        case 4: printf("Four\\n"); break;\n        case 5: printf("Five\\n"); break;\n        case 6: printf("Six\\n"); break;\n        case 7: printf("Seven\\n"); break;\n        case 8: printf("Eight\\n"); break;\n        case 9: printf("Nine\\n"); break;\n        default: printf("Not a digit\\n");\n    }\n    return 0;\n}',
    hint: 'switch maps numeric values to strings'
  },
  {
    id: 'c_conditional_037',
    topicId: 'c_conditional',
    question: 'Write a program to check vowel or consonant using switch statement.',
    mathSolution: 'Vowel/consonant',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch;\n    printf("Enter a character: ");\n    scanf("%c", &ch);\n    switch(ch) {\n        case \'a\': case \'e\': case \'i\': case \'o\': case \'u\':\n        case \'A\': case \'E\': case \'I\': case \'O\': case \'U\':\n            printf("%c is a vowel\\n", ch);\n            break;\n        default:\n            if((ch >= \'a\' && ch <= \'z\') || (ch >= \'A\' && ch <= \'Z\'))\n                printf("%c is a consonant\\n", ch);\n            else\n                printf("%c is not an alphabet\\n", ch);\n    }\n    return 0;\n}',
    hint: 'Multiple case labels for all vowels'
  },
  {
    id: 'c_conditional_038',
    topicId: 'c_conditional',
    question: 'Write a program to display season based on month using switch statement.',
    mathSolution: 'Season',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int month;\n    printf("Enter month number: ");\n    scanf("%d", &month);\n    switch(month) {\n        case 12: case 1: case 2:\n            printf("Winter\\n"); break;\n        case 3: case 4: case 5:\n            printf("Spring\\n"); break;\n        case 6: case 7: case 8:\n            printf("Summer\\n"); break;\n        case 9: case 10: case 11:\n            printf("Autumn\\n"); break;\n        default:\n            printf("Invalid month\\n");\n    }\n    return 0;\n}',
    hint: 'Group consecutive months into seasons'
  },
  {
    id: 'c_conditional_039',
    topicId: 'c_conditional',
    question: 'Write a program to implement a simple traffic light using switch statement.',
    mathSolution: 'Traffic light',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char color;\n    printf("Enter traffic light color (R/Y/G): ");\n    scanf(" %c", &color);\n    switch(color) {\n        case \'R\': case \'r\':\n            printf("STOP! Red light\\n"); break;\n        case \'Y\': case \'y\':\n            printf("READY! Yellow light\\n"); break;\n        case \'G\': case \'g\':\n            printf("GO! Green light\\n"); break;\n        default:\n            printf("Invalid color\\n");\n    }\n    return 0;\n}',
    hint: 'Handle both uppercase and lowercase inputs'
  },
  {
    id: 'c_conditional_040',
    topicId: 'c_conditional',
    question: 'Write a program to determine grade using switch statement.',
    mathSolution: 'Grade with switch',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int marks;\n    printf("Enter marks: ");\n    scanf("%d", &marks);\n    if(marks < 0 || marks > 100) {\n        printf("Invalid marks\\n");\n        return 1;\n    }\n    switch(marks / 10) {\n        case 10: case 9: printf("Grade A\\n"); break;\n        case 8: printf("Grade B\\n"); break;\n        case 7: printf("Grade C\\n"); break;\n        case 6: printf("Grade D\\n"); break;\n        default: printf("Grade F\\n");\n    }\n    return 0;\n}',
    hint: 'Use integer division to group marks into ranges'
  },

  // ========== CONDITIONAL OPERATOR (TERNARY) (QUESTIONS 41-45) ==========
  {
    id: 'c_conditional_041',
    topicId: 'c_conditional',
    question: 'Write a program to find larger of two numbers using conditional operator.',
    mathSolution: 'Maximum with ternary',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, max;\n    printf("Enter two numbers: ");\n    scanf("%d %d", &a, &b);\n    max = (a > b) ? a : b;\n    printf("Maximum = %d\\n", max);\n    return 0;\n}',
    hint: 'Ternary: condition ? value_if_true : value_if_false'
  },
  {
    id: 'c_conditional_042',
    topicId: 'c_conditional',
    question: 'Write a program to check even or odd using conditional operator.',
    mathSolution: 'Even/odd with ternary',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    printf("%d is %s\\n", num, (num % 2 == 0) ? "even" : "odd");\n    return 0;\n}',
    hint: 'Use ternary directly in printf'
  },
  {
    id: 'c_conditional_043',
    topicId: 'c_conditional',
    question: 'Write a program to find absolute value using conditional operator.',
    mathSolution: 'Absolute value',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num, abs;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    abs = (num < 0) ? -num : num;\n    printf("Absolute value = %d\\n", abs);\n    return 0;\n}',
    hint: 'abs = (num < 0) ? -num : num'
  },
  {
    id: 'c_conditional_044',
    topicId: 'c_conditional',
    question: 'Write a program to find the largest of three numbers using nested conditional operator.',
    mathSolution: 'Maximum of three',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a, b, c, max;\n    printf("Enter three numbers: ");\n    scanf("%d %d %d", &a, &b, &c);\n    max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);\n    printf("Maximum = %d\\n", max);\n    return 0;\n}',
    hint: 'Nested ternary operators can find maximum of three'
  },
  {
    id: 'c_conditional_045',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is positive, negative, or zero using conditional operator.',
    mathSolution: 'Sign with ternary',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    printf("%d is %s\\n", num,\n           (num > 0) ? "positive" :\n           (num < 0) ? "negative" : "zero");\n    return 0;\n}',
    hint: 'Nested ternaries handle multiple conditions'
  },

  // ========== PRACTICAL APPLICATIONS (QUESTIONS 46-50) ==========
  {
    id: 'c_conditional_046',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is prime using if-else.',
    mathSolution: 'Prime number check',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num, i, isPrime = 1;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    if(num <= 1) {\n        isPrime = 0;\n    } else {\n        for(i = 2; i <= num/2; i++) {\n            if(num % i == 0) {\n                isPrime = 0;\n                break;\n            }\n        }\n    }\n    if(isPrime) printf("%d is prime\\n", num);\n    else printf("%d is not prime\\n", num);\n    return 0;\n}',
    hint: 'Check divisibility from 2 to num/2'
  },
  {
    id: 'c_conditional_047',
    topicId: 'c_conditional',
    question: 'Write a program to check if a number is palindrome using if-else.',
    mathSolution: 'Palindrome number',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num, reversed = 0, remainder, original;\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    original = num;\n    while(num > 0) {\n        remainder = num % 10;\n        reversed = reversed * 10 + remainder;\n        num /= 10;\n    }\n    if(original == reversed)\n        printf("%d is a palindrome\\n", original);\n    else\n        printf("%d is not a palindrome\\n", original);\n    return 0;\n}',
    hint: 'Reverse the number and compare with original'
  },
  {
    id: 'c_conditional_048',
    topicId: 'c_conditional',
    question: 'Write a program to implement a simple ATM withdrawal system with if-else.',
    mathSolution: 'ATM system',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int pin = 1234, entered_pin;\n    float balance = 5000, amount;\n    printf("Enter PIN: ");\n    scanf("%d", &entered_pin);\n    if(entered_pin == pin) {\n        printf("Balance: Rs. %.2f\\n", balance);\n        printf("Enter amount: ");\n        scanf("%f", &amount);\n        if(amount > 0 && amount <= balance) {\n            balance -= amount;\n            printf("Withdrawal successful. New balance: Rs. %.2f\\n", balance);\n        } else if(amount > balance) {\n            printf("Insufficient balance\\n");\n        } else {\n            printf("Invalid amount\\n");\n        }\n    } else {\n        printf("Invalid PIN\\n");\n    }\n    return 0;\n}',
    hint: 'Check PIN first, then validate amount and balance'
  },
  {
    id: 'c_conditional_049',
    topicId: 'c_conditional',
    question: 'Write a program to implement a simple login system with if-else.',
    mathSolution: 'Login system',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char username[20];\n    char password[20];\n    printf("Username: ");\n    scanf("%s", username);\n    printf("Password: ");\n    scanf("%s", password);\n    if(strcmp(username, "admin") == 0 && strcmp(password, "secret") == 0) {\n        printf("Login successful!\\n");\n    } else {\n        printf("Invalid credentials\\n");\n    }\n    return 0;\n}',
    hint: 'Use strcmp to compare strings'
  },
  {
    id: 'c_conditional_050',
    topicId: 'c_conditional',
    question: 'Write a program to calculate shipping cost based on weight using if-else.',
    mathSolution: 'Shipping cost',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    float weight, cost;\n    printf("Enter package weight (kg): ");\n    scanf("%f", &weight);\n    if(weight <= 1) cost = 10;\n    else if(weight <= 5) cost = 20;\n    else if(weight <= 10) cost = 35;\n    else if(weight <= 20) cost = 50;\n    else cost = 70;\n    printf("Shipping cost: $%.2f\\n", cost);\n    return 0;\n}',
    hint: 'Different rates for different weight slabs'
  }
);