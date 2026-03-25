QuizData.questions.push(
  {
    id: "cpp_intro_1",
    topicId: "cpp_intro",
    question: "Who developed C++ language?",
    mathSolution: "History of C++",
    codeSolution:
      "Bjarne Stroustrup developed C++ at Bell Labs in 1979 as an extension of C language.",
    hint: "Think of a Danish computer scientist who worked at Bell Labs.",
  },
  {
    id: "cpp_intro_2",
    topicId: "cpp_intro",
    question: "What does C++ stand for?",
    mathSolution: "Name origin",
    codeSolution:
      'C++ is named after the C language, with "++" being the increment operator in C, indicating it is an enhanced version of C.',
    hint: "The ++ operator in C increments a value by 1 - so C++ is C + 1 (enhanced version).",
  },
  {
    id: "cpp_intro_3",
    topicId: "cpp_intro",
    question: 'Write a simple "Hello World" program in C++.',
    mathSolution: "Basic program structure",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello World" << endl;\n    return 0;\n}',
    hint: "Every C++ program needs iostream header, main function, and cout for output.",
  },
  {
    id: "cpp_intro_4",
    topicId: "cpp_intro",
    question: "What is the use of #include <iostream> in C++?",
    mathSolution: "Header files",
    codeSolution:
      "#include <iostream> is a preprocessor directive that includes the input/output stream library, allowing the program to use cout and cin for input/output operations.",
    hint: "It provides input/output functionality like cout and cin.",
  },
  {
    id: "cpp_intro_5",
    topicId: "cpp_intro",
    question: 'Explain the purpose of "using namespace std;" in C++.',
    mathSolution: "Namespace concept",
    codeSolution:
      "It tells the compiler to use the standard namespace, allowing us to use names like cout, cin, endl without writing std:: before them.",
    hint: "Without this, you'd need to write std::cout instead of just cout.",
  },
  {
    id: "cpp_intro_6",
    topicId: "cpp_intro",
    question: "What is the main() function in C++?",
    mathSolution: "Program entry point",
    codeSolution:
      "main() is the entry point of every C++ program. Execution starts from the main function. It returns an integer value (usually 0 for successful execution).",
    hint: "It's the first function that runs when you execute a C++ program.",
  },
  {
    id: "cpp_intro_7",
    topicId: "cpp_intro",
    question: "What are the basic data types in C++?",
    mathSolution: "Data types",
    codeSolution:
      "Basic data types include: int (integer), float (floating point), double (double precision), char (character), bool (boolean), void (valueless).",
    hint: "There are 6 fundamental types: int, float, double, char, bool, void.",
  },
  {
    id: "cpp_intro_8",
    topicId: "cpp_intro",
    question: "How do you declare a variable in C++? Give an example.",
    mathSolution: "Variable declaration",
    codeSolution:
      "int age = 25;\nfloat price = 99.99;\nchar grade = 'A';\nbool isPassed = true;",
    hint: "Syntax: data_type variable_name = value;",
  },
  {
    id: "cpp_intro_9",
    topicId: "cpp_intro",
    question: "What is the difference between cout and cin in C++?",
    mathSolution: "Input/Output streams",
    codeSolution:
      'cout (console output) is used for output using << operator. cin (console input) is used for input using >> operator.\n\nExample:\ncout << "Enter age: ";\ncin >> age;',
    hint: "cout uses << (insertion), cin uses >> (extraction).",
  },
  {
    id: "cpp_intro_10",
    topicId: "cpp_intro",
    question:
      "Write a program to take two numbers as input and print their sum.",
    mathSolution: "Basic input/output program",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a, b;\n    cout << "Enter two numbers: ";\n    cin >> a >> b;\n    cout << "Sum = " << a + b << endl;\n    return 0;\n}',
    hint: "Use cin >> for input, cout << for output, and + for addition.",
  },
  {
    id: "cpp_intro_11",
    topicId: "cpp_intro",
    question: "What is a comment in C++? Explain with examples.",
    mathSolution: "Comments",
    codeSolution:
      "Comments are used to explain code. They are ignored by compiler.\n\nSingle line: // This is a comment\nMulti-line: /* This is a\n   multi-line comment */",
    hint: "// for single line, /* */ for multiple lines.",
  },
  {
    id: "cpp_intro_12",
    topicId: "cpp_intro",
    question: "What is the use of endl in C++?",
    mathSolution: "Line break",
    codeSolution:
      'endl is a manipulator used to insert a new line and flush the output buffer. It is equivalent to "\\n" but also flushes the stream.\n\ncout << "Hello" << endl << "World";',
    hint: "It adds a newline and flushes the output buffer.",
  },
  {
    id: "cpp_intro_13",
    topicId: "cpp_intro",
    question: "Explain the concept of variables in C++.",
    mathSolution: "Variables",
    codeSolution:
      "Variables are containers for storing data values. Each variable has a data type and a name. Syntax: data_type variable_name = value;",
    hint: "Think of variables as named storage locations in memory.",
  },
  {
    id: "cpp_intro_14",
    topicId: "cpp_intro",
    question: "What are keywords in C++? Give 5 examples.",
    mathSolution: "Keywords",
    codeSolution:
      "Keywords are reserved words with special meaning in C++. Examples: int, float, if, else, while, for, return, class, public, private.",
    hint: "They are reserved words that cannot be used as variable names.",
  },
  {
    id: "cpp_intro_15",
    topicId: "cpp_intro",
    question:
      "Write a program to find the area of a rectangle (take length and breadth as input).",
    mathSolution: "Area = length × breadth",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    float length, breadth;\n    cout << "Enter length and breadth: ";\n    cin >> length >> breadth;\n    float area = length * breadth;\n    cout << "Area = " << area << endl;\n    return 0;\n}',
    hint: "Area formula: length * breadth, use float for decimal values.",
  },
  {
    id: "cpp_intro_16",
    topicId: "cpp_intro",
    question: "What is the difference between C and C++?",
    mathSolution: "Comparison",
    codeSolution:
      "1. C is procedural, C++ supports OOP\n2. C++ has features like classes, inheritance, polymorphism\n3. C++ supports function overloading and operator overloading\n4. C uses malloc/free, C++ uses new/delete",
    hint: "C++ adds object-oriented features to C.",
  },
  {
    id: "cpp_intro_17",
    topicId: "cpp_intro",
    question: "Explain the concept of tokens in C++.",
    mathSolution: "Tokens",
    codeSolution:
      "Tokens are the smallest individual units in a program. Types:\n1. Keywords (int, float)\n2. Identifiers (variable names)\n3. Constants (10, 3.14)\n4. Operators (+, -, *)\n5. Punctuators (;, {}, ())",
    hint: "Tokens are the building blocks of C++ code - like words in a sentence.",
  },
  {
    id: "cpp_intro_18",
    topicId: "cpp_intro",
    question:
      "What are identifiers in C++? What are the rules for naming them?",
    mathSolution: "Identifiers",
    codeSolution:
      "Identifiers are names given to variables, functions, etc.\nRules:\n1. Can contain letters, digits, underscore\n2. Must start with letter or underscore\n3. Case-sensitive\n4. Cannot use keywords\n5. No spaces or special characters",
    hint: "Valid: myVar, _count, num123. Invalid: 123num, my-var, int.",
  },
  {
    id: "cpp_intro_19",
    topicId: "cpp_intro",
    question: "Write a program to convert Celsius to Fahrenheit.",
    mathSolution: "F = (C × 9/5) + 32",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    float celsius;\n    cout << "Enter temperature in Celsius: ";\n    cin >> celsius;\n    float fahrenheit = (celsius * 9/5) + 32;\n    cout << "Fahrenheit = " << fahrenheit << endl;\n    return 0;\n}',
    hint: "Formula: (C × 9/5) + 32 = F",
  },
  {
    id: "cpp_intro_20",
    topicId: "cpp_intro",
    question: "What is the return type of main() function? Why?",
    mathSolution: "Return type",
    codeSolution:
      "main() returns int. It returns 0 to indicate successful execution, non-zero for errors. This value is returned to the operating system.",
    hint: "It tells the OS whether the program ran successfully (0) or had errors (non-zero).",
  },
  {
    id: "cpp_intro_21",
    topicId: "cpp_intro",
    question: "Explain the compilation process of a C++ program.",
    mathSolution: "Compilation steps",
    codeSolution:
      "1. Preprocessing: Handles #include, #define\n2. Compilation: Converts to assembly code\n3. Assembly: Converts to machine code\n4. Linking: Links with libraries to create executable",
    hint: "Four steps: Preprocessing → Compilation → Assembly → Linking",
  },
  {
    id: "cpp_intro_22",
    topicId: "cpp_intro",
    question: "What is the use of the return 0; statement in C++?",
    mathSolution: "Program termination",
    codeSolution:
      'return 0; indicates successful program completion. It returns control back to the operating system with a status code 0 meaning "success".',
    hint: "It signals successful completion to the operating system.",
  },
  {
    id: "cpp_intro_23",
    topicId: "cpp_intro",
    question: "Write a program to swap two numbers using a third variable.",
    mathSolution: "Swap logic",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5, b = 10, temp;\n    cout << "Before swap: a=" << a << ", b=" << b << endl;\n    temp = a;\n    a = b;\n    b = temp;\n    cout << "After swap: a=" << a << ", b=" << b << endl;\n    return 0;\n}',
    hint: "Use temporary variable: temp = a, a = b, b = temp",
  },
  {
    id: "cpp_intro_24",
    topicId: "cpp_intro",
    question: "What are the different types of comments in C++?",
    mathSolution: "Comments",
    codeSolution:
      "Two types:\n1. Single-line comments: // This is a comment\n2. Multi-line comments: /* This is a\n   multi-line comment */",
    hint: "// for single line, /* */ for multiple lines.",
  },
  {
    id: "cpp_intro_25",
    topicId: "cpp_intro",
    question: "Explain the structure of a basic C++ program.",
    mathSolution: "Program structure",
    codeSolution:
      "// 1. Header files\n#include <iostream>\nusing namespace std;\n\n// 2. Main function\nint main() {\n    // 3. Variable declarations\n    // 4. Program logic\n    // 5. Output\n    // 6. Return statement\n    return 0;\n}",
    hint: "Basic structure: headers → main function → variables → logic → output → return",
  },
);
