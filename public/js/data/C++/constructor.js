QuizData.questions.push(
  {
    id: "cpp_constructor_1",
    topicId: "cpp_constructors",
    question: "What is a constructor in C++? What are its characteristics?",
    mathSolution: "Constructor concept",
    codeSolution:
      "A constructor is a special member function that is automatically called when an object is created.\n\nCharacteristics:\n1. Same name as class\n2. No return type (not even void)\n3. Automatically invoked\n4. Can be overloaded\n5. Usually declared public",
    hint: "Constructor initializes objects automatically - same name as class, no return type.",
  },
  {
    id: "cpp_constructor_2",
    topicId: "cpp_constructors",
    question: "What are the different types of constructors in C++?",
    mathSolution: "Types of constructors",
    codeSolution:
      "1. Default constructor (no parameters)\n2. Parameterized constructor (with parameters)\n3. Copy constructor (creates object from another object)\n4. Move constructor (C++11, transfers resources)",
    hint: "4 types: Default, Parameterized, Copy, and Move (C++11).",
  },
  {
    id: "cpp_constructor_3",
    topicId: "cpp_constructors",
    question: "What is a default constructor? Give example.",
    mathSolution: "Default constructor",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    int length, width;\npublic:\n    // Default constructor\n    Rectangle() {\n        length = 0;\n        width = 0;\n        cout << "Default constructor called" << endl;\n    }\n    \n    int area() { return length * width; }\n};\n\nint main() {\n    Rectangle r;  // Default constructor called\n    cout << "Area: " << r.area() << endl;\n    return 0;\n}',
    hint: "Default constructor has no parameters. If you don't define any constructor, compiler provides one.",
  },
  {
    id: "cpp_constructor_4",
    topicId: "cpp_constructors",
    question: "What is a parameterized constructor? Give example.",
    mathSolution: "Parameterized constructor",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    int length, width;\npublic:\n    // Parameterized constructor\n    Rectangle(int l, int w) {\n        length = l;\n        width = w;\n        cout << "Parameterized constructor called" << endl;\n    }\n    \n    int area() { return length * width; }\n};\n\nint main() {\n    Rectangle r(5, 3);  // Parameterized constructor called\n    cout << "Area: " << r.area() << endl;\n    return 0;\n}',
    hint: "Parameterized constructor takes arguments to initialize object with specific values.",
  },
  {
    id: "cpp_constructor_5",
    topicId: "cpp_constructors",
    question: "What is a copy constructor? Give example.",
    mathSolution: "Copy constructor",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    int length, width;\npublic:\n    Rectangle(int l, int w) {\n        length = l;\n        width = w;\n    }\n    \n    // Copy constructor\n    Rectangle(const Rectangle &r) {\n        length = r.length;\n        width = r.width;\n        cout << "Copy constructor called" << endl;\n    }\n    \n    int area() { return length * width; }\n};\n\nint main() {\n    Rectangle r1(5, 3);\n    Rectangle r2 = r1;  // Copy constructor called\n    cout << "Area of r2: " << r2.area() << endl;\n    return 0;\n}',
    hint: "Copy constructor creates new object by copying existing object. Syntax: ClassName(const ClassName &obj)",
  },
  {
    id: "cpp_constructor_6",
    topicId: "cpp_constructors",
    question: "When is a copy constructor called?",
    mathSolution: "Copy constructor invocation",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Example {\npublic:\n    Example() { cout << "Default constructor" << endl; }\n    Example(const Example &e) { cout << "Copy constructor" << endl; }\n};\n\nvoid funcByValue(Example e) { }  // Pass by value\n\nExample funcReturn() {\n    Example e;\n    return e;  // Return by value\n}\n\nint main() {\n    Example e1;           // Default\n    Example e2 = e1;       // Copy (initialization)\n    Example e3(e1);        // Copy (direct initialization)\n    funcByValue(e1);       // Copy (pass by value)\n    Example e4 = funcReturn(); // Copy (return by value)\n    return 0;\n}',
    hint: "Copy constructor called when:\n1. Object passed by value\n2. Object returned by value\n3. Explicit copy: Example e2 = e1; or Example e3(e1);",
  },
  {
    id: "cpp_constructor_7",
    topicId: "cpp_constructors",
    question: "What is constructor overloading? Give example.",
    mathSolution: "Constructor overloading",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    int length, width;\npublic:\n    // Default constructor\n    Rectangle() {\n        length = 0;\n        width = 0;\n    }\n    \n    // Constructor for square\n    Rectangle(int side) {\n        length = side;\n        width = side;\n    }\n    \n    // Constructor for rectangle\n    Rectangle(int l, int w) {\n        length = l;\n        width = w;\n    }\n    \n    void display() {\n        cout << "Length: " << length << ", Width: " << width << endl;\n    }\n};\n\nint main() {\n    Rectangle r1;        // Default\n    Rectangle r2(5);      // Square\n    Rectangle r3(4, 3);   // Rectangle\n    \n    r1.display();\n    r2.display();\n    r3.display();\n    return 0;\n}',
    hint: "Multiple constructors with different parameters in same class.",
  },
  {
    id: "cpp_constructor_8",
    topicId: "cpp_constructors",
    question: "What is a constructor with default arguments? Give example.",
    mathSolution: "Constructor with default arguments",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    int length, width;\npublic:\n    // Constructor with default arguments\n    Rectangle(int l = 0, int w = 0) {\n        length = l;\n        width = w;\n    }\n    \n    int area() { return length * width; }\n};\n\nint main() {\n    Rectangle r1;        // Both default (0,0)\n    Rectangle r2(5);      // length=5, width=0\n    Rectangle r3(4, 3);   // both specified\n    \n    cout << r1.area() << " " << r2.area() << " " << r3.area() << endl;\n    return 0;\n}',
    hint: "Default arguments allow constructor to be called with fewer arguments. Defaults must be from rightmost parameters.",
  },
  {
    id: "cpp_constructor_9",
    topicId: "cpp_constructors",
    question: "What is an initializer list in constructor? Give example.",
    mathSolution: "Constructor initializer list",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    int length;\n    int width;\n    const int id;  // const member must be initialized in initializer list\npublic:\n    // Constructor with initializer list\n    Rectangle(int l, int w, int i) : length(l), width(w), id(i) {\n        // Body can be empty\n        cout << "Rectangle created with id: " << id << endl;\n    }\n    \n    void display() {\n        cout << "Length: " << length << ", Width: " << width << ", ID: " << id << endl;\n    }\n};\n\nint main() {\n    Rectangle r(5, 3, 100);\n    r.display();\n    return 0;\n}',
    hint: "Initializer list used to initialize const members, reference members, and for efficiency. Syntax: Constructor() : member1(val1), member2(val2) { }",
  },
  {
    id: "cpp_constructor_10",
    topicId: "cpp_constructors",
    question: "Why do we need an initializer list? When must it be used?",
    mathSolution: "Need for initializer list",
    codeSolution:
      "#include <iostream>\nusing namespace std;\n\nclass Example {\nprivate:\n    const int constMember;      // Must use initializer list\n    int &refMember;             // Must use initializer list\n    int normalMember;\npublic:\n    // Must use initializer list for const and reference members\n    Example(int x, int &r) : constMember(x), refMember(r), normalMember(0) {\n        // normalMember = 0;  // This would also work\n    }\n};\n\nint main() {\n    int a = 10;\n    Example e(5, a);\n    return 0;\n}",
    hint: "Initializer list is mandatory for:\n1. const members\n2. Reference members\n3. Base class constructors with parameters\n4. Member objects without default constructor",
  },
  {
    id: "cpp_constructor_11",
    topicId: "cpp_constructors",
    question: "What is a private constructor? When is it used?",
    mathSolution: "Private constructor",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Singleton {\nprivate:\n    static Singleton* instance;\n    \n    // Private constructor\n    Singleton() {\n        cout << "Singleton created" << endl;\n    }\n    \npublic:\n    static Singleton* getInstance() {\n        if(instance == nullptr) {\n            instance = new Singleton();\n        }\n        return instance;\n    }\n};\n\nSingleton* Singleton::instance = nullptr;\n\nint main() {\n    // Singleton s;  // Error: constructor is private\n    Singleton* s1 = Singleton::getInstance();\n    Singleton* s2 = Singleton::getInstance();\n    \n    cout << "s1 and s2 are " << (s1 == s2 ? "same" : "different") << endl;\n    return 0;\n}',
    hint: "Private constructor prevents creating objects outside class. Used in Singleton pattern, factory methods.",
  },
  {
    id: "cpp_constructor_12",
    topicId: "cpp_constructors",
    question: "What is a delegating constructor? (C++11) Give example.",
    mathSolution: "Delegating constructor",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    int length, width;\npublic:\n    // Target constructor\n    Rectangle(int l, int w) : length(l), width(w) {\n        cout << "Main constructor called" << endl;\n    }\n    \n    // Delegating constructors\n    Rectangle() : Rectangle(0, 0) {  // Delegates to main constructor\n        cout << "Default constructor delegating" << endl;\n    }\n    \n    Rectangle(int side) : Rectangle(side, side) {  // Delegates to main constructor\n        cout << "Square constructor delegating" << endl;\n    }\n    \n    void display() {\n        cout << length << "x" << width << endl;\n    }\n};\n\nint main() {\n    Rectangle r1;        // Delegates\n    Rectangle r2(5);      // Delegates\n    Rectangle r3(4, 3);   // Direct\n    \n    r1.display();\n    r2.display();\n    r3.display();\n    return 0;\n}',
    hint: "Delegating constructor calls another constructor of same class to avoid code duplication (C++11).",
  },
  {
    id: "cpp_constructor_13",
    topicId: "cpp_constructors",
    question: "What is a move constructor? (C++11) Give example.",
    mathSolution: "Move constructor",
    codeSolution:
      '#include <iostream>\n#include <cstring>\nusing namespace std;\n\nclass String {\nprivate:\n    char* data;\npublic:\n    // Constructor\n    String(const char* s) {\n        data = new char[strlen(s) + 1];\n        strcpy(data, s);\n        cout << "Constructor called for: " << data << endl;\n    }\n    \n    // Copy constructor\n    String(const String& other) {\n        data = new char[strlen(other.data) + 1];\n        strcpy(data, other.data);\n        cout << "Copy constructor called for: " << data << endl;\n    }\n    \n    // Move constructor (C++11)\n    String(String&& other) noexcept {\n        data = other.data;  // Steal resource\n        other.data = nullptr;  // Leave other in valid state\n        cout << "Move constructor called" << endl;\n    }\n    \n    ~String() {\n        delete[] data;\n        cout << "Destructor called" << endl;\n    }\n};\n\nint main() {\n    String s1("Hello");\n    String s2 = s1;                    // Copy constructor\n    String s3 = std::move(s1);          // Move constructor\n    return 0;\n}',
    hint: "Move constructor transfers resources from temporary object, avoiding expensive copies. Uses && and noexcept.",
  },
  {
    id: "cpp_constructor_14",
    topicId: "cpp_constructors",
    question:
      "What is the difference between copy constructor and assignment operator?",
    mathSolution: "Copy constructor vs Assignment",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Example {\npublic:\n    Example() { cout << "Default constructor" << endl; }\n    Example(const Example &e) { cout << "Copy constructor" << endl; }\n    Example& operator=(const Example &e) { \n        cout << "Assignment operator" << endl; \n        return *this;\n    }\n};\n\nint main() {\n    Example e1;           // Default\n    Example e2 = e1;       // Copy constructor (initialization)\n    Example e3(e1);        // Copy constructor (initialization)\n    \n    Example e4;            // Default\n    e4 = e1;               // Assignment operator (already initialized)\n    \n    return 0;\n}',
    hint: "Copy constructor creates new object, assignment operator assigns to existing object.",
  },
  {
    id: "cpp_constructor_15",
    topicId: "cpp_constructors",
    question: "What is a virtual constructor? Does C++ support it?",
    mathSolution: "Virtual constructor concept",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    Base() { cout << "Base constructor" << endl; }\n    virtual ~Base() {}\n    \n    // Virtual constructor workaround - clone function\n    virtual Base* clone() const {\n        return new Base(*this);\n    }\n};\n\nclass Derived : public Base {\npublic:\n    Derived() { cout << "Derived constructor" << endl; }\n    \n    // Virtual copy constructor\n    Derived* clone() const override {\n        return new Derived(*this);\n    }\n};\n\nint main() {\n    Base* b1 = new Derived();\n    Base* b2 = b1->clone();  // Creates Derived object\n    \n    delete b1;\n    delete b2;\n    return 0;\n}',
    hint: "C++ doesn't support virtual constructors directly, but you can use clone() pattern as workaround.",
  },
  {
    id: "cpp_constructor_16",
    topicId: "cpp_constructors",
    question: "What is the order of constructor call in inheritance?",
    mathSolution: "Constructor order in inheritance",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    Base() { cout << "Base constructor" << endl; }\n};\n\nclass Derived : public Base {\npublic:\n    Derived() { cout << "Derived constructor" << endl; }\n};\n\nclass GrandChild : public Derived {\npublic:\n    GrandChild() { cout << "GrandChild constructor" << endl; }\n};\n\nint main() {\n    cout << "Creating GrandChild object:" << endl;\n    GrandChild g;\n    return 0;\n}',
    hint: "Constructors are called from base to derived (base first, then derived).",
  },
  {
    id: "cpp_constructor_17",
    topicId: "cpp_constructors",
    question: "How to call base class constructor from derived class?",
    mathSolution: "Calling base constructor",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\nprivate:\n    int baseValue;\npublic:\n    Base(int x) : baseValue(x) {\n        cout << "Base constructor with value: " << baseValue << endl;\n    }\n};\n\nclass Derived : public Base {\nprivate:\n    int derivedValue;\npublic:\n    // Call base constructor in initializer list\n    Derived(int b, int d) : Base(b), derivedValue(d) {\n        cout << "Derived constructor with value: " << derivedValue << endl;\n    }\n};\n\nint main() {\n    Derived d(10, 20);\n    return 0;\n}',
    hint: "Call base class constructor using initializer list: Derived(...) : Base(...) { }",
  },
  {
    id: "cpp_constructor_18",
    topicId: "cpp_constructors",
    question: "What happens if you don't define any constructor in a class?",
    mathSolution: "Compiler-generated constructor",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Example {\npublic:\n    int x;\n    int y;\n    // No constructor defined - compiler provides default\n    \n    void display() {\n        cout << "x = " << x << ", y = " << y << endl;\n    }\n};\n\nint main() {\n    Example e;  // Compiler-generated default constructor called\n    e.display();  // x and y have garbage values\n    return 0;\n}',
    hint: "If no constructor is defined, compiler provides a default constructor (which does nothing).",
  },
  {
    id: "cpp_constructor_19",
    topicId: "cpp_constructors",
    question: "What is an explicit constructor? Why use it?",
    mathSolution: "Explicit constructor",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass String {\nprivate:\n    char* str;\npublic:\n    // explicit prevents implicit conversion\n    explicit String(int size) {\n        str = new char[size];\n        cout << "String created with size " << size << endl;\n    }\n    \n    String(const char* s) {\n        cout << "String created from C-string" << endl;\n    }\n};\n\nvoid func(String s) { }\n\nint main() {\n    String s1(10);     // OK: explicit call\n    String s2 = "Hello"; // OK: not explicit\n    \n    // String s3 = 10;  // Error: constructor is explicit\n    // func(10);        // Error: cannot convert int to String\n    \n    func(String(10));   // OK: explicit cast\n    return 0;\n}',
    hint: "explicit prevents implicit conversions using the constructor. Use to avoid unexpected conversions.",
  },
  {
    id: "cpp_constructor_20",
    topicId: "cpp_constructors",
    question: "What is a conversion constructor? Give example.",
    mathSolution: "Conversion constructor",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Complex {\nprivate:\n    double real, imag;\npublic:\n    // Conversion constructor (from double to Complex)\n    Complex(double r) : real(r), imag(0) {\n        cout << "Conversion constructor called" << endl;\n    }\n    \n    Complex(double r, double i) : real(r), imag(i) {}\n    \n    void display() {\n        cout << real << " + " << imag << "i" << endl;\n    }\n};\n\nint main() {\n    Complex c1(5, 3);    // Normal constructor\n    Complex c2 = 4.5;     // Conversion constructor called\n    \n    c1.display();\n    c2.display();\n    return 0;\n}',
    hint: "A constructor with single parameter can be used for implicit conversion from parameter type to class type.",
  },
  {
    id: "cpp_constructor_21",
    topicId: "cpp_constructors",
    question: "Can constructors be made private? What is the use?",
    mathSolution: "Private constructors",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass MyClass {\nprivate:\n    MyClass() {  // Private constructor\n        cout << "Private constructor called" << endl;\n    }\n    \npublic:\n    static MyClass create() {\n        return MyClass();  // Can access private constructor\n    }\n    \n    void show() {\n        cout << "MyClass object" << endl;\n    }\n};\n\nint main() {\n    // MyClass obj;  // Error: constructor is private\n    MyClass obj = MyClass::create();  // OK: using static factory method\n    obj.show();\n    return 0;\n}',
    hint: "Private constructors used in Singleton, factory methods, and builder patterns.",
  },
  {
    id: "cpp_constructor_22",
    topicId: "cpp_constructors",
    question: "What is a defaulted constructor? (C++11) Give example.",
    mathSolution: "Defaulted constructor",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Example {\npublic:\n    // Explicitly defaulted constructor\n    Example() = default;\n    \n    // Parameterized constructor\n    Example(int x) { cout << "Parameterized: " << x << endl; }\n    \n    void show() { cout << "Example object" << endl; }\n};\n\nint main() {\n    Example e1;      // Uses defaulted constructor\n    Example e2(10);   // Uses parameterized constructor\n    \n    e1.show();\n    e2.show();\n    return 0;\n}',
    hint: "= default asks compiler to generate default implementation even if other constructors exist.",
  },
  {
    id: "cpp_constructor_23",
    topicId: "cpp_constructors",
    question: "What is a deleted constructor? (C++11) Give example.",
    mathSolution: "Deleted constructor",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass NonCopyable {\npublic:\n    NonCopyable() = default;\n    \n    // Delete copy constructor\n    NonCopyable(const NonCopyable&) = delete;\n    \n    // Delete assignment operator\n    NonCopyable& operator=(const NonCopyable&) = delete;\n    \n    void show() { cout << "NonCopyable object" << endl; }\n};\n\nint main() {\n    NonCopyable obj1;\n    // NonCopyable obj2 = obj1;  // Error: copy constructor is deleted\n    // NonCopyable obj3(obj1);   // Error: copy constructor is deleted\n    \n    obj1.show();\n    return 0;\n}',
    hint: "= delete explicitly prevents usage of special member functions.",
  },
  {
    id: "cpp_constructor_24",
    topicId: "cpp_constructors",
    question:
      "What is the difference between shallow copy and deep copy in copy constructor?",
    mathSolution: "Shallow vs Deep copy",
    codeSolution:
      '#include <iostream>\n#include <cstring>\nusing namespace std;\n\nclass ShallowCopy {\npublic:\n    char* data;\n    ShallowCopy(const char* s) {\n        data = new char[strlen(s) + 1];\n        strcpy(data, s);\n    }\n    \n    // Compiler-provided copy constructor does shallow copy\n    // Just copies pointer, not the data\n    \n    ~ShallowCopy() { delete[] data; }\n};\n\nclass DeepCopy {\npublic:\n    char* data;\n    DeepCopy(const char* s) {\n        data = new char[strlen(s) + 1];\n        strcpy(data, s);\n    }\n    \n    // Deep copy constructor\n    DeepCopy(const DeepCopy& other) {\n        data = new char[strlen(other.data) + 1];\n        strcpy(data, other.data);\n    }\n    \n    ~DeepCopy() { delete[] data; }\n};\n\nint main() {\n    // Shallow copy - problems!\n    ShallowCopy s1("Hello");\n    ShallowCopy s2 = s1;  // Shallow copy - both point to same memory\n    // Destructor will be called twice on same memory - crash!\n    \n    // Deep copy - safe\n    DeepCopy d1("Hello");\n    DeepCopy d2 = d1;  // Deep copy - each has own memory\n    \n    return 0;\n}',
    hint: "Shallow copy copies pointers, deep copy allocates new memory and copies data. Always use deep copy for classes with dynamic memory.",
  },
  {
    id: "cpp_constructor_25",
    topicId: "cpp_constructors",
    question:
      "Write a complete program demonstrating multiple constructor types.",
    mathSolution: "Complete constructor demo",
    codeSolution:
      '#include <iostream>\n#include <cstring>\nusing namespace std;\n\nclass Student {\nprivate:\n    string name;\n    int age;\n    int* grades;  // Dynamic array\n    int numGrades;\n    static int objectCount;\n    \npublic:\n    // Default constructor\n    Student() : name("Unknown"), age(0), grades(nullptr), numGrades(0) {\n        objectCount++;\n        cout << "Default constructor called. Objects: " << objectCount << endl;\n    }\n    \n    // Parameterized constructor\n    Student(string n, int a) : name(n), age(a), grades(nullptr), numGrades(0) {\n        objectCount++;\n        cout << "Parameterized constructor called for " << name << endl;\n    }\n    \n    // Constructor with initializer list and dynamic allocation\n    Student(string n, int a, int* g, int ng) : name(n), age(a), numGrades(ng) {\n        grades = new int[numGrades];\n        for(int i = 0; i < numGrades; i++) {\n            grades[i] = g[i];\n        }\n        objectCount++;\n        cout << "Constructor with grades called for " << name << endl;\n    }\n    \n    // Copy constructor (deep copy)\n    Student(const Student& other) : name(other.name), age(other.age), numGrades(other.numGrades) {\n        if(other.grades != nullptr) {\n            grades = new int[numGrades];\n            for(int i = 0; i < numGrades; i++) {\n                grades[i] = other.grades[i];\n            }\n        } else {\n            grades = nullptr;\n        }\n        objectCount++;\n        cout << "Copy constructor called for " << name << endl;\n    }\n    \n    // Move constructor (C++11)\n    Student(Student&& other) noexcept \n        : name(std::move(other.name)), age(other.age), \n          grades(other.grades), numGrades(other.numGrades) {\n        other.grades = nullptr;\n        other.numGrades = 0;\n        objectCount++;\n        cout << "Move constructor called" << endl;\n    }\n    \n    // Destructor\n    ~Student() {\n        delete[] grades;\n        objectCount--;\n        cout << "Destructor called for " << name << ". Objects left: " << objectCount << endl;\n    }\n    \n    // Static member function\n    static int getObjectCount() { return objectCount; }\n    \n    // Display function\n    void display() const {\n        cout << "Name: " << name << ", Age: " << age << ", Grades: ";\n        if(grades != nullptr) {\n            for(int i = 0; i < numGrades; i++) {\n                cout << grades[i] << " ";\n            }\n        } else {\n            cout << "No grades";\n        }\n        cout << endl;\n    }\n};\n\nint Student::objectCount = 0;\n\nint main() {\n    cout << "--- Creating objects with different constructors ---" << endl;\n    \n    // Default constructor\n    Student s1;\n    s1.display();\n    \n    // Parameterized constructor\n    Student s2("Alice", 20);\n    s2.display();\n    \n    // Constructor with dynamic array\n    int grades[] = {85, 90, 78, 92};\n    Student s3("Bob", 22, grades, 4);\n    s3.display();\n    \n    cout << "\\n--- Copy constructor demo ---" << endl;\n    // Copy constructor\n    Student s4 = s3;\n    s4.display();\n    \n    cout << "\\n--- Move constructor demo ---" << endl;\n    // Move constructor\n    Student s5 = std::move(s2);\n    s5.display();\n    // s2 is now in moved-from state\n    \n    cout << "\\n--- Total objects created: " << Student::getObjectCount() << " ---" << endl;\n    cout << "\\n--- Objects going out of scope ---" << endl;\n    \n    return 0;\n}',
    hint: "This demonstrates: Default, Parameterized, Copy, Move constructors, destructor, static members, and object counting.",
  },
);
