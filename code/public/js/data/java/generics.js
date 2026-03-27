QuizData.questions.push(
  // BASIC GENERICS (4)
  {
    id: "generics_1",
    topicId: "generics",
    question: "Create a simple generic class with type parameter T.",
    mathSolution: "Generic class uses type parameter in angle brackets",
    codeSolution:
      'class Box<T> {\n    private T content;\n    \n    public void set(T content) {\n        this.content = content;\n    }\n    \n    public T get() {\n        return content;\n    }\n}\n\nBox<String> stringBox = new Box<>();\nstringBox.set("Hello Generics");\nSystem.out.println(stringBox.get());\n\nBox<Integer> intBox = new Box<>();\nintBox.set(42);\nSystem.out.println(intBox.get());\n\n// Type safety - compiler prevents wrong types\n// stringBox.set(123); // Compile error',
    hint: "Type parameter T is placeholder for actual type",
  },
  {
    id: "generics_2",
    topicId: "generics",
    question: "Generic class with multiple type parameters.",
    mathSolution: "Multiple type parameters separated by commas",
    codeSolution:
      'class Pair<K, V> {\n    private K key;\n    private V value;\n    \n    public Pair(K key, V value) {\n        this.key = key;\n        this.value = value;\n    }\n    \n    public K getKey() { return key; }\n    public V getValue() { return value; }\n    \n    public void setKey(K key) { this.key = key; }\n    public void setValue(V value) { this.value = value; }\n}\n\nPair<String, Integer> person = new Pair<>("Alice", 25);\nSystem.out.println(person.getKey() + " is " + person.getValue() + " years old");\n\nPair<Integer, String> idToName = new Pair<>(101, "Bob");\nSystem.out.println("ID: " + idToName.getKey() + " -> " + idToName.getValue());\n\nPair<String, Pair<String, Integer>> nested = new Pair<>("Person", person);\nSystem.out.println(nested.getKey() + ": " + nested.getValue().getKey());',
    hint: "Can have multiple type parameters like <K, V, T>",
  },
  {
    id: "generics_3",
    topicId: "generics",
    question: "Generic method in non-generic class.",
    mathSolution: "Generic methods have type parameter before return type",
    codeSolution:
      'class Utilities {\n    // Generic method\n    public static <T> void printArray(T[] array) {\n        for(T element : array) {\n            System.out.print(element + " ");\n        }\n        System.out.println();\n    }\n    \n    // Generic method with return type\n    public static <T> T getLast(T[] array) {\n        if(array.length == 0) return null;\n        return array[array.length - 1];\n    }\n    \n    // Generic method with two type parameters\n    public static <K, V> void printPair(K key, V value) {\n        System.out.println(key + " -> " + value);\n    }\n}\n\nString[] names = {"Alice", "Bob", "Charlie"};\nInteger[] numbers = {1, 2, 3, 4, 5};\nDouble[] doubles = {1.1, 2.2, 3.3};\n\nUtilities.printArray(names);\nUtilities.printArray(numbers);\nUtilities.printArray(doubles);\n\nSystem.out.println("Last name: " + Utilities.getLast(names));\nSystem.out.println("Last number: " + Utilities.getLast(numbers));\n\nUtilities.printPair("Name", "Alice");\nUtilities.printPair(101, "Employee");',
    hint: "Generic methods work with any type",
  },
  {
    id: "generics_4",
    topicId: "generics",
    question: "Generic constructor in generic and non-generic classes.",
    mathSolution: "Constructors can also be generic",
    codeSolution:
      'class GenericConstructor {\n    private double value;\n    \n    // Generic constructor\n    public <T extends Number> GenericConstructor(T num) {\n        value = num.doubleValue();\n    }\n    \n    void display() {\n        System.out.println("Value: " + value);\n    }\n}\n\nclass Container<T> {\n    private T item;\n    \n    // Generic constructor in generic class\n    public <U> Container(U initial, T item) {\n        System.out.println("Initial value: " + initial);\n        this.item = item;\n    }\n    \n    public T getItem() { return item; }\n}\n\nGenericConstructor gc1 = new GenericConstructor(10);\ngc1.display();\n\nGenericConstructor gc2 = new GenericConstructor(3.14);\ngc2.display();\n\n// GenericConstructor gc3 = new GenericConstructor("Hello"); // Error - String not Number\n\nContainer<String> container = new Container<>("Init", "Hello");\nSystem.out.println(container.getItem());',
    hint: "Constructors can have their own type parameters",
  },

  // BOUNDED TYPE PARAMETERS (4)
  {
    id: "generics_5",
    topicId: "generics",
    question: "Bounded type parameter with extends.",
    mathSolution: "<T extends Number> restricts T to Number subclasses",
    codeSolution:
      'class NumericBox<T extends Number> {\n    private T number;\n    \n    public NumericBox(T number) {\n        this.number = number;\n    }\n    \n    public double doubleValue() {\n        return number.doubleValue();\n    }\n    \n    public int intValue() {\n        return number.intValue();\n    }\n}\n\nNumericBox<Integer> intBox = new NumericBox<>(10);\nNumericBox<Double> doubleBox = new NumericBox<>(5.5);\n// NumericBox<String> stringBox = new NumericBox<>("Hello"); // Error - String not Number\n\nSystem.out.println("Int as double: " + intBox.doubleValue());\nSystem.out.println("Double as int: " + doubleBox.intValue());\n\n// Works with any Number subclass\nNumericBox<Float> floatBox = new NumericBox<>(3.14f);\nNumericBox<Long> longBox = new NumericBox<>(100L);',
    hint: "extends bounds type to subclasses of specified class",
  },
  {
    id: "generics_6",
    topicId: "generics",
    question: "Bounded type parameter with interface.",
    mathSolution: "<T extends Comparable<T>> ensures T implements Comparable",
    codeSolution:
      'class MaxFinder {\n    public static <T extends Comparable<T>> T findMax(T a, T b, T c) {\n        T max = a;\n        if(b.compareTo(max) > 0) max = b;\n        if(c.compareTo(max) > 0) max = c;\n        return max;\n    }\n}\n\nSystem.out.println("Max of 10, 20, 15: " + MaxFinder.findMax(10, 20, 15));\nSystem.out.println("Max of 5.5, 2.2, 7.7: " + MaxFinder.findMax(5.5, 2.2, 7.7));\nSystem.out.println("Max of \'apple\', \'banana\', \'cherry\': " + \n    MaxFinder.findMax("apple", "banana", "cherry"));\n\n// Custom class implementing Comparable\nclass Person implements Comparable<Person> {\n    String name; int age;\n    Person(String n, int a) { name = n; age = a; }\n    \n    @Override\n    public int compareTo(Person p) {\n        return Integer.compare(this.age, p.age);\n    }\n    \n    public String toString() { return name + "(" + age + ")"; }\n}\n\nPerson p1 = new Person("Alice", 25);\nPerson p2 = new Person("Bob", 30);\nPerson p3 = new Person("Charlie", 28);\nSystem.out.println("Oldest: " + MaxFinder.findMax(p1, p2, p3));',
    hint: "extends can be class or interface, or both with &",
  },
  {
    id: "generics_7",
    topicId: "generics",
    question: "Multiple bounds with &.",
    mathSolution: "<T extends ClassA & InterfaceB & InterfaceC>",
    codeSolution:
      'interface Drawable {\n    void draw();\n}\n\ninterface Colorable {\n    String getColor();\n}\n\nclass Shape {\n    protected String name;\n    Shape(String n) { name = n; }\n}\n\nclass Circle extends Shape implements Drawable, Colorable {\n    private String color;\n    \n    Circle(String name, String color) {\n        super(name);\n        this.color = color;\n    }\n    \n    @Override\n    public void draw() {\n        System.out.println("Drawing " + color + " circle");\n    }\n    \n    @Override\n    public String getColor() { return color; }\n}\n\nclass Processor {\n    // Multiple bounds: T must extend Shape AND implement both interfaces\n    public static <T extends Shape & Drawable & Colorable> void process(T item) {\n        System.out.println("Processing: " + item.name);\n        item.draw();\n        System.out.println("Color: " + item.getColor());\n    }\n}\n\nCircle circle = new Circle("MyCircle", "Red");\nProcessor.process(circle);\n\n// This would fail - doesn\'t implement all interfaces\n// class Square extends Shape {}\n// Square square = new Square("Square");\n// Processor.process(square); // Error',
    hint: "First bound must be class (if any), then interfaces",
  },
  {
    id: "generics_8",
    topicId: "generics",
    question: "Generic method with bounded wildcard.",
    mathSolution: "Wildcard ? with extends for upper bound",
    codeSolution:
      'import java.util.*;\n\nclass NumberProcessor {\n    // Upper bounded wildcard - accepts List of any Number subclass\n    public static double sumOfList(List<? extends Number> list) {\n        double sum = 0;\n        for(Number n : list) {\n            sum += n.doubleValue();\n        }\n        return sum;\n    }\n    \n    // Can read from but cannot add to (except null)\n    public static void printNumbers(List<? extends Number> list) {\n        for(Number n : list) {\n            System.out.print(n + " ");\n        }\n        System.out.println();\n        // list.add(10); // Error - cannot add with upper bound\n    }\n}\n\nList<Integer> ints = Arrays.asList(1, 2, 3, 4, 5);\nList<Double> doubles = Arrays.asList(1.1, 2.2, 3.3);\nList<String> strings = Arrays.asList("A", "B", "C");\n\nSystem.out.println("Sum of ints: " + NumberProcessor.sumOfList(ints));\nSystem.out.println("Sum of doubles: " + NumberProcessor.sumOfList(doubles));\n// System.out.println(NumberProcessor.sumOfList(strings)); // Error\n\nNumberProcessor.printNumbers(ints);\nNumberProcessor.printNumbers(doubles);',
    hint: "Upper bounded wildcard for reading",
  },

  // WILDCARDS (4)
  {
    id: "generics_9",
    topicId: "generics",
    question: "Unbounded wildcard - <?>.",
    mathSolution: "Unbounded wildcard for any type",
    codeSolution:
      'import java.util.*;\n\nclass WildcardDemo {\n    // Unbounded wildcard - works with any type\n    public static void printList(List<?> list) {\n        for(Object obj : list) {\n            System.out.print(obj + " ");\n        }\n        System.out.println();\n    }\n    \n    public static int getListSize(List<?> list) {\n        return list.size();\n    }\n    \n    // Can only read as Object, cannot add (except null)\n    public static boolean isEmpty(List<?> list) {\n        return list == null || list.isEmpty();\n    }\n}\n\nList<Integer> intList = Arrays.asList(1, 2, 3);\nList<String> strList = Arrays.asList("A", "B", "C");\nList<Double> dblList = Arrays.asList(1.1, 2.2, 3.3);\n\nWildcardDemo.printList(intList);\nWildcardDemo.printList(strList);\nWildcardDemo.printList(dblList);\n\nSystem.out.println("Size: " + WildcardDemo.getListSize(strList));\nSystem.out.println("Empty? " + WildcardDemo.isEmpty(new ArrayList<>()));\n\n// Cannot add (except null)\n// WildcardDemo.printList(intList).add(10); // Error',
    hint: "<?> means any type, useful for read-only operations",
  },
  {
    id: "generics_10",
    topicId: "generics",
    question: "Lower bounded wildcard - <? super T>.",
    mathSolution: "Lower bound allows writing to collection",
    codeSolution:
      'import java.util.*;\n\nclass LowerBoundDemo {\n    // Lower bounded wildcard - can add Integer or its subclasses\n    public static void addNumbers(List<? super Integer> list) {\n        for(int i = 1; i <= 5; i++) {\n            list.add(i); // OK - Integer is-a ? super Integer\n        }\n        // list.add(3.14); // Error - Double not within bound\n    }\n    \n    public static void copy(List<? super Integer> dest, List<? extends Integer> src) {\n        for(Integer num : src) {\n            dest.add(num);\n        }\n    }\n}\n\nList<Number> numList = new ArrayList<>();\nList<Object> objList = new ArrayList<>();\nList<Integer> intList = new ArrayList<>();\n\nLowerBoundDemo.addNumbers(numList); // Number is super of Integer\nLowerBoundDemo.addNumbers(objList); // Object is super of Integer\nLowerBoundDemo.addNumbers(intList); // Integer is super of itself\n\nSystem.out.println("Number list: " + numList);\nSystem.out.println("Object list: " + objList);\nSystem.out.println("Integer list: " + intList);\n\n// Copy example\nList<Integer> source = Arrays.asList(10, 20, 30);\nList<Number> dest = new ArrayList<>();\nLowerBoundDemo.copy(dest, source);\nSystem.out.println("Destination: " + dest);',
    hint: "Lower bounded wildcard for writing (add operation)",
  },
  {
    id: "generics_11",
    topicId: "generics",
    question: "Wildcard guidelines - PECS (Producer Extends, Consumer Super).",
    mathSolution: "Use extends for read, super for write",
    codeSolution:
      'import java.util.*;\n\nclass PecsDemo {\n    // Producer - use extends (read only)\n    public static double sum(Collection<? extends Number> producer) {\n        double total = 0;\n        for(Number n : producer) { // Reading - OK\n            total += n.doubleValue();\n        }\n        // producer.add(10); // Error - can\'t add to producer\n        return total;\n    }\n    \n    // Consumer - use super (write only)\n    public static void addIntegers(Collection<? super Integer> consumer) {\n        for(int i = 1; i <= 5; i++) {\n            consumer.add(i); // Writing - OK\n        }\n        // Integer i = consumer.iterator().next(); // Error - reading not safe\n    }\n    \n    // Both read and write - use exact type\n    public static <T> void swap(List<T> list, int i, int j) {\n        T temp = list.get(i); // read\n        list.set(i, list.get(j)); // write\n        list.set(j, temp); // write\n    }\n}\n\nList<Integer> ints = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));\nList<Double> doubles = new ArrayList<>(Arrays.asList(1.1, 2.2, 3.3));\n\nSystem.out.println("Sum ints: " + PecsDemo.sum(ints));\nSystem.out.println("Sum doubles: " + PecsDemo.sum(doubles));\n\nList<Number> numbers = new ArrayList<>();\nList<Object> objects = new ArrayList<>();\n\nPecsDemo.addIntegers(numbers);\nPecsDemo.addIntegers(objects);\n\nSystem.out.println("Numbers: " + numbers);\nSystem.out.println("Objects: " + objects);\n\n// Swap example\nList<String> names = Arrays.asList("A", "B", "C", "D");\nPecsDemo.swap(names, 1, 2);\nSystem.out.println("Swapped: " + names);',
    hint: "PECS: Producer Extends, Consumer Super",
  },
  {
    id: "generics_12",
    topicId: "generics",
    question: "Wildcard capture and helper methods.",
    mathSolution: "Helper methods to capture wildcard for operations",
    codeSolution:
      'import java.util.*;\n\nclass WildcardCapture {\n    // Problem: Can\'t swap two elements with wildcard\n    public static void swap(List<?> list, int i, int j) {\n        // list.set(i, list.get(j)); // Error - can\'t set with ?\n        swapHelper(list, i, j); // Use helper\n    }\n    \n    // Helper method captures wildcard as type parameter\n    private static <T> void swapHelper(List<T> list, int i, int j) {\n        T temp = list.get(i);\n        list.set(i, list.get(j));\n        list.set(j, temp);\n    }\n    \n    // Another example - reverse list with wildcard\n    public static void reverse(List<?> list) {\n        reverseHelper(list);\n    }\n    \n    private static <T> void reverseHelper(List<T> list) {\n        int size = list.size();\n        for(int i = 0; i < size/2; i++) {\n            T temp = list.get(i);\n            list.set(i, list.get(size - 1 - i));\n            list.set(size - 1 - i, temp);\n        }\n    }\n}\n\nList<String> names = new ArrayList<>(Arrays.asList("A", "B", "C", "D"));\nSystem.out.println("Original: " + names);\n\nWildcardCapture.swap(names, 1, 2);\nSystem.out.println("After swap: " + names);\n\nWildcardCapture.reverse(names);\nSystem.out.println("After reverse: " + names);\n\nList<Integer> nums = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));\nWildcardCapture.reverse(nums);\nSystem.out.println("Reversed nums: " + nums);',
    hint: "Helper methods capture wildcard as named type parameter",
  },

  // GENERIC COLLECTIONS (3)
  {
    id: "generics_13",
    topicId: "generics",
    question: "Generic List with type safety.",
    mathSolution: "Type-safe collections using generics",
    codeSolution:
      'import java.util.*;\n\n// Without generics - unsafe\nList rawList = new ArrayList();\nrawList.add("Hello");\nrawList.add(123); // No error - but dangerous\n\n// With generics - type safe\nList<String> stringList = new ArrayList<>();\nstringList.add("Hello");\nstringList.add("World");\n// stringList.add(123); // Compile error\n\nString first = stringList.get(0); // No cast needed\n\n// Generic methods with collections\nclass CollectionUtils {\n    public static <T> void addAll(List<T> list, T... items) {\n        for(T item : items) {\n            list.add(item);\n        }\n    }\n    \n    public static <T> List<T> reverse(List<T> list) {\n        List<T> result = new ArrayList<>();\n        for(int i = list.size() - 1; i >= 0; i--) {\n            result.add(list.get(i));\n        }\n        return result;\n    }\n}\n\nList<Integer> numbers = new ArrayList<>();\nCollectionUtils.addAll(numbers, 1, 2, 3, 4, 5);\nSystem.out.println("Numbers: " + numbers);\n\nList<Integer> reversed = CollectionUtils.reverse(numbers);\nSystem.out.println("Reversed: " + reversed);\n\nList<String> colors = new ArrayList<>();\nCollectionUtils.addAll(colors, "Red", "Green", "Blue");\nSystem.out.println("Colors: " + colors);',
    hint: "Generics provide compile-time type safety for collections",
  },
  {
    id: "generics_14",
    topicId: "generics",
    question: "Generic Map with key-value pairs.",
    mathSolution: "HashMap with generic key and value types",
    codeSolution:
      'import java.util.*;\n\nclass MapUtils {\n    public static <K, V> void printMap(Map<K, V> map) {\n        for(Map.Entry<K, V> entry : map.entrySet()) {\n            System.out.println(entry.getKey() + " -> " + entry.getValue());\n        }\n    }\n    \n    public static <K, V> V getOrDefault(Map<K, V> map, K key, V defaultValue) {\n        V value = map.get(key);\n        return value != null ? value : defaultValue;\n    }\n}\n\nMap<String, Integer> ages = new HashMap<>();\nages.put("Alice", 25);\nages.put("Bob", 30);\nages.put("Charlie", 28);\n\nMapUtils.printMap(ages);\n\nMap<Integer, String> idToName = new HashMap<>();\nidToName.put(101, "John");\nidToName.put(102, "Jane");\n\nMapUtils.printMap(idToName);\n\nSystem.out.println("Age of David: " + MapUtils.getOrDefault(ages, "David", 0));\n\n// Nested generics\nMap<String, List<Integer>> studentGrades = new HashMap<>();\nstudentGrades.put("Alice", Arrays.asList(85, 90, 95));\nstudentGrades.put("Bob", Arrays.asList(75, 80, 85));\n\nfor(Map.Entry<String, List<Integer>> entry : studentGrades.entrySet()) {\n    System.out.println(entry.getKey() + " grades: " + entry.getValue());\n}',
    hint: "Maps can have generic key and value types",
  },
  {
    id: "generics_15",
    topicId: "generics",
    question: "Generic Comparator for sorting.",
    mathSolution: "Generic Comparator with type parameter",
    codeSolution:
      'import java.util.*;\n\nclass Person {\n    String name; int age;\n    Person(String n, int a) { name = n; age = a; }\n    public String toString() { return name + "(" + age + ")"; }\n}\n\n// Generic Comparator\nclass AgeComparator implements Comparator<Person> {\n    @Override\n    public int compare(Person p1, Person p2) {\n        return Integer.compare(p1.age, p2.age);\n    }\n}\n\nclass NameComparator implements Comparator<Person> {\n    @Override\n    public int compare(Person p1, Person p2) {\n        return p1.name.compareTo(p2.name);\n    }\n}\n\n// Generic sorting method\nclass SortUtils {\n    public static <T> void sort(List<T> list, Comparator<? super T> comparator) {\n        list.sort(comparator);\n    }\n    \n    public static <T extends Comparable<T>> void sortNatural(List<T> list) {\n        Collections.sort(list);\n    }\n}\n\nList<Person> people = Arrays.asList(\n    new Person("Charlie", 30),\n    new Person("Alice", 25),\n    new Person("Bob", 28)\n);\n\nSystem.out.println("Original: " + people);\n\nSortUtils.sort(people, new AgeComparator());\nSystem.out.println("By age: " + people);\n\nSortUtils.sort(people, new NameComparator());\nSystem.out.println("By name: " + people);\n\n// With lambda\npeople.sort((p1, p2) -> p2.age - p1.age); // descending age\nSystem.out.println("By age desc: " + people);\n\n// Natural sorting for String\nList<String> names = Arrays.asList("Charlie", "Alice", "Bob");\nSortUtils.sortNatural(names);\nSystem.out.println("Sorted names: " + names);',
    hint: "Comparators can be generic for type safety",
  },

  // GENERIC INHERITANCE (3)
  {
    id: "generics_16",
    topicId: "generics",
    question: "Generic class inheritance.",
    mathSolution: "Subclasses can specify or extend type parameters",
    codeSolution:
      'class GenericParent<T> {\n    private T data;\n    \n    public GenericParent(T data) { this.data = data; }\n    public T getData() { return data; }\n    public void setData(T data) { this.data = data; }\n}\n\n// Subclass with same type parameter\nclass GenericChild<T> extends GenericParent<T> {\n    public GenericChild(T data) { super(data); }\n    \n    public void print() {\n        System.out.println("Data: " + getData());\n    }\n}\n\n// Subclass with specific type\nclass StringChild extends GenericParent<String> {\n    public StringChild(String data) { super(data); }\n    \n    public void printUpper() {\n        System.out.println(getData().toUpperCase());\n    }\n}\n\n// Subclass with additional type parameter\nclass PairChild<K, V> extends GenericParent<K> {\n    private V value;\n    \n    public PairChild(K key, V value) {\n        super(key);\n        this.value = value;\n    }\n    \n    public V getValue() { return value; }\n}\n\nGenericChild<Integer> child = new GenericChild<>(100);\nchild.print();\n\nStringChild strChild = new StringChild("hello");\nstrChild.printUpper();\n\nPairChild<String, Integer> pair = new PairChild<>("Age", 25);\nSystem.out.println(pair.getData() + " -> " + pair.getValue());',
    hint: "Subclasses can inherit, specify, or extend generic parameters",
  },
  {
    id: "generics_17",
    topicId: "generics",
    question: "Generic interfaces and implementation.",
    mathSolution: "Interfaces can be generic and implemented in various ways",
    codeSolution:
      'interface Repository<T> {\n    void save(T item);\n    T findById(int id);\n    List<T> findAll();\n    void delete(int id);\n}\n\n// Implementation with same type parameter\nclass InMemoryRepository<T> implements Repository<T> {\n    private Map<Integer, T> data = new HashMap<>();\n    private int nextId = 1;\n    \n    @Override\n    public void save(T item) {\n        data.put(nextId++, item);\n    }\n    \n    @Override\n    public T findById(int id) {\n        return data.get(id);\n    }\n    \n    @Override\n    public List<T> findAll() {\n        return new ArrayList<>(data.values());\n    }\n    \n    @Override\n    public void delete(int id) {\n        data.remove(id);\n    }\n}\n\n// Implementation with specific type\nclass StringRepository implements Repository<String> {\n    private List<String> data = new ArrayList<>();\n    \n    @Override\n    public void save(String item) { data.add(item); }\n    \n    @Override\n    public String findById(int id) {\n        return id < data.size() ? data.get(id) : null;\n    }\n    \n    @Override\n    public List<String> findAll() { return new ArrayList<>(data); }\n    \n    @Override\n    public void delete(int id) {\n        if(id < data.size()) data.remove(id);\n    }\n}\n\nRepository<Integer> intRepo = new InMemoryRepository<>();\nintRepo.save(100);\nintRepo.save(200);\nSystem.out.println("Int repo: " + intRepo.findAll());\n\nRepository<String> strRepo = new StringRepository();\nstrRepo.save("Hello");\nstrRepo.save("World");\nSystem.out.println("String repo: " + strRepo.findAll());',
    hint: "Interfaces can be generic, implementations have options",
  },
  {
    id: "generics_18",
    topicId: "generics",
    question: "Raw types and type erasure.",
    mathSolution: "Type erasure removes generic type information at runtime",
    codeSolution:
      'import java.util.*;\n\nclass TypeErasureDemo {\n    public static void main(String[] args) {\n        List<String> strings = new ArrayList<>();\n        List<Integer> integers = new ArrayList<>();\n        \n        // At runtime, both are just ArrayList (type erasure)\n        System.out.println(strings.getClass() == integers.getClass()); // true\n        \n        // Raw type - avoid using\n        List rawList = new ArrayList();\n        rawList.add("Hello");\n        rawList.add(123); // No type safety\n        \n        // Raw type assignment - unchecked warning\n        List<String> strList = rawList; // Unchecked warning\n        // String s = strList.get(1); // ClassCastException at runtime!\n        \n        try {\n            String s = (String) rawList.get(1); // ClassCastException\n        } catch(ClassCastException e) {\n            System.out.println("ClassCastException: " + e);\n        }\n        \n        // Bridge methods - compiler adds them\n        class Parent<T> {\n            public T get(T t) { return t; }\n        }\n        \n        class Child extends Parent<String> {\n            @Override\n            public String get(String s) { return s.toUpperCase(); }\n        }\n        \n        // Compiler generates bridge method: Object get(Object)\n        Child c = new Child();\n        System.out.println(c.get("hello"));\n    }\n}\n\n// Demonstrate type erasure with reflection\nclass ReflectionDemo {\n    public static void printGenericInfo() {\n        List<String> list = new ArrayList<>();\n        System.out.println("List type: " + list.getClass().getName());\n        \n        // Generic type information is not available at runtime\n        // for (TypeParameter t : list.getClass().getTypeParameters()) {\n        //     System.out.println(t); // Prints E, not String\n        // }\n    }\n}',
    hint: "Type erasure removes generics at runtime for backward compatibility",
  },

  // ADVANCED GENERICS (4)
  {
    id: "generics_19",
    topicId: "generics",
    question: "Generic type inference with diamond operator.",
    mathSolution: "Diamond operator <> infers type from context",
    codeSolution:
      'import java.util.*;\n\nclass InferenceDemo {\n    // Before Java 7\n    List<String> list1 = new ArrayList<String>(); // explicit type\n    \n    // Java 7+ diamond operator\n    List<String> list2 = new ArrayList<>(); // type inferred\n    \n    // Method with generic return type\n    public static <T> List<T> emptyList() {\n        return new ArrayList<>();\n    }\n    \n    public static <T> T identity(T value) {\n        return value;\n    }\n    \n    public static <T> void addToList(List<T> list, T item) {\n        list.add(item);\n    }\n}\n\n// Type inference in method calls\nList<Integer> ints = InferenceDemo.emptyList(); // inferred\nints.add(10);\nints.add(20);\n\nString s = InferenceDemo.identity("Hello"); // inferred as String\nInteger i = InferenceDemo.identity(100); // inferred as Integer\n\n// Inference with multiple parameters\nList<Number> numbers = new ArrayList<>();\nInferenceDemo.addToList(numbers, 10); // int autoboxed to Integer, but Number works\nInferenceDemo.addToList(numbers, 3.14);\nSystem.out.println(numbers);\n\n// Target type inference\nCollections.sort(ints); // infers Comparator<Integer>\n\n// Java 8+ improved inference\nclass Utils {\n    public static <T> T max(T a, T b, Comparator<T> comp) {\n        return comp.compare(a, b) > 0 ? a : b;\n    }\n}\n\nString maxStr = Utils.max("apple", "banana", String::compareTo);\nSystem.out.println("Max string: " + maxStr);',
    hint: "Diamond operator and type inference reduce boilerplate",
  },
  {
    id: "generics_20",
    topicId: "generics",
    question: "Recursive type bound (self-referential generics).",
    mathSolution: "<T extends Comparable<T>> is recursive type bound",
    codeSolution:
      'import java.util.*;\n\n// Recursive type bound - T must be comparable to itself\nclass MaxFinder {\n    public static <T extends Comparable<T>> T max(Collection<T> collection) {\n        Iterator<T> it = collection.iterator();\n        if(!it.hasNext()) return null;\n        T max = it.next();\n        while(it.hasNext()) {\n            T current = it.next();\n            if(current.compareTo(max) > 0) {\n                max = current;\n            }\n        }\n        return max;\n    }\n}\n\n// Enum with recursive bound\nenum Color implements Comparable<Color> {\n    RED, GREEN, BLUE;\n}\n\n// Self-referential generic interface\ninterface Builder<T extends Builder<T>> {\n    T build();\n}\n\nclass PersonBuilder implements Builder<PersonBuilder> {\n    private String name;\n    private int age;\n    \n    public PersonBuilder setName(String name) { this.name = name; return this; }\n    public PersonBuilder setAge(int age) { this.age = age; return this; }\n    \n    @Override\n    public PersonBuilder build() {\n        System.out.println("Building person: " + name + ", " + age);\n        return this;\n    }\n}\n\n// Usage\nList<Integer> nums = Arrays.asList(10, 25, 5, 30, 15);\nSystem.out.println("Max int: " + MaxFinder.max(nums));\n\nList<String> strs = Arrays.asList("apple", "banana", "cherry");\nSystem.out.println("Max string: " + MaxFinder.max(strs));\n\nList<Color> colors = Arrays.asList(Color.RED, Color.GREEN, Color.BLUE);\nSystem.out.println("Max color: " + MaxFinder.max(colors));\n\n// Fluent builder with self-referential generic\nPersonBuilder builder = new PersonBuilder()\n    .setName("Alice")\n    .setAge(25)\n    .build();',
    hint: "Recursive bounds ensure type implements Comparable of itself",
  },
  {
    id: "generics_21",
    topicId: "generics",
    question: "Generic array creation workaround.",
    mathSolution: "Cannot create generic arrays directly, use workarounds",
    codeSolution:
      'import java.lang.reflect.Array;\nimport java.util.*;\n\nclass GenericArrayWorkaround {\n    // Problem: Cannot create generic array directly\n    // T[] array = new T[10]; // Compile error\n    \n    // Solution 1: Use ArrayList instead of array\n    public static <T> List<T> createList() {\n        return new ArrayList<>();\n    }\n    \n    // Solution 2: Create array of Object and cast\n    @SuppressWarnings("unchecked")\n    public static <T> T[] createArray(int size) {\n        return (T[]) new Object[size]; // Unchecked warning\n    }\n    \n    // Solution 3: Use Array.newInstance with Class parameter\n    @SuppressWarnings("unchecked")\n    public static <T> T[] createArray(Class<T> clazz, int size) {\n        return (T[]) Array.newInstance(clazz, size);\n    }\n    \n    // Solution 4: Generic method that accepts array creation\n    public static <T> T[] toArray(List<T> list, T[] array) {\n        return list.toArray(array);\n    }\n}\n\n// Using the solutions\nList<String> strList = GenericArrayWorkaround.createList();\nstrList.add("Hello");\n\nString[] strArray1 = GenericArrayWorkaround.createArray(5);\nstrArray1[0] = "World";\nSystem.out.println(strArray1[0]);\n\nString[] strArray2 = GenericArrayWorkaround.createArray(String.class, 5);\nstrArray2[0] = "Java";\nSystem.out.println(strArray2[0]);\n\nList<Integer> intList = Arrays.asList(1, 2, 3);\nInteger[] intArray = GenericArrayWorkaround.toArray(intList, new Integer[0]);\nSystem.out.println(Arrays.toString(intArray));\n\n// Generic class with array\nclass GenericContainer<T> {\n    private Object[] items; // Store as Object[] internally\n    private int size;\n    \n    public GenericContainer(int capacity) {\n        items = new Object[capacity];\n    }\n    \n    @SuppressWarnings("unchecked")\n    public T get(int index) {\n        return (T) items[index];\n    }\n    \n    public void set(int index, T item) {\n        items[index] = item;\n    }\n}\n\nGenericContainer<String> container = new GenericContainer<>(10);\ncontainer.set(0, "Hello");\nSystem.out.println(container.get(0));',
    hint: "Java doesn't support generic array creation due to type erasure",
  },
  {
    id: "generics_22",
    topicId: "generics",
    question: "Type tokens for runtime generic type information.",
    mathSolution: "Use Class<T> as runtime type token",
    codeSolution:
      'import java.lang.reflect.*;\nimport java.util.*;\n\nclass TypeTokenDemo {\n    // Using Class as runtime type token\n    public static <T> T createInstance(Class<T> clazz) throws Exception {\n        return clazz.getDeclaredConstructor().newInstance();\n    }\n    \n    public static <T> List<T> createList(Class<T> clazz, int size) {\n        return new ArrayList<>(); // Just for demo\n    }\n    \n    // Generic method that needs runtime type info\n    public static <T> T[] createArray(Class<T> clazz, int size) {\n        @SuppressWarnings("unchecked")\n        T[] array = (T[]) Array.newInstance(clazz, size);\n        return array;\n    }\n}\n\n// Super Type Tokens - for generic types\nabstract class TypeReference<T> {\n    private final Type type;\n    \n    protected TypeReference() {\n        Type superClass = getClass().getGenericSuperclass();\n        if(superClass instanceof ParameterizedType) {\n            type = ((ParameterizedType) superClass).getActualTypeArguments()[0];\n        } else {\n            throw new RuntimeException("Invalid type reference");\n        }\n    }\n    \n    public Type getType() { return type; }\n}\n\n// Usage\nString str = TypeTokenDemo.createInstance(String.class);\nInteger num = TypeTokenDemo.createInstance(Integer.class);\n\nString[] strArray = TypeTokenDemo.createArray(String.class, 5);\nInteger[] intArray = TypeTokenDemo.createArray(Integer.class, 5);\n\n// Super type token for List<String>\nTypeReference<List<String>> ref = new TypeReference<List<String>>() {};\nSystem.out.println("Type: " + ref.getType());\n\n// Practical example - JSON deserialization\nclass JsonMapper {\n    public static <T> T fromJson(String json, Class<T> clazz) {\n        // In real library, would parse JSON and create object\n        System.out.println("Deserializing to " + clazz.getSimpleName());\n        try {\n            return clazz.getDeclaredConstructor().newInstance();\n        } catch(Exception e) {\n            return null;\n        }\n    }\n    \n    // For generic types\n    public static <T> T fromJson(String json, TypeReference<T> ref) {\n        System.out.println("Deserializing to generic type: " + ref.getType());\n        return null;\n    }\n}\n\nclass User { String name; }\n\nUser user = JsonMapper.fromJson("{\\"name\\":\\"Alice\\"}", User.class);\n\n// For List<User> generic type\nList<User> userList = JsonMapper.fromJson("[...]", new TypeReference<List<User>>() {});',
    hint: "Class<T> and TypeReference preserve type info at runtime",
  },

  // GENERICS EXCEPTIONS AND LIMITATIONS (3)
  {
    id: "generics_23",
    topicId: "generics",
    question: "Cannot create instances of type parameters.",
    mathSolution: "Type parameters cannot be instantiated directly",
    codeSolution:
      'class GenericClass<T> {\n    // Cannot do this:\n    // private T item = new T(); // Compile error\n    \n    private T item;\n    private Class<T> type;\n    \n    // Workaround: Pass Class object\n    public GenericClass(Class<T> type) {\n        this.type = type;\n        try {\n            this.item = type.getDeclaredConstructor().newInstance();\n        } catch(Exception e) {\n            e.printStackTrace();\n        }\n    }\n    \n    public T getItem() { return item; }\n    \n    // Cannot use instanceof with type parameter\n    public boolean isInstance(Object obj) {\n        // return obj instanceof T; // Compile error\n        return type.isInstance(obj); // Use Class instead\n    }\n    \n    // Cannot create array of T directly\n    // private T[] array = new T[10]; // Compile error\n    \n    @SuppressWarnings("unchecked")\n    private T[] createArray(int size) {\n        return (T[]) Array.newInstance(type, size);\n    }\n}\n\n// Cannot have static field of type parameter\nclass StaticError<T> {\n    // static T item; // Compile error - type parameter not allowed in static context\n    \n    // Static method can be generic though\n    public static <U> void staticMethod(U item) {\n        System.out.println(item);\n    }\n}\n\n// Usage with workaround\nGenericClass<String> gc = new GenericClass<>(String.class);\nSystem.out.println("Created: " + gc.getItem());\n\n// instanceof workaround\nSystem.out.println(gc.isInstance("Hello"));\nSystem.out.println(gc.isInstance(123));',
    hint: "Type erasure prevents instantiation of type parameters",
  },
  {
    id: "generics_24",
    topicId: "generics",
    question: "Cannot overload methods with same erasure.",
    mathSolution: "Method overloading conflicts after type erasure",
    codeSolution:
      'class ErasureConflict {\n    // These two methods have same erasure after type erasure\n    \n    // public void process(List<String> list) { } // OK alone\n    // public void process(List<Integer> list) { } // Compile error - same erasure\n    \n    // Solution 1: Different method names\n    public void processStrings(List<String> list) {\n        System.out.println("Processing strings");\n    }\n    \n    public void processIntegers(List<Integer> list) {\n        System.out.println("Processing integers");\n    }\n    \n    // Solution 2: Different parameters (not just type arguments)\n    public void process(List<String> list, String flag) {\n        System.out.println("Strings with flag");\n    }\n    \n    public void process(List<Integer> list, int count) {\n        System.out.println("Integers with count");\n    }\n    \n    // Solution 3: Use wildcards\n    public void processList(List<?> list) {\n        System.out.println("Processing any list");\n    }\n}\n\n// Another example - can\'t overload with different type parameters\nclass Processor {\n    // public <T> void handle(T item) { }\n    // public <U> void handle(U item) { } // Same erasure - error\n    \n    // But can have different number of type parameters\n    public <T> void handle(T item) {\n        System.out.println("Single: " + item);\n    }\n    \n    public <T, U> void handle(T item1, U item2) {\n        System.out.println("Pair: " + item1 + ", " + item2);\n    }\n}\n\nErasureConflict ec = new ErasureConflict();\nec.processStrings(Arrays.asList("A", "B"));\nec.processIntegers(Arrays.asList(1, 2));\nec.processList(Arrays.asList(1, 2, 3));\n\nProcessor p = new Processor();\np.handle("Hello");\np.handle(10, 20);',
    hint: "After type erasure, List<String> and List<Integer> both become List",
  },
  {
    id: "generics_25",
    topicId: "generics",
    question: "Cannot catch or throw generic exceptions.",
    mathSolution: "Exception classes cannot be generic",
    codeSolution:
      '// Cannot have generic exception class\n// class GenericException<T> extends Exception { } // Compile error\n\n// Cannot catch generic exception\nclass ExceptionDemo {\n    // This won\'t work:\n    // public <T extends Exception> void method() {\n    //     try {\n    //         // something\n    //     } catch(T e) { } // Compile error\n    // }\n    \n    // Can throw generic type that extends Throwable\n    public <T extends Throwable> void throwAsUnchecked(Throwable t) throws T {\n        @SuppressWarnings("unchecked")\n        T exception = (T) t;\n        throw exception;\n    }\n    \n    // Can have generic method that declares exception type\n    public <T extends Exception> void methodThatThrows(T exception) throws T {\n        throw exception;\n    }\n    \n    // Can have type parameter in throws clause\n    public <T extends Exception> void riskyMethod(Class<T> exceptionClass) throws T {\n        try {\n            // risky operation\n        } catch(Exception e) {\n            throw exceptionClass.cast(e);\n        }\n    }\n}\n\n// Workaround: Use wildcard in catch? No, catch requires specific type\ntry {\n    // some code\n} catch(RuntimeException e) { // Must be specific, not generic\n    System.out.println("Caught: " + e);\n}\n\n// Demonstrate throwing generic exception type\nExceptionDemo demo = new ExceptionDemo();\ntry {\n    demo.methodThatThrows(new IllegalArgumentException("Error"));\n} catch(IllegalArgumentException e) {\n    System.out.println("Caught: " + e.getMessage());\n}\n\n// Throw as unchecked\ntry {\n    demo.throwAsUnchecked(new Exception("Checked exception becomes unchecked"));\n} catch(Exception e) { // Won\'t catch - it\'s not declared\n    // This won\'t execute because method doesn\'t declare Exception\n} catch(Throwable t) {\n    System.out.println("Caught: " + t);\n}',
    hint: "Java doesn't support generic exception classes or catching",
  },
);
