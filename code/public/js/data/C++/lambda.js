QuizData.questions.push(
  {
    id: "cpp_lambdas_1",
    topicId: "cpp_lambdas",
    question: "What is a lambda expression in C++?",
    mathSolution: "Lambda definition",
    codeSolution:
      "A lambda expression is an anonymous function object that can capture variables from its surrounding scope. Syntax: [capture](parameters) { body }",
    hint: "It's like writing a small function directly where you need it.",
  },
  {
    id: "cpp_lambdas_2",
    topicId: "cpp_lambdas",
    question: "What is the basic syntax of a lambda expression?",
    mathSolution: "Lambda syntax",
    codeSolution:
      "[capture-clause](parameters) -> return-type { body }. Example: auto add = [](int a, int b) { return a + b; };",
    hint: "Starts with [] followed by (), then {}.",
  },
  {
    id: "cpp_lambdas_3",
    topicId: "cpp_lambdas",
    question: "How do you capture variables by value in a lambda?",
    mathSolution: "Capture by value",
    codeSolution:
      "Use [x] to capture variable x by value. Example: int x = 5; auto lambda = [x]() { return x + 10; };",
    hint: "The variable is copied into the lambda.",
  },
  {
    id: "cpp_lambdas_4",
    topicId: "cpp_lambdas",
    question: "How do you capture variables by reference in a lambda?",
    mathSolution: "Capture by reference",
    codeSolution:
      "Use [&x] to capture variable x by reference. Example: int x = 5; auto lambda = [&x]() { x += 10; };",
    hint: "The lambda can modify the original variable.",
  },
  {
    id: "cpp_lambdas_5",
    topicId: "cpp_lambdas",
    question: "What does [=] mean in a lambda capture clause?",
    mathSolution: "Default capture by value",
    codeSolution:
      "[=] captures all local variables used in the body by value. Example: int a=5, b=3; auto sum = [=]() { return a + b; };",
    hint: "Equal sign means capture everything by value.",
  },
  {
    id: "cpp_lambdas_6",
    topicId: "cpp_lambdas",
    question: "What does [&] mean in a lambda capture clause?",
    mathSolution: "Default capture by reference",
    codeSolution:
      "[&] captures all local variables used in the body by reference. Example: int a=5, b=3; auto sum = [&]() { a = b + 10; };",
    hint: "Ampersand means capture everything by reference.",
  },
  {
    id: "cpp_lambdas_7",
    topicId: "cpp_lambdas",
    question: "How do you mix capture by value and reference in a lambda?",
    mathSolution: "Mixed capture",
    codeSolution:
      "[x, &y] captures x by value and y by reference. Example: [a, &b]() { b = a + 10; };",
    hint: "Specify each variable with or without &.",
  },
  {
    id: "cpp_lambdas_8",
    topicId: "cpp_lambdas",
    question: "What is a mutable lambda and when would you use it?",
    mathSolution: "Mutable keyword",
    codeSolution:
      "Use 'mutable' to modify value-captured variables: [x]() mutable { x++; return x; }; Without mutable, value-captured variables are const.",
    hint: "Allows modification of copies of captured variables.",
  },
  {
    id: "cpp_lambdas_9",
    topicId: "cpp_lambdas",
    question: "How do you specify the return type of a lambda explicitly?",
    mathSolution: "Return type specification",
    codeSolution:
      "Use -> return_type after parameters: [](int a, int b) -> int { return a + b; }; This is useful when return type deduction is ambiguous.",
    hint: "Use arrow syntax after parameters.",
  },
  {
    id: "cpp_lambdas_10",
    topicId: "cpp_lambdas",
    question: "Can a lambda be passed as a parameter to a function? How?",
    mathSolution: "Lambda as parameter",
    codeSolution:
      "Use std::function or templates: void func(std::function<int(int)> f) { f(5); } OR template<typename F> void func(F f) { f(5); }",
    hint: "Use function wrappers or templates.",
  },
  {
    id: "cpp_lambdas_11",
    topicId: "cpp_lambdas",
    question: "What is a generic lambda in C++14?",
    mathSolution: "Generic lambda",
    codeSolution:
      "Use auto in parameters: auto lambda = [](auto a, auto b) { return a + b; }; Works with any types that support + operator.",
    hint: "Parameters declared with auto make it generic.",
  },
  {
    id: "cpp_lambdas_12",
    topicId: "cpp_lambdas",
    question: "How do you store a lambda in a variable?",
    mathSolution: "Storing lambdas",
    codeSolution:
      "Use 'auto': auto lambda = [](int x) { return x * 2; }; Or use std::function: std::function<int(int)> f = [](int x) { return x * 2; };",
    hint: "Auto is simpler for storing lambdas.",
  },
  {
    id: "cpp_lambdas_13",
    topicId: "cpp_lambdas",
    question: "What is an immediately invoked lambda expression?",
    mathSolution: "IILE",
    codeSolution:
      "Lambda that is called immediately: [](int x) { return x * 2; }(5); This returns 10. Useful for complex initialization.",
    hint: "Add (arguments) right after lambda definition.",
  },
  {
    id: "cpp_lambdas_14",
    topicId: "cpp_lambdas",
    question:
      "How do you capture a member variable inside a lambda in a class?",
    mathSolution: "Capturing this",
    codeSolution:
      "Capture 'this': [this]() { return memberVar; }; Or [=] or [&] also capture this implicitly.",
    hint: "Use 'this' in capture list to access class members.",
  },
  {
    id: "cpp_lambdas_15",
    topicId: "cpp_lambdas",
    question: "What is a lambda capture with an initializer (C++14)?",
    mathSolution: "Init capture",
    codeSolution:
      "[x = 10]() { return x; }; Creates a new variable x in the lambda. Also called generalized lambda capture.",
    hint: "You can create and initialize new variables in capture.",
  },
  {
    id: "cpp_lambdas_16",
    topicId: "cpp_lambdas",
    question: "How do you use lambda with STL algorithms like std::sort?",
    mathSolution: "Lambda with algorithms",
    codeSolution:
      "std::sort(vec.begin(), vec.end(), [](int a, int b) { return a > b; }); This sorts in descending order.",
    hint: "Lambdas are perfect for custom comparisons.",
  },
  {
    id: "cpp_lambdas_17",
    topicId: "cpp_lambdas",
    question:
      "What is the return type of a lambda that doesn't specify a return type?",
    mathSolution: "Return type deduction",
    codeSolution:
      "If body has just 'return expr;', type is deduced from expr. If no return statements, return type is void.",
    hint: "Compiler deduces it automatically in simple cases.",
  },
  {
    id: "cpp_lambdas_18",
    topicId: "cpp_lambdas",
    question: "Can a lambda be recursive? How?",
    mathSolution: "Recursive lambda",
    codeSolution:
      "Use std::function: std::function<int(int)> fact = [&](int n) { return n <= 1 ? 1 : n * fact(n-1); };",
    hint: "Need to capture the lambda itself using std::function.",
  },
  {
    id: "cpp_lambdas_19",
    topicId: "cpp_lambdas",
    question:
      "What happens if you capture a variable by value in a lambda and modify it?",
    mathSolution: "Const-correctness",
    codeSolution:
      "By default, captured values are const. Use 'mutable' to modify: [x]() mutable { x++; return x; };",
    hint: "Without mutable, you'll get a compilation error.",
  },
  {
    id: "cpp_lambdas_20",
    topicId: "cpp_lambdas",
    question:
      "What is the difference between [=] and [this] in a class member function?",
    mathSolution: "Capture differences",
    codeSolution:
      "[=] captures this implicitly (all members). [this] explicitly captures this only. Both give access to members.",
    hint: "[=] might capture more than just this.",
  },
  {
    id: "cpp_lambdas_21",
    topicId: "cpp_lambdas",
    question:
      "How do you capture a variable from a surrounding scope with the same name?",
    mathSolution: "Init capture rename",
    codeSolution:
      "int x = 5; auto lambda = [y = x]() { return y; }; This captures x but names it y inside lambda.",
    hint: "Use init capture to rename.",
  },
  {
    id: "cpp_lambdas_22",
    topicId: "cpp_lambdas",
    question:
      "What is a stateless lambda and what special property does it have?",
    mathSolution: "Stateless lambda",
    codeSolution:
      "A lambda with empty capture []. It can be converted to a function pointer: void (*fp)(int) = [](int x) { };",
    hint: "No captures means convertible to function pointer.",
  },
  {
    id: "cpp_lambdas_23",
    topicId: "cpp_lambdas",
    question: "How do you use lambda with std::for_each?",
    mathSolution: "Lambda with for_each",
    codeSolution:
      "std::for_each(vec.begin(), vec.end(), [](int& x) { x *= 2; }); This doubles each element.",
    hint: "Lambda applies to each element in the range.",
  },
  {
    id: "cpp_lambdas_24",
    topicId: "cpp_lambdas",
    question:
      "What are the advantages of using lambda expressions over function objects?",
    mathSolution: "Lambda benefits",
    codeSolution:
      "1. Less verbose 2. Defined at point of use 3. Can capture local variables 4. Better readability 5. Inlined more easily",
    hint: "More convenient and flexible than writing separate functors.",
  },
  {
    id: "cpp_lambdas_25",
    topicId: "cpp_lambdas",
    question:
      "How does lambda capture work with move-only types like std::unique_ptr?",
    mathSolution: "Move capture",
    codeSolution:
      "Use init capture to move: auto ptr = std::make_unique<int>(5); auto lambda = [p = std::move(ptr)]() { return *p; };",
    hint: "Can't capture by value, must move using init capture.",
  },
);