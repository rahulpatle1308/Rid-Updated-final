QuizData.questions.push(
  // BASIC CONSTRUCTORS (4)
  {
    id: "constructor_1",
    topicId: "constructor",
    question: "Create a simple default constructor.",
    mathSolution: "Constructor has same name as class, no return type",
    codeSolution:
      'class Student {\n    String name;\n    int age;\n    \n    // Default constructor\n    Student() {\n        name = "Unknown";\n        age = 0;\n        System.out.println("Default constructor called");\n    }\n    \n    void display() {\n        System.out.println("Name: " + name + ", Age: " + age);\n    }\n}\n\nStudent s1 = new Student(); // constructor called\ns1.display();',
    hint: "Constructor is called when object is created with new",
  },
  {
    id: "constructor_2",
    topicId: "constructor",
    question: "Create parameterized constructor.",
    mathSolution: "Constructor with parameters to initialize object",
    codeSolution:
      'class Rectangle {\n    double length;\n    double width;\n    \n    // Parameterized constructor\n    Rectangle(double l, double w) {\n        length = l;\n        width = w;\n        System.out.println("Parameterized constructor called");\n    }\n    \n    double area() {\n        return length * width;\n    }\n}\n\nRectangle r1 = new Rectangle(5.5, 3.2);\nSystem.out.println("Area: " + r1.area());',
    hint: "Parameters passed during object creation",
  },
  {
    id: "constructor_3",
    topicId: "constructor",
    question: "Multiple constructors - constructor overloading.",
    mathSolution:
      "Class can have multiple constructors with different parameters",
    codeSolution:
      'class Box {\n    double length, width, height;\n    \n    // No-arg constructor\n    Box() {\n        length = width = height = 1;\n        System.out.println("Default Box");\n    }\n    \n    // Constructor with one parameter (cube)\n    Box(double side) {\n        length = width = height = side;\n        System.out.println("Cube Box");\n    }\n    \n    // Constructor with three parameters\n    Box(double l, double w, double h) {\n        length = l;\n        width = w;\n        height = h;\n        System.out.println("Parameterized Box");\n    }\n    \n    double volume() {\n        return length * width * height;\n    }\n}\n\nBox b1 = new Box();\nBox b2 = new Box(5);\nBox b3 = new Box(2, 3, 4);\n\nSystem.out.println("Volume b1: " + b1.volume());\nSystem.out.println("Volume b2: " + b2.volume());\nSystem.out.println("Volume b3: " + b3.volume());',
    hint: "Overloaded constructors provide flexibility",
  },
  {
    id: "constructor_4",
    topicId: "constructor",
    question: "Constructor with default values if not provided.",
    mathSolution: "Use constructor chaining for defaults",
    codeSolution:
      'class Employee {\n    int id;\n    String name;\n    double salary;\n    \n    Employee() {\n        this(0, "Unknown", 0.0); // calls 3-param constructor\n    }\n    \n    Employee(int id) {\n        this(id, "Unknown", 0.0);\n    }\n    \n    Employee(int id, String name) {\n        this(id, name, 0.0);\n    }\n    \n    Employee(int id, String name, double salary) {\n        this.id = id;\n        this.name = name;\n        this.salary = salary;\n    }\n    \n    void display() {\n        System.out.println(id + ", " + name + ", $" + salary);\n    }\n}\n\nEmployee e1 = new Employee();\nEmployee e2 = new Employee(101);\nEmployee e3 = new Employee(102, "Alice");\nEmployee e4 = new Employee(103, "Bob", 50000);\n\ne1.display();\ne2.display();\ne3.display();\ne4.display();',
    hint: "this() calls another constructor in same class",
  },

  // CONSTRUCTOR CHAINING (4)
  {
    id: "constructor_5",
    topicId: "constructor",
    question: "Constructor chaining using this() keyword.",
    mathSolution: "One constructor calls another using this()",
    codeSolution:
      'class Person {\n    String name;\n    int age;\n    String city;\n    \n    Person() {\n        this("Unknown", 0, "Unknown");\n        System.out.println("No-arg constructor");\n    }\n    \n    Person(String name) {\n        this(name, 0, "Unknown");\n        System.out.println("One-arg constructor");\n    }\n    \n    Person(String name, int age) {\n        this(name, age, "Unknown");\n        System.out.println("Two-arg constructor");\n    }\n    \n    Person(String name, int age, String city) {\n        this.name = name;\n        this.age = age;\n        this.city = city;\n        System.out.println("Three-arg constructor");\n    }\n    \n    void display() {\n        System.out.println(name + ", " + age + ", " + city);\n    }\n}\n\nPerson p1 = new Person();\nSystem.out.println("---");\nPerson p2 = new Person("Alice");\nSystem.out.println("---");\nPerson p3 = new Person("Bob", 25);\nSystem.out.println("---");\nPerson p4 = new Person("Charlie", 30, "NYC");',
    hint: "this() must be first statement in constructor",
  },
  {
    id: "constructor_6",
    topicId: "constructor",
    question: "Constructor chaining with inheritance using super().",
    mathSolution: "Child constructor calls parent constructor",
    codeSolution:
      'class Animal {\n    String type;\n    \n    Animal() {\n        this("Unknown animal");\n        System.out.println("Animal default constructor");\n    }\n    \n    Animal(String type) {\n        this.type = type;\n        System.out.println("Animal parameterized constructor");\n    }\n}\n\nclass Dog extends Animal {\n    String breed;\n    \n    Dog() {\n        this("Unknown breed");\n        System.out.println("Dog default constructor");\n    }\n    \n    Dog(String breed) {\n        super("Dog"); // calls Animal(String) constructor\n        this.breed = breed;\n        System.out.println("Dog parameterized constructor");\n    }\n    \n    void display() {\n        System.out.println("Type: " + type + ", Breed: " + breed);\n    }\n}\n\nDog d = new Dog("Labrador");\nd.display();',
    hint: "super() calls parent constructor, must be first",
  },
  {
    id: "constructor_7",
    topicId: "constructor",
    question: "Implicit super() call if parent has default constructor.",
    mathSolution: "If no super(), default parent constructor called",
    codeSolution:
      'class Parent {\n    Parent() {\n        System.out.println("Parent constructor");\n    }\n}\n\nclass Child extends Parent {\n    Child() {\n        // super() is automatically inserted\n        System.out.println("Child constructor");\n    }\n}\n\nclass GrandChild extends Child {\n    GrandChild() {\n        // super() calls Child()\n        System.out.println("GrandChild constructor");\n    }\n}\n\nGrandChild gc = new GrandChild();\n// Output:\n// Parent constructor\n// Child constructor\n// GrandChild constructor',
    hint: "If no super(), default parent constructor called",
  },
  {
    id: "constructor_8",
    topicId: "constructor",
    question:
      "Parent must have default constructor if child doesn't call super explicitly.",
    mathSolution:
      "If parent lacks default constructor, child must call super explicitly",
    codeSolution:
      'class Parent {\n    String name;\n    \n    Parent(String name) { // No default constructor\n        this.name = name;\n        System.out.println("Parent constructor: " + name);\n    }\n}\n\nclass Child extends Parent {\n    int age;\n    \n    // Must call super explicitly\n    Child(String name, int age) {\n        super(name); // MUST call parent constructor\n        this.age = age;\n        System.out.println("Child constructor");\n    }\n    \n    // This would cause error:\n    // Child() { } // No super() call, and parent has no default\n}\n\nChild c = new Child("Alice", 10);',
    hint: "If parent has no default constructor, child must call super explicitly",
  },

  // COPY CONSTRUCTORS (3)
  {
    id: "constructor_9",
    topicId: "constructor",
    question: "Create a copy constructor to duplicate objects.",
    mathSolution: "Constructor that takes same type object as parameter",
    codeSolution:
      'class Point {\n    int x, y;\n    \n    Point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n    \n    // Copy constructor\n    Point(Point p) {\n        this.x = p.x;\n        this.y = p.y;\n        System.out.println("Copy constructor called");\n    }\n    \n    void display() {\n        System.out.println("(" + x + ", " + y + ")");\n    }\n}\n\nPoint p1 = new Point(5, 10);\nPoint p2 = new Point(p1); // copy constructor\nPoint p3 = p1; // This is reference copy, not object copy\n\np1.x = 100; // modify p1\n\nSystem.out.print("p1: "); p1.display();\nSystem.out.print("p2: "); p2.display(); // unchanged\nSystem.out.print("p3: "); p3.display(); // changed (same reference)',
    hint: "Copy constructor creates new object with same values",
  },
  {
    id: "constructor_10",
    topicId: "constructor",
    question: "Deep copy vs shallow copy in copy constructor.",
    mathSolution: "Copy constructor should handle reference types properly",
    codeSolution:
      'class Address {\n    String city;\n    \n    Address(String c) { city = c; }\n    Address(Address a) { city = a.city; } // copy constructor\n}\n\nclass Person implements Cloneable {\n    String name;\n    Address address;\n    \n    Person(String n, Address a) {\n        name = n;\n        address = a;\n    }\n    \n    // Shallow copy constructor\n    Person(Person p) {\n        this.name = p.name;\n        this.address = p.address; // same Address object!\n    }\n    \n    // Deep copy constructor\n    Person deepCopy(Person p) {\n        return new Person(p.name, new Address(p.address)); // new Address\n    }\n    \n    void display() {\n        System.out.println(name + " lives in " + address.city);\n    }\n}\n\nAddress a = new Address("NYC");\nPerson p1 = new Person("Alice", a);\nPerson p2 = new Person(p1); // shallow copy\nPerson p3 = p1.deepCopy(p1); // deep copy\n\np1.address.city = "Boston"; // change address\n\nSystem.out.print("p1: "); p1.display(); // Boston\nSystem.out.print("p2: "); p2.display(); // Boston (shallow - affected)\nSystem.out.print("p3: "); p3.display(); // NYC (deep - unaffected)',
    hint: "Deep copy creates copies of referenced objects too",
  },
  {
    id: "constructor_11",
    topicId: "constructor",
    question: "Copy constructor with complex objects.",
    mathSolution: "Copy all fields including collections",
    codeSolution:
      'import java.util.*;\n\nclass Course {\n    String name;\n    Course(String n) { name = n; }\n    Course(Course c) { name = c.name; }\n}\n\nclass Student {\n    String name;\n    List<Course> courses;\n    \n    Student(String n, List<Course> c) {\n        name = n;\n        courses = c;\n    }\n    \n    // Deep copy constructor\n    Student(Student s) {\n        this.name = s.name;\n        this.courses = new ArrayList<>();\n        for(Course c : s.courses) {\n            this.courses.add(new Course(c)); // copy each course\n        }\n    }\n    \n    void display() {\n        System.out.print(name + " takes: ");\n        for(Course c : courses) System.out.print(c.name + " ");\n        System.out.println();\n    }\n}\n\nList<Course> courses = Arrays.asList(new Course("Math"), new Course("Science"));\nStudent s1 = new Student("Alice", courses);\nStudent s2 = new Student(s1); // deep copy\n\ns1.courses.set(0, new Course("Physics")); // change s1\'s course\n\ns1.display();\ns2.display(); // unaffected by change',
    hint: "Collections need deep copying for complete independence",
  },

  // PRIVATE CONSTRUCTORS AND SINGLETON (3)
  {
    id: "constructor_12",
    topicId: "constructor",
    question: "Private constructor for singleton pattern.",
    mathSolution: "Private constructor prevents external instantiation",
    codeSolution:
      'class Singleton {\n    private static Singleton instance;\n    public String value;\n    \n    private Singleton() {\n        value = "Initial value";\n        System.out.println("Singleton created");\n    }\n    \n    public static Singleton getInstance() {\n        if(instance == null) {\n            instance = new Singleton();\n        }\n        return instance;\n    }\n}\n\n// Singleton s = new Singleton(); // ERROR - private constructor\n\nSingleton s1 = Singleton.getInstance();\nSingleton s2 = Singleton.getInstance();\n\ns1.value = "Changed value";\nSystem.out.println(s2.value); // Same instance\nSystem.out.println(s1 == s2); // true - same object',
    hint: "Private constructor for controlled instantiation",
  },
  {
    id: "constructor_13",
    topicId: "constructor",
    question: "Singleton with lazy initialization and thread safety.",
    mathSolution: "Thread-safe singleton with double-checked locking",
    codeSolution:
      'class ThreadSafeSingleton {\n    private static volatile ThreadSafeSingleton instance;\n    private static int instanceCount = 0;\n    \n    private ThreadSafeSingleton() {\n        instanceCount++;\n        System.out.println("Instance created: " + instanceCount);\n    }\n    \n    public static ThreadSafeSingleton getInstance() {\n        if(instance == null) {\n            synchronized(ThreadSafeSingleton.class) {\n                if(instance == null) {\n                    instance = new ThreadSafeSingleton();\n                }\n            }\n        }\n        return instance;\n    }\n}\n\n// Multiple threads trying to get instance\nRunnable task = () -> {\n    ThreadSafeSingleton s = ThreadSafeSingleton.getInstance();\n};\n\nThread t1 = new Thread(task);\nThread t2 = new Thread(task);\nThread t3 = new Thread(task);\n\nt1.start(); t2.start(); t3.start();\n// Only one instance created',
    hint: "Double-checked locking prevents multiple instances",
  },
  {
    id: "constructor_14",
    topicId: "constructor",
    question: "Utility class with private constructor.",
    mathSolution: "Private constructor prevents instantiation of utility class",
    codeSolution:
      'class MathUtils {\n    // Private constructor prevents instantiation\n    private MathUtils() {\n        throw new UnsupportedOperationException("Utility class cannot be instantiated");\n    }\n    \n    public static double circleArea(double radius) {\n        return Math.PI * radius * radius;\n    }\n    \n    public static double circleCircumference(double radius) {\n        return 2 * Math.PI * radius;\n    }\n    \n    public static int factorial(int n) {\n        if(n <= 1) return 1;\n        return n * factorial(n - 1);\n    }\n}\n\n// MathUtils mu = new MathUtils(); // ERROR or exception\n\nSystem.out.println("Area: " + MathUtils.circleArea(5));\nSystem.out.println("Circumference: " + MathUtils.circleCircumference(5));\nSystem.out.println("Factorial: " + MathUtils.factorial(5));',
    hint: "Utility classes often have private constructors",
  },

  // CONSTRUCTOR WITH INHERITANCE (3)
  {
    id: "constructor_15",
    topicId: "constructor",
    question: "Constructor execution order in inheritance.",
    mathSolution: "Parent constructor executes before child",
    codeSolution:
      'class A {\n    A() { System.out.println("A constructor"); }\n}\n\nclass B extends A {\n    B() { System.out.println("B constructor"); }\n}\n\nclass C extends B {\n    C() { System.out.println("C constructor"); }\n}\n\nSystem.out.println("Creating C object:");\nC c = new C();\n\nSystem.out.println("\\nCreating B object:");\nB b = new B();\n\nSystem.out.println("\\nCreating A object:");\nA a = new A();',
    hint: "Constructors execute from top to bottom of hierarchy",
  },
  {
    id: "constructor_16",
    topicId: "constructor",
    question: "Passing parameters to parent constructor.",
    mathSolution: "Use super() with parameters",
    codeSolution:
      'class Vehicle {\n    String brand;\n    int year;\n    \n    Vehicle(String brand, int year) {\n        this.brand = brand;\n        this.year = year;\n        System.out.println("Vehicle constructor: " + brand + ", " + year);\n    }\n}\n\nclass Car extends Vehicle {\n    String model;\n    \n    Car(String brand, int year, String model) {\n        super(brand, year); // must be first statement\n        this.model = model;\n        System.out.println("Car constructor: " + model);\n    }\n}\n\nclass SportsCar extends Car {\n    boolean turbo;\n    \n    SportsCar(String brand, int year, String model, boolean turbo) {\n        super(brand, year, model);\n        this.turbo = turbo;\n        System.out.println("SportsCar constructor, turbo: " + turbo);\n    }\n    \n    void display() {\n        System.out.println(brand + " " + model + " " + year + " Turbo: " + turbo);\n    }\n}\n\nSportsCar sc = new SportsCar("Ferrari", 2023, "F8", true);\nsc.display();',
    hint: "super() passes parameters up the chain",
  },
  {
    id: "constructor_17",
    topicId: "constructor",
    question: "Calling parent constructor conditionally.",
    mathSolution: "Different super() calls based on conditions",
    codeSolution:
      'class Person {\n    String name;\n    \n    Person() {\n        this.name = "Unknown";\n        System.out.println("Person default constructor");\n    }\n    \n    Person(String name) {\n        this.name = name;\n        System.out.println("Person parameterized constructor");\n    }\n}\n\nclass Employee extends Person {\n    int id;\n    \n    Employee() {\n        super(); // calls Person()\n        this.id = 0;\n        System.out.println("Employee default constructor");\n    }\n    \n    Employee(String name, int id) {\n        super(name); // calls Person(String)\n        this.id = id;\n        System.out.println("Employee parameterized constructor");\n    }\n    \n    Employee(int id) {\n        this("Unknown", id); // calls Employee(String, int)\n    }\n}\n\nEmployee e1 = new Employee();\nEmployee e2 = new Employee("Alice", 101);\nEmployee e3 = new Employee(102);',
    hint: "Choose which parent constructor to call",
  },

  // EXCEPTIONS IN CONSTRUCTORS (2)
  {
    id: "constructor_18",
    topicId: "constructor",
    question: "Throw exceptions from constructor.",
    mathSolution: "Constructors can throw exceptions",
    codeSolution:
      'class Account {\n    String accountNo;\n    double balance;\n    \n    Account(String accountNo, double balance) {\n        if(accountNo == null || accountNo.isEmpty()) {\n            throw new IllegalArgumentException("Account number cannot be empty");\n        }\n        if(balance < 0) {\n            throw new IllegalArgumentException("Initial balance cannot be negative");\n        }\n        \n        this.accountNo = accountNo;\n        this.balance = balance;\n        System.out.println("Account created successfully");\n    }\n    \n    void display() {\n        System.out.println("Account: " + accountNo + ", Balance: $" + balance);\n    }\n}\n\ntry {\n    Account a1 = new Account("ACC123", 1000);\n    a1.display();\n    \n    Account a2 = new Account("", 500); // throws exception\n    a2.display();\n} catch(IllegalArgumentException e) {\n    System.out.println("Error: " + e.getMessage());\n}\n\ntry {\n    Account a3 = new Account("ACC456", -100); // throws exception\n} catch(IllegalArgumentException e) {\n    System.out.println("Error: " + e.getMessage());\n}',
    hint: "Validate parameters and throw exceptions",
  },
  {
    id: "constructor_19",
    topicId: "constructor",
    question: "Handle checked exceptions in constructor.",
    mathSolution: "Constructor can throw checked exceptions",
    codeSolution:
      'import java.io.*;\n\nclass FileProcessor {\n    File file;\n    BufferedReader reader;\n    \n    FileProcessor(String fileName) throws FileNotFoundException {\n        file = new File(fileName);\n        reader = new BufferedReader(new FileReader(file));\n        System.out.println("File opened: " + fileName);\n    }\n    \n    String readLine() throws IOException {\n        return reader.readLine();\n    }\n    \n    void close() throws IOException {\n        if(reader != null) reader.close();\n    }\n}\n\ntry {\n    FileProcessor fp = new FileProcessor("test.txt");\n    String line = fp.readLine();\n    System.out.println("Read: " + line);\n    fp.close();\n} catch(FileNotFoundException e) {\n    System.out.println("File not found: " + e.getMessage());\n} catch(IOException e) {\n    System.out.println("IO Error: " + e.getMessage());\n}',
    hint: "Declare exceptions in constructor signature",
  },

  // STATIC AND FINAL IN CONSTRUCTORS (2)
  {
    id: "constructor_20",
    topicId: "constructor",
    question: "Initialize final variables in constructor.",
    mathSolution: "Final variables must be initialized in constructor",
    codeSolution:
      'class Employee {\n    final int id; // blank final\n    final String name;\n    static int count = 0;\n    \n    Employee(int id, String name) {\n        this.id = id; // final initialized here\n        this.name = name;\n        count++;\n        System.out.println("Employee created. Total: " + count);\n    }\n    \n    // Cannot change final values later\n    void display() {\n        System.out.println("ID: " + id + ", Name: " + name);\n    }\n}\n\nEmployee e1 = new Employee(101, "Alice");\nEmployee e2 = new Employee(102, "Bob");\n\ne1.display();\n// e1.id = 200; // ERROR - final cannot be reassigned\n\n// e2.name = "Charlie"; // ERROR - final cannot be reassigned',
    hint: "Final instance variables must be initialized in constructor",
  },
  {
    id: "constructor_21",
    topicId: "constructor",
    question: "Static block vs constructor initialization.",
    mathSolution: "Static blocks run once, constructors run per object",
    codeSolution:
      'class Database {\n    static String connection;\n    String table;\n    \n    // Static block - runs once when class is loaded\n    static {\n        connection = "Connected to DB";\n        System.out.println("Static block: " + connection);\n    }\n    \n    // Instance initializer block - runs before constructor\n    {\n        System.out.println("Instance initializer for: " + table);\n        if(table == null) table = "default_table";\n    }\n    \n    // Constructor\n    Database(String table) {\n        this.table = table;\n        System.out.println("Constructor: table = " + this.table);\n    }\n}\n\nSystem.out.println("Creating first object:");\nDatabase db1 = new Database("users");\n\nSystem.out.println("\\nCreating second object:");\nDatabase db2 = new Database("products");',
    hint: "Order: static block -> instance init -> constructor",
  },

  // PRACTICAL APPLICATIONS (4)
  {
    id: "constructor_22",
    topicId: "constructor",
    question: "Builder pattern using constructor.",
    mathSolution: "Constructor with Builder pattern for many parameters",
    codeSolution:
      'class Computer {\n    private String cpu;\n    private String ram;\n    private String storage;\n    private String gpu;\n    private boolean bluetooth;\n    \n    // Private constructor - only Builder can call\n    private Computer(Builder builder) {\n        this.cpu = builder.cpu;\n        this.ram = builder.ram;\n        this.storage = builder.storage;\n        this.gpu = builder.gpu;\n        this.bluetooth = builder.bluetooth;\n    }\n    \n    // Static nested Builder class\n    static class Builder {\n        private String cpu;\n        private String ram;\n        private String storage;\n        private String gpu = "Integrated"; // default\n        private boolean bluetooth = false;\n        \n        Builder(String cpu, String ram, String storage) {\n            this.cpu = cpu;\n            this.ram = ram;\n            this.storage = storage;\n        }\n        \n        Builder setGpu(String gpu) { this.gpu = gpu; return this; }\n        Builder setBluetooth(boolean bt) { this.bluetooth = bt; return this; }\n        \n        Computer build() {\n            return new Computer(this);\n        }\n    }\n    \n    void display() {\n        System.out.println("CPU: " + cpu + ", RAM: " + ram + ", Storage: " + storage);\n        System.out.println("GPU: " + gpu + ", Bluetooth: " + bluetooth);\n    }\n}\n\nComputer comp1 = new Computer.Builder("i7", "16GB", "512GB")\n                            .setGpu("NVIDIA RTX")\n                            .setBluetooth(true)\n                            .build();\n\nComputer comp2 = new Computer.Builder("i5", "8GB", "256GB")\n                            .build();\n\ncomp1.display();\nSystem.out.println("---");\ncomp2.display();',
    hint: "Builder pattern handles many optional parameters",
  },
  {
    id: "constructor_23",
    topicId: "constructor",
    question: "Factory method using private constructor.",
    mathSolution: "Private constructor with static factory methods",
    codeSolution:
      'class Color {\n    private int r, g, b;\n    \n    // Private constructor\n    private Color(int r, int g, int b) {\n        this.r = r;\n        this.g = g;\n        this.b = b;\n    }\n    \n    // Factory methods\n    static Color fromRGB(int r, int g, int b) {\n        return new Color(r, g, b);\n    }\n    \n    static Color fromHex(String hex) {\n        int r = Integer.parseInt(hex.substring(0, 2), 16);\n        int g = Integer.parseInt(hex.substring(2, 4), 16);\n        int b = Integer.parseInt(hex.substring(4, 6), 16);\n        return new Color(r, g, b);\n    }\n    \n    static Color red() { return new Color(255, 0, 0); }\n    static Color green() { return new Color(0, 255, 0); }\n    static Color blue() { return new Color(0, 0, 255); }\n    \n    void display() {\n        System.out.printf("RGB(%d, %d, %d) Hex: #%02X%02X%02X%n", r, g, b, r, g, b);\n    }\n}\n\nColor c1 = Color.fromRGB(100, 150, 200);\nColor c2 = Color.fromHex("FFAABB");\nColor c3 = Color.red();\n\nc1.display();\nc2.display();\nc3.display();',
    hint: "Static factory methods provide meaningful names",
  },
  {
    id: "constructor_24",
    topicId: "constructor",
    question: "Immutable class with constructor.",
    mathSolution: "Constructor initializes all fields, no setters",
    codeSolution:
      'final class ImmutablePerson {\n    private final String name;\n    private final int age;\n    private final List<String> hobbies;\n    \n    ImmutablePerson(String name, int age, List<String> hobbies) {\n        this.name = name;\n        this.age = age;\n        // Defensive copy - prevent modification of original list\n        this.hobbies = new ArrayList<>(hobbies);\n    }\n    \n    public String getName() { return name; }\n    public int getAge() { return age; }\n    \n    public List<String> getHobbies() {\n        // Return defensive copy\n        return new ArrayList<>(hobbies);\n    }\n    \n    // No setters - object is immutable\n}\n\nList<String> hobbies = new ArrayList<>(Arrays.asList("Reading", "Gaming"));\nImmutablePerson p = new ImmutablePerson("Alice", 25, hobbies);\n\nhobbies.add("Swimming"); // doesn\'t affect p\n\nSystem.out.println(p.getName() + ", " + p.getAge());\nSystem.out.println("Hobbies: " + p.getHobbies());\n\n// p.name = "Bob"; // ERROR - no setter\n\n// Even modifying returned list doesn\'t affect original\nList<String> pHobbies = p.getHobbies();\npHobbies.add("Running"); // modifies copy, not original\nSystem.out.println("Original hobbies: " + p.getHobbies());',
    hint: "Defensive copying ensures immutability",
  },
  {
    id: "constructor_25",
    topicId: "constructor",
    question: "Constructor with validation logic.",
    mathSolution: "Validate parameters before initializing",
    codeSolution:
      'class BankAccount {\n    private String accountNumber;\n    private String accountHolder;\n    private double balance;\n    private static final double MIN_BALANCE = 500;\n    \n    BankAccount(String accountNumber, String accountHolder, double initialBalance) {\n        // Validation\n        if(accountNumber == null || accountNumber.length() < 10) {\n            throw new IllegalArgumentException("Invalid account number");\n        }\n        if(accountHolder == null || accountHolder.trim().isEmpty()) {\n            throw new IllegalArgumentException("Account holder name required");\n        }\n        if(initialBalance < MIN_BALANCE) {\n            throw new IllegalArgumentException("Minimum balance required: " + MIN_BALANCE);\n        }\n        \n        this.accountNumber = accountNumber;\n        this.accountHolder = accountHolder;\n        this.balance = initialBalance;\n        \n        System.out.println("Account created for " + accountHolder);\n    }\n    \n    void display() {\n        System.out.println("Account: " + accountNumber);\n        System.out.println("Holder: " + accountHolder);\n        System.out.println("Balance: $" + balance);\n    }\n}\n\ntry {\n    BankAccount a1 = new BankAccount("ACC12345678", "John Doe", 1000);\n    a1.display();\n    \n    BankAccount a2 = new BankAccount("ACC123", "Jane", 100); // throws exception\n} catch(IllegalArgumentException e) {\n    System.out.println("Error: " + e.getMessage());\n}\n\ntry {\n    BankAccount a3 = new BankAccount("ACC87654321", "", 1000); // throws exception\n} catch(IllegalArgumentException e) {\n    System.out.println("Error: " + e.getMessage());\n}',
    hint: "Validate all inputs in constructor",
  },
);
