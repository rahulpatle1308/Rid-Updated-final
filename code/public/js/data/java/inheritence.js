QuizData.questions.push(
  // BASIC INHERITANCE (4)
  {
    id: "inheritance_1",
    topicId: "inheritance",
    question:
      "Create a simple inheritance hierarchy with Animal and Dog classes.",
    mathSolution: "Child class extends parent class",
    codeSolution:
      'class Animal {\n    void eat() {\n        System.out.println("Animal is eating");\n    }\n}\n\nclass Dog extends Animal {\n    void bark() {\n        System.out.println("Dog is barking");\n    }\n}\n\nDog d = new Dog();\nd.eat();  // inherited method\nd.bark(); // own method',
    hint: "Use extends keyword",
  },
  {
    id: "inheritance_2",
    topicId: "inheritance",
    question: "Demonstrate multi-level inheritance.",
    mathSolution: "Grandparent -> Parent -> Child",
    codeSolution:
      'class Vehicle {\n    void move() { System.out.println("Vehicle moves"); }\n}\n\nclass Car extends Vehicle {\n    void wheels() { System.out.println("Car has 4 wheels"); }\n}\n\nclass SportsCar extends Car {\n    void turbo() { System.out.println("SportsCar has turbo"); }\n}\n\nSportsCar sc = new SportsCar();\nsc.move();   // from Vehicle\nsc.wheels(); // from Car\nsc.turbo();  // own method',
    hint: "Chain of inheritance",
  },
  {
    id: "inheritance_3",
    topicId: "inheritance",
    question: "Access parent class fields in child class.",
    mathSolution: "Child inherits non-private fields",
    codeSolution:
      'class Person {\n    String name;\n    int age;\n    \n    Person(String n, int a) {\n        name = n;\n        age = a;\n    }\n}\n\nclass Student extends Person {\n    int rollNo;\n    \n    Student(String n, int a, int r) {\n        super(n, a); // call parent constructor\n        rollNo = r;\n    }\n    \n    void display() {\n        System.out.println("Name: " + name + ", Age: " + age + ", Roll: " + rollNo);\n    }\n}\n\nStudent s = new Student("Alice", 20, 101);\ns.display();',
    hint: "super() calls parent constructor",
  },
  {
    id: "inheritance_4",
    topicId: "inheritance",
    question: "Use protected members for inheritance access.",
    mathSolution: "protected members accessible in child classes",
    codeSolution:
      'class Parent {\n    private int privateVar = 10;    // not accessible in child\n    protected int protectedVar = 20; // accessible in child\n    public int publicVar = 30;       // accessible everywhere\n    int defaultVar = 40;              // accessible in same package\n}\n\nclass Child extends Parent {\n    void display() {\n        // System.out.println(privateVar); // ERROR!\n        System.out.println("Protected: " + protectedVar);\n        System.out.println("Public: " + publicVar);\n        System.out.println("Default: " + defaultVar);\n    }\n}\n\nChild c = new Child();\nc.display();',
    hint: "protected is between private and public",
  },

  // METHOD OVERRIDING (4)
  {
    id: "inheritance_5",
    topicId: "inheritance",
    question: "Override a method in child class.",
    mathSolution: "Child provides specific implementation",
    codeSolution:
      'class Shape {\n    void draw() {\n        System.out.println("Drawing shape");\n    }\n}\n\nclass Circle extends Shape {\n    @Override\n    void draw() {\n        System.out.println("Drawing circle");\n    }\n}\n\nclass Rectangle extends Shape {\n    @Override\n    void draw() {\n        System.out.println("Drawing rectangle");\n    }\n}\n\nShape s1 = new Circle();\nShape s2 = new Rectangle();\ns1.draw(); // Circle\'s draw\ns2.draw(); // Rectangle\'s draw',
    hint: "@Override annotation recommended",
  },
  {
    id: "inheritance_6",
    topicId: "inheritance",
    question: "Call parent class overridden method using super.",
    mathSolution: "super.method() calls parent version",
    codeSolution:
      'class Parent {\n    void display() {\n        System.out.println("Parent display");\n    }\n}\n\nclass Child extends Parent {\n    @Override\n    void display() {\n        super.display(); // call parent\'s method\n        System.out.println("Child display");\n    }\n}\n\nChild c = new Child();\nc.display();\n// Output:\n// Parent display\n// Child display',
    hint: "super to access parent's method",
  },
  {
    id: "inheritance_7",
    topicId: "inheritance",
    question: "Rules of method overriding - return types.",
    mathSolution: "Covariant return types allowed",
    codeSolution:
      'class Parent {\n    Object getValue() { return "Parent value"; }\n}\n\nclass Child extends Parent {\n    @Override\n    String getValue() { // String is subtype of Object\n        return "Child value";\n    }\n}\n\nChild c = new Child();\nSystem.out.println(c.getValue());\n\n// This is covariant return type - allowed in Java 5+',
    hint: "Can return subtype of parent's return type",
  },
  {
    id: "inheritance_8",
    topicId: "inheritance",
    question: "Cannot override static methods - method hiding.",
    mathSolution: "Static methods are hidden, not overridden",
    codeSolution:
      'class Parent {\n    static void staticMethod() {\n        System.out.println("Parent static");\n    }\n    \n    void instanceMethod() {\n        System.out.println("Parent instance");\n    }\n}\n\nclass Child extends Parent {\n    static void staticMethod() { // This hides, not overrides\n        System.out.println("Child static");\n    }\n    \n    @Override\n    void instanceMethod() { // This overrides\n        System.out.println("Child instance");\n    }\n}\n\nParent p = new Child();\np.staticMethod();   // Parent static (not polymorphic)\np.instanceMethod(); // Child instance (polymorphic)',
    hint: "Static methods are resolved at compile-time",
  },

  // CONSTRUCTORS IN INHERITANCE (3)
  {
    id: "inheritance_9",
    topicId: "inheritance",
    question: "Constructor chaining in inheritance.",
    mathSolution: "Parent constructor called before child",
    codeSolution:
      'class A {\n    A() { System.out.println("A constructor"); }\n}\n\nclass B extends A {\n    B() { System.out.println("B constructor"); }\n}\n\nclass C extends B {\n    C() { System.out.println("C constructor"); }\n}\n\nC c = new C();\n// Output:\n// A constructor\n// B constructor\n// C constructor',
    hint: "Constructors execute from top to bottom",
  },
  {
    id: "inheritance_10",
    topicId: "inheritance",
    question: "Call parameterized parent constructor using super().",
    mathSolution: "super() must be first statement",
    codeSolution:
      'class Employee {\n    String name;\n    double salary;\n    \n    Employee(String n, double s) {\n        name = n;\n        salary = s;\n        System.out.println("Employee constructor");\n    }\n}\n\nclass Manager extends Employee {\n    double bonus;\n    \n    Manager(String n, double s, double b) {\n        super(n, s); // must be first statement\n        bonus = b;\n        System.out.println("Manager constructor");\n    }\n    \n    void display() {\n        System.out.println(name + ", Salary: $" + salary + ", Bonus: $" + bonus);\n    }\n}\n\nManager m = new Manager("John", 50000, 5000);\nm.display();',
    hint: "super() with parameters",
  },
  {
    id: "inheritance_11",
    topicId: "inheritance",
    question: "Implicit super() call if no parent constructor defined.",
    mathSolution: "Default constructor inserted automatically",
    codeSolution:
      'class Parent {\n    // No constructor defined - default exists\n}\n\nclass Child extends Parent {\n    Child() {\n        // super() is automatically inserted\n        System.out.println("Child constructor");\n    }\n}\n\n// But if Parent has parameterized constructor only:\nclass Parent2 {\n    Parent2(int x) {}\n    // No default constructor\n}\n\nclass Child2 extends Parent2 {\n    Child2() {\n        super(10); // MUST call explicitly\n        System.out.println("Child2 constructor");\n    }\n}',
    hint: "If parent has no default constructor, must call super explicitly",
  },

  // POLYMORPHISM (3)
  {
    id: "inheritance_12",
    topicId: "inheritance",
    question: "Runtime polymorphism with method overriding.",
    mathSolution: "Parent reference, child object",
    codeSolution:
      'class Animal {\n    void sound() { System.out.println("Animal makes sound"); }\n}\n\nclass Cat extends Animal {\n    void sound() { System.out.println("Cat meows"); }\n}\n\nclass Dog extends Animal {\n    void sound() { System.out.println("Dog barks"); }\n}\n\nAnimal a1 = new Cat();\nAnimal a2 = new Dog();\n\na1.sound(); // Cat meows\na2.sound(); // Dog barks\n\n// Array of Animals\nAnimal[] animals = {new Cat(), new Dog(), new Animal()};\nfor(Animal a : animals) {\n    a.sound(); // Polymorphic call\n}',
    hint: "Actual method called based on object type at runtime",
  },
  {
    id: "inheritance_13",
    topicId: "inheritance",
    question: "Use instanceof to check object type.",
    mathSolution: "instanceof operator for type checking",
    codeSolution:
      'class Vehicle {}\nclass Car extends Vehicle {}\nclass Bike extends Vehicle {}\n\nVehicle v1 = new Car();\nVehicle v2 = new Bike();\n\nSystem.out.println("v1 instanceof Car: " + (v1 instanceof Car)); // true\nSystem.out.println("v1 instanceof Bike: " + (v1 instanceof Bike)); // false\nSystem.out.println("v1 instanceof Vehicle: " + (v1 instanceof Vehicle)); // true\n\n// Safe casting\nif(v1 instanceof Car) {\n    Car c = (Car) v1;\n    System.out.println("Casted to Car");\n}',
    hint: "Always check before downcasting",
  },
  {
    id: "inheritance_14",
    topicId: "inheritance",
    question: "Polymorphism with method parameters.",
    mathSolution: "Method accepts parent type, works with any child",
    codeSolution:
      'class Media {\n    void play() { System.out.println("Playing media"); }\n}\n\nclass Song extends Media {\n    void play() { System.out.println("Playing song"); }\n}\n\nclass Video extends Media {\n    void play() { System.out.println("Playing video"); }\n}\n\nclass Player {\n    void playMedia(Media m) { // Polymorphic parameter\n        m.play();\n    }\n}\n\nPlayer p = new Player();\np.playMedia(new Song());  // Playing song\np.playMedia(new Video()); // Playing video\np.playMedia(new Media()); // Playing media',
    hint: "Method works with any Media subclass",
  },

  // ABSTRACT CLASSES (3)
  {
    id: "inheritance_15",
    topicId: "inheritance",
    question: "Create abstract class with abstract methods.",
    mathSolution: "Abstract classes cannot be instantiated",
    codeSolution:
      'abstract class Shape {\n    abstract double area(); // abstract method\n    \n    void display() { // concrete method\n        System.out.println("Area: " + area());\n    }\n}\n\nclass Circle extends Shape {\n    double radius;\n    Circle(double r) { radius = r; }\n    \n    @Override\n    double area() { return Math.PI * radius * radius; }\n}\n\nclass Rectangle extends Shape {\n    double l, w;\n    Rectangle(double len, double wid) { l = len; w = wid; }\n    \n    @Override\n    double area() { return l * w; }\n}\n\n// Shape s = new Shape(); // ERROR - abstract\nShape c = new Circle(5);\nShape r = new Rectangle(4, 6);\nc.display();\nr.display();',
    hint: "Abstract methods must be implemented by concrete subclasses",
  },
  {
    id: "inheritance_16",
    topicId: "inheritance",
    question: "Abstract class with constructor.",
    mathSolution: "Abstract classes can have constructors",
    codeSolution:
      'abstract class Database {\n    String connection;\n    \n    Database(String conn) {\n        connection = conn;\n        System.out.println("Connecting to " + connection);\n    }\n    \n    abstract void query(String sql);\n}\n\nclass MySQL extends Database {\n    MySQL(String conn) {\n        super(conn); // call abstract class constructor\n    }\n    \n    @Override\n    void query(String sql) {\n        System.out.println("MySQL executing: " + sql);\n    }\n}\n\nclass PostgreSQL extends Database {\n    PostgreSQL(String conn) {\n        super(conn);\n    }\n    \n    @Override\n    void query(String sql) {\n        System.out.println("PostgreSQL executing: " + sql);\n    }\n}\n\nMySQL db1 = new MySQL("localhost:3306/mydb");\ndb1.query("SELECT * FROM users");',
    hint: "Abstract class constructors called via super()",
  },
  {
    id: "inheritance_17",
    topicId: "inheritance",
    question: "Abstract class can have concrete methods.",
    mathSolution: "Abstract classes can provide default implementations",
    codeSolution:
      'abstract class Logger {\n    // Abstract method - must be implemented\n    abstract void log(String message);\n    \n    // Concrete method with default behavior\n    void logWithTimestamp(String message) {\n        String timestamp = new java.util.Date().toString();\n        log("[" + timestamp + "] " + message);\n    }\n    \n    // Another concrete method\n    void logError(String error) {\n        log("ERROR: " + error);\n    }\n}\n\nclass FileLogger extends Logger {\n    @Override\n    void log(String message) {\n        System.out.println("Writing to file: " + message);\n    }\n}\n\nclass ConsoleLogger extends Logger {\n    @Override\n    void log(String message) {\n        System.out.println("Console: " + message);\n    }\n}\n\nConsoleLogger logger = new ConsoleLogger();\nlogger.logWithTimestamp("Application started");\nlogger.logError("Null pointer exception");',
    hint: "Abstract classes can provide partial implementation",
  },

  // FINAL KEYWORD IN INHERITANCE (2)
  {
    id: "inheritance_18",
    topicId: "inheritance",
    question: "Prevent inheritance using final class.",
    mathSolution: "final classes cannot be extended",
    codeSolution:
      'final class MathConstants {\n    static final double PI = 3.14159;\n    static final double E = 2.71828;\n}\n\n// This would cause error:\n// class ExtendedMath extends MathConstants { }\n\nclass Calculator {\n    double circleArea(double r) {\n        return MathConstants.PI * r * r;\n    }\n}\n\nSystem.out.println("PI: " + MathConstants.PI);\nCalculator calc = new Calculator();\nSystem.out.println("Area: " + calc.circleArea(5));',
    hint: "final class for security/immutability",
  },
  {
    id: "inheritance_19",
    topicId: "inheritance",
    question: "Prevent method overriding using final method.",
    mathSolution: "final methods cannot be overridden",
    codeSolution:
      'class Parent {\n    final void show() {\n        System.out.println("This is final method");\n    }\n    \n    void normal() {\n        System.out.println("Normal method");\n    }\n}\n\nclass Child extends Parent {\n    // This would cause error:\n    // void show() { }\n    \n    @Override\n    void normal() { // Can override non-final methods\n        System.out.println("Overridden normal method");\n    }\n}\n\nChild c = new Child();\nc.show();   // Calls parent\'s final method\nc.normal(); // Calls overridden method',
    hint: "final methods for critical implementations",
  },

  // OBJECT CLASS METHODS (2)
  {
    id: "inheritance_20",
    topicId: "inheritance",
    question: "Override toString() method inherited from Object.",
    mathSolution: "toString() provides string representation",
    codeSolution:
      'class Person {\n    String name;\n    int age;\n    \n    Person(String n, int a) { name = n; age = a; }\n    \n    @Override\n    public String toString() {\n        return "Person[name=" + name + ", age=" + age + "]";\n    }\n}\n\nPerson p = new Person("Alice", 25);\nSystem.out.println(p); // automatically calls toString()\nSystem.out.println(p.toString()); // same\n\n// Without override, would print: Person@hashcode',
    hint: "All classes inherit from Object",
  },
  {
    id: "inheritance_21",
    topicId: "inheritance",
    question: "Override equals() and hashCode() methods.",
    mathSolution: "Proper implementation for object equality",
    codeSolution:
      'class Student {\n    int id;\n    String name;\n    \n    Student(int i, String n) { id = i; name = n; }\n    \n    @Override\n    public boolean equals(Object obj) {\n        if(this == obj) return true;\n        if(obj == null || getClass() != obj.getClass()) return false;\n        Student s = (Student) obj;\n        return id == s.id && Objects.equals(name, s.name);\n    }\n    \n    @Override\n    public int hashCode() {\n        return Objects.hash(id, name);\n    }\n}\n\nStudent s1 = new Student(101, "Alice");\nStudent s2 = new Student(101, "Alice");\nStudent s3 = new Student(102, "Bob");\n\nSystem.out.println("s1.equals(s2): " + s1.equals(s2)); // true\nSystem.out.println("s1.equals(s3): " + s1.equals(s3)); // false\n\n// Works correctly in HashSet\nSet<Student> set = new HashSet<>();\nset.add(s1);\nset.add(s2); // Won\'t add duplicate\nSystem.out.println("Set size: " + set.size()); // 1',
    hint: "equals and hashCode must be consistent",
  },

  // INTERFACE VS ABSTRACT CLASS (3)
  {
    id: "inheritance_22",
    topicId: "inheritance",
    question: "Implement multiple interfaces.",
    mathSolution: "Java supports multiple interface inheritance",
    codeSolution:
      'interface Flyable {\n    void fly();\n}\n\ninterface Swimmable {\n    void swim();\n}\n\nclass Duck implements Flyable, Swimmable {\n    public void fly() { System.out.println("Duck flying"); }\n    public void swim() { System.out.println("Duck swimming"); }\n}\n\nclass Plane implements Flyable {\n    public void fly() { System.out.println("Plane flying"); }\n}\n\nDuck d = new Duck();\nd.fly();\nd.swim();\n\nPlane p = new Plane();\np.fly();',
    hint: "A class can implement multiple interfaces",
  },
  {
    id: "inheritance_23",
    topicId: "inheritance",
    question: "Default methods in interfaces.",
    mathSolution: "Interfaces can have default implementations",
    codeSolution:
      'interface Vehicle {\n    void start();\n    \n    default void honk() {\n        System.out.println("Beep beep!");\n    }\n    \n    static void service() {\n        System.out.println("Vehicle service");\n    }\n}\n\nclass Car implements Vehicle {\n    public void start() { System.out.println("Car starting"); }\n    // honk() inherited with default implementation\n}\n\nclass Bike implements Vehicle {\n    public void start() { System.out.println("Bike starting"); }\n    \n    @Override\n    public void honk() { // Can override default method\n        System.out.println("Bike horn: Tring tring!");\n    }\n}\n\nCar c = new Car();\nc.start();\nc.honk(); // default\n\nBike b = new Bike();\nb.start();\nb.honk(); // overridden\n\nVehicle.service(); // static method call',
    hint: "default methods add functionality without breaking existing code",
  },
  {
    id: "inheritance_24",
    topicId: "inheritance",
    question: "Diamond problem with multiple inheritance of interfaces.",
    mathSolution: "Java resolves with explicit override",
    codeSolution:
      'interface A {\n    default void show() { System.out.println("A show"); }\n}\n\ninterface B {\n    default void show() { System.out.println("B show"); }\n}\n\nclass C implements A, B {\n    // Must override to resolve conflict\n    @Override\n    public void show() {\n        A.super.show(); // call A\'s version\n        B.super.show(); // call B\'s version\n        System.out.println("C show");\n    }\n}\n\nC c = new C();\nc.show();',
    hint: "Use super to call specific interface default method",
  },

  // COMPOSITION VS INHERITANCE (1)
  {
    id: "inheritance_25",
    topicId: "inheritance",
    question: "Prefer composition over inheritance.",
    mathSolution: "Has-a relationship vs Is-a relationship",
    codeSolution:
      '// Inheritance approach (may not be appropriate)\nclass Engine {\n    void start() { System.out.println("Engine started"); }\n}\n\nclass Car extends Engine { // Is-a relationship? Not really\n    void drive() { System.out.println("Car driving"); }\n}\n\n// Composition approach (better)\nclass Engine2 {\n    void start() { System.out.println("Engine started"); }\n    void stop() { System.out.println("Engine stopped"); }\n}\n\nclass Car2 { // Has-a relationship\n    private Engine2 engine;\n    private String model;\n    \n    Car2(String m) {\n        model = m;\n        engine = new Engine2(); // composition\n    }\n    \n    void startCar() {\n        System.out.print(model + ": ");\n        engine.start();\n    }\n    \n    void stopCar() {\n        System.out.print(model + ": ");\n        engine.stop();\n    }\n    \n    void drive() {\n        System.out.println(model + " driving");\n    }\n}\n\nCar2 myCar = new Car2("Tesla");\nmyCar.startCar();\nmyCar.drive();\nmyCar.stopCar();\n\n// Composition is more flexible and loosely coupled',
    hint: "Favor composition over inheritance for flexibility",
  },
);
