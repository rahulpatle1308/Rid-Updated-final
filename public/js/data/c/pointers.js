QuizData.questions.push(
  // ========== BASIC POINTER CONCEPTS (QUESTIONS 1-5) ==========
  {
    id: 'c_ptr_1',
    topicId: 'c_pointers',
    question: 'Declare an integer pointer variable.',
    mathSolution: 'Pointer that can store address of int',
    codeSolution: 'int *ptr;',
    hint: 'Use * to declare pointer'
  },
  {
    id: 'c_ptr_2',
    topicId: 'c_pointers',
    question: 'Store address of variable x in pointer ptr.',
    mathSolution: 'ptr points to x',
    codeSolution: 'int x = 10; int *ptr = &x;',
    hint: 'Use & operator to get address'
  },
  {
    id: 'c_ptr_3',
    topicId: 'c_pointers',
    question: 'Print the value of variable using pointer.',
    mathSolution: 'Dereference pointer to get value',
    codeSolution: 'printf("%d", *ptr);',
    hint: 'Use * operator to dereference'
  },
  {
    id: 'c_ptr_4',
    topicId: 'c_pointers',
    question: 'Print the address stored in pointer.',
    mathSolution: 'Display pointer value (address)',
    codeSolution: 'printf("%p", (void*)ptr);',
    hint: 'Use %p format specifier'
  },
  {
    id: 'c_ptr_5',
    topicId: 'c_pointers',
    question: 'Change value of variable using pointer.',
    mathSolution: '*ptr = 20 sets x to 20',
    codeSolution: '*ptr = 20;',
    hint: 'Assign to dereferenced pointer'
  },

  // ========== POINTER ARITHMETIC (QUESTIONS 6-10) ==========
  {
    id: 'c_ptr_6',
    topicId: 'c_pointers',
    question: 'Increment pointer to point to next integer.',
    mathSolution: 'ptr++ moves by sizeof(int) bytes',
    codeSolution: 'ptr++;',
    hint: 'Pointer arithmetic depends on type'
  },
  {
    id: 'c_ptr_7',
    topicId: 'c_pointers',
    question: 'Find difference between two pointers.',
    mathSolution: 'Number of elements between them',
    codeSolution: 'int diff = ptr2 - ptr1;',
    hint: 'Returns element count, not bytes'
  },
  {
    id: 'c_ptr_8',
    topicId: 'c_pointers',
    question: 'Compare two pointers for equality.',
    mathSolution: 'Check if they point to same location',
    codeSolution: 'if(ptr1 == ptr2) { }',
    hint: 'Compare addresses directly'
  },
  {
    id: 'c_ptr_9',
    topicId: 'c_pointers',
    question: 'Access array element using pointer arithmetic.',
    mathSolution: '*(arr+i) equals arr[i]',
    codeSolution: 'int value = *(arr + i);',
    hint: 'Add offset to base address'
  },
  {
    id: 'c_ptr_10',
    topicId: 'c_pointers',
    question: 'Traverse array using pointer.',
    mathSolution: 'Print all elements via pointer',
    codeSolution: 'for(int *p=arr; p<arr+n; p++) printf("%d ", *p);',
    hint: 'Increment pointer until end'
  },

  // ========== POINTERS AND ARRAYS (QUESTIONS 11-15) ==========
  {
    id: 'c_ptr_11',
    topicId: 'c_pointers',
    question: 'Find size of pointer vs size of array.',
    mathSolution: 'sizeof(arr) vs sizeof(ptr)',
    codeSolution: 'printf("%lu %lu", sizeof(arr), sizeof(ptr));',
    hint: 'Array size = total bytes, pointer size = fixed'
  },
  {
    id: 'c_ptr_12',
    topicId: 'c_pointers',
    question: 'Create pointer to first element of array.',
    mathSolution: 'ptr = arr or ptr = &arr[0]',
    codeSolution: 'int *ptr = arr; // or &arr[0]',
    hint: 'Array name decays to pointer'
  },
  {
    id: 'c_ptr_13',
    topicId: 'c_pointers',
    question: 'Create pointer to array of 5 integers.',
    mathSolution: 'Pointer to entire array, not just first element',
    codeSolution: 'int (*ptr)[5] = &arr;',
    hint: 'Parentheses needed: (*ptr)[size]'
  },
  {
    id: 'c_ptr_14',
    topicId: 'c_pointers',
    question: 'Access element using pointer to array.',
    mathSolution: '(*ptr)[i] gives arr[i]',
    codeSolution: 'int val = (*ptr)[i];',
    hint: 'Dereference then index'
  },
  {
    id: 'c_ptr_15',
    topicId: 'c_pointers',
    question: 'Find sum of array using pointer.',
    mathSolution: 'Add all elements via pointer',
    codeSolution: 'int sum=0; for(int *p=arr; p<arr+n; p++) sum += *p;',
    hint: 'Use pointer as loop variable'
  },

  // ========== POINTERS AND STRINGS (QUESTIONS 16-20) ==========
  {
    id: 'c_ptr_16',
    topicId: 'c_pointers',
    question: 'Declare pointer to string literal.',
    mathSolution: 'Pointer to constant string',
    codeSolution: 'char *str = "Hello";',
    hint: 'String literal is array of chars'
  },
  {
    id: 'c_ptr_17',
    topicId: 'c_pointers',
    question: 'Print string using pointer.',
    mathSolution: 'Traverse char by char',
    codeSolution: 'for(char *p=str; *p!=\'\\0\'; p++) printf("%c", *p);',
    hint: 'Stop at null terminator'
  },
  {
    id: 'c_ptr_18',
    topicId: 'c_pointers',
    question: 'Find string length using pointer.',
    mathSolution: 'Count chars until null',
    codeSolution: 'int len=0; char *p=str; while(*p++) len++;',
    hint: 'Increment pointer and count'
  },
  {
    id: 'c_ptr_19',
    topicId: 'c_pointers',
    question: 'Copy string using pointers.',
    mathSolution: 'Copy src to dest char by char',
    codeSolution: 'char *src="Hello", dest[20], *d=dest; while(*src) *d++ = *src++; *d=\'\\0\';',
    hint: 'Dereference and assign, then increment'
  },
  {
    id: 'c_ptr_20',
    topicId: 'c_pointers',
    question: 'Reverse string using pointers.',
    mathSolution: 'Swap characters from ends',
    codeSolution: 'char *start=str, *end=str+len-1; while(start<end) { char temp=*start; *start++=*end; *end--=temp; }',
    hint: 'Two pointers moving inward'
  },

  // ========== POINTER TO POINTER (QUESTIONS 21-25) ==========
  {
    id: 'c_ptr_21',
    topicId: 'c_pointers',
    question: 'Declare pointer to pointer (double pointer).',
    mathSolution: 'Pointer that stores address of another pointer',
    codeSolution: 'int **pptr;',
    hint: 'Use two asterisks'
  },
  {
    id: 'c_ptr_22',
    topicId: 'c_pointers',
    question: 'Assign address of pointer to double pointer.',
    mathSolution: 'pptr = &ptr',
    codeSolution: 'int x=10, *ptr=&x, **pptr=&ptr;',
    hint: '& on pointer gives address of pointer'
  },
  {
    id: 'c_ptr_23',
    topicId: 'c_pointers',
    question: 'Access value using double pointer.',
    mathSolution: '**pptr gives value of x',
    codeSolution: 'int val = **pptr;',
    hint: 'Dereference twice'
  },
  {
    id: 'c_ptr_24',
    topicId: 'c_pointers',
    question: 'Create 2D array using pointer to pointer.',
    mathSolution: 'Allocate rows and columns dynamically',
    codeSolution: 'int **mat = malloc(rows * sizeof(int*)); for(i=0;i<rows;i++) mat[i]=malloc(cols*sizeof(int));',
    hint: 'First allocate rows, then each row'
  },
  {
    id: 'c_ptr_25',
    topicId: 'c_pointers',
    question: 'Access element in dynamically allocated 2D array.',
    mathSolution: 'mat[i][j] or *(*(mat+i)+j)',
    codeSolution: 'int val = mat[row][col];',
    hint: 'Use double indexing'
  },

  // ========== FUNCTION POINTERS (QUESTIONS 26-30) ==========
  {
    id: 'c_ptr_26',
    topicId: 'c_pointers',
    question: 'Declare pointer to function taking two ints and returning int.',
    mathSolution: 'Function pointer declaration',
    codeSolution: 'int (*funcPtr)(int, int);',
    hint: 'Syntax: return_type (*name)(parameters)'
  },
  {
    id: 'c_ptr_27',
    topicId: 'c_pointers',
    question: 'Assign function address to function pointer.',
    mathSolution: 'funcPtr = add; (add is function)',
    codeSolution: 'int add(int a,int b){return a+b;} funcPtr = add;',
    hint: 'Function name decays to pointer'
  },
  {
    id: 'c_ptr_28',
    topicId: 'c_pointers',
    question: 'Call function using function pointer.',
    mathSolution: 'Use pointer like function name',
    codeSolution: 'int result = funcPtr(5, 3);',
    hint: 'Can use (*funcPtr) or just funcPtr'
  },
  {
    id: 'c_ptr_29',
    topicId: 'c_pointers',
    question: 'Create array of function pointers.',
    mathSolution: 'Multiple functions in array',
    codeSolution: 'int (*ops[])(int,int) = {add, sub, mul, div};',
    hint: 'Array of function pointers'
  },
  {
    id: 'c_ptr_30',
    topicId: 'c_pointers',
    question: 'Pass function pointer as parameter.',
    mathSolution: 'Callback function',
    codeSolution: 'void process(int *arr, int n, int (*func)(int)) { for(i=0;i<n;i++) arr[i]=func(arr[i]); }',
    hint: 'Function pointer parameter'
  },

  // ========== NULL POINTERS (QUESTIONS 31-33) ==========
  {
    id: 'c_ptr_31',
    topicId: 'c_pointers',
    question: 'Initialize pointer to NULL.',
    mathSolution: 'Pointer points to nothing',
    codeSolution: 'int *ptr = NULL;',
    hint: 'NULL is standard macro'
  },
  {
    id: 'c_ptr_32',
    topicId: 'c_pointers',
    question: 'Check if pointer is NULL before dereferencing.',
    mathSolution: 'Safety check to avoid crash',
    codeSolution: 'if(ptr != NULL) { *ptr = 10; }',
    hint: 'Always check for NULL'
  },
  {
    id: 'c_ptr_33',
    topicId: 'c_pointers',
    question: 'Use NULL pointer in conditional.',
    mathSolution: 'NULL evaluates to false',
    codeSolution: 'if(!ptr) { printf("Pointer is NULL"); }',
    hint: '!ptr true when ptr is NULL'
  },

  // ========== VOID POINTERS (QUESTIONS 34-37) ==========
  {
    id: 'c_ptr_34',
    topicId: 'c_pointers',
    question: 'Declare a void pointer (generic pointer).',
    mathSolution: 'Can point to any data type',
    codeSolution: 'void *ptr;',
    hint: 'void* can hold any address'
  },
  {
    id: 'c_ptr_35',
    topicId: 'c_pointers',
    question: 'Assign int address to void pointer.',
    mathSolution: 'No cast needed implicitly',
    codeSolution: 'int x=10; void *ptr = &x;',
    hint: 'void* is compatible with any pointer'
  },
  {
    id: 'c_ptr_36',
    topicId: 'c_pointers',
    question: 'Dereference void pointer after casting.',
    mathSolution: 'Must cast before dereferencing',
    codeSolution: 'int val = *(int*)ptr;',
    hint: 'Cast to appropriate type first'
  },
  {
    id: 'c_ptr_37',
    topicId: 'c_pointers',
    question: 'Use void pointer in generic swap function.',
    mathSolution: 'Swap any type of data',
    codeSolution: 'void swap(void *a, void *b, int size) { char temp[size]; memcpy(temp,a,size); memcpy(a,b,size); memcpy(b,temp,size); }',
    hint: 'Work with bytes'
  },

  // ========== CONSTANT POINTERS (QUESTIONS 38-40) ==========
  {
    id: 'c_ptr_38',
    topicId: 'c_pointers',
    question: 'Declare pointer to constant data.',
    mathSolution: 'Cannot change data via pointer',
    codeSolution: 'const int *ptr = &x;',
    hint: 'const int* means data is const'
  },
  {
    id: 'c_ptr_39',
    topicId: 'c_pointers',
    question: 'Declare constant pointer (pointer itself const).',
    mathSolution: 'Cannot change where pointer points',
    codeSolution: 'int *const ptr = &x;',
    hint: 'int* const means pointer is const'
  },
  {
    id: 'c_ptr_40',
    topicId: 'c_pointers',
    question: 'Declare constant pointer to constant data.',
    mathSolution: 'Neither pointer nor data can change',
    codeSolution: 'const int *const ptr = &x;',
    hint: 'Both const'
  },

  // ========== DYNAMIC MEMORY ALLOCATION (QUESTIONS 41-45) ==========
  {
    id: 'c_ptr_41',
    topicId: 'c_pointers',
    question: 'Allocate memory for one integer using malloc.',
    mathSolution: 'Dynamic memory allocation',
    codeSolution: 'int *ptr = (int*)malloc(sizeof(int));',
    hint: 'malloc returns void*, cast to needed type'
  },
  {
    id: 'c_ptr_42',
    topicId: 'c_pointers',
    question: 'Allocate array of n integers using malloc.',
    mathSolution: 'Array on heap',
    codeSolution: 'int *arr = (int*)malloc(n * sizeof(int));',
    hint: 'Multiply by number of elements'
  },
  {
    id: 'c_ptr_43',
    topicId: 'c_pointers',
    question: 'Allocate and initialize to zero using calloc.',
    mathSolution: 'Zero-initialized memory',
    codeSolution: 'int *arr = (int*)calloc(n, sizeof(int));',
    hint: 'calloc takes count and size'
  },
  {
    id: 'c_ptr_44',
    topicId: 'c_pointers',
    question: 'Resize previously allocated memory using realloc.',
    mathSolution: 'Change size of memory block',
    codeSolution: 'arr = (int*)realloc(arr, newSize * sizeof(int));',
    hint: 'May move to new location'
  },
  {
    id: 'c_ptr_45',
    topicId: 'c_pointers',
    question: 'Free dynamically allocated memory.',
    mathSolution: 'Prevent memory leak',
    codeSolution: 'free(ptr);',
    hint: 'Always free what you malloc'
  },

  // ========== POINTER TO STRUCTURES (QUESTIONS 46-50) ==========
  {
    id: 'c_ptr_46',
    topicId: 'c_pointers',
    question: 'Declare pointer to structure.',
    mathSolution: 'Pointer to struct variable',
    codeSolution: 'struct Student *ptr;',
    hint: 'Use struct tag with *'
  },
  {
    id: 'c_ptr_47',
    topicId: 'c_pointers',
    question: 'Access structure members using pointer.',
    mathSolution: 'Use arrow operator ->',
    codeSolution: 'ptr->age = 20;',
    hint: 'ptr->member equivalent to (*ptr).member'
  },
  {
    id: 'c_ptr_48',
    topicId: 'c_pointers',
    question: 'Allocate structure dynamically.',
    mathSolution: 'Create struct on heap',
    codeSolution: 'struct Student *s = (struct Student*)malloc(sizeof(struct Student));',
    hint: 'sizeof(struct) includes all members'
  },
  {
    id: 'c_ptr_49',
    topicId: 'c_pointers',
    question: 'Create linked list node using pointer.',
    mathSolution: 'Node with data and next pointer',
    codeSolution: 'struct Node { int data; struct Node *next; }; struct Node *head = NULL;',
    hint: 'Self-referential structure'
  },
  {
    id: 'c_ptr_50',
    topicId: 'c_pointers',
    question: 'Traverse linked list using pointers.',
    mathSolution: 'Move through list via next pointers',
    codeSolution: 'for(struct Node *curr=head; curr!=NULL; curr=curr->next) printf("%d ",curr->data);',
    hint: 'Follow next until NULL'
  },

  // ========== POINTERS AND FUNCTIONS (QUESTIONS 51-55) ==========
  {
    id: 'c_ptr_51',
    topicId: 'c_pointers',
    question: 'Pass pointer to function to modify original variable.',
    mathSolution: 'Call by reference simulation',
    codeSolution: 'void increment(int *p) { (*p)++; } increment(&x);',
    hint: 'Function receives address'
  },
  {
    id: 'c_ptr_52',
    topicId: 'c_pointers',
    question: 'Return pointer from function.',
    mathSolution: 'Function returns address',
    codeSolution: 'int* findMax(int *arr, int n) { return &arr[index]; }',
    hint: 'Return address, not local variable'
  },
  {
    id: 'c_ptr_53',
    topicId: 'c_pointers',
    question: 'Return dynamically allocated array from function.',
    mathSolution: 'Create array in function and return',
    codeSolution: 'int* createArray(int n) { int *arr=malloc(n*sizeof(int)); return arr; }',
    hint: 'Memory on heap survives function return'
  },
  {
    id: 'c_ptr_54',
    topicId: 'c_pointers',
    question: 'Swap two numbers using pointers.',
    mathSolution: 'Exchange values via pointers',
    codeSolution: 'void swap(int *a, int *b) { int temp=*a; *a=*b; *b=temp; }',
    hint: 'Work with addresses'
  },
  {
    id: 'c_ptr_55',
    topicId: 'c_pointers',
    question: 'Pass array to function using pointer.',
    mathSolution: 'Array decays to pointer',
    codeSolution: 'void process(int *arr, int n) { }',
    hint: 'Pass base address and size'
  },

  // ========== POINTER ARRAYS (QUESTIONS 56-59) ==========
  {
    id: 'c_ptr_56',
    topicId: 'c_pointers',
    question: 'Create array of pointers to integers.',
    mathSolution: 'Each element holds address',
    codeSolution: 'int *ptrArr[10];',
    hint: 'Array of int*'
  },
  {
    id: 'c_ptr_57',
    topicId: 'c_pointers',
    question: 'Store addresses of variables in pointer array.',
    mathSolution: 'Pointers to different variables',
    codeSolution: 'int a,b,c; int *ptrs[] = {&a, &b, &c};',
    hint: 'Initialize with addresses'
  },
  {
    id: 'c_ptr_58',
    topicId: 'c_pointers',
    question: 'Create array of strings using pointer array.',
    mathSolution: 'Array of char pointers',
    codeSolution: 'char *fruits[] = {"Apple", "Banana", "Orange"};',
    hint: 'Each points to string literal'
  },
  {
    id: 'c_ptr_59',
    topicId: 'c_pointers',
    question: 'Sort array of strings using pointer array.',
    mathSolution: 'Rearrange pointers, not strings',
    codeSolution: 'for(i=0;i<n-1;i++) for(j=i+1;j<n;j++) if(strcmp(arr[i],arr[j])>0) swap(&arr[i],&arr[j]);',
    hint: 'Swap pointers, not actual strings'
  },

  // ========== WILD AND DANGLING POINTERS (QUESTIONS 60-62) ==========
  {
    id: 'c_ptr_60',
    topicId: 'c_pointers',
    question: 'Identify wild pointer (uninitialized pointer).',
    mathSolution: 'Pointer with garbage address',
    codeSolution: 'int *ptr; // wild pointer - don\'t use',
    hint: 'Always initialize pointers'
  },
  {
    id: 'c_ptr_61',
    topicId: 'c_pointers',
    question: 'Create dangling pointer (freed memory).',
    mathSolution: 'Pointer to freed memory',
    codeSolution: 'int *ptr = malloc(sizeof(int)); free(ptr); // ptr now dangling',
    hint: 'Set to NULL after free'
  },
  {
    id: 'c_ptr_62',
    topicId: 'c_pointers',
    question: 'Avoid dangling pointer by setting to NULL.',
    mathSolution: 'Safe practice after free',
    codeSolution: 'free(ptr); ptr = NULL;',
    hint: 'NULL pointer is safe to use'
  },

  // ========== POINTER ALIGNMENT (QUESTIONS 63-64) ==========
  {
    id: 'c_ptr_63',
    topicId: 'c_pointers',
    question: 'Explain near pointer concept (historical).',
    mathSolution: '16-bit offset within segment',
    codeSolution: '// near pointer - 16-bit offset',
    hint: 'Used in segmented memory models'
  },
  {
    id: 'c_ptr_64',
    topicId: 'c_pointers',
    question: 'Check if pointer is aligned to specific boundary.',
    mathSolution: 'Address divisible by alignment',
    codeSolution: 'if(((uintptr_t)ptr % alignment) == 0) { }',
    hint: 'Cast to uintptr_t for arithmetic'
  },

  // ========== POINTER TO CONST VS CONST POINTER (QUESTIONS 65-67) ==========
  {
    id: 'c_ptr_65',
    topicId: 'c_pointers',
    question: 'Modify data through pointer to const - error.',
    mathSolution: 'Cannot modify const data',
    codeSolution: 'const int *p = &x; *p = 10; // ERROR',
    hint: 'Read-only location'
  },
  {
    id: 'c_ptr_66',
    topicId: 'c_pointers',
    question: 'Modify const pointer itself - error.',
    mathSolution: 'Cannot change pointer value',
    codeSolution: 'int *const p = &x; p = &y; // ERROR',
    hint: 'Pointer itself is const'
  },
  {
    id: 'c_ptr_67',
    topicId: 'c_pointers',
    question: 'Distinguish pointer to array vs array of pointers.',
    mathSolution: 'int (*p)[5] vs int *p[5]',
    codeSolution: 'int (*p)[5]; // pointer to array of 5 ints\nint *p[5]; // array of 5 int pointers',
    hint: 'Parentheses matter'
  },

  // ========== FUNCTION RETURNING POINTER (QUESTIONS 68-69) ==========
  {
    id: 'c_ptr_68',
    topicId: 'c_pointers',
    question: 'Write function returning pointer to first even number.',
    mathSolution: 'Search and return address',
    codeSolution: 'int* findEven(int *arr, int n) { for(int i=0;i<n;i++) if(arr[i]%2==0) return &arr[i]; return NULL; }',
    hint: 'Return address or NULL'
  },
  {
    id: 'c_ptr_69',
    topicId: 'c_pointers',
    question: 'Distinguish pointer to function vs function returning pointer.',
    mathSolution: 'int (*f)() vs int* f()',
    codeSolution: 'int (*f)(); // pointer to function\nint* f(); // function returning int*',
    hint: 'Parentheses around *f'
  },

  // ========== COMPLEX POINTER DECLARATIONS (QUESTIONS 70-71) ==========
  {
    id: 'c_ptr_70',
    topicId: 'c_pointers',
    question: 'Declare pointer to array of 10 function pointers.',
    mathSolution: 'Complex declaration',
    codeSolution: 'int (*(*ptr)[10])(int, int);',
    hint: 'Work from inside out'
  },
  {
    id: 'c_ptr_71',
    topicId: 'c_pointers',
    question: 'Declare function returning pointer to array of 5 ints.',
    mathSolution: 'Function returning array pointer',
    codeSolution: 'int (*func())[5];',
    hint: 'Return type is pointer to array'
  },

  // ========== POINTER ARITHMETIC WITH DIFFERENT TYPES (QUESTIONS 72-73) ==========
  {
    id: 'c_ptr_72',
    topicId: 'c_pointers',
    question: 'Increment char pointer vs int pointer.',
    mathSolution: 'char* moves 1 byte, int* moves 4 bytes',
    codeSolution: 'char *cp; cp++; // +1 byte\nint *ip; ip++; // +4 bytes',
    hint: 'Pointer arithmetic scales by type size'
  },
  {
    id: 'c_ptr_73',
    topicId: 'c_pointers',
    question: 'Subtract two pointers to find array length.',
    mathSolution: 'Difference gives element count',
    codeSolution: 'int len = end_ptr - start_ptr;',
    hint: 'Works within same array'
  },

  // ========== POINTER AND CONST CORRECTNESS (QUESTIONS 74-75) ==========
  {
    id: 'c_ptr_74',
    topicId: 'c_pointers',
    question: 'Pass const pointer to function expecting non-const.',
    mathSolution: 'Compiler warning/error',
    codeSolution: 'void func(int *p); const int *cp; func(cp); // warning',
    hint: 'Discards const qualifier'
  },
  {
    id: 'c_ptr_75',
    topicId: 'c_pointers',
    question: 'Use restrict keyword with pointer (C99).',
    mathSolution: 'No aliasing optimization',
    codeSolution: 'void func(int *restrict p, int *restrict q) { }',
    hint: 'Promise no overlap'
  },

  // ========== POINTER I/O (QUESTIONS 76-77) ==========
  {
    id: 'c_ptr_76',
    topicId: 'c_pointers',
    question: 'Read integer into dynamically allocated memory.',
    mathSolution: 'Use pointer with scanf',
    codeSolution: 'int *p = malloc(sizeof(int)); scanf("%d", p);',
    hint: 'p already holds address'
  },
  {
    id: 'c_ptr_77',
    topicId: 'c_pointers',
    question: 'Print string using pointer with puts.',
    mathSolution: 'Pass pointer to puts',
    codeSolution: 'char *str = "Hello"; puts(str);',
    hint: 'puts expects char*'
  },

  // ========== POINTER TO POINTER APPLICATIONS (QUESTIONS 78-79) ==========
  {
    id: 'c_ptr_78',
    topicId: 'c_pointers',
    question: 'Modify pointer in function using pointer to pointer.',
    mathSolution: 'Change where pointer points',
    codeSolution: 'void allocate(int **p, int size) { *p = malloc(size); } int *ptr; allocate(&ptr, 10);',
    hint: 'Pass address of pointer'
  },
  {
    id: 'c_ptr_79',
    topicId: 'c_pointers',
    question: 'Implement 2D array using pointer to pointer.',
    mathSolution: 'Dynamic matrix',
    codeSolution: 'int **mat = malloc(rows * sizeof(int*)); for(i=0;i<rows;i++) mat[i]=malloc(cols*sizeof(int));',
    hint: 'Allocate rows first'
  },

  // ========== POINTER AND MEMORY LAYOUT (QUESTIONS 80-81) ==========
  {
    id: 'c_ptr_80',
    topicId: 'c_pointers',
    question: 'Find offset of structure member using pointer.',
    mathSolution: 'Use offsetof macro or pointer difference',
    codeSolution: 'int offset = (char*)&s.member - (char*)&s;',
    hint: 'Cast to char* for byte offset'
  },
  {
    id: 'c_ptr_81',
    topicId: 'c_pointers',
    question: 'Check system endianness using pointer.',
    mathSolution: 'Test if little or big endian',
    codeSolution: 'int x=1; char *c=(char*)&x; if(*c) printf("Little endian"); else printf("Big endian");',
    hint: 'First byte tells the story'
  },

  // ========== POINTER AND UNIONS (QUESTION 82) ==========
  {
    id: 'c_ptr_82',
    topicId: 'c_pointers',
    question: 'Access union members via pointer.',
    mathSolution: 'Same as struct, but memory shared',
    codeSolution: 'union Data *p; p->i = 10;',
    hint: 'Arrow operator works'
  },

  // ========== POINTER CASTING (QUESTIONS 83-84) ==========
  {
    id: 'c_ptr_83',
    topicId: 'c_pointers',
    question: 'Cast int pointer to char pointer to examine bytes.',
    mathSolution: 'View individual bytes of int',
    codeSolution: 'int x=0x12345678; char *c = (char*)&x; for(i=0;i<4;i++) printf("%x ", c[i]);',
    hint: 'See byte representation'
  },
  {
    id: 'c_ptr_84',
    topicId: 'c_pointers',
    question: 'Cast void pointer to appropriate type.',
    mathSolution: 'Generic to specific',
    codeSolution: 'void *vp = &x; int *ip = (int*)vp;',
    hint: 'Explicit cast recommended'
  },

  // ========== POINTER AND VOLATILE (QUESTION 85) ==========
  {
    id: 'c_ptr_85',
    topicId: 'c_pointers',
    question: 'Use volatile with pointer for hardware registers.',
    mathSolution: 'Prevent compiler optimization',
    codeSolution: 'volatile int *reg = (int*)0x4000;',
    hint: 'Volatile means value may change externally'
  },

  // ========== SMART POINTER SIMULATION (QUESTION 86) ==========
  {
    id: 'c_ptr_86',
    topicId: 'c_pointers',
    question: 'Create simple smart pointer using struct.',
    mathSolution: 'Auto-free on scope exit',
    codeSolution: 'typedef struct { int *ptr; } SmartPtr; SmartPtr createPtr() { SmartPtr sp = {malloc(sizeof(int))}; return sp; }',
    hint: 'Simulate with cleanup function'
  },

  // ========== POINTER ARITHMETIC LIMITATIONS (QUESTION 87) ==========
  {
    id: 'c_ptr_87',
    topicId: 'c_pointers',
    question: 'Add two pointers - why illegal?',
    mathSolution: 'Adding addresses meaningless',
    codeSolution: 'int *p, *q; p+q; // ILLEGAL',
    hint: 'Only subtraction allowed'
  },

  // ========== POINTER AND MULTIDIMENSIONAL ARRAYS (QUESTIONS 88-89) ==========
  {
    id: 'c_ptr_88',
    topicId: 'c_pointers',
    question: 'Access 2D array element using pointer.',
    mathSolution: '*(*(arr+i)+j) or *(arr[i]+j)',
    codeSolution: 'int val = *(*(arr + row) + col);',
    hint: 'arr[i][j] equivalent'
  },
  {
    id: 'c_ptr_89',
    topicId: 'c_pointers',
    question: 'Create pointer to 2D array row.',
    mathSolution: 'Pointer to entire row',
    codeSolution: 'int (*rowPtr)[cols] = &arr[row];',
    hint: 'Row pointer type'
  },

  // ========== FUNCTION POINTER CALLBACKS (QUESTION 90) ==========
  {
    id: 'c_ptr_90',
    topicId: 'c_pointers',
    question: 'Implement qsort-style comparator using function pointer.',
    mathSolution: 'Generic sorting callback',
    codeSolution: 'int compare(const void *a, const void *b) { return *(int*)a - *(int*)b; } qsort(arr, n, sizeof(int), compare);',
    hint: 'Cast void* to appropriate type'
  },

  // ========== POINTER TO POINTER FOR LINKED LIST (QUESTION 91) ==========
  {
    id: 'c_ptr_91',
    topicId: 'c_pointers',
    question: 'Use pointer to pointer to modify head of linked list.',
    mathSolution: 'Update head in function',
    codeSolution: 'void insertAtHead(struct Node **head, int data) { struct Node *new = createNode(data); new->next = *head; *head = new; }',
    hint: 'Pass &head to modify head'
  },

  // ========== POINTER AND CONST IN PARAMETERS (QUESTION 92) ==========
  {
    id: 'c_ptr_92',
    topicId: 'c_pointers',
    question: 'Use const pointer parameter to promise no modification.',
    mathSolution: 'Read-only access',
    codeSolution: 'void printArray(const int *arr, int n) { for(i=0;i<n;i++) printf("%d", arr[i]); }',
    hint: 'Data pointed cannot be modified'
  },

  // ========== POINTER ARITHMETIC WITH VOID* (QUESTION 93) ==========
  {
    id: 'c_ptr_93',
    topicId: 'c_pointers',
    question: 'Perform arithmetic on void pointer - compiler extension.',
    mathSolution: 'GCC treats as char*',
    codeSolution: 'void *vp; vp++; // GCC extension, increments by 1',
    hint: 'Not standard C, cast first'
  },

  // ========== POINTER AND ALIGNMENT (QUESTION 94) ==========
  {
    id: 'c_ptr_94',
    topicId: 'c_pointers',
    question: 'Use aligned_alloc for aligned memory.',
    mathSolution: 'Allocate aligned memory',
    codeSolution: 'int *ptr = aligned_alloc(16, 1024);',
    hint: 'Useful for SIMD instructions'
  },

  // ========== POINTER TO INCOMPLETE TYPE (QUESTION 95) ==========
  {
    id: 'c_ptr_95',
    topicId: 'c_pointers',
    question: 'Declare pointer to incomplete structure type.',
    mathSolution: 'Forward declaration',
    codeSolution: 'struct Node; struct Node *head;',
    hint: 'Useful for opaque pointers'
  },

  // ========== FUNCTION POINTER WITH DIFFERENT SIGNATURES (QUESTION 96) ==========
  {
    id: 'c_ptr_96',
    topicId: 'c_pointers',
    question: 'Cast function pointer to different signature.',
    mathSolution: 'Force cast, but risky',
    codeSolution: 'int (*add)(int,int); void (*p)(void) = (void(*)())add;',
    hint: 'Undefined behavior if called wrong'
  },

  // ========== POINTER AND SETJMP/LONGJMP (QUESTION 97) ==========
  {
    id: 'c_ptr_97',
    topicId: 'c_pointers',
    question: 'Use pointer with setjmp/longjmp for non-local goto.',
    mathSolution: 'Save context in jmp_buf',
    codeSolution: 'jmp_buf env; if(setjmp(env)) { /* error */ } else { longjmp(env, 1); }',
    hint: 'Jump across function calls'
  },

  // ========== POINTER AND VARIABLE ARGUMENTS (QUESTION 98) ==========
  {
    id: 'c_ptr_98',
    topicId: 'c_pointers',
    question: 'Use va_list pointer for variable arguments.',
    mathSolution: 'Traverse argument list',
    codeSolution: 'void func(int count, ...) { va_list args; va_start(args,count); for(i=0;i<count;i++) { int val = va_arg(args,int); } va_end(args); }',
    hint: 'va_list is pointer type'
  },

  // ========== POINTER TO FUNCTION WITH VARIABLE ARGUMENTS (QUESTION 99) ==========
  {
    id: 'c_ptr_99',
    topicId: 'c_pointers',
    question: 'Declare pointer to function with variable arguments.',
    mathSolution: 'Function pointer for printf-like functions',
    codeSolution: 'int (*printf_ptr)(const char*, ...) = printf;',
    hint: 'Ellipsis in function pointer'
  },

  // ========== POINTER TO POINTER TO FUNCTION (QUESTION 100) ==========
  {
    id: 'c_ptr_100',
    topicId: 'c_pointers',
    question: 'Declare pointer to pointer to function.',
    mathSolution: 'Double pointer to function',
    codeSolution: 'int (**funcPtrPtr)(int, int);',
    hint: 'Two levels of indirection'
  }
);