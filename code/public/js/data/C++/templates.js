QuizData.questions.push(
  // ==================== FUNCTION TEMPLATES (8 questions) ====================
  {
    id: "cpp_template_1",
    topicId: "cpp_templates",
    question: "Create a function template to find maximum of two values.",
    mathSolution:
      "Template function that works with any data type supporting > operator",
    codeSolution:
      "#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nT getMax(T a, T b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    cout << getMax<int>(10, 20) << endl;        // 20\n    cout << getMax<double>(3.14, 2.72) << endl; // 3.14\n    cout << getMax<char>('A', 'Z') << endl;     // Z\n    return 0;\n}",
    hint: "Use template <typename T> before function",
  },
  {
    id: "cpp_template_2",
    topicId: "cpp_templates",
    question: "Create a function template to swap two values.",
    mathSolution: "Template function that swaps values of any type",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nvoid mySwap(T& a, T& b) {\n    T temp = a;\n    a = b;\n    b = temp;\n}\n\nint main() {\n    int x = 10, y = 20;\n    mySwap(x, y);\n    cout << "x: " << x << ", y: " << y << endl; // 20, 10\n    \n    double p = 3.14, q = 2.72;\n    mySwap(p, q);\n    cout << "p: " << p << ", q: " << q << endl; // 2.72, 3.14\n    return 0;\n}',
    hint: "Pass by reference to modify original variables",
  },
  {
    id: "cpp_template_3",
    topicId: "cpp_templates",
    question: "Create a function template to calculate average of array.",
    mathSolution: "Template works with different numeric types",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\ndouble average(T arr[], int size) {\n    T sum = 0;\n    for(int i = 0; i < size; i++) {\n        sum += arr[i];\n    }\n    return static_cast<double>(sum) / size;\n}\n\nint main() {\n    int intArr[] = {1, 2, 3, 4, 5};\n    double doubleArr[] = {1.1, 2.2, 3.3, 4.4};\n    \n    cout << "Average of ints: " << average(intArr, 5) << endl;\n    cout << "Average of doubles: " << average(doubleArr, 4) << endl;\n    return 0;\n}',
    hint: "Cast to double for precise division",
  },
  {
    id: "cpp_template_4",
    topicId: "cpp_templates",
    question: "Function template with multiple type parameters.",
    mathSolution: "Use multiple typename parameters for different types",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\ntemplate <typename T1, typename T2>\nvoid display(T1 a, T2 b) {\n    cout << "Value1: " << a << ", Value2: " << b << endl;\n}\n\nint main() {\n    display<int, double>(10, 3.14);\n    display<string, int>("Age", 25);\n    display<char, bool>(\'A\', true);\n    return 0;\n}',
    hint: "Separate type parameters with commas",
  },
  {
    id: "cpp_template_5",
    topicId: "cpp_templates",
    question: "Function template with default type.",
    mathSolution: "Specify default type for template parameter",
    codeSolution:
      "#include <iostream>\nusing namespace std;\n\ntemplate <typename T = int>\nT multiply(T a, T b) {\n    return a * b;\n}\n\nint main() {\n    cout << multiply(10, 20) << endl;      // uses int (default)\n    cout << multiply<double>(3.14, 2.0) << endl; // explicit double\n    return 0;\n}",
    hint: "Default type allows calling without angle brackets",
  },
  {
    id: "cpp_template_6",
    topicId: "cpp_templates",
    question: "Function template overloading.",
    mathSolution: "Overload templates with different parameters",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nvoid print(T value) {\n    cout << "Single: " << value << endl;\n}\n\ntemplate <typename T, typename U>\nvoid print(T a, U b) {\n    cout << "Two values: " << a << ", " << b << endl;\n}\n\nint main() {\n    print(10);\n    print(3.14, "hello");\n    return 0;\n}',
    hint: "Compiler picks the best match",
  },
  {
    id: "cpp_template_7",
    topicId: "cpp_templates",
    question: "Function template with non-type parameter.",
    mathSolution: "Use constant values as template parameters",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\ntemplate <typename T, int size>\nvoid printArray(T (&arr)[size]) {\n    for(int i = 0; i < size; i++) {\n        cout << arr[i] << " ";\n    }\n    cout << endl;\n}\n\nint main() {\n    int intArr[] = {1, 2, 3, 4, 5};\n    double doubleArr[] = {1.1, 2.2, 3.3};\n    \n    printArray(intArr);      // size deduced as 5\n    printArray(doubleArr);    // size deduced as 3\n    return 0;\n}',
    hint: "Non-type parameters must be compile-time constants",
  },
  {
    id: "cpp_template_8",
    topicId: "cpp_templates",
    question: "Function template specialization for specific type.",
    mathSolution: "Provide specialized implementation for certain type",
    codeSolution:
      '#include <iostream>\n#include <cstring>\nusing namespace std;\n\ntemplate <typename T>\nT getMax(T a, T b) {\n    return (a > b) ? a : b;\n}\n\n// Specialization for const char*\ntemplate <>\nconst char* getMax<const char*>(const char* a, const char* b) {\n    return (strcmp(a, b) > 0) ? a : b;\n}\n\nint main() {\n    cout << getMax(10, 20) << endl;                    // 20\n    cout << getMax("apple", "banana") << endl;        // "banana"\n    return 0;\n}',
    hint: "Use template <> for specialization",
  },

  // ==================== CLASS TEMPLATES (8 questions) ====================
  {
    id: "cpp_template_9",
    topicId: "cpp_templates",
    question: "Create a simple class template for a Pair.",
    mathSolution: "Class that stores two values of same type",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nclass Pair {\nprivate:\n    T first;\n    T second;\npublic:\n    Pair(T f, T s) : first(f), second(s) {}\n    \n    T getFirst() const { return first; }\n    T getSecond() const { return second; }\n    \n    void display() const {\n        cout << "(" << first << ", " << second << ")" << endl;\n    }\n};\n\nint main() {\n    Pair<int> p1(10, 20);\n    Pair<double> p2(3.14, 2.72);\n    Pair<string> p3("Hello", "World");\n    \n    p1.display();\n    p2.display();\n    p3.display();\n    return 0;\n}',
    hint: "Define class with template parameter T",
  },
  {
    id: "cpp_template_10",
    topicId: "cpp_templates",
    question: "Class template with multiple type parameters.",
    mathSolution: "Store two different types in a class",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\ntemplate <typename T1, typename T2>\nclass Pair {\nprivate:\n    T1 first;\n    T2 second;\npublic:\n    Pair(T1 f, T2 s) : first(f), second(s) {}\n    \n    T1 getFirst() const { return first; }\n    T2 getSecond() const { return second; }\n    \n    void display() const {\n        cout << "(" << first << ", " << second << ")" << endl;\n    }\n};\n\nint main() {\n    Pair<int, string> p1(1, "One");\n    Pair<string, double> p2("Pi", 3.14159);\n    \n    p1.display();\n    p2.display();\n    return 0;\n}',
    hint: "Use multiple template parameters",
  },
  {
    id: "cpp_template_11",
    topicId: "cpp_templates",
    question: "Class template with non-type parameters.",
    mathSolution: "Use constant values in template",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\ntemplate <typename T, int size>\nclass Array {\nprivate:\n    T arr[size];\npublic:\n    void set(int index, T value) {\n        if(index >= 0 && index < size)\n            arr[index] = value;\n    }\n    \n    T get(int index) const {\n        return (index >= 0 && index < size) ? arr[index] : T();\n    }\n    \n    int getSize() const { return size; }\n    \n    void display() const {\n        for(int i = 0; i < size; i++)\n            cout << arr[i] << " ";\n        cout << endl;\n    }\n};\n\nint main() {\n    Array<int, 5> intArr;\n    for(int i = 0; i < 5; i++)\n        intArr.set(i, i * 10);\n    intArr.display();\n    \n    Array<double, 3> doubleArr;\n    doubleArr.set(0, 3.14);\n    doubleArr.set(1, 2.72);\n    doubleArr.set(2, 1.41);\n    doubleArr.display();\n    \n    return 0;\n}',
    hint: "size must be compile-time constant",
  },
  {
    id: "cpp_template_12",
    topicId: "cpp_templates",
    question: "Class template with default type parameters.",
    mathSolution: "Provide default type for template parameter",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\n\ntemplate <typename T = int>\nclass Container {\nprivate:\n    T value;\npublic:\n    Container(T v) : value(v) {}\n    void display() const { cout << value << endl; }\n};\n\nint main() {\n    Container<> defaultInt(100);      // uses int default\n    Container<double> doubleVal(3.14); // explicit double\n    Container<string> strVal("Hello");\n    \n    defaultInt.display();\n    doubleVal.display();\n    strVal.display();\n    return 0;\n}',
    hint: "Empty angle brackets use default type",
  },
  {
    id: "cpp_template_13",
    topicId: "cpp_templates",
    question: "Template class with member function defined outside.",
    mathSolution: "Define member functions outside class with template syntax",
    codeSolution:
      "#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nclass Box {\nprivate:\n    T content;\npublic:\n    Box(T c);\n    T get() const;\n    void set(T c);\n};\n\n// Outside definitions\ntemplate <typename T>\nBox<T>::Box(T c) : content(c) {}\n\ntemplate <typename T>\nT Box<T>::get() const {\n    return content;\n}\n\ntemplate <typename T>\nvoid Box<T>::set(T c) {\n    content = c;\n}\n\nint main() {\n    Box<int> intBox(100);\n    cout << intBox.get() << endl;\n    intBox.set(200);\n    cout << intBox.get() << endl;\n    return 0;\n}",
    hint: "Each member needs template prefix when defined outside",
  },
  {
    id: "cpp_template_14",
    topicId: "cpp_templates",
    question: "Class template specialization.",
    mathSolution: "Specialize template for specific type",
    codeSolution:
      '#include <iostream>\n#include <cstring>\nusing namespace std;\n\n// Generic template\ntemplate <typename T>\nclass Comparator {\npublic:\n    static bool equals(T a, T b) {\n        return a == b;\n    }\n};\n\n// Specialization for const char*\ntemplate <>\nclass Comparator<const char*> {\npublic:\n    static bool equals(const char* a, const char* b) {\n        return strcmp(a, b) == 0;\n    }\n};\n\nint main() {\n    cout << Comparator<int>::equals(10, 10) << endl;           // 1\n    cout << Comparator<double>::equals(3.14, 2.72) << endl;    // 0\n    \n    const char* s1 = "hello";\n    const char* s2 = "hello";\n    const char* s3 = "world";\n    cout << Comparator<const char*>::equals(s1, s2) << endl;   // 1\n    cout << Comparator<const char*>::equals(s1, s3) << endl;   // 0\n    return 0;\n}',
    hint: "Use template <> for full specialization",
  },
  {
    id: "cpp_template_15",
    topicId: "cpp_templates",
    question: "Template template parameters.",
    mathSolution: "Template that accepts another template as parameter",
    codeSolution:
      '#include <iostream>\n#include <vector>\n#include <list>\nusing namespace std;\n\ntemplate <template <typename> class Container, typename T>\nclass Wrapper {\nprivate:\n    Container<T> container;\npublic:\n    void add(T item) {\n        container.push_back(item);\n    }\n    \n    void display() {\n        for(auto& item : container)\n            cout << item << " ";\n        cout << endl;\n    }\n};\n\nint main() {\n    Wrapper<vector, int> vecWrapper;\n    vecWrapper.add(10);\n    vecWrapper.add(20);\n    vecWrapper.add(30);\n    vecWrapper.display();\n    \n    Wrapper<list, string> listWrapper;\n    listWrapper.add("Hello");\n    listWrapper.add("World");\n    listWrapper.display();\n    \n    return 0;\n}',
    hint: "Template can accept other templates as parameters",
  },
  {
    id: "cpp_template_16",
    topicId: "cpp_templates",
    question: "Inheritance with template classes.",
    mathSolution: "Derived class inherits from template base",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\ntemplate <typename T>\nclass Base {\nprotected:\n    T value;\npublic:\n    Base(T v) : value(v) {}\n    virtual void display() {\n        cout << "Base: " << value << endl;\n    }\n};\n\n// Derived from specific instantiation\ntemplate <typename T>\nclass Derived : public Base<T> {\npublic:\n    Derived(T v) : Base<T>(v) {}\n    \n    void display() override {\n        cout << "Derived: " << this->value << endl;\n    }\n};\n\nint main() {\n    Base<int>* ptr = new Derived<int>(42);\n    ptr->display();  // Polymorphic call\n    delete ptr;\n    return 0;\n}',
    hint: "Use this-> or Base<T>:: to access inherited members",
  },

  // ==================== TEMPLATE ADVANCED CONCEPTS (5 questions) ====================
  {
    id: "cpp_template_17",
    topicId: "cpp_templates",
    question:
      "Variadic templates (C++11) - sum of arbitrary number of arguments.",
    mathSolution: "Recursive template that processes multiple arguments",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\n// Base case - single argument\ntemplate <typename T>\nT sum(T value) {\n    return value;\n}\n\n// Recursive variadic template\ntemplate <typename T, typename... Args>\nT sum(T first, Args... args) {\n    return first + sum(args...);\n}\n\nint main() {\n    cout << "Sum: " << sum(1, 2, 3, 4, 5) << endl;\n    cout << "Sum: " << sum(1.1, 2.2, 3.3) << endl;\n    cout << "Sum: " << sum(10, 20) << endl;\n    return 0;\n}',
    hint: "Use ... for parameter pack",
  },
  {
    id: "cpp_template_18",
    topicId: "cpp_templates",
    question: "Template type deduction and auto.",
    mathSolution: "C++17 class template argument deduction",
    codeSolution:
      '#include <iostream>\n#include <vector>\nusing namespace std;\n\ntemplate <typename T>\nclass Point {\npublic:\n    T x, y;\n    Point(T x, T y) : x(x), y(y) {}\n};\n\n// Deduction guide (C++17)\ntemplate <typename T>\nPoint(T, T) -> Point<T>;\n\nint main() {\n    // Before C++17: need explicit type\n    Point<int> p1(10, 20);\n    \n    // C++17: type deduced\n    Point p2(3.14, 2.72);     // deduces Point<double>\n    Point p3("Hello", "World"); // deduces Point<const char*>\n    \n    // Vector deduction\n    vector v1 = {1, 2, 3, 4, 5}; // vector<int>\n    \n    cout << p2.x << ", " << p2.y << endl;\n    return 0;\n}',
    hint: "C++17 can deduce template types from constructor arguments",
  },
  {
    id: "cpp_template_19",
    topicId: "cpp_templates",
    question: "Template template parameter with default container.",
    mathSolution: "Template that accepts container type with default",
    codeSolution:
      '#include <iostream>\n#include <vector>\n#include <deque>\nusing namespace std;\n\ntemplate <typename T, template <typename> class Container = vector>\nclass Stack {\nprivate:\n    Container<T> data;\npublic:\n    void push(T item) { data.push_back(item); }\n    T pop() {\n        T item = data.back();\n        data.pop_back();\n        return item;\n    }\n    bool empty() const { return data.empty(); }\n};\n\nint main() {\n    Stack<int> vecStack;          // uses vector by default\n    vecStack.push(10);\n    vecStack.push(20);\n    \n    Stack<string, deque> dequeStack; // uses deque\n    dequeStack.push("Hello");\n    dequeStack.push("World");\n    \n    while(!vecStack.empty())\n        cout << vecStack.pop() << " ";\n    cout << endl;\n    \n    return 0;\n}',
    hint: "Container template parameter with default",
  },
  {
    id: "cpp_template_20",
    topicId: "cpp_templates",
    question: "SFINAE (Substitution Failure Is Not An Error) with enable_if.",
    mathSolution: "Use enable_if to conditionally enable templates",
    codeSolution:
      '#include <iostream>\n#include <type_traits>\nusing namespace std;\n\n// Only enabled for integral types\ntemplate <typename T>\ntypename enable_if<is_integral<T>::value, T>::type\nprocess(T value) {\n    cout << "Processing integral: " << value << endl;\n    return value * 2;\n}\n\n// Only enabled for floating point types\ntemplate <typename T>\ntypename enable_if<is_floating_point<T>::value, T>::type\nprocess(T value) {\n    cout << "Processing floating: " << value << endl;\n    return value * 2.0;\n}\n\nint main() {\n    cout << process(10) << endl;      // integral version\n    cout << process(3.14) << endl;     // floating version\n    // process("hello");               // no matching function\n    return 0;\n}',
    hint: "enable_if controls template availability",
  },
  {
    id: "cpp_template_21",
    topicId: "cpp_templates",
    question: "Fold expressions (C++17) for variadic templates.",
    mathSolution: "Simplify variadic template operations",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\n// Fold expression examples\ntemplate <typename... Args>\nauto sum(Args... args) {\n    return (args + ...);  // unary right fold\n}\n\ntemplate <typename... Args>\nauto product(Args... args) {\n    return (... * args);  // unary left fold\n}\n\ntemplate <typename... Args>\nbool allTrue(Args... args) {\n    return (true && ... && args);  // binary fold\n}\n\ntemplate <typename... Args>\nvoid printAll(Args... args) {\n    (cout << ... << args) << endl;  // fold with cout\n}\n\nint main() {\n    cout << "Sum: " << sum(1, 2, 3, 4, 5) << endl;\n    cout << "Product: " << product(2, 3, 4) << endl;\n    cout << "All true: " << allTrue(true, true, true) << endl;\n    cout << "All true: " << allTrue(true, false, true) << endl;\n    printAll("Hello", " ", "World", "!", 2024);\n    return 0;\n}',
    hint: "Fold expressions simplify variadic template operations",
  },

  // ==================== TEMPLATE METAPROGRAMMING (4 questions) ====================
  {
    id: "cpp_template_22",
    topicId: "cpp_templates",
    question: "Compile-time factorial using template metaprogramming.",
    mathSolution: "Recursive template instantiation at compile time",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\n// Template metaprogramming for factorial\ntemplate <int N>\nstruct Factorial {\n    static const int value = N * Factorial<N-1>::value;\n};\n\n// Base case specialization\ntemplate <>\nstruct Factorial<0> {\n    static const int value = 1;\n};\n\nint main() {\n    cout << "Factorial of 5: " << Factorial<5>::value << endl;\n    cout << "Factorial of 10: " << Factorial<10>::value << endl;\n    \n    // All computed at compile time\n    constexpr int fact = Factorial<6>::value;\n    cout << "Factorial of 6: " << fact << endl;\n    return 0;\n}',
    hint: "Template instantiation happens at compile time",
  },
  {
    id: "cpp_template_23",
    topicId: "cpp_templates",
    question: "Compile-time Fibonacci using template metaprogramming.",
    mathSolution: "Recursive template for Fibonacci sequence",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\ntemplate <int N>\nstruct Fibonacci {\n    static const int value = Fibonacci<N-1>::value + Fibonacci<N-2>::value;\n};\n\ntemplate <>\nstruct Fibonacci<0> {\n    static const int value = 0;\n};\n\ntemplate <>\nstruct Fibonacci<1> {\n    static const int value = 1;\n};\n\nint main() {\n    cout << "Fibonacci(5): " << Fibonacci<5>::value << endl;   // 5\n    cout << "Fibonacci(6): " << Fibonacci<6>::value << endl;   // 8\n    cout << "Fibonacci(7): " << Fibonacci<7>::value << endl;   // 13\n    cout << "Fibonacci(10): " << Fibonacci<10>::value << endl; // 55\n    return 0;\n}',
    hint: "Specializations provide base cases",
  },
  {
    id: "cpp_template_24",
    topicId: "cpp_templates",
    question: "Compile-time prime number check.",
    mathSolution: "Template metaprogramming to check primality",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\n// Helper to check divisibility\ntemplate <int N, int D>\nstruct IsDivisible {\n    static const bool value = (N % D == 0) || IsDivisible<N, D-1>::value;\n};\n\ntemplate <int N>\nstruct IsDivisible<N, 1> {\n    static const bool value = false;\n};\n\n// Prime check\ntemplate <int N>\nstruct IsPrime {\n    static const bool value = !IsDivisible<N, N-1>::value;\n};\n\n// Specialization for small numbers\ntemplate <>\nstruct IsPrime<0> { static const bool value = false; };\n\ntemplate <>\nstruct IsPrime<1> { static const bool value = false; };\n\ntemplate <>\nstruct IsPrime<2> { static const bool value = true; };\n\nint main() {\n    cout << "Is 7 prime? " << IsPrime<7>::value << endl;\n    cout << "Is 12 prime? " << IsPrime<12>::value << endl;\n    cout << "Is 17 prime? " << IsPrime<17>::value << endl;\n    cout << "Is 21 prime? " << IsPrime<21>::value << endl;\n    return 0;\n}',
    hint: "Compile-time recursion for primality test",
  },
  {
    id: "cpp_template_25",
    topicId: "cpp_templates",
    question: "Type traits - check if type is pointer at compile time.",
    mathSolution: "Create custom type trait to check pointer",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\n// Primary template - not a pointer\ntemplate <typename T>\nstruct IsPointer {\n    static const bool value = false;\n};\n\n// Partial specialization for pointers\ntemplate <typename T>\nstruct IsPointer<T*> {\n    static const bool value = true;\n};\n\n// Specialization for const pointers\ntemplate <typename T>\nstruct IsPointer<const T*> {\n    static const bool value = true;\n};\n\n// Helper variable template (C++14)\ntemplate <typename T>\nconstexpr bool IsPointer_v = IsPointer<T>::value;\n\nint main() {\n    cout << "int: " << IsPointer<int>::value << endl;\n    cout << "int*: " << IsPointer<int*>::value << endl;\n    cout << "const char*: " << IsPointer<const char*>::value << endl;\n    cout << "double&: " << IsPointer<double&>::value << endl;\n    \n    // Using variable template\n    cout << "int* (C++14 style): " << IsPointer_v<int*> << endl;\n    return 0;\n}',
    hint: "Partial specialization matches pointer types",
  },
);
