QuizData.questions.push({
    Id: "py_regex_1",
    topicId: "py_regex",
    question: "Write a regex pattern to match a simple email address (username@domain.com).",
    mathSolution: "Email pattern: username@domain.extension",
    codeSolution: "import re\n\nemails = ['user@example.com', 'john.doe@company.co.uk', 'invalid@email', 'noatsign.com']\n\npattern = r'^[\\w\\.-]+@[\\w\\.-]+\\.\\w+$'\n\nfor email in emails:\n    if re.match(pattern, email):\n        print(f'Valid: {email}')\n    else:\n        print(f'Invalid: {email}')",
    hint: "Use \\w for word characters, \\. for dot, + for one or more"
  },
  {
    Id: "py_regex_2",
    topicId: "py_regex",
    question: "Write a regex to validate a phone number in format (XXX) XXX-XXXX or XXX-XXX-XXXX.",
    mathSolution: "Phone pattern: optional area code in parentheses, then number",
    codeSolution: "import re\n\nphones = ['(123) 456-7890', '987-654-3210', '1234567890', '(123)456-7890']\n\npattern = r'^(\\(\\d{3}\\)|\\d{3})[- ]?\\d{3}[- ]?\\d{4}$'\n\nfor phone in phones:\n    if re.match(pattern, phone):\n        print(f'Valid: {phone}')\n    else:\n        print(f'Invalid: {phone}')",
    hint: "Use \\( for literal (, \\d for digit, {3} for exactly 3"
  },
  {
    Id: "py_regex_3",
    topicId: "py_regex",
    question: "Write a regex to extract all URLs from a text.",
    mathSolution: "URL pattern: protocol://domain/path?query#fragment",
    codeSolution: "import re\n\ntext = \"\"\"Visit https://www.example.com for more info.\nCheck out http://sub.domain.co.uk/page?q=python#section.\nAlso ftp://files.example.org and invalid URL: www.test.\"\"\"\n\npattern = r'https?://[\\w\\.-]+(?:/[\\w\\.-]*)*(?:\\?[\\w\\.-]+=[\\w\\.-]*(?:&[\\w\\.-]+=[\\w\\.-]*)*)?(?:#[\\w\\.-]*)?'\n\nurls = re.findall(pattern, text)\nprint('Found URLs:')\nfor url in urls:\n    print(f'  {url}')",
    hint: "Use ? for optional parts, * for zero or more, non-capturing groups (?:...)"
  },
  {
    Id: "py_regex_4",
    topicId: "py_regex",
    question: "Write a regex to validate a strong password (min 8 chars, at least one uppercase, one lowercase, one digit, one special char).",
    mathSolution: "Password must meet multiple criteria using lookaheads",
    codeSolution: "import re\n\npasswords = ['Pass123!', 'weak', 'StrongP@ss1', 'NoSpecial1', 'SHORT!1']\n\npattern = r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'\n\nfor pwd in passwords:\n    if re.match(pattern, pwd):\n        print(f'Strong: {pwd}')\n    else:\n        print(f'Weak: {pwd}')",
    hint: "Use (?=.*[a-z]) for lookahead assertions"
  },
  {
    Id: "py_regex_5",
    topicId: "py_regex",
    question: "Write a regex to match dates in format YYYY-MM-DD, DD/MM/YYYY, and MM-DD-YYYY.",
    mathSolution: "Date pattern with different separators",
    codeSolution: "import re\n\ndates = ['2024-01-15', '15/01/2024', '01-15-2024', '2024/01/15', '15-01-2024']\n\npattern = r'^(\\d{4}[-/]\\d{2}[-/]\\d{2}|\\d{2}[-/]\\d{2}[-/]\\d{4})$'\n\nfor date in dates:\n    if re.match(pattern, date):\n        print(f'Valid date format: {date}')\n    else:\n        print(f'Invalid format: {date}')",
    hint: "Use | for alternation between different formats"
  },
  {
    Id: "py_regex_6",
    topicId: "py_regex",
    question: "Write a regex to extract all hashtags from a tweet.",
    mathSolution: "Hashtags start with # followed by letters/numbers/underscore",
    codeSolution: "import re\n\ntweet = \"Loving #Python and #Regex! Also #100DaysOfCode #python3 🐍\"\n\npattern = r'#\\w+'\n\nhashtags = re.findall(pattern, tweet)\nprint('Hashtags found:')\nfor tag in hashtags:\n    print(f'  {tag}')",
    hint: "Use # followed by \\w+ for word characters"
  },
  {
    Id: "py_regex_7",
    topicId: "py_regex",
    question: "Write a regex to validate an IP address (IPv4).",
    mathSolution: "IPv4: four numbers 0-255 separated by dots",
    codeSolution: "import re\n\nips = ['192.168.1.1', '256.100.50.25', '0.0.0.0', '1.2.3.4.5', 'abc.def.ghi.jkl']\n\npattern = r'^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$'\n\nfor ip in ips:\n    if re.match(pattern, ip):\n        print(f'Valid IP: {ip}')\n    else:\n        print(f'Invalid IP: {ip}')",
    hint: "Use 25[0-5] for 250-255, 2[0-4][0-9] for 200-249, [01]?[0-9][0-9]? for 0-199"
  },
  {
    Id: "py_regex_8",
    topicId: "py_regex",
    question: "Write a regex to extract all numbers (integers and decimals) from a string.",
    mathSolution: "Numbers can have optional decimal point and sign",
    codeSolution: "import re\n\ntext = \"The price is $45.99, quantity: 10, total: -459.50, code: 007, temp: -5°C\"\n\npattern = r'-?\\d+\\.?\\d*'\n\nnumbers = re.findall(pattern, text)\nprint('Numbers found:')\nfor num in numbers:\n    print(f'  {num}')",
    hint: "Use -? for optional negative sign, \\d+ for digits, \\.? for optional dot"
  },
  {
    Id: "py_regex_9",
    topicId: "py_regex",
    question: "Write a regex to match HTML tags and extract their content.",
    mathSolution: "HTML tags: <tag>content</tag> or self-closing <tag/>",
    codeSolution: "import re\n\nhtml = '<div class=\"container\">Hello <b>World</b>!</div><img src=\"image.jpg\"/>'\n\n# Find all tags\npattern_tags = r'<[^>]+>'\ntags = re.findall(pattern_tags, html)\nprint('Tags found:')\nfor tag in tags:\n    print(f'  {tag}')\n\n# Extract content between tags\npattern_content = r'<([^>]+)>([^<]+)</\\1>'\nmatches = re.findall(pattern_content, html)\nprint('\\nTag-content pairs:')\nfor tag, content in matches:\n    print(f'  <{tag}>: {content}')",
    hint: "Use backreference \\1 to match closing tag"
  },
  {
    Id: "py_regex_10",
    topicId: "py_regex",
    question: "Write a regex to validate a credit card number (16 digits, may have spaces or hyphens).",
    mathSolution: "Credit card: 4 groups of 4 digits separated by space or hyphen",
    codeSolution: "import re\n\ncards = ['1234 5678 9012 3456', '1234-5678-9012-3456', '1234567890123456', '1234 5678 9012 345']\n\npattern = r'^(\\d{4}[ -]?){3}\\d{4}$'\n\nfor card in cards:\n    if re.match(pattern, card):\n        print(f'Valid: {card}')\n    else:\n        print(f'Invalid: {card}')",
    hint: "Use {3} for three groups of four digits with optional separator"
  },
  {
    Id: "py_regex_11",
    topicId: "py_regex",
    question: "Write a regex to extract all mentions (@username) from a text.",
    mathSolution: "Mentions start with @ followed by letters, numbers, underscores",
    codeSolution: "import re\n\ntext = \"Hey @john, check out @jane_doe's post! Also @user123 and @invalid-username.\"\n\npattern = r'@[\\w_]+'\n\nmentions = re.findall(pattern, text)\nprint('Mentions found:')\nfor mention in mentions:\n    print(f'  {mention}')",
    hint: "Use @ followed by word characters and underscore"
  },
  {
    Id: "py_regex_12",
    topicId: "py_regex",
    question: "Write a regex to validate a time in 12-hour format (HH:MM AM/PM).",
    mathSolution: "12-hour time: 1-12, then :MM, then AM or PM",
    codeSolution: "import re\n\ntimes = ['12:30 PM', '01:15 AM', '13:45 PM', '12:60 AM', '9:05 PM']\n\npattern = r'^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$'\n\nfor t in times:\n    if re.match(pattern, t):\n        print(f'Valid: {t}')\n    else:\n        print(f'Invalid: {t}')",
    hint: "Hours: 01-12, minutes: 00-59, AM/PM case sensitive"
  },
  {
    Id: "py_regex_13",
    topicId: "py_regex",
    question: "Write a regex to validate a time in 24-hour format (HH:MM).",
    mathSolution: "24-hour time: 00-23 hours, 00-59 minutes",
    codeSolution: "import re\n\ntimes = ['23:59', '00:00', '24:00', '12:30', '25:15', '09:60']\n\npattern = r'^([01][0-9]|2[0-3]):[0-5][0-9]$'\n\nfor t in times:\n    if re.match(pattern, t):\n        print(f'Valid: {t}')\n    else:\n        print(f'Invalid: {t}')",
    hint: "Hours: 00-23 using | for alternation"
  },
  {
    Id: "py_regex_14",
    topicId: "py_regex",
    question: "Write a regex to extract all sentences from a paragraph.",
    mathSolution: "Sentences end with ., !, or ? followed by space or end",
    codeSolution: "import re\n\nparagraph = \"Hello world! How are you today? I'm fine. This is a test...\"\n\npattern = r'[^.!?]+[.!?]'\n\nsentences = re.findall(pattern, paragraph)\nprint('Sentences:')\nfor i, sentence in enumerate(sentences, 1):\n    print(f'{i}. {sentence.strip()}')",
    hint: "Match anything not ending punctuation, then punctuation"
  },
  {
    Id: "py_regex_15",
    topicId: "py_regex",
    question: "Write a regex to validate a ZIP code (US: 5 digits or 5+4).",
    mathSolution: "ZIP: 5 digits, optionally hyphen and 4 more digits",
    codeSolution: "import re\n\nzips = ['12345', '12345-6789', '1234', '123456', '12345-678']\n\npattern = r'^\\d{5}(-\\d{4})?$'\n\nfor z in zips:\n    if re.match(pattern, z):\n        print(f'Valid ZIP: {z}')\n    else:\n        print(f'Invalid ZIP: {z}')",
    hint: "Use ? for optional -xxxx part"
  },
  {
    Id: "py_regex_16",
    topicId: "py_regex",
    question: "Write a regex to extract all words starting with a capital letter.",
    mathSolution: "Words beginning with uppercase letter",
    codeSolution: "import re\n\ntext = \"John went to Paris and London. He visited The Eiffel Tower.\"\n\npattern = r'\\b[A-Z][a-z]*\\b'\n\nwords = re.findall(pattern, text)\nprint('Capitalized words:')\nfor word in words:\n    print(f'  {word}')",
    hint: "Use \\b for word boundary, [A-Z] for first letter"
  },
  {
    Id: "py_regex_17",
    topicId: "py_regex",
    question: "Write a regex to validate a hexadecimal color code (#RGB or #RRGGBB).",
    mathSolution: "Hex color: # followed by 3 or 6 hex digits",
    codeSolution: "import re\n\ncolors = ['#FFF', '#123456', '#ABC', '#GHI', '123456', '#12345']\n\npattern = r'^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$'\n\nfor color in colors:\n    if re.match(pattern, color):\n        print(f'Valid: {color}')\n    else:\n        print(f'Invalid: {color}')",
    hint: "Hex digits: A-F, a-f, 0-9, use | for 3 or 6 digits"
  },
  {
    Id: "py_regex_18",
    topicId: "py_regex",
    question: "Write a regex to extract all domain names from email addresses.",
    mathSolution: "Domain is after @ and before last dot",
    codeSolution: "import re\n\nemails = ['user@example.com', 'admin@company.co.uk', 'test@sub.domain.org']\n\npattern = r'@([\\w\\.-]+)'\n\nfor email in emails:\n    match = re.search(pattern, email)\n    if match:\n        print(f'{email} -> domain: {match.group(1)}')",
    hint: "Capture group after @"
  },
  {
    Id: "py_regex_19",
    topicId: "py_regex",
    question: "Write a regex to validate a username (letters, numbers, underscore, 3-16 chars).",
    mathSolution: "Username: alphanumeric and underscore, 3-16 characters",
    codeSolution: "import re\n\nusernames = ['john_123', 'ab', 'user@name', 'this_is_a_very_long_username', 'valid123']\n\npattern = r'^[a-zA-Z0-9_]{3,16}$'\n\nfor name in usernames:\n    if re.match(pattern, name):\n        print(f'Valid: {name}')\n    else:\n        print(f'Invalid: {name}')",
    hint: "Use {3,16} for length constraint"
  },
  {
    Id: "py_regex_20",
    topicId: "py_regex",
    question: "Write a regex to extract all currency amounts ($10.50, $5, $100.00).",
    mathSolution: "Currency: $ followed by digits, optional decimal",
    codeSolution: "import re\n\ntext = \"Total: $45.99, tax: $3.50, discount: $10, price: $100.00, invalid: $45.9\"\n\npattern = r'\\$\\d+\\.\\d{2}|\\$\\d+'\n\namounts = re.findall(pattern, text)\nprint('Currency amounts:')\nfor amount in amounts:\n    print(f'  {amount}')",
    hint: "Match $ followed by digits, then optional . and 2 digits"
  },
  {
    Id: "py_regex_21",
    topicId: "py_regex",
    question: "Write a regex to validate a MAC address (XX:XX:XX:XX:XX:XX).",
    mathSolution: "MAC: 6 groups of 2 hex digits separated by colon or hyphen",
    codeSolution: "import re\n\nmacs = ['00:1A:2B:3C:4D:5E', '00-1A-2B-3C-4D-5E', '00:1A:2B:3C:4D', 'GG:HH:II:JJ:KK:LL']\n\npattern = r'^([0-9A-Fa-f]{2}[:-]){5}[0-9A-Fa-f]{2}$'\n\nfor mac in macs:\n    if re.match(pattern, mac):\n        print(f'Valid MAC: {mac}')\n    else:\n        print(f'Invalid MAC: {mac}')",
    hint: "Use {2} for two hex digits, {5} for five groups with separator"
  },
  {
    Id: "py_regex_22",
    topicId: "py_regex",
    question: "Write a regex to extract all programming language mentions from a text.",
    mathSolution: "Common language names like Python, Java, JavaScript, etc.",
    codeSolution: "import re\n\ntext = \"I love Python and JavaScript, but Java is also good. C++ is fast.\"\n\nlanguages = ['Python', 'Java', 'JavaScript', 'C\\+\\+', 'Ruby', 'PHP', 'Swift']\npattern = r'\\b(' + '|'.join(languages) + r')\\b'\n\nmatches = re.findall(pattern, text)\nprint('Languages found:')\nfor lang in matches:\n    print(f'  {lang}')",
    hint: "Use \\b for word boundaries, join with | for alternation"
  },
  {
    Id: "py_regex_23",
    topicId: "py_regex",
    question: "Write a regex to validate a social security number (XXX-XX-XXXX).",
    mathSolution: "SSN: 3 digits, hyphen, 2 digits, hyphen, 4 digits",
    codeSolution: "import re\n\nssns = ['123-45-6789', '123456789', '123-45-678', '000-00-0000', '123-45-67890']\n\npattern = r'^\\d{3}-\\d{2}-\\d{4}$'\n\nfor ssn in ssns:\n    if re.match(pattern, ssn):\n        print(f'Valid SSN: {ssn}')\n    else:\n        print(f'Invalid SSN: {ssn}')",
    hint: "Simple pattern: three digits, hyphen, two digits, hyphen, four digits"
  },
  {
    Id: "py_regex_24",
    topicId: "py_regex",
    question: "Write a regex to extract all quoted strings (single or double quotes).",
    mathSolution: "Strings inside quotes, handling escaped quotes",
    codeSolution: "import re\n\ntext = 'She said \"Hello\", and he replied \'Hi there!\'. \"Escaped \\\"quote\\\"\"'\n\npattern = r'\"([^\"\\\\]*(\\\\.[^\"\\\\]*)*)\"|\\'([^\\'\\\\]*(\\\\.[^\\'\\\\]*)*)\\''\n\nquotes = re.findall(pattern, text)\nprint('Quoted strings:')\nfor match in quotes:\n    # Clean up the tuple result\n    quote = match[0] or match[2]\n    if quote:\n        print(f'  {quote}')",
    hint: "Use backreferences to handle escaped quotes"
  },
  {
    Id: "py_regex_25",
    topicId: "py_regex",
    question: "Write a regex to validate a license plate (2 letters, 2 digits, 2 letters).",
    mathSolution: "Format: LLDDLL where L is letter, D is digit",
    codeSolution: "import re\n\nplates = ['AB12CD', 'XY99ZT', 'A123BC', 'AB1CDE', '12ABCD']\n\npattern = r'^[A-Z]{2}\\d{2}[A-Z]{2}$'\n\nfor plate in plates:\n    if re.match(pattern, plate):\n        print(f'Valid: {plate}')\n    else:\n        print(f'Invalid: {plate}')",
    hint: "Use [A-Z] for letters, \\d for digits"
  },
  {
    Id: "py_regex_26",
    topicId: "py_regex",
    question: "Write a regex to extract all words that contain repeated letters.",
    mathSolution: "Words with at least one character repeated consecutively",
    codeSolution: "import re\n\ntext = \"hello world bookkeeper apple tree butter\"\n\npattern = r'\\b\\w*(\\w)\\1\\w*\\b'\n\nwords = re.findall(pattern, text)\nprint('Words with repeated letters:')\n# Findall returns capturing groups, need to find whole words\nmatches = re.finditer(pattern, text)\nfor match in matches:\n    print(f'  {match.group()}')",
    hint: "Use backreference \\1 to match repeated character"
  },
  {
    Id: "py_regex_27",
    topicId: "py_regex",
    question: "Write a regex to validate a password with no consecutive repeated characters.",
    mathSolution: "Password with no same character appearing twice in a row",
    codeSolution: "import re\n\npasswords = ['abc123', 'aabc123', 'pass123', 'abcc123', 'no_repeats']\n\npattern = r'^(?!.*(.)\\1).*$'\n\nfor pwd in passwords:\n    if re.match(pattern, pwd):\n        print(f'Valid (no repeats): {pwd}')\n    else:\n        print(f'Invalid (has repeats): {pwd}')",
    hint: "Use negative lookahead (?!.*(.)\\1) to check for repeats"
  },
  {
    Id: "py_regex_28",
    topicId: "py_regex",
    question: "Write a regex to extract all file extensions from filenames.",
    mathSolution: "Extension after last dot in filename",
    codeSolution: "import re\n\nfiles = ['document.txt', 'image.jpg', 'script.py', 'archive.tar.gz', 'no_extension', '.hidden']\n\npattern = r'\\.([^.]+)$'\n\nfor file in files:\n    match = re.search(pattern, file)\n    if match:\n        print(f'{file} -> extension: {match.group(1)}')\n    else:\n        print(f'{file} -> no extension')",
    hint: "Use [^.]+ for characters that are not dots"
  },
  {
    Id: "py_regex_29",
    topicId: "py_regex",
    question: "Write a regex to validate a complex password with at least 3 of 4 character types.",
    mathSolution: "Password must meet at least 3 of: uppercase, lowercase, digit, special",
    codeSolution: "import re\n\npasswords = ['Pass123', 'password', 'PASSWORD123', 'Pass!', 'P@ssw0rd']\n\ndef validate_password(pwd):\n    checks = [\n        bool(re.search(r'[A-Z]', pwd)),\n        bool(re.search(r'[a-z]', pwd)),\n        bool(re.search(r'\\d', pwd)),\n        bool(re.search(r'[!@#$%^&*(),.?\":{}|<>]', pwd))\n    ]\n    return sum(checks) >= 3 and len(pwd) >= 8\n\nfor pwd in passwords:\n    if validate_password(pwd):\n        print(f'Valid: {pwd}')\n    else:\n        print(f'Invalid: {pwd}')",
    hint: "Count how many character types are present"
  },
  {
    Id: "py_regex_30",
    topicId: "py_regex",
    question: "Write a regex to extract all HTML attributes and their values.",
    mathSolution: "Attributes in form name=\"value\" or name='value'",
    codeSolution: "import re\n\nhtml = '<div class=\"container\" id=\"main\" data-type=\"test\">'\n\npattern = r'(\\w+)=[\"\\']([^\"\\']*)[\"\\']'\n\nattributes = re.findall(pattern, html)\nprint('HTML attributes:')\nfor name, value in attributes:\n    print(f'  {name} = \"{value}\"')",
    hint: "Capture attribute name and value in groups"
  },
  {
    Id: "py_regex_31",
    topicId: "py_regex",
    question: "Write a regex to validate a binary number (only 0s and 1s).",
    mathSolution: "Binary number: only digits 0 and 1",
    codeSolution: "import re\n\nbinaries = ['101010', '1111', '10201', '0101', '1234']\n\npattern = r'^[01]+$'\n\nfor b in binaries:\n    if re.match(pattern, b):\n        print(f'Valid binary: {b}')\n    else:\n        print(f'Invalid binary: {b}')",
    hint: "Use [01] character class"
  },
  {
    Id: "py_regex_32",
    topicId: "py_regex",
    question: "Write a regex to extract all words that are palindromes.",
    mathSolution: "Palindromes read the same forwards and backwards",
    codeSolution: "import re\n\ntext = \"madam racecar hello level world noon\"\n\npattern = r'\\b(\\w+)\\b'\n\ndef is_palindrome(word):\n    return word == word[::-1]\n\nwords = re.findall(pattern, text)\nprint('Palindromes found:')\nfor word in words:\n    if is_palindrome(word) and len(word) > 1:\n        print(f'  {word}')",
    hint: "Use word[::-1] to reverse string"
  },
  {
    Id: "py_regex_33",
    topicId: "py_regex",
    question: "Write a regex to validate a UUID (8-4-4-4-12 hex digits).",
    mathSolution: "UUID: 8 hex, hyphen, 4 hex, hyphen, 4 hex, hyphen, 4 hex, hyphen, 12 hex",
    codeSolution: "import re\n\nuuids = ['123e4567-e89b-12d3-a456-426614174000', 'invalid-uuid', '123e4567-e89b-12d3-a456-42661417400']\n\npattern = r'^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'\n\nfor uuid in uuids:\n    if re.match(pattern, uuid, re.I):\n        print(f'Valid UUID: {uuid}')\n    else:\n        print(f'Invalid UUID: {uuid}')",
    hint: "Use re.I flag for case-insensitive matching"
  },
  {
    Id: "py_regex_34",
    topicId: "py_regex",
    question: "Write a regex to extract all numbers in scientific notation (e.g., 1.23e-4).",
    mathSolution: "Scientific: mantissa, e/E, optional sign, exponent",
    codeSolution: "import re\n\ntext = \"Values: 1.23e-4, 5.67E+10, 2.998e8, 6.022e23, invalid e5\"\n\npattern = r'-?\\d+\\.?\\d*[eE][+-]?\\d+'\n\nnumbers = re.findall(pattern, text)\nprint('Scientific notation numbers:')\nfor num in numbers:\n    print(f'  {num}')",
    hint: "Match optional sign, digits, optional dot, digits, e/E, optional sign, digits"
  },
  {
    Id: "py_regex_35",
    topicId: "py_regex",
    question: "Write a regex to validate a complex number format (a+bj or a-bj).",
    mathSolution: "Complex: real part, sign, imaginary part with j",
    codeSolution: "import re\n\ncomplex_nums = ['3+4j', '5-2j', '-1.5+2.5j', '2j', '3+j', '4+5i']\n\npattern = r'^-?\\d+\\.?\\d*[+-]\\d+\\.?\\d*j$|^-?\\d+\\.?\\d*j$'\n\nfor num in complex_nums:\n    if re.match(pattern, num):\n        print(f'Valid complex: {num}')\n    else:\n        print(f'Invalid complex: {num}')",
    hint: "Handle both a+bj form and just bj form"
  },
  {
    Id: "py_regex_36",
    topicId: "py_regex",
    question: "Write a regex to extract all function calls from Python code.",
    mathSolution: "Function calls: name followed by parentheses",
    codeSolution: "import re\n\ncode = \"\"\"\ndef hello():\n    print('Hello')\n    result = calculate(10, 20)\n    process_data(data, verbose=True)\n\"\"\"\n\npattern = r'([a-zA-Z_][a-zA-Z0-9_]*)\\('\n\nfunctions = re.findall(pattern, code)\nprint('Function calls found:')\nfor func in set(functions):  # Use set to remove duplicates\n    if func not in ['def']:  # Filter out def keyword\n        print(f'  {func}()')",
    hint: "Match identifier followed by ("
  },
  {
    Id: "py_regex_37",
    topicId: "py_regex",
    question: "Write a regex to validate a time duration (HH:MM:SS).",
    mathSolution: "Duration: hours 00-99, minutes 00-59, seconds 00-59",
    codeSolution: "import re\n\ndurations = ['12:30:45', '99:59:59', '24:60:00', '00:00:00', '100:30:30']\n\npattern = r'^\\d{2}:[0-5][0-9]:[0-5][0-9]$'\n\nfor d in durations:\n    if re.match(pattern, d):\n        print(f'Valid duration: {d}')\n    else:\n        print(f'Invalid duration: {d}')",
    hint: "Hours can be any two digits, minutes and seconds limited to 00-59"
  },
  {
    Id: "py_regex_38",
    topicId: "py_regex",
    question: "Write a regex to extract all email addresses from a text, handling multiple formats.",
    mathSolution: "Comprehensive email pattern handling common formats",
    codeSolution: "import re\n\ntext = \"Contact us at info@example.com, support@company.co.uk, or john.doe@sub.domain.org. Invalid: @missing.com\"\n\npattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'\n\nemails = re.findall(pattern, text)\nprint('Email addresses found:')\nfor email in emails:\n    print(f'  {email}')",
    hint: "Use character classes for allowed characters in username and domain"
  },
  {
    Id: "py_regex_39",
    topicId: "py_regex",
    question: "Write a regex to validate a phone number with country code (+1 123-456-7890).",
    mathSolution: "International phone: optional +country code, then number",
    codeSolution: "import re\n\nphones = ['+1 123-456-7890', '+44 20 7946 0958', '123-456-7890', '+1 (123) 456-7890']\n\npattern = r'^\\+?\\d{1,3}[-.\\s]?\\(?\\d{1,4}\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$'\n\nfor phone in phones:\n    if re.match(pattern, phone):\n        print(f'Valid: {phone}')\n    else:\n        print(f'Invalid: {phone}')",
    hint: "Use ? for optional parts, character class for separators"
  },
  {
    Id: "py_regex_40",
    topicId: "py_regex",
    question: "Write a regex to extract all HTML comments from a document.",
    mathSolution: "HTML comments: <!-- comment -->",
    codeSolution: "import re\n\nhtml = \"\"\"\n<!-- Main content -->\n<div>Hello</div>\n<!-- TODO: Fix this -->\n<!-- Multi-line\ncomment -->\n\"\"\"\n\npattern = r'<!--(.*?)-->'\n\ncomments = re.findall(pattern, html, re.DOTALL)\nprint('HTML comments found:')\nfor comment in comments:\n    print(f'  {comment.strip()}')",
    hint: "Use non-greedy .*? to match minimal, re.DOTALL for multiline"
  },
  {
    Id: "py_regex_41",
    topicId: "py_regex",
    question: "Write a regex to validate a Bitcoin address (starts with 1 or 3, 26-35 alphanumeric chars).",
    mathSolution: "Bitcoin: starts with 1 or 3, alphanumeric except 0, O, I, l",
    codeSolution: "import re\n\nbtc_addresses = ['1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', '3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy', 'invalid_address']\n\npattern = r'^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$'\n\nfor addr in btc_addresses:\n    if re.match(pattern, addr):\n        print(f'Valid Bitcoin address: {addr}')\n    else:\n        print(f'Invalid Bitcoin address: {addr}')",
    hint: "Exclude confusing characters 0, O, I, l using character class subtraction"
  },
  {
    Id: "py_regex_42",
    topicId: "py_regex",
    question: "Write a regex to extract all version numbers (semver: major.minor.patch).",
    mathSolution: "Semantic version: x.y.z where x,y,z are numbers",
    codeSolution: "import re\n\ntext = \"Version 1.2.3, v2.0.0, 10.20.30, invalid 1.2, 1.2.3.4\"\n\npattern = r'\\b\\d+\\.\\d+\\.\\d+\\b'\n\nversions = re.findall(pattern, text)\nprint('Version numbers found:')\nfor version in versions:\n    print(f'  {version}')",
    hint: "Use \\b for word boundaries, \\. for literal dot"
  },
  {
    Id: "py_regex_43",
    topicId: "py_regex",
    question: "Write a regex to validate a JWT token (header.payload.signature base64url).",
    mathSolution: "JWT: three base64url parts separated by dots",
    codeSolution: "import re\n\njwts = ['eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', 'invalid.jwt']\n\npattern = r'^[A-Za-z0-9-_]+\\.[A-Za-z0-9-_]+\\.[A-Za-z0-9-_]+$'\n\nfor jwt in jwts:\n    if re.match(pattern, jwt):\n        print(f'Valid JWT format: {jwt[:30]}...')\n    else:\n        print(f'Invalid JWT: {jwt}')",
    hint: "Base64url uses A-Za-z0-9-_ (no + or /)"
  },
  {
    Id: "py_regex_44",
    topicId: "py_regex",
    question: "Write a regex to extract all Python variable assignments.",
    mathSolution: "Variable = value pattern, handling different value types",
    codeSolution: "import re\n\ncode = \"\"\"\nx = 10\nname = 'Alice'\nis_active = True\nvalues = [1, 2, 3]\nimport os  # not an assignment\n\"\"\"\n\npattern = r'^([a-zA-Z_][a-zA-Z0-9_]*)\\s*=\\s*(.+)$'\n\nassignments = re.findall(pattern, code, re.MULTILINE)\nprint('Variable assignments:')\nfor var, value in assignments:\n    print(f'  {var} = {value}')",
    hint: "Use re.MULTILINE flag to match line start"
  },
  {
    Id: "py_regex_45",
    topicId: "py_regex",
    question: "Write a regex to validate an ISBN-10 or ISBN-13 number.",
    mathSolution: "ISBN-10: 10 digits, last may be X; ISBN-13: 13 digits",
    codeSolution: "import re\n\nisbns = ['0-306-40615-2', '978-3-16-148410-0', '123456789X', '12345678901']\n\npattern = r'^(?:\\d[- ]?){9}[\\dX]$|^(?:\\d[- ]?){13}$'\n\nfor isbn in isbns:\n    if re.match(pattern, isbn):\n        print(f'Valid ISBN format: {isbn}')\n    else:\n        print(f'Invalid ISBN: {isbn}')",
    hint: "Use alternation for ISBN-10 and ISBN-13 patterns"
  },
  {
    Id: "py_regex_46",
    topicId: "py_regex",
    question: "Write a regex to extract all LaTeX commands from a document.",
    mathSolution: "LaTeX commands: \command[optional]{required}",
    codeSolution: "import re\n\ntex = \"\"\"\\section{Introduction}\n\\textbf{Hello} \\emph{World}\n\\begin{equation}\nx^2 + y^2 = z^2\n\\end{equation}\n\"\"\"\n\npattern = r'\\\\([a-zA-Z]+)(?:\\[[^\\]]*\\])?(?:\\{[^\\}]*\\})?'\n\ncommands = re.findall(pattern, tex)\nprint('LaTeX commands found:')\nfor cmd in commands:\n    print(f'  \\{cmd}')",
    hint: "Match backslash followed by word, then optional arguments"
  },
  {
    Id: "py_regex_47",
    topicId: "py_regex",
    question: "Write a regex to validate a military time (0000 to 2359).",
    mathSolution: "Military time: HHMM, 00-23 hours, 00-59 minutes",
    codeSolution: "import re\n\ntimes = ['0000', '2359', '2400', '1234', '2500', '1299']\n\npattern = r'^([01][0-9]|2[0-3])[0-5][0-9]$'\n\nfor t in times:\n    if re.match(pattern, t):\n        print(f'Valid military time: {t}')\n    else:\n        print(f'Invalid military time: {t}')",
    hint: "First two digits: 00-23, last two: 00-59"
  },
  {
    Id: "py_regex_48",
    topicId: "py_regex",
    question: "Write a regex to extract all Markdown links [text](url).",
    mathSolution: "Markdown link: [link text](url)",
    codeSolution: "import re\n\nmarkdown = \"Check [Google](https://google.com) and [GitHub](https://github.com). Also [link](relative.html)\"\n\npattern = r'\\[([^\\]]+)\\]\\(([^\\)]+)\\)'\n\nlinks = re.findall(pattern, markdown)\nprint('Markdown links found:')\nfor text, url in links:\n    print(f'  {text} -> {url}')",
    hint: "Capture text inside [] and URL inside ()"
  },
  {
    Id: "py_regex_49",
    topicId: "py_regex",
    question: "Write a regex to validate a container ID (64 hex characters).",
    mathSolution: "Container ID: exactly 64 hex digits",
    codeSolution: "import re\n\ncontainer_ids = ['abc123' * 10 + 'def',  # 64 chars? Let's test\n                 '1234567890abcdef' * 4,  # 64 hex\n                 'invalid_id']\n\n# Create a 64-char hex string for testing\ntest_id = 'a' * 64\ncontainer_ids.append(test_id)\n\npattern = r'^[a-f0-9]{64}$'\n\nfor cid in container_ids:\n    if re.match(pattern, cid, re.I):\n        print(f'Valid container ID: {cid[:20]}...')\n    else:\n        print(f'Invalid container ID: {str(cid)[:20]}...')",
    hint: "Use {64} quantifier for exactly 64 hex characters"
  },
  {
    Id: "py_regex_50",
    topicId: "py_regex",
    question: "Write a regex to extract all Python docstrings (triple-quoted strings).",
    mathSolution: "Docstrings are triple-quoted strings (''' or \"\"\")",
    codeSolution: "import re\n\ncode = \"\"\"\n'''Module docstring'''\n\ndef test():\n    \"\"\"Function docstring\"\"\"\n    pass\n\nclass MyClass:\n    '''Class docstring'''\n    def method(self):\n        \"\"\"Method docstring\"\"\"\n        pass\n\"\"\"\n\npattern = r'\"\"\"(.*?)\"\"\"|\\'\\'\\'(.*?)\\'\\'\\''\n\ndocstrings = re.findall(pattern, code, re.DOTALL)\nprint('Docstrings found:')\nfor ds in docstrings:\n    # Clean up the tuple result\n    doc = ds[0] or ds[1]\n    if doc.strip():\n        print(f'  {doc.strip()}')",
    hint: "Use non-greedy .*? with re.DOTALL for multiline"
  }
);