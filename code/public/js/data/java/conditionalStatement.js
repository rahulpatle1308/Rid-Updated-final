QuizData.questions.push(
  // CONDITIONAL STATEMENTS - EASY TO MEDIUM (50 Questions)
  {
    id: "conditional_1",
    topicId: "contState",
    question: "Write an if statement to check if a number is positive.",
    mathSolution: "If number > 0, it's positive",
    codeSolution:
      'int num = 10;\nif(num > 0) {\n    System.out.println("Positive");\n}',
    hint: "Use if with condition num > 0",
  },
  {
    id: "conditional_2",
    topicId: "contState",
    question: "Use if-else to check if a number is even or odd.",
    mathSolution: "If number % 2 == 0, even; else odd",
    codeSolution:
      'int num = 7;\nif(num % 2 == 0) {\n    System.out.println("Even");\n} else {\n    System.out.println("Odd");\n}',
    hint: "Use modulus operator %",
  },
  {
    id: "conditional_3",
    topicId: "contState",
    question: "Write code to find the larger of two numbers using if-else.",
    mathSolution: "Compare a and b, print the larger",
    codeSolution:
      'int a = 15, b = 20;\nif(a > b) {\n    System.out.println(a + " is larger");\n} else {\n    System.out.println(b + " is larger");\n}',
    hint: "Use > operator to compare",
  },
  {
    id: "conditional_4",
    topicId: "contState",
    question:
      "Use if-else if to check if number is positive, negative or zero.",
    mathSolution: "Check >0, <0, or ==0",
    codeSolution:
      'int num = -5;\nif(num > 0) {\n    System.out.println("Positive");\n} else if(num < 0) {\n    System.out.println("Negative");\n} else {\n    System.out.println("Zero");\n}',
    hint: "Use else if for multiple conditions",
  },
  {
    id: "conditional_5",
    topicId: "contState",
    question: "Write code to check voting eligibility (age >= 18).",
    mathSolution: "If age >= 18, eligible to vote",
    codeSolution:
      'int age = 20;\nif(age >= 18) {\n    System.out.println("Eligible to vote");\n} else {\n    System.out.println("Not eligible");\n}',
    hint: "Condition age >= 18",
  },
  {
    id: "conditional_6",
    topicId: "contState",
    question: "Use nested if to find the largest of three numbers.",
    mathSolution: "Compare a with b and c",
    codeSolution:
      'int a=10, b=25, c=15;\nif(a > b) {\n    if(a > c) {\n        System.out.println(a + " is largest");\n    } else {\n        System.out.println(c + " is largest");\n    }\n} else {\n    if(b > c) {\n        System.out.println(b + " is largest");\n    } else {\n        System.out.println(c + " is largest");\n    }\n}',
    hint: "Nest if statements inside if",
  },
  {
    id: "conditional_7",
    topicId: "contState",
    question: "Write a switch statement for days of week (1-7).",
    mathSolution: "1=Monday, 2=Tuesday, etc.",
    codeSolution:
      'int day = 3;\nswitch(day) {\n    case 1: System.out.println("Monday"); break;\n    case 2: System.out.println("Tuesday"); break;\n    case 3: System.out.println("Wednesday"); break;\n    case 4: System.out.println("Thursday"); break;\n    case 5: System.out.println("Friday"); break;\n    case 6: System.out.println("Saturday"); break;\n    case 7: System.out.println("Sunday"); break;\n    default: System.out.println("Invalid day");\n}',
    hint: "Use switch with break statements",
  },
  {
    id: "conditional_8",
    topicId: "contState",
    question: "Use ternary operator to find minimum of two numbers.",
    mathSolution: "condition ? value_if_true : value_if_false",
    codeSolution:
      'int a = 8, b = 12;\nint min = (a < b) ? a : b;\nSystem.out.println("Minimum: " + min);',
    hint: "?: operator returns value based on condition",
  },
  {
    id: "conditional_9",
    topicId: "contState",
    question: "Check if a year is leap year using if-else.",
    mathSolution: "Divisible by 4, not by 100 unless by 400",
    codeSolution:
      'int year = 2024;\nif((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {\n    System.out.println(year + " is leap year");\n} else {\n    System.out.println(year + " is not leap year");\n}',
    hint: "Complex condition with && and ||",
  },
  {
    id: "conditional_10",
    topicId: "contState",
    question: "Write code to assign grade based on marks.",
    mathSolution: "90+ = A, 80-89 = B, 70-79 = C, 60-69 = D, <60 = F",
    codeSolution:
      'int marks = 85;\nif(marks >= 90) {\n    System.out.println("Grade A");\n} else if(marks >= 80) {\n    System.out.println("Grade B");\n} else if(marks >= 70) {\n    System.out.println("Grade C");\n} else if(marks >= 60) {\n    System.out.println("Grade D");\n} else {\n    System.out.println("Grade F");\n}',
    hint: "Use else if ladder",
  },
  {
    id: "conditional_11",
    topicId: "contState",
    question: "Use switch with String in Java.",
    mathSolution: "Switch works with String from Java 7",
    codeSolution:
      'String fruit = "apple";\nswitch(fruit) {\n    case "apple": System.out.println("It\'s an apple"); break;\n    case "banana": System.out.println("It\'s a banana"); break;\n    default: System.out.println("Unknown fruit");\n}',
    hint: "Switch can use String",
  },
  {
    id: "conditional_12",
    topicId: "contState",
    question: "Write code to check if a character is vowel or consonant.",
    mathSolution: "a,e,i,o,u are vowels",
    codeSolution:
      "char ch = 'e';\nch = Character.toLowerCase(ch);\nif(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {\n    System.out.println(ch + \" is vowel\");\n} else {\n    System.out.println(ch + \" is consonant\");\n}",
    hint: "Check against vowels",
  },
  {
    id: "conditional_13",
    topicId: "contState",
    question: "Use if to check if a number is divisible by both 3 and 5.",
    mathSolution: "Number % 3 == 0 AND number % 5 == 0",
    codeSolution:
      'int num = 15;\nif(num % 3 == 0 && num % 5 == 0) {\n    System.out.println(num + " divisible by both 3 and 5");\n}',
    hint: "Use && operator",
  },
  {
    id: "conditional_14",
    topicId: "contState",
    question: "Write code to check if a number is between 10 and 20.",
    mathSolution: "num >= 10 AND num <= 20",
    codeSolution:
      'int num = 15;\nif(num >= 10 && num <= 20) {\n    System.out.println(num + " is between 10 and 20");\n}',
    hint: "Use && for range check",
  },
  {
    id: "conditional_15",
    topicId: "contState",
    question: "Use switch without break (fall-through).",
    mathSolution: "Cases without break execute next cases",
    codeSolution:
      'int num = 2;\nswitch(num) {\n    case 1: System.out.println("One");\n    case 2: System.out.println("Two");\n    case 3: System.out.println("Three");\n    default: System.out.println("Default");\n}\n// Output: Two, Three, Default',
    hint: "Omitting break causes fall-through",
  },
  {
    id: "conditional_16",
    topicId: "contState",
    question: "Write code to check if a person is senior citizen (age >= 60).",
    mathSolution: "If age >= 60, senior citizen",
    codeSolution:
      'int age = 65;\nif(age >= 60) {\n    System.out.println("Senior citizen");\n} else {\n    System.out.println("Not senior citizen");\n}',
    hint: "Condition age >= 60",
  },
  {
    id: "conditional_17",
    topicId: "contState",
    question: "Use nested if to check if a number is positive and even.",
    mathSolution: "num > 0 AND num % 2 == 0",
    codeSolution:
      'int num = 8;\nif(num > 0) {\n    if(num % 2 == 0) {\n        System.out.println(num + " is positive and even");\n    }\n}',
    hint: "Nest even check inside positive check",
  },
  {
    id: "conditional_18",
    topicId: "contState",
    question: "Write code to calculate discount based on purchase amount.",
    mathSolution: ">1000 = 20%, 500-1000 = 10%, <500 = 0%",
    codeSolution:
      'double amount = 1200;\ndouble discount;\nif(amount > 1000) {\n    discount = amount * 0.2;\n} else if(amount >= 500) {\n    discount = amount * 0.1;\n} else {\n    discount = 0;\n}\nSystem.out.println("Discount: " + discount);',
    hint: "Use else if ladder",
  },
  {
    id: "conditional_19",
    topicId: "contState",
    question: "Use ternary operator to check if number is even or odd.",
    mathSolution: 'Condition ? "Even" : "Odd"',
    codeSolution:
      'int num = 7;\nString result = (num % 2 == 0) ? "Even" : "Odd";\nSystem.out.println(result);',
    hint: "Ternary returns string",
  },
  {
    id: "conditional_20",
    topicId: "contState",
    question: "Write code to find the type of triangle based on sides.",
    mathSolution:
      "All sides equal = equilateral, two equal = isosceles, none = scalene",
    codeSolution:
      'int a=5, b=5, c=5;\nif(a == b && b == c) {\n    System.out.println("Equilateral");\n} else if(a == b || b == c || a == c) {\n    System.out.println("Isosceles");\n} else {\n    System.out.println("Scalene");\n}',
    hint: "Compare sides equality",
  },
  {
    id: "conditional_21",
    topicId: "contState",
    question: "Use switch with multiple cases for same output.",
    mathSolution: "Combine cases without break",
    codeSolution:
      'int month = 2;\nswitch(month) {\n    case 12: case 1: case 2:\n        System.out.println("Winter"); break;\n    case 3: case 4: case 5:\n        System.out.println("Spring"); break;\n    case 6: case 7: case 8:\n        System.out.println("Summer"); break;\n    case 9: case 10: case 11:\n        System.out.println("Fall"); break;\n    default: System.out.println("Invalid");\n}',
    hint: "Stack cases together",
  },
  {
    id: "conditional_22",
    topicId: "contState",
    question: "Write code to check if a character is uppercase.",
    mathSolution: "ch >= 'A' AND ch <= 'Z'",
    codeSolution:
      "char ch = 'G';\nif(ch >= 'A' && ch <= 'Z') {\n    System.out.println(ch + \" is uppercase\");\n} else {\n    System.out.println(ch + \" is not uppercase\");\n}",
    hint: "Compare with ASCII ranges",
  },
  {
    id: "conditional_23",
    topicId: "contState",
    question: "Use if-else to determine if a number is multiple of 7.",
    mathSolution: "num % 7 == 0",
    codeSolution:
      'int num = 21;\nif(num % 7 == 0) {\n    System.out.println(num + " is multiple of 7");\n} else {\n    System.out.println(num + " is not multiple of 7");\n}',
    hint: "Use modulus operator",
  },
  {
    id: "conditional_24",
    topicId: "contState",
    question: "Write code to check if a string is empty or null.",
    mathSolution: "str == null OR str.isEmpty()",
    codeSolution:
      'String str = "";\nif(str == null || str.isEmpty()) {\n    System.out.println("String is empty or null");\n} else {\n    System.out.println("String has content");\n}',
    hint: "Check null first then empty",
  },
  {
    id: "conditional_25",
    topicId: "contState",
    question: "Use nested ternary operator for max of three numbers.",
    mathSolution: "Nested condition ? :",
    codeSolution:
      'int a=10, b=25, c=15;\nint max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);\nSystem.out.println("Maximum: " + max);',
    hint: "Ternary can be nested",
  },
  {
    id: "conditional_26",
    topicId: "contState",
    question: "Write code to check if a number is perfect square.",
    mathSolution: "sqrt(num) is integer",
    codeSolution:
      'int num = 16;\nint sqrt = (int)Math.sqrt(num);\nif(sqrt * sqrt == num) {\n    System.out.println(num + " is perfect square");\n} else {\n    System.out.println(num + " is not perfect square");\n}',
    hint: "Compare square of sqrt with original",
  },
  {
    id: "conditional_27",
    topicId: "contState",
    question: "Use if-else to determine if a year is century year.",
    mathSolution: "year % 100 == 0",
    codeSolution:
      'int year = 1900;\nif(year % 100 == 0) {\n    System.out.println(year + " is century year");\n} else {\n    System.out.println(year + " is not century year");\n}',
    hint: "Check divisibility by 100",
  },
  {
    id: "conditional_28",
    topicId: "contState",
    question: "Write code to check if three numbers form Pythagorean triplet.",
    mathSolution: "a^2 + b^2 == c^2",
    codeSolution:
      'int a=3, b=4, c=5;\nif(a*a + b*b == c*c) {\n    System.out.println("Pythagorean triplet");\n} else {\n    System.out.println("Not a Pythagorean triplet");\n}',
    hint: "Check squares relationship",
  },
  {
    id: "conditional_29",
    topicId: "contState",
    question: "Use switch with enum in Java.",
    mathSolution: "Switch works with enum types",
    codeSolution:
      'enum Day {MON, TUE, WED, THU, FRI, SAT, SUN}\nDay today = Day.WED;\nswitch(today) {\n    case MON: System.out.println("Monday"); break;\n    case TUE: System.out.println("Tuesday"); break;\n    case WED: System.out.println("Wednesday"); break;\n    default: System.out.println("Other day");\n}',
    hint: "Enum constants without enum type",
  },
  {
    id: "conditional_30",
    topicId: "contState",
    question: "Write code to check if a character is alphabet or digit.",
    mathSolution: "Check if between 'a'-'z', 'A'-'Z', or '0'-'9'",
    codeSolution:
      "char ch = '7';\nif((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {\n    System.out.println(ch + \" is alphabet\");\n} else if(ch >= '0' && ch <= '9') {\n    System.out.println(ch + \" is digit\");\n} else {\n    System.out.println(ch + \" is special character\");\n}",
    hint: "Use ranges for alphabet and digit",
  },
  {
    id: "conditional_31",
    topicId: "contState",
    question: "Use if to validate user input (age between 0-120).",
    mathSolution: "age >= 0 AND age <= 120",
    codeSolution:
      'int age = 25;\nif(age >= 0 && age <= 120) {\n    System.out.println("Valid age");\n} else {\n    System.out.println("Invalid age");\n}',
    hint: "Check range with &&",
  },
  {
    id: "conditional_32",
    topicId: "contState",
    question: "Write code to calculate electricity bill using slab rates.",
    mathSolution: "First 100 units @5, next 100 @7, above @10",
    codeSolution:
      'int units = 250;\ndouble bill = 0;\nif(units <= 100) {\n    bill = units * 5;\n} else if(units <= 200) {\n    bill = 100*5 + (units-100)*7;\n} else {\n    bill = 100*5 + 100*7 + (units-200)*10;\n}\nSystem.out.println("Bill: " + bill);',
    hint: "Calculate based on slabs",
  },
  {
    id: "conditional_33",
    topicId: "contState",
    question: "Use ternary operator to find absolute value.",
    mathSolution: "If num < 0 then -num else num",
    codeSolution:
      'int num = -10;\nint abs = (num < 0) ? -num : num;\nSystem.out.println("Absolute value: " + abs);',
    hint: "Negate if negative",
  },
  {
    id: "conditional_34",
    topicId: "contState",
    question: "Write code to check if a number is palindrome.",
    mathSolution: "Number equals its reverse",
    codeSolution:
      'int num = 121, original = num, rev = 0;\nwhile(num > 0) {\n    rev = rev * 10 + num % 10;\n    num /= 10;\n}\nif(original == rev) {\n    System.out.println(original + " is palindrome");\n} else {\n    System.out.println(original + " is not palindrome");\n}',
    hint: "Reverse number and compare",
  },
  {
    id: "conditional_35",
    topicId: "contState",
    question: "Use if-else to determine if a number is Armstrong number.",
    mathSolution: "Sum of cubes of digits equals number",
    codeSolution:
      'int num = 153, original = num, sum = 0;\nwhile(num > 0) {\n    int digit = num % 10;\n    sum += digit * digit * digit;\n    num /= 10;\n}\nif(sum == original) {\n    System.out.println(original + " is Armstrong");\n} else {\n    System.out.println(original + " is not Armstrong");\n}',
    hint: "Cube each digit and sum",
  },
  {
    id: "conditional_36",
    topicId: "contState",
    question: "Write code to check if a string starts with specific prefix.",
    mathSolution: "Use startsWith() method",
    codeSolution:
      'String str = "Hello World";\nif(str.startsWith("Hello")) {\n    System.out.println("String starts with Hello");\n} else {\n    System.out.println("String does not start with Hello");\n}',
    hint: "Use startsWith()",
  },
  {
    id: "conditional_37",
    topicId: "contState",
    question: "Use switch with arrow syntax (Java 14+).",
    mathSolution: "Switch expressions with ->",
    codeSolution:
      'int day = 3;\nString result = switch(day) {\n    case 1, 2, 3, 4, 5 -> "Weekday";\n    case 6, 7 -> "Weekend";\n    default -> "Invalid";\n};\nSystem.out.println(result);',
    hint: "Use -> for switch expressions",
  },
  {
    id: "conditional_38",
    topicId: "contState",
    question: "Write code to check if a number is prime using if.",
    mathSolution: "Number divisible only by 1 and itself",
    codeSolution:
      'int num = 17;\nboolean isPrime = true;\nif(num <= 1) isPrime = false;\nfor(int i=2; i<=Math.sqrt(num); i++) {\n    if(num % i == 0) {\n        isPrime = false;\n        break;\n    }\n}\nif(isPrime) {\n    System.out.println(num + " is prime");\n} else {\n    System.out.println(num + " is not prime");\n}',
    hint: "Check divisibility up to sqrt",
  },
  {
    id: "conditional_39",
    topicId: "contState",
    question: "Use if to check if a point lies inside a circle.",
    mathSolution: "Distance from center <= radius",
    codeSolution:
      'int x=2, y=3, centerX=0, centerY=0, radius=5;\ndouble distance = Math.sqrt(Math.pow(x-centerX, 2) + Math.pow(y-centerY, 2));\nif(distance <= radius) {\n    System.out.println("Point inside circle");\n} else {\n    System.out.println("Point outside circle");\n}',
    hint: "Calculate distance formula",
  },
  {
    id: "conditional_40",
    topicId: "contState",
    question: "Write code to determine zodiac sign based on month and day.",
    mathSolution: "Different ranges for each zodiac",
    codeSolution:
      'int month=3, day=21;\nString zodiac = "";\nif((month==3 && day>=21) || (month==4 && day<=19)) zodiac = "Aries";\nelse if((month==4 && day>=20) || (month==5 && day<=20)) zodiac = "Taurus";\n// Add other zodiacs similarly\nSystem.out.println("Zodiac: " + zodiac);',
    hint: "Check month and day ranges",
  },
  {
    id: "conditional_41",
    topicId: "contState",
    question: "Use if-else to check if a year has 366 days (leap year).",
    mathSolution: "Leap year condition",
    codeSolution:
      'int year = 2024;\nif((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {\n    System.out.println(year + " has 366 days");\n} else {\n    System.out.println(year + " has 365 days");\n}',
    hint: "Same as leap year condition",
  },
  {
    id: "conditional_42",
    topicId: "contState",
    question: "Write code to check if three sides form valid triangle.",
    mathSolution: "Sum of any two sides > third side",
    codeSolution:
      'int a=5, b=7, c=9;\nif(a+b > c && b+c > a && a+c > b) {\n    System.out.println("Valid triangle");\n} else {\n    System.out.println("Invalid triangle");\n}',
    hint: "Check triangle inequality",
  },
  {
    id: "conditional_43",
    topicId: "contState",
    question: "Use ternary operator to find smallest of three numbers.",
    mathSolution: "Nested ternary for min",
    codeSolution:
      'int a=12, b=8, c=15;\nint min = (a < b) ? ((a < c) ? a : c) : ((b < c) ? b : c);\nSystem.out.println("Minimum: " + min);',
    hint: "Nested ternary for three values",
  },
  {
    id: "conditional_44",
    topicId: "contState",
    question: "Write code to check if a string contains only alphabets.",
    mathSolution: "Each character should be letter",
    codeSolution:
      'String str = "Hello";\nboolean isAlphabet = true;\nfor(char c : str.toCharArray()) {\n    if(!Character.isLetter(c)) {\n        isAlphabet = false;\n        break;\n    }\n}\nif(isAlphabet) {\n    System.out.println("Only alphabets");\n} else {\n    System.out.println("Contains non-alphabets");\n}',
    hint: "Use Character.isLetter()",
  },
  {
    id: "conditional_45",
    topicId: "contState",
    question: "Use if-else to determine if a number is harshad number.",
    mathSolution: "Number divisible by sum of its digits",
    codeSolution:
      'int num = 18, sum = 0, temp = num;\nwhile(temp > 0) {\n    sum += temp % 10;\n    temp /= 10;\n}\nif(num % sum == 0) {\n    System.out.println(num + " is Harshad number");\n} else {\n    System.out.println(num + " is not Harshad number");\n}',
    hint: "Check divisibility by digit sum",
  },
  {
    id: "conditional_46",
    topicId: "contState",
    question: "Write code to check if a number is strong number.",
    mathSolution: "Sum of factorial of digits equals number",
    codeSolution:
      'int num = 145, sum = 0, temp = num;\nwhile(temp > 0) {\n    int digit = temp % 10;\n    int fact = 1;\n    for(int i=1; i<=digit; i++) fact *= i;\n    sum += fact;\n    temp /= 10;\n}\nif(sum == num) {\n    System.out.println(num + " is strong number");\n} else {\n    System.out.println(num + " is not strong number");\n}',
    hint: "Calculate factorial of each digit",
  },
  {
    id: "conditional_47",
    topicId: "contState",
    question: "Use switch with yield for returning values (Java 13+).",
    mathSolution: "Switch expression with yield",
    codeSolution:
      'int day = 3;\nString result = switch(day) {\n    case 1, 2, 3, 4, 5 -> "Weekday";\n    case 6, 7 -> "Weekend";\n    default -> {\n        int invalid = day;\n        yield "Invalid: " + invalid;\n    }\n};\nSystem.out.println(result);',
    hint: "Use yield in switch expression",
  },
  {
    id: "conditional_48",
    topicId: "contState",
    question: "Write code to check if a number is perfect number.",
    mathSolution: "Sum of proper divisors equals number",
    codeSolution:
      'int num = 28, sum = 0;\nfor(int i=1; i<num; i++) {\n    if(num % i == 0) sum += i;\n}\nif(sum == num) {\n    System.out.println(num + " is perfect number");\n} else {\n    System.out.println(num + " is not perfect number");\n}',
    hint: "Add all divisors except itself",
  },
  {
    id: "conditional_49",
    topicId: "contState",
    question: "Use if-else to determine if a number is neon number.",
    mathSolution: "Square's digits sum equals number",
    codeSolution:
      'int num = 9;\nint square = num * num;\nint sum = 0;\nwhile(square > 0) {\n    sum += square % 10;\n    square /= 10;\n}\nif(sum == num) {\n    System.out.println(num + " is neon number");\n} else {\n    System.out.println(num + " is not neon number");\n}',
    hint: "Square the number, sum digits",
  },
  {
    id: "conditional_50",
    topicId: "contState",
    question: "Write code to implement simple calculator using switch.",
    mathSolution: "Perform operation based on operator",
    codeSolution:
      "int a = 10, b = 5;\nchar op = '+';\nswitch(op) {\n    case '+': System.out.println(a + b); break;\n    case '-': System.out.println(a - b); break;\n    case '*': System.out.println(a * b); break;\n    case '/': \n        if(b != 0) System.out.println(a / b);\n        else System.out.println(\"Cannot divide by zero\");\n        break;\n    default: System.out.println(\"Invalid operator\");\n}",
    hint: "Use switch for different operations",
  },
);
