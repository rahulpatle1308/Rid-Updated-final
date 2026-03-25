QuizData.questions.push(
  {
    id: "java_array_1",
    topicId: "java_array",
    question:
      "Create an integer array of size 5 and initialize it with the values 10, 20, 30, 40, 50. Print the third element.",
    mathSolution:
      "Array index 2 corresponds to the third element, which is 30.",
    codeSolution:
      "int[] arr = {10, 20, 30, 40, 50};\nSystem.out.println(arr[2]);",
    hint: "Array indices start at 0. The third element is at index 2.",
  },
  {
    id: "java_array_2",
    topicId: "java_array",
    question:
      "Calculate and print the sum of all elements in the array: {5, 10, 15, 20}.",
    mathSolution: "5 + 10 + 15 + 20 = 50",
    codeSolution:
      "int[] arr = {5, 10, 15, 20};\nint sum = 0;\nfor(int i = 0; i < arr.length; i++) {\n    sum += arr[i];\n}\nSystem.out.println(sum);",
    hint: "Use a for loop to iterate through the array and add each element to a sum variable.",
  },
  {
    id: "java_array_3",
    topicId: "java_array",
    question:
      "Find and print the largest element in the array: {3, 7, 2, 9, 5}.",
    mathSolution: "The largest number is 9.",
    codeSolution:
      "int[] arr = {3, 7, 2, 9, 5};\nint max = arr[0];\nfor(int i = 1; i < arr.length; i++) {\n    if(arr[i] > max) {\n        max = arr[i];\n    }\n}\nSystem.out.println(max);",
    hint: "Assume the first element is the largest, then compare with the rest.",
  },
  {
    id: "java_array_4",
    topicId: "java_array",
    question:
      "Find and print the smallest element in the array: {12, 4, 8, 3, 10}.",
    mathSolution: "The smallest number is 3.",
    codeSolution:
      "int[] arr = {12, 4, 8, 3, 10};\nint min = arr[0];\nfor(int i = 1; i < arr.length; i++) {\n    if(arr[i] < min) {\n        min = arr[i];\n    }\n}\nSystem.out.println(min);",
    hint: "Similar to finding the max, but look for values smaller than the current minimum.",
  },
  {
    id: "java_array_5",
    topicId: "java_array",
    question:
      "Print each element of the array {1, 2, 3, 4, 5} in reverse order.",
    mathSolution: "The output should be: 5, 4, 3, 2, 1",
    codeSolution:
      "int[] arr = {1, 2, 3, 4, 5};\nfor(int i = arr.length - 1; i >= 0; i--) {\n    System.out.println(arr[i]);\n}",
    hint: "Start your loop from the last index (length-1) and go down to 0.",
  },
  {
    id: "java_array_6",
    topicId: "java_array",
    question:
      "Count how many elements in the array {2, 4, 6, 8, 10} are greater than 5.",
    mathSolution: "Three elements (6, 8, 10) are greater than 5.",
    codeSolution:
      "int[] arr = {2, 4, 6, 8, 10};\nint count = 0;\nfor(int num : arr) {\n    if(num > 5) {\n        count++;\n    }\n}\nSystem.out.println(count);",
    hint: "Use an enhanced for loop to check each element and increment a counter.",
  },
  {
    id: "java_array_7",
    topicId: "java_array",
    question:
      "Check if the array {1, 3, 5, 7, 9} contains the number 5. Print true or false.",
    mathSolution: "The array contains 5, so output is true.",
    codeSolution:
      "int[] arr = {1, 3, 5, 7, 9};\nint target = 5;\nboolean found = false;\nfor(int num : arr) {\n    if(num == target) {\n        found = true;\n        break;\n    }\n}\nSystem.out.println(found);",
    hint: "Loop through the array and set a flag to true if you find the target.",
  },
  {
    id: "java_array_8",
    topicId: "java_array",
    question:
      "Create a new array where each element is twice the corresponding element from the original array {2, 4, 6}. Print the new array.",
    mathSolution: "Twice of {2, 4, 6} is {4, 8, 12}",
    codeSolution:
      "int[] original = {2, 4, 6};\nint[] doubled = new int[original.length];\nfor(int i = 0; i < original.length; i++) {\n    doubled[i] = original[i] * 2;\n}\nSystem.out.println(Arrays.toString(doubled));",
    hint: "Create a new array of the same length and fill it using a loop.",
  },
  {
    id: "java_array_9",
    topicId: "java_array",
    question:
      "Calculate the average of all elements in the array {10, 20, 30, 40, 50}.",
    mathSolution: "Sum = 150, Average = 150 / 5 = 30",
    codeSolution:
      "int[] arr = {10, 20, 30, 40, 50};\nint sum = 0;\nfor(int num : arr) {\n    sum += num;\n}\ndouble average = (double) sum / arr.length;\nSystem.out.println(average);",
    hint: "Calculate the sum first, then divide by the array length.",
  },
  {
    id: "java_array_10",
    topicId: "java_array",
    question:
      "Find the index of the first occurrence of the number 7 in the array {5, 7, 2, 7, 9}. Print the index (or -1 if not found).",
    mathSolution: "The number 7 first appears at index 1.",
    codeSolution:
      "int[] arr = {5, 7, 2, 7, 9};\nint target = 7;\nint index = -1;\nfor(int i = 0; i < arr.length; i++) {\n    if(arr[i] == target) {\n        index = i;\n        break;\n    }\n}\nSystem.out.println(index);",
    hint: "Loop through the array and return the index as soon as you find the target.",
  },
  {
    id: "java_array_11",
    topicId: "java_array",
    question:
      "Copy all elements from array {1, 2, 3, 4} into a new array and print the new array.",
    mathSolution: "The new array should be identical: {1, 2, 3, 4}",
    codeSolution:
      "int[] source = {1, 2, 3, 4};\nint[] destination = new int[source.length];\nfor(int i = 0; i < source.length; i++) {\n    destination[i] = source[i];\n}\nSystem.out.println(Arrays.toString(destination));",
    hint: "Iterate through the source array and assign each value to the corresponding position in the destination.",
  },
  {
    id: "java_array_12",
    topicId: "java_array",
    question:
      "Given array {1, 2, 3, 4, 5}, create a new array containing only the first three elements. Print the new array.",
    mathSolution: "The new array is {1, 2, 3}",
    codeSolution:
      "int[] original = {1, 2, 3, 4, 5};\nint[] newArr = new int[3];\nfor(int i = 0; i < 3; i++) {\n    newArr[i] = original[i];\n}\nSystem.out.println(Arrays.toString(newArr));",
    hint: "Create an array of size 3 and copy only the elements at indices 0, 1, and 2.",
  },
  {
    id: "java_array_13",
    topicId: "java_array",
    question:
      "Swap the first and last elements of the array {10, 20, 30, 40, 50}. Print the modified array.",
    mathSolution: "After swapping first and last: {50, 20, 30, 40, 10}",
    codeSolution:
      "int[] arr = {10, 20, 30, 40, 50};\nint temp = arr[0];\narr[0] = arr[arr.length - 1];\narr[arr.length - 1] = temp;\nSystem.out.println(Arrays.toString(arr));",
    hint: "Use a temporary variable to hold one value while swapping.",
  },
  {
    id: "java_array_14",
    topicId: "java_array",
    question:
      "Create an array of the first 5 even numbers starting from 2. Print the array.",
    mathSolution: "The first five even numbers are 2, 4, 6, 8, 10",
    codeSolution:
      "int[] evens = new int[5];\nfor(int i = 0; i < 5; i++) {\n    evens[i] = (i + 1) * 2;\n}\nSystem.out.println(Arrays.toString(evens));",
    hint: "Even numbers can be generated by multiplying (i+1) by 2.",
  },
  {
    id: "java_array_15",
    topicId: "java_array",
    question:
      "Count the number of even elements in the array {2, 3, 4, 5, 6, 7}.",
    mathSolution: "Even numbers are 2, 4, 6 → count = 3",
    codeSolution:
      "int[] arr = {2, 3, 4, 5, 6, 7};\nint count = 0;\nfor(int num : arr) {\n    if(num % 2 == 0) {\n        count++;\n    }\n}\nSystem.out.println(count);",
    hint: "Use the modulo operator (%) to check if a number is divisible by 2.",
  },
  {
    id: "java_array_16",
    topicId: "java_array",
    question:
      "Count the number of odd elements in the array {1, 2, 3, 4, 5, 6}.",
    mathSolution: "Odd numbers are 1, 3, 5 → count = 3",
    codeSolution:
      "int[] arr = {1, 2, 3, 4, 5, 6};\nint count = 0;\nfor(int num : arr) {\n    if(num % 2 != 0) {\n        count++;\n    }\n}\nSystem.out.println(count);",
    hint: "Numbers not divisible by 2 are odd.",
  },
  {
    id: "java_array_17",
    topicId: "java_array",
    question:
      "Create an array of 5 integers where each element is equal to its index squared (i²). Print the array.",
    mathSolution: "Index 0:0, 1:1, 2:4, 3:9, 4:16 → {0, 1, 4, 9, 16}",
    codeSolution:
      "int[] arr = new int[5];\nfor(int i = 0; i < arr.length; i++) {\n    arr[i] = i * i;\n}\nSystem.out.println(Arrays.toString(arr));",
    hint: "Multiply the index by itself to get the square.",
  },
  {
    id: "java_array_18",
    topicId: "java_array",
    question:
      "Find the difference between the largest and smallest elements in the array {8, 3, 12, 5, 9}.",
    mathSolution: "Largest = 12, Smallest = 3, Difference = 9",
    codeSolution:
      "int[] arr = {8, 3, 12, 5, 9};\nint max = arr[0];\nint min = arr[0];\nfor(int num : arr) {\n    if(num > max) max = num;\n    if(num < min) min = num;\n}\nSystem.out.println(max - min);",
    hint: "Find both the max and min in a single loop, then subtract.",
  },
  {
    id: "java_array_19",
    topicId: "java_array",
    question:
      "Print all elements that are greater than the average of the array {5, 10, 15, 20, 25}.",
    mathSolution: "Average = 15, Elements greater than 15 are 20 and 25",
    codeSolution:
      "int[] arr = {5, 10, 15, 20, 25};\nint sum = 0;\nfor(int num : arr) sum += num;\ndouble avg = (double) sum / arr.length;\nfor(int num : arr) {\n    if(num > avg) {\n        System.out.println(num);\n    }\n}",
    hint: "First calculate the average, then loop again to compare.",
  },
  {
    id: "java_array_20",
    topicId: "java_array",
    question:
      "Check if the array {1, 2, 3, 4, 5} is sorted in ascending order. Print true or false.",
    mathSolution:
      "Each element is greater than the previous, so it is sorted → true",
    codeSolution:
      "int[] arr = {1, 2, 3, 4, 5};\nboolean sorted = true;\nfor(int i = 0; i < arr.length - 1; i++) {\n    if(arr[i] > arr[i + 1]) {\n        sorted = false;\n        break;\n    }\n}\nSystem.out.println(sorted);",
    hint: "Compare each element with the next one; if any is greater than the next, the array is not sorted.",
  },
  {
    id: "java_array_21",
    topicId: "java_array",
    question:
      "Given array {1, 2, 3, 4, 5}, shift all elements one position to the right. The last element should wrap around to the first position. Print the resulting array.",
    mathSolution: "After right shift: {5, 1, 2, 3, 4}",
    codeSolution:
      "int[] arr = {1, 2, 3, 4, 5};\nint last = arr[arr.length - 1];\nfor(int i = arr.length - 1; i > 0; i--) {\n    arr[i] = arr[i - 1];\n}\narr[0] = last;\nSystem.out.println(Arrays.toString(arr));",
    hint: "Save the last element, then move each element to the right starting from the end.",
  },
  {
    id: "java_array_22",
    topicId: "java_array",
    question:
      "Given array {1, 2, 3, 4, 5}, shift all elements one position to the left. The first element should wrap around to the last position. Print the resulting array.",
    mathSolution: "After left shift: {2, 3, 4, 5, 1}",
    codeSolution:
      "int[] arr = {1, 2, 3, 4, 5};\nint first = arr[0];\nfor(int i = 0; i < arr.length - 1; i++) {\n    arr[i] = arr[i + 1];\n}\narr[arr.length - 1] = first;\nSystem.out.println(Arrays.toString(arr));",
    hint: "Save the first element, then move each element to the left starting from the beginning.",
  },
  {
    id: "java_array_23",
    topicId: "java_array",
    question:
      "Merge two arrays {1, 3, 5} and {2, 4, 6} into a single array. Print the merged array.",
    mathSolution: "Merged array: {1, 3, 5, 2, 4, 6}",
    codeSolution:
      "int[] arr1 = {1, 3, 5};\nint[] arr2 = {2, 4, 6};\nint[] merged = new int[arr1.length + arr2.length];\nfor(int i = 0; i < arr1.length; i++) {\n    merged[i] = arr1[i];\n}\nfor(int i = 0; i < arr2.length; i++) {\n    merged[arr1.length + i] = arr2[i];\n}\nSystem.out.println(Arrays.toString(merged));",
    hint: "Create a new array with combined length, then copy both arrays sequentially.",
  },
  {
    id: "java_array_24",
    topicId: "java_array",
    question:
      "Given array {1, 2, 3, 4, 5}, print only the elements at even indices (0, 2, 4).",
    mathSolution: "Elements at indices 0, 2, 4 are: 1, 3, 5",
    codeSolution:
      "int[] arr = {1, 2, 3, 4, 5};\nfor(int i = 0; i < arr.length; i += 2) {\n    System.out.println(arr[i]);\n}",
    hint: "Increment your loop variable by 2 instead of 1.",
  },
  {
    id: "java_array_25",
    topicId: "java_array",
    question:
      "Given array {1, 2, 3, 4, 5}, print only the elements at odd indices (1, 3).",
    mathSolution: "Elements at indices 1 and 3 are: 2, 4",
    codeSolution:
      "int[] arr = {1, 2, 3, 4, 5};\nfor(int i = 1; i < arr.length; i += 2) {\n    System.out.println(arr[i]);\n}",
    hint: "Start your loop at index 1 and increment by 2.",
  },
  {
    id: "java_array_26",
    topicId: "java_array",
    question:
      "Given array {10, 20, 30, 40, 50}, replace every element at an odd index with 0. Print the modified array.",
    mathSolution: "Indices 1 and 3 become 0: {10, 0, 30, 0, 50}",
    codeSolution:
      "int[] arr = {10, 20, 30, 40, 50};\nfor(int i = 1; i < arr.length; i += 2) {\n    arr[i] = 0;\n}\nSystem.out.println(Arrays.toString(arr));",
    hint: "Loop through the odd indices and assign 0.",
  },
  {
    id: "java_array_27",
    topicId: "java_array",
    question:
      "Find the second largest element in the array {12, 35, 1, 10, 34, 1}.",
    mathSolution: "Largest is 35, second largest is 34",
    codeSolution:
      "int[] arr = {12, 35, 1, 10, 34, 1};\nint largest = Integer.MIN_VALUE;\nint secondLargest = Integer.MIN_VALUE;\nfor(int num : arr) {\n    if(num > largest) {\n        secondLargest = largest;\n        largest = num;\n    } else if(num > secondLargest && num != largest) {\n        secondLargest = num;\n    }\n}\nSystem.out.println(secondLargest);",
    hint: "Keep track of both the largest and second largest as you iterate.",
  },
  {
    id: "java_array_28",
    topicId: "java_array",
    question:
      "Remove duplicate elements from the sorted array {1, 1, 2, 2, 3, 4, 4, 5} and print the array without duplicates.",
    mathSolution: "Unique elements: {1, 2, 3, 4, 5}",
    codeSolution:
      "int[] arr = {1, 1, 2, 2, 3, 4, 4, 5};\nint[] temp = new int[arr.length];\nint j = 0;\nfor(int i = 0; i < arr.length - 1; i++) {\n    if(arr[i] != arr[i + 1]) {\n        temp[j++] = arr[i];\n    }\n}\ntemp[j++] = arr[arr.length - 1];\nint[] result = Arrays.copyOf(temp, j);\nSystem.out.println(Arrays.toString(result));",
    hint: "Compare each element with the next; if different, add to a temporary array.",
  },
  {
    id: "java_array_29",
    topicId: "java_array",
    question:
      "Given array {1, 2, 3, 4, 5}, check if it contains any duplicate elements. Print true or false.",
    mathSolution: "All elements are unique, so false",
    codeSolution:
      "int[] arr = {1, 2, 3, 4, 5};\nboolean hasDuplicate = false;\nfor(int i = 0; i < arr.length; i++) {\n    for(int j = i + 1; j < arr.length; j++) {\n        if(arr[i] == arr[j]) {\n            hasDuplicate = true;\n            break;\n        }\n    }\n}\nSystem.out.println(hasDuplicate);",
    hint: "Use nested loops to compare each element with every other element.",
  },
  {
    id: "java_array_30",
    topicId: "java_array",
    question:
      "Reverse the array {1, 2, 3, 4, 5} in-place (without creating a new array). Print the reversed array.",
    mathSolution: "Reversed array: {5, 4, 3, 2, 1}",
    codeSolution:
      "int[] arr = {1, 2, 3, 4, 5};\nfor(int i = 0; i < arr.length / 2; i++) {\n    int temp = arr[i];\n    arr[i] = arr[arr.length - 1 - i];\n    arr[arr.length - 1 - i] = temp;\n}\nSystem.out.println(Arrays.toString(arr));",
    hint: "Swap the first with the last, the second with the second last, and so on.",
  },
  {
    id: "java_array_31",
    topicId: "java_array",
    question:
      "Given array {3, 7, 1, 9, 4}, find the index of the largest element. Print the index.",
    mathSolution: "Largest element is 9 at index 3",
    codeSolution:
      "int[] arr = {3, 7, 1, 9, 4};\nint maxIndex = 0;\nfor(int i = 1; i < arr.length; i++) {\n    if(arr[i] > arr[maxIndex]) {\n        maxIndex = i;\n    }\n}\nSystem.out.println(maxIndex);",
    hint: "Keep track of the index where the maximum occurs, not just the maximum value.",
  },
  {
    id: "java_array_32",
    topicId: "java_array",
    question:
      "Given two arrays {1, 2, 3} and {1, 2, 3}, check if they are equal (same length and same elements in same order). Print true or false.",
    mathSolution: "Both arrays are identical, so true",
    codeSolution:
      "int[] arr1 = {1, 2, 3};\nint[] arr2 = {1, 2, 3};\nboolean equal = arr1.length == arr2.length;\nif(equal) {\n    for(int i = 0; i < arr1.length; i++) {\n        if(arr1[i] != arr2[i]) {\n            equal = false;\n            break;\n        }\n    }\n}\nSystem.out.println(equal);",
    hint: "First check lengths, then compare each corresponding element.",
  },
  {
    id: "java_array_33",
    topicId: "java_array",
    question:
      "Create an array containing the common elements between {1, 2, 3, 4} and {3, 4, 5, 6}. Print the resulting array.",
    mathSolution: "Common elements: {3, 4}",
    codeSolution:
      "int[] arr1 = {1, 2, 3, 4};\nint[] arr2 = {3, 4, 5, 6};\nint[] temp = new int[Math.min(arr1.length, arr2.length)];\nint index = 0;\nfor(int i = 0; i < arr1.length; i++) {\n    for(int j = 0; j < arr2.length; j++) {\n        if(arr1[i] == arr2[j]) {\n            temp[index++] = arr1[i];\n            break;\n        }\n    }\n}\nint[] common = Arrays.copyOf(temp, index);\nSystem.out.println(Arrays.toString(common));",
    hint: "Use nested loops to find elements present in both arrays.",
  },
  {
    id: "java_array_34",
    topicId: "java_array",
    question: "Find the frequency of element 3 in array {1, 3, 3, 2, 3, 4}.",
    mathSolution: "3 appears 3 times.",
    codeSolution:
      "int[] arr = {1, 3, 3, 2, 3, 4};\nint count = 0;\nfor(int num : arr){\n if(num == 3) count++;\n}\nSystem.out.println(count);",
    hint: "Loop and count when element equals target.",
  },
  {
    id: "java_array_35",
    topicId: "java_array",
    question:
      "Find the sum of elements at even indices in {10, 20, 30, 40, 50}.",
    mathSolution: "Indices 0,2,4 → 10+30+50 = 90",
    codeSolution:
      "int[] arr = {10,20,30,40,50};\nint sum=0;\nfor(int i=0;i<arr.length;i+=2){\n sum+=arr[i];\n}\nSystem.out.println(sum);",
    hint: "Increment loop by 2.",
  },
  {
    id: "java_array_36",
    topicId: "java_array",
    question: "Multiply all elements in array {1,2,3,4}.",
    mathSolution: "1×2×3×4 = 24",
    codeSolution:
      "int[] arr={1,2,3,4};\nint product=1;\nfor(int num:arr){\n product*=num;\n}\nSystem.out.println(product);",
    hint: "Initialize product with 1.",
  },
  {
    id: "java_array_37",
    topicId: "java_array",
    question: "Count negative numbers in {-1, 2, -3, 4, -5}.",
    mathSolution: "There are 3 negative numbers.",
    codeSolution:
      "int[] arr={-1,2,-3,4,-5};\nint count=0;\nfor(int num:arr){\n if(num<0) count++;\n}\nSystem.out.println(count);",
    hint: "Check num < 0.",
  },
  {
    id: "java_array_38",
    topicId: "java_array",
    question: "Replace all negative numbers in {-1,2,-3,4} with 0.",
    mathSolution: "Result → {0,2,0,4}",
    codeSolution:
      "int[] arr={-1,2,-3,4};\nfor(int i=0;i<arr.length;i++){\n if(arr[i]<0) arr[i]=0;\n}\nSystem.out.println(Arrays.toString(arr));",
    hint: "Modify array in-place.",
  },
  {
    id: "java_array_39",
    topicId: "java_array",
    question: "Find the middle element of array {10,20,30,40,50}.",
    mathSolution: "Middle index = 2 → 30",
    codeSolution:
      "int[] arr={10,20,30,40,50};\nSystem.out.println(arr[arr.length/2]);",
    hint: "Middle index = length/2.",
  },
  {
    id: "java_array_40",
    topicId: "java_array",
    question: "Check if array {2,4,6,8} contains only even numbers.",
    mathSolution: "All are even → true",
    codeSolution:
      "int[] arr={2,4,6,8};\nboolean allEven=true;\nfor(int num:arr){\n if(num%2!=0){\n  allEven=false;\n  break;\n }\n}\nSystem.out.println(allEven);",
    hint: "Break loop if odd found.",
  },
  {
    id: "java_array_41",
    topicId: "java_array",
    question: "Find total number of elements divisible by 3 in {3,6,7,9,10}.",
    mathSolution: "3,6,9 → count = 3",
    codeSolution:
      "int[] arr={3,6,7,9,10};\nint count=0;\nfor(int num:arr){\n if(num%3==0) count++;\n}\nSystem.out.println(count);",
    hint: "Use modulo operator.",
  },
  {
    id: "java_array_42",
    topicId: "java_array",
    question: "Print array elements greater than 25 in {10,30,20,40,50}.",
    mathSolution: "30, 40, 50",
    codeSolution:
      "int[] arr={10,30,20,40,50};\nfor(int num:arr){\n if(num>25) System.out.println(num);\n}",
    hint: "Use condition inside loop.",
  },
  {
    id: "java_array_43",
    topicId: "java_array",
    question: "Find sum of first and last element in {5,10,15,20}.",
    mathSolution: "5 + 20 = 25",
    codeSolution:
      "int[] arr={5,10,15,20};\nSystem.out.println(arr[0]+arr[arr.length-1]);",
    hint: "First index 0, last index length-1.",
  },
  {
    id: "java_array_44",
    topicId: "java_array",
    question: "Find the smallest even number in {7,4,9,2,6}.",
    mathSolution: "Even numbers 4,2,6 → smallest = 2",
    codeSolution:
      "int[] arr={7,4,9,2,6};\nint min=Integer.MAX_VALUE;\nfor(int num:arr){\n if(num%2==0 && num<min) min=num;\n}\nSystem.out.println(min);",
    hint: "Check even and compare with min.",
  },
  {
    id: "java_array_45",
    topicId: "java_array",
    question: "Find the maximum even number in {3,8,5,12,7}.",
    mathSolution: "Even numbers 8,12 → max = 12",
    codeSolution:
      "int[] arr={3,8,5,12,7};\nint max=Integer.MIN_VALUE;\nfor(int num:arr){\n if(num%2==0 && num>max) max=num;\n}\nSystem.out.println(max);",
    hint: "Check even and compare with max.",
  },
  {
    id: "java_array_46",
    topicId: "java_array",
    question: "Count numbers greater than 50 in {45,60,75,30,90}.",
    mathSolution: "60,75,90 → count = 3",
    codeSolution:
      "int[] arr={45,60,75,30,90};\nint count=0;\nfor(int num:arr){\n if(num>50) count++;\n}\nSystem.out.println(count);",
    hint: "Simple conditional counting.",
  },
  {
    id: "java_array_47",
    topicId: "java_array",
    question: "Square each element of {1,2,3,4} and print result.",
    mathSolution: "{1,4,9,16}",
    codeSolution:
      "int[] arr={1,2,3,4};\nfor(int i=0;i<arr.length;i++){\n arr[i]=arr[i]*arr[i];\n}\nSystem.out.println(Arrays.toString(arr));",
    hint: "Multiply element by itself.",
  },
  {
    id: "java_array_48",
    topicId: "java_array",
    question: "Check if array {1,2,3,2,1} is palindrome.",
    mathSolution: "Same forward & backward → true",
    codeSolution:
      "int[] arr={1,2,3,2,1};\nboolean palindrome=true;\nfor(int i=0;i<arr.length/2;i++){\n if(arr[i]!=arr[arr.length-1-i]){\n  palindrome=false;\n  break;\n }\n}\nSystem.out.println(palindrome);",
    hint: "Compare first with last.",
  },
  {
    id: "java_array_49",
    topicId: "java_array",
    question: "Find second smallest element in {5,1,4,2,3}.",
    mathSolution: "Smallest=1, second=2",
    codeSolution:
      "int[] arr={5,1,4,2,3};\nint min=Integer.MAX_VALUE, second=Integer.MAX_VALUE;\nfor(int num:arr){\n if(num<min){\n  second=min;\n  min=num;\n }else if(num<second && num!=min){\n  second=num;\n }\n}\nSystem.out.println(second);",
    hint: "Track both smallest and second smallest.",
  },
  {
    id: "java_array_50",
    topicId: "java_array",
    question: "Rotate array {1,2,3,4,5} by 2 positions to right.",
    mathSolution: "After 2 rotations → {4,5,1,2,3}",
    codeSolution:
      "int[] arr={1,2,3,4,5};\nfor(int k=0;k<2;k++){\n int last=arr[arr.length-1];\n for(int i=arr.length-1;i>0;i--){\n  arr[i]=arr[i-1];\n }\n arr[0]=last;\n}\nSystem.out.println(Arrays.toString(arr));",
    hint: "Perform right shift twice.",
  },
);
