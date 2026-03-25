QuizData.questions.push(
  // BASIC ENCAPSULATION (4)
  {
    id: "encapsulation_1",
    topicId: "encapsulation",
    question: "Create a class with private fields and public getters/setters.",
    mathSolution: "Hide data, provide controlled access through methods",
    codeSolution:
      'class Person {\n    private String name;\n    private int age;\n    \n    // Getter methods\n    public String getName() {\n        return name;\n    }\n    \n    public int getAge() {\n        return age;\n    }\n    \n    // Setter methods\n    public void setName(String name) {\n        this.name = name;\n    }\n    \n    public void setAge(int age) {\n        if(age > 0) {\n            this.age = age;\n        }\n    }\n}\n\nPerson p = new Person();\np.setName("Alice");\np.setAge(25);\nSystem.out.println(p.getName() + " is " + p.getAge() + " years old");\n\n// p.age = 30; // ERROR - private field',
    hint: "Private fields + public methods = encapsulation",
  },
  {
    id: "encapsulation_2",
    topicId: "encapsulation",
    question: "Add validation in setter methods.",
    mathSolution: "Control what values can be assigned",
    codeSolution:
      'class BankAccount {\n    private String accountNumber;\n    private double balance;\n    private String accountHolder;\n    \n    public void setAccountNumber(String accNo) {\n        if(accNo != null && accNo.length() == 10) {\n            this.accountNumber = accNo;\n        } else {\n            System.out.println("Invalid account number");\n        }\n    }\n    \n    public void setBalance(double balance) {\n        if(balance >= 0) {\n            this.balance = balance;\n        } else {\n            System.out.println("Balance cannot be negative");\n        }\n    }\n    \n    public void setAccountHolder(String name) {\n        if(name != null && !name.trim().isEmpty()) {\n            this.accountHolder = name;\n        }\n    }\n    \n    public void display() {\n        System.out.println("Account: " + accountNumber);\n        System.out.println("Holder: " + accountHolder);\n        System.out.println("Balance: $" + balance);\n    }\n}\n\nBankAccount acc = new BankAccount();\nacc.setAccountNumber("ACC1234567"); // invalid - prints message\nacc.setAccountNumber("ACC12345678"); // valid\nacc.setAccountHolder("John Doe");\nacc.setBalance(1000);\nacc.setBalance(-500); // invalid\nacc.display();',
    hint: "Setters protect data integrity",
  },
  {
    id: "encapsulation_3",
    topicId: "encapsulation",
    question: "Read-only class (only getters, no setters).",
    mathSolution: "Immutable data exposure through getters only",
    codeSolution:
      'class Product {\n    private String id;\n    private String name;\n    private double price;\n    \n    // Constructor sets values\n    public Product(String id, String name, double price) {\n        this.id = id;\n        this.name = name;\n        this.price = price;\n    }\n    \n    // Only getters - no setters\n    public String getId() { return id; }\n    public String getName() { return name; }\n    public double getPrice() { return price; }\n}\n\nProduct p = new Product("P101", "Laptop", 999.99);\nSystem.out.println(p.getId() + ": " + p.getName() + " - $" + p.getPrice());\n\n// p.setName("Desktop"); // ERROR - no setter\n// p.price = 500; // ERROR - private field',
    hint: "Read-only class for data that shouldn't change",
  },
  {
    id: "encapsulation_4",
    topicId: "encapsulation",
    question: "Write-only class (only setters, no getters).",
    mathSolution: "Data can be set but not read directly",
    codeSolution:
      'class PasswordManager {\n    private String password;\n    private String encryptedPassword;\n    \n    public void setPassword(String password) {\n        this.password = password;\n        this.encryptedPassword = encrypt(password);\n        System.out.println("Password set and encrypted");\n    }\n    \n    private String encrypt(String pwd) {\n        // Simple encryption for demo\n        return "***" + pwd.hashCode() + "***";\n    }\n    \n    public boolean authenticate(String input) {\n        return password != null && password.equals(input);\n    }\n    \n    // No getPassword() method - can\'t read password\n}\n\nPasswordManager pm = new PasswordManager();\npm.setPassword("secret123");\n\nSystem.out.println("Authentication: " + pm.authenticate("wrong"));\nSystem.out.println("Authentication: " + pm.authenticate("secret123"));\n\n// System.out.println(pm.password); // ERROR - private\n// System.out.println(pm.getPassword()); // ERROR - no getter',
    hint: "Write-only for sensitive data",
  },

  // GETTER/SETTER VARIATIONS (4)
  {
    id: "encapsulation_5",
    topicId: "encapsulation",
    question: "Custom getter that returns calculated value.",
    mathSolution: "Getter can compute value instead of just returning",
    codeSolution:
      'class Rectangle {\n    private double length;\n    private double width;\n    \n    public void setLength(double l) { this.length = l; }\n    public void setWidth(double w) { this.width = w; }\n    \n    // Custom getter - calculates area\n    public double getArea() {\n        return length * width;\n    }\n    \n    // Custom getter - calculates perimeter\n    public double getPerimeter() {\n        return 2 * (length + width);\n    }\n    \n    // Regular getters\n    public double getLength() { return length; }\n    public double getWidth() { return width; }\n}\n\nRectangle r = new Rectangle();\nr.setLength(5.5);\nr.setWidth(3.2);\n\nSystem.out.println("Length: " + r.getLength());\nSystem.out.println("Width: " + r.getWidth());\nSystem.out.println("Area: " + r.getArea()); // calculated\nSystem.out.println("Perimeter: " + r.getPerimeter()); // calculated',
    hint: "Getters can compute derived values",
  },
  {
    id: "encapsulation_6",
    topicId: "encapsulation",
    question: "Setter with side effects.",
    mathSolution: "Setting one field can affect others",
    codeSolution:
      'class Temperature {\n    private double celsius;\n    private double fahrenheit;\n    \n    public void setCelsius(double c) {\n        this.celsius = c;\n        this.fahrenheit = (c * 9/5) + 32; // auto-update\n    }\n    \n    public void setFahrenheit(double f) {\n        this.fahrenheit = f;\n        this.celsius = (f - 32) * 5/9; // auto-update\n    }\n    \n    public double getCelsius() { return celsius; }\n    public double getFahrenheit() { return fahrenheit; }\n}\n\nTemperature temp = new Temperature();\ntemp.setCelsius(25);\nSystem.out.println("Celsius: " + temp.getCelsius());\nSystem.out.println("Fahrenheit: " + temp.getFahrenheit());\n\ntemp.setFahrenheit(98.6);\nSystem.out.println("Celsius: " + temp.getCelsius());\nSystem.out.println("Fahrenheit: " + temp.getFahrenheit());',
    hint: "Setters can maintain consistency between fields",
  },
  {
    id: "encapsulation_7",
    topicId: "encapsulation",
    question: "Getter returning defensive copy of collection.",
    mathSolution: "Protect internal collections from modification",
    codeSolution:
      'import java.util.*;\n\nclass Student {\n    private String name;\n    private List<Integer> grades = new ArrayList<>();\n    \n    public void setName(String name) { this.name = name; }\n    \n    public void addGrade(int grade) {\n        grades.add(grade);\n    }\n    \n    // Return defensive copy - not original list\n    public List<Integer> getGrades() {\n        return new ArrayList<>(grades); // copy\n    }\n    \n    // Or return unmodifiable view\n    public List<Integer> getGradesUnmodifiable() {\n        return Collections.unmodifiableList(grades);\n    }\n}\n\nStudent s = new Student();\ns.setName("Alice");\ns.addGrade(85);\ns.addGrade(90);\n\n// Get grades\nList<Integer> grades = s.getGrades();\ngrades.add(95); // modifies copy, not original\n\n// Original unaffected\nSystem.out.println("Original grades: " + s.getGrades());\n\n// Try to modify through unmodifiable view\nList<Integer> unmod = s.getGradesUnmodifiable();\n// unmod.add(100); // throws UnsupportedOperationException',
    hint: "Defensive copying prevents external modification",
  },
  {
    id: "encapsulation_8",
    topicId: "encapsulation",
    question: "Boolean getter with 'is' prefix convention.",
    mathSolution: "Boolean getters use 'is' instead of 'get'",
    codeSolution:
      'class User {\n    private boolean active;\n    private boolean admin;\n    private boolean loggedIn;\n    \n    public void setActive(boolean active) { this.active = active; }\n    public void setAdmin(boolean admin) { this.admin = admin; }\n    public void setLoggedIn(boolean loggedIn) { this.loggedIn = loggedIn; }\n    \n    // Boolean getters use \'is\' prefix\n    public boolean isActive() { return active; }\n    public boolean isAdmin() { return admin; }\n    public boolean isLoggedIn() { return loggedIn; }\n    \n    // Can also have get for consistency\n    public boolean getActive() { return active; } // works but not conventional\n}\n\nUser u = new User();\nu.setActive(true);\nu.setAdmin(false);\nu.setLoggedIn(true);\n\nSystem.out.println("Active: " + u.isActive());\nSystem.out.println("Admin: " + u.isAdmin());\nSystem.out.println("Logged in: " + u.isLoggedIn());\n\nif(u.isActive() && u.isLoggedIn()) {\n    System.out.println("User can access system");\n}',
    hint: "Convention: isXyz() for boolean getters",
  },

  // PACKAGE-LEVEL ENCAPSULATION (3)
  {
    id: "encapsulation_9",
    topicId: "encapsulation",
    question: "Use default (package-private) access modifier.",
    mathSolution: "Package-private accessible within same package",
    codeSolution:
      '// File: package1/Person.java\npackage package1;\n\npublic class Person {\n    private String name;      // private - only this class\n    int age;                  // default - package-private\n    protected String city;     // protected - package + subclasses\n    public String country;     // public - everywhere\n    \n    public Person(String name, int age, String city, String country) {\n        this.name = name;\n        this.age = age;\n        this.city = city;\n        this.country = country;\n    }\n    \n    public String getName() { return name; } // access private\n}\n\n// File: package1/TestSamePackage.java\npackage package1;\n\npublic class TestSamePackage {\n    public static void main(String[] args) {\n        Person p = new Person("Alice", 25, "NYC", "USA");\n        // System.out.println(p.name); // ERROR - private\n        System.out.println("Age: " + p.age);      // OK - default\n        System.out.println("City: " + p.city);    // OK - protected\n        System.out.println("Country: " + p.country); // OK - public\n    }\n}',
    hint: "Default access balances encapsulation and accessibility",
  },
  {
    id: "encapsulation_10",
    topicId: "encapsulation",
    question: "Protected access in different packages.",
    mathSolution: "Protected members accessible in subclasses",
    codeSolution:
      '// File: package1/Animal.java\npackage package1;\n\npublic class Animal {\n    protected String species;\n    protected void makeSound() {\n        System.out.println("Animal sound");\n    }\n}\n\n// File: package2/Dog.java\npackage package2;\nimport package1.Animal;\n\npublic class Dog extends Animal {\n    public void display() {\n        species = "Canine"; // OK - protected in subclass\n        makeSound(); // OK - protected in subclass\n        System.out.println("Species: " + species);\n    }\n}\n\n// File: package2/TestDifferentPackage.java\npackage package2;\nimport package1.Animal;\n\npublic class TestDifferentPackage {\n    public static void main(String[] args) {\n        Animal a = new Animal();\n        // a.species = "Mammal"; // ERROR - protected not accessible\n        // a.makeSound(); // ERROR - protected not accessible\n        \n        Dog d = new Dog();\n        d.display(); // OK - inside subclass\n    }\n}',
    hint: "Protected allows inheritance-based access across packages",
  },
  {
    id: "encapsulation_11",
    topicId: "encapsulation",
    question: "Design public API with encapsulated internals.",
    mathSolution: "Hide implementation details, expose only what's needed",
    codeSolution:
      '// Public API class\npublic class Stack {\n    private int[] elements;\n    private int size;\n    private static final int DEFAULT_CAPACITY = 10;\n    \n    public Stack() {\n        elements = new int[DEFAULT_CAPACITY];\n        size = 0;\n    }\n    \n    // Public API methods\n    public void push(int value) {\n        if(size == elements.length) {\n            resize();\n        }\n        elements[size++] = value;\n    }\n    \n    public int pop() {\n        if(isEmpty()) {\n            throw new IllegalStateException("Stack empty");\n        }\n        return elements[--size];\n    }\n    \n    public int peek() {\n        if(isEmpty()) {\n            throw new IllegalStateException("Stack empty");\n        }\n        return elements[size-1];\n    }\n    \n    public boolean isEmpty() { return size == 0; }\n    public int size() { return size; }\n    \n    // Private helper - hidden from users\n    private void resize() {\n        int[] newElements = new int[elements.length * 2];\n        System.arraycopy(elements, 0, newElements, 0, size);\n        elements = newElements;\n    }\n}\n\n// User of the API\nStack stack = new Stack();\nstack.push(10);\nstack.push(20);\nstack.push(30);\n\nSystem.out.println("Pop: " + stack.pop());\nSystem.out.println("Peek: " + stack.peek());\nSystem.out.println("Size: " + stack.size());\n\n// Can\'t access internal array or resize method\n// stack.elements // ERROR - private\n// stack.resize() // ERROR - private',
    hint: "Public API should hide implementation details",
  },

  // IMMUTABLE CLASSES (3)
  {
    id: "encapsulation_12",
    topicId: "encapsulation",
    question: "Create a fully immutable class.",
    mathSolution: "All fields final, no setters, defensive copying",
    codeSolution:
      'final class ImmutablePerson {\n    private final String name;\n    private final int age;\n    private final List<String> hobbies;\n    \n    public ImmutablePerson(String name, int age, List<String> hobbies) {\n        this.name = name;\n        this.age = age;\n        // Defensive copy - prevent external modification\n        this.hobbies = new ArrayList<>(hobbies);\n    }\n    \n    public String getName() { return name; }\n    public int getAge() { return age; }\n    \n    public List<String> getHobbies() {\n        // Return defensive copy\n        return new ArrayList<>(hobbies);\n    }\n    \n    // No setters - object cannot be modified\n}\n\nList<String> hobbies = new ArrayList<>(Arrays.asList("Reading", "Gaming"));\nImmutablePerson p = new ImmutablePerson("Alice", 25, hobbies);\n\nhobbies.add("Swimming"); // doesn\'t affect p\n\nSystem.out.println(p.getName() + ", " + p.getAge());\nSystem.out.println("Hobbies: " + p.getHobbies());\n\n// p.name = "Bob"; // ERROR - final field\n// p.getHobbies().add("Running"); // modifies copy, not original',
    hint: "Immutable objects are thread-safe and reliable",
  },
  {
    id: "encapsulation_13",
    topicId: "encapsulation",
    question: "Immutable class with builder pattern.",
    mathSolution: "Builder constructs immutable objects",
    codeSolution:
      'final class Employee {\n    private final int id;\n    private final String name;\n    private final String department;\n    private final double salary;\n    \n    private Employee(Builder builder) {\n        this.id = builder.id;\n        this.name = builder.name;\n        this.department = builder.department;\n        this.salary = builder.salary;\n    }\n    \n    // Getters only\n    public int getId() { return id; }\n    public String getName() { return name; }\n    public String getDepartment() { return department; }\n    public double getSalary() { return salary; }\n    \n    // Static Builder class\n    public static class Builder {\n        private int id;\n        private String name;\n        private String department;\n        private double salary;\n        \n        public Builder id(int id) { this.id = id; return this; }\n        public Builder name(String name) { this.name = name; return this; }\n        public Builder department(String dept) { this.department = dept; return this; }\n        public Builder salary(double salary) { this.salary = salary; return this; }\n        \n        public Employee build() {\n            // Validation can be done here\n            if(name == null) throw new IllegalStateException("Name required");\n            return new Employee(this);\n        }\n    }\n}\n\nEmployee emp = new Employee.Builder()\n    .id(101)\n    .name("Alice")\n    .department("Engineering")\n    .salary(75000)\n    .build();\n\nSystem.out.println(emp.getName() + " works in " + emp.getDepartment());',
    hint: "Builder pattern handles many parameters elegantly",
  },
  {
    id: "encapsulation_14",
    topicId: "encapsulation",
    question: "Defensive copying in constructor and getters.",
    mathSolution: "Protect against external modification of internal state",
    codeSolution:
      'import java.util.*;\n\nclass Course {\n    private final String name;\n    private final List<Student> students;\n    \n    public Course(String name, List<Student> students) {\n        this.name = name;\n        // Defensive copy in constructor\n        this.students = new ArrayList<>(students);\n    }\n    \n    public String getName() { return name; }\n    \n    public List<Student> getStudents() {\n        // Defensive copy in getter\n        return new ArrayList<>(students);\n    }\n    \n    // Method to add student (controlled modification)\n    public void addStudent(Student s) {\n        students.add(s);\n    }\n    \n    public int getStudentCount() { return students.size(); }\n}\n\nclass Student {\n    String name;\n    Student(String n) { name = n; }\n    public String toString() { return name; }\n}\n\nList<Student> externalList = new ArrayList<>();\nexternalList.add(new Student("Alice"));\nexternalList.add(new Student("Bob"));\n\nCourse course = new Course("Java", externalList);\n\n// External modification attempt\nexternalList.add(new Student("Charlie")); // doesn\'t affect course\n\nSystem.out.println("Course students: " + course.getStudents());\nSystem.out.println("Count: " + course.getStudentCount());\n\n// Get students and try to modify\nList<Student> retrieved = course.getStudents();\nretrieved.add(new Student("Dave")); // modifies copy, not original\n\nSystem.out.println("After external modify attempt: " + course.getStudents());',
    hint: "Defensive copying prevents state corruption",
  },

  // ENCAPSULATION WITH INHERITANCE (3)
  {
    id: "encapsulation_15",
    topicId: "encapsulation",
    question: "Protected fields in inheritance hierarchy.",
    mathSolution: "Protected allows access in subclasses",
    codeSolution:
      'class Shape {\n    protected String color;\n    protected double area;\n    \n    protected void calculateArea() {\n        // base implementation\n    }\n    \n    public void display() {\n        System.out.println("Color: " + color + ", Area: " + area);\n    }\n}\n\nclass Circle extends Shape {\n    private double radius;\n    \n    public Circle(double radius, String color) {\n        this.radius = radius;\n        this.color = color; // accessing protected field\n    }\n    \n    @Override\n    protected void calculateArea() {\n        area = Math.PI * radius * radius; // accessing protected field\n    }\n    \n    public void processCircle() {\n        calculateArea(); // call protected method\n    }\n}\n\nclass Rectangle extends Shape {\n    private double length, width;\n    \n    public Rectangle(double l, double w, String color) {\n        this.length = l;\n        this.width = w;\n        this.color = color;\n    }\n    \n    @Override\n    protected void calculateArea() {\n        area = length * width;\n    }\n    \n    public void processRect() {\n        calculateArea();\n    }\n}\n\nCircle c = new Circle(5, "Red");\nc.processCircle();\nc.display();\n\nRectangle r = new Rectangle(4, 6, "Blue");\nr.processRect();\nr.display();',
    hint: "Protected balances encapsulation and inheritance",
  },
  {
    id: "encapsulation_16",
    topicId: "encapsulation",
    question: "Template method pattern with protected abstract methods.",
    mathSolution: "Protected abstract methods define contract for subclasses",
    codeSolution:
      'abstract class DataProcessor {\n    // Template method - public API\n    public final void process() {\n        loadData();\n        processData();\n        saveResults();\n        cleanup();\n    }\n    \n    // Protected abstract methods - subclasses implement\n    protected abstract void loadData();\n    protected abstract void processData();\n    protected abstract void saveResults();\n    \n    // Protected hook - optional override\n    protected void cleanup() {\n        System.out.println("Default cleanup");\n    }\n    \n    // Private helper - implementation detail\n    private void log(String msg) {\n        System.out.println("[LOG] " + msg);\n    }\n}\n\nclass CSVProcessor extends DataProcessor {\n    @Override\n    protected void loadData() {\n        System.out.println("Loading CSV file");\n    }\n    \n    @Override\n    protected void processData() {\n        System.out.println("Processing CSV data");\n    }\n    \n    @Override\n    protected void saveResults() {\n        System.out.println("Saving CSV results");\n    }\n}\n\nclass XMLProcessor extends DataProcessor {\n    @Override\n    protected void loadData() {\n        System.out.println("Loading XML file");\n    }\n    \n    @Override\n    protected void processData() {\n        System.out.println("Parsing XML data");\n    }\n    \n    @Override\n    protected void saveResults() {\n        System.out.println("Saving XML results");\n    }\n    \n    @Override\n    protected void cleanup() {\n        System.out.println("Closing XML parser");\n    }\n}\n\nCSVProcessor csv = new CSVProcessor();\ncsv.process();\n\nSystem.out.println();\n\nXMLProcessor xml = new XMLProcessor();\nxml.process();',
    hint: "Template method pattern uses protected abstract methods",
  },
  {
    id: "encapsulation_17",
    topicId: "encapsulation",
    question: "Accessing private fields via protected methods.",
    mathSolution:
      "Protected methods provide controlled access to private fields",
    codeSolution:
      'class Employee {\n    private String name;\n    private double salary;\n    \n    public Employee(String name, double salary) {\n        this.name = name;\n        this.salary = salary;\n    }\n    \n    // Protected method for subclasses to access private data\n    protected String getName() { return name; }\n    \n    protected double getSalary() { return salary; }\n    \n    // Protected method with logic\n    protected double calculateBonus() {\n        return salary * 0.1;\n    }\n}\n\nclass Manager extends Employee {\n    private double teamBonus;\n    \n    public Manager(String name, double salary, double teamBonus) {\n        super(name, salary);\n        this.teamBonus = teamBonus;\n    }\n    \n    public void displayDetails() {\n        // Accessing protected methods from parent\n        System.out.println("Manager: " + getName());\n        System.out.println("Base salary: $" + getSalary());\n        System.out.println("Personal bonus: $" + calculateBonus());\n        System.out.println("Team bonus: $" + teamBonus);\n        System.out.println("Total: $" + (getSalary() + calculateBonus() + teamBonus));\n    }\n}\n\nManager m = new Manager("Alice", 80000, 5000);\nm.displayDetails();\n\n// Outside classes cannot access protected methods\n// m.getName(); // ERROR - protected not accessible',
    hint: "Protected methods give subclasses controlled access",
  },

  // ENCAPSULATION BEST PRACTICES (3)
  {
    id: "encapsulation_18",
    topicId: "encapsulation",
    question: "Prefer immutable fields where possible.",
    mathSolution: "Final fields make class thread-safe and simpler",
    codeSolution:
      'class Configuration {\n    private final String appName;\n    private final String version;\n    private final int maxUsers;\n    private final boolean debugMode;\n    \n    public Configuration(String appName, String version, int maxUsers, boolean debugMode) {\n        this.appName = appName;\n        this.version = version;\n        this.maxUsers = maxUsers;\n        this.debugMode = debugMode;\n    }\n    \n    // Only getters - no setters\n    public String getAppName() { return appName; }\n    public String getVersion() { return version; }\n    public int getMaxUsers() { return maxUsers; }\n    public boolean isDebugMode() { return debugMode; }\n    \n    // Methods that return new objects instead of modifying\n    public Configuration withMaxUsers(int newMax) {\n        return new Configuration(appName, version, newMax, debugMode);\n    }\n    \n    public Configuration enableDebug() {\n        return new Configuration(appName, version, maxUsers, true);\n    }\n}\n\nConfiguration config = new Configuration("MyApp", "1.0", 100, false);\nSystem.out.println(config.getAppName() + " v" + config.getVersion());\n\n// Create modified version without changing original\nConfiguration debugConfig = config.enableDebug();\nConfiguration biggerConfig = config.withMaxUsers(500);\n\nSystem.out.println("Original max users: " + config.getMaxUsers());\nSystem.out.println("Debug mode: " + debugConfig.isDebugMode());\nSystem.out.println("Bigger config: " + biggerConfig.getMaxUsers());',
    hint: "Immutable fields simplify reasoning about code",
  },
  {
    id: "encapsulation_19",
    topicId: "encapsulation",
    question: "Encapsulate what varies - hide implementation details.",
    mathSolution: "Hide changing implementations behind stable interface",
    codeSolution:
      'interface PaymentGateway {\n    void processPayment(double amount);\n    String getStatus();\n}\n\nclass PayPalGateway implements PaymentGateway {\n    private String apiKey;\n    private String status;\n    \n    public PayPalGateway(String apiKey) {\n        this.apiKey = apiKey;\n    }\n    \n    @Override\n    public void processPayment(double amount) {\n        // PayPal-specific implementation\n        System.out.println("Connecting to PayPal API with key: " + maskKey(apiKey));\n        // complex PayPal logic\n        status = "SUCCESS";\n    }\n    \n    @Override\n    public String getStatus() { return status; }\n    \n    // Private helper - implementation detail\n    private String maskKey(String key) {\n        return "****" + key.substring(key.length()-4);\n    }\n}\n\nclass StripeGateway implements PaymentGateway {\n    private String secretKey;\n    private String transactionId;\n    \n    public StripeGateway(String secretKey) {\n        this.secretKey = secretKey;\n    }\n    \n    @Override\n    public void processPayment(double amount) {\n        // Stripe-specific implementation\n        System.out.println("Stripe processing with key length: " + secretKey.length());\n        transactionId = "txn_" + System.currentTimeMillis();\n    }\n    \n    @Override\n    public String getStatus() { \n        return transactionId != null ? "COMPLETED" : "PENDING";\n    }\n}\n\nclass PaymentService {\n    private PaymentGateway gateway;\n    \n    public PaymentService(PaymentGateway gateway) {\n        this.gateway = gateway;\n    }\n    \n    public void pay(double amount) {\n        gateway.processPayment(amount);\n        System.out.println("Payment status: " + gateway.getStatus());\n    }\n}\n\n// Client code doesn\'t depend on specific implementations\nPaymentService service1 = new PaymentService(new PayPalGateway("paypal_key_123"));\nservice1.pay(100.50);\n\nPaymentService service2 = new PaymentService(new StripeGateway("stripe_secret_456"));\nservice2.pay(75.25);',
    hint: "Encapsulate varying implementations behind stable interfaces",
  },
  {
    id: "encapsulation_20",
    topicId: "encapsulation",
    question: "Encapsulation with validation and business rules.",
    mathSolution: "Keep business logic inside the class",
    codeSolution:
      'class BankAccount {\n    private String accountNumber;\n    private double balance;\n    private double overdraftLimit;\n    private List<String> transactions;\n    \n    public BankAccount(String accountNumber, double overdraftLimit) {\n        this.accountNumber = accountNumber;\n        this.overdraftLimit = overdraftLimit;\n        this.balance = 0;\n        this.transactions = new ArrayList<>();\n        addTransaction("Account created");\n    }\n    \n    public void deposit(double amount) {\n        if(amount <= 0) {\n            throw new IllegalArgumentException("Deposit amount must be positive");\n        }\n        balance += amount;\n        addTransaction("Deposited: $" + amount);\n    }\n    \n    public boolean withdraw(double amount) {\n        if(amount <= 0) {\n            throw new IllegalArgumentException("Withdrawal amount must be positive");\n        }\n        \n        if(amount > balance + overdraftLimit) {\n            System.out.println("Insufficient funds");\n            return false;\n        }\n        \n        balance -= amount;\n        addTransaction("Withdrew: $" + amount);\n        return true;\n    }\n    \n    public double getBalance() { return balance; }\n    \n    public List<String> getTransactionHistory() {\n        return new ArrayList<>(transactions); // defensive copy\n    }\n    \n    private void addTransaction(String transaction) {\n        transactions.add(transaction + " - Balance: $" + balance);\n    }\n    \n    public void displayAccountInfo() {\n        System.out.println("Account: " + accountNumber);\n        System.out.println("Balance: $" + balance);\n        System.out.println("Overdraft limit: $" + overdraftLimit);\n        System.out.println("Available: $" + (balance + overdraftLimit));\n    }\n}\n\nBankAccount acc = new BankAccount("ACC123", 500);\nacc.deposit(1000);\nacc.withdraw(200);\nacc.withdraw(1500); // uses overdraft\nacc.withdraw(1000); // insufficient\n\nacc.displayAccountInfo();\nSystem.out.println("\\nTransactions:");\nfor(String t : acc.getTransactionHistory()) {\n    System.out.println(t);\n}\n\n// Can\'t directly manipulate balance\n// acc.balance = 1000000; // ERROR - private',
    hint: "Business rules are encapsulated within the class",
  },
);
