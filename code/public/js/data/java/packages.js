QuizData.questions.push(
  // BASIC PACKAGE CREATION (4)
  {
    id: "package_1",
    topicId: "package",
    question: "Create a simple package and add a class.",
    mathSolution: "Package declaration must be first statement",
    codeSolution:
      '// File: com/myapp/Hello.java\npackage com.myapp;\n\npublic class Hello {\n    public void sayHello() {\n        System.out.println("Hello from com.myapp package");\n    }\n}\n\n// File: Main.java\nimport com.myapp.Hello;\n\npublic class Main {\n    public static void main(String[] args) {\n        Hello hello = new Hello();\n        hello.sayHello();\n    }\n}',
    hint: "Package declaration at top of file",
  },
  {
    id: "package_2",
    topicId: "package",
    question: "Create multiple classes in same package.",
    mathSolution: "Classes in same package don't need import",
    codeSolution:
      '// File: com/math/Calculator.java\npackage com.math;\n\npublic class Calculator {\n    public int add(int a, int b) { return a + b; }\n}\n\n// File: com/math/Printer.java\npackage com.math;\n\npublic class Printer {\n    public void print(String msg) {\n        System.out.println("Print: " + msg);\n    }\n}\n\n// File: com/math/Main.java\npackage com.math;\n\npublic class Main {\n    public static void main(String[] args) {\n        Calculator calc = new Calculator(); // same package - no import needed\n        Printer printer = new Printer();\n        \n        int result = calc.add(10, 20);\n        printer.print("Result: " + result);\n    }\n}',
    hint: "Same package classes can access each other directly",
  },
  {
    id: "package_3",
    topicId: "package",
    question: "Package with nested directory structure.",
    mathSolution: "Package names match directory structure",
    codeSolution:
      '// File: com/company/utils/Helper.java\npackage com.company.utils;\n\npublic class Helper {\n    public static void help() {\n        System.out.println("Helper class in com.company.utils");\n    }\n}\n\n// File: com/company/domain/User.java\npackage com.company.domain;\n\npublic class User {\n    private String name;\n    public User(String name) { this.name = name; }\n    public String getName() { return name; }\n}\n\n// File: com/company/app/Main.java\npackage com.company.app;\n\nimport com.company.utils.Helper;\nimport com.company.domain.User;\n\npublic class Main {\n    public static void main(String[] args) {\n        User user = new User("Alice");\n        Helper.help();\n        System.out.println("User: " + user.getName());\n    }\n}',
    hint: "Directory structure must match package hierarchy",
  },
  {
    id: "package_4",
    topicId: "package",
    question: "Default package (no package declaration).",
    mathSolution: "Classes without package are in default package",
    codeSolution:
      '// File: DefaultClass.java (no package declaration)\npublic class DefaultClass {\n    public void show() {\n        System.out.println("I\'m in default package");\n    }\n}\n\n// File: AnotherClass.java\n// Also in default package\npublic class AnotherClass {\n    public static void main(String[] args) {\n        DefaultClass obj = new DefaultClass(); // same default package\n        obj.show();\n    }\n}\n\n// Note: Classes in default package cannot be imported\n// by classes in named packages - avoid default package',
    hint: "Default package is for small programs only, avoid in production",
  },

  // IMPORT STATEMENTS (4)
  {
    id: "package_5",
    topicId: "package",
    question: "Import single class from another package.",
    mathSolution: "Use import with fully qualified class name",
    codeSolution:
      '// File: com/library/Book.java\npackage com.library;\n\npublic class Book {\n    private String title;\n    public Book(String title) { this.title = title; }\n    public String getTitle() { return title; }\n}\n\n// File: com/app/LibraryApp.java\npackage com.app;\n\nimport com.library.Book; // import single class\n\npublic class LibraryApp {\n    public static void main(String[] args) {\n        Book book = new Book("Java Programming");\n        System.out.println("Book: " + book.getTitle());\n    }\n}',
    hint: "Import specific class you need",
  },
  {
    id: "package_6",
    topicId: "package",
    question: "Import entire package using wildcard.",
    mathSolution: "import package.* imports all classes in package",
    codeSolution:
      '// File: com/geometry/Point.java\npackage com.geometry;\n\npublic class Point {\n    public int x, y;\n    public Point(int x, int y) { this.x = x; this.y = y; }\n}\n\n// File: com/geometry/Line.java\npackage com.geometry;\n\npublic class Line {\n    public Point start, end;\n    public Line(Point s, Point e) { start = s; end = e; }\n}\n\n// File: com/geometry/Circle.java\npackage com.geometry;\n\npublic class Circle {\n    public Point center;\n    public int radius;\n    public Circle(Point c, int r) { center = c; radius = r; }\n}\n\n// File: com/app/DrawingApp.java\npackage com.app;\n\nimport com.geometry.*; // import all geometry classes\n\npublic class DrawingApp {\n    public static void main(String[] args) {\n        Point p1 = new Point(0, 0);\n        Point p2 = new Point(5, 5);\n        Line line = new Line(p1, p2);\n        Circle circle = new Circle(p1, 10);\n        \n        System.out.println("Created line and circle");\n    }\n}',
    hint: "Wildcard imports all classes but not subpackages",
  },
  {
    id: "package_7",
    topicId: "package",
    question: "Static import for static members.",
    mathSolution: "import static allows direct use of static members",
    codeSolution:
      '// File: com/math/Constants.java\npackage com.math;\n\npublic class Constants {\n    public static final double PI = 3.14159;\n    public static final double E = 2.71828;\n    \n    public static int add(int a, int b) { return a + b; }\n    public static int multiply(int a, int b) { return a * b; }\n}\n\n// File: com/app/StaticImportDemo.java\npackage com.app;\n\nimport static com.math.Constants.*; // static import\n\npublic class StaticImportDemo {\n    public static void main(String[] args) {\n        // Use static members without class name\n        System.out.println("PI: " + PI);\n        System.out.println("E: " + E);\n        System.out.println("Add: " + add(10, 20));\n        System.out.println("Multiply: " + multiply(5, 6));\n        \n        // Without static import, would need Constants.PI\n    }\n}',
    hint: "Static import for frequently used static members",
  },
  {
    id: "package_8",
    topicId: "package",
    question: "Import class with same name from different packages.",
    mathSolution: "Use fully qualified names to resolve ambiguity",
    codeSolution:
      '// File: com/company/emp/Manager.java\npackage com.company.emp;\n\npublic class Manager {\n    public void manage() { System.out.println("Managing employees"); }\n}\n\n// File: com/company/project/Manager.java\npackage com.company.project;\n\npublic class Manager {\n    public void manage() { System.out.println("Managing projects"); }\n}\n\n// File: com/company/app/CompanyApp.java\npackage com.company.app;\n\nimport com.company.emp.Manager; // can import only one\n\npublic class CompanyApp {\n    public static void main(String[] args) {\n        // Use imported Manager (emp)\n        Manager empManager = new Manager();\n        empManager.manage();\n        \n        // Use fully qualified name for the other\n        com.company.project.Manager projManager = \n            new com.company.project.Manager();\n        projManager.manage();\n    }\n}',
    hint: "Use fully qualified names for ambiguous imports",
  },

  // PACKAGE ACCESS CONTROL (4)
  {
    id: "package_9",
    topicId: "package",
    question: "Package-private (default) access modifier.",
    mathSolution: "Default access allows access within same package",
    codeSolution:
      '// File: com/data/Person.java\npackage com.data;\n\npublic class Person {\n    public String name;      // accessible everywhere\n    protected int age;        // accessible in subclasses + same package\n    String address;           // package-private (default)\n    private String ssn;       // only in this class\n    \n    Person(String name, int age, String address, String ssn) {\n        this.name = name;\n        this.age = age;\n        this.address = address;\n        this.ssn = ssn;\n    }\n}\n\n// File: com/data/TestSamePackage.java\npackage com.data;\n\npublic class TestSamePackage {\n    public static void main(String[] args) {\n        Person p = new Person("Alice", 25, "NYC", "123-45-6789");\n        \n        System.out.println("Name: " + p.name);      // public - OK\n        System.out.println("Age: " + p.age);        // protected - OK\n        System.out.println("Address: " + p.address); // default - OK\n        // System.out.println("SSN: " + p.ssn);     // private - ERROR\n    }\n}\n\n// File: com/app/TestDifferentPackage.java\npackage com.app;\nimport com.data.Person;\n\npublic class TestDifferentPackage {\n    public static void main(String[] args) {\n        Person p = new Person("Bob", 30, "LA", "987-65-4321");\n        \n        System.out.println("Name: " + p.name);      // public - OK\n        // System.out.println("Age: " + p.age);     // protected - ERROR\n        // System.out.println("Address: " + p.address); // default - ERROR\n    }\n}',
    hint: "Default access = package-private",
  },
  {
    id: "package_10",
    topicId: "package",
    question: "Protected access across packages via inheritance.",
    mathSolution:
      "Protected members accessible in subclasses even in different packages",
    codeSolution:
      '// File: com/base/Animal.java\npackage com.base;\n\npublic class Animal {\n    protected String species;\n    protected void makeSound() {\n        System.out.println("Animal sound");\n    }\n}\n\n// File: com/derived/Dog.java\npackage com.derived;\nimport com.base.Animal;\n\npublic class Dog extends Animal {\n    public void display() {\n        species = "Canine"; // protected - accessible in subclass\n        System.out.println("Species: " + species);\n        makeSound(); // protected - accessible in subclass\n    }\n}\n\n// File: com/other/Test.java\npackage com.other;\nimport com.base.Animal;\nimport com.derived.Dog;\n\npublic class Test {\n    public static void main(String[] args) {\n        Animal a = new Animal();\n        // a.species = "Mammal"; // ERROR - protected not accessible\n        // a.makeSound(); // ERROR - protected not accessible\n        \n        Dog d = new Dog();\n        d.display(); // OK - inside subclass method\n        \n        // d.species = "Wolf"; // ERROR - not accessible here\n    }\n}',
    hint: "Protected = package + subclasses (even in different packages)",
  },
  {
    id: "package_11",
    topicId: "package",
    question: "Public classes and members across packages.",
    mathSolution: "Public members accessible everywhere",
    codeSolution:
      '// File: com/api/PublicAPI.java\npackage com.api;\n\npublic class PublicAPI {\n    public static final String VERSION = "1.0";\n    \n    public void publicMethod() {\n        System.out.println("Public method called");\n        privateHelper();\n    }\n    \n    private void privateHelper() {\n        System.out.println("Private helper");\n    }\n    \n    // Package-private utility\n    static void utility() {\n        System.out.println("Package-private utility");\n    }\n}\n\n// File: com/client/ClientApp.java\npackage com.client;\nimport com.api.PublicAPI;\n\npublic class ClientApp {\n    public static void main(String[] args) {\n        PublicAPI api = new PublicAPI();\n        api.publicMethod(); // OK - public\n        System.out.println("Version: " + PublicAPI.VERSION); // OK - public\n        \n        // api.privateHelper(); // ERROR - private\n        // PublicAPI.utility(); // ERROR - package-private\n    }\n}',
    hint: "Public API should expose only necessary members",
  },
  {
    id: "package_12",
    topicId: "package",
    question: "Package structure for encapsulation.",
    mathSolution: "Use packages to hide implementation details",
    codeSolution:
      '// File: com/library/api/BookService.java (public API)\npackage com.library.api;\n\nimport com.library.impl.BookRepository;\n\npublic class BookService {\n    private BookRepository repository = new BookRepository();\n    \n    public void addBook(String title) {\n        repository.save(title);\n    }\n    \n    public void listBooks() {\n        repository.listAll();\n    }\n}\n\n// File: com/library/impl/BookRepository.java (package-private)\npackage com.library.impl;\n\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass BookRepository { // package-private class\n    private List<String> books = new ArrayList<>();\n    \n    void save(String title) { // package-private method\n        books.add(title);\n        System.out.println("Saved: " + title);\n    }\n    \n    void listAll() { // package-private method\n        System.out.println("Books: " + books);\n    }\n}\n\n// File: com/library/impl/DatabaseHelper.java (package-private)\npackage com.library.impl;\n\nclass DatabaseHelper {\n    static void connect() {\n        System.out.println("Connecting to database");\n    }\n}\n\n// File: com/app/LibraryApp.java\npackage com.app;\nimport com.library.api.BookService;\n\npublic class LibraryApp {\n    public static void main(String[] args) {\n        BookService service = new BookService();\n        service.addBook("Java Programming");\n        service.addBook("Design Patterns");\n        service.listBooks();\n        \n        // Can\'t access implementation classes\n        // BookRepository repo = new BookRepository(); // ERROR\n        // DatabaseHelper.connect(); // ERROR\n    }\n}',
    hint: "Hide implementation details with package-private access",
  },

  // PACKAGE HIERARCHY AND NAMING (3)
  {
    id: "package_13",
    topicId: "package",
    question: "Package naming conventions.",
    mathSolution: "Reverse domain name convention for uniqueness",
    codeSolution:
      '// Standard package naming convention\npackage com.google.maps; // Google Maps API\npackage org.apache.commons.lang3; // Apache Commons\npackage com.mycompany.myapp.utils; // Your company app\n\n// File: com/mycompany/banking/Account.java\npackage com.mycompany.banking;\n\npublic class Account {\n    private String accountNumber;\n    private double balance;\n    \n    public Account(String accNo, double balance) {\n        this.accountNumber = accNo;\n        this.balance = balance;\n    }\n    \n    public void display() {\n        System.out.println("Account: " + accountNumber);\n        System.out.println("Balance: $" + balance);\n    }\n}\n\n// File: com/mycompany/banking/transaction/Transfer.java\npackage com.mycompany.banking.transaction;\n\nimport com.mycompany.banking.Account;\n\npublic class Transfer {\n    public void transfer(Account from, Account to, double amount) {\n        System.out.println("Transferring $" + amount);\n        // transfer logic\n    }\n}\n\n// File: com/mycompany/banking/ui/AccountUI.java\npackage com.mycompany.banking.ui;\n\nimport com.mycompany.banking.Account;\n\npublic class AccountUI {\n    public void showAccount(Account acc) {\n        acc.display();\n    }\n}',
    hint: "Convention: com.company.project.module",
  },
  {
    id: "package_14",
    topicId: "package",
    question: "Subpackages and directory structure.",
    mathSolution: "Subpackages don't automatically import parent packages",
    codeSolution:
      '// File: com/app/Main.java\npackage com.app;\n\n// Need explicit imports for subpackages\nimport com.app.utils.Helper;\nimport com.app.model.User;\n\npublic class Main {\n    public static void main(String[] args) {\n        User user = new User("Alice");\n        Helper helper = new Helper();\n        helper.printUser(user);\n    }\n}\n\n// File: com/app/model/User.java\npackage com.app.model;\n\npublic class User {\n    private String name;\n    public User(String name) { this.name = name; }\n    public String getName() { return name; }\n}\n\n// File: com/app/utils/Helper.java\npackage com.app.utils;\n\nimport com.app.model.User; // Need import even though same top package\n\npublic class Helper {\n    public void printUser(User user) {\n        System.out.println("User: " + user.getName());\n    }\n}\n\n// Note: Classes in com.app don\'t automatically see com.app.model',
    hint: "Subpackages are separate packages, not automatically imported",
  },
  {
    id: "package_15",
    topicId: "package",
    question: "Import class from subpackage.",
    mathSolution: "Use full package path including subpackage",
    codeSolution:
      '// File: com/company/domain/Person.java\npackage com.company.domain;\n\npublic class Person {\n    public String name;\n    public Person(String name) { this.name = name; }\n}\n\n// File: com/company/domain/address/Address.java\npackage com.company.domain.address;\n\npublic class Address {\n    public String street;\n    public String city;\n    \n    public Address(String street, String city) {\n        this.street = street;\n        this.city = city;\n    }\n}\n\n// File: com/company/service/PersonService.java\npackage com.company.service;\n\nimport com.company.domain.Person;\nimport com.company.domain.address.Address; // subpackage import\n\npublic class PersonService {\n    public void savePersonWithAddress(Person p, Address a) {\n        System.out.println("Saving " + p.name + " at " + a.street + ", " + a.city);\n    }\n}\n\n// File: com/company/app/Main.java\npackage com.company.app;\n\nimport com.company.domain.Person;\nimport com.company.domain.address.Address;\nimport com.company.service.PersonService;\n\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Person("Alice");\n        Address a = new Address("123 Main St", "NYC");\n        PersonService service = new PersonService();\n        service.savePersonWithAddress(p, a);\n    }\n}',
    hint: "Subpackages require full import path",
  },

  // BUILT-IN PACKAGES (3)
  {
    id: "package_16",
    topicId: "package",
    question: "Use java.lang package (automatically imported).",
    mathSolution: "java.lang is automatically imported",
    codeSolution:
      '// No need to import java.lang classes\npublic class LangDemo {\n    public static void main(String[] args) {\n        // String, System, Math are in java.lang\n        String text = "Hello";\n        System.out.println(text.toUpperCase());\n        \n        double sqrt = Math.sqrt(25);\n        System.out.println("Square root: " + sqrt);\n        \n        Integer num = Integer.valueOf("42");\n        System.out.println("Number: " + num);\n        \n        // Thread, Object, Exception also in java.lang\n        Thread thread = Thread.currentThread();\n        System.out.println("Thread: " + thread.getName());\n    }\n}\n\n// Compare with other packages that need import\nimport java.util.ArrayList;\nimport java.util.Date;\n\npublic class OtherPackages {\n    public static void main(String[] args) {\n        ArrayList<String> list = new ArrayList<>(); // need import\n        Date now = new Date(); // need import\n    }\n}',
    hint: "java.lang is implicitly imported in every Java file",
  },
  {
    id: "package_17",
    topicId: "package",
    question: "Use java.util package for collections.",
    mathSolution: "java.util contains utility classes",
    codeSolution:
      'import java.util.*; // import util package\n\npublic class UtilDemo {\n    public static void main(String[] args) {\n        // List\n        List<String> names = new ArrayList<>();\n        names.add("Alice");\n        names.add("Bob");\n        \n        // Map\n        Map<String, Integer> ages = new HashMap<>();\n        ages.put("Alice", 25);\n        ages.put("Bob", 30);\n        \n        // Set\n        Set<Integer> numbers = new HashSet<>();\n        numbers.add(1);\n        numbers.add(2);\n        numbers.add(3);\n        \n        // Date\n        Date now = new Date();\n        \n        // Scanner\n        Scanner scanner = new Scanner(System.in);\n        \n        // Collections utility\n        Collections.sort(names);\n        \n        System.out.println("Sorted names: " + names);\n        System.out.println("Ages: " + ages);\n        System.out.println("Numbers: " + numbers);\n        System.out.println("Date: " + now);\n    }\n}',
    hint: "java.util has collections, date, scanner, etc.",
  },
  {
    id: "package_18",
    topicId: "package",
    question: "Use java.io package for file operations.",
    mathSolution: "java.io contains input/output classes",
    codeSolution:
      'import java.io.*;\n\npublic class IODemo {\n    public static void main(String[] args) {\n        // File class\n        File file = new File("test.txt");\n        \n        try {\n            // Create file\n            if(file.createNewFile()) {\n                System.out.println("File created: " + file.getName());\n            }\n            \n            // Write to file\n            FileWriter writer = new FileWriter(file);\n            writer.write("Hello, World!");\n            writer.close();\n            \n            // Read from file\n            BufferedReader reader = new BufferedReader(new FileReader(file));\n            String line = reader.readLine();\n            System.out.println("Read: " + line);\n            reader.close();\n            \n            // File info\n            System.out.println("Path: " + file.getAbsolutePath());\n            System.out.println("Size: " + file.length() + " bytes");\n            \n        } catch(IOException e) {\n            System.out.println("Error: " + e);\n        }\n    }\n}',
    hint: "java.io for file and stream operations",
  },

  // PACKAGE CREATION WITH JAR (3)
  {
    id: "package_19",
    topicId: "package",
    question: "Compile and run classes with packages from command line.",
    mathSolution: "Use javac with -d and java with fully qualified names",
    codeSolution:
      '// File: com/example/Hello.java\npackage com.example;\n\npublic class Hello {\n    public static void main(String[] args) {\n        System.out.println("Hello from package");\n    }\n}\n\n// File: com/example/greet/Greeter.java\npackage com.example.greet;\n\npublic class Greeter {\n    public void greet(String name) {\n        System.out.println("Hello, " + name);\n    }\n}\n\n// File: Main.java (in root)\nimport com.example.Hello;\nimport com.example.greet.Greeter;\n\npublic class Main {\n    public static void main(String[] args) {\n        Hello.main(args);\n        Greeter greeter = new Greeter();\n        greeter.greet("World");\n    }\n}\n\n/*\nCompile:\njavac -d . com/example/Hello.java com/example/greet/Greeter.java Main.java\n\nRun:\njava Main\n\nOr run specific class:\njava com.example.Hello\n*/',
    hint: "-d . creates directory structure matching package",
  },
  {
    id: "package_20",
    topicId: "package",
    question: "Create and use JAR file with packages.",
    mathSolution: "JAR files bundle compiled packages",
    codeSolution:
      '// File: com/mylib/math/Calculator.java\npackage com.mylib.math;\n\npublic class Calculator {\n    public int add(int a, int b) { return a + b; }\n    public int multiply(int a, int b) { return a * b; }\n}\n\n// File: com/mylib/utils/Printer.java\npackage com.mylib.utils;\n\npublic class Printer {\n    public void print(String msg) {\n        System.out.println("[LOG] " + msg);\n    }\n}\n\n// File: com/mylib/Main.java (optional)\npackage com.mylib;\n\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("My Library v1.0");\n    }\n}\n\n/*\nCommands to create JAR:\n\n1. Compile:\n   javac -d . com/mylib/math/Calculator.java com/mylib/utils/Printer.java com/mylib/Main.java\n\n2. Create JAR with manifest:\n   echo "Main-Class: com.mylib.Main" > manifest.txt\n   jar cfm mylib.jar manifest.txt com\n\n3. Use JAR in another project:\n   javac -cp mylib.jar MyApp.java\n   java -cp mylib.jar;. MyApp\n*/\n\n// File: MyApp.java\nimport com.mylib.math.Calculator;\nimport com.mylib.utils.Printer;\n\npublic class MyApp {\n    public static void main(String[] args) {\n        Calculator calc = new Calculator();\n        Printer printer = new Printer();\n        \n        int sum = calc.add(10, 20);\n        printer.print("Sum: " + sum);\n        \n        int product = calc.multiply(5, 6);\n        printer.print("Product: " + product);\n    }\n}',
    hint: "JAR files package multiple packages for distribution",
  },
  {
    id: "package_21",
    topicId: "package",
    question: "Package with versioning and module-info (Java 9+).",
    mathSolution: "Module system for explicit package exports",
    codeSolution:
      '// File: module-info.java\nmodule com.myapp.core {\n    exports com.myapp.core.api;\n    exports com.myapp.core.util;\n    requires java.logging;\n    provides com.myapp.core.spi.Service with com.myapp.core.impl.ServiceImpl;\n}\n\n// File: com/myapp/core/api/PublicAPI.java\npackage com.myapp.core.api;\n\npublic class PublicAPI {\n    public void doSomething() {\n        System.out.println("Public API");\n    }\n}\n\n// File: com/myapp/core/impl/InternalImpl.java\npackage com.myapp.core.impl;\n\n// This class is not exported, so not accessible outside module\nclass InternalImpl {\n    void internalMethod() {\n        System.out.println("Internal implementation");\n    }\n}\n\n// File: com/myapp/core/util/Helper.java\npackage com.myapp.core.util;\n\npublic class Helper {\n    public static void help() {\n        System.out.println("Helper utility");\n    }\n}\n\n// File: com/myapp/app/Main.java (in another module)\npackage com.myapp.app;\n\nimport com.myapp.core.api.PublicAPI;\nimport com.myapp.core.util.Helper;\n// import com.myapp.core.impl.InternalImpl; // ERROR - not exported\n\npublic class Main {\n    public static void main(String[] args) {\n        PublicAPI api = new PublicAPI();\n        api.doSomething();\n        \n        Helper.help();\n    }\n}',
    hint: "Java 9+ modules provide stronger encapsulation",
  },

  // COMMON PACKAGE MISTAKES AND SOLUTIONS (4)
  {
    id: "package_22",
    topicId: "package",
    question: "Fix package declaration mismatch error.",
    mathSolution: "Package declaration must match directory structure",
    codeSolution:
      '// WRONG - file location doesn\'t match package\n// File: src/Hello.java\npackage com.example.app; // ERROR - should be in com/example/app directory\n\n// RIGHT\n// File: src/com/example/app/Hello.java\npackage com.example.app;\n\npublic class Hello {\n    public void sayHello() {\n        System.out.println("Hello");\n    }\n}\n\n// File: src/com/example/app/Main.java\npackage com.example.app;\n\npublic class Main {\n    public static void main(String[] args) {\n        Hello h = new Hello();\n        h.sayHello();\n    }\n}\n\n/*\nCompile from src directory:\njavac com/example/app/*.java\n\nRun:\njava com.example.app.Main\n*/\n\n// Common error: Running from wrong directory\n// java com.example.app.Main must be run from root of package structure',
    hint: "Directory structure must mirror package hierarchy",
  },
  {
    id: "package_23",
    topicId: "package",
    question: "Resolve name conflicts with packages.",
    mathSolution: "Use fully qualified names or aliases",
    codeSolution:
      '// File: com/company/app/Logger.java\npackage com.company.app;\n\npublic class Logger {\n    public void log(String msg) {\n        System.out.println("App log: " + msg);\n    }\n}\n\n// File: com/company/utils/Logger.java\npackage com.company.utils;\n\npublic class Logger {\n    public void log(String msg) {\n        System.out.println("Utils log: " + msg);\n    }\n}\n\n// File: com/company/app/Main.java\npackage com.company.app;\n\nimport com.company.utils.Logger; // can only import one\n\n// Option 1: Use fully qualified name for the other\npublic class Main {\n    public static void main(String[] args) {\n        // Use imported one\n        Logger utilsLogger = new Logger();\n        utilsLogger.log("from utils");\n        \n        // Use fully qualified for the other\n        com.company.app.Logger appLogger = new com.company.app.Logger();\n        appLogger.log("from app");\n    }\n}\n\n// Option 2: Use fully qualified for both\n// import neither, use fully qualified names',
    hint: "Fully qualified names resolve ambiguity",
  },
  {
    id: "package_24",
    topicId: "package",
    question: "Classpath and package dependencies.",
    mathSolution: "Set classpath to include package roots",
    codeSolution:
      '// Directory structure:\n// project/\n//   lib/\n//     mylib.jar\n//   src/\n//     com/myapp/Main.java\n//     com/myapp/util/Helper.java\n\n// File: com/myapp/Main.java\npackage com.myapp;\n\nimport com.myapp.util.Helper;\nimport com.external.ExternalLib; // from mylib.jar\n\npublic class Main {\n    public static void main(String[] args) {\n        Helper.help();\n        ExternalLib lib = new ExternalLib();\n        lib.doSomething();\n    }\n}\n\n// File: com/myapp/util/Helper.java\npackage com.myapp.util;\n\npublic class Helper {\n    public static void help() {\n        System.out.println("Helper called");\n    }\n}\n\n/*\nCompiling with external library:\n\nFrom project directory:\njavac -cp lib/mylib.jar src/com/myapp/Main.java src/com/myapp/util/Helper.java -d classes\n\nRunning:\njava -cp classes;lib/mylib.jar com.myapp.Main\n\n(Use : instead of ; on Linux/Mac)\n*/\n\n// Common mistake: Not including current directory in classpath\n// java -cp lib/mylib.jar com.myapp.Main // ERROR - classes not found\n// java -cp classes;lib/mylib.jar com.myapp.Main // CORRECT',
    hint: "Classpath must include all directories and JARs with packages",
  },
  {
    id: "package_25",
    topicId: "package",
    question: "Package visibility with reflection.",
    mathSolution: "Reflection can bypass package access restrictions",
    codeSolution:
      'import java.lang.reflect.Method;\nimport java.lang.reflect.Field;\n\n// File: com/secret/HiddenClass.java\npackage com.secret;\n\nclass HiddenClass { // package-private\n    private String secret = "Top Secret Data";\n    \n    private void hiddenMethod() {\n        System.out.println("This method is hidden");\n    }\n}\n\n// File: com/app/ReflectionDemo.java\npackage com.app;\n\nimport java.lang.reflect.*;\n\npublic class ReflectionDemo {\n    public static void main(String[] args) throws Exception {\n        // Cannot access directly\n        // HiddenClass h = new HiddenClass(); // ERROR\n        \n        // But reflection can bypass access control\n        Class<?> clazz = Class.forName("com.secret.HiddenClass");\n        \n        // Create instance using default constructor\n        Object obj = clazz.getDeclaredConstructor().newInstance();\n        \n        // Access private field\n        Field field = clazz.getDeclaredField("secret");\n        field.setAccessible(true); // Bypass private\n        String secretValue = (String) field.get(obj);\n        System.out.println("Secret: " + secretValue);\n        \n        // Invoke private method\n        Method method = clazz.getDeclaredMethod("hiddenMethod");\n        method.setAccessible(true); // Bypass private\n        method.invoke(obj);\n        \n        // Modify private field\n        field.set(obj, "Modified Secret");\n        System.out.println("Modified secret: " + field.get(obj));\n        \n        // Note: Security manager can restrict reflection\n    }\n}\n\n// File: module-info.java (Java 9+ with strong encapsulation)\nmodule com.app {\n    // Without this, reflection might not work\n    opens com.secret to com.app;\n}',
    hint: "Reflection can bypass encapsulation but modules can restrict it",
  },
);
