QuizData.questions.push(
  {
    id: "java_opp_1",
    topicId: "java_oop",
    question: "What is a class in Java?",
    mathSolution: "Class is a blueprint for creating objects",
    codeSolution:
      'class Car {\n    String color;\n    void drive() {\n        System.out.println("Driving...");\n    }\n}',
    hint: "Class defines properties and behaviors",
  },
  {
    id: "java_opp_2",
    topicId: "java_oop",
    question: "What is an object in Java?",
    mathSolution: "Object is an instance of a class",
    codeSolution:
      'Car myCar = new Car();\nmyCar.color = "Red";\nmyCar.drive();',
    hint: "Use new keyword to create object",
  },
  {
    id: "java_opp_3",
    topicId: "java_oop",
    question: "How do you create a constructor?",
    mathSolution: "Constructor initializes object state",
    codeSolution:
      "class Student {\n    String name;\n    Student(String n) {\n        name = n;\n    }\n}",
    hint: "Constructor has same name as class",
  },
  {
    id: "java_opp_4",
    topicId: "java_oop",
    question: "What is method overloading?",
    mathSolution: "Multiple methods with same name but different parameters",
    codeSolution:
      "class Calculator {\n    int add(int a, int b) { return a+b; }\n    int add(int a, int b, int c) { return a+b+c; }\n}",
    hint: "Same method name, different parameters",
  },
  {
    id: "java_opp_5",
    topicId: "java_oop",
    question: "What is inheritance in Java?",
    mathSolution: "Child class acquires properties of parent class",
    codeSolution:
      'class Animal {\n    void eat() { System.out.println("Eating..."); }\n}\nclass Dog extends Animal {\n    void bark() { System.out.println("Barking..."); }\n}',
    hint: "Use extends keyword",
  },
  {
    id: "java_opp_6",
    topicId: "java_oop",
    question: "How do you use super keyword?",
    mathSolution: "Super refers to parent class",
    codeSolution:
      'class Parent {\n    Parent() { System.out.println("Parent"); }\n}\nclass Child extends Parent {\n    Child() { super(); System.out.println("Child"); }\n}',
    hint: "super() calls parent constructor",
  },
  {
    id: "java_opp_7",
    topicId: "java_oop",
    question: "What is method overriding?",
    mathSolution: "Child class redefines parent class method",
    codeSolution:
      'class Animal {\n    void sound() { System.out.println("Animal sound"); }\n}\nclass Cat extends Animal {\n    @Override\n    void sound() { System.out.println("Meow"); }\n}',
    hint: "Same method signature in child class",
  },
  {
    id: "java_opp_8",
    topicId: "java_oop",
    question: "What is encapsulation?",
    mathSolution: "Hiding data and providing public methods",
    codeSolution:
      "class BankAccount {\n    private double balance;\n    public void deposit(double amount) {\n        balance += amount;\n    }\n    public double getBalance() {\n        return balance;\n    }\n}",
    hint: "Use private variables, public methods",
  },
  {
    id: "java_opp_9",
    topicId: "java_oop",
    question: "How do you create a getter and setter?",
    mathSolution: "Methods to access and modify private fields",
    codeSolution:
      "class Person {\n    private String name;\n    public String getName() { return name; }\n    public void setName(String n) { name = n; }\n}",
    hint: "Getter returns, setter sets value",
  },
  {
    id: "java_opp_10",
    topicId: "java_oop",
    question: "What is abstraction in Java?",
    mathSolution: "Hiding implementation details",
    codeSolution:
      'abstract class Shape {\n    abstract void draw();\n}\nclass Circle extends Shape {\n    void draw() { System.out.println("Drawing circle"); }\n}',
    hint: "Use abstract classes or interfaces",
  },
  {
    id: "java_opp_11",
    topicId: "java_oop",
    question: "What is an interface?",
    mathSolution: "Contract that classes must implement",
    codeSolution:
      'interface Drawable {\n    void draw();\n}\nclass Rectangle implements Drawable {\n    public void draw() { System.out.println("Drawing rectangle"); }\n}',
    hint: "Use implements keyword",
  },
  {
    id: "java_opp_12",
    topicId: "java_oop",
    question: "What is polymorphism?",
    mathSolution: "Same method behaves differently for different objects",
    codeSolution:
      "Animal a = new Dog();\na.sound(); // Dog's sound\nAnimal c = new Cat();\nc.sound(); // Cat's sound",
    hint: "Many forms - compile time and runtime",
  },
  {
    id: "java_opp_13",
    topicId: "java_oop",
    question: "What is this keyword?",
    mathSolution: "Refers to current object instance",
    codeSolution:
      "class Employee {\n    String name;\n    Employee(String name) {\n        this.name = name;\n    }\n}",
    hint: "Use this to refer to instance variables",
  },
  {
    id: "java_opp_14",
    topicId: "java_oop",
    question: "What is static keyword?",
    mathSolution: "Belongs to class rather than object",
    codeSolution:
      "class Counter {\n    static int count = 0;\n    Counter() { count++; }\n}",
    hint: "Static members shared across objects",
  },
  {
    id: "java_opp_15",
    topicId: "java_oop",
    question: "How do you create a static method?",
    mathSolution: "Method that can be called without object",
    codeSolution:
      "class MathUtils {\n    static int square(int x) {\n        return x * x;\n    }\n}\n// Call: MathUtils.square(5);",
    hint: "Static methods belong to class",
  },
  {
    id: "java_opp_16",
    topicId: "java_oop",
    question: "What is final keyword?",
    mathSolution:
      "Makes variable constant, method non-overridable, class non-extendable",
    codeSolution:
      "final int MAX = 100;\nfinal class FinalClass {}\nfinal void finalMethod() {}",
    hint: "Final prevents modification/inheritance",
  },
  {
    id: "java_opp_17",
    topicId: "java_oop",
    question: "What is multiple inheritance in Java?",
    mathSolution: "Java doesn't support multiple inheritance with classes",
    codeSolution:
      "interface A {}\ninterface B {}\nclass C implements A, B {} // Multiple inheritance through interfaces",
    hint: "Use interfaces for multiple inheritance",
  },
  {
    id: "java_opp_18",
    topicId: "java_oop",
    question: "What is package in Java?",
    mathSolution: "Grouping related classes and interfaces",
    codeSolution: "package com.mycompany.mypackage;\nclass MyClass {}",
    hint: "Package organizes classes",
  },
  {
    id: "java_opp_19",
    topicId: "java_oop",
    question: "How do you import a package?",
    mathSolution: "Use import statement",
    codeSolution:
      "import java.util.Scanner;\nimport java.util.*; // import all",
    hint: "Import before class declaration",
  },
  {
    id: "java_opp_20",
    topicId: "java_oop",
    question: "What is access modifier private?",
    mathSolution: "Accessible only within same class",
    codeSolution:
      "class Example {\n    private int data;\n    private void show() {}\n}",
    hint: "Most restrictive access",
  },
  {
    id: "java_opp_21",
    topicId: "java_oop",
    question: "What is access modifier public?",
    mathSolution: "Accessible from anywhere",
    codeSolution:
      "public class Example {\n    public int data;\n    public void show() {}\n}",
    hint: "Least restrictive access",
  },
  {
    id: "java_opp_22",
    topicId: "java_oop",
    question: "What is access modifier protected?",
    mathSolution: "Accessible within package and subclasses",
    codeSolution:
      "class Example {\n    protected int data;\n    protected void show() {}\n}",
    hint: "Protected = package + subclasses",
  },
  {
    id: "java_opp_23",
    topicId: "java_oop",
    question: "What is default access modifier?",
    mathSolution: "Accessible only within same package",
    codeSolution:
      "class Example {\n    int data; // default\n    void show() {} // default\n}",
    hint: "No keyword means package-private",
  },
  {
    id: "java_opp_24",
    topicId: "java_oop",
    question: "What is constructor chaining?",
    mathSolution: "Calling one constructor from another",
    codeSolution:
      "class Example {\n    Example() { this(10); }\n    Example(int x) { System.out.println(x); }\n}",
    hint: "Use this() to call another constructor",
  },
  {
    id: "java_opp_25",
    topicId: "java_oop",
    question: "What is default constructor?",
    mathSolution: "Constructor provided by Java if none defined",
    codeSolution: "class Example {}\n// Java provides: Example() {}",
    hint: "No-argument constructor by default",
  },
  {
    id: "java_opp_26",
    topicId: "java_oop",
    question: "What is parameterized constructor?",
    mathSolution: "Constructor that accepts parameters",
    codeSolution:
      "class Student {\n    String name;\n    Student(String n) { name = n; }\n}",
    hint: "Constructor with parameters",
  },
  {
    id: "java_opp_27",
    topicId: "java_oop",
    question: "What is copy constructor?",
    mathSolution: "Constructor that creates object from another object",
    codeSolution:
      "class Point {\n    int x, y;\n    Point(Point p) { x = p.x; y = p.y; }\n}",
    hint: "Constructor takes object of same class",
  },
  {
    id: "java_opp_28",
    topicId: "java_oop",
    question: "What is garbage collection?",
    mathSolution: "Automatic memory management",
    codeSolution:
      "// JVM automatically collects unused objects\n// No manual deletion needed",
    hint: "System.gc() suggests but not guarantees",
  },
  {
    id: "java_opp_29",
    topicId: "java_oop",
    question: "What is finalize method?",
    mathSolution: "Called before garbage collection",
    codeSolution:
      'class Example {\n    protected void finalize() {\n        System.out.println("Cleanup");\n    }\n}',
    hint: "Deprecated in newer Java versions",
  },
  {
    id: "java_opp_30",
    topicId: "java_oop",
    question: "What is instanceof operator?",
    mathSolution: "Checks if object is instance of a class",
    codeSolution:
      'String str = "Hello";\nboolean result = str instanceof String; // true',
    hint: "Use for type checking",
  },
  {
    id: "java_opp_31",
    topicId: "java_oop",
    question: "What is object cloning?",
    mathSolution: "Creating copy of an object",
    codeSolution:
      "class Example implements Cloneable {\n    protected Object clone() throws CloneNotSupportedException {\n        return super.clone();\n    }\n}",
    hint: "Implement Cloneable interface",
  },
  {
    id: "java_opp_32",
    topicId: "java_oop",
    question: "What is shallow copy?",
    mathSolution: "Copies object but not nested objects",
    codeSolution:
      "// Default clone() does shallow copy\n// References are copied, not the objects they point to",
    hint: "Shallow copy shares nested objects",
  },
  {
    id: "java_opp_33",
    topicId: "java_oop",
    question: "What is deep copy?",
    mathSolution: "Copies object and all nested objects",
    codeSolution:
      "class Address implements Cloneable {\n    // implement clone()\n}\nclass Person implements Cloneable {\n    Address addr;\n    protected Object clone() {\n        Person p = (Person)super.clone();\n        p.addr = (Address)addr.clone();\n        return p;\n    }\n}",
    hint: "Deep copy clones all references",
  },
  {
    id: "java_opp_34",
    topicId: "java_oop",
    question: "What is abstract class?",
    mathSolution: "Class that cannot be instantiated",
    codeSolution:
      'abstract class Animal {\n    abstract void sound();\n    void sleep() { System.out.println("Sleeping"); }\n}',
    hint: "Can have both abstract and concrete methods",
  },
  {
    id: "java_opp_35",
    topicId: "java_oop",
    question: "What is abstract method?",
    mathSolution: "Method without body, must be overridden",
    codeSolution: "abstract class Shape {\n    abstract double area();\n}",
    hint: "Abstract methods end with semicolon",
  },
  {
    id: "java_opp_36",
    topicId: "java_oop",
    question: "Interface vs Abstract class difference?",
    mathSolution: "Interface has only abstract methods (before Java 8)",
    codeSolution:
      "// Interface with default method (Java 8+)\ninterface Drawable {\n    default void show() {}\n    void draw();\n}",
    hint: "Interface supports multiple inheritance",
  },
  {
    id: "java_opp_37",
    topicId: "java_oop",
    question: "What is default method in interface?",
    mathSolution: "Method with implementation in interface (Java 8+)",
    codeSolution:
      'interface Printer {\n    default void print() {\n        System.out.println("Default print");\n    }\n}',
    hint: "Use default keyword",
  },
  {
    id: "java_opp_38",
    topicId: "java_oop",
    question: "What is static method in interface?",
    mathSolution: "Static method in interface (Java 8+)",
    codeSolution:
      "interface MathOperation {\n    static int add(int a, int b) {\n        return a + b;\n    }\n}",
    hint: "Call using interface name",
  },
  {
    id: "java_opp_39",
    topicId: "java_oop",
    question: "What is private method in interface?",
    mathSolution: "Helper method in interface (Java 9+)",
    codeSolution:
      "interface Logger {\n    private void log(String msg) {\n        System.out.println(msg);\n    }\n    default void info(String msg) { log(msg); }\n}",
    hint: "For code reuse in interface",
  },
  {
    id: "java_opp_40",
    topicId: "java_oop",
    question: "What is functional interface?",
    mathSolution: "Interface with single abstract method",
    codeSolution:
      "@FunctionalInterface\ninterface Calculator {\n    int calculate(int a, int b);\n}",
    hint: "Can be used with lambda expressions",
  },
  {
    id: "java_opp_41",
    topicId: "java_oop",
    question: "What is lambda expression?",
    mathSolution: "Short way to implement functional interface",
    codeSolution:
      "Calculator add = (a, b) -> a + b;\nint result = add.calculate(5, 3);",
    hint: "-> separates parameters and body",
  },
  {
    id: "java_opp_42",
    topicId: "java_oop",
    question: "What is method reference?",
    mathSolution: "Shorter lambda syntax",
    codeSolution:
      'List<String> list = Arrays.asList("a", "b");\nlist.forEach(System.out::println);',
    hint: "Use :: operator",
  },
  {
    id: "java_opp_43",
    topicId: "java_oop",
    question: "What is enum in Java?",
    mathSolution: "Fixed set of constants",
    codeSolution:
      "enum Day {\n    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY\n}\nDay today = Day.MONDAY;",
    hint: "Enum can have fields and methods",
  },
  {
    id: "java_opp_44",
    topicId: "java_oop",
    question: "What is record in Java?",
    mathSolution: "Immutable data carrier (Java 14+)",
    codeSolution:
      "record Point(int x, int y) {}\nPoint p = new Point(10, 20);\nSystem.out.println(p.x());",
    hint: "Auto-generates constructor, getters, equals, hashCode",
  },
  {
    id: "java_opp_45",
    topicId: "java_oop",
    question: "What is sealed class?",
    mathSolution: "Restricts which classes can extend (Java 17+)",
    codeSolution:
      "sealed class Animal permits Dog, Cat {}\nfinal class Dog extends Animal {}\nfinal class Cat extends Animal {}",
    hint: "Use sealed, permits keywords",
  },
  {
    id: "java_opp_46",
    topicId: "java_oop",
    question: "What is nested class?",
    mathSolution: "Class defined inside another class",
    codeSolution:
      "class Outer {\n    class Inner {}\n    static class StaticNested {}\n}",
    hint: "Inner class has access to outer class members",
  },
  {
    id: "java_opp_47",
    topicId: "java_oop",
    question: "What is anonymous class?",
    mathSolution: "Class without name for one-time use",
    codeSolution:
      'Runnable r = new Runnable() {\n    public void run() {\n        System.out.println("Running");\n    }\n};',
    hint: "Use new keyword with interface/class",
  },
  {
    id: "java_opp_48",
    topicId: "java_oop",
    question: "What is Object class?",
    mathSolution: "Parent of all classes in Java",
    codeSolution:
      "// All classes implicitly extend Object\n// Methods: toString(), equals(), hashCode(), etc.",
    hint: "java.lang.Object is root class",
  },
  {
    id: "java_opp_49",
    topicId: "java_oop",
    question: "How to override toString() method?",
    mathSolution: "Provide string representation of object",
    codeSolution:
      'class Person {\n    String name;\n    @Override\n    public String toString() {\n        return "Person: " + name;\n    }\n}',
    hint: "Called when object is printed",
  },
  {
    id: "java_opp_50",
    topicId: "java_oop",
    question: "How to override equals() method?",
    mathSolution: "Define object equality",
    codeSolution:
      "class Person {\n    String name;\n    int age;\n    @Override\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Person p = (Person) obj;\n        return age == p.age && name.equals(p.name);\n    }\n}",
    hint: "Also override hashCode()",
  },
);
