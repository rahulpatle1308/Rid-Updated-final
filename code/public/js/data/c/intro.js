QuizData.questions.push(
  // ============ LEVEL 1: C BASICS AND HISTORY (1-10) ============
  {
    id: 'c_intro_1',
    topicId: 'c_intro',
    question: 'What is C programming language? Write a brief introduction.',
    mathSolution: 'C is a general-purpose, procedural programming language developed by Dennis Ritchie at Bell Labs in 1972.',
    codeSolution: '// C is a middle-level language that combines features of both high-level and low-level languages.\n// It is widely used for system programming, operating systems, and embedded systems.',
    hint: 'Focus on developer, year, and key characteristics'
  },
  {
    id: 'c_intro_2',
    topicId: 'c_intro',
    question: 'Who developed C programming language and in which year?',
    mathSolution: 'Dennis Ritchie developed C language in 1972 at Bell Labs.',
    codeSolution: '// Dennis Ritchie\n// Year: 1972\n// Place: Bell Laboratories, USA',
    hint: 'American computer scientist, worked at Bell Labs'
  },
  {
    id: 'c_intro_3',
    topicId: 'c_intro',
    question: 'What are the key features of C programming language?',
    mathSolution: 'Simple, Portable, Fast, Memory Management, Pointers, Structured Language, Rich Library',
    codeSolution: '// Features of C:\n// 1. Simple and Efficient\n// 2. Portable\n// 3. Fast Execution\n// 4. Memory Management\n// 5. Pointers Support\n// 6. Structured Language\n// 7. Rich Library Functions',
    hint: 'List at least 5 important features'
  },
  {
    id: 'c_intro_4',
    topicId: 'c_intro',
    question: 'Why is C called a middle-level language?',
    mathSolution: 'C combines features of both high-level and low-level languages.',
    codeSolution: '// C is middle-level because:\n// High-level features: functions, loops, structures\n// Low-level features: pointers, bit manipulation, memory access',
    hint: 'It has both high-level and low-level language features'
  },
  {
    id: 'c_intro_5',
    topicId: 'c_intro',
    question: 'What are the advantages of C language?',
    mathSolution: 'Fast, Portable, Modular, Rich Library, Memory Management',
    codeSolution: '// Advantages of C:\n// 1. Fast execution speed\n// 2. Platform independent\n// 3. Modular programming with functions\n// 4. Extensive library support\n// 5. Direct memory access using pointers\n// 6. Recursion support',
    hint: 'Mention at least 5 advantages'
  },
  {
    id: 'c_intro_6',
    topicId: 'c_intro',
    question: 'What are the disadvantages of C language?',
    mathSolution: 'No OOP, No Exception Handling, No Runtime Checking, No Constructor/Destructor',
    codeSolution: '// Disadvantages of C:\n// 1. No Object-Oriented Programming\n// 2. No exception handling\n// 3. No runtime checking\n// 4. No constructor/destructor\n// 5. No garbage collection\n// 6. Low level of abstraction',
    hint: 'Compare with modern languages like C++ or Java'
  },
  {
    id: 'c_intro_7',
    topicId: 'c_intro',
    question: 'What are the applications of C language?',
    mathSolution: 'Operating Systems, Embedded Systems, Compilers, Databases, Gaming',
    codeSolution: '// Applications of C:\n// 1. Operating Systems (UNIX, Linux, Windows)\n// 2. Embedded Systems\n// 3. Compilers and Interpreters\n// 4. Database Systems\n// 5. Gaming and Graphics\n// 6. Device Drivers',
    hint: 'Think about where performance matters most'
  },
  {
    id: 'c_intro_8',
    topicId: 'c_intro',
    question: 'Is C a case-sensitive language? Explain with example.',
    mathSolution: 'Yes, C is case-sensitive. Variable "count" and "Count" are different.',
    codeSolution: 'int count = 10;\nint Count = 20;  // Different variable\n// count and Count are two different variables',
    hint: 'C treats uppercase and lowercase letters as different'
  },
  {
    id: 'c_intro_9',
    topicId: 'c_intro',
    question: 'What is the difference between C and C++?',
    mathSolution: 'C is procedural, C++ is multi-paradigm (procedural + OOP)',
    codeSolution: '// C vs C++:\n// C: Procedural, No classes, No function overloading\n// C++: OOP, Classes, Function overloading, Exception handling',
    hint: 'Main difference is OOP support'
  },
  {
    id: 'c_intro_10',
    topicId: 'c_intro',
    question: 'What is the difference between C and Java?',
    mathSolution: 'C is procedural, compiled; Java is OOP, compiled+interpreted',
    codeSolution: '// C vs Java:\n// C: Procedural, Platform dependent, Pointers supported\n// Java: OOP, Platform independent (JVM), No pointers\n// C: Manual memory management\n// Java: Automatic garbage collection',
    hint: 'Consider platform independence and memory management'
  },

  // ============ LEVEL 2: COMPILERS AND IDEs (11-15) ============
  {
    id: 'c_intro_11',
    topicId: 'c_intro',
    question: 'What is a compiler in C? Name some C compilers.',
    mathSolution: 'Compiler converts C code to machine code. Examples: GCC, Turbo C, Clang',
    codeSolution: '// Compiler: Translates source code to executable code\n// Popular C Compilers:\n// 1. GCC (GNU Compiler Collection)\n// 2. Clang\n// 3. Turbo C\n// 4. MSVC (Microsoft Visual C++)\n// 5. Dev-C++',
    hint: 'GCC is most popular in Linux/Unix'
  },
  {
    id: 'c_intro_12',
    topicId: 'c_intro',
    question: 'What is an IDE? Name some IDEs for C programming.',
    mathSolution: 'IDE is Integrated Development Environment with editor, compiler, debugger',
    codeSolution: '// Popular C IDEs:\n// 1. Code::Blocks\n// 2. Dev-C++\n// 3. Eclipse CDT\n// 4. Visual Studio\n// 5. CLion\n// 6. Turbo C (older)',
    hint: 'IDE combines editor, compiler, and debugger'
  },
  {
    id: 'c_intro_13',
    topicId: 'c_intro',
    question: 'What is the difference between compiler and interpreter?',
    mathSolution: 'Compiler translates entire program at once; interpreter translates line by line',
    codeSolution: '// Compiler:\n// - Translates entire program at once\n// - Faster execution\n// - Examples: C, C++ compiler\n\n// Interpreter:\n// - Translates line by line\n// - Slower execution\n// - Examples: Python, JavaScript',
    hint: 'C uses compiler, Python uses interpreter'
  },
  {
    id: 'c_intro_14',
    topicId: 'c_intro',
    question: 'What is the extension of C source files and executable files?',
    mathSolution: 'Source: .c, Executable: .exe (Windows) or .out (Linux/Unix)',
    codeSolution: '// Source file: program.c\n// Object file: program.obj\n// Executable file: program.exe (Windows)\n// Executable file: a.out (Linux/Unix)',
    hint: 'Source files end with .c'
  },
  {
    id: 'c_intro_15',
    topicId: 'c_intro',
    question: 'Explain the process of compiling and running a C program.',
    mathSolution: 'Write code → Preprocess → Compile → Assemble → Link → Execute',
    codeSolution: '// Steps:\n// 1. Writing source code (.c file)\n// 2. Preprocessing (handles # directives)\n// 3. Compilation (to assembly code)\n// 4. Assembly (to object code .obj)\n// 5. Linking (combines object files)\n// 6. Execution (running .exe)',
    hint: 'There are 4 main stages: Preprocessing, Compilation, Assembly, Linking'
  },

  // ============ LEVEL 3: HEADER FILES AND MAIN FUNCTION (16-20) ============
  {
    id: 'c_intro_16',
    topicId: 'c_intro',
    question: 'What is the use of #include <stdio.h> in C programs?',
    mathSolution: 'It includes standard input/output library functions like printf(), scanf()',
    codeSolution: '#include <stdio.h>  // Header file for I/O functions\n\nint main() {\n    printf("Hello");  // printf is defined in stdio.h\n    return 0;\n}',
    hint: 'Without this, printf and scanf won\'t work'
  },
  {
    id: 'c_intro_17',
    topicId: 'c_intro',
    question: 'What is the difference between < > and " " in #include?',
    mathSolution: '< > searches in system directories, " " searches in current directory first',
    codeSolution: '#include <stdio.h>    // Searches in system include directories\n#include "myheader.h"  // Searches in current directory first, then system',
    hint: 'Angle brackets for standard headers, quotes for user-defined headers'
  },
  {
    id: 'c_intro_18',
    topicId: 'c_intro',
    question: 'What is the main() function in C?',
    mathSolution: 'main() is the entry point of every C program where execution begins',
    codeSolution: 'int main() {\n    // Program starts executing from here\n    return 0;\n}',
    hint: 'Every C program must have one main() function'
  },
  {
    id: 'c_intro_19',
    topicId: 'c_intro',
    question: 'What are the different return types possible for main() function?',
    mathSolution: 'int main(), void main(), main() (implicit int)',
    codeSolution: 'int main() { return 0; }      // Standard\nvoid main() { }                  // Non-standard but works\nmain() { return 0; }             // Old style, implicit int',
    hint: 'Standard C uses int main() with return 0 for success'
  },
  {
    id: 'c_intro_20',
    topicId: 'c_intro',
    question: 'What is the meaning of return 0; in main() function?',
    mathSolution: 'return 0 indicates successful program execution to the operating system',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Program executed successfully");\n    return 0;  // Tells OS: program completed without errors\n}',
    hint: 'Non-zero return values usually indicate errors'
  },

  // ============ LEVEL 4: TOKENS AND KEYWORDS (21-25) ============
  {
    id: 'c_intro_21',
    topicId: 'c_intro',
    question: 'What are tokens in C? Name the different types of tokens.',
    mathSolution: 'Tokens are smallest individual units in a C program: Keywords, Identifiers, Constants, Strings, Operators, Special Symbols',
    codeSolution: '// Example showing different tokens:\nint main() {\n    int age = 25;  // int=keyword, age=identifier, ==operator, 25=constant\n    return 0;\n}',
    hint: 'There are 6 types of tokens'
  },
  {
    id: 'c_intro_22',
    topicId: 'c_intro',
    question: 'What are keywords in C? Give examples.',
    mathSolution: 'Keywords are reserved words with predefined meaning. Examples: int, float, if, else, for, while',
    codeSolution: '// Keywords cannot be used as variable names\nint float = 10;  // ERROR! float is keyword\nint main = 20;    // ERROR! main is keyword',
    hint: 'C has 32 keywords (C89) or more in later versions'
  },
  {
    id: 'c_intro_23',
    topicId: 'c_intro',
    question: 'List all 32 keywords in C language.',
    mathSolution: 'auto, break, case, char, const, continue, default, do, double, else, enum, extern, float, for, goto, if, int, long, register, return, short, signed, sizeof, static, struct, switch, typedef, union, unsigned, void, volatile, while',
    codeSolution: '// C89/C90 keywords\n// auto, break, case, char, const, continue, default, do, double,\n// else, enum, extern, float, for, goto, if, int, long, register,\n// return, short, signed, sizeof, static, struct, switch, typedef,\n// union, unsigned, void, volatile, while',
    hint: 'There are exactly 32 keywords in standard C'
  },
  {
    id: 'c_intro_24',
    topicId: 'c_intro',
    question: 'What are identifiers in C? What are the rules for naming identifiers?',
    mathSolution: 'Identifiers are names given to variables, functions, etc. Rules: letters, digits, underscore; cannot start with digit; no keywords',
    codeSolution: '// Valid identifiers:\nint age;      // valid\nfloat _salary; // valid (underscore allowed)\nint num1;     // valid\n\n// Invalid identifiers:\nint 123abc;   // invalid (starts with digit)\nint float;    // invalid (keyword)\nint my-name;  // invalid (hyphen not allowed)',
    hint: 'Only letters, digits, and underscore allowed'
  },
  {
    id: 'c_intro_25',
    topicId: 'c_intro',
    question: 'Is C a case-sensitive language? Demonstrate with an example.',
    mathSolution: 'Yes, C is case-sensitive. Variable, Variable, VARIABLE are all different.',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int value = 10;\n    int Value = 20;\n    int VALUE = 30;\n    \n    printf("value = %d\\n", value);   // prints 10\n    printf("Value = %d\\n", Value);   // prints 20\n    printf("VALUE = %d\\n", VALUE);   // prints 30\n    return 0;\n}',
    hint: 'Uppercase and lowercase are treated differently'
  },

  // ============ LEVEL 5: COMMENTS AND WHITESPACE (26-30) ============
  {
    id: 'c_intro_26',
    topicId: 'c_intro',
    question: 'What are comments in C? Write the syntax for single-line and multi-line comments.',
    mathSolution: 'Comments are ignored by compiler, used for documentation. // for single line, /* */ for multi-line',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    // This is a single-line comment\n    printf("Hello");\n    \n    /* This is a\n       multi-line\n       comment */\n    return 0;\n}',
    hint: 'Comments make code readable and maintainable'
  },
  {
    id: 'c_intro_27',
    topicId: 'c_intro',
    question: 'Can comments be nested in C? Explain.',
    mathSolution: 'No, comments cannot be nested in C. /* /* */ */ will cause error.',
    codeSolution: '/* Outer comment /* Inner comment */ */  // Error!\n\n// Correct way:\n/* Outer comment */  // Separate comments\n/* Another comment */',
    hint: 'Comment nesting is not allowed in standard C'
  },
  {
    id: 'c_intro_28',
    topicId: 'c_intro',
    question: 'What is whitespace in C? Why is it important?',
    mathSolution: 'Whitespace includes spaces, tabs, newlines. It improves readability and separates tokens.',
    codeSolution: 'int age=25;        // Valid but hard to read\nint age = 25;      // Better with spaces\n\nint\nmain\n(\n)\n{                  // Valid but terrible style\nreturn 0;\n}',
    hint: 'Whitespace is ignored by compiler but essential for readability'
  },
  {
    id: 'c_intro_29',
    topicId: 'c_intro',
    question: 'What is the difference between syntax error and logical error in C?',
    mathSolution: 'Syntax error violates grammar rules; logical error gives wrong output despite correct syntax',
    codeSolution: '// Syntax error:\nint a, b  // Missing semicolon\n\n// Logical error:\nint a = 5, b = 2;\nint avg = a + b / 2;  // Wrong: should be (a+b)/2\n// Program runs but gives wrong result',
    hint: 'Compiler catches syntax errors, not logical errors'
  },
  {
    id: 'c_intro_30',
    topicId: 'c_intro',
    question: 'What is the first program typically written in C? Write it.',
    mathSolution: 'Hello World program - prints "Hello, World!" on screen',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!");\n    return 0;\n}',
    hint: 'This is the traditional first program in any language'
  },

  // ============ LEVEL 6: STATEMENTS AND HEADER FILES (31-35) ============
  {
    id: 'c_intro_31',
    topicId: 'c_intro',
    question: 'What is the purpose of semicolon (;) in C?',
    mathSolution: 'Semicolon terminates statements in C. It marks the end of a statement.',
    codeSolution: 'int a = 10;    // Statement ends with ;\nprintf("%d", a); // Another statement\n// Missing semicolon causes error',
    hint: 'Every statement in C must end with semicolon'
  },
  {
    id: 'c_intro_32',
    topicId: 'c_intro',
    question: 'What are header files in C? Why are they used?',
    mathSolution: 'Header files contain function declarations and macro definitions. They provide reusable code.',
    codeSolution: '#include <stdio.h>   // For I/O functions\n#include <math.h>    // For mathematical functions\n#include <string.h>  // For string functions\n\nint main() {\n    printf("%f", sqrt(25));  // sqrt from math.h\n    return 0;\n}',
    hint: 'They save time by providing pre-written functions'
  },
  {
    id: 'c_intro_33',
    topicId: 'c_intro',
    question: 'Name some commonly used header files in C and their uses.',
    mathSolution: 'stdio.h (I/O), math.h (math functions), string.h (string functions), stdlib.h (memory allocation)',
    codeSolution: '#include <stdio.h>    // printf, scanf, fopen, etc.\n#include <math.h>     // sqrt, pow, sin, cos, etc.\n#include <string.h>   // strlen, strcpy, strcmp, etc.\n#include <stdlib.h>   // malloc, calloc, free, etc.\n#include <ctype.h>    // isalpha, isdigit, toupper, etc.',
    hint: 'These are standard library headers'
  },
  {
    id: 'c_intro_34',
    topicId: 'c_intro',
    question: 'What is the difference between #include and #define?',
    mathSolution: '#include inserts file contents, #define creates macros and constants',
    codeSolution: '#include <stdio.h>     // Inserts stdio.h content\n#define PI 3.14         // Creates macro PI\n#define SQUARE(x) x*x   // Creates macro with parameter\n\nint main() {\n    float area = PI * 5 * 5;  // PI replaced by 3.14\n    int sq = SQUARE(5);       // SQUARE(5) replaced by 5*5\n    return 0;\n}',
    hint: 'Both are preprocessor directives but different purposes'
  },
  {
    id: 'c_intro_35',
    topicId: 'c_intro',
    question: 'What is the role of preprocessor in C?',
    mathSolution: 'Preprocessor processes directives (#include, #define) before actual compilation',
    codeSolution: '// Preprocessor steps:\n// 1. Removes comments\n// 2. Expands #include files\n// 3. Replaces #define macros\n// 4. Handles conditional compilation (#if, #ifdef)\n\n#include <stdio.h>  // Preprocessor inserts file here\n#define MAX 100     // Preprocessor remembers this\n\nint main() {\n    int arr[MAX];   // MAX becomes 100\n    return 0;\n}',
    hint: 'Preprocessor runs before compiler'
  },

  // ============ LEVEL 7: ESCAPE SEQUENCES AND CHARACTERS (36-40) ============
  {
    id: 'c_intro_36',
    topicId: 'c_intro',
    question: 'What are escape sequences in C? Give examples.',
    mathSolution: 'Escape sequences are special characters starting with backslash: \\n (newline), \\t (tab), \\\\ (backslash)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    printf("Hello\\nWorld");     // New line\n    printf("Hello\\tWorld");      // Tab\n    printf("Hello\\"World\\"");    // Double quote\n    printf("C:\\\\Program Files"); // Backslash\n    return 0;\n}',
    hint: 'They represent non-printable characters'
  },
  {
    id: 'c_intro_37',
    topicId: 'c_intro',
    question: 'List all escape sequences in C with their meanings.',
    mathSolution: '\\a (alert), \\b (backspace), \\n (newline), \\t (tab), \\\\ (backslash), \\" (quote), \\\' (apostrophe), \\0 (null)',
    codeSolution: '// Common escape sequences:\n// \\a  - Alert (beep)\n// \\b  - Backspace\n// \\n  - New line\n// \\r  - Carriage return\n// \\t  - Horizontal tab\n// \\\\  - Backslash\n// \\"  - Double quote\n// \\\'  - Single quote\n// \\0  - Null character\n// \\v  - Vertical tab',
    hint: 'Used in printf and character constants'
  },
  {
    id: 'c_intro_38',
    topicId: 'c_intro',
    question: 'What is the difference between compilation and execution?',
    mathSolution: 'Compilation converts source code to machine code; execution runs that machine code',
    codeSolution: '// Compilation:\n// Source (.c) → Compiler → Executable (.exe)\n// gcc program.c -o program.exe\n\n// Execution:\n// Executable (.exe) → Operating System → Running program\n// ./program.exe',
    hint: 'Compilation happens once, execution can happen many times'
  },
  {
    id: 'c_intro_39',
    topicId: 'c_intro',
    question: 'What is the difference between syntax and semantics in C?',
    mathSolution: 'Syntax is grammar rules; semantics is meaning or logic of the code',
    codeSolution: '// Syntax error example:\nint a, b  // Missing semicolon\n\n// Semantic error example:\nint a = 10, b = 0;\nint c = a / b;  // Semantically wrong (division by zero)\n// Program compiles but crashes at runtime',
    hint: 'Syntax: how to write; Semantics: what it means'
  },
  {
    id: 'c_intro_40',
    topicId: 'c_intro',
    question: 'What is the ASCII character set? Why is it important in C?',
    mathSolution: 'ASCII is 7-bit character encoding standard (0-127). C uses ASCII for character representation.',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    char ch = \'A\';\n    printf("Character: %c\\n", ch);\n    printf("ASCII value: %d\\n", ch);  // Prints 65\n    \n    // ASCII values: A=65, a=97, 0=48\n    return 0;\n}',
    hint: 'Characters are stored as integers using ASCII codes'
  },

  // ============ LEVEL 8: DATA TYPES AND FORMAT SPECIFIERS (41-45) ============
  {
    id: 'c_intro_41',
    topicId: 'c_intro',
    question: 'What is portability in C? Why is C called a portable language?',
    mathSolution: 'Portability means same code can run on different platforms with minimal changes.',
    codeSolution: '// C is portable because:\n// 1. Compilers available for almost all platforms\n// 2. Standard libraries work similarly\n// 3. Only system-specific parts need changes\n\n#include <stdio.h>\nint main() {\n    printf("This runs anywhere");  // Works on any platform\n    return 0;\n}',
    hint: 'Write once, compile anywhere'
  },
  {
    id: 'c_intro_42',
    topicId: 'c_intro',
    question: 'What are the basic data types in C?',
    mathSolution: 'int (integer), float (floating point), char (character), double (double precision)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 10;        // integer\n    float b = 3.14;    // floating point\n    char c = \'A\';       // character\n    double d = 3.14159; // double precision\n    \n    printf("int: %d\\n", a);\n    printf("float: %f\\n", b);\n    printf("char: %c\\n", c);\n    printf("double: %lf\\n", d);\n    return 0;\n}',
    hint: 'There are 4 basic data types'
  },
  {
    id: 'c_intro_43',
    topicId: 'c_intro',
    question: 'What are format specifiers in C? Give examples.',
    mathSolution: 'Format specifiers define data type in printf/scanf: %d (int), %f (float), %c (char), %s (string)',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int i = 10;\n    float f = 3.14;\n    char c = \'A\';\n    char str[] = "Hello";\n    \n    printf("%%d: %d\\n", i);      // prints integer\n    printf("%%f: %f\\n", f);      // prints float\n    printf("%%c: %c\\n", c);      // prints character\n    printf("%%s: %s\\n", str);    // prints string\n    return 0;\n}',
    hint: 'Used in printf() and scanf() functions'
  },
  {
    id: 'c_intro_44',
    topicId: 'c_intro',
    question: 'What is the difference between declaration and definition in C?',
    mathSolution: 'Declaration tells compiler about variable/function; definition allocates memory.',
    codeSolution: '// Declaration:\nextern int x;      // Tells compiler x exists\nint add(int, int); // Function declaration (prototype)\n\n// Definition:\nint x = 10;        // Declares and allocates memory\nint add(int a, int b) {  // Function definition\n    return a + b;\n}',
    hint: 'Definition includes declaration + memory allocation'
  },
  {
    id: 'c_intro_45',
    topicId: 'c_intro',
    question: 'What is the difference between = and == in C?',
    mathSolution: '= is assignment operator, == is equality comparison operator',
    codeSolution: '#include <stdio.h>\n\nint main() {\n    int a = 5;     // Assignment\n    int b = 10;\n    \n    if(a = b) {    // WRONG! This assigns b to a, then checks if a!=0\n        printf("This will always execute if b!=0");\n    }\n    \n    if(a == b) {   // CORRECT! Compares a and b\n        printf("a equals b");\n    }\n    return 0;\n}',
    hint: 'Common mistake: using = instead of == in conditions'
  },

  // ============ LEVEL 9: PROGRAM EXECUTION AND ERRORS (46-50) ============
  {
    id: 'c_intro_46',
    topicId: 'c_intro',
    question: 'What are the steps to write and execute a C program?',
    mathSolution: '1. Write code in editor, 2. Save as .c file, 3. Compile, 4. Link, 5. Execute',
    codeSolution: '// Step 1: Write code in editor (program.c)\n#include <stdio.h>\nint main() {\n    printf("Hello");\n    return 0;\n}\n\n// Step 2: Compile (using GCC)\n// gcc program.c -o program\n\n// Step 3: Run\n// ./program  (Linux/Mac)\n// program.exe (Windows)',
    hint: 'Use GCC compiler for compilation'
  },
  {
    id: 'c_intro_47',
    topicId: 'c_intro',
    question: 'What is a linker in C? What does it do?',
    mathSolution: 'Linker combines object files and libraries to create executable file.',
    codeSolution: '// Linker performs:\n// 1. Combines multiple object files\n// 2. Links with library functions\n// 3. Resolves external references\n// 4. Creates final executable\n\n// Example:\n// gcc -c file1.c      // creates file1.o\n// gcc -c file2.c      // creates file2.o\n// gcc file1.o file2.o -o program  // linker combines them',
    hint: 'Linker runs after compiler'
  },
  {
    id: 'c_intro_48',
    topicId: 'c_intro',
    question: 'What are the different types of errors in C programming?',
    mathSolution: 'Syntax errors, Semantic errors, Runtime errors, Logical errors, Linker errors',
    codeSolution: '// 1. Syntax error:\n// int a, b  (missing ;)\n\n// 2. Semantic error:\n// int a = "hello";  (type mismatch)\n\n// 3. Runtime error:\n// int a = 10/0;  (division by zero)\n\n// 4. Logical error:\n// int avg = a + b / 2;  (wrong formula)\n\n// 5. Linker error:\n// undefined reference to function',
    hint: 'Different errors occur at different stages'
  },
  {
    id: 'c_intro_49',
    topicId: 'c_intro',
    question: 'What is the difference between runtime error and compile-time error?',
    mathSolution: 'Compile-time errors caught by compiler; runtime errors occur during execution',
    codeSolution: '// Compile-time error:\nint a = 10  // Missing semicolon - caught by compiler\n\n// Runtime error:\n#include <stdio.h>\nint main() {\n    int a = 10, b = 0;\n    int c = a / b;  // Division by zero - compiles but crashes at runtime\n    return 0;\n}',
    hint: 'Compiler can\'t catch all errors'
  },
  {
    id: 'c_intro_50',
    topicId: 'c_intro',
    question: 'Write a complete C program that demonstrates the basic structure of C programming.',
    mathSolution: 'Program with header files, main function, variable declaration, input, output, and return',
    codeSolution: '#include <stdio.h>   // Header file\n\nint main() {          // Main function\n    // Variable declaration\n    int num1, num2, sum;\n    \n    // Input\n    printf("Enter two numbers: ");\n    scanf("%d %d", &num1, &num2);\n    \n    // Processing\n    sum = num1 + num2;\n    \n    // Output\n    printf("Sum = %d\\n", sum);\n    \n    return 0;         // Return to OS\n}',
    hint: 'This shows complete program structure'
  }
);