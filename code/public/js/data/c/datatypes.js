QuizData.questions.push(
  // ========== BASIC DATA TYPES (QUESTIONS 1-10) ==========
  {
    id: 'c_datatypes_001',
    topicId: 'c_datatypes',
    question: 'Declare variables of basic data types: int, float, double, and char.',
    mathSolution: 'Basic data type declarations',
    codeSolution: 'int integerVar;\nfloat floatVar;\ndouble doubleVar;\nchar charVar;',
    hint: 'Use format: data_type variable_name;'
  },
  {
    id: 'c_datatypes_002',
    topicId: 'c_datatypes',
    question: 'Initialize an int variable "age" with value 25, float "price" with 99.99, and char "grade" with "A".',
    mathSolution: 'Variable initialization',
    codeSolution: 'int age = 25;\nfloat price = 99.99f;\nchar grade = \'A\';',
    hint: 'Use = for initialization, f suffix for float'
  },
  {
    id: 'c_datatypes_003',
    topicId: 'c_datatypes',
    question: 'Find the size of int, float, double, and char using sizeof operator.',
    mathSolution: 'Using sizeof operator',
    codeSolution: 'printf("Size of int: %zu bytes\\n", sizeof(int));\nprintf("Size of float: %zu bytes\\n", sizeof(float));\nprintf("Size of double: %zu bytes\\n", sizeof(double));\nprintf("Size of char: %zu byte\\n", sizeof(char));',
    hint: 'sizeof returns size in bytes, use %zu format specifier'
  },
  {
    id: 'c_datatypes_004',
    topicId: 'c_datatypes',
    question: 'Print the minimum and maximum values of int type using limits.h.',
    mathSolution: 'Integer ranges from limits.h',
    codeSolution: '#include <limits.h>\nprintf("INT_MIN: %d\\n", INT_MIN);\nprintf("INT_MAX: %d\\n", INT_MAX);',
    hint: 'limits.h contains constants for integer type ranges'
  },
  {
    id: 'c_datatypes_005',
    topicId: 'c_datatypes',
    question: 'Demonstrate the difference between float and double precision by dividing 1 by 3.',
    mathSolution: 'Float vs Double precision',
    codeSolution: 'float f = 1.0f / 3.0f;\ndouble d = 1.0 / 3.0;\nprintf("float: %.15f\\n", f);\nprintf("double: %.15lf\\n", d);',
    hint: 'double shows more decimal digits of precision'
  },
  {
    id: 'c_datatypes_006',
    topicId: 'c_datatypes',
    question: 'Use correct format specifiers to print an int, float, double, and char.',
    mathSolution: 'Format specifiers',
    codeSolution: 'int i = 42;\nfloat f = 3.14f;\ndouble d = 2.718;\nchar c = \'X\';\nprintf("int: %%d = %d\\n", i);\nprintf("float: %%f = %f\\n", f);\nprintf("double: %%lf = %lf\\n", d);\nprintf("char: %%c = %c\\n", c);',
    hint: '%d for int, %f for float, %lf for double, %c for char'
  },
  {
    id: 'c_datatypes_007',
    topicId: 'c_datatypes',
    question: 'Declare a signed int and an unsigned int, assign negative and positive values.',
    mathSolution: 'Signed vs Unsigned',
    codeSolution: 'signed int si = -100;\nunsigned int ui = 100;\nprintf("signed: %d\\n", si);\nprintf("unsigned: %u\\n", ui);',
    hint: 'unsigned stores only non-negative values, use %u format specifier'
  },
  {
    id: 'c_datatypes_008',
    topicId: 'c_datatypes',
    question: 'Declare short, long, and long long int variables with appropriate suffixes.',
    mathSolution: 'Integer type modifiers',
    codeSolution: 'short int s = 1000;\nlong int l = 100000L;\nlong long int ll = 10000000000LL;',
    hint: 'Use L suffix for long, LL for long long'
  },
  {
    id: 'c_datatypes_009',
    topicId: 'c_datatypes',
    question: 'Create a void pointer and use it to point to an integer variable.',
    mathSolution: 'Void pointer usage',
    codeSolution: 'int num = 42;\nvoid *ptr = &num;\nprintf("Value: %d\\n", *(int*)ptr);',
    hint: 'void* is generic, must cast before dereferencing'
  },
  {
    id: 'c_datatypes_010',
    topicId: 'c_datatypes',
    question: 'Declare and use a boolean variable using stdbool.h.',
    mathSolution: 'Boolean type in C',
    codeSolution: '#include <stdbool.h>\nbool isReady = true;\nif(isReady) {\n    printf("Ready!\\n");\n}',
    hint: 'bool, true, false are defined in stdbool.h'
  },

  // ========== INTEGER DATA TYPES (QUESTIONS 11-20) ==========
  {
    id: 'c_datatypes_011',
    topicId: 'c_datatypes',
    question: 'Demonstrate integer overflow by adding 1 to INT_MAX.',
    mathSolution: 'Integer overflow',
    codeSolution: '#include <limits.h>\nint max = INT_MAX;\nprintf("MAX: %d\\n", max);\nmax = max + 1;\nprintf("MAX + 1: %d (overflow)\\n", max);',
    hint: 'Integers wrap around when exceeding maximum value'
  },
  {
    id: 'c_datatypes_012',
    topicId: 'c_datatypes',
    question: 'Write the decimal number 42 in octal, hexadecimal, and binary representations.',
    mathSolution: 'Integer representations',
    codeSolution: 'int decimal = 42;\nint octal = 052;      // Octal (starts with 0)\nint hex = 0x2A;       // Hexadecimal (starts with 0x)\nprintf("Decimal: %d, Octal: %o, Hex: %x\\n", decimal, octal, hex);',
    hint: 'Octal prefix: 0, Hex prefix: 0x'
  },
  {
    id: 'c_datatypes_013',
    topicId: 'c_datatypes',
    question: 'Add a char and an int, show that char is promoted to int.',
    mathSolution: 'Integer promotion',
    codeSolution: 'char ch = \'A\';  // ASCII 65\nint num = 10;\nint result = ch + num;\nprintf("\'A\'(%d) + %d = %d\\n", ch, num, result);',
    hint: 'char is promoted to int in arithmetic operations'
  },
  {
    id: 'c_datatypes_014',
    topicId: 'c_datatypes',
    question: 'Use integer suffixes to specify long, unsigned, and long long constants.',
    mathSolution: 'Integer suffixes',
    codeSolution: 'long l = 42L;\nunsigned u = 42U;\nlong long ll = 42LL;\nunsigned long ul = 42UL;',
    hint: 'L = long, U = unsigned, LL = long long, can be combined'
  },
  {
    id: 'c_datatypes_015',
    topicId: 'c_datatypes',
    question: 'Compare the sizes of int and long on your system using sizeof.',
    mathSolution: 'Int vs Long size',
    codeSolution: 'printf("int size: %zu bytes\\n", sizeof(int));\nprintf("long size: %zu bytes\\n", sizeof(long));\nif(sizeof(int) == sizeof(long))\n    printf("Same size\\n");\nelse\n    printf("Different sizes\\n");',
    hint: 'Sizes vary by system, long is at least as large as int'
  },
  {
    id: 'c_datatypes_016',
    topicId: 'c_datatypes',
    question: 'Use size_t for array indexing and print its size.',
    mathSolution: 'size_t data type',
    codeSolution: 'int arr[] = {10, 20, 30, 40, 50};\nfor(size_t i = 0; i < 5; i++) {\n    printf("arr[%zu] = %d\\n", i, arr[i]);\n}\nprintf("size_t size: %zu bytes\\n", sizeof(size_t));',
    hint: 'size_t is unsigned, use %zu format specifier'
  },
  {
    id: 'c_datatypes_017',
    topicId: 'c_datatypes',
    question: 'Calculate the difference between two pointers using ptrdiff_t.',
    mathSolution: 'ptrdiff_t for pointer difference',
    codeSolution: '#include <stddef.h>\nint arr[] = {1,2,3,4,5};\nint *p1 = &arr[0];\nint *p2 = &arr[4];\nptrdiff_t diff = p2 - p1;\nprintf("Difference: %td elements\\n", diff);',
    hint: 'ptrdiff_t is signed, use %td format specifier'
  },
  {
    id: 'c_datatypes_018',
    topicId: 'c_datatypes',
    question: 'Declare variables of fixed-width integer types: int8_t, uint16_t, int32_t.',
    mathSolution: 'Fixed-width integer types',
    codeSolution: '#include <stdint.h>\nint8_t i8 = 127;\nuint16_t u16 = 65535;\nint32_t i32 = 2147483647;',
    hint: 'stdint.h provides types with exact bit widths'
  },
  {
    id: 'c_datatypes_019',
    topicId: 'c_datatypes',
    question: 'Use int_least16_t and int_fast32_t types and print their sizes.',
    mathSolution: 'Least and fast integer types',
    codeSolution: '#include <stdint.h>\nint_least16_t least = 100;\nint_fast32_t fast = 1000;\nprintf("int_least16_t size: %zu bytes\\n", sizeof(least));\nprintf("int_fast32_t size: %zu bytes\\n", sizeof(fast));',
    hint: 'least = minimum size, fast = fastest type with minimum bits'
  },
  {
    id: 'c_datatypes_020',
    topicId: 'c_datatypes',
    question: 'Print the maximum values of intmax_t and uintmax_t.',
    mathSolution: 'Maximum-width integer types',
    codeSolution: '#include <stdint.h>\n#include <inttypes.h>\nintmax_t imax = INTMAX_MAX;\nuintmax_t umax = UINTMAX_MAX;\nprintf("intmax_t max: %jd\\n", imax);\nprintf("uintmax_t max: %ju\\n", umax);',
    hint: 'intmax_t is largest signed, uintmax_t largest unsigned'
  },

  // ========== FLOATING POINT DATA TYPES (QUESTIONS 21-30) ==========
  {
    id: 'c_datatypes_021',
    topicId: 'c_datatypes',
    question: 'Declare float, double, and long double variables with appropriate suffixes.',
    mathSolution: 'Floating point declarations',
    codeSolution: 'float f = 3.14f;\ndouble d = 3.14159;\nlong double ld = 3.1415926535L;',
    hint: 'f suffix for float, L for long double, no suffix for double'
  },
  {
    id: 'c_datatypes_022',
    topicId: 'c_datatypes',
    question: 'Print a number in scientific notation using %e format specifier.',
    mathSolution: 'Scientific notation',
    codeSolution: 'double num = 12345.6789;\nprintf("%%e: %e\\n", num);\nprintf("%%E: %E\\n", num);\nprintf("%%g: %g\\n", num);',
    hint: '%e for scientific, %g chooses shortest representation'
  },
  {
    id: 'c_datatypes_023',
    topicId: 'c_datatypes',
    question: 'Demonstrate floating point precision issues by comparing 0.1 + 0.2 with 0.3.',
    mathSolution: 'Floating point precision',
    codeSolution: 'float sum = 0.1f + 0.2f;\nif(sum == 0.3f)\n    printf("Equal\\n");\nelse\n    printf("Not equal: %.20f\\n", sum);',
    hint: 'Never compare floats directly with == due to precision issues'
  },
  {
    id: 'c_datatypes_024',
    topicId: 'c_datatypes',
    question: 'Use an epsilon value to correctly compare two floating point numbers.',
    mathSolution: 'Float comparison with epsilon',
    codeSolution: 'float a = 0.1f + 0.2f;\nfloat b = 0.3f;\nfloat epsilon = 0.000001f;\nif(fabs(a - b) < epsilon)\n    printf("Approximately equal\\n");',
    hint: 'Use fabs() from math.h and a small epsilon value'
  },
  {
    id: 'c_datatypes_025',
    topicId: 'c_datatypes',
    question: 'Generate infinity and NaN by dividing by zero and zero by zero.',
    mathSolution: 'Infinity and NaN',
    codeSolution: '#include <math.h>\nfloat inf = 1.0f / 0.0f;\nfloat nan = 0.0f / 0.0f;\nprintf("Infinity: %f\\n", inf);\nprintf("NaN: %f\\n", nan);\nprintf("isinf: %d, isnan: %d\\n", isinf(inf), isnan(nan));',
    hint: 'Use isinf() and isnan() from math.h to check'
  },
  {
    id: 'c_datatypes_026',
    topicId: 'c_datatypes',
    question: 'Print the minimum and maximum values for float using float.h.',
    mathSolution: 'Float ranges',
    codeSolution: '#include <float.h>\nprintf("FLT_MIN: %e\\n", FLT_MIN);\nprintf("FLT_MAX: %e\\n", FLT_MAX);\nprintf("FLT_DIG: %d digits precision\\n", FLT_DIG);',
    hint: 'float.h contains floating point limits'
  },
  {
    id: 'c_datatypes_027',
    topicId: 'c_datatypes',
    question: 'Demonstrate the difference in precision between float and double.',
    mathSolution: 'Float vs Double precision comparison',
    codeSolution: 'float f = 1.0f / 3.0f;\ndouble d = 1.0 / 3.0;\nprintf("float:  %.15f\\n", f);\nprintf("double: %.15lf\\n", d);\nprintf("float size: %zu, double size: %zu\\n", sizeof(f), sizeof(d));',
    hint: 'double has more precision and larger size'
  },
  {
    id: 'c_datatypes_028',
    topicId: 'c_datatypes',
    question: 'Format floating point numbers with specific decimal places.',
    mathSolution: 'Formatting float output',
    codeSolution: 'double pi = 3.14159265359;\nprintf("Default: %f\\n", pi);\nprintf("2 decimals: %.2f\\n", pi);\nprintf("4 decimals: %.4f\\n", pi);\nprintf("10 decimals: %.10f\\n", pi);',
    hint: 'Use %.nf where n is number of decimal places'
  },
  {
    id: 'c_datatypes_029',
    topicId: 'c_datatypes',
    question: 'Convert a double to int and observe the loss of fractional part.',
    mathSolution: 'Double to int conversion',
    codeSolution: 'double pi = 3.14159;\nint intPi = (int)pi;\nprintf("double: %f\\n", pi);\nprintf("int: %d (fraction lost)\\n", intPi);',
    hint: 'Casting to int truncates the fractional part'
  },
  {
    id: 'c_datatypes_030',
    topicId: 'c_datatypes',
    question: 'Use long double for high precision calculations.',
    mathSolution: 'Long double precision',
    codeSolution: 'long double pi = 3.14159265358979323846L;\nprintf("long double: %.20Lf\\n", pi);\nprintf("Size: %zu bytes\\n", sizeof(pi));',
    hint: 'Use %Lf format specifier for long double'
  },

  // ========== CHARACTER DATA TYPES (QUESTIONS 31-40) ==========
  {
    id: 'c_datatypes_031',
    topicId: 'c_datatypes',
    question: 'Declare a char variable and print its value as character and as integer.',
    mathSolution: 'Char as character and ASCII',
    codeSolution: 'char ch = \'A\';\nprintf("Character: %c\\n", ch);\nprintf("ASCII value: %d\\n", ch);',
    hint: 'char is stored as integer (ASCII value)'
  },
  {
    id: 'c_datatypes_032',
    topicId: 'c_datatypes',
    question: 'Demonstrate the difference between signed char and unsigned char.',
    mathSolution: 'Signed vs Unsigned char',
    codeSolution: 'signed char sc = -100;\nunsigned char uc = 200;\nprintf("signed: %d\\n", sc);\nprintf("unsigned: %u\\n", uc);',
    hint: 'signed char range: -128 to 127, unsigned: 0 to 255'
  },
  {
    id: 'c_datatypes_033',
    topicId: 'c_datatypes',
    question: 'Use escape sequences to print special characters.',
    mathSolution: 'Escape sequences',
    codeSolution: 'printf("Newline: First\\nSecond\\n");\nprintf("Tab: Before\\tAfter\\n");\nprintf("Backslash: \\\\ ");\nprintf("Quote: \\"Hello\\"\\n");',
    hint: 'Common escapes: \\n, \\t, \\\\, \\", \\\''
  },
  {
    id: 'c_datatypes_034',
    topicId: 'c_datatypes',
    question: 'Print characters using their ASCII values in a loop.',
    mathSolution: 'ASCII values to characters',
    codeSolution: 'for(int i = 65; i <= 70; i++) {\n    printf("ASCII %d: %c\\n", i, i);\n}',
    hint: 'ASCII 65-70 are A, B, C, D, E, F'
  },
  {
    id: 'c_datatypes_035',
    topicId: 'c_datatypes',
    question: 'Use octal and hexadecimal escape sequences in character constants.',
    mathSolution: 'Octal and hex escapes',
    codeSolution: 'char octal = \'\\101\';  // Octal 101 = \'A\'\nchar hex = \'\\x42\';     // Hex 42 = \'B\'\nprintf("Octal: %c, Hex: %c\\n", octal, hex);',
    hint: '\\ooo for octal, \\xhh for hexadecimal'
  },
  {
    id: 'c_datatypes_036',
    topicId: 'c_datatypes',
    question: 'Declare and initialize a wide character using wchar_t.',
    mathSolution: 'Wide characters',
    codeSolution: '#include <wchar.h>\n#include <locale.h>\nsetlocale(LC_ALL, "");\nwchar_t wch = L\'\\u20B9\';  // Rupee symbol\nwprintf(L"Wide char: %lc\\n", wch);',
    hint: 'Use L prefix, %lc for printing, need setlocale()'
  },
  {
    id: 'c_datatypes_037',
    topicId: 'c_datatypes',
    question: 'Convert a character to uppercase using arithmetic.',
    mathSolution: 'Char arithmetic for case conversion',
    codeSolution: 'char lower = \'a\';\nchar upper = lower - 32;  // \'a\' - 32 = \'A\'\nprintf("%c -> %c\\n", lower, upper);',
    hint: 'ASCII: \'a\'=97, \'A\'=65, difference is 32'
  },
  {
    id: 'c_datatypes_038',
    topicId: 'c_datatypes',
    question: 'Check if a character is digit, letter, or special character.',
    mathSolution: 'Character classification',
    codeSolution: 'char ch = \'7\';\nif(ch >= \'0\' && ch <= \'9\')\n    printf("Digit\\n");\nelse if((ch >= \'A\' && ch <= \'Z\') || (ch >= \'a\' && ch <= \'z\'))\n    printf("Letter\\n");\nelse\n    printf("Special\\n");',
    hint: 'Use ASCII ranges for classification'
  },
  {
    id: 'c_datatypes_039',
    topicId: 'c_datatypes',
    question: 'Demonstrate char16_t and char32_t types from uchar.h.',
    mathSolution: 'UTF-16 and UTF-32 characters',
    codeSolution: '#include <uchar.h>\nchar16_t c16 = u\'\\u20B9\';  // Rupee\nchar32_t c32 = U\'\\U0001F600\'; // Emoji\nprintf("char16_t size: %zu\\n", sizeof(c16));\nprintf("char32_t size: %zu\\n", sizeof(c32));',
    hint: 'Use u prefix for UTF-16, U for UTF-32'
  },
  {
    id: 'c_datatypes_040',
    topicId: 'c_datatypes',
    question: 'Create a string (character array) and print it.',
    mathSolution: 'String as char array',
    codeSolution: 'char str[] = "Hello World";\nchar name[20] = "John";\nprintf("%s\\n", str);\nprintf("%s\\n", name);',
    hint: 'Strings are null-terminated character arrays'
  },

  // ========== DERIVED DATA TYPES (QUESTIONS 41-50) ==========
  {
    id: 'c_datatypes_041',
    topicId: 'c_datatypes',
    question: 'Declare and initialize an integer array of size 5.',
    mathSolution: 'Array declaration',
    codeSolution: 'int numbers[5] = {10, 20, 30, 40, 50};',
    hint: 'Use curly braces {} for initialization'
  },
  {
    id: 'c_datatypes_042',
    topicId: 'c_datatypes',
    question: 'Declare a pointer to an integer and use it to modify the value.',
    mathSolution: 'Pointer declaration and usage',
    codeSolution: 'int num = 42;\nint *ptr = &num;\n*ptr = 100;\nprintf("num is now: %d\\n", num);',
    hint: 'Use & to get address, * to dereference'
  },
  {
    id: 'c_datatypes_043',
    topicId: 'c_datatypes',
    question: 'Define a structure for a student with name, roll number, and marks.',
    mathSolution: 'Structure definition',
    codeSolution: 'struct Student {\n    char name[50];\n    int rollNo;\n    float marks;\n};',
    hint: 'Use struct keyword, members inside curly braces'
  },
  {
    id: 'c_datatypes_044',
    topicId: 'c_datatypes',
    question: 'Create a structure variable and access its members.',
    mathSolution: 'Structure variable and member access',
    codeSolution: 'struct Point {\n    int x;\n    int y;\n};\nstruct Point p1 = {10, 20};\nprintf("x = %d, y = %d\\n", p1.x, p1.y);',
    hint: 'Use dot operator to access members'
  },
  {
    id: 'c_datatypes_045',
    topicId: 'c_datatypes',
    question: 'Define a union that can store either an int or a float.',
    mathSolution: 'Union definition',
    codeSolution: 'union Data {\n    int i;\n    float f;\n};',
    hint: 'Union members share same memory location'
  },
  {
    id: 'c_datatypes_046',
    topicId: 'c_datatypes',
    question: 'Demonstrate that union members share memory by modifying one and observing another.',
    mathSolution: 'Union memory sharing',
    codeSolution: 'union Data {\n    int i;\n    float f;\n} data;\ndata.i = 42;\nprintf("i = %d\\n", data.i);\ndata.f = 3.14f;\nprintf("f = %f, i = %d (corrupted)\\n", data.f, data.i);',
    hint: 'Setting one member affects others in union'
  },
  {
    id: 'c_datatypes_047',
    topicId: 'c_datatypes',
    question: 'Define an enum for weekdays (Monday to Sunday).',
    mathSolution: 'Enumeration definition',
    codeSolution: 'enum Weekday { MON, TUE, WED, THU, FRI, SAT, SUN };',
    hint: 'By default, first value is 0, increments by 1'
  },
  {
    id: 'c_datatypes_048',
    topicId: 'c_datatypes',
    question: 'Create an enum with custom values and use it.',
    mathSolution: 'Enum with custom values',
    codeSolution: 'enum Color { RED = 1, GREEN = 3, BLUE = 5 };\nenum Color myColor = GREEN;\nprintf("Color value: %d\\n", myColor);',
    hint: 'You can assign specific integer values to enum constants'
  },
  {
    id: 'c_datatypes_049',
    topicId: 'c_datatypes',
    question: 'Use typedef to create an alias for int as Integer.',
    mathSolution: 'Typedef usage',
    codeSolution: 'typedef int Integer;\nInteger age = 25;\nprintf("Age: %d\\n", age);',
    hint: 'typedef creates a new name for an existing type'
  },
  {
    id: 'c_datatypes_050',
    topicId: 'c_datatypes',
    question: 'Use typedef with a structure to create a new type name.',
    mathSolution: 'Typedef with structure',
    codeSolution: 'typedef struct {\n    int x;\n    int y;\n} Point;\nPoint p1 = {10, 20};',
    hint: 'Allows using Point instead of struct Point'
  },

  // ========== TYPE QUALIFIERS (QUESTIONS 51-55) ==========
  {
    id: 'c_datatypes_051',
    topicId: 'c_datatypes',
    question: 'Declare a constant integer using const qualifier.',
    mathSolution: 'const qualifier',
    codeSolution: 'const int MAX = 100;\n// MAX = 200; // Error: can\'t modify const',
    hint: 'const variables cannot be modified after initialization'
  },
  {
    id: 'c_datatypes_052',
    topicId: 'c_datatypes',
    question: 'Create a pointer to const data and a const pointer.',
    mathSolution: 'Const with pointers',
    codeSolution: 'int x = 10, y = 20;\nconst int *ptr1 = &x;  // Pointer to const data\nint *const ptr2 = &x;   // Const pointer\n// *ptr1 = 30; // Error\nptr1 = &y;      // OK\n// ptr2 = &y;  // Error\n*ptr2 = 30;     // OK',
    hint: 'Read const qualifier from right to left'
  },
  {
    id: 'c_datatypes_053',
    topicId: 'c_datatypes',
    question: 'Declare a volatile variable for memory-mapped I/O.',
    mathSolution: 'volatile qualifier',
    codeSolution: 'volatile int statusRegister = 0;\n// Tells compiler value may change unexpectedly',
    hint: 'volatile prevents compiler optimizations'
  },
  {
    id: 'c_datatypes_054',
    topicId: 'c_datatypes',
    question: 'Use restrict qualifier in a function parameter.',
    mathSolution: 'restrict qualifier',
    codeSolution: 'void update(int *restrict a, int *restrict b) {\n    *a = *b + 10;\n    // Tells compiler pointers don\'t overlap\n}',
    hint: 'restrict is optimization hint, only for pointers'
  },
  {
    id: 'c_datatypes_055',
    topicId: 'c_datatypes',
    question: 'Declare an atomic integer variable.',
    mathSolution: '_Atomic type qualifier',
    codeSolution: '#include <stdatomic.h>\natomic_int counter = 0;\natomic_fetch_add(&counter, 1);',
    hint: 'Atomic operations are thread-safe'
  },

  // ========== TYPE CONVERSION (QUESTIONS 56-60) ==========
  {
    id: 'c_datatypes_056',
    topicId: 'c_datatypes',
    question: 'Demonstrate implicit conversion when mixing int and float.',
    mathSolution: 'Implicit type conversion',
    codeSolution: 'int i = 5;\nfloat f = 2.5f;\nfloat result = i + f;  // i converted to float\nprintf("%d + %.1f = %.1f\\n", i, f, result);',
    hint: 'Smaller type promoted to larger type automatically'
  },
  {
    id: 'c_datatypes_057',
    topicId: 'c_datatypes',
    question: 'Use explicit casting to perform float division with integers.',
    mathSolution: 'Explicit type casting',
    codeSolution: 'int a = 5, b = 2;\nfloat result = (float)a / b;\nprintf("%d / %d = %f\\n", a, b, result);',
    hint: 'Use (type)expression syntax for casting'
  },
  {
    id: 'c_datatypes_058',
    topicId: 'c_datatypes',
    question: 'Demonstrate integer promotion with char and short.',
    mathSolution: 'Integer promotion rules',
    codeSolution: 'char c1 = 100, c2 = 100;\nint sum = c1 + c2;  // char promoted to int\nprintf("Size of result: %zu bytes\\n", sizeof(c1 + c2));',
    hint: 'char and short are promoted to int in expressions'
  },
  {
    id: 'c_datatypes_059',
    topicId: 'c_datatypes',
    question: 'Show data loss when converting from double to int.',
    mathSolution: 'Data loss in conversion',
    codeSolution: 'double large = 1234.5678;\nint truncated = (int)large;\nprintf("double: %f\\n", large);\nprintf("int: %d (fraction lost)\\n", truncated);',
    hint: 'Casting to int truncates fractional part'
  },
  {
    id: 'c_datatypes_060',
    topicId: 'c_datatypes',
    question: 'Convert a character digit to its integer value.',
    mathSolution: 'Char digit to int',
    codeSolution: 'char digit = \'5\';\nint value = digit - \'0\';\nprintf("Char \'%c\' as int: %d\\n", digit, value);',
    hint: '\'0\' ASCII is 48, subtract to get numeric value'
  }
);