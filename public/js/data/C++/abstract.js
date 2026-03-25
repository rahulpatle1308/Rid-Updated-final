QuizData.questions.push(
  {
    id: "cpp_abstraction_1",
    topicId: "cpp_abstraction",
    question: "What is abstraction in C++? Explain with example.",
    mathSolution: "Abstraction concept",
    codeSolution:
      "Abstraction is the concept of hiding complex implementation details and showing only essential features to the user.\n\nExample:\nA car's steering wheel abstracts the complex mechanism of turning wheels. User only knows turning steering wheel turns car.",
    hint: "Abstraction = showing WHAT an object does, hiding HOW it does it.",
  },
  {
    id: "cpp_abstraction_2",
    topicId: "cpp_abstraction",
    question: "How is abstraction achieved in C++?",
    mathSolution: "Ways to achieve abstraction",
    codeSolution:
      "Abstraction in C++ can be achieved through:\n\n1. Classes (using public, private, protected access specifiers)\n2. Abstract classes (with pure virtual functions)\n3. Interfaces (classes with all pure virtual functions)\n4. Header files (separating interface from implementation)",
    hint: "4 ways: classes (access specifiers), abstract classes, interfaces, header files.",
  },
  {
    id: "cpp_abstraction_3",
    topicId: "cpp_abstraction",
    question: "What is the difference between abstraction and encapsulation?",
    mathSolution: "Abstraction vs Encapsulation",
    codeSolution:
      "Abstraction:\n- Hides implementation details\n- Focuses on what the object does\n- Achieved through abstract classes/interfaces\n\nEncapsulation:\n- Bundles data and methods\n- Hides data using private access\n- Achieved through classes with private members\n\nExample:\nclass Calculator {\nprivate:  // Encapsulation - hiding data\n    int internalState;\npublic:   // Abstraction - providing interface\n    int add(int a, int b) { return a + b; }\n};",
    hint: "Abstraction = hiding complexity (WHAT). Encapsulation = hiding data (HOW).",
  },
  {
    id: "cpp_abstraction_4",
    topicId: "cpp_abstraction",
    question: "What is an abstract class in C++?",
    mathSolution: "Abstract class concept",
    codeSolution:
      'An abstract class is a class that cannot be instantiated. It contains at least one pure virtual function.\n\nclass Shape {  // Abstract class\npublic:\n    virtual void draw() = 0;  // Pure virtual function\n    virtual double area() = 0;\n    \n    void info() {  // Concrete method\n        cout << "This is a shape" << endl;\n    }\n};',
    hint: "Abstract class has at least one pure virtual function (=0). Cannot create objects of abstract class.",
  },
  {
    id: "cpp_abstraction_5",
    topicId: "cpp_abstraction",
    question: "What is a pure virtual function? Give example.",
    mathSolution: "Pure virtual function",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    // Pure virtual function\n    virtual void draw() = 0;\n    \n    // Virtual function with implementation\n    virtual void info() {\n        cout << "This is a shape" << endl;\n    }\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() override {\n        cout << "Drawing circle" << endl;\n    }\n};\n\nint main() {\n    // Shape s;  // Error: cannot instantiate abstract class\n    Circle c;\n    c.draw();\n    c.info();\n    return 0;\n}',
    hint: "Pure virtual function = virtual void func() = 0; Makes class abstract, must be overridden in derived classes.",
  },
  {
    id: "cpp_abstraction_6",
    topicId: "cpp_abstraction",
    question: "Can we create an object of an abstract class? Why?",
    mathSolution: "Abstract class instantiation",
    codeSolution:
      "#include <iostream>\nusing namespace std;\n\nclass Abstract {\npublic:\n    virtual void func() = 0;  // Pure virtual\n};\n\nint main() {\n    // Abstract obj;  // Error: cannot declare variable of abstract type\n    \n    // But we can use pointers/references to abstract class\n    Abstract* ptr;  // OK - pointer is fine\n    \n    return 0;\n}",
    hint: "No, cannot create objects of abstract class because it has pure virtual functions with no implementation. But pointers/references are allowed.",
  },
  {
    id: "cpp_abstraction_7",
    topicId: "cpp_abstraction",
    question: "What is an interface in C++? How is it implemented?",
    mathSolution: "Interface concept",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\n// Interface in C++ - class with all pure virtual functions\nclass Drawable {\npublic:\n    virtual void draw() = 0;\n    virtual void resize(double factor) = 0;\n    virtual ~Drawable() {}\n};\n\nclass Circle : public Drawable {\nprivate:\n    double radius;\npublic:\n    Circle(double r) : radius(r) {}\n    \n    void draw() override {\n        cout << "Drawing circle with radius " << radius << endl;\n    }\n    \n    void resize(double factor) override {\n        radius *= factor;\n        cout << "Circle resized to radius " << radius << endl;\n    }\n};\n\nint main() {\n    Drawable* d = new Circle(5.0);\n    d->draw();\n    d->resize(2.0);\n    delete d;\n    return 0;\n}',
    hint: "Interface in C++ is an abstract class with all pure virtual functions. Defines a contract that derived classes must implement.",
  },
  {
    id: "cpp_abstraction_8",
    topicId: "cpp_abstraction",
    question: "What is the difference between abstract class and interface?",
    mathSolution: "Abstract class vs Interface",
    codeSolution:
      "Abstract class:\n- Can have both pure virtual and concrete functions\n- Can have data members\n- Can have constructors\n- Single inheritance only\n\nInterface (in C++):\n- All functions pure virtual\n- Usually no data members\n- No constructors\n- Multiple inheritance possible\n\n// Abstract class\nclass Shape {\nprotected:\n    string color;  // Data member\npublic:\n    virtual void draw() = 0;  // Pure virtual\n    void info() { }           // Concrete\n};\n\n// Interface\nclass Drawable {\npublic:\n    virtual void draw() = 0;  // Only pure virtual\n    virtual ~Drawable() {}\n};",
    hint: "Abstract class can have implementation and data. Interface is pure contract with only pure virtual functions.",
  },
  {
    id: "cpp_abstraction_9",
    topicId: "cpp_abstraction",
    question:
      "Can an abstract class have constructors? If yes, what is their use?",
    mathSolution: "Constructors in abstract class",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Shape {\nprotected:\n    string color;\npublic:\n    // Constructor in abstract class\n    Shape(string c) : color(c) {\n        cout << "Shape constructor: setting color to " << color << endl;\n    }\n    \n    virtual void draw() = 0;\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\npublic:\n    Circle(string c, double r) : Shape(c), radius(r) {}\n    \n    void draw() override {\n        cout << "Drawing " << color << " circle" << endl;\n    }\n};\n\nint main() {\n    Circle c("red", 5.0);\n    c.draw();\n    return 0;\n}',
    hint: "Yes, abstract classes can have constructors. They are called when derived class objects are created to initialize base class members.",
  },
  {
    id: "cpp_abstraction_10",
    topicId: "cpp_abstraction",
    question: "Can an abstract class have destructors? Should they be virtual?",
    mathSolution: "Destructors in abstract class",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    Shape() { cout << "Shape constructor" << endl; }\n    \n    // Pure virtual function\n    virtual void draw() = 0;\n    \n    // Virtual destructor - essential for abstract class\n    virtual ~Shape() {\n        cout << "Shape destructor" << endl;\n    }\n};\n\nclass Circle : public Shape {\nprivate:\n    int* data;\npublic:\n    Circle() { \n        data = new int[100];\n        cout << "Circle constructor" << endl; \n    }\n    \n    void draw() override {\n        cout << "Drawing circle" << endl;\n    }\n    \n    ~Circle() override {\n        delete[] data;\n        cout << "Circle destructor" << endl;\n    }\n};\n\nint main() {\n    Shape* ptr = new Circle();\n    ptr->draw();\n    delete ptr;  // Both destructors called (virtual)\n    return 0;\n}',
    hint: "Yes, abstract classes should have virtual destructors to ensure proper cleanup of derived class objects.",
  },
  {
    id: "cpp_abstraction_11",
    topicId: "cpp_abstraction",
    question:
      "What happens if a derived class does not override all pure virtual functions?",
    mathSolution: "Incomplete implementation",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    virtual void draw() = 0;\n    virtual double area() = 0;\n};\n\n// Circle overrides only draw(), not area()\nclass Circle : public Shape {\nprivate:\n    double radius;\npublic:\n    Circle(double r) : radius(r) {}\n    \n    void draw() override {\n        cout << "Drawing circle" << endl;\n    }\n    \n    // Missing area() override - Circle becomes abstract too!\n};\n\n// Complete implementation\nclass Rectangle : public Shape {\nprivate:\n    double length, width;\npublic:\n    Rectangle(double l, double w) : length(l), width(w) {}\n    \n    void draw() override {\n        cout << "Drawing rectangle" << endl;\n    }\n    \n    double area() override {\n        return length * width;\n    }\n};\n\nint main() {\n    // Circle c;  // Error: Circle is still abstract!\n    Rectangle r(4, 5);  // OK\n    r.draw();\n    cout << "Area: " << r.area() << endl;\n    return 0;\n}',
    hint: "If derived class doesn't override all pure virtual functions, it becomes abstract itself and cannot be instantiated.",
  },
  {
    id: "cpp_abstraction_12",
    topicId: "cpp_abstraction",
    question: "Can we have a pure virtual destructor? If yes, why and how?",
    mathSolution: "Pure virtual destructor",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Abstract {\npublic:\n    // Pure virtual destructor\n    virtual ~Abstract() = 0;  // Must provide implementation\n};\n\n// Pure virtual destructor MUST be defined\nAbstract::~Abstract() {\n    cout << "Abstract destructor" << endl;\n}\n\nclass Derived : public Abstract {\npublic:\n    ~Derived() override {\n        cout << "Derived destructor" << endl;\n    }\n};\n\nint main() {\n    Abstract* ptr = new Derived();\n    delete ptr;  // Calls Derived destructor, then Abstract destructor\n    return 0;\n}',
    hint: "Yes, destructor can be pure virtual. But must provide implementation outside class because destructors are called in reverse order.",
  },
  {
    id: "cpp_abstraction_13",
    topicId: "cpp_abstraction",
    question: "How does abstraction help in code maintenance?",
    mathSolution: "Benefits of abstraction",
    codeSolution:
      "// Without abstraction - tight coupling\nclass Car {\npublic:\n    void startEngine() {\n        // Complex engine starting code\n        // If this changes, Car class must change\n    }\n};\n\n// With abstraction - loose coupling\nclass Engine {\npublic:\n    virtual void start() = 0;  // Abstract interface\n};\n\nclass PetrolEngine : public Engine {\npublic:\n    void start() override {\n        // Petrol engine specific code\n    }\n};\n\nclass Car {\nprivate:\n    Engine* engine;  // Depends on abstraction, not concrete class\npublic:\n    Car(Engine* e) : engine(e) {}\n    void start() { engine->start(); }  // Doesn't care about engine type\n};",
    hint: "Abstraction reduces coupling, makes code easier to modify/extend. Changes in implementation don't affect clients.",
  },
  {
    id: "cpp_abstraction_14",
    topicId: "cpp_abstraction",
    question: "What is the role of access specifiers in achieving abstraction?",
    mathSolution: "Access specifiers for abstraction",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass BankAccount {\nprivate:  // HIDE implementation details\n    double balance;\n    string accountNumber;\n    void validateTransaction(double amount) {\n        // Complex validation logic - hidden\n    }\n    \npublic:   // SHOW essential interface\n    BankAccount(string accNo) : balance(0), accountNumber(accNo) {}\n    \n    void deposit(double amount) {\n        validateTransaction(amount);\n        balance += amount;\n        cout << "Deposited: " << amount << endl;\n    }\n    \n    double getBalance() {  // Controlled access\n        return balance;\n    }\n};\n\nint main() {\n    BankAccount acc("12345");\n    acc.deposit(1000);\n    cout << "Balance: " << acc.getBalance() << endl;\n    \n    // acc.balance = 10000;  // Error: private\n    // acc.validateTransaction(500);  // Error: private\n    return 0;\n}',
    hint: "public members form the interface (abstraction). private/protected hide implementation details.",
  },
  {
    id: "cpp_abstraction_15",
    topicId: "cpp_abstraction",
    question: "What is data abstraction? Give example.",
    mathSolution: "Data abstraction",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Student {\nprivate:  // Data hiding\n    string name;\n    int age;\n    double gpa;\n    string studentId;\n    \n    // Internal helper - hidden\n    string generateId() {\n        return "STU" + to_string(rand() % 10000);\n    }\n    \npublic:   // Abstracted interface\n    Student(string n, int a) : name(n), age(a), gpa(0.0) {\n        studentId = generateId();\n    }\n    \n    void displayInfo() {\n        cout << "ID: " << studentId << ", Name: " << name << ", Age: " << age << endl;\n    }\n    \n    void updateGPA(double newGPA) {\n        if(newGPA >= 0.0 && newGPA <= 4.0) {\n            gpa = newGPA;\n        }\n    }\n    \n    double getGPA() { return gpa; }\n};\n\nint main() {\n    Student s("Alice", 20);\n    s.displayInfo();\n    s.updateGPA(3.8);\n    cout << "GPA: " << s.getGPA() << endl;\n    \n    // Cannot access private data members\n    // s.name = "Bob";  // Error\n    return 0;\n}',
    hint: "Data abstraction hides data representation and provides controlled access through member functions.",
  },
  {
    id: "cpp_abstraction_16",
    topicId: "cpp_abstraction",
    question: "How are header files used for abstraction in C++?",
    mathSolution: "Header files for abstraction",
    codeSolution:
      '// MathOperations.h - Interface (WHAT)\n#ifndef MATH_OPERATIONS_H\n#define MATH_OPERATIONS_H\n\nclass MathOperations {\nprivate:\n    // Implementation details not shown\n    int internalState;\n    \npublic:\n    MathOperations();\n    int add(int a, int b);\n    int multiply(int a, int b);\n    double power(double base, int exp);\n};\n\n#endif\n\n// MathOperations.cpp - Implementation (HOW)\n#include "MathOperations.h"\n#include <cmath>\n\nMathOperations::MathOperations() : internalState(0) {}\n\nint MathOperations::add(int a, int b) {\n    return a + b;\n}\n\nint MathOperations::multiply(int a, int b) {\n    return a * b;\n}\n\ndouble MathOperations::power(double base, int exp) {\n    return std::pow(base, exp);\n}',
    hint: "Header files declare interface (abstraction). Implementation in .cpp files hides details. Users see only header.",
  },
  {
    id: "cpp_abstraction_17",
    topicId: "cpp_abstraction",
    question: "What is the difference between abstraction and polymorphism?",
    mathSolution: "Abstraction vs Polymorphism",
    codeSolution:
      "Abstraction:\n- Hides implementation details\n- Provides clean interface\n- Achieved through abstract classes, access specifiers\n\nPolymorphism:\n- Many forms of behavior\n- Same interface, different implementations\n- Achieved through virtual functions, overloading\n\n// Abstraction: Shape provides interface\nclass Shape {\npublic:\n    virtual void draw() = 0;  // Abstract interface\n};\n\n// Polymorphism: Different draw() implementations\nclass Circle : public Shape {\n    void draw() override { /* circle drawing */ }\n};\n\nclass Square : public Shape {\n    void draw() override { /* square drawing */ }\n};",
    hint: "Abstraction is about hiding complexity. Polymorphism is about providing multiple implementations through same interface.",
  },
  {
    id: "cpp_abstraction_18",
    topicId: "cpp_abstraction",
    question: "Can we have a concrete function in an abstract class?",
    mathSolution: "Concrete functions in abstract class",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Database {\nprotected:\n    string connectionString;\n    \npublic:\n    Database(string conn) : connectionString(conn) {}\n    \n    // Pure virtual - must be overridden\n    virtual void connect() = 0;\n    virtual void disconnect() = 0;\n    \n    // Concrete function - common for all derived classes\n    void setConnectionString(string conn) {\n        connectionString = conn;\n        cout << "Connection string updated" << endl;\n    }\n    \n    // Another concrete function\n    string getConnectionInfo() {\n        return "Connected to: " + connectionString;\n    }\n};\n\nclass MySQLDatabase : public Database {\npublic:\n    MySQLDatabase(string conn) : Database(conn) {}\n    \n    void connect() override {\n        cout << "Connecting to MySQL using: " << connectionString << endl;\n    }\n    \n    void disconnect() override {\n        cout << "Disconnecting from MySQL" << endl;\n    }\n};\n\nint main() {\n    MySQLDatabase db("localhost:3306/mydb");\n    db.setConnectionString("localhost:3306/newdb");\n    db.connect();\n    cout << db.getConnectionInfo() << endl;\n    db.disconnect();\n    return 0;\n}',
    hint: "Yes, abstract classes can have concrete functions with implementation. Only pure virtual functions must be overridden.",
  },
  {
    id: "cpp_abstraction_19",
    topicId: "cpp_abstraction",
    question: "What is the Factory pattern? How does it use abstraction?",
    mathSolution: "Factory pattern",
    codeSolution:
      '#include <iostream>\n#include <memory>\nusing namespace std;\n\n// Abstract product\nclass Animal {\npublic:\n    virtual void speak() = 0;\n    virtual ~Animal() {}\n};\n\n// Concrete products\nclass Dog : public Animal {\npublic:\n    void speak() override { cout << "Dog barks" << endl; }\n};\n\nclass Cat : public Animal {\npublic:\n    void speak() override { cout << "Cat meows" << endl; }\n};\n\n// Abstract factory\nclass AnimalFactory {\npublic:\n    virtual Animal* createAnimal() = 0;\n    virtual ~AnimalFactory() {}\n};\n\n// Concrete factories\nclass DogFactory : public AnimalFactory {\npublic:\n    Animal* createAnimal() override { return new Dog(); }\n};\n\nclass CatFactory : public AnimalFactory {\npublic:\n    Animal* createAnimal() override { return new Cat(); }\n};\n\nint main() {\n    AnimalFactory* factory = new DogFactory();\n    Animal* animal = factory->createAnimal();\n    animal->speak();\n    \n    delete animal;\n    delete factory;\n    \n    factory = new CatFactory();\n    animal = factory->createAnimal();\n    animal->speak();\n    \n    delete animal;\n    delete factory;\n    \n    return 0;\n}',
    hint: "Factory pattern uses abstraction to create objects without specifying exact class. Client depends on abstract interfaces.",
  },
  {
    id: "cpp_abstraction_20",
    topicId: "cpp_abstraction",
    question: "What is the Strategy pattern? How does it use abstraction?",
    mathSolution: "Strategy pattern",
    codeSolution:
      '#include <iostream>\n#include <vector>\nusing namespace std;\n\n// Abstract strategy\nclass SortStrategy {\npublic:\n    virtual void sort(vector<int>& data) = 0;\n    virtual ~SortStrategy() {}\n};\n\n// Concrete strategies\nclass BubbleSort : public SortStrategy {\npublic:\n    void sort(vector<int>& data) override {\n        cout << "Using bubble sort" << endl;\n        // Bubble sort implementation\n        for(size_t i = 0; i < data.size()-1; i++) {\n            for(size_t j = 0; j < data.size()-i-1; j++) {\n                if(data[j] > data[j+1]) {\n                    swap(data[j], data[j+1]);\n                }\n            }\n        }\n    }\n};\n\nclass QuickSort : public SortStrategy {\npublic:\n    void sort(vector<int>& data) override {\n        cout << "Using quick sort" << endl;\n        // Quick sort implementation would be here\n    }\n};\n\n// Context that uses the strategy\nclass Sorter {\nprivate:\n    SortStrategy* strategy;\npublic:\n    Sorter(SortStrategy* s) : strategy(s) {}\n    \n    void setStrategy(SortStrategy* s) {\n        strategy = s;\n    }\n    \n    void sort(vector<int>& data) {\n        strategy->sort(data);\n    }\n};\n\nint main() {\n    vector<int> data = {5, 2, 8, 1, 9};\n    \n    BubbleSort bubble;\n    QuickSort quick;\n    \n    Sorter sorter(&bubble);\n    sorter.sort(data);\n    \n    sorter.setStrategy(&quick);\n    sorter.sort(data);\n    \n    return 0;\n}',
    hint: "Strategy pattern uses abstraction to define family of algorithms. Client can switch algorithms at runtime.",
  },
  {
    id: "cpp_abstraction_21",
    topicId: "cpp_abstraction",
    question: "How does abstraction support the Open-Closed Principle?",
    mathSolution: "Open-Closed Principle",
    codeSolution:
      '#include <iostream>\n#include <vector>\nusing namespace std;\n\n// Abstract base - closed for modification, open for extension\nclass PaymentMethod {\npublic:\n    virtual void pay(double amount) = 0;\n    virtual ~PaymentMethod() {}\n};\n\n// Existing implementations\nclass CreditCard : public PaymentMethod {\npublic:\n    void pay(double amount) override {\n        cout << "Paid " << amount << " using Credit Card" << endl;\n    }\n};\n\nclass PayPal : public PaymentMethod {\npublic:\n    void pay(double amount) override {\n        cout << "Paid " << amount << " using PayPal" << endl;\n    }\n};\n\n// New payment method can be added without modifying existing code\nclass GooglePay : public PaymentMethod {\npublic:\n    void pay(double amount) override {\n        cout << "Paid " << amount << " using Google Pay" << endl;\n    }\n};\n\nclass PaymentProcessor {\npublic:\n    void processPayment(PaymentMethod* method, double amount) {\n        method->pay(amount);  // Works with any payment method\n    }\n};\n\nint main() {\n    PaymentProcessor processor;\n    \n    CreditCard cc;\n    PayPal pp;\n    GooglePay gp;\n    \n    processor.processPayment(&cc, 100.50);\n    processor.processPayment(&pp, 75.25);\n    processor.processPayment(&gp, 50.00);  // New method works!\n    \n    return 0;\n}',
    hint: "Abstraction allows extending functionality without modifying existing code. New classes can be added by implementing abstract interface.",
  },
  {
    id: "cpp_abstraction_22",
    topicId: "cpp_abstraction",
    question:
      "What is the difference between runtime abstraction and compile-time abstraction?",
    mathSolution: "Runtime vs Compile-time abstraction",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\n// Runtime abstraction (via virtual functions)\nclass RuntimeShape {\npublic:\n    virtual void draw() = 0;\n};\n\nclass RuntimeCircle : public RuntimeShape {\n    void draw() override { cout << "Runtime: Drawing circle" << endl; }\n};\n\n// Compile-time abstraction (via templates)\ntemplate <typename T>\nclass CompiteShape {\nprivate:\n    T shape;\npublic:\n    void draw() { shape.draw(); }\n};\n\nclass CompileCircle {\npublic:\n    void draw() { cout << "Compile-time: Drawing circle" << endl; }\n};\n\nclass CompileSquare {\npublic:\n    void draw() { cout << "Compile-time: Drawing square" << endl; }\n};\n\nint main() {\n    // Runtime polymorphism\n    RuntimeShape* s = new RuntimeCircle();\n    s->draw();  // Decided at runtime\n    delete s;\n    \n    // Compile-time polymorphism\n    CompiteShape<CompileCircle> c1;\n    CompiteShape<CompileSquare> c2;\n    c1.draw();  // Decided at compile time\n    c2.draw();\n    \n    return 0;\n}',
    hint: "Runtime abstraction (virtual functions) - decision at runtime, more flexible. Compile-time abstraction (templates) - decision at compile time, faster.",
  },
  {
    id: "cpp_abstraction_23",
    topicId: "cpp_abstraction",
    question: "Can we have static data members in an abstract class?",
    mathSolution: "Static members in abstract class",
    codeSolution:
      '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Shape {\nprotected:\n    string color;\n    \npublic:\n    static int objectCount;  // Static data member\n    \n    Shape(string c) : color(c) {\n        objectCount++;\n    }\n    \n    virtual void draw() = 0;\n    \n    static int getCount() {  // Static member function\n        return objectCount;\n    }\n    \n    virtual ~Shape() {\n        objectCount--;\n    }\n};\n\nint Shape::objectCount = 0;  // Initialize static member\n\nclass Circle : public Shape {\npublic:\n    Circle(string c) : Shape(c) {}\n    \n    void draw() override {\n        cout << "Drawing " << color << " circle" << endl;\n    }\n};\n\nint main() {\n    cout << "Initial count: " << Shape::getCount() << endl;\n    \n    Circle c1("red");\n    Circle c2("blue");\n    \n    cout << "After creating circles: " << Shape::getCount() << endl;\n    \n    {\n        Circle c3("green");\n        cout << "Inside block: " << Shape::getCount() << endl;\n    }\n    \n    cout << "After c3 destroyed: " << Shape::getCount() << endl;\n    \n    return 0;\n}',
    hint: "Yes, abstract classes can have static data members and static functions. They belong to the class, not objects.",
  },
  {
    id: "cpp_abstraction_24",
    topicId: "cpp_abstraction",
    question:
      "What is the NVI (Non-Virtual Interface) pattern? How does it relate to abstraction?",
    mathSolution: "NVI pattern",
    codeSolution:
      '#include <iostream>\nusing namespace std;\n\nclass Shape {\npublic:\n    // Public non-virtual interface - stable abstraction\n    void draw() {\n        cout << "Preparing to draw..." << endl;\n        doDraw();           // Virtual call\n        cout << "Finished drawing" << endl;\n    }\n    \n    virtual ~Shape() {}\n    \nprivate:\n    // Private virtual function - implementation hook\n    virtual void doDraw() = 0;\n};\n\nclass Circle : public Shape {\nprivate:\n    void doDraw() override {\n        cout << "   Drawing circle" << endl;\n    }\n};\n\nclass Rectangle : public Shape {\nprivate:\n    void doDraw() override {\n        cout << "   Drawing rectangle" << endl;\n    }\n};\n\nint main() {\n    Circle c;\n    Rectangle r;\n    \n    c.draw();  // Same interface, different behavior\n    r.draw();\n    \n    return 0;\n}',
    hint: "NVI pattern makes all virtual functions private/protected, provides public non-virtual interface. Separates interface from implementation.",
  },
  {
    id: "cpp_abstraction_25",
    topicId: "cpp_abstraction",
    question:
      "Write a complete program demonstrating multiple levels of abstraction.",
    mathSolution: "Multi-level abstraction",
    codeSolution:
      '#include <iostream>\n#include <vector>\n#include <memory>\nusing namespace std;\n\n// Level 1: Abstract base (most abstract)\nclass Vehicle {\nprotected:\n    string model;\n    int year;\n    \npublic:\n    Vehicle(string m, int y) : model(m), year(y) {}\n    virtual ~Vehicle() {}\n    \n    // Pure virtual - core abstraction\n    virtual void start() = 0;\n    virtual void stop() = 0;\n    virtual double getFuelEfficiency() = 0;\n    \n    // Concrete with default implementation\n    virtual void info() {\n        cout << "Model: " << model << ", Year: " << year << endl;\n    }\n    \n    // Non-virtual interface\n    void operate() {\n        cout << "\\n--- Operating " << model << " ---" << endl;\n        start();\n        cout << "Vehicle in motion..." << endl;\n        stop();\n    }\n};\n\n// Level 2: Abstract for land vehicles\nclass LandVehicle : public Vehicle {\nprotected:\n    int wheels;\n    \npublic:\n    LandVehicle(string m, int y, int w) : Vehicle(m, y), wheels(w) {}\n    \n    // Additional abstraction for land vehicles\n    virtual void drive() = 0;\n    \n    void info() override {\n        Vehicle::info();\n        cout << "Type: Land Vehicle, Wheels: " << wheels << endl;\n    }\n};\n\n// Level 3: Concrete implementations\nclass Car : public LandVehicle {\nprivate:\n    double engineSize;\n    \npublic:\n    Car(string m, int y, int w, double e) \n        : LandVehicle(m, y, w), engineSize(e) {}\n    \n    void start() override {\n        cout << "Car engine starting with key..." << endl;\n    }\n    \n    void stop() override {\n        cout << "Car stopping with brakes..." << endl;\n    }\n    \n    void drive() override {\n        cout << "Driving car on road..." << endl;\n    }\n    \n    double getFuelEfficiency() override {\n        return 15.5 / engineSize;  // Simplified calculation\n    }\n    \n    void info() override {\n        LandVehicle::info();\n        cout << "Engine: " << engineSize << "L" << endl;\n    }\n};\n\nclass Motorcycle : public LandVehicle {\nprivate:\n    bool hasFairing;\n    \npublic:\n    Motorcycle(string m, int y, int w, bool f) \n        : LandVehicle(m, y, w), hasFairing(f) {}\n    \n    void start() override {\n        cout << "Motorcycle starting with button..." << endl;\n    }\n    \n    void stop() override {\n        cout << "Motorcycle stopping..." << endl;\n    }\n    \n    void drive() override {\n        cout << "Riding motorcycle..." << endl;\n    }\n    \n    double getFuelEfficiency() override {\n        return 25.0;  // More efficient than car\n    }\n    \n    void info() override {\n        LandVehicle::info();\n        cout << "Fairing: " << (hasFairing ? "Yes" : "No") << endl;\n    }\n};\n\n// Level 2: Abstract for water vehicles\nclass WaterVehicle : public Vehicle {\nprotected:\n    double displacement;\n    \npublic:\n    WaterVehicle(string m, int y, double d) : Vehicle(m, y), displacement(d) {}\n    \n    virtual void sail() = 0;\n    \n    void info() override {\n        Vehicle::info();\n        cout << "Type: Water Vehicle, Displacement: " << displacement << " tons" << endl;\n    }\n};\n\n// Level 3: Concrete water vehicle\nclass Boat : public WaterVehicle {\nprivate:\n    bool hasMotor;\n    \npublic:\n    Boat(string m, int y, double d, bool motor) \n        : WaterVehicle(m, y, d), hasMotor(motor) {}\n    \n    void start() override {\n        if(hasMotor) {\n            cout << "Boat motor starting..." << endl;\n        } else {\n            cout << "Boat is manually operated" << endl;\n        }\n    }\n    \n    void stop() override {\n        cout << "Boat stopping..." << endl;\n    }\n    \n    void sail() override {\n        cout << "Boat sailing on water..." << endl;\n    }\n    \n    double getFuelEfficiency() override {\n        return hasMotor ? 5.0 : 999.9;  // No fuel if no motor\n    }\n};\n\n// Function that works with highest abstraction\nvoid displayVehicleInfo(const Vehicle& v) {\n    v.info();\n    cout << "Fuel Efficiency: " << v.getFuelEfficiency() << " km/l" << endl;\n}\n\nint main() {\n    cout << "=== Multiple Levels of Abstraction Demo ===\\n" << endl;\n    \n    // Create various vehicles\n    Car car("Toyota Camry", 2022, 4, 2.5);\n    Motorcycle bike("Harley Davidson", 2023, 2, true);\n    Boat boat("Yamaha Speedboat", 2023, 2.5, true);\n    \n    // Store as base pointers\n    vector<Vehicle*> vehicles;\n    vehicles.push_back(&car);\n    vehicles.push_back(&bike);\n    vehicles.push_back(&boat);\n    \n    // Demonstrate abstraction\n    for(Vehicle* v : vehicles) {\n        v->operate();  // Same interface, different implementations\n        displayVehicleInfo(*v);\n        cout << "-------------------" << endl;\n    }\n    \n    // Demonstrate specific interfaces\n    cout << "\\n=== Land Vehicle Specific Operations ===\\n" << endl;\n    LandVehicle* land1 = &car;\n    LandVehicle* land2 = &bike;\n    land1->drive();\n    land2->drive();\n    \n    cout << "\\n=== Water Vehicle Specific Operations ===\\n" << endl;\n    WaterVehicle* water = &boat;\n    water->sail();\n    \n    cout << "\\n=== Abstraction Benefits Demonstrated ===\\n" << endl;\n    cout << "1. High-level abstraction (Vehicle): common operations" << endl;\n    cout << "2. Mid-level abstraction (LandVehicle/WaterVehicle): specialized interfaces" << endl;\n    cout << "3. Low-level implementation (Car/Motorcycle/Boat): concrete details" << endl;\n    cout << "4. Uniform interface through base class pointers" << endl;\n    cout << "5. Implementation details hidden at each level" << endl;\n    \n    return 0;\n}',
    hint: "This demonstrates multi-level abstraction: Vehicle (top) → LandVehicle/WaterVehicle (mid) → Car/Motorcycle/Boat (concrete). Each level adds appropriate abstraction.",
  },
);
