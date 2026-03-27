QuizData.questions.push(
  {
    id: "cpp_variable_1",
    topicId: "cpp_variables",
    question: "What is a variable in C++? Explain with example.",
    mathSolution: "Variable concept",
    codeSolution:
      "A variable is a named storage location in memory that holds a value. Example:\nint age = 25;\nfloat price = 99.99;\nchar grade = 'A';",
    hint: "Think of a variable as a labeled container that stores data in memory.",
  },
  {
    id: "cpp_variable_2",
    topicId: "cpp_variables",
    question: "What are the rules for naming variables in C++?",
    mathSolution: "Naming conventions",
    codeSolution:
      "1. Can contain letters, digits, underscore\n2. Must start with letter or underscore\n3. Case-sensitive (age, Age, AGE are different)\n4. Cannot use keywords\n5. No spaces or special characters",
    hint: "Valid: myVar, _count, num123. Invalid: 123num, my-var, int, my var.",
  },
  {
    id: "cpp_variable_3",
    topicId: "cpp_variables",
    question:
      "How do you declare and initialize a variable in C++? Give 3 examples.",
    mathSolution: "Declaration & initialization",
    codeSolution:
      "int count = 10;           // Declaration + initialization\nfloat price;               // Declaration only\nprice = 99.99;             // Assignment\nchar grade = 'B';          // Character variable",
    hint: "Declaration: type name; Initialization: giving first value; Assignment: changing value.",
  },
  {
    id: "cpp_variable_4",
    topicId: "cpp_variables",
    question:
      "What is the difference between variable declaration and definition?",
    mathSolution: "Declaration vs Definition",
    codeSolution:
      "Declaration tells compiler about variable name and type. Definition allocates memory.\n\nextern int x;    // Declaration (no memory)\nint x = 10;      // Definition (memory allocated)",
    hint: "Declaration introduces name, definition reserves memory. extern is keyword for pure declaration.",
  },
  {
    id: "cpp_variable_5",
    topicId: "cpp_variables",
    question: "Explain local variables with an example.",
    mathSolution: "Local variables",
    codeSolution:
      "Local variables are declared inside a function and can only be used within that function.\n\nvoid func() {\n    int x = 10;    // Local variable\n    cout << x;\n}",
    hint: "Local variables exist only inside the block { } where they are declared.",
  },
  {
    id: "cpp_variable_6",
    topicId: "cpp_variables",
    question: "Explain global variables with an example.",
    mathSolution: "Global variables",
    codeSolution:
      "Global variables are declared outside all functions and can be accessed anywhere in the program.\n\nint globalVar = 100;    // Global variable\n\nint main() {\n    cout << globalVar;   // Accessible here\n    return 0;\n}",
    hint: "Global variables are declared outside any function and can be used throughout the program.",
  },
  {
    id: "cpp_variable_7",
    topicId: "cpp_variables",
    question: "What is the default value of local and global variables?",
    mathSolution: "Default values",
    codeSolution:
      "Global variables are automatically initialized to zero (0 for int, 0.0 for float, null for pointers).\nLocal variables have garbage values if not initialized.",
    hint: "Global → 0, Local → random garbage value (whatever was in that memory location).",
  },
  {
    id: "cpp_variable_8",
    topicId: "cpp_variables",
    question: "Write a program to demonstrate local and global variable scope.",
    mathSolution: "Variable scope",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint global = 10;    // Global\n\nint main() {\n    int local = 20;  // Local\n    cout << "Global: " << global << endl;\n    cout << "Local: " << local << endl;\n    return 0;\n}',
    hint: "Global can be accessed anywhere, local only inside main.",
  },
  {
    id: "cpp_variable_9",
    topicId: "cpp_variables",
    question: "What is a static variable? Explain with example.",
    mathSolution: "Static variables",
    codeSolution:
      'Static variables retain their value between function calls. They are initialized only once.\n\nvoid counter() {\n    static int count = 0;  // Static variable\n    count++;\n    cout << count << " ";\n}',
    hint: "Static variables keep their value even after function exits, initialized only once.",
  },
  {
    id: "cpp_variable_10",
    topicId: "cpp_variables",
    question: "Write a program to show that static variable retains its value.",
    mathSolution: "Static variable behavior",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nvoid func() {\n    static int x = 0;\n    int y = 0;\n    x++; y++;\n    cout << "Static: " << x << ", Non-static: " << y << endl;\n}\n\nint main() {\n    func();  // Static: 1, Non-static: 1\n    func();  // Static: 2, Non-static: 1\n    func();  // Static: 3, Non-static: 1\n    return 0;\n}',
    hint: "Static x increases each call, non-static y resets to 0 each time.",
  },
  {
    id: "cpp_variable_11",
    topicId: "cpp_variables",
    question: "What is the difference between static and global variables?",
    mathSolution: "Static vs Global",
    codeSolution:
      "Global variables can be accessed from any file using extern. Static variables (global scope) are limited to the same file they are declared in.",
    hint: "Global = accessible across files, static global = limited to current file only.",
  },
  {
    id: "cpp_variable_12",
    topicId: "cpp_variables",
    question: "Explain the concept of variable scope in C++.",
    mathSolution: "Variable scope",
    codeSolution:
      "Scope defines where a variable can be accessed:\n1. Local scope: Inside a block {}\n2. Global scope: Throughout program\n3. Function scope: Inside a function\n4. Class scope: Inside a class",
    hint: "Scope determines the region of program where variable is visible/accessible.",
  },
  {
    id: "cpp_variable_13",
    topicId: "cpp_variables",
    question: "What is a constant variable? How do you declare it?",
    mathSolution: "Constants",
    codeSolution:
      "Constant variables cannot be modified after initialization. Declared using const keyword.\n\nconst int MAX = 100;\nconst float PI = 3.14159;",
    hint: "Use const keyword before data type, value cannot be changed after initialization.",
  },
  {
    id: "cpp_variable_14",
    topicId: "cpp_variables",
    question: "Write a program to demonstrate constant variable.",
    mathSolution: "Constant usage",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    const int DAYS = 7;\n    // DAYS = 10;  // Error: cannot modify constant\n    cout << "Days in week: " << DAYS << endl;\n    return 0;\n}',
    hint: "Try to modify const variable - compiler will give error.",
  },
  {
    id: "cpp_variable_15",
    topicId: "cpp_variables",
    question: "What is a reference variable? Give an example.",
    mathSolution: "Reference variables",
    codeSolution:
      "Reference variable is an alias to another variable. It must be initialized at declaration.\n\nint x = 10;\nint &ref = x;  // ref is reference to x\nref = 20;      // Now x becomes 20",
    hint: "Reference is like a nickname/alias for an existing variable - both refer to same memory.",
  },
  {
    id: "cpp_variable_16",
    topicId: "cpp_variables",
    question: "Write a program to demonstrate reference variable.",
    mathSolution: "Reference example",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a = 5;\n    int &b = a;  // b is reference to a\n    cout << "a = " << a << ", b = " << b << endl;\n    b = 10;\n    cout << "After b=10, a = " << a << endl;\n    return 0;\n}',
    hint: "Changing b changes a because they refer to same memory location.",
  },
  {
    id: "cpp_variable_17",
    topicId: "cpp_variables",
    question: "What is the difference between reference variable and pointer?",
    mathSolution: "Reference vs Pointer",
    codeSolution:
      "1. Reference must be initialized, pointer can be declared without initialization\n2. Reference cannot be NULL, pointer can be NULL\n3. Reference cannot be reassigned, pointer can\n4. Reference uses same syntax as variable, pointer uses * and &",
    hint: "Reference is safer but less flexible than pointer.",
  },
  {
    id: "cpp_variable_18",
    topicId: "cpp_variables",
    question: "What are automatic variables in C++?",
    mathSolution: "Automatic variables",
    codeSolution:
      "Automatic variables (auto) are local variables that are automatically created when function is called and destroyed when function exits. All local variables are automatic by default.",
    hint: "Default local variables are 'automatic' - created and destroyed automatically.",
  },
  {
    id: "cpp_variable_19",
    topicId: "cpp_variables",
    question: "Explain register variable with example.",
    mathSolution: "Register variables",
    codeSolution:
      "Register variables suggest compiler to store variable in CPU register for faster access.\n\nregister int counter = 0;\nfor(register int i=0; i<1000; i++) {\n    // faster loop\n}",
    hint: "register is a hint to compiler for frequently used variables, may be stored in CPU register.",
  },
  {
    id: "cpp_variable_20",
    topicId: "cpp_variables",
    question: "What is variable shadowing in C++? Give example.",
    mathSolution: "Variable shadowing",
    codeSolution:
      'When a local variable has the same name as a global variable, the local variable "shadows" the global one.\n\nint x = 10;  // Global\nint main() {\n    int x = 20;  // Local shadows global\n    cout << x;   // Prints 20\n    return 0;\n}',
    hint: "Local variable with same name hides/overrides the global variable in its scope.",
  },
  {
    id: "cpp_variable_21",
    topicId: "cpp_variables",
    question:
      "How to access global variable when local variable has same name?",
    mathSolution: "Scope resolution",
    codeSolution:
      'Use scope resolution operator (::) to access global variable.\n\nint x = 10;  // Global\nint main() {\n    int x = 20;  // Local\n    cout << "Local: " << x << endl;\n    cout << "Global: " << ::x << endl;\n    return 0;\n}',
    hint: "Use :: (scope resolution operator) before variable name to access global version.",
  },
  {
    id: "cpp_variable_22",
    topicId: "cpp_variables",
    question: "What is an extern variable? Explain with example.",
    mathSolution: "Extern variables",
    codeSolution:
      "Extern variables are declared in one file and defined in another, allowing variable sharing across files.\n\n// File1.cpp\nint global = 100;\n\n// File2.cpp\nextern int global;  // Uses global from File1.cpp",
    hint: "extern tells compiler variable is defined in another file - used for sharing across files.",
  },
  {
    id: "cpp_variable_23",
    topicId: "cpp_variables",
    question:
      "Write a program to demonstrate multiple variables of same type in one line.",
    mathSolution: "Multiple declarations",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int a = 10, b = 20, c = 30;  // Multiple variables\n    cout << "a=" << a << ", b=" << b << ", c=" << c << endl;\n    return 0;\n}',
    hint: "Separate multiple variables with commas: type var1, var2, var3;",
  },
  {
    id: "cpp_variable_24",
    topicId: "cpp_variables",
    question: "What happens if you use an uninitialized local variable?",
    mathSolution: "Uninitialized variables",
    codeSolution:
      "Using uninitialized local variables leads to undefined behavior. They contain garbage values (whatever was previously in that memory location).\n\nint x;  // Contains garbage\ncout << x;  // Prints random value",
    hint: "Local variables start with garbage/random values - always initialize before use!",
  },
  {
    id: "cpp_variable_25",
    topicId: "cpp_variables",
    question:
      "Write a program to find size of different variable types using sizeof operator.",
    mathSolution: "sizeof operator",
    codeSolution:
      '#include <iostream>\nusing namespace std;\nint main() {\n    int i;\n    float f;\n    double d;\n    char c;\n    \n    cout << "Size of int: " << sizeof(i) << " bytes" << endl;\n    cout << "Size of float: " << sizeof(f) << " bytes" << endl;\n    cout << "Size of double: " << sizeof(d) << " bytes" << endl;\n    cout << "Size of char: " << sizeof(c) << " bytes" << endl;\n    \n    return 0;\n}',
    hint: "sizeof operator returns memory size in bytes. Typically: char=1, int=4, float=4, double=8.",
  },
);
