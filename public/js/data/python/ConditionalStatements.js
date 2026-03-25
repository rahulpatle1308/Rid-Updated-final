QuizData.questions.push(
  {
    Id: "py_cond_1",
    topicId: "py_conditional",
    question: "Write an if statement to check if a number is positive.",
    mathSolution: "Number > 0 is positive",
    codeSolution: "num = 5\nif num > 0:\n    print('Positive number')",
    hint: "Use `>` operator to compare with 0"
  },
  {
    Id: "py_cond_2",
    topicId: "py_conditional",
    question: "Write an if-else statement to check if a number is even or odd.",
    mathSolution: "Even numbers are divisible by 2 (num % 2 == 0)",
    codeSolution: "num = 7\nif num % 2 == 0:\n    print('Even')\nelse:\n    print('Odd')",
    hint: "Use modulo operator `%` to check remainder"
  },
  {
    Id: "py_cond_3",
    topicId: "py_conditional",
    question: "Write a program to find the largest of three numbers using if-elif-else.",
    mathSolution: "Compare numbers pairwise to find maximum",
    codeSolution: "a, b, c = 10, 20, 15\nif a >= b and a >= c:\n    print('Largest:', a)\nelif b >= a and b >= c:\n    print('Largest:', b)\nelse:\n    print('Largest:', c)",
    hint: "Use `and` operator to combine conditions"
  },
  {
    Id: "py_cond_4",
    topicId: "py_conditional",
    question: "Check if a year is a leap year using conditional statements.",
    mathSolution: "Leap year if divisible by 400, or divisible by 4 but not by 100",
    codeSolution: "year = 2024\nif (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0):\n    print(f'{year} is a leap year')\nelse:\n    print(f'{year} is not a leap year')",
    hint: "Use `or` and `and` for multiple conditions"
  },
  {
    Id: "py_cond_5",
    topicId: "py_conditional",
    question: "Write a program to assign a grade based on marks (A: >=90, B: >=80, C: >=70, D: >=60, F: <60).",
    mathSolution: "Grade boundaries at 90, 80, 70, 60",
    codeSolution: "marks = 85\nif marks >= 90:\n    grade = 'A'\nelif marks >= 80:\n    grade = 'B'\nelif marks >= 70:\n    grade = 'C'\nelif marks >= 60:\n    grade = 'D'\nelse:\n    grade = 'F'\nprint(f'Grade: {grade}')",
    hint: "Check from highest to lowest grade"
  },
  {
    Id: "py_cond_6",
    topicId: "py_conditional",
    question: "Use nested if to check if a number is positive and even.",
    mathSolution: "Number must satisfy both conditions",
    codeSolution: "num = 8\nif num > 0:\n    if num % 2 == 0:\n        print(f'{num} is positive and even')\n    else:\n        print(f'{num} is positive but odd')\nelse:\n    print(f'{num} is not positive')",
    hint: "Place one if statement inside another"
  },
  {
    Id: "py_cond_7",
    topicId: "py_conditional",
    question: "Write a program to check if a character is a vowel or consonant.",
    mathSolution: "Vowels: a, e, i, o, u (both cases)",
    codeSolution: "char = 'e'\nif char.lower() in ['a', 'e', 'i', 'o', 'u']:\n    print(f'{char} is a vowel')\nelse:\n    print(f'{char} is a consonant')",
    hint: "Use `.lower()` to handle uppercase and check membership in list"
  },
  {
    Id: "py_cond_8",
    topicId: "py_conditional",
    question: "Check if a number is divisible by both 3 and 5.",
    mathSolution: "Number divisible by 15",
    codeSolution: "num = 15\nif num % 3 == 0 and num % 5 == 0:\n    print(f'{num} is divisible by both 3 and 5')\nelse:\n    print(f'{num} is not divisible by both')",
    hint: "Use `and` operator to combine conditions"
  },
  {
    Id: "py_cond_9",
    topicId: "py_conditional",
    question: "Write a program to determine the type of triangle based on sides.",
    mathSolution: "Equilateral: all sides equal, Isosceles: two sides equal, Scalene: all sides different",
    codeSolution: "a, b, c = 5, 5, 8\nif a == b == c:\n    print('Equilateral triangle')\nelif a == b or b == c or a == c:\n    print('Isosceles triangle')\nelse:\n    print('Scalene triangle')",
    hint: "Check equality of sides in different combinations"
  },
  {
    Id: "py_cond_10",
    topicId: "py_conditional",
    question: "Use conditional expressions (ternary operator) to find the minimum of two numbers.",
    mathSolution: "min = a if a < b else b",
    codeSolution: "a, b = 10, 20\nmin_num = a if a < b else b\nprint(f'Minimum: {min_num}')",
    hint: "Syntax: `value_if_true if condition else value_if_false`"
  },
  {
    Id: "py_cond_11",
    topicId: "py_conditional",
    question: "Write a program to check if a string is empty or not.",
    mathSolution: "Empty string has length 0",
    codeSolution: "text = 'Hello'\nif text:\n    print('String is not empty')\nelse:\n    print('String is empty')",
    hint: "Empty string evaluates to False in boolean context"
  },
  {
    Id: "py_cond_12",
    topicId: "py_conditional",
    question: "Check if a number is within a specific range (1 to 100 inclusive).",
    mathSolution: "Number between 1 and 100",
    codeSolution: "num = 50\nif 1 <= num <= 100:\n    print(f'{num} is in range 1-100')\nelse:\n    print(f'{num} is out of range')",
    hint: "Use chained comparison operators"
  },
  {
    Id: "py_cond_13",
    topicId: "py_conditional",
    question: "Write a program to determine the season based on month number.",
    mathSolution: "Spring: Mar-May, Summer: Jun-Aug, Fall: Sep-Nov, Winter: Dec-Feb",
    codeSolution: "month = 7\nif month in [3, 4, 5]:\n    season = 'Spring'\nelif month in [6, 7, 8]:\n    season = 'Summer'\nelif month in [9, 10, 11]:\n    season = 'Fall'\nelse:\n    season = 'Winter'\nprint(f'Month {month} is in {season}')",
    hint: "Use lists to group months by season"
  },
  {
    Id: "py_cond_14",
    topicId: "py_conditional",
    question: "Use if-elif-else to implement a simple calculator for +, -, *, /.",
    mathSolution: "Perform operation based on operator",
    codeSolution: "a, b = 10, 5\noperator = '+'\nif operator == '+':\n    result = a + b\nelif operator == '-':\n    result = a - b\nelif operator == '*':\n    result = a * b\nelif operator == '/':\n    result = a / b if b != 0 else 'Error: Division by zero'\nelse:\n    result = 'Invalid operator'\nprint(f'Result: {result}')",
    hint: "Check for division by zero"
  },
  {
    Id: "py_cond_15",
    topicId: "py_conditional",
    question: "Check if a number is a perfect square using conditional statements.",
    mathSolution: "Perfect square if integer sqrt squared equals number",
    codeSolution: "num = 16\nsqrt = int(num ** 0.5)\nif sqrt * sqrt == num:\n    print(f'{num} is a perfect square')\nelse:\n    print(f'{num} is not a perfect square')",
    hint: "Compare num with square of integer square root"
  },
  {
    Id: "py_cond_16",
    topicId: "py_conditional",
    question: "Write a program to validate if a password meets criteria: length >= 8 and contains at least one digit.",
    mathSolution: "Password must satisfy both conditions",
    codeSolution: "password = 'pass1234'\nif len(password) >= 8 and any(c.isdigit() for c in password):\n    print('Valid password')\nelse:\n    print('Invalid password')",
    hint: "Use `any()` with generator expression for digit check"
  },
  {
    Id: "py_cond_17",
    topicId: "py_conditional",
    question: "Use nested conditional statements to find the roots of a quadratic equation.",
    mathSolution: "Discriminant = b² - 4ac determines nature of roots",
    codeSolution: "a, b, c = 1, -5, 6\ndiscriminant = b**2 - 4*a*c\nif discriminant > 0:\n    root1 = (-b + discriminant**0.5) / (2*a)\n    root2 = (-b - discriminant**0.5) / (2*a)\n    print(f'Real and distinct roots: {root1}, {root2}')\nelif discriminant == 0:\n    root = -b / (2*a)\n    print(f'Real and equal roots: {root}')\nelse:\n    real = -b / (2*a)\n    imag = (-discriminant)**0.5 / (2*a)\n    print(f'Complex roots: {real} ± {imag}i')",
    hint: "Check discriminant value to determine root types"
  },
  {
    Id: "py_cond_18",
    topicId: "py_conditional",
    question: "Write a program to check if three numbers can form a valid triangle.",
    mathSolution: "Triangle inequality: sum of any two sides > third side",
    codeSolution: "a, b, c = 3, 4, 5\nif a + b > c and a + c > b and b + c > a:\n    print('Valid triangle')\nelse:\n    print('Invalid triangle')",
    hint: "Check all three combinations of side sums"
  },
  {
    Id: "py_cond_19",
    topicId: "py_conditional",
    question: "Use conditional statements to determine if a year is a century year.",
    mathSolution: "Century years are divisible by 100",
    codeSolution: "year = 1900\nif year % 100 == 0:\n    print(f'{year} is a century year')\nelse:\n    print(f'{year} is not a century year')",
    hint: "Check divisibility by 100"
  },
  {
    Id: "py_cond_20",
    topicId: "py_conditional",
    question: "Write a program to categorize a person's age group: Child (0-12), Teen (13-19), Adult (20-64), Senior (65+).",
    mathSolution: "Age ranges define groups",
    codeSolution: "age = 25\nif 0 <= age <= 12:\n    group = 'Child'\nelif 13 <= age <= 19:\n    group = 'Teen'\nelif 20 <= age <= 64:\n    group = 'Adult'\nelif age >= 65:\n    group = 'Senior'\nelse:\n    group = 'Invalid age'\nprint(f'Age {age}: {group}')",
    hint: "Use chained comparisons for ranges"
  },
  {
    Id: "py_cond_21",
    topicId: "py_conditional",
    question: "Check if a number is positive, negative, or zero using if-elif-else.",
    mathSolution: "Compare with zero",
    codeSolution: "num = -5\nif num > 0:\n    print('Positive')\nelif num < 0:\n    print('Negative')\nelse:\n    print('Zero')",
    hint: "Use >, <, and == operators"
  },
  {
    Id: "py_cond_22",
    topicId: "py_conditional",
    question: "Write a program to determine if a character is uppercase, lowercase, or not a letter.",
    mathSolution: "Check ASCII ranges or use string methods",
    codeSolution: "char = 'A'\nif char.isupper():\n    print(f'{char} is uppercase')\nelif char.islower():\n    print(f'{char} is lowercase')\nelse:\n    print(f'{char} is not a letter')",
    hint: "Use string methods `.isupper()` and `.islower()`"
  },
  {
    Id: "py_cond_23",
    topicId: "py_conditional",
    question: "Use conditional statements to implement FizzBuzz (multiples of 3: Fizz, 5: Buzz, both: FizzBuzz).",
    mathSolution: "Check divisibility by 3 and 5",
    codeSolution: "num = 15\nif num % 3 == 0 and num % 5 == 0:\n    print('FizzBuzz')\nelif num % 3 == 0:\n    print('Fizz')\nelif num % 5 == 0:\n    print('Buzz')\nelse:\n    print(num)",
    hint: "Check combined condition first"
  },
  {
    Id: "py_cond_24",
    topicId: "py_conditional",
    question: "Write a program to check if a number is a palindrome (like 121, 454).",
    mathSolution: "Number equals its reverse",
    codeSolution: "num = 121\noriginal = num\nreverse = 0\nwhile num > 0:\n    reverse = reverse * 10 + num % 10\n    num //= 10\nif original == reverse:\n    print(f'{original} is a palindrome')\nelse:\n    print(f'{original} is not a palindrome')",
    hint: "Reverse the number and compare"
  },
  {
    Id: "py_cond_25",
    topicId: "py_conditional",
    question: "Check if a number is prime using conditional statements.",
    mathSolution: "Prime has no divisors other than 1 and itself",
    codeSolution: "num = 17\nis_prime = True\nif num <= 1:\n    is_prime = False\nelse:\n    for i in range(2, int(num**0.5) + 1):\n        if num % i == 0:\n            is_prime = False\n            break\nif is_prime:\n    print(f'{num} is prime')\nelse:\n    print(f'{num} is not prime')",
    hint: "Check divisors up to square root of number"
  },
  {
    Id: "py_cond_26",
    topicId: "py_conditional",
    question: "Write a program to determine the day of the week based on number (1-7).",
    mathSolution: "Map numbers to day names",
    codeSolution: "day_num = 3\nif day_num == 1:\n    day = 'Monday'\nelif day_num == 2:\n    day = 'Tuesday'\nelif day_num == 3:\n    day = 'Wednesday'\nelif day_num == 4:\n    day = 'Thursday'\nelif day_num == 5:\n    day = 'Friday'\nelif day_num == 6:\n    day = 'Saturday'\nelif day_num == 7:\n    day = 'Sunday'\nelse:\n    day = 'Invalid day'\nprint(f'Day {day_num}: {day}')",
    hint: "Use elif chain for each number"
  },
  {
    Id: "py_cond_27",
    topicId: "py_conditional",
    question: "Use conditional statements to check if a list is empty.",
    mathSolution: "Empty list has length 0",
    codeSolution: "my_list = []\nif not my_list:\n    print('List is empty')\nelse:\n    print('List is not empty')",
    hint: "Empty list evaluates to False in boolean context"
  },
  {
    Id: "py_cond_28",
    topicId: "py_conditional",
    question: "Write a program to find the maximum of three numbers using nested if.",
    mathSolution: "Compare numbers sequentially",
    codeSolution: "a, b, c = 10, 20, 15\nif a >= b:\n    if a >= c:\n        max_num = a\n    else:\n        max_num = c\nelse:\n    if b >= c:\n        max_num = b\n    else:\n        max_num = c\nprint(f'Maximum: {max_num}')",
    hint: "Use nested comparisons"
  },
  {
    Id: "py_cond_29",
    topicId: "py_conditional",
    question: "Check if a string starts with a vowel or consonant.",
    mathSolution: "Check first character",
    codeSolution: "text = 'apple'\nif text and text[0].lower() in 'aeiou':\n    print(f'{text} starts with a vowel')\nelif text:\n    print(f'{text} starts with a consonant')\nelse:\n    print('Empty string')",
    hint: "Check if string is not empty before accessing first character"
  },
  {
    Id: "py_cond_30",
    topicId: "py_conditional",
    question: "Write a program to determine if a number is a multiple of both 2 and 3, only 2, only 3, or neither.",
    mathSolution: "Check divisibility patterns",
    codeSolution: "num = 6\nif num % 2 == 0 and num % 3 == 0:\n    print(f'{num} is multiple of both 2 and 3')\nelif num % 2 == 0:\n    print(f'{num} is multiple of only 2')\nelif num % 3 == 0:\n    print(f'{num} is multiple of only 3')\nelse:\n    print(f'{num} is multiple of neither 2 nor 3')",
    hint: "Check combined condition first"
  },
  {
    Id: "py_cond_31",
    topicId: "py_conditional",
    question: "Use conditional expression to convert boolean to 'Yes' or 'No'.",
    mathSolution: "Map True to 'Yes', False to 'No'",
    codeSolution: "is_active = True\nstatus = 'Yes' if is_active else 'No'\nprint(f'Active: {status}')",
    hint: "Use ternary operator"
  },
  {
    Id: "py_cond_32",
    topicId: "py_conditional",
    question: "Write a program to check if a number is an Armstrong number (sum of cubes of digits equals number).",
    mathSolution: "153 = 1³ + 5³ + 3³",
    codeSolution: "num = 153\noriginal = num\nsum_of_cubes = 0\nwhile num > 0:\n    digit = num % 10\n    sum_of_cubes += digit ** 3\n    num //= 10\nif original == sum_of_cubes:\n    print(f'{original} is an Armstrong number')\nelse:\n    print(f'{original} is not an Armstrong number')",
    hint: "Extract digits and sum their cubes"
  },
  {
    Id: "py_cond_33",
    topicId: "py_conditional",
    question: "Check if three numbers can be sides of a right-angled triangle.",
    mathSolution: "Pythagoras theorem: a² + b² = c² (c is largest)",
    codeSolution: "a, b, c = 3, 4, 5\nsides = sorted([a, b, c])\nif sides[0]**2 + sides[1]**2 == sides[2]**2:\n    print('Forms a right-angled triangle')\nelse:\n    print('Does not form a right-angled triangle')",
    hint: "Sort sides to identify hypotenuse"
  },
  {
    Id: "py_cond_34",
    topicId: "py_conditional",
    question: "Write a program to determine if a character is a digit, letter, or special character.",
    mathSolution: "Use string methods for classification",
    codeSolution: "char = '@'\nif char.isdigit():\n    print(f'{char} is a digit')\nelif char.isalpha():\n    print(f'{char} is a letter')\nelse:\n    print(f'{char} is a special character')",
    hint: "Use `.isdigit()` and `.isalpha()` methods"
  },
  {
    Id: "py_cond_35",
    topicId: "py_conditional",
    question: "Use nested conditional statements to simulate an ATM withdrawal with sufficient balance check.",
    mathSolution: "Check balance first, then withdrawal limits",
    codeSolution: "balance = 5000\nwithdraw = 3000\nif withdraw <= balance:\n    if withdraw % 100 == 0:\n        if withdraw <= 10000:\n            balance -= withdraw\n            print(f'Withdrawal successful. New balance: {balance}')\n        else:\n            print('Withdrawal amount exceeds limit')\n    else:\n        print('Amount must be multiples of 100')\nelse:\n    print('Insufficient balance')",
    hint: "Nest conditions for multiple validations"
  },
  {
    Id: "py_cond_36",
    topicId: "py_conditional",
    question: "Write a program to check if a point (x, y) lies on the x-axis, y-axis, or origin.",
    mathSolution: "x=0: y-axis, y=0: x-axis, both zero: origin",
    codeSolution: "x, y = 0, 5\nif x == 0 and y == 0:\n    print('Point is at origin')\nelif x == 0:\n    print('Point lies on y-axis')\nelif y == 0:\n    print('Point lies on x-axis')\nelse:\n    print('Point lies in quadrant')",
    hint: "Check combinations of zero values"
  },
  {
    Id: "py_cond_37",
    topicId: "py_conditional",
    question: "Use conditional statements to validate an email address format (contains @ and .).",
    mathSolution: "Email must have @ and at least one dot after @",
    codeSolution: "email = 'user@example.com'\nif '@' in email and '.' in email.split('@')[-1]:\n    print('Valid email format')\nelse:\n    print('Invalid email format')",
    hint: "Check for @ and dot in domain part"
  },
  {
    Id: "py_cond_38",
    topicId: "py_conditional",
    question: "Write a program to find the type of quadrilateral based on side lengths.",
    mathSolution: "Square: all equal, Rectangle: opposites equal, others: general",
    codeSolution: "sides = [5, 5, 5, 5]\nif len(set(sides)) == 1:\n    print('Square')\nelif sides[0] == sides[2] and sides[1] == sides[3]:\n    print('Rectangle')\nelse:\n    print('General quadrilateral')",
    hint: "Use set to check uniqueness of sides"
  },
  {
    Id: "py_cond_39",
    topicId: "py_conditional",
    question: "Check if a given year is a millennium year (ends with 000).",
    mathSolution: "Years divisible by 1000",
    codeSolution: "year = 2000\nif year % 1000 == 0:\n    print(f'{year} is a millennium year')\nelse:\n    print(f'{year} is not a millennium year')",
    hint: "Check divisibility by 1000"
  },
  {
    Id: "py_cond_40",
    topicId: "py_conditional",
    question: "Write a program to determine the zodiac sign based on birth month and day.",
    mathSolution: "Zodiac signs based on date ranges",
    codeSolution: "month, day = 3, 21\nif (month == 3 and day >= 21) or (month == 4 and day <= 19):\n    sign = 'Aries'\nelif (month == 4 and day >= 20) or (month == 5 and day <= 20):\n    sign = 'Taurus'\n# ... (other zodiac signs)\nelse:\n    sign = 'Unknown'\nprint(f'Zodiac sign: {sign}')",
    hint: "Use compound conditions for date ranges"
  },
  {
    Id: "py_cond_41",
    topicId: "py_conditional",
    question: "Use conditional statements to check if a number is a perfect number (sum of proper divisors equals number).",
    mathSolution: "6 = 1+2+3 is perfect",
    codeSolution: "num = 28\nsum_divisors = 0\nfor i in range(1, num):\n    if num % i == 0:\n        sum_divisors += i\nif sum_divisors == num:\n    print(f'{num} is a perfect number')\nelse:\n    print(f'{num} is not a perfect number')",
    hint: "Find all proper divisors and sum them"
  },
  {
    Id: "py_cond_42",
    topicId: "py_conditional",
    question: "Write a program to check if three numbers can be the angles of a triangle.",
    mathSolution: "Sum of angles = 180 and each > 0",
    codeSolution: "a, b, c = 60, 60, 60\nif a > 0 and b > 0 and c > 0 and a + b + c == 180:\n    print('Valid triangle angles')\nelse:\n    print('Invalid triangle angles')",
    hint: "Check sum equals 180 and all positive"
  },
  {
    Id: "py_cond_43",
    topicId: "py_conditional",
    question: "Use conditional expression to get absolute value of a number.",
    mathSolution: "|x| = x if x >= 0 else -x",
    codeSolution: "num = -10\nabs_num = num if num >= 0 else -num\nprint(f'Absolute value: {abs_num}')",
    hint: "Use ternary operator"
  },
  {
    Id: "py_cond_44",
    topicId: "py_conditional",
    question: "Write a program to determine if a string is a palindrome.",
    mathSolution: "String equals its reverse",
    codeSolution: "text = 'radar'\nif text == text[::-1]:\n    print(f'{text} is a palindrome')\nelse:\n    print(f'{text} is not a palindrome')",
    hint: "Use string slicing to reverse"
  },
  {
    Id: "py_cond_45",
    topicId: "py_conditional",
    question: "Check if a number is a power of two using conditional statements.",
    mathSolution: "Power of two has only one bit set in binary",
    codeSolution: "num = 16\nif num > 0 and (num & (num - 1)) == 0:\n    print(f'{num} is a power of two')\nelse:\n    print(f'{num} is not a power of two')",
    hint: "Use bitwise AND with (num-1)"
  },
  {
    Id: "py_cond_46",
    topicId: "py_conditional",
    question: "Write a program to determine if a given number is a palindrome in binary representation.",
    mathSolution: "Binary representation reads same forwards and backwards",
    codeSolution: "num = 9  # binary 1001\nbinary = bin(num)[2:]\nif binary == binary[::-1]:\n    print(f'{num} (binary {binary}) is a binary palindrome')\nelse:\n    print(f'{num} (binary {binary}) is not a binary palindrome')",
    hint: "Convert to binary using bin() and slice"
  },
  {
    Id: "py_cond_47",
    topicId: "py_conditional",
    question: "Use nested conditional statements to implement a simple rock-paper-scissors game logic.",
    mathSolution: "Rock beats Scissors, Scissors beats Paper, Paper beats Rock",
    codeSolution: "player1, player2 = 'rock', 'scissors'\nif player1 == player2:\n    print('Tie')\nelif player1 == 'rock':\n    if player2 == 'scissors':\n        print('Player1 wins')\n    else:\n        print('Player2 wins')\nelif player1 == 'paper':\n    if player2 == 'rock':\n        print('Player1 wins')\n    else:\n        print('Player2 wins')\nelse:  # player1 scissors\n    if player2 == 'paper':\n        print('Player1 wins')\n    else:\n        print('Player2 wins')",
    hint: "Nest conditions based on player1 choice"
  },
  {
    Id: "py_cond_48",
    topicId: "py_conditional",
    question: "Write a program to check if a date (month, day) is valid considering month lengths and leap years.",
    mathSolution: "Check month range, day range based on month",
    codeSolution: "month, day, year = 2, 29, 2024\nif 1 <= month <= 12:\n    if month in [4, 6, 9, 11]:\n        max_days = 30\n    elif month == 2:\n        if (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0):\n            max_days = 29\n        else:\n            max_days = 28\n    else:\n        max_days = 31\n    \n    if 1 <= day <= max_days:\n        print('Valid date')\n    else:\n        print('Invalid day')\nelse:\n    print('Invalid month')",
    hint: "Consider leap year for February"
  },
  {
    Id: "py_cond_49",
    topicId: "py_conditional",
    question: "Use conditional statements to categorize a number as abundant, deficient, or perfect.",
    mathSolution: "Sum of proper divisors > number: abundant, <: deficient, =: perfect",
    codeSolution: "num = 12\nsum_divisors = 0\nfor i in range(1, num):\n    if num % i == 0:\n        sum_divisors += i\nif sum_divisors > num:\n    print(f'{num} is abundant')\nelif sum_divisors < num:\n    print(f'{num} is deficient')\nelse:\n    print(f'{num} is perfect')",
    hint: "Compare sum of proper divisors with number"
  },
  {
    Id: "py_cond_50",
    topicId: "py_conditional",
    question: "Write a program to determine the quadrant of a point (x, y) excluding axes.",
    mathSolution: "Quadrant I: x>0,y>0; II: x<0,y>0; III: x<0,y<0; IV: x>0,y<0",
    codeSolution: "x, y = 3, -4\nif x > 0 and y > 0:\n    print('Quadrant I')\nelif x < 0 and y > 0:\n    print('Quadrant II')\nelif x < 0 and y < 0:\n    print('Quadrant III')\nelif x > 0 and y < 0:\n    print('Quadrant IV')\nelse:\n    print('Point lies on an axis')",
    hint: "Check sign combinations of x and y"
  });
  