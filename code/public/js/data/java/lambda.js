QuizData.questions.push(
  // BASIC LAMBDA SYNTAX (4)
  {
    id: "lambda_1",
    topicId: "lambda",
    question: "Write a lambda expression with no parameters.",
    mathSolution: "Empty parentheses for zero-parameter lambda",
    codeSolution:
      '// Runnable with anonymous class\nRunnable r1 = new Runnable() {\n    public void run() {\n        System.out.println("Hello");\n    }\n};\n\n// Lambda version\nRunnable r2 = () -> System.out.println("Hello from lambda");\n\nr2.run();',
    hint: "Use () for no parameters",
  },
  {
    id: "lambda_2",
    topicId: "lambda",
    question: "Write a lambda expression with one parameter.",
    mathSolution: "Single parameter can omit parentheses",
    codeSolution:
      'import java.util.function.Function;\n\n// With parentheses\nFunction<Integer, Integer> square1 = (x) -> x * x;\n\n// Without parentheses (single parameter)\nFunction<Integer, Integer> square2 = x -> x * x;\n\nSystem.out.println("Square of 5: " + square2.apply(5));',
    hint: "Parentheses optional for single parameter",
  },
  {
    id: "lambda_3",
    topicId: "lambda",
    question: "Write a lambda expression with multiple parameters.",
    mathSolution: "Multiple parameters require parentheses",
    codeSolution:
      'interface MathOperation {\n    int operate(int a, int b);\n}\n\nMathOperation addition = (a, b) -> a + b;\nMathOperation multiplication = (a, b) -> a * b;\n\nSystem.out.println("10 + 5 = " + addition.operate(10, 5));\nSystem.out.println("10 * 5 = " + multiplication.operate(10, 5));',
    hint: "Multiple parameters need parentheses",
  },
  {
    id: "lambda_4",
    topicId: "lambda",
    question: "Write a lambda expression with multiple statements in body.",
    mathSolution: "Multi-statement lambda requires curly braces and return",
    codeSolution:
      'interface StringProcessor {\n    String process(String s);\n}\n\nStringProcessor processor = (str) -> {\n    String trimmed = str.trim();\n    String upper = trimmed.toUpperCase();\n    return "Processed: " + upper;\n};\n\nSystem.out.println(processor.process("  hello world  "));',
    hint: "Use {} for multiple statements and explicit return",
  },

  // FUNCTIONAL INTERFACES (5)
  {
    id: "lambda_5",
    topicId: "lambda",
    question: "Use Predicate functional interface with lambda.",
    mathSolution: "Predicate<T> tests a condition and returns boolean",
    codeSolution:
      'import java.util.function.Predicate;\n\nPredicate<Integer> isEven = n -> n % 2 == 0;\nPredicate<String> isEmpty = s -> s.isEmpty();\nPredicate<String> isLong = s -> s.length() > 10;\n\nSystem.out.println("Is 4 even? " + isEven.test(4));\nSystem.out.println("Is 7 even? " + isEven.test(7));\nSystem.out.println("Is \'\' empty? " + isEmpty.test(""));\nSystem.out.println("Is \'Hello\' empty? " + isEmpty.test("Hello"));',
    hint: "Predicate returns boolean with test() method",
  },
  {
    id: "lambda_6",
    topicId: "lambda",
    question: "Use Function functional interface with lambda.",
    mathSolution: "Function<T,R> transforms T to R",
    codeSolution:
      'import java.util.function.Function;\n\nFunction<String, Integer> stringLength = s -> s.length();\nFunction<Integer, String> intToString = n -> "Number: " + n;\nFunction<String, String> quote = s -> "\'" + s + "\'";\n\nSystem.out.println("Length of \'Hello\': " + stringLength.apply("Hello"));\nSystem.out.println(intToString.apply(42));\nSystem.out.println(quote.apply("Lambda"));\n\n// Chaining functions\nFunction<String, String> quoteLength = stringLength.andThen(len -> "Length: " + len);\nSystem.out.println(quoteLength.apply("Hello World"));',
    hint: "Function has apply() method",
  },
  {
    id: "lambda_7",
    topicId: "lambda",
    question: "Use Consumer functional interface with lambda.",
    mathSolution: "Consumer<T> accepts input but returns no result",
    codeSolution:
      'import java.util.function.Consumer;\nimport java.util.Arrays;\nimport java.util.List;\n\nConsumer<String> print = s -> System.out.print(s + " ");\nConsumer<String> printWithStars = s -> System.out.print("*" + s + "* ");\nConsumer<Integer> doubleIt = n -> System.out.println(n * 2);\n\nList<String> names = Arrays.asList("Alice", "Bob", "Charlie");\nSystem.out.print("Names: ");\nnames.forEach(print);\n\nSystem.out.print("\\nWith stars: ");\nnames.forEach(printWithStars);\n\n// andThen chaining\nConsumer<String> printTwice = print.andThen(print);\nSystem.out.print("\\nTwice: ");\nnames.forEach(printTwice);',
    hint: "Consumer has accept() method",
  },
  {
    id: "lambda_8",
    topicId: "lambda",
    question: "Use Supplier functional interface with lambda.",
    mathSolution: "Supplier<T> provides a value with no input",
    codeSolution:
      'import java.util.function.Supplier;\nimport java.util.Random;\n\nSupplier<String> greeting = () -> "Hello, World!";\nSupplier<Integer> randomNumber = () -> new Random().nextInt(100);\nSupplier<Double> randomDouble = () -> Math.random() * 100;\n\nSystem.out.println(greeting.get());\nSystem.out.println("Random number: " + randomNumber.get());\nSystem.out.println("Random double: " + randomDouble.get());\n\n// Lazy initialization example\nSupplier<Double> pi = () -> 3.14159;\nSystem.out.println("Pi: " + pi.get());',
    hint: "Supplier has get() method",
  },
  {
    id: "lambda_9",
    topicId: "lambda",
    question: "Combine multiple Predicates using and(), or(), negate().",
    mathSolution: "Predicate logical operations for complex conditions",
    codeSolution:
      'import java.util.function.Predicate;\nimport java.util.Arrays;\nimport java.util.List;\n\nPredicate<Integer> isEven = n -> n % 2 == 0;\nPredicate<Integer> isPositive = n -> n > 0;\nPredicate<Integer> isDivisibleBy3 = n -> n % 3 == 0;\n\n// Combine with and()\nPredicate<Integer> isEvenAndPositive = isEven.and(isPositive);\nSystem.out.println("4 is even and positive: " + isEvenAndPositive.test(4));\nSystem.out.println("-2 is even and positive: " + isEvenAndPositive.test(-2));\n\n// Combine with or()\nPredicate<Integer> isEvenOrDivisibleBy3 = isEven.or(isDivisibleBy3);\nSystem.out.println("9 is even or divisible by 3: " + isEvenOrDivisibleBy3.test(9));\nSystem.out.println("5 is even or divisible by 3: " + isEvenOrDivisibleBy3.test(5));\n\n// Negate\nPredicate<Integer> isOdd = isEven.negate();\nSystem.out.println("7 is odd: " + isOdd.test(7));\n\n// Use in filtering\nList<Integer> numbers = Arrays.asList(-3, -2, -1, 0, 1, 2, 3, 4, 5);\nnumbers.stream()\n    .filter(isEven.and(isPositive))\n    .forEach(n -> System.out.print(n + " "));',
    hint: "Predicate has and(), or(), negate() methods",
  },

  // LAMBDA WITH COLLECTIONS (5)
  {
    id: "lambda_10",
    topicId: "lambda",
    question: "Iterate over collection using forEach with lambda.",
    mathSolution: "forEach takes Consumer lambda",
    codeSolution:
      'import java.util.Arrays;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.HashMap;\n\nList<String> fruits = Arrays.asList("Apple", "Banana", "Orange", "Mango");\n\n// Simple print\nfruits.forEach(fruit -> System.out.println("I like " + fruit));\n\n// With index using atomic integer\nSystem.out.println("\\nWith indices:");\nfruits.forEach(fruit -> System.out.println(fruit.toUpperCase()));\n\n// Map iteration\nMap<String, Integer> ages = new HashMap<>();\nages.put("Alice", 25);\nages.put("Bob", 30);\nages.put("Charlie", 28);\n\nages.forEach((name, age) -> \n    System.out.println(name + " is " + age + " years old")\n);',
    hint: "forEach is a default method in Iterable",
  },
  {
    id: "lambda_11",
    topicId: "lambda",
    question: "Filter a list using lambda with Stream API.",
    mathSolution: "filter() with Predicate lambda",
    codeSolution:
      'import java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\nList<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n\n// Filter even numbers\nList<Integer> evens = numbers.stream()\n    .filter(n -> n % 2 == 0)\n    .collect(Collectors.toList());\nSystem.out.println("Even numbers: " + evens);\n\n// Filter numbers greater than 5\nList<Integer> greaterThan5 = numbers.stream()\n    .filter(n -> n > 5)\n    .collect(Collectors.toList());\nSystem.out.println("Greater than 5: " + greaterThan5);\n\n// Filter strings\nList<String> names = Arrays.asList("Alice", "Bob", "Anna", "Charlie", "Amanda");\nList<String> startsWithA = names.stream()\n    .filter(name -> name.startsWith("A"))\n    .collect(Collectors.toList());\nSystem.out.println("Names starting with A: " + startsWithA);',
    hint: "filter() returns a new stream with matching elements",
  },
  {
    id: "lambda_12",
    topicId: "lambda",
    question: "Transform a list using map() with lambda.",
    mathSolution: "map() applies Function to each element",
    codeSolution:
      'import java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\nList<String> names = Arrays.asList("alice", "bob", "charlie");\n\n// Convert to uppercase\nList<String> upperNames = names.stream()\n    .map(name -> name.toUpperCase())\n    .collect(Collectors.toList());\nSystem.out.println("Uppercase: " + upperNames);\n\n// Get lengths\nList<Integer> nameLengths = names.stream()\n    .map(name -> name.length())\n    .collect(Collectors.toList());\nSystem.out.println("Lengths: " + nameLengths);\n\n// Transform numbers\nList<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\nList<Integer> squares = numbers.stream()\n    .map(n -> n * n)\n    .collect(Collectors.toList());\nSystem.out.println("Squares: " + squares);',
    hint: "map() transforms each element",
  },
  {
    id: "lambda_13",
    topicId: "lambda",
    question: "Sort a list using lambda comparator.",
    mathSolution: "Comparator as lambda for custom sorting",
    codeSolution:
      'import java.util.Arrays;\nimport java.util.List;\nimport java.util.Collections;\n\nList<String> names = Arrays.asList("Charlie", "Alice", "Bob", "David");\nSystem.out.println("Original: " + names);\n\n// Sort by natural order\nCollections.sort(names);\nSystem.out.println("Natural order: " + names);\n\n// Sort by length using lambda\nCollections.sort(names, (a, b) -> a.length() - b.length());\nSystem.out.println("By length: " + names);\n\n// Sort by reverse alphabetical\nCollections.sort(names, (a, b) -> b.compareTo(a));\nSystem.out.println("Reverse alphabetical: " + names);\n\n// Using List.sort() method\nList<Integer> numbers = Arrays.asList(5, 2, 8, 1, 9);\nnumbers.sort((a, b) -> a - b); // ascending\nSystem.out.println("Numbers ascending: " + numbers);\nnumbers.sort((a, b) -> b - a); // descending\nSystem.out.println("Numbers descending: " + numbers);',
    hint: "Comparator is a functional interface",
  },
  {
    id: "lambda_14",
    topicId: "lambda",
    question: "Use reduce() to aggregate stream elements.",
    mathSolution: "reduce() combines elements using binary operator",
    codeSolution:
      'import java.util.Arrays;\nimport java.util.List;\n\nList<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n\n// Sum using reduce\nint sum = numbers.stream()\n    .reduce(0, (a, b) -> a + b);\nSystem.out.println("Sum: " + sum);\n\n// Product using reduce\nint product = numbers.stream()\n    .reduce(1, (a, b) -> a * b);\nSystem.out.println("Product: " + product);\n\n// Max using reduce\nint max = numbers.stream()\n    .reduce(Integer.MIN_VALUE, (a, b) -> a > b ? a : b);\nSystem.out.println("Max: " + max);\n\n// Min using reduce\nint min = numbers.stream()\n    .reduce(Integer.MAX_VALUE, (a, b) -> a < b ? a : b);\nSystem.out.println("Min: " + min);\n\n// Concatenate strings\nList<String> words = Arrays.asList("Hello", " ", "World", "!");\nString sentence = words.stream()\n    .reduce("", (a, b) -> a + b);\nSystem.out.println("Concatenated: " + sentence);',
    hint: "reduce() combines elements into single result",
  },

  // METHOD REFERENCES (3)
  {
    id: "lambda_15",
    topicId: "lambda",
    question: "Use static method reference.",
    mathSolution: "ClassName::staticMethodName",
    codeSolution:
      'import java.util.Arrays;\nimport java.util.List;\nimport java.util.function.Function;\n\nclass MathUtils {\n    static int square(int x) { return x * x; }\n    static boolean isEven(int x) { return x % 2 == 0; }\n}\n\nList<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n\n// Lambda version\nnumbers.stream()\n    .map(x -> MathUtils.square(x))\n    .forEach(x -> System.out.print(x + " "));\n\nSystem.out.println();\n\n// Method reference version\nnumbers.stream()\n    .map(MathUtils::square)\n    .forEach(System.out::print);\n\nSystem.out.println("\\nEven numbers:");\nnumbers.stream()\n    .filter(MathUtils::isEven)\n    .forEach(System.out::print);',
    hint: "Static method reference uses Class::method",
  },
  {
    id: "lambda_16",
    topicId: "lambda",
    question: "Use instance method reference.",
    mathSolution: "object::instanceMethod or Class::instanceMethod",
    codeSolution:
      'import java.util.Arrays;\nimport java.util.List;\n\nclass Printer {\n    void print(String s) {\n        System.out.println("Printing: " + s);\n    }\n}\n\nList<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n\n// Instance method reference on specific object\nPrinter printer = new Printer();\nnames.forEach(printer::print);\n\n// Instance method reference on arbitrary object of particular type\nSystem.out.println("\\nUppercase:");\nnames.stream()\n    .map(String::toUpperCase)  // method reference\n    .forEach(System.out::println);\n\nSystem.out.println("\\nSorted by length:");\nnames.stream()\n    .sorted((a, b) -> a.length() - b.length())\n    .forEach(System.out::println);',
    hint: "Two types: bound and unbound method references",
  },
  {
    id: "lambda_17",
    topicId: "lambda",
    question: "Use constructor reference.",
    mathSolution: "ClassName::new",
    codeSolution:
      'import java.util.*;\nimport java.util.function.Supplier;\nimport java.util.function.Function;\n\nclass Person {\n    String name;\n    Person() { name = "Unknown"; }\n    Person(String name) { this.name = name; }\n    public String toString() { return name; }\n}\n\n// Constructor reference for no-arg constructor\nSupplier<Person> personFactory = Person::new;\nPerson p1 = personFactory.get();\nSystem.out.println("Default person: " + p1);\n\n// Constructor reference for one-arg constructor\nFunction<String, Person> personCreator = Person::new;\nPerson p2 = personCreator.apply("Alice");\nSystem.out.println("Named person: " + p2);\n\n// With collections\nList<String> names = Arrays.asList("Bob", "Charlie", "David");\nList<Person> people = names.stream()\n    .map(Person::new)\n    .collect(Collectors.toList());\nSystem.out.println("People: " + people);\n\n// Array constructor reference\nFunction<Integer, String[]> arrayCreator = String[]::new;\nString[] array = arrayCreator.apply(5);\nSystem.out.println("Array length: " + array.length);',
    hint: "Constructor references create new objects",
  },

  // ADVANCED LAMBDA CONCEPTS (5)
  {
    id: "lambda_18",
    topicId: "lambda",
    question: "Create custom functional interface.",
    mathSolution:
      "@FunctionalInterface annotation ensures single abstract method",
    codeSolution:
      '@FunctionalInterface\ninterface StringFormatter {\n    String format(String s1, String s2);\n    // Only one abstract method allowed\n    \n    // Default methods are okay\n    default void printHelp() {\n        System.out.println("Formats two strings");\n    }\n    \n    // Static methods are okay\n    static StringFormatter createJoiner(String delimiter) {\n        return (s1, s2) -> s1 + delimiter + s2;\n    }\n}\n\n// Use the custom functional interface\nStringFormatter joiner = (a, b) -> a + " " + b;\nSystem.out.println(joiner.format("Hello", "World"));\n\nStringFormatter csv = (a, b) -> a + "," + b;\nSystem.out.println(csv.format("Apple", "Banana"));\n\nStringFormatter reverser = (a, b) -> new StringBuilder(a + b).reverse().toString();\nSystem.out.println(reverser.format("AB", "CD"));\n\n// Using factory method\nStringFormatter customJoiner = StringFormatter.createJoiner(" - ");\nSystem.out.println(customJoiner.format("First", "Second"));',
    hint: "@FunctionalInterface is optional but recommended",
  },
  {
    id: "lambda_19",
    topicId: "lambda",
    question: "Lambda with effectively final variables.",
    mathSolution: "Lambda can access effectively final local variables",
    codeSolution:
      'import java.util.Arrays;\nimport java.util.List;\n\npublic class LambdaCapture {\n    public static void main(String[] args) {\n        String prefix = "Name: "; // effectively final (not modified)\n        int multiplier = 2; // effectively final\n        \n        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");\n        \n        // Capturing local variables\n        names.forEach(name -> {\n            System.out.println(prefix + name);\n        });\n        \n        // Capturing in map operation\n        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n        numbers.stream()\n            .map(n -> n * multiplier)\n            .forEach(n -> System.out.print(n + " "));\n        \n        // This would cause error - variable not effectively final\n        // int counter = 0;\n        // numbers.forEach(n -> counter++); // ERROR\n        \n        // Instance variables can be modified\n        class Example {\n            int instanceCounter = 0;\n            void process() {\n                numbers.forEach(n -> instanceCounter++); // OK\n            }\n        }\n    }\n}',
    hint: "Local variables must be effectively final (not changed after initialization)",
  },
  {
    id: "lambda_20",
    topicId: "lambda",
    question: "Handle checked exceptions in lambda.",
    mathSolution: "Wrap checked exceptions or use custom functional interface",
    codeSolution:
      'import java.util.function.Function;\nimport java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\nimport java.util.Arrays;\nimport java.util.List;\n\n// Custom functional interface that throws exception\n@FunctionalInterface\ninterface ThrowingFunction<T, R> {\n    R apply(T t) throws Exception;\n}\n\n// Helper method to wrap checked exceptions\nclass LambdaExceptionHandler {\n    static <T, R> Function<T, R> wrap(ThrowingFunction<T, R> throwingFunction) {\n        return t -> {\n            try {\n                return throwingFunction.apply(t);\n            } catch (Exception e) {\n                throw new RuntimeException(e);\n            }\n        };\n    }\n}\n\nList<String> filenames = Arrays.asList("file1.txt", "file2.txt");\n\n// This won\'t compile - IOException is checked\n// filenames.stream()\n//     .map(name -> Files.readAllLines(Paths.get(name))) // ERROR\n//     .forEach(System.out::println);\n\n// Solution 1: Wrap in try-catch\nfilenames.stream()\n    .map(name -> {\n        try {\n            return Files.readAllLines(Paths.get(name));\n        } catch (IOException e) {\n            throw new RuntimeException(e);\n        }\n    })\n    .forEach(System.out::println);\n\n// Solution 2: Use helper method\nfilenames.stream()\n    .map(LambdaExceptionHandler.wrap(name -> Files.readAllLines(Paths.get(name))))\n    .forEach(System.out::println);',
    hint: "Standard functional interfaces don't throw checked exceptions",
  },
  {
    id: "lambda_21",
    topicId: "lambda",
    question: "Use flatMap() for nested collections.",
    mathSolution: "flatMap flattens multiple streams into one",
    codeSolution:
      'import java.util.Arrays;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\nList<List<Integer>> nestedNumbers = Arrays.asList(\n    Arrays.asList(1, 2, 3),\n    Arrays.asList(4, 5, 6),\n    Arrays.asList(7, 8, 9)\n);\n\n// Without flatMap - nested loops needed\nSystem.out.println("Nested: " + nestedNumbers);\n\n// With flatMap\nList<Integer> flattened = nestedNumbers.stream()\n    .flatMap(list -> list.stream())\n    .collect(Collectors.toList());\nSystem.out.println("Flattened: " + flattened);\n\n// Real example - words to characters\nList<String> words = Arrays.asList("Hello", "World");\nList<Character> characters = words.stream()\n    .flatMap(word -> word.chars().mapToObj(c -> (char) c))\n    .collect(Collectors.toList());\nSystem.out.println("Characters: " + characters);\n\n// Multiple sentences to words\nList<String> sentences = Arrays.asList(\n    "Java is great",\n    "Lambda expressions are cool"\n);\nList<String> allWords = sentences.stream()\n    .flatMap(sentence -> Arrays.stream(sentence.split(" ")))\n    .collect(Collectors.toList());\nSystem.out.println("All words: " + allWords);',
    hint: "flatMap() is map() + flattening",
  },
  {
    id: "lambda_22",
    topicId: "lambda",
    question: "Use groupingBy with lambda for complex grouping.",
    mathSolution: "Collectors.groupingBy with classifier function",
    codeSolution:
      'import java.util.*;\nimport java.util.stream.Collectors;\n\nclass Person {\n    String name; int age; String city;\n    Person(String n, int a, String c) { name = n; age = a; city = c; }\n    public String toString() { return name; }\n}\n\nList<Person> people = Arrays.asList(\n    new Person("Alice", 25, "NYC"),\n    new Person("Bob", 30, "LA"),\n    new Person("Charlie", 25, "NYC"),\n    new Person("David", 30, "Chicago"),\n    new Person("Eve", 25, "LA")\n);\n\n// Group by city\nMap<String, List<Person>> byCity = people.stream()\n    .collect(Collectors.groupingBy(p -> p.city));\nSystem.out.println("By city: " + byCity);\n\n// Group by age\nMap<Integer, List<Person>> byAge = people.stream()\n    .collect(Collectors.groupingBy(p -> p.age));\nSystem.out.println("By age: " + byAge);\n\n// Group by age range\nMap<String, List<Person>> byAgeRange = people.stream()\n    .collect(Collectors.groupingBy(p -> {\n        if(p.age < 30) return "Under 30";\n        else return "30 and over";\n    }));\nSystem.out.println("By age range: " + byAgeRange);\n\n// Counting in groups\nMap<String, Long> countByCity = people.stream()\n    .collect(Collectors.groupingBy(p -> p.city, Collectors.counting()));\nSystem.out.println("Count by city: " + countByCity);',
    hint: "groupingBy creates Map from classifier function",
  },

  // PRACTICAL APPLICATIONS (3)
  {
    id: "lambda_23",
    topicId: "lambda",
    question: "Implement event handler using lambda.",
    mathSolution: "Lambda simplifies event listener implementation",
    codeSolution:
      'import javax.swing.*;\nimport java.awt.event.ActionEvent;\n\n// Simulating button click without actual GUI\nclass Button {\n    private List<ActionListener> listeners = new ArrayList<>();\n    \n    void addActionListener(ActionListener listener) {\n        listeners.add(listener);\n    }\n    \n    void click() {\n        ActionEvent event = new ActionEvent(this, ActionEvent.ACTION_PERFORMED, "click");\n        listeners.forEach(l -> l.actionPerformed(event));\n    }\n}\n\ninterface ActionListener {\n    void actionPerformed(ActionEvent e);\n}\n\n// Traditional anonymous class\nButton button1 = new Button();\nbutton1.addActionListener(new ActionListener() {\n    public void actionPerformed(ActionEvent e) {\n        System.out.println("Button 1 clicked (anonymous class)");\n    }\n});\n\n// Lambda version\nButton button2 = new Button();\nbutton2.addActionListener(e -> \n    System.out.println("Button 2 clicked (lambda)")\n);\n\n// Lambda with multiple statements\nButton button3 = new Button();\nbutton3.addActionListener(e -> {\n    System.out.println("Button 3 clicked");\n    System.out.println("Event source: " + e.getSource());\n    System.out.println("Event command: " + e.getActionCommand());\n});\n\n// Simulate clicks\nbutton1.click();\nbutton2.click();\nbutton3.click();',
    hint: "Lambda makes event handling concise",
  },
  {
    id: "lambda_24",
    topicId: "lambda",
    question: "Use lambda with custom sorting of objects.",
    mathSolution: "Comparator.comparing with lambda for multi-level sorting",
    codeSolution:
      'import java.util.*;\n\nclass Employee {\n    String name; double salary; int age;\n    Employee(String n, double s, int a) { name = n; salary = s; age = a; }\n    public String toString() { return name + "($" + salary + "," + age + ")"; }\n}\n\nList<Employee> employees = Arrays.asList(\n    new Employee("Alice", 75000, 25),\n    new Employee("Bob", 65000, 30),\n    new Employee("Charlie", 75000, 28),\n    new Employee("David", 80000, 35),\n    new Employee("Eve", 65000, 22)\n);\n\n// Sort by salary\nemployees.sort((e1, e2) -> Double.compare(e1.salary, e2.salary));\nSystem.out.println("By salary: " + employees);\n\n// Sort by salary descending\nemployees.sort((e1, e2) -> Double.compare(e2.salary, e1.salary));\nSystem.out.println("By salary desc: " + employees);\n\n// Sort by name\nemployees.sort((e1, e2) -> e1.name.compareTo(e2.name));\nSystem.out.println("By name: " + employees);\n\n// Multi-level sorting (by salary, then by age)\nemployees.sort((e1, e2) -> {\n    if(e1.salary != e2.salary) {\n        return Double.compare(e1.salary, e2.salary);\n    } else {\n        return Integer.compare(e1.age, e2.age);\n    }\n});\nSystem.out.println("By salary then age: " + employees);\n\n// Using Comparator.comparing\nemployees.sort(Comparator.comparing(e -> e.name));\nSystem.out.println("Using comparing: " + employees);\n\n// Then comparing\nemployees.sort(Comparator.comparing(Employee::getSalary)\n    .thenComparing(Employee::getAge)\n    .reversed());',
    hint: "Lambda enables flexible sorting logic",
  },
  {
    id: "lambda_25",
    topicId: "lambda",
    question: "Implement strategy pattern with lambda.",
    mathSolution: "Lambda replaces strategy interface implementations",
    codeSolution:
      'import java.util.*;\nimport java.util.function.*;\n\nclass PaymentStrategy {\n    // Instead of creating multiple strategy classes, use lambda\n    static void processPayment(double amount, Function<Double, String> processor) {\n        String result = processor.apply(amount);\n        System.out.println(result);\n    }\n}\n\n// Different payment strategies as lambdas\nFunction<Double, String> creditCard = amount -> {\n    return "Paid $" + amount + " using Credit Card (fee: $" + (amount * 0.02) + ")";\n};\n\nFunction<Double, String> paypal = amount -> {\n    return "Paid $" + amount + " using PayPal (fee: $" + (amount * 0.03) + ")";\n};\n\nFunction<Double, String> bitcoin = amount -> {\n    return "Paid $" + amount + " using Bitcoin (fee: $" + (amount * 0.01) + ")";\n};\n\nFunction<Double, String> cash = amount -> {\n    return "Paid $" + amount + " in Cash (no fee)";\n};\n\n// Use different strategies\nPaymentStrategy.processPayment(100.50, creditCard);\nPaymentStrategy.processPayment(75.25, paypal);\nPaymentStrategy.processPayment(200.00, bitcoin);\nPaymentStrategy.processPayment(50.00, cash);\n\n// Inline lambda for one-off strategy\nPaymentStrategy.processPayment(30.00, amount -> {\n    return "Gift card payment of $" + amount + " (balance: $" + (amount - 5) + ")";\n});\n\n// Example with discount calculation\nList<Double> prices = Arrays.asList(10.0, 20.0, 30.0);\nFunction<Double, Double> noDiscount = price -> price;\nFunction<Double, Double> tenPercentOff = price -> price * 0.9;\nFunction<Double, Double> twentyPercentOff = price -> price * 0.8;\n\nSystem.out.println("\\nPrices with different discounts:");\nprices.stream()\n    .map(noDiscount)\n    .forEach(p -> System.out.print(p + " "));\n\nSystem.out.println();\nprices.stream()\n    .map(tenPercentOff)\n    .forEach(p -> System.out.print(p + " "));',
    hint: "Strategy pattern becomes trivial with lambdas",
  },
);
