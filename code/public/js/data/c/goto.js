QuizData.questions.push(
  // ========== BASIC GOTO (QUESTIONS 1-10) ==========
  {
    id: 'c_goto_001',
    topicId: 'c_goto',
    question: 'Write a program using goto to print numbers 1 to 5 without using any loop.',
    mathSolution: 'Print sequence: 1 2 3 4 5 using jumps',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1;\n    \n    start:\n    if(i <= 5) {\n        printf("%d ", i);\n        i++;\n        goto start;\n    }\n    \n    return 0;\n}',
    hint: 'Create a loop using goto and a label - check condition and jump back'
  },
  {
    id: 'c_goto_002',
    topicId: 'c_goto',
    question: 'Write a program using goto to print numbers 1 to 5 but skip printing number 3.',
    mathSolution: 'Print: 1 2 4 5 (skip 3)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1;\n    \n    start:\n    if(i == 3) {\n        i++;\n        goto start;\n    }\n    printf("%d ", i);\n    i++;\n    if(i <= 5) goto start;\n    \n    return 0;\n}',
    hint: 'Use goto to skip the iteration when i equals 3'
  },
  {
    id: 'c_goto_003',
    topicId: 'c_goto',
    question: 'Write a program using goto to calculate factorial of a number n.',
    mathSolution: 'factorial = n! = n × (n-1) × ... × 1',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n, fact = 1, i = 1;\n    printf("Enter a number: ");\n    scanf("%d", &n);\n    \n    loop:\n    if(i <= n) {\n        fact *= i;\n        i++;\n        goto loop;\n    }\n    printf("Factorial = %d\\n", fact);\n    \n    return 0;\n}',
    hint: 'Multiply fact by i repeatedly until i reaches n'
  },
  {
    id: 'c_goto_004',
    topicId: 'c_goto',
    question: 'Write a program using goto to print the sum of first 10 natural numbers.',
    mathSolution: 'Sum = 1 + 2 + 3 + ... + 10 = 55',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1, sum = 0;\n    \n    start:\n    if(i <= 10) {\n        sum += i;\n        i++;\n        goto start;\n    }\n    printf("Sum = %d\\n", sum);\n    \n    return 0;\n}',
    hint: 'Accumulate sum in a loop using goto'
  },
  {
    id: 'c_goto_005',
    topicId: 'c_goto',
    question: 'Write a program using goto to print even numbers from 2 to 10.',
    mathSolution: 'Even numbers: 2 4 6 8 10',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 2;\n    \n    start:\n    if(i <= 10) {\n        printf("%d ", i);\n        i += 2;\n        goto start;\n    }\n    \n    return 0;\n}',
    hint: 'Increment by 2 instead of 1 to get even numbers'
  },
  {
    id: 'c_goto_006',
    topicId: 'c_goto',
    question: 'Write a program using goto to print odd numbers from 1 to 9.',
    mathSolution: 'Odd numbers: 1 3 5 7 9',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1;\n    \n    start:\n    if(i <= 9) {\n        printf("%d ", i);\n        i += 2;\n        goto start;\n    }\n    \n    return 0;\n}',
    hint: 'Start at 1 and increment by 2'
  },
  {
    id: 'c_goto_007',
    topicId: 'c_goto',
    question: 'Write a program using goto to print numbers from 10 down to 1 (countdown).',
    mathSolution: 'Countdown: 10 9 8 7 6 5 4 3 2 1',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 10;\n    \n    start:\n    if(i >= 1) {\n        printf("%d ", i);\n        i--;\n        goto start;\n    }\n    \n    return 0;\n}',
    hint: 'Decrement instead of increment'
  },
  {
    id: 'c_goto_008',
    topicId: 'c_goto',
    question: 'Write a program using goto to print the multiplication table of 5.',
    mathSolution: '5 × 1 = 5, 5 × 2 = 10, ..., 5 × 10 = 50',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1;\n    \n    start:\n    if(i <= 10) {\n        printf("5 × %d = %d\\n", i, 5 * i);\n        i++;\n        goto start;\n    }\n    \n    return 0;\n}',
    hint: 'Multiply 5 with loop counter'
  },
  {
    id: 'c_goto_009',
    topicId: 'c_goto',
    question: 'Write a program using goto to calculate the sum of digits of a number.',
    mathSolution: 'For 123, sum = 1+2+3 = 6',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 123, sum = 0;\n    \n    start:\n    if(num > 0) {\n        sum += num % 10;  // Add last digit\n        num /= 10;        // Remove last digit\n        goto start;\n    }\n    printf("Sum of digits = %d\\n", sum);\n    \n    return 0;\n}',
    hint: 'Extract digits using modulo 10 and divide by 10'
  },
  {
    id: 'c_goto_010',
    topicId: 'c_goto',
    question: 'Write a program using goto to reverse a number (e.g., 123 → 321).',
    mathSolution: 'Reverse of 123 is 321',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 123, rev = 0;\n    \n    start:\n    if(num > 0) {\n        rev = rev * 10 + (num % 10);\n        num /= 10;\n        goto start;\n    }\n    printf("Reversed = %d\\n", rev);\n    \n    return 0;\n}',
    hint: 'Build reversed number digit by digit'
  },

  // ========== ERROR HANDLING WITH GOTO (QUESTIONS 11-20) ==========
  {
    id: 'c_goto_011',
    topicId: 'c_goto',
    question: 'Write a program using goto for error handling when opening a file.',
    mathSolution: 'Check if file opens successfully',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *fp = fopen("test.txt", "r");\n    \n    if(fp == NULL) {\n        goto error;\n    }\n    \n    // Process file\n    fclose(fp);\n    return 0;\n    \n    error:\n    printf("Error opening file!\\n");\n    return 1;\n}',
    hint: 'Jump to error label if file pointer is NULL'
  },
  {
    id: 'c_goto_012',
    topicId: 'c_goto',
    question: 'Write a program with multiple memory allocations and goto for cleanup on failure.',
    mathSolution: 'Allocate multiple blocks with error cleanup',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *p1, *p2, *p3;\n    \n    p1 = malloc(100);\n    if(!p1) goto cleanup;\n    \n    p2 = malloc(200);\n    if(!p2) goto cleanup_p1;\n    \n    p3 = malloc(300);\n    if(!p3) goto cleanup_p2;\n    \n    // Use memory\n    free(p3);\n    cleanup_p2:\n    free(p2);\n    cleanup_p1:\n    free(p1);\n    cleanup:\n    return 0;\n}',
    hint: 'Each allocation failure jumps to appropriate cleanup label'
  },
  {
    id: 'c_goto_013',
    topicId: 'c_goto',
    question: 'Write a database connection handler using goto for error recovery.',
    mathSolution: 'Connect, authenticate, process with error jumps',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    if(!connect_to_db()) goto error;\n    if(!authenticate_user()) goto disconnect;\n    if(!process_query()) goto disconnect;\n    \n    disconnect:\n    disconnect_db();\n    error:\n    log_error();\n    return 0;\n}',
    hint: 'Chain error handlers with goto for cleanup'
  },
  {
    id: 'c_goto_014',
    topicId: 'c_goto',
    question: 'Write a program with socket programming error handling using goto.',
    mathSolution: 'Socket creation, binding, listening with error cleanup',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int sock = socket();\n    if(sock < 0) goto error;\n    \n    if(bind(sock) < 0) goto cleanup_socket;\n    \n    if(listen(sock) < 0) goto cleanup_socket;\n    \n    // Accept connections\n    close(sock);\n    return 0;\n    \n    cleanup_socket:\n    close(sock);\n    error:\n    return -1;\n}',
    hint: 'Clean up resources in reverse order of allocation'
  },
  {
    id: 'c_goto_015',
    topicId: 'c_goto',
    question: 'Write a program that validates user input and uses goto for retry on invalid input.',
    mathSolution: 'Keep asking until valid input is entered',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int age;\n    \n    input:\n    printf("Enter age (1-120): ");\n    scanf("%d", &age);\n    \n    if(age < 1 || age > 120) {\n        printf("Invalid! Try again.\\n");\n        goto input;\n    }\n    \n    printf("Valid age: %d\\n", age);\n    return 0;\n}',
    hint: 'Jump back to input label when validation fails'
  },
  {
    id: 'c_goto_016',
    topicId: 'c_goto',
    question: 'Write a program with multiple initialization steps and goto for rollback on failure.',
    mathSolution: 'Initialize hardware components with rollback',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    if(!init_power()) goto fail;\n    if(!init_clock()) goto power_off;\n    if(!init_memory()) goto clock_off;\n    if(!init_peripherals()) goto memory_off;\n    \n    // System ready\n    return 0;\n    \n    memory_off:\n    deinit_memory();\n    clock_off:\n    deinit_clock();\n    power_off:\n    deinit_power();\n    fail:\n    return -1;\n}',
    hint: 'Roll back initialized components in reverse order'
  },
  {
    id: 'c_goto_017',
    topicId: 'c_goto',
    question: 'Write a program that opens multiple files and uses goto for cleanup on failure.',
    mathSolution: 'Open multiple files, close all if any fails',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *f1, *f2, *f3;\n    \n    f1 = fopen("file1.txt", "r");\n    if(!f1) goto cleanup;\n    \n    f2 = fopen("file2.txt", "r");\n    if(!f2) goto cleanup_f1;\n    \n    f3 = fopen("file3.txt", "r");\n    if(!f3) goto cleanup_f2;\n    \n    // Process files\n    fclose(f3);\n    cleanup_f2:\n    fclose(f2);\n    cleanup_f1:\n    fclose(f1);\n    cleanup:\n    return 0;\n}',
    hint: 'Each file open failure jumps to close previously opened files'
  },
  {
    id: 'c_goto_018',
    topicId: 'c_goto',
    question: 'Write a program using goto for exception-like handling in C.',
    mathSolution: 'Simulate try-catch with goto labels',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int error = 0;\n    \n    if(some_condition) {\n        error = 1;\n        goto catch;\n    }\n    \n    // Normal execution\n    printf("Success\\n");\n    goto finally;\n    \n    catch:\n    printf("Error occurred: %d\\n", error);\n    \n    finally:\n    printf("Cleanup\\n");\n    return 0;\n}',
    hint: 'Use goto to jump to error handling code'
  },
  {
    id: 'c_goto_019',
    topicId: 'c_goto',
    question: 'Write a program that validates multiple conditions and uses goto for specific error messages.',
    mathSolution: 'Check multiple conditions with specific error jumps',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int age, income, credit_score;\n    \n    printf("Enter age, income, credit score: ");\n    scanf("%d %d %d", &age, &income, &credit_score);\n    \n    if(age < 18) goto age_error;\n    if(income < 20000) goto income_error;\n    if(credit_score < 600) goto credit_error;\n    \n    printf("Loan approved!\\n");\n    return 0;\n    \n    age_error:\n    printf("Age must be 18 or above\\n");\n    return 1;\n    \n    income_error:\n    printf("Income too low\\n");\n    return 1;\n    \n    credit_error:\n    printf("Credit score too low\\n");\n    return 1;\n}',
    hint: 'Different labels for different error conditions'
  },
  {
    id: 'c_goto_020',
    topicId: 'c_goto',
    question: 'Write a program that uses goto for hierarchical error handling in a device driver.',
    mathSolution: 'Device driver with multiple error levels',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    if(!detect_device()) goto no_device;\n    if(!load_firmware()) goto firmware_error;\n    if(!init_interrupts()) goto interrupt_error;\n    if(!start_device()) goto start_error;\n    \n    printf("Device running\\n");\n    return 0;\n    \n    start_error:\n    disable_interrupts();\n    interrupt_error:\n    unload_firmware();\n    firmware_error:\n    printf("Device initialization failed\\n");\n    no_device:\n    return -1;\n}',
    hint: 'Each error label handles cleanup for that level and below'
  },

  // ========== NESTED LOOPS WITH GOTO (QUESTIONS 21-30) ==========
  {
    id: 'c_goto_021',
    topicId: 'c_goto',
    question: 'Write a program using goto to break out of nested loops when a condition is met.',
    mathSolution: 'Exit all loops when i=3 and j=3',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i, j;\n    \n    for(i = 0; i < 5; i++) {\n        for(j = 0; j < 5; j++) {\n            if(i == 3 && j == 3) {\n                goto exit_loops;\n            }\n            printf("(%d,%d) ", i, j);\n        }\n        printf("\\n");\n    }\n    \n    exit_loops:\n    printf("\\nExited at i=%d, j=%d\\n", i, j);\n    return 0;\n}',
    hint: 'goto can exit multiple nested loops at once'
  },
  {
    id: 'c_goto_022',
    topicId: 'c_goto',
    question: 'Write a program using goto to continue the outer loop from inside nested loops.',
    mathSolution: 'Skip to next outer iteration when i == j',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i, j;\n    \n    for(i = 0; i < 3; i++) {\n        for(j = 0; j < 3; j++) {\n            if(i == j) {\n                goto next_i;\n            }\n            printf("(%d,%d) ", i, j);\n        }\n        next_i:\n        printf("\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Jump to label after inner loop to continue outer loop'
  },
  {
    id: 'c_goto_023',
    topicId: 'c_goto',
    question: 'Write a program to find the first common element in two arrays using goto for early exit.',
    mathSolution: 'Find first common element in [1,3,5,7] and [2,4,5,6] = 5',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr1[] = {1,3,5,7,9};\n    int arr2[] = {2,4,5,6,8};\n    int i, j;\n    \n    for(i = 0; i < 5; i++) {\n        for(j = 0; j < 5; j++) {\n            if(arr1[i] == arr2[j]) {\n                goto found;\n            }\n        }\n    }\n    \n    printf("No common element\\n");\n    return 0;\n    \n    found:\n    printf("Found common: %d at arr1[%d], arr2[%d]\\n", arr1[i], i, j);\n    return 0;\n}',
    hint: 'Exit both loops immediately when match found'
  },
  {
    id: 'c_goto_024',
    topicId: 'c_goto',
    question: 'Write a program to check if a matrix is symmetric using goto for early exit.',
    mathSolution: 'Check if matrix[i][j] == matrix[j][i] for all i,j',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {{1,2,3}, {2,4,5}, {3,5,6}};\n    int i, j;\n    \n    for(i = 0; i < 3; i++) {\n        for(j = i+1; j < 3; j++) {\n            if(matrix[i][j] != matrix[j][i]) {\n                goto not_symmetric;\n            }\n        }\n    }\n    \n    printf("Matrix is symmetric\\n");\n    return 0;\n    \n    not_symmetric:\n    printf("Matrix is not symmetric\\n");\n    return 0;\n}',
    hint: 'Exit loops when mismatch found'
  },
  {
    id: 'c_goto_025',
    topicId: 'c_goto',
    question: 'Write a program to find a pair of numbers in an array that sum to a target using goto.',
    mathSolution: 'Find pair summing to 10 in [2,4,6,8] → 2+8, 4+6',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {2,4,6,8,10};\n    int target = 10;\n    int i, j;\n    \n    for(i = 0; i < 5; i++) {\n        for(j = i+1; j < 5; j++) {\n            if(arr[i] + arr[j] == target) {\n                goto found;\n            }\n        }\n    }\n    \n    printf("No pair found\\n");\n    return 0;\n    \n    found:\n    printf("Pair found: %d + %d = %d\\n", arr[i], arr[j], target);\n    return 0;\n}',
    hint: 'Exit nested loops when pair is found'
  },
  {
    id: 'c_goto_026',
    topicId: 'c_goto',
    question: 'Write a program to search for a word in a 2D character grid using goto.',
    mathSolution: 'Find "cat" in grid, exit when found',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char grid[3][10] = {"dog", "cat", "bird"};\n    char search[] = "cat";\n    int i;\n    \n    for(i = 0; i < 3; i++) {\n        if(strcmp(grid[i], search) == 0) {\n            goto found;\n        }\n    }\n    \n    printf("Word not found\\n");\n    return 0;\n    \n    found:\n    printf("Found \'%s\' at row %d\\n", search, i);\n    return 0;\n}',
    hint: 'Exit loop immediately when word is found'
  },
  {
    id: 'c_goto_027',
    topicId: 'c_goto',
    question: 'Write a program to check if a number exists in a 2D matrix using goto.',
    mathSolution: 'Search for 5 in matrix, exit when found',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};\n    int search = 5;\n    int i, j;\n    \n    for(i = 0; i < 3; i++) {\n        for(j = 0; j < 3; j++) {\n            if(matrix[i][j] == search) {\n                goto found;\n            }\n        }\n    }\n    \n    printf("%d not found\\n", search);\n    return 0;\n    \n    found:\n    printf("%d found at [%d][%d]\\n", search, i, j);\n    return 0;\n}',
    hint: 'Use goto to break out of both loops when element is found'
  },
  {
    id: 'c_goto_028',
    topicId: 'c_goto',
    question: 'Write a program to find the first negative number in a 2D array using goto.',
    mathSolution: 'Find first negative in matrix with early exit',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int matrix[3][3] = {{1,2,3}, {4,-5,6}, {7,8,9}};\n    int i, j;\n    \n    for(i = 0; i < 3; i++) {\n        for(j = 0; j < 3; j++) {\n            if(matrix[i][j] < 0) {\n                goto found;\n            }\n        }\n    }\n    \n    printf("No negative numbers\\n");\n    return 0;\n    \n    found:\n    printf("First negative: %d at [%d][%d]\\n", matrix[i][j], i, j);\n    return 0;\n}',
    hint: 'Exit loops at first negative encountered'
  },
  {
    id: 'c_goto_029',
    topicId: 'c_goto',
    question: 'Write a program to validate Sudoku row (no duplicates) using goto for early exit.',
    mathSolution: 'Check if row has duplicate numbers',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int row[] = {1,2,3,4,5,6,7,8,8}; // duplicate 8\n    int seen[10] = {0};\n    int i;\n    \n    for(i = 0; i < 9; i++) {\n        if(seen[row[i]]) {\n            goto invalid;\n        }\n        seen[row[i]] = 1;\n    }\n    \n    printf("Row is valid\\n");\n    return 0;\n    \n    invalid:\n    printf("Duplicate found: %d\\n", row[i]);\n    return 0;\n}',
    hint: 'Exit loop immediately when duplicate is found'
  },
  {
    id: 'c_goto_030',
    topicId: 'c_goto',
    question: 'Write a program to find the first prime number in a 2D array using goto.',
    mathSolution: 'Find first prime number in matrix',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint is_prime(int n) {\n    if(n < 2) return 0;\n    for(int i = 2; i <= sqrt(n); i++) {\n        if(n % i == 0) return 0;\n    }\n    return 1;\n}\n\nint main() {\n    int matrix[3][3] = {{4,6,8}, {9,10,11}, {12,13,14}};\n    int i, j;\n    \n    for(i = 0; i < 3; i++) {\n        for(j = 0; j < 3; j++) {\n            if(is_prime(matrix[i][j])) {\n                goto found;\n            }\n        }\n    }\n    \n    printf("No prime numbers\\n");\n    return 0;\n    \n    found:\n    printf("First prime: %d at [%d][%d]\\n", matrix[i][j], i, j);\n    return 0;\n}',
    hint: 'Check each number and exit when prime is found'
  },

  // ========== STATE MACHINES WITH GOTO (QUESTIONS 31-40) ==========
  {
    id: 'c_goto_031',
    topicId: 'c_goto',
    question: 'Write a simple state machine using goto with three states: START, PROCESS, END.',
    mathSolution: 'State transition: START → PROCESS → END',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int state = 1;\n    \n    start:\n    printf("START state\\n");\n    state = 2;\n    goto process;\n    \n    process:\n    printf("PROCESS state\\n");\n    state = 3;\n    goto end;\n    \n    end:\n    printf("END state\\n");\n    \n    return 0;\n}',
    hint: 'Each state performs actions and jumps to next state'
  },
  {
    id: 'c_goto_032',
    topicId: 'c_goto',
    question: 'Write a traffic light simulation using goto for state transitions.',
    mathSolution: 'Red (5s) → Green (5s) → Yellow (2s) → Red',
    codeSolution: '#include <stdio.h>\n#include <unistd.h>\n\nint main() {\n    red:\n    printf("RED Light - Stop\\n");\n    sleep(5);\n    goto green;\n    \n    green:\n    printf("GREEN Light - Go\\n");\n    sleep(5);\n    goto yellow;\n    \n    yellow:\n    printf("YELLOW Light - Caution\\n");\n    sleep(2);\n    goto red;\n    \n    return 0;\n}',
    hint: 'Create an infinite cycle with goto between states'
  },
  {
    id: 'c_goto_033',
    topicId: 'c_goto',
    question: 'Write a menu-driven program using goto for navigation between menu levels.',
    mathSolution: 'Main menu → Submenu → Back to main',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int choice;\n    \n    main_menu:\n    printf("\\n=== MAIN MENU ===\\n");\n    printf("1. Submenu\\n");\n    printf("2. Exit\\n");\n    printf("Choice: ");\n    scanf("%d", &choice);\n    \n    if(choice == 1) goto submenu;\n    if(choice == 2) goto end;\n    goto main_menu;\n    \n    submenu:\n    printf("\\n=== SUBMENU ===\\n");\n    printf("1. Back to main\\n");\n    printf("2. Exit\\n");\n    printf("Choice: ");\n    scanf("%d", &choice);\n    \n    if(choice == 1) goto main_menu;\n    if(choice == 2) goto end;\n    goto submenu;\n    \n    end:\n    printf("Goodbye!\\n");\n    return 0;\n}',
    hint: 'Use goto to jump between different menu levels'
  },
  {
    id: 'c_goto_034',
    topicId: 'c_goto',
    question: 'Write a vending machine state machine using goto.',
    mathSolution: 'Idle → Select → Payment → Dispense → Idle',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int item, money;\n    \n    idle:\n    printf("\\nVENDING MACHINE - IDLE\\n");\n    printf("Press 1 to select item\\n");\n    scanf("%d", &item);\n    if(item == 1) goto select;\n    goto idle;\n    \n    select:\n    printf("Selected: Soda - $1.50\\n");\n    printf("Insert money: ");\n    scanf("%d", &money);\n    goto payment;\n    \n    payment:\n    if(money >= 150) {\n        printf("Payment accepted\\n");\n        goto dispense;\n    } else {\n        printf("Insufficient payment\\n");\n        goto idle;\n    }\n    \n    dispense:\n    printf("Dispensing soda...\\n");\n    if(money > 150) {\n        printf("Change: %d cents\\n", money - 150);\n    }\n    goto idle;\n    \n    return 0;\n}',
    hint: 'Each state represents a different phase of vending machine operation'
  },
  {
    id: 'c_goto_035',
    topicId: 'c_goto',
    question: 'Write a TCP protocol state machine using goto.',
    mathSolution: 'CLOSED → LISTEN → SYN_RCVD → ESTABLISHED → FIN_WAIT → CLOSED',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int packet;\n    \n    closed:\n    printf("State: CLOSED\\n");\n    printf("Received packet (1=SYN, 2=ACK, 3=FIN): ");\n    scanf("%d", &packet);\n    if(packet == 1) goto listen;\n    goto closed;\n    \n    listen:\n    printf("State: LISTEN\\n");\n    scanf("%d", &packet);\n    if(packet == 1) goto syn_rcvd;\n    goto listen;\n    \n    syn_rcvd:\n    printf("State: SYN_RCVD\\n");\n    scanf("%d", &packet);\n    if(packet == 2) goto established;\n    goto syn_rcvd;\n    \n    established:\n    printf("State: ESTABLISHED - Connection active\\n");\n    scanf("%d", &packet);\n    if(packet == 3) goto fin_wait;\n    goto established;\n    \n    fin_wait:\n    printf("State: FIN_WAIT\\n");\n    scanf("%d", &packet);\n    if(packet == 2) goto closed;\n    goto fin_wait;\n    \n    return 0;\n}',
    hint: 'State transitions based on received packets'
  },
  {
    id: 'c_goto_036',
    topicId: 'c_goto',
    question: 'Write a elevator control system using goto states.',
    mathSolution: 'Idle → Moving → DoorOpen → Idle',
    codeSolution: '#include <stdio.h>\n#include <unistd.h>\n\nint main() {\n    int floor, target;\n    \n    idle:\n    printf("\\nElevator idle at floor %d\\n", floor);\n    printf("Enter target floor (1-10): ");\n    scanf("%d", &target);\n    if(target < 1 || target > 10) goto idle;\n    goto moving;\n    \n    moving:\n    printf("Moving ");\n    if(target > floor) {\n        while(floor < target) {\n            floor++;\n            printf("%d ", floor);\n            sleep(1);\n        }\n    } else {\n        while(floor > target) {\n            floor--;\n            printf("%d ", floor);\n            sleep(1);\n        }\n    }\n    printf("\\nArrived at floor %d\\n", floor);\n    goto door_open;\n    \n    door_open:\n    printf("Doors opening...\\n");\n    sleep(2);\n    printf("Doors closing...\\n");\n    sleep(2);\n    goto idle;\n    \n    return 0;\n}',
    hint: 'States represent different elevator operations'
  },
  {
    id: 'c_goto_037',
    topicId: 'c_goto',
    question: 'Write a washing machine cycle with goto states.',
    mathSolution: 'Fill → Wash → Rinse → Spin → Complete',
    codeSolution: '#include <stdio.h>\n#include <unistd.h>\n\nint main() {\n    printf("Washing machine started\\n");\n    \n    fill:\n    printf("Filling water...\\n");\n    sleep(2);\n    goto wash;\n    \n    wash:\n    printf("Washing cycle...\\n");\n    sleep(3);\n    goto rinse;\n    \n    rinse:\n    printf("Rinsing...\\n");\n    sleep(2);\n    goto spin;\n    \n    spin:\n    printf("Spinning...\\n");\n    sleep(3);\n    goto complete;\n    \n    complete:\n    printf("Wash complete!\\n");\n    \n    return 0;\n}',
    hint: 'Sequential states with goto for each cycle phase'
  },
  {
    id: 'c_goto_038',
    topicId: 'c_goto',
    question: 'Write a microwave oven control system using goto.',
    mathSolution: 'Idle → SetTime → Cooking → Complete → Idle',
    codeSolution: '#include <stdio.h>\n#include <unistd.h>\n\nint main() {\n    int time, remaining;\n    \n    idle:\n    printf("\\nMicrowave - IDLE\\n");\n    printf("Enter cooking time (seconds): ");\n    scanf("%d", &time);\n    if(time <= 0) goto idle;\n    remaining = time;\n    goto set_time;\n    \n    set_time:\n    printf("Time set: %d seconds\\n", time);\n    printf("Press 1 to start: ");\n    scanf("%d", &time);\n    if(time == 1) goto cooking;\n    goto set_time;\n    \n    cooking:\n    while(remaining > 0) {\n        printf("Cooking... %d seconds left\\n", remaining);\n        sleep(1);\n        remaining--;\n    }\n    goto complete;\n    \n    complete:\n    printf("BEEP BEEP BEEP - Cooking complete!\\n");\n    sleep(2);\n    goto idle;\n    \n    return 0;\n}',
    hint: 'States for different microwave operations'
  },
  {
    id: 'c_goto_039',
    topicId: 'c_goto',
    question: 'Write a ATM state machine using goto.',
    mathSolution: 'Idle → CardInserted → PINEntry → Menu → Transaction → Idle',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int card, pin, option, balance = 1000, amount;\n    \n    idle:\n    printf("\\nATM - IDLE\\n");\n    printf("Insert card (1=Yes): ");\n    scanf("%d", &card);\n    if(card == 1) goto card_inserted;\n    goto idle;\n    \n    card_inserted:\n    printf("Card detected\\n");\n    goto pin_entry;\n    \n    pin_entry:\n    printf("Enter PIN: ");\n    scanf("%d", &pin);\n    if(pin == 1234) goto menu;\n    printf("Invalid PIN\\n");\n    goto card_inserted;\n    \n    menu:\n    printf("\\n1. Check Balance\\n");\n    printf("2. Withdraw\\n");\n    printf("3. Deposit\\n");\n    printf("4. Exit\\n");\n    printf("Choice: ");\n    scanf("%d", &option);\n    \n    if(option == 1) goto check_balance;\n    if(option == 2) goto withdraw;\n    if(option == 3) goto deposit;\n    if(option == 4) goto eject_card;\n    goto menu;\n    \n    check_balance:\n    printf("Balance: $%d\\n", balance);\n    goto menu;\n    \n    withdraw:\n    printf("Enter amount: ");\n    scanf("%d", &amount);\n    if(amount <= balance) {\n        balance -= amount;\n        printf("Dispensing $%d\\n", amount);\n    } else {\n        printf("Insufficient funds\\n");\n    }\n    goto menu;\n    \n    deposit:\n    printf("Enter amount: ");\n    scanf("%d", &amount);\n    balance += amount;\n    printf("Deposited $%d\\n", amount);\n    goto menu;\n    \n    eject_card:\n    printf("Card ejected. Thank you!\\n");\n    goto idle;\n    \n    return 0;\n}',
    hint: 'Complex state machine with multiple states and transitions'
  },
  {
    id: 'c_goto_040',
    topicId: 'c_goto',
    question: 'Write a game character state machine using goto.',
    mathSolution: 'Idle → Walk → Run → Jump → Attack → Idle',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int command;\n    \n    idle:\n    printf("\\nCharacter: IDLE\\n");\n    printf("Commands: 1=Walk, 2=Run, 3=Jump, 4=Attack: ");\n    scanf("%d", &command);\n    \n    if(command == 1) goto walk;\n    if(command == 2) goto run;\n    if(command == 3) goto jump;\n    if(command == 4) goto attack;\n    goto idle;\n    \n    walk:\n    printf("Character: WALKING\\n");\n    printf("Press 0 to stop: ");\n    scanf("%d", &command);\n    if(command == 0) goto idle;\n    goto walk;\n    \n    run:\n    printf("Character: RUNNING\\n");\n    printf("Press 0 to stop: ");\n    scanf("%d", &command);\n    if(command == 0) goto idle;\n    goto run;\n    \n    jump:\n    printf("Character: JUMPING\\n");\n    printf("Press 0 to land: ");\n    scanf("%d", &command);\n    if(command == 0) goto idle;\n    goto jump;\n    \n    attack:\n    printf("Character: ATTACKING\\n");\n    printf("Press 0 to stop: ");\n    scanf("%d", &command);\n    if(command == 0) goto idle;\n    goto attack;\n    \n    return 0;\n}',
    hint: 'Different states for different character actions'
  },

  // ========== PATTERN PRINTING WITH GOTO (QUESTIONS 41-50) ==========
  {
    id: 'c_goto_041',
    topicId: 'c_goto',
    question: 'Write a program using goto to print a right triangle pattern of stars.',
    mathSolution: 'Print:\n*\n**\n***\n****',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1, j;\n    \n    outer:\n    if(i > 4) goto end;\n    j = 1;\n    \n    inner:\n    if(j <= i) {\n        printf("*");\n        j++;\n        goto inner;\n    }\n    printf("\\n");\n    i++;\n    goto outer;\n    \n    end:\n    return 0;\n}',
    hint: 'Use nested goto loops - outer for rows, inner for columns'
  },
  {
    id: 'c_goto_042',
    topicId: 'c_goto',
    question: 'Write a program using goto to print an inverted right triangle pattern.',
    mathSolution: 'Print:\n****\n***\n**\n*',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 4, j;\n    \n    outer:\n    if(i < 1) goto end;\n    j = 1;\n    \n    inner:\n    if(j <= i) {\n        printf("*");\n        j++;\n        goto inner;\n    }\n    printf("\\n");\n    i--;\n    goto outer;\n    \n    end:\n    return 0;\n}',
    hint: 'Start with max stars and decrement each row'
  },
  {
    id: 'c_goto_043',
    topicId: 'c_goto',
    question: 'Write a program using goto to print a pyramid pattern of stars.',
    mathSolution: 'Print:\n   *\n  ***\n *****\n*******',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1, j, k;\n    \n    outer:\n    if(i > 4) goto end;\n    \n    // Spaces\n    j = 1;\n    spaces:\n    if(j <= 4 - i) {\n        printf(" ");\n        j++;\n        goto spaces;\n    }\n    \n    // Stars\n    k = 1;\n    stars:\n    if(k <= 2*i - 1) {\n        printf("*");\n        k++;\n        goto stars;\n    }\n    \n    printf("\\n");\n    i++;\n    goto outer;\n    \n    end:\n    return 0;\n}',
    hint: 'Print spaces then stars in each row'
  },
  {
    id: 'c_goto_044',
    topicId: 'c_goto',
    question: 'Write a program using goto to print a diamond pattern.',
    mathSolution: 'Print diamond shape with stars',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1, j, k;\n    \n    // Upper half\n    outer_up:\n    if(i > 4) goto lower_half;\n    \n    // Spaces\n    j = 1;\n    spaces_up:\n    if(j <= 4 - i) {\n        printf(" ");\n        j++;\n        goto spaces_up;\n    }\n    \n    // Stars\n    k = 1;\n    stars_up:\n    if(k <= 2*i - 1) {\n        printf("*");\n        k++;\n        goto stars_up;\n    }\n    \n    printf("\\n");\n    i++;\n    goto outer_up;\n    \n    // Lower half\n    lower_half:\n    i = 3;\n    outer_down:\n    if(i < 1) goto end;\n    \n    j = 1;\n    spaces_down:\n    if(j <= 4 - i) {\n        printf(" ");\n        j++;\n        goto spaces_down;\n    }\n    \n    k = 1;\n    stars_down:\n    if(k <= 2*i - 1) {\n        printf("*");\n        k++;\n        goto stars_down;\n    }\n    \n    printf("\\n");\n    i--;\n    goto outer_down;\n    \n    end:\n    return 0;\n}',
    hint: 'Print upper half (increasing) then lower half (decreasing)'
  },
  {
    id: 'c_goto_045',
    topicId: 'c_goto',
    question: 'Write a program using goto to print number pattern: 1, 12, 123, 1234.',
    mathSolution: 'Print:\n1\n12\n123\n1234',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1, j;\n    \n    outer:\n    if(i > 4) goto end;\n    j = 1;\n    \n    inner:\n    if(j <= i) {\n        printf("%d", j);\n        j++;\n        goto inner;\n    }\n    printf("\\n");\n    i++;\n    goto outer;\n    \n    end:\n    return 0;\n}',
    hint: 'Print numbers from 1 to row number'
  },
  {
    id: 'c_goto_046',
    topicId: 'c_goto',
    question: 'Write a program using goto to print Floyd\'s triangle.',
    mathSolution: 'Print:\n1\n2 3\n4 5 6\n7 8 9 10',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1, j, num = 1;\n    \n    outer:\n    if(i > 4) goto end;\n    j = 1;\n    \n    inner:\n    if(j <= i) {\n        printf("%d ", num);\n        num++;\n        j++;\n        goto inner;\n    }\n    printf("\\n");\n    i++;\n    goto outer;\n    \n    end:\n    return 0;\n}',
    hint: 'Keep a counter that increments for each number printed'
  },
  {
    id: 'c_goto_047',
    topicId: 'c_goto',
    question: 'Write a program using goto to print Pascal\'s triangle (first 5 rows).',
    mathSolution: 'Print Pascal\'s triangle',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 0, j, coef;\n    \n    outer:\n    if(i >= 5) goto end;\n    \n    // Spaces\n    j = 0;\n    spaces:\n    if(j < 5 - i - 1) {\n        printf("  ");\n        j++;\n        goto spaces;\n    }\n    \n    // Numbers\n    j = 0;\n    coef = 1;\n    numbers:\n    if(j <= i) {\n        printf("%4d", coef);\n        coef = coef * (i - j) / (j + 1);\n        j++;\n        goto numbers;\n    }\n    \n    printf("\\n");\n    i++;\n    goto outer;\n    \n    end:\n    return 0;\n}',
    hint: 'Use combinations formula: C(n,k) = C(n,k-1) * (n-k+1)/k'
  },
  {
    id: 'c_goto_048',
    topicId: 'c_goto',
    question: 'Write a program using goto to print a hollow square pattern.',
    mathSolution: 'Print 5x5 hollow square of stars',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1, j;\n    \n    outer:\n    if(i > 5) goto end;\n    j = 1;\n    \n    inner:\n    if(j <= 5) {\n        if(i == 1 || i == 5 || j == 1 || j == 5)\n            printf("* ");\n        else\n            printf("  ");\n        j++;\n        goto inner;\n    }\n    printf("\\n");\n    i++;\n    goto outer;\n    \n    end:\n    return 0;\n}',
    hint: 'Print star only on boundaries (first/last row, first/last column)'
  },
  {
    id: 'c_goto_049',
    topicId: 'c_goto',
    question: 'Write a program using goto to print a cross pattern.',
    mathSolution: 'Print X shape with stars',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1, j;\n    \n    outer:\n    if(i > 5) goto end;\n    j = 1;\n    \n    inner:\n    if(j <= 5) {\n        if(i == j || i + j == 6)\n            printf("* ");\n        else\n            printf("  ");\n        j++;\n        goto inner;\n    }\n    printf("\\n");\n    i++;\n    goto outer;\n    \n    end:\n    return 0;\n}',
    hint: 'Print star when i==j (main diagonal) or i+j==n+1 (anti-diagonal)'
  },
  {
    id: 'c_goto_050',
    topicId: 'c_goto',
    question: 'Write a program using goto to print a butterfly pattern.',
    mathSolution: 'Print butterfly shape with stars',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 1, j;\n    \n    // Upper half\n    outer_up:\n    if(i > 4) goto lower_half;\n    \n    // Left stars\n    j = 1;\n    left_up:\n    if(j <= i) {\n        printf("*");\n        j++;\n        goto left_up;\n    }\n    \n    // Spaces\n    j = 1;\n    spaces_up:\n    if(j <= 2*(4-i)) {\n        printf(" ");\n        j++;\n        goto spaces_up;\n    }\n    \n    // Right stars\n    j = 1;\n    right_up:\n    if(j <= i) {\n        printf("*");\n        j++;\n        goto right_up;\n    }\n    \n    printf("\\n");\n    i++;\n    goto outer_up;\n    \n    // Lower half\n    lower_half:\n    i = 3;\n    outer_down:\n    if(i < 1) goto end;\n    \n    j = 1;\n    left_down:\n    if(j <= i) {\n        printf("*");\n        j++;\n        goto left_down;\n    }\n    \n    j = 1;\n    spaces_down:\n    if(j <= 2*(4-i)) {\n        printf(" ");\n        j++;\n        goto spaces_down;\n    }\n    \n    j = 1;\n    right_down:\n    if(j <= i) {\n        printf("*");\n        j++;\n        goto right_down;\n    }\n    \n    printf("\\n");\n    i--;\n    goto outer_down;\n    \n    end:\n    return 0;\n}',
    hint: 'Butterfly has two wings - print stars, spaces, stars pattern'
  },

  // ========== CLEANUP AND RESOURCE MANAGEMENT (QUESTIONS 51-60) ==========
  {
    id: 'c_goto_051',
    topicId: 'c_goto',
    question: 'Write a function with multiple return points using goto for cleanup.',
    mathSolution: 'Clean up resources before returning',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint process_data() {\n    int *data = malloc(100);\n    FILE *fp = fopen("data.txt", "r");\n    \n    if(!data) goto cleanup;\n    if(!fp) goto cleanup_data;\n    \n    // Process data\n    if(error_condition) goto cleanup_all;\n    \n    fclose(fp);\n    free(data);\n    return 0;\n    \n    cleanup_all:\n    fclose(fp);\n    cleanup_data:\n    free(data);\n    cleanup:\n    return -1;\n}\n\nint main() {\n    int result = process_data();\n    printf("Result: %d\\n", result);\n    return 0;\n}',
    hint: 'Single cleanup point handles all resource freeing'
  },
  {
    id: 'c_goto_052',
    topicId: 'c_goto',
    question: 'Write a program that allocates multiple resources and uses goto for hierarchical cleanup.',
    mathSolution: 'Allocate resources in order, cleanup in reverse',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *p1 = NULL, *p2 = NULL, *p3 = NULL;\n    FILE *f1 = NULL, *f2 = NULL;\n    \n    p1 = malloc(100);\n    if(!p1) goto cleanup;\n    \n    p2 = malloc(200);\n    if(!p2) goto cleanup_p1;\n    \n    f1 = fopen("file1.txt", "w");\n    if(!f1) goto cleanup_p2;\n    \n    p3 = malloc(300);\n    if(!p3) goto cleanup_f1;\n    \n    f2 = fopen("file2.txt", "w");\n    if(!f2) goto cleanup_p3;\n    \n    // Use all resources\n    fprintf(f1, "Data");\n    fprintf(f2, "Data");\n    \n    // Cleanup in reverse order\n    fclose(f2);\n    cleanup_p3:\n    free(p3);\n    cleanup_f1:\n    fclose(f1);\n    cleanup_p2:\n    free(p2);\n    cleanup_p1:\n    free(p1);\n    cleanup:\n    return 0;\n}',
    hint: 'Each label cleans up one resource and falls through to previous'
  },
  {
    id: 'c_goto_053',
    topicId: 'c_goto',
    question: 'Write a database transaction handler with commit/rollback using goto.',
    mathSolution: 'Perform multiple DB operations with rollback on failure',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int transaction_active = 0;\n    \n    if(!begin_transaction()) goto error;\n    transaction_active = 1;\n    \n    if(!update_table1()) goto rollback;\n    if(!update_table2()) goto rollback;\n    if(!update_table3()) goto rollback;\n    \n    commit_transaction();\n    transaction_active = 0;\n    printf("Transaction committed\\n");\n    return 0;\n    \n    rollback:\n    if(transaction_active) {\n        rollback_transaction();\n        printf("Transaction rolled back\\n");\n    }\n    error:\n    return -1;\n}',
    hint: 'Rollback if any operation fails after transaction starts'
  },
  {
    id: 'c_goto_054',
    topicId: 'c_goto',
    question: 'Write a network connection handler with cleanup using goto.',
    mathSolution: 'Setup socket, connect, send data with error cleanup',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int sock = -1;\n    char *buffer = NULL;\n    \n    sock = socket(AF_INET, SOCK_STREAM, 0);\n    if(sock < 0) goto cleanup;\n    \n    buffer = malloc(1024);\n    if(!buffer) goto cleanup_socket;\n    \n    if(connect(sock) < 0) goto cleanup_buffer;\n    \n    if(send_data(sock, buffer) < 0) goto cleanup_buffer;\n    \n    printf("Data sent successfully\\n");\n    \n    cleanup_buffer:\n    free(buffer);\n    cleanup_socket:\n    close(sock);\n    cleanup:\n    return 0;\n}',
    hint: 'Clean up in reverse order of allocation'
  },
  {
    id: 'c_goto_055',
    topicId: 'c_goto',
    question: 'Write a program with multiple configuration steps and goto for error recovery.',
    mathSolution: 'Load config, validate, apply with rollback',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int config_loaded = 0;\n    int validated = 0;\n    \n    if(!load_config()) goto error;\n    config_loaded = 1;\n    \n    if(!validate_config()) goto rollback_config;\n    validated = 1;\n    \n    if(!apply_config()) goto rollback_validation;\n    \n    printf("Configuration applied\\n");\n    return 0;\n    \n    rollback_validation:\n    validated = 0;\n    rollback_config:\n    if(config_loaded) {\n        restore_old_config();\n        config_loaded = 0;\n    }\n    error:\n    printf("Configuration failed\\n");\n    return -1;\n}',
    hint: 'Track what\'s been done to know what to rollback'
  },
  {
    id: 'c_goto_056',
    topicId: 'c_goto',
    question: 'Write a multi-step initialization function with goto for cleanup.',
    mathSolution: 'Initialize multiple subsystems with error handling',
    codeSolution: '#include <stdio.h>\n\nint init_system() {\n    if(!init_hardware()) goto error;\n    if(!init_drivers()) goto cleanup_hardware;\n    if(!init_services()) goto cleanup_drivers;\n    if(!init_applications()) goto cleanup_services;\n    \n    printf("System initialized\\n");\n    return 0;\n    \n    cleanup_services:\n    shutdown_services();\n    cleanup_drivers:\n    shutdown_drivers();\n    cleanup_hardware:\n    shutdown_hardware();\n    error:\n    return -1;\n}\n\nint main() {\n    return init_system();\n}',
    hint: 'Each cleanup label handles one level of initialization'
  },
  {
    id: 'c_goto_057',
    topicId: 'c_goto',
    question: 'Write a program that opens multiple files and uses goto for error cleanup.',
    mathSolution: 'Open 3 files, close all if any fails to open',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    FILE *f1 = NULL, *f2 = NULL, *f3 = NULL;\n    \n    f1 = fopen("file1.txt", "r");\n    if(!f1) goto cleanup;\n    \n    f2 = fopen("file2.txt", "r");\n    if(!f2) goto cleanup_f1;\n    \n    f3 = fopen("file3.txt", "r");\n    if(!f3) goto cleanup_f2;\n    \n    // Process files\n    fclose(f3);\n    cleanup_f2:\n    fclose(f2);\n    cleanup_f1:\n    fclose(f1);\n    cleanup:\n    return 0;\n}',
    hint: 'Close only the files that were successfully opened'
  },
  {
    id: 'c_goto_058',
    topicId: 'c_goto',
    question: 'Write a memory pool manager with goto for allocation failure handling.',
    mathSolution: 'Allocate multiple blocks, free all on any failure',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    void *blocks[10];\n    int i;\n    \n    for(i = 0; i < 10; i++) {\n        blocks[i] = malloc(100);\n        if(!blocks[i]) {\n            goto cleanup;\n        }\n    }\n    \n    // Use blocks\n    \n    cleanup:\n    for(int j = 0; j < i; j++) {\n        free(blocks[j]);\n    }\n    return 0;\n}',
    hint: 'Free only the blocks that were successfully allocated'
  },
  {
    id: 'c_goto_059',
    topicId: 'c_goto',
    question: 'Write a program with nested resource allocation and goto for cleanup.',
    mathSolution: 'Nested structures with proper cleanup',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Level1 {\n    int *data;\n    struct Level2 *next;\n};\n\nstruct Level2 {\n    float *values;\n    char *name;\n};\n\nint main() {\n    struct Level1 *l1 = malloc(sizeof(struct Level1));\n    if(!l1) goto cleanup;\n    \n    l1->data = malloc(100);\n    if(!l1->data) goto cleanup_l1;\n    \n    l1->next = malloc(sizeof(struct Level2));\n    if(!l1->next) goto cleanup_l1_data;\n    \n    l1->next->values = malloc(200);\n    if(!l1->next->values) goto cleanup_l1_next;\n    \n    l1->next->name = malloc(50);\n    if(!l1->next->name) goto cleanup_l1_next_values;\n    \n    // Use structure\n    \n    free(l1->next->name);\n    cleanup_l1_next_values:\n    free(l1->next->values);\n    cleanup_l1_next:\n    free(l1->next);\n    cleanup_l1_data:\n    free(l1->data);\n    cleanup_l1:\n    free(l1);\n    cleanup:\n    return 0;\n}',
    hint: 'Clean up nested structures in reverse order of allocation'
  },
  {
    id: 'c_goto_060',
    topicId: 'c_goto',
    question: 'Write a plugin loader with goto for error recovery.',
    mathSolution: 'Load multiple plugins, unload on failure',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    void *plugins[5];\n    int loaded = 0;\n    \n    for(loaded = 0; loaded < 5; loaded++) {\n        plugins[loaded] = load_plugin(loaded);\n        if(!plugins[loaded]) {\n            goto unload_plugins;\n        }\n    }\n    \n    printf("All plugins loaded\\n");\n    return 0;\n    \n    unload_plugins:\n    for(int i = 0; i < loaded; i++) {\n        unload_plugin(plugins[i]);\n    }\n    printf("Failed to load plugin %d\\n", loaded);\n    return -1;\n}',
    hint: 'Unload plugins in reverse order of loading'
  },

  // ========== MATHEMATICAL COMPUTATIONS (QUESTIONS 61-70) ==========
  {
    id: 'c_goto_061',
    topicId: 'c_goto',
    question: 'Write a program using goto to generate Fibonacci series up to n terms.',
    mathSolution: 'Fibonacci: 0,1,1,2,3,5,8,13,...',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n = 10, a = 0, b = 1, c, i = 3;\n    \n    printf("Fibonacci series: %d %d ", a, b);\n    \n    loop:\n    if(i > n) goto end;\n    \n    c = a + b;\n    printf("%d ", c);\n    a = b;\n    b = c;\n    i++;\n    goto loop;\n    \n    end:\n    printf("\\n");\n    return 0;\n}',
    hint: 'Each term is sum of previous two terms'
  },
  {
    id: 'c_goto_062',
    topicId: 'c_goto',
    question: 'Write a program using goto to find GCD of two numbers using Euclidean algorithm.',
    mathSolution: 'GCD of 48 and 18 = 6',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 48, b = 18, temp;\n    \n    loop:\n    if(b == 0) goto end;\n    \n    temp = b;\n    b = a % b;\n    a = temp;\n    goto loop;\n    \n    end:\n    printf("GCD = %d\\n", a);\n    return 0;\n}',
    hint: 'Repeatedly replace (a,b) with (b, a%b) until b becomes 0'
  },
  {
    id: 'c_goto_063',
    topicId: 'c_goto',
    question: 'Write a program using goto to check if a number is prime.',
    mathSolution: 'Check if 17 is prime (yes)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n = 17, i = 2;\n    \n    if(n < 2) goto not_prime;\n    \n    loop:\n    if(i * i > n) goto prime;\n    \n    if(n % i == 0) goto not_prime;\n    \n    i++;\n    goto loop;\n    \n    prime:\n    printf("%d is prime\\n", n);\n    goto end;\n    \n    not_prime:\n    printf("%d is not prime\\n", n);\n    \n    end:\n    return 0;\n}',
    hint: 'Check divisors up to square root of n'
  },
  {
    id: 'c_goto_064',
    topicId: 'c_goto',
    question: 'Write a program using goto to find all prime factors of a number.',
    mathSolution: 'Prime factors of 84: 2,2,3,7',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n = 84, i = 2;\n    \n    printf("Prime factors of %d: ", n);\n    \n    check_factor:\n    if(i * i > n) goto remainder;\n    \n    divide:\n    if(n % i == 0) {\n        printf("%d ", i);\n        n = n / i;\n        goto divide;  // Check same factor again\n    }\n    \n    i++;\n    goto check_factor;\n    \n    remainder:\n    if(n > 1) {\n        printf("%d", n);\n    }\n    \n    return 0;\n}',
    hint: 'Divide by smallest factor repeatedly until number becomes 1'
  },
  {
    id: 'c_goto_065',
    topicId: 'c_goto',
    question: 'Write a program using goto to calculate power using exponentiation by squaring.',
    mathSolution: '2^10 = 1024 using efficient method',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int base = 2, exp = 10, result = 1;\n    \n    loop:\n    if(exp <= 0) goto end;\n    \n    if(exp % 2 == 1) {\n        result = result * base;\n    }\n    \n    base = base * base;\n    exp = exp / 2;\n    goto loop;\n    \n    end:\n    printf("Result = %d\\n", result);\n    return 0;\n}',
    hint: 'Square base and halve exponent each iteration'
  },
  {
    id: 'c_goto_066',
    topicId: 'c_goto',
    question: 'Write a program using goto to find LCM of two numbers.',
    mathSolution: 'LCM of 12 and 18 = 36',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 12, b = 18;\n    int lcm = (a > b) ? a : b;\n    \n    find_lcm:\n    if(lcm % a == 0 && lcm % b == 0) {\n        goto found;\n    }\n    \n    lcm++;\n    goto find_lcm;\n    \n    found:\n    printf("LCM of %d and %d = %d\\n", a, b, lcm);\n    return 0;\n}',
    hint: 'LCM is smallest number divisible by both a and b'
  },
  {
    id: 'c_goto_067',
    topicId: 'c_goto',
    question: 'Write a program using goto to find nth term of arithmetic progression.',
    mathSolution: 'AP: first term=2, difference=3, 5th term = 14',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int first = 2, diff = 3, n = 5;\n    int term = first, i = 1;\n    \n    loop:\n    if(i == n) goto end;\n    \n    term = term + diff;\n    i++;\n    goto loop;\n    \n    end:\n    printf("%dth term = %d\\n", n, term);\n    return 0;\n}',
    hint: 'AP formula: an = a1 + (n-1)d'
  },
  {
    id: 'c_goto_068',
    topicId: 'c_goto',
    question: 'Write a program using goto to find nth term of geometric progression.',
    mathSolution: 'GP: first term=3, ratio=2, 5th term = 48',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int first = 3, ratio = 2, n = 5;\n    int term = first, i = 1;\n    \n    loop:\n    if(i == n) goto end;\n    \n    term = term * ratio;\n    i++;\n    goto loop;\n    \n    end:\n    printf("%dth term = %d\\n", n, term);\n    return 0;\n}',
    hint: 'GP formula: an = a1 × r^(n-1)'
  },
  {
    id: 'c_goto_069',
    topicId: 'c_goto',
    question: 'Write a program using goto to calculate compound interest.',
    mathSolution: 'A = P(1 + r/n)^(nt) with P=1000, r=0.05, n=12, t=5',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double P = 1000, r = 0.05, A;\n    int n = 12, t = 5, i = 1;\n    \n    A = P;\n    \n    loop:\n    if(i > n * t) goto end;\n    \n    A = A * (1 + r/n);\n    i++;\n    goto loop;\n    \n    end:\n    printf("Amount = %.2f\\n", A);\n    printf("Interest = %.2f\\n", A - P);\n    return 0;\n}',
    hint: 'Compound each period by multiplying by (1 + r/n)'
  },
  {
    id: 'c_goto_070',
    topicId: 'c_goto',
    question: 'Write a program using goto to calculate sine series: sin(x) = x - x^3/3! + x^5/5! - ...',
    mathSolution: 'sin(1 radian) ≈ 0.84147',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double x = 1.0, term = x, sum = 0;\n    int n = 1, sign = 1;\n    \n    loop:\n    if(n > 10) goto end;\n    \n    sum = sum + sign * term;\n    \n    term = term * x * x / ((2*n) * (2*n + 1));\n    sign = -sign;\n    n++;\n    goto loop;\n    \n    end:\n    printf("sin(%.2f) = %f\\n", x, sum);\n    printf("Actual sin = %f\\n", sin(x));\n    return 0;\n}',
    hint: 'Each term: multiply by x^2 and divide by (2n)(2n+1)'
  },

  // ========== ARRAY OPERATIONS WITH GOTO (QUESTIONS 71-80) ==========
  {
    id: 'c_goto_071',
    topicId: 'c_goto',
    question: 'Write a program using goto to find the maximum element in an array.',
    mathSolution: 'Max of [23,45,12,67,34] = 67',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {23,45,12,67,34};\n    int n = 5, max = arr[0], i = 1;\n    \n    loop:\n    if(i >= n) goto end;\n    \n    if(arr[i] > max) {\n        max = arr[i];\n    }\n    \n    i++;\n    goto loop;\n    \n    end:\n    printf("Maximum = %d\\n", max);\n    return 0;\n}',
    hint: 'Compare each element with current max'
  },
  {
    id: 'c_goto_072',
    topicId: 'c_goto',
    question: 'Write a program using goto to find the minimum element in an array.',
    mathSolution: 'Min of [23,45,12,67,34] = 12',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {23,45,12,67,34};\n    int n = 5, min = arr[0], i = 1;\n    \n    loop:\n    if(i >= n) goto end;\n    \n    if(arr[i] < min) {\n        min = arr[i];\n    }\n    \n    i++;\n    goto loop;\n    \n    end:\n    printf("Minimum = %d\\n", min);\n    return 0;\n}',
    hint: 'Compare each element with current min'
  },
  {
    id: 'c_goto_073',
    topicId: 'c_goto',
    question: 'Write a program using goto to calculate sum of array elements.',
    mathSolution: 'Sum of [1,2,3,4,5] = 15',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    int n = 5, sum = 0, i = 0;\n    \n    loop:\n    if(i >= n) goto end;\n    \n    sum += arr[i];\n    i++;\n    goto loop;\n    \n    end:\n    printf("Sum = %d\\n", sum);\n    return 0;\n}',
    hint: 'Accumulate each element into sum'
  },
  {
    id: 'c_goto_074',
    topicId: 'c_goto',
    question: 'Write a program using goto to calculate average of array elements.',
    mathSolution: 'Average of [10,20,30,40,50] = 30',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,20,30,40,50};\n    int n = 5, sum = 0, i = 0;\n    \n    loop:\n    if(i >= n) goto end;\n    \n    sum += arr[i];\n    i++;\n    goto loop;\n    \n    end:\n    printf("Average = %.2f\\n", (float)sum / n);\n    return 0;\n}',
    hint: 'Calculate sum first, then divide by count'
  },
  {
    id: 'c_goto_075',
    topicId: 'c_goto',
    question: 'Write a program using goto to reverse an array.',
    mathSolution: 'Reverse [1,2,3,4,5] → [5,4,3,2,1]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,4,5};\n    int n = 5, i = 0, temp;\n    \n    loop:\n    if(i >= n/2) goto end;\n    \n    temp = arr[i];\n    arr[i] = arr[n-1-i];\n    arr[n-1-i] = temp;\n    \n    i++;\n    goto loop;\n    \n    end:\n    printf("Reversed array: ");\n    for(i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Swap first with last, second with second-last, etc.'
  },
  {
    id: 'c_goto_076',
    topicId: 'c_goto',
    question: 'Write a program using goto to copy one array to another.',
    mathSolution: 'Copy source[5] to dest[5]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int source[] = {10,20,30,40,50};\n    int dest[5];\n    int n = 5, i = 0;\n    \n    loop:\n    if(i >= n) goto end;\n    \n    dest[i] = source[i];\n    i++;\n    goto loop;\n    \n    end:\n    printf("Destination array: ");\n    for(i = 0; i < n; i++) {\n        printf("%d ", dest[i]);\n    }\n    return 0;\n}',
    hint: 'Assign each element from source to destination'
  },
  {
    id: 'c_goto_077',
    topicId: 'c_goto',
    question: 'Write a program using goto to count even and odd numbers in an array.',
    mathSolution: 'Count evens and odds in [1,2,3,4,5,6]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {1,2,3,4,5,6};\n    int n = 6, even = 0, odd = 0, i = 0;\n    \n    loop:\n    if(i >= n) goto end;\n    \n    if(arr[i] % 2 == 0)\n        even++;\n    else\n        odd++;\n    \n    i++;\n    goto loop;\n    \n    end:\n    printf("Even: %d, Odd: %d\\n", even, odd);\n    return 0;\n}',
    hint: 'Check each element\'s parity using modulo operator'
  },
  {
    id: 'c_goto_078',
    topicId: 'c_goto',
    question: 'Write a program using goto for linear search in an array.',
    mathSolution: 'Search for 30 in [10,20,30,40,50]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,20,30,40,50};\n    int n = 5, key = 30, i = 0;\n    \n    loop:\n    if(i >= n) goto not_found;\n    \n    if(arr[i] == key) goto found;\n    \n    i++;\n    goto loop;\n    \n    found:\n    printf("%d found at index %d\\n", key, i);\n    goto end;\n    \n    not_found:\n    printf("%d not found\\n", key);\n    \n    end:\n    return 0;\n}',
    hint: 'Compare each element with key until found or end reached'
  },
  {
    id: 'c_goto_079',
    topicId: 'c_goto',
    question: 'Write a program using goto to insert an element at a specific position.',
    mathSolution: 'Insert 25 at position 2 in [10,20,30,40]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[10] = {10,20,30,40};\n    int n = 4, pos = 2, value = 25, i;\n    \n    // Shift elements right\n    i = n;\n    shift:\n    if(i <= pos) goto insert;\n    \n    arr[i] = arr[i-1];\n    i--;\n    goto shift;\n    \n    insert:\n    arr[pos] = value;\n    n++;\n    \n    printf("Array after insertion: ");\n    for(i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Shift elements right from the end to create space'
  },
  {
    id: 'c_goto_080',
    topicId: 'c_goto',
    question: 'Write a program using goto to delete an element at a specific position.',
    mathSolution: 'Delete element at position 2 from [10,20,30,40]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,20,30,40};\n    int n = 4, pos = 2, i;\n    \n    // Shift elements left\n    i = pos;\n    shift:\n    if(i >= n-1) goto end;\n    \n    arr[i] = arr[i+1];\n    i++;\n    goto shift;\n    \n    end:\n    n--;\n    \n    printf("Array after deletion: ");\n    for(i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Shift elements left from the deletion position'
  },

  // ========== STRING OPERATIONS WITH GOTO (QUESTIONS 81-90) ==========
  {
    id: 'c_goto_081',
    topicId: 'c_goto',
    question: 'Write a program using goto to find string length without using strlen.',
    mathSolution: 'Length of "Hello" = 5',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello";\n    int len = 0;\n    \n    loop:\n    if(str[len] == \'\\0\') goto end;\n    \n    len++;\n    goto loop;\n    \n    end:\n    printf("Length = %d\\n", len);\n    return 0;\n}',
    hint: 'Count characters until null terminator is found'
  },
  {
    id: 'c_goto_082',
    topicId: 'c_goto',
    question: 'Write a program using goto to copy one string to another.',
    mathSolution: 'Copy "Hello" to destination',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char src[] = "Hello";\n    char dest[20];\n    int i = 0;\n    \n    loop:\n    dest[i] = src[i];\n    \n    if(src[i] == \'\\0\') goto end;\n    \n    i++;\n    goto loop;\n    \n    end:\n    printf("Source: %s\\n", src);\n    printf("Destination: %s\\n", dest);\n    return 0;\n}',
    hint: 'Copy characters including null terminator'
  },
  {
    id: 'c_goto_083',
    topicId: 'c_goto',
    question: 'Write a program using goto to concatenate two strings.',
    mathSolution: 'Concatenate "Hello " and "World" → "Hello World"',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str1[20] = "Hello ";\n    char str2[] = "World";\n    int i = 0, j = 0;\n    \n    // Find end of str1\n    find_end:\n    if(str1[i] == \'\\0\') goto copy;\n    i++;\n    goto find_end;\n    \n    // Copy str2 to end of str1\n    copy:\n    str1[i] = str2[j];\n    if(str2[j] == \'\\0\') goto end;\n    i++;\n    j++;\n    goto copy;\n    \n    end:\n    printf("Concatenated: %s\\n", str1);\n    return 0;\n}',
    hint: 'Find end of first string, then copy second string there'
  },
  {
    id: 'c_goto_084',
    topicId: 'c_goto',
    question: 'Write a program using goto to reverse a string.',
    mathSolution: 'Reverse "Hello" → "olleH"',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello";\n    int i = 0, j = 0;\n    char temp;\n    \n    // Find length\n    find_len:\n    if(str[j] == \'\\0\') goto reverse;\n    j++;\n    goto find_len;\n    \n    // Reverse\n    reverse:\n    j--;  // Last character index\n    \n    rev_loop:\n    if(i >= j) goto end;\n    \n    temp = str[i];\n    str[i] = str[j];\n    str[j] = temp;\n    \n    i++;\n    j--;\n    goto rev_loop;\n    \n    end:\n    printf("Reversed: %s\\n", str);\n    return 0;\n}',
    hint: 'Swap characters from both ends moving inward'
  },
  {
    id: 'c_goto_085',
    topicId: 'c_goto',
    question: 'Write a program using goto to check if a string is palindrome.',
    mathSolution: 'Check "madam" is palindrome (yes)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "madam";\n    int i = 0, j = 0;\n    \n    // Find length\n    find_len:\n    if(str[j] == \'\\0\') goto check;\n    j++;\n    goto find_len;\n    \n    // Check palindrome\n    check:\n    j--;  // Last character index\n    \n    check_loop:\n    if(i >= j) goto palindrome;\n    \n    if(str[i] != str[j]) goto not_palindrome;\n    \n    i++;\n    j--;\n    goto check_loop;\n    \n    palindrome:\n    printf("\'%s\' is a palindrome\\n", str);\n    goto end;\n    \n    not_palindrome:\n    printf("\'%s\' is not a palindrome\\n", str);\n    \n    end:\n    return 0;\n}',
    hint: 'Compare characters from start and end'
  },
  {
    id: 'c_goto_086',
    topicId: 'c_goto',
    question: 'Write a program using goto to count vowels in a string.',
    mathSolution: 'Count vowels in "Hello World" = 3',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello World";\n    int i = 0, vowels = 0;\n    char ch;\n    \n    loop:\n    ch = str[i];\n    if(ch == \'\\0\') goto end;\n    \n    if(ch == \'a\' || ch == \'e\' || ch == \'i\' || ch == \'o\' || ch == \'u\' ||\n       ch == \'A\' || ch == \'E\' || ch == \'I\' || ch == \'O\' || ch == \'U\') {\n        vowels++;\n    }\n    \n    i++;\n    goto loop;\n    \n    end:\n    printf("Vowels: %d\\n", vowels);\n    return 0;\n}',
    hint: 'Check each character if it\'s a vowel (a,e,i,o,u in both cases)'
  },
  {
    id: 'c_goto_087',
    topicId: 'c_goto',
    question: 'Write a program using goto to convert string to uppercase.',
    mathSolution: 'Convert "Hello" to "HELLO"',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello";\n    int i = 0;\n    \n    loop:\n    if(str[i] == \'\\0\') goto end;\n    \n    if(str[i] >= \'a\' && str[i] <= \'z\') {\n        str[i] = str[i] - 32;  // Convert to uppercase\n    }\n    \n    i++;\n    goto loop;\n    \n    end:\n    printf("Uppercase: %s\\n", str);\n    return 0;\n}',
    hint: 'Subtract 32 from lowercase ASCII to get uppercase'
  },
  {
    id: 'c_goto_088',
    topicId: 'c_goto',
    question: 'Write a program using goto to convert string to lowercase.',
    mathSolution: 'Convert "HELLO" to "hello"',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "HELLO";\n    int i = 0;\n    \n    loop:\n    if(str[i] == \'\\0\') goto end;\n    \n    if(str[i] >= \'A\' && str[i] <= \'Z\') {\n        str[i] = str[i] + 32;  // Convert to lowercase\n    }\n    \n    i++;\n    goto loop;\n    \n    end:\n    printf("Lowercase: %s\\n", str);\n    return 0;\n}',
    hint: 'Add 32 to uppercase ASCII to get lowercase'
  },
  {
    id: 'c_goto_089',
    topicId: 'c_goto',
    question: 'Write a program using goto to remove spaces from a string.',
    mathSolution: 'Remove spaces from "Hello World" → "HelloWorld"',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello World";\n    int i = 0, j = 0;\n    \n    loop:\n    if(str[i] == \'\\0\') goto end;\n    \n    if(str[i] != \' \') {\n        str[j] = str[i];\n        j++;\n    }\n    \n    i++;\n    goto loop;\n    \n    end:\n    str[j] = \'\\0\';\n    printf("Without spaces: %s\\n", str);\n    return 0;\n}',
    hint: 'Use two indices - one for reading, one for writing'
  },
  {
    id: 'c_goto_090',
    topicId: 'c_goto',
    question: 'Write a program using goto to find substring in a string.',
    mathSolution: 'Find "world" in "Hello world"',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char str[] = "Hello world";\n    char sub[] = "world";\n    int i = 0, j, k;\n    \n    outer:\n    if(str[i] == \'\\0\') goto not_found;\n    \n    j = i;\n    k = 0;\n    \n    inner:\n    if(sub[k] == \'\\0\') goto found;\n    \n    if(str[j] != sub[k]) goto next;\n    \n    j++;\n    k++;\n    goto inner;\n    \n    next:\n    i++;\n    goto outer;\n    \n    found:\n    printf("Substring found at index %d\\n", i);\n    goto end;\n    \n    not_found:\n    printf("Substring not found\\n");\n    \n    end:\n    return 0;\n}',
    hint: 'Check each position if substring matches'
  },

  // ========== ADVANCED PATTERNS AND ALGORITHMS (QUESTIONS 91-100) ==========
  {
    id: 'c_goto_091',
    topicId: 'c_goto',
    question: 'Write a program using goto to implement bubble sort.',
    mathSolution: 'Sort [64,34,25,12,22,11,90] in ascending order',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {64,34,25,12,22,11,90};\n    int n = 7, i, j, temp;\n    \n    i = 0;\n    outer:\n    if(i >= n-1) goto end;\n    \n    j = 0;\n    inner:\n    if(j >= n-i-1) goto next_outer;\n    \n    if(arr[j] > arr[j+1]) {\n        temp = arr[j];\n        arr[j] = arr[j+1];\n        arr[j+1] = temp;\n    }\n    \n    j++;\n    goto inner;\n    \n    next_outer:\n    i++;\n    goto outer;\n    \n    end:\n    printf("Sorted array: ");\n    for(i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Compare adjacent elements and swap if out of order'
  },
  {
    id: 'c_goto_092',
    topicId: 'c_goto',
    question: 'Write a program using goto to implement selection sort.',
    mathSolution: 'Sort array using selection sort',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {64,25,12,22,11};\n    int n = 5, i, j, min_idx, temp;\n    \n    i = 0;\n    outer:\n    if(i >= n-1) goto end;\n    \n    min_idx = i;\n    j = i+1;\n    \n    inner:\n    if(j >= n) goto swap;\n    \n    if(arr[j] < arr[min_idx]) {\n        min_idx = j;\n    }\n    \n    j++;\n    goto inner;\n    \n    swap:\n    if(min_idx != i) {\n        temp = arr[i];\n        arr[i] = arr[min_idx];\n        arr[min_idx] = temp;\n    }\n    \n    i++;\n    goto outer;\n    \n    end:\n    printf("Sorted array: ");\n    for(i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    return 0;\n}',
    hint: 'Find minimum in unsorted portion and swap with first element'
  },
  {
    id: 'c_goto_093',
    topicId: 'c_goto',
    question: 'Write a program using goto to implement binary search.',
    mathSolution: 'Search for 23 in sorted array [10,23,45,70,90]',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10,23,45,70,90};\n    int n = 5, key = 23;\n    int left = 0, right = n-1, mid;\n    \n    search:\n    if(left > right) goto not_found;\n    \n    mid = left + (right - left) / 2;\n    \n    if(arr[mid] == key) goto found;\n    \n    if(arr[mid] < key) {\n        left = mid + 1;\n    } else {\n        right = mid - 1;\n    }\n    \n    goto search;\n    \n    found:\n    printf("%d found at index %d\\n", key, mid);\n    goto end;\n    \n    not_found:\n    printf("%d not found\\n", key);\n    \n    end:\n    return 0;\n}',
    hint: 'Repeatedly divide search interval in half'
  },
  {
    id: 'c_goto_094',
    topicId: 'c_goto',
    question: 'Write a program using goto to find factorial using recursion simulation.',
    mathSolution: 'Calculate 5! = 120 using stack simulation',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int n = 5, result = 1;\n    int stack[100], sp = 0;\n    \n    // Push n onto stack\n    push:\n    if(n == 0) goto calculate;\n    \n    stack[sp++] = n;\n    n--;\n    goto push;\n    \n    // Calculate by popping stack\n    calculate:\n    if(sp == 0) goto end;\n    \n    result = result * stack[--sp];\n    goto calculate;\n    \n    end:\n    printf("Factorial = %d\\n", result);\n    return 0;\n}',
    hint: 'Simulate recursion using explicit stack'
  },
  {
    id: 'c_goto_095',
    topicId: 'c_goto',
    question: 'Write a program using goto to generate all permutations of a string.',
    mathSolution: 'Generate permutations of "ABC"',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nvoid swap(char *a, char *b) {\n    char temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint main() {\n    char str[] = "ABC";\n    int n = strlen(str);\n    int stack[100], sp = 0;\n    int i = 0;\n    \n    // Backtracking simulation\n    start:\n    if(i == n) {\n        printf("%s\\n", str);\n        goto backtrack;\n    }\n    \n    stack[sp++] = i;\n    \n    // Try swapping current position with each later position\n    int j = i;\n    try_swap:\n    if(j >= n) goto backtrack;\n    \n    swap(&str[i], &str[j]);\n    i++;\n    goto start;\n    \n    backtrack:\n    if(sp == 0) goto end;\n    \n    j = stack[--sp];\n    i = j;\n    // Restore swap\n    j++;\n    goto try_swap;\n    \n    end:\n    return 0;\n}',
    hint: 'Use stack to simulate backtracking algorithm'
  },
  {
    id: 'c_goto_096',
    topicId: 'c_goto',
    question: 'Write a program using goto to solve Tower of Hanoi.',
    mathSolution: 'Solve Tower of Hanoi with 3 disks',
    codeSolution: '#include <stdio.h>\n\nstruct State {\n    int n;\n    char from;\n    char to;\n    char aux;\n    int step;\n};\n\nint main() {\n    struct State stack[100];\n    int sp = 0;\n    \n    // Initial state\n    stack[sp].n = 3;\n    stack[sp].from = \'A\';\n    stack[sp].to = \'C\';\n    stack[sp].aux = \'B\';\n    stack[sp].step = 0;\n    sp++;\n    \n    process:\n    if(sp == 0) goto end;\n    \n    struct State *s = &stack[sp-1];\n    \n    if(s->n == 1) {\n        printf("Move disk 1 from %c to %c\\n", s->from, s->to);\n        sp--;\n        goto process;\n    }\n    \n    if(s->step == 0) {\n        // Move n-1 disks from from to aux\n        stack[sp].n = s->n - 1;\n        stack[sp].from = s->from;\n        stack[sp].to = s->aux;\n        stack[sp].aux = s->to;\n        stack[sp].step = 0;\n        sp++;\n        s->step = 1;\n        goto process;\n    }\n    \n    if(s->step == 1) {\n        printf("Move disk %d from %c to %c\\n", s->n, s->from, s->to);\n        s->step = 2;\n        \n        // Move n-1 disks from aux to to\n        stack[sp].n = s->n - 1;\n        stack[sp].from = s->aux;\n        stack[sp].to = s->to;\n        stack[sp].aux = s->from;\n        stack[sp].step = 0;\n        sp++;\n        goto process;\n    }\n    \n    if(s->step == 2) {\n        sp--;\n        goto process;\n    }\n    \n    end:\n    return 0;\n}',
    hint: 'Simulate recursion using stack with state tracking'
  },
  {
    id: 'c_goto_097',
    topicId: 'c_goto',
    question: 'Write a program using goto to implement simple calculator with operator precedence.',
    mathSolution: 'Evaluate 2 + 3 * 4 = 14',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char expr[] = "2+3*4";\n    int values[10], vp = 0;\n    char ops[10];\n    int opc = 0;\n    int i = 0, num = 0, a, b;\n    char op;\n    \n    start:\n    if(expr[i] == \'\\0\') goto process_remaining;\n    \n    if(expr[i] >= \'0\' && expr[i] <= \'9\') {\n        num = num * 10 + (expr[i] - \'0\');\n        i++;\n        goto start;\n    }\n    \n    // Push number\n    values[vp++] = num;\n    num = 0;\n    \n    // Handle operator\n    if(vp > 1 && (expr[i] == \'+\' || expr[i] == \'-\')) {\n        // Process higher precedence operators first\n        process_stack:\n        if(vp < 2) goto push_op;\n        \n        op = ops[--opc];\n        b = values[--vp];\n        a = values[--vp];\n        \n        if(op == \'*\') values[vp++] = a * b;\n        if(op == \'/\') values[vp++] = a / b;\n        \n        goto process_stack;\n    }\n    \n    push_op:\n    ops[opc++] = expr[i];\n    i++;\n    goto start;\n    \n    process_remaining:\n    values[vp++] = num;\n    \n    calc_remaining:\n    if(opc == 0) goto end;\n    \n    op = ops[--opc];\n    b = values[--vp];\n    a = values[--vp];\n    \n    if(op == \'+\') values[vp++] = a + b;\n    if(op == \'-\') values[vp++] = a - b;\n    if(op == \'*\') values[vp++] = a * b;\n    if(op == \'/\') values[vp++] = a / b;\n    \n    goto calc_remaining;\n    \n    end:\n    printf("Result = %d\\n", values[0]);\n    return 0;\n}',
    hint: 'Use two stacks - one for values, one for operators'
  },
  {
    id: 'c_goto_098',
    topicId: 'c_goto',
    question: 'Write a program using goto to implement maze solving using DFS.',
    mathSolution: 'Find path through 4x4 maze',
    codeSolution: '#include <stdio.h>\n\n#define N 4\n\nint maze[N][N] = {\n    {1,0,0,0},\n    {1,1,0,1},\n    {0,1,0,0},\n    {1,1,1,1}\n};\n\nint sol[N][N] = {0};\n\nstruct Point {\n    int x, y;\n} stack[100];\nint sp = 0;\n\nint is_safe(int x, int y) {\n    return (x >= 0 && x < N && y >= 0 && y < N && maze[x][y] == 1);\n}\n\nint main() {\n    int x = 0, y = 0;\n    sol[0][0] = 1;\n    \n    explore:\n    if(x == N-1 && y == N-1) goto found;\n    \n    // Try right\n    if(is_safe(x, y+1) && !sol[x][y+1]) {\n        stack[sp].x = x;\n        stack[sp].y = y;\n        sp++;\n        y++;\n        sol[x][y] = 1;\n        goto explore;\n    }\n    \n    // Try down\n    if(is_safe(x+1, y) && !sol[x+1][y]) {\n        stack[sp].x = x;\n        stack[sp].y = y;\n        sp++;\n        x++;\n        sol[x][y] = 1;\n        goto explore;\n    }\n    \n    // Try left\n    if(is_safe(x, y-1) && !sol[x][y-1]) {\n        stack[sp].x = x;\n        stack[sp].y = y;\n        sp++;\n        y--;\n        sol[x][y] = 1;\n        goto explore;\n    }\n    \n    // Try up\n    if(is_safe(x-1, y) && !sol[x-1][y]) {\n        stack[sp].x = x;\n        stack[sp].y = y;\n        sp++;\n        x--;\n        sol[x][y] = 1;\n        goto explore;\n    }\n    \n    // Backtrack\n    if(sp == 0) goto no_path;\n    \n    sp--;\n    x = stack[sp].x;\n    y = stack[sp].y;\n    goto explore;\n    \n    found:\n    printf("Path found!\\n");\n    goto end;\n    \n    no_path:\n    printf("No path exists\\n");\n    \n    end:\n    return 0;\n}',
    hint: 'Use stack to remember path and backtrack when stuck'
  },
  {
    id: 'c_goto_099',
    topicId: 'c_goto',
    question: 'Write a program using goto to implement N-Queens problem.',
    mathSolution: 'Place 4 queens on 4x4 chessboard',
    codeSolution: '#include <stdio.h>\n\n#define N 4\n\nint board[N][N] = {0};\nint cols[N] = {0};\nint diag1[2*N-1] = {0};\nint diag2[2*N-1] = {0};\n\nint stack[N];\nint sp = 0;\n\nint main() {\n    int row = 0, col = 0;\n    \n    start:\n    if(row == N) goto found;\n    \n    try_col:\n    if(col >= N) goto backtrack;\n    \n    // Check if safe\n    if(!cols[col] && !diag1[row+col] && !diag2[row-col+N-1]) {\n        // Place queen\n        board[row][col] = 1;\n        cols[col] = 1;\n        diag1[row+col] = 1;\n        diag2[row-col+N-1] = 1;\n        \n        stack[sp++] = col;\n        \n        row++;\n        col = 0;\n        goto start;\n    }\n    \n    col++;\n    goto try_col;\n    \n    backtrack:\n    if(sp == 0) goto no_solution;\n    \n    row--;\n    col = stack[--sp];\n    \n    // Remove queen\n    board[row][col] = 0;\n    cols[col] = 0;\n    diag1[row+col] = 0;\n    diag2[row-col+N-1] = 0;\n    \n    col++;\n    goto try_col;\n    \n    found:\n    printf("Solution found:\\n");\n    for(int i = 0; i < N; i++) {\n        for(int j = 0; j < N; j++) {\n            printf("%d ", board[i][j]);\n        }\n        printf("\\n");\n    }\n    goto end;\n    \n    no_solution:\n    printf("No solution exists\\n");\n    \n    end:\n    return 0;\n}',
    hint: 'Place queens row by row, backtrack when no safe column'
  },
  {
    id: 'c_goto_100',
    topicId: 'c_goto',
    question: 'Write a program using goto to implement a complete expression evaluator with parentheses.',
    mathSolution: 'Evaluate (2+3)*(4-1) = 15',
    codeSolution: '#include <stdio.h>\n\nint values[100], vp = 0;\nchar ops[100];\nint opc = 0;\nchar expr[] = "(2+3)*(4-1)";\nint i = 0;\n\nvoid push_value(int v) { values[vp++] = v; }\nint pop_value() { return values[--vp]; }\nvoid push_op(char c) { ops[opc++] = c; }\nchar pop_op() { return ops[--opc]; }\n\nint precedence(char op) {\n    if(op == \'+\' || op == \'-\') return 1;\n    if(op == \'*\' || op == \'/\') return 2;\n    return 0;\n}\n\nvoid apply_op() {\n    char op = pop_op();\n    int b = pop_value();\n    int a = pop_value();\n    \n    switch(op) {\n        case \'+\': push_value(a + b); break;\n        case \'-\': push_value(a - b); break;\n        case \'*\': push_value(a * b); break;\n        case \'/\': push_value(a / b); break;\n    }\n}\n\nint main() {\n    int num = 0;\n    \n    start:\n    if(expr[i] == \'\\0\') goto end_expr;\n    \n    if(expr[i] >= \'0\' && expr[i] <= \'9\') {\n        num = num * 10 + (expr[i] - \'0\');\n        i++;\n        goto start;\n    }\n    \n    if(num != 0) {\n        push_value(num);\n        num = 0;\n    }\n    \n    if(expr[i] == \'(\') {\n        push_op(\'(\');\n        i++;\n        goto start;\n    }\n    \n    if(expr[i] == \')\') {\n        process_paren:\n        if(opc > 0 && ops[opc-1] != \'(\') {\n            apply_op();\n            goto process_paren;\n        }\n        pop_op(); // Remove \'(\'\n        i++;\n        goto start;\n    }\n    \n    if(expr[i] == \'+\' || expr[i] == \'-\' || expr[i] == \'*\' || expr[i] == \'/\') {\n        process_op:\n        if(opc > 0 && precedence(ops[opc-1]) >= precedence(expr[i])) {\n            apply_op();\n            goto process_op;\n        }\n        push_op(expr[i]);\n        i++;\n        goto start;\n    }\n    \n    i++; // Skip other characters\n    goto start;\n    \n    end_expr:\n    if(num != 0) push_value(num);\n    \n    process_remaining:\n    if(opc > 0) {\n        apply_op();\n        goto process_remaining;\n    }\n    \n    printf("Result = %d\\n", values[0]);\n    return 0;\n}',
    hint: 'Use two stacks and handle operator precedence and parentheses'
  }
);