QuizData.questions.push(
  // INTEGER OPERATIONS (10)
  {
    id: "datatype_1",
    topicId: "datatype",
    question: "Add two integers and print result.",
    mathSolution: "Simple addition operation",
    codeSolution:
      'int a=10, b=20;\nint sum=a+b;\nSystem.out.println("Sum: "+sum);',
    hint: "Use + operator",
  },
  {
    id: "datatype_2",
    topicId: "datatype",
    question: "Subtract two integers and display output.",
    mathSolution: "Subtract smaller from larger",
    codeSolution:
      'int a=50, b=30;\nint diff=a-b;\nSystem.out.println("Difference: "+diff);',
    hint: "Use - operator",
  },
  {
    id: "datatype_3",
    topicId: "datatype",
    question: "Multiply two integers and show product.",
    mathSolution: "Multiplication of numbers",
    codeSolution:
      'int a=12, b=5;\nint product=a*b;\nSystem.out.println("Product: "+product);',
    hint: "Use * operator",
  },
  {
    id: "datatype_4",
    topicId: "datatype",
    question: "Divide two integers and display quotient.",
    mathSolution: "Integer division result",
    codeSolution:
      'int a=100, b=5;\nint quotient=a/b;\nSystem.out.println("Quotient: "+quotient);',
    hint: "Use / operator",
  },
  {
    id: "datatype_5",
    topicId: "datatype",
    question: "Find remainder when dividing two integers.",
    mathSolution: "Modulo operation gives remainder",
    codeSolution:
      'int a=17, b=5;\nint remainder=a%b;\nSystem.out.println("Remainder: "+remainder);',
    hint: "Use % operator",
  },
  {
    id: "datatype_6",
    topicId: "datatype",
    question: "Increment integer by 1 using shorthand operator.",
    mathSolution: "Add 1 to variable",
    codeSolution:
      'int count=5;\ncount+=1;\nSystem.out.println("After increment: "+count);',
    hint: "Use += operator",
  },
  {
    id: "datatype_7",
    topicId: "datatype",
    question: "Decrement integer by 1 using shorthand operator.",
    mathSolution: "Subtract 1 from variable",
    codeSolution:
      'int score=10;\nscore-=1;\nSystem.out.println("After decrement: "+score);',
    hint: "Use -= operator",
  },
  {
    id: "datatype_8",
    topicId: "datatype",
    question: "Find average of three integers.",
    mathSolution: "Sum divided by 3",
    codeSolution:
      'int a=15, b=25, c=35;\nint avg=(a+b+c)/3;\nSystem.out.println("Average: "+avg);',
    hint: "Sum then divide",
  },
  {
    id: "datatype_9",
    topicId: "datatype",
    question: "Swap two integers using temporary variable.",
    mathSolution: "Use third variable to swap",
    codeSolution:
      'int x=5, y=10, temp;\ntemp=x; x=y; y=temp;\nSystem.out.println("x: "+x+", y: "+y);',
    hint: "Store one value temporarily",
  },
  {
    id: "datatype_10",
    topicId: "datatype",
    question: "Swap two integers without using temporary variable.",
    mathSolution: "Use addition and subtraction",
    codeSolution:
      'int a=7, b=13;\na=a+b; b=a-b; a=a-b;\nSystem.out.println("a: "+a+", b: "+b);',
    hint: "Arithmetic operations",
  },

  // FLOAT/DOUBLE OPERATIONS (8)
  {
    id: "datatype_11",
    topicId: "datatype",
    question: "Add two double numbers and print result.",
    mathSolution: "Floating point addition",
    codeSolution:
      'double d1=10.5, d2=20.7;\ndouble sum=d1+d2;\nSystem.out.println("Sum: "+sum);',
    hint: "Use + for doubles",
  },
  {
    id: "datatype_12",
    topicId: "datatype",
    question: "Calculate area of circle using double.",
    mathSolution: "π * r * r",
    codeSolution:
      'double radius=5.5;\ndouble area=Math.PI*radius*radius;\nSystem.out.println("Area: "+area);',
    hint: "Use Math.PI constant",
  },
  {
    id: "datatype_13",
    topicId: "datatype",
    question: "Convert Celsius to Fahrenheit.",
    mathSolution: "F = C * 9/5 + 32",
    codeSolution:
      'double celsius=25.5;\ndouble fahrenheit=celsius*9/5+32;\nSystem.out.println("Fahrenheit: "+fahrenheit);',
    hint: "Multiply by 1.8 then add 32",
  },
  {
    id: "datatype_14",
    topicId: "datatype",
    question: "Calculate simple interest.",
    mathSolution: "P * R * T / 100",
    codeSolution:
      'double p=1000, r=5.5, t=2.5;\ndouble si=p*r*t/100;\nSystem.out.println("Simple Interest: "+si);',
    hint: "Formula: P×R×T/100",
  },
  {
    id: "datatype_15",
    topicId: "datatype",
    question: "Find square root of a number.",
    mathSolution: "Use Math.sqrt() method",
    codeSolution:
      'double num=64.0;\ndouble sqrt=Math.sqrt(num);\nSystem.out.println("Square root: "+sqrt);',
    hint: "Math.sqrt() function",
  },
  {
    id: "datatype_16",
    topicId: "datatype",
    question: "Round a double value to nearest integer.",
    mathSolution: "Use Math.round()",
    codeSolution:
      'double value=45.67;\nlong rounded=Math.round(value);\nSystem.out.println("Rounded: "+rounded);',
    hint: "Math.round() returns long",
  },
  {
    id: "datatype_17",
    topicId: "datatype",
    question: "Calculate power of a number.",
    mathSolution: "Use Math.pow() method",
    codeSolution:
      'double base=2.0, exponent=5.0;\ndouble result=Math.pow(base,exponent);\nSystem.out.println("2^5: "+result);',
    hint: "Math.pow(base,exponent)",
  },
  {
    id: "datatype_18",
    topicId: "datatype",
    question: "Find maximum of two double values.",
    mathSolution: "Use Math.max()",
    codeSolution:
      'double a=34.56, b=78.23;\ndouble max=Math.max(a,b);\nSystem.out.println("Maximum: "+max);',
    hint: "Math.max() function",
  },

  // CHAR OPERATIONS (6)
  {
    id: "datatype_19",
    topicId: "datatype",
    question: "Print ASCII value of a character.",
    mathSolution: "Cast char to int",
    codeSolution:
      "char ch='A';\nint ascii=ch;\nSystem.out.println(\"ASCII of A: \"+ascii);",
    hint: "Assign char to int",
  },
  {
    id: "datatype_20",
    topicId: "datatype",
    question: "Convert lowercase to uppercase.",
    mathSolution: "Subtract 32 from ASCII",
    codeSolution:
      "char lower='b';\nchar upper=(char)(lower-32);\nSystem.out.println(\"Uppercase: \"+upper);",
    hint: "Difference of 32 between cases",
  },
  {
    id: "datatype_21",
    topicId: "datatype",
    question: "Convert uppercase to lowercase.",
    mathSolution: "Add 32 to ASCII",
    codeSolution:
      "char upper='Z';\nchar lower=(char)(upper+32);\nSystem.out.println(\"Lowercase: \"+lower);",
    hint: "Add 32 for lowercase",
  },
  {
    id: "datatype_22",
    topicId: "datatype",
    question: "Check if character is digit.",
    mathSolution: "Compare with '0' and '9'",
    codeSolution:
      "char ch='7';\nboolean isDigit=(ch>='0' && ch<='9');\nSystem.out.println(\"Is digit: \"+isDigit);",
    hint: "Between '0' and '9'",
  },
  {
    id: "datatype_23",
    topicId: "datatype",
    question: "Check if character is alphabet.",
    mathSolution: "Compare with A-Z or a-z",
    codeSolution:
      "char ch='M';\nboolean isAlpha=(ch>='A'&&ch<='Z')||(ch>='a'&&ch<='z');\nSystem.out.println(\"Is alphabet: \"+isAlpha);",
    hint: "Check both cases",
  },
  {
    id: "datatype_24",
    topicId: "datatype",
    question: "Add two characters and print result.",
    mathSolution: "Characters are added as ASCII values",
    codeSolution:
      "char c1='A', c2='B';\nint sum=c1+c2;\nSystem.out.println(\"Sum of ASCII: \"+sum);",
    hint: "Chars convert to int automatically",
  },

  // BOOLEAN OPERATIONS (6)
  {
    id: "datatype_25",
    topicId: "datatype",
    question: "Check if number is even using boolean.",
    mathSolution: "n % 2 == 0",
    codeSolution:
      'int num=24;\nboolean isEven=(num%2==0);\nSystem.out.println("Is even: "+isEven);',
    hint: "Modulo operator",
  },
  {
    id: "datatype_26",
    topicId: "datatype",
    question: "Check if number is positive.",
    mathSolution: "Greater than zero",
    codeSolution:
      'int num=-5;\nboolean isPositive=(num>0);\nSystem.out.println("Is positive: "+isPositive);',
    hint: "Compare with 0",
  },
  {
    id: "datatype_27",
    topicId: "datatype",
    question: "Check if person is eligible to vote.",
    mathSolution: "Age >= 18",
    codeSolution:
      'int age=20;\nboolean canVote=(age>=18);\nSystem.out.println("Can vote: "+canVote);',
    hint: "Compare with 18",
  },
  {
    id: "datatype_28",
    topicId: "datatype",
    question: "Check if year is leap year.",
    mathSolution: "Divisible by 4 and not by 100, or by 400",
    codeSolution:
      'int year=2024;\nboolean isLeap=(year%4==0 && year%100!=0)||(year%400==0);\nSystem.out.println("Is leap year: "+isLeap);',
    hint: "Complex condition",
  },
  {
    id: "datatype_29",
    topicId: "datatype",
    question: "AND operation between two booleans.",
    mathSolution: "true only if both true",
    codeSolution:
      'boolean a=true, b=false;\nboolean result=a&&b;\nSystem.out.println("AND result: "+result);',
    hint: "&& operator",
  },
  {
    id: "datatype_30",
    topicId: "datatype",
    question: "OR operation between two booleans.",
    mathSolution: "true if at least one true",
    codeSolution:
      'boolean x=false, y=true;\nboolean result=x||y;\nSystem.out.println("OR result: "+result);',
    hint: "|| operator",
  },

  // TYPE CONVERSION (8)
  {
    id: "datatype_31",
    topicId: "datatype",
    question: "Convert int to double (widening).",
    mathSolution: "Automatic type conversion",
    codeSolution:
      'int intValue=100;\ndouble doubleValue=intValue;\nSystem.out.println("Double: "+doubleValue);',
    hint: "Smaller to larger type",
  },
  {
    id: "datatype_32",
    topicId: "datatype",
    question: "Convert double to int (narrowing).",
    mathSolution: "Cast required",
    codeSolution:
      'double pi=3.14159;\nint intPi=(int)pi;\nSystem.out.println("Integer part: "+intPi);',
    hint: "Use (int) cast",
  },
  {
    id: "datatype_33",
    topicId: "datatype",
    question: "Convert string to integer.",
    mathSolution: "Use Integer.parseInt()",
    codeSolution:
      'String str="123";\nint num=Integer.parseInt(str);\nSystem.out.println("Number: "+num);',
    hint: "Integer.parseInt()",
  },
  {
    id: "datatype_34",
    topicId: "datatype",
    question: "Convert integer to string.",
    mathSolution: "Use String.valueOf()",
    codeSolution:
      'int age=25;\nString ageStr=String.valueOf(age);\nSystem.out.println("String: "+ageStr);',
    hint: "String.valueOf()",
  },
  {
    id: "datatype_35",
    topicId: "datatype",
    question: "Convert string to double.",
    mathSolution: "Use Double.parseDouble()",
    codeSolution:
      'String price="99.99";\ndouble value=Double.parseDouble(price);\nSystem.out.println("Double: "+value);',
    hint: "Double.parseDouble()",
  },
  {
    id: "datatype_36",
    topicId: "datatype",
    question: "Convert double to string with 2 decimal places.",
    mathSolution: "Format using String.format()",
    codeSolution:
      'double amount=123.45678;\nString formatted=String.format("%.2f",amount);\nSystem.out.println("Formatted: "+formatted);',
    hint: "String.format()",
  },
  {
    id: "datatype_37",
    topicId: "datatype",
    question: "Convert char to int to get ASCII.",
    mathSolution: "Implicit conversion",
    codeSolution:
      "char letter='Z';\nint ascii=letter;\nSystem.out.println(\"ASCII: \"+ascii);",
    hint: "Automatic conversion",
  },
  {
    id: "datatype_38",
    topicId: "datatype",
    question: "Convert int to char (ASCII to character).",
    mathSolution: "Cast to char",
    codeSolution:
      'int asciiCode=98;\nchar character=(char)asciiCode;\nSystem.out.println("Character: "+character);',
    hint: "(char) casting",
  },

  // MATHEMATICAL OPERATIONS (6)
  {
    id: "datatype_39",
    topicId: "datatype",
    question: "Find absolute value of integer.",
    mathSolution: "Use Math.abs()",
    codeSolution:
      'int negative=-45;\nint positive=Math.abs(negative);\nSystem.out.println("Absolute: "+positive);',
    hint: "Math.abs() removes sign",
  },
  {
    id: "datatype_40",
    topicId: "datatype",
    question: "Generate random number between 1 and 100.",
    mathSolution: "Use Math.random()",
    codeSolution:
      'int random=(int)(Math.random()*100)+1;\nSystem.out.println("Random: "+random);',
    hint: "Multiply by range, add min",
  },
  {
    id: "datatype_41",
    topicId: "datatype",
    question: "Calculate compound interest.",
    mathSolution: "P * (1 + r/100)^t",
    codeSolution:
      'double p=1000, r=5, t=2;\ndouble ci=p*Math.pow((1+r/100),t);\nSystem.out.println("CI: "+ci);',
    hint: "Use Math.pow()",
  },
  {
    id: "datatype_42",
    topicId: "datatype",
    question: "Find minimum of three integers.",
    mathSolution: "Use nested Math.min()",
    codeSolution:
      'int a=45, b=23, c=67;\nint min=Math.min(Math.min(a,b),c);\nSystem.out.println("Minimum: "+min);',
    hint: "Nested Math.min()",
  },
  {
    id: "datatype_43",
    topicId: "datatype",
    question: "Calculate distance between two points.",
    mathSolution: "sqrt((x2-x1)^2 + (y2-y1)^2)",
    codeSolution:
      'int x1=0,y1=0,x2=3,y2=4;\ndouble dist=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));\nSystem.out.println("Distance: "+dist);',
    hint: "Pythagorean theorem",
  },
  {
    id: "datatype_44",
    topicId: "datatype",
    question: "Calculate sine of an angle.",
    mathSolution: "Use Math.sin()",
    codeSolution:
      'double angleDegrees=30;\ndouble radians=Math.toRadians(angleDegrees);\ndouble sine=Math.sin(radians);\nSystem.out.println("Sin 30: "+sine);',
    hint: "Convert to radians first",
  },

  // MIXED DATATYPE OPERATIONS (6)
  {
    id: "datatype_45",
    topicId: "datatype",
    question: "Add integer and double.",
    mathSolution: "Integer promotes to double",
    codeSolution:
      'int intNum=10;\ndouble doubleNum=5.5;\ndouble sum=intNum+doubleNum;\nSystem.out.println("Sum: "+sum);',
    hint: "Result is double",
  },
  {
    id: "datatype_46",
    topicId: "datatype",
    question: "Multiply integer with double.",
    mathSolution: "Result is double",
    codeSolution:
      'int length=8;\ndouble width=3.5;\ndouble area=length*width;\nSystem.out.println("Area: "+area);',
    hint: "int * double = double",
  },
  {
    id: "datatype_47",
    topicId: "datatype",
    question: "Concatenate string with number.",
    mathSolution: "Use + operator",
    codeSolution:
      'String name="Age: ";\nint age=30;\nString result=name+age;\nSystem.out.println(result);',
    hint: "+ concatenates strings",
  },
  {
    id: "datatype_48",
    topicId: "datatype",
    question: "Calculate percentage from marks.",
    mathSolution: "(obtained/total)*100",
    codeSolution:
      'int obtained=485, total=500;\ndouble percentage=(obtained*100.0)/total;\nSystem.out.println("Percentage: "+percentage+"%");',
    hint: "Multiply by 100.0 for double result",
  },
  {
    id: "datatype_49",
    topicId: "datatype",
    question: "Convert minutes to hours and minutes.",
    mathSolution: "Divide and modulo",
    codeSolution:
      'int totalMinutes=145;\nint hours=totalMinutes/60;\nint minutes=totalMinutes%60;\nSystem.out.println(hours+" hours "+minutes+" minutes");',
    hint: "/ for hours, % for remaining minutes",
  },
  {
    id: "datatype_50",
    topicId: "datatype",
    question: "Check if character is vowel.",
    mathSolution: "Compare with vowels",
    codeSolution:
      "char ch='e';\nboolean isVowel=(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'||ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U');\nSystem.out.println(\"Is vowel: \"+isVowel);",
    hint: "Check both cases",
  },
);
