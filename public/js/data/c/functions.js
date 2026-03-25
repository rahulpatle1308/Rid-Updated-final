QuizData.questions.push(
  // ========== BASIC FUNCTION DEFINITION AND CALLING (QUESTIONS 1-10) ==========
  {
    id: 'c_func_001',
    topicId: 'c_functions',
    question: 'Write a function to add two integers and return the result.',
    mathSolution: 'Add a and b, return sum',
    codeSolution: 'int add(int a, int b) {\n    return a + b;\n}',
    hint: 'Function returns int, takes two int parameters'
  },
  {
    id: 'c_func_002',
    topicId: 'c_functions',
    question: 'Create a void function that prints "Hello World" without returning anything.',
    mathSolution: 'Print greeting message',
    codeSolution: 'void greet(void) {\n    printf("Hello World");\n}',
    hint: 'void return type means no return value'
  },
  {
    id: 'c_func_003',
    topicId: 'c_functions',
    question: 'Write a function to find maximum of two numbers.',
    mathSolution: 'Return larger of x and y',
    codeSolution: 'int max(int x, int y) {\n    return (x > y) ? x : y;\n}',
    hint: 'Use conditional operator or if-else'
  },
  {
    id: 'c_func_004',
    topicId: 'c_functions',
    question: 'Create a function that calculates area of circle given radius.',
    mathSolution: 'Area = π * r²',
    codeSolution: 'float areaCircle(float r) {\n    return 3.14159 * r * r;\n}',
    hint: 'Use float parameters and return type'
  },
  {
    id: 'c_func_005',
    topicId: 'c_functions',
    question: 'Write a function to check if a character is vowel or consonant.',
    mathSolution: 'Return 1 if vowel, 0 if consonant',
    codeSolution: 'int isVowel(char c) {\n    c = tolower(c);\n    return (c==\'a\'||c==\'e\'||c==\'i\'||c==\'o\'||c==\'u\');\n}',
    hint: 'Check against set of vowels'
  },
  {
    id: 'c_func_006',
    topicId: 'c_functions',
    question: 'Create a function that converts Celsius to Fahrenheit.',
    mathSolution: 'F = (C × 9/5) + 32',
    codeSolution: 'float celsiusToFahrenheit(float c) {\n    return (c * 9/5) + 32;\n}',
    hint: 'Apply conversion formula'
  },
  {
    id: 'c_func_007',
    topicId: 'c_functions',
    question: 'Write a function to find sum of array elements.',
    mathSolution: 'Sum all elements in array',
    codeSolution: 'int arraySum(int arr[], int size) {\n    int sum = 0;\n    for(int i = 0; i < size; i++)\n        sum += arr[i];\n    return sum;\n}',
    hint: 'Pass array and its size'
  },
  {
    id: 'c_func_008',
    topicId: 'c_functions',
    question: 'Create a function to find average of array elements.',
    mathSolution: 'Average = sum / size',
    codeSolution: 'float arrayAvg(int arr[], int n) {\n    int sum = 0;\n    for(int i = 0; i < n; i++)\n        sum += arr[i];\n    return (float)sum / n;\n}',
    hint: 'Cast sum to float for division'
  },
  {
    id: 'c_func_009',
    topicId: 'c_functions',
    question: 'Write a function to reverse an array in place.',
    mathSolution: 'Reverse order of elements',
    codeSolution: 'void reverseArray(int arr[], int n) {\n    for(int i = 0; i < n/2; i++) {\n        int temp = arr[i];\n        arr[i] = arr[n-1-i];\n        arr[n-1-i] = temp;\n    }\n}',
    hint: 'Swap elements from ends'
  },
  {
    id: 'c_func_010',
    topicId: 'c_functions',
    question: 'Write a function that returns pointer to maximum element in array.',
    mathSolution: 'Find address of largest element',
    codeSolution: 'int* maxElement(int arr[], int n) {\n    int *max = &arr[0];\n    for(int i = 1; i < n; i++)\n        if(arr[i] > *max)\n            max = &arr[i];\n    return max;\n}',
    hint: 'Return pointer not value'
  },

  // ========== FUNCTIONS WITH DIFFERENT PARAMETER TYPES (QUESTIONS 11-20) ==========
  {
    id: 'c_func_011',
    topicId: 'c_functions',
    question: 'Create a function to allocate memory for array and return pointer.',
    mathSolution: 'Dynamically allocate array of size n',
    codeSolution: 'int* createArray(int n) {\n    return (int*)malloc(n * sizeof(int));\n}',
    hint: 'Use malloc and return pointer'
  },
  {
    id: 'c_func_012',
    topicId: 'c_functions',
    question: 'Write a recursive function to calculate factorial of n.',
    mathSolution: 'n! = n × (n-1)!',
    codeSolution: 'int factorial(int n) {\n    if(n <= 1) return 1;\n    return n * factorial(n-1);\n}',
    hint: 'Base case: n=0 or 1'
  },
  {
    id: 'c_func_013',
    topicId: 'c_functions',
    question: 'Create recursive function to find nth Fibonacci number.',
    mathSolution: 'Fib(n) = Fib(n-1) + Fib(n-2)',
    codeSolution: 'int fib(int n) {\n    if(n <= 1) return n;\n    return fib(n-1) + fib(n-2);\n}',
    hint: 'Base cases: fib(0)=0, fib(1)=1'
  },
  {
    id: 'c_func_014',
    topicId: 'c_functions',
    question: 'Write recursive function to calculate power (x^n).',
    mathSolution: 'x^n = x × x^(n-1)',
    codeSolution: 'int power(int x, int n) {\n    if(n == 0) return 1;\n    return x * power(x, n-1);\n}',
    hint: 'Base case: n=0 returns 1'
  },
  {
    id: 'c_func_015',
    topicId: 'c_functions',
    question: 'Create recursive function to find sum of digits of a number.',
    mathSolution: '123 -> 1+2+3 = 6',
    codeSolution: 'int sumDigits(int n) {\n    if(n == 0) return 0;\n    return (n % 10) + sumDigits(n / 10);\n}',
    hint: 'Add last digit to sum of remaining'
  },
  {
    id: 'c_func_016',
    topicId: 'c_functions',
    question: 'Write a function to find length of string (like strlen).',
    mathSolution: 'Count characters until null',
    codeSolution: 'int stringLength(char str[]) {\n    int len = 0;\n    while(str[len] != \'\\0\')\n        len++;\n    return len;\n}',
    hint: 'Loop until null terminator'
  },
  {
    id: 'c_func_017',
    topicId: 'c_functions',
    question: 'Create function to copy string (like strcpy).',
    mathSolution: 'Copy src to dest',
    codeSolution: 'void stringCopy(char dest[], char src[]) {\n    int i = 0;\n    while(src[i] != \'\\0\') {\n        dest[i] = src[i];\n        i++;\n    }\n    dest[i] = \'\\0\';\n}',
    hint: 'Copy until null terminator'
  },
  {
    id: 'c_func_018',
    topicId: 'c_functions',
    question: 'Write function to concatenate two strings (like strcat).',
    mathSolution: 'Append src to dest',
    codeSolution: 'void stringConcat(char dest[], char src[]) {\n    int i = 0, j = 0;\n    while(dest[i] != \'\\0\')\n        i++;\n    while(src[j] != \'\\0\')\n        dest[i++] = src[j++];\n    dest[i] = \'\\0\';\n}',
    hint: 'Find end of dest, then copy src'
  },
  {
    id: 'c_func_019',
    topicId: 'c_functions',
    question: 'Create function to compare two strings (like strcmp).',
    mathSolution: 'Return difference of first mismatching chars',
    codeSolution: 'int stringCompare(char s1[], char s2[]) {\n    int i = 0;\n    while(s1[i] == s2[i]) {\n        if(s1[i] == \'\\0\')\n            return 0;\n        i++;\n    }\n    return s1[i] - s2[i];\n}',
    hint: 'Compare character by character'
  },
  {
    id: 'c_func_020',
    topicId: 'c_functions',
    question: 'Write function to reverse a string in place.',
    mathSolution: 'Reverse "hello" to "olleh"',
    codeSolution: 'void reverseString(char str[]) {\n    int n = strlen(str);\n    for(int i = 0; i < n/2; i++) {\n        char temp = str[i];\n        str[i] = str[n-1-i];\n        str[n-1-i] = temp;\n    }\n}',
    hint: 'Swap characters from ends'
  },

  // ========== MATHEMATICAL FUNCTIONS (QUESTIONS 21-30) ==========
  {
    id: 'c_func_021',
    topicId: 'c_functions',
    question: 'Write function to check if number is prime.',
    mathSolution: 'Return 1 if prime, 0 otherwise',
    codeSolution: 'int isPrime(int n) {\n    if(n < 2) return 0;\n    for(int i = 2; i <= n/2; i++)\n        if(n % i == 0) return 0;\n    return 1;\n}',
    hint: 'Check divisibility up to n/2'
  },
  {
    id: 'c_func_022',
    topicId: 'c_functions',
    question: 'Create function to find GCD of two numbers using Euclid algorithm.',
    mathSolution: 'GCD(48,18) = 6',
    codeSolution: 'int gcd(int a, int b) {\n    if(b == 0) return a;\n    return gcd(b, a % b);\n}',
    hint: 'Recursive or iterative approach'
  },
  {
    id: 'c_func_023',
    topicId: 'c_functions',
    question: 'Write function to find LCM of two numbers.',
    mathSolution: 'LCM(a,b) = (a*b)/GCD(a,b)',
    codeSolution: 'int lcm(int a, int b) {\n    return (a * b) / gcd(a, b);\n}',
    hint: 'Use GCD function'
  },
  {
    id: 'c_func_024',
    topicId: 'c_functions',
    question: 'Create function to check if number is palindrome.',
    mathSolution: '121 reversed is 121',
    codeSolution: 'int isPalindrome(int n) {\n    int rev = 0, orig = n;\n    while(n > 0) {\n        rev = rev * 10 + n % 10;\n        n /= 10;\n    }\n    return rev == orig;\n}',
    hint: 'Reverse number and compare'
  },
  {
    id: 'c_func_025',
    topicId: 'c_functions',
    question: 'Write function to count digits in a number.',
    mathSolution: 'Count digits in 12345 = 5',
    codeSolution: 'int countDigits(int n) {\n    int count = 0;\n    while(n != 0) {\n        count++;\n        n /= 10;\n    }\n    return count;\n}',
    hint: 'Divide by 10 until zero'
  },
  {
    id: 'c_func_026',
    topicId: 'c_functions',
    question: 'Write function to swap two integers using call by reference.',
    mathSolution: 'Swap a and b values',
    codeSolution: 'void swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}',
    hint: 'Use pointers to modify original values'
  },
  {
    id: 'c_func_027',
    topicId: 'c_functions',
    question: 'Create function that demonstrates call by value (no change in original).',
    mathSolution: 'Parameter changed only inside function',
    codeSolution: 'void changeValue(int x) {\n    x = 100;\n}',
    hint: 'x is a copy, original unaffected'
  },
  {
    id: 'c_func_028',
    topicId: 'c_functions',
    question: 'Write function to increment a variable using pointer.',
    mathSolution: 'Add 1 to value at pointer',
    codeSolution: 'void increment(int *p) {\n    (*p)++;\n}',
    hint: 'Dereference pointer to modify value'
  },
  {
    id: 'c_func_029',
    topicId: 'c_functions',
    question: 'Write function to return both quotient and remainder using pointers.',
    mathSolution: 'Divide a by b, return both results',
    codeSolution: 'void divide(int a, int b, int *q, int *r) {\n    *q = a / b;\n    *r = a % b;\n}',
    hint: 'Use pointers for multiple outputs'
  },
  {
    id: 'c_func_030',
    topicId: 'c_functions',
    question: 'Create function to find min and max of array using pointers.',
    mathSolution: 'Return both min and max values',
    codeSolution: 'void minMax(int arr[], int n, int *min, int *max) {\n    *min = *max = arr[0];\n    for(int i = 1; i < n; i++) {\n        if(arr[i] < *min) *min = arr[i];\n        if(arr[i] > *max) *max = arr[i];\n    }\n}',
    hint: 'Update min and max via pointers'
  },

  // ========== STATIC VARIABLES AND FUNCTION POINTERS (QUESTIONS 31-40) ==========
  {
    id: 'c_func_031',
    topicId: 'c_functions',
    question: 'Write a function that counts how many times it was called using static variable.',
    mathSolution: 'Return call count',
    codeSolution: 'int countCalls(void) {\n    static int count = 0;\n    return ++count;\n}',
    hint: 'Static retains value between calls'
  },
  {
    id: 'c_func_032',
    topicId: 'c_functions',
    question: 'Create function that returns next Fibonacci number each call using static.',
    mathSolution: 'Return sequence: 0,1,1,2,3,5,...',
    codeSolution: 'int nextFib(void) {\n    static int a = 0, b = 1, next;\n    next = a;\n    a = b;\n    b = next + a;\n    return next;\n}',
    hint: 'Store previous two values statically'
  },
  {
    id: 'c_func_033',
    topicId: 'c_functions',
    question: 'Declare a function pointer for a function taking two ints and returning int.',
    mathSolution: 'Pointer to functions like add, subtract',
    codeSolution: 'int (*funcPtr)(int, int);',
    hint: 'Syntax: return_type (*name)(parameter_types)'
  },
  {
    id: 'c_func_034',
    topicId: 'c_functions',
    question: 'Write code to call a function using function pointer.',
    mathSolution: 'Use pointer to call add function',
    codeSolution: 'int (*ptr)(int,int) = &add;\nint result = ptr(5, 3);',
    hint: 'Dereference or use pointer directly'
  },
  {
    id: 'c_func_035',
    topicId: 'c_functions',
    question: 'Create a calculator using array of function pointers.',
    mathSolution: 'Select operation by index',
    codeSolution: 'int (*ops[])(int,int) = {add, sub, mul, div};\nresult = ops[choice](a, b);',
    hint: 'Array of function pointers'
  },
  {
    id: 'c_func_036',
    topicId: 'c_functions',
    question: 'Write recursive function to find GCD (Euclidean algorithm).',
    mathSolution: 'GCD(48,18)=6',
    codeSolution: 'int gcd(int a, int b) {\n    if(b == 0) return a;\n    return gcd(b, a % b);\n}',
    hint: 'Recursive until b=0'
  },
  {
    id: 'c_func_037',
    topicId: 'c_functions',
    question: 'Create recursive function to find sum of array elements.',
    mathSolution: 'Sum of [1,2,3,4,5] = 15',
    codeSolution: 'int arraySum(int arr[], int n) {\n    if(n <= 0) return 0;\n    return arr[n-1] + arraySum(arr, n-1);\n}',
    hint: 'Add last element to sum of rest'
  },
  {
    id: 'c_func_038',
    topicId: 'c_functions',
    question: 'Write recursive function to reverse a string.',
    mathSolution: 'Reverse "hello" to "olleh"',
    codeSolution: 'void reverse(char str[], int start, int end) {\n    if(start >= end) return;\n    char temp = str[start];\n    str[start] = str[end];\n    str[end] = temp;\n    reverse(str, start+1, end-1);\n}',
    hint: 'Swap ends recursively'
  },
  {
    id: 'c_func_039',
    topicId: 'c_functions',
    question: 'Create recursive function to check palindrome string.',
    mathSolution: 'Check if "madam" is palindrome',
    codeSolution: 'int isPalindrome(char str[], int s, int e) {\n    if(s >= e) return 1;\n    if(str[s] != str[e]) return 0;\n    return isPalindrome(str, s+1, e-1);\n}',
    hint: 'Compare ends recursively'
  },
  {
    id: 'c_func_040',
    topicId: 'c_functions',
    question: 'Write recursive function for Tower of Hanoi.',
    mathSolution: 'Move n disks from A to C using B',
    codeSolution: 'void towerOfHanoi(int n, char from, char to, char aux) {\n    if(n == 1) {\n        printf("Move disk 1 from %c to %c\\n", from, to);\n        return;\n    }\n    towerOfHanoi(n-1, from, aux, to);\n    printf("Move disk %d from %c to %c\\n", n, from, to);\n    towerOfHanoi(n-1, aux, to, from);\n}',
    hint: 'Move n-1 disks, then nth, then n-1'
  },

  // ========== INLINE AND VARIADIC FUNCTIONS (QUESTIONS 41-50) ==========
  {
    id: 'c_func_041',
    topicId: 'c_functions',
    question: 'Write an inline function to find square of a number.',
    mathSolution: 'Return x*x',
    codeSolution: 'inline int square(int x) {\n    return x * x;\n}',
    hint: 'inline suggests compiler to avoid function call'
  },
  {
    id: 'c_func_042',
    topicId: 'c_functions',
    question: 'Create inline function to check if character is digit.',
    mathSolution: 'Return 1 if c between \'0\' and \'9\'',
    codeSolution: 'inline int isDigit(char c) {\n    return (c >= \'0\' && c <= \'9\');\n}',
    hint: 'Compare with ASCII values'
  },
  {
    id: 'c_func_043',
    topicId: 'c_functions',
    question: 'Write variadic function to find sum of n numbers.',
    mathSolution: 'Sum variable number of arguments',
    codeSolution: 'int sum(int count, ...) {\n    va_list args;\n    va_start(args, count);\n    int total = 0;\n    for(int i = 0; i < count; i++)\n        total += va_arg(args, int);\n    va_end(args);\n    return total;\n}',
    hint: 'Use stdarg.h macros'
  },
  {
    id: 'c_func_044',
    topicId: 'c_functions',
    question: 'Create variadic function to find maximum of numbers.',
    mathSolution: 'Max of variable arguments',
    codeSolution: 'int max(int count, ...) {\n    va_list args;\n    va_start(args, count);\n    int max = va_arg(args, int);\n    for(int i = 1; i < count; i++) {\n        int val = va_arg(args, int);\n        if(val > max) max = val;\n    }\n    va_end(args);\n    return max;\n}',
    hint: 'Compare each argument with current max'
  },
  {
    id: 'c_func_045',
    topicId: 'c_functions',
    question: 'Write a function containing nested function (GCC extension).',
    mathSolution: 'Inner function defined inside outer',
    codeSolution: 'void outer() {\n    void inner() {\n        printf("Inside inner\\n");\n    }\n    inner();\n}',
    hint: 'Not standard C, but supported in GCC'
  },
  {
    id: 'c_func_046',
    topicId: 'c_functions',
    question: 'Create a structure for Point and write function to calculate distance.',
    mathSolution: 'Distance between (x1,y1) and (x2,y2)',
    codeSolution: 'typedef struct {\n    int x, y;\n} Point;\n\ndouble distance(Point p1, Point p2) {\n    return sqrt(pow(p2.x-p1.x,2) + pow(p2.y-p1.y,2));\n}',
    hint: 'Use sqrt and pow from math.h'
  },
  {
    id: 'c_func_047',
    topicId: 'c_functions',
    question: 'Write function to return a structure.',
    mathSolution: 'Create and return a Point',
    codeSolution: 'Point createPoint(int x, int y) {\n    Point p = {x, y};\n    return p;\n}',
    hint: 'Return structure by value'
  },
  {
    id: 'c_func_048',
    topicId: 'c_functions',
    question: 'Create function that modifies structure using pointer.',
    mathSolution: 'Update point coordinates',
    codeSolution: 'void movePoint(Point *p, int dx, int dy) {\n    p->x += dx;\n    p->y += dy;\n}',
    hint: 'Use arrow operator ->'
  },
  {
    id: 'c_func_049',
    topicId: 'c_functions',
    question: 'Simulate function overloading using _Generic for absolute value.',
    mathSolution: 'abs for int, fabs for double',
    codeSolution: '#define ABS(x) _Generic((x), int: abs, double: fabs)(x)',
    hint: 'C11 _Generic keyword'
  },
  {
    id: 'c_func_050',
    topicId: 'c_functions',
    question: 'Write a function that takes callback to process array elements.',
    mathSolution: 'Apply function to each element',
    codeSolution: 'void processArray(int arr[], int n, int (*func)(int)) {\n    for(int i = 0; i < n; i++)\n        arr[i] = func(arr[i]);\n}',
    hint: 'Function pointer parameter'
  },

  // ========== CALLBACK AND SORTING FUNCTIONS (QUESTIONS 51-60) ==========
  {
    id: 'c_func_051',
    topicId: 'c_functions',
    question: 'Create sorting function that takes comparison callback.',
    mathSolution: 'Generic sort with custom compare',
    codeSolution: 'void bubbleSort(void *arr, int n, int size, int (*cmp)(void*,void*)) {\n    // sort using cmp\n}',
    hint: 'cmp returns negative if first<second'
  },
  {
    id: 'c_func_052',
    topicId: 'c_functions',
    question: 'Write function to calculate sine using Taylor series.',
    mathSolution: 'sin(x) = x - x^3/3! + x^5/5! - ...',
    codeSolution: 'double sine(double x) {\n    double term = x, sum = 0;\n    for(int n = 1; n <= 10; n += 2) {\n        sum += term;\n        term *= -x * x / ((n+1) * (n+2));\n    }\n    return sum;\n}',
    hint: 'Iterate odd terms with alternating sign'
  },
  {
    id: 'c_func_053',
    topicId: 'c_functions',
    question: 'Create function to calculate e^x using series.',
    mathSolution: 'e^x = 1 + x + x^2/2! + x^3/3! + ...',
    codeSolution: 'double expSeries(double x) {\n    double term = 1, sum = 1;\n    for(int n = 1; n <= 20; n++) {\n        term *= x / n;\n        sum += term;\n    }\n    return sum;\n}',
    hint: 'Each term = previous * x/n'
  },
  {
    id: 'c_func_054',
    topicId: 'c_functions',
    question: 'Write function to add two matrices.',
    mathSolution: 'C[i][j] = A[i][j] + B[i][j]',
    codeSolution: 'void matrixAdd(int a[][3], int b[][3], int c[][3], int rows, int cols) {\n    for(int i = 0; i < rows; i++)\n        for(int j = 0; j < cols; j++)\n            c[i][j] = a[i][j] + b[i][j];\n}',
    hint: 'Nested loops for addition'
  },
  {
    id: 'c_func_055',
    topicId: 'c_functions',
    question: 'Create function to multiply two matrices.',
    mathSolution: 'C[i][j] = sum(A[i][k] * B[k][j])',
    codeSolution: 'void matrixMul(int a[][3], int b[][3], int c[][3], int r1, int c1, int c2) {\n    for(int i = 0; i < r1; i++)\n        for(int j = 0; j < c2; j++) {\n            c[i][j] = 0;\n            for(int k = 0; k < c1; k++)\n                c[i][j] += a[i][k] * b[k][j];\n        }\n}',
    hint: 'Triple nested loops'
  },
  {
    id: 'c_func_056',
    topicId: 'c_functions',
    question: 'Write function to find transpose of matrix.',
    mathSolution: 'B[j][i] = A[i][j]',
    codeSolution: 'void transpose(int a[][3], int b[][3], int rows, int cols) {\n    for(int i = 0; i < rows; i++)\n        for(int j = 0; j < cols; j++)\n            b[j][i] = a[i][j];\n}',
    hint: 'Swap row and column indices'
  },
  {
    id: 'c_func_057',
    topicId: 'c_functions',
    question: 'Write function for binary search in sorted array.',
    mathSolution: 'Return index of key or -1',
    codeSolution: 'int binarySearch(int arr[], int n, int key) {\n    int low = 0, high = n-1;\n    while(low <= high) {\n        int mid = (low + high) / 2;\n        if(arr[mid] == key) return mid;\n        if(arr[mid] < key) low = mid + 1;\n        else high = mid - 1;\n    }\n    return -1;\n}',
    hint: 'Divide and conquer approach'
  },
  {
    id: 'c_func_058',
    topicId: 'c_functions',
    question: 'Create function for bubble sort.',
    mathSolution: 'Sort array in ascending order',
    codeSolution: 'void bubbleSort(int arr[], int n) {\n    for(int i = 0; i < n-1; i++)\n        for(int j = 0; j < n-1-i; j++)\n            if(arr[j] > arr[j+1]) {\n                int temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n}',
    hint: 'Compare adjacent and swap'
  },
  {
    id: 'c_func_059',
    topicId: 'c_functions',
    question: 'Write function for selection sort.',
    mathSolution: 'Find minimum and place at beginning',
    codeSolution: 'void selectionSort(int arr[], int n) {\n    for(int i = 0; i < n-1; i++) {\n        int min = i;\n        for(int j = i+1; j < n; j++)\n            if(arr[j] < arr[min]) min = j;\n        int temp = arr[i];\n        arr[i] = arr[min];\n        arr[min] = temp;\n    }\n}',
    hint: 'Select min and swap'
  },
  {
    id: 'c_func_060',
    topicId: 'c_functions',
    question: 'Create function for insertion sort.',
    mathSolution: 'Insert element in sorted portion',
    codeSolution: 'void insertionSort(int arr[], int n) {\n    for(int i = 1; i < n; i++) {\n        int key = arr[i], j = i-1;\n        while(j >= 0 && arr[j] > key) {\n            arr[j+1] = arr[j];\n            j--;\n        }\n        arr[j+1] = key;\n    }\n}',
    hint: 'Shift elements to make room'
  },

  // ========== BIT MANIPULATION AND FILE OPERATIONS (QUESTIONS 61-70) ==========
  {
    id: 'c_func_061',
    topicId: 'c_functions',
    question: 'Write function to count set bits (1s) in integer.',
    mathSolution: 'Count 1s in binary representation',
    codeSolution: 'int countSetBits(int n) {\n    int count = 0;\n    while(n) {\n        count += n & 1;\n        n >>= 1;\n    }\n    return count;\n}',
    hint: 'Check LSB and shift right'
  },
  {
    id: 'c_func_062',
    topicId: 'c_functions',
    question: 'Create function to check if number is power of 2.',
    mathSolution: 'Powers: 1,2,4,8,16,...',
    codeSolution: 'int isPowerOfTwo(int n) {\n    return n && !(n & (n-1));\n}',
    hint: 'Power of 2 has exactly one set bit'
  },
  {
    id: 'c_func_063',
    topicId: 'c_functions',
    question: 'Write function to reverse bits of an integer.',
    mathSolution: 'Reverse binary representation',
    codeSolution: 'unsigned int reverseBits(unsigned int n) {\n    unsigned int rev = 0;\n    for(int i = 0; i < 32; i++) {\n        rev <<= 1;\n        rev |= n & 1;\n        n >>= 1;\n    }\n    return rev;\n}',
    hint: 'Build reversed bit by bit'
  },
  {
    id: 'c_func_064',
    topicId: 'c_functions',
    question: 'Write function to read integers from file and return sum.',
    mathSolution: 'Sum all numbers in file',
    codeSolution: 'int sumFile(char *filename) {\n    FILE *fp = fopen(filename, "r");\n    int num, sum = 0;\n    while(fscanf(fp, "%d", &num) == 1)\n        sum += num;\n    fclose(fp);\n    return sum;\n}',
    hint: 'Read until EOF'
  },
  {
    id: 'c_func_065',
    topicId: 'c_functions',
    question: 'Create function to write array to file.',
    mathSolution: 'Write each element to file',
    codeSolution: 'void writeArrayToFile(char *file, int arr[], int n) {\n    FILE *fp = fopen(file, "w");\n    for(int i = 0; i < n; i++)\n        fprintf(fp, "%d ", arr[i]);\n    fclose(fp);\n}',
    hint: 'Open, write, close'
  },
  {
    id: 'c_func_066',
    topicId: 'c_functions',
    question: 'Write function to check if year is leap year.',
    mathSolution: 'Leap if divisible by 4, not by 100 unless by 400',
    codeSolution: 'int isLeap(int year) {\n    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);\n}',
    hint: 'Apply leap year rules'
  },
  {
    id: 'c_func_067',
    topicId: 'c_functions',
    question: 'Create function to return number of days in month.',
    mathSolution: 'Days in month considering leap year',
    codeSolution: 'int daysInMonth(int month, int year) {\n    int days[] = {31,28,31,30,31,30,31,31,30,31,30,31};\n    if(month == 2 && isLeap(year)) return 29;\n    return days[month-1];\n}',
    hint: 'February special case'
  },
  {
    id: 'c_func_068',
    topicId: 'c_functions',
    question: 'Write function to convert binary string to integer.',
    mathSolution: '"1010" -> 10',
    codeSolution: 'int binToInt(char *bin) {\n    int val = 0;\n    while(*bin) {\n        val = val * 2 + (*bin++ - \'0\');\n    }\n    return val;\n}',
    hint: 'Process each digit'
  },
  {
    id: 'c_func_069',
    topicId: 'c_functions',
    question: 'Create function to convert integer to binary string.',
    mathSolution: '10 -> "1010"',
    codeSolution: 'void intToBin(int n, char *bin) {\n    int i = 0;\n    while(n > 0) {\n        bin[i++] = n % 2 + \'0\';\n        n /= 2;\n    }\n    bin[i] = \'\\0\';\n    strrev(bin);\n}',
    hint: 'Reverse after generating'
  },
  {
    id: 'c_func_070',
    topicId: 'c_functions',
    question: 'Write function to validate email format (contains @ and .).',
    mathSolution: 'Check email format',
    codeSolution: 'int isValidEmail(char *email) {\n    int at = 0, dot = 0;\n    for(int i = 0; email[i]; i++) {\n        if(email[i] == \'@\') at = i;\n        if(email[i] == \'.\') dot = i;\n    }\n    return (at > 0 && dot > at + 1);\n}',
    hint: '@ must be before last dot'
  },

  // ========== VALIDATION AND MEMORY MANAGEMENT (QUESTIONS 71-80) ==========
  {
    id: 'c_func_071',
    topicId: 'c_functions',
    question: 'Create function to validate password strength.',
    mathSolution: 'Check upper, lower, digit, length',
    codeSolution: 'int isStrongPwd(char *pwd) {\n    int upper = 0, lower = 0, digit = 0;\n    if(strlen(pwd) < 8) return 0;\n    for(int i = 0; pwd[i]; i++) {\n        if(isupper(pwd[i])) upper = 1;\n        if(islower(pwd[i])) lower = 1;\n        if(isdigit(pwd[i])) digit = 1;\n    }\n    return upper && lower && digit;\n}',
    hint: 'Check all criteria'
  },
  {
    id: 'c_func_072',
    topicId: 'c_functions',
    question: 'Write function to create a copy of string dynamically.',
    mathSolution: 'Duplicate string using malloc',
    codeSolution: 'char *strdup(char *s) {\n    char *copy = malloc(strlen(s) + 1);\n    if(copy) strcpy(copy, s);\n    return copy;\n}',
    hint: 'Allocate and copy'
  },
  {
    id: 'c_func_073',
    topicId: 'c_functions',
    question: 'Create function to resize dynamically allocated array.',
    mathSolution: 'Reallocate memory with new size',
    codeSolution: 'int *resizeArray(int *arr, int oldSize, int newSize) {\n    int *newArr = realloc(arr, newSize * sizeof(int));\n    if(newArr && newSize > oldSize)\n        for(int i = oldSize; i < newSize; i++)\n            newArr[i] = 0;\n    return newArr;\n}',
    hint: 'Use realloc and initialize new elements'
  },
  {
    id: 'c_func_074',
    topicId: 'c_functions',
    question: 'Write function to calculate nth root using Newton method.',
    mathSolution: 'Cube root of 27 = 3',
    codeSolution: 'double nthRoot(double x, int n) {\n    double guess = x / n;\n    while(1) {\n        double newGuess = ((n-1) * guess + x / pow(guess, n-1)) / n;\n        if(fabs(newGuess - guess) < 1e-10) return newGuess;\n        guess = newGuess;\n    }\n}',
    hint: 'Iterative approximation'
  },
  {
    id: 'c_func_075',
    topicId: 'c_functions',
    question: 'Create function to calculate definite integral using trapezoidal rule.',
    mathSolution: '∫ f(x)dx from a to b',
    codeSolution: 'double integrate(double (*f)(double), double a, double b, int n) {\n    double h = (b - a) / n, sum = 0.5 * (f(a) + f(b));\n    for(int i = 1; i < n; i++)\n        sum += f(a + i * h);\n    return sum * h;\n}',
    hint: 'Sum areas of trapezoids'
  },
  {
    id: 'c_func_076',
    topicId: 'c_functions',
    question: 'Write functions for stack operations (push, pop).',
    mathSolution: 'LIFO data structure',
    codeSolution: 'void push(int stack[], int *top, int val) {\n    if(*top < MAX-1) stack[++(*top)] = val;\n}\n\nint pop(int stack[], int *top) {\n    if(*top >= 0) return stack[(*top)--];\n    return -1;\n}',
    hint: 'Use top pointer'
  },
  {
    id: 'c_func_077',
    topicId: 'c_functions',
    question: 'Create functions for queue operations (enqueue, dequeue).',
    mathSolution: 'FIFO data structure',
    codeSolution: 'void enqueue(int q[], int *rear, int val) {\n    q[++(*rear)] = val;\n}\n\nint dequeue(int q[], int *front) {\n    return q[(*front)++];\n}',
    hint: 'Maintain front and rear indices'
  },
  {
    id: 'c_func_078',
    topicId: 'c_functions',
    question: 'Write function to create a new linked list node.',
    mathSolution: 'Allocate and initialize node',
    codeSolution: 'Node* createNode(int data) {\n    Node *new = malloc(sizeof(Node));\n    new->data = data;\n    new->next = NULL;\n    return new;\n}',
    hint: 'malloc and set fields'
  },
  {
    id: 'c_func_079',
    topicId: 'c_functions',
    question: 'Create function to insert node at beginning of linked list.',
    mathSolution: 'Add node as new head',
    codeSolution: 'Node* insertBegin(Node *head, int data) {\n    Node *new = createNode(data);\n    new->next = head;\n    return new;\n}',
    hint: 'New node points to old head'
  },
  {
    id: 'c_func_080',
    topicId: 'c_functions',
    question: 'Write function to count nodes in linked list.',
    mathSolution: 'Return number of nodes',
    codeSolution: 'int countNodes(Node *head) {\n    int count = 0;\n    while(head) {\n        count++;\n        head = head->next;\n    }\n    return count;\n}',
    hint: 'Traverse and count'
  },

  // ========== TREE AND ADVANCED STRING FUNCTIONS (QUESTIONS 81-90) ==========
  {
    id: 'c_func_081',
    topicId: 'c_functions',
    question: 'Write recursive function to count leaf nodes in binary tree.',
    mathSolution: 'Count nodes with no children',
    codeSolution: 'int countLeaves(Node *root) {\n    if(!root) return 0;\n    if(!root->left && !root->right) return 1;\n    return countLeaves(root->left) + countLeaves(root->right);\n}',
    hint: 'Leaf has no left and right'
  },
  {
    id: 'c_func_082',
    topicId: 'c_functions',
    question: 'Create function to find height of binary tree.',
    mathSolution: 'Max depth of tree',
    codeSolution: 'int treeHeight(Node *root) {\n    if(!root) return 0;\n    int left = treeHeight(root->left);\n    int right = treeHeight(root->right);\n    return 1 + (left > right ? left : right);\n}',
    hint: 'Max of left/right + 1'
  },
  {
    id: 'c_func_083',
    topicId: 'c_functions',
    question: 'Write function to remove duplicates from string.',
    mathSolution: '"hello" -> "helo"',
    codeSolution: 'void removeDuplicates(char *str) {\n    int seen[256] = {0}, i = 0, j = 0;\n    while(str[i]) {\n        if(!seen[str[i]]) {\n            seen[str[i]] = 1;\n            str[j++] = str[i];\n        }\n        i++;\n    }\n    str[j] = \'\\0\';\n}',
    hint: 'Track seen characters'
  },
  {
    id: 'c_func_084',
    topicId: 'c_functions',
    question: 'Create function to find first non-repeating character.',
    mathSolution: 'In "swiss", first non-repeating is w',
    codeSolution: 'char firstNonRepeat(char *str) {\n    int count[256] = {0};\n    for(int i = 0; str[i]; i++) count[str[i]]++;\n    for(int i = 0; str[i]; i++) if(count[str[i]] == 1) return str[i];\n    return \'\\0\';\n}',
    hint: 'Count then find first with count 1'
  },
  {
    id: 'c_func_085',
    topicId: 'c_functions',
    question: 'Write function to generate random number in range [min,max].',
    mathSolution: 'Random number between min and max',
    codeSolution: 'int randomRange(int min, int max) {\n    return min + rand() % (max - min + 1);\n}',
    hint: 'Use modulo operator'
  },
  {
    id: 'c_func_086',
    topicId: 'c_functions',
    question: 'Create function to shuffle array randomly.',
    mathSolution: 'Randomly permute array elements',
    codeSolution: 'void shuffle(int arr[], int n) {\n    for(int i = n-1; i > 0; i--) {\n        int j = rand() % (i + 1);\n        int temp = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n}',
    hint: 'Fisher-Yates shuffle'
  },
  {
    id: 'c_func_087',
    topicId: 'c_functions',
    question: 'Write function for Caesar cipher encryption.',
    mathSolution: 'Shift each letter by 3 positions',
    codeSolution: 'void caesarEncrypt(char *text, int shift) {\n    for(int i = 0; text[i]; i++) {\n        if(isalpha(text[i])) {\n            char base = isupper(text[i]) ? \'A\' : \'a\';\n            text[i] = ((text[i] - base + shift) % 26) + base;\n        }\n    }\n}',
    hint: 'Wrap around alphabet'
  },
  {
    id: 'c_func_088',
    topicId: 'c_functions',
    question: 'Create function for XOR encryption/decryption.',
    mathSolution: 'XOR with key to encrypt/decrypt',
    codeSolution: 'void xorEncrypt(char *data, char key) {\n    for(int i = 0; data[i]; i++)\n        data[i] ^= key;\n}',
    hint: 'Same function for encrypt/decrypt'
  },
  {
    id: 'c_func_089',
    topicId: 'c_functions',
    question: 'Write function to calculate pi using Leibniz series.',
    mathSolution: 'π/4 = 1 - 1/3 + 1/5 - 1/7 + ...',
    codeSolution: 'double calculatePi(int terms) {\n    double pi = 0;\n    for(int i = 0; i < terms; i++) {\n        pi += (i % 2 == 0 ? 1 : -1) * 4.0 / (2*i + 1);\n    }\n    return pi;\n}',
    hint: 'Alternating series'
  },
  {
    id: 'c_func_090',
    topicId: 'c_functions',
    question: 'Write functions to add two complex numbers.',
    mathSolution: '(a+bi) + (c+di) = (a+c) + (b+d)i',
    codeSolution: 'typedef struct {\n    double real, imag;\n} Complex;\n\nComplex add(Complex a, Complex b) {\n    Complex r = {a.real + b.real, a.imag + b.imag};\n    return r;\n}',
    hint: 'Add real and imaginary parts'
  },

  // ========== UNIT CONVERSION AND STATISTICAL FUNCTIONS (QUESTIONS 91-100) ==========
  {
    id: 'c_func_091',
    topicId: 'c_functions',
    question: 'Write function to convert kilometers to miles.',
    mathSolution: '1 km = 0.621371 miles',
    codeSolution: 'double kmToMiles(double km) {\n    return km * 0.621371;\n}',
    hint: 'Multiply by conversion factor'
  },
  {
    id: 'c_func_092',
    topicId: 'c_functions',
    question: 'Create function to convert pounds to kilograms.',
    mathSolution: '1 lb = 0.453592 kg',
    codeSolution: 'double lbToKg(double lb) {\n    return lb * 0.453592;\n}',
    hint: 'Use standard conversion'
  },
  {
    id: 'c_func_093',
    topicId: 'c_functions',
    question: 'Write function to calculate standard deviation.',
    mathSolution: '√(∑(x-μ)²/n)',
    codeSolution: 'double stdDev(int arr[], int n) {\n    double mean = 0, sum = 0;\n    for(int i = 0; i < n; i++) mean += arr[i];\n    mean /= n;\n    for(int i = 0; i < n; i++) sum += pow(arr[i] - mean, 2);\n    return sqrt(sum / n);\n}',
    hint: 'Square root of variance'
  },
  {
    id: 'c_func_094',
    topicId: 'c_functions',
    question: 'Create function to find median of sorted array.',
    mathSolution: 'Middle element(s) average',
    codeSolution: 'double median(int arr[], int n) {\n    if(n % 2) return arr[n/2];\n    return (arr[n/2 - 1] + arr[n/2]) / 2.0;\n}',
    hint: 'Even/odd length cases'
  },
  {
    id: 'c_func_095',
    topicId: 'c_functions',
    question: 'Write function to print right-angled triangle pattern.',
    mathSolution: 'Print * pattern of n rows',
    codeSolution: 'void printTriangle(int n) {\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= i; j++)\n            printf("*");\n        printf("\\n");\n    }\n}',
    hint: 'Row i has i stars'
  },
  {
    id: 'c_func_096',
    topicId: 'c_functions',
    question: 'Create function to print diamond pattern.',
    mathSolution: 'Diamond of stars with n rows',
    codeSolution: 'void printDiamond(int n) {\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= n-i; j++) printf(" ");\n        for(int j = 1; j <= 2*i-1; j++) printf("*");\n        printf("\\n");\n    }\n    for(int i = n-1; i >= 1; i--) {\n        for(int j = 1; j <= n-i; j++) printf(" ");\n        for(int j = 1; j <= 2*i-1; j++) printf("*");\n        printf("\\n");\n    }\n}',
    hint: 'Two triangles: one up, one down'
  },
  {
    id: 'c_func_097',
    topicId: 'c_functions',
    question: 'Write function to calculate combination C(n,r).',
    mathSolution: 'nCr = n!/(r!(n-r)!)',
    codeSolution: 'int combination(int n, int r) {\n    if(r > n) return 0;\n    if(r == 0 || r == n) return 1;\n    return combination(n-1, r-1) + combination(n-1, r);\n}',
    hint: 'Recursive Pascal identity'
  },
  {
    id: 'c_func_098',
    topicId: 'c_functions',
    question: 'Create function to calculate permutation P(n,r).',
    mathSolution: 'nPr = n!/(n-r)!',
    codeSolution: 'int permutation(int n, int r) {\n    int result = 1;\n    for(int i = 0; i < r; i++)\n        result *= n - i;\n    return result;\n}',
    hint: 'Multiply n * (n-1) * ... * (n-r+1)'
  },
  {
    id: 'c_func_099',
    topicId: 'c_functions',
    question: 'Write function to check win in Tic-Tac-Toe.',
    mathSolution: 'Check rows, cols, diagonals',
    codeSolution: 'int checkWin(char board[3][3]) {\n    for(int i = 0; i < 3; i++)\n        if(board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != \' \') return 1;\n    for(int i = 0; i < 3; i++)\n        if(board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != \' \') return 1;\n    if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != \' \') return 1;\n    if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != \' \') return 1;\n    return 0;\n}',
    hint: 'Check all winning lines'
  },
  {
    id: 'c_func_100',
    topicId: 'c_functions',
    question: 'Create function to evaluate expression in Reverse Polish Notation.',
    mathSolution: '3 4 + = 7, 5 2 - = 3',
    codeSolution: 'int evalRPN(char **tokens, int n) {\n    int stack[100], top = -1;\n    for(int i = 0; i < n; i++) {\n        if(isdigit(tokens[i][0]))\n            stack[++top] = atoi(tokens[i]);\n        else {\n            int b = stack[top--], a = stack[top--];\n            switch(tokens[i][0]) {\n                case \'+\': stack[++top] = a + b; break;\n                case \'-\': stack[++top] = a - b; break;\n                case \'*\': stack[++top] = a * b; break;\n                case \'/\': stack[++top] = a / b; break;\n            }\n        }\n    }\n    return stack[0];\n}',
    hint: 'Use stack for operands'
  }
);