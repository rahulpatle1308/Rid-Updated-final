QuizData.questions.push(
  {
    id: "cpp_inheritance_1",
    topicId: "cpp_inheritance",
    question: "What is inheritance in C++? Why is it used?",
    mathSolution: "Inheritance concept",
    codeSolution:
      "Inheritance is a mechanism where a class acquires properties and behaviors of another class.\n\nBenefits:\n1. Code reusability\n2. Establishes parent-child relationship\n3. Method overriding\n4. Extensibility\n5. Represents real-world relationships",
    hint: "Inheritance = creating new classes from existing ones (like child inherits from parent).",
  },
  {
    id: "cpp_inheritance_2",
    topicId: "cpp_inheritance",
    question: "What are the different types of inheritance in C++?",
    mathSolution: "Types of inheritance",
    codeSolution:
      "1. Single inheritance\n2. Multiple inheritance\n3. Multilevel inheritance\n4. Hierarchical inheritance\n5. Hybrid inheritance (combination of multiple and multilevel)",
    hint: "5 types: Single, Multiple, Multilevel, Hierarchical, Hybrid.",
  },
  {
    id: "cpp_inheritance_3",
    topicId: "cpp_inheritance",
    question: "What is the syntax for inheritance in C++?",
    mathSolution: "Inheritance syntax",
    codeSolution:
      "class BaseClass {\n    // base class members\n};\n\nclass DerivedClass : access_specifier BaseClass {\n    // derived class members\n};\n\nExample:\nclass Animal { };\nclass Dog : public Animal { };",
    hint: "Syntax: class Derived : access_mode Base { };",
  },
  {
    id: "cpp_inheritance_4",
    topicId: "cpp_inheritance",
    question: "What are the different access modes in inheritance?",
    mathSolution: "Inheritance access modes",
    codeSolution:
      "1. public inheritance: public -> public, protected -> protected\n2. protected inheritance: public -> protected, protected -> protected\n3. private inheritance: public -> private, protected -> private\n\nclass Derived : public Base     // public inheritance\nclass Derived : protected Base  // protected inheritance\nclass Derived : private Base    // private inheritance",
    hint: "Access mode determines how base class members are inherited in derived class.",
  },
  {
    id: "cpp_inheritance_5",
    topicId: "cpp_inheritance",
    question: "Write a program to demonstrate single inheritance.",
    mathSolution: "Single inheritance",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Animal {  // Base class\nprotected:\n    string name;\npublic:\n    void setName(string n) { name = n; }\n    void eat() { cout << name << " is eating" << endl; }\n};\n\nclass Dog : public Animal {  // Derived class\npublic:\n    void bark() { cout << name << " is barking" << endl; }\n};\n\nint main() {\n    Dog d;\n    d.setName("Tommy");\n    d.eat();   // Inherited from Animal\n    d.bark();  // Own function\n    return 0;\n}',
    hint: "Single inheritance: one derived class inherits from one base class.",
  },
  {
    id: "cpp_inheritance_6",
    topicId: "cpp_inheritance",
    question: "Write a program to demonstrate multilevel inheritance.",
    mathSolution: "Multilevel inheritance",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Animal {\npublic:\n    void eat() { cout << "Eating..." << endl; }\n};\n\nclass Mammal : public Animal {\npublic:\n    void breathe() { cout << "Breathing..." << endl; }\n};\n\nclass Dog : public Mammal {\npublic:\n    void bark() { cout << "Barking..." << endl; }\n};\n\nint main() {\n    Dog d;\n    d.eat();     // From Animal\n    d.breathe(); // From Mammal\n    d.bark();    // Own\n    return 0;\n}',
    hint: "Multilevel: A -> B -> C (C inherits from B which inherits from A).",
  },
  {
    id: "cpp_inheritance_7",
    topicId: "cpp_inheritance",
    question: "Write a program to demonstrate multiple inheritance.",
    mathSolution: "Multiple inheritance",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Printer {\npublic:\n    void print() { cout << "Printing..." << endl; }\n};\n\nclass Scanner {\npublic:\n    void scan() { cout << "Scanning..." << endl; }\n};\n\nclass AllInOne : public Printer, public Scanner {\npublic:\n    void copy() { \n        scan();\n        print();\n        cout << "Copying completed" << endl;\n    }\n};\n\nint main() {\n    AllInOne device;\n    device.print();  // From Printer\n    device.scan();   // From Scanner\n    device.copy();   // Own\n    return 0;\n}',
    hint: "Multiple inheritance: derived class inherits from multiple base classes.",
  },
  {
    id: "cpp_inheritance_8",
    topicId: "cpp_inheritance",
    question: "Write a program to demonstrate hierarchical inheritance.",
    mathSolution: "Hierarchical inheritance",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Shape {\nprotected:\n    string color;\npublic:\n    void setColor(string c) { color = c; }\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() { cout << "Drawing " << color << " circle" << endl; }\n};\n\nclass Rectangle : public Shape {\npublic:\n    void draw() { cout << "Drawing " << color << " rectangle" << endl; }\n};\n\nclass Triangle : public Shape {\npublic:\n    void draw() { cout << "Drawing " << color << " triangle" << endl; }\n};\n\nint main() {\n    Circle c;\n    Rectangle r;\n    Triangle t;\n    \n    c.setColor("red");\n    r.setColor("blue");\n    t.setColor("green");\n    \n    c.draw();\n    r.draw();\n    t.draw();\n    \n    return 0;\n}',
    hint: "Hierarchical inheritance: multiple derived classes from single base class.",
  },
  {
    id: "cpp_inheritance_9",
    topicId: "cpp_inheritance",
    question:
      "What is the order of constructor and destructor calls in inheritance?",
    mathSolution: "Constructor/destructor order",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    Base() { cout << "Base constructor" << endl; }\n    ~Base() { cout << "Base destructor" << endl; }\n};\n\nclass Derived : public Base {\npublic:\n    Derived() { cout << "Derived constructor" << endl; }\n    ~Derived() { cout << "Derived destructor" << endl; }\n};\n\nint main() {\n    cout << "Creating object:" << endl;\n    Derived d;\n    cout << "Object created" << endl;\n    return 0;\n}',
    hint: "Constructors: Base → Derived. Destructors: Derived → Base.",
  },
  {
    id: "cpp_inheritance_10",
    topicId: "cpp_inheritance",
    question: "How to call base class constructor from derived class?",
    mathSolution: "Calling base constructor",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\nprivate:\n    int baseValue;\npublic:\n    Base(int x) : baseValue(x) {\n        cout << "Base constructor with value: " << baseValue << endl;\n    }\n};\n\nclass Derived : public Base {\nprivate:\n    int derivedValue;\npublic:\n    // Call base constructor in initializer list\n    Derived(int b, int d) : Base(b), derivedValue(d) {\n        cout << "Derived constructor with value: " << derivedValue << endl;\n    }\n};\n\nint main() {\n    Derived d(10, 20);\n    return 0;\n}',
    hint: "Call base class constructor using initializer list: Derived(...) : Base(...) { }",
  },
  {
    id: "cpp_inheritance_11",
    topicId: "cpp_inheritance",
    question: "What is function overriding in inheritance? Give example.",
    mathSolution: "Function overriding",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Animal {\npublic:\n    virtual void sound() {\n        cout << "Animal makes a sound" << endl;\n    }\n};\n\nclass Dog : public Animal {\npublic:\n    // Overriding base class function\n    void sound() override {\n        cout << "Dog barks" << endl;\n    }\n};\n\nint main() {\n    Animal* ptr;\n    Dog d;\n    ptr = &d;\n    ptr->sound();  // Calls Dog\'s sound (due to virtual)\n    return 0;\n}',
    hint: "Override: redefine base class function in derived class with same signature. Use virtual for polymorphism.",
  },
  {
    id: "cpp_inheritance_12",
    topicId: "cpp_inheritance",
    question:
      "What is the difference between function overloading and function overriding?",
    mathSolution: "Overloading vs Overriding",
    codeSolution:
      "Overloading:\n- Same class\n- Different parameters\n- Compile-time polymorphism\n- May have different return types\n\nOverriding:\n- Different classes (base/derived)\n- Same parameters\n- Runtime polymorphism\n- Same return type (or covariant)",
    hint: "Overloading = same name different params in same class. Overriding = redefining in derived class.",
  },
  {
    id: "cpp_inheritance_13",
    topicId: "cpp_inheritance",
    question:
      "What is the 'protected' access specifier? How is it useful in inheritance?",
    mathSolution: "Protected access",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\nprivate:\n    int privateVar;    // Only accessible within Base\nprotected:\n    int protectedVar;  // Accessible in Base and derived classes\npublic:\n    int publicVar;     // Accessible everywhere\n    \n    Base() : privateVar(1), protectedVar(2), publicVar(3) {}\n};\n\nclass Derived : public Base {\npublic:\n    void display() {\n        // cout << privateVar;  // Error: private not accessible\n        cout << "Protected: " << protectedVar << endl;  // OK\n        cout << "Public: " << publicVar << endl;        // OK\n    }\n};\n\nint main() {\n    Derived d;\n    d.display();\n    // cout << d.protectedVar;  // Error: protected not accessible outside\n    cout << d.publicVar << endl;  // OK\n    return 0;\n}',
    hint: "protected members are like private but accessible in derived classes.",
  },
  {
    id: "cpp_inheritance_14",
    topicId: "cpp_inheritance",
    question:
      "What is the difference between public, private, and protected inheritance?",
    mathSolution: "Inheritance access comparison",
    codeSolution:
      "class Base {\npublic: int a;\nprotected: int b;\nprivate: int c;\n};\n\n// Public inheritance\nclass Pub : public Base {\n    // a is public, b is protected, c is not accessible\n};\n\n// Protected inheritance\nclass Prot : protected Base {\n    // a is protected, b is protected, c is not accessible\n};\n\n// Private inheritance\nclass Priv : private Base {\n    // a is private, b is private, c is not accessible\n};",
    hint: "Inheritance mode changes how base class members are inherited: public -> same access, protected -> all become protected, private -> all become private.",
  },
  {
    id: "cpp_inheritance_15",
    topicId: "cpp_inheritance",
    question:
      "What is the diamond problem in multiple inheritance? How is it solved?",
    mathSolution: "Diamond problem",
    codeSolution:
      "#include <iostream>\nusing namespace std;\n\nclass A {\npublic:\n    int data;\n    A() : data(100) {}\n};\n\n// Virtual inheritance solves diamond problem\nclass B : virtual public A { };\nclass C : virtual public A { };\n\nclass D : public B, public C { };  // Only one copy of A\n\nint main() {\n    D d;\n    cout << d.data << endl;  // No ambiguity with virtual inheritance\n    \n    // Without virtual inheritance, this would be ambiguous\n    // and we would need d.B::data or d.C::data\n    return 0;\n}",
    hint: "Diamond problem: two copies of grandparent in multiple inheritance. Solved by virtual inheritance.",
  },
  {
    id: "cpp_inheritance_16",
    topicId: "cpp_inheritance",
    question: "What is virtual inheritance? When is it used?",
    mathSolution: "Virtual inheritance",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Animal {\npublic:\n    int age;\n    Animal() : age(5) {}\n};\n\n// Virtual inheritance ensures only one copy of Animal\nclass Mammal : virtual public Animal { };\nclass Bird : virtual public Animal { };\n\n// Bat inherits from both Mammal and Bird\nclass Bat : public Mammal, public Bird {\npublic:\n    void showAge() {\n        cout << "Age: " << age << endl;  // No ambiguity\n    }\n};\n\nint main() {\n    Bat b;\n    b.showAge();\n    return 0;\n}',
    hint: "Virtual inheritance solves diamond problem by ensuring only one copy of base class. Used in multiple inheritance with common ancestor.",
  },
  {
    id: "cpp_inheritance_17",
    topicId: "cpp_inheritance",
    question: "Can a derived class access private members of base class?",
    mathSolution: "Accessing private members",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\nprivate:\n    int secret;\npublic:\n    Base(int s) : secret(s) {}\n    \n    // Provide public getter\n    int getSecret() const { return secret; }\n    \n    // Or make derived class friend\n    friend class Derived;\n};\n\n// Approach 1: Using getter\nclass Derived1 : public Base {\npublic:\n    Derived1(int s) : Base(s) {}\n    void show() {\n        // cout << secret;  // Error: private\n        cout << "Secret (via getter): " << getSecret() << endl;\n    }\n};\n\n// Approach 2: Using friend class\nclass Derived2 : public Base {\npublic:\n    Derived2(int s) : Base(s) {}\n    void show() {\n        cout << "Secret (via friend): " << secret << endl;  // OK because friend\n    }\n};\n\nint main() {\n    Derived1 d1(42);\n    d1.show();\n    \n    Derived2 d2(100);\n    d2.show();\n    return 0;\n}',
    hint: "Derived class cannot directly access base class private members. Use protected members, getters, or friend declaration.",
  },
  {
    id: "cpp_inheritance_18",
    topicId: "cpp_inheritance",
    question: "What is the role of 'using' declaration in inheritance?",
    mathSolution: "Using declaration in inheritance",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\nprotected:\n    void show() { cout << "Base show" << endl; }\n    void display(int x) { cout << "Base display: " << x << endl; }\n};\n\nclass Derived : private Base {  // Private inheritance\npublic:\n    // Make Base\'s show() public in Derived\n    using Base::show;\n    \n    // Overload and bring base version into scope\n    void display() { \n        cout << "Derived display" << endl; \n    }\n    using Base::display;  // Bring base display(int) into scope\n};\n\nint main() {\n    Derived d;\n    d.show();        // OK due to using\n    d.display();     // Derived version\n    d.display(10);   // Base version due to using\n    return 0;\n}',
    hint: "using declaration changes access level of inherited members or brings overloaded functions into scope.",
  },
  {
    id: "cpp_inheritance_19",
    topicId: "cpp_inheritance",
    question: "What is object slicing in inheritance?",
    mathSolution: "Object slicing",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    int baseValue;\n    Base(int b) : baseValue(b) {}\n    virtual void show() { cout << "Base: " << baseValue << endl; }\n};\n\nclass Derived : public Base {\npublic:\n    int derivedValue;\n    Derived(int b, int d) : Base(b), derivedValue(d) {}\n    void show() override { \n        cout << "Derived: base=" << baseValue << ", derived=" << derivedValue << endl; \n    }\n};\n\nint main() {\n    Derived d(10, 20);\n    \n    // Object slicing occurs\n    Base b = d;  // Only Base part is copied, derived part sliced away\n    b.show();    // Calls Base::show, not Derived::show\n    \n    // No slicing with pointers/references\n    Base* ptr = &d;\n    ptr->show();  // Calls Derived::show\n    \n    return 0;\n}',
    hint: "Object slicing happens when assigning derived object to base object by value - derived-specific members are 'sliced off'.",
  },
  {
    id: "cpp_inheritance_20",
    topicId: "cpp_inheritance",
    question: "Can we prevent inheritance of a class? How?",
    mathSolution: "Preventing inheritance",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\n// C++11 way: final keyword\nclass Base final {\npublic:\n    void show() { cout << "Base class" << endl; }\n};\n\n// Error: cannot inherit from final class\n// class Derived : public Base { };  // Compilation error\n\n// Traditional way: private constructor\nclass NonInheritable {\nprivate:\n    NonInheritable() {}\npublic:\n    static NonInheritable create() { return NonInheritable(); }\n};\n\n// Error: cannot access private constructor\n// class Child : public NonInheritable { };  // Compilation error\n\nint main() {\n    Base b;\n    b.show();\n    \n    NonInheritable obj = NonInheritable::create();\n    return 0;\n}',
    hint: "Use 'final' keyword (C++11) or make constructor private to prevent inheritance.",
  },
  {
    id: "cpp_inheritance_21",
    topicId: "cpp_inheritance",
    question: "What is a virtual base class? Why is it needed?",
    mathSolution: "Virtual base class",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    int value;\n    Base() : value(100) {}\n};\n\n// Without virtual inheritance\nclass Derived1 : public Base { };\nclass Derived2 : public Base { };\nclass Derived3 : public Derived1, public Derived2 {\npublic:\n    void show() {\n        // cout << value;  // Error: ambiguous - two copies of Base\n        cout << "Derived1::value = " << Derived1::value << endl;\n        cout << "Derived2::value = " << Derived2::value << endl;\n    }\n};\n\n// With virtual inheritance\nclass VDerived1 : virtual public Base { };\nclass VDerived2 : virtual public Base { };\nclass VDerived3 : public VDerived1, public VDerived2 {\npublic:\n    void show() {\n        cout << "Single value: " << value << endl;  // No ambiguity\n    }\n};\n\nint main() {\n    Derived3 d3;\n    d3.show();\n    \n    VDerived3 vd3;\n    vd3.show();\n    return 0;\n}',
    hint: "Virtual base class ensures only one copy of base class in multiple inheritance hierarchy, solving diamond problem.",
  },
  {
    id: "cpp_inheritance_22",
    topicId: "cpp_inheritance",
    question: "What is the difference between is-a and has-a relationship?",
    mathSolution: "is-a vs has-a",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\n\n// is-a relationship (inheritance)\nclass Animal {\npublic:\n    virtual void speak() { cout << "Animal speaks" << endl; }\n};\n\nclass Dog : public Animal {  // Dog is-a Animal\npublic:\n    void speak() override { cout << "Dog barks" << endl; }\n};\n\n// has-a relationship (composition)\nclass Engine {\npublic:\n    void start() { cout << "Engine started" << endl; }\n};\n\nclass Car {  // Car has-a Engine\nprivate:\n    Engine engine;  // Composition\n    string model;\npublic:\n    Car(string m) : model(m) {}\n    void start() {\n        cout << model << ": ";\n        engine.start();\n    }\n};\n\nint main() {\n    // is-a relationship\n    Dog d;\n    d.speak();\n    \n    // has-a relationship\n    Car c("Tesla");\n    c.start();\n    \n    return 0;\n}',
    hint: "is-a = inheritance (Dog is an Animal). has-a = composition (Car has an Engine).",
  },
  {
    id: "cpp_inheritance_23",
    topicId: "cpp_inheritance",
    question: "What is the significance of 'override' keyword? (C++11)",
    mathSolution: "Override keyword",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    virtual void show() { cout << "Base show" << endl; }\n    virtual void display(int x) { cout << "Base display: " << x << endl; }\n    void info() { cout << "Base info" << endl; }  // Non-virtual\n};\n\nclass Derived : public Base {\npublic:\n    // Correct override - compiler checks\n    void show() override { cout << "Derived show" << endl; }\n    \n    // Error: doesn\'t override anything (different parameters)\n    // void display() override { }  // Compilation error\n    \n    // Error: info is not virtual\n    // void info() override { }  // Compilation error\n    \n    // Correct: actually overriding display(int)\n    void display(int x) override { cout << "Derived display: " << x << endl; }\n};\n\nint main() {\n    Derived d;\n    Base* ptr = &d;\n    ptr->show();      // Calls Derived::show\n    ptr->display(10); // Calls Derived::display\n    return 0;\n}',
    hint: "override keyword explicitly marks that a function overrides a virtual function. Compiler checks for correctness.",
  },
  {
    id: "cpp_inheritance_24",
    topicId: "cpp_inheritance",
    question:
      "What is the difference between early binding and late binding in inheritance?",
    mathSolution: "Early vs Late binding",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Base {\npublic:\n    void nonVirtual() { cout << "Base non-virtual" << endl; }  // Early binding\n    virtual void virtualFunc() { cout << "Base virtual" << endl; }  // Late binding\n};\n\nclass Derived : public Base {\npublic:\n    void nonVirtual() { cout << "Derived non-virtual" << endl; }  // Hides base function\n    void virtualFunc() override { cout << "Derived virtual" << endl; }\n};\n\nint main() {\n    Base* ptr = new Derived();\n    \n    // Early binding - based on pointer type (Base)\n    ptr->nonVirtual();  // Calls Base::nonVirtual\n    \n    // Late binding - based on object type (Derived)\n    ptr->virtualFunc(); // Calls Derived::virtualFunc\n    \n    delete ptr;\n    return 0;\n}',
    hint: "Early binding = compile time (non-virtual). Late binding = runtime (virtual functions) based on actual object type.",
  },
  {
    id: "cpp_inheritance_25",
    topicId: "cpp_inheritance",
    question:
      "Write a complete program demonstrating multiple inheritance with virtual functions.",
    mathSolution: "Complete inheritance example",
    codeSolution:
      '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\n// Base class 1\nclass Drawable {\npublic:\n    virtual void draw() const = 0;  // Pure virtual\n    virtual ~Drawable() {}\n};\n\n// Base class 2\nclass Resizable {\npublic:\n    virtual void resize(double factor) = 0;  // Pure virtual\n    virtual ~Resizable() {}\n};\n\n// Base class 3\nclass Colorable {\nprotected:\n    string color;\npublic:\n    Colorable(string c) : color(c) {}\n    virtual void setColor(string c) { color = c; }\n    virtual string getColor() const { return color; }\n    virtual ~Colorable() {}\n};\n\n// Derived class - multiple inheritance\nclass Circle : public Drawable, public Resizable, public Colorable {\nprivate:\n    double radius;\n    \npublic:\n    Circle(string c, double r) : Colorable(c), radius(r) {}\n    \n    // Override Drawable::draw\n    void draw() const override {\n        cout << "Drawing a " << color << " circle with radius " << radius << endl;\n    }\n    \n    // Override Resizable::resize\n    void resize(double factor) override {\n        radius *= factor;\n        cout << "Circle resized to radius " << radius << endl;\n    }\n    \n    // Additional function\n    double getRadius() const { return radius; }\n};\n\n// Another derived class\nclass Rectangle : public Drawable, public Resizable, public Colorable {\nprivate:\n    double length, width;\n    \npublic:\n    Rectangle(string c, double l, double w) : Colorable(c), length(l), width(w) {}\n    \n    void draw() const override {\n        cout << "Drawing a " << color << " rectangle " << length << "x" << width << endl;\n    }\n    \n    void resize(double factor) override {\n        length *= factor;\n        width *= factor;\n        cout << "Rectangle resized to " << length << "x" << width << endl;\n    }\n};\n\n// Function using multiple inheritance polymorphism\nvoid processShape(const Drawable& d) {\n    d.draw();\n}\n\nint main() {\n    cout << "--- Creating objects ---" << endl;\n    Circle circle("red", 5.0);\n    Rectangle rect("blue", 4.0, 6.0);\n    \n    cout << "\\n--- Using polymorphism with Drawable ---" << endl;\n    vector<const Drawable*> shapes;\n    shapes.push_back(&circle);\n    shapes.push_back(&rect);\n    \n    for(const auto& shape : shapes) {\n        shape->draw();\n    }\n    \n    cout << "\\n--- Using Resizable interface ---" << endl;\n    circle.resize(2.0);\n    rect.resize(1.5);\n    \n    cout << "\\n--- Using Colorable interface ---" << endl;\n    cout << "Circle color: " << circle.getColor() << endl;\n    cout << "Rectangle color: " << rect.getColor() << endl;\n    \n    circle.setColor("green");\n    cout << "Circle new color: " << circle.getColor() << endl;\n    \n    cout << "\\n--- Processing via function ---" << endl;\n    processShape(circle);\n    processShape(rect);\n    \n    return 0;\n}',
    hint: "This demonstrates multiple inheritance from multiple base classes, virtual functions, polymorphism, and interface implementation.",
  },
);