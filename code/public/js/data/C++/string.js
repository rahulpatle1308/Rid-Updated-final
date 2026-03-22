
QuizData.questions.push(
  {
    id: "cpp_string_1",
    topicId: "cpp_strings",
    question: "What is a string in C++? How do you declare it?",
    mathSolution: "String concept",
    codeSolution:
      'A string is a sequence of characters. In C++, there are two types:\n1. C-style strings: char str[] = "Hello";\n2. C++ string class: #include <string>\n   string str = "Hello";',
    hint: "C++ provides both C-style character arrays and the string class from <string> header.",
  },
  {
    id: "cpp_string_2",
    topicId: "cpp_strings",
    question: "What header file is required to use C++ strings?",
    mathSolution: "String header",
    codeSolution:
      "#include <string> is required to use the C++ string class.\n\n#include <iostream>\n#include <string>\nusing namespace std;",
    hint: "You need to include the <string> header to use string objects.",
  },
  {
    id: "cpp_string_3",
    topicId: "cpp_strings",
    question:
      "Write a program to input and display a string using C++ string class.",
    mathSolution: "Basic string I/O",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string name;\n    cout << "Enter your name: ";\n    cin >> name;\n    cout << "Hello, " << name << endl;\n    return 0;\n}',
    hint: "Use cin >> for single word input (stops at space).",
  },
  {
    id: "cpp_string_4",
    topicId: "cpp_strings",
    question: "How to read a string with spaces using getline()?",
    mathSolution: "String with spaces",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string fullName;\n    cout << "Enter full name: ";\n    getline(cin, fullName);\n    cout << "Hello, " << fullName << endl;\n    return 0;\n}',
    hint: "getline(cin, str) reads entire line including spaces until Enter.",
  },
  {
    id: "cpp_string_5",
    topicId: "cpp_strings",
    question: "How to find the length of a string in C++?",
    mathSolution: "String length",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string str = "Hello World";\n    cout << "Length: " << str.length() << endl;\n    cout << "Size: " << str.size() << endl;\n    return 0;\n}',
    hint: "Use .length() or .size() member functions (both return same value).",
  },
  {
    id: "cpp_string_6",
    topicId: "cpp_strings",
    question: "Write a program to concatenate two strings.",
    mathSolution: "String concatenation",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string firstName = "John";\n    string lastName = "Doe";\n    string fullName = firstName + " " + lastName;\n    cout << "Full name: " << fullName << endl;\n    return 0;\n}',
    hint: "Use + operator to concatenate strings.",
  },
  {
    id: "cpp_string_7",
    topicId: "cpp_strings",
    question: "How to compare two strings in C++?",
    mathSolution: "String comparison",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string str1 = "apple";\n    string str2 = "banana";\n    \n    if(str1 == str2) cout << "Equal";\n    else if(str1 < str2) cout << str1 << " comes before " << str2;\n    else cout << str1 << " comes after " << str2;\n    return 0;\n}',
    hint: "Use comparison operators (==, !=, <, >, <=, >=) for lexicographic comparison.",
  },
  {
    id: "cpp_string_8",
    topicId: "cpp_strings",
    question: "Write a program to access individual characters of a string.",
    mathSolution: "Character access",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string str = "Hello";\n    \n    // Using array index\n    for(int i=0; i<str.length(); i++) {\n        cout << str[i] << " ";\n    }\n    \n    // Using at() function\n    cout << "\\nFirst character: " << str.at(0) << endl;\n    return 0;\n}',
    hint: "Access characters using [index] or .at(index) (at() does bounds checking).",
  },
  {
    id: "cpp_string_9",
    topicId: "cpp_strings",
    question:
      "What is the difference between C-style strings and C++ string class?",
    mathSolution: "C-string vs C++ string",
    codeSolution:
      'C-style strings: char arrays ending with \'\\0\', need <cstring> functions.\nC++ strings: objects with member functions, dynamic size, safer.\n\nchar cstr[] = "Hello";  // C-style\nstring cppstr = "Hello"; // C++ string',
    hint: "C++ strings are objects with built-in functions, automatically managed memory.",
  },
  {
    id: "cpp_string_10",
    topicId: "cpp_strings",
    question: "Write a program to convert string to uppercase.",
    mathSolution: "Uppercase conversion",
    codeSolution:
      '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\nint main() {\n    string str = "Hello World";\n    for(int i=0; i<str.length(); i++) {\n        str[i] = toupper(str[i]);\n    }\n    cout << "Uppercase: " << str << endl;\n    return 0;\n}',
    hint: "Loop through each character and use toupper() from <cctype>.",
  },
  {
    id: "cpp_string_11",
    topicId: "cpp_strings",
    question: "Write a program to convert string to lowercase.",
    mathSolution: "Lowercase conversion",
    codeSolution:
      '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\nint main() {\n    string str = "Hello World";\n    for(int i=0; i<str.length(); i++) {\n        str[i] = tolower(str[i]);\n    }\n    cout << "Lowercase: " << str << endl;\n    return 0;\n}',
    hint: "Loop through each character and use tolower() from <cctype>.",
  },
  {
    id: "cpp_string_12",
    topicId: "cpp_strings",
    question: "How to reverse a string in C++?",
    mathSolution: "String reversal",
    codeSolution:
      '#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\nint main() {\n    string str = "Hello";\n    reverse(str.begin(), str.end());\n    cout << "Reversed: " << str << endl;\n    return 0;\n}',
    hint: "Use reverse() from <algorithm> with begin() and end() iterators.",
  },
  {
    id: "cpp_string_13",
    topicId: "cpp_strings",
    question: "Write a program to check if a string is palindrome.",
    mathSolution: "Palindrome check",
    codeSolution:
      '#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\nint main() {\n    string str = "madam";\n    string rev = str;\n    reverse(rev.begin(), rev.end());\n    \n    if(str == rev)\n        cout << str << " is palindrome";\n    else\n        cout << str << " is not palindrome";\n    return 0;\n}',
    hint: "Compare string with its reverse.",
  },
  {
    id: "cpp_string_14",
    topicId: "cpp_strings",
    question: "How to find a substring in a string?",
    mathSolution: "Substring search",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string str = "Hello World, Hello C++";\n    string substr = "Hello";\n    \n    size_t found = str.find(substr);\n    if(found != string::npos)\n        cout << "Found at index: " << found << endl;\n    else\n        cout << "Not found" << endl;\n    return 0;\n}',
    hint: "Use .find() which returns position or string::npos if not found.",
  },
  {
    id: "cpp_string_15",
    topicId: "cpp_strings",
    question: "Write a program to extract a substring from a string.",
    mathSolution: "Extract substring",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string str = "Hello World";\n    string sub = str.substr(6, 5);  // Start at 6, length 5\n    cout << "Substring: " << sub << endl;  // "World"\n    return 0;\n}',
    hint: "Use .substr(start_index, length) to extract substring.",
  },
  {
    id: "cpp_string_16",
    topicId: "cpp_strings",
    question: "How to insert a string into another string?",
    mathSolution: "String insertion",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string str = "Hello World";\n    str.insert(5, " Beautiful");\n    cout << str << endl;  // "Hello Beautiful World"\n    return 0;\n}',
    hint: "Use .insert(position, string) to insert at specified index.",
  },
  {
    id: "cpp_string_17",
    topicId: "cpp_strings",
    question: "How to replace a part of a string?",
    mathSolution: "String replacement",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string str = "Hello World";\n    str.replace(6, 5, "C++");  // Replace 5 chars at position 6 with "C++"\n    cout << str << endl;  // "Hello C++"\n    return 0;\n}',
    hint: "Use .replace(start, length, new_string) to replace portion.",
  },
  {
    id: "cpp_string_18",
    topicId: "cpp_strings",
    question: "How to erase characters from a string?",
    mathSolution: "String erasure",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string str = "Hello World";\n    str.erase(5, 6);  // Remove 6 chars from position 5\n    cout << str << endl;  // "Hello"\n    return 0;\n}',
    hint: "Use .erase(start, length) to remove characters.",
  },
  {
    id: "cpp_string_19",
    topicId: "cpp_strings",
    question: "Write a program to count vowels in a string.",
    mathSolution: "Count vowels",
    codeSolution:
      "#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\nint main() {\n    string str = \"Hello World\";\n    int count = 0;\n    for(char c : str) {\n        c = tolower(c);\n        if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')\n            count++;\n    }\n    cout << \"Vowels: \" << count << endl;\n    return 0;\n}",
    hint: "Convert each char to lowercase and check against vowels.",
  },
  {
    id: "cpp_string_20",
    topicId: "cpp_strings",
    question: "Write a program to count words in a string.",
    mathSolution: "Word count",
    codeSolution:
      '#include <iostream>\n#include <string>\n#include <sstream>\nusing namespace std;\nint main() {\n    string str = "Hello World from C++";\n    stringstream ss(str);\n    string word;\n    int count = 0;\n    while(ss >> word) {\n        count++;\n    }\n    cout << "Words: " << count << endl;\n    return 0;\n}',
    hint: "Use stringstream to extract words separated by spaces.",
  },
  {
    id: "cpp_string_21",
    topicId: "cpp_strings",
    question: "How to check if a string starts with a particular substring?",
    mathSolution: "Starts with check",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string str = "Hello World";\n    string prefix = "Hello";\n    \n    if(str.substr(0, prefix.length()) == prefix)\n        cout << "String starts with " << prefix << endl;\n    else\n        cout << "Does not start with " << prefix << endl;\n    return 0;\n}',
    hint: "Compare first n characters using substr(0, prefix.length()).",
  },
  {
    id: "cpp_string_22",
    topicId: "cpp_strings",
    question: "How to check if a string ends with a particular substring?",
    mathSolution: "Ends with check",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string str = "Hello World";\n    string suffix = "World";\n    \n    if(str.length() >= suffix.length() && \n       str.substr(str.length() - suffix.length()) == suffix)\n        cout << "String ends with " << suffix << endl;\n    else\n        cout << "Does not end with " << suffix << endl;\n    return 0;\n}',
    hint: "Compare last n characters using substr(length - suffix_len).",
  },
  {
    id: "cpp_string_23",
    topicId: "cpp_strings",
    question: "Write a program to remove all spaces from a string.",
    mathSolution: "Remove spaces",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string str = "Hello World from C++";\n    string result = "";\n    for(char c : str) {\n        if(c != \' \')\n            result += c;\n    }\n    cout << "Without spaces: " << result << endl;\n    return 0;\n}',
    hint: "Build new string by appending non-space characters.",
  },
  {
    id: "cpp_string_24",
    topicId: "cpp_strings",
    question: "How to convert a string to an integer?",
    mathSolution: "String to int",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string str = "123";\n    int num = stoi(str);\n    cout << "Number: " << num << ", Double: " << num * 2 << endl;\n    return 0;\n}',
    hint: "Use stoi() (string to int) function.",
  },
  {
    id: "cpp_string_25",
    topicId: "cpp_strings",
    question: "How to convert a string to a float/double?",
    mathSolution: "String to float",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string str = "3.14159";\n    double pi = stod(str);\n    float f = stof(str);\n    cout << "Double: " << pi << ", Float: " << f << endl;\n    return 0;\n}',
    hint: "Use stod() for double, stof() for float.",
  },
  {
    id: "cpp_string_26",
    topicId: "cpp_strings",
    question: "How to convert a number to a string?",
    mathSolution: "Number to string",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    int num = 123;\n    double pi = 3.14159;\n    \n    string str1 = to_string(num);\n    string str2 = to_string(pi);\n    \n    cout << "String1: " << str1 << ", String2: " << str2 << endl;\n    return 0;\n}',
    hint: "Use to_string() function to convert numbers to strings.",
  },
  {
    id: "cpp_string_27",
    topicId: "cpp_strings",
    question:
      "Write a program to find the frequency of each character in a string.",
    mathSolution: "Character frequency",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string str = "hello world";\n    int freq[256] = {0};\n    \n    for(char c : str) {\n        freq[c]++;\n    }\n    \n    for(int i=0; i<256; i++) {\n        if(freq[i] > 0 && isprint(i)) {\n            cout << (char)i << ": " << freq[i] << endl;\n        }\n    }\n    return 0;\n}',
    hint: "Use array of size 256 (ASCII), increment at ASCII value of character.",
  },
  {
    id: "cpp_string_28",
    topicId: "cpp_strings",
    question: "How to sort characters in a string?",
    mathSolution: "String sorting",
    codeSolution:
      '#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\nint main() {\n    string str = "hello";\n    sort(str.begin(), str.end());\n    cout << "Sorted: " << str << endl;  // "ehllo"\n    return 0;\n}',
    hint: "Use sort() from <algorithm> with begin() and end() iterators.",
  },
  {
    id: "cpp_string_29",
    topicId: "cpp_strings",
    question: "Write a program to remove duplicate characters from a string.",
    mathSolution: "Remove duplicates",
    codeSolution:
      '#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\nint main() {\n    string str = "hello";\n    string result = "";\n    \n    for(char c : str) {\n        if(result.find(c) == string::npos) {\n            result += c;\n        }\n    }\n    cout << "After removing duplicates: " << result << endl;\n    return 0;\n}',
    hint: "Build new string, only add character if not already present.",
  },
  {
    id: "cpp_string_30",
    topicId: "cpp_strings",
    question: "How to check if a string contains only digits?",
    mathSolution: "Digits only check",
    codeSolution:
      '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\nint main() {\n    string str = "12345";\n    bool isDigit = true;\n    \n    for(char c : str) {\n        if(!isdigit(c)) {\n            isDigit = false;\n            break;\n        }\n    }\n    \n    cout << (isDigit ? "Only digits" : "Contains non-digits") << endl;\n    return 0;\n}',
    hint: "Use isdigit() from <cctype> to check each character.",
  },
  {
    id: "cpp_string_31",
    topicId: "cpp_strings",
    question: "Write a program to capitalize first letter of each word.",
    mathSolution: "Title case",
    codeSolution:
      '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\nint main() {\n    string str = "hello world from c++";\n    \n    str[0] = toupper(str[0]);\n    for(int i=1; i<str.length(); i++) {\n        if(str[i-1] == \' \') {\n            str[i] = toupper(str[i]);\n        }\n    }\n    \n    cout << "Title case: " << str << endl;\n    return 0;\n}',
    hint: "Capitalize first character and any character after space.",
  },
  {
    id: "cpp_string_32",
    topicId: "cpp_strings",
    question: "How to find the longest word in a string?",
    mathSolution: "Longest word",
    codeSolution:
      '#include <iostream>\n#include <string>\n#include <sstream>\nusing namespace std;\nint main() {\n    string str = "Hello World from C++ programming";\n    stringstream ss(str);\n    string word, longest;\n    \n    while(ss >> word) {\n        if(word.length() > longest.length()) {\n            longest = word;\n        }\n    }\n    \n    cout << "Longest word: " << longest << endl;\n    return 0;\n}',
    hint: "Split into words using stringstream, track longest length.",
  },
  {
    id: "cpp_string_33",
    topicId: "cpp_strings",
    question: "Write a program to reverse each word in a string.",
    mathSolution: "Reverse words",
    codeSolution:
      '#include <iostream>\n#include <string>\n#include <sstream>\n#include <algorithm>\nusing namespace std;\nint main() {\n    string str = "Hello World from C++";\n    stringstream ss(str);\n    string word, result = "";\n    \n    while(ss >> word) {\n        reverse(word.begin(), word.end());\n        result += word + " ";\n    }\n    \n    cout << "Reversed words: " << result << endl;\n    return 0;\n}',
    hint: "Split into words, reverse each word, rebuild string.",
  },
  {
    id: "cpp_string_34",
    topicId: "cpp_strings",
    question: "How to check if two strings are anagrams?",
    mathSolution: "Anagram check",
    codeSolution:
      '#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\nint main() {\n    string str1 = "listen";\n    string str2 = "silent";\n    \n    sort(str1.begin(), str1.end());\n    sort(str2.begin(), str2.end());\n    \n    if(str1 == str2)\n        cout << "Anagrams" << endl;\n    else\n        cout << "Not anagrams" << endl;\n    return 0;\n}',
    hint: "Sort both strings, if equal they are anagrams.",
  },
  {
    id: "cpp_string_35",
    topicId: "cpp_strings",
    question:
      "Write a program to find the first non-repeating character in a string.",
    mathSolution: "First non-repeating",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string str = "hello";\n    int freq[256] = {0};\n    \n    for(char c : str) {\n        freq[c]++;\n    }\n    \n    for(char c : str) {\n        if(freq[c] == 1) {\n            cout << "First non-repeating: " << c << endl;\n            break;\n        }\n    }\n    return 0;\n}',
    hint: "Count frequencies, then find first character with count 1.",
  },
  {
    id: "cpp_string_36",
    topicId: "cpp_strings",
    question: "How to trim leading and trailing spaces from a string?",
    mathSolution: "String trim",
    codeSolution:
      '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\nint main() {\n    string str = "   Hello World   ";\n    int start = 0, end = str.length() - 1;\n    \n    while(start <= end && isspace(str[start])) start++;\n    while(end >= start && isspace(str[end])) end--;\n    \n    string trimmed = str.substr(start, end - start + 1);\n    cout << "\"" << trimmed << "\"" << endl;\n    return 0;\n}',
    hint: "Find first and last non-space character, extract substring.",
  },
  {
    id: "cpp_string_37",
    topicId: "cpp_strings",
    question:
      "Write a program to replace all occurrences of a character in a string.",
    mathSolution: "Replace character",
    codeSolution:
      "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string str = \"hello world\";\n    char oldChar = 'l', newChar = 'x';\n    \n    for(int i=0; i<str.length(); i++) {\n        if(str[i] == oldChar) {\n            str[i] = newChar;\n        }\n    }\n    \n    cout << \"After replacement: \" << str << endl;\n    return 0;\n}",
    hint: "Loop through string, replace matching characters.",
  },
  {
    id: "cpp_string_38",
    topicId: "cpp_strings",
    question: "How to split a string by a delimiter?",
    mathSolution: "String split",
    codeSolution:
      "#include <iostream>\n#include <string>\n#include <sstream>\n#include <vector>\nusing namespace std;\nint main() {\n    string str = \"apple,banana,orange\";\n    stringstream ss(str);\n    string item;\n    vector<string> tokens;\n    \n    while(getline(ss, item, ',')) {\n        tokens.push_back(item);\n    }\n    \n    for(string token : tokens) {\n        cout << token << endl;\n    }\n    return 0;\n}",
    hint: "Use getline() with delimiter to split into tokens.",
  },
  {
    id: "cpp_string_39",
    topicId: "cpp_strings",
    question:
      "Write a program to find all occurrences of a substring and print their positions.",
    mathSolution: "All substring positions",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string str = "hello hello world hello";\n    string sub = "hello";\n    size_t pos = str.find(sub);\n    \n    cout << "Found at positions: ";\n    while(pos != string::npos) {\n        cout << pos << " ";\n        pos = str.find(sub, pos + 1);\n    }\n    cout << endl;\n    return 0;\n}',
    hint: "Use find() in loop starting from last found position + 1.",
  },
  {
    id: "cpp_string_40",
    topicId: "cpp_strings",
    question: "How to check if a string is a valid number (integer or float)?",
    mathSolution: "Valid number check",
    codeSolution:
      '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\nint main() {\n    string str = "123.45";\n    bool valid = true;\n    bool decimalPoint = false;\n    \n    for(int i=0; i<str.length(); i++) {\n        if(i==0 && str[i] == \'-\') continue;  // Negative sign\n        if(str[i] == \'.\') {\n            if(decimalPoint) { valid = false; break; }\n            decimalPoint = true;\n        } else if(!isdigit(str[i])) {\n            valid = false;\n            break;\n        }\n    }\n    \n    cout << (valid ? "Valid number" : "Invalid number") << endl;\n    return 0;\n}',
    hint: "Check each character: digits, optional one decimal point, optional leading minus.",
  },
  {
    id: "cpp_string_41",
    topicId: "cpp_strings",
    question: "Write a program to compress a string (e.g., aaabb -> a3b2).",
    mathSolution: "String compression",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string str = "aaabbcccc";\n    string compressed = "";\n    int count = 1;\n    \n    for(int i=0; i<str.length(); i++) {\n        if(i+1 < str.length() && str[i] == str[i+1]) {\n            count++;\n        } else {\n            compressed += str[i] + to_string(count);\n            count = 1;\n        }\n    }\n    \n    cout << "Compressed: " << compressed << endl;\n    return 0;\n}',
    hint: "Count consecutive identical characters, append character and count.",
  },
  {
    id: "cpp_string_42",
    topicId: "cpp_strings",
    question: "How to find the longest palindrome substring in a string?",
    mathSolution: "Longest palindrome substring",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string str = "babad";\n    string longest = "";\n    \n    for(int i=0; i<str.length(); i++) {\n        // Odd length palindromes\n        int left = i, right = i;\n        while(left >= 0 && right < str.length() && str[left] == str[right]) {\n            string sub = str.substr(left, right-left+1);\n            if(sub.length() > longest.length()) longest = sub;\n            left--; right++;\n        }\n        \n        // Even length palindromes\n        left = i; right = i+1;\n        while(left >= 0 && right < str.length() && str[left] == str[right]) {\n            string sub = str.substr(left, right-left+1);\n            if(sub.length() > longest.length()) longest = sub;\n            left--; right++;\n        }\n    }\n    \n    cout << "Longest palindrome: " << longest << endl;\n    return 0;\n}',
    hint: "Expand around center for both odd and even length palindromes.",
  },
  {
    id: "cpp_string_43",
    topicId: "cpp_strings",
    question:
      "Write a program to find the most frequent character in a string.",
    mathSolution: "Most frequent character",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string str = "hello world";\n    int freq[256] = {0};\n    \n    for(char c : str) {\n        freq[c]++;\n    }\n    \n    char maxChar = str[0];\n    int maxFreq = 0;\n    \n    for(int i=0; i<256; i++) {\n        if(freq[i] > maxFreq) {\n            maxFreq = freq[i];\n            maxChar = i;\n        }\n    }\n    \n    cout << "Most frequent character: " << maxChar << " (" << maxFreq << " times)" << endl;\n    return 0;\n}',
    hint: "Count frequencies, find character with highest count.",
  },
  {
    id: "cpp_string_44",
    topicId: "cpp_strings",
    question: "How to check if a string is a rotation of another string?",
    mathSolution: "String rotation check",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string str1 = "waterbottle";\n    string str2 = "erbottlewat";\n    \n    string temp = str1 + str1;\n    if(str1.length() == str2.length() && temp.find(str2) != string::npos) {\n        cout << str2 << " is rotation of " << str1 << endl;\n    } else {\n        cout << "Not a rotation" << endl;\n    }\n    return 0;\n}',
    hint: "Concatenate string with itself, check if other string is substring.",
  },
  {
    id: "cpp_string_45",
    topicId: "cpp_strings",
    question: "Write a program to remove all occurrences of a given character.",
    mathSolution: "Remove character",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string str = "hello world";\n    char removeChar = \'l\';\n    string result = "";\n    \n    for(char c : str) {\n        if(c != removeChar) {\n            result += c;\n        }\n    }\n    \n    cout << "After removing \'" << removeChar << "\': " << result << endl;\n    return 0;\n}',
    hint: "Build new string by appending only characters that are not the target.",
  },
  {
    id: "cpp_string_46",
    topicId: "cpp_strings",
    question: "How to find the common prefix of two strings?",
    mathSolution: "Common prefix",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string str1 = "flower";\n    string str2 = "flow";\n    string prefix = "";\n    \n    int minLen = min(str1.length(), str2.length());\n    for(int i=0; i<minLen; i++) {\n        if(str1[i] == str2[i]) {\n            prefix += str1[i];\n        } else {\n            break;\n        }\n    }\n    \n    cout << "Common prefix: " << prefix << endl;\n    return 0;\n}',
    hint: "Compare characters until mismatch or end of shorter string.",
  },
  {
    id: "cpp_string_47",
    topicId: "cpp_strings",
    question:
      "Write a program to convert a string to integer without using stoi().",
    mathSolution: "String to int manual",
    codeSolution:
      '#include <iostream>\n#include <string>\n#include <cctype>\nusing namespace std;\nint main() {\n    string str = "12345";\n    int num = 0;\n    \n    for(char c : str) {\n        if(isdigit(c)) {\n            num = num * 10 + (c - \'0\');\n        }\n    }\n    \n    cout << "Number: " << num << endl;\n    return 0;\n}',
    hint: "For each digit, multiply current number by 10 and add digit value (c - '0').",
  },
  {
    id: "cpp_string_48",
    topicId: "cpp_strings",
    question:
      "How to find the length of the longest substring without repeating characters?",
    mathSolution: "Longest substring without repeating",
    codeSolution:
      '#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\nint main() {\n    string str = "abcabcbb";\n    int maxLen = 0;\n    string current = "";\n    \n    for(char c : str) {\n        size_t found = current.find(c);\n        if(found != string::npos) {\n            current = current.substr(found + 1);\n        }\n        current += c;\n        maxLen = max(maxLen, (int)current.length());\n    }\n    \n    cout << "Longest substring length: " << maxLen << endl;\n    return 0;\n}',
    hint: "Slide window, when repeat found, remove characters before first occurrence.",
  },
  {
    id: "cpp_string_49",
    topicId: "cpp_strings",
    question:
      "Write a program to check if two strings are one edit away (insert, remove, replace).",
    mathSolution: "One edit away",
    codeSolution:
      '#include <iostream>\n#include <string>\n#include <cmath>\nusing namespace std;\nint main() {\n    string s1 = "pale";\n    string s2 = "ple";\n    \n    int len1 = s1.length(), len2 = s2.length();\n    if(abs(len1 - len2) > 1) {\n        cout << "More than one edit away" << endl;\n        return 0;\n    }\n    \n    int edits = 0;\n    int i = 0, j = 0;\n    while(i < len1 && j < len2) {\n        if(s1[i] != s2[j]) {\n            edits++;\n            if(len1 > len2) i++;\n            else if(len2 > len1) j++;\n            else { i++; j++; }\n        } else {\n            i++; j++;\n        }\n        if(edits > 1) break;\n    }\n    \n    if(edits <= 1) cout << "One edit away" << endl;\n    else cout << "More than one edit away" << endl;\n    return 0;\n}',
    hint: "Handle replace (same length), insert (s1 longer), delete (s2 longer) cases.",
  },
  {
    id: "cpp_string_50",
    topicId: "cpp_strings",
    question:
      "Write a program to perform all string operations using a menu-driven approach.",
    mathSolution: "Complete string operations",
    codeSolution:
      '#include <iostream>\n#include <string>\n#include <algorithm>\n#include <cctype>\nusing namespace std;\nint main() {\n    string str;\n    int choice;\n    \n    cout << "Enter a string: ";\n    getline(cin, str);\n    \n    do {\n        cout << "\\nString Operations Menu:" << endl;\n        cout << "1. Find length" << endl;\n        cout << "2. Convert to uppercase" << endl;\n        cout << "3. Convert to lowercase" << endl;\n        cout << "4. Reverse string" << endl;\n        cout << "5. Check palindrome" << endl;\n        cout << "6. Count vowels and consonants" << endl;\n        cout << "7. Find character frequency" << endl;\n        cout << "8. Extract substring" << endl;\n        cout << "9. Replace character" << endl;\n        cout << "10. Find substring position" << endl;\n        cout << "0. Exit" << endl;\n        cout << "Enter choice: ";\n        cin >> choice;\n        cin.ignore();\n        \n        switch(choice) {\n            case 1:\n                cout << "Length: " << str.length() << endl;\n                break;\n                \n            case 2: {\n                string temp = str;\n                for(char &c : temp) c = toupper(c);\n                cout << "Uppercase: " << temp << endl;\n                break;\n            }\n            \n            case 3: {\n                string temp = str;\n                for(char &c : temp) c = tolower(c);\n                cout << "Lowercase: " << temp << endl;\n                break;\n            }\n            \n            case 4: {\n                string temp = str;\n                reverse(temp.begin(), temp.end());\n                cout << "Reversed: " << temp << endl;\n                break;\n            }\n            \n            case 5: {\n                string rev = str;\n                reverse(rev.begin(), rev.end());\n                if(str == rev)\n                    cout << "Palindrome" << endl;\n                else\n                    cout << "Not palindrome" << endl;\n                break;\n            }\n            \n            case 6: {\n                int vowels = 0, consonants = 0;\n                for(char c : str) {\n                    if(isalpha(c)) {\n                        c = tolower(c);\n                        if(c == \'a\' || c == \'e\' || c == \'i\' || c == \'o\' || c == \'u\')\n                            vowels++;\n                        else\n                            consonants++;\n                    }\n                }\n                cout << "Vowels: " << vowels << ", Consonants: " << consonants << endl;\n                break;\n            }\n            \n            case 7: {\n                int freq[256] = {0};\n                for(char c : str) freq[c]++;\n                for(int i=0; i<256; i++) {\n                    if(freq[i] > 0 && isprint(i)) {\n                        cout << (char)i << ": " << freq[i] << endl;\n                    }\n                }\n                break;\n            }\n            \n            case 8: {\n                int pos, len;\n                cout << "Enter start position and length: ";\n                cin >> pos >> len;\n                if(pos >= 0 && pos < str.length()) {\n                    string sub = str.substr(pos, len);\n                    cout << "Substring: " << sub << endl;\n                } else {\n                    cout << "Invalid position" << endl;\n                }\n                break;\n            }\n            \n            case 9: {\n                char oldChar, newChar;\n                cout << "Enter character to replace and new character: ";\n                cin >> oldChar >> newChar;\n                string temp = str;\n                for(char &c : temp) {\n                    if(c == oldChar) c = newChar;\n                }\n                cout << "After replacement: " << temp << endl;\n                break;\n            }\n            \n            case 10: {\n                string sub;\n                cout << "Enter substring to find: ";\n                getline(cin, sub);\n                size_t pos = str.find(sub);\n                if(pos != string::npos)\n                    cout << "Found at position: " << pos << endl;\n                else\n                    cout << "Not found" << endl;\n                break;\n            }\n            \n            case 0:\n                cout << "Exiting..." << endl;\n                break;\n                \n            default:\n                cout << "Invalid choice!" << endl;\n        }\n    } while(choice != 0);\n    \n    return 0;\n}',
    hint: "Use switch case with various string functions: length(), toupper(), tolower(), reverse(), find(), substr(), etc.",
  },
);