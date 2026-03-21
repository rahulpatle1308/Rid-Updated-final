QuizData.questions.push(
{
  id: 'py_func_1',
  topicId: 'py_functions',
  question: 'Write a function that takes two numbers as arguments and returns their sum.',
  mathSolution: 'Define a function with parameters and return the result.',
  codeSolution: 'def add_numbers(a, b):\n    return a + b',
  hint: 'Use the return statement to send back the result.'
},
{
  id: 'py_func_2',
  topicId: 'py_functions',
  question: 'Create a function that checks if a number is even or odd.',
  mathSolution: 'Use modulo operator to check divisibility by 2.',
  codeSolution: 'def is_even(num):\n    if num % 2 == 0:\n        return True\n    else:\n        return False',
  hint: 'Return True if number % 2 == 0, otherwise False.'
},
{
  id: 'py_func_3',
  topicId: 'py_functions',
  question: 'Write a function with default parameters for greeting.',
  mathSolution: 'Assign default values to parameters that can be overridden.',
  codeSolution: 'def greet(name, greeting="Hello"):\n    return f"{greeting}, {name}!"',
  hint: 'Default parameters are used when arguments are not provided.'
},
{
  id: 'py_func_4',
  topicId: 'py_functions',
  question: 'Create a function that returns multiple values (min and max of a list).',
  mathSolution: 'Return a tuple containing multiple values.',
  codeSolution: 'def min_max(numbers):\n    return min(numbers), max(numbers)',
  hint: 'Multiple values are returned as a tuple by default.'
},
{
  id: 'py_func_5',
  topicId: 'py_functions',
  question: 'Write a function with variable number of arguments (*args).',
  mathSolution: 'Use *args to accept any number of positional arguments.',
  codeSolution: 'def sum_all(*args):\n    return sum(args)',
  hint: '*args collects all positional arguments into a tuple.'
},
{
  id: 'py_func_6',
  topicId: 'py_functions',
  question: 'Create a function with variable number of keyword arguments (**kwargs).',
  mathSolution: 'Use **kwargs to accept any number of keyword arguments.',
  codeSolution: 'def print_info(**kwargs):\n    for key, value in kwargs.items():\n        print(f"{key}: {value}")',
  hint: '**kwargs collects all keyword arguments into a dictionary.'
},
{
  id: 'py_func_7',
  topicId: 'py_functions',
  question: 'Write a recursive function to calculate factorial of a number.',
  mathSolution: 'Base case: n=0 returns 1; recursive case: n * factorial(n-1).',
  codeSolution: 'def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)',
  hint: 'Recursive functions call themselves with modified parameters.'
},
{
  id: 'py_func_8',
  topicId: 'py_functions',
  question: 'Create a lambda function to double a number.',
  mathSolution: 'Lambda functions are anonymous single-expression functions.',
  codeSolution: 'double = lambda x: x * 2\n# Usage: double(5) returns 10',
  hint: 'Lambda functions are defined without def keyword.'
},
{
  id: 'py_func_9',
  topicId: 'py_functions',
  question: 'Use map() function with lambda to square all elements in a list.',
  mathSolution: 'map() applies a function to every item in an iterable.',
  codeSolution: 'numbers = [1, 2, 3, 4]\nsquared = list(map(lambda x: x**2, numbers))',
  hint: 'map() returns an iterator, convert to list to see results.'
},
{
  id: 'py_func_10',
  topicId: 'py_functions',
  question: 'Use filter() to get only even numbers from a list.',
  mathSolution: 'filter() keeps items where function returns True.',
  codeSolution: 'numbers = [1, 2, 3, 4, 5, 6]\nevens = list(filter(lambda x: x % 2 == 0, numbers))',
  hint: 'filter() returns iterator, convert to list to see results.'
},
{
  id: 'py_func_11',
  topicId: 'py_functions',
  question: 'Use reduce() to find product of all numbers in a list.',
  mathSolution: 'reduce() cumulatively applies function to items.',
  codeSolution: 'from functools import reduce\nnumbers = [1, 2, 3, 4]\nproduct = reduce(lambda x, y: x * y, numbers)  # Returns 24',
  hint: 'reduce() is in functools module, not built-in.'
},
{
  id: 'py_func_12',
  topicId: 'py_functions',
  question: 'Write a function that returns another function (closure).',
  mathSolution: 'Inner function remembers variables from outer scope.',
  codeSolution: 'def multiplier(factor):\n    def multiply(x):\n        return x * factor\n    return multiply\n\ndouble = multiplier(2)\nprint(double(5))  # Output: 10',
  hint: 'Closures capture and remember outer variables.'
},
{
  id: 'py_func_13',
  topicId: 'py_functions',
  question: 'Create a decorator that prints function execution time.',
  mathSolution: 'Decorators wrap functions to add functionality.',
  codeSolution: 'import time\n\ndef timer_decorator(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f"{func.__name__} took {end-start:.4f} seconds")\n        return result\n    return wrapper\n\n@timer_decorator\ndef slow_function():\n    time.sleep(1)\n    return "Done"',
  hint: 'Decorators use @ syntax and modify function behavior.'
},
{
  id: 'py_func_14',
  topicId: 'py_functions',
  question: 'Write a decorator that caches function results (memoization).',
  mathSolution: 'Store results in cache to avoid recomputation.',
  codeSolution: 'def memoize(func):\n    cache = {}\n    def wrapper(*args):\n        if args in cache:\n            return cache[args]\n        result = func(*args)\n        cache[args] = result\n        return result\n    return wrapper\n\n@memoize\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)',
  hint: 'Cache dictionary stores results for given arguments.'
},
{
  id: 'py_func_15',
  topicId: 'py_functions',
  question: 'Create a generator function that yields Fibonacci numbers.',
  mathSolution: 'Generators use yield to produce values one at a time.',
  codeSolution: 'def fibonacci_generator(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\n\n# Usage\nfor num in fibonacci_generator(10):\n    print(num)',
  hint: 'yield pauses function, saving state for next call.'
},
{
  id: 'py_func_16',
  topicId: 'py_functions',
  question: 'Write a function with type hints for parameters and return value.',
  mathSolution: 'Type hints improve code readability and enable static checking.',
  codeSolution: 'def greet(name: str, age: int) -> str:\n    return f"{name} is {age} years old"',
  hint: 'Type hints don\'t enforce types but document them.'
},
{
  id: 'py_func_17',
  topicId: 'py_functions',
  question: 'Create a function that uses global variable with global keyword.',
  mathSolution: 'global keyword allows modifying variables in global scope.',
  codeSolution: 'counter = 0\n\ndef increment():\n    global counter\n    counter += 1\n    return counter',
  hint: 'Avoid global variables when possible; they make code harder to debug.'
},
{
  id: 'py_func_18',
  topicId: 'py_functions',
  question: 'Write a function that demonstrates variable scope (local vs global).',
  mathSolution: 'Variables inside function are local unless declared global.',
  codeSolution: 'x = 10  # global\n\ndef scope_demo():\n    x = 5  # local\n    print(f"Local x: {x}")\n\nscope_demo()\nprint(f"Global x: {x}")',
  hint: 'Local variables don\'t affect global variables with same name.'
},
{
  id: 'py_func_19',
  topicId: 'py_functions',
  question: 'Create a function that validates input using docstring.',
  mathSolution: 'Docstrings document function purpose and usage.',
  codeSolution: 'def divide(a: float, b: float) -> float:\n    """\n    Divide two numbers.\n    \n    Args:\n        a: Numerator\n        b: Denominator (must be non-zero)\n    \n    Returns:\n        Result of division\n    \n    Raises:\n        ValueError: If denominator is zero\n    """\n    if b == 0:\n        raise ValueError("Denominator cannot be zero")\n    return a / b',
  hint: 'Docstrings are accessible via help(function) or function.__doc__.'
},
{
  id: 'py_func_20',
  topicId: 'py_functions',
  question: 'Write a function that uses nonlocal keyword in nested function.',
  mathSolution: 'nonlocal allows modifying variables in enclosing (non-global) scope.',
  codeSolution: 'def outer():\n    count = 0\n    \n    def inner():\n        nonlocal count\n        count += 1\n        return count\n    \n    return inner\n\ncounter = outer()\nprint(counter())  # 1\nprint(counter())  # 2',
  hint: 'nonlocal is for nested functions, global for module scope.'
},
{
  id: 'py_func_21',
  topicId: 'py_functions',
  question: 'Create a function that accepts both positional and keyword arguments.',
  mathSolution: 'Combine *args and **kwargs for maximum flexibility.',
  codeSolution: 'def flexible_function(*args, **kwargs):\n    print(f"Positional args: {args}")\n    print(f"Keyword args: {kwargs}")',
  hint: 'args is tuple, kwargs is dictionary.'
},
{
  id: 'py_func_22',
  topicId: 'py_functions',
  question: 'Write a function with keyword-only arguments.',
  mathSolution: 'Arguments after * are keyword-only.',
  codeSolution: 'def create_user(name, age, *, city="Unknown", country="Unknown"):\n    return f"{name} ({age}) from {city}, {country}"\n\n# Valid calls:\n# create_user("John", 30, city="NYC", country="USA")\n# create_user("John", 30)',
  hint: 'Keyword-only arguments must be specified by name.'
},
{
  id: 'py_func_23',
  topicId: 'py_functions',
  question: 'Create a function with positional-only arguments (Python 3.8+).',
  mathSolution: 'Arguments before / are positional-only.',
  codeSolution: 'def power(x, y, /):\n    return x ** y\n\n# Valid: power(2, 3)\n# Invalid: power(x=2, y=3)',
  hint: 'Positional-only arguments cannot be passed by keyword.'
},
{
  id: 'py_func_24',
  topicId: 'py_functions',
  question: 'Write a recursive function to calculate Fibonacci numbers.',
  mathSolution: 'Base cases: fib(0)=0, fib(1)=1; recursive: fib(n)=fib(n-1)+fib(n-2).',
  codeSolution: 'def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)',
  hint: 'Be careful with recursion depth for large n.'
},
{
  id: 'py_func_25',
  topicId: 'py_functions',
  question: 'Create a function that implements tail recursion optimization concept.',
  mathSolution: 'Tail recursion calls itself as last action (Python doesn\'t optimize it).',
  codeSolution: 'def factorial_tail(n, accumulator=1):\n    if n == 0:\n        return accumulator\n    return factorial_tail(n-1, accumulator * n)',
  hint: 'Tail recursion passes accumulated result as parameter.'
},
{
  id: 'py_func_26',
  topicId: 'py_functions',
  question: 'Write a function that uses functools.partial to fix arguments.',
  mathSolution: 'partial creates new function with some arguments fixed.',
  codeSolution: 'from functools import partial\n\ndef power(base, exponent):\n    return base ** exponent\n\nsquare = partial(power, exponent=2)\ncube = partial(power, exponent=3)\n\nprint(square(5))  # 25\nprint(cube(5))    # 125',
  hint: 'partial is useful for creating specialized functions.'
},
{
  id: 'py_func_27',
  topicId: 'py_functions',
  question: 'Create a function that uses lru_cache for optimization.',
  mathSolution: 'lru_cache caches function results automatically.',
  codeSolution: 'from functools import lru_cache\n\n@lru_cache(maxsize=128)\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)',
  hint: 'lru_cache is a decorator that caches results based on arguments.'
},
{
  id: 'py_func_28',
  topicId: 'py_functions',
  question: 'Write a function that implements currying.',
  mathSolution: 'Currying transforms function taking multiple args into chain of single-arg functions.',
  codeSolution: 'def curry(func):\n    def curried(*args):\n        if len(args) >= func.__code__.co_argcount:\n            return func(*args)\n        return lambda *more: curried(*(args + more))\n    return curried\n\n@curry\ndef add_three(a, b, c):\n    return a + b + c\n\nadd_one = add_three(1)\nadd_one_two = add_one(2)\nprint(add_one_two(3))  # 6',
  hint: 'Currying allows partial application of functions.'
},
{
  id: 'py_func_29',
  topicId: 'py_functions',
  question: 'Create a function that uses eval() to evaluate expressions (with caution).',
  mathSolution: 'eval() evaluates string as Python expression.',
  codeSolution: 'def safe_eval(expression):\n    # Only allow basic math operations\n    allowed_names = {"abs": abs, "pow": pow}\n    try:\n        return eval(expression, {"__builtins__": {}}, allowed_names)\n    except:\n        return "Invalid expression"',
  hint: 'eval() can be dangerous with untrusted input.'
},
{
  id: 'py_func_30',
  topicId: 'py_functions',
  question: 'Write a function that uses exec() to execute dynamic code.',
  mathSolution: 'exec() executes string as Python code.',
  codeSolution: 'def create_function(func_name, code_string):\n    namespace = {}\n    exec(f"def {func_name}():\\n    {code_string}", namespace)\n    return namespace[func_name]\n\n# Usage\nhello = create_function("greet", return "Hello World")\n print(hello())',
  hint: 'exec() is powerful but dangerous with untrusted input.'
},
{
  id: 'py_func_31',
  topicId: 'py_functions',
  question: 'Create a function that acts as a context manager using contextlib.',
  mathSolution: 'contextlib provides utilities for working with context managers.',
  codeSolution: 'from contextlib import contextmanager\n\n@contextmanager\ndef managed_file(filename, mode):\n    try:\n        f = open(filename, mode)\n        yield f\n    finally:\n        f.close()\n\n# Usage\nwith managed_file("test.txt", "w") as f:\n    f.write("Hello World")',
  hint: 'contextmanager decorator turns generator into context manager.'
},
{
  id: 'py_func_32',
  topicId: 'py_functions',
  question: 'Write a function that uses property decorator for getter/setter.',
  mathSolution: 'property decorator creates managed attributes.',
  codeSolution: 'class Person:\n    def __init__(self, name):\n        self._name = name\n    \n    @property\n    def name(self):\n        return self._name\n    \n    @name.setter\n    def name(self, value):\n        if not isinstance(value, str):\n            raise TypeError("Name must be string")\n        self._name = value',
  hint: 'Property methods allow controlled attribute access.'
},
{
  id: 'py_func_33',
  topicId: 'py_functions',
  question: 'Create a function that uses staticmethod and classmethod.',
  mathSolution: 'staticmethod doesn\'t receive implicit first argument; classmethod receives class.',
  codeSolution: 'class MathOperations:\n    @staticmethod\n    def add(x, y):\n        return x + y\n    \n    @classmethod\n    def create_from_string(cls, string):\n        return cls(string)',
  hint: 'staticmethod: no self/cls; classmethod: receives class as first param.'
},
{
  id: 'py_func_34',
  topicId: 'py_functions',
  question: 'Write a function that uses functools.wraps to preserve metadata in decorators.',
  mathSolution: 'wraps copies function metadata to wrapper.',
  codeSolution: 'from functools import wraps\n\ndef my_decorator(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        """Wrapper docstring"""\n        print("Before function")\n        result = func(*args, **kwargs)\n        print("After function")\n        return result\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    """Say hello docstring"""\n    print("Hello!")\n\nprint(say_hello.__name__)  # say_hello (not wrapper)\nprint(say_hello.__doc__)   # Say hello docstring',
  hint: 'wraps preserves function name, docstring, and other metadata.'
},
{
  id: 'py_func_35',
  topicId: 'py_functions',
  question: 'Create a function that implements function overloading using singledispatch.',
  mathSolution: 'singledispatch creates generic functions with different implementations.',
  codeSolution: 'from functools import singledispatch\n\n@singledispatch\ndef process(data):\n    return f"Default: {data}"\n\n@process.register(int)\ndef _(data):\n    return f"Integer: {data * 2}"\n\n@process.register(str)\ndef _(data):\n    return f"String: {data.upper()}"\n\n@process.register(list)\ndef _(data):\n    return f"List: {sum(data)}"',
  hint: 'singledispatch chooses function based on first argument type.'
},
{
  id: 'py_func_36',
  topicId: 'py_functions',
  question: 'Write a function that uses inspect module to get function signature.',
  mathSolution: 'inspect module provides information about live objects.',
  codeSolution: 'import inspect\n\ndef example(a, b=2, *args, **kwargs):\n    pass\n\nsig = inspect.signature(example)\nfor param in sig.parameters.values():\n    print(f"{param.name}: {param.kind}")',
  hint: 'signature() returns function parameter information.'
},
{
  id: 'py_func_37',
  topicId: 'py_functions',
  question: 'Create a function that validates arguments using function annotations.',
  mathSolution: 'Use annotations to specify and validate argument types.',
  codeSolution: 'def validate(func):\n    def wrapper(*args, **kwargs):\n        # Get function annotations\n        annotations = func.__annotations__\n        for arg_name, arg_value in zip(func.__code__.co_varnames, args):\n            if arg_name in annotations:\n                expected_type = annotations[arg_name]\n                if not isinstance(arg_value, expected_type):\n                    raise TypeError(f"{arg_name} must be {expected_type}")\n        return func(*args, **kwargs)\n    return wrapper\n\n@validate\ndef greet(name: str, age: int) -> str:\n    return f"{name} is {age} years old"',
  hint: 'Annotations are stored in function.__annotations__.'
},
{
  id: 'py_func_38',
  topicId: 'py_functions',
  question: 'Write a function that uses yield from to delegate to another generator.',
  mathSolution: 'yield from allows generator to delegate to subgenerator.',
  codeSolution: 'def sub_generator():\n    yield 1\n    yield 2\n    yield 3\n\ndef main_generator():\n    yield "Start"\n    yield from sub_generator()\n    yield "End"\n\nfor value in main_generator():\n    print(value)',
  hint: 'yield from simplifies working with nested generators.'
},
{
  id: 'py_func_39',
  topicId: 'py_functions',
  question: 'Create a function that implements coroutine with send() method.',
  mathSolution: 'Coroutines can receive values via send() and yield.',
  codeSolution: 'def coroutine():\n    print("Coroutine started")\n    while True:\n        value = yield\n        print(f"Received: {value}")\n\n# Usage\nco = coroutine()\nnext(co)  # Start coroutine\nco.send("Hello")\nco.send("World")',
  hint: 'next() starts coroutine, send() passes values to yield.'
},
{
  id: 'py_func_40',
  topicId: 'py_functions',
  question: 'Write a function that uses yield to create an infinite sequence.',
  mathSolution: 'Generators can produce infinite sequences lazily.',
  codeSolution: 'def infinite_sequence():\n    num = 0\n    while True:\n        yield num\n        num += 2  # Even numbers\n\n# Usage\nevens = infinite_sequence()\nfor _ in range(5):\n    print(next(evens))  # 0, 2, 4, 6, 8',
  hint: 'Be careful with infinite generators; use next() or break.'
},
{
  id: 'py_func_41',
  topicId: 'py_functions',
  question: 'Create a function that uses itertools for efficient looping.',
  mathSolution: 'itertools provides iterator building blocks.',
  codeSolution: 'import itertools\n\ndef cycle_example():\n    colors = ["red", "green", "blue"]\n    for color in itertools.cycle(colors):\n        print(color)\n        if input("Continue? (y/n): ").lower() == "n":\n            break',
  hint: 'cycle() infinitely repeats an iterable.'
},
{
  id: 'py_func_42',
  topicId: 'py_functions',
  question: 'Write a function that implements memoization manually.',
  mathSolution: 'Use dictionary to cache expensive function results.',
  codeSolution: 'def memoize(func):\n    cache = {}\n    def wrapper(n):\n        if n not in cache:\n            cache[n] = func(n)\n        return cache[n]\n    return wrapper\n\n@memoize\ndef slow_fibonacci(n):\n    if n <= 1:\n        return n\n    return slow_fibonacci(n-1) + slow_fibonacci(n-2)',
  hint: 'Memoization trades memory for speed.'
},
{
  id: 'py_func_43',
  topicId: 'py_functions',
  question: 'Create a function that uses __call__ to make objects callable.',
  mathSolution: 'Define __call__ method to make instances callable like functions.',
  codeSolution: 'class Multiplier:\n    def __init__(self, factor):\n        self.factor = factor\n    \n    def __call__(self, x):\n        return x * self.factor\n\ndouble = Multiplier(2)\ntriple = Multiplier(3)\n\nprint(double(5))  # 10\nprint(triple(5))  # 15',
  hint: '__call__ allows objects to be called like functions.'
},
{
  id: 'py_func_44',
  topicId: 'py_functions',
  question: 'Write a function that demonstrates function introspection.',
  mathSolution: 'Functions have attributes showing their properties.',
  codeSolution: 'def example(a, b=2):\n    """Example docstring"""\n    return a + b\n\nprint(f"Name: {example.__name__}")\nprint(f"Doc: {example.__doc__}")\nprint(f"Defaults: {example.__defaults__}")\nprint(f"Code: {example.__code__.co_varnames}")',
  hint: 'Functions store metadata in special attributes.'
},
{
  id: 'py_func_45',
  topicId: 'py_functions',
  question: 'Create a function that uses eval() to create dynamic functions.',
  mathSolution: 'Generate function code as string and evaluate.',
  codeSolution: 'def create_power_function(exponent):\n    code = f"def power(x):\\n    return x ** {exponent}"\n    namespace = {}\n    exec(code, namespace)\n    return namespace["power"]\n\nsquare = create_power_function(2)\ncube = create_power_function(3)\n\nprint(square(5))  # 25\nprint(cube(5))    # 125',
  hint: 'Dynamic function creation should be used sparingly.'
},
{
  id: 'py_func_46',
  topicId: 'py_functions',
  question: 'Write a function that implements the strategy pattern using functions.',
  mathSolution: 'Pass different functions as strategies.',
  codeSolution: 'def bubble_sort(arr):\n    return sorted(arr)\n\ndef quick_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[0]\n    less = [x for x in arr[1:] if x <= pivot]\n    greater = [x for x in arr[1:] if x > pivot]\n    return quick_sort(less) + [pivot] + quick_sort(greater)\n\ndef process_data(data, strategy):\n    return strategy(data)\n\n# Usage\nnumbers = [3, 1, 4, 1, 5]\nprint(process_data(numbers, bubble_sort))\nprint(process_data(numbers, quick_sort))',
  hint: 'Functions as first-class objects enable strategy pattern.'
},
{
  id: 'py_func_47',
  topicId: 'py_functions',
  question: 'Create a function that uses zip to combine multiple iterables.',
  mathSolution: 'zip combines iterables element-wise.',
  codeSolution: 'def combine_lists(names, ages, cities):\n    combined = []\n    for name, age, city in zip(names, ages, cities):\n        combined.append({"name": name, "age": age, "city": city})\n    return combined',
  hint: 'zip stops at shortest iterable; use zip_longest for all.'
},
{
  id: 'py_func_48',
  topicId: 'py_functions',
  question: 'Write a function that uses enumerate with custom start index.',
  mathSolution: 'enumerate adds counter to iterable.',
  codeSolution: 'def add_line_numbers(lines, start=1):\n    numbered = []\n    for i, line in enumerate(lines, start):\n        numbered.append(f"{i}: {line}")\n    return numbered',
  hint: 'enumerate(start=n) begins counting at n.'
},
{
  id: 'py_func_49',
  topicId: 'py_functions',
  question: 'Create a function that demonstrates function composition.',
  mathSolution: 'Combine multiple functions to create new functions.',
  codeSolution: 'def compose(*functions):\n    def composed(arg):\n        result = arg\n        for func in reversed(functions):\n            result = func(result)\n        return result\n    return composed\n\ndef add_one(x):\n    return x + 1\n\ndef square(x):\n    return x * x\n\ndef double(x):\n    return x * 2\n\n# Compose functions: add_one -> square -> double\nprocess = compose(double, square, add_one)\nprint(process(3))  # double(square(add_one(3))) = 32',
  hint: 'Function composition chains operations together.'
},
{
  id: 'py_func_50',
  topicId: 'py_functions',
  question: 'Write a function that implements pipe operator style data processing.',
  mathSolution: 'Create Pipe class that allows method chaining for functions.',
  codeSolution: 'class Pipe:\n    def __init__(self, value):\n        self.value = value\n    \n    def then(self, func, *args, **kwargs):\n        return Pipe(func(self.value, *args, **kwargs))\n    \n    def get(self):\n        return self.value\n\n# Usage\nresult = (Pipe([1, 2, 3, 4, 5])\n    .then(lambda x: [i*2 for i in x])\n    .then(lambda x: [i for i in x if i > 5])\n    .then(sum)\n    .get())\n\nprint(result)  # 6 + 8 + 10 = 24',
  hint: 'Pipe pattern enables fluent interfaces for data processing.'
}
);