QuizData.questions.push(
  // BASIC INTERFACES (4)
  {
    id: "interface_1",
    topicId: "interface",
    question: "Create and implement a basic interface.",
    mathSolution: "Interface defines contract, classes implement",
    codeSolution:
      'interface Drawable {\n    void draw(); // public abstract by default\n}\n\nclass Circle implements Drawable {\n    @Override\n    public void draw() {\n        System.out.println("Drawing circle");\n    }\n}\n\nclass Rectangle implements Drawable {\n    @Override\n    public void draw() {\n        System.out.println("Drawing rectangle");\n    }\n}\n\nDrawable d1 = new Circle();\nDrawable d2 = new Rectangle();\nd1.draw();\nd2.draw();',
    hint: "Interface methods are implicitly public abstract",
  },
  {
    id: "interface_2",
    topicId: "interface",
    question: "Interface with constants (fields).",
    mathSolution: "Interface fields are public static final by default",
    codeSolution:
      'interface Constants {\n    int MAX_VALUE = 100;    // public static final\n    String APP_NAME = "MyApp";\n    double PI = 3.14159;\n}\n\nclass Calculator implements Constants {\n    void display() {\n        System.out.println("App: " + APP_NAME);\n        System.out.println("Max: " + MAX_VALUE);\n        System.out.println("PI: " + PI);\n    }\n}\n\nCalculator calc = new Calculator();\ncalc.display();\n\n// Constants are accessed via interface name\nSystem.out.println("PI from interface: " + Constants.PI);\n\n// Cannot modify constants\n// Constants.MAX_VALUE = 200; // ERROR - final field',
    hint: "Interface fields are implicitly public static final",
  },
  {
    id: "interface_3",
    topicId: "interface",
    question: "Implement multiple interfaces.",
    mathSolution: "A class can implement multiple interfaces",
    codeSolution:
      'interface Flyable {\n    void fly();\n}\n\ninterface Swimmable {\n    void swim();\n}\n\ninterface Runnable {\n    void run();\n}\n\nclass Duck implements Flyable, Swimmable, Runnable {\n    @Override\n    public void fly() {\n        System.out.println("Duck flying");\n    }\n    \n    @Override\n    public void swim() {\n        System.out.println("Duck swimming");\n    }\n    \n    @Override\n    public void run() {\n        System.out.println("Duck running");\n    }\n}\n\nDuck d = new Duck();\nd.fly();\nd.swim();\nd.run();\n\nSystem.out.println("Duck implements: " + \n    (d instanceof Flyable ? "Flyable " : "") +\n    (d instanceof Swimmable ? "Swimmable " : "") +\n    (d instanceof Runnable ? "Runnable" : ""));',
    hint: "Java supports multiple inheritance of type",
  },
  {
    id: "interface_4",
    topicId: "interface",
    question: "Interface extending another interface.",
    mathSolution: "Interfaces can extend multiple interfaces",
    codeSolution:
      'interface BasicAnimal {\n    void eat();\n    void sleep();\n}\n\ninterface Pet {\n    void play();\n}\n\n// Interface extending multiple interfaces\ninterface FriendlyDog extends BasicAnimal, Pet {\n    void wagTail();\n}\n\nclass Labrador implements FriendlyDog {\n    @Override\n    public void eat() {\n        System.out.println("Labrador eating");\n    }\n    \n    @Override\n    public void sleep() {\n        System.out.println("Labrador sleeping");\n    }\n    \n    @Override\n    public void play() {\n        System.out.println("Labrador playing");\n    }\n    \n    @Override\n    public void wagTail() {\n        System.out.println("Labrador wagging tail");\n    }\n}\n\nLabrador lab = new Labrador();\nlab.eat();\nlab.sleep();\nlab.play();\nlab.wagTail();',
    hint: "Interface extends can combine contracts",
  },

  // DEFAULT METHODS (4)
  {
    id: "interface_5",
    topicId: "interface",
    question: "Interface with default method (Java 8+).",
    mathSolution: "Default methods provide implementation in interfaces",
    codeSolution:
      'interface Logger {\n    void log(String message);\n    \n    default void logInfo(String message) {\n        log("[INFO] " + message);\n    }\n    \n    default void logError(String message) {\n        log("[ERROR] " + message);\n    }\n}\n\nclass ConsoleLogger implements Logger {\n    @Override\n    public void log(String message) {\n        System.out.println("Console: " + message);\n    }\n}\n\nclass FileLogger implements Logger {\n    @Override\n    public void log(String message) {\n        System.out.println("File: " + message);\n    }\n    \n    // Can override default methods\n    @Override\n    public void logInfo(String message) {\n        log("[FILE-INFO] " + message);\n    }\n}\n\nConsoleLogger console = new ConsoleLogger();\nconsole.logInfo("Application started");\nconsole.logError("Null pointer");\n\nFileLogger file = new FileLogger();\nfile.logInfo("Data saved");',
    hint: "Default methods add functionality without breaking existing code",
  },
  {
    id: "interface_6",
    topicId: "interface",
    question: "Default method with multiple inheritance conflict.",
    mathSolution: "Class must override conflicting default methods",
    codeSolution:
      'interface A {\n    default void show() {\n        System.out.println("A show");\n    }\n}\n\ninterface B {\n    default void show() {\n        System.out.println("B show");\n    }\n}\n\nclass C implements A, B {\n    // Must override to resolve conflict\n    @Override\n    public void show() {\n        A.super.show(); // call A\'s version\n        B.super.show(); // call B\'s version\n        System.out.println("C show");\n    }\n}\n\nclass D implements A {\n    // No conflict - only one interface\n}\n\nclass E implements A, B {\n    // Choose one interface\'s default\n    @Override\n    public void show() {\n        A.super.show();\n    }\n}\n\nC c = new C();\nc.show();\n\nD d = new D();\nd.show(); // A\'s default\n\nE e = new E();\ne.show(); // A\'s default only',
    hint: "Use super to call specific interface default method",
  },
  {
    id: "interface_7",
    topicId: "interface",
    question: "Default method vs abstract class method.",
    mathSolution: "Default methods provide multiple inheritance of behavior",
    codeSolution:
      'interface Playable {\n    default void play() {\n        System.out.println("Playing in interface");\n    }\n}\n\nabstract class Game {\n    public void play() {\n        System.out.println("Playing in abstract class");\n    }\n}\n\nclass VideoGame extends Game implements Playable {\n    // Class wins over interface\n}\n\nclass BoardGame implements Playable {\n    // Uses interface default\n}\n\nclass CardGame extends Game implements Playable {\n    @Override\n    public void play() {\n        super.play(); // call abstract class method\n        Playable.super.play(); // call interface default\n        System.out.println("Playing card game");\n    }\n}\n\nVideoGame vg = new VideoGame();\nvg.play(); // Game\'s method (class wins)\n\nBoardGame bg = new BoardGame();\nbg.play(); // Playable\'s default\n\nCardGame cg = new CardGame();\ncg.play(); // Both + custom',
    hint: "Class methods take precedence over default methods",
  },
  {
    id: "interface_8",
    topicId: "interface",
    question: "Default method with diamond inheritance.",
    mathSolution: "Diamond problem resolution in interfaces",
    codeSolution:
      'interface X {\n    default void message() {\n        System.out.println("X message");\n    }\n}\n\ninterface Y extends X {\n    default void message() {\n        System.out.println("Y message");\n    }\n}\n\ninterface Z extends X {\n    default void message() {\n        System.out.println("Z message");\n    }\n}\n\n// Interface inherits two conflicting defaults\ninterface W extends Y, Z {\n    // Must override to resolve conflict\n    @Override\n    default void message() {\n        Y.super.message();\n        Z.super.message();\n        System.out.println("W message");\n    }\n}\n\nclass MyClass implements W {}\n\n// Class inherits from two interfaces with same default\nclass MyClass2 implements Y, Z {\n    // Must override\n    @Override\n    public void message() {\n        Y.super.message();\n        System.out.println("MyClass2 message");\n    }\n}\n\nMyClass obj = new MyClass();\nobj.message();\n\nMyClass2 obj2 = new MyClass2();\nobj2.message();',
    hint: "Most specific default method wins, otherwise override required",
  },

  // STATIC METHODS IN INTERFACES (3)
  {
    id: "interface_9",
    topicId: "interface",
    question: "Static methods in interfaces (Java 8+).",
    mathSolution:
      "Static methods belong to interface, not implementing classes",
    codeSolution:
      'interface MathOperations {\n    static int add(int a, int b) {\n        return a + b;\n    }\n    \n    static int multiply(int a, int b) {\n        return a * b;\n    }\n    \n    static double power(double base, double exp) {\n        return Math.pow(base, exp);\n    }\n}\n\n// Static methods are called on interface\nSystem.out.println("Add: " + MathOperations.add(10, 20));\nSystem.out.println("Multiply: " + MathOperations.multiply(5, 6));\nSystem.out.println("Power: " + MathOperations.power(2, 3));\n\n// Cannot call through implementing class\nclass Calculator implements MathOperations {}\n\n// Calculator.add(5, 3); // ERROR - static methods not inherited',
    hint: "Static methods in interfaces are like utility methods",
  },
  {
    id: "interface_10",
    topicId: "interface",
    question: "Static method vs default method.",
    mathSolution: "Static methods are not inherited, default methods are",
    codeSolution:
      'interface Utility {\n    static void staticMethod() {\n        System.out.println("Static method in interface");\n    }\n    \n    default void defaultMethod() {\n        System.out.println("Default method in interface");\n    }\n}\n\nclass MyClass implements Utility {\n    void test() {\n        defaultMethod(); // OK - inherited\n        // staticMethod(); // ERROR - not inherited\n        Utility.staticMethod(); // OK - qualified call\n    }\n}\n\nMyClass obj = new MyClass();\nobj.defaultMethod(); // OK\n// obj.staticMethod(); // ERROR\nUtility.staticMethod(); // OK',
    hint: "Static methods are not part of the contract for implementing classes",
  },
  {
    id: "interface_11",
    topicId: "interface",
    question: "Private methods in interfaces (Java 9+).",
    mathSolution: "Private methods help share code between default methods",
    codeSolution:
      'interface PaymentProcessor {\n    default void processCreditCard(double amount) {\n        validateAmount(amount);\n        log("Processing credit card payment: $" + amount);\n        chargeCard(amount);\n    }\n    \n    default void processPayPal(double amount) {\n        validateAmount(amount);\n        log("Processing PayPal payment: $" + amount);\n        chargePayPal(amount);\n    }\n    \n    // Private method - helper for default methods\n    private void validateAmount(double amount) {\n        if(amount <= 0) {\n            throw new IllegalArgumentException("Invalid amount");\n        }\n        System.out.println("Amount validated: $" + amount);\n    }\n    \n    // Private method\n    private void log(String message) {\n        System.out.println("[LOG] " + message);\n    }\n    \n    // Private static method\n    private static void chargeCard(double amount) {\n        System.out.println("Charging credit card: $" + amount);\n    }\n    \n    private static void chargePayPal(double amount) {\n        System.out.println("Charging PayPal account: $" + amount);\n    }\n}\n\nclass MyProcessor implements PaymentProcessor {}\n\nMyProcessor processor = new MyProcessor();\nprocessor.processCreditCard(100.50);\nprocessor.processPayPal(75.25);\n\n// Cannot call private methods from outside\n// processor.validateAmount(50); // ERROR - private',
    hint: "Private methods encapsulate common logic in interfaces",
  },

  // MARKER INTERFACES (2)
  {
    id: "interface_12",
    topicId: "interface",
    question: "Create and use marker interface.",
    mathSolution: "Marker interfaces have no methods, just tag classes",
    codeSolution:
      '// Marker interface\ninterface Auditable {}\n\n// Built-in marker interfaces\ninterface Serializable {}\ninterface Cloneable {}\n\nclass Employee implements Auditable, Cloneable {\n    String name;\n    double salary;\n    \n    Employee(String n, double s) { name = n; salary = s; }\n    \n    @Override\n    public Employee clone() {\n        return new Employee(name, salary);\n    }\n}\n\nclass Product { // Doesn\'t implement Auditable\n    String name;\n    double price;\n}\n\nclass AuditService {\n    static void audit(Object obj) {\n        if(obj instanceof Auditable) {\n            System.out.println("Auditing: " + obj.getClass().getSimpleName());\n        } else {\n            System.out.println(obj.getClass().getSimpleName() + " is not auditable");\n        }\n    }\n}\n\nEmployee emp = new Employee("Alice", 50000);\nProduct prod = new Product();\n\nAuditService.audit(emp);  // Auditable\nAuditService.audit(prod); // Not auditable\n\n// Cloneable example\nEmployee emp2 = emp.clone();\nSystem.out.println(emp2.name + " - cloned");',
    hint: "Marker interfaces add metadata to classes",
  },
  {
    id: "interface_13",
    topicId: "interface",
    question: "Custom marker interface for runtime behavior.",
    mathSolution: "Marker interfaces enable conditional logic",
    codeSolution:
      '// Custom marker interfaces\ninterface Cacheable {}\ninterface Loggable {}\ninterface Validatable {}\n\nclass User implements Cacheable, Validatable {\n    String username;\n    String password;\n    \n    User(String u, String p) { username = u; password = p; }\n}\n\nclass Order implements Loggable, Validatable {\n    int orderId;\n    double amount;\n    \n    Order(int id, double amt) { orderId = id; amount = amt; }\n}\n\nclass Discount implements Cacheable {\n    String code;\n    double percentage;\n}\n\nclass ServiceLayer {\n    void processObject(Object obj) {\n        System.out.println("\\nProcessing: " + obj.getClass().getSimpleName());\n        \n        if(obj instanceof Validatable) {\n            System.out.println("  - Validating object");\n        }\n        \n        if(obj instanceof Cacheable) {\n            System.out.println("  - Caching object");\n        }\n        \n        if(obj instanceof Loggable) {\n            System.out.println("  - Logging operation");\n        }\n    }\n}\n\nServiceLayer service = new ServiceLayer();\nservice.processObject(new User("john", "pass123"));\nservice.processObject(new Order(1001, 299.99));\nservice.processObject(new Discount("SAVE10", 10.0));',
    hint: "Marker interfaces enable runtime type checking",
  },

  // FUNCTIONAL INTERFACES (3)
  {
    id: "interface_14",
    topicId: "interface",
    question: "Create custom functional interface.",
    mathSolution: "@FunctionalInterface ensures single abstract method",
    codeSolution:
      '@FunctionalInterface\ninterface StringProcessor {\n    String process(String input);\n    \n    // Only one abstract method allowed\n    \n    // Default methods are fine\n    default void printHelp() {\n        System.out.println("Processes strings");\n    }\n    \n    // Static methods are fine\n    static StringProcessor createUpperCase() {\n        return s -> s.toUpperCase();\n    }\n}\n\n// Using with lambda\nStringProcessor toUpper = s -> s.toUpperCase();\nStringProcessor toLower = s -> s.toLowerCase();\nStringProcessor reverse = s -> new StringBuilder(s).reverse().toString();\nStringProcessor trim = s -> s.trim();\n\nSystem.out.println(toUpper.process("hello"));\nSystem.out.println(toLower.process("WORLD"));\nSystem.out.println(reverse.process("Java"));\nSystem.out.println(trim.process("  spaces  "));\n\n// Using factory method\nStringProcessor upperFactory = StringProcessor.createUpperCase();\nSystem.out.println(upperFactory.process("lambda"));\n\n// @FunctionalInterface annotation prevents adding another abstract method\n// StringProcessor would cause error if second abstract method added',
    hint: "@FunctionalInterface is optional but recommended",
  },
  {
    id: "interface_15",
    topicId: "interface",
    question: "Predefined functional interfaces in java.util.function.",
    mathSolution: "Java provides common functional interfaces",
    codeSolution:
      'import java.util.function.*;\nimport java.util.*;\n\n// Predicate - tests a condition\nPredicate<String> isEmpty = s -> s.isEmpty();\nPredicate<Integer> isEven = n -> n % 2 == 0;\nSystem.out.println("Is \'hello\' empty? " + isEmpty.test("hello"));\nSystem.out.println("Is 4 even? " + isEven.test(4));\n\n// Function - transforms input to output\nFunction<String, Integer> lengthFunc = s -> s.length();\nFunction<Integer, String> intToString = n -> "Number: " + n;\nSystem.out.println("Length: " + lengthFunc.apply("Hello"));\nSystem.out.println(intToString.apply(42));\n\n// Consumer - accepts input, returns no result\nConsumer<String> printer = s -> System.out.print(s + " ");\nList<String> names = Arrays.asList("Alice", "Bob", "Charlie");\nnames.forEach(printer);\n\n// Supplier - provides value, no input\nSupplier<Double> random = () -> Math.random();\nSystem.out.println("\\nRandom: " + random.get());\n\n// BiFunction - two inputs\nBiFunction<Integer, Integer, Integer> sum = (a, b) -> a + b;\nSystem.out.println("Sum: " + sum.apply(10, 20));\n\n// UnaryOperator - same type input and output\nUnaryOperator<String> quote = s -> "\'" + s + "\'";\nSystem.out.println(quote.apply("Hello"));',
    hint: "java.util.function package has many functional interfaces",
  },
  {
    id: "interface_16",
    topicId: "interface",
    question: "Compose functional interfaces.",
    mathSolution: "Functional interfaces can be composed using default methods",
    codeSolution:
      'import java.util.function.*;\n\n// Predicate composition\nPredicate<String> startsWithA = s -> s.startsWith("A");\nPredicate<String> endsWithE = s -> s.endsWith("e");\n\nPredicate<String> startsWithAAndEndsWithE = startsWithA.and(endsWithE);\nPredicate<String> startsWithAOrEndsWithE = startsWithA.or(endsWithE);\nPredicate<String> notStartsWithA = startsWithA.negate();\n\nSystem.out.println("\'Alice\' starts with A and ends with e? " + \n    startsWithAAndEndsWithE.test("Alice"));\nSystem.out.println("\'Apple\' starts with A or ends with e? " + \n    startsWithAOrEndsWithE.test("Apple"));\n\n// Function composition\nFunction<Integer, Integer> square = x -> x * x;\nFunction<Integer, Integer> addOne = x -> x + 1;\nFunction<Integer, String> toString = x -> "Result: " + x;\n\nFunction<Integer, Integer> squareThenAddOne = square.andThen(addOne);\nFunction<Integer, Integer> addOneThenSquare = square.compose(addOne);\nFunction<Integer, String> pipeline = square.andThen(addOne).andThen(toString);\n\nSystem.out.println("Square then add one (5): " + squareThenAddOne.apply(5));\nSystem.out.println("Add one then square (5): " + addOneThenSquare.apply(5));\nSystem.out.println(pipeline.apply(5));\n\n// Consumer composition\nConsumer<String> print = s -> System.out.print(s);\nConsumer<String> printNewLine = s -> System.out.println();\nConsumer<String> printWithStars = s -> System.out.print("*" + s + "*");\n\nConsumer<String> printPipeline = print.andThen(printWithStars).andThen(printNewLine);\nprintPipeline.accept("Hello");',
    hint: "Functional interfaces have andThen(), compose(), and(), or() methods",
  },

  // INTERFACE VS ABSTRACT CLASS (3)
  {
    id: "interface_17",
    topicId: "interface",
    question: "Interface vs Abstract Class - when to use.",
    mathSolution: "Abstract class for common state, interface for contract",
    codeSolution:
      '// Abstract class - has state and common behavior\nabstract class Vehicle {\n    protected String brand;\n    protected int year;\n    \n    Vehicle(String brand, int year) {\n        this.brand = brand;\n        this.year = year;\n    }\n    \n    abstract void start();\n    \n    void displayInfo() { // common behavior\n        System.out.println(brand + " (" + year + ")");\n    }\n}\n\n// Interfaces - capabilities\ninterface Flyable {\n    void fly();\n}\n\ninterface Swimmable {\n    void swim();\n}\n\n// Class can extend one abstract class and implement multiple interfaces\nclass FlyingCar extends Vehicle implements Flyable, Swimmable {\n    FlyingCar(String brand, int year) {\n        super(brand, year);\n    }\n    \n    @Override\n    void start() {\n        System.out.println("Flying car starting");\n    }\n    \n    @Override\n    public void fly() {\n        System.out.println("Flying car flying");\n    }\n    \n    @Override\n    public void swim() {\n        System.out.println("Flying car swimming");\n    }\n}\n\nFlyingCar fc = new FlyingCar("Future Motors", 2025);\nfc.displayInfo();\nfc.start();\nfc.fly();\nfc.swim();',
    hint: "Abstract class: is-a; Interface: can-do",
  },
  {
    id: "interface_18",
    topicId: "interface",
    question: "Interface evolution - adding methods without breaking code.",
    mathSolution: "Default methods enable interface evolution",
    codeSolution:
      '// Version 1 interface\ninterface CalculatorV1 {\n    int add(int a, int b);\n}\n\n// Implementing classes\nclass SimpleCalc implements CalculatorV1 {\n    @Override\n    public int add(int a, int b) {\n        return a + b;\n    }\n}\n\n// Version 2 - added new methods without breaking existing code\ninterface CalculatorV2 extends CalculatorV1 {\n    // New method with default implementation\n    default int subtract(int a, int b) {\n        return a - b;\n    }\n    \n    // Another new method\n    default int multiply(int a, int b) {\n        return a * b;\n    }\n    \n    // Static utility method\n    static void showVersion() {\n        System.out.println("Calculator version 2.0");\n    }\n}\n\n// Existing class still works\nSimpleCalc calc1 = new SimpleCalc();\nSystem.out.println("Add: " + calc1.add(10, 5));\n\n// New class can use all methods\nclass AdvancedCalc implements CalculatorV2 {\n    @Override\n    public int add(int a, int b) {\n        return a + b;\n    }\n    \n    // Can override defaults\n    @Override\n    public int multiply(int a, int b) {\n        System.out.println("Advanced multiplication");\n        return a * b * 2;\n    }\n}\n\nAdvancedCalc calc2 = new AdvancedCalc();\nSystem.out.println("Add: " + calc2.add(10, 5));\nSystem.out.println("Subtract: " + calc2.subtract(10, 5));\nSystem.out.println("Multiply: " + calc2.multiply(10, 5));\nCalculatorV2.showVersion();',
    hint: "Default methods allow interface evolution without breaking existing implementations",
  },
  {
    id: "interface_19",
    topicId: "interface",
    question: "Adapter pattern using interface.",
    mathSolution: "Adapter makes incompatible interfaces work together",
    codeSolution:
      '// Target interface\ninterface MediaPlayer {\n    void play(String audioType, String fileName);\n}\n\n// Adaptee interface\ninterface AdvancedMediaPlayer {\n    void playVlc(String fileName);\n    void playMp4(String fileName);\n}\n\n// Concrete adaptees\nclass VlcPlayer implements AdvancedMediaPlayer {\n    @Override\n    public void playVlc(String fileName) {\n        System.out.println("Playing vlc file: " + fileName);\n    }\n    @Override\n    public void playMp4(String fileName) {}\n}\n\nclass Mp4Player implements AdvancedMediaPlayer {\n    @Override\n    public void playVlc(String fileName) {}\n    @Override\n    public void playMp4(String fileName) {\n        System.out.println("Playing mp4 file: " + fileName);\n    }\n}\n\n// Adapter class\nclass MediaAdapter implements MediaPlayer {\n    AdvancedMediaPlayer advancedPlayer;\n    \n    MediaAdapter(String audioType) {\n        if(audioType.equalsIgnoreCase("vlc")) {\n            advancedPlayer = new VlcPlayer();\n        } else if(audioType.equalsIgnoreCase("mp4")) {\n            advancedPlayer = new Mp4Player();\n        }\n    }\n    \n    @Override\n    public void play(String audioType, String fileName) {\n        if(audioType.equalsIgnoreCase("vlc")) {\n            advancedPlayer.playVlc(fileName);\n        } else if(audioType.equalsIgnoreCase("mp4")) {\n            advancedPlayer.playMp4(fileName);\n        }\n    }\n}\n\n// Client\nclass AudioPlayer implements MediaPlayer {\n    MediaAdapter adapter;\n    \n    @Override\n    public void play(String audioType, String fileName) {\n        if(audioType.equalsIgnoreCase("mp3")) {\n            System.out.println("Playing mp3 file: " + fileName);\n        } else if(audioType.equalsIgnoreCase("vlc") || audioType.equalsIgnoreCase("mp4")) {\n            adapter = new MediaAdapter(audioType);\n            adapter.play(audioType, fileName);\n        } else {\n            System.out.println("Invalid media type: " + audioType);\n        }\n    }\n}\n\nAudioPlayer player = new AudioPlayer();\nplayer.play("mp3", "song.mp3");\nplayer.play("mp4", "video.mp4");\nplayer.play("vlc", "movie.vlc");\nplayer.play("avi", "random.avi");',
    hint: "Adapter pattern uses interfaces to make incompatible classes work together",
  },

  // NESTED INTERFACES (2)
  {
    id: "interface_20",
    topicId: "interface",
    question: "Interface inside a class (nested interface).",
    mathSolution: "Interfaces can be nested within classes",
    codeSolution:
      'class OuterClass {\n    private String data = "Outer data";\n    \n    // Nested interface\n    interface NestedInterface {\n        void display();\n    }\n    \n    class Inner implements NestedInterface {\n        @Override\n        public void display() {\n            System.out.println("Inner accessing: " + data);\n        }\n    }\n    \n    NestedInterface getInner() {\n        return new Inner();\n    }\n}\n\n// Implement outside\nclass OutsideImpl implements OuterClass.NestedInterface {\n    @Override\n    public void display() {\n        System.out.println("Outside implementation");\n    }\n}\n\nOuterClass outer = new OuterClass();\nOuterClass.NestedInterface inner = outer.getInner();\ninner.display();\n\nOuterClass.NestedInterface outside = new OutsideImpl();\noutside.display();\n\n// Anonymous implementation\nOuterClass.NestedInterface anonymous = new OuterClass.NestedInterface() {\n    @Override\n    public void display() {\n        System.out.println("Anonymous implementation");\n    }\n};\nanonymous.display();',
    hint: "Nested interfaces are static by default",
  },
  {
    id: "interface_21",
    topicId: "interface",
    question: "Interface inside another interface (nested interface).",
    mathSolution: "Interfaces can be nested within interfaces",
    codeSolution:
      'interface OuterInterface {\n    void outerMethod();\n    \n    // Nested interface\n    interface InnerInterface {\n        void innerMethod();\n    }\n    \n    // Constants can be grouped\n    interface Constants {\n        int MAX = 100;\n        int MIN = 0;\n        String APP_NAME = "MyApp";\n    }\n}\n\n// Implement both interfaces\nclass MyClass implements OuterInterface, OuterInterface.InnerInterface {\n    @Override\n    public void outerMethod() {\n        System.out.println("Outer method implementation");\n    }\n    \n    @Override\n    public void innerMethod() {\n        System.out.println("Inner method implementation");\n    }\n    \n    void showConstants() {\n        System.out.println("Max: " + OuterInterface.Constants.MAX);\n        System.out.println("Min: " + OuterInterface.Constants.MIN);\n        System.out.println("App: " + OuterInterface.Constants.APP_NAME);\n    }\n}\n\n// Implement only inner interface\nclass OnlyInner implements OuterInterface.InnerInterface {\n    @Override\n    public void innerMethod() {\n        System.out.println("Only inner implemented");\n    }\n}\n\nMyClass obj = new MyClass();\nobj.outerMethod();\nobj.innerMethod();\nobj.showConstants();\n\nOnlyInner inner = new OnlyInner();\ninner.innerMethod();',
    hint: "Nested interfaces help organize related interfaces",
  },

  // REAL-WORLD PATTERNS (4)
  {
    id: "interface_22",
    topicId: "interface",
    question: "DAO pattern using interfaces.",
    mathSolution: "Interface defines data access contract",
    codeSolution:
      'import java.util.*;\n\n// Entity\nclass User {\n    int id; String name; String email;\n    User(int id, String n, String e) { this.id = id; name = n; email = e; }\n    public String toString() { return id + ": " + name + " <" + email + ">"; }\n}\n\n// DAO Interface\ninterface UserDAO {\n    void save(User user);\n    User findById(int id);\n    List<User> findAll();\n    void update(User user);\n    void delete(int id);\n    User findByEmail(String email);\n}\n\n// In-memory implementation\nclass InMemoryUserDAO implements UserDAO {\n    private Map<Integer, User> database = new HashMap<>();\n    private int nextId = 1;\n    \n    @Override\n    public void save(User user) {\n        user.id = nextId++;\n        database.put(user.id, user);\n        System.out.println("Saved: " + user);\n    }\n    \n    @Override\n    public User findById(int id) {\n        return database.get(id);\n    }\n    \n    @Override\n    public List<User> findAll() {\n        return new ArrayList<>(database.values());\n    }\n    \n    @Override\n    public void update(User user) {\n        if(database.containsKey(user.id)) {\n            database.put(user.id, user);\n            System.out.println("Updated: " + user);\n        }\n    }\n    \n    @Override\n    public void delete(int id) {\n        database.remove(id);\n        System.out.println("Deleted user with id: " + id);\n    }\n    \n    @Override\n    public User findByEmail(String email) {\n        return database.values().stream()\n            .filter(u -> u.email.equals(email))\n            .findFirst()\n            .orElse(null);\n    }\n}\n\n// Usage\nUserDAO userDAO = new InMemoryUserDAO();\n\nuserDAO.save(new User(0, "Alice", "alice@email.com"));\nuserDAO.save(new User(0, "Bob", "bob@email.com"));\n\nSystem.out.println("All users: " + userDAO.findAll());\nSystem.out.println("Find by id 1: " + userDAO.findById(1));\nSystem.out.println("Find by email: " + userDAO.findByEmail("bob@email.com"));\n\nUser alice = userDAO.findById(1);\nalice.name = "Alice Smith";\nuserDAO.update(alice);\n\nuserDAO.delete(2);\nSystem.out.println("After delete: " + userDAO.findAll());',
    hint: "DAO interfaces separate contract from implementation",
  },
  {
    id: "interface_23",
    topicId: "interface",
    question: "Observer pattern using interfaces.",
    mathSolution: "Subject notifies observers through interface",
    codeSolution:
      'import java.util.*;\n\n// Observer interface\ninterface Observer {\n    void update(String message);\n}\n\n// Subject interface\ninterface Subject {\n    void attach(Observer o);\n    void detach(Observer o);\n    void notifyObservers(String message);\n}\n\n// Concrete subject\nclass NewsAgency implements Subject {\n    private List<Observer> observers = new ArrayList<>();\n    private String latestNews;\n    \n    @Override\n    public void attach(Observer o) { observers.add(o); }\n    \n    @Override\n    public void detach(Observer o) { observers.remove(o); }\n    \n    @Override\n    public void notifyObservers(String message) {\n        for(Observer o : observers) {\n            o.update(message);\n        }\n    }\n    \n    public void publishNews(String news) {\n        this.latestNews = news;\n        System.out.println("\\nNews published: " + news);\n        notifyObservers(news);\n    }\n}\n\n// Concrete observers\nclass EmailSubscriber implements Observer {\n    private String name;\n    \n    EmailSubscriber(String name) { this.name = name; }\n    \n    @Override\n    public void update(String message) {\n        System.out.println("Email to " + name + ": Breaking news - " + message);\n    }\n}\n\nclass SMSSubscriber implements Observer {\n    private String phone;\n    \n    SMSSubscriber(String phone) { this.phone = phone; }\n    \n    @Override\n    public void update(String message) {\n        System.out.println("SMS to " + phone + ": Alert - " + message);\n    }\n}\n\nclass AppNotification implements Observer {\n    @Override\n    public void update(String message) {\n        System.out.println("Mobile app notification: " + message);\n    }\n}\n\n// Usage\nNewsAgency agency = new NewsAgency();\n\nObserver email1 = new EmailSubscriber("Alice");\nObserver email2 = new EmailSubscriber("Bob");\nObserver sms = new SMSSubscriber("+1234567890");\nObserver app = new AppNotification();\n\nagency.attach(email1);\nagency.attach(email2);\nagency.attach(sms);\nagency.attach(app);\n\nagency.publishNews("Java 21 released!");\n\nSystem.out.println();\nagency.detach(email2);\nagency.publishNews("New features in Java");',
    hint: "Observer pattern uses interface for loose coupling",
  },
  {
    id: "interface_24",
    topicId: "interface",
    question: "Strategy pattern using interfaces.",
    mathSolution: "Strategy interface defines algorithm contract",
    codeSolution:
      '// Strategy interface\ninterface CompressionStrategy {\n    byte[] compress(byte[] data);\n    String getAlgorithmName();\n}\n\n// Concrete strategies\nclass ZipCompression implements CompressionStrategy {\n    @Override\n    public byte[] compress(byte[] data) {\n        System.out.println("Compressing using ZIP algorithm");\n        // Simulate compression\n        return data;\n    }\n    \n    @Override\n    public String getAlgorithmName() { return "ZIP"; }\n}\n\nclass GzipCompression implements CompressionStrategy {\n    @Override\n    public byte[] compress(byte[] data) {\n        System.out.println("Compressing using GZIP algorithm");\n        return data;\n    }\n    \n    @Override\n    public String getAlgorithmName() { return "GZIP"; }\n}\n\nclass RarCompression implements CompressionStrategy {\n    @Override\n    public byte[] compress(byte[] data) {\n        System.out.println("Compressing using RAR algorithm");\n        return data;\n    }\n    \n    @Override\n    public String getAlgorithmName() { return "RAR"; }\n}\n\n// Context class\nclass FileCompressor {\n    private CompressionStrategy strategy;\n    \n    public void setStrategy(CompressionStrategy strategy) {\n        this.strategy = strategy;\n    }\n    \n    public void compressFile(String filename, byte[] data) {\n        System.out.println("Compressing " + filename + " using " + strategy.getAlgorithmName());\n        byte[] compressed = strategy.compress(data);\n        System.out.println("Compression complete");\n    }\n}\n\n// Usage\nFileCompressor compressor = new FileCompressor();\nbyte[] data = "Sample file content".getBytes();\n\ncompressor.setStrategy(new ZipCompression());\ncompressor.compressFile("document.txt", data);\n\ncompressor.setStrategy(new GzipCompression());\ncompressor.compressFile("image.jpg", data);\n\ncompressor.setStrategy(new RarCompression());\ncompressor.compressFile("backup.dat", data);\n\n// Can even use lambda with functional interface\n@FunctionalInterface\ninterface SimpleStrategy {\n    void execute();\n}\n\nSimpleStrategy s1 = () -> System.out.println("Strategy 1");\nSimpleStrategy s2 = () -> System.out.println("Strategy 2");\ns1.execute();\ns2.execute();',
    hint: "Strategy pattern encapsulates interchangeable algorithms",
  },
  {
    id: "interface_25",
    topicId: "interface",
    question: "Factory pattern with interface.",
    mathSolution: "Factory creates objects that implement common interface",
    codeSolution:
      '// Product interface\ninterface Button {\n    void render();\n    void onClick();\n}\n\n// Concrete products\nclass WindowsButton implements Button {\n    @Override\n    public void render() { System.out.println("Rendering Windows button"); }\n    \n    @Override\n    public void onClick() { System.out.println("Windows button clicked"); }\n}\n\nclass MacButton implements Button {\n    @Override\n    public void render() { System.out.println("Rendering Mac button"); }\n    \n    @Override\n    public void onClick() { System.out.println("Mac button clicked"); }\n}\n\nclass LinuxButton implements Button {\n    @Override\n    public void render() { System.out.println("Rendering Linux button"); }\n    \n    @Override\n    public void onClick() { System.out.println("Linux button clicked"); }\n}\n\n// Factory interface\ninterface ButtonFactory {\n    Button createButton();\n}\n\n// Concrete factories\nclass WindowsFactory implements ButtonFactory {\n    @Override\n    public Button createButton() { return new WindowsButton(); }\n}\n\nclass MacFactory implements ButtonFactory {\n    @Override\n    public Button createButton() { return new MacButton(); }\n}\n\nclass LinuxFactory implements ButtonFactory {\n    @Override\n    public Button createButton() { return new LinuxButton(); }\n}\n\n// Factory that returns appropriate factory based on OS\nclass UIFactory {\n    public static ButtonFactory getFactoryForOS() {\n        String os = System.getProperty("os.name").toLowerCase();\n        if(os.contains("win")) return new WindowsFactory();\n        if(os.contains("mac")) return new MacFactory();\n        return new LinuxFactory();\n    }\n}\n\n// Usage\nButtonFactory factory = UIFactory.getFactoryForOS();\nButton button = factory.createButton();\nbutton.render();\nbutton.onClick();\n\n// Can also have parameterized factory\ninterface ShapeFactory {\n    Shape createShape(String type);\n}\n\ninterface Shape {\n    void draw();\n}\n\nclass Circle implements Shape {\n    public void draw() { System.out.println("Drawing circle"); }\n}\n\nclass Square implements Shape {\n    public void draw() { System.out.println("Drawing square"); }\n}\n\nclass SimpleShapeFactory implements ShapeFactory {\n    @Override\n    public Shape createShape(String type) {\n        if(type.equals("circle")) return new Circle();\n        if(type.equals("square")) return new Square();\n        throw new IllegalArgumentException("Unknown shape");\n    }\n}\n\nShapeFactory shapeFactory = new SimpleShapeFactory();\nShape circle = shapeFactory.createShape("circle");\nShape square = shapeFactory.createShape("square");\ncircle.draw();\nsquare.draw();',
    hint: "Factory pattern uses interfaces to decouple client from concrete classes",
  },
);
