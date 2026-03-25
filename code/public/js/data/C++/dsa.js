QuizData.questions.push(
  {
    id: "dsa_001",
    topicId: "cpp_dsa",
    question: "Reverse an array in place.",
    mathSolution: "Swap first with last, second with second last, etc.",
    codeSolution:
      "vector<int> arr = {1, 2, 3, 4, 5};\nint left = 0, right = arr.size() - 1;\nwhile(left < right) {\n    swap(arr[left], arr[right]);\n    left++;\n    right--;\n}",
    hint: "Use two pointers approach",
  },
  {
    id: "dsa_002",
    topicId: "cpp_dsa",
    question: "Find the largest element in an array.",
    mathSolution: "Traverse array keeping track of maximum",
    codeSolution:
      'vector<int> arr = {3, 7, 2, 9, 5};\nint max = arr[0];\nfor(int i=1; i<arr.size(); i++) {\n    if(arr[i] > max) max = arr[i];\n}\ncout << "Largest: " << max;',
    hint: "Initialize max with first element",
  },
  {
    id: "dsa_003",
    topicId: "cpp_dsa",
    question: "Find the smallest element in an array.",
    mathSolution: "Traverse array keeping track of minimum",
    codeSolution:
      'vector<int> arr = {3, 7, 2, 9, 5};\nint min = arr[0];\nfor(int i=1; i<arr.size(); i++) {\n    if(arr[i] < min) min = arr[i];\n}\ncout << "Smallest: " << min;',
    hint: "Initialize min with first element",
  },
  {
    id: "dsa_004",
    topicId: "cpp_dsa",
    question: "Find the second largest element in an array.",
    mathSolution: "Track both largest and second largest while traversing",
    codeSolution:
      "vector<int> arr = {12, 35, 1, 10, 34, 1};\nint largest = INT_MIN, secondLargest = INT_MIN;\nfor(int num : arr) {\n    if(num > largest) {\n        secondLargest = largest;\n        largest = num;\n    }\n    else if(num > secondLargest && num != largest) {\n        secondLargest = num;\n    }\n}",
    hint: "Update both largest and second largest appropriately",
  },
  {
    id: "dsa_005",
    topicId: "cpp_dsa",
    question: "Check if array is sorted in non-decreasing order.",
    mathSolution: "Compare each element with next element",
    codeSolution:
      "vector<int> arr = {1, 2, 2, 3, 4};\nbool sorted = true;\nfor(int i=0; i<arr.size()-1; i++) {\n    if(arr[i] > arr[i+1]) {\n        sorted = false;\n        break;\n    }\n}",
    hint: "If any element is greater than next, array is not sorted",
  },
  {
    id: "dsa_006",
    topicId: "cpp_dsa",
    question: "Remove duplicates from sorted array.",
    mathSolution:
      "Use two pointers - one for unique elements, one for traversal",
    codeSolution:
      "vector<int> arr = {1, 1, 2, 2, 2, 3, 4, 4, 5};\nint j = 0;\nfor(int i=0; i<arr.size(); i++) {\n    if(i==0 || arr[i] != arr[i-1]) {\n        arr[j++] = arr[i];\n    }\n}\narr.resize(j);",
    hint: "Keep pointer for position of next unique element",
  },
  {
    id: "dsa_007",
    topicId: "cpp_dsa",
    question: "Move all zeros to end of array.",
    mathSolution:
      "Use two pointers - one for non-zero elements, one for traversal",
    codeSolution:
      "vector<int> arr = {0, 1, 0, 3, 12};\nint nonZero = 0;\nfor(int i=0; i<arr.size(); i++) {\n    if(arr[i] != 0) {\n        swap(arr[i], arr[nonZero++]);\n    }\n}",
    hint: "Swap non-zero elements with zero elements",
  },
  {
    id: "dsa_008",
    topicId: "cpp_dsa",
    question: "Rotate array left by k positions.",
    mathSolution:
      "Reverse first k elements, reverse remaining, reverse whole array",
    codeSolution:
      "vector<int> arr = {1, 2, 3, 4, 5, 6, 7};\nint k = 2;\nreverse(arr.begin(), arr.begin()+k);\nreverse(arr.begin()+k, arr.end());\nreverse(arr.begin(), arr.end());",
    hint: "Three-step reversal technique",
  },
  {
    id: "dsa_009",
    topicId: "cpp_dsa",
    question: "Rotate array right by k positions.",
    mathSolution: "Reverse whole array, reverse first k, reverse remaining",
    codeSolution:
      "vector<int> arr = {1, 2, 3, 4, 5, 6, 7};\nint k = 3;\nk = k % arr.size();\nreverse(arr.begin(), arr.end());\nreverse(arr.begin(), arr.begin()+k);\nreverse(arr.begin()+k, arr.end());",
    hint: "Handle cases where k > array size",
  },
  {
    id: "dsa_010",
    topicId: "cpp_dsa",
    question: "Find missing number in array from 1 to n.",
    mathSolution: "Sum of first n numbers minus sum of array elements",
    codeSolution:
      "vector<int> arr = {1, 2, 4, 5, 6};\nint n = 6;\nint total = n*(n+1)/2;\nint sum = 0;\nfor(int num : arr) sum += num;\nint missing = total - sum;",
    hint: "Use mathematical formula for sum of natural numbers",
  },
  {
    id: "dsa_011",
    topicId: "cpp_dsa",
    question: "Find duplicate in array of n+1 integers (1 to n).",
    mathSolution: "Use Floyd's cycle detection algorithm",
    codeSolution:
      "vector<int> arr = {1, 3, 4, 2, 2};\nint slow = arr[0], fast = arr[0];\ndo {\n    slow = arr[slow];\n    fast = arr[arr[fast]];\n} while(slow != fast);\nfast = arr[0];\nwhile(slow != fast) {\n    slow = arr[slow];\n    fast = arr[fast];\n}\nint duplicate = slow;",
    hint: "Treat array as linked list with values as next pointers",
  },
  {
    id: "dsa_012",
    topicId: "cpp_dsa",
    question: "Find all duplicates in array (1 to n, some appear twice).",
    mathSolution: "Use array indices as hash, mark visited by making negative",
    codeSolution:
      "vector<int> arr = {4, 3, 2, 7, 8, 2, 3, 1};\nvector<int> duplicates;\nfor(int i=0; i<arr.size(); i++) {\n    int index = abs(arr[i]) - 1;\n    if(arr[index] < 0) duplicates.push_back(abs(arr[i]));\n    else arr[index] = -arr[index];\n}",
    hint: "Use sign to mark visited numbers",
  },
  {
    id: "dsa_013",
    topicId: "cpp_dsa",
    question: "Find first repeating element in array.",
    mathSolution: "Use hash set to store seen elements",
    codeSolution:
      "vector<int> arr = {10, 5, 3, 4, 3, 5, 6};\nunordered_set<int> seen;\nint firstRepeat = -1;\nfor(int i=arr.size()-1; i>=0; i--) {\n    if(seen.find(arr[i]) != seen.end()) firstRepeat = arr[i];\n    else seen.insert(arr[i]);\n}",
    hint: "Traverse from right to left for first occurrence",
  },
  {
    id: "dsa_014",
    topicId: "cpp_dsa",
    question: "Find first non-repeating element in array.",
    mathSolution: "Count frequencies, then find first with count 1",
    codeSolution:
      'vector<int> arr = {4, 5, 1, 2, 0, 4};\nunordered_map<int, int> freq;\nfor(int num : arr) freq[num]++;\nfor(int num : arr) {\n    if(freq[num] == 1) {\n        cout << "First non-repeating: " << num;\n        break;\n    }\n}',
    hint: "Store frequencies in hash map",
  },
  {
    id: "dsa_015",
    topicId: "cpp_dsa",
    question: "Find subarray with given sum (non-negative numbers).",
    mathSolution: "Sliding window technique",
    codeSolution:
      'vector<int> arr = {1, 2, 3, 7, 5};\nint target = 12;\nint start = 0, sum = 0;\nfor(int end=0; end<arr.size(); end++) {\n    sum += arr[end];\n    while(sum > target && start <= end) {\n        sum -= arr[start++];\n    }\n    if(sum == target) {\n        cout << "Found from " << start << " to " << end;\n        break;\n    }\n}',
    hint: "Expand window by adding, shrink by removing from left",
  },
  {
    id: "dsa_016",
    topicId: "cpp_dsa",
    question: "Find subarray with given sum (handles negative numbers).",
    mathSolution: "Use prefix sum with hash map",
    codeSolution:
      'vector<int> arr = {10, 2, -2, -20, 10};\nint target = -10;\nunordered_map<int, int> prefixSum;\nint sum = 0;\nfor(int i=0; i<arr.size(); i++) {\n    sum += arr[i];\n    if(sum == target) cout << "Found from 0 to " << i;\n    if(prefixSum.find(sum - target) != prefixSum.end()) {\n        cout << "Found from " << prefixSum[sum-target]+1 << " to " << i;\n    }\n    prefixSum[sum] = i;\n}',
    hint: "sum[j] - sum[i] = target means subarray i+1 to j",
  },
  {
    id: "dsa_017",
    topicId: "cpp_dsa",
    question: "Find maximum subarray sum (Kadane's Algorithm).",
    mathSolution: "Keep running sum, reset if negative, track maximum",
    codeSolution:
      "vector<int> arr = {-2, -3, 4, -1, -2, 1, 5, -3};\nint maxSoFar = arr[0], maxEnding = arr[0];\nfor(int i=1; i<arr.size(); i++) {\n    maxEnding = max(arr[i], maxEnding + arr[i]);\n    maxSoFar = max(maxSoFar, maxEnding);\n}",
    hint: "If current element alone is better than sum with previous, start new subarray",
  },
  {
    id: "dsa_018",
    topicId: "cpp_dsa",
    question: "Find maximum product subarray.",
    mathSolution: "Track both max and min product ending at each index",
    codeSolution:
      "vector<int> arr = {6, -3, -10, 0, 2};\nint maxProd = arr[0], minProd = arr[0], result = arr[0];\nfor(int i=1; i<arr.size(); i++) {\n    if(arr[i] < 0) swap(maxProd, minProd);\n    maxProd = max(arr[i], maxProd * arr[i]);\n    minProd = min(arr[i], minProd * arr[i]);\n    result = max(result, maxProd);\n}",
    hint: "Negative numbers can become positive with another negative",
  },
  {
    id: "dsa_019",
    topicId: "cpp_dsa",
    question: "Find longest increasing subarray.",
    mathSolution: "Track current length and maximum length",
    codeSolution:
      "vector<int> arr = {5, 6, 3, 5, 7, 8, 9, 1, 2};\nint maxLen = 1, currLen = 1;\nfor(int i=1; i<arr.size(); i++) {\n    if(arr[i] > arr[i-1]) currLen++;\n    else currLen = 1;\n    maxLen = max(maxLen, currLen);\n}",
    hint: "Reset count when sequence breaks",
  },
  {
    id: "dsa_020",
    topicId: "cpp_dsa",
    question: "Find longest increasing subsequence length.",
    mathSolution: "Binary search with patience sorting",
    codeSolution:
      "vector<int> arr = {10, 9, 2, 5, 3, 7, 101, 18};\nvector<int> tails;\nfor(int num : arr) {\n    auto it = lower_bound(tails.begin(), tails.end(), num);\n    if(it == tails.end()) tails.push_back(num);\n    else *it = num;\n}\nint lisLength = tails.size();",
    hint: "Maintain tails array where tails[i] is smallest ending of increasing sequence of length i+1",
  },
  {
    id: "dsa_021",
    topicId: "cpp_dsa",
    question: "Find majority element (appears more than n/2 times).",
    mathSolution: "Moore's Voting Algorithm",
    codeSolution:
      'vector<int> arr = {3, 3, 4, 2, 4, 4, 2, 4, 4};\nint candidate = arr[0], count = 1;\nfor(int i=1; i<arr.size(); i++) {\n    if(arr[i] == candidate) count++;\n    else count--;\n    if(count == 0) {\n        candidate = arr[i];\n        count = 1;\n    }\n}\ncount = 0;\nfor(int num : arr) if(num == candidate) count++;\nif(count > arr.size()/2) cout << "Majority: " << candidate;',
    hint: "Pair different elements to cancel each other",
  },
  {
    id: "dsa_022",
    topicId: "cpp_dsa",
    question: "Find majority element (appears more than n/3 times).",
    mathSolution: "Extended Moore's Voting for two candidates",
    codeSolution:
      'vector<int> arr = {1, 2, 3, 1, 1};\nint candidate1 = 0, candidate2 = 0, count1 = 0, count2 = 0;\nfor(int num : arr) {\n    if(num == candidate1) count1++;\n    else if(num == candidate2) count2++;\n    else if(count1 == 0) { candidate1 = num; count1 = 1; }\n    else if(count2 == 0) { candidate2 = num; count2 = 1; }\n    else { count1--; count2--; }\n}\ncount1 = count2 = 0;\nfor(int num : arr) {\n    if(num == candidate1) count1++;\n    else if(num == candidate2) count2++;\n}\nif(count1 > arr.size()/3) cout << candidate1 << " ";\nif(count2 > arr.size()/3) cout << candidate2;',
    hint: "At most two elements can appear more than n/3 times",
  },
  {
    id: "dsa_023",
    topicId: "cpp_dsa",
    question: "Find element that appears once when others appear thrice.",
    mathSolution: "Count bits at each position, modulo 3",
    codeSolution:
      "vector<int> arr = {2, 2, 3, 2};\nint ones = 0, twos = 0;\nfor(int num : arr) {\n    ones = (ones ^ num) & ~twos;\n    twos = (twos ^ num) & ~ones;\n}\nint result = ones;",
    hint: "Use bit manipulation to count occurrences modulo 3",
  },
  {
    id: "dsa_024",
    topicId: "cpp_dsa",
    question: "Find element that appears once when others appear twice.",
    mathSolution: "XOR all elements",
    codeSolution:
      'vector<int> arr = {4, 1, 2, 1, 2};\nint result = 0;\nfor(int num : arr) result ^= num;\ncout << "Single number: " << result;',
    hint: "a ^ a = 0, a ^ 0 = a",
  },
  {
    id: "dsa_025",
    topicId: "cpp_dsa",
    question: "Find pair with given sum in array.",
    mathSolution: "Use hash set to store complements",
    codeSolution:
      'vector<int> arr = {1, 4, 45, 6, 10, 8};\nint target = 16;\nunordered_set<int> s;\nfor(int num : arr) {\n    int complement = target - num;\n    if(s.find(complement) != s.end()) {\n        cout << "Pair found: " << complement << ", " << num;\n        break;\n    }\n    s.insert(num);\n}',
    hint: "Check if complement exists before inserting current element",
  },
  {
    id: "dsa_026",
    topicId: "cpp_dsa",
    question: "Count pairs with given sum in array.",
    mathSolution: "Use hash map to count frequencies",
    codeSolution:
      "vector<int> arr = {1, 5, 7, -1, 5};\nint target = 6;\nunordered_map<int, int> freq;\nint count = 0;\nfor(int num : arr) {\n    int complement = target - num;\n    if(freq.find(complement) != freq.end()) count += freq[complement];\n    freq[num]++;\n}",
    hint: "Each element pairs with all previous complements",
  },
  {
    id: "dsa_027",
    topicId: "cpp_dsa",
    question: "Find triplet with given sum in array.",
    mathSolution: "Sort array, fix one element, use two pointers for remaining",
    codeSolution:
      'vector<int> arr = {1, 4, 45, 6, 10, 8};\nint target = 22;\nsort(arr.begin(), arr.end());\nfor(int i=0; i<arr.size()-2; i++) {\n    int left = i+1, right = arr.size()-1;\n    while(left < right) {\n        int sum = arr[i] + arr[left] + arr[right];\n        if(sum == target) {\n            cout << "Triplet found";\n            return;\n        }\n        else if(sum < target) left++;\n        else right--;\n    }\n}',
    hint: "Skip duplicates for optimization",
  },
  {
    id: "dsa_028",
    topicId: "cpp_dsa",
    question: "Find triplet with sum closest to given target.",
    mathSolution: "Sort array, fix one element, use two pointers",
    codeSolution:
      "vector<int> arr = {-1, 2, 1, -4};\nint target = 1;\nsort(arr.begin(), arr.end());\nint closestSum = arr[0] + arr[1] + arr[2];\nfor(int i=0; i<arr.size()-2; i++) {\n    int left = i+1, right = arr.size()-1;\n    while(left < right) {\n        int sum = arr[i] + arr[left] + arr[right];\n        if(abs(target - sum) < abs(target - closestSum)) closestSum = sum;\n        if(sum < target) left++;\n        else right--;\n    }\n}",
    hint: "Track closest sum and update when better found",
  },
  {
    id: "dsa_029",
    topicId: "cpp_dsa",
    question: "Find four elements that sum to given target.",
    mathSolution: "Sort array, fix two elements, use two pointers",
    codeSolution:
      'vector<int> arr = {10, 2, 3, 4, 5, 7, 8};\nint target = 23;\nsort(arr.begin(), arr.end());\nint n = arr.size();\nfor(int i=0; i<n-3; i++) {\n    for(int j=i+1; j<n-2; j++) {\n        int left = j+1, right = n-1;\n        while(left < right) {\n            int sum = arr[i] + arr[j] + arr[left] + arr[right];\n            if(sum == target) {\n                cout << "Found";\n                return;\n            }\n            else if(sum < target) left++;\n            else right--;\n        }\n    }\n}',
    hint: "Use nested loops with two-pointer technique",
  },
  {
    id: "dsa_030",
    topicId: "cpp_dsa",
    question: "Find subarray with zero sum.",
    mathSolution: "Use prefix sum and hash set",
    codeSolution:
      'vector<int> arr = {4, 2, -3, 1, 6};\nunordered_set<int> prefixSums;\nint sum = 0;\nfor(int num : arr) {\n    sum += num;\n    if(sum == 0 || prefixSums.find(sum) != prefixSums.end()) {\n        cout << "Found subarray with zero sum";\n        break;\n    }\n    prefixSums.insert(sum);\n}',
    hint: "If prefix sum repeats, subarray sum is zero",
  },
  {
    id: "dsa_031",
    topicId: "cpp_dsa",
    question: "Find subarray with sum divisible by k.",
    mathSolution: "Use prefix sum modulo k and hash map",
    codeSolution:
      'vector<int> arr = {2, 7, 6, 1, 4, 5};\nint k = 3;\nunordered_map<int, int> modMap;\nmodMap[0] = -1;\nint sum = 0;\nfor(int i=0; i<arr.size(); i++) {\n    sum += arr[i];\n    int mod = (sum % k + k) % k;\n    if(modMap.find(mod) != modMap.end()) {\n        cout << "Found from " << modMap[mod]+1 << " to " << i;\n        break;\n    }\n    modMap[mod] = i;\n}',
    hint: "Handle negative modulo correctly",
  },
  {
    id: "dsa_032",
    topicId: "cpp_dsa",
    question: "Find longest subarray with sum k.",
    mathSolution: "Use prefix sum with hash map",
    codeSolution:
      "vector<int> arr = {10, 5, 2, 7, 1, 9};\nint k = 15;\nunordered_map<int, int> prefixMap;\nint sum = 0, maxLen = 0;\nfor(int i=0; i<arr.size(); i++) {\n    sum += arr[i];\n    if(sum == k) maxLen = i+1;\n    if(prefixMap.find(sum - k) != prefixMap.end()) {\n        maxLen = max(maxLen, i - prefixMap[sum - k]);\n    }\n    if(prefixMap.find(sum) == prefixMap.end()) prefixMap[sum] = i;\n}",
    hint: "Store first occurrence of each prefix sum",
  },
  {
    id: "dsa_033",
    topicId: "cpp_dsa",
    question: "Find longest subarray with equal 0s and 1s.",
    mathSolution: "Treat 0 as -1, find longest subarray with sum 0",
    codeSolution:
      "vector<int> arr = {1, 0, 1, 1, 1, 0, 0};\nunordered_map<int, int> prefixMap;\nint sum = 0, maxLen = 0;\nprefixMap[0] = -1;\nfor(int i=0; i<arr.size(); i++) {\n    sum += (arr[i] == 1) ? 1 : -1;\n    if(prefixMap.find(sum) != prefixMap.end()) {\n        maxLen = max(maxLen, i - prefixMap[sum]);\n    }\n    else prefixMap[sum] = i;\n}",
    hint: "Convert problem to finding subarray with sum zero",
  },
  {
    id: "dsa_034",
    topicId: "cpp_dsa",
    question: "Merge two sorted arrays without extra space.",
    mathSolution: "Start from end and place larger elements",
    codeSolution:
      "vector<int> arr1 = {1, 3, 5, 7, 0, 0, 0};\nvector<int> arr2 = {2, 4, 6};\nint m = 4, n = 3;\nint i = m-1, j = n-1, k = m+n-1;\nwhile(j >= 0) {\n    if(i >= 0 && arr1[i] > arr2[j]) arr1[k--] = arr1[i--];\n    else arr1[k--] = arr2[j--];\n}",
    hint: "Merge from the end to avoid overwriting",
  },
  {
    id: "dsa_035",
    topicId: "cpp_dsa",
    question: "Intersection of two sorted arrays.",
    mathSolution: "Use two pointers to find common elements",
    codeSolution:
      "vector<int> arr1 = {1, 2, 4, 5, 6};\nvector<int> arr2 = {2, 3, 5, 7};\nvector<int> intersection;\nint i=0, j=0;\nwhile(i<arr1.size() && j<arr2.size()) {\n    if(arr1[i] == arr2[j]) {\n        intersection.push_back(arr1[i]);\n        i++; j++;\n    }\n    else if(arr1[i] < arr2[j]) i++;\n    else j++;\n}",
    hint: "Move pointer with smaller value",
  },
  {
    id: "dsa_036",
    topicId: "cpp_dsa",
    question: "Union of two sorted arrays.",
    mathSolution: "Merge while avoiding duplicates",
    codeSolution:
      "vector<int> arr1 = {1, 3, 4, 5, 7};\nvector<int> arr2 = {2, 3, 5, 6};\nvector<int> unionArr;\nint i=0, j=0;\nwhile(i<arr1.size() && j<arr2.size()) {\n    if(arr1[i] < arr2[j]) unionArr.push_back(arr1[i++]);\n    else if(arr1[i] > arr2[j]) unionArr.push_back(arr2[j++]);\n    else { unionArr.push_back(arr1[i]); i++; j++; }\n}\nwhile(i<arr1.size()) unionArr.push_back(arr1[i++]);\nwhile(j<arr2.size()) unionArr.push_back(arr2[j++]);",
    hint: "Add remaining elements from both arrays",
  },
  {
    id: "dsa_037",
    topicId: "cpp_dsa",
    question: "Find common elements in three sorted arrays.",
    mathSolution: "Use three pointers approach",
    codeSolution:
      'vector<int> arr1 = {1, 5, 10, 20, 40};\nvector<int> arr2 = {6, 7, 20, 80};\nvector<int> arr3 = {3, 4, 15, 20, 30};\nint i=0, j=0, k=0;\nwhile(i<arr1.size() && j<arr2.size() && k<arr3.size()) {\n    if(arr1[i] == arr2[j] && arr2[j] == arr3[k]) {\n        cout << arr1[i] << " ";\n        i++; j++; k++;\n    }\n    else if(arr1[i] < arr2[j]) i++;\n    else if(arr2[j] < arr3[k]) j++;\n    else k++;\n}',
    hint: "Move pointer with smallest value",
  },
  {
    id: "dsa_038",
    topicId: "cpp_dsa",
    question: "Rearrange array in alternating positive and negative numbers.",
    mathSolution: "Partition positives and negatives, then merge alternately",
    codeSolution:
      "vector<int> arr = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8};\nvector<int> pos, neg;\nfor(int num : arr) {\n    if(num >= 0) pos.push_back(num);\n    else neg.push_back(num);\n}\nint i=0, pi=0, ni=0;\nwhile(pi < pos.size() && ni < neg.size()) {\n    arr[i++] = pos[pi++];\n    arr[i++] = neg[ni++];\n}\nwhile(pi < pos.size()) arr[i++] = pos[pi++];\nwhile(ni < neg.size()) arr[i++] = neg[ni++];",
    hint: "Extra space approach first, then try in-place",
  },
  {
    id: "dsa_039",
    topicId: "cpp_dsa",
    question: "Rearrange array such that arr[i] = i if possible.",
    mathSolution: "Swap elements to their correct positions",
    codeSolution:
      "vector<int> arr = {-1, -1, 6, 1, 9, 3, 2, -1, 4, -1};\nfor(int i=0; i<arr.size(); ) {\n    if(arr[i] >= 0 && arr[i] != i) {\n        swap(arr[i], arr[arr[i]]);\n    }\n    else i++;\n}",
    hint: "Keep swapping until element is in correct place",
  },
  {
    id: "dsa_040",
    topicId: "cpp_dsa",
    question:
      "Rearrange array such that arr[i] >= arr[j] if i even and i odd conditions.",
    mathSolution: "Sort array and then rearrange",
    codeSolution:
      "vector<int> arr = {1, 2, 3, 4, 5, 6, 7};\nsort(arr.begin(), arr.end());\nvector<int> result(arr.size());\nint evenPos = 0, oddPos = arr.size()-1;\nfor(int i=0; i<arr.size(); i++) {\n    if((i+1) % 2 == 0) result[i] = arr[oddPos--];\n    else result[i] = arr[evenPos++];\n}",
    hint: "Even indices get smaller elements, odd indices get larger",
  },
  {
    id: "dsa_041",
    topicId: "cpp_dsa",
    question: "Find next permutation of array.",
    mathSolution:
      "Find first decreasing from right, swap with next greater, reverse suffix",
    codeSolution:
      "vector<int> arr = {1, 2, 3};\nint n = arr.size(), i = n-2;\nwhile(i >= 0 && arr[i] >= arr[i+1]) i--;\nif(i >= 0) {\n    int j = n-1;\n    while(arr[j] <= arr[i]) j--;\n    swap(arr[i], arr[j]);\n}\nreverse(arr.begin() + i + 1, arr.end());",
    hint: "If no next permutation, reverse whole array",
  },
  {
    id: "dsa_042",
    topicId: "cpp_dsa",
    question: "Find previous permutation of array.",
    mathSolution:
      "Find first increasing from right, swap with next smaller, reverse suffix",
    codeSolution:
      "vector<int> arr = {3, 2, 1};\nint n = arr.size(), i = n-2;\nwhile(i >= 0 && arr[i] <= arr[i+1]) i--;\nif(i >= 0) {\n    int j = n-1;\n    while(arr[j] >= arr[i]) j--;\n    swap(arr[i], arr[j]);\n}\nreverse(arr.begin() + i + 1, arr.end());",
    hint: "Reverse of next permutation logic",
  },
  {
    id: "dsa_043",
    topicId: "cpp_dsa",
    question: "Find all permutations of array (next permutation repeatedly).",
    mathSolution: "Sort array and generate next permutations",
    codeSolution:
      "vector<int> arr = {1, 2, 3};\nsort(arr.begin(), arr.end());\nvector<vector<int>> permutations;\ndo {\n    permutations.push_back(arr);\n} while(next_permutation(arr.begin(), arr.end()));",
    hint: "Use next_permutation function or implement manually",
  },
  {
    id: "dsa_044",
    topicId: "cpp_dsa",
    question: "Find kth smallest element in array.",
    mathSolution: "Use quick select algorithm",
    codeSolution:
      "vector<int> arr = {7, 10, 4, 3, 20, 15};\nint k = 3;\nnth_element(arr.begin(), arr.begin()+k-1, arr.end());\nint kthSmallest = arr[k-1];",
    hint: "Quick select gives O(n) average time",
  },
  {
    id: "dsa_045",
    topicId: "cpp_dsa",
    question: "Find kth largest element in array.",
    mathSolution: "Use min heap of size k",
    codeSolution:
      "vector<int> arr = {3, 2, 1, 5, 6, 4};\nint k = 2;\npriority_queue<int, vector<int>, greater<int>> minHeap;\nfor(int num : arr) {\n    minHeap.push(num);\n    if(minHeap.size() > k) minHeap.pop();\n}\nint kthLargest = minHeap.top();",
    hint: "Min heap maintains k largest elements",
  },
  {
    id: "dsa_046",
    topicId: "cpp_dsa",
    question: "Find k closest elements to given value x.",
    mathSolution: "Use binary search to find closest, then expand two pointers",
    codeSolution:
      "vector<int> arr = {12, 16, 22, 30, 35, 39, 42, 45, 48, 50, 53, 55, 56};\nint k = 4, x = 35;\nint n = arr.size();\nint idx = lower_bound(arr.begin(), arr.end(), x) - arr.begin();\nint left = idx-1, right = idx;\nvector<int> result;\nwhile(k--) {\n    if(left < 0) result.push_back(arr[right++]);\n    else if(right >= n) result.push_back(arr[left--]);\n    else if(x - arr[left] <= arr[right] - x) result.push_back(arr[left--]);\n    else result.push_back(arr[right++]);\n}",
    hint: "Binary search for insertion point, then expand",
  },
  {
    id: "dsa_047",
    topicId: "cpp_dsa",
    question: "Find median of two sorted arrays.",
    mathSolution: "Binary search on smaller array for correct partition",
    codeSolution:
      "vector<int> nums1 = {1, 3}, nums2 = {2};\nif(nums1.size() > nums2.size()) swap(nums1, nums2);\nint m = nums1.size(), n = nums2.size();\nint low = 0, high = m;\nwhile(low <= high) {\n    int partition1 = (low + high) / 2;\n    int partition2 = (m + n + 1) / 2 - partition1;\n    int maxLeft1 = (partition1 == 0) ? INT_MIN : nums1[partition1-1];\n    int minRight1 = (partition1 == m) ? INT_MAX : nums1[partition1];\n    int maxLeft2 = (partition2 == 0) ? INT_MIN : nums2[partition2-1];\n    int minRight2 = (partition2 == n) ? INT_MAX : nums2[partition2];\n    if(maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {\n        if((m + n) % 2 == 0) {\n            double median = (max(maxLeft1, maxLeft2) + min(minRight1, minRight2)) / 2.0;\n            cout << median;\n        }\n        else cout << max(maxLeft1, maxLeft2);\n        break;\n    }\n    else if(maxLeft1 > minRight2) high = partition1 - 1;\n    else low = partition1 + 1;\n}",
    hint: "Partition arrays such that left half has half of total elements",
  },
  {
    id: "dsa_048",
    topicId: "cpp_dsa",
    question: "Container with most water.",
    mathSolution: "Two pointers from ends, move pointer with smaller height",
    codeSolution:
      "vector<int> height = {1, 8, 6, 2, 5, 4, 8, 3, 7};\nint left = 0, right = height.size() - 1;\nint maxWater = 0;\nwhile(left < right) {\n    int water = min(height[left], height[right]) * (right - left);\n    maxWater = max(maxWater, water);\n    if(height[left] < height[right]) left++;\n    else right--;\n}",
    hint: "Width decreases, so try to increase height",
  },
  {
    id: "dsa_049",
    topicId: "cpp_dsa",
    question: "Trapping rain water.",
    mathSolution: "For each bar, water = min(maxLeft, maxRight) - height[i]",
    codeSolution:
      "vector<int> height = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};\nint n = height.size();\nvector<int> leftMax(n), rightMax(n);\nleftMax[0] = height[0];\nfor(int i=1; i<n; i++) leftMax[i] = max(leftMax[i-1], height[i]);\nrightMax[n-1] = height[n-1];\nfor(int i=n-2; i>=0; i--) rightMax[i] = max(rightMax[i+1], height[i]);\nint water = 0;\nfor(int i=0; i<n; i++) water += min(leftMax[i], rightMax[i]) - height[i];",
    hint: "Two-pointer approach can do it in O(1) space",
  },
  {
    id: "dsa_050",
    topicId: "cpp_dsa",
    question: "Product of array except self.",
    mathSolution: "Calculate prefix and suffix products",
    codeSolution:
      "vector<int> arr = {1, 2, 3, 4};\nint n = arr.size();\nvector<int> result(n, 1);\nint prefix = 1;\nfor(int i=0; i<n; i++) {\n    result[i] = prefix;\n    prefix *= arr[i];\n}\nint suffix = 1;\nfor(int i=n-1; i>=0; i--) {\n    result[i] *= suffix;\n    suffix *= arr[i];\n}",
    hint: "Without using division operator",
  },
  {
    id: "dsa_051",
    topicId: "cpp_dsa",
    question: "Find first and last position of element in sorted array.",
    mathSolution: "Binary search for first and last occurrence",
    codeSolution:
      'vector<int> arr = {5, 7, 7, 8, 8, 10};\nint target = 8;\nauto first = lower_bound(arr.begin(), arr.end(), target);\nauto last = upper_bound(arr.begin(), arr.end(), target);\nif(first != arr.end() && *first == target) {\n    cout << "First: " << first - arr.begin();\n    cout << " Last: " << last - arr.begin() - 1;\n}',
    hint: "Use lower_bound and upper_bound",
  },
  {
    id: "dsa_052",
    topicId: "cpp_dsa",
    question: "Search in rotated sorted array.",
    mathSolution:
      "Binary search with extra condition to check which half is sorted",
    codeSolution:
      "vector<int> arr = {4, 5, 6, 7, 0, 1, 2};\nint target = 0;\nint left = 0, right = arr.size() - 1;\nwhile(left <= right) {\n    int mid = left + (right - left)/2;\n    if(arr[mid] == target) { cout << mid; break; }\n    if(arr[left] <= arr[mid]) {\n        if(arr[left] <= target && target < arr[mid]) right = mid-1;\n        else left = mid+1;\n    }\n    else {\n        if(arr[mid] < target && target <= arr[right]) left = mid+1;\n        else right = mid-1;\n    }\n}",
    hint: "One half is always sorted normally",
  },
  {
    id: "dsa_053",
    topicId: "cpp_dsa",
    question: "Search in rotated sorted array with duplicates.",
    mathSolution: "Binary search with handling for duplicates at ends",
    codeSolution:
      "vector<int> arr = {2, 5, 6, 0, 0, 1, 2};\nint target = 0;\nint left = 0, right = arr.size() - 1;\nwhile(left <= right) {\n    int mid = left + (right - left)/2;\n    if(arr[mid] == target) { cout << mid; break; }\n    if(arr[left] == arr[mid] && arr[mid] == arr[right]) {\n        left++; right--;\n    }\n    else if(arr[left] <= arr[mid]) {\n        if(arr[left] <= target && target < arr[mid]) right = mid-1;\n        else left = mid+1;\n    }\n    else {\n        if(arr[mid] < target && target <= arr[right]) left = mid+1;\n        else right = mid-1;\n    }\n}",
    hint: "When left, mid, right are equal, shrink range",
  },
  {
    id: "dsa_054",
    topicId: "cpp_dsa",
    question: "Find minimum in rotated sorted array.",
    mathSolution: "Binary search to find pivot point",
    codeSolution:
      "vector<int> arr = {3, 4, 5, 1, 2};\nint left = 0, right = arr.size() - 1;\nwhile(left < right) {\n    int mid = left + (right - left)/2;\n    if(arr[mid] > arr[right]) left = mid+1;\n    else right = mid;\n}\nint minElement = arr[left];",
    hint: "Minimum is the only element smaller than its left neighbor",
  },
  {
    id: "dsa_055",
    topicId: "cpp_dsa",
    question: "Find peak element (greater than neighbors).",
    mathSolution: "Binary search for any peak",
    codeSolution:
      "vector<int> arr = {1, 2, 3, 1};\nint left = 0, right = arr.size() - 1;\nwhile(left < right) {\n    int mid = left + (right - left)/2;\n    if(arr[mid] < arr[mid+1]) left = mid+1;\n    else right = mid;\n}\nint peakIndex = left;",
    hint: "Move towards increasing direction",
  },
  {
    id: "dsa_056",
    topicId: "cpp_dsa",
    question: "Find floor and ceil of x in sorted array.",
    mathSolution: "Use binary search for lower_bound and upper_bound",
    codeSolution:
      'vector<int> arr = {1, 2, 8, 10, 10, 12, 19};\nint x = 5;\nauto it = lower_bound(arr.begin(), arr.end(), x);\nif(it != arr.begin()) cout << "Floor: " << *(it-1);\nif(it != arr.end()) cout << " Ceil: " << *it;',
    hint: "Floor = largest element <= x, Ceil = smallest element >= x",
  },
  {
    id: "dsa_057",
    topicId: "cpp_dsa",
    question: "Find square root of integer without sqrt function.",
    mathSolution: "Binary search between 0 and x",
    codeSolution:
      "int x = 16;\nint left = 0, right = x, result = 0;\nwhile(left <= right) {\n    long long mid = left + (right - left)/2;\n    if(mid*mid <= x) {\n        result = mid;\n        left = mid+1;\n    }\n    else right = mid-1;\n}",
    hint: "Find largest number whose square <= x",
  },
  {
    id: "dsa_058",
    topicId: "cpp_dsa",
    question: "Check if number is perfect square.",
    mathSolution: "Binary search to find square root and check",
    codeSolution:
      'int x = 16;\nint left = 0, right = x;\nwhile(left <= right) {\n    long long mid = left + (right - left)/2;\n    long long square = mid*mid;\n    if(square == x) { cout << "Perfect square"; break; }\n    else if(square < x) left = mid+1;\n    else right = mid-1;\n}',
    hint: "Binary search for exact square root",
  },
  {
    id: "dsa_059",
    topicId: "cpp_dsa",
    question: "Find kth smallest element in two sorted arrays.",
    mathSolution: "Binary search on smaller array for correct partition",
    codeSolution:
      "vector<int> arr1 = {2, 3, 6, 7, 9};\nvector<int> arr2 = {1, 4, 8, 10};\nint k = 5;\nif(arr1.size() > arr2.size()) swap(arr1, arr2);\nint m = arr1.size(), n = arr2.size();\nint low = max(0, k-n), high = min(k, m);\nwhile(low <= high) {\n    int cut1 = (low + high)/2;\n    int cut2 = k - cut1;\n    int left1 = (cut1 == 0) ? INT_MIN : arr1[cut1-1];\n    int left2 = (cut2 == 0) ? INT_MIN : arr2[cut2-1];\n    int right1 = (cut1 == m) ? INT_MAX : arr1[cut1];\n    int right2 = (cut2 == n) ? INT_MAX : arr2[cut2];\n    if(left1 <= right2 && left2 <= right1) {\n        cout << max(left1, left2);\n        break;\n    }\n    else if(left1 > right2) high = cut1-1;\n    else low = cut1+1;\n}",
    hint: "Take k elements from first array, rest from second",
  },
  {
    id: "dsa_060",
    topicId: "cpp_dsa",
    question: "Aggressive cows problem (maximum minimum distance).",
    mathSolution: "Binary search on distance and check if placement possible",
    codeSolution:
      "vector<int> stalls = {1, 2, 4, 8, 9};\nint cows = 3;\nsort(stalls.begin(), stalls.end());\nint left = 1, right = stalls.back() - stalls.front();\nint result = 0;\nwhile(left <= right) {\n    int mid = left + (right - left)/2;\n    int count = 1, lastPos = stalls[0];\n    for(int i=1; i<stalls.size(); i++) {\n        if(stalls[i] - lastPos >= mid) {\n            count++;\n            lastPos = stalls[i];\n        }\n    }\n    if(count >= cows) {\n        result = mid;\n        left = mid+1;\n    }\n    else right = mid-1;\n}",
    hint: "Binary search on answer, greedy check",
  },
  {
    id: "dsa_061",
    topicId: "cpp_dsa",
    question: "Allocate minimum number of pages.",
    mathSolution: "Binary search on maximum pages per student",
    codeSolution:
      "vector<int> books = {12, 34, 67, 90};\nint students = 2;\nint left = *max_element(books.begin(), books.end());\nint right = accumulate(books.begin(), books.end(), 0);\nint result = right;\nwhile(left <= right) {\n    int mid = left + (right - left)/2;\n    int count = 1, sum = 0;\n    for(int pages : books) {\n        if(sum + pages > mid) {\n            count++;\n            sum = pages;\n        }\n        else sum += pages;\n    }\n    if(count <= students) {\n        result = mid;\n        right = mid-1;\n    }\n    else left = mid+1;\n}",
    hint: "Minimize maximum pages allocated",
  },
  {
    id: "dsa_062",
    topicId: "cpp_dsa",
    question: "Painters partition problem.",
    mathSolution: "Binary search on maximum time per painter",
    codeSolution:
      "vector<int> boards = {10, 20, 30, 40};\nint painters = 2;\nint left = *max_element(boards.begin(), boards.end());\nint right = accumulate(boards.begin(), boards.end(), 0);\nint result = right;\nwhile(left <= right) {\n    int mid = left + (right - left)/2;\n    int count = 1, sum = 0;\n    for(int board : boards) {\n        if(sum + board > mid) {\n            count++;\n            sum = board;\n        }\n        else sum += board;\n    }\n    if(count <= painters) {\n        result = mid;\n        right = mid-1;\n    }\n    else left = mid+1;\n}",
    hint: "Same as book allocation problem",
  },
  {
    id: "dsa_063",
    topicId: "cpp_dsa",
    question: "Find smallest positive missing number.",
    mathSolution: "Place each number at its correct index",
    codeSolution:
      'vector<int> arr = {3, 4, -1, 1};\nint n = arr.size();\nfor(int i=0; i<n; i++) {\n    while(arr[i] > 0 && arr[i] <= n && arr[arr[i]-1] != arr[i]) {\n        swap(arr[i], arr[arr[i]-1]);\n    }\n}\nfor(int i=0; i<n; i++) {\n    if(arr[i] != i+1) {\n        cout << "Smallest missing: " << i+1;\n        break;\n    }\n}',
    hint: "Put each number in its correct position",
  },
  {
    id: "dsa_064",
    topicId: "cpp_dsa",
    question: "Maximum sum of k consecutive elements.",
    mathSolution: "Sliding window technique",
    codeSolution:
      "vector<int> arr = {1, 4, 2, 10, 23, 3, 1, 0, 20};\nint k = 4;\nint windowSum = 0;\nfor(int i=0; i<k; i++) windowSum += arr[i];\nint maxSum = windowSum;\nfor(int i=k; i<arr.size(); i++) {\n    windowSum += arr[i] - arr[i-k];\n    maxSum = max(maxSum, windowSum);\n}",
    hint: "Add next element, remove first of previous window",
  },
  {
    id: "dsa_065",
    topicId: "cpp_dsa",
    question: "Minimum swaps required to group all 1s together.",
    mathSolution: "Count total ones, find window with max ones",
    codeSolution:
      "vector<int> arr = {1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1};\nint totalOnes = count(arr.begin(), arr.end(), 1);\nint onesInWindow = 0;\nfor(int i=0; i<totalOnes; i++) onesInWindow += arr[i];\nint maxOnes = onesInWindow;\nfor(int i=totalOnes; i<arr.size(); i++) {\n    onesInWindow += arr[i] - arr[i-totalOnes];\n    maxOnes = max(maxOnes, onesInWindow);\n}\nint minSwaps = totalOnes - maxOnes;",
    hint: "Find window of size = total ones with maximum ones",
  },
  {
    id: "dsa_066",
    topicId: "cpp_dsa",
    question: "Find if array can be partitioned into two equal sum subsets.",
    mathSolution: "Dynamic programming subset sum problem",
    codeSolution:
      'vector<int> arr = {1, 5, 11, 5};\nint sum = accumulate(arr.begin(), arr.end(), 0);\nif(sum % 2 != 0) { cout << "Cannot partition"; return; }\nint target = sum/2;\nvector<bool> dp(target+1, false);\ndp[0] = true;\nfor(int num : arr) {\n    for(int i=target; i>=num; i--) {\n        if(dp[i-num]) dp[i] = true;\n    }\n}\nif(dp[target]) cout << "Can partition";',
    hint: "Find subset with sum = totalSum/2",
  },
  {
    id: "dsa_067",
    topicId: "cpp_dsa",
    question: "Find longest consecutive sequence in array.",
    mathSolution: "Use hash set to check consecutive numbers",
    codeSolution:
      "vector<int> arr = {100, 4, 200, 1, 3, 2};\nunordered_set<int> s(arr.begin(), arr.end());\nint longest = 0;\nfor(int num : s) {\n    if(s.find(num-1) == s.end()) {\n        int currNum = num, currLen = 1;\n        while(s.find(currNum+1) != s.end()) {\n            currNum++;\n            currLen++;\n        }\n        longest = max(longest, currLen);\n    }\n}",
    hint: "Start counting only from beginning of sequence",
  },
  {
    id: "dsa_068",
    topicId: "cpp_dsa",
    question: "Maximum length of pair chain.",
    mathSolution: "Sort by second element, greedy",
    codeSolution:
      "vector<vector<int>> pairs = {{5,24}, {39,60}, {15,28}, {27,40}, {50,90}};\nsort(pairs.begin(), pairs.end(), [](auto &a, auto &b) { return a[1] < b[1]; });\nint count = 1, lastEnd = pairs[0][1];\nfor(int i=1; i<pairs.size(); i++) {\n    if(pairs[i][0] > lastEnd) {\n        count++;\n        lastEnd = pairs[i][1];\n    }\n}",
    hint: "Similar to activity selection",
  },
  {
    id: "dsa_069",
    topicId: "cpp_dsa",
    question: "Minimum number of platforms required for railway station.",
    mathSolution: "Sort arrival and departure times, use two pointers",
    codeSolution:
      "vector<int> arrival = {900, 940, 950, 1100, 1500, 1800};\nvector<int> departure = {910, 1200, 1120, 1130, 1900, 2000};\nsort(arrival.begin(), arrival.end());\nsort(departure.begin(), departure.end());\nint platforms = 1, maxPlatforms = 1;\nint i=1, j=0;\nwhile(i<arrival.size() && j<departure.size()) {\n    if(arrival[i] <= departure[j]) {\n        platforms++;\n        i++;\n    }\n    else {\n        platforms--;\n        j++;\n    }\n    maxPlatforms = max(maxPlatforms, platforms);\n}",
    hint: "Count overlapping intervals",
  },
  {
    id: "dsa_070",
    topicId: "cpp_dsa",
    question: "Job sequencing with deadlines.",
    mathSolution: "Sort by profit, assign to latest possible slot",
    codeSolution:
      "vector<vector<int>> jobs = {{1,4,20}, {2,1,10}, {3,1,40}, {4,1,30}};\nsort(jobs.begin(), jobs.end(), [](auto &a, auto &b) { return a[2] > b[2]; });\nint maxDeadline = 0;\nfor(auto &job : jobs) maxDeadline = max(maxDeadline, job[1]);\nvector<int> slot(maxDeadline+1, -1);\nint profit = 0;\nfor(auto &job : jobs) {\n    for(int j=job[1]; j>0; j--) {\n        if(slot[j] == -1) {\n            slot[j] = job[0];\n            profit += job[2];\n            break;\n        }\n    }\n}",
    hint: "Schedule jobs in latest available slot before deadline",
  },
  {
    id: "dsa_071",
    topicId: "cpp_dsa",
    question: "Fractional knapsack problem.",
    mathSolution: "Sort by value/weight ratio, take fractions",
    codeSolution:
      "vector<vector<int>> items = {{60,10}, {100,20}, {120,30}};\nint capacity = 50;\nsort(items.begin(), items.end(), [](auto &a, auto &b) { \n    return (double)a[0]/a[1] > (double)b[0]/b[1]; \n});\ndouble totalValue = 0;\nfor(auto &item : items) {\n    if(capacity >= item[1]) {\n        totalValue += item[0];\n        capacity -= item[1];\n    }\n    else {\n        totalValue += (double)item[0] * capacity / item[1];\n        break;\n    }\n}",
    hint: "Take items with highest value per weight first",
  },
  {
    id: "dsa_072",
    topicId: "cpp_dsa",
    question: "0/1 knapsack problem.",
    mathSolution: "Dynamic programming 2D array",
    codeSolution:
      "vector<int> values = {60, 100, 120};\nvector<int> weights = {10, 20, 30};\nint capacity = 50;\nint n = values.size();\nvector<vector<int>> dp(n+1, vector<int>(capacity+1, 0));\nfor(int i=1; i<=n; i++) {\n    for(int w=1; w<=capacity; w++) {\n        if(weights[i-1] <= w) {\n            dp[i][w] = max(dp[i-1][w], values[i-1] + dp[i-1][w-weights[i-1]]);\n        }\n        else dp[i][w] = dp[i-1][w];\n    }\n}\nint maxValue = dp[n][capacity];",
    hint: "Either include item or exclude it",
  },
  {
    id: "dsa_073",
    topicId: "cpp_dsa",
    question: "Coin change problem (minimum coins).",
    mathSolution: "Dynamic programming 1D array",
    codeSolution:
      "vector<int> coins = {1, 2, 5};\nint amount = 11;\nvector<int> dp(amount+1, amount+1);\ndp[0] = 0;\nfor(int i=1; i<=amount; i++) {\n    for(int coin : coins) {\n        if(i >= coin) {\n            dp[i] = min(dp[i], dp[i-coin] + 1);\n        }\n    }\n}\nint minCoins = (dp[amount] > amount) ? -1 : dp[amount];",
    hint: "dp[i] = min coins to make amount i",
  },
  {
    id: "dsa_074",
    topicId: "cpp_dsa",
    question: "Coin change problem (number of ways).",
    mathSolution: "Dynamic programming counting ways",
    codeSolution:
      "vector<int> coins = {1, 2, 5};\nint amount = 5;\nvector<int> dp(amount+1, 0);\ndp[0] = 1;\nfor(int coin : coins) {\n    for(int i=coin; i<=amount; i++) {\n        dp[i] += dp[i-coin];\n    }\n}\nint ways = dp[amount];",
    hint: "Outer loop on coins to avoid permutations",
  },
  {
    id: "dsa_075",
    topicId: "cpp_dsa",
    question: "Longest common subsequence.",
    mathSolution: "Dynamic programming 2D table",
    codeSolution:
      'string text1 = "abcde", text2 = "ace";\nint m = text1.length(), n = text2.length();\nvector<vector<int>> dp(m+1, vector<int>(n+1, 0));\nfor(int i=1; i<=m; i++) {\n    for(int j=1; j<=n; j++) {\n        if(text1[i-1] == text2[j-1]) dp[i][j] = dp[i-1][j-1] + 1;\n        else dp[i][j] = max(dp[i-1][j], dp[i][j-1]);\n    }\n}\nint lcsLength = dp[m][n];',
    hint: "Match or skip characters",
  },
  {
    id: "dsa_076",
    topicId: "cpp_dsa",
    question: "Longest common substring.",
    mathSolution: "Dynamic programming with continuous match",
    codeSolution:
      'string s1 = "abcde", s2 = "abfde";\nint m = s1.length(), n = s2.length();\nvector<vector<int>> dp(m+1, vector<int>(n+1, 0));\nint maxLen = 0;\nfor(int i=1; i<=m; i++) {\n    for(int j=1; j<=n; j++) {\n        if(s1[i-1] == s2[j-1]) {\n            dp[i][j] = dp[i-1][j-1] + 1;\n            maxLen = max(maxLen, dp[i][j]);\n        }\n        else dp[i][j] = 0;\n    }\n}',
    hint: "Reset to 0 when characters don't match",
  },
  {
    id: "dsa_077",
    topicId: "cpp_dsa",
    question: "Longest increasing subsequence.",
    mathSolution: "Binary search with patience sorting",
    codeSolution:
      "vector<int> arr = {10, 9, 2, 5, 3, 7, 101, 18};\nvector<int> tails;\nfor(int num : arr) {\n    auto it = lower_bound(tails.begin(), tails.end(), num);\n    if(it == tails.end()) tails.push_back(num);\n    else *it = num;\n}\nint lisLength = tails.size();",
    hint: "Maintain increasing sequence of smallest possible tails",
  },
  {
    id: "dsa_078",
    topicId: "cpp_dsa",
    question: "Maximum sum increasing subsequence.",
    mathSolution: "Dynamic programming tracking max sum",
    codeSolution:
      "vector<int> arr = {1, 101, 2, 3, 100, 4, 5};\nint n = arr.size();\nvector<int> dp = arr;\nfor(int i=1; i<n; i++) {\n    for(int j=0; j<i; j++) {\n        if(arr[j] < arr[i]) {\n            dp[i] = max(dp[i], dp[j] + arr[i]);\n        }\n    }\n}\nint maxSum = *max_element(dp.begin(), dp.end());",
    hint: "dp[i] = max sum ending at i",
  },
  {
    id: "dsa_079",
    topicId: "cpp_dsa",
    question: "Longest bitonic subsequence.",
    mathSolution: "LIS from left and right, then combine",
    codeSolution:
      "vector<int> arr = {1, 11, 2, 10, 4, 5, 2, 1};\nint n = arr.size();\nvector<int> lis(n, 1), lds(n, 1);\nfor(int i=0; i<n; i++) {\n    for(int j=0; j<i; j++) {\n        if(arr[j] < arr[i]) lis[i] = max(lis[i], lis[j]+1);\n    }\n}\nfor(int i=n-1; i>=0; i--) {\n    for(int j=n-1; j>i; j--) {\n        if(arr[j] < arr[i]) lds[i] = max(lds[i], lds[j]+1);\n    }\n}\nint maxLen = 0;\nfor(int i=0; i<n; i++) maxLen = max(maxLen, lis[i] + lds[i] - 1);",
    hint: "Bitonic = increasing then decreasing",
  },
  {
    id: "dsa_080",
    topicId: "cpp_dsa",
    question: "Edit distance (Levenshtein distance).",
    mathSolution: "Dynamic programming for insert, delete, replace",
    codeSolution:
      'string word1 = "horse", word2 = "ros";\nint m = word1.length(), n = word2.length();\nvector<vector<int>> dp(m+1, vector<int>(n+1));\nfor(int i=0; i<=m; i++) dp[i][0] = i;\nfor(int j=0; j<=n; j++) dp[0][j] = j;\nfor(int i=1; i<=m; i++) {\n    for(int j=1; j<=n; j++) {\n        if(word1[i-1] == word2[j-1]) dp[i][j] = dp[i-1][j-1];\n        else dp[i][j] = 1 + min({dp[i-1][j], dp[i][j-1], dp[i-1][j-1]});\n    }\n}\nint distance = dp[m][n];',
    hint: "Three operations: insert, delete, replace",
  },
  {
    id: "dsa_081",
    topicId: "cpp_dsa",
    question: "Matrix chain multiplication.",
    mathSolution: "Dynamic programming with partition",
    codeSolution:
      "vector<int> dimensions = {40, 20, 30, 10, 30};\nint n = dimensions.size();\nvector<vector<int>> dp(n, vector<int>(n, 0));\nfor(int len=2; len<n; len++) {\n    for(int i=1; i<n-len+1; i++) {\n        int j = i+len-1;\n        dp[i][j] = INT_MAX;\n        for(int k=i; k<j; k++) {\n            int cost = dp[i][k] + dp[k+1][j] + dimensions[i-1]*dimensions[k]*dimensions[j];\n            dp[i][j] = min(dp[i][j], cost);\n        }\n    }\n}\nint minMultiplications = dp[1][n-1];",
    hint: "Find optimal parenthesis placement",
  },
  {
    id: "dsa_082",
    topicId: "cpp_dsa",
    question: "Palindrome partitioning (minimum cuts).",
    mathSolution: "Dynamic programming with palindrome check",
    codeSolution:
      'string s = "aab";\nint n = s.length();\nvector<vector<bool>> isPal(n, vector<bool>(n, false));\nfor(int i=0; i<n; i++) isPal[i][i] = true;\nfor(int len=2; len<=n; len++) {\n    for(int i=0; i<n-len+1; i++) {\n        int j = i+len-1;\n        if(len == 2) isPal[i][j] = (s[i] == s[j]);\n        else isPal[i][j] = (s[i] == s[j] && isPal[i+1][j-1]);\n    }\n}\nvector<int> cuts(n, INT_MAX);\nfor(int i=0; i<n; i++) {\n    if(isPal[0][i]) cuts[i] = 0;\n    else {\n        for(int j=0; j<i; j++) {\n            if(isPal[j+1][i]) cuts[i] = min(cuts[i], cuts[j] + 1);\n        }\n    }\n}\nint minCuts = cuts[n-1];',
    hint: "cuts[i] = min cuts for substring [0..i]",
  },
  {
    id: "dsa_083",
    topicId: "cpp_dsa",
    question: "Egg dropping problem.",
    mathSolution: "Dynamic programming with binary search optimization",
    codeSolution:
      "int eggs = 2, floors = 100;\nvector<vector<int>> dp(eggs+1, vector<int>(floors+1, 0));\nfor(int i=1; i<=eggs; i++) {\n    for(int j=1; j<=floors; j++) {\n        if(i == 1) dp[i][j] = j;\n        else if(j == 1) dp[i][j] = 1;\n        else {\n            dp[i][j] = INT_MAX;\n            for(int x=1; x<=j; x++) {\n                int res = 1 + max(dp[i-1][x-1], dp[i][j-x]);\n                dp[i][j] = min(dp[i][j], res);\n            }\n        }\n    }\n}\nint minAttempts = dp[eggs][floors];",
    hint: "Egg breaks (check below) or doesn't break (check above)",
  },
  {
    id: "dsa_084",
    topicId: "cpp_dsa",
    question: "Maximum profit in job scheduling.",
    mathSolution: "Dynamic programming with binary search",
    codeSolution:
      "vector<vector<int>> jobs = {{1,2,50}, {3,5,20}, {6,19,100}, {2,100,200}};\nsort(jobs.begin(), jobs.end());\nint n = jobs.size();\nvector<int> dp(n, 0);\ndp[0] = jobs[0][2];\nfor(int i=1; i<n; i++) {\n    int profit = jobs[i][2];\n    int lastNonConflict = -1;\n    for(int j=i-1; j>=0; j--) {\n        if(jobs[j][1] <= jobs[i][0]) {\n            lastNonConflict = j;\n            break;\n        }\n    }\n    if(lastNonConflict != -1) profit += dp[lastNonConflict];\n    dp[i] = max(dp[i-1], profit);\n}\nint maxProfit = dp[n-1];",
    hint: "Either include job or skip it",
  },
  {
    id: "dsa_085",
    topicId: "cpp_dsa",
    question: "Wildcard pattern matching.",
    mathSolution: "Dynamic programming with * matching zero or more",
    codeSolution:
      "string s = \"aa\", p = \"a*\";\nint m = s.length(), n = p.length();\nvector<vector<bool>> dp(m+1, vector<bool>(n+1, false));\ndp[0][0] = true;\nfor(int j=1; j<=n; j++) if(p[j-1] == '*') dp[0][j] = dp[0][j-1];\nfor(int i=1; i<=m; i++) {\n    for(int j=1; j<=n; j++) {\n        if(p[j-1] == '*') dp[i][j] = dp[i-1][j] || dp[i][j-1];\n        else if(p[j-1] == '?' || s[i-1] == p[j-1]) dp[i][j] = dp[i-1][j-1];\n    }\n}\nbool matches = dp[m][n];",
    hint: "* can match empty or any sequence",
  },
  {
    id: "dsa_086",
    topicId: "cpp_dsa",
    question: "Regular expression matching.",
    mathSolution:
      "Dynamic programming with * matching zero or more of preceding",
    codeSolution:
      "string s = \"aa\", p = \"a*\";\nint m = s.length(), n = p.length();\nvector<vector<bool>> dp(m+1, vector<bool>(n+1, false));\ndp[0][0] = true;\nfor(int j=1; j<=n; j++) if(p[j-1] == '*') dp[0][j] = dp[0][j-2];\nfor(int i=1; i<=m; i++) {\n    for(int j=1; j<=n; j++) {\n        if(p[j-1] == '*') {\n            dp[i][j] = dp[i][j-2] || (dp[i-1][j] && (p[j-2] == '.' || s[i-1] == p[j-2]));\n        }\n        else if(p[j-1] == '.' || s[i-1] == p[j-1]) dp[i][j] = dp[i-1][j-1];\n    }\n}\nbool matches = dp[m][n];",
    hint: "* matches zero or more of preceding character",
  },
  {
    id: "dsa_087",
    topicId: "cpp_dsa",
    question: "Reverse a linked list.",
    mathSolution: "Iterative three pointer approach",
    codeSolution:
      "struct ListNode { int val; ListNode *next; };\nListNode* reverseList(ListNode* head) {\n    ListNode *prev = nullptr, *curr = head, *next = nullptr;\n    while(curr) {\n        next = curr->next;\n        curr->next = prev;\n        prev = curr;\n        curr = next;\n    }\n    return prev;\n}",
    hint: "Change next pointers to previous nodes",
  },
  {
    id: "dsa_088",
    topicId: "cpp_dsa",
    question: "Detect cycle in linked list.",
    mathSolution: "Floyd's cycle detection (tortoise and hare)",
    codeSolution:
      "bool hasCycle(ListNode *head) {\n    ListNode *slow = head, *fast = head;\n    while(fast && fast->next) {\n        slow = slow->next;\n        fast = fast->next->next;\n        if(slow == fast) return true;\n    }\n    return false;\n}",
    hint: "Fast moves twice as slow, they meet if cycle exists",
  },
  {
    id: "dsa_089",
    topicId: "cpp_dsa",
    question: "Find middle of linked list.",
    mathSolution: "Slow and fast pointers",
    codeSolution:
      "ListNode* middleNode(ListNode* head) {\n    ListNode *slow = head, *fast = head;\n    while(fast && fast->next) {\n        slow = slow->next;\n        fast = fast->next->next;\n    }\n    return slow;\n}",
    hint: "When fast reaches end, slow is at middle",
  },
  {
    id: "dsa_090",
    topicId: "cpp_dsa",
    question: "Merge two sorted linked lists.",
    mathSolution: "Dummy node and compare nodes",
    codeSolution:
      "ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {\n    ListNode dummy(0);\n    ListNode *tail = &dummy;\n    while(l1 && l2) {\n        if(l1->val < l2->val) {\n            tail->next = l1;\n            l1 = l1->next;\n        }\n        else {\n            tail->next = l2;\n            l2 = l2->next;\n        }\n        tail = tail->next;\n    }\n    tail->next = l1 ? l1 : l2;\n    return dummy.next;\n}",
    hint: "Use dummy node to simplify",
  },
  {
    id: "dsa_091",
    topicId: "cpp_dsa",
    question: "Remove nth node from end of linked list.",
    mathSolution: "Two pointers with gap of n nodes",
    codeSolution:
      "ListNode* removeNthFromEnd(ListNode* head, int n) {\n    ListNode dummy(0);\n    dummy.next = head;\n    ListNode *first = &dummy, *second = &dummy;\n    for(int i=0; i<=n; i++) first = first->next;\n    while(first) {\n        first = first->next;\n        second = second->next;\n    }\n    ListNode *temp = second->next;\n    second->next = second->next->next;\n    delete temp;\n    return dummy.next;\n}",
    hint: "Move first pointer n+1 steps ahead, then move both",
  },
  {
    id: "dsa_092",
    topicId: "cpp_dsa",
    question: "Add two numbers represented by linked lists.",
    mathSolution: "Traverse both lists with carry",
    codeSolution:
      "ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\n    ListNode dummy(0);\n    ListNode *curr = &dummy;\n    int carry = 0;\n    while(l1 || l2 || carry) {\n        int sum = carry;\n        if(l1) { sum += l1->val; l1 = l1->next; }\n        if(l2) { sum += l2->val; l2 = l2->next; }\n        carry = sum / 10;\n        curr->next = new ListNode(sum % 10);\n        curr = curr->next;\n    }\n    return dummy.next;\n}",
    hint: "Process digits from least significant",
  },
  {
    id: "dsa_093",
    topicId: "cpp_dsa",
    question: "Intersection point of two linked lists.",
    mathSolution: "Find length difference, align and traverse",
    codeSolution:
      "ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {\n    ListNode *a = headA, *b = headB;\n    while(a != b) {\n        a = a ? a->next : headB;\n        b = b ? b->next : headA;\n    }\n    return a;\n}",
    hint: "Traverse both, switch heads when reaching end",
  },
  {
    id: "dsa_094",
    topicId: "cpp_dsa",
    question: "Palindrome linked list.",
    mathSolution: "Find middle, reverse second half, compare",
    codeSolution:
      "bool isPalindrome(ListNode* head) {\n    if(!head || !head->next) return true;\n    ListNode *slow = head, *fast = head;\n    while(fast->next && fast->next->next) {\n        slow = slow->next;\n        fast = fast->next->next;\n    }\n    ListNode *second = slow->next;\n    slow->next = nullptr;\n    ListNode *prev = nullptr, *curr = second, *next = nullptr;\n    while(curr) {\n        next = curr->next;\n        curr->next = prev;\n        prev = curr;\n        curr = next;\n    }\n    ListNode *first = head, *secondRev = prev;\n    while(secondRev) {\n        if(first->val != secondRev->val) return false;\n        first = first->next;\n        secondRev = secondRev->next;\n    }\n    return true;\n}",
    hint: "Reverse second half and compare",
  },
  {
    id: "dsa_095",
    topicId: "cpp_dsa",
    question: "LRU Cache implementation.",
    mathSolution: "Hash map with doubly linked list",
    codeSolution:
      "class LRUCache {\n    list<pair<int,int>> cache;\n    unordered_map<int, list<pair<int,int>>::iterator> map;\n    int capacity;\npublic:\n    LRUCache(int cap) : capacity(cap) {}\n    int get(int key) {\n        if(map.find(key) == map.end()) return -1;\n        auto it = map[key];\n        cache.splice(cache.begin(), cache, it);\n        return it->second;\n    }\n    void put(int key, int value) {\n        if(map.find(key) != map.end()) {\n            auto it = map[key];\n            it->second = value;\n            cache.splice(cache.begin(), cache, it);\n            return;\n        }\n        if(cache.size() == capacity) {\n            auto last = cache.back();\n            map.erase(last.first);\n            cache.pop_back();\n        }\n        cache.push_front({key, value});\n        map[key] = cache.begin();\n    }\n};",
    hint: "Recently used at front, least at back",
  },
  {
    id: "dsa_096",
    topicId: "cpp_dsa",
    question: "Flatten a multilevel doubly linked list.",
    mathSolution: "DFS traversal with next and child pointers",
    codeSolution:
      "Node* flatten(Node* head) {\n    Node *curr = head;\n    while(curr) {\n        if(curr->child) {\n            Node *next = curr->next;\n            Node *child = flatten(curr->child);\n            curr->next = child;\n            child->prev = curr;\n            curr->child = nullptr;\n            while(curr->next) curr = curr->next;\n            curr->next = next;\n            if(next) next->prev = curr;\n        }\n        curr = curr->next;\n    }\n    return head;\n}",
    hint: "Insert child list between current and next",
  },
  {
    id: "dsa_097",
    topicId: "cpp_dsa",
    question: "Clone a linked list with random pointers.",
    mathSolution: "Interweave original and copy nodes",
    codeSolution:
      "Node* copyRandomList(Node* head) {\n    if(!head) return nullptr;\n    Node *curr = head;\n    while(curr) {\n        Node *copy = new Node(curr->val);\n        copy->next = curr->next;\n        curr->next = copy;\n        curr = copy->next;\n    }\n    curr = head;\n    while(curr) {\n        if(curr->random) curr->next->random = curr->random->next;\n        curr = curr->next->next;\n    }\n    curr = head;\n    Node *dummy = new Node(0), *copyCurr = dummy;\n    while(curr) {\n        copyCurr->next = curr->next;\n        copyCurr = copyCurr->next;\n        curr->next = curr->next->next;\n        curr = curr->next;\n    }\n    return dummy->next;\n}",
    hint: "Create copy nodes adjacent to originals",
  },
  {
    id: "dsa_098",
    topicId: "cpp_dsa",
    question: "Merge k sorted linked lists.",
    mathSolution: "Min heap or divide and conquer",
    codeSolution:
      "ListNode* mergeKLists(vector<ListNode*>& lists) {\n    auto cmp = [](ListNode* a, ListNode* b) { return a->val > b->val; };\n    priority_queue<ListNode*, vector<ListNode*>, decltype(cmp)> pq(cmp);\n    for(auto list : lists) if(list) pq.push(list);\n    ListNode dummy(0);\n    ListNode *tail = &dummy;\n    while(!pq.empty()) {\n        ListNode *smallest = pq.top(); pq.pop();\n        tail->next = smallest;\n        tail = tail->next;\n        if(smallest->next) pq.push(smallest->next);\n    }\n    return dummy.next;\n}",
    hint: "Always pick smallest among all heads",
  },
  {
    id: "dsa_099",
    topicId: "cpp_dsa",
    question: "Rotate linked list by k positions.",
    mathSolution: "Find length, make circular, break at new head",
    codeSolution:
      "ListNode* rotateRight(ListNode* head, int k) {\n    if(!head || !head->next || k==0) return head;\n    int len = 1;\n    ListNode *tail = head;\n    while(tail->next) {\n        tail = tail->next;\n        len++;\n    }\n    k = k % len;\n    if(k == 0) return head;\n    ListNode *newTail = head;\n    for(int i=0; i<len-k-1; i++) newTail = newTail->next;\n    ListNode *newHead = newTail->next;\n    newTail->next = nullptr;\n    tail->next = head;\n    return newHead;\n}",
    hint: "Connect tail to head, then break at new position",
  },
  {
    id: "dsa_100",
    topicId: "cpp_dsa",
    question: "Reverse nodes in k-group.",
    mathSolution: "Reverse k nodes at a time recursively",
    codeSolution:
      "ListNode* reverseKGroup(ListNode* head, int k) {\n    ListNode *curr = head;\n    int count = 0;\n    while(curr && count < k) {\n        curr = curr->next;\n        count++;\n    }\n    if(count == k) {\n        ListNode *reversed = reverseKGroup(curr, k);\n        while(count-- > 0) {\n            ListNode *next = head->next;\n            head->next = reversed;\n            reversed = head;\n            head = next;\n        }\n        head = reversed;\n    }\n    return head;\n}",
    hint: "Check if k nodes exist, reverse them, connect to next group",
  },
);
