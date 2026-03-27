QuizData.questions.push(
  {
    id: "cpp_io_1",
    topicId: "cpp_io",
    question: "What is cout in C++? Explain with example.",
    mathSolution: "Console output",
    codeSolution:
      'cout (character output) is used to display output on console. It uses << operator.\n\ncout << "Hello World";\ncout << "Value: " << 42;',
    hint: "cout is used with << (insertion operator) to print text and values to console.",
  },
  {
    id: "cpp_io_2",
    topicId: "cpp_io",
    question: "What is cin in C++? Explain with example.",
    mathSolution: "Console input",
    codeSolution:
      'cin (character input) is used to take input from user. It uses >> operator.\n\nint age;\ncout << "Enter age: ";\ncin >> age;',
    hint: "cin is used with >> (extraction operator) to read user input from keyboard.",
  },
  {
    id: "cpp_io_3",
    topicId: "cpp_io",
    question:
      "What header file is required for input/output operations in C++?",
    mathSolution: "Header file",
    codeSolution:
      "#include <iostream> is required for input/output operations. It provides cin, cout, cerr, clog objects.",
    hint: "iostream header contains definitions for input/output streams.",
  },
  {
    id: "cpp_io_4",
    topicId: "cpp_io",
    question: "Write a program to take name and age as input and display them.",
    mathSolution: "Basic I/O program",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string name;\n    int age;\n    \n    cout << "Enter name: ";\n    cin >> name;\n    cout << "Enter age: ";\n    cin >> age;\n    \n    cout << "Name: " << name << ", Age: " << age << endl;\n    return 0;\n}',
    hint: "Use cin for input, cout for output, and include <string> for string variables.",
  },
  {
    id: "cpp_io_5",
    topicId: "cpp_io",
    question: "What is the difference between cout and cerr?",
    mathSolution: "Output streams",
    codeSolution:
      'cout is standard output stream (buffered).\ncerr is standard error stream (unbuffered).\n\ncout << "Normal message";\ncerr << "Error message";  // Immediate output',
    hint: "cout is buffered (may wait), cerr is unbuffered (prints immediately) for errors.",
  },
  {
    id: "cpp_io_6",
    topicId: "cpp_io",
    question: 'What is endl in C++? How is it different from "\\n"?',
    mathSolution: "Line break",
    codeSolution:
      'endl inserts newline and flushes output buffer.\n"\\n" only inserts newline without flushing.\n\ncout << "Hello" << endl;  // Newline + flush\ncout << "World\\n";        // Only newline',
    hint: "Both give newline, but endl also flushes the output buffer immediately.",
  },
  {
    id: "cpp_io_7",
    topicId: "cpp_io",
    question: "Write a program to take multiple inputs in one line using cin.",
    mathSolution: "Multiple inputs",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a, b, c;\n    cout << "Enter three numbers: ";\n    cin >> a >> b >> c;  // Input: 10 20 30\n    cout << "Sum: " << a + b + c << endl;\n    return 0;\n}',
    hint: "Chain cin >> var1 >> var2 >> var3 to read multiple values separated by spaces.",
  },
  {
    id: "cpp_io_8",
    topicId: "cpp_io",
    question: "How to read a string with spaces using cin?",
    mathSolution: "String with spaces",
    codeSolution:
      'cin >> stops at space. Use getline() to read spaces.\n\nstring fullName;\ncout << "Enter full name: ";\ngetline(cin, fullName);  // Reads until Enter\ncout << "Hello, " << fullName;',
    hint: "cin >> stops at space, getline(cin, str) reads entire line including spaces.",
  },
  {
    id: "cpp_io_9",
    topicId: "cpp_io",
    question:
      "Write a program demonstrating the difference between cin >> and getline().",
    mathSolution: "cin vs getline",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string first, last, full;\n    \n    cout << "Enter first name: ";\n    cin >> first;  // Reads until space\n    \n    cout << "Enter full name: ";\n    cin.ignore();  // Clear buffer\n    getline(cin, full);  // Reads entire line\n    \n    cout << "First: " << first << endl;\n    cout << "Full: " << full << endl;\n    return 0;\n}',
    hint: "cin >> leaves newline in buffer, so use cin.ignore() before getline().",
  },
  {
    id: "cpp_io_10",
    topicId: "cpp_io",
    question: "What is the purpose of cin.ignore()? Give example.",
    mathSolution: "Ignore characters",
    codeSolution:
      "cin.ignore() discards characters from input buffer.\n\nint age;\nstring name;\ncin >> age;\ncin.ignore();  // Ignore newline after age\ngetline(cin, name);  // Now reads name correctly",
    hint: "cin.ignore() clears leftover characters (like newline) from input buffer.",
  },
  {
    id: "cpp_io_11",
    topicId: "cpp_io",
    question: "How to format output using setw() in C++?",
    mathSolution: "Field width",
    codeSolution:
      '#include <iostream>\n#include <iomanip>\nusing namespace std;\nint main() {\n    cout << setw(10) << "Name" << setw(5) << "Age" << endl;\n    cout << setw(10) << "Alice" << setw(5) << 25 << endl;\n    cout << setw(10) << "Bob" << setw(5) << 30 << endl;\n    return 0;\n}',
    hint: "setw(n) sets minimum field width for next output, need <iomanip> header.",
  },
  {
    id: "cpp_io_12",
    topicId: "cpp_io",
    question: "How to set precision for floating point output?",
    mathSolution: "Precision",
    codeSolution:
      '#include <iostream>\n#include <iomanip>\nusing namespace std;\nint main() {\n    double pi = 3.14159265359;\n    cout << "Default: " << pi << endl;\n    cout << fixed << setprecision(2) << "2 decimals: " << pi << endl;\n    cout << setprecision(4) << "4 decimals: " << pi << endl;\n    return 0;\n}',
    hint: "setprecision(n) sets decimal places, fixed makes it for fixed notation.",
  },
  {
    id: "cpp_io_13",
    topicId: "cpp_io",
    question: "What is the difference between cout.put() and cout <<?",
    mathSolution: "Character output",
    codeSolution:
      "cout.put() outputs single character. << can output multiple values.\n\ncout.put('A');  // Outputs A\ncout << \"Hello\";  // Outputs string",
    hint: "cout.put() outputs one character, << can output any type (string, int, etc.).",
  },
  {
    id: "cpp_io_14",
    topicId: "cpp_io",
    question:
      "Write a program to read and display a character using cin.get().",
    mathSolution: "Character input",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    char ch;\n    cout << "Enter a character: ";\n    ch = cin.get();  // Reads even spaces/newlines\n    cout << "You entered: " << ch << endl;\n    return 0;\n}',
    hint: "cin.get() reads even whitespace characters (space, newline) unlike cin >>.",
  },
  {
    id: "cpp_io_15",
    topicId: "cpp_io",
    question: "How to read a line until a delimiter using getline()?",
    mathSolution: "Delimiter in getline",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string data;\n    cout << "Enter data (end with ,): ";\n    getline(cin, data, \',\');  // Reads until comma\n    cout << "You entered: " << data << endl;\n    return 0;\n}',
    hint: "getline(cin, str, delimiter) reads until specified delimiter character.",
  },
  {
    id: "cpp_io_16",
    topicId: "cpp_io",
    question:
      "What is the use of ios::left and ios::right in output formatting?",
    mathSolution: "Alignment",
    codeSolution:
      '#include <iostream>\n#include <iomanip>\nusing namespace std;\nint main() {\n    cout << left << setw(10) << "Left" << "|" << endl;\n    cout << right << setw(10) << "Right" << "|" << endl;\n    return 0;\n}',
    hint: "left/right align text within setw() field width.",
  },
  {
    id: "cpp_io_17",
    topicId: "cpp_io",
    question:
      "Write a program to display numbers in hexadecimal and octal format.",
    mathSolution: "Number base",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int num = 255;\n    cout << "Decimal: " << num << endl;\n    cout << "Hexadecimal: " << hex << num << endl;\n    cout << "Octal: " << oct << num << endl;\n    cout << "Back to decimal: " << dec << num << endl;\n    return 0;\n}',
    hint: "Use hex, oct, dec manipulators to change number base for output.",
  },
  {
    id: "cpp_io_18",
    topicId: "cpp_io",
    question: "How to display bool values as true/false instead of 1/0?",
    mathSolution: "Boolean formatting",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    bool flag1 = true, flag2 = false;\n    cout << "Default: " << flag1 << " " << flag2 << endl;\n    cout << boolalpha << "With boolalpha: " << flag1 << " " << flag2 << endl;\n    cout << noboolalpha << "Back: " << flag1 << " " << flag2 << endl;\n    return 0;\n}',
    hint: "boolalpha manipulator makes bool print as true/false instead of 1/0.",
  },
  {
    id: "cpp_io_19",
    topicId: "cpp_io",
    question: "What is the purpose of cin.fail()? Give example.",
    mathSolution: "Input validation",
    codeSolution:
      'cin.fail() returns true if last input failed.\n\nint num;\ncout << "Enter a number: ";\ncin >> num;\nif(cin.fail()) {\n    cout << "Invalid input!";\n    cin.clear();     // Clear error flags\n    cin.ignore(10000, \'\\n\');  // Clear buffer\n}',
    hint: "cin.fail() checks if input failed (e.g., letter entered for int), then clear and ignore.",
  },
  {
    id: "cpp_io_20",
    topicId: "cpp_io",
    question:
      "Write a program to demonstrate formatted output using manipulators.",
    mathSolution: "Formatted output",
    codeSolution:
      '#include <iostream>\n#include <iomanip>\nusing namespace std;\nint main() {\n    double amount = 1234.5678;\n    \n    cout << "Default: " << amount << endl;\n    cout << fixed << setprecision(2) << "Currency: $" << amount << endl;\n    cout << scientific << "Scientific: " << amount << endl;\n    cout << setprecision(4) << "Width 10: " << setw(10) << amount << endl;\n    cout << showpos << "With sign: " << amount << noshowpos << endl;\n    \n    return 0;\n}',
    hint: "Combine manipulators: fixed, setprecision, setw, scientific, showpos for formatting.",
  },
  {
    id: "cpp_io_21",
    topicId: "cpp_io",
    question: "What is the difference between cin.get() and cin.getline()?",
    mathSolution: "get vs getline",
    codeSolution:
      "cin.get() reads single character or array with delimiter but leaves delimiter.\ncin.getline() reads line and extracts delimiter.\n\nchar str1[50], str2[50];\ncin.get(str1, 50);  // Reads until \\n, leaves \\n in buffer\ncin.getline(str2, 50);  // Reads until \\n, removes \\n from buffer",
    hint: "get() leaves delimiter in buffer, getline() extracts and discards it.",
  },
  {
    id: "cpp_io_22",
    topicId: "cpp_io",
    question: "Write a program to read input until EOF (End of File).",
    mathSolution: "EOF handling",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int num;\n    int sum = 0;\n    \n    cout << "Enter numbers (Ctrl+Z/Ctrl+D to end):" << endl;\n    while(cin >> num) {\n        sum += num;\n    }\n    \n    cout << "Sum = " << sum << endl;\n    return 0;\n}',
    hint: "while(cin >> num) reads until EOF (Ctrl+Z on Windows, Ctrl+D on Unix).",
  },
  {
    id: "cpp_io_23",
    topicId: "cpp_io",
    question: "How to flush output buffer without using endl?",
    mathSolution: "Flushing",
    codeSolution:
      'Use flush manipulator to flush output buffer.\n\ncout << "Processing..." << flush;  // Flushes without newline\n// Do some work\ncout << "Done" << endl;',
    hint: "flush forces output to display immediately without adding newline.",
  },
  {
    id: "cpp_io_24",
    topicId: "cpp_io",
    question:
      "Write a program to create a simple calculator using cin and cout.",
    mathSolution: "Calculator",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    char op;\n    double a, b;\n    \n    cout << "Enter operator (+, -, *, /): ";\n    cin >> op;\n    cout << "Enter two numbers: ";\n    cin >> a >> b;\n    \n    switch(op) {\n        case \'+\': cout << a << " + " << b << " = " << a + b; break;\n        case \'-\': cout << a << " - " << b << " = " << a - b; break;\n        case \'*\': cout << a << " * " << b << " = " << a * b; break;\n        case \'/\': \n            if(b != 0)\n                cout << a << " / " << b << " = " << a / b;\n            else\n                cout << "Division by zero!";\n            break;\n        default: cout << "Invalid operator!";\n    }\n    cout << endl;\n    return 0;\n}',
    hint: "Read operator and numbers, use switch for operation, handle division by zero.",
  },
  {
    id: "cpp_io_25",
    topicId: "cpp_io",
    question:
      "What are the different I/O manipulators in C++? List them with examples.",
    mathSolution: "I/O manipulators",
    codeSolution:
      'Common manipulators:\nendl - newline + flush\nsetw() - field width\nsetprecision() - decimal precision\nfixed - fixed notation\nscientific - scientific notation\nboolalpha - bool as true/false\nshowpos - show + sign\nleft/right - alignment\nhex/oct/dec - number base\n\n#include <iostream>\n#include <iomanip>\nusing namespace std;\nint main() {\n    cout << setw(10) << left << "Name" << setw(10) << right << "Score" << endl;\n    cout << setfill(\'-\') << setw(20) << "" << setfill(\' \') << endl;\n    cout << fixed << setprecision(2) << showpos << 3.14159 << endl;\n    cout << hex << 255 << " " << oct << 255 << " " << dec << 255 << endl;\n    return 0;\n}',
    hint: "Manipulators modify how data is formatted: width, precision, base, alignment, etc.",
  },
);
