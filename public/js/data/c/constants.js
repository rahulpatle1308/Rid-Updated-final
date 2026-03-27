QuizData.questions.push(
  // ============ LEVEL 1: CONST KEYWORD BASICS (1-10) ============
  {
    id: 'c_constants_001',
    topicId: 'c_constants',
    question: 'Declare a constant integer variable named MAX_VALUE with value 100.',
    mathSolution: 'const integer declaration',
    codeSolution: 'const int MAX_VALUE = 100;',
    hint: 'Use const keyword before data type'
  },
  {
    id: 'c_constants_002',
    topicId: 'c_constants',
    question: 'Declare a constant float variable named PI with value 3.14159.',
    mathSolution: 'const float declaration',
    codeSolution: 'const float PI = 3.14159f;',
    hint: 'Add f suffix for float'
  },
  {
    id: 'c_constants_003',
    topicId: 'c_constants',
    question: 'Declare a constant double variable named GRAVITY with value 9.81.',
    mathSolution: 'const double declaration',
    codeSolution: 'const double GRAVITY = 9.81;',
    hint: 'Double is default for floating point'
  },
  {
    id: 'c_constants_004',
    topicId: 'c_constants',
    question: 'Declare a constant character variable named GRADE with value \'A\'.',
    mathSolution: 'const char declaration',
    codeSolution: 'const char GRADE = \'A\';',
    hint: 'Character constants use single quotes'
  },
  {
    id: 'c_constants_005',
    topicId: 'c_constants',
    question: 'Declare a constant string using const char* with value "Hello".',
    mathSolution: 'const string declaration',
    codeSolution: 'const char* MESSAGE = "Hello";',
    hint: 'String literals are const by convention'
  },
  {
    id: 'c_constants_006',
    topicId: 'c_constants',
    question: 'Declare a constant pointer to an integer that cannot point to another variable.',
    mathSolution: 'const pointer declaration',
    codeSolution: 'int* const ptr = &x;',
    hint: 'const after * means pointer is constant'
  },
  {
    id: 'c_constants_007',
    topicId: 'c_constants',
    question: 'Declare a pointer to a constant integer (cannot modify the value it points to).',
    mathSolution: 'pointer to const data',
    codeSolution: 'const int* ptr = &x;',
    hint: 'const before * means data is constant'
  },
  {
    id: 'c_constants_008',
    topicId: 'c_constants',
    question: 'Declare a constant pointer to a constant integer.',
    mathSolution: 'const pointer to const data',
    codeSolution: 'const int* const ptr = &x;',
    hint: 'Both pointer and data are constant'
  },
  {
    id: 'c_constants_009',
    topicId: 'c_constants',
    question: 'Declare a constant array of integers with values 1, 2, 3, 4, 5.',
    mathSolution: 'const array declaration',
    codeSolution: 'const int numbers[] = {1, 2, 3, 4, 5};',
    hint: 'Array elements cannot be modified'
  },
  {
    id: 'c_constants_010',
    topicId: 'c_constants',
    question: 'Write a function parameter that guarantees the array won\'t be modified.',
    mathSolution: 'const function parameter',
    codeSolution: 'void printArray(const int arr[], int size) {\n    // arr elements cannot be modified\n}',
    hint: 'Use const to protect read-only parameters'
  },

  // ============ LEVEL 2: #DEFINE CONSTANTS (11-20) ============
  {
    id: 'c_constants_011',
    topicId: 'c_constants',
    question: 'Define a macro named MAX_STUDENTS with value 100 using #define.',
    mathSolution: '#define integer constant',
    codeSolution: '#define MAX_STUDENTS 100',
    hint: 'No equals sign or semicolon'
  },
  {
    id: 'c_constants_012',
    topicId: 'c_constants',
    question: 'Define a macro named PI with value 3.14159 using #define.',
    mathSolution: '#define float constant',
    codeSolution: '#define PI 3.14159',
    hint: 'Preprocessor does simple text replacement'
  },
  {
    id: 'c_constants_013',
    topicId: 'c_constants',
    question: 'Define a macro named GRADE with value \'A\' using #define.',
    mathSolution: '#define character constant',
    codeSolution: '#define GRADE \'A\'',
    hint: 'Character constants use single quotes'
  },
  {
    id: 'c_constants_014',
    topicId: 'c_constants',
    question: 'Define a macro named GREETING with string value "Hello" using #define.',
    mathSolution: '#define string constant',
    codeSolution: '#define GREETING "Hello"',
    hint: 'String constants use double quotes'
  },
  {
    id: 'c_constants_015',
    topicId: 'c_constants',
    question: 'Create a macro SQUARE that squares a number.',
    mathSolution: '#define macro function',
    codeSolution: '#define SQUARE(x) ((x) * (x))',
    hint: 'Use parentheses to avoid precedence issues'
  },
  {
    id: 'c_constants_016',
    topicId: 'c_constants',
    question: 'Create a macro MAX that returns the maximum of two values.',
    mathSolution: '#define conditional macro',
    codeSolution: '#define MAX(a, b) ((a) > (b) ? (a) : (b))',
    hint: 'Use ternary operator for condition'
  },
  {
    id: 'c_constants_017',
    topicId: 'c_constants',
    question: 'Use #undef to undefine a previously defined macro TEMP.',
    mathSolution: '#undef directive',
    codeSolution: '#undef TEMP',
    hint: 'Removes macro definition'
  },
  {
    id: 'c_constants_018',
    topicId: 'c_constants',
    question: 'Create a multi-line macro using backslash that prints a message.',
    mathSolution: 'Multi-line #define',
    codeSolution: '#define PRINT_INFO \\\n    printf("Info line 1\\n"); \\\n    printf("Info line 2\\n")',
    hint: 'Use backslash at end of each line except last'
  },
  {
    id: 'c_constants_019',
    topicId: 'c_constants',
    question: 'Define an array size using #define for an array of 50 elements.',
    mathSolution: '#define for array size',
    codeSolution: '#define ARRAY_SIZE 50\nint numbers[ARRAY_SIZE];',
    hint: 'Makes code more maintainable'
  },
  {
    id: 'c_constants_020',
    topicId: 'c_constants',
    question: 'Create a macro IS_EVEN that checks if a number is even.',
    mathSolution: '#define conditional',
    codeSolution: '#define IS_EVEN(x) ((x) % 2 == 0)',
    hint: 'Use modulo operator'
  },

  // ============ LEVEL 3: ENUM CONSTANTS (21-30) ============
  {
    id: 'c_constants_021',
    topicId: 'c_constants',
    question: 'Declare an enum for weekdays (Monday to Sunday).',
    mathSolution: 'enum declaration',
    codeSolution: 'enum Weekday { MON, TUE, WED, THU, FRI, SAT, SUN };',
    hint: 'Values start at 0 by default'
  },
  {
    id: 'c_constants_022',
    topicId: 'c_constants',
    question: 'Declare an enum for colors with RED=1, GREEN=2, BLUE=4.',
    mathSolution: 'enum with custom values',
    codeSolution: 'enum Color { RED = 1, GREEN = 2, BLUE = 4 };',
    hint: 'Assign specific integer values'
  },
  {
    id: 'c_constants_023',
    topicId: 'c_constants',
    question: 'Declare an enum for boolean values FALSE=0 and TRUE=1.',
    mathSolution: 'enum for boolean',
    codeSolution: 'enum Boolean { FALSE, TRUE };',
    hint: 'FALSE is 0, TRUE is 1 automatically'
  },
  {
    id: 'c_constants_024',
    topicId: 'c_constants',
    question: 'Use enum in a switch statement for menu options.',
    mathSolution: 'enum with switch',
    codeSolution: 'enum Menu { EXIT, ADD, DELETE };\nswitch(choice) {\n    case ADD: addItem(); break;\n    case DELETE: deleteItem(); break;\n}',
    hint: 'Enum makes cases readable'
  },
  {
    id: 'c_constants_025',
    topicId: 'c_constants',
    question: 'Create enum with bit flags using powers of 2.',
    mathSolution: 'enum for bit flags',
    codeSolution: 'enum Permissions {\n    READ = 4,\n    WRITE = 2,\n    EXECUTE = 1\n};',
    hint: 'Use powers of 2 for bitwise operations'
  },
  {
    id: 'c_constants_026',
    topicId: 'c_constants',
    question: 'Use typedef with enum to create a type named Status.',
    mathSolution: 'typedef enum',
    codeSolution: 'typedef enum { SUCCESS, FAILURE } Status;',
    hint: 'Allows using Status without enum keyword'
  },
  {
    id: 'c_constants_027',
    topicId: 'c_constants',
    question: 'Create enum for error codes with SUCCESS=0, NOT_FOUND=-1, ERROR=-2.',
    mathSolution: 'enum for error codes',
    codeSolution: 'enum ErrorCode { SUCCESS = 0, NOT_FOUND = -1, ERROR = -2 };',
    hint: 'Error codes can be negative'
  },
  {
    id: 'c_constants_028',
    topicId: 'c_constants',
    question: 'Create enum for months where JAN=1 and others auto-increment.',
    mathSolution: 'enum with auto-increment',
    codeSolution: 'enum Month { JAN = 1, FEB, MAR, APR, MAY, JUN };',
    hint: 'FEB becomes 2, MAR becomes 3, etc.'
  },
  {
    id: 'c_constants_029',
    topicId: 'c_constants',
    question: 'Declare an enum variable named today with value WED.',
    mathSolution: 'enum variable declaration',
    codeSolution: 'enum Weekday today = WED;',
    hint: 'Use enum type and constant'
  },
  {
    id: 'c_constants_030',
    topicId: 'c_constants',
    question: 'Create enum for state machine states: IDLE, RUNNING, STOPPED.',
    mathSolution: 'enum for state machine',
    codeSolution: 'enum State { STATE_IDLE, STATE_RUNNING, STATE_STOPPED };',
    hint: 'Use prefix to avoid name conflicts'
  },

  // ============ LEVEL 4: INTEGER CONSTANTS (31-35) ============
  {
    id: 'c_constants_031',
    topicId: 'c_constants',
    question: 'Write decimal, octal, and hexadecimal representations of number 42.',
    mathSolution: 'Different integer bases',
    codeSolution: 'int dec = 42;\nint oct = 052;\nint hex = 0x2A;',
    hint: 'Octal starts with 0, hex with 0x'
  },
  {
    id: 'c_constants_032',
    topicId: 'c_constants',
    question: 'Write integer constants with U, L, and LL suffixes for value 100.',
    mathSolution: 'Integer suffixes',
    codeSolution: 'unsigned int u = 100U;\nlong int l = 100L;\nlong long ll = 100LL;',
    hint: 'U=unsigned, L=long, LL=long long'
  },
  {
    id: 'c_constants_033',
    topicId: 'c_constants',
    question: 'Write the maximum value for a 32-bit signed integer as a constant.',
    mathSolution: 'INT_MAX constant',
    codeSolution: 'int max = 2147483647;',
    hint: '2^31 - 1 = 2147483647'
  },
  {
    id: 'c_constants_034',
    topicId: 'c_constants',
    question: 'Write character constants for \'A\', newline, and tab.',
    mathSolution: 'Character constants',
    codeSolution: 'char a = \'A\';\nchar nl = \'\\n\';\nchar tab = \'\\t\';',
    hint: 'Escape sequences start with \\'
  },
  {
    id: 'c_constants_035',
    topicId: 'c_constants',
    question: 'Write wide character constant for Unicode Euro symbol using L prefix.',
    mathSolution: 'Wide character constant',
    codeSolution: 'wchar_t euro = L\'\\u20AC\';',
    hint: 'L prefix for wide characters'
  },

  // ============ LEVEL 5: FLOATING POINT CONSTANTS (36-40) ============
  {
    id: 'c_constants_036',
    topicId: 'c_constants',
    question: 'Write floating point constants 3.14 as float, double, and with exponent.',
    mathSolution: 'Float constant forms',
    codeSolution: 'float f = 3.14f;\ndouble d = 3.14;\ndouble exp = 3.14e0;',
    hint: 'f suffix for float, e for exponent'
  },
  {
    id: 'c_constants_037',
    topicId: 'c_constants',
    question: 'Write scientific notation for 12300 and 0.000123.',
    mathSolution: 'Scientific notation',
    codeSolution: 'double big = 1.23e4;\ndouble small = 1.23e-4;',
    hint: 'e4 = ×10^4, e-4 = ×10^-4'
  },
  {
    id: 'c_constants_038',
    topicId: 'c_constants',
    question: 'Write float, double, and long double constants for PI.',
    mathSolution: 'Float suffixes',
    codeSolution: 'float pi_f = 3.14159f;\ndouble pi_d = 3.14159;\nlong double pi_ld = 3.14159L;',
    hint: 'f for float, L for long double'
  },
  {
    id: 'c_constants_039',
    topicId: 'c_constants',
    question: 'Write hexadecimal floating point constant for 9.0 using 0x prefix.',
    mathSolution: 'Hex float constants',
    codeSolution: 'double hex = 0x1.2p3;  // 1.2 (hex) × 2^3 = 9.0',
    hint: 'Format: 0x[hex].p[exponent]'
  },
  {
    id: 'c_constants_040',
    topicId: 'c_constants',
    question: 'Use INFINITY and NAN constants from math.h.',
    mathSolution: 'Infinity and NaN',
    codeSolution: '#include <math.h>\ndouble inf = INFINITY;\ndouble nan = NAN;',
    hint: 'Defined in math.h'
  },

  // ============ LEVEL 6: STRING CONSTANTS (41-45) ============
  {
    id: 'c_constants_041',
    topicId: 'c_constants',
    question: 'Create string constants for "Hello" using char array and char pointer.',
    mathSolution: 'String constants',
    codeSolution: 'char str1[] = "Hello";\nchar *str2 = "Hello";',
    hint: 'Array is modifiable, pointer points to constant'
  },
  {
    id: 'c_constants_042',
    topicId: 'c_constants',
    question: 'Create wide string constant for "Hello" using L prefix.',
    mathSolution: 'Wide string constant',
    codeSolution: 'wchar_t *wstr = L"Hello";',
    hint: 'L prefix for wide strings'
  },
  {
    id: 'c_constants_043',
    topicId: 'c_constants',
    question: 'Use string constant concatenation to create "Hello World".',
    mathSolution: 'String concatenation',
    codeSolution: 'char *msg = "Hello " "World";',
    hint: 'Adjacent strings are concatenated'
  },
  {
    id: 'c_constants_044',
    topicId: 'c_constants',
    question: 'Create string with escape sequences for newline, tab, and quote.',
    mathSolution: 'Escape sequences',
    codeSolution: 'char *str = "Line1\\nLine2\\tQuote: \\"Hello\\"";',
    hint: '\\n newline, \\t tab, \\" quote'
  },
  {
    id: 'c_constants_045',
    topicId: 'c_constants',
    question: 'Compare character constant \'A\' and string constant "A".',
    mathSolution: 'Char vs string',
    codeSolution: 'char c = \'A\';      // single character\nchar *s = "A";      // two characters: \'A\' and \'\\0\'',
    hint: 'String has null terminator'
  },

  // ============ LEVEL 7: COMPARISONS & BEST PRACTICES (46-50) ============
  {
    id: 'c_constants_046',
    topicId: 'c_constants',
    question: 'Compare #define and const by creating a constant for array size.',
    mathSolution: '#define vs const',
    codeSolution: '#define SIZE 10  // preprocessor\nconst int size = 10;  // constant variable\nint arr1[SIZE];       // OK\nint arr2[size];       // VLA in C (not constant expression)',
    hint: '#define works for array size, const may not'
  },
  {
    id: 'c_constants_047',
    topicId: 'c_constants',
    question: 'Replace magic number 3.14159 with a named constant.',
    mathSolution: 'Named constant vs magic number',
    codeSolution: '#define PI 3.14159\n// or\nconst double PI = 3.14159;\ndouble area = PI * r * r;',
    hint: 'Named constants improve readability'
  },
  {
    id: 'c_constants_048',
    topicId: 'c_constants',
    question: 'Use const in function parameter to prevent modification.',
    mathSolution: 'Const correctness',
    codeSolution: 'void process(const int *ptr) {\n    // *ptr = 10;  // Error!\n}',
    hint: 'Const protects read-only parameters'
  },
  {
    id: 'c_constants_049',
    topicId: 'c_constants',
    question: 'Create a constant expression for array size using sizeof.',
    mathSolution: 'Constant expression',
    codeSolution: 'int arr[100];\nint size = sizeof(arr) / sizeof(arr[0]);',
    hint: 'sizeof is compile-time constant'
  },
  {
    id: 'c_constants_050',
    topicId: 'c_constants',
    question: 'Use const for global configuration values.',
    mathSolution: 'Global constants',
    codeSolution: 'const int MAX_USERS = 1000;\nconst char* APP_NAME = "MyApp";',
    hint: 'Global constants are safer than macros for type checking'
  },

  // ============ LEVEL 8: ADVANCED CONST POINTERS (51-55) ============
  {
    id: 'c_constants_051',
    topicId: 'c_constants',
    question: 'Create multiple levels of const pointers to const data.',
    mathSolution: 'Multiple const levels',
    codeSolution: 'int x = 10;\nconst int *const ptr = &x;  // const pointer to const data',
    hint: 'Read from right to left: const pointer to const int'
  },
  {
    id: 'c_constants_052',
    topicId: 'c_constants',
    question: 'Use typedef to create a const integer type alias.',
    mathSolution: 'typedef with const',
    codeSolution: 'typedef const int ConstInt;\nConstInt MAX = 100;',
    hint: 'typedef can include const'
  },
  {
    id: 'c_constants_053',
    topicId: 'c_constants',
    question: 'Create a struct with a const member.',
    mathSolution: 'const struct member',
    codeSolution: 'struct Person {\n    const int id;\n    char name[50];\n};\nstruct Person p = {101, "Alice"};',
    hint: 'Const members must be initialized'
  },
  {
    id: 'c_constants_054',
    topicId: 'c_constants',
    question: 'Create a union with a const member.',
    mathSolution: 'const union member',
    codeSolution: 'union Data {\n    const int i;\n    float f;\n};\nunion Data d = {.i = 42};',
    hint: 'Only one member can be active'
  },
  {
    id: 'c_constants_055',
    topicId: 'c_constants',
    question: 'Create a const function pointer.',
    mathSolution: 'const function pointer',
    codeSolution: 'int (*const funcPtr)(int, int) = &add;  // const pointer to function',
    hint: 'Function pointer cannot point to another function'
  },

  // ============ LEVEL 9: ADVANCED #DEFINE (56-65) ============
  {
    id: 'c_constants_056',
    topicId: 'c_constants',
    question: 'Create a variadic macro for debug printing.',
    mathSolution: 'Variadic macro',
    codeSolution: '#define DEBUG_PRINT(fmt, ...) \\\n    printf("DEBUG: " fmt "\\n", __VA_ARGS__)',
    hint: '__VA_ARGS__ represents variable arguments'
  },
  {
    id: 'c_constants_057',
    topicId: 'c_constants',
    question: 'Create a multi-statement macro using do-while.',
    mathSolution: 'do-while in macros',
    codeSolution: '#define SWAP(a, b, type) do { \\\n    type temp = a; \\\n    a = b; \\\n    b = temp; \\\n} while(0)',
    hint: 'do-while ensures proper semicolon handling'
  },
  {
    id: 'c_constants_058',
    topicId: 'c_constants',
    question: 'Use ## token pasting to create variable names.',
    mathSolution: 'Token pasting',
    codeSolution: '#define MAKE_VAR(name) var_##name\nint MAKE_VAR(counter) = 0;  // creates var_counter',
    hint: '## concatenates tokens'
  },
  {
    id: 'c_constants_059',
    topicId: 'c_constants',
    question: 'Use # stringification to convert parameter to string.',
    mathSolution: 'Stringification',
    codeSolution: '#define STRINGIFY(x) #x\nprintf("%s\\n", STRINGIFY(hello));  // prints "hello"',
    hint: '# converts to string literal'
  },
  {
    id: 'c_constants_060',
    topicId: 'c_constants',
    question: 'Create an assertion macro that prints the condition.',
    mathSolution: 'Assertion macro',
    codeSolution: '#define ASSERT(cond) \\\n    if(!(cond)) \\\n        fprintf(stderr, "Assertion failed: %s\\n", #cond)',
    hint: '#cond stringifies the condition'
  },
  {
    id: 'c_constants_061',
    topicId: 'c_constants',
    question: 'Create a type-safe max macro using statement expressions.',
    mathSolution: 'Type-safe macro',
    codeSolution: '#define MAX(a, b) ({ \\\n    __typeof__(a) _a = (a); \\\n    __typeof__(b) _b = (b); \\\n    _a > _b ? _a : _b; \\\n})',
    hint: 'GCC statement expression avoids double evaluation'
  },
  {
    id: 'c_constants_062',
    topicId: 'c_constants',
    question: 'Use X-macros to generate enum and string array from list.',
    mathSolution: 'X-macros',
    codeSolution: '#define COLORS \\\n    X(RED) \\\n    X(GREEN) \\\n    X(BLUE)\n\n#define X(name) name,\nenum Color { COLORS };\n#undef X\n\n#define X(name) #name,\nconst char* color_names[] = { COLORS };\n#undef X',
    hint: 'X-macro generates repetitive code'
  },
  {
    id: 'c_constants_063',
    topicId: 'c_constants',
    question: 'Use predefined macros __FILE__, __LINE__, __func__.',
    mathSolution: 'Predefined macros',
    codeSolution: 'printf("Error at %s:%d in %s\\n", __FILE__, __LINE__, __func__);',
    hint: 'Useful for debugging'
  },
  {
    id: 'c_constants_064',
    topicId: 'c_constants',
    question: 'Use conditional compilation to detect platform.',
    mathSolution: 'Platform detection',
    codeSolution: '#ifdef _WIN32\n    #define CLEAR "cls"\n#else\n    #define CLEAR "clear"\n#endif',
    hint: 'Predefined macros vary by platform'
  },
  {
    id: 'c_constants_065',
    topicId: 'c_constants',
    question: 'Create logging macros with different levels.',
    mathSolution: 'Logging macros',
    codeSolution: '#define LOG_ERROR(fmt, ...) \\\n    fprintf(stderr, "ERROR: " fmt "\\n", __VA_ARGS__)\n#define LOG_INFO(fmt, ...) \\\n    printf("INFO: " fmt "\\n", __VA_ARGS__)',
    hint: 'Different macros for different levels'
  },

  // ============ LEVEL 10: ADVANCED ENUM (66-75) ============
  {
    id: 'c_constants_066',
    topicId: 'c_constants',
    question: 'Create enum for bit flags with powers of 2 and combine them.',
    mathSolution: 'Enum bit flags',
    codeSolution: 'enum Permissions {\n    READ = 1 << 0,\n    WRITE = 1 << 1,\n    EXEC = 1 << 2\n};\nint perm = READ | WRITE;',
    hint: 'Use bitwise OR to combine'
  },
  {
    id: 'c_constants_067',
    topicId: 'c_constants',
    question: 'Use enum for command-line option parsing.',
    mathSolution: 'Enum for options',
    codeSolution: 'enum Option { OPT_HELP, OPT_VERSION, OPT_OUTPUT };\nswitch(opt) {\n    case OPT_HELP: showHelp(); break;\n    case OPT_VERSION: showVersion(); break;\n}',
    hint: 'More readable than magic numbers'
  },
  {
    id: 'c_constants_068',
    topicId: 'c_constants',
    question: 'Create enum for network protocol message types.',
    mathSolution: 'Protocol message types',
    codeSolution: 'enum MsgType {\n    MSG_HEARTBEAT = 0x01,\n    MSG_DATA = 0x02,\n    MSG_ERROR = 0x03\n};',
    hint: 'Hex values common in protocols'
  },
  {
    id: 'c_constants_069',
    topicId: 'c_constants',
    question: 'Create enum for HTTP status codes.',
    mathSolution: 'HTTP status codes',
    codeSolution: 'enum HttpStatus {\n    HTTP_OK = 200,\n    HTTP_NOT_FOUND = 404,\n    HTTP_ERROR = 500\n};',
    hint: 'Use standard HTTP codes'
  },
  {
    id: 'c_constants_070',
    topicId: 'c_constants',
    question: 'Use enum for months with days calculation.',
    mathSolution: 'Enum with values',
    codeSolution: 'enum Month { JAN=31, FEB=28, MAR=31, APR=30, MAY=31, JUN=30 };',
    hint: 'Values represent days in month'
  },
  {
    id: 'c_constants_071',
    topicId: 'c_constants',
    question: 'Create enum for weekdays and calculate business days.',
    mathSolution: 'Enum operations',
    codeSolution: 'enum Day { MON, TUE, WED, THU, FRI, SAT, SUN };\nint isWeekend(enum Day d) {\n    return d == SAT || d == SUN;\n}',
    hint: 'Enums can be used in functions'
  },
  {
    id: 'c_constants_072',
    topicId: 'c_constants',
    question: 'Create enum for chess pieces with values.',
    mathSolution: 'Game piece enum',
    codeSolution: 'enum Piece { EMPTY, PAWN, KNIGHT, BISHOP, ROOK, QUEEN, KING };\nenum Piece board[8][8];',
    hint: 'Enums perfect for game state'
  },
  {
    id: 'c_constants_073',
    topicId: 'c_constants',
    question: 'Create enum for mathematical constants with values.',
    mathSolution: 'Math constants enum',
    codeSolution: 'enum MathConst { E = 1, PI, PHI };\ndouble values[] = {2.71828, 3.14159, 1.61803};',
    hint: 'Enum indices can access arrays'
  },
  {
    id: 'c_constants_074',
    topicId: 'c_constants',
    question: 'Create enum for directions with angle values.',
    mathSolution: 'Direction enum',
    codeSolution: 'enum Direction { NORTH = 0, EAST = 90, SOUTH = 180, WEST = 270 };',
    hint: 'Values can represent degrees'
  },
  {
    id: 'c_constants_075',
    topicId: 'c_constants',
    question: 'Create enum for JSON data types.',
    mathSolution: 'JSON types enum',
    codeSolution: 'enum JsonType {\n    JSON_NULL,\n    JSON_BOOLEAN,\n    JSON_NUMBER,\n    JSON_STRING,\n    JSON_ARRAY,\n    JSON_OBJECT\n};',
    hint: 'Use with tagged unions'
  },

  // ============ LEVEL 11: ADVANCED INTEGER/FLOAT CONSTANTS (76-85) ============
  {
    id: 'c_constants_076',
    topicId: 'c_constants',
    question: 'Use binary constant for bit mask 0b1010 (GCC extension).',
    mathSolution: 'Binary constants',
    codeSolution: 'int mask = 0b1010;  // binary 1010 = decimal 10',
    hint: '0b prefix for binary (GCC/Clang)'
  },
  {
    id: 'c_constants_077',
    topicId: 'c_constants',
    question: 'Use digit separators for large number 1,000,000.',
    mathSolution: 'Digit separators',
    codeSolution: 'int million = 1\'000\'000;  // C23/GCC extension',
    hint: 'Single quote as digit separator'
  },
  {
    id: 'c_constants_078',
    topicId: 'c_constants',
    question: 'Create complex number constant 3.0 + 4.0i.',
    mathSolution: 'Complex constants',
    codeSolution: '#include <complex.h>\ndouble complex z = 3.0 + 4.0 * I;',
    hint: 'I represents imaginary unit'
  },
  {
    id: 'c_constants_079',
    topicId: 'c_constants',
    question: 'Classify floating point constants using fpclassify.',
    mathSolution: 'Float classification',
    codeSolution: 'double x = 1.0/0.0;\nif(isinf(x)) printf("Infinite\\n");',
    hint: 'Use macros from math.h'
  },
  {
    id: 'c_constants_080',
    topicId: 'c_constants',
    question: 'Set rounding mode for floating point constants.',
    mathSolution: 'Rounding modes',
    codeSolution: '#include <fenv.h>\nfesetround(FE_UPWARD);',
    hint: 'Affects floating point operations'
  },
  {
    id: 'c_constants_081',
    topicId: 'c_constants',
    question: 'Create multi-character constant \'ABCD\' (FourCC code).',
    mathSolution: 'Multi-character constants',
    codeSolution: 'int fourcc = \'ABCD\';  // Implementation-defined',
    hint: 'Common in file formats'
  },
  {
    id: 'c_constants_082',
    topicId: 'c_constants',
    question: 'Use constant expression for array size with enum.',
    mathSolution: 'Constant expression',
    codeSolution: 'enum { SIZE = 100 };\nint arr[SIZE];  // OK, enum is constant expression',
    hint: 'Enum values are compile-time constants'
  },
  {
    id: 'c_constants_083',
    topicId: 'c_constants',
    question: 'Use compound literal as constant structure.',
    mathSolution: 'Compound literal',
    codeSolution: 'struct Point {int x; int y;};\nconst struct Point *p = &(const struct Point){10, 20};',
    hint: 'Creates unnamed constant object'
  },
  {
    id: 'c_constants_084',
    topicId: 'c_constants',
    question: 'Get address of constant global variable.',
    mathSolution: 'Address constants',
    codeSolution: 'const int GLOBAL = 42;\nconst int *ptr = &GLOBAL;  // Address is constant',
    hint: 'Global variables have fixed addresses'
  },
  {
    id: 'c_constants_085',
    topicId: 'c_constants',
    question: 'Initialize static variable with constant expression.',
    mathSolution: 'Static initialization',
    codeSolution: '#define FACTOR 2\nstatic int value = FACTOR * 10;  // Constant expression',
    hint: 'Static must be initialized with constant'
  },

  // ============ LEVEL 12: REAL-WORLD APPLICATIONS (86-100) ============
  {
    id: 'c_constants_086',
    topicId: 'c_constants',
    question: 'Create configuration constants for an application.',
    mathSolution: 'App configuration',
    codeSolution: '#define APP_NAME "MyApp"\n#define APP_VERSION "1.0.0"\n#define MAX_USERS 1000\n#define TIMEOUT_MS 5000',
    hint: 'Centralized configuration'
  },
  {
    id: 'c_constants_087',
    topicId: 'c_constants',
    question: 'Create constants for physical units and conversions.',
    mathSolution: 'Unit conversions',
    codeSolution: '#define INCH_TO_CM 2.54\n#define LB_TO_KG 0.453592\n#define MI_TO_KM 1.60934',
    hint: 'Make conversions explicit'
  },
  {
    id: 'c_constants_088',
    topicId: 'c_constants',
    question: 'Create constants for mathematical formulas.',
    mathSolution: 'Math formulas',
    codeSolution: '#define PI 3.14159\n#define CIRCLE_AREA(r) (PI * (r) * (r))\n#define CIRCLE_CIRCUMFERENCE(r) (2 * PI * (r))',
    hint: 'Formulas as macros'
  },
  {
    id: 'c_constants_089',
    topicId: 'c_constants',
    question: 'Create constants for RGB colors.',
    mathSolution: 'Color constants',
    codeSolution: '#define RGB(r,g,b) ((r)<<16 | (g)<<8 | (b))\n#define COLOR_RED RGB(255,0,0)\n#define COLOR_GREEN RGB(0,255,0)',
    hint: 'Pack RGB into 24-bit integer'
  },
  {
    id: 'c_constants_090',
    topicId: 'c_constants',
    question: 'Create magic numbers for file format signatures.',
    mathSolution: 'File signatures',
    codeSolution: '#define MAGIC_PNG 0x89504E47\n#define MAGIC_JPEG 0xFFD8FFE0\n#define MAGIC_ZIP 0x504B0304',
    hint: 'First bytes identify file type'
  },
  {
    id: 'c_constants_091',
    topicId: 'c_constants',
    question: 'Create constants for network port numbers.',
    mathSolution: 'Network ports',
    codeSolution: '#define PORT_HTTP 80\n#define PORT_HTTPS 443\n#define PORT_SSH 22\n#define PORT_DNS 53',
    hint: 'Standard port numbers'
  },
  {
    id: 'c_constants_092',
    topicId: 'c_constants',
    question: 'Create constants for database error codes.',
    mathSolution: 'Error codes',
    codeSolution: '#define DB_SUCCESS 0\n#define DB_ERROR_CONNECTION 1001\n#define DB_ERROR_TIMEOUT 1002\n#define DB_ERROR_DUPLICATE 1003',
    hint: 'Named error codes'
  },
  {
    id: 'c_constants_093',
    topicId: 'c_constants',
    question: 'Create constants for UI layout dimensions.',
    mathSolution: 'UI constants',
    codeSolution: '#define MARGIN_SMALL 4\n#define MARGIN_MEDIUM 8\n#define MARGIN_LARGE 16\n#define BUTTON_HEIGHT 32',
    hint: 'Consistent spacing'
  },
  {
    id: 'c_constants_094',
    topicId: 'c_constants',
    question: 'Create constants for logging levels.',
    mathSolution: 'Log levels',
    codeSolution: '#define LOG_ERROR 1\n#define LOG_WARNING 2\n#define LOG_INFO 3\n#define LOG_DEBUG 4',
    hint: 'Higher number = more verbose'
  },
  {
    id: 'c_constants_095',
    topicId: 'c_constants',
    question: 'Create constants for state machine states.',
    mathSolution: 'State machine',
    codeSolution: '#define STATE_IDLE 0\n#define STATE_RUNNING 1\n#define STATE_PAUSED 2\n#define STATE_STOPPED 3',
    hint: 'Define all possible states'
  },
  {
    id: 'c_constants_096',
    topicId: 'c_constants',
    question: 'Create constants for hardware register bits.',
    mathSolution: 'Hardware registers',
    codeSolution: '#define REG_ENABLE (1<<0)\n#define REG_RESET (1<<1)\n#define REG_INTERRUPT (1<<2)',
    hint: 'Bit masks for hardware control'
  },
  {
    id: 'c_constants_097',
    topicId: 'c_constants',
    question: 'Create constants for compression levels.',
    mathSolution: 'Compression levels',
    codeSolution: '#define COMPRESS_NONE 0\n#define COMPRESS_FAST 1\n#define COMPRESS_NORMAL 5\n#define COMPRESS_MAX 9',
    hint: 'Different speed/size tradeoffs'
  },
  {
    id: 'c_constants_098',
    topicId: 'c_constants',
    question: 'Create constants for localization (language codes).',
    mathSolution: 'Language codes',
    codeSolution: '#define LANG_EN 0\n#define LANG_ES 1\n#define LANG_FR 2\n#define LANG_DE 3\n#define LANG_ZH 4',
    hint: 'For internationalization'
  },
  {
    id: 'c_constants_099',
    topicId: 'c_constants',
    question: 'Create constants for cryptographic algorithms.',
    mathSolution: 'Crypto algorithms',
    codeSolution: '#define HASH_SHA256 1\n#define HASH_SHA512 2\n#define CIPHER_AES_256 10\n#define CIPHER_CHACHA20 11',
    hint: 'Algorithm identifiers'
  },
  {
    id: 'c_constants_100',
    topicId: 'c_constants',
    question: 'Create comprehensive configuration using all constant types.',
    mathSolution: 'Complete config',
    codeSolution: '// #define constants\n#define APP_NAME "DataProcessor"\n#define MAX_BUFFER 8192\n\n// enum constants\nenum LogLevel { LOG_ERROR, LOG_WARNING, LOG_INFO };\nenum State { STATE_IDLE, STATE_RUNNING };\n\n// const variables\nconst double PI = 3.14159;\nconst int MAX_RETRIES = 3;\n\n// Bit flags\n#define PERM_READ (1<<0)\n#define PERM_WRITE (1<<1)',
    hint: 'Use appropriate constant type for each purpose'
  }
);