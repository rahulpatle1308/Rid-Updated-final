QuizData.questions.push(
  {
    id: "cpp_array_1",
    topicId: "cpp_arrays",
    question: "What is an array in C++? Explain with syntax.",
    mathSolution: "Array concept",
    codeSolution:
      "An array is a collection of elements of the same data type stored in contiguous memory locations.\n\nSyntax: data_type array_name[size];\nExample: int numbers[5];",
    hint: "Think of it as a list of similar items.",
  },
  {
    id: "cpp_array_2",
    topicId: "cpp_arrays",
    question:
      "How do you declare and initialize an array in C++? Give examples.",
    mathSolution: "Array initialization",
    codeSolution:
      "int arr[5] = {10, 20, 30, 40, 50};  // Full initialization\nint arr2[] = {1, 2, 3, 4, 5};          // Size inferred\nint arr3[5] = {1, 2};                   // Remaining elements = 0",
    hint: "Size can be inferred from initializer list.",
  },
  {
    id: "cpp_array_3",
    topicId: "cpp_arrays",
    question: "Write a program to input and display array elements.",
    mathSolution: "Basic array I/O",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[5];\n    cout << "Enter 5 numbers: ";\n    for(int i=0; i<5; i++) {\n        cin >> arr[i];\n    }\n    cout << "Array elements: ";\n    for(int i=0; i<5; i++) {\n        cout << arr[i] << " ";\n    }\n    cout << endl;\n    return 0;\n}',
    hint: "Use loops for input and output.",
  },
  {
    id: "cpp_array_4",
    topicId: "cpp_arrays",
    question: "Write a program to find the sum of all elements in an array.",
    mathSolution: "Sum = arr[0] + arr[1] + ... + arr[n-1]",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int sum = 0;\n    for(int i=0; i<size; i++) {\n        sum += arr[i];\n    }\n    cout << "Sum = " << sum << endl;\n    return 0;\n}',
    hint: "Initialize sum to 0 and add each element.",
  },
  {
    id: "cpp_array_5",
    topicId: "cpp_arrays",
    question: "Write a program to find the average of array elements.",
    mathSolution: "Average = Sum / n",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int sum = 0;\n    for(int i=0; i<size; i++) {\n        sum += arr[i];\n    }\n    double avg = (double)sum / size;\n    cout << "Average = " << avg << endl;\n    return 0;\n}',
    hint: "Use type casting for accurate division.",
  },
  {
    id: "cpp_array_6",
    topicId: "cpp_arrays",
    question: "Write a program to find the largest element in an array.",
    mathSolution: "max = max(arr[0], arr[1], ..., arr[n-1])",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {45, 23, 78, 12, 56};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int max = arr[0];\n    for(int i=1; i<size; i++) {\n        if(arr[i] > max) {\n            max = arr[i];\n        }\n    }\n    cout << "Largest element = " << max << endl;\n    return 0;\n}',
    hint: "Assume first element as max and compare.",
  },
  {
    id: "cpp_array_7",
    topicId: "cpp_arrays",
    question: "Write a program to find the smallest element in an array.",
    mathSolution: "min = min(arr[0], arr[1], ..., arr[n-1])",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {45, 23, 78, 12, 56};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int min = arr[0];\n    for(int i=1; i<size; i++) {\n        if(arr[i] < min) {\n            min = arr[i];\n        }\n    }\n    cout << "Smallest element = " << min << endl;\n    return 0;\n}',
    hint: "Assume first element as min and compare.",
  },
  {
    id: "cpp_array_8",
    topicId: "cpp_arrays",
    question: "Write a program to find the second largest element in an array.",
    mathSolution: "second = max of elements less than largest",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {45, 23, 78, 12, 56};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int largest = arr[0], second = arr[0];\n    for(int i=1; i<size; i++) {\n        if(arr[i] > largest) {\n            second = largest;\n            largest = arr[i];\n        } else if(arr[i] > second && arr[i] != largest) {\n            second = arr[i];\n        }\n    }\n    cout << "Second largest = " << second << endl;\n    return 0;\n}',
    hint: "Track both largest and second largest.",
  },
  {
    id: "cpp_array_9",
    topicId: "cpp_arrays",
    question: "Write a program to reverse an array.",
    mathSolution: "Swap arr[i] with arr[n-1-i]",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    cout << "Original: ";\n    for(int i=0; i<size; i++) cout << arr[i] << " ";\n    for(int i=0; i<size/2; i++) {\n        int temp = arr[i];\n        arr[i] = arr[size-1-i];\n        arr[size-1-i] = temp;\n    }\n    cout << "\\nReversed: ";\n    for(int i=0; i<size; i++) cout << arr[i] << " ";\n    cout << endl;\n    return 0;\n}',
    hint: "Swap first with last, second with second-last, etc.",
  },
  {
    id: "cpp_array_10",
    topicId: "cpp_arrays",
    question:
      "Write a program to search for an element in an array (linear search).",
    mathSolution: "Compare each element with key",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {23, 45, 12, 67, 34};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int key = 12, pos = -1;\n    for(int i=0; i<size; i++) {\n        if(arr[i] == key) {\n            pos = i;\n            break;\n        }\n    }\n    if(pos != -1)\n        cout << key << " found at position " << pos << endl;\n    else\n        cout << key << " not found" << endl;\n    return 0;\n}',
    hint: "Break the loop when element is found.",
  },
  {
    id: "cpp_array_11",
    topicId: "cpp_arrays",
    question:
      "Write a program to sort an array in ascending order (bubble sort).",
    mathSolution: "Compare adjacent and swap if needed",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {64, 34, 25, 12, 22};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    for(int i=0; i<size-1; i++) {\n        for(int j=0; j<size-i-1; j++) {\n            if(arr[j] > arr[j+1]) {\n                int temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n        }\n    }\n    cout << "Sorted array: ";\n    for(int i=0; i<size; i++) cout << arr[i] << " ";\n    cout << endl;\n    return 0;\n}',
    hint: "Largest element bubbles to the end in each pass.",
  },
  {
    id: "cpp_array_12",
    topicId: "cpp_arrays",
    question: "Write a program to sort an array in descending order.",
    mathSolution: "Compare adjacent and swap if in wrong order",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {64, 34, 25, 12, 22};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    for(int i=0; i<size-1; i++) {\n        for(int j=0; j<size-i-1; j++) {\n            if(arr[j] < arr[j+1]) {\n                int temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n        }\n    }\n    cout << "Descending order: ";\n    for(int i=0; i<size; i++) cout << arr[i] << " ";\n    cout << endl;\n    return 0;\n}',
    hint: "Use > for ascending, < for descending.",
  },
  {
    id: "cpp_array_13",
    topicId: "cpp_arrays",
    question: "What is a 2D array? How do you declare and initialize it?",
    mathSolution: "Matrix concept",
    codeSolution:
      "A 2D array is an array of arrays, like a matrix.\n\nint matrix[3][3] = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};",
    hint: "Think of it as rows and columns.",
  },
  {
    id: "cpp_array_14",
    topicId: "cpp_arrays",
    question: "Write a program to input and display a 2D array.",
    mathSolution: "Nested loops for rows and columns",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[3][3];\n    cout << "Enter 9 elements:" << endl;\n    for(int i=0; i<3; i++) {\n        for(int j=0; j<3; j++) {\n            cin >> arr[i][j];\n        }\n    }\n    cout << "2D Array:" << endl;\n    for(int i=0; i<3; i++) {\n        for(int j=0; j<3; j++) {\n            cout << arr[i][j] << " ";\n        }\n        cout << endl;\n    }\n    return 0;\n}',
    hint: "Use nested loops for 2D arrays.",
  },
  {
    id: "cpp_array_15",
    topicId: "cpp_arrays",
    question: "Write a program to find the sum of all elements in a 2D array.",
    mathSolution: "Sum = sum of all elements",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};\n    int sum = 0;\n    for(int i=0; i<3; i++) {\n        for(int j=0; j<3; j++) {\n            sum += arr[i][j];\n        }\n    }\n    cout << "Sum = " << sum << endl;\n    return 0;\n}',
    hint: "Iterate through all elements.",
  },
  {
    id: "cpp_array_16",
    topicId: "cpp_arrays",
    question: "Write a program to add two matrices.",
    mathSolution: "C[i][j] = A[i][j] + B[i][j]",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int A[2][2] = {{1,2}, {3,4}};\n    int B[2][2] = {{5,6}, {7,8}};\n    int C[2][2];\n    for(int i=0; i<2; i++) {\n        for(int j=0; j<2; j++) {\n            C[i][j] = A[i][j] + B[i][j];\n        }\n    }\n    cout << "Result matrix:" << endl;\n    for(int i=0; i<2; i++) {\n        for(int j=0; j<2; j++) {\n            cout << C[i][j] << " ";\n        }\n        cout << endl;\n    }\n    return 0;\n}',
    hint: "Add corresponding elements.",
  },
  {
    id: "cpp_array_17",
    topicId: "cpp_arrays",
    question: "Write a program to multiply two matrices.",
    mathSolution: "C[i][j] = sum(A[i][k] * B[k][j])",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int A[2][2] = {{1,2}, {3,4}};\n    int B[2][2] = {{5,6}, {7,8}};\n    int C[2][2] = {0};\n    for(int i=0; i<2; i++) {\n        for(int j=0; j<2; j++) {\n            for(int k=0; k<2; k++) {\n                C[i][j] += A[i][k] * B[k][j];\n            }\n        }\n    }\n    cout << "Product matrix:" << endl;\n    for(int i=0; i<2; i++) {\n        for(int j=0; j<2; j++) {\n            cout << C[i][j] << " ";\n        }\n        cout << endl;\n    }\n    return 0;\n}',
    hint: "Triple nested loop for multiplication.",
  },
  {
    id: "cpp_array_18",
    topicId: "cpp_arrays",
    question: "Write a program to find the transpose of a matrix.",
    mathSolution: "T[j][i] = A[i][j]",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int A[3][2] = {{1,2}, {3,4}, {5,6}};\n    int T[2][3];\n    for(int i=0; i<3; i++) {\n        for(int j=0; j<2; j++) {\n            T[j][i] = A[i][j];\n        }\n    }\n    cout << "Original matrix:" << endl;\n    for(int i=0; i<3; i++) {\n        for(int j=0; j<2; j++) cout << A[i][j] << " ";\n        cout << endl;\n    }\n    cout << "Transpose:" << endl;\n    for(int i=0; i<2; i++) {\n        for(int j=0; j<3; j++) cout << T[i][j] << " ";\n        cout << endl;\n    }\n    return 0;\n}',
    hint: "Swap rows with columns.",
  },
  {
    id: "cpp_array_19",
    topicId: "cpp_arrays",
    question: "Write a program to find the diagonal sum of a square matrix.",
    mathSolution: "Sum = A[0][0] + A[1][1] + ... + A[n-1][n-1]",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int mat[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};\n    int sum = 0;\n    for(int i=0; i<3; i++) {\n        sum += mat[i][i];  // Main diagonal\n    }\n    cout << "Sum of main diagonal = " << sum << endl;\n    return 0;\n}',
    hint: "Diagonal elements have same row and column index.",
  },
  {
    id: "cpp_array_20",
    topicId: "cpp_arrays",
    question: "Write a program to check if a matrix is symmetric.",
    mathSolution: "A[i][j] == A[j][i] for all i,j",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int mat[3][3] = {{1,2,3}, {2,4,5}, {3,5,6}};\n    bool symmetric = true;\n    for(int i=0; i<3; i++) {\n        for(int j=0; j<3; j++) {\n            if(mat[i][j] != mat[j][i]) {\n                symmetric = false;\n                break;\n            }\n        }\n    }\n    if(symmetric)\n        cout << "Matrix is symmetric" << endl;\n    else\n        cout << "Matrix is not symmetric" << endl;\n    return 0;\n}',
    hint: "Compare with transpose.",
  },
  {
    id: "cpp_array_21",
    topicId: "cpp_arrays",
    question: "Write a program to count even and odd numbers in an array.",
    mathSolution: "evenCount++ if arr[i]%2==0 else oddCount++",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {12, 7, 8, 15, 22, 9, 18};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int even = 0, odd = 0;\n    for(int i=0; i<size; i++) {\n        if(arr[i] % 2 == 0)\n            even++;\n        else\n            odd++;\n    }\n    cout << "Even numbers: " << even << endl;\n    cout << "Odd numbers: " << odd << endl;\n    return 0;\n}',
    hint: "Use modulo operator %2.",
  },
  {
    id: "cpp_array_22",
    topicId: "cpp_arrays",
    question:
      "Write a program to find the frequency of each element in an array.",
    mathSolution: "Count occurrences of each element",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 2, 3, 2, 4, 1, 5, 2};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    bool visited[size] = {false};\n    for(int i=0; i<size; i++) {\n        if(visited[i]) continue;\n        int count = 1;\n        for(int j=i+1; j<size; j++) {\n            if(arr[i] == arr[j]) {\n                count++;\n                visited[j] = true;\n            }\n        }\n        cout << arr[i] << " occurs " << count << " times" << endl;\n    }\n    return 0;\n}',
    hint: "Use visited array to avoid counting twice.",
  },
  {
    id: "cpp_array_23",
    topicId: "cpp_arrays",
    question: "Write a program to remove duplicates from an array.",
    mathSolution: "Create new array without duplicates",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 2, 3, 2, 4, 1, 5, 2};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int temp[size];\n    int newSize = 0;\n    for(int i=0; i<size; i++) {\n        bool duplicate = false;\n        for(int j=0; j<newSize; j++) {\n            if(arr[i] == temp[j]) {\n                duplicate = true;\n                break;\n            }\n        }\n        if(!duplicate) {\n            temp[newSize++] = arr[i];\n        }\n    }\n    cout << "Array without duplicates: ";\n    for(int i=0; i<newSize; i++) {\n        cout << temp[i] << " ";\n    }\n    cout << endl;\n    return 0;\n}',
    hint: "Check if element already in new array.",
  },
  {
    id: "cpp_array_24",
    topicId: "cpp_arrays",
    question: "Write a program to merge two sorted arrays.",
    mathSolution: "Merge like in merge sort",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr1[] = {1, 3, 5, 7};\n    int arr2[] = {2, 4, 6, 8};\n    int s1 = sizeof(arr1)/sizeof(arr1[0]);\n    int s2 = sizeof(arr2)/sizeof(arr2[0]);\n    int merged[s1+s2];\n    int i=0, j=0, k=0;\n    while(i < s1 && j < s2) {\n        if(arr1[i] < arr2[j])\n            merged[k++] = arr1[i++];\n        else\n            merged[k++] = arr2[j++];\n    }\n    while(i < s1) merged[k++] = arr1[i++];\n    while(j < s2) merged[k++] = arr2[j++];\n    cout << "Merged array: ";\n    for(int x=0; x<s1+s2; x++) {\n        cout << merged[x] << " ";\n    }\n    cout << endl;\n    return 0;\n}',
    hint: "Compare and pick smaller element.",
  },
  {
    id: "cpp_array_25",
    topicId: "cpp_arrays",
    question: "Write a program to rotate an array left by k positions.",
    mathSolution: "New[i] = arr[(i+k)%n]",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int k = 2;  // Rotate left by 2\n    k = k % size;\n    int temp[size];\n    for(int i=0; i<size; i++) {\n        temp[i] = arr[(i + k) % size];\n    }\n    cout << "After left rotation by " << k << ": ";\n    for(int i=0; i<size; i++) {\n        cout << temp[i] << " ";\n    }\n    cout << endl;\n    return 0;\n}',
    hint: "Use modulo for circular rotation.",
  },
  {
    id: "cpp_array_26",
    topicId: "cpp_arrays",
    question: "Write a program to rotate an array right by k positions.",
    mathSolution: "New[i] = arr[(i-k+n)%n]",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int k = 2;  // Rotate right by 2\n    k = k % size;\n    int temp[size];\n    for(int i=0; i<size; i++) {\n        temp[i] = arr[(i - k + size) % size];\n    }\n    cout << "After right rotation by " << k << ": ";\n    for(int i=0; i<size; i++) {\n        cout << temp[i] << " ";\n    }\n    cout << endl;\n    return 0;\n}',
    hint: "Right rotation is left rotation with (n-k).",
  },
  {
    id: "cpp_array_27",
    topicId: "cpp_arrays",
    question:
      "Write a program to find the missing number in an array of 1 to n.",
    mathSolution: "missing = n(n+1)/2 - sum(arr)",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 2, 4, 5, 6};\n    int n = 6;\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int sumArr = 0, sumN = n*(n+1)/2;\n    for(int i=0; i<size; i++) {\n        sumArr += arr[i];\n    }\n    int missing = sumN - sumArr;\n    cout << "Missing number: " << missing << endl;\n    return 0;\n}',
    hint: "Sum of first n numbers formula.",
  },
  {
    id: "cpp_array_28",
    topicId: "cpp_arrays",
    question: "Write a program to find the duplicate element in an array.",
    mathSolution: "Find element appearing twice",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 3, 4, 2, 2};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    bool found = false;\n    for(int i=0; i<size; i++) {\n        for(int j=i+1; j<size; j++) {\n            if(arr[i] == arr[j]) {\n                cout << "Duplicate element: " << arr[i] << endl;\n                found = true;\n                break;\n            }\n        }\n        if(found) break;\n    }\n    return 0;\n}',
    hint: "Compare each element with others.",
  },
  {
    id: "cpp_array_29",
    topicId: "cpp_arrays",
    question: "Write a program to find the intersection of two arrays.",
    mathSolution: "Common elements in both arrays",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr1[] = {1, 2, 3, 4, 5};\n    int arr2[] = {3, 4, 5, 6, 7};\n    int s1 = sizeof(arr1)/sizeof(arr1[0]);\n    int s2 = sizeof(arr2)/sizeof(arr2[0]);\n    cout << "Intersection: ";\n    for(int i=0; i<s1; i++) {\n        for(int j=0; j<s2; j++) {\n            if(arr1[i] == arr2[j]) {\n                cout << arr1[i] << " ";\n                break;\n            }\n        }\n    }\n    cout << endl;\n    return 0;\n}',
    hint: "Nested loops to find common elements.",
  },
  {
    id: "cpp_array_30",
    topicId: "cpp_arrays",
    question: "Write a program to find the union of two arrays.",
    mathSolution: "All unique elements from both arrays",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr1[] = {1, 2, 3, 4, 5};\n    int arr2[] = {3, 4, 5, 6, 7};\n    int s1 = sizeof(arr1)/sizeof(arr1[0]);\n    int s2 = sizeof(arr2)/sizeof(arr2[0]);\n    int temp[s1+s2];\n    int size = 0;\n    for(int i=0; i<s1; i++) temp[size++] = arr1[i];\n    for(int i=0; i<s2; i++) {\n        bool duplicate = false;\n        for(int j=0; j<size; j++) {\n            if(arr2[i] == temp[j]) {\n                duplicate = true;\n                break;\n            }\n        }\n        if(!duplicate) temp[size++] = arr2[i];\n    }\n    cout << "Union: ";\n    for(int i=0; i<size; i++) cout << temp[i] << " ";\n    cout << endl;\n    return 0;\n}',
    hint: "Add first array, then add unique from second.",
  },
  {
    id: "cpp_array_31",
    topicId: "cpp_arrays",
    question:
      "Write a program to find the pair of elements with maximum product in an array.",
    mathSolution: "max(max1*max2, min1*min2)",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 4, 3, 6, 7, 0};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int max1 = arr[0], max2 = arr[1];\n    int min1 = arr[0], min2 = arr[1];\n    for(int i=0; i<size; i++) {\n        if(arr[i] > max1) {\n            max2 = max1;\n            max1 = arr[i];\n        } else if(arr[i] > max2) {\n            max2 = arr[i];\n        }\n        if(arr[i] < min1) {\n            min2 = min1;\n            min1 = arr[i];\n        } else if(arr[i] < min2) {\n            min2 = arr[i];\n        }\n    }\n    int prod1 = max1 * max2;\n    int prod2 = min1 * min2;\n    if(prod1 > prod2)\n        cout << "Max product: " << max1 << " * " << max2 << " = " << prod1 << endl;\n    else\n        cout << "Max product: " << min1 << " * " << min2 << " = " << prod2 << endl;\n    return 0;\n}',
    hint: "Consider both largest positives and smallest negatives.",
  },
  {
    id: "cpp_array_32",
    topicId: "cpp_arrays",
    question:
      "Write a program to find the subarray with maximum sum (Kadane's algorithm).",
    mathSolution: "maxEnding = max(arr[i], maxEnding+arr[i])",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {-2, -3, 4, -1, -2, 1, 5, -3};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int maxSoFar = arr[0], maxEnding = arr[0];\n    for(int i=1; i<size; i++) {\n        maxEnding = max(arr[i], maxEnding + arr[i]);\n        maxSoFar = max(maxSoFar, maxEnding);\n    }\n    cout << "Maximum subarray sum = " << maxSoFar << endl;\n    return 0;\n}',
    hint: "DP approach: either extend or start new.",
  },
  {
    id: "cpp_array_33",
    topicId: "cpp_arrays",
    question: "Write a program to move all zeros to the end of an array.",
    mathSolution: "Shift non-zero elements left, fill rest with zeros",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {0, 1, 0, 3, 12, 0, 5};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int j = 0;\n    for(int i=0; i<size; i++) {\n        if(arr[i] != 0) {\n            arr[j++] = arr[i];\n        }\n    }\n    while(j < size) {\n        arr[j++] = 0;\n    }\n    cout << "Array after moving zeros: ";\n    for(int i=0; i<size; i++) cout << arr[i] << " ";\n    cout << endl;\n    return 0;\n}',
    hint: "Two-pointer approach.",
  },
  {
    id: "cpp_array_34",
    topicId: "cpp_arrays",
    question:
      "Write a program to check if an array is sorted in ascending order.",
    mathSolution: "arr[i] <= arr[i+1] for all i",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    bool sorted = true;\n    for(int i=0; i<size-1; i++) {\n        if(arr[i] > arr[i+1]) {\n            sorted = false;\n            break;\n        }\n    }\n    if(sorted)\n        cout << "Array is sorted in ascending order" << endl;\n    else\n        cout << "Array is not sorted" << endl;\n    return 0;\n}',
    hint: "Check each adjacent pair.",
  },
  {
    id: "cpp_array_35",
    topicId: "cpp_arrays",
    question:
      "Write a program to find the first and last occurrence of an element in an array.",
    mathSolution: "first = first index, last = last index",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 2, 3, 2, 4, 2, 5};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int key = 2;\n    int first = -1, last = -1;\n    for(int i=0; i<size; i++) {\n        if(arr[i] == key) {\n            if(first == -1) first = i;\n            last = i;\n        }\n    }\n    if(first != -1) {\n        cout << "First occurrence of " << key << " at index " << first << endl;\n        cout << "Last occurrence at index " << last << endl;\n    } else {\n        cout << key << " not found" << endl;\n    }\n    return 0;\n}',
    hint: "Update first only once, last every time.",
  },
  {
    id: "cpp_array_36",
    topicId: "cpp_arrays",
    question:
      "Write a program to find the majority element (element appearing more than n/2 times).",
    mathSolution: "Moore's Voting Algorithm",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {3, 3, 4, 2, 4, 4, 2, 4, 4};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int candidate = arr[0], count = 1;\n    for(int i=1; i<size; i++) {\n        if(arr[i] == candidate) count++;\n        else count--;\n        if(count == 0) {\n            candidate = arr[i];\n            count = 1;\n        }\n    }\n    count = 0;\n    for(int i=0; i<size; i++) {\n        if(arr[i] == candidate) count++;\n    }\n    if(count > size/2)\n        cout << "Majority element: " << candidate << endl;\n    else\n        cout << "No majority element" << endl;\n    return 0;\n}',
    hint: "Cancel each non-majority element.",
  },
  {
    id: "cpp_array_37",
    topicId: "cpp_arrays",
    question:
      "Write a program to find the leader elements in an array (element greater than all to its right).",
    mathSolution: "Traverse from right, track max",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {16, 17, 4, 3, 5, 2};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int maxRight = arr[size-1];\n    cout << "Leaders: " << maxRight << " ";\n    for(int i=size-2; i>=0; i--) {\n        if(arr[i] > maxRight) {\n            maxRight = arr[i];\n            cout << arr[i] << " ";\n        }\n    }\n    cout << endl;\n    return 0;\n}',
    hint: "Start from rightmost element.",
  },
  {
    id: "cpp_array_38",
    topicId: "cpp_arrays",
    question:
      "Write a program to find the equilibrium index in an array (sum left = sum right).",
    mathSolution: "leftSum = total - rightSum - arr[i]",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {-7, 1, 5, 2, -4, 3, 0};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int total = 0, left = 0;\n    for(int i=0; i<size; i++) total += arr[i];\n    bool found = false;\n    for(int i=0; i<size; i++) {\n        total -= arr[i];  // right sum\n        if(left == total) {\n            cout << "Equilibrium index: " << i << endl;\n            found = true;\n            break;\n        }\n        left += arr[i];\n    }\n    if(!found) cout << "No equilibrium index" << endl;\n    return 0;\n}',
    hint: "Right sum = total - left - current.",
  },
  {
    id: "cpp_array_39",
    topicId: "cpp_arrays",
    question:
      "Write a program to find the maximum difference between two elements (largest - smallest).",
    mathSolution: "maxDiff = max(arr[i] - minSoFar)",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {2, 3, 10, 6, 4, 8, 1};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int minElement = arr[0];\n    int maxDiff = arr[1] - arr[0];\n    for(int i=1; i<size; i++) {\n        if(arr[i] - minElement > maxDiff)\n            maxDiff = arr[i] - minElement;\n        if(arr[i] < minElement)\n            minElement = arr[i];\n    }\n    cout << "Maximum difference: " << maxDiff << endl;\n    return 0;\n}',
    hint: "Track minimum element so far.",
  },
  {
    id: "cpp_array_40",
    topicId: "cpp_arrays",
    question: "Write a program to find the longest increasing subarray.",
    mathSolution: "Count consecutive increasing elements",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {5, 6, 3, 5, 7, 8, 9, 1, 2};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int maxLen = 1, currLen = 1, end = 0;\n    for(int i=1; i<size; i++) {\n        if(arr[i] > arr[i-1]) {\n            currLen++;\n            if(currLen > maxLen) {\n                maxLen = currLen;\n                end = i;\n            }\n        } else {\n            currLen = 1;\n        }\n    }\n    cout << "Longest increasing subarray of length " << maxLen << ": ";\n    for(int i=end-maxLen+1; i<=end; i++) {\n        cout << arr[i] << " ";\n    }\n    cout << endl;\n    return 0;\n}',
    hint: "Reset count when sequence breaks.",
  },
  {
    id: "cpp_array_41",
    topicId: "cpp_arrays",
    question: "Write a program to find the median of two sorted arrays.",
    mathSolution: "Middle element(s) after merging",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr1[] = {1, 3, 5};\n    int arr2[] = {2, 4, 6};\n    int s1 = sizeof(arr1)/sizeof(arr1[0]);\n    int s2 = sizeof(arr2)/sizeof(arr2[0]);\n    int merged[s1+s2];\n    int i=0, j=0, k=0;\n    while(i < s1 && j < s2) {\n        if(arr1[i] < arr2[j])\n            merged[k++] = arr1[i++];\n        else\n            merged[k++] = arr2[j++];\n    }\n    while(i < s1) merged[k++] = arr1[i++];\n    while(j < s2) merged[k++] = arr2[j++];\n    int total = s1+s2;\n    double median;\n    if(total % 2 == 1) {\n        median = merged[total/2];\n    } else {\n        median = (merged[total/2 - 1] + merged[total/2]) / 2.0;\n    }\n    cout << "Median = " << median << endl;\n    return 0;\n}',
    hint: "Merge first, then find middle.",
  },
  {
    id: "cpp_array_42",
    topicId: "cpp_arrays",
    question:
      "Write a program to find the product of all elements except itself (without division).",
    mathSolution: "product[i] = left[i] * right[i]",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 2, 3, 4};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int left[size], right[size], result[size];\n    left[0] = 1;\n    for(int i=1; i<size; i++) {\n        left[i] = left[i-1] * arr[i-1];\n    }\n    right[size-1] = 1;\n    for(int i=size-2; i>=0; i--) {\n        right[i] = right[i+1] * arr[i+1];\n    }\n    for(int i=0; i<size; i++) {\n        result[i] = left[i] * right[i];\n    }\n    cout << "Product except self: ";\n    for(int i=0; i<size; i++) cout << result[i] << " ";\n    cout << endl;\n    return 0;\n}',
    hint: "Compute left and right products.",
  },
  {
    id: "cpp_array_43",
    topicId: "cpp_arrays",
    question:
      "Write a program to find the smallest positive missing number in an array.",
    mathSolution: "Find smallest positive integer not in array",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {3, 4, -1, 1};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    bool present[size+1] = {false};\n    for(int i=0; i<size; i++) {\n        if(arr[i] > 0 && arr[i] <= size) {\n            present[arr[i]] = true;\n        }\n    }\n    int missing = 1;\n    while(missing <= size && present[missing]) {\n        missing++;\n    }\n    cout << "Smallest missing positive number: " << missing << endl;\n    return 0;\n}',
    hint: "Mark present numbers, find first missing.",
  },
  {
    id: "cpp_array_44",
    topicId: "cpp_arrays",
    question: "Write a program to find the maximum product subarray.",
    mathSolution: "Track max and min products",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {6, -3, -10, 0, 2};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int maxProd = arr[0], minProd = arr[0], result = arr[0];\n    for(int i=1; i<size; i++) {\n        if(arr[i] < 0) swap(maxProd, minProd);\n        maxProd = max(arr[i], maxProd * arr[i]);\n        minProd = min(arr[i], minProd * arr[i]);\n        result = max(result, maxProd);\n    }\n    cout << "Maximum product subarray: " << result << endl;\n    return 0;\n}',
    hint: "Handle negatives by swapping min and max.",
  },
  {
    id: "cpp_array_45",
    topicId: "cpp_arrays",
    question: "Write a program to find the triplet that sums to a given value.",
    mathSolution: "a+b+c = target",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 4, 45, 6, 10, 8};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int target = 22;\n    bool found = false;\n    for(int i=0; i<size-2; i++) {\n        for(int j=i+1; j<size-1; j++) {\n            for(int k=j+1; k<size; k++) {\n                if(arr[i] + arr[j] + arr[k] == target) {\n                    cout << "Triplet: " << arr[i] << ", " << arr[j] << ", " << arr[k] << endl;\n                    found = true;\n                    break;\n                }\n            }\n            if(found) break;\n        }\n        if(found) break;\n    }\n    if(!found) cout << "No triplet found" << endl;\n    return 0;\n}',
    hint: "Three nested loops for brute force.",
  },
  {
    id: "cpp_array_46",
    topicId: "cpp_arrays",
    question:
      "Write a program to find the length of the longest consecutive sequence in an array.",
    mathSolution: "Sort and count consecutive elements",
    codeSolution:
      '#include <iostream>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int arr[] = {100, 4, 200, 1, 3, 2};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    sort(arr, arr+size);\n    int longest = 1, current = 1;\n    for(int i=1; i<size; i++) {\n        if(arr[i] == arr[i-1] + 1) {\n            current++;\n            longest = max(longest, current);\n        } else if(arr[i] != arr[i-1]) {\n            current = 1;\n        }\n    }\n    cout << "Longest consecutive sequence length: " << longest << endl;\n    return 0;\n}',
    hint: "Sorting makes consecutive elements adjacent.",
  },
  {
    id: "cpp_array_47",
    topicId: "cpp_arrays",
    question: "Write a program to perform binary search on a sorted array.",
    mathSolution: "Divide and conquer search",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {2, 5, 8, 12, 16, 23, 38, 45, 56};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int key = 23;\n    int left = 0, right = size-1, pos = -1;\n    while(left <= right) {\n        int mid = left + (right - left) / 2;\n        if(arr[mid] == key) {\n            pos = mid;\n            break;\n        } else if(arr[mid] < key) {\n            left = mid + 1;\n        } else {\n            right = mid - 1;\n        }\n    }\n    if(pos != -1)\n        cout << key << " found at index " << pos << endl;\n    else\n        cout << key << " not found" << endl;\n    return 0;\n}',
    hint: "Repeatedly divide search space in half.",
  },
  {
    id: "cpp_array_48",
    topicId: "cpp_arrays",
    question:
      "Write a program to find the peak element in an array (element greater than neighbors).",
    mathSolution: "Binary search for peak",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {1, 3, 20, 4, 1, 0};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int left = 0, right = size-1;\n    while(left <= right) {\n        int mid = left + (right - left) / 2;\n        if((mid == 0 || arr[mid] >= arr[mid-1]) && \n           (mid == size-1 || arr[mid] >= arr[mid+1])) {\n            cout << "Peak element: " << arr[mid] << " at index " << mid << endl;\n            break;\n        } else if(mid > 0 && arr[mid-1] > arr[mid]) {\n            right = mid - 1;\n        } else {\n            left = mid + 1;\n        }\n    }\n    return 0;\n}',
    hint: "Peak exists because ends are considered -infinity.",
  },
  {
    id: "cpp_array_49",
    topicId: "cpp_arrays",
    question: "Write a program to find the kth smallest element in an array.",
    mathSolution: "Sort and pick k-1 index",
    codeSolution:
      '#include <iostream>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int arr[] = {7, 10, 4, 3, 20, 15};\n    int size = sizeof(arr)/sizeof(arr[0]);\n    int k = 3;\n    sort(arr, arr+size);\n    cout << k << "rd smallest element: " << arr[k-1] << endl;\n    return 0;\n}',
    hint: "Sorting gives ordered elements.",
  },
  {
    id: "cpp_array_50",
    topicId: "cpp_arrays",
    question:
      "Write a program to perform all array operations using a menu-driven approach.",
    mathSolution: "Menu with insert, delete, search, etc.",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int arr[100], size = 0, choice, pos, value;\n    do {\n        cout << "\\nArray Operations Menu:" << endl;\n        cout << "1. Insert element" << endl;\n        cout << "2. Delete element" << endl;\n        cout << "3. Display array" << endl;\n        cout << "4. Search element" << endl;\n        cout << "5. Find sum and average" << endl;\n        cout << "6. Find max and min" << endl;\n        cout << "7. Reverse array" << endl;\n        cout << "0. Exit" << endl;\n        cout << "Enter choice: ";\n        cin >> choice;\n        \n        switch(choice) {\n            case 1:\n                cout << "Enter position (0-based) and value: ";\n                cin >> pos >> value;\n                if(pos < 0 || pos > size) {\n                    cout << "Invalid position!" << endl;\n                } else {\n                    for(int i=size; i>pos; i--) arr[i] = arr[i-1];\n                    arr[pos] = value;\n                    size++;\n                    cout << "Element inserted" << endl;\n                }\n                break;\n            case 2:\n                cout << "Enter position to delete: ";\n                cin >> pos;\n                if(pos < 0 || pos >= size) {\n                    cout << "Invalid position!" << endl;\n                } else {\n                    for(int i=pos; i<size-1; i++) arr[i] = arr[i+1];\n                    size--;\n                    cout << "Element deleted" << endl;\n                }\n                break;\n            case 3:\n                cout << "Array: ";\n                for(int i=0; i<size; i++) cout << arr[i] << " ";\n                cout << endl;\n                break;\n            case 4:\n                cout << "Enter value to search: ";\n                cin >> value;\n                for(int i=0; i<size; i++) {\n                    if(arr[i] == value) {\n                        cout << "Found at position " << i << endl;\n                        break;\n                    }\n                }\n                break;\n            case 5:\n                int sum;\n                sum = 0;\n                for(int i=0; i<size; i++) sum += arr[i];\n                cout << "Sum = " << sum << ", Average = " << (double)sum/size << endl;\n                break;\n            case 6:\n                int max, min;\n                max = min = arr[0];\n                for(int i=1; i<size; i++) {\n                    if(arr[i] > max) max = arr[i];\n                    if(arr[i] < min) min = arr[i];\n                }\n                cout << "Max = " << max << ", Min = " << min << endl;\n                break;\n            case 7:\n                for(int i=0; i<size/2; i++) {\n                    int temp = arr[i];\n                    arr[i] = arr[size-1-i];\n                    arr[size-1-i] = temp;\n                }\n                cout << "Array reversed" << endl;\n                break;\n            case 0:\n                cout << "Exiting..." << endl;\n                break;\n            default:\n                cout << "Invalid choice!" << endl;\n        }\n    } while(choice != 0);\n    return 0;\n}',
    hint: "Use switch case for menu options.",
  },
);
