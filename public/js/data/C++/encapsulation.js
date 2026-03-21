QuizData.questions.push(
{
  id: "cpp_encapsulation_1",
  topicId: "cpp_encapsulation",
  question: "What is encapsulation in C++? Explain with example.",
  mathSolution: "Encapsulation concept",
  codeSolution: "Encapsulation is the bundling of data and methods that operate on that data within a single unit (class), and restricting direct access to some of an object's components.\n\nExample:\nclass BankAccount {\nprivate:\n    double balance;  // Hidden data\npublic:\n    void deposit(double amount) { balance += amount; }\n    double getBalance() { return balance; }\n};",
  hint: "Encapsulation = data hiding + bundling data and methods together. Like a capsule protecting what's inside."
},
{
  id: "cpp_encapsulation_2",
  topicId: "cpp_encapsulation",
  question: "How is encapsulation achieved in C++?",
  mathSolution: "Achieving encapsulation",
  codeSolution: "Encapsulation in C++ is achieved through:\n\n1. Access specifiers (private, protected, public)\n2. Classes and objects\n3. Getters and setters (accessor and mutator functions)\n4. Friend functions (limited access)\n\nclass Example {\nprivate:  // Hide data\n    int data;\npublic:   // Public interface\n    void setData(int d) { data = d; }\n    int getData() { return data; }\n};",
  hint: "Use private access specifier for data, provide public methods to access/modify data."
},
{
  id: "cpp_encapsulation_3",
  topicId: "cpp_encapsulation",
  question: "What are access specifiers in C++? How do they help in encapsulation?",
  mathSolution: "Access specifiers",
  codeSolution: "Access specifiers control the visibility of class members:\n\n1. private: Accessible only within the same class\n2. protected: Accessible within class and derived classes\n3. public: Accessible from anywhere\n\nclass Student {\nprivate:\n    string name;     // Hidden - encapsulation\n    int age;         // Hidden - encapsulation\n    \npublic:\n    void setName(string n) { name = n; }  // Controlled access\n    string getName() { return name; }      // Controlled access\n};",
  hint: "private hides data (encapsulation), public provides controlled interface, protected for inheritance."
},
{
  id: "cpp_encapsulation_4",
  topicId: "cpp_encapsulation",
  question: "What is the difference between encapsulation and abstraction?",
  mathSolution: "Encapsulation vs Abstraction",
  codeSolution: "Encapsulation:\n- Hides data (implementation details)\n- Focuses on HOW data is protected\n- Achieved through private members\n- Prevents direct access\n\nAbstraction:\n- Hides complexity\n- Focuses on WHAT interface provides\n- Achieved through abstract classes/interfaces\n- Provides simplified view\n\nclass Car {\nprivate:  // Encapsulation - hide engine details\n    Engine engine;\n    \npublic:   // Abstraction - simple interface\n    void start() { engine.ignite(); }  // Hide complexity\n};",
  hint: "Encapsulation = hiding data (security). Abstraction = hiding complexity (simplicity)."
},
{
  id: "cpp_encapsulation_5",
  topicId: "cpp_encapsulation",
  question: "What are getters and setters? Why are they used?",
  mathSolution: "Getters and setters",
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Person {\nprivate:\n    string name;\n    int age;\n    \npublic:\n    // Getter (accessor)\n    string getName() { return name; }\n    \n    // Setter (mutator) with validation\n    void setName(string n) {\n        if(!n.empty()) {\n            name = n;\n        }\n    }\n    \n    int getAge() { return age; }\n    \n    void setAge(int a) {\n        if(a > 0 && a < 150) {  // Validation\n            age = a;\n        }\n    }\n};\n\nint main() {\n    Person p;\n    p.setName("Alice");\n    p.setAge(25);\n    cout << p.getName() << " is " << p.getAge() << " years old" << endl;\n    return 0;\n}',
  hint: "Getters retrieve data, setters modify data with validation/control. Enforce encapsulation by controlling access."
},
{
  id: "cpp_encapsulation_6",
  topicId: "cpp_encapsulation",
  question: "Why should data members be private?",
  mathSolution: "Benefits of private data",
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass BankAccount {\nprivate:\n    double balance;  // Private - encapsulated\n    \npublic:\n    void deposit(double amount) {\n        if(amount > 0) {\n            balance += amount;\n            cout << "Deposited: " << amount << endl;\n        }\n    }\n    \n    void withdraw(double amount) {\n        if(amount > 0 && amount <= balance) {\n            balance -= amount;\n            cout << "Withdrawn: " << amount << endl;\n        }\n    }\n    \n    double getBalance() { return balance; }\n};\n\nint main() {\n    BankAccount acc;\n    // acc.balance = 10000;  // Error: private\n    acc.deposit(500);        // Controlled access\n    acc.withdraw(200);       // Controlled access\n    cout << "Balance: " << acc.getBalance() << endl;\n    return 0;\n}',
  hint: "Private data prevents direct modification, allows validation, maintains data integrity, and hides implementation."
},
{
  id: "cpp_encapsulation_7",
  topicId: "cpp_encapsulation",
  question: "What is a friend function? How does it affect encapsulation?",
  mathSolution: "Friend function",
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Box {\nprivate:\n    int width;\n    int height;\n    \npublic:\n    Box(int w, int h) : width(w), height(h) {}\n    \n    // Friend function - breaks encapsulation slightly\n    friend void printDimensions(const Box& b);\n};\n\n// Friend function can access private members\nvoid printDimensions(const Box& b) {\n    cout << "Width: " << b.width << ", Height: " << b.height << endl;\n}\n\nint main() {\n    Box box(10, 20);\n    printDimensions(box);  // Accesses private data\n    return 0;\n}',
  hint: "Friend functions can access private members. They slightly weaken encapsulation but are useful for operators, etc."
},
{
  id: "cpp_encapsulation_8",
  topicId: "cpp_encapsulation",
  question: "What is a friend class? Give example.",
  mathSolution: "Friend class",
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Engine {\nprivate:\n    int horsepower;\n    bool isRunning;\n    \npublic:\n    Engine(int hp) : horsepower(hp), isRunning(false) {}\n    \n    // Car class is a friend\n    friend class Car;\n};\n\nclass Car {\nprivate:\n    string model;\n    Engine engine;\n    \npublic:\n    Car(string m, int hp) : model(m), engine(hp) {}\n    \n    void startCar() {\n        // Accessing Engine\'s private members\n        engine.isRunning = true;\n        cout << model << " started with " << engine.horsepower << " HP engine" << endl;\n    }\n    \n    void stopCar() {\n        engine.isRunning = false;\n        cout << model << " stopped" << endl;\n    }\n};\n\nint main() {\n    Car myCar("Tesla", 500);\n    myCar.startCar();\n    myCar.stopCar();\n    return 0;\n}',
  hint: "Friend class can access private members of another class. Useful for tightly coupled classes."
},
{
  id: "cpp_encapsulation_9",
  topicId: "cpp_encapsulation",
  question: "What is data hiding? How is it related to encapsulation?",
  mathSolution: "Data hiding",
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Student {\nprivate:  // Data hiding\n    string name;\n    int rollNumber;\n    double marks[5];\n    double percentage;\n    \n    // Hidden calculation\n    void calculatePercentage() {\n        double total = 0;\n        for(int i = 0; i < 5; i++) {\n            total += marks[i];\n        }\n        percentage = total / 5;\n    }\n    \npublic:\n    void setMarks(double m1, double m2, double m3, double m4, double m5) {\n        marks[0] = m1; marks[1] = m2; marks[2] = m3;\n        marks[3] = m4; marks[4] = m5;\n        calculatePercentage();  // Internal call - hidden from user\n    }\n    \n    double getPercentage() {\n        return percentage;\n    }\n};\n\nint main() {\n    Student s;\n    s.setMarks(85, 90, 78, 92, 88);\n    cout << "Percentage: " << s.getPercentage() << "%" << endl;\n    // s.calculatePercentage();  // Error: private - hidden\n    return 0;\n}',
  hint: "Data hiding is the core of encapsulation. Hide internal data and implementation details, expose only necessary interface."
},
{
  id: "cpp_encapsulation_10",
  topicId: "cpp_encapsulation",
  question: "How does encapsulation improve code maintainability?",
  mathSolution: "Maintainability benefits",
  codeSolution: "// Without encapsulation - tightly coupled\nclass Employee {\npublic:\n    string name;        // Direct access\n    double salary;      // Direct access\n    string department;  // Direct access\n};\n\n// With encapsulation - loosely coupled\nclass Employee {\nprivate:\n    string name;\n    double salary;\n    string department;\n    \npublic:\n    void setName(string n) { name = n; }\n    void setSalary(double s) { salary = s; }\n    void setDepartment(string d) { department = d; }\n    \n    double calculateBonus() {\n        // Complex bonus logic - can change without affecting users\n        return salary * 0.1;\n    }\n};\n\n// Changes to implementation don't affect client code\nint main() {\n    Employee e;\n    e.setName(\"Alice\");\n    e.setSalary(50000);\n    e.calculateBonus();  // Always works even if bonus logic changes\n    return 0;\n}",
  hint: "Encapsulation allows changing implementation without affecting code that uses the class. Internal changes don't break external code."
},
{
  id: "cpp_encapsulation_11",
  topicId: "cpp_encapsulation",
  question: "What is the difference between public, private, and protected members?",
  mathSolution: "Access specifiers comparison",
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Base {\nprivate:\n    int privateVar;    // Only accessible in Base\n    \nprotected:\n    int protectedVar;  // Accessible in Base and derived classes\n    \npublic:\n    int publicVar;     // Accessible everywhere\n    \n    Base() : privateVar(1), protectedVar(2), publicVar(3) {}\n    \n    void show() {\n        cout << privateVar << protectedVar << publicVar;  // All OK\n    }\n};\n\nclass Derived : public Base {\npublic:\n    void display() {\n        // cout << privateVar;   // Error: private\n        cout << protectedVar;     // OK: protected\n        cout << publicVar;        // OK: public\n    }\n};\n\nint main() {\n    Base b;\n    // cout << b.privateVar;    // Error\n    // cout << b.protectedVar;   // Error\n    cout << b.publicVar;          // OK\n    return 0;\n}',
  hint: "private = class only, protected = class + derived, public = everyone."
},
{
  id: "cpp_encapsulation_12",
  topicId: "cpp_encapsulation",
  question: "Can encapsulation be bypassed in C++? How?",
  mathSolution: "Bypassing encapsulation",
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Secret {\nprivate:\n    int privateData;\n    \npublic:\n    Secret(int d) : privateData(d) {}\n    \n    // Way 1: Friend function\n    friend void hack(Secret& s);\n    \n    // Way 2: Provide access indirectly\n    int* getPointer() { return &privateData; }  // Dangerous!\n};\n\n// Friend can access private\nvoid hack(Secret& s) {\n    cout << "Friend accessing: " << s.privateData << endl;\n    s.privateData = 999;\n}\n\nint main() {\n    Secret s(42);\n    \n    // Way 3: Pointer manipulation (not recommended)\n    int* ptr = (int*)&s;  // Cast object address\n    cout << "Pointer hack: " << *ptr << endl;\n    *ptr = 100;\n    \n    hack(s);  // Friend access\n    \n    return 0;\n}',
  hint: "Encapsulation can be bypassed via friends, pointer manipulation, or providing pointer access. Good design avoids this."
},
{
  id: "cpp_encapsulation_13",
  topicId: "cpp_encapsulation",
  question: "What is the purpose of const member functions in encapsulation?",
  mathSolution: "Const member functions",
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Rectangle {\nprivate:\n    int length;\n    int width;\n    mutable int accessCount;  // Can change in const functions\n    \npublic:\n    Rectangle(int l, int w) : length(l), width(w), accessCount(0) {}\n    \n    // Const member function - promises not to modify object\n    int getArea() const {\n        accessCount++;  // OK because mutable\n        return length * width;\n    }\n    \n    int getPerimeter() const {\n        return 2 * (length + width);\n    }\n    \n    // Non-const function - can modify\n    void resize(int factor) {\n        length *= factor;\n        width *= factor;\n    }\n    \n    int getAccessCount() const { return accessCount; }\n};\n\nvoid printRectangle(const Rectangle& r) {\n    // Can only call const member functions on const reference\n    cout << "Area: " << r.getArea() << endl;\n    cout << "Perimeter: " << r.getPerimeter() << endl;\n    // r.resize(2);  // Error: cannot call non-const on const\n}\n\nint main() {\n    Rectangle r(5, 3);\n    printRectangle(r);\n    cout << "Accessed: " << r.getAccessCount() << " times" << endl;\n    return 0;\n}',
  hint: "const member functions enforce encapsulation by promising not to modify object. Safe to call on const objects/references."
},
{
  id: "cpp_encapsulation_14",
  topicId: "cpp_encapsulation",
  question: "What is the difference between shallow copy and deep copy in encapsulated classes?",
  mathSolution: "Shallow vs Deep copy",
  codeSolution: '#include <iostream>\n#include <cstring>\nusing namespace std;\n\nclass String {\nprivate:\n    char* data;  // Dynamic memory - needs deep copy\n    int length;\n    \npublic:\n    String(const char* s) {\n        length = strlen(s);\n        data = new char[length + 1];\n        strcpy(data, s);\n    }\n    \n    // Deep copy constructor - proper encapsulation\n    String(const String& other) {\n        length = other.length;\n        data = new char[length + 1];\n        strcpy(data, other.data);\n        cout << "Deep copy performed" << endl;\n    }\n    \n    // Assignment operator with deep copy\n    String& operator=(const String& other) {\n        if(this != &other) {\n            delete[] data;\n            length = other.length;\n            data = new char[length + 1];\n            strcpy(data, other.data);\n        }\n        return *this;\n    }\n    \n    void display() const { cout << data << endl; }\n    \n    ~String() { delete[] data; }\n};\n\nint main() {\n    String s1("Hello");\n    String s2 = s1;  // Deep copy - each has own memory\n    \n    s1.display();\n    s2.display();\n    return 0;\n}',
  hint: "Classes with pointers need deep copy (copy data, not just pointer) to maintain encapsulation and prevent double delete."
},
{
  id: "cpp_encapsulation_15",
  topicId: "cpp_encapsulation",
  question: "How does encapsulation support the Single Responsibility Principle?",
  mathSolution: "Encapsulation and SRP",
  codeSolution: '#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Class with single responsibility - each encapsulated\nclass Employee {\nprivate:\n    string name;\n    int id;\n    double salary;\n    \npublic:\n    Employee(string n, int i, double s) : name(n), id(i), salary(s) {}\n    \n    string getName() const { return name; }\n    int getId() const { return id; }\n    double getSalary() const { return salary; }\n    void setSalary(double s) { if(s > 0) salary = s; }\n};\n\nclass PayrollSystem {\nprivate:\n    vector<Employee> employees;\n    \npublic:\n    void addEmployee(const Employee& e) {\n        employees.push_back(e);\n    }\n    \n    double calculateTotalPayroll() {\n        double total = 0;\n        for(const auto& e : employees) {\n            total += e.getSalary();\n        }\n        return total;\n    }\n};\n\nclass EmployeeReport {\npublic:\n    void generateReport(const vector<Employee>& employees) {\n        cout << "Employee Report:" << endl;\n        for(const auto& e : employees) {\n            cout << e.getName() << " (ID: " << e.getId() << "): $" \n                 << e.getSalary() << endl;\n        }\n    }\n};\n\nint main() {\n    Employee e1("Alice", 101, 50000);\n    Employee e2("Bob", 102, 60000);\n    \n    PayrollSystem payroll;\n    payroll.addEmployee(e1);\n    payroll.addEmployee(e2);\n    \n    cout << "Total Payroll: $" << payroll.calculateTotalPayroll() << endl;\n    \n    vector<Employee> empList = {e1, e2};\n    EmployeeReport report;\n    report.generateReport(empList);\n    \n    return 0;\n}',
  hint: "Encapsulation helps each class focus on one responsibility, hiding internal details and providing clean interfaces."
},
{
  id: "cpp_encapsulation_16",
  topicId: "cpp_encapsulation",
  question: "What is the pImpl (Pointer to Implementation) idiom? How does it enhance encapsulation?",
  mathSolution: "pImpl idiom",
  codeSolution: "// widget.h - Public header (stable interface)\nclass Widget {\nprivate:\n    struct Impl;  // Forward declaration\n    Impl* pImpl;  // Pointer to implementation\n    \npublic:\n    Widget();\n    ~Widget();\n    void draw();\n    void resize(int w, int h);\n};\n\n// widget.cpp - Implementation (hidden)\n#include \"widget.h\"\n#include <iostream>\nusing namespace std;\n\nstruct Widget::Impl {\n    int width;\n    int height;\n    string name;\n    vector<int> data;\n    // Many more private members...\n    \n    void draw() {\n        cout << \"Drawing \" << name << \" (\" << width << \"x\" << height << \")\" << endl;\n    }\n};\n\nWidget::Widget() : pImpl(new Impl()) {\n    pImpl->width = 100;\n    pImpl->height = 100;\n    pImpl->name = \"Widget\";\n}\n\nWidget::~Widget() { delete pImpl; }\n\nvoid Widget::draw() { pImpl->draw(); }\n\nvoid Widget::resize(int w, int h) {\n    pImpl->width = w;\n    pImpl->height = h;\n}",
  hint: "pImpl hides implementation completely. Changes to implementation don't affect clients (no recompile). Perfect encapsulation."
},

{
  id: "cpp_encapsulation_17",
  topicId: "cpp_encapsulation",
  question: "How does encapsulation help in debugging and testing?",
  mathSolution: "Debugging benefits",
  codeSolution: '#include <iostream>\nusing namespace std;\n\nclass Stack {\nprivate:\n    int* data;\n    int top;\n    int capacity;\n    \n    // Private validation - encapsulation helps testing\n    bool isValidIndex(int index) const {\n        return index >= 0 && index < top;\n    }\n    \npublic:\n    Stack(int size) : capacity(size), top(0) {\n        data = new int[capacity];\n    }\n    \n    ~Stack() { delete[] data; }\n    \n    void push(int value) {\n        if(top < capacity) {\n            data[top++] = value;\n        }\n    }\n    \n    int pop() {\n        if(top > 0) {\n            return data[--top];\n        }\n        return -1;  // Error value\n    }\n    \n    // Public interface for testing/debugging\n    int getSize() const { return top; }\n    bool isEmpty() const { return top == 0; }\n    \n    // Debug helper (could be conditional)\n    void debugPrint() const {\n        cout << \"Stack [top=\" << top << \"]: \";\n        for(int i = 0; i < top; i++) {\n            cout << data[i] << \" \";\n        }\n        cout << endl;\n    }\n};\n\nint main() {\n    Stack s(5);\n    s.push(10);\n    s.push(20);\n    s.debugPrint();  // Debug output\n    \n    cout << \"Popped: \" << s.pop() << endl;\n    cout << \"Size: \" << s.getSize() << endl;\n    \n    return 0;\n}',
  hint: "Encapsulation provides controlled access points, making it easier to test and debug by adding logging/validation at boundaries."
},
{
  id: "cpp_encapsulation_18",
  topicId: "cpp_encapsulation",
  question: "What is the difference between tight coupling and loose coupling in relation to encapsulation?",
  mathSolution: "Tight vs Loose coupling",
  codeSolution: '#include <iostream>\nusing namespace std;\n\n// Tight coupling - poor encapsulation\nclass Engine {\npublic:\n    void start() { cout << "Engine started" << endl; }\n};\n\nclass Car {\npublic:\n    Engine engine;  // Direct access - tight coupling\n    \n    void start() {\n        engine.start();\n    }\n};\n\n// Loose coupling - good encapsulation\nclass Engine2 {\nprivate:\n    bool running;\npublic:\n    void start() { running = true; cout << "Engine started" << endl; }\n    void stop() { running = false; }\n    bool isRunning() { return running; }\n};\n\nclass Car2 {\nprivate:\n    Engine2 engine;  // Hidden - loose coupling\n    \npublic:\n    void startCar() {\n        engine.start();\n        cout << "Car ready" << endl;\n    }\n    \n    void stopCar() {\n        engine.stop();\n    }\n};\n\nint main() {\n    // Tight coupling - can access engine directly\n    Car c;\n    c.engine.start();  // Direct access - bad\n    \n    // Loose coupling - only interface exposed\n    Car2 c2;\n    c2.startCar();\n    // c2.engine.start();  // Error: private - good\n    \n    return 0;\n}',
  hint: "Encapsulation promotes loose coupling by hiding implementation and exposing only necessary interface. Changes in one class don't affect others."
},
  {
    id: "cpp_encapsulation_19",
    topicId: "cpp_encapsulation",
    question: "How does encapsulation support information hiding?",
    mathSolution: "Information hiding",
    codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass DatabaseConnection {\nprivate:\n    string connectionString;\n    string username;\n    string password;\n    bool connected;\n    \n    // Hidden implementation details\n    string encryptPassword(const string& pwd) {\n        string encrypted = "";\n        for(char c : pwd) {\n            encrypted += char(c + 1);  // Simple encryption\n        }\n        return encrypted;\n    }\n    \n    bool authenticate() {\n        // Complex authentication logic - hidden\n        return !username.empty() && !password.empty();\n    }\n    \npublic:\n    DatabaseConnection(string conn, string user, string pass) \n        : connectionString(conn), username(user), password(pass), connected(false) {}\n    \n    void connect() {\n        if(authenticate()) {\n            // Actual connection code - hidden from user\n            connected = true;\n            cout << "Connected to database" << endl;\n        }\n    }\n    \n    void disconnect() {\n        connected = false;\n        cout << "Disconnected from database" << endl;\n    }\n    \n    bool isConnected() const { return connected; }\n    \n    // User doesn\'t need to know about encryption, authentication, etc.\n};\n\nint main() {\n    DatabaseConnection db("localhost:3306/mydb", "admin", "secret");\n    db.connect();\n    cout << "Connected: " << db.isConnected() << endl;\n    db.disconnect();\n    \n    // Can\'t access internal details\n    // db.authenticate();  // Error: private\n    // db.encryptPassword();  // Error: private\n    \n    return 0;\n}',
    hint: "Information hiding = hiding complex implementation details (algorithms, data structures) behind a simple interface."
  },
  {
    id: "cpp_encapsulation_20",
    topicId: "cpp_encapsulation",
    question: "What is the role of const correctness in encapsulation?",
    mathSolution: "Const correctness",
    codeSolution: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass DataCollection {\nprivate:\n    vector<int> data;\n    mutable int accessCount;\n    \npublic:\n    void addItem(int item) {\n        data.push_back(item);\n    }\n    \n    // Const member function - promises not to modify\n    int getItem(int index) const {\n        accessCount++;  // OK because mutable\n        if(index >= 0 && index < data.size()) {\n            return data[index];\n        }\n        return -1;\n    }\n    \n    int getSize() const {\n        return data.size();\n    }\n    \n    // Non-const version allows modification\n    int& getItemRef(int index) {\n        if(index >= 0 && index < data.size()) {\n            return data[index];\n        }\n        throw out_of_range("Index out of range");\n    }\n    \n    int getAccessCount() const { return accessCount; }\n};\n\nvoid printCollection(const DataCollection& dc) {\n    // Can only call const member functions\n    for(int i = 0; i < dc.getSize(); i++) {\n        cout << dc.getItem(i) << " ";\n    }\n    cout << " (Accessed: " << dc.getAccessCount() << " times)\\" << endl;\n}\n\nint main() {\n    DataCollection dc;\n    dc.addItem(10);\n    dc.addItem(20);\n    \n    printCollection(dc);  // Works with const reference\n    \n    dc.getItemRef(0) = 100;  // Modify through non-const\n    printCollection(dc);\n    \n    return 0;\n}',
    hint: "Const correctness extends encapsulation by marking which functions modify object and which don't. Safe to use with const objects/references."
  },
  {
    id: "cpp_encapsulation_21",
    topicId: "cpp_encapsulation",
    question: "How do namespaces help with encapsulation?",
    mathSolution: "Namespaces",
    codeSolution: '#include <iostream>\nusing namespace std;\n\n// Hide implementation details in anonymous namespace\nnamespace {\n    // Internal helper - not accessible outside this file\n    int internalHelper(int x) {\n        return x * x;\n    }\n    \n    const int MAGIC_NUMBER = 42;\n}\n\n// Public interface in named namespace\nnamespace MathUtils {\n    class Calculator {\n    private:\n        int result;\n        \n    public:\n        Calculator() : result(0) {}\n        \n        int square(int x) {\n            result = internalHelper(x);  // Using internal helper\n            return result;\n        }\n        \n        int getMagicNumber() {\n            return MAGIC_NUMBER;\n        }\n    };\n    \n    // Public helper\n    int add(int a, int b) { return a + b; }\n}\n\nint main() {\n    MathUtils::Calculator calc;\n    cout << "Square: " << calc.square(5) << endl;\n    cout << "Magic: " << calc.getMagicNumber() << endl;\n    cout << "Add: " << MathUtils::add(10, 20) << endl;\n    \n    // internalHelper(10);  // Error: not accessible\n    // cout << MAGIC_NUMBER;  // Error: not accessible\n    \n    return 0;\n}',
    hint: "Namespaces group related code and can hide implementation (anonymous namespace). Prevent name conflicts and expose only intended interface."
  },
  {
    id: "cpp_encapsulation_22",
    topicId: "cpp_encapsulation",
    question: "What is the difference between class and struct in terms of encapsulation?",
    mathSolution: "Class vs Struct encapsulation",
    codeSolution: '#include <iostream>\nusing namespace std;\n\n// struct - members public by default (weaker encapsulation)\nstruct Point {\n    int x;  // public by default\n    int y;  // public by default\n    \n    void display() { cout << "(" << x << ", " << y << ")" << endl; }\n};\n\n// class - members private by default (stronger encapsulation)\nclass BankAccount {\n    double balance;  // private by default\n    string owner;    // private by default\n    \npublic:\n    BankAccount(string o) : owner(o), balance(0) {}\n    \n    void deposit(double amt) {\n        if(amt > 0) balance += amt;\n    }\n    \n    double getBalance() const { return balance; }\n};\n\nint main() {\n    Point p;\n    p.x = 10;  // OK - public\n    p.y = 20;  // OK - public\n    p.display();\n    \n    BankAccount acc("Alice");\n    // acc.balance = 1000;  // Error: private\n    acc.deposit(500);       // OK - through interface\n    cout << "Balance: " << acc.getBalance() << endl;\n    \n    return 0;\n}',
    hint: "Only difference: default access (struct = public, class = private). Use struct for simple data aggregates, class for encapsulated objects."
  },
  {
    id: "cpp_encapsulation_23",
    topicId: "cpp_encapsulation",
    question: "How does encapsulation help in creating immutable objects?",
    mathSolution: "Immutable objects",
    codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\nclass ImmutablePerson {\nprivate:\n    const string name;\n    const int age;\n    const string id;\n    \npublic:\n    // Constructor - only place to set values\n    ImmutablePerson(string n, int a, string i) : name(n), age(a), id(i) {}\n    \n    // Only getters, no setters\n    string getName() const { return name; }\n    int getAge() const { return age; }\n    string getId() const { return id; }\n    \n    // To \'modify\', create new object\n    ImmutablePerson withAge(int newAge) const {\n        return ImmutablePerson(name, newAge, id);\n    }\n    \n    void display() const {\n        cout << name << " (" << age << ") ID: " << id << endl;\n    }\n};\n\nint main() {\n    ImmutablePerson p1("Alice", 25, "A123");\n    p1.display();\n    \n    // p1.age = 26;  // Error: const\n    \n    ImmutablePerson p2 = p1.withAge(26);  // Create modified copy\n    p2.display();\n    \n    return 0;\n}',
    hint: "Encapsulation with const members and no setters creates immutable objects. Thread-safe and predictable."
  },
  {
    id: "cpp_encapsulation_24",
    topicId: "cpp_encapsulation",
    question: "What is the Law of Demeter (Principle of Least Knowledge)? How does it relate to encapsulation?",
    mathSolution: "Law of Demeter",
    codeSolution: '#include <iostream>\n#include <string>\nusing namespace std;\n\n// Bad - violates Law of Demeter\nclass Address {\npublic:\n    string city;\n    string street;\n};\n\nclass Person {\npublic:\n    Address* address;  // Direct exposure\n    string name;\n};\n\nclass Company {\npublic:\n    void printEmployeeCity(Person* p) {\n        cout << p->address->city;  // Knows too much: Company knows Person knows Address\n    }\n};\n\n// Good - follows Law of Demeter\nclass Address2 {\nprivate:\n    string city;\n    string street;\npublic:\n    Address2(string c, string s) : city(c), street(s) {}\n    string getCity() const { return city; }\n};\n\nclass Person2 {\nprivate:\n    Address2* address;\n    string name;\npublic:\n    Person2(string n, Address2* a) : name(n), address(a) {}\n    string getCity() const { return address->getCity(); }  // Person handles it\n};\n\nclass Company2 {\npublic:\n    void printEmployeeCity(Person2* p) {\n        cout << p->getCity();  // Only knows Person, not Address\n    }\n};\n\nint main() {\n    // Bad\n    Address addr{\"NYC\", \"5th Ave\"};\n    Person p{&addr, \"Alice\"};\n    Company c;\n    c.printEmployeeCity(&p);\n    \n    // Good\n    Address2 addr2(\"NYC\", \"5th Ave\");\n    Person2 p2(\"Alice\", &addr2);\n    Company2 c2;\n    c2.printEmployeeCity(&p2);\n    \n    return 0;\n}',
    hint: "Law of Demeter: only talk to immediate friends. Encapsulation helps by hiding internal objects, providing direct methods instead."
  },
  {
    id: "cpp_encapsulation_25",
    topicId: "cpp_encapsulation",
    question: "Write a complete program demonstrating multiple encapsulation concepts.",
    mathSolution: "Complete encapsulation example",
    codeSolution: '#include <iostream>\n#include <vector>\n#include <string>\n#include <stdexcept>\nusing namespace std;\n\n// Encapsulated class with multiple concepts\nclass BankAccount {\nprivate:\n    // Data hiding - private members\n    string accountNumber;\n    string ownerName;\n    double balance;\n    vector<string> transactionHistory;\n    static int totalAccounts;\n    \n    // Private helper method - implementation hiding\n    void addTransaction(string type, double amount) {\n        string record = type + ": $" + to_string(amount) + " | Balance: $" + to_string(balance);\n        transactionHistory.push_back(record);\n    }\n    \n    // Validation - encapsulation ensures data integrity\n    bool validateAmount(double amount) const {\n        return amount > 0;\n    }\n    \npublic:\n    // Constructor - initializes encapsulated data\n    BankAccount(string owner, double initialDeposit = 0) \n        : ownerName(owner), balance(0) {\n        // Generate account number (simplified)\n        accountNumber = "ACC" + to_string(++totalAccounts);\n        \n        if(initialDeposit > 0) {\n            deposit(initialDeposit);\n        }\n        \n        cout << "Account created for " << ownerName << " (" << accountNumber << ")" << endl;\n    }\n    \n    // Destructor\n    ~BankAccount() {\n        cout << "Account " << accountNumber << " closed" << endl;\n    }\n    \n    // Copy constructor - deep copy for vector\n    BankAccount(const BankAccount& other) \n        : accountNumber(other.accountNumber + "_COPY"),\n          ownerName(other.ownerName),\n          balance(other.balance),\n          transactionHistory(other.transactionHistory) {\n        totalAccounts++;\n        cout << "Account copied for " << ownerName << endl;\n    }\n    \n    // Const member functions - read-only access\n    string getAccountNumber() const { return accountNumber; }\n    string getOwnerName() const { return ownerName; }\n    double getBalance() const { return balance; }\n    \n    // Public interface with validation - controlled access\n    void deposit(double amount) {\n        if(!validateAmount(amount)) {\n            throw invalid_argument("Deposit amount must be positive");\n        }\n        \n        balance += amount;\n        addTransaction("DEPOSIT", amount);\n        cout << "Deposited $" << amount << " to " << accountNumber << endl;\n    }\n    \n    void withdraw(double amount) {\n        if(!validateAmount(amount)) {\n            throw invalid_argument("Withdrawal amount must be positive");\n        }\n        \n        if(amount > balance) {\n            throw runtime_error("Insufficient funds");\n        }\n        \n        balance -= amount;\n        addTransaction("WITHDRAW", amount);\n        cout << "Withdrew $" << amount << " from " << accountNumber << endl;\n    }\n    \n    // Const member function - doesn\'t modify object\n    void displayStatement() const {\n        cout << "\\n=== Account Statement ===" << endl;\n        cout << "Account: " << accountNumber << " | Owner: " << ownerName << endl;\n        cout << "Current Balance: $" << balance << endl;\n        cout << "Transaction History:" << endl;\n        \n        if(transactionHistory.empty()) {\n            cout << "  No transactions yet" << endl;\n        } else {\n            for(const auto& trans : transactionHistory) {\n                cout << "  " << trans << endl;\n            }\n        }\n        cout << "========================\\n" << endl;\n    }\n    \n    // Friend function - limited access\n    friend void transferFunds(BankAccount& from, BankAccount& to, double amount);\n    \n    // Static member function\n    static int getTotalAccounts() { return totalAccounts; }\n};\n\n// Initialize static member\nint BankAccount::totalAccounts = 0;\n\n// Friend function definition\nvoid transferFunds(BankAccount& from, BankAccount& to, double amount) {\n    cout << "\\n--- Transferring $" << amount << " from " << from.accountNumber \n         << " to " << to.accountNumber << " ---" << endl;\n    \n    from.withdraw(amount);\n    to.deposit(amount);\n    \n    cout << "Transfer complete" << endl;\n}\n\n// Class demonstrating composition (has-a relationship)\nclass Customer {\nprivate:\n    string name;\n    vector<BankAccount*> accounts;  // Aggregation - doesn\'t own accounts\n    \npublic:\n    Customer(string n) : name(n) {}\n    \n    void addAccount(BankAccount* acc) {\n        accounts.push_back(acc);\n        cout << "Added account " << acc->getAccountNumber() << " to customer " << name << endl;\n    }\n    \n    void displayCustomerInfo() const {\n        cout << "\\nCustomer: " << name << endl;\n        cout << "Accounts: " << accounts.size() << endl;\n        for(const auto& acc : accounts) {\n            cout << "  - " << acc->getAccountNumber() << ": $" << acc->getBalance() << endl;\n        }\n    }\n};\n\nint main() {\n    cout << "=== Encapsulation Demo ===\\n" << endl;\n    \n    try {\n        // Creating objects - constructors called\n        BankAccount acc1("Alice", 1000);\n        BankAccount acc2("Bob", 500);\n        \n        // Using public interface\n        acc1.deposit(200);\n        acc1.withdraw(150);\n        acc2.deposit(300);\n        \n        // Display statements\n        acc1.displayStatement();\n        acc2.displayStatement();\n        \n        // Transfer using friend function\n        transferFunds(acc1, acc2, 400);\n        \n        acc1.displayStatement();\n        acc2.displayStatement();\n        \n        // Copy constructor demo\n        BankAccount acc3 = acc1;  // Copy\n        acc3.displayStatement();\n        \n        // Composition demo\n        Customer customer("Alice");\n        customer.addAccount(&acc1);\n        customer.addAccount(&acc3);\n        customer.displayCustomerInfo();\n        \n        // Static member access\n        cout << "\\nTotal accounts created: " << BankAccount::getTotalAccounts() << endl;\n        \n        // Const correctness - can\'t modify through const reference\n        const BankAccount& constRef = acc1;\n        cout << "Const access: " << constRef.getOwnerName() << " - " \n             << constRef.getBalance() << endl;\n        // constRef.deposit(100);  // Error: const member function only\n        \n        // Validation in action\n        // acc1.withdraw(10000);  // Would throw exception - insufficient funds\n        // acc1.deposit(-50);     // Would throw exception - invalid amount\n        \n    } catch(const exception& e) {\n        cerr << "Error: " << e.what() << endl;\n    }\n    \n    cout << "\\n=== End of Demo ===" << endl;\n    \n    return 0;\n}',
    hint: "This demonstrates: private data, encapsulation, getters/setters, validation, const functions, friend functions, static members, copy constructor, and composition."
  }

);