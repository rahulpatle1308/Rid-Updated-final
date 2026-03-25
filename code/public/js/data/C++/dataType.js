QuizData.questions.push(
  {
    id: "cpp_datatype_1",
    topicId: "cpp_datatypes",
    question: "What are data types in C++? Why are they used?",
    mathSolution: "Data types concept",
    codeSolution:
      "Data types specify the type of data a variable can store. They determine:\n1. Memory allocation size\n2. Range of values\n3. Operations that can be performed",
    hint: "Data types tell the compiler what kind of data (numbers, characters, etc.) a variable will hold.",
  },
  {
    id: "cpp_datatype_2",
    topicId: "cpp_datatypes",
    question: "What are the basic data types in C++? List them.",
    mathSolution: "Basic data types",
    codeSolution:
      "int     - Integer numbers\nfloat   - Floating point numbers\ndouble  - Double precision float\nchar    - Single character\nbool    - Boolean (true/false)\nvoid    - Valueless",
    hint: "There are 6 fundamental types: int, float, double, char, bool, void.",
  },
  {
    id: "cpp_datatype_3",
    topicId: "cpp_datatypes",
    question: "What is the size and range of int data type?",
    mathSolution: "int properties",
    codeSolution:
      "Size: 4 bytes (32 bits) on most systems\nRange: -2,147,483,648 to 2,147,483,647\nUnsigned int range: 0 to 4,294,967,295",
    hint: "int is typically 4 bytes, range from -2^31 to 2^31-1.",
  },
  {
    id: "cpp_datatype_4",
    topicId: "cpp_datatypes",
    question: "Explain float and double data types with their sizes.",
    mathSolution: "Float vs Double",
    codeSolution:
      "float: 4 bytes, precision up to 7 decimal digits\ndouble: 8 bytes, precision up to 15 decimal digits\n\nfloat pi = 3.14159f;\ndouble precisePi = 3.14159265358979;",
    hint: "float (4 bytes) has less precision than double (8 bytes). Use f suffix for float literals.",
  },
  {
    id: "cpp_datatype_5",
    topicId: "cpp_datatypes",
    question: "What is the char data type? Give example.",
    mathSolution: "Character type",
    codeSolution:
      "char stores single character in 1 byte using ASCII values.\n\nchar grade = 'A';\nchar newline = '\\n';\nchar digit = '7';",
    hint: "char stores a single character in 1 byte using ASCII encoding.",
  },
  {
    id: "cpp_datatype_6",
    topicId: "cpp_datatypes",
    question: "What is the bool data type? What values can it store?",
    mathSolution: "Boolean type",
    codeSolution:
      "bool stores true or false values (1 byte).\n\nbool isPassed = true;\nbool isCompleted = false;\nbool result = (10 > 5);  // true",
    hint: "bool stores either true (1) or false (0), typically 1 byte.",
  },
  {
    id: "cpp_datatype_7",
    topicId: "cpp_datatypes",
    question: "Write a program to demonstrate all basic data types.",
    mathSolution: "Data types demo",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int age = 25;\n    float price = 99.99f;\n    double pi = 3.1415926535;\n    char grade = \'A\';\n    bool passed = true;\n    \n    cout << "int: " << age << endl;\n    cout << "float: " << price << endl;\n    cout << "double: " << pi << endl;\n    cout << "char: " << grade << endl;\n    cout << "bool: " << passed << endl;\n    return 0;\n}',
    hint: "Declare variables of each type, assign values, and print them.",
  },
  {
    id: "cpp_datatype_8",
    topicId: "cpp_datatypes",
    question: "What are modifiers in C++? Name them.",
    mathSolution: "Type modifiers",
    codeSolution:
      "Modifiers alter the properties of basic data types:\nsigned   - Can store both +ve and -ve\nunsigned - Can store only +ve\nshort    - Reduces size\nlong     - Increases size",
    hint: "Modifiers: signed, unsigned, short, long - they change size or sign of data types.",
  },
  {
    id: "cpp_datatype_9",
    topicId: "cpp_datatypes",
    question: "Explain signed and unsigned int with examples.",
    mathSolution: "Signed vs Unsigned",
    codeSolution:
      "signed int: Can store negative and positive (-2147483648 to 2147483647)\nunsigned int: Only positive (0 to 4294967295)\n\nsigned int a = -10;\nunsigned int b = 20;",
    hint: "signed can have negative values, unsigned only non-negative (doubles positive range).",
  },
  {
    id: "cpp_datatype_10",
    topicId: "cpp_datatypes",
    question: "What is the difference between short int and long int?",
    mathSolution: "Short vs Long",
    codeSolution:
      "short int: 2 bytes, range: -32,768 to 32,767\nlong int: 4 or 8 bytes, range: -2^31 to 2^31-1 or larger\nlong long int: 8 bytes, even larger range",
    hint: "short uses less memory (2 bytes), long uses more (4-8 bytes) for larger range.",
  },
  {
    id: "cpp_datatype_11",
    topicId: "cpp_datatypes",
    question:
      "Write a program to find the size of different data types using sizeof().",
    mathSolution: "sizeof operator",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Size of char: " << sizeof(char) << " byte" << endl;\n    cout << "Size of int: " << sizeof(int) << " bytes" << endl;\n    cout << "Size of float: " << sizeof(float) << " bytes" << endl;\n    cout << "Size of double: " << sizeof(double) << " bytes" << endl;\n    cout << "Size of bool: " << sizeof(bool) << " byte" << endl;\n    return 0;\n}',
    hint: "sizeof operator returns size in bytes. Common sizes: char=1, int=4, float=4, double=8.",
  },
  {
    id: "cpp_datatype_12",
    topicId: "cpp_datatypes",
    question:
      "What is type casting? Explain implicit and explicit type casting.",
    mathSolution: "Type conversion",
    codeSolution:
      "Type casting converts one data type to another.\n\nImplicit (automatic):\nint a = 10;\nfloat b = a;  // int to float\n\nExplicit (manual):\nfloat x = 10.5;\nint y = (int)x;  // C-style cast\nint z = int(x);  // Function-style cast",
    hint: "Implicit = automatic conversion, Explicit = manual conversion using cast operator.",
  },
  {
    id: "cpp_datatype_13",
    topicId: "cpp_datatypes",
    question: "Write a program demonstrating implicit type conversion.",
    mathSolution: "Implicit conversion",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a = 10;\n    float b = 5.5;\n    float result = a + b;  // int a converted to float\n    cout << "Result: " << result << endl;\n    \n    char ch = \'A\';\n    int ascii = ch;  // char to int\n    cout << "ASCII of A: " << ascii << endl;\n    return 0;\n}',
    hint: "Compiler automatically converts smaller type to larger type when needed.",
  },
  {
    id: "cpp_datatype_14",
    topicId: "cpp_datatypes",
    question: "Write a program demonstrating explicit type casting.",
    mathSolution: "Explicit conversion",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    float a = 10.7, b = 3.2;\n    int result = (int)a / (int)b;  // C-style cast\n    cout << "Result: " << result << endl;\n    \n    double pi = 3.14159;\n    int intPi = int(pi);  // Function-style cast\n    cout << "intPi: " << intPi << endl;\n    return 0;\n}',
    hint: "Use (type)value or type(value) for explicit conversion, may lose data.",
  },
  {
    id: "cpp_datatype_15",
    topicId: "cpp_datatypes",
    question: "What is the void data type? Where is it used?",
    mathSolution: "Void type",
    codeSolution:
      'void means "no value". Used in:\n1. Functions returning nothing: void func()\n2. Pointers: void* ptr (generic pointer)\n3. No parameters: int func(void)',
    hint: "void means 'nothing' - used for functions that don't return anything or generic pointers.",
  },
  {
    id: "cpp_datatype_16",
    topicId: "cpp_datatypes",
    question: "Explain wchar_t data type in C++.",
    mathSolution: "Wide character",
    codeSolution:
      "wchar_t stores wide characters (2 bytes) for Unicode/foreign language support.\n\nwchar_t ch = L'आ';\nwcout << ch;  // Wide character output",
    hint: "wchar_t is for wide characters (Unicode) - 2 bytes, use L prefix and wcout.",
  },
  {
    id: "cpp_datatype_17",
    topicId: "cpp_datatypes",
    question: "What are derived data types in C++? Give examples.",
    mathSolution: "Derived types",
    codeSolution:
      "Derived from basic types:\n1. Arrays: int arr[5];\n2. Pointers: int* ptr;\n3. References: int &ref = x;\n4. Functions: int func();",
    hint: "Derived types are built from basic types: arrays, pointers, references, functions.",
  },
  {
    id: "cpp_datatype_18",
    topicId: "cpp_datatypes",
    question: "What are user-defined data types in C++?",
    mathSolution: "User-defined types",
    codeSolution:
      "Types defined by user:\n1. class\n2. struct\n3. union\n4. enum\n\nenum Color { RED, GREEN, BLUE };\nstruct Point { int x; int y; };",
    hint: "User can create own types using class, struct, union, enum.",
  },
  {
    id: "cpp_datatype_19",
    topicId: "cpp_datatypes",
    question: "Explain enum data type with example.",
    mathSolution: "Enumeration",
    codeSolution:
      "enum assigns names to integer constants.\n\nenum Weekday { MON=1, TUE, WED, THU, FRI, SAT, SUN };\nWeekday today = WED;\ncout << today;  // Prints 3",
    hint: "enum creates named integer constants - first value 0 by default unless specified.",
  },
  {
    id: "cpp_datatype_20",
    topicId: "cpp_datatypes",
    question: "What is type inference? How is it done in C++?",
    mathSolution: "Auto keyword",
    codeSolution:
      'Type inference automatically deduces variable type using auto keyword (C++11).\n\nauto x = 10;        // int\nauto y = 3.14;      // double\nauto z = "Hello";   // const char*\nauto result = 10 + 2.5;  // double',
    hint: "auto keyword lets compiler deduce type from initializer - useful for complex types.",
  },
  {
    id: "cpp_datatype_21",
    topicId: "cpp_datatypes",
    question: "Write a program using auto keyword for type inference.",
    mathSolution: "Auto demo",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    auto a = 10;\n    auto b = 3.14159;\n    auto c = \'X\';\n    auto d = true;\n    \n    cout << typeid(a).name() << ": " << a << endl;\n    cout << typeid(b).name() << ": " << b << endl;\n    cout << typeid(c).name() << ": " << c << endl;\n    cout << typeid(d).name() << ": " << d << endl;\n    return 0;\n}',
    hint: "auto automatically determines type, typeid().name() shows the actual type.",
  },
  {
    id: "cpp_datatype_22",
    topicId: "cpp_datatypes",
    question:
      "What happens when you assign a larger data type to a smaller one?",
    mathSolution: "Data loss",
    codeSolution:
      "Data loss or overflow occurs. Called narrowing conversion.\n\nint x = 1000;\nchar y = x;  // Data loss (1000 > 255)\ncout << int(y);  // Prints some small value",
    hint: "Narrowing conversion may lose data - compiler may warn about this.",
  },
  {
    id: "cpp_datatype_23",
    topicId: "cpp_datatypes",
    question: 'What is the difference between 10, 10.0, and "10" in C++?',
    mathSolution: "Literal types",
    codeSolution:
      '10    - int literal\n10.0  - double literal\n"10"  - string literal (const char*)\n\ncout << typeid(10).name() << endl;    // int\ncout << typeid(10.0).name() << endl;  // double\ncout << typeid("10").name() << endl;  // char const[3]',
    hint: '10 is int, 10.0 is double, "10" is string (array of characters).',
  },
  {
    id: "cpp_datatype_24",
    topicId: "cpp_datatypes",
    question:
      "Write a program to check the limits of different data types using climits header.",
    mathSolution: "Data type limits",
    codeSolution:
      '#include <iostream>\n#include <climits>\nusing namespace std;\nint main() {\n    cout << "int max: " << INT_MAX << endl;\n    cout << "int min: " << INT_MIN << endl;\n    cout << "char max: " << CHAR_MAX << endl;\n    cout << "char min: " << CHAR_MIN << endl;\n    cout << "long max: " << LONG_MAX << endl;\n    cout << "short max: " << SHRT_MAX << endl;\n    return 0;\n}',
    hint: "climits header defines constants like INT_MAX, INT_MIN for type limits.",
  },
  {
    id: "cpp_datatype_25",
    topicId: "cpp_datatypes",
    question: "What are the advantages of proper data type selection?",
    mathSolution: "Benefits",
    codeSolution:
      "1. Memory efficiency (using appropriate size)\n2. Performance optimization\n3. Prevents data overflow/underflow\n4. Code clarity and maintainability\n5. Type safety at compile time",
    hint: "Choosing right type saves memory, prevents errors, and makes code clearer.",
  },
);
