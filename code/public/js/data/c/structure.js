QuizData.questions.push(
  // ========== BASIC STRUCTURE (QUESTIONS 1-15) ==========
  {
    id: 'c_structure_001',
    topicId: 'c_structure',
    question: 'Write the basic structure of a C program that includes the stdio.h header file and has a main function.',
    mathSolution: 'Basic C program structure with header and main function',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    return 0;\n}',
    hint: 'Every C program needs header files and a main function'
  },
  {
    id: 'c_structure_002',
    topicId: 'c_structure',
    question: 'Write a C program that prints "Hello, World!" using the printf function.',
    mathSolution: 'Program with printf statement inside main',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!");\n    return 0;\n}',
    hint: 'printf is used for output and is defined in stdio.h'
  },
  {
    id: 'c_structure_003',
    topicId: 'c_structure',
    question: 'Write a C program that includes comments explaining each part: header, main function, and return statement.',
    mathSolution: 'Program with documentation comments',
    codeSolution: '#include <stdio.h>  // Preprocessor directive: includes standard input/output library\n\nint main() {        // Main function: program execution starts here\n    // This is a comment - prints a message\n    printf("Learning C Structure");  // Statement: prints text\n    return 0;       // Return statement: indicates successful completion\n}',
    hint: 'Use // for single-line comments and /* */ for multi-line comments'
  },
  {
    id: 'c_structure_004',
    topicId: 'c_structure',
    question: 'Write a C program that uses two header files: stdio.h and math.h, and calculates the square root of a number.',
    mathSolution: 'Program with multiple header files',
    codeSolution: '#include <stdio.h>\n#include <math.h>\n\nint main() {\n    double num = 25.0;\n    double result = sqrt(num);\n    printf("Square root of %.2f is %.2f", num, result);\n    return 0;\n}',
    hint: 'math.h contains mathematical functions like sqrt()'
  },
  {
    id: 'c_structure_005',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates variable declaration inside the main function.',
    mathSolution: 'Variable declaration and initialization in main',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    // Variable declarations\n    int age = 25;\n    float salary = 55000.50;\n    char grade = \'A\';\n    \n    printf("Age: %d\\n", age);\n    printf("Salary: %.2f\\n", salary);\n    printf("Grade: %c\\n", grade);\n    \n    return 0;\n}',
    hint: 'Variables must be declared before they are used'
  },
  {
    id: 'c_structure_006',
    topicId: 'c_structure',
    question: 'Write a program that takes input from user using scanf and displays it using printf.',
    mathSolution: 'Program with input and output operations',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int number;\n    \n    printf("Enter a number: ");\n    scanf("%d", &number);\n    \n    printf("You entered: %d", number);\n    \n    return 0;\n}',
    hint: 'scanf requires & before variable name for basic data types'
  },
  {
    id: 'c_structure_007',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates the use of curly braces to define the body of main function.',
    mathSolution: 'Block structure with curly braces',
    codeSolution: '#include <stdio.h>\n\nint main()\n{  // Opening brace - start of block\n    printf("Curly braces define the block");\n    printf("All statements inside braces are part of main");\n    return 0;\n}  // Closing brace - end of block',
    hint: 'Curly braces {} define the scope and body of functions'
  },
  {
    id: 'c_structure_008',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates the correct syntax of a C program with proper indentation.',
    mathSolution: 'Program with proper indentation and formatting',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num1 = 10;\n    int num2 = 20;\n    int sum = num1 + num2;\n    \n    if (sum > 0) {\n        printf("Sum is positive: %d\\n", sum);\n    }\n    \n    return 0;\n}',
    hint: 'Proper indentation makes code readable'
  },
  {
    id: 'c_structure_009',
    topicId: 'c_structure',
    question: 'Write a program that uses both preprocessor directives and comments at the top of the program.',
    mathSolution: 'Program with preprocessor directives and header comments',
    codeSolution: '/*\n * Program: Structure Demo\n * Author: Student\n * Description: Demonstrates preprocessor directives\n */\n\n#include <stdio.h>  // For input/output\n#define MAX 100      // Constant definition\n\nint main() {\n    printf("Maximum value: %d", MAX);\n    return 0;\n}',
    hint: 'Preprocessor directives start with # and are processed before compilation'
  },
  {
    id: 'c_structure_010',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates multiple statements in the main function.',
    mathSolution: 'Multiple sequential statements in main',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5;\n    int b = 10;\n    int c;\n    \n    c = a + b;\n    printf("a = %d\\n", a);\n    printf("b = %d\\n", b);\n    printf("Sum = %d\\n", c);\n    \n    c = a * b;\n    printf("Product = %d\\n", c);\n    \n    return 0;\n}',
    hint: 'Statements are executed sequentially in the order they appear'
  },
  {
    id: 'c_structure_011',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates the use of escape sequences in printf statements.',
    mathSolution: 'Program with escape sequences',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Line 1\\n");      // \\n for new line\n    printf("Line 2\\tTabbed\\n");  // \\t for tab\n    printf("Quote: \\"Hello\\"\\n"); // \\" for double quote\n    printf("Backslash: \\\\\\\\n");    // \\\\ for backslash\n    \n    return 0;\n}',
    hint: 'Escape sequences start with backslash (\\)'
  },
  {
    id: 'c_structure_012',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates the return value of main function as 0 for success.',
    mathSolution: 'Program with return 0 statement',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Program executed successfully\\n");\n    \n    return 0;  // Indicates successful completion to operating system\n}',
    hint: 'return 0 means program executed successfully, non-zero means error'
  },
  {
    id: 'c_structure_013',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates the use of void main() instead of int main().',
    mathSolution: 'Program with void main()',
    codeSolution: '#include <stdio.h>\n\nvoid main() {\n    printf("Using void main function\\n");\n    // No return statement needed\n}',
    hint: 'void main() is not standard C, int main() is preferred'
  },
  {
    id: 'c_structure_014',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates the use of empty main function with only return statement.',
    mathSolution: 'Minimal valid C program',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    return 0;\n}',
    hint: 'This is the smallest valid C program'
  },
  {
    id: 'c_structure_015',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates the use of #define to create a constant and use it in main.',
    mathSolution: 'Program with #define preprocessor directive',
    codeSolution: '#include <stdio.h>\n#define PI 3.14159\n#define MESSAGE "Area of Circle"\n\nint main() {\n    float radius = 5.0;\n    float area = PI * radius * radius;\n    \n    printf("%s: %.2f", MESSAGE, area);\n    \n    return 0;\n}',
    hint: '#define creates macros that are replaced before compilation'
  },

  // ========== MULTIPLE FUNCTIONS (QUESTIONS 16-30) ==========
  {
    id: 'c_structure_016',
    topicId: 'c_structure',
    question: 'Write a program with two functions: main() and a user-defined function printMessage() that prints "Hello from function".',
    mathSolution: 'Program with multiple functions',
    codeSolution: '#include <stdio.h>\n\n// Function declaration (prototype)\nvoid printMessage();\n\nint main() {\n    printf("Calling function from main:\\n");\n    printMessage();  // Function call\n    return 0;\n}\n\n// Function definition\nvoid printMessage() {\n    printf("Hello from function\\n");\n}',
    hint: 'Functions must be declared before they are called'
  },
  {
    id: 'c_structure_017',
    topicId: 'c_structure',
    question: 'Write a program with a function that takes two integers as parameters and returns their sum.',
    mathSolution: 'Function with parameters and return value',
    codeSolution: '#include <stdio.h>\n\n// Function declaration\nint add(int a, int b);\n\nint main() {\n    int x = 15, y = 25;\n    int result = add(x, y);\n    \n    printf("%d + %d = %d\\n", x, y, result);\n    return 0;\n}\n\n// Function definition\nint add(int a, int b) {\n    return a + b;\n}',
    hint: 'Parameters pass data to functions, return sends data back'
  },
  {
    id: 'c_structure_018',
    topicId: 'c_structure',
    question: 'Write a program with three functions: main(), getNumber(), and displayNumber(). Get input in getNumber() and display in displayNumber().',
    mathSolution: 'Program with multiple functions for input and output',
    codeSolution: '#include <stdio.h>\n\nint getNumber();\nvoid displayNumber(int num);\n\nint main() {\n    int num = getNumber();\n    displayNumber(num);\n    return 0;\n}\n\nint getNumber() {\n    int n;\n    printf("Enter a number: ");\n    scanf("%d", &n);\n    return n;\n}\n\nvoid displayNumber(int num) {\n    printf("You entered: %d\\n", num);\n}',
    hint: 'Functions can be organized for specific tasks'
  },
  {
    id: 'c_structure_019',
    topicId: 'c_structure',
    question: 'Write a program where main() calls function1(), function1() calls function2(), and function2() prints a message.',
    mathSolution: 'Nested function calls',
    codeSolution: '#include <stdio.h>\n\nvoid function1();\nvoid function2();\n\nint main() {\n    printf("Main function starts\\n");\n    function1();\n    printf("Main function ends\\n");\n    return 0;\n}\n\nvoid function1() {\n    printf("Function1 starts\\n");\n    function2();\n    printf("Function1 ends\\n");\n}\n\nvoid function2() {\n    printf("Inside Function2\\n");\n}',
    hint: 'Functions can call other functions in a chain'
  },
  {
    id: 'c_structure_020',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates function prototype placed before main and function definition after main.',
    mathSolution: 'Function prototype vs definition placement',
    codeSolution: '#include <stdio.h>\n\n// Function prototypes (declarations)\nint multiply(int x, int y);\nvoid printResult(int value);\n\nint main() {\n    int a = 8, b = 7;\n    int product = multiply(a, b);\n    printResult(product);\n    return 0;\n}\n\n// Function definitions\nint multiply(int x, int y) {\n    return x * y;\n}\n\nvoid printResult(int value) {\n    printf("Result: %d\\n", value);\n}',
    hint: 'Prototypes tell compiler about functions before their definitions'
  },
  {
    id: 'c_structure_021',
    topicId: 'c_structure',
    question: 'Write a program with a function that returns nothing (void) and takes no parameters.',
    mathSolution: 'Void function with no parameters',
    codeSolution: '#include <stdio.h>\n\nvoid displayWelcome();\n\nint main() {\n    displayWelcome();\n    return 0;\n}\n\nvoid displayWelcome() {\n    printf("Welcome to C Programming!\\n");\n    printf("This function returns nothing.\\n");\n}',
    hint: 'void indicates no return value and/or no parameters'
  },
  {
    id: 'c_structure_022',
    topicId: 'c_structure',
    question: 'Write a program with a function that calculates square of a number and returns the result.',
    mathSolution: 'Function with single parameter and return value',
    codeSolution: '#include <stdio.h>\n\nfloat square(float num);\n\nint main() {\n    float number = 4.5;\n    float result = square(number);\n    \n    printf("Square of %.2f is %.2f\\n", number, result);\n    return 0;\n}\n\nfloat square(float num) {\n    return num * num;\n}',
    hint: 'Function can return any data type'
  },
  {
    id: 'c_structure_023',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates calling a function multiple times from main with different arguments.',
    mathSolution: 'Multiple function calls with different arguments',
    codeSolution: '#include <stdio.h>\n\nint max(int a, int b);\n\nint main() {\n    printf("Max of 10 and 20: %d\\n", max(10, 20));\n    printf("Max of 35 and 15: %d\\n", max(35, 15));\n    printf("Max of 40 and 40: %d\\n", max(40, 40));\n    \n    return 0;\n}\n\nint max(int a, int b) {\n    return (a > b) ? a : b;\n}',
    hint: 'Functions can be called any number of times'
  },
  {
    id: 'c_structure_024',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates a function calling itself (recursion) to calculate factorial.',
    mathSolution: 'Recursive function structure',
    codeSolution: '#include <stdio.h>\n\nint factorial(int n);\n\nint main() {\n    int num = 5;\n    int fact = factorial(num);\n    \n    printf("Factorial of %d = %d\\n", num, fact);\n    return 0;\n}\n\nint factorial(int n) {\n    if (n <= 1) {\n        return 1;  // Base case\n    }\n    return n * factorial(n - 1);  // Recursive call\n}',
    hint: 'Recursive functions call themselves with a base condition to stop'
  },
  {
    id: 'c_structure_025',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates function overloading is not supported in C (show error comment).',
    mathSolution: 'C does not support function overloading',
    codeSolution: '#include <stdio.h>\n\n// C does not support function overloading\n// This will cause a compilation error if uncommented\n/*\nint add(int a, int b) {\n    return a + b;\n}\n\nfloat add(float a, float b) {  // Error: duplicate function name\n    return a + b;\n}\n*/\n\nint addInt(int a, int b) {\n    return a + b;\n}\n\nfloat addFloat(float a, float b) {\n    return a + b;\n}\n\nint main() {\n    printf("Int sum: %d\\n", addInt(5, 10));\n    printf("Float sum: %.2f\\n", addFloat(5.5, 3.7));\n    return 0;\n}',
    hint: 'In C, each function must have a unique name'
  },
  {
    id: 'c_structure_026',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates passing arrays to functions.',
    mathSolution: 'Array passing to functions',
    codeSolution: '#include <stdio.h>\n\nvoid printArray(int arr[], int size);\nint findSum(int arr[], int size);\n\nint main() {\n    int numbers[] = {10, 20, 30, 40, 50};\n    int size = sizeof(numbers) / sizeof(numbers[0]);\n    \n    printf("Array elements: ");\n    printArray(numbers, size);\n    \n    int sum = findSum(numbers, size);\n    printf("\\nSum of elements: %d\\n", sum);\n    \n    return 0;\n}\n\nvoid printArray(int arr[], int size) {\n    for(int i = 0; i < size; i++) {\n        printf("%d ", arr[i]);\n    }\n}\n\nint findSum(int arr[], int size) {\n    int sum = 0;\n    for(int i = 0; i < size; i++) {\n        sum += arr[i];\n    }\n    return sum;\n}',
    hint: 'Arrays are passed by reference (address) to functions'
  },
  {
    id: 'c_structure_027',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates passing structures to functions.',
    mathSolution: 'Structure passing to functions',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nstruct Student {\n    int roll;\n    char name[50];\n    float marks;\n};\n\nvoid displayStudent(struct Student s);\nvoid updateMarks(struct Student *s, float newMarks);\n\nint main() {\n    struct Student s1 = {101, "Alice", 85.5};\n    \n    printf("Before update:\\n");\n    displayStudent(s1);\n    \n    updateMarks(&s1, 95.5);\n    \n    printf("\\nAfter update:\\n");\n    displayStudent(s1);\n    \n    return 0;\n}\n\nvoid displayStudent(struct Student s) {\n    printf("Roll: %d, Name: %s, Marks: %.2f\\n", s.roll, s.name, s.marks);\n}\n\nvoid updateMarks(struct Student *s, float newMarks) {\n    s->marks = newMarks;\n}',
    hint: 'Structures can be passed by value or by reference using pointers'
  },
  {
    id: 'c_structure_028',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates function returning a structure.',
    mathSolution: 'Function returning structure',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nstruct Student {\n    int roll;\n    char name[50];\n    float marks;\n};\n\nstruct Student createStudent(int r, char n[], float m);\n\nint main() {\n    struct Student s1 = createStudent(102, "Bob", 78.5);\n    \n    printf("Roll: %d\\n", s1.roll);\n    printf("Name: %s\\n", s1.name);\n    printf("Marks: %.2f\\n", s1.marks);\n    \n    return 0;\n}\n\nstruct Student createStudent(int r, char n[], float m) {\n    struct Student s;\n    s.roll = r;\n    strcpy(s.name, n);\n    s.marks = m;\n    return s;\n}',
    hint: 'Functions can return structures'
  },
  {
    id: 'c_structure_029',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates inline function (C99 onwards) using macro or inline keyword.',
    mathSolution: 'Inline function concept in C',
    codeSolution: '#include <stdio.h>\n\n// Using macro as inline function alternative\n#define SQUARE(x) ((x) * (x))\n\n// C99 inline function (compiler dependent)\ninline int cube(int x) {\n    return x * x * x;\n}\n\nint main() {\n    int num = 5;\n    \n    printf("Square of %d: %d (using macro)\\n", num, SQUARE(num));\n    printf("Cube of %d: %d (using inline function)\\n", num, cube(num));\n    \n    return 0;\n}',
    hint: 'inline suggests compiler to insert code directly to avoid function call overhead'
  },
  {
    id: 'c_structure_030',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates nested functions (not standard C, GCC extension).',
    mathSolution: 'Nested functions (GCC extension)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Demonstrating nested function (GCC extension):\\n");\n    \n    // Nested function definition (GCC specific)\n    void innerFunction() {\n        printf("This is inner function\\n");\n    }\n    \n    innerFunction();\n    \n    return 0;\n}',
    hint: 'Nested functions are not standard C, but supported in GCC'
  },

  // ========== GLOBAL VARIABLES (QUESTIONS 31-40) ==========
  {
    id: 'c_structure_031',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates global variable declared outside all functions.',
    mathSolution: 'Global variable declaration and usage',
    codeSolution: '#include <stdio.h>\n\n// Global variable\nint globalCount = 0;\n\nvoid increment();\nvoid display();\n\nint main() {\n    printf("Initial global count: %d\\n", globalCount);\n    \n    increment();\n    increment();\n    display();\n    \n    globalCount = 100;  // Can be modified directly\n    printf("Modified in main: %d\\n", globalCount);\n    \n    return 0;\n}\n\nvoid increment() {\n    globalCount++;  // Accessing global variable\n}\n\nvoid display() {\n    printf("Current global count: %d\\n", globalCount);\n}',
    hint: 'Global variables are accessible to all functions'
  },
  {
    id: 'c_structure_032',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates local variable with same name as global variable.',
    mathSolution: 'Local vs Global variable with same name',
    codeSolution: '#include <stdio.h>\n\nint value = 100;  // Global variable\n\nint main() {\n    int value = 200;  // Local variable - hides global\n    \n    printf("Local value: %d\\n", value);\n    \n    // Access global variable using extern\n    {\n        extern int value;\n        printf("Global value: %d\\n", value);\n    }\n    \n    return 0;\n}',
    hint: 'Local variable takes precedence over global with same name'
  },
  {
    id: 'c_structure_033',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates static global variable limited to file scope.',
    mathSolution: 'Static global variable',
    codeSolution: '#include <stdio.h>\n\nstatic int fileScopeVar = 50;  // Static global - visible only in this file\n\nvoid function1() {\n    printf("In function1: %d\\n", fileScopeVar);\n}\n\nvoid function2() {\n    printf("In function2: %d\\n", fileScopeVar);\n}\n\nint main() {\n    function1();\n    function2();\n    \n    fileScopeVar = 200;\n    printf("After change in main: %d\\n", fileScopeVar);\n    \n    return 0;\n}',
    hint: 'static global variables have file scope only'
  },
  {
    id: 'c_structure_034',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates initialization of global and local variables.',
    mathSolution: 'Variable initialization differences',
    codeSolution: '#include <stdio.h>\n\nint globalInt;        // Automatically initialized to 0\nfloat globalFloat;    // Automatically initialized to 0.0\nchar globalChar;      // Automatically initialized to \'\\0\'\n\nint main() {\n    int localInt;      // Uninitialized - contains garbage\n    float localFloat;  // Uninitialized - contains garbage\n    char localChar;    // Uninitialized - contains garbage\n    \n    printf("Global int: %d\\n", globalInt);\n    printf("Global float: %f\\n", globalFloat);\n    printf("Global char: [%d]\\n", globalChar);\n    \n    printf("Local int: %d\\n", localInt);\n    printf("Local float: %f\\n", localFloat);\n    printf("Local char: [%d]\\n", localChar);\n    \n    return 0;\n}',
    hint: 'Global variables are automatically initialized to zero, locals are not'
  },
  {
    id: 'c_structure_035',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates multiple global variables across different data types.',
    mathSolution: 'Multiple global variables',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\n// Multiple global variables\nint studentCount = 0;\nfloat averageMarks = 0.0;\nchar schoolName[50] = "ABC School";\nconst int MAX_STUDENTS = 100;\n\nvoid addStudent();\nvoid displaySchoolInfo();\n\nint main() {\n    displaySchoolInfo();\n    \n    addStudent();\n    addStudent();\n    \n    printf("\\nAfter adding students:\\n");\n    printf("Student count: %d\\n", studentCount);\n    \n    return 0;\n}\n\nvoid addStudent() {\n    studentCount++;\n}\n\nvoid displaySchoolInfo() {\n    printf("School: %s\\n", schoolName);\n    printf("Max students: %d\\n", MAX_STUDENTS);\n    printf("Current students: %d\\n", studentCount);\n}',
    hint: 'Global variables can be of any data type'
  },
  {
    id: 'c_structure_036',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates global variable modification in multiple functions.',
    mathSolution: 'Global variable modification across functions',
    codeSolution: '#include <stdio.h>\n\nint counter = 0;\n\nvoid incrementBy1() {\n    counter += 1;\n    printf("Incremented by 1: %d\\n", counter);\n}\n\nvoid incrementBy5() {\n    counter += 5;\n    printf("Incremented by 5: %d\\n", counter);\n}\n\nvoid decrementBy2() {\n    counter -= 2;\n    printf("Decremented by 2: %d\\n", counter);\n}\n\nvoid reset() {\n    counter = 0;\n    printf("Reset to: %d\\n", counter);\n}\n\nint main() {\n    incrementBy1();\n    incrementBy5();\n    incrementBy1();\n    decrementBy2();\n    reset();\n    \n    return 0;\n}',
    hint: 'All functions can modify global variables'
  },
  {
    id: 'c_structure_037',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates global array declaration and usage.',
    mathSolution: 'Global array in program structure',
    codeSolution: '#include <stdio.h>\n\n// Global array\nint marks[5] = {85, 90, 78, 92, 88};\nint size = 5;\n\nvoid displayMarks();\nint findAverage();\nvoid updateMark(int index, int newMark);\n\nint main() {\n    printf("Original marks: ");\n    displayMarks();\n    \n    printf("Average: %d\\n", findAverage());\n    \n    updateMark(2, 95);\n    printf("\\nAfter update: ");\n    displayMarks();\n    \n    return 0;\n}\n\nvoid displayMarks() {\n    for(int i = 0; i < size; i++) {\n        printf("%d ", marks[i]);\n    }\n    printf("\\n");\n}\n\nint findAverage() {\n    int sum = 0;\n    for(int i = 0; i < size; i++) {\n        sum += marks[i];\n    }\n    return sum / size;\n}\n\nvoid updateMark(int index, int newMark) {\n    if(index >= 0 && index < size) {\n        marks[index] = newMark;\n    }\n}',
    hint: 'Global arrays are accessible to all functions'
  },
  {
    id: 'c_structure_038',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates global pointer variable.',
    mathSolution: 'Global pointer variable',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint *globalPtr;\nint value = 100;\n\nvoid allocateAndSet();\nvoid displayValue();\nvoid freeMemory();\n\nint main() {\n    printf("Value: %d\\n", value);\n    \n    globalPtr = &value;\n    printf("Through pointer: %d\\n", *globalPtr);\n    \n    allocateAndSet();\n    displayValue();\n    freeMemory();\n    \n    return 0;\n}\n\nvoid allocateAndSet() {\n    globalPtr = (int*)malloc(sizeof(int));\n    *globalPtr = 500;\n}\n\nvoid displayValue() {\n    if(globalPtr != NULL) {\n        printf("Allocated value: %d\\n", *globalPtr);\n    }\n}\n\nvoid freeMemory() {\n    free(globalPtr);\n    globalPtr = NULL;\n}',
    hint: 'Global pointers can be used across functions for dynamic memory'
  },
  {
    id: 'c_structure_039',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates global structure variable.',
    mathSolution: 'Global structure variable',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nstruct Employee {\n    int id;\n    char name[50];\n    float salary;\n};\n\n// Global structure variable\nstruct Employee emp;\n\nvoid inputEmployee();\nvoid displayEmployee();\nvoid giveHike(float percentage);\n\nint main() {\n    inputEmployee();\n    printf("\\nOriginal details:\\n");\n    displayEmployee();\n    \n    giveHike(10);\n    printf("\\nAfter hike:\\n");\n    displayEmployee();\n    \n    return 0;\n}\n\nvoid inputEmployee() {\n    emp.id = 1001;\n    strcpy(emp.name, "John Doe");\n    emp.salary = 50000.0;\n}\n\nvoid displayEmployee() {\n    printf("ID: %d\\n", emp.id);\n    printf("Name: %s\\n", emp.name);\n    printf("Salary: %.2f\\n", emp.salary);\n}\n\nvoid giveHike(float percentage) {\n    emp.salary += emp.salary * percentage / 100;\n}',
    hint: 'Global structures can be accessed and modified by any function'
  },
  {
    id: 'c_structure_040',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates global constant variable.',
    mathSolution: 'Global const variable',
    codeSolution: '#include <stdio.h>\n\n// Global constants\nconst float TAX_RATE = 0.18;\nconst int MAX_EMPLOYEES = 50;\nconst char COMPANY[] = "Tech Solutions";\n\nfloat calculateTax(float amount);\nvoid displayCompanyInfo();\n\nint main() {\n    displayCompanyInfo();\n    \n    float amount = 10000;\n    float tax = calculateTax(amount);\n    \n    printf("Amount: %.2f\\n", amount);\n    printf("Tax (%.0f%%): %.2f\\n", TAX_RATE * 100, tax);\n    printf("Total: %.2f\\n", amount + tax);\n    \n    return 0;\n}\n\nfloat calculateTax(float amount) {\n    return amount * TAX_RATE;\n}\n\nvoid displayCompanyInfo() {\n    printf("Company: %s\\n", COMPANY);\n    printf("Max Employees: %d\\n", MAX_EMPLOYEES);\n}',
    hint: 'Global constants cannot be modified'
  },

  // ========== STATIC VARIABLES (QUESTIONS 41-45) ==========
  {
    id: 'c_structure_041',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates static variable inside a function maintaining its value between calls.',
    mathSolution: 'Static local variable persistence',
    codeSolution: '#include <stdio.h>\n\nvoid counter();\n\nint main() {\n    printf("Calling counter 5 times:\\n");\n    for(int i = 0; i < 5; i++) {\n        counter();\n    }\n    return 0;\n}\n\nvoid counter() {\n    static int count = 0;  // Static variable - initialized once\n    int normal = 0;        // Normal variable - initialized each call\n    \n    count++;\n    normal++;\n    \n    printf("Static: %d, Normal: %d\\n", count, normal);\n}',
    hint: 'Static local variables retain their value between function calls'
  },
  {
    id: 'c_structure_042',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates static variable used for function call counting.',
    mathSolution: 'Static variable for counting function calls',
    codeSolution: '#include <stdio.h>\n\nvoid trackFunction();\n\nint main() {\n    trackFunction();\n    trackFunction();\n    trackFunction();\n    trackFunction();\n    \n    return 0;\n}\n\nvoid trackFunction() {\n    static int callCount = 0;\n    callCount++;\n    \n    printf("This function has been called %d time(s)\\n", callCount);\n}',
    hint: 'Static variables are perfect for counting'
  },
  {
    id: 'c_structure_043',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates static variable for generating unique IDs.',
    mathSolution: 'Static variable for unique ID generation',
    codeSolution: '#include <stdio.h>\n\nint generateID();\n\nint main() {\n    for(int i = 0; i < 5; i++) {\n        int id = generateID();\n        printf("Generated ID: %d\\n", id);\n    }\n    \n    return 0;\n}\n\nint generateID() {\n    static int nextID = 1001;  // Starting ID\n    return nextID++;  // Return current and increment for next\n}',
    hint: 'Static variables can maintain state across function calls'
  },
  {
    id: 'c_structure_044',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates static variable with different initial values.',
    mathSolution: 'Static variable initialization',
    codeSolution: '#include <stdio.h>\n\nvoid showValues();\n\nint main() {\n    showValues();\n    showValues();\n    showValues();\n    \n    return 0;\n}\n\nvoid showValues() {\n    static int staticVar1 = 0;     // Explicitly initialized to 0\n    static int staticVar2;         // Implicitly initialized to 0\n    static int staticVar3 = 10;    // Initialized to 10\n    \n    printf("StaticVar1: %d, StaticVar2: %d, StaticVar3: %d\\n", \n            staticVar1++, staticVar2++, staticVar3++);\n}',
    hint: 'Static variables are initialized only once at program startup'
  },
  {
    id: 'c_structure_045',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates static variable in recursive function.',
    mathSolution: 'Static variable in recursion',
    codeSolution: '#include <stdio.h>\n\nvoid recursiveFunction(int n);\n\nint main() {\n    printf("Calling recursive function:\\n");\n    recursiveFunction(3);\n    \n    return 0;\n}\n\nvoid recursiveFunction(int n) {\n    static int depth = 0;\n    depth++;\n    \n    printf("Depth: %d, n: %d\\n", depth, n);\n    \n    if(n > 0) {\n        recursiveFunction(n - 1);\n    }\n    \n    depth--;\n    printf("Returning from depth: %d\\n", depth + 1);\n}',
    hint: 'Static variables maintain value across all recursive calls'
  },

  // ========== HEADER FILES (QUESTIONS 46-50) ==========
  {
    id: 'c_structure_046',
    topicId: 'c_structure',
    question: 'Write a program that creates and uses a custom header file "mymath.h" with mathematical functions.',
    mathSolution: 'Creating and using custom header files',
    codeSolution: '// mymath.h\n#ifndef MYMATH_H\n#define MYMATH_H\n\nint add(int a, int b);\nint subtract(int a, int b);\nint multiply(int a, int b);\nfloat divide(int a, int b);\n\n#endif\n\n// mymath.c\n#include "mymath.h"\n\nint add(int a, int b) { return a + b; }\nint subtract(int a, int b) { return a - b; }\nint multiply(int a, int b) { return a * b; }\nfloat divide(int a, int b) { return (float)a / b; }\n\n// main.c\n#include <stdio.h>\n#include "mymath.h"\n\nint main() {\n    int x = 20, y = 5;\n    \n    printf("Add: %d\\n", add(x, y));\n    printf("Subtract: %d\\n", subtract(x, y));\n    printf("Multiply: %d\\n", multiply(x, y));\n    printf("Divide: %.2f\\n", divide(x, y));\n    \n    return 0;\n}',
    hint: 'Use header guards (#ifndef) to prevent multiple inclusions'
  },
  {
    id: 'c_structure_047',
    topicId: 'c_structure',
    question: 'Write a program that creates a header file "constants.h" containing various constants and use it in main.',
    mathSolution: 'Header file with constants',
    codeSolution: '// constants.h\n#ifndef CONSTANTS_H\n#define CONSTANTS_H\n\n#define PI 3.14159\n#define MAX_SIZE 100\n#define COMPANY_NAME "TechCorp"\n#define BRAND \'T\'\n\n#endif\n\n// main.c\n#include <stdio.h>\n#include "constants.h"\n\nint main() {\n    printf("PI: %f\\n", PI);\n    printf("MAX_SIZE: %d\\n", MAX_SIZE);\n    printf("COMPANY_NAME: %s\\n", COMPANY_NAME);\n    printf("BRAND: %c\\n", BRAND);\n    \n    float radius = 10;\n    float area = PI * radius * radius;\n    printf("Area of circle: %.2f\\n", area);\n    \n    return 0;\n}',
    hint: 'Header files can contain macros, constants, and function prototypes'
  },
  {
    id: 'c_structure_048',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates including standard header files like stdio.h, stdlib.h, string.h.',
    mathSolution: 'Multiple standard header files inclusion',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <math.h>\n\nint main() {\n    // stdio.h functions\n    char name[50];\n    printf("Enter name: ");\n    scanf("%s", name);\n    \n    // string.h functions\n    printf("Length of name: %lu\\n", strlen(name));\n    \n    // stdlib.h functions\n    int num = atoi("123");\n    printf("Converted string to int: %d\\n", num);\n    \n    // math.h functions\n    double result = pow(2, 5);\n    printf("2^5 = %.0f\\n", result);\n    \n    return 0;\n}',
    hint: 'Different header files provide different functionalities'
  },
  {
    id: 'c_structure_049',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates the difference between #include < > and #include " ".',
    mathSolution: 'Include syntax difference',
    codeSolution: '#include <stdio.h>      // System header - searches in system directories\n#include <stdlib.h>     // System header\n#include "myheader.h"    // User header - searches in current directory first\n#include "utils/myhelper.h"  // User header with path\n\n// myheader.h\n#ifndef MYHEADER_H\n#define MYHEADER_H\nvoid myFunction();\n#endif\n\nint main() {\n    printf("Using system header: stdio.h\\n");\n    printf("Using user header: myheader.h\\n");\n    return 0;\n}',
    hint: '< > searches in system directories, " " searches in current directory first'
  },
  {
    id: 'c_structure_050',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates nested header file inclusion with header guards.',
    mathSolution: 'Nested header files with guards',
    codeSolution: '// common.h\n#ifndef COMMON_H\n#define COMMON_H\n#define VERSION "1.0"\n#endif\n\n// mathops.h\n#ifndef MATHOPS_H\n#define MATHOPS_H\n#include "common.h"\nint add(int a, int b);\nint multiply(int a, int b);\n#endif\n\n// stringops.h\n#ifndef STRINGOPS_H\n#define STRINGOPS_H\n#include "common.h"\n#include <string.h>\nvoid printString(char *str);\n#endif\n\n// main.c\n#include <stdio.h>\n#include "mathops.h"\n#include "stringops.h"\n\nint main() {\n    printf("Version: %s\\n", VERSION);\n    printf("Add: %d\\n", add(10, 20));\n    printString("Hello");\n    return 0;\n}',
    hint: 'Header guards prevent multiple inclusions of the same file'
  },

  // ========== NESTED BLOCKS (QUESTIONS 51-55) ==========
  {
    id: 'c_structure_051',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates nested blocks inside main function.',
    mathSolution: 'Nested blocks and variable scope',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 10;\n    printf("Outer block: x = %d\\n", x);\n    \n    {\n        int y = 20;\n        printf("Inner block 1: x = %d, y = %d\\n", x, y);\n        \n        {\n            int z = 30;\n            printf("Inner block 2: x = %d, y = %d, z = %d\\n", x, y, z);\n        }\n        \n        // printf("z = %d", z);  // Error: z not accessible here\n    }\n    \n    // printf("y = %d", y);  // Error: y not accessible here\n    printf("Back to outer block: x = %d\\n", x);\n    \n    return 0;\n}',
    hint: 'Variables declared in inner blocks are not accessible in outer blocks'
  },
  {
    id: 'c_structure_052',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates variable shadowing in nested blocks.',
    mathSolution: 'Variable shadowing in nested blocks',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 10;\n    printf("Outer x: %d\\n", x);\n    \n    {\n        int x = 20;  // Shadows outer x\n        printf("Inner x (shadows outer): %d\\n", x);\n        \n        {\n            int x = 30;  // Shadows both\n            printf("Innermost x: %d\\n", x);\n        }\n        \n        printf("Back to inner: x = %d\\n", x);\n    }\n    \n    printf("Back to outer: x = %d\\n", x);\n    \n    return 0;\n}',
    hint: 'Inner variables can have the same name as outer variables'
  },
  {
    id: 'c_structure_053',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates different variable scopes using multiple nested blocks.',
    mathSolution: 'Multiple nested blocks with different scopes',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 1;\n    printf("Level 0: a = %d\\n", a);\n    \n    {\n        int b = 2;\n        printf("Level 1: a = %d, b = %d\\n", a, b);\n        \n        {\n            int c = 3;\n            printf("Level 2: a = %d, b = %d, c = %d\\n", a, b, c);\n            \n            {\n                int d = 4;\n                printf("Level 3: a = %d, b = %d, c = %d, d = %d\\n", a, b, c, d);\n            }\n            // d not accessible here\n            printf("Level 2 again: a = %d, b = %d, c = %d\\n", a, b, c);\n        }\n        // c not accessible here\n        printf("Level 1 again: a = %d, b = %d\\n", a, b);\n    }\n    // b not accessible here\n    printf("Level 0 again: a = %d\\n", a);\n    \n    return 0;\n}',
    hint: 'Scope is hierarchical - inner blocks can access outer variables'
  },
  {
    id: 'c_structure_054',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates block scope with if statements.',
    mathSolution: 'Block scope in if statements',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 5;\n    \n    if(num > 0) {\n        int result = num * 2;  // result declared inside if block\n        printf("Positive: result = %d\\n", result);\n        \n        if(result > 5) {\n            int temp = result + 10;  // temp declared inside nested if\n            printf("Large: temp = %d\\n", temp);\n        }\n        // temp not accessible here\n        printf("Still in if block: result = %d\\n", result);\n    }\n    \n    // printf("result = %d", result);  // Error: result not accessible here\n    \n    return 0;\n}',
    hint: 'Variables declared in if-block are not accessible outside'
  },
  {
    id: 'c_structure_055',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates block scope with loops.',
    mathSolution: 'Block scope in loops',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 100;  // Outer i\n    printf("Outer i: %d\\n", i);\n    \n    for(int i = 0; i < 3; i++) {  // Loop variable i shadows outer i\n        int loopVar = i * 10;  // Variable inside loop\n        printf("Loop iteration: i = %d, loopVar = %d\\n", i, loopVar);\n        \n        for(int j = 0; j < 2; j++) {\n            int innerVar = i + j;  // Access loop i\n            printf("  Inner: i=%d, j=%d, innerVar=%d\\n", i, j, innerVar);\n        }\n        // j not accessible here\n    }\n    \n    // loopVar not accessible here\n    printf("After loop, outer i: %d\\n", i);\n    \n    return 0;\n}',
    hint: 'Loop variables are only accessible within the loop block'
  },

  // ========== REGISTER VARIABLES (QUESTIONS 56-58) ==========
  {
    id: 'c_structure_056',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates register variable declaration.',
    mathSolution: 'Register storage class',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    register int counter;  // Suggests storing in CPU register\n    \n    for(counter = 1; counter <= 10; counter++) {\n        printf("%d ", counter);\n    }\n    \n    // printf("%p", &counter);  // Cannot take address of register variable\n    \n    return 0;\n}',
    hint: 'register suggests fast access but & operator cannot be used'
  },
  {
    id: 'c_structure_057',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates register variable for frequently used loop counters.',
    mathSolution: 'Register variables for optimization',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    register int i, j;\n    int sum = 0;\n    \n    // Using register variables for nested loops\n    for(i = 1; i <= 100; i++) {\n        for(j = 1; j <= 100; j++) {\n            sum += i * j;\n        }\n    }\n    \n    printf("Sum: %d\\n", sum);\n    \n    return 0;\n}',
    hint: 'Register variables are best for frequently accessed variables like loop counters'
  },
  {
    id: 'c_structure_058',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates multiple register variables and their limitations.',
    mathSolution: 'Multiple register variables',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    register int r1 = 10;\n    register int r2 = 20;\n    register int r3 = 30;\n    register int r4 = 40;\n    register int r5 = 50;  // May be treated as auto if registers exhausted\n    \n    r1 += r2;\n    r3 *= r4;\n    r5 = r1 + r3;\n    \n    printf("Results: %d, %d, %d\\n", r1, r3, r5);\n    \n    return 0;\n}',
    hint: 'Only a limited number of register variables are actually stored in registers'
  },

  // ========== EXTERN VARIABLES (QUESTIONS 59-62) ==========
  {
    id: 'c_structure_059',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates extern variable usage across multiple files.',
    mathSolution: 'Extern variable declaration',
    codeSolution: '// file1.c\n#include <stdio.h>\n\nint globalVar = 100;  // Global variable definition\n\nvoid displayFromFile1();\n\nint main() {\n    printf("In main: %d\\n", globalVar);\n    displayFromFile1();\n    \n    extern void displayFromFile2();  // Function from file2\n    displayFromFile2();\n    \n    return 0;\n}\n\nvoid displayFromFile1() {\n    printf("In file1 function: %d\\n", globalVar);\n}\n\n// file2.c\n#include <stdio.h>\n\nextern int globalVar;  // Declaration of external variable\n\nvoid displayFromFile2() {\n    printf("In file2 function: %d\\n", globalVar);\n}',
    hint: 'extern tells compiler the variable is defined in another file'
  },
  {
    id: 'c_structure_060',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates extern variable with array.',
    mathSolution: 'Extern array variable',
    codeSolution: '// main.c\n#include <stdio.h>\n\nint numbers[5] = {10, 20, 30, 40, 50};  // Definition\n\nvoid processArray();\n\nint main() {\n    printf("Main - array: ");\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", numbers[i]);\n    }\n    printf("\\n");\n    \n    processArray();\n    \n    return 0;\n}\n\n// file2.c\n#include <stdio.h>\n\nextern int numbers[5];  // Declaration\n\nvoid processArray() {\n    printf("Function - array: ");\n    for(int i = 0; i < 5; i++) {\n        printf("%d ", numbers[i]);\n    }\n    printf("\\n");\n    \n    // Modify array\n    for(int i = 0; i < 5; i++) {\n        numbers[i] *= 2;\n    }\n}',
    hint: 'extern can be used with arrays as well'
  },
  {
    id: 'c_structure_061',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates extern variable with structure.',
    mathSolution: 'Extern structure variable',
    codeSolution: '// main.c\n#include <stdio.h>\n\nstruct Student {\n    int roll;\n    char name[50];\n    float marks;\n};\n\nstruct Student s1 = {101, "Alice", 85.5};  // Definition\n\nvoid displayStudent();\n\nint main() {\n    printf("Main - Student:\\n");\n    printf("Roll: %d, Name: %s, Marks: %.2f\\n", s1.roll, s1.name, s1.marks);\n    \n    displayStudent();\n    \n    return 0;\n}\n\n// file2.c\n#include <stdio.h>\n\nextern struct Student s1;  // Declaration\n\nvoid displayStudent() {\n    printf("Function - Student:\\n");\n    printf("Roll: %d, Name: %s, Marks: %.2f\\n", s1.roll, s1.name, s1.marks);\n}',
    hint: 'extern can be used with structures across files'
  },
  {
    id: 'c_structure_062',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates extern variable with multiple files and functions.',
    mathSolution: 'Extern with multiple files',
    codeSolution: '// header.h\n#ifndef HEADER_H\n#define HEADER_H\n\nextern int sharedVar;  // Declaration\nvoid incrementVar();\nvoid displayVar();\n\n#endif\n\n// main.c\n#include <stdio.h>\n#include "header.h"\n\nint sharedVar = 0;  // Definition\n\nint main() {\n    printf("Initial: %d\\n", sharedVar);\n    \n    incrementVar();\n    displayVar();\n    \n    sharedVar += 50;\n    displayVar();\n    \n    return 0;\n}\n\n// file2.c\n#include <stdio.h>\n#include "header.h"\n\nvoid incrementVar() {\n    sharedVar += 10;\n}\n\n// file3.c\n#include <stdio.h>\n#include "header.h"\n\nvoid displayVar() {\n    printf("Current value: %d\\n", sharedVar);\n}',
    hint: 'extern declarations are often placed in header files'
  },

  // ========== CONST VARIABLES (QUESTIONS 63-65) ==========
  {
    id: 'c_structure_063',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates const variable declaration and usage.',
    mathSolution: 'Constant variables in program structure',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    const int MAX_STUDENTS = 100;\n    const float PI = 3.14159;\n    const char GRADE = \'A\';\n    \n    printf("Max Students: %d\\n", MAX_STUDENTS);\n    printf("PI: %.5f\\n", PI);\n    printf("Grade: %c\\n", GRADE);\n    \n    // MAX_STUDENTS = 200;  // Error: cannot modify const variable\n    \n    return 0;\n}',
    hint: 'const variables cannot be modified after initialization'
  },
  {
    id: 'c_structure_064',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates const pointer variables.',
    mathSolution: 'Const pointers in C',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int x = 10, y = 20;\n    \n    // Pointer to constant data\n    const int *ptr1 = &x;\n    printf("*ptr1 = %d\\n", *ptr1);\n    // *ptr1 = 30;  // Error: cannot modify data through ptr1\n    ptr1 = &y;      // OK: can change pointer\n    \n    // Constant pointer\n    int *const ptr2 = &x;\n    *ptr2 = 30;     // OK: can modify data\n    // ptr2 = &y;   // Error: cannot change pointer\n    \n    // Constant pointer to constant data\n    const int *const ptr3 = &x;\n    // *ptr3 = 40;  // Error: cannot modify data\n    // ptr3 = &y;   // Error: cannot change pointer\n    \n    return 0;\n}',
    hint: 'const can be applied to both the pointer and the data it points to'
  },
  {
    id: 'c_structure_065',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates const function parameters.',
    mathSolution: 'Const parameters in functions',
    codeSolution: '#include <stdio.h>\n\nvoid displayArray(const int arr[], int size) {\n    for(int i = 0; i < size; i++) {\n        printf("%d ", arr[i]);\n        // arr[i] = 0;  // Error: cannot modify const parameter\n    }\n}\n\nvoid processValue(const int *num) {\n    printf("Value: %d\\n", *num);\n    // *num = 100;  // Error: cannot modify const parameter\n}\n\nint main() {\n    int numbers[] = {1, 2, 3, 4, 5};\n    int value = 50;\n    \n    printf("Array: ");\n    displayArray(numbers, 5);\n    printf("\\n");\n    \n    processValue(&value);\n    \n    return 0;\n}',
    hint: 'const parameters prevent accidental modification in functions'
  },

  // ========== TYPEDEF USAGE (QUESTIONS 66-68) ==========
  {
    id: 'c_structure_066',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates typedef for creating type aliases.',
    mathSolution: 'Using typedef in program structure',
    codeSolution: '#include <stdio.h>\n\n// Creating type aliases\ntypedef int Integer;\ntypedef float Decimal;\ntypedef unsigned long int ULI;\n\nint main() {\n    Integer age = 25;\n    Decimal salary = 55000.50;\n    ULI population = 7800000000;\n    \n    printf("Age: %d\\n", age);\n    printf("Salary: %.2f\\n", salary);\n    printf("Population: %lu\\n", population);\n    \n    return 0;\n}',
    hint: 'typedef creates new names for existing data types'
  },
  {
    id: 'c_structure_067',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates typedef with structures.',
    mathSolution: 'Typedef with structures',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\n// Typedef with structure\ntypedef struct {\n    int rollNo;\n    char name[50];\n    float marks;\n} Student;\n\n// Typedef for pointer\ntypedef Student* StudentPtr;\n\nint main() {\n    Student s1;  // No need for \'struct\' keyword\n    StudentPtr ptr = &s1;\n    \n    s1.rollNo = 101;\n    strcpy(s1.name, "John");\n    s1.marks = 85.5;\n    \n    printf("Direct access:\\n");\n    printf("Roll: %d, Name: %s, Marks: %.2f\\n", s1.rollNo, s1.name, s1.marks);\n    \n    printf("\\nUsing pointer:\\n");\n    printf("Roll: %d, Name: %s, Marks: %.2f\\n", ptr->rollNo, ptr->name, ptr->marks);\n    \n    return 0;\n}',
    hint: 'typedef makes structure usage simpler without struct keyword'
  },
  {
    id: 'c_structure_068',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates typedef with function pointers.',
    mathSolution: 'Typedef with function pointers',
    codeSolution: '#include <stdio.h>\n\n// Typedef for function pointer\ntypedef int (*Operation)(int, int);\n\n// Arithmetic functions\nint add(int a, int b) { return a + b; }\nint subtract(int a, int b) { return a - b; }\nint multiply(int a, int b) { return a * b; }\nint divide(int a, int b) { return b != 0 ? a / b : 0; }\n\n// Function that uses function pointer\nint calculate(int x, int y, Operation op) {\n    return op(x, y);\n}\n\nint main() {\n    int a = 20, b = 5;\n    \n    printf("Add: %d\\n", calculate(a, b, add));\n    printf("Subtract: %d\\n", calculate(a, b, subtract));\n    printf("Multiply: %d\\n", calculate(a, b, multiply));\n    printf("Divide: %d\\n", calculate(a, b, divide));\n    \n    return 0;\n}',
    hint: 'typedef makes function pointer syntax much cleaner'
  },

  // ========== ENUMERATION (QUESTIONS 69-71) ==========
  {
    id: 'c_structure_069',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates enum declaration and usage.',
    mathSolution: 'Enumeration in program structure',
    codeSolution: '#include <stdio.h>\n\n// Enum declaration\nenum Weekday { MON, TUE, WED, THU, FRI, SAT, SUN };\nenum Color { RED = 1, GREEN = 3, BLUE = 5 };\n\nint main() {\n    enum Weekday today = WED;\n    enum Color myColor = GREEN;\n    \n    printf("Today: %d (Wednesday)\\n", today);\n    printf("Color value: %d\\n", myColor);\n    \n    printf("\\nWeekdays: ");\n    for(enum Weekday day = MON; day <= SUN; day++) {\n        printf("%d ", day);\n    }\n    \n    return 0;\n}',
    hint: 'Enum creates named integer constants'
  },
  {
    id: 'c_structure_070',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates enum with switch statement.',
    mathSolution: 'Enum with switch',
    codeSolution: '#include <stdio.h>\n\nenum MenuOption {\n    EXIT,\n    ADD,\n    DISPLAY,\n    SEARCH,\n    DELETE\n};\n\nint main() {\n    enum MenuOption choice = ADD;\n    \n    switch(choice) {\n        case EXIT:\n            printf("Exiting program...\\n");\n            break;\n        case ADD:\n            printf("Adding item...\\n");\n            break;\n        case DISPLAY:\n            printf("Displaying items...\\n");\n            break;\n        case SEARCH:\n            printf("Searching...\\n");\n            break;\n        case DELETE:\n            printf("Deleting item...\\n");\n            break;\n        default:\n            printf("Invalid choice\\n");\n    }\n    \n    return 0;\n}',
    hint: 'Enum makes code more readable in switch statements'
  },
  {
    id: 'c_structure_071',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates enum with typedef.',
    mathSolution: 'Typedef with enum',
    codeSolution: '#include <stdio.h>\n\n// Typedef enum\ntypedef enum {\n    JAN = 1, FEB, MAR, APR, MAY, JUN,\n    JUL, AUG, SEP, OCT, NOV, DEC\n} Month;\n\nconst char* getMonthName(Month m) {\n    static const char* months[] = {\n        "", "January", "February", "March", "April", "May", "June",\n        "July", "August", "September", "October", "November", "December"\n    };\n    return (m >= JAN && m <= DEC) ? months[m] : "Invalid";\n}\n\nint main() {\n    Month currentMonth = MAR;\n    \n    printf("Month number: %d\\n", currentMonth);\n    printf("Month name: %s\\n", getMonthName(currentMonth));\n    \n    for(Month m = JAN; m <= DEC; m++) {\n        printf("%d: %s\\n", m, getMonthName(m));\n    }\n    \n    return 0;\n}',
    hint: 'Combining typedef with enum creates a new type'
  },

  // ========== STRUCTURES (QUESTIONS 72-75) ==========
  {
    id: 'c_structure_072',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates structure declaration and usage.',
    mathSolution: 'Structure in program structure',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\n// Structure declaration\nstruct Student {\n    int rollNo;\n    char name[50];\n    float marks;\n};\n\nint main() {\n    // Structure variable declaration\n    struct Student s1;\n    \n    // Accessing structure members\n    s1.rollNo = 101;\n    strcpy(s1.name, "John Doe");\n    s1.marks = 85.5;\n    \n    printf("Roll No: %d\\n", s1.rollNo);\n    printf("Name: %s\\n", s1.name);\n    printf("Marks: %.2f\\n", s1.marks);\n    \n    return 0;\n}',
    hint: 'Structures group different data types together'
  },
  {
    id: 'c_structure_073',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates nested structures.',
    mathSolution: 'Nested structures',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nstruct Address {\n    char street[50];\n    char city[30];\n    int pincode;\n};\n\nstruct Employee {\n    int id;\n    char name[50];\n    struct Address addr;  // Nested structure\n    float salary;\n};\n\nint main() {\n    struct Employee emp;\n    \n    emp.id = 1001;\n    strcpy(emp.name, "Alice");\n    strcpy(emp.addr.street, "MG Road");\n    strcpy(emp.addr.city, "Mumbai");\n    emp.addr.pincode = 400001;\n    emp.salary = 75000.0;\n    \n    printf("ID: %d\\n", emp.id);\n    printf("Name: %s\\n", emp.name);\n    printf("Street: %s\\n", emp.addr.street);\n    printf("City: %s\\n", emp.addr.city);\n    printf("Pincode: %d\\n", emp.addr.pincode);\n    printf("Salary: %.2f\\n", emp.salary);\n    \n    return 0;\n}',
    hint: 'Structures can contain other structures as members'
  },
  {
    id: 'c_structure_074',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates array of structures.',
    mathSolution: 'Array of structures',
    codeSolution: '#include <stdio.h>\n\nstruct Book {\n    int id;\n    char title[50];\n    float price;\n};\n\nint main() {\n    struct Book library[3] = {\n        {101, "C Programming", 450.50},\n        {102, "Data Structures", 550.00},\n        {103, "Algorithms", 650.75}\n    };\n    \n    printf("Book Details:\\n");\n    for(int i = 0; i < 3; i++) {\n        printf("ID: %d, Title: %s, Price: %.2f\\n", \n                library[i].id, library[i].title, library[i].price);\n    }\n    \n    return 0;\n}',
    hint: 'Arrays can store multiple structure variables'
  },
  {
    id: 'c_structure_075',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates structure pointer and arrow operator.',
    mathSolution: 'Structure pointers',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nstruct Point {\n    int x;\n    int y;\n};\n\nvoid movePoint(struct Point *p, int dx, int dy) {\n    p->x += dx;  // Arrow operator\n    p->y += dy;\n}\n\nint main() {\n    struct Point p1 = {10, 20};\n    struct Point *ptr = &p1;\n    \n    printf("Initial: (%d, %d)\\n", ptr->x, ptr->y);\n    \n    movePoint(ptr, 5, -3);\n    printf("After move: (%d, %d)\\n", ptr->x, ptr->y);\n    \n    // Arrow operator is equivalent to (*ptr).x\n    printf("Using arrow: %d\\n", ptr->x);\n    printf("Using dereference: %d\\n", (*ptr).x);\n    \n    return 0;\n}',
    hint: 'Arrow operator (->) is used to access structure members through pointers'
  },

  // ========== UNIONS (QUESTIONS 76-77) ==========
  {
    id: 'c_structure_076',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates union declaration and usage.',
    mathSolution: 'Union in program structure',
    codeSolution: '#include <stdio.h>\n\n// Union declaration\nunion Data {\n    int i;\n    float f;\n    char str[20];\n};\n\nint main() {\n    union Data data;\n    \n    data.i = 10;\n    printf("data.i: %d\\n", data.i);\n    \n    data.f = 220.5;\n    printf("data.f: %.2f\\n", data.f);\n    printf("data.i after f: %d (corrupted)\\n", data.i);\n    \n    printf("Size of union: %lu bytes\\n", sizeof(data));\n    \n    return 0;\n}',
    hint: 'Union shares memory among members, only one member can hold value at a time'
  },
  {
    id: 'c_structure_077',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates practical use of union for type punning.',
    mathSolution: 'Union for type punning',
    codeSolution: '#include <stdio.h>\n\nunion Number {\n    int intValue;\n    float floatValue;\n    unsigned char bytes[4];\n};\n\nint main() {\n    union Number num;\n    \n    num.intValue = 123456789;\n    \n    printf("As integer: %d\\n", num.intValue);\n    printf("As float: %f\\n", num.floatValue);\n    printf("Bytes: ");\n    for(int i = 0; i < 4; i++) {\n        printf("%02X ", num.bytes[i]);\n    }\n    printf("\\n");\n    \n    num.floatValue = 3.14159;\n    printf("\\nAs float: %f\\n", num.floatValue);\n    printf("As integer: %d\\n", num.intValue);\n    \n    return 0;\n}',
    hint: 'Unions allow viewing the same memory as different data types'
  },

  // ========== POINTERS (QUESTIONS 78-82) ==========
  {
    id: 'c_structure_078',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates pointer declaration and usage.',
    mathSolution: 'Pointers in program structure',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 100;\n    int *ptr;  // Pointer declaration\n    \n    ptr = &num;  // Pointer assignment\n    \n    printf("Value of num: %d\\n", num);\n    printf("Address of num: %p\\n", &num);\n    printf("Value of ptr: %p\\n", ptr);\n    printf("Value pointed by ptr: %d\\n", *ptr);\n    \n    *ptr = 200;  // Modifying through pointer\n    printf("Modified num through pointer: %d\\n", num);\n    \n    return 0;\n}',
    hint: 'Pointers store addresses of variables'
  },
  {
    id: 'c_structure_079',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates pointer arithmetic.',
    mathSolution: 'Pointer arithmetic',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *ptr = arr;  // Points to first element\n    \n    printf("Array elements using pointer arithmetic:\\n");\n    for(int i = 0; i < 5; i++) {\n        printf("*(ptr + %d) = %d\\n", i, *(ptr + i));\n    }\n    \n    printf("\\nMoving pointer:\\n");\n    printf("Current: %d\\n", *ptr);\n    ptr++;  // Move to next integer\n    printf("After ptr++: %d\\n", *ptr);\n    ptr += 2;  // Move forward by 2\n    printf("After ptr += 2: %d\\n", *ptr);\n    \n    return 0;\n}',
    hint: 'Pointer arithmetic advances by the size of the data type'
  },
  {
    id: 'c_structure_080',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates pointer to pointer.',
    mathSolution: 'Pointer to pointer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 50;\n    int *ptr1 = &num;\n    int **ptr2 = &ptr1;\n    int ***ptr3 = &ptr2;\n    \n    printf("num = %d\\n", num);\n    printf("*ptr1 = %d\\n", *ptr1);\n    printf("**ptr2 = %d\\n", **ptr2);\n    printf("***ptr3 = %d\\n", ***ptr3);\n    \n    ***ptr3 = 100;  // Modify through triple pointer\n    printf("\\nAfter modification:\\n");\n    printf("num = %d\\n", num);\n    \n    return 0;\n}',
    hint: 'Multiple levels of indirection are possible with pointers'
  },
  {
    id: 'c_structure_081',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates void pointer (generic pointer).',
    mathSolution: 'Void pointer',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int num = 42;\n    float fnum = 3.14;\n    char ch = \'A\';\n    \n    void *ptr;  // Void pointer can point to any type\n    \n    ptr = #\n    printf("Integer: %d\\n", *(int*)ptr);  // Cast before dereferencing\n    \n    ptr = &fnum;\n    printf("Float: %.2f\\n", *(float*)ptr);\n    \n    ptr = &ch;\n    printf("Char: %c\\n", *(char*)ptr);\n    \n    return 0;\n}',
    hint: 'void* can point to any data type but must be cast before dereferencing'
  },
  {
    id: 'c_structure_082',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates NULL pointer and its usage.',
    mathSolution: 'NULL pointer',
    codeSolution: '#include <stdio.h>\n#include <stddef.h>  // For NULL definition\n\nint main() {\n    int *ptr = NULL;  // Initialize pointer to NULL\n    \n    if(ptr == NULL) {\n        printf("Pointer is NULL\\n");\n        printf("It does not point to any valid memory\\n");\n    }\n    \n    int num = 100;\n    ptr = #\n    \n    if(ptr != NULL) {\n        printf("Pointer now points to value: %d\\n", *ptr);\n    }\n    \n    // Always check for NULL before dereferencing\n    ptr = NULL;\n    if(ptr != NULL) {\n        printf("%d\\n", *ptr);  // This won\'t execute\n    } else {\n        printf("Cannot dereference NULL pointer\\n");\n    }\n    \n    return 0;\n}',
    hint: 'NULL pointer prevents accidental dereferencing of invalid memory. Include stddef.h for NULL definition.'
  },

  // ========== DYNAMIC MEMORY (QUESTIONS 83-85) ==========
  {
    id: 'c_structure_083',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates malloc() for dynamic memory allocation.',
    mathSolution: 'Dynamic memory allocation with malloc',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n = 5;\n    int *arr;\n    \n    // Allocate memory\n    arr = (int*)malloc(n * sizeof(int));\n    \n    if(arr == NULL) {\n        printf("Memory allocation failed\\n");\n        return 1;\n    }\n    \n    // Use the memory\n    for(int i = 0; i < n; i++) {\n        arr[i] = i * 10;\n    }\n    \n    printf("Array elements: ");\n    for(int i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    \n    // Free the memory\n    free(arr);\n    \n    return 0;\n}',
    hint: 'malloc allocates memory and returns void*, always check for NULL'
  },
  {
    id: 'c_structure_084',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates calloc() for dynamic memory allocation.',
    mathSolution: 'Dynamic memory allocation with calloc',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n = 5;\n    int *arr;\n    \n    // Allocate and initialize memory to zero\n    arr = (int*)calloc(n, sizeof(int));\n    \n    if(arr == NULL) {\n        printf("Memory allocation failed\\n");\n        return 1;\n    }\n    \n    printf("calloc initializes memory to zero:\\n");\n    for(int i = 0; i < n; i++) {\n        printf("arr[%d] = %d\\n", i, arr[i]);\n    }\n    \n    // Free the memory\n    free(arr);\n    \n    return 0;\n}',
    hint: 'calloc allocates and initializes memory to zero'
  },
  {
    id: 'c_structure_085',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates realloc() for resizing dynamic memory.',
    mathSolution: 'Resizing memory with realloc',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int *arr;\n    int n = 3;\n    \n    // Initial allocation\n    arr = (int*)malloc(n * sizeof(int));\n    \n    for(int i = 0; i < n; i++) {\n        arr[i] = i + 1;\n    }\n    \n    printf("Original array (size %d): ", n);\n    for(int i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    \n    // Resize to larger\n    n = 5;\n    arr = (int*)realloc(arr, n * sizeof(int));\n    \n    // Add new elements\n    for(int i = 3; i < n; i++) {\n        arr[i] = i + 1;\n    }\n    \n    printf("\\nResized array (size %d): ", n);\n    for(int i = 0; i < n; i++) {\n        printf("%d ", arr[i]);\n    }\n    \n    free(arr);\n    \n    return 0;\n}',
    hint: 'realloc resizes previously allocated memory'
  },

  // ========== FUNCTION POINTERS (QUESTIONS 86-88) ==========
  {
    id: 'c_structure_086',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates function pointer declaration and usage.',
    mathSolution: 'Function pointers',
    codeSolution: '#include <stdio.h>\n\nint add(int a, int b) { return a + b; }\nint subtract(int a, int b) { return a - b; }\n\nint main() {\n    // Function pointer declaration\n    int (*operation)(int, int);\n    \n    // Point to add function\n    operation = add;\n    printf("Add: %d\\n", operation(10, 5));\n    \n    // Point to subtract function\n    operation = subtract;\n    printf("Subtract: %d\\n", operation(10, 5));\n    \n    // Array of function pointers\n    int (*ops[])(int, int) = {add, subtract};\n    printf("Using array: %d %d\\n", ops[0](20, 10), ops[1](20, 10));\n    \n    return 0;\n}',
    hint: 'Function pointers can store addresses of functions'
  },
  {
    id: 'c_structure_087',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates function pointer as parameter.',
    mathSolution: 'Function pointer parameters',
    codeSolution: '#include <stdio.h>\n\nint add(int a, int b) { return a + b; }\nint multiply(int a, int b) { return a * b; }\n\n// Function that takes function pointer as parameter\nint calculate(int x, int y, int (*func)(int, int)) {\n    return func(x, y);\n}\n\nint main() {\n    int a = 10, b = 5;\n    \n    printf("Add: %d\\n", calculate(a, b, add));\n    printf("Multiply: %d\\n", calculate(a, b, multiply));\n    \n    return 0;\n}',
    hint: 'Function pointers enable callback mechanisms'
  },
  {
    id: 'c_structure_088',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates function pointer returning function pointer.',
    mathSolution: 'Function pointer returning function pointer',
    codeSolution: '#include <stdio.h>\n\nint add(int a, int b) { return a + b; }\nint subtract(int a, int b) { return a - b; }\n\n// Function that returns function pointer\nint (*getOperation(char op))(int, int) {\n    if(op == \'+\') return add;\n    if(op == \'-\') return subtract;\n    return NULL;\n}\n\nint main() {\n    int (*func)(int, int);\n    \n    func = getOperation(\'+\');\n    if(func) printf("Add: %d\\n", func(15, 7));\n    \n    func = getOperation(\'-\');\n    if(func) printf("Subtract: %d\\n", func(15, 7));\n    \n    return 0;\n}',
    hint: 'Functions can return function pointers'
  },

  // ========== VARIADIC FUNCTIONS (QUESTIONS 89-90) ==========
  {
    id: 'c_structure_089',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates variadic function using stdarg.h.',
    mathSolution: 'Variadic functions',
    codeSolution: '#include <stdio.h>\n#include <stdarg.h>\n\n// Variadic function to calculate sum\nint sum(int count, ...) {\n    va_list args;\n    int total = 0;\n    \n    va_start(args, count);\n    \n    for(int i = 0; i < count; i++) {\n        total += va_arg(args, int);\n    }\n    \n    va_end(args);\n    return total;\n}\n\n// Variadic function to find maximum\nint max(int count, ...) {\n    va_list args;\n    int maxVal;\n    \n    va_start(args, count);\n    maxVal = va_arg(args, int);\n    \n    for(int i = 1; i < count; i++) {\n        int val = va_arg(args, int);\n        if(val > maxVal) maxVal = val;\n    }\n    \n    va_end(args);\n    return maxVal;\n}\n\nint main() {\n    printf("Sum of 1,2,3,4,5: %d\\n", sum(5, 1, 2, 3, 4, 5));\n    printf("Sum of 10,20,30: %d\\n", sum(3, 10, 20, 30));\n    \n    printf("Max of 5,2,8,1,9: %d\\n", max(5, 5, 2, 8, 1, 9));\n    \n    return 0;\n}',
    hint: 'Variadic functions can take variable number of arguments'
  },
  {
    id: 'c_structure_090',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates variadic function with different data types.',
    mathSolution: 'Variadic with multiple types',
    codeSolution: '#include <stdio.h>\n#include <stdarg.h>\n\nvoid printValues(const char* types, ...) {\n    va_list args;\n    va_start(args, types);\n    \n    for(int i = 0; types[i] != \'\\0\'; i++) {\n        switch(types[i]) {\n            case \'d\':  // int\n                printf("Integer: %d\\n", va_arg(args, int));\n                break;\n            case \'f\':  // double\n                printf("Float: %.2f\\n", va_arg(args, double));\n                break;\n            case \'c\':  // char\n                printf("Char: %c\\n", va_arg(args, int));\n                break;\n            case \'s\':  // string\n                printf("String: %s\\n", va_arg(args, char*));\n                break;\n        }\n    }\n    \n    va_end(args);\n}\n\nint main() {\n    printValues("dfcs", 42, 3.14, \'A\', "Hello");\n    \n    return 0;\n}',
    hint: 'va_arg type must match the actual argument type'
  },

  // ========== COMMAND LINE ARGUMENTS (QUESTIONS 91-93) ==========
  {
    id: 'c_structure_091',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates command line arguments (argc, argv).',
    mathSolution: 'Command line arguments',
    codeSolution: '#include <stdio.h>\n\nint main(int argc, char *argv[]) {\n    printf("Number of arguments: %d\\n", argc);\n    \n    for(int i = 0; i < argc; i++) {\n        printf("argv[%d]: %s\\n", i, argv[i]);\n    }\n    \n    return 0;\n}',
    hint: 'argc is argument count, argv is argument vector'
  },
  {
    id: 'c_structure_092',
    topicId: 'c_structure',
    question: 'Write a program that adds two numbers using command line arguments.',
    mathSolution: 'Command line arguments for calculation',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main(int argc, char *argv[]) {\n    if(argc != 3) {\n        printf("Usage: %s <num1> <num2>\\n", argv[0]);\n        return 1;\n    }\n    \n    int a = atoi(argv[1]);\n    int b = atoi(argv[2]);\n    \n    printf("Sum: %d + %d = %d\\n", a, b, a + b);\n    \n    return 0;\n}',
    hint: 'Convert string arguments to numbers using atoi()'
  },
  {
    id: 'c_structure_093',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates command line arguments with options.',
    mathSolution: 'Command line options parsing',
    codeSolution: '#include <stdio.h>\n#include <string.h>\n\nint main(int argc, char *argv[]) {\n    for(int i = 1; i < argc; i++) {\n        if(strcmp(argv[i], "-h") == 0 || strcmp(argv[i], "--help") == 0) {\n            printf("Help: This program demonstrates command line options\\n");\n            printf("Options:\\n");\n            printf("  -v, --version  Show version\\n");\n            printf("  -n <name>      Specify name\\n");\n            return 0;\n        }\n        else if(strcmp(argv[i], "-v") == 0 || strcmp(argv[i], "--version") == 0) {\n            printf("Version 1.0\\n");\n            return 0;\n        }\n        else if(strcmp(argv[i], "-n") == 0 && i+1 < argc) {\n            printf("Name: %s\\n", argv[i+1]);\n            i++;\n        }\n    }\n    \n    return 0;\n}',
    hint: 'Command line options help make programs more flexible'
  },

  // ========== PREPROCESSOR DIRECTIVES (QUESTIONS 94-96) ==========
  {
    id: 'c_structure_094',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates various preprocessor directives.',
    mathSolution: 'Preprocessor directives',
    codeSolution: '#include <stdio.h>\n\n#define PI 3.14159\n#define SQUARE(x) ((x) * (x))\n#define MAX(a, b) ((a) > (b) ? (a) : (b))\n\n#ifdef DEBUG\n    #define LOG(msg) printf("DEBUG: %s\\n", msg)\n#else\n    #define LOG(msg)\n#endif\n\n#if defined(_WIN32) || defined(_WIN64)\n    #define PLATFORM "Windows"\n#elif defined(__linux__)\n    #define PLATFORM "Linux"\n#else\n    #define PLATFORM "Unknown"\n#endif\n\nint main() {\n    printf("PI: %f\\n", PI);\n    printf("Square of 5: %d\\n", SQUARE(5));\n    printf("Max of 10 and 20: %d\\n", MAX(10, 20));\n    \n    LOG("This is a debug message");\n    \n    printf("Platform: %s\\n", PLATFORM);\n    \n    return 0;\n}',
    hint: 'Preprocessor directives are processed before compilation'
  },
  {
    id: 'c_structure_095',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates #pragma directive.',
    mathSolution: 'Pragma directive',
    codeSolution: '#include <stdio.h>\n\n#pragma pack(1)  // Pack structures without padding\n\nstruct PackedStruct {\n    char c;\n    int i;\n    short s;\n};\n\n#pragma pack()  // Reset to default packing\n\nstruct NormalStruct {\n    char c;\n    int i;\n    short s;\n};\n\nint main() {\n    printf("Size of packed struct: %lu bytes\\n", sizeof(struct PackedStruct));\n    printf("Size of normal struct: %lu bytes\\n", sizeof(struct NormalStruct));\n    \n    #pragma message("Compiling " __FILE__)\n    \n    return 0;\n}',
    hint: '#pragma provides implementation-specific instructions'
  },
  {
    id: 'c_structure_096',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates #line directive.',
    mathSolution: '#line directive',
    codeSolution: '#include <stdio.h>\n\n#line 100 "customfile.c"\n\nint main() {\n    printf("This line is line %d in file %s\\n", __LINE__, __FILE__);\n    \n    printf("Compiled on: %s at %s\\n", __DATE__, __TIME__);\n    \n    return 0;\n}',
    hint: '#line changes line numbering for error messages'
  },

  // ========== FILE OPERATIONS (QUESTIONS 97-98) ==========
  {
    id: 'c_structure_097',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates basic file operations in program structure.',
    mathSolution: 'File handling',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    FILE *file;\n    char buffer[100];\n    \n    // Writing to file\n    file = fopen("test.txt", "w");\n    if(file == NULL) {\n        printf("Error opening file\\n");\n        return 1;\n    }\n    \n    fprintf(file, "Hello, File!\\n");\n    fprintf(file, "This is a test.\\n");\n    fclose(file);\n    \n    // Reading from file\n    file = fopen("test.txt", "r");\n    if(file == NULL) {\n        printf("Error opening file\\n");\n        return 1;\n    }\n    \n    printf("File contents:\\n");\n    while(fgets(buffer, sizeof(buffer), file) != NULL) {\n        printf("%s", buffer);\n    }\n    \n    fclose(file);\n    \n    return 0;\n}',
    hint: 'Always check if file opened successfully and close when done'
  },
  {
    id: 'c_structure_098',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates binary file operations.',
    mathSolution: 'Binary file operations',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n\nstruct Record {\n    int id;\n    char name[20];\n    float value;\n};\n\nint main() {\n    struct Record rec1 = {101, "Alice", 45.5};\n    struct Record rec2;\n    FILE *file;\n    \n    // Write binary data\n    file = fopen("data.bin", "wb");\n    if(file == NULL) {\n        printf("Error opening file\\n");\n        return 1;\n    }\n    \n    fwrite(&rec1, sizeof(struct Record), 1, file);\n    fclose(file);\n    \n    // Read binary data\n    file = fopen("data.bin", "rb");\n    if(file == NULL) {\n        printf("Error opening file\\n");\n        return 1;\n    }\n    \n    fread(&rec2, sizeof(struct Record), 1, file);\n    fclose(file);\n    \n    printf("Read from file:\\n");\n    printf("ID: %d, Name: %s, Value: %.2f\\n", rec2.id, rec2.name, rec2.value);\n    \n    return 0;\n}',
    hint: 'Binary files store data in the same format as memory'
  },

  // ========== ERROR HANDLING (QUESTIONS 99-100) ==========
  {
    id: 'c_structure_099',
    topicId: 'c_structure',
    question: 'Write a program that demonstrates error handling using errno and perror.',
    mathSolution: 'Error handling in C',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <errno.h>\n#include <string.h>\n\nint main() {\n    FILE *file;\n    \n    // Try to open non-existent file\n    file = fopen("nonexistent.txt", "r");\n    \n    if(file == NULL) {\n        printf("Error number: %d\\n", errno);\n        printf("Error message: %s\\n", strerror(errno));\n        perror("fopen");\n        return 1;\n    }\n    \n    fclose(file);\n    \n    // Division by zero check\n    int a = 10, b = 0;\n    if(b == 0) {\n        fprintf(stderr, "Error: Division by zero\\n");\n        return 1;\n    }\n    \n    return 0;\n}',
    hint: 'errno contains last error code, perror prints error message'
  },
  {
    id: 'c_structure_100',
    topicId: 'c_structure',
    question: 'Write a complete C program that demonstrates multiple program structure concepts: header files, multiple functions, global variables, structures, file I/O, and error handling.',
    mathSolution: 'Complete program with multiple structure concepts',
    codeSolution: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <errno.h>\n\n// Constants\n#define MAX_STUDENTS 100\n#define DATA_FILE "students.dat"\n\n// Structure definition\ntypedef struct {\n    int rollNo;\n    char name[50];\n    float marks;\n} Student;\n\n// Global variables\nStudent students[MAX_STUDENTS];\nint studentCount = 0;\n\n// Function prototypes\nvoid addStudent(int roll, const char* name, float marks);\nvoid displayAllStudents();\nint saveToFile();\nint loadFromFile();\nvoid showMenu();\n\nint main() {\n    int choice;\n    int roll;\n    char name[50];\n    float marks;\n    \n    // Load existing data\n    loadFromFile();\n    \n    do {\n        showMenu();\n        printf("Enter choice: ");\n        scanf("%d", &choice);\n        \n        switch(choice) {\n            case 1:\n                printf("Enter roll number: ");\n                scanf("%d", &roll);\n                printf("Enter name: ");\n                scanf("%s", name);\n                printf("Enter marks: ");\n                scanf("%f", &marks);\n                addStudent(roll, name, marks);\n                break;\n                \n            case 2:\n                displayAllStudents();\n                break;\n                \n            case 3:\n                if(saveToFile()) {\n                    printf("Data saved successfully\\n");\n                } else {\n                    printf("Error saving data\\n");\n                }\n                break;\n                \n            case 4:\n                printf("Exiting...\\n");\n                break;\n                \n            default:\n                printf("Invalid choice\\n");\n        }\n    } while(choice != 4);\n    \n    // Save before exit\n    saveToFile();\n    \n    return 0;\n}\n\nvoid addStudent(int roll, const char* name, float marks) {\n    if(studentCount >= MAX_STUDENTS) {\n        printf("Cannot add more students\\n");\n        return;\n    }\n    \n    students[studentCount].rollNo = roll;\n    strcpy(students[studentCount].name, name);\n    students[studentCount].marks = marks;\n    studentCount++;\n    \n    printf("Student added successfully\\n");\n}\n\nvoid displayAllStudents() {\n    if(studentCount == 0) {\n        printf("No students to display\\n");\n        return;\n    }\n    \n    printf("\\nStudent List:\\n");\n    for(int i = 0; i < studentCount; i++) {\n        printf("Roll: %d, Name: %s, Marks: %.2f\\n",\n               students[i].rollNo,\n               students[i].name,\n               students[i].marks);\n    }\n    printf("\\n");\n}\n\nint saveToFile() {\n    FILE *file = fopen(DATA_FILE, "wb");\n    if(file == NULL) {\n        perror("Error opening file");\n        return 0;\n    }\n    \n    fwrite(&studentCount, sizeof(int), 1, file);\n    fwrite(students, sizeof(Student), studentCount, file);\n    \n    fclose(file);\n    return 1;\n}\n\nint loadFromFile() {\n    FILE *file = fopen(DATA_FILE, "rb");\n    if(file == NULL) {\n        // File doesn\'t exist yet - not an error\n        return 0;\n    }\n    \n    fread(&studentCount, sizeof(int), 1, file);\n    fread(students, sizeof(Student), studentCount, file);\n    \n    fclose(file);\n    return 1;\n}\n\nvoid showMenu() {\n    printf("\\n=== Student Management System ===\\n");\n    printf("1. Add Student\\n");\n    printf("2. Display All Students\\n");\n    printf("3. Save to File\\n");\n    printf("4. Exit\\n");\n}',
    hint: 'This program combines all major C program structure concepts'
  }
);