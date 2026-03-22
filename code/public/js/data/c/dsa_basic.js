QuizData.questions.push(
  // ============ LEVEL 1: ARRAY BASICS (1-10) ============
  {
    id: 'c_dsa_1',
    topicId: 'c_dsa_basic',
    question: 'Write a function to insert an element at a given position in an array.',
    mathSolution: 'Insert element at index pos, shift elements right',
    codeSolution: 'void insert(int arr[], int *n, int pos, int val) {\n    for(int i = *n; i > pos; i--)\n        arr[i] = arr[i-1];\n    arr[pos] = val;\n    (*n)++;\n}',
    hint: 'Shift elements from end to pos'
  },
  {
    id: 'c_dsa_2',
    topicId: 'c_dsa_basic',
    question: 'Write a function to delete an element from a given position in an array.',
    mathSolution: 'Remove element at index pos, shift elements left',
    codeSolution: 'void delete(int arr[], int *n, int pos) {\n    for(int i = pos; i < *n-1; i++)\n        arr[i] = arr[i+1];\n    (*n)--;\n}',
    hint: 'Shift elements from pos+1 to left'
  },
  {
    id: 'c_dsa_3',
    topicId: 'c_dsa_basic',
    question: 'Write a function to search for an element in an unsorted array.',
    mathSolution: 'Linear search - return index or -1',
    codeSolution: 'int linearSearch(int arr[], int n, int key) {\n    for(int i = 0; i < n; i++)\n        if(arr[i] == key) return i;\n    return -1;\n}',
    hint: 'Check each element sequentially'
  },
  {
    id: 'c_dsa_4',
    topicId: 'c_dsa_basic',
    question: 'Write a function to search for an element in a sorted array using binary search.',
    mathSolution: 'Divide and conquer search',
    codeSolution: 'int binarySearch(int arr[], int low, int high, int key) {\n    while(low <= high) {\n        int mid = (low + high) / 2;\n        if(arr[mid] == key) return mid;\n        if(arr[mid] < key) low = mid + 1;\n        else high = mid - 1;\n    }\n    return -1;\n}',
    hint: 'Repeatedly divide search interval in half'
  },
  {
    id: 'c_dsa_5',
    topicId: 'c_dsa_basic',
    question: 'Write a function to reverse an array in place.',
    mathSolution: 'Reverse order of elements',
    codeSolution: 'void reverse(int arr[], int n) {\n    for(int i = 0; i < n/2; i++) {\n        int temp = arr[i];\n        arr[i] = arr[n-1-i];\n        arr[n-1-i] = temp;\n    }\n}',
    hint: 'Swap first with last, second with second-last, etc.'
  },
  {
    id: 'c_dsa_6',
    topicId: 'c_dsa_basic',
    question: 'Write a function to left rotate an array by one position.',
    mathSolution: 'Move first element to end',
    codeSolution: 'void leftRotateOne(int arr[], int n) {\n    int first = arr[0];\n    for(int i = 0; i < n-1; i++)\n        arr[i] = arr[i+1];\n    arr[n-1] = first;\n}',
    hint: 'Store first, shift left, put first at end'
  },
  {
    id: 'c_dsa_7',
    topicId: 'c_dsa_basic',
    question: 'Write a function to right rotate an array by one position.',
    mathSolution: 'Move last element to front',
    codeSolution: 'void rightRotateOne(int arr[], int n) {\n    int last = arr[n-1];\n    for(int i = n-1; i > 0; i--)\n        arr[i] = arr[i-1];\n    arr[0] = last;\n}',
    hint: 'Store last, shift right, put last at front'
  },
  {
    id: 'c_dsa_8',
    topicId: 'c_dsa_basic',
    question: 'Write a function to left rotate an array by k positions using reversal algorithm.',
    mathSolution: 'Reverse parts then whole',
    codeSolution: 'void reverseRange(int arr[], int start, int end) {\n    while(start < end) {\n        int temp = arr[start];\n        arr[start] = arr[end];\n        arr[end] = temp;\n        start++; end--;\n    }\n}\nvoid leftRotate(int arr[], int n, int k) {\n    k = k % n;\n    reverseRange(arr, 0, k-1);\n    reverseRange(arr, k, n-1);\n    reverseRange(arr, 0, n-1);\n}',
    hint: 'Reverse first k, reverse last n-k, reverse whole'
  },
  {
    id: 'c_dsa_9',
    topicId: 'c_dsa_basic',
    question: 'Write a function to count frequency of each element in an array.',
    mathSolution: 'Count occurrences of each element',
    codeSolution: 'void countFrequency(int arr[], int n) {\n    int visited[n];\n    for(int i = 0; i < n; i++) visited[i] = 0;\n    for(int i = 0; i < n; i++) {\n        if(visited[i]) continue;\n        int count = 1;\n        for(int j = i+1; j < n; j++)\n            if(arr[i] == arr[j]) {\n                count++;\n                visited[j] = 1;\n            }\n        printf("%d: %d\\n", arr[i], count);\n    }\n}',
    hint: 'Mark visited elements to avoid counting twice'
  },
  {
    id: 'c_dsa_10',
    topicId: 'c_dsa_basic',
    question: 'Write a function to find the first duplicate element in an array.',
    mathSolution: 'Return first element that appears twice',
    codeSolution: 'int firstDuplicate(int arr[], int n) {\n    int freq[1000] = {0};\n    for(int i = 0; i < n; i++) {\n        freq[arr[i]]++;\n        if(freq[arr[i]] == 2) return arr[i];\n    }\n    return -1;\n}',
    hint: 'Track counts, return when count becomes 2'
  },

  // ============ LEVEL 2: ARRAY ADVANCED (11-20) ============
  {
    id: 'c_dsa_11',
    topicId: 'c_dsa_basic',
    question: 'Write a function to remove duplicates from a sorted array.',
    mathSolution: 'Keep only unique elements',
    codeSolution: 'int removeDuplicates(int arr[], int n) {\n    if(n == 0) return 0;\n    int j = 0;\n    for(int i = 1; i < n; i++)\n        if(arr[i] != arr[j])\n            arr[++j] = arr[i];\n    return j + 1;\n}',
    hint: 'Use two pointers - one for unique, one for scanning'
  },
  {
    id: 'c_dsa_12',
    topicId: 'c_dsa_basic',
    question: 'Write a function to find the element that appears most frequently (mode).',
    mathSolution: 'Element with highest frequency',
    codeSolution: 'int findMode(int arr[], int n) {\n    int freq[1000] = {0}, maxCount = 0, mode = arr[0];\n    for(int i = 0; i < n; i++) {\n        freq[arr[i]]++;\n        if(freq[arr[i]] > maxCount) {\n            maxCount = freq[arr[i]];\n            mode = arr[i];\n        }\n    }\n    return mode;\n}',
    hint: 'Track counts and update maximum'
  },
  {
    id: 'c_dsa_13',
    topicId: 'c_dsa_basic',
    question: 'Write a function to find if there exists a pair with given sum in unsorted array.',
    mathSolution: 'Check all pairs for target sum',
    codeSolution: 'int hasPairSum(int arr[], int n, int target) {\n    for(int i = 0; i < n-1; i++)\n        for(int j = i+1; j < n; j++)\n            if(arr[i] + arr[j] == target) return 1;\n    return 0;\n}',
    hint: 'Brute force - check all pairs'
  },
  {
    id: 'c_dsa_14',
    topicId: 'c_dsa_basic',
    question: 'Write a function to find a pair with given sum in sorted array using two pointers.',
    mathSolution: 'Efficient O(n) approach for sorted array',
    codeSolution: 'int pairSumSorted(int arr[], int n, int target) {\n    int left = 0, right = n-1;\n    while(left < right) {\n        int sum = arr[left] + arr[right];\n        if(sum == target) return 1;\n        if(sum < target) left++;\n        else right--;\n    }\n    return 0;\n}',
    hint: 'Move left and right pointers based on sum'
  },
  {
    id: 'c_dsa_15',
    topicId: 'c_dsa_basic',
    question: 'Write a function to find a triplet with given sum.',
    mathSolution: 'Find three elements that sum to target',
    codeSolution: 'int tripletSum(int arr[], int n, int target) {\n    for(int i = 0; i < n-2; i++) {\n        int left = i+1, right = n-1;\n        while(left < right) {\n            int sum = arr[i] + arr[left] + arr[right];\n            if(sum == target) return 1;\n            if(sum < target) left++;\n            else right--;\n        }\n    }\n    return 0;\n}',
    hint: 'Fix one element, use two-pointer for rest'
  },
  {
    id: 'c_dsa_16',
    topicId: 'c_dsa_basic',
    question: 'Write a function to find maximum product of two integers in an array.',
    mathSolution: 'Consider both largest positive and most negative',
    codeSolution: 'int maxProduct(int arr[], int n) {\n    int max1 = arr[0], max2 = INT_MIN;\n    int min1 = arr[0], min2 = INT_MAX;\n    for(int i = 1; i < n; i++) {\n        if(arr[i] > max1) {\n            max2 = max1; max1 = arr[i];\n        } else if(arr[i] > max2) max2 = arr[i];\n        if(arr[i] < min1) {\n            min2 = min1; min1 = arr[i];\n        } else if(arr[i] < min2) min2 = arr[i];\n    }\n    return max(max1 * max2, min1 * min2);\n}',
    hint: 'Track two largest and two smallest'
  },
  {
    id: 'c_dsa_17',
    topicId: 'c_dsa_basic',
    question: 'Write a function to find maximum subarray sum (Kadane\'s algorithm).',
    mathSolution: 'Maximum sum contiguous subarray',
    codeSolution: 'int maxSubarraySum(int arr[], int n) {\n    int maxSoFar = arr[0], maxEndingHere = arr[0];\n    for(int i = 1; i < n; i++) {\n        maxEndingHere = max(arr[i], maxEndingHere + arr[i]);\n        maxSoFar = max(maxSoFar, maxEndingHere);\n    }\n    return maxSoFar;\n}',
    hint: 'Decide whether to extend or start new subarray'
  },
  {
    id: 'c_dsa_18',
    topicId: 'c_dsa_basic',
    question: 'Write a function to find length of longest increasing subarray.',
    mathSolution: 'Longest contiguous increasing sequence',
    codeSolution: 'int longestIncreasingSubarray(int arr[], int n) {\n    int maxLen = 1, curr = 1;\n    for(int i = 1; i < n; i++) {\n        if(arr[i] > arr[i-1]) curr++;\n        else {\n            maxLen = max(maxLen, curr);\n            curr = 1;\n        }\n    }\n    return max(maxLen, curr);\n}',
    hint: 'Track current streak and update maximum'
  },
  {
    id: 'c_dsa_19',
    topicId: 'c_dsa_basic',
    question: 'Write a function to find subarray with given sum (positive numbers).',
    mathSolution: 'Sliding window for positive numbers',
    codeSolution: 'int subarraySum(int arr[], int n, int target) {\n    int currSum = arr[0], start = 0;\n    for(int i = 1; i <= n; i++) {\n        while(currSum > target && start < i-1)\n            currSum -= arr[start++];\n        if(currSum == target) return 1;\n        if(i < n) currSum += arr[i];\n    }\n    return 0;\n}',
    hint: 'Expand right, shrink left to maintain window'
  },
  {
    id: 'c_dsa_20',
    topicId: 'c_dsa_basic',
    question: 'Write a function to find maximum product subarray.',
    mathSolution: 'Handle negative numbers',
    codeSolution: 'int maxProductSubarray(int arr[], int n) {\n    int maxProd = arr[0], minProd = arr[0], result = arr[0];\n    for(int i = 1; i < n; i++) {\n        if(arr[i] < 0) {\n            int temp = maxProd;\n            maxProd = minProd;\n            minProd = temp;\n        }\n        maxProd = max(arr[i], maxProd * arr[i]);\n        minProd = min(arr[i], minProd * arr[i]);\n        result = max(result, maxProd);\n    }\n    return result;\n}',
    hint: 'Track both max and min products due to negatives'
  },

  // ============ LEVEL 3: MATRIX OPERATIONS (21-25) ============
  {
    id: 'c_dsa_21',
    topicId: 'c_dsa_basic',
    question: 'Write a function to add two matrices.',
    mathSolution: 'Element-wise addition',
    codeSolution: 'void matrixAdd(int a[][10], int b[][10], int c[][10], int r, int col) {\n    for(int i = 0; i < r; i++)\n        for(int j = 0; j < col; j++)\n            c[i][j] = a[i][j] + b[i][j];\n}',
    hint: 'Nested loops for rows and columns'
  },
  {
    id: 'c_dsa_22',
    topicId: 'c_dsa_basic',
    question: 'Write a function to multiply two matrices.',
    mathSolution: 'Matrix multiplication',
    codeSolution: 'void matrixMultiply(int a[][10], int b[][10], int c[][10], int r1, int c1, int c2) {\n    for(int i = 0; i < r1; i++)\n        for(int j = 0; j < c2; j++) {\n            c[i][j] = 0;\n            for(int k = 0; k < c1; k++)\n                c[i][j] += a[i][k] * b[k][j];\n        }\n}',
    hint: 'Triple nested loops: rows of a, cols of b, inner product'
  },
  {
    id: 'c_dsa_23',
    topicId: 'c_dsa_basic',
    question: 'Write a function to find transpose of a matrix.',
    mathSolution: 'Rows become columns',
    codeSolution: 'void transpose(int mat[][10], int res[][10], int r, int c) {\n    for(int i = 0; i < r; i++)\n        for(int j = 0; j < c; j++)\n            res[j][i] = mat[i][j];\n}',
    hint: 'Swap indices i and j'
  },
  {
    id: 'c_dsa_24',
    topicId: 'c_dsa_basic',
    question: 'Write a function to print matrix in spiral order.',
    mathSolution: 'Clockwise spiral traversal',
    codeSolution: 'void spiralPrint(int mat[][10], int r, int c) {\n    int top = 0, bottom = r-1, left = 0, right = c-1;\n    while(top <= bottom && left <= right) {\n        for(int i = left; i <= right; i++) printf("%d ", mat[top][i]);\n        top++;\n        for(int i = top; i <= bottom; i++) printf("%d ", mat[i][right]);\n        right--;\n        if(top <= bottom)\n            for(int i = right; i >= left; i--) printf("%d ", mat[bottom][i]);\n        bottom--;\n        if(left <= right)\n            for(int i = bottom; i >= top; i--) printf("%d ", mat[i][left]);\n        left++;\n    }\n}',
    hint: 'Maintain boundaries and traverse four sides'
  },
  {
    id: 'c_dsa_25',
    topicId: 'c_dsa_basic',
    question: 'Write a function to rotate a matrix 90 degrees clockwise.',
    mathSolution: 'Transpose then reverse each row',
    codeSolution: 'void rotate90(int mat[][10], int n) {\n    // Transpose\n    for(int i = 0; i < n; i++)\n        for(int j = i+1; j < n; j++) {\n            int temp = mat[i][j];\n            mat[i][j] = mat[j][i];\n            mat[j][i] = temp;\n        }\n    // Reverse each row\n    for(int i = 0; i < n; i++)\n        for(int j = 0; j < n/2; j++) {\n            int temp = mat[i][j];\n            mat[i][j] = mat[i][n-1-j];\n            mat[i][n-1-j] = temp;\n        }\n}',
    hint: 'First transpose, then reverse each row'
  },

  // ============ LEVEL 4: SINGLY LINKED LIST (26-36) ============
  {
    id: 'c_dsa_26',
    topicId: 'c_dsa_basic',
    question: 'Define a structure for singly linked list node and write a function to create a new node.',
    mathSolution: 'Node with data and next pointer',
    codeSolution: 'struct Node {\n    int data;\n    struct Node* next;\n};\n\nstruct Node* createNode(int data) {\n    struct Node* new = malloc(sizeof(struct Node));\n    new->data = data;\n    new->next = NULL;\n    return new;\n}',
    hint: 'Allocate memory and initialize fields'
  },
  {
    id: 'c_dsa_27',
    topicId: 'c_dsa_basic',
    question: 'Write a function to insert a node at the beginning of a linked list.',
    mathSolution: 'Add node as new head',
    codeSolution: 'struct Node* insertAtBeginning(struct Node* head, int data) {\n    struct Node* new = createNode(data);\n    new->next = head;\n    return new;\n}',
    hint: 'New node points to old head'
  },
  {
    id: 'c_dsa_28',
    topicId: 'c_dsa_basic',
    question: 'Write a function to insert a node at the end of a linked list.',
    mathSolution: 'Add node after last node',
    codeSolution: 'struct Node* insertAtEnd(struct Node* head, int data) {\n    struct Node* new = createNode(data);\n    if(!head) return new;\n    struct Node* curr = head;\n    while(curr->next) curr = curr->next;\n    curr->next = new;\n    return head;\n}',
    hint: 'Traverse to last node, then link'
  },
  {
    id: 'c_dsa_29',
    topicId: 'c_dsa_basic',
    question: 'Write a function to insert a node at a given position in linked list.',
    mathSolution: 'Insert at index pos (0-based)',
    codeSolution: 'struct Node* insertAtPosition(struct Node* head, int data, int pos) {\n    if(pos == 0) return insertAtBeginning(head, data);\n    struct Node* new = createNode(data);\n    struct Node* curr = head;\n    for(int i = 0; i < pos-1 && curr; i++) curr = curr->next;\n    if(!curr) return head;\n    new->next = curr->next;\n    curr->next = new;\n    return head;\n}',
    hint: 'Traverse to pos-1 and insert'
  },
  {
    id: 'c_dsa_30',
    topicId: 'c_dsa_basic',
    question: 'Write a function to delete a node from the beginning of a linked list.',
    mathSolution: 'Remove first node',
    codeSolution: 'struct Node* deleteFromBeginning(struct Node* head) {\n    if(!head) return NULL;\n    struct Node* temp = head;\n    head = head->next;\n    free(temp);\n    return head;\n}',
    hint: 'Move head to next node, free old head'
  },
  {
    id: 'c_dsa_31',
    topicId: 'c_dsa_basic',
    question: 'Write a function to delete a node from the end of a linked list.',
    mathSolution: 'Remove last node',
    codeSolution: 'struct Node* deleteFromEnd(struct Node* head) {\n    if(!head) return NULL;\n    if(!head->next) {\n        free(head);\n        return NULL;\n    }\n    struct Node* curr = head;\n    while(curr->next->next) curr = curr->next;\n    free(curr->next);\n    curr->next = NULL;\n    return head;\n}',
    hint: 'Traverse to second-last node'
  },
  {
    id: 'c_dsa_32',
    topicId: 'c_dsa_basic',
    question: 'Write a function to delete a node with a given key from linked list.',
    mathSolution: 'Remove first occurrence of key',
    codeSolution: 'struct Node* deleteByKey(struct Node* head, int key) {\n    if(!head) return NULL;\n    if(head->data == key) {\n        struct Node* temp = head;\n        head = head->next;\n        free(temp);\n        return head;\n    }\n    struct Node* curr = head;\n    while(curr->next && curr->next->data != key) curr = curr->next;\n    if(curr->next) {\n        struct Node* temp = curr->next;\n        curr->next = curr->next->next;\n        free(temp);\n    }\n    return head;\n}',
    hint: 'Find node with key and bypass it'
  },
  {
    id: 'c_dsa_33',
    topicId: 'c_dsa_basic',
    question: 'Write a function to search for an element in a linked list.',
    mathSolution: 'Return position if found, else -1',
    codeSolution: 'int searchLinkedList(struct Node* head, int key) {\n    int pos = 0;\n    struct Node* curr = head;\n    while(curr) {\n        if(curr->data == key) return pos;\n        curr = curr->next;\n        pos++;\n    }\n    return -1;\n}',
    hint: 'Traverse and compare each node'
  },
  {
    id: 'c_dsa_34',
    topicId: 'c_dsa_basic',
    question: 'Write a function to reverse a linked list iteratively.',
    mathSolution: 'Reverse links between nodes',
    codeSolution: 'struct Node* reverseList(struct Node* head) {\n    struct Node *prev = NULL, *curr = head, *next = NULL;\n    while(curr) {\n        next = curr->next;\n        curr->next = prev;\n        prev = curr;\n        curr = next;\n    }\n    return prev;\n}',
    hint: 'Three pointers: prev, curr, next'
  },
  {
    id: 'c_dsa_35',
    topicId: 'c_dsa_basic',
    question: 'Write a function to find the middle node of a linked list.',
    mathSolution: 'Use slow and fast pointers',
    codeSolution: 'struct Node* findMiddle(struct Node* head) {\n    struct Node *slow = head, *fast = head;\n    while(fast && fast->next) {\n        slow = slow->next;\n        fast = fast->next->next;\n    }\n    return slow;\n}',
    hint: 'Slow moves one, fast moves two'
  },
  {
    id: 'c_dsa_36',
    topicId: 'c_dsa_basic',
    question: 'Define a structure for doubly linked list node.',
    mathSolution: 'Node with prev and next pointers',
    codeSolution: 'struct DNode {\n    int data;\n    struct DNode* prev;\n    struct DNode* next;\n};',
    hint: 'Two pointers for forward and backward traversal'
  },

  // ============ LEVEL 5: DOUBLY LINKED LIST (37-39) ============
  {
    id: 'c_dsa_37',
    topicId: 'c_dsa_basic',
    question: 'Write a function to insert at beginning of doubly linked list.',
    mathSolution: 'Add node as new head',
    codeSolution: 'struct DNode* insertDLLBegin(struct DNode* head, int data) {\n    struct DNode* new = malloc(sizeof(struct DNode));\n    new->data = data;\n    new->prev = NULL;\n    new->next = head;\n    if(head) head->prev = new;\n    return new;\n}',
    hint: 'Update head and next node\'s prev'
  },
  {
    id: 'c_dsa_38',
    topicId: 'c_dsa_basic',
    question: 'Write a function to insert at end of doubly linked list.',
    mathSolution: 'Add node after last',
    codeSolution: 'struct DNode* insertDLLEnd(struct DNode* head, int data) {\n    struct DNode* new = malloc(sizeof(struct DNode));\n    new->data = data;\n    new->next = NULL;\n    if(!head) {\n        new->prev = NULL;\n        return new;\n    }\n    struct DNode* curr = head;\n    while(curr->next) curr = curr->next;\n    curr->next = new;\n    new->prev = curr;\n    return head;\n}',
    hint: 'Traverse to end, then link'
  },
  {
    id: 'c_dsa_39',
    topicId: 'c_dsa_basic',
    question: 'Write a function to delete a node from doubly linked list.',
    mathSolution: 'Remove given node',
    codeSolution: 'struct DNode* deleteDLLNode(struct DNode* head, struct DNode* del) {\n    if(!head || !del) return head;\n    if(head == del) head = del->next;\n    if(del->next) del->next->prev = del->prev;\n    if(del->prev) del->prev->next = del->next;\n    free(del);\n    return head;\n}',
    hint: 'Update prev and next pointers of neighbors'
  },

  // ============ LEVEL 6: STACK (40-45) ============
  {
    id: 'c_dsa_40',
    topicId: 'c_dsa_basic',
    question: 'Implement stack using array with push operation.',
    mathSolution: 'LIFO data structure',
    codeSolution: '#define MAX 100\nint stack[MAX];\nint top = -1;\n\nvoid push(int val) {\n    if(top >= MAX-1) printf("Stack Overflow");\n    else stack[++top] = val;\n}',
    hint: 'Increment top and insert'
  },
  {
    id: 'c_dsa_41',
    topicId: 'c_dsa_basic',
    question: 'Implement stack pop operation using array.',
    mathSolution: 'Remove and return top element',
    codeSolution: 'int pop() {\n    if(top < 0) {\n        printf("Stack Underflow");\n        return -1;\n    }\n    return stack[top--];\n}',
    hint: 'Return element at top and decrement'
  },
  {
    id: 'c_dsa_42',
    topicId: 'c_dsa_basic',
    question: 'Implement stack peek operation.',
    mathSolution: 'Return top without removing',
    codeSolution: 'int peek() {\n    if(top < 0) {\n        printf("Stack Empty");\n        return -1;\n    }\n    return stack[top];\n}',
    hint: 'Just return stack[top]'
  },
  {
    id: 'c_dsa_43',
    topicId: 'c_dsa_basic',
    question: 'Check if parentheses are balanced using stack.',
    mathSolution: 'Verify matching brackets',
    codeSolution: 'int isBalanced(char* expr) {\n    int len = strlen(expr);\n    char stack[len];\n    int top = -1;\n    for(int i = 0; i < len; i++) {\n        char c = expr[i];\n        if(c == \'(\' || c == \'{\' || c == \'[\')\n            stack[++top] = c;\n        else if(c == \')\') {\n            if(top < 0 || stack[top--] != \'(\') return 0;\n        } else if(c == \'}\') {\n            if(top < 0 || stack[top--] != \'{\') return 0;\n        } else if(c == \']\') {\n            if(top < 0 || stack[top--] != \'[\') return 0;\n        }\n    }\n    return top == -1;\n}',
    hint: 'Push opening, pop and match closing'
  },
  {
    id: 'c_dsa_44',
    topicId: 'c_dsa_basic',
    question: 'Implement stack using linked list with push operation.',
    mathSolution: 'Stack with dynamic memory',
    codeSolution: 'struct StackNode {\n    int data;\n    struct StackNode* next;\n} *top = NULL;\n\nvoid push(int val) {\n    struct StackNode* new = malloc(sizeof(struct StackNode));\n    new->data = val;\n    new->next = top;\n    top = new;\n}',
    hint: 'Insert at beginning of list'
  },
  {
    id: 'c_dsa_45',
    topicId: 'c_dsa_basic',
    question: 'Implement stack using linked list with pop operation.',
    mathSolution: 'Remove from beginning',
    codeSolution: 'int pop() {\n    if(!top) {\n        printf("Stack Empty");\n        return -1;\n    }\n    struct StackNode* temp = top;\n    int val = top->data;\n    top = top->next;\n    free(temp);\n    return val;\n}',
    hint: 'Remove first node'
  },

  // ============ LEVEL 7: QUEUE (46-50) ============
  {
    id: 'c_dsa_46',
    topicId: 'c_dsa_basic',
    question: 'Implement queue using array with enqueue operation.',
    mathSolution: 'FIFO data structure',
    codeSolution: '#define MAX 100\nint queue[MAX];\nint front = -1, rear = -1;\n\nvoid enqueue(int val) {\n    if(rear >= MAX-1) printf("Queue Overflow");\n    else {\n        if(front == -1) front = 0;\n        queue[++rear] = val;\n    }\n}',
    hint: 'Add at rear'
  },
  {
    id: 'c_dsa_47',
    topicId: 'c_dsa_basic',
    question: 'Implement queue using array with dequeue operation.',
    mathSolution: 'Remove from front',
    codeSolution: 'int dequeue() {\n    if(front == -1 || front > rear) {\n        printf("Queue Empty");\n        return -1;\n    }\n    int val = queue[front++];\n    if(front > rear) front = rear = -1;\n    return val;\n}',
    hint: 'Remove from front and increment'
  },
  {
    id: 'c_dsa_48',
    topicId: 'c_dsa_basic',
    question: 'Implement circular queue using array.',
    mathSolution: 'Reuse empty spaces',
    codeSolution: '#define MAX 5\nint cqueue[MAX];\nint front = -1, rear = -1;\n\nvoid enqueue(int val) {\n    if((rear+1) % MAX == front) printf("Queue Full");\n    else {\n        if(front == -1) front = 0;\n        rear = (rear + 1) % MAX;\n        cqueue[rear] = val;\n    }\n}\n\nint dequeue() {\n    if(front == -1) return -1;\n    int val = cqueue[front];\n    if(front == rear) front = rear = -1;\n    else front = (front + 1) % MAX;\n    return val;\n}',
    hint: 'Use modulo to wrap around'
  },
  {
    id: 'c_dsa_49',
    topicId: 'c_dsa_basic',
    question: 'Implement queue using linked list with enqueue.',
    mathSolution: 'Add at end, remove from front',
    codeSolution: 'struct QNode {\n    int data;\n    struct QNode* next;\n} *front = NULL, *rear = NULL;\n\nvoid enqueue(int val) {\n    struct QNode* new = malloc(sizeof(struct QNode));\n    new->data = val;\n    new->next = NULL;\n    if(!rear) front = rear = new;\n    else {\n        rear->next = new;\n        rear = new;\n    }\n}',
    hint: 'Add at rear'
  },
  {
    id: 'c_dsa_50',
    topicId: 'c_dsa_basic',
    question: 'Implement queue using linked list with dequeue.',
    mathSolution: 'Remove from front',
    codeSolution: 'int dequeue() {\n    if(!front) {\n        printf("Queue Empty");\n        return -1;\n    }\n    struct QNode* temp = front;\n    int val = front->data;\n    front = front->next;\n    if(!front) rear = NULL;\n    free(temp);\n    return val;\n}',
    hint: 'Remove from front and update'
  },

  // ============ LEVEL 8: BINARY TREE (51-58) ============
  {
    id: 'c_dsa_51',
    topicId: 'c_dsa_basic',
    question: 'Define structure for binary tree node and create new node.',
    mathSolution: 'Node with left and right children',
    codeSolution: 'struct TreeNode {\n    int data;\n    struct TreeNode* left;\n    struct TreeNode* right;\n};\n\nstruct TreeNode* createTreeNode(int data) {\n    struct TreeNode* new = malloc(sizeof(struct TreeNode));\n    new->data = data;\n    new->left = new->right = NULL;\n    return new;\n}',
    hint: 'Initialize both children to NULL'
  },
  {
    id: 'c_dsa_52',
    topicId: 'c_dsa_basic',
    question: 'Write recursive function for inorder traversal of binary tree.',
    mathSolution: 'Left -> Root -> Right',
    codeSolution: 'void inorder(struct TreeNode* root) {\n    if(root) {\n        inorder(root->left);\n        printf("%d ", root->data);\n        inorder(root->right);\n    }\n}',
    hint: 'Recursively traverse left, then root, then right'
  },
  {
    id: 'c_dsa_53',
    topicId: 'c_dsa_basic',
    question: 'Write recursive function for preorder traversal.',
    mathSolution: 'Root -> Left -> Right',
    codeSolution: 'void preorder(struct TreeNode* root) {\n    if(root) {\n        printf("%d ", root->data);\n        preorder(root->left);\n        preorder(root->right);\n    }\n}',
    hint: 'Process root first, then children'
  },
  {
    id: 'c_dsa_54',
    topicId: 'c_dsa_basic',
    question: 'Write recursive function for postorder traversal.',
    mathSolution: 'Left -> Right -> Root',
    codeSolution: 'void postorder(struct TreeNode* root) {\n    if(root) {\n        postorder(root->left);\n        postorder(root->right);\n        printf("%d ", root->data);\n    }\n}',
    hint: 'Process children first, then root'
  },
  {
    id: 'c_dsa_55',
    topicId: 'c_dsa_basic',
    question: 'Write function to count nodes in binary tree.',
    mathSolution: 'Total number of nodes',
    codeSolution: 'int countNodes(struct TreeNode* root) {\n    if(!root) return 0;\n    return 1 + countNodes(root->left) + countNodes(root->right);\n}',
    hint: 'Count root plus nodes in left and right subtrees'
  },
  {
    id: 'c_dsa_56',
    topicId: 'c_dsa_basic',
    question: 'Write function to find height of binary tree.',
    mathSolution: 'Maximum depth',
    codeSolution: 'int height(struct TreeNode* root) {\n    if(!root) return 0;\n    int leftHeight = height(root->left);\n    int rightHeight = height(root->right);\n    return 1 + (leftHeight > rightHeight ? leftHeight : rightHeight);\n}',
    hint: 'Height = 1 + max(left height, right height)'
  },
  {
    id: 'c_dsa_57',
    topicId: 'c_dsa_basic',
    question: 'Write function to count leaf nodes in binary tree.',
    mathSolution: 'Nodes with no children',
    codeSolution: 'int countLeaves(struct TreeNode* root) {\n    if(!root) return 0;\n    if(!root->left && !root->right) return 1;\n    return countLeaves(root->left) + countLeaves(root->right);\n}',
    hint: 'Leaf if both children are NULL'
  },
  {
    id: 'c_dsa_58',
    topicId: 'c_dsa_basic',
    question: 'Write function for level order traversal (BFS) of binary tree.',
    mathSolution: 'Traverse level by level',
    codeSolution: 'void levelOrder(struct TreeNode* root) {\n    if(!root) return;\n    struct TreeNode* queue[100];\n    int front = 0, rear = 0;\n    queue[rear++] = root;\n    while(front < rear) {\n        struct TreeNode* curr = queue[front++];\n        printf("%d ", curr->data);\n        if(curr->left) queue[rear++] = curr->left;\n        if(curr->right) queue[rear++] = curr->right;\n    }\n}',
    hint: 'Use queue to process nodes level by level'
  },

  // ============ LEVEL 9: BINARY SEARCH TREE (59-63) ============
  {
    id: 'c_dsa_59',
    topicId: 'c_dsa_basic',
    question: 'Write function to insert a node in BST.',
    mathSolution: 'Maintain BST property',
    codeSolution: 'struct TreeNode* insertBST(struct TreeNode* root, int data) {\n    if(!root) return createTreeNode(data);\n    if(data < root->data)\n        root->left = insertBST(root->left, data);\n    else if(data > root->data)\n        root->right = insertBST(root->right, data);\n    return root;\n}',
    hint: 'Recursively find correct position'
  },
  {
    id: 'c_dsa_60',
    topicId: 'c_dsa_basic',
    question: 'Write function to search in BST.',
    mathSolution: 'Find node with given key',
    codeSolution: 'struct TreeNode* searchBST(struct TreeNode* root, int key) {\n    if(!root || root->data == key) return root;\n    if(key < root->data) return searchBST(root->left, key);\n    return searchBST(root->right, key);\n}',
    hint: 'Compare and go left or right'
  },
  {
    id: 'c_dsa_61',
    topicId: 'c_dsa_basic',
    question: 'Write function to find minimum value node in BST.',
    mathSolution: 'Leftmost node',
    codeSolution: 'struct TreeNode* minValueNode(struct TreeNode* root) {\n    struct TreeNode* curr = root;\n    while(curr && curr->left) curr = curr->left;\n    return curr;\n}',
    hint: 'Keep going left until NULL'
  },
  {
    id: 'c_dsa_62',
    topicId: 'c_dsa_basic',
    question: 'Write function to find maximum value node in BST.',
    mathSolution: 'Rightmost node',
    codeSolution: 'struct TreeNode* maxValueNode(struct TreeNode* root) {\n    struct TreeNode* curr = root;\n    while(curr && curr->right) curr = curr->right;\n    return curr;\n}',
    hint: 'Keep going right until NULL'
  },
  {
    id: 'c_dsa_63',
    topicId: 'c_dsa_basic',
    question: 'Write function to delete a node from BST.',
    mathSolution: 'Handle three cases',
    codeSolution: 'struct TreeNode* deleteBST(struct TreeNode* root, int key) {\n    if(!root) return root;\n    if(key < root->data)\n        root->left = deleteBST(root->left, key);\n    else if(key > root->data)\n        root->right = deleteBST(root->right, key);\n    else {\n        if(!root->left) {\n            struct TreeNode* temp = root->right;\n            free(root);\n            return temp;\n        } else if(!root->right) {\n            struct TreeNode* temp = root->left;\n            free(root);\n            return temp;\n        }\n        struct TreeNode* temp = minValueNode(root->right);\n        root->data = temp->data;\n        root->right = deleteBST(root->right, temp->data);\n    }\n    return root;\n}',
    hint: '0, 1, or 2 children cases'
  },

  // ============ LEVEL 10: SORTING ALGORITHMS (64-68) ============
  {
    id: 'c_dsa_64',
    topicId: 'c_dsa_basic',
    question: 'Implement bubble sort.',
    mathSolution: 'Compare adjacent and swap',
    codeSolution: 'void bubbleSort(int arr[], int n) {\n    for(int i = 0; i < n-1; i++)\n        for(int j = 0; j < n-1-i; j++)\n            if(arr[j] > arr[j+1]) {\n                int temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n}',
    hint: 'Largest element bubbles to end'
  },
  {
    id: 'c_dsa_65',
    topicId: 'c_dsa_basic',
    question: 'Implement selection sort.',
    mathSolution: 'Select minimum and place at beginning',
    codeSolution: 'void selectionSort(int arr[], int n) {\n    for(int i = 0; i < n-1; i++) {\n        int minIdx = i;\n        for(int j = i+1; j < n; j++)\n            if(arr[j] < arr[minIdx]) minIdx = j;\n        int temp = arr[i];\n        arr[i] = arr[minIdx];\n        arr[minIdx] = temp;\n    }\n}',
    hint: 'Find minimum in unsorted part'
  },
  {
    id: 'c_dsa_66',
    topicId: 'c_dsa_basic',
    question: 'Implement insertion sort.',
    mathSolution: 'Insert element in sorted portion',
    codeSolution: 'void insertionSort(int arr[], int n) {\n    for(int i = 1; i < n; i++) {\n        int key = arr[i];\n        int j = i-1;\n        while(j >= 0 && arr[j] > key) {\n            arr[j+1] = arr[j];\n            j--;\n        }\n        arr[j+1] = key;\n    }\n}',
    hint: 'Shift elements to make room'
  },
  {
    id: 'c_dsa_67',
    topicId: 'c_dsa_basic',
    question: 'Implement merge sort.',
    mathSolution: 'Divide and conquer',
    codeSolution: 'void merge(int arr[], int l, int m, int r) {\n    int n1 = m - l + 1, n2 = r - m;\n    int L[n1], R[n2];\n    for(int i = 0; i < n1; i++) L[i] = arr[l + i];\n    for(int i = 0; i < n2; i++) R[i] = arr[m + 1 + i];\n    int i = 0, j = 0, k = l;\n    while(i < n1 && j < n2)\n        arr[k++] = (L[i] <= R[j]) ? L[i++] : R[j++];\n    while(i < n1) arr[k++] = L[i++];\n    while(j < n2) arr[k++] = R[j++];\n}\n\nvoid mergeSort(int arr[], int l, int r) {\n    if(l < r) {\n        int m = (l + r) / 2;\n        mergeSort(arr, l, m);\n        mergeSort(arr, m+1, r);\n        merge(arr, l, m, r);\n    }\n}',
    hint: 'Split, sort, merge'
  },
  {
    id: 'c_dsa_68',
    topicId: 'c_dsa_basic',
    question: 'Implement quick sort.',
    mathSolution: 'Partition and recursively sort',
    codeSolution: 'int partition(int arr[], int low, int high) {\n    int pivot = arr[high];\n    int i = low - 1;\n    for(int j = low; j < high; j++)\n        if(arr[j] <= pivot) {\n            i++;\n            int temp = arr[i];\n            arr[i] = arr[j];\n            arr[j] = temp;\n        }\n    int temp = arr[i+1];\n    arr[i+1] = arr[high];\n    arr[high] = temp;\n    return i+1;\n}\n\nvoid quickSort(int arr[], int low, int high) {\n    if(low < high) {\n        int pi = partition(arr, low, high);\n        quickSort(arr, low, pi-1);\n        quickSort(arr, pi+1, high);\n    }\n}',
    hint: 'Choose pivot, partition, recurse'
  },

  // ============ LEVEL 11: SEARCHING (69-71) ============
  {
    id: 'c_dsa_69',
    topicId: 'c_dsa_basic',
    question: 'Implement linear search.',
    mathSolution: 'Sequential search',
    codeSolution: 'int linearSearch(int arr[], int n, int key) {\n    for(int i = 0; i < n; i++)\n        if(arr[i] == key) return i;\n    return -1;\n}',
    hint: 'Check each element'
  },
  {
    id: 'c_dsa_70',
    topicId: 'c_dsa_basic',
    question: 'Implement binary search (iterative).',
    mathSolution: 'Search in sorted array',
    codeSolution: 'int binarySearch(int arr[], int n, int key) {\n    int low = 0, high = n-1;\n    while(low <= high) {\n        int mid = (low + high) / 2;\n        if(arr[mid] == key) return mid;\n        if(arr[mid] < key) low = mid + 1;\n        else high = mid - 1;\n    }\n    return -1;\n}',
    hint: 'Divide and conquer'
  },
  {
    id: 'c_dsa_71',
    topicId: 'c_dsa_basic',
    question: 'Implement binary search (recursive).',
    mathSolution: 'Recursive divide and conquer',
    codeSolution: 'int binarySearchRec(int arr[], int low, int high, int key) {\n    if(low > high) return -1;\n    int mid = (low + high) / 2;\n    if(arr[mid] == key) return mid;\n    if(arr[mid] < key) return binarySearchRec(arr, mid+1, high, key);\n    return binarySearchRec(arr, low, mid-1, key);\n}',
    hint: 'Recursively search appropriate half'
  },

  // ============ LEVEL 12: HASHING (72-74) ============
  {
    id: 'c_dsa_72',
    topicId: 'c_dsa_basic',
    question: 'Implement simple hash table using array for integers.',
    mathSolution: 'Direct addressing',
    codeSolution: '#define SIZE 100\nint hashTable[SIZE];\n\nvoid init() {\n    for(int i = 0; i < SIZE; i++) hashTable[i] = -1;\n}\n\nvoid insert(int key) {\n    hashTable[key % SIZE] = key;\n}\n\nint search(int key) {\n    return hashTable[key % SIZE] == key ? 1 : 0;\n}',
    hint: 'Use modulo as hash function'
  },
  {
    id: 'c_dsa_73',
    topicId: 'c_dsa_basic',
    question: 'Implement hash table with linear probing for collision resolution.',
    mathSolution: 'Find next empty slot',
    codeSolution: '#define SIZE 10\nint hashTable[SIZE];\n\nvoid init() {\n    for(int i = 0; i < SIZE; i++) hashTable[i] = -1;\n}\n\nvoid insert(int key) {\n    int index = key % SIZE;\n    while(hashTable[index] != -1)\n        index = (index + 1) % SIZE;\n    hashTable[index] = key;\n}\n\nint search(int key) {\n    int index = key % SIZE;\n    while(hashTable[index] != -1) {\n        if(hashTable[index] == key) return 1;\n        index = (index + 1) % SIZE;\n    }\n    return 0;\n}',
    hint: 'Probe linearly until empty slot'
  },
  {
    id: 'c_dsa_74',
    topicId: 'c_dsa_basic',
    question: 'Implement hash table with chaining using linked lists.',
    mathSolution: 'Each bucket has linked list',
    codeSolution: 'struct Node {\n    int data;\n    struct Node* next;\n} *hashTable[SIZE];\n\nvoid init() {\n    for(int i = 0; i < SIZE; i++) hashTable[i] = NULL;\n}\n\nvoid insert(int key) {\n    int index = key % SIZE;\n    struct Node* new = malloc(sizeof(struct Node));\n    new->data = key;\n    new->next = hashTable[index];\n    hashTable[index] = new;\n}\n\nint search(int key) {\n    int index = key % SIZE;\n    struct Node* curr = hashTable[index];\n    while(curr) {\n        if(curr->data == key) return 1;\n        curr = curr->next;\n    }\n    return 0;\n}',
    hint: 'Insert at beginning of list'
  },

  // ============ LEVEL 13: RECURSION (75-79) ============
  {
    id: 'c_dsa_75',
    topicId: 'c_dsa_basic',
    question: 'Write recursive function to calculate factorial.',
    mathSolution: 'n! = n * (n-1)!',
    codeSolution: 'int factorial(int n) {\n    if(n <= 1) return 1;\n    return n * factorial(n-1);\n}',
    hint: 'Base case: n=0 or 1'
  },
  {
    id: 'c_dsa_76',
    topicId: 'c_dsa_basic',
    question: 'Write recursive function for Fibonacci numbers.',
    mathSolution: 'Fib(n) = Fib(n-1) + Fib(n-2)',
    codeSolution: 'int fib(int n) {\n    if(n <= 1) return n;\n    return fib(n-1) + fib(n-2);\n}',
    hint: 'Base cases: fib(0)=0, fib(1)=1'
  },
  {
    id: 'c_dsa_77',
    topicId: 'c_dsa_basic',
    question: 'Write recursive function to calculate power (x^n).',
    mathSolution: 'x^n = x * x^(n-1)',
    codeSolution: 'int power(int x, int n) {\n    if(n == 0) return 1;\n    return x * power(x, n-1);\n}',
    hint: 'Base case: n=0 returns 1'
  },
  {
    id: 'c_dsa_78',
    topicId: 'c_dsa_basic',
    question: 'Write recursive function to find GCD using Euclidean algorithm.',
    mathSolution: 'GCD(a,b) = GCD(b, a%b)',
    codeSolution: 'int gcd(int a, int b) {\n    if(b == 0) return a;\n    return gcd(b, a % b);\n}',
    hint: 'Base case: b=0'
  },
  {
    id: 'c_dsa_79',
    topicId: 'c_dsa_basic',
    question: 'Write recursive function to reverse a string.',
    mathSolution: 'Swap ends and recurse',
    codeSolution: 'void reverseStr(char *str, int start, int end) {\n    if(start >= end) return;\n    char temp = str[start];\n    str[start] = str[end];\n    str[end] = temp;\n    reverseStr(str, start+1, end-1);\n}',
    hint: 'Swap first and last, recurse on middle'
  },

  // ============ LEVEL 14: DYNAMIC PROGRAMMING (80-82) ============
  {
    id: 'c_dsa_80',
    topicId: 'c_dsa_basic',
    question: 'Write function for nth Fibonacci using memoization.',
    mathSolution: 'DP with caching',
    codeSolution: 'int fibMemo(int n, int memo[]) {\n    if(n <= 1) return n;\n    if(memo[n] != -1) return memo[n];\n    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);\n    return memo[n];\n}',
    hint: 'Store computed values in array'
  },
  {
    id: 'c_dsa_81',
    topicId: 'c_dsa_basic',
    question: 'Write function for nth Fibonacci using tabulation.',
    mathSolution: 'Bottom-up DP',
    codeSolution: 'int fibTab(int n) {\n    int dp[n+1];\n    dp[0] = 0;\n    dp[1] = 1;\n    for(int i = 2; i <= n; i++)\n        dp[i] = dp[i-1] + dp[i-2];\n    return dp[n];\n}',
    hint: 'Build from base cases upward'
  },
  {
    id: 'c_dsa_82',
    topicId: 'c_dsa_basic',
    question: 'Write function to solve 0/1 knapsack using recursion.',
    mathSolution: 'Include or exclude each item',
    codeSolution: 'int knapsack(int W, int wt[], int val[], int n) {\n    if(n == 0 || W == 0) return 0;\n    if(wt[n-1] > W) return knapsack(W, wt, val, n-1);\n    return max(val[n-1] + knapsack(W-wt[n-1], wt, val, n-1),\n               knapsack(W, wt, val, n-1));\n}',
    hint: 'Max of including or excluding current item'
  },

  // ============ LEVEL 15: GRAPHS (83-86) ============
  {
    id: 'c_dsa_83',
    topicId: 'c_dsa_basic',
    question: 'Implement graph using adjacency matrix.',
    mathSolution: '2D array for edges',
    codeSolution: '#define V 5\nint graph[V][V] = {0};\n\nvoid addEdge(int u, int v) {\n    graph[u][v] = 1;\n    graph[v][u] = 1;\n}',
    hint: 'Undirected graph: set both directions'
  },
  {
    id: 'c_dsa_84',
    topicId: 'c_dsa_basic',
    question: 'Implement graph using adjacency list.',
    mathSolution: 'Array of linked lists',
    codeSolution: 'struct Node {\n    int dest;\n    struct Node* next;\n} *adjList[V];\n\nvoid addEdge(int u, int v) {\n    struct Node* new = malloc(sizeof(struct Node));\n    new->dest = v;\n    new->next = adjList[u];\n    adjList[u] = new;\n    \n    new = malloc(sizeof(struct Node));\n    new->dest = u;\n    new->next = adjList[v];\n    adjList[v] = new;\n}',
    hint: 'Each vertex has linked list of neighbors'
  },
  {
    id: 'c_dsa_85',
    topicId: 'c_dsa_basic',
    question: 'Implement BFS for graph.',
    mathSolution: 'Level order traversal',
    codeSolution: 'void BFS(int start) {\n    int visited[V] = {0};\n    int queue[V], front = 0, rear = 0;\n    visited[start] = 1;\n    queue[rear++] = start;\n    while(front < rear) {\n        int u = queue[front++];\n        printf("%d ", u);\n        for(int v = 0; v < V; v++)\n            if(graph[u][v] && !visited[v]) {\n                visited[v] = 1;\n                queue[rear++] = v;\n            }\n    }\n}',
    hint: 'Use queue, mark visited when enqueued'
  },
  {
    id: 'c_dsa_86',
    topicId: 'c_dsa_basic',
    question: 'Implement DFS for graph (recursive).',
    mathSolution: 'Depth first traversal',
    codeSolution: 'void DFS(int u, int visited[]) {\n    visited[u] = 1;\n    printf("%d ", u);\n    for(int v = 0; v < V; v++)\n        if(graph[u][v] && !visited[v])\n            DFS(v, visited);\n}',
    hint: 'Recursively visit unvisited neighbors'
  },

  // ============ LEVEL 16: HEAP (87-89) ============
  {
    id: 'c_dsa_87',
    topicId: 'c_dsa_basic',
    question: 'Implement max heap insert operation.',
    mathSolution: 'Add element and heapify up',
    codeSolution: 'int heap[100], size = 0;\n\nvoid insert(int val) {\n    heap[size] = val;\n    int i = size++;\n    while(i > 0 && heap[(i-1)/2] < heap[i]) {\n        int temp = heap[i];\n        heap[i] = heap[(i-1)/2];\n        heap[(i-1)/2] = temp;\n        i = (i-1)/2;\n    }\n}',
    hint: 'Swap with parent until heap property satisfied'
  },
  {
    id: 'c_dsa_88',
    topicId: 'c_dsa_basic',
    question: 'Implement max heap delete (extract max).',
    mathSolution: 'Remove root and heapify down',
    codeSolution: 'int extractMax() {\n    if(size == 0) return -1;\n    int max = heap[0];\n    heap[0] = heap[--size];\n    int i = 0;\n    while(1) {\n        int left = 2*i + 1, right = 2*i + 2, largest = i;\n        if(left < size && heap[left] > heap[largest]) largest = left;\n        if(right < size && heap[right] > heap[largest]) largest = right;\n        if(largest == i) break;\n        int temp = heap[i];\n        heap[i] = heap[largest];\n        heap[largest] = temp;\n        i = largest;\n    }\n    return max;\n}',
    hint: 'Replace root with last element, then heapify down'
  },
  {
    id: 'c_dsa_89',
    topicId: 'c_dsa_basic',
    question: 'Implement priority queue using heap for integers.',
    mathSolution: 'Higher value = higher priority',
    codeSolution: '// Using max heap operations\nvoid enqueue(int val) { insert(val); }\nint dequeue() { return extractMax(); }',
    hint: 'Use heap operations'
  },

  // ============ LEVEL 17: TRIE (90-92) ============
  {
    id: 'c_dsa_90',
    topicId: 'c_dsa_basic',
    question: 'Define structure for trie node and create new node.',
    mathSolution: '26 children for lowercase letters',
    codeSolution: '#define ALPHABET 26\nstruct TrieNode {\n    struct TrieNode* children[ALPHABET];\n    int isEndOfWord;\n};\n\nstruct TrieNode* createTrieNode() {\n    struct TrieNode* node = malloc(sizeof(struct TrieNode));\n    for(int i = 0; i < ALPHABET; i++)\n        node->children[i] = NULL;\n    node->isEndOfWord = 0;\n    return node;\n}',
    hint: 'Initialize all children to NULL'
  },
  {
    id: 'c_dsa_91',
    topicId: 'c_dsa_basic',
    question: 'Implement insert operation in trie.',
    mathSolution: 'Add word character by character',
    codeSolution: 'void insert(struct TrieNode* root, char* word) {\n    struct TrieNode* curr = root;\n    for(int i = 0; word[i]; i++) {\n        int idx = word[i] - \'a\';\n        if(!curr->children[idx])\n            curr->children[idx] = createTrieNode();\n        curr = curr->children[idx];\n    }\n    curr->isEndOfWord = 1;\n}',
    hint: 'Create missing nodes along the path'
  },
  {
    id: 'c_dsa_92',
    topicId: 'c_dsa_basic',
    question: 'Implement search operation in trie.',
    mathSolution: 'Check if word exists',
    codeSolution: 'int search(struct TrieNode* root, char* word) {\n    struct TrieNode* curr = root;\n    for(int i = 0; word[i]; i++) {\n        int idx = word[i] - \'a\';\n        if(!curr->children[idx]) return 0;\n        curr = curr->children[idx];\n    }\n    return curr->isEndOfWord;\n}',
    hint: 'Follow path, check end marker'
  },

  // ============ LEVEL 18: AVL TREE (93-95) ============
  {
    id: 'c_dsa_93',
    topicId: 'c_dsa_basic',
    question: 'Define structure for AVL tree node.',
    mathSolution: 'BST node with height',
    codeSolution: 'struct AVLNode {\n    int data;\n    struct AVLNode* left;\n    struct AVLNode* right;\n    int height;\n};',
    hint: 'Add height field for balance'
  },
  {
    id: 'c_dsa_94',
    topicId: 'c_dsa_basic',
    question: 'Write function to get height of AVL node.',
    mathSolution: 'Return node height',
    codeSolution: 'int height(struct AVLNode* node) {\n    return node ? node->height : 0;\n}',
    hint: 'NULL node has height 0'
  },
  {
    id: 'c_dsa_95',
    topicId: 'c_dsa_basic',
    question: 'Write function to get balance factor of AVL node.',
    mathSolution: 'Height difference of subtrees',
    codeSolution: 'int getBalance(struct AVLNode* node) {\n    return node ? height(node->left) - height(node->right) : 0;\n}',
    hint: 'Balance = left height - right height'
  },

  // ============ LEVEL 19: ADVANCED ALGORITHMS (96-98) ============
  {
    id: 'c_dsa_96',
    topicId: 'c_dsa_basic',
    question: 'Implement Dijkstra\'s shortest path algorithm.',
    mathSolution: 'Find shortest paths from source',
    codeSolution: 'void dijkstra(int graph[V][V], int src) {\n    int dist[V];\n    int visited[V];\n    for(int i = 0; i < V; i++) {\n        dist[i] = INT_MAX;\n        visited[i] = 0;\n    }\n    dist[src] = 0;\n    for(int count = 0; count < V-1; count++) {\n        int u = -1, minDist = INT_MAX;\n        for(int i = 0; i < V; i++)\n            if(!visited[i] && dist[i] < minDist) {\n                minDist = dist[i];\n                u = i;\n            }\n        visited[u] = 1;\n        for(int v = 0; v < V; v++)\n            if(!visited[v] && graph[u][v] && dist[u] != INT_MAX &&\n               dist[u] + graph[u][v] < dist[v])\n                dist[v] = dist[u] + graph[u][v];\n    }\n}',
    hint: 'Greedy: pick minimum unvisited vertex'
  },
  {
    id: 'c_dsa_97',
    topicId: 'c_dsa_basic',
    question: 'Implement Kruskal\'s algorithm for MST.',
    mathSolution: 'Union-Find based MST',
    codeSolution: 'typedef struct { int u, v, w; } Edge;\n\nint find(int parent[], int i) {\n    if(parent[i] == i) return i;\n    return parent[i] = find(parent, parent[i]);\n}\n\nvoid unionSet(int parent[], int x, int y) {\n    parent[x] = y;\n}\n\nvoid kruskal(Edge edges[], int n, int V) {\n    qsort(edges, n, sizeof(Edge), cmp);\n    int parent[V];\n    for(int i = 0; i < V; i++) parent[i] = i;\n    int mstWeight = 0;\n    for(int i = 0; i < n; i++) {\n        int uSet = find(parent, edges[i].u);\n        int vSet = find(parent, edges[i].v);\n        if(uSet != vSet) {\n            mstWeight += edges[i].w;\n            unionSet(parent, uSet, vSet);\n        }\n    }\n}',
    hint: 'Sort edges, add if no cycle'
  },
  {
    id: 'c_dsa_98',
    topicId: 'c_dsa_basic',
    question: 'Implement Prim\'s algorithm for MST.',
    mathSolution: 'Grow MST one vertex at a time',
    codeSolution: 'void prim(int graph[V][V]) {\n    int parent[V], key[V], mstSet[V];\n    for(int i = 0; i < V; i++) {\n        key[i] = INT_MAX;\n        mstSet[i] = 0;\n    }\n    key[0] = 0;\n    parent[0] = -1;\n    for(int count = 0; count < V-1; count++) {\n        int u = -1, minKey = INT_MAX;\n        for(int i = 0; i < V; i++)\n            if(!mstSet[i] && key[i] < minKey) {\n                minKey = key[i];\n                u = i;\n            }\n        mstSet[u] = 1;\n        for(int v = 0; v < V; v++)\n            if(graph[u][v] && !mstSet[v] && graph[u][v] < key[v]) {\n                parent[v] = u;\n                key[v] = graph[u][v];\n            }\n    }\n}',
    hint: 'Keep cut of vertices not in MST'
  },

  // ============ LEVEL 20: ADVANCED DATA STRUCTURES (99-100) ============
  {
    id: 'c_dsa_99',
    topicId: 'c_dsa_basic',
    question: 'Implement Union-Find (Disjoint Set) data structure.',
    mathSolution: 'Track connected components',
    codeSolution: 'int parent[100];\n\nvoid makeSet(int n) {\n    for(int i = 0; i < n; i++) parent[i] = i;\n}\n\nint find(int x) {\n    if(parent[x] != x)\n        parent[x] = find(parent[x]);\n    return parent[x];\n}\n\nvoid unionSets(int x, int y) {\n    int xRoot = find(x), yRoot = find(y);\n    if(xRoot != yRoot)\n        parent[xRoot] = yRoot;\n}',
    hint: 'Path compression in find'
  },
  {
    id: 'c_dsa_100',
    topicId: 'c_dsa_basic',
    question: 'Implement segment tree for range sum queries.',
    mathSolution: 'Tree for range queries',
    codeSolution: 'int segTree[4*1000];\n\nvoid build(int arr[], int node, int start, int end) {\n    if(start == end) segTree[node] = arr[start];\n    else {\n        int mid = (start + end) / 2;\n        build(arr, 2*node, start, mid);\n        build(arr, 2*node+1, mid+1, end);\n        segTree[node] = segTree[2*node] + segTree[2*node+1];\n    }\n}\n\nint query(int node, int start, int end, int l, int r) {\n    if(r < start || l > end) return 0;\n    if(l <= start && end <= r) return segTree[node];\n    int mid = (start + end) / 2;\n    return query(2*node, start, mid, l, r) +\n           query(2*node+1, mid+1, end, l, r);\n}\n\nvoid update(int node, int start, int end, int idx, int val) {\n    if(start == end) segTree[node] = val;\n    else {\n        int mid = (start + end) / 2;\n        if(idx <= mid)\n            update(2*node, start, mid, idx, val);\n        else\n            update(2*node+1, mid+1, end, idx, val);\n        segTree[node] = segTree[2*node] + segTree[2*node+1];\n    }\n}',
    hint: 'Build, query, update operations'
  }
);