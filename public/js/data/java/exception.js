QuizData.questions.push(
  // BASIC EXCEPTION CONCEPTS (5)
  {
    id: "exception_1",
    topicId: "exception",
    question: "Handle ArithmeticException when dividing by zero.",
    mathSolution: "Division by zero throws ArithmeticException",
    codeSolution:
      'try {\n    int result = 10 / 0;\n    System.out.println("Result: " + result);\n} catch(ArithmeticException e) {\n    System.out.println("Cannot divide by zero: " + e.getMessage());\n}',
    hint: "Use try-catch for division by zero",
  },
  {
    id: "exception_2",
    topicId: "exception",
    question: "Handle ArrayIndexOutOfBoundsException.",
    mathSolution: "Accessing invalid array index",
    codeSolution:
      'int[] arr = {1,2,3};\ntry {\n    System.out.println(arr[5]);\n} catch(ArrayIndexOutOfBoundsException e) {\n    System.out.println("Array index out of bounds: " + e);\n}',
    hint: "Catch when index exceeds array length",
  },
  {
    id: "exception_3",
    topicId: "exception",
    question: "Handle NullPointerException.",
    mathSolution: "Calling method on null object",
    codeSolution:
      'String str = null;\ntry {\n    System.out.println(str.length());\n} catch(NullPointerException e) {\n    System.out.println("Object is null: " + e);\n}',
    hint: "Check for null before method calls",
  },
  {
    id: "exception_4",
    topicId: "exception",
    question: "Handle NumberFormatException.",
    mathSolution: "Parsing invalid number string",
    codeSolution:
      'String invalid = "abc";\ntry {\n    int num = Integer.parseInt(invalid);\n} catch(NumberFormatException e) {\n    System.out.println("Invalid number format: " + invalid);\n}',
    hint: "ParseInt expects numeric string",
  },
  {
    id: "exception_5",
    topicId: "exception",
    question: "Use multiple catch blocks.",
    mathSolution: "Different exceptions handled separately",
    codeSolution:
      'try {\n    int[] arr = new int[5];\n    arr[10] = 30/0;\n} catch(ArithmeticException e) {\n    System.out.println("Arithmetic error");\n} catch(ArrayIndexOutOfBoundsException e) {\n    System.out.println("Array index error");\n}',
    hint: "Multiple catch for different exceptions",
  },

  // TRY-CATCH-FINALLY (5)
  {
    id: "exception_6",
    topicId: "exception",
    question: "Use finally block that always executes.",
    mathSolution: "Finally executes regardless of exception",
    codeSolution:
      'try {\n    System.out.println("In try");\n    int result = 10/0;\n} catch(ArithmeticException e) {\n    System.out.println("In catch");\n} finally {\n    System.out.println("Finally always executes");\n}',
    hint: "Finally runs after try/catch",
  },
  {
    id: "exception_7",
    topicId: "exception",
    question: "Finally executes even without exception.",
    mathSolution: "Finally runs even in normal flow",
    codeSolution:
      'try {\n    System.out.println("No exception here");\n} finally {\n    System.out.println("Finally block executed");\n}\nSystem.out.println("After try-finally");',
    hint: "Finally always runs",
  },
  {
    id: "exception_8",
    topicId: "exception",
    question: "Return from try with finally block.",
    mathSolution: "Finally runs even before return",
    codeSolution:
      'try {\n    System.out.println("In try");\n    return;\n} finally {\n    System.out.println("Finally before return");\n}',
    hint: "Finally executes before return",
  },
  {
    id: "exception_9",
    topicId: "exception",
    question: "Close resource in finally block.",
    mathSolution: "Finally ensures resource cleanup",
    codeSolution:
      'java.io.FileReader reader = null;\ntry {\n    reader = new java.io.FileReader("test.txt");\n    // read file\n} catch(java.io.IOException e) {\n    System.out.println("File error");\n} finally {\n    try { if(reader != null) reader.close(); }\n    catch(java.io.IOException e) {}\n}',
    hint: "Close resources in finally",
  },
  {
    id: "exception_10",
    topicId: "exception",
    question: "Try-with-resources for automatic cleanup.",
    mathSolution: "AutoCloseable resources close automatically",
    codeSolution:
      'try(java.io.FileReader fr = new java.io.FileReader("test.txt")) {\n    // use fr\n    System.out.println("File opened and will close automatically");\n} catch(java.io.IOException e) {\n    System.out.println("IO Exception: " + e);\n}',
    hint: "Resources declared in try() close automatically",
  },

  // THROW AND THROWS (5)
  {
    id: "exception_11",
    topicId: "exception",
    question: "Throw ArithmeticException manually.",
    mathSolution: "Explicitly throw exception",
    codeSolution:
      'int age = 15;\nif(age < 18) {\n    throw new ArithmeticException("Not eligible to vote");\n}\nSystem.out.println("Eligible");',
    hint: "Use throw keyword",
  },
  {
    id: "exception_12",
    topicId: "exception",
    question: "Use throws keyword in method declaration.",
    mathSolution: "Declare exceptions method can throw",
    codeSolution:
      'void validateAge(int age) throws ArithmeticException {\n    if(age < 18) throw new ArithmeticException("Underage");\n}\n// In main\ntry {\n    validateAge(16);\n} catch(ArithmeticException e) {\n    System.out.println("Caught: " + e);\n}',
    hint: "throws in method signature",
  },
  {
    id: "exception_13",
    topicId: "exception",
    question: "Throw custom checked exception.",
    mathSolution: "Create and throw custom exception",
    codeSolution:
      'class InsufficientFundsException extends Exception {\n    InsufficientFundsException(String msg) { super(msg); }\n}\n\ndouble balance = 500;\ndouble withdraw = 600;\nif(withdraw > balance) {\n    throw new InsufficientFundsException("Low balance");\n}',
    hint: "Extend Exception for checked exception",
  },
  {
    id: "exception_14",
    topicId: "exception",
    question: "Throw custom unchecked exception.",
    mathSolution: "Extend RuntimeException for unchecked",
    codeSolution:
      'class InvalidInputException extends RuntimeException {\n    InvalidInputException(String msg) { super(msg); }\n}\n\nString input = "";\nif(input.isEmpty()) {\n    throw new InvalidInputException("Input cannot be empty");\n}',
    hint: "Extend RuntimeException for unchecked",
  },
  {
    id: "exception_15",
    topicId: "exception",
    question: "Rethrow exception after logging.",
    mathSolution: "Catch, log, then rethrow",
    codeSolution:
      'try {\n    int result = 10/0;\n} catch(ArithmeticException e) {\n    System.out.println("Logging error: " + e);\n    throw e; // rethrowing\n}',
    hint: "Use throw in catch to rethrow",
  },

  // EXCEPTION HIERARCHY (5)
  {
    id: "exception_16",
    topicId: "exception",
    question: "Catch multiple exceptions with single catch (Java 7+).",
    mathSolution: "Multi-catch using pipe operator",
    codeSolution:
      'try {\n    int[] arr = new int[5];\n    arr[10] = 10/0;\n} catch(ArithmeticException | ArrayIndexOutOfBoundsException e) {\n    System.out.println("Exception: " + e.getClass().getSimpleName());\n}',
    hint: "Use | between exception types",
  },
  {
    id: "exception_17",
    topicId: "exception",
    question: "Catch Exception (parent) for any exception.",
    mathSolution: "Parent catch handles all child exceptions",
    codeSolution:
      'try {\n    String str = null;\n    System.out.println(str.length());\n} catch(Exception e) {\n    System.out.println("Caught exception: " + e);\n}',
    hint: "Exception is parent of all checked exceptions",
  },
  {
    id: "exception_18",
    topicId: "exception",
    question: "Order of catch blocks (specific first).",
    mathSolution: "Specific before general",
    codeSolution:
      'try {\n    int[] arr = new int[5];\n    arr[10] = 10/0;\n} catch(ArithmeticException e) {\n    System.out.println("Arithmetic first");\n} catch(ArrayIndexOutOfBoundsException e) {\n    System.out.println("Array index");\n} catch(Exception e) {\n    System.out.println("General exception");\n}',
    hint: "Put specific exceptions before general",
  },
  {
    id: "exception_19",
    topicId: "exception",
    question: "Get exception details using methods.",
    mathSolution: "Use exception methods for info",
    codeSolution:
      'try {\n    int result = 10/0;\n} catch(ArithmeticException e) {\n    System.out.println("Message: " + e.getMessage());\n    System.out.println("Class: " + e.getClass());\n    e.printStackTrace();\n}',
    hint: "getMessage(), printStackTrace()",
  },
  {
    id: "exception_20",
    topicId: "exception",
    question: "Chained exceptions using initCause.",
    mathSolution: "Link exceptions together",
    codeSolution:
      'try {\n    try {\n        int result = 10/0;\n    } catch(ArithmeticException e) {\n        RuntimeException re = new RuntimeException("Wrapped");\n        re.initCause(e);\n        throw re;\n    }\n} catch(RuntimeException re) {\n    System.out.println("Cause: " + re.getCause());\n}',
    hint: "initCause() links exceptions",
  },

  // PRACTICAL SCENARIOS (5)
  {
    id: "exception_21",
    topicId: "exception",
    question: "Handle FileNotFoundException.",
    mathSolution: "File not found when reading",
    codeSolution:
      'import java.io.*;\ntry {\n    FileReader fr = new FileReader("nonexistent.txt");\n} catch(FileNotFoundException e) {\n    System.out.println("File not found: " + e);\n}',
    hint: "Checked exception must be handled",
  },
  {
    id: "exception_22",
    topicId: "exception",
    question: "Handle IOException during file read.",
    mathSolution: "IO operations can throw IOException",
    codeSolution:
      'try {\n    FileWriter fw = new FileWriter("output.txt");\n    fw.write("Hello");\n    fw.close();\n} catch(IOException e) {\n    System.out.println("IO Error: " + e);\n}',
    hint: "IOException covers many file errors",
  },
  {
    id: "exception_23",
    topicId: "exception",
    question: "Handle ClassNotFoundException.",
    mathSolution: "Class not found at runtime",
    codeSolution:
      'try {\n    Class.forName("com.example.NonexistentClass");\n} catch(ClassNotFoundException e) {\n    System.out.println("Class not found: " + e);\n}',
    hint: "Class.forName() throws this",
  },
  {
    id: "exception_24",
    topicId: "exception",
    question: "Handle InterruptedException in thread sleep.",
    mathSolution: "Thread.sleep throws InterruptedException",
    codeSolution:
      'try {\n    System.out.println("Sleeping...");\n    Thread.sleep(1000);\n    System.out.println("Awake");\n} catch(InterruptedException e) {\n    System.out.println("Sleep interrupted: " + e);\n}',
    hint: "InterruptedException is checked",
  },
  {
    id: "exception_25",
    topicId: "exception",
    question: "Try-catch in loop to continue despite errors.",
    mathSolution: "Continue processing even if one iteration fails",
    codeSolution:
      'String[] numbers = {"10", "20", "abc", "30"};\nint sum = 0;\nfor(String num : numbers) {\n    try {\n        sum += Integer.parseInt(num);\n    } catch(NumberFormatException e) {\n        System.out.println("Skipping invalid: " + num);\n    }\n}\nSystem.out.println("Sum: " + sum);',
    hint: "Catch inside loop to continue processing",
  },
);
