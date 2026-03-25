QuizData.questions.push(
    // ============ LEVEL 1: FOR LOOP BASICS (1-15) ============
    {
      id: 'cs_loop_1',
      topicId: 'cs_loop',
      question: 'Write a for loop to print numbers 1 to 5.',
      mathSolution: 'Display the sequence 1, 2, 3, 4, 5 in order.',
      codeSolution: 'for(int i = 1; i <= 5; i++) {\n    Console.WriteLine(i);\n}',
      hint: 'Initialize i=1, condition i<=5, increment i++'
    },
    {
      id: 'cs_loop_2',
      topicId: 'cs_loop',
      question: 'Write a for loop to print numbers 0 to 4.',
      mathSolution: 'Display the sequence 0, 1, 2, 3, 4 in order.',
      codeSolution: 'for(int i = 0; i < 5; i++) {\n    Console.WriteLine(i);\n}',
      hint: 'Start from 0, condition i < 5'
    },
    {
      id: 'cs_loop_3',
      topicId: 'cs_loop',
      question: 'Write a for loop to print numbers from 10 down to 1.',
      mathSolution: 'Display the sequence 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 in descending order.',
      codeSolution: 'for(int i = 10; i >= 1; i--) {\n    Console.WriteLine(i);\n}',
      hint: 'Use i-- to decrement'
    },
    {
      id: 'cs_loop_4',
      topicId: 'cs_loop',
      question: 'Write a for loop to print even numbers from 2 to 10.',
      mathSolution: 'Display the even numbers: 2, 4, 6, 8, 10.',
      codeSolution: 'for(int i = 2; i <= 10; i += 2) {\n    Console.WriteLine(i);\n}',
      hint: 'Increment by 2'
    },
    {
      id: 'cs_loop_5',
      topicId: 'cs_loop',
      question: 'Write a for loop to print odd numbers from 1 to 9.',
      mathSolution: 'Display the odd numbers: 1, 3, 5, 7, 9.',
      codeSolution: 'for(int i = 1; i <= 9; i += 2) {\n    Console.WriteLine(i);\n}',
      hint: 'Start at 1, increment by 2'
    },
    {
      id: 'cs_loop_6',
      topicId: 'cs_loop',
      question: 'Write a for loop to calculate sum of numbers 1 to 10.',
      mathSolution: 'Add all numbers from 1 to 10: 1+2+3+4+5+6+7+8+9+10 = 55.',
      codeSolution: 'int sum = 0;\nfor(int i = 1; i <= 10; i++) {\n    sum += i;\n}\nConsole.WriteLine(sum);',
      hint: 'Add i to sum each iteration'
    },
    {
      id: 'cs_loop_7',
      topicId: 'cs_loop',
      question: 'Write a for loop to calculate factorial of 5 (5!).',
      mathSolution: 'Calculate 5! = 5 × 4 × 3 × 2 × 1 = 120.',
      codeSolution: 'int fact = 1;\nfor(int i = 1; i <= 5; i++) {\n    fact *= i;\n}\nConsole.WriteLine(fact);',
      hint: 'Multiply fact by i each time'
    },
    {
      id: 'cs_loop_8',
      topicId: 'cs_loop',
      question: 'Write a for loop to print multiplication table of 7.',
      mathSolution: 'Display 7 × 1 = 7, 7 × 2 = 14, up to 7 × 10 = 70.',
      codeSolution: 'for(int i = 1; i <= 10; i++) {\n    Console.WriteLine($"7 x {i} = {7 * i}");\n}',
      hint: 'Multiply 7 by i'
    },
    {
      id: 'cs_loop_9',
      topicId: 'cs_loop',
      question: 'Write a for loop to print all elements of an array int[] nums = {1,2,3,4,5}.',
      mathSolution: 'Access and display each element of the array [1,2,3,4,5].',
      codeSolution: 'int[] nums = {1,2,3,4,5};\nfor(int i = 0; i < nums.Length; i++) {\n    Console.WriteLine(nums[i]);\n}',
      hint: 'Use i as index'
    },
    {
      id: 'cs_loop_10',
      topicId: 'cs_loop',
      question: 'Write a for loop to find the largest number in int[] arr = {5,2,8,1,9}.',
      mathSolution: 'From the set {5,2,8,1,9}, identify the maximum value: 9.',
      codeSolution: 'int[] arr = {5,2,8,1,9};\nint max = arr[0];\nfor(int i = 1; i < arr.Length; i++) {\n    if(arr[i] > max) max = arr[i];\n}\nConsole.WriteLine(max);',
      hint: 'Compare each element with max'
    },
    {
      id: 'cs_loop_11',
      topicId: 'cs_loop',
      question: 'Write a for loop to count how many numbers in array are greater than 5.',
      mathSolution: 'In the set {2,6,3,8,4,9}, count elements greater than 5: 6,8,9 → 3 numbers.',
      codeSolution: 'int[] arr = {2,6,3,8,4,9};\nint count = 0;\nfor(int i = 0; i < arr.Length; i++) {\n    if(arr[i] > 5) count++;\n}\nConsole.WriteLine(count);',
      hint: 'Increment count when condition true'
    },
    {
      id: 'cs_loop_12',
      topicId: 'cs_loop',
      question: 'Write a for loop to reverse an array int[] arr = {1,2,3,4,5}.',
      mathSolution: 'Print the array elements in reverse order: 5,4,3,2,1.',
      codeSolution: 'int[] arr = {1,2,3,4,5};\nfor(int i = arr.Length-1; i >= 0; i--) {\n    Console.WriteLine(arr[i]);\n}',
      hint: 'Loop from last index to first'
    },
    {
      id: 'cs_loop_13',
      topicId: 'cs_loop',
      question: 'Write a for loop with multiple variables i and j.',
      mathSolution: 'Simultaneously increment i from 0 and decrement j from 10 until they meet.',
      codeSolution: 'for(int i=0, j=10; i<=j; i++, j--) {\n    Console.WriteLine($"i={i}, j={j}");\n}',
      hint: 'Separate multiple variables with commas'
    },
    {
      id: 'cs_loop_14',
      topicId: 'cs_loop',
      question: 'Write an infinite for loop.',
      mathSolution: 'Create a loop that would run forever without a break condition.',
      codeSolution: 'for(;;) {\n    Console.WriteLine("Infinite loop");\n    break; // Add break to exit\n}',
      hint: 'No condition means infinite'
    },
    {
      id: 'cs_loop_15',
      topicId: 'cs_loop',
      question: 'Write a for loop with no initialization (initialize outside).',
      mathSolution: 'Initialize the loop variable before the loop, but keep the condition and increment in the for statement.',
      codeSolution: 'int i = 0;\nfor(; i < 5; i++) {\n    Console.WriteLine(i);\n}',
      hint: 'Semicolon required even without init'
    },

    // ============ LEVEL 2: WHILE LOOP BASICS (16-30) ============
    {
      id: 'cs_loop_16',
      topicId: 'cs_loop',
      question: 'Write a while loop to print numbers 1 to 5.',
      mathSolution: 'Display the sequence 1,2,3,4,5 using a while loop.',
      codeSolution: 'int i = 1;\nwhile(i <= 5) {\n    Console.WriteLine(i);\n    i++;\n}',
      hint: 'Initialize before loop, increment inside'
    },
    {
      id: 'cs_loop_17',
      topicId: 'cs_loop',
      question: 'Write a while loop to print numbers 10 down to 1.',
      mathSolution: 'Display numbers in descending order from 10 to 1.',
      codeSolution: 'int i = 10;\nwhile(i >= 1) {\n    Console.WriteLine(i);\n    i--;\n}',
      hint: 'Decrement inside loop'
    },
    {
      id: 'cs_loop_18',
      topicId: 'cs_loop',
      question: 'Write a while loop to calculate sum of numbers 1 to 10.',
      mathSolution: 'Calculate 1+2+3+4+5+6+7+8+9+10 = 55 using a while loop.',
      codeSolution: 'int i = 1, sum = 0;\nwhile(i <= 10) {\n    sum += i;\n    i++;\n}\nConsole.WriteLine(sum);',
      hint: 'Add and increment'
    },
    {
      id: 'cs_loop_19',
      topicId: 'cs_loop',
      question: 'Write a while loop to find factorial of 6.',
      mathSolution: 'Calculate 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720.',
      codeSolution: 'int i = 1, fact = 1;\nwhile(i <= 6) {\n    fact *= i;\n    i++;\n}\nConsole.WriteLine(fact);',
      hint: 'Multiply fact by i'
    },
    {
      id: 'cs_loop_20',
      topicId: 'cs_loop',
      question: 'Write a while loop that keeps reading input until user enters "exit".',
      mathSolution: 'Repeatedly prompt for commands and process them until the user types "exit".',
      codeSolution: 'string input = "";\nwhile(input != "exit") {\n    Console.Write("Enter command: ");\n    input = Console.ReadLine();\n    Console.WriteLine($"You entered: {input}");\n}',
      hint: 'Check condition each iteration'
    },
    {
      id: 'cs_loop_21',
      topicId: 'cs_loop',
      question: 'Write a while loop to count digits in a number 12345.',
      mathSolution: 'Count how many digits are in 12345: 5 digits.',
      codeSolution: 'int num = 12345;\nint count = 0;\nwhile(num > 0) {\n    count++;\n    num /= 10;\n}\nConsole.WriteLine(count);',
      hint: 'Remove last digit each time'
    },
    {
      id: 'cs_loop_22',
      topicId: 'cs_loop',
      question: 'Write a while loop to reverse a number 1234.',
      mathSolution: 'Reverse 1234 to get 4321.',
      codeSolution: 'int num = 1234, reversed = 0;\nwhile(num > 0) {\n    int digit = num % 10;\n    reversed = reversed * 10 + digit;\n    num /= 10;\n}\nConsole.WriteLine(reversed);',
      hint: 'Build reversed number digit by digit'
    },
    {
      id: 'cs_loop_23',
      topicId: 'cs_loop',
      question: 'Write a while loop to check if a number 121 is palindrome.',
      mathSolution: '121 reads the same forwards and backwards, so it is a palindrome.',
      codeSolution: 'int num = 121, original = num, reversed = 0;\nwhile(num > 0) {\n    int digit = num % 10;\n    reversed = reversed * 10 + digit;\n    num /= 10;\n}\nbool isPalindrome = original == reversed;',
      hint: 'Compare original with reversed'
    },
    {
      id: 'cs_loop_24',
      topicId: 'cs_loop',
      question: 'Write a while loop to find sum of digits of number 123.',
      mathSolution: 'Add the digits of 123: 1 + 2 + 3 = 6.',
      codeSolution: 'int num = 123, sum = 0;\nwhile(num > 0) {\n    sum += num % 10;\n    num /= 10;\n}\nConsole.WriteLine(sum);',
      hint: 'Add last digit, remove it'
    },
    {
      id: 'cs_loop_25',
      topicId: 'cs_loop',
      question: 'Write a while loop to print Fibonacci series up to 10 terms.',
      mathSolution: 'Generate the first 10 Fibonacci numbers: 0,1,1,2,3,5,8,13,21,34.',
      codeSolution: 'int a = 0, b = 1, count = 0;\nwhile(count < 10) {\n    Console.WriteLine(a);\n    int next = a + b;\n    a = b;\n    b = next;\n    count++;\n}',
      hint: 'Each new term is sum of previous two'
    },
    {
      id: 'cs_loop_26',
      topicId: 'cs_loop',
      question: 'Write a while loop to find GCD of two numbers 48 and 18.',
      mathSolution: 'The greatest common divisor of 48 and 18 is 6.',
      codeSolution: 'int a = 48, b = 18;\nwhile(b != 0) {\n    int temp = b;\n    b = a % b;\n    a = temp;\n}\nConsole.WriteLine($"GCD: {a}");',
      hint: 'Euclidean algorithm'
    },
    {
      id: 'cs_loop_27',
      topicId: 'cs_loop',
      question: 'Write a while loop to find LCM of two numbers 12 and 18.',
      mathSolution: 'The least common multiple of 12 and 18 is 36.',
      codeSolution: 'int a = 12, b = 18, lcm = a > b ? a : b;\nwhile(true) {\n    if(lcm % a == 0 && lcm % b == 0) break;\n    lcm++;\n}\nConsole.WriteLine($"LCM: {lcm}");',
      hint: 'Find smallest number divisible by both'
    },
    {
      id: 'cs_loop_28',
      topicId: 'cs_loop',
      question: 'Write a while loop to print prime numbers between 1 and 20.',
      mathSolution: 'Identify and print prime numbers in the range 1-20: 2,3,5,7,11,13,17,19.',
      codeSolution: 'int num = 2;\nwhile(num <= 20) {\n    bool isPrime = true;\n    int i = 2;\n    while(i <= Math.Sqrt(num)) {\n        if(num % i == 0) {\n            isPrime = false;\n            break;\n        }\n        i++;\n    }\n    if(isPrime) Console.WriteLine(num);\n    num++;\n}',
      hint: 'Check divisibility up to square root'
    },
    {
      id: 'cs_loop_29',
      topicId: 'cs_loop',
      question: 'Write a while loop with break statement to stop at 5.',
      mathSolution: 'Count from 1 to 10 but stop when reaching 5, so only 1-4 are printed.',
      codeSolution: 'int i = 1;\nwhile(i <= 10) {\n    if(i == 5) break;\n    Console.WriteLine(i);\n    i++;\n}',
      hint: 'break exits loop immediately'
    },
    {
      id: 'cs_loop_30',
      topicId: 'cs_loop',
      question: 'Write a while loop with continue to skip even numbers.',
      mathSolution: 'Print only odd numbers from 1 to 10: 1,3,5,7,9.',
      codeSolution: 'int i = 1;\nwhile(i <= 10) {\n    if(i % 2 == 0) {\n        i++;\n        continue;\n    }\n    Console.WriteLine(i);\n    i++;\n}',
      hint: 'continue jumps to next iteration'
    },

    // ============ LEVEL 3: DO-WHILE LOOP BASICS (31-40) ============
    {
      id: 'cs_loop_31',
      topicId: 'cs_loop',
      question: 'Write a do-while loop to print numbers 1 to 5.',
      mathSolution: 'Print the sequence 1,2,3,4,5 using a do-while loop.',
      codeSolution: 'int i = 1;\ndo {\n    Console.WriteLine(i);\n    i++;\n} while(i <= 5);',
      hint: 'do-while executes at least once'
    },
    {
      id: 'cs_loop_32',
      topicId: 'cs_loop',
      question: 'Write a do-while loop that prints numbers from 10 down to 1.',
      mathSolution: 'Display numbers in descending order from 10 to 1.',
      codeSolution: 'int i = 10;\ndo {\n    Console.WriteLine(i);\n    i--;\n} while(i >= 1);',
      hint: 'Decrement inside loop'
    },
    {
      id: 'cs_loop_33',
      topicId: 'cs_loop',
      question: 'Write a do-while loop to calculate sum of 1 to 5.',
      mathSolution: 'Calculate 1+2+3+4+5 = 15 using a do-while loop.',
      codeSolution: 'int i = 1, sum = 0;\ndo {\n    sum += i;\n    i++;\n} while(i <= 5);\nConsole.WriteLine(sum);',
      hint: 'Add i to sum each iteration'
    },
    {
      id: 'cs_loop_34',
      topicId: 'cs_loop',
      question: 'Write a do-while loop that keeps asking for password until correct.',
      mathSolution: 'Repeatedly prompt for a password until the user enters "secret".',
      codeSolution: 'string password;\ndo {\n    Console.Write("Enter password: ");\n    password = Console.ReadLine();\n} while(password != "secret");\nConsole.WriteLine("Access granted");',
      hint: 'Loop until correct password'
    },
    {
      id: 'cs_loop_35',
      topicId: 'cs_loop',
      question: 'Write a do-while loop for a menu system (1-3 options).',
      mathSolution: 'Display a menu and process choices until the user selects exit (option 3).',
      codeSolution: 'int choice;\ndo {\n    Console.WriteLine("1. Option 1");\n    Console.WriteLine("2. Option 2");\n    Console.WriteLine("3. Exit");\n    Console.Write("Choice: ");\n    choice = int.Parse(Console.ReadLine());\n    switch(choice) {\n        case 1: Console.WriteLine("Option 1 selected"); break;\n        case 2: Console.WriteLine("Option 2 selected"); break;\n    }\n} while(choice != 3);',
      hint: 'Menu repeats until exit option'
    },
    {
      id: 'cs_loop_36',
      topicId: 'cs_loop',
      question: 'Write a do-while loop that rolls a die until you get 6.',
      mathSolution: 'Simulate rolling a die repeatedly until a 6 appears.',
      codeSolution: 'Random rand = new Random();\nint roll;\ndo {\n    roll = rand.Next(1, 7);\n    Console.WriteLine($"Rolled: {roll}");\n} while(roll != 6);\nConsole.WriteLine("Got a 6!");',
      hint: 'Loop continues until 6 appears'
    },
    {
      id: 'cs_loop_37',
      topicId: 'cs_loop',
      question: 'Write a do-while loop to validate user input (positive number).',
      mathSolution: 'Keep asking until the user enters a valid positive integer.',
      codeSolution: 'int num;\ndo {\n    Console.Write("Enter positive number: ");\n} while(!int.TryParse(Console.ReadLine(), out num) || num <= 0);\nConsole.WriteLine($"You entered: {num}");',
      hint: 'Repeat until valid positive input'
    },
    {
      id: 'cs_loop_38',
      topicId: 'cs_loop',
      question: 'Write a do-while loop to print even numbers from 2 to 10.',
      mathSolution: 'Print even numbers: 2,4,6,8,10.',
      codeSolution: 'int i = 2;\ndo {\n    Console.WriteLine(i);\n    i += 2;\n} while(i <= 10);',
      hint: 'Increment by 2'
    },
    {
      id: 'cs_loop_39',
      topicId: 'cs_loop',
      question: 'Write a do-while loop that runs at least once even if condition is false.',
      mathSolution: 'Demonstrate that do-while always executes the body at least once.',
      codeSolution: 'int i = 10;\ndo {\n    Console.WriteLine("This runs once");\n    i++;\n} while(i < 5);',
      hint: 'Condition checked after execution'
    },
    {
      id: 'cs_loop_40',
      topicId: 'cs_loop',
      question: 'Write a do-while loop to find first power of 2 greater than 100.',
      mathSolution: 'Find the smallest power of 2 that exceeds 100: 128.',
      codeSolution: 'int num = 1;\ndo {\n    num *= 2;\n} while(num <= 100);\nConsole.WriteLine(num);',
      hint: 'Multiply by 2 until exceeding 100'
    },

    // ============ LEVEL 4: FOREACH LOOP BASICS (41-50) ============
    {
      id: 'cs_loop_41',
      topicId: 'cs_loop',
      question: 'Write a foreach loop to print all elements in int[] nums = {1,2,3,4,5}.',
      mathSolution: 'Iterate through the array and display each element.',
      codeSolution: 'int[] nums = {1,2,3,4,5};\nforeach(int num in nums) {\n    Console.WriteLine(num);\n}',
      hint: 'foreach iterates over collections'
    },
    {
      id: 'cs_loop_42',
      topicId: 'cs_loop',
      question: 'Write a foreach loop to print all strings in string[] names = {"John","Jane","Bob"}.',
      mathSolution: 'Iterate through the array of names and display each one.',
      codeSolution: 'string[] names = {"John","Jane","Bob"};\nforeach(string name in names) {\n    Console.WriteLine(name);\n}',
      hint: 'Works with any array'
    },
    {
      id: 'cs_loop_43',
      topicId: 'cs_loop',
      question: 'Write a foreach loop to find sum of numbers in List<int> numbers = new List<int>{1,2,3,4,5}.',
      mathSolution: 'Add all numbers in the list: 1+2+3+4+5 = 15.',
      codeSolution: 'List<int> numbers = new List<int>{1,2,3,4,5};\nint sum = 0;\nforeach(int num in numbers) {\n    sum += num;\n}\nConsole.WriteLine(sum);',
      hint: 'foreach works with List too'
    },
    {
      id: 'cs_loop_44',
      topicId: 'cs_loop',
      question: 'Write a foreach loop to find largest number in int[] arr = {5,2,8,1,9}.',
      mathSolution: 'Find the maximum value in the set: 9.',
      codeSolution: 'int[] arr = {5,2,8,1,9};\nint max = arr[0];\nforeach(int num in arr) {\n    if(num > max) max = num;\n}\nConsole.WriteLine(max);',
      hint: 'Compare each element'
    },
    {
      id: 'cs_loop_45',
      topicId: 'cs_loop',
      question: 'Write a foreach loop to count vowels in a string "hello world".',
      mathSolution: 'Count the vowels (a,e,i,o,u) in "hello world": e,o,o → 3 vowels.',
      codeSolution: 'string text = "hello world";\nint count = 0;\nforeach(char ch in text) {\n    if("aeiouAEIOU".Contains(ch)) count++;\n}\nConsole.WriteLine(count);',
      hint: 'Check if char is vowel'
    },
    {
      id: 'cs_loop_46',
      topicId: 'cs_loop',
      question: 'Write a foreach loop to iterate over Dictionary<string,int> ages = new Dictionary<string,int>{{"John",25},{"Jane",30}}.',
      mathSolution: 'Loop through a dictionary and display each key-value pair.',
      codeSolution: 'Dictionary<string,int> ages = new Dictionary<string,int>{{"John",25},{"Jane",30}};\nforeach(KeyValuePair<string,int> kvp in ages) {\n    Console.WriteLine($"{kvp.Key}: {kvp.Value}");\n}',
      hint: 'Use KeyValuePair for dictionary'
    },
    {
      id: 'cs_loop_47',
      topicId: 'cs_loop',
      question: 'Write a foreach loop to iterate over keys of a dictionary.',
      mathSolution: 'Display just the keys (names) from the dictionary.',
      codeSolution: 'Dictionary<string,int> ages = new Dictionary<string,int>{{"John",25},{"Jane",30}};\nforeach(string key in ages.Keys) {\n    Console.WriteLine(key);\n}',
      hint: 'ages.Keys gives key collection'
    },
    {
      id: 'cs_loop_48',
      topicId: 'cs_loop',
      question: 'Write a foreach loop to iterate over values of a dictionary.',
      mathSolution: 'Display just the values (ages) from the dictionary.',
      codeSolution: 'Dictionary<string,int> ages = new Dictionary<string,int>{{"John",25},{"Jane",30}};\nforeach(int value in ages.Values) {\n    Console.WriteLine(value);\n}',
      hint: 'ages.Values gives value collection'
    },
    {
      id: 'cs_loop_49',
      topicId: 'cs_loop',
      question: 'Write a foreach loop to print characters in a string.',
      mathSolution: 'Display each character of "Hello" on a separate line.',
      codeSolution: 'string text = "Hello";\nforeach(char ch in text) {\n    Console.WriteLine(ch);\n}',
      hint: 'string implements IEnumerable'
    },
    {
      id: 'cs_loop_50',
      topicId: 'cs_loop',
      question: 'Write a foreach loop with multidimensional array (flattened).',
      mathSolution: 'Iterate through all elements of a 2x2 matrix in row-major order.',
      codeSolution: 'int[,] matrix = { {1,2}, {3,4} };\nforeach(int num in matrix) {\n    Console.WriteLine(num);\n}',
      hint: 'foreach flattens multidimensional arrays'
    },

    // ============ LEVEL 5: NESTED LOOPS (51-65) ============
    {
      id: 'cs_loop_51',
      topicId: 'cs_loop',
      question: 'Write nested for loops to print a 3x3 rectangle of stars.',
      mathSolution: 'Create a 3×3 grid of asterisks:\n* * *\n* * *\n* * *',
      codeSolution: 'for(int i = 0; i < 3; i++) {\n    for(int j = 0; j < 3; j++) {\n        Console.Write("* ");\n    }\n    Console.WriteLine();\n}',
      hint: 'Outer for rows, inner for columns'
    },
    {
      id: 'cs_loop_52',
      topicId: 'cs_loop',
      question: 'Write nested loops to print a right triangle of stars with height 5.',
      mathSolution: 'Create a right triangle:\n*\n* *\n* * *\n* * * *\n* * * * *',
      codeSolution: 'for(int i = 1; i <= 5; i++) {\n    for(int j = 1; j <= i; j++) {\n        Console.Write("* ");\n    }\n    Console.WriteLine();\n}',
      hint: 'Inner loop runs i times'
    },
    {
      id: 'cs_loop_53',
      topicId: 'cs_loop',
      question: 'Write nested loops to print an inverted right triangle with height 5.',
      mathSolution: 'Create an inverted triangle:\n* * * * *\n* * * *\n* * *\n* *\n*',
      codeSolution: 'for(int i = 5; i >= 1; i--) {\n    for(int j = 1; j <= i; j++) {\n        Console.Write("* ");\n    }\n    Console.WriteLine();\n}',
      hint: 'Start from 5 down to 1'
    },
    {
      id: 'cs_loop_54',
      topicId: 'cs_loop',
      question: 'Write nested loops to print a pyramid of stars with height 5.',
      mathSolution: 'Create a centered pyramid:\n    *\n   ***\n  *****\n *******\n*********',
      codeSolution: 'int height = 5;\nfor(int i = 1; i <= height; i++) {\n    for(int j = 1; j <= height - i; j++) {\n        Console.Write(" ");\n    }\n    for(int k = 1; k <= 2*i - 1; k++) {\n        Console.Write("*");\n    }\n    Console.WriteLine();\n}',
      hint: 'Spaces then stars'
    },
    {
      id: 'cs_loop_55',
      topicId: 'cs_loop',
      question: 'Write nested loops to print a number pattern: 1, 12, 123, 1234.',
      mathSolution: 'Print:\n1\n12\n123\n1234',
      codeSolution: 'for(int i = 1; i <= 4; i++) {\n    for(int j = 1; j <= i; j++) {\n        Console.Write(j);\n    }\n    Console.WriteLine();\n}',
      hint: 'Print j instead of star'
    },
    {
      id: 'cs_loop_56',
      topicId: 'cs_loop',
      question: 'Write nested loops to print a multiplication table (1-5).',
      mathSolution: 'Create a 5×5 multiplication table.',
      codeSolution: 'for(int i = 1; i <= 5; i++) {\n    for(int j = 1; j <= 5; j++) {\n        Console.Write($"{i * j,4}");\n    }\n    Console.WriteLine();\n}',
      hint: 'Multiply i and j'
    },
    {
      id: 'cs_loop_57',
      topicId: 'cs_loop',
      question: 'Write nested loops to iterate over 2D array int[,] matrix = {{1,2},{3,4}}.',
      mathSolution: 'Traverse a 2×2 matrix row by row: (0,0)=1, (0,1)=2, (1,0)=3, (1,1)=4.',
      codeSolution: 'int[,] matrix = {{1,2},{3,4}};\nfor(int i = 0; i < matrix.GetLength(0); i++) {\n    for(int j = 0; j < matrix.GetLength(1); j++) {\n        Console.Write($"{matrix[i,j]} ");\n    }\n    Console.WriteLine();\n}',
      hint: 'GetLength(0) rows, GetLength(1) cols'
    },
    {
      id: 'cs_loop_58',
      topicId: 'cs_loop',
      question: 'Write nested loops to find sum of all elements in 2D array.',
      mathSolution: 'Sum all elements in a 3×2 matrix: 1+2+3+4+5+6 = 21.',
      codeSolution: 'int[,] matrix = {{1,2},{3,4},{5,6}};\nint sum = 0;\nfor(int i = 0; i < matrix.GetLength(0); i++) {\n    for(int j = 0; j < matrix.GetLength(1); j++) {\n        sum += matrix[i,j];\n    }\n}\nConsole.WriteLine(sum);',
      hint: 'Add each element to sum'
    },
    {
      id: 'cs_loop_59',
      topicId: 'cs_loop',
      question: 'Write nested loops to print prime numbers from 2 to 20.',
      mathSolution: 'Find all primes between 2 and 20: 2,3,5,7,11,13,17,19.',
      codeSolution: 'for(int num = 2; num <= 20; num++) {\n    bool isPrime = true;\n    for(int i = 2; i <= Math.Sqrt(num); i++) {\n        if(num % i == 0) {\n            isPrime = false;\n            break;\n        }\n    }\n    if(isPrime) Console.WriteLine(num);\n}',
      hint: 'Inner loop checks divisibility'
    },
    {
      id: 'cs_loop_60',
      topicId: 'cs_loop',
      question: 'Write nested loops to print a diamond pattern with height 5.',
      mathSolution: 'Create a diamond shape:\n    *\n   ***\n  *****\n *******\n*********\n *******\n  *****\n   ***\n    *',
      codeSolution: 'int n = 5;\nfor(int i = 1; i <= n; i++) {\n    for(int j = 1; j <= n-i; j++) Console.Write(" ");\n    for(int k = 1; k <= 2*i-1; k++) Console.Write("*");\n    Console.WriteLine();\n}\nfor(int i = n-1; i >= 1; i--) {\n    for(int j = 1; j <= n-i; j++) Console.Write(" ");\n    for(int k = 1; k <= 2*i-1; k++) Console.Write("*");\n    Console.WriteLine();\n}',
      hint: 'Pyramid + inverted pyramid'
    },
    {
      id: 'cs_loop_61',
      topicId: 'cs_loop',
      question: 'Write nested loops with break in inner loop.',
      mathSolution: 'Demonstrate that break only exits the inner loop, not the outer loop.',
      codeSolution: 'for(int i = 1; i <= 3; i++) {\n    for(int j = 1; j <= 3; j++) {\n        if(i == 2 && j == 2) break;\n        Console.WriteLine($"i={i}, j={j}");\n    }\n}',
      hint: 'break only exits inner loop'
    },
    {
      id: 'cs_loop_62',
      topicId: 'cs_loop',
      question: 'Write nested loops with continue in inner loop.',
      mathSolution: 'Demonstrate that continue skips to the next inner iteration, but outer loop continues.',
      codeSolution: 'for(int i = 1; i <= 3; i++) {\n    for(int j = 1; j <= 3; j++) {\n        if(j == 2) continue;\n        Console.WriteLine($"i={i}, j={j}");\n    }\n}',
      hint: 'continue skips to next inner iteration'
    },
    {
      id: 'cs_loop_63',
      topicId: 'cs_loop',
      question: 'Write nested loops to print Floyd\'s Triangle (1, 2 3, 4 5 6).',
      mathSolution: 'Print Floyd\'s triangle:\n1\n2 3\n4 5 6\n7 8 9 10',
      codeSolution: 'int num = 1;\nfor(int i = 1; i <= 4; i++) {\n    for(int j = 1; j <= i; j++) {\n        Console.Write($"{num} ");\n        num++;\n    }\n    Console.WriteLine();\n}',
      hint: 'Increment counter each print'
    },
    {
      id: 'cs_loop_64',
      topicId: 'cs_loop',
      question: 'Write nested loops to print Pascal\'s Triangle (up to 5 rows).',
      mathSolution: 'Print Pascal\'s triangle where each number is the sum of the two above.',
      codeSolution: 'int rows = 5;\nfor(int i = 0; i < rows; i++) {\n    int num = 1;\n    for(int j = 0; j < rows-i; j++) Console.Write(" ");\n    for(int j = 0; j <= i; j++) {\n        Console.Write($"{num} ");\n        num = num * (i - j) / (j + 1);\n    }\n    Console.WriteLine();\n}',
      hint: 'Use combination formula'
    },
    {
      id: 'cs_loop_65',
      topicId: 'cs_loop',
      question: 'Write nested loops to multiply two matrices.',
      mathSolution: 'Multiply two 2×2 matrices to get a result matrix.',
      codeSolution: 'int[,] a = {{1,2},{3,4}};\nint[,] b = {{5,6},{7,8}};\nint[,] result = new int[2,2];\nfor(int i = 0; i < 2; i++) {\n    for(int j = 0; j < 2; j++) {\n        for(int k = 0; k < 2; k++) {\n            result[i,j] += a[i,k] * b[k,j];\n        }\n    }\n}',
      hint: 'Triple nested loop for multiplication'
    },

    // ============ LEVEL 6: LOOP CONTROL STATEMENTS (66-75) ============
    {
      id: 'cs_loop_66',
      topicId: 'cs_loop',
      question: 'Write a loop with break to stop when number 5 is found in array.',
      mathSolution: 'Search [1,3,5,7,9] and stop when 5 is found at index 2.',
      codeSolution: 'int[] arr = {1,3,5,7,9};\nfor(int i = 0; i < arr.Length; i++) {\n    if(arr[i] == 5) {\n        Console.WriteLine("Found 5 at index " + i);\n        break;\n    }\n}',
      hint: 'break exits loop when found'
    },
    {
      id: 'cs_loop_67',
      topicId: 'cs_loop',
      question: 'Write a loop with continue to print only odd numbers from 1 to 10.',
      mathSolution: 'Print odd numbers: 1,3,5,7,9.',
      codeSolution: 'for(int i = 1; i <= 10; i++) {\n    if(i % 2 == 0) continue;\n    Console.WriteLine(i);\n}',
      hint: 'continue skips even numbers'
    },
    {
      id: 'cs_loop_68',
      topicId: 'cs_loop',
      question: 'Write a loop with goto to exit nested loops.',
      mathSolution: 'Use goto to break out of both inner and outer loops at once.',
      codeSolution: 'for(int i = 1; i <= 3; i++) {\n    for(int j = 1; j <= 3; j++) {\n        if(i == 2 && j == 2) goto End;\n        Console.WriteLine($"i={i}, j={j}");\n    }\n}\nEnd: Console.WriteLine("Exited loops");',
      hint: 'goto jumps to label'
    },
    {
      id: 'cs_loop_69',
      topicId: 'cs_loop',
      question: 'Write an infinite loop with break condition inside.',
      mathSolution: 'Create a loop that would run forever but breaks when a condition is met.',
      codeSolution: 'int i = 1;\nwhile(true) {\n    Console.WriteLine(i);\n    if(i >= 5) break;\n    i++;\n}',
      hint: 'while(true) creates infinite loop'
    },
    {
      id: 'cs_loop_70',
      topicId: 'cs_loop',
      question: 'Write a loop with return to exit method early.',
      mathSolution: 'Exit the entire method immediately when the target number is found.',
      codeSolution: 'static void FindNumber() {\n    int[] arr = {1,2,3,4,5};\n    for(int i = 0; i < arr.Length; i++) {\n        if(arr[i] == 3) {\n            Console.WriteLine("Found");\n            return;\n        }\n    }\n    Console.WriteLine("Not found");\n}',
      hint: 'return exits the entire method'
    },
    {
      id: 'cs_loop_71',
      topicId: 'cs_loop',
      question: 'Write a loop with continue to skip vowels in a string.',
      mathSolution: 'Print "hello world" with vowels removed: "hll wrld".',
      codeSolution: 'string text = "hello world";\nforeach(char ch in text) {\n    if("aeiou".Contains(ch)) continue;\n    Console.Write(ch);\n}',
      hint: 'continue skips vowels'
    },
    {
      id: 'cs_loop_72',
      topicId: 'cs_loop',
      question: 'Write a loop with break to stop at first negative number.',
      mathSolution: 'In [5,3,8,-1,4,9], stop processing when -1 is encountered.',
      codeSolution: 'int[] nums = {5,3,8,-1,4,9};\nfor(int i = 0; i < nums.Length; i++) {\n    if(nums[i] < 0) break;\n    Console.WriteLine(nums[i]);\n}',
      hint: 'Stop processing when negative found'
    },
    {
      id: 'cs_loop_73',
      topicId: 'cs_loop',
      question: 'Write a loop with continue to skip numbers divisible by 3.',
      mathSolution: 'Print numbers 1-10 except those divisible by 3: 1,2,4,5,7,8,10.',
      codeSolution: 'for(int i = 1; i <= 10; i++) {\n    if(i % 3 == 0) continue;\n    Console.WriteLine(i);\n}',
      hint: 'Skip multiples of 3'
    },
    {
      id: 'cs_loop_74',
      topicId: 'cs_loop',
      question: 'Write a nested loop with labeled break (using goto).',
      mathSolution: 'Use goto to break out of all nested loops at once when a condition is met.',
      codeSolution: 'for(int i = 1; i <= 3; i++) {\n    for(int j = 1; j <= 3; j++) {\n        if(i == 2 && j == 2) goto OuterEnd;\n        Console.WriteLine($"i={i}, j={j}");\n    }\n}\nOuterEnd: Console.WriteLine("Done");',
      hint: 'goto can break out of all loops'
    },
    {
      id: 'cs_loop_75',
      topicId: 'cs_loop',
      question: 'Write a loop that uses break and continue together.',
      mathSolution: 'Print odd numbers until reaching 7: 1,3,5 (stop at 7).',
      codeSolution: 'for(int i = 1; i <= 10; i++) {\n    if(i == 7) break;\n    if(i % 2 == 0) continue;\n    Console.WriteLine(i);\n} // Prints 1,3,5',
      hint: 'continue for evens, break at 7'
    },

    // ============ LEVEL 7: ADVANCED LOOP PATTERNS (76-90) ============
    {
      id: 'cs_loop_76',
      topicId: 'cs_loop',
      question: 'Write a loop to implement binary search on sorted array.',
      mathSolution: 'Find the position of 23 in [2,5,8,12,16,23,38,45] using binary search (index 5).',
      codeSolution: 'int[] arr = {2,5,8,12,16,23,38,45};\nint target = 23;\nint left = 0, right = arr.Length-1;\nwhile(left <= right) {\n    int mid = (left + right) / 2;\n    if(arr[mid] == target) {\n        Console.WriteLine($"Found at {mid}");\n        break;\n    }\n    if(arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n}',
      hint: 'Divide and conquer search'
    },
    {
      id: 'cs_loop_77',
      topicId: 'cs_loop',
      question: 'Write a loop to implement bubble sort.',
      mathSolution: 'Sort [64,34,25,12,22,11,90] into ascending order using bubble sort.',
      codeSolution: 'int[] arr = {64, 34, 25, 12, 22, 11, 90};\nfor(int i = 0; i < arr.Length-1; i++) {\n    for(int j = 0; j < arr.Length-i-1; j++) {\n        if(arr[j] > arr[j+1]) {\n            int temp = arr[j];\n            arr[j] = arr[j+1];\n            arr[j+1] = temp;\n        }\n    }\n}',
      hint: 'Compare adjacent elements'
    },
    {
      id: 'cs_loop_78',
      topicId: 'cs_loop',
      question: 'Write a loop to implement selection sort.',
      mathSolution: 'Sort [64,25,12,22,11] by repeatedly selecting the minimum element.',
      codeSolution: 'int[] arr = {64, 25, 12, 22, 11};\nfor(int i = 0; i < arr.Length-1; i++) {\n    int minIndex = i;\n    for(int j = i+1; j < arr.Length; j++) {\n        if(arr[j] < arr[minIndex]) minIndex = j;\n    }\n    int temp = arr[minIndex];\n    arr[minIndex] = arr[i];\n    arr[i] = temp;\n}',
      hint: 'Find minimum and swap'
    },
    {
      id: 'cs_loop_79',
      topicId: 'cs_loop',
      question: 'Write a loop to implement insertion sort.',
      mathSolution: 'Sort [12,11,13,5,6] by inserting each element into its correct position.',
      codeSolution: 'int[] arr = {12, 11, 13, 5, 6};\nfor(int i = 1; i < arr.Length; i++) {\n    int key = arr[i];\n    int j = i-1;\n    while(j >= 0 && arr[j] > key) {\n        arr[j+1] = arr[j];\n        j--;\n    }\n    arr[j+1] = key;\n}',
      hint: 'Insert element in sorted portion'
    },
    {
      id: 'cs_loop_80',
      topicId: 'cs_loop',
      question: 'Write a loop to generate Fibonacci series up to n terms using array.',
      mathSolution: 'Generate first 10 Fibonacci numbers: 0,1,1,2,3,5,8,13,21,34.',
      codeSolution: 'int n = 10;\nint[] fib = new int[n];\nfib[0] = 0; fib[1] = 1;\nfor(int i = 2; i < n; i++) {\n    fib[i] = fib[i-1] + fib[i-2];\n}\nforeach(int num in fib) Console.WriteLine(num);',
      hint: 'Each term is sum of previous two'
    },
    {
      id: 'cs_loop_81',
      topicId: 'cs_loop',
      question: 'Write a loop to find all pairs in array that sum to target value.',
      mathSolution: 'Find all pairs in [2,7,4,1,5,3] that sum to 6: (2,4) and (1,5).',
      codeSolution: 'int[] arr = {2,7,4,1,5,3};\nint target = 6;\nfor(int i = 0; i < arr.Length; i++) {\n    for(int j = i+1; j < arr.Length; j++) {\n        if(arr[i] + arr[j] == target) {\n            Console.WriteLine($"({arr[i]},{arr[j]})");\n        }\n    }\n}',
      hint: 'Check all combinations'
    },
    {
      id: 'cs_loop_82',
      topicId: 'cs_loop',
      question: 'Write a loop to remove duplicates from sorted array.',
      mathSolution: 'Remove duplicates from [1,1,2,2,2,3,4,4,5] to get [1,2,3,4,5].',
      codeSolution: 'int[] arr = {1,1,2,2,2,3,4,4,5};\nint j = 0;\nfor(int i = 0; i < arr.Length-1; i++) {\n    if(arr[i] != arr[i+1]) {\n        arr[j++] = arr[i];\n    }\n}\narr[j++] = arr[arr.Length-1];\n// First j elements are unique',
      hint: 'Keep unique elements'
    },
    {
      id: 'cs_loop_83',
      topicId: 'cs_loop',
      question: 'Write a loop to rotate array left by k positions.',
      mathSolution: 'Rotate [1,2,3,4,5,6,7] left by 3 positions to get [4,5,6,7,1,2,3].',
      codeSolution: 'int[] arr = {1,2,3,4,5,6,7};\nint k = 3;\nk = k % arr.Length;\nint[] temp = new int[k];\nfor(int i = 0; i < k; i++) temp[i] = arr[i];\nfor(int i = k; i < arr.Length; i++) arr[i-k] = arr[i];\nfor(int i = 0; i < k; i++) arr[arr.Length-k+i] = temp[i];',
      hint: 'Store first k, shift, place back'
    },
    {
      id: 'cs_loop_84',
      topicId: 'cs_loop',
      question: 'Write a loop to find majority element (appears more than n/2 times).',
      mathSolution: 'In [3,3,4,2,4,4,2,4,4], 4 appears 5 times (more than half) and is the majority.',
      codeSolution: 'int[] arr = {3,3,4,2,4,4,2,4,4};\nint candidate = arr[0], count = 1;\nfor(int i = 1; i < arr.Length; i++) {\n    if(arr[i] == candidate) count++;\n    else count--;\n    if(count == 0) {\n        candidate = arr[i];\n        count = 1;\n    }\n}',
      hint: 'Moore\'s Voting Algorithm'
    },
    {
      id: 'cs_loop_85',
      topicId: 'cs_loop',
      question: 'Write a loop to find maximum subarray sum (Kadane\'s Algorithm).',
      mathSolution: 'In [-2,1,-3,4,-1,2,1,-5,4], the maximum subarray sum is 6 from [4,-1,2,1].',
      codeSolution: 'int[] arr = {-2,1,-3,4,-1,2,1,-5,4};\nint maxSoFar = arr[0], maxEnding = arr[0];\nfor(int i = 1; i < arr.Length; i++) {\n    maxEnding = Math.Max(arr[i], maxEnding + arr[i]);\n    maxSoFar = Math.Max(maxSoFar, maxEnding);\n}\nConsole.WriteLine(maxSoFar);',
      hint: 'Keep running sum, reset if negative'
    },
    {
      id: 'cs_loop_86',
      topicId: 'cs_loop',
      question: 'Write a loop to merge two sorted arrays.',
      mathSolution: 'Merge [1,3,5,7] and [2,4,6,8] into [1,2,3,4,5,6,7,8].',
      codeSolution: 'int[] a = {1,3,5,7};\nint[] b = {2,4,6,8};\nint[] result = new int[a.Length + b.Length];\nint i=0, j=0, k=0;\nwhile(i < a.Length && j < b.Length) {\n    if(a[i] < b[j]) result[k++] = a[i++];\n    else result[k++] = b[j++];\n}\nwhile(i < a.Length) result[k++] = a[i++];\nwhile(j < b.Length) result[k++] = b[j++];',
      hint: 'Compare and add smaller element'
    },
    {
      id: 'cs_loop_87',
      topicId: 'cs_loop',
      question: 'Write a loop to find intersection of two arrays.',
      mathSolution: 'Find common elements between [1,2,3,4,5] and [3,4,5,6,7]: {3,4,5}.',
      codeSolution: 'int[] a = {1,2,3,4,5};\nint[] b = {3,4,5,6,7};\nList<int> intersection = new List<int>();\nforeach(int x in a) {\n    foreach(int y in b) {\n        if(x == y) {\n            intersection.Add(x);\n            break;\n        }\n    }\n}',
      hint: 'Find common elements'
    },
    {
      id: 'cs_loop_88',
      topicId: 'cs_loop',
      question: 'Write a loop to find first non-repeating character in string.',
      mathSolution: 'In "swiss", the first non-repeating character is "w".',
      codeSolution: 'string s = "swiss";\nfor(int i = 0; i < s.Length; i++) {\n    bool repeated = false;\n    for(int j = 0; j < s.Length; j++) {\n        if(i != j && s[i] == s[j]) {\n            repeated = true;\n            break;\n        }\n    }\n    if(!repeated) {\n        Console.WriteLine($"First non-repeating: {s[i]}");\n        break;\n    }\n}',
      hint: 'Check each character against all others'
    },
    {
      id: 'cs_loop_89',
      topicId: 'cs_loop',
      question: 'Write a loop to print all subarrays of an array.',
      mathSolution: 'For [1,2,3], print all contiguous subarrays: [1],[1,2],[1,2,3],[2],[2,3],[3].',
      codeSolution: 'int[] arr = {1,2,3};\nfor(int i = 0; i < arr.Length; i++) {\n    for(int j = i; j < arr.Length; j++) {\n        for(int k = i; k <= j; k++) {\n            Console.Write(arr[k] + " ");\n        }\n        Console.WriteLine();\n    }\n}',
      hint: 'Triple nested loop for subarrays'
    },
    {
      id: 'cs_loop_90',
      topicId: 'cs_loop',
      question: 'Write a loop to implement matrix transpose.',
      mathSolution: 'Transpose a 2×3 matrix to a 3×2 matrix, swapping rows and columns.',
      codeSolution: 'int[,] matrix = {{1,2,3},{4,5,6}};\nint rows = matrix.GetLength(0);\nint cols = matrix.GetLength(1);\nint[,] transpose = new int[cols, rows];\nfor(int i = 0; i < rows; i++) {\n    for(int j = 0; j < cols; j++) {\n        transpose[j,i] = matrix[i,j];\n    }\n}',
      hint: 'Swap rows and columns'
    },

    // ============ LEVEL 8: CHALLENGING LOOP PROBLEMS (91-100) ============
    {
      id: 'cs_loop_91',
      topicId: 'cs_loop',
      question: 'Write a loop to print spiral order of matrix.',
      mathSolution: 'Traverse a 3×3 matrix in spiral order: 1,2,3,6,9,8,7,4,5.',
      codeSolution: 'int[,] matrix = {{1,2,3},{4,5,6},{7,8,9}};\nint top = 0, bottom = 2, left = 0, right = 2;\nwhile(top <= bottom && left <= right) {\n    for(int i = left; i <= right; i++) Console.Write(matrix[top,i] + " ");\n    top++;\n    for(int i = top; i <= bottom; i++) Console.Write(matrix[i,right] + " ");\n    right--;\n    if(top <= bottom) {\n        for(int i = right; i >= left; i--) Console.Write(matrix[bottom,i] + " ");\n        bottom--;\n    }\n    if(left <= right) {\n        for(int i = bottom; i >= top; i--) Console.Write(matrix[i,left] + " ");\n        left++;\n    }\n}',
      hint: 'Maintain boundaries'
    },
    {
      id: 'cs_loop_92',
      topicId: 'cs_loop',
      question: 'Write a loop to solve Josephus problem (n=7, k=3).',
      mathSolution: 'With 7 people and every 3rd eliminated, the survivor is person 4.',
      codeSolution: 'int n = 7, k = 3;\nList<int> people = new List<int>();\nfor(int i = 1; i <= n; i++) people.Add(i);\nint index = 0;\nwhile(people.Count > 1) {\n    index = (index + k - 1) % people.Count;\n    people.RemoveAt(index);\n}\nConsole.WriteLine($"Survivor: {people[0]}");',
      hint: 'Remove every k-th person'
    },
    {
      id: 'cs_loop_93',
      topicId: 'cs_loop',
      question: 'Write a loop to generate all permutations of a string "ABC".',
      mathSolution: 'Generate all permutations of ABC: ABC, ACB, BAC, BCA, CAB, CBA.',
      codeSolution: 'void Permute(string s, int l, int r) {\n    if(l == r) Console.WriteLine(s);\n    else {\n        for(int i = l; i <= r; i++) {\n            s = Swap(s, l, i);\n            Permute(s, l+1, r);\n            s = Swap(s, l, i);\n        }\n    }\n}\nstring Swap(string s, int i, int j) {\n    char[] arr = s.ToCharArray();\n    char temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;\n    return new string(arr);\n}\nPermute("ABC", 0, 2);',
      hint: 'Recursion with backtracking'
    },
    {
      id: 'cs_loop_94',
      topicId: 'cs_loop',
      question: 'Write a loop to implement Tower of Hanoi for 3 disks.',
      mathSolution: 'Solve Tower of Hanoi with 3 disks: A→C, A→B, C→B, A→C, B→A, B→C, A→C.',
      codeSolution: 'void TowerOfHanoi(int n, char from, char to, char aux) {\n    if(n == 1) {\n        Console.WriteLine($"Move disk 1 from {from} to {to}");\n        return;\n    }\n    TowerOfHanoi(n-1, from, aux, to);\n    Console.WriteLine($"Move disk {n} from {from} to {to}");\n    TowerOfHanoi(n-1, aux, to, from);\n}\nTowerOfHanoi(3, \'A\', \'C\', \'B\');',
      hint: 'Recursive solution'
    },
    {
      id: 'cs_loop_95',
      topicId: 'cs_loop',
      question: 'Write a loop to implement Sieve of Eratosthenes for primes up to 50.',
      mathSolution: 'Find all prime numbers up to 50 using the Sieve of Eratosthenes.',
      codeSolution: 'int n = 50;\nbool[] isPrime = new bool[n+1];\nfor(int i = 2; i <= n; i++) isPrime[i] = true;\nfor(int i = 2; i*i <= n; i++) {\n    if(isPrime[i]) {\n        for(int j = i*i; j <= n; j += i) {\n            isPrime[j] = false;\n        }\n    }\n}\nfor(int i = 2; i <= n; i++) if(isPrime[i]) Console.WriteLine(i);',
      hint: 'Mark multiples as non-prime'
    },
    {
      id: 'cs_loop_96',
      topicId: 'cs_loop',
      question: 'Write a loop to implement binary exponentiation (power of 2^10).',
      mathSolution: 'Calculate 2^10 = 1024 efficiently using binary exponentiation.',
      codeSolution: 'int a = 2, n = 10, result = 1;\nwhile(n > 0) {\n    if((n & 1) == 1) result *= a;\n    a *= a;\n    n >>= 1;\n}\nConsole.WriteLine(result);',
      hint: 'Exponentiation by squaring'
    },
    {
      id: 'cs_loop_97',
      topicId: 'cs_loop',
      question: 'Write a loop to find longest increasing subsequence length.',
      mathSolution: 'In [10,9,2,5,3,7,101,18], the longest increasing subsequence length is 4 (2,5,7,101).',
      codeSolution: 'int[] arr = {10,9,2,5,3,7,101,18};\nint[] lis = new int[arr.Length];\nfor(int i = 0; i < arr.Length; i++) {\n    lis[i] = 1;\n    for(int j = 0; j < i; j++) {\n        if(arr[j] < arr[i] && lis[j] + 1 > lis[i]) {\n            lis[i] = lis[j] + 1;\n        }\n    }\n}\nint max = lis.Max();\nConsole.WriteLine(max);',
      hint: 'Dynamic programming approach'
    },
    {
      id: 'cs_loop_98',
      topicId: 'cs_loop',
      question: 'Write a loop to implement rat in a maze problem.',
      mathSolution: 'Find a path from (0,0) to (3,3) in a 4×4 maze where 1=path, 0=wall.',
      codeSolution: 'bool SolveMaze(int[,] maze, int x, int y, int[,] sol) {\n    if(x == 3 && y == 3) {\n        sol[x,y] = 1;\n        return true;\n    }\n    if(IsSafe(maze, x, y)) {\n        sol[x,y] = 1;\n        if(SolveMaze(maze, x+1, y, sol)) return true;\n        if(SolveMaze(maze, x, y+1, sol)) return true;\n        sol[x,y] = 0;\n        return false;\n    }\n    return false;\n}\nbool IsSafe(int[,] maze, int x, int y) {\n    return x >= 0 && x < 4 && y >= 0 && y < 4 && maze[x,y] == 1;\n}',
      hint: 'Backtracking algorithm'
    },
    {
      id: 'cs_loop_99',
      topicId: 'cs_loop',
      question: 'Write a loop to implement N-Queens problem for 4 queens.',
      mathSolution: 'Place 4 queens on a 4×4 board so none attack each other.',
      codeSolution: 'bool SolveNQueens(int[,] board, int col) {\n    if(col >= 4) return true;\n    for(int i = 0; i < 4; i++) {\n        if(IsSafe(board, i, col)) {\n            board[i,col] = 1;\n            if(SolveNQueens(board, col+1)) return true;\n            board[i,col] = 0;\n        }\n    }\n    return false;\n}\nbool IsSafe(int[,] board, int row, int col) {\n    for(int i = 0; i < col; i++) if(board[row,i] == 1) return false;\n    for(int i=row, j=col; i>=0 && j>=0; i--, j--) if(board[i,j] == 1) return false;\n    for(int i=row, j=col; i<4 && j>=0; i++, j--) if(board[i,j] == 1) return false;\n    return true;\n}',
      hint: 'Place queens safely'
    },
    {
      id: 'cs_loop_100',
      topicId: 'cs_loop',
      question: 'Write a loop to implement Knight\'s tour problem on 5x5 board.',
      mathSolution: 'Find a sequence of knight moves that visits every square exactly once.',
      codeSolution: 'bool SolveKT(int[,] board, int moveX, int moveY, int moveCount, int[] xMove, int[] yMove) {\n    if(moveCount == 25) return true;\n    for(int k = 0; k < 8; k++) {\n        int nextX = moveX + xMove[k];\n        int nextY = moveY + yMove[k];\n        if(IsSafe(board, nextX, nextY)) {\n            board[nextX,nextY] = moveCount;\n            if(SolveKT(board, nextX, nextY, moveCount+1, xMove, yMove)) return true;\n            board[nextX,nextY] = -1;\n        }\n    }\n    return false;\n}\nbool IsSafe(int[,] board, int x, int y) {\n    return x >= 0 && x < 5 && y >= 0 && y < 5 && board[x,y] == -1;\n}',
      hint: 'Knight moves in L-shape'
    }
);