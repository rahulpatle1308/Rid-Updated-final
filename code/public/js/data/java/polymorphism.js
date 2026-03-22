QuizData.questions.push(
  // COMPILE-TIME POLYMORPHISM (METHOD OVERLOADING) (6)
  {
    id: "polymorphism_1",
    topicId: "polymorphism",
    question: "Demonstrate method overloading with different parameter types.",
    mathSolution: "Same method name, different parameter types",
    codeSolution:
      'class Calculator {\n    int add(int a, int b) {\n        return a + b;\n    }\n    \n    double add(double a, double b) {\n        return a + b;\n    }\n    \n    String add(String a, String b) {\n        return a + b;\n    }\n}\n\nCalculator calc = new Calculator();\nSystem.out.println("Int sum: " + calc.add(10, 20));\nSystem.out.println("Double sum: " + calc.add(10.5, 20.7));\nSystem.out.println("String concat: " + calc.add("Hello", "World"));',
    hint: "Same method name, different parameter types",
  },
  {
    id: "polymorphism_2",
    topicId: "polymorphism",
    question: "Method overloading with different number of parameters.",
    mathSolution: "Same method name, different parameter count",
    codeSolution:
      'class Area {\n    double calculate(double radius) { // circle\n        return Math.PI * radius * radius;\n    }\n    \n    double calculate(double length, double width) { // rectangle\n        return length * width;\n    }\n    \n    double calculate(double a, double b, double c) { // trapezoid? Just example\n        return a + b + c;\n    }\n}\n\nArea area = new Area();\nSystem.out.println("Circle area: " + area.calculate(5));\nSystem.out.println("Rectangle area: " + area.calculate(4, 6));\nSystem.out.println("Sum of three: " + area.calculate(1, 2, 3));',
    hint: "Different number of parameters",
  },
  {
    id: "polymorphism_3",
    topicId: "polymorphism",
    question: "Method overloading with different order of parameters.",
    mathSolution: "Same method name, different parameter order",
    codeSolution:
      'class Display {\n    void show(String name, int age) {\n        System.out.println(name + " is " + age + " years old");\n    }\n    \n    void show(int age, String name) {\n        System.out.println("Age " + age + ", Name: " + name);\n    }\n}\n\nDisplay d = new Display();\nd.show("Alice", 25);\nd.show(30, "Bob");',
    hint: "Order of parameters distinguishes methods",
  },
  {
    id: "polymorphism_4",
    topicId: "polymorphism",
    question: "Method overloading with type promotion.",
    mathSolution: "Automatic type promotion in overloading",
    codeSolution:
      'class Promo {\n    void show(int a) {\n        System.out.println("int method: " + a);\n    }\n    \n    void show(double a) {\n        System.out.println("double method: " + a);\n    }\n    \n    void show(byte a) {\n        System.out.println("byte method: " + a);\n    }\n}\n\nPromo p = new Promo();\np.show(10);     // exact match - int\np.show(10.5f);  // float promoted to double\np.show(65);     // int\np.show((byte)5); // exact match - byte\n\n// If no exact match, promotes to next compatible type',
    hint: "byte -> short -> int -> long -> float -> double",
  },
  {
    id: "polymorphism_5",
    topicId: "polymorphism",
    question: "Method overloading with varargs.",
    mathSolution: "Variable arguments as overloaded method",
    codeSolution:
      'class VarargsDemo {\n    void print(String... args) {\n        System.out.println("Varargs: " + args.length + " arguments");\n        for(String s : args) System.out.print(s + " ");\n        System.out.println();\n    }\n    \n    void print(String s1) {\n        System.out.println("Single: " + s1);\n    }\n    \n    void print(String s1, String s2) {\n        System.out.println("Two: " + s1 + " and " + s2);\n    }\n}\n\nVarargsDemo v = new VarargsDemo();\nv.print("Hello");           // calls single\nv.print("Hello", "World");  // calls two\nv.print("A", "B", "C");     // calls varargs\nv.print();                   // calls varargs with 0 args',
    hint: "Varargs is least specific in overloading",
  },
  {
    id: "polymorphism_6",
    topicId: "polymorphism",
    question: "Constructor overloading.",
    mathSolution: "Multiple constructors in same class",
    codeSolution:
      'class Employee {\n    int id;\n    String name;\n    double salary;\n    \n    Employee() {\n        this(0, "Unknown", 0.0);\n        System.out.println("Default constructor");\n    }\n    \n    Employee(int id) {\n        this(id, "Unknown", 0.0);\n        System.out.println("Constructor with id");\n    }\n    \n    Employee(int id, String name) {\n        this(id, name, 0.0);\n        System.out.println("Constructor with id and name");\n    }\n    \n    Employee(int id, String name, double salary) {\n        this.id = id;\n        this.name = name;\n        this.salary = salary;\n        System.out.println("Constructor with all fields");\n    }\n    \n    void display() {\n        System.out.println(id + ", " + name + ", $" + salary);\n    }\n}\n\nEmployee e1 = new Employee();\nEmployee e2 = new Employee(101);\nEmployee e3 = new Employee(102, "Alice");\nEmployee e4 = new Employee(103, "Bob", 50000);\ne1.display(); e2.display(); e3.display(); e4.display();',
    hint: "Constructors can be overloaded like methods",
  },

  // RUNTIME POLYMORPHISM (METHOD OVERRIDING) (7)
  {
    id: "polymorphism_7",
    topicId: "polymorphism",
    question: "Basic runtime polymorphism with method overriding.",
    mathSolution: "Parent reference, child object",
    codeSolution:
      'class Animal {\n    void sound() {\n        System.out.println("Animal makes sound");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void sound() {\n        System.out.println("Dog barks");\n    }\n}\n\nclass Cat extends Animal {\n    @Override\n    void sound() {\n        System.out.println("Cat meows");\n    }\n}\n\nAnimal a1 = new Dog();\nAnimal a2 = new Cat();\n\na1.sound(); // Dog barks\na2.sound(); // Cat meows\n\n// Array of Animals\nAnimal[] animals = {new Dog(), new Cat(), new Animal()};\nfor(Animal a : animals) {\n    a.sound(); // Polymorphic call\n}',
    hint: "Actual method called based on object at runtime",
  },
  {
    id: "polymorphism_8",
    topicId: "polymorphism",
    question: "Polymorphism with method parameters.",
    mathSolution: "Method accepts parent type, works with any child",
    codeSolution:
      'class Shape {\n    void draw() { System.out.println("Drawing shape"); }\n}\n\nclass Circle extends Shape {\n    void draw() { System.out.println("Drawing circle"); }\n}\n\nclass Rectangle extends Shape {\n    void draw() { System.out.println("Drawing rectangle"); }\n}\n\nclass Triangle extends Shape {\n    void draw() { System.out.println("Drawing triangle"); }\n}\n\nclass Canvas {\n    void drawShape(Shape s) { // Polymorphic parameter\n        s.draw();\n    }\n}\n\nCanvas canvas = new Canvas();\ncanvas.drawShape(new Circle());\ncanvas.drawShape(new Rectangle());\ncanvas.drawShape(new Triangle());\ncanvas.drawShape(new Shape());',
    hint: "Method works with any Shape subclass",
  },
  {
    id: "polymorphism_9",
    topicId: "polymorphism",
    question: "Polymorphic return types.",
    mathSolution: "Method returns parent type, can return any child",
    codeSolution:
      'class Animal {\n    String type = "Animal";\n}\n\nclass Dog extends Animal {\n    String breed = "Labrador";\n}\n\nclass Cat extends Animal {\n    String color = "Black";\n}\n\nclass AnimalFactory {\n    Animal getAnimal(String type) { // Returns Animal type\n        if(type.equals("dog")) return new Dog();\n        if(type.equals("cat")) return new Cat();\n        return new Animal();\n    }\n}\n\nAnimalFactory factory = new AnimalFactory();\nAnimal a1 = factory.getAnimal("dog");\nAnimal a2 = factory.getAnimal("cat");\n\nSystem.out.println(a1.type); // Can access Animal members only\n// System.out.println(a1.breed); // ERROR - need downcasting\n\nif(a1 instanceof Dog) {\n    Dog d = (Dog) a1;\n    System.out.println("Dog breed: " + d.breed);\n}',
    hint: "Return type can be parent, actual object can be child",
  },
  {
    id: "polymorphism_10",
    topicId: "polymorphism",
    question: "Dynamic method dispatch with superclass reference.",
    mathSolution: "Decision at runtime which method to call",
    codeSolution:
      'class Bank {\n    double getRate() { return 0; }\n}\n\nclass SBI extends Bank {\n    double getRate() { return 8.5; }\n}\n\nclass ICICI extends Bank {\n    double getRate() { return 9.2; }\n}\n\nclass HDFC extends Bank {\n    double getRate() { return 8.9; }\n}\n\nBank b; // reference variable\n\nb = new SBI();\nSystem.out.println("SBI Rate: " + b.getRate());\n\nb = new ICICI();\nSystem.out.println("ICICI Rate: " + b.getRate());\n\nb = new HDFC();\nSystem.out.println("HDFC Rate: " + b.getRate());\n\n// The actual method called depends on object type at runtime',
    hint: "Method resolution happens at runtime",
  },
  {
    id: "polymorphism_11",
    topicId: "polymorphism",
    question: "Polymorphism with abstract classes.",
    mathSolution: "Abstract methods enforce polymorphism",
    codeSolution:
      'abstract class Vehicle {\n    abstract void start();\n    abstract void stop();\n    \n    void display() { // concrete method\n        System.out.println("This is a vehicle");\n    }\n}\n\nclass Car extends Vehicle {\n    void start() { System.out.println("Car started with key"); }\n    void stop() { System.out.println("Car stopped"); }\n}\n\nclass Bike extends Vehicle {\n    void start() { System.out.println("Bike started with kick"); }\n    void stop() { System.out.println("Bike stopped"); }\n}\n\nclass ElectricCar extends Vehicle {\n    void start() { System.out.println("Electric car started silently"); }\n    void stop() { System.out.println("Electric car stopped"); }\n}\n\nVehicle[] vehicles = {new Car(), new Bike(), new ElectricCar()};\nfor(Vehicle v : vehicles) {\n    v.start();\n    v.display();\n    v.stop();\n    System.out.println();\n}',
    hint: "Abstract classes are designed for polymorphism",
  },
  {
    id: "polymorphism_12",
    topicId: "polymorphism",
    question: "Polymorphism with interfaces.",
    mathSolution: "Interface references can point to implementing classes",
    codeSolution:
      'interface Drawable {\n    void draw();\n}\n\nclass Circle implements Drawable {\n    public void draw() { System.out.println("Drawing circle"); }\n}\n\nclass Rectangle implements Drawable {\n    public void draw() { System.out.println("Drawing rectangle"); }\n}\n\nclass Text implements Drawable {\n    public void draw() { System.out.println("Drawing text"); }\n}\n\nDrawable d1 = new Circle();\nDrawable d2 = new Rectangle();\nDrawable d3 = new Text();\n\nd1.draw();\nd2.draw();\nd3.draw();\n\n// Collection of Drawable\nList<Drawable> list = Arrays.asList(new Circle(), new Rectangle(), new Text());\nfor(Drawable d : list) {\n    d.draw();\n}',
    hint: "Interfaces enable polymorphic behavior across unrelated classes",
  },
  {
    id: "polymorphism_13",
    topicId: "polymorphism",
    question: "Polymorphism with method overriding and super call.",
    mathSolution: "super to call parent's overridden method",
    codeSolution:
      'class Parent {\n    void show() {\n        System.out.println("Parent show");\n    }\n}\n\nclass Child extends Parent {\n    @Override\n    void show() {\n        super.show(); // call parent\'s method\n        System.out.println("Child show");\n    }\n}\n\nclass GrandChild extends Child {\n    @Override\n    void show() {\n        super.show(); // calls Child\'s show\n        System.out.println("GrandChild show");\n    }\n}\n\nParent p = new GrandChild();\np.show();\n// Output:\n// Parent show\n// Child show\n// GrandChild show',
    hint: "super can call immediate parent's method",
  },

  // DOWNCASTING AND INSTANCEOF (3)
  {
    id: "polymorphism_14",
    topicId: "polymorphism",
    question: "Safe downcasting using instanceof.",
    mathSolution: "Check type before casting",
    codeSolution:
      'class Employee {\n    void work() { System.out.println("Employee working"); }\n}\n\nclass Manager extends Employee {\n    void manage() { System.out.println("Manager managing"); }\n}\n\nclass Developer extends Employee {\n    void code() { System.out.println("Developer coding"); }\n}\n\nEmployee emp = new Manager();\n\n// Unsafe cast\n// Developer d = (Developer) emp; // ClassCastException at runtime\n\n// Safe casting\nif(emp instanceof Manager) {\n    Manager m = (Manager) emp;\n    m.manage();\n    m.work();\n}\n\nif(emp instanceof Developer) {\n    Developer d = (Developer) emp;\n    d.code();\n} else {\n    System.out.println("Not a developer");\n}',
    hint: "Always use instanceof before downcasting",
  },
  {
    id: "polymorphism_15",
    topicId: "polymorphism",
    question: "Pattern matching for instanceof (Java 16+).",
    mathSolution: "Modern instanceof with variable declaration",
    codeSolution:
      'class Animal {\n    void sound() { System.out.println("Animal sound"); }\n}\n\nclass Dog extends Animal {\n    void bark() { System.out.println("Dog barking"); }\n}\n\nclass Cat extends Animal {\n    void meow() { System.out.println("Cat meowing"); }\n}\n\nAnimal a = new Dog();\n\n// Old way\nif(a instanceof Dog) {\n    Dog d = (Dog) a;\n    d.bark();\n}\n\n// New way (Java 16+)\nif(a instanceof Dog d) {\n    d.bark(); // d is already declared and cast\n}\n\n// Works in conditions\nif(a instanceof Cat c) {\n    c.meow();\n} else {\n    System.out.println("Not a cat");\n}\n\n// Can use in expressions\nString type = (a instanceof Dog d) ? "Dog: " + d : "Not dog";',
    hint: "Simpler syntax with automatic casting",
  },
  {
    id: "polymorphism_16",
    topicId: "polymorphism",
    question: "ClassCastException with invalid downcasting.",
    mathSolution: "Understanding runtime type errors",
    codeSolution:
      'class Fruit {}\nclass Apple extends Fruit {\n    void makeAppleJuice() { System.out.println("Apple juice"); }\n}\nclass Orange extends Fruit {\n    void makeOrangeJuice() { System.out.println("Orange juice"); }\n}\n\nFruit f = new Apple(); // Apple object\n\n// Valid downcast\nApple a = (Apple) f;\na.makeAppleJuice();\n\n// Invalid downcast - will throw ClassCastException\ntry {\n    Orange o = (Orange) f;\n    o.makeOrangeJuice();\n} catch(ClassCastException e) {\n    System.out.println("Cannot cast Apple to Orange: " + e);\n}\n\n// Prevention\nif(f instanceof Orange) {\n    Orange o = (Orange) f;\n    o.makeOrangeJuice();\n} else {\n    System.out.println("Not an orange");\n}',
    hint: "Downcasting only works for actual object type",
  },

  // COVARIANT RETURN TYPES (2)
  {
    id: "polymorphism_17",
    topicId: "polymorphism",
    question: "Covariant return types in overridden methods.",
    mathSolution: "Override can return subtype of parent's return type",
    codeSolution:
      'class Animal {\n    Animal reproduce() {\n        System.out.println("Animal reproduces");\n        return new Animal();\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    Dog reproduce() { // returns Dog (subtype of Animal)\n        System.out.println("Dog gives birth to puppies");\n        return new Dog();\n    }\n}\n\nclass Cat extends Animal {\n    @Override\n    Cat reproduce() {\n        System.out.println("Cat gives birth to kittens");\n        return new Cat();\n    }\n}\n\nAnimal a = new Dog();\nDog d = a.reproduce(); // Actually returns Dog, but need cast?\n// Wait, a.reproduce() returns Animal, so:\n\n// Better usage:\nDog dog = new Dog();\nDog puppy = dog.reproduce(); // No cast needed\n\n// With polymorphism:\nAnimal animal = new Cat();\nCat kitten = (Cat) animal.reproduce(); // Need cast',
    hint: "Covariant return types reduce need for casting",
  },
  {
    id: "polymorphism_18",
    topicId: "polymorphism",
    question: "Covariant return types with interfaces.",
    mathSolution: "Interface methods can have covariant returns",
    codeSolution:
      'interface Cloneable<T> {\n    T clone();\n}\n\nclass Person implements Cloneable<Person> {\n    String name;\n    \n    Person(String n) { name = n; }\n    \n    @Override\n    public Person clone() { // returns Person, not Object\n        return new Person(this.name);\n    }\n    \n    void display() { System.out.println("Person: " + name); }\n}\n\nclass Employee extends Person implements Cloneable<Employee> {\n    int id;\n    \n    Employee(String n, int i) { super(n); id = i; }\n    \n    @Override\n    public Employee clone() { // returns Employee (covariant)\n        return new Employee(this.name, this.id);\n    }\n    \n    void display() { System.out.println("Employee: " + name + ", ID: " + id); }\n}\n\nEmployee e1 = new Employee("Alice", 101);\nEmployee e2 = e1.clone(); // No cast needed\ne2.display();',
    hint: "Covariant returns work with generic interfaces too",
  },

  // POLYMORPHISM WITH STATIC METHODS (2)
  {
    id: "polymorphism_19",
    topicId: "polymorphism",
    question: "Static methods are not polymorphic (method hiding).",
    mathSolution: "Static methods are resolved at compile-time",
    codeSolution:
      'class Parent {\n    static void staticMethod() {\n        System.out.println("Parent static");\n    }\n    \n    void instanceMethod() {\n        System.out.println("Parent instance");\n    }\n}\n\nclass Child extends Parent {\n    static void staticMethod() { // Hides, not overrides\n        System.out.println("Child static");\n    }\n    \n    @Override\n    void instanceMethod() { // Overrides\n        System.out.println("Child instance");\n    }\n}\n\nParent p = new Child();\n\np.staticMethod();   // Parent static (compile-time binding)\np.instanceMethod(); // Child instance (runtime binding)\n\n// Call static methods directly on class\nParent.staticMethod(); // Parent static\nChild.staticMethod();  // Child static',
    hint: "Static methods are hidden, not overridden",
  },
  {
    id: "polymorphism_20",
    topicId: "polymorphism",
    question: "Polymorphism with static methods - best practices.",
    mathSolution: "Avoid calling static methods polymorphically",
    codeSolution:
      'class Utility {\n    static String getType() { return "Utility"; }\n    \n    void printType() {\n        System.out.println(getType()); // Calls static method\n    }\n}\n\nclass DatabaseUtility extends Utility {\n    static String getType() { return "DatabaseUtility"; }\n}\n\nUtility u = new DatabaseUtility();\nSystem.out.println(u.getType()); // Calls Utility.getType() - confusing!\n\n// Better approach - use instance methods for polymorphic behavior\nclass BetterUtility {\n    String getType() { return "BetterUtility"; }\n    \n    void printType() {\n        System.out.println(getType());\n    }\n}\n\nclass BetterDatabaseUtility extends BetterUtility {\n    @Override\n    String getType() { return "BetterDatabaseUtility"; }\n}\n\nBetterUtility bu = new BetterDatabaseUtility();\nSystem.out.println(bu.getType()); // BetterDatabaseUtility - polymorphic!',
    hint: "Use instance methods for polymorphic behavior",
  },

  // POLYMORPHISM WITH FIELDS (2)
  {
    id: "polymorphism_21",
    topicId: "polymorphism",
    question: "Fields are not polymorphic (variable hiding).",
    mathSolution: "Field access based on reference type, not object",
    codeSolution:
      'class Parent {\n    String name = "Parent";\n    int value = 100;\n}\n\nclass Child extends Parent {\n    String name = "Child"; // hides parent\'s field\n    int value = 200;\n}\n\nParent p = new Child();\nChild c = new Child();\n\nSystem.out.println("p.name: " + p.name); // Parent (reference type)\nSystem.out.println("p.value: " + p.value); // 100\n\nSystem.out.println("c.name: " + c.name); // Child\nSystem.out.println("c.value: " + c.value); // 200\n\n// Access hidden parent field\nSystem.out.println("((Parent)c).name: " + ((Parent)c).name); // Parent',
    hint: "Fields are resolved at compile-time, not runtime",
  },
  {
    id: "polymorphism_22",
    topicId: "polymorphism",
    question: "Use methods to access fields polymorphically.",
    mathSolution:
      "Getter methods can be overridden for polymorphic field access",
    codeSolution:
      'class Person {\n    private String name = "Person";\n    \n    String getName() { return name; }\n}\n\nclass Student extends Person {\n    private String name = "Student";\n    \n    @Override\n    String getName() { return name; }\n}\n\nPerson p = new Student();\nSystem.out.println(p.getName()); // Student (polymorphic)\n\n// If we want to access parent\'s field through child:\nclass BetterStudent extends Person {\n    private String name = "BetterStudent";\n    \n    @Override\n    String getName() { return name; }\n    \n    String getParentName() { return super.getName(); }\n}\n\nBetterStudent bs = new BetterStudent();\nSystem.out.println("Child name: " + bs.getName());\nSystem.out.println("Parent name: " + bs.getParentName());',
    hint: "Use getter/setter methods for polymorphic behavior",
  },

  // PRACTICAL APPLICATIONS (3)
  {
    id: "polymorphism_23",
    topicId: "polymorphism",
    question: "Polymorphism in collections.",
    mathSolution: "Store different types in collection using parent type",
    codeSolution:
      'import java.util.*;\n\ninterface Payment {\n    void pay(double amount);\n}\n\nclass CreditCard implements Payment {\n    public void pay(double amount) {\n        System.out.println("Paid $" + amount + " using Credit Card");\n    }\n}\n\nclass PayPal implements Payment {\n    public void pay(double amount) {\n        System.out.println("Paid $" + amount + " using PayPal");\n    }\n}\n\nclass Cash implements Payment {\n    public void pay(double amount) {\n        System.out.println("Paid $" + amount + " in Cash");\n    }\n}\n\nclass ShoppingCart {\n    List<Payment> payments = new ArrayList<>();\n    \n    void addPaymentMethod(Payment p) {\n        payments.add(p);\n    }\n    \n    void checkout(double total) {\n        System.out.println("Total: $" + total);\n        for(Payment p : payments) {\n            p.pay(total / payments.size());\n        }\n    }\n}\n\nShoppingCart cart = new ShoppingCart();\ncart.addPaymentMethod(new CreditCard());\ncart.addPaymentMethod(new PayPal());\ncart.addPaymentMethod(new Cash());\ncart.checkout(300);',
    hint: "Collections can hold different types via polymorphism",
  },
  {
    id: "polymorphism_24",
    topicId: "polymorphism",
    question: "Strategy pattern using polymorphism.",
    mathSolution: "Behavioral pattern using polymorphic interfaces",
    codeSolution:
      'interface SortingStrategy {\n    void sort(int[] arr);\n}\n\nclass BubbleSort implements SortingStrategy {\n    public void sort(int[] arr) {\n        System.out.println("Sorting using Bubble Sort");\n        // bubble sort implementation\n    }\n}\n\nclass QuickSort implements SortingStrategy {\n    public void sort(int[] arr) {\n        System.out.println("Sorting using Quick Sort");\n        // quick sort implementation\n    }\n}\n\nclass MergeSort implements SortingStrategy {\n    public void sort(int[] arr) {\n        System.out.println("Sorting using Merge Sort");\n        // merge sort implementation\n    }\n}\n\nclass Sorter {\n    private SortingStrategy strategy;\n    \n    void setStrategy(SortingStrategy s) { strategy = s; }\n    \n    void executeSort(int[] arr) {\n        strategy.sort(arr);\n    }\n}\n\nSorter sorter = new Sorter();\nint[] data = {5,2,8,1,9};\n\nsorter.setStrategy(new BubbleSort());\nsorter.executeSort(data);\n\nsorter.setStrategy(new QuickSort());\nsorter.executeSort(data);\n\nsorter.setStrategy(new MergeSort());\nsorter.executeSort(data);',
    hint: "Polymorphism enables strategy pattern",
  },
  {
    id: "polymorphism_25",
    topicId: "polymorphism",
    question: "Factory pattern returning polymorphic types.",
    mathSolution: "Factory creates objects of different types",
    codeSolution:
      'interface Notification {\n    void send(String message);\n}\n\nclass EmailNotification implements Notification {\n    public void send(String message) {\n        System.out.println("Sending Email: " + message);\n    }\n}\n\nclass SMSNotification implements Notification {\n    public void send(String message) {\n        System.out.println("Sending SMS: " + message);\n    }\n}\n\nclass PushNotification implements Notification {\n    public void send(String message) {\n        System.out.println("Sending Push: " + message);\n    }\n}\n\nclass NotificationFactory {\n    Notification createNotification(String type) {\n        if(type.equals("email")) return new EmailNotification();\n        if(type.equals("sms")) return new SMSNotification();\n        if(type.equals("push")) return new PushNotification();\n        throw new IllegalArgumentException("Unknown type: " + type);\n    }\n}\n\nNotificationFactory factory = new NotificationFactory();\n\nString[] types = {"email", "sms", "push"};\nfor(String type : types) {\n    Notification n = factory.createNotification(type);\n    n.send("Hello " + type); // Polymorphic call\n}\n\n// Can store different types in same collection\nList<Notification> notifications = new ArrayList<>();\nnotifications.add(factory.createNotification("email"));\nnotifications.add(factory.createNotification("sms"));\nnotifications.add(factory.createNotification("push"));\n\nfor(Notification n : notifications) {\n    n.send("Broadcast message");\n}',
    hint: "Factory pattern uses polymorphism extensively",
  },
);
