QuizData.questions.push(
  // CONSOLE INPUT USING SCANNER (5)
  {
    id: "io_1",
    topicId: "inputoutput",
    question: "Read integer input from user using Scanner.",
    mathSolution: "Use Scanner's nextInt() method",
    codeSolution:
      'import java.util.Scanner;\nScanner sc = new Scanner(System.in);\nSystem.out.print("Enter age: ");\nint age = sc.nextInt();\nSystem.out.println("You entered: " + age);\nsc.close();',
    hint: "nextInt() reads integer",
  },
  {
    id: "io_2",
    topicId: "inputoutput",
    question: "Read string input from user using Scanner.",
    mathSolution: "next() reads single word, nextLine() reads full line",
    codeSolution:
      'Scanner sc = new Scanner(System.in);\nSystem.out.print("Enter name: ");\nString name = sc.nextLine();\nSystem.out.println("Hello, " + name);\nsc.close();',
    hint: "nextLine() reads entire line",
  },
  {
    id: "io_3",
    topicId: "inputoutput",
    question: "Read multiple inputs of different types.",
    mathSolution: "Chain next methods for different types",
    codeSolution:
      'Scanner sc = new Scanner(System.in);\nSystem.out.print("Enter name, age, salary: ");\nString name = sc.next();\nint age = sc.nextInt();\ndouble salary = sc.nextDouble();\nSystem.out.println(name + ", " + age + ", $" + salary);\nsc.close();',
    hint: "Use appropriate next methods",
  },
  {
    id: "io_4",
    topicId: "inputoutput",
    question: "Read until user enters 'quit'.",
    mathSolution: "Loop until sentinel value",
    codeSolution:
      'Scanner sc = new Scanner(System.in);\nString input;\nwhile(true) {\n    System.out.print("Enter text (or \'quit\' to exit): ");\n    input = sc.nextLine();\n    if(input.equals("quit")) break;\n    System.out.println("You said: " + input);\n}\nsc.close();',
    hint: "Use break to exit loop",
  },
  {
    id: "io_5",
    topicId: "inputoutput",
    question: "Handle input mismatch exception.",
    mathSolution: "Use try-catch for invalid input",
    codeSolution:
      'Scanner sc = new Scanner(System.in);\ntry {\n    System.out.print("Enter a number: ");\n    int num = sc.nextInt();\n    System.out.println("Number: " + num);\n} catch(java.util.InputMismatchException e) {\n    System.out.println("Invalid input! Please enter a number");\n} finally {\n    sc.close();\n}',
    hint: "InputMismatchException for wrong type",
  },

  // CONSOLE INPUT USING BUFFEREDREADER (4)
  {
    id: "io_6",
    topicId: "inputoutput",
    question: "Read input using BufferedReader.",
    mathSolution: "BufferedReader reads from InputStreamReader",
    codeSolution:
      'import java.io.*;\nBufferedReader br = new BufferedReader(new InputStreamReader(System.in));\ntry {\n    System.out.print("Enter your name: ");\n    String name = br.readLine();\n    System.out.println("Hello, " + name);\n} catch(IOException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "readLine() returns String",
  },
  {
    id: "io_7",
    topicId: "inputoutput",
    question: "Read integer using BufferedReader (with parsing).",
    mathSolution: "Read as String then parse to int",
    codeSolution:
      'BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\ntry {\n    System.out.print("Enter age: ");\n    String input = br.readLine();\n    int age = Integer.parseInt(input);\n    System.out.println("Age: " + age);\n} catch(IOException e) {\n    System.out.println("IO Error");\n} catch(NumberFormatException e) {\n    System.out.println("Invalid number");\n}',
    hint: "Parse string to int",
  },
  {
    id: "io_8",
    topicId: "inputoutput",
    question: "Read multiple lines until empty line.",
    mathSolution: "Read until blank line",
    codeSolution:
      'BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\nSystem.out.println("Enter lines (empty line to stop):");\nString line;\ntry {\n    while(!(line = br.readLine()).isEmpty()) {\n        System.out.println("You wrote: " + line);\n    }\n} catch(IOException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "Check for empty string",
  },
  {
    id: "io_9",
    topicId: "inputoutput",
    question: "Read password without echoing (Console class).",
    mathSolution: "Console.readPassword() hides input",
    codeSolution:
      'import java.io.Console;\nConsole console = System.console();\nif(console != null) {\n    char[] password = console.readPassword("Enter password: ");\n    System.out.println("Password length: " + password.length);\n} else {\n    System.out.println("Console not available");\n}',
    hint: "Console class for secure input",
  },

  // FORMATTED OUTPUT (5)
  {
    id: "io_10",
    topicId: "inputoutput",
    question: "Print formatted output using printf.",
    mathSolution: "printf with format specifiers",
    codeSolution:
      'String name = "Alice";\nint age = 25;\ndouble salary = 52500.50;\nSystem.out.printf("Name: %s, Age: %d, Salary: $%.2f%n", name, age, salary);',
    hint: "%s for string, %d for int, %f for double",
  },
  {
    id: "io_11",
    topicId: "inputoutput",
    question: "Format numbers with leading zeros.",
    mathSolution: "Use width specifier with zero flag",
    codeSolution:
      'int number = 42;\nSystem.out.printf("Decimal: %d%n", number);\nSystem.out.printf("With leading zeros: %05d%n", number);\nSystem.out.printf("Hex: %X%n", number);',
    hint: "%05d pads with zeros to width 5",
  },
  {
    id: "io_12",
    topicId: "inputoutput",
    question: "Format decimal numbers with precision.",
    mathSolution: "Specify decimal places",
    codeSolution:
      'double pi = 3.14159265359;\nSystem.out.printf("Pi: %.2f%n", pi);\nSystem.out.printf("Pi: %.4f%n", pi);\nSystem.out.printf("Scientific: %e%n", pi);',
    hint: "%.2f shows 2 decimal places",
  },
  {
    id: "io_13",
    topicId: "inputoutput",
    question: "Print table with column formatting.",
    mathSolution: "Use width specifiers for alignment",
    codeSolution:
      'System.out.printf("%-10s %-10s %-10s%n", "Name", "Age", "City");\nSystem.out.printf("%-10s %-10d %-10s%n", "Alice", 25, "NYC");\nSystem.out.printf("%-10s %-10d %-10s%n", "Bob", 30, "LA");\nSystem.out.printf("%-10s %-10d %-10s%n", "Charlie", 28, "Chicago");',
    hint: "%-10s left-aligns in 10-width column",
  },
  {
    id: "io_14",
    topicId: "inputoutput",
    question: "Print date and time formatted.",
    mathSolution: "Use Date with printf",
    codeSolution:
      'import java.util.Date;\nDate now = new Date();\nSystem.out.printf("Current time: %tT%n", now);\nSystem.out.printf("Date: %tD%n", now);\nSystem.out.printf("Formatted: %tc%n", now);',
    hint: "%tT for time, %tD for date",
  },

  // SYSTEM.IN AND SYSTEM.OUT (3)
  {
    id: "io_15",
    topicId: "inputoutput",
    question: "Read single character from System.in.",
    mathSolution: "System.in.read() reads one byte",
    codeSolution:
      'try {\n    System.out.print("Press a key: ");\n    int charCode = System.in.read();\n    char ch = (char) charCode;\n    System.out.println("You pressed: " + ch);\n    System.out.println("ASCII: " + charCode);\n} catch(IOException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "read() returns ASCII code",
  },
  {
    id: "io_16",
    topicId: "inputoutput",
    question: "Redirect System.out to file.",
    mathSolution: "Set System.out to PrintStream to file",
    codeSolution:
      'try {\n    PrintStream fileOut = new PrintStream(new File("output.txt"));\n    PrintStream originalOut = System.out;\n    \n    System.setOut(fileOut);\n    System.out.println("This goes to file");\n    System.out.println("Not to console");\n    \n    System.setOut(originalOut);\n    System.out.println("This goes back to console");\n} catch(FileNotFoundException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "System.setOut() changes output destination",
  },
  {
    id: "io_17",
    topicId: "inputoutput",
    question: "Read from System.in with timeout.",
    mathSolution: "Use available() to check data",
    codeSolution:
      'try {\n    System.out.print("Enter something (5 sec timeout): ");\n    long start = System.currentTimeMillis();\n    while(System.in.available() == 0) {\n        if(System.currentTimeMillis() - start > 5000) {\n            System.out.println("\\nTimeout!");\n            return;\n        }\n        Thread.sleep(100);\n    }\n    byte[] buffer = new byte[System.in.available()];\n    System.in.read(buffer);\n    System.out.println("You entered: " + new String(buffer).trim());\n} catch(Exception e) {\n    System.out.println("Error: " + e);\n}',
    hint: "available() checks bytes ready",
  },

  // DATA STREAMS (3)
  {
    id: "io_18",
    topicId: "inputoutput",
    question:
      "Write and read primitive data using DataOutputStream/DataInputStream.",
    mathSolution: "Data streams handle primitive types",
    codeSolution:
      'try {\n    // Writing\n    DataOutputStream dos = new DataOutputStream(new FileOutputStream("data.dat"));\n    dos.writeInt(42);\n    dos.writeDouble(3.14);\n    dos.writeBoolean(true);\n    dos.writeUTF("Hello");\n    dos.close();\n    \n    // Reading\n    DataInputStream dis = new DataInputStream(new FileInputStream("data.dat"));\n    System.out.println("Int: " + dis.readInt());\n    System.out.println("Double: " + dis.readDouble());\n    System.out.println("Boolean: " + dis.readBoolean());\n    System.out.println("String: " + dis.readUTF());\n    dis.close();\n} catch(IOException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "Read in same order as written",
  },
  {
    id: "io_19",
    topicId: "inputoutput",
    question: "Use PushbackInputStream to unread data.",
    mathSolution: "Push back last read byte",
    codeSolution:
      'try {\n    String input = "Hello World";\n    byte[] data = input.getBytes();\n    PushbackInputStream pbis = new PushbackInputStream(new ByteArrayInputStream(data));\n    \n    int b = pbis.read();\n    System.out.println("Read: " + (char)b);\n    \n    pbis.unread(b); // push back\n    System.out.println("After unread, reading again: " + (char)pbis.read());\n    pbis.close();\n} catch(IOException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "unread() puts byte back to stream",
  },
  {
    id: "io_20",
    topicId: "inputoutput",
    question: "Use SequenceInputStream to concatenate streams.",
    mathSolution: "Combine multiple input streams",
    codeSolution:
      'try {\n    FileInputStream fis1 = new FileInputStream("file1.txt");\n    FileInputStream fis2 = new FileInputStream("file2.txt");\n    SequenceInputStream sis = new SequenceInputStream(fis1, fis2);\n    \n    int b;\n    while((b = sis.read()) != -1) {\n        System.out.print((char)b);\n    }\n    sis.close();\n} catch(IOException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "Reads from first then second stream",
  },

  // OBJECT STREAMS (3)
  {
    id: "io_21",
    topicId: "inputoutput",
    question: "Serialize and deserialize object.",
    mathSolution: "ObjectOutputStream and ObjectInputStream",
    codeSolution:
      'import java.io.*;\n\nclass Person implements Serializable {\n    String name;\n    int age;\n    Person(String n, int a) { name = n; age = a; }\n}\n\ntry {\n    // Serialize\n    Person p = new Person("Alice", 25);\n    ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("person.ser"));\n    oos.writeObject(p);\n    oos.close();\n    \n    // Deserialize\n    ObjectInputStream ois = new ObjectInputStream(new FileInputStream("person.ser"));\n    Person p2 = (Person) ois.readObject();\n    ois.close();\n    \n    System.out.println("Name: " + p2.name + ", Age: " + p2.age);\n} catch(Exception e) {\n    System.out.println("Error: " + e);\n}',
    hint: "Class must implement Serializable",
  },
  {
    id: "io_22",
    topicId: "inputoutput",
    question: "Use transient keyword to skip serialization.",
    mathSolution: "transient fields not serialized",
    codeSolution:
      'class User implements Serializable {\n    String username;\n    transient String password; // won\'t be serialized\n    User(String u, String p) { username = u; password = p; }\n}\n\ntry {\n    User user = new User("john123", "secret");\n    ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("user.ser"));\n    oos.writeObject(user);\n    oos.close();\n    \n    ObjectInputStream ois = new ObjectInputStream(new FileInputStream("user.ser"));\n    User user2 = (User) ois.readObject();\n    ois.close();\n    \n    System.out.println("Username: " + user2.username);\n    System.out.println("Password (should be null): " + user2.password);\n} catch(Exception e) {\n    System.out.println("Error: " + e);\n}',
    hint: "transient fields get default values",
  },
  {
    id: "io_23",
    topicId: "inputoutput",
    question: "Custom serialization with writeObject/readObject.",
    mathSolution: "Override default serialization",
    codeSolution:
      "class Account implements Serializable {\n    String accNo;\n    transient int pin;\n    \n    Account(String a, int p) { accNo = a; pin = p; }\n    \n    private void writeObject(ObjectOutputStream oos) throws IOException {\n        oos.defaultWriteObject();\n        oos.writeInt(pin ^ 0xABCD); // encrypt\n    }\n    \n    private void readObject(ObjectInputStream ois) throws IOException, ClassNotFoundException {\n        ois.defaultReadObject();\n        pin = ois.readInt() ^ 0xABCD; // decrypt\n    }\n}\n\n// Usage similar to normal serialization",
    hint: "Custom methods for special handling",
  },

  // PIPE STREAMS (2)
  {
    id: "io_24",
    topicId: "inputoutput",
    question: "Communicate between threads using PipedStreams.",
    mathSolution: "PipedInputStream and PipedOutputStream",
    codeSolution:
      'try {\n    PipedOutputStream pos = new PipedOutputStream();\n    PipedInputStream pis = new PipedInputStream(pos);\n    \n    // Writer thread\n    Thread writer = new Thread(() -> {\n        try {\n            pos.write("Hello from writer".getBytes());\n            pos.close();\n        } catch(IOException e) {}\n    });\n    \n    // Reader thread\n    Thread reader = new Thread(() -> {\n        try {\n            int b;\n            while((b = pis.read()) != -1) {\n                System.out.print((char)b);\n            }\n            pis.close();\n        } catch(IOException e) {}\n    });\n    \n    writer.start();\n    reader.start();\n} catch(IOException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "Pipes connect threads",
  },
  {
    id: "io_25",
    topicId: "inputoutput",
    question: "Use PrintStream for formatted output.",
    mathSolution: "PrintStream has convenient print methods",
    codeSolution:
      'try {\n    PrintStream ps = new PrintStream(new FileOutputStream("log.txt"));\n    ps.println("Application started");\n    ps.printf("Error code: %d at %s%n", 404, new java.util.Date());\n    ps.close();\n    \n    // Also works with System.out\n    System.out.println("To console");\n    System.out.printf("Formatted: %d + %d = %d%n", 5, 3, 8);\n} catch(IOException e) {\n    System.out.println("Error: " + e);\n}',
    hint: "PrintStream doesn't throw IOException",
  },
);
