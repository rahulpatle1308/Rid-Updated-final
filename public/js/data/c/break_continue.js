QuizData.questions.push(
  // ==================== BASIC BREAK IN LOOPS (1-15) ====================
  {
    id: 'c_break_continue_1',
    topicId: 'c_break_continue',
    question: 'Write a for loop to print numbers from 1 to 10 but break when i equals 5.',
    mathSolution: 'Prints: 1 2 3 4',
    codeSolution: 'for(int i=1; i<=10; i++) {\n    if(i == 5) {\n        break;\n    }\n    printf("%d ", i);\n}',
    hint: 'Use break statement inside if condition'
  },
  {
    id: 'c_break_continue_2',
    topicId: 'c_break_continue',
    question: 'Write a while loop to print numbers from 1 to 10 but break when i becomes 7.',
    mathSolution: 'Prints: 1 2 3 4 5 6',
    codeSolution: 'int i=1;\nwhile(i<=10) {\n    if(i == 7) {\n        break;\n    }\n    printf("%d ", i);\n    i++;\n}',
    hint: 'Place break before increment if needed'
  },
  {
    id: 'c_break_continue_3',
    topicId: 'c_break_continue',
    question: 'Write a do-while loop to print numbers from 1 to 10 but break when i equals 8.',
    mathSolution: 'Prints: 1 2 3 4 5 6 7',
    codeSolution: 'int i=1;\ndo {\n    if(i == 8) {\n        break;\n    }\n    printf("%d ", i);\n    i++;\n} while(i<=10);',
    hint: 'Break works the same in do-while loops'
  },
  {
    id: 'c_break_continue_4',
    topicId: 'c_break_continue',
    question: 'Write a for loop to find the first number divisible by 7 between 1 and 50, then break.',
    mathSolution: 'First number divisible by 7 is 7',
    codeSolution: 'for(int i=1; i<=50; i++) {\n    if(i % 7 == 0) {\n        printf("First number divisible by 7: %d", i);\n        break;\n    }\n}',
    hint: 'Check condition using modulo operator'
  },
  {
    id: 'c_break_continue_5',
    topicId: 'c_break_continue',
    question: 'Write a for loop to print numbers but break when user enters a negative number.',
    mathSolution: 'If user enters 5,3,-1 then prints: 5 3',
    codeSolution: 'int num;\nfor(;;) {\n    printf("Enter a number: ");\n    scanf("%d", &num);\n    if(num < 0) {\n        break;\n    }\n    printf("%d ", num);\n}',
    hint: 'Use infinite loop with break condition'
  },
  {
    id: 'c_break_continue_6',
    topicId: 'c_break_continue',
    question: 'Write a loop to find the first prime number greater than 100 and break.',
    mathSolution: 'First prime after 100 is 101',
    codeSolution: 'for(int i=101; ; i++) {\n    int flag=1;\n    for(int j=2; j<=i/2; j++) {\n        if(i%j == 0) {\n            flag=0;\n            break;\n        }\n    }\n    if(flag) {\n        printf("First prime after 100: %d", i);\n        break;\n    }\n}',
    hint: 'Use nested loops with break for prime checking'
  },
  {
    id: 'c_break_continue_7',
    topicId: 'c_break_continue',
    question: 'Write a loop to sum numbers until user enters 0, then break.',
    mathSolution: 'If user enters 5,3,2,0 then sum=10',
    codeSolution: 'int num, sum=0;\nwhile(1) {\n    printf("Enter number (0 to stop): ");\n    scanf("%d", &num);\n    if(num == 0) {\n        break;\n    }\n    sum += num;\n}\nprintf("Sum = %d", sum);',
    hint: 'Use infinite while loop with break condition'
  },
  {
    id: 'c_break_continue_8',
    topicId: 'c_break_continue',
    question: 'Write a loop to find the first occurrence of a number in an array and break.',
    mathSolution: 'Array [10,20,30,40,50] search 30 → found at index 2',
    codeSolution: 'int arr[] = {10,20,30,40,50};\nint search=30, found=-1;\nfor(int i=0; i<5; i++) {\n    if(arr[i] == search) {\n        found = i;\n        break;\n    }\n}\nif(found != -1) printf("Found at index %d", found);\nelse printf("Not found");',
    hint: 'Break loop once element is found'
  },
  {
    id: 'c_break_continue_9',
    topicId: 'c_break_continue',
    question: 'Write a loop to find the first negative number in an array and break.',
    mathSolution: 'Array [5,8,-3,10,2] first negative is -3 at index 2',
    codeSolution: 'int arr[] = {5,8,-3,10,2};\nfor(int i=0; i<5; i++) {\n    if(arr[i] < 0) {\n        printf("First negative: %d at index %d", arr[i], i);\n        break;\n    }\n}',
    hint: 'Check for negative values and break when found'
  },
  {
    id: 'c_break_continue_10',
    topicId: 'c_break_continue',
    question: 'Write a loop to print characters of a string until a vowel is encountered, then break.',
    mathSolution: 'String "Hello" prints: H',
    codeSolution: 'char str[] = "Hello";\nfor(int i=0; str[i]!=\'\\0\'; i++) {\n    char ch = tolower(str[i]);\n    if(ch==\'a\' || ch==\'e\' || ch==\'i\' || ch==\'o\' || ch==\'u\') {\n        break;\n    }\n    printf("%c", str[i]);\n}',
    hint: 'Break when vowel is found'
  },
  {
    id: 'c_break_continue_11',
    topicId: 'c_break_continue',
    question: 'Write a loop to find the first perfect square greater than 50 and break.',
    mathSolution: 'First perfect square > 50 is 64 (8^2)',
    codeSolution: 'for(int i=1; ; i++) {\n    int square = i*i;\n    if(square > 50) {\n        printf("First perfect square > 50: %d", square);\n        break;\n    }\n}',
    hint: 'Calculate squares until condition is met'
  },
  {
    id: 'c_break_continue_12',
    topicId: 'c_break_continue',
    question: 'Write a loop to read characters until \'q\' is entered, then break.',
    mathSolution: 'User enters: a b c q → prints a b c',
    codeSolution: 'char ch;\nwhile(1) {\n    printf("Enter a character (q to quit): ");\n    scanf(" %c", &ch);\n    if(ch == \'q\') {\n        break;\n    }\n    printf("You entered: %c\\n", ch);\n}',
    hint: 'Use space before %c to consume newline'
  },
  {
    id: 'c_break_continue_13',
    topicId: 'c_break_continue',
    question: 'Write a loop to find the first number that is divisible by both 3 and 5, then break.',
    mathSolution: 'First number divisible by both 3 and 5 is 15',
    codeSolution: 'for(int i=1; ; i++) {\n    if(i%3==0 && i%5==0) {\n        printf("First number divisible by 3 and 5: %d", i);\n        break;\n    }\n}',
    hint: 'Check both conditions using && operator'
  },
  {
    id: 'c_break_continue_14',
    topicId: 'c_break_continue',
    question: 'Write a loop to find the first Fibonacci number greater than 1000 and break.',
    mathSolution: 'Fibonacci: 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597 → 1597',
    codeSolution: 'int a=0, b=1, c;\nwhile(1) {\n    c = a+b;\n    if(c > 1000) {\n        printf("First Fibonacci > 1000: %d", c);\n        break;\n    }\n    a = b;\n    b = c;\n}',
    hint: 'Generate Fibonacci numbers until condition met'
  },
  {
    id: 'c_break_continue_15',
    topicId: 'c_break_continue',
    question: 'Write a loop to find the first Armstrong number between 100 and 500 and break.',
    mathSolution: 'Armstrong numbers: 153, 370, 371, 407 → first is 153',
    codeSolution: 'for(int i=100; i<=500; i++) {\n    int num=i, sum=0, temp=i;\n    while(temp>0) {\n        int digit = temp%10;\n        sum += digit*digit*digit;\n        temp /= 10;\n    }\n    if(sum == i) {\n        printf("First Armstrong number: %d", i);\n        break;\n    }\n}',
    hint: 'Check Armstrong condition for 3-digit numbers'
  },

  // ==================== BASIC CONTINUE IN LOOPS (16-30) ====================
  {
    id: 'c_break_continue_16',
    topicId: 'c_break_continue',
    question: 'Write a for loop to print numbers from 1 to 10 but skip printing 5 using continue.',
    mathSolution: 'Prints: 1 2 3 4 6 7 8 9 10',
    codeSolution: 'for(int i=1; i<=10; i++) {\n    if(i == 5) {\n        continue;\n    }\n    printf("%d ", i);\n}',
    hint: 'Continue skips the rest of the loop body'
  },
  {
    id: 'c_break_continue_17',
    topicId: 'c_break_continue',
    question: 'Write a while loop to print numbers from 1 to 10 but skip even numbers using continue.',
    mathSolution: 'Prints: 1 3 5 7 9',
    codeSolution: 'int i=1;\nwhile(i<=10) {\n    if(i%2 == 0) {\n        i++;\n        continue;\n    }\n    printf("%d ", i);\n    i++;\n}',
    hint: 'Remember to increment i before continue to avoid infinite loop'
  },
  {
    id: 'c_break_continue_18',
    topicId: 'c_break_continue',
    question: 'Write a do-while loop to print numbers from 1 to 10 but skip odd numbers.',
    mathSolution: 'Prints: 2 4 6 8 10',
    codeSolution: 'int i=1;\ndo {\n    if(i%2 != 0) {\n        i++;\n        continue;\n    }\n    printf("%d ", i);\n    i++;\n} while(i<=10);',
    hint: 'Increment i before continue statement'
  },
  {
    id: 'c_break_continue_19',
    topicId: 'c_break_continue',
    question: 'Write a for loop to print numbers from 1 to 20 but skip numbers divisible by 3.',
    mathSolution: 'Prints: 1 2 4 5 7 8 10 11 13 14 16 17 19 20',
    codeSolution: 'for(int i=1; i<=20; i++) {\n    if(i%3 == 0) {\n        continue;\n    }\n    printf("%d ", i);\n}',
    hint: 'Use modulo operator to check divisibility'
  },
  {
    id: 'c_break_continue_20',
    topicId: 'c_break_continue',
    question: 'Write a for loop to print numbers but skip when user enters 0 using continue.',
    mathSolution: 'If user enters 5,0,3,4 then prints: 5 3 4',
    codeSolution: 'int num;\nfor(int i=0; i<5; i++) {\n    printf("Enter number: ");\n    scanf("%d", &num);\n    if(num == 0) {\n        continue;\n    }\n    printf("%d ", num);\n}',
    hint: 'Continue skips printing when num is 0'
  },
  {
    id: 'c_break_continue_21',
    topicId: 'c_break_continue',
    question: 'Write a loop to print all alphabets except vowels using continue.',
    mathSolution: 'Prints: B C D F G H J K L M N P Q R S T V W X Y Z',
    codeSolution: 'for(char ch=\'A\'; ch<=\'Z\'; ch++) {\n    if(ch==\'A\' || ch==\'E\' || ch==\'I\' || ch==\'O\' || ch==\'U\') {\n        continue;\n    }\n    printf("%c ", ch);\n}',
    hint: 'Skip vowels using continue'
  },
  {
    id: 'c_break_continue_22',
    topicId: 'c_break_continue',
    question: 'Write a loop to calculate sum of positive numbers only (skip negatives).',
    mathSolution: 'Numbers: 5, -2, 3, -1, 4 → sum = 5+3+4 = 12',
    codeSolution: 'int arr[] = {5,-2,3,-1,4};\nint sum=0;\nfor(int i=0; i<5; i++) {\n    if(arr[i] < 0) {\n        continue;\n    }\n    sum += arr[i];\n}\nprintf("Sum = %d", sum);',
    hint: 'Skip negative numbers using continue'
  },
  {
    id: 'c_break_continue_23',
    topicId: 'c_break_continue',
    question: 'Write a loop to print all numbers except those ending with 5.',
    mathSolution: '1-20 except 5,15 → prints all others',
    codeSolution: 'for(int i=1; i<=20; i++) {\n    if(i%10 == 5) {\n        continue;\n    }\n    printf("%d ", i);\n}',
    hint: 'Check last digit using modulo 10'
  },
  {
    id: 'c_break_continue_24',
    topicId: 'c_break_continue',
    question: 'Write a loop to print characters of a string skipping digits.',
    mathSolution: 'String "a1b2c3" prints: a b c',
    codeSolution: 'char str[] = "a1b2c3";\nfor(int i=0; str[i]!=\'\\0\'; i++) {\n    if(str[i] >= \'0\' && str[i] <= \'9\') {\n        continue;\n    }\n    printf("%c ", str[i]);\n}',
    hint: 'Skip characters that are digits'
  },
  {
    id: 'c_break_continue_25',
    topicId: 'c_break_continue',
    question: 'Write a loop to print all even numbers but skip multiples of 10.',
    mathSolution: '1-30: skip 10,20,30 → prints 2,4,6,8,12,14,16,18,22,24,26,28',
    codeSolution: 'for(int i=2; i<=30; i+=2) {\n    if(i%10 == 0) {\n        continue;\n    }\n    printf("%d ", i);\n}',
    hint: 'Skip if number is divisible by 10'
  },
  {
    id: 'c_break_continue_26',
    topicId: 'c_break_continue',
    question: 'Write a loop to calculate average of positive numbers (skip negatives and zeros).',
    mathSolution: 'Numbers: 10,0,-5,20,0,30 → positive: 10,20,30 avg=20',
    codeSolution: 'int arr[] = {10,0,-5,20,0,30};\nint sum=0, count=0;\nfor(int i=0; i<6; i++) {\n    if(arr[i] <= 0) {\n        continue;\n    }\n    sum += arr[i];\n    count++;\n}\nprintf("Average = %.2f", (float)sum/count);',
    hint: 'Skip non-positive numbers using continue'
  },
  {
    id: 'c_break_continue_27',
    topicId: 'c_break_continue',
    question: 'Write a loop to print ASCII values of alphabets only, skipping numbers and symbols.',
    mathSolution: 'Print A-Z and a-z ASCII values',
    codeSolution: 'for(int i=0; i<128; i++) {\n    if(!((i>=65 && i<=90) || (i>=97 && i<=122))) {\n        continue;\n    }\n    printf("%c:%d ", i, i);\n}',
    hint: 'Check if character is alphabet using ASCII ranges'
  },
  {
    id: 'c_break_continue_28',
    topicId: 'c_break_continue',
    question: 'Write a loop to print numbers but skip those that are perfect squares.',
    mathSolution: '1-20 skip 1,4,9,16',
    codeSolution: 'for(int i=1; i<=20; i++) {\n    int root = sqrt(i);\n    if(root*root == i) {\n        continue;\n    }\n    printf("%d ", i);\n}',
    hint: 'Check if number is perfect square, continue if true'
  },
  {
    id: 'c_break_continue_29',
    topicId: 'c_break_continue',
    question: 'Write a loop to print Fibonacci series but skip numbers divisible by 5.',
    mathSolution: 'Fibonacci: 0,1,1,2,3,5,8,13,21,34 → skip 0,5 → prints 1,1,2,3,8,13,21,34',
    codeSolution: 'int a=0, b=1, c;\nprintf("%d %d ", a, b);\nfor(int i=3; i<=10; i++) {\n    c = a+b;\n    if(c%5 == 0) {\n        a = b;\n        b = c;\n        continue;\n    }\n    printf("%d ", c);\n    a = b;\n    b = c;\n}',
    hint: 'Use continue to skip printing certain numbers'
  },
  {
    id: 'c_break_continue_30',
    topicId: 'c_break_continue',
    question: 'Write a loop to print all prime numbers between 1 and 50, skipping non-primes.',
    mathSolution: 'Primes: 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47',
    codeSolution: 'for(int i=2; i<=50; i++) {\n    int is_prime=1;\n    for(int j=2; j<=i/2; j++) {\n        if(i%j == 0) {\n            is_prime=0;\n            break;\n        }\n    }\n    if(!is_prime) {\n        continue;\n    }\n    printf("%d ", i);\n}',
    hint: 'Continue skips non-prime numbers'
  },

  // ==================== BREAK IN NESTED LOOPS (31-45) ====================
  {
    id: 'c_break_continue_31',
    topicId: 'c_break_continue',
    question: 'Use nested loops with break to find first pair that sums to 10.',
    mathSolution: 'Array [1,3,5,7,9] first pair summing to 10: 1 and 9',
    codeSolution: 'int arr[] = {1,3,5,7,9};\nint target=10, found=0;\nfor(int i=0; i<5; i++) {\n    for(int j=i+1; j<5; j++) {\n        if(arr[i] + arr[j] == target) {\n            printf("Pair: %d and %d", arr[i], arr[j]);\n            found=1;\n            break;\n        }\n    }\n    if(found) break;\n}',
    hint: 'Use flag to break outer loop'
  },
  {
    id: 'c_break_continue_32',
    topicId: 'c_break_continue',
    question: 'Write nested loops to print a pattern but break inner loop when j > i.',
    mathSolution: 'Prints: *\\n**\\n***\\n**\\n*',
    codeSolution: 'for(int i=1; i<=5; i++) {\n    for(int j=1; j<=5; j++) {\n        if(j > i && i<=3) break;\n        if(j > (6-i) && i>3) break;\n        printf("*");\n    }\n    printf("\\n");\n}',
    hint: 'Break inner loop based on condition'
  },
  {
    id: 'c_break_continue_33',
    topicId: 'c_break_continue',
    question: 'Search a 2D matrix for a target value and break both loops when found.',
    mathSolution: 'Matrix [[1,2,3],[4,5,6],[7,8,9]] search 5',
    codeSolution: 'int matrix[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\nint target=5, found=0;\nfor(int i=0; i<3; i++) {\n    for(int j=0; j<3; j++) {\n        if(matrix[i][j] == target) {\n            printf("Found at [%d][%d]", i, j);\n            found=1;\n            break;\n        }\n    }\n    if(found) break;\n}',
    hint: 'Use flag to break outer loop'
  },
  {
    id: 'c_break_continue_34',
    topicId: 'c_break_continue',
    question: 'Use labeled break to exit nested loops directly in C.',
    mathSolution: 'Break out of all nested loops at once',
    codeSolution: '// Note: C doesn\'t have labeled break, but we can use goto\nfor(int i=0; i<3; i++) {\n    for(int j=0; j<3; j++) {\n        if(i==1 && j==1) {\n            goto exit_loops;\n        }\n        printf("i=%d, j=%d\\n", i, j);\n    }\n}\nexit_loops:\nprintf("Exited all loops");',
    hint: 'Use goto as an alternative to labeled break'
  },
  {
    id: 'c_break_continue_35',
    topicId: 'c_break_continue',
    question: 'Find first prime number in a 2D array and break all loops.',
    mathSolution: 'Matrix [[4,6,8],[9,10,11],[12,14,15]] first prime is 11',
    codeSolution: 'int matrix[3][3] = {{4,6,8},{9,10,11},{12,14,15}};\nint found=0, prime_i, prime_j;\nfor(int i=0; i<3 && !found; i++) {\n    for(int j=0; j<3; j++) {\n        int num=matrix[i][j], is_prime=1;\n        if(num<2) is_prime=0;\n        for(int k=2; k<=num/2; k++) {\n            if(num%k==0) {\n                is_prime=0;\n                break;\n            }\n        }\n        if(is_prime) {\n            prime_i=i; prime_j=j;\n            found=1;\n            break;\n        }\n    }\n}\nif(found) printf("Prime found at [%d][%d]: %d", prime_i, prime_j, matrix[prime_i][prime_j]);',
    hint: 'Use condition in outer loop to break'
  },
  {
    id: 'c_break_continue_36',
    topicId: 'c_break_continue',
    question: 'Write nested loops to find common elements in two arrays, break when found.',
    mathSolution: 'Array1 [2,5,7,9], Array2 [3,6,7,8] first common: 7',
    codeSolution: 'int arr1[] = {2,5,7,9};\nint arr2[] = {3,6,7,8};\nint found=0;\nfor(int i=0; i<4; i++) {\n    for(int j=0; j<4; j++) {\n        if(arr1[i] == arr2[j]) {\n            printf("Common element: %d", arr1[i]);\n            found=1;\n            break;\n        }\n    }\n    if(found) break;\n}',
    hint: 'Break both loops when common element found'
  },
  {
    id: 'c_break_continue_37',
    topicId: 'c_break_continue',
    question: 'Find first row in matrix with all positive numbers and break.',
    mathSolution: 'Matrix [[-1,2,3],[4,5,6],[-7,8,9]] first all-positive row: row1 [4,5,6]',
    codeSolution: 'int matrix[3][3] = {{-1,2,3},{4,5,6},{-7,8,9}};\nint found_row = -1;\nfor(int i=0; i<3; i++) {\n    int all_positive = 1;\n    for(int j=0; j<3; j++) {\n        if(matrix[i][j] < 0) {\n            all_positive = 0;\n            break;\n        }\n    }\n    if(all_positive) {\n        found_row = i;\n        break;\n    }\n}\nif(found_row != -1) printf("First all-positive row: %d", found_row);',
    hint: 'Break inner loop on negative, break outer on all-positive'
  },
  {
    id: 'c_break_continue_38',
    topicId: 'c_break_continue',
    question: 'Find first column with sum greater than 50 and break.',
    mathSolution: 'Matrix [[10,20,30],[40,5,15],[5,10,20]] col0 sum=55 → break',
    codeSolution: 'int matrix[3][3] = {{10,20,30},{40,5,15},{5,10,20}};\nfor(int j=0; j<3; j++) {\n    int sum=0;\n    for(int i=0; i<3; i++) {\n        sum += matrix[i][j];\n    }\n    if(sum > 50) {\n        printf("Column %d sum = %d", j, sum);\n        break;\n    }\n}',
    hint: 'Calculate column sums, break when condition met'
  },
  {
    id: 'c_break_continue_39',
    topicId: 'c_break_continue',
    question: 'Find first number that appears in both 2D matrix and target array, break all loops.',
    mathSolution: 'Matrix [[1,2,3],[4,5,6]], target [7,8,5,9] → found 5',
    codeSolution: 'int matrix[2][3] = {{1,2,3},{4,5,6}};\nint target[] = {7,8,5,9};\nint found=0, found_val;\nfor(int i=0; i<2 && !found; i++) {\n    for(int j=0; j<3; j++) {\n        for(int k=0; k<4; k++) {\n            if(matrix[i][j] == target[k]) {\n                found_val = matrix[i][j];\n                found=1;\n                break;\n            }\n        }\n        if(found) break;\n    }\n}\nif(found) printf("Found common value: %d", found_val);',
    hint: 'Use multiple flags to break all loops'
  },
  {
    id: 'c_break_continue_40',
    topicId: 'c_break_continue',
    question: 'Find first row that contains a palindrome number and break.',
    mathSolution: 'Matrix [[123,456],[121,789],[555,222]] first palindrome row: row1 [121,789]',
    codeSolution: 'int matrix[3][2] = {{123,456},{121,789},{555,222}};\nint found_row = -1;\nfor(int i=0; i<3; i++) {\n    int has_palindrome = 0;\n    for(int j=0; j<2; j++) {\n        int num = matrix[i][j], rev=0, temp=num;\n        while(temp>0) {\n            rev = rev*10 + temp%10;\n            temp/=10;\n        }\n        if(rev == num) {\n            has_palindrome = 1;\n            break;\n        }\n    }\n    if(has_palindrome) {\n        found_row = i;\n        break;\n    }\n}\nprintf("First row with palindrome: %d", found_row);',
    hint: 'Check each number for palindrome property'
  },
  {
    id: 'c_break_continue_41',
    topicId: 'c_break_continue',
    question: 'Find first pair of elements from two different rows that sum to 20 and break.',
    mathSolution: 'Matrix [[5,10,15],[8,12,7],[3,9,11]] first pair: 12(row1) + 8(row2)',
    codeSolution: 'int matrix[3][3] = {{5,10,15},{8,12,7},{3,9,11}};\nint found=0, val1, val2;\nfor(int i1=0; i1<3 && !found; i1++) {\n    for(int j1=0; j1<3; j1++) {\n        for(int i2=i1+1; i2<3; i2++) {\n            for(int j2=0; j2<3; j2++) {\n                if(matrix[i1][j1] + matrix[i2][j2] == 20) {\n                    val1 = matrix[i1][j1];\n                    val2 = matrix[i2][j2];\n                    found=1;\n                    break;\n                }\n            }\n            if(found) break;\n        }\n        if(found) break;\n    }\n}\nprintf("Pair: %d and %d", val1, val2);',
    hint: 'Use multiple break conditions'
  },
  {
    id: 'c_break_continue_42',
    topicId: 'c_break_continue',
    question: 'Find first 3x3 magic square in a larger matrix and break.',
    mathSolution: 'Check all 3x3 submatrices for magic square property',
    codeSolution: 'int matrix[4][4] = {{8,1,6,3},{3,5,7,4},{4,9,2,5},{2,7,6,8}};\nint found=0;\nfor(int i=0; i<=1 && !found; i++) {\n    for(int j=0; j<=1; j++) {\n        int sum = matrix[i][j] + matrix[i][j+1] + matrix[i][j+2];\n        int magic = 1;\n        // Check rows\n        for(int r=0; r<3; r++) {\n            int row_sum = 0;\n            for(int c=0; c<3; c++) {\n                row_sum += matrix[i+r][j+c];\n            }\n            if(row_sum != sum) { magic=0; break; }\n        }\n        if(!magic) continue;\n        // Check columns\n        for(int c=0; c<3; c++) {\n            int col_sum = 0;\n            for(int r=0; r<3; r++) {\n                col_sum += matrix[i+r][j+c];\n            }\n            if(col_sum != sum) { magic=0; break; }\n        }\n        if(magic) {\n            printf("Magic square found at [%d][%d]", i, j);\n            found=1;\n            break;\n        }\n    }\n}',
    hint: 'Break inner loops when condition fails, break outer when found'
  },
  {
    id: 'c_break_continue_43',
    topicId: 'c_break_continue',
    question: 'Find first number that is power of 2 in a 2D array and break.',
    mathSolution: 'Matrix [[3,6,9],[8,12,16],[5,10,20]] first power of 2: 8',
    codeSolution: 'int matrix[3][3] = {{3,6,9},{8,12,16},{5,10,20}};\nint found=0, power_val;\nfor(int i=0; i<3 && !found; i++) {\n    for(int j=0; j<3; j++) {\n        int num = matrix[i][j];\n        int is_power = (num && !(num & (num-1)));\n        if(is_power) {\n            power_val = num;\n            found=1;\n            break;\n        }\n    }\n}\nprintf("First power of 2: %d", power_val);',
    hint: 'Use bitwise operation to check power of 2'
  },
  {
    id: 'c_break_continue_44',
    topicId: 'c_break_continue',
    question: 'Find first row where all elements are prime numbers and break.',
    mathSolution: 'Matrix [[4,6,8],[2,3,5],[9,11,13]] first all-prime row: row1 [2,3,5]',
    codeSolution: 'int matrix[3][3] = {{4,6,8},{2,3,5},{9,11,13}};\nint prime_row = -1;\nfor(int i=0; i<3; i++) {\n    int all_prime = 1;\n    for(int j=0; j<3; j++) {\n        int num = matrix[i][j], is_prime=1;\n        if(num < 2) { all_prime=0; break; }\n        for(int k=2; k<=num/2; k++) {\n            if(num%k == 0) {\n                is_prime=0;\n                break;\n            }\n        }\n        if(!is_prime) {\n            all_prime=0;\n            break;\n        }\n    }\n    if(all_prime) {\n        prime_row = i;\n        break;\n    }\n}\nprintf("First all-prime row: %d", prime_row);',
    hint: 'Break inner loops when non-prime found'
  },
  {
    id: 'c_break_continue_45',
    topicId: 'c_break_continue',
    question: 'Find first element that is greater than sum of all previous elements and break.',
    mathSolution: 'Array [2,3,8,4,18] → 18 > 2+3+8+4=17',
    codeSolution: 'int arr[] = {2,3,8,4,18};\nint sum=0, found=0;\nfor(int i=0; i<5; i++) {\n    if(arr[i] > sum) {\n        printf("Element %d at index %d > sum %d", arr[i], i, sum);\n        found=1;\n        break;\n    }\n    sum += arr[i];\n}\nif(!found) printf("No such element");',
    hint: 'Compare current element with running sum'
  },

  // ==================== CONTINUE IN NESTED LOOPS (46-60) ====================
  {
    id: 'c_break_continue_46',
    topicId: 'c_break_continue',
    question: 'Use continue in nested loops to skip even numbers in inner loop.',
    mathSolution: 'Print all pairs (i,j) where j is odd',
    codeSolution: 'for(int i=1; i<=3; i++) {\n    for(int j=1; j<=3; j++) {\n        if(j%2 == 0) {\n            continue;\n        }\n        printf("(%d,%d) ", i, j);\n    }\n    printf("\\n");\n}',
    hint: 'Continue only affects inner loop'
  },
  {
    id: 'c_break_continue_47',
    topicId: 'c_break_continue',
    question: 'Print multiplication table but skip rows where i equals j using continue.',
    mathSolution: 'Skip diagonal elements',
    codeSolution: 'for(int i=1; i<=5; i++) {\n    for(int j=1; j<=5; j++) {\n        if(i == j) {\n            continue;\n        }\n        printf("%d×%d=%-4d", i, j, i*j);\n    }\n    printf("\\n");\n}',
    hint: 'Continue skips diagonal elements'
  },
  {
    id: 'c_break_continue_48',
    topicId: 'c_break_continue',
    question: 'Print all pairs (i,j) where i+j is not divisible by 3 using continue.',
    mathSolution: 'Skip pairs where i+j is divisible by 3',
    codeSolution: 'for(int i=1; i<=4; i++) {\n    for(int j=1; j<=4; j++) {\n        if((i+j) % 3 == 0) {\n            continue;\n        }\n        printf("(%d,%d) ", i, j);\n    }\n    printf("\\n");\n}',
    hint: 'Check condition and continue if true'
  },
  {
    id: 'c_break_continue_49',
    topicId: 'c_break_continue',
    question: 'Print all combinations of two dice rolls that sum to more than 7, skipping those ≤7.',
    mathSolution: 'Dice rolls (1-6) with sum > 7',
    codeSolution: 'for(int i=1; i<=6; i++) {\n    for(int j=1; j<=6; j++) {\n        if(i+j <= 7) {\n            continue;\n        }\n        printf("(%d,%d)=%d ", i, j, i+j);\n    }\n    printf("\\n");\n}',
    hint: 'Use continue to skip small sums'
  },
  {
    id: 'c_break_continue_50',
    topicId: 'c_break_continue',
    question: 'Print all pairs (i,j) from two arrays where product is even, skipping odd products.',
    mathSolution: 'Array1 [2,3,5], Array2 [4,6,7] → print even products only',
    codeSolution: 'int arr1[] = {2,3,5};\nint arr2[] = {4,6,7};\nfor(int i=0; i<3; i++) {\n    for(int j=0; j<3; j++) {\n        int product = arr1[i] * arr2[j];\n        if(product % 2 != 0) {\n            continue;\n        }\n        printf("%d * %d = %d\\n", arr1[i], arr2[j], product);\n    }\n}',
    hint: 'Continue if product is odd'
  },
  {
    id: 'c_break_continue_51',
    topicId: 'c_break_continue',
    question: 'Print matrix elements but skip elements in even rows using continue.',
    mathSolution: 'Matrix 3x3: print only rows 1 and 3 (0-indexed: rows 0,2)',
    codeSolution: 'int matrix[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\nfor(int i=0; i<3; i++) {\n    if(i%2 == 0) {\n        for(int j=0; j<3; j++) {\n            printf("%d ", matrix[i][j]);\n        }\n        printf("\\n");\n    } else {\n        continue;\n    }\n}',
    hint: 'Skip entire rows using continue'
  },
  {
    id: 'c_break_continue_52',
    topicId: 'c_break_continue',
    question: 'Print all prime numbers from a 2D matrix, skipping non-primes.',
    mathSolution: 'Matrix [[4,7,9],[2,8,11],[13,15,17]] → primes: 7,2,11,13,17',
    codeSolution: 'int matrix[3][3] = {{4,7,9},{2,8,11},{13,15,17}};\nfor(int i=0; i<3; i++) {\n    for(int j=0; j<3; j++) {\n        int num = matrix[i][j], is_prime=1;\n        if(num < 2) { continue; }\n        for(int k=2; k<=num/2; k++) {\n            if(num%k == 0) {\n                is_prime=0;\n                break;\n            }\n        }\n        if(!is_prime) {\n            continue;\n        }\n        printf("%d ", num);\n    }\n}',
    hint: 'Use continue to skip non-prime numbers'
  },
  {
    id: 'c_break_continue_53',
    topicId: 'c_break_continue',
    question: 'Print all pairs (i,j) where i is from 1-5 and j from 1-5, skip when i*j is perfect square.',
    mathSolution: 'Skip pairs like (1,1)=1, (1,4)=4, (2,2)=4, (4,4)=16, etc.',
    codeSolution: 'for(int i=1; i<=5; i++) {\n    for(int j=1; j<=5; j++) {\n        int product = i*j;\n        int root = sqrt(product);\n        if(root*root == product) {\n            continue;\n        }\n        printf("%d×%d=%d ", i, j, product);\n    }\n    printf("\\n");\n}',
    hint: 'Check if product is perfect square'
  },
  {
    id: 'c_break_continue_54',
    topicId: 'c_break_continue',
    question: 'Find and print all Armstrong numbers in a 2D matrix, skipping non-Armstrong.',
    mathSolution: 'Matrix [[153,123,370],[407,111,371],[121,125,1634]]',
    codeSolution: 'int matrix[3][3] = {{153,123,370},{407,111,371},{121,125,1634}};\nfor(int i=0; i<3; i++) {\n    for(int j=0; j<3; j++) {\n        int num = matrix[i][j], sum=0, temp=num, digits=0;\n        while(temp>0) { digits++; temp/=10; }\n        temp = num;\n        while(temp>0) {\n            int digit = temp%10, power=1;\n            for(int k=1; k<=digits; k++) power *= digit;\n            sum += power;\n            temp/=10;\n        }\n        if(sum != num) {\n            continue;\n        }\n        printf("Armstrong: %d at [%d][%d]\\n", num, i, j);\n    }\n}',
    hint: 'Continue if number is not Armstrong'
  },
  {
    id: 'c_break_continue_55',
    topicId: 'c_break_continue',
    question: 'Print all numbers from 1-100 that are divisible by 4 or 6, skipping those divisible by both.',
    mathSolution: 'Divisible by 4 or 6 but not both',
    codeSolution: 'for(int i=1; i<=100; i++) {\n    if(i%4==0 && i%6==0) {\n        continue;\n    }\n    if(i%4==0 || i%6==0) {\n        printf("%d ", i);\n    }\n}',
    hint: 'Skip numbers divisible by both 4 and 6'
  },
  {
    id: 'c_break_continue_56',
    topicId: 'c_break_continue',
    question: 'Print all leap years from 2000-2100, skipping centuries not divisible by 400.',
    mathSolution: 'Leap years: 2000,2004,2008,...2096, skip 2100',
    codeSolution: 'for(int year=2000; year<=2100; year++) {\n    if(year%100==0 && year%400!=0) {\n        continue;\n    }\n    if(year%4==0) {\n        printf("%d ", year);\n    }\n}',
    hint: 'Skip century years not divisible by 400'
  },
  {
    id: 'c_break_continue_57',
    topicId: 'c_break_continue',
    question: 'Print all numbers from two arrays that are common, skipping if already printed.',
    mathSolution: 'Array1 [1,2,3,4,5], Array2 [3,4,5,6,7] → print 3,4,5',
    codeSolution: 'int arr1[] = {1,2,3,4,5};\nint arr2[] = {3,4,5,6,7};\nint printed[10] = {0};\nfor(int i=0; i<5; i++) {\n    for(int j=0; j<5; j++) {\n        if(arr1[i] == arr2[j]) {\n            int already=0;\n            for(int k=0; k<i; k++) {\n                if(printed[k] == arr1[i]) {\n                    already=1;\n                    break;\n                }\n            }\n            if(already) {\n                continue;\n            }\n            printed[i] = arr1[i];\n            printf("%d ", arr1[i]);\n        }\n    }\n}',
    hint: 'Use array to track printed numbers'
  },
  {
    id: 'c_break_continue_58',
    topicId: 'c_break_continue',
    question: 'Print all pairs (i,j) where i and j are from 1-6 and i != j, skipping when i==j.',
    mathSolution: 'All dice roll pairs except doubles',
    codeSolution: 'for(int i=1; i<=6; i++) {\n    for(int j=1; j<=6; j++) {\n        if(i == j) {\n            continue;\n        }\n        printf("(%d,%d) ", i, j);\n    }\n    printf("\\n");\n}',
    hint: 'Skip when both dice show same number'
  },
  {
    id: 'c_break_continue_59',
    topicId: 'c_break_continue',
    question: 'Print all subarrays of an array but skip those with negative sum.',
    mathSolution: 'Array [2,-1,3] subarrays: [2], [2,-1] sum 1, [-1] skip, [3], [2,-1,3] sum 4',
    codeSolution: 'int arr[] = {2, -1, 3};\nint n = 3;\nfor(int i = 0; i < n; i++) {\n    for(int j = i; j < n; j++) {\n        int sum = 0;\n        for(int k = i; k <= j; k++) {\n            sum = sum + arr[k];\n        }\n        if(sum < 0) {\n            continue;\n        }\n        printf("[");\n        for(int k = i; k <= j; k++) {\n            printf("%d", arr[k]);\n            if(k < j) {\n                printf(", ");\n            }\n        }\n        printf("] = %d\\n", sum);\n    }\n}',
    hint: 'Use nested loops to generate all subarrays, calculate sum, and skip if negative'
  },
  {
    id: 'c_break_continue_60',
    topicId: 'c_break_continue',
    question: 'Print all combinations of three numbers from 1-5 that form a triangle.',
    mathSolution: 'Triangle inequality: a+b>c, b+c>a, a+c>b',
    codeSolution: 'for(int i=1; i<=5; i++) {\n    for(int j=i; j<=5; j++) {\n        for(int k=j; k<=5; k++) {\n            if(i+j<=k || j+k<=i || i+k<=j) {\n                continue;\n            }\n            printf("(%d,%d,%d) ", i, j, k);\n        }\n    }\n}',
    hint: 'Skip combinations that don\'t satisfy triangle inequality'
  },

  // ==================== BREAK IN SWITCH STATEMENTS (61-70) ====================
  {
    id: 'c_break_continue_61',
    topicId: 'c_break_continue',
    question: 'Use break in switch statement inside a loop to exit switch only.',
    mathSolution: 'Menu-driven program with break in each case',
    codeSolution: 'int choice;\nfor(int i=0; i<3; i++) {\n    printf("\\n1. Option 1\\n2. Option 2\\n3. Exit loop\\nChoice: ");\n    scanf("%d", &choice);\n    switch(choice) {\n        case 1: printf("You chose 1"); break;\n        case 2: printf("You chose 2"); break;\n        case 3: printf("Exiting loop"); i=3; break;\n        default: printf("Invalid choice");\n    }\n}',
    hint: 'Break in switch only exits switch, not the loop'
  },
  {
    id: 'c_break_continue_62',
    topicId: 'c_break_continue',
    question: 'Create a calculator using switch with break in each case.',
    mathSolution: 'Perform arithmetic operations based on user choice',
    codeSolution: 'int a=10, b=5, choice;\nprintf("1.Add 2.Sub 3.Mul 4.Div\\nChoice: ");\nscanf("%d", &choice);\nswitch(choice) {\n    case 1: printf("Sum = %d", a+b); break;\n    case 2: printf("Difference = %d", a-b); break;\n    case 3: printf("Product = %d", a*b); break;\n    case 4: printf("Quotient = %d", a/b); break;\n    default: printf("Invalid choice");\n}',
    hint: 'Break prevents fall-through to next case'
  },
  {
    id: 'c_break_continue_63',
    topicId: 'c_break_continue',
    question: 'Write a program to display day of week using switch with break.',
    mathSolution: 'Input 1-7, output Monday-Sunday',
    codeSolution: 'int day;\nprintf("Enter day number (1-7): ");\nscanf("%d", &day);\nswitch(day) {\n    case 1: printf("Monday"); break;\n    case 2: printf("Tuesday"); break;\n    case 3: printf("Wednesday"); break;\n    case 4: printf("Thursday"); break;\n    case 5: printf("Friday"); break;\n    case 6: printf("Saturday"); break;\n    case 7: printf("Sunday"); break;\n    default: printf("Invalid day");\n}',
    hint: 'Each case needs break'
  },
  {
    id: 'c_break_continue_64',
    topicId: 'c_break_continue',
    question: 'Write a program to convert grade to description using switch.',
    mathSolution: 'A=Excellent, B=Good, C=Average, D=Below Average, F=Fail',
    codeSolution: 'char grade;\nprintf("Enter grade (A-F): ");\nscanf(" %c", &grade);\nswitch(grade) {\n    case \'A\': case \'a\': printf("Excellent"); break;\n    case \'B\': case \'b\': printf("Good"); break;\n    case \'C\': case \'c\': printf("Average"); break;\n    case \'D\': case \'d\': printf("Below Average"); break;\n    case \'F\': case \'f\': printf("Fail"); break;\n    default: printf("Invalid grade");\n}',
    hint: 'Multiple case labels can share same code'
  },
  {
    id: 'c_break_continue_65',
    topicId: 'c_break_continue',
    question: 'Write a menu-driven program with nested switch and break statements.',
    mathSolution: 'Main menu → sub-menu options',
    codeSolution: 'int main_choice, sub_choice;\nprintf("1. Food\\n2. Drinks\\nChoice: ");\nscanf("%d", &main_choice);\nswitch(main_choice) {\n    case 1: \n        printf("\\n1. Pizza\\n2. Burger\\nChoice: ");\n        scanf("%d", &sub_choice);\n        switch(sub_choice) {\n            case 1: printf("You ordered Pizza"); break;\n            case 2: printf("You ordered Burger"); break;\n            default: printf("Invalid food choice");\n        }\n        break;\n    case 2:\n        printf("\\n1. Coke\\n2. Juice\\nChoice: ");\n        scanf("%d", &sub_choice);\n        switch(sub_choice) {\n            case 1: printf("You ordered Coke"); break;\n            case 2: printf("You ordered Juice"); break;\n            default: printf("Invalid drink choice");\n        }\n        break;\n    default: printf("Invalid main choice");\n}',
    hint: 'Use break after each case to exit switch'
  },
  {
    id: 'c_break_continue_66',
    topicId: 'c_break_continue',
    question: 'Write a program to perform arithmetic operations using switch without break.',
    mathSolution: 'Demonstrate fall-through by performing multiple operations',
    codeSolution: 'int a=10, b=5, choice;\nprintf("1.Add 2.Sub 3.Mul 4.Div\\nChoice: ");\nscanf("%d", &choice);\nswitch(choice) {\n    case 1: printf("Sum = %d\\n", a+b);\n    case 2: printf("Difference = %d\\n", a-b);\n    case 3: printf("Product = %d\\n", a*b);\n    case 4: printf("Quotient = %d\\n", a/b);\n            break;\n    default: printf("Invalid choice");\n}',
    hint: 'Without break, execution falls through to next case'
  },
  {
    id: 'c_break_continue_67',
    topicId: 'c_break_continue',
    question: 'Write a program to check vowel or consonant using switch with break.',
    mathSolution: 'a,e,i,o,u are vowels, rest consonants',
    codeSolution: 'char ch;\nprintf("Enter a character: ");\nscanf(" %c", &ch);\nswitch(tolower(ch)) {\n    case \'a\': case \'e\': case \'i\': case \'o\': case \'u\':\n        printf("Vowel");\n        break;\n    default:\n        if(isalpha(ch)) printf("Consonant");\n        else printf("Not a letter");\n}',
    hint: 'Use tolower() to handle uppercase'
  },
  {
    id: 'c_break_continue_68',
    topicId: 'c_break_continue',
    question: 'Write a program to print month name and days using switch with break.',
    mathSolution: 'Input month number, output month name and days',
    codeSolution: 'int month;\nprintf("Enter month number (1-12): ");\nscanf("%d", &month);\nswitch(month) {\n    case 1: printf("January - 31 days"); break;\n    case 2: printf("February - 28/29 days"); break;\n    case 3: printf("March - 31 days"); break;\n    case 4: printf("April - 30 days"); break;\n    case 5: printf("May - 31 days"); break;\n    case 6: printf("June - 30 days"); break;\n    case 7: printf("July - 31 days"); break;\n    case 8: printf("August - 31 days"); break;\n    case 9: printf("September - 30 days"); break;\n    case 10: printf("October - 31 days"); break;\n    case 11: printf("November - 30 days"); break;\n    case 12: printf("December - 31 days"); break;\n    default: printf("Invalid month");\n}',
    hint: 'Break after each case'
  },
  {
    id: 'c_break_continue_69',
    topicId: 'c_break_continue',
    question: 'Write a program to evaluate mathematical expressions using switch.',
    mathSolution: 'Simple calculator with +,-,*,/,% operations',
    codeSolution: 'int a, b, result;\nchar op;\nprintf("Enter expression (e.g., 5 + 3): ");\nscanf("%d %c %d", &a, &op, &b);\nswitch(op) {\n    case \'+\': result = a+b; break;\n    case \'-\': result = a-b; break;\n    case \'*\': result = a*b; break;\n    case \'/\': result = a/b; break;\n    case \'%\': result = a%b; break;\n    default: printf("Invalid operator"); return 0;\n}\nprintf("Result = %d", result);',
    hint: 'Use break after each case'
  },
  {
    id: 'c_break_continue_70',
    topicId: 'c_break_continue',
    question: 'Write a program with switch inside loop, using break to exit loop on certain choice.',
    mathSolution: 'Menu-driven program that runs until user chooses exit',
    codeSolution: 'int choice;\nwhile(1) {\n    printf("\\n1. Print Hello\\n2. Print Hi\\n3. Exit\\nChoice: ");\n    scanf("%d", &choice);\n    switch(choice) {\n        case 1: printf("Hello"); break;\n        case 2: printf("Hi"); break;\n        case 3: printf("Goodbye!"); return 0;\n        default: printf("Invalid");\n    }\n}',
    hint: 'Use return or break with flag to exit loop'
  },

  // ==================== BREAK AND CONTINUE TOGETHER (71-85) ====================
  {
    id: 'c_break_continue_71',
    topicId: 'c_break_continue',
    question: 'Use both break and continue in a loop to process numbers until negative, skipping zeros.',
    mathSolution: 'Numbers: 5,0,3,-1,2 → processes 5,3 then stops',
    codeSolution: 'int num;\nwhile(1) {\n    printf("Enter number: ");\n    scanf("%d", &num);\n    if(num < 0) {\n        break;\n    }\n    if(num == 0) {\n        continue;\n    }\n    printf("Processing %d\\n", num);\n}',
    hint: 'Continue skips zeros, break exits on negative'
  },
  {
    id: 'c_break_continue_72',
    topicId: 'c_break_continue',
    question: 'Find first 5 prime numbers using continue and break appropriately.',
    mathSolution: 'First 5 primes: 2,3,5,7,11',
    codeSolution: 'int count=0;\nfor(int i=2; count<5; i++) {\n    int is_prime=1;\n    for(int j=2; j<=i/2; j++) {\n        if(i%j == 0) {\n            is_prime=0;\n            break;\n        }\n    }\n    if(!is_prime) {\n        continue;\n    }\n    printf("%d ", i);\n    count++;\n}',
    hint: 'Continue skips non-primes, outer loop breaks when count reaches 5'
  },
  {
    id: 'c_break_continue_73',
    topicId: 'c_break_continue',
    question: 'Process array elements but skip negatives and stop if sum exceeds 100.',
    mathSolution: 'Array [50,30,-10,40,20] → sums 50,80 then stops at 40 (120>100)',
    codeSolution: 'int arr[] = {50,30,-10,40,20};\nint sum=0;\nfor(int i=0; i<5; i++) {\n    if(arr[i] < 0) {\n        continue;\n    }\n    sum += arr[i];\n    if(sum > 100) {\n        printf("Sum exceeded 100 at index %d", i);\n        break;\n    }\n}',
    hint: 'Use continue to skip negatives, break when sum > 100'
  },
  {
    id: 'c_break_continue_74',
    topicId: 'c_break_continue',
    question: 'Read integers until EOF, skip multiples of 5, and break if number is 99.',
    mathSolution: 'Input: 3,10,7,15,99 → prints 3,7 (10 and 15 skipped) then stops',
    codeSolution: 'int num;\nwhile(scanf("%d", &num) != EOF) {\n    if(num == 99) {\n        printf("\\nEncountered 99, stopping");\n        break;\n    }\n    if(num % 5 == 0) {\n        continue;\n    }\n    printf("%d ", num);\n}',
    hint: 'Check for EOF in while condition'
  },
  {
    id: 'c_break_continue_75',
    topicId: 'c_break_continue',
    question: 'Find first number that is both prime and palindrome between 1-1000, using break and continue.',
    mathSolution: 'First prime palindrome: 2,3,5,7,11 → 11 is first',
    codeSolution: 'for(int i=2; i<=1000; i++) {\n    int is_prime=1;\n    for(int j=2; j<=i/2; j++) {\n        if(i%j == 0) {\n            is_prime=0;\n            break;\n        }\n    }\n    if(!is_prime) {\n        continue;\n    }\n    int num=i, rev=0, temp=i;\n    while(temp>0) {\n        rev = rev*10 + temp%10;\n        temp/=10;\n    }\n    if(rev == i) {\n        printf("First prime palindrome: %d", i);\n        break;\n    }\n}',
    hint: 'Continue if not prime, break when found prime palindrome'
  },
  {
    id: 'c_break_continue_76',
    topicId: 'c_break_continue',
    question: 'Process string, skip spaces, break if vowel encountered.',
    mathSolution: 'String "Hello World" processes: H l l (stops at e)',
    codeSolution: 'char str[] = "Hello World";\nfor(int i=0; str[i]!=\'\\0\'; i++) {\n    char ch = tolower(str[i]);\n    if(ch == \' \') {\n        continue;\n    }\n    if(ch==\'a\'||ch==\'e\'||ch==\'i\'||ch==\'o\'||ch==\'u\') {\n        printf("\\nVowel %c encountered, stopping", str[i]);\n        break;\n    }\n    printf("%c", str[i]);\n}',
    hint: 'Skip spaces with continue, break on vowels'
  },
  {
    id: 'c_break_continue_77',
    topicId: 'c_break_continue',
    question: 'Generate Fibonacci series, skip numbers divisible by 3, stop when number exceeds 1000.',
    mathSolution: 'Fibonacci: 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597 → skip 3,21,144, stop at 1597',
    codeSolution: 'int a=0, b=1, c;\nprintf("%d %d ", a, b);\nwhile(1) {\n    c = a+b;\n    if(c > 1000) {\n        printf("\\nExceeded 1000, stopping");\n        break;\n    }\n    if(c%3 == 0) {\n        a = b;\n        b = c;\n        continue;\n    }\n    printf("%d ", c);\n    a = b;\n    b = c;\n}',
    hint: 'Continue skips multiples of 3, break when >1000'
  },
  {
    id: 'c_break_continue_78',
    topicId: 'c_break_continue',
    question: 'Read numbers from user, calculate running average, skip negatives, stop when average > 50.',
    mathSolution: 'Input: 40,60,-10,70 → avg: 40,50, stop at 70 (avg 56.7)',
    codeSolution: 'int num, sum=0, count=0;\nwhile(1) {\n    printf("Enter number: ");\n    scanf("%d", &num);\n    if(num < 0) {\n        printf("Negative skipped\\n");\n        continue;\n    }\n    sum += num;\n    count++;\n    float avg = (float)sum/count;\n    printf("Current average: %.2f\\n", avg);\n    if(avg > 50) {\n        printf("Average exceeded 50, stopping");\n        break;\n    }\n}',
    hint: 'Continue skips negatives, break when average > 50'
  },
  {
    id: 'c_break_continue_79',
    topicId: 'c_break_continue',
    question: 'Search for a substring in a string, skip spaces, stop when found.',
    mathSolution: 'String "Hello World", search "World" → skip spaces, found at index 6',
    codeSolution: 'char str[] = "Hello World";\nchar search[] = "World";\nint found = -1;\nfor(int i=0; str[i]!=\'\\0\'; i++) {\n    if(str[i] == \' \') {\n        continue;\n    }\n    int j;\n    for(j=0; search[j]!=\'\\0\' && str[i+j]!=\'\\0\'; j++) {\n        if(str[i+j] != search[j]) {\n            break;\n        }\n    }\n    if(search[j] == \'\\0\') {\n        found = i;\n        break;\n    }\n}\nif(found != -1) printf("Found at index %d", found);',
    hint: 'Continue skips spaces, break inner loop on mismatch, break outer when found'
  },
  {
    id: 'c_break_continue_80',
    topicId: 'c_break_continue',
    question: 'Find first number that is divisible by sum of its digits, skip if number has zero digit.',
    mathSolution: 'Numbers: 10 (1+0=1, divisible), 11(2 not div),12(3 div), but 10 has zero digit skip, first is 12',
    codeSolution: 'for(int i=10; ; i++) {\n    int num=i, sum=0, has_zero=0;\n    while(num>0) {\n        int digit = num%10;\n        if(digit == 0) {\n            has_zero=1;\n            break;\n        }\n        sum += digit;\n        num/=10;\n    }\n    if(has_zero) {\n        continue;\n    }\n    if(i % sum == 0) {\n        printf("First number: %d", i);\n        break;\n    }\n}',
    hint: 'Continue if number has zero digit, break when condition met'
  },
  {
    id: 'c_break_continue_81',
    topicId: 'c_break_continue',
    question: 'Process a 2D matrix, skip rows with negative numbers, stop when found a perfect square.',
    mathSolution: 'Matrix [[4,7,9],[-1,5,6],[16,8,10]] → skip row1, stop at 16',
    codeSolution: 'int matrix[3][3] = {{4,7,9},{-1,5,6},{16,8,10}};\nfor(int i=0; i<3; i++) {\n    int has_negative = 0;\n    for(int j=0; j<3; j++) {\n        if(matrix[i][j] < 0) {\n            has_negative = 1;\n            break;\n        }\n    }\n    if(has_negative) {\n        printf("Row %d has negative, skipping\\n", i);\n        continue;\n    }\n    for(int j=0; j<3; j++) {\n        int root = sqrt(matrix[i][j]);\n        if(root*root == matrix[i][j]) {\n            printf("Perfect square %d found at [%d][%d]", matrix[i][j], i, j);\n            return 0;\n        }\n    }\n}',
    hint: 'Continue skips rows with negatives, break entire program when perfect square found'
  },
  {
    id: 'c_break_continue_82',
    topicId: 'c_break_continue',
    question: 'Read integers until user enters 0, calculate product, skip if number is prime.',
    mathSolution: 'Input: 4,7,3,0 → product: 4 (skip 7 and 3)',
    codeSolution: 'int num, product=1;\nwhile(1) {\n    printf("Enter number (0 to stop): ");\n    scanf("%d", &num);\n    if(num == 0) {\n        break;\n    }\n    int is_prime=1;\n    if(num < 2) is_prime=0;\n    for(int i=2; i<=num/2; i++) {\n        if(num%i == 0) {\n            is_prime=0;\n            break;\n        }\n    }\n    if(is_prime) {\n        printf("%d is prime, skipping\\n", num);\n        continue;\n    }\n    product *= num;\n    printf("Current product: %d\\n", product);\n}',
    hint: 'Continue skips prime numbers, break when user enters 0'
  },
  {
    id: 'c_break_continue_83',
    topicId: 'c_break_continue',
    question: 'Find first 10 numbers that are divisible by 7 but not by 3, using continue and break.',
    mathSolution: 'Numbers divisible by 7: 7,14,21,28,35,42,49,56,63,70,77,84,... skip those divisible by 3 (21,42,63,84)',
    codeSolution: 'int count=0;\nfor(int i=7; count<10; i+=7) {\n    if(i%3 == 0) {\n        continue;\n    }\n    printf("%d ", i);\n    count++;\n}',
    hint: 'Continue skips multiples of 3, break when count reaches 10'
  },
  {
    id: 'c_break_continue_84',
    topicId: 'c_break_continue',
    question: 'Process a sentence, count words, skip punctuation, stop when word count reaches 5.',
    mathSolution: 'Sentence: "The quick brown fox jumps over the lazy dog" → stops after "jumps"',
    codeSolution: 'char str[] = "The quick brown fox jumps over the lazy dog";\nint word_count=0, in_word=0;\nfor(int i=0; str[i]!=\'\\0\'; i++) {\n    if(ispunct(str[i])) {\n        continue;\n    }\n    if(str[i] == \' \') {\n        in_word=0;\n    } else if(!in_word) {\n        in_word=1;\n        word_count++;\n        if(word_count == 5) {\n            printf("Reached 5 words, stopping");\n            break;\n        }\n    }\n}',
    hint: 'Continue skips punctuation, break when word count reaches 5'
  },
  {
    id: 'c_break_continue_85',
    topicId: 'c_break_continue',
    question: 'Generate numbers in Collatz sequence, skip odd steps, stop when reaches 1.',
    mathSolution: 'Start 6: 6(even)→3(odd skip),10(even),5(skip),16,8,4,2,1',
    codeSolution: 'int n=6;\nprintf("%d ", n);\nwhile(n != 1) {\n    if(n%2 == 0) {\n        n = n/2;\n    } else {\n        n = 3*n + 1;\n        continue;\n    }\n    printf("%d ", n);\n}',
    hint: 'Continue skips printing odd step results'
  },

  // ==================== ADVANCED BREAK/CONTINUE PROBLEMS (86-100) ====================
  {
    id: 'c_break_continue_86',
    topicId: 'c_break_continue',
    question: 'Use continue to skip spaces when counting characters in a string.',
    mathSolution: '"Hello World" has 10 characters (excluding space)',
    codeSolution: 'char str[] = "Hello World";\nint count=0;\nfor(int i=0; str[i]!=\'\\0\'; i++) {\n    if(str[i] == \' \') {\n        continue;\n    }\n    count++;\n}\nprintf("Characters (excluding spaces): %d", count);',
    hint: 'Continue when character is space'
  },
  {
    id: 'c_break_continue_87',
    topicId: 'c_break_continue',
    question: 'Break out of infinite loop when correct password is entered.',
    mathSolution: 'Keep asking until user enters "secret"',
    codeSolution: 'char password[20];\nwhile(1) {\n    printf("Enter password: ");\n    scanf("%s", password);\n    if(strcmp(password, "secret") == 0) {\n        printf("Access granted!\\n");\n        break;\n    }\n    printf("Wrong password. Try again.\\n");\n}',
    hint: 'Use strcmp to compare strings'
  },
  {
    id: 'c_break_continue_88',
    topicId: 'c_break_continue',
    question: 'Use continue to skip punctuation marks when counting letters.',
    mathSolution: '"Hello, World!" has 10 letters (H,e,l,l,o,W,o,r,l,d)',
    codeSolution: 'char str[] = "Hello, World!";\nint count=0;\nfor(int i=0; str[i]!=\'\\0\'; i++) {\n    char ch = str[i];\n    if(!((ch>=\'A\' && ch<=\'Z\') || (ch>=\'a\' && ch<=\'z\'))) {\n        continue;\n    }\n    count++;\n}\nprintf("Letters count: %d", count);',
    hint: 'Continue if character is not a letter'
  },
  {
    id: 'c_break_continue_89',
    topicId: 'c_break_continue',
    question: 'Break out of loop when array index reaches a value containing digit 5.',
    mathSolution: 'Array [10,20,35,40,50] stops at index 2 (35 contains 5)',
    codeSolution: 'int arr[] = {10,20,35,40,50};\nfor(int i=0; i<5; i++) {\n    int num=arr[i], has5=0;\n    while(num>0) {\n        if(num%10 == 5) {\n            has5=1;\n            break;\n        }\n        num/=10;\n    }\n    if(has5) {\n        printf("Stopped at index %d (value: %d)", i, arr[i]);\n        break;\n    }\n    printf("%d ", arr[i]);\n}',
    hint: 'Check each digit for 5'
  },
  {
    id: 'c_break_continue_90',
    topicId: 'c_break_continue',
    question: 'Use continue to skip numbers that are not perfect squares.',
    mathSolution: 'Numbers 1-20: perfect squares are 1,4,9,16',
    codeSolution: 'for(int i=1; i<=20; i++) {\n    int root = sqrt(i);\n    if(root*root != i) {\n        continue;\n    }\n    printf("%d ", i);\n}',
    hint: 'Check if number is perfect square, continue if not'
  },
  {
    id: 'c_break_continue_91',
    topicId: 'c_break_continue',
    question: 'Break when running total exceeds 100, using continue to skip invalid inputs.',
    mathSolution: 'Process: 30, 50, -10, 40 → sum: 30,80,120 stops at 40',
    codeSolution: 'int num, sum=0;\nwhile(sum <= 100) {\n    printf("Enter number: ");\n    scanf("%d", &num);\n    if(num < 0) {\n        printf("Negative skipped\\n");\n        continue;\n    }\n    sum += num;\n    if(sum > 100) {\n        printf("Sum exceeded 100. Final sum: %d", sum);\n        break;\n    }\n    printf("Current sum: %d\\n", sum);\n}',
    hint: 'Continue skips negatives, break when sum > 100'
  },
  {
    id: 'c_break_continue_92',
    topicId: 'c_break_continue',
    question: 'Find first occurrence of substring using break.',
    mathSolution: 'String "Hello World" find "World" → found at index 6',
    codeSolution: 'char str[] = "Hello World";\nchar sub[] = "World";\nint found=-1;\nfor(int i=0; str[i]!=\'\\0\'; i++) {\n    int j;\n    for(j=0; sub[j]!=\'\\0\' && str[i+j]!=\'\\0\'; j++) {\n        if(str[i+j] != sub[j]) {\n            break;\n        }\n    }\n    if(sub[j] == \'\\0\') {\n        found = i;\n        break;\n    }\n}\nif(found != -1) printf("Found at index %d", found);\nelse printf("Not found");',
    hint: 'Break inner loop on mismatch, break outer when found'
  },
  {
    id: 'c_break_continue_93',
    topicId: 'c_break_continue',
    question: 'Use continue to skip duplicate elements when printing unique elements.',
    mathSolution: 'Array [1,2,2,3,3,3,4] prints: 1 2 3 4',
    codeSolution: 'int arr[] = {1,2,2,3,3,3,4};\nint n=7;\nfor(int i=0; i<n; i++) {\n    int duplicate=0;\n    for(int j=0; j<i; j++) {\n        if(arr[i] == arr[j]) {\n            duplicate=1;\n            break;\n        }\n    }\n    if(duplicate) {\n        continue;\n    }\n    printf("%d ", arr[i]);\n}',
    hint: 'Check previous elements for duplicates'
  },
  {
    id: 'c_break_continue_94',
    topicId: 'c_break_continue',
    question: 'Break when encountering a number that is both even and divisible by 3.',
    mathSolution: 'Sequence: 1,3,5,6 → stops at 6',
    codeSolution: 'int arr[] = {1,3,5,6,7,9};\nfor(int i=0; i<6; i++) {\n    if(arr[i]%2==0 && arr[i]%3==0) {\n        printf("Found %d at index %d", arr[i], i);\n        break;\n    }\n    printf("%d ", arr[i]);\n}',
    hint: 'Check both conditions using && operator'
  },
  {
    id: 'c_break_continue_95',
    topicId: 'c_break_continue',
    question: 'Use continue to skip numbers that are palindromes in a range.',
    mathSolution: 'Range 10-30, skip 11,22 → prints others',
    codeSolution: 'for(int i=10; i<=30; i++) {\n    int num=i, rev=0, temp=i;\n    while(temp>0) {\n        rev = rev*10 + temp%10;\n        temp/=10;\n    }\n    if(rev == i) {\n        continue;\n    }\n    printf("%d ", i);\n}',
    hint: 'Check palindrome, continue if true'
  },
  {
    id: 'c_break_continue_96',
    topicId: 'c_break_continue',
    question: 'Break when product of numbers exceeds 1000, using continue to skip zeros.',
    mathSolution: 'Numbers: 10,20,0,5,10 → product: 10,200,200,1000 stops',
    codeSolution: 'int arr[] = {10,20,0,5,10};\nint product=1;\nfor(int i=0; i<5; i++) {\n    if(arr[i] == 0) {\n        continue;\n    }\n    product *= arr[i];\n    if(product > 1000) {\n        printf("Product exceeded 1000 at index %d", i);\n        break;\n    }\n    printf("Product: %d\\n", product);\n}',
    hint: 'Skip zeros with continue, break when product > 1000'
  },
  {
    id: 'c_break_continue_97',
    topicId: 'c_break_continue',
    question: 'Find first Armstrong number greater than 500 and break.',
    mathSolution: 'First Armstrong > 500 is 153? No, 153<500, next is 370,371,407',
    codeSolution: 'for(int i=500; ; i++) {\n    int num=i, sum=0, digits=0, temp=i;\n    while(temp>0) {\n        digits++;\n        temp/=10;\n    }\n    temp=i;\n    while(temp>0) {\n        int digit=temp%10, power=1;\n        for(int j=1; j<=digits; j++) {\n            power *= digit;\n        }\n        sum += power;\n        temp/=10;\n    }\n    if(sum == i) {\n        printf("First Armstrong > 500: %d", i);\n        break;\n    }\n}',
    hint: 'Check Armstrong condition, break when found'
  },
  {
    id: 'c_break_continue_98',
    topicId: 'c_break_continue',
    question: 'Use continue to skip rows with odd sum in a matrix.',
    mathSolution: 'Matrix [[1,2,3] sum6 even, [4,5,6] sum15 odd skip, [7,8,9] sum24 even]',
    codeSolution: 'int matrix[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\nfor(int i=0; i<3; i++) {\n    int row_sum=0;\n    for(int j=0; j<3; j++) {\n        row_sum += matrix[i][j];\n    }\n    if(row_sum % 2 != 0) {\n        printf("Row %d sum %d odd, skipping\\n", i, row_sum);\n        continue;\n    }\n    printf("Row %d: ", i);\n    for(int j=0; j<3; j++) {\n        printf("%d ", matrix[i][j]);\n    }\n    printf("(sum=%d)\\n", row_sum);\n}',
    hint: 'Calculate row sum, continue if odd'
  },
  {
    id: 'c_break_continue_99',
    topicId: 'c_break_continue',
    question: 'Find first number that is both Fibonacci and prime, using break and continue.',
    mathSolution: 'Fibonacci primes: 2,3,5,13,89,... first is 2',
    codeSolution: 'int a=0, b=1, c;\nwhile(1) {\n    c = a+b;\n    if(c > 100) break;\n    int is_prime=1;\n    if(c < 2) is_prime=0;\n    for(int i=2; i<=c/2; i++) {\n        if(c%i == 0) {\n            is_prime=0;\n            break;\n        }\n    }\n    if(!is_prime) {\n        a = b;\n        b = c;\n        continue;\n    }\n    printf("First Fibonacci prime: %d", c);\n    break;\n}',
    hint: 'Generate Fibonacci, check primality, continue if not prime, break when found'
  },
  {
    id: 'c_break_continue_100',
    topicId: 'c_break_continue',
    question: 'Process student grades, skip invalid (0-100), calculate average, stop when 5 valid grades entered.',
    mathSolution: 'Input: 85, 110, 75, -5, 90, 70 → valid: 85,75,90,70 (skip 110,-5), stop after 5 valid grades',
    codeSolution: 'int grade, valid_count=0, sum=0;\nwhile(valid_count < 5) {\n    printf("Enter grade (0-100): ");\n    scanf("%d", &grade);\n    if(grade < 0 || grade > 100) {\n        printf("Invalid grade, skipping\\n");\n        continue;\n    }\n    sum += grade;\n    valid_count++;\n    printf("Valid grade %d accepted. Count: %d\\n", grade, valid_count);\n}\nprintf("Average of 5 valid grades: %.2f", (float)sum/5);',
    hint: 'Continue skips invalid grades, break when 5 valid grades collected'
  }
);