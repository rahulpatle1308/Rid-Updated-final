QuizData.questions.push(
  // ============ LEVEL 1: BASIC TYPEDEF - SIMPLE TYPE ALIASES (1-5) ============
  {
    id: 'c_typedef_01',
    topicId: 'c_typedef',
    question: 'Create typedef for int as INTEGER',
    mathSolution: 'INTEGER becomes alias for int',
    codeSolution: 'typedef int INTEGER;',
    hint: 'Now INTEGER can be used like int'
  },
  {
    id: 'c_typedef_02',
    topicId: 'c_typedef',
    question: 'Use typedef to create BYTE type (unsigned char)',
    mathSolution: 'BYTE represents 8-bit unsigned value',
    codeSolution: 'typedef unsigned char BYTE;',
    hint: 'Common in systems programming'
  },
  {
    id: 'c_typedef_03',
    topicId: 'c_typedef',
    question: 'Create typedef for float as REAL',
    mathSolution: 'REAL becomes floating-point type',
    codeSolution: 'typedef float REAL;',
    hint: 'Useful for precision changes later'
  },
  {
    id: 'c_typedef_04',
    topicId: 'c_typedef',
    question: 'Declare variables using typedef type',
    mathSolution: 'Use alias like original type',
    codeSolution: 'INTEGER count = 10; BYTE data = 0xFF;',
    hint: 'Syntax same as primitive types'
  },
  {
    id: 'c_typedef_05',
    topicId: 'c_typedef',
    question: 'Create typedef for 64-bit integer',
    mathSolution: 'Platform-independent 64-bit type',
    codeSolution: 'typedef long long int64;',
    hint: 'Ensures 64 bits across platforms'
  },

  // ============ LEVEL 2: TYPEDEF WITH POINTERS (6-10) ============
  {
    id: 'c_typedef_06',
    topicId: 'c_typedef',
    question: 'Create typedef for integer pointer',
    mathSolution: 'PINT is alias for int*',
    codeSolution: 'typedef int* PINT;',
    hint: 'Pointer type alias'
  },
  {
    id: 'c_typedef_07',
    topicId: 'c_typedef',
    question: 'Declare multiple pointers using typedef',
    mathSolution: 'Avoids * confusion with multiple declarations',
    codeSolution: 'PINT p1, p2; // Both are pointers',
    hint: 'Without typedef, int* p1, p2 makes p2 int'
  },
  {
    id: 'c_typedef_08',
    topicId: 'c_typedef',
    question: 'Create typedef for constant pointer',
    mathSolution: 'Pointer that cannot be changed',
    codeSolution: 'typedef int* const PINT_CONST;',
    hint: 'const after *'
  },
  {
    id: 'c_typedef_09',
    topicId: 'c_typedef',
    question: 'Create typedef for pointer to constant',
    mathSolution: 'Cannot modify pointed value',
    codeSolution: 'typedef const int* PCINT;',
    hint: 'const before *'
  },
  {
    id: 'c_typedef_10',
    topicId: 'c_typedef',
    question: 'Typedef for void pointer (generic pointer)',
    mathSolution: 'Can point to any type',
    codeSolution: 'typedef void* PVOID;',
    hint: 'Common in Windows API'
  },

  // ============ LEVEL 3: TYPEDEF WITH ARRAYS (11-15) ============
  {
    id: 'c_typedef_11',
    topicId: 'c_typedef',
    question: 'Create typedef for array of 10 ints',
    mathSolution: 'ARRAY10 becomes type int[10]',
    codeSolution: 'typedef int ARRAY10[10];',
    hint: 'Now declare arrays easily'
  },
  {
    id: 'c_typedef_12',
    topicId: 'c_typedef',
    question: 'Declare array using typedef',
    mathSolution: 'Use alias like normal type',
    codeSolution: 'ARRAY10 arr; // arr is int[10]',
    hint: 'arr can hold 10 ints'
  },
  {
    id: 'c_typedef_13',
    topicId: 'c_typedef',
    question: 'Create typedef for 2D array',
    mathSolution: 'Matrix type alias',
    codeSolution: 'typedef int MATRIX[5][5];',
    hint: 'Useful for mathematical operations'
  },
  {
    id: 'c_typedef_14',
    topicId: 'c_typedef',
    question: 'Typedef for string (character array)',
    mathSolution: 'String type of fixed size',
    codeSolution: 'typedef char STRING[50];',
    hint: 'STRING becomes fixed-size string'
  },
  {
    id: 'c_typedef_15',
    topicId: 'c_typedef',
    question: 'Create typedef for pointer to array',
    mathSolution: 'Pointer to array of 10 ints',
    codeSolution: 'typedef int (*PARRAY)[10];',
    hint: 'Complex type simplification'
  },

  // ============ LEVEL 4: TYPEDEF WITH STRUCTURES (16-20) ============
  {
    id: 'c_typedef_16',
    topicId: 'c_typedef',
    question: 'Create typedef for structure',
    mathSolution: 'Alias for struct Student',
    codeSolution: 'typedef struct Student { char name[50]; int age; } Student;',
    hint: 'Now use Student without struct keyword'
  },
  {
    id: 'c_typedef_17',
    topicId: 'c_typedef',
    question: 'Declare structure variable using typedef',
    mathSolution: 'Use alias directly',
    codeSolution: 'Student s1; // Instead of struct Student s1',
    hint: 'Cleaner syntax'
  },
  {
    id: 'c_typedef_18',
    topicId: 'c_typedef',
    question: 'Anonymous structure with typedef',
    mathSolution: 'Structure without tag name',
    codeSolution: 'typedef struct { char name[50]; int age; } Student;',
    hint: 'Tag name optional with typedef'
  },
  {
    id: 'c_typedef_19',
    topicId: 'c_typedef',
    question: 'Create typedef for pointer to structure',
    mathSolution: 'PStudent is struct Student*',
    codeSolution: 'typedef struct Student* PStudent;',
    hint: 'Useful for linked lists'
  },
  {
    id: 'c_typedef_20',
    topicId: 'c_typedef',
    question: 'Self-referential structure with typedef',
    mathSolution: 'Need struct keyword for self-reference',
    codeSolution: 'typedef struct Node { int data; struct Node* next; } Node;',
    hint: 'Can\'t use Node before definition'
  },

  // ============ LEVEL 5: TYPEDEF WITH UNIONS (21-25) ============
  {
    id: 'c_typedef_21',
    topicId: 'c_typedef',
    question: 'Create typedef for union',
    mathSolution: 'Alias for union Data',
    codeSolution: 'typedef union Data { int i; float f; } Data;',
    hint: 'Now use Data without union keyword'
  },
  {
    id: 'c_typedef_22',
    topicId: 'c_typedef',
    question: 'Anonymous union with typedef',
    mathSolution: 'Union without tag name',
    codeSolution: 'typedef union { int i; float f; } Value;',
    hint: 'Common for variant types'
  },
  {
    id: 'c_typedef_23',
    topicId: 'c_typedef',
    question: 'Typedef for pointer to union',
    mathSolution: 'PValue is union Value*',
    codeSolution: 'typedef union Value* PValue;',
    hint: 'Pointer to union type'
  },
  {
    id: 'c_typedef_24',
    topicId: 'c_typedef',
    question: 'Union inside structure with typedef',
    mathSolution: 'Typedef for complex nested type',
    codeSolution: 'typedef struct { int type; union { int i; float f; } data; } Variant;',
    hint: 'Tagged union pattern'
  },
  {
    id: 'c_typedef_25',
    topicId: 'c_typedef',
    question: 'Array of unions with typedef',
    mathSolution: 'Typedef for union array',
    codeSolution: 'typedef union Value ValueArray[10];',
    hint: 'Now declare arrays easily'
  },

  // ============ LEVEL 6: TYPEDEF WITH ENUMS (26-30) ============
  {
    id: 'c_typedef_26',
    topicId: 'c_typedef',
    question: 'Create typedef for enum',
    mathSolution: 'Alias for enum Color',
    codeSolution: 'typedef enum Color { RED, GREEN, BLUE } Color;',
    hint: 'Now use Color as type'
  },
  {
    id: 'c_typedef_27',
    topicId: 'c_typedef',
    question: 'Anonymous enum with typedef',
    mathSolution: 'Enum without tag name',
    codeSolution: 'typedef enum { MON, TUE, WED } Weekday;',
    hint: 'Weekday becomes enum type'
  },
  {
    id: 'c_typedef_28',
    topicId: 'c_typedef',
    question: 'Typedef for enum with specific values',
    mathSolution: 'Assign custom values to enum',
    codeSolution: 'typedef enum { SUCCESS = 0, ERROR = -1, TIMEOUT = 1 } Status;',
    hint: 'Status codes'
  },
  {
    id: 'c_typedef_29',
    topicId: 'c_typedef',
    question: 'Enum for flags with typedef',
    mathSolution: 'Bit flags in enum',
    codeSolution: 'typedef enum { READ = 1<<0, WRITE = 1<<1, EXEC = 1<<2 } Permissions;',
    hint: 'Combine with bitwise OR'
  },
  {
    id: 'c_typedef_30',
    topicId: 'c_typedef',
    question: 'Array of enums with typedef',
    mathSolution: 'Typedef for enum array',
    codeSolution: 'typedef enum Color ColorArray[5];',
    hint: 'Now declare arrays easily'
  },

  // ============ LEVEL 7: TYPEDEF WITH FUNCTION POINTERS (31-35) ============
  {
    id: 'c_typedef_31',
    topicId: 'c_typedef',
    question: 'Create typedef for function pointer',
    mathSolution: 'Alias for function taking int, returning int',
    codeSolution: 'typedef int (*FuncPtr)(int);',
    hint: 'Simplifies complex declarations'
  },
  {
    id: 'c_typedef_32',
    topicId: 'c_typedef',
    question: 'Declare function using function pointer typedef',
    mathSolution: 'Use alias for parameter type',
    codeSolution: 'void sort(int* arr, int size, FuncPtr compare);',
    hint: 'Cleaner function signature'
  },
  {
    id: 'c_typedef_33',
    topicId: 'c_typedef',
    question: 'Create array of function pointers using typedef',
    mathSolution: 'Array of functions with same signature',
    codeSolution: 'FuncPtr operations[4];',
    hint: 'Useful for jump tables'
  },
  {
    id: 'c_typedef_34',
    topicId: 'c_typedef',
    question: 'Typedef for function returning pointer',
    mathSolution: 'Function that returns int*',
    codeSolution: 'typedef int* (*AllocFunc)(size_t);',
    hint: 'Memory allocation functions'
  },
  {
    id: 'c_typedef_35',
    topicId: 'c_typedef',
    question: 'Typedef for function with multiple parameters',
    mathSolution: 'Complex function signature',
    codeSolution: 'typedef int (*MathOp)(int, int, int);',
    hint: 'Three-parameter function'
  },

  // ============ LEVEL 8: TYPEDEF FOR PLATFORM INDEPENDENCE (36-40) ============
  {
    id: 'c_typedef_36',
    topicId: 'c_typedef',
    question: 'Create fixed-size integer types',
    mathSolution: 'Platform-independent sizes',
    codeSolution: 'typedef signed char int8;\ntypedef unsigned char uint8;\ntypedef short int16;\ntypedef unsigned short uint16;\ntypedef int int32;\ntypedef unsigned int uint32;',
    hint: 'Ensure size across platforms'
  },
  {
    id: 'c_typedef_37',
    topicId: 'c_typedef',
    question: 'Create size_t typedef manually',
    mathSolution: 'Unsigned integer for sizes',
    codeSolution: 'typedef unsigned long size_t;',
    hint: 'stddef.h defines it normally'
  },
  {
    id: 'c_typedef_38',
    topicId: 'c_typedef',
    question: 'Create intptr_t for pointer arithmetic',
    mathSolution: 'Integer that can hold pointer',
    codeSolution: 'typedef long intptr_t;',
    hint: 'Store pointer as integer'
  },
  {
    id: 'c_typedef_39',
    topicId: 'c_typedef',
    question: 'Create boolean type using typedef',
    mathSolution: 'Before C99 had stdbool.h',
    codeSolution: 'typedef int bool;\n#define true 1\n#define false 0',
    hint: 'Simulate boolean type'
  },
  {
    id: 'c_typedef_40',
    topicId: 'c_typedef',
    question: 'Conditional typedef based on platform',
    mathSolution: 'Different types for different systems',
    codeSolution: '#ifdef _WIN32\n typedef __int64 int64;\n#else\n typedef long long int64;\n#endif',
    hint: 'Platform abstraction'
  },

  // ============ LEVEL 9: TYPEDEF WITH COMPLEX DECLARATIONS (41-45) ============
  {
    id: 'c_typedef_41',
    topicId: 'c_typedef',
    question: 'Simplify complex pointer to array declaration',
    mathSolution: 'Pointer to array of 10 ints',
    codeSolution: 'typedef int (*ArrayPtr)[10];\nArrayPtr p;',
    hint: 'Without typedef: int (*p)[10]'
  },
  {
    id: 'c_typedef_42',
    topicId: 'c_typedef',
    question: 'Typedef for array of function pointers',
    mathSolution: 'Array of functions returning int',
    codeSolution: 'typedef int (*FuncArray[5])(int);',
    hint: 'Complex but reusable'
  },
  {
    id: 'c_typedef_43',
    topicId: 'c_typedef',
    question: 'Typedef for pointer to function returning pointer',
    mathSolution: 'Function returning char*',
    codeSolution: 'typedef char* (*GetStringFunc)(int);',
    hint: 'Nested pointer types'
  },
  {
    id: 'c_typedef_44',
    topicId: 'c_typedef',
    question: 'Typedef for const pointer to const function',
    mathSolution: 'Read-only function pointer',
    codeSolution: 'typedef int (* const ConstFuncPtr)(int);',
    hint: 'Pointer itself is const'
  },
  {
    id: 'c_typedef_45',
    topicId: 'c_typedef',
    question: 'Typedef for pointer to array of pointers',
    mathSolution: 'Pointers to array of int pointers',
    codeSolution: 'typedef int* (*PtrToArrayOfPtrs)[10];',
    hint: 'Read from right to left'
  },

  // ============ LEVEL 10: TYPEDEF IN HEADER FILES (46-50) ============
  {
    id: 'c_typedef_46',
    topicId: 'c_typedef',
    question: 'Create typedef in header file',
    mathSolution: 'Define types for multiple source files',
    codeSolution: '// types.h\n#ifndef TYPES_H\n#define TYPES_H\ntypedef unsigned int uint;\n#endif',
    hint: 'Use include guards'
  },
  {
    id: 'c_typedef_47',
    topicId: 'c_typedef',
    question: 'Forward declaration with typedef',
    mathSolution: 'Declare type before definition',
    codeSolution: 'typedef struct Student Student; // Forward declaration\nstruct Student { char name[50]; int age; };',
    hint: 'Useful for opaque pointers'
  },
  {
    id: 'c_typedef_48',
    topicId: 'c_typedef',
    question: 'Opaque pointer type using typedef',
    mathSolution: 'Hide implementation details',
    codeSolution: '// In header\n typedef struct Context* ContextHandle;\n // In source\n struct Context { int data; };',
    hint: 'Encapsulation in C'
  },
  {
    id: 'c_typedef_49',
    topicId: 'c_typedef',
    question: 'Multiple typedefs in one header',
    mathSolution: 'Group related type definitions',
    codeSolution: 'typedef struct Point { int x; int y; } Point;\ntypedef struct Rectangle { Point topLeft; Point bottomRight; } Rectangle;',
    hint: 'Hierarchical types'
  },
  {
    id: 'c_typedef_50',
    topicId: 'c_typedef',
    question: 'Typedef for callback function type',
    mathSolution: 'Common in event-driven programming',
    codeSolution: 'typedef void (*EventHandler)(int eventId, void* userData);',
    hint: 'Used in GUI libraries'
  },

  // ============ LEVEL 11: ADVANCED TYPEDEF APPLICATIONS (51-55) ============
  {
    id: 'c_typedef_51',
    topicId: 'c_typedef',
    question: 'Create typedef for complex number',
    mathSolution: 'Structure for complex math',
    codeSolution: 'typedef struct { double real; double imag; } Complex;',
    hint: 'Now use Complex as type'
  },
  {
    id: 'c_typedef_52',
    topicId: 'c_typedef',
    question: 'Typedef for RGB color',
    mathSolution: '24-bit color representation',
    codeSolution: 'typedef struct { unsigned char r, g, b; } RGB;',
    hint: 'No alpha channel'
  },
  {
    id: 'c_typedef_53',
    topicId: 'c_typedef',
    question: 'Typedef for linked list node',
    mathSolution: 'Self-referential structure',
    codeSolution: 'typedef struct Node { int data; struct Node* next; } Node;',
    hint: 'Common data structure'
  },
  {
    id: 'c_typedef_54',
    topicId: 'c_typedef',
    question: 'Typedef for tree node',
    mathSolution: 'Binary tree node type',
    codeSolution: 'typedef struct TreeNode { int data; struct TreeNode *left, *right; } TreeNode;',
    hint: 'Binary tree structure'
  },
  {
    id: 'c_typedef_55',
    topicId: 'c_typedef',
    question: 'Typedef for graph edge',
    mathSolution: 'Weighted graph edge',
    codeSolution: 'typedef struct { int from; int to; int weight; } Edge;',
    hint: 'Graph algorithms'
  },

  // ============ LEVEL 12: TYPEDEF WITH CONST AND VOLATILE (56-60) ============
  {
    id: 'c_typedef_56',
    topicId: 'c_typedef',
    question: 'Create typedef for const int',
    mathSolution: 'Read-only integer type',
    codeSolution: 'typedef const int CINT;',
    hint: 'CINT variables cannot be modified'
  },
  {
    id: 'c_typedef_57',
    topicId: 'c_typedef',
    question: 'Typedef for volatile int',
    mathSolution: 'For hardware registers',
    codeSolution: 'typedef volatile int VINT;',
    hint: 'Prevents compiler optimization'
  },
  {
    id: 'c_typedef_58',
    topicId: 'c_typedef',
    question: 'Combined const volatile typedef',
    mathSolution: 'Read-only hardware register',
    codeSolution: 'typedef const volatile int CVINT;',
    hint: 'Special hardware cases'
  },
  {
    id: 'c_typedef_59',
    topicId: 'c_typedef',
    question: 'Typedef for pointer to volatile',
    mathSolution: 'Pointer to volatile data',
    codeSolution: 'typedef volatile int* PVINT;',
    hint: 'Data pointed to is volatile'
  },
  {
    id: 'c_typedef_60',
    topicId: 'c_typedef',
    question: 'Typedef for volatile pointer',
    mathSolution: 'Pointer itself is volatile',
    codeSolution: 'typedef int* volatile VPTR;',
    hint: 'Pointer address may change'
  },

  // ============ LEVEL 13: TYPEDEF AND SCOPE (61-65) ============
  {
    id: 'c_typedef_61',
    topicId: 'c_typedef',
    question: 'Local typedef inside function',
    mathSolution: 'Typedef with function scope',
    codeSolution: 'void func() { typedef int LOCAL_INT; LOCAL_INT x = 10; }',
    hint: 'Only visible in function'
  },
  {
    id: 'c_typedef_62',
    topicId: 'c_typedef',
    question: 'Typedef in block scope',
    mathSolution: 'Typedef limited to block',
    codeSolution: 'if(condition) { typedef int BLOCK_INT; BLOCK_INT x = 5; }',
    hint: 'Exits after block'
  },
  {
    id: 'c_typedef_63',
    topicId: 'c_typedef',
    question: 'File scope typedef',
    mathSolution: 'Visible throughout file',
    codeSolution: '// At top of file\n typedef unsigned int uint;',
    hint: 'All functions can use it'
  },
  {
    id: 'c_typedef_64',
    topicId: 'c_typedef',
    question: 'Typedef shadowing',
    mathSolution: 'Inner typedef hides outer',
    codeSolution: 'typedef int INT; void func() { typedef float INT; INT x = 3.14; }',
    hint: 'Inner INT is float'
  },
  {
    id: 'c_typedef_65',
    topicId: 'c_typedef',
    question: 'Global typedef with static linkage',
    mathSolution: 'Limited to translation unit',
    codeSolution: 'static typedef int MYINT; // Invalid in C',
    hint: 'static cannot be used with typedef'
  },

  // ============ LEVEL 14: TYPEDEF VS #DEFINE (66-70) ============
  {
    id: 'c_typedef_66',
    topicId: 'c_typedef',
    question: 'Compare typedef and #define for pointers',
    mathSolution: 'typedef handles multiple declarations correctly',
    codeSolution: 'typedef int* PINT;\n#define INT_PTR int*\nPINT p1, p2; // Both pointers\nINT_PTR p3, p4; // p3 is int*, p4 is int',
    hint: 'typedef is better for pointers'
  },
  {
    id: 'c_typedef_67',
    topicId: 'c_typedef',
    question: 'Typedef with array vs #define',
    mathSolution: 'typedef creates proper type',
    codeSolution: 'typedef int ARR10[10];\n#define ARR10_DEF int[10]\nARR10 arr1; // Works\nARR10_DEF arr2; // Error',
    hint: 'typedef handles array types'
  },
  {
    id: 'c_typedef_68',
    topicId: 'c_typedef',
    question: 'Type checking with typedef',
    mathSolution: 'Compiler treats as distinct type?',
    codeSolution: 'typedef int METERS; typedef int SECONDS;\nMETERS m = 10; SECONDS s = m; // Allowed, both int',
    hint: 'typedef doesn\'t create strong type'
  },
  {
    id: 'c_typedef_69',
    topicId: 'c_typedef',
    question: 'Typedef for function pointer vs #define',
    mathSolution: 'typedef cleaner for complex types',
    codeSolution: 'typedef int (*FUNC)(int);\n#define FUNC_DEF int(*)(int)\nFUNC f1; // Clear\nFUNC_DEF f2; // Not valid syntax',
    hint: '#define fails for function pointers'
  },
  {
    id: 'c_typedef_70',
    topicId: 'c_typedef',
    question: 'Combine typedef and #define',
    mathSolution: 'Use both appropriately',
    codeSolution: 'typedef int INT;\n#define MAX 100\nINT arr[MAX];',
    hint: 'typedef for types, #define for constants'
  },

  // ============ LEVEL 15: REAL-WORLD EXAMPLES (71-75) ============
  {
    id: 'c_typedef_71',
    topicId: 'c_typedef',
    question: 'Typedef for file handle',
    mathSolution: 'Opaque file type',
    codeSolution: 'typedef struct FILE FILE; // From stdio.h',
    hint: 'FILE is opaque type'
  },
  {
    id: 'c_typedef_72',
    topicId: 'c_typedef',
    question: 'Typedef for time_t',
    mathSolution: 'Time representation',
    codeSolution: 'typedef long time_t; // Usually',
    hint: 'From time.h'
  },
  {
    id: 'c_typedef_73',
    topicId: 'c_typedef',
    question: 'Typedef for device register',
    mathSolution: 'Hardware mapping',
    codeSolution: 'typedef volatile uint32_t reg32;',
    hint: 'Memory-mapped I/O'
  },
  {
    id: 'c_typedef_74',
    topicId: 'c_typedef',
    question: 'Typedef for error code',
    mathSolution: 'Standard error type',
    codeSolution: 'typedef int error_t;',
    hint: 'Return status from functions'
  },
  {
    id: 'c_typedef_75',
    topicId: 'c_typedef',
    question: 'Typedef for callback in library',
    mathSolution: 'Library user function type',
    codeSolution: 'typedef void (*SortCallback)(int* arr, int size);',
    hint: 'Customizable sorting'
  },

  // ============ LEVEL 16: TYPEDEF WITH STRUCTS - ADVANCED (76-80) ============
  {
    id: 'c_typedef_76',
    topicId: 'c_typedef',
    question: 'Typedef for polymorphic container',
    mathSolution: 'Generic container type',
    codeSolution: 'typedef struct { void* data; size_t size; } Object;',
    hint: 'Can hold any type'
  },
  {
    id: 'c_typedef_77',
    topicId: 'c_typedef',
    question: 'Typedef for iterator',
    mathSolution: 'Iteration over collections',
    codeSolution: 'typedef struct { void* current; void* end; size_t elemSize; } Iterator;',
    hint: 'Generic iteration'
  },
  {
    id: 'c_typedef_78',
    topicId: 'c_typedef',
    question: 'Typedef for configuration structure',
    mathSolution: 'Program settings',
    codeSolution: 'typedef struct { int width; int height; int fullscreen; char title[100]; } Config;',
    hint: 'Application configuration'
  },
  {
    id: 'c_typedef_79',
    topicId: 'c_typedef',
    question: 'Typedef for protocol message',
    mathSolution: 'Network message format',
    codeSolution: 'typedef struct { uint8_t version; uint8_t type; uint16_t length; uint8_t data[1024]; } Message;',
    hint: 'Network protocol'
  },
  {
    id: 'c_typedef_80',
    topicId: 'c_typedef',
    question: 'Typedef for parser state',
    mathSolution: 'Parser context',
    codeSolution: 'typedef struct { const char* input; int pos; int line; int error; } Parser;',
    hint: 'Compiler/parser design'
  },

  // ============ LEVEL 17: TYPEDEF WITH FUNCTION OVERLOADING SIMULATION (81-85) ============
  {
    id: 'c_typedef_81',
    topicId: 'c_typedef',
    question: 'Typedef for different function signatures',
    mathSolution: 'Simulate overloading with function pointers',
    codeSolution: 'typedef int (*IntOp)(int,int);\ntypedef float (*FloatOp)(float,float);',
    hint: 'Different types for different data'
  },
  {
    id: 'c_typedef_82',
    topicId: 'c_typedef',
    question: 'Typedef for generic comparison function',
    mathSolution: 'Comparator for any type',
    codeSolution: 'typedef int (*Comparator)(const void*, const void*);',
    hint: 'Used in qsort'
  },
  {
    id: 'c_typedef_83',
    topicId: 'c_typedef',
    question: 'Typedef for constructor/destructor',
    mathSolution: 'Object lifecycle functions',
    codeSolution: 'typedef void* (*Constructor)();\ntypedef void (*Destructor)(void*);',
    hint: 'OOP in C'
  },
  {
    id: 'c_typedef_84',
    topicId: 'c_typedef',
    question: 'Typedef for serializer/deserializer',
    mathSolution: 'Convert to/from bytes',
    codeSolution: 'typedef size_t (*Serializer)(const void*, uint8_t*);\ntypedef size_t (*Deserializer)(void*, const uint8_t*);',
    hint: 'Persistence functions'
  },
  {
    id: 'c_typedef_85',
    topicId: 'c_typedef',
    question: 'Typedef for factory function',
    mathSolution: 'Creates objects by ID',
    codeSolution: 'typedef void* (*FactoryFunc)(int typeId);',
    hint: 'Factory pattern'
  },

  // ============ LEVEL 18: TYPEDEF IN SYSTEM PROGRAMMING (86-90) ============
  {
    id: 'c_typedef_86',
    topicId: 'c_typedef',
    question: 'Typedef for PID (process ID)',
    mathSolution: 'Process identifier type',
    codeSolution: 'typedef int pid_t;',
    hint: 'From unistd.h'
  },
  {
    id: 'c_typedef_87',
    topicId: 'c_typedef',
    question: 'Typedef for socket descriptor',
    mathSolution: 'Network socket type',
    codeSolution: 'typedef int socket_t;',
    hint: 'Sockets are file descriptors'
  },
  {
    id: 'c_typedef_88',
    topicId: 'c_typedef',
    question: 'Typedef for semaphore',
    mathSolution: 'Synchronization primitive',
    codeSolution: 'typedef struct { int count; } sem_t;',
    hint: 'Simplified semaphore'
  },
  {
    id: 'c_typedef_89',
    topicId: 'c_typedef',
    question: 'Typedef for thread ID',
    mathSolution: 'Thread identifier',
    codeSolution: 'typedef unsigned long thread_t;',
    hint: 'Threading library'
  },
  {
    id: 'c_typedef_90',
    topicId: 'c_typedef',
    question: 'Typedef for signal handler',
    mathSolution: 'Signal handling function',
    codeSolution: 'typedef void (*sighandler_t)(int);',
    hint: 'From signal.h'
  },

  // ============ LEVEL 19: TYPEDEF FOR READABILITY (91-95) ============
  {
    id: 'c_typedef_91',
    topicId: 'c_typedef',
    question: 'Create distance type for readability',
    mathSolution: 'Clear intent in code',
    codeSolution: 'typedef double Distance;',
    hint: 'Meters, kilometers etc'
  },
  {
    id: 'c_typedef_92',
    topicId: 'c_typedef',
    question: 'Typedef for temperature',
    mathSolution: 'Temperature values',
    codeSolution: 'typedef float Temperature;',
    hint: 'Celsius or Fahrenheit'
  },
  {
    id: 'c_typedef_93',
    topicId: 'c_typedef',
    question: 'Typedef for currency',
    mathSolution: 'Monetary values',
    codeSolution: 'typedef long long Currency;',
    hint: 'In smallest unit (cents)'
  },
  {
    id: 'c_typedef_94',
    topicId: 'c_typedef',
    question: 'Typedef for percentage',
    mathSolution: '0-100 range',
    codeSolution: 'typedef float Percentage;',
    hint: 'Or int for integer percent'
  },
  {
    id: 'c_typedef_95',
    topicId: 'c_typedef',
    question: 'Typedef for index/count',
    mathSolution: 'Array indices and sizes',
    codeSolution: 'typedef size_t index_t;',
    hint: 'Unsigned for non-negative'
  },

  // ============ LEVEL 20: TYPEDEF WITH BIT FIELDS (96-100) ============
  {
    id: 'c_typedef_96',
    topicId: 'c_typedef',
    question: 'Typedef for bit field structure',
    mathSolution: 'Packed flags type',
    codeSolution: 'typedef struct { unsigned int flag1:1; unsigned int flag2:1; unsigned int flag3:1; } Flags;',
    hint: 'Efficient boolean storage'
  },
  {
    id: 'c_typedef_97',
    topicId: 'c_typedef',
    question: 'Typedef for hardware register bits',
    mathSolution: 'Device control register',
    codeSolution: 'typedef struct { uint32_t enable:1; uint32_t mode:2; uint32_t irq:4; uint32_t reserved:25; } ControlReg;',
    hint: 'Hardware abstraction'
  },
  {
    id: 'c_typedef_98',
    topicId: 'c_typedef',
    question: 'Typedef for IPv4 address',
    mathSolution: '32-bit IP address',
    codeSolution: 'typedef uint32_t ipv4_addr_t;',
    hint: 'Or struct with octets'
  },
  {
    id: 'c_typedef_99',
    topicId: 'c_typedef',
    question: 'Typedef for MAC address',
    mathSolution: '48-bit MAC address',
    codeSolution: 'typedef uint8_t mac_addr_t[6];',
    hint: 'Array of 6 bytes'
  },
  {
    id: 'c_typedef_100',
    topicId: 'c_typedef',
    question: 'Typedef for UUID/GUID',
    mathSolution: '128-bit identifier',
    codeSolution: 'typedef struct { uint32_t time_low; uint16_t time_mid; uint16_t time_hi; uint8_t clock_seq[2]; uint8_t node[6]; } uuid_t;',
    hint: 'Universally Unique Identifier'
  }
);