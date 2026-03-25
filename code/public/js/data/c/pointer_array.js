QuizData.questions.push(
  // ========== BASIC POINTER-ARRAY RELATIONSHIP (QUESTIONS 1-5) ==========
  {
    id: 'c_ptrarr_1',
    topicId: 'c_pointer_array',
    question: 'Show that array name is pointer to first element.',
    mathSolution: 'arr equals &arr[0]',
    codeSolution: 'int arr[5] = {1,2,3,4,5}; if(arr == &arr[0]) printf("Equal");',
    hint: 'Array name decays to pointer'
  },
  {
    id: 'c_ptrarr_2',
    topicId: 'c_pointer_array',
    question: 'Print array elements using pointer arithmetic.',
    mathSolution: '*(arr + i) gives arr[i]',
    codeSolution: 'for(int i=0; i<5; i++) printf("%d ", *(arr + i));',
    hint: 'Add offset to base address'
  },
  {
    id: 'c_ptrarr_3',
    topicId: 'c_pointer_array',
    question: 'Find address difference between consecutive elements.',
    mathSolution: '&arr[1] - &arr[0] = 1 (in elements)',
    codeSolution: 'printf("%td", &arr[1] - &arr[0]);',
    hint: 'Pointer difference gives element count'
  },
  {
    id: 'c_ptrarr_4',
    topicId: 'c_pointer_array',
    question: 'Show sizeof(arr) vs sizeof(ptr) difference.',
    mathSolution: 'Array size vs pointer size',
    codeSolution: 'int arr[10], *ptr=arr; printf("%lu %lu", sizeof(arr), sizeof(ptr));',
    hint: 'sizeof(arr) gives total bytes'
  },
  {
    id: 'c_ptrarr_5',
    topicId: 'c_pointer_array',
    question: 'Use pointer as array name in function parameter.',
    mathSolution: 'void func(int *arr) or void func(int arr[])',
    codeSolution: 'void sum(int *arr, int n) { }',
    hint: 'Array parameter treated as pointer'
  },

  // ========== POINTER ARITHMETIC WITH ARRAYS (QUESTIONS 6-10) ==========
  {
    id: 'c_ptrarr_6',
    topicId: 'c_pointer_array',
    question: 'Access array in reverse using pointer.',
    mathSolution: 'Start from last element',
    codeSolution: 'int *p = arr + n - 1; for(int i=0; i<n; i++) printf("%d ", *p--);',
    hint: 'Decrement pointer to go backward'
  },
  {
    id: 'c_ptrarr_7',
    topicId: 'c_pointer_array',
    question: 'Find middle element using pointer arithmetic.',
    mathSolution: 'arr + n/2 points to middle',
    codeSolution: 'int *mid = arr + n/2;',
    hint: 'Add offset to base'
  },
  {
    id: 'c_ptrarr_8',
    topicId: 'c_pointer_array',
    question: 'Check if pointer is within array bounds.',
    mathSolution: 'Compare with arr and arr+n',
    codeSolution: 'if(p >= arr && p < arr + n) { /* valid */ }',
    hint: 'Valid range is [arr, arr+n)'
  },
  {
    id: 'c_ptrarr_9',
    topicId: 'c_pointer_array',
    question: 'Find number of elements between two pointers.',
    mathSolution: 'ptr2 - ptr1 gives element count',
    codeSolution: 'int count = end - start;',
    hint: 'Both must point to same array'
  },
  {
    id: 'c_ptrarr_10',
    topicId: 'c_pointer_array',
    question: 'Compare pointers to see relative position.',
    mathSolution: 'p < q means p points to earlier element',
    codeSolution: 'if(p < q) printf("p before q");',
    hint: 'Pointer comparison works in same array'
  },

  // ========== ARRAY OF POINTERS (QUESTIONS 11-15) ==========
  {
    id: 'c_ptrarr_11',
    topicId: 'c_pointer_array',
    question: 'Declare array of integer pointers of size 5.',
    mathSolution: 'Each element can point to an int',
    codeSolution: 'int *ptrArr[5];',
    hint: '[] has higher precedence than *'
  },
  {
    id: 'c_ptrarr_12',
    topicId: 'c_pointer_array',
    question: 'Store addresses of variables in pointer array.',
    mathSolution: 'Pointers to different variables',
    codeSolution: 'int a,b,c,d,e; int *ptrs[] = {&a,&b,&c,&d,&e};',
    hint: 'Initialize with addresses'
  },
  {
    id: 'c_ptrarr_13',
    topicId: 'c_pointer_array',
    question: 'Access values through array of pointers.',
    mathSolution: '*ptrs[i] gives value',
    codeSolution: 'for(int i=0; i<5; i++) printf("%d ", *ptrs[i]);',
    hint: 'Dereference each pointer'
  },
  {
    id: 'c_ptrarr_14',
    topicId: 'c_pointer_array',
    question: 'Create array of strings using pointer array.',
    mathSolution: 'Array of char pointers',
    codeSolution: 'char *fruits[] = {"Apple", "Banana", "Orange", "Mango", "Grape"};',
    hint: 'Each points to string literal'
  },
  {
    id: 'c_ptrarr_15',
    topicId: 'c_pointer_array',
    question: 'Print all strings from array of pointers.',
    mathSolution: 'Loop through pointer array',
    codeSolution: 'for(int i=0; i<5; i++) printf("%s ", fruits[i]);',
    hint: 'fruits[i] is char*'
  },

  // ========== POINTER TO ARRAY (QUESTIONS 16-20) ==========
  {
    id: 'c_ptrarr_16',
    topicId: 'c_pointer_array',
    question: 'Declare pointer to array of 5 integers.',
    mathSolution: 'Points to entire array, not first element',
    codeSolution: 'int (*ptr)[5];',
    hint: 'Parentheses needed: (*ptr)[5]'
  },
  {
    id: 'c_ptrarr_17',
    topicId: 'c_pointer_array',
    question: 'Initialize pointer to array.',
    mathSolution: 'ptr = &arr (address of whole array)',
    codeSolution: 'int arr[5]; int (*ptr)[5] = &arr;',
    hint: '&arr gives pointer to array, not to int'
  },
  {
    id: 'c_ptrarr_18',
    topicId: 'c_pointer_array',
    question: 'Access array elements using pointer to array.',
    mathSolution: '(*ptr)[i] equals arr[i]',
    codeSolution: 'for(int i=0; i<5; i++) printf("%d ", (*ptr)[i]);',
    hint: 'Dereference first, then index'
  },
  {
    id: 'c_ptrarr_19',
    topicId: 'c_pointer_array',
    question: 'Find size of pointer to array vs array.',
    mathSolution: 'sizeof(*ptr) gives array size',
    codeSolution: 'printf("%lu %lu", sizeof(ptr), sizeof(*ptr));',
    hint: 'ptr size is pointer, *ptr is array'
  },
  {
    id: 'c_ptrarr_20',
    topicId: 'c_pointer_array',
    question: 'Increment pointer to array.',
    mathSolution: 'ptr++ skips entire array',
    codeSolution: 'int arr[5]; int (*ptr)[5] = &arr; ptr++; // moves by 20 bytes (5*4)',
    hint: 'Pointer arithmetic on array pointer'
  },

  // ========== 2D ARRAYS AND POINTERS (QUESTIONS 21-25) ==========
  {
    id: 'c_ptrarr_21',
    topicId: 'c_pointer_array',
    question: 'Declare pointer to 2D array row.',
    mathSolution: 'Pointer to array of columns',
    codeSolution: 'int (*rowPtr)[cols];',
    hint: 'Points to entire row'
  },
  {
    id: 'c_ptrarr_22',
    topicId: 'c_pointer_array',
    question: 'Point to first row of 2D array.',
    mathSolution: 'rowPtr = arr (or &arr[0])',
    codeSolution: 'int arr[3][4]; int (*rowPtr)[4] = arr;',
    hint: 'arr decays to pointer to first row'
  },
  {
    id: 'c_ptrarr_23',
    topicId: 'c_pointer_array',
    question: 'Access element in 2D array using row pointer.',
    mathSolution: 'rowPtr[i][j] or *(*(rowPtr+i)+j)',
    codeSolution: 'int val = rowPtr[row][col];',
    hint: 'Works like 2D array name'
  },
  {
    id: 'c_ptrarr_24',
    topicId: 'c_pointer_array',
    question: 'Traverse 2D array using pointer to row.',
    mathSolution: 'Increment rowPtr to move to next row',
    codeSolution: 'for(int i=0; i<rows; i++, rowPtr++) { for(int j=0; j<cols; j++) printf("%d ", (*rowPtr)[j]); }',
    hint: 'Each increment skips one row'
  },
  {
    id: 'c_ptrarr_25',
    topicId: 'c_pointer_array',
    question: 'Create pointer to first element of 2D array.',
    mathSolution: '&arr[0][0] or (int*)arr',
    codeSolution: 'int *ptr = &arr[0][0]; // or (int*)arr',
    hint: 'Flattens 2D array'
  },

  // ========== FLATTENED 2D ARRAYS (QUESTIONS 26-27) ==========
  {
    id: 'c_ptrarr_26',
    topicId: 'c_pointer_array',
    question: 'Access 2D array element using flattened pointer.',
    mathSolution: 'ptr[i*cols + j] equals arr[i][j]',
    codeSolution: 'int val = ptr[row * cols + col];',
    hint: 'Calculate linear index'
  },
  {
    id: 'c_ptrarr_27',
    topicId: 'c_pointer_array',
    question: 'Iterate 2D array using single pointer.',
    mathSolution: 'Treat as 1D array of size rows*cols',
    codeSolution: 'for(int i=0; i<rows*cols; i++) printf("%d ", ptr[i]);',
    hint: 'Linear traversal'
  },

  // ========== ARRAY OF POINTERS TO ARRAYS (QUESTIONS 28-30) ==========
  {
    id: 'c_ptrarr_28',
    topicId: 'c_pointer_array',
    question: 'Create array of pointers to rows (jagged array).',
    mathSolution: 'Each row can have different size',
    codeSolution: 'int *jagged[3]; jagged[0]=malloc(2*sizeof(int)); jagged[1]=malloc(4*sizeof(int)); jagged[2]=malloc(3*sizeof(int));',
    hint: 'Array of pointers, each to different size'
  },
  {
    id: 'c_ptrarr_29',
    topicId: 'c_pointer_array',
    question: 'Access jagged array elements.',
    mathSolution: 'jagged[i][j] works if rows allocated',
    codeSolution: 'for(int i=0; i<3; i++) for(int j=0; j<rowSizes[i]; j++) printf("%d ", jagged[i][j]);',
    hint: 'Need to track row sizes'
  },
  {
    id: 'c_ptrarr_30',
    topicId: 'c_pointer_array',
    question: 'Free jagged array memory.',
    mathSolution: 'Free each row then free rows array',
    codeSolution: 'for(int i=0; i<3; i++) free(jagged[i]);',
    hint: 'Free in reverse order of allocation'
  },

  // ========== POINTER ARITHMETIC WITH 2D (QUESTIONS 31-32) ==========
  {
    id: 'c_ptrarr_31',
    topicId: 'c_pointer_array',
    question: 'Find address of element in 2D using pointer formula.',
    mathSolution: 'Base + (i*cols + j)*sizeof(type)',
    codeSolution: 'int *base = &arr[0][0]; int *addr = base + i*cols + j;',
    hint: 'Calculate linear offset'
  },
  {
    id: 'c_ptrarr_32',
    topicId: 'c_pointer_array',
    question: 'Compare row pointers and element pointers.',
    mathSolution: 'arr+1 vs &arr[1][0]',
    codeSolution: 'printf("%p %p", arr+1, &arr[1][0]); // different!',
    hint: 'arr+1 points to row, not element'
  },

  // ========== POINTER TO POINTER AND 2D (QUESTIONS 33-35) ==========
  {
    id: 'c_ptrarr_33',
    topicId: 'c_pointer_array',
    question: 'Create dynamic 2D array using pointer to pointer.',
    mathSolution: 'Allocate rows, then each row',
    codeSolution: 'int **mat = malloc(rows * sizeof(int*)); for(i=0;i<rows;i++) mat[i]=malloc(cols*sizeof(int));',
    hint: 'Double pointer for dynamic 2D'
  },
  {
    id: 'c_ptrarr_34',
    topicId: 'c_pointer_array',
    question: 'Access element in dynamic 2D array.',
    mathSolution: 'mat[i][j] or *(*(mat+i)+j)',
    codeSolution: 'int val = mat[row][col];',
    hint: 'Same syntax as static 2D'
  },
  {
    id: 'c_ptrarr_35',
    topicId: 'c_pointer_array',
    question: 'Free dynamic 2D array.',
    mathSolution: 'Free each row, then rows array',
    codeSolution: 'for(i=0;i<rows;i++) free(mat[i]); free(mat);',
    hint: 'Avoid memory leak'
  },

  // ========== FUNCTION PARAMETERS (QUESTIONS 36-39) ==========
  {
    id: 'c_ptrarr_36',
    topicId: 'c_pointer_array',
    question: 'Pass 2D array to function with known columns.',
    mathSolution: 'Specify column size in parameter',
    codeSolution: 'void func(int arr[][4], int rows) { }',
    hint: 'Column size must be known'
  },
  {
    id: 'c_ptrarr_37',
    topicId: 'c_pointer_array',
    question: 'Pass 2D array as pointer to array.',
    mathSolution: 'int (*arr)[cols] parameter',
    codeSolution: 'void func(int (*arr)[4], int rows) { }',
    hint: 'Pointer to array of 4 ints'
  },
  {
    id: 'c_ptrarr_38',
    topicId: 'c_pointer_array',
    question: 'Pass 2D array as flattened pointer.',
    mathSolution: 'Single pointer with rows*cols',
    codeSolution: 'void func(int *arr, int rows, int cols) { arr[i*cols+j]; }',
    hint: 'Calculate indices manually'
  },
  {
    id: 'c_ptrarr_39',
    topicId: 'c_pointer_array',
    question: 'Pass array of pointers to function.',
    mathSolution: 'char *arr[] parameter',
    codeSolution: 'void sortStrings(char *arr[], int n) { }',
    hint: 'Array of string pointers'
  },

  // ========== STRING ARRAYS AND POINTERS (QUESTIONS 40-42) ==========
  {
    id: 'c_ptrarr_40',
    topicId: 'c_pointer_array',
    question: 'Sort array of strings using pointer array.',
    mathSolution: 'Rearrange pointers, not strings',
    codeSolution: 'for(i=0;i<n-1;i++) for(j=i+1;j<n;j++) if(strcmp(arr[i],arr[j])>0) { char *temp=arr[i]; arr[i]=arr[j]; arr[j]=temp; }',
    hint: 'Swap pointers only'
  },
  {
    id: 'c_ptrarr_41',
    topicId: 'c_pointer_array',
    question: 'Find longest string in array using pointers.',
    mathSolution: 'Compare string lengths',
    codeSolution: 'int maxLen=0; char *longest; for(i=0;i<n;i++) if(strlen(arr[i])>maxLen) { maxLen=strlen(arr[i]); longest=arr[i]; }',
    hint: 'Keep pointer to longest'
  },
  {
    id: 'c_ptrarr_42',
    topicId: 'c_pointer_array',
    question: 'Concatenate all strings in array.',
    mathSolution: 'Join strings into one buffer',
    codeSolution: 'char result[1000]=""; for(i=0;i<n;i++) strcat(result, arr[i]);',
    hint: 'Use strcat repeatedly'
  },

  // ========== POINTER ARRAYS AND STRUCTURES (QUESTIONS 43-45) ==========
  {
    id: 'c_ptrarr_43',
    topicId: 'c_pointer_array',
    question: 'Create array of pointers to structures.',
    mathSolution: 'Each element points to struct',
    codeSolution: 'struct Student *students[100];',
    hint: 'Array of struct pointers'
  },
  {
    id: 'c_ptrarr_44',
    topicId: 'c_pointer_array',
    question: 'Allocate and assign structures to pointer array.',
    mathSolution: 'Dynamic allocation for each',
    codeSolution: 'for(i=0;i<100;i++) students[i] = malloc(sizeof(struct Student));',
    hint: 'Each element needs allocation'
  },
  {
    id: 'c_ptrarr_45',
    topicId: 'c_pointer_array',
    question: 'Access structure members via pointer array.',
    mathSolution: 'students[i]->name or (*students[i]).name',
    codeSolution: 'printf("%s", students[i]->name);',
    hint: 'Use arrow operator'
  },

  // ========== MULTI-LEVEL POINTER ARRAYS (QUESTIONS 46-47) ==========
  {
    id: 'c_ptrarr_46',
    topicId: 'c_pointer_array',
    question: 'Create 3D array using pointer to pointer to pointer.',
    mathSolution: 'int *** for 3D dynamic',
    codeSolution: 'int ***arr3D = malloc(x * sizeof(int**)); for(i=0;i<x;i++) { arr3D[i]=malloc(y*sizeof(int*)); for(j=0;j<y;j++) arr3D[i][j]=malloc(z*sizeof(int)); }',
    hint: 'Three levels of indirection'
  },
  {
    id: 'c_ptrarr_47',
    topicId: 'c_pointer_array',
    question: 'Access element in dynamic 3D array.',
    mathSolution: 'arr3D[i][j][k] works',
    codeSolution: 'int val = arr3D[x][y][z];',
    hint: 'Triple indexing'
  },

  // ========== COMMAND LINE ARGUMENTS (QUESTIONS 48-49) ==========
  {
    id: 'c_ptrarr_48',
    topicId: 'c_pointer_array',
    question: 'Access command line arguments using argv pointer array.',
    mathSolution: 'argv is array of char pointers',
    codeSolution: 'int main(int argc, char *argv[]) { for(i=0;i<argc;i++) printf("%s", argv[i]); }',
    hint: 'argv[0] is program name'
  },
  {
    id: 'c_ptrarr_49',
    topicId: 'c_pointer_array',
    question: 'Convert command line argument to integer.',
    mathSolution: 'Use atoi on argv[i]',
    codeSolution: 'int num = atoi(argv[1]);',
    hint: 'String to int conversion'
  },

  // ========== POINTER ARRAYS IN SORTING (QUESTIONS 50-51) ==========
  {
    id: 'c_ptrarr_50',
    topicId: 'c_pointer_array',
    question: 'Sort array of integers using pointer array (index sort).',
    mathSolution: 'Sort pointers, leave original',
    codeSolution: 'int *ptrs[n]; for(i=0;i<n;i++) ptrs[i]=&arr[i]; // sort ptrs by *ptrs[i]',
    hint: 'Indirect sorting'
  },
  {
    id: 'c_ptrarr_51',
    topicId: 'c_pointer_array',
    question: 'Print original array in sorted order using pointer array.',
    mathSolution: 'Dereference sorted pointers',
    codeSolution: 'for(i=0;i<n;i++) printf("%d ", *sortedPtrs[i]);',
    hint: 'Values accessed via pointers'
  },

  // ========== ARRAY OF FUNCTION POINTERS (QUESTIONS 52-53) ==========
  {
    id: 'c_ptrarr_52',
    topicId: 'c_pointer_array',
    question: 'Create array of function pointers for calculator.',
    mathSolution: 'Multiple functions in array',
    codeSolution: 'int (*ops[])(int,int) = {add, sub, mul, div};',
    hint: 'Each element points to function'
  },
  {
    id: 'c_ptrarr_53',
    topicId: 'c_pointer_array',
    question: 'Call function from array of function pointers.',
    mathSolution: 'ops[choice](a,b)',
    codeSolution: 'int result = ops[op](5, 3);',
    hint: 'Index then call'
  },

  // ========== POINTER TO ARRAY OF FUNCTION POINTERS (QUESTION 54) ==========
  {
    id: 'c_ptrarr_54',
    topicId: 'c_pointer_array',
    question: 'Declare pointer to array of function pointers.',
    mathSolution: 'Complex declaration',
    codeSolution: 'int (*(*ptr)[4])(int,int);',
    hint: 'ptr points to array of function pointers'
  },

  // ========== CONSTANT POINTER ARRAYS (QUESTIONS 55-56) ==========
  {
    id: 'c_ptrarr_55',
    topicId: 'c_pointer_array',
    question: 'Create array of constant pointers to int.',
    mathSolution: 'Pointers themselves constant',
    codeSolution: 'int *const ptrArr[5];',
    hint: 'Cannot change where pointers point'
  },
  {
    id: 'c_ptrarr_56',
    topicId: 'c_pointer_array',
    question: 'Create array of pointers to constant ints.',
    mathSolution: 'Data pointed is constant',
    codeSolution: 'const int *ptrArr[5];',
    hint: 'Cannot change values via pointers'
  },

  // ========== VOID POINTER ARRAY (QUESTIONS 57-59) ==========
  {
    id: 'c_ptrarr_57',
    topicId: 'c_pointer_array',
    question: 'Create array of void pointers (generic).',
    mathSolution: 'Can point to any type',
    codeSolution: 'void *generic[10];',
    hint: 'Store any address type'
  },
  {
    id: 'c_ptrarr_58',
    topicId: 'c_pointer_array',
    question: 'Store different types in void pointer array.',
    mathSolution: 'Pointers to int, float, char',
    codeSolution: 'int i=5; float f=3.14; char c=\'A\'; void *arr[] = {&i, &f, &c};',
    hint: 'Each element void*'
  },
  {
    id: 'c_ptrarr_59',
    topicId: 'c_pointer_array',
    question: 'Access values from void pointer array with casting.',
    mathSolution: 'Cast before dereferencing',
    codeSolution: 'int val = *(int*)arr[0]; float fval = *(float*)arr[1];',
    hint: 'Must know original type'
  },

  // ========== POINTER ARRAYS AND DYNAMIC MEMORY (QUESTIONS 60-61) ==========
  {
    id: 'c_ptrarr_60',
    topicId: 'c_pointer_array',
    question: 'Allocate array of pointers dynamically.',
    mathSolution: 'Pointer to pointer allocation',
    codeSolution: 'int **ptrArr = malloc(n * sizeof(int*));',
    hint: 'Each element will point to something'
  },
  {
    id: 'c_ptrarr_61',
    topicId: 'c_pointer_array',
    question: 'Allocate memory for each pointer in array.',
    mathSolution: 'Each element points to allocated memory',
    codeSolution: 'for(i=0;i<n;i++) ptrArr[i] = malloc(size * sizeof(int));',
    hint: 'Individual allocations'
  },

  // ========== POINTER ARRAYS AND FILE OPERATIONS (QUESTIONS 62-63) ==========
  {
    id: 'c_ptrarr_62',
    topicId: 'c_pointer_array',
    question: 'Store file lines in array of pointers.',
    mathSolution: 'Read file into string array',
    codeSolution: 'char *lines[100]; int count=0; while(fgets(buffer,100,fp)) { lines[count]=malloc(strlen(buffer)+1); strcpy(lines[count++],buffer); }',
    hint: 'Dynamic allocation for each line'
  },
  {
    id: 'c_ptrarr_63',
    topicId: 'c_pointer_array',
    question: 'Free memory allocated for file lines.',
    mathSolution: 'Free each line pointer',
    codeSolution: 'for(i=0;i<count;i++) free(lines[i]);',
    hint: 'Prevent memory leak'
  },

  // ========== MATRIX OPERATIONS USING POINTER ARRAYS (QUESTIONS 64-65) ==========
  {
    id: 'c_ptrarr_64',
    topicId: 'c_pointer_array',
    question: 'Transpose matrix using pointer array.',
    mathSolution: 'Swap rows and columns',
    codeSolution: 'for(i=0;i<rows;i++) for(j=i+1;j<cols;j++) { int temp = mat[i][j]; mat[i][j] = mat[j][i]; mat[j][i] = temp; }',
    hint: 'Swap elements across diagonal'
  },
  {
    id: 'c_ptrarr_65',
    topicId: 'c_pointer_array',
    question: 'Multiply matrices using pointer arrays.',
    mathSolution: 'Result[i][j] = sum(A[i][k]*B[k][j])',
    codeSolution: 'for(i=0;i<r1;i++) for(j=0;j<c2;j++) { result[i][j]=0; for(k=0;k<c1;k++) result[i][j] += A[i][k] * B[k][j]; }',
    hint: 'Triple nested loops'
  },

  // ========== SEARCH ALGORITHMS WITH POINTER ARRAYS (QUESTION 66) ==========
  {
    id: 'c_ptrarr_66',
    topicId: 'c_pointer_array',
    question: 'Binary search on array of pointers to sorted data.',
    mathSolution: 'Compare values pointed to',
    codeSolution: 'while(low<=high) { int mid=(low+high)/2; int cmp = compare(key, *ptrs[mid]); if(cmp==0) return mid; if(cmp<0) high=mid-1; else low=mid+1; }',
    hint: 'Compare dereferenced pointers'
  },

  // ========== POINTER TO ARRAY OF POINTERS (QUESTIONS 67-68) ==========
  {
    id: 'c_ptrarr_67',
    topicId: 'c_pointer_array',
    question: 'Declare pointer to array of integer pointers.',
    mathSolution: 'int *(*ptr)[5]',
    codeSolution: 'int *(*ptr)[5];',
    hint: 'ptr points to array of 5 int pointers'
  },
  {
    id: 'c_ptrarr_68',
    topicId: 'c_pointer_array',
    question: 'Initialize pointer to array of pointers.',
    mathSolution: 'ptr = &ptrArr',
    codeSolution: 'int *ptrArr[5]; int *(*ptr)[5] = &ptrArr;',
    hint: 'Address of array of pointers'
  },

  // ========== ARRAY OF POINTERS TO ARRAYS (QUESTION 69) ==========
  {
    id: 'c_ptrarr_69',
    topicId: 'c_pointer_array',
    question: 'Create array of pointers to integer arrays.',
    mathSolution: 'Each points to different array',
    codeSolution: 'int arr1[5], arr2[5], arr3[5]; int (*ptrArr[3])[5] = {&arr1, &arr2, &arr3};',
    hint: 'Each element points to array of 5 ints'
  },

  // ========== POINTER ARITHMETIC ON POINTER ARRAYS (QUESTION 70) ==========
  {
    id: 'c_ptrarr_70',
    topicId: 'c_pointer_array',
    question: 'Increment pointer to pointer array element.',
    mathSolution: 'ptrArr++ moves to next pointer',
    codeSolution: 'int **p = ptrArr; p++; // points to next element in pointer array',
    hint: 'Pointer to pointer moves by pointer size'
  },

  // ========== MULTIDIMENSIONAL POINTER ARRAYS (QUESTION 71) ==========
  {
    id: 'c_ptrarr_71',
    topicId: 'c_pointer_array',
    question: 'Create 3D array using array of pointers to 2D arrays.',
    mathSolution: 'int (*arr[3])[4][5]',
    codeSolution: 'int arr2D1[4][5], arr2D2[4][5], arr2D3[4][5]; int (*arr3D[3])[4][5] = {&arr2D1, &arr2D2, &arr2D3};',
    hint: 'Array of pointers to 2D arrays'
  },

  // ========== FUNCTION RETURNING POINTER TO ARRAY (QUESTION 72) ==========
  {
    id: 'c_ptrarr_72',
    topicId: 'c_pointer_array',
    question: 'Write function returning pointer to array of 5 ints.',
    mathSolution: 'Returns address of array',
    codeSolution: 'int (*func())[5] { static int arr[5]; return &arr; }',
    hint: 'Return type is pointer to array'
  },

  // ========== POINTER TO ARRAY IN STRUCTURE (QUESTIONS 73-74) ==========
  {
    id: 'c_ptrarr_73',
    topicId: 'c_pointer_array',
    question: 'Structure containing pointer to array.',
    mathSolution: 'Struct member points to array',
    codeSolution: 'struct Container { int (*ptr)[10]; };',
    hint: 'Member is pointer to array of 10 ints'
  },
  {
    id: 'c_ptrarr_74',
    topicId: 'c_pointer_array',
    question: 'Access array through structure pointer.',
    mathSolution: '(*s->ptr)[i]',
    codeSolution: 'struct Container *s; int val = (*s->ptr)[i];',
    hint: 'Dereference structure then pointer'
  },

  // ========== ARRAY OF POINTERS TO FUNCTIONS RETURNING POINTERS (QUESTION 75) ==========
  {
    id: 'c_ptrarr_75',
    topicId: 'c_pointer_array',
    question: 'Array of function pointers returning char*.',
    mathSolution: 'char* (*funcs[5])(int)',
    codeSolution: 'char* (*funcs[5])(int);',
    hint: 'Each function returns char*'
  },

  // ========== POINTER ARRAYS AND BIT MANIPULATION (QUESTION 76) ==========
  {
    id: 'c_ptrarr_76',
    topicId: 'c_pointer_array',
    question: 'Use pointer array to manipulate bits in multiple integers.',
    mathSolution: 'Array of pointers to ints',
    codeSolution: 'int a,b,c; int *ptrs[] = {&a,&b,&c}; for(i=0;i<3;i++) *ptrs[i] |= (1<<i);',
    hint: 'Set bits via pointers'
  },

  // ========== POINTER ARRAYS FOR LOOKUP TABLES (QUESTION 77) ==========
  {
    id: 'c_ptrarr_77',
    topicId: 'c_pointer_array',
    question: 'Create lookup table using array of pointers.',
    mathSolution: 'Pointers to constant strings',
    codeSolution: 'const char *months[] = {"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"};',
    hint: 'Index by month number'
  },

  // ========== POINTER ARRAYS FOR POLYMORPHISM SIMULATION (QUESTION 78) ==========
  {
    id: 'c_ptrarr_78',
    topicId: 'c_pointer_array',
    question: 'Simulate polymorphic behavior with pointer array.',
    mathSolution: 'Array of function pointers for different types',
    codeSolution: 'void (*drawFuncs[])(void*) = {drawCircle, drawSquare, drawTriangle}; drawFuncs[shape](data);',
    hint: 'Type-specific functions'
  },

  // ========== POINTER ARRAYS AND MEMORY POOLS (QUESTION 79) ==========
  {
    id: 'c_ptrarr_79',
    topicId: 'c_pointer_array',
    question: 'Implement simple memory pool with pointer array.',
    mathSolution: 'Array of pointers to free blocks',
    codeSolution: 'void *pool[100]; int freeCount=100; // initialize with memory blocks',
    hint: 'Manage free list'
  },

  // ========== POINTER ARRAYS FOR SPARSE MATRIX (QUESTION 80) ==========
  {
    id: 'c_ptrarr_80',
    topicId: 'c_pointer_array',
    question: 'Represent sparse matrix using array of row pointers.',
    mathSolution: 'Each row pointer to linked list or array',
    codeSolution: 'struct Node { int col; int val; struct Node *next; }; struct Node *rows[1000] = {NULL};',
    hint: 'Linked lists per row'
  },

  // ========== POINTER ARRAYS AND CACHE OPTIMIZATION (QUESTION 81) ==========
  {
    id: 'c_ptrarr_81',
    topicId: 'c_pointer_array',
    question: 'Use pointer array for cache-friendly matrix traversal.',
    mathSolution: 'Row pointers for better locality',
    codeSolution: 'for(i=0;i<rows;i++) { int *row = mat[i]; for(j=0;j<cols;j++) process(row[j]); }',
    hint: 'Access rows sequentially'
  },

  // ========== POINTER ARRAYS FOR DATABASE RECORDS (QUESTION 82) ==========
  {
    id: 'c_ptrarr_82',
    topicId: 'c_pointer_array',
    question: 'Store database records in pointer array.',
    mathSolution: 'Array of pointers to records',
    codeSolution: 'struct Record *records[1000]; for(i=0;i<1000;i++) records[i] = malloc(sizeof(struct Record));',
    hint: 'Dynamic record storage'
  },

  // ========== POINTER ARRAYS FOR GRAPH ADJACENCY (QUESTION 83) ==========
  {
    id: 'c_ptrarr_83',
    topicId: 'c_pointer_array',
    question: 'Implement graph adjacency list using pointer array.',
    mathSolution: 'Each vertex has list of neighbors',
    codeSolution: 'struct Node *adjList[V]; for(i=0;i<V;i++) adjList[i] = NULL;',
    hint: 'Array of linked lists'
  },

  // ========== POINTER ARRAYS FOR HASH TABLES (QUESTION 84) ==========
  {
    id: 'c_ptrarr_84',
    topicId: 'c_pointer_array',
    question: 'Implement chaining hash table with pointer array.',
    mathSolution: 'Array of linked list heads',
    codeSolution: 'struct Node *hashTable[TABLE_SIZE] = {NULL};',
    hint: 'Each bucket points to chain'
  },

  // ========== POINTER ARRAYS AND THREAD SAFETY (QUESTION 85) ==========
  {
    id: 'c_ptrarr_85',
    topicId: 'c_pointer_array',
    question: 'Use pointer array for thread-local storage simulation.',
    mathSolution: 'Array indexed by thread ID',
    codeSolution: '__thread int *threadData; // or array of pointers',
    hint: 'Each thread gets own pointer'
  },

  // ========== POINTER ARRAYS FOR OBJECT POOLS (QUESTION 86) ==========
  {
    id: 'c_ptrarr_86',
    topicId: 'c_pointer_array',
    question: 'Create object pool using pointer array.',
    mathSolution: 'Pre-allocate and reuse objects',
    codeSolution: 'struct Object *pool[100]; int inUse[100] = {0};',
    hint: 'Manage allocation from pool'
  },

  // ========== POINTER ARRAYS FOR MEMORY-MAPPED I/O (QUESTION 87) ==========
  {
    id: 'c_ptrarr_87',
    topicId: 'c_pointer_array',
    question: 'Use pointer array for memory-mapped registers.',
    mathSolution: 'Array of volatile pointers',
    codeSolution: 'volatile uint32_t * const regs[] = {(uint32_t*)0x4000, (uint32_t*)0x4004, (uint32_t*)0x4008};',
    hint: 'Fixed addresses for hardware'
  },

  // ========== POINTER ARRAYS FOR JUMP TABLES (QUESTION 88) ==========
  {
    id: 'c_ptrarr_88',
    topicId: 'c_pointer_array',
    question: 'Create jump table using array of labels (GCC extension).',
    mathSolution: 'Labels as values',
    codeSolution: 'void *jt[] = {&&label1, &&label2, &&label3}; goto *jt[choice]; label1: ...',
    hint: 'GCC computed goto'
  },

  // ========== POINTER ARRAYS AND ENDIANNESS (QUESTION 89) ==========
  {
    id: 'c_ptrarr_89',
    topicId: 'c_pointer_array',
    question: 'Use pointer array to check endianness.',
    mathSolution: 'Pointers to bytes of integer',
    codeSolution: 'int x=1; unsigned char *p = (unsigned char*)&x; for(i=0;i<4;i++) printf("%x ", p[i]);',
    hint: 'First byte shows endianness'
  },

  // ========== POINTER ARRAYS FOR BITMAPS (QUESTION 90) ==========
  {
    id: 'c_ptrarr_90',
    topicId: 'c_pointer_array',
    question: 'Process image bitmap using row pointers.',
    mathSolution: 'Array of pointers to pixel rows',
    codeSolution: 'uint32_t *rows[height]; for(i=0;i<height;i++) rows[i] = bitmap + i * width;',
    hint: 'Row-major organization'
  },

  // ========== POINTER ARRAYS FOR DYNAMIC DISPATCH (QUESTION 91) ==========
  {
    id: 'c_ptrarr_91',
    topicId: 'c_pointer_array',
    question: 'Implement virtual function table using pointer array.',
    mathSolution: 'Array of function pointers per class',
    codeSolution: 'struct VTable { void (*draw)(void*); void (*resize)(void*,int); }; struct VTable *vtable;',
    hint: 'Object-oriented pattern in C'
  },

  // ========== POINTER ARRAYS FOR RING BUFFER (QUESTION 92) ==========
  {
    id: 'c_ptrarr_92',
    topicId: 'c_pointer_array',
    question: 'Implement ring buffer using array of pointers.',
    mathSolution: 'Circular buffer of data pointers',
    codeSolution: 'void *buffer[BUFFER_SIZE]; int head=0,tail=0;',
    hint: 'Store pointers to data'
  },

  // ========== POINTER ARRAYS FOR MEMORY DEBUGGING (QUESTION 93) ==========
  {
    id: 'c_ptrarr_93',
    topicId: 'c_pointer_array',
    question: 'Track allocations with pointer array.',
    mathSolution: 'Array of allocated pointers',
    codeSolution: 'void *allocations[MAX_ALLOC]; int allocCount=0; allocations[allocCount++] = malloc(size);',
    hint: 'Keep track for cleanup'
  },

  // ========== POINTER ARRAYS FOR PROTOCOL PARSING (QUESTION 94) ==========
  {
    id: 'c_ptrarr_94',
    topicId: 'c_pointer_array',
    question: 'Parse message fields into pointer array.',
    mathSolution: 'Pointers to fields in buffer',
    codeSolution: 'char *fields[10]; char *p = buffer; for(i=0;i<10;i++) { fields[i] = p; p += fieldLen; }',
    hint: 'Index into buffer'
  },

  // ========== POINTER ARRAYS FOR SCATTER-GATHER I/O (QUESTION 95) ==========
  {
    id: 'c_ptrarr_95',
    topicId: 'c_pointer_array',
    question: 'Set up scatter-gather I/O with pointer array.',
    mathSolution: 'Array of buffers for vectored I/O',
    codeSolution: 'struct iovec iov[3] = {{buf1, len1}, {buf2, len2}, {buf3, len3}}; writev(fd, iov, 3);',
    hint: 'Multiple buffers in one operation'
  },

  // ========== POINTER ARRAYS FOR DATA COMPRESSION (QUESTION 96) ==========
  {
    id: 'c_ptrarr_96',
    topicId: 'c_pointer_array',
    question: 'Use pointer array for LZ77 sliding window.',
    mathSolution: 'Array of pointers to dictionary',
    codeSolution: 'char *window[WINDOW_SIZE]; // pointers to positions in data',
    hint: 'Dictionary of string positions'
  },

  // ========== POINTER ARRAYS FOR GENETIC ALGORITHMS (QUESTION 97) ==========
  {
    id: 'c_ptrarr_97',
    topicId: 'c_pointer_array',
    question: 'Store population as array of chromosome pointers.',
    mathSolution: 'Array of pointers to individuals',
    codeSolution: 'struct Chromosome *population[POP_SIZE]; for(i=0;i<POP_SIZE;i++) population[i] = createChromosome();',
    hint: 'Dynamic individuals'
  },

  // ========== POINTER ARRAYS FOR B-TREE NODES (QUESTION 98) ==========
  {
    id: 'c_ptrarr_98',
    topicId: 'c_pointer_array',
    question: 'Implement B-tree node with pointer array for children.',
    mathSolution: 'Array of child pointers',
    codeSolution: 'struct BTreeNode { int keys[MAX]; struct BTreeNode *children[MAX+1]; int count; };',
    hint: 'Multiple child pointers'
  },

  // ========== POINTER ARRAYS FOR QUAD TREES (QUESTION 99) ==========
  {
    id: 'c_ptrarr_99',
    topicId: 'c_pointer_array',
    question: 'Quad tree node with array of quadrant pointers.',
    mathSolution: 'Four child pointers',
    codeSolution: 'struct QuadNode { int x,y,size; struct QuadNode *children[4]; };',
    hint: 'NE, NW, SE, SW quadrants'
  },

  // ========== POINTER ARRAYS FOR OCTREES (QUESTION 100) ==========
  {
    id: 'c_ptrarr_100',
    topicId: 'c_pointer_array',
    question: 'Octree node with array of eight child pointers.',
    mathSolution: '3D space subdivision',
    codeSolution: 'struct OctNode { struct OctNode *children[8]; // 8 octants };',
    hint: 'Eight children for 3D'
  }
);