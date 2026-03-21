QuizData.questions.push(
  // ========== BASIC MALLOC (QUESTIONS 1-5) ==========
  {
    id: 'c_dyn_1',
    topicId: 'c_dynamic_memory',
    question: 'Allocate memory for a single integer using malloc.',
    mathSolution: 'Dynamically allocate memory for one int',
    codeSolution: 'int *ptr = (int*)malloc(sizeof(int));',
    hint: 'malloc returns void*, cast to int*'
  },
  {
    id: 'c_dyn_2',
    topicId: 'c_dynamic_memory',
    question: 'Allocate array of 10 integers using malloc.',
    mathSolution: 'Create dynamic array of 10 ints',
    codeSolution: 'int *arr = (int*)malloc(10 * sizeof(int));',
    hint: 'Multiply size by number of elements'
  },
  {
    id: 'c_dyn_3',
    topicId: 'c_dynamic_memory',
    question: 'Allocate memory for a float using malloc.',
    mathSolution: 'Dynamic memory for float',
    codeSolution: 'float *fptr = (float*)malloc(sizeof(float));',
    hint: 'sizeof(float) gives size of float'
  },
  {
    id: 'c_dyn_4',
    topicId: 'c_dynamic_memory',
    question: 'Allocate memory for a character using malloc.',
    mathSolution: 'Dynamic memory for char',
    codeSolution: 'char *cptr = (char*)malloc(sizeof(char));',
    hint: 'sizeof(char) is 1 byte'
  },
  {
    id: 'c_dyn_5',
    topicId: 'c_dynamic_memory',
    question: 'Allocate memory for a double using malloc.',
    mathSolution: 'Dynamic memory for double',
    codeSolution: 'double *dptr = (double*)malloc(sizeof(double));',
    hint: 'sizeof(double) is usually 8 bytes'
  },

  // ========== CALLOC (QUESTIONS 6-9) ==========
  {
    id: 'c_dyn_6',
    topicId: 'c_dynamic_memory',
    question: 'Allocate and zero-initialize array of 10 ints using calloc.',
    mathSolution: 'Dynamic array initialized to 0',
    codeSolution: 'int *arr = (int*)calloc(10, sizeof(int));',
    hint: 'calloc takes count and size, initializes to zero'
  },
  {
    id: 'c_dyn_7',
    topicId: 'c_dynamic_memory',
    question: 'Allocate memory for 5 floats using calloc.',
    mathSolution: 'Zero-initialized float array',
    codeSolution: 'float *farr = (float*)calloc(5, sizeof(float));',
    hint: 'All elements set to 0.0'
  },
  {
    id: 'c_dyn_8',
    topicId: 'c_dynamic_memory',
    question: 'Compare malloc and calloc for array allocation.',
    mathSolution: 'calloc initializes to zero, malloc doesn\'t',
    codeSolution: 'int *marr = (int*)malloc(10*sizeof(int)); int *carr = (int*)calloc(10, sizeof(int));',
    hint: 'calloc ensures all bits zero'
  },
  {
    id: 'c_dyn_9',
    topicId: 'c_dynamic_memory',
    question: 'Allocate 2D array using calloc for rows and columns.',
    mathSolution: 'Dynamic 2D array initialized to zero',
    codeSolution: 'int **mat = (int**)calloc(rows, sizeof(int*)); for(i=0;i<rows;i++) mat[i] = (int*)calloc(cols, sizeof(int));',
    hint: 'calloc for both levels'
  },

  // ========== REALLOC (QUESTIONS 10-14) ==========
  {
    id: 'c_dyn_10',
    topicId: 'c_dynamic_memory',
    question: 'Resize dynamic array from 10 to 20 integers using realloc.',
    mathSolution: 'Expand array to hold 20 ints',
    codeSolution: 'int *newarr = (int*)realloc(arr, 20 * sizeof(int));',
    hint: 'realloc preserves existing data'
  },
  {
    id: 'c_dyn_11',
    topicId: 'c_dynamic_memory',
    question: 'Shrink dynamic array from 50 to 30 integers using realloc.',
    mathSolution: 'Reduce array size',
    codeSolution: 'arr = (int*)realloc(arr, 30 * sizeof(int));',
    hint: 'Data beyond new size may be lost'
  },
  {
    id: 'c_dyn_12',
    topicId: 'c_dynamic_memory',
    question: 'Handle realloc failure (return NULL).',
    mathSolution: 'Check if realloc succeeded',
    codeSolution: 'int *newarr = (int*)realloc(arr, newsize); if(newarr == NULL) { /* handle error */ } else { arr = newarr; }',
    hint: 'Always check return value'
  },
  {
    id: 'c_dyn_13',
    topicId: 'c_dynamic_memory',
    question: 'Use realloc with NULL pointer (like malloc).',
    mathSolution: 'realloc(NULL, size) same as malloc(size)',
    codeSolution: 'int *arr = (int*)realloc(NULL, 10 * sizeof(int));',
    hint: 'realloc can replace malloc'
  },
  {
    id: 'c_dyn_14',
    topicId: 'c_dynamic_memory',
    question: 'Use realloc to free memory (size 0).',
    mathSolution: 'realloc(ptr, 0) same as free(ptr)',
    codeSolution: 'realloc(ptr, 0); // equivalent to free(ptr)',
    hint: 'Implementation-defined, better to use free()'
  },

  // ========== FREE (QUESTIONS 15-18) ==========
  {
    id: 'c_dyn_15',
    topicId: 'c_dynamic_memory',
    question: 'Free dynamically allocated memory.',
    mathSolution: 'Release memory back to heap',
    codeSolution: 'free(ptr);',
    hint: 'Always free what you malloc'
  },
  {
    id: 'c_dyn_16',
    topicId: 'c_dynamic_memory',
    question: 'Set pointer to NULL after freeing.',
    mathSolution: 'Avoid dangling pointer',
    codeSolution: 'free(ptr); ptr = NULL;',
    hint: 'Prevents accidental reuse'
  },
  {
    id: 'c_dyn_17',
    topicId: 'c_dynamic_memory',
    question: 'Free dynamically allocated 2D array.',
    mathSolution: 'Free each row then rows array',
    codeSolution: 'for(i=0;i<rows;i++) free(mat[i]); free(mat);',
    hint: 'Free in reverse order of allocation'
  },
  {
    id: 'c_dyn_18',
    topicId: 'c_dynamic_memory',
    question: 'Attempt to free NULL pointer - safe.',
    mathSolution: 'free(NULL) does nothing',
    codeSolution: 'free(NULL); // safe operation',
    hint: 'free on NULL is allowed'
  },

  // ========== ERROR HANDLING (QUESTIONS 19-20) ==========
  {
    id: 'c_dyn_19',
    topicId: 'c_dynamic_memory',
    question: 'Check malloc return value for allocation failure.',
    mathSolution: 'Verify memory allocated',
    codeSolution: 'int *ptr = (int*)malloc(1000000); if(ptr == NULL) { printf("Allocation failed"); }',
    hint: 'malloc returns NULL on failure'
  },
  {
    id: 'c_dyn_20',
    topicId: 'c_dynamic_memory',
    question: 'Handle allocation failure gracefully.',
    mathSolution: 'Fallback or cleanup on failure',
    codeSolution: 'int *ptr = malloc(size); if(!ptr) { fprintf(stderr, "Memory error"); exit(1); }',
    hint: 'Exit or return error code'
  },

  // ========== DYNAMIC ARRAYS (QUESTIONS 21-24) ==========
  {
    id: 'c_dyn_21',
    topicId: 'c_dynamic_memory',
    question: 'Create dynamic array and input values.',
    mathSolution: 'Read n values into dynamic array',
    codeSolution: 'int *arr = malloc(n * sizeof(int)); for(i=0;i<n;i++) scanf("%d", &arr[i]);',
    hint: 'Access like static array'
  },
  {
    id: 'c_dyn_22',
    topicId: 'c_dynamic_memory',
    question: 'Create dynamic array and calculate sum.',
    mathSolution: 'Sum of elements in dynamic array',
    codeSolution: 'int sum=0; for(i=0;i<n;i++) sum += arr[i];',
    hint: 'Same as static array access'
  },
  {
    id: 'c_dyn_23',
    topicId: 'c_dynamic_memory',
    question: 'Resize array dynamically as user inputs numbers.',
    mathSolution: 'Grow array on demand',
    codeSolution: 'int *arr = NULL; int count=0, num; while(scanf("%d",&num)==1) { arr = realloc(arr, (count+1)*sizeof(int)); arr[count++] = num; }',
    hint: 'realloc each time new number added'
  },
  {
    id: 'c_dyn_24',
    topicId: 'c_dynamic_memory',
    question: 'Create dynamic array of user-specified size.',
    mathSolution: 'Allocate based on runtime input',
    codeSolution: 'int n; printf("Enter size: "); scanf("%d",&n); int *arr = malloc(n * sizeof(int));',
    hint: 'Size determined at runtime'
  },

  // ========== DYNAMIC STRINGS (QUESTIONS 25-29) ==========
  {
    id: 'c_dyn_25',
    topicId: 'c_dynamic_memory',
    question: 'Allocate memory for string of length 100.',
    mathSolution: 'Dynamic char array for string',
    codeSolution: 'char *str = (char*)malloc(100 * sizeof(char));',
    hint: '100 chars, enough for 99 characters + null'
  },
  {
    id: 'c_dyn_26',
    topicId: 'c_dynamic_memory',
    question: 'Create duplicate of a string using dynamic memory.',
    mathSolution: 'strdup implementation',
    codeSolution: 'char *dup = malloc(strlen(orig)+1); if(dup) strcpy(dup, orig);',
    hint: 'Allocate space for string + null terminator'
  },
  {
    id: 'c_dyn_27',
    topicId: 'c_dynamic_memory',
    question: 'Concatenate two strings into new dynamic string.',
    mathSolution: 'Combine str1 and str2 in new memory',
    codeSolution: 'char *result = malloc(strlen(s1)+strlen(s2)+1); strcpy(result, s1); strcat(result, s2);',
    hint: 'Allocate enough for both strings + null'
  },
  {
    id: 'c_dyn_28',
    topicId: 'c_dynamic_memory',
    question: 'Read a line of arbitrary length from stdin into dynamic buffer.',
    mathSolution: 'Grow buffer as needed',
    codeSolution: 'char *buffer = NULL; size_t size = 0; getline(&buffer, &size, stdin);',
    hint: 'getline handles dynamic allocation (POSIX)'
  },
  {
    id: 'c_dyn_29',
    topicId: 'c_dynamic_memory',
    question: 'Implement simple string append function with dynamic memory.',
    mathSolution: 'Append string to existing dynamic string',
    codeSolution: 'char* append(char *s1, char *s2) { char *new = realloc(s1, strlen(s1)+strlen(s2)+1); if(new) strcat(new, s2); return new; }',
    hint: 'realloc to grow and strcat'
  },

  // ========== DYNAMIC STRUCTURES (QUESTIONS 30-34) ==========
  {
    id: 'c_dyn_30',
    topicId: 'c_dynamic_memory',
    question: 'Allocate memory for a structure dynamically.',
    mathSolution: 'Create struct on heap',
    codeSolution: 'struct Student *s = (struct Student*)malloc(sizeof(struct Student));',
    hint: 'sizeof(struct) includes all members'
  },
  {
    id: 'c_dyn_31',
    topicId: 'c_dynamic_memory',
    question: 'Allocate array of structures dynamically.',
    mathSolution: 'Array of structs on heap',
    codeSolution: 'struct Point *points = (struct Point*)malloc(n * sizeof(struct Point));',
    hint: 'Allocate continuous memory for n structs'
  },
  {
    id: 'c_dyn_32',
    topicId: 'c_dynamic_memory',
    question: 'Create linked list node dynamically.',
    mathSolution: 'Node for linked list',
    codeSolution: 'struct Node* createNode(int data) { struct Node *new = malloc(sizeof(struct Node)); new->data = data; new->next = NULL; return new; }',
    hint: 'Allocate node and initialize'
  },
  {
    id: 'c_dyn_33',
    topicId: 'c_dynamic_memory',
    question: 'Allocate structure with pointer member and its data.',
    mathSolution: 'Struct with dynamic string member',
    codeSolution: 'struct Person { char *name; int age; }; struct Person *p = malloc(sizeof(struct Person)); p->name = malloc(50);',
    hint: 'Allocate struct then allocate for pointer'
  },
  {
    id: 'c_dyn_34',
    topicId: 'c_dynamic_memory',
    question: 'Free structure with nested dynamic members.',
    mathSolution: 'Free all allocated parts',
    codeSolution: 'free(p->name); free(p);',
    hint: 'Free in reverse order of allocation'
  },

  // ========== 2D DYNAMIC ARRAYS (QUESTIONS 35-38) ==========
  {
    id: 'c_dyn_35',
    topicId: 'c_dynamic_memory',
    question: 'Create 2D array using pointer to pointer.',
    mathSolution: 'Dynamic matrix with rows and cols',
    codeSolution: 'int **mat = (int**)malloc(rows * sizeof(int*)); for(i=0;i<rows;i++) mat[i] = (int*)malloc(cols * sizeof(int));',
    hint: 'Allocate rows, then each row'
  },
  {
    id: 'c_dyn_36',
    topicId: 'c_dynamic_memory',
    question: 'Create 2D array in contiguous memory (one allocation).',
    mathSolution: 'Single malloc for entire matrix',
    codeSolution: 'int *mat = (int*)malloc(rows * cols * sizeof(int)); // access as mat[i*cols + j]',
    hint: 'Flattened 2D array'
  },
  {
    id: 'c_dyn_37',
    topicId: 'c_dynamic_memory',
    question: 'Create 3D dynamic array.',
    mathSolution: 'Dynamic cube',
    codeSolution: 'int ***cube = malloc(x * sizeof(int**)); for(i=0;i<x;i++) { cube[i]=malloc(y*sizeof(int*)); for(j=0;j<y;j++) cube[i][j]=malloc(z*sizeof(int)); }',
    hint: 'Three levels of allocation'
  },
  {
    id: 'c_dyn_38',
    topicId: 'c_dynamic_memory',
    question: 'Create jagged array (rows of different sizes).',
    mathSolution: 'Each row can have different columns',
    codeSolution: 'int **jagged = malloc(rows * sizeof(int*)); int *sizes = malloc(rows * sizeof(int)); for(i=0;i<rows;i++) { sizes[i] = i+1; jagged[i] = malloc(sizes[i] * sizeof(int)); }',
    hint: 'Different column sizes per row'
  },

  // ========== MEMORY FUNCTIONS (QUESTIONS 39-42) ==========
  {
    id: 'c_dyn_39',
    topicId: 'c_dynamic_memory',
    question: 'Copy memory using memcpy with dynamic arrays.',
    mathSolution: 'Copy src to dest',
    codeSolution: 'int *src = malloc(10*sizeof(int)); int *dest = malloc(10*sizeof(int)); memcpy(dest, src, 10*sizeof(int));',
    hint: 'memcpy needs size in bytes'
  },
  {
    id: 'c_dyn_40',
    topicId: 'c_dynamic_memory',
    question: 'Set all bytes to zero using memset.',
    mathSolution: 'Initialize dynamic memory to 0',
    codeSolution: 'int *arr = malloc(10*sizeof(int)); memset(arr, 0, 10*sizeof(int));',
    hint: 'memset sets each byte to value'
  },
  {
    id: 'c_dyn_41',
    topicId: 'c_dynamic_memory',
    question: 'Compare two dynamic arrays using memcmp.',
    mathSolution: 'Check if arrays equal',
    codeSolution: 'if(memcmp(arr1, arr2, n*sizeof(int)) == 0) printf("Equal");',
    hint: 'memcmp returns 0 if equal'
  },
  {
    id: 'c_dyn_42',
    topicId: 'c_dynamic_memory',
    question: 'Move overlapping memory regions with memmove.',
    mathSolution: 'Safe copy with overlap',
    codeSolution: 'memmove(arr+2, arr, 5*sizeof(int)); // shift right',
    hint: 'memmove handles overlap, memcpy doesn\'t'
  },

  // ========== MEMORY LEAKS AND DEBUGGING (QUESTIONS 43-46) ==========
  {
    id: 'c_dyn_43',
    topicId: 'c_dynamic_memory',
    question: 'Identify memory leak in code.',
    mathSolution: 'Lost pointer to allocated memory',
    codeSolution: 'int *ptr = malloc(100); ptr = malloc(200); // first allocation lost',
    hint: 'Overwriting pointer without free'
  },
  {
    id: 'c_dyn_44',
    topicId: 'c_dynamic_memory',
    question: 'Fix memory leak in function.',
    mathSolution: 'Free before return or assign',
    codeSolution: 'int *ptr = malloc(100); // use ptr free(ptr); return;',
    hint: 'Ensure all paths free memory'
  },
  {
    id: 'c_dyn_45',
    topicId: 'c_dynamic_memory',
    question: 'Use-after-free error detection.',
    mathSolution: 'Accessing freed memory',
    codeSolution: 'free(ptr); *ptr = 10; // error: use after free',
    hint: 'Set to NULL after free'
  },
  {
    id: 'c_dyn_46',
    topicId: 'c_dynamic_memory',
    question: 'Double free error.',
    mathSolution: 'Freeing same memory twice',
    codeSolution: 'free(ptr); free(ptr); // undefined behavior',
    hint: 'Set ptr to NULL after first free'
  },

  // ========== ADVANCED ALLOCATION (QUESTIONS 47-49) ==========
  {
    id: 'c_dyn_47',
    topicId: 'c_dynamic_memory',
    question: 'Use aligned_alloc for aligned memory.',
    mathSolution: 'Memory aligned to specific boundary',
    codeSolution: 'int *ptr = (int*)aligned_alloc(16, 1024); // 16-byte alignment',
    hint: 'Useful for SIMD instructions'
  },
  {
    id: 'c_dyn_48',
    topicId: 'c_dynamic_memory',
    question: 'Create flexible array member in structure.',
    mathSolution: 'Struct with variable-size array',
    codeSolution: 'struct Flex { int len; int data[]; }; struct Flex *f = malloc(sizeof(struct Flex) + n*sizeof(int)); f->len = n;',
    hint: 'Last member with empty brackets'
  },
  {
    id: 'c_dyn_49',
    topicId: 'c_dynamic_memory',
    question: 'Allocate memory for array of pointers to functions.',
    mathSolution: 'Dynamic array of function pointers',
    codeSolution: 'int (**funcs)(int,int) = malloc(n * sizeof(int(*)(int,int)));',
    hint: 'Function pointer syntax'
  },

  // ========== CUSTOM ALLOCATORS (QUESTIONS 50-51) ==========
  {
    id: 'c_dyn_50',
    topicId: 'c_dynamic_memory',
    question: 'Implement simple memory pool allocator.',
    mathSolution: 'Pre-allocate and manage blocks',
    codeSolution: 'char pool[10000]; void *myalloc(size_t s) { static int used=0; if(used+s>10000) return NULL; void *p=pool+used; used+=s; return p; }',
    hint: 'Linear allocator (no free)'
  },
  {
    id: 'c_dyn_51',
    topicId: 'c_dynamic_memory',
    question: 'Implement reference counting for dynamic objects.',
    mathSolution: 'Manual memory management with count',
    codeSolution: 'struct RefCounted { int refs; int data; }; struct RefCounted* create() { struct RefCounted *p=malloc(sizeof(*p)); p->refs=1; return p; } void retain(struct RefCounted *p) { p->refs++; } void release(struct RefCounted *p) { if(--p->refs==0) free(p); }',
    hint: 'Increment/decrement ref count'
  },

  // ========== FILE OPERATIONS WITH DYNAMIC MEMORY (QUESTIONS 52-54) ==========
  {
    id: 'c_dyn_52',
    topicId: 'c_dynamic_memory',
    question: 'Read entire file into dynamically allocated buffer.',
    mathSolution: 'Load file content into memory',
    codeSolution: 'fseek(fp,0,SEEK_END); long size=ftell(fp); rewind(fp); char *buffer=malloc(size+1); fread(buffer,1,size,fp); buffer[size]=0;',
    hint: 'Get file size first, then allocate'
  },
  {
    id: 'c_dyn_53',
    topicId: 'c_dynamic_memory',
    question: 'Read file lines into dynamic array of strings.',
    mathSolution: 'Store each line in dynamic array',
    codeSolution: 'char **lines = NULL; int count=0; char line[1000]; while(fgets(line,1000,fp)) { lines = realloc(lines, (count+1)*sizeof(char*)); lines[count] = malloc(strlen(line)+1); strcpy(lines[count++], line); }',
    hint: 'realloc for pointer array, malloc for each line'
  },
  {
    id: 'c_dyn_54',
    topicId: 'c_dynamic_memory',
    question: 'Write dynamic array to binary file.',
    mathSolution: 'Save array to file',
    codeSolution: 'fwrite(arr, sizeof(int), n, fp);',
    hint: 'fwrite entire array in one call'
  },

  // ========== DATA STRUCTURES (QUESTIONS 55-57) ==========
  {
    id: 'c_dyn_55',
    topicId: 'c_dynamic_memory',
    question: 'Implement dynamic stack using realloc.',
    mathSolution: 'Stack that grows as needed',
    codeSolution: 'typedef struct { int *data; int top; int capacity; } Stack; void push(Stack *s, int val) { if(s->top >= s->capacity) { s->capacity = s->capacity? s->capacity*2 : 2; s->data = realloc(s->data, s->capacity*sizeof(int)); } s->data[s->top++] = val; }',
    hint: 'Double capacity when full'
  },
  {
    id: 'c_dyn_56',
    topicId: 'c_dynamic_memory',
    question: 'Implement dynamic queue using circular buffer.',
    mathSolution: 'Queue with dynamic resizing',
    codeSolution: 'typedef struct { int *data; int head,tail,size,capacity; } Queue; void enqueue(Queue *q, int val) { if(q->size==q->capacity) { /* resize */ } q->data[q->tail]=val; q->tail=(q->tail+1)%q->capacity; q->size++; }',
    hint: 'Resize when full'
  },
  {
    id: 'c_dyn_57',
    topicId: 'c_dynamic_memory',
    question: 'Create dynamic array list (vector) implementation.',
    mathSolution: 'C version of C++ vector',
    codeSolution: 'typedef struct { int *items; int count; int capacity; } Vector; void add(Vector *v, int item) { if(v->count >= v->capacity) { v->capacity = v->capacity ? v->capacity*2 : 4; v->items = realloc(v->items, v->capacity*sizeof(int)); } v->items[v->count++] = item; }',
    hint: 'Amortized constant time insertion'
  },

  // ========== STRING OPERATIONS (QUESTIONS 58-60) ==========
  {
    id: 'c_dyn_58',
    topicId: 'c_dynamic_memory',
    question: 'Split string into dynamic array of substrings.',
    mathSolution: 'Tokenize string',
    codeSolution: 'char **split(char *s, char delim) { char **result = NULL; int count=0; char *p=strtok(s,&delim); while(p) { result=realloc(result,(count+1)*sizeof(char*)); result[count]=malloc(strlen(p)+1); strcpy(result[count++],p); p=strtok(NULL,&delim); } return result; }',
    hint: 'Use strtok and dynamic arrays'
  },
  {
    id: 'c_dyn_59',
    topicId: 'c_dynamic_memory',
    question: 'Implement sprintf with dynamic allocation.',
    mathSolution: 'asprintf equivalent',
    codeSolution: 'char *str; int len = snprintf(NULL,0,"%d + %d = %d",a,b,a+b); str = malloc(len+1); sprintf(str,"%d + %d = %d",a,b,a+b);',
    hint: 'Use snprintf to get required size'
  },
  {
    id: 'c_dyn_60',
    topicId: 'c_dynamic_memory',
    question: 'Dynamically build string by concatenating.',
    mathSolution: 'Efficient string building',
    codeSolution: 'char *buildString(char *parts[], int n) { int total=0; for(i=0;i<n;i++) total+=strlen(parts[i]); char *result=malloc(total+1); result[0]=0; for(i=0;i<n;i++) strcat(result,parts[i]); return result; }',
    hint: 'Calculate total length first'
  },

  // ========== MEMORY ALIGNMENT (QUESTIONS 61-62) ==========
  {
    id: 'c_dyn_61',
    topicId: 'c_dynamic_memory',
    question: 'Ensure proper alignment for structure with special requirements.',
    mathSolution: 'Aligned memory for struct',
    codeSolution: 'struct alignas(16) Vector { float x,y,z,w; }; struct Vector *v = aligned_alloc(16, sizeof(struct Vector));',
    hint: 'aligned_alloc for specific alignment'
  },
  {
    id: 'c_dyn_62',
    topicId: 'c_dynamic_memory',
    question: 'Find alignment of allocated memory.',
    mathSolution: 'Check address alignment',
    codeSolution: 'int *ptr = malloc(100); if(((uintptr_t)ptr % 16) == 0) printf("16-byte aligned");',
    hint: 'Cast to uintptr_t for arithmetic'
  },

  // ========== OBJECT POOLS (QUESTIONS 63-64) ==========
  {
    id: 'c_dyn_63',
    topicId: 'c_dynamic_memory',
    question: 'Implement fixed-size object pool.',
    mathSolution: 'Reuse objects to avoid fragmentation',
    codeSolution: 'typedef struct { int data; char used; } Object; Object *pool = malloc(100 * sizeof(Object)); Object* allocObj() { for(i=0;i<100;i++) if(!pool[i].used) { pool[i].used=1; return &pool[i]; } return NULL; }',
    hint: 'Pre-allocate and track usage'
  },
  {
    id: 'c_dyn_64',
    topicId: 'c_dynamic_memory',
    question: 'Implement free list allocator.',
    mathSolution: 'Linked list of free blocks',
    codeSolution: 'struct Block { size_t size; struct Block *next; }; struct Block *freeList = NULL; void* myalloc(size_t s) { /* find block in free list */ }',
    hint: 'Maintain list of freed blocks'
  },

  // ========== ADVANCED DATA STRUCTURES (QUESTIONS 65-67) ==========
  {
    id: 'c_dyn_65',
    topicId: 'c_dynamic_memory',
    question: 'Create dynamic hash table with chaining.',
    mathSolution: 'Hash table that can grow',
    codeSolution: 'typedef struct Node { int key; int value; struct Node *next; } Node; Node **table = calloc(size, sizeof(Node*));',
    hint: 'Array of linked lists'
  },
  {
    id: 'c_dyn_66',
    topicId: 'c_dynamic_memory',
    question: 'Implement dynamic binary tree node allocation.',
    mathSolution: 'Tree nodes from heap',
    codeSolution: 'struct TreeNode* createNode(int val) { struct TreeNode *n = malloc(sizeof(*n)); n->val=val; n->left=n->right=NULL; return n; }',
    hint: 'Each node individually allocated'
  },
  {
    id: 'c_dyn_67',
    topicId: 'c_dynamic_memory',
    question: 'Free entire binary tree recursively.',
    mathSolution: 'Post-order deletion',
    codeSolution: 'void freeTree(struct TreeNode *root) { if(!root) return; freeTree(root->left); freeTree(root->right); free(root); }',
    hint: 'Free children first, then root'
  },

  // ========== MULTI-DIMENSIONAL DYNAMIC ARRAYS (QUESTIONS 68-69) ==========
  {
    id: 'c_dyn_68',
    topicId: 'c_dynamic_memory',
    question: 'Create 3D array with one malloc call.',
    mathSolution: 'Contiguous 3D array',
    codeSolution: 'int *arr = malloc(x * y * z * sizeof(int)); // access arr[i*y*z + j*z + k]',
    hint: 'Calculate linear index'
  },
  {
    id: 'c_dyn_69',
    topicId: 'c_dynamic_memory',
    question: 'Create triangular matrix (half of square).',
    mathSolution: 'Only allocate needed elements',
    codeSolution: 'int *tri = malloc(n*(n+1)/2 * sizeof(int)); // index(i,j) = i*(i+1)/2 + j',
    hint: 'Index calculation for triangular'
  },

  // ========== MEMORY DEBUGGING UTILITIES (QUESTIONS 70-71) ==========
  {
    id: 'c_dyn_70',
    topicId: 'c_dynamic_memory',
    question: 'Implement simple memory leak detector.',
    mathSolution: 'Track allocations and frees',
    codeSolution: 'typedef struct { void *ptr; size_t size; const char *file; int line; } Alloc; Alloc allocs[1000]; int allocCount=0; void* trackedMalloc(size_t s, const char *f, int l) { void *p=malloc(s); allocs[allocCount++]=(Alloc){p,s,f,l}; return p; }',
    hint: 'Store allocation info'
  },
  {
    id: 'c_dyn_71',
    topicId: 'c_dynamic_memory',
    question: 'Add guard bytes to detect buffer overflows.',
    mathSolution: 'Protect allocated memory',
    codeSolution: 'void* guardedMalloc(size_t s) { char *p = malloc(s+8); strcpy(p,"GUARD"); memcpy(p+s+4,"GUARD",5); return p+4; } void guardedFree(void *p) { char *real = (char*)p-4; if(memcmp(real,"GUARD",4)!=0) printf("Underflow!"); if(memcmp(real+4+s,"GUARD",5)!=0) printf("Overflow!"); free(real); }',
    hint: 'Add sentinels around user data'
  },

  // ========== MEMORY ALLOCATION STRATEGIES (QUESTIONS 72-73) ==========
  {
    id: 'c_dyn_72',
    topicId: 'c_dynamic_memory',
    question: 'Implement first-fit allocation strategy.',
    mathSolution: 'First block that fits',
    codeSolution: 'typedef struct Block { size_t size; int free; struct Block *next; } Block; Block *firstFit(size_t s) { for(Block *b=freeList; b; b=b->next) if(b->free && b->size >= s) return b; return NULL; }',
    hint: 'Scan list for first suitable block'
  },
  {
    id: 'c_dyn_73',
    topicId: 'c_dynamic_memory',
    question: 'Implement best-fit allocation strategy.',
    mathSolution: 'Smallest block that fits',
    codeSolution: 'Block *bestFit(size_t s) { Block *best=NULL; size_t minDiff=~0; for(Block *b=freeList; b; b=b->next) if(b->free && b->size>=s && b->size-s < minDiff) { best=b; minDiff=b->size-s; } return best; }',
    hint: 'Find block with smallest leftover'
  },

  // ========== SHARED MEMORY (QUESTIONS 74-75) ==========
  {
    id: 'c_dyn_74',
    topicId: 'c_dynamic_memory',
    question: 'Allocate shared memory using mmap.',
    mathSolution: 'Memory shared between processes',
    codeSolution: '#include <sys/mman.h> int *shared = mmap(NULL, 1024, PROT_READ|PROT_WRITE, MAP_SHARED|MAP_ANONYMOUS, -1, 0);',
    hint: 'MAP_SHARED for interprocess'
  },
  {
    id: 'c_dyn_75',
    topicId: 'c_dynamic_memory',
    question: 'Create memory-mapped file.',
    mathSolution: 'Map file to memory',
    codeSolution: 'int fd = open("file", O_RDWR); char *map = mmap(0, size, PROT_READ|PROT_WRITE, MAP_SHARED, fd, 0);',
    hint: 'File content accessible as memory'
  },

  // ========== CUSTOM ALLOCATORS (QUESTIONS 76-77) ==========
  {
    id: 'c_dyn_76',
    topicId: 'c_dynamic_memory',
    question: 'Implement arena allocator (region-based).',
    mathSolution: 'Allocate from large region',
    codeSolution: 'typedef struct { char *start; char *current; size_t size; } Arena; void* arenaAlloc(Arena *a, size_t s) { if(a->current + s > a->start + a->size) return NULL; void *p = a->current; a->current += s; return p; }',
    hint: 'Bump pointer allocator'
  },
  {
    id: 'c_dyn_77',
    topicId: 'c_dynamic_memory',
    question: 'Implement pool allocator for fixed-size objects.',
    mathSolution: 'Pre-allocated blocks of same size',
    codeSolution: 'typedef struct { char *blocks; int blockSize; int total; int used; } Pool; void* poolAlloc(Pool *p) { if(p->used >= p->total) return NULL; return p->blocks + (p->used++) * p->blockSize; }',
    hint: 'Simple bump with fixed size'
  },

  // ========== MEMORY OPTIMIZATION (QUESTIONS 78-79) ==========
  {
    id: 'c_dyn_78',
    topicId: 'c_dynamic_memory',
    question: 'Implement memory compression for sparse data.',
    mathSolution: 'Only store non-zero elements',
    codeSolution: 'typedef struct { int index; int value; } SparseElement; SparseElement *sparse = malloc(nnz * sizeof(SparseElement));',
    hint: 'Coordinate list (COO) format'
  },
  {
    id: 'c_dyn_79',
    topicId: 'c_dynamic_memory',
    question: 'Implement copy-on-write for memory sharing.',
    mathSolution: 'Share until modified',
    codeSolution: 'typedef struct { int *data; int *refs; } COW; COW* createCow(int size) { COW *c=malloc(sizeof(*c)); c->data=calloc(size,sizeof(int)); c->refs=malloc(sizeof(int)); *c->refs=1; return c; } COW* cloneCow(COW *src) { (*src->refs)++; return src; }',
    hint: 'Reference count shared data'
  },

  // ========== REAL-TIME MEMORY (QUESTION 80) ==========
  {
    id: 'c_dyn_80',
    topicId: 'c_dynamic_memory',
    question: 'Implement fixed-size allocator for real-time systems.',
    mathSolution: 'No fragmentation, deterministic',
    codeSolution: 'typedef struct { char blocks[100][64]; char used[100]; } FixedAlloc; void* fixedAlloc(FixedAlloc *f) { for(i=0;i<100;i++) if(!f->used[i]) { f->used[i]=1; return f->blocks[i]; } return NULL; }',
    hint: 'Pre-allocated fixed-size blocks'
  },

  // ========== THREAD-SAFE MEMORY (QUESTIONS 81-82) ==========
  {
    id: 'c_dyn_81',
    topicId: 'c_dynamic_memory',
    question: 'Implement thread-safe malloc wrapper with mutex.',
    mathSolution: 'Protect malloc with lock',
    codeSolution: 'static pthread_mutex_t lock = PTHREAD_MUTEX_INITIALIZER; void* ts_malloc(size_t s) { pthread_mutex_lock(&lock); void *p = malloc(s); pthread_mutex_unlock(&lock); return p; }',
    hint: 'Mutex around allocation'
  },
  {
    id: 'c_dyn_82',
    topicId: 'c_dynamic_memory',
    question: 'Create thread-local storage using dynamic memory.',
    mathSolution: 'Each thread gets own copy',
    codeSolution: '__thread int *tls_ptr = NULL; void init_tls() { tls_ptr = malloc(100 * sizeof(int)); }',
    hint: '__thread keyword for TLS'
  },

  // ========== MEMORY STATISTICS (QUESTIONS 83-84) ==========
  {
    id: 'c_dyn_83',
    topicId: 'c_dynamic_memory',
    question: 'Track total allocated memory.',
    mathSolution: 'Keep running total of allocations',
    codeSolution: 'static size_t totalAlloc = 0; void* trackedMalloc(size_t s) { void *p = malloc(s); if(p) totalAlloc += s; return p; } void trackedFree(void *p, size_t s) { free(p); totalAlloc -= s; }',
    hint: 'Increment on alloc, decrement on free'
  },
  {
    id: 'c_dyn_84',
    topicId: 'c_dynamic_memory',
    question: 'Find largest allocated block.',
    mathSolution: 'Scan for maximum size',
    codeSolution: 'size_t maxBlock = 0; for(Alloc *a=allocs; a<allocs+count; a++) if(a->size > maxBlock) maxBlock = a->size;',
    hint: 'Track allocation sizes'
  },

  // ========== ERROR INJECTION (QUESTION 85) ==========
  {
    id: 'c_dyn_85',
    topicId: 'c_dynamic_memory',
    question: 'Implement malloc that fails on nth call for testing.',
    mathSolution: 'Simulate allocation failures',
    codeSolution: 'static int callCount = 0; void* testMalloc(size_t s) { callCount++; if(callCount == 5) return NULL; return malloc(s); }',
    hint: 'Count calls and fail at specific'
  },

  // ========== MEMORY MAPPING (QUESTION 86) ==========
  {
    id: 'c_dyn_86',
    topicId: 'c_dynamic_memory',
    question: 'Allocate huge page memory using mmap.',
    mathSolution: 'Use large pages for performance',
    codeSolution: 'void *ptr = mmap(NULL, 2*1024*1024, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS|MAP_HUGETLB, -1, 0);',
    hint: 'MAP_HUGETLB for huge pages'
  },

  // ========== MEMORY BARRIERS (QUESTION 87) ==========
  {
    id: 'c_dyn_87',
    topicId: 'c_dynamic_memory',
    question: 'Use memory barriers with shared dynamic memory.',
    mathSolution: 'Ensure memory visibility',
    codeSolution: 'int *flag = malloc(sizeof(int)); *flag = 0; // thread 1: *data = 42; __sync_synchronize(); *flag = 1; // thread 2: while(*flag == 0); __sync_synchronize(); use(*data);',
    hint: 'Barriers prevent reordering'
  },

  // ========== PERSISTENT MEMORY (QUESTION 88) ==========
  {
    id: 'c_dyn_88',
    topicId: 'c_dynamic_memory',
    question: 'Create persistent memory using file mapping.',
    mathSolution: 'Memory that survives program',
    codeSolution: 'int fd = open("data", O_CREAT|O_RDWR, 0666); ftruncate(fd, 1024); void *pmem = mmap(NULL, 1024, PROT_READ|PROT_WRITE, MAP_SHARED, fd, 0);',
    hint: 'File-backed memory mapping'
  },

  // ========== NUMA MEMORY (QUESTION 89) ==========
  {
    id: 'c_dyn_89',
    topicId: 'c_dynamic_memory',
    question: 'Allocate memory on specific NUMA node.',
    mathSolution: 'NUMA-aware allocation',
    codeSolution: '#include <numa.h> void *ptr = numa_alloc_onnode(1024, 1);',
    hint: 'Use libnuma for NUMA control'
  },

  // ========== MEMORY COMPRESSION (QUESTION 90) ==========
  {
    id: 'c_dyn_90',
    topicId: 'c_dynamic_memory',
    question: 'Implement simple memory compression with run-length encoding.',
    mathSolution: 'Compress repeated values',
    codeSolution: 'typedef struct { int value; int count; } RLE; RLE *compress(int *arr, int n, int *outLen) { RLE *rle = malloc(n * sizeof(RLE)); int idx=0; for(i=0;i<n;i++) { int count=1; while(i+1<n && arr[i+1]==arr[i]) { count++; i++; } rle[idx].value=arr[i]; rle[idx++].count=count; } *outLen=idx; return realloc(rle, idx*sizeof(RLE)); }',
    hint: 'Store value and run length'
  },

  // ========== MEMORY DEDUPLICATION (QUESTION 91) ==========
  {
    id: 'c_dyn_91',
    topicId: 'c_dynamic_memory',
    question: 'Implement page deduplication using hash table.',
    mathSolution: 'Share identical pages',
    codeSolution: 'typedef struct { void *page; int refs; } Page; Page* findOrCreate(char *data) { // hash data, if exists increment refs, else allocate new }',
    hint: 'Hash pages by content'
  },

  // ========== GARBAGE COLLECTION (QUESTION 92) ==========
  {
    id: 'c_dyn_92',
    topicId: 'c_dynamic_memory',
    question: 'Implement simple mark-and-sweep garbage collector.',
    mathSolution: 'Manual GC for C',
    codeSolution: 'typedef struct Object { int marked; struct Object *next; } Object; Object *head = NULL; void mark(Object *obj) { if(!obj || obj->marked) return; obj->marked=1; /* mark children */ } void sweep() { Object **curr = &head; while(*curr) { if(!(*curr)->marked) { Object *tmp = *curr; *curr = (*curr)->next; free(tmp); } else { (*curr)->marked=0; curr = &(*curr)->next; } } }',
    hint: 'Mark reachable, sweep unmarked'
  },

  // ========== MEMORY POISONING (QUESTION 93) ==========
  {
    id: 'c_dyn_93',
    topicId: 'c_dynamic_memory',
    question: 'Poison freed memory to detect use-after-free.',
    mathSolution: 'Fill with pattern after free',
    codeSolution: 'void poisonFree(void *p, size_t s) { memset(p, 0xDE, s); free(p); } void checkPoison(void *p, size_t s) { for(i=0;i<s;i++) if(((char*)p)[i] != 0xDE) printf("Memory modified"); }',
    hint: 'Fill with known pattern'
  },

  // ========== MEMORY OVERCOMMIT (QUESTION 94) ==========
  {
    id: 'c_dyn_94',
    topicId: 'c_dynamic_memory',
    question: 'Check if memory overcommit is enabled.',
    mathSolution: 'Test overcommit behavior',
    codeSolution: 'void *p = malloc(1ULL << 40); if(p) { printf("Overcommit enabled"); free(p); } else { printf("Overcommit disabled"); }',
    hint: 'Try huge allocation'
  },

  // ========== MEMORY LIMITS (QUESTION 95) ==========
  {
    id: 'c_dyn_95',
    topicId: 'c_dynamic_memory',
    question: 'Set memory usage limit using setrlimit.',
    mathSolution: 'Limit process memory',
    codeSolution: '#include <sys/resource.h> struct rlimit lim = {1024*1024*100, 1024*1024*100}; setrlimit(RLIMIT_AS, &lim);',
    hint: 'RLIMIT_AS for address space'
  },

  // ========== MEMORY ADVICE (QUESTION 96) ==========
  {
    id: 'c_dyn_96',
    topicId: 'c_dynamic_memory',
    question: 'Give advice to kernel about memory usage pattern.',
    mathSolution: 'Optimize page management',
    codeSolution: 'void *ptr = malloc(1024*1024); madvise(ptr, 1024*1024, MADV_SEQUENTIAL);',
    hint: 'MADV_SEQUENTIAL for sequential access'
  },

  // ========== MEMORY LOCKING (QUESTION 97) ==========
  {
    id: 'c_dyn_97',
    topicId: 'c_dynamic_memory',
    question: 'Lock memory to prevent swapping.',
    mathSolution: 'Pin pages in RAM',
    codeSolution: 'void *ptr = malloc(1024*1024); mlock(ptr, 1024*1024);',
    hint: 'mlock prevents paging'
  },

  // ========== MEMORY PROTECTION (QUESTION 98) ==========
  {
    id: 'c_dyn_98',
    topicId: 'c_dynamic_memory',
    question: 'Change memory protection using mprotect.',
    mathSolution: 'Make memory read-only or executable',
    codeSolution: 'void *ptr = malloc(1024); mprotect(ptr, 1024, PROT_READ); // now read-only',
    hint: 'PROT_READ, PROT_WRITE, PROT_EXEC'
  },

  // ========== MEMORY RESERVATION (QUESTION 99) ==========
  {
    id: 'c_dyn_99',
    topicId: 'c_dynamic_memory',
    question: 'Reserve address space without committing pages.',
    mathSolution: 'Virtual allocation without physical',
    codeSolution: 'void *ptr = mmap(NULL, 1ULL<<40, PROT_NONE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0); // reserve huge VA',
    hint: 'PROT_NONE reserves address space'
  },

  // ========== MEMORY COMMITMENT (QUESTION 100) ==========
  {
    id: 'c_dyn_100',
    topicId: 'c_dynamic_memory',
    question: 'Commit previously reserved memory.',
    mathSolution: 'Allocate physical pages later',
    codeSolution: 'void *ptr = mmap(NULL, 1024*1024, PROT_NONE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0); // reserve mprotect(ptr, 1024*1024, PROT_READ|PROT_WRITE); // commit',
    hint: 'Use mprotect to commit'
  }
);