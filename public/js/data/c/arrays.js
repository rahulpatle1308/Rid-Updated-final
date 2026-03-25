QuizData.questions.push(
    // ============ LEVEL 1: ARRAY DECLARATION & BASIC OPERATIONS (1-10) ============
    {
      id: 'c_arrays_1',
      topicId: 'c_arrays',
      question: 'Declare an integer array of size 10 named "numbers".',
      mathSolution: 'Array declaration syntax in C',
      codeSolution: 'int numbers[10];',
      hint: 'Use format: data_type array_name[size];'
    },
    {
      id: 'c_arrays_2',
      topicId: 'c_arrays',
      question: 'Initialize an integer array "arr" with values 1, 2, 3, 4, 5.',
      mathSolution: 'Array initialization with values',
      codeSolution: 'int arr[5] = {1, 2, 3, 4, 5};',
      hint: 'Use curly braces {} to list initial values'
    },
    {
      id: 'c_arrays_3',
      topicId: 'c_arrays',
      question: 'Access the third element of an array "arr" and assign it to variable "x".',
      mathSolution: 'Array indexing (0-based)',
      codeSolution: 'int x = arr[2];',
      hint: 'Array indices start at 0'
    },
    {
      id: 'c_arrays_4',
      topicId: 'c_arrays',
      question: 'Change the value of the first element of array "arr" to 100.',
      mathSolution: 'Array element assignment',
      codeSolution: 'arr[0] = 100;',
      hint: 'Use array name with index on left side of assignment'
    },
    {
      id: 'c_arrays_5',
      topicId: 'c_arrays',
      question: 'Write code to find the length of array "int arr[] = {2, 4, 6, 8, 10};"',
      mathSolution: 'Calculate array length using sizeof',
      codeSolution: 'int length = sizeof(arr) / sizeof(arr[0]);',
      hint: 'Total size divided by element size'
    },
    {
      id: 'c_arrays_6',
      topicId: 'c_arrays',
      question: 'Create a for loop to print all elements of array "int arr[5] = {1,2,3,4,5};"',
      mathSolution: 'Iterate through array using loop',
      codeSolution: 'for(int i = 0; i < 5; i++) {\n    printf("%d ", arr[i]);\n}',
      hint: 'Loop from 0 to size-1'
    },
    {
      id: 'c_arrays_7',
      topicId: 'c_arrays',
      question: 'Initialize a character array "name" with the string "John".',
      mathSolution: 'String initialization in C',
      codeSolution: 'char name[] = "John";',
      hint: 'Strings are character arrays with null terminator'
    },
    {
      id: 'c_arrays_8',
      topicId: 'c_arrays',
      question: 'Declare a 2D integer array "matrix" with 3 rows and 4 columns.',
      mathSolution: '2D array declaration',
      codeSolution: 'int matrix[3][4];',
      hint: 'Format: type name[rows][columns]'
    },
    {
      id: 'c_arrays_9',
      topicId: 'c_arrays',
      question: 'Initialize a 2x3 integer array "mat" with all elements as 0.',
      mathSolution: 'Initialize 2D array to zero',
      codeSolution: 'int mat[2][3] = {{0,0,0}, {0,0,0}};',
      hint: 'Use nested curly braces'
    },
    {
      id: 'c_arrays_10',
      topicId: 'c_arrays',
      question: 'Access the element at row 1, column 2 of 2D array "matrix".',
      mathSolution: '2D array indexing',
      codeSolution: 'int value = matrix[1][2];',
      hint: 'Both row and column indices start at 0'
    },

    // ============ LEVEL 2: ARRAY OPERATIONS & ALGORITHMS (11-20) ============
    {
      id: 'c_arrays_11',
      topicId: 'c_arrays',
      question: 'Write code to find the sum of all elements in an integer array "arr" of size 5.',
      mathSolution: 'Calculate array sum',
      codeSolution: 'int sum = 0;\nfor(int i = 0; i < 5; i++) {\n    sum += arr[i];\n}',
      hint: 'Initialize sum to 0, add each element'
    },
    {
      id: 'c_arrays_12',
      topicId: 'c_arrays',
      question: 'Find the largest element in array "int arr[] = {23, 45, 12, 67, 34};"',
      mathSolution: 'Find maximum in array',
      codeSolution: 'int max = arr[0];\nfor(int i = 1; i < 5; i++) {\n    if(arr[i] > max) max = arr[i];\n}',
      hint: 'Assume first element is max, then compare'
    },
    {
      id: 'c_arrays_13',
      topicId: 'c_arrays',
      question: 'Reverse an array "int arr[] = {1,2,3,4,5};" in-place.',
      mathSolution: 'Reverse array elements',
      codeSolution: 'int temp;\nfor(int i = 0; i < 5/2; i++) {\n    temp = arr[i];\n    arr[i] = arr[4-i];\n    arr[4-i] = temp;\n}',
      hint: 'Swap first with last, second with second-last, etc.'
    },
    {
      id: 'c_arrays_14',
      topicId: 'c_arrays',
      question: 'Copy all elements from array "source" to array "destination" of same size.',
      mathSolution: 'Copy array elements',
      codeSolution: 'for(int i = 0; i < size; i++) {\n    destination[i] = source[i];\n}',
      hint: 'Loop through each element and assign'
    },
    {
      id: 'c_arrays_15',
      topicId: 'c_arrays',
      question: 'Count how many elements in array are greater than 10.',
      mathSolution: 'Count elements satisfying condition',
      codeSolution: 'int count = 0;\nfor(int i = 0; i < size; i++) {\n    if(arr[i] > 10) count++;\n}',
      hint: 'Increment count when condition is true'
    },
    {
      id: 'c_arrays_16',
      topicId: 'c_arrays',
      question: 'Declare an array and initialize it without specifying size.',
      mathSolution: 'Compiler determines size from initializer',
      codeSolution: 'int arr[] = {1, 2, 3, 4, 5};',
      hint: 'Empty brackets [] lets compiler count elements'
    },
    {
      id: 'c_arrays_17',
      topicId: 'c_arrays',
      question: 'Pass an array "arr" to a function "processArray".',
      mathSolution: 'Pass array to function',
      codeSolution: 'processArray(arr, size);',
      hint: 'Array name decays to pointer when passed'
    },
    {
      id: 'c_arrays_18',
      topicId: 'c_arrays',
      question: 'Define a function that takes an integer array and its size, and returns the average.',
      mathSolution: 'Calculate average using function',
      codeSolution: 'float average(int arr[], int size) {\n    int sum = 0;\n    for(int i = 0; i < size; i++)\n        sum += arr[i];\n    return (float)sum / size;\n}',
      hint: 'Cast sum to float for decimal result'
    },
    {
      id: 'c_arrays_19',
      topicId: 'c_arrays',
      question: 'Declare an array of 10 pointers to integers.',
      mathSolution: 'Array of pointers',
      codeSolution: 'int *ptrArray[10];',
      hint: '* binds to the variable name'
    },
    {
      id: 'c_arrays_20',
      topicId: 'c_arrays',
      question: 'Create a pointer to an array of 10 integers.',
      mathSolution: 'Pointer to array',
      codeSolution: 'int (*ptr)[10];',
      hint: 'Parentheses are important: (*ptr) makes it a pointer'
    },

    // ============ LEVEL 3: POINTERS & ADVANCED OPERATIONS (21-30) ============
    {
      id: 'c_arrays_21',
      topicId: 'c_arrays',
      question: 'Use pointer arithmetic to access the 5th element of array "arr".',
      mathSolution: 'Pointer arithmetic for array access',
      codeSolution: 'int value = *(arr + 4);',
      hint: 'arr + index gives address of element'
    },
    {
      id: 'c_arrays_22',
      topicId: 'c_arrays',
      question: 'Sort an integer array in ascending order using bubble sort.',
      mathSolution: 'Bubble sort implementation',
      codeSolution: 'for(int i = 0; i < size-1; i++) {\n    for(int j = 0; j < size-i-1; j++) {\n        if(arr[j] > arr[j+1]) {\n            int temp = arr[j];\n            arr[j] = arr[j+1];\n            arr[j+1] = temp;\n        }\n    }\n}',
      hint: 'Compare adjacent elements and swap if needed'
    },
    {
      id: 'c_arrays_23',
      topicId: 'c_arrays',
      question: 'Initialize a 2D array "matrix" with values: first row 1,2,3; second row 4,5,6.',
      mathSolution: '2D array initialization with values',
      codeSolution: 'int matrix[2][3] = {{1,2,3}, {4,5,6}};',
      hint: 'Use nested braces for each row'
    },
    {
      id: 'c_arrays_24',
      topicId: 'c_arrays',
      question: 'Print a 2D array "matrix" with 3 rows and 3 columns in matrix format.',
      mathSolution: 'Print 2D array',
      codeSolution: 'for(int i = 0; i < 3; i++) {\n    for(int j = 0; j < 3; j++) {\n        printf("%d ", matrix[i][j]);\n    }\n    printf("\\n");\n}',
      hint: 'Use nested loops, print newline after each row'
    },
    {
      id: 'c_arrays_25',
      topicId: 'c_arrays',
      question: 'Find the sum of all elements in a 3x3 integer matrix.',
      mathSolution: 'Sum of 2D array elements',
      codeSolution: 'int sum = 0;\nfor(int i = 0; i < 3; i++) {\n    for(int j = 0; j < 3; j++) {\n        sum += matrix[i][j];\n    }\n}',
      hint: 'Nested loops to access each element'
    },
    {
      id: 'c_arrays_26',
      topicId: 'c_arrays',
      question: 'Find the transpose of a 2x3 matrix and store in a 3x2 matrix.',
      mathSolution: 'Matrix transpose',
      codeSolution: 'int transpose[3][2];\nfor(int i = 0; i < 2; i++) {\n    for(int j = 0; j < 3; j++) {\n        transpose[j][i] = matrix[i][j];\n    }\n}',
      hint: 'Swap rows and columns: result[j][i] = original[i][j]'
    },
    {
      id: 'c_arrays_27',
      topicId: 'c_arrays',
      question: 'Check if two arrays of same size are equal (all elements same).',
      mathSolution: 'Compare arrays',
      codeSolution: 'int equal = 1;\nfor(int i = 0; i < size; i++) {\n    if(arr1[i] != arr2[i]) {\n        equal = 0;\n        break;\n    }\n}',
      hint: 'Assume equal, set flag to 0 if mismatch found'
    },
    {
      id: 'c_arrays_28',
      topicId: 'c_arrays',
      question: 'Merge two sorted arrays into a third sorted array.',
      mathSolution: 'Merge sorted arrays',
      codeSolution: 'int i=0, j=0, k=0;\nwhile(i < size1 && j < size2) {\n    if(arr1[i] < arr2[j])\n        arr3[k++] = arr1[i++];\n    else\n        arr3[k++] = arr2[j++];\n}\nwhile(i < size1) arr3[k++] = arr1[i++];\nwhile(j < size2) arr3[k++] = arr2[j++];',
      hint: 'Compare and pick smaller element each time'
    },
    {
      id: 'c_arrays_29',
      topicId: 'c_arrays',
      question: 'Remove duplicates from a sorted array.',
      mathSolution: 'Remove duplicates in-place',
      codeSolution: 'int j = 0;\nfor(int i = 0; i < size-1; i++) {\n    if(arr[i] != arr[i+1])\n        arr[j++] = arr[i];\n}\narr[j++] = arr[size-1];',
      hint: 'Keep track of unique elements position'
    },
    {
      id: 'c_arrays_30',
      topicId: 'c_arrays',
      question: 'Left rotate an array by one position.',
      mathSolution: 'Rotate array left',
      codeSolution: 'int first = arr[0];\nfor(int i = 0; i < size-1; i++) {\n    arr[i] = arr[i+1];\n}\narr[size-1] = first;',
      hint: 'Save first element, shift left, place first at end'
    },

    // ============ LEVEL 4: SEARCHING & SORTING (31-40) ============
    {
      id: 'c_arrays_31',
      topicId: 'c_arrays',
      question: 'Find the second largest element in an array.',
      mathSolution: 'Find second maximum',
      codeSolution: 'int largest = arr[0], second = arr[0];\nfor(int i = 1; i < size; i++) {\n    if(arr[i] > largest) {\n        second = largest;\n        largest = arr[i];\n    } else if(arr[i] > second && arr[i] != largest) {\n        second = arr[i];\n    }\n}',
      hint: 'Track both largest and second largest'
    },
    {
      id: 'c_arrays_32',
      topicId: 'c_arrays',
      question: 'Declare a constant array that cannot be modified.',
      mathSolution: 'Constant array declaration',
      codeSolution: 'const int arr[5] = {1,2,3,4,5};',
      hint: 'Use const keyword'
    },
    {
      id: 'c_arrays_33',
      topicId: 'c_arrays',
      question: 'Create an array of structures for student records with name and age.',
      mathSolution: 'Array of structures',
      codeSolution: 'struct Student {\n    char name[50];\n    int age;\n};\nstruct Student students[10];',
      hint: 'Define structure first, then declare array'
    },
    {
      id: 'c_arrays_34',
      topicId: 'c_arrays',
      question: 'Initialize an array of structures with data.',
      mathSolution: 'Initialize array of structures',
      codeSolution: 'struct Student students[2] = {\n    {"Alice", 20},\n    {"Bob", 22}\n};',
      hint: 'Use nested braces for each structure'
    },
    {
      id: 'c_arrays_35',
      topicId: 'c_arrays',
      question: 'Write a function to return the number of elements in an array.',
      mathSolution: 'Array length in function',
      codeSolution: '// Can\'t directly, must pass size as parameter\nvoid func(int arr[], int size) {\n    // size parameter gives array length\n}',
      hint: 'Arrays decay to pointers in functions, so size must be passed'
    },
    {
      id: 'c_arrays_36',
      topicId: 'c_arrays',
      question: 'Use memset to set all elements of an integer array to 0.',
      mathSolution: 'Set array to zero with memset',
      codeSolution: '#include <string.h>\nmemset(arr, 0, size * sizeof(int));',
      hint: 'memset works on byte level'
    },
    {
      id: 'c_arrays_37',
      topicId: 'c_arrays',
      question: 'Use memcpy to copy one array to another.',
      mathSolution: 'Copy array with memcpy',
      codeSolution: '#include <string.h>\nmemcpy(dest, src, size * sizeof(int));',
      hint: 'memcpy requires size in bytes'
    },
    {
      id: 'c_arrays_38',
      topicId: 'c_arrays',
      question: 'Find the frequency of each element in an array.',
      mathSolution: 'Count element frequencies',
      codeSolution: 'int freq[100] = {0};\nfor(int i = 0; i < size; i++) {\n    freq[arr[i]]++;\n}',
      hint: 'Use array element as index in frequency array'
    },
    {
      id: 'c_arrays_39',
      topicId: 'c_arrays',
      question: 'Separate even and odd numbers from an array into two different arrays.',
      mathSolution: 'Separate even and odd',
      codeSolution: 'int even[100], odd[100];\nint e=0, o=0;\nfor(int i = 0; i < size; i++) {\n    if(arr[i] % 2 == 0)\n        even[e++] = arr[i];\n    else\n        odd[o++] = arr[i];\n}',
      hint: 'Check arr[i] % 2 to determine even/odd'
    },
    {
      id: 'c_arrays_40',
      topicId: 'c_arrays',
      question: 'Implement linear search to find an element "key" in array.',
      mathSolution: 'Linear search algorithm',
      codeSolution: 'int found = -1;\nfor(int i = 0; i < size; i++) {\n    if(arr[i] == key) {\n        found = i;\n        break;\n    }\n}',
      hint: 'Return index if found, -1 otherwise'
    },

    // ============ LEVEL 5: ADVANCED ALGORITHMS (41-50) ============
    {
      id: 'c_arrays_41',
      topicId: 'c_arrays',
      question: 'Implement binary search on a sorted array.',
      mathSolution: 'Binary search algorithm',
      codeSolution: 'int left = 0, right = size-1;\nwhile(left <= right) {\n    int mid = left + (right - left)/2;\n    if(arr[mid] == key) return mid;\n    if(arr[mid] < key) left = mid + 1;\n    else right = mid - 1;\n}\nreturn -1;',
      hint: 'Divide and conquer, requires sorted array'
    },
    {
      id: 'c_arrays_42',
      topicId: 'c_arrays',
      question: 'Insert an element at a specific position in an array.',
      mathSolution: 'Array insertion',
      codeSolution: 'for(int i = size; i > pos; i--) {\n    arr[i] = arr[i-1];\n}\narr[pos] = value;\nsize++;',
      hint: 'Shift elements right from the end'
    },
    {
      id: 'c_arrays_43',
      topicId: 'c_arrays',
      question: 'Delete an element from a specific position in an array.',
      mathSolution: 'Array deletion',
      codeSolution: 'for(int i = pos; i < size-1; i++) {\n    arr[i] = arr[i+1];\n}\nsize--;',
      hint: 'Shift elements left from position'
    },
    {
      id: 'c_arrays_44',
      topicId: 'c_arrays',
      question: 'Find the missing number in an array of size n containing numbers 1 to n+1.',
      mathSolution: 'Find missing number',
      codeSolution: 'int total = (n+1)*(n+2)/2;\nint sum = 0;\nfor(int i = 0; i < n; i++)\n    sum += arr[i];\nint missing = total - sum;',
      hint: 'Use sum formula: n(n+1)/2'
    },
    {
      id: 'c_arrays_45',
      topicId: 'c_arrays',
      question: 'Find the first repeating element in an array.',
      mathSolution: 'First repeating element',
      codeSolution: 'int freq[1000] = {0};\nfor(int i = 0; i < size; i++) {\n    freq[arr[i]]++;\n    if(freq[arr[i]] > 1) {\n        printf("%d", arr[i]);\n        break;\n    }\n}',
      hint: 'Track frequency and check for >1'
    },
    {
      id: 'c_arrays_46',
      topicId: 'c_arrays',
      question: 'Find the maximum product of two integers in an array.',
      mathSolution: 'Maximum product pair',
      codeSolution: 'int max1 = arr[0], max2 = arr[1];\nif(max1 < max2) { int temp = max1; max1 = max2; max2 = temp; }\nfor(int i = 2; i < size; i++) {\n    if(arr[i] > max1) {\n        max2 = max1;\n        max1 = arr[i];\n    } else if(arr[i] > max2) {\n        max2 = arr[i];\n    }\n}\nint product = max1 * max2;',
      hint: 'Find two largest numbers'
    },
    {
      id: 'c_arrays_47',
      topicId: 'c_arrays',
      question: 'Find the subarray with maximum sum (Kadane\'s algorithm).',
      mathSolution: 'Maximum subarray sum',
      codeSolution: 'int max_so_far = arr[0];\nint max_ending_here = arr[0];\nfor(int i = 1; i < size; i++) {\n    max_ending_here = (arr[i] > max_ending_here + arr[i]) ? arr[i] : max_ending_here + arr[i];\n    max_so_far = (max_so_far > max_ending_here) ? max_so_far : max_ending_here;\n}',
      hint: 'Dynamic programming approach'
    },
    {
      id: 'c_arrays_48',
      topicId: 'c_arrays',
      question: 'Rotate an array by k positions to the right.',
      mathSolution: 'Array rotation',
      codeSolution: 'k = k % size;\n// Reverse entire array\nfor(int i = 0; i < size/2; i++) {\n    int temp = arr[i];\n    arr[i] = arr[size-1-i];\n    arr[size-1-i] = temp;\n}\n// Reverse first k elements\nfor(int i = 0; i < k/2; i++) {\n    int temp = arr[i];\n    arr[i] = arr[k-1-i];\n    arr[k-1-i] = temp;\n}\n// Reverse remaining elements\nfor(int i = 0; i < (size-k)/2; i++) {\n    int temp = arr[k+i];\n    arr[k+i] = arr[size-1-i];\n    arr[size-1-i] = temp;\n}',
      hint: 'Use reversal algorithm'
    },
    {
      id: 'c_arrays_49',
      topicId: 'c_arrays',
      question: 'Create a jagged array (array of arrays with different sizes).',
      mathSolution: 'Jagged array implementation',
      codeSolution: 'int *jagged[3];\nint sizes[3] = {2, 4, 3};\nfor(int i = 0; i < 3; i++) {\n    jagged[i] = malloc(sizes[i] * sizeof(int));\n}',
      hint: 'Use array of pointers and dynamic allocation'
    },
    {
      id: 'c_arrays_50',
      topicId: 'c_arrays',
      question: 'Find the common elements in three sorted arrays.',
      mathSolution: 'Common elements in three arrays',
      codeSolution: 'int i=0, j=0, k=0;\nwhile(i < size1 && j < size2 && k < size3) {\n    if(arr1[i] == arr2[j] && arr2[j] == arr3[k]) {\n        printf("%d ", arr1[i]);\n        i++; j++; k++;\n    } else if(arr1[i] < arr2[j]) i++;\n    else if(arr2[j] < arr3[k]) j++;\n    else k++;\n}',
      hint: 'Move pointer of smallest element'
    },

    // ============ LEVEL 6: POINTER TECHNIQUES (51-60) ============
    {
      id: 'c_arrays_51',
      topicId: 'c_arrays',
      question: 'Implement a function to reverse an array using pointers.',
      mathSolution: 'Reverse array with pointers',
      codeSolution: 'void reverse(int *arr, int size) {\n    int *start = arr;\n    int *end = arr + size - 1;\n    while(start < end) {\n        int temp = *start;\n        *start = *end;\n        *end = temp;\n        start++;\n        end--;\n    }\n}',
      hint: 'Use two pointers moving towards each other'
    },
    {
      id: 'c_arrays_52',
      topicId: 'c_arrays',
      question: 'Find the majority element (element appearing more than n/2 times).',
      mathSolution: 'Moore\'s Voting Algorithm',
      codeSolution: 'int candidate = arr[0], count = 1;\nfor(int i = 1; i < size; i++) {\n    if(arr[i] == candidate) count++;\n    else count--;\n    if(count == 0) {\n        candidate = arr[i];\n        count = 1;\n    }\n}\n// Verify candidate appears > n/2 times\ncount = 0;\nfor(int i = 0; i < size; i++)\n    if(arr[i] == candidate) count++;\nif(count > size/2) // candidate is majority',
      hint: 'Cancel out different elements'
    },
    {
      id: 'c_arrays_53',
      topicId: 'c_arrays',
      question: 'Find the pair of elements with sum closest to zero.',
      mathSolution: 'Sum closest to zero',
      codeSolution: 'int min_sum = arr[0] + arr[1];\nint pair1 = 0, pair2 = 1;\nfor(int i = 0; i < size-1; i++) {\n    for(int j = i+1; j < size; j++) {\n        int sum = arr[i] + arr[j];\n        if(abs(sum) < abs(min_sum)) {\n            min_sum = sum;\n            pair1 = i;\n            pair2 = j;\n        }\n    }\n}',
      hint: 'Compare absolute sums'
    },
    {
      id: 'c_arrays_54',
      topicId: 'c_arrays',
      question: 'Implement a circular array traversal.',
      mathSolution: 'Circular array',
      codeSolution: 'int start = 2; // start index\nfor(int i = 0; i < size; i++) {\n    int index = (start + i) % size;\n    printf("%d ", arr[index]);\n}',
      hint: 'Use modulo operator for wrap-around'
    },
    {
      id: 'c_arrays_55',
      topicId: 'c_arrays',
      question: 'Find the length of the longest increasing subsequence in an array.',
      mathSolution: 'Longest increasing subsequence',
      codeSolution: 'int lis[100];\nfor(int i = 0; i < size; i++) lis[i] = 1;\nfor(int i = 1; i < size; i++) {\n    for(int j = 0; j < i; j++) {\n        if(arr[i] > arr[j] && lis[i] < lis[j] + 1)\n            lis[i] = lis[j] + 1;\n    }\n}\nint max = 0;\nfor(int i = 0; i < size; i++)\n    if(lis[i] > max) max = lis[i];',
      hint: 'Dynamic programming: lis[i] = max length ending at i'
    },
    {
      id: 'c_arrays_56',
      topicId: 'c_arrays',
      question: 'Implement a function to move all zeros to the end of array.',
      mathSolution: 'Move zeros to end',
      codeSolution: 'int nonZero = 0;\nfor(int i = 0; i < size; i++) {\n    if(arr[i] != 0)\n        arr[nonZero++] = arr[i];\n}\nwhile(nonZero < size)\n    arr[nonZero++] = 0;',
      hint: 'Shift non-zero elements forward'
    },
    {
      id: 'c_arrays_57',
      topicId: 'c_arrays',
      question: 'Find the equilibrium index where sum of left equals sum of right.',
      mathSolution: 'Equilibrium index',
      codeSolution: 'int total = 0, left = 0;\nfor(int i = 0; i < size; i++) total += arr[i];\nfor(int i = 0; i < size; i++) {\n    total -= arr[i];\n    if(left == total)\n        printf("Equilibrium at %d", i);\n    left += arr[i];\n}',
      hint: 'Maintain left sum and right sum (total - current - left)'
    },
    {
      id: 'c_arrays_58',
      topicId: 'c_arrays',
      question: 'Find the leaders in an array (elements greater than all to their right).',
      mathSolution: 'Leaders in array',
      codeSolution: 'int max_from_right = arr[size-1];\nprintf("%d ", max_from_right);\nfor(int i = size-2; i >= 0; i--) {\n    if(arr[i] > max_from_right) {\n        max_from_right = arr[i];\n        printf("%d ", arr[i]);\n    }\n}',
      hint: 'Traverse from right, keep track of maximum'
    },
    {
      id: 'c_arrays_59',
      topicId: 'c_arrays',
      question: 'Find the maximum difference between two elements where larger appears after smaller.',
      mathSolution: 'Maximum difference',
      codeSolution: 'int min_so_far = arr[0];\nint max_diff = arr[1] - arr[0];\nfor(int i = 1; i < size; i++) {\n    if(arr[i] - min_so_far > max_diff)\n        max_diff = arr[i] - min_so_far;\n    if(arr[i] < min_so_far)\n        min_so_far = arr[i];\n}',
      hint: 'Track minimum so far and update max difference'
    },
    {
      id: 'c_arrays_60',
      topicId: 'c_arrays',
      question: 'Find the smallest positive missing number in an array.',
      mathSolution: 'Smallest positive missing',
      codeSolution: 'int present[1000] = {0};\nfor(int i = 0; i < size; i++) {\n    if(arr[i] > 0)\n        present[arr[i]] = 1;\n}\nfor(int i = 1; i < 1000; i++) {\n    if(!present[i]) {\n        printf("%d", i);\n        break;\n    }\n}',
      hint: 'Mark present numbers, find first missing'
    },

    // ============ LEVEL 7: ADVANCED PROBLEMS (61-70) ============
    {
      id: 'c_arrays_61',
      topicId: 'c_arrays',
      question: 'Find the longest consecutive subsequence in an array.',
      mathSolution: 'Longest consecutive sequence',
      codeSolution: 'int hash[1000] = {0};\nfor(int i = 0; i < size; i++) hash[arr[i]] = 1;\nint max_len = 0;\nfor(int i = 0; i < size; i++) {\n    if(hash[arr[i] - 1] == 0) {\n        int j = arr[i];\n        while(hash[j]) j++;\n        if(j - arr[i] > max_len)\n            max_len = j - arr[i];\n    }\n}',
      hint: 'Check if current is start of sequence'
    },
    {
      id: 'c_arrays_62',
      topicId: 'c_arrays',
      question: 'Implement a sparse array representation using structures.',
      mathSolution: 'Sparse array representation',
      codeSolution: 'struct SparseElement {\n    int row;\n    int col;\n    int value;\n};\nstruct SparseElement sparse[100];\nint count = 0;\nfor(int i = 0; i < rows; i++) {\n    for(int j = 0; j < cols; j++) {\n        if(matrix[i][j] != 0) {\n            sparse[count].row = i;\n            sparse[count].col = j;\n            sparse[count].value = matrix[i][j];\n            count++;\n        }\n    }\n}',
      hint: 'Store only non-zero elements with coordinates'
    },
    {
      id: 'c_arrays_63',
      topicId: 'c_arrays',
      question: 'Find the median of two sorted arrays.',
      mathSolution: 'Median of two sorted arrays',
      codeSolution: 'int merge[200];\nint i=0, j=0, k=0;\nwhile(i < size1 && j < size2) {\n    if(arr1[i] < arr2[j])\n        merge[k++] = arr1[i++];\n    else\n        merge[k++] = arr2[j++];\n}\nwhile(i < size1) merge[k++] = arr1[i++];\nwhile(j < size2) merge[k++] = arr2[j++];\nint total = size1 + size2;\nif(total % 2 == 1)\n    return merge[total/2];\nelse\n    return (merge[total/2 - 1] + merge[total/2]) / 2.0;',
      hint: 'Merge and find middle element(s)'
    },
    {
      id: 'c_arrays_64',
      topicId: 'c_arrays',
      question: 'Find the kth smallest element in an array.',
      mathSolution: 'Kth smallest element',
      codeSolution: '// Simple approach: sort and return arr[k-1]\n// Better: QuickSelect\nint partition(int arr[], int left, int right) {\n    int pivot = arr[right];\n    int i = left;\n    for(int j = left; j < right; j++) {\n        if(arr[j] <= pivot) {\n            int temp = arr[i];\n            arr[i] = arr[j];\n            arr[j] = temp;\n            i++;\n        }\n    }\n    int temp = arr[i];\n    arr[i] = arr[right];\n    arr[right] = temp;\n    return i;\n}\n\nint quickSelect(int arr[], int left, int right, int k) {\n    if(left == right) return arr[left];\n    int p = partition(arr, left, right);\n    if(k == p) return arr[k];\n    else if(k < p) return quickSelect(arr, left, p-1, k);\n    else return quickSelect(arr, p+1, right, k);\n}',
      hint: 'Use QuickSelect algorithm for O(n) average'
    },
    {
      id: 'c_arrays_65',
      topicId: 'c_arrays',
      question: 'Implement a 3D array and access an element.',
      mathSolution: '3D array operations',
      codeSolution: 'int arr3D[2][3][4] = {{{1,2,3,4}, {5,6,7,8}, {9,10,11,12}},\n                       {{13,14,15,16}, {17,18,19,20}, {21,22,23,24}}};\nint value = arr3D[1][2][3]; // Access element',
      hint: 'Use triple indexing: [depth][row][col]'
    },
    {
      id: 'c_arrays_66',
      topicId: 'c_arrays',
      question: 'Find the row with maximum number of 1\'s in a binary matrix.',
      mathSolution: 'Maximum 1\'s in binary matrix',
      codeSolution: 'int max_row = 0, max_count = 0;\nfor(int i = 0; i < rows; i++) {\n    int count = 0;\n    for(int j = 0; j < cols; j++) {\n        if(matrix[i][j] == 1) count++;\n    }\n    if(count > max_count) {\n        max_count = count;\n        max_row = i;\n    }\n}',
      hint: 'Count 1\'s in each row and track maximum'
    },
    {
      id: 'c_arrays_67',
      topicId: 'c_arrays',
      question: 'Implement matrix multiplication of two matrices.',
      mathSolution: 'Matrix multiplication',
      codeSolution: 'int result[10][10] = {0};\nfor(int i = 0; i < rows1; i++) {\n    for(int j = 0; j < cols2; j++) {\n        for(int k = 0; k < cols1; k++) {\n            result[i][j] += mat1[i][k] * mat2[k][j];\n        }\n    }\n}',
      hint: 'Triple nested loops: result[i][j] = sum(mat1[i][k] * mat2[k][j])'
    },
    {
      id: 'c_arrays_68',
      topicId: 'c_arrays',
      question: 'Find the saddle point in a matrix (element smallest in row and largest in column).',
      mathSolution: 'Saddle point',
      codeSolution: 'for(int i = 0; i < rows; i++) {\n    int min_row = matrix[i][0];\n    int col_index = 0;\n    for(int j = 1; j < cols; j++) {\n        if(matrix[i][j] < min_row) {\n            min_row = matrix[i][j];\n            col_index = j;\n        }\n    }\n    int max_col = matrix[i][col_index];\n    for(int k = 0; k < rows; k++) {\n        if(matrix[k][col_index] > max_col) {\n            max_col = matrix[k][col_index];\n        }\n    }\n    if(min_row == max_col) {\n        printf("Saddle point: %d at (%d,%d)", min_row, i, col_index);\n    }\n}',
      hint: 'Find min in row, then check if it\'s max in column'
    },
    {
      id: 'c_arrays_69',
      topicId: 'c_arrays',
      question: 'Implement a function to check if a matrix is symmetric.',
      mathSolution: 'Check symmetric matrix',
      codeSolution: 'int isSymmetric = 1;\nfor(int i = 0; i < rows; i++) {\n    for(int j = 0; j < cols; j++) {\n        if(matrix[i][j] != matrix[j][i]) {\n            isSymmetric = 0;\n            break;\n        }\n    }\n    if(!isSymmetric) break;\n}',
      hint: 'Matrix must be square and A[i][j] == A[j][i]'
    },
    {
      id: 'c_arrays_70',
      topicId: 'c_arrays',
      question: 'Print a matrix in spiral order.',
      mathSolution: 'Spiral traversal of matrix',
      codeSolution: 'int top = 0, bottom = rows-1, left = 0, right = cols-1;\nwhile(top <= bottom && left <= right) {\n    for(int i = left; i <= right; i++)\n        printf("%d ", matrix[top][i]);\n    top++;\n    for(int i = top; i <= bottom; i++)\n        printf("%d ", matrix[i][right]);\n    right--;\n    if(top <= bottom) {\n        for(int i = right; i >= left; i--)\n            printf("%d ", matrix[bottom][i]);\n        bottom--;\n    }\n    if(left <= right) {\n        for(int i = bottom; i >= top; i--)\n            printf("%d ", matrix[i][left]);\n        left++;\n    }\n}',
      hint: 'Maintain boundaries and shrink them'
    },

    // ============ LEVEL 8: MATRIX OPERATIONS (71-80) ============
    {
      id: 'c_arrays_71',
      topicId: 'c_arrays',
      question: 'Rotate a matrix by 90 degrees clockwise.',
      mathSolution: 'Matrix rotation',
      codeSolution: '// Transpose\nfor(int i = 0; i < rows; i++) {\n    for(int j = i+1; j < cols; j++) {\n        int temp = matrix[i][j];\n        matrix[i][j] = matrix[j][i];\n        matrix[j][i] = temp;\n    }\n}\n// Reverse each row\nfor(int i = 0; i < rows; i++) {\n    for(int j = 0; j < cols/2; j++) {\n        int temp = matrix[i][j];\n        matrix[i][j] = matrix[i][cols-1-j];\n        matrix[i][cols-1-j] = temp;\n    }\n}',
      hint: 'Transpose then reverse each row'
    },
    {
      id: 'c_arrays_72',
      topicId: 'c_arrays',
      question: 'Find the row with maximum sum in a matrix.',
      mathSolution: 'Maximum row sum',
      codeSolution: 'int max_sum = 0, max_row = 0;\nfor(int i = 0; i < rows; i++) {\n    int sum = 0;\n    for(int j = 0; j < cols; j++) {\n        sum += matrix[i][j];\n    }\n    if(sum > max_sum) {\n        max_sum = sum;\n        max_row = i;\n    }\n}',
      hint: 'Calculate sum for each row, track maximum'
    },
    {
      id: 'c_arrays_73',
      topicId: 'c_arrays',
      question: 'Find the diagonal sum of a square matrix.',
      mathSolution: 'Diagonal sum',
      codeSolution: 'int primary_sum = 0, secondary_sum = 0;\nfor(int i = 0; i < rows; i++) {\n    primary_sum += matrix[i][i];\n    secondary_sum += matrix[i][rows-1-i];\n}',
      hint: 'Primary: i==j, Secondary: i+j == size-1'
    },
    {
      id: 'c_arrays_74',
      topicId: 'c_arrays',
      question: 'Create an array of function pointers.',
      mathSolution: 'Array of function pointers',
      codeSolution: 'int add(int a, int b) { return a+b; }\nint sub(int a, int b) { return a-b; }\nint mul(int a, int b) { return a*b; }\n\nint (*operations[3])(int, int) = {add, sub, mul};\nint result = operations[0](10, 5); // add(10,5)',
      hint: 'Syntax: return_type (*name[size])(parameters)'
    },
    {
      id: 'c_arrays_75',
      topicId: 'c_arrays',
      question: 'Find the number of triangles possible with given side lengths.',
      mathSolution: 'Count possible triangles',
      codeSolution: 'int count = 0;\nfor(int i = 0; i < size-2; i++) {\n    for(int j = i+1; j < size-1; j++) {\n        for(int k = j+1; k < size; k++) {\n            if(arr[i] + arr[j] > arr[k] &&\n               arr[j] + arr[k] > arr[i] &&\n               arr[k] + arr[i] > arr[j])\n                count++;\n        }\n    }\n}',
      hint: 'Triangle inequality: sum of any two sides > third'
    },
    {
      id: 'c_arrays_76',
      topicId: 'c_arrays',
      question: 'Implement a function to shuffle an array randomly.',
      mathSolution: 'Fisher-Yates shuffle',
      codeSolution: '#include <stdlib.h>\n#include <time.h>\nsrand(time(NULL));\nfor(int i = size-1; i > 0; i--) {\n    int j = rand() % (i+1);\n    int temp = arr[i];\n    arr[i] = arr[j];\n    arr[j] = temp;\n}',
      hint: 'Swap each element with random earlier element'
    },
    {
      id: 'c_arrays_77',
      topicId: 'c_arrays',
      question: 'Find the longest palindrome in an array of characters.',
      mathSolution: 'Longest palindrome in array',
      codeSolution: 'int start = 0, max_len = 1;\nfor(int i = 0; i < size; i++) {\n    // Odd length\n    int low = i-1, high = i+1;\n    while(low >= 0 && high < size && arr[low] == arr[high]) {\n        if(high - low + 1 > max_len) {\n            max_len = high - low + 1;\n            start = low;\n        }\n        low--; high++;\n    }\n    // Even length\n    low = i; high = i+1;\n    while(low >= 0 && high < size && arr[low] == arr[high]) {\n        if(high - low + 1 > max_len) {\n            max_len = high - low + 1;\n            start = low;\n        }\n        low--; high++;\n    }\n}',
      hint: 'Expand around center for odd and even lengths'
    },
    {
      id: 'c_arrays_78',
      topicId: 'c_arrays',
      question: 'Create an array of strings (array of character arrays).',
      mathSolution: 'Array of strings',
      codeSolution: 'char *fruits[] = {"Apple", "Banana", "Orange"};\n// or\nchar fruits[3][10] = {"Apple", "Banana", "Orange"};',
      hint: 'Two ways: array of pointers or 2D char array'
    },
    {
      id: 'c_arrays_79',
      topicId: 'c_arrays',
      question: 'Sort an array of strings alphabetically.',
      mathSolution: 'Sort strings',
      codeSolution: '#include <string.h>\nfor(int i = 0; i < size-1; i++) {\n    for(int j = i+1; j < size; j++) {\n        if(strcmp(arr[i], arr[j]) > 0) {\n            char *temp = arr[i];\n            arr[i] = arr[j];\n            arr[j] = temp;\n        }\n    }\n}',
      hint: 'Use strcmp() for comparison'
    },
    {
      id: 'c_arrays_80',
      topicId: 'c_arrays',
      question: 'Find the longest common prefix among an array of strings.',
      mathSolution: 'Longest common prefix',
      codeSolution: 'if(size == 0) return;\nchar *prefix = arr[0];\nfor(int i = 1; i < size; i++) {\n    int j = 0;\n    while(prefix[j] && arr[i][j] && prefix[j] == arr[i][j])\n        j++;\n    prefix[j] = \'\\0\';\n    if(j == 0) break;\n}',
      hint: 'Compare each string with current prefix'
    },

    // ============ LEVEL 9: DATA STRUCTURES (81-90) ============
    {
      id: 'c_arrays_81',
      topicId: 'c_arrays',
      question: 'Implement a dynamic array that can grow.',
      mathSolution: 'Dynamic array',
      codeSolution: 'int *arr = malloc(5 * sizeof(int));\nint size = 0, capacity = 5;\nvoid insert(int value) {\n    if(size == capacity) {\n        capacity *= 2;\n        arr = realloc(arr, capacity * sizeof(int));\n    }\n    arr[size++] = value;\n}',
      hint: 'Use malloc/realloc for dynamic sizing'
    },
    {
      id: 'c_arrays_82',
      topicId: 'c_arrays',
      question: 'Find the number of inversions in an array.',
      mathSolution: 'Count inversions',
      codeSolution: 'int count = 0;\nfor(int i = 0; i < size-1; i++) {\n    for(int j = i+1; j < size; j++) {\n        if(arr[i] > arr[j])\n            count++;\n    }\n}',
      hint: 'Inversion: i < j and arr[i] > arr[j]'
    },
    {
      id: 'c_arrays_83',
      topicId: 'c_arrays',
      question: 'Find the next greater element for each element in array.',
      mathSolution: 'Next greater element',
      codeSolution: 'for(int i = 0; i < size; i++) {\n    int next = -1;\n    for(int j = i+1; j < size; j++) {\n        if(arr[j] > arr[i]) {\n            next = arr[j];\n            break;\n        }\n    }\n    printf("%d -> %d\\n", arr[i], next);\n}',
      hint: 'For each element, scan right for greater'
    },
    {
      id: 'c_arrays_84',
      topicId: 'c_arrays',
      question: 'Implement a queue using array.',
      mathSolution: 'Array-based queue',
      codeSolution: 'int queue[100];\nint front = 0, rear = -1;\nvoid enqueue(int value) {\n    if(rear < 99)\n        queue[++rear] = value;\n}\nint dequeue() {\n    if(front <= rear)\n        return queue[front++];\n    return -1;\n}',
      hint: 'Maintain front and rear indices'
    },
    {
      id: 'c_arrays_85',
      topicId: 'c_arrays',
      question: 'Implement a stack using array.',
      mathSolution: 'Array-based stack',
      codeSolution: 'int stack[100];\nint top = -1;\nvoid push(int value) {\n    if(top < 99)\n        stack[++top] = value;\n}\nint pop() {\n    if(top >= 0)\n        return stack[top--];\n    return -1;\n}',
      hint: 'Use top pointer to track last element'
    },
    {
      id: 'c_arrays_86',
      topicId: 'c_arrays',
      question: 'Find the element that appears once when others appear twice.',
      mathSolution: 'Find single element',
      codeSolution: 'int result = 0;\nfor(int i = 0; i < size; i++)\n    result ^= arr[i];',
      hint: 'Use XOR: a^a = 0, a^0 = a'
    },
    {
      id: 'c_arrays_87',
      topicId: 'c_arrays',
      question: 'Find the intersection of two arrays.',
      mathSolution: 'Array intersection',
      codeSolution: 'for(int i = 0; i < size1; i++) {\n    for(int j = 0; j < size2; j++) {\n        if(arr1[i] == arr2[j]) {\n            printf("%d ", arr1[i]);\n            break;\n        }\n    }\n}',
      hint: 'Compare each element of first with second'
    },
    {
      id: 'c_arrays_88',
      topicId: 'c_arrays',
      question: 'Find the union of two arrays.',
      mathSolution: 'Array union',
      codeSolution: 'int unionArr[200], index = 0;\n// Copy first array\nfor(int i = 0; i < size1; i++)\n    unionArr[index++] = arr1[i];\n// Add elements from second not in first\nfor(int i = 0; i < size2; i++) {\n    int found = 0;\n    for(int j = 0; j < size1; j++) {\n        if(arr2[i] == arr1[j]) {\n            found = 1;\n            break;\n        }\n    }\n    if(!found)\n        unionArr[index++] = arr2[i];\n}',
      hint: 'Copy first array, then add unique from second'
    },
    {
      id: 'c_arrays_89',
      topicId: 'c_arrays',
      question: 'Find the triplet that sums to a given value.',
      mathSolution: 'Find triplet with given sum',
      codeSolution: 'for(int i = 0; i < size-2; i++) {\n    for(int j = i+1; j < size-1; j++) {\n        for(int k = j+1; k < size; k++) {\n            if(arr[i] + arr[j] + arr[k] == target)\n                printf("%d,%d,%d ", arr[i], arr[j], arr[k]);\n        }\n    }\n}',
      hint: 'Brute force with three nested loops'
    },
    {
      id: 'c_arrays_90',
      topicId: 'c_arrays',
      question: 'Find the subarray with given sum (non-negative numbers).',
      mathSolution: 'Subarray with given sum',
      codeSolution: 'int start = 0, current_sum = arr[0];\nfor(int i = 1; i <= size; i++) {\n    while(current_sum > target && start < i-1) {\n        current_sum -= arr[start];\n        start++;\n    }\n    if(current_sum == target) {\n        printf("Sum found between %d and %d", start, i-1);\n        break;\n    }\n    if(i < size)\n        current_sum += arr[i];\n}',
      hint: 'Use sliding window technique'
    },

    // ============ LEVEL 10: CHALLENGING PROBLEMS (91-100) ============
    {
      id: 'c_arrays_91',
      topicId: 'c_arrays',
      question: 'Find the smallest subarray with sum greater than given value.',
      mathSolution: 'Smallest subarray with sum > X',
      codeSolution: 'int min_len = size + 1;\nfor(int i = 0; i < size; i++) {\n    int sum = 0;\n    for(int j = i; j < size; j++) {\n        sum += arr[j];\n        if(sum > target && (j-i+1) < min_len) {\n            min_len = j-i+1;\n        }\n    }\n}',
      hint: 'Check all subarrays and track minimum length'
    },
    {
      id: 'c_arrays_92',
      topicId: 'c_arrays',
      question: 'Rearrange array in alternating positive and negative items.',
      mathSolution: 'Alternate positive negative',
      codeSolution: 'int i = 0, j = size-1;\n// Move all negatives to one side\nwhile(i <= j) {\n    if(arr[i] < 0 && arr[j] >= 0) {\n        int temp = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n        i++; j--;\n    } else if(arr[i] >= 0) i++;\n    else if(arr[j] < 0) j--;\n}\n// i is index of first negative\n// Rearrange alternating\nint pos = 0, neg = i;\nwhile(pos < neg && neg < size && arr[pos] >= 0) {\n    int temp = arr[pos];\n    arr[pos] = arr[neg];\n    arr[neg] = temp;\n    pos += 2;\n    neg++;\n}',
      hint: 'Separate positives and negatives, then interleave'
    },
    {
      id: 'c_arrays_93',
      topicId: 'c_arrays',
      question: 'Find the celebrity in a party using a matrix.',
      mathSolution: 'Celebrity problem',
      codeSolution: 'int a = 0, b = size-1;\nwhile(a < b) {\n    if(knows[a][b])\n        a++;\n    else\n        b--;\n}\n// a is potential celebrity\nfor(int i = 0; i < size; i++) {\n    if(i != a && (knows[a][i] || !knows[i][a]))\n        return -1;\n}\nreturn a;',
      hint: 'Celebrity knows nobody, everyone knows celebrity'
    },
    {
      id: 'c_arrays_94',
      topicId: 'c_arrays',
      question: 'Find the minimum number of platforms needed for railway schedules.',
      mathSolution: 'Minimum platforms',
      codeSolution: 'int platforms = 1, result = 1;\nfor(int i = 0; i < size; i++) {\n    platforms = 1;\n    for(int j = i+1; j < size; j++) {\n        if((arr[i] >= arr[j] && arr[i] <= dep[j]) ||\n           (arr[j] >= arr[i] && arr[j] <= dep[i]))\n            platforms++;\n    }\n    if(platforms > result)\n        result = platforms;\n}',
      hint: 'Count overlaps for each interval'
    },
    {
      id: 'c_arrays_95',
      topicId: 'c_arrays',
      question: 'Implement a circular queue using array.',
      mathSolution: 'Circular queue',
      codeSolution: 'int queue[5];\nint front = -1, rear = -1;\nvoid enqueue(int value) {\n    if((rear + 1) % 5 == front) return; // full\n    if(front == -1) front = 0;\n    rear = (rear + 1) % 5;\n    queue[rear] = value;\n}\nint dequeue() {\n    if(front == -1) return -1; // empty\n    int value = queue[front];\n    if(front == rear) front = rear = -1;\n    else front = (front + 1) % 5;\n    return value;\n}',
      hint: 'Use modulo for wrap-around indices'
    },
    {
      id: 'c_arrays_96',
      topicId: 'c_arrays',
      question: 'Find the maximum of all subarrays of size k.',
      mathSolution: 'Maximum in sliding window',
      codeSolution: 'for(int i = 0; i <= size-k; i++) {\n    int max = arr[i];\n    for(int j = 1; j < k; j++) {\n        if(arr[i+j] > max)\n            max = arr[i+j];\n    }\n    printf("%d ", max);\n}',
      hint: 'Find max in each window of size k'
    },
    {
      id: 'c_arrays_97',
      topicId: 'c_arrays',
      question: 'Find the first non-repeating element in an array.',
      mathSolution: 'First non-repeating element',
      codeSolution: 'int freq[1000] = {0};\nfor(int i = 0; i < size; i++)\n    freq[arr[i]]++;\nfor(int i = 0; i < size; i++) {\n    if(freq[arr[i]] == 1) {\n        printf("%d", arr[i]);\n        break;\n    }\n}',
      hint: 'Count frequencies, then find first with count 1'
    },
    {
      id: 'c_arrays_98',
      topicId: 'c_arrays',
      question: 'Find the smallest and second smallest elements in an array.',
      mathSolution: 'Smallest and second smallest',
      codeSolution: 'int first = INT_MAX, second = INT_MAX;\nfor(int i = 0; i < size; i++) {\n    if(arr[i] < first) {\n        second = first;\n        first = arr[i];\n    } else if(arr[i] < second && arr[i] != first) {\n        second = arr[i];\n    }\n}',
      hint: 'Track smallest and update second accordingly'
    },
    {
      id: 'c_arrays_99',
      topicId: 'c_arrays',
      question: 'Find the element that appears more than n/3 times.',
      mathSolution: 'Majority element (n/3)',
      codeSolution: 'int candidate1 = 0, candidate2 = 0, count1 = 0, count2 = 0;\nfor(int i = 0; i < size; i++) {\n    if(arr[i] == candidate1) count1++;\n    else if(arr[i] == candidate2) count2++;\n    else if(count1 == 0) {\n        candidate1 = arr[i];\n        count1 = 1;\n    } else if(count2 == 0) {\n        candidate2 = arr[i];\n        count2 = 1;\n    } else {\n        count1--;\n        count2--;\n    }\n}\n// Verify candidates\ncount1 = count2 = 0;\nfor(int i = 0; i < size; i++) {\n    if(arr[i] == candidate1) count1++;\n    else if(arr[i] == candidate2) count2++;\n}\nif(count1 > size/3) printf("%d ", candidate1);\nif(count2 > size/3) printf("%d ", candidate2);',
      hint: 'Moore\'s voting algorithm extended'
    },
    {
      id: 'c_arrays_100',
      topicId: 'c_arrays',
      question: 'Find the minimum length unsorted subarray that sorting makes the whole array sorted.',
      mathSolution: 'Minimum unsorted subarray',
      codeSolution: 'int start = 0, end = size-1;\n// Find first element out of order from left\nfor(start = 0; start < size-1; start++) {\n    if(arr[start] > arr[start+1])\n        break;\n}\nif(start == size-1) return; // already sorted\n// Find first element out of order from right\nfor(end = size-1; end > 0; end--) {\n    if(arr[end] < arr[end-1])\n        break;\n}\n// Find min and max in subarray\nint min = arr[start], max = arr[start];\nfor(int i = start+1; i <= end; i++) {\n    if(arr[i] < min) min = arr[i];\n    if(arr[i] > max) max = arr[i];\n}\n// Expand start if needed\nfor(int i = 0; i < start; i++) {\n    if(arr[i] > min) {\n        start = i;\n        break;\n    }\n}\n// Expand end if needed\nfor(int i = size-1; i > end; i--) {\n    if(arr[i] < max) {\n        end = i;\n        break;\n    }\n}',
      hint: 'Find boundaries, then expand if needed'
    }
);