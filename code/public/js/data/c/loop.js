QuizData.questions.push(
  // ========== BASIC FOR LOOP QUESTIONS (QUESTIONS 1-10) ==========
  {
    id: 'c_loop_1',
    topicId: 'c_loop',
    question: 'Write a for loop to print numbers from 1 to 10.',
    mathSolution: 'Loop runs 10 times from i=1 to i<=10',
    codeSolution: 'for(int i=1; i<=10; i++) {\n    printf("%d ", i);\n}',
    hint: 'Initialization: i=1, Condition: i<=10, Increment: i++'
  },
  {
    id: 'c_loop_2',
    topicId: 'c_loop',
    question: 'Write a for loop to print numbers from 10 to 1 in reverse order.',
    mathSolution: 'i starts from 10 and runs until i>=1',
    codeSolution: 'for(int i=10; i>=1; i--) {\n    printf("%d ", i);\n}',
    hint: 'Use i-- for decrement'
  },
  {
    id: 'c_loop_3',
    topicId: 'c_loop',
    question: 'Write a for loop to print even numbers from 1 to 100.',
    mathSolution: '2,4,6,...,100',
    codeSolution: 'for(int i=2; i<=100; i+=2) {\n    printf("%d ", i);\n}',
    hint: 'Use i=i+2 or i+=2'
  },
  {
    id: 'c_loop_4',
    topicId: 'c_loop',
    question: 'Write a for loop to print odd numbers from 1 to 99.',
    mathSolution: '1,3,5,...,99',
    codeSolution: 'for(int i=1; i<=99; i+=2) {\n    printf("%d ", i);\n}',
    hint: 'Start with i=1 and increment by 2'
  },
  {
    id: 'c_loop_5',
    topicId: 'c_loop',
    question: 'Write a for loop to print the multiplication table of 5.',
    mathSolution: '5,10,15,20,25,30,35,40,45,50',
    codeSolution: 'for(int i=1; i<=10; i++) {\n    printf("5 x %d = %d\\n", i, 5*i);\n}',
    hint: 'Use 5*i formula'
  },
  {
    id: 'c_loop_6',
    topicId: 'c_loop',
    question: 'Write a for loop to calculate the sum of numbers from 1 to 100.',
    mathSolution: '1+2+3+...+100 = 5050',
    codeSolution: 'int sum = 0;\nfor(int i=1; i<=100; i++) {\n    sum += i;\n}\nprintf("Sum = %d", sum);',
    hint: 'Add i to sum variable each time'
  },
  {
    id: 'c_loop_7',
    topicId: 'c_loop',
    question: 'Write a for loop to print numbers from 1 to n where n is taken as user input.',
    mathSolution: 'If n=5 then: 1,2,3,4,5',
    codeSolution: 'int n;\nprintf("Enter n: ");\nscanf("%d", &n);\nfor(int i=1; i<=n; i++) {\n    printf("%d ", i);\n}',
    hint: 'First take value of n using scanf'
  },
  {
    id: 'c_loop_8',
    topicId: 'c_loop',
    question: 'Write a for loop to calculate the sum of first n natural numbers.',
    mathSolution: 'Sum = n(n+1)/2, if n=5 then sum=15',
    codeSolution: 'int n, sum=0;\nprintf("Enter n: ");\nscanf("%d", &n);\nfor(int i=1; i<=n; i++) {\n    sum += i;\n}\nprintf("Sum = %d", sum);',
    hint: 'sum = sum + i'
  },
  {
    id: 'c_loop_9',
    topicId: 'c_loop',
    question: 'Write a for loop to calculate factorial of a number (n!).',
    mathSolution: '5! = 5*4*3*2*1 = 120',
    codeSolution: 'int n, fact=1;\nprintf("Enter n: ");\nscanf("%d", &n);\nfor(int i=1; i<=n; i++) {\n    fact *= i;\n}\nprintf("Factorial = %d", fact);',
    hint: 'fact = fact * i'
  },
  {
    id: 'c_loop_10',
    topicId: 'c_loop',
    question: 'Write a for loop to count the digits of a number.',
    mathSolution: 'If n=12345 then count=5',
    codeSolution: 'int n, count=0;\nprintf("Enter number: ");\nscanf("%d", &n);\nfor(; n!=0; n/=10) {\n    count++;\n}\nprintf("Digits = %d", count);',
    hint: 'n/=10 removes the last digit'
  },

  // ========== WHILE LOOP QUESTIONS (QUESTIONS 11-15) ==========
  {
    id: 'c_loop_11',
    topicId: 'c_loop',
    question: 'Write a while loop to print numbers from 1 to 10.',
    mathSolution: '1,2,3,4,5,6,7,8,9,10',
    codeSolution: 'int i=1;\nwhile(i<=10) {\n    printf("%d ", i);\n    i++;\n}',
    hint: 'Initialize i first, check condition, don\'t forget increment'
  },
  {
    id: 'c_loop_12',
    topicId: 'c_loop',
    question: 'Write a while loop to sum numbers entered by user until user enters 0.',
    mathSolution: 'If user enters 5,3,2,0 then sum=10',
    codeSolution: 'int num, sum=0;\nprintf("Enter numbers (0 to stop): ");\nscanf("%d", &num);\nwhile(num != 0) {\n    sum += num;\n    scanf("%d", &num);\n}\nprintf("Sum = %d", sum);',
    hint: 'Take first number, sum it in loop, then take next number'
  },
  {
    id: 'c_loop_13',
    topicId: 'c_loop',
    question: 'Write a while loop to reverse a number.',
    mathSolution: 'If n=123 then reverse=321',
    codeSolution: 'int n, rev=0;\nprintf("Enter number: ");\nscanf("%d", &n);\nwhile(n!=0) {\n    rev = rev*10 + n%10;\n    n /= 10;\n}\nprintf("Reverse = %d", rev);',
    hint: 'n%10 gives the last digit'
  },
  {
    id: 'c_loop_14',
    topicId: 'c_loop',
    question: 'Write a while loop to check if a number is palindrome.',
    mathSolution: 'If n=121 and reverse is also 121 then palindrome',
    codeSolution: 'int n, temp, rev=0;\nprintf("Enter number: ");\nscanf("%d", &n);\ntemp = n;\nwhile(temp!=0) {\n    rev = rev*10 + temp%10;\n    temp /= 10;\n}\nif(rev==n) printf("Palindrome");\nelse printf("Not Palindrome");',
    hint: 'Store original number in temp'
  },
  {
    id: 'c_loop_15',
    topicId: 'c_loop',
    question: 'Write a while loop to check if a number is Armstrong.',
    mathSolution: '153 = 1^3 + 5^3 + 3^3',
    codeSolution: 'int n, temp, sum=0, digit;\nprintf("Enter number: ");\nscanf("%d", &n);\ntemp = n;\nwhile(temp!=0) {\n    digit = temp%10;\n    sum += digit*digit*digit;\n    temp /= 10;\n}\nif(sum==n) printf("Armstrong");\nelse printf("Not Armstrong");',
    hint: 'Calculate cube of each digit and sum'
  },

  // ========== DO-WHILE LOOP QUESTIONS (QUESTIONS 16-20) ==========
  {
    id: 'c_loop_16',
    topicId: 'c_loop',
    question: 'Write a do-while loop to print numbers from 1 to 10.',
    mathSolution: '1,2,3,4,5,6,7,8,9,10',
    codeSolution: 'int i=1;\ndo {\n    printf("%d ", i);\n    i++;\n} while(i<=10);',
    hint: 'Print first then check condition'
  },
  {
    id: 'c_loop_17',
    topicId: 'c_loop',
    question: 'Write a do-while loop to create a menu-driven program.',
    mathSolution: 'If user enters 1 print "Hello", 2 print "Hi"',
    codeSolution: 'int choice;\ndo {\n    printf("\\n1. Say Hello\\n2. Say Hi\\n3. Exit\\nChoice: ");\n    scanf("%d", &choice);\n    switch(choice) {\n        case 1: printf("Hello"); break;\n        case 2: printf("Hi"); break;\n        case 3: printf("Bye"); break;\n        default: printf("Invalid");\n    }\n} while(choice != 3);',
    hint: 'Loop continues until user selects exit option'
  },
  {
    id: 'c_loop_18',
    topicId: 'c_loop',
    question: 'Write a do-while loop to take positive number input from user.',
    mathSolution: 'Keep taking input until user enters positive number',
    codeSolution: 'int num;\ndo {\n    printf("Enter positive number: ");\n    scanf("%d", &num);\n} while(num <= 0);\nprintf("You entered: %d", num);',
    hint: 'Loop continues while num<=0'
  },
  {
    id: 'c_loop_19',
    topicId: 'c_loop',
    question: 'Write a do-while loop to display even numbers between 1 and 20.',
    mathSolution: '2,4,6,8,10,12,14,16,18,20',
    codeSolution: 'int i=2;\ndo {\n    printf("%d ", i);\n    i+=2;\n} while(i<=20);',
    hint: 'Start from 2 and increment by 2'
  },
  {
    id: 'c_loop_20',
    topicId: 'c_loop',
    question: 'Write a do-while loop to calculate sum of digits of a number.',
    mathSolution: 'If n=123, sum=1+2+3=6',
    codeSolution: 'int n, sum=0, digit;\nprintf("Enter number: ");\nscanf("%d", &n);\ndo {\n    digit = n%10;\n    sum += digit;\n    n /= 10;\n} while(n>0);\nprintf("Sum of digits = %d", sum);',
    hint: 'Extract digits using modulo operator'
  },

  // ========== NESTED LOOPS AND PATTERNS (QUESTIONS 21-40) ==========
  {
    id: 'c_loop_21',
    topicId: 'c_loop',
    question: 'Use nested for loops to print a square pattern of stars (5x5).',
    mathSolution: '*****\\n*****\\n*****\\n*****\\n*****',
    codeSolution: 'for(int i=1; i<=5; i++) {\n    for(int j=1; j<=5; j++) {\n        printf("*");\n    }\n    printf("\\n");\n}',
    hint: 'Outer loop for rows, inner loop for columns'
  },
  {
    id: 'c_loop_22',
    topicId: 'c_loop',
    question: 'Use nested loops to print a right-angle triangle pattern (5 rows).',
    mathSolution: '*\\n**\\n***\\n****\\n*****',
    codeSolution: 'for(int i=1; i<=5; i++) {\n    for(int j=1; j<=i; j++) {\n        printf("*");\n    }\n    printf("\\n");\n}',
    hint: 'Inner loop runs until i'
  },
  {
    id: 'c_loop_23',
    topicId: 'c_loop',
    question: 'Use nested loops to print a pyramid pattern.',
    mathSolution: '    *\\n   ***\\n  *****\\n *******\\n*********',
    codeSolution: 'for(int i=1; i<=5; i++) {\n    for(int j=1; j<=5-i; j++) {\n        printf(" ");\n    }\n    for(int k=1; k<=2*i-1; k++) {\n        printf("*");\n    }\n    printf("\\n");\n}',
    hint: 'Print spaces first, then stars'
  },
  {
    id: 'c_loop_24',
    topicId: 'c_loop',
    question: 'Use nested loops to print number pattern: 1, 12, 123, 1234, 12345',
    mathSolution: '1\\n12\\n123\\n1234\\n12345',
    codeSolution: 'for(int i=1; i<=5; i++) {\n    for(int j=1; j<=i; j++) {\n        printf("%d", j);\n    }\n    printf("\\n");\n}',
    hint: 'Print j in inner loop'
  },
  {
    id: 'c_loop_25',
    topicId: 'c_loop',
    question: 'Use nested loops to print multiplication tables from 1 to 10.',
    mathSolution: '1x1=1, 1x2=2, ..., 10x10=100',
    codeSolution: 'for(int i=1; i<=10; i++) {\n    for(int j=1; j<=10; j++) {\n        printf("%d x %d = %d\\t", i, j, i*j);\n    }\n    printf("\\n");\n}',
    hint: 'Both i and j run from 1 to 10'
  },
  {
    id: 'c_loop_26',
    topicId: 'c_loop',
    question: 'Use nested loops to print Floyd\'s triangle.',
    mathSolution: '1\\n2 3\\n4 5 6\\n7 8 9 10',
    codeSolution: 'int num=1;\nfor(int i=1; i<=4; i++) {\n    for(int j=1; j<=i; j++) {\n        printf("%d ", num++);\n    }\n    printf("\\n");\n}',
    hint: 'Keep a counter that increments each time'
  },
  {
    id: 'c_loop_27',
    topicId: 'c_loop',
    question: 'Use nested loops to print Pascal\'s triangle.',
    mathSolution: '   1\\n  1 1\\n 1 2 1\\n1 3 3 1',
    codeSolution: 'int coef=1;\nfor(int i=0; i<4; i++) {\n    for(int j=0; j<4-i; j++) printf(" ");\n    for(int j=0; j<=i; j++) {\n        if(j==0 || i==0) coef=1;\n        else coef = coef*(i-j+1)/j;\n        printf("%d ", coef);\n    }\n    printf("\\n");\n}',
    hint: 'Use combination formula'
  },
  {
    id: 'c_loop_28',
    topicId: 'c_loop',
    question: 'Use nested loops to print a hollow square pattern.',
    mathSolution: '*****\\n*   *\\n*   *\\n*   *\\n*****',
    codeSolution: 'for(int i=1; i<=5; i++) {\n    for(int j=1; j<=5; j++) {\n        if(i==1 || i==5 || j==1 || j==5)\n            printf("*");\n        else\n            printf(" ");\n    }\n    printf("\\n");\n}',
    hint: 'Print stars only on borders'
  },
  {
    id: 'c_loop_29',
    topicId: 'c_loop',
    question: 'Use nested loops to print an inverted pyramid pattern.',
    mathSolution: '*********\\n *******\\n  *****\\n   ***\\n    *',
    codeSolution: 'for(int i=5; i>=1; i--) {\n    for(int j=1; j<=5-i; j++) {\n        printf(" ");\n    }\n    for(int k=1; k<=2*i-1; k++) {\n        printf("*");\n    }\n    printf("\\n");\n}',
    hint: 'Decrease stars and increase spaces'
  },
  {
    id: 'c_loop_30',
    topicId: 'c_loop',
    question: 'Use nested loops to print a diamond pattern.',
    mathSolution: '   *\\n  ***\\n *****\\n*******\\n *****\\n  ***\\n   *',
    codeSolution: '// Upper half\nfor(int i=1; i<=4; i++) {\n    for(int j=1; j<=4-i; j++) printf(" ");\n    for(int k=1; k<=2*i-1; k++) printf("*");\n    printf("\\n");\n}\n// Lower half\nfor(int i=3; i>=1; i--) {\n    for(int j=1; j<=4-i; j++) printf(" ");\n    for(int k=1; k<=2*i-1; k++) printf("*");\n    printf("\\n");\n}',
    hint: 'Create upper and lower halves separately'
  },

  // ========== ARRAY AND LOOP QUESTIONS (QUESTIONS 31-44) ==========
  {
    id: 'c_loop_31',
    topicId: 'c_loop',
    question: 'Write a loop to calculate the sum of array elements.',
    mathSolution: 'Array {1,2,3,4,5} sum = 15',
    codeSolution: 'int arr[] = {1,2,3,4,5};\nint sum=0;\nfor(int i=0; i<5; i++) {\n    sum += arr[i];\n}\nprintf("Sum = %d", sum);',
    hint: 'Array index starts from 0'
  },
  {
    id: 'c_loop_32',
    topicId: 'c_loop',
    question: 'Write a loop to find the largest element in an array.',
    mathSolution: 'Array {10,45,2,78,34} largest is 78',
    codeSolution: 'int arr[] = {10,45,2,78,34};\nint max = arr[0];\nfor(int i=1; i<5; i++) {\n    if(arr[i] > max) {\n        max = arr[i];\n    }\n}\nprintf("Maximum = %d", max);',
    hint: 'Assume first element as max, then compare'
  },
  {
    id: 'c_loop_33',
    topicId: 'c_loop',
    question: 'Write a loop to find the smallest element in an array.',
    mathSolution: 'Array {10,45,2,78,34} smallest is 2',
    codeSolution: 'int arr[] = {10,45,2,78,34};\nint min = arr[0];\nfor(int i=1; i<5; i++) {\n    if(arr[i] < min) {\n        min = arr[i];\n    }\n}\nprintf("Minimum = %d", min);',
    hint: 'Compare each element with current min'
  },
  {
    id: 'c_loop_34',
    topicId: 'c_loop',
    question: 'Write a loop to print an array in reverse order.',
    mathSolution: 'Array {1,2,3,4,5} reverse: 5,4,3,2,1',
    codeSolution: 'int arr[] = {1,2,3,4,5};\nfor(int i=4; i>=0; i--) {\n    printf("%d ", arr[i]);\n}',
    hint: 'Start loop from last index'
  },
  {
    id: 'c_loop_35',
    topicId: 'c_loop',
    question: 'Write a loop to count even and odd numbers in an array.',
    mathSolution: 'Array {1,2,3,4,5,6} has 3 even, 3 odd',
    codeSolution: 'int arr[] = {1,2,3,4,5,6};\nint even=0, odd=0;\nfor(int i=0; i<6; i++) {\n    if(arr[i]%2 == 0)\n        even++;\n    else\n        odd++;\n}\nprintf("Even: %d, Odd: %d", even, odd);',
    hint: 'Use modulo operator to check even/odd'
  },
  {
    id: 'c_loop_36',
    topicId: 'c_loop',
    question: 'Write a loop to search for an element in an array (linear search).',
    mathSolution: 'Search for 45 in {10,45,2,78,34}',
    codeSolution: 'int arr[] = {10,45,2,78,34};\nint search=45, found=0;\nfor(int i=0; i<5; i++) {\n    if(arr[i] == search) {\n        printf("Found at index %d", i);\n        found=1;\n        break;\n    }\n}\nif(!found) printf("Not found");',
    hint: 'Compare each element with search value'
  },
  {
    id: 'c_loop_37',
    topicId: 'c_loop',
    question: 'Write nested loops to implement bubble sort.',
    mathSolution: 'Sort array {64,34,25,12,22,11,90}',
    codeSolution: 'int arr[] = {64,34,25,12,22,11,90};\nint n=7, temp;\nfor(int i=0; i<n-1; i++) {\n    for(int j=0; j<n-i-1; j++) {\n        if(arr[j] > arr[j+1]) {\n            temp = arr[j];\n            arr[j] = arr[j+1];\n            arr[j+1] = temp;\n        }\n    }\n}',
    hint: 'Compare adjacent elements and swap if needed'
  },
  {
    id: 'c_loop_38',
    topicId: 'c_loop',
    question: 'Write a loop to find the second largest element in an array.',
    mathSolution: 'Array {10,45,2,78,34} second largest is 45',
    codeSolution: 'int arr[] = {10,45,2,78,34};\nint largest=arr[0], second=arr[0];\nfor(int i=0; i<5; i++) {\n    if(arr[i] > largest) {\n        second = largest;\n        largest = arr[i];\n    }\n    else if(arr[i] > second && arr[i] != largest)\n        second = arr[i];\n}\nprintf("Second largest = %d", second);',
    hint: 'Keep track of both largest and second largest'
  },
  {
    id: 'c_loop_39',
    topicId: 'c_loop',
    question: 'Write a loop to remove duplicates from a sorted array.',
    mathSolution: 'Array {1,1,2,2,3,4,4} becomes {1,2,3,4}',
    codeSolution: 'int arr[] = {1,1,2,2,3,4,4};\nint n=7, j=0;\nint temp[n];\nfor(int i=0; i<n-1; i++) {\n    if(arr[i] != arr[i+1]) {\n        temp[j++] = arr[i];\n    }\n}\ntemp[j++] = arr[n-1];',
    hint: 'Compare current element with next element'
  },
  {
    id: 'c_loop_40',
    topicId: 'c_loop',
    question: 'Write a loop to left rotate an array by one position.',
    mathSolution: '{1,2,3,4,5} left rotate -> {2,3,4,5,1}',
    codeSolution: 'int arr[] = {1,2,3,4,5};\nint n=5, first = arr[0];\nfor(int i=0; i<n-1; i++) {\n    arr[i] = arr[i+1];\n}\narr[n-1] = first;',
    hint: 'Store first element, shift left, place first at end'
  },
  {
    id: 'c_loop_41',
    topicId: 'c_loop',
    question: 'Write a loop to right rotate an array by one position.',
    mathSolution: '{1,2,3,4,5} right rotate -> {5,1,2,3,4}',
    codeSolution: 'int arr[] = {1,2,3,4,5};\nint n=5, last = arr[n-1];\nfor(int i=n-1; i>0; i--) {\n    arr[i] = arr[i-1];\n}\narr[0] = last;',
    hint: 'Store last element, shift right, place last at beginning'
  },
  {
    id: 'c_loop_42',
    topicId: 'c_loop',
    question: 'Write nested loops to add two matrices.',
    mathSolution: '[[1,2],[3,4]] + [[5,6],[7,8]] = [[6,8],[10,12]]',
    codeSolution: 'int a[2][2] = {{1,2},{3,4}};\nint b[2][2] = {{5,6},{7,8}};\nint c[2][2];\nfor(int i=0; i<2; i++) {\n    for(int j=0; j<2; j++) {\n        c[i][j] = a[i][j] + b[i][j];\n    }\n}',
    hint: 'Add corresponding elements'
  },
  {
    id: 'c_loop_43',
    topicId: 'c_loop',
    question: 'Write nested loops to multiply two matrices.',
    mathSolution: '2x2 matrix multiplication',
    codeSolution: 'int a[2][2] = {{1,2},{3,4}};\nint b[2][2] = {{5,6},{7,8}};\nint c[2][2] = {0};\nfor(int i=0; i<2; i++) {\n    for(int j=0; j<2; j++) {\n        for(int k=0; k<2; k++) {\n            c[i][j] += a[i][k] * b[k][j];\n        }\n    }\n}',
    hint: 'Use triple nested loops'
  },
  {
    id: 'c_loop_44',
    topicId: 'c_loop',
    question: 'Write a loop to find the transpose of a matrix.',
    mathSolution: '[[1,2],[3,4]] transpose -> [[1,3],[2,4]]',
    codeSolution: 'int a[2][2] = {{1,2},{3,4}};\nint transpose[2][2];\nfor(int i=0; i<2; i++) {\n    for(int j=0; j<2; j++) {\n        transpose[j][i] = a[i][j];\n    }\n}',
    hint: 'Swap rows and columns'
  },

  // ========== STRING AND LOOP QUESTIONS (QUESTIONS 45-50) ==========
  {
    id: 'c_loop_45',
    topicId: 'c_loop',
    question: 'Write a loop to find the length of a string (without strlen).',
    mathSolution: '"Hello" length is 5',
    codeSolution: 'char str[] = "Hello";\nint length=0;\nfor(int i=0; str[i]!=\'\\0\'; i++) {\n    length++;\n}\nprintf("Length = %d", length);',
    hint: 'Count until null character'
  },
  {
    id: 'c_loop_46',
    topicId: 'c_loop',
    question: 'Write a loop to reverse a string.',
    mathSolution: '"Hello" reversed is "olleH"',
    codeSolution: 'char str[] = "Hello";\nint n = strlen(str);\nfor(int i=0; i<n/2; i++) {\n    char temp = str[i];\n    str[i] = str[n-1-i];\n    str[n-1-i] = temp;\n}',
    hint: 'Swap first and last characters'
  },
  {
    id: 'c_loop_47',
    topicId: 'c_loop',
    question: 'Write a loop to count vowels in a string.',
    mathSolution: '"Hello" has 2 vowels (e,o)',
    codeSolution: 'char str[] = "Hello";\nint count=0;\nfor(int i=0; str[i]!=\'\\0\'; i++) {\n    char ch = tolower(str[i]);\n    if(ch==\'a\' || ch==\'e\' || ch==\'i\' || ch==\'o\' || ch==\'u\')\n        count++;\n}\nprintf("Vowels = %d", count);',
    hint: 'Use tolower() or check both uppercase and lowercase'
  },
  {
    id: 'c_loop_48',
    topicId: 'c_loop',
    question: 'Write a loop to count consonants in a string.',
    mathSolution: '"Hello" has 3 consonants (H,l,l)',
    codeSolution: 'char str[] = "Hello";\nint count=0;\nfor(int i=0; str[i]!=\'\\0\'; i++) {\n    char ch = tolower(str[i]);\n    if(ch >=\'a\' && ch <=\'z\' && !(ch==\'a\' || ch==\'e\' || ch==\'i\' || ch==\'o\' || ch==\'u\'))\n        count++;\n}\nprintf("Consonants = %d", count);',
    hint: 'Check if character is alphabet and not vowel'
  },
  {
    id: 'c_loop_49',
    topicId: 'c_loop',
    question: 'Write a loop to check if a string is palindrome.',
    mathSolution: '"madam" is palindrome, "hello" is not',
    codeSolution: 'char str[] = "madam";\nint n = strlen(str);\nint flag=1;\nfor(int i=0; i<n/2; i++) {\n    if(str[i] != str[n-1-i]) {\n        flag=0;\n        break;\n    }\n}\nif(flag) printf("Palindrome");\nelse printf("Not palindrome");',
    hint: 'Compare characters from start and end'
  },
  {
    id: 'c_loop_50',
    topicId: 'c_loop',
    question: 'Write a loop to convert a string to uppercase.',
    mathSolution: '"Hello" becomes "HELLO"',
    codeSolution: 'char str[] = "Hello";\nfor(int i=0; str[i]!=\'\\0\'; i++) {\n    if(str[i] >=\'a\' && str[i] <=\'z\')\n        str[i] = str[i] - 32;\n}\nprintf("%s", str);',
    hint: 'ASCII difference between lowercase and uppercase is 32'
  },

  // ========== NUMBER THEORY AND MATHEMATICAL PROBLEMS (QUESTIONS 51-65) ==========
  {
    id: 'c_loop_51',
    topicId: 'c_loop',
    question: 'Write a loop to generate Fibonacci series (first 10 terms).',
    mathSolution: '0,1,1,2,3,5,8,13,21,34',
    codeSolution: 'int a=0, b=1, c;\nprintf("%d %d ", a, b);\nfor(int i=3; i<=10; i++) {\n    c = a+b;\n    printf("%d ", c);\n    a = b;\n    b = c;\n}',
    hint: 'Update a and b each time'
  },
  {
    id: 'c_loop_52',
    topicId: 'c_loop',
    question: 'Write a loop to check if a number is prime.',
    mathSolution: '7 is prime (only divisible by 1 and itself)',
    codeSolution: 'int n, flag=1;\nprintf("Enter number: ");\nscanf("%d", &n);\nfor(int i=2; i<=n/2; i++) {\n    if(n%i == 0) {\n        flag=0;\n        break;\n    }\n}\nif(flag==1 && n>1) printf("Prime");\nelse printf("Not prime");',
    hint: 'Check divisibility up to n/2'
  },
  {
    id: 'c_loop_53',
    topicId: 'c_loop',
    question: 'Write a loop to print all prime numbers between 1 and 100.',
    mathSolution: '2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97',
    codeSolution: 'for(int i=2; i<=100; i++) {\n    int flag=1;\n    for(int j=2; j<=i/2; j++) {\n        if(i%j == 0) {\n            flag=0;\n            break;\n        }\n    }\n    if(flag==1) printf("%d ", i);\n}',
    hint: 'Use nested loops - outer for numbers, inner for prime check'
  },
  {
    id: 'c_loop_54',
    topicId: 'c_loop',
    question: 'Write a loop to find GCD (HCF) of two numbers.',
    mathSolution: 'GCD of 12 and 18 is 6',
    codeSolution: 'int a, b, gcd;\nprintf("Enter two numbers: ");\nscanf("%d %d", &a, &b);\nfor(int i=1; i<=a && i<=b; i++) {\n    if(a%i==0 && b%i==0) {\n        gcd = i;\n    }\n}\nprintf("GCD = %d", gcd);',
    hint: 'Find largest common divisor'
  },
  {
    id: 'c_loop_55',
    topicId: 'c_loop',
    question: 'Write a loop to find LCM of two numbers.',
    mathSolution: 'LCM of 12 and 18 is 36',
    codeSolution: 'int a, b, lcm;\nprintf("Enter two numbers: ");\nscanf("%d %d", &a, &b);\nlcm = (a>b) ? a : b;\nwhile(1) {\n    if(lcm%a==0 && lcm%b==0) {\n        break;\n    }\n    lcm++;\n}\nprintf("LCM = %d", lcm);',
    hint: 'Start from larger number and keep increasing'
  },
  {
    id: 'c_loop_56',
    topicId: 'c_loop',
    question: 'Write a loop to implement power function (x^n).',
    mathSolution: '2^5 = 32',
    codeSolution: 'int x=2, n=5, result=1;\nfor(int i=1; i<=n; i++) {\n    result *= x;\n}\nprintf("%d^%d = %d", x, n, result);',
    hint: 'Multiply x, n times'
  },
  {
    id: 'c_loop_57',
    topicId: 'c_loop',
    question: 'Write a loop to check if a number is perfect number.',
    mathSolution: '6 is perfect (1+2+3=6)',
    codeSolution: 'int n, sum=0;\nprintf("Enter number: ");\nscanf("%d", &n);\nfor(int i=1; i<=n/2; i++) {\n    if(n%i == 0) {\n        sum += i;\n    }\n}\nif(sum == n) printf("Perfect number");\nelse printf("Not perfect");',
    hint: 'Sum of factors (excluding itself) equals the number'
  },
  {
    id: 'c_loop_58',
    topicId: 'c_loop',
    question: 'Write a loop to check if a number is strong number.',
    mathSolution: '145 is strong (1!+4!+5!=145)',
    codeSolution: 'int n, temp, sum=0, digit, fact;\nprintf("Enter number: ");\nscanf("%d", &n);\ntemp = n;\nwhile(temp!=0) {\n    digit = temp%10;\n    fact = 1;\n    for(int i=1; i<=digit; i++) {\n        fact *= i;\n    }\n    sum += fact;\n    temp /= 10;\n}\nif(sum==n) printf("Strong number");\nelse printf("Not strong");',
    hint: 'Calculate factorial of each digit and sum'
  },
  {
    id: 'c_loop_59',
    topicId: 'c_loop',
    question: 'Write a loop to check if a number is automorphic.',
    mathSolution: '25 is automorphic (25^2=625 ends with 25)',
    codeSolution: 'int n, square, temp, flag=1;\nprintf("Enter number: ");\nscanf("%d", &n);\nsquare = n*n;\ntemp = n;\nwhile(temp>0) {\n    if(temp%10 != square%10) {\n        flag=0;\n        break;\n    }\n    temp/=10;\n    square/=10;\n}\nif(flag) printf("Automorphic");\nelse printf("Not automorphic");',
    hint: 'Compare last digits of number and its square'
  },
  {
    id: 'c_loop_60',
    topicId: 'c_loop',
    question: 'Write a loop to convert binary to decimal.',
    mathSolution: 'Binary 1010 = Decimal 10',
    codeSolution: 'int binary = 1010, decimal=0, base=1;\nwhile(binary > 0) {\n    int lastDigit = binary % 10;\n    decimal += lastDigit * base;\n    base *= 2;\n    binary /= 10;\n}\nprintf("Decimal = %d", decimal);',
    hint: 'Multiply each digit by power of 2'
  },
  {
    id: 'c_loop_61',
    topicId: 'c_loop',
    question: 'Write a loop to convert decimal to binary.',
    mathSolution: 'Decimal 10 = Binary 1010',
    codeSolution: 'int decimal=10, binary=0, base=1;\nwhile(decimal > 0) {\n    int remainder = decimal % 2;\n    binary += remainder * base;\n    base *= 10;\n    decimal /= 2;\n}\nprintf("Binary = %d", binary);',
    hint: 'Keep dividing by 2 and collect remainders'
  },
  {
    id: 'c_loop_62',
    topicId: 'c_loop',
    question: 'Write a loop to find all factors of a number.',
    mathSolution: 'Factors of 12: 1,2,3,4,6,12',
    codeSolution: 'int n;\nprintf("Enter number: ");\nscanf("%d", &n);\nprintf("Factors: ");\nfor(int i=1; i<=n; i++) {\n    if(n%i == 0) {\n        printf("%d ", i);\n    }\n}',
    hint: 'Check numbers that divide n completely'
  },
  {
    id: 'c_loop_63',
    topicId: 'c_loop',
    question: 'Write a loop to check if a number is Armstrong for n digits.',
    mathSolution: '1634 = 1^4 + 6^4 + 3^4 + 4^4',
    codeSolution: 'int n, temp, sum=0, digits=0, rem;\nprintf("Enter number: ");\nscanf("%d", &n);\ntemp = n;\nwhile(temp!=0) {\n    digits++;\n    temp/=10;\n}\ntemp = n;\nwhile(temp!=0) {\n    rem = temp%10;\n    int power=1;\n    for(int i=1; i<=digits; i++)\n        power *= rem;\n    sum += power;\n    temp/=10;\n}\nif(sum==n) printf("Armstrong");\nelse printf("Not Armstrong");',
    hint: 'First count digits, then calculate sum of powers'
  },
  {
    id: 'c_loop_64',
    topicId: 'c_loop',
    question: 'Write a loop to print ASCII values from 65 to 90.',
    mathSolution: '65:A, 66:B, ..., 90:Z',
    codeSolution: 'for(int i=65; i<=90; i++) {\n    printf("%d:%c ", i, i);\n}',
    hint: 'Use %c format specifier to print character'
  },
  {
    id: 'c_loop_65',
    topicId: 'c_loop',
    question: 'Write a loop to find the sum of the series: 1 + 1/2 + 1/3 + ... + 1/n',
    mathSolution: 'For n=5, sum = 1 + 0.5 + 0.333 + 0.25 + 0.2 = 2.28333',
    codeSolution: 'int n;\nfloat sum=0.0;\nprintf("Enter n: ");\nscanf("%d", &n);\nfor(float i=1; i<=n; i++) {\n    sum += 1/i;\n}\nprintf("Sum = %f", sum);',
    hint: 'Use float for division to get decimal values'
  },

  // ========== PATTERN PRINTING CONTINUED (QUESTIONS 66-70) ==========
  {
    id: 'c_loop_66',
    topicId: 'c_loop',
    question: 'Use nested loops to print pattern: A, BB, CCC, DDDD, EEEEE',
    mathSolution: 'A\\nBB\\nCCC\\nDDDD\\nEEEEE',
    codeSolution: 'for(char ch=\'A\'; ch<=\'E\'; ch++) {\n    for(int j=1; j<=ch-\'A\'+1; j++) {\n        printf("%c", ch);\n    }\n    printf("\\n");\n}',
    hint: 'Print character multiple times based on its position'
  },
  {
    id: 'c_loop_67',
    topicId: 'c_loop',
    question: 'Use nested loops to print pattern: 1, 2 3, 4 5 6, 7 8 9 10',
    mathSolution: '1\\n2 3\\n4 5 6\\n7 8 9 10',
    codeSolution: 'int count=1;\nfor(int i=1; i<=4; i++) {\n    for(int j=1; j<=i; j++) {\n        printf("%d ", count++);\n    }\n    printf("\\n");\n}',
    hint: 'Use a counter variable that increments'
  },
  {
    id: 'c_loop_68',
    topicId: 'c_loop',
    question: 'Use nested loops to print a hollow pyramid pattern.',
    mathSolution: '    *\\n   * *\\n  *   *\\n *     *\\n*********',
    codeSolution: 'for(int i=1; i<=5; i++) {\n    for(int j=1; j<=5-i; j++) printf(" ");\n    for(int k=1; k<=2*i-1; k++) {\n        if(k==1 || k==2*i-1 || i==5)\n            printf("*");\n        else\n            printf(" ");\n    }\n    printf("\\n");\n}',
    hint: 'Print stars only at borders'
  },
  {
    id: 'c_loop_69',
    topicId: 'c_loop',
    question: 'Use nested loops to print a number pyramid: 1, 121, 12321, 1234321',
    mathSolution: '   1\\n  121\\n 12321\\n1234321',
    codeSolution: 'for(int i=1; i<=4; i++) {\n    for(int j=1; j<=4-i; j++) printf(" ");\n    for(int j=1; j<=i; j++) printf("%d", j);\n    for(int j=i-1; j>=1; j--) printf("%d", j);\n    printf("\\n");\n}',
    hint: 'Print increasing then decreasing numbers'
  },
  {
    id: 'c_loop_70',
    topicId: 'c_loop',
    question: 'Use nested loops to print a butterfly pattern.',
    mathSolution: '*      *\\n**    **\\n***  ***\\n********\\n***  ***\\n**    **\\n*      *',
    codeSolution: '// Upper half\nfor(int i=1; i<=4; i++) {\n    for(int j=1; j<=i; j++) printf("*");\n    for(int j=1; j<=2*(4-i); j++) printf(" ");\n    for(int j=1; j<=i; j++) printf("*");\n    printf("\\n");\n}\n// Lower half\nfor(int i=3; i>=1; i--) {\n    for(int j=1; j<=i; j++) printf("*");\n    for(int j=1; j<=2*(4-i); j++) printf(" ");\n    for(int j=1; j<=i; j++) printf("*");\n    printf("\\n");\n}',
    hint: 'Create two symmetrical halves'
  },

  // ========== ADVANCED PROBLEMS (QUESTIONS 71-80) ==========
  {
    id: 'c_loop_71',
    topicId: 'c_loop',
    question: 'Write a loop to implement binary search on a sorted array.',
    mathSolution: 'Search for 34 in sorted array {11,22,34,45,56,67,78}',
    codeSolution: 'int arr[] = {11,22,34,45,56,67,78};\nint n=7, target=34, low=0, high=n-1, mid, found=0;\nwhile(low <= high) {\n    mid = (low+high)/2;\n    if(arr[mid] == target) {\n        found=1;\n        break;\n    }\n    else if(arr[mid] < target)\n        low = mid+1;\n    else\n        high = mid-1;\n}\nif(found) printf("Found at %d", mid);\nelse printf("Not found");',
    hint: 'Array must be sorted'
  },
  {
    id: 'c_loop_72',
    topicId: 'c_loop',
    question: 'Write a loop to implement selection sort.',
    mathSolution: 'Sort array {64,25,12,22,11}',
    codeSolution: 'int arr[] = {64,25,12,22,11};\nint n=5, min_idx, temp;\nfor(int i=0; i<n-1; i++) {\n    min_idx = i;\n    for(int j=i+1; j<n; j++) {\n        if(arr[j] < arr[min_idx])\n            min_idx = j;\n    }\n    temp = arr[min_idx];\n    arr[min_idx] = arr[i];\n    arr[i] = temp;\n}',
    hint: 'Find minimum element and swap'
  },
  {
    id: 'c_loop_73',
    topicId: 'c_loop',
    question: 'Write a loop to implement insertion sort.',
    mathSolution: 'Sort array {12,11,13,5,6}',
    codeSolution: 'int arr[] = {12,11,13,5,6};\nint n=5, key, j;\nfor(int i=1; i<n; i++) {\n    key = arr[i];\n    j = i-1;\n    while(j>=0 && arr[j] > key) {\n        arr[j+1] = arr[j];\n        j--;\n    }\n    arr[j+1] = key;\n}',
    hint: 'Insert each element in correct position'
  },
  {
    id: 'c_loop_74',
    topicId: 'c_loop',
    question: 'Write nested loops to find the sum of upper triangular matrix.',
    mathSolution: 'Matrix [[1,2,3],[4,5,6],[7,8,9]] upper sum = 1+2+3+5+6+9 = 26',
    codeSolution: 'int a[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\nint sum=0;\nfor(int i=0; i<3; i++) {\n    for(int j=i; j<3; j++) {\n        sum += a[i][j];\n    }\n}\nprintf("Sum = %d", sum);',
    hint: 'Include elements where column >= row'
  },
  {
    id: 'c_loop_75',
    topicId: 'c_loop',
    question: 'Write nested loops to find the sum of lower triangular matrix.',
    mathSolution: 'Matrix [[1,2,3],[4,5,6],[7,8,9]] lower sum = 1+4+5+7+8+9 = 34',
    codeSolution: 'int a[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\nint sum=0;\nfor(int i=0; i<3; i++) {\n    for(int j=0; j<=i; j++) {\n        sum += a[i][j];\n    }\n}\nprintf("Sum = %d", sum);',
    hint: 'Include elements where column <= row'
  },
  {
    id: 'c_loop_76',
    topicId: 'c_loop',
    question: 'Write a loop to find the sum of diagonal elements of a matrix.',
    mathSolution: 'Matrix [[1,2,3],[4,5,6],[7,8,9]] diagonal sum = 1+5+9 = 15',
    codeSolution: 'int a[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\nint sum=0;\nfor(int i=0; i<3; i++) {\n    sum += a[i][i];\n}\nprintf("Sum = %d", sum);',
    hint: 'Elements where row index equals column index'
  },
  {
    id: 'c_loop_77',
    topicId: 'c_loop',
    question: 'Write a loop to check if a matrix is symmetric.',
    mathSolution: 'Matrix [[1,2],[2,1]] is symmetric',
    codeSolution: 'int a[2][2] = {{1,2},{2,1}};\nint flag=1;\nfor(int i=0; i<2; i++) {\n    for(int j=0; j<2; j++) {\n        if(a[i][j] != a[j][i]) {\n            flag=0;\n            break;\n        }\n    }\n}\nif(flag) printf("Symmetric");\nelse printf("Not symmetric");',
    hint: 'Matrix should equal its transpose'
  },
  {
    id: 'c_loop_78',
    topicId: 'c_loop',
    question: 'Write a loop to find the frequency of each element in an array.',
    mathSolution: 'Array {1,2,2,3,3,3} frequencies: 1:1, 2:2, 3:3',
    codeSolution: 'int arr[] = {1,2,2,3,3,3};\nint n=6, visited[n];\nfor(int i=0; i<n; i++) visited[i]=0;\nfor(int i=0; i<n; i++) {\n    if(visited[i]==1) continue;\n    int count=1;\n    for(int j=i+1; j<n; j++) {\n        if(arr[i]==arr[j]) {\n            count++;\n            visited[j]=1;\n        }\n    }\n    printf("%d: %d\\n", arr[i], count);\n}',
    hint: 'Use a visited array to avoid counting duplicates'
  },
  {
    id: 'c_loop_79',
    topicId: 'c_loop',
    question: 'Write a loop to merge two sorted arrays.',
    mathSolution: 'Merge [1,3,5] and [2,4,6] to [1,2,3,4,5,6]',
    codeSolution: 'int a[] = {1,3,5}, b[] = {2,4,6};\nint n1=3, n2=3, n3=n1+n2;\nint c[n3];\nint i=0, j=0, k=0;\nwhile(i<n1 && j<n2) {\n    if(a[i] < b[j])\n        c[k++] = a[i++];\n    else\n        c[k++] = b[j++];\n}\nwhile(i<n1) c[k++] = a[i++];\nwhile(j<n2) c[k++] = b[j++];',
    hint: 'Compare elements from both arrays'
  },
  {
    id: 'c_loop_80',
    topicId: 'c_loop',
    question: 'Write a loop to find the missing number in an array of 1 to n.',
    mathSolution: 'Array [1,2,4,5,6] missing number is 3',
    codeSolution: 'int arr[] = {1,2,4,5,6};\nint n=6, total=0, sum=0;\ntotal = n*(n+1)/2;\nfor(int i=0; i<5; i++) {\n    sum += arr[i];\n}\nprintf("Missing number = %d", total-sum);',
    hint: 'Sum of n numbers minus sum of array elements'
  },

  // ========== MORE ADVANCED PROBLEMS (QUESTIONS 81-90) ==========
  {
    id: 'c_loop_81',
    topicId: 'c_loop',
    question: 'Write a loop to find the first non-repeating element in an array.',
    mathSolution: 'Array [4,5,1,2,0,4,5] first non-repeating is 1',
    codeSolution: 'int arr[] = {4,5,1,2,0,4,5};\nint n=7;\nfor(int i=0; i<n; i++) {\n    int j;\n    for(j=0; j<n; j++) {\n        if(i!=j && arr[i]==arr[j])\n            break;\n    }\n    if(j==n) {\n        printf("First non-repeating: %d", arr[i]);\n        break;\n    }\n}',
    hint: 'Check each element against all others'
  },
  {
    id: 'c_loop_82',
    topicId: 'c_loop',
    question: 'Write a loop to find all pairs in array with given sum.',
    mathSolution: 'Array [1,5,7,-1,5] sum=6 pairs: (1,5), (7,-1)',
    codeSolution: 'int arr[] = {1,5,7,-1,5};\nint n=5, target=6;\nfor(int i=0; i<n; i++) {\n    for(int j=i+1; j<n; j++) {\n        if(arr[i]+arr[j] == target)\n            printf("(%d,%d) ", arr[i], arr[j]);\n    }\n}',
    hint: 'Use nested loops to check all pairs'
  },
  {
    id: 'c_loop_83',
    topicId: 'c_loop',
    question: 'Write a loop to find the maximum subarray sum (Kadane\'s algorithm).',
    mathSolution: 'Array [-2,1,-3,4,-1,2,1,-5,4] max sum = 6 (4,-1,2,1)',
    codeSolution: 'int arr[] = {-2,1,-3,4,-1,2,1,-5,4};\nint n=9, max_current=arr[0], max_global=arr[0];\nfor(int i=1; i<n; i++) {\n    max_current = (arr[i] > max_current+arr[i]) ? arr[i] : max_current+arr[i];\n    if(max_current > max_global)\n        max_global = max_current;\n}\nprintf("Maximum subarray sum = %d", max_global);',
    hint: 'Keep track of current and global maximum'
  },
  {
    id: 'c_loop_84',
    topicId: 'c_loop',
    question: 'Write a loop to move all zeros to the end of array.',
    mathSolution: '[0,1,0,3,12] -> [1,3,12,0,0]',
    codeSolution: 'int arr[] = {0,1,0,3,12};\nint n=5, count=0;\nfor(int i=0; i<n; i++) {\n    if(arr[i] != 0)\n        arr[count++] = arr[i];\n}\nwhile(count < n)\n    arr[count++] = 0;',
    hint: 'Move non-zero elements forward, then fill zeros'
  },
  {
    id: 'c_loop_85',
    topicId: 'c_loop',
    question: 'Write a loop to find the leader elements in an array.',
    mathSolution: 'Array [16,17,4,3,5,2] leaders: 17,5,2',
    codeSolution: 'int arr[] = {16,17,4,3,5,2};\nint n=6, max_from_right = arr[n-1];\nprintf("%d ", max_from_right);\nfor(int i=n-2; i>=0; i--) {\n    if(arr[i] > max_from_right) {\n        max_from_right = arr[i];\n        printf("%d ", arr[i]);\n    }\n}',
    hint: 'Leaders are greater than all elements to their right'
  },
  {
    id: 'c_loop_86',
    topicId: 'c_loop',
    question: 'Write a loop to find the maximum product subarray.',
    mathSolution: 'Array [6,-3,-10,0,2] max product = 180 (6,-3,-10)',
    codeSolution: 'int arr[] = {6,-3,-10,0,2};\nint n=5, max_prod=arr[0], min_prod=arr[0], result=arr[0];\nfor(int i=1; i<n; i++) {\n    if(arr[i] < 0) {\n        int temp = max_prod;\n        max_prod = min_prod;\n        min_prod = temp;\n    }\n    max_prod = (arr[i] > max_prod*arr[i]) ? arr[i] : max_prod*arr[i];\n    min_prod = (arr[i] < min_prod*arr[i]) ? arr[i] : min_prod*arr[i];\n    result = (result > max_prod) ? result : max_prod;\n}\nprintf("Max product = %d", result);',
    hint: 'Keep track of both max and min products'
  },
  {
    id: 'c_loop_87',
    topicId: 'c_loop',
    question: 'Write a loop to find the longest consecutive sequence in an array.',
    mathSolution: 'Array [100,4,200,1,3,2] longest: 1,2,3,4',
    codeSolution: 'int arr[] = {100,4,200,1,3,2};\nint n=6, longest=1, current=1;\n// First sort the array\nfor(int i=0; i<n-1; i++) {\n    for(int j=0; j<n-i-1; j++) {\n        if(arr[j] > arr[j+1]) {\n            int temp = arr[j];\n            arr[j] = arr[j+1];\n            arr[j+1] = temp;\n        }\n    }\n}\n// Find longest consecutive\nfor(int i=1; i<n; i++) {\n    if(arr[i] == arr[i-1]+1)\n        current++;\n    else if(arr[i] != arr[i-1])\n        current = 1;\n    if(current > longest)\n        longest = current;\n}\nprintf("Longest consecutive = %d", longest);',
    hint: 'Sort first, then find consecutive elements'
  },
  {
    id: 'c_loop_88',
    topicId: 'c_loop',
    question: 'Write a loop to find the equilibrium index in an array.',
    mathSolution: 'Array [-7,1,5,2,-4,3,0] equilibrium index: 3 (value 2)',
    codeSolution: 'int arr[] = {-7,1,5,2,-4,3,0};\nint n=7, total=0, left_sum=0;\nfor(int i=0; i<n; i++)\n    total += arr[i];\nfor(int i=0; i<n; i++) {\n    total -= arr[i];\n    if(left_sum == total)\n        printf("Equilibrium index: %d", i);\n    left_sum += arr[i];\n}',
    hint: 'Sum of left elements equals sum of right elements'
  },
  {
    id: 'c_loop_89',
    topicId: 'c_loop',
    question: 'Write nested loops to print a spiral pattern of numbers.',
    mathSolution: '1 2 3\\n8 9 4\\n7 6 5',
    codeSolution: 'int n=3, a[10][10], val=1;\nint top=0, bottom=n-1, left=0, right=n-1;\nwhile(top<=bottom && left<=right) {\n    for(int i=left; i<=right; i++) a[top][i] = val++;\n    top++;\n    for(int i=top; i<=bottom; i++) a[i][right] = val++;\n    right--;\n    if(top<=bottom) {\n        for(int i=right; i>=left; i--) a[bottom][i] = val++;\n        bottom--;\n    }\n    if(left<=right) {\n        for(int i=bottom; i>=top; i--) a[i][left] = val++;\n        left++;\n    }\n}\n// Print matrix\nfor(int i=0; i<n; i++) {\n    for(int j=0; j<n; j++)\n        printf("%d ", a[i][j]);\n    printf("\\n");\n}',
    hint: 'Maintain boundaries: top, bottom, left, right'
  },
  {
    id: 'c_loop_90',
    topicId: 'c_loop',
    question: 'Write nested loops to print a zigzag pattern in a matrix.',
    mathSolution: '1 2 3\\n6 5 4\\n7 8 9',
    codeSolution: 'int a[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\nfor(int i=0; i<3; i++) {\n    if(i%2 == 0) {\n        for(int j=0; j<3; j++)\n            printf("%d ", a[i][j]);\n    } else {\n        for(int j=2; j>=0; j--)\n            printf("%d ", a[i][j]);\n    }\n    printf("\\n");\n}',
    hint: 'Print even rows left to right, odd rows right to left'
  },

  // ========== EXTRA ADVANCED PROBLEMS (QUESTIONS 91-100) ==========
  {
    id: 'c_loop_91',
    topicId: 'c_loop',
    question: 'Write a loop to implement counting sort for small range numbers.',
    mathSolution: 'Sort array {4,2,2,8,3,3,1}',
    codeSolution: 'int arr[] = {4,2,2,8,3,3,1};\nint n=7, max=arr[0];\nfor(int i=1; i<n; i++) if(arr[i] > max) max = arr[i];\nint count[max+1];\nfor(int i=0; i<=max; i++) count[i] = 0;\nfor(int i=0; i<n; i++) count[arr[i]]++;\nint index=0;\nfor(int i=0; i<=max; i++) {\n    while(count[i] > 0) {\n        arr[index++] = i;\n        count[i]--;\n    }\n}',
    hint: 'Count occurrences, then reconstruct sorted array'
  },
  {
    id: 'c_loop_92',
    topicId: 'c_loop',
    question: 'Write a loop to rotate an array by k positions to the left.',
    mathSolution: 'Array [1,2,3,4,5] rotate left by 2 -> [3,4,5,1,2]',
    codeSolution: 'int arr[] = {1,2,3,4,5};\nint n=5, k=2;\nint temp[k];\nfor(int i=0; i<k; i++) temp[i] = arr[i];\nfor(int i=k; i<n; i++) arr[i-k] = arr[i];\nfor(int i=0; i<k; i++) arr[n-k+i] = temp[i];',
    hint: 'Store first k elements, shift, then put stored at end'
  },
  {
    id: 'c_loop_93',
    topicId: 'c_loop',
    question: 'Write a loop to find the majority element in an array (element appearing more than n/2 times).',
    mathSolution: 'Array [3,3,4,2,4,4,2,4,4] majority is 4',
    codeSolution: 'int arr[] = {3,3,4,2,4,4,2,4,4};\nint n=9, candidate=arr[0], count=1;\nfor(int i=1; i<n; i++) {\n    if(count == 0) candidate = arr[i];\n    if(arr[i] == candidate) count++;\n    else count--;\n}\ncount=0;\nfor(int i=0; i<n; i++) if(arr[i] == candidate) count++;\nif(count > n/2) printf("Majority: %d", candidate);\nelse printf("No majority");',
    hint: 'Moore\'s Voting Algorithm'
  },
  {
    id: 'c_loop_94',
    topicId: 'c_loop',
    question: 'Write a loop to find the next greater element for each element in array.',
    mathSolution: 'Array [4,5,2,25] -> Next greater: 4->5, 5->25, 2->25, 25->-1',
    codeSolution: 'int arr[] = {4,5,2,25};\nint n=4;\nfor(int i=0; i<n; i++) {\n    int next = -1;\n    for(int j=i+1; j<n; j++) {\n        if(arr[j] > arr[i]) {\n            next = arr[j];\n            break;\n        }\n    }\n    printf("%d -> %d\\n", arr[i], next);\n}',
    hint: 'For each element, scan right to find greater'
  },
  {
    id: 'c_loop_95',
    topicId: 'c_loop',
    question: 'Write a loop to find the number of inversions in an array.',
    mathSolution: 'Array [8,4,2,1] has 6 inversions',
    codeSolution: 'int arr[] = {8,4,2,1};\nint n=4, inv_count=0;\nfor(int i=0; i<n-1; i++) {\n    for(int j=i+1; j<n; j++) {\n        if(arr[i] > arr[j]) inv_count++;\n    }\n}\nprintf("Inversions: %d", inv_count);',
    hint: 'Count pairs where i<j and arr[i] > arr[j]'
  },
  {
    id: 'c_loop_96',
    topicId: 'c_loop',
    question: 'Write a loop to implement shell sort.',
    mathSolution: 'Sort array using shell sort',
    codeSolution: 'int arr[] = {12,34,54,2,3};\nint n=5;\nfor(int gap=n/2; gap>0; gap/=2) {\n    for(int i=gap; i<n; i++) {\n        int temp = arr[i];\n        int j;\n        for(j=i; j>=gap && arr[j-gap] > temp; j-=gap) {\n            arr[j] = arr[j-gap];\n        }\n        arr[j] = temp;\n    }\n}',
    hint: 'Compare elements at a gap, reduce gap gradually'
  },
  {
    id: 'c_loop_97',
    topicId: 'c_loop',
    question: 'Write nested loops to find the saddle point in a matrix.',
    mathSolution: 'Element smallest in its row and largest in its column',
    codeSolution: 'int a[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\nint flag=0;\nfor(int i=0; i<3; i++) {\n    int min_row = a[i][0], col_index=0;\n    for(int j=1; j<3; j++) {\n        if(a[i][j] < min_row) {\n            min_row = a[i][j];\n            col_index = j;\n        }\n    }\n    int max_col = a[i][col_index];\n    for(int k=0; k<3; k++) {\n        if(a[k][col_index] > max_col) {\n            max_col = a[k][col_index];\n        }\n    }\n    if(min_row == max_col) {\n        printf("Saddle point at [%d][%d]: %d\\n", i, col_index, min_row);\n        flag=1;\n    }\n}\nif(!flag) printf("No saddle point");',
    hint: 'Find min in row, then check if it\'s max in column'
  },
  {
    id: 'c_loop_98',
    topicId: 'c_loop',
    question: 'Write a loop to generate all subsets of an array.',
    mathSolution: 'Array [1,2,3] subsets: {}, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}',
    codeSolution: 'int arr[] = {1,2,3};\nint n=3;\nint total = 1<<n;\nfor(int i=0; i<total; i++) {\n    printf("{ ");\n    for(int j=0; j<n; j++) {\n        if(i & (1<<j)) {\n            printf("%d ", arr[j]);\n        }\n    }\n    printf("}\\n");\n}',
    hint: 'Use bitmask to represent subsets'
  },
  {
    id: 'c_loop_99',
    topicId: 'c_loop',
    question: 'Write nested loops to find the magic square (sum of rows, columns, diagonals equal).',
    mathSolution: 'Check if matrix is a magic square',
    codeSolution: 'int a[3][3] = {{2,7,6},{9,5,1},{4,3,8}};\nint sum=0, temp, flag=1;\nfor(int j=0; j<3; j++) sum += a[0][j];\nfor(int i=1; i<3; i++) {\n    temp=0;\n    for(int j=0; j<3; j++) temp += a[i][j];\n    if(temp != sum) flag=0;\n}\nfor(int j=0; j<3; j++) {\n    temp=0;\n    for(int i=0; i<3; i++) temp += a[i][j];\n    if(temp != sum) flag=0;\n}\ntemp=0;\nfor(int i=0; i<3; i++) temp += a[i][i];\nif(temp != sum) flag=0;\ntemp=0;\nfor(int i=0; i<3; i++) temp += a[i][2-i];\nif(temp != sum) flag=0;\nif(flag) printf("Magic square");\nelse printf("Not magic square");',
    hint: 'Calculate first row sum, then compare with all other sums'
  },
  {
    id: 'c_loop_100',
    topicId: 'c_loop',
    question: 'Write a loop to find the maximum length subarray with equal number of 0s and 1s.',
    mathSolution: 'Array [0,1,0,1] has length 4',
    codeSolution: 'int arr[] = {0,1,0,1,0,1};\nint n=6, max_len=0;\nfor(int i=0; i<n; i++) {\n    int count0=0, count1=0;\n    for(int j=i; j<n; j++) {\n        if(arr[j]==0) count0++;\n        else count1++;\n        if(count0 == count1) {\n            if(j-i+1 > max_len)\n                max_len = j-i+1;\n        }\n    }\n}\nprintf("Maximum length = %d", max_len);',
    hint: 'Check all subarrays and count zeros and ones'
  }
);