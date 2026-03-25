QuizData.questions.push(
  // ============ LEVEL 1: AUTO STORAGE CLASS (1-5) ============
  {
    id: 'c_storage_01',
    topicId: 'c_storage_classes',
    question: 'Declare an automatic integer variable inside function',
    mathSolution: 'auto is default for local variables',
    codeSolution: 'void func() {\n    auto int x = 10;\n}',
    hint: 'auto keyword is optional'
  },
  {
    id: 'c_storage_02',
    topicId: 'c_storage_classes',
    question: 'Declare automatic variable without auto keyword',
    mathSolution: 'All local variables are auto by default',
    codeSolution: 'void func() {\n    int x = 10;\n}',
    hint: 'auto is rarely used explicitly'
  },
  {
    id: 'c_storage_03',
    topicId: 'c_storage_classes',
    question: 'Create multiple automatic variables in same scope',
    mathSolution: 'Each gets separate stack memory',
    codeSolution: 'void func() {\n    int a = 5;\n    float b = 3.14;\n    char c = \'A\';\n}',
    hint: 'Destroyed when function exits'
  },
  {
    id: 'c_storage_04',
    topicId: 'c_storage_classes',
    question: 'Declare automatic array',
    mathSolution: 'Array allocated on stack',
    codeSolution: 'void func() {\n    int arr[10] = {0};\n}',
    hint: 'Size must be known at compile time'
  },
  {
    id: 'c_storage_05',
    topicId: 'c_storage_classes',
    question: 'Show that auto variables are not initialized by default',
    mathSolution: 'auto variables contain garbage if uninitialized',
    codeSolution: 'void func() {\n    int x;\n    printf("%d", x); // Garbage value\n}',
    hint: 'Always initialize local variables'
  },

  // ============ LEVEL 2: REGISTER STORAGE CLASS (6-10) ============
  {
    id: 'c_storage_06',
    topicId: 'c_storage_classes',
    question: 'Declare register variable for loop counter',
    mathSolution: 'Suggests storing in CPU register',
    codeSolution: 'void func() {\n    register int i;\n    for(i = 0; i < 1000; i++) { }\n}',
    hint: 'Compiler may ignore'
  },
  {
    id: 'c_storage_07',
    topicId: 'c_storage_classes',
    question: 'Attempt to take address of register variable',
    mathSolution: 'Cannot get address of register variable',
    codeSolution: 'void func() {\n    register int x = 10;\n    int *p = &x; // Error\n}',
    hint: 'Registers don\'t have memory addresses'
  },
  {
    id: 'c_storage_08',
    topicId: 'c_storage_classes',
    question: 'Use register variable for frequently accessed data',
    mathSolution: 'Speed up critical loops',
    codeSolution: 'void sumArray(int arr[], int n) {\n    register int sum = 0;\n    for(register int i = 0; i < n; i++)\n        sum += arr[i];\n}',
    hint: 'Good for counters and accumulators'
  },
  {
    id: 'c_storage_09',
    topicId: 'c_storage_classes',
    question: 'Declare multiple register variables',
    mathSolution: 'Limited number of CPU registers',
    codeSolution: 'void func() {\n    register int a, b, c; // May be ignored if too many\n}',
    hint: 'Only suggestion to compiler'
  },
  {
    id: 'c_storage_10',
    topicId: 'c_storage_classes',
    question: 'Register variable with initializer',
    mathSolution: 'Can initialize register variables',
    codeSolution: 'void func() {\n    register int x = 100;\n}',
    hint: 'Initialization allowed'
  },

  // ============ LEVEL 3: STATIC LOCAL VARIABLES (11-15) ============
  {
    id: 'c_storage_11',
    topicId: 'c_storage_classes',
    question: 'Declare static local variable',
    mathSolution: 'Retains value between function calls',
    codeSolution: 'void counter() {\n    static int count = 0;\n    count++;\n    printf("%d", count);\n}',
    hint: 'Initialized only once'
  },
  {
    id: 'c_storage_12',
    topicId: 'c_storage_classes',
    question: 'Demonstrate static variable persistence',
    mathSolution: 'Value preserved across calls',
    codeSolution: 'void func() {\n    static int x = 5;\n    x++;\n    printf("%d ", x);\n} // Call 3 times: 6 7 8',
    hint: 'Not destroyed after function ends'
  },
  {
    id: 'c_storage_13',
    topicId: 'c_storage_classes',
    question: 'Static local variable without explicit initialization',
    mathSolution: 'Automatically initialized to 0',
    codeSolution: 'void func() {\n    static int count; // Initialized to 0\n}',
    hint: 'Static variables are zero-initialized'
  },
  {
    id: 'c_storage_14',
    topicId: 'c_storage_classes',
    question: 'Static array inside function',
    mathSolution: 'Array persists between calls',
    codeSolution: 'int* getFibonacci() {\n    static int fib[10] = {0, 1};\n    return fib;\n}',
    hint: 'Safe to return pointer to static array, unlike auto array'
  },
  {
    id: 'c_storage_15',
    topicId: 'c_storage_classes',
    question: 'Static pointer variable in function',
    mathSolution: 'Pointer retains its value',
    codeSolution: 'void addNode(int data) {\n    static struct Node* head = NULL; // Head persists\n}',
    hint: 'Useful for linked lists'
  },

  // ============ LEVEL 4: STATIC GLOBAL VARIABLES (16-20) ============
  {
    id: 'c_storage_16',
    topicId: 'c_storage_classes',
    question: 'Declare static global variable',
    mathSolution: 'Variable limited to this file',
    codeSolution: 'static int fileScopeCounter = 0;',
    hint: 'Cannot be accessed from other files'
  },
  {
    id: 'c_storage_17',
    topicId: 'c_storage_classes',
    question: 'Static function in C',
    mathSolution: 'Function only visible in this file',
    codeSolution: 'static void helperFunction() {\n    // Only called from this file\n}',
    hint: 'Information hiding'
  },
  {
    id: 'c_storage_18',
    topicId: 'c_storage_classes',
    question: 'Multiple files with static global',
    mathSolution: 'Each file has its own copy',
    codeSolution: '// file1.c: static int x = 10;\n// file2.c: static int x = 20; // Different variable',
    hint: 'No name collision'
  },
  {
    id: 'c_storage_19',
    topicId: 'c_storage_classes',
    question: 'Static global array',
    mathSolution: 'File-scoped array',
    codeSolution: 'static int lookupTable[256];',
    hint: 'Private to the file'
  },
  {
    id: 'c_storage_20',
    topicId: 'c_storage_classes',
    question: 'Static const combination',
    mathSolution: 'File-scoped constant',
    codeSolution: 'static const double PI = 3.14159;',
    hint: 'Constant and private'
  },

  // ============ LEVEL 5: EXTERN STORAGE CLASS (21-25) ============
  {
    id: 'c_storage_21',
    topicId: 'c_storage_classes',
    question: 'Declare external variable (defined elsewhere)',
    mathSolution: 'Refers to variable in another file',
    codeSolution: 'extern int globalCounter;',
    hint: 'No memory allocation here'
  },
  {
    id: 'c_storage_22',
    topicId: 'c_storage_classes',
    question: 'Use extern to access global variable',
    mathSolution: 'Linker resolves reference',
    codeSolution: '// file1.c: int shared = 100;\n// file2.c: extern int shared;\nvoid func() { printf("%d", shared); }',
    hint: 'Must be defined exactly once'
  },
  {
    id: 'c_storage_23',
    topicId: 'c_storage_classes',
    question: 'Extern function declaration',
    mathSolution: 'Function defined in another file',
    codeSolution: 'extern int calculate(int a, int b);',
    hint: 'extern is optional for functions'
  },
  {
    id: 'c_storage_24',
    topicId: 'c_storage_classes',
    question: 'Extern array declaration',
    mathSolution: 'Array defined elsewhere',
    codeSolution: 'extern int scores[]; // Size not needed',
    hint: 'Compiler only needs name'
  },
  {
    id: 'c_storage_25',
    topicId: 'c_storage_classes',
    question: 'Extern with header files',
    mathSolution: 'Declare in header, define in source',
    codeSolution: '// global.h: extern int errno;\n// global.c: int errno = 0;',
    hint: 'Common pattern for globals'
  },

  // ============ LEVEL 6: MULTIPLE FILES EXAMPLES (26-30) ============
  {
    id: 'c_storage_26',
    topicId: 'c_storage_classes',
    question: 'Create counter across multiple files',
    mathSolution: 'Shared global variable',
    codeSolution: '// counter.h: extern int count;\n// counter.c: int count = 0;\n// main.c: #include "counter.h"\nvoid inc() { count++; }',
    hint: 'One definition, multiple declarations'
  },
  {
    id: 'c_storage_27',
    topicId: 'c_storage_classes',
    question: 'Static variable hiding global',
    mathSolution: 'Static overrides global in file',
    codeSolution: 'int x = 100; // Global\nstatic int x = 50; // File-static hides global',
    hint: 'Different scope, same name'
  },
  {
    id: 'c_storage_28',
    topicId: 'c_storage_classes',
    question: 'Extern variable initialized in declaration',
    mathSolution: 'Cannot initialize extern (unless definition)',
    codeSolution: 'extern int x = 10; // Warning or error in C',
    hint: 'extern declares, doesn\'t define'
  },
  {
    id: 'c_storage_29',
    topicId: 'c_storage_classes',
    question: 'Multiple extern declarations',
    mathSolution: 'Can declare same variable many times',
    codeSolution: 'extern int x; extern int x; extern int x; // OK',
    hint: 'Only one definition allowed'
  },
  {
    id: 'c_storage_30',
    topicId: 'c_storage_classes',
    question: 'Extern with array size',
    mathSolution: 'Size can be omitted in declaration',
    codeSolution: 'extern int arr[]; // In header\nint arr[10]; // In source file',
    hint: 'Array size known to linker'
  },

  // ============ LEVEL 7: COMPLEX COMBINATIONS (31-35) ============
  {
    id: 'c_storage_31',
    topicId: 'c_storage_classes',
    question: 'Static variable inside nested blocks',
    mathSolution: 'Same variable across block entries',
    codeSolution: 'void func() {\n    for(int i = 0; i < 3; i++) {\n        static int x = 0;\n        x++;\n        printf("%d", x);\n    }\n} // Prints 1 2 3',
    hint: 'Static scope is function, not block'
  },
  {
    id: 'c_storage_32',
    topicId: 'c_storage_classes',
    question: 'Register with static (invalid)',
    mathSolution: 'Cannot combine register and static',
    codeSolution: 'void func() {\n    static register int x; // Error\n}',
    hint: 'Mutually exclusive storage classes'
  },
  {
    id: 'c_storage_33',
    topicId: 'c_storage_classes',
    question: 'Auto with extern (invalid)',
    mathSolution: 'Cannot combine auto and extern',
    codeSolution: 'void func() {\n    auto extern int x; // Error\n}',
    hint: 'Only one storage class'
  },
  {
    id: 'c_storage_34',
    topicId: 'c_storage_classes',
    question: 'Static array of function pointers',
    mathSolution: 'Persistent function table',
    codeSolution: 'static int (*operations[])(int, int) = {add, sub, mul, div};',
    hint: 'Jump table stays in memory'
  },
  {
    id: 'c_storage_35',
    topicId: 'c_storage_classes',
    question: 'Extern pointer to static variable',
    mathSolution: 'Access static from other file via pointer',
    codeSolution: '// file1.c: static int hidden = 42;\nint* getHidden() { return &hidden; }\n// file2.c: extern int* getHidden();\nvoid use() { int *p = getHidden(); }',
    hint: 'Controlled access to static'
  },

  // ============ LEVEL 8: THREAD LOCAL STORAGE (C11) (36-40) ============
  {
    id: 'c_storage_36',
    topicId: 'c_storage_classes',
    question: 'Declare thread-local variable (C11)',
    mathSolution: 'Each thread gets its own copy',
    codeSolution: '_Thread_local int tls_var = 0;',
    hint: 'C11 feature, need <threads.h>'
  },
  {
    id: 'c_storage_37',
    topicId: 'c_storage_classes',
    question: 'Thread-local with static',
    mathSolution: 'Static thread-local storage',
    codeSolution: 'static _Thread_local int perThreadCache;',
    hint: 'File-scoped thread-local'
  },
  {
    id: 'c_storage_38',
    topicId: 'c_storage_classes',
    question: 'Thread-local in header file',
    mathSolution: 'Each including file gets thread-local',
    codeSolution: '// config.h: extern _Thread_local int threadID;',
    hint: 'Declare extern, define in source'
  },
  {
    id: 'c_storage_39',
    topicId: 'c_storage_classes',
    question: 'Thread-local array',
    mathSolution: 'Per-thread array',
    codeSolution: '_Thread_local char threadBuffer[1024];',
    hint: 'Each thread has own buffer'
  },
  {
    id: 'c_storage_40',
    topicId: 'c_storage_classes',
    question: 'Combine thread_local with const',
    mathSolution: 'Constant thread-local data',
    codeSolution: '_Thread_local const int MAX = 100;',
    hint: 'Read-only per thread'
  },

  // ============ LEVEL 9: STORAGE CLASS WITH POINTERS (41-45) ============
  {
    id: 'c_storage_41',
    topicId: 'c_storage_classes',
    question: 'Static pointer to dynamic memory',
    mathSolution: 'Pointer persists, memory persists',
    codeSolution: 'void* getBuffer() {\n    static void* buffer = NULL;\n    if(!buffer) buffer = malloc(1024);\n    return buffer;\n}',
    hint: 'Lazy allocation'
  },
  {
    id: 'c_storage_42',
    topicId: 'c_storage_classes',
    question: 'Extern pointer to function',
    mathSolution: 'Function pointer from another file',
    codeSolution: 'extern int (*callback)(int);',
    hint: 'Defined in another file'
  },
  {
    id: 'c_storage_43',
    topicId: 'c_storage_classes',
    question: 'Register pointer variable',
    mathSolution: 'Suggests pointer in register',
    codeSolution: 'void process(char* str) {\n    register char* p = str;\n    while(*p) p++;\n}',
    hint: 'May speed up pointer iteration'
  },
  {
    id: 'c_storage_44',
    topicId: 'c_storage_classes',
    question: 'Static pointer to string literal',
    mathSolution: 'Persistent string reference',
    codeSolution: 'const char* getMessage() {\n    static const char* msg = "Hello";\n    return msg;\n}',
    hint: 'String literal has static duration'
  },
  {
    id: 'c_storage_45',
    topicId: 'c_storage_classes',
    question: 'Auto pointer to static data',
    mathSolution: 'Local pointer to persistent data',
    codeSolution: 'void func() {\n    static int data = 42;\n    int* p = &data; // Auto pointer to static\n}',
    hint: 'Safe to return p?'
  },

  // ============ LEVEL 10: STATIC IN RECURSIVE FUNCTIONS (46-50) ============
  {
    id: 'c_storage_46',
    topicId: 'c_storage_classes',
    question: 'Static variable in recursive function',
    mathSolution: 'Shared across all recursive calls',
    codeSolution: 'void recurse(int n) {\n    static int calls = 0;\n    calls++;\n    if(n > 0) recurse(n-1);\n    printf("%d ", calls);\n}',
    hint: 'All calls share same variable'
  },
  {
    id: 'c_storage_47',
    topicId: 'c_storage_classes',
    question: 'Static counter for recursion depth',
    mathSolution: 'Track maximum recursion depth',
    codeSolution: 'int factorial(int n) {\n    static int depth = 0;\n    static int maxDepth = 0;\n    depth++;\n    if(depth > maxDepth) maxDepth = depth;\n    int result = (n <= 1) ? 1 : n * factorial(n-1);\n    depth--;\n    return result;\n}',
    hint: 'Monitor recursion'
  },
  {
    id: 'c_storage_48',
    topicId: 'c_storage_classes',
    question: 'Static variable for memoization',
    mathSolution: 'Cache results in recursive function',
    codeSolution: 'int fib(int n) {\n    static int cache[100] = {0};\n    if(n <= 1) return n;\n    if(cache[n]) return cache[n];\n    cache[n] = fib(n-1) + fib(n-2);\n    return cache[n];\n}',
    hint: 'Optimize recursive Fibonacci'
  },
  {
    id: 'c_storage_49',
    topicId: 'c_storage_classes',
    question: 'Static in recursion vs auto',
    mathSolution: 'Auto creates new copy each call',
    codeSolution: 'void printDepths(int n) {\n    int autoDepth = 0;\n    static int staticDepth = 0;\n    autoDepth++;\n    staticDepth++;\n    printf("auto=%d static=%d\\n", autoDepth, staticDepth);\n    if(n > 0) printDepths(n-1);\n}',
    hint: 'Auto resets, static accumulates'
  },
  {
    id: 'c_storage_50',
    topicId: 'c_storage_classes',
    question: 'Static pointer for recursion stack',
    mathSolution: 'Build list of visited nodes',
    codeSolution: 'typedef struct Node { int val; struct Node* next; } Node;\nvoid traverse(Node* root) {\n    static Node* visited = NULL;\n    // Add current node to visited list\n    // Recursive traversal\n}',
    hint: 'Track recursion path'
  },

  // ============ LEVEL 11: INITIALIZATION RULES (51-55) ============
  {
    id: 'c_storage_51',
    topicId: 'c_storage_classes',
    question: 'Default initialization of static',
    mathSolution: 'Static variables zero-initialized',
    codeSolution: 'static int x; // x = 0\nstatic float y; // y = 0.0\nstatic char* p; // p = NULL',
    hint: 'Unlike auto variables'
  },
  {
    id: 'c_storage_52',
    topicId: 'c_storage_classes',
    question: 'Extern variable initialization',
    mathSolution: 'Cannot initialize in extern declaration',
    codeSolution: 'extern int x = 5; // Warning or error',
    hint: 'Remove extern if defining'
  },
  {
    id: 'c_storage_53',
    topicId: 'c_storage_classes',
    question: 'Static initialization with function call',
    mathSolution: 'Initialized at runtime once',
    codeSolution: 'static int x = rand(); // Called once at program start',
    hint: 'Not compile-time constant'
  },
  {
    id: 'c_storage_54',
    topicId: 'c_storage_classes',
    question: 'Complex static initialization',
    mathSolution: 'Static struct initialization',
    codeSolution: 'static struct Point origin = {0, 0};',
    hint: 'Initialized before main()'
  },
  {
    id: 'c_storage_55',
    topicId: 'c_storage_classes',
    question: 'Static array initialization',
    mathSolution: 'Array initialized once',
    codeSolution: 'static int primes[] = {2, 3, 5, 7, 11, 13};',
    hint: 'Persistent lookup table'
  },

  // ============ LEVEL 12: SCOPE AND LIFETIME (56-60) ============
  {
    id: 'c_storage_56',
    topicId: 'c_storage_classes',
    question: 'Block scope static visibility',
    mathSolution: 'Visible only in block, lives forever',
    codeSolution: 'if(condition) {\n    static int x = 0;\n    x++;\n    printf("%d", x);\n} // x persists across if statements',
    hint: 'Lifetime ≠ scope'
  },
  {
    id: 'c_storage_57',
    topicId: 'c_storage_classes',
    question: 'Static in nested functions (GCC extension)',
    mathSolution: 'Static variable in nested function',
    codeSolution: 'void outer() {\n    void inner() {\n        static int count = 0;\n        count++;\n    }\n    inner();\n    inner();\n}',
    hint: 'Not standard C'
  },
  {
    id: 'c_storage_58',
    topicId: 'c_storage_classes',
    question: 'Extern and static conflict',
    mathSolution: 'Cannot be both extern and static',
    codeSolution: 'static extern int x; // Error',
    hint: 'Choose one'
  },
  {
    id: 'c_storage_59',
    topicId: 'c_storage_classes',
    question: 'Auto variable hiding static',
    mathSolution: 'Local auto hides static in scope',
    codeSolution: 'static int x = 10;\nvoid func() {\n    int x = 20; // Hides static x\n    printf("%d", x); // Prints 20\n}',
    hint: 'Scope resolution'
  },
  {
    id: 'c_storage_60',
    topicId: 'c_storage_classes',
    question: 'Static global vs static local naming',
    mathSolution: 'Different variables, same name',
    codeSolution: 'static int x = 5; // File scope\nvoid func() {\n    static int x = 10; // Function scope\n    printf("%d %d", x, x);\n}',
    hint: 'Two different variables'
  },

  // ============ LEVEL 13: PRACTICAL EXAMPLES (61-65) ============
  {
    id: 'c_storage_61',
    topicId: 'c_storage_classes',
    question: 'Generate unique IDs with static',
    mathSolution: 'Counter that persists',
    codeSolution: 'int getNextID() {\n    static int id = 1000;\n    return id++;\n}',
    hint: 'Thread-safe? Not without sync'
  },
  {
    id: 'c_storage_62',
    topicId: 'c_storage_classes',
    question: 'Singleton pattern with static',
    mathSolution: 'Single instance of object',
    codeSolution: 'struct Database* getDB() {\n    static struct Database* db = NULL;\n    if(!db) db = createDB();\n    return db;\n}',
    hint: 'Lazy initialization'
  },
  {
    id: 'c_storage_63',
    topicId: 'c_storage_classes',
    question: 'Static variable for random seed',
    mathSolution: 'Seed persists across calls',
    codeSolution: 'int myRand() {\n    static unsigned int seed = 1;\n    seed = seed * 1103515245 + 12345;\n    return (unsigned int)(seed/65536) % 32768;\n}',
    hint: 'Simple PRNG'
  },
  {
    id: 'c_storage_64',
    topicId: 'c_storage_classes',
    question: 'State machine with static',
    mathSolution: 'Persistent state variable',
    codeSolution: 'int processChar(char c) {\n    static enum { START, IN_NUM, IN_WORD } state = START;\n    // Process based on state\n}',
    hint: 'Parser state'
  },
  {
    id: 'c_storage_65',
    topicId: 'c_storage_classes',
    question: 'Static variable for error count',
    mathSolution: 'Accumulate errors across calls',
    codeSolution: 'void logError(const char* msg) {\n    static int errorCount = 0;\n    errorCount++;\n    printf("Error %d: %s\\n", errorCount, msg);\n}',
    hint: 'Error tracking'
  },

  // ============ LEVEL 14: STORAGE CLASS WITH STRUCTURES (66-70) ============
  {
    id: 'c_storage_66',
    topicId: 'c_storage_classes',
    question: 'Static structure variable',
    mathSolution: 'Persistent structure',
    codeSolution: 'static struct Config config = {9600, 8, "N", 1};',
    hint: 'Configuration data'
  },
  {
    id: 'c_storage_67',
    topicId: 'c_storage_classes',
    question: 'Extern structure declaration',
    mathSolution: 'Structure defined elsewhere',
    codeSolution: 'extern struct Point origin;',
    hint: 'Definition in another file'
  },
  {
    id: 'c_storage_68',
    topicId: 'c_storage_classes',
    question: 'Register structure? Not possible',
    mathSolution: 'Cannot have register struct',
    codeSolution: 'void func() {\n    register struct Point p; // Usually error\n}',
    hint: 'Structure too large for register'
  },
  {
    id: 'c_storage_69',
    topicId: 'c_storage_classes',
    question: 'Static array of structures',
    mathSolution: 'Persistent database',
    codeSolution: 'static struct Employee employees[100];',
    hint: 'File-scoped employee records'
  },
  {
    id: 'c_storage_70',
    topicId: 'c_storage_classes',
    question: 'Static pointer to structure',
    mathSolution: 'Persistent reference',
    codeSolution: 'static struct Node* head = NULL;',
    hint: 'Linked list head'
  },

  // ============ LEVEL 15: FUNCTION-LEVEL STORAGE (71-75) ============
  {
    id: 'c_storage_71',
    topicId: 'c_storage_classes',
    question: 'Static function returning static data',
    mathSolution: 'Controlled access to static',
    codeSolution: 'static int* getCounter() {\n    static int c = 0;\n    return &c;\n}',
    hint: 'Returns pointer to static'
  },
  {
    id: 'c_storage_72',
    topicId: 'c_storage_classes',
    question: 'Extern function with static local',
    mathSolution: 'External function with internal state',
    codeSolution: '// In file.c: int counter() { static int c=0; return c++; }\n// In main.c: extern int counter();',
    hint: 'State hidden in function'
  },
  {
    id: 'c_storage_73',
    topicId: 'c_storage_classes',
    question: 'Function pointer to static function',
    mathSolution: 'Call static function via pointer',
    codeSolution: 'static void helper() {}\nvoid* getHelper() { return helper; }',
    hint: 'Static can be called via pointer'
  },
  {
    id: 'c_storage_74',
    topicId: 'c_storage_classes',
    question: 'Inline function with static variable',
    mathSolution: 'Static in inline function',
    codeSolution: 'inline int nextID() {\n    static int id = 0;\n    return id++;\n}',
    hint: 'Each translation unit has own static'
  },
  {
    id: 'c_storage_75',
    topicId: 'c_storage_classes',
    question: 'Recursive static function',
    mathSolution: 'Static function calling itself',
    codeSolution: 'static void quicksort(int arr[], int low, int high) {\n    if(low < high) {\n        int pi = partition(arr, low, high);\n        quicksort(arr, low, pi-1);\n        quicksort(arr, pi+1, high);\n    }\n}',
    hint: 'Static recursion works fine'
  },

  // ============ LEVEL 16: STORAGE CLASS AND LINKAGE (76-80) ============
  {
    id: 'c_storage_76',
    topicId: 'c_storage_classes',
    question: 'External linkage with extern',
    mathSolution: 'Visible across files',
    codeSolution: 'int global = 10; // External linkage\nvoid func() { extern int global; }',
    hint: 'Default for globals is external'
  },
  {
    id: 'c_storage_77',
    topicId: 'c_storage_classes',
    question: 'Internal linkage with static',
    mathSolution: 'Visible only in this file',
    codeSolution: 'static int fileOnly = 20;',
    hint: 'Cannot be accessed from other files'
  },
  {
    id: 'c_storage_78',
    topicId: 'c_storage_classes',
    question: 'No linkage (auto and register)',
    mathSolution: 'Visible only in block',
    codeSolution: 'void func() { int x; // No linkage }',
    hint: 'Cannot be referenced outside'
  },
  {
    id: 'c_storage_79',
    topicId: 'c_storage_classes',
    question: 'Extern with no linkage variable',
    mathSolution: 'Cannot refer to no-linkage variable',
    codeSolution: 'void func() { int x; extern int x; // Error or refers to different x }',
    hint: 'extern looks for file scope'
  },
  {
    id: 'c_storage_80',
    topicId: 'c_storage_classes',
    question: 'Static function with external call',
    mathSolution: 'Static can call external',
    codeSolution: 'static void process(int x) { externalFunc(x); }',
    hint: 'Static can use external functions'
  },

  // ============ LEVEL 17: ADVANCED USE CASES (81-85) ============
  {
    id: 'c_storage_81',
    topicId: 'c_storage_classes',
    question: 'Static variable in header file',
    mathSolution: 'Each including file gets its own copy',
    codeSolution: '// header.h: static int version = 1;\n// file1.c: #include "header.h"\n// file2.c: #include "header.h" // Different version variable',
    hint: 'Usually not intended'
  },
  {
    id: 'c_storage_82',
    topicId: 'c_storage_classes',
    question: 'Extern inline static workaround',
    mathSolution: 'C99 inline rules',
    codeSolution: '// header.h: inline int max(int a, int b) { return a>b?a:b; }\n// file.c: extern int max(int,int); // External definition',
    hint: 'Inline with external linkage'
  },
  {
    id: 'c_storage_83',
    topicId: 'c_storage_classes',
    question: 'Static const vs #define',
    mathSolution: 'Static const has type, address',
    codeSolution: 'static const int MAX_SIZE = 100; // Has address\n#define MAX_SIZE 100 // No address',
    hint: 'Static const can be debugged'
  },
  {
    id: 'c_storage_84',
    topicId: 'c_storage_classes',
    question: 'Static variable in macro',
    mathSolution: 'Macro expanding to static',
    codeSolution: '#define CREATE_COUNTER(name) static int name = 0\nCREATE_COUNTER(counter1);\nCREATE_COUNTER(counter2);',
    hint: 'Creates multiple static vars'
  },
  {
    id: 'c_storage_85',
    topicId: 'c_storage_classes',
    question: 'Register with array indexing',
    mathSolution: 'Register array index',
    codeSolution: 'void sum(int arr[], int n) {\n    register int i;\n    register int sum = 0;\n    for(i = 0; i < n; i++) sum += arr[i];\n}',
    hint: 'Common optimization'
  },

  // ============ LEVEL 18: STORAGE CLASS AND CONST/VOLATILE (86-90) ============
  {
    id: 'c_storage_86',
    topicId: 'c_storage_classes',
    question: 'Static const volatile',
    mathSolution: 'Read-only hardware register',
    codeSolution: 'static const volatile uint32_t* STATUS_REG = (uint32_t*)0x40021000;',
    hint: 'Const means don\'t write, volatile means may change'
  },
  {
    id: 'c_storage_87',
    topicId: 'c_storage_classes',
    question: 'Extern const variable',
    mathSolution: 'Constant defined elsewhere',
    codeSolution: '// consts.h: extern const double PI;\n// consts.c: const double PI = 3.14159;',
    hint: 'Const has external linkage by default'
  },
  {
    id: 'c_storage_88',
    topicId: 'c_storage_classes',
    question: 'Static volatile for interrupt',
    mathSolution: 'Variable modified by ISR',
    codeSolution: 'static volatile int buttonPressed = 0;',
    hint: 'Prevents compiler optimization'
  },
  {
    id: 'c_storage_89',
    topicId: 'c_storage_classes',
    question: 'Register volatile (valid?)',
    mathSolution: 'Can combine register and volatile',
    codeSolution: 'void wait() {\n    register volatile int i;\n    for(i = 0; i < 1000; i++); // Delay loop\n}',
    hint: 'volatile prevents optimization'
  },
  {
    id: 'c_storage_90',
    topicId: 'c_storage_classes',
    question: 'Extern volatile for shared memory',
    mathSolution: 'Shared memory between processes',
    codeSolution: 'extern volatile int* sharedBuffer;',
    hint: 'May change asynchronously'
  },

  // ============ LEVEL 19: ERROR SCENARIOS (91-95) ============
  {
    id: 'c_storage_91',
    topicId: 'c_storage_classes',
    question: 'Using static in function parameter',
    mathSolution: 'Cannot use static on parameters',
    codeSolution: 'void func(static int x) { } // Error',
    hint: 'Parameters are auto'
  },
  {
    id: 'c_storage_92',
    topicId: 'c_storage_classes',
    question: 'Multiple storage classes',
    mathSolution: 'Only one storage class allowed',
    codeSolution: 'extern static int x; // Error',
    hint: 'Choose one'
  },
  {
    id: 'c_storage_93',
    topicId: 'c_storage_classes',
    question: 'Register variable with array',
    mathSolution: 'Cannot have register array',
    codeSolution: 'void func() {\n    register int arr[10]; // Usually error\n}',
    hint: 'Array too large for register'
  },
  {
    id: 'c_storage_94',
    topicId: 'c_storage_classes',
    question: 'Static variable in inline function in header',
    mathSolution: 'Each inclusion gets different static',
    codeSolution: '// header.h: inline int counter() { static int c=0; return c++; }\n// file1.c and file2.c have separate counters',
    hint: 'Multiple copies in different files'
  },
  {
    id: 'c_storage_95',
    topicId: 'c_storage_classes',
    question: 'Extern typedef (invalid)',
    mathSolution: 'Cannot use extern with typedef',
    codeSolution: 'extern typedef int INT; // Error',
    hint: 'typedef is storage class? No, it\'s different'
  },

  // ============ LEVEL 20: PRACTICAL APPLICATIONS (96-100) ============
  {
    id: 'c_storage_96',
    topicId: 'c_storage_classes',
    question: 'Static variable for caching',
    mathSolution: 'Cache expensive computation',
    codeSolution: 'double computeExpensive(int n) {\n    static double cache[100] = {0};\n    if(cache[n] != 0) return cache[n];\n    cache[n] = slowCompute(n);\n    return cache[n];\n}',
    hint: 'Memoization pattern'
  },
  {
    id: 'c_storage_97',
    topicId: 'c_storage_classes',
    question: 'Static for one-time initialization',
    mathSolution: 'Initialize only once',
    codeSolution: 'void initialize() {\n    static int done = 0;\n    if(!done) {\n        initResources();\n        done = 1;\n    }\n}',
    hint: 'Thread-safe? Not in C'
  },
  {
    id: 'c_storage_98',
    topicId: 'c_storage_classes',
    question: 'Static variable for logging',
    mathSolution: 'Log file handle persists',
    codeSolution: 'void logMessage(const char* msg) {\n    static FILE* logFile = NULL;\n    if(!logFile) logFile = fopen("log.txt", "a");\n    fprintf(logFile, "%s\\n", msg);\n}',
    hint: 'Open file once'
  },
  {
    id: 'c_storage_99',
    topicId: 'c_storage_classes',
    question: 'Static for random number generator state',
    mathSolution: 'RNG state between calls',
    codeSolution: 'unsigned int fastRand() {\n    static unsigned int state = 1;\n    state = state * 1103515245 + 12345;\n    return (state >> 16) & 0x7FFF;\n}',
    hint: 'Linear congruential generator'
  },
  {
    id: 'c_storage_100',
    topicId: 'c_storage_classes',
    question: 'Combine all storage classes in one program',
    mathSolution: 'Demonstrate auto, register, static, extern, _Thread_local',
    codeSolution: '#include <stdio.h>\n#include <threads.h>\n\nint global = 100; // extern by default\nstatic int fileStatic = 50;\n_Thread_local int tlsVar = 0;\n\nstatic void staticFunc() {\n    static int funcStatic = 0; // static local\n    auto int autoVar = 10;      // auto\n    register int regVar = 20;   // register suggestion\n    funcStatic++;\n    printf("%d %d %d\\n", funcStatic, autoVar, regVar);\n}\n\nint main() {\n    extern int global;          // extern declaration\n    staticFunc();\n    return 0;\n}',
    hint: 'All storage classes in action'
  }
);