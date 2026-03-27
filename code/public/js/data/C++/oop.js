QuizData.questions.push(
  {
    id: "cpp_oop_1",
    topicId: "cpp_oop",
    question: "What is Object-Oriented Programming (OOP)?",
    mathSolution: "OOP concept",
    codeSolution:
      "OOP is a programming paradigm that organizes code into objects containing both data (attributes) and functions (methods). It models real-world entities as objects.",
    hint: "OOP treats data and functions together as objects, like real-world things.",
  },
  {
    id: "cpp_oop_2",
    topicId: "cpp_oop",
    question: "What are the main features of OOP?",
    mathSolution: "OOP features",
    codeSolution:
      "1. Encapsulation\n2. Inheritance\n3. Polymorphism\n4. Abstraction\n5. Classes and Objects",
    hint: "Remember: Encapsulation, Inheritance, Polymorphism, Abstraction - the 4 pillars of OOP.",
  },
  {
    id: "cpp_oop_3",
    topicId: "cpp_oop",
    question: "What is a class in C++? How do you define it?",
    mathSolution: "Class concept",
    codeSolution:
      "class ClassName {\n    // Access specifiers\n    // Data members\n    // Member functions\n};",
    hint: "A class is a blueprint for creating objects. It defines data and functions.",
  },
  {
    id: "cpp_oop_4",
    topicId: "cpp_oop",
    question: "What is an object in C++? How do you create one?",
    mathSolution: "Object concept",
    codeSolution:
      "ClassName objectName;  // Creating object\n\nExample:\nclass Car {\npublic:\n    string brand;\n    int year;\n};\n\nCar myCar;  // Object creation",
    hint: "An object is an instance of a class, like a specific car from the Car blueprint.",
  },
  {
    id: "cpp_oop_5",
    topicId: "cpp_oop",
    question: "Write a simple program to define a class and create an object.",
    mathSolution: "Basic class and object",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Student {\npublic:\n    string name;\n    int age;\n    \n    void display() {\n        cout << "Name: " << name << ", Age: " << age << endl;\n    }\n};\n\nint main() {\n    Student s1;\n    s1.name = "Alice";\n    s1.age = 20;\n    s1.display();\n    return 0;\n}',
    hint: "Define class with data members and member function, then create object and use it.",
  },
  {
    id: "cpp_oop_6",
    topicId: "cpp_oop",
    question: "What are access specifiers in C++? Name them.",
    mathSolution: "Access specifiers",
    codeSolution:
      "1. public: Accessible from anywhere\n2. private: Accessible only within class\n3. protected: Accessible within class and derived classes",
    hint: "Three specifiers: public (anyone), private (only class), protected (class and derived).",
  },
  {
    id: "cpp_oop_7",
    topicId: "cpp_oop",
    question:
      "Explain the difference between public and private access specifiers.",
    mathSolution: "Public vs Private",
    codeSolution:
      "class Example {\nprivate:\n    int x;  // Only accessible inside class\npublic:\n    int y;  // Accessible anywhere\n    void setX(int val) { x = val; }  // Public function to access private data\n};",
    hint: "Private members hidden from outside, public members accessible anywhere.",
  },
  {
    id: "cpp_oop_8",
    topicId: "cpp_oop",
    question: "What is encapsulation? Give an example.",
    mathSolution: "Encapsulation",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass BankAccount {\nprivate:\n    double balance;  // Hidden data\n\npublic:\n    void deposit(double amount) {\n        if(amount > 0) balance += amount;\n    }\n    \n    double getBalance() {\n        return balance;\n    }\n};\n\nint main() {\n    BankAccount acc;\n    acc.deposit(1000);\n    cout << "Balance: " << acc.getBalance() << endl;\n    return 0;\n}',
    hint: "Encapsulation bundles data and methods, hiding internal details. Data is private, access through public methods.",
  },
  {
    id: "cpp_oop_9",
    topicId: "cpp_oop",
    question: "What is abstraction? Give an example.",
    mathSolution: "Abstraction",
    codeSolution:
      "#include <iostream>\nusing namespace std;\n\nclass Calculator {\npublic:\n    int add(int a, int b) { return a + b; }\n    int multiply(int a, int b) { return a * b; }\n    // Internal implementation hidden from user\n};\n\nint main() {\n    Calculator calc;\n    cout << calc.add(5, 3) << endl;  // User only knows WHAT, not HOW\n    return 0;\n}",
    hint: "Abstraction shows only essential features and hides implementation details.",
  },
  {
    id: "cpp_oop_10",
    topicId: "cpp_oop",
    question: "What is the difference between a class and an object?",
    mathSolution: "Class vs Object",
    codeSolution:
      "Class: Blueprint/template (like a house plan)\nObject: Instance of class (like actual house built from plan)\n\nclass Car { };  // Class\nCar myCar;       // Object",
    hint: "Class is blueprint, object is real entity created from that blueprint.",
  },
  {
    id: "cpp_oop_11",
    topicId: "cpp_oop",
    question: "What is a constructor? What are its characteristics?",
    mathSolution: "Constructor concept",
    codeSolution:
      "Constructor is a special member function with same name as class, automatically called when object is created.\n\nCharacteristics:\n1. Same name as class\n2. No return type\n3. Automatically called\n4. Can be overloaded",
    hint: "Constructor initializes objects automatically when created.",
  },
  {
    id: "cpp_oop_12",
    topicId: "cpp_oop",
    question: "Write a program with a default constructor.",
    mathSolution: "Default constructor",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    int length, width;\npublic:\n    Rectangle() {  // Default constructor\n        length = 0;\n        width = 0;\n        cout << "Constructor called" << endl;\n    }\n    \n    int area() { return length * width; }\n};\n\nint main() {\n    Rectangle r;  // Constructor automatically called\n    cout << "Area: " << r.area() << endl;\n    return 0;\n}',
    hint: "Default constructor has no parameters, called automatically when object created.",
  },
  {
    id: "cpp_oop_13",
    topicId: "cpp_oop",
    question: "Write a program with a parameterized constructor.",
    mathSolution: "Parameterized constructor",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    int length, width;\npublic:\n    Rectangle(int l, int w) {  // Parameterized constructor\n        length = l;\n        width = w;\n    }\n    \n    int area() { return length * width; }\n};\n\nint main() {\n    Rectangle r(5, 3);  // Constructor with parameters\n    cout << "Area: " << r.area() << endl;\n    return 0;\n}',
    hint: "Parameterized constructor takes arguments to initialize object with specific values.",
  },
  {
    id: "cpp_oop_14",
    topicId: "cpp_oop",
    question: "What is a copy constructor? Give example.",
    mathSolution: "Copy constructor",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    int length, width;\npublic:\n    Rectangle(int l, int w) { length = l; width = w; }\n    \n    Rectangle(const Rectangle &r) {  // Copy constructor\n        length = r.length;\n        width = r.width;\n        cout << "Copy constructor called" << endl;\n    }\n    \n    int area() { return length * width; }\n};\n\nint main() {\n    Rectangle r1(5, 3);\n    Rectangle r2 = r1;  // Copy constructor called\n    cout << "Area: " << r2.area() << endl;\n    return 0;\n}',
    hint: "Copy constructor creates new object by copying existing object.",
  },
  {
    id: "cpp_oop_15",
    topicId: "cpp_oop",
    question: "What is a destructor? Give example.",
    mathSolution: "Destructor concept",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass MyClass {\npublic:\n    MyClass() { cout << "Constructor called" << endl; }\n    \n    ~MyClass() { cout << "Destructor called" << endl; }  // Destructor\n};\n\nint main() {\n    MyClass obj;\n    cout << "Inside main" << endl;\n    return 0;  // Destructor called when object goes out of scope\n}',
    hint: "Destructor (~className) is called automatically when object is destroyed.",
  },
  {
    id: "cpp_oop_16",
    topicId: "cpp_oop",
    question: "What is the difference between constructor and destructor?",
    mathSolution: "Constructor vs Destructor",
    codeSolution:
      "Constructor:\n- Same name as class\n- Called when object created\n- Can be overloaded\n- Allocates resources\n\nDestructor:\n- Same name with ~ prefix\n- Called when object destroyed\n- Cannot be overloaded\n- Releases resources",
    hint: "Constructor creates/initializes, destructor cleans up/destroys.",
  },
  {
    id: "cpp_oop_17",
    topicId: "cpp_oop",
    question: "What is 'this' pointer in C++? Give example.",
    mathSolution: "this pointer",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    int length, width;\npublic:\n    Rectangle(int length, int width) {\n        this->length = length;  // Using this to distinguish parameter from member\n        this->width = width;\n    }\n    \n    void display() {\n        cout << "Length: " << this->length << ", Width: " << this->width << endl;\n    }\n};\n\nint main() {\n    Rectangle r(5, 3);\n    r.display();\n    return 0;\n}',
    hint: "this is a pointer to the current object, used to refer to member variables.",
  },
  {
    id: "cpp_oop_18",
    topicId: "cpp_oop",
    question: "What is a static data member? Give example.",
    mathSolution: "Static data member",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Counter {\nprivate:\n    static int count;  // Static data member declaration\npublic:\n    Counter() { count++; }\n    static int getCount() { return count; }\n};\n\nint Counter::count = 0;  // Definition and initialization\n\nint main() {\n    Counter c1, c2, c3;\n    cout << "Objects created: " << Counter::getCount() << endl;\n    return 0;\n}',
    hint: "Static members are shared by all objects of the class.",
  },
  {
    id: "cpp_oop_19",
    topicId: "cpp_oop",
    question: "What is a static member function? Give example.",
    mathSolution: "Static member function",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Math {\npublic:\n    static int add(int a, int b) {  // Static function\n        return a + b;\n    }\n    \n    static int multiply(int a, int b) {\n        return a * b;\n    }\n};\n\nint main() {\n    // Call static functions without object\n    cout << "Sum: " << Math::add(5, 3) << endl;\n    cout << "Product: " << Math::multiply(5, 3) << endl;\n    return 0;\n}',
    hint: "Static functions can be called without creating object, using ClassName::function().",
  },
  {
    id: "cpp_oop_20",
    topicId: "cpp_oop",
    question: "What is a friend function? Give example.",
    mathSolution: "Friend function",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Box {\nprivate:\n    int length;\npublic:\n    Box(int l) : length(l) {}\n    friend void displayLength(Box b);  // Friend function declaration\n};\n\nvoid displayLength(Box b) {  // Friend function definition\n    cout << "Length: " << b.length << endl;  // Accessing private member\n}\n\nint main() {\n    Box b(10);\n    displayLength(b);\n    return 0;\n}',
    hint: "Friend function is not a member but can access private members of class.",
  },
  {
    id: "cpp_oop_21",
    topicId: "cpp_oop",
    question: "What is a friend class? Give example.",
    mathSolution: "Friend class",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass A {\nprivate:\n    int secret;\npublic:\n    A(int s) : secret(s) {}\n    friend class B;  // Class B is friend\n};\n\nclass B {\npublic:\n    void showSecret(A &obj) {\n        cout << "Secret: " << obj.secret << endl;  // Accessing private of A\n    }\n};\n\nint main() {\n    A a(42);\n    B b;\n    b.showSecret(a);\n    return 0;\n}',
    hint: "Friend class can access private members of another class.",
  },
  {
    id: "cpp_oop_22",
    topicId: "cpp_oop",
    question: "What is inheritance? Why is it used?",
    mathSolution: "Inheritance concept",
    codeSolution:
      "Inheritance allows a class to inherit properties and methods from another class.\n\nBenefits:\n1. Code reusability\n2. Establishes parent-child relationship\n3. Method overriding\n4. Extensibility",
    hint: "Inheritance = creating new classes from existing ones (like child inherits from parent).",
  },
  {
    id: "cpp_oop_23",
    topicId: "cpp_oop",
    question: "What are the different types of inheritance in C++?",
    mathSolution: "Types of inheritance",
    codeSolution:
      "1. Single inheritance\n2. Multiple inheritance\n3. Multilevel inheritance\n4. Hierarchical inheritance\n5. Hybrid inheritance",
    hint: "5 types: Single, Multiple, Multilevel, Hierarchical, Hybrid.",
  },
  {
    id: "cpp_oop_24",
    topicId: "cpp_oop",
    question: "Write a program to demonstrate single inheritance.",
    mathSolution: "Single inheritance",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Animal {  // Base class\npublic:\n    void eat() { cout << "Eating..." << endl; }\n};\n\nclass Dog : public Animal {  // Derived class\npublic:\n    void bark() { cout << "Barking..." << endl; }\n};\n\nint main() {\n    Dog d;\n    d.eat();   // Inherited from Animal\n    d.bark();  // Own function\n    return 0;\n}',
    hint: "Single inheritance: one derived class inherits from one base class.",
  },
  {
    id: "cpp_oop_25",
    topicId: "cpp_oop",
    question: "Write a program to demonstrate multilevel inheritance.",
    mathSolution: "Multilevel inheritance",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Animal {\npublic:\n    void eat() { cout << "Eating..." << endl; }\n};\n\nclass Mammal : public Animal {\npublic:\n    void breathe() { cout << "Breathing..." << endl; }\n};\n\nclass Dog : public Mammal {\npublic:\n    void bark() { cout << "Barking..." << endl; }\n};\n\nint main() {\n    Dog d;\n    d.eat();     // From Animal\n    d.breathe(); // From Mammal\n    d.bark();    // Own\n    return 0;\n}',
    hint: "Multilevel: A -> B -> C (C inherits from B which inherits from A).",
  },
  {
    id: "cpp_oop_26",
    topicId: "cpp_oop",
    question: "Write a program to demonstrate multiple inheritance.",
    mathSolution: "Multiple inheritance",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Printer {\npublic:\n    void print() { cout << "Printing..." << endl; }\n};\n\nclass Scanner {\npublic:\n    void scan() { cout << "Scanning..." << endl; }\n};\n\nclass AllInOne : public Printer, public Scanner {\npublic:\n    void copy() { cout << "Copying..." << endl; }\n};\n\nint main() {\n    AllInOne device;\n    device.print();  // From Printer\n    device.scan();   // From Scanner\n    device.copy();   // Own\n    return 0;\n}',
    hint: "Multiple inheritance: derived class inherits from multiple base classes.",
  },
  {
    id: "cpp_oop_27",
    topicId: "cpp_oop",
    question: "What are the different access modes in inheritance?",
    mathSolution: "Inheritance access modes",
    codeSolution:
      "class Derived : public Base    // public inheritance\nclass Derived : protected Base // protected inheritance\nclass Derived : private Base   // private inheritance\n\nPublic: public->public, protected->protected\nProtected: public->protected, protected->protected\nPrivate: all become private",
    hint: "Access mode determines how base class members are inherited.",
  },
  {
    id: "cpp_oop_28",
    topicId: "cpp_oop",
    question: "What is function overriding? Give example.",
    mathSolution: "Function overriding",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Animal {\npublic:\n    virtual void sound() { cout << "Animal makes sound" << endl; }\n};\n\nclass Dog : public Animal {\npublic:\n    void sound() override { cout << "Dog barks" << endl; }  // Overriding\n};\n\nint main() {\n    Animal *ptr;\n    Dog d;\n    ptr = &d;\n    ptr->sound();  // Calls Dog\'s sound (if virtual)\n    return 0;\n}',
    hint: "Override: redefine base class function in derived class with same signature.",
  },
  {
    id: "cpp_oop_29",
    topicId: "cpp_oop",
    question: "What is polymorphism? Explain with example.",
    mathSolution: "Polymorphism concept",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual void draw() { cout << "Drawing shape" << endl; }\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() override { cout << "Drawing circle" << endl; }\n};\n\nclass Square : public Shape {\npublic:\n    void draw() override { cout << "Drawing square" << endl; }\n};\n\nint main() {\n    Shape *shapes[2];\n    shapes[0] = new Circle();\n    shapes[1] = new Square();\n    \n    for(int i=0; i<2; i++) {\n        shapes[i]->draw();  // Different behavior based on object type\n    }\n    return 0;\n}',
    hint: "Polymorphism: same interface, different implementations. Many forms.",
  },
  {
    id: "cpp_oop_30",
    topicId: "cpp_oop",
    question: "What are the two types of polymorphism in C++?",
    mathSolution: "Types of polymorphism",
    codeSolution:
      "1. Compile-time polymorphism (Static binding):\n   - Function overloading\n   - Operator overloading\n\n2. Runtime polymorphism (Dynamic binding):\n   - Virtual functions\n   - Function overriding",
    hint: "Compile-time: function/operator overloading. Runtime: virtual functions.",
  },
  {
    id: "cpp_oop_31",
    topicId: "cpp_oop",
    question: "What is a virtual function? Why is it used?",
    mathSolution: "Virtual function",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void show() { cout << "Base class" << endl; }\n};\n\nclass Derived : public Base {\npublic:\n    void show() override { cout << "Derived class" << endl; }\n};\n\nint main() {\n    Base* ptr = new Derived();\n    ptr->show();  // Calls Derived\'s show (due to virtual)\n    return 0;\n}',
    hint: "Virtual functions enable runtime polymorphism - called based on object type, not pointer type.",
  },
  {
    id: "cpp_oop_32",
    topicId: "cpp_oop",
    question: "What is a pure virtual function? What is an abstract class?",
    mathSolution: "Pure virtual function",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Shape {  // Abstract class\npublic:\n    virtual void draw() = 0;  // Pure virtual function\n    \n    void info() { cout << "This is a shape" << endl; }\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() override { cout << "Drawing circle" << endl; }\n};\n\nint main() {\n    // Shape s;  // Error: cannot create object of abstract class\n    Circle c;\n    c.draw();\n    c.info();\n    return 0;\n}',
    hint: "Pure virtual (=0) makes class abstract. Cannot instantiate abstract class.",
  },
  {
    id: "cpp_oop_33",
    topicId: "cpp_oop",
    question:
      "What is the difference between virtual and pure virtual function?",
    mathSolution: "Virtual vs Pure Virtual",
    codeSolution:
      "Virtual function:\n- Has implementation in base class\n- Can be overridden\n- Base class can be instantiated\n\nPure virtual function:\n- No implementation in base class (=0)\n- Must be overridden in derived class\n- Base class becomes abstract",
    hint: "Virtual has body, pure virtual doesn't and makes class abstract.",
  },
  {
    id: "cpp_oop_34",
    topicId: "cpp_oop",
    question: "What is operator overloading? Give example.",
    mathSolution: "Operator overloading",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Complex {\nprivate:\n    int real, imag;\npublic:\n    Complex(int r=0, int i=0) : real(r), imag(i) {}\n    \n    Complex operator+(const Complex &c) {  // Overloading + operator\n        return Complex(real + c.real, imag + c.imag);\n    }\n    \n    void display() { cout << real << " + " << imag << "i" << endl; }\n};\n\nint main() {\n    Complex c1(3, 4), c2(1, 2);\n    Complex c3 = c1 + c2;  // Using overloaded + operator\n    c3.display();\n    return 0;\n}',
    hint: "Operator overloading gives special meaning to operators for user-defined types.",
  },
  {
    id: "cpp_oop_35",
    topicId: "cpp_oop",
    question: "Which operators cannot be overloaded in C++?",
    mathSolution: "Non-overloadable operators",
    codeSolution:
      "Operators that cannot be overloaded:\n1. :: (scope resolution)\n2. . (member access)\n3. .* (member pointer access)\n4. ?: (ternary)\n5. sizeof\n6. typeid",
    hint: "6 operators cannot be overloaded: :: . .* ?: sizeof typeid",
  },
  {
    id: "cpp_oop_36",
    topicId: "cpp_oop",
    question: "What is constructor overloading? Give example.",
    mathSolution: "Constructor overloading",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    int length, width;\npublic:\n    Rectangle() { length = 0; width = 0; }  // Default\n    Rectangle(int l) { length = l; width = l; }  // Square\n    Rectangle(int l, int w) { length = l; width = w; }  // Rectangle\n    \n    int area() { return length * width; }\n};\n\nint main() {\n    Rectangle r1;        // 0\n    Rectangle r2(5);      // 25\n    Rectangle r3(4, 3);   // 12\n    \n    cout << r1.area() << " " << r2.area() << " " << r3.area() << endl;\n    return 0;\n}',
    hint: "Multiple constructors with different parameters in same class.",
  },
  {
    id: "cpp_oop_37",
    topicId: "cpp_oop",
    question: "What is a copy constructor? When is it called?",
    mathSolution: "Copy constructor usage",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Example {\npublic:\n    Example() { cout << "Default constructor" << endl; }\n    Example(const Example &e) { cout << "Copy constructor" << endl; }\n};\n\nint main() {\n    Example e1;           // Default\n    Example e2 = e1;       // Copy\n    Example e3(e1);        // Copy\n    return 0;\n}',
    hint: "Copy constructor called when:\n1. Object passed by value\n2. Object returned by value\n3. Explicit copy: Example e2 = e1;",
  },
  {
    id: "cpp_oop_38",
    topicId: "cpp_oop",
    question: "What is the difference between shallow copy and deep copy?",
    mathSolution: "Shallow vs Deep copy",
    codeSolution:
      "#include <iostream>\n#include <cstring>\nusing namespace std;\n\nclass String {\nprivate:\n    char *str;\npublic:\n    String(const char *s) {\n        str = new char[strlen(s) + 1];\n        strcpy(str, s);\n    }\n    \n    // Deep copy constructor\n    String(const String &s) {\n        str = new char[strlen(s.str) + 1];\n        strcpy(str, s.str);\n    }\n    \n    ~String() { delete[] str; }\n};",
    hint: "Shallow copy copies pointers, deep copy copies pointed-to data.",
  },
  {
    id: "cpp_oop_39",
    topicId: "cpp_oop",
    question: "What is the virtual destructor? Why is it needed?",
    mathSolution: "Virtual destructor",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual ~Base() { cout << "Base destructor" << endl; }\n};\n\nclass Derived : public Base {\npublic:\n    ~Derived() { cout << "Derived destructor" << endl; }\n};\n\nint main() {\n    Base *ptr = new Derived();\n    delete ptr;  // Both destructors called (with virtual)\n    return 0;\n}',
    hint: "Virtual destructor ensures derived class destructor is called when deleting through base pointer.",
  },
  {
    id: "cpp_oop_40",
    topicId: "cpp_oop",
    question:
      "What is the diamond problem in multiple inheritance? How is it solved?",
    mathSolution: "Diamond problem",
    codeSolution:
      "#include <iostream>\nusing namespace std;\n\nclass A { public: int data; };\nclass B : virtual public A { };\nclass C : virtual public A { };\nclass D : public B, public C { };  // Only one copy of A due to virtual inheritance\n\nint main() {\n    D d;\n    d.data = 10;  // No ambiguity with virtual inheritance\n    return 0;\n}",
    hint: "Diamond problem: two copies of grandparent. Solved by virtual inheritance.",
  },
  {
    id: "cpp_oop_41",
    topicId: "cpp_oop",
    question: "What is an interface in C++? How is it implemented?",
    mathSolution: "Interface concept",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Drawable {  // Interface (abstract class with all pure virtual functions)\npublic:\n    virtual void draw() = 0;\n    virtual void resize() = 0;\n    virtual ~Drawable() {}\n};\n\nclass Circle : public Drawable {\npublic:\n    void draw() override { cout << "Drawing circle" << endl; }\n    void resize() override { cout << "Resizing circle" << endl; }\n};\n\nint main() {\n    Drawable *d = new Circle();\n    d->draw();\n    d->resize();\n    delete d;\n    return 0;\n}',
    hint: "Interface in C++ is a class with all pure virtual functions.",
  },
  {
    id: "cpp_oop_42",
    topicId: "cpp_oop",
    question: "What is early binding and late binding?",
    mathSolution: "Binding types",
    codeSolution:
      "Early binding (static binding):\n- Happens at compile time\n- Normal function calls\n\nLate binding (dynamic binding):\n- Happens at runtime\n- Virtual function calls\n\nExample:\nptr->func();  // Early if non-virtual, late if virtual",
    hint: "Early binding = compile time, Late binding = runtime (virtual functions).",
  },
  {
    id: "cpp_oop_43",
    topicId: "cpp_oop",
    question:
      "What is the difference between function overloading and function overriding?",
    mathSolution: "Overloading vs Overriding",
    codeSolution:
      "Overloading:\n- Same class\n- Different parameters\n- Compile-time polymorphism\n\nOverriding:\n- Different classes (base/derived)\n- Same parameters\n- Runtime polymorphism",
    hint: "Overloading = same name different params in same class. Overriding = redefining in derived class.",
  },
  {
    id: "cpp_oop_44",
    topicId: "cpp_oop",
    question: "What is a namespace? How is it used with classes?",
    mathSolution: "Namespace concept",
    codeSolution:
      "#include <iostream>\nusing namespace std;\n\nnamespace Math {\n    class Calculator {\n    public:\n        int add(int a, int b) { return a + b; }\n    };\n}\n\nnamespace Physics {\n    class Calculator {\n    public:\n        double force(double m, double a) { return m * a; }\n    };\n}\n\nint main() {\n    Math::Calculator mathCalc;\n    Physics::Calculator physCalc;\n    \n    cout << mathCalc.add(5, 3) << endl;\n    cout << physCalc.force(10, 2) << endl;\n    return 0;\n}",
    hint: "Namespace prevents name conflicts by grouping classes/functions.",
  },
  {
    id: "cpp_oop_45",
    topicId: "cpp_oop",
    question: "What is a const member function? Give example.",
    mathSolution: "Const member function",
    codeSolution:
      "#include <iostream>\nusing namespace std;\n\nclass MyClass {\nprivate:\n    int value;\npublic:\n    MyClass(int v) : value(v) {}\n    \n    int getValue() const {  // Const member function\n        // value = 10;  // Error: cannot modify in const function\n        return value;\n    }\n    \n    void setValue(int v) {  // Non-const function\n        value = v;\n    }\n};\n\nint main() {\n    const MyClass c1(100);\n    cout << c1.getValue() << endl;  // OK\n    // c1.setValue(200);  // Error: cannot call non-const on const object\n    return 0;\n}",
    hint: "Const member functions promise not to modify object, can be called on const objects.",
  },
  {
    id: "cpp_oop_46",
    topicId: "cpp_oop",
    question: "What is a mutable member? Give example.",
    mathSolution: "Mutable keyword",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Counter {\nprivate:\n    int value;\n    mutable int accessCount;  // Can be modified in const functions\npublic:\n    Counter(int v) : value(v), accessCount(0) {}\n    \n    int getValue() const {\n        accessCount++;  // OK because mutable\n        return value;\n    }\n    \n    int getAccessCount() const { return accessCount; }\n};\n\nint main() {\n    const Counter c(100);\n    cout << c.getValue() << endl;\n    cout << c.getValue() << endl;\n    cout << "Accessed: " << c.getAccessCount() << " times" << endl;\n    return 0;\n}',
    hint: "mutable allows modification of member in const member functions.",
  },
  {
    id: "cpp_oop_47",
    topicId: "cpp_oop",
    question: "What is composition in OOP? Give example.",
    mathSolution: "Composition",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Engine {\npublic:\n    void start() { cout << "Engine started" << endl; }\n};\n\nclass Car {\nprivate:\n    Engine engine;  // Composition: Car has an Engine\n    string model;\npublic:\n    Car(string m) : model(m) {}\n    \n    void start() {\n        cout << model << ": ";\n        engine.start();\n    }\n};\n\nint main() {\n    Car myCar("Tesla");\n    myCar.start();\n    return 0;\n}',
    hint: "Composition = 'has-a' relationship. Object contains another object as member.",
  },
  {
    id: "cpp_oop_48",
    topicId: "cpp_oop",
    question: "What is aggregation in OOP? Give example.",
    mathSolution: "Aggregation",
    codeSolution:
      '#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nclass Employee {\npublic:\n    string name;\n    Employee(string n) : name(n) {}\n};\n\nclass Department {\nprivate:\n    string name;\n    vector<Employee*> employees;  // Aggregation: Department has Employees (but doesn\\\'t own them)\npublic:\n    Department(string n) : name(n) {}\n    \n    void addEmployee(Employee* e) {\n        employees.push_back(e);\n    }\n    \n    void showEmployees() {\n        cout << name << " employees: ";\n        for(auto e : employees) {\n            cout << e->name << " ";\n        }\n        cout << endl;\n    }\n};\n\nint main() {\n    Employee e1("Alice"), e2("Bob");\n    Department dept("IT");\n    \n    dept.addEmployee(&e1);\n    dept.addEmployee(&e2);\n    \n    dept.showEmployees();\n    return 0;\n}',
    hint: "Aggregation = weak 'has-a' relationship. Objects can exist independently.",
  },
  {
    id: "cpp_oop_49",
    topicId: "cpp_oop",
    question: "What is the difference between struct and class in C++?",
    mathSolution: "Struct vs Class",
    codeSolution:
      "struct:\n- Members are public by default\n- Typically used for passive data structures\n\nclass:\n- Members are private by default\n- Used for objects with both data and behavior\n\nstruct Point { int x, y; };  // Public by default\nclass Circle { private: int radius; };  // Private by default",
    hint: "Only difference: default access (struct = public, class = private).",
  },
  {
    id: "cpp_oop_50",
    topicId: "cpp_oop",
    question:
      "Write a complete program demonstrating multiple OOP concepts (class, inheritance, polymorphism, encapsulation).",
    mathSolution: "Complete OOP example",
    codeSolution:
      '#include <iostream>\n#include <vector>\n#include <memory>\nusing namespace std;\n\n// Base class (abstraction)\nclass Shape {\nprotected:\n    string color;\npublic:\n    Shape(string c) : color(c) {}\n    virtual ~Shape() {}\n    \n    // Pure virtual function (abstraction)\n    virtual double area() const = 0;\n    \n    // Virtual function (polymorphism)\n    virtual void draw() const {\n        cout << "Drawing a " << color << " shape" << endl;\n    }\n    \n    // Encapsulation: getter\n    string getColor() const { return color; }\n    void setColor(string c) { color = c; }\n};\n\n// Derived class 1 (inheritance)\nclass Circle : public Shape {\nprivate:\n    double radius;  // Encapsulation\npublic:\n    Circle(string c, double r) : Shape(c), radius(r) {}\n    \n    // Override (polymorphism)\n    double area() const override {\n        return 3.14159 * radius * radius;\n    }\n    \n    void draw() const override {\n        cout << "Drawing a " << color << " circle with radius " << radius << endl;\n    }\n};\n\n// Derived class 2 (inheritance)\nclass Rectangle : public Shape {\nprivate:\n    double length, width;  // Encapsulation\npublic:\n    Rectangle(string c, double l, double w) : Shape(c), length(l), width(w) {}\n    \n    double area() const override {\n        return length * width;\n    }\n    \n    void draw() const override {\n        cout << "Drawing a " << color << " rectangle " << length << "x" << width << endl;\n    }\n};\n\n// Function demonstrating polymorphism\nvoid displayShapeInfo(const Shape& s) {\n    s.draw();\n    cout << "Area: " << s.area() << endl;\n}\n\nint main() {\n    // Creating objects\n    Circle c("red", 5.0);\n    Rectangle r("blue", 4.0, 6.0);\n    \n    // Using polymorphism with references\n    displayShapeInfo(c);\n    cout << "-------------------" << endl;\n    displayShapeInfo(r);\n    \n    cout << "\\nUsing polymorphism with pointers:" << endl;\n    // Using polymorphism with pointers\n    vector<Shape*> shapes;\n    shapes.push_back(new Circle("green", 3.0));\n    shapes.push_back(new Rectangle("yellow", 2.0, 3.0));\n    \n    for(auto shape : shapes) {\n        shape->draw();\n        cout << "Area: " << shape->area() << endl;\n        delete shape;  // Cleanup\n    }\n    \n    return 0;\n}',
    hint: "This demonstrates: class, inheritance, encapsulation, abstraction (pure virtual), polymorphism (virtual functions).",
  },
);