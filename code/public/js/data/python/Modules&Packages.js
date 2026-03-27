QuizData.questions.push(
{
  id: 'py_mod_1',
  topicId: 'py_modules_packages',
  question: 'Import the math module and calculate the square root of 25.',
  mathSolution: 'Use import math then math.sqrt() function.',
  codeSolution: 'import math\nresult = math.sqrt(25)\nprint(result)  # Output: 5.0',
  hint: 'math.sqrt() returns floating point square root.'
},
{
  id: 'py_mod_2',
  topicId: 'py_modules_packages',
  question: 'Import only the sqrt function from math module.',
  mathSolution: 'Use from math import sqrt to import specific function.',
  codeSolution: 'from math import sqrt\nresult = sqrt(25)\nprint(result)  # Output: 5.0',
  hint: 'This allows using sqrt() directly without math prefix.'
},
{
  id: 'py_mod_3',
  topicId: 'py_modules_packages',
  question: 'Import math module with alias m and calculate pi value.',
  mathSolution: 'Use import math as m to create alias.',
  codeSolution: 'import math as m\nprint(m.pi)  # Output: 3.141592653589793',
  hint: 'Alias makes code shorter when module name is long.'
},
{
  id: 'py_mod_4',
  topicId: 'py_modules_packages',
  question: 'Use random module to generate a random integer between 1 and 10.',
  mathSolution: 'random.randint(a, b) returns random integer N such that a <= N <= b.',
  codeSolution: 'import random\nnum = random.randint(1, 10)\nprint(num)  # Random number between 1 and 10',
  hint: 'randint is inclusive of both endpoints.'
},
{
  id: 'py_mod_5',
  topicId: 'py_modules_packages',
  question: 'Use datetime module to get current date and time.',
  mathSolution: 'datetime.datetime.now() returns current date and time.',
  codeSolution: 'import datetime\nnow = datetime.datetime.now()\nprint(now)  # Output: YYYY-MM-DD HH:MM:SS.microseconds',
  hint: 'Use strftime() to format date in custom format.'
},
{
  id: 'py_mod_6',
  topicId: 'py_modules_packages',
  question: 'Create a custom module named mymath.py with add and subtract functions.',
  mathSolution: 'Create separate file with functions, then import.',
  codeSolution: '# mymath.py file\n\ndef add(a, b):\n    return a + b\n\ndef subtract(a, b):\n    return a - b\n\n# main.py file\nimport mymath\nprint(mymath.add(10, 5))      # Output: 15\nprint(mymath.subtract(10, 5)) # Output: 5',
  hint: 'Module file must be in same directory or Python path.'
},
{
  id: 'py_mod_7',
  topicId: 'py_modules_packages',
  question: 'Use os module to get current working directory.',
  mathSolution: 'os.getcwd() returns current working directory path.',
  codeSolution: 'import os\ncwd = os.getcwd()\nprint(f"Current directory: {cwd}")',
  hint: 'os module provides operating system dependent functionality.'
},
{
  id: 'py_mod_8',
  topicId: 'py_modules_packages',
  question: 'Use sys module to get Python version and platform information.',
  mathSolution: 'sys.version gives Python version, sys.platform gives OS.',
  codeSolution: 'import sys\nprint(f"Python version: {sys.version}")\nprint(f"Platform: {sys.platform}")',
  hint: 'sys module provides access to interpreter variables.'
},
{
  id: 'py_mod_9',
  topicId: 'py_modules_packages',
  question: 'Use json module to convert Python dict to JSON string.',
  mathSolution: 'json.dumps() serializes Python object to JSON string.',
  codeSolution: 'import json\ndata = {"name": "Alice", "age": 25, "city": "New York"}\njson_str = json.dumps(data, indent=2)\nprint(json_str)',
  hint: 'indent parameter makes JSON human-readable.'
},
{
  id: 'py_mod_10',
  topicId: 'py_modules_packages',
  question: 'Use json module to parse JSON string into Python dict.',
  mathSolution: 'json.loads() parses JSON string to Python object.',
  codeSolution: 'import json\njson_str = \'{"name": "Bob", "age": 30, "city": "London"}\'\ndata = json.loads(json_str)\nprint(data["name"])  # Output: Bob\nprint(type(data))    # Output: <class \'dict\'>',
  hint: 'JSON keys become dictionary keys.'
},
{
  id: 'py_mod_11',
  topicId: 'py_modules_packages',
  question: 'Use re module to check if a string matches a pattern.',
  mathSolution: 're.match() checks if pattern matches at beginning of string.',
  codeSolution: 'import re\npattern = r"^[A-Z][a-z]*$"\ntext = "Hello"\nif re.match(pattern, text):\n    print("Valid: Starts with capital, followed by lowercase")\nelse:\n    print("Invalid")',
  hint: 'r before string denotes raw string (backslashes not escaped).'
},
{
  id: 'py_mod_12',
  topicId: 'py_modules_packages',
  question: 'Use re module to find all email addresses in a text.',
  mathSolution: 're.findall() returns all non-overlapping matches.',
  codeSolution: 'import re\ntext = "Contact us at info@example.com or support@test.org"\nemails = re.findall(r"[\\w.-]+@[\\w.-]+\\.\\w+", text)\nprint(emails)  # Output: ["info@example.com", "support@test.org"]',
  hint: 'Regular expression pattern matches email format.'
},
{
  id: 'py_mod_13',
  topicId: 'py_modules_packages',
  question: 'Use collections.Counter to count elements in a list.',
  mathSolution: 'Counter creates dictionary of element frequencies.',
  codeSolution: 'from collections import Counter\nitems = ["apple", "banana", "apple", "orange", "banana", "apple"]\ncounts = Counter(items)\nprint(counts)  # Output: Counter({"apple": 3, "banana": 2, "orange": 1})',
  hint: 'most_common() returns elements sorted by frequency.'
},
{
  id: 'py_mod_14',
  topicId: 'py_modules_packages',
  question: 'Use collections.defaultdict to create dictionary with default value.',
  mathSolution: 'defaultdict provides default value for missing keys.',
  codeSolution: 'from collections import defaultdict\n# Default value for missing keys is 0\nword_count = defaultdict(int)\nwords = ["apple", "banana", "apple"]\nfor word in words:\n    word_count[word] += 1\nprint(dict(word_count))  # Output: {"apple": 2, "banana": 1}',
  hint: 'int() returns 0, list() returns empty list, etc.'
},
{
  id: 'py_mod_15',
  topicId: 'py_modules_packages',
  question: 'Use collections.deque for efficient queue operations.',
  mathSolution: 'deque supports O(1) append and pop from both ends.',
  codeSolution: 'from collections import deque\nqueue = deque(["first", "second", "third"])\nqueue.append("fourth")      # Add to right end\nqueue.appendleft("zeroth")  # Add to left end\nprint(queue.popleft())       # Remove from left: "zeroth"\nprint(queue.pop())           # Remove from right: "fourth"',
  hint: 'deque is faster than list for insert/pop at beginning.'
},
{
  id: 'py_mod_16',
  topicId: 'py_modules_packages',
  question: 'Use itertools.permutations to generate all permutations of a list.',
  mathSolution: 'permutations returns all possible ordered arrangements.',
  codeSolution: 'from itertools import permutations\nitems = [1, 2, 3]\nperms = list(permutations(items, 2))\nprint(perms)  # Output: [(1,2), (1,3), (2,1), (2,3), (3,1), (3,2)]',
  hint: 'Second argument specifies length of permutations.'
},
{
  id: 'py_mod_17',
  topicId: 'py_modules_packages',
  question: 'Use itertools.combinations to generate all combinations of a list.',
  mathSolution: 'combinations returns all possible unordered selections.',
  codeSolution: 'from itertools import combinations\nitems = [1, 2, 3, 4]\ncombs = list(combinations(items, 2))\nprint(combs)  # Output: [(1,2), (1,3), (1,4), (2,3), (2,4), (3,4)]',
  hint: 'Order doesn\'t matter in combinations.'
},
{
  id: 'py_mod_18',
  topicId: 'py_modules_packages',
  question: 'Use itertools.product to generate Cartesian product of iterables.',
  mathSolution: 'product returns all possible ordered pairs from multiple iterables.',
  codeSolution: 'from itertools import product\ncolors = ["red", "green"]\nsizes = ["S", "M", "L"]\nproducts = list(product(colors, sizes))\nprint(products)  # Output: [("red","S"), ("red","M"), ("red","L"), ("green","S"), ("green","M"), ("green","L")]',
  hint: 'repeat parameter allows product with same iterable.'
},
{
  id: 'py_mod_19',
  topicId: 'py_modules_packages',
  question: 'Use itertools.cycle to cycle through elements infinitely.',
  mathSolution: 'cycle creates infinite iterator that repeats the iterable.',
  codeSolution: 'from itertools import cycle\ncolors = cycle(["red", "green", "blue"])\nfor i, color in enumerate(colors):\n    print(color)\n    if i == 5:  # Stop after 6 items\n        break\n# Output: red, green, blue, red, green, blue',
  hint: 'Be careful with infinite iterators - always have break condition.'
},
{
  id: 'py_mod_20',
  topicId: 'py_modules_packages',
  question: 'Use itertools.groupby to group adjacent elements.',
  mathSolution: 'groupby groups consecutive elements with same key.',
  codeSolution: 'from itertools import groupby\ndata = [1, 1, 2, 2, 2, 3, 3, 1, 1]\nfor key, group in groupby(data):\n    print(f"{key}: {list(group)}")\n# Output:\n# 1: [1, 1]\n# 2: [2, 2, 2]\n# 3: [3, 3]\n# 1: [1, 1]',
  hint: 'groupby only groups consecutive identical elements.'
},
{
  id: 'py_mod_21',
  topicId: 'py_modules_packages',
  question: 'Use functools.reduce to compute product of all numbers in a list.',
  mathSolution: 'reduce cumulatively applies function to pairs of elements.',
  codeSolution: 'from functools import reduce\nnumbers = [1, 2, 3, 4, 5]\nproduct = reduce(lambda x, y: x * y, numbers)\nprint(product)  # Output: 120',
  hint: 'reduce is in functools module (not built-in).'
},
{
  id: 'py_mod_22',
  topicId: 'py_modules_packages',
  question: 'Use functools.partial to create a function with fixed arguments.',
  mathSolution: 'partial binds values to some arguments of a function.',
  codeSolution: 'from functools import partial\n\ndef power(base, exponent):\n    return base ** exponent\n\nsquare = partial(power, exponent=2)\ncube = partial(power, exponent=3)\n\nprint(square(5))  # Output: 25\nprint(cube(5))    # Output: 125',
  hint: 'partial is useful for creating specialized functions.'
},
{
  id: 'py_mod_23',
  topicId: 'py_modules_packages',
  question: 'Use functools.lru_cache to memoize Fibonacci function.',
  mathSolution: 'lru_cache caches results to avoid redundant computation.',
  codeSolution: 'from functools import lru_cache\n\n@lru_cache(maxsize=128)\ndef fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(50))  # Fast even for large n',
  hint: 'lru_cache stores function results in a cache.'
},
{
  id: 'py_mod_24',
  topicId: 'py_modules_packages',
  question: 'Create a package with multiple modules.',
  mathSolution: 'Create directory with __init__.py and module files.',
  codeSolution: '# Directory structure:\n# mypackage/\n#   __init__.py\n#   math_ops.py\n#   string_ops.py\n\n# mypackage/math_ops.py\ndef add(a, b):\n    return a + b\n\n# mypackage/string_ops.py\ndef capitalize(text):\n    return text.upper()\n\n# main.py\nfrom mypackage import math_ops, string_ops\nprint(math_ops.add(5, 3))           # Output: 8\nprint(string_ops.capitalize("hello")) # Output: HELLO',
  hint: '__init__.py can be empty or import modules.'
},
{
  id: 'py_mod_25',
  topicId: 'py_modules_packages',
  question: 'Use argparse module to parse command line arguments.',
  mathSolution: 'argparse creates command-line interfaces with argument parsing.',
  codeSolution: 'import argparse\n\nparser = argparse.ArgumentParser(description="Process some integers.")\nparser.add_argument("numbers", metavar="N", type=int, nargs="+", help="an integer for the accumulator")\nparser.add_argument("--sum", dest="accumulate", action="store_const", const=sum, default=max, help="sum the integers (default: find the max)")\n\nargs = parser.parse_args()\nprint(args.accumulate(args.numbers))\n\n# Command line: python program.py 1 2 3 4 --sum\n# Output: 10',
  hint: 'Run with --help to see automatically generated help.'
},
{
  id: 'py_mod_26',
  topicId: 'py_modules_packages',
  question: 'Use logging module to log messages with different severity levels.',
  mathSolution: 'logging provides flexible logging system.',
  codeSolution: 'import logging\n\nlogging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")\n\nlogging.debug("Debug message")    # Won\'t appear (level=INFO)\nlogging.info("Info message")       # Will appear\nlogging.warning("Warning message") # Will appear\nlogging.error("Error message")     # Will appear',
  hint: 'Levels: DEBUG, INFO, WARNING, ERROR, CRITICAL.'
},
{
  id: 'py_mod_27',
  topicId: 'py_modules_packages',
  question: 'Use subprocess module to run system commands.',
  mathSolution: 'subprocess.run() executes command and returns result.',
  codeSolution: 'import subprocess\n\n# Run command and capture output\nresult = subprocess.run(["echo", "Hello World"], capture_output=True, text=True)\nprint(result.stdout)  # Output: Hello World\n\n# Check return code\nresult = subprocess.run(["ls", "nonexistent"], capture_output=True, text=True)\nprint(f"Return code: {result.returncode}")  # Non-zero for error',
  hint: 'capture_output=True captures stdout and stderr.'
},
{
  id: 'py_mod_28',
  topicId: 'py_modules_packages',
  question: 'Use pathlib module for path manipulation.',
  mathSolution: 'pathlib provides object-oriented filesystem paths.',
  codeSolution: 'from pathlib import Path\n\n# Create Path object\npath = Path("/home/user/documents/file.txt")\n\nprint(path.name)        # Output: file.txt\nprint(path.stem)        # Output: file\nprint(path.suffix)      # Output: .txt\nprint(path.parent)      # Output: /home/user/documents\nprint(path.exists())    # Check if file exists',
  hint: 'Path objects work across different operating systems.'
},
{
  id: 'py_mod_29',
  topicId: 'py_modules_packages',
  question: 'Use shutil module for high-level file operations.',
  mathSolution: 'shutil provides functions for copying, moving, and deleting files.',
  codeSolution: 'import shutil\nimport os\n\n# Copy file\nshutil.copy("source.txt", "destination.txt")\n\n# Copy entire directory tree\nshutil.copytree("source_dir", "backup_dir")\n\n# Move file\nshutil.move("old.txt", "new.txt")\n\n# Remove directory tree\nshutil.rmtree("temp_dir")',
  hint: 'shutil operations are more powerful than basic os functions.'
},
{
  id: 'py_mod_30',
  topicId: 'py_modules_packages',
  question: 'Use glob module to find files matching pattern.',
  mathSolution: 'glob returns list of paths matching Unix-style pattern.',
  codeSolution: 'import glob\n\n# Find all .txt files\ntext_files = glob.glob("*.txt")\nprint(text_files)  # List of .txt files in current directory\n\n# Recursive search\nall_py = glob.glob("**/*.py", recursive=True)\nprint(all_py)  # All Python files in subdirectories',
  hint: '** matches any number of subdirectories.'
},
{
  id: 'py_mod_31',
  topicId: 'py_modules_packages',
  question: 'Use pickle module to serialize and deserialize Python objects.',
  mathSolution: 'pickle converts Python objects to byte streams and back.',
  codeSolution: 'import pickle\n\ndata = {"name": "Alice", "scores": [85, 90, 78], "active": True}\n\n# Serialize to file\nwith open("data.pkl", "wb") as f:\n    pickle.dump(data, f)\n\n# Deserialize from file\nwith open("data.pkl", "rb") as f:\n    loaded_data = pickle.load(f)\n\nprint(loaded_data)  # Original dictionary restored',
  hint: 'Always use binary mode ("wb"/"rb") for pickle files.'
},
{
  id: 'py_mod_32',
  topicId: 'py_modules_packages',
  question: 'Use csv module to read and write CSV files.',
  mathSolution: 'csv module handles comma-separated value files.',
  codeSolution: 'import csv\n\n# Writing CSV\nwith open("data.csv", "w", newline="") as f:\n    writer = csv.writer(f)\n    writer.writerow(["Name", "Age", "City"])\n    writer.writerow(["Alice", 25, "New York"])\n    writer.writerow(["Bob", 30, "London"])\n\n# Reading CSV\nwith open("data.csv", "r") as f:\n    reader = csv.reader(f)\n    for row in reader:\n        print(row)',
  hint: 'newline="" prevents extra blank lines on Windows.'
},
{
  id: 'py_mod_33',
  topicId: 'py_modules_packages',
  question: 'Use time module for timing code execution.',
  mathSolution: 'time.time() returns current time in seconds.',
  codeSolution: 'import time\n\nstart = time.time()\n\n# Simulate work\ntime.sleep(2)\n\nend = time.time()\nprint(f"Execution time: {end - start:.2f} seconds")\n\n# Get formatted local time\nprint(time.strftime("%Y-%m-%d %H:%M:%S"))',
  hint: 'time.perf_counter() is more accurate for benchmarking.'
},
{
  id: 'py_mod_34',
  topicId: 'py_modules_packages',
  question: 'Use threading module to run functions concurrently.',
  mathSolution: 'Thread allows multiple operations to run in parallel.',
  codeSolution: 'import threading\nimport time\n\ndef print_numbers():\n    for i in range(5):\n        print(f"Number: {i}")\n        time.sleep(1)\n\ndef print_letters():\n    for letter in "ABCDE":\n        print(f"Letter: {letter}")\n        time.sleep(1)\n\n# Create threads\nt1 = threading.Thread(target=print_numbers)\nt2 = threading.Thread(target=print_letters)\n\n# Start threads\nt1.start()\nt2.start()\n\n# Wait for completion\nt1.join()\nt2.join()\nprint("Both threads completed")',
  hint: 'join() waits for thread to finish.'
},
{
  id: 'py_mod_35',
  topicId: 'py_modules_packages',
  question: 'Use multiprocessing module for parallel processing.',
  mathSolution: 'Process runs in separate memory space for true parallelism.',
  codeSolution: 'import multiprocessing\n\ndef square(n):\n    return n * n\n\nif __name__ == "__main__":\n    numbers = [1, 2, 3, 4, 5]\n    with multiprocessing.Pool(processes=3) as pool:\n        results = pool.map(square, numbers)\n    print(results)  # Output: [1, 4, 9, 16, 25]',
  hint: 'Protect entry point with if __name__ == "__main__" on Windows.'
},
{
  id: 'py_mod_36',
  topicId: 'py_modules_packages',
  question: 'Use queue module for thread-safe communication.',
  mathSolution: 'Queue provides safe exchange of data between threads.',
  codeSolution: 'import threading\nimport queue\nimport time\n\ndef producer(q):\n    for i in range(5):\n        q.put(f"Item {i}")\n        print(f"Produced: Item {i}")\n        time.sleep(1)\n\ndef consumer(q):\n    while True:\n        item = q.get()\n        if item is None:\n            break\n        print(f"Consumed: {item}")\n        q.task_done()\n\nq = queue.Queue()\nt1 = threading.Thread(target=producer, args=(q,))\nt2 = threading.Thread(target=consumer, args=(q,))\n\nt1.start()\nt2.start()\n\nt1.join()\nq.put(None)  # Signal consumer to stop\nt2.join()',
  hint: 'Queue handles synchronization automatically.'
},
{
  id: 'py_mod_37',
  topicId: 'py_modules_packages',
  question: 'Use urllib.request to fetch data from a URL.',
  mathSolution: 'urllib.request can download web content.',
  codeSolution: 'import urllib.request\n\nurl = "https://api.github.com"\ntry:\n    response = urllib.request.urlopen(url)\n    data = response.read()\n    print(f"Status: {response.status}")\n    print(f"Data length: {len(data)} bytes")\nexcept urllib.error.URLError as e:\n    print(f"Error: {e.reason}")',
  hint: 'response.read() returns bytes, decode() to get string.'
},
{
  id: 'py_mod_38',
  topicId: 'py_modules_packages',
  question: 'Use smtplib to send email via SMTP.',
  mathSolution: 'smtplib handles SMTP protocol for sending emails.',
  codeSolution: 'import smtplib\nfrom email.message import EmailMessage\n\nmsg = EmailMessage()\nmsg.set_content("This is a test email.")\nmsg["Subject"] = "Test from Python"\nmsg["From"] = "sender@example.com"\nmsg["To"] = "receiver@example.com"\n\ntry:\n    server = smtplib.SMTP("smtp.gmail.com", 587)\n    server.starttls()\n    server.login("username", "password")\n    server.send_message(msg)\n    server.quit()\n    print("Email sent")\nexcept Exception as e:\n    print(f"Error: {e}")',
  hint: 'Use app passwords for Gmail with 2-factor authentication.'
},
{
  id: 'py_mod_39',
  topicId: 'py_modules_packages',
  question: 'Use sqlite3 module to create and query a database.',
  mathSolution: 'sqlite3 provides built-in SQL database functionality.',
  codeSolution: 'import sqlite3\n\n# Connect to database (creates if not exists)\nconn = sqlite3.connect("example.db")\ncursor = conn.cursor()\n\n# Create table\ncursor.execute("""CREATE TABLE IF NOT EXISTS users\n                  (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)""")\n\n# Insert data\ncursor.execute("INSERT INTO users (name, age) VALUES (?, ?)", ("Alice", 25))\n\n# Query data\ncursor.execute("SELECT * FROM users")\nrows = cursor.fetchall()\nfor row in rows:\n    print(row)\n\n# Commit and close\nconn.commit()\nconn.close()',
  hint: 'Use parameterized queries to prevent SQL injection.'
},
{
  id: 'py_mod_40',
  topicId: 'py_modules_packages',
  question: 'Use hashlib module to create MD5 hash of a string.',
  mathSolution: 'hashlib implements secure hash functions.',
  codeSolution: 'import hashlib\n\ndef md5_hash(text):\n    return hashlib.md5(text.encode()).hexdigest()\n\npassword = "mysecretpassword"\nhash_value = md5_hash(password)\nprint(f"MD5: {hash_value}")',
  hint: 'encode() converts string to bytes, hexdigest() returns hex string.'
},
{
  id: 'py_mod_41',
  topicId: 'py_modules_packages',
  question: 'Use secrets module to generate cryptographically strong random numbers.',
  mathSolution: 'secrets provides secure random functions for security-sensitive apps.',
  codeSolution: 'import secrets\nimport string\n\n# Generate secure random token\ntoken = secrets.token_hex(16)\nprint(f"Token: {token}")\n\n# Generate random password\nalphabet = string.ascii_letters + string.digits\npassword = "".join(secrets.choice(alphabet) for _ in range(12))\nprint(f"Password: {password}")\n\n# Secure random integer\nsecure_num = secrets.randbelow(100)\nprint(f"Secure random (0-99): {secure_num}")',
  hint: 'secrets should be used for passwords, tokens, etc., not random module.'
},
{
  id: 'py_mod_42',
  topicId: 'py_modules_packages',
  question: 'Use statistics module for basic statistical operations.',
  mathSolution: 'statistics provides functions for mean, median, mode, etc.',
  codeSolution: 'import statistics\n\ndata = [2, 5, 3, 8, 9, 5, 2, 7]\n\nprint(f"Mean: {statistics.mean(data)}")      # Average\nprint(f"Median: {statistics.median(data)}")    # Middle value\nprint(f"Mode: {statistics.mode(data)}")        # Most common\nprint(f"Stdev: {statistics.stdev(data):.2f}") # Sample standard deviation',
  hint: 'stdev() uses sample variance (n-1 denominator).'
},
{
  id: 'py_mod_43',
  topicId: 'py_modules_packages',
  question: 'Use zipfile module to create and extract ZIP archives.',
  mathSolution: 'zipfile provides tools for working with ZIP files.',
  codeSolution: 'import zipfile\n\n# Create ZIP file\nwith zipfile.ZipFile("archive.zip", "w") as zipf:\n    zipf.write("file1.txt")\n    zipf.write("file2.txt")\n    zipf.write("file3.txt")\n\n# Extract ZIP file\nwith zipfile.ZipFile("archive.zip", "r") as zipf:\n    zipf.extractall("extracted_files")\n    # List contents\n    print(zipf.namelist())\n    # Get info about a file\n    info = zipf.getinfo("file1.txt")\n    print(f"Size: {info.file_size} bytes")',
  hint: 'Use ZIP_DEFLATED for compression (requires zlib).'
},
{
  id: 'py_mod_44',
  topicId: 'py_modules_packages',
  question: 'Use tarfile module to work with tar archives.',
  mathSolution: 'tarfile handles .tar, .tar.gz, .tar.bz2 files.',
  codeSolution: 'import tarfile\n\n# Create tar.gz archive\nwith tarfile.open("archive.tar.gz", "w:gz") as tar:\n    tar.add("file1.txt")\n    tar.add("file2.txt")\n    tar.add("directory", recursive=True)\n\n# Extract tar.gz\nwith tarfile.open("archive.tar.gz", "r:gz") as tar:\n    tar.extractall("extracted")\n    # List contents\n    for member in tar.getmembers():\n        print(f"{member.name} ({member.size} bytes)")',
  hint: 'Mode: w:gz for gzip compression, w:bz2 for bzip2.'
},
{
  id: 'py_mod_45',
  topicId: 'py_modules_packages',
  question: 'Use tempfile module to create temporary files and directories.',
  mathSolution: 'tempfile creates files that are automatically deleted.',
  codeSolution: 'import tempfile\nimport os\n\n# Temporary file (deleted when closed)\nwith tempfile.TemporaryFile(mode="w+") as temp:\n    temp.write("Temporary data")\n    temp.seek(0)\n    print(temp.read())\n\n# Temporary named file (can be accessed by name)\nwith tempfile.NamedTemporaryFile(mode="w+", delete=True) as temp:\n    print(f"Temp file: {temp.name}")\n    temp.write("Data")\n    temp.flush()\n\n# Temporary directory\nwith tempfile.TemporaryDirectory() as temp_dir:\n    print(f"Temp dir: {temp_dir}")\n    file_path = os.path.join(temp_dir, "test.txt")\n    with open(file_path, "w") as f:\n        f.write("Hello")\n    # Directory and contents deleted when exiting context',
  hint: 'Files are automatically cleaned up when closed.'
},
{
  id: 'py_mod_46',
  topicId: 'py_modules_packages',
  question: 'Use contextlib module to create context managers.',
  mathSolution: 'contextlib provides utilities for working with context managers.',
  codeSolution: 'from contextlib import contextmanager\n\n@contextmanager\ndef managed_resource(*args, **kwargs):\n    # Setup (enter)\n    resource = acquire_resource(*args, **kwargs)\n    try:\n        yield resource\n    finally:\n        # Cleanup (exit)\n        release_resource(resource)\n\n# Usage\nwith managed_resource() as res:\n    # Use resource\n    res.do_something()\n\n# Example: timing context manager\nimport time\n\n@contextmanager\ndef timer(name):\n    start = time.time()\n    try:\n        yield\n    finally:\n        elapsed = time.time() - start\n        print(f"{name} took {elapsed:.4f} seconds")\n\nwith timer("Sleep operation"):\n    time.sleep(1.5)',
  hint: 'contextmanager turns generator into context manager.'
},
{
  id: 'py_mod_47',
  topicId: 'py_modules_packages',
  question: 'Use importlib to import modules dynamically.',
  mathSolution: 'importlib allows programmatic module loading.',
  codeSolution: 'import importlib\n\n# Import module by name string\nmodule_name = "math"\ntry:\n    math_module = importlib.import_module(module_name)\n    print(math_module.sqrt(25))  # Output: 5.0\nexcept ImportError:\n    print(f"Module {module_name} not found")\n\n# Reload a module (useful during development)\nimport mymodule\nimportlib.reload(mymodule)\n\n# Check if module exists\nimport importlib.util\nspec = importlib.util.find_spec("numpy")\nif spec is not None:\n    print("NumPy is installed")\nelse:\n    print("NumPy not installed")',
  hint: 'Useful for plugins and dynamic code loading.'
},
{
  id: 'py_mod_48',
  topicId: 'py_modules_packages',
  question: 'Use pkgutil to discover and work with packages.',
  mathSolution: 'pkgutil provides utilities for package discovery.',
  codeSolution: 'import pkgutil\n\n# List all installed packages\nfor module_info in pkgutil.iter_modules():\n    print(f"{module_info.name} (package: {module_info.ispkg})")\n\n# Get data from package\nimport mypackage\ndata = pkgutil.get_data("mypackage", "data/config.json")\nif data:\n    print(data.decode())\n\n# Walk through packages\nfor finder, name, ispkg in pkgutil.walk_packages():\n    print(f"Found {name}: package if ispkg else module")',
  hint: 'get_data() works even for modules in ZIP files.'
},
{
  id: 'py_mod_49',
  topicId: 'py_modules_packages',
  question: 'Create an __init__.py file to define package exports.',
  mathSolution: '__init__.py controls what gets imported from package.',
  codeSolution: '# mypackage/__init__.py\n"""My package documentation."""\n\n# Control what gets imported with *\n__all__ = ["public_function", "PublicClass"]\n\n# Import commonly used modules\nfrom . import module1\nfrom .module2 import public_function, PublicClass\n\n# Package-level initialization\nprint("Initializing mypackage")\n\n# Define package version\n__version__ = "1.0.0"\n\n# main.py\nimport mypackage\nprint(mypackage.__version__)  # Access package version\nprint(mypackage.public_function())  # Use imported function',
  hint: '__init__.py runs when package is first imported.'
},
{
  id: 'py_mod_50',
  topicId: 'py_modules_packages',
  question: 'Use pip programmatically to install packages.',
  mathSolution: 'Use subprocess or pip module to install packages.',
  codeSolution: 'import subprocess\nimport sys\n\ndef install_package(package_name):\n    """Install package using pip."""\n    try:\n        subprocess.check_call([sys.executable, "-m", "pip", "install", package_name])\n        print(f"Successfully installed {package_name}")\n        return True\n    except subprocess.CalledProcessError as e:\n        print(f"Failed to install {package_name}: {e}")\n        return False\n\n# Alternative using pip module (if available)\ntry:\n    import pip\n    # For newer pip versions\n    from pip._internal import main as pip_main\n    pip_main(["install", "requests"])\nexcept ImportError:\n    print("Pip module not available")\n\n# Check if package is installed\nimport importlib.util\n\ndef is_package_installed(package_name):\n    spec = importlib.util.find_spec(package_name)\n    return spec is not None\n\n# Usage\nprint(f"Requests installed: {is_package_installed(requests)}")',
  hint: 'Using subprocess is more reliable than pip module directly.'
}
);