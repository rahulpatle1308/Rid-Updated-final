QuizData.questions.push(
  {
    id: "cpp_polymorphism_1",
    topicId: "cpp_polymorphism",
    question: "What is polymorphism in C++? Explain with example.",
    mathSolution: "Polymorphism concept",
    codeSolution:
      "Polymorphism means 'many forms' - the ability of objects to take multiple forms.\n\nExample:\nA 'draw()' function can draw different shapes - circle, rectangle, triangle - each with its own implementation.",
    hint: "Polymorphism = same interface, different implementations. Many forms.",
  },
  {
    id: "cpp_polymorphism_2",
    topicId: "cpp_polymorphism",
    question: "What are the two types of polymorphism in C++?",
    mathSolution: "Types of polymorphism",
    codeSolution:
      "1. Compile-time polymorphism (Static binding/Early binding):\n   - Function overloading\n   - Operator overloading\n\n2. Runtime polymorphism (Dynamic binding/Late binding):\n   - Virtual functions\n   - Function overriding",
    hint: "Compile-time: function/operator overloading. Runtime: virtual functions.",
  },
  {
    id: "cpp_polymorphism_3",
    topicId: "cpp_polymorphism",
    question: "What is compile-time polymorphism? Give example.",
    mathSolution: "Compile-time polymorphism",
    codeSolution:
      "#include <iostream>\nusing namespace std;\n\nclass Calculator {\npublic:\n    // Function overloading - compile-time polymorphism\n    int add(int a, int b) { return a + b; }\n    double add(double a, double b) { return a + b; }\n    int add(int a, int b, int c) { return a + b + c; }\n};\n\nint main() {\n    Calculator calc;\n    cout << calc.add(5, 10) << endl;      // int version\n    cout << calc.add(3.5, 2.7) << endl;   // double version\n    cout << calc.add(1, 2, 3) << endl;    // 3-param version\n    return 0;\n}",
    hint: "Compile-time polymorphism is achieved through function overloading and operator overloading. Decision made at compile time.",
  },
  {
    id: "cpp_polymorphism_4",
    topicId: "cpp_polymorphism",
    question: "What is runtime polymorphism? Give example.",
    mathSolution: "Runtime polymorphism",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual void draw() { cout << "Drawing Shape" << endl; }\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() override { cout << "Drawing Circle" << endl; }\n};\n\nclass Rectangle : public Shape {\npublic:\n    void draw() override { cout << "Drawing Rectangle" << endl; }\n};\n\nint main() {\n    Shape* shape;\n    Circle c;\n    Rectangle r;\n    \n    shape = &c;\n    shape->draw();  // Output: Drawing Circle\n    \n    shape = &r;\n    shape->draw();  // Output: Drawing Rectangle\n    \n    return 0;\n}',
    hint: "Runtime polymorphism achieved through virtual functions. Function call resolved at runtime based on object type.",
  },
  {
    id: "cpp_polymorphism_5",
    topicId: "cpp_polymorphism",
    question: "What is a virtual function? Why is it used?",
    mathSolution: "Virtual function concept",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void show() {  // Virtual function\n        cout << "Base class show" << endl;\n    }\n    \n    void display() {  // Non-virtual function\n        cout << "Base class display" << endl;\n    }\n};\n\nclass Derived : public Base {\npublic:\n    void show() override {\n        cout << "Derived class show" << endl;\n    }\n    \n    void display() {\n        cout << "Derived class display" << endl;\n    }\n};\n\nint main() {\n    Base* ptr = new Derived();\n    ptr->show();     // Calls Derived::show (virtual)\n    ptr->display();  // Calls Base::display (non-virtual)\n    delete ptr;\n    return 0;\n}',
    hint: "Virtual functions enable runtime polymorphism. They ensure that the function of the actual object type is called, not the pointer type.",
  },
  {
    id: "cpp_polymorphism_6",
    topicId: "cpp_polymorphism",
    question: "What is function overloading? Give example.",
    mathSolution: "Function overloading",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Print {\npublic:\n    void display(int i) {\n        cout << "Integer: " << i << endl;\n    }\n    \n    void display(double d) {\n        cout << "Double: " << d << endl;\n    }\n    \n    void display(string s) {\n        cout << "String: " << s << endl;\n    }\n};\n\nint main() {\n    Print p;\n    p.display(5);\n    p.display(3.14);\n    p.display("Hello");\n    return 0;\n}',
    hint: "Function overloading: multiple functions with same name but different parameters (type, number, or order).",
  },
  {
    id: "cpp_polymorphism_7",
    topicId: "cpp_polymorphism",
    question: "What is operator overloading? Give example.",
    mathSolution: "Operator overloading",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Complex {\nprivate:\n    int real, imag;\npublic:\n    Complex(int r = 0, int i = 0) : real(r), imag(i) {}\n    \n    // Overloading + operator\n    Complex operator+(const Complex& c) {\n        return Complex(real + c.real, imag + c.imag);\n    }\n    \n    void display() {\n        cout << real << " + " << imag << "i" << endl;\n    }\n};\n\nint main() {\n    Complex c1(3, 4), c2(1, 2);\n    Complex c3 = c1 + c2;  // Using overloaded operator\n    c3.display();\n    return 0;\n}',
    hint: "Operator overloading gives special meaning to operators for user-defined types.",
  },
  {
    id: "cpp_polymorphism_8",
    topicId: "cpp_polymorphism",
    question:
      "What is the difference between function overloading and function overriding?",
    mathSolution: "Overloading vs Overriding",
    codeSolution:
      "Overloading:\n- Same class\n- Different parameters\n- Compile-time polymorphism\n- May have different return types\n\nOverriding:\n- Different classes (base/derived)\n- Same parameters\n- Runtime polymorphism\n- Same return type (or covariant)\n\nExample:\nclass Base {\n    virtual void show(int x) { }  // To be overridden\n    void display(int x) { }        // To be overloaded\n};\n\nclass Derived : public Base {\n    void show(int x) override { }  // Overriding\n    void display(int x, int y) { } // Overloading (different class)",
    hint: "Overloading = same name different params in same class. Overriding = redefining virtual function in derived class.",
  },
  {
    id: "cpp_polymorphism_9",
    topicId: "cpp_polymorphism",
    question:
      "What is a pure virtual function? How does it relate to polymorphism?",
    mathSolution: "Pure virtual function",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Shape {  // Abstract class\npublic:\n    // Pure virtual function\n    virtual void draw() = 0;\n    \n    virtual double area() = 0;\n    \n    void info() {\n        cout << "This is a shape" << endl;\n    }\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\npublic:\n    Circle(double r) : radius(r) {}\n    \n    void draw() override {\n        cout << "Drawing Circle" << endl;\n    }\n    \n    double area() override {\n        return 3.14159 * radius * radius;\n    }\n};\n\nint main() {\n    // Shape s;  // Error: cannot instantiate abstract class\n    Circle c(5);\n    Shape* ptr = &c;\n    ptr->draw();  // Polymorphic call\n    cout << "Area: " << ptr->area() << endl;\n    return 0;\n}',
    hint: "Pure virtual function (=0) makes class abstract. Derived classes must override it. Enforces polymorphic behavior.",
  },
  {
    id: "cpp_polymorphism_10",
    topicId: "cpp_polymorphism",
    question: "What is an abstract class? Why is it used?",
    mathSolution: "Abstract class",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\n// Abstract class\nclass Animal {\npublic:\n    virtual void sound() = 0;  // Pure virtual\n    virtual void move() = 0;    // Pure virtual\n    \n    void eat() {  // Concrete method\n        cout << "Eating..." << endl;\n    }\n};\n\nclass Dog : public Animal {\npublic:\n    void sound() override {\n        cout << "Dog barks" << endl;\n    }\n    \n    void move() override {\n        cout << "Dog runs" << endl;\n    }\n};\n\nint main() {\n    // Animal a;  // Error: cannot instantiate abstract class\n    Dog d;\n    Animal* ptr = &d;\n    ptr->sound();\n    ptr->move();\n    ptr->eat();\n    return 0;\n}',
    hint: "Abstract class has at least one pure virtual function. Cannot be instantiated, used as interface/blueprint for derived classes.",
  },
  {
    id: "cpp_polymorphism_11",
    topicId: "cpp_polymorphism",
    question:
      "What is the difference between virtual and pure virtual function?",
    mathSolution: "Virtual vs Pure Virtual",
    codeSolution:
      "Virtual function:\n- Has implementation in base class\n- Can be overridden (optional)\n- Base class can be instantiated\n\nPure virtual function:\n- No implementation in base class (=0)\n- Must be overridden in derived class\n- Base class becomes abstract\n\nclass Base {\npublic:\n    virtual void func1() { }      // Virtual\n    virtual void func2() = 0;     // Pure virtual\n};",
    hint: "Virtual has body, pure virtual doesn't and makes class abstract.",
  },
  {
    id: "cpp_polymorphism_12",
    topicId: "cpp_polymorphism",
    question: "What is early binding and late binding?",
    mathSolution: "Early vs Late binding",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    void nonVirtual() {  // Early binding\n        cout << "Base non-virtual" << endl;\n    }\n    \n    virtual void isVirtual() {  // Late binding\n        cout << "Base virtual" << endl;\n    }\n};\n\nclass Derived : public Base {\npublic:\n    void nonVirtual() {\n        cout << "Derived non-virtual" << endl;\n    }\n    \n    void isVirtual() override {\n        cout << "Derived virtual" << endl;\n    }\n};\n\nint main() {\n    Base* ptr = new Derived();\n    \n    // Early binding (compile time) - based on pointer type\n    ptr->nonVirtual();  // Calls Base::nonVirtual\n    \n    // Late binding (runtime) - based on object type\n    ptr->isVirtual();   // Calls Derived::isVirtual\n    \n    delete ptr;\n    return 0;\n}',
    hint: "Early binding = compile time (non-virtual). Late binding = runtime (virtual functions) based on actual object.",
  },
  {
    id: "cpp_polymorphism_13",
    topicId: "cpp_polymorphism",
    question: "What is the virtual table (vtable) and vptr?",
    mathSolution: "Virtual table concept",
    codeSolution:
      "When a class has virtual functions, compiler creates:\n\n1. vtable (virtual table): A static table containing function pointers to virtual functions\n2. vptr (virtual pointer): A hidden pointer in each object pointing to the class's vtable\n\nclass Base {\n    virtual void func1() { }\n    virtual void func2() { }\n};\n\nclass Derived : public Base {\n    void func1() override { }\n};\n\n// Base vtable: [Base::func1, Base::func2]\n// Derived vtable: [Derived::func1, Base::func2]\n// Each object has vptr pointing to its class's vtable",
    hint: "vtable stores function pointers for virtual functions. vptr in each object points to vtable. Enables runtime polymorphism.",
  },
  {
    id: "cpp_polymorphism_14",
    topicId: "cpp_polymorphism",
    question: "Can constructors be virtual? Why or why not?",
    mathSolution: "Virtual constructors",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    // Constructor cannot be virtual\n    Base() { cout << "Base constructor" << endl; }\n    \n    // Destructor can and should be virtual\n    virtual ~Base() { cout << "Base destructor" << endl; }\n};\n\nclass Derived : public Base {\npublic:\n    Derived() { cout << "Derived constructor" << endl; }\n    ~Derived() { cout << "Derived destructor" << endl; }\n};\n\nint main() {\n    Base* ptr = new Derived();\n    delete ptr;  // Both destructors called (virtual)\n    return 0;\n}',
    hint: "Constructors cannot be virtual because when constructor is called, object doesn't exist yet to have vptr. Destructors should be virtual.",
  },
  {
    id: "cpp_polymorphism_15",
    topicId: "cpp_polymorphism",
    question: "What is a virtual destructor? Why is it needed?",
    mathSolution: "Virtual destructor",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    Base() { cout << "Base constructor" << endl; }\n    \n    // Non-virtual destructor - problem!\n    ~Base() { cout << "Base destructor" << endl; }\n};\n\nclass Derived : public Base {\nprivate:\n    int* data;\npublic:\n    Derived() { \n        data = new int[100];\n        cout << "Derived constructor - allocated memory" << endl; \n    }\n    \n    ~Derived() { \n        delete[] data;\n        cout << "Derived destructor - freed memory" << endl; \n    }\n};\n\nint main() {\n    Base* ptr = new Derived();\n    delete ptr;  // Only Base destructor called! Memory leak!\n    return 0;\n}\n\n// Fix: Make destructor virtual\nclass Base {\npublic:\n    virtual ~Base() { }  // Virtual destructor\n};',
    hint: "Virtual destructor ensures derived class destructor is called when deleting through base pointer, preventing memory leaks.",
  },
  {
    id: "cpp_polymorphism_16",
    topicId: "cpp_polymorphism",
    question: "What is the 'override' keyword? (C++11)",
    mathSolution: "Override keyword",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void show() { cout << "Base show" << endl; }\n    virtual void display(int x) { cout << "Base display: " << x << endl; }\n    void info() { cout << "Base info" << endl; }\n};\n\nclass Derived : public Base {\npublic:\n    // Correct override - compiler checks\n    void show() override { cout << "Derived show" << endl; }\n    \n    // Error: doesn\'t override anything (different parameters)\n    // void display() override { }  // Compilation error\n    \n    // Error: info is not virtual\n    // void info() override { }  // Compilation error\n    \n    // Correct override\n    void display(int x) override { cout << "Derived display: " << x << endl; }\n};\n\nint main() {\n    Derived d;\n    Base* ptr = &d;\n    ptr->show();     // Derived::show\n    ptr->display(5); // Derived::display\n    return 0;\n}',
    hint: "override keyword explicitly marks overriding of virtual function. Compiler checks for correctness (signature match, base function virtual).",
  },
  {
    id: "cpp_polymorphism_17",
    topicId: "cpp_polymorphism",
    question: "What is the 'final' keyword? (C++11)",
    mathSolution: "Final keyword",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void show() { cout << "Base show" << endl; }\n    virtual void display() final { cout << "Base display - cannot override" << endl; }  // Cannot override\n};\n\nclass Derived : public Base {\npublic:\n    void show() override { cout << "Derived show" << endl; }  // OK\n    \n    // Error: cannot override final function\n    // void display() override { }  // Compilation error\n};\n\n// Final class - cannot be inherited\nclass FinalClass final {\npublic:\n    void func() { }\n};\n\n// Error: cannot inherit from final class\n// class Child : public FinalClass { };  // Compilation error\n\nint main() {\n    Derived d;\n    d.show();\n    return 0;\n}',
    hint: "final on virtual function prevents further overriding. final on class prevents inheritance.",
  },
  {
    id: "cpp_polymorphism_18",
    topicId: "cpp_polymorphism",
    question: "What is function hiding? How is it different from overriding?",
    mathSolution: "Function hiding",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    void func() { cout << "Base func()" << endl; }           // Non-virtual\n    virtual void show() { cout << "Base show()" << endl; }   // Virtual\n};\n\nclass Derived : public Base {\npublic:\n    // Hiding - redefines non-virtual function\n    void func() { cout << "Derived func()" << endl; }\n    \n    // Overriding - redefines virtual function\n    void show() override { cout << "Derived show()" << endl; }\n};\n\nint main() {\n    Derived d;\n    Base* ptr = &d;\n    \n    // ptr->func();  // Calls Base::func (not polymorphic)\n    d.func();        // Calls Derived::func\n    \n    ptr->show();     // Calls Derived::show (polymorphic)\n    \n    // To call hidden base function\n    d.Base::func();  // Explicitly call Base version\n    \n    return 0;\n}',
    hint: "Hiding: redefining non-virtual function in derived class (based on pointer type). Overriding: redefining virtual function (based on object type).",
  },
  {
    id: "cpp_polymorphism_19",
    topicId: "cpp_polymorphism",
    question: "Can we overload virtual functions?",
    mathSolution: "Overloading virtual functions",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void func() { cout << "Base func()" << endl; }\n    virtual void func(int x) { cout << "Base func(int): " << x << endl; }\n};\n\nclass Derived : public Base {\npublic:\n    // Override one version\n    void func() override { cout << "Derived func()" << endl; }\n    \n    // The other version is also available (if not overridden)\n    // But if we want to override both, we need to override all overloads\n};\n\nclass Derived2 : public Base {\npublic:\n    // Override both overloads\n    void func() override { cout << "Derived2 func()" << endl; }\n    void func(int x) override { cout << "Derived2 func(int): " << x << endl; }\n};\n\nint main() {\n    Derived d;\n    d.func();      // Derived::func\n    d.func(10);    // Base::func(int) (not overridden)\n    \n    Derived2 d2;\n    d2.func();     // Derived2::func\n    d2.func(20);   // Derived2::func(int)\n    \n    return 0;\n}',
    hint: "Virtual functions can be overloaded. Derived class can override any or all overloads. Use 'using' to bring all overloads into scope.",
  },
  {
    id: "cpp_polymorphism_20",
    topicId: "cpp_polymorphism",
    question: "What is the concept of covariance in virtual functions?",
    mathSolution: "Covariant return types",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual Base* clone() const {\n        cout << "Base clone" << endl;\n        return new Base(*this);\n    }\n    \n    virtual ~Base() {}\n};\n\nclass Derived : public Base {\npublic:\n    // Covariant return type - returns Derived* instead of Base*\n    Derived* clone() const override {\n        cout << "Derived clone" << endl;\n        return new Derived(*this);\n    }\n};\n\nint main() {\n    Base* b1 = new Derived();\n    Base* b2 = b1->clone();  // Returns Derived*, but stored as Base*\n    \n    delete b1;\n    delete b2;\n    return 0;\n}',
    hint: "Covariance allows overriding function to return a more specific type (derived class pointer/reference) than base class function.",
  },
  {
    id: "cpp_polymorphism_21",
    topicId: "cpp_polymorphism",
    question: "What is the difference between static and dynamic polymorphism?",
    mathSolution: "Static vs Dynamic polymorphism",
    codeSolution:
      "Static Polymorphism (Compile-time):\n- Achieved through function/operator overloading, templates\n- Faster (no runtime overhead)\n- Decision at compile time\n\nDynamic Polymorphism (Runtime):\n- Achieved through virtual functions\n- Slower (vtable lookup overhead)\n- Decision at runtime\n- More flexible\n\n// Static polymorphism - templates\ntemplate <typename T>\nT add(T a, T b) { return a + b; }\n\n// Dynamic polymorphism - virtual functions\nclass Shape {\n    virtual void draw() = 0;\n};",
    hint: "Static = compile-time (overloading, templates). Dynamic = runtime (virtual functions).",
  },
  {
    id: "cpp_polymorphism_22",
    topicId: "cpp_polymorphism",
    question:
      "What is RTTI (Runtime Type Information)? How is it related to polymorphism?",
    mathSolution: "RTTI concept",
    codeSolution:
      '#include <iostream>\n#include <typeinfo>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual ~Base() {}\n};\n\nclass Derived : public Base {};\n\nint main() {\n    Base* b1 = new Base();\n    Base* b2 = new Derived();\n    \n    // typeid operator (requires at least one virtual function)\n    cout << "b1 type: " << typeid(*b1).name() << endl;\n    cout << "b2 type: " << typeid(*b2).name() << endl;\n    \n    // dynamic_cast for safe downcasting\n    Derived* d = dynamic_cast<Derived*>(b2);\n    if(d) {\n        cout << "Successfully cast to Derived" << endl;\n    }\n    \n    d = dynamic_cast<Derived*>(b1);\n    if(!d) {\n        cout << "Cannot cast Base to Derived" << endl;\n    }\n    \n    delete b1;\n    delete b2;\n    return 0;\n}',
    hint: "RTTI provides runtime type information for polymorphic classes. Features: typeid operator and dynamic_cast.",
  },
  {
    id: "cpp_polymorphism_23",
    topicId: "cpp_polymorphism",
    question: "What is dynamic_cast? When is it used?",
    mathSolution: "dynamic_cast",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual ~Base() {}\n};\n\nclass Derived1 : public Base {\npublic:\n    void show1() { cout << "Derived1 function" << endl; }\n};\n\nclass Derived2 : public Base {\npublic:\n    void show2() { cout << "Derived2 function" << endl; }\n};\n\nvoid process(Base* ptr) {\n    // Safe downcasting with dynamic_cast\n    Derived1* d1 = dynamic_cast<Derived1*>(ptr);\n    if(d1) {\n        cout << "It\'s Derived1: ";\n        d1->show1();\n    }\n    \n    Derived2* d2 = dynamic_cast<Derived2*>(ptr);\n    if(d2) {\n        cout << "It\'s Derived2: ";\n        d2->show2();\n    }\n}\n\nint main() {\n    Base* b1 = new Derived1();\n    Base* b2 = new Derived2();\n    \n    process(b1);\n    process(b2);\n    \n    delete b1;\n    delete b2;\n    return 0;\n}',
    hint: "dynamic_cast performs safe downcasting in polymorphic hierarchies. Returns nullptr if cast fails. Requires at least one virtual function.",
  },
  {
    id: "cpp_polymorphism_24",
    topicId: "cpp_polymorphism",
    question: "What is the difference between early binding and late binding?",
    mathSolution: "Early vs Late binding",
    codeSolution:
      "Early Binding (Static Binding):\n- Happens at compile time\n- Function address fixed\n- Faster execution\n- Used for non-virtual functions, overloaded functions\n\nLate Binding (Dynamic Binding):\n- Happens at runtime\n- Function address determined at runtime via vtable\n- Slight overhead\n- Used for virtual functions\n\nExample:\nclass Base {\n    void f1() { }           // Early binding\n    virtual void f2() { }    // Late binding\n};",
    hint: "Early binding = compile time (non-virtual). Late binding = runtime (virtual functions).",
  },
  {
    id: "cpp_polymorphism_25",
    topicId: "cpp_polymorphism",
    question:
      "Write a complete program demonstrating polymorphism with virtual functions, abstract classes, and dynamic_cast.",
    mathSolution: "Complete polymorphism example",
    codeSolution:
      '#include <iostream>\n#include <vector>\n#include <memory>\nusing namespace std;\n\n// Abstract base class\nclass Shape {\nprotected:\n    string color;\npublic:\n    Shape(string c) : color(c) {}\n    virtual ~Shape() {}\n    \n    // Pure virtual functions\n    virtual double area() const = 0;\n    virtual void draw() const = 0;\n    \n    // Virtual function with default implementation\n    virtual void info() const {\n        cout << "This is a " << color << " shape" << endl;\n    }\n    \n    // Non-virtual function\n    string getColor() const { return color; }\n};\n\n// Derived class 1\nclass Circle : public Shape {\nprivate:\n    double radius;\npublic:\n    Circle(string c, double r) : Shape(c), radius(r) {}\n    \n    double area() const override {\n        return 3.14159 * radius * radius;\n    }\n    \n    void draw() const override {\n        cout << "Drawing a " << color << " circle with radius " << radius << endl;\n    }\n    \n    // Circle-specific function\n    double getRadius() const { return radius; }\n};\n\n// Derived class 2\nclass Rectangle : public Shape {\nprivate:\n    double length, width;\npublic:\n    Rectangle(string c, double l, double w) : Shape(c), length(l), width(w) {}\n    \n    double area() const override {\n        return length * width;\n    }\n    \n    void draw() const override {\n        cout << "Drawing a " << color << " rectangle " << length << "x" << width << endl;\n    }\n    \n    // Rectangle-specific function\n    void resize(double factor) {\n        length *= factor;\n        width *= factor;\n    }\n};\n\n// Derived class 3\nclass Triangle : public Shape {\nprivate:\n    double base, height;\npublic:\n    Triangle(string c, double b, double h) : Shape(c), base(b), height(h) {}\n    \n    double area() const override {\n        return 0.5 * base * height;\n    }\n    \n    void draw() const override {\n        cout << "Drawing a " << color << " triangle" << endl;\n    }\n    \n    void info() const override {\n        cout << "This is a " << color << " triangle with base " << base << " and height " << height << endl;\n    }\n};\n\n// Function demonstrating polymorphism\nvoid displayShapeInfo(const Shape& s) {\n    s.draw();\n    cout << "Area: " << s.area() << endl;\n    s.info();\n    cout << "-------------------" << endl;\n}\n\nint main() {\n    cout << "=== Polymorphism Demo ===\\n" << endl;\n    \n    // Creating objects\n    Circle circle("red", 5.0);\n    Rectangle rect("blue", 4.0, 6.0);\n    Triangle tri("green", 3.0, 4.0);\n    \n    // Polymorphism with references\n    cout << "Using references:" << endl;\n    displayShapeInfo(circle);\n    displayShapeInfo(rect);\n    displayShapeInfo(tri);\n    \n    // Polymorphism with pointers\n    cout << "\\nUsing pointers in container:" << endl;\n    vector<Shape*> shapes;\n    shapes.push_back(new Circle("yellow", 2.5));\n    shapes.push_back(new Rectangle("purple", 3.0, 5.0));\n    shapes.push_back(new Triangle("orange", 4.0, 3.0));\n    \n    for(Shape* shape : shapes) {\n        shape->draw();\n        cout << "Area: " << shape->area() << endl;\n        \n        // dynamic_cast example\n        Circle* c = dynamic_cast<Circle*>(shape);\n        if(c) {\n            cout << "  This is a circle with radius: " << c->getRadius() << endl;\n        }\n        \n        Rectangle* r = dynamic_cast<Rectangle*>(shape);\n        if(r) {\n            cout << "  This is a rectangle" << endl;\n        }\n        \n        cout << "-------------------" << endl;\n    }\n    \n    // Cleanup\n    for(Shape* shape : shapes) {\n        delete shape;\n    }\n    \n    cout << "\\n=== Polymorphism concepts demonstrated ===" << endl;\n    cout << "1. Abstract class (Shape with pure virtual functions)" << endl;\n    cout << "2. Virtual functions (draw(), area(), info())" << endl;\n    cout << "3. Polymorphic behavior (same interface, different implementations)" << endl;\n    cout << "4. Dynamic binding (virtual function calls resolved at runtime)" << endl;\n    cout << "5. dynamic_cast for type-safe downcasting" << endl;\n    \n    return 0;\n}',
    hint: "This demonstrates: abstract classes, pure virtual functions, virtual functions, polymorphism with references/pointers, and dynamic_cast.",
  },
);
