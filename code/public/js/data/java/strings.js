QuizData.questions.push(
  {
    id: "string_1",
    topicId: "java_string",
    question: "How do you find the length of a given string?",
    mathSolution: "Count number of characters in string",
    codeSolution: "String str = \"Hello\";\nint length = str.length();",
    hint: "Use length() method"
  },
  {
    id: "string_2",
    topicId: "java_string",
    question: "Write code to convert a string to uppercase.",
    mathSolution: "Convert all characters to capital letters",
    codeSolution: "String str = \"hello\";\nString upper = str.toUpperCase();",
    hint: "Use toUpperCase() method"
  },
  {
    id: "string_3",
    topicId: "java_string",
    question: "How do you convert a string to lowercase?",
    mathSolution: "Convert all characters to small letters",
    codeSolution: "String str = \"WORLD\";\nString lower = str.toLowerCase();",
    hint: "Use toLowerCase() method"
  },
  {
    id: "string_4",
    topicId: "java_string",
    question: "Write code to check if two strings are equal.",
    mathSolution: "Compare strings character by character",
    codeSolution: "String s1 = \"Java\";\nString s2 = \"Java\";\nboolean isEqual = s1.equals(s2);",
    hint: "Use equals() method"
  },
  {
    id: "string_5",
    topicId: "java_string",
    question: "How do you get the first character of a string?",
    mathSolution: "Character at index 0",
    codeSolution: "String str = \"Programming\";\nchar first = str.charAt(0);",
    hint: "Use charAt() with index 0"
  },
  {
    id: "string_6",
    topicId: "java_string",
    question: "Write code to get the last character of a string.",
    mathSolution: "Character at index length-1",
    codeSolution: "String str = \"Programming\";\nchar last = str.charAt(str.length() - 1);",
    hint: "Use length()-1 as index"
  },
  {
    id: "string_7",
    topicId: "java_string",
    question: "How do you concatenate two strings?",
    mathSolution: "Join two strings together",
    codeSolution: "String s1 = \"Hello\";\nString s2 = \"World\";\nString result = s1 + s2;",
    hint: "Use + operator"
  },
  {
    id: "string_8",
    topicId: "java_string",
    question: "Write code to check if a string contains a substring.",
    mathSolution: "Check if substring exists in main string",
    codeSolution: "String str = \"Hello World\";\nboolean contains = str.contains(\"World\");",
    hint: "Use contains() method"
  },
  {
    id: "string_9",
    topicId: "java_string",
    question: "How do you find the index of a character in a string?",
    mathSolution: "Find position of first occurrence",
    codeSolution: "String str = \"Hello\";\nint index = str.indexOf('e');",
    hint: "Use indexOf() method"
  },
  {
    id: "string_10",
    topicId: "java_string",
    question: "Write code to replace a character in a string.",
    mathSolution: "Replace all occurrences of old char with new",
    codeSolution: "String str = \"Hello\";\nString replaced = str.replace('l', 'p');",
    hint: "Use replace() method"
  },
  {
    id: "string_11",
    topicId: "java_string",
    question: "How do you check if a string is empty?",
    mathSolution: "Check if length is zero",
    codeSolution: "String str = \"\";\nboolean isEmpty = str.isEmpty();",
    hint: "Use isEmpty() method"
  },
  {
    id: "string_12",
    topicId: "java_string",
    question: "Write code to extract substring from a string.",
    mathSolution: "Get part of string from start to end-1",
    codeSolution: "String str = \"HelloWorld\";\nString sub = str.substring(1, 5);",
    hint: "Use substring(start, end) - end exclusive"
  },
  {
    id: "string_13",
    topicId: "java_string",
    question: "How do you remove whitespace from both ends?",
    mathSolution: "Trim leading and trailing spaces",
    codeSolution: "String str = \"  Hello  \";\nString trimmed = str.trim();",
    hint: "Use trim() method"
  },
  {
    id: "string_14",
    topicId: "java_string",
    question: "Write code to compare strings ignoring case.",
    mathSolution: "Compare without considering case",
    codeSolution: "String s1 = \"Java\";\nString s2 = \"JAVA\";\nboolean isEqual = s1.equalsIgnoreCase(s2);",
    hint: "Use equalsIgnoreCase()"
  },
  {
    id: "string_15",
    topicId: "java_string",
    question: "How do you split a string by delimiter?",
    mathSolution: "Divide string into parts",
    codeSolution: "String str = \"apple,banana,orange\";\nString[] fruits = str.split(\",\");",
    hint: "Use split() with delimiter"
  },
  {
    id: "string_16",
    topicId: "java_string",
    question: "Write code to check if string starts with prefix.",
    mathSolution: "Check beginning of string",
    codeSolution: "String str = \"Hello\";\nboolean starts = str.startsWith(\"He\");",
    hint: "Use startsWith() method"
  },
  {
    id: "string_17",
    topicId: "java_string",
    question: "How do you check if string ends with suffix?",
    mathSolution: "Check ending of string",
    codeSolution: "String str = \"Hello\";\nboolean ends = str.endsWith(\"lo\");",
    hint: "Use endsWith() method"
  },
  {
    id: "string_18",
    topicId: "java_string",
    question: "Write code to convert string to integer.",
    mathSolution: "Parse numeric string to int",
    codeSolution: "String str = \"123\";\nint num = Integer.parseInt(str);",
    hint: "Use Integer.parseInt()"
  },
  {
    id: "string_19",
    topicId: "java_string",
    question: "How do you convert integer to string?",
    mathSolution: "Convert number to string representation",
    codeSolution: "int num = 456;\nString str = String.valueOf(num);",
    hint: "Use String.valueOf()"
  },
  {
    id: "string_20",
    topicId: "java_string",
    question: "Write code to repeat a string multiple times.",
    mathSolution: "Concatenate string n times",
    codeSolution: "String str = \"Hi\";\nString repeated = str.repeat(3);",
    hint: "Use repeat() method (Java 11+)"
  },
  {
    id: "string_21",
    topicId: "java_string",
    question: "How do you join strings with delimiter?",
    mathSolution: "Combine multiple strings with separator",
    codeSolution: "String joined = String.join(\"-\", \"2024\", \"01\", \"15\");",
    hint: "Use String.join()"
  },
  {
    id: "string_22",
    topicId: "java_string",
    question: "Write code to check if string is blank.",
    mathSolution: "Check if string contains only whitespace",
    codeSolution: "String str = \"   \";\nboolean isBlank = str.isBlank();",
    hint: "Use isBlank() (Java 11+)"
  },
  {
    id: "string_23",
    topicId: "java_string",
    question: "How do you get character at specific index?",
    mathSolution: "Character at given position",
    codeSolution: "String str = \"Computer\";\nchar ch = str.charAt(3);",
    hint: "Index starts from 0"
  },
  {
    id: "string_24",
    topicId: "java_string",
    question: "Write code to find last index of character.",
    mathSolution: "Find last occurrence position",
    codeSolution: "String str = \"Hello World\";\nint index = str.lastIndexOf('o');",
    hint: "Use lastIndexOf()"
  },
  {
    id: "string_25",
    topicId: "java_string",
    question: "How do you check if strings are not equal?",
    mathSolution: "Negate equality check",
    codeSolution: "String s1 = \"abc\";\nString s2 = \"def\";\nboolean notEqual = !s1.equals(s2);",
    hint: "Use ! with equals()"
  },
  {
    id: "string_26",
    topicId: "java_string",
    question: "Write code to extract substring from index to end.",
    mathSolution: "Get substring starting at index",
    codeSolution: "String str = \"Programming\";\nString sub = str.substring(3);",
    hint: "substring(start) goes to end"
  },
  {
    id: "string_27",
    topicId: "java_string",
    question: "How do you replace all occurrences of a char?",
    mathSolution: "Replace old char with new everywhere",
    codeSolution: "String str = \"Java Programming\";\nString replaced = str.replace('a', 'e');",
    hint: "replace() works for chars"
  },
  {
    id: "string_28",
    topicId: "java_string",
    question: "Write code to convert string to char array.",
    mathSolution: "Convert to array of characters",
    codeSolution: "String str = \"Hello\";\nchar[] chars = str.toCharArray();",
    hint: "Use toCharArray()"
  },
  {
    id: "string_29",
    topicId: "java_string",
    question: "How do you check if string is null or empty?",
    mathSolution: "Validate string before use",
    codeSolution: "String str = null;\nboolean isValid = str != null && !str.isEmpty();",
    hint: "Check null first"
  },
  {
    id: "string_30",
    topicId: "java_string",
    question: "Write code to format string with variables.",
    mathSolution: "Insert variables into string template",
    codeSolution: "String name = \"John\";\nint age = 25;\nString result = String.format(\"Name: %s, Age: %d\", name, age);",
    hint: "Use String.format()"
  },
  {
    id: "string_31",
    topicId: "java_string",
    question: "How do you remove all spaces from string?",
    mathSolution: "Remove every space character",
    codeSolution: "String str = \"Hello World Java\";\nString noSpaces = str.replace(\" \", \"\");",
    hint: "Replace space with empty"
  },
  {
    id: "string_32",
    topicId: "java_string",
    question: "Write code to compare strings lexicographically.",
    mathSolution: "Compare alphabetically",
    codeSolution: "String s1 = \"apple\";\nString s2 = \"banana\";\nint result = s1.compareTo(s2);",
    hint: "compareTo() returns negative, zero, positive"
  },
  {
    id: "string_33",
    topicId: "java_string",
    question: "How do you convert double to string?",
    mathSolution: "Convert decimal to string",
    codeSolution: "double pi = 3.14;\nString str = Double.toString(pi);",
    hint: "Use Double.toString()"
  },
  {
    id: "string_34",
    topicId: "java_string",
    question: "Write code to check if string matches regex.",
    mathSolution: "Validate against pattern",
    codeSolution: "String str = \"12345\";\nboolean isDigits = str.matches(\"\\\\d+\");",
    hint: "Use matches() with regex"
  },
  {
    id: "string_35",
    topicId: "java_string",
    question: "How do you create string using new keyword?",
    mathSolution: "Create string object",
    codeSolution: "String str = new String(\"Hello\");",
    hint: "String objects can be created with new"
  },
  {
    id: "string_36",
    topicId: "java_string",
    question: "Write code to get Unicode code point.",
    mathSolution: "Get ASCII/Unicode value",
    codeSolution: "String str = \"Java\";\nint codePoint = str.codePointAt(0);",
    hint: "Use codePointAt()"
  },
  {
    id: "string_37",
    topicId: "java_string",
    question: "How do you check string reference equality?",
    mathSolution: "Check if same object",
    codeSolution: "String s1 = \"Hello\";\nString s2 = \"Hello\";\nboolean sameRef = (s1 == s2);",
    hint: "== compares references"
  },
  {
    id: "string_38",
    topicId: "java_string",
    question: "Write code to create multiline string.",
    mathSolution: "String with line breaks",
    codeSolution: "String multiline = \"\"\"\n    Line 1\n    Line 2\n    \"\"\";",
    hint: "Use text blocks (Java 13+)"
  },
  {
    id: "string_39",
    topicId: "java_string",
    question: "How do you indent a string?",
    mathSolution: "Add spaces at beginning",
    codeSolution: "String str = \"Hello\";\nString indented = \"    \" + str;",
    hint: "Simple concatenation"
  },
  {
    id: "string_40",
    topicId: "java_string",
    question: "Write code to convert string to boolean.",
    mathSolution: "Parse boolean value",
    codeSolution: "String str = \"true\";\nboolean bool = Boolean.parseBoolean(str);",
    hint: "Use Boolean.parseBoolean()"
  },
  {
    id: "string_41",
    topicId: "java_string",
    question: "How do you reverse a string?",
    mathSolution: "Reverse character order",
    codeSolution: "String str = \"Hello\";\nString reversed = new StringBuilder(str).reverse().toString();",
    hint: "Use StringBuilder.reverse()"
  },
  {
    id: "string_42",
    topicId: "java_string",
    question: "Write code to count character occurrences.",
    mathSolution: "Count frequency of specific char",
    codeSolution: "String str = \"Java Programming\";\nlong count = str.chars().filter(ch -> ch == 'a').count();",
    hint: "Use stream or loop"
  },
  {
    id: "string_43",
    topicId: "java_string",
    question: "How do you check palindrome string?",
    mathSolution: "String equals its reverse",
    codeSolution: "String str = \"madam\";\nString reversed = new StringBuilder(str).reverse().toString();\nboolean isPalindrome = str.equals(reversed);",
    hint: "Compare with reverse"
  },
  {
    id: "string_44",
    topicId: "java_string",
    question: "Write code to extract all digits from string.",
    mathSolution: "Keep only numbers",
    codeSolution: "String str = \"abc123def456\";\nString digits = str.replaceAll(\"[^0-9]\", \"\");",
    hint: "Use replaceAll with regex"
  },
  {
    id: "string_45",
    topicId: "java_string",
    question: "How do you capitalize first letter?",
    mathSolution: "Make first character uppercase",
    codeSolution: "String str = \"java\";\nString capitalized = str.substring(0, 1).toUpperCase() + str.substring(1);",
    hint: "Combine uppercase first + rest"
  },
  {
    id: "string_46",
    topicId: "java_string",
    question: "Write code to check for uppercase letters.",
    mathSolution: "Detect capital letters",
    codeSolution: "String str = \"Hello\";\nboolean hasUpper = !str.equals(str.toLowerCase());",
    hint: "Compare with lowercase"
  },
  {
    id: "string_47",
    topicId: "java_string",
    question: "How do you remove duplicate characters?",
    mathSolution: "Keep unique characters only",
    codeSolution: "String str = \"aabbcc\";\nString result = str.chars().distinct().mapToObj(c -> String.valueOf((char)c)).collect(Collectors.joining());",
    hint: "Use distinct() stream"
  },
  {
    id: "string_48",
    topicId: "java_string",
    question: "Write code to swap two strings without third variable.",
    mathSolution: "Use concatenation",
    codeSolution: "String a = \"Hello\";\nString b = \"World\";\na = a + b;\nb = a.substring(0, a.length() - b.length());\na = a.substring(b.length());",
    hint: "Use substring after concatenation"
  },
  {
    id: "string_49",
    topicId: "java_string",
    question: "How do you find longest word in sentence?",
    mathSolution: "Find word with max length",
    codeSolution: "String sentence = \"Java programming is fun\";\nString longest = Arrays.stream(sentence.split(\" \"))\n    .max(Comparator.comparingInt(String::length))\n    .orElse(\"\");",
    hint: "Split and compare lengths"
  },
  {
    id: "string_50",
    topicId: "java_string",
    question: "Write code to count vowels in a string.",
    mathSolution: "Count a,e,i,o,u characters",
    codeSolution: "String str = \"Hello World\";\nlong count = str.toLowerCase().chars()\n    .filter(c -> \"aeiou\".indexOf(c) != -1)\n    .count();",
    hint: "Check for vowels (case insensitive)"
  }
);