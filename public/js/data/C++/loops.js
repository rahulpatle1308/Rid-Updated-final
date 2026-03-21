QuizData.questions.push(
  {
    id: "cpp_loop_1",
    topicId: "cpp_loops",
    question: "Write a for loop that prints numbers from 1 to 10 in C++.",
    mathSolution: "Loop from 1 to 10 with increment of 1",
    codeSolution: 'for(int i=1; i<=10; i++) {\n    cout << i << " ";\n}',
    hint: "Use for loop with initialization i=1, condition i<=10, and increment i++.",
  },
  {
    id: "cpp_loop_2",
    topicId: "cpp_loops",
    question:
      "Write a while loop that prints numbers from 5 to 1 (descending).",
    mathSolution: "Start at 5, decrease by 1 until 1",
    codeSolution:
      'int i = 5;\nwhile(i >= 1) {\n    cout << i << " ";\n    i--;\n}',
    hint: "Initialize i=5, loop while i>=1, decrement i inside loop.",
  },
  {
    id: "cpp_loop_3",
    topicId: "cpp_loops",
    question: 'Write a do-while loop that prints "Hello" 3 times.',
    mathSolution: "Execute loop body 3 times",
    codeSolution:
      'int count = 1;\ndo {\n    cout << "Hello ";\n    count++;\n} while(count <= 3);',
    hint: "Do-while executes at least once. Initialize counter=1, increment after printing.",
  },
  {
    id: "cpp_loop_4",
    topicId: "cpp_loops",
    question: "Print all even numbers between 1 and 20 using a for loop.",
    mathSolution: "Check if i%2 == 0 or increment by 2",
    codeSolution: 'for(int i=2; i<=20; i+=2) {\n    cout << i << " ";\n}',
    hint: "Start from 2 and increment by 2 each time.",
  },
  {
    id: "cpp_loop_5",
    topicId: "cpp_loops",
    question: "Calculate the sum of first 10 natural numbers using a loop.",
    mathSolution: "Sum = 1+2+3+...+10 = 55",
    codeSolution:
      'int sum = 0;\nfor(int i=1; i<=10; i++) {\n    sum += i;\n}\ncout << "Sum: " << sum;',
    hint: "Initialize sum=0, add each number from 1 to 10.",
  },
  {
    id: "cpp_loop_6",
    topicId: "cpp_loops",
    question: "Find the factorial of a number n (take n=5) using loop.",
    mathSolution: "5! = 5×4×3×2×1 = 120",
    codeSolution:
      'int n=5, fact=1;\nfor(int i=1; i<=n; i++) {\n    fact *= i;\n}\ncout << "Factorial: " << fact;',
    hint: "Initialize fact=1, multiply by each number from 1 to n.",
  },
  {
    id: "cpp_loop_7",
    topicId: "cpp_loops",
    question: "Print the multiplication table of 7 using a loop.",
    mathSolution: "7×1=7, 7×2=14, ..., 7×10=70",
    codeSolution:
      'for(int i=1; i<=10; i++) {\n    cout << "7 × " << i << " = " << 7*i << endl;\n}',
    hint: "Loop i from 1 to 10, print 7 * i.",
  },
  {
    id: "cpp_loop_8",
    topicId: "cpp_loops",
    question: "Count the number of digits in a number 12345 using loop.",
    mathSolution: "Repeatedly divide by 10 until 0, count steps",
    codeSolution:
      'int num=12345, count=0;\nwhile(num != 0) {\n    count++;\n    num /= 10;\n}\ncout << "Digits: " << count;',
    hint: "Divide number by 10 repeatedly until it becomes 0, count iterations.",
  },
  {
    id: "cpp_loop_9",
    topicId: "cpp_loops",
    question: "Reverse a number 12345 using loop.",
    mathSolution: "Extract digits and build reverse: 54321",
    codeSolution:
      'int num=12345, rev=0;\nwhile(num > 0) {\n    rev = rev*10 + num%10;\n    num /= 10;\n}\ncout << "Reverse: " << rev;',
    hint: "Extract last digit using %, build reverse by multiplying by 10 and adding digit.",
  },
  {
    id: "cpp_loop_10",
    topicId: "cpp_loops",
    question: "Check if a number 121 is palindrome using loop.",
    mathSolution: "Reverse should equal original",
    codeSolution:
      'int num=121, original=num, rev=0;\nwhile(num > 0) {\n    rev = rev*10 + num%10;\n    num /= 10;\n}\nif(original == rev)\n    cout << "Palindrome";\nelse\n    cout << "Not palindrome";',
    hint: "Store original number, reverse it, then compare.",
  },
  {
    id: "cpp_loop_11",
    topicId: "cpp_loops",
    question: "Print Fibonacci series up to 10 terms using loop.",
    mathSolution: "0,1,1,2,3,5,8,13,21,34",
    codeSolution:
      'int a=0, b=1, next;\ncout << a << " " << b << " ";\nfor(int i=2; i<10; i++) {\n    next = a+b;\n    cout << next << " ";\n    a = b;\n    b = next;\n}',
    hint: "Start with a=0, b=1. Next term = a+b, then update a=b, b=next.",
  },
  {
    id: "cpp_loop_12",
    topicId: "cpp_loops",
    question: "Find the sum of digits of a number 456 using loop.",
    mathSolution: "4+5+6 = 15",
    codeSolution:
      'int num=456, sum=0;\nwhile(num > 0) {\n    sum += num%10;\n    num /= 10;\n}\ncout << "Sum of digits: " << sum;',
    hint: "Extract last digit using %, add to sum, then remove last digit.",
  },
  {
    id: "cpp_loop_13",
    topicId: "cpp_loops",
    question: "Print all odd numbers from 1 to 20 using loop.",
    mathSolution: "1,3,5,7,9,11,13,15,17,19",
    codeSolution: 'for(int i=1; i<=20; i+=2) {\n    cout << i << " ";\n}',
    hint: "Start from 1 and increment by 2 each time.",
  },
  {
    id: "cpp_loop_14",
    topicId: "cpp_loops",
    question: "Calculate the power of a number (2^5) using loop.",
    mathSolution: "2×2×2×2×2 = 32",
    codeSolution:
      'int base=2, exp=5, result=1;\nfor(int i=1; i<=exp; i++) {\n    result *= base;\n}\ncout << "Result: " << result;',
    hint: "Initialize result=1, multiply by base for exp times.",
  },
  {
    id: "cpp_loop_15",
    topicId: "cpp_loops",
    question:
      "Print the following pattern using nested loops:\n*\n**\n***\n****",
    mathSolution: "Row i has i stars",
    codeSolution:
      'for(int i=1; i<=4; i++) {\n    for(int j=1; j<=i; j++) {\n        cout << "*";\n    }\n    cout << endl;\n}',
    hint: "Outer loop for rows, inner loop prints stars equal to row number.",
  },
  {
    id: "cpp_loop_16",
    topicId: "cpp_loops",
    question:
      "Print the following pattern using nested loops:\n1\n12\n123\n1234",
    mathSolution: "Row i has numbers 1 to i",
    codeSolution:
      "for(int i=1; i<=4; i++) {\n    for(int j=1; j<=i; j++) {\n        cout << j;\n    }\n    cout << endl;\n}",
    hint: "Outer loop for rows, inner loop prints j from 1 to i.",
  },
  {
    id: "cpp_loop_17",
    topicId: "cpp_loops",
    question: "Find the average of first n numbers (n=5) using loop.",
    mathSolution: "(1+2+3+4+5)/5 = 3",
    codeSolution:
      'int n=5, sum=0;\nfor(int i=1; i<=n; i++) {\n    sum += i;\n}\ndouble avg = sum / (double)n;\ncout << "Average: " << avg;',
    hint: "Calculate sum first, then divide by n using type casting.",
  },
  {
    id: "cpp_loop_18",
    topicId: "cpp_loops",
    question: "Check if a number is prime (take n=17) using loop.",
    mathSolution: "Check divisibility from 2 to sqrt(n)",
    codeSolution:
      'int n=17;\nbool isPrime = true;\nif(n <= 1) isPrime = false;\nfor(int i=2; i*i <= n; i++) {\n    if(n % i == 0) {\n        isPrime = false;\n        break;\n    }\n}\ncout << (isPrime ? "Prime" : "Not prime");',
    hint: "Check divisibility from 2 to sqrt(n). If any divisor found, not prime.",
  },
  {
    id: "cpp_loop_19",
    topicId: "cpp_loops",
    question: "Print all prime numbers between 1 and 50 using nested loops.",
    mathSolution: "2,3,5,7,11,13,17,19,23,29,31,37,41,43,47",
    codeSolution:
      'for(int num=2; num<=50; num++) {\n    bool isPrime = true;\n    for(int i=2; i*i <= num; i++) {\n        if(num % i == 0) {\n            isPrime = false;\n            break;\n        }\n    }\n    if(isPrime) cout << num << " ";\n}',
    hint: "For each number, check if it's prime using inner loop.",
  },
  {
    id: "cpp_loop_20",
    topicId: "cpp_loops",
    question: "Find the GCD of two numbers (24, 36) using loop.",
    mathSolution: "Largest number dividing both = 12",
    codeSolution:
      'int a=24, b=36, gcd;\nfor(int i=1; i<=a && i<=b; i++) {\n    if(a%i==0 && b%i==0)\n        gcd = i;\n}\ncout << "GCD: " << gcd;',
    hint: "Find largest i that divides both numbers.",
  },
  {
    id: "cpp_loop_21",
    topicId: "cpp_loops",
    question: "Find the LCM of two numbers (12, 18) using loop.",
    mathSolution: "LCM = (a×b)/GCD, LCM = 36",
    codeSolution:
      'int a=12, b=18, max = (a>b)?a:b;\nwhile(true) {\n    if(max%a==0 && max%b==0) {\n        cout << "LCM: " << max;\n        break;\n    }\n    max++;\n}',
    hint: "Start from max(a,b) and keep increasing until divisible by both.",
  },
  {
    id: "cpp_loop_22",
    topicId: "cpp_loops",
    question: "Print the following pattern:\n    *\n   **\n  ***\n ****",
    mathSolution: "Spaces decrease, stars increase",
    codeSolution:
      'for(int i=1; i<=4; i++) {\n    for(int j=1; j<=4-i; j++)\n        cout << " ";\n    for(int k=1; k<=i; k++)\n        cout << "*";\n    cout << endl;\n}',
    hint: "Print spaces (4-i) first, then stars i.",
  },
  {
    id: "cpp_loop_23",
    topicId: "cpp_loops",
    question: "Find the sum of all even numbers between 1 and 100 using loop.",
    mathSolution: "Sum = 2+4+6+...+100 = 2550",
    codeSolution:
      'int sum = 0;\nfor(int i=2; i<=100; i+=2) {\n    sum += i;\n}\ncout << "Sum: " << sum;',
    hint: "Loop from 2 to 100 with increment 2, add to sum.",
  },
  {
    id: "cpp_loop_24",
    topicId: "cpp_loops",
    question: "Check if a number is Armstrong number (153) using loop.",
    mathSolution: "1³ + 5³ + 3³ = 153",
    codeSolution:
      'int num=153, original=num, sum=0;\nwhile(num > 0) {\n    int digit = num%10;\n    sum += digit*digit*digit;\n    num /= 10;\n}\nif(original == sum)\n    cout << "Armstrong number";\nelse\n    cout << "Not Armstrong";',
    hint: "Extract digits, cube each, add to sum, compare with original.",
  },
  {
    id: "cpp_loop_25",
    topicId: "cpp_loops",
    question: "Print all Armstrong numbers between 1 and 500 using loop.",
    mathSolution: "1, 153, 370, 371, 407",
    codeSolution:
      'for(int num=1; num<=500; num++) {\n    int temp=num, sum=0;\n    while(temp > 0) {\n        int digit = temp%10;\n        sum += digit*digit*digit;\n        temp /= 10;\n    }\n    if(sum == num)\n        cout << num << " ";\n}',
    hint: "For each number, check if it's Armstrong using digit cube sum.",
  },
  {
    id: "cpp_loop_26",
    topicId: "cpp_loops",
    question: "Find the factors of a number 36 using loop.",
    mathSolution: "1,2,3,4,6,9,12,18,36",
    codeSolution:
      'int n=36;\ncout << "Factors: ";\nfor(int i=1; i<=n; i++) {\n    if(n % i == 0)\n        cout << i << " ";\n}',
    hint: "Check all numbers from 1 to n, print if n%i==0.",
  },
  {
    id: "cpp_loop_27",
    topicId: "cpp_loops",
    question: "Check if a number is perfect number (28) using loop.",
    mathSolution: "Sum of factors (excluding itself) = 28 (1+2+4+7+14=28)",
    codeSolution:
      'int n=28, sum=0;\nfor(int i=1; i<n; i++) {\n    if(n % i == 0)\n        sum += i;\n}\nif(sum == n)\n    cout << "Perfect number";\nelse\n    cout << "Not perfect";',
    hint: "Sum all divisors except the number itself, compare with number.",
  },
  {
    id: "cpp_loop_28",
    topicId: "cpp_loops",
    question: "Print the following pattern:\n****\n***\n**\n*",
    mathSolution: "Stars decrease from 4 to 1",
    codeSolution:
      'for(int i=4; i>=1; i--) {\n    for(int j=1; j<=i; j++) {\n        cout << "*";\n    }\n    cout << endl;\n}',
    hint: "Outer loop from 4 down to 1, inner loop prints i stars.",
  },
  {
    id: "cpp_loop_29",
    topicId: "cpp_loops",
    question: "Print the following pattern:\n1234\n123\n12\n1",
    mathSolution: "Numbers decrease in each row",
    codeSolution:
      "for(int i=4; i>=1; i--) {\n    for(int j=1; j<=i; j++) {\n        cout << j;\n    }\n    cout << endl;\n}",
    hint: "Outer loop from 4 down to 1, inner loop prints j from 1 to i.",
  },
  {
    id: "cpp_loop_30",
    topicId: "cpp_loops",
    question:
      "Find the sum of the series: 1 + 1/2 + 1/3 + ... + 1/10 using loop.",
    mathSolution: "Harmonic series sum",
    codeSolution:
      'double sum = 0;\nfor(int i=1; i<=10; i++) {\n    sum += 1.0/i;\n}\ncout << "Sum: " << sum;',
    hint: "Use double for sum, add 1.0/i in each iteration.",
  },
  {
    id: "cpp_loop_31",
    topicId: "cpp_loops",
    question: "Find the product of digits of a number 234 using loop.",
    mathSolution: "2×3×4 = 24",
    codeSolution:
      'int num=234, product=1;\nwhile(num > 0) {\n    product *= num%10;\n    num /= 10;\n}\ncout << "Product: " << product;',
    hint: "Initialize product=1, multiply each digit, remove last digit.",
  },
  {
    id: "cpp_loop_32",
    topicId: "cpp_loops",
    question: "Print the following pattern:\n   *\n  ***\n *****\n*******",
    mathSolution: "Pyramid pattern",
    codeSolution:
      'int rows=4;\nfor(int i=1; i<=rows; i++) {\n    for(int j=1; j<=rows-i; j++)\n        cout << " ";\n    for(int k=1; k<=2*i-1; k++)\n        cout << "*";\n    cout << endl;\n}',
    hint: "Spaces = rows-i, stars = 2*i-1.",
  },
  {
    id: "cpp_loop_33",
    topicId: "cpp_loops",
    question: "Find the largest digit in a number 5927 using loop.",
    mathSolution: "Compare each digit, max = 9",
    codeSolution:
      'int num=5927, maxDigit=0;\nwhile(num > 0) {\n    int digit = num%10;\n    if(digit > maxDigit)\n        maxDigit = digit;\n    num /= 10;\n}\ncout << "Largest digit: " << maxDigit;',
    hint: "Extract each digit, compare with current max.",
  },
  {
    id: "cpp_loop_34",
    topicId: "cpp_loops",
    question: "Check if a number is strong number (145) using loop.",
    mathSolution: "Sum of factorials of digits = 145 (1!+4!+5! = 1+24+120=145)",
    codeSolution:
      'int num=145, original=num, sum=0;\nwhile(num > 0) {\n    int digit = num%10;\n    int fact=1;\n    for(int i=1; i<=digit; i++)\n        fact *= i;\n    sum += fact;\n    num /= 10;\n}\nif(sum == original)\n    cout << "Strong number";\nelse\n    cout << "Not strong";',
    hint: "Calculate factorial of each digit, add to sum, compare with original.",
  },
  {
    id: "cpp_loop_35",
    topicId: "cpp_loops",
    question: "Print the Fibonacci series until value exceeds 100.",
    mathSolution: "0,1,1,2,3,5,8,13,21,34,55,89",
    codeSolution:
      'int a=0, b=1, next;\ncout << a << " " << b << " ";\nwhile(true) {\n    next = a+b;\n    if(next > 100) break;\n    cout << next << " ";\n    a = b;\n    b = next;\n}',
    hint: "Use while(true) with break condition when next > 100.",
  },
  {
    id: "cpp_loop_36",
    topicId: "cpp_loops",
    question:
      "Find the sum of the series: 1² + 2² + 3² + ... + 10² using loop.",
    mathSolution: "Sum of squares = 385",
    codeSolution:
      'int sum=0;\nfor(int i=1; i<=10; i++) {\n    sum += i*i;\n}\ncout << "Sum: " << sum;',
    hint: "Add i*i to sum in each iteration.",
  },
  {
    id: "cpp_loop_37",
    topicId: "cpp_loops",
    question: "Print the following pattern:\n1\n22\n333\n4444",
    mathSolution: "Row i has i repeated i times",
    codeSolution:
      "for(int i=1; i<=4; i++) {\n    for(int j=1; j<=i; j++) {\n        cout << i;\n    }\n    cout << endl;\n}",
    hint: "Outer loop i from 1 to 4, inner loop prints i, i times.",
  },
  {
    id: "cpp_loop_38",
    topicId: "cpp_loops",
    question: "Find the sum of first n odd numbers (n=5) using loop.",
    mathSolution: "1+3+5+7+9 = 25",
    codeSolution:
      'int n=5, sum=0, odd=1;\nfor(int i=1; i<=n; i++) {\n    sum += odd;\n    odd += 2;\n}\ncout << "Sum: " << sum;',
    hint: "Start with odd=1, add to sum, increment odd by 2 each time.",
  },
  {
    id: "cpp_loop_39",
    topicId: "cpp_loops",
    question: "Check if a number is automorphic (25) using loop.",
    mathSolution: "25²=625, ends with 25",
    codeSolution:
      'int num=25, square=num*num;\nbool isAutomorphic = true;\nwhile(num > 0) {\n    if(num%10 != square%10) {\n        isAutomorphic = false;\n        break;\n    }\n    num /= 10;\n    square /= 10;\n}\ncout << (isAutomorphic ? "Automorphic" : "Not automorphic");',
    hint: "Compare last digits of number and its square, remove digits.",
  },
  {
    id: "cpp_loop_40",
    topicId: "cpp_loops",
    question: "Print the following pattern:\n   1\n  121\n 12321\n1234321",
    mathSolution: "Palindrome number pyramid",
    codeSolution:
      'int rows=4;\nfor(int i=1; i<=rows; i++) {\n    for(int j=1; j<=rows-i; j++)\n        cout << " ";\n    for(int j=1; j<=i; j++)\n        cout << j;\n    for(int j=i-1; j>=1; j--)\n        cout << j;\n    cout << endl;\n}',
    hint: "Print spaces, then increasing numbers, then decreasing numbers.",
  },
  {
    id: "cpp_loop_41",
    topicId: "cpp_loops",
    question:
      "Find the LCM of first n natural numbers (n=5) using nested loops.",
    mathSolution: "LCM of 1,2,3,4,5 = 60",
    codeSolution:
      'int n=5, lcm=1;\nfor(int i=2; i<=n; i++) {\n    int a=lcm, b=i;\n    while(b != 0) {\n        int temp = b;\n        b = a % b;\n        a = temp;\n    }\n    lcm = (lcm * i) / a;\n}\ncout << "LCM: " << lcm;',
    hint: "Use formula LCM(a,b) = (a*b)/GCD(a,b) repeatedly.",
  },
  {
    id: "cpp_loop_42",
    topicId: "cpp_loops",
    question: "Print all ASCII values from A to Z using loop.",
    mathSolution: "ASCII A=65 to Z=90",
    codeSolution:
      "for(char ch='A'; ch<='Z'; ch++) {\n    cout << ch << \": \" << int(ch) << endl;\n}",
    hint: "Loop through characters, convert to int for ASCII value.",
  },
  {
    id: "cpp_loop_43",
    topicId: "cpp_loops",
    question: 'Find the number of vowels in a string "hello world" using loop.',
    mathSolution: "Count a,e,i,o,u → 3 vowels",
    codeSolution:
      "string str = \"hello world\";\nint count = 0;\nfor(int i=0; i<str.length(); i++) {\n    char ch = tolower(str[i]);\n    if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')\n        count++;\n}\ncout << \"Vowels: \" << count;",
    hint: "Convert each char to lowercase, check if vowel.",
  },
  {
    id: "cpp_loop_44",
    topicId: "cpp_loops",
    question: "Print the following pattern:\n*****\n ****\n  ***\n   **\n    *",
    mathSolution: "Right-aligned decreasing triangle",
    codeSolution:
      'for(int i=5; i>=1; i--) {\n    for(int j=1; j<=5-i; j++)\n        cout << " ";\n    for(int k=1; k<=i; k++)\n        cout << "*";\n    cout << endl;\n}',
    hint: "Spaces = 5-i, stars = i, loop i from 5 down to 1.",
  },
  {
    id: "cpp_loop_45",
    topicId: "cpp_loops",
    question:
      "Find the sum of the series: 1 - 2 + 3 - 4 + ... + n (n=10) using loop.",
    mathSolution: "Alternating sum = -5",
    codeSolution:
      'int n=10, sum=0;\nfor(int i=1; i<=n; i++) {\n    if(i % 2 == 0)\n        sum -= i;\n    else\n        sum += i;\n}\ncout << "Sum: " << sum;',
    hint: "Add odd numbers, subtract even numbers.",
  },
  {
    id: "cpp_loop_46",
    topicId: "cpp_loops",
    question: "Find the frequency of each digit in a number 112233 using loop.",
    mathSolution: "Count occurrences of 0-9",
    codeSolution:
      'long long num=112233;\nint freq[10] = {0};\nwhile(num > 0) {\n    freq[num%10]++;\n    num /= 10;\n}\nfor(int i=0; i<10; i++) {\n    if(freq[i] > 0)\n        cout << i << ": " << freq[i] << endl;\n}',
    hint: "Use array of size 10, increment index corresponding to digit.",
  },
  {
    id: "cpp_loop_47",
    topicId: "cpp_loops",
    question: "Print the following pattern:\n    1\n   2 2\n  3 3 3\n 4 4 4 4",
    mathSolution: "Number pyramid with spaces",
    codeSolution:
      'int rows=4;\nfor(int i=1; i<=rows; i++) {\n    for(int j=1; j<=rows-i; j++)\n        cout << " ";\n    for(int k=1; k<=i; k++)\n        cout << i << " ";\n    cout << endl;\n}',
    hint: "Print spaces, then number i with space i times.",
  },
  {
    id: "cpp_loop_48",
    topicId: "cpp_loops",
    question: "Find all factors of a number and count them (n=48).",
    mathSolution: "1,2,3,4,6,8,12,16,24,48 → 10 factors",
    codeSolution:
      'int n=48, count=0;\ncout << "Factors: ";\nfor(int i=1; i<=n; i++) {\n    if(n % i == 0) {\n        cout << i << " ";\n        count++;\n    }\n}\ncout << "\\nTotal factors: " << count;',
    hint: "Check all numbers from 1 to n, count if divisible.",
  },
  {
    id: "cpp_loop_49",
    topicId: "cpp_loops",
    question: "Check if a number is a duck number (1023) using loop.",
    mathSolution: "Contains zero but not at beginning → Yes",
    codeSolution:
      'int num=1023;\nbool hasZero = false;\nwhile(num > 0) {\n    if(num%10 == 0) {\n        hasZero = true;\n        break;\n    }\n    num /= 10;\n}\nif(hasZero)\n    cout << "Duck number";\nelse\n    cout << "Not duck number";',
    hint: "Check if any digit is zero (except first digit).",
  },
  {
    id: "cpp_loop_50",
    topicId: "cpp_loops",
    question: "Print all possible combinations of 1,2,3 using nested loops.",
    mathSolution: "111,112,113,121,...,333 (27 combinations)",
    codeSolution:
      'for(int i=1; i<=3; i++) {\n    for(int j=1; j<=3; j++) {\n        for(int k=1; k<=3; k++) {\n            cout << i << j << k << " ";\n        }\n    }\n}',
    hint: "Three nested loops for three digits.",
  },
);
