QuizData.questions.push(
  // VARIABLE DECLARATION (6)
  {
    id: "variable_1",
    topicId: "variable",
    question: "Declare an integer variable and assign value 25.",
    mathSolution: "Variable declaration with initialization",
    codeSolution: 'int age = 25;\nSystem.out.println("Age: " + age);',
    hint: "Use int data type",
  },
  {
    id: "variable_2",
    topicId: "variable",
    question: "Declare a double variable with value 99.99.",
    mathSolution: "Floating point variable declaration",
    codeSolution:
      'double price = 99.99;\nSystem.out.println("Price: $" + price);',
    hint: "Use double for decimal values",
  },
  {
    id: "variable_3",
    topicId: "variable",
    question: "Declare a character variable storing 'A'.",
    mathSolution: "Character variable in single quotes",
    codeSolution: "char grade = 'A';\nSystem.out.println(\"Grade: \" + grade);",
    hint: "Use single quotes for char",
  },
  {
    id: "variable_4",
    topicId: "variable",
    question: "Declare a boolean variable with value true.",
    mathSolution: "Boolean can be true or false",
    codeSolution:
      'boolean isPassed = true;\nSystem.out.println("Passed: " + isPassed);',
    hint: "true/false values only",
  },
  {
    id: "variable_5",
    topicId: "variable",
    question: "Declare a String variable with name 'John'.",
    mathSolution: "String variable in double quotes",
    codeSolution: 'String name = "John";\nSystem.out.println("Name: " + name);',
    hint: "Use double quotes for String",
  },
  {
    id: "variable_6",
    topicId: "variable",
    question: "Declare multiple variables of same type in one line.",
    mathSolution: "Comma separated declaration",
    codeSolution:
      'int x = 5, y = 10, z = 15;\nSystem.out.println("x=" + x + ", y=" + y + ", z=" + z);',
    hint: "Separate with commas",
  },

  // VARIABLE NAMING RULES (5)
  {
    id: "variable_7",
    topicId: "variable",
    question: "Declare variable starting with underscore.",
    mathSolution: "Underscore allowed at start",
    codeSolution: 'int _count = 100;\nSystem.out.println("Count: " + _count);',
    hint: "Variable can start with _",
  },
  {
    id: "variable_8",
    topicId: "variable",
    question: "Declare variable with dollar sign.",
    mathSolution: "$ allowed in variable names",
    codeSolution:
      'int $amount = 5000;\nSystem.out.println("Amount: $" + $amount);',
    hint: "$ is allowed in names",
  },
  {
    id: "variable_9",
    topicId: "variable",
    question: "Declare variable in camelCase style.",
    mathSolution: "CamelCase convention for readability",
    codeSolution:
      'int studentAge = 20;\nString firstName = "Alice";\nSystem.out.println(firstName + " is " + studentAge);',
    hint: "First word lowercase, next words capitalized",
  },
  {
    id: "variable_10",
    topicId: "variable",
    question: "Use meaningful variable name for salary.",
    mathSolution: "Descriptive names improve code clarity",
    codeSolution:
      'double monthlySalary = 50000.50;\nSystem.out.println("Monthly salary: ₹" + monthlySalary);',
    hint: "Name should describe purpose",
  },
  {
    id: "variable_11",
    topicId: "variable",
    question: "Declare constant variable using final.",
    mathSolution: "final variables cannot be changed",
    codeSolution:
      'final double PI = 3.14159;\nSystem.out.println("Value of PI: " + PI);',
    hint: "Use final keyword for constants",
  },

  // VARIABLE ASSIGNMENT (7)
  {
    id: "variable_12",
    topicId: "variable",
    question: "Assign new value to existing variable.",
    mathSolution: "Reassign variable with new value",
    codeSolution:
      'int score = 50;\nSystem.out.println("Initial score: " + score);\nscore = 75;\nSystem.out.println("Updated score: " + score);',
    hint: "Variable can be reassigned",
  },
  {
    id: "variable_13",
    topicId: "variable",
    question: "Copy value from one variable to another.",
    mathSolution: "Assignment copies value",
    codeSolution:
      'int original = 42;\nint copy = original;\nSystem.out.println("Original: " + original + ", Copy: " + copy);',
    hint: "Use = to copy values",
  },
  {
    id: "variable_14",
    topicId: "variable",
    question: "Swap values of two variables using third variable.",
    mathSolution: "Use temporary variable for swapping",
    codeSolution:
      'int a = 5, b = 10, temp;\ntemp = a;\na = b;\nb = temp;\nSystem.out.println("a=" + a + ", b=" + b);',
    hint: "Store one value temporarily",
  },
  {
    id: "variable_15",
    topicId: "variable",
    question: "Add 5 to existing variable value.",
    mathSolution: "Update variable by adding",
    codeSolution:
      'int counter = 10;\ncounter = counter + 5;\nSystem.out.println("Counter after addition: " + counter);',
    hint: "Use + operator with assignment",
  },
  {
    id: "variable_16",
    topicId: "variable",
    question: "Use shorthand operator to multiply variable by 3.",
    mathSolution: "*= operator for multiplication",
    codeSolution:
      'int value = 7;\nvalue *= 3;\nSystem.out.println("Value after multiplication: " + value);',
    hint: "Use *= operator",
  },
  {
    id: "variable_17",
    topicId: "variable",
    question: "Assign result of expression to variable.",
    mathSolution: "Expression evaluated first, then assigned",
    codeSolution:
      'int result = (10 + 5) * 2;\nSystem.out.println("Result of (10+5)*2: " + result);',
    hint: "Right side evaluated first",
  },
  {
    id: "variable_18",
    topicId: "variable",
    question: "Increment variable using ++ operator.",
    mathSolution: "Post-increment adds 1",
    codeSolution:
      'int count = 5;\ncount++;\nSystem.out.println("Count after increment: " + count);',
    hint: "++ adds 1 to variable",
  },

  // VARIABLE SCOPE (5)
  {
    id: "variable_19",
    topicId: "variable",
    question: "Declare and use local variable inside method.",
    mathSolution: "Local variable only accessible in its block",
    codeSolution:
      '{\n    int localVar = 100;\n    System.out.println("Inside block: " + localVar);\n}\n// localVar not accessible here',
    hint: "Local variables exist within { }",
  },
  {
    id: "variable_20",
    topicId: "variable",
    question: "Create variable in for loop scope.",
    mathSolution: "Loop variable scope limited to loop",
    codeSolution:
      'for(int i=1; i<=3; i++) {\n    System.out.println("Loop variable i: " + i);\n}\n// i is not accessible here',
    hint: "Variable declared in loop is local to loop",
  },
  {
    id: "variable_21",
    topicId: "variable",
    question: "Use same variable name in different blocks.",
    mathSolution: "Different scopes can have same name",
    codeSolution:
      'int num = 10;\nSystem.out.println("Outer num: " + num);\n{\n    int num = 20;\n    System.out.println("Inner num: " + num);\n}',
    hint: "Inner variable shadows outer",
  },
  {
    id: "variable_22",
    topicId: "variable",
    question: "Access variable from outer block.",
    mathSolution: "Inner block can access outer variables",
    codeSolution:
      'int outerVar = 50;\n{\n    System.out.println("Accessing outer variable: " + outerVar);\n    outerVar = 75;\n}\nSystem.out.println("Modified outer: " + outerVar);',
    hint: "Inner can see outer variables",
  },
  {
    id: "variable_23",
    topicId: "variable",
    question: "Try accessing variable before declaration.",
    mathSolution: "Variables must be declared before use",
    codeSolution:
      '// System.out.println(undeclaredVar); // Error if uncommented\nint undeclaredVar = 30;\nSystem.out.println("Declared now: " + undeclaredVar);',
    hint: "Declaration must come before usage",
  },

  // TYPE CONVERSION WITH VARIABLES (6)
  {
    id: "variable_24",
    topicId: "variable",
    question: "Assign int value to double variable (widening).",
    mathSolution: "Automatic widening conversion",
    codeSolution:
      'int intVal = 25;\ndouble doubleVal = intVal;\nSystem.out.println("Double value: " + doubleVal);',
    hint: "int to double is automatic",
  },
  {
    id: "variable_25",
    topicId: "variable",
    question: "Assign double to int with casting (narrowing).",
    mathSolution: "Explicit casting required",
    codeSolution:
      'double price = 49.99;\nint rupees = (int)price;\nSystem.out.println("Rupees part: " + rupees);',
    hint: "Use (int) for casting",
  },
  {
    id: "variable_26",
    topicId: "variable",
    question: "Convert String to int using parsing.",
    mathSolution: "Parse string to get numeric value",
    codeSolution:
      'String strNum = "123";\nint num = Integer.parseInt(strNum);\nSystem.out.println("Parsed number: " + num);',
    hint: "Integer.parseInt() converts",
  },
  {
    id: "variable_27",
    topicId: "variable",
    question: "Convert int to String.",
    mathSolution: "Use String.valueOf()",
    codeSolution:
      'int age = 30;\nString ageStr = String.valueOf(age);\nSystem.out.println("String value: " + ageStr);',
    hint: "String.valueOf() for conversion",
  },
  {
    id: "variable_28",
    topicId: "variable",
    question: "Add int and double store in double.",
    mathSolution: "int promotes to double",
    codeSolution:
      'int a = 10;\ndouble b = 3.5;\ndouble result = a + b;\nSystem.out.println("Result: " + result);',
    hint: "Result type is double",
  },
  {
    id: "variable_29",
    topicId: "variable",
    question: "Perform operation with byte variables.",
    mathSolution: "Bytes promoted to int in arithmetic",
    codeSolution:
      'byte b1 = 10, b2 = 20;\nbyte sum = (byte)(b1 + b2);\nSystem.out.println("Sum of bytes: " + sum);',
    hint: "Cast needed after addition",
  },

  // STATIC AND INSTANCE VARIABLES (5)
  {
    id: "variable_30",
    topicId: "variable",
    question: "Create and access instance variable.",
    mathSolution: "Instance variables belong to object",
    codeSolution:
      'class Person {\n    String name;\n}\nPerson p = new Person();\np.name = "Alice";\nSystem.out.println("Name: " + p.name);',
    hint: "Access with object reference",
  },
  {
    id: "variable_31",
    topicId: "variable",
    question: "Create and access static variable.",
    mathSolution: "Static variables belong to class",
    codeSolution:
      'class Counter {\n    static int count = 0;\n}\nCounter.count++;\nSystem.out.println("Count: " + Counter.count);',
    hint: "Access with class name",
  },
  {
    id: "variable_32",
    topicId: "variable",
    question: "Demonstrate static variable sharing.",
    mathSolution: "Static variable shared among instances",
    codeSolution:
      'class Shared {\n    static int value = 5;\n}\nShared obj1 = new Shared();\nShared obj2 = new Shared();\nobj1.value = 10;\nSystem.out.println("obj2 value: " + obj2.value);',
    hint: "Changing through one affects all",
  },
  {
    id: "variable_33",
    topicId: "variable",
    question: "Initialize instance variable in constructor.",
    mathSolution: "Constructor sets initial values",
    codeSolution:
      'class Student {\n    String name;\n    Student(String n) { name = n; }\n}\nStudent s = new Student("Bob");\nSystem.out.println("Student: " + s.name);',
    hint: "Constructor parameters initialize",
  },
  {
    id: "variable_34",
    topicId: "variable",
    question: "Use this keyword with instance variable.",
    mathSolution: "this refers to current object",
    codeSolution:
      'class Employee {\n    String name;\n    Employee(String name) { this.name = name; }\n}\nEmployee e = new Employee("John");\nSystem.out.println("Employee: " + e.name);',
    hint: "this disambiguates parameter and field",
  },

  // VARIABLE INITIALIZATION (5)
  {
    id: "variable_35",
    topicId: "variable",
    question: "Declare variable without initializing, then assign.",
    mathSolution: "Declaration then separate assignment",
    codeSolution:
      'int number;\nnumber = 99;\nSystem.out.println("Number: " + number);',
    hint: "Initialize before use",
  },
  {
    id: "variable_36",
    topicId: "variable",
    question: "Default values of instance variables.",
    mathSolution: "Instance variables have default values",
    codeSolution:
      'class Defaults {\n    int i; boolean b; double d; String s;\n}\nDefaults obj = new Defaults();\nSystem.out.println("int default: " + obj.i);\nSystem.out.println("boolean default: " + obj.b);',
    hint: "0, false, null etc.",
  },
  {
    id: "variable_37",
    topicId: "variable",
    question: "Local variables must be initialized.",
    mathSolution: "Local variables no defaults",
    codeSolution:
      'int localVar = 0; // Must initialize\nSystem.out.println("Local: " + localVar);',
    hint: "Local variables need explicit init",
  },
  {
    id: "variable_38",
    topicId: "variable",
    question: "Initialize multiple variables in one statement.",
    mathSolution: "Multiple initialization",
    codeSolution:
      'int p = 1, q = 2, r = 3;\nSystem.out.println("p=" + p + ", q=" + q + ", r=" + r);',
    hint: "Comma separated",
  },
  {
    id: "variable_39",
    topicId: "variable",
    question: "Initialize variable with expression.",
    mathSolution: "Expression value assigned",
    codeSolution:
      'int sum = 5 + 3 * 2;\nSystem.out.println("Result of 5+3*2: " + sum);',
    hint: "Expression evaluated first",
  },

  // VARIABLE OPERATIONS (6)
  {
    id: "variable_40",
    topicId: "variable",
    question: "Add two variables and store in third.",
    mathSolution: "Store sum in new variable",
    codeSolution:
      'int num1 = 15, num2 = 25;\nint total = num1 + num2;\nSystem.out.println("Total: " + total);',
    hint: "Use + operator",
  },
  {
    id: "variable_41",
    topicId: "variable",
    question: "Find average of three variables.",
    mathSolution: "Sum divided by count",
    codeSolution:
      'int a=10, b=20, c=30;\nint avg = (a+b+c)/3;\nSystem.out.println("Average: " + avg);',
    hint: "Sum then divide",
  },
  {
    id: "variable_42",
    topicId: "variable",
    question: "Compare two variables using relational operators.",
    mathSolution: "Relational operators return boolean",
    codeSolution:
      'int x=8, y=12;\nboolean isGreater = x > y;\nSystem.out.println(x + " > " + y + "? " + isGreater);',
    hint: ">, <, >=, <= operators",
  },
  {
    id: "variable_43",
    topicId: "variable",
    question: "Use modulus operator with variables.",
    mathSolution: "% gives remainder",
    codeSolution:
      'int dividend = 17, divisor = 5;\nint remainder = dividend % divisor;\nSystem.out.println("Remainder: " + remainder);',
    hint: "% operator for remainder",
  },
  {
    id: "variable_44",
    topicId: "variable",
    question: "Combine String variables with concatenation.",
    mathSolution: "+ concatenates strings",
    codeSolution:
      'String firstName = "Jane", lastName = "Smith";\nString fullName = firstName + " " + lastName;\nSystem.out.println("Full name: " + fullName);',
    hint: "Use + for concatenation",
  },
  {
    id: "variable_45",
    topicId: "variable",
    question: "Use ternary operator with variables.",
    mathSolution: "condition ? value1 : value2",
    codeSolution:
      'int age = 20;\nString status = (age >= 18) ? "Adult" : "Minor";\nSystem.out.println("Status: " + status);',
    hint: "Ternary for conditional assignment",
  },

  // FINAL AND VAR (5)
  {
    id: "variable_46",
    topicId: "variable",
    question: "Create final variable and try to modify.",
    mathSolution: "Final variables cannot be changed",
    codeSolution:
      'final int DAYS_IN_WEEK = 7;\nSystem.out.println("Days in week: " + DAYS_IN_WEEK);\n// DAYS_IN_WEEK = 8; // This would cause error',
    hint: "Final means constant",
  },
  {
    id: "variable_47",
    topicId: "variable",
    question: "Use var for local variable type inference.",
    mathSolution: "var infers type from initializer",
    codeSolution:
      'var message = "Hello Java";\nvar count = 42;\nSystem.out.println(message + ", count: " + count);',
    hint: "var works in Java 10+",
  },
  {
    id: "variable_48",
    topicId: "variable",
    question: "Final reference variable limitation.",
    mathSolution: "Reference final means can't reassign",
    codeSolution:
      'final StringBuilder sb = new StringBuilder("Hello");\nsb.append(" World"); // Allowed\nSystem.out.println(sb);\n// sb = new StringBuilder(); // Not allowed',
    hint: "Object can change, reference can't",
  },
  {
    id: "variable_49",
    topicId: "variable",
    question: "Create blank final variable initialized in constructor.",
    mathSolution: "Blank final must be initialized in constructor",
    codeSolution:
      'class Employee {\n    final int id;\n    Employee(int empId) { id = empId; }\n}\nEmployee e = new Employee(101);\nSystem.out.println("Employee ID: " + e.id);',
    hint: "Blank final needs constructor init",
  },
  {
    id: "variable_50",
    topicId: "variable",
    question: "Use var with array initialization.",
    mathSolution: "var works with arrays too",
    codeSolution:
      'var numbers = new int[]{1,2,3,4,5};\nSystem.out.print("Numbers: ");\nfor(var num : numbers) System.out.print(num + " ");',
    hint: "var infers array type",
  },
);
