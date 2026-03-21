QuizData.questions.push(
  // ========== BASIC #DEFINE MACROS (QUESTIONS 1-5) ==========
  {
    id: 'c_pre_1',
    topicId: 'c_preprocessor',
    question: 'Define a macro PI with value 3.14159.',
    mathSolution: 'Constant for pi',
    codeSolution: '#define PI 3.14159',
    hint: 'Use #define for constant values'
  },
  {
    id: 'c_pre_2',
    topicId: 'c_preprocessor',
    question: 'Define a macro to calculate square of a number.',
    mathSolution: 'x * x',
    codeSolution: '#define SQUARE(x) ((x) * (x))',
    hint: 'Always wrap parameters in parentheses'
  },
  {
    id: 'c_pre_3',
    topicId: 'c_preprocessor',
    question: 'Define a macro to find maximum of two numbers.',
    mathSolution: 'Return larger of a and b',
    codeSolution: '#define MAX(a,b) ((a) > (b) ? (a) : (b))',
    hint: 'Use ternary operator with parentheses'
  },
  {
    id: 'c_pre_4',
    topicId: 'c_preprocessor',
    question: 'Define a macro to find minimum of two numbers.',
    mathSolution: 'Return smaller of a and b',
    codeSolution: '#define MIN(a,b) ((a) < (b) ? (a) : (b))',
    hint: 'Use ternary operator with parentheses'
  },
  {
    id: 'c_pre_5',
    topicId: 'c_preprocessor',
    question: 'Define a macro for absolute value.',
    mathSolution: '|x| = x if x>=0, -x if x<0',
    codeSolution: '#define ABS(x) ((x) < 0 ? -(x) : (x))',
    hint: 'Check sign and negate if negative'
  },

  // ========== MULTI-STATEMENT MACROS (QUESTIONS 6-10) ==========
  {
    id: 'c_pre_6',
    topicId: 'c_preprocessor',
    question: 'Create a macro to swap two integers.',
    mathSolution: 'Exchange values of a and b',
    codeSolution: '#define SWAP(a,b) do { int temp = a; a = b; b = temp; } while(0)',
    hint: 'Use do-while(0) for multi-statement macros'
  },
  {
    id: 'c_pre_7',
    topicId: 'c_preprocessor',
    question: 'Define a macro to print a value with label.',
    mathSolution: 'Print "x = value"',
    codeSolution: '#define PRINT(x) printf(#x " = %d\\n", x)',
    hint: 'Use # to stringize parameter'
  },
  {
    id: 'c_pre_8',
    topicId: 'c_preprocessor',
    question: 'Create a macro that loops n times.',
    mathSolution: 'Execute statement n times',
    codeSolution: '#define TIMES(n, action) for(int i=0;i<(n);i++) { action; }',
    hint: 'Use for loop in macro'
  },
  {
    id: 'c_pre_9',
    topicId: 'c_preprocessor',
    question: 'Define a macro to check if number is even.',
    mathSolution: 'Return 1 if even, 0 if odd',
    codeSolution: '#define IS_EVEN(x) ((x) % 2 == 0)',
    hint: 'Check remainder when divided by 2'
  },
  {
    id: 'c_pre_10',
    topicId: 'c_preprocessor',
    question: 'Define a macro to check if character is digit.',
    mathSolution: 'Check if c between 0 and 9',
    codeSolution: '#define IS_DIGIT(c) ((c) >= \'0\' && (c) <= \'9\')',
    hint: 'Compare with ASCII values'
  },

  // ========== STRINGIZING OPERATOR # (QUESTIONS 11-13) ==========
  {
    id: 'c_pre_11',
    topicId: 'c_preprocessor',
    question: 'Use stringizing operator to create string from parameter.',
    mathSolution: 'Convert macro argument to string',
    codeSolution: '#define STR(x) #x',
    hint: '# before parameter turns it to string'
  },
  {
    id: 'c_pre_12',
    topicId: 'c_preprocessor',
    question: 'Create macro that prints variable name and value.',
    mathSolution: 'Display "var = value"',
    codeSolution: '#define DEBUG_PRINT(x) printf(#x " = %d\\n", x)',
    hint: 'Stringize the variable name'
  },
  {
    id: 'c_pre_13',
    topicId: 'c_preprocessor',
    question: 'Define macro to create error message with line number.',
    mathSolution: 'Include __LINE__ in string',
    codeSolution: '#define ERROR_MSG(msg) printf("Error at line %d: %s\\n", __LINE__, msg)',
    hint: 'Use __LINE__ macro'
  },

  // ========== TOKEN PASTING OPERATOR ## (QUESTIONS 14-17) ==========
  {
    id: 'c_pre_14',
    topicId: 'c_preprocessor',
    question: 'Use token pasting to create variable names.',
    mathSolution: 'Concatenate tokens',
    codeSolution: '#define MAKE_VAR(name, num) name ## num',
    hint: '## joins tokens together'
  },
  {
    id: 'c_pre_15',
    topicId: 'c_preprocessor',
    question: 'Create macro to generate getter functions.',
    mathSolution: 'Create get_field for struct',
    codeSolution: '#define GETTER(struct, field) int get_##field(struct *obj) { return obj->field; }',
    hint: 'Use ## to build function name'
  },
  {
    id: 'c_pre_16',
    topicId: 'c_preprocessor',
    question: 'Define macro to create setter functions.',
    mathSolution: 'Create set_field for struct',
    codeSolution: '#define SETTER(struct, field) void set_##field(struct *obj, int val) { obj->field = val; }',
    hint: 'Build function name with ##'
  },
  {
    id: 'c_pre_17',
    topicId: 'c_preprocessor',
    question: 'Create macro to generate array of constants.',
    mathSolution: 'Define array elements',
    codeSolution: '#define ARRAY(name, size) int name[size] = { [0 ... size-1] = 0 }',
    hint: 'GCC extension for designated init'
  },

  // ========== CONDITIONAL COMPILATION (QUESTIONS 18-22) ==========
  {
    id: 'c_pre_18',
    topicId: 'c_preprocessor',
    question: 'Use #ifdef to conditionally compile debug code.',
    mathSolution: 'Include debug prints only if DEBUG defined',
    codeSolution: '#ifdef DEBUG\nprintf("Debug info\\n");\n#endif',
    hint: 'Check if DEBUG macro is defined'
  },
  {
    id: 'c_pre_19',
    topicId: 'c_preprocessor',
    question: 'Use #ifndef for header guards.',
    mathSolution: 'Prevent multiple inclusion',
    codeSolution: '#ifndef HEADER_H\n#define HEADER_H\n// header content\n#endif',
    hint: 'Check if not defined'
  },
  {
    id: 'c_pre_20',
    topicId: 'c_preprocessor',
    question: 'Use #if to check numeric condition.',
    mathSolution: 'Compile based on constant expression',
    codeSolution: '#if MAX_SIZE > 1024\nprintf("Large buffer");\n#endif',
    hint: '#if evaluates constant expressions'
  },
  {
    id: 'c_pre_21',
    topicId: 'c_preprocessor',
    question: 'Use #elif for multiple conditions.',
    mathSolution: 'Else-if chain in preprocessor',
    codeSolution: '#if defined(DEBUG)\nprintf("Debug");\n#elif defined(INFO)\nprintf("Info");\n#else\nprintf("Normal");\n#endif',
    hint: 'Chain conditions with #elif'
  },
  {
    id: 'c_pre_22',
    topicId: 'c_preprocessor',
    question: 'Use #ifdef with logical operators.',
    mathSolution: 'Check multiple macros',
    codeSolution: '#if defined(DEBUG) && defined(VERBOSE)\nprintf("Verbose debug");\n#endif',
    hint: 'Use defined() operator'
  },

  // ========== #UNDEF (QUESTIONS 23-24) ==========
  {
    id: 'c_pre_23',
    topicId: 'c_preprocessor',
    question: 'Use #undef to remove macro definition.',
    mathSolution: 'Undefine existing macro',
    codeSolution: '#define TEMP 100\n#undef TEMP',
    hint: 'Removes macro from preprocessor symbol table'
  },
  {
    id: 'c_pre_24',
    topicId: 'c_preprocessor',
    question: 'Redefine macro after undefining.',
    mathSolution: 'Change macro value',
    codeSolution: '#define SIZE 10\n#undef SIZE\n#define SIZE 20',
    hint: 'Must undef before redefining with new value'
  },

  // ========== #PRAGMA (QUESTIONS 25-28) ==========
  {
    id: 'c_pre_25',
    topicId: 'c_preprocessor',
    question: 'Use #pragma once for header guard.',
    mathSolution: 'Include once pragma',
    codeSolution: '#pragma once\n// header content',
    hint: 'Alternative to traditional header guards'
  },
  {
    id: 'c_pre_26',
    topicId: 'c_preprocessor',
    question: 'Use #pragma to disable specific warning.',
    mathSolution: 'Compiler-specific warning control',
    codeSolution: '#pragma warning(disable: 4996) // MSVC\n#pragma GCC diagnostic ignored "-Wunused-variable" // GCC',
    hint: 'Syntax depends on compiler'
  },
  {
    id: 'c_pre_27',
    topicId: 'c_preprocessor',
    question: 'Use #pragma pack to control structure alignment.',
    mathSolution: 'Pack struct without padding',
    codeSolution: '#pragma pack(1)\nstruct Packed { char c; int i; };\n#pragma pack()',
    hint: 'Reduces memory but may affect performance'
  },
  {
    id: 'c_pre_28',
    topicId: 'c_preprocessor',
    question: 'Use #pragma message to display compile-time message.',
    mathSolution: 'Show message during compilation',
    codeSolution: '#pragma message("Compiling with debug features")',
    hint: 'Useful for build information'
  },

  // ========== PREDEFINED MACROS (QUESTIONS 29-36) ==========
  {
    id: 'c_pre_29',
    topicId: 'c_preprocessor',
    question: 'Use __LINE__ macro to print current line number.',
    mathSolution: 'Get source line number',
    codeSolution: 'printf("This is line %d\\n", __LINE__);',
    hint: '__LINE__ expands to current line'
  },
  {
    id: 'c_pre_30',
    topicId: 'c_preprocessor',
    question: 'Use __FILE__ macro to print current filename.',
    mathSolution: 'Get source filename',
    codeSolution: 'printf("File: %s\\n", __FILE__);',
    hint: '__FILE__ expands to filename string'
  },
  {
    id: 'c_pre_31',
    topicId: 'c_preprocessor',
    question: 'Use __DATE__ macro for compilation date.',
    mathSolution: 'Get compilation date',
    codeSolution: 'printf("Compiled on: %s\\n", __DATE__);',
    hint: 'Format: "MMM DD YYYY"'
  },
  {
    id: 'c_pre_32',
    topicId: 'c_preprocessor',
    question: 'Use __TIME__ macro for compilation time.',
    mathSolution: 'Get compilation time',
    codeSolution: 'printf("Compiled at: %s\\n", __TIME__);',
    hint: 'Format: "HH:MM:SS"'
  },
  {
    id: 'c_pre_33',
    topicId: 'c_preprocessor',
    question: 'Use __func__ for current function name.',
    mathSolution: 'Get function name (C99)',
    codeSolution: 'printf("In function: %s\\n", __func__);',
    hint: '__func__ is not a macro but behaves like one'
  },
  {
    id: 'c_pre_34',
    topicId: 'c_preprocessor',
    question: 'Check compiler using predefined macros.',
    mathSolution: 'Identify which compiler is being used',
    codeSolution: '#if defined(__GNUC__)\nprintf("GCC\\n");\n#elif defined(_MSC_VER)\nprintf("MSVC\\n");\n#endif',
    hint: 'Different compilers define different macros'
  },
  {
    id: 'c_pre_35',
    topicId: 'c_preprocessor',
    question: 'Check operating system using predefined macros.',
    mathSolution: 'Identify target OS',
    codeSolution: '#if defined(__linux__)\nprintf("Linux\\n");\n#elif defined(_WIN32)\nprintf("Windows\\n");\n#elif defined(__APPLE__)\nprintf("macOS\\n");\n#endif',
    hint: 'OS-specific predefined macros'
  },
  {
    id: 'c_pre_36',
    topicId: 'c_preprocessor',
    question: 'Use __cplusplus to detect C++ compiler.',
    mathSolution: 'Check if compiled as C++',
    codeSolution: '#ifdef __cplusplus\nextern "C" {\n#endif\n// C code\n#ifdef __cplusplus\n}\n#endif',
    hint: 'Used for C/C++ compatibility headers'
  },

  // ========== #INCLUDE (QUESTIONS 37-39) ==========
  {
    id: 'c_pre_37',
    topicId: 'c_preprocessor',
    question: 'Include system header using angle brackets.',
    mathSolution: 'Include standard library header',
    codeSolution: '#include <stdio.h>',
    hint: 'Angle brackets search system paths'
  },
  {
    id: 'c_pre_38',
    topicId: 'c_preprocessor',
    question: 'Include user header using double quotes.',
    mathSolution: 'Include custom header file',
    codeSolution: '#include "myheader.h"',
    hint: 'Double quotes search local directory first'
  },
  {
    id: 'c_pre_39',
    topicId: 'c_preprocessor',
    question: 'Conditionally include header based on macro.',
    mathSolution: 'Include only if feature needed',
    codeSolution: '#ifdef USE_MATH\n#include <math.h>\n#endif',
    hint: 'Wrap #include in #ifdef'
  },

  // ========== #ERROR AND #WARNING (QUESTIONS 40-42) ==========
  {
    id: 'c_pre_40',
    topicId: 'c_preprocessor',
    question: 'Use #error to stop compilation with message.',
    mathSolution: 'Generate compile error',
    codeSolution: '#ifndef CONFIG_H\n#error "config.h must be included before this file"\n#endif',
    hint: '#error halts compilation'
  },
  {
    id: 'c_pre_41',
    topicId: 'c_preprocessor',
    question: 'Use #warning to show compile-time warning.',
    mathSolution: 'Generate warning but continue',
    codeSolution: '#warning "This code is deprecated, please update"',
    hint: '#warning is non-standard but widely supported'
  },
  {
    id: 'c_pre_42',
    topicId: 'c_preprocessor',
    question: 'Check version and error if too old.',
    mathSolution: 'Require minimum version',
    codeSolution: '#if __STDC_VERSION__ < 199901L\n#error "C99 or later required"\n#endif',
    hint: 'Check __STDC_VERSION__ macro'
  },

  // ========== VARIADIC MACROS (QUESTIONS 43-45) ==========
  {
    id: 'c_pre_43',
    topicId: 'c_preprocessor',
    question: 'Create variadic macro for debug printing.',
    mathSolution: 'Macro with variable arguments',
    codeSolution: '#define DEBUG_PRINT(fmt, ...) printf("DEBUG: " fmt "\\n", __VA_ARGS__)',
    hint: 'Use ... and __VA_ARGS__'
  },
  {
    id: 'c_pre_44',
    topicId: 'c_preprocessor',
    question: 'Create variadic macro that handles zero arguments.',
    mathSolution: 'Work with no variable args',
    codeSolution: '#define LOG(fmt, ...) printf(fmt "\\n", ##__VA_ARGS__)',
    hint: 'GNU extension ## removes comma if __VA_ARGS__ empty'
  },
  {
    id: 'c_pre_45',
    topicId: 'c_preprocessor',
    question: 'Create macro to count number of arguments.',
    mathSolution: 'Count variadic args',
    codeSolution: '#define VA_NUM_ARGS(...) VA_NUM_ARGS_IMPL(__VA_ARGS__, 5,4,3,2,1)\n#define VA_NUM_ARGS_IMPL(_1,_2,_3,_4,_5,N,...) N',
    hint: 'Use argument shifting technique'
  },

  // ========== MACRO TRICKS (QUESTIONS 46-48) ==========
  {
    id: 'c_pre_46',
    topicId: 'c_preprocessor',
    question: 'Create macro to repeat a token multiple times.',
    mathSolution: 'Token repetition',
    codeSolution: '#define REPEAT_2(x) x x\n#define REPEAT_3(x) x x x\n#define REPEAT_4(x) x x x x',
    hint: 'Simple repetition macros'
  },
  {
    id: 'c_pre_47',
    topicId: 'c_preprocessor',
    question: 'Create macro to stringify and then concatenate.',
    mathSolution: 'Double expansion trick',
    codeSolution: '#define STR(x) #x\n#define XSTR(x) STR(x)\n#define CONCAT(a,b) a##b\n#define XCONCAT(a,b) CONCAT(a,b)',
    hint: 'Use for macro arguments that need expansion'
  },
  {
    id: 'c_pre_48',
    topicId: 'c_preprocessor',
    question: 'Create macro for C++ comment style in C.',
    mathSolution: 'Simulate // comments in older C',
    codeSolution: '#define COMMENT //',
    hint: 'But // works in C99 anyway'
  },

  // ========== X-MACROS (QUESTIONS 49-50) ==========
  {
    id: 'c_pre_49',
    topicId: 'c_preprocessor',
    question: 'Use X-macro pattern for enum and string array.',
    mathSolution: 'Maintain enum and strings together',
    codeSolution: '#define COLORS \\\n   X(RED) \\\n   X(GREEN) \\\n   X(BLUE)\n#define X(name) name,\nenum Color { COLORS };\n#undef X\n#define X(name) #name,\nconst char *colorNames[] = { COLORS };',
    hint: 'Define list once, use multiple times'
  },
  {
    id: 'c_pre_50',
    topicId: 'c_preprocessor',
    question: 'X-macro for error codes with messages.',
    mathSolution: 'Error enum and description',
    codeSolution: '#define ERRORS \\\n   X(OK, "Success") \\\n   X(ERR_FILE, "File not found") \\\n   X(ERR_MEM, "Out of memory")\n#define X(code, msg) code,\nenum Error { ERRORS };\n#undef X\n#define X(code, msg) msg,\nconst char *errMsgs[] = { ERRORS };',
    hint: 'Include additional data in X macro'
  },

  // ========== PRAGMA OPERATORS (QUESTION 51) ==========
  {
    id: 'c_pre_51',
    topicId: 'c_preprocessor',
    question: 'Use _Pragma operator for pragma in macros.',
    mathSolution: 'Pragma inside macro',
    codeSolution: '#define GCC_DIAG_STR(s) #s\n#define GCC_DIAG(s) _Pragma(GCC_DIAG_STR(s))\n#define NO_WARN _Pragma("GCC diagnostic ignored \\"-Wunused\\"")',
    hint: '_Pragma is C99 alternative to #pragma'
  },

  // ========== INCLUDE GUARDS (QUESTIONS 52-53) ==========
  {
    id: 'c_pre_52',
    topicId: 'c_preprocessor',
    question: 'Write traditional header guard for "mylib.h".',
    mathSolution: 'Prevent multiple inclusion',
    codeSolution: '#ifndef MYLIB_H\n#define MYLIB_H\n// declarations\n#endif',
    hint: 'Use macro named after header file'
  },
  {
    id: 'c_pre_53',
    topicId: 'c_preprocessor',
    question: 'Write header guard with unique identifier.',
    mathSolution: 'Generate unique macro name',
    codeSolution: '#ifndef __MYLIB_HEADER_H__\n#define __MYLIB_HEADER_H__\n// header content\n#endif',
    hint: 'Include project name in guard'
  },

  // ========== LINE CONTROL (QUESTIONS 54-55) ==========
  {
    id: 'c_pre_54',
    topicId: 'c_preprocessor',
    question: 'Use #line to change line number in error messages.',
    mathSolution: 'Reset line numbering',
    codeSolution: '#line 42 "generated.c"\nint x = y; // error shows line 42',
    hint: 'Useful for generated code'
  },
  {
    id: 'c_pre_55',
    topicId: 'c_preprocessor',
    question: 'Reset line numbering to current file.',
    mathSolution: 'Restore original line numbers',
    codeSolution: '#line __LINE__ __FILE__',
    hint: 'Use predefined macros'
  },

  // ========== #IF WITH SIZEOF (QUESTION 56) ==========
  {
    id: 'c_pre_56',
    topicId: 'c_preprocessor',
    question: 'Check integer size using #if with sizeof (GCC extension).',
    mathSolution: 'Compile-time size check',
    codeSolution: '#if __SIZEOF_INT__ == 4\nprintf("int is 32-bit\\n");\n#endif',
    hint: 'sizeof not allowed in #if, use predefined macros'
  },

  // ========== ASSERT MACROS (QUESTIONS 57-58) ==========
  {
    id: 'c_pre_57',
    topicId: 'c_preprocessor',
    question: 'Define compile-time assertion macro.',
    mathSolution: 'Static assertion in C99',
    codeSolution: '#define STATIC_ASSERT(cond) typedef char static_assertion[(cond)?1:-1]',
    hint: 'Negative array size causes error'
  },
  {
    id: 'c_pre_58',
    topicId: 'c_preprocessor',
    question: 'Use C11 _Static_assert in preprocessor.',
    mathSolution: 'Standard static assertion',
    codeSolution: '_Static_assert(sizeof(int) == 4, "int must be 32-bit");',
    hint: '_Static_assert is C11 keyword'
  },

  // ========== INCLUDE GUARDS FOR MULTIPLE INCLUSION (QUESTION 59) ==========
  {
    id: 'c_pre_59',
    topicId: 'c_preprocessor',
    question: 'Create header that can be included multiple times safely.',
    mathSolution: 'Idempotent header',
    codeSolution: '#ifndef HEADER_H\n#define HEADER_H\n// content\n#endif',
    hint: 'Standard header guard pattern'
  },

  // ========== MACRO TO HIDE POINTER SYNTAX (QUESTION 60) ==========
  {
    id: 'c_pre_60',
    topicId: 'c_preprocessor',
    question: 'Create macro to hide dereference syntax.',
    mathSolution: 'Simplify pointer access',
    codeSolution: '#define VALUE(ptr) (*(ptr))\nint x = 5; int *p = &x; VALUE(p) = 10;',
    hint: 'Macro expands to dereference'
  },

  // ========== MACRO FOR ALLOCATION (QUESTIONS 61-62) ==========
  {
    id: 'c_pre_61',
    topicId: 'c_preprocessor',
    question: 'Create safe malloc macro with type casting.',
    mathSolution: 'Allocate with type checking',
    codeSolution: '#define NEW(type) (type*)malloc(sizeof(type))\nint *p = NEW(int);',
    hint: 'Macro does sizeof on type'
  },
  {
    id: 'c_pre_62',
    topicId: 'c_preprocessor',
    question: 'Create safe malloc macro for arrays.',
    mathSolution: 'Allocate array with size',
    codeSolution: '#define NEW_ARRAY(type, count) (type*)malloc((count) * sizeof(type))\nint *arr = NEW_ARRAY(int, 10);',
    hint: 'Multiply count by element size'
  },

  // ========== MACRO FOR LOGGING WITH LEVEL (QUESTION 63) ==========
  {
    id: 'c_pre_63',
    topicId: 'c_preprocessor',
    question: 'Create logging macros with different levels.',
    mathSolution: 'Conditional logging',
    codeSolution: '#define LOG_LEVEL 2\n#define LOG(level, fmt, ...) do { if((level) <= LOG_LEVEL) printf(fmt "\\n", ##__VA_ARGS__); } while(0)\nLOG(1, "Error: %s", msg);\nLOG(3, "Debug info");',
    hint: 'Filter based on level'
  },

  // ========== MACRO FOR TIMING (QUESTION 64) ==========
  {
    id: 'c_pre_64',
    topicId: 'c_preprocessor',
    question: 'Create macro to measure execution time.',
    mathSolution: 'Time code block',
    codeSolution: '#define TIME_BLOCK(block) do { clock_t start = clock(); block; printf("Time: %f\\n", (double)(clock()-start)/CLOCKS_PER_SEC); } while(0)\nTIME_BLOCK({ /* code */ });',
    hint: 'Use clock() before and after'
  },

  // ========== MACRO FOR LOOP UNROLLING (QUESTION 65) ==========
  {
    id: 'c_pre_65',
    topicId: 'c_preprocessor',
    question: 'Create macro for simple loop unrolling.',
    mathSolution: 'Unroll small loops',
    codeSolution: '#define UNROLL4(statement) do { statement; statement; statement; statement; } while(0)',
    hint: 'Repeat statement multiple times'
  },

  // ========== MACRO FOR ERROR HANDLING (QUESTION 66) ==========
  {
    id: 'c_pre_66',
    topicId: 'c_preprocessor',
    question: 'Create macro for checked function calls.',
    mathSolution: 'Check return value and handle error',
    codeSolution: '#define CHECK(call, msg) do { if((call) < 0) { perror(msg); exit(1); } } while(0)\nCHECK(open("file", O_RDONLY), "open failed");',
    hint: 'Check and handle error'
  },

  // ========== MACRO FOR BIT OPERATIONS (QUESTION 67) ==========
  {
    id: 'c_pre_67',
    topicId: 'c_preprocessor',
    question: 'Create macros for bit manipulation.',
    mathSolution: 'Set, clear, toggle, test bits',
    codeSolution: '#define SET_BIT(x, b) ((x) |= (1 << (b)))\n#define CLEAR_BIT(x, b) ((x) &= ~(1 << (b)))\n#define TOGGLE_BIT(x, b) ((x) ^= (1 << (b)))\n#define TEST_BIT(x, b) (((x) >> (b)) & 1)',
    hint: 'Standard bit operations'
  },

  // ========== MACRO FOR ARRAY SIZE (QUESTION 68) ==========
  {
    id: 'c_pre_68',
    topicId: 'c_preprocessor',
    question: 'Create macro to get array size.',
    mathSolution: 'Number of elements in array',
    codeSolution: '#define ARRAY_SIZE(arr) (sizeof(arr) / sizeof((arr)[0]))\nint arr[10]; printf("%zu", ARRAY_SIZE(arr));',
    hint: 'Total bytes divided by element size'
  },

  // ========== MACRO FOR CONTAINER OF (QUESTION 69) ==========
  {
    id: 'c_pre_69',
    topicId: 'c_preprocessor',
    question: 'Create container_of macro for embedded systems.',
    mathSolution: 'Get struct pointer from member',
    codeSolution: '#define container_of(ptr, type, member) ((type *)((char *)(ptr) - offsetof(type, member)))',
    hint: 'Subtract member offset from pointer'
  },

  // ========== MACRO FOR MAXIMUM OF MULTIPLE VALUES (QUESTION 70) ==========
  {
    id: 'c_pre_70',
    topicId: 'c_preprocessor',
    question: 'Create macro for max of three values.',
    mathSolution: 'Return largest of three',
    codeSolution: '#define MAX3(a,b,c) ((a)>(b)?((a)>(c)?(a):(c)):((b)>(c)?(b):(c)))',
    hint: 'Nested ternary operators'
  },

  // ========== MACRO FOR MINIMUM OF MULTIPLE VALUES (QUESTION 71) ==========
  {
    id: 'c_pre_71',
    topicId: 'c_preprocessor',
    question: 'Create macro for min of three values.',
    mathSolution: 'Return smallest of three',
    codeSolution: '#define MIN3(a,b,c) ((a)<(b)?((a)<(c)?(a):(c)):((b)<(c)?(b):(c)))',
    hint: 'Nested ternary operators'
  },

  // ========== MACRO FOR ISPOWEROF2 (QUESTION 72) ==========
  {
    id: 'c_pre_72',
    topicId: 'c_preprocessor',
    question: 'Create macro to check if number is power of 2.',
    mathSolution: 'Powers of 2 have one bit set',
    codeSolution: '#define IS_POWER_OF_2(x) ((x) && !((x) & ((x)-1)))',
    hint: 'x & (x-1) clears lowest set bit'
  },

  // ========== MACRO FOR ALIGNMENT (QUESTION 73) ==========
  {
    id: 'c_pre_73',
    topicId: 'c_preprocessor',
    question: 'Create macro to align value up to boundary.',
    mathSolution: 'Round up to multiple of align',
    codeSolution: '#define ALIGN_UP(val, align) (((val) + (align)-1) & ~((align)-1))\n#define ALIGN_DOWN(val, align) ((val) & ~((align)-1))',
    hint: 'Mask off low bits'
  },

  // ========== MACRO FOR CLAMP (QUESTION 74) ==========
  {
    id: 'c_pre_74',
    topicId: 'c_preprocessor',
    question: 'Create macro to clamp value between min and max.',
    mathSolution: 'Limit value to range',
    codeSolution: '#define CLAMP(x, min, max) ((x) < (min) ? (min) : ((x) > (max) ? (max) : (x)))',
    hint: 'Ternary with two comparisons'
  },

  // ========== MACRO FOR SIGN (QUESTION 75) ==========
  {
    id: 'c_pre_75',
    topicId: 'c_preprocessor',
    question: 'Create macro to get sign of number.',
    mathSolution: 'Return -1, 0, or 1',
    codeSolution: '#define SIGN(x) (((x) > 0) - ((x) < 0))',
    hint: 'Difference of two comparisons'
  },

  // ========== MACRO FOR ISBETWEEN (QUESTION 76) ==========
  {
    id: 'c_pre_76',
    topicId: 'c_preprocessor',
    question: 'Create macro to check if value in range.',
    mathSolution: 'Check if low <= x <= high',
    codeSolution: '#define IN_RANGE(x, low, high) ((x) >= (low) && (x) <= (high))',
    hint: 'Combine comparisons'
  },

  // ========== MACRO FOR SWAP WITH XOR (QUESTION 77) ==========
  {
    id: 'c_pre_77',
    topicId: 'c_preprocessor',
    question: 'Create macro to swap integers using XOR.',
    mathSolution: 'Swap without temporary',
    codeSolution: '#define SWAP_XOR(a,b) do { (a) ^= (b); (b) ^= (a); (a) ^= (b); } while(0)',
    hint: 'XOR swap trick (works only for integers)'
  },

  // ========== MACRO FOR MIN WITH TYPES (QUESTION 78) ==========
  {
    id: 'c_pre_78',
    topicId: 'c_preprocessor',
    question: 'Create type-generic min macro using _Generic.',
    mathSolution: 'Work with any numeric type',
    codeSolution: '#define MIN(x,y) _Generic((x), \\\n   int: min_int, \\\n   float: min_float, \\\n   double: min_double)(x,y)',
    hint: 'C11 _Generic for type-generic macros'
  },

  // ========== MACRO FOR COMPILE-TIME WARNINGS (QUESTION 79) ==========
  {
    id: 'c_pre_79',
    topicId: 'c_preprocessor',
    question: 'Create macro to generate compile-time warning.',
    mathSolution: 'Warning with message',
    codeSolution: '#define WARN(msg) _Pragma(#msg)\n// usage: WARN("GCC diagnostic warning \\"-Wdeprecated\\"")',
    hint: 'Use _Pragma in macro'
  },

  // ========== MACRO FOR DEPRECATION (QUESTION 80) ==========
  {
    id: 'c_pre_80',
    topicId: 'c_preprocessor',
    question: 'Create macro to mark function deprecated.',
    mathSolution: 'Deprecation attribute',
    codeSolution: '#ifdef __GNUC__\n#define DEPRECATED __attribute__((deprecated))\n#elif defined(_MSC_VER)\n#define DEPRECATED __declspec(deprecated)\n#else\n#define DEPRECATED\n#endif\nDEPRECATED void old_func();',
    hint: 'Compiler-specific attributes'
  },

  // ========== MACRO FOR UNUSED PARAMETERS (QUESTION 81) ==========
  {
    id: 'c_pre_81',
    topicId: 'c_preprocessor',
    question: 'Create macro to suppress unused parameter warning.',
    mathSolution: 'Mark parameter as unused',
    codeSolution: '#ifdef __GNUC__\n#define UNUSED __attribute__((unused))\n#else\n#define UNUSED\n#endif\nvoid func(int UNUSED param) {}',
    hint: 'Compiler attribute to silence warning'
  },

  // ========== MACRO FOR LIKELY/UNLIKELY (QUESTION 82) ==========
  {
    id: 'c_pre_82',
    topicId: 'c_preprocessor',
    question: 'Create macros for branch prediction hints.',
    mathSolution: 'Hint to compiler about branch',
    codeSolution: '#ifdef __GNUC__\n#define likely(x)   __builtin_expect(!!(x), 1)\n#define unlikely(x) __builtin_expect(!!(x), 0)\n#else\n#define likely(x)   (x)\n#define unlikely(x) (x)\n#endif\nif(unlikely(error)) { handle_error(); }',
    hint: 'GCC __builtin_expect for optimization'
  },

  // ========== MACRO FOR ASSERT WITH MESSAGE (QUESTION 83) ==========
  {
    id: 'c_pre_83',
    topicId: 'c_preprocessor',
    question: 'Create assert macro that prints message.',
    mathSolution: 'Assert with custom message',
    codeSolution: '#define ASSERT(cond, msg) do { if(!(cond)) { fprintf(stderr, "Assertion failed: %s (%s:%d)\\n", msg, __FILE__, __LINE__); exit(1); } } while(0)',
    hint: 'Include file and line info'
  },

  // ========== MACRO FOR STATIC ASSERT (PRE-C11) (QUESTION 84) ==========
  {
    id: 'c_pre_84',
    topicId: 'c_preprocessor',
    question: 'Create static assertion macro for pre-C11 compilers.',
    mathSolution: 'Compile-time assertion',
    codeSolution: '#define STATIC_ASSERT(cond, msg) typedef char static_assert_##msg[(cond)?1:-1]',
    hint: 'Negative array size triggers error'
  },

  // ========== MACRO FOR ENUM TO STRING (QUESTION 85) ==========
  {
    id: 'c_pre_85',
    topicId: 'c_preprocessor',
    question: 'Create macro to convert enum to string.',
    mathSolution: 'Enum value to string',
    codeSolution: '#define ENUM_TO_STR(e) #e\nenum Color {RED,GREEN,BLUE};\nprintf("%s", ENUM_TO_STR(RED));',
    hint: 'Stringize operator converts to string'
  },

  // ========== MACRO FOR FOREACH SIMULATION (QUESTION 86) ==========
  {
    id: 'c_pre_86',
    topicId: 'c_preprocessor',
    question: 'Create macro to simulate foreach on array.',
    mathSolution: 'Iterate through array',
    codeSolution: '#define FOREACH(item, arr, size) for(int _i=0; _i<(size) && ((item)=arr[_i],1); _i++)\nint arr[]={1,2,3}; int x; FOREACH(x, arr, 3) { printf("%d",x); }',
    hint: 'Comma operator to assign and continue'
  },

  // ========== MACRO FOR ANONYMOUS STRUCT GENERATION (QUESTION 87) ==========
  {
    id: 'c_pre_87',
    topicId: 'c_preprocessor',
    question: 'Create macro to generate named struct with fields.',
    mathSolution: 'Struct definition macro',
    codeSolution: '#define DEFINE_POINT(name) struct name { int x; int y; }\nDEFINE_POINT(Point);',
    hint: 'Generate struct with given name'
  },

  // ========== MACRO FOR GETTER/SETTER GENERATION (QUESTION 88) ==========
  {
    id: 'c_pre_88',
    topicId: 'c_preprocessor',
    question: 'Create macro to generate getter and setter.',
    mathSolution: 'Property-like access',
    codeSolution: '#define PROPERTY(type, name) \\\n   type name##_value; \\\n   type get_##name() { return name##_value; } \\\n   void set_##name(type val) { name##_value = val; }',
    hint: 'Use token pasting for names'
  },

  // ========== MACRO FOR COLOR CODES (QUESTION 89) ==========
  {
    id: 'c_pre_89',
    topicId: 'c_preprocessor',
    question: 'Create macros for terminal color codes.',
    mathSolution: 'ANSI color escape sequences',
    codeSolution: '#define COLOR_RED   "\\x1b[31m"\n#define COLOR_GREEN "\\x1b[32m"\n#define COLOR_RESET "\\x1b[0m"\nprintf(COLOR_RED "Error" COLOR_RESET "\\n");',
    hint: 'Escape sequences for terminal colors'
  },

  // ========== MACRO FOR DEBUG LEVELS (QUESTION 90) ==========
  {
    id: 'c_pre_90',
    topicId: 'c_preprocessor',
    question: 'Create debug macros with levels using conditional compilation.',
    mathSolution: 'Conditional debug output',
    codeSolution: '#define DEBUG_LEVEL 2\n#define DBG(level, fmt, ...) do { if((level) <= DEBUG_LEVEL) fprintf(stderr, fmt "\\n", ##__VA_ARGS__); } while(0)\nDBG(1, "Error");\nDBG(3, "Debug info");',
    hint: 'Compare level with current debug level'
  },

  // ========== MACRO FOR COUNTING BITS (QUESTION 91) ==========
  {
    id: 'c_pre_91',
    topicId: 'c_preprocessor',
    question: 'Create macro to count number of bits set (for constants).',
    mathSolution: 'Count set bits at compile time',
    codeSolution: '#define BIT_COUNT(n) \\\n   ((n & 1) + ((n>>1) & 1) + ((n>>2) & 1) + ((n>>3) & 1) + \\\n    ((n>>4) & 1) + ((n>>5) & 1) + ((n>>6) & 1) + ((n>>7) & 1))',
    hint: 'Works for small constant values'
  },

  // ========== MACRO FOR BYTE SWAPPING (QUESTIONS 92-93) ==========
  {
    id: 'c_pre_92',
    topicId: 'c_preprocessor',
    question: 'Create macro for 16-bit byte swap.',
    mathSolution: 'Swap high and low bytes',
    codeSolution: '#define BSWAP16(x) ((((x) & 0xFF00) >> 8) | (((x) & 0x00FF) << 8))',
    hint: 'Shift and combine bytes'
  },
  {
    id: 'c_pre_93',
    topicId: 'c_preprocessor',
    question: 'Create macro for 32-bit byte swap.',
    mathSolution: 'Reverse byte order',
    codeSolution: '#define BSWAP32(x) \\\n   ((((x) & 0xFF000000) >> 24) | \\\n    (((x) & 0x00FF0000) >> 8)  | \\\n    (((x) & 0x0000FF00) << 8)  | \\\n    (((x) & 0x000000FF) << 24))',
    hint: 'Swap all four bytes'
  },

  // ========== MACRO FOR FILE-SCOPE INITIALIZATION (QUESTION 94) ==========
  {
    id: 'c_pre_94',
    topicId: 'c_preprocessor',
    question: 'Create macro for constructor attribute.',
    mathSolution: 'Function runs before main',
    codeSolution: '#ifdef __GNUC__\n#define CONSTRUCTOR __attribute__((constructor))\n#else\n#define CONSTRUCTOR\n#endif\nvoid CONSTRUCTOR init_func() { printf("Before main\\n"); }',
    hint: 'GCC constructor attribute'
  },

  // ========== MACRO FOR DESTRUCTOR (QUESTION 95) ==========
  {
    id: 'c_pre_95',
    topicId: 'c_preprocessor',
    question: 'Create macro for destructor attribute.',
    mathSolution: 'Function runs after main',
    codeSolution: '#ifdef __GNUC__\n#define DESTRUCTOR __attribute__((destructor))\n#else\n#define DESTRUCTOR\n#endif\nvoid DESTRUCTOR cleanup_func() { printf("After main\\n"); }',
    hint: 'GCC destructor attribute'
  },

  // ========== MACRO FOR WEAK SYMBOLS (QUESTION 96) ==========
  {
    id: 'c_pre_96',
    topicId: 'c_preprocessor',
    question: 'Create macro for weak symbol attribute.',
    mathSolution: 'Allow function to be overridden',
    codeSolution: '#ifdef __GNUC__\n#define WEAK __attribute__((weak))\n#else\n#define WEAK\n#endif\nWEAK void default_handler() { printf("Default\\n"); }',
    hint: 'Weak symbols can be replaced'
  },

  // ========== MACRO FOR PACKED STRUCTURES (QUESTION 97) ==========
  {
    id: 'c_pre_97',
    topicId: 'c_preprocessor',
    question: 'Create macro for packed structure attribute.',
    mathSolution: 'No padding in struct',
    codeSolution: '#ifdef __GNUC__\n#define PACKED __attribute__((packed))\n#else\n#define PACKED\n#endif\nstruct PACKED Data { char c; int i; };',
    hint: 'Prevents compiler from adding padding'
  },

  // ========== MACRO FOR ALIGNAS (QUESTION 98) ==========
  {
    id: 'c_pre_98',
    topicId: 'c_preprocessor',
    question: 'Create macro for alignment specification.',
    mathSolution: 'Align data to boundary',
    codeSolution: '#ifdef __GNUC__\n#define ALIGNED(n) __attribute__((aligned(n)))\n#elif defined(_MSC_VER)\n#define ALIGNED(n) __declspec(align(n))\n#else\n#define ALIGNED(n)\n#endif\nint ALIGNED(16) buffer[1024];',
    hint: 'Compiler-specific alignment'
  },

  // ========== MACRO FOR LIKELY/UNLIKELY WITH PROBABILITIES (QUESTION 99) ==========
  {
    id: 'c_pre_99',
    topicId: 'c_preprocessor',
    question: 'Create macros for branch prediction with probabilities.',
    mathSolution: 'Hint with probability',
    codeSolution: '#ifdef __GNUC__\n#define EXPECT(cond, prob) __builtin_expect_with_probability(!!(cond), 1, prob)\n#else\n#define EXPECT(cond, prob) (cond)\n#endif\nif(EXPECT(error, 0.01)) { /* unlikely */ }',
    hint: 'GCC 9+ has __builtin_expect_with_probability'
  },

  // ========== MACRO FOR COMPILE-TIME STRING CONCATENATION (QUESTION 100) ==========
  {
    id: 'c_pre_100',
    topicId: 'c_preprocessor',
    question: 'Create macro to concatenate strings at compile time.',
    mathSolution: 'Join string literals',
    codeSolution: '#define CONCAT_STR(a,b) a b\n#define PATH(part) "/usr/local/" part\nprintf("%s\\n", PATH("bin")); // prints "/usr/local/bin"',
    hint: 'Adjacent string literals concatenate'
  }
);